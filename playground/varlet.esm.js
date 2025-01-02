import { reactive as xe, onMounted as Lo, nextTick as He, onActivated as Fo, isRef as Xg, watch as pe, onBeforeUnmount as da, onDeactivated as wt, onUnmounted as Qt, inject as js, getCurrentInstance as _o, computed as I, ref as k, unref as yf, provide as Ys, isVNode as Gg, defineComponent as ee, h as _t, Comment as Zg, Fragment as Ae, createApp as Jg, onBeforeMount as Qg, createVNode as q, Teleport as io, Transition as _e, withDirectives as Ve, vShow as xn, mergeProps as je, openBlock as h, createBlock as we, resolveDynamicComponent as kt, normalizeClass as p, normalizeStyle as G, createElementBlock as S, resolveComponent as _, resolveDirective as Ye, createCommentVNode as X, createElementVNode as R, toDisplayString as se, withCtx as ce, renderSlot as F, renderList as qe, createTextVNode as Ie, onUpdated as xt, normalizeProps as Eo, guardReactiveProps as er, createSlots as Xo, withModifiers as Xn, vModelText as _g, withKeys as Nu, TransitionGroup as xg } from "vue";
const wf = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, sB = xe(wf);
var Vn = xe(wf);
function Ws(e) {
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
const eb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ws
}, Symbol.toStringTag, { value: "Module" }));
var Ks = Object.defineProperty, nb = Object.defineProperties, ob = Object.getOwnPropertyDescriptor, tb = Object.getOwnPropertyDescriptors, rb = Object.getOwnPropertyNames, Vu = Object.getOwnPropertySymbols, kf = Object.prototype.hasOwnProperty, ab = Object.prototype.propertyIsEnumerable, Ru = (e, n, o) => n in e ? Ks(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, $f = (e, n) => {
  for (var o in n || (n = {}))
    kf.call(n, o) && Ru(e, o, n[o]);
  if (Vu)
    for (var o of Vu(n))
      ab.call(n, o) && Ru(e, o, n[o]);
  return e;
}, Cf = (e, n) => nb(e, tb(n)), Sf = (e, n) => {
  for (var o in n)
    Ks(e, o, { get: n[o], enumerable: !0 });
}, ib = (e, n, o, t) => {
  if (n && typeof n == "object" || typeof n == "function")
    for (let r of rb(n))
      !kf.call(e, r) && r !== o && Ks(e, r, { get: () => n[r], enumerable: !(t = ob(n, r)) || t.enumerable });
  return e;
}, Pf = (e, n, o) => (ib(e, n, "default"), o), Of = {};
Sf(Of, {
  NOOP: () => Xb,
  assert: () => Mf,
  at: () => nr,
  baseRound: () => ha,
  call: () => C,
  camelize: () => pa,
  cancelAnimationFrame: () => ct,
  ceil: () => a0,
  chunk: () => $b,
  clamp: () => $n,
  clampArrayRange: () => zf,
  classes: () => Zs,
  cloneDeep: () => Gb,
  cloneDeepWith: () => Xf,
  copyText: () => Ff,
  createNamespaceFn: () => Qs,
  createStorage: () => va,
  debounce: () => qb,
  delay: () => lb,
  difference: () => Ob,
  differenceWith: () => Xr,
  doubleRaf: () => bn,
  download: () => qf,
  ensurePrefix: () => Vb,
  ensureSuffix: () => Rb,
  find: () => Nf,
  floor: () => dl,
  genNumberKey: () => kb,
  genStringKey: () => Fb,
  getAllParentScroller: () => Hf,
  getGlobalThis: () => or,
  getParentScroller: () => _s,
  getRect: () => nn,
  getScrollLeft: () => rr,
  getScrollTop: () => go,
  getStyle: () => oo,
  groupBy: () => Tb,
  hasOwn: () => Go,
  inBrowser: () => no,
  inMobile: () => Vt,
  inViewport: () => xs,
  intersection: () => zb,
  intersectionWith: () => Rf,
  isArray: () => Fe,
  isArrayBuffer: () => Rr,
  isBlob: () => gb,
  isBoolean: () => tr,
  isDOMException: () => Ur,
  isDataView: () => Lr,
  isDate: () => Fr,
  isEmpty: () => Wn,
  isEmptyPlainObject: () => yb,
  isEqual: () => cb,
  isEqualWith: () => Bf,
  isError: () => Wr,
  isFile: () => hb,
  isFunction: () => mn,
  isMap: () => Hr,
  isNonEmptyArray: () => db,
  isNullish: () => fb,
  isNumber: () => Tn,
  isNumeric: () => Xs,
  isObject: () => ho,
  isPlainObject: () => Rn,
  isPrimitive: () => bb,
  isPromise: () => pb,
  isRegExp: () => Yr,
  isSet: () => jr,
  isString: () => sn,
  isSymbol: () => vb,
  isTruthy: () => mb,
  isTypedArray: () => Kr,
  isWeakMap: () => If,
  isWeakSet: () => Df,
  isWindow: () => fa,
  kebabCase: () => Js,
  localStorage: () => Wf,
  lowerFirst: () => Ub,
  mapObject: () => Mb,
  maxBy: () => _b,
  mean: () => n0,
  meanBy: () => o0,
  merge: () => Zb,
  mergeWith: () => Gf,
  minBy: () => xb,
  mitt: () => Ws,
  motion: () => eu,
  normalizeToArray: () => po,
  objectToString: () => Ef,
  omit: () => Db,
  omitBy: () => Ab,
  once: () => Kb,
  pascalCase: () => Uf,
  pick: () => Bb,
  pickBy: () => Ib,
  prettyJSONObject: () => jf,
  preventDefault: () => Me,
  promiseWithResolvers: () => Nb,
  raf: () => vo,
  randomColor: () => jb,
  randomNumber: () => Tf,
  randomString: () => Yb,
  removeArrayBlank: () => Vf,
  removeArrayEmpty: () => Pb,
  removeItem: () => Do,
  requestAnimationFrame: () => Ao,
  round: () => r0,
  sample: () => t0,
  sessionStorage: () => Yf,
  shuffle: () => Sb,
  slash: () => Wb,
  sum: () => Jf,
  sumBy: () => Qf,
  sumHash: () => e0,
  supportTouch: () => Af,
  throttle: () => ma,
  times: () => sb,
  toArrayBuffer: () => Jb,
  toDataURL: () => Zf,
  toNumber: () => j,
  toRawType: () => Xe,
  toText: () => Qb,
  toTypeString: () => qs,
  toggleItem: () => Cb,
  tryParseJSON: () => Kf,
  uniq: () => cl,
  uniqBy: () => qr,
  upperFirst: () => Hb,
  xor: () => Eb,
  xorWith: () => Lf
});
function nr(e, n) {
  if (e.length)
    return n < 0 && (n += e.length), e[n];
}
function $n(e, n, o) {
  return Math.min(o, Math.max(n, e));
}
function zf(e, n) {
  return $n(e, 0, n.length - 1);
}
function lb(e) {
  return new Promise((n) => {
    setTimeout(n, e);
  });
}
function Tf(e = 0, n = 100) {
  return Math.floor(Math.random() * (n - e + 1)) + e;
}
function sb(e, n) {
  return Array.from({ length: e }, (o, t) => n(t));
}
function no() {
  return typeof window < "u";
}
function or() {
  return typeof globalThis < "u" ? globalThis : no() ? window : typeof global < "u" ? global : self;
}
var { hasOwnProperty: ub } = Object.prototype;
function Go(e, n) {
  return ub.call(e, n);
}
function Vt() {
  return no() && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
function Fe(e) {
  return Array.isArray(e);
}
var Ef = Object.prototype.toString;
function qs(e) {
  return Ef.call(e);
}
function Xe(e) {
  return qs(e).slice(8, -1);
}
function Rr(e) {
  return Xe(e) === "ArrayBuffer";
}
function tr(e) {
  return typeof e == "boolean";
}
function Lr(e) {
  return Xe(e) === "DataView";
}
function Fr(e) {
  return Xe(e) === "Date";
}
function Ur(e) {
  return Xe(e) === "DOMException";
}
function Wn(e) {
  return e == null || e === "" || Fe(e) && !e.length;
}
function Hr(e) {
  return Xe(e) === "Map";
}
function Rn(e) {
  return Xe(e) === "Object";
}
function jr(e) {
  return Xe(e) === "Set";
}
function ho(e) {
  return typeof e == "object" && e !== null;
}
function Yr(e) {
  return Xe(e) === "RegExp";
}
function Wr(e) {
  return Xe(e) === "Error";
}
function Kr(e) {
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
function Bf(e, n, o) {
  const t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  function a(i, l, s, u) {
    if (o(i, l) === !0 || i === l || i !== i && l !== l)
      return !0;
    if (!ho(i) || !ho(l))
      return i === l;
    if (i.constructor !== l.constructor)
      return !1;
    if (Xe(i) === "String" && Xe(l) === "String" || Xe(i) === "Number" && Xe(l) === "Number" || Xe(i) === "Boolean" && Xe(l) === "Boolean" || Xe(i) === "BigInt" && Xe(l) === "BigInt" || Xe(i) === "Symbol" && Xe(l) === "Symbol")
      return i.valueOf() === l.valueOf();
    if (Fr(i) && Fr(l))
      return i.getTime() === l.getTime();
    if (Yr(i) && Yr(l))
      return i.source === l.source && i.flags === l.flags;
    if (Wr(i) && Wr(l))
      return i.name === l.name && i.message === l.message && i.cause === l.cause;
    if (Ur(i) && Ur(l))
      return i.name === l.name && i.message === l.message;
    if (Kr(i) && Kr(l) || Lr(i) && Lr(l)) {
      if (i.byteLength !== l.byteLength)
        return !1;
      const d = new Uint8Array(i.buffer), f = new Uint8Array(l.buffer);
      return d.every((v, m) => v === f[m]);
    }
    if (Rr(i) && Rr(l)) {
      if (i.byteLength !== l.byteLength)
        return !1;
      const d = new Uint8Array(i), f = new Uint8Array(l);
      return d.every((v, m) => v === f[m]);
    }
    if (s.get(i) === l && u.get(l) === i)
      return !0;
    if (s.set(i, l), u.set(l, i), Hr(i) && Hr(l) || jr(i) && jr(l)) {
      if (i.size !== l.size)
        return !1;
      const d = [...i], f = [...l], v = d.every((m, g) => a(m, f[g], s, u));
      return s.delete(i), u.delete(l), v;
    }
    if (Fe(i) && Fe(l)) {
      if (i.length !== l.length)
        return !1;
      const d = i.every((f, v) => a(f, l[v], s, u));
      return s.delete(i), u.delete(l), d;
    }
    if (Rn(i) && Rn(l)) {
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
function cb(e, n) {
  return Bf(e, n, () => {
  });
}
function mn(e) {
  return typeof e == "function";
}
function db(e) {
  return Fe(e) && !!e.length;
}
function fb(e) {
  return e == null;
}
function Tn(e) {
  return typeof e == "number";
}
function sn(e) {
  return typeof e == "string";
}
function Xs(e) {
  return Tn(e) || sn(e) && /^[-+]?\d+$/.test(e);
}
function pb(e) {
  return ho(e) && mn(e.then) && mn(e.catch);
}
function vb(e) {
  return typeof e == "symbol";
}
function mb(e) {
  return !!e;
}
function If(e) {
  return Xe(e) === "WeakMap";
}
function Df(e) {
  return Xe(e) === "WeakSet";
}
function fa(e) {
  return e === window;
}
function Af() {
  return no() && "ontouchstart" in window;
}
function hb(e) {
  return Xe(e) === "File";
}
function gb(e) {
  return Xe(e) === "Blob";
}
function bb(e) {
  return e == null || typeof e != "object" && typeof e != "function";
}
function yb(e) {
  return Rn(e) && Object.keys(e).length === 0 && Object.getOwnPropertySymbols(e).length === 0;
}
function Mf(e, n) {
  if (!e)
    throw new Error(n);
}
function j(e) {
  return e == null ? 0 : sn(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : tr(e) ? Number(e) : e;
}
var wb = 0;
function kb() {
  return wb++;
}
function $b(e, n = 1) {
  n = $n(n, 1, e.length);
  const o = [];
  let t = 0;
  for (; t < e.length; )
    o.push(e.slice(t, t + n)), t += n;
  return o;
}
function Do(e, n) {
  if (e.length) {
    const o = e.indexOf(n);
    if (o > -1)
      return e.splice(o, 1);
  }
}
function Cb(e, n) {
  return e.includes(n) ? Do(e, n) : e.push(n), e;
}
function cl(e) {
  return [...new Set(e)];
}
function qr(e, n) {
  return e.reduce((o, t) => (o.findIndex((a) => n(t, a)) === -1 && o.push(t), o), []);
}
function Nf(e, n, o = "start") {
  let t = o === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && t >= 0 && t <= e.length - 1; ) {
    if (n(e[t], t, e))
      return [e[t], t];
    o === "start" ? t++ : t--;
  }
  return [null, -1];
}
function Sb(e) {
  for (let n = e.length - 1; n > 0; n--) {
    const o = Math.floor(Math.random() * (n + 1));
    [e[n], e[o]] = [e[o], e[n]];
  }
  return e;
}
function Vf(e) {
  return e.filter((n) => n != null);
}
function Pb(e) {
  return e.filter((n) => n != null && n !== "");
}
function po(e) {
  return Fe(e) ? e : [e];
}
function Xr(e, ...n) {
  const o = nr(n, -1), t = n.slice(0, -1).reduce((r, a) => [...r, ...a], []);
  return e.filter((r) => !t.some((a) => o(r, a)));
}
function Ob(e, ...n) {
  return Xr(e, ...n, (o, t) => o === t);
}
function Rf(...e) {
  const n = nr(e, -1), o = e.slice(0, -1);
  if (o.length === 0)
    return [];
  if (o.length === 1)
    return qr(o[0], n);
  function t(r, a) {
    return r.filter((i) => a.some((l) => n(i, l)));
  }
  return qr(
    o.reduce((r, a) => t(r, a)),
    n
  );
}
function zb(...e) {
  return Rf(...e, (n, o) => n === o);
}
function Tb(e, n) {
  return e.reduce(
    (o, t) => {
      var r;
      const a = n(t);
      return ((r = o[a]) != null ? r : o[a] = []).push(t), o;
    },
    {}
  );
}
function Lf(...e) {
  const n = nr(e, -1), o = e.slice(0, -1);
  return qr(
    o.reduce((t, r) => [...Xr(t, r, n), ...Xr(r, t, n)]),
    n
  );
}
function Eb(...e) {
  return Lf(...e, (n, o) => n === o);
}
function Bb(e, n) {
  return n.reduce(
    (o, t) => (o[t] = e[t], o),
    {}
  );
}
function Ib(e, n) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)].reduce((t, r) => {
    const a = e[r];
    return n(a, r) && (t[r] = a), t;
  }, {});
}
function Db(e, n) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)].reduce(
    (t, r) => (n.includes(r) || (t[r] = e[r]), t),
    {}
  );
}
function Ab(e, n) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)].reduce((t, r) => {
    const a = e[r];
    return n(a, r) || (t[r] = a), t;
  }, {});
}
function Mb(e, n) {
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
function Nb() {
  let e, n;
  return { promise: new Promise((t, r) => {
    e = t, n = r;
  }), resolve: e, reject: n };
}
var Gs = {};
Sf(Gs, {
  cancelAnimationFrame: () => ct,
  classes: () => Zs,
  copyText: () => Ff,
  createNamespaceFn: () => Qs,
  createStorage: () => va,
  doubleRaf: () => bn,
  download: () => qf,
  getAllParentScroller: () => Hf,
  getParentScroller: () => _s,
  getRect: () => nn,
  getScrollLeft: () => rr,
  getScrollTop: () => go,
  getStyle: () => oo,
  inViewport: () => xs,
  localStorage: () => Wf,
  mitt: () => Ws,
  motion: () => eu,
  prettyJSONObject: () => jf,
  preventDefault: () => Me,
  raf: () => vo,
  requestAnimationFrame: () => Ao,
  sessionStorage: () => Yf,
  tryParseJSON: () => Kf
});
function ct(e) {
  const n = or();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Zs(...e) {
  return e.map((n) => {
    if (Fe(n)) {
      const [o, t, r = null] = n;
      return o ? t : r;
    }
    return n;
  });
}
function Ff(e) {
  if (!e)
    return;
  const n = document.createElement("textarea");
  n.value = e, n.style.position = "fixed", n.style.opacity = "0", document.body.appendChild(n), n.select(), document.execCommand("copy"), document.body.removeChild(n);
}
function pa(e) {
  return e = e.replace(/-(\w)/g, (n, o) => o.toUpperCase()), e.replace(e.charAt(0), e.charAt(0).toLowerCase());
}
function Vb(e, n) {
  return e.startsWith(n) ? e : n + e;
}
function Rb(e, n) {
  return e.endsWith(n) ? e : e + n;
}
var Lb = 0;
function Fb() {
  return `generated-key-${Lb++}`;
}
function Js(e) {
  return e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase();
}
function Uf(e) {
  return pa(e).replace(e.charAt(0), e.charAt(0).toUpperCase());
}
function Ub(e) {
  return e.charAt(0).toLowerCase() + e.slice(1);
}
function Hb(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function jb() {
  const e = "0123456789abcdef";
  let n = "#";
  for (let o = 0; o < 6; o++)
    n += e[Math.floor(Math.random() * 16)];
  return n;
}
function Yb(e = 10) {
  let n = o();
  for (; n.length < e; )
    n += o();
  function o() {
    return Math.random().toString(36).slice(2);
  }
  return n.slice(0, e);
}
function Wb(e) {
  return e.startsWith("\\\\?\\") ? e : e.replace(/\\/g, "/");
}
function Qs(e) {
  return (n) => {
    const o = `${e}-${n}`, t = (r) => r ? r[0] === "$" ? r.replace("$", e) : r.startsWith("--") ? `${o}${r}` : `${o}__${r}` : o;
    return {
      name: Uf(o),
      n: t,
      classes: Zs
    };
  };
}
function Ao(e) {
  const n = or();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e);
}
function bn() {
  return new Promise((e) => {
    Ao(() => {
      Ao(e);
    });
  });
}
function oo(e) {
  return window.getComputedStyle(e);
}
function _s(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const o = /(scroll|auto)/, { overflowY: t, overflow: r } = oo(n);
    if (o.test(t) || o.test(r))
      return n;
  }
  return window;
}
function Hf(e) {
  const n = [];
  let o = e;
  for (; !fa(o); )
    o = _s(o), n.push(o);
  return n;
}
function nn(e) {
  if (fa(e)) {
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
    return Cf($f({}, t), {
      toJSON: () => t
    });
  }
  return e.getBoundingClientRect();
}
function rr(e) {
  const n = "scrollLeft" in e ? e.scrollLeft : e.scrollX;
  return Math.max(n, 0);
}
function go(e) {
  const n = "scrollTop" in e ? e.scrollTop : e.scrollY;
  return Math.max(n, 0);
}
function xs(e) {
  const { top: n, bottom: o, left: t, right: r } = nn(e), { width: a, height: i } = nn(window), l = t <= a && r >= 0, s = n <= i && o >= 0;
  return l && s;
}
function jf(e) {
  return JSON.stringify(e, null, 2);
}
function Me(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function vo() {
  return new Promise((e) => {
    Ao(e);
  });
}
function va(e) {
  return Cf($f({}, e), {
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
var Yf = va(or().sessionStorage), Wf = va(or().localStorage);
function Kf(e) {
  try {
    return JSON.parse(e);
  } catch {
    return;
  }
}
function qf(e, n = "file") {
  const o = document.createElement("a");
  o.style.display = "none", o.href = sn(e) ? e : URL.createObjectURL(e), o.download = n, document.body.appendChild(o), o.click(), URL.revokeObjectURL(o.href), document.body.removeChild(o);
}
function eu(e) {
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
    y("running");
    const b = performance.now();
    d = d ?? b, v += f != null ? b - f : 0, f = void 0, P();
    function P() {
      c = Ao(() => {
        const O = performance.now() - d - v, B = $n(O / t, 0, 1);
        if (s = u * a(B) + n, B >= 1) {
          y("finished"), r({ value: o, done: !0 });
          return;
        }
        r({ value: s, done: !1 }), P();
      });
    }
  }
  function g() {
    l === "running" && (ct(c), y("paused"), f = performance.now());
  }
  function w() {
    ct(c), y("pending"), s = n, c = void 0, d = void 0, f = void 0, v = 0;
  }
  function $() {
    return l;
  }
  function y(b) {
    l = b, i(b);
  }
  return {
    start: m,
    pause: g,
    reset: w,
    getState: $
  };
}
Pf(Gs, eb);
Pf(Of, Gs);
function C(e, ...n) {
  if (Fe(e))
    return e.map((o) => o(...n));
  if (e)
    return e(...n);
}
function Kb(e) {
  let n = !1, o;
  return function(...t) {
    return n || (n = !0, o = e.apply(this, t)), o;
  };
}
function qb(e, n = 0) {
  let o;
  return function(...t) {
    o && clearTimeout(o), o = setTimeout(() => {
      e.apply(this, t);
    }, n);
  };
}
function ma(e, n = 200) {
  let o, t = 0;
  return function r(...a) {
    const i = performance.now(), l = i - t;
    t || (t = i), o && clearTimeout(o), l >= n ? (e.apply(this, a), t = i) : o = setTimeout(() => {
      r.apply(this, a);
    }, n - l);
  };
}
function Xb() {
}
function Xf(e, n) {
  const o = /* @__PURE__ */ new WeakMap();
  function t(i, l) {
    const s = n(i);
    if (s !== void 0)
      return s;
    if (!ho(i))
      return i;
    if (l.has(i))
      return l.get(i);
    if (Fr(i))
      return new Date(i);
    if (Yr(i))
      return new RegExp(i);
    if (Hr(i)) {
      const u = /* @__PURE__ */ new Map();
      return l.set(i, u), i.forEach((c, d) => {
        u.set(t(d, l), t(c, l));
      }), u;
    }
    if (jr(i)) {
      const u = /* @__PURE__ */ new Set();
      return l.set(i, u), i.forEach((c) => {
        u.add(t(c, l));
      }), u;
    }
    if (Xe(i) === "String" || Xe(i) === "Number" || Xe(i) === "Boolean")
      return a(i, i.valueOf());
    if (If(i) || Df(i) || Wr(i) || Ur(i))
      return {};
    if (Kr(i))
      return a(i, r(i.buffer), i.byteOffset, i.length);
    if (Lr(i))
      return a(i, r(i.buffer), i.byteOffset, i.byteLength);
    if (Rr(i))
      return r(i);
    if (Fe(i)) {
      const u = [];
      return l.set(i, u), i.forEach((c, d) => {
        u[d] = t(c, l);
      }), u;
    }
    if (Rn(i)) {
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
function Gb(e) {
  return Xf(e, () => {
  });
}
function Gf(e, ...n) {
  const o = nr(n, -1), t = [e, ...n.slice(0, -1)];
  let r = t.length - 1, a = t[r];
  for (; r; )
    a = i(t[r - 1], a, o), r--;
  function i(l, s, u) {
    function c(d, f) {
      for (const v in f)
        if (Go(f, v)) {
          const m = f[v], g = d[v], w = u(g, m, v, l, s);
          w !== void 0 ? d[v] = w : ho(m) ? ho(g) ? d[v] = c(g, m) : d[v] = c(Fe(m) ? [] : {}, m) : d[v] = m;
        }
      return d;
    }
    return c(l, s);
  }
  return a;
}
function Zb(e, ...n) {
  return Gf(e, ...n, () => {
  });
}
function Jb(e) {
  return new Promise((n) => {
    const o = new FileReader();
    o.onload = () => {
      n(o.result);
    }, o.readAsArrayBuffer(e);
  });
}
function Zf(e) {
  return new Promise((n) => {
    const o = new FileReader();
    o.onload = () => {
      n(o.result);
    }, o.readAsDataURL(e);
  });
}
function Qb(e) {
  return new Promise((n) => {
    const o = new FileReader();
    o.onload = () => {
      n(o.result);
    }, o.readAsText(e);
  });
}
function _b(e, n) {
  if (e.length)
    return e.reduce((o, t) => n(o) > n(t) ? o : t, e[0]);
}
function xb(e, n) {
  if (e.length)
    return e.reduce((o, t) => n(o) < n(t) ? o : t, e[0]);
}
function Jf(e) {
  return e.reduce((n, o) => n + o, 0);
}
function Qf(e, n) {
  return e.reduce((o, t) => o + n(t), 0);
}
function e0(e) {
  function n(t, r) {
    for (let a = 0; a < r.length; a++) {
      const i = r.charCodeAt(a);
      t = (t << 5) - t + i, t |= 0;
    }
    return t < 0 ? t * -2 : t;
  }
  function o(t, r, a, i) {
    return t = n(t, a), t = n(t, qs(r)), t = n(t, typeof r), r === null ? n(t, "null") : r === void 0 ? n(t, "undefined") : ho(r) || mn(r) ? i.includes(r) ? n(t, `[Circular]${a}`) : (i.push(r), t = Object.keys(r).sort().reduce((l, s) => o(l, r[s], s, i), t), mn(r.valueOf) ? n(t, String(r.valueOf())) : t) : n(t, r.toString());
  }
  return o(0, e, "", []).toString(16).padStart(8, "0");
}
function n0(e) {
  return Jf(e) / e.length;
}
function o0(e, n) {
  return Qf(e, n) / e.length;
}
function t0(e) {
  if (e.length)
    return e[Tf(0, e.length - 1)];
}
function r0(e, n = 0) {
  return ha(e, n, Math.round);
}
function ha(e, n = 0, o) {
  return n = $n(n, -292, 292), n ? +`${o(`${e}e${n}`)}e${-n}` : o(e);
}
function dl(e, n = 0) {
  return ha(e, n, Math.floor);
}
function a0(e, n = 0) {
  return ha(e, n, Math.ceil);
}
function Ln(e, n, o) {
  return Mf(e, `Varlet [${n}]: ${o}`);
}
function i0(e, n) {
  console.warn(`Varlet [${e}]: ${n}`);
}
function st(e, n) {
  console.error(`Varlet [${e}]: ${n}`);
}
var l0 = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, s0 = Object.defineProperty, Gr = Object.getOwnPropertySymbols, _f = Object.prototype.hasOwnProperty, xf = Object.prototype.propertyIsEnumerable, Lu = (e, n, o) => n in e ? s0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, u0 = (e, n) => {
  for (var o in n || (n = {}))
    _f.call(n, o) && Lu(e, o, n[o]);
  if (Gr)
    for (var o of Gr(n))
      xf.call(n, o) && Lu(e, o, n[o]);
  return e;
}, c0 = (e, n) => {
  var o = {};
  for (var t in e)
    _f.call(e, t) && n.indexOf(t) < 0 && (o[t] = e[t]);
  if (e != null && Gr)
    for (var t of Gr(e))
      n.indexOf(t) < 0 && xf.call(e, t) && (o[t] = e[t]);
  return o;
};
function yn(e) {
  let n = !1;
  Lo(() => {
    e(), He(() => {
      n = !0;
    });
  }), Fo(() => {
    n && e();
  });
}
function We(e, n, o, t = {}) {
  if (!no())
    return;
  const { passive: r = !1, capture: a = !1 } = t;
  let i = !1, l = !1;
  const s = (v) => mn(v) ? v() : yf(v), u = (v) => {
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
  Xg(e) && (d = pe(
    () => e.value,
    (v, m) => {
      c(m), u(v);
    }
  ));
  const f = () => {
    d == null || d(), c(e), l = !0;
  };
  return yn(() => {
    u(e);
  }), da(() => {
    c(e);
  }), wt(() => {
    c(e);
  }), f;
}
function ep(e, n, o) {
  if (!no())
    return;
  We(document, n, (r) => {
    const a = mn(e) ? e() : yf(e);
    a && !a.contains(r.target) && o(r);
  });
}
function ar(e) {
  let n = !1;
  wt(() => {
    n = !0, e();
  }), Qt(() => {
    n || e();
  });
}
function nu(e) {
  const n = _o();
  return e in n.provides;
}
function wn(e) {
  if (!nu(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const o = js(e), { childInstances: t, collect: r, clear: a } = o, i = c0(o, ["childInstances", "collect", "clear"]), l = _o();
  return {
    index: I(() => t.indexOf(l)),
    parentProvider: i,
    bindParent: (c) => {
      Lo(() => {
        He().then(() => {
          r(l, c);
        });
      }), da(() => {
        He().then(() => {
          a(l, c);
        });
      });
    }
  };
}
function d0(e) {
  const n = [], o = (t) => {
    if (t != null && t.component) {
      o(t == null ? void 0 : t.component.subTree);
      return;
    }
    Fe(t == null ? void 0 : t.children) && t.children.forEach((r) => {
      Gg(r) && (n.push(r), o(r));
    });
  };
  return o(e), n;
}
function kn(e) {
  const n = _o(), o = xe([]), t = [], r = I(() => o.length), a = () => {
    const u = d0(n.subTree);
    o.sort((c, d) => u.indexOf(c.vnode) - u.indexOf(d.vnode));
  }, i = (u, c) => {
    o.push(u), t.push(c), a();
  }, l = (u, c) => {
    Do(o, u), Do(t, c);
  };
  return {
    length: r,
    childProviders: t,
    bindChildren: (u) => {
      Ys(e, u0({
        childInstances: o,
        collect: i,
        clear: l
      }, u));
    }
  };
}
function lo(e) {
  We(() => window, "resize", e, { passive: !0 }), We(() => window, "orientationchange", e, { passive: !0 });
}
function f0(e, n) {
  const o = k(!1);
  return pe(
    e,
    (t) => {
      n === t && (o.value = !0);
    },
    { immediate: !0 }
  ), o;
}
function p0(e, n) {
  if (e > n)
    return "horizontal";
  if (n > e)
    return "vertical";
}
function $t() {
  const e = k(0), n = k(0), o = k(0), t = k(0), r = k(0), a = k(0), i = k(0), l = k(0), s = k(0), u = k(0), c = k(), d = k(!1), f = k(!1), v = k(0), m = k(0);
  let g = null;
  const w = () => {
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
    resetTouch: w,
    startTouch: (O) => {
      w();
      const { clientX: B, clientY: A } = O.touches[0];
      e.value = B, n.value = A, i.value = B, l.value = A, d.value = !0, v.value = performance.now(), f.value = !1, g && window.cancelAnimationFrame(g);
    },
    moveTouch: (O) => {
      const { clientX: B, clientY: A } = O.touches[0];
      f.value = !0, o.value = B - e.value, t.value = A - n.value, r.value = Math.abs(o.value), a.value = Math.abs(t.value), m.value = Math.sqrt(r.value ** 2 + a.value ** 2), s.value = B - i.value, u.value = A - l.value, c.value || (c.value = p0(r.value, a.value)), i.value = B, l.value = A;
    },
    endTouch: () => {
      d.value = !1, g = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    },
    isReachTop: (O) => go(O) === 0 && t.value > 0,
    isReachBottom: (O, B = 1) => {
      const { scrollHeight: A, clientHeight: N, scrollTop: E } = O, z = Math.abs(A - E - N);
      return t.value < 0 && z <= B;
    }
  };
}
function np() {
  const e = _o(), n = Js(e.type.name), o = k(void 0);
  return Lo(() => {
    o.value = `${n}-${e.uid}`;
  }), o;
}
function v0(e = {}) {
  const { initialWidth: n = 0, initialHeight: o = 0 } = e, t = k(n), r = k(o), a = () => {
    no() && (t.value = window.innerWidth, r.value = window.innerHeight);
  };
  return yn(a), lo(a), {
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
    return I({
      get() {
        return s();
      },
      set(d) {
        i ? i(l, d) : C(e[l], d);
      }
    });
  const u = k(s());
  let c = !0;
  return pe(
    () => e[n],
    () => {
      c = !1, u.value = s(), He(() => {
        c = !0;
      });
    }
  ), pe(
    () => u.value,
    (d) => {
      c && (i ? i(l, d) : C(e[l], d));
    }
  ), u;
}
function m0(e) {
  const n = k(r(e.from)), o = k("pending");
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
    return eu({
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
var h0 = Object.defineProperty, g0 = Object.defineProperties, b0 = Object.getOwnPropertyDescriptors, Fu = Object.getOwnPropertySymbols, y0 = Object.prototype.hasOwnProperty, w0 = Object.prototype.propertyIsEnumerable, Uu = (e, n, o) => n in e ? h0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, fl = (e, n) => {
  for (var o in n || (n = {}))
    y0.call(n, o) && Uu(e, o, n[o]);
  if (Fu)
    for (var o of Fu(n))
      w0.call(n, o) && Uu(e, o, n[o]);
  return e;
}, k0 = (e, n) => g0(e, b0(n)), Hu = (e, n, o) => new Promise((t, r) => {
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
  return Fe(n) ? n.reduce((o, t) => (o[t] = e[t], o), {}) : e[n];
}
function ae(e, n) {
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
        if (Rn(a)) {
          n[t] = k0(fl({}, a), {
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
function $0(e) {
  const n = Jg(e), o = document.createElement("div");
  return document.body.appendChild(o), {
    instance: n.mount(o),
    unmount() {
      n.unmount(), o.parentNode && document.body.removeChild(o);
    }
  };
}
function Ct(e, n = {}, o = {}) {
  const t = {
    setup() {
      return () => _t(e, fl(fl({}, n), o));
    }
  }, { unmount: r } = $0(t);
  return { unmountInstance: r };
}
function op(e) {
  const n = [];
  return e.forEach((o) => {
    if (o.type !== Zg) {
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
function ju(e) {
  return Rn(e) && mn(e.safeParseAsync);
}
function C0(e) {
  return Rn(e) && Go(e, "success");
}
function Un() {
  const e = k(""), n = (r, a, i) => Hu(this, null, function* () {
    const l = po(r).filter((u) => ju(u) || mn(u)), s = yield Promise.all(
      l.map((u) => ju(u) ? u.safeParseAsync(a) : u(a, i))
    );
    return o(), !s.some((u) => {
      if (C0(u)) {
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
    validateWithTrigger: (r, a, i, l, s) => Hu(this, null, function* () {
      r.includes(a) && (yield n(i, l, s)) && (e.value = "");
    })
  };
}
function S0(e) {
  We(() => window, "hashchange", e), We(() => window, "popstate", e);
}
function xo() {
  const e = k(!1);
  return Fo(() => {
    e.value = !1;
  }), wt(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
const ne = Qs("var");
function L(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function dn(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), `var-elevation--${e}`);
}
const ir = ee({
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
    return () => sn(e.is) ? _t(e.tag, e.is) : e.is;
  }
});
var P0 = Object.defineProperty, O0 = Object.defineProperties, z0 = Object.getOwnPropertyDescriptors, Yu = Object.getOwnPropertySymbols, T0 = Object.prototype.hasOwnProperty, E0 = Object.prototype.propertyIsEnumerable, Wu = (e, n, o) => n in e ? P0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, tp = (e, n) => {
  for (var o in n || (n = {}))
    T0.call(n, o) && Wu(e, o, n[o]);
  if (Yu)
    for (var o of Yu(n))
      E0.call(n, o) && Wu(e, o, n[o]);
  return e;
}, B0 = (e, n) => O0(e, z0(n));
const { n: rp } = ne("ripple"), Ku = 250;
function I0(e) {
  const { zIndex: n, position: o } = oo(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", o === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function qu(e) {
  return "touches" in e;
}
function D0(e, n) {
  const { top: o, left: t } = nn(e), { clientWidth: r, clientHeight: a } = e, i = Math.sqrt(r ** 2 + a ** 2) / 2, l = i * 2, s = qu(n) ? n.touches[0].clientX - t : r / 2, u = qu(n) ? n.touches[0].clientY - o : a / 2, c = (r - i * 2) / 2, d = (a - i * 2) / 2, f = s - i, v = u - i;
  return { x: f, y: v, centerX: c, centerY: d, size: l };
}
function ou(e) {
  const n = this._ripple;
  if (n.removeRipple(), n.disabled || n.tasker || !Vn.enableRipple)
    return;
  const o = () => {
    n.tasker = null;
    const { x: t, y: r, centerX: a, centerY: i, size: l } = D0(this, e), s = document.createElement("div");
    s.classList.add(rp()), s.style.opacity = "0", s.style.transform = `translate(${t}px, ${r}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), I0(this), this.appendChild(s), window.setTimeout(() => {
      s.style.transform = `translate(${a}px, ${i}px) scale3d(1, 1, 1)`, s.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(o, 30);
}
function Zr() {
  const e = this._ripple, n = () => {
    const o = this.querySelectorAll(`.${rp()}`);
    if (!o.length)
      return;
    const t = o[o.length - 1], r = Ku - performance.now() + Number(t.dataset.createdAt);
    window.setTimeout(() => {
      t.style.opacity = "0", window.setTimeout(() => {
        var a;
        return (a = t.parentNode) == null ? void 0 : a.removeChild(t);
      }, Ku);
    }, r);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function ap() {
  if (!Af() || !Vn.enableRipple)
    return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
let Jr = !1;
function A0(e) {
  Jr || !(e.key === " " || e.key === "Enter") || (ou.call(this, e), Jr = !0);
}
function Xu() {
  Jr && (Zr.call(this), Jr = !1);
}
function M0(e, n) {
  var o;
  e._ripple = B0(tp({
    tasker: null
  }, (o = n.value) != null ? o : {}), {
    removeRipple: Zr.bind(e)
  }), e.addEventListener("touchstart", ou, { passive: !0 }), e.addEventListener("touchmove", ap, { passive: !0 }), e.addEventListener("dragstart", Zr, { passive: !0 }), e.addEventListener("keydown", A0), e.addEventListener("keyup", Xu), e.addEventListener("blur", Xu), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("dragend", e._ripple.removeRipple, { passive: !0 });
}
function N0(e) {
  e.removeEventListener("touchstart", ou), e.removeEventListener("touchmove", ap), e.removeEventListener("dragstart", Zr), !(!e._ripple || !e._ripple.removeRipple) && (document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple), document.removeEventListener("dragend", e._ripple.removeRipple));
}
function V0(e, n) {
  var o, t, r, a, i, l;
  const s = {
    color: (o = n.value) == null ? void 0 : o.color,
    disabled: (t = n.value) == null ? void 0 : t.disabled
  };
  (s.color !== ((r = e._ripple) == null ? void 0 : r.color) || s.disabled !== ((a = e._ripple) == null ? void 0 : a.disabled)) && (e._ripple = tp({
    tasker: s.disabled ? null : (i = e._ripple) == null ? void 0 : i.tasker,
    removeRipple: (l = e._ripple) == null ? void 0 : l.removeRipple
  }, s));
}
const ip = {
  mounted: M0,
  unmounted: N0,
  updated: V0,
  install(e) {
    e.directive("ripple", this);
  }
}, uB = ip;
var tn = ip;
const St = {
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
}, { n: Gu } = ne("");
function lp() {
  Object.keys(Vn.locks).length <= 0 ? document.body.classList.remove(Gu("$--lock")) : document.body.classList.add(Gu("$--lock"));
}
function hr(e) {
  Vn.locks[e] = 1, lp();
}
function gr(e) {
  delete Vn.locks[e], lp();
}
function lr(e, n) {
  const { uid: o } = _o();
  n && pe(n, (t) => {
    t === !1 ? gr(o) : t === !0 && e() === !0 && hr(o);
  }), pe(e, (t) => {
    n && n() === !1 || (t === !0 ? hr(o) : gr(o));
  }), Qg(() => {
    n && n() === !1 || e() === !0 && hr(o);
  }), Qt(() => {
    n && n() === !1 || e() === !0 && gr(o);
  }), Fo(() => {
    n && n() === !1 || e() === !0 && hr(o);
  }), wt(() => {
    n && n() === !1 || e() === !0 && gr(o);
  });
}
function sr(e, n) {
  const o = k(Vn.zIndex);
  return pe(
    e,
    (t) => {
      t && (Vn.zIndex += n, o.value = Vn.zIndex);
    },
    { immediate: !0 }
  ), { zIndex: o };
}
const yo = [];
function tu(e, n) {
  const { uid: o } = _o();
  pe(e, (i) => {
    i && !a(o) ? r() : setTimeout(() => {
      Do(yo, a(o));
    });
  }), yn(() => {
    e() && r();
  }), ar(() => {
    Do(yo, a(o));
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
const sp = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function up() {
  const { bindParent: e, parentProvider: n, index: o } = wn(sp);
  return {
    index: o,
    popup: n,
    bindPopup: e
  };
}
function R0() {
  const { bindChildren: e, childProviders: n, length: o } = kn(sp);
  return {
    length: o,
    popupItems: n,
    bindPopupItems: e
  };
}
var L0 = Object.defineProperty, Zu = Object.getOwnPropertySymbols, F0 = Object.prototype.hasOwnProperty, U0 = Object.prototype.propertyIsEnumerable, Ju = (e, n, o) => n in e ? L0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, H0 = (e, n) => {
  for (var o in n || (n = {}))
    F0.call(n, o) && Ju(e, o, n[o]);
  if (Zu)
    for (var o of Zu(n))
      U0.call(n, o) && Ju(e, o, n[o]);
  return e;
};
const {
  name: j0,
  n: jn,
  classes: el
} = ne("popup");
var ga = ee({
  name: j0,
  inheritAttrs: !1,
  props: St,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const t = f0(() => e.show, !0), {
      zIndex: r
    } = sr(() => e.show, 3), a = I(() => {
      var m;
      return (m = e.zIndex) != null ? m : r.value;
    }), {
      onStackTop: i
    } = tu(() => e.show, a), {
      disabled: l
    } = xo(), {
      bindPopupItems: s
    } = R0();
    lr(() => e.show, () => e.lockScroll), pe(() => e.show, (m) => {
      C(m ? e.onOpen : e.onClose);
    }), s({
      show: I(() => e.show)
    }), We(() => window, "keydown", v), S0(() => C(e.onRouteChange));
    function u() {
      const {
        closeOnClickOverlay: m,
        onClickOverlay: g
      } = e;
      C(g), m && C(e["onUpdate:show"], !1);
    }
    function c() {
      const {
        overlayClass: m = "",
        overlayStyle: g
      } = e;
      return q("div", {
        class: el(jn("overlay"), m),
        style: H0({
          zIndex: a.value - 1
        }, g),
        onClick: u
      }, null);
    }
    function d() {
      return Ve(q("div", je({
        class: el(jn("content"), jn(`--${e.position}`), [e.defaultStyle, jn("--content-background-color")], [e.defaultStyle, jn("$-elevation--3")], [e.safeArea, jn("--safe-area")], [e.safeAreaTop, jn("--safe-area-top")]),
        style: {
          zIndex: a.value
        },
        role: "dialog",
        "aria-modal": "true"
      }, o), [t.value && C(n.default)]), [[xn, e.show]]);
    }
    function f() {
      return q(_e, {
        name: jn("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [Ve(q("div", {
          class: el(jn("$--box"), jn(), [!e.overlay, jn("--pointer-events-none")]),
          style: {
            zIndex: a.value - 2
          }
        }, [e.overlay && c(), q(_e, {
          name: e.transition || jn(`$-pop-${e.position}`)
        }, {
          default: () => [d()]
        })]), [[xn, e.show]])]
      });
    }
    function v(m) {
      !i() || m.key !== "Escape" || !e.show || (C(e.onKeyEscape), e.closeOnKeyEscape && (Me(m), C(e["onUpdate:show"], !1)));
    }
    return () => {
      const {
        teleport: m
      } = e;
      return m ? q(io, {
        to: m,
        disabled: l.value
      }, {
        default: () => [f()]
      }) : f();
    };
  }
});
ae(ga);
le(ga, St);
const cB = ga;
var Mo = ga;
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
  onClick: L()
};
function Y0(e) {
  const { left: n } = nn(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function Qu(e) {
  const { top: n } = nn(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function nl(e) {
  const { transform: n } = oo(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function No(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const o = /(scroll|auto)/, { overflowY: t, overflow: r } = oo(n);
    if (o.test(t) || o.test(r))
      return n;
  }
  return window;
}
function W0(e) {
  const n = [];
  let o = e;
  for (; !fa(o); )
    o = No(o), n.push(o);
  return n;
}
function cp(e, n) {
  if (sn(e)) {
    const o = document.querySelector(e);
    return Ln(!!o, n, "target element cannot found"), o;
  }
  return Ln(ho(e), n, 'type of prop "target" should be an element object'), e;
}
function K0() {
  const { width: e, height: n } = nn(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
const q0 = (e) => sn(e) && e.endsWith("rem"), X0 = (e) => sn(e) && e.endsWith("px") || Tn(e), G0 = (e) => sn(e) && e.endsWith("vw"), Z0 = (e) => sn(e) && e.endsWith("vh"), J0 = (e) => sn(e) && e.endsWith("vmin"), Q0 = (e) => sn(e) && e.endsWith("vmax"), en = (e) => {
  if (Xs(e))
    return Number(e);
  if (X0(e))
    return +e.replace("px", "");
  if (!no())
    return 0;
  const { vw: n, vh: o, vMin: t, vMax: r } = K0();
  if (G0(e))
    return +e.replace("vw", "") * n / 100;
  if (Z0(e))
    return +e.replace("vh", "") * o / 100;
  if (J0(e))
    return +e.replace("vmin", "") * t / 100;
  if (Q0(e))
    return +e.replace("vmax", "") * r / 100;
  if (q0(e)) {
    const a = +e.replace("rem", ""), i = oo(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return sn(e) ? j(e) : 0;
}, ze = (e) => {
  if (e != null)
    return Xs(e) ? `${e}px` : String(e);
}, On = (e, n = 1) => {
  if (e == null)
    return;
  const o = ze(e), t = o.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
  return `${parseFloat(o) * n}${t}`;
};
function Rt(e, { top: n = 0, left: o = 0, duration: t = 300, animation: r }) {
  const a = Date.now(), i = go(e), l = rr(e);
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
function dp(e) {
  return Object.entries(e ?? {}).reduce((n, [o, t]) => {
    const r = o.startsWith("--") ? o : `--${Js(o)}`;
    return n[r] = t, n;
  }, {});
}
function Qr(e) {
  return e === "start" || e === "end" ? `flex-${e}` : e;
}
function _0(e) {
  let n = e;
  for (; n && n !== document.documentElement; ) {
    if (oo(n).display === "none")
      return !0;
    n = n.parentNode;
  }
  return !1;
}
const _u = ["button", "input", "select", "textarea", "[tabindex]", "[href]"].map((e) => `${e}:not([disabled])`).join(", ");
function ru(e, n, o) {
  var t;
  const r = Array.from(n.querySelectorAll(_u)).filter(
    (l) => !_0(l)
  );
  if (!r.length)
    return;
  const a = [e, ...Array.from(e.querySelectorAll(_u))].findIndex(
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
var x0 = (e, n, o) => new Promise((t, r) => {
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
const { name: ey, n: ny, classes: oy } = ne("icon");
function ty(e, n) {
  return h(), we(kt(e.isURL(e.name) ? "img" : "i"), {
    class: p(
      e.classes(
        e.n(),
        [e.namespace !== e.n(), e.namespace],
        `${e.namespace}--set`,
        [e.isURL(e.name), e.n("image"), `${e.namespace}-${e.nextName}`],
        [e.animateInProgress, e.animationClass == null ? e.n("--shrinking") : e.animationClass]
      )
    ),
    style: G({
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
const fp = ee({
  name: ey,
  props: on,
  setup(e) {
    const n = k(""), o = k(!1);
    pe(() => e.name, t, { immediate: !0 });
    function t(r, a) {
      return x0(this, null, function* () {
        const { transition: i } = e;
        if (a == null || j(i) === 0) {
          n.value = r;
          return;
        }
        o.value = !0, yield He(), setTimeout(() => {
          a != null && (n.value = r), o.value = !1;
        }, j(i));
      });
    }
    return {
      nextName: n,
      animateInProgress: o,
      n: ny,
      classes: oy,
      isURL: l0,
      toNumber: j,
      toSizeUnit: ze
    };
  }
});
fp.render = ty;
var ba = fp;
ae(ba);
le(ba, on);
const dB = ba;
var Ge = ba;
const pp = {
  hovering: Boolean,
  focusing: Boolean
}, { name: ry, n: ay, classes: iy } = ne("hover-overlay");
function ly(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), [e.hovering, e.n("--hovering")], [e.focusing && !e.inMobile(), e.n("--focusing")]))
    },
    null,
    2
    /* CLASS */
  );
}
const vp = ee({
  name: ry,
  props: pp,
  setup: () => ({
    n: ay,
    classes: iy,
    inMobile: Vt
  })
});
vp.render = ly;
var ya = vp;
ae(ya);
le(ya, pp);
function eo() {
  const e = k(!1);
  return {
    hovering: e,
    handleHovering: (o) => {
      e.value = o;
    }
  };
}
const fB = ya;
var Fn = ya;
function mp(e) {
  return e ? !!(e === "desktop" && Vt() || e === "mobile" && !Vt()) : !1;
}
function sy(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((o, t) => {
    const [r, a] = t.split(":").map((i) => i.trim());
    return o[pa(r)] = a, o;
  }, {}) : {};
}
function uy(e) {
  const { value: n } = e._hover, o = sy(e);
  Object.keys(n).forEach((t) => {
    const r = pa(t);
    n[r] != null && o[r] && (e._hover.rawStyle[r] = o[r]);
  });
}
function au(e, n) {
  Object.keys(n).forEach((o) => {
    const t = n[o];
    t != null && (e.style[o] = t);
  });
}
function cy(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function hp(e) {
  (e == null ? void 0 : e._hover) != null && (cy(e), au(e, e._hover.rawStyle));
}
function gp() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, mn(e)) {
    e(this._hover.hovering);
    return;
  }
  au(this, e);
}
function bp() {
  if (this._hover.hovering = !1, mn(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  hp(this);
}
function yp(e, n) {
  var o, t;
  const { arg: r, value: a } = n;
  mp(r) || (e._hover = {
    value: a,
    hovering: (t = (o = e._hover) == null ? void 0 : o.hovering) != null ? t : !1,
    rawStyle: {}
  }, uy(e), e.addEventListener("mouseenter", gp), e.addEventListener("mouseleave", bp));
}
function wp(e, n) {
  mp(n.arg) || (hp(e), e.removeEventListener("mouseenter", gp), e.removeEventListener("mouseleave", bp));
}
function dy(e, n) {
  e._hover && wp(e, n);
}
function fy(e, n) {
  return !mn(n.value) && e._hover.hovering;
}
function py(e, n) {
  yp(e, n), fy(e, n) && au(e, n.value);
}
const kp = {
  mounted: yp,
  unmounted: wp,
  beforeUpdate: dy,
  updated: py,
  install(e) {
    e.directive("hover", this);
  }
}, pB = kp;
var Dn = kp;
const { name: vy, n: my, classes: hy } = ne("action-sheet");
function gy(e, n) {
  const o = _("var-icon"), t = _("var-hover-overlay"), r = Ye("ripple"), a = Ye("hover");
  return Ve((h(), S(
    "div",
    {
      class: p(e.classes(e.n("action-item"), e.className, [e.disabled, e.n("--disabled")])),
      style: G({ color: e.color })
    },
    [
      e.icon ? (h(), we(o, {
        key: 0,
        "var-action-sheet-cover": "",
        class: p(e.n("action-icon")),
        namespace: e.namespace,
        name: e.icon,
        size: e.iconSize
      }, null, 8, ["class", "namespace", "name", "size"])) : X("v-if", !0),
      R(
        "div",
        {
          class: p(e.n("action-name"))
        },
        se(e.name),
        3
        /* TEXT, CLASS */
      ),
      q(t, {
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
const $p = ee({
  name: vy,
  components: {
    VarHoverOverlay: Fn,
    VarIcon: Ge
  },
  directives: { Ripple: tn, Hover: Dn },
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
    const { hovering: e, handleHovering: n } = eo();
    return {
      hovering: e,
      n: my,
      classes: hy,
      handleHovering: n
    };
  }
});
$p.render = gy;
var by = $p, yy = Object.defineProperty, xu = Object.getOwnPropertySymbols, wy = Object.prototype.hasOwnProperty, ky = Object.prototype.propertyIsEnumerable, ec = (e, n, o) => n in e ? yy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, $y = (e, n) => {
  for (var o in n || (n = {}))
    wy.call(n, o) && ec(e, o, n[o]);
  if (xu)
    for (var o of xu(n))
      ky.call(n, o) && ec(e, o, n[o]);
  return e;
};
const Cp = $y({
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
}, De(St, [
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
var iu = {
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
}, Sp = {
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
}, lu = {
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
}, Pp = lu, Op = {
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
}, Cy = Object.defineProperty, nc = Object.getOwnPropertySymbols, Sy = Object.prototype.hasOwnProperty, Py = Object.prototype.propertyIsEnumerable, oc = (e, n, o) => n in e ? Cy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, tc = (e, n) => {
  for (var o in n || (n = {}))
    Sy.call(n, o) && oc(e, o, n[o]);
  if (nc)
    for (var o of nc(n))
      Py.call(n, o) && oc(e, o, n[o]);
  return e;
};
function su() {
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
      e.value[i] = tc(tc({}, e.value[i]), l), t(i);
    },
    t: (i) => {
      if (Go(n.value, i))
        return n.value[i];
    }
  };
}
const { messages: zp, currentMessage: Tp, add: uu, use: cu, merge: Ep, t: an } = su();
uu("zh-CN", iu);
cu("zh-CN");
const vB = {
  zhCN: iu,
  enUS: Sp,
  zhTW: lu,
  zhHK: Pp,
  faIR: Op,
  messages: zp,
  currentMessage: Tp,
  add: uu,
  use: cu,
  merge: Ep,
  t: an,
  useLocale: su
};
var pl = {
  zhCN: iu,
  enUS: Sp,
  zhTW: lu,
  zhHK: Pp,
  faIR: Op,
  messages: zp,
  currentMessage: Tp,
  add: uu,
  use: cu,
  merge: Ep,
  t: an,
  useLocale: su
};
const vl = Symbol("LOCALE_PROVIDER_KEY");
function Oy(e) {
  Ys(vl, e);
}
function so() {
  return nu(vl) ? js(vl) : { t: null };
}
const { name: zy, n: Ty, classes: Ey } = ne("action-sheet");
function By(e, n) {
  const o = _("var-action-item"), t = _("var-popup");
  return h(), we(t, {
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
    default: ce(() => [
      R(
        "div",
        je({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [
          F(e.$slots, "title", {}, () => {
            var r;
            return [
              R(
                "div",
                {
                  class: p(e.n("title"))
                },
                se((r = e.title) != null ? r : (e.pt ? e.pt : e.t)("actionSheetTitle")),
                3
                /* TEXT, CLASS */
              )
            ];
          }),
          F(e.$slots, "actions", {}, () => [
            (h(!0), S(
              Ae,
              null,
              qe(e.actions, (r) => (h(), we(o, {
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
const Bp = ee({
  name: zy,
  directives: { Ripple: tn },
  components: {
    VarPopup: Mo,
    VarActionItem: by
  },
  inheritAttrs: !1,
  props: Cp,
  setup(e) {
    const n = Gn(e, "show"), { t: o } = so();
    function t(r) {
      if (r.disabled)
        return;
      const { closeOnClickAction: a, onSelect: i } = e;
      C(i, r), a && (n.value = !1);
    }
    return {
      show: n,
      pt: o,
      t: an,
      n: Ty,
      classes: Ey,
      handleSelect: t
    };
  }
});
Bp.render = By;
var ur = Bp, Iy = Object.defineProperty, rc = Object.getOwnPropertySymbols, Dy = Object.prototype.hasOwnProperty, Ay = Object.prototype.propertyIsEnumerable, ac = (e, n, o) => n in e ? Iy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ic = (e, n) => {
  for (var o in n || (n = {}))
    Dy.call(n, o) && ac(e, o, n[o]);
  if (rc)
    for (var o of rc(n))
      Ay.call(n, o) && ac(e, o, n[o]);
  return e;
};
let So, du = {};
function My(e = {}) {
  return ic(ic({}, du), e);
}
function Uo(e) {
  return no() ? new Promise((n) => {
    Uo.close();
    const o = xe(My(e));
    o.teleport = "body", So = o;
    const { unmountInstance: t } = Ct(ur, o, {
      onSelect: (r) => {
        C(o.onSelect, r), n(r);
      },
      onClose: () => {
        C(o.onClose), n("close");
      },
      onClosed: () => {
        C(o.onClosed), t(), So === o && (So = null);
      },
      onRouteChange: () => {
        t(), So === o && (So = null);
      },
      "onUpdate:show": (r) => {
        o.show = r;
      }
    });
    o.show = !0;
  }) : Promise.resolve();
}
Uo.setDefaultOptions = function(e) {
  du = e;
};
Uo.resetDefaultOptions = function() {
  du = {};
};
Uo.close = function() {
  if (So != null) {
    const e = So;
    So = null, He().then(() => {
      e.show = !1;
    });
  }
};
Uo.Component = ur;
ae(ur);
ae(ur, Uo);
le(Uo, Cp);
const mB = ur;
var ml = Uo;
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
  onClose: L()
}, { name: Ny, n: Vy, classes: Ry } = ne("alert"), Ly = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  danger: "error"
};
function Fy(e, n) {
  const o = _("var-icon");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), e.n(`--${e.type}`), e.formatElevation(e.elevation, 2))),
      style: G({
        "background-color": e.color
      }),
      role: "alert"
    },
    [
      e.isInternalType || e.$slots.icon ? (h(), S(
        "div",
        {
          key: 0,
          class: p(e.n("icon"))
        },
        [
          F(e.$slots, "icon", {}, () => [
            e.isInternalType ? (h(), we(o, {
              key: 0,
              name: e.iconTypeMap[e.type]
            }, null, 8, ["name"])) : X("v-if", !0)
          ])
        ],
        2
        /* CLASS */
      )) : X("v-if", !0),
      F(e.$slots, "content", {}, () => [
        R(
          "div",
          {
            class: p(e.n("content"))
          },
          [
            e.title || e.$slots.title ? (h(), S(
              "div",
              {
                key: 0,
                class: p(e.n("title"))
              },
              [
                F(e.$slots, "title", {}, () => [
                  Ie(
                    se(e.title),
                    1
                    /* TEXT */
                  )
                ])
              ],
              2
              /* CLASS */
            )) : X("v-if", !0),
            e.message || e.$slots.default ? (h(), S(
              "div",
              {
                key: 1,
                class: p(e.n("message"))
              },
              [
                F(e.$slots, "default", {}, () => [
                  Ie(
                    se(e.message),
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
        )
      ]),
      e.closeable ? (h(), S(
        "div",
        {
          key: 1,
          class: p(e.n("close-icon")),
          onClick: n[0] || (n[0] = (...t) => e.handleClose && e.handleClose(...t))
        },
        [
          F(e.$slots, "close-icon", {}, () => [
            q(o, { name: "close-circle" })
          ])
        ],
        2
        /* CLASS */
      )) : X("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  );
}
const Dp = ee({
  name: Ny,
  components: {
    VarIcon: Ge
  },
  props: Ip,
  setup(e) {
    const n = I(() => ["info", "success", "danger", "warning"].includes(e.type));
    function o(t) {
      C(e.onClose, t);
    }
    return {
      n: Vy,
      classes: Ry,
      iconTypeMap: Ly,
      isInternalType: n,
      formatElevation: dn,
      handleClose: o
    };
  }
});
Dp.render = Fy;
var wa = Dp;
ae(wa);
le(wa, Ip);
const hB = wa;
var hl = wa;
const Ap = {
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
}, { name: Uy, n: Hy, classes: jy } = ne("app-bar");
function Yy(e, n) {
  return h(), S(
    Ae,
    null,
    [
      R(
        "div",
        je({
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
                  F(e.$slots, "left"),
                  e.titlePosition === "left" ? (h(), S(
                    "div",
                    {
                      key: 0,
                      class: p(e.n("title")),
                      style: G({ paddingLeft: e.paddingLeft })
                    },
                    [
                      F(e.$slots, "default", {}, () => [
                        Ie(
                          se(e.title),
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
              e.titlePosition === "center" ? (h(), S(
                "div",
                {
                  key: 0,
                  class: p(e.n("title"))
                },
                [
                  F(e.$slots, "default", {}, () => [
                    Ie(
                      se(e.title),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                2
                /* CLASS */
              )) : X("v-if", !0),
              R(
                "div",
                {
                  class: p(e.n("right"))
                },
                [
                  e.titlePosition === "right" ? (h(), S(
                    "div",
                    {
                      key: 0,
                      class: p(e.n("title")),
                      style: G({ paddingRight: e.paddingRight })
                    },
                    [
                      F(e.$slots, "default", {}, () => [
                        Ie(
                          se(e.title),
                          1
                          /* TEXT */
                        )
                      ])
                    ],
                    6
                    /* CLASS, STYLE */
                  )) : X("v-if", !0),
                  F(e.$slots, "right")
                ],
                2
                /* CLASS */
              )
            ],
            2
            /* CLASS */
          ),
          F(e.$slots, "content")
        ],
        16
        /* FULL_PROPS */
      ),
      e.fixed && e.placeholder ? (h(), S(
        "div",
        {
          key: 0,
          class: p(e.n("placeholder")),
          style: G({ height: e.placeholderHeight })
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
const Mp = ee({
  name: Uy,
  props: Ap,
  setup(e, { slots: n }) {
    const o = k(null), t = k(), r = k(), a = k(), i = I(() => {
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
    lo(s), yn(() => {
      l(), s();
    }), xt(l);
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
      n: Hy,
      classes: jy,
      formatElevation: dn,
      appBar: o,
      placeholderHeight: a
    };
  }
});
Mp.render = Yy;
var ka = Mp;
ae(ka);
le(ka, Ap);
const gB = ka;
var gl = ka;
const Np = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: Wy, n: Ky } = ne("form-details"), qy = { key: 0 }, Xy = { key: 0 };
function Gy(e, n) {
  return h(), we(_e, {
    name: e.n()
  }, {
    default: ce(() => [
      e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (h(), S(
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
              q(_e, {
                name: e.n("message")
              }, {
                default: ce(() => [
                  e.errorMessage ? (h(), S(
                    "div",
                    qy,
                    se(e.errorMessage),
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
          R(
            "div",
            {
              class: p(e.n("extra-message"))
            },
            [
              q(_e, {
                name: e.n("message")
              }, {
                default: ce(() => [
                  F(e.$slots, "extra-message", {}, () => [
                    e.extraMessage ? (h(), S(
                      "div",
                      Xy,
                      se(e.extraMessage),
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
const Vp = ee({
  name: Wy,
  props: Np,
  setup: () => ({ n: Ky })
});
Vp.render = Gy;
var $a = Vp;
ae($a);
le($a, Np);
const bB = $a;
var En = $a;
const Ca = {
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
  onClick: L(),
  onClear: L()
}, Rp = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), Lp = Symbol(
  "SWIPE_RESIZE_DISPATCHER_BIND_SWIPE_RESIZE_LISTENER_KEY"
);
function Zy() {
  const { childProviders: e, length: n, bindChildren: o } = kn(
    Rp
  );
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: o
  };
}
function Jy() {
  const { childProviders: e, bindChildren: n } = kn(
    Lp
  );
  return {
    swipeResizeListeners: e,
    bindSwipeResizeListeners: n
  };
}
function Qy() {
  const { parentProvider: e, bindParent: n } = wn(
    Lp
  );
  return {
    swipeResizeDispatcher: e,
    bindSwipeResizeDispatcher: n
  };
}
var _y = (e, n, o) => new Promise((t, r) => {
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
const { name: xy, n: ol, classes: e1 } = ne("field-decorator"), n1 = ["for"];
function o1(e, n) {
  const o = _("var-icon");
  return h(), S(
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
          style: G({
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
              F(e.$slots, "prepend-icon")
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
              F(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          e.placeholder && e.hint ? (h(), S("label", {
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
            style: G({
              color: e.color
            }),
            for: e.id
          }, [
            R(
              "span",
              null,
              se(e.placeholder),
              1
              /* TEXT */
            )
          ], 14, n1)) : X("v-if", !0),
          R(
            "div",
            {
              class: p(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              e.clearable && !e.isEmpty(e.value) ? F(e.$slots, "clear-icon", {
                key: 0,
                clear: e.handleClear
              }, () => [
                q(o, {
                  class: p(e.n("clear-icon")),
                  "var-field-decorator-cover": "",
                  name: "close-circle",
                  onClick: e.handleClear
                }, null, 8, ["class", "onClick"])
              ]) : X("v-if", !0),
              F(e.$slots, "append-icon")
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      e.line ? (h(), S(
        Ae,
        { key: 0 },
        [
          e.variant === "outlined" ? (h(), S(
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
              style: G({ borderColor: e.color })
            },
            [
              R(
                "legend",
                {
                  class: p(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
                  style: G({ width: e.legendWidth })
                },
                [
                  e.placeholder && e.hint ? (h(), we(io, {
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
                      se(e.placeholder),
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
          )) : (h(), S(
            "div",
            {
              key: 1,
              class: p(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.isError, e.n("--line-error")])),
              style: G({ background: e.isError ? void 0 : e.blurColor })
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
                  style: G({ background: e.isError ? void 0 : e.focusColor })
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
const Fp = ee({
  name: xy,
  components: { VarIcon: Ge },
  props: Ca,
  setup(e) {
    const n = k(null), o = k(null), t = k(""), r = k("0px"), a = k("0px"), i = k("0px"), l = k(!0), s = I(() => e.hint && (!Wn(e.value) || e.isFocusing)), { popup: u, bindPopup: c } = up(), { bindSwipeResizeDispatcher: d } = Qy(), f = I(
      () => e.isError ? void 0 : e.isFocusing ? e.focusColor : e.blurColor
    );
    lo(w), yn(() => {
      w(), He().then(() => {
        l.value = !1;
      });
    }), xt(w), C(c, null), C(d, {
      onResize() {
        He().then(w);
      }
    }), u && pe(
      () => u.show.value,
      ($) => _y(this, null, function* () {
        $ && (yield bn(), w());
      })
    );
    function v() {
      const { hint: $, value: y, composing: b } = e;
      if (!$ && (!Wn(y) || b))
        return ol("--placeholder-hidden");
      if (s.value)
        return ol("--placeholder-hint");
    }
    function m($) {
      C(e.onClear, $);
    }
    function g($) {
      C(e.onClick, $);
    }
    function w() {
      if (r.value = `${o.value.offsetLeft}px`, a.value = `${o.value.offsetWidth}px`, i.value = `${o.value.offsetHeight}px`, e.variant === "outlined" && n.value) {
        const $ = oo(n.value), y = `var(--field-decorator-outlined-${e.size}-placeholder-space)`;
        t.value = `calc(${$.width} * 0.75 + ${y} * 2)`;
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
      resize: w,
      computePlaceholderState: v,
      n: ol,
      classes: e1,
      isEmpty: Wn,
      handleClear: m,
      handleClick: g
    };
  }
});
Fp.render = o1;
var Sa = Fp;
ae(Sa);
le(Sa, Ca);
const yB = Sa;
var Lt = Sa, t1 = Object.defineProperty, r1 = Object.defineProperties, a1 = Object.getOwnPropertyDescriptors, lc = Object.getOwnPropertySymbols, i1 = Object.prototype.hasOwnProperty, l1 = Object.prototype.propertyIsEnumerable, sc = (e, n, o) => n in e ? t1(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, s1 = (e, n) => {
  for (var o in n || (n = {}))
    i1.call(n, o) && sc(e, o, n[o]);
  if (lc)
    for (var o of lc(n))
      l1.call(n, o) && sc(e, o, n[o]);
  return e;
}, u1 = (e, n) => r1(e, a1(n));
const fu = u1(s1({
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
  onFocus: L(),
  onBlur: L(),
  onInput: L(),
  onChange: L(),
  onClear: L(),
  "onUpdate:modelValue": L()
}, De(Ca, [
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
var c1 = Object.defineProperty, d1 = Object.defineProperties, f1 = Object.getOwnPropertyDescriptors, uc = Object.getOwnPropertySymbols, p1 = Object.prototype.hasOwnProperty, v1 = Object.prototype.propertyIsEnumerable, cc = (e, n, o) => n in e ? c1(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, m1 = (e, n) => {
  for (var o in n || (n = {}))
    p1.call(n, o) && cc(e, o, n[o]);
  if (uc)
    for (var o of uc(n))
      v1.call(n, o) && cc(e, o, n[o]);
  return e;
}, h1 = (e, n) => d1(e, f1(n));
const Up = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Hn() {
  const { parentProvider: e, index: n, bindParent: o } = wn(Up), t = _o();
  return {
    index: n,
    form: e,
    bindForm: o ? (a) => {
      o(h1(m1({}, a), { instance: t }));
    } : null
  };
}
function g1() {
  const { childProviders: e, length: n, bindChildren: o } = kn(Up);
  return {
    length: n,
    formItems: e,
    bindFormItems: o
  };
}
const { name: b1, n: y1, classes: w1 } = ne("input"), k1 = ["placeholder", "enterkeyhint"], $1 = ["autocomplete", "id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], C1 = ["autocomplete", "id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function S1(e, n) {
  const o = _("var-field-decorator"), t = _("var-form-details");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[12] || (n[12] = (...r) => e.handleMousedown && e.handleMousedown(...r))
    },
    [
      q(
        o,
        Eo(er({
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
        Xo({
          "clear-icon": ce(({ clear: r }) => [
            F(e.$slots, "clear-icon", { clear: r })
          ]),
          "append-icon": ce(() => [
            F(e.$slots, "append-icon")
          ]),
          default: ce(() => [
            e.normalizedType === "password" ? (h(), S("input", {
              key: 0,
              tabindex: "-1",
              class: p(e.n("autocomplete")),
              placeholder: e.hint ? void 0 : e.placeholder,
              style: G({
                "--input-placeholder-color": e.placeholderColor
              }),
              enterkeyhint: e.enterkeyhint
            }, null, 14, k1)) : X("v-if", !0),
            e.textarea ? (h(), S("textarea", {
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
              style: G({
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
            }, null, 46, $1)) : (h(), S("input", {
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
              style: G({
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
            }, null, 46, C1))
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots["prepend-icon"] ? {
            name: "prepend-icon",
            fn: ce(() => [
              F(e.$slots, "prepend-icon")
            ]),
            key: "0"
          } : void 0
        ]),
        1040
        /* FULL_PROPS, DYNAMIC_SLOTS */
      ),
      e.isShowFormDetails ? (h(), we(t, {
        key: 0,
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      }, Xo({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: ce(() => [
            F(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"])) : X("v-if", !0)
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const Hp = ee({
  name: b1,
  components: {
    VarFormDetails: En,
    VarFieldDecorator: Lt
  },
  props: fu,
  setup(e) {
    const n = np(), o = k(null), t = k(!1), r = k(!1), { bindForm: a, form: i } = Hn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: c
    } = Un(), d = I(() => e.disabled || e.readonly ? "" : "text"), f = I(() => e.type === "number" ? "text" : e.type), v = I(() => {
      const { maxlength: Z, modelValue: oe } = e;
      return Z ? Wn(oe) ? `0 / ${Z}` : `${String(oe).length}/${Z}` : "";
    }), m = I(() => {
      const { hint: Z, blurColor: oe, focusColor: ye } = e;
      if (!Z)
        return l.value ? "var(--field-decorator-error-color)" : t.value ? ye || "var(--field-decorator-focus-color)" : oe || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    });
    C(a, {
      reset: H,
      validate: U,
      resetValidation: c
    }), yn(() => {
      e.autofocus && D();
    });
    function w(Z) {
      He(() => {
        const { validateTrigger: oe, rules: ye, modelValue: Oe } = e;
        s(oe, Z, ye, Oe);
      });
    }
    function $(Z) {
      t.value = !0, C(e.onFocus, Z), w("onFocus");
    }
    function y(Z) {
      t.value = !1, C(e.onBlur, Z), w("onBlur");
    }
    function b(Z) {
      const oe = Z.target;
      let { value: ye } = oe;
      e.type === "number" && (ye = E(ye));
      const Oe = M(ye);
      return Oe === e.modelValue && (oe.value = Oe), Oe;
    }
    function P() {
      r.value = !0;
    }
    function T(Z) {
      r.value && (r.value = !1, Z.target.dispatchEvent(new Event("input")));
    }
    function O(Z) {
      if (r.value)
        return;
      const oe = b(Z);
      C(e["onUpdate:modelValue"], oe), C(e.onInput, oe, Z), w("onInput");
    }
    function B(Z) {
      const oe = z(b(Z));
      e.modelModifiers.trim && C(e["onUpdate:modelValue"], oe), C(e.onChange, oe, Z), w("onChange");
    }
    function A() {
      const { disabled: Z, readonly: oe, clearable: ye, onClear: Oe } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || Z || oe || !ye || (C(e["onUpdate:modelValue"], ""), C(Oe, ""), w("onClear"));
    }
    function N(Z) {
      const { disabled: oe, onClick: ye } = e;
      i != null && i.disabled.value || oe || (C(ye, Z), w("onClick"));
    }
    function E(Z) {
      const oe = Z.indexOf("-"), ye = Z.indexOf(".");
      return oe > -1 && (Z = oe === 0 ? "-" + Z.replace(/-/g, "") : Z.replace(/-/g, "")), ye > -1 && (Z = Z.slice(0, ye + 1) + Z.slice(ye).replace(/\./g, "")), Z.replace(/[^-0-9.]/g, "");
    }
    function z(Z) {
      return e.modelModifiers.trim ? Z.trim() : Z;
    }
    function M(Z) {
      return e.maxlength ? Z.slice(0, j(e.maxlength)) : Z;
    }
    function Y(Z) {
      const { disabled: oe } = e;
      i != null && i.disabled.value || oe || Z.target === o.value || (D(), Me(Z));
    }
    function H() {
      C(e["onUpdate:modelValue"], ""), c();
    }
    function U() {
      return u(e.rules, e.modelValue);
    }
    function D() {
      var Z;
      (Z = o.value) == null || Z.focus();
    }
    function Q() {
      o.value.blur();
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
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: y1,
      classes: w1,
      isEmpty: Wn,
      handleFocus: $,
      handleBlur: y,
      handleInput: O,
      handleChange: B,
      handleClear: A,
      handleClick: N,
      handleCompositionStart: P,
      handleCompositionEnd: T,
      handleMousedown: Y,
      validate: U,
      resetValidation: c,
      reset: H,
      focus: D,
      blur: Q
    };
  }
});
Hp.render = S1;
var Pa = Hp;
ae(Pa);
le(Pa, fu);
const wB = Pa;
var Ft = Pa;
const pu = {
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
var P1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ar(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return P1[n];
  });
}
var mo = "top", Vo = "bottom", Zo = "right", Bo = "left", vu = "auto", Oa = [mo, Vo, Zo, Bo], za = "start", Ut = "end", O1 = "clippingParents", jp = "viewport", Tt = "popper", z1 = "reference", dc = /* @__PURE__ */ Oa.reduce(function(e, n) {
  return e.concat([n + "-" + za, n + "-" + Ut]);
}, []), Yp = /* @__PURE__ */ [].concat(Oa, [vu]).reduce(function(e, n) {
  return e.concat([n, n + "-" + za, n + "-" + Ut]);
}, []), T1 = "beforeRead", E1 = "read", B1 = "afterRead", I1 = "beforeMain", D1 = "main", A1 = "afterMain", M1 = "beforeWrite", N1 = "write", V1 = "afterWrite", R1 = [T1, E1, B1, I1, D1, A1, M1, N1, V1];
function Io(e) {
  return e.split("-")[0];
}
var L1 = {
  start: "end",
  end: "start"
};
function fc(e) {
  return e.replace(/start|end/g, function(n) {
    return L1[n];
  });
}
function Zn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Jo(e) {
  var n = Zn(e).Element;
  return e instanceof n || e instanceof Element;
}
function Kn(e) {
  var n = Zn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function mu(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Zn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function Ho(e) {
  return ((Jo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var It = Math.max, pc = Math.min, dt = Math.round;
function bl() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Wp() {
  return !/^((?!chrome|android).)*safari/i.test(bl());
}
function ft(e, n, o) {
  n === void 0 && (n = !1), o === void 0 && (o = !1);
  var t = e.getBoundingClientRect(), r = 1, a = 1;
  n && Kn(e) && (r = e.offsetWidth > 0 && dt(t.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && dt(t.height) / e.offsetHeight || 1);
  var i = Jo(e) ? Zn(e) : window, l = i.visualViewport, s = !Wp() && o, u = (t.left + (s && l ? l.offsetLeft : 0)) / r, c = (t.top + (s && l ? l.offsetTop : 0)) / a, d = t.width / r, f = t.height / a;
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
function hu(e) {
  var n = Zn(e), o = n.pageXOffset, t = n.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: t
  };
}
function gu(e) {
  return ft(Ho(e)).left + hu(e).scrollLeft;
}
function F1(e, n) {
  var o = Zn(e), t = Ho(e), r = o.visualViewport, a = t.clientWidth, i = t.clientHeight, l = 0, s = 0;
  if (r) {
    a = r.width, i = r.height;
    var u = Wp();
    (u || !u && n === "fixed") && (l = r.offsetLeft, s = r.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: l + gu(e),
    y: s
  };
}
function bo(e) {
  return Zn(e).getComputedStyle(e);
}
function U1(e) {
  var n, o = Ho(e), t = hu(e), r = (n = e.ownerDocument) == null ? void 0 : n.body, a = It(o.scrollWidth, o.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = It(o.scrollHeight, o.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -t.scrollLeft + gu(e), s = -t.scrollTop;
  return bo(r || o).direction === "rtl" && (l += It(o.clientWidth, r ? r.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: s
  };
}
function to(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ta(e) {
  return to(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (mu(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Ho(e)
  );
}
function bu(e) {
  var n = bo(e), o = n.overflow, t = n.overflowX, r = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + r + t);
}
function Kp(e) {
  return ["html", "body", "#document"].indexOf(to(e)) >= 0 ? e.ownerDocument.body : Kn(e) && bu(e) ? e : Kp(Ta(e));
}
function Dt(e, n) {
  var o;
  n === void 0 && (n = []);
  var t = Kp(e), r = t === ((o = e.ownerDocument) == null ? void 0 : o.body), a = Zn(t), i = r ? [a].concat(a.visualViewport || [], bu(t) ? t : []) : t, l = n.concat(i);
  return r ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Dt(Ta(i)))
  );
}
function H1(e) {
  return ["table", "td", "th"].indexOf(to(e)) >= 0;
}
function vc(e) {
  return !Kn(e) || // https://github.com/popperjs/popper-core/issues/837
  bo(e).position === "fixed" ? null : e.offsetParent;
}
function j1(e) {
  var n = /firefox/i.test(bl()), o = /Trident/i.test(bl());
  if (o && Kn(e)) {
    var t = bo(e);
    if (t.position === "fixed")
      return null;
  }
  var r = Ta(e);
  for (mu(r) && (r = r.host); Kn(r) && ["html", "body"].indexOf(to(r)) < 0; ) {
    var a = bo(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || n && a.willChange === "filter" || n && a.filter && a.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function yu(e) {
  for (var n = Zn(e), o = vc(e); o && H1(o) && bo(o).position === "static"; )
    o = vc(o);
  return o && (to(o) === "html" || to(o) === "body" && bo(o).position === "static") ? n : o || j1(e) || n;
}
function Y1(e, n) {
  var o = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (o && mu(o)) {
    var t = n;
    do {
      if (t && e.isSameNode(t))
        return !0;
      t = t.parentNode || t.host;
    } while (t);
  }
  return !1;
}
function yl(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function W1(e, n) {
  var o = ft(e, !1, n === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function mc(e, n, o) {
  return n === jp ? yl(F1(e, o)) : Jo(n) ? W1(n, o) : yl(U1(Ho(e)));
}
function K1(e) {
  var n = Dt(Ta(e)), o = ["absolute", "fixed"].indexOf(bo(e).position) >= 0, t = o && Kn(e) ? yu(e) : e;
  return Jo(t) ? n.filter(function(r) {
    return Jo(r) && Y1(r, t) && to(r) !== "body";
  }) : [];
}
function q1(e, n, o, t) {
  var r = n === "clippingParents" ? K1(e) : [].concat(n), a = [].concat(r, [o]), i = a[0], l = a.reduce(function(s, u) {
    var c = mc(e, u, t);
    return s.top = It(c.top, s.top), s.right = pc(c.right, s.right), s.bottom = pc(c.bottom, s.bottom), s.left = It(c.left, s.left), s;
  }, mc(e, i, t));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Ht(e) {
  return e.split("-")[1];
}
function X1(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function qp(e) {
  var n = e.reference, o = e.element, t = e.placement, r = t ? Io(t) : null, a = t ? Ht(t) : null, i = n.x + n.width / 2 - o.width / 2, l = n.y + n.height / 2 - o.height / 2, s;
  switch (r) {
    case mo:
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
  var u = r ? X1(r) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case za:
        s[u] = s[u] - (n[c] / 2 - o[c] / 2);
        break;
      case Ut:
        s[u] = s[u] + (n[c] / 2 - o[c] / 2);
        break;
    }
  }
  return s;
}
function G1() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Z1(e) {
  return Object.assign({}, G1(), e);
}
function J1(e, n) {
  return n.reduce(function(o, t) {
    return o[t] = e, o;
  }, {});
}
function Xp(e, n) {
  n === void 0 && (n = {});
  var o = n, t = o.placement, r = t === void 0 ? e.placement : t, a = o.strategy, i = a === void 0 ? e.strategy : a, l = o.boundary, s = l === void 0 ? O1 : l, u = o.rootBoundary, c = u === void 0 ? jp : u, d = o.elementContext, f = d === void 0 ? Tt : d, v = o.altBoundary, m = v === void 0 ? !1 : v, g = o.padding, w = g === void 0 ? 0 : g, $ = Z1(typeof w != "number" ? w : J1(w, Oa)), y = f === Tt ? z1 : Tt, b = e.rects.popper, P = e.elements[m ? y : f], T = q1(Jo(P) ? P : P.contextElement || Ho(e.elements.popper), s, c, i), O = ft(e.elements.reference), B = qp({
    reference: O,
    element: b,
    strategy: "absolute",
    placement: r
  }), A = yl(Object.assign({}, b, B)), N = f === Tt ? A : O, E = {
    top: T.top - N.top + $.top,
    bottom: N.bottom - T.bottom + $.bottom,
    left: T.left - N.left + $.left,
    right: N.right - T.right + $.right
  }, z = e.modifiersData.offset;
  if (f === Tt && z) {
    var M = z[r];
    Object.keys(E).forEach(function(Y) {
      var H = [Zo, Vo].indexOf(Y) >= 0 ? 1 : -1, U = [mo, Vo].indexOf(Y) >= 0 ? "y" : "x";
      E[Y] += M[U] * H;
    });
  }
  return E;
}
function Q1(e, n) {
  n === void 0 && (n = {});
  var o = n, t = o.placement, r = o.boundary, a = o.rootBoundary, i = o.padding, l = o.flipVariations, s = o.allowedAutoPlacements, u = s === void 0 ? Yp : s, c = Ht(t), d = c ? l ? dc : dc.filter(function(m) {
    return Ht(m) === c;
  }) : Oa, f = d.filter(function(m) {
    return u.indexOf(m) >= 0;
  });
  f.length === 0 && (f = d);
  var v = f.reduce(function(m, g) {
    return m[g] = Xp(e, {
      placement: g,
      boundary: r,
      rootBoundary: a,
      padding: i
    })[Io(g)], m;
  }, {});
  return Object.keys(v).sort(function(m, g) {
    return v[m] - v[g];
  });
}
function _1(e) {
  if (Io(e) === vu)
    return [];
  var n = Ar(e);
  return [fc(e), n, fc(n)];
}
function x1(e) {
  var n = e.state, o = e.options, t = e.name;
  if (!n.modifiersData[t]._skip) {
    for (var r = o.mainAxis, a = r === void 0 ? !0 : r, i = o.altAxis, l = i === void 0 ? !0 : i, s = o.fallbackPlacements, u = o.padding, c = o.boundary, d = o.rootBoundary, f = o.altBoundary, v = o.flipVariations, m = v === void 0 ? !0 : v, g = o.allowedAutoPlacements, w = n.options.placement, $ = Io(w), y = $ === w, b = s || (y || !m ? [Ar(w)] : _1(w)), P = [w].concat(b).reduce(function(re, fe) {
      return re.concat(Io(fe) === vu ? Q1(n, {
        placement: fe,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: m,
        allowedAutoPlacements: g
      }) : fe);
    }, []), T = n.rects.reference, O = n.rects.popper, B = /* @__PURE__ */ new Map(), A = !0, N = P[0], E = 0; E < P.length; E++) {
      var z = P[E], M = Io(z), Y = Ht(z) === za, H = [mo, Vo].indexOf(M) >= 0, U = H ? "width" : "height", D = Xp(n, {
        placement: z,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), Q = H ? Y ? Zo : Bo : Y ? Vo : mo;
      T[U] > O[U] && (Q = Ar(Q));
      var Z = Ar(Q), oe = [];
      if (a && oe.push(D[M] <= 0), l && oe.push(D[Q] <= 0, D[Z] <= 0), oe.every(function(re) {
        return re;
      })) {
        N = z, A = !1;
        break;
      }
      B.set(z, oe);
    }
    if (A)
      for (var ye = m ? 3 : 1, Oe = function(fe) {
        var V = P.find(function(K) {
          var ve = B.get(K);
          if (ve)
            return ve.slice(0, fe).every(function(Se) {
              return Se;
            });
        });
        if (V)
          return N = V, "break";
      }, W = ye; W > 0; W--) {
        var J = Oe(W);
        if (J === "break") break;
      }
    n.placement !== N && (n.modifiersData[t]._skip = !0, n.placement = N, n.reset = !0);
  }
}
const ew = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: x1,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function nw(e, n, o) {
  var t = Io(e), r = [Bo, mo].indexOf(t) >= 0 ? -1 : 1, a = typeof o == "function" ? o(Object.assign({}, n, {
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
function ow(e) {
  var n = e.state, o = e.options, t = e.name, r = o.offset, a = r === void 0 ? [0, 0] : r, i = Yp.reduce(function(c, d) {
    return c[d] = nw(d, n.rects, a), c;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[t] = i;
}
const tw = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ow
};
var rw = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function aw(e) {
  var n = e.x, o = e.y, t = window, r = t.devicePixelRatio || 1;
  return {
    x: dt(n * r) / r || 0,
    y: dt(o * r) / r || 0
  };
}
function hc(e) {
  var n, o = e.popper, t = e.popperRect, r = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = i.x, v = f === void 0 ? 0 : f, m = i.y, g = m === void 0 ? 0 : m, w = typeof c == "function" ? c({
    x: v,
    y: g
  }) : {
    x: v,
    y: g
  };
  v = w.x, g = w.y;
  var $ = i.hasOwnProperty("x"), y = i.hasOwnProperty("y"), b = Bo, P = mo, T = window;
  if (u) {
    var O = yu(o), B = "clientHeight", A = "clientWidth";
    if (O === Zn(o) && (O = Ho(o), bo(O).position !== "static" && l === "absolute" && (B = "scrollHeight", A = "scrollWidth")), O = O, r === mo || (r === Bo || r === Zo) && a === Ut) {
      P = Vo;
      var N = d && O === T && T.visualViewport ? T.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        O[B]
      );
      g -= N - t.height, g *= s ? 1 : -1;
    }
    if (r === Bo || (r === mo || r === Vo) && a === Ut) {
      b = Zo;
      var E = d && O === T && T.visualViewport ? T.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        O[A]
      );
      v -= E - t.width, v *= s ? 1 : -1;
    }
  }
  var z = Object.assign({
    position: l
  }, u && rw), M = c === !0 ? aw({
    x: v,
    y: g
  }) : {
    x: v,
    y: g
  };
  if (v = M.x, g = M.y, s) {
    var Y;
    return Object.assign({}, z, (Y = {}, Y[P] = y ? "0" : "", Y[b] = $ ? "0" : "", Y.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + g + "px)" : "translate3d(" + v + "px, " + g + "px, 0)", Y));
  }
  return Object.assign({}, z, (n = {}, n[P] = y ? g + "px" : "", n[b] = $ ? v + "px" : "", n.transform = "", n));
}
function iw(e) {
  var n = e.state, o = e.options, t = o.gpuAcceleration, r = t === void 0 ? !0 : t, a = o.adaptive, i = a === void 0 ? !0 : a, l = o.roundOffsets, s = l === void 0 ? !0 : l, u = {
    placement: Io(n.placement),
    variation: Ht(n.placement),
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
const Gp = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: iw,
  data: {}
};
function lw(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function sw(e) {
  return e === Zn(e) || !Kn(e) ? hu(e) : lw(e);
}
function uw(e) {
  var n = e.getBoundingClientRect(), o = dt(n.width) / e.offsetWidth || 1, t = dt(n.height) / e.offsetHeight || 1;
  return o !== 1 || t !== 1;
}
function cw(e, n, o) {
  o === void 0 && (o = !1);
  var t = Kn(n), r = Kn(n) && uw(n), a = Ho(n), i = ft(e, r, o), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (t || !t && !o) && ((to(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  bu(a)) && (l = sw(n)), Kn(n) ? (s = ft(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : a && (s.x = gu(a))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function dw(e) {
  var n = ft(e), o = e.offsetWidth, t = e.offsetHeight;
  return Math.abs(n.width - o) <= 1 && (o = n.width), Math.abs(n.height - t) <= 1 && (t = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: t
  };
}
function fw(e) {
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
function pw(e) {
  var n = fw(e);
  return R1.reduce(function(o, t) {
    return o.concat(n.filter(function(r) {
      return r.phase === t;
    }));
  }, []);
}
function vw(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(o) {
      Promise.resolve().then(function() {
        n = void 0, o(e());
      });
    })), n;
  };
}
function mw(e) {
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
var gc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function bc() {
  for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
    n[o] = arguments[o];
  return !n.some(function(t) {
    return !(t && typeof t.getBoundingClientRect == "function");
  });
}
function hw(e) {
  e === void 0 && (e = {});
  var n = e, o = n.defaultModifiers, t = o === void 0 ? [] : o, r = n.defaultOptions, a = r === void 0 ? gc : r;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, gc, a),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, v = {
      state: c,
      setOptions: function($) {
        var y = typeof $ == "function" ? $(c.options) : $;
        g(), c.options = Object.assign({}, a, c.options, y), c.scrollParents = {
          reference: Jo(l) ? Dt(l) : l.contextElement ? Dt(l.contextElement) : [],
          popper: Dt(s)
        };
        var b = pw(mw([].concat(t, c.options.modifiers)));
        return c.orderedModifiers = b.filter(function(P) {
          return P.enabled;
        }), m(), v.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var $ = c.elements, y = $.reference, b = $.popper;
          if (bc(y, b)) {
            c.rects = {
              reference: cw(y, yu(b), c.options.strategy === "fixed"),
              popper: dw(b)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(E) {
              return c.modifiersData[E.name] = Object.assign({}, E.data);
            });
            for (var P = 0; P < c.orderedModifiers.length; P++) {
              if (c.reset === !0) {
                c.reset = !1, P = -1;
                continue;
              }
              var T = c.orderedModifiers[P], O = T.fn, B = T.options, A = B === void 0 ? {} : B, N = T.name;
              typeof O == "function" && (c = O({
                state: c,
                options: A,
                name: N,
                instance: v
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: vw(function() {
        return new Promise(function(w) {
          v.forceUpdate(), w(c);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!bc(l, s))
      return v;
    v.setOptions(u).then(function(w) {
      !f && u.onFirstUpdate && u.onFirstUpdate(w);
    });
    function m() {
      c.orderedModifiers.forEach(function(w) {
        var $ = w.name, y = w.options, b = y === void 0 ? {} : y, P = w.effect;
        if (typeof P == "function") {
          var T = P({
            state: c,
            name: $,
            instance: v,
            options: b
          }), O = function() {
          };
          d.push(T || O);
        }
      });
    }
    function g() {
      d.forEach(function(w) {
        return w();
      }), d = [];
    }
    return v;
  };
}
var br = {
  passive: !0
};
function gw(e) {
  var n = e.state, o = e.instance, t = e.options, r = t.scroll, a = r === void 0 ? !0 : r, i = t.resize, l = i === void 0 ? !0 : i, s = Zn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", o.update, br);
  }), l && s.addEventListener("resize", o.update, br), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", o.update, br);
    }), l && s.removeEventListener("resize", o.update, br);
  };
}
const bw = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: gw,
  data: {}
};
function yw(e) {
  var n = e.state, o = e.name;
  n.modifiersData[o] = qp({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const ww = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: yw,
  data: {}
};
function kw(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(o) {
    var t = n.styles[o] || {}, r = n.attributes[o] || {}, a = n.elements[o];
    !Kn(a) || !to(a) || (Object.assign(a.style, t), Object.keys(r).forEach(function(i) {
      var l = r[i];
      l === !1 ? a.removeAttribute(i) : a.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function $w(e) {
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
      !Kn(r) || !to(r) || (Object.assign(r.style, l), Object.keys(a).forEach(function(s) {
        r.removeAttribute(s);
      }));
    });
  };
}
const Cw = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: kw,
  effect: $w,
  requires: ["computeStyles"]
};
var Sw = [bw, ww, Gp, Cw], Pw = /* @__PURE__ */ hw({
  defaultModifiers: Sw
}), Ow = Object.defineProperty, zw = Object.defineProperties, Tw = Object.getOwnPropertyDescriptors, yc = Object.getOwnPropertySymbols, Ew = Object.prototype.hasOwnProperty, Bw = Object.prototype.propertyIsEnumerable, wc = (e, n, o) => n in e ? Ow(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, tl = (e, n) => {
  for (var o in n || (n = {}))
    Ew.call(n, o) && wc(e, o, n[o]);
  if (yc)
    for (var o of yc(n))
      Bw.call(n, o) && wc(e, o, n[o]);
  return e;
}, rl = (e, n) => zw(e, Tw(n)), kc = (e, n, o) => new Promise((t, r) => {
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
function Zp(e) {
  const n = k(null), o = k(null), t = k({ width: 0, height: 0 }), r = Gn(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(D, Q) {
      C(Q ? e.onOpen : e.onClose);
    }
  }), { zIndex: a } = sr(() => r.value, 1);
  tu(() => r.value, a);
  let i = null, l, s = !1, u = !1, c = !0;
  We(() => window, "keydown", M), pe(() => [e.offsetX, e.offsetY, e.placement, e.strategy], Y), pe(() => e.disabled, U), pe(
    () => r.value,
    (D) => {
      D && Y();
    }
  ), lo(Y), Lo(d), Qt(f);
  function d() {
    const D = N();
    i = Pw(D, o.value, A()), D.addEventListener("mouseenter", g), D.addEventListener("mouseleave", w), D.addEventListener("click", b), document.addEventListener("click", P);
  }
  function f() {
    const D = N();
    D && (D.removeEventListener("mouseenter", g), D.removeEventListener("mouseleave", w), D.removeEventListener("click", b)), i.destroy(), document.removeEventListener("click", P);
  }
  function v() {
    const D = N();
    if (!D)
      return;
    const { width: Q, height: Z } = oo(D);
    t.value = {
      width: en(Q),
      height: en(Z)
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
  function g() {
    e.trigger === "hover" && (u = !0, H());
  }
  function w() {
    return kc(this, null, function* () {
      e.trigger === "hover" && (u = !1, yield bn(), !s && U());
    });
  }
  function $() {
    e.trigger === "hover" && (s = !0, e.cascadeOptimization && (c = !1));
  }
  function y() {
    return kc(this, null, function* () {
      e.trigger === "hover" && (s = !1, yield bn(), !u && U());
    });
  }
  function b() {
    if (e.trigger === "click") {
      if (e.closeOnClickReference && r.value) {
        U();
        return;
      }
      H();
    }
  }
  function P(D) {
    const Q = N();
    if (Q && !Q.contains(D.target)) {
      if (e.trigger !== "click")
        return;
      T(), C(e.onClickOutside, D);
    }
  }
  function T() {
    U();
  }
  function O() {
    Y(), C(e.onClosed);
  }
  function B() {
    const { offsetX: D, offsetY: Q, placement: Z } = e;
    v();
    const oe = {
      x: en(D),
      y: en(Q)
    };
    switch (Z) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: oe.x,
          distance: oe.y - t.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: oe.x,
          distance: oe.y - t.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: oe.x,
          distance: oe.y - t.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: oe.x,
          distance: -oe.y - t.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: oe.x,
          distance: -oe.y - t.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: oe.x,
          distance: -oe.y - t.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: oe.y,
          distance: oe.x - t.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: oe.y,
          distance: -oe.x - t.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: Z,
          skidding: oe.y,
          distance: -oe.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: Z,
          skidding: oe.x,
          distance: -oe.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: Z,
          skidding: oe.x,
          distance: oe.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: Z,
          skidding: oe.y,
          distance: oe.x
        };
    }
  }
  function A() {
    const { placement: D, skidding: Q, distance: Z } = B(), oe = [
      rl(tl({}, ew), {
        enabled: r.value
      }),
      rl(tl({}, tw), {
        options: {
          offset: [Q, Z]
        }
      }),
      rl(tl({}, Gp), {
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
        fn({ state: ye }) {
          ye.styles.popper.transformOrigin = m();
        }
      }
    ];
    return {
      placement: D,
      modifiers: oe,
      strategy: e.strategy
    };
  }
  function N() {
    var D, Q;
    const Z = (D = l ?? e.reference) != null ? D : n.value;
    return sn(Z) ? (Q = n.value) == null ? void 0 : Q.querySelector(Z) : Z;
  }
  function E(D) {
    c = D;
  }
  function z(D) {
    f(), l = D, d();
  }
  function M(D) {
    const { closeOnKeyEscape: Q = !1 } = e;
    D.key === "Escape" && Q && r.value && (Me(D), U());
  }
  function Y() {
    i.setOptions(A());
  }
  function H() {
    e.disabled || (r.value = !0, C(e["onUpdate:show"], !0));
  }
  function U() {
    c && (r.value = !1, C(e["onUpdate:show"], !1));
  }
  return {
    show: r,
    popover: o,
    zIndex: a,
    host: n,
    referenceSize: t,
    handlePopoverClose: T,
    handlePopoverMouseenter: $,
    handlePopoverMouseleave: y,
    handleClosed: O,
    setReference: z,
    setAllowClose: E,
    resize: Y,
    open: H,
    close: U
  };
}
const { name: Iw, n: Dw, classes: Aw } = ne("menu");
function Mw(e, n) {
  return h(), S(
    "div",
    {
      ref: "host",
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      F(e.$slots, "default"),
      (h(), we(io, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        q(_e, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: ce(() => [
            Ve(R(
              "div",
              {
                ref: "popover",
                style: G({
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
                onClick: n[0] || (n[0] = Xn(() => {
                }, ["stop"])),
                onMouseenter: n[1] || (n[1] = (...o) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...o)),
                onMouseleave: n[2] || (n[2] = (...o) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...o))
              },
              [
                F(e.$slots, "menu")
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
const Jp = ee({
  name: Iw,
  props: pu,
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
      resize: m,
      // expose
      setReference: g
    } = Zp(e);
    function w() {
      d(!0);
    }
    return {
      popover: o,
      host: t,
      referenceSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      allowClose: w,
      formatElevation: dn,
      toSizeUnit: ze,
      n: Dw,
      classes: Aw,
      handlePopoverMouseenter: l,
      handlePopoverMouseleave: s,
      handlePopoverClose: u,
      handleClosed: c,
      resize: m,
      open: f,
      close: v,
      setReference: g
    };
  }
});
Jp.render = Mw;
var cr = Jp;
ae(cr);
le(cr, pu);
const kB = cr;
var jt = cr;
const Qp = {
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
  onClick: L(),
  onChange: L(),
  "onUpdate:modelValue": L(),
  "onUpdate:indeterminate": L()
}, _p = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Nw() {
  const { bindChildren: e, childProviders: n, length: o } = kn(
    _p
  );
  return {
    length: o,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Vw() {
  const { bindParent: e, parentProvider: n, index: o } = wn(
    _p
  );
  return {
    index: o,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
const { name: Rw, n: Lw, classes: Fw } = ne("checkbox"), Uw = ["tabindex"];
function Hw(e, n) {
  const o = _("var-icon"), t = _("var-hover-overlay"), r = _("var-form-details"), a = Ye("hover"), i = Ye("ripple");
  return h(), S(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      R(
        "div",
        {
          class: p(e.n()),
          onClick: n[3] || (n[3] = (...l) => e.handleClick && e.handleClick(...l))
        },
        [
          Ve((h(), S("div", {
            ref: "action",
            class: p(
              e.classes(
                e.n("action"),
                [e.checked || e.isIndeterminate, e.n("--checked"), e.n("--unchecked")],
                [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")],
                [e.formDisabled || e.disabled, e.n("--disabled")]
              )
            ),
            style: G({ color: e.checked || e.isIndeterminate ? e.checkedColor : e.uncheckedColor }),
            tabindex: e.disabled || e.formDisabled ? void 0 : "0",
            onFocus: n[0] || (n[0] = (l) => e.isFocusing = !0),
            onBlur: n[1] || (n[1] = (l) => e.isFocusing = !1)
          }, [
            e.isIndeterminate ? F(e.$slots, "indeterminate-icon", { key: 0 }, () => [
              q(o, {
                class: p(e.n("icon")),
                name: "minus-box",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : X("v-if", !0),
            e.checked && !e.isIndeterminate ? F(e.$slots, "checked-icon", { key: 1 }, () => [
              q(o, {
                class: p(e.n("icon")),
                name: "checkbox-marked",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : X("v-if", !0),
            !e.checked && !e.isIndeterminate ? F(e.$slots, "unchecked-icon", { key: 2 }, () => [
              q(o, {
                class: p(e.n("icon")),
                name: "checkbox-blank-outline",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : X("v-if", !0),
            q(t, {
              hovering: !e.disabled && !e.formDisabled && e.hovering,
              focusing: !e.disabled && !e.formDisabled && e.isFocusing
            }, null, 8, ["hovering", "focusing"])
          ], 46, Uw)), [
            [a, e.handleHovering, "desktop"],
            [i, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }]
          ]),
          e.$slots.default ? (h(), S(
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
              F(e.$slots, "default", { checked: e.checked })
            ],
            2
            /* CLASS */
          )) : X("v-if", !0)
        ],
        2
        /* CLASS */
      ),
      q(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const xp = ee({
  name: Rw,
  directives: { Ripple: tn, Hover: Dn },
  components: {
    VarIcon: Ge,
    VarFormDetails: En,
    VarHoverOverlay: Fn
  },
  props: Qp,
  setup(e) {
    const n = k(null), o = k(!1), t = Gn(e, "modelValue"), r = Gn(e, "indeterminate"), a = I(() => t.value === e.checkedValue), i = I(() => e.checkedValue), { checkboxGroup: l, bindCheckboxGroup: s } = Vw(), { hovering: u, handleHovering: c } = eo(), { form: d, bindForm: f } = Hn(), {
      errorMessage: v,
      validateWithTrigger: m,
      validate: g,
      // expose
      resetValidation: w
    } = Un(), $ = {
      checkedValue: i,
      checked: a,
      sync: O,
      validate: z,
      resetValidation: w,
      reset: B
    };
    C(s, $), C(f, $), We(() => window, "keydown", N), We(() => window, "keyup", E);
    function y(M) {
      He(() => {
        const { validateTrigger: Y, rules: H, modelValue: U } = e;
        m(Y, M, H, U);
      });
    }
    function b(M) {
      const { checkedValue: Y, onChange: H } = e;
      t.value = M, C(H, t.value, r.value), y("onChange"), M === Y ? l == null || l.onChecked(Y) : l == null || l.onUnchecked(Y);
    }
    function P(M) {
      const { disabled: Y, readonly: H, checkedValue: U, uncheckedValue: D, onClick: Q } = e;
      if (d != null && d.disabled.value || Y || (C(Q, M), d != null && d.readonly.value || H))
        return;
      if (r.value === !0) {
        r.value = !1, C(e.onChange, t.value, r.value), y("onChange");
        return;
      }
      const Z = l ? l.checkedCount.value >= Number(l.max.value) : !1;
      !a.value && Z || b(a.value ? D : U);
    }
    function T() {
      n.value.focus();
    }
    function O(M) {
      const { checkedValue: Y, uncheckedValue: H } = e;
      t.value = M.includes(Y) ? Y : H;
    }
    function B() {
      t.value = e.uncheckedValue, w();
    }
    function A(M) {
      const { checkedValue: Y, uncheckedValue: H } = e;
      ![Y, H].includes(M) && (M = a.value ? H : Y), b(M);
    }
    function N(M) {
      if (!o.value)
        return;
      const { key: Y } = M;
      (Y === "Enter" || Y === " ") && Me(M), Y === "Enter" && n.value.click();
    }
    function E(M) {
      o.value && M.key === " " && (Me(M), n.value.click());
    }
    function z() {
      return g(e.rules, e.modelValue);
    }
    return {
      action: n,
      isFocusing: o,
      isIndeterminate: r,
      checked: a,
      errorMessage: v,
      checkboxGroupErrorMessage: l == null ? void 0 : l.errorMessage,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      hovering: u,
      n: Lw,
      classes: Fw,
      handleHovering: c,
      handleClick: P,
      handleTextClick: T,
      toggle: A,
      reset: B,
      validate: z,
      resetValidation: w
    };
  }
});
xp.render = Hw;
var Ea = xp;
ae(Ea);
le(Ea, Qp);
const $B = Ea;
var pt = Ea;
const ev = Symbol("MENU_SELECT_BIND_MENU_OPTION_KEY");
function jw() {
  const { length: e, childProviders: n, bindChildren: o } = kn(
    ev
  );
  return {
    length: e,
    menuOptions: n,
    bindMenuOptions: o
  };
}
function Yw() {
  const { index: e, parentProvider: n, bindParent: o } = wn(
    ev
  );
  return Ln(!!o, "MenuOption", "<var-menu-option/> must in <var-menu-select/>"), {
    index: e,
    menuSelect: n,
    bindMenuSelect: o
  };
}
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
};
var Ww = (e, n, o) => new Promise((t, r) => {
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
const { name: Kw, n: qw, classes: Xw } = ne("menu-option"), Gw = ["tabindex"];
function Zw(e, n) {
  const o = _("var-checkbox"), t = _("maybe-v-node"), r = _("var-icon"), a = _("var-hover-overlay"), i = Ye("ripple"), l = Ye("hover");
  return Ve((h(), S("div", {
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
    e.multiple ? (h(), we(o, {
      key: 0,
      ref: "checkbox",
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (s) => e.optionSelected = s),
      indeterminate: e.optionIndeterminate,
      "onUpdate:indeterminate": n[1] || (n[1] = (s) => e.optionIndeterminate = s),
      disabled: e.disabled,
      onClick: n[2] || (n[2] = Xn(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, ["modelValue", "indeterminate", "disabled", "onChange"])) : X("v-if", !0),
    F(e.$slots, "default", {}, () => [
      R(
        "div",
        {
          class: p(e.classes(e.n("text")))
        },
        [
          q(t, {
            class: p(e.n("$--ellipsis")),
            is: e.labelVNode
          }, null, 8, ["class", "is"])
        ],
        2
        /* CLASS */
      )
    ]),
    e.childrenTrigger ? (h(), S(
      "div",
      {
        key: 1,
        class: p(e.n("arrow"))
      },
      [
        q(r, {
          "var-menu-option-cover": "",
          class: p(e.n("arrow-icon")),
          name: "chevron-right"
        }, null, 8, ["class"])
      ],
      2
      /* CLASS */
    )) : X("v-if", !0),
    q(a, {
      hovering: (e.hovering || e.highlight) && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 42, Gw)), [
    [i, { disabled: e.disabled || !e.ripple }],
    [l, e.handleHovering, "desktop"]
  ]);
}
const ov = ee({
  name: Kw,
  directives: { Ripple: tn, Hover: Dn },
  components: {
    VarCheckbox: pt,
    VarHoverOverlay: Fn,
    VarIcon: Ge,
    MaybeVNode: ir
  },
  props: nv,
  setup(e) {
    const n = k(), o = k(), t = k(!1), r = k(!1), a = k(!1), i = I(() => r.value), l = I(() => a.value), s = I(() => e.value), u = I(() => e.disabled), c = I(() => e.ripple), { menuSelect: d, bindMenuSelect: f } = Yw(), { size: v, multiple: m, onSelect: g, computeLabel: w } = d, { hovering: $, handleHovering: y } = eo(), b = I(
      () => {
        var E;
        return mn(e.label) ? e.label(
          (E = e.option) != null ? E : {
            label: e.label,
            value: e.value,
            disabled: e.disabled,
            ripple: e.ripple
          },
          r.value
        ) : e.label;
      }
    ), P = {
      label: b,
      value: s,
      selected: i,
      disabled: u,
      ripple: c,
      indeterminate: l,
      sync: N
    };
    pe([() => e.label, () => e.value], w), f(P), We(() => window, "keydown", O), We(() => window, "keyup", B);
    function T() {
      if (!e.disabled && !(!m.value && e.childrenTrigger)) {
        if (m.value && a.value) {
          a.value = !1, r.value = !1, g(P);
          return;
        }
        m.value && !a.value && (r.value = !r.value), g(P);
      }
    }
    function O(E) {
      var z;
      !t.value && !((z = o.value) != null && z.isFocusing) || ((E.key === "ArrowRight" || E.key === "ArrowLeft") && (Me(E), C(e.onKeyArrowX, E.key)), t.value && ((E.key === " " || E.key === "Enter") && Me(E), E.key === "Enter" && n.value.click()));
    }
    function B(E) {
      t.value && E.key === " " && (Me(E), n.value.click());
    }
    function A() {
      return Ww(this, null, function* () {
        yield He(), g(P);
      });
    }
    function N(E, z) {
      r.value = E, tr(z) && (a.value = z);
    }
    return {
      root: n,
      checkbox: o,
      optionSelected: r,
      optionIndeterminate: a,
      size: v,
      multiple: m,
      hovering: $,
      isFocusing: t,
      labelVNode: b,
      n: qw,
      classes: Xw,
      handleHovering: y,
      handleClick: T,
      handleSelect: A
    };
  }
});
ov.render = Zw;
var dr = ov;
ae(dr);
le(dr, nv);
const CB = dr;
var vt = dr, Jw = Object.defineProperty, Qw = Object.defineProperties, _w = Object.getOwnPropertyDescriptors, $c = Object.getOwnPropertySymbols, xw = Object.prototype.hasOwnProperty, ek = Object.prototype.propertyIsEnumerable, Cc = (e, n, o) => n in e ? Jw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, nk = (e, n) => {
  for (var o in n || (n = {}))
    xw.call(n, o) && Cc(e, o, n[o]);
  if ($c)
    for (var o of $c(n))
      ek.call(n, o) && Cc(e, o, n[o]);
  return e;
}, ok = (e, n) => Qw(e, _w(n));
const _r = ok(nk({
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
}, De(pu, [
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
var tk = Object.defineProperty, Sc = Object.getOwnPropertySymbols, rk = Object.prototype.hasOwnProperty, ak = Object.prototype.propertyIsEnumerable, Pc = (e, n, o) => n in e ? tk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ik = (e, n) => {
  for (var o in n || (n = {}))
    rk.call(n, o) && Pc(e, o, n[o]);
  if (Sc)
    for (var o of Sc(n))
      ak.call(n, o) && Pc(e, o, n[o]);
  return e;
}, lk = (e, n, o) => new Promise((t, r) => {
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
const { name: sk, n: uk } = ne("menu-children"), ck = { ref: "menuOptions" };
function dk(e, n) {
  const o = _("var-menu-option"), t = _("var-menu-children"), r = _("var-menu");
  return h(), we(r, {
    ref: "menu",
    trigger: "hover",
    placement: "right-start",
    "cascade-optimization": "",
    "var-menu-children-cover": "",
    class: p(e.n()),
    disabled: e.disabled,
    teleport: !1,
    "close-on-click-reference": !1,
    show: e.show,
    "onUpdate:show": n[1] || (n[1] = (a) => e.show = a)
  }, Xo({
    default: ce(() => [
      q(o, {
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
        R(
          "div",
          ck,
          [
            (h(!0), S(
              Ae,
              null,
              qe(e.options, (a) => (h(), S(
                Ae,
                {
                  key: a[e.valueKey]
                },
                [
                  a[e.childrenKey] ? (h(), we(t, {
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
                  }, null, 8, ["parent-show", "option", "options", "highlight-options", "disabled", "onKeyArrowX", "onKeyArrowRightOpen", "onMouseenter"])) : (h(), we(o, {
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
  ]), 1032, ["class", "disabled", "show"]);
}
const tv = ee({
  name: sk,
  components: {
    VarMenu: cr,
    VarMenuOption: dr
  },
  props: ik({
    parentShow: Boolean,
    disabled: Boolean,
    option: {
      type: Object,
      required: !0
    },
    highlightOptions: De(_r, "options"),
    onKeyArrowX: L(),
    onKeyArrowRightOpen: L(),
    onMouseenter: L()
  }, De(_r, ["options", "valueKey", "labelKey", "childrenKey"])),
  setup(e) {
    const n = k(!1), o = k(), t = k(), r = k(), a = k();
    pe(
      () => e.parentShow,
      (f) => {
        f || (n.value = !1);
      },
      { immediate: !0 }
    );
    function i(f) {
      return lk(this, null, function* () {
        var v;
        C(e.onKeyArrowX, f), f === "ArrowRight" && (C(e.onKeyArrowRightOpen), (v = o.value) == null || v.open(), yield vo(), ru(o.value.$el, r.value, "ArrowDown"));
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
      C(e.onMouseenter);
    }
    return {
      show: n,
      menu: o,
      trigger: t,
      menuOptions: r,
      menuChildren: a,
      n: uk,
      close: s,
      handleArrowLeft: l,
      handleArrowRight: i,
      handleMouseenter: d,
      allowClose: u,
      allowChildrenClose: c
    };
  }
});
tv.render = dk;
var fk = tv;
function rv(e) {
  const {
    multiple: n,
    modelValue: o,
    optionProviders: t,
    optionProvidersLength: r,
    optionIsIndeterminate: a
  } = e, i = k(""), l = k([]);
  pe(o, f, { deep: !0 }), pe(r, f);
  function s() {
    const v = n(), m = o();
    v && (l.value = m.map(u)), !v && !Wn(m) && (i.value = u(m)), !v && Wn(m) && (i.value = "");
  }
  function u(v) {
    var m;
    const g = t();
    let w = g.find(({ value: $ }) => $.value === v);
    return w || (w = g.find(({ label: $ }) => $.value === v)), (m = w == null ? void 0 : w.label.value) != null ? m : "";
  }
  function c({ value: v, label: m }) {
    var g;
    return (g = v.value) != null ? g : m.value;
  }
  function d(v) {
    const m = n(), g = t();
    return m ? g.filter(({ selected: w }) => w.value).map(c) : c(v);
  }
  function f() {
    const v = n(), m = o(), g = t();
    v ? g.forEach(
      (w) => w.sync(
        m.includes(c(w)),
        a ? a(w) : void 0
      )
    ) : g.forEach((w) => w.sync(m === c(w))), s();
  }
  return {
    label: i,
    labels: l,
    getOptionProviderKey: c,
    computeLabel: s,
    getSelectedValue: d
  };
}
var pk = Object.defineProperty, vk = Object.defineProperties, mk = Object.getOwnPropertyDescriptors, Oc = Object.getOwnPropertySymbols, hk = Object.prototype.hasOwnProperty, gk = Object.prototype.propertyIsEnumerable, zc = (e, n, o) => n in e ? pk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, bk = (e, n) => {
  for (var o in n || (n = {}))
    hk.call(n, o) && zc(e, o, n[o]);
  if (Oc)
    for (var o of Oc(n))
      gk.call(n, o) && zc(e, o, n[o]);
  return e;
}, yk = (e, n) => vk(e, mk(n));
const { name: wk, n: kk, classes: $k } = ne("menu-select");
function Ck(e, n) {
  const o = _("var-menu-children"), t = _("var-menu-option"), r = _("var-menu");
  return h(), we(r, {
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
    "onUpdate:show": n[1] || (n[1] = (a) => e.show = a),
    onOpen: e.onOpen,
    onOpened: e.onOpened,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onClickOutside: e.onClickOutside
  }, {
    menu: ce(() => [
      R(
        "div",
        {
          ref: "menuOptionsRef",
          class: p(e.classes(e.n("menu"), e.formatElevation(e.elevation, 3), [e.scrollable, e.n("--scrollable")]))
        },
        [
          (h(!0), S(
            Ae,
            null,
            qe(e.options, (a) => (h(), S(
              Ae,
              {
                key: a[e.valueKey]
              },
              [
                a[e.childrenKey] ? (h(), we(o, {
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
                }, null, 8, ["parent-show", "option", "options", "highlight-options", "disabled", "onKeyArrowRightOpen", "onMouseenter"])) : (h(), we(t, {
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
          F(e.$slots, "options")
        ],
        2
        /* CLASS */
      )
    ]),
    default: ce(() => [
      F(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "disabled", "trigger", "reference", "placement", "strategy", "offset-x", "offset-y", "teleport", "same-width", "elevation", "popover-class", "close-on-click-reference", "show", "onOpen", "onOpened", "onClose", "onClosed", "onClickOutside"]);
}
const av = ee({
  name: wk,
  components: { VarMenu: jt, VarMenuOption: vt, VarMenuChildren: fk },
  props: _r,
  setup(e) {
    const n = Gn(e, "show"), o = k(), t = k(), r = k(), a = I(() => y(e.options)), { menuOptions: i, length: l, bindMenuOptions: s } = jw(), { computeLabel: u, getSelectedValue: c, getOptionProviderKey: d } = rv({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => i,
      optionProvidersLength: () => l.value,
      optionIsIndeterminate(z) {
        var M;
        const Y = m(z.value.value);
        if (!Y)
          return !1;
        const H = ((M = Y._children) != null ? M : []).filter((D) => !D.disabled), U = H.filter((D) => e.modelValue.includes(D.value));
        return U.length > 0 && U.length < H.length;
      }
    }), f = I(() => {
      const { multiple: z, modelValue: M } = e;
      if (z)
        return [];
      const Y = a.value.find((D) => D.value === M), H = [];
      let U = Y == null ? void 0 : Y._parent;
      for (; U; )
        H.push(U), U = U._parent;
      return H;
    }), v = {
      size: I(() => e.size),
      multiple: I(() => e.multiple),
      computeLabel: u,
      onSelect: b
    };
    s(v), We(() => window, "keydown", T);
    function m(z) {
      return a.value.find((M) => M.value === z);
    }
    function g(z) {
      return i.find((M) => M.value.value === z);
    }
    function w(z) {
      return z[e.childrenKey];
    }
    function $(z) {
      const M = [];
      Y(z);
      function Y(H) {
        H.forEach((U) => {
          M.push(U);
          const D = w(U);
          D && Y(D);
        });
      }
      return M;
    }
    function y(z) {
      function M(Y, H) {
        return Y.map((U) => {
          U = yk(bk({}, U), { _rawOption: U }), H && (U._parent = H);
          const D = w(U);
          if (D) {
            const Q = M(D, U);
            U[e.childrenKey] = Q, U._children = $(Q);
          }
          return U;
        });
      }
      return $(M(z));
    }
    function b(z) {
      var M, Y;
      const { multiple: H, closeOnSelect: U } = e, { value: D, label: Q, selected: Z, disabled: oe, ripple: ye } = z, Oe = m(D.value);
      if (Oe) {
        const re = ((M = Oe._children) != null ? M : []).filter((fe) => !fe.disabled).map((fe) => fe.value);
        H && Z.value && (i.forEach((fe) => {
          re.includes(fe.value.value) && fe.sync(!0, !1);
        }), P(Oe)), H && !Z.value && (i.forEach((fe) => {
          re.includes(fe.value.value) && fe.sync(!1, !1);
        }), P(Oe));
      }
      const W = c(z), J = (Y = Oe == null ? void 0 : Oe._rawOption) != null ? Y : {
        value: D.value,
        label: Q.value,
        disabled: oe.value,
        ripple: ye.value
      };
      C(e.onSelect, d(z), J), C(e["onUpdate:modelValue"], W), !H && U && (o.value.$el.focus(), A());
    }
    function P(z) {
      let M = z._parent;
      for (; M; ) {
        const Y = g(M.value), H = w(M).filter((Q) => !Q.disabled), U = H.every((Q) => !g(Q.value).selected.value), D = H.every((Q) => g(Q.value).selected.value);
        U ? Y.sync(!1, !1) : D ? Y.sync(!0, !1) : Y.sync(!1, !0), M = M._parent;
      }
    }
    function T(z) {
      if (e.disabled || !n.value)
        return;
      const { key: M } = z;
      if (["Escape", "ArrowDown", "ArrowUp"].includes(M) && Me(z), M === "Escape") {
        o.value.$el.focus(), A(), C(e.onKeyEscape);
        return;
      }
      (M === "ArrowDown" || M === "ArrowUp") && ru(o.value.$el, t.value, M);
    }
    function O(z) {
      var M;
      (M = r.value) == null || M.forEach((Y) => {
        if (Y.allowClose(), z == null) {
          Y.close();
          return;
        }
        Y.option.value !== z.value && Y.close();
      });
    }
    function B() {
      var z;
      (z = o.value) == null || z.open();
    }
    function A() {
      var z;
      (z = o.value) == null || z.close();
    }
    function N() {
      var z;
      (z = o.value) == null || z.resize();
    }
    function E(z) {
      var M;
      (M = o.value) == null || M.setReference(z);
    }
    return {
      show: n,
      menu: o,
      menuOptionsRef: t,
      menuChildren: r,
      highlightOptions: f,
      n: kk,
      classes: $k,
      allowChildrenClose: O,
      formatElevation: dn,
      open: B,
      close: A,
      resize: N,
      setReference: E
    };
  }
});
av.render = Ck;
var Ba = av;
ae(Ba);
le(Ba, _r);
const SB = Ba;
var Yt = Ba, Sk = Object.defineProperty, Tc = Object.getOwnPropertySymbols, Pk = Object.prototype.hasOwnProperty, Ok = Object.prototype.propertyIsEnumerable, Ec = (e, n, o) => n in e ? Sk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, zk = (e, n) => {
  for (var o in n || (n = {}))
    Pk.call(n, o) && Ec(e, o, n[o]);
  if (Tc)
    for (var o of Tc(n))
      Ok.call(n, o) && Ec(e, o, n[o]);
  return e;
};
const iv = zk({
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
}, De(fu, [
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
var yr = (e, n, o) => new Promise((t, r) => {
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
const { name: Tk, n: Ek } = ne("auto-complete"), Bk = ["tabindex"];
function Ik(e, n) {
  const o = _("var-input"), t = _("var-menu-option"), r = _("var-menu-select"), a = _("var-form-details");
  return h(), S("div", {
    ref: "root",
    class: p(e.n()),
    tabindex: e.disabled || e.formDisabled ? void 0 : "0",
    onFocusin: n[2] || (n[2] = (...i) => e.focus && e.focus(...i)),
    onClick: n[3] || (n[3] = (...i) => e.handleClick && e.handleClick(...i))
  }, [
    q(r, {
      "same-width": "",
      "auto-complete-cover": "",
      scrollable: "",
      trigger: "manual",
      placement: "bottom",
      disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
      class: p(e.n("menu-select")),
      "popover-class": e.variant === "standard" ? e.n("--standard-menu-margin") : void 0,
      show: e.isShowMenuSelect,
      "onUpdate:show": n[1] || (n[1] = (i) => e.isShowMenuSelect = i),
      "onUpdate:modelValue": e.handleAutoComplete,
      onKeyEscape: e.handleKeyEscape
    }, {
      options: ce(() => [
        R(
          "div",
          {
            class: p(e.n("options"))
          },
          [
            (h(!0), S(
              Ae,
              null,
              qe(e.viewOptions, (i) => (h(), we(t, {
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
        q(o, je({ ref: "input" }, {
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
        }), Xo({
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots["prepend-icon"] ? {
            name: "prepend-icon",
            fn: ce(() => [
              F(e.$slots, "prepend-icon")
            ]),
            key: "0"
          } : void 0,
          e.$slots["append-icon"] ? {
            name: "append-icon",
            fn: ce(() => [
              F(e.$slots, "append-icon")
            ]),
            key: "1"
          } : void 0,
          e.$slots["clear-icon"] ? {
            name: "clear-icon",
            fn: ce(({ clear: i }) => [
              F(e.$slots, "clear-icon", { clear: i })
            ]),
            key: "2"
          } : void 0,
          e.$slots["extra-message"] ? {
            name: "extra-message",
            fn: ce(() => [
              F(e.$slots, "extra-message")
            ]),
            key: "3"
          } : void 0
        ]), 1040, ["is-force-focusing-effect", "is-force-error-effect", "onInput", "onBlur", "onClear", "onChange", "modelValue"])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["disabled", "class", "popover-class", "show", "onUpdate:modelValue", "onKeyEscape"]),
    q(a, {
      "error-message": e.errorMessage,
      "extra-message": e.maxlengthText
    }, null, 8, ["error-message", "extra-message"])
  ], 42, Bk);
}
const lv = ee({
  name: Tk,
  components: {
    VarInput: Ft,
    VarMenuSelect: Yt,
    VarMenuOption: vt,
    VarFormDetails: En
  },
  props: iv,
  setup(e) {
    const n = k(), o = k(), t = k(!1), r = Gn(e, "modelValue"), a = k([]), i = k(!1), l = I(() => {
      const { maxlength: U } = e;
      return U ? Wn(r.value) ? `0 / ${U}` : `${String(r.value).length}/${U}` : "";
    }), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: c,
      // expose
      resetValidation: d
    } = Un(), { bindForm: f, form: v } = Hn();
    let m = !1;
    const g = {
      reset: w,
      resetValidation: d,
      validate: $
    };
    ep(
      () => n.value,
      "click",
      () => {
        if (m) {
          m = !1;
          return;
        }
        b();
      }
    ), pe(() => [e.options, t.value], B), C(f, g), We(() => window, "keydown", O);
    function w() {
      C(e["onUpdate:modelValue"], ""), d();
    }
    function $() {
      return c(e.rules, e.modelValue);
    }
    function y() {
      t.value || e.disabled || v != null && v.disabled.value || (t.value = !0, o.value.focus(), C(e.onFocus), T("onFocus"));
    }
    function b() {
      t.value && (t.value = !1, i.value = !1, o.value.blur(), C(e.onBlur), T("onBlur"));
    }
    function P() {
      i.value || b();
    }
    function T(U) {
      He(() => {
        const { validateTrigger: D, rules: Q, modelValue: Z } = e;
        u(D, U, Q, Z);
      });
    }
    function O(U) {
      return yr(this, null, function* () {
        var D;
        if (v != null && v.disabled.value || v != null && v.readonly.value || e.disabled || e.readonly || !t.value || !i.value)
          return;
        const { key: Q } = U;
        if (Q === "Tab") {
          Me(U), n.value.focus(), i.value = !1;
          return;
        }
        if (!["ArrowUp", "ArrowDown", "Enter"].includes(Q)) {
          o.value.focus();
          return;
        }
        Q === "Enter" && (yield vo(), (D = o.value) == null || D.focus());
      });
    }
    function B() {
      return yr(this, null, function* () {
        t.value && (i.value = H(r.value)), i.value && (a.value = e.options);
      });
    }
    function A(U, D) {
      return yr(this, null, function* () {
        B(), C(e.onInput, U, D), T("onInput");
      });
    }
    function N() {
      m = !0, B(), C(e.onClear, r.value), T("onClear");
    }
    function E(U) {
      e.disabled || v != null && v.disabled.value || (C(e.onClick, U), T("onClick"));
    }
    function z(U) {
      C(e.onChange, U), T("onChange");
    }
    function M(U) {
      return yr(this, null, function* () {
        var D;
        e.maxlength != null && (U = U.slice(0, j(e.maxlength))), U !== r.value && (r.value = U, C(e.onChange, U), T("onChange")), yield vo(), (D = o.value) == null || D.focus();
      });
    }
    function Y() {
      o.value.focus();
    }
    function H(U) {
      return e.disabled || e.readonly || v != null && v.disabled.value || v != null && v.readonly.value ? !1 : e.options.length > 0 && (e.getShow != null ? e.getShow(U) : U.length > 0);
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
      n: Ek,
      handleInput: A,
      handleClear: N,
      handleClick: E,
      handleChange: z,
      handleBlur: P,
      handleKeyEscape: Y,
      handleAutoComplete: M,
      reset: w,
      validate: $,
      resetValidation: d,
      blur: b,
      focus: y
    };
  }
});
lv.render = Ik;
var Ia = lv;
ae(Ia);
le(Ia, iv);
const PB = Ia;
var wl = Ia;
const Bc = (e) => sn(e) ? e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp|ico)$/i.test(e) : !1, Ic = (e) => sn(e) ? e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e) : !1, Dk = (e) => {
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
      this.has(o) && Do(this.cache, o);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, kl = (e) => e, Dc = (e) => e ** 3, sv = (e) => e < 0.5 ? Dc(e * 2) / 2 : 1 - Dc((1 - e) * 2) / 2, Qo = (e, n, o = "") => {
  if (e === void 0 && (e = ""), e.length >= n)
    return e;
  const t = n - e.length, r = Math.floor(t / o.length);
  return o.repeat(r) + o.slice(0, t % o.length) + e;
};
var Ak = Object.defineProperty, Ac = Object.getOwnPropertySymbols, Mk = Object.prototype.hasOwnProperty, Nk = Object.prototype.propertyIsEnumerable, Mc = (e, n, o) => n in e ? Ak(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Vk = (e, n) => {
  for (var o in n || (n = {}))
    Mk.call(n, o) && Mc(e, o, n[o]);
  if (Ac)
    for (var o of Ac(n))
      Nk.call(n, o) && Mc(e, o, n[o]);
  return e;
}, Da = (e, n, o) => new Promise((t, r) => {
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
const Rk = "background-image", Lk = "lazy-loading", Fk = "lazy-error", Nc = "lazy-attempt", Uk = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], $l = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", mt = [], xr = [], uv = Dk(100), pn = {
  loading: $l,
  error: $l,
  attempt: 3,
  throttleWait: 300,
  events: Uk
};
let wu = ma(fr, pn.throttleWait);
function Aa(e, n) {
  e._lazy.arg === Rk ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function Hk(e) {
  e._lazy.loading && Aa(e, e._lazy.loading), fr();
}
function jk(e) {
  e._lazy.error && Aa(e, e._lazy.error), e._lazy.state = "error", $u(e), fr();
}
function cv(e, n) {
  Aa(e, n), e._lazy.state = "success", $u(e), fr();
}
function Yk(e) {
  var n;
  xr.includes(e) || (xr.push(e), (n = pn.events) == null || n.forEach((o) => {
    e.addEventListener(o, wu, { passive: !0 });
  }));
}
function Wk() {
  xr.forEach((e) => {
    var n;
    (n = pn.events) == null || n.forEach((o) => {
      e.removeEventListener(o, wu);
    });
  }), xr.length = 0;
}
function Kk(e, n) {
  var o, t;
  const r = {
    loading: (o = e.getAttribute(Lk)) != null ? o : pn.loading,
    error: (t = e.getAttribute(Fk)) != null ? t : pn.error,
    attempt: e.getAttribute(Nc) ? Number(e.getAttribute(Nc)) : pn.attempt
  };
  e._lazy = Vk({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, r), Aa(e, $l), C(pn.filter, e._lazy);
}
function qk(e, n) {
  const o = new Image();
  o.src = n, e._lazy.preloadImage = o, o.addEventListener("load", () => {
    e._lazy.attemptLock = !1, uv.add(n), cv(e, n);
  }), o.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? jk(e) : dv(e);
  });
}
function dv(e) {
  if (e._lazy.attemptLock)
    return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (uv.has(n)) {
    cv(e, n), e._lazy.attemptLock = !1;
    return;
  }
  Hk(e), qk(e, n);
}
function ku(e) {
  return Da(this, null, function* () {
    yield bn(), xs(e) && dv(e);
  });
}
function fr() {
  mt.forEach((e) => ku(e));
}
function Xk(e) {
  return Da(this, null, function* () {
    !mt.includes(e) && mt.push(e), W0(e).forEach(Yk), yield ku(e);
  });
}
function $u(e) {
  Do(mt, e), mt.length === 0 && Wk();
}
function Gk(e, n) {
  const { src: o, arg: t } = e._lazy;
  return o !== n.value || t !== n.arg;
}
function fv(e, n) {
  return Da(this, null, function* () {
    Kk(e, n), yield Xk(e);
  });
}
function Zk(e, n) {
  return Da(this, null, function* () {
    if (!Gk(e, n)) {
      mt.includes(e) && (yield ku(e));
      return;
    }
    yield fv(e, n);
  });
}
function Jk(e = {}) {
  const { events: n, loading: o, error: t, attempt: r, throttleWait: a, filter: i } = e;
  pn.events = n ?? pn.events, pn.loading = o ?? pn.loading, pn.error = t ?? pn.error, pn.attempt = r ?? pn.attempt, pn.throttleWait = a ?? pn.throttleWait, pn.filter = i;
}
const pv = {
  mounted: fv,
  unmounted: $u,
  updated: Zk,
  install(e, n) {
    Jk(n), wu = ma(fr, pn.throttleWait), e.directive("lazy", this);
  }
}, OB = pv;
var Wt = pv;
const vv = {
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
}, Qk = (e) => ["mini", "small", "normal", "large"].includes(e), { name: _k, n: xk, classes: e$ } = ne("avatar"), n$ = ["src", "alt", "lazy-loading", "lazy-error"], o$ = ["src", "alt"];
function t$(e, n) {
  const o = Ye("lazy");
  return h(), S(
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
      style: G({
        width: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        height: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        borderColor: e.borderColor,
        backgroundColor: e.color
      }),
      onClick: n[3] || (n[3] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      e.src ? (h(), S(
        Ae,
        { key: 0 },
        [
          e.lazy ? Ve((h(), S("img", {
            key: 0,
            role: "img",
            class: p(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: G({ objectFit: e.fit }),
            "lazy-loading": e.loading,
            "lazy-error": e.error,
            onLoad: n[0] || (n[0] = (...t) => e.handleLoad && e.handleLoad(...t))
          }, null, 46, n$)), [
            [o, e.src]
          ]) : (h(), S("img", {
            key: 1,
            role: "img",
            class: p(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: G({ objectFit: e.fit }),
            onLoad: n[1] || (n[1] = (...t) => e.handleLoad && e.handleLoad(...t)),
            onError: n[2] || (n[2] = (...t) => e.handleError && e.handleError(...t))
          }, null, 46, o$))
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (h(), S(
        "div",
        {
          key: 1,
          ref: "textElement",
          class: p(e.n("text")),
          style: G({ transform: `scale(${e.scale})` })
        },
        [
          F(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      ))
    ],
    6
    /* CLASS, STYLE */
  );
}
const mv = ee({
  name: _k,
  directives: { Lazy: Wt },
  props: vv,
  setup(e) {
    const n = k(null), o = k(null), t = k(1);
    yn(r), xt(r);
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
      n: xk,
      classes: e$,
      isInternalSize: Qk,
      toSizeUnit: ze,
      handleLoad: a,
      handleError: i,
      handleClick: l
    };
  }
});
mv.render = t$;
var Ma = mv;
ae(Ma);
le(Ma, vv);
const zB = Ma;
var Cl = Ma;
const hv = {
  offset: [Number, String],
  vertical: Boolean
}, { name: r$, n: a$, classes: i$ } = ne("avatar-group");
function l$(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: G(e.rootStyles)
    },
    [
      F(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const gv = ee({
  name: r$,
  props: hv,
  setup(e) {
    return {
      rootStyles: I(() => e.offset == null ? {} : {
        "--avatar-group-offset": ze(e.offset)
      }),
      n: a$,
      classes: i$
    };
  }
});
gv.render = l$;
var Na = gv;
ae(Na);
le(Na, hv);
const TB = Na;
var Sl = Na;
const co = {
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
}, { name: s$, n: u$, classes: c$ } = ne("loading");
function d$(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.n())
    },
    [
      e.$slots.default ? (h(), S(
        "div",
        {
          key: 0,
          class: p(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
        },
        [
          F(e.$slots, "default"),
          e.loading ? (h(), S(
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
      e.isShow ? (h(), S(
        "div",
        {
          key: 1,
          class: p(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
        },
        [
          e.type === "circle" ? (h(), S(
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
                  style: G({
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
          )) : X("v-if", !0),
          (h(!0), S(
            Ae,
            null,
            qe(e.loadingTypeDict, (o, t) => (h(), S(
              Ae,
              { key: t },
              [
                e.type === t ? (h(), S(
                  "div",
                  {
                    key: 0,
                    class: p(e.classes(e.n(t), e.n(`${t}--${e.size}`)))
                  },
                  [
                    (h(!0), S(
                      Ae,
                      null,
                      qe(o, (r) => (h(), S(
                        "div",
                        {
                          key: r + t,
                          style: G({ backgroundColor: e.color }),
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
          e.$slots.description || e.description ? (h(), S(
            "div",
            {
              key: 1,
              class: p(e.classes(e.n("description"), e.n(`description--${e.size}`))),
              style: G({ color: e.color })
            },
            [
              F(e.$slots, "description", {}, () => [
                Ie(
                  se(e.description),
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
const bv = ee({
  name: s$,
  props: co,
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
      n: u$,
      classes: c$,
      multiplySizeUnit: On
    };
  }
});
bv.render = d$;
var Va = bv;
ae(Va);
le(Va, co);
const EB = Va;
var ht = Va, f$ = Object.defineProperty, p$ = Object.defineProperties, v$ = Object.getOwnPropertyDescriptors, Vc = Object.getOwnPropertySymbols, m$ = Object.prototype.hasOwnProperty, h$ = Object.prototype.propertyIsEnumerable, Rc = (e, n, o) => n in e ? f$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Lc = (e, n) => {
  for (var o in n || (n = {}))
    m$.call(n, o) && Rc(e, o, n[o]);
  if (Vc)
    for (var o of Vc(n))
      h$.call(n, o) && Rc(e, o, n[o]);
  return e;
}, Fc = (e, n) => p$(e, v$(n));
const yv = {
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
  loadingType: De(co, "type"),
  loadingSize: Fc(Lc({}, De(co, "size")), {
    default: void 0
  }),
  loadingColor: Fc(Lc({}, De(co, "color")), {
    default: "currentColor"
  }),
  onClick: L(),
  onTouchstart: L()
}, wv = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function g$() {
  const { bindChildren: e, childProviders: n, length: o } = kn(wv);
  return {
    length: o,
    buttons: n,
    bindButtons: e
  };
}
function b$() {
  const { bindParent: e, parentProvider: n, index: o } = wn(wv);
  return {
    index: o,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
const { name: y$, n: w$, classes: k$ } = ne("button"), $$ = ["tabindex", "type", "disabled"];
function C$(e, n) {
  const o = _("var-loading"), t = _("var-hover-overlay"), r = Ye("ripple"), a = Ye("hover");
  return Ve((h(), S("button", {
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
    style: G({
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
    e.loading || e.pending ? (h(), we(o, {
      key: 0,
      class: p(e.n("loading")),
      "var-button-cover": "",
      color: e.loadingColor,
      type: e.loadingType,
      size: e.loadingSize || e.states.size,
      radius: e.loadingRadius
    }, null, 8, ["class", "color", "type", "size", "radius"])) : X("v-if", !0),
    R(
      "div",
      {
        class: p(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [
        F(e.$slots, "default")
      ],
      2
      /* CLASS */
    ),
    q(t, {
      hovering: e.disabled || e.loading || e.pending ? !1 : e.hovering,
      focusing: e.disabled || e.loading || e.pending ? !1 : e.isFocusing
    }, null, 8, ["hovering", "focusing"])
  ], 46, $$)), [
    [r, { disabled: e.disabled || !e.ripple || e.loading || e.pending }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const kv = ee({
  name: y$,
  components: {
    VarLoading: ht,
    VarHoverOverlay: Fn
  },
  directives: { Ripple: tn, Hover: Dn },
  props: yv,
  setup(e) {
    const n = k(!1), o = k(!1), { buttonGroup: t } = b$(), { hovering: r, handleHovering: a } = eo(), i = I(() => {
      var d, f, v, m, g, w;
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
      const { type: $, size: y, color: b, textColor: P, mode: T } = t;
      return {
        elevation: "",
        type: (v = e.type) != null ? v : $.value,
        size: (m = e.size) != null ? m : y.value,
        color: (g = e.color) != null ? g : b.value,
        textColor: (w = e.textColor) != null ? w : P.value,
        text: T.value === "text" || T.value === "outline",
        outline: T.value === "outline",
        iconContainer: T.value === "icon-container"
      };
    });
    function l(d) {
      e.autoLoading && (o.value = !0, Promise.all(po(d)).then(() => {
        o.value = !1;
      }).catch(() => {
        o.value = !1;
      }));
    }
    function s(d) {
      const { loading: f, disabled: v, onClick: m } = e;
      !m || f || v || o.value || l(C(m, d));
    }
    function u(d) {
      const { loading: f, disabled: v, onTouchstart: m } = e;
      !m || f || v || o.value || l(C(m, d));
    }
    function c() {
      e.focusable && (n.value = !0);
    }
    return {
      pending: o,
      states: i,
      hovering: r,
      isFocusing: n,
      n: w$,
      classes: k$,
      handleHovering: a,
      handleClick: s,
      handleTouchstart: u,
      handleFocus: c
    };
  }
});
kv.render = C$;
var Ra = kv;
ae(Ra);
le(Ra, yv);
const BB = Ra;
var Bn = Ra;
const $v = {
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
}, { name: S$, n: P$, classes: O$ } = ne("back-top");
function z$(e, n) {
  const o = _("var-icon"), t = _("var-button");
  return h(), we(io, {
    to: "body",
    disabled: e.disabled
  }, [
    R(
      "div",
      je({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = Xn((...r) => e.handleClick && e.handleClick(...r), ["stop"]))
      }),
      [
        F(e.$slots, "default", {}, () => [
          q(t, {
            elevation: e.elevation,
            type: "primary",
            "var-back-top-cover": ""
          }, {
            default: ce(() => [
              q(o, { name: "chevron-up" })
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
const Cv = ee({
  name: S$,
  components: {
    VarButton: Bn,
    VarIcon: Ge
  },
  inheritAttrs: !1,
  props: $v,
  setup(e) {
    const n = k(!1), o = k(null), t = k(!0);
    let r;
    const a = ma(() => {
      i();
    }, 200);
    Lo(() => {
      s(), u(), i(), t.value = !1;
    }), Fo(u), ar(c);
    function i() {
      n.value = go(r) >= en(e.visibilityHeight);
    }
    function l(d) {
      C(e.onClick, d);
      const f = rr(r);
      Rt(r, {
        left: f,
        duration: e.duration,
        animation: sv
      });
    }
    function s() {
      r = e.target ? cp(e.target, "BackTop") : No(o.value);
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
      n: P$,
      classes: O$,
      handleClick: l
    };
  }
});
Cv.render = z$;
var La = Cv;
ae(La);
le(La, $v);
const IB = La;
var Pl = La;
const Sv = {
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
  icon: De(on, "name"),
  namespace: De(on, "namespace"),
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
var T$ = Object.defineProperty, Uc = Object.getOwnPropertySymbols, E$ = Object.prototype.hasOwnProperty, B$ = Object.prototype.propertyIsEnumerable, Hc = (e, n, o) => n in e ? T$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, I$ = (e, n) => {
  for (var o in n || (n = {}))
    E$.call(n, o) && Hc(e, o, n[o]);
  if (Uc)
    for (var o of Uc(n))
      B$.call(n, o) && Hc(e, o, n[o]);
  return e;
};
const { name: D$, n: A$, classes: M$ } = ne("badge"), N$ = { key: 0 };
function V$(e, n) {
  const o = _("var-icon");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      F(e.$slots, "default"),
      q(_e, {
        name: e.n("$-badge-fade"),
        persisted: ""
      }, {
        default: ce(() => [
          Ve(R(
            "span",
            je({
              class: e.classes(
                e.n("content"),
                e.n(`--${e.type}`),
                [e.$slots.default, e.n(`--${e.position}`), e.n("--offset")],
                [e.dot, e.n("--dot")],
                [e.icon, e.n("--icon")]
              ),
              style: I$({ background: e.color }, e.offsetStyle)
            }, e.$attrs),
            [
              e.icon ? (h(), we(o, {
                key: 0,
                class: p(e.n("icon")),
                "var-badge-cover": "",
                name: e.icon,
                namespace: e.namespace
              }, null, 8, ["class", "name", "namespace"])) : X("v-if", !0),
              F(e.$slots, "value", {}, () => [
                !e.icon && !e.dot ? (h(), S(
                  "span",
                  N$,
                  se(e.value),
                  1
                  /* TEXT */
                )) : X("v-if", !0)
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
const Pv = ee({
  name: D$,
  components: { VarIcon: Ge },
  inheritAttrs: !1,
  props: Sv,
  setup(e) {
    const n = I(() => {
      const { value: t, maxValue: r } = e;
      return t != null && r != null && j(t) > j(r) ? `${r}+` : t;
    }), o = I(() => ({
      "--badge-offset-y": ze(e.offsetY),
      "--badge-offset-x": ze(e.offsetX)
    }));
    return {
      value: n,
      offsetStyle: o,
      n: A$,
      classes: M$
    };
  }
});
Pv.render = V$;
var Fa = Pv;
ae(Fa);
le(Fa, Sv);
const DB = Fa;
var ea = Fa;
const Ov = {
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
  onChange: L(),
  onBeforeChange: L(),
  onFabClick: L(),
  "onUpdate:active": L()
}, zv = Symbol(
  "BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"
);
function R$() {
  const { childProviders: e, length: n, bindChildren: o } = kn(
    zv
  );
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: o
  };
}
var L$ = Object.defineProperty, jc = Object.getOwnPropertySymbols, F$ = Object.prototype.hasOwnProperty, U$ = Object.prototype.propertyIsEnumerable, Yc = (e, n, o) => n in e ? L$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Wc = (e, n) => {
  for (var o in n || (n = {}))
    F$.call(n, o) && Yc(e, o, n[o]);
  if (jc)
    for (var o of jc(n))
      U$.call(n, o) && Yc(e, o, n[o]);
  return e;
};
const { name: H$, n: j$, classes: Y$ } = ne("bottom-navigation"), { n: Ua } = ne("bottom-navigation-item"), Kc = Ua("--right-half-space"), qc = Ua("--left-half-space"), Xc = Ua("--right-space"), W$ = {
  type: "primary"
};
function K$(e, n) {
  const o = _("var-button");
  return h(), S(
    Ae,
    null,
    [
      R(
        "div",
        je({
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
          F(e.$slots, "default"),
          e.$slots.fab ? (h(), we(o, je({
            key: 0,
            class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
            "var-bottom-navigation__fab": "",
            onClick: e.handleFabClick
          }, e.fabProps), {
            default: ce(() => [
              F(e.$slots, "fab")
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["class", "onClick"])) : X("v-if", !0)
        ],
        16
        /* FULL_PROPS */
      ),
      e.fixed && e.placeholder ? (h(), S(
        "div",
        {
          key: 0,
          class: p(e.n("placeholder")),
          style: G({ height: e.placeholderHeight })
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
const Tv = ee({
  name: H$,
  components: { VarButton: Bn },
  props: Ov,
  setup(e, { slots: n }) {
    const o = k(null), t = I(() => e.active), r = I(() => e.activeColor), a = I(() => e.inactiveColor), i = I(() => e.variant), l = k(), s = k({}), { length: u, bottomNavigationItems: c, bindBottomNavigationItem: d } = R$();
    d({
      active: t,
      activeColor: r,
      inactiveColor: a,
      variant: i,
      onToggle: $
    }), pe(() => u.value, v), pe(
      () => e.fabProps,
      (E) => {
        s.value = Wc(Wc({}, W$), E);
      },
      { immediate: !0, deep: !0 }
    ), lo(N), yn(() => {
      N(), n.fab && T(u.value);
    }), xt(() => {
      P(), n.fab && T(u.value);
    });
    function v() {
      u.value === 0 || m() || g() || w();
    }
    function m() {
      return c.find(({ name: E }) => t.value === E.value);
    }
    function g() {
      return c.find(({ index: E }) => t.value === E.value);
    }
    function w() {
      Tn(t.value) && (t.value < 0 ? C(e["onUpdate:active"], 0) : t.value > u.value - 1 && C(e["onUpdate:active"], u.value - 1));
    }
    function $(E) {
      t.value !== E && (e.onBeforeChange ? y(E) : b(E));
    }
    function y(E) {
      const z = po(C(e.onBeforeChange, E));
      Promise.all(z).then((M) => {
        M.every(Boolean) && b(E);
      });
    }
    function b(E) {
      C(e["onUpdate:active"], E), C(e.onChange, E);
    }
    function P() {
      B().forEach((z) => {
        z.classList.remove(Kc, qc, Xc);
      });
    }
    function T(E) {
      const z = B(), M = z.length, Y = E % 2 === 0;
      z.forEach((H, U) => {
        O(Y, H, U, M);
      });
    }
    function O(E, z, M, Y) {
      const H = M === Y - 1;
      if (!E && H) {
        z.classList.add(Xc);
        return;
      }
      const U = M === Y / 2 - 1, D = M === Y / 2;
      U ? z.classList.add(Kc) : D && z.classList.add(qc);
    }
    function B() {
      return Array.from(o.value.querySelectorAll(`.${Ua()}`));
    }
    function A() {
      C(e.onFabClick);
    }
    function N() {
      if (!e.fixed || !e.placeholder)
        return;
      const { height: E } = nn(o.value);
      l.value = ze(E);
    }
    return {
      length: u,
      bottomNavigationDom: o,
      fabProps: s,
      placeholderHeight: l,
      n: j$,
      classes: Y$,
      handleFabClick: A
    };
  }
});
Tv.render = K$;
var Ha = Tv;
ae(Ha);
le(Ha, Ov);
const AB = Ha;
var Ol = Ha;
const Ev = {
  name: String,
  label: String,
  icon: De(on, "name"),
  namespace: De(on, "namespace"),
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: L()
};
function q$() {
  const { parentProvider: e, index: n, bindParent: o } = wn(
    zv
  );
  return Ln(!!o, "BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: o
  };
}
const { name: X$, n: G$, classes: Z$ } = ne("bottom-navigation-item"), J$ = {
  type: "danger",
  dot: !0
};
function Q$(e, n) {
  const o = _("var-icon"), t = _("var-badge"), r = Ye("ripple");
  return Ve((h(), S(
    "button",
    {
      class: p(e.classes(e.n(), e.n("$--box"), [e.variant, e.n("--variant-padding")], [e.isActive && !e.variant, e.n("--active")])),
      style: G({
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
          e.badge ? (h(), we(t, je({ key: 0 }, e.badgeProps, {
            class: e.n("badge"),
            "var-bottom-navigation-item-cover": ""
          }), {
            default: ce(() => [
              F(e.$slots, "icon", { active: e.isActive }, () => [
                e.icon ? (h(), we(o, {
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
          }, 16, ["class"])) : F(e.$slots, "icon", {
            key: 1,
            active: e.isActive
          }, () => [
            e.icon ? (h(), we(o, {
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
      R(
        "span",
        {
          class: p(e.n("label"))
        },
        [
          F(e.$slots, "default", {}, () => [
            Ie(
              se(e.label),
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
const Bv = ee({
  name: X$,
  components: {
    VarBadge: ea,
    VarIcon: Ge
  },
  directives: { Ripple: tn },
  props: Ev,
  setup(e) {
    const n = I(() => e.name), o = I(() => [n.value, r.value].includes(l.value)), t = I(() => e.badge === !0 ? J$ : e.badge), { index: r, bottomNavigation: a, bindBottomNavigation: i } = q$(), { active: l, activeColor: s, inactiveColor: u, variant: c } = a;
    i({
      name: n,
      index: r
    });
    function f() {
      var v;
      const m = (v = n.value) != null ? v : r.value;
      C(e.onClick, m), C(a.onToggle, m);
    }
    return {
      activeColor: s,
      inactiveColor: u,
      badgeProps: t,
      isActive: o,
      variant: c,
      n: G$,
      classes: Z$,
      handleClick: f
    };
  }
});
Bv.render = Q$;
var ja = Bv;
ae(ja);
le(ja, Ev);
const MB = ja;
var zl = ja;
const Iv = {
  separator: String,
  onClick: L()
}, Dv = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function _$() {
  const { childProviders: e, bindChildren: n, length: o } = kn(
    Dv
  );
  return {
    length: o,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function x$() {
  const { parentProvider: e, bindParent: n, index: o } = wn(
    Dv
  );
  return Ln(!!n, "Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: o,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
const { name: eC, n: nC, classes: oC } = ne("breadcrumb");
function tC(e, n) {
  return h(), S(
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
          F(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      e.isLast ? X("v-if", !0) : F(e.$slots, "separator", { key: 0 }, () => {
        var o;
        return [
          R(
            "div",
            {
              class: p(e.n("separator")),
              "aria-hidden": "true"
            },
            se((o = e.separator) != null ? o : e.parentSeparator),
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
const Av = ee({
  name: eC,
  props: Iv,
  setup(e) {
    const { index: n, breadcrumb: o, bindBreadcrumb: t } = x$(), r = I(() => n.value === o.length.value - 1), a = I(() => o.separator.value);
    t(null);
    function i(l) {
      r.value || C(e.onClick, l);
    }
    return {
      n: nC,
      classes: oC,
      isLast: r,
      parentSeparator: a,
      handleClick: i
    };
  }
});
Av.render = tC;
var Ya = Av;
ae(Ya);
le(Ya, Iv);
const NB = Ya;
var Tl = Ya;
const Mv = {
  separator: {
    type: String,
    default: "/"
  }
}, { name: rC, n: aC } = ne("breadcrumbs");
function iC(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.n()),
      role: "navigation",
      "aria-label": "Breadcrumbs"
    },
    [
      F(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Nv = ee({
  name: rC,
  props: Mv,
  setup(e) {
    const n = I(() => e.separator), { bindBreadcrumbList: o, length: t } = _$();
    return o({
      length: t,
      separator: n
    }), { n: aC };
  }
});
Nv.render = iC;
var Wa = Nv;
ae(Wa);
le(Wa, Mv);
const VB = Wa;
var El = Wa;
const Vv = {
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
}, { name: lC, n: sC, classes: uC } = ne("button-group");
function cC(e, n) {
  return h(), S(
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
      F(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Rv = ee({
  name: lC,
  props: Vv,
  setup(e) {
    const { bindButtons: n } = g$(), o = {
      elevation: I(() => e.elevation),
      type: I(() => e.type),
      size: I(() => e.size),
      color: I(() => e.color),
      textColor: I(() => e.textColor),
      mode: I(() => e.mode)
    };
    return n(o), {
      n: sC,
      classes: uC,
      formatElevation: dn
    };
  }
});
Rv.render = cC;
var Ka = Rv;
ae(Ka);
le(Ka, Vv);
const RB = Ka;
var Bl = Ka;
const Lv = {
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
var Gc = (e, n, o) => new Promise((t, r) => {
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
const { name: dC, n: fC, classes: pC } = ne("card"), vC = 500, mC = ["src", "alt"];
function hC(e, n) {
  const o = _("var-icon"), t = _("var-button"), r = Ye("ripple");
  return Ve((h(), S(
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
      style: G({
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
          style: G({
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
          F(e.$slots, "image", {}, () => [
            e.src ? (h(), S("img", {
              key: 0,
              class: p(e.n("image")),
              style: G({
                objectFit: e.fit,
                height: e.toSizeUnit(e.imageHeight),
                width: e.toSizeUnit(e.imageWidth)
              }),
              src: e.src,
              alt: e.alt
            }, null, 14, mC)) : X("v-if", !0)
          ]),
          R(
            "div",
            {
              class: p(e.n("container"))
            },
            [
              F(e.$slots, "title", {
                slotClass: e.n("title")
              }, () => [
                e.title ? (h(), S(
                  "div",
                  {
                    key: 0,
                    class: p(e.n("title"))
                  },
                  se(e.title),
                  3
                  /* TEXT, CLASS */
                )) : X("v-if", !0)
              ]),
              F(e.$slots, "subtitle", {
                slotClass: e.n("subtitle")
              }, () => [
                e.subtitle ? (h(), S(
                  "div",
                  {
                    key: 0,
                    class: p(e.n("subtitle"))
                  },
                  se(e.subtitle),
                  3
                  /* TEXT, CLASS */
                )) : X("v-if", !0)
              ]),
              e.$slots.default ? (h(), S(
                "div",
                {
                  key: 0,
                  class: p(e.n("content"))
                },
                [
                  F(e.$slots, "default")
                ],
                2
                /* CLASS */
              )) : X("v-if", !0),
              F(e.$slots, "description", {
                slotClass: e.n("description")
              }, () => [
                e.description ? (h(), S(
                  "div",
                  {
                    key: 0,
                    class: p(e.n("description"))
                  },
                  se(e.description),
                  3
                  /* TEXT, CLASS */
                )) : X("v-if", !0)
              ]),
              e.$slots.extra ? (h(), S(
                "div",
                {
                  key: 1,
                  class: p(e.n("footer"))
                },
                [
                  F(e.$slots, "extra")
                ],
                2
                /* CLASS */
              )) : X("v-if", !0),
              e.$slots["floating-content"] && !e.isRow ? (h(), S(
                "div",
                {
                  key: 2,
                  class: p(e.n("floating-content")),
                  style: G({
                    height: e.contentHeight,
                    opacity: e.opacity,
                    transition: `opacity ${e.floatingDuration * 2}ms`
                  })
                },
                [
                  F(e.$slots, "floating-content")
                ],
                6
                /* CLASS, STYLE */
              )) : X("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          e.showFloatingButtons ? (h(), S(
            "div",
            {
              key: 0,
              class: p(e.classes(e.n("floating-buttons"), e.n("$--box"))),
              style: G({
                zIndex: e.zIndex,
                opacity: e.opacity,
                transition: `opacity ${e.floatingDuration * 2}ms`
              })
            },
            [
              F(e.$slots, "close-button", {}, () => [
                q(t, {
                  "var-card-cover": "",
                  class: p(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
                  onClick: Xn(e.close, ["stop"])
                }, {
                  default: ce(() => [
                    q(o, {
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
      R(
        "div",
        {
          class: p(e.n("holder")),
          style: G({
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
const Fv = ee({
  name: dC,
  directives: { Ripple: tn },
  components: {
    VarIcon: Ge,
    VarButton: Bn
  },
  props: Lv,
  setup(e) {
    const n = k(null), o = k(null), t = k("auto"), r = k("auto"), a = k("100%"), i = k("100%"), l = k("auto"), s = k("auto"), u = k(void 0), c = k("hidden"), d = k("0px"), f = k("0"), v = I(() => e.layout === "row"), m = k(!1), g = k(!1), { zIndex: w } = sr(() => e.floating, 1);
    let $ = "auto", y = "auto", b = null;
    const P = k(null);
    lr(
      () => e.floating,
      () => !v.value
    ), pe(
      () => e.floating,
      (N) => {
        v.value || He(() => {
          N ? T() : O();
        });
      },
      { immediate: !0 }
    );
    function T() {
      return Gc(this, null, function* () {
        clearTimeout(P.value), clearTimeout(b), P.value = null, P.value = setTimeout(
          () => Gc(this, null, function* () {
            const { width: N, height: E, left: z, top: M } = nn(n.value);
            t.value = ze(N), r.value = ze(E), a.value = t.value, i.value = r.value, l.value = ze(M), s.value = ze(z), u.value = "fixed", $ = l.value, y = s.value, m.value = !0, yield bn(), l.value = "0", s.value = "0", a.value = "100vw", i.value = "100vh", d.value = "auto", f.value = "1", c.value = "auto", g.value = !0;
          }),
          e.ripple ? vC : 0
        );
      });
    }
    function O() {
      clearTimeout(b), clearTimeout(P.value), P.value = null, a.value = t.value, i.value = r.value, l.value = $, s.value = y, d.value = "0px", f.value = "0", m.value = !1, b = setTimeout(() => {
        t.value = "auto", r.value = "auto", a.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", $ = "auto", y = "auto", c.value = "hidden", u.value = void 0, g.value = !1;
      }, e.floatingDuration);
    }
    function B() {
      C(e["onUpdate:floating"], !1);
    }
    function A(N) {
      C(e.onClick, N);
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
      zIndex: w,
      isRow: v,
      showFloatingButtons: m,
      floated: g,
      n: fC,
      classes: pC,
      toSizeUnit: ze,
      close: B,
      formatElevation: dn,
      handleClick: A
    };
  }
});
Fv.render = hC;
var qa = Fv;
ae(qa);
le(qa, Lv);
const LB = qa;
var Il = qa;
const Uv = {
  title: String,
  icon: De(on, "name"),
  namespace: De(on, "namespace"),
  description: String,
  border: Boolean,
  borderOffset: [Number, String],
  iconClass: String,
  titleClass: String,
  descriptionClass: String,
  extraClass: String,
  ripple: Boolean,
  onClick: L()
}, { name: gC, n: bC, classes: yC } = ne("cell");
function wC(e, n) {
  const o = _("var-icon"), t = Ye("ripple");
  return Ve((h(), S(
    "div",
    {
      class: p(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: G(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
    },
    [
      F(e.$slots, "icon", {}, () => [
        e.icon ? (h(), S(
          "div",
          {
            key: 0,
            class: p(e.classes(e.n("icon"), e.iconClass))
          },
          [
            q(o, {
              name: e.icon,
              namespace: e.namespace
            }, null, 8, ["name", "namespace"])
          ],
          2
          /* CLASS */
        )) : X("v-if", !0)
      ]),
      R(
        "div",
        {
          class: p(e.n("content"))
        },
        [
          F(e.$slots, "default", {}, () => [
            e.title ? (h(), S(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("title"), e.titleClass))
              },
              se(e.title),
              3
              /* TEXT, CLASS */
            )) : X("v-if", !0)
          ]),
          F(e.$slots, "description", {}, () => [
            e.description ? (h(), S(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("description"), e.descriptionClass))
              },
              se(e.description),
              3
              /* TEXT, CLASS */
            )) : X("v-if", !0)
          ])
        ],
        2
        /* CLASS */
      ),
      e.$slots.extra ? (h(), S(
        "div",
        {
          key: 0,
          class: p(e.classes(e.n("extra"), e.extraClass))
        },
        [
          F(e.$slots, "extra")
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
const Hv = ee({
  name: gC,
  components: { VarIcon: Ge },
  directives: { Ripple: tn },
  props: Uv,
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
      n: bC,
      classes: yC,
      toSizeUnit: ze,
      handleClick: o
    };
  }
});
Hv.render = wC;
var Xa = Hv;
ae(Xa);
le(Xa, Uv);
const FB = Xa;
var Dl = Xa;
const jv = {
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
}, { name: kC, n: $C, classes: CC } = ne("checkbox-group");
function SC(e, n) {
  const o = _("maybe-v-node"), t = _("var-checkbox"), r = _("var-form-details");
  return h(), S(
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
          e.options.length ? (h(!0), S(
            Ae,
            { key: 0 },
            qe(e.options, (a) => (h(), we(t, {
              key: a[e.valueKey],
              "checked-value": a[e.valueKey],
              disabled: a.disabled
            }, {
              default: ce(({ checked: i }) => [
                q(o, {
                  is: e.isFunction(a[e.labelKey]) ? a[e.labelKey](a, i) : a[e.labelKey]
                }, null, 8, ["is"])
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["checked-value", "disabled"]))),
            128
            /* KEYED_FRAGMENT */
          )) : X("v-if", !0),
          F(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      q(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Yv = ee({
  name: kC,
  components: { VarFormDetails: En, VarCheckbox: pt, MaybeVNode: ir },
  props: jv,
  setup(e) {
    const n = I(() => e.max), o = I(() => e.modelValue.length), { length: t, checkboxes: r, bindCheckboxes: a } = Nw(), { bindForm: i } = Hn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: c
    } = Un(), d = I(() => l.value), f = {
      max: n,
      checkedCount: o,
      onChecked: g,
      onUnchecked: w,
      validate: T,
      resetValidation: c,
      reset: P,
      errorMessage: d
    };
    pe(() => e.modelValue, $, { deep: !0 }), pe(() => t.value, $), a(f), C(i, f);
    function v(O) {
      He(() => {
        const { validateTrigger: B, rules: A, modelValue: N } = e;
        s(B, O, A, N);
      });
    }
    function m(O) {
      C(e["onUpdate:modelValue"], O), C(e.onChange, O), v("onChange");
    }
    function g(O) {
      const { modelValue: B } = e;
      B.includes(O) || m([...B, O]);
    }
    function w(O) {
      const { modelValue: B } = e;
      B.includes(O) && m(B.filter((A) => A !== O));
    }
    function $() {
      r.forEach(({ sync: O }) => O(e.modelValue));
    }
    function y() {
      const O = r.map(({ checkedValue: A }) => A.value), B = cl(O);
      return C(e["onUpdate:modelValue"], B), B;
    }
    function b() {
      const O = r.filter(({ checked: A }) => !A.value).map(({ checkedValue: A }) => A.value), B = cl(O);
      return C(e["onUpdate:modelValue"], B), B;
    }
    function P() {
      C(e["onUpdate:modelValue"], []), c();
    }
    function T() {
      return u(e.rules, e.modelValue);
    }
    return {
      errorMessage: l,
      n: $C,
      classes: CC,
      checkAll: y,
      inverseAll: b,
      reset: P,
      validate: T,
      resetValidation: c,
      isFunction: mn
    };
  }
});
Yv.render = SC;
var Ga = Yv;
ae(Ga);
le(Ga, jv);
const UB = Ga;
var Al = Ga;
const Wv = {
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
  iconName: De(on, "name"),
  namespace: De(on, "namespace"),
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
}, { name: PC, n: wo, classes: OC } = ne("chip");
function zC(e, n) {
  const o = _("var-icon");
  return h(), we(_e, {
    name: e.n("$-fade")
  }, {
    default: ce(() => [
      R(
        "span",
        je({
          class: e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 1), ...e.contentClass),
          style: e.chipStyle
        }, e.$attrs),
        [
          F(e.$slots, "left"),
          R(
            "span",
            {
              class: p(e.n(`text-${e.size}`))
            },
            [
              F(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          F(e.$slots, "right"),
          e.closeable ? (h(), S(
            "span",
            {
              key: 0,
              class: p(e.n("--close")),
              onClick: n[0] || (n[0] = (...t) => e.handleClose && e.handleClose(...t))
            },
            [
              q(o, {
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
const Kv = ee({
  name: PC,
  components: {
    VarIcon: Ge
  },
  inheritAttrs: !1,
  props: Wv,
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
      const { size: r, block: a, type: i, plain: l, round: s } = e, u = wo(a ? "$--flex" : "$--inline-flex"), c = l ? `${wo("plain")} ${wo(`plain-${i}`)}` : wo(`--${i}`), d = s ? wo("--round") : null;
      return [wo(`--${r}`), u, c, d];
    });
    function t(r) {
      C(e.onClose, r);
    }
    return {
      chipStyle: n,
      contentClass: o,
      n: wo,
      classes: OC,
      formatElevation: dn,
      handleClose: t
    };
  }
});
Kv.render = zC;
var Za = Kv;
ae(Za);
le(Za, Wv);
const HB = Za;
var na = Za;
const qv = {
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
}, Ml = Symbol("HIGHLIGHTER_PROVIDER_KEY");
function TC(e) {
  Ys(Ml, e);
}
function EC() {
  return nu(Ml) ? js(Ml) : { highlighter: null, theme: null };
}
var BC = (e, n, o) => new Promise((t, r) => {
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
const { name: IC, n: DC, classes: AC } = ne("code"), MC = ["innerHTML"];
function NC(e, n) {
  return h(), S("div", {
    class: p(e.classes(e.n(), [e.wordWrap, e.n("--word-wrap")])),
    innerHTML: e.highlightedCode
  }, null, 10, MC);
}
const Xv = ee({
  name: IC,
  props: qv,
  setup(e) {
    const { highlighter: n, theme: o } = EC(), t = k(""), r = I(() => {
      var a;
      return (a = e.theme) != null ? a : o == null ? void 0 : o.value;
    });
    return n && pe(
      () => [n.value, e.code, e.language, r.value, e.trim],
      (a) => BC(this, [a], function* ([i, l, s = "", u = "", c]) {
        i && (t.value = yield i.codeToHtml(c ? l.trim() : l, { lang: s, theme: u }));
      }),
      { immediate: !0 }
    ), {
      n: DC,
      classes: AC,
      highlightedCode: t
    };
  }
});
Xv.render = NC;
var Ja = Xv;
ae(Ja);
le(Ja, qv);
const jB = Ja;
var Nl = Ja;
const Gv = {
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
}, Zv = Symbol("ROW_BIND_COL_KEY");
function VC() {
  const { length: e, childProviders: n, bindChildren: o } = kn(Zv);
  return {
    length: e,
    cols: n,
    bindCols: o
  };
}
function RC() {
  const { index: e, bindParent: n, parentProvider: o } = wn(Zv);
  return {
    index: e,
    row: o,
    bindRow: n
  };
}
const { name: LC, n: wr, classes: FC } = ne("col");
function UC(e, n) {
  return h(), S(
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
      style: G({
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
      F(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Jv = ee({
  name: LC,
  props: Gv,
  setup(e) {
    const n = I(() => j(e.span)), o = I(() => j(e.offset)), t = I(() => {
      var s;
      const [u = 0, c = 0] = (s = r == null ? void 0 : r.average.value) != null ? s : [];
      return { left: c, right: c, top: u, bottom: u };
    }), { row: r, bindRow: a } = RC();
    C(a, null);
    function i(s, u) {
      const c = [];
      if (u == null)
        return c;
      if (Rn(u)) {
        const { offset: d, span: f } = u;
        return Number(f) >= 0 && c.push(wr(`--span-${s}-${f}`)), d && c.push(wr(`--offset-${s}-${d}`)), c;
      }
      return Number(u) >= 0 && c.push(wr(`--span-${s}-${u}`)), c;
    }
    function l(s) {
      C(e.onClick, s);
    }
    return {
      span: n,
      offset: o,
      padding: t,
      n: wr,
      classes: FC,
      toNumber: j,
      toSizeUnit: ze,
      getSize: i,
      handleClick: l,
      padStartFlex: Qr
    };
  }
});
Jv.render = UC;
var Qa = Jv;
ae(Qa);
le(Qa, Gv);
const YB = Qa;
var Vl = Qa;
const Qv = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function HC() {
  const { childProviders: e, length: n, bindChildren: o } = kn(
    Qv
  );
  return {
    length: n,
    collapseItems: e,
    bindCollapseItems: o
  };
}
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
  onChange: L(),
  "onUpdate:modelValue": L()
}, { name: jC, n: YC } = ne("collapse");
function WC(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.n())
    },
    [
      F(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const xv = ee({
  name: jC,
  props: _v,
  setup(e) {
    const n = I(() => e.offset), o = I(() => e.divider), t = I(() => e.elevation), r = I(() => e.accordion), a = I(() => po(e.modelValue)), { length: i, collapseItems: l, bindCollapseItems: s } = HC(), u = {
      offset: n,
      divider: o,
      elevation: t,
      accordion: r,
      updateItem: c
    };
    pe(
      () => i.value,
      () => He().then(v)
    ), pe(
      () => e.modelValue,
      () => He().then(v)
    ), s(u);
    function c(g, w) {
      if (e.accordion) {
        d(w ? g : void 0);
        return;
      }
      const $ = w ? [...a.value, g] : a.value.filter((y) => y !== g);
      d($);
    }
    function d(g) {
      C(e["onUpdate:modelValue"], g), C(e.onChange, g);
    }
    function f() {
      if (e.accordion) {
        const [$] = a.value;
        if ($ == null)
          return;
        const y = l.find(({ name: b }) => $ === b.value);
        return y ?? l.find(({ index: b, name: P }) => P.value == null && $ === b.value);
      }
      const g = l.filter(
        ({ name: $ }) => $.value != null && a.value.includes($.value)
      ), w = l.filter(
        ({ index: $, name: y }) => y.value == null && a.value.includes($.value)
      );
      return [...g, ...w];
    }
    function v() {
      const g = Vf(po(f()));
      l.forEach((w) => {
        w.init(g.includes(w));
      });
    }
    return {
      divider: o,
      n: YC,
      toggleAll: (g) => {
        if (e.accordion) return;
        const $ = l.filter((y) => {
          var b;
          const P = (b = y.name.value) != null ? b : y.index.value, T = a.value.includes(P);
          return g.skipDisabled && y.disabled.value ? T : g.expand === "inverse" ? !T : g.expand;
        }).map((y) => {
          var b;
          return (b = y.name.value) != null ? b : y.index.value;
        });
        d($);
      }
    };
  }
});
xv.render = WC;
var _a = xv;
ae(_a);
le(_a, _v);
const WB = _a;
var Rl = _a;
function KC() {
  const { parentProvider: e, index: n, bindParent: o } = wn(
    Qv
  );
  return Ln(!!o, "Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: o
  };
}
const em = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
};
var Zc = (e, n, o) => new Promise((t, r) => {
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
  pe(
    t,
    (u) => {
      He(() => {
        u ? a() : i();
      });
    },
    { immediate: !0 }
  );
  function a() {
    return Zc(this, null, function* () {
      if (!n.value || (n.value.style.height = "", o.value = !0, yield vo(), !n.value))
        return;
      const { offsetHeight: u } = n.value;
      n.value.style.height = "0px", yield vo(), n.value && (n.value.style.height = u + "px", r && (yield bn(), r && l()));
    });
  }
  const i = () => Zc(this, null, function* () {
    if (!n.value)
      return;
    const { offsetHeight: u } = n.value;
    n.value.style.height = u + "px", yield vo(), n.value.style.height = "0px";
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
const { name: qC, n: XC, classes: GC } = ne("collapse-item"), ZC = ["aria-expanded", "aria-disabled", "role"];
function JC(e, n) {
  const o = _("var-icon");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: G(`--collapse-divider-top: ${e.divider ? "var(--collapse-border-top)" : "none"}`)
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
        e.$slots.title || e.title ? (h(), S(
          "div",
          {
            key: 0,
            class: p(e.n("header-title"))
          },
          [
            F(e.$slots, "title", {}, () => [
              Ie(
                se(e.title),
                1
                /* TEXT */
              )
            ])
          ],
          2
          /* CLASS */
        )) : X("v-if", !0),
        R(
          "div",
          {
            class: p(e.n("header-icon"))
          },
          [
            F(e.$slots, "icon", {}, () => [
              q(o, {
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
      ], 10, ZC),
      Ve(R(
        "div",
        {
          class: p(e.n("content")),
          ref: "contentEl",
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
              F(e.$slots, "default")
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
const om = ee({
  name: qC,
  components: {
    VarIcon: Ge
  },
  props: em,
  setup(e) {
    const n = k(!1), o = k(!1), t = k(null), r = I(() => e.name), a = I(() => e.disabled), { index: i, collapse: l, bindCollapse: s } = KC(), { offset: u, divider: c, elevation: d, accordion: f, updateItem: v } = l;
    s({
      index: i,
      name: r,
      disabled: a,
      init: $
    });
    const { handleTransitionEnd: g, handleTransitionStart: w } = nm({
      contentEl: t,
      showContent: o,
      expand: n
    });
    function $(b) {
      n.value = b;
    }
    function y() {
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
      n: XC,
      classes: GC,
      toggle: y,
      formatElevation: dn,
      handleTransitionEnd: g,
      handleTransitionStart: w
    };
  }
});
om.render = JC;
var xa = om;
ae(xa);
le(xa, em);
const KB = xa;
var Ll = xa;
const tm = {
  expand: Boolean
}, { name: QC, n: _C } = ne("collapse-transition");
function xC(e, n) {
  return Ve((h(), S(
    "div",
    {
      class: p(e.n("content")),
      ref: "contentEl",
      onTransitionend: n[0] || (n[0] = (...o) => e.handleTransitionEnd && e.handleTransitionEnd(...o)),
      onTransitionstart: n[1] || (n[1] = (...o) => e.handleTransitionStart && e.handleTransitionStart(...o))
    },
    [
      F(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  )), [
    [xn, e.showContent]
  ]);
}
const rm = ee({
  name: QC,
  props: tm,
  setup(e) {
    const n = k(!1), o = k(null), t = I(() => e.expand), { handleTransitionEnd: r, handleTransitionStart: a } = nm({
      contentEl: o,
      showContent: n,
      expand: t
    });
    return {
      showContent: n,
      contentEl: o,
      n: _C,
      handleTransitionEnd: r,
      handleTransitionStart: a
    };
  }
});
rm.render = xC;
var ei = rm;
ae(ei);
le(ei, tm);
const qB = ei;
var Fl = ei;
const am = {
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
}, { name: eS, n: nS } = ne("count-to");
function oS(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.n())
    },
    [
      F(e.$slots, "default", { value: e.value }, () => [
        Ie(
          se(e.value),
          1
          /* TEXT */
        )
      ])
    ],
    2
    /* CLASS */
  );
}
const im = ee({
  name: eS,
  props: am,
  setup(e) {
    const {
      value: n,
      reset: o,
      // expose
      start: t,
      // expose
      pause: r
    } = m0({
      from: () => j(e.from),
      to: () => j(e.to),
      duration: () => j(e.duration),
      timingFunction: e.timingFunction,
      onFinished() {
        C(e.onEnd);
      }
    }), a = I(() => dl(n.value, j(e.precision)));
    pe(() => [e.from, e.to, e.duration], i), Lo(i);
    function i() {
      o(), e.autoStart && t();
    }
    return {
      value: a,
      n: nS,
      start: t,
      pause: r,
      reset: i,
      toNumber: j,
      floor: dl
    };
  }
});
im.render = oS;
var ni = im;
ae(ni);
le(ni, am);
const XB = ni;
var Ul = ni;
const lm = {
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
}, { name: tS, n: rS } = ne("countdown"), Hl = 1e3, jl = 60 * Hl, Yl = 60 * jl, Jc = 24 * Yl;
function aS(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.n())
    },
    [
      F(e.$slots, "default", Eo(er(e.timeData)), () => [
        Ie(
          se(e.showTime),
          1
          /* TEXT */
        )
      ])
    ],
    2
    /* CLASS */
  );
}
const sm = ee({
  name: tS,
  props: lm,
  setup(e) {
    const n = k(""), o = k({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    });
    let t = 0, r = !1, a = 0, i = 0, l;
    pe(
      () => e.time,
      () => {
        v(), e.autoStart && d();
      }
    ), Lo(() => {
      c(), e.autoStart && d();
    }), Fo(() => {
      l != null && (r = l, r === !0 && d(!0));
    }), wt(() => {
      l = r, f();
    }), Qt(f);
    function s(m, g) {
      const w = Object.values(g), $ = ["DD", "HH", "mm", "ss"], y = [24, 60, 60, 1e3];
      if ($.forEach((b, P) => {
        m.includes(b) ? m = m.replace(b, Qo(`${w[P]}`, 2, "0")) : w[P + 1] += w[P] * y[P];
      }), m.includes("S")) {
        const b = Qo(`${w[w.length - 1]}`, 3, "0");
        m.includes("SSS") ? m = m.replace("SSS", b) : m.includes("SS") ? m = m.replace("SS", b.slice(0, 2)) : m = m.replace("S", b.slice(0, 1));
      }
      return m;
    }
    function u(m) {
      const g = Math.floor(m / Jc), w = Math.floor(m % Jc / Yl), $ = Math.floor(m % Yl / jl), y = Math.floor(m % jl / Hl), b = Math.floor(m % Hl), P = {
        days: g,
        hours: w,
        minutes: $,
        seconds: y,
        milliseconds: b
      };
      o.value = P, C(e.onChange, o.value), n.value = s(e.format, P);
    }
    function c() {
      const { time: m, onEnd: g } = e, w = performance.now();
      if (t || (t = w + j(m)), i = t - w, i < 0 && (i = 0), u(i), i === 0) {
        C(g);
        return;
      }
      r && (a = Ao(c));
    }
    function d(m = !1) {
      r && !m || (r = !0, t = performance.now() + (i || j(e.time)), c());
    }
    function f() {
      r = !1, ct(a);
    }
    function v() {
      t = 0, r = !1, ct(a), c();
    }
    return {
      showTime: n,
      timeData: o,
      n: rS,
      start: d,
      pause: f,
      reset: v
    };
  }
});
sm.render = aS;
var oi = sm;
ae(oi);
le(oi, lm);
const GB = oi;
var Wl = oi;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var tt = 9e15, jo = 1e9, Kl = "0123456789abcdef", oa = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", ta = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ql = {
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
  minE: -tt,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: tt,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, um, fo, Ee = !0, ti = "[DecimalError] ", Ro = ti + "Invalid argument: ", cm = ti + "Precision limit exceeded", dm = ti + "crypto unavailable", fm = "[object Decimal]", Sn = Math.floor, vn = Math.pow, iS = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, lS = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, sS = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, pm = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, _n = 1e7, Pe = 7, uS = 9007199254740991, cS = oa.length - 1, Xl = ta.length - 1, x = { toStringTag: fm };
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
  return o.d ? o.d[0] ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(o.e, o.sd()) + Pe, t.rounding = 1, o = dS(t, bm(t, o)), t.precision = e, t.rounding = n, Ce(fo == 2 || fo == 3 ? o.neg() : o, e, n, !0)) : new t(1) : new t(NaN);
};
x.cubeRoot = x.cbrt = function() {
  var e, n, o, t, r, a, i, l, s, u, c = this, d = c.constructor;
  if (!c.isFinite() || c.isZero()) return new d(c);
  for (Ee = !1, a = c.s * vn(c.s * c, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (o = Cn(c.d), e = c.e, (a = (e - o.length + 1) % 3) && (o += a == 1 || a == -2 ? "0" : "00"), a = vn(o, 1 / 3), e = Sn((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? o = "5e" + e : (o = a.toExponential(), o = o.slice(0, o.indexOf("e") + 1) + e), t = new d(o), t.s = c.s) : t = new d(a.toString()), i = (e = d.precision) + 3; ; )
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
  return Ee = !0, Ce(t, e, d.rounding, n);
};
x.decimalPlaces = x.dp = function() {
  var e, n = this.d, o = NaN;
  if (n) {
    if (e = n.length - 1, o = (e - Sn(this.e / Pe)) * Pe, e = n[e], e) for (; e % 10 == 0; e /= 10) o--;
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
  o = i.precision, t = i.rounding, i.precision = o + Math.max(a.e, a.sd()) + 4, i.rounding = 1, r = a.d.length, r < 32 ? (e = Math.ceil(r / 3), n = (1 / ai(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), a = gt(i, 1, a.times(n), new i(1), !0);
  for (var s, u = e, c = new i(8); u--; )
    s = a.times(a), a = l.minus(s.times(c.minus(s.times(c))));
  return Ce(a, i.precision = o, i.rounding = t, !0);
};
x.hyperbolicSine = x.sinh = function() {
  var e, n, o, t, r = this, a = r.constructor;
  if (!r.isFinite() || r.isZero()) return new a(r);
  if (n = a.precision, o = a.rounding, a.precision = n + Math.max(r.e, r.sd()) + 4, a.rounding = 1, t = r.d.length, t < 3)
    r = gt(a, 2, r, r, !0);
  else {
    e = 1.4 * Math.sqrt(t), e = e > 16 ? 16 : e | 0, r = r.times(1 / ai(5, e)), r = gt(a, 2, r, r, !0);
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
  return t !== -1 ? t === 0 ? n.isNeg() ? Qn(o, r, a) : new o(0) : new o(NaN) : n.isZero() ? Qn(o, r + 4, a).times(0.5) : (o.precision = r + 6, o.rounding = 1, n = n.asin(), e = Qn(o, r + 4, a).times(0.5), o.precision = r, o.rounding = a, e.minus(n));
};
x.inverseHyperbolicCosine = x.acosh = function() {
  var e, n, o = this, t = o.constructor;
  return o.lte(1) ? new t(o.eq(1) ? 0 : NaN) : o.isFinite() ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(Math.abs(o.e), o.sd()) + 4, t.rounding = 1, Ee = !1, o = o.times(o).minus(1).sqrt().plus(o), Ee = !0, t.precision = e, t.rounding = n, o.ln()) : new t(o);
};
x.inverseHyperbolicSine = x.asinh = function() {
  var e, n, o = this, t = o.constructor;
  return !o.isFinite() || o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + 2 * Math.max(Math.abs(o.e), o.sd()) + 6, t.rounding = 1, Ee = !1, o = o.times(o).plus(1).sqrt().plus(o), Ee = !0, t.precision = e, t.rounding = n, o.ln());
};
x.inverseHyperbolicTangent = x.atanh = function() {
  var e, n, o, t, r = this, a = r.constructor;
  return r.isFinite() ? r.e >= 0 ? new a(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN) : (e = a.precision, n = a.rounding, t = r.sd(), Math.max(t, e) < 2 * -r.e - 1 ? Ce(new a(r), e, n, !0) : (a.precision = o = t - r.e, r = Je(r.plus(1), new a(1).minus(r), o + e, 1), a.precision = e + 4, a.rounding = 1, r = r.ln(), a.precision = e, a.rounding = n, r.times(0.5))) : new a(NaN);
};
x.inverseSine = x.asin = function() {
  var e, n, o, t, r = this, a = r.constructor;
  return r.isZero() ? new a(r) : (n = r.abs().cmp(1), o = a.precision, t = a.rounding, n !== -1 ? n === 0 ? (e = Qn(a, o + 4, t).times(0.5), e.s = r.s, e) : new a(NaN) : (a.precision = o + 6, a.rounding = 1, r = r.div(new a(1).minus(r.times(r)).sqrt().plus(1)).atan(), a.precision = o, a.rounding = t, r.times(2)));
};
x.inverseTangent = x.atan = function() {
  var e, n, o, t, r, a, i, l, s, u = this, c = u.constructor, d = c.precision, f = c.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new c(u);
    if (u.abs().eq(1) && d + 4 <= Xl)
      return i = Qn(c, d + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s) return new c(NaN);
    if (d + 4 <= Xl)
      return i = Qn(c, d + 4, f).times(0.5), i.s = u.s, i;
  }
  for (c.precision = l = d + 10, c.rounding = 1, o = Math.min(28, l / Pe + 2 | 0), e = o; e; --e) u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (Ee = !1, n = Math.ceil(l / Pe), t = 1, s = u.times(u), i = new c(u), r = u; e !== -1; )
    if (r = r.times(s), a = i.minus(r.div(t += 2)), r = r.times(s), i = a.plus(r.div(t += 2)), i.d[n] !== void 0) for (e = n; i.d[e] === a.d[e] && e--; ) ;
  return o && (i = i.times(2 << o - 1)), Ee = !0, Ce(i, c.precision = d, c.rounding = f, !0);
};
x.isFinite = function() {
  return !!this.d;
};
x.isInteger = x.isInt = function() {
  return !!this.d && Sn(this.e / Pe) > this.d.length - 2;
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
  if (Ee = !1, l = d + v, i = zo(u, l), t = n ? ra(c, l + 10) : zo(e, l), s = Je(i, t, l, 1), Kt(s.d, r = d, f))
    do
      if (l += 10, i = zo(u, l), t = n ? ra(c, l + 10) : zo(e, l), s = Je(i, t, l, 1), !a) {
        +Cn(s.d).slice(r + 1, r + 15) + 1 == 1e14 && (s = Ce(s, d + 1, 0));
        break;
      }
    while (Kt(s.d, r += 10, f));
  return Ee = !0, Ce(s, d, f);
};
x.minus = x.sub = function(e) {
  var n, o, t, r, a, i, l, s, u, c, d, f, v = this, m = v.constructor;
  if (e = new m(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new m(NaN) : v.d ? e.s = -e.s : e = new m(e.d || v.s !== e.s ? v : NaN), e;
  if (v.s != e.s)
    return e.s = -e.s, v.plus(e);
  if (u = v.d, f = e.d, l = m.precision, s = m.rounding, !u[0] || !f[0]) {
    if (f[0]) e.s = -e.s;
    else if (u[0]) e = new m(v);
    else return new m(s === 3 ? -0 : 0);
    return Ee ? Ce(e, l, s) : e;
  }
  if (o = Sn(e.e / Pe), c = Sn(v.e / Pe), u = u.slice(), a = c - o, a) {
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
      for (r = t; r && u[--r] === 0; ) u[r] = _n - 1;
      --u[r], u[t] += _n;
    }
    u[t] -= f[t];
  }
  for (; u[--i] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --o;
  return u[0] ? (e.d = u, e.e = ri(u, o), Ee ? Ce(e, l, s) : e) : new m(s === 3 ? -0 : 0);
};
x.modulo = x.mod = function(e) {
  var n, o = this, t = o.constructor;
  return e = new t(e), !o.d || !e.s || e.d && !e.d[0] ? new t(NaN) : !e.d || o.d && !o.d[0] ? Ce(new t(o), t.precision, t.rounding) : (Ee = !1, t.modulo == 9 ? (n = Je(o, e.abs(), 0, 3, 1), n.s *= e.s) : n = Je(o, e, 0, t.modulo, 1), n = n.times(e), Ee = !0, o.minus(n));
};
x.naturalExponential = x.exp = function() {
  return Gl(this);
};
x.naturalLogarithm = x.ln = function() {
  return zo(this);
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
    return c[0] || (e = new f(d)), Ee ? Ce(e, l, s) : e;
  if (a = Sn(d.e / Pe), t = Sn(e.e / Pe), u = u.slice(), r = a - t, r) {
    for (r < 0 ? (o = u, r = -r, i = c.length) : (o = c, t = a, i = u.length), a = Math.ceil(l / Pe), i = a > i ? a + 1 : i + 1, r > i && (r = i, o.length = 1), o.reverse(); r--; ) o.push(0);
    o.reverse();
  }
  for (i = u.length, r = c.length, i - r < 0 && (r = i, o = c, c = u, u = o), n = 0; r; )
    n = (u[--r] = u[r] + c[r] + n) / _n | 0, u[r] %= _n;
  for (n && (u.unshift(n), ++t), i = u.length; u[--i] == 0; ) u.pop();
  return e.d = u, e.e = ri(u, t), Ee ? Ce(e, l, s) : e;
};
x.precision = x.sd = function(e) {
  var n, o = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Ro + e);
  return o.d ? (n = vm(o.d), e && o.e + 1 > n && (n = o.e + 1)) : n = NaN, n;
};
x.round = function() {
  var e = this, n = e.constructor;
  return Ce(new n(e), e.e + 1, n.rounding);
};
x.sine = x.sin = function() {
  var e, n, o = this, t = o.constructor;
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + Math.max(o.e, o.sd()) + Pe, t.rounding = 1, o = pS(t, bm(t, o)), t.precision = e, t.rounding = n, Ce(fo > 2 ? o.neg() : o, e, n, !0)) : new t(NaN);
};
x.squareRoot = x.sqrt = function() {
  var e, n, o, t, r, a, i = this, l = i.d, s = i.e, u = i.s, c = i.constructor;
  if (u !== 1 || !l || !l[0])
    return new c(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (Ee = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = Cn(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Sn((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), t = new c(n)) : t = new c(u.toString()), o = (s = c.precision) + 3; ; )
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
  return Ee = !0, Ce(t, s, c.rounding, e);
};
x.tangent = x.tan = function() {
  var e, n, o = this, t = o.constructor;
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + 10, t.rounding = 1, o = o.sin(), o.s = 1, o = Je(o, new t(1).minus(o.times(o)).sqrt(), e + 10, 0), t.precision = e, t.rounding = n, Ce(fo == 2 || fo == 4 ? o.neg() : o, e, n, !0)) : new t(NaN);
};
x.times = x.mul = function(e) {
  var n, o, t, r, a, i, l, s, u, c = this, d = c.constructor, f = c.d, v = (e = new d(e)).d;
  if (e.s *= c.s, !f || !f[0] || !v || !v[0])
    return new d(!e.s || f && !f[0] && !v || v && !v[0] && !f ? NaN : !f || !v ? e.s / 0 : e.s * 0);
  for (o = Sn(c.e / Pe) + Sn(e.e / Pe), s = f.length, u = v.length, s < u && (a = f, f = v, v = a, i = s, s = u, u = i), a = [], i = s + u, t = i; t--; ) a.push(0);
  for (t = u; --t >= 0; ) {
    for (n = 0, r = s + t; r > t; )
      l = a[r] + v[t] * f[r - t - 1] + n, a[r--] = l % _n | 0, n = l / _n | 0;
    a[r] = (a[r] + n) % _n | 0;
  }
  for (; !a[--i]; ) a.pop();
  return n ? ++o : a.shift(), e.d = a, e.e = ri(a, o), Ee ? Ce(e, d.precision, d.rounding) : e;
};
x.toBinary = function(e, n) {
  return Cu(this, 2, e, n);
};
x.toDecimalPlaces = x.toDP = function(e, n) {
  var o = this, t = o.constructor;
  return o = new t(o), e === void 0 ? o : (An(e, 0, jo), n === void 0 ? n = t.rounding : An(n, 0, 8), Ce(o, e + o.e + 1, n));
};
x.toExponential = function(e, n) {
  var o, t = this, r = t.constructor;
  return e === void 0 ? o = ro(t, !0) : (An(e, 0, jo), n === void 0 ? n = r.rounding : An(n, 0, 8), t = Ce(new r(t), e + 1, n), o = ro(t, !0, e + 1)), t.isNeg() && !t.isZero() ? "-" + o : o;
};
x.toFixed = function(e, n) {
  var o, t, r = this, a = r.constructor;
  return e === void 0 ? o = ro(r) : (An(e, 0, jo), n === void 0 ? n = a.rounding : An(n, 0, 8), t = Ce(new a(r), e + r.e + 1, n), o = ro(t, !1, e + t.e + 1)), r.isNeg() && !r.isZero() ? "-" + o : o;
};
x.toFraction = function(e) {
  var n, o, t, r, a, i, l, s, u, c, d, f, v = this, m = v.d, g = v.constructor;
  if (!m) return new g(v);
  if (u = o = new g(1), t = s = new g(0), n = new g(t), a = n.e = vm(m) - v.e - 1, i = a % Pe, n.d[0] = vn(10, i < 0 ? Pe + i : i), e == null)
    e = a > 0 ? n : u;
  else {
    if (l = new g(e), !l.isInt() || l.lt(u)) throw Error(Ro + l);
    e = l.gt(n) ? a > 0 ? n : u : l;
  }
  for (Ee = !1, l = new g(Cn(m)), c = g.precision, g.precision = a = m.length * Pe * 2; d = Je(l, n, 0, 1, 1), r = o.plus(d.times(t)), r.cmp(e) != 1; )
    o = t, t = r, r = u, u = s.plus(d.times(r)), s = r, r = n, n = l.minus(d.times(r)), l = r;
  return r = Je(e.minus(o), t, 0, 1, 1), s = s.plus(r.times(u)), o = o.plus(r.times(t)), s.s = u.s = v.s, f = Je(u, t, a, 1).minus(v).abs().cmp(Je(s, o, a, 1).minus(v).abs()) < 1 ? [u, t] : [s, o], g.precision = c, Ee = !0, f;
};
x.toHexadecimal = x.toHex = function(e, n) {
  return Cu(this, 16, e, n);
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
  return e.d[0] ? (Ee = !1, o = Je(o, e, 0, n, 1).times(e), Ee = !0, Ce(o)) : (e.s = o.s, o = e), o;
};
x.toNumber = function() {
  return +this;
};
x.toOctal = function(e, n) {
  return Cu(this, 8, e, n);
};
x.toPower = x.pow = function(e) {
  var n, o, t, r, a, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0]) return new s(vn(+l, u));
  if (l = new s(l), l.eq(1)) return l;
  if (t = s.precision, a = s.rounding, e.eq(1)) return Ce(l, t, a);
  if (n = Sn(e.e / Pe), n >= e.d.length - 1 && (o = u < 0 ? -u : u) <= uS)
    return r = mm(s, l, o, t), e.s < 0 ? new s(1).div(r) : Ce(r, t, a);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1) return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return o = vn(+l, u), n = o == 0 || !isFinite(o) ? Sn(u * (Math.log("0." + Cn(l.d)) / Math.LN10 + l.e + 1)) : new s(o + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (Ee = !1, s.rounding = l.s = 1, o = Math.min(12, (n + "").length), r = Gl(e.times(zo(l, t + o)), t), r.d && (r = Ce(r, t + 5, 1), Kt(r.d, t, a) && (n = t + 10, r = Ce(Gl(e.times(zo(l, n + o)), n), n + 5, 1), +Cn(r.d).slice(t + 1, t + 15) + 1 == 1e14 && (r = Ce(r, t + 1, 0)))), r.s = i, Ee = !0, s.rounding = a, Ce(r, t, a));
};
x.toPrecision = function(e, n) {
  var o, t = this, r = t.constructor;
  return e === void 0 ? o = ro(t, t.e <= r.toExpNeg || t.e >= r.toExpPos) : (An(e, 1, jo), n === void 0 ? n = r.rounding : An(n, 0, 8), t = Ce(new r(t), e, n), o = ro(t, e <= t.e || t.e <= r.toExpNeg, e)), t.isNeg() && !t.isZero() ? "-" + o : o;
};
x.toSignificantDigits = x.toSD = function(e, n) {
  var o = this, t = o.constructor;
  return e === void 0 ? (e = t.precision, n = t.rounding) : (An(e, 1, jo), n === void 0 ? n = t.rounding : An(n, 0, 8)), Ce(new t(o), e, n);
};
x.toString = function() {
  var e = this, n = e.constructor, o = ro(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + o : o;
};
x.truncated = x.trunc = function() {
  return Ce(new this.constructor(this), this.e + 1, 1);
};
x.valueOf = x.toJSON = function() {
  var e = this, n = e.constructor, o = ro(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + o : o;
};
function Cn(e) {
  var n, o, t, r = e.length - 1, a = "", i = e[0];
  if (r > 0) {
    for (a += i, n = 1; n < r; n++)
      t = e[n] + "", o = Pe - t.length, o && (a += ko(o)), a += t;
    i = e[n], t = i + "", o = Pe - t.length, o && (a += ko(o));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; ) i /= 10;
  return a + i;
}
function An(e, n, o) {
  if (e !== ~~e || e < n || e > o)
    throw Error(Ro + e);
}
function Kt(e, n, o, t) {
  var r, a, i, l;
  for (a = e[0]; a >= 10; a /= 10) --n;
  return --n < 0 ? (n += Pe, r = 0) : (r = Math.ceil((n + 1) / Pe), n %= Pe), a = vn(10, Pe - n), l = e[r] % a | 0, t == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = o < 4 && l == 99999 || o > 3 && l == 49999 || l == 5e4 || l == 0) : i = (o < 4 && l + 1 == a || o > 3 && l + 1 == a / 2) && (e[r + 1] / a / 100 | 0) == vn(10, n - 2) - 1 || (l == a / 2 || l == 0) && (e[r + 1] / a / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (t || o < 4) && l == 9999 || !t && o > 3 && l == 4999) : i = ((t || o < 4) && l + 1 == a || !t && o > 3 && l + 1 == a / 2) && (e[r + 1] / a / 1e3 | 0) == vn(10, n - 3) - 1, i;
}
function Mr(e, n, o) {
  for (var t, r = [0], a, i = 0, l = e.length; i < l; ) {
    for (a = r.length; a--; ) r[a] *= n;
    for (r[0] += Kl.indexOf(e.charAt(i++)), t = 0; t < r.length; t++)
      r[t] > o - 1 && (r[t + 1] === void 0 && (r[t + 1] = 0), r[t + 1] += r[t] / o | 0, r[t] %= o);
  }
  return r.reverse();
}
function dS(e, n) {
  var o, t, r;
  if (n.isZero()) return n;
  t = n.d.length, t < 32 ? (o = Math.ceil(t / 3), r = (1 / ai(4, o)).toString()) : (o = 16, r = "2.3283064365386962890625e-10"), e.precision += o, n = gt(e, 1, n.times(r), new e(1));
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
    var u, c, d, f, v, m, g, w, $, y, b, P, T, O, B, A, N, E, z, M, Y = t.constructor, H = t.s == r.s ? 1 : -1, U = t.d, D = r.d;
    if (!U || !U[0] || !D || !D[0])
      return new Y(
        // Return NaN if either NaN, or both Infinity or 0.
        !t.s || !r.s || (U ? D && U[0] == D[0] : !D) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          U && U[0] == 0 || !D ? H * 0 : H / 0
        )
      );
    for (s ? (v = 1, c = t.e - r.e) : (s = _n, v = Pe, c = Sn(t.e / v) - Sn(r.e / v)), z = D.length, N = U.length, $ = new Y(H), y = $.d = [], d = 0; D[d] == (U[d] || 0); d++) ;
    if (D[d] > (U[d] || 0) && c--, a == null ? (O = a = Y.precision, i = Y.rounding) : l ? O = a + (t.e - r.e) + 1 : O = a, O < 0)
      y.push(1), m = !0;
    else {
      if (O = O / v + 2 | 0, d = 0, z == 1) {
        for (f = 0, D = D[0], O++; (d < N || f) && O--; d++)
          B = f * s + (U[d] || 0), y[d] = B / D | 0, f = B % D | 0;
        m = f || d < N;
      } else {
        for (f = s / (D[0] + 1) | 0, f > 1 && (D = e(D, f, s), U = e(U, f, s), z = D.length, N = U.length), A = z, b = U.slice(0, z), P = b.length; P < z; ) b[P++] = 0;
        M = D.slice(), M.unshift(0), E = D[0], D[1] >= s / 2 && ++E;
        do
          f = 0, u = n(D, b, z, P), u < 0 ? (T = b[0], z != P && (T = T * s + (b[1] || 0)), f = T / E | 0, f > 1 ? (f >= s && (f = s - 1), g = e(D, f, s), w = g.length, P = b.length, u = n(g, b, w, P), u == 1 && (f--, o(g, z < w ? M : D, w, s))) : (f == 0 && (u = f = 1), g = D.slice()), w = g.length, w < P && g.unshift(0), o(b, g, P, s), u == -1 && (P = b.length, u = n(D, b, z, P), u < 1 && (f++, o(b, z < P ? M : D, P, s))), P = b.length) : u === 0 && (f++, b = [0]), y[d++] = f, u && b[0] ? b[P++] = U[A] || 0 : (b = [U[A]], P = 1);
        while ((A++ < N || b[0] !== void 0) && O--);
        m = b[0] !== void 0;
      }
      y[0] || y.shift();
    }
    if (v == 1)
      $.e = c, um = m;
    else {
      for (d = 1, f = y[0]; f >= 10; f /= 10) d++;
      $.e = d + c * v - 1, Ce($, l ? a + $.e + 1 : a, i, m);
    }
    return $;
  };
}();
function Ce(e, n, o, t) {
  var r, a, i, l, s, u, c, d, f, v = e.constructor;
  e: if (n != null) {
    if (d = e.d, !d) return e;
    for (r = 1, l = d[0]; l >= 10; l /= 10) r++;
    if (a = n - r, a < 0)
      a += Pe, i = n, c = d[f = 0], s = c / vn(10, r - i - 1) % 10 | 0;
    else if (f = Math.ceil((a + 1) / Pe), l = d.length, f >= l)
      if (t) {
        for (; l++ <= f; ) d.push(0);
        c = s = 0, r = 1, a %= Pe, i = a - Pe + 1;
      } else
        break e;
    else {
      for (c = l = d[f], r = 1; l >= 10; l /= 10) r++;
      a %= Pe, i = a - Pe + r, s = i < 0 ? 0 : c / vn(10, r - i - 1) % 10 | 0;
    }
    if (t = t || n < 0 || d[f + 1] !== void 0 || (i < 0 ? c : c % vn(10, r - i - 1)), u = o < 4 ? (s || t) && (o == 0 || o == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (o == 4 || t || o == 6 && // Check whether the digit to the left of the rounding digit is odd.
    (a > 0 ? i > 0 ? c / vn(10, r - i) : 0 : d[f - 1]) % 10 & 1 || o == (e.s < 0 ? 8 : 7)), n < 1 || !d[0])
      return d.length = 0, u ? (n -= e.e + 1, d[0] = vn(10, (Pe - n % Pe) % Pe), e.e = -n || 0) : d[0] = e.e = 0, e;
    if (a == 0 ? (d.length = f, l = 1, f--) : (d.length = f + 1, l = vn(10, Pe - a), d[f] = i > 0 ? (c / vn(10, r - i) % vn(10, i) | 0) * l : 0), u)
      for (; ; )
        if (f == 0) {
          for (a = 1, i = d[0]; i >= 10; i /= 10) a++;
          for (i = d[0] += l, l = 1; i >= 10; i /= 10) l++;
          a != l && (e.e++, d[0] == _n && (d[0] = 1));
          break;
        } else {
          if (d[f] += l, d[f] != _n) break;
          d[f--] = 0, l = 1;
        }
    for (a = d.length; d[--a] === 0; ) d.pop();
  }
  return Ee && (e.e > v.maxE ? (e.d = null, e.e = NaN) : e.e < v.minE && (e.e = 0, e.d = [0])), e;
}
function ro(e, n, o) {
  if (!e.isFinite()) return gm(e);
  var t, r = e.e, a = Cn(e.d), i = a.length;
  return n ? (o && (t = o - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + ko(t) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : r < 0 ? (a = "0." + ko(-r - 1) + a, o && (t = o - i) > 0 && (a += ko(t))) : r >= i ? (a += ko(r + 1 - i), o && (t = o - r - 1) > 0 && (a = a + "." + ko(t))) : ((t = r + 1) < i && (a = a.slice(0, t) + "." + a.slice(t)), o && (t = o - i) > 0 && (r + 1 === i && (a += "."), a += ko(t))), a;
}
function ri(e, n) {
  var o = e[0];
  for (n *= Pe; o >= 10; o /= 10) n++;
  return n;
}
function ra(e, n, o) {
  if (n > cS)
    throw Ee = !0, o && (e.precision = o), Error(cm);
  return Ce(new e(oa), n, 1, !0);
}
function Qn(e, n, o) {
  if (n > Xl) throw Error(cm);
  return Ce(new e(ta), n, o, !0);
}
function vm(e) {
  var n = e.length - 1, o = n * Pe + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10) o--;
    for (n = e[0]; n >= 10; n /= 10) o++;
  }
  return o;
}
function ko(e) {
  for (var n = ""; e--; ) n += "0";
  return n;
}
function mm(e, n, o, t) {
  var r, a = new e(1), i = Math.ceil(t / Pe + 4);
  for (Ee = !1; ; ) {
    if (o % 2 && (a = a.times(n), _c(a.d, i) && (r = !0)), o = Sn(o / 2), o === 0) {
      o = a.d.length - 1, r && a.d[o] === 0 && ++a.d[o];
      break;
    }
    n = n.times(n), _c(n.d, i);
  }
  return Ee = !0, a;
}
function Qc(e) {
  return e.d[e.d.length - 1] & 1;
}
function hm(e, n, o) {
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
  var o, t, r, a, i, l, s, u = 0, c = 0, d = 0, f = e.constructor, v = f.rounding, m = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
  for (n == null ? (Ee = !1, s = m) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), d += 5;
  for (t = Math.log(vn(2, d)) / Math.LN10 * 2 + 5 | 0, s += t, o = a = i = new f(1), f.precision = s; ; ) {
    if (a = Ce(a.times(e), s, 1), o = o.times(++c), l = i.plus(Je(a, o, s, 1)), Cn(l.d).slice(0, s) === Cn(i.d).slice(0, s)) {
      for (r = d; r--; ) i = Ce(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && Kt(i.d, s - t, v, u))
          f.precision = s += 10, o = a = l = new f(1), c = 0, u++;
        else
          return Ce(i, f.precision = m, v, Ee = !0);
      else
        return f.precision = m, i;
    }
    i = l;
  }
}
function zo(e, n) {
  var o, t, r, a, i, l, s, u, c, d, f, v = 1, m = 10, g = e, w = g.d, $ = g.constructor, y = $.rounding, b = $.precision;
  if (g.s < 0 || !w || !w[0] || !g.e && w[0] == 1 && w.length == 1)
    return new $(w && !w[0] ? -1 / 0 : g.s != 1 ? NaN : w ? 0 : g);
  if (n == null ? (Ee = !1, c = b) : c = n, $.precision = c += m, o = Cn(w), t = o.charAt(0), Math.abs(a = g.e) < 15e14) {
    for (; t < 7 && t != 1 || t == 1 && o.charAt(1) > 3; )
      g = g.times(e), o = Cn(g.d), t = o.charAt(0), v++;
    a = g.e, t > 1 ? (g = new $("0." + o), a++) : g = new $(t + "." + o.slice(1));
  } else
    return u = ra($, c + 2, b).times(a + ""), g = zo(new $(t + "." + o.slice(1)), c - m).plus(u), $.precision = b, n == null ? Ce(g, b, y, Ee = !0) : g;
  for (d = g, s = i = g = Je(g.minus(1), g.plus(1), c, 1), f = Ce(g.times(g), c, 1), r = 3; ; ) {
    if (i = Ce(i.times(f), c, 1), u = s.plus(Je(i, new $(r), c, 1)), Cn(u.d).slice(0, c) === Cn(s.d).slice(0, c))
      if (s = s.times(2), a !== 0 && (s = s.plus(ra($, c + 2, b).times(a + ""))), s = Je(s, new $(v), c, 1), n == null)
        if (Kt(s.d, c - m, y, l))
          $.precision = c += m, u = i = g = Je(d.minus(1), d.plus(1), c, 1), f = Ce(g.times(g), c, 1), r = l = 1;
        else
          return Ce(s, $.precision = b, y, Ee = !0);
      else
        return $.precision = b, s;
    s = u, r += 2;
  }
}
function gm(e) {
  return String(e.s * e.s / 0);
}
function Zl(e, n) {
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
    e.d.push(+n), Ee && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function fS(e, n) {
  var o, t, r, a, i, l, s, u, c;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), pm.test(n)) return Zl(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (lS.test(n))
    o = 16, n = n.toLowerCase();
  else if (iS.test(n))
    o = 2;
  else if (sS.test(n))
    o = 8;
  else
    throw Error(Ro + n);
  for (a = n.search(/p/i), a > 0 ? (s = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, t = e.constructor, i && (n = n.replace(".", ""), l = n.length, a = l - a, r = mm(t, new t(o), a, a * 2)), u = Mr(n, o, _n), c = u.length - 1, a = c; u[a] === 0; --a) u.pop();
  return a < 0 ? new t(e.s * 0) : (e.e = ri(u, c), e.d = u, Ee = !1, i && (e = Je(e, r, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? vn(2, s) : To.pow(2, s))), Ee = !0, e);
}
function pS(e, n) {
  var o, t = n.d.length;
  if (t < 3)
    return n.isZero() ? n : gt(e, 2, n, n);
  o = 1.4 * Math.sqrt(t), o = o > 16 ? 16 : o | 0, n = n.times(1 / ai(5, o)), n = gt(e, 2, n, n);
  for (var r, a = new e(5), i = new e(16), l = new e(20); o--; )
    r = n.times(n), n = n.times(a.plus(r.times(i.times(r).minus(l))));
  return n;
}
function gt(e, n, o, t, r) {
  var a, i, l, s, u = e.precision, c = Math.ceil(u / Pe);
  for (Ee = !1, s = o.times(o), l = new e(t); ; ) {
    if (i = Je(l.times(s), new e(n++ * n++), u, 1), l = r ? t.plus(i) : t.minus(i), t = Je(i.times(s), new e(n++ * n++), u, 1), i = l.plus(t), i.d[c] !== void 0) {
      for (a = c; i.d[a] === l.d[a] && a--; ) ;
      if (a == -1) break;
    }
    a = l, l = t, t = i, i = a;
  }
  return Ee = !0, i.d.length = c + 1, i;
}
function ai(e, n) {
  for (var o = e; --n; ) o *= e;
  return o;
}
function bm(e, n) {
  var o, t = n.s < 0, r = Qn(e, e.precision, 1), a = r.times(0.5);
  if (n = n.abs(), n.lte(a))
    return fo = t ? 4 : 1, n;
  if (o = n.divToInt(r), o.isZero())
    fo = t ? 3 : 2;
  else {
    if (n = n.minus(o.times(r)), n.lte(a))
      return fo = Qc(o) ? t ? 2 : 3 : t ? 4 : 1, n;
    fo = Qc(o) ? t ? 1 : 4 : t ? 3 : 2;
  }
  return n.minus(r).abs();
}
function Cu(e, n, o, t) {
  var r, a, i, l, s, u, c, d, f, v = e.constructor, m = o !== void 0;
  if (m ? (An(o, 1, jo), t === void 0 ? t = v.rounding : An(t, 0, 8)) : (o = v.precision, t = v.rounding), !e.isFinite())
    c = gm(e);
  else {
    for (c = ro(e), i = c.indexOf("."), m ? (r = 2, n == 16 ? o = o * 4 - 3 : n == 8 && (o = o * 3 - 2)) : r = n, i >= 0 && (c = c.replace(".", ""), f = new v(1), f.e = c.length - i, f.d = Mr(ro(f), 10, r), f.e = f.d.length), d = Mr(c, 10, r), a = s = d.length; d[--s] == 0; ) d.pop();
    if (!d[0])
      c = m ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new v(e), e.d = d, e.e = a, e = Je(e, f, o, t, 0, r), d = e.d, a = e.e, u = um), i = d[o], l = r / 2, u = u || d[o + 1] !== void 0, u = t < 4 ? (i !== void 0 || u) && (t === 0 || t === (e.s < 0 ? 3 : 2)) : i > l || i === l && (t === 4 || u || t === 6 && d[o - 1] & 1 || t === (e.s < 0 ? 8 : 7)), d.length = o, u)
        for (; ++d[--o] > r - 1; )
          d[o] = 0, o || (++a, d.unshift(1));
      for (s = d.length; !d[s - 1]; --s) ;
      for (i = 0, c = ""; i < s; i++) c += Kl.charAt(d[i]);
      if (m) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++) c += "0";
            for (d = Mr(c, r, n), s = d.length; !d[s - 1]; --s) ;
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
function _c(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function vS(e) {
  return new this(e).abs();
}
function mS(e) {
  return new this(e).acos();
}
function hS(e) {
  return new this(e).acosh();
}
function gS(e, n) {
  return new this(e).plus(n);
}
function bS(e) {
  return new this(e).asin();
}
function yS(e) {
  return new this(e).asinh();
}
function wS(e) {
  return new this(e).atan();
}
function kS(e) {
  return new this(e).atanh();
}
function $S(e, n) {
  e = new this(e), n = new this(n);
  var o, t = this.precision, r = this.rounding, a = t + 4;
  return !e.s || !n.s ? o = new this(NaN) : !e.d && !n.d ? (o = Qn(this, a, 1).times(n.s > 0 ? 0.25 : 0.75), o.s = e.s) : !n.d || e.isZero() ? (o = n.s < 0 ? Qn(this, t, r) : new this(0), o.s = e.s) : !e.d || n.isZero() ? (o = Qn(this, a, 1).times(0.5), o.s = e.s) : n.s < 0 ? (this.precision = a, this.rounding = 1, o = this.atan(Je(e, n, a, 1)), n = Qn(this, a, 1), this.precision = t, this.rounding = r, o = e.s < 0 ? o.minus(n) : o.plus(n)) : o = this.atan(Je(e, n, a, 1)), o;
}
function CS(e) {
  return new this(e).cbrt();
}
function SS(e) {
  return Ce(e = new this(e), e.e + 1, 2);
}
function PS(e, n, o) {
  return new this(e).clamp(n, o);
}
function OS(e) {
  if (!e || typeof e != "object") throw Error(ti + "Object expected");
  var n, o, t, r = e.defaults === !0, a = [
    "precision",
    1,
    jo,
    "rounding",
    0,
    8,
    "toExpNeg",
    -tt,
    0,
    "toExpPos",
    0,
    tt,
    "maxE",
    0,
    tt,
    "minE",
    -tt,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < a.length; n += 3)
    if (o = a[n], r && (this[o] = ql[o]), (t = e[o]) !== void 0)
      if (Sn(t) === t && t >= a[n + 1] && t <= a[n + 2]) this[o] = t;
      else throw Error(Ro + o + ": " + t);
  if (o = "crypto", r && (this[o] = ql[o]), (t = e[o]) !== void 0)
    if (t === !0 || t === !1 || t === 0 || t === 1)
      if (t)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[o] = !0;
        else
          throw Error(dm);
      else
        this[o] = !1;
    else
      throw Error(Ro + o + ": " + t);
  return this;
}
function zS(e) {
  return new this(e).cos();
}
function TS(e) {
  return new this(e).cosh();
}
function ym(e) {
  var n, o, t;
  function r(a) {
    var i, l, s, u = this;
    if (!(u instanceof r)) return new r(a);
    if (u.constructor = r, xc(a)) {
      u.s = a.s, Ee ? !a.d || a.e > r.maxE ? (u.e = NaN, u.d = null) : a.e < r.minE ? (u.e = 0, u.d = [0]) : (u.e = a.e, u.d = a.d.slice()) : (u.e = a.e, u.d = a.d ? a.d.slice() : a.d);
      return;
    }
    if (s = typeof a, s === "number") {
      if (a === 0) {
        u.s = 1 / a < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (a < 0 ? (a = -a, u.s = -1) : u.s = 1, a === ~~a && a < 1e7) {
        for (i = 0, l = a; l >= 10; l /= 10) i++;
        Ee ? i > r.maxE ? (u.e = NaN, u.d = null) : i < r.minE ? (u.e = 0, u.d = [0]) : (u.e = i, u.d = [a]) : (u.e = i, u.d = [a]);
        return;
      } else if (a * 0 !== 0) {
        a || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return Zl(u, a.toString());
    } else if (s !== "string")
      throw Error(Ro + a);
    return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (l === 43 && (a = a.slice(1)), u.s = 1), pm.test(a) ? Zl(u, a) : fS(u, a);
  }
  if (r.prototype = x, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.EUCLID = 9, r.config = r.set = OS, r.clone = ym, r.isDecimal = xc, r.abs = vS, r.acos = mS, r.acosh = hS, r.add = gS, r.asin = bS, r.asinh = yS, r.atan = wS, r.atanh = kS, r.atan2 = $S, r.cbrt = CS, r.ceil = SS, r.clamp = PS, r.cos = zS, r.cosh = TS, r.div = ES, r.exp = BS, r.floor = IS, r.hypot = DS, r.ln = AS, r.log = MS, r.log10 = VS, r.log2 = NS, r.max = RS, r.min = LS, r.mod = FS, r.mul = US, r.pow = HS, r.random = jS, r.round = YS, r.sign = WS, r.sin = KS, r.sinh = qS, r.sqrt = XS, r.sub = GS, r.sum = ZS, r.tan = JS, r.tanh = QS, r.trunc = _S, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (t = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < t.length; ) e.hasOwnProperty(o = t[n++]) || (e[o] = this[o]);
  return r.config(e), r;
}
function ES(e, n) {
  return new this(e).div(n);
}
function BS(e) {
  return new this(e).exp();
}
function IS(e) {
  return Ce(e = new this(e), e.e + 1, 3);
}
function DS() {
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
function xc(e) {
  return e instanceof To || e && e.toStringTag === fm || !1;
}
function AS(e) {
  return new this(e).ln();
}
function MS(e, n) {
  return new this(e).log(n);
}
function NS(e) {
  return new this(e).log(2);
}
function VS(e) {
  return new this(e).log(10);
}
function RS() {
  return hm(this, arguments, "lt");
}
function LS() {
  return hm(this, arguments, "gt");
}
function FS(e, n) {
  return new this(e).mod(n);
}
function US(e, n) {
  return new this(e).mul(n);
}
function HS(e, n) {
  return new this(e).pow(n);
}
function jS(e) {
  var n, o, t, r, a = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : An(e, 1, jo), t = Math.ceil(e / Pe), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(t)); a < t; )
        r = n[a], r >= 429e7 ? n[a] = crypto.getRandomValues(new Uint32Array(1))[0] : l[a++] = r % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(t *= 4); a < t; )
        r = n[a] + (n[a + 1] << 8) + (n[a + 2] << 16) + ((n[a + 3] & 127) << 24), r >= 214e7 ? crypto.randomBytes(4).copy(n, a) : (l.push(r % 1e7), a += 4);
      a = t / 4;
    } else
      throw Error(dm);
  else for (; a < t; ) l[a++] = Math.random() * 1e7 | 0;
  for (t = l[--a], e %= Pe, t && e && (r = vn(10, Pe - e), l[a] = (t / r | 0) * r); l[a] === 0; a--) l.pop();
  if (a < 0)
    o = 0, l = [0];
  else {
    for (o = -1; l[0] === 0; o -= Pe) l.shift();
    for (t = 1, r = l[0]; r >= 10; r /= 10) t++;
    t < Pe && (o -= Pe - t);
  }
  return i.e = o, i.d = l, i;
}
function YS(e) {
  return Ce(e = new this(e), e.e + 1, this.rounding);
}
function WS(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function KS(e) {
  return new this(e).sin();
}
function qS(e) {
  return new this(e).sinh();
}
function XS(e) {
  return new this(e).sqrt();
}
function GS(e, n) {
  return new this(e).sub(n);
}
function ZS() {
  var e = 0, n = arguments, o = new this(n[e]);
  for (Ee = !1; o.s && ++e < n.length; ) o = o.plus(n[e]);
  return Ee = !0, Ce(o, this.precision, this.rounding);
}
function JS(e) {
  return new this(e).tan();
}
function QS(e) {
  return new this(e).tanh();
}
function _S(e) {
  return Ce(e = new this(e), e.e + 1, 1);
}
x[Symbol.for("nodejs.util.inspect.custom")] = x.toString;
x[Symbol.toStringTag] = "Decimal";
var To = x.constructor = ym(ql);
oa = new To(oa);
ta = new To(ta);
const wm = {
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
}, ed = 100, nd = 600, { name: xS, n: e6, classes: n6 } = ne("counter"), o6 = ["inputmode", "readonly", "disabled"];
function t6(e, n) {
  const o = _("var-icon"), t = _("var-button"), r = _("var-form-details");
  return h(), S(
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
          q(t, {
            class: p(
              e.classes(
                e.n("decrement-button"),
                [!e.decrementButton, e.n("--hidden")],
                [e.disabled || e.formDisabled, e.n("--not-allowed")]
              )
            ),
            style: G({
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
              q(o, { name: "minus" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]),
          Ve(R("input", {
            class: p(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
            style: G({
              width: e.toSizeUnit(e.inputWidth),
              fontSize: e.toSizeUnit(e.inputTextSize)
            }),
            inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
            readonly: e.readonly || e.formReadonly,
            disabled: e.disabled || e.formDisabled || e.disableInput,
            "onUpdate:modelValue": n[0] || (n[0] = (a) => e.inputValue = a),
            onChange: n[1] || (n[1] = (...a) => e.handleChange && e.handleChange(...a))
          }, null, 46, o6), [
            [_g, e.inputValue]
          ]),
          q(t, {
            class: p(
              e.classes(
                e.n("increment-button"),
                [!e.incrementButton, e.n("--hidden")],
                [e.disabled || e.formDisabled, e.n("--not-allowed")]
              )
            ),
            style: G({
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
              q(o, { name: "plus" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"])
        ],
        16
        /* FULL_PROPS */
      ),
      q(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const km = ee({
  name: xS,
  components: {
    VarButton: Bn,
    VarIcon: Ge,
    VarFormDetails: En
  },
  directives: { Ripple: tn },
  inheritAttrs: !1,
  props: wm,
  setup(e) {
    const n = k(""), { bindForm: o, form: t } = Hn(), {
      errorMessage: r,
      validateWithTrigger: a,
      validate: i,
      // expose
      resetValidation: l
    } = Un(), { readonly: s, disabled: u } = t ?? {}, c = I(() => {
      const { max: D, modelValue: Q } = e;
      return D != null && j(Q) >= j(D);
    }), d = I(() => {
      const { min: D, modelValue: Q } = e;
      return D != null && j(Q) <= j(D);
    });
    let f, v, m, g;
    C(o, {
      reset: b,
      validate: $,
      resetValidation: l
    }), pe(
      () => e.modelValue,
      (D) => {
        H(P(String(D))), C(e.onChange, j(D));
      }
    ), H(P(String(e.modelValue)));
    function $() {
      return i(e.rules, e.modelValue);
    }
    function y(D) {
      He(() => {
        const { validateTrigger: Q, rules: Z, modelValue: oe } = e;
        a(Q, D, Z, oe);
      });
    }
    function b() {
      const { min: D } = e;
      C(e["onUpdate:modelValue"], D != null ? j(D) : 0), l();
    }
    function P(D) {
      const { decimalLength: Q, max: Z, min: oe } = e;
      let ye = j(D);
      return Z != null && ye > j(Z) && (ye = j(Z)), oe != null && ye < j(oe) && (ye = j(oe)), D = String(ye), Q != null && (D = ye.toFixed(j(Q))), D;
    }
    function T(D) {
      const { lazyChange: Q, onBeforeChange: Z } = e, { value: oe } = D.target, ye = P(oe);
      Q ? C(Z, j(ye), U) : H(ye), y("onInputChange");
    }
    function O() {
      const {
        disabled: D,
        readonly: Q,
        disableDecrement: Z,
        decrementButton: oe,
        lazyChange: ye,
        step: Oe,
        modelValue: W,
        onDecrement: J,
        onBeforeChange: re
      } = e;
      if (u != null && u.value || s != null && s.value || D || Q || Z || !oe || d.value)
        return;
      const fe = new To(j(W)).minus(new To(j(Oe))).toString(), V = P(fe), K = j(V);
      C(J, K), ye ? C(re, K, U) : (H(V), y("onDecrement"));
    }
    function B() {
      const {
        disabled: D,
        readonly: Q,
        disableIncrement: Z,
        incrementButton: oe,
        lazyChange: ye,
        step: Oe,
        modelValue: W,
        onIncrement: J,
        onBeforeChange: re
      } = e;
      if (u != null && u.value || s != null && s.value || D || Q || Z || !oe || c.value)
        return;
      const fe = new To(j(W)).plus(new To(j(Oe))).toString(), V = P(fe), K = j(V);
      C(J, K), ye ? C(re, K, U) : (H(V), y("onIncrement"));
    }
    function A() {
      const { press: D, lazyChange: Q } = e;
      !D || Q || (g = window.setTimeout(() => {
        Y();
      }, nd));
    }
    function N() {
      const { press: D, lazyChange: Q } = e;
      !D || Q || (m = window.setTimeout(() => {
        M();
      }, nd));
    }
    function E() {
      v && clearTimeout(v), g && clearTimeout(g);
    }
    function z() {
      f && clearTimeout(f), m && clearTimeout(m);
    }
    function M() {
      f = window.setTimeout(() => {
        B(), M();
      }, ed);
    }
    function Y() {
      v = window.setTimeout(() => {
        O(), Y();
      }, ed);
    }
    function H(D) {
      n.value = D;
      const Q = j(D);
      C(e["onUpdate:modelValue"], Q);
    }
    function U(D) {
      H(P(String(D))), y("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: r,
      formDisabled: u,
      formReadonly: s,
      isMax: c,
      isMin: d,
      n: e6,
      classes: n6,
      formatElevation: dn,
      validate: $,
      reset: b,
      resetValidation: l,
      handleChange: T,
      decrement: O,
      increment: B,
      pressDecrement: A,
      pressIncrement: N,
      releaseDecrement: E,
      releaseIncrement: z,
      toSizeUnit: ze,
      toNumber: j
    };
  }
});
km.render = t6;
var ii = km;
ae(ii);
le(ii, wm);
const ZB = ii;
var Jl = ii, $m = 60, Cm = $m * 60, Sm = Cm * 24, r6 = Sm * 7, bt = 1e3, al = $m * bt, od = Cm * bt, a6 = Sm * bt, i6 = r6 * bt, Su = "millisecond", rt = "second", at = "minute", it = "hour", $o = "day", Nr = "week", Jn = "month", Pm = "quarter", Co = "year", lt = "date", l6 = "YYYY-MM-DDTHH:mm:ssZ", td = "Invalid Date", s6 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, u6 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const c6 = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var Ql = function(n, o, t) {
  var r = String(n);
  return !r || r.length >= o ? n : "" + Array(o + 1 - r.length).join(t) + n;
}, d6 = function(n) {
  var o = -n.utcOffset(), t = Math.abs(o), r = Math.floor(t / 60), a = t % 60;
  return (o <= 0 ? "+" : "-") + Ql(r, 2, "0") + ":" + Ql(a, 2, "0");
}, f6 = function e(n, o) {
  if (n.date() < o.date()) return -e(o, n);
  var t = (o.year() - n.year()) * 12 + (o.month() - n.month()), r = n.clone().add(t, Jn), a = o - r < 0, i = n.clone().add(t + (a ? -1 : 1), Jn);
  return +(-(t + (o - r) / (a ? r - i : i - r)) || 0);
}, p6 = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, v6 = function(n) {
  var o = {
    M: Jn,
    y: Co,
    w: Nr,
    d: $o,
    D: lt,
    h: it,
    m: at,
    s: rt,
    ms: Su,
    Q: Pm
  };
  return o[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, m6 = function(n) {
  return n === void 0;
};
const h6 = {
  s: Ql,
  z: d6,
  m: f6,
  a: p6,
  p: v6,
  u: m6
};
var At = "en", qo = {};
qo[At] = c6;
var Pu = function(n) {
  return n instanceof li;
}, aa = function e(n, o, t) {
  var r;
  if (!n) return At;
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
  return !t && r && (At = r), r || !t && At;
}, ue = function(n, o) {
  if (Pu(n))
    return n.clone();
  var t = typeof o == "object" ? o : {};
  return t.date = n, t.args = arguments, new li(t);
}, g6 = function(n, o) {
  return ue(n, {
    locale: o.$L,
    utc: o.$u,
    x: o.$x,
    $offset: o.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Ze = h6;
Ze.l = aa;
Ze.i = Pu;
Ze.w = g6;
var b6 = function(n) {
  var o = n.date, t = n.utc;
  if (o === null) return /* @__PURE__ */ new Date(NaN);
  if (Ze.u(o)) return /* @__PURE__ */ new Date();
  if (o instanceof Date) return new Date(o);
  if (typeof o == "string" && !/Z$/i.test(o)) {
    var r = o.match(s6);
    if (r) {
      var a = r[2] - 1 || 0, i = (r[7] || "0").substring(0, 3);
      return t ? new Date(Date.UTC(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)) : new Date(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i);
    }
  }
  return new Date(o);
}, li = /* @__PURE__ */ function() {
  function e(o) {
    this.$L = aa(o.locale, null, !0), this.parse(o);
  }
  var n = e.prototype;
  return n.parse = function(t) {
    this.$d = b6(t), this.$x = t.x || {}, this.init();
  }, n.init = function() {
    var t = this.$d;
    this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
  }, n.$utils = function() {
    return Ze;
  }, n.isValid = function() {
    return this.$d.toString() !== td;
  }, n.isSame = function(t, r) {
    var a = ue(t);
    return this.startOf(r) <= a && a <= this.endOf(r);
  }, n.isAfter = function(t, r) {
    return ue(t) < this.startOf(r);
  }, n.isBefore = function(t, r) {
    return this.endOf(r) < ue(t);
  }, n.$g = function(t, r, a) {
    return Ze.u(t) ? this[r] : this.set(a, t);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(t, r) {
    var a = this, i = Ze.u(r) ? !0 : r, l = Ze.p(t), s = function($, y) {
      var b = Ze.w(a.$u ? Date.UTC(a.$y, y, $) : new Date(a.$y, y, $), a);
      return i ? b : b.endOf($o);
    }, u = function($, y) {
      var b = [0, 0, 0, 0], P = [23, 59, 59, 999];
      return Ze.w(a.toDate()[$].apply(
        // eslint-disable-line prefer-spread
        a.toDate("s"),
        (i ? b : P).slice(y)
      ), a);
    }, c = this.$W, d = this.$M, f = this.$D, v = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case Co:
        return i ? s(1, 0) : s(31, 11);
      case Jn:
        return i ? s(1, d) : s(0, d + 1);
      case Nr: {
        var m = this.$locale().weekStart || 0, g = (c < m ? c + 7 : c) - m;
        return s(i ? f - g : f + (6 - g), d);
      }
      case $o:
      case lt:
        return u(v + "Hours", 0);
      case it:
        return u(v + "Minutes", 1);
      case at:
        return u(v + "Seconds", 2);
      case rt:
        return u(v + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(t) {
    return this.startOf(t, !1);
  }, n.$set = function(t, r) {
    var a, i = Ze.p(t), l = "set" + (this.$u ? "UTC" : ""), s = (a = {}, a[$o] = l + "Date", a[lt] = l + "Date", a[Jn] = l + "Month", a[Co] = l + "FullYear", a[it] = l + "Hours", a[at] = l + "Minutes", a[rt] = l + "Seconds", a[Su] = l + "Milliseconds", a)[i], u = i === $o ? this.$D + (r - this.$W) : r;
    if (i === Jn || i === Co) {
      var c = this.clone().set(lt, 1);
      c.$d[s](u), c.init(), this.$d = c.set(lt, Math.min(this.$D, c.daysInMonth())).$d;
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
      var v = ue(a);
      return Ze.w(v.date(v.date() + Math.round(f * t)), a);
    };
    if (l === Jn)
      return this.set(Jn, this.$M + t);
    if (l === Co)
      return this.set(Co, this.$y + t);
    if (l === $o)
      return s(1);
    if (l === Nr)
      return s(7);
    var u = (i = {}, i[at] = al, i[it] = od, i[rt] = bt, i)[l] || 1, c = this.$d.getTime() + t * u;
    return Ze.w(c, this);
  }, n.subtract = function(t, r) {
    return this.add(t * -1, r);
  }, n.format = function(t) {
    var r = this, a = this.$locale();
    if (!this.isValid()) return a.invalidDate || td;
    var i = t || l6, l = Ze.z(this), s = this.$H, u = this.$m, c = this.$M, d = a.weekdays, f = a.months, v = a.meridiem, m = function(b, P, T, O) {
      return b && (b[P] || b(r, i)) || T[P].slice(0, O);
    }, g = function(b) {
      return Ze.s(s % 12 || 12, b, "0");
    }, w = v || function(y, b, P) {
      var T = y < 12 ? "AM" : "PM";
      return P ? T.toLowerCase() : T;
    }, $ = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: c + 1,
      MM: Ze.s(c + 1, 2, "0"),
      MMM: m(a.monthsShort, c, f, 3),
      MMMM: m(f, c),
      D: this.$D,
      DD: Ze.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: m(a.weekdaysMin, this.$W, d, 2),
      ddd: m(a.weekdaysShort, this.$W, d, 3),
      dddd: d[this.$W],
      H: String(s),
      HH: Ze.s(s, 2, "0"),
      h: g(1),
      hh: g(2),
      a: w(s, u, !0),
      A: w(s, u, !1),
      m: String(u),
      mm: Ze.s(u, 2, "0"),
      s: String(this.$s),
      ss: Ze.s(this.$s, 2, "0"),
      SSS: Ze.s(this.$ms, 3, "0"),
      Z: l
      // 'ZZ' logic below
    };
    return i.replace(u6, function(y, b) {
      return b || $[y] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(t, r, a) {
    var i, l = Ze.p(r), s = ue(t), u = (s.utcOffset() - this.utcOffset()) * al, c = this - s, d = Ze.m(this, s);
    return d = (i = {}, i[Co] = d / 12, i[Jn] = d, i[Pm] = d / 3, i[Nr] = (c - u) / i6, i[$o] = (c - u) / a6, i[it] = c / od, i[at] = c / al, i[rt] = c / bt, i)[l] || c, a ? d : Ze.a(d);
  }, n.daysInMonth = function() {
    return this.endOf(Jn).$D;
  }, n.$locale = function() {
    return qo[this.$L];
  }, n.locale = function(t, r) {
    if (!t) return this.$L;
    var a = this.clone(), i = aa(t, r, !0);
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
}(), Om = li.prototype;
ue.prototype = Om;
[["$ms", Su], ["$s", rt], ["$m", at], ["$H", it], ["$W", $o], ["$M", Jn], ["$y", Co], ["$D", lt]].forEach(function(e) {
  Om[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ue.extend = function(e, n) {
  return e.$i || (e(n, li, ue), e.$i = !0), ue;
};
ue.locale = aa;
ue.isDayjs = Pu;
ue.unix = function(e) {
  return ue(e * 1e3);
};
ue.en = qo[At];
ue.Ls = qo;
ue.p = {};
const zm = function(e, n) {
  n.prototype.isSameOrBefore = function(o, t) {
    return this.isSame(o, t) || this.isBefore(o, t);
  };
}, Tm = function(e, n) {
  n.prototype.isSameOrAfter = function(o, t) {
    return this.isSame(o, t) || this.isAfter(o, t);
  };
}, Vr = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"], Bt = ["0", "1", "2", "3", "4", "5", "6"], Em = {
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
}, { n: y6 } = ne("date-picker-header");
function w6(e, n) {
  const o = _("var-icon"), t = _("var-button");
  return h(), S(
    "div",
    {
      class: p(e.n())
    },
    [
      q(t, {
        class: p(e.n("arrow")),
        "var-date-picker-header-cover": "",
        round: "",
        text: "",
        disabled: e.disabled.left,
        onClick: n[0] || (n[0] = (r) => e.checkDate("prev"))
      }, {
        default: ce(() => [
          q(o, { name: "chevron-left" })
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
          q(_e, {
            name: `var-date-picker${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: ce(() => [
              (h(), S(
                "div",
                { key: e.showDate },
                se(e.showDate),
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
      q(t, {
        class: p(e.n("arrow")),
        "var-date-picker-header-cover": "",
        round: "",
        text: "",
        disabled: e.disabled.right,
        onClick: n[2] || (n[2] = (r) => e.checkDate("next"))
      }, {
        default: ce(() => [
          q(o, { name: "chevron-right" })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["class", "disabled"])
    ],
    2
    /* CLASS */
  );
}
const Bm = ee({
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
    const o = k(!1), t = k(0), { t: r } = so(), a = I(() => {
      var l;
      const { date: s, type: u } = e, { previewMonth: c, previewYear: d } = s;
      if (u === "year") return d;
      if (u === "month") return j(d) + t.value;
      const f = (l = (r || an)("datePickerMonthDict")) == null ? void 0 : l[c].name;
      return (r || an)("lang") === "zh-CN" ? `${d} ${f}` : `${f} ${d}`;
    }), i = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (n("check-date", l), o.value = l === "prev", t.value += l === "prev" ? -1 : 1);
    };
    return pe(
      () => e.date,
      () => {
        t.value = 0;
      }
    ), {
      n: y6,
      reverse: o,
      showDate: a,
      checkDate: i
    };
  }
});
Bm.render = w6;
var Ou = Bm, k6 = Object.defineProperty, rd = Object.getOwnPropertySymbols, $6 = Object.prototype.hasOwnProperty, C6 = Object.prototype.propertyIsEnumerable, ad = (e, n, o) => n in e ? k6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, S6 = (e, n) => {
  for (var o in n || (n = {}))
    $6.call(n, o) && ad(e, o, n[o]);
  if (rd)
    for (var o of rd(n))
      C6.call(n, o) && ad(e, o, n[o]);
  return e;
};
ue.extend(zm);
ue.extend(Tm);
const { n: kr, classes: P6 } = ne("month-picker"), { n: $r } = ne("date-picker");
function O6(e, n) {
  const o = _("panel-header"), t = _("var-button");
  return h(), S(
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
          q(o, {
            ref: "headerEl",
            type: "month",
            date: e.preview,
            disabled: e.panelBtnDisabled,
            onCheckPanel: e.clickYear,
            onCheckDate: e.checkDate
          }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]),
          q(_e, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: ce(() => [
              (h(), S("ul", { key: e.panelKey }, [
                (h(!0), S(
                  Ae,
                  null,
                  qe(e.MONTH_LIST, (r) => (h(), S("li", { key: r }, [
                    q(t, je({
                      type: "primary",
                      "var-month-picker-cover": "",
                      ripple: !1,
                      elevation: e.componentProps.buttonElevation,
                      ref_for: !0
                    }, S6({}, e.buttonProps(r)), {
                      onClick: (a) => e.chooseMonth(r, a)
                    }), {
                      default: ce(() => [
                        Ie(
                          se(e.getMonthAbbr(r)),
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
const Im = ee({
  name: "MonthPickerPanel",
  components: {
    VarButton: Bn,
    PanelHeader: Ou
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
    const [o, t] = e.current.split("-"), r = k(!1), a = k(0), i = k(null), l = xe({
      left: !1,
      right: !1
    }), { t: s } = so(), u = I(() => e.choose.chooseYear === e.preview.previewYear), c = I(() => e.preview.previewYear === o), d = (y) => {
      var b, P;
      return (P = (b = (s || an)("datePickerMonthDict")) == null ? void 0 : b[y].abbr) != null ? P : "";
    }, f = (y) => {
      const {
        preview: { previewYear: b },
        componentProps: { min: P, max: T }
      } = e;
      let O = !0, B = !0;
      const A = `${b}-${y}`;
      return T && (O = ue(A).isSameOrBefore(ue(T), "month")), P && (B = ue(A).isSameOrAfter(ue(P), "month")), O && B;
    }, v = (y) => {
      const {
        choose: { chooseMonths: b, chooseDays: P, chooseRangeMonth: T },
        componentProps: { type: O, range: B }
      } = e;
      if (B) {
        if (!T.length) return !1;
        const A = ue(y).isSameOrBefore(ue(T[1]), "month"), N = ue(y).isSameOrAfter(ue(T[0]), "month");
        return A && N;
      }
      return O === "month" ? b.includes(y) : P.some((A) => A.includes(y));
    }, m = (y) => {
      const {
        choose: { chooseMonth: b },
        preview: { previewYear: P },
        componentProps: { allowedDates: T, color: O, multiple: B, range: A }
      } = e, N = `${P}-${y}`, E = () => A || B ? v(N) : b === y && u.value, M = f(y) ? T ? !T(N) : !1 : !0, Y = () => M ? !0 : A || B ? !v(N) : !u.value || b !== y, H = () => c.value && t === y && e.componentProps.showCurrent ? (A || B || u.value) && M ? !0 : A || B ? !v(N) : u.value ? b !== t : !0 : !1, U = () => M ? "" : H() ? O ?? "" : E() ? "" : `${$r()}-color-cover`, D = U().startsWith($r());
      return {
        outline: H(),
        text: Y(),
        color: Y() ? "" : O,
        textColor: D ? "" : U(),
        [`${$r()}-color-cover`]: D,
        class: P6(kr("button"), [M, kr("button--disabled")]),
        disabled: M
      };
    }, g = (y, b) => {
      b.currentTarget.classList.contains(kr("button--disabled")) || n("choose-month", y);
    }, w = (y) => {
      r.value = y === "prev", a.value += y === "prev" ? -1 : 1, n("check-preview", "year", y);
    }, $ = (y) => {
      i.value.checkDate(y);
    };
    return pe(
      () => [e.preview.previewYear, e.componentProps.max, e.componentProps.min],
      ([y, b, P]) => {
        b && (l.right = !ue(`${j(y) + 1}`).isSameOrBefore(ue(b), "year")), P && (l.left = !ue(`${j(y) - 1}`).isSameOrAfter(ue(P), "year"));
      },
      { immediate: !0 }
    ), {
      n: kr,
      nDate: $r,
      t: an,
      MONTH_LIST: Vr,
      headerEl: i,
      reverse: r,
      panelKey: a,
      panelBtnDisabled: l,
      forwardRef: $,
      buttonProps: m,
      getMonthAbbr: d,
      chooseMonth: g,
      checkDate: w
    };
  }
});
Im.render = O6;
var z6 = Im;
const Mt = {
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
var id = (e, n, o) => new Promise((t, r) => {
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
const { name: T6, n: E6, classes: B6 } = ne("sticky");
function I6(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: G({
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
          class: p(e.n("wrapper")),
          ref: "wrapperEl",
          style: G({
            zIndex: e.toNumber(e.zIndex),
            position: e.enableFixedMode ? "fixed" : void 0,
            width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
            height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
            left: e.enableFixedMode ? e.fixedLeft : void 0,
            top: e.enableFixedMode ? e.fixedTop : void 0
          })
        },
        [
          F(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  );
}
const Dm = ee({
  name: T6,
  props: Mt,
  setup(e) {
    const n = k(null), o = k(null), t = k(!1), r = k("0px"), a = k("0px"), i = k("auto"), l = k("auto"), s = k("auto"), u = k("auto"), c = I(() => !e.disabled && e.cssMode), d = I(() => !e.disabled && !e.cssMode && t.value), f = I(() => en(e.offsetTop));
    let v;
    pe(() => e.disabled, y), yn(() => id(this, null, function* () {
      yield bn(), g(), w();
    })), ar($), lo(y), We(() => window, "scroll", w);
    function m() {
      const { cssMode: b, disabled: P } = e;
      if (P)
        return;
      let T = 0;
      if (v && v !== window) {
        const { top: z } = nn(v);
        T = z;
      }
      const O = o.value, B = n.value, { top: A, left: N } = nn(B), E = A - T;
      return E <= f.value ? (b || (i.value = `${B.offsetWidth}px`, l.value = `${B.offsetHeight}px`, r.value = `${T + f.value}px`, a.value = `${N}px`, s.value = `${O.offsetWidth}px`, u.value = `${O.offsetHeight}px`, t.value = !0), {
        offsetTop: f.value,
        isFixed: !0
      }) : (t.value = !1, {
        offsetTop: E,
        isFixed: !1
      });
    }
    function g() {
      v = No(n.value), v !== window && v.addEventListener("scroll", w);
    }
    function w() {
      const b = m();
      b && C(e.onScroll, b.offsetTop, b.isFixed);
    }
    function $() {
      !v || v === window || v.removeEventListener("scroll", w);
    }
    function y() {
      return id(this, null, function* () {
        t.value = !1, yield vo(), m();
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
      n: E6,
      classes: B6,
      resize: y,
      toNumber: j
    };
  }
});
Dm.render = I6;
var si = Dm;
ae(si);
le(si, Mt);
const JB = si;
var yt = si, D6 = Object.defineProperty, ld = Object.getOwnPropertySymbols, A6 = Object.prototype.hasOwnProperty, M6 = Object.prototype.propertyIsEnumerable, sd = (e, n, o) => n in e ? D6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, N6 = (e, n) => {
  for (var o in n || (n = {}))
    A6.call(n, o) && sd(e, o, n[o]);
  if (ld)
    for (var o of ld(n))
      M6.call(n, o) && sd(e, o, n[o]);
  return e;
};
const { n: Cr, classes: ud } = ne("year-picker"), { n: Sr } = ne("date-picker");
function V6(e, n) {
  const o = _("panel-header"), t = _("var-sticky"), r = _("var-button");
  return h(), S("div", null, [
    q(t, { "css-mode": "" }, {
      default: ce(() => [
        q(o, {
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
    q(_e, {
      name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
    }, {
      default: ce(() => [
        (h(), S(
          "ul",
          {
            ref: "panel",
            class: p(e.n()),
            key: e.panelKey
          },
          [
            (h(!0), S(
              Ae,
              null,
              qe(e.yearList, (a) => (h(), S("li", { key: a }, [
                q(r, je({
                  type: "primary",
                  "var-year-picker-cover": "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation,
                  ref_for: !0
                }, N6({}, e.buttonProps(`${a}`)), {
                  onClick: (i) => e.chooseYear(a, i)
                }), {
                  default: ce(() => [
                    Ie(
                      se(a),
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
const Am = ee({
  name: "YearPickerPanel",
  components: {
    VarButton: Bn,
    VarSticky: yt,
    PanelHeader: Ou
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
    const [o] = e.current.split("-"), t = k(), r = k(null), a = k(!1), i = k(0), l = k(0), s = xe({
      left: !1,
      right: !1
    }), u = I(() => {
      if (!e.preview)
        return [];
      const $ = Math.floor(j(e.preview) / 100 + l.value) * 100;
      return Array.from(Array(100), (y, b) => Math.max(0, $) + b);
    }), c = ($) => {
      const {
        choose: { chooseMonths: y, chooseDays: b, chooseYears: P, chooseRangeYear: T },
        componentProps: { type: O, range: B }
      } = e;
      if (B) {
        if (!T.length) return !1;
        const A = ue($).isSameOrBefore(ue(T[1]), "year"), N = ue($).isSameOrAfter(ue(T[0]), "year");
        return A && N;
      }
      return O === "year" ? P.includes($) : O === "month" ? y.some((A) => A.includes($)) : b.some((A) => A.includes($));
    }, d = ($) => {
      const {
        componentProps: { min: y, max: b }
      } = e, P = b ? ue($).isSameOrBefore(ue(b), "year") : !0, T = y ? ue($).isSameOrAfter(ue(y), "year") : !0;
      return P && T;
    }, f = ($) => {
      const {
        choose: { chooseYear: y },
        componentProps: { allowedDates: b, color: P, multiple: T, range: O }
      } = e, B = () => O || T ? c($) : y === $, N = d($) ? b ? !b($) : !1 : !0, E = () => N ? !0 : O || T ? !c($) : y !== $, z = () => o === $ && e.componentProps.showCurrent ? (O || T) && N ? !0 : O || T ? !c($) : y !== o : !1, M = () => N ? "" : z() ? P ?? "" : B() ? "" : `${Sr()}-color-cover`, Y = M().startsWith(Sr());
      return {
        outline: z(),
        text: E(),
        color: E() ? "" : P,
        textColor: Y ? "" : M(),
        [`${Sr()}-color-cover`]: Y,
        class: ud(Cr("button"), [N, Cr("button--disabled")]),
        disabled: N
      };
    }, v = ($, y) => {
      y.currentTarget.classList.contains(Cr("button--disabled")) || n("choose-year", $);
    }, m = () => {
      var $;
      const y = ($ = t.value.querySelector(".var-button--primary")) != null ? $ : t.value.querySelector(".var-button--outline");
      y == null || y.scrollIntoView({
        block: "center"
      });
    }, g = ($) => {
      const y = $ === "prev";
      a.value = y, i.value += y ? -1 : 1, l.value += y ? -1 : 1;
    }, w = ($) => {
      r.value.checkDate($);
    };
    return yn(m), pe(
      () => e.preview,
      () => {
        l.value = 0;
      }
    ), pe(
      () => [u.value, e.componentProps.max, e.componentProps.min],
      ($) => {
        const [y, b, P] = $;
        b && (s.right = !ue(`${j(y[y.length - 1])}`).isSameOrBefore(ue(b), "year")), P && (s.left = !ue(`${j(y[0])}`).isSameOrAfter(ue(P), "year")), j(y[0] <= 0) && (s.left = !1);
      },
      {
        immediate: !0
      }
    ), {
      n: Cr,
      classes: ud,
      buttonProps: f,
      panel: t,
      headerEl: r,
      yearList: u,
      reverse: a,
      panelKey: i,
      panelBtnDisabled: s,
      nDate: Sr,
      checkDate: g,
      chooseYear: v,
      forwardRef: w,
      toNumber: j
    };
  }
});
Am.render = V6;
var R6 = Am, L6 = Object.defineProperty, cd = Object.getOwnPropertySymbols, F6 = Object.prototype.hasOwnProperty, U6 = Object.prototype.propertyIsEnumerable, dd = (e, n, o) => n in e ? L6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, H6 = (e, n) => {
  for (var o in n || (n = {}))
    F6.call(n, o) && dd(e, o, n[o]);
  if (cd)
    for (var o of cd(n))
      U6.call(n, o) && dd(e, o, n[o]);
  return e;
};
ue.extend(zm);
ue.extend(Tm);
const { n: et, classes: j6 } = ne("day-picker"), { n: Pr } = ne("date-picker");
function Y6(e, n) {
  const o = _("panel-header"), t = _("var-button");
  return h(), S(
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
          q(o, {
            ref: "headerEl",
            type: "day",
            date: e.preview,
            disabled: e.panelBtnDisabled,
            onCheckPanel: e.clickMonth,
            onCheckDate: e.checkDate
          }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]),
          q(_e, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: ce(() => [
              (h(), S("div", { key: e.panelKey }, [
                R(
                  "ul",
                  {
                    class: p(e.n("head"))
                  },
                  [
                    (h(!0), S(
                      Ae,
                      null,
                      qe(e.sortWeekList, (r) => (h(), S(
                        "li",
                        { key: r },
                        se(e.getDayAbbr(r)),
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
                    (h(!0), S(
                      Ae,
                      null,
                      qe(e.days, (r, a) => (h(), S("li", { key: a }, [
                        q(t, je({
                          type: "primary",
                          "var-day-picker-cover": "",
                          round: "",
                          ripple: !1,
                          elevation: e.componentProps.buttonElevation,
                          ref_for: !0
                        }, H6({}, e.buttonProps(r)), {
                          onClick: (i) => e.chooseDay(r, i)
                        }), {
                          default: ce(() => [
                            Ie(
                              se(e.filterDay(r)),
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
const Mm = ee({
  name: "DayPickerPanel",
  components: {
    VarButton: Bn,
    PanelHeader: Ou
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
    const [o, t, r] = e.current.split("-"), a = k([]), i = k(!1), l = k(0), s = k(null), u = xe({
      left: !1,
      right: !1
    }), { t: c } = so(), d = I(
      () => e.preview.previewYear === o && e.preview.previewMonth === t
    ), f = I(
      () => e.choose.chooseYear === e.preview.previewYear && e.choose.chooseMonth === e.preview.previewMonth
    ), v = I(() => {
      const A = Bt.findIndex((N) => N === e.componentProps.firstDayOfWeek);
      return A === -1 || A === 0 ? Bt : [...Bt.slice(A), ...Bt.slice(0, A)];
    }), m = (A) => {
      var N, E;
      return (E = (N = (c || an)("datePickerWeekDict")) == null ? void 0 : N[A].abbr) != null ? E : "";
    }, g = (A) => A > 0 ? A : "", w = () => {
      const {
        preview: { previewMonth: A, previewYear: N }
      } = e, E = ue(`${N}-${A}`).daysInMonth(), z = ue(`${N}-${A}-01`).day(), M = v.value.findIndex((Y) => Y === `${z}`);
      a.value = [...Array(M).fill(-1), ...Array.from(Array(E + 1).keys())].filter((Y) => Y);
    }, $ = () => {
      const {
        preview: { previewYear: A, previewMonth: N },
        componentProps: { max: E, min: z }
      } = e;
      if (E) {
        const M = `${A}-${j(N) + 1}`;
        u.right = !ue(M).isSameOrBefore(ue(E), "month");
      }
      if (z) {
        const M = `${A}-${j(N) - 1}`;
        u.left = !ue(M).isSameOrAfter(ue(z), "month");
      }
    }, y = (A) => {
      const {
        preview: { previewYear: N, previewMonth: E },
        componentProps: { min: z, max: M }
      } = e;
      let Y = !0, H = !0;
      const U = `${N}-${E}-${A}`;
      return M && (Y = ue(U).isSameOrBefore(ue(M), "day")), z && (H = ue(U).isSameOrAfter(ue(z), "day")), Y && H;
    }, b = (A) => {
      const {
        choose: { chooseDays: N, chooseRangeDay: E },
        componentProps: { range: z }
      } = e;
      if (z) {
        if (!E.length) return !1;
        const M = ue(A).isSameOrBefore(ue(E[1]), "day"), Y = ue(A).isSameOrAfter(ue(E[0]), "day");
        return M && Y;
      }
      return N.includes(A);
    }, P = (A) => {
      if (A < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: et("button"),
          disabled: !0
        };
      const {
        choose: { chooseDay: N },
        preview: { previewYear: E, previewMonth: z },
        componentProps: { allowedDates: M, color: Y, multiple: H, range: U }
      } = e, D = `${E}-${z}-${A}`, Q = () => U || H ? b(D) : j(N) === A && f.value, oe = y(A) ? M ? !M(D) : !1 : !0, ye = () => oe ? !0 : U || H ? !b(D) : !f.value || j(N) !== A, Oe = () => d.value && j(r) === A && e.componentProps.showCurrent ? (U || H || f.value) && oe ? !0 : U || H ? !b(D) : f.value ? N !== r : !0 : !1, W = () => oe ? "" : Oe() ? Y ?? "" : Q() ? "" : `${Pr()}-color-cover`, J = W().startsWith(Pr());
      return {
        text: ye(),
        outline: Oe(),
        textColor: J ? "" : W(),
        [`${Pr()}-color-cover`]: J,
        class: j6(et("button"), et("button--usable"), [oe, et("button--disabled")]),
        disabled: oe
      };
    }, T = (A) => {
      i.value = A === "prev", l.value += A === "prev" ? -1 : 1, n("check-preview", "month", A);
    }, O = (A, N) => {
      N.currentTarget.classList.contains(et("button--disabled")) || n("choose-day", A);
    }, B = (A) => {
      s.value.checkDate(A);
    };
    return yn(() => {
      w(), $();
    }), pe(
      () => e.preview,
      () => {
        w(), $();
      }
    ), pe(() => [e.componentProps.max, e.componentProps.min], $), {
      n: et,
      nDate: Pr,
      days: a,
      reverse: i,
      headerEl: s,
      panelKey: l,
      sortWeekList: v,
      panelBtnDisabled: u,
      forwardRef: B,
      filterDay: g,
      getDayAbbr: m,
      checkDate: T,
      chooseDay: O,
      buttonProps: P
    };
  }
});
Mm.render = Y6;
var W6 = Mm, K6 = (e, n, o) => new Promise((t, r) => {
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
const { name: q6, n: X6, classes: G6 } = ne("date-picker");
function Z6(e, n) {
  var o;
  const t = _("year-picker-panel"), r = _("month-picker-panel"), a = _("day-picker-panel");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [
      R(
        "div",
        {
          class: p(e.n("title")),
          style: G({ background: e.titleColor || e.color })
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
                se((o = e.hint) != null ? o : (e.pt ? e.pt : e.t)("datePickerHint")),
                3
                /* TEXT, CLASS */
              ),
              e.type !== "year" ? (h(), S(
                "div",
                {
                  key: 0,
                  class: p(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
                  onClick: n[0] || (n[0] = (i) => e.clickEl("year"))
                },
                [
                  F(e.$slots, "year", { year: e.chooseYear }, () => [
                    Ie(
                      se(e.chooseYear),
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
              q(_e, {
                name: e.multiple ? "" : `${e.n()}${e.reverse ? "-reverse" : ""}-translatey`
              }, {
                default: ce(() => [
                  e.type === "year" ? (h(), S("div", {
                    key: `${e.chooseYear}`
                  }, [
                    e.range ? F(e.$slots, "range", {
                      key: 0,
                      choose: e.getChoose.chooseRangeYear
                    }, () => [
                      Ie(
                        se(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? F(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseYears
                    }, () => [
                      Ie(
                        se(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ]) : F(e.$slots, "year", {
                      key: 2,
                      year: e.chooseYear
                    }, () => [
                      Ie(
                        se(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : e.type === "month" ? (h(), S("div", {
                    key: `${e.chooseYear}${e.chooseMonth}`
                  }, [
                    e.range ? F(e.$slots, "range", {
                      key: 0,
                      choose: e.getChoose.chooseRangeMonth
                    }, () => [
                      Ie(
                        se(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? F(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseMonths
                    }, () => [
                      Ie(
                        se(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ]) : F(e.$slots, "month", {
                      key: 2,
                      month: e.chooseMonth,
                      year: e.chooseYear
                    }, () => [
                      Ie(
                        se(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : (h(), S("div", {
                    key: `${e.chooseYear}${e.chooseMonth}${e.chooseDay}`
                  }, [
                    e.range ? F(e.$slots, "range", {
                      key: 0,
                      choose: e.formatRange
                    }, () => [
                      Ie(
                        se(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? F(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseDays
                    }, () => [
                      Ie(
                        se(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ]) : F(e.$slots, "date", Eo(je({ key: 2 }, e.slotProps)), () => [
                      Ie(
                        se(e.getDateTitle),
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
          q(_e, {
            name: `${e.n()}-panel-fade`
          }, {
            default: ce(() => [
              e.getPanelType === "year" ? (h(), we(t, {
                key: 0,
                ref: "yearPanelEl",
                choose: e.getChoose,
                current: e.currentDate,
                "component-props": e.componentProps,
                preview: e.previewYear,
                onChooseYear: e.getChooseYear
              }, null, 8, ["choose", "current", "component-props", "preview", "onChooseYear"])) : e.getPanelType === "month" ? (h(), we(r, {
                key: 1,
                ref: "monthPanelEl",
                current: e.currentDate,
                choose: e.getChoose,
                preview: e.getPreview,
                "click-year": () => e.clickEl("year"),
                "component-props": e.componentProps,
                onChooseMonth: e.getChooseMonth,
                onCheckPreview: e.checkPreview
              }, null, 8, ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"])) : e.getPanelType === "date" ? (h(), we(a, {
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
      e.$slots.actions ? (h(), S(
        "div",
        {
          key: 0,
          class: p(e.n("actions"))
        },
        [
          F(e.$slots, "actions")
        ],
        2
        /* CLASS */
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Nm = ee({
  name: q6,
  components: {
    MonthPickerPanel: z6,
    YearPickerPanel: R6,
    DayPickerPanel: W6
  },
  props: Em,
  setup(e) {
    const { t: n } = so(), o = ue().format("YYYY-MM-D"), [t, r] = o.split("-"), a = Vr.find((ie) => ie === r), i = k(!1), l = k(!1), s = k(!0), u = k(), c = k(), d = k(), f = k(a), v = k(t), m = k(!1), g = k([]), w = k([]), $ = k([]), y = k([]), b = k([]), P = k([]), T = k(null), O = k(null), B = k(null), A = I(() => ({
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
    })), N = I(() => ({
      chooseMonth: u.value,
      chooseYear: c.value,
      chooseDay: d.value,
      chooseYears: g.value,
      chooseMonths: w.value,
      chooseDays: $.value,
      chooseRangeYear: y.value,
      chooseRangeMonth: b.value,
      chooseRangeDay: P.value
    })), E = I(() => ({
      previewMonth: f.value,
      previewYear: v.value
    })), z = I(() => {
      var ie;
      const { multiple: $e, range: Te } = e;
      return Te ? y.value.length ? `${y.value[0]} ~ ${y.value[1]}` : "" : $e ? `${g.value.length}${(n || an)("datePickerSelected")}` : (ie = c.value) != null ? ie : "";
    }), M = I(() => {
      var ie, $e;
      const { multiple: Te, range: Re } = e;
      if (Re)
        return b.value.length ? `${b.value[0]} ~ ${b.value[1]}` : "";
      let Le = "";
      return u.value && (Le = ($e = (ie = (n || an)("datePickerMonthDict")) == null ? void 0 : ie[u.value].name) != null ? $e : ""), Te ? `${w.value.length}${(n || an)("datePickerSelected")}` : Le;
    }), Y = I(() => {
      var ie, $e, Te, Re;
      const { multiple: Le, range: fn } = e;
      if (fn) {
        const zt = P.value.map((qg) => ue(qg).format("YYYY-MM-DD"));
        return zt.length ? `${zt[0]} ~ ${zt[1]}` : "";
      }
      if (Le) return `${$.value.length}${(n || an)("datePickerSelected")}`;
      if (!c.value || !u.value || !d.value) return "";
      const hn = ue(`${c.value}-${u.value}-${d.value}`).day(), gn = Bt.find((zt) => zt === `${hn}`), Ko = ($e = (ie = (n || an)("datePickerWeekDict")) == null ? void 0 : ie[gn].name) != null ? $e : "", Wg = (Re = (Te = (n || an)("datePickerMonthDict")) == null ? void 0 : Te[u.value].name) != null ? Re : "", Kg = Qo(d.value, 2, "0");
      return (n || an)("lang") === "zh-CN" ? `${u.value}-${Kg} ${Ko.slice(0, 3)}` : `${Ko.slice(0, 3)}, ${Wg.slice(0, 3)} ${d.value}`;
    }), H = I(() => e.type === "year" || i.value ? "year" : e.type === "month" || l.value ? "month" : e.type === "date" ? "date" : ""), U = I(() => !e.touchable || !H.value), D = I(() => {
      var ie, $e;
      const Te = ue(`${c.value}-${u.value}-${d.value}`).day(), Re = d.value ? Qo(d.value, 2, "0") : "";
      return {
        week: `${Te}`,
        year: (ie = c.value) != null ? ie : "",
        month: ($e = u.value) != null ? $e : "",
        date: Re
      };
    }), Q = I(
      () => N.value.chooseRangeDay.map((ie) => ue(ie).format("YYYY-MM-DD"))
    ), Z = I(() => c.value === v.value), oe = I(() => u.value === f.value);
    let ye = 0, Oe = 0, W = "", J;
    pe(
      () => e.modelValue,
      (ie) => {
        if (!(!Ke() || te(ie)))
          if (e.range) {
            if (!Fe(ie)) return;
            s.value = ie.length !== 1, de(ie, e.type);
          } else if (e.multiple) {
            if (!Fe(ie)) return;
            ke(ie, e.type);
          } else
            Be(ie);
      },
      { immediate: !0 }
    ), pe(H, Qe);
    function re(ie) {
      ie === "year" ? i.value = !0 : ie === "month" ? l.value = !0 : (i.value = !1, l.value = !1);
    }
    function fe(ie) {
      if (U.value) return;
      const { clientX: $e, clientY: Te } = ie.touches[0];
      ye = $e, Oe = Te;
    }
    function V(ie, $e) {
      return ie >= $e && ie > 20 ? "x" : "y";
    }
    function K(ie) {
      if (U.value) return;
      const { clientX: $e, clientY: Te } = ie.touches[0], Re = $e - ye, Le = Te - Oe;
      J = V(Math.abs(Re), Math.abs(Le)), W = Re > 0 ? "prev" : "next";
    }
    function ve() {
      return K6(this, null, function* () {
        if (U.value || J !== "x") return;
        const ie = H.value === "year" ? T : H.value === "month" ? O : B;
        yield bn(), ie.value.forwardRef(W), Qe();
      });
    }
    function Se(ie, $e) {
      const Te = $e === "year" ? y : $e === "month" ? b : P;
      if (Te.value = s.value ? [ie, ie] : [Te.value[0], ie], s.value = !s.value, s.value) {
        const Le = ue(Te.value[0]).isAfter(Te.value[1]) ? [Te.value[1], Te.value[0]] : [...Te.value];
        C(e["onUpdate:modelValue"], Le), C(e.onChange, Le);
      }
    }
    function Ue(ie, $e) {
      const Te = $e === "year" ? g : $e === "month" ? w : $, Re = $e === "year" ? "YYYY" : $e === "month" ? "YYYY-MM" : "YYYY-MM-DD", Le = Te.value.map((hn) => ue(hn).format(Re)), fn = Le.findIndex((hn) => hn === ie);
      fn === -1 ? Le.push(ie) : Le.splice(fn, 1), C(e["onUpdate:modelValue"], Le), C(e.onChange, Le);
    }
    function Ne(ie, $e) {
      return !c.value || !u.value ? !1 : Z.value ? ie === "year" ? $e < j(c.value) : ie === "month" ? $e < u.value : oe.value ? $e < j(d.value) : u.value > f.value : c.value > v.value;
    }
    function rn(ie) {
      const { readonly: $e, range: Te, multiple: Re, onChange: Le, "onUpdate:modelValue": fn } = e;
      if (ie < 0 || $e) return;
      m.value = Ne("day", ie);
      const hn = `${v.value}-${f.value}-${ie}`, gn = ue(hn).format("YYYY-MM-DD");
      Te ? Se(gn, "day") : Re ? Ue(gn, "day") : (C(fn, gn), C(Le, gn));
    }
    function un(ie) {
      const { type: $e, readonly: Te, range: Re, multiple: Le, onChange: fn, onPreview: hn, "onUpdate:modelValue": gn } = e;
      if (m.value = Ne("month", ie), $e === "month" && !Te) {
        const Ko = `${v.value}-${ie}`;
        Re ? Se(Ko, "month") : Le ? Ue(Ko, "month") : (C(gn, Ko), C(fn, Ko));
      } else
        f.value = ie, C(
          hn,
          j(v.value),
          j(f.value),
          $e === "date" ? j(d.value) : void 0
        );
      l.value = !1;
    }
    function Pn(ie) {
      const { type: $e, readonly: Te, range: Re, multiple: Le, onChange: fn, onPreview: hn, "onUpdate:modelValue": gn } = e;
      m.value = Ne("year", ie), $e === "year" && !Te ? Re ? Se(`${ie}`, "year") : Le ? Ue(`${ie}`, "year") : (C(gn, `${ie}`), C(fn, `${ie}`)) : (v.value = `${ie}`, C(
        hn,
        j(v.value),
        j(f.value),
        $e === "date" ? j(d.value) : void 0
      )), i.value = !1;
    }
    function me(ie, $e) {
      const Te = $e === "prev" ? -1 : 1;
      if (ie === "year")
        v.value = `${j(v.value) + Te}`;
      else {
        let Re = j(f.value) + Te;
        Re < 1 && (v.value = `${j(v.value) - 1}`, Re = 12), Re > 12 && (v.value = `${j(v.value) + 1}`, Re = 1), f.value = Vr.find((Le) => j(Le) === Re);
      }
      C(
        e.onPreview,
        j(v.value),
        j(f.value),
        e.type === "date" ? j(d.value) : void 0
      );
    }
    function Ke() {
      return (e.multiple || e.range) && !Fe(e.modelValue) ? (st("DatePicker", 'type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Fe(e.modelValue) ? (st("DatePicker", 'type of prop "modelValue" should be a String'), !1) : !0;
    }
    function te(ie) {
      return Fe(ie) ? !1 : ie === "Invalid Date" ? (st("DatePicker", '"modelValue" is an Invalid Date'), !0) : !1;
    }
    function de(ie, $e) {
      const Te = $e === "year" ? y : $e === "month" ? b : P, Re = $e === "year" ? "YYYY" : $e === "month" ? "YYYY-MM" : "YYYY-MM-D", Le = ie.map((gn) => ue(gn).format(Re)).slice(0, 2);
      if (Te.value.some((gn) => te(gn))) return;
      Te.value = Le;
      const hn = ue(Te.value[0]).isAfter(Te.value[1]);
      Te.value.length === 2 && hn && (Te.value = [Te.value[1], Te.value[0]]);
    }
    function ke(ie, $e) {
      const Te = $e === "year" ? g : $e === "month" ? w : $, Re = $e === "year" ? "YYYY" : $e === "month" ? "YYYY-MM" : "YYYY-MM-D", Le = Array.from(new Set(ie.map((fn) => ue(fn).format(Re))));
      Te.value = Le.filter((fn) => fn !== "Invalid Date");
    }
    function Be(ie) {
      const Te = (ie ? ue(ie) : ue()).format("YYYY-MM-D");
      if (te(Te)) return;
      const [Re, Le, fn] = Te.split("-"), hn = Vr.find((gn) => gn === Le);
      u.value = hn, c.value = Re, d.value = fn, f.value = hn, v.value = Re;
    }
    function Qe() {
      Oe = 0, ye = 0, W = "", J = void 0;
    }
    return {
      yearPanelEl: T,
      monthPanelEl: O,
      dayPanelEl: B,
      reverse: m,
      currentDate: o,
      chooseMonth: u,
      chooseYear: c,
      chooseDay: d,
      previewYear: v,
      isYearPanel: i,
      isMonthPanel: l,
      getMonthTitle: M,
      getDateTitle: Y,
      getYearTitle: z,
      getPanelType: H,
      getChoose: N,
      getPreview: E,
      componentProps: A,
      slotProps: D,
      formatRange: Q,
      pt: n,
      t: an,
      n: X6,
      classes: G6,
      clickEl: re,
      handleTouchstart: fe,
      handleTouchmove: K,
      handleTouchend: ve,
      getChooseDay: rn,
      getChooseMonth: un,
      getChooseYear: Pn,
      checkPreview: me,
      formatElevation: dn
    };
  }
});
Nm.render = Z6;
var ui = Nm;
ae(ui);
le(ui, Em);
const QB = ui;
var _l = ui, J6 = Object.defineProperty, fd = Object.getOwnPropertySymbols, Q6 = Object.prototype.hasOwnProperty, _6 = Object.prototype.propertyIsEnumerable, pd = (e, n, o) => n in e ? J6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, x6 = (e, n) => {
  for (var o in n || (n = {}))
    Q6.call(n, o) && pd(e, o, n[o]);
  if (fd)
    for (var o of fd(n))
      _6.call(n, o) && pd(e, o, n[o]);
  return e;
};
const Vm = x6({
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
  onBeforeClose: L(),
  onConfirm: L(),
  onCancel: L(),
  "onUpdate:show": L()
}, De(St, [
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
var eP = Object.defineProperty, vd = Object.getOwnPropertySymbols, nP = Object.prototype.hasOwnProperty, oP = Object.prototype.propertyIsEnumerable, md = (e, n, o) => n in e ? eP(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, tP = (e, n) => {
  for (var o in n || (n = {}))
    nP.call(n, o) && md(e, o, n[o]);
  if (vd)
    for (var o of vd(n))
      oP.call(n, o) && md(e, o, n[o]);
  return e;
};
const { name: rP, n: aP, classes: iP } = ne("dialog");
function lP(e, n) {
  const o = _("var-button"), t = _("var-popup");
  return h(), we(t, {
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
      R(
        "div",
        je({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: tP({ width: e.toSizeUnit(e.width) }, e.dialogStyle)
        }, e.$attrs),
        [
          R(
            "div",
            {
              class: p(e.n("title"))
            },
            [
              F(e.$slots, "title", {}, () => {
                var r;
                return [
                  Ie(
                    se((r = e.title) != null ? r : (e.pt ? e.pt : e.t)("dialogTitle")),
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
              style: G({ textAlign: e.messageAlign })
            },
            [
              F(e.$slots, "default", {}, () => [
                Ie(
                  se(e.message),
                  1
                  /* TEXT */
                )
              ])
            ],
            6
            /* CLASS, STYLE */
          ),
          F(e.$slots, "actions", {
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
                e.cancelButton ? (h(), we(o, {
                  key: 0,
                  class: p(e.classes(e.n("button"), e.n("cancel-button"))),
                  "var-dialog-cover": "",
                  text: "",
                  "text-color": e.cancelButtonTextColor,
                  color: e.cancelButtonColor,
                  onClick: e.cancel
                }, {
                  default: ce(() => {
                    var r;
                    return [
                      Ie(
                        se((r = e.cancelButtonText) != null ? r : (e.pt ? e.pt : e.t)("dialogCancelButtonText")),
                        1
                        /* TEXT */
                      )
                    ];
                  }),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "text-color", "color", "onClick"])) : X("v-if", !0),
                e.confirmButton ? (h(), we(o, {
                  key: 1,
                  class: p(e.classes(e.n("button"), e.n("confirm-button"))),
                  "var-dialog-cover": "",
                  text: "",
                  "text-color": e.confirmButtonTextColor,
                  color: e.confirmButtonColor,
                  onClick: e.confirm
                }, {
                  default: ce(() => {
                    var r;
                    return [
                      Ie(
                        se((r = e.confirmButtonText) != null ? r : (e.pt ? e.pt : e.t)("dialogConfirmButtonText")),
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
const Rm = ee({
  name: rP,
  components: {
    VarPopup: Mo,
    VarButton: Bn
  },
  inheritAttrs: !1,
  props: Vm,
  setup(e) {
    const n = k(!1), o = k(!1), { t } = so();
    pe(
      () => e.show,
      (u) => {
        n.value = u;
      },
      { immediate: !0 }
    ), pe(
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
      t: an,
      n: aP,
      classes: iP,
      handleClickOverlay: a,
      confirm: i,
      cancel: l,
      toSizeUnit: ze,
      handleKeyEscape: s
    };
  }
});
Rm.render = lP;
var pr = Rm, sP = Object.defineProperty, uP = Object.defineProperties, cP = Object.getOwnPropertyDescriptors, hd = Object.getOwnPropertySymbols, dP = Object.prototype.hasOwnProperty, fP = Object.prototype.propertyIsEnumerable, gd = (e, n, o) => n in e ? sP(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, il = (e, n) => {
  for (var o in n || (n = {}))
    dP.call(n, o) && gd(e, o, n[o]);
  if (hd)
    for (var o of hd(n))
      fP.call(n, o) && gd(e, o, n[o]);
  return e;
}, pP = (e, n) => uP(e, cP(n));
let Po, ia = {};
function vP(e = {}) {
  return sn(e) ? pP(il({}, ia), { message: e }) : il(il({}, ia), e);
}
function Yo(e) {
  return no() ? new Promise((n) => {
    Yo.close();
    const o = vP(e), t = xe(o);
    t.teleport = "body", Po = t;
    const { unmountInstance: r } = Ct(pr, t, {
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
        C(t.onClosed), r(), Po === t && (Po = null);
      },
      onRouteChange: () => {
        r(), Po === t && (Po = null);
      },
      "onUpdate:show": (a) => {
        t.show = a;
      }
    });
    t.show = !0;
  }) : Promise.resolve();
}
Yo.setDefaultOptions = function(e) {
  ia = e;
};
Yo.resetDefaultOptions = function() {
  ia = {};
};
Yo.close = function() {
  if (Po != null) {
    const e = Po;
    Po = null, He().then(() => {
      e.show = !1;
    });
  }
};
Yo.Component = pr;
ae(pr);
ae(pr, Yo);
le(Yo, Vm);
const _B = pr;
var xl = Yo;
const Lm = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: Boolean,
  description: String,
  margin: String,
  dashed: Boolean,
  hairline: Boolean
}, { name: mP, n: hP, classes: gP } = ne("divider");
function bP(e, n) {
  return h(), S(
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
      style: G(e.style),
      role: "separator"
    },
    [
      e.vertical ? X("v-if", !0) : F(e.$slots, "default", { key: 0 }, () => [
        e.description ? (h(), S(
          "span",
          {
            key: 0,
            class: p(e.n("text"))
          },
          se(e.description),
          3
          /* TEXT, CLASS */
        )) : X("v-if", !0)
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const Fm = ee({
  name: mP,
  props: Lm,
  setup(e, { slots: n }) {
    const o = k(!1), t = I(() => {
      const { vertical: i, inset: l } = e;
      return !i && l === !0;
    }), r = I(() => {
      const { inset: i, vertical: l, margin: s } = e;
      if (tr(i) || l)
        return { margin: s };
      const u = j(i), c = Math.abs(u) + (i + "").replace(u + "", "");
      return {
        margin: s,
        width: `calc(100% - ${ze(c)})`,
        left: u > 0 ? ze(c) : ze(0)
      };
    });
    yn(a), xt(a);
    function a() {
      const { description: i, vertical: l } = e;
      o.value = (n.default || i != null) && !l;
    }
    return {
      n: hP,
      classes: gP,
      withText: o,
      style: r,
      withPresetInset: t
    };
  }
});
Fm.render = bP;
var ci = Fm;
ae(ci);
le(ci, Lm);
const xB = ci;
var es = ci;
const Um = {
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
var yP = Object.defineProperty, wP = Object.defineProperties, kP = Object.getOwnPropertyDescriptors, bd = Object.getOwnPropertySymbols, $P = Object.prototype.hasOwnProperty, CP = Object.prototype.propertyIsEnumerable, yd = (e, n, o) => n in e ? yP(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, wd = (e, n) => {
  for (var o in n || (n = {}))
    $P.call(n, o) && yd(e, o, n[o]);
  if (bd)
    for (var o of bd(n))
      CP.call(n, o) && yd(e, o, n[o]);
  return e;
}, kd = (e, n) => wP(e, kP(n)), SP = (e, n, o) => new Promise((t, r) => {
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
const { name: PP, n: OP, classes: zP } = ne("drag");
function TP(e, n) {
  return h(), we(io, {
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
        },
        onTouchstart: n[0] || (n[0] = (...o) => e.handleTouchstart && e.handleTouchstart(...o)),
        onTouchmove: n[1] || (n[1] = (...o) => e.handleTouchmove && e.handleTouchmove(...o)),
        onTouchend: n[2] || (n[2] = (...o) => e.handleTouchend && e.handleTouchend(...o)),
        onTouchcancel: n[3] || (n[3] = (...o) => e.handleTouchend && e.handleTouchend(...o)),
        onClick: n[4] || (n[4] = (...o) => e.handleClick && e.handleClick(...o))
      }, e.getAttrs()),
      [
        F(e.$slots, "default")
      ],
      16
      /* FULL_PROPS */
    )
  ], 8, ["to", "disabled"]);
}
const Hm = ee({
  name: PP,
  inheritAttrs: !1,
  props: Um,
  setup(e, { attrs: n }) {
    const o = k(null), t = k(0), r = k(0), a = k(!1), i = k(!1), { touching: l, dragging: s, moveX: u, moveY: c, startTouch: d, moveTouch: f, endTouch: v, resetTouch: m } = $t(), { disabled: g } = xo(), w = xe({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    pe(() => e.boundary, E), lo(M), yn(() => {
      E(), M();
    });
    function $(H) {
      e.disabled || (d(H), T());
    }
    function y(H) {
      return SP(this, null, function* () {
        !l.value || e.disabled || (f(H), Me(H), i.value = !1, a.value = !0, e.direction.includes("x") && (t.value += u.value), e.direction.includes("y") && (r.value += c.value), N());
      });
    }
    function b() {
      e.disabled || (v(), i.value = !0, A());
    }
    function P(H) {
      s.value || C(e.onClick, H);
    }
    function T() {
      const { left: H, top: U } = O();
      t.value = H, r.value = U;
    }
    function O() {
      const H = nn(o.value), U = nn(window), D = H.top - U.top, Q = U.bottom - H.bottom, Z = H.left - U.left, oe = U.right - H.right, { width: ye, height: Oe } = H, { width: W, height: J } = U;
      return {
        top: D,
        bottom: Q,
        left: Z,
        right: oe,
        width: ye,
        height: Oe,
        halfWidth: ye / 2,
        halfHeight: Oe / 2,
        windowWidth: W,
        windowHeight: J
      };
    }
    function B() {
      const H = O(), U = w.left, D = H.windowWidth - w.right - H.width, Q = w.top, Z = H.windowHeight - w.bottom - H.height;
      return {
        minX: U,
        minY: Q,
        // fallback the drag element overflows boundary
        maxX: U < D ? D : U,
        maxY: Q < Z ? Z : Q
      };
    }
    function A() {
      if (e.attraction == null)
        return;
      const { halfWidth: H, halfHeight: U, top: D, bottom: Q, left: Z, right: oe } = O(), { minX: ye, minY: Oe, maxX: W, maxY: J } = B(), re = Z + H - w.left, fe = oe + H - w.right, V = D + U - w.top, K = Q + U - w.bottom, ve = re <= fe, Se = V <= K;
      e.attraction.includes("x") && (t.value = ve ? ye : W), e.attraction.includes("y") && (r.value = Se ? Oe : J);
    }
    function N() {
      const { minX: H, minY: U, maxX: D, maxY: Q } = B();
      t.value = $n(t.value, H, D), r.value = $n(r.value, U, Q);
    }
    function E() {
      const { top: H = 0, bottom: U = 0, left: D = 0, right: Q = 0 } = e.boundary;
      w.top = en(H), w.bottom = en(U), w.left = en(D), w.right = en(Q);
    }
    function z() {
      var H;
      const U = (H = n.style) != null ? H : {};
      return kd(wd({}, n), {
        style: kd(wd({}, U), {
          // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: a.value ? 0 : U.top,
          left: a.value ? 0 : U.left,
          right: a.value ? "auto" : U.right,
          bottom: a.value ? "auto" : U.bottom,
          transform: a.value ? `translate(${t.value}px, ${r.value}px)` : U.transform
        })
      });
    }
    function M() {
      a.value && (T(), N());
    }
    function Y() {
      m(), i.value = !1, a.value = !1, t.value = 0, r.value = 0;
    }
    return {
      drag: o,
      x: t,
      y: r,
      enableTransition: i,
      dragging: s,
      teleportDisabled: g,
      n: OP,
      classes: zP,
      getAttrs: z,
      handleTouchstart: $,
      handleTouchmove: y,
      handleTouchend: b,
      handleClick: P,
      resize: M,
      reset: Y
    };
  }
});
Hm.render = TP;
var di = Hm;
ae(di);
le(di, Um);
const eI = di;
var la = di;
const jm = {
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
}, { name: EP, n: BP, classes: IP } = ne("tooltip");
function DP(e, n) {
  return h(), S(
    "div",
    {
      ref: "host",
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      F(e.$slots, "default"),
      (h(), we(io, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        q(_e, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: ce(() => [
            Ve(R(
              "div",
              {
                ref: "popover",
                class: p(e.classes(e.n("tooltip"), e.n("$--box"))),
                style: G({ zIndex: e.zIndex }),
                onClick: n[0] || (n[0] = Xn(() => {
                }, ["stop"])),
                onMouseenter: n[1] || (n[1] = (...o) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...o)),
                onMouseleave: n[2] || (n[2] = (...o) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...o))
              },
              [
                R(
                  "div",
                  {
                    style: G({
                      background: e.color,
                      color: e.textColor,
                      width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.referenceSize.width)) : void 0
                    }),
                    class: p(e.classes(e.n("content-container"), e.n(`--${e.type}`))),
                    role: "tooltip"
                  },
                  [
                    F(e.$slots, "content", {}, () => [
                      Ie(
                        se(e.content),
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
const Ym = ee({
  name: EP,
  props: jm,
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
      setReference: m
    } = Zp(e);
    return {
      popover: o,
      host: t,
      referenceSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: ze,
      n: BP,
      classes: IP,
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
Ym.render = DP;
var fi = Ym;
ae(fi);
le(fi, jm);
const nI = fi;
var sa = fi;
const Wm = {
  expand: Boolean,
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  },
  "onUpdate:expand": L()
};
var AP = Object.defineProperty, $d = Object.getOwnPropertySymbols, MP = Object.prototype.hasOwnProperty, NP = Object.prototype.propertyIsEnumerable, Cd = (e, n, o) => n in e ? AP(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, VP = (e, n) => {
  for (var o in n || (n = {}))
    MP.call(n, o) && Cd(e, o, n[o]);
  if ($d)
    for (var o of $d(n))
      NP.call(n, o) && Cd(e, o, n[o]);
  return e;
};
const { name: RP, n: LP, classes: FP } = ne("ellipsis"), UP = { key: 0 };
function HP(e, n) {
  const o = _("var-tooltip");
  return h(), we(
    o,
    Eo(er(e.tooltipProps)),
    {
      content: ce(() => [
        F(e.$slots, "tooltip-content", {}, () => {
          var t;
          return [
            (t = e.tooltipProps) != null && t.content ? (h(), S(
              "span",
              UP,
              se(e.tooltipProps.content),
              1
              /* TEXT */
            )) : F(e.$slots, "default", { key: 1 })
          ];
        })
      ]),
      default: ce(() => [
        R(
          "span",
          {
            class: p(
              e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])
            ),
            style: G(e.rootStyles),
            onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
          },
          [
            F(e.$slots, "default")
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
const Km = ee({
  name: RP,
  components: { VarTooltip: sa },
  props: Wm,
  setup(e) {
    const n = Gn(e, "expand"), o = I(() => e.lineClamp ? { "-webkit-line-clamp": e.lineClamp } : {}), t = I(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : VP({ sameWidth: !0 }, e.tooltip));
    function r() {
      e.expandTrigger && (n.value = !n.value);
    }
    return {
      tooltipProps: t,
      expanding: n,
      rootStyles: o,
      n: LP,
      classes: FP,
      handleClick: r
    };
  }
});
Km.render = HP;
var pi = Km;
ae(pi);
le(pi, Wm);
const oI = pi;
var ns = pi;
const qm = {
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
  inactiveIconSize: De(on, "size"),
  activeIconSize: De(on, "size"),
  inactiveIconNamespace: De(on, "namespace"),
  activeIconNamespace: De(on, "namespace"),
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
  name: jP,
  classes: ll,
  n: Mn
} = ne("fab");
var vi = ee({
  name: jP,
  inheritAttrs: !1,
  props: qm,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const t = Gn(e, "active"), r = k(null), a = k(null);
    pe(() => e.trigger, () => {
      t.value = !1;
    }), pe(() => e.disabled, () => {
      t.value = !1;
    }), pe(() => [e.position, e.fixed, e.top, e.bottom, e.left, e.right], () => {
      var c;
      (c = a.value) == null || c.reset();
    }), ep(r, "click", s);
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
      }) : null : Ve(q(Bn, {
        "var-fab-cover": !0,
        class: Mn("trigger"),
        type: e.type,
        color: e.color,
        disabled: e.disabled,
        elevation: e.elevation,
        iconContainer: !0
      }, {
        default: () => [q(Ge, {
          "var-fab-cover": !0,
          class: ll([t.value, Mn("trigger-active-icon"), Mn("trigger-inactive-icon")]),
          name: t.value ? e.activeIcon : e.inactiveIcon,
          size: t.value ? e.activeIconSize : e.inactiveIconSize,
          namespace: t.value ? e.activeIconNamespace : e.inactiveIconNamespace,
          transition: 200,
          animationClass: Mn("--trigger-icon-animation")
        }, null)]
      }), [[xn, e.show]]);
    }
    return () => {
      var c;
      const d = op((c = C(n.default)) != null ? c : []), f = tr(e.drag) ? {} : e.drag;
      return q(la, je({
        ref: a,
        class: ll(Mn(`--position-${e.position}`), [!e.fixed, Mn("--absolute")]),
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
        default: () => [q("div", {
          class: ll(Mn(), Mn(`--direction-${e.direction}`), [e.safeArea, Mn("--safe-area")]),
          ref: r,
          onMouseleave: () => l(!1, d.length),
          onMouseenter: () => l(!0, d.length)
        }, [q(_e, {
          name: Mn("--active-transition")
        }, {
          default: () => [u()]
        }), q(_e, {
          name: Mn(`--actions-transition-${e.direction}`),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        }, {
          default: () => [Ve(q("div", {
            class: Mn("actions"),
            onClick: (v) => v.stopPropagation()
          }, [d.map((v) => {
            var m;
            return q("div", {
              class: Mn("action"),
              key: (m = v.key) != null ? m : void 0
            }, [v]);
          })]), [[xn, e.show && t.value && d.length]])]
        })])]
      });
    };
  }
});
ae(vi);
le(vi, qm);
const tI = vi;
var os = vi;
const Xm = {
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
}, { name: YP, n: WP, classes: KP } = ne("floating-panel"), Sd = 100, Pd = 0.2;
function qP(e, n) {
  return h(), we(io, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    R(
      "div",
      {
        class: p(e.classes(e.n(), [e.safeArea, e.n("--safe-area")], e.formatElevation(e.elevation, 3))),
        style: G({
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
        F(e.$slots, "header", {}, () => [
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
            class: p(e.n("content")),
            ref: "contentRef"
          },
          [
            F(e.$slots, "default")
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
const Gm = ee({
  name: YP,
  props: Xm,
  setup(e) {
    const n = k(0), o = k(null), { height: t } = v0(), r = I(() => t.value * 0.6), a = Gn(e, "anchor", { defaultValue: Sd }), i = I(() => {
      const N = [Sd, r.value], { anchors: E } = e;
      return Wn(E) ? N : E;
    }), l = I(() => Math.min(...i.value)), s = I(() => Math.max(...i.value)), { disabled: u } = xo(), { deltaY: c, touching: d, startTouch: f, moveTouch: v, endTouch: m, isReachTop: g, isReachBottom: w } = $t();
    let $;
    lr(() => d.value), pe(() => a.value, y, { immediate: !0 }), pe(
      () => i.value,
      () => {
        y(a.value);
      },
      { immediate: !0 }
    );
    function y(N) {
      O(N ?? l.value);
    }
    function b(N) {
      f(N), $ = n.value;
    }
    function P(N) {
      var E;
      v(N);
      const z = N.target, M = o.value === z || ((E = o.value) == null ? void 0 : E.contains(z));
      if (M && !e.contentDraggable)
        return;
      if (M && e.contentDraggable && n.value >= s.value && !g(o.value)) {
        w(o.value) && Me(N);
        return;
      }
      const Y = $ - c.value;
      O(B(Y)), Me(N);
    }
    function T() {
      m();
      const N = a.value;
      O(n.value), a.value = n.value, a.value !== N && C(e.onAnchorChange, n.value);
    }
    function O(N) {
      n.value = d.value ? N : A(N);
    }
    function B(N) {
      if (N > s.value) {
        const E = N - s.value;
        return s.value + E * Pd;
      }
      if (N < l.value) {
        const E = l.value - N;
        return l.value - E * Pd;
      }
      return N;
    }
    function A(N) {
      if (i.value.includes(N))
        return N;
      let E = 1 / 0, z = 0;
      return i.value.forEach((M) => {
        const Y = Math.abs(M - N);
        Y < E && (E = Y, z = M);
      }), z;
    }
    return {
      contentRef: o,
      teleportDisabled: u,
      touching: d,
      minAnchor: l,
      maxAnchor: s,
      visibleHeight: n,
      n: WP,
      classes: KP,
      toSizeUnit: ze,
      toNumber: j,
      formatElevation: dn,
      handleTouchstart: b,
      handleTouchmove: P,
      handleTouchend: T
    };
  }
});
Gm.render = qP;
var mi = Gm;
ae(mi);
le(mi, Xm);
const rI = mi;
var ts = mi;
const Zm = {
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
const { name: XP, n: GP } = ne("form");
function ZP(e, n) {
  return h(), S(
    "form",
    {
      class: p(e.n()),
      onSubmit: n[0] || (n[0] = (...o) => e.handleSubmit && e.handleSubmit(...o)),
      onReset: n[1] || (n[1] = (...o) => e.handleReset && e.handleReset(...o))
    },
    [
      F(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const Jm = ee({
  name: XP,
  props: Zm,
  setup(e) {
    const n = I(() => e.disabled), o = I(() => e.readonly), { formItems: t, bindFormItems: r } = g1();
    r({
      disabled: n,
      readonly: o
    });
    function i(f) {
      setTimeout(() => {
        const v = No(f), m = v === window ? 0 : Qu(v), g = Qu(f) - m - en(e.scrollToErrorOffsetY);
        Rt(v, {
          top: g,
          animation: kl
        });
      }, 300);
    }
    function l(f) {
      return Od(this, null, function* () {
        Me(f);
        const v = yield u();
        C(e.onSubmit, v);
      });
    }
    function s(f) {
      Me(f), c(), C(e.onReset);
    }
    function u() {
      return Od(this, null, function* () {
        var f;
        const v = yield Promise.all(t.map(({ validate: m }) => m()));
        if (e.scrollToError) {
          const [, m] = Nf(v, (w) => w === !1, e.scrollToError), g = m > -1;
          if (g) {
            const w = (f = t[m].instance.proxy) == null ? void 0 : f.$el;
            i(w);
          }
          return !g;
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
      n: GP,
      handleSubmit: l,
      handleReset: s,
      validate: u,
      reset: c,
      resetValidation: d
    };
  }
});
Jm.render = ZP;
var Pt = Jm;
Pt.useValidation = Un;
Pt.useForm = Hn;
ae(Pt);
le(Pt, Zm);
const aI = Pt;
var rs = Pt;
const Qm = {
  highlighter: Object,
  theme: String,
  tag: {
    type: String,
    default: "div"
  }
}, { name: JP, n: QP } = ne("highlighter-provider"), _P = ee({
  name: JP,
  props: Qm,
  setup(e, { slots: n }) {
    const o = I(() => e.highlighter), t = I(() => e.theme);
    return TC({ highlighter: o, theme: t }), () => _t(
      e.tag,
      {
        class: QP()
      },
      C(n.default)
    );
  }
});
var hi = _P;
ae(hi);
le(hi, Qm);
const iI = hi;
var as = hi;
const _m = {
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
}, { name: xP, n: eO, classes: nO } = ne("image"), oO = ["alt", "title", "referrerpolicy", "lazy-loading", "lazy-error"], tO = ["alt", "title", "referrerpolicy", "src"];
function rO(e, n) {
  var o;
  const t = Ye("lazy"), r = Ye("ripple");
  return Ve((h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: G({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        borderRadius: e.toSizeUnit(e.radius)
      })
    },
    [
      e.lazy && !e.showErrorSlot ? Ve((h(), S("img", {
        key: 0,
        role: "img",
        class: p(e.n("image")),
        alt: e.alt,
        title: e.title,
        referrerpolicy: e.referrerpolicy,
        "lazy-loading": e.loading,
        "lazy-error": e.error,
        style: G({ objectFit: e.fit, objectPosition: e.position }),
        onLoad: n[0] || (n[0] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, oO)), [
        [t, (o = e.src) != null ? o : ""]
      ]) : X("v-if", !0),
      !e.lazy && !e.showErrorSlot ? (h(), S("img", {
        key: 1,
        role: "img",
        class: p(e.n("image")),
        alt: e.alt,
        title: e.title,
        referrerpolicy: e.referrerpolicy,
        style: G({ objectFit: e.fit, objectPosition: e.position }),
        src: e.src,
        onLoad: n[2] || (n[2] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onError: n[3] || (n[3] = (...a) => e.handleError && e.handleError(...a)),
        onClick: n[4] || (n[4] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, tO)) : X("v-if", !0),
      e.showErrorSlot ? F(e.$slots, "error", { key: 2 }) : X("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: !e.ripple }]
  ]);
}
const xm = ee({
  name: xP,
  directives: {
    Lazy: Wt,
    Ripple: tn
  },
  props: _m,
  setup(e, { slots: n }) {
    const o = k(!1);
    pe(
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
      n: eO,
      classes: nO,
      toSizeUnit: ze,
      handleLoad: r,
      handleError: t,
      handleClick: a
    };
  }
});
xm.render = rO;
var gi = xm;
ae(gi);
le(gi, _m);
const lI = gi;
var is = gi;
const zu = {
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
const aO = 250, iO = 20, { name: lO, n: zd, classes: sO } = ne("swipe"), uO = ["onClick"];
function cO(e, n) {
  const o = _("var-icon"), t = _("var-button"), r = Ye("hover");
  return Ve((h(), S(
    "div",
    {
      class: p(e.n()),
      ref: "swipeEl"
    },
    [
      R(
        "div",
        {
          class: p(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
          style: G({
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
          F(e.$slots, "default")
        ],
        38
        /* CLASS, STYLE, NEED_HYDRATION */
      ),
      e.navigation ? F(e.$slots, "prev", Eo(je({ key: 0 }, {
        index: e.index,
        length: e.length,
        prev: e.prev,
        next: e.next,
        to: e.to,
        hovering: e.hovering
      })), () => [
        q(_e, {
          name: e.getNavigationAnimation("prev")
        }, {
          default: ce(() => [
            e.navigation === !0 || e.hovering ? (h(), S(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("navigation"), e.n("navigation-prev"), [e.vertical, e.n("--navigation-vertical-prev")]))
              },
              [
                q(t, {
                  "var-swipe-cover": "",
                  disabled: !e.loop && e.index === 0,
                  class: p(e.n("navigation-prev-button")),
                  onClick: n[3] || (n[3] = (a) => e.prev())
                }, {
                  default: ce(() => [
                    q(o, {
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
      e.navigation ? F(e.$slots, "next", Eo(je({ key: 1 }, {
        index: e.index,
        length: e.length,
        hovering: e.hovering,
        prev: e.prev,
        next: e.next,
        to: e.to
      })), () => [
        q(_e, {
          name: e.getNavigationAnimation("next")
        }, {
          default: ce(() => [
            e.navigation === !0 || e.hovering ? (h(), S(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("navigation"), e.n("navigation-next"), [e.vertical, e.n("--navigation-vertical-next")]))
              },
              [
                q(t, {
                  "var-swipe-cover": "",
                  class: p(e.n("navigation-next-button")),
                  disabled: !e.loop && e.index === e.length - 1,
                  onClick: n[4] || (n[4] = (a) => e.next())
                }, {
                  default: ce(() => [
                    q(o, {
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
      F(e.$slots, "indicator", Eo(er({
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
            class: p(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
          },
          [
            (h(!0), S(
              Ae,
              null,
              qe(e.length, (a, i) => (h(), S("div", {
                class: p(
                  e.classes(e.n("indicator"), [e.index === i, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])
                ),
                style: G({ background: e.indicatorColor }),
                key: a,
                onClick: (l) => e.to(i)
              }, null, 14, uO))),
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
const eh = ee({
  name: lO,
  directives: { Hover: Dn },
  components: { VarButton: Bn, VarIcon: Ge },
  props: zu,
  setup(e) {
    const n = k(null), o = k(0), t = I(() => e.vertical), r = k(0), a = k(0), i = k(!1), l = k(0), s = k(!1), { swipeItems: u, bindSwipeItems: c, length: d } = Zy(), { swipeResizeListeners: f, bindSwipeResizeListeners: v } = Jy(), { popup: m, bindPopup: g } = up(), {
      deltaX: w,
      deltaY: $,
      moveX: y,
      moveY: b,
      offsetX: P,
      offsetY: T,
      touching: O,
      direction: B,
      startTime: A,
      startTouch: N,
      moveTouch: E,
      endTouch: z
    } = $t(), M = I(() => B.value === (e.vertical ? "vertical" : "horizontal"));
    let Y = !1, H = -1;
    c({
      size: o,
      currentIndex: l,
      vertical: t
    }), We(() => window, "keydown", Ue), C(g, null), C(v, null), pe(
      () => d.value,
      () => nt(this, null, function* () {
        yield bn(), W(), Ne();
      })
    ), m && pe(
      () => m.show.value,
      (me) => nt(this, null, function* () {
        me ? (yield bn(), Ne()) : re();
      })
    ), Fo(Ne), ar(re), lo(Ne);
    function D(me) {
      return u.find(({ index: Ke }) => Ke.value === me);
    }
    function Q() {
      e.loop && (a.value >= 0 && D(d.value - 1).setTranslate(-r.value), a.value <= -(r.value - o.value) && D(0).setTranslate(r.value), a.value > -(r.value - o.value) && a.value < 0 && (D(d.value - 1).setTranslate(0), D(0).setTranslate(0)));
    }
    function Z(me) {
      const Ke = Tn(me) ? me : Math.floor((a.value - o.value / 2) / -o.value), { loop: te } = e;
      return Ke <= -1 ? te ? -1 : 0 : Ke >= d.value ? te ? d.value : d.value - 1 : Ke;
    }
    function oe(me) {
      const { loop: Ke } = e;
      return me === -1 ? Ke ? d.value - 1 : 0 : me === d.value ? Ke ? 0 : d.value - 1 : me;
    }
    function ye(me) {
      return e.loop ? me < 0 ? d.value + me : me >= d.value ? me - d.value : me : $n(me, 0, d.value - 1);
    }
    function Oe() {
      return nt(this, null, function* () {
        const me = a.value >= o.value, Ke = a.value <= -r.value, te = 0, de = -(r.value - o.value);
        i.value = !0, (me || Ke) && (i.value = !0, a.value = Ke ? te : de, D(0).setTranslate(0), D(d.value - 1).setTranslate(0)), yield bn(), i.value = !1;
      });
    }
    function W() {
      Y || (l.value = ye(j(e.initialIndex)), Y = !0);
    }
    function J() {
      const { autoplay: me } = e;
      !me || d.value <= 1 || (re(), H = window.setTimeout(() => {
        rn(), J();
      }, j(me)));
    }
    function re() {
      H && clearTimeout(H);
    }
    function fe(me) {
      return nt(this, null, function* () {
        d.value <= 1 || !e.touchable || (N(me), re(), yield Oe(), i.value = !0);
      });
    }
    function V(me) {
      const { touchable: Ke, vertical: te } = e;
      !O.value || !Ke || (E(me), M.value && (Me(me), a.value += te ? b.value : y.value, Q()));
    }
    function K() {
      if (!O.value || (z(), !M.value))
        return;
      const { vertical: me, onChange: Ke } = e, te = me ? $.value < 0 : w.value < 0, de = me ? T.value : P.value, Be = performance.now() - A.value <= aO && de >= iO ? Z(te ? l.value + 1 : l.value - 1) : Z();
      i.value = !1, a.value = Be * -o.value;
      const Qe = l.value;
      l.value = oe(Be), J(), Qe !== l.value && C(Ke, l.value);
    }
    function ve(me) {
      e.navigation === "hover" && (s.value = me);
    }
    function Se(me) {
      return e.navigation !== "hover" ? "" : zd(`--navigation${e.vertical ? "-vertical" : ""}-${me}-animation`);
    }
    function Ue(me) {
      if (!u.length || u.findIndex(({ isFocusing: de }) => de.value) === -1)
        return;
      const { key: te } = me;
      Me(me), te === "ArrowLeft" && un(), te === "ArrowRight" && rn();
    }
    function Ne() {
      n.value && (i.value = !0, o.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, r.value = o.value * d.value, a.value = l.value * -o.value, u.forEach((me) => {
        me.setTranslate(0);
      }), J(), setTimeout(() => {
        i.value = !1;
      }), f.forEach(({ onResize: me }) => {
        me();
      }));
    }
    function rn(me) {
      return nt(this, null, function* () {
        if (d.value <= 1)
          return;
        W();
        const { loop: Ke, onChange: te } = e, de = l.value;
        if (l.value = ye(de + 1), (me == null ? void 0 : me.event) !== !1 && C(te, l.value), yield Oe(), de === d.value - 1 && Ke) {
          D(0).setTranslate(r.value), a.value = d.value * -o.value;
          return;
        }
        de !== d.value - 1 && (a.value = l.value * -o.value);
      });
    }
    function un(me) {
      return nt(this, null, function* () {
        if (d.value <= 1)
          return;
        W();
        const { loop: Ke, onChange: te } = e, de = l.value;
        if (l.value = ye(de - 1), (me == null ? void 0 : me.event) !== !1 && C(te, l.value), yield Oe(), de === 0 && Ke) {
          D(d.value - 1).setTranslate(-r.value), a.value = o.value;
          return;
        }
        de !== 0 && (a.value = l.value * -o.value);
      });
    }
    function Pn(me, Ke) {
      if (d.value <= 1 || me === l.value)
        return;
      me = me < 0 ? 0 : me, me = me >= d.value ? d.value : me;
      const te = me > l.value ? rn : un, de = Math.abs(me - l.value);
      Array.from({ length: de }).forEach((ke, Be) => {
        te({ event: Be === de - 1 ? Ke == null ? void 0 : Ke.event : !1 });
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
      n: zd,
      toSizeUnit: ze,
      classes: sO,
      handleTouchstart: fe,
      handleTouchmove: V,
      handleTouchend: K,
      next: rn,
      prev: un,
      to: Pn,
      resize: Ne,
      toNumber: j,
      handleHovering: ve,
      getNavigationAnimation: Se
    };
  }
});
eh.render = cO;
var bi = eh;
ae(bi);
le(bi, zu);
const sI = bi;
var qt = bi;
function dO() {
  const { bindParent: e, index: n, parentProvider: o } = wn(Rp);
  return Ln(!!e, "SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: o,
    bindSwipe: e
  };
}
const { name: fO, n: pO } = ne("swipe-item"), vO = ["aria-hidden"];
function mO(e, n) {
  return h(), S("div", {
    class: p(e.n()),
    style: G({
      width: e.vertical ? void 0 : e.toSizeUnit(e.size),
      height: e.vertical ? e.toSizeUnit(e.size) : void 0,
      transform: `translate${e.vertical ? "Y" : "X"}(${e.toSizeUnit(e.translate)})`
    }),
    tabindex: "-1",
    "aria-hidden": e.currentIndex !== e.index,
    onFocus: n[0] || (n[0] = (o) => e.isFocusing = !0),
    onBlur: n[1] || (n[1] = (o) => e.isFocusing = !1)
  }, [
    F(e.$slots, "default")
  ], 46, vO);
}
const nh = ee({
  name: fO,
  setup() {
    const e = k(0), n = k(!1), { swipe: o, bindSwipe: t, index: r } = dO(), { size: a, currentIndex: i, vertical: l } = o, s = {
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
      n: pO,
      toSizeUnit: ze
    };
  }
});
nh.render = mO;
var Tu = nh;
ae(Tu);
const uI = Tu;
var Xt = Tu, hO = Object.defineProperty, Td = Object.getOwnPropertySymbols, gO = Object.prototype.hasOwnProperty, bO = Object.prototype.propertyIsEnumerable, Ed = (e, n, o) => n in e ? hO(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Bd = (e, n) => {
  for (var o in n || (n = {}))
    gO.call(n, o) && Ed(e, o, n[o]);
  if (Td)
    for (var o of Td(n))
      bO.call(n, o) && Ed(e, o, n[o]);
  return e;
};
const oh = Bd(Bd({
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
}, De(zu, ["loop", "indicator", "onChange"])), De(St, [
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
])), { name: yO, n: Id, classes: wO } = ne("image-preview"), sl = 12, Dd = 200, kO = 350, Ad = 200, $O = 500, Or = 1, CO = ["onTouchstart"], SO = ["src", "alt"];
function PO(e, n) {
  const o = _("var-swipe-item"), t = _("var-swipe"), r = _("var-icon"), a = _("var-popup");
  return h(), we(a, {
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
    default: ce(() => [
      q(t, je({
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
            Ae,
            null,
            qe(e.images, (i, l) => (h(), we(o, {
              class: p(e.n("swipe-item")),
              "var-image-preview-cover": "",
              key: i
            }, {
              default: ce(() => [
                R("div", {
                  class: p(e.n("zoom-container")),
                  style: G({
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
                  }, null, 10, SO)
                ], 46, CO)
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["class"]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        indicator: ce(({ index: i, length: l }) => [
          F(e.$slots, "indicator", {
            index: i,
            length: l
          }, () => [
            e.indicator && e.images.length > 1 ? (h(), S(
              "div",
              {
                key: 0,
                class: p(e.n("indicators"))
              },
              se(i + 1) + " / " + se(l),
              3
              /* TEXT, CLASS */
            )) : X("v-if", !0)
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]),
      F(e.$slots, "close-icon", {}, () => [
        e.closeable ? (h(), we(r, {
          key: 0,
          class: p(e.n("close-icon")),
          name: "close-circle",
          "var-image-preview-cover": "",
          onClick: e.close
        }, null, 8, ["class", "onClick"])) : X("v-if", !0)
      ]),
      e.$slots.extra ? (h(), S(
        "div",
        {
          key: 0,
          class: p(e.n("extra"))
        },
        [
          F(e.$slots, "extra")
        ],
        2
        /* CLASS */
      )) : X("v-if", !0)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "transition", "close-on-key-escape", "lock-scroll", "teleport", "show", "onOpen", "onClose", "onClosed", "onOpened", "onKeyEscape", "onRouteChange"]);
}
const th = ee({
  name: yO,
  components: {
    VarSwipe: qt,
    VarSwipeItem: Xt,
    VarPopup: Mo,
    VarIcon: Ge
  },
  inheritAttrs: !1,
  props: oh,
  setup(e) {
    const n = Gn(e, "show"), o = k(1), t = k(0), r = k(0), a = k(), i = k(), l = k(!0), s = k(null), { moveX: u, moveY: c, distance: d, startTime: f, startTouch: v, moveTouch: m, endTouch: g } = $t(), w = I(() => {
      const { imagePreventDefault: W, show: J } = e;
      return J && W;
    });
    let $ = null, y = null, b = !1;
    const P = {
      start: null,
      prev: null
    };
    We(() => document, "contextmenu", Q);
    function T(W) {
      o.value = j(W), l.value = !1, P.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, Ad);
    }
    function O() {
      o.value = 1, t.value = 0, r.value = 0, l.value = !0, P.prev = null, a.value = void 0, i.value = void 0;
    }
    function B(W) {
      return P.prev ? d.value <= sl && performance.now() - f.value <= Dd && P.prev === W : !1;
    }
    function A(W) {
      return !W || !P.start || !P.prev ? !1 : d.value <= sl && performance.now() - f.value < kO && (W === P.start || W.parentNode === P.start);
    }
    function N() {
      g(), window.clearTimeout(y), b = !1, P.start = null;
    }
    function E(W) {
      if (g(), window.clearTimeout(y), b) {
        b = !1;
        return;
      }
      const J = A(W.target);
      $ = window.setTimeout(() => {
        J && D(), P.start = null;
      }, Dd);
    }
    function z(W, J) {
      window.clearTimeout($), window.clearTimeout(y);
      const re = W.currentTarget;
      if (P.start = re, y = window.setTimeout(() => {
        b = !0, C(e.onLongPress, J);
      }, $O), B(re)) {
        o.value > Or ? O() : T(e.zoom);
        return;
      }
      v(W), P.prev = re;
    }
    function M(W) {
      const { offsetWidth: J, offsetHeight: re } = W, { naturalWidth: fe, naturalHeight: V } = W.querySelector(`.${Id("image")}`);
      return {
        width: J,
        height: re,
        imageRadio: V / fe,
        rootRadio: re / J,
        zoom: j(e.zoom)
      };
    }
    function Y(W) {
      const { zoom: J, imageRadio: re, rootRadio: fe, width: V, height: K } = M(W);
      if (!re)
        return 0;
      const ve = re > fe ? K / re : V;
      return Math.max(0, (J * ve - V) / 2) / J;
    }
    function H(W) {
      const { zoom: J, imageRadio: re, rootRadio: fe, width: V, height: K } = M(W);
      if (!re)
        return 0;
      const ve = re > fe ? K : V * re;
      return Math.max(0, (J * ve - K) / 2) / J;
    }
    function U(W) {
      if (!P.prev)
        return;
      m(W);
      const J = W.currentTarget;
      if (d.value > sl && window.clearTimeout(y), o.value > Or) {
        const re = Y(J), fe = H(J);
        t.value = $n(t.value + u.value, -re, re), r.value = $n(r.value + c.value, -fe, fe);
      }
      P.prev = J;
    }
    function D() {
      if (o.value > Or) {
        O(), setTimeout(() => C(e["onUpdate:show"], !1), Ad);
        return;
      }
      C(e["onUpdate:show"], !1);
    }
    function Q(W) {
      w.value && Me(W);
    }
    function Z(W) {
      var J;
      (J = s.value) == null || J.prev(W);
    }
    function oe(W) {
      var J;
      (J = s.value) == null || J.next(W);
    }
    function ye(W, J) {
      var re;
      (re = s.value) == null || re.to(W, J);
    }
    function Oe(W) {
      W <= Or ? O() : T(W);
    }
    return {
      swipeRef: s,
      isPreventDefault: w,
      show: n,
      scale: o,
      translateX: t,
      translateY: r,
      canSwipe: l,
      transitionTimingFunction: a,
      transitionDuration: i,
      n: Id,
      classes: wO,
      toNumber: j,
      handleTouchstart: z,
      handleTouchmove: U,
      handleTouchend: E,
      handleTouchcancel: N,
      close: D,
      prev: Z,
      next: oe,
      to: ye,
      zoom: Oe
    };
  }
});
th.render = PO;
var vr = th, OO = Object.defineProperty, zO = Object.defineProperties, TO = Object.getOwnPropertyDescriptors, Md = Object.getOwnPropertySymbols, EO = Object.prototype.hasOwnProperty, BO = Object.prototype.propertyIsEnumerable, Nd = (e, n, o) => n in e ? OO(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, zr = (e, n) => {
  for (var o in n || (n = {}))
    EO.call(n, o) && Nd(e, o, n[o]);
  if (Md)
    for (var o of Md(n))
      BO.call(n, o) && Nd(e, o, n[o]);
  return e;
}, Vd = (e, n) => zO(e, TO(n));
let Oo, Nt = {};
function IO(e = {}) {
  return sn(e) ? Vd(zr({}, Nt), { images: [e] }) : Fe(e) ? Vd(zr({}, Nt), { images: e }) : zr(zr({}, Nt), e);
}
function Wo(e) {
  if (!no())
    return;
  Wo.close();
  const n = IO(e), o = xe(n);
  o.teleport = "body", Oo = o;
  const { unmountInstance: t } = Ct(vr, o, {
    onClose: () => C(o.onClose),
    onClosed: () => {
      C(o.onClosed), t(), Oo === o && (Oo = null);
    },
    onRouteChange: () => {
      t(), Oo === o && (Oo = null);
    },
    "onUpdate:show": (r) => {
      o.show = r;
    }
  });
  o.show = !0;
}
Wo.close = () => {
  if (Oo != null) {
    const e = Oo;
    Oo = null, He().then(() => {
      e.show = !1;
    });
  }
};
Wo.setDefaultOptions = (e) => {
  Nt = e;
};
Wo.resetDefaultOptions = () => {
  Nt = {};
};
Wo.Component = vr;
ae(vr);
ae(vr, Wo);
le(Wo, oh);
const cI = vr;
var Gt = Wo;
const rh = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function DO() {
  const { bindChildren: e, length: n, childProviders: o } = kn(
    rh
  );
  return {
    length: n,
    indexAnchors: o,
    bindIndexAnchors: e
  };
}
function AO() {
  const { parentProvider: e, index: n, bindParent: o } = wn(
    rh
  );
  return Ln(!!o, "IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: o
  };
}
const ah = {
  index: [Number, String]
}, { name: MO, n: NO, classes: VO } = ne("index-anchor");
function RO(e, n) {
  return h(), we(kt(e.sticky ? e.n("$-sticky") : e.Transition), {
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode,
    ref: "anchorEl"
  }, {
    default: ce(() => [
      R(
        "div",
        je({
          class: e.n()
        }, e.$attrs),
        [
          F(e.$slots, "default", {}, () => [
            Ie(
              se(e.name),
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
const ih = ee({
  name: MO,
  components: { VarSticky: yt },
  inheritAttrs: !1,
  props: ah,
  setup(e) {
    const n = k(!1), o = I(() => e.index), t = k(null), { index: r, indexBar: a, bindIndexBar: i } = AO(), { active: l, sticky: s, cssMode: u, stickyOffsetTop: c, zIndex: d } = a;
    i({
      index: r,
      name: o,
      setDisabled: m,
      getOffsetTop: v
    });
    function v() {
      return t.value ? t.value.$el ? t.value.$el.offsetTop : t.value.offsetTop : 0;
    }
    function m(g) {
      n.value = g;
    }
    return {
      n: NO,
      classes: VO,
      name: o,
      anchorEl: t,
      active: l,
      sticky: s,
      zIndex: d,
      disabled: n,
      cssMode: u,
      stickyOffsetTop: c,
      Transition: _e
    };
  }
});
ih.render = RO;
var yi = ih;
ae(yi);
le(yi, ah);
const dI = yi;
var ls = yi;
const lh = {
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
var Rd = (e, n, o) => new Promise((t, r) => {
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
const { name: LO, n: FO, classes: UO } = ne("index-bar"), HO = ["onClick"];
function jO(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.n()),
      ref: "barEl"
    },
    [
      F(e.$slots, "default"),
      R(
        "ul",
        {
          class: p(e.n("anchor-list")),
          style: G({ zIndex: e.toNumber(e.zIndex) + 2, display: e.hideList ? "none" : "block" })
        },
        [
          (h(!0), S(
            Ae,
            null,
            qe(e.anchorNameList, (o) => (h(), S("li", {
              key: o,
              class: p(e.classes(e.n("anchor-item"), [e.active === o, e.n("anchor-item--active")])),
              style: G({ color: e.active === o && e.highlightColor ? e.highlightColor : void 0 }),
              onClick: (t) => e.anchorClick({ anchorName: o, manualCall: !0 })
            }, [
              F(e.$slots, "anchor-name", { anchorName: o }, () => [
                Ie(
                  se(o),
                  1
                  /* TEXT */
                )
              ])
            ], 14, HO))),
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
const sh = ee({
  name: LO,
  props: lh,
  setup(e) {
    const n = k(""), o = k(null), t = k([]), r = k(), a = I(() => e.sticky), i = I(() => e.stickyCssMode), l = I(() => en(e.stickyOffsetTop)), s = I(() => e.zIndex), { length: u, indexAnchors: c, bindIndexAnchors: d } = DO();
    let f = null, v = !1;
    const m = {
      active: r,
      sticky: a,
      cssMode: i,
      stickyOffsetTop: l,
      zIndex: s
    };
    pe(
      () => u.value,
      () => Rd(this, null, function* () {
        yield bn(), t.value = c.filter(({ name: O }) => O.value != null).map(({ name: O }) => O.value);
      })
    ), yn(b), da(P), wt(() => {
      v = !0, P();
    }), Fo(() => {
      !v || r.value === void 0 || (y({
        anchorName: r.value,
        options: { event: !1 }
      }), v = !1);
    }), d(m);
    function g(O, B) {
      const A = Rn(O) ? O.name.value : O;
      A === r.value || A === void 0 || (r.value = A, (B == null ? void 0 : B.event) !== !1 && C(e.onChange, A));
    }
    function w() {
      const { top: O } = nn(f), { top: B } = nn(o.value);
      return go(f) - O + B;
    }
    function $() {
      const O = go(f), B = f === window ? document.body.scrollHeight : f.scrollHeight, A = w();
      c.forEach((N, E) => {
        const z = N.getOffsetTop(), M = O - z + l.value - A, Y = E === c.length - 1 ? B : c[E + 1].getOffsetTop() - N.getOffsetTop();
        N.setDisabled(!0), M >= 0 && M < Y && n.value === "" && (N.setDisabled(!1), g(N));
      });
    }
    function y(O) {
      return Rd(this, arguments, function* ({ anchorName: B, manualCall: A = !1, options: N }) {
        if (A && C(e.onClick, B), B === r.value && !v)
          return;
        const E = c.find(({ name: U }) => B === U.value);
        if (!E)
          return;
        const z = w(), Y = E.getOffsetTop() - l.value + z, H = rr(f);
        n.value = B, g(B, N), yield Rt(f, {
          left: H,
          top: Y,
          animation: sv,
          duration: j(e.duration)
        }), yield bn(), n.value = "";
      });
    }
    function b() {
      f = No(o.value), f.addEventListener("scroll", $);
    }
    function P() {
      f && f.removeEventListener("scroll", $);
    }
    function T(O, B) {
      Ao(() => y({ anchorName: O, options: B }));
    }
    return {
      barEl: o,
      active: r,
      zIndex: s,
      anchorNameList: t,
      n: FO,
      classes: UO,
      toNumber: j,
      scrollTo: T,
      anchorClick: y
    };
  }
});
sh.render = jO;
var wi = sh;
ae(wi);
le(wi, lh);
const fI = wi;
var ss = wi;
const uh = {
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
}, { name: YO, n: WO, classes: KO } = ne("link");
function qO(e, n) {
  return h(), we(kt(e.tag), je(e.linkProps, {
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
      F(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "style", "onClick"]);
}
const ch = ee({
  name: YO,
  props: uh,
  setup(e) {
    const n = k(!1), o = I(() => {
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
      inMobile: Vt,
      n: WO,
      classes: KO,
      handleClick: r,
      toSizeUnit: ze
    };
  }
});
ch.render = qO;
var ki = ch;
ae(ki);
le(ki, uh);
const pI = ki;
var us = ki;
const dh = {
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
}, fh = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function XO() {
  const { bindChildren: e, childProviders: n, length: o } = kn(
    fh
  );
  return {
    length: o,
    tabItemList: n,
    bindTabItem: e
  };
}
const ph = Symbol("TAB_ITEM_BIND_LIST_KEY");
function GO() {
  const { parentProvider: e, bindParent: n, index: o } = wn(
    fh
  );
  return Ln(!!n, "TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: o,
    tabsItems: e,
    bindTabsItems: n
  };
}
function ZO() {
  const { childProviders: e, bindChildren: n, length: o } = kn(ph);
  return {
    length: o,
    lists: e,
    bindLists: n
  };
}
function JO() {
  const { parentProvider: e, bindParent: n, index: o } = wn(ph);
  return {
    index: o,
    tabItem: e,
    bindTabItem: n
  };
}
var QO = (e, n, o) => new Promise((t, r) => {
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
const { name: _O, n: xO, classes: e4 } = ne("list");
function n4(e, n) {
  const o = _("var-loading"), t = Ye("ripple");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [
      F(e.$slots, "default"),
      e.loading ? F(e.$slots, "loading", { key: 0 }, () => {
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
                se((r = e.loadingText) != null ? r : (e.pt ? e.pt : e.t)("listLoadingText")),
                3
                /* TEXT, CLASS */
              ),
              q(o, {
                size: "mini",
                radius: 10
              })
            ],
            2
            /* CLASS */
          )
        ];
      }) : X("v-if", !0),
      e.finished ? F(e.$slots, "finished", { key: 1 }, () => {
        var r;
        return [
          R(
            "div",
            {
              class: p(e.n("finished"))
            },
            se((r = e.finishedText) != null ? r : (e.pt ? e.pt : e.t)("listFinishedText")),
            3
            /* TEXT, CLASS */
          )
        ];
      }) : X("v-if", !0),
      e.error ? F(e.$slots, "error", { key: 2 }, () => {
        var r;
        return [
          Ve((h(), S(
            "div",
            {
              class: p(e.n("error")),
              onClick: n[0] || (n[0] = (...a) => e.load && e.load(...a))
            },
            [
              Ie(
                se((r = e.errorText) != null ? r : (e.pt ? e.pt : e.t)("listErrorText")),
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
      R(
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
const vh = ee({
  name: _O,
  directives: { Ripple: tn },
  components: { VarLoading: ht },
  props: dh,
  setup(e) {
    const n = k(null), o = k(null), { tabItem: t, bindTabItem: r } = JO(), { t: a } = so();
    let i;
    C(r, {}), t && pe(() => t.current.value, c), pe(() => [e.loading, e.error, e.finished], c), yn(() => {
      i = No(n.value), i.addEventListener("scroll", c), e.immediateCheck && c();
    }), ar(u);
    function l() {
      C(e["onUpdate:error"], !1), C(e["onUpdate:loading"], !0), C(e.onLoad);
    }
    function s() {
      const { bottom: d } = nn(i), { bottom: f } = nn(o.value);
      return Math.floor(f) - en(e.offset) <= d;
    }
    function u() {
      i && i.removeEventListener("scroll", c);
    }
    function c() {
      return QO(this, null, function* () {
        yield He(), !(e.loading || e.finished || e.error || (t == null ? void 0 : t.current.value) === !1 || !s()) && l();
      });
    }
    return {
      listEl: n,
      detectorEl: o,
      pt: a,
      t: an,
      isNumber: Tn,
      load: l,
      check: c,
      n: xO,
      classes: e4
    };
  }
});
vh.render = n4;
var $i = vh;
ae($i);
le($i, dh);
const vI = $i;
var cs = $i;
const o4 = {
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
  name: t4,
  classes: r4,
  n: Ld
} = ne("loading-bar");
var a4 = ee({
  name: t4,
  props: o4,
  setup(e) {
    return () => q("div", {
      class: r4(Ld(), [e.error, Ld("--error")]),
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
const Eu = 200;
let mh, hh, gh, bh, Ci, Fd, yh = {};
const i4 = {
  value: 0,
  opacity: 0,
  error: !1
}, ln = xe(i4);
function l4(e) {
  Object.assign(ln, e), yh = e;
}
const s4 = () => {
  Object.keys(yh).forEach((e) => {
    ln[e] !== void 0 && (ln[e] = void 0);
  });
}, wh = () => {
  Fd || (Fd = !0, Ct(a4, ln));
}, Bu = () => {
  mh = window.setTimeout(() => {
    ln.transitionDuration = void 0, !(ln.value >= 95) && (ln.value += ln.value < 70 ? Math.round(5 * Math.random()) : Math.random(), Bu());
  }, 200);
}, Iu = () => {
  window.clearTimeout(mh), window.clearTimeout(Ci), window.clearTimeout(gh), window.clearTimeout(hh), window.clearTimeout(bh);
}, kh = () => {
  Iu(), ln.value = 100, Ci = window.setTimeout(() => {
    ln.opacity = 0, bh = window.setTimeout(() => {
      ln.error = !1;
    }, 250);
  }, Eu + 100);
}, u4 = () => {
  Iu(), ln.error = !1, ln.value = 0, ln.transitionDuration = 0, wh(), Ci = window.setTimeout(() => {
    ln.opacity = 1;
  }, Eu), Bu();
}, c4 = () => {
  var e;
  gh = window.setTimeout(kh, (e = ln.finishDelay) != null ? e : 0);
}, d4 = () => {
  Iu(), ln.error = !0, ln.value === 100 && (ln.value = 0, ln.transitionDuration = 0), wh(), Ci = window.setTimeout(() => {
    ln.opacity = 1;
  }, Eu), Bu(), hh = window.setTimeout(kh, 300);
}, $h = {
  start: u4,
  finish: c4,
  error: d4,
  setDefaultOptions: l4,
  resetDefaultOptions: s4
}, mI = $h;
var ds = $h;
const Ch = {
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
var f4 = Object.defineProperty, p4 = Object.defineProperties, v4 = Object.getOwnPropertyDescriptors, Ud = Object.getOwnPropertySymbols, m4 = Object.prototype.hasOwnProperty, h4 = Object.prototype.propertyIsEnumerable, Hd = (e, n, o) => n in e ? f4(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, g4 = (e, n) => {
  for (var o in n || (n = {}))
    m4.call(n, o) && Hd(e, o, n[o]);
  if (Ud)
    for (var o of Ud(n))
      h4.call(n, o) && Hd(e, o, n[o]);
  return e;
}, b4 = (e, n) => p4(e, v4(n));
const { name: y4, n: w4 } = ne("locale-provider"), k4 = ee({
  name: y4,
  props: Ch,
  setup(e, { slots: n }) {
    const o = I(
      () => {
        var r;
        return Object.entries((r = e.messages) != null ? r : {}).reduce((a, [i, l]) => (a[i] = b4(g4({}, l), {
          lang: i
        }), a), {});
      }
    );
    Oy({
      t
    });
    function t(r) {
      if (Go(o.value, e.locale) && Go(o.value[e.locale], r))
        return o.value[e.locale][r];
    }
    return () => _t(
      e.tag,
      {
        class: w4()
      },
      C(n.default)
    );
  }
});
var Si = k4;
ae(Si);
le(Si, Ch);
const hI = Si;
var fs = Si;
const Sh = Symbol("SELECT_BIND_OPTION_KEY");
function $4() {
  const { length: e, childProviders: n, bindChildren: o } = kn(Sh);
  return {
    length: e,
    options: n,
    bindOptions: o
  };
}
function C4() {
  const { index: e, parentProvider: n, bindParent: o } = wn(Sh);
  return Ln(!!o, "Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: o
  };
}
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
}, { name: S4, n: P4, classes: O4 } = ne("option"), z4 = ["tabindex"];
function T4(e, n) {
  const o = _("var-checkbox"), t = _("maybe-v-node"), r = _("var-hover-overlay"), a = Ye("ripple"), i = Ye("hover");
  return Ve((h(), S("div", {
    ref: "root",
    class: p(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")])),
    style: G({
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
        style: G({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ),
    e.multiple ? (h(), we(o, {
      key: 0,
      ref: "checkbox",
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (l) => e.optionSelected = l),
      "checked-color": e.focusColor,
      disabled: e.disabled,
      onClick: n[1] || (n[1] = Xn(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, ["modelValue", "checked-color", "disabled", "onChange"])) : X("v-if", !0),
    F(e.$slots, "default", { selected: e.optionSelected }, () => [
      R(
        "div",
        {
          class: p(e.classes(e.n("text"), e.n("$--ellipsis")))
        },
        [
          q(t, { is: e.labelVNode }, null, 8, ["is"])
        ],
        2
        /* CLASS */
      )
    ]),
    q(r, {
      hovering: e.hovering && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 46, z4)), [
    [a, { disabled: e.disabled || !e.ripple }],
    [i, e.handleHovering, "desktop"]
  ]);
}
const Oh = ee({
  name: S4,
  directives: { Ripple: tn, Hover: Dn },
  components: {
    VarCheckbox: pt,
    VarHoverOverlay: Fn,
    MaybeVNode: ir
  },
  props: Ph,
  setup(e) {
    const n = k(), o = k(!1), t = k(!1), r = I(() => t.value), a = I(() => e.value), i = I(() => e.disabled), l = I(() => e.ripple), { select: s, bindSelect: u } = C4(), { multiple: c, focusColor: d, onSelect: f, computeLabel: v } = s, { hovering: m, handleHovering: g } = eo(), w = I(
      () => {
        var B;
        return mn(e.label) ? e.label(
          (B = e.option) != null ? B : {
            label: e.label,
            value: e.value,
            disabled: e.disabled
          },
          t.value
        ) : e.label;
      }
    ), $ = {
      label: w,
      value: a,
      disabled: i,
      ripple: l,
      selected: r,
      sync: O
    };
    pe([() => e.label, () => e.value], v), u($), We(() => window, "keydown", b), We(() => window, "keyup", P);
    function y() {
      e.disabled || T();
    }
    function b(B) {
      o.value && ((B.key === " " || B.key === "Enter") && Me(B), B.key === "Enter" && n.value.click());
    }
    function P(B) {
      o.value && B.key === " " && (Me(B), n.value.click());
    }
    function T() {
      c.value && (t.value = !t.value), f($);
    }
    function O(B) {
      t.value = B;
    }
    return {
      root: n,
      optionSelected: t,
      multiple: c,
      focusColor: d,
      hovering: m,
      isFocusing: o,
      labelVNode: w,
      n: P4,
      classes: O4,
      handleHovering: g,
      handleClick: y,
      handleSelect: T
    };
  }
});
Oh.render = T4;
var Pi = Oh;
ae(Pi);
le(Pi, Ph);
const gI = Pi;
var ua = Pi;
const zh = {
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
  name: E4,
  n: Tr
} = ne("overlay");
var Oi = ee({
  name: E4,
  inheritAttrs: !1,
  props: zh,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const {
      zIndex: t
    } = sr(() => e.show, 3), {
      onStackTop: r
    } = tu(() => e.show, t), {
      disabled: a
    } = xo();
    lr(() => e.show, () => e.lockScroll), We(() => window, "keydown", i);
    function i(c) {
      !r() || c.key !== "Escape" || !e.show || (C(e.onKeyEscape), e.closeOnKeyEscape && (Me(c), C(e["onUpdate:show"], !1)));
    }
    function l() {
      C(e.onClick), C(e["onUpdate:show"], !1);
    }
    function s() {
      return q("div", je({
        class: Tr(),
        style: {
          zIndex: t.value - 2
        }
      }, o), [q("div", {
        class: Tr("overlay"),
        style: {
          zIndex: t.value - 1
        },
        onClick: l
      }, null), q("div", {
        class: Tr("content"),
        style: {
          zIndex: t.value
        }
      }, [C(n.default)])]);
    }
    function u() {
      return q(_e, {
        name: Tr("--fade")
      }, {
        default: () => [e.show && s()]
      });
    }
    return () => {
      const {
        teleport: c
      } = e;
      return c ? q(io, {
        to: c,
        disabled: a.value
      }, {
        default: () => [u()]
      }) : u();
    };
  }
});
ae(Oi);
le(Oi, zh);
const bI = Oi;
var ps = Oi;
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
  onChange: L(),
  "onUpdate:current": L(),
  "onUpdate:size": L()
}, { name: B4, n: I4, classes: D4 } = ne("pagination"), A4 = ["item-mode", "onClick"];
function M4(e, n) {
  const o = _("var-icon"), t = _("var-input"), r = _("var-menu-option"), a = _("var-menu-select"), i = Ye("ripple");
  return h(), S(
    "ul",
    {
      class: p(e.n())
    },
    [
      Ve((h(), S(
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
          F(e.$slots, "prev", {}, () => [
            q(o, { name: "chevron-left" })
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
          class: p(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
        },
        [
          q(t, {
            "var-pagination-cover": "",
            hint: !1,
            disabled: e.disabled,
            modelValue: e.simpleCurrentValue,
            "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleCurrentValue = l),
            onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleCurrentValue, l)),
            onKeydown: n[3] || (n[3] = Nu((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
          }, null, 8, ["disabled", "modelValue"]),
          R("span", null, [
            Ie(
              " / " + se(e.pageCount) + " ",
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
      )) : (h(!0), S(
        Ae,
        { key: 1 },
        qe(e.pageList, (l, s) => Ve((h(), S("li", {
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
          Ie(
            se(l),
            1
            /* TEXT */
          )
        ], 10, A4)), [
          [i, { disabled: e.disabled }]
        ])),
        128
        /* KEYED_FRAGMENT */
      )),
      Ve((h(), S(
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
          F(e.$slots, "next", {}, () => [
            q(o, { name: "chevron-right" })
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
          class: p(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
        },
        [
          q(a, {
            placement: "cover-top",
            disabled: e.disabled,
            modelValue: e.size,
            "onUpdate:modelValue": n[5] || (n[5] = (l) => e.size = l)
          }, {
            options: ce(() => [
              (h(!0), S(
                Ae,
                null,
                qe(e.sizeOption, (l, s) => (h(), we(r, {
                  key: s,
                  value: l,
                  onClick: e.clickSize
                }, {
                  default: ce(() => [
                    Ie(
                      se(l) + se((e.pt ? e.pt : e.t)("paginationItem")) + " / " + se((e.pt ? e.pt : e.t)("paginationPage")),
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
              R(
                "div",
                {
                  class: p(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")]))
                },
                [
                  R(
                    "span",
                    null,
                    se(e.size) + se((e.pt ? e.pt : e.t)("paginationItem")) + " / " + se((e.pt ? e.pt : e.t)("paginationPage")),
                    1
                    /* TEXT */
                  ),
                  q(o, {
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
      e.showQuickJumper && !e.simple ? (h(), S(
        "li",
        {
          key: 3,
          class: p(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
        },
        [
          Ie(
            se((e.pt ? e.pt : e.t)("paginationJump")) + " ",
            1
            /* TEXT */
          ),
          q(t, {
            modelValue: e.quickJumperValue,
            "onUpdate:modelValue": n[6] || (n[6] = (l) => e.quickJumperValue = l),
            disabled: e.disabled,
            hint: !1,
            "var-pagination-cover": "",
            onBlur: n[7] || (n[7] = (l) => e.setPage("quick", e.quickJumperValue, l)),
            onKeydown: n[8] || (n[8] = Nu((l) => e.setPage("quick", e.quickJumperValue, l), ["enter"]))
          }, null, 8, ["modelValue", "disabled"])
        ],
        2
        /* CLASS */
      )) : X("v-if", !0),
      e.totalText ? (h(), S(
        "li",
        {
          key: 4,
          class: p(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
        },
        se(e.totalText),
        3
        /* TEXT, CLASS */
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Eh = ee({
  name: B4,
  components: {
    VarMenuSelect: Yt,
    VarMenuOption: vt,
    VarIcon: Ge,
    VarInput: Ft
  },
  directives: { Ripple: tn },
  props: Th,
  setup(e) {
    const n = k(""), o = k("1"), t = k(!1), r = k(!1), a = k(j(e.current) || 1), i = k(j(e.size) || 10), l = k([]), s = I(() => Math.ceil(e.maxPagerCount / 2)), u = I(() => Math.ceil(j(e.total) / j(i.value))), c = I(() => {
      const b = i.value * (a.value - 1) + 1, P = Math.min(i.value * a.value, j(e.total));
      return [b, P];
    }), d = I(() => e.showTotal ? e.showTotal(j(e.total), c.value) : ""), { t: f } = so();
    pe([() => e.current, () => e.size], ([b, P]) => {
      a.value = j(b) || 1, i.value = j(P || 10);
    }), pe(
      [a, i, u],
      ([b, P, T], [O, B]) => {
        let A = [];
        const { maxPagerCount: N, total: E, onChange: z } = e, M = Math.ceil(j(E) / j(B)), Y = T - (N - s.value) - 1;
        if (o.value = `${b}`, T - 2 > N) {
          if (O === void 0 || T !== M)
            for (let H = 2; H < N + 2; H++) A.push(H);
          if (b <= N && b < Y) {
            A = [];
            for (let H = 1; H < N + 1; H++)
              A.push(H + 1);
            t.value = !0, r.value = !1;
          }
          if (b > N && b < Y) {
            A = [];
            for (let H = 1; H < N + 1; H++)
              A.push(b + H - s.value);
            t.value = b === 2 && N === 1, r.value = !1;
          }
          if (b >= Y) {
            A = [];
            for (let H = 1; H < N + 1; H++)
              A.push(T - (N - H) - 1);
            t.value = !1, r.value = !0;
          }
          A = [1, "...", ...A, "...", T];
        } else
          for (let H = 1; H <= T; H++) A.push(H);
        l.value = A, O != null && T > 0 && C(z, b, P), C(e["onUpdate:current"], b), C(e["onUpdate:size"], P);
      },
      {
        immediate: !0
      }
    );
    function v(b, P) {
      return Tn(b) ? !1 : P === 1 ? t.value : r.value;
    }
    function m(b, P) {
      return Tn(b) ? "basic" : P === 1 ? "head" : "tail";
    }
    function g(b, P) {
      if (!(b === a.value || e.disabled)) {
        if (b === "...") {
          a.value = P === 1 ? Math.max(a.value - e.maxPagerCount, 1) : Math.min(a.value + e.maxPagerCount, u.value);
          return;
        }
        if (b === "prev") {
          a.value = $(a.value - 1);
          return;
        }
        if (b === "next") {
          a.value = $(a.value + 1);
          return;
        }
        Tn(b) && (a.value = b);
      }
    }
    function w() {
      const b = $(a.value);
      o.value = String(b), a.value = b;
    }
    function $(b) {
      return b > u.value ? u.value : b < 1 ? 1 : b;
    }
    function y(b, P, T) {
      T.target.blur();
      const O = $(j(P));
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
      n: I4,
      classes: D4,
      getMode: m,
      isHideEllipsis: v,
      clickItem: g,
      clickSize: w,
      setPage: y,
      toNumber: j,
      formatElevation: dn
    };
  }
});
Eh.render = M4;
var zi = Eh;
ae(zi);
le(zi, Th);
const yI = zi;
var vs = zi;
const Bh = {
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
}, { name: N4, n: V4, classes: R4 } = ne("paper");
function L4(e, n) {
  const o = Ye("ripple");
  return Ve((h(), S(
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
      style: G({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      }),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      F(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [o, { disabled: !e.ripple }]
  ]);
}
const Ih = ee({
  name: N4,
  directives: { Ripple: tn },
  props: Bh,
  setup(e) {
    function n(o) {
      C(e.onClick, o);
    }
    return {
      n: V4,
      classes: R4,
      formatElevation: dn,
      toSizeUnit: ze,
      handleClick: n
    };
  }
});
Ih.render = L4;
var Ti = Ih;
ae(Ti);
le(Ti, Bh);
const wI = Ti;
var ms = Ti, F4 = Object.defineProperty, jd = Object.getOwnPropertySymbols, U4 = Object.prototype.hasOwnProperty, H4 = Object.prototype.propertyIsEnumerable, Yd = (e, n, o) => n in e ? F4(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, j4 = (e, n) => {
  for (var o in n || (n = {}))
    U4.call(n, o) && Yd(e, o, n[o]);
  if (jd)
    for (var o of jd(n))
      H4.call(n, o) && Yd(e, o, n[o]);
  return e;
};
const Dh = j4({
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
}, De(St, [
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
])), { name: Y4, n: W4, classes: K4 } = ne("picker"), Wd = 300, q4 = 15, Kd = 200, X4 = 1e3;
let qd = 0;
const G4 = ["onTouchstartPassive", "onTouchmove", "onTouchend"], Z4 = ["onTransitionend"], J4 = ["onClick"];
function Q4(e, n) {
  const o = _("var-button");
  return h(), we(
    kt(e.dynamic ? e.n("$-popup") : e.Transition),
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
      default: ce(() => [
        R(
          "div",
          je({
            class: e.n()
          }, e.$attrs),
          [
            e.toolbar ? (h(), S(
              "div",
              {
                key: 0,
                class: p(e.n("toolbar"))
              },
              [
                F(e.$slots, "cancel", {}, () => [
                  q(o, {
                    class: p(e.n("cancel-button")),
                    "var-picker-cover": "",
                    text: "",
                    "text-color": e.cancelButtonTextColor,
                    onClick: e.cancel
                  }, {
                    default: ce(() => {
                      var t;
                      return [
                        Ie(
                          se((t = e.cancelButtonText) != null ? t : (e.pt ? e.pt : e.t)("pickerCancelButtonText")),
                          1
                          /* TEXT */
                        )
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }, 8, ["class", "text-color", "onClick"])
                ]),
                F(e.$slots, "title", {}, () => {
                  var t;
                  return [
                    R(
                      "div",
                      {
                        class: p(e.n("title"))
                      },
                      se((t = e.title) != null ? t : (e.pt ? e.pt : e.t)("pickerTitle")),
                      3
                      /* TEXT, CLASS */
                    )
                  ];
                }),
                F(e.$slots, "confirm", {}, () => [
                  q(o, {
                    class: p(e.n("confirm-button")),
                    text: "",
                    "var-picker-cover": "",
                    "text-color": e.confirmButtonTextColor,
                    onClick: e.confirm
                  }, {
                    default: ce(() => {
                      var t;
                      return [
                        Ie(
                          se((t = e.confirmButtonText) != null ? t : (e.pt ? e.pt : e.t)("pickerConfirmButtonText")),
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
            R(
              "div",
              {
                class: p(e.n("columns")),
                style: G({ height: `${e.columnHeight}px` })
              },
              [
                (h(!0), S(
                  Ae,
                  null,
                  qe(e.scrollColumns, (t) => (h(), S("div", {
                    class: p(e.n("column")),
                    key: t.id,
                    onTouchstartPassive: (r) => e.handleTouchstart(r, t),
                    onTouchmove: Xn((r) => e.handleTouchmove(r, t), ["prevent"]),
                    onTouchend: (r) => e.handleTouchend(t)
                  }, [
                    R("div", {
                      class: p(e.n("scroller")),
                      ref_for: !0,
                      ref: (r) => e.setScrollEl(r, t),
                      style: G({
                        transform: `translateY(${t.translate}px)`,
                        transitionDuration: `${t.duration}ms`,
                        transitionProperty: t.duration ? "transform" : "none"
                      }),
                      onTransitionend: (r) => e.handleTransitionend(t)
                    }, [
                      (h(!0), S(
                        Ae,
                        null,
                        qe(t.column, (r, a) => (h(), S("div", {
                          key: e.getValue(r),
                          class: p(e.classes(e.n("option"), r.className)),
                          style: G({ height: `${e.optionHeight}px` }),
                          onClick: (i) => e.handleClick(t, a)
                        }, [
                          R(
                            "div",
                            {
                              class: p(e.classes(e.n("text"), r.textClassName))
                            },
                            se(r[e.getOptionKey("text")]),
                            3
                            /* TEXT, CLASS */
                          )
                        ], 14, J4))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ], 46, Z4)
                  ], 42, G4))),
                  128
                  /* KEYED_FRAGMENT */
                )),
                R(
                  "div",
                  {
                    class: p(e.n("picked")),
                    style: G({
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
                    style: G({ backgroundSize: `100% ${(e.columnHeight - e.optionHeight) / 2}px` })
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
const Ah = ee({
  name: Y4,
  components: {
    VarButton: Bn,
    VarPopup: Mo
  },
  inheritAttrs: !1,
  props: Dh,
  setup(e) {
    const n = Gn(e, "modelValue"), o = k([]), t = I(() => j(e.columnsCount)), r = I(() => en(e.optionHeight)), a = I(() => en(e.optionCount)), i = I(() => a.value * r.value / 2 - r.value / 2), l = I(() => a.value * r.value), { prevY: s, moveY: u, dragging: c, startTouch: d, moveTouch: f, endTouch: v } = $t(), { t: m } = so();
    let g = [];
    B(), pe(() => e.columns, B, { deep: !0 }), pe(() => n.value, B);
    function w(V) {
      return {
        text: e.textKey,
        value: e.valueKey,
        children: e.childrenKey
      }[V];
    }
    function $(V) {
      var K;
      return (K = V[w("value")]) != null ? K : V[w("text")];
    }
    function y(V) {
      g = [...V];
    }
    function b(V) {
      return (e.columnsCount != null ? V.slice(0, t.value) : V).map((ve, Se) => {
        const Ue = {
          id: qd++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: i.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: ve,
          scrollEl: null,
          scrolling: !1
        }, Ne = n.value[Se], rn = Ue.column.findIndex((un) => Ne === $(un));
        return Ue.index = rn === -1 ? 0 : rn, H(Ue), Ue;
      });
    }
    function P(V) {
      const K = [];
      return T(K, V), K;
    }
    function T(V, K, ve = !0, Se = 1) {
      var Ue;
      if (K.length && (e.columnsCount == null || Se <= t.value)) {
        const Ne = {
          id: qd++,
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
        if (V.push(Ne), ve) {
          const rn = n.value[V.length - 1], un = K.findIndex((Pn) => rn === $(Pn));
          Ne.index = un === -1 ? 0 : un;
        }
        H(Ne), T(
          V,
          (Ue = Ne.column[Ne.index][w("children")]) != null ? Ue : [],
          ve,
          Se + 1
        );
      }
    }
    function O(V) {
      var K;
      o.value.splice(o.value.indexOf(V) + 1), T(
        o.value,
        (K = V.column[V.index][w("children")]) != null ? K : [],
        !1,
        o.value.length + 1
      );
    }
    function B() {
      o.value = e.cascade ? P(e.columns) : b(e.columns);
      const { indexes: V } = Y();
      y(V);
    }
    function A(V, K) {
      K.scrollEl = V;
    }
    function N(V) {
      C(e["onUpdate:show"], V);
    }
    function E(V) {
      const K = i.value - V.column.length * r.value, ve = r.value + i.value;
      V.translate = $n(V.translate, K, ve);
    }
    function z(V, K) {
      const ve = Math.round((i.value - K) / r.value);
      return zf(ve, V.column);
    }
    function M(V) {
      return V.translate = i.value - V.index * r.value, V.translate;
    }
    function Y() {
      const V = [], K = [], ve = [];
      return o.value.forEach(({ column: Se, index: Ue }) => {
        const Ne = Se[Ue];
        V.push($(Ne)), K.push(Ue), ve.push(Ne);
      }), {
        values: V,
        indexes: K,
        options: ve
      };
    }
    function H(V, K = 0) {
      M(V), V.duration = K;
    }
    function U(V, K, ve) {
      V.translate += Math.abs(K / ve) / 3e-3 * (K < 0 ? -1 : 1);
    }
    function D(V, K) {
      c.value || (V.index = K, H(V, Kd));
    }
    function Q(V, K) {
      K.touching = !0, K.translate = nl(K.scrollEl), d(V);
    }
    function Z(V, K) {
      if (!K.touching)
        return;
      f(V), K.scrolling = !1, K.duration = 0, K.prevY = s.value, K.translate += u.value, E(K);
      const ve = performance.now();
      ve - K.momentumTime > Wd && (K.momentumTime = ve, K.momentumPrevY = K.translate);
    }
    function oe(V) {
      v(), V.touching = !1, V.prevY = 0;
      const K = V.translate - V.momentumPrevY, ve = performance.now() - V.momentumTime, Se = Math.abs(K) >= q4 && ve <= Wd, Ue = V.translate;
      Se && U(V, K, ve), V.index = z(V, V.translate), H(V, Se ? X4 : Kd), V.scrolling = V.translate !== Ue, V.scrolling || W(V);
    }
    function ye(V) {
      V.scrolling = !1, W(V);
    }
    function Oe() {
      const { indexes: V } = Y();
      return V.every((K, ve) => K === g[ve]);
    }
    function W(V) {
      const { onChange: K, cascade: ve } = e;
      if (Oe())
        return;
      ve && O(V);
      const Se = o.value.some((Pn) => Pn.scrolling), Ue = o.value.some((Pn) => Pn.touching);
      if (Se || Ue)
        return;
      const { values: Ne, indexes: rn, options: un } = Y();
      y(rn), C(K, Ne, rn, un), n.value = Ne;
    }
    function J() {
      if (e.cascade) {
        const V = o.value.find((K) => K.scrolling);
        V && (V.index = z(V, nl(V.scrollEl)), V.scrolling = !1, H(V), O(V));
      } else
        o.value.forEach((V) => {
          V.index = z(V, nl(V.scrollEl)), H(V);
        });
    }
    function re() {
      J();
      const { values: V, indexes: K, options: ve } = Y();
      y(K), C(e.onConfirm, V, K, ve);
    }
    function fe() {
      J();
      const { values: V, indexes: K, options: ve } = Y();
      y(K), C(e.onCancel, V, K, ve);
    }
    return {
      optionHeight: r,
      optionCount: a,
      scrollColumns: o,
      columnHeight: l,
      center: i,
      Transition: _e,
      pt: m,
      t: an,
      n: W4,
      classes: K4,
      setScrollEl: A,
      getOptionKey: w,
      getValue: $,
      handlePopupUpdateShow: N,
      handleTouchstart: Q,
      handleTouchmove: Z,
      handleTouchend: oe,
      handleTransitionend: ye,
      confirm: re,
      cancel: fe,
      handleClick: D
    };
  }
});
Ah.render = Q4;
var mr = Ah;
let ut;
function Ot(e) {
  return new Promise((n) => {
    Ot.close();
    const o = Fe(e) ? { columns: e } : e, t = xe(o);
    t.dynamic = !0, t.teleport = "body", ut = t;
    function r() {
      ut === t && (ut = null);
    }
    const { unmountInstance: a } = Ct(mr, t, {
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
Ot.close = function() {
  if (ut == null)
    return;
  const e = ut;
  ut = null, He().then(() => {
    e.show = !1;
  });
};
Ot.Component = mr;
ae(mr);
ae(mr, Ot);
le(Ot, Dh);
const kI = mr;
var hs = Ot;
const Mh = {
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
}, ot = 100, Er = 0, uo = 20, Xd = 2 * Math.PI * uo, { name: _4, n: x4, classes: ez } = ne("progress"), nz = ["aria-valuenow"], oz = ["viewBox"], tz = { key: 0 }, rz = ["id"], az = ["offset", "stop-color"], iz = ["d", "stroke-width", "stroke-dasharray"], lz = ["d", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function sz(e, n) {
  return h(), S("div", {
    class: p(e.n()),
    role: "progressbar",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": e.indeterminate ? void 0 : e.mode === "linear" ? e.linearProps.value : e.circleProps.value
  }, [
    e.mode === "linear" ? (h(), S(
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
            style: G({ height: e.toSizeUnit(e.lineWidth), background: e.trackColor })
          },
          [
            e.indeterminate ? (h(), S(
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
                    style: G({ background: e.progressColor })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ),
                R(
                  "div",
                  {
                    class: p(e.classes(e.n(`linear--${e.type}`))),
                    style: G({ background: e.progressColor })
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
                class: p(e.classes(e.n("linear-certain"), e.n(`linear--${e.type}`))),
                style: G({ background: e.progressColor, width: e.linearProps.width })
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
            class: p(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
          },
          [
            F(e.$slots, "default", {}, () => [
              Ie(
                se(e.linearProps.roundValue),
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
    e.mode === "circle" ? (h(), S(
      "div",
      {
        key: 1,
        class: p(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
        style: G({ width: e.toSizeUnit(e.size), height: e.toSizeUnit(e.size) })
      },
      [
        (h(), S("svg", {
          class: p(e.n("circle-svg")),
          viewBox: e.circleProps.viewBox
        }, [
          e.isPlainObject(e.color) ? (h(), S("defs", tz, [
            R("linearGradient", {
              id: e.id,
              x1: "100%",
              y1: "0%",
              x2: "0%",
              y2: "0%"
            }, [
              (h(!0), S(
                Ae,
                null,
                qe(e.linearGradientProgress, (o, t) => (h(), S("stop", {
                  key: t,
                  offset: o,
                  "stop-color": e.color[o]
                }, null, 8, az))),
                128
                /* KEYED_FRAGMENT */
              ))
            ], 8, rz)
          ])) : X("v-if", !0),
          e.track ? (h(), S("path", {
            key: 1,
            class: p(e.n("circle-background")),
            d: e.circleProps.path,
            fill: "transparent",
            "stroke-width": e.circleProps.strokeWidth,
            "stroke-dasharray": e.CIRCUMFERENCE,
            style: G({
              stroke: e.trackColor
            })
          }, null, 14, iz)) : X("v-if", !0),
          R("path", {
            class: p(e.classes(e.n("circle-certain"), e.n(`circle--${e.type}`), [e.indeterminate, e.n("circle-overlay")])),
            d: e.circleProps.path,
            fill: "transparent",
            "stroke-width": e.circleProps.strokeWidth,
            "stroke-dasharray": e.CIRCUMFERENCE,
            "stroke-dashoffset": e.circleProps.strokeOffset,
            style: G({
              stroke: e.progressColor,
              transform: `rotateZ(${e.rotate}deg)`,
              transformOrigin: "50% 50%"
            })
          }, null, 14, lz)
        ], 10, oz)),
        e.label ? (h(), S(
          "div",
          {
            key: 0,
            class: p(e.classes(e.n("circle-label"), e.labelClass))
          },
          [
            F(e.$slots, "default", {}, () => [
              Ie(
                se(e.circleProps.roundValue),
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
  ], 10, nz);
}
const Nh = ee({
  name: _4,
  props: Mh,
  setup(e) {
    const n = np(), o = I(() => {
      const i = j(e.value), l = $n(i, Er, ot), s = $n(Math.round(i), Er, ot);
      return {
        width: `${l}%`,
        roundValue: `${s}%`,
        value: l
      };
    }), t = I(() => {
      const { size: i, lineWidth: l, value: s } = e, u = uo / (1 - en(l) / en(i)) * 2, c = `0 0 ${u} ${u}`, d = $n(Math.round(j(s)), Er, ot), f = `${(ot - d) / ot * Xd}`, v = en(l) / en(i) * u, m = 0, g = -uo, w = 0, $ = -2 * uo, y = `M ${u / 2} ${u / 2} m ${m} ${g} a ${uo} ${uo} 
        0 1 1 ${w} ${-$} a ${uo} ${uo} 0 1 1 ${-w} ${$}`;
      return {
        strokeWidth: v,
        viewBox: c,
        strokeOffset: f,
        roundValue: `${d}%`,
        path: y,
        value: $n(j(s), Er, ot)
      };
    }), r = I(() => Rn(e.color) ? `url(#${n.value})` : e.color), a = I(
      () => Object.keys(e.color).sort((i, l) => parseFloat(i) - parseFloat(l))
    );
    return {
      id: n,
      linearProps: o,
      CIRCUMFERENCE: Xd,
      RADIUS: uo,
      circleProps: t,
      progressColor: r,
      linearGradientProgress: a,
      n: x4,
      classes: ez,
      toSizeUnit: ze,
      isPlainObject: Rn
    };
  }
});
Nh.render = sz;
var Ei = Nh;
ae(Ei);
le(Ei, Mh);
const $I = Ei;
var gs = Ei;
const Vh = {
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
var Gd = (e, n, o) => new Promise((t, r) => {
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
const { name: uz, n: Zd, classes: cz } = ne("pull-refresh"), Jd = 150;
function dz(e, n) {
  const o = _("var-icon");
  return h(), S(
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
          style: G(e.controlStyle)
        },
        [
          q(o, {
            name: e.iconName,
            transition: e.ICON_TRANSITION,
            class: p(e.classes(e.n("icon"), [e.refreshStatus === "loading", e.n("animation")])),
            "var-pull-refresh-cover": ""
          }, null, 8, ["name", "transition", "class"])
        ],
        6
        /* CLASS, STYLE */
      ),
      F(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const Rh = ee({
  name: uz,
  components: { VarIcon: Ge },
  props: Vh,
  setup(e) {
    const n = k(0), o = k(null), t = k(null), r = k(0), a = k("-125%"), i = k("arrow-down"), l = k("default"), s = k(!1), u = I(() => Math.abs(2 * n.value)), c = I(() => l.value === "success"), d = I(
      () => l.value !== "loading" && l.value !== "success" && !e.disabled
    ), f = I(() => ({
      transform: `translate3d(0px, ${sn(a.value) ? a.value : `${a.value}px`}, 0px) translate(-50%, 0)`,
      transition: s.value ? `transform ${e.animationDuration}ms` : void 0,
      background: c.value ? e.successBgColor : e.bgColor,
      color: c.value ? e.successColor : e.color
    })), { startTouch: v, moveTouch: m, endTouch: g, isReachTop: w } = $t();
    let $, y;
    pe(
      () => e.modelValue,
      (E) => {
        E === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
          a.value = n.value, N();
        }, j(e.successDuration)));
      }
    ), yn(A), We(o, "touchmove", O);
    function b(E) {
      return Gd(this, null, function* () {
        if (i.value !== E)
          return i.value = E, new Promise((z) => {
            window.setTimeout(z, Jd);
          });
      });
    }
    function P(E) {
      ("classList" in $ ? $ : document.body).classList[E](`${Zd()}--lock`);
    }
    function T(E) {
      if (v(E), n.value === 0) {
        const { width: z } = nn(t.value);
        n.value = -(z + z * 0.25);
      }
      y = No(E.target);
    }
    function O(E) {
      if (m(E), !d.value || !y || y !== $ && go(y) > 0 || go($) > 0)
        return;
      w($) && Me(E), l.value !== "pulling" && (l.value = "pulling", r.value = E.touches[0].clientY), w($) && Tn(a.value) && a.value > n.value && P("add");
      const M = (E.touches[0].clientY - r.value) / 2 + n.value;
      a.value = M >= u.value ? u.value : M, b(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function B() {
      return Gd(this, null, function* () {
        g(), d.value && (s.value = !0, j(a.value) >= u.value * 0.2 ? (yield b("refresh"), l.value = "loading", a.value = u.value * 0.3, C(e["onUpdate:modelValue"], !0), He(() => {
          C(e.onRefresh);
        }), P("remove")) : (l.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          s.value = !1, P("remove");
        }, j(e.animationDuration))), y = null);
      });
    }
    function A() {
      $ = e.target ? cp(e.target, "PullRefresh") : No(o.value);
    }
    function N() {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, j(e.animationDuration));
    }
    return {
      ICON_TRANSITION: Jd,
      refreshStatus: l,
      freshNode: o,
      controlNode: t,
      iconName: i,
      controlStyle: f,
      isSuccess: c,
      n: Zd,
      classes: cz,
      handleTouchstart: T,
      handleTouchmove: O,
      handleTouchend: B
    };
  }
});
Rh.render = dz;
var Bi = Rh;
ae(Bi);
le(Bi, Vh);
const CI = Bi;
var bs = Bi;
const Lh = {
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
  onClick: L(),
  onChange: L(),
  "onUpdate:modelValue": L()
}, Fh = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function fz() {
  const { bindChildren: e, childProviders: n, length: o } = kn(
    Fh
  );
  return {
    length: o,
    radios: n,
    bindRadios: e
  };
}
function pz() {
  const { bindParent: e, parentProvider: n, index: o } = wn(Fh);
  return {
    index: o,
    radioGroup: n,
    bindRadioGroup: e
  };
}
const { name: vz, n: mz, classes: hz } = ne("radio"), gz = ["tabindex"];
function bz(e, n) {
  const o = _("var-icon"), t = _("var-hover-overlay"), r = _("var-form-details"), a = Ye("ripple"), i = Ye("hover");
  return h(), S(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      R(
        "div",
        je({
          class: e.n(),
          onClick: n[3] || (n[3] = (...l) => e.handleClick && e.handleClick(...l))
        }, e.$attrs),
        [
          Ve((h(), S("div", {
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
            style: G({ color: e.checked ? e.checkedColor : e.uncheckedColor }),
            onFocus: n[0] || (n[0] = (l) => e.isFocusing = !0),
            onBlur: n[1] || (n[1] = (l) => e.isFocusing = !1)
          }, [
            e.checked ? F(e.$slots, "checked-icon", { key: 0 }, () => [
              q(o, {
                class: p(e.n("icon")),
                "var-radio-cover": "",
                name: "radio-marked",
                size: e.iconSize
              }, null, 8, ["class", "size"])
            ]) : F(e.$slots, "unchecked-icon", { key: 1 }, () => [
              q(o, {
                class: p(e.n("icon")),
                "var-radio-cover": "",
                name: "radio-blank",
                size: e.iconSize
              }, null, 8, ["class", "size"])
            ]),
            q(t, {
              hovering: !e.disabled && !e.formDisabled && e.hovering,
              focusing: !e.disabled && !e.formDisabled && e.isFocusing
            }, null, 8, ["hovering", "focusing"])
          ], 46, gz)), [
            [a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }],
            [i, e.handleHovering, "desktop"]
          ]),
          e.$slots.default ? (h(), S(
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
              F(e.$slots, "default", { checked: e.checked })
            ],
            2
            /* CLASS */
          )) : X("v-if", !0)
        ],
        16
        /* FULL_PROPS */
      ),
      q(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Uh = ee({
  name: vz,
  directives: { Ripple: tn, Hover: Dn },
  components: {
    VarIcon: Ge,
    VarFormDetails: En,
    VarHoverOverlay: Fn
  },
  inheritAttrs: !1,
  props: Lh,
  setup(e) {
    const n = k(), o = k(!1), t = Gn(e, "modelValue"), r = I(() => t.value === e.checkedValue), { radioGroup: a, bindRadioGroup: i } = pz(), { hovering: l, handleHovering: s } = eo(), { form: u, bindForm: c } = Hn(), {
      errorMessage: d,
      validateWithTrigger: f,
      validate: v,
      // expose
      resetValidation: m
    } = Un(), g = {
      sync: O,
      validate: A,
      resetValidation: m,
      reset: B,
      isFocusing: I(() => o.value),
      // keyboard arrow move
      move() {
        n.value.focus(), n.value.click();
      },
      moveable() {
        return !(u != null && u.disabled.value) && !e.disabled && !(u != null && u.readonly.value) && !e.readonly;
      }
    };
    C(i, g), C(c, g), We(() => window, "keydown", w), We(() => window, "keyup", $);
    function w(E) {
      if (!o.value)
        return;
      const { key: z } = E;
      (z === "Enter" || z === " ") && Me(E), z === "Enter" && n.value.click();
    }
    function $(E) {
      o.value && E.key === " " && (Me(E), n.value.click());
    }
    function y(E) {
      He(() => {
        const { validateTrigger: z, rules: M, modelValue: Y } = e;
        f(z, E, M, Y);
      });
    }
    function b(E) {
      const { checkedValue: z, onChange: M } = e;
      a && t.value === z || (t.value = E, C(M, t.value), a == null || a.onToggle(z), y("onChange"));
    }
    function P(E) {
      const { disabled: z, readonly: M, uncheckedValue: Y, checkedValue: H, onClick: U } = e;
      u != null && u.disabled.value || z || (C(U, E), !(u != null && u.readonly.value || M) && b(r.value ? Y : H));
    }
    function T() {
      n.value.focus();
    }
    function O(E) {
      const { checkedValue: z, uncheckedValue: M } = e;
      t.value = E === z ? z : M;
    }
    function B() {
      t.value = e.uncheckedValue, m();
    }
    function A() {
      return v(e.rules, e.modelValue);
    }
    function N(E) {
      const { uncheckedValue: z, checkedValue: M } = e;
      ![z, M].includes(E) && (E = r.value ? z : M), b(E);
    }
    return {
      action: n,
      isFocusing: o,
      checked: r,
      errorMessage: d,
      radioGroupErrorMessage: a == null ? void 0 : a.errorMessage,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      hovering: l,
      handleHovering: s,
      n: mz,
      classes: hz,
      handleClick: P,
      handleTextClick: T,
      toggle: N,
      reset: B,
      validate: A,
      resetValidation: m
    };
  }
});
Uh.render = bz;
var Ii = Uh;
ae(Ii);
le(Ii, Lh);
const SI = Ii;
var ca = Ii;
const Hh = {
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
  onChange: L(),
  "onUpdate:modelValue": L()
}, { name: yz, n: wz, classes: kz } = ne("radio-group");
function $z(e, n) {
  const o = _("maybe-v-node"), t = _("var-radio"), r = _("var-form-details");
  return h(), S(
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
          e.options.length ? (h(!0), S(
            Ae,
            { key: 0 },
            qe(e.options, (a) => (h(), we(t, {
              key: a[e.valueKey],
              "checked-value": a[e.valueKey],
              disabled: a.disabled
            }, {
              default: ce(({ checked: i }) => [
                q(o, {
                  is: e.isFunction(a[e.labelKey]) ? a[e.labelKey](a, i) : a[e.labelKey]
                }, null, 8, ["is"])
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["checked-value", "disabled"]))),
            128
            /* KEYED_FRAGMENT */
          )) : X("v-if", !0),
          F(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      q(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const jh = ee({
  name: yz,
  components: { VarFormDetails: En, VarRadio: ca, MaybeVNode: ir },
  props: Hh,
  setup(e) {
    const { length: n, radios: o, bindRadios: t } = fz(), { bindForm: r } = Hn(), {
      errorMessage: a,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = Un(), u = I(() => a.value), c = {
      onToggle: g,
      validate: w,
      reset: $,
      resetValidation: s,
      errorMessage: u
    };
    pe(() => e.modelValue, m), pe(() => n.value, m), C(r, c), t(c), We(() => window, "keydown", d);
    function d(y) {
      const b = o.findIndex(({ isFocusing: T }) => T.value);
      if (!(b === -1 || !o.some(({ moveable: T }, O) => O === b ? !1 : T()))) {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(y.key) && Me(y), y.key === "ArrowUp" || y.key === "ArrowLeft") {
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
    function v(y) {
      He(() => {
        const { validateTrigger: b, rules: P, modelValue: T } = e;
        i(b, y, P, T);
      });
    }
    function m() {
      return o.forEach(({ sync: y }) => y(e.modelValue));
    }
    function g(y) {
      C(e["onUpdate:modelValue"], y), C(e.onChange, y), v("onChange");
    }
    function w() {
      return l(e.rules, e.modelValue);
    }
    function $() {
      C(e["onUpdate:modelValue"], void 0), s();
    }
    return {
      errorMessage: a,
      n: wz,
      classes: kz,
      reset: $,
      validate: w,
      resetValidation: s,
      isFunction: mn
    };
  }
});
jh.render = $z;
var Di = jh;
ae(Di);
le(Di, Hh);
const PI = Di;
var ys = Di;
const Yh = {
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
  namespace: De(on, "namespace"),
  emptyIconNamespace: De(on, "namespace"),
  halfIconNamespace: De(on, "namespace"),
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
}, { name: Cz, n: Et } = ne("rate"), Sz = ["onClick"];
function Pz(e, n) {
  const o = _("var-icon"), t = _("var-hover-overlay"), r = _("var-form-details"), a = Ye("ripple"), i = Ye("hover");
  return h(), S(
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
          (h(!0), S(
            Ae,
            null,
            qe(e.toNumber(e.count), (l) => Ve((h(), S("div", {
              key: l,
              style: G(e.getStyle(l)),
              class: p(e.getClass(l)),
              onClick: (s) => e.handleClick(l, s)
            }, [
              q(o, {
                class: p(e.n("content-icon")),
                "var-rate-cover": "",
                transition: 0,
                namespace: e.getCurrentState(l).namespace,
                name: e.getCurrentState(l).name,
                style: G({ fontSize: e.toSizeUnit(e.size) })
              }, null, 8, ["class", "namespace", "name", "style"]),
              q(t, {
                hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled
              }, null, 8, ["hovering"])
            ], 14, Sz)), [
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
      q(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Wh = ee({
  name: Cz,
  components: {
    VarIcon: Ge,
    VarFormDetails: En,
    VarHoverOverlay: Fn
  },
  directives: { Ripple: tn, Hover: Dn },
  props: Yh,
  setup(e) {
    const n = k(-1), { form: o, bindForm: t } = Hn(), { errorMessage: r, validateWithTrigger: a, validate: i, resetValidation: l } = Un(), { hovering: s } = eo();
    let u = j(e.modelValue);
    C(t, {
      reset: b,
      validate: g,
      resetValidation: l
    });
    function d(P) {
      const { count: T, gap: O } = e;
      return {
        color: v(P).color,
        marginRight: P !== j(T) ? ze(O) : 0
      };
    }
    function f(P) {
      const { name: T, color: O } = v(P);
      return {
        [Et("content")]: !0,
        [Et("--disabled")]: (o == null ? void 0 : o.disabled.value) || e.disabled,
        [Et("--error")]: r.value,
        [Et("--primary")]: T !== e.emptyIcon && !O
      };
    }
    function v(P) {
      const {
        modelValue: T,
        disabled: O,
        disabledColor: B,
        color: A,
        half: N,
        emptyColor: E,
        icon: z,
        halfIcon: M,
        emptyIcon: Y,
        namespace: H,
        halfIconNamespace: U,
        emptyIconNamespace: D
      } = e;
      let Q = A;
      return (O || o != null && o.disabled.value) && (Q = B), P <= T ? { color: Q, name: z, namespace: H } : N && P <= T + 0.5 ? { color: Q, name: M, namespace: U } : {
        color: O || o != null && o.disabled.value ? B : E,
        name: Y,
        namespace: D
      };
    }
    function m(P, T) {
      const { half: O, clearable: B } = e, { offsetWidth: A } = T.target;
      O && T.offsetX <= Math.floor(A / 2) && (P -= 0.5), u === P && B && (P = 0), u !== P && (C(e["onUpdate:modelValue"], P), C(e.onChange, P)), u = P;
    }
    function g() {
      return i(e.rules, e.modelValue);
    }
    function w() {
      return He(() => a(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function $(P, T) {
      const { readonly: O, disabled: B } = e;
      O || B || o != null && o.disabled.value || o != null && o.readonly.value || (m(P, T), w());
    }
    function y(P) {
      return (T) => {
        n.value = P, s.value = T;
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
      getCurrentState: v,
      handleClick: $,
      createHoverHandler: y,
      reset: b,
      validate: g,
      resetValidation: l,
      toSizeUnit: ze,
      toNumber: j,
      n: Et
    };
  }
});
Wh.render = Pz;
var Ai = Wh;
ae(Ai);
le(Ai, Yh);
const OI = Ai;
var ws = Ai;
const Oz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
};
function zz(e, n) {
  return h(), S("svg", Oz, n[0] || (n[0] = [
    R(
      "path",
      { d: "M11,9H13V7H11M11,20H13V11H11V20Z" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const Kh = ee({});
Kh.render = zz;
var Tz = Kh;
const Ez = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
};
function Bz(e, n) {
  return h(), S("svg", Ez, n[0] || (n[0] = [
    R(
      "path",
      { d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const qh = ee({});
qh.render = Bz;
var Iz = qh;
const Dz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
};
function Az(e, n) {
  return h(), S("svg", Dz, n[0] || (n[0] = [
    R(
      "path",
      { d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const Xh = ee({});
Xh.render = Az;
var Mz = Xh;
const { n: Nz, classes: Vz } = ne("result");
function Rz(e, n) {
  return h(), S(
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
          style: G({
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
          style: G({
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
          style: G({ left: `-${e.borderSize}`, top: `-${e.borderSize}`, borderWidth: e.borderSize })
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
          style: G({
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
const Gh = ee({
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
      n: Nz,
      classes: Vz
    };
  }
});
Gh.render = Rz;
var Lz = Gh;
const Fz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
};
function Uz(e, n) {
  return h(), S("svg", Fz, n[0] || (n[0] = [
    R(
      "path",
      { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const Zh = ee({});
Zh.render = Uz;
var Hz = Zh;
const jz = { viewBox: "-4 -4 32 32" };
function Yz(e, n) {
  return h(), S("svg", jz, n[0] || (n[0] = [
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
const Jh = ee({});
Jh.render = Yz;
var Wz = Jh;
const Qh = {
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
}, { name: Kz, n: qz, classes: Xz } = ne("result");
function Gz(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      F(e.$slots, "image", {}, () => [
        e.type ? (h(), S(
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
                style: G({
                  width: e.circleSize,
                  height: e.circleSize,
                  borderWidth: e.borderSize
                })
              },
              [
                (h(), we(kt(e.type), {
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
      F(e.$slots, "title", {}, () => [
        e.title ? (h(), S(
          "div",
          {
            key: 0,
            class: p(e.n("title"))
          },
          se(e.title),
          3
          /* TEXT, CLASS */
        )) : X("v-if", !0)
      ]),
      F(e.$slots, "description", {}, () => [
        e.description ? (h(), S(
          "div",
          {
            key: 0,
            class: p(e.n("description"))
          },
          se(e.description),
          3
          /* TEXT, CLASS */
        )) : X("v-if", !0)
      ]),
      e.$slots.footer ? (h(), S(
        "div",
        {
          key: 0,
          class: p(e.n("footer"))
        },
        [
          F(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const _h = ee({
  name: Kz,
  components: {
    Info: Tz,
    Success: Lz,
    Warning: Mz,
    Error: Iz,
    Question: Hz,
    Empty: Wz
  },
  props: Qh,
  setup(e) {
    const n = I(
      () => `calc(${e.imageSize ? ze(e.imageSize) : "var(--result-image-size)"} * 0.9)`
    ), o = I(
      () => `calc(${e.imageSize ? ze(e.imageSize) : "var(--result-image-size)"} * 0.05)`
    );
    return {
      circleSize: n,
      borderSize: o,
      n: qz,
      classes: Xz
    };
  }
});
_h.render = Gz;
var Mi = _h;
ae(Mi);
le(Mi, Qh);
const zI = Mi;
var ks = Mi;
const xh = {
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
}, { name: Zz, n: Jz, classes: Qz } = ne("row");
function _z(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"))),
      style: G({
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        margin: `${-e.average[0]}px ${-e.average[1]}px`
      }),
      onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
    },
    [
      F(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const eg = ee({
  name: Zz,
  props: xh,
  setup(e) {
    const n = I(
      () => Fe(e.gutter) ? e.gutter.map((r) => en(r) / 2) : [0, en(e.gutter) / 2]
    ), { bindCols: o } = VC();
    o({ average: n });
    function t(r) {
      C(e.onClick, r);
    }
    return {
      average: n,
      n: Jz,
      classes: Qz,
      handleClick: t,
      padStartFlex: Qr
    };
  }
});
eg.render = _z;
var Ni = eg;
ae(Ni);
le(Ni, xh);
const TI = Ni;
var $s = Ni, xz = Object.defineProperty, Qd = Object.getOwnPropertySymbols, e2 = Object.prototype.hasOwnProperty, n2 = Object.prototype.propertyIsEnumerable, _d = (e, n, o) => n in e ? xz(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, o2 = (e, n) => {
  for (var o in n || (n = {}))
    e2.call(n, o) && _d(e, o, n[o]);
  if (Qd)
    for (var o of Qd(n))
      n2.call(n, o) && _d(e, o, n[o]);
  return e;
};
const ng = o2({
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
  onFocus: L(),
  onBlur: L(),
  onClose: L(),
  onChange: L(),
  onClear: L(),
  "onUpdate:modelValue": L()
}, De(Ca, [
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
])), { name: t2, n: r2, classes: a2 } = ne("select"), i2 = ["tabindex"];
function l2(e, n) {
  const o = _("maybe-v-node"), t = _("var-chip"), r = _("var-icon"), a = _("var-field-decorator"), i = _("var-option"), l = _("var-menu"), s = _("var-form-details");
  return h(), S("div", {
    ref: "root",
    class: p(e.n()),
    tabindex: e.disabled || e.formDisabled ? void 0 : "0",
    onFocus: n[3] || (n[3] = (...u) => e.handleFocus && e.handleFocus(...u)),
    onBlur: n[4] || (n[4] = (...u) => e.handleRootBlur && e.handleRootBlur(...u))
  }, [
    q(l, {
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
      "onUpdate:show": n[1] || (n[1] = (u) => e.showMenu = u),
      onClickOutside: e.handleClickOutside
    }, {
      menu: ce(() => [
        R(
          "div",
          {
            ref: "menuEl",
            class: p(e.classes(e.n("scroller"), e.n("$-elevation--3")))
          },
          [
            e.options.length ? (h(!0), S(
              Ae,
              { key: 0 },
              qe(e.options, (u) => (h(), we(i, {
                key: u[e.valueKey],
                label: u[e.labelKey],
                value: u[e.valueKey],
                option: u,
                disabled: u.disabled,
                ripple: u.ripple
              }, null, 8, ["label", "value", "option", "disabled", "ripple"]))),
              128
              /* KEYED_FRAGMENT */
            )) : X("v-if", !0),
            F(e.$slots, "default")
          ],
          2
          /* CLASS */
        )
      ]),
      default: ce(() => [
        q(
          a,
          Eo(er({
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
            "clear-icon": ce(({ clear: u }) => [
              F(e.$slots, "clear-icon", { clear: u })
            ]),
            "append-icon": ce(() => [
              F(e.$slots, "append-icon")
            ]),
            default: ce(() => [
              R(
                "div",
                {
                  class: p(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                  style: G({
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
                      e.isEmptyModelValue ? X("v-if", !0) : F(e.$slots, "selected", { key: 0 }, () => [
                        e.multiple ? (h(), S(
                          Ae,
                          { key: 0 },
                          [
                            e.chip ? (h(), S(
                              "div",
                              {
                                key: 0,
                                class: p(e.n("chips"))
                              },
                              [
                                (h(!0), S(
                                  Ae,
                                  null,
                                  qe(e.labels, (u) => (h(), we(t, {
                                    class: p(e.n("chip")),
                                    "var-select-cover": "",
                                    closeable: "",
                                    size: "small",
                                    type: e.errorMessage ? "danger" : void 0,
                                    key: u,
                                    onClick: n[0] || (n[0] = Xn(() => {
                                    }, ["stop"])),
                                    onClose: () => e.handleClose(u)
                                  }, {
                                    default: ce(() => [
                                      q(o, { is: u }, null, 8, ["is"])
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
                                class: p(e.n("values"))
                              },
                              [
                                (h(!0), S(
                                  Ae,
                                  null,
                                  qe(e.labels, (u, c) => (h(), S(
                                    Ae,
                                    { key: u },
                                    [
                                      q(o, { is: u }, null, 8, ["is"]),
                                      Ie(
                                        se(c !== e.labels.length - 1 ? e.separator : ""),
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
                        )) : (h(), we(o, {
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
                      class: p(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
                      style: G({
                        color: e.placeholderColor
                      })
                    },
                    se(e.placeholder),
                    7
                    /* TEXT, CLASS, STYLE */
                  )) : X("v-if", !0),
                  F(e.$slots, "arrow-icon", {
                    focus: e.isFocusing,
                    menuOpen: e.showMenu
                  }, () => [
                    q(r, {
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
              fn: ce(() => [
                F(e.$slots, "prepend-icon")
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
    q(s, {
      "error-message": e.errorMessage,
      onClick: n[2] || (n[2] = Xn(() => {
      }, ["stop"]))
    }, null, 8, ["error-message"])
  ], 42, i2);
}
const og = ee({
  name: t2,
  components: {
    VarIcon: Ge,
    VarMenu: jt,
    VarChip: na,
    VarOption: ua,
    VarFieldDecorator: Lt,
    VarFormDetails: En,
    MaybeVNode: ir
  },
  props: ng,
  setup(e) {
    const n = k(!1), o = k(!1), t = k(null), r = I(() => e.multiple), a = I(() => e.focusColor), i = I(() => Wn(e.modelValue)), l = I(() => e.disabled || e.readonly ? "" : "pointer"), s = k(0), { bindForm: u, form: c } = Hn(), { length: d, options: f, bindOptions: v } = $4(), { label: m, labels: g, computeLabel: w, getSelectedValue: $ } = rv({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => f,
      optionProvidersLength: () => d.value
    }), {
      errorMessage: y,
      validateWithTrigger: b,
      validate: P,
      // expose
      resetValidation: T
    } = Un(), O = k(null), B = I(() => e.variant === "outlined" ? "bottom" : "cover-top"), A = I(() => {
      const { hint: V, blurColor: K, focusColor: ve } = e;
      if (!V)
        return y.value ? "var(--field-decorator-error-color)" : n.value ? ve || "var(--field-decorator-focus-color)" : K || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    }), N = I(() => !e.hint && Wn(e.modelValue)), E = {
      multiple: r,
      focusColor: a,
      computeLabel: w,
      onSelect: Z,
      reset: fe,
      validate: re,
      resetValidation: T
    };
    pe(
      () => e.multiple,
      () => {
        Ln(
          e.multiple && Fe(e.modelValue),
          "Select",
          "The modelValue must be an array when multiple is true"
        );
      }
    ), v(E), We(() => window, "keydown", z), We(() => window, "keyup", M), C(u, E);
    function z(V) {
      const { disabled: K, readonly: ve } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || K || ve || !n.value)
        return;
      const { key: Se } = V;
      if (Se === " " && !o.value) {
        Me(V);
        return;
      }
      if (Se === "Escape" && o.value) {
        t.value.focus(), Me(V), o.value = !1;
        return;
      }
      if (Se === "Tab" && o.value) {
        t.value.focus(), Me(V), U();
        return;
      }
      if (Se === "Enter" && !o.value) {
        Me(V), o.value = !0;
        return;
      }
      (Se === "ArrowDown" || Se === "ArrowUp") && o.value && (Me(V), ru(t.value, O.value, Se));
    }
    function M(V) {
      const { disabled: K, readonly: ve } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || K || ve || o.value || !n.value)
        return;
      const { key: Se } = V;
      Se === " " && !o.value && (Me(V), o.value = !0);
    }
    function Y(V) {
      He(() => {
        const { validateTrigger: K, rules: ve, modelValue: Se } = e;
        b(K, V, ve, Se);
      });
    }
    function H() {
      const { disabled: V, readonly: K, onFocus: ve } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || V || K || (s.value = en(e.offsetY), W(), C(ve), Y("onFocus"));
    }
    function U() {
      const { disabled: V, readonly: K, onBlur: ve } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || V || K || (J(), C(ve), Y("onBlur"));
    }
    function D() {
      o.value || U();
    }
    function Q() {
      n.value && U();
    }
    function Z(V) {
      const { disabled: K, readonly: ve, multiple: Se, onChange: Ue } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || K || ve)
        return;
      const Ne = $(V);
      C(e["onUpdate:modelValue"], Ne), C(Ue, Ne), Y("onChange"), Se || (t.value.focus(), bn().then(() => {
        o.value = !1;
      }));
    }
    function oe() {
      const { disabled: V, readonly: K, multiple: ve, clearable: Se, onClear: Ue } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || V || K || !Se)
        return;
      const Ne = ve ? [] : void 0;
      C(e["onUpdate:modelValue"], Ne), C(Ue, Ne), Y("onClear");
    }
    function ye(V) {
      const { disabled: K, onClick: ve } = e;
      c != null && c.disabled.value || K || (C(ve, V), Y("onClick"));
    }
    function Oe(V) {
      const { disabled: K, readonly: ve, modelValue: Se, onClose: Ue } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || K || ve)
        return;
      const Ne = f.find(({ label: un }) => un.value === V), rn = Se.filter(
        (un) => {
          var Pn;
          return un !== ((Pn = Ne.value.value) != null ? Pn : Ne.label.value);
        }
      );
      C(e["onUpdate:modelValue"], rn), C(Ue, rn), Y("onClose");
    }
    function W() {
      s.value = en(e.offsetY), n.value = !0;
    }
    function J() {
      n.value = !1, o.value = !1;
    }
    function re() {
      return P(e.rules, e.modelValue);
    }
    function fe() {
      C(e["onUpdate:modelValue"], e.multiple ? [] : void 0), T();
    }
    return {
      root: t,
      offsetY: s,
      isFocusing: n,
      showMenu: o,
      errorMessage: y,
      formDisabled: c == null ? void 0 : c.disabled,
      formReadonly: c == null ? void 0 : c.readonly,
      label: m,
      labels: g,
      isEmptyModelValue: i,
      menuEl: O,
      placement: B,
      cursor: l,
      placeholderColor: A,
      enableCustomPlaceholder: N,
      isFunction: mn,
      n: r2,
      classes: a2,
      handleFocus: H,
      handleBlur: U,
      handleClickOutside: Q,
      handleClear: oe,
      handleClick: ye,
      handleClose: Oe,
      handleRootBlur: D,
      reset: fe,
      validate: re,
      resetValidation: T,
      focus: W,
      blur: J
    };
  }
});
og.render = l2;
var Vi = og;
ae(Vi);
le(Vi, ng);
const EI = Vi;
var Cs = Vi;
const tg = {
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
}, { name: s2, n: u2, classes: c2 } = ne("skeleton");
function d2(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n("$--box"), e.n()))
    },
    [
      e.loading ? X("v-if", !0) : (h(), S(
        "div",
        {
          key: 0,
          class: p(e.n("data"))
        },
        [
          F(e.$slots, "default")
        ],
        2
        /* CLASS */
      )),
      e.loading && !e.fullscreen ? (h(), S(
        "div",
        {
          key: 1,
          class: p(e.n("content"))
        },
        [
          e.card ? (h(), S(
            "div",
            {
              key: 0,
              class: p(e.n("card")),
              style: G({ height: e.toSizeUnit(e.cardHeight) })
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
          )) : X("v-if", !0),
          e.avatar || e.title || e.toNumber(e.rows) > 0 ? (h(), S(
            "div",
            {
              key: 1,
              class: p(e.n("article"))
            },
            [
              e.avatar ? (h(), S(
                "div",
                {
                  key: 0,
                  class: p(e.n("avatar")),
                  style: G({
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
              )) : X("v-if", !0),
              e.title || e.toNumber(e.rows) > 0 ? (h(), S(
                "div",
                {
                  key: 1,
                  class: p(e.n("section"))
                },
                [
                  e.title ? (h(), S(
                    "div",
                    {
                      key: 0,
                      class: p(e.n("title")),
                      style: G({ width: e.toSizeUnit(e.titleWidth) })
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
                  )) : X("v-if", !0),
                  (h(!0), S(
                    Ae,
                    null,
                    qe(e.toNumber(e.rows), (o, t) => (h(), S(
                      "div",
                      {
                        class: p(e.n("row")),
                        key: o,
                        style: G({ width: e.toSizeUnit(e.rowsWidth[t]) })
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
              )) : X("v-if", !0)
            ],
            2
            /* CLASS */
          )) : X("v-if", !0)
        ],
        2
        /* CLASS */
      )) : X("v-if", !0),
      e.loading && e.fullscreen ? (h(), S(
        "div",
        {
          key: 2,
          class: p(e.n("fullscreen")),
          style: G({ zIndex: e.toNumber(e.fullscreenZIndex) })
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
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const rg = ee({
  name: s2,
  props: tg,
  setup: () => ({
    n: u2,
    classes: c2,
    toSizeUnit: ze,
    toNumber: j
  })
});
rg.render = d2;
var Ri = rg;
ae(Ri);
le(Ri, tg);
const BI = Ri;
var Ss = Ri, cn = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(cn || {});
const ag = {
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
}, { name: f2, n: xd, classes: p2 } = ne("slider"), v2 = ["tabindex", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-disabled", "aria-valuetext", "onTouchstart", "onFocusin", "onFocusout"];
function m2(e, n) {
  const o = _("var-hover-overlay"), t = _("var-form-details"), r = Ye("hover");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(e.direction), e.n("$--box")))
    },
    [
      R(
        "div",
        {
          class: p(e.classes(e.n(`${e.direction}-block`), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(`${e.direction}--error`)])),
          ref: "sliderEl",
          onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
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
                  style: G({
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
                  style: G(e.getFillStyle)
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
            Ae,
            null,
            qe(e.thumbList, (a) => (h(), S("div", {
              class: p(e.n(`${e.direction}-thumb`)),
              key: a.enumValue,
              style: G(e.thumbStyle(a)),
              tabindex: e.isDisabled ? void 0 : "0",
              role: "slider",
              "aria-valuemin": e.min,
              "aria-valuemax": e.max,
              "aria-valuenow": a.value,
              "aria-disabled": e.isDisabled,
              "aria-valuetext": `${a.text}`,
              onTouchstart: Xn((i) => e.start(i, a.enumValue), ["stop"]),
              onFocusin: (i) => e.handleFocus(a),
              onFocusout: (i) => e.handleBlur(a)
            }, [
              F(e.$slots, "button", {
                currentValue: a.text
              }, () => [
                Ve(R(
                  "div",
                  {
                    class: p(e.n(`${e.direction}-thumb-block`)),
                    style: G({
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
                    style: G({
                      background: e.thumbsProps[a.enumValue].active ? e.thumbColor : void 0
                    })
                  },
                  [
                    q(o, {
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
                    style: G({
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
                      se(a.text),
                      1
                      /* TEXT */
                    )
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ])
            ], 46, v2))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      ),
      q(t, {
        "error-message": e.errorMessage,
        class: p(e.n("form")),
        "var-slider-cover": ""
      }, null, 8, ["error-message", "class"])
    ],
    2
    /* CLASS */
  );
}
const ig = ee({
  name: f2,
  components: {
    VarFormDetails: En,
    VarHoverOverlay: Fn
  },
  directives: { Hover: Dn },
  props: ag,
  setup(e) {
    const n = k(0), o = k(null), t = k(!1), r = I(() => j(e.max) - j(e.min)), a = I(() => n.value / r.value * j(e.step)), i = I(() => e.disabled || (f == null ? void 0 : f.disabled.value)), l = I(() => e.readonly || (f == null ? void 0 : f.readonly.value)), s = I(() => e.direction === "vertical"), u = k(!1), c = k(!1), { bindForm: d, form: f } = Hn(), { errorMessage: v, validateWithTrigger: m, validate: g, resetValidation: w } = Un(), { hovering: $, handleHovering: y } = eo(), { hovering: b, handleHovering: P } = eo(), T = I(() => {
      const { modelValue: te, range: de } = e;
      let ke = [];
      return de && Fe(te) ? ke = [
        {
          value: Q(te[0]),
          enumValue: cn.First,
          text: Z(te[0]),
          hovering: $.value,
          focusing: u.value,
          handleHovering: y,
          handleFocusing(Be) {
            u.value = Be;
          }
        },
        {
          value: Q(te[1]),
          enumValue: cn.Second,
          text: Z(te[1]),
          hovering: b.value,
          focusing: c.value,
          handleHovering: P,
          handleFocusing(Be) {
            c.value = Be;
          }
        }
      ] : Tn(te) && (ke = [
        {
          value: Q(te),
          enumValue: cn.First,
          text: Z(te),
          hovering: $.value,
          focusing: u.value,
          handleHovering: y,
          handleFocusing(Be) {
            u.value = Be;
          }
        }
      ]), ke;
    }), O = I(() => {
      const { activeColor: te, range: de, modelValue: ke } = e, Be = de && Fe(ke) ? Q(Math.min(ke[0], ke[1])) : 0, Qe = de && Fe(ke) ? Q(Math.max(ke[0], ke[1])) - Be : Q(ke);
      return s.value ? {
        left: "0px",
        height: `${Qe}%`,
        bottom: `${Be}%`,
        background: te
      } : {
        top: "0px",
        width: `${Qe}%`,
        left: `${Be}%`,
        background: te
      };
    }), B = xe({
      [cn.First]: M(),
      [cn.Second]: M()
    });
    let A;
    C(d, {
      reset: rn,
      validate: z,
      resetValidation: w
    }), pe([() => e.modelValue, () => e.step], ([te, de]) => {
      !Se() || !Ue() || t.value || Ne(te, j(de));
    }), pe(n, () => Ne()), yn(() => {
      !Se() || !Ue() || E();
    }), da(re), We(() => window, "keydown", Pn), lo(E);
    function E() {
      n.value = o.value[s.value ? "offsetHeight" : "offsetWidth"];
    }
    function z() {
      return g(e.rules, e.modelValue);
    }
    function M() {
      return {
        startPosition: 0,
        currentOffset: 0,
        active: !1,
        percentValue: 0
      };
    }
    function Y() {
      return He(() => m(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function H(te) {
      const de = te.currentTarget;
      return de ? s.value ? n.value - (te.clientY - nn(de).top) : te.clientX - Y0(de) : 0;
    }
    function U(te) {
      return {
        [s.value ? "bottom" : "left"]: `${te.value}%`,
        zIndex: B[te.enumValue].active ? 1 : void 0
      };
    }
    function D(te) {
      return e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : B[te].active;
    }
    function Q(te) {
      const { min: de, max: ke } = e;
      return te < j(de) ? 0 : te > j(ke) ? 100 : (te - j(de)) / r.value * 100;
    }
    function Z(te) {
      if (!Tn(te))
        return 0;
      const de = $n(te, j(e.min), j(e.max));
      return parseInt(`${de}`, 10) === de ? de : j(de.toPrecision(5));
    }
    function oe(te, de) {
      i.value || de.handleHovering(te);
    }
    function ye(te) {
      C(e.onChange, te), C(e["onUpdate:modelValue"], te), Y();
    }
    function Oe(te, de) {
      let ke = [];
      const { step: Be, range: Qe, modelValue: ie, min: $e } = e, Te = j(Be), Re = Math.round(te / a.value), Le = Re * Te + j($e), fn = B[de].percentValue * Te + j($e);
      if (B[de].percentValue = Re, Qe && Fe(ie) && (ke = de === cn.First ? [Le, ie[1]] : [ie[0], Le]), fn !== Le) {
        const hn = Qe ? ke.map((gn) => Z(gn)) : Z(Le);
        ye(hn);
      }
    }
    function W(te) {
      if (!e.range)
        return cn.First;
      const de = B[cn.First].percentValue * a.value, ke = B[cn.Second].percentValue * a.value, Be = Math.abs(te - de), Qe = Math.abs(te - ke);
      return Be <= Qe ? cn.First : cn.Second;
    }
    function J() {
      document.addEventListener("touchmove", V, { passive: !1 }), document.addEventListener("touchend", K), document.addEventListener("touchcancel", K);
    }
    function re() {
      document.removeEventListener("touchmove", V), document.removeEventListener("touchend", K), document.removeEventListener("touchcancel", K);
    }
    function fe(te, de) {
      if (E(), i.value || (B[de].active = !0), A = de, J(), i.value || l.value)
        return;
      C(e.onStart), t.value = !0;
      const { clientX: ke, clientY: Be } = te.touches[0];
      B[de].startPosition = s.value ? Be : ke;
    }
    function V(te) {
      if (Me(te), i.value || l.value || !t.value)
        return;
      const { startPosition: de, currentOffset: ke } = B[A], { clientX: Be, clientY: Qe } = te.touches[0];
      let ie = (s.value ? de - Qe : Be - de) + ke;
      ie <= 0 ? ie = 0 : ie >= n.value && (ie = n.value), Oe(ie, A);
    }
    function K() {
      re();
      const { range: te, modelValue: de, onEnd: ke, step: Be, min: Qe } = e;
      if (i.value || (B[A].active = !1), i.value || l.value)
        return;
      let ie = [];
      B[A].currentOffset = B[A].percentValue * a.value;
      const $e = B[A].percentValue * j(Be) + j(Qe);
      te && Fe(de) && (ie = A === cn.First ? [$e, de[1]] : [de[0], $e]), C(ke, te ? ie : $e), t.value = !1;
    }
    function ve(te) {
      if (i.value || l.value || te.target.closest(`.${xd("thumb")}`))
        return;
      const de = H(te), ke = W(de);
      A = ke, Oe(de, ke), K();
    }
    function Se() {
      return j(e.step) <= 0 ? (i0("Slider", '"step" should be > 0'), !1) : !0;
    }
    function Ue() {
      const { range: te, modelValue: de } = e;
      return te && !Fe(de) ? (st("Slider", '"modelValue" should be an Array'), !1) : !te && Fe(de) ? (st("Slider", '"modelValue" should be a Number'), !1) : te && Fe(de) && de.length < 2 ? (st("Slider", '"modelValue" should have two value'), !1) : !0;
    }
    function Ne(te = e.modelValue, de = j(e.step)) {
      const ke = (Be) => {
        const { min: Qe, max: ie } = e;
        return Be < j(Qe) ? 0 : Be > j(ie) ? r.value / de : (Be - j(Qe)) / de;
      };
      e.range && Fe(te) ? (B[cn.First].percentValue = ke(te[0]), B[cn.First].currentOffset = B[cn.First].percentValue * a.value, B[cn.Second].percentValue = ke(te[1]), B[cn.Second].currentOffset = B[cn.Second].percentValue * a.value) : Tn(te) && (B[cn.First].currentOffset = ke(te) * a.value);
    }
    function rn() {
      const te = e.range ? [0, 0] : 0;
      C(e["onUpdate:modelValue"], te), w();
    }
    function un(te, de) {
      const ke = j(e.step);
      if (Fe(de)) {
        const Be = de[0] + (u.value ? te * ke : 0), Qe = de[1] + (c.value ? te * ke : 0);
        return [Be, Qe].map(Z);
      }
      return Z(de + te * ke);
    }
    function Pn(te) {
      const de = {
        ArrowRight: 1,
        ArrowUp: 1,
        ArrowLeft: -1,
        ArrowDown: -1
      }, { key: ke } = te;
      if (!Go(de, ke) || l.value || i.value || e.range && !u.value && !c.value || !e.range && !u.value)
        return;
      Me(te);
      const Be = de[ke], Qe = un(Be, e.modelValue);
      ye(Qe);
    }
    function me(te) {
      i.value || te.handleFocusing(!0);
    }
    function Ke(te) {
      te.handleFocusing(!1);
    }
    return {
      sliderEl: o,
      getFillStyle: O,
      isDisabled: i,
      isVertical: s,
      errorMessage: v,
      thumbsProps: B,
      thumbList: T,
      handleFocus: me,
      handleBlur: Ke,
      n: xd,
      classes: p2,
      thumbStyle: U,
      hover: oe,
      toSizeUnit: ze,
      toNumber: j,
      showLabel: D,
      start: fe,
      move: V,
      end: K,
      handleClick: ve
    };
  }
});
ig.render = m2;
var Li = ig;
ae(Li);
le(Li, ag);
const II = Li;
var Ps = Li, h2 = Object.defineProperty, g2 = Object.defineProperties, b2 = Object.getOwnPropertyDescriptors, ef = Object.getOwnPropertySymbols, y2 = Object.prototype.hasOwnProperty, w2 = Object.prototype.propertyIsEnumerable, nf = (e, n, o) => n in e ? h2(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, k2 = (e, n) => {
  for (var o in n || (n = {}))
    y2.call(n, o) && nf(e, o, n[o]);
  if (ef)
    for (var o of ef(n))
      w2.call(n, o) && nf(e, o, n[o]);
  return e;
}, $2 = (e, n) => g2(e, b2(n));
const Du = {
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
  loadingType: De(co, "type"),
  loadingSize: De(co, "size"),
  loadingRadius: De(co, "radius"),
  loadingColor: $2(k2({}, De(co, "color")), {
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
}, { n: C2, classes: S2 } = ne("snackbar"), P2 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function O2(e, n) {
  const o = _("var-icon"), t = _("var-loading");
  return Ve((h(), S(
    "div",
    {
      class: p(e.n()),
      style: G({ pointerEvents: e.isForbidClick ? "auto" : "none", zIndex: e.zIndex })
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
          style: G({ zIndex: e.zIndex })
        },
        [
          R(
            "div",
            {
              class: p([e.n("content"), e.contentClass])
            },
            [
              F(e.$slots, "default", {}, () => [
                Ie(
                  se(e.content),
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
              class: p(e.n("icon"))
            },
            [
              e.iconName ? (h(), we(o, {
                key: 0,
                name: e.iconName
              }, null, 8, ["name"])) : X("v-if", !0),
              e.type === "loading" ? (h(), we(t, {
                key: 1,
                type: e.loadingType,
                size: e.loadingSize,
                color: e.loadingColor,
                radius: e.loadingRadius
              }, null, 8, ["type", "size", "color", "radius"])) : X("v-if", !0),
              F(e.$slots, "icon")
            ],
            2
            /* CLASS */
          )) : X("v-if", !0),
          e.$slots.action ? (h(), S(
            "div",
            {
              key: 1,
              class: p(e.n("action"))
            },
            [
              F(e.$slots, "action")
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
    [xn, e.show]
  ]);
}
const lg = ee({
  name: "VarSnackbarCore",
  components: {
    VarLoading: ht,
    VarIcon: Ge
  },
  props: Du,
  setup(e) {
    const n = k(null), { zIndex: o } = sr(() => e.show, 1);
    lr(
      () => e.show,
      () => e.lockScroll
    );
    const t = I(() => {
      const { type: i, forbidClick: l } = e;
      return i === "loading" || l;
    }), r = I(() => e.type ? P2[e.type] : "");
    function a() {
      n.value = setTimeout(() => {
        e.type !== "loading" && C(e["onUpdate:show"], !1);
      }, e.duration);
    }
    return pe(
      () => e.show,
      (i) => {
        i ? (C(e.onOpen), a()) : (clearTimeout(n.value), C(e.onClose));
      }
    ), pe(
      () => e._update,
      () => {
        clearTimeout(n.value), a();
      }
    ), yn(() => {
      e.show && (C(e.onOpen), a());
    }), {
      SNACKBAR_TYPE: cg,
      zIndex: o,
      iconName: r,
      isForbidClick: t,
      n: C2,
      classes: S2,
      formatElevation: dn
    };
  }
});
lg.render = O2;
var sg = lg;
const { name: z2, n: T2 } = ne("snackbar");
function E2(e, n) {
  const o = _("var-snackbar-core");
  return h(), we(io, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [
    q(_e, {
      name: `${e.n()}-fade`,
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed
    }, {
      default: ce(() => [
        q(o, je(e.$props, {
          class: e.n("transition")
        }), Xo({
          default: ce(() => [
            F(e.$slots, "default")
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots.icon ? {
            name: "icon",
            fn: ce(() => [
              F(e.$slots, "icon")
            ]),
            key: "0"
          } : void 0,
          e.$slots.action ? {
            name: "action",
            fn: ce(() => [
              F(e.$slots, "action")
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
const ug = ee({
  name: z2,
  components: { VarSnackbarCore: sg },
  props: Du,
  setup() {
    const { disabled: e } = xo();
    return {
      disabled: e,
      n: T2
    };
  }
});
ug.render = E2;
var Fi = ug, B2 = Object.defineProperty, of = Object.getOwnPropertySymbols, I2 = Object.prototype.hasOwnProperty, D2 = Object.prototype.propertyIsEnumerable, tf = (e, n, o) => n in e ? B2(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Zt = (e, n) => {
  for (var o in n || (n = {}))
    I2.call(n, o) && tf(e, o, n[o]);
  if (of)
    for (var o of of(n))
      D2.call(n, o) && tf(e, o, n[o]);
  return e;
};
const cg = ["loading", "success", "warning", "info", "error"];
let rf = 0, Os = !1, dg, Jt = !1;
const fg = {
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
let qn = xe([]), Au = fg;
const A2 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, ul = (e) => () => mn(e) ? e() : e, M2 = {
  setup() {
    return () => {
      const e = qn.map(({
        id: n,
        reactiveSnackOptions: o,
        _update: t
      }) => {
        const r = document.querySelector(".var-transition-group");
        o.forbidClick || o.type === "loading" ? r.classList.add("var-pointer-auto") : r.classList.remove("var-pointer-auto");
        const a = Zt({
          position: Jt ? "relative" : "absolute"
        }, U2(o.position)), {
          content: i,
          icon: l,
          action: s
        } = o, u = {
          default: ul(i),
          icon: ul(l),
          action: ul(s)
        };
        return q(sg, je(o, {
          key: n,
          style: a,
          "data-id": n,
          _update: t,
          show: o.show,
          "onUpdate:show": (c) => o.show = c
        }), u);
      });
      return q(xg, je(A2, {
        style: {
          zIndex: Vn.zIndex
        },
        onAfterEnter: N2,
        onAfterLeave: V2
      }), {
        default: () => [e]
      });
    };
  }
}, ao = function(e) {
  const n = L2(e), o = xe(Zt(Zt({}, Au), n));
  o.show = !0, Os || (Os = !0, dg = Ct(M2).unmountInstance);
  const {
    length: t
  } = qn, r = {
    id: rf++,
    reactiveSnackOptions: o
  };
  if (t === 0 || Jt)
    R2(r);
  else {
    const a = `update-${rf}`;
    F2(o, a);
  }
  return {
    clear() {
      !Jt && qn.length ? qn[0].reactiveSnackOptions.show = !1 : o.show = !1;
    }
  };
};
cg.forEach((e) => {
  ao[e] = (n) => (Rn(n) ? n.type = e : n = {
    content: n,
    type: e
  }, ao(n));
});
ao.allowMultiple = function(e = !1) {
  e !== Jt && (qn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Jt = e);
};
ao.clear = function() {
  qn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
ao.setDefaultOptions = function(e) {
  Au = e;
};
ao.resetDefaultOptions = function() {
  Au = fg;
};
function N2(e) {
  const n = e.getAttribute("data-id"), o = qn.find((t) => t.id === j(n));
  o && C(o.reactiveSnackOptions.onOpened);
}
function V2(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), o = qn.find((r) => r.id === j(n));
  o && (o.animationEnd = !0, C(o.reactiveSnackOptions.onClosed)), qn.every((r) => r.animationEnd) && (C(dg), qn = xe([]), Os = !1);
}
function R2(e) {
  qn.push(e);
}
function L2(e = {}) {
  return sn(e) ? {
    content: e
  } : e;
}
function F2(e, n) {
  const [o] = qn;
  o.reactiveSnackOptions = Zt(Zt({}, o.reactiveSnackOptions), e), o._update = n;
}
function U2(e = "top") {
  return e === "bottom" ? {
    top: "85%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
ao.Component = Fi;
ae(Fi);
ae(Fi, ao);
le(ao, Du);
const DI = Fi;
var zs = ao;
const pg = {
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
function H2(e, n, o) {
  const { direction: t, justify: r, index: a, lastIndex: i } = o;
  let l = "0";
  return t === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(r) ? a !== i ? l = `${Nn(e)} ${n} ${Nn(e)} 0` : l = `${Nn(e)} 0` : r === "space-around" ? l = `${Nn(e)} ${Nn(n)}` : r === "space-between" && (a === 0 ? l = `${Nn(e)} ${Nn(n)} ${Nn(e)} 0` : a === i ? l = `${Nn(e)} 0 ${Nn(e)} ${Nn(n)}` : l = `${Nn(e)} ${Nn(n)}`)), t === "column" && a !== i && (l = `0 0 ${e} 0`), l;
}
const j2 = (e) => ["mini", "small", "normal", "large"].includes(e), {
  name: Y2,
  n: Br,
  classes: af
} = ne("space");
function W2(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : Fe(e) ? e.map(ze) : [ze(e), ze(e)];
}
var Ui = ee({
  name: Y2,
  props: pg,
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
      } = e, u = (o = C(n.default)) != null ? o : [], [c, d] = W2(s, j2(s)), f = op(u), v = f.length - 1, m = f.map((g, w) => {
        var $;
        const y = H2(c, d, {
          direction: l,
          justify: r,
          index: w,
          lastIndex: v
        });
        return q("div", {
          class: af([l === "column", Br("--auto")]),
          key: ($ = g.key) != null ? $ : void 0,
          style: {
            margin: y
          }
        }, [g]);
      });
      return q("div", {
        class: af(Br(), Br("$--box"), [t, Br("--inline")]),
        style: {
          flexDirection: l,
          justifyContent: Qr(r),
          alignItems: Qr(a),
          flexWrap: i ? "wrap" : "nowrap",
          margin: l === "row" ? `calc(-1 * ${c} / 2) 0` : void 0
        }
      }, [m]);
    };
  }
});
ae(Ui);
le(Ui, pg);
const AI = Ui;
var Ts = Ui;
const vg = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: De(on, "name"),
  inactiveIcon: De(on, "name"),
  activeIconNamespace: De(on, "namespace"),
  currentIconNamespace: De(on, "namespace"),
  inactiveIconNamespace: De(on, "namespace")
}, mg = Symbol("STEPS_BIND_STEP_KEY");
function K2() {
  const { bindChildren: e, childProviders: n } = kn(mg);
  return {
    step: n,
    bindStep: e
  };
}
function q2() {
  const { parentProvider: e, index: n, bindParent: o } = wn(mg);
  return Ln(!!o, "Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: o
  };
}
const { name: X2, n: G2, classes: Z2 } = ne("step"), J2 = { key: 3 };
function Q2(e, n) {
  const o = _("var-icon");
  return h(), S(
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
              style: G({ backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor }),
              onClick: n[0] || (n[0] = (...t) => e.click && e.click(...t))
            },
            [
              e.isActive ? (h(), we(o, {
                key: 0,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.activeIcon,
                namespace: e.activeIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.isCurrent && e.currentIcon ? (h(), we(o, {
                key: 1,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.currentIcon,
                namespace: e.currentIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.inactiveIcon ? (h(), we(o, {
                key: 2,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.inactiveIcon,
                namespace: e.inactiveIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : (h(), S(
                "span",
                J2,
                se(e.index + 1),
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
              class: p(e.classes(e.n(`${e.direction}-content`), [e.isActive || e.isCurrent, e.n(`${e.direction}-content--active`)])),
              onClick: n[1] || (n[1] = (...t) => e.click && e.click(...t))
            },
            [
              F(e.$slots, "default")
            ],
            2
            /* CLASS */
          )) : X("v-if", !0),
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
const hg = ee({
  name: X2,
  components: { VarIcon: Ge },
  props: vg,
  setup() {
    const { index: e, steps: n, bindSteps: o } = q2(), { active: t, activeColor: r, inactiveColor: a, direction: i, clickStep: l } = n, s = I(() => t.value === e.value), u = I(() => e.value !== -1 && j(t.value) > e.value);
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
      n: G2,
      classes: Z2,
      click: d
    };
  }
});
hg.render = Q2;
var Hi = hg;
ae(Hi);
le(Hi, vg);
const MI = Hi;
var Es = Hi;
const gg = {
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
}, { name: _2, n: x2 } = ne("steps");
function e3(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.n()),
      style: G({ flexDirection: e.direction === "horizontal" ? "row" : "column" })
    },
    [
      F(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const bg = ee({
  name: _2,
  props: gg,
  setup(e) {
    const n = I(() => e.active), o = I(() => e.activeColor), t = I(() => e.inactiveColor), r = I(() => e.direction), { bindStep: a } = K2();
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
    return { n: x2 };
  }
});
bg.render = e3;
var ji = bg;
ae(ji);
le(ji, gg);
const NI = ji;
var Bs = ji;
const yg = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: n3, n: o3 } = ne("style-provider"), t3 = ee({
  name: n3,
  props: yg,
  setup(e, { slots: n }) {
    return () => _t(
      e.tag,
      {
        class: o3(),
        style: dp(e.styleVars)
      },
      C(n.default)
    );
  }
});
var Yi = t3;
const wg = "varlet-style-vars";
function lf() {
  const e = document.head.querySelector(`#${wg}`);
  e && document.head.removeChild(e);
}
function r3(e) {
  const n = document.createElement("style");
  n.id = wg, n.innerHTML = e, document.head.appendChild(n);
}
function Wi(e) {
  if (e == null) {
    lf();
    return;
  }
  const n = dp(e ?? {}), o = Object.entries(n).reduce((t, [r, a]) => (t += `${r}:${a};`, t), `:root:root {
`);
  lf(), r3(`${o}
}`);
}
Wi.Component = Yi;
ae(Yi);
ae(Yi, Wi);
le(Wi, yg);
const VI = Yi;
var Is = Wi;
const kg = {
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
  onClick: L(),
  onBeforeChange: L(),
  onChange: L(),
  "onUpdate:modelValue": L()
}, { name: a3, n: i3, classes: l3 } = ne("switch"), s3 = ["aria-checked"], u3 = ["tabindex"];
function c3(e, n) {
  const o = _("var-hover-overlay"), t = _("var-form-details"), r = Ye("ripple"), a = Ye("hover");
  return Ve((h(), S("div", {
    class: p(e.classes(e.n(), [e.variant, e.n("--variant")])),
    role: "switch",
    "aria-checked": e.modelValue
  }, [
    R(
      "div",
      {
        ref: "switchRef",
        class: p(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.isActive, e.n("block--active")])),
        style: G(e.styleComputed.switch),
        onClick: n[2] || (n[2] = (...i) => e.switchActive && e.switchActive(...i))
      },
      [
        R(
          "div",
          {
            style: G(e.styleComputed.track),
            class: p(e.classes(e.n("track"), [e.isActive, e.n("track--active")], [e.errorMessage && !e.variant, e.n("track--error")]))
          },
          null,
          6
          /* CLASS, STYLE */
        ),
        Ve((h(), S("div", {
          class: p(e.classes(e.n("ripple"), [e.isActive, e.n("ripple--active")])),
          style: G(e.styleComputed.ripple),
          tabindex: e.disabled || e.formDisabled ? void 0 : "0",
          onFocus: n[0] || (n[0] = (i) => e.isFocusing = !0),
          onBlur: n[1] || (n[1] = (i) => e.isFocusing = !1)
        }, [
          R(
            "div",
            {
              style: G(e.styleComputed.handle),
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
              e.loading ? (h(), S(
                "span",
                {
                  key: 0,
                  class: p(e.n("loading")),
                  style: G({
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
              )) : X("v-if", !0)
            ],
            6
            /* CLASS, STYLE */
          ),
          q(o, {
            hovering: e.hovering && !e.disabled && !e.formDisabled,
            focusing: e.isFocusing && !e.disabled && !e.formDisabled
          }, null, 8, ["hovering", "focusing"])
        ], 46, u3)), [
          [r, {
            disabled: !e.ripple || e.disabled || e.loading || e.formDisabled || e.readonly || e.formReadonly
          }]
        ])
      ],
      6
      /* CLASS, STYLE */
    ),
    q(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
  ], 10, s3)), [
    [a, e.hover, "desktop"]
  ]);
}
const $g = ee({
  name: a3,
  components: {
    VarFormDetails: En,
    VarHoverOverlay: Fn
  },
  directives: { Ripple: tn, Hover: Dn },
  props: kg,
  setup(e) {
    const n = k(null), o = k(!1), { bindForm: t, form: r } = Hn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = Un(), { hovering: u, handleHovering: c } = eo(), d = I(() => e.modelValue === e.activeValue), f = I(() => {
      const { size: O, color: B, closeColor: A, loadingColor: N, variant: E } = e;
      return {
        handle: {
          width: On(O),
          height: On(O),
          backgroundColor: d.value ? B : A,
          color: N
        },
        ripple: {
          left: d.value ? On(O, 0.5) : `-${On(O, E ? 1 / 3 : 0.5)}`,
          color: d.value ? B : A || "currentColor",
          width: On(O, 2),
          height: On(O, 2)
        },
        track: {
          width: On(O, E ? 13 / 6 : 1.9),
          height: On(O, E ? 4 / 3 : 0.72),
          borderRadius: On(O, 2 / 3),
          filter: d.value || a != null && a.value ? void 0 : `brightness(${E ? 1 : 0.6})`,
          backgroundColor: d.value ? B : A,
          borderWidth: E && !d.value ? On(O, 1 / 12) : void 0
        },
        switch: {
          width: On(O, E ? 13 / 6 : 2),
          height: On(O, E ? 4 / 3 : 1.2)
        }
      };
    }), v = I(() => On(e.size, 0.8));
    C(t, {
      reset: T,
      validate: $,
      resetValidation: s
    }), We(() => window, "keydown", g), We(() => window, "keyup", w);
    function g(O) {
      o.value && ((O.key === " " || O.key === "Enter") && Me(O), O.key === "Enter" && n.value.click());
    }
    function w(O) {
      !o.value || O.key !== " " || (Me(O), n.value.click());
    }
    function $() {
      return l(e.rules, e.modelValue);
    }
    function y(O) {
      He(() => {
        const { validateTrigger: B, rules: A, modelValue: N } = e;
        i(B, O, A, N);
      });
    }
    function b(O) {
      const {
        onClick: B,
        onChange: A,
        disabled: N,
        loading: E,
        readonly: z,
        activeValue: M,
        inactiveValue: Y,
        lazyChange: H,
        "onUpdate:modelValue": U,
        onBeforeChange: D
      } = e;
      if (N || r != null && r.disabled.value || (C(B, O), E || z || r != null && r.readonly.value))
        return;
      const Q = d.value ? Y : M;
      H ? C(D, Q, (Z) => {
        C(U, Z), y("onLazyChange");
      }) : (C(A, Q), C(U, Q), y("onChange"));
    }
    function P(O) {
      e.disabled || r != null && r.disabled.value || c(O);
    }
    function T() {
      C(e["onUpdate:modelValue"], e.inactiveValue), s();
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
      n: i3,
      classes: l3,
      formatElevation: dn,
      multiplySizeUnit: On,
      switchActive: b,
      hover: P
    };
  }
});
$g.render = c3;
var Ki = $g;
ae(Ki);
le(Ki, kg);
const RI = Ki;
var Ds = Ki;
const Cg = {
  name: [String, Number],
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: L()
}, Sg = Symbol("TABS_BIND_TAB_KEY");
function d3() {
  const { childProviders: e, bindChildren: n, length: o } = kn(Sg);
  return {
    length: o,
    tabList: e,
    bindTabList: n
  };
}
function f3() {
  const { parentProvider: e, bindParent: n, index: o } = wn(Sg);
  return Ln(!!n, "Tab", "<var-tab/> must in <var-tabs/>"), {
    index: o,
    tabs: e,
    bindTabs: n
  };
}
const { name: p3, n: Ir, classes: v3 } = ne("tab");
function m3(e, n) {
  const o = Ye("ripple");
  return Ve((h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n(`--${e.itemDirection}`))),
      ref: "tabEl",
      style: G({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      F(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [o, { disabled: e.disabled || !e.ripple }]
  ]);
}
const Pg = ee({
  name: p3,
  directives: { Ripple: tn },
  props: Cg,
  setup(e) {
    const n = k(null), o = I(() => n.value), t = I(() => e.name), r = I(() => e.disabled), { index: a, tabs: i, bindTabs: l } = f3(), { onTabClick: s, active: u, activeColor: c, inactiveColor: d, disabledColor: f, itemDirection: v, resize: m } = i, g = {
      name: t,
      index: a,
      disabled: r,
      element: o
    };
    l(g), pe(() => [e.name, e.disabled], m);
    function w() {
      return e.name != null ? u.value === e.name : u.value === (a == null ? void 0 : a.value);
    }
    function $() {
      return e.disabled ? f.value : w() ? c.value : d.value;
    }
    function y() {
      return e.disabled ? Ir("$-tab--disabled") : w() ? Ir("$-tab--active") : Ir("$-tab--inactive");
    }
    function b(P) {
      const { disabled: T, name: O, onClick: B } = e;
      T || (C(B, O ?? a.value, P), s(g));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: c,
      inactiveColor: d,
      itemDirection: v,
      n: Ir,
      classes: v3,
      computeColorStyle: $,
      computeColorClass: y,
      handleClick: b
    };
  }
});
Pg.render = m3;
var qi = Pg;
ae(qi);
le(qi, Cg);
const LI = qi;
var As = qi;
const Og = {
  name: [String, Number]
}, { name: h3, n: g3, classes: b3 } = ne("tab-item");
function y3(e, n) {
  const o = _("var-swipe-item");
  return h(), we(o, {
    class: p(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: ce(() => [
      F(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
const zg = ee({
  name: h3,
  components: { VarSwipeItem: Xt },
  props: Og,
  setup(e) {
    const n = k(!1), o = I(() => e.name), { index: t, bindTabsItems: r } = GO(), { bindLists: a } = ZO(), i = {
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
      n: g3,
      classes: b3
    };
  }
});
zg.render = y3;
var Xi = zg;
ae(Xi);
le(Xi, Og);
const FI = Xi;
var Ms = Xi;
const Tg = {
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
}, { name: w3, n: k3, classes: $3 } = ne("table");
function C3(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box")))
    },
    [
      R(
        "div",
        {
          class: p(e.n("main")),
          style: G({ height: e.toSizeUnit(e.scrollerHeight) })
        },
        [
          R(
            "table",
            {
              class: p(e.n("table")),
              style: G({ width: e.toSizeUnit(e.fullWidth) })
            },
            [
              F(e.$slots, "default")
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
          class: p(e.n("footer"))
        },
        [
          F(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Eg = ee({
  name: w3,
  props: Tg,
  setup: () => ({
    toSizeUnit: ze,
    n: k3,
    classes: $3,
    formatElevation: dn
  })
});
Eg.render = C3;
var Gi = Eg;
ae(Gi);
le(Gi, Tg);
const UI = Gi;
var Ns = Gi;
const Bg = {
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
  stickyCssMode: De(Mt, "cssMode"),
  stickyZIndex: De(Mt, "zIndex"),
  offsetTop: De(Mt, "offsetTop"),
  onClick: L(),
  onChange: L(),
  "onUpdate:active": L()
};
var sf = (e, n, o) => new Promise((t, r) => {
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
const { name: S3, n: P3, classes: O3 } = ne("tabs");
function z3(e, n) {
  return h(), we(kt(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: ce(() => [
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
              F(e.$slots, "default"),
              R(
                "div",
                {
                  class: p(e.classes(e.n("indicator"), e.n(`--layout-${e.layoutDirection}${e.indicatorPosition}-indicator`))),
                  style: G({
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
                      style: G({ background: e.indicatorColor || e.activeColor })
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
const Ig = ee({
  name: S3,
  components: { VarSticky: yt },
  inheritAttrs: !1,
  props: Bg,
  setup(e) {
    const n = k("0px"), o = k("0px"), t = k("0px"), r = k("0px"), a = k(!1), i = k(null), l = I(() => e.active), s = I(() => e.activeColor), u = I(() => e.inactiveColor), c = I(() => e.disabledColor), d = I(() => e.itemDirection), f = k(null), v = I(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: m, bindTabList: g, length: w } = d3();
    g({
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: c,
      itemDirection: d,
      resize: N,
      onTabClick: y
    }), pe(
      () => w.value,
      () => sf(this, null, function* () {
        yield bn(), N();
      })
    ), pe(() => [e.active, e.scrollable], N), Fo(N), lo(N);
    function y(z) {
      var M;
      const Y = (M = z.name.value) != null ? M : z.index.value, { active: H, onChange: U, onClick: D } = e;
      C(e["onUpdate:active"], Y), C(D, Y), Y !== H && C(U, Y);
    }
    function b() {
      return m.find(({ name: z }) => e.active === z.value);
    }
    function P(z) {
      return m.find(({ index: M }) => (z ?? e.active) === M.value);
    }
    function T() {
      if (w.value === 0)
        return;
      const { active: z } = e;
      if (Tn(z)) {
        const M = $n(z, 0, w.value - 1);
        return C(e["onUpdate:active"], M), P(M);
      }
    }
    function O() {
      a.value = e.scrollable === "always" || m.length >= 5;
    }
    function B({ element: z }) {
      const M = z.value;
      M && (e.layoutDirection === "horizontal" ? (n.value = `${M.offsetWidth}px`, t.value = `${M.offsetLeft}px`) : (o.value = `${M.offsetHeight}px`, r.value = `${M.offsetTop}px`));
    }
    function A({ element: z }) {
      if (!a.value)
        return;
      const M = i.value, Y = z.value;
      if (e.layoutDirection === "horizontal") {
        const H = Y.offsetLeft + Y.offsetWidth / 2 - M.offsetWidth / 2;
        Rt(M, {
          left: H,
          animation: kl
        });
      } else {
        const H = Y.offsetTop + Y.offsetHeight / 2 - M.offsetHeight / 2;
        Rt(M, {
          top: H,
          animation: kl
        });
      }
    }
    function N() {
      const z = b() || P() || T();
      !z || z.disabled.value || (O(), B(z), A(z));
    }
    function E() {
      return sf(this, null, function* () {
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
      Transition: _e,
      toSizeUnit: ze,
      n: P3,
      classes: O3,
      resize: N,
      resizeSticky: E,
      formatElevation: dn
    };
  }
});
Ig.render = z3;
var Zi = Ig;
ae(Zi);
le(Zi, Bg);
const HI = Zi;
var Vs = Zi;
const Dg = {
  active: {
    type: [String, Number],
    default: 0
  },
  canSwipe: {
    type: Boolean,
    default: !0
  },
  loop: Boolean,
  "onUpdate:active": L()
};
var T3 = (e, n, o) => new Promise((t, r) => {
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
const { name: E3, n: B3 } = ne("tabs-items");
function I3(e, n) {
  const o = _("var-swipe");
  return h(), we(o, {
    class: p(e.n()),
    ref: "swipe",
    loop: e.loop,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: ce(() => [
      F(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "loop", "touchable", "onChange"]);
}
const Ag = ee({
  name: E3,
  components: { VarSwipe: qt },
  props: Dg,
  setup(e) {
    const n = k(null), { tabItemList: o, bindTabItem: t, length: r } = XO();
    t({}), pe(() => e.active, s), pe(
      () => r.value,
      () => T3(this, null, function* () {
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
      const v = o.find(({ index: g }) => g.value === d), m = (f = v.name.value) != null ? f : v.index.value;
      C(e["onUpdate:active"], m);
    }
    function c() {
      return n.value;
    }
    return {
      swipe: n,
      n: B3,
      handleSwipeChange: u,
      getSwipe: c
    };
  }
});
Ag.render = I3;
var Ji = Ag;
ae(Ji);
le(Ji, Dg);
const jI = Ji;
var Rs = Ji, D3 = {
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
}, A3 = {
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
}, M3 = {
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
}, N3 = {
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
}, V3 = {
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
}, R3 = {
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
}, L3 = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, F3 = {
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
}, U3 = {
  "--collapse-text-color": "#fff",
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, H3 = {
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
}, j3 = {
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
}, Y3 = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, W3 = {
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
}, K3 = {
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
}, q3 = {
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
}, X3 = {
  "--popup-content-background-color": "var(--color-surface-container-low)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, G3 = {
  "--pull-refresh-background": "#303030",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, Z3 = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, J3 = {
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
}, Q3 = {
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
}, _3 = {
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
}, x3 = {
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
}, e8 = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, n8 = {
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
}, o8 = {
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
}, t8 = {
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
}, r8 = {
  "--tabs-background": "#1e1e1e",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, a8 = {
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
}, i8 = {
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
}, l8 = {
  "--menu-background-color": "#272727",
  "--menu-border-radius": "2px"
}, s8 = {
  "--breadcrumb-inactive-color": "#aaa",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, u8 = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e",
  "--avatar-text-color": "#f5f5f5",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-hover-transform": "scale(1.1)"
}, c8 = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, d8 = {
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
}, f8 = {
  "--option-text-color": "#fff",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, p8 = {
  "--watermark-content-color": "#ffffff"
}, v8 = {
  "--menu-select-menu-background-color": "#272727",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0",
  "--menu-select-menu-border-radius": "2px"
}, m8 = {
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
}, h8 = {
  "--avatar-group-offset": "-10px"
}, g8 = {
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px",
  "--back-top-button-border-radius": "50%"
}, b8 = {
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-background-color": "var(--color-surface-container-high)",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, y8 = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, w8 = {
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
}, k8 = {
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
}, $8 = {
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
}, C8 = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, S8 = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, P8 = {
  "--icon-size": "20px"
}, O8 = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, z8 = {
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
}, T8 = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, E8 = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, B8 = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, I8 = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, D8 = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, A8 = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "4px"
}, M8 = {
  "--rate-color": "var(--color-text)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, N8 = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, V8 = {
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
}, R8 = {
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
}, L8 = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, F8 = {
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
}, U8 = {
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
}, H8 = {
  "--select-scroller-background": "#272727",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-scroller-border-radius": "2px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, j8 = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, Y8 = Object.defineProperty, uf = Object.getOwnPropertySymbols, W8 = Object.prototype.hasOwnProperty, K8 = Object.prototype.propertyIsEnumerable, cf = (e, n, o) => n in e ? Y8(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, he = (e, n) => {
  for (var o in n || (n = {}))
    W8.call(n, o) && cf(e, o, n[o]);
  if (uf)
    for (var o of uf(n))
      K8.call(n, o) && cf(e, o, n[o]);
  return e;
}, q8 = he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he({
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
}, N3), A3), R3), V3), o8), H3), Q3), r8), e8), X3), j3), D3), F3), M3), t8), U3), G3), x3), _3), K3), n8), W3), Z3), L3), Y3), q3), a8), i8), l8), J3), s8), u8), c8), d8), f8), p8), v8), m8), h8), g8), b8), y8), w8), k8), $8), C8), S8), P8), O8), z8), T8), E8), B8), I8), D8), A8), M8), N8), V8), R8), L8), F8), U8), H8), j8), X8 = {
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
}, G8 = {
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
}, Z8 = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, J8 = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, Q8 = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, _8 = {
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
}, x8 = {
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
}, eT = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, nT = {
  "--link-default-color": "#000",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, oT = {
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
}, tT = {
  "--paper-background": "var(--color-surface-container-low)",
  "--paper-border-radius": "12px"
}, rT = {
  "--avatar-text-color": "#fff",
  "--avatar-background-color": "var(--color-primary)"
}, aT = {
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
}, iT = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, lT = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, sT = {
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
}, uT = {
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
}, cT = {
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
}, dT = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, fT = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, pT = {
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
}, vT = {
  "--collapse-background": "var(--color-surface-container-low)",
  "--collapse-text-color": "#1D1B20",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, mT = {
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
}, hT = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-fab-border-radius": "12px",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px"
}, gT = {
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
}, bT = {
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
}, yT = {
  "--action-sheet-background": "var(--color-surface-container-high)",
  "--action-sheet-title-color": "var(--color-on-surface-variant)",
  "--action-sheet-action-item-color": "#1D1B20",
  "--action-sheet-border-radius": "0px"
}, wT = {
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
}, kT = {
  "--pull-refresh-background": "var(--color-body)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, $T = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, CT = {
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
}, ST = {
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
}, PT = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, OT = {
  "--select-scroller-background": "var(--color-surface-container)",
  "--select-scroller-border-radius": "4px",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, zT = {
  "--option-text-color": "#1D1B20",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, TT = {
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
}, ET = {
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
}, BT = {
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
}, IT = {
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
}, DT = {
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
}, AT = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, MT = {
  "--avatar-group-offset": "-10px"
}, NT = {
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
  "--divider-color": "var(--color-outline)",
  "--divider-text-color": "#888",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, FT = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, UT = {
  "--icon-size": "20px"
}, HT = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, jT = {
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
}, YT = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, WT = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, KT = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, qT = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, XT = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, GT = {
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
}, ZT = {
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
}, JT = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, QT = {
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
}, _T = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, xT = {
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
}, eE = {
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
}, nE = {
  "--watermark-content-color": "#808080"
}, oE = {
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
}, tE = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, rE = Object.defineProperty, df = Object.getOwnPropertySymbols, aE = Object.prototype.hasOwnProperty, iE = Object.prototype.propertyIsEnumerable, ff = (e, n, o) => n in e ? rE(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ge = (e, n) => {
  for (var o in n || (n = {}))
    aE.call(n, o) && ff(e, o, n[o]);
  if (df)
    for (var o of df(n))
      iE.call(n, o) && ff(e, o, n[o]);
  return e;
}, lE = ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge({
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
}, X8), G8), Z8), J8), Q8), _8), x8), eT), nT), oT), tT), rT), aT), iT), lT), sT), uT), cT), dT), fT), pT), vT), mT), hT), gT), bT), yT), wT), kT), $T), CT), ST), PT), OT), zT), TT), ET), BT), IT), DT), AT), MT), NT), VT), RT), LT), FT), UT), HT), jT), YT), WT), KT), qT), XT), GT), ZT), JT), QT), _T), xT), eE), nE), oE), tE), sE = {
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
}, uE = {
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
}, cE = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, dE = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, fE = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, pE = {
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
}, vE = {
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
}, mE = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, hE = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, gE = {
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
}, bE = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "12px"
}, yE = {
  "--avatar-text-color": "#000",
  "--avatar-background-color": "var(--color-primary)",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-border": "2px solid #fff",
  "--avatar-hover-transform": "scale(1.1)"
}, wE = {
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
}, kE = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, $E = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, CE = {
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
}, SE = {
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
}, PE = {
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
}, OE = {
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
}, zE = {
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
}, TE = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, EE = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, BE = {
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
}, IE = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, DE = {
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
}, AE = {
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
}, ME = {
  "--watermark-content-color": "#ffffff"
}, NE = {
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-text-color": "var(--color-inverse-surface)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, VE = {
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
}, RE = {
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
}, LE = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, FE = {
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
}, UE = {
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
}, HE = {
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
}, jE = {
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
}, YE = {
  "--pull-refresh-background": "var(--color-surface-container-highest)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, WE = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
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
}, XE = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, GE = {
  "--select-scroller-background": "var(--color-surface-container)",
  "--select-scroller-border-radius": "4px",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, ZE = {
  "--option-text-color": "var(--color-inverse-surface)",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, JE = {
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
}, QE = {
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
}, _E = {
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
}, xE = {
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
}, e5 = {
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
}, n5 = {
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
}, o5 = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, t5 = {
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
}, r5 = {
  "--avatar-group-offset": "-10px"
}, a5 = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, i5 = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, l5 = {
  "--icon-size": "20px"
}, s5 = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, u5 = {
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
}, c5 = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, d5 = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, f5 = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, p5 = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, v5 = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, m5 = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, h5 = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, g5 = {
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
}, b5 = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, y5 = Object.defineProperty, pf = Object.getOwnPropertySymbols, w5 = Object.prototype.hasOwnProperty, k5 = Object.prototype.propertyIsEnumerable, vf = (e, n, o) => n in e ? y5(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, be = (e, n) => {
  for (var o in n || (n = {}))
    w5.call(n, o) && vf(e, o, n[o]);
  if (pf)
    for (var o of pf(n))
      k5.call(n, o) && vf(e, o, n[o]);
  return e;
}, $5 = be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be({
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
}, sE), uE), cE), dE), fE), pE), vE), mE), hE), gE), bE), yE), wE), kE), $E), CE), SE), PE), OE), zE), TE), EE), BE), IE), DE), AE), ME), NE), VE), RE), LE), FE), UE), HE), jE), YE), WE), KE), qE), XE), GE), ZE), JE), QE), _E), xE), e5), n5), o5), t5), r5), a5), i5), l5), s5), u5), c5), d5), f5), p5), v5), m5), h5), g5), b5);
function C5(e, n = {}) {
  const { viewportWidth: o = 375, viewportUnit: t = "vmin", unitPrecision: r = 6 } = n;
  return Object.entries(e).reduce((a, [i, l]) => (a[i] = l.includes("px") ? l.replace(
    /(\d+(\.\d+)?)px/g,
    (s, u) => `${Number((u / o * 100).toFixed(r))}${t}`
  ) : l, a), {});
}
const S5 = { dark: q8, md3Light: lE, md3Dark: $5, toViewport: C5 }, YI = null;
var Ls = S5;
const Yn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], zn = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], mf = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"], Mg = {
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
}, Ng = (e, n) => e === "24hr" || n === "am", Mu = (e, n, o) => {
  const t = Yn.findIndex((a) => j(a) === j(o)), r = Ng(e, n) ? o : zn[t];
  return {
    hourStr: r,
    hourNum: j(r)
  };
}, In = (e) => {
  const [n, o, t] = e.split(":");
  return {
    hour: j(n),
    minute: j(o),
    second: j(t)
  };
}, Vg = (e) => {
  var n, o;
  const { time: t, format: r, ampm: a, hour: i, max: l, min: s, disableHour: u } = e, { hourStr: c, hourNum: d } = Mu(r, a, i);
  let f = !1, v = !1;
  if (u.includes(c)) return !0;
  if (l && !s) {
    const { hour: m, minute: g } = In(l);
    f = m === d && t > g;
  }
  if (!l && s) {
    const { hour: m, minute: g } = In(s);
    f = m === d && t < g;
  }
  if (l && s) {
    const { hour: m, minute: g } = In(l), { hour: w, minute: $ } = In(s);
    f = w === d && t < $ || m === d && t > g;
  }
  return (n = e.allowedTime) != null && n.minutes && (v = (o = e.allowedTime) == null ? void 0 : o.minutes(t)), f || v;
}, Rg = (e) => {
  var n, o;
  const { time: t, format: r, ampm: a, hour: i, minute: l, max: s, min: u, disableHour: c } = e, { hourStr: d, hourNum: f } = Mu(r, a, i);
  let v = !1, m = !1;
  if (c.includes(d)) return !0;
  if (s && !u) {
    const { hour: g, minute: w, second: $ } = In(s);
    v = g === f && w < l || w === l && t > $;
  }
  if (!s && u) {
    const { hour: g, minute: w, second: $ } = In(u);
    v = g === f && w > l || w === l && t > $;
  }
  if (s && u) {
    const { hour: g, minute: w, second: $ } = In(s), { hour: y, minute: b, second: P } = In(u);
    v = g === f && w < l || y === f && b > l || g === f && w === l && t > $ || y === f && b === l && t < P;
  }
  return (n = e.allowedTime) != null && n.seconds && (m = (o = e.allowedTime) == null ? void 0 : o.seconds(t)), v || m;
}, { n: P5, classes: O5 } = ne("time-picker");
function z5(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.n("clock"))
    },
    [
      R(
        "div",
        {
          class: p(e.n("clock-hand")),
          style: G(e.handStyle)
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      (h(!0), S(
        Ae,
        null,
        qe(e.timeScales, (o, t) => (h(), S(
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
            style: G(e.getStyle(t, o, !1))
          },
          se(o),
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
          class: p(e.n("clock-inner")),
          ref: "inner"
        },
        [
          (h(!0), S(
            Ae,
            null,
            qe(e.hours24, (o, t) => (h(), S(
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
                style: G(e.getStyle(t, o, !0))
              },
              se(o),
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
const Lg = ee({
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
    const o = k(null), t = k([]), r = k([]), a = I(() => ({
      transform: `rotate(${j(e.rad)}deg)`,
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: u(),
      borderColor: u()
    })), i = I(() => {
      if (e.rad === void 0) return;
      const g = e.rad / 30;
      return g >= 0 ? g : g + 12;
    }), l = I(() => e.type === "hour" ? Yn : mf), s = (g, w) => {
      g = g ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const $ = e.type === "minute" ? Vg : Rg, y = {
        time: j(g),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: j(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return w && e.type === "minute" && Reflect.deleteProperty(y, "minute"), $(y);
    }, u = () => {
      if (i.value === void 0) return e.color;
      const g = e.isInner ? zn[i.value] : l.value[i.value];
      return l.value === mf ? s() ? "var(--time-picker-clock-item-disable-background)" : e.color : d(g) ? "var(--time-picker-clock-item-disable-background)" : e.color;
    }, c = (g, w) => w ? i.value === g && e.isInner : i.value === g && (!e.isInner || e.type !== "hour"), d = (g) => {
      if (e.type === "hour") {
        if (Ng(e.format, e.ampm)) return t.value.includes(g);
        const w = Yn.findIndex(($) => $ === g);
        return r.value.includes(w);
      }
      return s(g, !0);
    }, f = (g, w, $) => {
      const y = 2 * Math.PI / 12 * g - Math.PI / 2, b = 50 * (1 + Math.cos(y)), P = 50 * (1 + Math.sin(y)), T = () => c(g, $) ? d(w) ? {
        backgroundColor: "var(--time-picker-clock-item-disable-background)",
        color: "var(--time-picker-clock-item-disable-color)"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, { backgroundColor: O, color: B } = T();
      return {
        left: `${b}%`,
        top: `${P}%`,
        backgroundColor: O,
        color: B
      };
    }, v = () => {
      const { width: g, height: w } = nn(o.value);
      return {
        width: g,
        height: w
      };
    }, m = () => {
      if (i.value === void 0) return;
      const g = e.ampm === "am" ? Yn : zn;
      return Qo(g[i.value], 2, "0");
    };
    return pe([i, () => e.isInner], ([g, w], [$, y]) => {
      if (g === $ && w === y || e.type !== "hour" || i.value === void 0) return;
      const P = w ? zn[i.value] : m(), T = e.useSeconds ? `:${e.time.second}` : "", O = `${P}:${e.time.minute}${T}`;
      e.preventNextUpdate || n("update", O), n("change-prevent-update");
    }), pe(
      () => e.rad,
      (g, w) => {
        if (e.type === "hour" || g === void 0 || w === void 0) return;
        const $ = g / 6 >= 0 ? g / 6 : g / 6 + 60, y = w / 6 >= 0 ? w / 6 : w / 6 + 60;
        if ($ === y) return;
        let b;
        const { hourStr: P } = Mu(e.format, e.ampm, e.time.hour);
        if (e.type === "minute") {
          const T = ue().minute($).format("mm"), O = e.useSeconds ? `:${e.time.second}` : "";
          b = `${P}:${T}${O}`;
        }
        if (e.type === "second") {
          const T = ue().second($).format("ss"), O = e.useSeconds ? `:${T}` : "";
          b = `${P}:${e.time.minute}${O}`;
        }
        n("update", b);
      }
    ), pe(
      [() => e.max, () => e.min, () => e.allowedTime],
      ([g, w, $]) => {
        if (t.value = [], g && !w) {
          const { hour: y } = In(g), b = Yn.filter((T) => j(T) > y), P = zn.filter((T) => j(T) > y);
          t.value = [...b, ...P];
        }
        if (!g && w) {
          const { hour: y } = In(w), b = Yn.filter((T) => j(T) < y), P = zn.filter((T) => j(T) < y);
          t.value = [...b, ...P];
        }
        if (g && w) {
          const { hour: y } = In(g), { hour: b } = In(w), P = Yn.filter((O) => j(O) < b || j(O) > y), T = zn.filter((O) => j(O) < b || j(O) > y);
          t.value = [...P, ...T];
        }
        if ($ != null && $.hours) {
          const { hours: y } = $, b = Yn.filter((T) => !y(j(T))), P = zn.filter((T) => !y(j(T)));
          t.value = [.../* @__PURE__ */ new Set([...t.value, ...b, ...P])];
        }
        r.value = t.value.map((y) => zn.findIndex((b) => y === b)).filter((y) => y >= 0);
      },
      { immediate: !0, deep: !0 }
    ), {
      n: P5,
      classes: O5,
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
Lg.render = z5;
var T5 = Lg;
const { name: E5, n: B5, classes: I5 } = ne("time-picker");
function D5(e, n) {
  var o;
  const t = _("clock");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [
      R(
        "div",
        {
          class: p(e.n("title")),
          style: G({ background: e.titleColor || e.color })
        },
        [
          R(
            "div",
            {
              class: p(e.n("title-hint"))
            },
            se((o = e.hint) != null ? o : (e.pt ? e.pt : e.t)("timePickerHint")),
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
                    se(e.time.hour),
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
                    se(e.time.minute),
                    3
                    /* TEXT, CLASS */
                  ),
                  e.useSeconds ? (h(), S(
                    "span",
                    {
                      key: 0,
                      class: p(e.n("title-splitter"))
                    },
                    ":",
                    2
                    /* CLASS */
                  )) : X("v-if", !0),
                  e.useSeconds ? (h(), S(
                    "div",
                    {
                      key: 1,
                      class: p(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
                      onClick: n[2] || (n[2] = (r) => e.checkPanel("second"))
                    },
                    se(e.time.second),
                    3
                    /* TEXT, CLASS */
                  )) : X("v-if", !0)
                ],
                2
                /* CLASS */
              ),
              e.format === "ampm" ? (h(), S(
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
              )) : X("v-if", !0)
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
              class: p(e.n("clock-container")),
              onTouchstart: n[5] || (n[5] = (...r) => e.moveHand && e.moveHand(...r)),
              onTouchmove: n[6] || (n[6] = (...r) => e.moveHand && e.moveHand(...r)),
              onTouchend: n[7] || (n[7] = (...r) => e.end && e.end(...r)),
              ref: "container"
            },
            [
              q(_e, {
                name: `${e.n()}-panel-fade`
              }, {
                default: ce(() => [
                  (h(), we(t, {
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
          class: p(e.n("actions"))
        },
        [
          F(e.$slots, "actions")
        ],
        2
        /* CLASS */
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Fg = ee({
  name: E5,
  components: { Clock: T5 },
  props: Mg,
  setup(e) {
    const n = k(null), o = k(null), t = k(null), r = k(!1), a = k(!1), i = k(!1), l = k(!1), s = k(!1), u = k(!1), c = k(!1), d = k(0), f = k(0), v = k(), m = k("hour"), g = k("am"), w = k({
      hour: "00",
      minute: "00",
      second: "00"
    }), $ = xe({
      x: 0,
      y: 0
    }), y = xe({
      x: [],
      y: []
    }), b = I(() => m.value === "hour" ? v.value : m.value === "minute" ? d.value : f.value), { t: P } = so();
    pe(
      () => e.modelValue,
      (W) => {
        if (W === void 0 || W === "") {
          T();
          return;
        }
        const { hour: J, minute: re, second: fe } = In(W), V = ue().hour(J).format("hh"), K = ue().hour(J).format("HH"), ve = ue().minute(re).format("mm"), Se = ue().second(fe).format("ss");
        v.value = (V === "12" ? 0 : j(V)) * 30, d.value = j(ve) * 6, f.value = j(Se) * 6, w.value = M(W), e.format !== "24hr" && (g.value = Qo(`${J}`, 2, "0") === K && zn.includes(K) ? "pm" : "am"), r.value = e.format === "24hr" && zn.includes(K);
      },
      { immediate: !0 }
    );
    function T() {
      v.value = void 0, d.value = 0, f.value = 0, w.value = {
        hour: "00",
        minute: "00",
        second: "00"
      }, g.value = "am";
    }
    function O(W) {
      C(e["onUpdate:modelValue"], W), C(e.onChange, W);
    }
    function B(W) {
      return W * 57.29577951308232;
    }
    function A(W) {
      l.value = !1, c.value = !1, m.value = W;
    }
    function N(W) {
      const { disableHour: J } = t.value, re = Yn.findIndex((K) => j(K) === j(w.value.hour)), fe = W === "am" ? Yn : zn;
      return [...fe.slice(re), ...fe.slice(0, re)].find((K, ve) => (a.value = ve !== 0, !J.includes(K)));
    }
    function E(W) {
      if (e.readonly) return;
      g.value = W;
      const J = N(W);
      if (!J) return;
      const re = e.useSeconds ? `:${w.value.second}` : "", fe = `${Qo(J, 2, "0")}:${w.value.minute}${re}`;
      O(fe);
    }
    function z(W, J) {
      const re = W >= y.x[0] && W <= y.x[1], fe = J >= y.y[0] && J <= y.y[1];
      return re && fe;
    }
    function M(W) {
      const J = e.format === "24hr" ? "HH" : "hh", { hour: re, minute: fe, second: V } = In(W);
      return {
        hour: ue().hour(re).format(J),
        minute: ue().minute(fe).format("mm"),
        second: ue().second(V).format("ss")
      };
    }
    function Y(W) {
      const J = W / 30;
      return J >= 0 ? J : J + 12;
    }
    function H() {
      const { width: W, height: J } = t.value.getSize(), re = $.x - W / 2 - 8, fe = $.x + W / 2 + 8, V = $.y - J / 2 - 8, K = $.y + J / 2 + 8;
      return {
        rangeXMin: re,
        rangeXMax: fe,
        rangeYMin: V,
        rangeYMax: K
      };
    }
    function U(W, J, re) {
      const { disableHour: fe } = t.value;
      i.value = z(W, J);
      const V = Math.round(re / 30) * 30 + 90, K = Y(V), ve = r.value ? Yn[K] : zn[K];
      if (fe.includes(ve) || (r.value = e.format === "24hr" ? z(W, J) : !1), r.value !== i.value) return;
      const Se = r.value || g.value === "pm" ? zn[K] : Yn[K];
      u.value = fe.includes(Se), !u.value && (v.value = V, l.value = !0);
    }
    function D(W) {
      const { disableHour: J } = t.value, re = Math.round(W / 6) * 6 + 90, V = {
        time: re / 6 >= 0 ? re / 6 : re / 6 + 60,
        format: e.format,
        ampm: g.value,
        hour: w.value.hour,
        max: e.max,
        min: e.min,
        disableHour: J,
        allowedTime: e.allowedTime
      };
      c.value = Vg(V), !c.value && (d.value = re, s.value = !0);
    }
    function Q(W) {
      const { disableHour: J } = t.value, re = Math.round(W / 6) * 6 + 90, V = {
        time: re / 6 >= 0 ? re / 6 : re / 6 + 60,
        format: e.format,
        ampm: g.value,
        hour: w.value.hour,
        minute: j(w.value.minute),
        max: e.max,
        min: e.min,
        disableHour: J,
        allowedTime: e.allowedTime
      };
      Rg(V) || (f.value = re);
    }
    function Z() {
      const { left: W, top: J, width: re, height: fe } = nn(n.value);
      if ($.x = W + re / 2, $.y = J + fe / 2, m.value === "hour" && e.format === "24hr") {
        const { rangeXMin: V, rangeXMax: K, rangeYMin: ve, rangeYMax: Se } = H();
        y.x = [V, K], y.y = [ve, Se];
      }
    }
    function oe(W) {
      if (Me(W), e.readonly) return;
      Z();
      const { clientX: J, clientY: re } = W.touches[0], fe = J - $.x, V = re - $.y, K = Math.round(B(Math.atan2(V, fe)));
      m.value === "hour" ? U(J, re, K) : m.value === "minute" ? D(K) : Q(K);
    }
    function ye() {
      if (!e.readonly) {
        if (m.value === "hour" && l.value) {
          m.value = "minute";
          return;
        }
        m.value === "minute" && e.useSeconds && s.value && (m.value = "second");
      }
    }
    function Oe() {
      a.value = !1;
    }
    return {
      getRad: b,
      time: w,
      container: n,
      inner: t,
      picker: o,
      isInner: r,
      type: m,
      ampm: g,
      isPreventNextUpdate: a,
      n: B5,
      classes: I5,
      t: an,
      pt: P,
      moveHand: oe,
      checkPanel: A,
      checkAmpm: E,
      end: ye,
      update: O,
      changePreventUpdate: Oe,
      formatElevation: dn
    };
  }
});
Fg.render = D5;
var Qi = Fg;
ae(Qi);
le(Qi, Mg);
const WI = Qi;
var Fs = Qi;
const Ug = {
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
var Dr = (e, n, o) => new Promise((t, r) => {
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
const { name: A5, n: M5, classes: N5 } = ne("uploader");
let V5 = 0;
const R5 = ["onClick"], L5 = ["onClick"], F5 = ["src", "alt"], U5 = ["tabindex"], H5 = ["multiple", "accept", "capture", "disabled"], j5 = ["src"];
function Y5(e, n) {
  const o = _("var-icon"), t = _("var-hover-overlay"), r = _("var-form-details"), a = _("var-popup"), i = Ye("ripple"), l = Ye("hover");
  return h(), S(
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
          (h(!0), S(
            Ae,
            null,
            qe(e.files, (s) => Ve((h(), S("div", {
              class: p(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
              key: s.id,
              onClick: (u) => e.preview(s)
            }, [
              R(
                "div",
                {
                  class: p(e.n("file-name"))
                },
                se(s.name || s.url),
                3
                /* TEXT, CLASS */
              ),
              e.removable ? F(e.$slots, "remove-button", {
                key: 0,
                remove: () => {
                  e.handleRemove(s);
                }
              }, () => [
                R("div", {
                  class: p(e.n("file-close")),
                  onClick: Xn((u) => e.handleRemove(s), ["stop"])
                }, [
                  q(o, {
                    class: p(e.n("file-close-icon")),
                    "var-uploader-cover": "",
                    name: "delete"
                  }, null, 8, ["class"])
                ], 10, L5)
              ]) : X("v-if", !0),
              s.cover ? (h(), S("img", {
                key: 1,
                role: "img",
                class: p(e.n("file-cover")),
                style: G({ objectFit: s.fit }),
                src: s.cover,
                alt: s.name
              }, null, 14, F5)) : X("v-if", !0),
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
                      style: G({ width: s.state === "success" || s.state === "error" ? "100%" : `${s.progress}%` })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  )
                ],
                2
                /* CLASS */
              )
            ], 10, R5)), [
              [i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple }]
            ])),
            128
            /* KEYED_FRAGMENT */
          )),
          !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Ve((h(), S("div", {
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
              onClick: n[1] || (n[1] = Xn(() => {
              }, ["stop"]))
            }, null, 42, H5),
            F(e.$slots, "default", {}, () => [
              q(o, {
                class: p(e.n("action-icon")),
                "var-uploader-cover": "",
                name: "plus"
              }, null, 8, ["class"]),
              q(t, {
                hovering: e.hovering && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly,
                focusing: e.isFocusing && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly
              }, null, 8, ["hovering", "focusing"])
            ])
          ], 42, U5)), [
            [i, {
              disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || !!e.$slots.default
            }],
            [l, e.handleHovering, "desktop"]
          ]) : X("v-if", !0)
        ],
        2
        /* CLASS */
      ),
      q(r, {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      }, Xo({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: ce(() => [
            F(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"]),
      q(a, {
        class: p(e.n("preview")),
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
              class: p(e.n("preview-video")),
              playsinline: "true",
              "webkit-playsinline": "true",
              "x5-playsinline": "true",
              "x5-video-player-type": "h5",
              "x5-video-player-fullscreen": "false",
              controls: "",
              src: (u = e.currentPreview) == null ? void 0 : u.url
            }, null, 10, j5)) : X("v-if", !0)
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
const Hg = ee({
  name: A5,
  directives: { Ripple: tn, Hover: Dn },
  components: {
    VarIcon: Ge,
    VarPopup: Mo,
    VarFormDetails: En,
    VarHoverOverlay: Fn
  },
  props: Ug,
  setup(e) {
    const n = k(!1), o = k(null), t = k(null), r = k(!1), a = k(null), i = I(() => {
      const {
        maxlength: W,
        modelValue: { length: J }
      } = e;
      return Tn(W) ? `${J} / ${W}` : "";
    }), { form: l, bindForm: s } = Hn(), {
      errorMessage: u,
      validateWithTrigger: c,
      validate: d,
      // expose
      resetValidation: f
    } = Un(), { hovering: v, handleHovering: m } = eo(), g = I(() => {
      const { modelValue: W, hideList: J } = e;
      return J ? [] : W;
    });
    let w = !1;
    const $ = {
      getSuccess: H,
      getError: U,
      getLoading: D
    };
    C(s, {
      validate: ye,
      resetValidation: f,
      reset: Oe
    }), We(() => window, "keydown", b), We(() => window, "keyup", P), pe(
      () => e.modelValue,
      () => {
        !w && oe("onChange"), w = !1;
      },
      { deep: !0 }
    );
    function b(W) {
      n.value && ((W.key === " " || W.key === "Enter") && W.preventDefault(), W.key === "Enter" && o.value.click());
    }
    function P(W) {
      !n.value || W.key !== " " || (W.preventDefault(), o.value.click());
    }
    function T(W) {
      const { disabled: J, previewed: re, preventDefaultPreview: fe, onPreview: V } = e;
      if (l != null && l.disabled.value || J || !re || (C(V, xe(W)), fe))
        return;
      const { url: K } = W;
      if (Bc(K)) {
        Gt(K);
        return;
      }
      Ic(K) && (a.value = W, r.value = !0);
    }
    function O(W) {
      return {
        id: V5++,
        url: "",
        cover: "",
        name: W.name,
        file: W,
        progress: 0
      };
    }
    function B(W) {
      const J = W.target, { files: re } = J;
      return Array.from(re);
    }
    function A(W) {
      return Dr(this, null, function* () {
        const J = W.file;
        if (e.resolveType === "default" && J.type.startsWith("image") || e.resolveType === "data-url") {
          const fe = yield Zf(J);
          W.cover = fe, W.url = fe;
        }
        return W;
      });
    }
    function N(W) {
      return W.map(A);
    }
    function E(W) {
      const { onBeforeRead: J } = e;
      return W.map(
        (re) => new Promise((fe) => {
          J || fe({
            valid: !0,
            varFile: re
          });
          const V = po(C(J, xe(re)));
          Promise.all(V).then((K) => {
            fe({
              valid: K.every(Boolean),
              varFile: re
            });
          });
        })
      );
    }
    function z(W) {
      return Dr(this, null, function* () {
        const { maxsize: J, maxlength: re, modelValue: fe, onOversize: V, onAfterRead: K, onBeforeFilter: ve, readonly: Se, disabled: Ue } = e;
        if (l != null && l.disabled.value || l != null && l.readonly.value || Ue || Se)
          return;
        const Ne = (ke) => ke.filter((Be) => Be.file.size > j(J) ? (C(V, xe(Be)), !1) : !0), rn = (ke) => {
          const Be = Math.min(ke.length, j(re) - fe.length);
          return ke.slice(0, Be);
        }, un = (ke) => Dr(this, null, function* () {
          if (!ve)
            return ke;
          const Be = po(ve);
          for (const Qe of Be)
            ke = yield Qe(ke);
          return ke;
        });
        let me = B(W).map(O);
        me = yield un(me), me = J != null ? Ne(me) : me, me = re != null ? rn(me) : me;
        const Ke = yield Promise.all(N(me)), de = (yield Promise.all(E(Ke))).filter(({ valid: ke }) => ke).map(({ varFile: ke }) => ke);
        C(e["onUpdate:modelValue"], [...fe, ...de]), W.target.value = "", de.forEach((ke) => C(K, xe(ke)));
      });
    }
    function M(W) {
      return Dr(this, null, function* () {
        const { disabled: J, readonly: re, modelValue: fe, onBeforeRemove: V, onRemove: K } = e;
        if (l != null && l.disabled.value || l != null && l.readonly.value || J || re)
          return;
        if (V) {
          const Se = po(C(V, xe(W)));
          if ((yield Promise.all(Se)).some((Ue) => !Ue))
            return;
        }
        const ve = fe.filter((Se) => Se !== W);
        C(K, xe(W)), oe("onRemove"), C(e["onUpdate:modelValue"], ve);
      });
    }
    function Y(W) {
      if (!(l != null && l.disabled.value || e.disabled)) {
        if (e.onClickAction) {
          C(e.onClickAction, Q, W);
          return;
        }
        Q();
      }
    }
    function H() {
      return e.modelValue.filter((W) => W.state === "success");
    }
    function U() {
      return e.modelValue.filter((W) => W.state === "error");
    }
    function D() {
      return e.modelValue.filter((W) => W.state === "loading");
    }
    function Q() {
      t.value.click();
    }
    function Z() {
      a.value = null, r.value = !1, Gt.close();
    }
    function oe(W) {
      He(() => {
        const { validateTrigger: J, rules: re, modelValue: fe } = e;
        c(J, W, re, fe, $);
      });
    }
    function ye() {
      return d(e.rules, e.modelValue, $);
    }
    function Oe() {
      w = !0, C(e["onUpdate:modelValue"], []), f();
    }
    return {
      input: t,
      actionRef: o,
      files: g,
      showPreview: r,
      currentPreview: a,
      errorMessage: u,
      maxlengthText: i,
      hovering: v,
      isFocusing: n,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: M5,
      classes: N5,
      formatElevation: dn,
      toNumber: j,
      handleHovering: m,
      isHTMLSupportVideo: Ic,
      isHTMLSupportImage: Bc,
      preview: T,
      handleChange: z,
      handleRemove: M,
      getSuccess: H,
      getError: U,
      getLoading: D,
      validate: ye,
      resetValidation: f,
      reset: Oe,
      chooseFile: Q,
      closePreview: Z,
      handleActionClick: Y,
      toSizeUnit: ze
    };
  }
});
Hg.render = Y5;
var _i = Hg;
ae(_i);
le(_i, Ug);
const KI = _i;
var Us = _i;
const jg = {
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
var W5 = Object.defineProperty, K5 = Object.defineProperties, q5 = Object.getOwnPropertyDescriptors, hf = Object.getOwnPropertySymbols, X5 = Object.prototype.hasOwnProperty, G5 = Object.prototype.propertyIsEnumerable, gf = (e, n, o) => n in e ? W5(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Z5 = (e, n) => {
  for (var o in n || (n = {}))
    X5.call(n, o) && gf(e, o, n[o]);
  if (hf)
    for (var o of hf(n))
      G5.call(n, o) && gf(e, o, n[o]);
  return e;
}, J5 = (e, n) => K5(e, q5(n)), bf = (e, n, o) => new Promise((t, r) => {
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
const { name: Q5, n: _5, classes: x5 } = ne("watermark"), eB = { ref: "svgRef" }, nB = ["viewBox", "width", "height"], oB = ["width", "height"], tB = ["href", "xlink:href", "x", "y", "width", "height"];
function rB(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.n())
    },
    [
      F(e.$slots, "default"),
      (h(), we(io, {
        to: "body",
        disabled: !e.fullscreen
      }, [
        R(
          "div",
          {
            ref: "containerRef",
            class: p(e.classes(e.n("container"), [e.fullscreen, e.n("--fullscreen")])),
            style: G({
              backgroundImage: `url(${e.watermarkUrl})`,
              zIndex: e.zIndex
            })
          },
          [
            Ve(R(
              "div",
              eB,
              [
                (h(), S("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  viewBox: `0 0 ${e.width + e.gapX} ${e.height + e.gapY}`,
                  width: `${e.width + e.gapX}`,
                  height: `${e.height + e.gapY}`,
                  style: G({
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
                    R(
                      "div",
                      {
                        xmlns: "http://www.w3.org/1999/xhtml",
                        style: G({
                          transform: `translate(${e.offsetX}px, ${e.offsetY}px) rotate(${e.rotate}deg)`,
                          transformOrigin: "center"
                        })
                      },
                      [
                        F(e.$slots, "content", {}, () => [
                          R(
                            "span",
                            {
                              style: G(J5(Z5({}, e.font), { fontSize: `${e.font.fontSize}px`, color: e.textColor }))
                            },
                            se(e.content),
                            5
                            /* TEXT, STYLE */
                          )
                        ])
                      ],
                      4
                      /* STYLE */
                    )
                  ], 8, oB)) : X("v-if", !0),
                  !e.$slots.content && e.image ? (h(), S("image", {
                    key: 1,
                    href: e.imageUrl,
                    "xlink:href": e.imageUrl,
                    x: e.offsetX,
                    y: e.offsetY,
                    width: e.width,
                    height: e.height,
                    style: G({
                      transform: `rotate(${e.rotate}deg)`,
                      transformOrigin: "center"
                    })
                  }, null, 12, tB)) : X("v-if", !0)
                ], 12, nB))
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
const Yg = ee({
  name: Q5,
  props: jg,
  setup(e, { slots: n }) {
    const o = k(""), t = k(""), r = k(""), a = k(null), i = k(null);
    pe(
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
    ), Lo(d), Qt(c);
    function l() {
      return !!(n.content || e.content && !e.image);
    }
    function s() {
      return bf(this, null, function* () {
        return new Promise((f) => {
          const v = document.createElement("canvas"), m = v.getContext("2d"), g = new Image();
          g.crossOrigin = "anonymous", g.referrerPolicy = "no-referrer", g.src = e.image, g.onload = () => {
            v.width = g.width, v.height = g.height, m.drawImage(g, 0, 0), f(v.toDataURL());
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
      return bf(this, null, function* () {
        r.value = oo(i.value).color, e.image && (t.value = yield s()), yield He(), c(), o.value = u(a.value.innerHTML);
      });
    }
    return {
      svgRef: a,
      containerRef: i,
      watermarkUrl: o,
      imageUrl: t,
      textColor: r,
      n: _5,
      classes: x5,
      showContent: l,
      resize: d
    };
  }
});
Yg.render = rB;
var xi = Yg;
ae(xi);
le(xi, jg);
const qI = xi;
var Hs = xi;
const aB = "3.8.1";
function iB(e) {
  ml.install && e.use(ml), hl.install && e.use(hl), gl.install && e.use(gl), wl.install && e.use(wl), Cl.install && e.use(Cl), Sl.install && e.use(Sl), Pl.install && e.use(Pl), ea.install && e.use(ea), Ol.install && e.use(Ol), zl.install && e.use(zl), Tl.install && e.use(Tl), El.install && e.use(El), Bn.install && e.use(Bn), Bl.install && e.use(Bl), Il.install && e.use(Il), Dl.install && e.use(Dl), pt.install && e.use(pt), Al.install && e.use(Al), na.install && e.use(na), Nl.install && e.use(Nl), Vl.install && e.use(Vl), Rl.install && e.use(Rl), Ll.install && e.use(Ll), Fl.install && e.use(Fl), Vn.install && e.use(Vn), Ul.install && e.use(Ul), Wl.install && e.use(Wl), Jl.install && e.use(Jl), _l.install && e.use(_l), xl.install && e.use(xl), es.install && e.use(es), la.install && e.use(la), ns.install && e.use(ns), os.install && e.use(os), Lt.install && e.use(Lt), ts.install && e.use(ts), rs.install && e.use(rs), En.install && e.use(En), as.install && e.use(as), Dn.install && e.use(Dn), Fn.install && e.use(Fn), Ge.install && e.use(Ge), is.install && e.use(is), Gt.install && e.use(Gt), ls.install && e.use(ls), ss.install && e.use(ss), Ft.install && e.use(Ft), Wt.install && e.use(Wt), us.install && e.use(us), cs.install && e.use(cs), ht.install && e.use(ht), ds.install && e.use(ds), pl.install && e.use(pl), fs.install && e.use(fs), jt.install && e.use(jt), vt.install && e.use(vt), Yt.install && e.use(Yt), ua.install && e.use(ua), ps.install && e.use(ps), vs.install && e.use(vs), ms.install && e.use(ms), hs.install && e.use(hs), Mo.install && e.use(Mo), gs.install && e.use(gs), bs.install && e.use(bs), ca.install && e.use(ca), ys.install && e.use(ys), ws.install && e.use(ws), ks.install && e.use(ks), tn.install && e.use(tn), $s.install && e.use($s), Cs.install && e.use(Cs), Ss.install && e.use(Ss), Ps.install && e.use(Ps), zs.install && e.use(zs), Ts.install && e.use(Ts), Es.install && e.use(Es), Bs.install && e.use(Bs), yt.install && e.use(yt), Is.install && e.use(Is), qt.install && e.use(qt), Xt.install && e.use(Xt), Ds.install && e.use(Ds), As.install && e.use(As), Ms.install && e.use(Ms), Ns.install && e.use(Ns), Vs.install && e.use(Vs), Rs.install && e.use(Rs), Ls.install && e.use(Ls), Fs.install && e.use(Fs), sa.install && e.use(sa), Us.install && e.use(Us), Hs.install && e.use(Hs);
}
const XI = {
  version: aB,
  install: iB,
  ActionSheet: ml,
  Alert: hl,
  AppBar: gl,
  AutoComplete: wl,
  Avatar: Cl,
  AvatarGroup: Sl,
  BackTop: Pl,
  Badge: ea,
  BottomNavigation: Ol,
  BottomNavigationItem: zl,
  Breadcrumb: Tl,
  Breadcrumbs: El,
  Button: Bn,
  ButtonGroup: Bl,
  Card: Il,
  Cell: Dl,
  Checkbox: pt,
  CheckboxGroup: Al,
  Chip: na,
  Code: Nl,
  Col: Vl,
  Collapse: Rl,
  CollapseItem: Ll,
  CollapseTransition: Fl,
  Context: Vn,
  CountTo: Ul,
  Countdown: Wl,
  Counter: Jl,
  DatePicker: _l,
  Dialog: xl,
  Divider: es,
  Drag: la,
  Ellipsis: ns,
  Fab: os,
  FieldDecorator: Lt,
  FloatingPanel: ts,
  Form: rs,
  FormDetails: En,
  HighlighterProvider: as,
  Hover: Dn,
  HoverOverlay: Fn,
  Icon: Ge,
  Image: is,
  ImagePreview: Gt,
  IndexAnchor: ls,
  IndexBar: ss,
  Input: Ft,
  Lazy: Wt,
  Link: us,
  List: cs,
  Loading: ht,
  LoadingBar: ds,
  Locale: pl,
  LocaleProvider: fs,
  Menu: jt,
  MenuOption: vt,
  MenuSelect: Yt,
  Option: ua,
  Overlay: ps,
  Pagination: vs,
  Paper: ms,
  Picker: hs,
  Popup: Mo,
  Progress: gs,
  PullRefresh: bs,
  Radio: ca,
  RadioGroup: ys,
  Rate: ws,
  Result: ks,
  Ripple: tn,
  Row: $s,
  Select: Cs,
  Skeleton: Ss,
  Slider: Ps,
  Snackbar: zs,
  Space: Ts,
  Step: Es,
  Steps: Bs,
  Sticky: yt,
  StyleProvider: Is,
  Swipe: qt,
  SwipeItem: Xt,
  Switch: Ds,
  Tab: As,
  TabItem: Ms,
  Table: Ns,
  Tabs: Vs,
  TabsItems: Rs,
  Themes: Ls,
  TimePicker: Fs,
  Tooltip: sa,
  Uploader: Us,
  Watermark: Hs
};
export {
  ml as ActionSheet,
  hl as Alert,
  gl as AppBar,
  wl as AutoComplete,
  Cl as Avatar,
  Sl as AvatarGroup,
  Pl as BackTop,
  ea as Badge,
  Ol as BottomNavigation,
  zl as BottomNavigationItem,
  Tl as Breadcrumb,
  El as Breadcrumbs,
  Bn as Button,
  Bl as ButtonGroup,
  Il as Card,
  Dl as Cell,
  pt as Checkbox,
  Al as CheckboxGroup,
  na as Chip,
  Nl as Code,
  Vl as Col,
  Rl as Collapse,
  Ll as CollapseItem,
  Fl as CollapseTransition,
  Vn as Context,
  Ul as CountTo,
  Wl as Countdown,
  Jl as Counter,
  _l as DatePicker,
  xl as Dialog,
  es as Divider,
  la as Drag,
  ns as Ellipsis,
  os as Fab,
  Lt as FieldDecorator,
  ts as FloatingPanel,
  rs as Form,
  En as FormDetails,
  as as HighlighterProvider,
  Dn as Hover,
  Fn as HoverOverlay,
  Ge as Icon,
  is as Image,
  Gt as ImagePreview,
  ls as IndexAnchor,
  ss as IndexBar,
  Ft as Input,
  Wt as Lazy,
  us as Link,
  cs as List,
  ht as Loading,
  ds as LoadingBar,
  pl as Locale,
  fs as LocaleProvider,
  jt as Menu,
  vt as MenuOption,
  Yt as MenuSelect,
  ua as Option,
  ps as Overlay,
  $l as PIXEL,
  vs as Pagination,
  ms as Paper,
  hs as Picker,
  Mo as Popup,
  gs as Progress,
  bs as PullRefresh,
  ca as Radio,
  ys as RadioGroup,
  ws as Rate,
  ks as Result,
  tn as Ripple,
  $s as Row,
  cg as SNACKBAR_TYPE,
  Cs as Select,
  Ss as Skeleton,
  Ps as Slider,
  zs as Snackbar,
  Ts as Space,
  Es as Step,
  Bs as Steps,
  yt as Sticky,
  Is as StyleProvider,
  qt as Swipe,
  Xt as SwipeItem,
  Ds as Switch,
  As as Tab,
  Ms as TabItem,
  Ns as Table,
  Vs as Tabs,
  Rs as TabsItems,
  Ls as Themes,
  Fs as TimePicker,
  sa as Tooltip,
  Us as Uploader,
  Hs as Watermark,
  mB as _ActionSheetComponent,
  hB as _AlertComponent,
  gB as _AppBarComponent,
  PB as _AutoCompleteComponent,
  zB as _AvatarComponent,
  TB as _AvatarGroupComponent,
  IB as _BackTopComponent,
  DB as _BadgeComponent,
  AB as _BottomNavigationComponent,
  MB as _BottomNavigationItemComponent,
  NB as _BreadcrumbComponent,
  VB as _BreadcrumbsComponent,
  BB as _ButtonComponent,
  RB as _ButtonGroupComponent,
  LB as _CardComponent,
  FB as _CellComponent,
  $B as _CheckboxComponent,
  UB as _CheckboxGroupComponent,
  HB as _ChipComponent,
  jB as _CodeComponent,
  YB as _ColComponent,
  WB as _CollapseComponent,
  KB as _CollapseItemComponent,
  qB as _CollapseTransitionComponent,
  sB as _ContextComponent,
  XB as _CountToComponent,
  GB as _CountdownComponent,
  ZB as _CounterComponent,
  QB as _DatePickerComponent,
  _B as _DialogComponent,
  xB as _DividerComponent,
  eI as _DragComponent,
  oI as _EllipsisComponent,
  tI as _FabComponent,
  yB as _FieldDecoratorComponent,
  rI as _FloatingPanelComponent,
  aI as _FormComponent,
  bB as _FormDetailsComponent,
  iI as _HighlighterProviderComponent,
  pB as _HoverComponent,
  fB as _HoverOverlayComponent,
  dB as _IconComponent,
  lI as _ImageComponent,
  cI as _ImagePreviewComponent,
  dI as _IndexAnchorComponent,
  fI as _IndexBarComponent,
  wB as _InputComponent,
  OB as _LazyComponent,
  pI as _LinkComponent,
  vI as _ListComponent,
  mI as _LoadingBarComponent,
  EB as _LoadingComponent,
  vB as _LocaleComponent,
  hI as _LocaleProviderComponent,
  kB as _MenuComponent,
  CB as _MenuOptionComponent,
  SB as _MenuSelectComponent,
  gI as _OptionComponent,
  bI as _OverlayComponent,
  yI as _PaginationComponent,
  wI as _PaperComponent,
  kI as _PickerComponent,
  cB as _PopupComponent,
  $I as _ProgressComponent,
  CI as _PullRefreshComponent,
  SI as _RadioComponent,
  PI as _RadioGroupComponent,
  OI as _RateComponent,
  zI as _ResultComponent,
  uB as _RippleComponent,
  TI as _RowComponent,
  EI as _SelectComponent,
  BI as _SkeletonComponent,
  II as _SliderComponent,
  DI as _SnackbarComponent,
  AI as _SpaceComponent,
  MI as _StepComponent,
  NI as _StepsComponent,
  JB as _StickyComponent,
  VI as _StyleProviderComponent,
  sI as _SwipeComponent,
  uI as _SwipeItemComponent,
  RI as _SwitchComponent,
  LI as _TabComponent,
  FI as _TabItemComponent,
  UI as _TableComponent,
  HI as _TabsComponent,
  jI as _TabsItemsComponent,
  YI as _ThemesComponent,
  WI as _TimePickerComponent,
  nI as _TooltipComponent,
  KI as _UploaderComponent,
  qI as _WatermarkComponent,
  Cp as actionSheetProps,
  uu as add,
  Ip as alertProps,
  Ap as appBarProps,
  hv as avatarGroupProps,
  vv as avatarProps,
  $v as backTopProps,
  Sv as badgeProps,
  Ev as bottomNavigationItemProps,
  Ov as bottomNavigationProps,
  Iv as breadcrumbProps,
  Mv as breadcrumbsProps,
  Vv as buttonGroupProps,
  yv as buttonProps,
  Lv as cardProps,
  Uv as cellProps,
  jv as checkboxGroupProps,
  Qp as checkboxProps,
  Wv as chipProps,
  qv as codeProps,
  Gv as colProps,
  em as collapseItemProps,
  _v as collapseProps,
  tm as collapseTransitionProps,
  am as countToProps,
  lm as countdownProps,
  wm as counterProps,
  Tp as currentMessage,
  Em as datePickerProps,
  XI as default,
  pn as defaultLazyOptions,
  Vm as dialogProps,
  Lm as dividerProps,
  Um as dragProps,
  Wm as ellipsisProps,
  Sp as enUS,
  Op as faIR,
  qm as fabProps,
  Ca as fieldDecoratorProps,
  Np as formDetailsProps,
  Zm as formProps,
  pp as hoverOverlayProps,
  on as iconProps,
  uv as imageCache,
  oh as imagePreviewProps,
  _m as imageProps,
  ah as indexAnchorProps,
  lh as indexBarProps,
  fu as inputProps,
  iB as install,
  uh as linkProps,
  dh as listProps,
  o4 as loadingBarProps,
  co as loadingProps,
  nv as menuOptionProps,
  pu as menuProps,
  _r as menuSelectProps,
  Ep as merge,
  zp as messages,
  Ph as optionProps,
  zh as overlayProps,
  Th as paginationProps,
  Bh as paperProps,
  Dh as pickerProps,
  St as popupProps,
  Mh as progressProps,
  Vh as pullRefreshProps,
  Hh as radioGroupProps,
  Lh as radioProps,
  Yh as rateProps,
  Qh as resultProps,
  xh as rowProps,
  ng as selectProps,
  tg as skeletonProps,
  ag as sliderProps,
  Du as snackbarProps,
  pg as spaceProps,
  vg as stepProps,
  gg as stepsProps,
  Mt as stickyProps,
  yg as styleProviderProps,
  zu as swipeProps,
  kg as switchProps,
  an as t,
  Og as tabItemProps,
  Cg as tabProps,
  Tg as tableProps,
  Dg as tabsItemsProps,
  Bg as tabsProps,
  Mg as timePickerProps,
  jm as tooltipProps,
  Ug as uploaderProps,
  cu as use,
  eo as useHoverOverlay,
  su as useLocale,
  aB as version,
  jg as watermarkProps,
  iu as zhCN,
  Pp as zhHK,
  lu as zhTW
};
