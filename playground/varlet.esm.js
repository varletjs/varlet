import { onMounted as bo, nextTick as Ye, onActivated as Lo, computed as B, ref as w, watch as fe, isRef as Jg, onBeforeUnmount as sa, onDeactivated as yt, onUnmounted as Jt, getCurrentInstance as _o, inject as Ys, unref as yf, reactive as en, provide as Ws, isVNode as Qg, defineComponent as ee, h as Qt, Comment as _g, Fragment as Ae, createApp as xg, onBeforeMount as eb, createVNode as X, Teleport as lo, Transition as xe, withDirectives as Ne, vShow as eo, mergeProps as je, createElementBlock as P, openBlock as g, normalizeClass as p, createBlock as we, resolveDynamicComponent as wt, normalizeStyle as Z, resolveComponent as _, resolveDirective as We, createCommentVNode as G, createElementVNode as R, toDisplayString as le, withCtx as ue, renderSlot as H, renderList as qe, createTextVNode as De, onUpdated as _t, normalizeProps as Ko, guardReactiveProps as ua, createSlots as Xo, withModifiers as Rn, vModelText as nb, withKeys as Ru, TransitionGroup as ob } from "vue";
function Ks(e) {
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
const tb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ks
}, Symbol.toStringTag, { value: "Module" }));
var qs = Object.defineProperty, rb = Object.defineProperties, ab = Object.getOwnPropertyDescriptor, ib = Object.getOwnPropertyDescriptors, lb = Object.getOwnPropertyNames, Lu = Object.getOwnPropertySymbols, wf = Object.prototype.hasOwnProperty, sb = Object.prototype.propertyIsEnumerable, Fu = (e, n, o) => n in e ? qs(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, kf = (e, n) => {
  for (var o in n || (n = {}))
    wf.call(n, o) && Fu(e, o, n[o]);
  if (Lu)
    for (var o of Lu(n))
      sb.call(n, o) && Fu(e, o, n[o]);
  return e;
}, $f = (e, n) => rb(e, ib(n)), Cf = (e, n) => {
  for (var o in n)
    qs(e, o, { get: n[o], enumerable: !0 });
}, ub = (e, n, o, t) => {
  if (n && typeof n == "object" || typeof n == "function")
    for (let r of lb(n))
      !wf.call(e, r) && r !== o && qs(e, r, { get: () => n[r], enumerable: !(t = ab(n, r)) || t.enumerable });
  return e;
}, Sf = (e, n, o) => (ub(e, n, "default"), o), Pf = {};
Cf(Pf, {
  NOOP: () => Jb,
  assert: () => Af,
  at: () => xt,
  baseRound: () => va,
  call: () => $,
  camelize: () => da,
  cancelAnimationFrame: () => ut,
  ceil: () => s0,
  chunk: () => Pb,
  clamp: () => $n,
  clampArrayRange: () => Of,
  classes: () => Js,
  cloneDeep: () => Qb,
  cloneDeepWith: () => qf,
  copyText: () => Lf,
  createNamespaceFn: () => _s,
  createStorage: () => fa,
  debounce: () => Zb,
  delay: () => cb,
  difference: () => Tb,
  differenceWith: () => Wr,
  doubleRaf: () => bn,
  download: () => Kf,
  ensurePrefix: () => Fb,
  ensureSuffix: () => Ub,
  find: () => Mf,
  floor: () => cl,
  genNumberKey: () => Sb,
  genStringKey: () => jb,
  getAllParentScroller: () => Uf,
  getGlobalThis: () => er,
  getParentScroller: () => xs,
  getRect: () => nn,
  getScrollLeft: () => or,
  getScrollTop: () => ho,
  getStyle: () => Zn,
  groupBy: () => Db,
  hasOwn: () => Go,
  inBrowser: () => oo,
  inMobile: () => Nt,
  inViewport: () => eu,
  intersection: () => Bb,
  intersectionWith: () => Vf,
  isArray: () => Fe,
  isArrayBuffer: () => Mr,
  isBlob: () => wb,
  isBoolean: () => nr,
  isDOMException: () => Rr,
  isDataView: () => Nr,
  isDate: () => Vr,
  isEmpty: () => Kn,
  isEmptyPlainObject: () => $b,
  isEqual: () => pb,
  isEqualWith: () => Tf,
  isError: () => Hr,
  isFile: () => yb,
  isFunction: () => mn,
  isMap: () => Lr,
  isNonEmptyArray: () => vb,
  isNullish: () => mb,
  isNumber: () => En,
  isNumeric: () => Gs,
  isObject: () => mo,
  isPlainObject: () => Ln,
  isPrimitive: () => kb,
  isPromise: () => hb,
  isRegExp: () => Ur,
  isSet: () => Fr,
  isString: () => sn,
  isSymbol: () => gb,
  isTruthy: () => bb,
  isTypedArray: () => jr,
  isWeakMap: () => Bf,
  isWeakSet: () => Df,
  isWindow: () => ca,
  kebabCase: () => Qs,
  localStorage: () => Yf,
  lowerFirst: () => Yb,
  mapObject: () => Rb,
  maxBy: () => n0,
  mean: () => r0,
  meanBy: () => a0,
  merge: () => _b,
  mergeWith: () => Xf,
  minBy: () => o0,
  mitt: () => Ks,
  motion: () => nu,
  normalizeToArray: () => fo,
  objectToString: () => Ef,
  omit: () => Nb,
  omitBy: () => Vb,
  once: () => Gb,
  pascalCase: () => Ff,
  pick: () => Ab,
  pickBy: () => Mb,
  prettyJSONObject: () => Hf,
  preventDefault: () => Me,
  promiseWithResolvers: () => Lb,
  raf: () => po,
  randomColor: () => Kb,
  randomNumber: () => zf,
  randomString: () => qb,
  removeArrayBlank: () => Nf,
  removeArrayEmpty: () => Eb,
  removeItem: () => Io,
  requestAnimationFrame: () => Ao,
  round: () => l0,
  sample: () => i0,
  sessionStorage: () => jf,
  shuffle: () => zb,
  slash: () => Xb,
  sum: () => Zf,
  sumBy: () => Jf,
  sumHash: () => t0,
  supportTouch: () => If,
  throttle: () => pa,
  times: () => db,
  toArrayBuffer: () => xb,
  toDataURL: () => Gf,
  toNumber: () => W,
  toRawType: () => Xe,
  toText: () => e0,
  toTypeString: () => Xs,
  toggleItem: () => Ob,
  tryParseJSON: () => Wf,
  uniq: () => ul,
  uniqBy: () => Yr,
  upperFirst: () => Wb,
  xor: () => Ib,
  xorWith: () => Rf
});
function xt(e, n) {
  if (e.length)
    return n < 0 && (n += e.length), e[n];
}
function $n(e, n, o) {
  return Math.min(o, Math.max(n, e));
}
function Of(e, n) {
  return $n(e, 0, n.length - 1);
}
function cb(e) {
  return new Promise((n) => {
    setTimeout(n, e);
  });
}
function zf(e = 0, n = 100) {
  return Math.floor(Math.random() * (n - e + 1)) + e;
}
function db(e, n) {
  return Array.from({ length: e }, (o, t) => n(t));
}
function oo() {
  return typeof window < "u";
}
function er() {
  return typeof globalThis < "u" ? globalThis : oo() ? window : typeof global < "u" ? global : self;
}
var { hasOwnProperty: fb } = Object.prototype;
function Go(e, n) {
  return fb.call(e, n);
}
function Nt() {
  return oo() && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
function Fe(e) {
  return Array.isArray(e);
}
var Ef = Object.prototype.toString;
function Xs(e) {
  return Ef.call(e);
}
function Xe(e) {
  return Xs(e).slice(8, -1);
}
function Mr(e) {
  return Xe(e) === "ArrayBuffer";
}
function nr(e) {
  return typeof e == "boolean";
}
function Nr(e) {
  return Xe(e) === "DataView";
}
function Vr(e) {
  return Xe(e) === "Date";
}
function Rr(e) {
  return Xe(e) === "DOMException";
}
function Kn(e) {
  return e == null || e === "" || Fe(e) && !e.length;
}
function Lr(e) {
  return Xe(e) === "Map";
}
function Ln(e) {
  return Xe(e) === "Object";
}
function Fr(e) {
  return Xe(e) === "Set";
}
function mo(e) {
  return typeof e == "object" && e !== null;
}
function Ur(e) {
  return Xe(e) === "RegExp";
}
function Hr(e) {
  return Xe(e) === "Error";
}
function jr(e) {
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
  ].includes(Xe(e));
}
function Tf(e, n, o) {
  const t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  function a(i, l, s, u) {
    if (o(i, l) === !0 || i === l || i !== i && l !== l)
      return !0;
    if (!mo(i) || !mo(l))
      return i === l;
    if (i.constructor !== l.constructor)
      return !1;
    if (Xe(i) === "String" && Xe(l) === "String" || Xe(i) === "Number" && Xe(l) === "Number" || Xe(i) === "Boolean" && Xe(l) === "Boolean" || Xe(i) === "BigInt" && Xe(l) === "BigInt" || Xe(i) === "Symbol" && Xe(l) === "Symbol")
      return i.valueOf() === l.valueOf();
    if (Vr(i) && Vr(l))
      return i.getTime() === l.getTime();
    if (Ur(i) && Ur(l))
      return i.source === l.source && i.flags === l.flags;
    if (Hr(i) && Hr(l))
      return i.name === l.name && i.message === l.message && i.cause === l.cause;
    if (Rr(i) && Rr(l))
      return i.name === l.name && i.message === l.message;
    if (jr(i) && jr(l) || Nr(i) && Nr(l)) {
      if (i.byteLength !== l.byteLength)
        return !1;
      const d = new Uint8Array(i.buffer), f = new Uint8Array(l.buffer);
      return d.every((v, h) => v === f[h]);
    }
    if (Mr(i) && Mr(l)) {
      if (i.byteLength !== l.byteLength)
        return !1;
      const d = new Uint8Array(i), f = new Uint8Array(l);
      return d.every((v, h) => v === f[h]);
    }
    if (s.get(i) === l && u.get(l) === i)
      return !0;
    if (s.set(i, l), u.set(l, i), Lr(i) && Lr(l) || Fr(i) && Fr(l)) {
      if (i.size !== l.size)
        return !1;
      const d = [...i], f = [...l], v = d.every((h, m) => a(h, f[m], s, u));
      return s.delete(i), u.delete(l), v;
    }
    if (Fe(i) && Fe(l)) {
      if (i.length !== l.length)
        return !1;
      const d = i.every((f, v) => a(f, l[v], s, u));
      return s.delete(i), u.delete(l), d;
    }
    if (Ln(i) && Ln(l)) {
      const d = [...Object.keys(i), ...Object.getOwnPropertySymbols(i)], f = [...Object.keys(l), ...Object.getOwnPropertySymbols(l)];
      if (d.length !== f.length)
        return !1;
      const v = d.every(
        (h) => a(i[h], l[h], s, u)
      );
      return s.delete(i), u.delete(l), v;
    }
    return !1;
  }
  return a(e, n, t, r);
}
function pb(e, n) {
  return Tf(e, n, () => {
  });
}
function mn(e) {
  return typeof e == "function";
}
function vb(e) {
  return Fe(e) && !!e.length;
}
function mb(e) {
  return e == null;
}
function En(e) {
  return typeof e == "number";
}
function sn(e) {
  return typeof e == "string";
}
function Gs(e) {
  return En(e) || sn(e) && /^[-+]?\d+$/.test(e);
}
function hb(e) {
  return mo(e) && mn(e.then) && mn(e.catch);
}
function gb(e) {
  return typeof e == "symbol";
}
function bb(e) {
  return !!e;
}
function Bf(e) {
  return Xe(e) === "WeakMap";
}
function Df(e) {
  return Xe(e) === "WeakSet";
}
function ca(e) {
  return e === window;
}
function If() {
  return oo() && "ontouchstart" in window;
}
function yb(e) {
  return Xe(e) === "File";
}
function wb(e) {
  return Xe(e) === "Blob";
}
function kb(e) {
  return e == null || typeof e != "object" && typeof e != "function";
}
function $b(e) {
  return Ln(e) && Object.keys(e).length === 0 && Object.getOwnPropertySymbols(e).length === 0;
}
function Af(e, n) {
  if (!e)
    throw new Error(n);
}
function W(e) {
  return e == null ? 0 : sn(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : nr(e) ? Number(e) : e;
}
var Cb = 0;
function Sb() {
  return Cb++;
}
function Pb(e, n = 1) {
  n = $n(n, 1, e.length);
  const o = [];
  let t = 0;
  for (; t < e.length; )
    o.push(e.slice(t, t + n)), t += n;
  return o;
}
function Io(e, n) {
  if (e.length) {
    const o = e.indexOf(n);
    if (o > -1)
      return e.splice(o, 1);
  }
}
function Ob(e, n) {
  return e.includes(n) ? Io(e, n) : e.push(n), e;
}
function ul(e) {
  return [...new Set(e)];
}
function Yr(e, n) {
  return e.reduce((o, t) => (o.findIndex((a) => n(t, a)) === -1 && o.push(t), o), []);
}
function Mf(e, n, o = "start") {
  let t = o === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && t >= 0 && t <= e.length - 1; ) {
    if (n(e[t], t, e))
      return [e[t], t];
    o === "start" ? t++ : t--;
  }
  return [null, -1];
}
function zb(e) {
  for (let n = e.length - 1; n > 0; n--) {
    const o = Math.floor(Math.random() * (n + 1));
    [e[n], e[o]] = [e[o], e[n]];
  }
  return e;
}
function Nf(e) {
  return e.filter((n) => n != null);
}
function Eb(e) {
  return e.filter((n) => n != null && n !== "");
}
function fo(e) {
  return Fe(e) ? e : [e];
}
function Wr(e, ...n) {
  const o = xt(n, -1), t = n.slice(0, -1).reduce((r, a) => [...r, ...a], []);
  return e.filter((r) => !t.some((a) => o(r, a)));
}
function Tb(e, ...n) {
  return Wr(e, ...n, (o, t) => o === t);
}
function Vf(...e) {
  const n = xt(e, -1), o = e.slice(0, -1);
  if (o.length === 0)
    return [];
  if (o.length === 1)
    return Yr(o[0], n);
  function t(r, a) {
    return r.filter((i) => a.some((l) => n(i, l)));
  }
  return Yr(
    o.reduce((r, a) => t(r, a)),
    n
  );
}
function Bb(...e) {
  return Vf(...e, (n, o) => n === o);
}
function Db(e, n) {
  return e.reduce(
    (o, t) => {
      var r;
      const a = n(t);
      return ((r = o[a]) != null ? r : o[a] = []).push(t), o;
    },
    {}
  );
}
function Rf(...e) {
  const n = xt(e, -1), o = e.slice(0, -1);
  return Yr(
    o.reduce((t, r) => [...Wr(t, r, n), ...Wr(r, t, n)]),
    n
  );
}
function Ib(...e) {
  return Rf(...e, (n, o) => n === o);
}
function Ab(e, n) {
  return n.reduce(
    (o, t) => (o[t] = e[t], o),
    {}
  );
}
function Mb(e, n) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)].reduce((t, r) => {
    const a = e[r];
    return n(a, r) && (t[r] = a), t;
  }, {});
}
function Nb(e, n) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)].reduce(
    (t, r) => (n.includes(r) || (t[r] = e[r]), t),
    {}
  );
}
function Vb(e, n) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)].reduce((t, r) => {
    const a = e[r];
    return n(a, r) || (t[r] = a), t;
  }, {});
}
function Rb(e, n) {
  return Object.entries(e).reduce(
    (o, [t, r]) => {
      const a = n(t, r);
      if (Fe(a)) {
        const [i, l] = a;
        o[i] = l;
      }
      return o;
    },
    {}
  );
}
function Lb() {
  let e, n;
  return { promise: new Promise((t, r) => {
    e = t, n = r;
  }), resolve: e, reject: n };
}
var Zs = {};
Cf(Zs, {
  cancelAnimationFrame: () => ut,
  classes: () => Js,
  copyText: () => Lf,
  createNamespaceFn: () => _s,
  createStorage: () => fa,
  doubleRaf: () => bn,
  download: () => Kf,
  getAllParentScroller: () => Uf,
  getParentScroller: () => xs,
  getRect: () => nn,
  getScrollLeft: () => or,
  getScrollTop: () => ho,
  getStyle: () => Zn,
  inViewport: () => eu,
  localStorage: () => Yf,
  mitt: () => Ks,
  motion: () => nu,
  prettyJSONObject: () => Hf,
  preventDefault: () => Me,
  raf: () => po,
  requestAnimationFrame: () => Ao,
  sessionStorage: () => jf,
  tryParseJSON: () => Wf
});
function ut(e) {
  const n = er();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Js(...e) {
  return e.map((n) => {
    if (Fe(n)) {
      const [o, t, r = null] = n;
      return o ? t : r;
    }
    return n;
  });
}
function Lf(e) {
  if (!e)
    return;
  const n = document.createElement("textarea");
  n.value = e, n.style.position = "fixed", n.style.opacity = "0", document.body.appendChild(n), n.select(), document.execCommand("copy"), document.body.removeChild(n);
}
function da(e) {
  return e = e.replace(/-(\w)/g, (n, o) => o.toUpperCase()), e.replace(e.charAt(0), e.charAt(0).toLowerCase());
}
function Fb(e, n) {
  return e.startsWith(n) ? e : n + e;
}
function Ub(e, n) {
  return e.endsWith(n) ? e : e + n;
}
var Hb = 0;
function jb() {
  return `generated-key-${Hb++}`;
}
function Qs(e) {
  return e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase();
}
function Ff(e) {
  return da(e).replace(e.charAt(0), e.charAt(0).toUpperCase());
}
function Yb(e) {
  return e.charAt(0).toLowerCase() + e.slice(1);
}
function Wb(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Kb() {
  const e = "0123456789abcdef";
  let n = "#";
  for (let o = 0; o < 6; o++)
    n += e[Math.floor(Math.random() * 16)];
  return n;
}
function qb(e = 10) {
  let n = o();
  for (; n.length < e; )
    n += o();
  function o() {
    return Math.random().toString(36).slice(2);
  }
  return n.slice(0, e);
}
function Xb(e) {
  return e.startsWith("\\\\?\\") ? e : e.replace(/\\/g, "/");
}
function _s(e) {
  return (n) => {
    const o = `${e}-${n}`, t = (r) => r ? r[0] === "$" ? r.replace("$", e) : r.startsWith("--") ? `${o}${r}` : `${o}__${r}` : o;
    return {
      name: Ff(o),
      n: t,
      classes: Js
    };
  };
}
function Ao(e) {
  const n = er();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e);
}
function bn() {
  return new Promise((e) => {
    Ao(() => {
      Ao(e);
    });
  });
}
function Zn(e) {
  return window.getComputedStyle(e);
}
function xs(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const o = /(scroll|auto)/, { overflowY: t, overflow: r } = Zn(n);
    if (o.test(t) || o.test(r))
      return n;
  }
  return window;
}
function Uf(e) {
  const n = [];
  let o = e;
  for (; !ca(o); )
    o = xs(o), n.push(o);
  return n;
}
function nn(e) {
  if (ca(e)) {
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
    return $f(kf({}, t), {
      toJSON: () => t
    });
  }
  return e.getBoundingClientRect();
}
function or(e) {
  const n = "scrollLeft" in e ? e.scrollLeft : e.scrollX;
  return Math.max(n, 0);
}
function ho(e) {
  const n = "scrollTop" in e ? e.scrollTop : e.scrollY;
  return Math.max(n, 0);
}
function eu(e) {
  const { top: n, bottom: o, left: t, right: r } = nn(e), { width: a, height: i } = nn(window), l = t <= a && r >= 0, s = n <= i && o >= 0;
  return l && s;
}
function Hf(e) {
  return JSON.stringify(e, null, 2);
}
function Me(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function po() {
  return new Promise((e) => {
    Ao(e);
  });
}
function fa(e) {
  return $f(kf({}, e), {
    set(n, o) {
      o != null && (sn(o) || (o = JSON.stringify(o)), e.setItem(n, o));
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
var jf = fa(er().sessionStorage), Yf = fa(er().localStorage);
function Wf(e) {
  try {
    return JSON.parse(e);
  } catch {
    return;
  }
}
function Kf(e, n = "file") {
  const o = document.createElement("a");
  o.style.display = "none", o.href = sn(e) ? e : URL.createObjectURL(e), o.download = n, document.body.appendChild(o), o.click(), URL.revokeObjectURL(o.href), document.body.removeChild(o);
}
function nu(e) {
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
  function h() {
    if (l === "running" || l === "finished")
      return;
    k("running");
    const b = performance.now();
    d = d ?? b, v += f != null ? b - f : 0, f = void 0, S();
    function S() {
      c = Ao(() => {
        const O = performance.now() - d - v, D = $n(O / t, 0, 1);
        if (s = u * a(D) + n, D >= 1) {
          k("finished"), r({ value: o, done: !0 });
          return;
        }
        r({ value: s, done: !1 }), S();
      });
    }
  }
  function m() {
    l === "running" && (ut(c), k("paused"), f = performance.now());
  }
  function y() {
    ut(c), k("pending"), s = n, c = void 0, d = void 0, f = void 0, v = 0;
  }
  function C() {
    return l;
  }
  function k(b) {
    l = b, i(b);
  }
  return {
    start: h,
    pause: m,
    reset: y,
    getState: C
  };
}
Sf(Zs, tb);
Sf(Pf, Zs);
function $(e, ...n) {
  if (Fe(e))
    return e.map((o) => o(...n));
  if (e)
    return e(...n);
}
function Gb(e) {
  let n = !1, o;
  return function(...t) {
    return n || (n = !0, o = e.apply(this, t)), o;
  };
}
function Zb(e, n = 0) {
  let o;
  return function(...t) {
    o && clearTimeout(o), o = setTimeout(() => {
      e.apply(this, t);
    }, n);
  };
}
function pa(e, n = 200) {
  let o, t = 0;
  return function r(...a) {
    const i = performance.now(), l = i - t;
    t || (t = i), o && clearTimeout(o), l >= n ? (e.apply(this, a), t = i) : o = setTimeout(() => {
      r.apply(this, a);
    }, n - l);
  };
}
function Jb() {
}
function qf(e, n) {
  const o = /* @__PURE__ */ new WeakMap();
  function t(i, l) {
    const s = n(i);
    if (s !== void 0)
      return s;
    if (!mo(i))
      return i;
    if (l.has(i))
      return l.get(i);
    if (Vr(i))
      return new Date(i);
    if (Ur(i))
      return new RegExp(i);
    if (Lr(i)) {
      const u = /* @__PURE__ */ new Map();
      return l.set(i, u), i.forEach((c, d) => {
        u.set(t(d, l), t(c, l));
      }), u;
    }
    if (Fr(i)) {
      const u = /* @__PURE__ */ new Set();
      return l.set(i, u), i.forEach((c) => {
        u.add(t(c, l));
      }), u;
    }
    if (Xe(i) === "String" || Xe(i) === "Number" || Xe(i) === "Boolean")
      return a(i, i.valueOf());
    if (Bf(i) || Df(i) || Hr(i) || Rr(i))
      return {};
    if (jr(i))
      return a(i, r(i.buffer), i.byteOffset, i.length);
    if (Nr(i))
      return a(i, r(i.buffer), i.byteOffset, i.byteLength);
    if (Mr(i))
      return r(i);
    if (Fe(i)) {
      const u = [];
      return l.set(i, u), i.forEach((c, d) => {
        u[d] = t(c, l);
      }), u;
    }
    if (Ln(i)) {
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
function Qb(e) {
  return qf(e, () => {
  });
}
function Xf(e, ...n) {
  const o = xt(n, -1), t = [e, ...n.slice(0, -1)];
  let r = t.length - 1, a = t[r];
  for (; r; )
    a = i(t[r - 1], a, o), r--;
  function i(l, s, u) {
    function c(d, f) {
      for (const v in f)
        if (Go(f, v)) {
          const h = f[v], m = d[v], y = u(m, h, v, l, s);
          y !== void 0 ? d[v] = y : mo(h) ? mo(m) ? d[v] = c(m, h) : d[v] = c(Fe(h) ? [] : {}, h) : d[v] = h;
        }
      return d;
    }
    return c(l, s);
  }
  return a;
}
function _b(e, ...n) {
  return Xf(e, ...n, () => {
  });
}
function xb(e) {
  return new Promise((n) => {
    const o = new FileReader();
    o.onload = () => {
      n(o.result);
    }, o.readAsArrayBuffer(e);
  });
}
function Gf(e) {
  return new Promise((n) => {
    const o = new FileReader();
    o.onload = () => {
      n(o.result);
    }, o.readAsDataURL(e);
  });
}
function e0(e) {
  return new Promise((n) => {
    const o = new FileReader();
    o.onload = () => {
      n(o.result);
    }, o.readAsText(e);
  });
}
function n0(e, n) {
  if (e.length)
    return e.reduce((o, t) => n(o) > n(t) ? o : t, e[0]);
}
function o0(e, n) {
  if (e.length)
    return e.reduce((o, t) => n(o) < n(t) ? o : t, e[0]);
}
function Zf(e) {
  return e.reduce((n, o) => n + o, 0);
}
function Jf(e, n) {
  return e.reduce((o, t) => o + n(t), 0);
}
function t0(e) {
  function n(t, r) {
    for (let a = 0; a < r.length; a++) {
      const i = r.charCodeAt(a);
      t = (t << 5) - t + i, t |= 0;
    }
    return t < 0 ? t * -2 : t;
  }
  function o(t, r, a, i) {
    return t = n(t, a), t = n(t, Xs(r)), t = n(t, typeof r), r === null ? n(t, "null") : r === void 0 ? n(t, "undefined") : mo(r) || mn(r) ? i.includes(r) ? n(t, `[Circular]${a}`) : (i.push(r), t = Object.keys(r).sort().reduce((l, s) => o(l, r[s], s, i), t), mn(r.valueOf) ? n(t, String(r.valueOf())) : t) : n(t, r.toString());
  }
  return o(0, e, "", []).toString(16).padStart(8, "0");
}
function r0(e) {
  return Zf(e) / e.length;
}
function a0(e, n) {
  return Jf(e, n) / e.length;
}
function i0(e) {
  if (e.length)
    return e[zf(0, e.length - 1)];
}
function l0(e, n = 0) {
  return va(e, n, Math.round);
}
function va(e, n = 0, o) {
  return n = $n(n, -292, 292), n ? +`${o(`${e}e${n}`)}e${-n}` : o(e);
}
function cl(e, n = 0) {
  return va(e, n, Math.floor);
}
function s0(e, n = 0) {
  return va(e, n, Math.ceil);
}
function Fn(e, n, o) {
  return Af(e, `Varlet [${n}]: ${o}`);
}
function u0(e, n) {
  console.warn(`Varlet [${e}]: ${n}`);
}
function lt(e, n) {
  console.error(`Varlet [${e}]: ${n}`);
}
var c0 = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, d0 = Object.defineProperty, Kr = Object.getOwnPropertySymbols, Qf = Object.prototype.hasOwnProperty, _f = Object.prototype.propertyIsEnumerable, Uu = (e, n, o) => n in e ? d0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, f0 = (e, n) => {
  for (var o in n || (n = {}))
    Qf.call(n, o) && Uu(e, o, n[o]);
  if (Kr)
    for (var o of Kr(n))
      _f.call(n, o) && Uu(e, o, n[o]);
  return e;
}, p0 = (e, n) => {
  var o = {};
  for (var t in e)
    Qf.call(e, t) && n.indexOf(t) < 0 && (o[t] = e[t]);
  if (e != null && Kr)
    for (var t of Kr(e))
      n.indexOf(t) < 0 && _f.call(e, t) && (o[t] = e[t]);
  return o;
};
function yn(e) {
  let n = !1;
  bo(() => {
    e(), Ye(() => {
      n = !0;
    });
  }), Lo(() => {
    n && e();
  });
}
function He(e, n, o, t = {}) {
  if (!oo())
    return;
  const { passive: r = !1, capture: a = !1 } = t;
  let i = !1, l = !1;
  const s = (v) => mn(v) ? v() : yf(v), u = (v) => {
    if (i || l)
      return;
    const h = s(v);
    h && (h.addEventListener(n, o, {
      passive: r,
      capture: a
    }), i = !0);
  }, c = (v) => {
    if (!i || l)
      return;
    const h = s(v);
    h && (h.removeEventListener(n, o, {
      capture: a
    }), i = !1);
  };
  let d;
  Jg(e) && (d = fe(
    () => e.value,
    (v, h) => {
      c(h), u(v);
    }
  ));
  const f = () => {
    d == null || d(), c(e), l = !0;
  };
  return yn(() => {
    u(e);
  }), sa(() => {
    c(e);
  }), yt(() => {
    c(e);
  }), f;
}
function xf(e, n, o) {
  if (!oo())
    return;
  He(document, n, (r) => {
    const a = mn(e) ? e() : yf(e);
    a && !a.contains(r.target) && o(r);
  });
}
function tr(e) {
  let n = !1;
  yt(() => {
    n = !0, e();
  }), Jt(() => {
    n || e();
  });
}
function ou(e) {
  const n = _o();
  return e in n.provides;
}
function wn(e) {
  if (!ou(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const o = Ys(e), { childInstances: t, collect: r, clear: a } = o, i = p0(o, ["childInstances", "collect", "clear"]), l = _o();
  return {
    index: B(() => t.indexOf(l)),
    parentProvider: i,
    bindParent: (c) => {
      bo(() => {
        Ye().then(() => {
          r(l, c);
        });
      }), sa(() => {
        Ye().then(() => {
          a(l, c);
        });
      });
    }
  };
}
function v0(e) {
  const n = [], o = (t) => {
    if (t != null && t.component) {
      o(t == null ? void 0 : t.component.subTree);
      return;
    }
    Fe(t == null ? void 0 : t.children) && t.children.forEach((r) => {
      Qg(r) && (n.push(r), o(r));
    });
  };
  return o(e), n;
}
function kn(e) {
  const n = _o(), o = en([]), t = [], r = B(() => o.length), a = () => {
    const u = v0(n.subTree);
    o.sort((c, d) => u.indexOf(c.vnode) - u.indexOf(d.vnode));
  }, i = (u, c) => {
    o.push(u), t.push(c), a();
  }, l = (u, c) => {
    Io(o, u), Io(t, c);
  };
  return {
    length: r,
    childProviders: t,
    bindChildren: (u) => {
      Ws(e, f0({
        childInstances: o,
        collect: i,
        clear: l
      }, u));
    }
  };
}
function to(e) {
  He(() => window, "resize", e, { passive: !0 }), He(() => window, "orientationchange", e, { passive: !0 });
}
function m0(e, n) {
  const o = w(!1);
  return fe(
    e,
    (t) => {
      n === t && (o.value = !0);
    },
    { immediate: !0 }
  ), o;
}
function h0(e, n) {
  if (e > n)
    return "horizontal";
  if (n > e)
    return "vertical";
}
function kt() {
  const e = w(0), n = w(0), o = w(0), t = w(0), r = w(0), a = w(0), i = w(0), l = w(0), s = w(0), u = w(0), c = w(), d = w(!1), f = w(!1), v = w(0), h = w(0);
  let m = null;
  const y = () => {
    e.value = 0, n.value = 0, o.value = 0, t.value = 0, r.value = 0, a.value = 0, i.value = 0, l.value = 0, s.value = 0, u.value = 0, c.value = void 0, d.value = !1, f.value = !1, v.value = 0, h.value = 0;
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
    distance: h,
    resetTouch: y,
    startTouch: (O) => {
      y();
      const { clientX: D, clientY: M } = O.touches[0];
      e.value = D, n.value = M, i.value = D, l.value = M, d.value = !0, v.value = performance.now(), f.value = !1, m && window.cancelAnimationFrame(m);
    },
    moveTouch: (O) => {
      const { clientX: D, clientY: M } = O.touches[0];
      f.value = !0, o.value = D - e.value, t.value = M - n.value, r.value = Math.abs(o.value), a.value = Math.abs(t.value), h.value = Math.sqrt(r.value ** 2 + a.value ** 2), s.value = D - i.value, u.value = M - l.value, c.value || (c.value = h0(r.value, a.value)), i.value = D, l.value = M;
    },
    endTouch: () => {
      d.value = !1, m = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    },
    isReachTop: (O) => ho(O) === 0 && t.value > 0,
    isReachBottom: (O, D = 1) => {
      const { scrollHeight: M, clientHeight: V, scrollTop: L } = O, Y = Math.abs(M - L - V);
      return t.value < 0 && Y <= D;
    }
  };
}
function ep() {
  const e = _o(), n = Qs(e.type.name), o = w(void 0);
  return bo(() => {
    o.value = `${n}-${e.uid}`;
  }), o;
}
function g0(e = {}) {
  const { initialWidth: n = 0, initialHeight: o = 0 } = e, t = w(n), r = w(o), a = () => {
    oo() && (t.value = window.innerWidth, r.value = window.innerHeight);
  };
  return yn(a), to(a), {
    width: t,
    height: r
  };
}
function Gn(e, n, o = {}) {
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
        i ? i(l, d) : $(e[l], d);
      }
    });
  const u = w(s());
  let c = !0;
  return fe(
    () => e[n],
    () => {
      c = !1, u.value = s(), Ye(() => {
        c = !0;
      });
    }
  ), fe(
    () => u.value,
    (d) => {
      c && (i ? i(l, d) : $(e[l], d));
    }
  ), u;
}
function b0(e) {
  const n = w(r(e.from)), o = w("pending");
  let t = s();
  function r(u) {
    return mn(u) ? u() : u;
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
    return nu({
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
var y0 = Object.defineProperty, w0 = Object.defineProperties, k0 = Object.getOwnPropertyDescriptors, Hu = Object.getOwnPropertySymbols, $0 = Object.prototype.hasOwnProperty, C0 = Object.prototype.propertyIsEnumerable, ju = (e, n, o) => n in e ? y0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, dl = (e, n) => {
  for (var o in n || (n = {}))
    $0.call(n, o) && ju(e, o, n[o]);
  if (Hu)
    for (var o of Hu(n))
      C0.call(n, o) && ju(e, o, n[o]);
  return e;
}, S0 = (e, n) => w0(e, k0(n)), Yu = (e, n, o) => new Promise((t, r) => {
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
function Ie(e, n) {
  return Fe(n) ? n.reduce((o, t) => (o[t] = e[t], o), {}) : e[n];
}
function re(e, n) {
  const o = n ?? e;
  return o.install = function(t) {
    const { name: r } = e;
    r && t.component(r, e);
  }, o;
}
function ie(e, n) {
  e.setPropsDefaults = function(o) {
    Object.entries(o).forEach(([t, r]) => {
      const a = n[t];
      if (a != null) {
        if (Ln(a)) {
          n[t] = S0(dl({}, a), {
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
function P0(e) {
  const n = xg(e), o = document.createElement("div");
  return document.body.appendChild(o), {
    instance: n.mount(o),
    unmount() {
      n.unmount(), o.parentNode && document.body.removeChild(o);
    }
  };
}
function $t(e, n = {}, o = {}) {
  const t = {
    setup() {
      return () => Qt(e, dl(dl({}, n), o));
    }
  }, { unmount: r } = P0(t);
  return { unmountInstance: r };
}
function np(e) {
  const n = [];
  return e.forEach((o) => {
    if (o.type !== _g) {
      if (o.type === Ae && Fe(o.children)) {
        o.children.forEach((t) => {
          n.push(t);
        });
        return;
      }
      n.push(o);
    }
  }), n;
}
function Wu(e) {
  return Ln(e) && mn(e.safeParseAsync);
}
function O0(e) {
  return Ln(e) && Go(e, "success");
}
function Hn() {
  const e = w(""), n = (r, a, i) => Yu(this, null, function* () {
    const l = fo(r).filter((u) => Wu(u) || mn(u)), s = yield Promise.all(
      l.map((u) => Wu(u) ? u.safeParseAsync(a) : u(a, i))
    );
    return o(), !s.some((u) => {
      if (O0(u)) {
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
    validateWithTrigger: (r, a, i, l, s) => Yu(this, null, function* () {
      r.includes(a) && (yield n(i, l, s)) && (e.value = "");
    })
  };
}
function z0(e) {
  He(() => window, "hashchange", e), He(() => window, "popstate", e);
}
function xo() {
  const e = w(!1);
  return Lo(() => {
    e.value = !1;
  }), yt(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
const ne = _s("var");
function F(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function dn(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), `var-elevation--${e}`);
}
const rr = ee({
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
    return () => sn(e.is) ? Qt(e.tag, e.is) : e.is;
  }
});
var op = {
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
}, tp = {
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
}, rp = {
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
  timePickerHint: "時間を選択"
}, tu = {
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
}, ru = {
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
  timePickerHint: "選擇時間"
}, ap = ru, E0 = Object.defineProperty, Ku = Object.getOwnPropertySymbols, T0 = Object.prototype.hasOwnProperty, B0 = Object.prototype.propertyIsEnumerable, qu = (e, n, o) => n in e ? E0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Xu = (e, n) => {
  for (var o in n || (n = {}))
    T0.call(n, o) && qu(e, o, n[o]);
  if (Ku)
    for (var o of Ku(n))
      B0.call(n, o) && qu(e, o, n[o]);
  return e;
};
function au() {
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
      e.value[i] = Xu(Xu({}, e.value[i]), l), t(i);
    },
    t: (i) => {
      if (Go(n.value, i))
        return n.value[i];
    }
  };
}
const { messages: ip, currentMessage: lp, add: iu, use: lu, merge: sp, t: an } = au();
iu("zh-CN", tu);
lu("zh-CN");
const $B = {
  zhCN: tu,
  enUS: op,
  zhTW: ru,
  zhHK: ap,
  faIR: tp,
  jaJP: rp,
  messages: ip,
  currentMessage: lp,
  add: iu,
  use: lu,
  merge: sp,
  t: an,
  useLocale: au
};
var fl = {
  zhCN: tu,
  enUS: op,
  zhTW: ru,
  zhHK: ap,
  faIR: tp,
  jaJP: rp,
  messages: ip,
  currentMessage: lp,
  add: iu,
  use: lu,
  merge: sp,
  t: an,
  useLocale: au
};
const pl = Symbol("LOCALE_PROVIDER_KEY");
function D0(e) {
  Ws(pl, e);
}
function so() {
  return ou(pl) ? Ys(pl) : { t: null };
}
const up = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, CB = en(up);
var Vn = en(up);
const { n: Gu } = ne("");
function cp() {
  Object.keys(Vn.locks).length <= 0 ? document.body.classList.remove(Gu("$--lock")) : document.body.classList.add(Gu("$--lock"));
}
function vr(e) {
  Vn.locks[e] = 1, cp();
}
function mr(e) {
  delete Vn.locks[e], cp();
}
function ar(e, n) {
  const { uid: o } = _o();
  n && fe(n, (t) => {
    t === !1 ? mr(o) : t === !0 && e() === !0 && vr(o);
  }), fe(e, (t) => {
    n && n() === !1 || (t === !0 ? vr(o) : mr(o));
  }), eb(() => {
    n && n() === !1 || e() === !0 && vr(o);
  }), Jt(() => {
    n && n() === !1 || e() === !0 && mr(o);
  }), Lo(() => {
    n && n() === !1 || e() === !0 && vr(o);
  }), yt(() => {
    n && n() === !1 || e() === !0 && mr(o);
  });
}
const yo = [];
function su(e, n) {
  const { uid: o } = _o();
  fe(e, (i) => {
    i && !a(o) ? r() : setTimeout(() => {
      Io(yo, a(o));
    });
  }), yn(() => {
    e() && r();
  }), tr(() => {
    Io(yo, a(o));
  });
  function t() {
    return yo.length === 0 ? !0 : (yo.sort((i, l) => i.zIndex.value - l.zIndex.value), yo[yo.length - 1].uid === o);
  }
  function r() {
    a(o) || yo.push({ uid: o, zIndex: n });
  }
  function a(i) {
    return yo.find((l) => l.uid === i);
  }
  return {
    onStackTop: t
  };
}
function ir(e, n) {
  const o = w(Vn.zIndex);
  return fe(
    e,
    (t) => {
      t && (Vn.zIndex += n, o.value = Vn.zIndex);
    },
    { immediate: !0 }
  ), { zIndex: o };
}
const Ct = {
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
  onOpen: F(),
  onOpened: F(),
  onClose: F(),
  onClosed: F(),
  onKeyEscape: F(),
  onClickOverlay: F(),
  "onUpdate:show": F(),
  // internal for Dialog
  onRouteChange: F()
}, dp = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function fp() {
  const { bindParent: e, parentProvider: n, index: o } = wn(dp);
  return {
    index: o,
    popup: n,
    bindPopup: e
  };
}
function I0() {
  const { bindChildren: e, childProviders: n, length: o } = kn(dp);
  return {
    length: o,
    popupItems: n,
    bindPopupItems: e
  };
}
var A0 = Object.defineProperty, Zu = Object.getOwnPropertySymbols, M0 = Object.prototype.hasOwnProperty, N0 = Object.prototype.propertyIsEnumerable, Ju = (e, n, o) => n in e ? A0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, V0 = (e, n) => {
  for (var o in n || (n = {}))
    M0.call(n, o) && Ju(e, o, n[o]);
  if (Zu)
    for (var o of Zu(n))
      N0.call(n, o) && Ju(e, o, n[o]);
  return e;
};
const {
  name: R0,
  n: Yn,
  classes: xi
} = ne("popup");
var ma = ee({
  name: R0,
  inheritAttrs: !1,
  props: Ct,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const t = m0(() => e.show, !0), {
      zIndex: r
    } = ir(() => e.show, 3), a = B(() => {
      var h;
      return (h = e.zIndex) != null ? h : r.value;
    }), {
      onStackTop: i
    } = su(() => e.show, a), {
      disabled: l
    } = xo(), {
      bindPopupItems: s
    } = I0();
    ar(() => e.show, () => e.lockScroll), fe(() => e.show, (h) => {
      $(h ? e.onOpen : e.onClose);
    }), s({
      show: B(() => e.show)
    }), He(() => window, "keydown", v), z0(() => $(e.onRouteChange));
    function u() {
      const {
        closeOnClickOverlay: h,
        onClickOverlay: m
      } = e;
      $(m), h && $(e["onUpdate:show"], !1);
    }
    function c() {
      const {
        overlayClass: h = "",
        overlayStyle: m
      } = e;
      return X("div", {
        class: xi(Yn("overlay"), h),
        style: V0({
          zIndex: a.value - 1
        }, m),
        onClick: u
      }, null);
    }
    function d() {
      return Ne(X("div", je({
        class: xi(Yn("content"), Yn(`--${e.position}`), [e.defaultStyle, Yn("--content-background-color")], [e.defaultStyle, Yn("$-elevation--3")], [e.safeArea, Yn("--safe-area")], [e.safeAreaTop, Yn("--safe-area-top")]),
        style: {
          zIndex: a.value
        },
        role: "dialog",
        "aria-modal": "true"
      }, o), [t.value && $(n.default)]), [[eo, e.show]]);
    }
    function f() {
      return X(xe, {
        name: Yn("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [Ne(X("div", {
          class: xi(Yn("$--box"), Yn(), [!e.overlay, Yn("--pointer-events-none")]),
          style: {
            zIndex: a.value - 2
          }
        }, [e.overlay && c(), X(xe, {
          name: e.transition || Yn(`$-pop-${e.position}`)
        }, {
          default: () => [d()]
        })]), [[eo, e.show]])]
      });
    }
    function v(h) {
      !i() || h.key !== "Escape" || !e.show || ($(e.onKeyEscape), e.closeOnKeyEscape && (Me(h), $(e["onUpdate:show"], !1)));
    }
    return () => {
      const {
        teleport: h
      } = e;
      return h ? X(lo, {
        to: h,
        disabled: l.value
      }, {
        default: () => [f()]
      }) : f();
    };
  }
});
re(ma);
ie(ma, Ct);
const SB = ma;
var Mo = ma, L0 = Object.defineProperty, F0 = Object.defineProperties, U0 = Object.getOwnPropertyDescriptors, Qu = Object.getOwnPropertySymbols, H0 = Object.prototype.hasOwnProperty, j0 = Object.prototype.propertyIsEnumerable, _u = (e, n, o) => n in e ? L0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, pp = (e, n) => {
  for (var o in n || (n = {}))
    H0.call(n, o) && _u(e, o, n[o]);
  if (Qu)
    for (var o of Qu(n))
      j0.call(n, o) && _u(e, o, n[o]);
  return e;
}, Y0 = (e, n) => F0(e, U0(n));
const { n: vp } = ne("ripple"), xu = 250;
function W0(e) {
  const { zIndex: n, position: o } = Zn(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", o === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function ec(e) {
  return "touches" in e;
}
function K0(e, n) {
  const { top: o, left: t } = nn(e), { clientWidth: r, clientHeight: a } = e, i = Math.sqrt(r ** 2 + a ** 2) / 2, l = i * 2, s = ec(n) ? n.touches[0].clientX - t : r / 2, u = ec(n) ? n.touches[0].clientY - o : a / 2, c = (r - i * 2) / 2, d = (a - i * 2) / 2, f = s - i, v = u - i;
  return { x: f, y: v, centerX: c, centerY: d, size: l };
}
function uu(e) {
  const n = this._ripple;
  if (n.removeRipple(), n.disabled || n.tasker || !Vn.enableRipple)
    return;
  const o = () => {
    n.tasker = null;
    const { x: t, y: r, centerX: a, centerY: i, size: l } = K0(this, e), s = document.createElement("div");
    s.classList.add(vp()), s.style.opacity = "0", s.style.transform = `translate(${t}px, ${r}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), W0(this), this.appendChild(s), window.setTimeout(() => {
      s.style.transform = `translate(${a}px, ${i}px) scale3d(1, 1, 1)`, s.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(o, 30);
}
function qr() {
  const e = this._ripple, n = () => {
    const o = this.querySelectorAll(`.${vp()}`);
    if (!o.length)
      return;
    const t = o[o.length - 1], r = xu - performance.now() + Number(t.dataset.createdAt);
    window.setTimeout(() => {
      t.style.opacity = "0", window.setTimeout(() => {
        var a;
        return (a = t.parentNode) == null ? void 0 : a.removeChild(t);
      }, xu);
    }, r);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function mp() {
  if (!If() || !Vn.enableRipple)
    return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
let Xr = !1;
function q0(e) {
  Xr || !(e.key === " " || e.key === "Enter") || (uu.call(this, e), Xr = !0);
}
function nc() {
  Xr && (qr.call(this), Xr = !1);
}
function X0(e, n) {
  var o;
  e._ripple = Y0(pp({
    tasker: null
  }, (o = n.value) != null ? o : {}), {
    removeRipple: qr.bind(e)
  }), e.addEventListener("touchstart", uu, { passive: !0 }), e.addEventListener("touchmove", mp, { passive: !0 }), e.addEventListener("dragstart", qr, { passive: !0 }), e.addEventListener("keydown", q0), e.addEventListener("keyup", nc), e.addEventListener("blur", nc), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("dragend", e._ripple.removeRipple, { passive: !0 });
}
function G0(e) {
  e.removeEventListener("touchstart", uu), e.removeEventListener("touchmove", mp), e.removeEventListener("dragstart", qr), !(!e._ripple || !e._ripple.removeRipple) && (document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple), document.removeEventListener("dragend", e._ripple.removeRipple));
}
function Z0(e, n) {
  var o, t, r, a, i, l;
  const s = {
    color: (o = n.value) == null ? void 0 : o.color,
    disabled: (t = n.value) == null ? void 0 : t.disabled
  };
  (s.color !== ((r = e._ripple) == null ? void 0 : r.color) || s.disabled !== ((a = e._ripple) == null ? void 0 : a.disabled)) && (e._ripple = pp({
    tasker: s.disabled ? null : (i = e._ripple) == null ? void 0 : i.tasker,
    removeRipple: (l = e._ripple) == null ? void 0 : l.removeRipple
  }, s));
}
const hp = {
  mounted: X0,
  unmounted: G0,
  updated: Z0,
  install(e) {
    e.directive("ripple", this);
  }
}, PB = hp;
var rn = hp;
function gp(e) {
  return e ? !!(e === "desktop" && Nt() || e === "mobile" && !Nt()) : !1;
}
function J0(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce(
    (o, t) => {
      const [r, a] = t.split(":").map((i) => i.trim());
      return o[da(r)] = a, o;
    },
    {}
  ) : {};
}
function Q0(e) {
  const { value: n } = e._hover, o = J0(e);
  Object.keys(n).forEach((t) => {
    const r = da(t);
    n[r] != null && o[r] && (e._hover.rawStyle[r] = o[r]);
  });
}
function cu(e, n) {
  Object.keys(n).forEach((o) => {
    const t = n[o];
    t != null && (e.style[o] = t);
  });
}
function _0(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function bp(e) {
  (e == null ? void 0 : e._hover) != null && (_0(e), cu(e, e._hover.rawStyle));
}
function yp() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, mn(e)) {
    e(this._hover.hovering);
    return;
  }
  cu(this, e);
}
function wp() {
  if (this._hover.hovering = !1, mn(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  bp(this);
}
function kp(e, n) {
  var o, t;
  const { arg: r, value: a } = n;
  gp(r) || (e._hover = {
    value: a,
    hovering: (t = (o = e._hover) == null ? void 0 : o.hovering) != null ? t : !1,
    rawStyle: {}
  }, Q0(e), e.addEventListener("mouseenter", yp), e.addEventListener("mouseleave", wp));
}
function $p(e, n) {
  gp(n.arg) || (bp(e), e.removeEventListener("mouseenter", yp), e.removeEventListener("mouseleave", wp));
}
function x0(e, n) {
  e._hover && $p(e, n);
}
function ey(e, n) {
  return !mn(n.value) && e._hover.hovering;
}
function ny(e, n) {
  kp(e, n), ey(e, n) && cu(e, n.value);
}
const Cp = {
  mounted: kp,
  unmounted: $p,
  beforeUpdate: x0,
  updated: ny,
  install(e) {
    e.directive("hover", this);
  }
}, OB = Cp;
var In = Cp;
const Sp = {
  hovering: Boolean,
  focusing: Boolean
}, { name: oy, n: ty, classes: ry } = ne("hover-overlay");
function ay(e, n) {
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
const Pp = ee({
  name: oy,
  props: Sp,
  setup: () => ({
    n: ty,
    classes: ry,
    inMobile: Nt
  })
});
Pp.render = ay;
var ha = Pp;
re(ha);
ie(ha, Sp);
function no() {
  const e = w(!1);
  return {
    hovering: e,
    handleHovering: (o) => {
      e.value = o;
    }
  };
}
const zB = ha;
var Un = ha;
function iy(e) {
  const { left: n } = nn(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function oc(e) {
  const { top: n } = nn(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function el(e) {
  const { transform: n } = Zn(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function No(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const o = /(scroll|auto)/, { overflowY: t, overflow: r } = Zn(n);
    if (o.test(t) || o.test(r))
      return n;
  }
  return window;
}
function ly(e) {
  const n = [];
  let o = e;
  for (; !ca(o); )
    o = No(o), n.push(o);
  return n;
}
function Op(e, n) {
  if (sn(e)) {
    const o = document.querySelector(e);
    return Fn(!!o, n, "target element cannot found"), o;
  }
  return Fn(mo(e), n, 'type of prop "target" should be an element object'), e;
}
function sy() {
  const { width: e, height: n } = nn(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
const uy = (e) => sn(e) && e.endsWith("rem"), cy = (e) => sn(e) && e.endsWith("px") || En(e), dy = (e) => sn(e) && e.endsWith("vw"), fy = (e) => sn(e) && e.endsWith("vh"), py = (e) => sn(e) && e.endsWith("vmin"), vy = (e) => sn(e) && e.endsWith("vmax"), on = (e) => {
  if (Gs(e))
    return Number(e);
  if (cy(e))
    return +e.replace("px", "");
  if (!oo())
    return 0;
  const { vw: n, vh: o, vMin: t, vMax: r } = sy();
  if (dy(e))
    return +e.replace("vw", "") * n / 100;
  if (fy(e))
    return +e.replace("vh", "") * o / 100;
  if (py(e))
    return +e.replace("vmin", "") * t / 100;
  if (vy(e))
    return +e.replace("vmax", "") * r / 100;
  if (uy(e)) {
    const a = +e.replace("rem", ""), i = Zn(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return sn(e) ? W(e) : 0;
}, ze = (e) => {
  if (e != null)
    return Gs(e) ? `${e}px` : String(e);
}, On = (e, n = 1) => {
  if (e == null)
    return;
  const o = ze(e), t = o.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
  return `${parseFloat(o) * n}${t}`;
};
function Vt(e, { top: n = 0, left: o = 0, duration: t = 300, animation: r }) {
  const a = Date.now(), i = ho(e), l = or(e);
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
function zp(e) {
  return Object.entries(e ?? {}).reduce((n, [o, t]) => {
    const r = o.startsWith("--") ? o : `--${Qs(o)}`;
    return n[r] = t, n;
  }, {});
}
function Gr(e) {
  return e === "start" || e === "end" ? `flex-${e}` : e;
}
function my(e) {
  let n = e;
  for (; n && n !== document.documentElement; ) {
    if (Zn(n).display === "none")
      return !0;
    n = n.parentNode;
  }
  return !1;
}
const tc = ["button", "input", "select", "textarea", "[tabindex]", "[href]"].map((e) => `${e}:not([disabled])`).join(", ");
function du(e, n, o, t) {
  const r = Array.from(n.querySelectorAll(tc)).filter(
    (s) => !my(s)
  );
  if (!r.length)
    return;
  const a = [e, ...Array.from(e.querySelectorAll(tc))].findIndex(
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
  onClick: F()
};
var hy = (e, n, o) => new Promise((t, r) => {
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
const { name: gy, n: by, classes: yy } = ne("icon");
function wy(e, n) {
  return g(), we(wt(e.isURL(e.name) ? "img" : "i"), {
    class: p(
      e.classes(
        e.n(),
        [e.namespace !== e.n(), e.namespace],
        `${e.namespace}--set`,
        [e.isURL(e.name), e.n("image"), `${e.namespace}-${e.nextName}`],
        [e.animateInProgress, e.animationClass == null ? e.n("--shrinking") : e.animationClass]
      )
    ),
    style: Z({
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
const Ep = ee({
  name: gy,
  props: tn,
  setup(e) {
    const n = w(""), o = w(!1);
    fe(() => e.name, t, { immediate: !0 });
    function t(r, a) {
      return hy(this, null, function* () {
        const { transition: i } = e;
        if (a == null || W(i) === 0) {
          n.value = r;
          return;
        }
        o.value = !0, yield Ye(), setTimeout(() => {
          a != null && (n.value = r), o.value = !1;
        }, W(i));
      });
    }
    return {
      nextName: n,
      animateInProgress: o,
      n: by,
      classes: yy,
      isURL: c0,
      toNumber: W,
      toSizeUnit: ze
    };
  }
});
Ep.render = wy;
var ga = Ep;
re(ga);
ie(ga, tn);
const EB = ga;
var Ge = ga;
const { name: ky, n: $y, classes: Cy } = ne("action-sheet");
function Sy(e, n) {
  const o = _("var-icon"), t = _("var-hover-overlay"), r = We("ripple"), a = We("hover");
  return Ne((g(), P(
    "div",
    {
      class: p(e.classes(e.n("action-item"), e.className, [e.disabled, e.n("--disabled")])),
      style: Z({ color: e.color })
    },
    [
      e.icon ? (g(), we(o, {
        key: 0,
        "var-action-sheet-cover": "",
        class: p(e.n("action-icon")),
        namespace: e.namespace,
        name: e.icon,
        size: e.iconSize
      }, null, 8, ["class", "namespace", "name", "size"])) : G("v-if", !0),
      R(
        "div",
        {
          class: p(e.n("action-name"))
        },
        le(e.name),
        3
        /* TEXT, CLASS */
      ),
      X(t, {
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
const Tp = ee({
  name: ky,
  components: {
    VarHoverOverlay: Un,
    VarIcon: Ge
  },
  directives: { Ripple: rn, Hover: In },
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
    const { hovering: e, handleHovering: n } = no();
    return {
      hovering: e,
      n: $y,
      classes: Cy,
      handleHovering: n
    };
  }
});
Tp.render = Sy;
var Py = Tp, Oy = Object.defineProperty, rc = Object.getOwnPropertySymbols, zy = Object.prototype.hasOwnProperty, Ey = Object.prototype.propertyIsEnumerable, ac = (e, n, o) => n in e ? Oy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Ty = (e, n) => {
  for (var o in n || (n = {}))
    zy.call(n, o) && ac(e, o, n[o]);
  if (rc)
    for (var o of rc(n))
      Ey.call(n, o) && ac(e, o, n[o]);
  return e;
};
const Bp = Ty({
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
  onSelect: F(),
  "onUpdate:show": F()
}, Ie(Ct, [
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
])), { name: By, n: Dy, classes: Iy } = ne("action-sheet");
function Ay(e, n) {
  const o = _("var-action-item"), t = _("var-popup");
  return g(), we(t, {
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
    default: ue(() => [
      R(
        "div",
        je({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [
          H(e.$slots, "title", {}, () => {
            var r;
            return [
              R(
                "div",
                {
                  class: p(e.n("title"))
                },
                le((r = e.title) != null ? r : (e.pt ? e.pt : e.t)("actionSheetTitle")),
                3
                /* TEXT, CLASS */
              )
            ];
          }),
          H(e.$slots, "actions", {}, () => [
            (g(!0), P(
              Ae,
              null,
              qe(e.actions, (r) => (g(), we(o, {
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
const Dp = ee({
  name: By,
  directives: { Ripple: rn },
  components: {
    VarPopup: Mo,
    VarActionItem: Py
  },
  inheritAttrs: !1,
  props: Bp,
  setup(e) {
    const n = Gn(e, "show"), { t: o } = so();
    function t(r) {
      if (r.disabled)
        return;
      const { closeOnClickAction: a, onSelect: i } = e;
      $(i, r), a && (n.value = !1);
    }
    return {
      show: n,
      pt: o,
      t: an,
      n: Dy,
      classes: Iy,
      handleSelect: t
    };
  }
});
Dp.render = Ay;
var lr = Dp, My = Object.defineProperty, ic = Object.getOwnPropertySymbols, Ny = Object.prototype.hasOwnProperty, Vy = Object.prototype.propertyIsEnumerable, lc = (e, n, o) => n in e ? My(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, sc = (e, n) => {
  for (var o in n || (n = {}))
    Ny.call(n, o) && lc(e, o, n[o]);
  if (ic)
    for (var o of ic(n))
      Vy.call(n, o) && lc(e, o, n[o]);
  return e;
};
let Po, fu = {};
function Ry(e = {}) {
  return sc(sc({}, fu), e);
}
function Fo(e) {
  return oo() ? new Promise((n) => {
    Fo.close();
    const o = en(Ry(e));
    o.teleport = "body", Po = o;
    const { unmountInstance: t } = $t(lr, o, {
      onSelect: (r) => {
        $(o.onSelect, r), n(r);
      },
      onClose: () => {
        $(o.onClose), n("close");
      },
      onClosed: () => {
        $(o.onClosed), t(), Po === o && (Po = null);
      },
      onRouteChange: () => {
        t(), Po === o && (Po = null);
      },
      "onUpdate:show": (r) => {
        o.show = r;
      }
    });
    o.show = !0;
  }) : Promise.resolve();
}
Fo.setDefaultOptions = function(e) {
  fu = e;
};
Fo.resetDefaultOptions = function() {
  fu = {};
};
Fo.close = function() {
  if (Po != null) {
    const e = Po;
    Po = null, Ye().then(() => {
      e.show = !1;
    });
  }
};
Fo.Component = lr;
re(lr);
re(lr, Fo);
ie(Fo, Bp);
const TB = lr;
var vl = Fo;
const Ip = {
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
  onClose: F()
}, { name: Ly, n: Fy, classes: Uy } = ne("alert"), Hy = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  danger: "error"
};
function jy(e, n) {
  const o = _("var-icon");
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), e.n(`--${e.type}`), e.formatElevation(e.elevation, 2))),
      style: Z({
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
            e.isInternalType ? (g(), we(o, {
              key: 0,
              name: e.iconTypeMap[e.type]
            }, null, 8, ["name"])) : G("v-if", !0)
          ])
        ],
        2
        /* CLASS */
      )) : G("v-if", !0),
      H(e.$slots, "content", {}, () => [
        R(
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
                  De(
                    le(e.title),
                    1
                    /* TEXT */
                  )
                ])
              ],
              2
              /* CLASS */
            )) : G("v-if", !0),
            e.message || e.$slots.default ? (g(), P(
              "div",
              {
                key: 1,
                class: p(e.n("message"))
              },
              [
                H(e.$slots, "default", {}, () => [
                  De(
                    le(e.message),
                    1
                    /* TEXT */
                  )
                ])
              ],
              2
              /* CLASS */
            )) : G("v-if", !0)
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
            X(o, { name: "close-circle" })
          ])
        ],
        2
        /* CLASS */
      )) : G("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  );
}
const Ap = ee({
  name: Ly,
  components: {
    VarIcon: Ge
  },
  props: Ip,
  setup(e) {
    const n = B(() => ["info", "success", "danger", "warning"].includes(e.type));
    function o(t) {
      $(e.onClose, t);
    }
    return {
      n: Fy,
      classes: Uy,
      iconTypeMap: Hy,
      isInternalType: n,
      formatElevation: dn,
      handleClose: o
    };
  }
});
Ap.render = jy;
var ba = Ap;
re(ba);
ie(ba, Ip);
const BB = ba;
var ml = ba;
const Mp = {
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
}, { name: Yy, n: Wy, classes: Ky } = ne("app-bar");
function qy(e, n) {
  return g(), P(
    Ae,
    null,
    [
      R(
        "div",
        je({
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
          R(
            "div",
            {
              class: p(e.n("toolbar"))
            },
            [
              R(
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
                      style: Z({ paddingLeft: e.paddingLeft })
                    },
                    [
                      H(e.$slots, "default", {}, () => [
                        De(
                          le(e.title),
                          1
                          /* TEXT */
                        )
                      ])
                    ],
                    6
                    /* CLASS, STYLE */
                  )) : G("v-if", !0)
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
                    De(
                      le(e.title),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                2
                /* CLASS */
              )) : G("v-if", !0),
              R(
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
                      style: Z({ paddingRight: e.paddingRight })
                    },
                    [
                      H(e.$slots, "default", {}, () => [
                        De(
                          le(e.title),
                          1
                          /* TEXT */
                        )
                      ])
                    ],
                    6
                    /* CLASS, STYLE */
                  )) : G("v-if", !0),
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
          style: Z({ height: e.placeholderHeight })
        },
        null,
        6
        /* CLASS, STYLE */
      )) : G("v-if", !0)
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const Np = ee({
  name: Yy,
  props: Mp,
  setup(e, { slots: n }) {
    const o = w(null), t = w(), r = w(), a = w(), i = B(() => {
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
    to(s), yn(() => {
      l(), s();
    }), _t(l);
    function l() {
      t.value = n.left ? 0 : void 0, r.value = n.right ? 0 : void 0;
    }
    function s() {
      if (!e.fixed || !e.placeholder)
        return;
      const { height: u } = nn(o.value);
      a.value = ze(u);
    }
    return {
      rootStyles: i,
      paddingLeft: t,
      paddingRight: r,
      n: Wy,
      classes: Ky,
      formatElevation: dn,
      appBar: o,
      placeholderHeight: a
    };
  }
});
Np.render = qy;
var ya = Np;
re(ya);
ie(ya, Mp);
const DB = ya;
var hl = ya;
const Vp = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: Xy, n: Gy } = ne("form-details"), Zy = { key: 0 }, Jy = { key: 0 };
function Qy(e, n) {
  return g(), we(xe, {
    name: e.n()
  }, {
    default: ue(() => [
      e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (g(), P(
        "div",
        {
          key: 0,
          class: p(e.n())
        },
        [
          R(
            "div",
            {
              class: p(e.n("error-message"))
            },
            [
              X(xe, {
                name: e.n("message")
              }, {
                default: ue(() => [
                  e.errorMessage ? (g(), P(
                    "div",
                    Zy,
                    le(e.errorMessage),
                    1
                    /* TEXT */
                  )) : G("v-if", !0)
                ]),
                _: 1
                /* STABLE */
              }, 8, ["name"])
            ],
            2
            /* CLASS */
          ),
          R(
            "div",
            {
              class: p(e.n("extra-message"))
            },
            [
              X(xe, {
                name: e.n("message")
              }, {
                default: ue(() => [
                  H(e.$slots, "extra-message", {}, () => [
                    e.extraMessage ? (g(), P(
                      "div",
                      Jy,
                      le(e.extraMessage),
                      1
                      /* TEXT */
                    )) : G("v-if", !0)
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
      )) : G("v-if", !0)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
const Rp = ee({
  name: Xy,
  props: Vp,
  setup: () => ({ n: Gy })
});
Rp.render = Qy;
var wa = Rp;
re(wa);
ie(wa, Vp);
const IB = wa;
var Tn = wa, _y = Object.defineProperty, xy = Object.defineProperties, e1 = Object.getOwnPropertyDescriptors, uc = Object.getOwnPropertySymbols, n1 = Object.prototype.hasOwnProperty, o1 = Object.prototype.propertyIsEnumerable, cc = (e, n, o) => n in e ? _y(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, t1 = (e, n) => {
  for (var o in n || (n = {}))
    n1.call(n, o) && cc(e, o, n[o]);
  if (uc)
    for (var o of uc(n))
      o1.call(n, o) && cc(e, o, n[o]);
  return e;
}, r1 = (e, n) => xy(e, e1(n));
const Lp = Symbol("FORM_BIND_FORM_ITEM_KEY");
function jn() {
  const { parentProvider: e, index: n, bindParent: o } = wn(Lp), t = _o();
  return {
    index: n,
    form: e,
    bindForm: o ? (a) => {
      o(r1(t1({}, a), { instance: t }));
    } : null
  };
}
function a1() {
  const { childProviders: e, length: n, bindChildren: o } = kn(Lp);
  return {
    length: n,
    formItems: e,
    bindFormItems: o
  };
}
const Fp = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), Up = Symbol(
  "SWIPE_RESIZE_DISPATCHER_BIND_SWIPE_RESIZE_LISTENER_KEY"
);
function i1() {
  const { childProviders: e, length: n, bindChildren: o } = kn(
    Fp
  );
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: o
  };
}
function l1() {
  const { childProviders: e, bindChildren: n } = kn(
    Up
  );
  return {
    swipeResizeListeners: e,
    bindSwipeResizeListeners: n
  };
}
function s1() {
  const { parentProvider: e, bindParent: n } = wn(
    Up
  );
  return {
    swipeResizeDispatcher: e,
    bindSwipeResizeDispatcher: n
  };
}
const ka = {
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
  onClick: F(),
  onClear: F()
};
var u1 = (e, n, o) => new Promise((t, r) => {
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
const { name: c1, n: nl, classes: d1 } = ne("field-decorator"), f1 = ["for"];
function p1(e, n) {
  const o = _("var-icon");
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      R(
        "div",
        {
          class: p(
            e.classes(
              e.n("controller"),
              [e.isFocusing, e.n("--focus")],
              [e.isError, e.n("--error")],
              [e.formDisabled || e.disabled, e.n("--disabled")]
            )
          ),
          style: Z({
            color: e.color,
            cursor: e.cursor,
            overflow: e.isFloating ? "visible" : "hidden",
            "--field-decorator-middle-offset-left": e.middleOffsetLeft,
            "--field-decorator-middle-offset-width": e.middleOffsetWidth,
            "--field-decorator-middle-offset-height": e.middleOffsetHeight
          })
        },
        [
          R(
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
          R(
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
            style: Z({
              color: e.color
            }),
            for: e.id
          }, [
            R(
              "span",
              null,
              le(e.placeholder),
              1
              /* TEXT */
            )
          ], 14, f1)) : G("v-if", !0),
          R(
            "div",
            {
              class: p(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              e.clearable && !e.isEmpty(e.value) ? H(e.$slots, "clear-icon", {
                key: 0,
                clear: e.handleClear
              }, () => [
                X(o, {
                  class: p(e.n("clear-icon")),
                  "var-field-decorator-cover": "",
                  name: "close-circle",
                  onClick: e.handleClear
                }, null, 8, ["class", "onClick"])
              ]) : G("v-if", !0),
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
        Ae,
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
              style: Z({ borderColor: e.color })
            },
            [
              R(
                "legend",
                {
                  class: p(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
                  style: Z({ width: e.legendWidth })
                },
                [
                  e.placeholder && e.hint ? (g(), we(lo, {
                    key: 0,
                    to: "body"
                  }, [
                    R(
                      "span",
                      {
                        ref: "placeholderTextEl",
                        class: p(
                          e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")])
                        )
                      },
                      le(e.placeholder),
                      3
                      /* TEXT, CLASS */
                    )
                  ])) : G("v-if", !0)
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
              style: Z({ background: e.isError ? void 0 : e.blurColor })
            },
            [
              R(
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
                  style: Z({ background: e.isError ? void 0 : e.focusColor })
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
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Hp = ee({
  name: c1,
  components: { VarIcon: Ge },
  props: ka,
  setup(e) {
    const n = w(null), o = w(null), t = w(""), r = w("0px"), a = w("0px"), i = w("0px"), l = w(!0), s = B(() => e.hint && (!Kn(e.value) || e.isFocusing)), { popup: u, bindPopup: c } = fp(), { bindSwipeResizeDispatcher: d } = s1(), f = B(
      () => e.isError ? void 0 : e.isFocusing ? e.focusColor : e.blurColor
    );
    to(y), yn(() => {
      y(), Ye().then(() => {
        l.value = !1;
      });
    }), _t(y), $(c, null), $(d, {
      onResize() {
        Ye().then(y);
      }
    }), u && fe(
      () => u.show.value,
      (C) => u1(this, null, function* () {
        C && (yield bn(), y());
      })
    );
    function v() {
      const { hint: C, value: k, composing: b } = e;
      if (!C && (!Kn(k) || b))
        return nl("--placeholder-hidden");
      if (s.value)
        return nl("--placeholder-hint");
    }
    function h(C) {
      $(e.onClear, C);
    }
    function m(C) {
      $(e.onClick, C);
    }
    function y() {
      if (r.value = `${o.value.offsetLeft}px`, a.value = `${o.value.offsetWidth}px`, i.value = `${o.value.offsetHeight}px`, e.variant === "outlined" && n.value) {
        const C = Zn(n.value), k = `var(--field-decorator-outlined-${e.size}-placeholder-space)`;
        t.value = `calc(${C.width} * 0.75 + ${k} * 2)`;
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
      n: nl,
      classes: d1,
      isEmpty: Kn,
      handleClear: h,
      handleClick: m
    };
  }
});
Hp.render = p1;
var $a = Hp;
re($a);
ie($a, ka);
const AB = $a;
var Rt = $a, v1 = Object.defineProperty, m1 = Object.defineProperties, h1 = Object.getOwnPropertyDescriptors, dc = Object.getOwnPropertySymbols, g1 = Object.prototype.hasOwnProperty, b1 = Object.prototype.propertyIsEnumerable, fc = (e, n, o) => n in e ? v1(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, y1 = (e, n) => {
  for (var o in n || (n = {}))
    g1.call(n, o) && fc(e, o, n[o]);
  if (dc)
    for (var o of dc(n))
      b1.call(n, o) && fc(e, o, n[o]);
  return e;
}, w1 = (e, n) => m1(e, h1(n));
const pu = w1(y1({
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
  onFocus: F(),
  onBlur: F(),
  onInput: F(),
  onChange: F(),
  onClear: F(),
  "onUpdate:modelValue": F()
}, Ie(ka, [
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
}), { name: k1, n: $1, classes: C1 } = ne("input"), S1 = ["aria-label", "placeholder", "enterkeyhint"], P1 = ["id", "aria-label", "autocomplete", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], O1 = ["id", "aria-label", "autocomplete", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function z1(e, n) {
  const o = _("var-field-decorator"), t = _("var-form-details");
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[12] || (n[12] = (...r) => e.handleMousedown && e.handleMousedown(...r))
    },
    [
      X(
        o,
        Ko(ua({
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
        Xo({
          "clear-icon": ue(({ clear: r }) => [
            H(e.$slots, "clear-icon", { clear: r })
          ]),
          "append-icon": ue(() => [
            H(e.$slots, "append-icon")
          ]),
          default: ue(() => [
            e.normalizedType === "password" ? (g(), P("input", {
              key: 0,
              tabindex: "-1",
              "aria-label": e.ariaLabel,
              class: p(e.n("autocomplete")),
              placeholder: e.hint ? void 0 : e.placeholder,
              style: Z({
                "--input-placeholder-color": e.placeholderColor
              }),
              enterkeyhint: e.enterkeyhint
            }, null, 14, S1)) : G("v-if", !0),
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
              inputmode: e.type === "number" ? "decimal" : void 0,
              style: Z({
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
            }, null, 46, P1)) : (g(), P("input", {
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
              inputmode: e.type === "number" ? "decimal" : void 0,
              style: Z({
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
            }, null, 46, O1))
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots["prepend-icon"] ? {
            name: "prepend-icon",
            fn: ue(() => [
              H(e.$slots, "prepend-icon")
            ]),
            key: "0"
          } : void 0
        ]),
        1040
        /* FULL_PROPS, DYNAMIC_SLOTS */
      ),
      e.isShowFormDetails ? (g(), we(t, {
        key: 0,
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      }, Xo({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: ue(() => [
            H(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"])) : G("v-if", !0)
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const jp = ee({
  name: k1,
  components: {
    VarFormDetails: Tn,
    VarFieldDecorator: Rt
  },
  props: pu,
  setup(e) {
    const n = ep(), o = w(null), t = w(!1), r = w(!1), { bindForm: a, form: i } = jn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: c
    } = Hn(), d = B(() => e.disabled || e.readonly ? "" : "text"), f = B(() => e.type === "number" ? "text" : e.type), v = B(() => {
      const { maxlength: q, modelValue: me } = e;
      return q ? Kn(me) ? `0 / ${q}` : `${String(me).length}/${q}` : "";
    }), h = B(() => {
      const { hint: q, blurColor: me, focusColor: Pe } = e;
      if (!q)
        return l.value ? "var(--field-decorator-error-color)" : t.value ? Pe || "var(--field-decorator-focus-color)" : me || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    });
    $(a, {
      reset: N,
      validate: j,
      resetValidation: c
    }), yn(() => {
      e.autofocus && E();
    });
    function y(q) {
      Ye(() => {
        const { validateTrigger: me, rules: Pe, modelValue: U } = e;
        s(me, q, Pe, U);
      });
    }
    function C(q) {
      t.value = !0, $(e.onFocus, q), y("onFocus");
    }
    function k(q) {
      t.value = !1, $(e.onBlur, q), y("onBlur");
    }
    function b(q) {
      const me = q.target;
      let { value: Pe } = me;
      e.type === "number" && (Pe = L(Pe));
      const U = z(Pe);
      return U === e.modelValue && (me.value = U), U;
    }
    function S() {
      r.value = !0;
    }
    function T(q) {
      r.value && (r.value = !1, q.target.dispatchEvent(new Event("input")));
    }
    function O(q) {
      if (r.value)
        return;
      const me = b(q);
      $(e["onUpdate:modelValue"], me), $(e.onInput, me, q), y("onInput");
    }
    function D(q) {
      const me = Y(b(q));
      e.modelModifiers.trim && $(e["onUpdate:modelValue"], me), $(e.onChange, me, q), y("onChange");
    }
    function M() {
      const { disabled: q, readonly: me, clearable: Pe, onClear: U } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || q || me || !Pe || ($(e["onUpdate:modelValue"], ""), $(U, ""), y("onClear"));
    }
    function V(q) {
      const { disabled: me, onClick: Pe } = e;
      i != null && i.disabled.value || me || ($(Pe, q), y("onClick"));
    }
    function L(q) {
      const me = q.indexOf("-"), Pe = q.indexOf(".");
      return me > -1 && (q = me === 0 ? "-" + q.replace(/-/g, "") : q.replace(/-/g, "")), Pe > -1 && (q = q.slice(0, Pe + 1) + q.slice(Pe).replace(/\./g, "")), q.replace(/[^-0-9.]/g, "");
    }
    function Y(q) {
      return e.modelModifiers.trim ? q.trim() : q;
    }
    function z(q) {
      return e.maxlength ? q.slice(0, W(e.maxlength)) : q;
    }
    function I(q) {
      const { disabled: me } = e;
      i != null && i.disabled.value || me || q.target === o.value || (E(), Me(q));
    }
    function N() {
      $(e["onUpdate:modelValue"], ""), c();
    }
    function j() {
      return u(e.rules, e.modelValue);
    }
    function E() {
      var q;
      (q = o.value) == null || q.focus();
    }
    function J() {
      o.value.blur();
    }
    function de() {
      o.value.select();
    }
    return {
      el: o,
      id: n,
      isFocusing: t,
      isComposing: r,
      errorMessage: l,
      placeholderColor: h,
      normalizedType: f,
      cursor: d,
      maxlengthText: v,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: $1,
      classes: C1,
      isEmpty: Kn,
      handleFocus: C,
      handleBlur: k,
      handleInput: O,
      handleChange: D,
      handleClear: M,
      handleClick: V,
      handleCompositionStart: S,
      handleCompositionEnd: T,
      handleMousedown: I,
      validate: j,
      resetValidation: c,
      reset: N,
      focus: E,
      blur: J,
      select: de
    };
  }
});
jp.render = z1;
var Ca = jp;
re(Ca);
ie(Ca, pu);
const MB = Ca;
var Lt = Ca;
const Yp = {
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
  onClick: F(),
  onChange: F(),
  "onUpdate:modelValue": F(),
  "onUpdate:indeterminate": F()
}, Wp = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function E1() {
  const { bindChildren: e, childProviders: n, length: o } = kn(
    Wp
  );
  return {
    length: o,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function T1() {
  const { bindParent: e, parentProvider: n, index: o } = wn(
    Wp
  );
  return {
    index: o,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
const { name: B1, n: D1, classes: I1 } = ne("checkbox"), A1 = ["aria-checked", "aria-disabled", "tabindex"];
function M1(e, n) {
  const o = _("var-icon"), t = _("var-hover-overlay"), r = _("var-form-details"), a = We("hover"), i = We("ripple");
  return g(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      R("div", {
        ref: "checkbox",
        role: "checkbox",
        "aria-checked": e.isIndeterminate ? "mixed" : e.checked,
        "aria-disabled": e.formDisabled || e.disabled,
        class: p(e.n()),
        tabindex: e.disabled || e.formDisabled ? void 0 : "0",
        onFocus: n[1] || (n[1] = (l) => e.isFocusing = !0),
        onBlur: n[2] || (n[2] = (l) => e.isFocusing = !1),
        onClick: n[3] || (n[3] = (...l) => e.handleClick && e.handleClick(...l))
      }, [
        Ne((g(), P(
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
            style: Z({ color: e.checked || e.isIndeterminate ? e.checkedColor : e.uncheckedColor })
          },
          [
            e.isIndeterminate ? H(e.$slots, "indeterminate-icon", { key: 0 }, () => [
              X(o, {
                class: p(e.n("icon")),
                name: "minus-box",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : G("v-if", !0),
            e.checked && !e.isIndeterminate ? H(e.$slots, "checked-icon", { key: 1 }, () => [
              X(o, {
                class: p(e.n("icon")),
                name: "checkbox-marked",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : G("v-if", !0),
            !e.checked && !e.isIndeterminate ? H(e.$slots, "unchecked-icon", { key: 2 }, () => [
              X(o, {
                class: p(e.n("icon")),
                name: "checkbox-blank-outline",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : G("v-if", !0),
            X(t, {
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
        )) : G("v-if", !0)
      ], 42, A1),
      X(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Kp = ee({
  name: B1,
  directives: { Ripple: rn, Hover: In },
  components: {
    VarIcon: Ge,
    VarFormDetails: Tn,
    VarHoverOverlay: Un
  },
  props: Yp,
  setup(e) {
    const n = w(null), o = w(!1), t = Gn(e, "modelValue"), r = Gn(e, "indeterminate"), a = B(() => t.value === e.checkedValue), i = B(() => e.checkedValue), { checkboxGroup: l, bindCheckboxGroup: s } = T1(), { hovering: u, handleHovering: c } = no(), { form: d, bindForm: f } = jn(), {
      errorMessage: v,
      validateWithTrigger: h,
      validate: m,
      // expose
      resetValidation: y
    } = Hn(), C = {
      checkedValue: i,
      checked: a,
      sync: O,
      validate: Y,
      resetValidation: y,
      reset: D
    };
    $(s, C), $(f, C), He(() => window, "keydown", V), He(() => window, "keyup", L);
    function k(z) {
      Ye(() => {
        const { validateTrigger: I, rules: N, modelValue: j } = e;
        h(I, z, N, j);
      });
    }
    function b(z) {
      const { checkedValue: I, onChange: N } = e;
      t.value = z, $(N, t.value, r.value), k("onChange"), z === I ? l == null || l.onChecked(I) : l == null || l.onUnchecked(I);
    }
    function S(z) {
      const { disabled: I, readonly: N, checkedValue: j, uncheckedValue: E, onClick: J } = e;
      if (d != null && d.disabled.value || I || ($(J, z), d != null && d.readonly.value || N))
        return;
      if (r.value === !0) {
        r.value = !1, $(e.onChange, t.value, r.value), k("onChange");
        return;
      }
      const de = l ? l.checkedCount.value >= Number(l.max.value) : !1;
      !a.value && de || b(a.value ? E : j);
    }
    function T() {
      n.value.focus();
    }
    function O(z) {
      const { checkedValue: I, uncheckedValue: N } = e;
      t.value = z.includes(I) ? I : N;
    }
    function D() {
      t.value = e.uncheckedValue, y();
    }
    function M(z) {
      const { checkedValue: I, uncheckedValue: N } = e;
      ![I, N].includes(z) && (z = a.value ? N : I), b(z);
    }
    function V(z) {
      if (!o.value)
        return;
      const { key: I } = z;
      (I === "Enter" || I === " ") && Me(z), I === "Enter" && n.value.click();
    }
    function L(z) {
      o.value && z.key === " " && (Me(z), n.value.click());
    }
    function Y() {
      return m(e.rules, e.modelValue);
    }
    return {
      checkbox: n,
      isFocusing: o,
      isIndeterminate: r,
      checked: a,
      errorMessage: v,
      checkboxGroupErrorMessage: l == null ? void 0 : l.errorMessage,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      hovering: u,
      n: D1,
      classes: I1,
      handleHovering: c,
      handleClick: S,
      handleTextClick: T,
      toggle: M,
      reset: D,
      validate: Y,
      resetValidation: y
    };
  }
});
Kp.render = M1;
var Sa = Kp;
re(Sa);
ie(Sa, Yp);
const NB = Sa;
var ct = Sa;
const qp = {
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
  onKeyArrowX: F()
  // internal end
}, Xp = Symbol("MENU_SELECT_BIND_MENU_OPTION_KEY");
function N1() {
  const { length: e, childProviders: n, bindChildren: o } = kn(
    Xp
  );
  return {
    length: e,
    menuOptions: n,
    bindMenuOptions: o
  };
}
function V1() {
  const { index: e, parentProvider: n, bindParent: o } = wn(
    Xp
  );
  return Fn(!!o, "MenuOption", "<var-menu-option/> must in <var-menu-select/>"), {
    index: e,
    menuSelect: n,
    bindMenuSelect: o
  };
}
var R1 = (e, n, o) => new Promise((t, r) => {
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
const { name: L1, n: F1, classes: U1 } = ne("menu-option"), H1 = ["tabindex"];
function j1(e, n) {
  const o = _("var-checkbox"), t = _("maybe-v-node"), r = _("var-icon"), a = _("var-hover-overlay"), i = We("ripple"), l = We("hover");
  return Ne((g(), P("div", {
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
    R(
      "div",
      {
        class: p(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")]))
      },
      null,
      2
      /* CLASS */
    ),
    e.multiple ? (g(), we(o, {
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
    }, null, 8, ["modelValue", "indeterminate", "disabled", "onChange"])) : G("v-if", !0),
    H(e.$slots, "default", {}, () => [
      R(
        "div",
        {
          class: p(e.classes(e.n("text")))
        },
        [
          X(t, {
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
        X(r, {
          "var-menu-option-cover": "",
          class: p(e.n("arrow-icon")),
          name: "chevron-right"
        }, null, 8, ["class"])
      ],
      2
      /* CLASS */
    )) : G("v-if", !0),
    X(a, {
      hovering: (e.hovering || e.highlight) && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 42, H1)), [
    [i, { disabled: e.disabled || !e.ripple }],
    [l, e.handleHovering, "desktop"]
  ]);
}
const Gp = ee({
  name: L1,
  directives: { Ripple: rn, Hover: In },
  components: {
    VarCheckbox: ct,
    VarHoverOverlay: Un,
    VarIcon: Ge,
    MaybeVNode: rr
  },
  props: qp,
  setup(e) {
    const n = w(), o = w(), t = w(!1), r = w(!1), a = w(!1), i = B(() => r.value), l = B(() => a.value), s = B(() => e.value), u = B(() => e.disabled), c = B(() => e.ripple), { menuSelect: d, bindMenuSelect: f } = V1(), { size: v, multiple: h, onSelect: m, computeLabel: y } = d, { hovering: C, handleHovering: k } = no(), b = B(
      () => {
        var L;
        return mn(e.label) ? e.label(
          (L = e.option) != null ? L : {
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
      sync: V
    };
    fe([() => e.label, () => e.value], y), f(S), He(() => window, "keydown", O), He(() => window, "keyup", D);
    function T() {
      if (!e.disabled && !(!h.value && e.childrenTrigger)) {
        if (h.value && a.value) {
          a.value = !1, r.value = !1, m(S);
          return;
        }
        h.value && !a.value && (r.value = !r.value), m(S);
      }
    }
    function O(L) {
      var Y;
      !t.value && !((Y = o.value) != null && Y.isFocusing) || ((L.key === "ArrowRight" || L.key === "ArrowLeft") && (Me(L), $(e.onKeyArrowX, L.key)), t.value && ((L.key === " " || L.key === "Enter") && Me(L), L.key === "Enter" && n.value.click()));
    }
    function D(L) {
      t.value && L.key === " " && (Me(L), n.value.click());
    }
    function M() {
      return R1(this, null, function* () {
        yield Ye(), m(S);
      });
    }
    function V(L, Y) {
      r.value = L, nr(Y) && (a.value = Y);
    }
    return {
      root: n,
      checkbox: o,
      optionSelected: r,
      optionIndeterminate: a,
      size: v,
      multiple: h,
      hovering: C,
      isFocusing: t,
      labelVNode: b,
      n: F1,
      classes: U1,
      handleHovering: k,
      handleClick: T,
      handleSelect: M
    };
  }
});
Gp.render = j1;
var sr = Gp;
re(sr);
ie(sr, qp);
const VB = sr;
var dt = sr;
const vu = {
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
  onOpen: F(),
  onOpened: F(),
  onClose: F(),
  onClosed: F(),
  onClickOutside: F(),
  "onUpdate:show": F(),
  // internal start
  cascadeOptimization: Boolean
  // internal end
};
var vo = "top", Vo = "bottom", Zo = "right", Bo = "left", mu = "auto", Pa = [vo, Vo, Zo, Bo], Oa = "start", Ft = "end", Y1 = "clippingParents", Zp = "viewport", zt = "popper", W1 = "reference", pc = /* @__PURE__ */ Pa.reduce(function(e, n) {
  return e.concat([n + "-" + Oa, n + "-" + Ft]);
}, []), Jp = /* @__PURE__ */ [].concat(Pa, [mu]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Oa, n + "-" + Ft]);
}, []), K1 = "beforeRead", q1 = "read", X1 = "afterRead", G1 = "beforeMain", Z1 = "main", J1 = "afterMain", Q1 = "beforeWrite", _1 = "write", x1 = "afterWrite", ew = [K1, q1, X1, G1, Z1, J1, Q1, _1, x1];
function Jn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function ro(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function go(e) {
  return Jn(e).getComputedStyle(e);
}
function Jo(e) {
  var n = Jn(e).Element;
  return e instanceof n || e instanceof Element;
}
function qn(e) {
  var n = Jn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function hu(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Jn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function nw(e) {
  return ["table", "td", "th"].indexOf(ro(e)) >= 0;
}
function Uo(e) {
  return ((Jo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function za(e) {
  return ro(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (hu(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Uo(e)
  );
}
function gl() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function vc(e) {
  return !qn(e) || // https://github.com/popperjs/popper-core/issues/837
  go(e).position === "fixed" ? null : e.offsetParent;
}
function ow(e) {
  var n = /firefox/i.test(gl()), o = /Trident/i.test(gl());
  if (o && qn(e)) {
    var t = go(e);
    if (t.position === "fixed")
      return null;
  }
  var r = za(e);
  for (hu(r) && (r = r.host); qn(r) && ["html", "body"].indexOf(ro(r)) < 0; ) {
    var a = go(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || n && a.willChange === "filter" || n && a.filter && a.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function gu(e) {
  for (var n = Jn(e), o = vc(e); o && nw(o) && go(o).position === "static"; )
    o = vc(o);
  return o && (ro(o) === "html" || ro(o) === "body" && go(o).position === "static") ? n : o || ow(e) || n;
}
function Do(e) {
  return e.split("-")[0];
}
function Ut(e) {
  return e.split("-")[1];
}
var Bt = Math.max, mc = Math.min, ft = Math.round, tw = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function rw(e) {
  var n = e.x, o = e.y, t = window, r = t.devicePixelRatio || 1;
  return {
    x: ft(n * r) / r || 0,
    y: ft(o * r) / r || 0
  };
}
function hc(e) {
  var n, o = e.popper, t = e.popperRect, r = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = i.x, v = f === void 0 ? 0 : f, h = i.y, m = h === void 0 ? 0 : h, y = typeof c == "function" ? c({
    x: v,
    y: m
  }) : {
    x: v,
    y: m
  };
  v = y.x, m = y.y;
  var C = i.hasOwnProperty("x"), k = i.hasOwnProperty("y"), b = Bo, S = vo, T = window;
  if (u) {
    var O = gu(o), D = "clientHeight", M = "clientWidth";
    if (O === Jn(o) && (O = Uo(o), go(O).position !== "static" && l === "absolute" && (D = "scrollHeight", M = "scrollWidth")), O = O, r === vo || (r === Bo || r === Zo) && a === Ft) {
      S = Vo;
      var V = d && O === T && T.visualViewport ? T.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        O[D]
      );
      m -= V - t.height, m *= s ? 1 : -1;
    }
    if (r === Bo || (r === vo || r === Vo) && a === Ft) {
      b = Zo;
      var L = d && O === T && T.visualViewport ? T.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        O[M]
      );
      v -= L - t.width, v *= s ? 1 : -1;
    }
  }
  var Y = Object.assign({
    position: l
  }, u && tw), z = c === !0 ? rw({
    x: v,
    y: m
  }) : {
    x: v,
    y: m
  };
  if (v = z.x, m = z.y, s) {
    var I;
    return Object.assign({}, Y, (I = {}, I[S] = k ? "0" : "", I[b] = C ? "0" : "", I.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + m + "px)" : "translate3d(" + v + "px, " + m + "px, 0)", I));
  }
  return Object.assign({}, Y, (n = {}, n[S] = k ? m + "px" : "", n[b] = C ? v + "px" : "", n.transform = "", n));
}
function aw(e) {
  var n = e.state, o = e.options, t = o.gpuAcceleration, r = t === void 0 ? !0 : t, a = o.adaptive, i = a === void 0 ? !0 : a, l = o.roundOffsets, s = l === void 0 ? !0 : l, u = {
    placement: Do(n.placement),
    variation: Ut(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: r,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, hc(Object.assign({}, u, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, hc(Object.assign({}, u, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Qp = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: aw,
  data: {}
};
var iw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Br(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return iw[n];
  });
}
var lw = {
  start: "end",
  end: "start"
};
function gc(e) {
  return e.replace(/start|end/g, function(n) {
    return lw[n];
  });
}
function _p() {
  return !/^((?!chrome|android).)*safari/i.test(gl());
}
function pt(e, n, o) {
  n === void 0 && (n = !1), o === void 0 && (o = !1);
  var t = e.getBoundingClientRect(), r = 1, a = 1;
  n && qn(e) && (r = e.offsetWidth > 0 && ft(t.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && ft(t.height) / e.offsetHeight || 1);
  var i = Jo(e) ? Jn(e) : window, l = i.visualViewport, s = !_p() && o, u = (t.left + (s && l ? l.offsetLeft : 0)) / r, c = (t.top + (s && l ? l.offsetTop : 0)) / a, d = t.width / r, f = t.height / a;
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
function bu(e) {
  var n = Jn(e), o = n.pageXOffset, t = n.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: t
  };
}
function yu(e) {
  return pt(Uo(e)).left + bu(e).scrollLeft;
}
function sw(e, n) {
  var o = Jn(e), t = Uo(e), r = o.visualViewport, a = t.clientWidth, i = t.clientHeight, l = 0, s = 0;
  if (r) {
    a = r.width, i = r.height;
    var u = _p();
    (u || !u && n === "fixed") && (l = r.offsetLeft, s = r.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: l + yu(e),
    y: s
  };
}
function uw(e) {
  var n, o = Uo(e), t = bu(e), r = (n = e.ownerDocument) == null ? void 0 : n.body, a = Bt(o.scrollWidth, o.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = Bt(o.scrollHeight, o.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -t.scrollLeft + yu(e), s = -t.scrollTop;
  return go(r || o).direction === "rtl" && (l += Bt(o.clientWidth, r ? r.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: s
  };
}
function wu(e) {
  var n = go(e), o = n.overflow, t = n.overflowX, r = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + r + t);
}
function xp(e) {
  return ["html", "body", "#document"].indexOf(ro(e)) >= 0 ? e.ownerDocument.body : qn(e) && wu(e) ? e : xp(za(e));
}
function Dt(e, n) {
  var o;
  n === void 0 && (n = []);
  var t = xp(e), r = t === ((o = e.ownerDocument) == null ? void 0 : o.body), a = Jn(t), i = r ? [a].concat(a.visualViewport || [], wu(t) ? t : []) : t, l = n.concat(i);
  return r ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Dt(za(i)))
  );
}
function cw(e, n) {
  var o = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (o && hu(o)) {
    var t = n;
    do {
      if (t && e.isSameNode(t))
        return !0;
      t = t.parentNode || t.host;
    } while (t);
  }
  return !1;
}
function bl(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function dw(e, n) {
  var o = pt(e, !1, n === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function bc(e, n, o) {
  return n === Zp ? bl(sw(e, o)) : Jo(n) ? dw(n, o) : bl(uw(Uo(e)));
}
function fw(e) {
  var n = Dt(za(e)), o = ["absolute", "fixed"].indexOf(go(e).position) >= 0, t = o && qn(e) ? gu(e) : e;
  return Jo(t) ? n.filter(function(r) {
    return Jo(r) && cw(r, t) && ro(r) !== "body";
  }) : [];
}
function pw(e, n, o, t) {
  var r = n === "clippingParents" ? fw(e) : [].concat(n), a = [].concat(r, [o]), i = a[0], l = a.reduce(function(s, u) {
    var c = bc(e, u, t);
    return s.top = Bt(c.top, s.top), s.right = mc(c.right, s.right), s.bottom = mc(c.bottom, s.bottom), s.left = Bt(c.left, s.left), s;
  }, bc(e, i, t));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function vw(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ev(e) {
  var n = e.reference, o = e.element, t = e.placement, r = t ? Do(t) : null, a = t ? Ut(t) : null, i = n.x + n.width / 2 - o.width / 2, l = n.y + n.height / 2 - o.height / 2, s;
  switch (r) {
    case vo:
      s = {
        x: i,
        y: n.y - o.height
      };
      break;
    case Vo:
      s = {
        x: i,
        y: n.y + n.height
      };
      break;
    case Zo:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case Bo:
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
  var u = r ? vw(r) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case Oa:
        s[u] = s[u] - (n[c] / 2 - o[c] / 2);
        break;
      case Ft:
        s[u] = s[u] + (n[c] / 2 - o[c] / 2);
        break;
    }
  }
  return s;
}
function mw() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function hw(e) {
  return Object.assign({}, mw(), e);
}
function gw(e, n) {
  return n.reduce(function(o, t) {
    return o[t] = e, o;
  }, {});
}
function nv(e, n) {
  n === void 0 && (n = {});
  var o = n, t = o.placement, r = t === void 0 ? e.placement : t, a = o.strategy, i = a === void 0 ? e.strategy : a, l = o.boundary, s = l === void 0 ? Y1 : l, u = o.rootBoundary, c = u === void 0 ? Zp : u, d = o.elementContext, f = d === void 0 ? zt : d, v = o.altBoundary, h = v === void 0 ? !1 : v, m = o.padding, y = m === void 0 ? 0 : m, C = hw(typeof y != "number" ? y : gw(y, Pa)), k = f === zt ? W1 : zt, b = e.rects.popper, S = e.elements[h ? k : f], T = pw(Jo(S) ? S : S.contextElement || Uo(e.elements.popper), s, c, i), O = pt(e.elements.reference), D = ev({
    reference: O,
    element: b,
    placement: r
  }), M = bl(Object.assign({}, b, D)), V = f === zt ? M : O, L = {
    top: T.top - V.top + C.top,
    bottom: V.bottom - T.bottom + C.bottom,
    left: T.left - V.left + C.left,
    right: V.right - T.right + C.right
  }, Y = e.modifiersData.offset;
  if (f === zt && Y) {
    var z = Y[r];
    Object.keys(L).forEach(function(I) {
      var N = [Zo, Vo].indexOf(I) >= 0 ? 1 : -1, j = [vo, Vo].indexOf(I) >= 0 ? "y" : "x";
      L[I] += z[j] * N;
    });
  }
  return L;
}
function bw(e, n) {
  n === void 0 && (n = {});
  var o = n, t = o.placement, r = o.boundary, a = o.rootBoundary, i = o.padding, l = o.flipVariations, s = o.allowedAutoPlacements, u = s === void 0 ? Jp : s, c = Ut(t), d = c ? l ? pc : pc.filter(function(h) {
    return Ut(h) === c;
  }) : Pa, f = d.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  f.length === 0 && (f = d);
  var v = f.reduce(function(h, m) {
    return h[m] = nv(e, {
      placement: m,
      boundary: r,
      rootBoundary: a,
      padding: i
    })[Do(m)], h;
  }, {});
  return Object.keys(v).sort(function(h, m) {
    return v[h] - v[m];
  });
}
function yw(e) {
  if (Do(e) === mu)
    return [];
  var n = Br(e);
  return [gc(e), n, gc(n)];
}
function ww(e) {
  var n = e.state, o = e.options, t = e.name;
  if (!n.modifiersData[t]._skip) {
    for (var r = o.mainAxis, a = r === void 0 ? !0 : r, i = o.altAxis, l = i === void 0 ? !0 : i, s = o.fallbackPlacements, u = o.padding, c = o.boundary, d = o.rootBoundary, f = o.altBoundary, v = o.flipVariations, h = v === void 0 ? !0 : v, m = o.allowedAutoPlacements, y = n.options.placement, C = Do(y), k = C === y, b = s || (k || !h ? [Br(y)] : yw(y)), S = [y].concat(b).reduce(function(te, he) {
      return te.concat(Do(he) === mu ? bw(n, {
        placement: he,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: m
      }) : he);
    }, []), T = n.rects.reference, O = n.rects.popper, D = /* @__PURE__ */ new Map(), M = !0, V = S[0], L = 0; L < S.length; L++) {
      var Y = S[L], z = Do(Y), I = Ut(Y) === Oa, N = [vo, Vo].indexOf(z) >= 0, j = N ? "width" : "height", E = nv(n, {
        placement: Y,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), J = N ? I ? Zo : Bo : I ? Vo : vo;
      T[j] > O[j] && (J = Br(J));
      var de = Br(J), q = [];
      if (a && q.push(E[z] <= 0), l && q.push(E[J] <= 0, E[de] <= 0), q.every(function(te) {
        return te;
      })) {
        V = Y, M = !1;
        break;
      }
      D.set(Y, q);
    }
    if (M)
      for (var me = h ? 3 : 1, Pe = function(he) {
        var A = S.find(function(K) {
          var pe = D.get(K);
          if (pe)
            return pe.slice(0, he).every(function(Se) {
              return Se;
            });
        });
        if (A)
          return V = A, "break";
      }, U = me; U > 0; U--) {
        var Q = Pe(U);
        if (Q === "break") break;
      }
    n.placement !== V && (n.modifiersData[t]._skip = !0, n.placement = V, n.reset = !0);
  }
}
const kw = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ww,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function $w(e, n, o) {
  var t = Do(e), r = [Bo, vo].indexOf(t) >= 0 ? -1 : 1, a = typeof o == "function" ? o(Object.assign({}, n, {
    placement: e
  })) : o, i = a[0], l = a[1];
  return i = i || 0, l = (l || 0) * r, [Bo, Zo].indexOf(t) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function Cw(e) {
  var n = e.state, o = e.options, t = e.name, r = o.offset, a = r === void 0 ? [0, 0] : r, i = Jp.reduce(function(c, d) {
    return c[d] = $w(d, n.rects, a), c;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[t] = i;
}
const Sw = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Cw
};
function Pw(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Ow(e) {
  return e === Jn(e) || !qn(e) ? bu(e) : Pw(e);
}
function zw(e) {
  var n = e.getBoundingClientRect(), o = ft(n.width) / e.offsetWidth || 1, t = ft(n.height) / e.offsetHeight || 1;
  return o !== 1 || t !== 1;
}
function Ew(e, n, o) {
  o === void 0 && (o = !1);
  var t = qn(n), r = qn(n) && zw(n), a = Uo(n), i = pt(e, r, o), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (t || !t && !o) && ((ro(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  wu(a)) && (l = Ow(n)), qn(n) ? (s = pt(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : a && (s.x = yu(a))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function Tw(e) {
  var n = pt(e), o = e.offsetWidth, t = e.offsetHeight;
  return Math.abs(n.width - o) <= 1 && (o = n.width), Math.abs(n.height - t) <= 1 && (t = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: t
  };
}
function Bw(e) {
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
function Dw(e) {
  var n = Bw(e);
  return ew.reduce(function(o, t) {
    return o.concat(n.filter(function(r) {
      return r.phase === t;
    }));
  }, []);
}
function Iw(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(o) {
      Promise.resolve().then(function() {
        n = void 0, o(e());
      });
    })), n;
  };
}
function Aw(e) {
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
var yc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function wc() {
  for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
    n[o] = arguments[o];
  return !n.some(function(t) {
    return !(t && typeof t.getBoundingClientRect == "function");
  });
}
function Mw(e) {
  e === void 0 && (e = {});
  var n = e, o = n.defaultModifiers, t = o === void 0 ? [] : o, r = n.defaultOptions, a = r === void 0 ? yc : r;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, yc, a),
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
        var k = typeof C == "function" ? C(c.options) : C;
        m(), c.options = Object.assign({}, a, c.options, k), c.scrollParents = {
          reference: Jo(l) ? Dt(l) : l.contextElement ? Dt(l.contextElement) : [],
          popper: Dt(s)
        };
        var b = Dw(Aw([].concat(t, c.options.modifiers)));
        return c.orderedModifiers = b.filter(function(S) {
          return S.enabled;
        }), h(), v.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var C = c.elements, k = C.reference, b = C.popper;
          if (wc(k, b)) {
            c.rects = {
              reference: Ew(k, gu(b), c.options.strategy === "fixed"),
              popper: Tw(b)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(L) {
              return c.modifiersData[L.name] = Object.assign({}, L.data);
            });
            for (var S = 0; S < c.orderedModifiers.length; S++) {
              if (c.reset === !0) {
                c.reset = !1, S = -1;
                continue;
              }
              var T = c.orderedModifiers[S], O = T.fn, D = T.options, M = D === void 0 ? {} : D, V = T.name;
              typeof O == "function" && (c = O({
                state: c,
                options: M,
                name: V,
                instance: v
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Iw(function() {
        return new Promise(function(y) {
          v.forceUpdate(), y(c);
        });
      }),
      destroy: function() {
        m(), f = !0;
      }
    };
    if (!wc(l, s))
      return v;
    v.setOptions(u).then(function(y) {
      !f && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function h() {
      c.orderedModifiers.forEach(function(y) {
        var C = y.name, k = y.options, b = k === void 0 ? {} : k, S = y.effect;
        if (typeof S == "function") {
          var T = S({
            state: c,
            name: C,
            instance: v,
            options: b
          }), O = function() {
          };
          d.push(T || O);
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
var hr = {
  passive: !0
};
function Nw(e) {
  var n = e.state, o = e.instance, t = e.options, r = t.scroll, a = r === void 0 ? !0 : r, i = t.resize, l = i === void 0 ? !0 : i, s = Jn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", o.update, hr);
  }), l && s.addEventListener("resize", o.update, hr), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", o.update, hr);
    }), l && s.removeEventListener("resize", o.update, hr);
  };
}
const Vw = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Nw,
  data: {}
};
function Rw(e) {
  var n = e.state, o = e.name;
  n.modifiersData[o] = ev({
    reference: n.rects.reference,
    element: n.rects.popper,
    placement: n.placement
  });
}
const Lw = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Rw,
  data: {}
};
function Fw(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(o) {
    var t = n.styles[o] || {}, r = n.attributes[o] || {}, a = n.elements[o];
    !qn(a) || !ro(a) || (Object.assign(a.style, t), Object.keys(r).forEach(function(i) {
      var l = r[i];
      l === !1 ? a.removeAttribute(i) : a.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function Uw(e) {
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
      !qn(r) || !ro(r) || (Object.assign(r.style, l), Object.keys(a).forEach(function(s) {
        r.removeAttribute(s);
      }));
    });
  };
}
const Hw = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Fw,
  effect: Uw,
  requires: ["computeStyles"]
};
var jw = [Vw, Lw, Qp, Hw], Yw = /* @__PURE__ */ Mw({
  defaultModifiers: jw
}), Ww = Object.defineProperty, Kw = Object.defineProperties, qw = Object.getOwnPropertyDescriptors, kc = Object.getOwnPropertySymbols, Xw = Object.prototype.hasOwnProperty, Gw = Object.prototype.propertyIsEnumerable, $c = (e, n, o) => n in e ? Ww(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ol = (e, n) => {
  for (var o in n || (n = {}))
    Xw.call(n, o) && $c(e, o, n[o]);
  if (kc)
    for (var o of kc(n))
      Gw.call(n, o) && $c(e, o, n[o]);
  return e;
}, tl = (e, n) => Kw(e, qw(n)), Cc = (e, n, o) => new Promise((t, r) => {
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
function ov(e) {
  const n = w(null), o = w(null), t = w({ width: 0, height: 0 }), r = Gn(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(E, J) {
      $(J ? e.onOpen : e.onClose);
    }
  }), { zIndex: a } = ir(() => r.value, 1);
  su(() => r.value, a);
  let i = null, l, s = !1, u = !1, c = !0;
  He(() => window, "keydown", z), fe(() => [e.offsetX, e.offsetY, e.placement, e.strategy], I), fe(() => e.disabled, j), fe(
    () => r.value,
    (E) => {
      E && I();
    }
  ), to(I), bo(d), Jt(f);
  function d() {
    const E = V();
    i = Yw(E, o.value, M()), E.addEventListener("mouseenter", m), E.addEventListener("mouseleave", y), E.addEventListener("click", b), document.addEventListener("click", S);
  }
  function f() {
    const E = V();
    E && (E.removeEventListener("mouseenter", m), E.removeEventListener("mouseleave", y), E.removeEventListener("click", b)), i.destroy(), document.removeEventListener("click", S);
  }
  function v() {
    const E = V();
    if (!E)
      return;
    const { width: J, height: de } = Zn(E);
    t.value = {
      width: on(J),
      height: on(de)
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
    e.trigger === "hover" && (u = !0, N());
  }
  function y() {
    return Cc(this, null, function* () {
      e.trigger === "hover" && (u = !1, yield bn(), !s && j());
    });
  }
  function C() {
    e.trigger === "hover" && (s = !0, e.cascadeOptimization && (c = !1));
  }
  function k() {
    return Cc(this, null, function* () {
      e.trigger === "hover" && (s = !1, yield bn(), !u && j());
    });
  }
  function b() {
    if (e.trigger === "click") {
      if (e.closeOnClickReference && r.value) {
        j();
        return;
      }
      N();
    }
  }
  function S(E) {
    const J = V();
    if (J && !J.contains(E.target)) {
      if (e.trigger !== "click")
        return;
      T(), $(e.onClickOutside, E);
    }
  }
  function T() {
    j();
  }
  function O() {
    I(), $(e.onClosed);
  }
  function D() {
    const { offsetX: E, offsetY: J, placement: de } = e;
    v();
    const q = {
      x: on(E),
      y: on(J)
    };
    switch (de) {
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
          placement: de,
          skidding: q.y,
          distance: -q.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: de,
          skidding: q.x,
          distance: -q.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: de,
          skidding: q.x,
          distance: q.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: de,
          skidding: q.y,
          distance: q.x
        };
    }
  }
  function M() {
    const { placement: E, skidding: J, distance: de } = D(), q = [
      tl(ol({}, kw), {
        enabled: r.value
      }),
      tl(ol({}, Sw), {
        options: {
          offset: [J, de]
        }
      }),
      tl(ol({}, Qp), {
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
        fn({ state: me }) {
          me.styles.popper.transformOrigin = h();
        }
      }
    ];
    return {
      placement: E,
      modifiers: q,
      strategy: e.strategy
    };
  }
  function V() {
    var E, J;
    const de = (E = l ?? e.reference) != null ? E : n.value;
    return sn(de) ? (J = n.value) == null ? void 0 : J.querySelector(de) : de;
  }
  function L(E) {
    c = E;
  }
  function Y(E) {
    f(), l = E, d();
  }
  function z(E) {
    const { closeOnKeyEscape: J = !1 } = e;
    E.key === "Escape" && J && r.value && (Me(E), j());
  }
  function I() {
    i.setOptions(M());
  }
  function N() {
    e.disabled || (r.value = !0, $(e["onUpdate:show"], !0));
  }
  function j() {
    c && (r.value = !1, $(e["onUpdate:show"], !1));
  }
  return {
    show: r,
    popover: o,
    zIndex: a,
    host: n,
    referenceSize: t,
    handlePopoverClose: T,
    handlePopoverMouseenter: C,
    handlePopoverMouseleave: k,
    handleClosed: O,
    setReference: Y,
    setAllowClose: L,
    resize: I,
    open: N,
    close: j
  };
}
const { name: Zw, n: Jw, classes: Qw } = ne("menu");
function _w(e, n) {
  return g(), P(
    "div",
    {
      ref: "host",
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      H(e.$slots, "default"),
      (g(), we(lo, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        X(xe, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: ue(() => [
            Ne(R(
              "div",
              {
                ref: "popover",
                style: Z({
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
                onClick: n[0] || (n[0] = Rn(() => {
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
              [eo, e.show]
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
const tv = ee({
  name: Zw,
  props: vu,
  setup(e) {
    const { disabled: n } = xo(), {
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
      resize: h,
      // expose
      setReference: m
    } = ov(e);
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
      formatElevation: dn,
      toSizeUnit: ze,
      n: Jw,
      classes: Qw,
      handlePopoverMouseenter: l,
      handlePopoverMouseleave: s,
      handlePopoverClose: u,
      handleClosed: c,
      resize: h,
      open: f,
      close: v,
      setReference: m
    };
  }
});
tv.render = _w;
var ur = tv;
re(ur);
ie(ur, vu);
const RB = ur;
var Ht = ur;
function rv(e) {
  const {
    multiple: n,
    modelValue: o,
    optionProviders: t,
    optionProvidersLength: r,
    optionIsIndeterminate: a
  } = e, i = w(""), l = w([]);
  fe(o, f, { deep: !0 }), fe(r, f);
  function s() {
    const v = n(), h = o();
    v && (l.value = h.map(u)), !v && !Kn(h) && (i.value = u(h)), !v && Kn(h) && (i.value = "");
  }
  function u(v) {
    var h;
    const m = t();
    let y = m.find(({ value: C }) => C.value === v);
    return y || (y = m.find(({ label: C }) => C.value === v)), (h = y == null ? void 0 : y.label.value) != null ? h : "";
  }
  function c({ value: v, label: h }) {
    var m;
    return (m = v.value) != null ? m : h.value;
  }
  function d(v) {
    const h = n(), m = t();
    return h ? m.filter(({ selected: y }) => y.value).map(c) : c(v);
  }
  function f() {
    const v = n(), h = o(), m = t();
    v ? m.forEach(
      (y) => y.sync(
        h.includes(c(y)),
        a ? a(y) : void 0
      )
    ) : m.forEach((y) => y.sync(h === c(y))), s();
  }
  return {
    label: i,
    labels: l,
    getOptionProviderKey: c,
    computeLabel: s,
    getSelectedValue: d
  };
}
var xw = Object.defineProperty, ek = Object.defineProperties, nk = Object.getOwnPropertyDescriptors, Sc = Object.getOwnPropertySymbols, ok = Object.prototype.hasOwnProperty, tk = Object.prototype.propertyIsEnumerable, Pc = (e, n, o) => n in e ? xw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, rk = (e, n) => {
  for (var o in n || (n = {}))
    ok.call(n, o) && Pc(e, o, n[o]);
  if (Sc)
    for (var o of Sc(n))
      tk.call(n, o) && Pc(e, o, n[o]);
  return e;
}, ak = (e, n) => ek(e, nk(n));
const Zr = ak(rk({
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
  "onUpdate:modelValue": F(),
  onSelect: F()
}, Ie(vu, [
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
  onKeyEscape: F()
  // internal end
});
var ik = Object.defineProperty, Oc = Object.getOwnPropertySymbols, lk = Object.prototype.hasOwnProperty, sk = Object.prototype.propertyIsEnumerable, zc = (e, n, o) => n in e ? ik(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, uk = (e, n) => {
  for (var o in n || (n = {}))
    lk.call(n, o) && zc(e, o, n[o]);
  if (Oc)
    for (var o of Oc(n))
      sk.call(n, o) && zc(e, o, n[o]);
  return e;
}, ck = (e, n, o) => new Promise((t, r) => {
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
const { name: dk, n: fk } = ne("menu-children"), pk = { ref: "menuOptions" };
function vk(e, n) {
  const o = _("var-menu-option"), t = _("var-menu-children"), r = _("var-menu");
  return g(), we(r, {
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
  }, Xo({
    default: ue(() => [
      X(o, {
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
      fn: ue(() => [
        R(
          "div",
          pk,
          [
            (g(!0), P(
              Ae,
              null,
              qe(e.options, (a) => (g(), P(
                Ae,
                {
                  key: a[e.valueKey]
                },
                [
                  a[e.childrenKey] ? (g(), we(t, {
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
                  }, null, 8, ["parent-show", "option", "options", "highlight-options", "disabled", "onKeyArrowX", "onKeyArrowRightOpen", "onMouseenter"])) : (g(), we(o, {
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
const av = ee({
  name: dk,
  components: {
    VarMenu: ur,
    VarMenuOption: sr
  },
  props: uk({
    parentShow: Boolean,
    disabled: Boolean,
    option: {
      type: Object,
      required: !0
    },
    highlightOptions: Ie(Zr, "options"),
    onKeyArrowX: F(),
    onKeyArrowRightOpen: F(),
    onMouseenter: F()
  }, Ie(Zr, ["options", "valueKey", "labelKey", "childrenKey"])),
  setup(e) {
    const n = w(!1), o = w(), t = w(), r = w(), a = w();
    fe(
      () => e.parentShow,
      (f) => {
        f || (n.value = !1);
      },
      { immediate: !0 }
    );
    function i(f) {
      return ck(this, null, function* () {
        var v;
        $(e.onKeyArrowX, f), f === "ArrowRight" && ($(e.onKeyArrowRightOpen), (v = o.value) == null || v.open(), yield po(), du(o.value.$el, r.value, "ArrowDown"));
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
      (v = a.value) == null || v.forEach((h) => {
        if (h.allowClose(), f == null) {
          h.close();
          return;
        }
        h.option.value !== f.value && h.close();
      });
    }
    function d() {
      $(e.onMouseenter);
    }
    return {
      show: n,
      menu: o,
      trigger: t,
      menuOptions: r,
      menuChildren: a,
      n: fk,
      close: s,
      handleArrowLeft: l,
      handleArrowRight: i,
      handleMouseenter: d,
      allowClose: u,
      allowChildrenClose: c
    };
  }
});
av.render = vk;
var mk = av, hk = Object.defineProperty, gk = Object.defineProperties, bk = Object.getOwnPropertyDescriptors, Ec = Object.getOwnPropertySymbols, yk = Object.prototype.hasOwnProperty, wk = Object.prototype.propertyIsEnumerable, Tc = (e, n, o) => n in e ? hk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, kk = (e, n) => {
  for (var o in n || (n = {}))
    yk.call(n, o) && Tc(e, o, n[o]);
  if (Ec)
    for (var o of Ec(n))
      wk.call(n, o) && Tc(e, o, n[o]);
  return e;
}, $k = (e, n) => gk(e, bk(n));
const { name: Ck, n: Sk, classes: Pk } = ne("menu-select");
function Ok(e, n) {
  const o = _("var-menu-children"), t = _("var-menu-option"), r = _("var-menu");
  return g(), we(r, {
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
    menu: ue(() => [
      R(
        "div",
        {
          ref: "menuOptionsRef",
          class: p(e.classes(e.n("menu"), e.formatElevation(e.elevation, 3), [e.scrollable, e.n("--scrollable")]))
        },
        [
          (g(!0), P(
            Ae,
            null,
            qe(e.options, (a) => (g(), P(
              Ae,
              {
                key: a[e.valueKey]
              },
              [
                a[e.childrenKey] ? (g(), we(o, {
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
                }, null, 8, ["parent-show", "option", "options", "highlight-options", "disabled", "onKeyArrowRightOpen", "onMouseenter"])) : (g(), we(t, {
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
    default: ue(() => [
      H(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["show", "class", "disabled", "trigger", "reference", "placement", "strategy", "offset-x", "offset-y", "teleport", "same-width", "elevation", "popover-class", "close-on-click-reference", "onOpen", "onOpened", "onClose", "onClosed", "onClickOutside"]);
}
const iv = ee({
  name: Ck,
  components: { VarMenu: Ht, VarMenuOption: dt, VarMenuChildren: mk },
  props: Zr,
  setup(e) {
    const n = Gn(e, "show"), o = w(), t = w(), r = w(), a = B(() => k(e.options)), { menuOptions: i, length: l, bindMenuOptions: s } = N1(), { computeLabel: u, getSelectedValue: c, getOptionProviderKey: d } = rv({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => i,
      optionProvidersLength: () => l.value,
      optionIsIndeterminate(z) {
        var I;
        const N = h(z.value.value);
        if (!N)
          return !1;
        const j = ((I = N._children) != null ? I : []).filter((J) => !J.disabled), E = j.filter((J) => e.modelValue.includes(J.value));
        return E.length > 0 && E.length < j.length;
      }
    }), f = B(() => {
      const { multiple: z, modelValue: I } = e;
      if (z)
        return [];
      const N = a.value.find((J) => J.value === I), j = [];
      let E = N == null ? void 0 : N._parent;
      for (; E; )
        j.push(E), E = E._parent;
      return j;
    }), v = {
      size: B(() => e.size),
      multiple: B(() => e.multiple),
      computeLabel: u,
      onSelect: b
    };
    s(v), He(() => window, "keydown", T);
    function h(z) {
      return a.value.find((I) => I.value === z);
    }
    function m(z) {
      return i.find((I) => I.value.value === z);
    }
    function y(z) {
      return z[e.childrenKey];
    }
    function C(z) {
      const I = [];
      N(z);
      function N(j) {
        j.forEach((E) => {
          I.push(E);
          const J = y(E);
          J && N(J);
        });
      }
      return I;
    }
    function k(z) {
      function I(N, j) {
        return N.map((E) => {
          E = $k(kk({}, E), { _rawOption: E }), j && (E._parent = j);
          const J = y(E);
          if (J) {
            const de = I(J, E);
            E[e.childrenKey] = de, E._children = C(de);
          }
          return E;
        });
      }
      return C(I(z));
    }
    function b(z) {
      var I, N;
      const { multiple: j, closeOnSelect: E } = e, { value: J, label: de, selected: q, disabled: me, ripple: Pe } = z, U = h(J.value);
      if (U) {
        const he = ((I = U._children) != null ? I : []).filter((A) => !A.disabled).map((A) => A.value);
        j && q.value && (i.forEach((A) => {
          he.includes(A.value.value) && A.sync(!0, !1);
        }), S(U)), j && !q.value && (i.forEach((A) => {
          he.includes(A.value.value) && A.sync(!1, !1);
        }), S(U));
      }
      const Q = c(z), te = (N = U == null ? void 0 : U._rawOption) != null ? N : {
        value: J.value,
        label: de.value,
        disabled: me.value,
        ripple: Pe.value
      };
      $(e.onSelect, d(z), te), $(e["onUpdate:modelValue"], Q), !j && E && (o.value.$el.focus(), V());
    }
    function S(z) {
      let I = z._parent;
      for (; I; ) {
        const N = m(I.value), j = y(I).filter((de) => !de.disabled), E = j.every((de) => !m(de.value).selected.value), J = j.every((de) => m(de.value).selected.value);
        E ? N.sync(!1, !1) : J ? N.sync(!0, !1) : N.sync(!1, !0), I = I._parent;
      }
    }
    function T(z) {
      if (e.disabled || !n.value)
        return;
      const { key: I } = z;
      if (["Escape", "ArrowDown", "ArrowUp"].includes(I) && Me(z), I === "Escape") {
        o.value.$el.focus(), V(), $(e.onKeyEscape);
        return;
      }
      (I === "ArrowDown" || I === "ArrowUp") && du(
        o.value.$el,
        t.value,
        I,
        (N, j, E) => E ? !0 : O(N) === O(j)
      );
    }
    function O(z) {
      var I, N;
      if (z.classList.contains("var-menu-option--children-trigger"))
        return (I = z.parentNode) == null ? void 0 : I.parentNode;
      if (z.classList.contains("var-checkbox")) {
        const j = (N = z.parentNode) == null ? void 0 : N.parentNode;
        if (j)
          return O(j);
      }
      return z.parentNode;
    }
    function D(z) {
      var I;
      (I = r.value) == null || I.forEach((N) => {
        if (N.allowClose(), z == null) {
          N.close();
          return;
        }
        N.option.value !== z.value && N.close();
      });
    }
    function M() {
      var z;
      (z = o.value) == null || z.open();
    }
    function V() {
      var z;
      (z = o.value) == null || z.close();
    }
    function L() {
      var z;
      (z = o.value) == null || z.resize();
    }
    function Y(z) {
      var I;
      (I = o.value) == null || I.setReference(z);
    }
    return {
      show: n,
      menu: o,
      menuOptionsRef: t,
      menuChildren: r,
      highlightOptions: f,
      n: Sk,
      classes: Pk,
      allowChildrenClose: D,
      formatElevation: dn,
      open: M,
      close: V,
      resize: L,
      setReference: Y
    };
  }
});
iv.render = Ok;
var Ea = iv;
re(Ea);
ie(Ea, Zr);
const LB = Ea;
var jt = Ea, zk = Object.defineProperty, Bc = Object.getOwnPropertySymbols, Ek = Object.prototype.hasOwnProperty, Tk = Object.prototype.propertyIsEnumerable, Dc = (e, n, o) => n in e ? zk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Bk = (e, n) => {
  for (var o in n || (n = {}))
    Ek.call(n, o) && Dc(e, o, n[o]);
  if (Bc)
    for (var o of Bc(n))
      Tk.call(n, o) && Dc(e, o, n[o]);
  return e;
};
const lv = Bk({
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
  onFocus: F(),
  onBlur: F(),
  onInput: F(),
  onChange: F(),
  onClear: F(),
  onClick: F(),
  "onUpdate:modelValue": F()
}, Ie(pu, [
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
var Ic = (e, n, o) => new Promise((t, r) => {
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
const { name: Dk, n: Ik } = ne("auto-complete"), Ak = ["tabindex"];
function Mk(e, n) {
  const o = _("var-input"), t = _("var-menu-option"), r = _("var-menu-select"), a = _("var-form-details");
  return g(), P("div", {
    ref: "root",
    class: p(e.n()),
    tabindex: e.disabled || e.formDisabled ? void 0 : "0",
    onFocusin: n[2] || (n[2] = (...i) => e.focus && e.focus(...i)),
    onClick: n[3] || (n[3] = (...i) => e.handleClick && e.handleClick(...i))
  }, [
    X(r, {
      show: e.isShowMenuSelect,
      "onUpdate:show": n[1] || (n[1] = (i) => e.isShowMenuSelect = i),
      "same-width": "",
      "auto-complete-cover": "",
      scrollable: "",
      trigger: "manual",
      placement: "bottom",
      disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
      class: p(e.n("menu-select")),
      "popover-class": e.variant === "standard" ? e.n("--standard-menu-margin") : void 0,
      "onUpdate:modelValue": e.handleAutoComplete,
      onKeyEscape: e.handleKeyEscape
    }, {
      options: ue(() => [
        R(
          "div",
          {
            class: p(e.n("options"))
          },
          [
            (g(!0), P(
              Ae,
              null,
              qe(e.viewOptions, (i) => (g(), we(t, {
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
      default: ue(() => [
        X(o, je({ ref: "input" }, {
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
          onInput: e.handleInput,
          onBlur: e.handleBlur,
          onClear: e.handleClear,
          onChange: e.handleChange
        }), Xo({
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots["prepend-icon"] ? {
            name: "prepend-icon",
            fn: ue(() => [
              H(e.$slots, "prepend-icon")
            ]),
            key: "0"
          } : void 0,
          e.$slots["append-icon"] ? {
            name: "append-icon",
            fn: ue(() => [
              H(e.$slots, "append-icon")
            ]),
            key: "1"
          } : void 0,
          e.$slots["clear-icon"] ? {
            name: "clear-icon",
            fn: ue(({ clear: i }) => [
              H(e.$slots, "clear-icon", { clear: i })
            ]),
            key: "2"
          } : void 0,
          e.$slots["extra-message"] ? {
            name: "extra-message",
            fn: ue(() => [
              H(e.$slots, "extra-message")
            ]),
            key: "3"
          } : void 0
        ]), 1040, ["modelValue", "is-force-focusing-effect", "is-force-error-effect", "onInput", "onBlur", "onClear", "onChange"])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["show", "disabled", "class", "popover-class", "onUpdate:modelValue", "onKeyEscape"]),
    X(a, {
      "error-message": e.errorMessage,
      "extra-message": e.maxlengthText
    }, null, 8, ["error-message", "extra-message"])
  ], 42, Ak);
}
const sv = ee({
  name: Dk,
  components: {
    VarInput: Lt,
    VarMenuSelect: jt,
    VarMenuOption: dt,
    VarFormDetails: Tn
  },
  props: lv,
  setup(e) {
    const n = w(), o = w(), t = w(!1), r = Gn(e, "modelValue"), a = w([]), i = w(!1), l = B(() => {
      const { maxlength: j } = e;
      return j ? Kn(r.value) ? `0 / ${j}` : `${String(r.value).length}/${j}` : "";
    }), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: c,
      // expose
      resetValidation: d
    } = Hn(), { bindForm: f, form: v } = jn();
    let h = !1;
    const m = {
      reset: y,
      resetValidation: d,
      validate: C
    };
    xf(
      () => n.value,
      "click",
      () => {
        if (h) {
          h = !1;
          return;
        }
        b();
      }
    ), fe(() => [e.options, t.value], D), $(f, m), He(() => window, "keydown", O);
    function y() {
      $(e["onUpdate:modelValue"], ""), d();
    }
    function C() {
      return c(e.rules, e.modelValue);
    }
    function k() {
      t.value || e.disabled || v != null && v.disabled.value || (t.value = !0, o.value.focus(), $(e.onFocus), T("onFocus"));
    }
    function b() {
      t.value && (t.value = !1, i.value = !1, o.value.blur(), $(e.onBlur), T("onBlur"));
    }
    function S() {
      i.value || b();
    }
    function T(j) {
      Ye(() => {
        const { validateTrigger: E, rules: J, modelValue: de } = e;
        u(E, j, J, de);
      });
    }
    function O(j) {
      return Ic(this, null, function* () {
        var E;
        if (v != null && v.disabled.value || v != null && v.readonly.value || e.disabled || e.readonly || !t.value || !i.value)
          return;
        const { key: J } = j;
        if (J === "Tab") {
          Me(j), n.value.focus(), i.value = !1;
          return;
        }
        if (!["ArrowUp", "ArrowDown", "Enter"].includes(J)) {
          o.value.focus();
          return;
        }
        J === "Enter" && (yield po(), (E = o.value) == null || E.focus());
      });
    }
    function D() {
      t.value && (i.value = N(r.value)), i.value && (a.value = e.options);
    }
    function M(j, E) {
      D(), $(e.onInput, j, E), T("onInput");
    }
    function V() {
      h = !0, D(), $(e.onClear, r.value), T("onClear");
    }
    function L(j) {
      e.disabled || v != null && v.disabled.value || ($(e.onClick, j), T("onClick"));
    }
    function Y(j) {
      $(e.onChange, j), T("onChange");
    }
    function z(j) {
      return Ic(this, null, function* () {
        var E;
        e.maxlength != null && (j = j.slice(0, W(e.maxlength))), j !== r.value && (r.value = j, $(e.onChange, j), T("onChange")), yield po(), (E = o.value) == null || E.focus();
      });
    }
    function I() {
      o.value.focus();
    }
    function N(j) {
      return e.disabled || e.readonly || v != null && v.disabled.value || v != null && v.readonly.value ? !1 : e.options.length > 0 && (e.getShow != null ? e.getShow(j) : j.length > 0);
    }
    return {
      root: n,
      input: o,
      value: r,
      isShowMenuSelect: i,
      viewOptions: a,
      isFocusing: t,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      errorMessage: s,
      maxlengthText: l,
      n: Ik,
      handleInput: M,
      handleClear: V,
      handleClick: L,
      handleChange: Y,
      handleBlur: S,
      handleKeyEscape: I,
      handleAutoComplete: z,
      reset: y,
      validate: C,
      resetValidation: d,
      blur: b,
      focus: k
    };
  }
});
sv.render = Mk;
var Ta = sv;
re(Ta);
ie(Ta, lv);
const FB = Ta;
var yl = Ta;
const Ac = (e) => sn(e) ? e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp|ico)$/i.test(e) : !1, Mc = (e) => sn(e) ? e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e) : !1, Nk = (e) => {
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
      this.has(o) && Io(this.cache, o);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, wl = (e) => e, Nc = (e) => e ** 3, uv = (e) => e < 0.5 ? Nc(e * 2) / 2 : 1 - Nc((1 - e) * 2) / 2, Qo = (e, n, o = "") => {
  if (e === void 0 && (e = ""), e.length >= n)
    return e;
  const t = n - e.length, r = Math.floor(t / o.length);
  return o.repeat(r) + o.slice(0, t % o.length) + e;
};
var Vk = Object.defineProperty, Vc = Object.getOwnPropertySymbols, Rk = Object.prototype.hasOwnProperty, Lk = Object.prototype.propertyIsEnumerable, Rc = (e, n, o) => n in e ? Vk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Fk = (e, n) => {
  for (var o in n || (n = {}))
    Rk.call(n, o) && Rc(e, o, n[o]);
  if (Vc)
    for (var o of Vc(n))
      Lk.call(n, o) && Rc(e, o, n[o]);
  return e;
}, Ba = (e, n, o) => new Promise((t, r) => {
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
const Uk = "background-image", Hk = "lazy-loading", jk = "lazy-error", Lc = "lazy-attempt", Yk = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], kl = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", vt = [], Jr = [], cv = Nk(100), pn = {
  loading: kl,
  error: kl,
  attempt: 3,
  throttleWait: 300,
  events: Yk
};
let ku = pa(cr, pn.throttleWait);
function Da(e, n) {
  e._lazy.arg === Uk ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function Wk(e) {
  e._lazy.loading && Da(e, e._lazy.loading), cr();
}
function Kk(e) {
  e._lazy.error && Da(e, e._lazy.error), e._lazy.state = "error", Cu(e), cr();
}
function dv(e, n) {
  Da(e, n), e._lazy.state = "success", Cu(e), cr();
}
function qk(e) {
  var n;
  Jr.includes(e) || (Jr.push(e), (n = pn.events) == null || n.forEach((o) => {
    e.addEventListener(o, ku, { passive: !0 });
  }));
}
function Xk() {
  Jr.forEach((e) => {
    var n;
    (n = pn.events) == null || n.forEach((o) => {
      e.removeEventListener(o, ku);
    });
  }), Jr.length = 0;
}
function Gk(e, n) {
  var o, t;
  const r = {
    loading: (o = e.getAttribute(Hk)) != null ? o : pn.loading,
    error: (t = e.getAttribute(jk)) != null ? t : pn.error,
    attempt: e.getAttribute(Lc) ? Number(e.getAttribute(Lc)) : pn.attempt
  };
  e._lazy = Fk({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, r), Da(e, kl), $(pn.filter, e._lazy);
}
function Zk(e, n) {
  const o = new Image();
  o.src = n, e._lazy.preloadImage = o, o.addEventListener("load", () => {
    e._lazy.attemptLock = !1, cv.add(n), dv(e, n);
  }), o.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Kk(e) : fv(e);
  });
}
function fv(e) {
  if (e._lazy.attemptLock)
    return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (cv.has(n)) {
    dv(e, n), e._lazy.attemptLock = !1;
    return;
  }
  Wk(e), Zk(e, n);
}
function $u(e) {
  return Ba(this, null, function* () {
    yield bn(), eu(e) && fv(e);
  });
}
function cr() {
  vt.forEach((e) => $u(e));
}
function Jk(e) {
  return Ba(this, null, function* () {
    !vt.includes(e) && vt.push(e), ly(e).forEach(qk), yield $u(e);
  });
}
function Cu(e) {
  Io(vt, e), vt.length === 0 && Xk();
}
function Qk(e, n) {
  const { src: o, arg: t } = e._lazy;
  return o !== n.value || t !== n.arg;
}
function pv(e, n) {
  return Ba(this, null, function* () {
    Gk(e, n), yield Jk(e);
  });
}
function _k(e, n) {
  return Ba(this, null, function* () {
    if (!Qk(e, n)) {
      vt.includes(e) && (yield $u(e));
      return;
    }
    yield pv(e, n);
  });
}
function xk(e = {}) {
  const { events: n, loading: o, error: t, attempt: r, throttleWait: a, filter: i } = e;
  pn.events = n ?? pn.events, pn.loading = o ?? pn.loading, pn.error = t ?? pn.error, pn.attempt = r ?? pn.attempt, pn.throttleWait = a ?? pn.throttleWait, pn.filter = i;
}
const vv = {
  mounted: pv,
  unmounted: Cu,
  updated: _k,
  install(e, n) {
    xk(n), ku = pa(cr, pn.throttleWait), e.directive("lazy", this);
  }
}, UB = vv;
var Yt = vv;
const mv = {
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
  onClick: F(),
  onLoad: F(),
  onError: F()
}, e$ = (e) => ["mini", "small", "normal", "large"].includes(e), { name: n$, n: o$, classes: t$ } = ne("avatar"), r$ = ["src", "alt", "lazy-loading", "lazy-error"], a$ = ["src", "alt"];
function i$(e, n) {
  const o = We("lazy");
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
      style: Z({
        width: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        height: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        borderColor: e.borderColor,
        backgroundColor: e.color
      }),
      onClick: n[3] || (n[3] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      e.src ? (g(), P(
        Ae,
        { key: 0 },
        [
          e.lazy ? Ne((g(), P("img", {
            key: 0,
            role: "img",
            class: p(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: Z({ objectFit: e.fit }),
            "lazy-loading": e.loading,
            "lazy-error": e.error,
            onLoad: n[0] || (n[0] = (...t) => e.handleLoad && e.handleLoad(...t))
          }, null, 46, r$)), [
            [o, e.src]
          ]) : (g(), P("img", {
            key: 1,
            role: "img",
            class: p(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: Z({ objectFit: e.fit }),
            onLoad: n[1] || (n[1] = (...t) => e.handleLoad && e.handleLoad(...t)),
            onError: n[2] || (n[2] = (...t) => e.handleError && e.handleError(...t))
          }, null, 46, a$))
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (g(), P(
        "div",
        {
          key: 1,
          ref: "textElement",
          class: p(e.n("text")),
          style: Z({ transform: `scale(${e.scale})` })
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
const hv = ee({
  name: n$,
  directives: { Lazy: Yt },
  props: mv,
  setup(e) {
    const n = w(null), o = w(null), t = w(1);
    yn(r), _t(r);
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
      c ? (u._lazy.state === "success" && $(d, s), u._lazy.state === "error" && $(f, s)) : $(d, s);
    }
    function i(s) {
      $(e.onError, s);
    }
    function l(s) {
      $(e.onClick, s);
    }
    return {
      avatarElement: n,
      textElement: o,
      scale: t,
      n: o$,
      classes: t$,
      isInternalSize: e$,
      toSizeUnit: ze,
      handleLoad: a,
      handleError: i,
      handleClick: l
    };
  }
});
hv.render = i$;
var Ia = hv;
re(Ia);
ie(Ia, mv);
const HB = Ia;
var $l = Ia;
const gv = {
  offset: [Number, String],
  vertical: Boolean
}, { name: l$, n: s$, classes: u$ } = ne("avatar-group");
function c$(e, n) {
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: Z(e.rootStyles)
    },
    [
      H(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const bv = ee({
  name: l$,
  props: gv,
  setup(e) {
    return {
      rootStyles: B(() => e.offset == null ? {} : {
        "--avatar-group-offset": ze(e.offset)
      }),
      n: s$,
      classes: u$
    };
  }
});
bv.render = c$;
var Aa = bv;
re(Aa);
ie(Aa, gv);
const jB = Aa;
var Cl = Aa;
const uo = {
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
}, { name: d$, n: f$, classes: p$ } = ne("loading");
function v$(e, n) {
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
          )) : G("v-if", !0)
        ],
        2
        /* CLASS */
      )) : G("v-if", !0),
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
              R(
                "span",
                {
                  class: p(e.classes(e.n("circle-block"), e.n(`circle-block--${e.size}`))),
                  style: Z({
                    width: e.multiplySizeUnit(e.radius, 2),
                    height: e.multiplySizeUnit(e.radius, 2),
                    color: e.color
                  })
                },
                n[0] || (n[0] = [
                  R(
                    "svg",
                    { viewBox: "25 25 50 50" },
                    [
                      R("circle", {
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
          )) : G("v-if", !0),
          (g(!0), P(
            Ae,
            null,
            qe(e.loadingTypeDict, (o, t) => (g(), P(
              Ae,
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
                      Ae,
                      null,
                      qe(o, (r) => (g(), P(
                        "div",
                        {
                          key: r + t,
                          style: Z({ backgroundColor: e.color }),
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
                )) : G("v-if", !0)
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
              style: Z({ color: e.color })
            },
            [
              H(e.$slots, "description", {}, () => [
                De(
                  le(e.description),
                  1
                  /* TEXT */
                )
              ])
            ],
            6
            /* CLASS, STYLE */
          )) : G("v-if", !0)
        ],
        2
        /* CLASS */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const yv = ee({
  name: d$,
  props: uo,
  setup(e, { slots: n }) {
    const o = B(() => $(n.default) ? e.loading : !0);
    return {
      loadingTypeDict: {
        wave: 5,
        cube: 4,
        rect: 8,
        disappear: 3
      },
      isShow: o,
      n: f$,
      classes: p$,
      multiplySizeUnit: On
    };
  }
});
yv.render = v$;
var Ma = yv;
re(Ma);
ie(Ma, uo);
const YB = Ma;
var mt = Ma, m$ = Object.defineProperty, h$ = Object.defineProperties, g$ = Object.getOwnPropertyDescriptors, Fc = Object.getOwnPropertySymbols, b$ = Object.prototype.hasOwnProperty, y$ = Object.prototype.propertyIsEnumerable, Uc = (e, n, o) => n in e ? m$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Hc = (e, n) => {
  for (var o in n || (n = {}))
    b$.call(n, o) && Uc(e, o, n[o]);
  if (Fc)
    for (var o of Fc(n))
      y$.call(n, o) && Uc(e, o, n[o]);
  return e;
}, jc = (e, n) => h$(e, g$(n));
const wv = {
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
  loadingType: Ie(uo, "type"),
  loadingSize: jc(Hc({}, Ie(uo, "size")), {
    default: void 0
  }),
  loadingColor: jc(Hc({}, Ie(uo, "color")), {
    default: "currentColor"
  }),
  onClick: F(),
  onTouchstart: F()
}, kv = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function w$() {
  const { bindChildren: e, childProviders: n, length: o } = kn(kv);
  return {
    length: o,
    buttons: n,
    bindButtons: e
  };
}
function k$() {
  const { bindParent: e, parentProvider: n, index: o } = wn(kv);
  return {
    index: o,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
const { name: $$, n: C$, classes: S$ } = ne("button"), P$ = ["tabindex", "type", "disabled"];
function O$(e, n) {
  const o = _("var-loading"), t = _("var-hover-overlay"), r = We("ripple"), a = We("hover");
  return Ne((g(), P("button", {
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
    style: Z({
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
    e.loading || e.pending ? (g(), we(o, {
      key: 0,
      class: p(e.n("loading")),
      "var-button-cover": "",
      color: e.loadingColor,
      type: e.loadingType,
      size: e.loadingSize || e.states.size,
      radius: e.loadingRadius
    }, null, 8, ["class", "color", "type", "size", "radius"])) : G("v-if", !0),
    R(
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
    X(t, {
      hovering: e.disabled || e.loading || e.pending ? !1 : e.hovering,
      focusing: e.disabled || e.loading || e.pending ? !1 : e.isFocusing
    }, null, 8, ["hovering", "focusing"])
  ], 46, P$)), [
    [r, { disabled: e.disabled || !e.ripple || e.loading || e.pending }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const $v = ee({
  name: $$,
  components: {
    VarLoading: mt,
    VarHoverOverlay: Un
  },
  directives: { Ripple: rn, Hover: In },
  props: wv,
  setup(e) {
    const n = w(!1), o = w(!1), { buttonGroup: t } = k$(), { hovering: r, handleHovering: a } = no(), i = B(() => {
      var d, f, v, h, m, y;
      if (!t)
        return {
          elevation: dn(e.elevation, 2),
          type: (d = e.type) != null ? d : "default",
          size: (f = e.size) != null ? f : "normal",
          color: e.color,
          text: e.text,
          textColor: e.textColor,
          outline: e.outline,
          iconContainer: e.iconContainer
        };
      const { type: C, size: k, color: b, textColor: S, mode: T } = t;
      return {
        elevation: "",
        type: (v = e.type) != null ? v : C.value,
        size: (h = e.size) != null ? h : k.value,
        color: (m = e.color) != null ? m : b.value,
        textColor: (y = e.textColor) != null ? y : S.value,
        text: T.value === "text" || T.value === "outline",
        outline: T.value === "outline",
        iconContainer: T.value === "icon-container"
      };
    });
    function l(d) {
      e.autoLoading && (o.value = !0, Promise.all(fo(d)).then(() => {
        o.value = !1;
      }).catch(() => {
        o.value = !1;
      }));
    }
    function s(d) {
      const { loading: f, disabled: v, onClick: h } = e;
      !h || f || v || o.value || l($(h, d));
    }
    function u(d) {
      const { loading: f, disabled: v, onTouchstart: h } = e;
      !h || f || v || o.value || l($(h, d));
    }
    function c() {
      e.focusable && (n.value = !0);
    }
    return {
      pending: o,
      states: i,
      hovering: r,
      isFocusing: n,
      n: C$,
      classes: S$,
      handleHovering: a,
      handleClick: s,
      handleTouchstart: u,
      handleFocus: c
    };
  }
});
$v.render = O$;
var Na = $v;
re(Na);
ie(Na, wv);
const WB = Na;
var Bn = Na;
const Cv = {
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
  onClick: F()
}, { name: z$, n: E$, classes: T$ } = ne("back-top");
function B$(e, n) {
  const o = _("var-icon"), t = _("var-button");
  return g(), we(lo, {
    to: "body",
    disabled: e.disabled
  }, [
    R(
      "div",
      je({
        ref: "backTopEl",
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = Rn((...r) => e.handleClick && e.handleClick(...r), ["stop"]))
      }),
      [
        H(e.$slots, "default", {}, () => [
          X(t, {
            elevation: e.elevation,
            type: "primary",
            "var-back-top-cover": ""
          }, {
            default: ue(() => [
              X(o, { name: "chevron-up" })
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
const Sv = ee({
  name: z$,
  components: {
    VarButton: Bn,
    VarIcon: Ge
  },
  inheritAttrs: !1,
  props: Cv,
  setup(e) {
    const n = w(!1), o = w(null), t = w(!0);
    let r;
    const a = pa(() => {
      i();
    }, 200);
    bo(() => {
      s(), u(), i(), t.value = !1;
    }), Lo(u), tr(c);
    function i() {
      n.value = ho(r) >= on(e.visibilityHeight);
    }
    function l(d) {
      $(e.onClick, d);
      const f = or(r);
      Vt(r, {
        left: f,
        duration: e.duration,
        animation: uv
      });
    }
    function s() {
      r = e.target ? Op(e.target, "BackTop") : No(o.value);
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
      n: E$,
      classes: T$,
      handleClick: l
    };
  }
});
Sv.render = B$;
var Va = Sv;
re(Va);
ie(Va, Cv);
const KB = Va;
var Sl = Va;
const Pv = {
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
  icon: Ie(tn, "name"),
  namespace: Ie(tn, "namespace"),
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
var D$ = Object.defineProperty, Yc = Object.getOwnPropertySymbols, I$ = Object.prototype.hasOwnProperty, A$ = Object.prototype.propertyIsEnumerable, Wc = (e, n, o) => n in e ? D$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, M$ = (e, n) => {
  for (var o in n || (n = {}))
    I$.call(n, o) && Wc(e, o, n[o]);
  if (Yc)
    for (var o of Yc(n))
      A$.call(n, o) && Wc(e, o, n[o]);
  return e;
};
const { name: N$, n: V$, classes: R$ } = ne("badge"), L$ = { key: 0 };
function F$(e, n) {
  const o = _("var-icon");
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      H(e.$slots, "default"),
      X(xe, {
        name: e.n("$-badge-fade"),
        persisted: ""
      }, {
        default: ue(() => [
          Ne(R(
            "span",
            je({
              class: e.classes(
                e.n("content"),
                e.n(`--${e.type}`),
                [e.$slots.default, e.n(`--${e.position}`), e.n("--offset")],
                [e.dot, e.n("--dot")],
                [e.icon, e.n("--icon")]
              ),
              style: M$({ background: e.color }, e.offsetStyle)
            }, e.$attrs),
            [
              e.icon ? (g(), we(o, {
                key: 0,
                class: p(e.n("icon")),
                "var-badge-cover": "",
                name: e.icon,
                namespace: e.namespace
              }, null, 8, ["class", "name", "namespace"])) : G("v-if", !0),
              H(e.$slots, "value", {}, () => [
                !e.icon && !e.dot ? (g(), P(
                  "span",
                  L$,
                  le(e.value),
                  1
                  /* TEXT */
                )) : G("v-if", !0)
              ])
            ],
            16
            /* FULL_PROPS */
          ), [
            [eo, !e.hidden]
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
const Ov = ee({
  name: N$,
  components: { VarIcon: Ge },
  inheritAttrs: !1,
  props: Pv,
  setup(e) {
    const n = B(() => {
      const { value: t, maxValue: r } = e;
      return t != null && r != null && W(t) > W(r) ? `${r}+` : t;
    }), o = B(() => ({
      "--badge-offset-y": ze(e.offsetY),
      "--badge-offset-x": ze(e.offsetX)
    }));
    return {
      value: n,
      offsetStyle: o,
      n: V$,
      classes: R$
    };
  }
});
Ov.render = F$;
var Ra = Ov;
re(Ra);
ie(Ra, Pv);
const qB = Ra;
var Qr = Ra;
const zv = {
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
  onChange: F(),
  onBeforeChange: F(),
  onFabClick: F(),
  "onUpdate:active": F()
}, Ev = Symbol(
  "BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"
);
function U$() {
  const { childProviders: e, length: n, bindChildren: o } = kn(
    Ev
  );
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: o
  };
}
var H$ = Object.defineProperty, Kc = Object.getOwnPropertySymbols, j$ = Object.prototype.hasOwnProperty, Y$ = Object.prototype.propertyIsEnumerable, qc = (e, n, o) => n in e ? H$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Xc = (e, n) => {
  for (var o in n || (n = {}))
    j$.call(n, o) && qc(e, o, n[o]);
  if (Kc)
    for (var o of Kc(n))
      Y$.call(n, o) && qc(e, o, n[o]);
  return e;
};
const { name: W$, n: K$, classes: q$ } = ne("bottom-navigation"), { n: La } = ne("bottom-navigation-item"), Gc = La("--right-half-space"), Zc = La("--left-half-space"), Jc = La("--right-space"), X$ = {
  type: "primary"
};
function G$(e, n) {
  const o = _("var-button");
  return g(), P(
    Ae,
    null,
    [
      R(
        "div",
        je({
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
          e.$slots.fab ? (g(), we(o, je({
            key: 0,
            class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
            "var-bottom-navigation__fab": ""
          }, e.fabProps, { onClick: e.handleFabClick }), {
            default: ue(() => [
              H(e.$slots, "fab")
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["class", "onClick"])) : G("v-if", !0)
        ],
        16
        /* FULL_PROPS */
      ),
      e.fixed && e.placeholder ? (g(), P(
        "div",
        {
          key: 0,
          class: p(e.n("placeholder")),
          style: Z({ height: e.placeholderHeight })
        },
        null,
        6
        /* CLASS, STYLE */
      )) : G("v-if", !0)
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const Tv = ee({
  name: W$,
  components: { VarButton: Bn },
  props: zv,
  setup(e, { slots: n }) {
    const o = w(null), t = B(() => e.active), r = B(() => e.activeColor), a = B(() => e.inactiveColor), i = B(() => e.variant), l = w(), s = w({}), { length: u, bottomNavigationItems: c, bindBottomNavigationItem: d } = U$();
    d({
      active: t,
      activeColor: r,
      inactiveColor: a,
      variant: i,
      onToggle: C
    }), fe(() => u.value, v), fe(
      () => e.fabProps,
      (L) => {
        s.value = Xc(Xc({}, X$), L);
      },
      { immediate: !0, deep: !0 }
    ), to(V), yn(() => {
      V(), n.fab && T(u.value);
    }), _t(() => {
      S(), n.fab && T(u.value);
    });
    function v() {
      u.value === 0 || h() || m() || y();
    }
    function h() {
      return c.find(({ name: L }) => t.value === L.value);
    }
    function m() {
      return c.find(({ index: L }) => t.value === L.value);
    }
    function y() {
      En(t.value) && (t.value < 0 ? $(e["onUpdate:active"], 0) : t.value > u.value - 1 && $(e["onUpdate:active"], u.value - 1));
    }
    function C(L) {
      t.value !== L && (e.onBeforeChange ? k(L) : b(L));
    }
    function k(L) {
      const Y = fo($(e.onBeforeChange, L));
      Promise.all(Y).then((z) => {
        z.every(Boolean) && b(L);
      });
    }
    function b(L) {
      $(e["onUpdate:active"], L), $(e.onChange, L);
    }
    function S() {
      D().forEach((Y) => {
        Y.classList.remove(Gc, Zc, Jc);
      });
    }
    function T(L) {
      const Y = D(), z = Y.length, I = L % 2 === 0;
      Y.forEach((N, j) => {
        O(I, N, j, z);
      });
    }
    function O(L, Y, z, I) {
      const N = z === I - 1;
      if (!L && N) {
        Y.classList.add(Jc);
        return;
      }
      const j = z === I / 2 - 1, E = z === I / 2;
      j ? Y.classList.add(Gc) : E && Y.classList.add(Zc);
    }
    function D() {
      return Array.from(o.value.querySelectorAll(`.${La()}`));
    }
    function M() {
      $(e.onFabClick);
    }
    function V() {
      if (!e.fixed || !e.placeholder)
        return;
      const { height: L } = nn(o.value);
      l.value = ze(L);
    }
    return {
      length: u,
      bottomNavigationDom: o,
      fabProps: s,
      placeholderHeight: l,
      n: K$,
      classes: q$,
      handleFabClick: M
    };
  }
});
Tv.render = G$;
var Fa = Tv;
re(Fa);
ie(Fa, zv);
const XB = Fa;
var Pl = Fa;
const Bv = {
  name: String,
  label: String,
  icon: Ie(tn, "name"),
  namespace: Ie(tn, "namespace"),
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: F()
};
function Z$() {
  const { parentProvider: e, index: n, bindParent: o } = wn(
    Ev
  );
  return Fn(!!o, "BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: o
  };
}
const { name: J$, n: Q$, classes: _$ } = ne("bottom-navigation-item"), x$ = {
  type: "danger",
  dot: !0
};
function eC(e, n) {
  const o = _("var-icon"), t = _("var-badge"), r = We("ripple");
  return Ne((g(), P(
    "button",
    {
      class: p(e.classes(e.n(), e.n("$--box"), [e.variant, e.n("--variant-padding")], [e.isActive && !e.variant, e.n("--active")])),
      style: Z({
        color: e.isActive ? e.activeColor : e.inactiveColor
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      R(
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
          e.badge ? (g(), we(t, je({ key: 0 }, e.badgeProps, {
            class: e.n("badge"),
            "var-bottom-navigation-item-cover": ""
          }), {
            default: ue(() => [
              H(e.$slots, "icon", { active: e.isActive }, () => [
                e.icon ? (g(), we(o, {
                  key: 0,
                  name: e.icon,
                  namespace: e.namespace,
                  class: p(e.n("icon")),
                  "var-bottom-navigation-item-cover": ""
                }, null, 8, ["name", "namespace", "class"])) : G("v-if", !0)
              ])
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["class"])) : H(e.$slots, "icon", {
            key: 1,
            active: e.isActive
          }, () => [
            e.icon ? (g(), we(o, {
              key: 0,
              name: e.icon,
              namespace: e.namespace,
              class: p(e.n("icon")),
              "var-bottom-navigation-item-cover": ""
            }, null, 8, ["name", "namespace", "class"])) : G("v-if", !0)
          ])
        ],
        2
        /* CLASS */
      ),
      R(
        "span",
        {
          class: p(e.n("label"))
        },
        [
          H(e.$slots, "default", {}, () => [
            De(
              le(e.label),
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
const Dv = ee({
  name: J$,
  components: {
    VarBadge: Qr,
    VarIcon: Ge
  },
  directives: { Ripple: rn },
  props: Bv,
  setup(e) {
    const n = B(() => e.name), o = B(() => [n.value, r.value].includes(l.value)), t = B(() => e.badge === !0 ? x$ : e.badge), { index: r, bottomNavigation: a, bindBottomNavigation: i } = Z$(), { active: l, activeColor: s, inactiveColor: u, variant: c } = a;
    i({
      name: n,
      index: r
    });
    function f() {
      var v;
      const h = (v = n.value) != null ? v : r.value;
      $(e.onClick, h), $(a.onToggle, h);
    }
    return {
      activeColor: s,
      inactiveColor: u,
      badgeProps: t,
      isActive: o,
      variant: c,
      n: Q$,
      classes: _$,
      handleClick: f
    };
  }
});
Dv.render = eC;
var Ua = Dv;
re(Ua);
ie(Ua, Bv);
const GB = Ua;
var Ol = Ua;
const Iv = {
  separator: String,
  onClick: F()
}, Av = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function nC() {
  const { childProviders: e, bindChildren: n, length: o } = kn(
    Av
  );
  return {
    length: o,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function oC() {
  const { parentProvider: e, bindParent: n, index: o } = wn(
    Av
  );
  return Fn(!!n, "Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: o,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
const { name: tC, n: rC, classes: aC } = ne("breadcrumb");
function iC(e, n) {
  return g(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      R(
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
      e.isLast ? G("v-if", !0) : H(e.$slots, "separator", { key: 0 }, () => {
        var o;
        return [
          R(
            "div",
            {
              class: p(e.n("separator")),
              "aria-hidden": "true"
            },
            le((o = e.separator) != null ? o : e.parentSeparator),
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
const Mv = ee({
  name: tC,
  props: Iv,
  setup(e) {
    const { index: n, breadcrumb: o, bindBreadcrumb: t } = oC(), r = B(() => n.value === o.length.value - 1), a = B(() => o.separator.value);
    t(null);
    function i(l) {
      r.value || $(e.onClick, l);
    }
    return {
      n: rC,
      classes: aC,
      isLast: r,
      parentSeparator: a,
      handleClick: i
    };
  }
});
Mv.render = iC;
var Ha = Mv;
re(Ha);
ie(Ha, Iv);
const ZB = Ha;
var zl = Ha;
const Nv = {
  separator: {
    type: String,
    default: "/"
  }
}, { name: lC, n: sC } = ne("breadcrumbs");
function uC(e, n) {
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
const Vv = ee({
  name: lC,
  props: Nv,
  setup(e) {
    const n = B(() => e.separator), { bindBreadcrumbList: o, length: t } = nC();
    return o({
      length: t,
      separator: n
    }), { n: sC };
  }
});
Vv.render = uC;
var ja = Vv;
re(ja);
ie(ja, Nv);
const JB = ja;
var El = ja;
const Rv = {
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
}, { name: cC, n: dC, classes: fC } = ne("button-group");
function pC(e, n) {
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
const Lv = ee({
  name: cC,
  props: Rv,
  setup(e) {
    const { bindButtons: n } = w$(), o = {
      elevation: B(() => e.elevation),
      type: B(() => e.type),
      size: B(() => e.size),
      color: B(() => e.color),
      textColor: B(() => e.textColor),
      mode: B(() => e.mode)
    };
    return n(o), {
      n: dC,
      classes: fC,
      formatElevation: dn
    };
  }
});
Lv.render = pC;
var Ya = Lv;
re(Ya);
ie(Ya, Rv);
const QB = Ya;
var Tl = Ya;
const Fv = {
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
  onClick: F(),
  "onUpdate:floating": F(),
  /**
   * @deprecated use outlined variant instead
   */
  outline: Boolean
};
var vC = (e, n, o) => new Promise((t, r) => {
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
const { name: mC, n: hC, classes: gC } = ne("card"), bC = 500, yC = ["src", "alt"];
function wC(e, n) {
  const o = _("var-icon"), t = _("var-button"), r = We("ripple");
  return Ne((g(), P(
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
      style: Z({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      R(
        "div",
        {
          ref: "cardFloater",
          class: p(e.n("floater")),
          style: Z({
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
              style: Z({
                objectFit: e.fit,
                height: e.toSizeUnit(e.imageHeight),
                width: e.toSizeUnit(e.imageWidth)
              }),
              src: e.src,
              alt: e.alt
            }, null, 14, yC)) : G("v-if", !0)
          ]),
          R(
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
                  le(e.title),
                  3
                  /* TEXT, CLASS */
                )) : G("v-if", !0)
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
                  le(e.subtitle),
                  3
                  /* TEXT, CLASS */
                )) : G("v-if", !0)
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
              )) : G("v-if", !0),
              H(e.$slots, "description", {
                slotClass: e.n("description")
              }, () => [
                e.description ? (g(), P(
                  "div",
                  {
                    key: 0,
                    class: p(e.n("description"))
                  },
                  le(e.description),
                  3
                  /* TEXT, CLASS */
                )) : G("v-if", !0)
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
              )) : G("v-if", !0),
              e.$slots["floating-content"] && !e.isRow ? (g(), P(
                "div",
                {
                  key: 2,
                  class: p(e.n("floating-content")),
                  style: Z({
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
              )) : G("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          e.showFloatingButtons ? (g(), P(
            "div",
            {
              key: 0,
              class: p(e.classes(e.n("floating-buttons"), e.n("$--box"))),
              style: Z({
                zIndex: e.zIndex,
                opacity: e.opacity,
                transition: `opacity ${e.floatingDuration * 2}ms`
              })
            },
            [
              H(e.$slots, "close-button", {}, () => [
                X(t, {
                  "var-card-cover": "",
                  class: p(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
                  onClick: Rn(e.close, ["stop"])
                }, {
                  default: ue(() => [
                    X(o, {
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
          )) : G("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      ),
      R(
        "div",
        {
          class: p(e.n("holder")),
          style: Z({
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
const Uv = ee({
  name: mC,
  directives: { Ripple: rn },
  components: {
    VarIcon: Ge,
    VarButton: Bn
  },
  props: Fv,
  setup(e) {
    const n = w(null), o = w(null), t = w("auto"), r = w("auto"), a = w("100%"), i = w("100%"), l = w("auto"), s = w("auto"), u = w(void 0), c = w("hidden"), d = w("0px"), f = w("0"), v = B(() => e.layout === "row"), h = w(!1), m = w(!1), { zIndex: y } = ir(() => e.floating, 1);
    let C = "auto", k = "auto", b = null;
    const S = w(null);
    ar(
      () => e.floating,
      () => !v.value
    ), fe(
      () => e.floating,
      (V) => {
        v.value || Ye(() => {
          V ? T() : O();
        });
      },
      { immediate: !0 }
    );
    function T() {
      clearTimeout(S.value), clearTimeout(b), S.value = null, S.value = setTimeout(
        () => vC(this, null, function* () {
          const { width: V, height: L, left: Y, top: z } = nn(n.value);
          t.value = ze(V), r.value = ze(L), a.value = t.value, i.value = r.value, l.value = ze(z), s.value = ze(Y), u.value = "fixed", C = l.value, k = s.value, h.value = !0, yield bn(), l.value = "0", s.value = "0", a.value = "100vw", i.value = "100vh", d.value = "auto", f.value = "1", c.value = "auto", m.value = !0;
        }),
        e.ripple ? bC : 0
      );
    }
    function O() {
      clearTimeout(b), clearTimeout(S.value), S.value = null, a.value = t.value, i.value = r.value, l.value = C, s.value = k, d.value = "0px", f.value = "0", h.value = !1, b = setTimeout(() => {
        t.value = "auto", r.value = "auto", a.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", C = "auto", k = "auto", c.value = "hidden", u.value = void 0, m.value = !1;
      }, e.floatingDuration);
    }
    function D() {
      $(e["onUpdate:floating"], !1);
    }
    function M(V) {
      $(e.onClick, V);
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
      showFloatingButtons: h,
      floated: m,
      n: hC,
      classes: gC,
      toSizeUnit: ze,
      close: D,
      formatElevation: dn,
      handleClick: M
    };
  }
});
Uv.render = wC;
var Wa = Uv;
re(Wa);
ie(Wa, Fv);
const _B = Wa;
var Bl = Wa;
const Hv = {
  title: String,
  icon: Ie(tn, "name"),
  namespace: Ie(tn, "namespace"),
  description: String,
  border: Boolean,
  borderOffset: [Number, String],
  iconClass: String,
  titleClass: String,
  descriptionClass: String,
  extraClass: String,
  ripple: Boolean,
  onClick: F()
}, { name: kC, n: $C, classes: CC } = ne("cell");
function SC(e, n) {
  const o = _("var-icon"), t = We("ripple");
  return Ne((g(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: Z(e.borderOffsetStyles),
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
            X(o, {
              name: e.icon,
              namespace: e.namespace
            }, null, 8, ["name", "namespace"])
          ],
          2
          /* CLASS */
        )) : G("v-if", !0)
      ]),
      R(
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
              le(e.title),
              3
              /* TEXT, CLASS */
            )) : G("v-if", !0)
          ]),
          H(e.$slots, "description", {}, () => [
            e.description ? (g(), P(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("description"), e.descriptionClass))
              },
              le(e.description),
              3
              /* TEXT, CLASS */
            )) : G("v-if", !0)
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
      )) : G("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [t, { disabled: !e.ripple }]
  ]);
}
const jv = ee({
  name: kC,
  components: { VarIcon: Ge },
  directives: { Ripple: rn },
  props: Hv,
  setup(e) {
    const n = B(() => e.borderOffset == null ? {} : {
      "--cell-border-left": ze(e.borderOffset),
      "--cell-border-right": ze(e.borderOffset)
    });
    function o(t) {
      $(e.onClick, t);
    }
    return {
      borderOffsetStyles: n,
      n: $C,
      classes: CC,
      toSizeUnit: ze,
      handleClick: o
    };
  }
});
jv.render = SC;
var Ka = jv;
re(Ka);
ie(Ka, Hv);
const xB = Ka;
var Dl = Ka;
const Yv = {
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
  onChange: F(),
  "onUpdate:modelValue": F()
}, { name: PC, n: OC, classes: zC } = ne("checkbox-group");
function EC(e, n) {
  const o = _("maybe-v-node"), t = _("var-checkbox"), r = _("var-form-details");
  return g(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      R(
        "div",
        {
          class: p(e.classes(e.n(), e.n(`--${e.direction}`)))
        },
        [
          e.options.length ? (g(!0), P(
            Ae,
            { key: 0 },
            qe(e.options, (a) => (g(), we(t, {
              key: a[e.valueKey],
              "checked-value": a[e.valueKey],
              disabled: a.disabled
            }, {
              default: ue(({ checked: i }) => [
                X(o, {
                  is: e.isFunction(a[e.labelKey]) ? a[e.labelKey](a, i) : a[e.labelKey]
                }, null, 8, ["is"])
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["checked-value", "disabled"]))),
            128
            /* KEYED_FRAGMENT */
          )) : G("v-if", !0),
          H(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      X(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Wv = ee({
  name: PC,
  components: { VarFormDetails: Tn, VarCheckbox: ct, MaybeVNode: rr },
  props: Yv,
  setup(e) {
    const n = B(() => e.max), o = B(() => e.modelValue.length), { length: t, checkboxes: r, bindCheckboxes: a } = E1(), { bindForm: i } = jn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: c
    } = Hn(), d = B(() => l.value), f = {
      max: n,
      checkedCount: o,
      onChecked: m,
      onUnchecked: y,
      validate: T,
      resetValidation: c,
      reset: S,
      errorMessage: d
    };
    fe(() => e.modelValue, C, { deep: !0 }), fe(() => t.value, C), a(f), $(i, f);
    function v(O) {
      Ye(() => {
        const { validateTrigger: D, rules: M, modelValue: V } = e;
        s(D, O, M, V);
      });
    }
    function h(O) {
      $(e["onUpdate:modelValue"], O), $(e.onChange, O), v("onChange");
    }
    function m(O) {
      const { modelValue: D } = e;
      D.includes(O) || h([...D, O]);
    }
    function y(O) {
      const { modelValue: D } = e;
      D.includes(O) && h(D.filter((M) => M !== O));
    }
    function C() {
      r.forEach(({ sync: O }) => O(e.modelValue));
    }
    function k() {
      const O = r.map(({ checkedValue: M }) => M.value), D = ul(O);
      return $(e["onUpdate:modelValue"], D), D;
    }
    function b() {
      const O = r.filter(({ checked: M }) => !M.value).map(({ checkedValue: M }) => M.value), D = ul(O);
      return $(e["onUpdate:modelValue"], D), D;
    }
    function S() {
      $(e["onUpdate:modelValue"], []), c();
    }
    function T() {
      return u(e.rules, e.modelValue);
    }
    return {
      errorMessage: l,
      n: OC,
      classes: zC,
      checkAll: k,
      inverseAll: b,
      reset: S,
      validate: T,
      resetValidation: c,
      isFunction: mn
    };
  }
});
Wv.render = EC;
var qa = Wv;
re(qa);
ie(qa, Yv);
const eD = qa;
var Il = qa;
const Kv = {
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
  iconName: Ie(tn, "name"),
  namespace: Ie(tn, "namespace"),
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
  onClose: F()
}, { name: TC, n: wo, classes: BC } = ne("chip");
function DC(e, n) {
  const o = _("var-icon");
  return g(), we(xe, {
    name: e.n("$-fade")
  }, {
    default: ue(() => [
      R(
        "span",
        je({
          class: e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 1), ...e.contentClass),
          style: e.chipStyle
        }, e.$attrs),
        [
          H(e.$slots, "left"),
          R(
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
              X(o, {
                name: `${e.iconName ? e.iconName : "close-circle"}`,
                namespace: e.namespace
              }, null, 8, ["name", "namespace"])
            ],
            2
            /* CLASS */
          )) : G("v-if", !0)
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
const qv = ee({
  name: TC,
  components: {
    VarIcon: Ge
  },
  inheritAttrs: !1,
  props: Kv,
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
      const { size: r, block: a, type: i, plain: l, round: s } = e, u = wo(a ? "$--flex" : "$--inline-flex"), c = l ? `${wo("plain")} ${wo(`plain-${i}`)}` : wo(`--${i}`), d = s ? wo("--round") : null;
      return [wo(`--${r}`), u, c, d];
    });
    function t(r) {
      $(e.onClose, r);
    }
    return {
      chipStyle: n,
      contentClass: o,
      n: wo,
      classes: BC,
      formatElevation: dn,
      handleClose: t
    };
  }
});
qv.render = DC;
var Xa = qv;
re(Xa);
ie(Xa, Kv);
const nD = Xa;
var _r = Xa;
const Al = Symbol("HIGHLIGHTER_PROVIDER_KEY");
function IC(e) {
  Ws(Al, e);
}
function AC() {
  return ou(Al) ? Ys(Al) : { highlighter: null, theme: null };
}
const Xv = {
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
var MC = (e, n, o) => new Promise((t, r) => {
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
const { name: NC, n: VC, classes: RC } = ne("code"), LC = ["innerHTML"];
function FC(e, n) {
  return g(), P("div", {
    class: p(e.classes(e.n(), [e.wordWrap, e.n("--word-wrap")])),
    innerHTML: e.highlightedCode
  }, null, 10, LC);
}
const Gv = ee({
  name: NC,
  props: Xv,
  setup(e) {
    const { highlighter: n, theme: o } = AC(), t = w(""), r = B(() => {
      var a;
      return (a = e.theme) != null ? a : o == null ? void 0 : o.value;
    });
    return n && fe(
      () => [n.value, e.code, e.language, r.value, e.trim],
      (a) => MC(this, [a], function* ([i, l, s = "", u = "", c]) {
        i && (t.value = yield i.codeToHtml(c ? l.trim() : l, { lang: s, theme: u }));
      }),
      { immediate: !0 }
    ), {
      n: VC,
      classes: RC,
      highlightedCode: t
    };
  }
});
Gv.render = FC;
var Ga = Gv;
re(Ga);
ie(Ga, Xv);
const oD = Ga;
var Ml = Ga;
const Zv = {
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
  onClick: F()
}, Jv = Symbol("ROW_BIND_COL_KEY");
function UC() {
  const { length: e, childProviders: n, bindChildren: o } = kn(Jv);
  return {
    length: e,
    cols: n,
    bindCols: o
  };
}
function HC() {
  const { index: e, bindParent: n, parentProvider: o } = wn(Jv);
  return {
    index: e,
    row: o,
    bindRow: n
  };
}
const { name: jC, n: gr, classes: YC } = ne("col");
function WC(e, n) {
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
      style: Z({
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
const Qv = ee({
  name: jC,
  props: Zv,
  setup(e) {
    const n = B(() => W(e.span)), o = B(() => W(e.offset)), t = B(() => {
      var s;
      const [u = 0, c = 0] = (s = r == null ? void 0 : r.average.value) != null ? s : [];
      return { left: c, right: c, top: u, bottom: u };
    }), { row: r, bindRow: a } = HC();
    $(a, null);
    function i(s, u) {
      const c = [];
      if (u == null)
        return c;
      if (Ln(u)) {
        const { offset: d, span: f } = u;
        return Number(f) >= 0 && c.push(gr(`--span-${s}-${f}`)), d && c.push(gr(`--offset-${s}-${d}`)), c;
      }
      return Number(u) >= 0 && c.push(gr(`--span-${s}-${u}`)), c;
    }
    function l(s) {
      $(e.onClick, s);
    }
    return {
      span: n,
      offset: o,
      padding: t,
      n: gr,
      classes: YC,
      toNumber: W,
      toSizeUnit: ze,
      getSize: i,
      handleClick: l,
      padStartFlex: Gr
    };
  }
});
Qv.render = WC;
var Za = Qv;
re(Za);
ie(Za, Zv);
const tD = Za;
var Nl = Za;
const _v = {
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
  onChange: F(),
  "onUpdate:modelValue": F()
}, xv = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function KC() {
  const { childProviders: e, length: n, bindChildren: o } = kn(
    xv
  );
  return {
    length: n,
    collapseItems: e,
    bindCollapseItems: o
  };
}
const { name: qC, n: XC } = ne("collapse");
function GC(e, n) {
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
const em = ee({
  name: qC,
  props: _v,
  setup(e) {
    const n = B(() => e.offset), o = B(() => e.divider), t = B(() => e.elevation), r = B(() => e.accordion), a = B(() => fo(e.modelValue)), { length: i, collapseItems: l, bindCollapseItems: s } = KC(), u = {
      offset: n,
      divider: o,
      elevation: t,
      accordion: r,
      updateItem: c
    };
    fe(
      () => i.value,
      () => Ye().then(v)
    ), fe(
      () => e.modelValue,
      () => Ye().then(v)
    ), s(u);
    function c(m, y) {
      if (e.accordion) {
        d(y ? m : void 0);
        return;
      }
      const C = y ? [...a.value, m] : a.value.filter((k) => k !== m);
      d(C);
    }
    function d(m) {
      $(e["onUpdate:modelValue"], m), $(e.onChange, m);
    }
    function f() {
      if (e.accordion) {
        const [C] = a.value;
        if (C == null)
          return;
        const k = l.find(({ name: b }) => C === b.value);
        return k ?? l.find(({ index: b, name: S }) => S.value == null && C === b.value);
      }
      const m = l.filter(
        ({ name: C }) => C.value != null && a.value.includes(C.value)
      ), y = l.filter(
        ({ index: C, name: k }) => k.value == null && a.value.includes(C.value)
      );
      return [...m, ...y];
    }
    function v() {
      const m = Nf(fo(f()));
      l.forEach((y) => {
        y.init(m.includes(y));
      });
    }
    return {
      divider: o,
      n: XC,
      toggleAll: (m) => {
        if (e.accordion)
          return;
        const C = l.filter((k) => {
          var b;
          const S = (b = k.name.value) != null ? b : k.index.value, T = a.value.includes(S);
          return m.skipDisabled && k.disabled.value ? T : m.expand === "inverse" ? !T : m.expand;
        }).map((k) => {
          var b;
          return (b = k.name.value) != null ? b : k.index.value;
        });
        d(C);
      }
    };
  }
});
em.render = GC;
var Ja = em;
re(Ja);
ie(Ja, _v);
const rD = Ja;
var Vl = Ja, Qc = (e, n, o) => new Promise((t, r) => {
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
function nm(e) {
  const { contentEl: n, showContent: o, expand: t } = e;
  let r = !0;
  fe(
    t,
    (u) => {
      Ye(() => {
        u ? a() : i();
      });
    },
    { immediate: !0 }
  );
  function a() {
    return Qc(this, null, function* () {
      if (!n.value || (n.value.style.height = "", o.value = !0, yield po(), !n.value))
        return;
      const { offsetHeight: u } = n.value;
      n.value.style.height = "0px", yield po(), n.value && (n.value.style.height = u + "px", r && (yield bn(), r && l()));
    });
  }
  const i = () => Qc(this, null, function* () {
    if (!n.value)
      return;
    const { offsetHeight: u } = n.value;
    n.value.style.height = u + "px", yield po(), n.value.style.height = "0px";
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
const om = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
};
function ZC() {
  const { parentProvider: e, index: n, bindParent: o } = wn(
    xv
  );
  return Fn(!!o, "Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: o
  };
}
const { name: JC, n: QC, classes: _C } = ne("collapse-item"), xC = ["aria-expanded", "aria-disabled", "role"];
function eS(e, n) {
  const o = _("var-icon");
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: Z(`--collapse-divider-top: ${e.divider ? "var(--collapse-border-top)" : "none"}`)
    },
    [
      R(
        "div",
        {
          class: p(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2)))
        },
        null,
        2
        /* CLASS */
      ),
      R("div", {
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
              De(
                le(e.title),
                1
                /* TEXT */
              )
            ])
          ],
          2
          /* CLASS */
        )) : G("v-if", !0),
        R(
          "div",
          {
            class: p(e.n("header-icon"))
          },
          [
            H(e.$slots, "icon", {}, () => [
              X(o, {
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
      ], 10, xC),
      Ne(R(
        "div",
        {
          ref: "contentEl",
          class: p(e.n("content")),
          onTransitionend: n[1] || (n[1] = (...t) => e.handleTransitionEnd && e.handleTransitionEnd(...t)),
          onTransitionstart: n[2] || (n[2] = (...t) => e.handleTransitionStart && e.handleTransitionStart(...t))
        },
        [
          R(
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
        [eo, e.showContent]
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const tm = ee({
  name: JC,
  components: {
    VarIcon: Ge
  },
  props: om,
  setup(e) {
    const n = w(!1), o = w(!1), t = w(null), r = B(() => e.name), a = B(() => e.disabled), { index: i, collapse: l, bindCollapse: s } = ZC(), { offset: u, divider: c, elevation: d, accordion: f, updateItem: v } = l;
    s({
      index: i,
      name: r,
      disabled: a,
      init: C
    });
    const { handleTransitionEnd: m, handleTransitionStart: y } = nm({
      contentEl: t,
      showContent: o,
      expand: n
    });
    function C(b) {
      n.value = b;
    }
    function k() {
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
      n: QC,
      classes: _C,
      toggle: k,
      formatElevation: dn,
      handleTransitionEnd: m,
      handleTransitionStart: y
    };
  }
});
tm.render = eS;
var Qa = tm;
re(Qa);
ie(Qa, om);
const aD = Qa;
var Rl = Qa;
const rm = {
  expand: Boolean
}, { name: nS, n: oS } = ne("collapse-transition");
function tS(e, n) {
  return Ne((g(), P(
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
    [eo, e.showContent]
  ]);
}
const am = ee({
  name: nS,
  props: rm,
  setup(e) {
    const n = w(!1), o = w(null), t = B(() => e.expand), { handleTransitionEnd: r, handleTransitionStart: a } = nm({
      contentEl: o,
      showContent: n,
      expand: t
    });
    return {
      showContent: n,
      contentEl: o,
      n: oS,
      handleTransitionEnd: r,
      handleTransitionStart: a
    };
  }
});
am.render = tS;
var _a = am;
re(_a);
ie(_a, rm);
const iD = _a;
var Ll = _a;
const im = {
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
  onEnd: F()
}, { name: rS, n: aS } = ne("count-to");
function iS(e, n) {
  return g(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      H(e.$slots, "default", { value: e.value }, () => [
        De(
          le(e.value),
          1
          /* TEXT */
        )
      ])
    ],
    2
    /* CLASS */
  );
}
const lm = ee({
  name: rS,
  props: im,
  setup(e) {
    const {
      value: n,
      reset: o,
      // expose
      start: t,
      // expose
      pause: r
    } = b0({
      from: () => W(e.from),
      to: () => W(e.to),
      duration: () => W(e.duration),
      timingFunction: e.timingFunction,
      onFinished() {
        $(e.onEnd);
      }
    }), a = B(() => cl(n.value, W(e.precision)));
    fe(() => [e.from, e.to, e.duration], i), bo(i);
    function i() {
      o(), e.autoStart && t();
    }
    return {
      value: a,
      n: aS,
      start: t,
      pause: r,
      reset: i,
      toNumber: W,
      floor: cl
    };
  }
});
lm.render = iS;
var xa = lm;
re(xa);
ie(xa, im);
const lD = xa;
var Fl = xa;
const sm = {
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
  onEnd: F(),
  onChange: F()
}, { name: lS, n: sS } = ne("countdown"), Ul = 1e3, Hl = 60 * Ul, jl = 60 * Hl, _c = 24 * jl;
function uS(e, n) {
  return g(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      H(e.$slots, "default", Ko(ua(e.timeData)), () => [
        De(
          le(e.showTime),
          1
          /* TEXT */
        )
      ])
    ],
    2
    /* CLASS */
  );
}
const um = ee({
  name: lS,
  props: sm,
  setup(e) {
    const n = w(""), o = w({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    });
    let t = 0, r = !1, a = 0, i = 0, l;
    fe(
      () => e.time,
      () => {
        v(), e.autoStart && d();
      }
    ), bo(() => {
      c(), e.autoStart && d();
    }), Lo(() => {
      l != null && (r = l, r === !0 && d(!0));
    }), yt(() => {
      l = r, f();
    }), Jt(f);
    function s(h, m) {
      const y = Object.values(m), C = ["DD", "HH", "mm", "ss"], k = [24, 60, 60, 1e3];
      if (C.forEach((b, S) => {
        h.includes(b) ? h = h.replace(b, Qo(`${y[S]}`, 2, "0")) : y[S + 1] += y[S] * k[S];
      }), h.includes("S")) {
        const b = Qo(`${y[y.length - 1]}`, 3, "0");
        h.includes("SSS") ? h = h.replace("SSS", b) : h.includes("SS") ? h = h.replace("SS", b.slice(0, 2)) : h = h.replace("S", b.slice(0, 1));
      }
      return h;
    }
    function u(h) {
      const m = Math.floor(h / _c), y = Math.floor(h % _c / jl), C = Math.floor(h % jl / Hl), k = Math.floor(h % Hl / Ul), b = Math.floor(h % Ul), S = {
        days: m,
        hours: y,
        minutes: C,
        seconds: k,
        milliseconds: b
      };
      o.value = S, $(e.onChange, o.value), n.value = s(e.format, S);
    }
    function c() {
      const { time: h, onEnd: m } = e, y = performance.now();
      if (t || (t = y + W(h)), i = t - y, i < 0 && (i = 0), u(i), i === 0) {
        $(m);
        return;
      }
      r && (a = Ao(c));
    }
    function d(h = !1) {
      r && !h || (r = !0, t = performance.now() + (i || W(e.time)), c());
    }
    function f() {
      r = !1, ut(a);
    }
    function v() {
      t = 0, r = !1, ut(a), c();
    }
    return {
      showTime: n,
      timeData: o,
      n: sS,
      start: d,
      pause: f,
      reset: v
    };
  }
});
um.render = uS;
var ei = um;
re(ei);
ie(ei, sm);
const sD = ei;
var Yl = ei;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Wl = 9e15, Ho = 1e9, Kl = "0123456789abcdef", xr = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", ea = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ql = {
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
  minE: -9e15,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Wl,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, cm, co, Te = !0, ni = "[DecimalError] ", Ro = ni + "Invalid argument: ", dm = ni + "Precision limit exceeded", fm = ni + "crypto unavailable", pm = "[object Decimal]", Pn = Math.floor, vn = Math.pow, cS = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, dS = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, fS = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, vm = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, xn = 1e7, Oe = 7, pS = 9007199254740991, vS = xr.length - 1, Xl = ea.length - 1, x = { toStringTag: pm };
x.absoluteValue = x.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), Ce(e);
};
x.ceil = function() {
  return Ce(new this.constructor(this), this.e + 1, 2);
};
x.clampedTo = x.clamp = function(e, n) {
  var o, t = this, r = t.constructor;
  if (e = new r(e), n = new r(n), !e.s || !n.s) return new r(NaN);
  if (e.gt(n)) throw Error(Ro + n);
  return o = t.cmp(e), o < 0 ? e : t.cmp(n) > 0 ? n : new r(t);
};
x.comparedTo = x.cmp = function(e) {
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
x.cosine = x.cos = function() {
  var e, n, o = this, t = o.constructor;
  return o.d ? o.d[0] ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(o.e, o.sd()) + Oe, t.rounding = 1, o = mS(t, ym(t, o)), t.precision = e, t.rounding = n, Ce(co == 2 || co == 3 ? o.neg() : o, e, n, !0)) : new t(1) : new t(NaN);
};
x.cubeRoot = x.cbrt = function() {
  var e, n, o, t, r, a, i, l, s, u, c = this, d = c.constructor;
  if (!c.isFinite() || c.isZero()) return new d(c);
  for (Te = !1, a = c.s * vn(c.s * c, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (o = Cn(c.d), e = c.e, (a = (e - o.length + 1) % 3) && (o += a == 1 || a == -2 ? "0" : "00"), a = vn(o, 1 / 3), e = Pn((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? o = "5e" + e : (o = a.toExponential(), o = o.slice(0, o.indexOf("e") + 1) + e), t = new d(o), t.s = c.s) : t = new d(a.toString()), i = (e = d.precision) + 3; ; )
    if (l = t, s = l.times(l).times(l), u = s.plus(c), t = Je(u.plus(c).times(l), u.plus(s), i + 2, 1), Cn(l.d).slice(0, i) === (o = Cn(t.d)).slice(0, i))
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
  return Te = !0, Ce(t, e, d.rounding, n);
};
x.decimalPlaces = x.dp = function() {
  var e, n = this.d, o = NaN;
  if (n) {
    if (e = n.length - 1, o = (e - Pn(this.e / Oe)) * Oe, e = n[e], e) for (; e % 10 == 0; e /= 10) o--;
    o < 0 && (o = 0);
  }
  return o;
};
x.dividedBy = x.div = function(e) {
  return Je(this, new this.constructor(e));
};
x.dividedToIntegerBy = x.divToInt = function(e) {
  var n = this, o = n.constructor;
  return Ce(Je(n, new o(e), 0, 1, 1), o.precision, o.rounding);
};
x.equals = x.eq = function(e) {
  return this.cmp(e) === 0;
};
x.floor = function() {
  return Ce(new this.constructor(this), this.e + 1, 3);
};
x.greaterThan = x.gt = function(e) {
  return this.cmp(e) > 0;
};
x.greaterThanOrEqualTo = x.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
x.hyperbolicCosine = x.cosh = function() {
  var e, n, o, t, r, a = this, i = a.constructor, l = new i(1);
  if (!a.isFinite()) return new i(a.s ? 1 / 0 : NaN);
  if (a.isZero()) return l;
  o = i.precision, t = i.rounding, i.precision = o + Math.max(a.e, a.sd()) + 4, i.rounding = 1, r = a.d.length, r < 32 ? (e = Math.ceil(r / 3), n = (1 / ti(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), a = ht(i, 1, a.times(n), new i(1), !0);
  for (var s, u = e, c = new i(8); u--; )
    s = a.times(a), a = l.minus(s.times(c.minus(s.times(c))));
  return Ce(a, i.precision = o, i.rounding = t, !0);
};
x.hyperbolicSine = x.sinh = function() {
  var e, n, o, t, r = this, a = r.constructor;
  if (!r.isFinite() || r.isZero()) return new a(r);
  if (n = a.precision, o = a.rounding, a.precision = n + Math.max(r.e, r.sd()) + 4, a.rounding = 1, t = r.d.length, t < 3)
    r = ht(a, 2, r, r, !0);
  else {
    e = 1.4 * Math.sqrt(t), e = e > 16 ? 16 : e | 0, r = r.times(1 / ti(5, e)), r = ht(a, 2, r, r, !0);
    for (var i, l = new a(5), s = new a(16), u = new a(20); e--; )
      i = r.times(r), r = r.times(l.plus(i.times(s.times(i).plus(u))));
  }
  return a.precision = n, a.rounding = o, Ce(r, n, o, !0);
};
x.hyperbolicTangent = x.tanh = function() {
  var e, n, o = this, t = o.constructor;
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + 7, t.rounding = 1, Je(o.sinh(), o.cosh(), t.precision = e, t.rounding = n)) : new t(o.s);
};
x.inverseCosine = x.acos = function() {
  var e, n = this, o = n.constructor, t = n.abs().cmp(1), r = o.precision, a = o.rounding;
  return t !== -1 ? t === 0 ? n.isNeg() ? _n(o, r, a) : new o(0) : new o(NaN) : n.isZero() ? _n(o, r + 4, a).times(0.5) : (o.precision = r + 6, o.rounding = 1, n = n.asin(), e = _n(o, r + 4, a).times(0.5), o.precision = r, o.rounding = a, e.minus(n));
};
x.inverseHyperbolicCosine = x.acosh = function() {
  var e, n, o = this, t = o.constructor;
  return o.lte(1) ? new t(o.eq(1) ? 0 : NaN) : o.isFinite() ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(Math.abs(o.e), o.sd()) + 4, t.rounding = 1, Te = !1, o = o.times(o).minus(1).sqrt().plus(o), Te = !0, t.precision = e, t.rounding = n, o.ln()) : new t(o);
};
x.inverseHyperbolicSine = x.asinh = function() {
  var e, n, o = this, t = o.constructor;
  return !o.isFinite() || o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + 2 * Math.max(Math.abs(o.e), o.sd()) + 6, t.rounding = 1, Te = !1, o = o.times(o).plus(1).sqrt().plus(o), Te = !0, t.precision = e, t.rounding = n, o.ln());
};
x.inverseHyperbolicTangent = x.atanh = function() {
  var e, n, o, t, r = this, a = r.constructor;
  return r.isFinite() ? r.e >= 0 ? new a(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN) : (e = a.precision, n = a.rounding, t = r.sd(), Math.max(t, e) < 2 * -r.e - 1 ? Ce(new a(r), e, n, !0) : (a.precision = o = t - r.e, r = Je(r.plus(1), new a(1).minus(r), o + e, 1), a.precision = e + 4, a.rounding = 1, r = r.ln(), a.precision = e, a.rounding = n, r.times(0.5))) : new a(NaN);
};
x.inverseSine = x.asin = function() {
  var e, n, o, t, r = this, a = r.constructor;
  return r.isZero() ? new a(r) : (n = r.abs().cmp(1), o = a.precision, t = a.rounding, n !== -1 ? n === 0 ? (e = _n(a, o + 4, t).times(0.5), e.s = r.s, e) : new a(NaN) : (a.precision = o + 6, a.rounding = 1, r = r.div(new a(1).minus(r.times(r)).sqrt().plus(1)).atan(), a.precision = o, a.rounding = t, r.times(2)));
};
x.inverseTangent = x.atan = function() {
  var e, n, o, t, r, a, i, l, s, u = this, c = u.constructor, d = c.precision, f = c.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new c(u);
    if (u.abs().eq(1) && d + 4 <= Xl)
      return i = _n(c, d + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s) return new c(NaN);
    if (d + 4 <= Xl)
      return i = _n(c, d + 4, f).times(0.5), i.s = u.s, i;
  }
  for (c.precision = l = d + 10, c.rounding = 1, o = Math.min(28, l / Oe + 2 | 0), e = o; e; --e) u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (Te = !1, n = Math.ceil(l / Oe), t = 1, s = u.times(u), i = new c(u), r = u; e !== -1; )
    if (r = r.times(s), a = i.minus(r.div(t += 2)), r = r.times(s), i = a.plus(r.div(t += 2)), i.d[n] !== void 0) for (e = n; i.d[e] === a.d[e] && e--; ) ;
  return o && (i = i.times(2 << o - 1)), Te = !0, Ce(i, c.precision = d, c.rounding = f, !0);
};
x.isFinite = function() {
  return !!this.d;
};
x.isInteger = x.isInt = function() {
  return !!this.d && Pn(this.e / Oe) > this.d.length - 2;
};
x.isNaN = function() {
  return !this.s;
};
x.isNegative = x.isNeg = function() {
  return this.s < 0;
};
x.isPositive = x.isPos = function() {
  return this.s > 0;
};
x.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
x.lessThan = x.lt = function(e) {
  return this.cmp(e) < 0;
};
x.lessThanOrEqualTo = x.lte = function(e) {
  return this.cmp(e) < 1;
};
x.logarithm = x.log = function(e) {
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
  if (Te = !1, l = d + v, i = Eo(u, l), t = n ? na(c, l + 10) : Eo(e, l), s = Je(i, t, l, 1), Wt(s.d, r = d, f))
    do
      if (l += 10, i = Eo(u, l), t = n ? na(c, l + 10) : Eo(e, l), s = Je(i, t, l, 1), !a) {
        +Cn(s.d).slice(r + 1, r + 15) + 1 == 1e14 && (s = Ce(s, d + 1, 0));
        break;
      }
    while (Wt(s.d, r += 10, f));
  return Te = !0, Ce(s, d, f);
};
x.minus = x.sub = function(e) {
  var n, o, t, r, a, i, l, s, u, c, d, f, v = this, h = v.constructor;
  if (e = new h(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new h(NaN) : v.d ? e.s = -e.s : e = new h(e.d || v.s !== e.s ? v : NaN), e;
  if (v.s != e.s)
    return e.s = -e.s, v.plus(e);
  if (u = v.d, f = e.d, l = h.precision, s = h.rounding, !u[0] || !f[0]) {
    if (f[0]) e.s = -e.s;
    else if (u[0]) e = new h(v);
    else return new h(s === 3 ? -0 : 0);
    return Te ? Ce(e, l, s) : e;
  }
  if (o = Pn(e.e / Oe), c = Pn(v.e / Oe), u = u.slice(), a = c - o, a) {
    for (d = a < 0, d ? (n = u, a = -a, i = f.length) : (n = f, o = c, i = u.length), t = Math.max(Math.ceil(l / Oe), i) + 2, a > t && (a = t, n.length = 1), n.reverse(), t = a; t--; ) n.push(0);
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
      for (r = t; r && u[--r] === 0; ) u[r] = xn - 1;
      --u[r], u[t] += xn;
    }
    u[t] -= f[t];
  }
  for (; u[--i] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --o;
  return u[0] ? (e.d = u, e.e = oi(u, o), Te ? Ce(e, l, s) : e) : new h(s === 3 ? -0 : 0);
};
x.modulo = x.mod = function(e) {
  var n, o = this, t = o.constructor;
  return e = new t(e), !o.d || !e.s || e.d && !e.d[0] ? new t(NaN) : !e.d || o.d && !o.d[0] ? Ce(new t(o), t.precision, t.rounding) : (Te = !1, t.modulo == 9 ? (n = Je(o, e.abs(), 0, 3, 1), n.s *= e.s) : n = Je(o, e, 0, t.modulo, 1), n = n.times(e), Te = !0, o.minus(n));
};
x.naturalExponential = x.exp = function() {
  return Gl(this);
};
x.naturalLogarithm = x.ln = function() {
  return Eo(this);
};
x.negated = x.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, Ce(e);
};
x.plus = x.add = function(e) {
  var n, o, t, r, a, i, l, s, u, c, d = this, f = d.constructor;
  if (e = new f(e), !d.d || !e.d)
    return !d.s || !e.s ? e = new f(NaN) : d.d || (e = new f(e.d || d.s === e.s ? d : NaN)), e;
  if (d.s != e.s)
    return e.s = -e.s, d.minus(e);
  if (u = d.d, c = e.d, l = f.precision, s = f.rounding, !u[0] || !c[0])
    return c[0] || (e = new f(d)), Te ? Ce(e, l, s) : e;
  if (a = Pn(d.e / Oe), t = Pn(e.e / Oe), u = u.slice(), r = a - t, r) {
    for (r < 0 ? (o = u, r = -r, i = c.length) : (o = c, t = a, i = u.length), a = Math.ceil(l / Oe), i = a > i ? a + 1 : i + 1, r > i && (r = i, o.length = 1), o.reverse(); r--; ) o.push(0);
    o.reverse();
  }
  for (i = u.length, r = c.length, i - r < 0 && (r = i, o = c, c = u, u = o), n = 0; r; )
    n = (u[--r] = u[r] + c[r] + n) / xn | 0, u[r] %= xn;
  for (n && (u.unshift(n), ++t), i = u.length; u[--i] == 0; ) u.pop();
  return e.d = u, e.e = oi(u, t), Te ? Ce(e, l, s) : e;
};
x.precision = x.sd = function(e) {
  var n, o = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Ro + e);
  return o.d ? (n = mm(o.d), e && o.e + 1 > n && (n = o.e + 1)) : n = NaN, n;
};
x.round = function() {
  var e = this, n = e.constructor;
  return Ce(new n(e), e.e + 1, n.rounding);
};
x.sine = x.sin = function() {
  var e, n, o = this, t = o.constructor;
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + Math.max(o.e, o.sd()) + Oe, t.rounding = 1, o = gS(t, ym(t, o)), t.precision = e, t.rounding = n, Ce(co > 2 ? o.neg() : o, e, n, !0)) : new t(NaN);
};
x.squareRoot = x.sqrt = function() {
  var e, n, o, t, r, a, i = this, l = i.d, s = i.e, u = i.s, c = i.constructor;
  if (u !== 1 || !l || !l[0])
    return new c(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (Te = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = Cn(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Pn((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), t = new c(n)) : t = new c(u.toString()), o = (s = c.precision) + 3; ; )
    if (a = t, t = a.plus(Je(i, a, o + 2, 1)).times(0.5), Cn(a.d).slice(0, o) === (n = Cn(t.d)).slice(0, o))
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
  return Te = !0, Ce(t, s, c.rounding, e);
};
x.tangent = x.tan = function() {
  var e, n, o = this, t = o.constructor;
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + 10, t.rounding = 1, o = o.sin(), o.s = 1, o = Je(o, new t(1).minus(o.times(o)).sqrt(), e + 10, 0), t.precision = e, t.rounding = n, Ce(co == 2 || co == 4 ? o.neg() : o, e, n, !0)) : new t(NaN);
};
x.times = x.mul = function(e) {
  var n, o, t, r, a, i, l, s, u, c = this, d = c.constructor, f = c.d, v = (e = new d(e)).d;
  if (e.s *= c.s, !f || !f[0] || !v || !v[0])
    return new d(!e.s || f && !f[0] && !v || v && !v[0] && !f ? NaN : !f || !v ? e.s / 0 : e.s * 0);
  for (o = Pn(c.e / Oe) + Pn(e.e / Oe), s = f.length, u = v.length, s < u && (a = f, f = v, v = a, i = s, s = u, u = i), a = [], i = s + u, t = i; t--; ) a.push(0);
  for (t = u; --t >= 0; ) {
    for (n = 0, r = s + t; r > t; )
      l = a[r] + v[t] * f[r - t - 1] + n, a[r--] = l % xn | 0, n = l / xn | 0;
    a[r] = (a[r] + n) % xn | 0;
  }
  for (; !a[--i]; ) a.pop();
  return n ? ++o : a.shift(), e.d = a, e.e = oi(a, o), Te ? Ce(e, d.precision, d.rounding) : e;
};
x.toBinary = function(e, n) {
  return Su(this, 2, e, n);
};
x.toDecimalPlaces = x.toDP = function(e, n) {
  var o = this, t = o.constructor;
  return o = new t(o), e === void 0 ? o : (An(e, 0, Ho), n === void 0 ? n = t.rounding : An(n, 0, 8), Ce(o, e + o.e + 1, n));
};
x.toExponential = function(e, n) {
  var o, t = this, r = t.constructor;
  return e === void 0 ? o = ao(t, !0) : (An(e, 0, Ho), n === void 0 ? n = r.rounding : An(n, 0, 8), t = Ce(new r(t), e + 1, n), o = ao(t, !0, e + 1)), t.isNeg() && !t.isZero() ? "-" + o : o;
};
x.toFixed = function(e, n) {
  var o, t, r = this, a = r.constructor;
  return e === void 0 ? o = ao(r) : (An(e, 0, Ho), n === void 0 ? n = a.rounding : An(n, 0, 8), t = Ce(new a(r), e + r.e + 1, n), o = ao(t, !1, e + t.e + 1)), r.isNeg() && !r.isZero() ? "-" + o : o;
};
x.toFraction = function(e) {
  var n, o, t, r, a, i, l, s, u, c, d, f, v = this, h = v.d, m = v.constructor;
  if (!h) return new m(v);
  if (u = o = new m(1), t = s = new m(0), n = new m(t), a = n.e = mm(h) - v.e - 1, i = a % Oe, n.d[0] = vn(10, i < 0 ? Oe + i : i), e == null)
    e = a > 0 ? n : u;
  else {
    if (l = new m(e), !l.isInt() || l.lt(u)) throw Error(Ro + l);
    e = l.gt(n) ? a > 0 ? n : u : l;
  }
  for (Te = !1, l = new m(Cn(h)), c = m.precision, m.precision = a = h.length * Oe * 2; d = Je(l, n, 0, 1, 1), r = o.plus(d.times(t)), r.cmp(e) != 1; )
    o = t, t = r, r = u, u = s.plus(d.times(r)), s = r, r = n, n = l.minus(d.times(r)), l = r;
  return r = Je(e.minus(o), t, 0, 1, 1), s = s.plus(r.times(u)), o = o.plus(r.times(t)), s.s = u.s = v.s, f = Je(u, t, a, 1).minus(v).abs().cmp(Je(s, o, a, 1).minus(v).abs()) < 1 ? [u, t] : [s, o], m.precision = c, Te = !0, f;
};
x.toHexadecimal = x.toHex = function(e, n) {
  return Su(this, 16, e, n);
};
x.toNearest = function(e, n) {
  var o = this, t = o.constructor;
  if (o = new t(o), e == null) {
    if (!o.d) return o;
    e = new t(1), n = t.rounding;
  } else {
    if (e = new t(e), n === void 0 ? n = t.rounding : An(n, 0, 8), !o.d) return e.s ? o : e;
    if (!e.d)
      return e.s && (e.s = o.s), e;
  }
  return e.d[0] ? (Te = !1, o = Je(o, e, 0, n, 1).times(e), Te = !0, Ce(o)) : (e.s = o.s, o = e), o;
};
x.toNumber = function() {
  return +this;
};
x.toOctal = function(e, n) {
  return Su(this, 8, e, n);
};
x.toPower = x.pow = function(e) {
  var n, o, t, r, a, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0]) return new s(vn(+l, u));
  if (l = new s(l), l.eq(1)) return l;
  if (t = s.precision, a = s.rounding, e.eq(1)) return Ce(l, t, a);
  if (n = Pn(e.e / Oe), n >= e.d.length - 1 && (o = u < 0 ? -u : u) <= pS)
    return r = hm(s, l, o, t), e.s < 0 ? new s(1).div(r) : Ce(r, t, a);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1) return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return o = vn(+l, u), n = o == 0 || !isFinite(o) ? Pn(u * (Math.log("0." + Cn(l.d)) / Math.LN10 + l.e + 1)) : new s(o + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (Te = !1, s.rounding = l.s = 1, o = Math.min(12, (n + "").length), r = Gl(e.times(Eo(l, t + o)), t), r.d && (r = Ce(r, t + 5, 1), Wt(r.d, t, a) && (n = t + 10, r = Ce(Gl(e.times(Eo(l, n + o)), n), n + 5, 1), +Cn(r.d).slice(t + 1, t + 15) + 1 == 1e14 && (r = Ce(r, t + 1, 0)))), r.s = i, Te = !0, s.rounding = a, Ce(r, t, a));
};
x.toPrecision = function(e, n) {
  var o, t = this, r = t.constructor;
  return e === void 0 ? o = ao(t, t.e <= r.toExpNeg || t.e >= r.toExpPos) : (An(e, 1, Ho), n === void 0 ? n = r.rounding : An(n, 0, 8), t = Ce(new r(t), e, n), o = ao(t, e <= t.e || t.e <= r.toExpNeg, e)), t.isNeg() && !t.isZero() ? "-" + o : o;
};
x.toSignificantDigits = x.toSD = function(e, n) {
  var o = this, t = o.constructor;
  return e === void 0 ? (e = t.precision, n = t.rounding) : (An(e, 1, Ho), n === void 0 ? n = t.rounding : An(n, 0, 8)), Ce(new t(o), e, n);
};
x.toString = function() {
  var e = this, n = e.constructor, o = ao(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + o : o;
};
x.truncated = x.trunc = function() {
  return Ce(new this.constructor(this), this.e + 1, 1);
};
x.valueOf = x.toJSON = function() {
  var e = this, n = e.constructor, o = ao(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + o : o;
};
function Cn(e) {
  var n, o, t, r = e.length - 1, a = "", i = e[0];
  if (r > 0) {
    for (a += i, n = 1; n < r; n++)
      t = e[n] + "", o = Oe - t.length, o && (a += $o(o)), a += t;
    i = e[n], t = i + "", o = Oe - t.length, o && (a += $o(o));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; ) i /= 10;
  return a + i;
}
function An(e, n, o) {
  if (e !== ~~e || e < n || e > o)
    throw Error(Ro + e);
}
function Wt(e, n, o, t) {
  var r, a, i, l;
  for (a = e[0]; a >= 10; a /= 10) --n;
  return --n < 0 ? (n += Oe, r = 0) : (r = Math.ceil((n + 1) / Oe), n %= Oe), a = vn(10, Oe - n), l = e[r] % a | 0, t == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = o < 4 && l == 99999 || o > 3 && l == 49999 || l == 5e4 || l == 0) : i = (o < 4 && l + 1 == a || o > 3 && l + 1 == a / 2) && (e[r + 1] / a / 100 | 0) == vn(10, n - 2) - 1 || (l == a / 2 || l == 0) && (e[r + 1] / a / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (t || o < 4) && l == 9999 || !t && o > 3 && l == 4999) : i = ((t || o < 4) && l + 1 == a || !t && o > 3 && l + 1 == a / 2) && (e[r + 1] / a / 1e3 | 0) == vn(10, n - 3) - 1, i;
}
function Dr(e, n, o) {
  for (var t, r = [0], a, i = 0, l = e.length; i < l; ) {
    for (a = r.length; a--; ) r[a] *= n;
    for (r[0] += Kl.indexOf(e.charAt(i++)), t = 0; t < r.length; t++)
      r[t] > o - 1 && (r[t + 1] === void 0 && (r[t + 1] = 0), r[t + 1] += r[t] / o | 0, r[t] %= o);
  }
  return r.reverse();
}
function mS(e, n) {
  var o, t, r;
  if (n.isZero()) return n;
  t = n.d.length, t < 32 ? (o = Math.ceil(t / 3), r = (1 / ti(4, o)).toString()) : (o = 16, r = "2.3283064365386962890625e-10"), e.precision += o, n = ht(e, 1, n.times(r), new e(1));
  for (var a = o; a--; ) {
    var i = n.times(n);
    n = i.times(i).minus(i).times(8).plus(1);
  }
  return e.precision -= o, n;
}
var Je = /* @__PURE__ */ function() {
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
    var u, c, d, f, v, h, m, y, C, k, b, S, T, O, D, M, V, L, Y, z, I = t.constructor, N = t.s == r.s ? 1 : -1, j = t.d, E = r.d;
    if (!j || !j[0] || !E || !E[0])
      return new I(
        // Return NaN if either NaN, or both Infinity or 0.
        !t.s || !r.s || (j ? E && j[0] == E[0] : !E) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          j && j[0] == 0 || !E ? N * 0 : N / 0
        )
      );
    for (s ? (v = 1, c = t.e - r.e) : (s = xn, v = Oe, c = Pn(t.e / v) - Pn(r.e / v)), Y = E.length, V = j.length, C = new I(N), k = C.d = [], d = 0; E[d] == (j[d] || 0); d++) ;
    if (E[d] > (j[d] || 0) && c--, a == null ? (O = a = I.precision, i = I.rounding) : l ? O = a + (t.e - r.e) + 1 : O = a, O < 0)
      k.push(1), h = !0;
    else {
      if (O = O / v + 2 | 0, d = 0, Y == 1) {
        for (f = 0, E = E[0], O++; (d < V || f) && O--; d++)
          D = f * s + (j[d] || 0), k[d] = D / E | 0, f = D % E | 0;
        h = f || d < V;
      } else {
        for (f = s / (E[0] + 1) | 0, f > 1 && (E = e(E, f, s), j = e(j, f, s), Y = E.length, V = j.length), M = Y, b = j.slice(0, Y), S = b.length; S < Y; ) b[S++] = 0;
        z = E.slice(), z.unshift(0), L = E[0], E[1] >= s / 2 && ++L;
        do
          f = 0, u = n(E, b, Y, S), u < 0 ? (T = b[0], Y != S && (T = T * s + (b[1] || 0)), f = T / L | 0, f > 1 ? (f >= s && (f = s - 1), m = e(E, f, s), y = m.length, S = b.length, u = n(m, b, y, S), u == 1 && (f--, o(m, Y < y ? z : E, y, s))) : (f == 0 && (u = f = 1), m = E.slice()), y = m.length, y < S && m.unshift(0), o(b, m, S, s), u == -1 && (S = b.length, u = n(E, b, Y, S), u < 1 && (f++, o(b, Y < S ? z : E, S, s))), S = b.length) : u === 0 && (f++, b = [0]), k[d++] = f, u && b[0] ? b[S++] = j[M] || 0 : (b = [j[M]], S = 1);
        while ((M++ < V || b[0] !== void 0) && O--);
        h = b[0] !== void 0;
      }
      k[0] || k.shift();
    }
    if (v == 1)
      C.e = c, cm = h;
    else {
      for (d = 1, f = k[0]; f >= 10; f /= 10) d++;
      C.e = d + c * v - 1, Ce(C, l ? a + C.e + 1 : a, i, h);
    }
    return C;
  };
}();
function Ce(e, n, o, t) {
  var r, a, i, l, s, u, c, d, f, v = e.constructor;
  e: if (n != null) {
    if (d = e.d, !d) return e;
    for (r = 1, l = d[0]; l >= 10; l /= 10) r++;
    if (a = n - r, a < 0)
      a += Oe, i = n, c = d[f = 0], s = c / vn(10, r - i - 1) % 10 | 0;
    else if (f = Math.ceil((a + 1) / Oe), l = d.length, f >= l)
      if (t) {
        for (; l++ <= f; ) d.push(0);
        c = s = 0, r = 1, a %= Oe, i = a - Oe + 1;
      } else
        break e;
    else {
      for (c = l = d[f], r = 1; l >= 10; l /= 10) r++;
      a %= Oe, i = a - Oe + r, s = i < 0 ? 0 : c / vn(10, r - i - 1) % 10 | 0;
    }
    if (t = t || n < 0 || d[f + 1] !== void 0 || (i < 0 ? c : c % vn(10, r - i - 1)), u = o < 4 ? (s || t) && (o == 0 || o == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (o == 4 || t || o == 6 && // Check whether the digit to the left of the rounding digit is odd.
    (a > 0 ? i > 0 ? c / vn(10, r - i) : 0 : d[f - 1]) % 10 & 1 || o == (e.s < 0 ? 8 : 7)), n < 1 || !d[0])
      return d.length = 0, u ? (n -= e.e + 1, d[0] = vn(10, (Oe - n % Oe) % Oe), e.e = -n || 0) : d[0] = e.e = 0, e;
    if (a == 0 ? (d.length = f, l = 1, f--) : (d.length = f + 1, l = vn(10, Oe - a), d[f] = i > 0 ? (c / vn(10, r - i) % vn(10, i) | 0) * l : 0), u)
      for (; ; )
        if (f == 0) {
          for (a = 1, i = d[0]; i >= 10; i /= 10) a++;
          for (i = d[0] += l, l = 1; i >= 10; i /= 10) l++;
          a != l && (e.e++, d[0] == xn && (d[0] = 1));
          break;
        } else {
          if (d[f] += l, d[f] != xn) break;
          d[f--] = 0, l = 1;
        }
    for (a = d.length; d[--a] === 0; ) d.pop();
  }
  return Te && (e.e > v.maxE ? (e.d = null, e.e = NaN) : e.e < v.minE && (e.e = 0, e.d = [0])), e;
}
function ao(e, n, o) {
  if (!e.isFinite()) return bm(e);
  var t, r = e.e, a = Cn(e.d), i = a.length;
  return n ? (o && (t = o - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + $o(t) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : r < 0 ? (a = "0." + $o(-r - 1) + a, o && (t = o - i) > 0 && (a += $o(t))) : r >= i ? (a += $o(r + 1 - i), o && (t = o - r - 1) > 0 && (a = a + "." + $o(t))) : ((t = r + 1) < i && (a = a.slice(0, t) + "." + a.slice(t)), o && (t = o - i) > 0 && (r + 1 === i && (a += "."), a += $o(t))), a;
}
function oi(e, n) {
  var o = e[0];
  for (n *= Oe; o >= 10; o /= 10) n++;
  return n;
}
function na(e, n, o) {
  if (n > vS)
    throw Te = !0, o && (e.precision = o), Error(dm);
  return Ce(new e(xr), n, 1, !0);
}
function _n(e, n, o) {
  if (n > Xl) throw Error(dm);
  return Ce(new e(ea), n, o, !0);
}
function mm(e) {
  var n = e.length - 1, o = n * Oe + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10) o--;
    for (n = e[0]; n >= 10; n /= 10) o++;
  }
  return o;
}
function $o(e) {
  for (var n = ""; e--; ) n += "0";
  return n;
}
function hm(e, n, o, t) {
  var r, a = new e(1), i = Math.ceil(t / Oe + 4);
  for (Te = !1; ; ) {
    if (o % 2 && (a = a.times(n), ed(a.d, i) && (r = !0)), o = Pn(o / 2), o === 0) {
      o = a.d.length - 1, r && a.d[o] === 0 && ++a.d[o];
      break;
    }
    n = n.times(n), ed(n.d, i);
  }
  return Te = !0, a;
}
function xc(e) {
  return e.d[e.d.length - 1] & 1;
}
function gm(e, n, o) {
  for (var t, r = new e(n[0]), a = 0; ++a < n.length; )
    if (t = new e(n[a]), t.s)
      r[o](t) && (r = t);
    else {
      r = t;
      break;
    }
  return r;
}
function Gl(e, n) {
  var o, t, r, a, i, l, s, u = 0, c = 0, d = 0, f = e.constructor, v = f.rounding, h = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
  for (n == null ? (Te = !1, s = h) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), d += 5;
  for (t = Math.log(vn(2, d)) / Math.LN10 * 2 + 5 | 0, s += t, o = a = i = new f(1), f.precision = s; ; ) {
    if (a = Ce(a.times(e), s, 1), o = o.times(++c), l = i.plus(Je(a, o, s, 1)), Cn(l.d).slice(0, s) === Cn(i.d).slice(0, s)) {
      for (r = d; r--; ) i = Ce(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && Wt(i.d, s - t, v, u))
          f.precision = s += 10, o = a = l = new f(1), c = 0, u++;
        else
          return Ce(i, f.precision = h, v, Te = !0);
      else
        return f.precision = h, i;
    }
    i = l;
  }
}
function Eo(e, n) {
  var o, t, r, a, i, l, s, u, c, d, f, v = 1, h = 10, m = e, y = m.d, C = m.constructor, k = C.rounding, b = C.precision;
  if (m.s < 0 || !y || !y[0] || !m.e && y[0] == 1 && y.length == 1)
    return new C(y && !y[0] ? -1 / 0 : m.s != 1 ? NaN : y ? 0 : m);
  if (n == null ? (Te = !1, c = b) : c = n, C.precision = c += h, o = Cn(y), t = o.charAt(0), Math.abs(a = m.e) < 15e14) {
    for (; t < 7 && t != 1 || t == 1 && o.charAt(1) > 3; )
      m = m.times(e), o = Cn(m.d), t = o.charAt(0), v++;
    a = m.e, t > 1 ? (m = new C("0." + o), a++) : m = new C(t + "." + o.slice(1));
  } else
    return u = na(C, c + 2, b).times(a + ""), m = Eo(new C(t + "." + o.slice(1)), c - h).plus(u), C.precision = b, n == null ? Ce(m, b, k, Te = !0) : m;
  for (d = m, s = i = m = Je(m.minus(1), m.plus(1), c, 1), f = Ce(m.times(m), c, 1), r = 3; ; ) {
    if (i = Ce(i.times(f), c, 1), u = s.plus(Je(i, new C(r), c, 1)), Cn(u.d).slice(0, c) === Cn(s.d).slice(0, c))
      if (s = s.times(2), a !== 0 && (s = s.plus(na(C, c + 2, b).times(a + ""))), s = Je(s, new C(v), c, 1), n == null)
        if (Wt(s.d, c - h, k, l))
          C.precision = c += h, u = i = m = Je(d.minus(1), d.plus(1), c, 1), f = Ce(m.times(m), c, 1), r = l = 1;
        else
          return Ce(s, C.precision = b, k, Te = !0);
      else
        return C.precision = b, s;
    s = u, r += 2;
  }
}
function bm(e) {
  return String(e.s * e.s / 0);
}
function Zl(e, n) {
  var o, t, r;
  for ((o = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (t = n.search(/e/i)) > 0 ? (o < 0 && (o = t), o += +n.slice(t + 1), n = n.substring(0, t)) : o < 0 && (o = n.length), t = 0; n.charCodeAt(t) === 48; t++) ;
  for (r = n.length; n.charCodeAt(r - 1) === 48; --r) ;
  if (n = n.slice(t, r), n) {
    if (r -= t, e.e = o = o - t - 1, e.d = [], t = (o + 1) % Oe, o < 0 && (t += Oe), t < r) {
      for (t && e.d.push(+n.slice(0, t)), r -= Oe; t < r; ) e.d.push(+n.slice(t, t += Oe));
      n = n.slice(t), t = Oe - n.length;
    } else
      t -= r;
    for (; t--; ) n += "0";
    e.d.push(+n), Te && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function hS(e, n) {
  var o, t, r, a, i, l, s, u, c;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), vm.test(n)) return Zl(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (dS.test(n))
    o = 16, n = n.toLowerCase();
  else if (cS.test(n))
    o = 2;
  else if (fS.test(n))
    o = 8;
  else
    throw Error(Ro + n);
  for (a = n.search(/p/i), a > 0 ? (s = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, t = e.constructor, i && (n = n.replace(".", ""), l = n.length, a = l - a, r = hm(t, new t(o), a, a * 2)), u = Dr(n, o, xn), c = u.length - 1, a = c; u[a] === 0; --a) u.pop();
  return a < 0 ? new t(e.s * 0) : (e.e = oi(u, c), e.d = u, Te = !1, i && (e = Je(e, r, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? vn(2, s) : To.pow(2, s))), Te = !0, e);
}
function gS(e, n) {
  var o, t = n.d.length;
  if (t < 3)
    return n.isZero() ? n : ht(e, 2, n, n);
  o = 1.4 * Math.sqrt(t), o = o > 16 ? 16 : o | 0, n = n.times(1 / ti(5, o)), n = ht(e, 2, n, n);
  for (var r, a = new e(5), i = new e(16), l = new e(20); o--; )
    r = n.times(n), n = n.times(a.plus(r.times(i.times(r).minus(l))));
  return n;
}
function ht(e, n, o, t, r) {
  var a, i, l, s, u = e.precision, c = Math.ceil(u / Oe);
  for (Te = !1, s = o.times(o), l = new e(t); ; ) {
    if (i = Je(l.times(s), new e(n++ * n++), u, 1), l = r ? t.plus(i) : t.minus(i), t = Je(i.times(s), new e(n++ * n++), u, 1), i = l.plus(t), i.d[c] !== void 0) {
      for (a = c; i.d[a] === l.d[a] && a--; ) ;
      if (a == -1) break;
    }
    a = l, l = t, t = i, i = a;
  }
  return Te = !0, i.d.length = c + 1, i;
}
function ti(e, n) {
  for (var o = e; --n; ) o *= e;
  return o;
}
function ym(e, n) {
  var o, t = n.s < 0, r = _n(e, e.precision, 1), a = r.times(0.5);
  if (n = n.abs(), n.lte(a))
    return co = t ? 4 : 1, n;
  if (o = n.divToInt(r), o.isZero())
    co = t ? 3 : 2;
  else {
    if (n = n.minus(o.times(r)), n.lte(a))
      return co = xc(o) ? t ? 2 : 3 : t ? 4 : 1, n;
    co = xc(o) ? t ? 1 : 4 : t ? 3 : 2;
  }
  return n.minus(r).abs();
}
function Su(e, n, o, t) {
  var r, a, i, l, s, u, c, d, f, v = e.constructor, h = o !== void 0;
  if (h ? (An(o, 1, Ho), t === void 0 ? t = v.rounding : An(t, 0, 8)) : (o = v.precision, t = v.rounding), !e.isFinite())
    c = bm(e);
  else {
    for (c = ao(e), i = c.indexOf("."), h ? (r = 2, n == 16 ? o = o * 4 - 3 : n == 8 && (o = o * 3 - 2)) : r = n, i >= 0 && (c = c.replace(".", ""), f = new v(1), f.e = c.length - i, f.d = Dr(ao(f), 10, r), f.e = f.d.length), d = Dr(c, 10, r), a = s = d.length; d[--s] == 0; ) d.pop();
    if (!d[0])
      c = h ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new v(e), e.d = d, e.e = a, e = Je(e, f, o, t, 0, r), d = e.d, a = e.e, u = cm), i = d[o], l = r / 2, u = u || d[o + 1] !== void 0, u = t < 4 ? (i !== void 0 || u) && (t === 0 || t === (e.s < 0 ? 3 : 2)) : i > l || i === l && (t === 4 || u || t === 6 && d[o - 1] & 1 || t === (e.s < 0 ? 8 : 7)), d.length = o, u)
        for (; ++d[--o] > r - 1; )
          d[o] = 0, o || (++a, d.unshift(1));
      for (s = d.length; !d[s - 1]; --s) ;
      for (i = 0, c = ""; i < s; i++) c += Kl.charAt(d[i]);
      if (h) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++) c += "0";
            for (d = Dr(c, r, n), s = d.length; !d[s - 1]; --s) ;
            for (i = 1, c = "1."; i < s; i++) c += Kl.charAt(d[i]);
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
function ed(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function bS(e) {
  return new this(e).abs();
}
function yS(e) {
  return new this(e).acos();
}
function wS(e) {
  return new this(e).acosh();
}
function kS(e, n) {
  return new this(e).plus(n);
}
function $S(e) {
  return new this(e).asin();
}
function CS(e) {
  return new this(e).asinh();
}
function SS(e) {
  return new this(e).atan();
}
function PS(e) {
  return new this(e).atanh();
}
function OS(e, n) {
  e = new this(e), n = new this(n);
  var o, t = this.precision, r = this.rounding, a = t + 4;
  return !e.s || !n.s ? o = new this(NaN) : !e.d && !n.d ? (o = _n(this, a, 1).times(n.s > 0 ? 0.25 : 0.75), o.s = e.s) : !n.d || e.isZero() ? (o = n.s < 0 ? _n(this, t, r) : new this(0), o.s = e.s) : !e.d || n.isZero() ? (o = _n(this, a, 1).times(0.5), o.s = e.s) : n.s < 0 ? (this.precision = a, this.rounding = 1, o = this.atan(Je(e, n, a, 1)), n = _n(this, a, 1), this.precision = t, this.rounding = r, o = e.s < 0 ? o.minus(n) : o.plus(n)) : o = this.atan(Je(e, n, a, 1)), o;
}
function zS(e) {
  return new this(e).cbrt();
}
function ES(e) {
  return Ce(e = new this(e), e.e + 1, 2);
}
function TS(e, n, o) {
  return new this(e).clamp(n, o);
}
function BS(e) {
  if (!e || typeof e != "object") throw Error(ni + "Object expected");
  var n, o, t, r = e.defaults === !0, a = [
    "precision",
    1,
    Ho,
    "rounding",
    0,
    8,
    "toExpNeg",
    -9e15,
    0,
    "toExpPos",
    0,
    Wl,
    "maxE",
    0,
    Wl,
    "minE",
    -9e15,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < a.length; n += 3)
    if (o = a[n], r && (this[o] = ql[o]), (t = e[o]) !== void 0)
      if (Pn(t) === t && t >= a[n + 1] && t <= a[n + 2]) this[o] = t;
      else throw Error(Ro + o + ": " + t);
  if (o = "crypto", r && (this[o] = ql[o]), (t = e[o]) !== void 0)
    if (t === !0 || t === !1 || t === 0 || t === 1)
      if (t)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[o] = !0;
        else
          throw Error(fm);
      else
        this[o] = !1;
    else
      throw Error(Ro + o + ": " + t);
  return this;
}
function DS(e) {
  return new this(e).cos();
}
function IS(e) {
  return new this(e).cosh();
}
function wm(e) {
  var n, o, t;
  function r(a) {
    var i, l, s, u = this;
    if (!(u instanceof r)) return new r(a);
    if (u.constructor = r, nd(a)) {
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
      return Zl(u, a.toString());
    } else if (s !== "string")
      throw Error(Ro + a);
    return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (l === 43 && (a = a.slice(1)), u.s = 1), vm.test(a) ? Zl(u, a) : hS(u, a);
  }
  if (r.prototype = x, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.EUCLID = 9, r.config = r.set = BS, r.clone = wm, r.isDecimal = nd, r.abs = bS, r.acos = yS, r.acosh = wS, r.add = kS, r.asin = $S, r.asinh = CS, r.atan = SS, r.atanh = PS, r.atan2 = OS, r.cbrt = zS, r.ceil = ES, r.clamp = TS, r.cos = DS, r.cosh = IS, r.div = AS, r.exp = MS, r.floor = NS, r.hypot = VS, r.ln = RS, r.log = LS, r.log10 = US, r.log2 = FS, r.max = HS, r.min = jS, r.mod = YS, r.mul = WS, r.pow = KS, r.random = qS, r.round = XS, r.sign = GS, r.sin = ZS, r.sinh = JS, r.sqrt = QS, r.sub = _S, r.sum = xS, r.tan = e6, r.tanh = n6, r.trunc = o6, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (t = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < t.length; ) e.hasOwnProperty(o = t[n++]) || (e[o] = this[o]);
  return r.config(e), r;
}
function AS(e, n) {
  return new this(e).div(n);
}
function MS(e) {
  return new this(e).exp();
}
function NS(e) {
  return Ce(e = new this(e), e.e + 1, 3);
}
function VS() {
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
function nd(e) {
  return e instanceof To || e && e.toStringTag === pm || !1;
}
function RS(e) {
  return new this(e).ln();
}
function LS(e, n) {
  return new this(e).log(n);
}
function FS(e) {
  return new this(e).log(2);
}
function US(e) {
  return new this(e).log(10);
}
function HS() {
  return gm(this, arguments, "lt");
}
function jS() {
  return gm(this, arguments, "gt");
}
function YS(e, n) {
  return new this(e).mod(n);
}
function WS(e, n) {
  return new this(e).mul(n);
}
function KS(e, n) {
  return new this(e).pow(n);
}
function qS(e) {
  var n, o, t, r, a = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : An(e, 1, Ho), t = Math.ceil(e / Oe), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(t)); a < t; )
        r = n[a], r >= 429e7 ? n[a] = crypto.getRandomValues(new Uint32Array(1))[0] : l[a++] = r % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(t *= 4); a < t; )
        r = n[a] + (n[a + 1] << 8) + (n[a + 2] << 16) + ((n[a + 3] & 127) << 24), r >= 214e7 ? crypto.randomBytes(4).copy(n, a) : (l.push(r % 1e7), a += 4);
      a = t / 4;
    } else
      throw Error(fm);
  else for (; a < t; ) l[a++] = Math.random() * 1e7 | 0;
  for (t = l[--a], e %= Oe, t && e && (r = vn(10, Oe - e), l[a] = (t / r | 0) * r); l[a] === 0; a--) l.pop();
  if (a < 0)
    o = 0, l = [0];
  else {
    for (o = -1; l[0] === 0; o -= Oe) l.shift();
    for (t = 1, r = l[0]; r >= 10; r /= 10) t++;
    t < Oe && (o -= Oe - t);
  }
  return i.e = o, i.d = l, i;
}
function XS(e) {
  return Ce(e = new this(e), e.e + 1, this.rounding);
}
function GS(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function ZS(e) {
  return new this(e).sin();
}
function JS(e) {
  return new this(e).sinh();
}
function QS(e) {
  return new this(e).sqrt();
}
function _S(e, n) {
  return new this(e).sub(n);
}
function xS() {
  var e = 0, n = arguments, o = new this(n[e]);
  for (Te = !1; o.s && ++e < n.length; ) o = o.plus(n[e]);
  return Te = !0, Ce(o, this.precision, this.rounding);
}
function e6(e) {
  return new this(e).tan();
}
function n6(e) {
  return new this(e).tanh();
}
function o6(e) {
  return Ce(e = new this(e), e.e + 1, 1);
}
x[Symbol.for("nodejs.util.inspect.custom")] = x.toString;
x[Symbol.toStringTag] = "Decimal";
var To = x.constructor = wm(ql);
xr = new To(xr);
ea = new To(ea);
const km = {
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
  onBeforeChange: F(),
  onChange: F(),
  onIncrement: F(),
  onDecrement: F(),
  "onUpdate:modelValue": F()
}, od = 100, td = 600, { name: t6, n: r6, classes: a6 } = ne("counter"), i6 = ["inputmode", "readonly", "disabled"];
function l6(e, n) {
  const o = _("var-icon"), t = _("var-button"), r = _("var-form-details");
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      R(
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
          X(t, {
            class: p(
              e.classes(
                e.n("decrement-button"),
                [!e.decrementButton, e.n("--hidden")],
                [e.disabled || e.formDisabled, e.n("--not-allowed")]
              )
            ),
            style: Z({
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
            default: ue(() => [
              X(o, { name: "minus" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]),
          Ne(R("input", {
            "onUpdate:modelValue": n[0] || (n[0] = (a) => e.inputValue = a),
            class: p(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
            style: Z({
              width: e.toSizeUnit(e.inputWidth),
              fontSize: e.toSizeUnit(e.inputTextSize)
            }),
            inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
            readonly: e.readonly || e.formReadonly,
            disabled: e.disabled || e.formDisabled || e.disableInput,
            onChange: n[1] || (n[1] = (...a) => e.handleChange && e.handleChange(...a))
          }, null, 46, i6), [
            [nb, e.inputValue]
          ]),
          X(t, {
            class: p(
              e.classes(
                e.n("increment-button"),
                [!e.incrementButton, e.n("--hidden")],
                [e.disabled || e.formDisabled, e.n("--not-allowed")]
              )
            ),
            style: Z({
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
            default: ue(() => [
              X(o, { name: "plus" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"])
        ],
        16
        /* FULL_PROPS */
      ),
      X(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const $m = ee({
  name: t6,
  components: {
    VarButton: Bn,
    VarIcon: Ge,
    VarFormDetails: Tn
  },
  directives: { Ripple: rn },
  inheritAttrs: !1,
  props: km,
  setup(e) {
    const n = w(""), { bindForm: o, form: t } = jn(), {
      errorMessage: r,
      validateWithTrigger: a,
      validate: i,
      // expose
      resetValidation: l
    } = Hn(), { readonly: s, disabled: u } = t ?? {}, c = B(() => {
      const { max: E, modelValue: J } = e;
      return E != null && W(J) >= W(E);
    }), d = B(() => {
      const { min: E, modelValue: J } = e;
      return E != null && W(J) <= W(E);
    });
    let f, v, h, m;
    $(o, {
      reset: b,
      validate: C,
      resetValidation: l
    }), fe(
      () => e.modelValue,
      (E) => {
        N(S(String(E))), $(e.onChange, W(E));
      }
    ), N(S(String(e.modelValue)));
    function C() {
      return i(e.rules, e.modelValue);
    }
    function k(E) {
      Ye(() => {
        const { validateTrigger: J, rules: de, modelValue: q } = e;
        a(J, E, de, q);
      });
    }
    function b() {
      const { min: E } = e;
      $(e["onUpdate:modelValue"], E != null ? W(E) : 0), l();
    }
    function S(E) {
      const { decimalLength: J, max: de, min: q } = e;
      let me = W(E);
      return de != null && me > W(de) && (me = W(de)), q != null && me < W(q) && (me = W(q)), E = String(me), J != null && (E = me.toFixed(W(J))), E;
    }
    function T(E) {
      const { lazyChange: J, onBeforeChange: de } = e, { value: q } = E.target, me = S(q);
      J ? $(de, W(me), j) : N(me), k("onInputChange");
    }
    function O() {
      const {
        disabled: E,
        readonly: J,
        disableDecrement: de,
        decrementButton: q,
        lazyChange: me,
        step: Pe,
        modelValue: U,
        onDecrement: Q,
        onBeforeChange: te
      } = e;
      if (u != null && u.value || s != null && s.value || E || J || de || !q || d.value)
        return;
      const he = new To(W(U)).minus(new To(W(Pe))).toString(), A = S(he), K = W(A);
      $(Q, K), me ? $(te, K, j) : (N(A), k("onDecrement"));
    }
    function D() {
      const {
        disabled: E,
        readonly: J,
        disableIncrement: de,
        incrementButton: q,
        lazyChange: me,
        step: Pe,
        modelValue: U,
        onIncrement: Q,
        onBeforeChange: te
      } = e;
      if (u != null && u.value || s != null && s.value || E || J || de || !q || c.value)
        return;
      const he = new To(W(U)).plus(new To(W(Pe))).toString(), A = S(he), K = W(A);
      $(Q, K), me ? $(te, K, j) : (N(A), k("onIncrement"));
    }
    function M() {
      const { press: E, lazyChange: J } = e;
      !E || J || (m = window.setTimeout(() => {
        I();
      }, td));
    }
    function V() {
      const { press: E, lazyChange: J } = e;
      !E || J || (h = window.setTimeout(() => {
        z();
      }, td));
    }
    function L() {
      v && clearTimeout(v), m && clearTimeout(m);
    }
    function Y() {
      f && clearTimeout(f), h && clearTimeout(h);
    }
    function z() {
      f = window.setTimeout(() => {
        D(), z();
      }, od);
    }
    function I() {
      v = window.setTimeout(() => {
        O(), I();
      }, od);
    }
    function N(E) {
      n.value = E;
      const J = W(E);
      $(e["onUpdate:modelValue"], J);
    }
    function j(E) {
      N(S(String(E))), k("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: r,
      formDisabled: u,
      formReadonly: s,
      isMax: c,
      isMin: d,
      n: r6,
      classes: a6,
      formatElevation: dn,
      validate: C,
      reset: b,
      resetValidation: l,
      handleChange: T,
      decrement: O,
      increment: D,
      pressDecrement: M,
      pressIncrement: V,
      releaseDecrement: L,
      releaseIncrement: Y,
      toSizeUnit: ze,
      toNumber: W
    };
  }
});
$m.render = l6;
var ri = $m;
re(ri);
ie(ri, km);
const uD = ri;
var Jl = ri, Cm = 60, Sm = Cm * 60, Pm = Sm * 24, s6 = Pm * 7, gt = 1e3, rl = Cm * gt, rd = Sm * gt, u6 = Pm * gt, c6 = s6 * gt, Pu = "millisecond", tt = "second", rt = "minute", at = "hour", Co = "day", Ir = "week", Qn = "month", Om = "quarter", So = "year", it = "date", d6 = "YYYY-MM-DDTHH:mm:ssZ", ad = "Invalid Date", f6 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, p6 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const v6 = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var Ql = function(n, o, t) {
  var r = String(n);
  return !r || r.length >= o ? n : "" + Array(o + 1 - r.length).join(t) + n;
}, m6 = function(n) {
  var o = -n.utcOffset(), t = Math.abs(o), r = Math.floor(t / 60), a = t % 60;
  return (o <= 0 ? "+" : "-") + Ql(r, 2, "0") + ":" + Ql(a, 2, "0");
}, h6 = function e(n, o) {
  if (n.date() < o.date()) return -e(o, n);
  var t = (o.year() - n.year()) * 12 + (o.month() - n.month()), r = n.clone().add(t, Qn), a = o - r < 0, i = n.clone().add(t + (a ? -1 : 1), Qn);
  return +(-(t + (o - r) / (a ? r - i : i - r)) || 0);
}, g6 = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, b6 = function(n) {
  var o = {
    M: Qn,
    y: So,
    w: Ir,
    d: Co,
    D: it,
    h: at,
    m: rt,
    s: tt,
    ms: Pu,
    Q: Om
  };
  return o[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, y6 = function(n) {
  return n === void 0;
};
const w6 = {
  s: Ql,
  z: m6,
  m: h6,
  a: g6,
  p: b6,
  u: y6
};
var It = "en", qo = {};
qo[It] = v6;
var Ou = function(n) {
  return n instanceof ai;
}, oa = function e(n, o, t) {
  var r;
  if (!n) return It;
  if (typeof n == "string") {
    var a = n.toLowerCase();
    qo[a] && (r = a), o && (qo[a] = o, r = a);
    var i = n.split("-");
    if (!r && i.length > 1)
      return e(i[0]);
  } else {
    var l = n.name;
    qo[l] = n, r = l;
  }
  return !t && r && (It = r), r || !t && It;
}, se = function(n, o) {
  if (Ou(n))
    return n.clone();
  var t = typeof o == "object" ? o : {};
  return t.date = n, t.args = arguments, new ai(t);
}, k6 = function(n, o) {
  return se(n, {
    locale: o.$L,
    utc: o.$u,
    x: o.$x,
    $offset: o.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Ze = w6;
Ze.l = oa;
Ze.i = Ou;
Ze.w = k6;
var $6 = function(n) {
  var o = n.date, t = n.utc;
  if (o === null) return /* @__PURE__ */ new Date(NaN);
  if (Ze.u(o)) return /* @__PURE__ */ new Date();
  if (o instanceof Date) return new Date(o);
  if (typeof o == "string" && !/Z$/i.test(o)) {
    var r = o.match(f6);
    if (r) {
      var a = r[2] - 1 || 0, i = (r[7] || "0").substring(0, 3);
      return t ? new Date(Date.UTC(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)) : new Date(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i);
    }
  }
  return new Date(o);
}, ai = /* @__PURE__ */ function() {
  function e(o) {
    this.$L = oa(o.locale, null, !0), this.parse(o);
  }
  var n = e.prototype;
  return n.parse = function(t) {
    this.$d = $6(t), this.$x = t.x || {}, this.init();
  }, n.init = function() {
    var t = this.$d;
    this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
  }, n.$utils = function() {
    return Ze;
  }, n.isValid = function() {
    return this.$d.toString() !== ad;
  }, n.isSame = function(t, r) {
    var a = se(t);
    return this.startOf(r) <= a && a <= this.endOf(r);
  }, n.isAfter = function(t, r) {
    return se(t) < this.startOf(r);
  }, n.isBefore = function(t, r) {
    return this.endOf(r) < se(t);
  }, n.$g = function(t, r, a) {
    return Ze.u(t) ? this[r] : this.set(a, t);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(t, r) {
    var a = this, i = Ze.u(r) ? !0 : r, l = Ze.p(t), s = function(C, k) {
      var b = Ze.w(a.$u ? Date.UTC(a.$y, k, C) : new Date(a.$y, k, C), a);
      return i ? b : b.endOf(Co);
    }, u = function(C, k) {
      var b = [0, 0, 0, 0], S = [23, 59, 59, 999];
      return Ze.w(a.toDate()[C].apply(
        // eslint-disable-line prefer-spread
        a.toDate("s"),
        (i ? b : S).slice(k)
      ), a);
    }, c = this.$W, d = this.$M, f = this.$D, v = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case So:
        return i ? s(1, 0) : s(31, 11);
      case Qn:
        return i ? s(1, d) : s(0, d + 1);
      case Ir: {
        var h = this.$locale().weekStart || 0, m = (c < h ? c + 7 : c) - h;
        return s(i ? f - m : f + (6 - m), d);
      }
      case Co:
      case it:
        return u(v + "Hours", 0);
      case at:
        return u(v + "Minutes", 1);
      case rt:
        return u(v + "Seconds", 2);
      case tt:
        return u(v + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(t) {
    return this.startOf(t, !1);
  }, n.$set = function(t, r) {
    var a, i = Ze.p(t), l = "set" + (this.$u ? "UTC" : ""), s = (a = {}, a[Co] = l + "Date", a[it] = l + "Date", a[Qn] = l + "Month", a[So] = l + "FullYear", a[at] = l + "Hours", a[rt] = l + "Minutes", a[tt] = l + "Seconds", a[Pu] = l + "Milliseconds", a)[i], u = i === Co ? this.$D + (r - this.$W) : r;
    if (i === Qn || i === So) {
      var c = this.clone().set(it, 1);
      c.$d[s](u), c.init(), this.$d = c.set(it, Math.min(this.$D, c.daysInMonth())).$d;
    } else s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(t, r) {
    return this.clone().$set(t, r);
  }, n.get = function(t) {
    return this[Ze.p(t)]();
  }, n.add = function(t, r) {
    var a = this, i;
    t = Number(t);
    var l = Ze.p(r), s = function(f) {
      var v = se(a);
      return Ze.w(v.date(v.date() + Math.round(f * t)), a);
    };
    if (l === Qn)
      return this.set(Qn, this.$M + t);
    if (l === So)
      return this.set(So, this.$y + t);
    if (l === Co)
      return s(1);
    if (l === Ir)
      return s(7);
    var u = (i = {}, i[rt] = rl, i[at] = rd, i[tt] = gt, i)[l] || 1, c = this.$d.getTime() + t * u;
    return Ze.w(c, this);
  }, n.subtract = function(t, r) {
    return this.add(t * -1, r);
  }, n.format = function(t) {
    var r = this, a = this.$locale();
    if (!this.isValid()) return a.invalidDate || ad;
    var i = t || d6, l = Ze.z(this), s = this.$H, u = this.$m, c = this.$M, d = a.weekdays, f = a.months, v = a.meridiem, h = function(b, S, T, O) {
      return b && (b[S] || b(r, i)) || T[S].slice(0, O);
    }, m = function(b) {
      return Ze.s(s % 12 || 12, b, "0");
    }, y = v || function(k, b, S) {
      var T = k < 12 ? "AM" : "PM";
      return S ? T.toLowerCase() : T;
    }, C = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: c + 1,
      MM: Ze.s(c + 1, 2, "0"),
      MMM: h(a.monthsShort, c, f, 3),
      MMMM: h(f, c),
      D: this.$D,
      DD: Ze.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: h(a.weekdaysMin, this.$W, d, 2),
      ddd: h(a.weekdaysShort, this.$W, d, 3),
      dddd: d[this.$W],
      H: String(s),
      HH: Ze.s(s, 2, "0"),
      h: m(1),
      hh: m(2),
      a: y(s, u, !0),
      A: y(s, u, !1),
      m: String(u),
      mm: Ze.s(u, 2, "0"),
      s: String(this.$s),
      ss: Ze.s(this.$s, 2, "0"),
      SSS: Ze.s(this.$ms, 3, "0"),
      Z: l
      // 'ZZ' logic below
    };
    return i.replace(p6, function(k, b) {
      return b || C[k] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(t, r, a) {
    var i, l = Ze.p(r), s = se(t), u = (s.utcOffset() - this.utcOffset()) * rl, c = this - s, d = Ze.m(this, s);
    return d = (i = {}, i[So] = d / 12, i[Qn] = d, i[Om] = d / 3, i[Ir] = (c - u) / c6, i[Co] = (c - u) / u6, i[at] = c / rd, i[rt] = c / rl, i[tt] = c / gt, i)[l] || c, a ? d : Ze.a(d);
  }, n.daysInMonth = function() {
    return this.endOf(Qn).$D;
  }, n.$locale = function() {
    return qo[this.$L];
  }, n.locale = function(t, r) {
    if (!t) return this.$L;
    var a = this.clone(), i = oa(t, r, !0);
    return i && (a.$L = i), a;
  }, n.clone = function() {
    return Ze.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), zm = ai.prototype;
se.prototype = zm;
[["$ms", Pu], ["$s", tt], ["$m", rt], ["$H", at], ["$W", Co], ["$M", Qn], ["$y", So], ["$D", it]].forEach(function(e) {
  zm[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
se.extend = function(e, n) {
  return e.$i || (e(n, ai, se), e.$i = !0), se;
};
se.locale = oa;
se.isDayjs = Ou;
se.unix = function(e) {
  return se(e * 1e3);
};
se.en = qo[It];
se.Ls = qo;
se.p = {};
const Ar = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"], Tt = ["0", "1", "2", "3", "4", "5", "6"], Em = {
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
  onPreview: F(),
  onChange: F(),
  "onUpdate:modelValue": F()
}, Tm = function(e, n) {
  n.prototype.isSameOrAfter = function(o, t) {
    return this.isSame(o, t) || this.isAfter(o, t);
  };
}, Bm = function(e, n) {
  n.prototype.isSameOrBefore = function(o, t) {
    return this.isSame(o, t) || this.isBefore(o, t);
  };
}, { n: C6 } = ne("date-picker-header");
function S6(e, n) {
  const o = _("var-icon"), t = _("var-button");
  return g(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      X(t, {
        class: p(e.n("arrow")),
        "var-date-picker-header-cover": "",
        round: "",
        text: "",
        disabled: e.disabled.left,
        onClick: n[0] || (n[0] = (r) => e.checkDate("prev"))
      }, {
        default: ue(() => [
          X(o, { name: "chevron-left" })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["class", "disabled"]),
      R(
        "div",
        {
          class: p(e.n("value")),
          onClick: n[1] || (n[1] = (r) => e.$emit("check-panel"))
        },
        [
          X(xe, {
            name: `var-date-picker${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: ue(() => [
              (g(), P(
                "div",
                { key: e.showDate },
                le(e.showDate),
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
      X(t, {
        class: p(e.n("arrow")),
        "var-date-picker-header-cover": "",
        round: "",
        text: "",
        disabled: e.disabled.right,
        onClick: n[2] || (n[2] = (r) => e.checkDate("next"))
      }, {
        default: ue(() => [
          X(o, { name: "chevron-right" })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["class", "disabled"])
    ],
    2
    /* CLASS */
  );
}
const Dm = ee({
  name: "PanelHeader",
  components: {
    VarButton: Bn,
    VarIcon: Ge
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
    const o = w(!1), t = w(0), { t: r } = so(), a = B(() => {
      var l;
      const { date: s, type: u } = e, { previewMonth: c, previewYear: d } = s;
      if (u === "year")
        return d;
      if (u === "month")
        return W(d) + t.value;
      const f = (l = (r || an)("datePickerMonthDict")) == null ? void 0 : l[c].name;
      return (r || an)("lang") === "zh-CN" ? `${d} ${f}` : `${f} ${d}`;
    }), i = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (n("check-date", l), o.value = l === "prev", t.value += l === "prev" ? -1 : 1);
    };
    return fe(
      () => e.date,
      () => {
        t.value = 0;
      }
    ), {
      n: C6,
      reverse: o,
      showDate: a,
      checkDate: i
    };
  }
});
Dm.render = S6;
var zu = Dm, P6 = Object.defineProperty, id = Object.getOwnPropertySymbols, O6 = Object.prototype.hasOwnProperty, z6 = Object.prototype.propertyIsEnumerable, ld = (e, n, o) => n in e ? P6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, E6 = (e, n) => {
  for (var o in n || (n = {}))
    O6.call(n, o) && ld(e, o, n[o]);
  if (id)
    for (var o of id(n))
      z6.call(n, o) && ld(e, o, n[o]);
  return e;
};
se.extend(Bm);
se.extend(Tm);
const { n: et, classes: T6 } = ne("day-picker"), { n: br } = ne("date-picker");
function B6(e, n) {
  const o = _("panel-header"), t = _("var-button");
  return g(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      R(
        "div",
        {
          class: p(e.n("content"))
        },
        [
          X(o, {
            ref: "headerEl",
            type: "day",
            date: e.preview,
            disabled: e.panelBtnDisabled,
            onCheckPanel: e.clickMonth,
            onCheckDate: e.checkDate
          }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]),
          X(xe, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: ue(() => [
              (g(), P("div", { key: e.panelKey }, [
                R(
                  "ul",
                  {
                    class: p(e.n("head"))
                  },
                  [
                    (g(!0), P(
                      Ae,
                      null,
                      qe(e.sortWeekList, (r) => (g(), P(
                        "li",
                        { key: r },
                        le(e.getDayAbbr(r)),
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
                R(
                  "ul",
                  {
                    class: p(e.n("body"))
                  },
                  [
                    (g(!0), P(
                      Ae,
                      null,
                      qe(e.days, (r, a) => (g(), P("li", { key: a }, [
                        X(t, je({
                          type: "primary",
                          "var-day-picker-cover": "",
                          round: "",
                          ripple: !1,
                          elevation: e.componentProps.buttonElevation,
                          ref_for: !0
                        }, E6({}, e.buttonProps(r)), {
                          onClick: (i) => e.chooseDay(r, i)
                        }), {
                          default: ue(() => [
                            De(
                              le(e.filterDay(r)),
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
const Im = ee({
  name: "DayPickerPanel",
  components: {
    VarButton: Bn,
    PanelHeader: zu
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
    const [o, t, r] = e.current.split("-"), a = w([]), i = w(!1), l = w(0), s = w(null), u = en({
      left: !1,
      right: !1
    }), { t: c } = so(), d = B(
      () => e.preview.previewYear === o && e.preview.previewMonth === t
    ), f = B(
      () => e.choose.chooseYear === e.preview.previewYear && e.choose.chooseMonth === e.preview.previewMonth
    ), v = B(() => {
      const M = Tt.findIndex((V) => V === e.componentProps.firstDayOfWeek);
      return M === -1 || M === 0 ? Tt : [...Tt.slice(M), ...Tt.slice(0, M)];
    }), h = (M) => {
      var V, L;
      return (L = (V = (c || an)("datePickerWeekDict")) == null ? void 0 : V[M].abbr) != null ? L : "";
    }, m = (M) => M > 0 ? M : "", y = () => {
      const {
        preview: { previewMonth: M, previewYear: V }
      } = e, L = se(`${V}-${M}`).daysInMonth(), Y = se(`${V}-${M}-01`).day(), z = v.value.findIndex((I) => I === `${Y}`);
      a.value = [...Array(z).fill(-1), ...Array.from(Array(L + 1).keys())].filter((I) => I);
    }, C = () => {
      const {
        preview: { previewYear: M, previewMonth: V },
        componentProps: { max: L, min: Y }
      } = e;
      if (L) {
        const z = `${M}-${W(V) + 1}`;
        u.right = !se(z).isSameOrBefore(se(L), "month");
      }
      if (Y) {
        const z = `${M}-${W(V) - 1}`;
        u.left = !se(z).isSameOrAfter(se(Y), "month");
      }
    }, k = (M) => {
      const {
        preview: { previewYear: V, previewMonth: L },
        componentProps: { min: Y, max: z }
      } = e;
      let I = !0, N = !0;
      const j = `${V}-${L}-${M}`;
      return z && (I = se(j).isSameOrBefore(se(z), "day")), Y && (N = se(j).isSameOrAfter(se(Y), "day")), I && N;
    }, b = (M) => {
      const {
        choose: { chooseDays: V, chooseRangeDay: L },
        componentProps: { range: Y }
      } = e;
      if (Y) {
        if (!L.length)
          return !1;
        const z = se(M).isSameOrBefore(se(L[1]), "day"), I = se(M).isSameOrAfter(se(L[0]), "day");
        return z && I;
      }
      return V.includes(M);
    }, S = (M) => {
      if (M < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: et("button"),
          disabled: !0
        };
      const {
        choose: { chooseDay: V },
        preview: { previewYear: L, previewMonth: Y },
        componentProps: { allowedDates: z, color: I, multiple: N, range: j }
      } = e, E = `${L}-${Y}-${M}`, J = () => j || N ? b(E) : W(V) === M && f.value, q = k(M) ? z ? !z(E) : !1 : !0, me = () => q ? !0 : j || N ? !b(E) : !f.value || W(V) !== M, Pe = () => d.value && W(r) === M && e.componentProps.showCurrent ? (j || N || f.value) && q ? !0 : j || N ? !b(E) : f.value ? V !== r : !0 : !1, U = () => q ? "" : Pe() ? I ?? "" : J() ? "" : `${br()}-color-cover`, Q = U().startsWith(br());
      return {
        text: me(),
        outline: Pe(),
        textColor: Q ? "" : U(),
        [`${br()}-color-cover`]: Q,
        class: T6(et("button"), et("button--usable"), [q, et("button--disabled")]),
        disabled: q
      };
    }, T = (M) => {
      i.value = M === "prev", l.value += M === "prev" ? -1 : 1, n("check-preview", "month", M);
    }, O = (M, V) => {
      V.currentTarget.classList.contains(et("button--disabled")) || n("choose-day", M);
    }, D = (M) => {
      s.value.checkDate(M);
    };
    return yn(() => {
      y(), C();
    }), fe(
      () => e.preview,
      () => {
        y(), C();
      }
    ), fe(() => [e.componentProps.max, e.componentProps.min], C), {
      n: et,
      nDate: br,
      days: a,
      reverse: i,
      headerEl: s,
      panelKey: l,
      sortWeekList: v,
      panelBtnDisabled: u,
      forwardRef: D,
      filterDay: m,
      getDayAbbr: h,
      checkDate: T,
      chooseDay: O,
      buttonProps: S
    };
  }
});
Im.render = B6;
var D6 = Im, I6 = Object.defineProperty, sd = Object.getOwnPropertySymbols, A6 = Object.prototype.hasOwnProperty, M6 = Object.prototype.propertyIsEnumerable, ud = (e, n, o) => n in e ? I6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, N6 = (e, n) => {
  for (var o in n || (n = {}))
    A6.call(n, o) && ud(e, o, n[o]);
  if (sd)
    for (var o of sd(n))
      M6.call(n, o) && ud(e, o, n[o]);
  return e;
};
se.extend(Bm);
se.extend(Tm);
const { n: yr, classes: V6 } = ne("month-picker"), { n: wr } = ne("date-picker");
function R6(e, n) {
  const o = _("panel-header"), t = _("var-button");
  return g(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      R(
        "div",
        {
          class: p(e.n("content"))
        },
        [
          X(o, {
            ref: "headerEl",
            type: "month",
            date: e.preview,
            disabled: e.panelBtnDisabled,
            onCheckPanel: e.clickYear,
            onCheckDate: e.checkDate
          }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]),
          X(xe, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: ue(() => [
              (g(), P("ul", { key: e.panelKey }, [
                (g(!0), P(
                  Ae,
                  null,
                  qe(e.MONTH_LIST, (r) => (g(), P("li", { key: r }, [
                    X(t, je({
                      type: "primary",
                      "var-month-picker-cover": "",
                      ripple: !1,
                      elevation: e.componentProps.buttonElevation,
                      ref_for: !0
                    }, N6({}, e.buttonProps(r)), {
                      onClick: (a) => e.chooseMonth(r, a)
                    }), {
                      default: ue(() => [
                        De(
                          le(e.getMonthAbbr(r)),
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
const Am = ee({
  name: "MonthPickerPanel",
  components: {
    VarButton: Bn,
    PanelHeader: zu
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
    const [o, t] = e.current.split("-"), r = w(!1), a = w(0), i = w(null), l = en({
      left: !1,
      right: !1
    }), { t: s } = so(), u = B(() => e.choose.chooseYear === e.preview.previewYear), c = B(() => e.preview.previewYear === o), d = (k) => {
      var b, S;
      return (S = (b = (s || an)("datePickerMonthDict")) == null ? void 0 : b[k].abbr) != null ? S : "";
    }, f = (k) => {
      const {
        preview: { previewYear: b },
        componentProps: { min: S, max: T }
      } = e;
      let O = !0, D = !0;
      const M = `${b}-${k}`;
      return T && (O = se(M).isSameOrBefore(se(T), "month")), S && (D = se(M).isSameOrAfter(se(S), "month")), O && D;
    }, v = (k) => {
      const {
        choose: { chooseMonths: b, chooseDays: S, chooseRangeMonth: T },
        componentProps: { type: O, range: D }
      } = e;
      if (D) {
        if (!T.length)
          return !1;
        const M = se(k).isSameOrBefore(se(T[1]), "month"), V = se(k).isSameOrAfter(se(T[0]), "month");
        return M && V;
      }
      return O === "month" ? b.includes(k) : S.some((M) => M.includes(k));
    }, h = (k) => {
      const {
        choose: { chooseMonth: b },
        preview: { previewYear: S },
        componentProps: { allowedDates: T, color: O, multiple: D, range: M }
      } = e, V = `${S}-${k}`, L = () => M || D ? v(V) : b === k && u.value, z = f(k) ? T ? !T(V) : !1 : !0, I = () => z ? !0 : M || D ? !v(V) : !u.value || b !== k, N = () => c.value && t === k && e.componentProps.showCurrent ? (M || D || u.value) && z ? !0 : M || D ? !v(V) : u.value ? b !== t : !0 : !1, j = () => z ? "" : N() ? O ?? "" : L() ? "" : `${wr()}-color-cover`, E = j().startsWith(wr());
      return {
        outline: N(),
        text: I(),
        color: I() ? "" : O,
        textColor: E ? "" : j(),
        [`${wr()}-color-cover`]: E,
        class: V6(yr("button"), [z, yr("button--disabled")]),
        disabled: z
      };
    }, m = (k, b) => {
      b.currentTarget.classList.contains(yr("button--disabled")) || n("choose-month", k);
    }, y = (k) => {
      r.value = k === "prev", a.value += k === "prev" ? -1 : 1, n("check-preview", "year", k);
    }, C = (k) => {
      i.value.checkDate(k);
    };
    return fe(
      () => [e.preview.previewYear, e.componentProps.max, e.componentProps.min],
      ([k, b, S]) => {
        b && (l.right = !se(`${W(k) + 1}`).isSameOrBefore(se(b), "year")), S && (l.left = !se(`${W(k) - 1}`).isSameOrAfter(se(S), "year"));
      },
      { immediate: !0 }
    ), {
      n: yr,
      nDate: wr,
      t: an,
      MONTH_LIST: Ar,
      headerEl: i,
      reverse: r,
      panelKey: a,
      panelBtnDisabled: l,
      forwardRef: C,
      buttonProps: h,
      getMonthAbbr: d,
      chooseMonth: m,
      checkDate: y
    };
  }
});
Am.render = R6;
var L6 = Am;
const At = {
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
  onScroll: F()
};
var cd = (e, n, o) => new Promise((t, r) => {
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
const { name: F6, n: U6, classes: H6 } = ne("sticky");
function j6(e, n) {
  return g(), P(
    "div",
    {
      ref: "stickyEl",
      class: p(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      style: Z({
        zIndex: e.toNumber(e.zIndex),
        top: e.enableCSSMode ? `${e.offsetTop}px` : void 0,
        width: e.enableFixedMode ? e.fixedWidth : void 0,
        height: e.enableFixedMode ? e.fixedHeight : void 0
      })
    },
    [
      R(
        "div",
        {
          ref: "wrapperEl",
          class: p(e.n("wrapper")),
          style: Z({
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
const Mm = ee({
  name: F6,
  props: At,
  setup(e) {
    const n = w(null), o = w(null), t = w(!1), r = w("0px"), a = w("0px"), i = w("auto"), l = w("auto"), s = w("auto"), u = w("auto"), c = B(() => !e.disabled && e.cssMode), d = B(() => !e.disabled && !e.cssMode && t.value), f = B(() => on(e.offsetTop));
    let v;
    fe(() => e.disabled, k), yn(() => cd(this, null, function* () {
      yield bn(), m(), y();
    })), tr(C), to(k), He(() => window, "scroll", y);
    function h() {
      const { cssMode: b, disabled: S } = e;
      if (S)
        return;
      let T = 0;
      if (v && v !== window) {
        const { top: Y } = nn(v);
        T = Y;
      }
      const O = o.value, D = n.value, { top: M, left: V } = nn(D), L = M - T;
      return L <= f.value ? (b || (i.value = `${D.offsetWidth}px`, l.value = `${D.offsetHeight}px`, r.value = `${T + f.value}px`, a.value = `${V}px`, s.value = `${O.offsetWidth}px`, u.value = `${O.offsetHeight}px`, t.value = !0), {
        offsetTop: f.value,
        isFixed: !0
      }) : (t.value = !1, {
        offsetTop: L,
        isFixed: !1
      });
    }
    function m() {
      v = No(n.value), v !== window && v.addEventListener("scroll", y);
    }
    function y() {
      const b = h();
      b && $(e.onScroll, b.offsetTop, b.isFixed);
    }
    function C() {
      !v || v === window || v.removeEventListener("scroll", y);
    }
    function k() {
      return cd(this, null, function* () {
        t.value = !1, yield po(), h();
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
      n: U6,
      classes: H6,
      resize: k,
      toNumber: W
    };
  }
});
Mm.render = j6;
var ii = Mm;
re(ii);
ie(ii, At);
const cD = ii;
var bt = ii, Y6 = Object.defineProperty, dd = Object.getOwnPropertySymbols, W6 = Object.prototype.hasOwnProperty, K6 = Object.prototype.propertyIsEnumerable, fd = (e, n, o) => n in e ? Y6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, q6 = (e, n) => {
  for (var o in n || (n = {}))
    W6.call(n, o) && fd(e, o, n[o]);
  if (dd)
    for (var o of dd(n))
      K6.call(n, o) && fd(e, o, n[o]);
  return e;
};
const { n: kr, classes: pd } = ne("year-picker"), { n: $r } = ne("date-picker");
function X6(e, n) {
  const o = _("panel-header"), t = _("var-sticky"), r = _("var-button");
  return g(), P("div", null, [
    X(t, { "css-mode": "" }, {
      default: ue(() => [
        X(o, {
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
    X(xe, {
      name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
    }, {
      default: ue(() => [
        (g(), P(
          "ul",
          {
            ref: "panel",
            key: e.panelKey,
            class: p(e.n())
          },
          [
            (g(!0), P(
              Ae,
              null,
              qe(e.yearList, (a) => (g(), P("li", { key: a }, [
                X(r, je({
                  type: "primary",
                  "var-year-picker-cover": "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation,
                  ref_for: !0
                }, q6({}, e.buttonProps(`${a}`)), {
                  onClick: (i) => e.chooseYear(a, i)
                }), {
                  default: ue(() => [
                    De(
                      le(a),
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
const Nm = ee({
  name: "YearPickerPanel",
  components: {
    VarButton: Bn,
    VarSticky: bt,
    PanelHeader: zu
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
    const [o] = e.current.split("-"), t = w(), r = w(null), a = w(!1), i = w(0), l = w(0), s = en({
      left: !1,
      right: !1
    }), u = B(() => {
      if (!e.preview)
        return [];
      const C = Math.floor(W(e.preview) / 100 + l.value) * 100;
      return Array.from(Array(100), (k, b) => Math.max(0, C) + b);
    }), c = (C) => {
      const {
        choose: { chooseMonths: k, chooseDays: b, chooseYears: S, chooseRangeYear: T },
        componentProps: { type: O, range: D }
      } = e;
      if (D) {
        if (!T.length)
          return !1;
        const M = se(C).isSameOrBefore(se(T[1]), "year"), V = se(C).isSameOrAfter(se(T[0]), "year");
        return M && V;
      }
      return O === "year" ? S.includes(C) : O === "month" ? k.some((M) => M.includes(C)) : b.some((M) => M.includes(C));
    }, d = (C) => {
      const {
        componentProps: { min: k, max: b }
      } = e, S = b ? se(C).isSameOrBefore(se(b), "year") : !0, T = k ? se(C).isSameOrAfter(se(k), "year") : !0;
      return S && T;
    }, f = (C) => {
      const {
        choose: { chooseYear: k },
        componentProps: { allowedDates: b, color: S, multiple: T, range: O }
      } = e, D = () => O || T ? c(C) : k === C, V = d(C) ? b ? !b(C) : !1 : !0, L = () => V ? !0 : O || T ? !c(C) : k !== C, Y = () => o === C && e.componentProps.showCurrent ? (O || T) && V ? !0 : O || T ? !c(C) : k !== o : !1, z = () => V ? "" : Y() ? S ?? "" : D() ? "" : `${$r()}-color-cover`, I = z().startsWith($r());
      return {
        outline: Y(),
        text: L(),
        color: L() ? "" : S,
        textColor: I ? "" : z(),
        [`${$r()}-color-cover`]: I,
        class: pd(kr("button"), [V, kr("button--disabled")]),
        disabled: V
      };
    }, v = (C, k) => {
      k.currentTarget.classList.contains(kr("button--disabled")) || n("choose-year", C);
    }, h = () => {
      var C;
      const k = (C = t.value.querySelector(".var-button--primary")) != null ? C : t.value.querySelector(".var-button--outline");
      k == null || k.scrollIntoView({
        block: "center"
      });
    }, m = (C) => {
      const k = C === "prev";
      a.value = k, i.value += k ? -1 : 1, l.value += k ? -1 : 1;
    }, y = (C) => {
      r.value.checkDate(C);
    };
    return yn(h), fe(
      () => e.preview,
      () => {
        l.value = 0;
      }
    ), fe(
      () => [u.value, e.componentProps.max, e.componentProps.min],
      (C) => {
        const [k, b, S] = C;
        b && (s.right = !se(`${W(k[k.length - 1])}`).isSameOrBefore(se(b), "year")), S && (s.left = !se(`${W(k[0])}`).isSameOrAfter(se(S), "year")), W(k[0] <= 0) && (s.left = !1);
      },
      {
        immediate: !0
      }
    ), {
      n: kr,
      classes: pd,
      buttonProps: f,
      panel: t,
      headerEl: r,
      yearList: u,
      reverse: a,
      panelKey: i,
      panelBtnDisabled: s,
      nDate: $r,
      checkDate: m,
      chooseYear: v,
      forwardRef: y,
      toNumber: W
    };
  }
});
Nm.render = X6;
var G6 = Nm, Z6 = (e, n, o) => new Promise((t, r) => {
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
const { name: J6, n: Q6, classes: _6 } = ne("date-picker");
function x6(e, n) {
  var o;
  const t = _("year-picker-panel"), r = _("month-picker-panel"), a = _("day-picker-panel");
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [
      R(
        "div",
        {
          class: p(e.n("title")),
          style: Z({ background: e.titleColor || e.color })
        },
        [
          R(
            "div",
            {
              class: p(e.n("title-select"))
            },
            [
              R(
                "div",
                {
                  class: p(e.n("title-hint"))
                },
                le((o = e.hint) != null ? o : (e.pt ? e.pt : e.t)("datePickerHint")),
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
                    De(
                      le(e.chooseYear),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                2
                /* CLASS */
              )) : G("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          R(
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
              X(xe, {
                name: e.multiple ? "" : `${e.n()}${e.reverse ? "-reverse" : ""}-translatey`
              }, {
                default: ue(() => [
                  e.type === "year" ? (g(), P("div", {
                    key: `${e.chooseYear}`
                  }, [
                    e.range ? H(e.$slots, "range", {
                      key: 0,
                      choose: e.getChoose.chooseRangeYear
                    }, () => [
                      De(
                        le(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? H(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseYears
                    }, () => [
                      De(
                        le(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ]) : H(e.$slots, "year", {
                      key: 2,
                      year: e.chooseYear
                    }, () => [
                      De(
                        le(e.getYearTitle),
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
                      De(
                        le(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? H(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseMonths
                    }, () => [
                      De(
                        le(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ]) : H(e.$slots, "month", {
                      key: 2,
                      month: e.chooseMonth,
                      year: e.chooseYear
                    }, () => [
                      De(
                        le(e.getMonthTitle),
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
                      De(
                        le(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? H(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseDays
                    }, () => [
                      De(
                        le(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ]) : H(e.$slots, "date", Ko(je({ key: 2 }, e.slotProps)), () => [
                      De(
                        le(e.getDateTitle),
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
      R(
        "div",
        {
          class: p(e.n("body")),
          onTouchstart: n[2] || (n[2] = (...i) => e.handleTouchstart && e.handleTouchstart(...i)),
          onTouchmove: n[3] || (n[3] = (...i) => e.handleTouchmove && e.handleTouchmove(...i)),
          onTouchend: n[4] || (n[4] = (...i) => e.handleTouchend && e.handleTouchend(...i))
        },
        [
          X(xe, {
            name: `${e.n()}-panel-fade`
          }, {
            default: ue(() => [
              e.getPanelType === "year" ? (g(), we(t, {
                key: 0,
                ref: "yearPanelEl",
                choose: e.getChoose,
                current: e.currentDate,
                "component-props": e.componentProps,
                preview: e.previewYear,
                onChooseYear: e.getChooseYear
              }, null, 8, ["choose", "current", "component-props", "preview", "onChooseYear"])) : e.getPanelType === "month" ? (g(), we(r, {
                key: 1,
                ref: "monthPanelEl",
                current: e.currentDate,
                choose: e.getChoose,
                preview: e.getPreview,
                "click-year": () => e.clickEl("year"),
                "component-props": e.componentProps,
                onChooseMonth: e.getChooseMonth,
                onCheckPreview: e.checkPreview
              }, null, 8, ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"])) : e.getPanelType === "date" ? (g(), we(a, {
                key: 2,
                ref: "dayPanelEl",
                current: e.currentDate,
                choose: e.getChoose,
                preview: e.getPreview,
                "component-props": e.componentProps,
                "click-month": () => e.clickEl("month"),
                onChooseDay: e.getChooseDay,
                onCheckPreview: e.checkPreview
              }, null, 8, ["current", "choose", "preview", "component-props", "click-month", "onChooseDay", "onCheckPreview"])) : G("v-if", !0)
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
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Vm = ee({
  name: J6,
  components: {
    MonthPickerPanel: L6,
    YearPickerPanel: G6,
    DayPickerPanel: D6
  },
  props: Em,
  setup(e) {
    const { t: n } = so(), o = se().format("YYYY-MM-D"), [t, r] = o.split("-"), a = Ar.find((ae) => ae === r), i = w(!1), l = w(!1), s = w(!0), u = w(), c = w(), d = w(), f = w(a), v = w(t), h = w(!1), m = w([]), y = w([]), C = w([]), k = w([]), b = w([]), S = w([]), T = w(null), O = w(null), D = w(null), M = B(() => ({
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
    })), V = B(() => ({
      chooseMonth: u.value,
      chooseYear: c.value,
      chooseDay: d.value,
      chooseYears: m.value,
      chooseMonths: y.value,
      chooseDays: C.value,
      chooseRangeYear: k.value,
      chooseRangeMonth: b.value,
      chooseRangeDay: S.value
    })), L = B(() => ({
      previewMonth: f.value,
      previewYear: v.value
    })), Y = B(() => {
      var ae;
      const { multiple: $e, range: Ee } = e;
      return Ee ? k.value.length ? `${k.value[0]} ~ ${k.value[1]}` : "" : $e ? `${m.value.length}${(n || an)("datePickerSelected")}` : (ae = c.value) != null ? ae : "";
    }), z = B(() => {
      var ae, $e;
      const { multiple: Ee, range: Re } = e;
      if (Re)
        return b.value.length ? `${b.value[0]} ~ ${b.value[1]}` : "";
      let Le = "";
      return u.value && (Le = ($e = (ae = (n || an)("datePickerMonthDict")) == null ? void 0 : ae[u.value].name) != null ? $e : ""), Ee ? `${y.value.length}${(n || an)("datePickerSelected")}` : Le;
    }), I = B(() => {
      var ae, $e, Ee, Re;
      const { multiple: Le, range: fn } = e;
      if (fn) {
        const Ot = S.value.map((Zg) => se(Zg).format("YYYY-MM-DD"));
        return Ot.length ? `${Ot[0]} ~ ${Ot[1]}` : "";
      }
      if (Le)
        return `${C.value.length}${(n || an)("datePickerSelected")}`;
      if (!c.value || !u.value || !d.value)
        return "";
      const hn = se(`${c.value}-${u.value}-${d.value}`).day(), gn = Tt.find((Ot) => Ot === `${hn}`), Wo = ($e = (ae = (n || an)("datePickerWeekDict")) == null ? void 0 : ae[gn].name) != null ? $e : "", Xg = (Re = (Ee = (n || an)("datePickerMonthDict")) == null ? void 0 : Ee[u.value].name) != null ? Re : "", Gg = Qo(d.value, 2, "0");
      return (n || an)("lang") === "zh-CN" ? `${u.value}-${Gg} ${Wo.slice(0, 3)}` : `${Wo.slice(0, 3)}, ${Xg.slice(0, 3)} ${d.value}`;
    }), N = B(() => e.type === "year" || i.value ? "year" : e.type === "month" || l.value ? "month" : e.type === "date" ? "date" : ""), j = B(() => !e.touchable || !N.value), E = B(() => {
      var ae, $e;
      const Ee = se(`${c.value}-${u.value}-${d.value}`).day(), Re = d.value ? Qo(d.value, 2, "0") : "";
      return {
        week: `${Ee}`,
        year: (ae = c.value) != null ? ae : "",
        month: ($e = u.value) != null ? $e : "",
        date: Re
      };
    }), J = B(
      () => V.value.chooseRangeDay.map((ae) => se(ae).format("YYYY-MM-DD"))
    ), de = B(() => c.value === v.value), q = B(() => u.value === f.value);
    let me = 0, Pe = 0, U = "", Q;
    fe(
      () => e.modelValue,
      (ae) => {
        if (!(!Ke() || oe(ae)))
          if (e.range) {
            if (!Fe(ae))
              return;
            s.value = ae.length !== 1, ce(ae, e.type);
          } else if (e.multiple) {
            if (!Fe(ae))
              return;
            ke(ae, e.type);
          } else
            Be(ae);
      },
      { immediate: !0 }
    ), fe(N, _e);
    function te(ae) {
      ae === "year" ? i.value = !0 : ae === "month" ? l.value = !0 : (i.value = !1, l.value = !1);
    }
    function he(ae) {
      if (j.value)
        return;
      const { clientX: $e, clientY: Ee } = ae.touches[0];
      me = $e, Pe = Ee;
    }
    function A(ae, $e) {
      return ae >= $e && ae > 20 ? "x" : "y";
    }
    function K(ae) {
      if (j.value)
        return;
      const { clientX: $e, clientY: Ee } = ae.touches[0], Re = $e - me, Le = Ee - Pe;
      Q = A(Math.abs(Re), Math.abs(Le)), U = Re > 0 ? "prev" : "next";
    }
    function pe() {
      return Z6(this, null, function* () {
        if (j.value || Q !== "x")
          return;
        const ae = N.value === "year" ? T : N.value === "month" ? O : D;
        yield bn(), ae.value.forwardRef(U), _e();
      });
    }
    function Se(ae, $e) {
      const Ee = $e === "year" ? k : $e === "month" ? b : S;
      if (Ee.value = s.value ? [ae, ae] : [Ee.value[0], ae], s.value = !s.value, s.value) {
        const Le = se(Ee.value[0]).isAfter(Ee.value[1]) ? [Ee.value[1], Ee.value[0]] : [...Ee.value];
        $(e["onUpdate:modelValue"], Le), $(e.onChange, Le);
      }
    }
    function Ue(ae, $e) {
      const Ee = $e === "year" ? m : $e === "month" ? y : C, Re = $e === "year" ? "YYYY" : $e === "month" ? "YYYY-MM" : "YYYY-MM-DD", Le = Ee.value.map((hn) => se(hn).format(Re)), fn = Le.findIndex((hn) => hn === ae);
      fn === -1 ? Le.push(ae) : Le.splice(fn, 1), $(e["onUpdate:modelValue"], Le), $(e.onChange, Le);
    }
    function Ve(ae, $e) {
      return !c.value || !u.value ? !1 : de.value ? ae === "year" ? $e < W(c.value) : ae === "month" ? $e < u.value : q.value ? $e < W(d.value) : u.value > f.value : c.value > v.value;
    }
    function Qe(ae) {
      const { readonly: $e, range: Ee, multiple: Re, onChange: Le, "onUpdate:modelValue": fn } = e;
      if (ae < 0 || $e)
        return;
      h.value = Ve("day", ae);
      const hn = `${v.value}-${f.value}-${ae}`, gn = se(hn).format("YYYY-MM-DD");
      Ee ? Se(gn, "day") : Re ? Ue(gn, "day") : ($(fn, gn), $(Le, gn));
    }
    function un(ae) {
      const { type: $e, readonly: Ee, range: Re, multiple: Le, onChange: fn, onPreview: hn, "onUpdate:modelValue": gn } = e;
      if (h.value = Ve("month", ae), $e === "month" && !Ee) {
        const Wo = `${v.value}-${ae}`;
        Re ? Se(Wo, "month") : Le ? Ue(Wo, "month") : ($(gn, Wo), $(fn, Wo));
      } else
        f.value = ae, $(
          hn,
          W(v.value),
          W(f.value),
          $e === "date" ? W(d.value) : void 0
        );
      l.value = !1;
    }
    function Sn(ae) {
      const { type: $e, readonly: Ee, range: Re, multiple: Le, onChange: fn, onPreview: hn, "onUpdate:modelValue": gn } = e;
      h.value = Ve("year", ae), $e === "year" && !Ee ? Re ? Se(`${ae}`, "year") : Le ? Ue(`${ae}`, "year") : ($(gn, `${ae}`), $(fn, `${ae}`)) : (v.value = `${ae}`, $(
        hn,
        W(v.value),
        W(f.value),
        $e === "date" ? W(d.value) : void 0
      )), i.value = !1;
    }
    function ve(ae, $e) {
      const Ee = $e === "prev" ? -1 : 1;
      if (ae === "year")
        v.value = `${W(v.value) + Ee}`;
      else {
        let Re = W(f.value) + Ee;
        Re < 1 && (v.value = `${W(v.value) - 1}`, Re = 12), Re > 12 && (v.value = `${W(v.value) + 1}`, Re = 1), f.value = Ar.find((Le) => W(Le) === Re);
      }
      $(
        e.onPreview,
        W(v.value),
        W(f.value),
        e.type === "date" ? W(d.value) : void 0
      );
    }
    function Ke() {
      return (e.multiple || e.range) && !Fe(e.modelValue) ? (lt("DatePicker", 'type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Fe(e.modelValue) ? (lt("DatePicker", 'type of prop "modelValue" should be a String'), !1) : !0;
    }
    function oe(ae) {
      return Fe(ae) ? !1 : ae === "Invalid Date" ? (lt("DatePicker", '"modelValue" is an Invalid Date'), !0) : !1;
    }
    function ce(ae, $e) {
      const Ee = $e === "year" ? k : $e === "month" ? b : S, Re = $e === "year" ? "YYYY" : $e === "month" ? "YYYY-MM" : "YYYY-MM-D", Le = ae.map((gn) => se(gn).format(Re)).slice(0, 2);
      if (Ee.value.some((gn) => oe(gn)))
        return;
      Ee.value = Le;
      const hn = se(Ee.value[0]).isAfter(Ee.value[1]);
      Ee.value.length === 2 && hn && (Ee.value = [Ee.value[1], Ee.value[0]]);
    }
    function ke(ae, $e) {
      const Ee = $e === "year" ? m : $e === "month" ? y : C, Re = $e === "year" ? "YYYY" : $e === "month" ? "YYYY-MM" : "YYYY-MM-D", Le = Array.from(new Set(ae.map((fn) => se(fn).format(Re))));
      Ee.value = Le.filter((fn) => fn !== "Invalid Date");
    }
    function Be(ae) {
      const Ee = (ae ? se(ae) : se()).format("YYYY-MM-D");
      if (oe(Ee))
        return;
      const [Re, Le, fn] = Ee.split("-"), hn = Ar.find((gn) => gn === Le);
      u.value = hn, c.value = Re, d.value = fn, f.value = hn, v.value = Re;
    }
    function _e() {
      Pe = 0, me = 0, U = "", Q = void 0;
    }
    return {
      yearPanelEl: T,
      monthPanelEl: O,
      dayPanelEl: D,
      reverse: h,
      currentDate: o,
      chooseMonth: u,
      chooseYear: c,
      chooseDay: d,
      previewYear: v,
      isYearPanel: i,
      isMonthPanel: l,
      getMonthTitle: z,
      getDateTitle: I,
      getYearTitle: Y,
      getPanelType: N,
      getChoose: V,
      getPreview: L,
      componentProps: M,
      slotProps: E,
      formatRange: J,
      pt: n,
      t: an,
      n: Q6,
      classes: _6,
      clickEl: te,
      handleTouchstart: he,
      handleTouchmove: K,
      handleTouchend: pe,
      getChooseDay: Qe,
      getChooseMonth: un,
      getChooseYear: Sn,
      checkPreview: ve,
      formatElevation: dn
    };
  }
});
Vm.render = x6;
var li = Vm;
re(li);
ie(li, Em);
const dD = li;
var _l = li, eP = Object.defineProperty, vd = Object.getOwnPropertySymbols, nP = Object.prototype.hasOwnProperty, oP = Object.prototype.propertyIsEnumerable, md = (e, n, o) => n in e ? eP(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, tP = (e, n) => {
  for (var o in n || (n = {}))
    nP.call(n, o) && md(e, o, n[o]);
  if (vd)
    for (var o of vd(n))
      oP.call(n, o) && md(e, o, n[o]);
  return e;
};
const Rm = tP({
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
  onBeforeClose: F(),
  onConfirm: F(),
  onCancel: F(),
  "onUpdate:show": F()
}, Ie(Ct, [
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
var rP = Object.defineProperty, hd = Object.getOwnPropertySymbols, aP = Object.prototype.hasOwnProperty, iP = Object.prototype.propertyIsEnumerable, gd = (e, n, o) => n in e ? rP(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, lP = (e, n) => {
  for (var o in n || (n = {}))
    aP.call(n, o) && gd(e, o, n[o]);
  if (hd)
    for (var o of hd(n))
      iP.call(n, o) && gd(e, o, n[o]);
  return e;
};
const { name: sP, n: uP, classes: cP } = ne("dialog");
function dP(e, n) {
  const o = _("var-button"), t = _("var-popup");
  return g(), we(t, {
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
    default: ue(() => [
      R(
        "div",
        je({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: lP({ width: e.toSizeUnit(e.width) }, e.dialogStyle)
        }, e.$attrs),
        [
          R(
            "div",
            {
              class: p(e.n("title"))
            },
            [
              H(e.$slots, "title", {}, () => {
                var r;
                return [
                  De(
                    le((r = e.title) != null ? r : (e.pt ? e.pt : e.t)("dialogTitle")),
                    1
                    /* TEXT */
                  )
                ];
              })
            ],
            2
            /* CLASS */
          ),
          R(
            "div",
            {
              class: p(e.n("message")),
              style: Z({ textAlign: e.messageAlign })
            },
            [
              H(e.$slots, "default", {}, () => [
                De(
                  le(e.message),
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
            R(
              "div",
              {
                class: p(e.n("actions"))
              },
              [
                e.cancelButton ? (g(), we(o, {
                  key: 0,
                  class: p(e.classes(e.n("button"), e.n("cancel-button"))),
                  "var-dialog-cover": "",
                  text: "",
                  "text-color": e.cancelButtonTextColor,
                  color: e.cancelButtonColor,
                  onClick: e.cancel
                }, {
                  default: ue(() => {
                    var r;
                    return [
                      De(
                        le((r = e.cancelButtonText) != null ? r : (e.pt ? e.pt : e.t)("dialogCancelButtonText")),
                        1
                        /* TEXT */
                      )
                    ];
                  }),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "text-color", "color", "onClick"])) : G("v-if", !0),
                e.confirmButton ? (g(), we(o, {
                  key: 1,
                  class: p(e.classes(e.n("button"), e.n("confirm-button"))),
                  "var-dialog-cover": "",
                  text: "",
                  "text-color": e.confirmButtonTextColor,
                  color: e.confirmButtonColor,
                  onClick: e.confirm
                }, {
                  default: ue(() => {
                    var r;
                    return [
                      De(
                        le((r = e.confirmButtonText) != null ? r : (e.pt ? e.pt : e.t)("dialogConfirmButtonText")),
                        1
                        /* TEXT */
                      )
                    ];
                  }),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "text-color", "color", "onClick"])) : G("v-if", !0)
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
const Lm = ee({
  name: sP,
  components: {
    VarPopup: Mo,
    VarButton: Bn
  },
  inheritAttrs: !1,
  props: Rm,
  setup(e) {
    const n = w(!1), o = w(!1), { t } = so();
    fe(
      () => e.show,
      (u) => {
        n.value = u;
      },
      { immediate: !0 }
    ), fe(
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
      return $(e["onUpdate:show"], !1);
    }
    function a() {
      const { closeOnClickOverlay: u, onClickOverlay: c, onBeforeClose: d } = e;
      if ($(c), !!u) {
        if (d != null) {
          $(d, "close", r);
          return;
        }
        $(e["onUpdate:show"], !1);
      }
    }
    function i() {
      const { onBeforeClose: u, onConfirm: c } = e;
      if ($(c), u != null) {
        $(u, "confirm", r);
        return;
      }
      $(e["onUpdate:show"], !1);
    }
    function l() {
      const { onBeforeClose: u, onCancel: c } = e;
      if ($(c), u != null) {
        $(u, "cancel", r);
        return;
      }
      $(e["onUpdate:show"], !1);
    }
    function s() {
      $(e.onKeyEscape), e.closeOnKeyEscape && l();
    }
    return {
      popupShow: n,
      popupCloseOnClickOverlay: o,
      pt: t,
      t: an,
      n: uP,
      classes: cP,
      handleClickOverlay: a,
      confirm: i,
      cancel: l,
      toSizeUnit: ze,
      handleKeyEscape: s
    };
  }
});
Lm.render = dP;
var dr = Lm, fP = Object.defineProperty, pP = Object.defineProperties, vP = Object.getOwnPropertyDescriptors, bd = Object.getOwnPropertySymbols, mP = Object.prototype.hasOwnProperty, hP = Object.prototype.propertyIsEnumerable, yd = (e, n, o) => n in e ? fP(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, al = (e, n) => {
  for (var o in n || (n = {}))
    mP.call(n, o) && yd(e, o, n[o]);
  if (bd)
    for (var o of bd(n))
      hP.call(n, o) && yd(e, o, n[o]);
  return e;
}, gP = (e, n) => pP(e, vP(n));
let Oo, ta = {};
function bP(e = {}) {
  return sn(e) ? gP(al({}, ta), { message: e }) : al(al({}, ta), e);
}
function jo(e) {
  return oo() ? new Promise((n) => {
    jo.close();
    const o = bP(e), t = en(o);
    t.teleport = "body", Oo = t;
    const { unmountInstance: r } = $t(dr, t, {
      onConfirm: () => {
        $(t.onConfirm), n("confirm");
      },
      onCancel: () => {
        $(t.onCancel), n("cancel");
      },
      onClose: () => {
        $(t.onClose), n("close");
      },
      onClosed: () => {
        $(t.onClosed), r(), Oo === t && (Oo = null);
      },
      onRouteChange: () => {
        r(), Oo === t && (Oo = null);
      },
      "onUpdate:show": (a) => {
        t.show = a;
      }
    });
    t.show = !0;
  }) : Promise.resolve();
}
jo.setDefaultOptions = function(e) {
  ta = e;
};
jo.resetDefaultOptions = function() {
  ta = {};
};
jo.close = function() {
  if (Oo != null) {
    const e = Oo;
    Oo = null, Ye().then(() => {
      e.show = !1;
    });
  }
};
jo.Component = dr;
re(dr);
re(dr, jo);
ie(jo, Rm);
const fD = dr;
var xl = jo;
const Fm = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: Boolean,
  description: String,
  margin: String,
  dashed: Boolean,
  hairline: Boolean
}, { name: yP, n: wP, classes: kP } = ne("divider");
function $P(e, n) {
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
      style: Z(e.style),
      role: "separator"
    },
    [
      e.vertical ? G("v-if", !0) : H(e.$slots, "default", { key: 0 }, () => [
        e.description ? (g(), P(
          "span",
          {
            key: 0,
            class: p(e.n("text"))
          },
          le(e.description),
          3
          /* TEXT, CLASS */
        )) : G("v-if", !0)
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const Um = ee({
  name: yP,
  props: Fm,
  setup(e, { slots: n }) {
    const o = w(!1), t = B(() => {
      const { vertical: i, inset: l } = e;
      return !i && l === !0;
    }), r = B(() => {
      const { inset: i, vertical: l, margin: s } = e;
      if (nr(i) || l)
        return { margin: s };
      const u = W(i), c = Math.abs(u) + (i + "").replace(u + "", "");
      return {
        margin: s,
        width: `calc(100% - ${ze(c)})`,
        left: u > 0 ? ze(c) : ze(0)
      };
    });
    yn(a), _t(a);
    function a() {
      const { description: i, vertical: l } = e;
      o.value = (n.default || i != null) && !l;
    }
    return {
      n: wP,
      classes: kP,
      withText: o,
      style: r,
      withPresetInset: t
    };
  }
});
Um.render = $P;
var si = Um;
re(si);
ie(si, Fm);
const pD = si;
var es = si;
const Hm = {
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
  onClick: F()
};
var CP = Object.defineProperty, SP = Object.defineProperties, PP = Object.getOwnPropertyDescriptors, wd = Object.getOwnPropertySymbols, OP = Object.prototype.hasOwnProperty, zP = Object.prototype.propertyIsEnumerable, kd = (e, n, o) => n in e ? CP(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, $d = (e, n) => {
  for (var o in n || (n = {}))
    OP.call(n, o) && kd(e, o, n[o]);
  if (wd)
    for (var o of wd(n))
      zP.call(n, o) && kd(e, o, n[o]);
  return e;
}, Cd = (e, n) => SP(e, PP(n));
const { name: EP, n: TP, classes: BP } = ne("drag");
function DP(e, n) {
  return g(), we(lo, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    R(
      "div",
      je({
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
const jm = ee({
  name: EP,
  inheritAttrs: !1,
  props: Hm,
  setup(e, { attrs: n }) {
    const o = w(null), t = w(0), r = w(0), a = w(!1), i = w(!1), { touching: l, dragging: s, moveX: u, moveY: c, startTouch: d, moveTouch: f, endTouch: v, resetTouch: h } = kt(), { disabled: m } = xo(), y = en({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    fe(() => e.boundary, L), to(z), yn(() => {
      L(), z();
    });
    function C(N) {
      e.disabled || (d(N), T());
    }
    function k(N) {
      !l.value || e.disabled || (f(N), Me(N), i.value = !1, a.value = !0, e.direction.includes("x") && (t.value += u.value), e.direction.includes("y") && (r.value += c.value), V());
    }
    function b() {
      e.disabled || (v(), i.value = !0, M());
    }
    function S(N) {
      s.value || $(e.onClick, N);
    }
    function T() {
      const { left: N, top: j } = O();
      t.value = N, r.value = j;
    }
    function O() {
      const N = nn(o.value), j = nn(window), E = N.top - j.top, J = j.bottom - N.bottom, de = N.left - j.left, q = j.right - N.right, { width: me, height: Pe } = N, { width: U, height: Q } = j;
      return {
        top: E,
        bottom: J,
        left: de,
        right: q,
        width: me,
        height: Pe,
        halfWidth: me / 2,
        halfHeight: Pe / 2,
        windowWidth: U,
        windowHeight: Q
      };
    }
    function D() {
      const N = O(), j = y.left, E = N.windowWidth - y.right - N.width, J = y.top, de = N.windowHeight - y.bottom - N.height;
      return {
        minX: j,
        minY: J,
        // fallback the drag element overflows boundary
        maxX: j < E ? E : j,
        maxY: J < de ? de : J
      };
    }
    function M() {
      if (e.attraction == null)
        return;
      const { halfWidth: N, halfHeight: j, top: E, bottom: J, left: de, right: q } = O(), { minX: me, minY: Pe, maxX: U, maxY: Q } = D(), te = de + N - y.left, he = q + N - y.right, A = E + j - y.top, K = J + j - y.bottom, pe = te <= he, Se = A <= K;
      e.attraction.includes("x") && (t.value = pe ? me : U), e.attraction.includes("y") && (r.value = Se ? Pe : Q);
    }
    function V() {
      const { minX: N, minY: j, maxX: E, maxY: J } = D();
      t.value = $n(t.value, N, E), r.value = $n(r.value, j, J);
    }
    function L() {
      const { top: N = 0, bottom: j = 0, left: E = 0, right: J = 0 } = e.boundary;
      y.top = on(N), y.bottom = on(j), y.left = on(E), y.right = on(J);
    }
    function Y() {
      var N;
      const j = (N = n.style) != null ? N : {};
      return Cd($d({}, n), {
        style: Cd($d({}, j), {
          // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: a.value ? 0 : j.top,
          left: a.value ? 0 : j.left,
          right: a.value ? "auto" : j.right,
          bottom: a.value ? "auto" : j.bottom,
          transform: a.value ? `translate(${t.value}px, ${r.value}px)` : j.transform
        })
      });
    }
    function z() {
      a.value && (T(), V());
    }
    function I() {
      h(), i.value = !1, a.value = !1, t.value = 0, r.value = 0;
    }
    return {
      drag: o,
      x: t,
      y: r,
      enableTransition: i,
      dragging: s,
      teleportDisabled: m,
      n: TP,
      classes: BP,
      getAttrs: Y,
      handleTouchstart: C,
      handleTouchmove: k,
      handleTouchend: b,
      handleClick: S,
      resize: z,
      reset: I
    };
  }
});
jm.render = DP;
var ui = jm;
re(ui);
ie(ui, Hm);
const vD = ui;
var ra = ui;
const Ym = {
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
  onOpen: F(),
  onOpened: F(),
  onClose: F(),
  onClosed: F(),
  onClickOutside: F(),
  "onUpdate:show": F()
}, { name: IP, n: AP, classes: MP } = ne("tooltip");
function NP(e, n) {
  return g(), P(
    "div",
    {
      ref: "host",
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      H(e.$slots, "default"),
      (g(), we(lo, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        X(xe, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: ue(() => [
            Ne(R(
              "div",
              {
                ref: "popover",
                class: p(e.classes(e.n("tooltip"), e.n("$--box"))),
                style: Z({ zIndex: e.zIndex }),
                onClick: n[0] || (n[0] = Rn(() => {
                }, ["stop"])),
                onMouseenter: n[1] || (n[1] = (...o) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...o)),
                onMouseleave: n[2] || (n[2] = (...o) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...o))
              },
              [
                R(
                  "div",
                  {
                    style: Z({
                      background: e.color,
                      color: e.textColor,
                      width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.referenceSize.width)) : void 0
                    }),
                    class: p(e.classes(e.n("content-container"), e.n(`--${e.type}`))),
                    role: "tooltip"
                  },
                  [
                    H(e.$slots, "content", {}, () => [
                      De(
                        le(e.content),
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
              [eo, e.show]
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
const Wm = ee({
  name: IP,
  props: Ym,
  setup(e) {
    const { disabled: n } = xo(), {
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
      setReference: h
    } = ov(e);
    return {
      popover: o,
      host: t,
      referenceSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: ze,
      n: AP,
      classes: MP,
      handlePopoverClose: u,
      handlePopoverMouseenter: l,
      handlePopoverMouseleave: s,
      handleClosed: c,
      resize: v,
      open: d,
      close: f,
      setReference: h
    };
  }
});
Wm.render = NP;
var ci = Wm;
re(ci);
ie(ci, Ym);
const mD = ci;
var aa = ci;
const Km = {
  expand: Boolean,
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  },
  "onUpdate:expand": F()
};
var VP = Object.defineProperty, Sd = Object.getOwnPropertySymbols, RP = Object.prototype.hasOwnProperty, LP = Object.prototype.propertyIsEnumerable, Pd = (e, n, o) => n in e ? VP(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, FP = (e, n) => {
  for (var o in n || (n = {}))
    RP.call(n, o) && Pd(e, o, n[o]);
  if (Sd)
    for (var o of Sd(n))
      LP.call(n, o) && Pd(e, o, n[o]);
  return e;
};
const { name: UP, n: HP, classes: jP } = ne("ellipsis"), YP = { key: 0 };
function WP(e, n) {
  const o = _("var-tooltip");
  return g(), we(o, je({
    class: e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")]),
    "var-ellipsis-cover": "",
    style: e.rootStyles
  }, e.tooltipProps, { onClick: e.handleClick }), {
    content: ue(() => [
      H(e.$slots, "tooltip-content", {}, () => {
        var t;
        return [
          (t = e.tooltipProps) != null && t.content ? (g(), P(
            "span",
            YP,
            le(e.tooltipProps.content),
            1
            /* TEXT */
          )) : H(e.$slots, "default", { key: 1 })
        ];
      })
    ]),
    default: ue(() => [
      R("span", null, [
        H(e.$slots, "default")
      ])
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "style", "onClick"]);
}
const qm = ee({
  name: UP,
  components: { VarTooltip: aa },
  props: Km,
  setup(e) {
    const n = Gn(e, "expand"), o = B(() => e.lineClamp ? { "-webkit-line-clamp": e.lineClamp } : {}), t = B(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : FP({ sameWidth: !0 }, e.tooltip));
    function r() {
      e.expandTrigger && (n.value = !n.value);
    }
    return {
      tooltipProps: t,
      expanding: n,
      rootStyles: o,
      n: HP,
      classes: jP,
      handleClick: r
    };
  }
});
qm.render = WP;
var di = qm;
re(di);
ie(di, Km);
const hD = di;
var ns = di;
const Xm = {
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
  inactiveIconSize: Ie(tn, "size"),
  activeIconSize: Ie(tn, "size"),
  inactiveIconNamespace: Ie(tn, "namespace"),
  activeIconNamespace: Ie(tn, "namespace"),
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
  onClick: F(),
  onOpen: F(),
  onOpened: F(),
  onClose: F(),
  onClosed: F(),
  "onUpdate:active": F()
}, {
  name: KP,
  classes: il,
  n: Mn
} = ne("fab");
var fi = ee({
  name: KP,
  inheritAttrs: !1,
  props: Xm,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const t = Gn(e, "active"), r = w(null), a = w(null);
    fe(() => e.trigger, () => {
      t.value = !1;
    }), fe(() => e.disabled, () => {
      t.value = !1;
    }), fe(() => [e.position, e.fixed, e.top, e.bottom, e.left, e.right], () => {
      var c;
      (c = a.value) == null || c.reset();
    }), xf(r, "click", s);
    function i(c, d, f) {
      if (c.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (f === 0) {
          $(e.onClick, t.value, c);
          return;
        }
        t.value = d, $(e.onClick, t.value, c), $(t.value ? e.onOpen : e.onClose);
      }
    }
    function l(c, d) {
      e.trigger !== "hover" || e.disabled || d === 0 || (t.value = c, $(t.value ? e.onOpen : e.onClose));
    }
    function s() {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, $(e.onClose));
    }
    function u() {
      return n.trigger ? e.show ? n.trigger({
        active: t.value
      }) : null : Ne(X(Bn, {
        "var-fab-cover": !0,
        class: Mn("trigger"),
        type: e.type,
        color: e.color,
        disabled: e.disabled,
        elevation: e.elevation,
        iconContainer: !0
      }, {
        default: () => [X(Ge, {
          "var-fab-cover": !0,
          class: il([t.value, Mn("trigger-active-icon"), Mn("trigger-inactive-icon")]),
          name: t.value ? e.activeIcon : e.inactiveIcon,
          size: t.value ? e.activeIconSize : e.inactiveIconSize,
          namespace: t.value ? e.activeIconNamespace : e.inactiveIconNamespace,
          transition: 200,
          animationClass: Mn("--trigger-icon-animation")
        }, null)]
      }), [[eo, e.show]]);
    }
    return () => {
      var c;
      const d = np((c = $(n.default)) != null ? c : []), f = nr(e.drag) ? {} : e.drag;
      return X(ra, je({
        ref: a,
        class: il(Mn(`--position-${e.position}`), [!e.fixed, Mn("--absolute")]),
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
        default: () => [X("div", {
          class: il(Mn(), Mn(`--direction-${e.direction}`), [e.safeArea, Mn("--safe-area")]),
          ref: r,
          onMouseleave: () => l(!1, d.length),
          onMouseenter: () => l(!0, d.length)
        }, [X(xe, {
          name: Mn("--active-transition")
        }, {
          default: () => [u()]
        }), X(xe, {
          name: Mn(`--actions-transition-${e.direction}`),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        }, {
          default: () => [Ne(X("div", {
            class: Mn("actions"),
            onClick: (v) => v.stopPropagation()
          }, [d.map((v) => {
            var h;
            return X("div", {
              class: Mn("action"),
              key: (h = v.key) != null ? h : void 0
            }, [v]);
          })]), [[eo, e.show && t.value && d.length]])]
        })])]
      });
    };
  }
});
re(fi);
ie(fi, Xm);
const gD = fi;
var os = fi;
const Gm = {
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
  "onUpdate:anchor": F(),
  onAnchorChange: F()
}, { name: qP, n: XP, classes: GP } = ne("floating-panel"), Od = 100, zd = 0.2;
function ZP(e, n) {
  return g(), we(lo, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    R(
      "div",
      {
        class: p(e.classes(e.n(), [e.safeArea, e.n("--safe-area")], e.formatElevation(e.elevation, 3))),
        style: Z({
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
          R(
            "div",
            {
              class: p(e.n("header"))
            },
            [
              R(
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
        R(
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
const Zm = ee({
  name: qP,
  props: Gm,
  setup(e) {
    const n = w(0), o = w(null), { height: t } = g0(), r = B(() => t.value * 0.6), a = Gn(e, "anchor", { defaultValue: Od }), i = B(() => {
      const V = [Od, r.value], { anchors: L } = e;
      return Kn(L) ? V : L;
    }), l = B(() => Math.min(...i.value)), s = B(() => Math.max(...i.value)), { disabled: u } = xo(), { deltaY: c, touching: d, startTouch: f, moveTouch: v, endTouch: h, isReachTop: m, isReachBottom: y } = kt();
    let C;
    ar(() => d.value), fe(() => a.value, k, { immediate: !0 }), fe(
      () => i.value,
      () => {
        k(a.value);
      },
      { immediate: !0 }
    );
    function k(V) {
      O(V ?? l.value);
    }
    function b(V) {
      f(V), C = n.value;
    }
    function S(V) {
      var L;
      v(V);
      const Y = V.target, z = o.value === Y || ((L = o.value) == null ? void 0 : L.contains(Y));
      if (z && !e.contentDraggable)
        return;
      if (z && e.contentDraggable && n.value >= s.value && !m(o.value)) {
        y(o.value) && Me(V);
        return;
      }
      const I = C - c.value;
      O(D(I)), Me(V);
    }
    function T() {
      h();
      const V = a.value;
      O(n.value), a.value = n.value, a.value !== V && $(e.onAnchorChange, n.value);
    }
    function O(V) {
      n.value = d.value ? V : M(V);
    }
    function D(V) {
      if (V > s.value) {
        const L = V - s.value;
        return s.value + L * zd;
      }
      if (V < l.value) {
        const L = l.value - V;
        return l.value - L * zd;
      }
      return V;
    }
    function M(V) {
      if (i.value.includes(V))
        return V;
      let L = 1 / 0, Y = 0;
      return i.value.forEach((z) => {
        const I = Math.abs(z - V);
        I < L && (L = I, Y = z);
      }), Y;
    }
    return {
      contentRef: o,
      teleportDisabled: u,
      touching: d,
      minAnchor: l,
      maxAnchor: s,
      visibleHeight: n,
      n: XP,
      classes: GP,
      toSizeUnit: ze,
      toNumber: W,
      formatElevation: dn,
      handleTouchstart: b,
      handleTouchmove: S,
      handleTouchend: T
    };
  }
});
Zm.render = ZP;
var pi = Zm;
re(pi);
ie(pi, Gm);
const bD = pi;
var ts = pi;
const Jm = {
  disabled: Boolean,
  readonly: Boolean,
  scrollToError: String,
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  },
  onSubmit: F(),
  onReset: F()
};
var Ed = (e, n, o) => new Promise((t, r) => {
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
const { name: JP, n: QP } = ne("form");
function _P(e, n) {
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
const Qm = ee({
  name: JP,
  props: Jm,
  setup(e) {
    const n = B(() => e.disabled), o = B(() => e.readonly), { formItems: t, bindFormItems: r } = a1();
    r({
      disabled: n,
      readonly: o
    });
    function i(f) {
      setTimeout(() => {
        const v = No(f), h = v === window ? 0 : oc(v), m = oc(f) - h - on(e.scrollToErrorOffsetY);
        Vt(v, {
          top: m,
          animation: wl
        });
      }, 300);
    }
    function l(f) {
      return Ed(this, null, function* () {
        Me(f);
        const v = yield u();
        $(e.onSubmit, v);
      });
    }
    function s(f) {
      Me(f), c(), $(e.onReset);
    }
    function u() {
      return Ed(this, null, function* () {
        var f;
        const v = yield Promise.all(t.map(({ validate: h }) => h()));
        if (e.scrollToError) {
          const [, h] = Mf(v, (y) => y === !1, e.scrollToError), m = h > -1;
          if (m) {
            const y = (f = t[h].instance.proxy) == null ? void 0 : f.$el;
            i(y);
          }
          return !m;
        }
        return v.every((h) => h === !0);
      });
    }
    function c() {
      return t.forEach(({ reset: f }) => f());
    }
    function d() {
      return t.forEach(({ resetValidation: f }) => f());
    }
    return {
      n: QP,
      handleSubmit: l,
      handleReset: s,
      validate: u,
      reset: c,
      resetValidation: d
    };
  }
});
Qm.render = _P;
var St = Qm;
St.useValidation = Hn;
St.useForm = jn;
re(St);
ie(St, Jm);
const yD = St;
var rs = St;
const _m = {
  highlighter: Object,
  theme: String,
  tag: {
    type: String,
    default: "div"
  }
}, { name: xP, n: e4 } = ne("highlighter-provider"), n4 = ee({
  name: xP,
  props: _m,
  setup(e, { slots: n }) {
    const o = B(() => e.highlighter), t = B(() => e.theme);
    return IC({ highlighter: o, theme: t }), () => Qt(
      e.tag,
      {
        class: e4()
      },
      $(n.default)
    );
  }
});
var vi = n4;
re(vi);
ie(vi, _m);
const wD = vi;
var as = vi;
const xm = {
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
  onClick: F(),
  onLoad: F(),
  onError: F()
}, { name: o4, n: t4, classes: r4 } = ne("image"), a4 = ["alt", "title", "referrerpolicy", "lazy-loading", "lazy-error"], i4 = ["alt", "title", "referrerpolicy", "src"];
function l4(e, n) {
  var o;
  const t = We("lazy"), r = We("ripple");
  return Ne((g(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: Z({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        borderRadius: e.toSizeUnit(e.radius)
      })
    },
    [
      e.lazy && !e.showErrorSlot ? Ne((g(), P("img", {
        key: 0,
        role: "img",
        class: p(e.n("image")),
        alt: e.alt,
        title: e.title,
        referrerpolicy: e.referrerpolicy,
        "lazy-loading": e.loading,
        "lazy-error": e.error,
        style: Z({ objectFit: e.fit, objectPosition: e.position }),
        onLoad: n[0] || (n[0] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, a4)), [
        [t, (o = e.src) != null ? o : ""]
      ]) : G("v-if", !0),
      !e.lazy && !e.showErrorSlot ? (g(), P("img", {
        key: 1,
        role: "img",
        class: p(e.n("image")),
        alt: e.alt,
        title: e.title,
        referrerpolicy: e.referrerpolicy,
        style: Z({ objectFit: e.fit, objectPosition: e.position }),
        src: e.src,
        onLoad: n[2] || (n[2] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onError: n[3] || (n[3] = (...a) => e.handleError && e.handleError(...a)),
        onClick: n[4] || (n[4] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, i4)) : G("v-if", !0),
      e.showErrorSlot ? H(e.$slots, "error", { key: 2 }) : G("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: !e.ripple }]
  ]);
}
const eh = ee({
  name: o4,
  directives: {
    Lazy: Yt,
    Ripple: rn
  },
  props: xm,
  setup(e, { slots: n }) {
    const o = w(!1);
    fe(
      () => e.src,
      () => {
        o.value = !1;
      }
    );
    function t(i) {
      o.value = !!n.error, $(e.onError, i);
    }
    function r(i) {
      const l = i.currentTarget;
      if (e.lazy) {
        if (l._lazy.state === "success") {
          $(e.onLoad, i);
          return;
        }
        l._lazy.state === "error" && t(i);
      } else
        $(e.onLoad, i);
    }
    function a(i) {
      $(e.onClick, i);
    }
    return {
      showErrorSlot: o,
      n: t4,
      classes: r4,
      toSizeUnit: ze,
      handleLoad: r,
      handleError: t,
      handleClick: a
    };
  }
});
eh.render = l4;
var mi = eh;
re(mi);
ie(mi, xm);
const kD = mi;
var is = mi;
const Eu = {
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
  onChange: F()
};
var nt = (e, n, o) => new Promise((t, r) => {
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
const s4 = 250, u4 = 20, { name: c4, n: Td, classes: d4 } = ne("swipe"), f4 = ["onClick"];
function p4(e, n) {
  const o = _("var-icon"), t = _("var-button"), r = We("hover");
  return Ne((g(), P(
    "div",
    {
      ref: "swipeEl",
      class: p(e.n())
    },
    [
      R(
        "div",
        {
          class: p(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
          style: Z({
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
      e.navigation ? H(e.$slots, "prev", Ko(je({ key: 0 }, {
        index: e.index,
        length: e.length,
        prev: e.prev,
        next: e.next,
        to: e.to,
        hovering: e.hovering
      })), () => [
        X(xe, {
          name: e.getNavigationAnimation("prev")
        }, {
          default: ue(() => [
            e.navigation === !0 || e.hovering ? (g(), P(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("navigation"), e.n("navigation-prev"), [e.vertical, e.n("--navigation-vertical-prev")]))
              },
              [
                X(t, {
                  "var-swipe-cover": "",
                  disabled: !e.loop && e.index === 0,
                  class: p(e.n("navigation-prev-button")),
                  onClick: n[3] || (n[3] = (a) => e.prev())
                }, {
                  default: ue(() => [
                    X(o, {
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
            )) : G("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : G("v-if", !0),
      e.navigation ? H(e.$slots, "next", Ko(je({ key: 1 }, {
        index: e.index,
        length: e.length,
        hovering: e.hovering,
        prev: e.prev,
        next: e.next,
        to: e.to
      })), () => [
        X(xe, {
          name: e.getNavigationAnimation("next")
        }, {
          default: ue(() => [
            e.navigation === !0 || e.hovering ? (g(), P(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("navigation"), e.n("navigation-next"), [e.vertical, e.n("--navigation-vertical-next")]))
              },
              [
                X(t, {
                  "var-swipe-cover": "",
                  class: p(e.n("navigation-next-button")),
                  disabled: !e.loop && e.index === e.length - 1,
                  onClick: n[4] || (n[4] = (a) => e.next())
                }, {
                  default: ue(() => [
                    X(o, {
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
            )) : G("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : G("v-if", !0),
      H(e.$slots, "indicator", Ko(ua({
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
              Ae,
              null,
              qe(e.length, (a, i) => (g(), P("div", {
                key: a,
                class: p(
                  e.classes(e.n("indicator"), [e.index === i, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])
                ),
                style: Z({ background: e.indicatorColor }),
                onClick: (l) => e.to(i)
              }, null, 14, f4))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        )) : G("v-if", !0)
      ])
    ],
    2
    /* CLASS */
  )), [
    [r, e.handleHovering]
  ]);
}
const nh = ee({
  name: c4,
  directives: { Hover: In },
  components: { VarButton: Bn, VarIcon: Ge },
  props: Eu,
  setup(e) {
    const n = w(null), o = w(0), t = B(() => e.vertical), r = w(0), a = w(0), i = w(!1), l = w(0), s = w(!1), { swipeItems: u, bindSwipeItems: c, length: d } = i1(), { swipeResizeListeners: f, bindSwipeResizeListeners: v } = l1(), { popup: h, bindPopup: m } = fp(), {
      deltaX: y,
      deltaY: C,
      moveX: k,
      moveY: b,
      offsetX: S,
      offsetY: T,
      touching: O,
      direction: D,
      startTime: M,
      startTouch: V,
      moveTouch: L,
      endTouch: Y
    } = kt(), z = B(() => D.value === (e.vertical ? "vertical" : "horizontal"));
    let I = !1, N = -1;
    c({
      size: o,
      currentIndex: l,
      vertical: t
    }), He(() => window, "keydown", Ue), $(m, null), $(v, null), fe(
      () => d.value,
      () => nt(this, null, function* () {
        yield bn(), U(), Ve();
      })
    ), h && fe(
      () => h.show.value,
      (ve) => nt(this, null, function* () {
        ve ? (yield bn(), Ve()) : te();
      })
    ), Lo(Ve), tr(te), to(Ve);
    function E(ve) {
      return u.find(({ index: Ke }) => Ke.value === ve);
    }
    function J() {
      e.loop && (a.value >= 0 && E(d.value - 1).setTranslate(-r.value), a.value <= -(r.value - o.value) && E(0).setTranslate(r.value), a.value > -(r.value - o.value) && a.value < 0 && (E(d.value - 1).setTranslate(0), E(0).setTranslate(0)));
    }
    function de(ve) {
      const Ke = En(ve) ? ve : Math.floor((a.value - o.value / 2) / -o.value), { loop: oe } = e;
      return Ke <= -1 ? oe ? -1 : 0 : Ke >= d.value ? oe ? d.value : d.value - 1 : Ke;
    }
    function q(ve) {
      const { loop: Ke } = e;
      return ve === -1 ? Ke ? d.value - 1 : 0 : ve === d.value ? Ke ? 0 : d.value - 1 : ve;
    }
    function me(ve) {
      return e.loop ? ve < 0 ? d.value + ve : ve >= d.value ? ve - d.value : ve : $n(ve, 0, d.value - 1);
    }
    function Pe() {
      return nt(this, null, function* () {
        const ve = a.value >= o.value, Ke = a.value <= -r.value, oe = 0, ce = -(r.value - o.value);
        i.value = !0, (ve || Ke) && (i.value = !0, a.value = Ke ? oe : ce, E(0).setTranslate(0), E(d.value - 1).setTranslate(0)), yield bn(), i.value = !1;
      });
    }
    function U() {
      I || (l.value = me(W(e.initialIndex)), I = !0);
    }
    function Q() {
      const { autoplay: ve } = e;
      !ve || d.value <= 1 || (te(), N = window.setTimeout(() => {
        Qe(), Q();
      }, W(ve)));
    }
    function te() {
      N && clearTimeout(N);
    }
    function he(ve) {
      return nt(this, null, function* () {
        d.value <= 1 || !e.touchable || (V(ve), te(), yield Pe(), i.value = !0);
      });
    }
    function A(ve) {
      const { touchable: Ke, vertical: oe } = e;
      !O.value || !Ke || (L(ve), z.value && (Me(ve), a.value += oe ? b.value : k.value, J()));
    }
    function K() {
      if (!O.value || (Y(), !z.value))
        return;
      const { vertical: ve, onChange: Ke } = e, oe = ve ? C.value < 0 : y.value < 0, ce = ve ? T.value : S.value, Be = performance.now() - M.value <= s4 && ce >= u4 ? de(oe ? l.value + 1 : l.value - 1) : de();
      i.value = !1, a.value = Be * -o.value;
      const _e = l.value;
      l.value = q(Be), Q(), _e !== l.value && $(Ke, l.value);
    }
    function pe(ve) {
      e.navigation === "hover" && (s.value = ve);
    }
    function Se(ve) {
      return e.navigation !== "hover" ? "" : Td(`--navigation${e.vertical ? "-vertical" : ""}-${ve}-animation`);
    }
    function Ue(ve) {
      if (!u.length || u.findIndex(({ isFocusing: ce }) => ce.value) === -1)
        return;
      const { key: oe } = ve;
      Me(ve), oe === "ArrowLeft" && un(), oe === "ArrowRight" && Qe();
    }
    function Ve() {
      n.value && (i.value = !0, o.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, r.value = o.value * d.value, a.value = l.value * -o.value, u.forEach((ve) => {
        ve.setTranslate(0);
      }), Q(), setTimeout(() => {
        i.value = !1;
      }), f.forEach(({ onResize: ve }) => {
        ve();
      }));
    }
    function Qe(ve) {
      return nt(this, null, function* () {
        if (d.value <= 1)
          return;
        U();
        const { loop: Ke, onChange: oe } = e, ce = l.value;
        if (l.value = me(ce + 1), (ve == null ? void 0 : ve.event) !== !1 && $(oe, l.value), yield Pe(), ce === d.value - 1 && Ke) {
          E(0).setTranslate(r.value), a.value = d.value * -o.value;
          return;
        }
        ce !== d.value - 1 && (a.value = l.value * -o.value);
      });
    }
    function un(ve) {
      return nt(this, null, function* () {
        if (d.value <= 1)
          return;
        U();
        const { loop: Ke, onChange: oe } = e, ce = l.value;
        if (l.value = me(ce - 1), (ve == null ? void 0 : ve.event) !== !1 && $(oe, l.value), yield Pe(), ce === 0 && Ke) {
          E(d.value - 1).setTranslate(-r.value), a.value = o.value;
          return;
        }
        ce !== 0 && (a.value = l.value * -o.value);
      });
    }
    function Sn(ve, Ke) {
      if (d.value <= 1 || ve === l.value)
        return;
      ve = ve < 0 ? 0 : ve, ve = ve >= d.value ? d.value : ve;
      const oe = ve > l.value ? Qe : un, ce = Math.abs(ve - l.value);
      Array.from({ length: ce }).forEach((ke, Be) => {
        oe({ event: Be === ce - 1 ? Ke == null ? void 0 : Ke.event : !1 });
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
      n: Td,
      toSizeUnit: ze,
      classes: d4,
      handleTouchstart: he,
      handleTouchmove: A,
      handleTouchend: K,
      next: Qe,
      prev: un,
      to: Sn,
      resize: Ve,
      toNumber: W,
      handleHovering: pe,
      getNavigationAnimation: Se
    };
  }
});
nh.render = p4;
var hi = nh;
re(hi);
ie(hi, Eu);
const $D = hi;
var Kt = hi;
function v4() {
  const { bindParent: e, index: n, parentProvider: o } = wn(Fp);
  return Fn(!!e, "SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: o,
    bindSwipe: e
  };
}
const { name: m4, n: h4 } = ne("swipe-item"), g4 = ["aria-hidden"];
function b4(e, n) {
  return g(), P("div", {
    class: p(e.n()),
    style: Z({
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
  ], 46, g4);
}
const oh = ee({
  name: m4,
  setup() {
    const e = w(0), n = w(!1), { swipe: o, bindSwipe: t, index: r } = v4(), { size: a, currentIndex: i, vertical: l } = o, s = {
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
      n: h4,
      toSizeUnit: ze
    };
  }
});
oh.render = b4;
var Tu = oh;
re(Tu);
const CD = Tu;
var qt = Tu, y4 = Object.defineProperty, Bd = Object.getOwnPropertySymbols, w4 = Object.prototype.hasOwnProperty, k4 = Object.prototype.propertyIsEnumerable, Dd = (e, n, o) => n in e ? y4(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Id = (e, n) => {
  for (var o in n || (n = {}))
    w4.call(n, o) && Dd(e, o, n[o]);
  if (Bd)
    for (var o of Bd(n))
      k4.call(n, o) && Dd(e, o, n[o]);
  return e;
};
const th = Id(Id({
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
  "onUpdate:show": F(),
  onLongPress: F()
}, Ie(Eu, ["loop", "indicator", "onChange"])), Ie(Ct, [
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
])), { name: $4, n: Ad, classes: C4 } = ne("image-preview"), ll = 12, Md = 200, S4 = 350, Nd = 200, P4 = 500, Cr = 1, O4 = ["onTouchstart"], z4 = ["src", "alt"];
function E4(e, n) {
  const o = _("var-swipe-item"), t = _("var-swipe"), r = _("var-icon"), a = _("var-popup");
  return g(), we(a, {
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
    default: ue(() => [
      X(t, je({
        ref: "swipeRef",
        class: e.n("swipe"),
        "var-image-preview-cover": "",
        touchable: e.canSwipe,
        indicator: e.indicator && e.images.length > 1,
        "initial-index": e.toNumber(e.initialIndex),
        loop: e.loop
      }, e.$attrs, { onChange: e.onChange }), {
        default: ue(() => [
          (g(!0), P(
            Ae,
            null,
            qe(e.images, (i, l) => (g(), we(o, {
              key: i,
              class: p(e.n("swipe-item")),
              "var-image-preview-cover": ""
            }, {
              default: ue(() => [
                R("div", {
                  class: p(e.n("zoom-container")),
                  style: Z({
                    transform: `scale(${e.scale}) translate(${e.translateX}px, ${e.translateY}px)`,
                    transitionTimingFunction: e.transitionTimingFunction,
                    transitionDuration: e.transitionDuration
                  }),
                  onTouchstart: (s) => e.handleTouchstart(s, l),
                  onTouchmove: n[0] || (n[0] = (...s) => e.handleTouchmove && e.handleTouchmove(...s)),
                  onTouchend: n[1] || (n[1] = (...s) => e.handleTouchend && e.handleTouchend(...s)),
                  onTouchcancel: n[2] || (n[2] = (...s) => e.handleTouchcancel && e.handleTouchcancel(...s))
                }, [
                  R("img", {
                    role: "img",
                    class: p(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
                    src: i,
                    alt: i
                  }, null, 10, z4)
                ], 46, O4)
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["class"]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        indicator: ue(({ index: i, length: l }) => [
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
              le(i + 1) + " / " + le(l),
              3
              /* TEXT, CLASS */
            )) : G("v-if", !0)
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]),
      H(e.$slots, "close-icon", {}, () => [
        e.closeable ? (g(), we(r, {
          key: 0,
          class: p(e.n("close-icon")),
          name: "close-circle",
          "var-image-preview-cover": "",
          onClick: e.close
        }, null, 8, ["class", "onClick"])) : G("v-if", !0)
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
      )) : G("v-if", !0)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["show", "class", "transition", "close-on-key-escape", "lock-scroll", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onKeyEscape", "onRouteChange"]);
}
const rh = ee({
  name: $4,
  components: {
    VarSwipe: Kt,
    VarSwipeItem: qt,
    VarPopup: Mo,
    VarIcon: Ge
  },
  inheritAttrs: !1,
  props: th,
  setup(e) {
    const n = Gn(e, "show"), o = w(1), t = w(0), r = w(0), a = w(), i = w(), l = w(!0), s = w(null), { moveX: u, moveY: c, distance: d, startTime: f, startTouch: v, moveTouch: h, endTouch: m } = kt(), y = B(() => {
      const { imagePreventDefault: U, show: Q } = e;
      return Q && U;
    });
    let C = null, k = null, b = !1;
    const S = {
      start: null,
      prev: null
    };
    He(() => document, "contextmenu", J);
    function T(U) {
      o.value = W(U), l.value = !1, S.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, Nd);
    }
    function O() {
      o.value = 1, t.value = 0, r.value = 0, l.value = !0, S.prev = null, a.value = void 0, i.value = void 0;
    }
    function D(U) {
      return S.prev ? d.value <= ll && performance.now() - f.value <= Md && S.prev === U : !1;
    }
    function M(U) {
      return !U || !S.start || !S.prev ? !1 : d.value <= ll && performance.now() - f.value < S4 && (U === S.start || U.parentNode === S.start);
    }
    function V() {
      m(), window.clearTimeout(k), b = !1, S.start = null;
    }
    function L(U) {
      if (m(), window.clearTimeout(k), b) {
        b = !1;
        return;
      }
      const Q = M(U.target);
      C = window.setTimeout(() => {
        Q && E(), S.start = null;
      }, Md);
    }
    function Y(U, Q) {
      window.clearTimeout(C), window.clearTimeout(k);
      const te = U.currentTarget;
      if (S.start = te, k = window.setTimeout(() => {
        b = !0, $(e.onLongPress, Q);
      }, P4), D(te)) {
        o.value > Cr ? O() : T(e.zoom);
        return;
      }
      v(U), S.prev = te;
    }
    function z(U) {
      const { offsetWidth: Q, offsetHeight: te } = U, { naturalWidth: he, naturalHeight: A } = U.querySelector(`.${Ad("image")}`);
      return {
        width: Q,
        height: te,
        imageRadio: A / he,
        rootRadio: te / Q,
        zoom: W(e.zoom)
      };
    }
    function I(U) {
      const { zoom: Q, imageRadio: te, rootRadio: he, width: A, height: K } = z(U);
      if (!te)
        return 0;
      const pe = te > he ? K / te : A;
      return Math.max(0, (Q * pe - A) / 2) / Q;
    }
    function N(U) {
      const { zoom: Q, imageRadio: te, rootRadio: he, width: A, height: K } = z(U);
      if (!te)
        return 0;
      const pe = te > he ? K : A * te;
      return Math.max(0, (Q * pe - K) / 2) / Q;
    }
    function j(U) {
      if (!S.prev)
        return;
      h(U);
      const Q = U.currentTarget;
      if (d.value > ll && window.clearTimeout(k), o.value > Cr) {
        const te = I(Q), he = N(Q);
        t.value = $n(t.value + u.value, -te, te), r.value = $n(r.value + c.value, -he, he);
      }
      S.prev = Q;
    }
    function E() {
      if (o.value > Cr) {
        O(), setTimeout(() => $(e["onUpdate:show"], !1), Nd);
        return;
      }
      $(e["onUpdate:show"], !1);
    }
    function J(U) {
      y.value && Me(U);
    }
    function de(U) {
      var Q;
      (Q = s.value) == null || Q.prev(U);
    }
    function q(U) {
      var Q;
      (Q = s.value) == null || Q.next(U);
    }
    function me(U, Q) {
      var te;
      (te = s.value) == null || te.to(U, Q);
    }
    function Pe(U) {
      U <= Cr ? O() : T(U);
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
      n: Ad,
      classes: C4,
      toNumber: W,
      handleTouchstart: Y,
      handleTouchmove: j,
      handleTouchend: L,
      handleTouchcancel: V,
      close: E,
      prev: de,
      next: q,
      to: me,
      zoom: Pe
    };
  }
});
rh.render = E4;
var fr = rh, T4 = Object.defineProperty, B4 = Object.defineProperties, D4 = Object.getOwnPropertyDescriptors, Vd = Object.getOwnPropertySymbols, I4 = Object.prototype.hasOwnProperty, A4 = Object.prototype.propertyIsEnumerable, Rd = (e, n, o) => n in e ? T4(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Sr = (e, n) => {
  for (var o in n || (n = {}))
    I4.call(n, o) && Rd(e, o, n[o]);
  if (Vd)
    for (var o of Vd(n))
      A4.call(n, o) && Rd(e, o, n[o]);
  return e;
}, Ld = (e, n) => B4(e, D4(n));
let zo, Mt = {};
function M4(e = {}) {
  return sn(e) ? Ld(Sr({}, Mt), { images: [e] }) : Fe(e) ? Ld(Sr({}, Mt), { images: e }) : Sr(Sr({}, Mt), e);
}
function Yo(e) {
  if (!oo())
    return;
  Yo.close();
  const n = M4(e), o = en(n);
  o.teleport = "body", zo = o;
  const { unmountInstance: t } = $t(fr, o, {
    onClose: () => $(o.onClose),
    onClosed: () => {
      $(o.onClosed), t(), zo === o && (zo = null);
    },
    onRouteChange: () => {
      t(), zo === o && (zo = null);
    },
    "onUpdate:show": (r) => {
      o.show = r;
    }
  });
  o.show = !0;
}
Yo.close = () => {
  if (zo != null) {
    const e = zo;
    zo = null, Ye().then(() => {
      e.show = !1;
    });
  }
};
Yo.setDefaultOptions = (e) => {
  Mt = e;
};
Yo.resetDefaultOptions = () => {
  Mt = {};
};
Yo.Component = fr;
re(fr);
re(fr, Yo);
ie(Yo, th);
const SD = fr;
var Xt = Yo;
const ah = {
  index: [Number, String]
}, ih = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function N4() {
  const { bindChildren: e, length: n, childProviders: o } = kn(
    ih
  );
  return {
    length: n,
    indexAnchors: o,
    bindIndexAnchors: e
  };
}
function V4() {
  const { parentProvider: e, index: n, bindParent: o } = wn(
    ih
  );
  return Fn(!!o, "IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: o
  };
}
const { name: R4, n: L4, classes: F4 } = ne("index-anchor");
function U4(e, n) {
  return g(), we(wt(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: "anchorEl",
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode
  }, {
    default: ue(() => [
      R(
        "div",
        je({
          class: e.n()
        }, e.$attrs),
        [
          H(e.$slots, "default", {}, () => [
            De(
              le(e.name),
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
const lh = ee({
  name: R4,
  components: { VarSticky: bt },
  inheritAttrs: !1,
  props: ah,
  setup(e) {
    const n = w(!1), o = B(() => e.index), t = w(null), { index: r, indexBar: a, bindIndexBar: i } = V4(), { active: l, sticky: s, cssMode: u, stickyOffsetTop: c, zIndex: d } = a;
    i({
      index: r,
      name: o,
      setDisabled: h,
      getOffsetTop: v
    });
    function v() {
      return t.value ? t.value.$el ? t.value.$el.offsetTop : t.value.offsetTop : 0;
    }
    function h(m) {
      n.value = m;
    }
    return {
      n: L4,
      classes: F4,
      name: o,
      anchorEl: t,
      active: l,
      sticky: s,
      zIndex: d,
      disabled: n,
      cssMode: u,
      stickyOffsetTop: c,
      Transition: xe
    };
  }
});
lh.render = U4;
var gi = lh;
re(gi);
ie(gi, ah);
const PD = gi;
var ls = gi;
const sh = {
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
  onClick: F(),
  onChange: F()
};
var Fd = (e, n, o) => new Promise((t, r) => {
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
const { name: H4, n: j4, classes: Y4 } = ne("index-bar"), W4 = ["onClick"];
function K4(e, n) {
  return g(), P(
    "div",
    {
      ref: "barEl",
      class: p(e.n())
    },
    [
      H(e.$slots, "default"),
      R(
        "ul",
        {
          class: p(e.n("anchor-list")),
          style: Z({ zIndex: e.toNumber(e.zIndex) + 2, display: e.hideList ? "none" : "block" })
        },
        [
          (g(!0), P(
            Ae,
            null,
            qe(e.anchorNameList, (o) => (g(), P("li", {
              key: o,
              class: p(e.classes(e.n("anchor-item"), [e.active === o, e.n("anchor-item--active")])),
              style: Z({ color: e.active === o && e.highlightColor ? e.highlightColor : void 0 }),
              onClick: (t) => e.anchorClick({ anchorName: o, manualCall: !0 })
            }, [
              H(e.$slots, "anchor-name", { anchorName: o }, () => [
                De(
                  le(o),
                  1
                  /* TEXT */
                )
              ])
            ], 14, W4))),
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
const uh = ee({
  name: H4,
  props: sh,
  setup(e) {
    const n = w(""), o = w(null), t = w([]), r = w(), a = B(() => e.sticky), i = B(() => e.stickyCssMode), l = B(() => on(e.stickyOffsetTop)), s = B(() => e.zIndex), { length: u, indexAnchors: c, bindIndexAnchors: d } = N4();
    let f = null, v = !1;
    const h = {
      active: r,
      sticky: a,
      cssMode: i,
      stickyOffsetTop: l,
      zIndex: s
    };
    fe(
      () => u.value,
      () => Fd(this, null, function* () {
        yield bn(), t.value = c.filter(({ name: O }) => O.value != null).map(({ name: O }) => O.value);
      })
    ), yn(b), sa(S), yt(() => {
      v = !0, S();
    }), Lo(() => {
      !v || r.value === void 0 || (k({
        anchorName: r.value,
        options: { event: !1 }
      }), v = !1);
    }), d(h);
    function m(O, D) {
      const M = Ln(O) ? O.name.value : O;
      M === r.value || M === void 0 || (r.value = M, (D == null ? void 0 : D.event) !== !1 && $(e.onChange, M));
    }
    function y() {
      const { top: O } = nn(f), { top: D } = nn(o.value);
      return ho(f) - O + D;
    }
    function C() {
      const O = ho(f), D = f === window ? document.body.scrollHeight : f.scrollHeight, M = y();
      c.forEach((V, L) => {
        const Y = V.getOffsetTop(), z = O - Y + l.value - M, I = L === c.length - 1 ? D : c[L + 1].getOffsetTop() - V.getOffsetTop();
        V.setDisabled(!0), z >= 0 && z < I && n.value === "" && (V.setDisabled(!1), m(V));
      });
    }
    function k(O) {
      return Fd(this, arguments, function* ({ anchorName: D, manualCall: M = !1, options: V }) {
        if (M && $(e.onClick, D), D === r.value && !v)
          return;
        const L = c.find(({ name: j }) => D === j.value);
        if (!L)
          return;
        const Y = y(), I = L.getOffsetTop() - l.value + Y, N = or(f);
        n.value = D, m(D, V), yield Vt(f, {
          left: N,
          top: I,
          animation: uv,
          duration: W(e.duration)
        }), yield bn(), n.value = "";
      });
    }
    function b() {
      f = No(o.value), f.addEventListener("scroll", C);
    }
    function S() {
      f && f.removeEventListener("scroll", C);
    }
    function T(O, D) {
      Ao(() => k({ anchorName: O, options: D }));
    }
    return {
      barEl: o,
      active: r,
      zIndex: s,
      anchorNameList: t,
      n: j4,
      classes: Y4,
      toNumber: W,
      scrollTo: T,
      anchorClick: k
    };
  }
});
uh.render = K4;
var bi = uh;
re(bi);
ie(bi, sh);
const OD = bi;
var ss = bi;
const ch = {
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
  onClick: F()
}, { name: q4, n: X4, classes: G4 } = ne("link");
function Z4(e, n) {
  return g(), we(wt(e.tag), je(e.linkProps, {
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
    default: ue(() => [
      H(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "style", "onClick"]);
}
const dh = ee({
  name: q4,
  props: ch,
  setup(e) {
    const n = w(!1), o = B(() => {
      const { disabled: a, href: i, to: l } = e;
      return a ? "span" : i ? "a" : l ? "router-link" : "a";
    }), t = B(() => {
      const { disabled: a, href: i, target: l, to: s, replace: u, rel: c } = e;
      return a ? {} : i ? { href: i, target: l, rel: c } : s ? { to: s, target: l, replace: u } : {};
    });
    function r(a) {
      e.disabled || $(e.onClick, a);
    }
    return {
      tag: o,
      linkProps: t,
      isFocusing: n,
      inMobile: Nt,
      n: X4,
      classes: G4,
      handleClick: r,
      toSizeUnit: ze
    };
  }
});
dh.render = Z4;
var yi = dh;
re(yi);
ie(yi, ch);
const zD = yi;
var us = yi;
const fh = {
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
  onLoad: F(),
  "onUpdate:loading": F(),
  "onUpdate:error": F()
}, ph = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function J4() {
  const { bindChildren: e, childProviders: n, length: o } = kn(
    ph
  );
  return {
    length: o,
    tabItemList: n,
    bindTabItem: e
  };
}
const vh = Symbol("TAB_ITEM_BIND_LIST_KEY");
function Q4() {
  const { parentProvider: e, bindParent: n, index: o } = wn(
    ph
  );
  return Fn(!!n, "TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: o,
    tabsItems: e,
    bindTabsItems: n
  };
}
function _4() {
  const { childProviders: e, bindChildren: n, length: o } = kn(vh);
  return {
    length: o,
    lists: e,
    bindLists: n
  };
}
function x4() {
  const { parentProvider: e, bindParent: n, index: o } = wn(vh);
  return {
    index: o,
    tabItem: e,
    bindTabItem: n
  };
}
var eO = (e, n, o) => new Promise((t, r) => {
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
const { name: nO, n: oO, classes: tO } = ne("list");
function rO(e, n) {
  const o = _("var-loading"), t = We("ripple");
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
          R(
            "div",
            {
              class: p(e.n("loading"))
            },
            [
              R(
                "div",
                {
                  class: p(e.n("loading-text"))
                },
                le((r = e.loadingText) != null ? r : (e.pt ? e.pt : e.t)("listLoadingText")),
                3
                /* TEXT, CLASS */
              ),
              X(o, {
                size: "mini",
                radius: 10
              })
            ],
            2
            /* CLASS */
          )
        ];
      }) : G("v-if", !0),
      e.finished ? H(e.$slots, "finished", { key: 1 }, () => {
        var r;
        return [
          R(
            "div",
            {
              class: p(e.n("finished"))
            },
            le((r = e.finishedText) != null ? r : (e.pt ? e.pt : e.t)("listFinishedText")),
            3
            /* TEXT, CLASS */
          )
        ];
      }) : G("v-if", !0),
      e.error ? H(e.$slots, "error", { key: 2 }, () => {
        var r;
        return [
          Ne((g(), P(
            "div",
            {
              class: p(e.n("error")),
              onClick: n[0] || (n[0] = (...a) => e.load && e.load(...a))
            },
            [
              De(
                le((r = e.errorText) != null ? r : (e.pt ? e.pt : e.t)("listErrorText")),
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
      }) : G("v-if", !0),
      R(
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
const mh = ee({
  name: nO,
  directives: { Ripple: rn },
  components: { VarLoading: mt },
  props: fh,
  setup(e) {
    const n = w(null), o = w(null), { tabItem: t, bindTabItem: r } = x4(), { t: a } = so();
    let i;
    $(r, {}), t && fe(() => t.current.value, c), fe(() => [e.loading, e.error, e.finished], c), yn(() => {
      i = No(n.value), i.addEventListener("scroll", c), e.immediateCheck && c();
    }), tr(u);
    function l() {
      $(e["onUpdate:error"], !1), $(e["onUpdate:loading"], !0), $(e.onLoad);
    }
    function s() {
      const { bottom: d } = nn(i), { bottom: f } = nn(o.value);
      return Math.floor(f) - on(e.offset) <= d;
    }
    function u() {
      i && i.removeEventListener("scroll", c);
    }
    function c() {
      return eO(this, null, function* () {
        yield Ye(), !(e.loading || e.finished || e.error || (t == null ? void 0 : t.current.value) === !1 || !s()) && l();
      });
    }
    return {
      listEl: n,
      detectorEl: o,
      pt: a,
      t: an,
      isNumber: En,
      load: l,
      check: c,
      n: oO,
      classes: tO
    };
  }
});
mh.render = rO;
var wi = mh;
re(wi);
ie(wi, fh);
const ED = wi;
var cs = wi;
const aO = {
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
  name: iO,
  classes: lO,
  n: Ud
} = ne("loading-bar");
var sO = ee({
  name: iO,
  props: aO,
  setup(e) {
    return () => X("div", {
      class: lO(Ud(), [e.error, Ud("--error")]),
      style: {
        zIndex: Vn.zIndex + 10,
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
const Bu = 200;
let hh, gh, bh, yh, ki, Hd, wh = {};
const uO = {
  value: 0,
  opacity: 0,
  error: !1
}, ln = en(uO);
function cO(e) {
  Object.assign(ln, e), wh = e;
}
const dO = () => {
  Object.keys(wh).forEach((e) => {
    ln[e] !== void 0 && (ln[e] = void 0);
  });
}, kh = () => {
  Hd || (Hd = !0, $t(sO, ln));
}, Du = () => {
  hh = window.setTimeout(() => {
    ln.transitionDuration = void 0, !(ln.value >= 95) && (ln.value += ln.value < 70 ? Math.round(5 * Math.random()) : Math.random(), Du());
  }, 200);
}, Iu = () => {
  window.clearTimeout(hh), window.clearTimeout(ki), window.clearTimeout(bh), window.clearTimeout(gh), window.clearTimeout(yh);
}, $h = () => {
  Iu(), ln.value = 100, ki = window.setTimeout(() => {
    ln.opacity = 0, yh = window.setTimeout(() => {
      ln.error = !1;
    }, 250);
  }, Bu + 100);
}, fO = () => {
  Iu(), ln.error = !1, ln.value = 0, ln.transitionDuration = 0, kh(), ki = window.setTimeout(() => {
    ln.opacity = 1;
  }, Bu), Du();
}, pO = () => {
  var e;
  bh = window.setTimeout($h, (e = ln.finishDelay) != null ? e : 0);
}, vO = () => {
  Iu(), ln.error = !0, ln.value === 100 && (ln.value = 0, ln.transitionDuration = 0), kh(), ki = window.setTimeout(() => {
    ln.opacity = 1;
  }, Bu), Du(), gh = window.setTimeout($h, 300);
}, Ch = {
  start: fO,
  finish: pO,
  error: vO,
  setDefaultOptions: cO,
  resetDefaultOptions: dO
}, TD = Ch;
var ds = Ch;
const Sh = {
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
var mO = Object.defineProperty, hO = Object.defineProperties, gO = Object.getOwnPropertyDescriptors, jd = Object.getOwnPropertySymbols, bO = Object.prototype.hasOwnProperty, yO = Object.prototype.propertyIsEnumerable, Yd = (e, n, o) => n in e ? mO(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, wO = (e, n) => {
  for (var o in n || (n = {}))
    bO.call(n, o) && Yd(e, o, n[o]);
  if (jd)
    for (var o of jd(n))
      yO.call(n, o) && Yd(e, o, n[o]);
  return e;
}, kO = (e, n) => hO(e, gO(n));
const { name: $O, n: CO } = ne("locale-provider"), SO = ee({
  name: $O,
  props: Sh,
  setup(e, { slots: n }) {
    const o = B(
      () => {
        var r;
        return Object.entries((r = e.messages) != null ? r : {}).reduce(
          (a, [i, l]) => (a[i] = kO(wO({}, l), {
            lang: i
          }), a),
          {}
        );
      }
    );
    D0({
      t
    });
    function t(r) {
      if (Go(o.value, e.locale) && Go(o.value[e.locale], r))
        return o.value[e.locale][r];
    }
    return () => Qt(
      e.tag,
      {
        class: CO()
      },
      $(n.default)
    );
  }
});
var $i = SO;
re($i);
ie($i, Sh);
const BD = $i;
var fs = $i;
const Ph = {
  label: {},
  value: {},
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  // internal
  option: Object
}, Oh = Symbol("SELECT_BIND_OPTION_KEY");
function PO() {
  const { length: e, childProviders: n, bindChildren: o } = kn(Oh);
  return {
    length: e,
    options: n,
    bindOptions: o
  };
}
function OO() {
  const { index: e, parentProvider: n, bindParent: o } = wn(Oh);
  return Fn(!!o, "Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: o
  };
}
const { name: zO, n: EO, classes: TO } = ne("option"), BO = ["tabindex"];
function DO(e, n) {
  const o = _("var-checkbox"), t = _("maybe-v-node"), r = _("var-hover-overlay"), a = We("ripple"), i = We("hover");
  return Ne((g(), P("div", {
    ref: "root",
    class: p(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")])),
    style: Z({
      color: e.optionSelected ? e.focusColor : void 0
    }),
    tabindex: e.disabled ? void 0 : "-1",
    onFocus: n[2] || (n[2] = (l) => e.isFocusing = !0),
    onBlur: n[3] || (n[3] = (l) => e.isFocusing = !1),
    onClick: n[4] || (n[4] = (...l) => e.handleClick && e.handleClick(...l))
  }, [
    R(
      "div",
      {
        class: p(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
        style: Z({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ),
    e.multiple ? (g(), we(o, {
      key: 0,
      ref: "checkbox",
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (l) => e.optionSelected = l),
      "checked-color": e.focusColor,
      disabled: e.disabled,
      onClick: n[1] || (n[1] = Rn(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, ["modelValue", "checked-color", "disabled", "onChange"])) : G("v-if", !0),
    H(e.$slots, "default", { selected: e.optionSelected }, () => [
      R(
        "div",
        {
          class: p(e.classes(e.n("text"), e.n("$--ellipsis")))
        },
        [
          X(t, { is: e.labelVNode }, null, 8, ["is"])
        ],
        2
        /* CLASS */
      )
    ]),
    X(r, {
      hovering: e.hovering && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 46, BO)), [
    [a, { disabled: e.disabled || !e.ripple }],
    [i, e.handleHovering, "desktop"]
  ]);
}
const zh = ee({
  name: zO,
  directives: { Ripple: rn, Hover: In },
  components: {
    VarCheckbox: ct,
    VarHoverOverlay: Un,
    MaybeVNode: rr
  },
  props: Ph,
  setup(e) {
    const n = w(), o = w(!1), t = w(!1), r = B(() => t.value), a = B(() => e.value), i = B(() => e.disabled), l = B(() => e.ripple), { select: s, bindSelect: u } = OO(), { multiple: c, focusColor: d, onSelect: f, computeLabel: v } = s, { hovering: h, handleHovering: m } = no(), y = B(
      () => {
        var D;
        return mn(e.label) ? e.label(
          (D = e.option) != null ? D : {
            label: e.label,
            value: e.value,
            disabled: e.disabled
          },
          t.value
        ) : e.label;
      }
    ), C = {
      label: y,
      value: a,
      disabled: i,
      ripple: l,
      selected: r,
      sync: O
    };
    fe([() => e.label, () => e.value], v), u(C), He(() => window, "keydown", b), He(() => window, "keyup", S);
    function k() {
      e.disabled || T();
    }
    function b(D) {
      o.value && ((D.key === " " || D.key === "Enter") && Me(D), D.key === "Enter" && n.value.click());
    }
    function S(D) {
      o.value && D.key === " " && (Me(D), n.value.click());
    }
    function T() {
      c.value && (t.value = !t.value), f(C);
    }
    function O(D) {
      t.value = D;
    }
    return {
      root: n,
      optionSelected: t,
      multiple: c,
      focusColor: d,
      hovering: h,
      isFocusing: o,
      labelVNode: y,
      n: EO,
      classes: TO,
      handleHovering: m,
      handleClick: k,
      handleSelect: T
    };
  }
});
zh.render = DO;
var Ci = zh;
re(Ci);
ie(Ci, Ph);
const DD = Ci;
var ia = Ci;
const Eh = {
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
  onClick: F(),
  onKeyEscape: F(),
  "onUpdate:show": F()
}, {
  name: IO,
  n: Pr
} = ne("overlay");
var Si = ee({
  name: IO,
  inheritAttrs: !1,
  props: Eh,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const {
      zIndex: t
    } = ir(() => e.show, 3), {
      onStackTop: r
    } = su(() => e.show, t), {
      disabled: a
    } = xo();
    ar(() => e.show, () => e.lockScroll), He(() => window, "keydown", i);
    function i(c) {
      !r() || c.key !== "Escape" || !e.show || ($(e.onKeyEscape), e.closeOnKeyEscape && (Me(c), $(e["onUpdate:show"], !1)));
    }
    function l() {
      $(e.onClick), $(e["onUpdate:show"], !1);
    }
    function s() {
      return X("div", je({
        class: Pr(),
        style: {
          zIndex: t.value - 2
        }
      }, o), [X("div", {
        class: Pr("overlay"),
        style: {
          zIndex: t.value - 1
        },
        onClick: l
      }, null), X("div", {
        class: Pr("content"),
        style: {
          zIndex: t.value
        }
      }, [$(n.default)])]);
    }
    function u() {
      return X(xe, {
        name: Pr("--fade")
      }, {
        default: () => [e.show && s()]
      });
    }
    return () => {
      const {
        teleport: c
      } = e;
      return c ? X(lo, {
        to: c,
        disabled: a.value
      }, {
        default: () => [u()]
      }) : u();
    };
  }
});
re(Si);
ie(Si, Eh);
const ID = Si;
var ps = Si;
const Th = {
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
  onChange: F(),
  "onUpdate:current": F(),
  "onUpdate:size": F()
}, { name: AO, n: MO, classes: NO } = ne("pagination"), VO = ["item-mode", "onClick"];
function RO(e, n) {
  const o = _("var-icon"), t = _("var-input"), r = _("var-menu-option"), a = _("var-menu-select"), i = We("ripple");
  return g(), P(
    "ul",
    {
      class: p(e.n())
    },
    [
      Ne((g(), P(
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
            X(o, { name: "chevron-left" })
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
          X(t, {
            modelValue: e.simpleCurrentValue,
            "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleCurrentValue = l),
            "var-pagination-cover": "",
            variant: "standard",
            hint: !1,
            disabled: e.disabled,
            onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleCurrentValue, l)),
            onKeydown: n[3] || (n[3] = Ru((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
          }, null, 8, ["modelValue", "disabled"]),
          R("span", null, [
            De(
              " / " + le(e.pageCount) + " ",
              1
              /* TEXT */
            ),
            R(
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
        Ae,
        { key: 1 },
        qe(e.pageList, (l, s) => Ne((g(), P("li", {
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
            le(l),
            1
            /* TEXT */
          )
        ], 10, VO)), [
          [i, { disabled: e.disabled }]
        ])),
        128
        /* KEYED_FRAGMENT */
      )),
      Ne((g(), P(
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
            X(o, { name: "chevron-right" })
          ])
        ],
        2
        /* CLASS */
      )), [
        [i, { disabled: e.current >= e.pageCount || e.disabled }]
      ]),
      e.showSizeChanger ? (g(), we(a, {
        key: 2,
        modelValue: e.size,
        "onUpdate:modelValue": n[5] || (n[5] = (l) => e.size = l),
        placement: "cover-top",
        disabled: e.disabled
      }, {
        options: ue(() => [
          (g(!0), P(
            Ae,
            null,
            qe(e.sizeOption, (l, s) => (g(), we(r, {
              key: s,
              value: l,
              onClick: e.clickSize
            }, {
              default: ue(() => [
                De(
                  le(l) + le((e.pt ? e.pt : e.t)("paginationItem")) + " / " + le((e.pt ? e.pt : e.t)("paginationPage")),
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
        default: ue(() => [
          R(
            "li",
            {
              class: p(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
            },
            [
              R(
                "div",
                {
                  class: p(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")]))
                },
                [
                  R(
                    "span",
                    null,
                    le(e.size) + le((e.pt ? e.pt : e.t)("paginationItem")) + " / " + le((e.pt ? e.pt : e.t)("paginationPage")),
                    1
                    /* TEXT */
                  ),
                  X(o, {
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
      }, 8, ["modelValue", "disabled"])) : G("v-if", !0),
      e.showQuickJumper && !e.simple ? (g(), P(
        "li",
        {
          key: 3,
          class: p(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
        },
        [
          De(
            le((e.pt ? e.pt : e.t)("paginationJump")) + " ",
            1
            /* TEXT */
          ),
          X(t, {
            modelValue: e.quickJumperValue,
            "onUpdate:modelValue": n[6] || (n[6] = (l) => e.quickJumperValue = l),
            disabled: e.disabled,
            hint: !1,
            variant: "standard",
            "var-pagination-cover": "",
            onBlur: n[7] || (n[7] = (l) => e.setPage("quick", e.quickJumperValue, l)),
            onKeydown: n[8] || (n[8] = Ru((l) => e.setPage("quick", e.quickJumperValue, l), ["enter"]))
          }, null, 8, ["modelValue", "disabled"])
        ],
        2
        /* CLASS */
      )) : G("v-if", !0),
      e.totalText ? (g(), P(
        "li",
        {
          key: 4,
          class: p(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
        },
        le(e.totalText),
        3
        /* TEXT, CLASS */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Bh = ee({
  name: AO,
  components: {
    VarMenuSelect: jt,
    VarMenuOption: dt,
    VarIcon: Ge,
    VarInput: Lt
  },
  directives: { Ripple: rn },
  props: Th,
  setup(e) {
    const n = w(""), o = w("1"), t = w(!1), r = w(!1), a = w(W(e.current) || 1), i = w(W(e.size) || 10), l = w([]), s = B(() => Math.ceil(e.maxPagerCount / 2)), u = B(() => Math.ceil(W(e.total) / W(i.value))), c = B(() => {
      const b = i.value * (a.value - 1) + 1, S = Math.min(i.value * a.value, W(e.total));
      return [b, S];
    }), d = B(() => e.showTotal ? e.showTotal(W(e.total), c.value) : ""), { t: f } = so();
    fe([() => e.current, () => e.size], ([b, S]) => {
      a.value = W(b) || 1, i.value = W(S || 10);
    }), fe(
      [a, i, u],
      ([b, S, T], [O, D]) => {
        let M = [];
        const { maxPagerCount: V, total: L, onChange: Y } = e, z = Math.ceil(W(L) / W(D)), I = T - (V - s.value) - 1;
        if (o.value = `${b}`, T - 2 > V) {
          if (O === void 0 || T !== z)
            for (let N = 2; N < V + 2; N++)
              M.push(N);
          if (b <= V && b < I) {
            M = [];
            for (let N = 1; N < V + 1; N++)
              M.push(N + 1);
            t.value = !0, r.value = !1;
          }
          if (b > V && b < I) {
            M = [];
            for (let N = 1; N < V + 1; N++)
              M.push(b + N - s.value);
            t.value = b === 2 && V === 1, r.value = !1;
          }
          if (b >= I) {
            M = [];
            for (let N = 1; N < V + 1; N++)
              M.push(T - (V - N) - 1);
            t.value = !1, r.value = !0;
          }
          M = [1, "...", ...M, "...", T];
        } else
          for (let N = 1; N <= T; N++)
            M.push(N);
        l.value = M, O != null && T > 0 && $(Y, b, S), $(e["onUpdate:current"], b), $(e["onUpdate:size"], S);
      },
      {
        immediate: !0
      }
    );
    function v(b, S) {
      return En(b) ? !1 : S === 1 ? t.value : r.value;
    }
    function h(b, S) {
      return En(b) ? "basic" : S === 1 ? "head" : "tail";
    }
    function m(b, S) {
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
        En(b) && (a.value = b);
      }
    }
    function y() {
      const b = C(a.value);
      o.value = String(b), a.value = b;
    }
    function C(b) {
      return b > u.value ? u.value : b < 1 ? 1 : b;
    }
    function k(b, S, T) {
      T.target.blur();
      const O = C(W(S));
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
      n: MO,
      classes: NO,
      getMode: h,
      isHideEllipsis: v,
      clickItem: m,
      clickSize: y,
      setPage: k,
      toNumber: W,
      formatElevation: dn
    };
  }
});
Bh.render = RO;
var Pi = Bh;
re(Pi);
ie(Pi, Th);
const AD = Pi;
var vs = Pi;
const Dh = {
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
  onClick: F()
}, { name: LO, n: FO, classes: UO } = ne("paper");
function HO(e, n) {
  const o = We("ripple");
  return Ne((g(), P(
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
      style: Z({
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
const Ih = ee({
  name: LO,
  directives: { Ripple: rn },
  props: Dh,
  setup(e) {
    function n(o) {
      $(e.onClick, o);
    }
    return {
      n: FO,
      classes: UO,
      formatElevation: dn,
      toSizeUnit: ze,
      handleClick: n
    };
  }
});
Ih.render = HO;
var Oi = Ih;
re(Oi);
ie(Oi, Dh);
const MD = Oi;
var ms = Oi, jO = Object.defineProperty, Wd = Object.getOwnPropertySymbols, YO = Object.prototype.hasOwnProperty, WO = Object.prototype.propertyIsEnumerable, Kd = (e, n, o) => n in e ? jO(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, KO = (e, n) => {
  for (var o in n || (n = {}))
    YO.call(n, o) && Kd(e, o, n[o]);
  if (Wd)
    for (var o of Wd(n))
      WO.call(n, o) && Kd(e, o, n[o]);
  return e;
};
const Ah = KO({
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
  onChange: F(),
  onConfirm: F(),
  onCancel: F(),
  "onUpdate:modelValue": F()
}, Ie(Ct, [
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
])), { name: qO, n: XO, classes: GO } = ne("picker"), qd = 300, ZO = 15, Xd = 200, JO = 1e3;
let Gd = 0;
const QO = ["onTouchstartPassive", "onTouchmove", "onTouchend"], _O = ["onTransitionend"], xO = ["onClick"];
function ez(e, n) {
  const o = _("var-button");
  return g(), we(
    wt(e.dynamic ? e.n("$-popup") : e.Transition),
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
      default: ue(() => [
        R(
          "div",
          je({
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
                  X(o, {
                    class: p(e.n("cancel-button")),
                    "var-picker-cover": "",
                    text: "",
                    "text-color": e.cancelButtonTextColor,
                    onClick: e.cancel
                  }, {
                    default: ue(() => {
                      var t;
                      return [
                        De(
                          le((t = e.cancelButtonText) != null ? t : (e.pt ? e.pt : e.t)("pickerCancelButtonText")),
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
                    R(
                      "div",
                      {
                        class: p(e.n("title"))
                      },
                      le((t = e.title) != null ? t : (e.pt ? e.pt : e.t)("pickerTitle")),
                      3
                      /* TEXT, CLASS */
                    )
                  ];
                }),
                H(e.$slots, "confirm", {}, () => [
                  X(o, {
                    class: p(e.n("confirm-button")),
                    text: "",
                    "var-picker-cover": "",
                    "text-color": e.confirmButtonTextColor,
                    onClick: e.confirm
                  }, {
                    default: ue(() => {
                      var t;
                      return [
                        De(
                          le((t = e.confirmButtonText) != null ? t : (e.pt ? e.pt : e.t)("pickerConfirmButtonText")),
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
            )) : G("v-if", !0),
            R(
              "div",
              {
                class: p(e.n("columns")),
                style: Z({ height: `${e.columnHeight}px` })
              },
              [
                (g(!0), P(
                  Ae,
                  null,
                  qe(e.scrollColumns, (t) => (g(), P("div", {
                    key: t.id,
                    class: p(e.n("column")),
                    onTouchstartPassive: (r) => e.handleTouchstart(r, t),
                    onTouchmove: Rn((r) => e.handleTouchmove(r, t), ["prevent"]),
                    onTouchend: (r) => e.handleTouchend(t)
                  }, [
                    R("div", {
                      ref_for: !0,
                      ref: (r) => e.setScrollEl(r, t),
                      class: p(e.n("scroller")),
                      style: Z({
                        transform: `translateY(${t.translate}px)`,
                        transitionDuration: `${t.duration}ms`,
                        transitionProperty: t.duration ? "transform" : "none"
                      }),
                      onTransitionend: (r) => e.handleTransitionend(t)
                    }, [
                      (g(!0), P(
                        Ae,
                        null,
                        qe(t.column, (r, a) => (g(), P("div", {
                          key: e.getValue(r),
                          class: p(e.classes(e.n("option"), r.className)),
                          style: Z({ height: `${e.optionHeight}px` }),
                          onClick: (i) => e.handleClick(t, a)
                        }, [
                          R(
                            "div",
                            {
                              class: p(e.classes(e.n("text"), r.textClassName))
                            },
                            le(r[e.getOptionKey("text")]),
                            3
                            /* TEXT, CLASS */
                          )
                        ], 14, xO))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ], 46, _O)
                  ], 42, QO))),
                  128
                  /* KEYED_FRAGMENT */
                )),
                R(
                  "div",
                  {
                    class: p(e.n("picked")),
                    style: Z({
                      top: `${e.center}px`,
                      height: `${e.optionHeight}px`
                    })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ),
                R(
                  "div",
                  {
                    class: p(e.n("mask")),
                    style: Z({ backgroundSize: `100% ${(e.columnHeight - e.optionHeight) / 2}px` })
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
const Mh = ee({
  name: qO,
  components: {
    VarButton: Bn,
    VarPopup: Mo
  },
  inheritAttrs: !1,
  props: Ah,
  setup(e) {
    const n = Gn(e, "modelValue"), o = w([]), t = B(() => W(e.columnsCount)), r = B(() => on(e.optionHeight)), a = B(() => on(e.optionCount)), i = B(() => a.value * r.value / 2 - r.value / 2), l = B(() => a.value * r.value), { prevY: s, moveY: u, dragging: c, startTouch: d, moveTouch: f, endTouch: v } = kt(), { t: h } = so();
    let m = [];
    D(), fe(() => e.columns, D, { deep: !0 }), fe(() => n.value, D);
    function y(A) {
      return {
        text: e.textKey,
        value: e.valueKey,
        children: e.childrenKey
      }[A];
    }
    function C(A) {
      var K;
      return (K = A[y("value")]) != null ? K : A[y("text")];
    }
    function k(A) {
      m = [...A];
    }
    function b(A) {
      return (e.columnsCount != null ? A.slice(0, t.value) : A).map((pe, Se) => {
        const Ue = {
          id: Gd++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: i.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: pe,
          scrollEl: null,
          scrolling: !1
        }, Ve = n.value[Se], Qe = Ue.column.findIndex((un) => Ve === C(un));
        return Ue.index = Qe === -1 ? 0 : Qe, N(Ue), Ue;
      });
    }
    function S(A) {
      const K = [];
      return T(K, A), K;
    }
    function T(A, K, pe = !0, Se = 1) {
      var Ue;
      if (K.length && (e.columnsCount == null || Se <= t.value)) {
        const Ve = {
          id: Gd++,
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
        if (A.push(Ve), pe) {
          const Qe = n.value[A.length - 1], un = K.findIndex((Sn) => Qe === C(Sn));
          Ve.index = un === -1 ? 0 : un;
        }
        N(Ve), T(
          A,
          (Ue = Ve.column[Ve.index][y("children")]) != null ? Ue : [],
          pe,
          Se + 1
        );
      }
    }
    function O(A) {
      var K;
      o.value.splice(o.value.indexOf(A) + 1), T(
        o.value,
        (K = A.column[A.index][y("children")]) != null ? K : [],
        !1,
        o.value.length + 1
      );
    }
    function D() {
      o.value = e.cascade ? S(e.columns) : b(e.columns);
      const { indexes: A } = I();
      k(A);
    }
    function M(A, K) {
      K.scrollEl = A;
    }
    function V(A) {
      $(e["onUpdate:show"], A);
    }
    function L(A) {
      const K = i.value - A.column.length * r.value, pe = r.value + i.value;
      A.translate = $n(A.translate, K, pe);
    }
    function Y(A, K) {
      const pe = Math.round((i.value - K) / r.value);
      return Of(pe, A.column);
    }
    function z(A) {
      return A.translate = i.value - A.index * r.value, A.translate;
    }
    function I() {
      const A = [], K = [], pe = [];
      return o.value.forEach(({ column: Se, index: Ue }) => {
        const Ve = Se[Ue];
        A.push(C(Ve)), K.push(Ue), pe.push(Ve);
      }), {
        values: A,
        indexes: K,
        options: pe
      };
    }
    function N(A, K = 0) {
      z(A), A.duration = K;
    }
    function j(A, K, pe) {
      A.translate += Math.abs(K / pe) / 3e-3 * (K < 0 ? -1 : 1);
    }
    function E(A, K) {
      c.value || (A.index = K, N(A, Xd));
    }
    function J(A, K) {
      K.touching = !0, K.translate = el(K.scrollEl), d(A);
    }
    function de(A, K) {
      if (!K.touching)
        return;
      f(A), K.scrolling = !1, K.duration = 0, K.prevY = s.value, K.translate += u.value, L(K);
      const pe = performance.now();
      pe - K.momentumTime > qd && (K.momentumTime = pe, K.momentumPrevY = K.translate);
    }
    function q(A) {
      v(), A.touching = !1, A.prevY = 0;
      const K = A.translate - A.momentumPrevY, pe = performance.now() - A.momentumTime, Se = Math.abs(K) >= ZO && pe <= qd, Ue = A.translate;
      Se && j(A, K, pe), A.index = Y(A, A.translate), N(A, Se ? JO : Xd), A.scrolling = A.translate !== Ue, A.scrolling || U(A);
    }
    function me(A) {
      A.scrolling = !1, U(A);
    }
    function Pe() {
      const { indexes: A } = I();
      return A.every((K, pe) => K === m[pe]);
    }
    function U(A) {
      const { onChange: K, cascade: pe } = e;
      if (Pe())
        return;
      pe && O(A);
      const Se = o.value.some((Sn) => Sn.scrolling), Ue = o.value.some((Sn) => Sn.touching);
      if (Se || Ue)
        return;
      const { values: Ve, indexes: Qe, options: un } = I();
      k(Qe), $(K, Ve, Qe, un), n.value = Ve;
    }
    function Q() {
      if (e.cascade) {
        const A = o.value.find((K) => K.scrolling);
        A && (A.index = Y(A, el(A.scrollEl)), A.scrolling = !1, N(A), O(A));
      } else
        o.value.forEach((A) => {
          A.index = Y(A, el(A.scrollEl)), N(A);
        });
    }
    function te() {
      Q();
      const { values: A, indexes: K, options: pe } = I();
      k(K), $(e.onConfirm, A, K, pe);
    }
    function he() {
      Q();
      const { values: A, indexes: K, options: pe } = I();
      k(K), $(e.onCancel, A, K, pe);
    }
    return {
      optionHeight: r,
      optionCount: a,
      scrollColumns: o,
      columnHeight: l,
      center: i,
      Transition: xe,
      pt: h,
      t: an,
      n: XO,
      classes: GO,
      setScrollEl: M,
      getOptionKey: y,
      getValue: C,
      handlePopupUpdateShow: V,
      handleTouchstart: J,
      handleTouchmove: de,
      handleTouchend: q,
      handleTransitionend: me,
      confirm: te,
      cancel: he,
      handleClick: E
    };
  }
});
Mh.render = ez;
var pr = Mh;
let st;
function Pt(e) {
  return new Promise((n) => {
    Pt.close();
    const o = Fe(e) ? { columns: e } : e, t = en(o);
    t.dynamic = !0, t.teleport = "body", st = t;
    function r() {
      st === t && (st = null);
    }
    const { unmountInstance: a } = $t(pr, t, {
      onConfirm: (i, l, s) => {
        $(t.onConfirm, i, l, s), n({
          state: "confirm",
          values: i,
          indexes: l,
          options: s
        }), t.show = !1, r();
      },
      onCancel: (i, l, s) => {
        $(t.onCancel, i, l, s), n({
          state: "cancel",
          values: i,
          indexes: l,
          options: s
        }), t.show = !1, r();
      },
      onClose: () => {
        $(t.onClose), n({
          state: "close"
        }), r();
      },
      onClosed: () => {
        $(t.onClosed), a(), r();
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
Pt.close = function() {
  if (st == null)
    return;
  const e = st;
  st = null, Ye().then(() => {
    e.show = !1;
  });
};
Pt.Component = pr;
re(pr);
re(pr, Pt);
ie(Pt, Ah);
const ND = pr;
var hs = Pt;
const Nh = {
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
}, ot = 100, Or = 0, ko = 20, Zd = 2 * Math.PI * ko, { name: nz, n: oz, classes: tz } = ne("progress"), rz = ["aria-valuenow"], az = ["viewBox"], iz = { key: 0 }, lz = ["id"], sz = ["offset", "stop-color"], uz = ["d", "stroke-width", "stroke-dasharray"], cz = ["d", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function dz(e, n) {
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
        R(
          "div",
          {
            class: p(e.classes(e.n("linear-block"), [e.track, e.n("linear-background")])),
            style: Z({ height: e.toSizeUnit(e.lineWidth), background: e.trackColor })
          },
          [
            e.indeterminate ? (g(), P(
              "div",
              {
                key: 0,
                class: p(e.n("linear-indeterminate"))
              },
              [
                R(
                  "div",
                  {
                    class: p(e.classes(e.n(`linear--${e.type}`))),
                    style: Z({ background: e.progressColor })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ),
                R(
                  "div",
                  {
                    class: p(e.classes(e.n(`linear--${e.type}`))),
                    style: Z({ background: e.progressColor })
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
                style: Z({ background: e.progressColor, width: e.linearProps.width })
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
              De(
                le(e.linearProps.roundValue),
                1
                /* TEXT */
              )
            ])
          ],
          2
          /* CLASS */
        )) : G("v-if", !0)
      ],
      2
      /* CLASS */
    )) : G("v-if", !0),
    e.mode === "circle" ? (g(), P(
      "div",
      {
        key: 1,
        class: p(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
        style: Z({ width: e.toSizeUnit(e.size), height: e.toSizeUnit(e.size) })
      },
      [
        (g(), P("svg", {
          class: p(e.n("circle-svg")),
          viewBox: e.circleProps.viewBox
        }, [
          e.isPlainObject(e.color) ? (g(), P("defs", iz, [
            R("linearGradient", {
              id: e.id,
              x1: "100%",
              y1: "0%",
              x2: "0%",
              y2: "0%"
            }, [
              (g(!0), P(
                Ae,
                null,
                qe(e.linearGradientProgress, (o, t) => (g(), P("stop", {
                  key: t,
                  offset: o,
                  "stop-color": e.color[o]
                }, null, 8, sz))),
                128
                /* KEYED_FRAGMENT */
              ))
            ], 8, lz)
          ])) : G("v-if", !0),
          e.track ? (g(), P("path", {
            key: 1,
            class: p(e.n("circle-background")),
            d: e.circleProps.path,
            fill: "transparent",
            "stroke-width": e.circleProps.strokeWidth,
            "stroke-dasharray": e.CIRCUMFERENCE,
            style: Z({
              stroke: e.trackColor
            })
          }, null, 14, uz)) : G("v-if", !0),
          R("path", {
            class: p(e.classes(e.n("circle-certain"), e.n(`circle--${e.type}`), [e.indeterminate, e.n("circle-overlay")])),
            d: e.circleProps.path,
            fill: "transparent",
            "stroke-width": e.circleProps.strokeWidth,
            "stroke-dasharray": e.CIRCUMFERENCE,
            "stroke-dashoffset": e.circleProps.strokeOffset,
            style: Z({
              stroke: e.progressColor,
              transform: `rotateZ(${e.rotate}deg)`,
              transformOrigin: "50% 50%"
            })
          }, null, 14, cz)
        ], 10, az)),
        e.label ? (g(), P(
          "div",
          {
            key: 0,
            class: p(e.classes(e.n("circle-label"), e.labelClass))
          },
          [
            H(e.$slots, "default", {}, () => [
              De(
                le(e.circleProps.roundValue),
                1
                /* TEXT */
              )
            ])
          ],
          2
          /* CLASS */
        )) : G("v-if", !0)
      ],
      6
      /* CLASS, STYLE */
    )) : G("v-if", !0)
  ], 10, rz);
}
const Vh = ee({
  name: nz,
  props: Nh,
  setup(e) {
    const n = ep(), o = B(() => {
      const i = W(e.value), l = $n(i, Or, ot), s = $n(Math.round(i), Or, ot);
      return {
        width: `${l}%`,
        roundValue: `${s}%`,
        value: l
      };
    }), t = B(() => {
      const { size: i, lineWidth: l, value: s } = e, u = ko / (1 - on(l) / on(i)) * 2, c = `0 0 ${u} ${u}`, d = $n(Math.round(W(s)), Or, ot), f = `${(ot - d) / ot * Zd}`, v = on(l) / on(i) * u, h = 0, m = -20, y = 0, C = -2 * ko, k = `M ${u / 2} ${u / 2} m ${h} ${m} a ${ko} ${ko} 
        0 1 1 ${y} 40 a ${ko} ${ko} 0 1 1 0 ${C}`;
      return {
        strokeWidth: v,
        viewBox: c,
        strokeOffset: f,
        roundValue: `${d}%`,
        path: k,
        value: $n(W(s), Or, ot)
      };
    }), r = B(() => Ln(e.color) ? `url(#${n.value})` : e.color), a = B(
      () => Object.keys(e.color).sort((i, l) => parseFloat(i) - parseFloat(l))
    );
    return {
      id: n,
      linearProps: o,
      CIRCUMFERENCE: Zd,
      RADIUS: ko,
      circleProps: t,
      progressColor: r,
      linearGradientProgress: a,
      n: oz,
      classes: tz,
      toSizeUnit: ze,
      isPlainObject: Ln
    };
  }
});
Vh.render = dz;
var zi = Vh;
re(zi);
ie(zi, Nh);
const VD = zi;
var gs = zi;
const Rh = {
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
  onRefresh: F(),
  "onUpdate:modelValue": F()
};
var fz = (e, n, o) => new Promise((t, r) => {
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
const { name: pz, n: Jd, classes: vz } = ne("pull-refresh"), Qd = 150;
function mz(e, n) {
  const o = _("var-icon");
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
      R(
        "div",
        {
          ref: "controlNode",
          class: p(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
          style: Z(e.controlStyle)
        },
        [
          X(o, {
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
const Lh = ee({
  name: pz,
  components: { VarIcon: Ge },
  props: Rh,
  setup(e) {
    const n = w(0), o = w(null), t = w(null), r = w(0), a = w("-125%"), i = w("arrow-down"), l = w("default"), s = w(!1), u = B(() => Math.abs(2 * n.value)), c = B(() => l.value === "success"), d = B(
      () => l.value !== "loading" && l.value !== "success" && !e.disabled
    ), f = B(() => ({
      transform: `translate3d(0px, ${sn(a.value) ? a.value : `${a.value}px`}, 0px) translate(-50%, 0)`,
      transition: s.value ? `transform ${e.animationDuration}ms` : void 0,
      background: c.value ? e.successBgColor : e.bgColor,
      color: c.value ? e.successColor : e.color
    })), { startTouch: v, moveTouch: h, endTouch: m, isReachTop: y } = kt();
    let C, k;
    fe(
      () => e.modelValue,
      (L) => {
        L === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
          a.value = n.value, V();
        }, W(e.successDuration)));
      }
    ), yn(M), He(o, "touchmove", O);
    function b(L) {
      if (i.value !== L)
        return i.value = L, new Promise((Y) => {
          window.setTimeout(Y, Qd);
        });
    }
    function S(L) {
      ("classList" in C ? C : document.body).classList[L](`${Jd()}--lock`);
    }
    function T(L) {
      if (v(L), n.value === 0) {
        const { width: Y } = nn(t.value);
        n.value = -(Y + Y * 0.25);
      }
      k = No(L.target);
    }
    function O(L) {
      if (h(L), !d.value || !k || k !== C && ho(k) > 0 || ho(C) > 0)
        return;
      y(C) && Me(L), l.value !== "pulling" && (l.value = "pulling", r.value = L.touches[0].clientY), y(C) && En(a.value) && a.value > n.value && S("add");
      const z = (L.touches[0].clientY - r.value) / 2 + n.value;
      a.value = z >= u.value ? u.value : z, b(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function D() {
      return fz(this, null, function* () {
        m(), d.value && (s.value = !0, W(a.value) >= u.value * 0.2 ? (yield b("refresh"), l.value = "loading", a.value = u.value * 0.3, $(e["onUpdate:modelValue"], !0), Ye(() => {
          $(e.onRefresh);
        }), S("remove")) : (l.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          s.value = !1, S("remove");
        }, W(e.animationDuration))), k = null);
      });
    }
    function M() {
      C = e.target ? Op(e.target, "PullRefresh") : No(o.value);
    }
    function V() {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, W(e.animationDuration));
    }
    return {
      ICON_TRANSITION: Qd,
      refreshStatus: l,
      freshNode: o,
      controlNode: t,
      iconName: i,
      controlStyle: f,
      isSuccess: c,
      n: Jd,
      classes: vz,
      handleTouchstart: T,
      handleTouchmove: O,
      handleTouchend: D
    };
  }
});
Lh.render = mz;
var Ei = Lh;
re(Ei);
ie(Ei, Rh);
const RD = Ei;
var bs = Ei;
const Fh = {
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
  onClick: F(),
  onChange: F(),
  "onUpdate:modelValue": F()
}, Uh = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function hz() {
  const { bindChildren: e, childProviders: n, length: o } = kn(
    Uh
  );
  return {
    length: o,
    radios: n,
    bindRadios: e
  };
}
function gz() {
  const { bindParent: e, parentProvider: n, index: o } = wn(Uh);
  return {
    index: o,
    radioGroup: n,
    bindRadioGroup: e
  };
}
const { name: bz, n: yz, classes: wz } = ne("radio"), kz = ["aria-checked", "aria-disabled", "tabindex"];
function $z(e, n) {
  const o = _("var-icon"), t = _("var-hover-overlay"), r = _("var-form-details"), a = We("ripple"), i = We("hover");
  return g(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      R("div", je({
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
        Ne((g(), P(
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
            style: Z({ color: e.checked ? e.checkedColor : e.uncheckedColor })
          },
          [
            e.checked ? H(e.$slots, "checked-icon", { key: 0 }, () => [
              X(o, {
                class: p(e.n("icon")),
                "var-radio-cover": "",
                name: "radio-marked",
                size: e.iconSize
              }, null, 8, ["class", "size"])
            ]) : H(e.$slots, "unchecked-icon", { key: 1 }, () => [
              X(o, {
                class: p(e.n("icon")),
                "var-radio-cover": "",
                name: "radio-blank",
                size: e.iconSize
              }, null, 8, ["class", "size"])
            ]),
            X(t, {
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
        )) : G("v-if", !0)
      ], 16, kz),
      X(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Hh = ee({
  name: bz,
  directives: { Ripple: rn, Hover: In },
  components: {
    VarIcon: Ge,
    VarFormDetails: Tn,
    VarHoverOverlay: Un
  },
  inheritAttrs: !1,
  props: Fh,
  setup(e) {
    const n = w(), o = w(!1), t = Gn(e, "modelValue"), r = B(() => t.value === e.checkedValue), { radioGroup: a, bindRadioGroup: i } = gz(), { hovering: l, handleHovering: s } = no(), { form: u, bindForm: c } = jn(), d = B(() => {
      const Y = (u == null ? void 0 : u.disabled.value) || e.disabled, z = r.value, I = a == null ? void 0 : a.hasChecked.value;
      if (!Y)
        return a && I && !z ? "-1" : "0";
    }), {
      errorMessage: f,
      validateWithTrigger: v,
      validate: h,
      // expose
      resetValidation: m
    } = Hn(), y = {
      sync: D,
      validate: V,
      resetValidation: m,
      reset: M,
      isFocusing: B(() => o.value),
      // keyboard arrow move
      move() {
        n.value.focus(), n.value.click();
      },
      moveable() {
        return !(u != null && u.disabled.value) && !e.disabled && !(u != null && u.readonly.value) && !e.readonly;
      }
    };
    $(i, y), $(c, y), He(() => window, "keydown", C), He(() => window, "keyup", k);
    function C(Y) {
      if (!o.value)
        return;
      const { key: z } = Y;
      (z === "Enter" || z === " ") && Me(Y), z === "Enter" && n.value.click();
    }
    function k(Y) {
      o.value && Y.key === " " && (Me(Y), n.value.click());
    }
    function b(Y) {
      Ye(() => {
        const { validateTrigger: z, rules: I, modelValue: N } = e;
        v(z, Y, I, N);
      });
    }
    function S(Y) {
      const { checkedValue: z, onChange: I } = e;
      a && t.value === z || (t.value = Y, $(I, t.value), a == null || a.onToggle(z), b("onChange"));
    }
    function T(Y) {
      const { disabled: z, readonly: I, uncheckedValue: N, checkedValue: j, onClick: E } = e;
      u != null && u.disabled.value || z || ($(E, Y), !(u != null && u.readonly.value || I) && S(r.value ? N : j));
    }
    function O() {
      n.value.focus();
    }
    function D(Y) {
      const { checkedValue: z, uncheckedValue: I } = e, N = Y === z;
      return t.value = N ? z : I, N;
    }
    function M() {
      t.value = e.uncheckedValue, m();
    }
    function V() {
      return h(e.rules, e.modelValue);
    }
    function L(Y) {
      const { uncheckedValue: z, checkedValue: I } = e;
      ![z, I].includes(Y) && (Y = r.value ? z : I), S(Y);
    }
    return {
      radio: n,
      isFocusing: o,
      checked: r,
      errorMessage: f,
      radioGroupErrorMessage: a == null ? void 0 : a.errorMessage,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      hovering: l,
      tabIndex: d,
      handleHovering: s,
      n: yz,
      classes: wz,
      handleClick: T,
      handleTextClick: O,
      toggle: L,
      reset: M,
      validate: V,
      resetValidation: m
    };
  }
});
Hh.render = $z;
var Ti = Hh;
re(Ti);
ie(Ti, Fh);
const LD = Ti;
var la = Ti;
const jh = {
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
  onChange: F(),
  "onUpdate:modelValue": F()
}, { name: Cz, n: Sz, classes: Pz } = ne("radio-group"), Oz = ["aria-label"];
function zz(e, n) {
  const o = _("maybe-v-node"), t = _("var-radio"), r = _("var-form-details");
  return g(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      R("div", {
        "aria-label": e.ariaLabel,
        role: "radiogroup",
        class: p(e.classes(e.n(), e.n(`--${e.direction}`)))
      }, [
        e.options.length ? (g(!0), P(
          Ae,
          { key: 0 },
          qe(e.options, (a) => (g(), we(t, {
            key: a[e.valueKey],
            "checked-value": a[e.valueKey],
            disabled: a.disabled
          }, {
            default: ue(({ checked: i }) => [
              X(o, {
                is: e.isFunction(a[e.labelKey]) ? a[e.labelKey](a, i) : a[e.labelKey]
              }, null, 8, ["is"])
            ]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["checked-value", "disabled"]))),
          128
          /* KEYED_FRAGMENT */
        )) : G("v-if", !0),
        H(e.$slots, "default")
      ], 10, Oz),
      X(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Yh = ee({
  name: Cz,
  components: { VarFormDetails: Tn, VarRadio: la, MaybeVNode: rr },
  props: jh,
  setup(e) {
    const { length: n, radios: o, bindRadios: t } = hz(), { bindForm: r } = jn(), {
      errorMessage: a,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = Hn(), u = B(() => a.value), c = w(!1), d = {
      onToggle: y,
      validate: C,
      reset: k,
      resetValidation: s,
      hasChecked: B(() => c.value),
      errorMessage: u
    };
    fe(() => e.modelValue, m), fe(() => n.value, m), $(r, d), t(d), He(() => window, "keydown", f);
    function f(b) {
      const S = o.findIndex(({ isFocusing: O }) => O.value);
      if (!(S === -1 || !o.some(({ moveable: O }, D) => D === S ? !1 : O()))) {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(b.key) && Me(b), b.key === "ArrowUp" || b.key === "ArrowLeft") {
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
    function h(b) {
      Ye(() => {
        const { validateTrigger: S, rules: T, modelValue: O } = e;
        i(S, b, T, O);
      });
    }
    function m() {
      o.forEach(({ sync: b }) => {
        b(e.modelValue) && (c.value = !0);
      });
    }
    function y(b) {
      $(e["onUpdate:modelValue"], b), $(e.onChange, b), h("onChange");
    }
    function C() {
      return l(e.rules, e.modelValue);
    }
    function k() {
      $(e["onUpdate:modelValue"], void 0), s();
    }
    return {
      errorMessage: a,
      n: Sz,
      classes: Pz,
      reset: k,
      validate: C,
      resetValidation: s,
      isFunction: mn
    };
  }
});
Yh.render = zz;
var Bi = Yh;
re(Bi);
ie(Bi, jh);
const FD = Bi;
var ys = Bi;
const Wh = {
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
  namespace: Ie(tn, "namespace"),
  emptyIconNamespace: Ie(tn, "namespace"),
  halfIconNamespace: Ie(tn, "namespace"),
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
  onChange: F(),
  "onUpdate:modelValue": F()
}, { name: Ez, n: Et } = ne("rate"), Tz = ["onClick"];
function Bz(e, n) {
  const o = _("var-icon"), t = _("var-hover-overlay"), r = _("var-form-details"), a = We("ripple"), i = We("hover");
  return g(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      R(
        "div",
        {
          class: p(e.n())
        },
        [
          (g(!0), P(
            Ae,
            null,
            qe(e.toNumber(e.count), (l) => Ne((g(), P("div", {
              key: l,
              style: Z(e.getStyle(l)),
              class: p(e.getClass(l)),
              onClick: (s) => e.handleClick(l, s)
            }, [
              X(o, {
                class: p(e.n("content-icon")),
                "var-rate-cover": "",
                transition: 0,
                namespace: e.getCurrentState(l).namespace,
                name: e.getCurrentState(l).name,
                style: Z({ fontSize: e.toSizeUnit(e.size) })
              }, null, 8, ["class", "namespace", "name", "style"]),
              X(t, {
                hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled
              }, null, 8, ["hovering"])
            ], 14, Tz)), [
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
      X(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Kh = ee({
  name: Ez,
  components: {
    VarIcon: Ge,
    VarFormDetails: Tn,
    VarHoverOverlay: Un
  },
  directives: { Ripple: rn, Hover: In },
  props: Wh,
  setup(e) {
    const n = w(-1), { form: o, bindForm: t } = jn(), { errorMessage: r, validateWithTrigger: a, validate: i, resetValidation: l } = Hn(), { hovering: s } = no();
    let u = W(e.modelValue);
    $(t, {
      reset: b,
      validate: m,
      resetValidation: l
    });
    function d(S) {
      const { count: T, gap: O } = e;
      return {
        color: v(S).color,
        marginRight: S !== W(T) ? ze(O) : 0
      };
    }
    function f(S) {
      const { name: T, color: O } = v(S);
      return {
        [Et("content")]: !0,
        [Et("--disabled")]: (o == null ? void 0 : o.disabled.value) || e.disabled,
        [Et("--error")]: r.value,
        [Et("--primary")]: T !== e.emptyIcon && !O
      };
    }
    function v(S) {
      const {
        modelValue: T,
        disabled: O,
        disabledColor: D,
        color: M,
        half: V,
        emptyColor: L,
        icon: Y,
        halfIcon: z,
        emptyIcon: I,
        namespace: N,
        halfIconNamespace: j,
        emptyIconNamespace: E
      } = e;
      let J = M;
      return (O || o != null && o.disabled.value) && (J = D), S <= T ? { color: J, name: Y, namespace: N } : V && S <= T + 0.5 ? { color: J, name: z, namespace: j } : {
        color: O || o != null && o.disabled.value ? D : L,
        name: I,
        namespace: E
      };
    }
    function h(S, T) {
      const { half: O, clearable: D } = e, { offsetWidth: M } = T.target;
      O && T.offsetX <= Math.floor(M / 2) && (S -= 0.5), u === S && D && (S = 0), u !== S && ($(e["onUpdate:modelValue"], S), $(e.onChange, S)), u = S;
    }
    function m() {
      return i(e.rules, e.modelValue);
    }
    function y() {
      Ye(() => a(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function C(S, T) {
      const { readonly: O, disabled: D } = e;
      O || D || o != null && o.disabled.value || o != null && o.readonly.value || (h(S, T), y());
    }
    function k(S) {
      return (T) => {
        n.value = S, s.value = T;
      };
    }
    function b() {
      $(e["onUpdate:modelValue"], 0), l();
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
      createHoverHandler: k,
      reset: b,
      validate: m,
      resetValidation: l,
      toSizeUnit: ze,
      toNumber: W,
      n: Et
    };
  }
});
Kh.render = Bz;
var Di = Kh;
re(Di);
ie(Di, Wh);
const UD = Di;
var ws = Di;
const qh = {
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
}, Dz = { viewBox: "-4 -4 32 32" };
function Iz(e, n) {
  return g(), P("svg", Dz, n[0] || (n[0] = [
    R(
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
const Xh = ee({});
Xh.render = Iz;
var Az = Xh;
const Mz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
};
function Nz(e, n) {
  return g(), P("svg", Mz, n[0] || (n[0] = [
    R(
      "path",
      { d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const Gh = ee({});
Gh.render = Nz;
var Vz = Gh;
const Rz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
};
function Lz(e, n) {
  return g(), P("svg", Rz, n[0] || (n[0] = [
    R(
      "path",
      { d: "M11,9H13V7H11M11,20H13V11H11V20Z" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const Zh = ee({});
Zh.render = Lz;
var Fz = Zh;
const Uz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
};
function Hz(e, n) {
  return g(), P("svg", Uz, n[0] || (n[0] = [
    R(
      "path",
      { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const Jh = ee({});
Jh.render = Hz;
var jz = Jh;
const { n: Yz, classes: Wz } = ne("result");
function Kz(e, n) {
  return g(), P(
    Ae,
    null,
    [
      R(
        "span",
        {
          class: p(e.n("success-cover-left"))
        },
        null,
        2
        /* CLASS */
      ),
      R(
        "span",
        {
          class: p(e.classes(e.n("success-line"), e.n("success-line-tip"))),
          style: Z({
            animationDuration: e.animation ? "760ms" : "0ms",
            borderRadius: `calc(${e.borderSize} * 0.625)`
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      R(
        "span",
        {
          class: p(e.classes(e.n("success-line"), e.n("success-line-long"))),
          style: Z({
            animationDuration: e.animation ? "770ms" : "0ms",
            borderRadius: `calc(${e.borderSize} * 0.625)`
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      R(
        "span",
        {
          ref: "circle",
          class: p(e.n("success-circle")),
          style: Z({ left: `-${e.borderSize}`, top: `-${e.borderSize}`, borderWidth: e.borderSize })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      R(
        "span",
        {
          class: p(e.n("success-line-fix"))
        },
        null,
        2
        /* CLASS */
      ),
      R(
        "span",
        {
          class: p(e.n("success-cover-right")),
          style: Z({
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
const Qh = ee({
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
      n: Yz,
      classes: Wz
    };
  }
});
Qh.render = Kz;
var qz = Qh;
const Xz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
};
function Gz(e, n) {
  return g(), P("svg", Xz, n[0] || (n[0] = [
    R(
      "path",
      { d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const _h = ee({});
_h.render = Gz;
var Zz = _h;
const { name: Jz, n: Qz, classes: _z } = ne("result");
function xz(e, n) {
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
            R(
              "div",
              {
                class: p(e.classes(e.n("image"), e.n(e.type))),
                style: Z({
                  width: e.circleSize,
                  height: e.circleSize,
                  borderWidth: e.borderSize
                })
              },
              [
                (g(), we(wt(e.type), {
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
        )) : G("v-if", !0)
      ]),
      H(e.$slots, "title", {}, () => [
        e.title ? (g(), P(
          "div",
          {
            key: 0,
            class: p(e.n("title"))
          },
          le(e.title),
          3
          /* TEXT, CLASS */
        )) : G("v-if", !0)
      ]),
      H(e.$slots, "description", {}, () => [
        e.description ? (g(), P(
          "div",
          {
            key: 0,
            class: p(e.n("description"))
          },
          le(e.description),
          3
          /* TEXT, CLASS */
        )) : G("v-if", !0)
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
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const xh = ee({
  name: Jz,
  components: {
    Info: Fz,
    Success: qz,
    Warning: Zz,
    Error: Vz,
    Question: jz,
    Empty: Az
  },
  props: qh,
  setup(e) {
    const n = B(
      () => `calc(${e.imageSize ? ze(e.imageSize) : "var(--result-image-size)"} * 0.9)`
    ), o = B(
      () => `calc(${e.imageSize ? ze(e.imageSize) : "var(--result-image-size)"} * 0.05)`
    );
    return {
      circleSize: n,
      borderSize: o,
      n: Qz,
      classes: _z
    };
  }
});
xh.render = xz;
var Ii = xh;
re(Ii);
ie(Ii, qh);
const HD = Ii;
var ks = Ii;
const eg = {
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
  onClick: F()
}, { name: e2, n: n2, classes: o2 } = ne("row");
function t2(e, n) {
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"))),
      style: Z({
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
const ng = ee({
  name: e2,
  props: eg,
  setup(e) {
    const n = B(
      () => Fe(e.gutter) ? e.gutter.map((r) => on(r) / 2) : [0, on(e.gutter) / 2]
    ), { bindCols: o } = UC();
    o({ average: n });
    function t(r) {
      $(e.onClick, r);
    }
    return {
      average: n,
      n: n2,
      classes: o2,
      handleClick: t,
      padStartFlex: Gr
    };
  }
});
ng.render = t2;
var Ai = ng;
re(Ai);
ie(Ai, eg);
const jD = Ai;
var $s = Ai, r2 = Object.defineProperty, _d = Object.getOwnPropertySymbols, a2 = Object.prototype.hasOwnProperty, i2 = Object.prototype.propertyIsEnumerable, xd = (e, n, o) => n in e ? r2(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, l2 = (e, n) => {
  for (var o in n || (n = {}))
    a2.call(n, o) && xd(e, o, n[o]);
  if (_d)
    for (var o of _d(n))
      i2.call(n, o) && xd(e, o, n[o]);
  return e;
};
const og = l2({
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
  onFocus: F(),
  onBlur: F(),
  onClose: F(),
  onChange: F(),
  onClear: F(),
  "onUpdate:modelValue": F()
}, Ie(ka, [
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
])), { name: s2, n: u2, classes: c2 } = ne("select"), d2 = ["tabindex"];
function f2(e, n) {
  const o = _("maybe-v-node"), t = _("var-chip"), r = _("var-icon"), a = _("var-field-decorator"), i = _("var-option"), l = _("var-menu"), s = _("var-form-details");
  return g(), P("div", {
    ref: "root",
    class: p(e.n()),
    tabindex: e.disabled || e.formDisabled ? void 0 : "0",
    onFocus: n[3] || (n[3] = (...u) => e.handleFocus && e.handleFocus(...u)),
    onBlur: n[4] || (n[4] = (...u) => e.handleRootBlur && e.handleRootBlur(...u))
  }, [
    X(l, {
      show: e.showMenu,
      "onUpdate:show": n[1] || (n[1] = (u) => e.showMenu = u),
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
      onClickOutside: e.handleClickOutside
    }, {
      menu: ue(() => [
        R(
          "div",
          {
            ref: "menuEl",
            class: p(e.classes(e.n("scroller"), e.n("$-elevation--3")))
          },
          [
            e.options.length ? (g(!0), P(
              Ae,
              { key: 0 },
              qe(e.options, (u) => (g(), we(i, {
                key: u[e.valueKey],
                label: u[e.labelKey],
                value: u[e.valueKey],
                option: u,
                disabled: u.disabled,
                ripple: u.ripple
              }, null, 8, ["label", "value", "option", "disabled", "ripple"]))),
              128
              /* KEYED_FRAGMENT */
            )) : G("v-if", !0),
            H(e.$slots, "default")
          ],
          2
          /* CLASS */
        )
      ]),
      default: ue(() => [
        X(
          a,
          Ko(ua({
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
          Xo({
            "clear-icon": ue(({ clear: u }) => [
              H(e.$slots, "clear-icon", { clear: u })
            ]),
            "append-icon": ue(() => [
              H(e.$slots, "append-icon")
            ]),
            default: ue(() => [
              R(
                "div",
                {
                  class: p(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                  style: Z({
                    textAlign: e.textAlign,
                    color: e.textColor
                  })
                },
                [
                  R(
                    "div",
                    {
                      class: p(e.n("label"))
                    },
                    [
                      e.isEmptyModelValue ? G("v-if", !0) : H(e.$slots, "selected", { key: 0 }, () => [
                        e.multiple ? (g(), P(
                          Ae,
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
                                  Ae,
                                  null,
                                  qe(e.labels, (u) => (g(), we(t, {
                                    key: u,
                                    class: p(e.n("chip")),
                                    "var-select-cover": "",
                                    closeable: "",
                                    size: "small",
                                    type: e.errorMessage ? "danger" : void 0,
                                    onClick: n[0] || (n[0] = Rn(() => {
                                    }, ["stop"])),
                                    onClose: () => e.handleClose(u)
                                  }, {
                                    default: ue(() => [
                                      X(o, { is: u }, null, 8, ["is"])
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
                            )) : (g(), P(
                              "div",
                              {
                                key: 1,
                                class: p(e.n("values"))
                              },
                              [
                                (g(!0), P(
                                  Ae,
                                  null,
                                  qe(e.labels, (u, c) => (g(), P(
                                    Ae,
                                    { key: u },
                                    [
                                      X(o, { is: u }, null, 8, ["is"]),
                                      De(
                                        le(c !== e.labels.length - 1 ? e.separator : ""),
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
                        )) : (g(), we(o, {
                          key: 1,
                          is: e.label
                        }, null, 8, ["is"]))
                      ])
                    ],
                    2
                    /* CLASS */
                  ),
                  e.enableCustomPlaceholder ? (g(), P(
                    "span",
                    {
                      key: 0,
                      class: p(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
                      style: Z({
                        color: e.placeholderColor
                      })
                    },
                    le(e.placeholder),
                    7
                    /* TEXT, CLASS, STYLE */
                  )) : G("v-if", !0),
                  H(e.$slots, "arrow-icon", {
                    focus: e.isFocusing,
                    menuOpen: e.showMenu
                  }, () => [
                    X(r, {
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
              fn: ue(() => [
                H(e.$slots, "prepend-icon")
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
    }, 8, ["show", "class", "popover-class", "offset-y", "disabled", "placement", "onClickOutside"]),
    X(s, {
      "error-message": e.errorMessage,
      onClick: n[2] || (n[2] = Rn(() => {
      }, ["stop"]))
    }, null, 8, ["error-message"])
  ], 42, d2);
}
const tg = ee({
  name: s2,
  components: {
    VarIcon: Ge,
    VarMenu: Ht,
    VarChip: _r,
    VarOption: ia,
    VarFieldDecorator: Rt,
    VarFormDetails: Tn,
    MaybeVNode: rr
  },
  props: og,
  setup(e) {
    const n = w(!1), o = w(!1), t = w(null), r = B(() => e.multiple), a = B(() => e.focusColor), i = B(() => Kn(e.modelValue)), l = B(() => e.disabled || e.readonly ? "" : "pointer"), s = w(0), { bindForm: u, form: c } = jn(), { length: d, options: f, bindOptions: v } = PO(), { label: h, labels: m, computeLabel: y, getSelectedValue: C } = rv({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => f,
      optionProvidersLength: () => d.value
    }), {
      errorMessage: k,
      validateWithTrigger: b,
      validate: S,
      // expose
      resetValidation: T
    } = Hn(), O = w(null), D = B(() => e.variant === "outlined" ? "bottom" : "cover-top"), M = B(() => {
      const { hint: A, blurColor: K, focusColor: pe } = e;
      if (!A)
        return k.value ? "var(--field-decorator-error-color)" : n.value ? pe || "var(--field-decorator-focus-color)" : K || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    }), V = B(() => !e.hint && Kn(e.modelValue)), L = {
      multiple: r,
      focusColor: a,
      computeLabel: y,
      onSelect: de,
      reset: he,
      validate: te,
      resetValidation: T
    };
    fe(
      () => e.multiple,
      () => {
        Fn(
          e.multiple && Fe(e.modelValue),
          "Select",
          "The modelValue must be an array when multiple is true"
        );
      }
    ), v(L), He(() => window, "keydown", Y), He(() => window, "keyup", z), $(u, L);
    function Y(A) {
      const { disabled: K, readonly: pe } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || K || pe || !n.value)
        return;
      const { key: Se } = A;
      if (Se === " " && !o.value) {
        Me(A);
        return;
      }
      if (Se === "Escape" && o.value) {
        t.value.focus(), Me(A), o.value = !1;
        return;
      }
      if (Se === "Tab" && o.value) {
        t.value.focus(), Me(A), j();
        return;
      }
      if (Se === "Enter" && !o.value) {
        Me(A), o.value = !0;
        return;
      }
      (Se === "ArrowDown" || Se === "ArrowUp") && o.value && (Me(A), du(t.value, O.value, Se));
    }
    function z(A) {
      const { disabled: K, readonly: pe } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || K || pe || o.value || !n.value)
        return;
      const { key: Se } = A;
      Se === " " && !o.value && (Me(A), o.value = !0);
    }
    function I(A) {
      Ye(() => {
        const { validateTrigger: K, rules: pe, modelValue: Se } = e;
        b(K, A, pe, Se);
      });
    }
    function N() {
      const { disabled: A, readonly: K, onFocus: pe } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || A || K || (s.value = on(e.offsetY), U(), $(pe), I("onFocus"));
    }
    function j() {
      const { disabled: A, readonly: K, onBlur: pe } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || A || K || (Q(), $(pe), I("onBlur"));
    }
    function E() {
      o.value || j();
    }
    function J() {
      n.value && j();
    }
    function de(A) {
      const { disabled: K, readonly: pe, multiple: Se, onChange: Ue } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || K || pe)
        return;
      const Ve = C(A);
      $(e["onUpdate:modelValue"], Ve), $(Ue, Ve), I("onChange"), Se || (t.value.focus(), bn().then(() => {
        o.value = !1;
      }));
    }
    function q() {
      const { disabled: A, readonly: K, multiple: pe, clearable: Se, onClear: Ue, onChange: Ve } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || A || K || !Se)
        return;
      const Qe = pe ? [] : void 0;
      $(e["onUpdate:modelValue"], Qe), $(Ue, Qe), I("onClear"), $(Ve, Qe), I("onChange");
    }
    function me(A) {
      const { disabled: K, onClick: pe } = e;
      c != null && c.disabled.value || K || ($(pe, A), I("onClick"));
    }
    function Pe(A) {
      const { disabled: K, readonly: pe, modelValue: Se, onClose: Ue, onChange: Ve } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || K || pe)
        return;
      const Qe = f.find(({ label: Sn }) => Sn.value === A), un = Se.filter(
        (Sn) => {
          var ve;
          return Sn !== ((ve = Qe.value.value) != null ? ve : Qe.label.value);
        }
      );
      $(e["onUpdate:modelValue"], un), $(Ue, un), I("onClose"), $(Ve, un), I("onChange");
    }
    function U() {
      s.value = on(e.offsetY), n.value = !0;
    }
    function Q() {
      n.value = !1, o.value = !1;
    }
    function te() {
      return S(e.rules, e.modelValue);
    }
    function he() {
      $(e["onUpdate:modelValue"], e.multiple ? [] : void 0), T();
    }
    return {
      root: t,
      offsetY: s,
      isFocusing: n,
      showMenu: o,
      errorMessage: k,
      formDisabled: c == null ? void 0 : c.disabled,
      formReadonly: c == null ? void 0 : c.readonly,
      label: h,
      labels: m,
      isEmptyModelValue: i,
      menuEl: O,
      placement: D,
      cursor: l,
      placeholderColor: M,
      enableCustomPlaceholder: V,
      isFunction: mn,
      n: u2,
      classes: c2,
      handleFocus: N,
      handleBlur: j,
      handleClickOutside: J,
      handleClear: q,
      handleClick: me,
      handleClose: Pe,
      handleRootBlur: E,
      reset: he,
      validate: te,
      resetValidation: T,
      focus: U,
      blur: Q
    };
  }
});
tg.render = f2;
var Mi = tg;
re(Mi);
ie(Mi, og);
const YD = Mi;
var Cs = Mi;
const rg = {
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
  onStart: F(),
  onEnd: F(),
  onSigning: F()
}, { name: p2, n: v2 } = ne("signature"), m2 = ["height", "width"];
function h2(e, n) {
  return g(), P(
    "div",
    {
      ref: "root",
      class: p(e.n())
    },
    [
      R("canvas", {
        ref: "canvas",
        height: e.canvasHeight,
        width: e.canvasWidth
      }, null, 8, m2)
    ],
    2
    /* CLASS */
  );
}
const ag = ee({
  name: p2,
  props: rg,
  setup(e) {
    const n = w(), o = w(), t = w(0), r = w(0);
    let a = !1, i = null;
    He(o, "touchstart", s), He(o, "touchmove", u), He(o, "touchend", c), to(l), bo(l);
    function l() {
      !o.value || !n.value || (i = o.value.getContext("2d"), t.value = n.value.offsetWidth, r.value = n.value.offsetHeight);
    }
    function s(m) {
      !i || !n.value || (m.preventDefault(), a = !0, i.beginPath(), i.lineWidth = W(e.lineWidth), i.strokeStyle = e.strokeStyle === "currentColor" ? Zn(n.value).color : e.strokeStyle, $(e.onStart));
    }
    function u(m) {
      if (m.preventDefault(), !o.value || !i || !a)
        return;
      const y = m.touches[0].clientX, C = m.touches[0].clientY, k = nn(o.value), b = y - k.left, S = C - k.top;
      i.lineTo(b, S), i.stroke(), $(e.onSigning);
    }
    function c(m) {
      a && (m.preventDefault(), a = !1, $(e.onEnd));
    }
    function d(m) {
      switch (e.dataUrlType) {
        case "jpg":
          return m.toDataURL("image/jpeg");
        default:
          return m.toDataURL("image/png");
      }
    }
    function f(m) {
      if (!m)
        return !0;
      const y = document.createElement("canvas");
      return y.width = m.width, y.height = m.height, d(m) === d(y);
    }
    function v() {
      i && (a = !1, i.clearRect(0, 0, t.value, r.value), i.closePath());
    }
    function h() {
      if (o.value)
        return f(o.value) ? "" : d(o.value);
    }
    return {
      root: n,
      canvas: o,
      canvasWidth: t,
      canvasHeight: r,
      n: v2,
      confirm: h,
      reset: v
    };
  }
});
ag.render = h2;
var Ni = ag;
re(Ni);
ie(Ni, rg);
const WD = Ni;
var Ss = Ni;
const ig = {
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
}, { name: g2, n: b2, classes: y2 } = ne("skeleton");
function w2(e, n) {
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n("$--box"), e.n()))
    },
    [
      e.loading ? G("v-if", !0) : (g(), P(
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
              style: Z({ height: e.toSizeUnit(e.cardHeight) })
            },
            [
              R(
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
          )) : G("v-if", !0),
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
                  style: Z({
                    width: e.toSizeUnit(e.avatarSize),
                    height: e.toSizeUnit(e.avatarSize)
                  })
                },
                [
                  R(
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
              )) : G("v-if", !0),
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
                      style: Z({ width: e.toSizeUnit(e.titleWidth) })
                    },
                    [
                      R(
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
                  )) : G("v-if", !0),
                  (g(!0), P(
                    Ae,
                    null,
                    qe(e.toNumber(e.rows), (o, t) => (g(), P(
                      "div",
                      {
                        key: o,
                        class: p(e.n("row")),
                        style: Z({ width: e.toSizeUnit(e.rowsWidth[t]) })
                      },
                      [
                        R(
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
              )) : G("v-if", !0)
            ],
            2
            /* CLASS */
          )) : G("v-if", !0)
        ],
        2
        /* CLASS */
      )) : G("v-if", !0),
      e.loading && e.fullscreen ? (g(), P(
        "div",
        {
          key: 2,
          class: p(e.n("fullscreen")),
          style: Z({ zIndex: e.toNumber(e.fullscreenZIndex) })
        },
        [
          R(
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
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const lg = ee({
  name: g2,
  props: ig,
  setup: () => ({
    n: b2,
    classes: y2,
    toSizeUnit: ze,
    toNumber: W
  })
});
lg.render = w2;
var Vi = lg;
re(Vi);
ie(Vi, ig);
const KD = Vi;
var Ps = Vi, cn = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(cn || {});
const sg = {
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
  onChange: F(),
  onStart: F(),
  onEnd: F(),
  "onUpdate:modelValue": F()
}, { name: k2, n: ef, classes: $2 } = ne("slider"), C2 = ["tabindex", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-disabled", "aria-valuetext", "onTouchstart", "onFocusin", "onFocusout"];
function S2(e, n) {
  const o = _("var-hover-overlay"), t = _("var-form-details"), r = We("hover");
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n(e.direction), e.n("$--box")))
    },
    [
      R(
        "div",
        {
          ref: "sliderEl",
          class: p(e.classes(e.n(`${e.direction}-block`), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(`${e.direction}--error`)])),
          onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
        },
        [
          R(
            "div",
            {
              class: p(e.n(`${e.direction}-track`))
            },
            [
              R(
                "div",
                {
                  class: p(e.n(`${e.direction}-track-background`)),
                  style: Z({
                    background: e.trackColor,
                    height: e.isVertical ? "100%" : e.toSizeUnit(e.trackHeight),
                    width: e.isVertical ? e.toSizeUnit(e.trackHeight) : "100%"
                  })
                },
                null,
                6
                /* CLASS, STYLE */
              ),
              R(
                "div",
                {
                  class: p(e.n(`${e.direction}-track-fill`)),
                  style: Z(e.getFillStyle)
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
            Ae,
            null,
            qe(e.thumbList, (a) => (g(), P("div", {
              key: a.enumValue,
              class: p(e.n(`${e.direction}-thumb`)),
              style: Z(e.thumbStyle(a)),
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
            }, [
              H(e.$slots, "button", {
                currentValue: a.text
              }, () => [
                Ne(R(
                  "div",
                  {
                    class: p(e.n(`${e.direction}-thumb-block`)),
                    style: Z({
                      background: e.thumbColor
                    })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ), [
                  [r, (i) => e.hover(i, a), "desktop"]
                ]),
                R(
                  "div",
                  {
                    class: p(
                      e.classes(e.n(`${e.direction}-thumb-ripple`), [
                        e.thumbsProps[a.enumValue].active,
                        e.n(`${e.direction}-thumb-ripple--active`)
                      ])
                    ),
                    style: Z({
                      background: e.thumbsProps[a.enumValue].active ? e.thumbColor : void 0
                    })
                  },
                  [
                    X(o, {
                      hovering: !e.isDisabled && a.hovering,
                      focusing: !e.isDisabled && a.focusing
                    }, null, 8, ["hovering", "focusing"])
                  ],
                  6
                  /* CLASS, STYLE */
                ),
                R(
                  "div",
                  {
                    class: p(
                      e.classes(e.n(`${e.direction}-thumb-label`), [e.showLabel(a.enumValue), e.n(`${e.direction}-thumb-label--active`)])
                    ),
                    style: Z({
                      background: e.labelColor,
                      color: e.labelTextColor,
                      height: e.toSizeUnit(e.thumbSize),
                      width: e.toSizeUnit(e.thumbSize)
                    })
                  },
                  [
                    R(
                      "span",
                      null,
                      le(a.text),
                      1
                      /* TEXT */
                    )
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ])
            ], 46, C2))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      ),
      X(t, {
        "error-message": e.errorMessage,
        class: p(e.n("form")),
        "var-slider-cover": ""
      }, null, 8, ["error-message", "class"])
    ],
    2
    /* CLASS */
  );
}
const ug = ee({
  name: k2,
  components: {
    VarFormDetails: Tn,
    VarHoverOverlay: Un
  },
  directives: { Hover: In },
  props: sg,
  setup(e) {
    const n = w(0), o = w(null), t = w(!1), r = B(() => W(e.max) - W(e.min)), a = B(() => n.value / r.value * W(e.step)), i = B(() => e.disabled || (f == null ? void 0 : f.disabled.value)), l = B(() => e.readonly || (f == null ? void 0 : f.readonly.value)), s = B(() => e.direction === "vertical"), u = w(!1), c = w(!1), { bindForm: d, form: f } = jn(), { errorMessage: v, validateWithTrigger: h, validate: m, resetValidation: y } = Hn(), { hovering: C, handleHovering: k } = no(), { hovering: b, handleHovering: S } = no(), T = B(() => {
      const { modelValue: oe, range: ce } = e;
      let ke = [];
      return ce && Fe(oe) ? ke = [
        {
          value: J(oe[0]),
          enumValue: cn.First,
          text: de(oe[0]),
          hovering: C.value,
          focusing: u.value,
          handleHovering: k,
          handleFocusing(Be) {
            u.value = Be;
          }
        },
        {
          value: J(oe[1]),
          enumValue: cn.Second,
          text: de(oe[1]),
          hovering: b.value,
          focusing: c.value,
          handleHovering: S,
          handleFocusing(Be) {
            c.value = Be;
          }
        }
      ] : En(oe) && (ke = [
        {
          value: J(oe),
          enumValue: cn.First,
          text: de(oe),
          hovering: C.value,
          focusing: u.value,
          handleHovering: k,
          handleFocusing(Be) {
            u.value = Be;
          }
        }
      ]), ke;
    }), O = B(() => {
      const { activeColor: oe, range: ce, modelValue: ke } = e, Be = ce && Fe(ke) ? J(Math.min(ke[0], ke[1])) : 0, _e = ce && Fe(ke) ? J(Math.max(ke[0], ke[1])) - Be : J(ke);
      return s.value ? {
        left: "0px",
        height: `${_e}%`,
        bottom: `${Be}%`,
        background: oe
      } : {
        top: "0px",
        width: `${_e}%`,
        left: `${Be}%`,
        background: oe
      };
    }), D = en({
      [cn.First]: z(),
      [cn.Second]: z()
    });
    let M;
    $(d, {
      reset: Qe,
      validate: Y,
      resetValidation: y
    }), fe([() => e.modelValue, () => e.step], ([oe, ce]) => {
      !Se() || !Ue() || t.value || Ve(oe, W(ce));
    }), fe(n, () => Ve()), yn(() => {
      !Se() || !Ue() || L();
    }), sa(te), He(() => window, "keydown", Sn), to(L);
    function L() {
      n.value = o.value[s.value ? "offsetHeight" : "offsetWidth"];
    }
    function Y() {
      return m(e.rules, e.modelValue);
    }
    function z() {
      return {
        startPosition: 0,
        currentOffset: 0,
        active: !1,
        percentValue: 0
      };
    }
    function I() {
      Ye(() => h(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function N(oe) {
      const ce = oe.currentTarget;
      return ce ? s.value ? n.value - (oe.clientY - nn(ce).top) : oe.clientX - iy(ce) : 0;
    }
    function j(oe) {
      return {
        [s.value ? "bottom" : "left"]: `${oe.value}%`,
        zIndex: D[oe.enumValue].active ? 1 : void 0
      };
    }
    function E(oe) {
      return e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : D[oe].active;
    }
    function J(oe) {
      const { min: ce, max: ke } = e;
      return oe < W(ce) ? 0 : oe > W(ke) ? 100 : (oe - W(ce)) / r.value * 100;
    }
    function de(oe) {
      if (!En(oe))
        return 0;
      const ce = $n(oe, W(e.min), W(e.max));
      return parseInt(`${ce}`, 10) === ce ? ce : W(ce.toPrecision(5));
    }
    function q(oe, ce) {
      i.value || ce.handleHovering(oe);
    }
    function me(oe) {
      $(e.onChange, oe), $(e["onUpdate:modelValue"], oe), I();
    }
    function Pe(oe, ce) {
      let ke = [];
      const { step: Be, range: _e, modelValue: ae, min: $e } = e, Ee = W(Be), Re = Math.round(oe / a.value), Le = Re * Ee + W($e), fn = D[ce].percentValue * Ee + W($e);
      if (D[ce].percentValue = Re, _e && Fe(ae) && (ke = ce === cn.First ? [Le, ae[1]] : [ae[0], Le]), fn !== Le) {
        const hn = _e ? ke.map((gn) => de(gn)) : de(Le);
        me(hn);
      }
    }
    function U(oe) {
      if (!e.range)
        return cn.First;
      const ce = D[cn.First].percentValue * a.value, ke = D[cn.Second].percentValue * a.value, Be = Math.abs(oe - ce), _e = Math.abs(oe - ke);
      return Be <= _e ? cn.First : cn.Second;
    }
    function Q() {
      document.addEventListener("touchmove", A, { passive: !1 }), document.addEventListener("touchend", K), document.addEventListener("touchcancel", K);
    }
    function te() {
      document.removeEventListener("touchmove", A), document.removeEventListener("touchend", K), document.removeEventListener("touchcancel", K);
    }
    function he(oe, ce) {
      if (L(), i.value || (D[ce].active = !0), M = ce, Q(), i.value || l.value)
        return;
      $(e.onStart), t.value = !0;
      const { clientX: ke, clientY: Be } = oe.touches[0];
      D[ce].startPosition = s.value ? Be : ke;
    }
    function A(oe) {
      if (Me(oe), i.value || l.value || !t.value)
        return;
      const { startPosition: ce, currentOffset: ke } = D[M], { clientX: Be, clientY: _e } = oe.touches[0];
      let ae = (s.value ? ce - _e : Be - ce) + ke;
      ae <= 0 ? ae = 0 : ae >= n.value && (ae = n.value), Pe(ae, M);
    }
    function K() {
      te();
      const { range: oe, modelValue: ce, onEnd: ke, step: Be, min: _e } = e;
      if (i.value || (D[M].active = !1), i.value || l.value)
        return;
      let ae = [];
      D[M].currentOffset = D[M].percentValue * a.value;
      const $e = D[M].percentValue * W(Be) + W(_e);
      oe && Fe(ce) && (ae = M === cn.First ? [$e, ce[1]] : [ce[0], $e]), $(ke, oe ? ae : $e), t.value = !1;
    }
    function pe(oe) {
      if (i.value || l.value || oe.target.closest(`.${ef("thumb")}`))
        return;
      const ce = N(oe), ke = U(ce);
      M = ke, Pe(ce, ke), K();
    }
    function Se() {
      return W(e.step) <= 0 ? (u0("Slider", '"step" should be > 0'), !1) : !0;
    }
    function Ue() {
      const { range: oe, modelValue: ce } = e;
      return oe && !Fe(ce) ? (lt("Slider", '"modelValue" should be an Array'), !1) : !oe && Fe(ce) ? (lt("Slider", '"modelValue" should be a Number'), !1) : oe && Fe(ce) && ce.length < 2 ? (lt("Slider", '"modelValue" should have two value'), !1) : !0;
    }
    function Ve(oe = e.modelValue, ce = W(e.step)) {
      const ke = (Be) => {
        const { min: _e, max: ae } = e;
        return Be < W(_e) ? 0 : Be > W(ae) ? r.value / ce : (Be - W(_e)) / ce;
      };
      e.range && Fe(oe) ? (D[cn.First].percentValue = ke(oe[0]), D[cn.First].currentOffset = D[cn.First].percentValue * a.value, D[cn.Second].percentValue = ke(oe[1]), D[cn.Second].currentOffset = D[cn.Second].percentValue * a.value) : En(oe) && (D[cn.First].currentOffset = ke(oe) * a.value);
    }
    function Qe() {
      const oe = e.range ? [0, 0] : 0;
      $(e["onUpdate:modelValue"], oe), y();
    }
    function un(oe, ce) {
      const ke = W(e.step);
      if (Fe(ce)) {
        const Be = ce[0] + (u.value ? oe * ke : 0), _e = ce[1] + (c.value ? oe * ke : 0);
        return [Be, _e].map(de);
      }
      return de(ce + oe * ke);
    }
    function Sn(oe) {
      const ce = {
        ArrowRight: 1,
        ArrowUp: 1,
        ArrowLeft: -1,
        ArrowDown: -1
      }, { key: ke } = oe;
      if (!Go(ce, ke) || l.value || i.value || e.range && !u.value && !c.value || !e.range && !u.value)
        return;
      Me(oe);
      const Be = ce[ke], _e = un(Be, e.modelValue);
      me(_e);
    }
    function ve(oe) {
      i.value || oe.handleFocusing(!0);
    }
    function Ke(oe) {
      oe.handleFocusing(!1);
    }
    return {
      sliderEl: o,
      getFillStyle: O,
      isDisabled: i,
      isVertical: s,
      errorMessage: v,
      thumbsProps: D,
      thumbList: T,
      handleFocus: ve,
      handleBlur: Ke,
      n: ef,
      classes: $2,
      thumbStyle: j,
      hover: q,
      toSizeUnit: ze,
      toNumber: W,
      showLabel: E,
      start: he,
      move: A,
      end: K,
      handleClick: pe
    };
  }
});
ug.render = S2;
var Ri = ug;
re(Ri);
ie(Ri, sg);
const qD = Ri;
var Os = Ri, P2 = Object.defineProperty, O2 = Object.defineProperties, z2 = Object.getOwnPropertyDescriptors, nf = Object.getOwnPropertySymbols, E2 = Object.prototype.hasOwnProperty, T2 = Object.prototype.propertyIsEnumerable, of = (e, n, o) => n in e ? P2(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, B2 = (e, n) => {
  for (var o in n || (n = {}))
    E2.call(n, o) && of(e, o, n[o]);
  if (nf)
    for (var o of nf(n))
      T2.call(n, o) && of(e, o, n[o]);
  return e;
}, D2 = (e, n) => O2(e, z2(n));
const Au = {
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
  loadingType: Ie(uo, "type"),
  loadingSize: Ie(uo, "size"),
  loadingRadius: Ie(uo, "radius"),
  loadingColor: D2(B2({}, Ie(uo, "color")), {
    default: "currentColor"
  }),
  lockScroll: Boolean,
  show: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  forbidClick: Boolean,
  onOpen: F(),
  onOpened: F(),
  onClose: F(),
  onClosed: F(),
  "onUpdate:show": F(),
  _update: String
}, { n: I2, classes: A2 } = ne("snackbar"), M2 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function N2(e, n) {
  const o = _("var-icon"), t = _("var-loading");
  return Ne((g(), P(
    "div",
    {
      class: p(e.n()),
      style: Z({ pointerEvents: e.isForbidClick ? "auto" : "none", zIndex: e.zIndex })
    },
    [
      R(
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
          style: Z({ zIndex: e.zIndex })
        },
        [
          R(
            "div",
            {
              class: p([e.n("content"), e.contentClass])
            },
            [
              H(e.$slots, "default", {}, () => [
                De(
                  le(e.content),
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
              e.iconName ? (g(), we(o, {
                key: 0,
                name: e.iconName
              }, null, 8, ["name"])) : G("v-if", !0),
              e.type === "loading" ? (g(), we(t, {
                key: 1,
                type: e.loadingType,
                size: e.loadingSize,
                color: e.loadingColor,
                radius: e.loadingRadius
              }, null, 8, ["type", "size", "color", "radius"])) : G("v-if", !0),
              H(e.$slots, "icon")
            ],
            2
            /* CLASS */
          )) : G("v-if", !0),
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
          )) : G("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  )), [
    [eo, e.show]
  ]);
}
const cg = ee({
  name: "VarSnackbarCore",
  components: {
    VarLoading: mt,
    VarIcon: Ge
  },
  props: Au,
  setup(e) {
    const n = w(null), { zIndex: o } = ir(() => e.show, 1);
    ar(
      () => e.show,
      () => e.lockScroll
    );
    const t = B(() => {
      const { type: i, forbidClick: l } = e;
      return i === "loading" || l;
    }), r = B(() => e.type ? M2[e.type] : "");
    function a() {
      n.value = setTimeout(() => {
        e.type !== "loading" && $(e["onUpdate:show"], !1);
      }, e.duration);
    }
    return fe(
      () => e.show,
      (i) => {
        i ? ($(e.onOpen), a()) : (clearTimeout(n.value), $(e.onClose));
      }
    ), fe(
      () => e._update,
      () => {
        clearTimeout(n.value), a();
      }
    ), yn(() => {
      e.show && ($(e.onOpen), a());
    }), {
      SNACKBAR_TYPE: pg,
      zIndex: o,
      iconName: r,
      isForbidClick: t,
      n: I2,
      classes: A2,
      formatElevation: dn
    };
  }
});
cg.render = N2;
var dg = cg;
const { name: V2, n: R2 } = ne("snackbar");
function L2(e, n) {
  const o = _("var-snackbar-core");
  return g(), we(lo, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [
    X(xe, {
      name: `${e.n()}-fade`,
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed
    }, {
      default: ue(() => [
        X(o, je(e.$props, {
          class: e.n("transition")
        }), Xo({
          default: ue(() => [
            H(e.$slots, "default")
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots.icon ? {
            name: "icon",
            fn: ue(() => [
              H(e.$slots, "icon")
            ]),
            key: "0"
          } : void 0,
          e.$slots.action ? {
            name: "action",
            fn: ue(() => [
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
const fg = ee({
  name: V2,
  components: { VarSnackbarCore: dg },
  props: Au,
  setup() {
    const { disabled: e } = xo();
    return {
      disabled: e,
      n: R2
    };
  }
});
fg.render = L2;
var Li = fg, F2 = Object.defineProperty, tf = Object.getOwnPropertySymbols, U2 = Object.prototype.hasOwnProperty, H2 = Object.prototype.propertyIsEnumerable, rf = (e, n, o) => n in e ? F2(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Gt = (e, n) => {
  for (var o in n || (n = {}))
    U2.call(n, o) && rf(e, o, n[o]);
  if (tf)
    for (var o of tf(n))
      H2.call(n, o) && rf(e, o, n[o]);
  return e;
};
const pg = ["loading", "success", "warning", "info", "error"];
let af = 0, zs = !1, vg, Zt = !1;
const mg = {
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
let Xn = en([]), Mu = mg;
const j2 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, sl = (e) => () => mn(e) ? e() : e, Y2 = {
  setup() {
    return () => {
      const e = Xn.map(({
        id: n,
        reactiveSnackOptions: o,
        _update: t
      }) => {
        const r = document.querySelector(".var-transition-group");
        o.forbidClick || o.type === "loading" ? r.classList.add("var-pointer-auto") : r.classList.remove("var-pointer-auto");
        const a = Gt({
          position: Zt ? "relative" : "absolute"
        }, Z2(o.position)), {
          content: i,
          icon: l,
          action: s
        } = o, u = {
          default: sl(i),
          icon: sl(l),
          action: sl(s)
        };
        return X(dg, je(o, {
          key: n,
          style: a,
          "data-id": n,
          _update: t,
          show: o.show,
          "onUpdate:show": (c) => o.show = c
        }), u);
      });
      return X(ob, je(j2, {
        style: {
          zIndex: Vn.zIndex
        },
        onAfterEnter: W2,
        onAfterLeave: K2
      }), {
        default: () => [e]
      });
    };
  }
}, io = function(e) {
  const n = X2(e), o = en(Gt(Gt({}, Mu), n));
  o.show = !0, zs || (zs = !0, vg = $t(Y2).unmountInstance);
  const {
    length: t
  } = Xn, r = {
    id: af++,
    reactiveSnackOptions: o
  };
  if (t === 0 || Zt)
    q2(r);
  else {
    const a = `update-${af}`;
    G2(o, a);
  }
  return {
    clear() {
      !Zt && Xn.length ? Xn[0].reactiveSnackOptions.show = !1 : o.show = !1;
    }
  };
};
pg.forEach((e) => {
  io[e] = (n) => (Ln(n) ? n.type = e : n = {
    content: n,
    type: e
  }, io(n));
});
io.allowMultiple = function(e = !1) {
  e !== Zt && (Xn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Zt = e);
};
io.clear = function() {
  Xn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
io.setDefaultOptions = function(e) {
  Mu = e;
};
io.resetDefaultOptions = function() {
  Mu = mg;
};
function W2(e) {
  const n = e.getAttribute("data-id"), o = Xn.find((t) => t.id === W(n));
  o && $(o.reactiveSnackOptions.onOpened);
}
function K2(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), o = Xn.find((r) => r.id === W(n));
  o && (o.animationEnd = !0, $(o.reactiveSnackOptions.onClosed)), Xn.every((r) => r.animationEnd) && ($(vg), Xn = en([]), zs = !1);
}
function q2(e) {
  Xn.push(e);
}
function X2(e = {}) {
  return sn(e) ? {
    content: e
  } : e;
}
function G2(e, n) {
  const [o] = Xn;
  o.reactiveSnackOptions = Gt(Gt({}, o.reactiveSnackOptions), e), o._update = n;
}
function Z2(e = "top") {
  return e === "bottom" ? {
    top: "85%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
io.Component = Li;
re(Li);
re(Li, io);
ie(io, Au);
const XD = Li;
var Es = io;
const hg = {
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
function J2(e, n, o) {
  const { direction: t, justify: r, index: a, lastIndex: i } = o;
  let l = "0";
  return t === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(r) ? a !== i ? l = `${Nn(e)} ${n} ${Nn(e)} 0` : l = `${Nn(e)} 0` : r === "space-around" ? l = `${Nn(e)} ${Nn(n)}` : r === "space-between" && (a === 0 ? l = `${Nn(e)} ${Nn(n)} ${Nn(e)} 0` : a === i ? l = `${Nn(e)} 0 ${Nn(e)} ${Nn(n)}` : l = `${Nn(e)} ${Nn(n)}`)), t === "column" && a !== i && (l = `0 0 ${e} 0`), l;
}
const Q2 = (e) => ["mini", "small", "normal", "large"].includes(e), {
  name: _2,
  n: zr,
  classes: lf
} = ne("space");
function x2(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : Fe(e) ? e.map(ze) : [ze(e), ze(e)];
}
var Fi = ee({
  name: _2,
  props: hg,
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
      } = e, u = (o = $(n.default)) != null ? o : [], [c, d] = x2(s, Q2(s)), f = np(u), v = f.length - 1, h = f.map((m, y) => {
        var C;
        const k = J2(c, d, {
          direction: l,
          justify: r,
          index: y,
          lastIndex: v
        });
        return X("div", {
          class: lf([l === "column", zr("--auto")]),
          key: (C = m.key) != null ? C : void 0,
          style: {
            margin: k
          }
        }, [m]);
      });
      return X("div", {
        class: lf(zr(), zr("$--box"), [t, zr("--inline")]),
        style: {
          flexDirection: l,
          justifyContent: Gr(r),
          alignItems: Gr(a),
          flexWrap: i ? "wrap" : "nowrap",
          margin: l === "row" ? `calc(-1 * ${c} / 2) 0` : void 0
        }
      }, [h]);
    };
  }
});
re(Fi);
ie(Fi, hg);
const GD = Fi;
var Ts = Fi;
const gg = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: Ie(tn, "name"),
  inactiveIcon: Ie(tn, "name"),
  activeIconNamespace: Ie(tn, "namespace"),
  currentIconNamespace: Ie(tn, "namespace"),
  inactiveIconNamespace: Ie(tn, "namespace")
}, bg = Symbol("STEPS_BIND_STEP_KEY");
function e3() {
  const { bindChildren: e, childProviders: n } = kn(bg);
  return {
    step: n,
    bindStep: e
  };
}
function n3() {
  const { parentProvider: e, index: n, bindParent: o } = wn(bg);
  return Fn(!!o, "Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: o
  };
}
const { name: o3, n: t3, classes: r3 } = ne("step"), a3 = { key: 3 };
function i3(e, n) {
  const o = _("var-icon");
  return g(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      R(
        "div",
        {
          class: p(e.n(e.direction))
        },
        [
          R(
            "div",
            {
              class: p(e.classes(e.n(`${e.direction}-tag`), [e.isActive || e.isCurrent, e.n(`${e.direction}-tag--active`)])),
              style: Z({ backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor }),
              onClick: n[0] || (n[0] = (...t) => e.click && e.click(...t))
            },
            [
              e.isActive ? (g(), we(o, {
                key: 0,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.activeIcon,
                namespace: e.activeIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.isCurrent && e.currentIcon ? (g(), we(o, {
                key: 1,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.currentIcon,
                namespace: e.currentIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.inactiveIcon ? (g(), we(o, {
                key: 2,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.inactiveIcon,
                namespace: e.inactiveIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : (g(), P(
                "span",
                a3,
                le(e.index + 1),
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
          )) : G("v-if", !0),
          R(
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
const yg = ee({
  name: o3,
  components: { VarIcon: Ge },
  props: gg,
  setup() {
    const { index: e, steps: n, bindSteps: o } = n3(), { active: t, activeColor: r, inactiveColor: a, direction: i, clickStep: l } = n, s = B(() => t.value === e.value), u = B(() => e.value !== -1 && W(t.value) > e.value);
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
      n: t3,
      classes: r3,
      click: d
    };
  }
});
yg.render = i3;
var Ui = yg;
re(Ui);
ie(Ui, gg);
const ZD = Ui;
var Bs = Ui;
const wg = {
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
  onClickStep: F()
}, { name: l3, n: s3 } = ne("steps");
function u3(e, n) {
  return g(), P(
    "div",
    {
      class: p(e.n()),
      style: Z({ flexDirection: e.direction === "horizontal" ? "row" : "column" })
    },
    [
      H(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const kg = ee({
  name: l3,
  props: wg,
  setup(e) {
    const n = B(() => e.active), o = B(() => e.activeColor), t = B(() => e.inactiveColor), r = B(() => e.direction), { bindStep: a } = e3();
    a({
      active: n,
      direction: r,
      activeColor: o,
      inactiveColor: t,
      clickStep: l
    });
    function l(s) {
      $(e.onClickStep, s);
    }
    return { n: s3 };
  }
});
kg.render = u3;
var Hi = kg;
re(Hi);
ie(Hi, wg);
const JD = Hi;
var Ds = Hi;
const $g = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: c3, n: d3 } = ne("style-provider"), f3 = ee({
  name: c3,
  props: $g,
  setup(e, { slots: n }) {
    return () => Qt(
      e.tag,
      {
        class: d3(),
        style: zp(e.styleVars)
      },
      $(n.default)
    );
  }
});
var ji = f3;
const Cg = "varlet-style-vars";
function sf() {
  const e = document.head.querySelector(`#${Cg}`);
  e && document.head.removeChild(e);
}
function p3(e) {
  const n = document.createElement("style");
  n.id = Cg, n.innerHTML = e, document.head.appendChild(n);
}
function Yi(e) {
  if (e == null) {
    sf();
    return;
  }
  const n = zp(e ?? {}), o = Object.entries(n).reduce((t, [r, a]) => (t += `${r}:${a};`, t), `:root:root {
`);
  sf(), p3(`${o}
}`);
}
Yi.Component = ji;
re(ji);
re(ji, Yi);
ie(Yi, $g);
const QD = ji;
var Is = Yi;
const Sg = {
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
  onClick: F(),
  onBeforeChange: F(),
  onChange: F(),
  "onUpdate:modelValue": F()
}, { name: v3, n: m3, classes: h3 } = ne("switch"), g3 = ["aria-checked"], b3 = ["tabindex"];
function y3(e, n) {
  const o = _("var-hover-overlay"), t = _("var-form-details"), r = We("ripple"), a = We("hover");
  return Ne((g(), P("div", {
    class: p(e.classes(e.n(), [e.variant, e.n("--variant")])),
    role: "switch",
    "aria-checked": e.modelValue
  }, [
    R(
      "div",
      {
        ref: "switchRef",
        class: p(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.isActive, e.n("block--active")])),
        style: Z(e.styleComputed.switch),
        onClick: n[2] || (n[2] = (...i) => e.switchActive && e.switchActive(...i))
      },
      [
        R(
          "div",
          {
            style: Z(e.styleComputed.track),
            class: p(e.classes(e.n("track"), [e.isActive, e.n("track--active")], [e.errorMessage && !e.variant, e.n("track--error")]))
          },
          null,
          6
          /* CLASS, STYLE */
        ),
        Ne((g(), P("div", {
          class: p(e.classes(e.n("ripple"), [e.isActive, e.n("ripple--active")])),
          style: Z(e.styleComputed.ripple),
          tabindex: e.disabled || e.formDisabled ? void 0 : "0",
          onFocus: n[0] || (n[0] = (i) => e.isFocusing = !0),
          onBlur: n[1] || (n[1] = (i) => e.isFocusing = !1)
        }, [
          R(
            "div",
            {
              style: Z(e.styleComputed.handle),
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
                  style: Z({
                    width: e.radius,
                    height: e.radius
                  })
                },
                n[3] || (n[3] = [
                  R(
                    "svg",
                    { viewBox: "25 25 50 50" },
                    [
                      R("circle", {
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
              )) : G("v-if", !0)
            ],
            6
            /* CLASS, STYLE */
          ),
          X(o, {
            hovering: e.hovering && !e.disabled && !e.formDisabled,
            focusing: e.isFocusing && !e.disabled && !e.formDisabled
          }, null, 8, ["hovering", "focusing"])
        ], 46, b3)), [
          [r, {
            disabled: !e.ripple || e.disabled || e.loading || e.formDisabled || e.readonly || e.formReadonly
          }]
        ])
      ],
      6
      /* CLASS, STYLE */
    ),
    X(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
  ], 10, g3)), [
    [a, e.hover, "desktop"]
  ]);
}
const Pg = ee({
  name: v3,
  components: {
    VarFormDetails: Tn,
    VarHoverOverlay: Un
  },
  directives: { Ripple: rn, Hover: In },
  props: Sg,
  setup(e) {
    const n = w(null), o = w(!1), { bindForm: t, form: r } = jn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = Hn(), { hovering: u, handleHovering: c } = no(), d = B(() => e.modelValue === e.activeValue), f = B(() => {
      const { size: O, color: D, closeColor: M, loadingColor: V, variant: L } = e;
      return {
        handle: {
          width: On(O),
          height: On(O),
          backgroundColor: d.value ? D : M,
          color: V
        },
        ripple: {
          left: d.value ? On(O, 0.5) : `-${On(O, L ? 1 / 3 : 0.5)}`,
          color: d.value ? D : M || "currentColor",
          width: On(O, 2),
          height: On(O, 2)
        },
        track: {
          width: On(O, L ? 13 / 6 : 1.9),
          height: On(O, L ? 4 / 3 : 0.72),
          borderRadius: On(O, 2 / 3),
          filter: d.value || a != null && a.value ? void 0 : `brightness(${L ? 1 : 0.6})`,
          backgroundColor: d.value ? D : M,
          borderWidth: L && !d.value ? On(O, 1 / 12) : void 0
        },
        switch: {
          width: On(O, L ? 13 / 6 : 2),
          height: On(O, L ? 4 / 3 : 1.2)
        }
      };
    }), v = B(() => On(e.size, 0.8));
    $(t, {
      reset: T,
      validate: C,
      resetValidation: s
    }), He(() => window, "keydown", m), He(() => window, "keyup", y);
    function m(O) {
      o.value && ((O.key === " " || O.key === "Enter") && Me(O), O.key === "Enter" && n.value.click());
    }
    function y(O) {
      !o.value || O.key !== " " || (Me(O), n.value.click());
    }
    function C() {
      return l(e.rules, e.modelValue);
    }
    function k(O) {
      Ye(() => {
        const { validateTrigger: D, rules: M, modelValue: V } = e;
        i(D, O, M, V);
      });
    }
    function b(O) {
      const {
        onClick: D,
        onChange: M,
        disabled: V,
        loading: L,
        readonly: Y,
        activeValue: z,
        inactiveValue: I,
        lazyChange: N,
        "onUpdate:modelValue": j,
        onBeforeChange: E
      } = e;
      if (V || r != null && r.disabled.value || ($(D, O), L || Y || r != null && r.readonly.value))
        return;
      const J = d.value ? I : z;
      N ? $(E, J, (de) => {
        $(j, de), k("onLazyChange");
      }) : ($(M, J), $(j, J), k("onChange"));
    }
    function S(O) {
      e.disabled || r != null && r.disabled.value || c(O);
    }
    function T() {
      $(e["onUpdate:modelValue"], e.inactiveValue), s();
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
      n: m3,
      classes: h3,
      formatElevation: dn,
      multiplySizeUnit: On,
      switchActive: b,
      hover: S
    };
  }
});
Pg.render = y3;
var Wi = Pg;
re(Wi);
ie(Wi, Sg);
const _D = Wi;
var As = Wi;
const Og = {
  name: [String, Number],
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: F()
}, zg = Symbol("TABS_BIND_TAB_KEY");
function w3() {
  const { childProviders: e, bindChildren: n, length: o } = kn(zg);
  return {
    length: o,
    tabList: e,
    bindTabList: n
  };
}
function k3() {
  const { parentProvider: e, bindParent: n, index: o } = wn(zg);
  return Fn(!!n, "Tab", "<var-tab/> must in <var-tabs/>"), {
    index: o,
    tabs: e,
    bindTabs: n
  };
}
const { name: $3, n: Er, classes: C3 } = ne("tab");
function S3(e, n) {
  const o = We("ripple");
  return Ne((g(), P(
    "div",
    {
      ref: "tabEl",
      class: p(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n(`--${e.itemDirection}`))),
      style: Z({
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
const Eg = ee({
  name: $3,
  directives: { Ripple: rn },
  props: Og,
  setup(e) {
    const n = w(null), o = B(() => n.value), t = B(() => e.name), r = B(() => e.disabled), { index: a, tabs: i, bindTabs: l } = k3(), { onTabClick: s, active: u, activeColor: c, inactiveColor: d, disabledColor: f, itemDirection: v, resize: h } = i, m = {
      name: t,
      index: a,
      disabled: r,
      element: o
    };
    l(m), fe(() => [e.name, e.disabled], h);
    function y() {
      return e.name != null ? u.value === e.name : u.value === (a == null ? void 0 : a.value);
    }
    function C() {
      return e.disabled ? f.value : y() ? c.value : d.value;
    }
    function k() {
      return e.disabled ? Er("$-tab--disabled") : y() ? Er("$-tab--active") : Er("$-tab--inactive");
    }
    function b(S) {
      const { disabled: T, name: O, onClick: D } = e;
      T || ($(D, O ?? a.value, S), s(m));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: c,
      inactiveColor: d,
      itemDirection: v,
      n: Er,
      classes: C3,
      computeColorStyle: C,
      computeColorClass: k,
      handleClick: b
    };
  }
});
Eg.render = S3;
var Ki = Eg;
re(Ki);
ie(Ki, Og);
const xD = Ki;
var Ms = Ki;
const Tg = {
  name: [String, Number]
}, { name: P3, n: O3, classes: z3 } = ne("tab-item");
function E3(e, n) {
  const o = _("var-swipe-item");
  return g(), we(o, {
    class: p(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: ue(() => [
      H(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
const Bg = ee({
  name: P3,
  components: { VarSwipeItem: qt },
  props: Tg,
  setup(e) {
    const n = w(!1), o = B(() => e.name), { index: t, bindTabsItems: r } = Q4(), { bindLists: a } = _4(), i = {
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
      n: O3,
      classes: z3
    };
  }
});
Bg.render = E3;
var qi = Bg;
re(qi);
ie(qi, Tg);
const eI = qi;
var Ns = qi;
const Dg = {
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
}, { name: T3, n: B3, classes: D3 } = ne("table");
function I3(e, n) {
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box")))
    },
    [
      R(
        "div",
        {
          class: p(e.n("main")),
          style: Z({ "max-height": e.toSizeUnit(e.scrollerHeight) })
        },
        [
          R(
            "table",
            {
              class: p(e.n("table")),
              style: Z({ width: e.toSizeUnit(e.fullWidth) })
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
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Ig = ee({
  name: T3,
  props: Dg,
  setup: () => ({
    toSizeUnit: ze,
    n: B3,
    classes: D3,
    formatElevation: dn
  })
});
Ig.render = I3;
var Xi = Ig;
re(Xi);
ie(Xi, Dg);
const nI = Xi;
var Vs = Xi;
const Ag = {
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
  stickyCssMode: Ie(At, "cssMode"),
  stickyZIndex: Ie(At, "zIndex"),
  offsetTop: Ie(At, "offsetTop"),
  onClick: F(),
  onChange: F(),
  "onUpdate:active": F()
};
var uf = (e, n, o) => new Promise((t, r) => {
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
const { name: A3, n: M3, classes: N3 } = ne("tabs");
function V3(e, n) {
  return g(), we(wt(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: ue(() => [
      R(
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
          R(
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
              R(
                "div",
                {
                  class: p(e.classes(e.n("indicator"), e.n(`--layout-${e.layoutDirection}${e.indicatorPosition}-indicator`))),
                  style: Z({
                    width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                    height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                    transform: e.layoutDirection === "horizontal" ? `translateX(${e.indicatorX})` : `translateY(${e.indicatorY})`
                  })
                },
                [
                  R(
                    "div",
                    {
                      class: p(e.classes(e.n("indicator-inner"), e.n(`--layout-${e.layoutDirection}-indicator-inner`))),
                      style: Z({ background: e.indicatorColor || e.activeColor })
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
const Mg = ee({
  name: A3,
  components: { VarSticky: bt },
  inheritAttrs: !1,
  props: Ag,
  setup(e) {
    const n = w("0px"), o = w("0px"), t = w("0px"), r = w("0px"), a = w(!1), i = w(null), l = B(() => e.active), s = B(() => e.activeColor), u = B(() => e.inactiveColor), c = B(() => e.disabledColor), d = B(() => e.itemDirection), f = w(null), v = B(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: h, bindTabList: m, length: y } = w3();
    m({
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: c,
      itemDirection: d,
      resize: V,
      onTabClick: k
    }), fe(
      () => y.value,
      () => uf(this, null, function* () {
        yield bn(), V();
      })
    ), fe(() => [e.active, e.scrollable], V), Lo(V), to(V);
    function k(Y) {
      var z;
      const I = (z = Y.name.value) != null ? z : Y.index.value, { active: N, onChange: j, onClick: E } = e;
      $(e["onUpdate:active"], I), $(E, I), I !== N && $(j, I);
    }
    function b() {
      return h.find(({ name: Y }) => e.active === Y.value);
    }
    function S(Y) {
      return h.find(({ index: z }) => (Y ?? e.active) === z.value);
    }
    function T() {
      if (y.value === 0)
        return;
      const { active: Y } = e;
      if (En(Y)) {
        const z = $n(Y, 0, y.value - 1);
        return $(e["onUpdate:active"], z), S(z);
      }
    }
    function O() {
      a.value = e.scrollable === "always" || h.length >= 5;
    }
    function D({ element: Y }) {
      const z = Y.value;
      z && (e.layoutDirection === "horizontal" ? (n.value = `${z.offsetWidth}px`, t.value = `${z.offsetLeft}px`) : (o.value = `${z.offsetHeight}px`, r.value = `${z.offsetTop}px`));
    }
    function M({ element: Y }) {
      if (!a.value)
        return;
      const z = i.value, I = Y.value;
      if (e.layoutDirection === "horizontal") {
        const N = I.offsetLeft + I.offsetWidth / 2 - z.offsetWidth / 2;
        Vt(z, {
          left: N,
          animation: wl
        });
      } else {
        const N = I.offsetTop + I.offsetHeight / 2 - z.offsetHeight / 2;
        Vt(z, {
          top: N,
          animation: wl
        });
      }
    }
    function V() {
      const Y = b() || S() || T();
      !Y || Y.disabled.value || (O(), D(Y), M(Y));
    }
    function L() {
      return uf(this, null, function* () {
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
      Transition: xe,
      toSizeUnit: ze,
      n: M3,
      classes: N3,
      resize: V,
      resizeSticky: L,
      formatElevation: dn
    };
  }
});
Mg.render = V3;
var Gi = Mg;
re(Gi);
ie(Gi, Ag);
const oI = Gi;
var Rs = Gi;
const Ng = {
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
  "onUpdate:active": F()
};
var R3 = (e, n, o) => new Promise((t, r) => {
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
const { name: L3, n: F3 } = ne("tabs-items");
function U3(e, n) {
  const o = _("var-swipe");
  return g(), we(o, {
    ref: "swipe",
    class: p(e.n()),
    loop: e.loop,
    duration: e.animated ? void 0 : 0,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: ue(() => [
      H(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "loop", "duration", "touchable", "onChange"]);
}
const Vg = ee({
  name: L3,
  components: { VarSwipe: Kt },
  props: Ng,
  setup(e) {
    const n = w(null), { tabItemList: o, bindTabItem: t, length: r } = J4();
    t({}), fe(() => e.active, s), fe(
      () => r.value,
      () => R3(this, null, function* () {
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
      v && (o.forEach(({ setCurrent: h }) => h(!1)), v.setCurrent(!0), (f = n.value) == null || f.to(v.index.value));
    }
    function u(d) {
      var f;
      const v = o.find(({ index: m }) => m.value === d), h = (f = v.name.value) != null ? f : v.index.value;
      $(e["onUpdate:active"], h);
    }
    function c() {
      return n.value;
    }
    return {
      swipe: n,
      n: F3,
      handleSwipeChange: u,
      getSwipe: c
    };
  }
});
Vg.render = U3;
var Zi = Vg;
re(Zi);
ie(Zi, Ng);
const tI = Zi;
var Ls = Zi;
function Nu(e, n) {
  return Object.entries(e).reduce((o, [t, r]) => (o[t] = r.includes("px") ? r.replace(/(\d+(\.\d+)?)px/g, (a, i) => n(i)) : r, o), {});
}
var H3 = {
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
}, j3 = {
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
}, Y3 = {
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
}, W3 = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e",
  "--avatar-text-color": "#f5f5f5",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-hover-transform": "scale(1.1)"
}, K3 = {
  "--avatar-group-offset": "-10px"
}, q3 = {
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px",
  "--back-top-button-border-radius": "50%"
}, X3 = {
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
}, G3 = {
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-background-color": "var(--color-surface-container-high)",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, Z3 = {
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
}, J3 = {
  "--breadcrumb-inactive-color": "#aaa",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, Q3 = {
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
}, _3 = {
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
}, x3 = {
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
}, e8 = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, n8 = {
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
}, o8 = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, t8 = {
  "--collapse-text-color": "#fff",
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, r8 = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, a8 = {
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
}, i8 = {
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
}, l8 = {
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
}, s8 = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, u8 = {
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
}, c8 = {
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
}, d8 = {
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
}, f8 = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, p8 = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, v8 = {
  "--icon-size": "20px"
}, m8 = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, h8 = {
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
}, g8 = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, b8 = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, y8 = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, w8 = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, k8 = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, $8 = {
  "--menu-background-color": "#272727",
  "--menu-border-radius": "2px"
}, C8 = {
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
}, S8 = {
  "--menu-select-menu-background-color": "#272727",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0",
  "--menu-select-menu-border-radius": "2px"
}, P8 = {
  "--option-text-color": "#fff",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, O8 = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, z8 = {
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
}, E8 = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "4px"
}, T8 = {
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
}, B8 = {
  "--popup-content-background-color": "var(--color-surface-container-low)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, D8 = {
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
}, I8 = {
  "--pull-refresh-background": "#303030",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, A8 = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, M8 = {
  "--rate-color": "var(--color-text)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, N8 = {
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
}, V8 = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, R8 = {
  "--select-scroller-background": "#272727",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-scroller-border-radius": "2px",
  "--select-chips-margin": "-5px 0 0 0",
  "--select-chips-padding": "2px 0",
  "--select-chip-margin": "5px 5px 0 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, L8 = {
  "--signature-background-color": "var(--color-surface-container-highest)",
  "--signature-stroke-color": "#fff",
  "--signature-height": "200px",
  "--signature-border-radius": "4px"
}, F8 = {
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
}, U8 = {
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
}, H8 = {
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
}, j8 = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, Y8 = {
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
}, W8 = {
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
}, K8 = {
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
}, q8 = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, X8 = {
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
}, G8 = {
  "--tabs-background": "#1e1e1e",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, Z8 = {
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
}, J8 = {
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
}, Q8 = {
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
}, _8 = {
  "--watermark-content-color": "#ffffff"
}, x8 = Object.defineProperty, cf = Object.getOwnPropertySymbols, eE = Object.prototype.hasOwnProperty, nE = Object.prototype.propertyIsEnumerable, df = (e, n, o) => n in e ? x8(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ge = (e, n) => {
  for (var o in n || (n = {}))
    eE.call(n, o) && df(e, o, n[o]);
  if (cf)
    for (var o of cf(n))
      nE.call(n, o) && df(e, o, n[o]);
  return e;
}, oE = ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge({
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
}, Q3), j3), x3), _3), Z8), i8), F8), G8), q8), B8), l8), H3), n8), X3), Q8), t8), I8), K8), Y8), z8), X8), c8), A8), e8), s8), T8), Y3), Z3), $8), N8), J3), W3), b8), D8), P8), _8), S8), C8), K3), q3), G3), r8), a8), u8), d8), f8), p8), v8), m8), h8), g8), y8), w8), k8), O8), E8), M8), V8), U8), H8), j8), W8), J8), R8), o8), L8), tE = {
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
}, rE = {
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
}, aE = {
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
}, iE = {
  "--avatar-text-color": "#000",
  "--avatar-background-color": "var(--color-primary)",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-border": "2px solid #fff",
  "--avatar-hover-transform": "scale(1.1)"
}, lE = {
  "--avatar-group-offset": "-10px"
}, sE = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, uE = {
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
}, cE = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, dE = {
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
}, fE = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, pE = {
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
}, vE = {
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
}, mE = {
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
}, hE = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, gE = {
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
}, bE = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, yE = {
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-text-color": "var(--color-inverse-surface)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, wE = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, kE = {
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
}, $E = {
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
}, CE = {
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
}, SE = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, PE = {
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
}, OE = {
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
}, zE = {
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
}, EE = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, TE = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, BE = {
  "--icon-size": "20px"
}, DE = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, IE = {
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
}, AE = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, ME = {
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
}, VE = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, RE = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, LE = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, FE = {
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
}, UE = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, HE = {
  "--option-text-color": "var(--color-inverse-surface)",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, jE = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, YE = {
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
}, WE = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "12px"
}, KE = {
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
}, qE = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, XE = {
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
}, GE = {
  "--pull-refresh-background": "var(--color-surface-container-highest)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, ZE = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, JE = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, QE = {
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
}, _E = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, xE = {
  "--select-scroller-background": "var(--color-surface-container)",
  "--select-scroller-border-radius": "4px",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-chips-margin": "-5px 0 0 0",
  "--select-chips-padding": "2px 0",
  "--select-chip-margin": "5px 5px 0 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, eT = {
  "--signature-background-color": "var(--color-surface-container-highest)",
  "--signature-stroke-color": "var(--color-inverse-surface)",
  "--signature-height": "200px",
  "--signature-border-radius": "12px"
}, nT = {
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
}, oT = {
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
}, tT = {
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
}, rT = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, aT = {
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
}, iT = {
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
}, lT = {
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
}, sT = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, uT = {
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
}, cT = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, dT = {
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
}, fT = {
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
}, pT = {
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
}, vT = {
  "--watermark-content-color": "#ffffff"
}, mT = Object.defineProperty, ff = Object.getOwnPropertySymbols, hT = Object.prototype.hasOwnProperty, gT = Object.prototype.propertyIsEnumerable, pf = (e, n, o) => n in e ? mT(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, be = (e, n) => {
  for (var o in n || (n = {}))
    hT.call(n, o) && pf(e, o, n[o]);
  if (ff)
    for (var o of ff(n))
      gT.call(n, o) && pf(e, o, n[o]);
  return e;
}, bT = be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be({
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
}, pE), rE), TE), LE), UE), FE), PE), fE), ME), mE), WE), iE), OE), hE), ZE), vE), gE), uE), fT), XE), cT), sT), aT), SE), uT), YE), vT), yE), QE), aE), cE), dE), tT), tE), CE), GE), qE), KE), zE), sE), xE), HE), kE), lT), oT), pT), dT), $E), JE), nT), lE), wE), EE), BE), DE), IE), AE), NE), VE), RE), jE), _E), rT), iT), bE), eT), yT = {
  "--action-sheet-background": "var(--color-surface-container-high)",
  "--action-sheet-title-color": "var(--color-on-surface-variant)",
  "--action-sheet-action-item-color": "#1D1B20",
  "--action-sheet-border-radius": "0px"
}, wT = {
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
}, kT = {
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
}, $T = {
  "--avatar-text-color": "#fff",
  "--avatar-background-color": "var(--color-primary)"
}, CT = {
  "--avatar-group-offset": "-10px"
}, ST = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, PT = {
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
}, OT = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-fab-border-radius": "12px",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px"
}, zT = {
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
}, ET = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, TT = {
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
}, BT = {
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
}, DT = {
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
}, IT = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, AT = {
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
}, MT = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, NT = {
  "--collapse-background": "var(--color-surface-container-low)",
  "--collapse-text-color": "#1D1B20",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, VT = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, RT = {
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
}, LT = {
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
}, FT = {
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
}, UT = {
  "--divider-color": "var(--color-outline)",
  "--divider-text-color": "#888",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, HT = {
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
}, jT = {
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
}, YT = {
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
}, WT = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, KT = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, qT = {
  "--icon-size": "20px"
}, XT = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, GT = {
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
}, ZT = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, JT = {
  "--link-default-color": "#000",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, QT = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, _T = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, xT = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, e5 = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, n5 = {
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
}, o5 = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, t5 = {
  "--option-text-color": "#1D1B20",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, r5 = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, a5 = {
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
}, i5 = {
  "--paper-background": "var(--color-surface-container-low)",
  "--paper-border-radius": "12px"
}, l5 = {
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
}, s5 = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, u5 = {
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
}, c5 = {
  "--pull-refresh-background": "var(--color-body)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, d5 = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, f5 = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, p5 = {
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
}, v5 = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, m5 = {
  "--select-scroller-background": "var(--color-surface-container)",
  "--select-scroller-border-radius": "4px",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-chips-margin": "-5px 0 0 0",
  "--select-chips-padding": "2px 0",
  "--select-chip-margin": "5px 5px 0 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, h5 = {
  "--signature-background-color": "var(--color-surface-container-low)",
  "--signature-stroke-color": "#1D1B20",
  "--signature-height": "200px",
  "--signature-border-radius": "12px"
}, g5 = {
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
}, b5 = {
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
}, y5 = {
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
}, w5 = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, k5 = {
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
}, $5 = {
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
}, C5 = {
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
}, S5 = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, P5 = {
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
}, O5 = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, z5 = {
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
}, E5 = {
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
}, T5 = {
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
}, B5 = {
  "--watermark-content-color": "#808080"
}, D5 = Object.defineProperty, vf = Object.getOwnPropertySymbols, I5 = Object.prototype.hasOwnProperty, A5 = Object.prototype.propertyIsEnumerable, mf = (e, n, o) => n in e ? D5(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ye = (e, n) => {
  for (var o in n || (n = {}))
    I5.call(n, o) && mf(e, o, n[o]);
  if (vf)
    for (var o of vf(n))
      A5.call(n, o) && mf(e, o, n[o]);
  return e;
}, M5 = ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye({
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
}, TT), wT), KT), e5), o5), n5), HT), ET), JT), DT), i5), $T), jT), IT), d5), BT), AT), E5), O5), S5), P5), NT), p5), OT), zT), y5), yT), FT), c5), s5), l5), YT), ST), m5), t5), b5), T5), z5), LT), C5), f5), CT), PT), VT), RT), UT), WT), qT), XT), GT), ZT), QT), _T), xT), r5), a5), u5), v5), g5), w5), k5), $5), B5), kT), MT), h5);
function N5(e, n = {}) {
  const { rootFontSize: o = 16, unitPrecision: t = 6 } = n;
  return Nu(e, (r) => `${Number((r / o).toFixed(t))}rem`);
}
function V5(e, n = {}) {
  const { viewportWidth: o = 375, viewportUnit: t = "vmin", unitPrecision: r = 6 } = n;
  return Nu(e, (a) => `${Number((a / o * 100).toFixed(r))}${t}`);
}
const R5 = { dark: oE, md3Light: M5, md3Dark: bT, toViewport: V5, toRem: N5, convert: Nu }, rI = null;
var Fs = R5;
const Wn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], zn = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], hf = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"], Rg = {
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
  "onUpdate:modelValue": F(),
  onChange: F()
}, Lg = (e, n) => e === "24hr" || n === "am", Vu = (e, n, o) => {
  const t = Wn.findIndex((a) => W(a) === W(o)), r = Lg(e, n) ? o : zn[t];
  return {
    hourStr: r,
    hourNum: W(r)
  };
}, Dn = (e) => {
  const [n, o, t] = e.split(":");
  return {
    hour: W(n),
    minute: W(o),
    second: W(t)
  };
}, Fg = (e) => {
  var n, o;
  const { time: t, format: r, ampm: a, hour: i, max: l, min: s, disableHour: u } = e, { hourStr: c, hourNum: d } = Vu(r, a, i);
  let f = !1, v = !1;
  if (u.includes(c))
    return !0;
  if (l && !s) {
    const { hour: h, minute: m } = Dn(l);
    f = h === d && t > m;
  }
  if (!l && s) {
    const { hour: h, minute: m } = Dn(s);
    f = h === d && t < m;
  }
  if (l && s) {
    const { hour: h, minute: m } = Dn(l), { hour: y, minute: C } = Dn(s);
    f = y === d && t < C || h === d && t > m;
  }
  return (n = e.allowedTime) != null && n.minutes && (v = (o = e.allowedTime) == null ? void 0 : o.minutes(t)), f || v;
}, Ug = (e) => {
  var n, o;
  const { time: t, format: r, ampm: a, hour: i, minute: l, max: s, min: u, disableHour: c } = e, { hourStr: d, hourNum: f } = Vu(r, a, i);
  let v = !1, h = !1;
  if (c.includes(d))
    return !0;
  if (s && !u) {
    const { hour: m, minute: y, second: C } = Dn(s);
    v = m === f && y < l || y === l && t > C;
  }
  if (!s && u) {
    const { hour: m, minute: y, second: C } = Dn(u);
    v = m === f && y > l || y === l && t > C;
  }
  if (s && u) {
    const { hour: m, minute: y, second: C } = Dn(s), { hour: k, minute: b, second: S } = Dn(u);
    v = m === f && y < l || k === f && b > l || m === f && y === l && t > C || k === f && b === l && t < S;
  }
  return (n = e.allowedTime) != null && n.seconds && (h = (o = e.allowedTime) == null ? void 0 : o.seconds(t)), v || h;
}, { n: L5, classes: F5 } = ne("time-picker");
function U5(e, n) {
  return g(), P(
    "div",
    {
      class: p(e.n("clock"))
    },
    [
      R(
        "div",
        {
          class: p(e.n("clock-hand")),
          style: Z(e.handStyle)
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      (g(!0), P(
        Ae,
        null,
        qe(e.timeScales, (o, t) => (g(), P(
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
            style: Z(e.getStyle(t, o, !1))
          },
          le(o),
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
            Ae,
            null,
            qe(e.hours24, (o, t) => (g(), P(
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
                style: Z(e.getStyle(t, o, !0))
              },
              le(o),
              7
              /* TEXT, CLASS, STYLE */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Hg = ee({
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
    const o = w(null), t = w([]), r = w([]), a = B(() => ({
      transform: `rotate(${W(e.rad)}deg)`,
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: u(),
      borderColor: u()
    })), i = B(() => {
      if (e.rad === void 0)
        return;
      const m = e.rad / 30;
      return m >= 0 ? m : m + 12;
    }), l = B(() => e.type === "hour" ? Wn : hf), s = (m, y) => {
      m = m ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const C = e.type === "minute" ? Fg : Ug, k = {
        time: W(m),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: W(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return y && e.type === "minute" && Reflect.deleteProperty(k, "minute"), C(k);
    }, u = () => {
      if (i.value === void 0)
        return e.color;
      const m = e.isInner ? zn[i.value] : l.value[i.value];
      return l.value === hf ? s() ? "var(--time-picker-clock-item-disable-background)" : e.color : d(m) ? "var(--time-picker-clock-item-disable-background)" : e.color;
    }, c = (m, y) => y ? i.value === m && e.isInner : i.value === m && (!e.isInner || e.type !== "hour"), d = (m) => {
      if (e.type === "hour") {
        if (Lg(e.format, e.ampm))
          return t.value.includes(m);
        const y = Wn.findIndex((C) => C === m);
        return r.value.includes(y);
      }
      return s(m, !0);
    }, f = (m, y, C) => {
      const k = 2 * Math.PI / 12 * m - Math.PI / 2, b = 50 * (1 + Math.cos(k)), S = 50 * (1 + Math.sin(k)), T = () => c(m, C) ? d(y) ? {
        backgroundColor: "var(--time-picker-clock-item-disable-background)",
        color: "var(--time-picker-clock-item-disable-color)"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, { backgroundColor: O, color: D } = T();
      return {
        left: `${b}%`,
        top: `${S}%`,
        backgroundColor: O,
        color: D
      };
    }, v = () => {
      const { width: m, height: y } = nn(o.value);
      return {
        width: m,
        height: y
      };
    }, h = () => {
      if (i.value === void 0)
        return;
      const m = e.ampm === "am" ? Wn : zn;
      return Qo(m[i.value], 2, "0");
    };
    return fe([i, () => e.isInner], ([m, y], [C, k]) => {
      if (m === C && y === k || e.type !== "hour" || i.value === void 0)
        return;
      const S = y ? zn[i.value] : h(), T = e.useSeconds ? `:${e.time.second}` : "", O = `${S}:${e.time.minute}${T}`;
      e.preventNextUpdate || n("update", O), n("change-prevent-update");
    }), fe(
      () => e.rad,
      (m, y) => {
        if (e.type === "hour" || m === void 0 || y === void 0)
          return;
        const C = m / 6 >= 0 ? m / 6 : m / 6 + 60, k = y / 6 >= 0 ? y / 6 : y / 6 + 60;
        if (C === k)
          return;
        let b;
        const { hourStr: S } = Vu(e.format, e.ampm, e.time.hour);
        if (e.type === "minute") {
          const T = se().minute(C).format("mm"), O = e.useSeconds ? `:${e.time.second}` : "";
          b = `${S}:${T}${O}`;
        }
        if (e.type === "second") {
          const T = se().second(C).format("ss"), O = e.useSeconds ? `:${T}` : "";
          b = `${S}:${e.time.minute}${O}`;
        }
        n("update", b);
      }
    ), fe(
      [() => e.max, () => e.min, () => e.allowedTime],
      ([m, y, C]) => {
        if (t.value = [], m && !y) {
          const { hour: k } = Dn(m), b = Wn.filter((T) => W(T) > k), S = zn.filter((T) => W(T) > k);
          t.value = [...b, ...S];
        }
        if (!m && y) {
          const { hour: k } = Dn(y), b = Wn.filter((T) => W(T) < k), S = zn.filter((T) => W(T) < k);
          t.value = [...b, ...S];
        }
        if (m && y) {
          const { hour: k } = Dn(m), { hour: b } = Dn(y), S = Wn.filter((O) => W(O) < b || W(O) > k), T = zn.filter((O) => W(O) < b || W(O) > k);
          t.value = [...S, ...T];
        }
        if (C != null && C.hours) {
          const { hours: k } = C, b = Wn.filter((T) => !k(W(T))), S = zn.filter((T) => !k(W(T)));
          t.value = [.../* @__PURE__ */ new Set([...t.value, ...b, ...S])];
        }
        r.value = t.value.map((k) => zn.findIndex((b) => k === b)).filter((k) => k >= 0);
      },
      { immediate: !0, deep: !0 }
    ), {
      n: L5,
      classes: F5,
      hours24: zn,
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
Hg.render = U5;
var H5 = Hg;
const { name: j5, n: Y5, classes: W5 } = ne("time-picker");
function K5(e, n) {
  var o;
  const t = _("clock");
  return g(), P(
    "div",
    {
      ref: "picker",
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [
      R(
        "div",
        {
          class: p(e.n("title")),
          style: Z({ background: e.titleColor || e.color })
        },
        [
          R(
            "div",
            {
              class: p(e.n("title-hint"))
            },
            le((o = e.hint) != null ? o : (e.pt ? e.pt : e.t)("timePickerHint")),
            3
            /* TEXT, CLASS */
          ),
          R(
            "div",
            {
              class: p(e.n("title-time-container"))
            },
            [
              R(
                "div",
                {
                  class: p(e.n("title-time"))
                },
                [
                  R(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
                      onClick: n[0] || (n[0] = (r) => e.checkPanel("hour"))
                    },
                    le(e.time.hour),
                    3
                    /* TEXT, CLASS */
                  ),
                  R(
                    "span",
                    {
                      class: p(e.n("title-splitter"))
                    },
                    ":",
                    2
                    /* CLASS */
                  ),
                  R(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
                      onClick: n[1] || (n[1] = (r) => e.checkPanel("minute"))
                    },
                    le(e.time.minute),
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
                  )) : G("v-if", !0),
                  e.useSeconds ? (g(), P(
                    "div",
                    {
                      key: 1,
                      class: p(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
                      onClick: n[2] || (n[2] = (r) => e.checkPanel("second"))
                    },
                    le(e.time.second),
                    3
                    /* TEXT, CLASS */
                  )) : G("v-if", !0)
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
                  R(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
                      onClick: n[3] || (n[3] = (r) => e.checkAmpm("am"))
                    },
                    " AM ",
                    2
                    /* CLASS */
                  ),
                  R(
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
              )) : G("v-if", !0)
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      R(
        "div",
        {
          class: p(e.n("body"))
        },
        [
          R(
            "div",
            {
              ref: "container",
              class: p(e.n("clock-container")),
              onTouchstart: n[5] || (n[5] = (...r) => e.moveHand && e.moveHand(...r)),
              onTouchmove: n[6] || (n[6] = (...r) => e.moveHand && e.moveHand(...r)),
              onTouchend: n[7] || (n[7] = (...r) => e.end && e.end(...r))
            },
            [
              X(xe, {
                name: `${e.n()}-panel-fade`
              }, {
                default: ue(() => [
                  (g(), we(t, {
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
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const jg = ee({
  name: j5,
  components: { Clock: H5 },
  props: Rg,
  setup(e) {
    const n = w(null), o = w(null), t = w(null), r = w(!1), a = w(!1), i = w(!1), l = w(!1), s = w(!1), u = w(!1), c = w(!1), d = w(0), f = w(0), v = w(), h = w("hour"), m = w("am"), y = w({
      hour: "00",
      minute: "00",
      second: "00"
    }), C = en({
      x: 0,
      y: 0
    }), k = en({
      x: [],
      y: []
    }), b = B(() => h.value === "hour" ? v.value : h.value === "minute" ? d.value : f.value), { t: S } = so();
    fe(
      () => e.modelValue,
      (U) => {
        if (U === void 0 || U === "") {
          T();
          return;
        }
        const { hour: Q, minute: te, second: he } = Dn(U), A = se().hour(Q).format("hh"), K = se().hour(Q).format("HH"), pe = se().minute(te).format("mm"), Se = se().second(he).format("ss");
        v.value = (A === "12" ? 0 : W(A)) * 30, d.value = W(pe) * 6, f.value = W(Se) * 6, y.value = z(U), e.format !== "24hr" && (m.value = Qo(`${Q}`, 2, "0") === K && zn.includes(K) ? "pm" : "am"), r.value = e.format === "24hr" && zn.includes(K);
      },
      { immediate: !0 }
    );
    function T() {
      v.value = void 0, d.value = 0, f.value = 0, y.value = {
        hour: "00",
        minute: "00",
        second: "00"
      }, m.value = "am";
    }
    function O(U) {
      $(e["onUpdate:modelValue"], U), $(e.onChange, U);
    }
    function D(U) {
      return U * 57.29577951308232;
    }
    function M(U) {
      l.value = !1, c.value = !1, h.value = U;
    }
    function V(U) {
      const { disableHour: Q } = t.value, te = Wn.findIndex((K) => W(K) === W(y.value.hour)), he = U === "am" ? Wn : zn;
      return [...he.slice(te), ...he.slice(0, te)].find((K, pe) => (a.value = pe !== 0, !Q.includes(K)));
    }
    function L(U) {
      if (e.readonly)
        return;
      m.value = U;
      const Q = V(U);
      if (!Q)
        return;
      const te = e.useSeconds ? `:${y.value.second}` : "", he = `${Qo(Q, 2, "0")}:${y.value.minute}${te}`;
      O(he);
    }
    function Y(U, Q) {
      const te = U >= k.x[0] && U <= k.x[1], he = Q >= k.y[0] && Q <= k.y[1];
      return te && he;
    }
    function z(U) {
      const Q = e.format === "24hr" ? "HH" : "hh", { hour: te, minute: he, second: A } = Dn(U);
      return {
        hour: se().hour(te).format(Q),
        minute: se().minute(he).format("mm"),
        second: se().second(A).format("ss")
      };
    }
    function I(U) {
      const Q = U / 30;
      return Q >= 0 ? Q : Q + 12;
    }
    function N() {
      const { width: U, height: Q } = t.value.getSize(), te = C.x - U / 2 - 8, he = C.x + U / 2 + 8, A = C.y - Q / 2 - 8, K = C.y + Q / 2 + 8;
      return {
        rangeXMin: te,
        rangeXMax: he,
        rangeYMin: A,
        rangeYMax: K
      };
    }
    function j(U, Q, te) {
      const { disableHour: he } = t.value;
      i.value = Y(U, Q);
      const A = Math.round(te / 30) * 30 + 90, K = I(A), pe = r.value ? Wn[K] : zn[K];
      if (he.includes(pe) || (r.value = e.format === "24hr" ? Y(U, Q) : !1), r.value !== i.value)
        return;
      const Se = r.value || m.value === "pm" ? zn[K] : Wn[K];
      u.value = he.includes(Se), !u.value && (v.value = A, l.value = !0);
    }
    function E(U) {
      const { disableHour: Q } = t.value, te = Math.round(U / 6) * 6 + 90, A = {
        time: te / 6 >= 0 ? te / 6 : te / 6 + 60,
        format: e.format,
        ampm: m.value,
        hour: y.value.hour,
        max: e.max,
        min: e.min,
        disableHour: Q,
        allowedTime: e.allowedTime
      };
      c.value = Fg(A), !c.value && (d.value = te, s.value = !0);
    }
    function J(U) {
      const { disableHour: Q } = t.value, te = Math.round(U / 6) * 6 + 90, A = {
        time: te / 6 >= 0 ? te / 6 : te / 6 + 60,
        format: e.format,
        ampm: m.value,
        hour: y.value.hour,
        minute: W(y.value.minute),
        max: e.max,
        min: e.min,
        disableHour: Q,
        allowedTime: e.allowedTime
      };
      Ug(A) || (f.value = te);
    }
    function de() {
      const { left: U, top: Q, width: te, height: he } = nn(n.value);
      if (C.x = U + te / 2, C.y = Q + he / 2, h.value === "hour" && e.format === "24hr") {
        const { rangeXMin: A, rangeXMax: K, rangeYMin: pe, rangeYMax: Se } = N();
        k.x = [A, K], k.y = [pe, Se];
      }
    }
    function q(U) {
      if (Me(U), e.readonly)
        return;
      de();
      const { clientX: Q, clientY: te } = U.touches[0], he = Q - C.x, A = te - C.y, K = Math.round(D(Math.atan2(A, he)));
      h.value === "hour" ? j(Q, te, K) : h.value === "minute" ? E(K) : J(K);
    }
    function me() {
      if (!e.readonly) {
        if (h.value === "hour" && l.value) {
          h.value = "minute";
          return;
        }
        h.value === "minute" && e.useSeconds && s.value && (h.value = "second");
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
      type: h,
      ampm: m,
      isPreventNextUpdate: a,
      n: Y5,
      classes: W5,
      t: an,
      pt: S,
      moveHand: q,
      checkPanel: M,
      checkAmpm: L,
      end: me,
      update: O,
      changePreventUpdate: Pe,
      formatElevation: dn
    };
  }
});
jg.render = K5;
var Ji = jg;
re(Ji);
ie(Ji, Rg);
const aI = Ji;
var Us = Ji;
const Yg = {
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
  onClickAction: F(),
  onBeforeFilter: F(),
  onBeforeRead: F(),
  onAfterRead: F(),
  onBeforeRemove: F(),
  onRemove: F(),
  onOversize: F(),
  onPreview: F(),
  "onUpdate:modelValue": F()
};
var Tr = (e, n, o) => new Promise((t, r) => {
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
const { name: q5, n: X5, classes: G5 } = ne("uploader");
let Z5 = 0;
const J5 = ["onClick"], Q5 = ["onClick"], _5 = ["src", "alt"], x5 = ["tabindex"], eB = ["multiple", "accept", "capture", "disabled"], nB = ["src"];
function oB(e, n) {
  const o = _("var-icon"), t = _("var-hover-overlay"), r = _("var-form-details"), a = _("var-popup"), i = We("ripple"), l = We("hover");
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      R(
        "div",
        {
          class: p(e.n("file-list"))
        },
        [
          (g(!0), P(
            Ae,
            null,
            qe(e.files, (s) => Ne((g(), P("div", {
              key: s.id,
              class: p(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
              onClick: (u) => e.preview(s)
            }, [
              R(
                "div",
                {
                  class: p(e.n("file-name"))
                },
                le(s.name || s.url),
                3
                /* TEXT, CLASS */
              ),
              e.removable ? H(e.$slots, "remove-button", {
                key: 0,
                remove: () => {
                  e.handleRemove(s);
                }
              }, () => [
                R("div", {
                  class: p(e.n("file-close")),
                  onClick: Rn((u) => e.handleRemove(s), ["stop"])
                }, [
                  X(o, {
                    class: p(e.n("file-close-icon")),
                    "var-uploader-cover": "",
                    name: "delete"
                  }, null, 8, ["class"])
                ], 10, Q5)
              ]) : G("v-if", !0),
              s.cover ? (g(), P("img", {
                key: 1,
                role: "img",
                class: p(e.n("file-cover")),
                style: Z({ objectFit: s.fit }),
                src: s.cover,
                alt: s.name
              }, null, 14, _5)) : G("v-if", !0),
              R(
                "div",
                {
                  class: p(e.n("file-indicator"))
                },
                [
                  R(
                    "div",
                    {
                      class: p(
                        e.classes(e.n("progress"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")])
                      ),
                      style: Z({ width: s.state === "success" || s.state === "error" ? "100%" : `${s.progress}%` })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  )
                ],
                2
                /* CLASS */
              )
            ], 10, J5)), [
              [i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple }]
            ])),
            128
            /* KEYED_FRAGMENT */
          )),
          !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Ne((g(), P("div", {
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
            R("input", {
              ref: "input",
              type: "file",
              class: p(e.n("action-input")),
              multiple: e.multiple,
              accept: e.accept,
              capture: e.capture,
              disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
              onChange: n[0] || (n[0] = (...s) => e.handleChange && e.handleChange(...s)),
              onClick: n[1] || (n[1] = Rn(() => {
              }, ["stop"]))
            }, null, 42, eB),
            H(e.$slots, "default", {}, () => [
              X(o, {
                class: p(e.n("action-icon")),
                "var-uploader-cover": "",
                name: "plus"
              }, null, 8, ["class"]),
              X(t, {
                hovering: e.hovering && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly,
                focusing: e.isFocusing && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly
              }, null, 8, ["hovering", "focusing"])
            ])
          ], 42, x5)), [
            [i, {
              disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || !!e.$slots.default
            }],
            [l, e.handleHovering, "desktop"]
          ]) : G("v-if", !0)
        ],
        2
        /* CLASS */
      ),
      X(r, {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      }, Xo({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: ue(() => [
            H(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"]),
      X(a, {
        show: e.showPreview,
        "onUpdate:show": n[5] || (n[5] = (s) => e.showPreview = s),
        class: p(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        onClosed: n[6] || (n[6] = (s) => e.currentPreview = null)
      }, {
        default: ue(() => {
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
            }, null, 10, nB)) : G("v-if", !0)
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
const Wg = ee({
  name: q5,
  directives: { Ripple: rn, Hover: In },
  components: {
    VarIcon: Ge,
    VarPopup: Mo,
    VarFormDetails: Tn,
    VarHoverOverlay: Un
  },
  props: Yg,
  setup(e) {
    const n = w(!1), o = w(null), t = w(null), r = w(!1), a = w(null), i = B(() => {
      const {
        maxlength: U,
        modelValue: { length: Q }
      } = e;
      return En(U) ? `${Q} / ${U}` : "";
    }), { form: l, bindForm: s } = jn(), {
      errorMessage: u,
      validateWithTrigger: c,
      validate: d,
      // expose
      resetValidation: f
    } = Hn(), { hovering: v, handleHovering: h } = no(), m = B(() => {
      const { modelValue: U, hideList: Q } = e;
      return Q ? [] : U;
    });
    let y = !1;
    const C = {
      getSuccess: N,
      getError: j,
      getLoading: E
    };
    $(s, {
      validate: me,
      resetValidation: f,
      reset: Pe
    }), He(() => window, "keydown", b), He(() => window, "keyup", S), fe(
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
    function T(U) {
      const { disabled: Q, previewed: te, preventDefaultPreview: he, onPreview: A } = e;
      if (l != null && l.disabled.value || Q || !te || ($(A, en(U)), he))
        return;
      const { url: K } = U;
      if (Ac(K)) {
        Xt(K);
        return;
      }
      Mc(K) && (a.value = U, r.value = !0);
    }
    function O(U) {
      return {
        id: Z5++,
        url: "",
        cover: "",
        name: U.name,
        file: U,
        progress: 0
      };
    }
    function D(U) {
      const Q = U.target, { files: te } = Q;
      return Array.from(te);
    }
    function M(U) {
      return Tr(this, null, function* () {
        const Q = U.file;
        if (e.resolveType === "default" && Q.type.startsWith("image") || e.resolveType === "data-url") {
          const he = yield Gf(Q);
          U.cover = he, U.url = he;
        }
        return U;
      });
    }
    function V(U) {
      return U.map(M);
    }
    function L(U) {
      const { onBeforeRead: Q } = e;
      return U.map(
        (te) => new Promise((he) => {
          Q || he({
            valid: !0,
            varFile: te
          });
          const A = fo($(Q, en(te)));
          Promise.all(A).then((K) => {
            he({
              valid: K.every(Boolean),
              varFile: te
            });
          });
        })
      );
    }
    function Y(U) {
      return Tr(this, null, function* () {
        const { maxsize: Q, maxlength: te, modelValue: he, onOversize: A, onAfterRead: K, onBeforeFilter: pe, readonly: Se, disabled: Ue } = e;
        if (l != null && l.disabled.value || l != null && l.readonly.value || Ue || Se)
          return;
        const Ve = (ke) => ke.filter((Be) => Be.file.size > W(Q) ? ($(A, en(Be)), !1) : !0), Qe = (ke) => {
          const Be = Math.min(ke.length, W(te) - he.length);
          return ke.slice(0, Be);
        }, un = (ke) => Tr(this, null, function* () {
          if (!pe)
            return ke;
          const Be = fo(pe);
          for (const _e of Be)
            ke = yield _e(ke);
          return ke;
        });
        let ve = D(U).map(O);
        ve = yield un(ve), ve = Q != null ? Ve(ve) : ve, ve = te != null ? Qe(ve) : ve;
        const Ke = yield Promise.all(V(ve)), ce = (yield Promise.all(L(Ke))).filter(({ valid: ke }) => ke).map(({ varFile: ke }) => ke);
        $(e["onUpdate:modelValue"], [...he, ...ce]), U.target.value = "", ce.forEach((ke) => $(K, en(ke)));
      });
    }
    function z(U) {
      return Tr(this, null, function* () {
        const { disabled: Q, readonly: te, modelValue: he, onBeforeRemove: A, onRemove: K } = e;
        if (l != null && l.disabled.value || l != null && l.readonly.value || Q || te)
          return;
        if (A) {
          const Se = fo($(A, en(U)));
          if ((yield Promise.all(Se)).some((Ue) => !Ue))
            return;
        }
        const pe = he.filter((Se) => Se !== U);
        $(K, en(U)), q("onRemove"), $(e["onUpdate:modelValue"], pe);
      });
    }
    function I(U) {
      if (!(l != null && l.disabled.value || e.disabled)) {
        if (e.onClickAction) {
          $(e.onClickAction, J, U);
          return;
        }
        J();
      }
    }
    function N() {
      return e.modelValue.filter((U) => U.state === "success");
    }
    function j() {
      return e.modelValue.filter((U) => U.state === "error");
    }
    function E() {
      return e.modelValue.filter((U) => U.state === "loading");
    }
    function J() {
      t.value.click();
    }
    function de() {
      a.value = null, r.value = !1, Xt.close();
    }
    function q(U) {
      Ye(() => {
        const { validateTrigger: Q, rules: te, modelValue: he } = e;
        c(Q, U, te, he, C);
      });
    }
    function me() {
      return d(e.rules, e.modelValue, C);
    }
    function Pe() {
      y = !0, $(e["onUpdate:modelValue"], []), f();
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
      n: X5,
      classes: G5,
      formatElevation: dn,
      toNumber: W,
      handleHovering: h,
      isHTMLSupportVideo: Mc,
      isHTMLSupportImage: Ac,
      preview: T,
      handleChange: Y,
      handleRemove: z,
      getSuccess: N,
      getError: j,
      getLoading: E,
      validate: me,
      resetValidation: f,
      reset: Pe,
      chooseFile: J,
      closePreview: de,
      handleActionClick: I,
      toSizeUnit: ze
    };
  }
});
Wg.render = oB;
var Qi = Wg;
re(Qi);
ie(Qi, Yg);
const iI = Qi;
var Hs = Qi;
const Kg = {
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
var tB = Object.defineProperty, rB = Object.defineProperties, aB = Object.getOwnPropertyDescriptors, gf = Object.getOwnPropertySymbols, iB = Object.prototype.hasOwnProperty, lB = Object.prototype.propertyIsEnumerable, bf = (e, n, o) => n in e ? tB(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, sB = (e, n) => {
  for (var o in n || (n = {}))
    iB.call(n, o) && bf(e, o, n[o]);
  if (gf)
    for (var o of gf(n))
      lB.call(n, o) && bf(e, o, n[o]);
  return e;
}, uB = (e, n) => rB(e, aB(n)), cB = (e, n, o) => new Promise((t, r) => {
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
const { name: dB, n: fB, classes: pB } = ne("watermark"), vB = { ref: "svgRef" }, mB = ["viewBox", "width", "height"], hB = ["width", "height"], gB = ["href", "xlink:href", "x", "y", "width", "height"];
function bB(e, n) {
  return g(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      H(e.$slots, "default"),
      (g(), we(lo, {
        to: "body",
        disabled: !e.fullscreen
      }, [
        R(
          "div",
          {
            ref: "containerRef",
            class: p(e.classes(e.n("container"), [e.fullscreen, e.n("--fullscreen")])),
            style: Z({
              backgroundImage: `url(${e.watermarkUrl})`,
              zIndex: e.zIndex
            })
          },
          [
            Ne(R(
              "div",
              vB,
              [
                (g(), P("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  viewBox: `0 0 ${e.width + e.gapX} ${e.height + e.gapY}`,
                  width: `${e.width + e.gapX}`,
                  height: `${e.height + e.gapY}`,
                  style: Z({
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
                    R(
                      "div",
                      {
                        xmlns: "http://www.w3.org/1999/xhtml",
                        style: Z({
                          transform: `translate(${e.offsetX}px, ${e.offsetY}px) rotate(${e.rotate}deg)`,
                          transformOrigin: "center"
                        })
                      },
                      [
                        H(e.$slots, "content", {}, () => [
                          R(
                            "span",
                            {
                              style: Z(uB(sB({}, e.font), { fontSize: `${e.font.fontSize}px`, color: e.textColor }))
                            },
                            le(e.content),
                            5
                            /* TEXT, STYLE */
                          )
                        ])
                      ],
                      4
                      /* STYLE */
                    )
                  ], 8, hB)) : G("v-if", !0),
                  !e.$slots.content && e.image ? (g(), P("image", {
                    key: 1,
                    href: e.imageUrl,
                    "xlink:href": e.imageUrl,
                    x: e.offsetX,
                    y: e.offsetY,
                    width: e.width,
                    height: e.height,
                    style: Z({
                      transform: `rotate(${e.rotate}deg)`,
                      transformOrigin: "center"
                    })
                  }, null, 12, gB)) : G("v-if", !0)
                ], 12, mB))
              ],
              512
              /* NEED_PATCH */
            ), [
              [eo, !1]
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
const qg = ee({
  name: dB,
  props: Kg,
  setup(e, { slots: n }) {
    const o = w(""), t = w(""), r = w(""), a = w(null), i = w(null);
    fe(
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
    ), bo(d), Jt(c);
    function l() {
      return !!(n.content || e.content && !e.image);
    }
    function s() {
      return new Promise((f) => {
        const v = document.createElement("canvas"), h = v.getContext("2d"), m = new Image();
        m.crossOrigin = "anonymous", m.referrerPolicy = "no-referrer", m.src = e.image, m.onload = () => {
          v.width = m.width, v.height = m.height, h.drawImage(m, 0, 0), f(v.toDataURL());
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
      return cB(this, null, function* () {
        r.value = Zn(i.value).color, e.image && (t.value = yield s()), yield Ye(), c(), o.value = u(a.value.innerHTML);
      });
    }
    return {
      svgRef: a,
      containerRef: i,
      watermarkUrl: o,
      imageUrl: t,
      textColor: r,
      n: fB,
      classes: pB,
      showContent: l,
      resize: d
    };
  }
});
qg.render = bB;
var _i = qg;
re(_i);
ie(_i, Kg);
const lI = _i;
var js = _i;
const yB = "3.11.3";
function wB(e) {
  vl.install && e.use(vl), ml.install && e.use(ml), hl.install && e.use(hl), yl.install && e.use(yl), $l.install && e.use($l), Cl.install && e.use(Cl), Sl.install && e.use(Sl), Qr.install && e.use(Qr), Pl.install && e.use(Pl), Ol.install && e.use(Ol), zl.install && e.use(zl), El.install && e.use(El), Bn.install && e.use(Bn), Tl.install && e.use(Tl), Bl.install && e.use(Bl), Dl.install && e.use(Dl), ct.install && e.use(ct), Il.install && e.use(Il), _r.install && e.use(_r), Ml.install && e.use(Ml), Nl.install && e.use(Nl), Vl.install && e.use(Vl), Rl.install && e.use(Rl), Ll.install && e.use(Ll), Vn.install && e.use(Vn), Fl.install && e.use(Fl), Yl.install && e.use(Yl), Jl.install && e.use(Jl), _l.install && e.use(_l), xl.install && e.use(xl), es.install && e.use(es), ra.install && e.use(ra), ns.install && e.use(ns), os.install && e.use(os), Rt.install && e.use(Rt), ts.install && e.use(ts), rs.install && e.use(rs), Tn.install && e.use(Tn), as.install && e.use(as), In.install && e.use(In), Un.install && e.use(Un), Ge.install && e.use(Ge), is.install && e.use(is), Xt.install && e.use(Xt), ls.install && e.use(ls), ss.install && e.use(ss), Lt.install && e.use(Lt), Yt.install && e.use(Yt), us.install && e.use(us), cs.install && e.use(cs), mt.install && e.use(mt), ds.install && e.use(ds), fl.install && e.use(fl), fs.install && e.use(fs), Ht.install && e.use(Ht), dt.install && e.use(dt), jt.install && e.use(jt), ia.install && e.use(ia), ps.install && e.use(ps), vs.install && e.use(vs), ms.install && e.use(ms), hs.install && e.use(hs), Mo.install && e.use(Mo), gs.install && e.use(gs), bs.install && e.use(bs), la.install && e.use(la), ys.install && e.use(ys), ws.install && e.use(ws), ks.install && e.use(ks), rn.install && e.use(rn), $s.install && e.use($s), Cs.install && e.use(Cs), Ss.install && e.use(Ss), Ps.install && e.use(Ps), Os.install && e.use(Os), Es.install && e.use(Es), Ts.install && e.use(Ts), Bs.install && e.use(Bs), Ds.install && e.use(Ds), bt.install && e.use(bt), Is.install && e.use(Is), Kt.install && e.use(Kt), qt.install && e.use(qt), As.install && e.use(As), Ms.install && e.use(Ms), Ns.install && e.use(Ns), Vs.install && e.use(Vs), Rs.install && e.use(Rs), Ls.install && e.use(Ls), Fs.install && e.use(Fs), Us.install && e.use(Us), aa.install && e.use(aa), Hs.install && e.use(Hs), js.install && e.use(js);
}
const sI = {
  version: yB,
  install: wB,
  ActionSheet: vl,
  Alert: ml,
  AppBar: hl,
  AutoComplete: yl,
  Avatar: $l,
  AvatarGroup: Cl,
  BackTop: Sl,
  Badge: Qr,
  BottomNavigation: Pl,
  BottomNavigationItem: Ol,
  Breadcrumb: zl,
  Breadcrumbs: El,
  Button: Bn,
  ButtonGroup: Tl,
  Card: Bl,
  Cell: Dl,
  Checkbox: ct,
  CheckboxGroup: Il,
  Chip: _r,
  Code: Ml,
  Col: Nl,
  Collapse: Vl,
  CollapseItem: Rl,
  CollapseTransition: Ll,
  Context: Vn,
  CountTo: Fl,
  Countdown: Yl,
  Counter: Jl,
  DatePicker: _l,
  Dialog: xl,
  Divider: es,
  Drag: ra,
  Ellipsis: ns,
  Fab: os,
  FieldDecorator: Rt,
  FloatingPanel: ts,
  Form: rs,
  FormDetails: Tn,
  HighlighterProvider: as,
  Hover: In,
  HoverOverlay: Un,
  Icon: Ge,
  Image: is,
  ImagePreview: Xt,
  IndexAnchor: ls,
  IndexBar: ss,
  Input: Lt,
  Lazy: Yt,
  Link: us,
  List: cs,
  Loading: mt,
  LoadingBar: ds,
  Locale: fl,
  LocaleProvider: fs,
  Menu: Ht,
  MenuOption: dt,
  MenuSelect: jt,
  Option: ia,
  Overlay: ps,
  Pagination: vs,
  Paper: ms,
  Picker: hs,
  Popup: Mo,
  Progress: gs,
  PullRefresh: bs,
  Radio: la,
  RadioGroup: ys,
  Rate: ws,
  Result: ks,
  Ripple: rn,
  Row: $s,
  Select: Cs,
  Signature: Ss,
  Skeleton: Ps,
  Slider: Os,
  Snackbar: Es,
  Space: Ts,
  Step: Bs,
  Steps: Ds,
  Sticky: bt,
  StyleProvider: Is,
  Swipe: Kt,
  SwipeItem: qt,
  Switch: As,
  Tab: Ms,
  TabItem: Ns,
  Table: Vs,
  Tabs: Rs,
  TabsItems: Ls,
  Themes: Fs,
  TimePicker: Us,
  Tooltip: aa,
  Uploader: Hs,
  Watermark: js
};
export {
  vl as ActionSheet,
  ml as Alert,
  hl as AppBar,
  yl as AutoComplete,
  $l as Avatar,
  Cl as AvatarGroup,
  Sl as BackTop,
  Qr as Badge,
  Pl as BottomNavigation,
  Ol as BottomNavigationItem,
  zl as Breadcrumb,
  El as Breadcrumbs,
  Bn as Button,
  Tl as ButtonGroup,
  Bl as Card,
  Dl as Cell,
  ct as Checkbox,
  Il as CheckboxGroup,
  _r as Chip,
  Ml as Code,
  Nl as Col,
  Vl as Collapse,
  Rl as CollapseItem,
  Ll as CollapseTransition,
  Vn as Context,
  Fl as CountTo,
  Yl as Countdown,
  Jl as Counter,
  _l as DatePicker,
  xl as Dialog,
  es as Divider,
  ra as Drag,
  ns as Ellipsis,
  os as Fab,
  Rt as FieldDecorator,
  ts as FloatingPanel,
  rs as Form,
  Tn as FormDetails,
  as as HighlighterProvider,
  In as Hover,
  Un as HoverOverlay,
  Ge as Icon,
  is as Image,
  Xt as ImagePreview,
  ls as IndexAnchor,
  ss as IndexBar,
  Lt as Input,
  Yt as Lazy,
  us as Link,
  cs as List,
  mt as Loading,
  ds as LoadingBar,
  fl as Locale,
  fs as LocaleProvider,
  Ht as Menu,
  dt as MenuOption,
  jt as MenuSelect,
  ia as Option,
  ps as Overlay,
  kl as PIXEL,
  vs as Pagination,
  ms as Paper,
  hs as Picker,
  Mo as Popup,
  gs as Progress,
  bs as PullRefresh,
  la as Radio,
  ys as RadioGroup,
  ws as Rate,
  ks as Result,
  rn as Ripple,
  $s as Row,
  pg as SNACKBAR_TYPE,
  Cs as Select,
  Ss as Signature,
  Ps as Skeleton,
  Os as Slider,
  Es as Snackbar,
  Ts as Space,
  Bs as Step,
  Ds as Steps,
  bt as Sticky,
  Is as StyleProvider,
  Kt as Swipe,
  qt as SwipeItem,
  As as Switch,
  Ms as Tab,
  Ns as TabItem,
  Vs as Table,
  Rs as Tabs,
  Ls as TabsItems,
  Fs as Themes,
  Us as TimePicker,
  aa as Tooltip,
  Hs as Uploader,
  js as Watermark,
  TB as _ActionSheetComponent,
  BB as _AlertComponent,
  DB as _AppBarComponent,
  FB as _AutoCompleteComponent,
  HB as _AvatarComponent,
  jB as _AvatarGroupComponent,
  KB as _BackTopComponent,
  qB as _BadgeComponent,
  XB as _BottomNavigationComponent,
  GB as _BottomNavigationItemComponent,
  ZB as _BreadcrumbComponent,
  JB as _BreadcrumbsComponent,
  WB as _ButtonComponent,
  QB as _ButtonGroupComponent,
  _B as _CardComponent,
  xB as _CellComponent,
  NB as _CheckboxComponent,
  eD as _CheckboxGroupComponent,
  nD as _ChipComponent,
  oD as _CodeComponent,
  tD as _ColComponent,
  rD as _CollapseComponent,
  aD as _CollapseItemComponent,
  iD as _CollapseTransitionComponent,
  CB as _ContextComponent,
  lD as _CountToComponent,
  sD as _CountdownComponent,
  uD as _CounterComponent,
  dD as _DatePickerComponent,
  fD as _DialogComponent,
  pD as _DividerComponent,
  vD as _DragComponent,
  hD as _EllipsisComponent,
  gD as _FabComponent,
  AB as _FieldDecoratorComponent,
  bD as _FloatingPanelComponent,
  yD as _FormComponent,
  IB as _FormDetailsComponent,
  wD as _HighlighterProviderComponent,
  OB as _HoverComponent,
  zB as _HoverOverlayComponent,
  EB as _IconComponent,
  kD as _ImageComponent,
  SD as _ImagePreviewComponent,
  PD as _IndexAnchorComponent,
  OD as _IndexBarComponent,
  MB as _InputComponent,
  UB as _LazyComponent,
  zD as _LinkComponent,
  ED as _ListComponent,
  TD as _LoadingBarComponent,
  YB as _LoadingComponent,
  $B as _LocaleComponent,
  BD as _LocaleProviderComponent,
  RB as _MenuComponent,
  VB as _MenuOptionComponent,
  LB as _MenuSelectComponent,
  DD as _OptionComponent,
  ID as _OverlayComponent,
  AD as _PaginationComponent,
  MD as _PaperComponent,
  ND as _PickerComponent,
  SB as _PopupComponent,
  VD as _ProgressComponent,
  RD as _PullRefreshComponent,
  LD as _RadioComponent,
  FD as _RadioGroupComponent,
  UD as _RateComponent,
  HD as _ResultComponent,
  PB as _RippleComponent,
  jD as _RowComponent,
  YD as _SelectComponent,
  WD as _SignatureComponent,
  KD as _SkeletonComponent,
  qD as _SliderComponent,
  XD as _SnackbarComponent,
  GD as _SpaceComponent,
  ZD as _StepComponent,
  JD as _StepsComponent,
  cD as _StickyComponent,
  QD as _StyleProviderComponent,
  $D as _SwipeComponent,
  CD as _SwipeItemComponent,
  _D as _SwitchComponent,
  xD as _TabComponent,
  eI as _TabItemComponent,
  nI as _TableComponent,
  oI as _TabsComponent,
  tI as _TabsItemsComponent,
  rI as _ThemesComponent,
  aI as _TimePickerComponent,
  mD as _TooltipComponent,
  iI as _UploaderComponent,
  lI as _WatermarkComponent,
  Bp as actionSheetProps,
  iu as add,
  Ip as alertProps,
  Mp as appBarProps,
  gv as avatarGroupProps,
  mv as avatarProps,
  Cv as backTopProps,
  Pv as badgeProps,
  Bv as bottomNavigationItemProps,
  zv as bottomNavigationProps,
  Iv as breadcrumbProps,
  Nv as breadcrumbsProps,
  Rv as buttonGroupProps,
  wv as buttonProps,
  Fv as cardProps,
  Hv as cellProps,
  Yv as checkboxGroupProps,
  Yp as checkboxProps,
  Kv as chipProps,
  Xv as codeProps,
  Zv as colProps,
  om as collapseItemProps,
  _v as collapseProps,
  rm as collapseTransitionProps,
  im as countToProps,
  sm as countdownProps,
  km as counterProps,
  lp as currentMessage,
  Em as datePickerProps,
  sI as default,
  pn as defaultLazyOptions,
  Rm as dialogProps,
  Fm as dividerProps,
  Hm as dragProps,
  Km as ellipsisProps,
  op as enUS,
  tp as faIR,
  Xm as fabProps,
  ka as fieldDecoratorProps,
  Vp as formDetailsProps,
  Jm as formProps,
  Sp as hoverOverlayProps,
  tn as iconProps,
  cv as imageCache,
  th as imagePreviewProps,
  xm as imageProps,
  ah as indexAnchorProps,
  sh as indexBarProps,
  pu as inputProps,
  wB as install,
  ch as linkProps,
  fh as listProps,
  aO as loadingBarProps,
  uo as loadingProps,
  qp as menuOptionProps,
  vu as menuProps,
  Zr as menuSelectProps,
  sp as merge,
  ip as messages,
  Ph as optionProps,
  Eh as overlayProps,
  Th as paginationProps,
  Dh as paperProps,
  Ah as pickerProps,
  Ct as popupProps,
  Nh as progressProps,
  Rh as pullRefreshProps,
  jh as radioGroupProps,
  Fh as radioProps,
  Wh as rateProps,
  qh as resultProps,
  eg as rowProps,
  og as selectProps,
  rg as signatureProps,
  ig as skeletonProps,
  sg as sliderProps,
  Au as snackbarProps,
  hg as spaceProps,
  gg as stepProps,
  wg as stepsProps,
  At as stickyProps,
  $g as styleProviderProps,
  Eu as swipeProps,
  Sg as switchProps,
  an as t,
  Tg as tabItemProps,
  Og as tabProps,
  Dg as tableProps,
  Ng as tabsItemsProps,
  Ag as tabsProps,
  Rg as timePickerProps,
  Ym as tooltipProps,
  Yg as uploaderProps,
  lu as use,
  no as useHoverOverlay,
  au as useLocale,
  yB as version,
  Kg as watermarkProps,
  tu as zhCN,
  ap as zhHK,
  ru as zhTW
};
