import { reactive as _e, onMounted as Lo, nextTick as je, onActivated as Fo, isRef as jg, watch as de, onBeforeUnmount as ia, onDeactivated as wt, onUnmounted as Qt, inject as Us, getCurrentInstance as Qo, computed as B, ref as $, unref as pf, provide as Hs, isVNode as Yg, defineComponent as ee, h as xt, Comment as Wg, Fragment as Me, createApp as Kg, onBeforeMount as qg, createVNode as G, Teleport as ao, Transition as xe, withDirectives as Ve, vShow as _n, mergeProps as He, openBlock as h, createBlock as Ce, resolveDynamicComponent as kt, normalizeClass as p, normalizeStyle as X, createElementBlock as S, resolveComponent as _, resolveDirective as Ye, createCommentVNode as q, createElementVNode as N, toDisplayString as le, withCtx as ce, renderSlot as M, renderList as Xe, createTextVNode as Ie, onUpdated as _t, normalizeProps as To, guardReactiveProps as er, createSlots as ut, withModifiers as Xn, vModelText as Xg, withKeys as Du, TransitionGroup as Gg } from "vue";
const vf = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, L5 = _e(vf);
var Vn = _e(vf);
function js(e) {
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
const Zg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: js
}, Symbol.toStringTag, { value: "Module" }));
var Ys = Object.defineProperty, Jg = Object.defineProperties, Qg = Object.getOwnPropertyDescriptor, xg = Object.getOwnPropertyDescriptors, _g = Object.getOwnPropertyNames, Au = Object.getOwnPropertySymbols, mf = Object.prototype.hasOwnProperty, eb = Object.prototype.propertyIsEnumerable, Nu = (e, n, o) => n in e ? Ys(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, hf = (e, n) => {
  for (var o in n || (n = {}))
    mf.call(n, o) && Nu(e, o, n[o]);
  if (Au)
    for (var o of Au(n))
      eb.call(n, o) && Nu(e, o, n[o]);
  return e;
}, gf = (e, n) => Jg(e, xg(n)), bf = (e, n) => {
  for (var o in n)
    Ys(e, o, { get: n[o], enumerable: !0 });
}, nb = (e, n, o, t) => {
  if (n && typeof n == "object" || typeof n == "function")
    for (let r of _g(n))
      !mf.call(e, r) && r !== o && Ys(e, r, { get: () => n[r], enumerable: !(t = Qg(n, r)) || t.enumerable });
  return e;
}, yf = (e, n, o) => (nb(e, n, "default"), o), wf = {};
bf(wf, {
  NOOP: () => jb,
  assert: () => Tf,
  at: () => nr,
  baseRound: () => fa,
  call: () => C,
  camelize: () => ua,
  cancelAnimationFrame: () => ct,
  ceil: () => e0,
  chunk: () => gb,
  clamp: () => $n,
  clampArrayRange: () => kf,
  classes: () => Xs,
  cloneDeep: () => Yb,
  cloneDeepWith: () => Hf,
  copyText: () => Af,
  createNamespaceFn: () => Zs,
  createStorage: () => ca,
  debounce: () => Hb,
  delay: () => ob,
  difference: () => kb,
  differenceWith: () => Yr,
  doubleRaf: () => bn,
  download: () => Uf,
  ensurePrefix: () => Ib,
  ensureSuffix: () => Db,
  find: () => Ef,
  floor: () => ul,
  genNumberKey: () => hb,
  genStringKey: () => Nb,
  getAllParentScroller: () => Mf,
  getGlobalThis: () => or,
  getParentScroller: () => Js,
  getRect: () => nn,
  getScrollLeft: () => tr,
  getScrollTop: () => ho,
  getStyle: () => io,
  groupBy: () => Cb,
  hasOwn: () => Xo,
  inBrowser: () => no,
  inMobile: () => Vt,
  inViewport: () => Qs,
  intersection: () => $b,
  intersectionWith: () => If,
  isArray: () => Fe,
  isArrayBuffer: () => Ar,
  isBlob: () => fb,
  isBoolean: () => la,
  isDOMException: () => Vr,
  isDataView: () => Nr,
  isDate: () => Mr,
  isEmpty: () => Wn,
  isEmptyPlainObject: () => vb,
  isEqual: () => ab,
  isEqualWith: () => Sf,
  isError: () => Ur,
  isFile: () => db,
  isFunction: () => mn,
  isMap: () => Rr,
  isNonEmptyArray: () => ib,
  isNullish: () => lb,
  isNumber: () => Tn,
  isNumeric: () => Ks,
  isObject: () => mo,
  isPlainObject: () => Rn,
  isPrimitive: () => pb,
  isPromise: () => sb,
  isRegExp: () => Fr,
  isSet: () => Lr,
  isString: () => sn,
  isSymbol: () => ub,
  isTruthy: () => cb,
  isTypedArray: () => Hr,
  isWeakMap: () => Pf,
  isWeakSet: () => Of,
  isWindow: () => sa,
  kebabCase: () => Gs,
  localStorage: () => Lf,
  lowerFirst: () => Mb,
  mapObject: () => Eb,
  maxBy: () => Xb,
  mean: () => Jb,
  meanBy: () => Qb,
  merge: () => Wb,
  mergeWith: () => jf,
  minBy: () => Gb,
  mitt: () => js,
  motion: () => xs,
  normalizeToArray: () => po,
  objectToString: () => Cf,
  omit: () => zb,
  omitBy: () => Tb,
  once: () => Ub,
  pascalCase: () => Nf,
  pick: () => Pb,
  pickBy: () => Ob,
  prettyJSONObject: () => Vf,
  preventDefault: () => Ne,
  promiseWithResolvers: () => Bb,
  raf: () => Eo,
  randomColor: () => Rb,
  randomNumber: () => $f,
  randomString: () => Lb,
  removeArrayBlank: () => Bf,
  removeArrayEmpty: () => wb,
  removeItem: () => Do,
  requestAnimationFrame: () => Ao,
  round: () => _b,
  sample: () => xb,
  sessionStorage: () => Rf,
  shuffle: () => yb,
  slash: () => Fb,
  sum: () => Wf,
  sumBy: () => Kf,
  sumHash: () => Zb,
  supportTouch: () => zf,
  throttle: () => da,
  times: () => tb,
  toArrayBuffer: () => Kb,
  toDataURL: () => Yf,
  toNumber: () => F,
  toRawType: () => qe,
  toText: () => qb,
  toTypeString: () => Ws,
  toggleItem: () => bb,
  tryParseJSON: () => Ff,
  uniq: () => sl,
  uniqBy: () => jr,
  upperFirst: () => Vb,
  xor: () => Sb,
  xorWith: () => Df
});
function nr(e, n) {
  if (e.length)
    return n < 0 && (n += e.length), e[n];
}
function $n(e, n, o) {
  return Math.min(o, Math.max(n, e));
}
function kf(e, n) {
  return $n(e, 0, n.length - 1);
}
function ob(e) {
  return new Promise((n) => {
    setTimeout(n, e);
  });
}
function $f(e = 0, n = 100) {
  return Math.floor(Math.random() * (n - e + 1)) + e;
}
function tb(e, n) {
  return Array.from({ length: e }, (o, t) => n(t));
}
function no() {
  return typeof window < "u";
}
function or() {
  return typeof globalThis < "u" ? globalThis : no() ? window : typeof global < "u" ? global : self;
}
var { hasOwnProperty: rb } = Object.prototype;
function Xo(e, n) {
  return rb.call(e, n);
}
function Vt() {
  return no() && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
function Fe(e) {
  return Array.isArray(e);
}
var Cf = Object.prototype.toString;
function Ws(e) {
  return Cf.call(e);
}
function qe(e) {
  return Ws(e).slice(8, -1);
}
function Ar(e) {
  return qe(e) === "ArrayBuffer";
}
function la(e) {
  return typeof e == "boolean";
}
function Nr(e) {
  return qe(e) === "DataView";
}
function Mr(e) {
  return qe(e) === "Date";
}
function Vr(e) {
  return qe(e) === "DOMException";
}
function Wn(e) {
  return e == null || e === "" || Fe(e) && !e.length;
}
function Rr(e) {
  return qe(e) === "Map";
}
function Rn(e) {
  return qe(e) === "Object";
}
function Lr(e) {
  return qe(e) === "Set";
}
function mo(e) {
  return typeof e == "object" && e !== null;
}
function Fr(e) {
  return qe(e) === "RegExp";
}
function Ur(e) {
  return qe(e) === "Error";
}
function Hr(e) {
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
  ].includes(qe(e));
}
function Sf(e, n, o) {
  const t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  function a(i, l, s, u) {
    if (o(i, l) === !0 || i === l || i !== i && l !== l)
      return !0;
    if (!mo(i) || !mo(l))
      return i === l;
    if (i.constructor !== l.constructor)
      return !1;
    if (qe(i) === "String" && qe(l) === "String" || qe(i) === "Number" && qe(l) === "Number" || qe(i) === "Boolean" && qe(l) === "Boolean" || qe(i) === "BigInt" && qe(l) === "BigInt" || qe(i) === "Symbol" && qe(l) === "Symbol")
      return i.valueOf() === l.valueOf();
    if (Mr(i) && Mr(l))
      return i.getTime() === l.getTime();
    if (Fr(i) && Fr(l))
      return i.source === l.source && i.flags === l.flags;
    if (Ur(i) && Ur(l))
      return i.name === l.name && i.message === l.message && i.cause === l.cause;
    if (Vr(i) && Vr(l))
      return i.name === l.name && i.message === l.message;
    if (Hr(i) && Hr(l) || Nr(i) && Nr(l)) {
      if (i.byteLength !== l.byteLength)
        return !1;
      const d = new Uint8Array(i.buffer), f = new Uint8Array(l.buffer);
      return d.every((v, g) => v === f[g]);
    }
    if (Ar(i) && Ar(l)) {
      if (i.byteLength !== l.byteLength)
        return !1;
      const d = new Uint8Array(i), f = new Uint8Array(l);
      return d.every((v, g) => v === f[g]);
    }
    if (s.get(i) === l && u.get(l) === i)
      return !0;
    if (s.set(i, l), u.set(l, i), Rr(i) && Rr(l) || Lr(i) && Lr(l)) {
      if (i.size !== l.size)
        return !1;
      const d = [...i], f = [...l], v = d.every((g, m) => a(g, f[m], s, u));
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
        (g) => a(i[g], l[g], s, u)
      );
      return s.delete(i), u.delete(l), v;
    }
    return !1;
  }
  return a(e, n, t, r);
}
function ab(e, n) {
  return Sf(e, n, () => {
  });
}
function mn(e) {
  return typeof e == "function";
}
function ib(e) {
  return Fe(e) && !!e.length;
}
function lb(e) {
  return e == null;
}
function Tn(e) {
  return typeof e == "number";
}
function sn(e) {
  return typeof e == "string";
}
function Ks(e) {
  return Tn(e) || sn(e) && /^[-+]?\d+$/.test(e);
}
function sb(e) {
  return mo(e) && mn(e.then) && mn(e.catch);
}
function ub(e) {
  return typeof e == "symbol";
}
function cb(e) {
  return !!e;
}
function Pf(e) {
  return qe(e) === "WeakMap";
}
function Of(e) {
  return qe(e) === "WeakSet";
}
function sa(e) {
  return e === window;
}
function zf() {
  return no() && "ontouchstart" in window;
}
function db(e) {
  return qe(e) === "File";
}
function fb(e) {
  return qe(e) === "Blob";
}
function pb(e) {
  return e == null || typeof e != "object" && typeof e != "function";
}
function vb(e) {
  return Rn(e) && Object.keys(e).length === 0 && Object.getOwnPropertySymbols(e).length === 0;
}
function Tf(e, n) {
  if (!e)
    throw new Error(n);
}
function F(e) {
  return e == null ? 0 : sn(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : la(e) ? Number(e) : e;
}
var mb = 0;
function hb() {
  return mb++;
}
function gb(e, n = 1) {
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
function bb(e, n) {
  return e.includes(n) ? Do(e, n) : e.push(n), e;
}
function sl(e) {
  return [...new Set(e)];
}
function jr(e, n) {
  return e.reduce((o, t) => (o.findIndex((a) => n(t, a)) === -1 && o.push(t), o), []);
}
function Ef(e, n, o = "start") {
  let t = o === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && t >= 0 && t <= e.length - 1; ) {
    if (n(e[t], t, e))
      return [e[t], t];
    o === "start" ? t++ : t--;
  }
  return [null, -1];
}
function yb(e) {
  for (let n = e.length - 1; n > 0; n--) {
    const o = Math.floor(Math.random() * (n + 1));
    [e[n], e[o]] = [e[o], e[n]];
  }
  return e;
}
function Bf(e) {
  return e.filter((n) => n != null);
}
function wb(e) {
  return e.filter((n) => n != null && n !== "");
}
function po(e) {
  return Fe(e) ? e : [e];
}
function Yr(e, ...n) {
  const o = nr(n, -1), t = n.slice(0, -1).reduce((r, a) => [...r, ...a], []);
  return e.filter((r) => !t.some((a) => o(r, a)));
}
function kb(e, ...n) {
  return Yr(e, ...n, (o, t) => o === t);
}
function If(...e) {
  const n = nr(e, -1), o = e.slice(0, -1);
  if (o.length === 0)
    return [];
  if (o.length === 1)
    return jr(o[0], n);
  function t(r, a) {
    return r.filter((i) => a.some((l) => n(i, l)));
  }
  return jr(
    o.reduce((r, a) => t(r, a)),
    n
  );
}
function $b(...e) {
  return If(...e, (n, o) => n === o);
}
function Cb(e, n) {
  return e.reduce(
    (o, t) => {
      var r;
      const a = n(t);
      return ((r = o[a]) != null ? r : o[a] = []).push(t), o;
    },
    {}
  );
}
function Df(...e) {
  const n = nr(e, -1), o = e.slice(0, -1);
  return jr(
    o.reduce((t, r) => [...Yr(t, r, n), ...Yr(r, t, n)]),
    n
  );
}
function Sb(...e) {
  return Df(...e, (n, o) => n === o);
}
function Pb(e, n) {
  return n.reduce(
    (o, t) => (o[t] = e[t], o),
    {}
  );
}
function Ob(e, n) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)].reduce((t, r) => {
    const a = e[r];
    return n(a, r) && (t[r] = a), t;
  }, {});
}
function zb(e, n) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)].reduce(
    (t, r) => (n.includes(r) || (t[r] = e[r]), t),
    {}
  );
}
function Tb(e, n) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)].reduce((t, r) => {
    const a = e[r];
    return n(a, r) || (t[r] = a), t;
  }, {});
}
function Eb(e, n) {
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
function Bb() {
  let e, n;
  return { promise: new Promise((t, r) => {
    e = t, n = r;
  }), resolve: e, reject: n };
}
var qs = {};
bf(qs, {
  cancelAnimationFrame: () => ct,
  classes: () => Xs,
  copyText: () => Af,
  createNamespaceFn: () => Zs,
  createStorage: () => ca,
  doubleRaf: () => bn,
  download: () => Uf,
  getAllParentScroller: () => Mf,
  getParentScroller: () => Js,
  getRect: () => nn,
  getScrollLeft: () => tr,
  getScrollTop: () => ho,
  getStyle: () => io,
  inViewport: () => Qs,
  localStorage: () => Lf,
  mitt: () => js,
  motion: () => xs,
  prettyJSONObject: () => Vf,
  preventDefault: () => Ne,
  raf: () => Eo,
  requestAnimationFrame: () => Ao,
  sessionStorage: () => Rf,
  tryParseJSON: () => Ff
});
function ct(e) {
  const n = or();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Xs(...e) {
  return e.map((n) => {
    if (Fe(n)) {
      const [o, t, r = null] = n;
      return o ? t : r;
    }
    return n;
  });
}
function Af(e) {
  if (!e)
    return;
  const n = document.createElement("textarea");
  n.value = e, n.style.position = "fixed", n.style.opacity = "0", document.body.appendChild(n), n.select(), document.execCommand("copy"), document.body.removeChild(n);
}
function ua(e) {
  return e = e.replace(/-(\w)/g, (n, o) => o.toUpperCase()), e.replace(e.charAt(0), e.charAt(0).toLowerCase());
}
function Ib(e, n) {
  return e.startsWith(n) ? e : n + e;
}
function Db(e, n) {
  return e.endsWith(n) ? e : e + n;
}
var Ab = 0;
function Nb() {
  return `generated-key-${Ab++}`;
}
function Gs(e) {
  return e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase();
}
function Nf(e) {
  return ua(e).replace(e.charAt(0), e.charAt(0).toUpperCase());
}
function Mb(e) {
  return e.charAt(0).toLowerCase() + e.slice(1);
}
function Vb(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Rb() {
  const e = "0123456789abcdef";
  let n = "#";
  for (let o = 0; o < 6; o++)
    n += e[Math.floor(Math.random() * 16)];
  return n;
}
function Lb(e = 10) {
  let n = o();
  for (; n.length < e; )
    n += o();
  function o() {
    return Math.random().toString(36).slice(2);
  }
  return n.slice(0, e);
}
function Fb(e) {
  return e.startsWith("\\\\?\\") ? e : e.replace(/\\/g, "/");
}
function Zs(e) {
  return (n) => {
    const o = `${e}-${n}`, t = (r) => r ? r[0] === "$" ? r.replace("$", e) : r.startsWith("--") ? `${o}${r}` : `${o}__${r}` : o;
    return {
      name: Nf(o),
      n: t,
      classes: Xs
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
function io(e) {
  return window.getComputedStyle(e);
}
function Js(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const o = /(scroll|auto)/, { overflowY: t, overflow: r } = io(n);
    if (o.test(t) || o.test(r))
      return n;
  }
  return window;
}
function Mf(e) {
  const n = [];
  let o = e;
  for (; !sa(o); )
    o = Js(o), n.push(o);
  return n;
}
function nn(e) {
  if (sa(e)) {
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
    return gf(hf({}, t), {
      toJSON: () => t
    });
  }
  return e.getBoundingClientRect();
}
function tr(e) {
  const n = "scrollLeft" in e ? e.scrollLeft : e.scrollX;
  return Math.max(n, 0);
}
function ho(e) {
  const n = "scrollTop" in e ? e.scrollTop : e.scrollY;
  return Math.max(n, 0);
}
function Qs(e) {
  const { top: n, bottom: o, left: t, right: r } = nn(e), { width: a, height: i } = nn(window), l = t <= a && r >= 0, s = n <= i && o >= 0;
  return l && s;
}
function Vf(e) {
  return JSON.stringify(e, null, 2);
}
function Ne(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function Eo() {
  return new Promise((e) => {
    Ao(e);
  });
}
function ca(e) {
  return gf(hf({}, e), {
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
var Rf = ca(or().sessionStorage), Lf = ca(or().localStorage);
function Ff(e) {
  try {
    return JSON.parse(e);
  } catch {
    return;
  }
}
function Uf(e, n = "file") {
  const o = document.createElement("a");
  o.style.display = "none", o.href = sn(e) ? e : URL.createObjectURL(e), o.download = n, document.body.appendChild(o), o.click(), URL.revokeObjectURL(o.href), document.body.removeChild(o);
}
function xs(e) {
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
  function g() {
    if (l === "running" || l === "finished")
      return;
    y("running");
    const b = performance.now();
    d = d ?? b, v += f != null ? b - f : 0, f = void 0, P();
    function P() {
      c = Ao(() => {
        const z = performance.now() - d - v, D = $n(z / t, 0, 1);
        if (s = u * a(D) + n, D >= 1) {
          y("finished"), r({ value: o, done: !0 });
          return;
        }
        r({ value: s, done: !1 }), P();
      });
    }
  }
  function m() {
    l === "running" && (ct(c), y("paused"), f = performance.now());
  }
  function w() {
    ct(c), y("pending"), s = n, c = void 0, d = void 0, f = void 0, v = 0;
  }
  function k() {
    return l;
  }
  function y(b) {
    l = b, i(b);
  }
  return {
    start: g,
    pause: m,
    reset: w,
    getState: k
  };
}
yf(qs, Zg);
yf(wf, qs);
function C(e, ...n) {
  if (Fe(e))
    return e.map((o) => o(...n));
  if (e)
    return e(...n);
}
function Ub(e) {
  let n = !1, o;
  return function(...t) {
    return n || (n = !0, o = e.apply(this, t)), o;
  };
}
function Hb(e, n = 0) {
  let o;
  return function(...t) {
    o && clearTimeout(o), o = setTimeout(() => {
      e.apply(this, t);
    }, n);
  };
}
function da(e, n = 200) {
  let o, t = 0;
  return function r(...a) {
    const i = performance.now(), l = i - t;
    t || (t = i), o && clearTimeout(o), l >= n ? (e.apply(this, a), t = i) : o = setTimeout(() => {
      r.apply(this, a);
    }, n - l);
  };
}
function jb() {
}
function Hf(e, n) {
  const o = /* @__PURE__ */ new WeakMap();
  function t(i, l) {
    const s = n(i);
    if (s !== void 0)
      return s;
    if (!mo(i))
      return i;
    if (l.has(i))
      return l.get(i);
    if (Mr(i))
      return new Date(i);
    if (Fr(i))
      return new RegExp(i);
    if (Rr(i)) {
      const u = /* @__PURE__ */ new Map();
      return l.set(i, u), i.forEach((c, d) => {
        u.set(t(d, l), t(c, l));
      }), u;
    }
    if (Lr(i)) {
      const u = /* @__PURE__ */ new Set();
      return l.set(i, u), i.forEach((c) => {
        u.add(t(c, l));
      }), u;
    }
    if (qe(i) === "String" || qe(i) === "Number" || qe(i) === "Boolean")
      return a(i, i.valueOf());
    if (Pf(i) || Of(i) || Ur(i) || Vr(i))
      return {};
    if (Hr(i))
      return a(i, r(i.buffer), i.byteOffset, i.length);
    if (Nr(i))
      return a(i, r(i.buffer), i.byteOffset, i.byteLength);
    if (Ar(i))
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
function Yb(e) {
  return Hf(e, () => {
  });
}
function jf(e, ...n) {
  const o = nr(n, -1), t = [e, ...n.slice(0, -1)];
  let r = t.length - 1, a = t[r];
  for (; r; )
    a = i(t[r - 1], a, o), r--;
  function i(l, s, u) {
    function c(d, f) {
      for (const v in f)
        if (Xo(f, v)) {
          const g = f[v], m = d[v], w = u(m, g, v, l, s);
          w !== void 0 ? d[v] = w : mo(g) ? mo(m) ? d[v] = c(m, g) : d[v] = c(Fe(g) ? [] : {}, g) : d[v] = g;
        }
      return d;
    }
    return c(l, s);
  }
  return a;
}
function Wb(e, ...n) {
  return jf(e, ...n, () => {
  });
}
function Kb(e) {
  return new Promise((n) => {
    const o = new FileReader();
    o.onload = () => {
      n(o.result);
    }, o.readAsArrayBuffer(e);
  });
}
function Yf(e) {
  return new Promise((n) => {
    const o = new FileReader();
    o.onload = () => {
      n(o.result);
    }, o.readAsDataURL(e);
  });
}
function qb(e) {
  return new Promise((n) => {
    const o = new FileReader();
    o.onload = () => {
      n(o.result);
    }, o.readAsText(e);
  });
}
function Xb(e, n) {
  if (e.length)
    return e.reduce((o, t) => n(o) > n(t) ? o : t, e[0]);
}
function Gb(e, n) {
  if (e.length)
    return e.reduce((o, t) => n(o) < n(t) ? o : t, e[0]);
}
function Wf(e) {
  return e.reduce((n, o) => n + o, 0);
}
function Kf(e, n) {
  return e.reduce((o, t) => o + n(t), 0);
}
function Zb(e) {
  function n(t, r) {
    for (let a = 0; a < r.length; a++) {
      const i = r.charCodeAt(a);
      t = (t << 5) - t + i, t |= 0;
    }
    return t < 0 ? t * -2 : t;
  }
  function o(t, r, a, i) {
    return t = n(t, a), t = n(t, Ws(r)), t = n(t, typeof r), r === null ? n(t, "null") : r === void 0 ? n(t, "undefined") : mo(r) || mn(r) ? i.includes(r) ? n(t, `[Circular]${a}`) : (i.push(r), t = Object.keys(r).sort().reduce((l, s) => o(l, r[s], s, i), t), mn(r.valueOf) ? n(t, String(r.valueOf())) : t) : n(t, r.toString());
  }
  return o(0, e, "", []).toString(16).padStart(8, "0");
}
function Jb(e) {
  return Wf(e) / e.length;
}
function Qb(e, n) {
  return Kf(e, n) / e.length;
}
function xb(e) {
  if (e.length)
    return e[$f(0, e.length - 1)];
}
function _b(e, n = 0) {
  return fa(e, n, Math.round);
}
function fa(e, n = 0, o) {
  return n = $n(n, -292, 292), n ? +`${o(`${e}e${n}`)}e${-n}` : o(e);
}
function ul(e, n = 0) {
  return fa(e, n, Math.floor);
}
function e0(e, n = 0) {
  return fa(e, n, Math.ceil);
}
function Ln(e, n, o) {
  return Tf(e, `Varlet [${n}]: ${o}`);
}
function n0(e, n) {
  console.warn(`Varlet [${e}]: ${n}`);
}
function lt(e, n) {
  console.error(`Varlet [${e}]: ${n}`);
}
var o0 = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, t0 = Object.defineProperty, Wr = Object.getOwnPropertySymbols, qf = Object.prototype.hasOwnProperty, Xf = Object.prototype.propertyIsEnumerable, Mu = (e, n, o) => n in e ? t0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, r0 = (e, n) => {
  for (var o in n || (n = {}))
    qf.call(n, o) && Mu(e, o, n[o]);
  if (Wr)
    for (var o of Wr(n))
      Xf.call(n, o) && Mu(e, o, n[o]);
  return e;
}, a0 = (e, n) => {
  var o = {};
  for (var t in e)
    qf.call(e, t) && n.indexOf(t) < 0 && (o[t] = e[t]);
  if (e != null && Wr)
    for (var t of Wr(e))
      n.indexOf(t) < 0 && Xf.call(e, t) && (o[t] = e[t]);
  return o;
};
function yn(e) {
  let n = !1;
  Lo(() => {
    e(), je(() => {
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
  const s = (v) => mn(v) ? v() : pf(v), u = (v) => {
    if (i || l)
      return;
    const g = s(v);
    g && (g.addEventListener(n, o, {
      passive: r,
      capture: a
    }), i = !0);
  }, c = (v) => {
    if (!i || l)
      return;
    const g = s(v);
    g && (g.removeEventListener(n, o, {
      capture: a
    }), i = !1);
  };
  let d;
  jg(e) && (d = de(
    () => e.value,
    (v, g) => {
      c(g), u(v);
    }
  ));
  const f = () => {
    d == null || d(), c(e), l = !0;
  };
  return yn(() => {
    u(e);
  }), ia(() => {
    c(e);
  }), wt(() => {
    c(e);
  }), f;
}
function Gf(e, n, o) {
  if (!no())
    return;
  We(document, n, (r) => {
    const a = mn(e) ? e() : pf(e);
    a && !a.contains(r.target) && o(r);
  });
}
function rr(e) {
  let n = !1;
  wt(() => {
    n = !0, e();
  }), Qt(() => {
    n || e();
  });
}
function _s(e) {
  const n = Qo();
  return e in n.provides;
}
function wn(e) {
  if (!_s(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const o = Us(e), { childInstances: t, collect: r, clear: a } = o, i = a0(o, ["childInstances", "collect", "clear"]), l = Qo();
  return {
    index: B(() => t.indexOf(l)),
    parentProvider: i,
    bindParent: (c) => {
      Lo(() => {
        je().then(() => {
          r(l, c);
        });
      }), ia(() => {
        je().then(() => {
          a(l, c);
        });
      });
    }
  };
}
function i0(e) {
  const n = [], o = (t) => {
    if (t != null && t.component) {
      o(t == null ? void 0 : t.component.subTree);
      return;
    }
    Fe(t == null ? void 0 : t.children) && t.children.forEach((r) => {
      Yg(r) && (n.push(r), o(r));
    });
  };
  return o(e), n;
}
function kn(e) {
  const n = Qo(), o = _e([]), t = [], r = B(() => o.length), a = () => {
    const u = i0(n.subTree);
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
      Hs(e, r0({
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
function l0(e, n) {
  const o = $(!1);
  return de(
    e,
    (t) => {
      n === t && (o.value = !0);
    },
    { immediate: !0 }
  ), o;
}
function s0(e, n) {
  if (e > n)
    return "horizontal";
  if (n > e)
    return "vertical";
}
function $t() {
  const e = $(0), n = $(0), o = $(0), t = $(0), r = $(0), a = $(0), i = $(0), l = $(0), s = $(0), u = $(0), c = $(), d = $(!1), f = $(!1), v = $(0), g = $(0);
  let m = null;
  const w = () => {
    e.value = 0, n.value = 0, o.value = 0, t.value = 0, r.value = 0, a.value = 0, i.value = 0, l.value = 0, s.value = 0, u.value = 0, c.value = void 0, d.value = !1, f.value = !1, v.value = 0, g.value = 0;
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
    distance: g,
    resetTouch: w,
    startTouch: (z) => {
      w();
      const { clientX: D, clientY: T } = z.touches[0];
      e.value = D, n.value = T, i.value = D, l.value = T, d.value = !0, v.value = performance.now(), f.value = !1, m && window.cancelAnimationFrame(m);
    },
    moveTouch: (z) => {
      const { clientX: D, clientY: T } = z.touches[0];
      f.value = !0, o.value = D - e.value, t.value = T - n.value, r.value = Math.abs(o.value), a.value = Math.abs(t.value), g.value = Math.sqrt(r.value ** 2 + a.value ** 2), s.value = D - i.value, u.value = T - l.value, c.value || (c.value = s0(r.value, a.value)), i.value = D, l.value = T;
    },
    endTouch: () => {
      d.value = !1, m = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    },
    isReachTop: (z) => ho(z) === 0 && t.value > 0,
    isReachBottom: (z, D = 1) => {
      const { scrollHeight: T, clientHeight: I, scrollTop: U } = z, j = Math.abs(T - U - I);
      return t.value < 0 && j <= D;
    }
  };
}
function Zf() {
  const e = Qo(), n = Gs(e.type.name), o = $(void 0);
  return Lo(() => {
    o.value = `${n}-${e.uid}`;
  }), o;
}
function u0(e = {}) {
  const { initialWidth: n = 0, initialHeight: o = 0 } = e, t = $(n), r = $(o), a = () => {
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
    return B({
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
      c = !1, u.value = s(), je(() => {
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
function c0(e) {
  const n = $(r(e.from)), o = $("pending");
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
    return xs({
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
var d0 = Object.defineProperty, f0 = Object.defineProperties, p0 = Object.getOwnPropertyDescriptors, Vu = Object.getOwnPropertySymbols, v0 = Object.prototype.hasOwnProperty, m0 = Object.prototype.propertyIsEnumerable, Ru = (e, n, o) => n in e ? d0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, cl = (e, n) => {
  for (var o in n || (n = {}))
    v0.call(n, o) && Ru(e, o, n[o]);
  if (Vu)
    for (var o of Vu(n))
      m0.call(n, o) && Ru(e, o, n[o]);
  return e;
}, h0 = (e, n) => f0(e, p0(n)), Lu = (e, n, o) => new Promise((t, r) => {
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
        if (Rn(a)) {
          n[t] = h0(cl({}, a), {
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
function g0(e) {
  const n = Kg(e), o = document.createElement("div");
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
      return () => xt(e, cl(cl({}, n), o));
    }
  }, { unmount: r } = g0(t);
  return { unmountInstance: r };
}
function Jf(e) {
  const n = [];
  return e.forEach((o) => {
    if (o.type !== Wg) {
      if (o.type === Me && Fe(o.children)) {
        o.children.forEach((t) => {
          n.push(t);
        });
        return;
      }
      n.push(o);
    }
  }), n;
}
function Fu(e) {
  return Rn(e) && mn(e.safeParseAsync);
}
function b0(e) {
  return Rn(e) && Xo(e, "success");
}
function Un() {
  const e = $(""), n = (r, a, i) => Lu(this, null, function* () {
    const l = po(r).filter((u) => Fu(u) || mn(u)), s = yield Promise.all(
      l.map((u) => Fu(u) ? u.safeParseAsync(a) : u(a, i))
    );
    return o(), !s.some((u) => {
      if (b0(u)) {
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
    validateWithTrigger: (r, a, i, l, s) => Lu(this, null, function* () {
      r.includes(a) && (yield n(i, l, s)) && (e.value = "");
    })
  };
}
function y0(e) {
  We(() => window, "hashchange", e), We(() => window, "popstate", e);
}
function xo() {
  const e = $(!1);
  return Fo(() => {
    e.value = !1;
  }), wt(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
const ne = Zs("var");
function V(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function dn(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), `var-elevation--${e}`);
}
const ar = ee({
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
    return () => sn(e.is) ? xt(e.tag, e.is) : e.is;
  }
});
var w0 = Object.defineProperty, k0 = Object.defineProperties, $0 = Object.getOwnPropertyDescriptors, Uu = Object.getOwnPropertySymbols, C0 = Object.prototype.hasOwnProperty, S0 = Object.prototype.propertyIsEnumerable, Hu = (e, n, o) => n in e ? w0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Qf = (e, n) => {
  for (var o in n || (n = {}))
    C0.call(n, o) && Hu(e, o, n[o]);
  if (Uu)
    for (var o of Uu(n))
      S0.call(n, o) && Hu(e, o, n[o]);
  return e;
}, P0 = (e, n) => k0(e, $0(n));
const { n: xf } = ne("ripple"), ju = 250;
function O0(e) {
  const { zIndex: n, position: o } = io(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", o === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Yu(e) {
  return "touches" in e;
}
function z0(e, n) {
  const { top: o, left: t } = nn(e), { clientWidth: r, clientHeight: a } = e, i = Math.sqrt(r ** 2 + a ** 2) / 2, l = i * 2, s = Yu(n) ? n.touches[0].clientX - t : r / 2, u = Yu(n) ? n.touches[0].clientY - o : a / 2, c = (r - i * 2) / 2, d = (a - i * 2) / 2, f = s - i, v = u - i;
  return { x: f, y: v, centerX: c, centerY: d, size: l };
}
function eu(e) {
  const n = this._ripple;
  if (n.removeRipple(), n.disabled || n.tasker || !Vn.enableRipple)
    return;
  const o = () => {
    n.tasker = null;
    const { x: t, y: r, centerX: a, centerY: i, size: l } = z0(this, e), s = document.createElement("div");
    s.classList.add(xf()), s.style.opacity = "0", s.style.transform = `translate(${t}px, ${r}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), O0(this), this.appendChild(s), window.setTimeout(() => {
      s.style.transform = `translate(${a}px, ${i}px) scale3d(1, 1, 1)`, s.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(o, 30);
}
function Kr() {
  const e = this._ripple, n = () => {
    const o = this.querySelectorAll(`.${xf()}`);
    if (!o.length)
      return;
    const t = o[o.length - 1], r = ju - performance.now() + Number(t.dataset.createdAt);
    window.setTimeout(() => {
      t.style.opacity = "0", window.setTimeout(() => {
        var a;
        return (a = t.parentNode) == null ? void 0 : a.removeChild(t);
      }, ju);
    }, r);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function _f() {
  if (!zf() || !Vn.enableRipple)
    return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
let qr = !1;
function T0(e) {
  qr || !(e.key === " " || e.key === "Enter") || (eu.call(this, e), qr = !0);
}
function Wu() {
  qr && (Kr.call(this), qr = !1);
}
function E0(e, n) {
  var o;
  e._ripple = P0(Qf({
    tasker: null
  }, (o = n.value) != null ? o : {}), {
    removeRipple: Kr.bind(e)
  }), e.addEventListener("touchstart", eu, { passive: !0 }), e.addEventListener("touchmove", _f, { passive: !0 }), e.addEventListener("dragstart", Kr, { passive: !0 }), e.addEventListener("keydown", T0), e.addEventListener("keyup", Wu), e.addEventListener("blur", Wu), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("dragend", e._ripple.removeRipple, { passive: !0 });
}
function B0(e) {
  e.removeEventListener("touchstart", eu), e.removeEventListener("touchmove", _f), e.removeEventListener("dragstart", Kr), !(!e._ripple || !e._ripple.removeRipple) && (document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple), document.removeEventListener("dragend", e._ripple.removeRipple));
}
function I0(e, n) {
  var o, t, r, a, i, l;
  const s = {
    color: (o = n.value) == null ? void 0 : o.color,
    disabled: (t = n.value) == null ? void 0 : t.disabled
  };
  (s.color !== ((r = e._ripple) == null ? void 0 : r.color) || s.disabled !== ((a = e._ripple) == null ? void 0 : a.disabled)) && (e._ripple = Qf({
    tasker: s.disabled ? null : (i = e._ripple) == null ? void 0 : i.tasker,
    removeRipple: (l = e._ripple) == null ? void 0 : l.removeRipple
  }, s));
}
const ep = {
  mounted: E0,
  unmounted: B0,
  updated: I0,
  install(e) {
    e.directive("ripple", this);
  }
}, F5 = ep;
var tn = ep;
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
  onOpen: V(),
  onOpened: V(),
  onClose: V(),
  onClosed: V(),
  onKeyEscape: V(),
  onClickOverlay: V(),
  "onUpdate:show": V(),
  // internal for Dialog
  onRouteChange: V()
}, { n: Ku } = ne("");
function np() {
  Object.keys(Vn.locks).length <= 0 ? document.body.classList.remove(Ku("$--lock")) : document.body.classList.add(Ku("$--lock"));
}
function pr(e) {
  Vn.locks[e] = 1, np();
}
function vr(e) {
  delete Vn.locks[e], np();
}
function ir(e, n) {
  const { uid: o } = Qo();
  n && de(n, (t) => {
    t === !1 ? vr(o) : t === !0 && e() === !0 && pr(o);
  }), de(e, (t) => {
    n && n() === !1 || (t === !0 ? pr(o) : vr(o));
  }), qg(() => {
    n && n() === !1 || e() === !0 && pr(o);
  }), Qt(() => {
    n && n() === !1 || e() === !0 && vr(o);
  }), Fo(() => {
    n && n() === !1 || e() === !0 && pr(o);
  }), wt(() => {
    n && n() === !1 || e() === !0 && vr(o);
  });
}
function lr(e, n) {
  const o = $(Vn.zIndex);
  return de(
    e,
    (t) => {
      t && (Vn.zIndex += n, o.value = Vn.zIndex);
    },
    { immediate: !0 }
  ), { zIndex: o };
}
const bo = [];
function nu(e, n) {
  const { uid: o } = Qo();
  de(e, (i) => {
    i && !a(o) ? r() : setTimeout(() => {
      Do(bo, a(o));
    });
  }), yn(() => {
    e() && r();
  }), rr(() => {
    Do(bo, a(o));
  });
  function t() {
    return bo.length === 0 ? !0 : (bo.sort((i, l) => i.zIndex.value - l.zIndex.value), bo[bo.length - 1].uid === o);
  }
  function r() {
    a(o) || bo.push({ uid: o, zIndex: n });
  }
  function a(i) {
    return bo.find((l) => l.uid === i);
  }
  return {
    onStackTop: t
  };
}
const op = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function tp() {
  const { bindParent: e, parentProvider: n, index: o } = wn(op);
  return {
    index: o,
    popup: n,
    bindPopup: e
  };
}
function D0() {
  const { bindChildren: e, childProviders: n, length: o } = kn(op);
  return {
    length: o,
    popupItems: n,
    bindPopupItems: e
  };
}
var A0 = Object.defineProperty, qu = Object.getOwnPropertySymbols, N0 = Object.prototype.hasOwnProperty, M0 = Object.prototype.propertyIsEnumerable, Xu = (e, n, o) => n in e ? A0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, V0 = (e, n) => {
  for (var o in n || (n = {}))
    N0.call(n, o) && Xu(e, o, n[o]);
  if (qu)
    for (var o of qu(n))
      M0.call(n, o) && Xu(e, o, n[o]);
  return e;
};
const {
  name: R0,
  n: jn,
  classes: xi
} = ne("popup");
var pa = ee({
  name: R0,
  inheritAttrs: !1,
  props: St,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const t = l0(() => e.show, !0), {
      zIndex: r
    } = lr(() => e.show, 3), a = B(() => {
      var g;
      return (g = e.zIndex) != null ? g : r.value;
    }), {
      onStackTop: i
    } = nu(() => e.show, a), {
      disabled: l
    } = xo(), {
      bindPopupItems: s
    } = D0();
    ir(() => e.show, () => e.lockScroll), de(() => e.show, (g) => {
      C(g ? e.onOpen : e.onClose);
    }), s({
      show: B(() => e.show)
    }), We(() => window, "keydown", v), y0(() => C(e.onRouteChange));
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
        class: xi(jn("overlay"), g),
        style: V0({
          zIndex: a.value - 1
        }, m),
        onClick: u
      }, null);
    }
    function d() {
      return Ve(G("div", He({
        class: xi(jn("content"), jn(`--${e.position}`), [e.defaultStyle, jn("--content-background-color")], [e.defaultStyle, jn("$-elevation--3")], [e.safeArea, jn("--safe-area")], [e.safeAreaTop, jn("--safe-area-top")]),
        style: {
          zIndex: a.value
        },
        role: "dialog",
        "aria-modal": "true"
      }, o), [t.value && C(n.default)]), [[_n, e.show]]);
    }
    function f() {
      return G(xe, {
        name: jn("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [Ve(G("div", {
          class: xi(jn("$--box"), jn(), [!e.overlay, jn("--pointer-events-none")]),
          style: {
            zIndex: a.value - 2
          }
        }, [e.overlay && c(), G(xe, {
          name: e.transition || jn(`$-pop-${e.position}`)
        }, {
          default: () => [d()]
        })]), [[_n, e.show]])]
      });
    }
    function v(g) {
      !i() || g.key !== "Escape" || !e.show || (C(e.onKeyEscape), e.closeOnKeyEscape && (Ne(g), C(e["onUpdate:show"], !1)));
    }
    return () => {
      const {
        teleport: g
      } = e;
      return g ? G(ao, {
        to: g,
        disabled: l.value
      }, {
        default: () => [f()]
      }) : f();
    };
  }
});
re(pa);
ie(pa, St);
const U5 = pa;
var No = pa;
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
function L0(e) {
  const { left: n } = nn(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function Gu(e) {
  const { top: n } = nn(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function _i(e) {
  const { transform: n } = io(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Mo(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const o = /(scroll|auto)/, { overflowY: t, overflow: r } = io(n);
    if (o.test(t) || o.test(r))
      return n;
  }
  return window;
}
function F0(e) {
  const n = [];
  let o = e;
  for (; !sa(o); )
    o = Mo(o), n.push(o);
  return n;
}
function rp(e, n) {
  if (sn(e)) {
    const o = document.querySelector(e);
    return Ln(!!o, n, "target element cannot found"), o;
  }
  return Ln(mo(e), n, 'type of prop "target" should be an element object'), e;
}
function U0() {
  const { width: e, height: n } = nn(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
const H0 = (e) => sn(e) && e.endsWith("rem"), j0 = (e) => sn(e) && e.endsWith("px") || Tn(e), Y0 = (e) => sn(e) && e.endsWith("vw"), W0 = (e) => sn(e) && e.endsWith("vh"), K0 = (e) => sn(e) && e.endsWith("vmin"), q0 = (e) => sn(e) && e.endsWith("vmax"), en = (e) => {
  if (Ks(e))
    return Number(e);
  if (j0(e))
    return +e.replace("px", "");
  if (!no())
    return 0;
  const { vw: n, vh: o, vMin: t, vMax: r } = U0();
  if (Y0(e))
    return +e.replace("vw", "") * n / 100;
  if (W0(e))
    return +e.replace("vh", "") * o / 100;
  if (K0(e))
    return +e.replace("vmin", "") * t / 100;
  if (q0(e))
    return +e.replace("vmax", "") * r / 100;
  if (H0(e)) {
    const a = +e.replace("rem", ""), i = io(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return sn(e) ? F(e) : 0;
}, Oe = (e) => {
  if (e != null)
    return Ks(e) ? `${e}px` : String(e);
}, On = (e, n = 1) => {
  if (e == null)
    return;
  const o = Oe(e), t = o.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
  return `${parseFloat(o) * n}${t}`;
};
function Rt(e, { top: n = 0, left: o = 0, duration: t = 300, animation: r }) {
  const a = Date.now(), i = ho(e), l = tr(e);
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
function ap(e) {
  return Object.entries(e ?? {}).reduce((n, [o, t]) => {
    const r = o.startsWith("--") ? o : `--${Gs(o)}`;
    return n[r] = t, n;
  }, {});
}
function Xr(e) {
  return e === "start" || e === "end" ? `flex-${e}` : e;
}
const Zu = ["button", "input", "select", "textarea", "[tabindex]", "[href]"].map((e) => `${e}:not([disabled])`).join(", ");
function ip(e, n, o) {
  var t;
  const r = n.querySelectorAll(Zu);
  if (!r.length)
    return;
  const a = [e, ...Array.from(e.querySelectorAll(Zu))].findIndex(
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
var X0 = (e, n, o) => new Promise((t, r) => {
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
const { name: G0, n: Z0, classes: J0 } = ne("icon");
function Q0(e, n) {
  return h(), Ce(kt(e.isURL(e.name) ? "img" : "i"), {
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
const lp = ee({
  name: G0,
  props: on,
  setup(e) {
    const n = $(""), o = $(!1);
    de(() => e.name, t, { immediate: !0 });
    function t(r, a) {
      return X0(this, null, function* () {
        const { transition: i } = e;
        if (a == null || F(i) === 0) {
          n.value = r;
          return;
        }
        o.value = !0, yield je(), setTimeout(() => {
          a != null && (n.value = r), o.value = !1;
        }, F(i));
      });
    }
    return {
      nextName: n,
      animateInProgress: o,
      n: Z0,
      classes: J0,
      isURL: o0,
      toNumber: F,
      toSizeUnit: Oe
    };
  }
});
lp.render = Q0;
var va = lp;
re(va);
ie(va, on);
const H5 = va;
var Je = va;
const sp = {
  hovering: Boolean,
  focusing: Boolean
}, { name: x0, n: _0, classes: ey } = ne("hover-overlay");
function ny(e, n) {
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
const up = ee({
  name: x0,
  props: sp,
  setup: () => ({
    n: _0,
    classes: ey,
    inMobile: Vt
  })
});
up.render = ny;
var ma = up;
re(ma);
ie(ma, sp);
function eo() {
  const e = $(!1);
  return {
    hovering: e,
    handleHovering: (o) => {
      e.value = o;
    }
  };
}
const j5 = ma;
var Fn = ma;
function cp(e) {
  return e ? !!(e === "desktop" && Vt() || e === "mobile" && !Vt()) : !1;
}
function oy(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((o, t) => {
    const [r, a] = t.split(":").map((i) => i.trim());
    return o[ua(r)] = a, o;
  }, {}) : {};
}
function ty(e) {
  const { value: n } = e._hover, o = oy(e);
  Object.keys(n).forEach((t) => {
    const r = ua(t);
    n[r] != null && o[r] && (e._hover.rawStyle[r] = o[r]);
  });
}
function ou(e, n) {
  Object.keys(n).forEach((o) => {
    const t = n[o];
    t != null && (e.style[o] = t);
  });
}
function ry(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function dp(e) {
  (e == null ? void 0 : e._hover) != null && (ry(e), ou(e, e._hover.rawStyle));
}
function fp() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, mn(e)) {
    e(this._hover.hovering);
    return;
  }
  ou(this, e);
}
function pp() {
  if (this._hover.hovering = !1, mn(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  dp(this);
}
function vp(e, n) {
  var o, t;
  const { arg: r, value: a } = n;
  cp(r) || (e._hover = {
    value: a,
    hovering: (t = (o = e._hover) == null ? void 0 : o.hovering) != null ? t : !1,
    rawStyle: {}
  }, ty(e), e.addEventListener("mouseenter", fp), e.addEventListener("mouseleave", pp));
}
function mp(e, n) {
  cp(n.arg) || (dp(e), e.removeEventListener("mouseenter", fp), e.removeEventListener("mouseleave", pp));
}
function ay(e, n) {
  e._hover && mp(e, n);
}
function iy(e, n) {
  return !mn(n.value) && e._hover.hovering;
}
function ly(e, n) {
  vp(e, n), iy(e, n) && ou(e, n.value);
}
const hp = {
  mounted: vp,
  unmounted: mp,
  beforeUpdate: ay,
  updated: ly,
  install(e) {
    e.directive("hover", this);
  }
}, Y5 = hp;
var Dn = hp;
const { name: sy, n: uy, classes: cy } = ne("action-sheet");
function dy(e, n) {
  const o = _("var-icon"), t = _("var-hover-overlay"), r = Ye("ripple"), a = Ye("hover");
  return Ve((h(), S(
    "div",
    {
      class: p(e.classes(e.n("action-item"), e.className, [e.disabled, e.n("--disabled")])),
      style: X({ color: e.color })
    },
    [
      e.icon ? (h(), Ce(o, {
        key: 0,
        "var-action-sheet-cover": "",
        class: p(e.n("action-icon")),
        namespace: e.namespace,
        name: e.icon,
        size: e.iconSize
      }, null, 8, ["class", "namespace", "name", "size"])) : q("v-if", !0),
      N(
        "div",
        {
          class: p(e.n("action-name"))
        },
        le(e.name),
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
const gp = ee({
  name: sy,
  components: {
    VarHoverOverlay: Fn,
    VarIcon: Je
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
      n: uy,
      classes: cy,
      handleHovering: n
    };
  }
});
gp.render = dy;
var fy = gp, py = Object.defineProperty, Ju = Object.getOwnPropertySymbols, vy = Object.prototype.hasOwnProperty, my = Object.prototype.propertyIsEnumerable, Qu = (e, n, o) => n in e ? py(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, hy = (e, n) => {
  for (var o in n || (n = {}))
    vy.call(n, o) && Qu(e, o, n[o]);
  if (Ju)
    for (var o of Ju(n))
      my.call(n, o) && Qu(e, o, n[o]);
  return e;
};
const bp = hy({
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
var tu = {
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
}, yp = {
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
  // pagination
  paginationItem: "條",
  paginationPage: "頁",
  paginationJump: "前往"
}, wp = ru, kp = {
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
}, gy = Object.defineProperty, xu = Object.getOwnPropertySymbols, by = Object.prototype.hasOwnProperty, yy = Object.prototype.propertyIsEnumerable, _u = (e, n, o) => n in e ? gy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ec = (e, n) => {
  for (var o in n || (n = {}))
    by.call(n, o) && _u(e, o, n[o]);
  if (xu)
    for (var o of xu(n))
      yy.call(n, o) && _u(e, o, n[o]);
  return e;
};
function au() {
  const e = $({}), n = $({}), o = (i, l) => {
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
      if (Xo(n.value, i))
        return n.value[i];
    }
  };
}
const { messages: $p, currentMessage: Cp, add: iu, use: lu, merge: Sp, t: an } = au();
iu("zh-CN", tu);
lu("zh-CN");
const W5 = {
  zhCN: tu,
  enUS: yp,
  zhTW: ru,
  zhHK: wp,
  faIR: kp,
  messages: $p,
  currentMessage: Cp,
  add: iu,
  use: lu,
  merge: Sp,
  t: an,
  useLocale: au
};
var dl = {
  zhCN: tu,
  enUS: yp,
  zhTW: ru,
  zhHK: wp,
  faIR: kp,
  messages: $p,
  currentMessage: Cp,
  add: iu,
  use: lu,
  merge: Sp,
  t: an,
  useLocale: au
};
const fl = Symbol("LOCALE_PROVIDER_KEY");
function wy(e) {
  Hs(fl, e);
}
function so() {
  return _s(fl) ? Us(fl) : { t: null };
}
const { name: ky, n: $y, classes: Cy } = ne("action-sheet");
function Sy(e, n) {
  const o = _("var-action-item"), t = _("var-popup");
  return h(), Ce(t, {
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
      N(
        "div",
        He({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [
          M(e.$slots, "title", {}, () => {
            var r;
            return [
              N(
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
          M(e.$slots, "actions", {}, () => [
            (h(!0), S(
              Me,
              null,
              Xe(e.actions, (r) => (h(), Ce(o, {
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
const Pp = ee({
  name: ky,
  directives: { Ripple: tn },
  components: {
    VarPopup: No,
    VarActionItem: fy
  },
  inheritAttrs: !1,
  props: bp,
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
      n: $y,
      classes: Cy,
      handleSelect: t
    };
  }
});
Pp.render = Sy;
var sr = Pp, Py = Object.defineProperty, nc = Object.getOwnPropertySymbols, Oy = Object.prototype.hasOwnProperty, zy = Object.prototype.propertyIsEnumerable, oc = (e, n, o) => n in e ? Py(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, tc = (e, n) => {
  for (var o in n || (n = {}))
    Oy.call(n, o) && oc(e, o, n[o]);
  if (nc)
    for (var o of nc(n))
      zy.call(n, o) && oc(e, o, n[o]);
  return e;
};
let Co, su = {};
function Ty(e = {}) {
  return tc(tc({}, su), e);
}
function Uo(e) {
  return no() ? new Promise((n) => {
    Uo.close();
    const o = _e(Ty(e));
    o.teleport = "body", Co = o;
    const { unmountInstance: t } = Ct(sr, o, {
      onSelect: (r) => {
        C(o.onSelect, r), n(r);
      },
      onClose: () => {
        C(o.onClose), n("close");
      },
      onClosed: () => {
        C(o.onClosed), t(), Co === o && (Co = null);
      },
      onRouteChange: () => {
        t(), Co === o && (Co = null);
      },
      "onUpdate:show": (r) => {
        o.show = r;
      }
    });
    o.show = !0;
  }) : Promise.resolve();
}
Uo.setDefaultOptions = function(e) {
  su = e;
};
Uo.resetDefaultOptions = function() {
  su = {};
};
Uo.close = function() {
  if (Co != null) {
    const e = Co;
    Co = null, je().then(() => {
      e.show = !1;
    });
  }
};
Uo.Component = sr;
re(sr);
re(sr, Uo);
ie(Uo, bp);
const K5 = sr;
var pl = Uo;
const Op = {
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
}, { name: Ey, n: By, classes: Iy } = ne("alert"), Dy = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  danger: "error"
};
function Ay(e, n) {
  const o = _("var-icon");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), e.n(`--${e.type}`), e.formatElevation(e.elevation, 2))),
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
          class: p(e.n("icon"))
        },
        [
          M(e.$slots, "icon", {}, () => [
            e.isInternalType ? (h(), Ce(o, {
              key: 0,
              name: e.iconTypeMap[e.type]
            }, null, 8, ["name"])) : q("v-if", !0)
          ])
        ],
        2
        /* CLASS */
      )) : q("v-if", !0),
      M(e.$slots, "content", {}, () => [
        N(
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
                M(e.$slots, "title", {}, () => [
                  Ie(
                    le(e.title),
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
                class: p(e.n("message"))
              },
              [
                M(e.$slots, "default", {}, () => [
                  Ie(
                    le(e.message),
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
          class: p(e.n("close-icon")),
          onClick: n[0] || (n[0] = (...t) => e.handleClose && e.handleClose(...t))
        },
        [
          M(e.$slots, "close-icon", {}, () => [
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
const zp = ee({
  name: Ey,
  components: {
    VarIcon: Je
  },
  props: Op,
  setup(e) {
    const n = B(() => ["info", "success", "danger", "warning"].includes(e.type));
    function o(t) {
      C(e.onClose, t);
    }
    return {
      n: By,
      classes: Iy,
      iconTypeMap: Dy,
      isInternalType: n,
      formatElevation: dn,
      handleClose: o
    };
  }
});
zp.render = Ay;
var ha = zp;
re(ha);
ie(ha, Op);
const q5 = ha;
var vl = ha;
const Tp = {
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
}, { name: Ny, n: My, classes: Vy } = ne("app-bar");
function Ry(e, n) {
  return h(), S(
    Me,
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
              class: p(e.n("toolbar"))
            },
            [
              N(
                "div",
                {
                  class: p(e.n("left"))
                },
                [
                  M(e.$slots, "left"),
                  e.titlePosition === "left" ? (h(), S(
                    "div",
                    {
                      key: 0,
                      class: p(e.n("title")),
                      style: X({ paddingLeft: e.paddingLeft })
                    },
                    [
                      M(e.$slots, "default", {}, () => [
                        Ie(
                          le(e.title),
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
                  class: p(e.n("title"))
                },
                [
                  M(e.$slots, "default", {}, () => [
                    Ie(
                      le(e.title),
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
                  class: p(e.n("right"))
                },
                [
                  e.titlePosition === "right" ? (h(), S(
                    "div",
                    {
                      key: 0,
                      class: p(e.n("title")),
                      style: X({ paddingRight: e.paddingRight })
                    },
                    [
                      M(e.$slots, "default", {}, () => [
                        Ie(
                          le(e.title),
                          1
                          /* TEXT */
                        )
                      ])
                    ],
                    6
                    /* CLASS, STYLE */
                  )) : q("v-if", !0),
                  M(e.$slots, "right")
                ],
                2
                /* CLASS */
              )
            ],
            2
            /* CLASS */
          ),
          M(e.$slots, "content")
        ],
        16
        /* FULL_PROPS */
      ),
      e.fixed && e.placeholder ? (h(), S(
        "div",
        {
          key: 0,
          class: p(e.n("placeholder")),
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
const Ep = ee({
  name: Ny,
  props: Tp,
  setup(e, { slots: n }) {
    const o = $(null), t = $(), r = $(), a = $(), i = B(() => {
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
    }), _t(l);
    function l() {
      t.value = n.left ? 0 : void 0, r.value = n.right ? 0 : void 0;
    }
    function s() {
      if (!e.fixed || !e.placeholder)
        return;
      const { height: u } = nn(o.value);
      a.value = Oe(u);
    }
    return {
      rootStyles: i,
      paddingLeft: t,
      paddingRight: r,
      n: My,
      classes: Vy,
      formatElevation: dn,
      appBar: o,
      placeholderHeight: a
    };
  }
});
Ep.render = Ry;
var ga = Ep;
re(ga);
ie(ga, Tp);
const X5 = ga;
var ml = ga;
const Bp = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: Ly, n: Fy } = ne("form-details"), Uy = { key: 0 }, Hy = { key: 0 };
function jy(e, n) {
  return h(), Ce(xe, {
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
          N(
            "div",
            {
              class: p(e.n("error-message"))
            },
            [
              G(xe, {
                name: e.n("message")
              }, {
                default: ce(() => [
                  e.errorMessage ? (h(), S(
                    "div",
                    Uy,
                    le(e.errorMessage),
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
              class: p(e.n("extra-message"))
            },
            [
              G(xe, {
                name: e.n("message")
              }, {
                default: ce(() => [
                  M(e.$slots, "extra-message", {}, () => [
                    e.extraMessage ? (h(), S(
                      "div",
                      Hy,
                      le(e.extraMessage),
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
const Ip = ee({
  name: Ly,
  props: Bp,
  setup: () => ({ n: Fy })
});
Ip.render = jy;
var ba = Ip;
re(ba);
ie(ba, Bp);
const G5 = ba;
var En = ba;
const ya = {
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
}, Dp = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), Ap = Symbol(
  "SWIPE_RESIZE_DISPATCHER_BIND_SWIPE_RESIZE_LISTENER_KEY"
);
function Yy() {
  const { childProviders: e, length: n, bindChildren: o } = kn(
    Dp
  );
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: o
  };
}
function Wy() {
  const { childProviders: e, bindChildren: n } = kn(
    Ap
  );
  return {
    swipeResizeListeners: e,
    bindSwipeResizeListeners: n
  };
}
function Ky() {
  const { parentProvider: e, bindParent: n } = wn(
    Ap
  );
  return {
    swipeResizeDispatcher: e,
    bindSwipeResizeDispatcher: n
  };
}
var qy = (e, n, o) => new Promise((t, r) => {
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
const { name: Xy, n: el, classes: Gy } = ne("field-decorator"), Zy = ["for"];
function Jy(e, n) {
  const o = _("var-icon");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      N(
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
              class: p(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              M(e.$slots, "prepend-icon")
            ],
            2
            /* CLASS */
          ),
          N(
            "div",
            {
              ref: "middleEl",
              class: p(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
            },
            [
              M(e.$slots, "default")
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
            style: X({
              color: e.color
            }),
            for: e.id
          }, [
            N(
              "span",
              null,
              le(e.placeholder),
              1
              /* TEXT */
            )
          ], 14, Zy)) : q("v-if", !0),
          N(
            "div",
            {
              class: p(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              e.clearable && !e.isEmpty(e.value) ? M(e.$slots, "clear-icon", {
                key: 0,
                clear: e.handleClear
              }, () => [
                G(o, {
                  class: p(e.n("clear-icon")),
                  "var-field-decorator-cover": "",
                  name: "close-circle",
                  onClick: e.handleClear
                }, null, 8, ["class", "onClick"])
              ]) : q("v-if", !0),
              M(e.$slots, "append-icon")
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      e.line ? (h(), S(
        Me,
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
              style: X({ borderColor: e.color })
            },
            [
              N(
                "legend",
                {
                  class: p(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
                  style: X({ width: e.legendWidth })
                },
                [
                  e.placeholder && e.hint ? (h(), Ce(ao, {
                    key: 0,
                    to: "body"
                  }, [
                    N(
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
              class: p(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.isError, e.n("--line-error")])),
              style: X({ background: e.isError ? void 0 : e.blurColor })
            },
            [
              N(
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
      )) : q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Np = ee({
  name: Xy,
  components: { VarIcon: Je },
  props: ya,
  setup(e) {
    const n = $(null), o = $(null), t = $(""), r = $("0px"), a = $("0px"), i = $("0px"), l = $(!0), s = B(() => e.hint && (!Wn(e.value) || e.isFocusing)), { popup: u, bindPopup: c } = tp(), { bindSwipeResizeDispatcher: d } = Ky(), f = B(
      () => e.isError ? void 0 : e.isFocusing ? e.focusColor : e.blurColor
    );
    lo(w), yn(() => {
      w(), je().then(() => {
        l.value = !1;
      });
    }), _t(w), C(c, null), C(d, {
      onResize() {
        je().then(w);
      }
    }), u && de(
      () => u.show.value,
      (k) => qy(this, null, function* () {
        k && (yield bn(), w());
      })
    );
    function v() {
      const { hint: k, value: y, composing: b } = e;
      if (!k && (!Wn(y) || b))
        return el("--placeholder-hidden");
      if (s.value)
        return el("--placeholder-hint");
    }
    function g(k) {
      C(e.onClear, k);
    }
    function m(k) {
      C(e.onClick, k);
    }
    function w() {
      if (r.value = `${o.value.offsetLeft}px`, a.value = `${o.value.offsetWidth}px`, i.value = `${o.value.offsetHeight}px`, e.variant === "outlined" && n.value) {
        const k = io(n.value), y = `var(--field-decorator-outlined-${e.size}-placeholder-space)`;
        t.value = `calc(${k.width} * 0.75 + ${y} * 2)`;
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
      n: el,
      classes: Gy,
      isEmpty: Wn,
      handleClear: g,
      handleClick: m
    };
  }
});
Np.render = Jy;
var wa = Np;
re(wa);
ie(wa, ya);
const Z5 = wa;
var Lt = wa, Qy = Object.defineProperty, xy = Object.defineProperties, _y = Object.getOwnPropertyDescriptors, rc = Object.getOwnPropertySymbols, e1 = Object.prototype.hasOwnProperty, n1 = Object.prototype.propertyIsEnumerable, ac = (e, n, o) => n in e ? Qy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, o1 = (e, n) => {
  for (var o in n || (n = {}))
    e1.call(n, o) && ac(e, o, n[o]);
  if (rc)
    for (var o of rc(n))
      n1.call(n, o) && ac(e, o, n[o]);
  return e;
}, t1 = (e, n) => xy(e, _y(n));
const uu = t1(o1({
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
}, De(ya, [
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
var r1 = Object.defineProperty, a1 = Object.defineProperties, i1 = Object.getOwnPropertyDescriptors, ic = Object.getOwnPropertySymbols, l1 = Object.prototype.hasOwnProperty, s1 = Object.prototype.propertyIsEnumerable, lc = (e, n, o) => n in e ? r1(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, u1 = (e, n) => {
  for (var o in n || (n = {}))
    l1.call(n, o) && lc(e, o, n[o]);
  if (ic)
    for (var o of ic(n))
      s1.call(n, o) && lc(e, o, n[o]);
  return e;
}, c1 = (e, n) => a1(e, i1(n));
const Mp = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Hn() {
  const { parentProvider: e, index: n, bindParent: o } = wn(Mp), t = Qo();
  return {
    index: n,
    form: e,
    bindForm: o ? (a) => {
      o(c1(u1({}, a), { instance: t }));
    } : null
  };
}
function d1() {
  const { childProviders: e, length: n, bindChildren: o } = kn(Mp);
  return {
    length: n,
    formItems: e,
    bindFormItems: o
  };
}
const { name: f1, n: p1, classes: v1 } = ne("input"), m1 = ["placeholder", "enterkeyhint"], h1 = ["autocomplete", "id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], g1 = ["autocomplete", "id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function b1(e, n) {
  const o = _("var-field-decorator"), t = _("var-form-details");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[12] || (n[12] = (...r) => e.handleMousedown && e.handleMousedown(...r))
    },
    [
      G(
        o,
        To(er({
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
        ut({
          "clear-icon": ce(({ clear: r }) => [
            M(e.$slots, "clear-icon", { clear: r })
          ]),
          "append-icon": ce(() => [
            M(e.$slots, "append-icon")
          ]),
          default: ce(() => [
            e.normalizedType === "password" ? (h(), S("input", {
              key: 0,
              tabindex: "-1",
              class: p(e.n("autocomplete")),
              placeholder: e.hint ? void 0 : e.placeholder,
              style: X({
                "--input-placeholder-color": e.placeholderColor
              }),
              enterkeyhint: e.enterkeyhint
            }, null, 14, m1)) : q("v-if", !0),
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
            }, null, 46, h1)) : (h(), S("input", {
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
            }, null, 46, g1))
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots["prepend-icon"] ? {
            name: "prepend-icon",
            fn: ce(() => [
              M(e.$slots, "prepend-icon")
            ]),
            key: "0"
          } : void 0
        ]),
        1040
        /* FULL_PROPS, DYNAMIC_SLOTS */
      ),
      e.isShowFormDetails ? (h(), Ce(t, {
        key: 0,
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      }, ut({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: ce(() => [
            M(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"])) : q("v-if", !0)
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const Vp = ee({
  name: f1,
  components: {
    VarFormDetails: En,
    VarFieldDecorator: Lt
  },
  props: uu,
  setup(e) {
    const n = Zf(), o = $(null), t = $(!1), r = $(!1), { bindForm: a, form: i } = Hn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: c
    } = Un(), d = B(() => e.disabled || e.readonly ? "" : "text"), f = B(() => e.type === "number" ? "text" : e.type), v = B(() => {
      const { maxlength: x, modelValue: ve } = e;
      return x ? Wn(ve) ? `0 / ${x}` : `${String(ve).length}/${x}` : "";
    }), g = B(() => {
      const { hint: x, blurColor: ve, focusColor: ye } = e;
      if (!x)
        return l.value ? "var(--field-decorator-error-color)" : t.value ? ye || "var(--field-decorator-focus-color)" : ve || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    });
    C(a, {
      reset: E,
      validate: R,
      resetValidation: c
    }), yn(() => {
      e.autofocus && L();
    });
    function w(x) {
      je(() => {
        const { validateTrigger: ve, rules: ye, modelValue: Ee } = e;
        s(ve, x, ye, Ee);
      });
    }
    function k(x) {
      t.value = !0, C(e.onFocus, x), w("onFocus");
    }
    function y(x) {
      t.value = !1, C(e.onBlur, x), w("onBlur");
    }
    function b(x) {
      const ve = x.target;
      let { value: ye } = ve;
      e.type === "number" && (ye = U(ye));
      const Ee = W(ye);
      return Ee === e.modelValue && (ve.value = Ee), Ee;
    }
    function P() {
      r.value = !0;
    }
    function O(x) {
      r.value && (r.value = !1, x.target.dispatchEvent(new Event("input")));
    }
    function z(x) {
      if (r.value)
        return;
      const ve = b(x);
      C(e["onUpdate:modelValue"], ve), C(e.onInput, ve, x), w("onInput");
    }
    function D(x) {
      const ve = j(b(x));
      e.modelModifiers.trim && C(e["onUpdate:modelValue"], ve), C(e.onChange, ve, x), w("onChange");
    }
    function T() {
      const { disabled: x, readonly: ve, clearable: ye, onClear: Ee } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || x || ve || !ye || (C(e["onUpdate:modelValue"], ""), C(Ee, ""), w("onClear"));
    }
    function I(x) {
      const { disabled: ve, onClick: ye } = e;
      i != null && i.disabled.value || ve || (C(ye, x), w("onClick"));
    }
    function U(x) {
      const ve = x.indexOf("-"), ye = x.indexOf(".");
      return ve > -1 && (x = ve === 0 ? "-" + x.replace(/-/g, "") : x.replace(/-/g, "")), ye > -1 && (x = x.slice(0, ye + 1) + x.slice(ye).replace(/\./g, "")), x.replace(/[^-0-9.]/g, "");
    }
    function j(x) {
      return e.modelModifiers.trim ? x.trim() : x;
    }
    function W(x) {
      return e.maxlength ? x.slice(0, F(e.maxlength)) : x;
    }
    function K(x) {
      const { disabled: ve } = e;
      i != null && i.disabled.value || ve || x.target === o.value || (L(), Ne(x));
    }
    function E() {
      C(e["onUpdate:modelValue"], ""), c();
    }
    function R() {
      return u(e.rules, e.modelValue);
    }
    function L() {
      var x;
      (x = o.value) == null || x.focus();
    }
    function Z() {
      o.value.blur();
    }
    return {
      el: o,
      id: n,
      isFocusing: t,
      isComposing: r,
      errorMessage: l,
      placeholderColor: g,
      normalizedType: f,
      cursor: d,
      maxlengthText: v,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: p1,
      classes: v1,
      isEmpty: Wn,
      handleFocus: k,
      handleBlur: y,
      handleInput: z,
      handleChange: D,
      handleClear: T,
      handleClick: I,
      handleCompositionStart: P,
      handleCompositionEnd: O,
      handleMousedown: K,
      validate: R,
      resetValidation: c,
      reset: E,
      focus: L,
      blur: Z
    };
  }
});
Vp.render = b1;
var ka = Vp;
re(ka);
ie(ka, uu);
const J5 = ka;
var Ft = ka;
const cu = {
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
  onOpen: V(),
  onOpened: V(),
  onClose: V(),
  onClosed: V(),
  onClickOutside: V(),
  "onUpdate:show": V()
};
var y1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Er(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return y1[n];
  });
}
var vo = "top", Vo = "bottom", Go = "right", Bo = "left", du = "auto", $a = [vo, Vo, Go, Bo], Ca = "start", Ut = "end", w1 = "clippingParents", Rp = "viewport", Tt = "popper", k1 = "reference", sc = /* @__PURE__ */ $a.reduce(function(e, n) {
  return e.concat([n + "-" + Ca, n + "-" + Ut]);
}, []), Lp = /* @__PURE__ */ [].concat($a, [du]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Ca, n + "-" + Ut]);
}, []), $1 = "beforeRead", C1 = "read", S1 = "afterRead", P1 = "beforeMain", O1 = "main", z1 = "afterMain", T1 = "beforeWrite", E1 = "write", B1 = "afterWrite", I1 = [$1, C1, S1, P1, O1, z1, T1, E1, B1];
function Io(e) {
  return e.split("-")[0];
}
var D1 = {
  start: "end",
  end: "start"
};
function uc(e) {
  return e.replace(/start|end/g, function(n) {
    return D1[n];
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
function Zo(e) {
  var n = Zn(e).Element;
  return e instanceof n || e instanceof Element;
}
function Kn(e) {
  var n = Zn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function fu(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Zn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function Ho(e) {
  return ((Zo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var It = Math.max, cc = Math.min, dt = Math.round;
function hl() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Fp() {
  return !/^((?!chrome|android).)*safari/i.test(hl());
}
function ft(e, n, o) {
  n === void 0 && (n = !1), o === void 0 && (o = !1);
  var t = e.getBoundingClientRect(), r = 1, a = 1;
  n && Kn(e) && (r = e.offsetWidth > 0 && dt(t.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && dt(t.height) / e.offsetHeight || 1);
  var i = Zo(e) ? Zn(e) : window, l = i.visualViewport, s = !Fp() && o, u = (t.left + (s && l ? l.offsetLeft : 0)) / r, c = (t.top + (s && l ? l.offsetTop : 0)) / a, d = t.width / r, f = t.height / a;
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
function pu(e) {
  var n = Zn(e), o = n.pageXOffset, t = n.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: t
  };
}
function vu(e) {
  return ft(Ho(e)).left + pu(e).scrollLeft;
}
function A1(e, n) {
  var o = Zn(e), t = Ho(e), r = o.visualViewport, a = t.clientWidth, i = t.clientHeight, l = 0, s = 0;
  if (r) {
    a = r.width, i = r.height;
    var u = Fp();
    (u || !u && n === "fixed") && (l = r.offsetLeft, s = r.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: l + vu(e),
    y: s
  };
}
function go(e) {
  return Zn(e).getComputedStyle(e);
}
function N1(e) {
  var n, o = Ho(e), t = pu(e), r = (n = e.ownerDocument) == null ? void 0 : n.body, a = It(o.scrollWidth, o.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = It(o.scrollHeight, o.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -t.scrollLeft + vu(e), s = -t.scrollTop;
  return go(r || o).direction === "rtl" && (l += It(o.clientWidth, r ? r.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: s
  };
}
function oo(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Sa(e) {
  return oo(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (fu(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Ho(e)
  );
}
function mu(e) {
  var n = go(e), o = n.overflow, t = n.overflowX, r = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + r + t);
}
function Up(e) {
  return ["html", "body", "#document"].indexOf(oo(e)) >= 0 ? e.ownerDocument.body : Kn(e) && mu(e) ? e : Up(Sa(e));
}
function Dt(e, n) {
  var o;
  n === void 0 && (n = []);
  var t = Up(e), r = t === ((o = e.ownerDocument) == null ? void 0 : o.body), a = Zn(t), i = r ? [a].concat(a.visualViewport || [], mu(t) ? t : []) : t, l = n.concat(i);
  return r ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Dt(Sa(i)))
  );
}
function M1(e) {
  return ["table", "td", "th"].indexOf(oo(e)) >= 0;
}
function dc(e) {
  return !Kn(e) || // https://github.com/popperjs/popper-core/issues/837
  go(e).position === "fixed" ? null : e.offsetParent;
}
function V1(e) {
  var n = /firefox/i.test(hl()), o = /Trident/i.test(hl());
  if (o && Kn(e)) {
    var t = go(e);
    if (t.position === "fixed")
      return null;
  }
  var r = Sa(e);
  for (fu(r) && (r = r.host); Kn(r) && ["html", "body"].indexOf(oo(r)) < 0; ) {
    var a = go(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || n && a.willChange === "filter" || n && a.filter && a.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function hu(e) {
  for (var n = Zn(e), o = dc(e); o && M1(o) && go(o).position === "static"; )
    o = dc(o);
  return o && (oo(o) === "html" || oo(o) === "body" && go(o).position === "static") ? n : o || V1(e) || n;
}
function R1(e, n) {
  var o = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (o && fu(o)) {
    var t = n;
    do {
      if (t && e.isSameNode(t))
        return !0;
      t = t.parentNode || t.host;
    } while (t);
  }
  return !1;
}
function gl(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function L1(e, n) {
  var o = ft(e, !1, n === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function fc(e, n, o) {
  return n === Rp ? gl(A1(e, o)) : Zo(n) ? L1(n, o) : gl(N1(Ho(e)));
}
function F1(e) {
  var n = Dt(Sa(e)), o = ["absolute", "fixed"].indexOf(go(e).position) >= 0, t = o && Kn(e) ? hu(e) : e;
  return Zo(t) ? n.filter(function(r) {
    return Zo(r) && R1(r, t) && oo(r) !== "body";
  }) : [];
}
function U1(e, n, o, t) {
  var r = n === "clippingParents" ? F1(e) : [].concat(n), a = [].concat(r, [o]), i = a[0], l = a.reduce(function(s, u) {
    var c = fc(e, u, t);
    return s.top = It(c.top, s.top), s.right = cc(c.right, s.right), s.bottom = cc(c.bottom, s.bottom), s.left = It(c.left, s.left), s;
  }, fc(e, i, t));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Ht(e) {
  return e.split("-")[1];
}
function H1(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Hp(e) {
  var n = e.reference, o = e.element, t = e.placement, r = t ? Io(t) : null, a = t ? Ht(t) : null, i = n.x + n.width / 2 - o.width / 2, l = n.y + n.height / 2 - o.height / 2, s;
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
    case Go:
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
  var u = r ? H1(r) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case Ca:
        s[u] = s[u] - (n[c] / 2 - o[c] / 2);
        break;
      case Ut:
        s[u] = s[u] + (n[c] / 2 - o[c] / 2);
        break;
    }
  }
  return s;
}
function j1() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Y1(e) {
  return Object.assign({}, j1(), e);
}
function W1(e, n) {
  return n.reduce(function(o, t) {
    return o[t] = e, o;
  }, {});
}
function jp(e, n) {
  n === void 0 && (n = {});
  var o = n, t = o.placement, r = t === void 0 ? e.placement : t, a = o.strategy, i = a === void 0 ? e.strategy : a, l = o.boundary, s = l === void 0 ? w1 : l, u = o.rootBoundary, c = u === void 0 ? Rp : u, d = o.elementContext, f = d === void 0 ? Tt : d, v = o.altBoundary, g = v === void 0 ? !1 : v, m = o.padding, w = m === void 0 ? 0 : m, k = Y1(typeof w != "number" ? w : W1(w, $a)), y = f === Tt ? k1 : Tt, b = e.rects.popper, P = e.elements[g ? y : f], O = U1(Zo(P) ? P : P.contextElement || Ho(e.elements.popper), s, c, i), z = ft(e.elements.reference), D = Hp({
    reference: z,
    element: b,
    strategy: "absolute",
    placement: r
  }), T = gl(Object.assign({}, b, D)), I = f === Tt ? T : z, U = {
    top: O.top - I.top + k.top,
    bottom: I.bottom - O.bottom + k.bottom,
    left: O.left - I.left + k.left,
    right: I.right - O.right + k.right
  }, j = e.modifiersData.offset;
  if (f === Tt && j) {
    var W = j[r];
    Object.keys(U).forEach(function(K) {
      var E = [Go, Vo].indexOf(K) >= 0 ? 1 : -1, R = [vo, Vo].indexOf(K) >= 0 ? "y" : "x";
      U[K] += W[R] * E;
    });
  }
  return U;
}
function K1(e, n) {
  n === void 0 && (n = {});
  var o = n, t = o.placement, r = o.boundary, a = o.rootBoundary, i = o.padding, l = o.flipVariations, s = o.allowedAutoPlacements, u = s === void 0 ? Lp : s, c = Ht(t), d = c ? l ? sc : sc.filter(function(g) {
    return Ht(g) === c;
  }) : $a, f = d.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = d);
  var v = f.reduce(function(g, m) {
    return g[m] = jp(e, {
      placement: m,
      boundary: r,
      rootBoundary: a,
      padding: i
    })[Io(m)], g;
  }, {});
  return Object.keys(v).sort(function(g, m) {
    return v[g] - v[m];
  });
}
function q1(e) {
  if (Io(e) === du)
    return [];
  var n = Er(e);
  return [uc(e), n, uc(n)];
}
function X1(e) {
  var n = e.state, o = e.options, t = e.name;
  if (!n.modifiersData[t]._skip) {
    for (var r = o.mainAxis, a = r === void 0 ? !0 : r, i = o.altAxis, l = i === void 0 ? !0 : i, s = o.fallbackPlacements, u = o.padding, c = o.boundary, d = o.rootBoundary, f = o.altBoundary, v = o.flipVariations, g = v === void 0 ? !0 : v, m = o.allowedAutoPlacements, w = n.options.placement, k = Io(w), y = k === w, b = s || (y || !g ? [Er(w)] : q1(w)), P = [w].concat(b).reduce(function(te, me) {
      return te.concat(Io(me) === du ? K1(n, {
        placement: me,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: m
      }) : me);
    }, []), O = n.rects.reference, z = n.rects.popper, D = /* @__PURE__ */ new Map(), T = !0, I = P[0], U = 0; U < P.length; U++) {
      var j = P[U], W = Io(j), K = Ht(j) === Ca, E = [vo, Vo].indexOf(W) >= 0, R = E ? "width" : "height", L = jp(n, {
        placement: j,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), Z = E ? K ? Go : Bo : K ? Vo : vo;
      O[R] > z[R] && (Z = Er(Z));
      var x = Er(Z), ve = [];
      if (a && ve.push(L[W] <= 0), l && ve.push(L[Z] <= 0, L[x] <= 0), ve.every(function(te) {
        return te;
      })) {
        I = j, T = !1;
        break;
      }
      D.set(j, ve);
    }
    if (T)
      for (var ye = g ? 3 : 1, Ee = function(me) {
        var A = P.find(function(Y) {
          var fe = D.get(Y);
          if (fe)
            return fe.slice(0, me).every(function(Se) {
              return Se;
            });
        });
        if (A)
          return I = A, "break";
      }, H = ye; H > 0; H--) {
        var J = Ee(H);
        if (J === "break") break;
      }
    n.placement !== I && (n.modifiersData[t]._skip = !0, n.placement = I, n.reset = !0);
  }
}
const G1 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: X1,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Z1(e, n, o) {
  var t = Io(e), r = [Bo, vo].indexOf(t) >= 0 ? -1 : 1, a = typeof o == "function" ? o(Object.assign({}, n, {
    placement: e
  })) : o, i = a[0], l = a[1];
  return i = i || 0, l = (l || 0) * r, [Bo, Go].indexOf(t) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function J1(e) {
  var n = e.state, o = e.options, t = e.name, r = o.offset, a = r === void 0 ? [0, 0] : r, i = Lp.reduce(function(c, d) {
    return c[d] = Z1(d, n.rects, a), c;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[t] = i;
}
const Q1 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: J1
};
var x1 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function _1(e) {
  var n = e.x, o = e.y, t = window, r = t.devicePixelRatio || 1;
  return {
    x: dt(n * r) / r || 0,
    y: dt(o * r) / r || 0
  };
}
function pc(e) {
  var n, o = e.popper, t = e.popperRect, r = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = i.x, v = f === void 0 ? 0 : f, g = i.y, m = g === void 0 ? 0 : g, w = typeof c == "function" ? c({
    x: v,
    y: m
  }) : {
    x: v,
    y: m
  };
  v = w.x, m = w.y;
  var k = i.hasOwnProperty("x"), y = i.hasOwnProperty("y"), b = Bo, P = vo, O = window;
  if (u) {
    var z = hu(o), D = "clientHeight", T = "clientWidth";
    if (z === Zn(o) && (z = Ho(o), go(z).position !== "static" && l === "absolute" && (D = "scrollHeight", T = "scrollWidth")), z = z, r === vo || (r === Bo || r === Go) && a === Ut) {
      P = Vo;
      var I = d && z === O && O.visualViewport ? O.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        z[D]
      );
      m -= I - t.height, m *= s ? 1 : -1;
    }
    if (r === Bo || (r === vo || r === Vo) && a === Ut) {
      b = Go;
      var U = d && z === O && O.visualViewport ? O.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        z[T]
      );
      v -= U - t.width, v *= s ? 1 : -1;
    }
  }
  var j = Object.assign({
    position: l
  }, u && x1), W = c === !0 ? _1({
    x: v,
    y: m
  }) : {
    x: v,
    y: m
  };
  if (v = W.x, m = W.y, s) {
    var K;
    return Object.assign({}, j, (K = {}, K[P] = y ? "0" : "", K[b] = k ? "0" : "", K.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + m + "px)" : "translate3d(" + v + "px, " + m + "px, 0)", K));
  }
  return Object.assign({}, j, (n = {}, n[P] = y ? m + "px" : "", n[b] = k ? v + "px" : "", n.transform = "", n));
}
function ew(e) {
  var n = e.state, o = e.options, t = o.gpuAcceleration, r = t === void 0 ? !0 : t, a = o.adaptive, i = a === void 0 ? !0 : a, l = o.roundOffsets, s = l === void 0 ? !0 : l, u = {
    placement: Io(n.placement),
    variation: Ht(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: r,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, pc(Object.assign({}, u, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, pc(Object.assign({}, u, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Yp = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ew,
  data: {}
};
function nw(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function ow(e) {
  return e === Zn(e) || !Kn(e) ? pu(e) : nw(e);
}
function tw(e) {
  var n = e.getBoundingClientRect(), o = dt(n.width) / e.offsetWidth || 1, t = dt(n.height) / e.offsetHeight || 1;
  return o !== 1 || t !== 1;
}
function rw(e, n, o) {
  o === void 0 && (o = !1);
  var t = Kn(n), r = Kn(n) && tw(n), a = Ho(n), i = ft(e, r, o), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (t || !t && !o) && ((oo(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  mu(a)) && (l = ow(n)), Kn(n) ? (s = ft(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : a && (s.x = vu(a))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function aw(e) {
  var n = ft(e), o = e.offsetWidth, t = e.offsetHeight;
  return Math.abs(n.width - o) <= 1 && (o = n.width), Math.abs(n.height - t) <= 1 && (t = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: t
  };
}
function iw(e) {
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
function lw(e) {
  var n = iw(e);
  return I1.reduce(function(o, t) {
    return o.concat(n.filter(function(r) {
      return r.phase === t;
    }));
  }, []);
}
function sw(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(o) {
      Promise.resolve().then(function() {
        n = void 0, o(e());
      });
    })), n;
  };
}
function uw(e) {
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
var vc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function mc() {
  for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
    n[o] = arguments[o];
  return !n.some(function(t) {
    return !(t && typeof t.getBoundingClientRect == "function");
  });
}
function cw(e) {
  e === void 0 && (e = {});
  var n = e, o = n.defaultModifiers, t = o === void 0 ? [] : o, r = n.defaultOptions, a = r === void 0 ? vc : r;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, vc, a),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, v = {
      state: c,
      setOptions: function(k) {
        var y = typeof k == "function" ? k(c.options) : k;
        m(), c.options = Object.assign({}, a, c.options, y), c.scrollParents = {
          reference: Zo(l) ? Dt(l) : l.contextElement ? Dt(l.contextElement) : [],
          popper: Dt(s)
        };
        var b = lw(uw([].concat(t, c.options.modifiers)));
        return c.orderedModifiers = b.filter(function(P) {
          return P.enabled;
        }), g(), v.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var k = c.elements, y = k.reference, b = k.popper;
          if (mc(y, b)) {
            c.rects = {
              reference: rw(y, hu(b), c.options.strategy === "fixed"),
              popper: aw(b)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(U) {
              return c.modifiersData[U.name] = Object.assign({}, U.data);
            });
            for (var P = 0; P < c.orderedModifiers.length; P++) {
              if (c.reset === !0) {
                c.reset = !1, P = -1;
                continue;
              }
              var O = c.orderedModifiers[P], z = O.fn, D = O.options, T = D === void 0 ? {} : D, I = O.name;
              typeof z == "function" && (c = z({
                state: c,
                options: T,
                name: I,
                instance: v
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: sw(function() {
        return new Promise(function(w) {
          v.forceUpdate(), w(c);
        });
      }),
      destroy: function() {
        m(), f = !0;
      }
    };
    if (!mc(l, s))
      return v;
    v.setOptions(u).then(function(w) {
      !f && u.onFirstUpdate && u.onFirstUpdate(w);
    });
    function g() {
      c.orderedModifiers.forEach(function(w) {
        var k = w.name, y = w.options, b = y === void 0 ? {} : y, P = w.effect;
        if (typeof P == "function") {
          var O = P({
            state: c,
            name: k,
            instance: v,
            options: b
          }), z = function() {
          };
          d.push(O || z);
        }
      });
    }
    function m() {
      d.forEach(function(w) {
        return w();
      }), d = [];
    }
    return v;
  };
}
var mr = {
  passive: !0
};
function dw(e) {
  var n = e.state, o = e.instance, t = e.options, r = t.scroll, a = r === void 0 ? !0 : r, i = t.resize, l = i === void 0 ? !0 : i, s = Zn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", o.update, mr);
  }), l && s.addEventListener("resize", o.update, mr), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", o.update, mr);
    }), l && s.removeEventListener("resize", o.update, mr);
  };
}
const fw = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: dw,
  data: {}
};
function pw(e) {
  var n = e.state, o = e.name;
  n.modifiersData[o] = Hp({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const vw = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: pw,
  data: {}
};
function mw(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(o) {
    var t = n.styles[o] || {}, r = n.attributes[o] || {}, a = n.elements[o];
    !Kn(a) || !oo(a) || (Object.assign(a.style, t), Object.keys(r).forEach(function(i) {
      var l = r[i];
      l === !1 ? a.removeAttribute(i) : a.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function hw(e) {
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
      !Kn(r) || !oo(r) || (Object.assign(r.style, l), Object.keys(a).forEach(function(s) {
        r.removeAttribute(s);
      }));
    });
  };
}
const gw = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: mw,
  effect: hw,
  requires: ["computeStyles"]
};
var bw = [fw, vw, Yp, gw], yw = /* @__PURE__ */ cw({
  defaultModifiers: bw
}), ww = Object.defineProperty, kw = Object.defineProperties, $w = Object.getOwnPropertyDescriptors, hc = Object.getOwnPropertySymbols, Cw = Object.prototype.hasOwnProperty, Sw = Object.prototype.propertyIsEnumerable, gc = (e, n, o) => n in e ? ww(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, nl = (e, n) => {
  for (var o in n || (n = {}))
    Cw.call(n, o) && gc(e, o, n[o]);
  if (hc)
    for (var o of hc(n))
      Sw.call(n, o) && gc(e, o, n[o]);
  return e;
}, ol = (e, n) => kw(e, $w(n)), bc = (e, n, o) => new Promise((t, r) => {
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
function Wp(e) {
  const n = $(null), o = $(null), t = $({ width: 0, height: 0 }), r = Gn(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(E, R) {
      C(R ? e.onOpen : e.onClose);
    }
  }), { zIndex: a } = lr(() => r.value, 1);
  nu(() => r.value, a);
  let i = null, l, s = !1, u = !1;
  We(() => window, "keydown", U), de(() => [e.offsetX, e.offsetY, e.placement, e.strategy], j), de(() => e.disabled, K), de(
    () => r.value,
    (E) => {
      E && j();
    }
  ), lo(j), Lo(c), Qt(d);
  function c() {
    const E = T();
    i = yw(E, o.value, D()), E.addEventListener("mouseenter", g), E.addEventListener("mouseleave", m), E.addEventListener("click", y), document.addEventListener("click", b);
  }
  function d() {
    const E = T();
    E && (E.removeEventListener("mouseenter", g), E.removeEventListener("mouseleave", m), E.removeEventListener("click", y)), i.destroy(), document.removeEventListener("click", b);
  }
  function f() {
    const E = T();
    if (!E)
      return;
    const { width: R, height: L } = io(E);
    t.value = {
      width: en(R),
      height: en(L)
    };
  }
  function v() {
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
    e.trigger === "hover" && (u = !0, W());
  }
  function m() {
    return bc(this, null, function* () {
      e.trigger === "hover" && (u = !1, yield bn(), !s && K());
    });
  }
  function w() {
    e.trigger === "hover" && (s = !0);
  }
  function k() {
    return bc(this, null, function* () {
      e.trigger === "hover" && (s = !1, yield bn(), !u && K());
    });
  }
  function y() {
    if (e.trigger === "click") {
      if (e.closeOnClickReference && r.value) {
        K();
        return;
      }
      W();
    }
  }
  function b(E) {
    const R = T();
    if (R && !R.contains(E.target)) {
      if (e.trigger !== "click")
        return;
      P(), C(e.onClickOutside, E);
    }
  }
  function P() {
    K();
  }
  function O() {
    j(), C(e.onClosed);
  }
  function z() {
    const { offsetX: E, offsetY: R, placement: L } = e;
    f();
    const Z = {
      x: en(E),
      y: en(R)
    };
    switch (L) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: Z.x,
          distance: Z.y - t.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: Z.x,
          distance: Z.y - t.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: Z.x,
          distance: Z.y - t.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: Z.x,
          distance: -Z.y - t.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: Z.x,
          distance: -Z.y - t.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: Z.x,
          distance: -Z.y - t.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: Z.y,
          distance: Z.x - t.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: Z.y,
          distance: -Z.x - t.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: L,
          skidding: Z.y,
          distance: -Z.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: L,
          skidding: Z.x,
          distance: -Z.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: L,
          skidding: Z.x,
          distance: Z.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: L,
          skidding: Z.y,
          distance: Z.x
        };
    }
  }
  function D() {
    const { placement: E, skidding: R, distance: L } = z(), Z = [
      ol(nl({}, G1), {
        enabled: r.value
      }),
      ol(nl({}, Q1), {
        options: {
          offset: [R, L]
        }
      }),
      ol(nl({}, Yp), {
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
        fn({ state: x }) {
          x.styles.popper.transformOrigin = v();
        }
      }
    ];
    return {
      placement: E,
      modifiers: Z,
      strategy: e.strategy
    };
  }
  function T() {
    var E, R;
    const L = (E = l ?? e.reference) != null ? E : n.value;
    return sn(L) ? (R = n.value) == null ? void 0 : R.querySelector(L) : L;
  }
  function I(E) {
    d(), l = E, c();
  }
  function U(E) {
    const { closeOnKeyEscape: R = !1 } = e;
    E.key === "Escape" && R && r.value && (Ne(E), K());
  }
  function j() {
    i.setOptions(D());
  }
  function W() {
    e.disabled || (r.value = !0, C(e["onUpdate:show"], !0));
  }
  function K() {
    r.value = !1, C(e["onUpdate:show"], !1);
  }
  return {
    show: r,
    popover: o,
    zIndex: a,
    host: n,
    referenceSize: t,
    handlePopoverClose: P,
    handlePopoverMouseenter: w,
    handlePopoverMouseleave: k,
    handleClosed: O,
    setReference: I,
    resize: j,
    open: W,
    close: K
  };
}
const { name: Pw, n: Ow, classes: zw } = ne("menu");
function Tw(e, n) {
  return h(), S(
    "div",
    {
      ref: "host",
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      M(e.$slots, "default"),
      (h(), Ce(ao, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        G(xe, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: ce(() => [
            Ve(N(
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
                onClick: n[0] || (n[0] = Xn(() => {
                }, ["stop"])),
                onMouseenter: n[1] || (n[1] = (...o) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...o)),
                onMouseleave: n[2] || (n[2] = (...o) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...o))
              },
              [
                M(e.$slots, "menu")
              ],
              38
              /* CLASS, STYLE, NEED_HYDRATION */
            ), [
              [_n, e.show]
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
const Kp = ee({
  name: Pw,
  props: cu,
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
      setReference: g
    } = Wp(e);
    return {
      popover: o,
      host: t,
      referenceSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      formatElevation: dn,
      toSizeUnit: Oe,
      n: Ow,
      classes: zw,
      handlePopoverMouseenter: l,
      handlePopoverMouseleave: s,
      handlePopoverClose: u,
      handleClosed: c,
      resize: v,
      open: d,
      close: f,
      setReference: g
    };
  }
});
Kp.render = Tw;
var Pa = Kp;
re(Pa);
ie(Pa, cu);
const Q5 = Pa;
var jt = Pa;
const qp = {
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
}, Xp = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Ew() {
  const { bindChildren: e, childProviders: n, length: o } = kn(
    Xp
  );
  return {
    length: o,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Bw() {
  const { bindParent: e, parentProvider: n, index: o } = wn(
    Xp
  );
  return {
    index: o,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
const { name: Iw, n: Dw, classes: Aw } = ne("checkbox"), Nw = ["tabindex"];
function Mw(e, n) {
  const o = _("var-icon"), t = _("var-hover-overlay"), r = _("var-form-details"), a = Ye("hover"), i = Ye("ripple");
  return h(), S(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      N(
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
            style: X({ color: e.checked || e.isIndeterminate ? e.checkedColor : e.uncheckedColor }),
            tabindex: e.disabled || e.formDisabled ? void 0 : "0",
            onFocus: n[0] || (n[0] = (l) => e.isFocusing = !0),
            onBlur: n[1] || (n[1] = (l) => e.isFocusing = !1)
          }, [
            e.isIndeterminate ? M(e.$slots, "indeterminate-icon", { key: 0 }, () => [
              G(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                name: "minus-box",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : q("v-if", !0),
            e.checked && !e.isIndeterminate ? M(e.$slots, "checked-icon", { key: 1 }, () => [
              G(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                name: "checkbox-marked",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : q("v-if", !0),
            !e.checked && !e.isIndeterminate ? M(e.$slots, "unchecked-icon", { key: 2 }, () => [
              G(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                name: "checkbox-blank-outline",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : q("v-if", !0),
            G(t, {
              hovering: !e.disabled && !e.formDisabled && e.hovering,
              focusing: !e.disabled && !e.formDisabled && e.isFocusing
            }, null, 8, ["hovering", "focusing"])
          ], 46, Nw)), [
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
              M(e.$slots, "default", { checked: e.checked })
            ],
            2
            /* CLASS */
          )) : q("v-if", !0)
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
const Gp = ee({
  name: Iw,
  directives: { Ripple: tn, Hover: Dn },
  components: {
    VarIcon: Je,
    VarFormDetails: En,
    VarHoverOverlay: Fn
  },
  props: qp,
  setup(e) {
    const n = $(null), o = $(!1), t = Gn(e, "modelValue"), r = Gn(e, "indeterminate"), a = B(() => t.value === e.checkedValue), i = B(() => e.checkedValue), l = $(!1), { checkboxGroup: s, bindCheckboxGroup: u } = Bw(), { hovering: c, handleHovering: d } = eo(), { form: f, bindForm: v } = Hn(), {
      errorMessage: g,
      validateWithTrigger: m,
      validate: w,
      // expose
      resetValidation: k
    } = Un(), y = {
      checkedValue: i,
      checked: a,
      sync: D,
      validate: K,
      resetValidation: k,
      reset: I,
      resetWithAnimation: T
    };
    C(u, y), C(v, y), We(() => window, "keydown", j), We(() => window, "keyup", W);
    function b(E) {
      je(() => {
        const { validateTrigger: R, rules: L, modelValue: Z } = e;
        m(R, E, L, Z);
      });
    }
    function P(E) {
      const { checkedValue: R, onChange: L } = e;
      t.value = E, r.value = !1, C(L, t.value), b("onChange"), E === R ? s == null || s.onChecked(R) : s == null || s.onUnchecked(R);
    }
    function O(E) {
      const { disabled: R, readonly: L, checkedValue: Z, uncheckedValue: x, onClick: ve } = e;
      if (f != null && f.disabled.value || R || (C(ve, E), f != null && f.readonly.value || L))
        return;
      l.value = !0;
      const ye = s ? s.checkedCount.value >= Number(s.max.value) : !1;
      !a.value && ye || P(a.value ? x : Z);
    }
    function z() {
      n.value.focus();
    }
    function D(E) {
      const { checkedValue: R, uncheckedValue: L } = e;
      t.value = E.includes(R) ? R : L;
    }
    function T() {
      l.value = !1;
    }
    function I() {
      t.value = e.uncheckedValue, k();
    }
    function U(E) {
      const { checkedValue: R, uncheckedValue: L } = e;
      ![R, L].includes(E) && (E = a.value ? L : R), P(E);
    }
    function j(E) {
      if (!o.value)
        return;
      const { key: R } = E;
      (R === "Enter" || R === " ") && Ne(E), R === "Enter" && n.value.click();
    }
    function W(E) {
      o.value && E.key === " " && (Ne(E), n.value.click());
    }
    function K() {
      return w(e.rules, e.modelValue);
    }
    return {
      action: n,
      isFocusing: o,
      isIndeterminate: r,
      withAnimation: l,
      checked: a,
      errorMessage: g,
      checkboxGroupErrorMessage: s == null ? void 0 : s.errorMessage,
      formDisabled: f == null ? void 0 : f.disabled,
      formReadonly: f == null ? void 0 : f.readonly,
      hovering: c,
      n: Dw,
      classes: Aw,
      handleHovering: d,
      handleClick: O,
      handleTextClick: z,
      toggle: U,
      reset: I,
      validate: K,
      resetValidation: k
    };
  }
});
Gp.render = Mw;
var Oa = Gp;
re(Oa);
ie(Oa, qp);
const x5 = Oa;
var pt = Oa;
const Zp = Symbol("MENU_SELECT_BIND_MENU_OPTION_KEY");
function Vw() {
  const { length: e, childProviders: n, bindChildren: o } = kn(
    Zp
  );
  return {
    length: e,
    menuOptions: n,
    bindMenuOptions: o
  };
}
function Rw() {
  const { index: e, parentProvider: n, bindParent: o } = wn(
    Zp
  );
  return Ln(!!o, "MenuOption", "<var-menu-option/> must in <var-menu-select/>"), {
    index: e,
    menuSelect: n,
    bindMenuSelect: o
  };
}
const Jp = {
  label: {},
  value: {},
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  // internal
  option: Object
}, { name: Lw, n: Fw, classes: Uw } = ne("menu-option"), Hw = ["tabindex"];
function jw(e, n) {
  const o = _("var-checkbox"), t = _("maybe-v-node"), r = _("var-hover-overlay"), a = Ye("ripple"), i = Ye("hover");
  return Ve((h(), S("div", {
    ref: "root",
    class: p(
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
        class: p(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")]))
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
      onClick: n[1] || (n[1] = Xn(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, ["modelValue", "disabled", "onChange"])) : q("v-if", !0),
    M(e.$slots, "default", {}, () => [
      N(
        "div",
        {
          class: p(e.classes(e.n("text")))
        },
        [
          G(t, {
            class: p(e.n("$--ellipsis")),
            is: e.labelVNode
          }, null, 8, ["class", "is"])
        ],
        2
        /* CLASS */
      )
    ]),
    G(r, {
      hovering: e.hovering && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 42, Hw)), [
    [a, { disabled: e.disabled || !e.ripple }],
    [i, e.handleHovering, "desktop"]
  ]);
}
const Qp = ee({
  name: Lw,
  directives: { Ripple: tn, Hover: Dn },
  components: {
    VarCheckbox: pt,
    VarHoverOverlay: Fn,
    MaybeVNode: ar
  },
  props: Jp,
  setup(e) {
    const n = $(), o = $(!1), t = $(!1), r = B(() => t.value), a = B(
      () => {
        var O;
        return mn(e.label) ? e.label(
          (O = e.option) != null ? O : {
            label: e.label,
            value: e.value,
            disabled: e.disabled,
            ripple: e.ripple
          },
          t.value
        ) : e.label;
      }
    ), i = B(() => e.value), { menuSelect: l, bindMenuSelect: s } = Rw(), { size: u, multiple: c, onSelect: d, computeLabel: f } = l, { hovering: v, handleHovering: g } = eo(), m = {
      label: a,
      value: i,
      selected: r,
      sync: P
    };
    de([() => e.label, () => e.value], f), s(m), We(() => window, "keydown", k), We(() => window, "keyup", y);
    function w() {
      e.disabled || b();
    }
    function k(O) {
      o.value && ((O.key === " " || O.key === "Enter") && Ne(O), O.key === "Enter" && n.value.click());
    }
    function y(O) {
      o.value && O.key === " " && (Ne(O), n.value.click());
    }
    function b() {
      c.value && (t.value = !t.value), d(m);
    }
    function P(O) {
      t.value = O;
    }
    return {
      root: n,
      optionSelected: t,
      size: u,
      multiple: c,
      hovering: v,
      isFocusing: o,
      labelVNode: a,
      n: Fw,
      classes: Uw,
      handleHovering: g,
      handleClick: w,
      handleSelect: b
    };
  }
});
Qp.render = jw;
var za = Qp;
re(za);
ie(za, Jp);
const _5 = za;
var vt = za, Yw = Object.defineProperty, Ww = Object.defineProperties, Kw = Object.getOwnPropertyDescriptors, yc = Object.getOwnPropertySymbols, qw = Object.prototype.hasOwnProperty, Xw = Object.prototype.propertyIsEnumerable, wc = (e, n, o) => n in e ? Yw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Gw = (e, n) => {
  for (var o in n || (n = {}))
    qw.call(n, o) && wc(e, o, n[o]);
  if (yc)
    for (var o of yc(n))
      Xw.call(n, o) && wc(e, o, n[o]);
  return e;
}, Zw = (e, n) => Ww(e, Kw(n));
const xp = Zw(Gw({
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
}, De(cu, [
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
function _p(e) {
  const {
    multiple: n,
    modelValue: o,
    optionProviders: t,
    optionProvidersLength: r
  } = e, a = $(""), i = $([]);
  de(o, d, { deep: !0 }), de(r, d);
  function l() {
    const f = n(), v = o();
    f && (i.value = v.map(s)), !f && !Wn(v) && (a.value = s(v)), !f && Wn(v) && (a.value = "");
  }
  function s(f) {
    var v;
    const g = t();
    let m = g.find(({ value: w }) => w.value === f);
    return m || (m = g.find(({ label: w }) => w.value === f)), (v = m == null ? void 0 : m.label.value) != null ? v : "";
  }
  function u({ value: f, label: v }) {
    var g;
    return (g = f.value) != null ? g : v.value;
  }
  function c(f) {
    const v = n(), g = t();
    return v ? g.filter(({ selected: m }) => m.value).map(u) : u(f);
  }
  function d() {
    const f = n(), v = o(), g = t();
    f ? g.forEach((m) => m.sync(v.includes(u(m)))) : g.forEach((m) => m.sync(v === u(m))), l();
  }
  return {
    label: a,
    labels: i,
    computeLabel: l,
    getSelectedValue: c
  };
}
const { name: Jw, n: Qw, classes: xw } = ne("menu-select");
function _w(e, n) {
  const o = _("var-menu-option"), t = _("var-menu");
  return h(), Ce(t, {
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
    "onUpdate:show": n[0] || (n[0] = (r) => e.show = r),
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
          class: p(e.classes(e.n("menu"), e.formatElevation(e.elevation, 3), [e.scrollable, e.n("--scrollable")]))
        },
        [
          e.options.length ? (h(!0), S(
            Me,
            { key: 0 },
            Xe(e.options, (r) => (h(), Ce(o, {
              key: r[e.valueKey],
              label: r[e.labelKey],
              value: r[e.valueKey],
              option: r,
              ripple: r.ripple,
              disabled: r.disabled
            }, null, 8, ["label", "value", "option", "ripple", "disabled"]))),
            128
            /* KEYED_FRAGMENT */
          )) : q("v-if", !0),
          M(e.$slots, "options")
        ],
        2
        /* CLASS */
      )
    ]),
    default: ce(() => [
      M(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "disabled", "trigger", "reference", "placement", "strategy", "offset-x", "offset-y", "teleport", "same-width", "elevation", "popover-class", "close-on-click-reference", "show", "onOpen", "onOpened", "onClose", "onClosed", "onClickOutside"]);
}
const ev = ee({
  name: Jw,
  components: { VarMenu: jt, VarMenuOption: vt },
  props: xp,
  setup(e) {
    const n = $(null), o = $(null), t = Gn(e, "show"), { menuOptions: r, length: a, bindMenuOptions: i } = Vw(), { computeLabel: l, getSelectedValue: s } = _p({
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
    function c(w) {
      const { multiple: k, closeOnSelect: y } = e;
      C(e["onUpdate:modelValue"], s(w)), !k && y && (n.value.$el.focus(), v());
    }
    function d(w) {
      if (e.disabled || !t.value)
        return;
      const { key: k } = w;
      if (["Escape", "ArrowDown", "ArrowUp"].includes(k) && Ne(w), k === "Escape") {
        n.value.$el.focus(), v(), C(e.onKeyEscape);
        return;
      }
      (k === "ArrowDown" || k === "ArrowUp") && ip(n.value.$el, o.value, k);
    }
    function f() {
      var w;
      (w = n.value) == null || w.open();
    }
    function v() {
      var w;
      (w = n.value) == null || w.close();
    }
    function g() {
      var w;
      (w = n.value) == null || w.resize();
    }
    function m(w) {
      var k;
      (k = n.value) == null || k.setReference(w);
    }
    return {
      show: t,
      menu: n,
      menuOptionsRef: o,
      n: Qw,
      classes: xw,
      formatElevation: dn,
      open: f,
      close: v,
      resize: g,
      setReference: m
    };
  }
});
ev.render = _w;
var Ta = ev;
re(Ta);
ie(Ta, xp);
const eB = Ta;
var Yt = Ta, ek = Object.defineProperty, kc = Object.getOwnPropertySymbols, nk = Object.prototype.hasOwnProperty, ok = Object.prototype.propertyIsEnumerable, $c = (e, n, o) => n in e ? ek(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, tk = (e, n) => {
  for (var o in n || (n = {}))
    nk.call(n, o) && $c(e, o, n[o]);
  if (kc)
    for (var o of kc(n))
      ok.call(n, o) && $c(e, o, n[o]);
  return e;
};
const nv = tk({
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
}, De(uu, [
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
var hr = (e, n, o) => new Promise((t, r) => {
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
const { name: rk, n: ak } = ne("auto-complete"), ik = ["tabindex"];
function lk(e, n) {
  const o = _("var-input"), t = _("var-menu-option"), r = _("var-menu-select"), a = _("var-form-details");
  return h(), S("div", {
    ref: "root",
    class: p(e.n()),
    tabindex: e.disabled || e.formDisabled ? void 0 : "0",
    onFocusin: n[2] || (n[2] = (...i) => e.focus && e.focus(...i)),
    onClick: n[3] || (n[3] = (...i) => e.handleClick && e.handleClick(...i))
  }, [
    G(r, {
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
        N(
          "div",
          {
            class: p(e.n("options"))
          },
          [
            (h(!0), S(
              Me,
              null,
              Xe(e.viewOptions, (i) => (h(), Ce(t, {
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
        }), ut({
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots["prepend-icon"] ? {
            name: "prepend-icon",
            fn: ce(() => [
              M(e.$slots, "prepend-icon")
            ]),
            key: "0"
          } : void 0,
          e.$slots["append-icon"] ? {
            name: "append-icon",
            fn: ce(() => [
              M(e.$slots, "append-icon")
            ]),
            key: "1"
          } : void 0,
          e.$slots["clear-icon"] ? {
            name: "clear-icon",
            fn: ce(({ clear: i }) => [
              M(e.$slots, "clear-icon", { clear: i })
            ]),
            key: "2"
          } : void 0,
          e.$slots["extra-message"] ? {
            name: "extra-message",
            fn: ce(() => [
              M(e.$slots, "extra-message")
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
  ], 42, ik);
}
const ov = ee({
  name: rk,
  components: {
    VarInput: Ft,
    VarMenuSelect: Yt,
    VarMenuOption: vt,
    VarFormDetails: En
  },
  props: nv,
  setup(e) {
    const n = $(), o = $(), t = $(!1), r = Gn(e, "modelValue"), a = $([]), i = $(!1), l = B(() => {
      const { maxlength: R } = e;
      return R ? Wn(r.value) ? `0 / ${R}` : `${String(r.value).length}/${R}` : "";
    }), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: c,
      // expose
      resetValidation: d
    } = Un(), { bindForm: f, form: v } = Hn();
    let g = !1;
    const m = {
      reset: w,
      resetValidation: d,
      validate: k
    };
    Gf(
      () => n.value,
      "click",
      () => {
        if (g) {
          g = !1;
          return;
        }
        b();
      }
    ), de(() => [e.options, t.value], D), C(f, m), We(() => window, "keydown", z);
    function w() {
      C(e["onUpdate:modelValue"], ""), d();
    }
    function k() {
      return c(e.rules, e.modelValue);
    }
    function y() {
      t.value || e.disabled || v != null && v.disabled.value || (t.value = !0, o.value.focus(), C(e.onFocus), O("onFocus"));
    }
    function b() {
      t.value && (t.value = !1, i.value = !1, o.value.blur(), C(e.onBlur), O("onBlur"));
    }
    function P() {
      i.value || b();
    }
    function O(R) {
      je(() => {
        const { validateTrigger: L, rules: Z, modelValue: x } = e;
        u(L, R, Z, x);
      });
    }
    function z(R) {
      return hr(this, null, function* () {
        var L;
        if (v != null && v.disabled.value || v != null && v.readonly.value || e.disabled || e.readonly || !t.value || !i.value)
          return;
        const { key: Z } = R;
        if (Z === "Tab") {
          Ne(R), n.value.focus(), i.value = !1;
          return;
        }
        if (!["ArrowUp", "ArrowDown", "Enter"].includes(Z)) {
          o.value.focus();
          return;
        }
        Z === "Enter" && (yield Eo(), (L = o.value) == null || L.focus());
      });
    }
    function D() {
      return hr(this, null, function* () {
        t.value && (i.value = E(r.value)), i.value && (a.value = e.options);
      });
    }
    function T(R, L) {
      return hr(this, null, function* () {
        D(), C(e.onInput, R, L), O("onInput");
      });
    }
    function I() {
      g = !0, D(), C(e.onClear, r.value), O("onClear");
    }
    function U(R) {
      e.disabled || v != null && v.disabled.value || (C(e.onClick, R), O("onClick"));
    }
    function j(R) {
      C(e.onChange, R), O("onChange");
    }
    function W(R) {
      return hr(this, null, function* () {
        var L;
        e.maxlength != null && (R = R.slice(0, F(e.maxlength))), R !== r.value && (r.value = R, C(e.onChange, R), O("onChange")), yield Eo(), (L = o.value) == null || L.focus();
      });
    }
    function K() {
      o.value.focus();
    }
    function E(R) {
      return e.disabled || e.readonly || v != null && v.disabled.value || v != null && v.readonly.value ? !1 : e.options.length > 0 && (e.getShow != null ? e.getShow(R) : R.length > 0);
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
      n: ak,
      handleInput: T,
      handleClear: I,
      handleClick: U,
      handleChange: j,
      handleBlur: P,
      handleKeyEscape: K,
      handleAutoComplete: W,
      reset: w,
      validate: k,
      resetValidation: d,
      blur: b,
      focus: y
    };
  }
});
ov.render = lk;
var Ea = ov;
re(Ea);
ie(Ea, nv);
const nB = Ea;
var bl = Ea;
const Cc = (e) => sn(e) ? e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp|ico)$/i.test(e) : !1, Sc = (e) => sn(e) ? e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e) : !1, sk = (e) => {
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
}, yl = (e) => e, Pc = (e) => e ** 3, tv = (e) => e < 0.5 ? Pc(e * 2) / 2 : 1 - Pc((1 - e) * 2) / 2, Jo = (e, n, o = "") => {
  if (e === void 0 && (e = ""), e.length >= n)
    return e;
  const t = n - e.length, r = Math.floor(t / o.length);
  return o.repeat(r) + o.slice(0, t % o.length) + e;
};
var uk = Object.defineProperty, Oc = Object.getOwnPropertySymbols, ck = Object.prototype.hasOwnProperty, dk = Object.prototype.propertyIsEnumerable, zc = (e, n, o) => n in e ? uk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, fk = (e, n) => {
  for (var o in n || (n = {}))
    ck.call(n, o) && zc(e, o, n[o]);
  if (Oc)
    for (var o of Oc(n))
      dk.call(n, o) && zc(e, o, n[o]);
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
const pk = "background-image", vk = "lazy-loading", mk = "lazy-error", Tc = "lazy-attempt", hk = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], wl = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", mt = [], Gr = [], rv = sk(100), pn = {
  loading: wl,
  error: wl,
  attempt: 3,
  throttleWait: 300,
  events: hk
};
let gu = da(ur, pn.throttleWait);
function Ia(e, n) {
  e._lazy.arg === pk ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function gk(e) {
  e._lazy.loading && Ia(e, e._lazy.loading), ur();
}
function bk(e) {
  e._lazy.error && Ia(e, e._lazy.error), e._lazy.state = "error", yu(e), ur();
}
function av(e, n) {
  Ia(e, n), e._lazy.state = "success", yu(e), ur();
}
function yk(e) {
  var n;
  Gr.includes(e) || (Gr.push(e), (n = pn.events) == null || n.forEach((o) => {
    e.addEventListener(o, gu, { passive: !0 });
  }));
}
function wk() {
  Gr.forEach((e) => {
    var n;
    (n = pn.events) == null || n.forEach((o) => {
      e.removeEventListener(o, gu);
    });
  }), Gr.length = 0;
}
function kk(e, n) {
  var o, t;
  const r = {
    loading: (o = e.getAttribute(vk)) != null ? o : pn.loading,
    error: (t = e.getAttribute(mk)) != null ? t : pn.error,
    attempt: e.getAttribute(Tc) ? Number(e.getAttribute(Tc)) : pn.attempt
  };
  e._lazy = fk({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, r), Ia(e, wl), C(pn.filter, e._lazy);
}
function $k(e, n) {
  const o = new Image();
  o.src = n, e._lazy.preloadImage = o, o.addEventListener("load", () => {
    e._lazy.attemptLock = !1, rv.add(n), av(e, n);
  }), o.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? bk(e) : iv(e);
  });
}
function iv(e) {
  if (e._lazy.attemptLock)
    return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (rv.has(n)) {
    av(e, n), e._lazy.attemptLock = !1;
    return;
  }
  gk(e), $k(e, n);
}
function bu(e) {
  return Ba(this, null, function* () {
    yield bn(), Qs(e) && iv(e);
  });
}
function ur() {
  mt.forEach((e) => bu(e));
}
function Ck(e) {
  return Ba(this, null, function* () {
    !mt.includes(e) && mt.push(e), F0(e).forEach(yk), yield bu(e);
  });
}
function yu(e) {
  Do(mt, e), mt.length === 0 && wk();
}
function Sk(e, n) {
  const { src: o, arg: t } = e._lazy;
  return o !== n.value || t !== n.arg;
}
function lv(e, n) {
  return Ba(this, null, function* () {
    kk(e, n), yield Ck(e);
  });
}
function Pk(e, n) {
  return Ba(this, null, function* () {
    if (!Sk(e, n)) {
      mt.includes(e) && (yield bu(e));
      return;
    }
    yield lv(e, n);
  });
}
function Ok(e = {}) {
  const { events: n, loading: o, error: t, attempt: r, throttleWait: a, filter: i } = e;
  pn.events = n ?? pn.events, pn.loading = o ?? pn.loading, pn.error = t ?? pn.error, pn.attempt = r ?? pn.attempt, pn.throttleWait = a ?? pn.throttleWait, pn.filter = i;
}
const sv = {
  mounted: lv,
  unmounted: yu,
  updated: Pk,
  install(e, n) {
    Ok(n), gu = da(ur, pn.throttleWait), e.directive("lazy", this);
  }
}, oB = sv;
var Wt = sv;
const uv = {
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
}, zk = (e) => ["mini", "small", "normal", "large"].includes(e), { name: Tk, n: Ek, classes: Bk } = ne("avatar"), Ik = ["src", "alt", "lazy-loading", "lazy-error"], Dk = ["src", "alt"];
function Ak(e, n) {
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
      style: X({
        width: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        height: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        borderColor: e.borderColor,
        backgroundColor: e.color
      }),
      onClick: n[3] || (n[3] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      e.src ? (h(), S(
        Me,
        { key: 0 },
        [
          e.lazy ? Ve((h(), S("img", {
            key: 0,
            role: "img",
            class: p(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: X({ objectFit: e.fit }),
            "lazy-loading": e.loading,
            "lazy-error": e.error,
            onLoad: n[0] || (n[0] = (...t) => e.handleLoad && e.handleLoad(...t))
          }, null, 46, Ik)), [
            [o, e.src]
          ]) : (h(), S("img", {
            key: 1,
            role: "img",
            class: p(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: X({ objectFit: e.fit }),
            onLoad: n[1] || (n[1] = (...t) => e.handleLoad && e.handleLoad(...t)),
            onError: n[2] || (n[2] = (...t) => e.handleError && e.handleError(...t))
          }, null, 46, Dk))
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (h(), S(
        "div",
        {
          key: 1,
          ref: "textElement",
          class: p(e.n("text")),
          style: X({ transform: `scale(${e.scale})` })
        },
        [
          M(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      ))
    ],
    6
    /* CLASS, STYLE */
  );
}
const cv = ee({
  name: Tk,
  directives: { Lazy: Wt },
  props: uv,
  setup(e) {
    const n = $(null), o = $(null), t = $(1);
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
      n: Ek,
      classes: Bk,
      isInternalSize: zk,
      toSizeUnit: Oe,
      handleLoad: a,
      handleError: i,
      handleClick: l
    };
  }
});
cv.render = Ak;
var Da = cv;
re(Da);
ie(Da, uv);
const tB = Da;
var kl = Da;
const dv = {
  offset: [Number, String],
  vertical: Boolean
}, { name: Nk, n: Mk, classes: Vk } = ne("avatar-group");
function Rk(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: X(e.rootStyles)
    },
    [
      M(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const fv = ee({
  name: Nk,
  props: dv,
  setup(e) {
    return {
      rootStyles: B(() => e.offset == null ? {} : {
        "--avatar-group-offset": Oe(e.offset)
      }),
      n: Mk,
      classes: Vk
    };
  }
});
fv.render = Rk;
var Aa = fv;
re(Aa);
ie(Aa, dv);
const rB = Aa;
var $l = Aa;
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
}, { name: Lk, n: Fk, classes: Uk } = ne("loading");
function Hk(e, n) {
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
          M(e.$slots, "default"),
          e.loading ? (h(), S(
            "div",
            {
              key: 0,
              class: p(e.n("content-mask"))
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
              N(
                "span",
                {
                  class: p(e.classes(e.n("circle-block"), e.n(`circle-block--${e.size}`))),
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
            Me,
            null,
            Xe(e.loadingTypeDict, (o, t) => (h(), S(
              Me,
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
                      Me,
                      null,
                      Xe(o, (r) => (h(), S(
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
              class: p(e.classes(e.n("description"), e.n(`description--${e.size}`))),
              style: X({ color: e.color })
            },
            [
              M(e.$slots, "description", {}, () => [
                Ie(
                  le(e.description),
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
const pv = ee({
  name: Lk,
  props: co,
  setup(e, { slots: n }) {
    const o = B(() => C(n.default) ? e.loading : !0);
    return {
      loadingTypeDict: {
        wave: 5,
        cube: 4,
        rect: 8,
        disappear: 3
      },
      isShow: o,
      n: Fk,
      classes: Uk,
      multiplySizeUnit: On
    };
  }
});
pv.render = Hk;
var Na = pv;
re(Na);
ie(Na, co);
const aB = Na;
var ht = Na, jk = Object.defineProperty, Yk = Object.defineProperties, Wk = Object.getOwnPropertyDescriptors, Ec = Object.getOwnPropertySymbols, Kk = Object.prototype.hasOwnProperty, qk = Object.prototype.propertyIsEnumerable, Bc = (e, n, o) => n in e ? jk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Ic = (e, n) => {
  for (var o in n || (n = {}))
    Kk.call(n, o) && Bc(e, o, n[o]);
  if (Ec)
    for (var o of Ec(n))
      qk.call(n, o) && Bc(e, o, n[o]);
  return e;
}, Dc = (e, n) => Yk(e, Wk(n));
const vv = {
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
  loadingSize: Dc(Ic({}, De(co, "size")), {
    default: void 0
  }),
  loadingColor: Dc(Ic({}, De(co, "color")), {
    default: "currentColor"
  }),
  onClick: V(),
  onTouchstart: V()
}, mv = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function Xk() {
  const { bindChildren: e, childProviders: n, length: o } = kn(mv);
  return {
    length: o,
    buttons: n,
    bindButtons: e
  };
}
function Gk() {
  const { bindParent: e, parentProvider: n, index: o } = wn(mv);
  return {
    index: o,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
const { name: Zk, n: Jk, classes: Qk } = ne("button"), xk = ["tabindex", "type", "disabled"];
function _k(e, n) {
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
      class: p(e.n("loading")),
      "var-button-cover": "",
      color: e.loadingColor,
      type: e.loadingType,
      size: e.loadingSize || e.states.size,
      radius: e.loadingRadius
    }, null, 8, ["class", "color", "type", "size", "radius"])) : q("v-if", !0),
    N(
      "div",
      {
        class: p(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [
        M(e.$slots, "default")
      ],
      2
      /* CLASS */
    ),
    G(t, {
      hovering: e.disabled || e.loading || e.pending ? !1 : e.hovering,
      focusing: e.disabled || e.loading || e.pending ? !1 : e.isFocusing
    }, null, 8, ["hovering", "focusing"])
  ], 46, xk)), [
    [r, { disabled: e.disabled || !e.ripple || e.loading || e.pending }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const hv = ee({
  name: Zk,
  components: {
    VarLoading: ht,
    VarHoverOverlay: Fn
  },
  directives: { Ripple: tn, Hover: Dn },
  props: vv,
  setup(e) {
    const n = $(!1), o = $(!1), { buttonGroup: t } = Gk(), { hovering: r, handleHovering: a } = eo(), i = B(() => {
      var d, f, v, g, m, w;
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
      const { type: k, size: y, color: b, textColor: P, mode: O } = t;
      return {
        elevation: "",
        type: (v = e.type) != null ? v : k.value,
        size: (g = e.size) != null ? g : y.value,
        color: (m = e.color) != null ? m : b.value,
        textColor: (w = e.textColor) != null ? w : P.value,
        text: O.value === "text" || O.value === "outline",
        outline: O.value === "outline",
        iconContainer: O.value === "icon-container"
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
      const { loading: f, disabled: v, onClick: g } = e;
      !g || f || v || o.value || l(C(g, d));
    }
    function u(d) {
      const { loading: f, disabled: v, onTouchstart: g } = e;
      !g || f || v || o.value || l(C(g, d));
    }
    function c() {
      e.focusable && (n.value = !0);
    }
    return {
      pending: o,
      states: i,
      hovering: r,
      isFocusing: n,
      n: Jk,
      classes: Qk,
      handleHovering: a,
      handleClick: s,
      handleTouchstart: u,
      handleFocus: c
    };
  }
});
hv.render = _k;
var Ma = hv;
re(Ma);
ie(Ma, vv);
const iB = Ma;
var Bn = Ma;
const gv = {
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
}, { name: e$, n: n$, classes: o$ } = ne("back-top");
function t$(e, n) {
  const o = _("var-icon"), t = _("var-button");
  return h(), Ce(ao, {
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
        onClick: n[0] || (n[0] = Xn((...r) => e.handleClick && e.handleClick(...r), ["stop"]))
      }),
      [
        M(e.$slots, "default", {}, () => [
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
const bv = ee({
  name: e$,
  components: {
    VarButton: Bn,
    VarIcon: Je
  },
  inheritAttrs: !1,
  props: gv,
  setup(e) {
    const n = $(!1), o = $(null), t = $(!0);
    let r;
    const a = da(() => {
      i();
    }, 200);
    Lo(() => {
      s(), u(), i(), t.value = !1;
    }), Fo(u), rr(c);
    function i() {
      n.value = ho(r) >= en(e.visibilityHeight);
    }
    function l(d) {
      C(e.onClick, d);
      const f = tr(r);
      Rt(r, {
        left: f,
        duration: e.duration,
        animation: tv
      });
    }
    function s() {
      r = e.target ? rp(e.target, "BackTop") : Mo(o.value);
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
      toSizeUnit: Oe,
      n: n$,
      classes: o$,
      handleClick: l
    };
  }
});
bv.render = t$;
var Va = bv;
re(Va);
ie(Va, gv);
const lB = Va;
var Cl = Va;
const yv = {
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
var r$ = Object.defineProperty, Ac = Object.getOwnPropertySymbols, a$ = Object.prototype.hasOwnProperty, i$ = Object.prototype.propertyIsEnumerable, Nc = (e, n, o) => n in e ? r$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, l$ = (e, n) => {
  for (var o in n || (n = {}))
    a$.call(n, o) && Nc(e, o, n[o]);
  if (Ac)
    for (var o of Ac(n))
      i$.call(n, o) && Nc(e, o, n[o]);
  return e;
};
const { name: s$, n: u$, classes: c$ } = ne("badge"), d$ = { key: 0 };
function f$(e, n) {
  const o = _("var-icon");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      M(e.$slots, "default"),
      G(xe, {
        name: e.n("$-badge-fade"),
        persisted: ""
      }, {
        default: ce(() => [
          Ve(N(
            "span",
            He({
              class: e.classes(
                e.n("content"),
                e.n(`--${e.type}`),
                [e.$slots.default, e.n(`--${e.position}`), e.n("--offset")],
                [e.dot, e.n("--dot")],
                [e.icon, e.n("--icon")]
              ),
              style: l$({ background: e.color }, e.offsetStyle)
            }, e.$attrs),
            [
              e.icon ? (h(), Ce(o, {
                key: 0,
                class: p(e.n("icon")),
                "var-badge-cover": "",
                name: e.icon,
                namespace: e.namespace
              }, null, 8, ["class", "name", "namespace"])) : q("v-if", !0),
              M(e.$slots, "value", {}, () => [
                !e.icon && !e.dot ? (h(), S(
                  "span",
                  d$,
                  le(e.value),
                  1
                  /* TEXT */
                )) : q("v-if", !0)
              ])
            ],
            16
            /* FULL_PROPS */
          ), [
            [_n, !e.hidden]
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
const wv = ee({
  name: s$,
  components: { VarIcon: Je },
  inheritAttrs: !1,
  props: yv,
  setup(e) {
    const n = B(() => {
      const { value: t, maxValue: r } = e;
      return t != null && r != null && F(t) > F(r) ? `${r}+` : t;
    }), o = B(() => ({
      "--badge-offset-y": Oe(e.offsetY),
      "--badge-offset-x": Oe(e.offsetX)
    }));
    return {
      value: n,
      offsetStyle: o,
      n: u$,
      classes: c$
    };
  }
});
wv.render = f$;
var Ra = wv;
re(Ra);
ie(Ra, yv);
const sB = Ra;
var Zr = Ra;
const kv = {
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
}, $v = Symbol(
  "BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"
);
function p$() {
  const { childProviders: e, length: n, bindChildren: o } = kn(
    $v
  );
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: o
  };
}
var v$ = Object.defineProperty, Mc = Object.getOwnPropertySymbols, m$ = Object.prototype.hasOwnProperty, h$ = Object.prototype.propertyIsEnumerable, Vc = (e, n, o) => n in e ? v$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Rc = (e, n) => {
  for (var o in n || (n = {}))
    m$.call(n, o) && Vc(e, o, n[o]);
  if (Mc)
    for (var o of Mc(n))
      h$.call(n, o) && Vc(e, o, n[o]);
  return e;
};
const { name: g$, n: b$, classes: y$ } = ne("bottom-navigation"), { n: La } = ne("bottom-navigation-item"), Lc = La("--right-half-space"), Fc = La("--left-half-space"), Uc = La("--right-space"), w$ = {
  type: "primary"
};
function k$(e, n) {
  const o = _("var-button");
  return h(), S(
    Me,
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
          M(e.$slots, "default"),
          e.$slots.fab ? (h(), Ce(o, He({
            key: 0,
            class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
            "var-bottom-navigation__fab": "",
            onClick: e.handleFabClick
          }, e.fabProps), {
            default: ce(() => [
              M(e.$slots, "fab")
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
          class: p(e.n("placeholder")),
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
const Cv = ee({
  name: g$,
  components: { VarButton: Bn },
  props: kv,
  setup(e, { slots: n }) {
    const o = $(null), t = B(() => e.active), r = B(() => e.activeColor), a = B(() => e.inactiveColor), i = B(() => e.variant), l = $(), s = $({}), { length: u, bottomNavigationItems: c, bindBottomNavigationItem: d } = p$();
    d({
      active: t,
      activeColor: r,
      inactiveColor: a,
      variant: i,
      onToggle: k
    }), de(() => u.value, v), de(
      () => e.fabProps,
      (U) => {
        s.value = Rc(Rc({}, w$), U);
      },
      { immediate: !0, deep: !0 }
    ), lo(I), yn(() => {
      I(), n.fab && O(u.value);
    }), _t(() => {
      P(), n.fab && O(u.value);
    });
    function v() {
      u.value === 0 || g() || m() || w();
    }
    function g() {
      return c.find(({ name: U }) => t.value === U.value);
    }
    function m() {
      return c.find(({ index: U }) => t.value === U.value);
    }
    function w() {
      Tn(t.value) && (t.value < 0 ? C(e["onUpdate:active"], 0) : t.value > u.value - 1 && C(e["onUpdate:active"], u.value - 1));
    }
    function k(U) {
      t.value !== U && (e.onBeforeChange ? y(U) : b(U));
    }
    function y(U) {
      const j = po(C(e.onBeforeChange, U));
      Promise.all(j).then((W) => {
        W.every(Boolean) && b(U);
      });
    }
    function b(U) {
      C(e["onUpdate:active"], U), C(e.onChange, U);
    }
    function P() {
      D().forEach((j) => {
        j.classList.remove(Lc, Fc, Uc);
      });
    }
    function O(U) {
      const j = D(), W = j.length, K = U % 2 === 0;
      j.forEach((E, R) => {
        z(K, E, R, W);
      });
    }
    function z(U, j, W, K) {
      const E = W === K - 1;
      if (!U && E) {
        j.classList.add(Uc);
        return;
      }
      const R = W === K / 2 - 1, L = W === K / 2;
      R ? j.classList.add(Lc) : L && j.classList.add(Fc);
    }
    function D() {
      return Array.from(o.value.querySelectorAll(`.${La()}`));
    }
    function T() {
      C(e.onFabClick);
    }
    function I() {
      if (!e.fixed || !e.placeholder)
        return;
      const { height: U } = nn(o.value);
      l.value = Oe(U);
    }
    return {
      length: u,
      bottomNavigationDom: o,
      fabProps: s,
      placeholderHeight: l,
      n: b$,
      classes: y$,
      handleFabClick: T
    };
  }
});
Cv.render = k$;
var Fa = Cv;
re(Fa);
ie(Fa, kv);
const uB = Fa;
var Sl = Fa;
const Sv = {
  name: String,
  label: String,
  icon: De(on, "name"),
  namespace: De(on, "namespace"),
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: V()
};
function $$() {
  const { parentProvider: e, index: n, bindParent: o } = wn(
    $v
  );
  return Ln(!!o, "BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: o
  };
}
const { name: C$, n: S$, classes: P$ } = ne("bottom-navigation-item"), O$ = {
  type: "danger",
  dot: !0
};
function z$(e, n) {
  const o = _("var-icon"), t = _("var-badge"), r = Ye("ripple");
  return Ve((h(), S(
    "button",
    {
      class: p(e.classes(e.n(), e.n("$--box"), [e.variant, e.n("--variant-padding")], [e.isActive && !e.variant, e.n("--active")])),
      style: X({
        color: e.isActive ? e.activeColor : e.inactiveColor
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      N(
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
          e.badge ? (h(), Ce(t, He({ key: 0 }, e.badgeProps, {
            class: e.n("badge"),
            "var-bottom-navigation-item-cover": ""
          }), {
            default: ce(() => [
              M(e.$slots, "icon", { active: e.isActive }, () => [
                e.icon ? (h(), Ce(o, {
                  key: 0,
                  name: e.icon,
                  namespace: e.namespace,
                  class: p(e.n("icon")),
                  "var-bottom-navigation-item-cover": ""
                }, null, 8, ["name", "namespace", "class"])) : q("v-if", !0)
              ])
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["class"])) : M(e.$slots, "icon", {
            key: 1,
            active: e.isActive
          }, () => [
            e.icon ? (h(), Ce(o, {
              key: 0,
              name: e.icon,
              namespace: e.namespace,
              class: p(e.n("icon")),
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
          class: p(e.n("label"))
        },
        [
          M(e.$slots, "default", {}, () => [
            Ie(
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
const Pv = ee({
  name: C$,
  components: {
    VarBadge: Zr,
    VarIcon: Je
  },
  directives: { Ripple: tn },
  props: Sv,
  setup(e) {
    const n = B(() => e.name), o = B(() => [n.value, r.value].includes(l.value)), t = B(() => e.badge === !0 ? O$ : e.badge), { index: r, bottomNavigation: a, bindBottomNavigation: i } = $$(), { active: l, activeColor: s, inactiveColor: u, variant: c } = a;
    i({
      name: n,
      index: r
    });
    function f() {
      var v;
      const g = (v = n.value) != null ? v : r.value;
      C(e.onClick, g), C(a.onToggle, g);
    }
    return {
      activeColor: s,
      inactiveColor: u,
      badgeProps: t,
      isActive: o,
      variant: c,
      n: S$,
      classes: P$,
      handleClick: f
    };
  }
});
Pv.render = z$;
var Ua = Pv;
re(Ua);
ie(Ua, Sv);
const cB = Ua;
var Pl = Ua;
const Ov = {
  separator: String,
  onClick: V()
}, zv = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function T$() {
  const { childProviders: e, bindChildren: n, length: o } = kn(
    zv
  );
  return {
    length: o,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function E$() {
  const { parentProvider: e, bindParent: n, index: o } = wn(
    zv
  );
  return Ln(!!n, "Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: o,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
const { name: B$, n: I$, classes: D$ } = ne("breadcrumb");
function A$(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.n())
    },
    [
      N(
        "div",
        {
          class: p(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
          onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
        },
        [
          M(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      e.isLast ? q("v-if", !0) : M(e.$slots, "separator", { key: 0 }, () => {
        var o;
        return [
          N(
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
const Tv = ee({
  name: B$,
  props: Ov,
  setup(e) {
    const { index: n, breadcrumb: o, bindBreadcrumb: t } = E$(), r = B(() => n.value === o.length.value - 1), a = B(() => o.separator.value);
    t(null);
    function i(l) {
      r.value || C(e.onClick, l);
    }
    return {
      n: I$,
      classes: D$,
      isLast: r,
      parentSeparator: a,
      handleClick: i
    };
  }
});
Tv.render = A$;
var Ha = Tv;
re(Ha);
ie(Ha, Ov);
const dB = Ha;
var Ol = Ha;
const Ev = {
  separator: {
    type: String,
    default: "/"
  }
}, { name: N$, n: M$ } = ne("breadcrumbs");
function V$(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.n()),
      role: "navigation",
      "aria-label": "Breadcrumbs"
    },
    [
      M(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Bv = ee({
  name: N$,
  props: Ev,
  setup(e) {
    const n = B(() => e.separator), { bindBreadcrumbList: o, length: t } = T$();
    return o({
      length: t,
      separator: n
    }), { n: M$ };
  }
});
Bv.render = V$;
var ja = Bv;
re(ja);
ie(ja, Ev);
const fB = ja;
var zl = ja;
const Iv = {
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
}, { name: R$, n: L$, classes: F$ } = ne("button-group");
function U$(e, n) {
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
      M(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Dv = ee({
  name: R$,
  props: Iv,
  setup(e) {
    const { bindButtons: n } = Xk(), o = {
      elevation: B(() => e.elevation),
      type: B(() => e.type),
      size: B(() => e.size),
      color: B(() => e.color),
      textColor: B(() => e.textColor),
      mode: B(() => e.mode)
    };
    return n(o), {
      n: L$,
      classes: F$,
      formatElevation: dn
    };
  }
});
Dv.render = U$;
var Ya = Dv;
re(Ya);
ie(Ya, Iv);
const pB = Ya;
var Tl = Ya;
const Av = {
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
  /**
   * @deprecated use outlined variant instead
   */
  outline: Boolean
};
var Hc = (e, n, o) => new Promise((t, r) => {
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
const { name: H$, n: j$, classes: Y$ } = ne("card"), W$ = 500, K$ = ["src", "alt"];
function q$(e, n) {
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
          M(e.$slots, "image", {}, () => [
            e.src ? (h(), S("img", {
              key: 0,
              class: p(e.n("image")),
              style: X({
                objectFit: e.fit,
                height: e.toSizeUnit(e.imageHeight),
                width: e.toSizeUnit(e.imageWidth)
              }),
              src: e.src,
              alt: e.alt
            }, null, 14, K$)) : q("v-if", !0)
          ]),
          N(
            "div",
            {
              class: p(e.n("container"))
            },
            [
              M(e.$slots, "title", {
                slotClass: e.n("title")
              }, () => [
                e.title ? (h(), S(
                  "div",
                  {
                    key: 0,
                    class: p(e.n("title"))
                  },
                  le(e.title),
                  3
                  /* TEXT, CLASS */
                )) : q("v-if", !0)
              ]),
              M(e.$slots, "subtitle", {
                slotClass: e.n("subtitle")
              }, () => [
                e.subtitle ? (h(), S(
                  "div",
                  {
                    key: 0,
                    class: p(e.n("subtitle"))
                  },
                  le(e.subtitle),
                  3
                  /* TEXT, CLASS */
                )) : q("v-if", !0)
              ]),
              e.$slots.default ? (h(), S(
                "div",
                {
                  key: 0,
                  class: p(e.n("content"))
                },
                [
                  M(e.$slots, "default")
                ],
                2
                /* CLASS */
              )) : q("v-if", !0),
              M(e.$slots, "description", {
                slotClass: e.n("description")
              }, () => [
                e.description ? (h(), S(
                  "div",
                  {
                    key: 0,
                    class: p(e.n("description"))
                  },
                  le(e.description),
                  3
                  /* TEXT, CLASS */
                )) : q("v-if", !0)
              ]),
              e.$slots.extra ? (h(), S(
                "div",
                {
                  key: 1,
                  class: p(e.n("footer"))
                },
                [
                  M(e.$slots, "extra")
                ],
                2
                /* CLASS */
              )) : q("v-if", !0),
              e.$slots["floating-content"] && !e.isRow ? (h(), S(
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
                  M(e.$slots, "floating-content")
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
              class: p(e.classes(e.n("floating-buttons"), e.n("$--box"))),
              style: X({
                zIndex: e.zIndex,
                opacity: e.opacity,
                transition: `opacity ${e.floatingDuration * 2}ms`
              })
            },
            [
              M(e.$slots, "close-button", {}, () => [
                G(t, {
                  "var-card-cover": "",
                  class: p(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
                  onClick: Xn(e.close, ["stop"])
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
          )) : q("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      ),
      N(
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
const Nv = ee({
  name: H$,
  directives: { Ripple: tn },
  components: {
    VarIcon: Je,
    VarButton: Bn
  },
  props: Av,
  setup(e) {
    const n = $(null), o = $(null), t = $("auto"), r = $("auto"), a = $("100%"), i = $("100%"), l = $("auto"), s = $("auto"), u = $(void 0), c = $("hidden"), d = $("0px"), f = $("0"), v = B(() => e.layout === "row"), g = $(!1), m = $(!1), { zIndex: w } = lr(() => e.floating, 1);
    let k = "auto", y = "auto", b = null;
    const P = $(null);
    ir(
      () => e.floating,
      () => !v.value
    ), de(
      () => e.floating,
      (I) => {
        v.value || je(() => {
          I ? O() : z();
        });
      },
      { immediate: !0 }
    );
    function O() {
      return Hc(this, null, function* () {
        clearTimeout(P.value), clearTimeout(b), P.value = null, P.value = setTimeout(
          () => Hc(this, null, function* () {
            const { width: I, height: U, left: j, top: W } = nn(n.value);
            t.value = Oe(I), r.value = Oe(U), a.value = t.value, i.value = r.value, l.value = Oe(W), s.value = Oe(j), u.value = "fixed", k = l.value, y = s.value, g.value = !0, yield bn(), l.value = "0", s.value = "0", a.value = "100vw", i.value = "100vh", d.value = "auto", f.value = "1", c.value = "auto", m.value = !0;
          }),
          e.ripple ? W$ : 0
        );
      });
    }
    function z() {
      clearTimeout(b), clearTimeout(P.value), P.value = null, a.value = t.value, i.value = r.value, l.value = k, s.value = y, d.value = "0px", f.value = "0", g.value = !1, b = setTimeout(() => {
        t.value = "auto", r.value = "auto", a.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", k = "auto", y = "auto", c.value = "hidden", u.value = void 0, m.value = !1;
      }, e.floatingDuration);
    }
    function D() {
      C(e["onUpdate:floating"], !1);
    }
    function T(I) {
      C(e.onClick, I);
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
      showFloatingButtons: g,
      floated: m,
      n: j$,
      classes: Y$,
      toSizeUnit: Oe,
      close: D,
      formatElevation: dn,
      handleClick: T
    };
  }
});
Nv.render = q$;
var Wa = Nv;
re(Wa);
ie(Wa, Av);
const vB = Wa;
var El = Wa;
const Mv = {
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
  onClick: V()
}, { name: X$, n: G$, classes: Z$ } = ne("cell");
function J$(e, n) {
  const o = _("var-icon"), t = Ye("ripple");
  return Ve((h(), S(
    "div",
    {
      class: p(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: X(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
    },
    [
      M(e.$slots, "icon", {}, () => [
        e.icon ? (h(), S(
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
        )) : q("v-if", !0)
      ]),
      N(
        "div",
        {
          class: p(e.n("content"))
        },
        [
          M(e.$slots, "default", {}, () => [
            e.title ? (h(), S(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("title"), e.titleClass))
              },
              le(e.title),
              3
              /* TEXT, CLASS */
            )) : q("v-if", !0)
          ]),
          M(e.$slots, "description", {}, () => [
            e.description ? (h(), S(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("description"), e.descriptionClass))
              },
              le(e.description),
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
          class: p(e.classes(e.n("extra"), e.extraClass))
        },
        [
          M(e.$slots, "extra")
        ],
        2
        /* CLASS */
      )) : q("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [t, { disabled: !e.ripple }]
  ]);
}
const Vv = ee({
  name: X$,
  components: { VarIcon: Je },
  directives: { Ripple: tn },
  props: Mv,
  setup(e) {
    const n = B(() => e.borderOffset == null ? {} : {
      "--cell-border-left": Oe(e.borderOffset),
      "--cell-border-right": Oe(e.borderOffset)
    });
    function o(t) {
      C(e.onClick, t);
    }
    return {
      borderOffsetStyles: n,
      n: G$,
      classes: Z$,
      toSizeUnit: Oe,
      handleClick: o
    };
  }
});
Vv.render = J$;
var Ka = Vv;
re(Ka);
ie(Ka, Mv);
const mB = Ka;
var Bl = Ka;
const Rv = {
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
}, { name: Q$, n: x$, classes: _$ } = ne("checkbox-group");
function eC(e, n) {
  const o = _("maybe-v-node"), t = _("var-checkbox"), r = _("var-form-details");
  return h(), S(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      N(
        "div",
        {
          class: p(e.classes(e.n(), e.n(`--${e.direction}`)))
        },
        [
          e.options.length ? (h(!0), S(
            Me,
            { key: 0 },
            Xe(e.options, (a) => (h(), Ce(t, {
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
          M(e.$slots, "default")
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
const Lv = ee({
  name: Q$,
  components: { VarFormDetails: En, VarCheckbox: pt, MaybeVNode: ar },
  props: Rv,
  setup(e) {
    const n = B(() => e.max), o = B(() => e.modelValue.length), { length: t, checkboxes: r, bindCheckboxes: a } = Ew(), { bindForm: i } = Hn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: c
    } = Un(), d = B(() => l.value), f = {
      max: n,
      checkedCount: o,
      onChecked: m,
      onUnchecked: w,
      validate: z,
      resetValidation: c,
      reset: O,
      errorMessage: d
    };
    de(() => e.modelValue, k, { deep: !0 }), de(() => t.value, k), a(f), C(i, f);
    function v(D) {
      je(() => {
        const { validateTrigger: T, rules: I, modelValue: U } = e;
        s(T, D, I, U);
      });
    }
    function g(D) {
      C(e["onUpdate:modelValue"], D), C(e.onChange, D), v("onChange");
    }
    function m(D) {
      const { modelValue: T } = e;
      T.includes(D) || g([...T, D]);
    }
    function w(D) {
      const { modelValue: T } = e;
      T.includes(D) && g(T.filter((I) => I !== D));
    }
    function k() {
      r.forEach(({ sync: D }) => D(e.modelValue));
    }
    function y() {
      r.forEach((D) => D.resetWithAnimation());
    }
    function b() {
      const D = r.map(({ checkedValue: I }) => I.value), T = sl(D);
      return y(), C(e["onUpdate:modelValue"], T), T;
    }
    function P() {
      const D = r.filter(({ checked: I }) => !I.value).map(({ checkedValue: I }) => I.value), T = sl(D);
      return y(), C(e["onUpdate:modelValue"], T), T;
    }
    function O() {
      C(e["onUpdate:modelValue"], []), c();
    }
    function z() {
      return u(e.rules, e.modelValue);
    }
    return {
      errorMessage: l,
      n: x$,
      classes: _$,
      checkAll: b,
      inverseAll: P,
      reset: O,
      validate: z,
      resetValidation: c,
      isFunction: mn
    };
  }
});
Lv.render = eC;
var qa = Lv;
re(qa);
ie(qa, Rv);
const hB = qa;
var Il = qa;
const Fv = {
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
  onClose: V()
}, { name: nC, n: yo, classes: oC } = ne("chip");
function tC(e, n) {
  const o = _("var-icon");
  return h(), Ce(xe, {
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
          M(e.$slots, "left"),
          N(
            "span",
            {
              class: p(e.n(`text-${e.size}`))
            },
            [
              M(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          M(e.$slots, "right"),
          e.closeable ? (h(), S(
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
const Uv = ee({
  name: nC,
  components: {
    VarIcon: Je
  },
  inheritAttrs: !1,
  props: Fv,
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
      const { size: r, block: a, type: i, plain: l, round: s } = e, u = yo(a ? "$--flex" : "$--inline-flex"), c = l ? `${yo("plain")} ${yo(`plain-${i}`)}` : yo(`--${i}`), d = s ? yo("--round") : null;
      return [yo(`--${r}`), u, c, d];
    });
    function t(r) {
      C(e.onClose, r);
    }
    return {
      chipStyle: n,
      contentClass: o,
      n: yo,
      classes: oC,
      formatElevation: dn,
      handleClose: t
    };
  }
});
Uv.render = tC;
var Xa = Uv;
re(Xa);
ie(Xa, Fv);
const gB = Xa;
var Jr = Xa;
const Hv = {
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
}, Dl = Symbol("HIGHLIGHTER_PROVIDER_KEY");
function rC(e) {
  Hs(Dl, e);
}
function aC() {
  return _s(Dl) ? Us(Dl) : { highlighter: null, theme: null };
}
var iC = (e, n, o) => new Promise((t, r) => {
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
const { name: lC, n: sC, classes: uC } = ne("code"), cC = ["innerHTML"];
function dC(e, n) {
  return h(), S("div", {
    class: p(e.classes(e.n(), [e.wordWrap, e.n("--word-wrap")])),
    innerHTML: e.highlightedCode
  }, null, 10, cC);
}
const jv = ee({
  name: lC,
  props: Hv,
  setup(e) {
    const { highlighter: n, theme: o } = aC(), t = $(""), r = B(() => {
      var a;
      return (a = e.theme) != null ? a : o == null ? void 0 : o.value;
    });
    return n && de(
      () => [n.value, e.code, e.language, r.value, e.trim],
      (a) => iC(this, [a], function* ([i, l, s = "", u = "", c]) {
        i && (t.value = yield i.codeToHtml(c ? l.trim() : l, { lang: s, theme: u }));
      }),
      { immediate: !0 }
    ), {
      n: sC,
      classes: uC,
      highlightedCode: t
    };
  }
});
jv.render = dC;
var Ga = jv;
re(Ga);
ie(Ga, Hv);
const bB = Ga;
var Al = Ga;
const Yv = {
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
}, Wv = Symbol("ROW_BIND_COL_KEY");
function fC() {
  const { length: e, childProviders: n, bindChildren: o } = kn(Wv);
  return {
    length: e,
    cols: n,
    bindCols: o
  };
}
function pC() {
  const { index: e, bindParent: n, parentProvider: o } = wn(Wv);
  return {
    index: e,
    row: o,
    bindRow: n
  };
}
const { name: vC, n: gr, classes: mC } = ne("col");
function hC(e, n) {
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
      M(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Kv = ee({
  name: vC,
  props: Yv,
  setup(e) {
    const n = B(() => F(e.span)), o = B(() => F(e.offset)), t = B(() => {
      var s;
      const [u = 0, c = 0] = (s = r == null ? void 0 : r.average.value) != null ? s : [];
      return { left: c, right: c, top: u, bottom: u };
    }), { row: r, bindRow: a } = pC();
    C(a, null);
    function i(s, u) {
      const c = [];
      if (u == null)
        return c;
      if (Rn(u)) {
        const { offset: d, span: f } = u;
        return Number(f) >= 0 && c.push(gr(`--span-${s}-${f}`)), d && c.push(gr(`--offset-${s}-${d}`)), c;
      }
      return Number(u) >= 0 && c.push(gr(`--span-${s}-${u}`)), c;
    }
    function l(s) {
      C(e.onClick, s);
    }
    return {
      span: n,
      offset: o,
      padding: t,
      n: gr,
      classes: mC,
      toNumber: F,
      toSizeUnit: Oe,
      getSize: i,
      handleClick: l,
      padStartFlex: Xr
    };
  }
});
Kv.render = hC;
var Za = Kv;
re(Za);
ie(Za, Yv);
const yB = Za;
var Nl = Za;
const qv = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function gC() {
  const { childProviders: e, length: n, bindChildren: o } = kn(
    qv
  );
  return {
    length: n,
    collapseItems: e,
    bindCollapseItems: o
  };
}
const Xv = {
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
}, { name: bC, n: yC } = ne("collapse");
function wC(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.n())
    },
    [
      M(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Gv = ee({
  name: bC,
  props: Xv,
  setup(e) {
    const n = B(() => e.offset), o = B(() => e.divider), t = B(() => e.elevation), r = B(() => e.accordion), a = B(() => po(e.modelValue)), { length: i, collapseItems: l, bindCollapseItems: s } = gC(), u = {
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
    function c(m, w) {
      if (e.accordion) {
        d(w ? m : void 0);
        return;
      }
      const k = w ? [...a.value, m] : a.value.filter((y) => y !== m);
      d(k);
    }
    function d(m) {
      C(e["onUpdate:modelValue"], m), C(e.onChange, m);
    }
    function f() {
      if (e.accordion) {
        const [k] = a.value;
        if (k == null)
          return;
        const y = l.find(({ name: b }) => k === b.value);
        return y ?? l.find(({ index: b, name: P }) => P.value == null && k === b.value);
      }
      const m = l.filter(
        ({ name: k }) => k.value != null && a.value.includes(k.value)
      ), w = l.filter(
        ({ index: k, name: y }) => y.value == null && a.value.includes(k.value)
      );
      return [...m, ...w];
    }
    function v() {
      const m = Bf(po(f()));
      l.forEach((w) => {
        w.init(m.includes(w));
      });
    }
    return {
      divider: o,
      n: yC,
      toggleAll: (m) => {
        if (e.accordion) return;
        const k = l.filter((y) => {
          var b;
          const P = (b = y.name.value) != null ? b : y.index.value, O = a.value.includes(P);
          return m.skipDisabled && y.disabled.value ? O : m.expand === "inverse" ? !O : m.expand;
        }).map((y) => {
          var b;
          return (b = y.name.value) != null ? b : y.index.value;
        });
        d(k);
      }
    };
  }
});
Gv.render = wC;
var Ja = Gv;
re(Ja);
ie(Ja, Xv);
const wB = Ja;
var Ml = Ja;
function kC() {
  const { parentProvider: e, index: n, bindParent: o } = wn(
    qv
  );
  return Ln(!!o, "Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: o
  };
}
const Zv = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
};
var jc = (e, n, o) => new Promise((t, r) => {
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
function Jv(e) {
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
    return jc(this, null, function* () {
      if (!n.value || (n.value.style.height = "", o.value = !0, yield Eo(), !n.value))
        return;
      const { offsetHeight: u } = n.value;
      n.value.style.height = "0px", yield Eo(), n.value && (n.value.style.height = u + "px", r && (yield bn(), r && l()));
    });
  }
  const i = () => jc(this, null, function* () {
    if (!n.value)
      return;
    const { offsetHeight: u } = n.value;
    n.value.style.height = u + "px", yield Eo(), n.value.style.height = "0px";
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
const { name: $C, n: CC, classes: SC } = ne("collapse-item"), PC = ["aria-expanded", "aria-disabled", "role"];
function OC(e, n) {
  const o = _("var-icon");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: X(`--collapse-divider-top: ${e.divider ? "var(--collapse-border-top)" : "none"}`)
    },
    [
      N(
        "div",
        {
          class: p(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2)))
        },
        null,
        2
        /* CLASS */
      ),
      N("div", {
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
            M(e.$slots, "title", {}, () => [
              Ie(
                le(e.title),
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
            class: p(e.n("header-icon"))
          },
          [
            M(e.$slots, "icon", {}, () => [
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
      ], 10, PC),
      Ve(N(
        "div",
        {
          class: p(e.n("content")),
          ref: "contentEl",
          onTransitionend: n[1] || (n[1] = (...t) => e.handleTransitionEnd && e.handleTransitionEnd(...t)),
          onTransitionstart: n[2] || (n[2] = (...t) => e.handleTransitionStart && e.handleTransitionStart(...t))
        },
        [
          N(
            "div",
            {
              class: p(e.n("content-wrap"))
            },
            [
              M(e.$slots, "default")
            ],
            2
            /* CLASS */
          )
        ],
        34
        /* CLASS, NEED_HYDRATION */
      ), [
        [_n, e.showContent]
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const Qv = ee({
  name: $C,
  components: {
    VarIcon: Je
  },
  props: Zv,
  setup(e) {
    const n = $(!1), o = $(!1), t = $(null), r = B(() => e.name), a = B(() => e.disabled), { index: i, collapse: l, bindCollapse: s } = kC(), { offset: u, divider: c, elevation: d, accordion: f, updateItem: v } = l;
    s({
      index: i,
      name: r,
      disabled: a,
      init: k
    });
    const { handleTransitionEnd: m, handleTransitionStart: w } = Jv({
      contentEl: t,
      showContent: o,
      expand: n
    });
    function k(b) {
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
      n: CC,
      classes: SC,
      toggle: y,
      formatElevation: dn,
      handleTransitionEnd: m,
      handleTransitionStart: w
    };
  }
});
Qv.render = OC;
var Qa = Qv;
re(Qa);
ie(Qa, Zv);
const kB = Qa;
var Vl = Qa;
const xv = {
  expand: Boolean
}, { name: zC, n: TC } = ne("collapse-transition");
function EC(e, n) {
  return Ve((h(), S(
    "div",
    {
      class: p(e.n("content")),
      ref: "contentEl",
      onTransitionend: n[0] || (n[0] = (...o) => e.handleTransitionEnd && e.handleTransitionEnd(...o)),
      onTransitionstart: n[1] || (n[1] = (...o) => e.handleTransitionStart && e.handleTransitionStart(...o))
    },
    [
      M(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  )), [
    [_n, e.showContent]
  ]);
}
const _v = ee({
  name: zC,
  props: xv,
  setup(e) {
    const n = $(!1), o = $(null), t = B(() => e.expand), { handleTransitionEnd: r, handleTransitionStart: a } = Jv({
      contentEl: o,
      showContent: n,
      expand: t
    });
    return {
      showContent: n,
      contentEl: o,
      n: TC,
      handleTransitionEnd: r,
      handleTransitionStart: a
    };
  }
});
_v.render = EC;
var xa = _v;
re(xa);
ie(xa, xv);
const $B = xa;
var Rl = xa;
const em = {
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
  onEnd: V()
}, { name: BC, n: IC } = ne("count-to");
function DC(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.n())
    },
    [
      M(e.$slots, "default", { value: e.value }, () => [
        Ie(
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
const nm = ee({
  name: BC,
  props: em,
  setup(e) {
    const {
      value: n,
      reset: o,
      // expose
      start: t,
      // expose
      pause: r
    } = c0({
      from: () => F(e.from),
      to: () => F(e.to),
      duration: () => F(e.duration),
      timingFunction: e.timingFunction,
      onFinished() {
        C(e.onEnd);
      }
    }), a = B(() => ul(n.value, F(e.precision)));
    de(() => [e.from, e.to, e.duration], i), Lo(i);
    function i() {
      o(), e.autoStart && t();
    }
    return {
      value: a,
      n: IC,
      start: t,
      pause: r,
      reset: i,
      toNumber: F,
      floor: ul
    };
  }
});
nm.render = DC;
var _a = nm;
re(_a);
ie(_a, em);
const CB = _a;
var Ll = _a;
const om = {
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
}, { name: AC, n: NC } = ne("countdown"), Fl = 1e3, Ul = 60 * Fl, Hl = 60 * Ul, Yc = 24 * Hl;
function MC(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.n())
    },
    [
      M(e.$slots, "default", To(er(e.timeData)), () => [
        Ie(
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
const tm = ee({
  name: AC,
  props: om,
  setup(e) {
    const n = $(""), o = $({
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
    ), Lo(() => {
      c(), e.autoStart && d();
    }), Fo(() => {
      l != null && (r = l, r === !0 && d(!0));
    }), wt(() => {
      l = r, f();
    }), Qt(f);
    function s(g, m) {
      const w = Object.values(m), k = ["DD", "HH", "mm", "ss"], y = [24, 60, 60, 1e3];
      if (k.forEach((b, P) => {
        g.includes(b) ? g = g.replace(b, Jo(`${w[P]}`, 2, "0")) : w[P + 1] += w[P] * y[P];
      }), g.includes("S")) {
        const b = Jo(`${w[w.length - 1]}`, 3, "0");
        g.includes("SSS") ? g = g.replace("SSS", b) : g.includes("SS") ? g = g.replace("SS", b.slice(0, 2)) : g = g.replace("S", b.slice(0, 1));
      }
      return g;
    }
    function u(g) {
      const m = Math.floor(g / Yc), w = Math.floor(g % Yc / Hl), k = Math.floor(g % Hl / Ul), y = Math.floor(g % Ul / Fl), b = Math.floor(g % Fl), P = {
        days: m,
        hours: w,
        minutes: k,
        seconds: y,
        milliseconds: b
      };
      o.value = P, C(e.onChange, o.value), n.value = s(e.format, P);
    }
    function c() {
      const { time: g, onEnd: m } = e, w = performance.now();
      if (t || (t = w + F(g)), i = t - w, i < 0 && (i = 0), u(i), i === 0) {
        C(m);
        return;
      }
      r && (a = Ao(c));
    }
    function d(g = !1) {
      r && !g || (r = !0, t = performance.now() + (i || F(e.time)), c());
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
      n: NC,
      start: d,
      pause: f,
      reset: v
    };
  }
});
tm.render = MC;
var ei = tm;
re(ei);
ie(ei, om);
const SB = ei;
var jl = ei;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var ot = 9e15, jo = 1e9, Yl = "0123456789abcdef", Qr = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", xr = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Wl = {
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
  minE: -ot,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: ot,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, rm, fo, Te = !0, ni = "[DecimalError] ", Ro = ni + "Invalid argument: ", am = ni + "Precision limit exceeded", im = ni + "crypto unavailable", lm = "[object Decimal]", Sn = Math.floor, vn = Math.pow, VC = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, RC = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, LC = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, sm = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, xn = 1e7, Pe = 7, FC = 9007199254740991, UC = Qr.length - 1, Kl = xr.length - 1, Q = { toStringTag: lm };
Q.absoluteValue = Q.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), $e(e);
};
Q.ceil = function() {
  return $e(new this.constructor(this), this.e + 1, 2);
};
Q.clampedTo = Q.clamp = function(e, n) {
  var o, t = this, r = t.constructor;
  if (e = new r(e), n = new r(n), !e.s || !n.s) return new r(NaN);
  if (e.gt(n)) throw Error(Ro + n);
  return o = t.cmp(e), o < 0 ? e : t.cmp(n) > 0 ? n : new r(t);
};
Q.comparedTo = Q.cmp = function(e) {
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
Q.cosine = Q.cos = function() {
  var e, n, o = this, t = o.constructor;
  return o.d ? o.d[0] ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(o.e, o.sd()) + Pe, t.rounding = 1, o = HC(t, pm(t, o)), t.precision = e, t.rounding = n, $e(fo == 2 || fo == 3 ? o.neg() : o, e, n, !0)) : new t(1) : new t(NaN);
};
Q.cubeRoot = Q.cbrt = function() {
  var e, n, o, t, r, a, i, l, s, u, c = this, d = c.constructor;
  if (!c.isFinite() || c.isZero()) return new d(c);
  for (Te = !1, a = c.s * vn(c.s * c, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (o = Cn(c.d), e = c.e, (a = (e - o.length + 1) % 3) && (o += a == 1 || a == -2 ? "0" : "00"), a = vn(o, 1 / 3), e = Sn((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? o = "5e" + e : (o = a.toExponential(), o = o.slice(0, o.indexOf("e") + 1) + e), t = new d(o), t.s = c.s) : t = new d(a.toString()), i = (e = d.precision) + 3; ; )
    if (l = t, s = l.times(l).times(l), u = s.plus(c), t = Ze(u.plus(c).times(l), u.plus(s), i + 2, 1), Cn(l.d).slice(0, i) === (o = Cn(t.d)).slice(0, i))
      if (o = o.slice(i - 3, i + 1), o == "9999" || !r && o == "4999") {
        if (!r && ($e(l, e + 1, 0), l.times(l).times(l).eq(c))) {
          t = l;
          break;
        }
        i += 4, r = 1;
      } else {
        (!+o || !+o.slice(1) && o.charAt(0) == "5") && ($e(t, e + 1, 1), n = !t.times(t).times(t).eq(c));
        break;
      }
  return Te = !0, $e(t, e, d.rounding, n);
};
Q.decimalPlaces = Q.dp = function() {
  var e, n = this.d, o = NaN;
  if (n) {
    if (e = n.length - 1, o = (e - Sn(this.e / Pe)) * Pe, e = n[e], e) for (; e % 10 == 0; e /= 10) o--;
    o < 0 && (o = 0);
  }
  return o;
};
Q.dividedBy = Q.div = function(e) {
  return Ze(this, new this.constructor(e));
};
Q.dividedToIntegerBy = Q.divToInt = function(e) {
  var n = this, o = n.constructor;
  return $e(Ze(n, new o(e), 0, 1, 1), o.precision, o.rounding);
};
Q.equals = Q.eq = function(e) {
  return this.cmp(e) === 0;
};
Q.floor = function() {
  return $e(new this.constructor(this), this.e + 1, 3);
};
Q.greaterThan = Q.gt = function(e) {
  return this.cmp(e) > 0;
};
Q.greaterThanOrEqualTo = Q.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
Q.hyperbolicCosine = Q.cosh = function() {
  var e, n, o, t, r, a = this, i = a.constructor, l = new i(1);
  if (!a.isFinite()) return new i(a.s ? 1 / 0 : NaN);
  if (a.isZero()) return l;
  o = i.precision, t = i.rounding, i.precision = o + Math.max(a.e, a.sd()) + 4, i.rounding = 1, r = a.d.length, r < 32 ? (e = Math.ceil(r / 3), n = (1 / ti(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), a = gt(i, 1, a.times(n), new i(1), !0);
  for (var s, u = e, c = new i(8); u--; )
    s = a.times(a), a = l.minus(s.times(c.minus(s.times(c))));
  return $e(a, i.precision = o, i.rounding = t, !0);
};
Q.hyperbolicSine = Q.sinh = function() {
  var e, n, o, t, r = this, a = r.constructor;
  if (!r.isFinite() || r.isZero()) return new a(r);
  if (n = a.precision, o = a.rounding, a.precision = n + Math.max(r.e, r.sd()) + 4, a.rounding = 1, t = r.d.length, t < 3)
    r = gt(a, 2, r, r, !0);
  else {
    e = 1.4 * Math.sqrt(t), e = e > 16 ? 16 : e | 0, r = r.times(1 / ti(5, e)), r = gt(a, 2, r, r, !0);
    for (var i, l = new a(5), s = new a(16), u = new a(20); e--; )
      i = r.times(r), r = r.times(l.plus(i.times(s.times(i).plus(u))));
  }
  return a.precision = n, a.rounding = o, $e(r, n, o, !0);
};
Q.hyperbolicTangent = Q.tanh = function() {
  var e, n, o = this, t = o.constructor;
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + 7, t.rounding = 1, Ze(o.sinh(), o.cosh(), t.precision = e, t.rounding = n)) : new t(o.s);
};
Q.inverseCosine = Q.acos = function() {
  var e, n = this, o = n.constructor, t = n.abs().cmp(1), r = o.precision, a = o.rounding;
  return t !== -1 ? t === 0 ? n.isNeg() ? Qn(o, r, a) : new o(0) : new o(NaN) : n.isZero() ? Qn(o, r + 4, a).times(0.5) : (o.precision = r + 6, o.rounding = 1, n = n.asin(), e = Qn(o, r + 4, a).times(0.5), o.precision = r, o.rounding = a, e.minus(n));
};
Q.inverseHyperbolicCosine = Q.acosh = function() {
  var e, n, o = this, t = o.constructor;
  return o.lte(1) ? new t(o.eq(1) ? 0 : NaN) : o.isFinite() ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(Math.abs(o.e), o.sd()) + 4, t.rounding = 1, Te = !1, o = o.times(o).minus(1).sqrt().plus(o), Te = !0, t.precision = e, t.rounding = n, o.ln()) : new t(o);
};
Q.inverseHyperbolicSine = Q.asinh = function() {
  var e, n, o = this, t = o.constructor;
  return !o.isFinite() || o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + 2 * Math.max(Math.abs(o.e), o.sd()) + 6, t.rounding = 1, Te = !1, o = o.times(o).plus(1).sqrt().plus(o), Te = !0, t.precision = e, t.rounding = n, o.ln());
};
Q.inverseHyperbolicTangent = Q.atanh = function() {
  var e, n, o, t, r = this, a = r.constructor;
  return r.isFinite() ? r.e >= 0 ? new a(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN) : (e = a.precision, n = a.rounding, t = r.sd(), Math.max(t, e) < 2 * -r.e - 1 ? $e(new a(r), e, n, !0) : (a.precision = o = t - r.e, r = Ze(r.plus(1), new a(1).minus(r), o + e, 1), a.precision = e + 4, a.rounding = 1, r = r.ln(), a.precision = e, a.rounding = n, r.times(0.5))) : new a(NaN);
};
Q.inverseSine = Q.asin = function() {
  var e, n, o, t, r = this, a = r.constructor;
  return r.isZero() ? new a(r) : (n = r.abs().cmp(1), o = a.precision, t = a.rounding, n !== -1 ? n === 0 ? (e = Qn(a, o + 4, t).times(0.5), e.s = r.s, e) : new a(NaN) : (a.precision = o + 6, a.rounding = 1, r = r.div(new a(1).minus(r.times(r)).sqrt().plus(1)).atan(), a.precision = o, a.rounding = t, r.times(2)));
};
Q.inverseTangent = Q.atan = function() {
  var e, n, o, t, r, a, i, l, s, u = this, c = u.constructor, d = c.precision, f = c.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new c(u);
    if (u.abs().eq(1) && d + 4 <= Kl)
      return i = Qn(c, d + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s) return new c(NaN);
    if (d + 4 <= Kl)
      return i = Qn(c, d + 4, f).times(0.5), i.s = u.s, i;
  }
  for (c.precision = l = d + 10, c.rounding = 1, o = Math.min(28, l / Pe + 2 | 0), e = o; e; --e) u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (Te = !1, n = Math.ceil(l / Pe), t = 1, s = u.times(u), i = new c(u), r = u; e !== -1; )
    if (r = r.times(s), a = i.minus(r.div(t += 2)), r = r.times(s), i = a.plus(r.div(t += 2)), i.d[n] !== void 0) for (e = n; i.d[e] === a.d[e] && e--; ) ;
  return o && (i = i.times(2 << o - 1)), Te = !0, $e(i, c.precision = d, c.rounding = f, !0);
};
Q.isFinite = function() {
  return !!this.d;
};
Q.isInteger = Q.isInt = function() {
  return !!this.d && Sn(this.e / Pe) > this.d.length - 2;
};
Q.isNaN = function() {
  return !this.s;
};
Q.isNegative = Q.isNeg = function() {
  return this.s < 0;
};
Q.isPositive = Q.isPos = function() {
  return this.s > 0;
};
Q.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
Q.lessThan = Q.lt = function(e) {
  return this.cmp(e) < 0;
};
Q.lessThanOrEqualTo = Q.lte = function(e) {
  return this.cmp(e) < 1;
};
Q.logarithm = Q.log = function(e) {
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
  if (Te = !1, l = d + v, i = Oo(u, l), t = n ? _r(c, l + 10) : Oo(e, l), s = Ze(i, t, l, 1), Kt(s.d, r = d, f))
    do
      if (l += 10, i = Oo(u, l), t = n ? _r(c, l + 10) : Oo(e, l), s = Ze(i, t, l, 1), !a) {
        +Cn(s.d).slice(r + 1, r + 15) + 1 == 1e14 && (s = $e(s, d + 1, 0));
        break;
      }
    while (Kt(s.d, r += 10, f));
  return Te = !0, $e(s, d, f);
};
Q.minus = Q.sub = function(e) {
  var n, o, t, r, a, i, l, s, u, c, d, f, v = this, g = v.constructor;
  if (e = new g(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new g(NaN) : v.d ? e.s = -e.s : e = new g(e.d || v.s !== e.s ? v : NaN), e;
  if (v.s != e.s)
    return e.s = -e.s, v.plus(e);
  if (u = v.d, f = e.d, l = g.precision, s = g.rounding, !u[0] || !f[0]) {
    if (f[0]) e.s = -e.s;
    else if (u[0]) e = new g(v);
    else return new g(s === 3 ? -0 : 0);
    return Te ? $e(e, l, s) : e;
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
      for (r = t; r && u[--r] === 0; ) u[r] = xn - 1;
      --u[r], u[t] += xn;
    }
    u[t] -= f[t];
  }
  for (; u[--i] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --o;
  return u[0] ? (e.d = u, e.e = oi(u, o), Te ? $e(e, l, s) : e) : new g(s === 3 ? -0 : 0);
};
Q.modulo = Q.mod = function(e) {
  var n, o = this, t = o.constructor;
  return e = new t(e), !o.d || !e.s || e.d && !e.d[0] ? new t(NaN) : !e.d || o.d && !o.d[0] ? $e(new t(o), t.precision, t.rounding) : (Te = !1, t.modulo == 9 ? (n = Ze(o, e.abs(), 0, 3, 1), n.s *= e.s) : n = Ze(o, e, 0, t.modulo, 1), n = n.times(e), Te = !0, o.minus(n));
};
Q.naturalExponential = Q.exp = function() {
  return ql(this);
};
Q.naturalLogarithm = Q.ln = function() {
  return Oo(this);
};
Q.negated = Q.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, $e(e);
};
Q.plus = Q.add = function(e) {
  var n, o, t, r, a, i, l, s, u, c, d = this, f = d.constructor;
  if (e = new f(e), !d.d || !e.d)
    return !d.s || !e.s ? e = new f(NaN) : d.d || (e = new f(e.d || d.s === e.s ? d : NaN)), e;
  if (d.s != e.s)
    return e.s = -e.s, d.minus(e);
  if (u = d.d, c = e.d, l = f.precision, s = f.rounding, !u[0] || !c[0])
    return c[0] || (e = new f(d)), Te ? $e(e, l, s) : e;
  if (a = Sn(d.e / Pe), t = Sn(e.e / Pe), u = u.slice(), r = a - t, r) {
    for (r < 0 ? (o = u, r = -r, i = c.length) : (o = c, t = a, i = u.length), a = Math.ceil(l / Pe), i = a > i ? a + 1 : i + 1, r > i && (r = i, o.length = 1), o.reverse(); r--; ) o.push(0);
    o.reverse();
  }
  for (i = u.length, r = c.length, i - r < 0 && (r = i, o = c, c = u, u = o), n = 0; r; )
    n = (u[--r] = u[r] + c[r] + n) / xn | 0, u[r] %= xn;
  for (n && (u.unshift(n), ++t), i = u.length; u[--i] == 0; ) u.pop();
  return e.d = u, e.e = oi(u, t), Te ? $e(e, l, s) : e;
};
Q.precision = Q.sd = function(e) {
  var n, o = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Ro + e);
  return o.d ? (n = um(o.d), e && o.e + 1 > n && (n = o.e + 1)) : n = NaN, n;
};
Q.round = function() {
  var e = this, n = e.constructor;
  return $e(new n(e), e.e + 1, n.rounding);
};
Q.sine = Q.sin = function() {
  var e, n, o = this, t = o.constructor;
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + Math.max(o.e, o.sd()) + Pe, t.rounding = 1, o = YC(t, pm(t, o)), t.precision = e, t.rounding = n, $e(fo > 2 ? o.neg() : o, e, n, !0)) : new t(NaN);
};
Q.squareRoot = Q.sqrt = function() {
  var e, n, o, t, r, a, i = this, l = i.d, s = i.e, u = i.s, c = i.constructor;
  if (u !== 1 || !l || !l[0])
    return new c(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (Te = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = Cn(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Sn((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), t = new c(n)) : t = new c(u.toString()), o = (s = c.precision) + 3; ; )
    if (a = t, t = a.plus(Ze(i, a, o + 2, 1)).times(0.5), Cn(a.d).slice(0, o) === (n = Cn(t.d)).slice(0, o))
      if (n = n.slice(o - 3, o + 1), n == "9999" || !r && n == "4999") {
        if (!r && ($e(a, s + 1, 0), a.times(a).eq(i))) {
          t = a;
          break;
        }
        o += 4, r = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && ($e(t, s + 1, 1), e = !t.times(t).eq(i));
        break;
      }
  return Te = !0, $e(t, s, c.rounding, e);
};
Q.tangent = Q.tan = function() {
  var e, n, o = this, t = o.constructor;
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + 10, t.rounding = 1, o = o.sin(), o.s = 1, o = Ze(o, new t(1).minus(o.times(o)).sqrt(), e + 10, 0), t.precision = e, t.rounding = n, $e(fo == 2 || fo == 4 ? o.neg() : o, e, n, !0)) : new t(NaN);
};
Q.times = Q.mul = function(e) {
  var n, o, t, r, a, i, l, s, u, c = this, d = c.constructor, f = c.d, v = (e = new d(e)).d;
  if (e.s *= c.s, !f || !f[0] || !v || !v[0])
    return new d(!e.s || f && !f[0] && !v || v && !v[0] && !f ? NaN : !f || !v ? e.s / 0 : e.s * 0);
  for (o = Sn(c.e / Pe) + Sn(e.e / Pe), s = f.length, u = v.length, s < u && (a = f, f = v, v = a, i = s, s = u, u = i), a = [], i = s + u, t = i; t--; ) a.push(0);
  for (t = u; --t >= 0; ) {
    for (n = 0, r = s + t; r > t; )
      l = a[r] + v[t] * f[r - t - 1] + n, a[r--] = l % xn | 0, n = l / xn | 0;
    a[r] = (a[r] + n) % xn | 0;
  }
  for (; !a[--i]; ) a.pop();
  return n ? ++o : a.shift(), e.d = a, e.e = oi(a, o), Te ? $e(e, d.precision, d.rounding) : e;
};
Q.toBinary = function(e, n) {
  return wu(this, 2, e, n);
};
Q.toDecimalPlaces = Q.toDP = function(e, n) {
  var o = this, t = o.constructor;
  return o = new t(o), e === void 0 ? o : (An(e, 0, jo), n === void 0 ? n = t.rounding : An(n, 0, 8), $e(o, e + o.e + 1, n));
};
Q.toExponential = function(e, n) {
  var o, t = this, r = t.constructor;
  return e === void 0 ? o = to(t, !0) : (An(e, 0, jo), n === void 0 ? n = r.rounding : An(n, 0, 8), t = $e(new r(t), e + 1, n), o = to(t, !0, e + 1)), t.isNeg() && !t.isZero() ? "-" + o : o;
};
Q.toFixed = function(e, n) {
  var o, t, r = this, a = r.constructor;
  return e === void 0 ? o = to(r) : (An(e, 0, jo), n === void 0 ? n = a.rounding : An(n, 0, 8), t = $e(new a(r), e + r.e + 1, n), o = to(t, !1, e + t.e + 1)), r.isNeg() && !r.isZero() ? "-" + o : o;
};
Q.toFraction = function(e) {
  var n, o, t, r, a, i, l, s, u, c, d, f, v = this, g = v.d, m = v.constructor;
  if (!g) return new m(v);
  if (u = o = new m(1), t = s = new m(0), n = new m(t), a = n.e = um(g) - v.e - 1, i = a % Pe, n.d[0] = vn(10, i < 0 ? Pe + i : i), e == null)
    e = a > 0 ? n : u;
  else {
    if (l = new m(e), !l.isInt() || l.lt(u)) throw Error(Ro + l);
    e = l.gt(n) ? a > 0 ? n : u : l;
  }
  for (Te = !1, l = new m(Cn(g)), c = m.precision, m.precision = a = g.length * Pe * 2; d = Ze(l, n, 0, 1, 1), r = o.plus(d.times(t)), r.cmp(e) != 1; )
    o = t, t = r, r = u, u = s.plus(d.times(r)), s = r, r = n, n = l.minus(d.times(r)), l = r;
  return r = Ze(e.minus(o), t, 0, 1, 1), s = s.plus(r.times(u)), o = o.plus(r.times(t)), s.s = u.s = v.s, f = Ze(u, t, a, 1).minus(v).abs().cmp(Ze(s, o, a, 1).minus(v).abs()) < 1 ? [u, t] : [s, o], m.precision = c, Te = !0, f;
};
Q.toHexadecimal = Q.toHex = function(e, n) {
  return wu(this, 16, e, n);
};
Q.toNearest = function(e, n) {
  var o = this, t = o.constructor;
  if (o = new t(o), e == null) {
    if (!o.d) return o;
    e = new t(1), n = t.rounding;
  } else {
    if (e = new t(e), n === void 0 ? n = t.rounding : An(n, 0, 8), !o.d) return e.s ? o : e;
    if (!e.d)
      return e.s && (e.s = o.s), e;
  }
  return e.d[0] ? (Te = !1, o = Ze(o, e, 0, n, 1).times(e), Te = !0, $e(o)) : (e.s = o.s, o = e), o;
};
Q.toNumber = function() {
  return +this;
};
Q.toOctal = function(e, n) {
  return wu(this, 8, e, n);
};
Q.toPower = Q.pow = function(e) {
  var n, o, t, r, a, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0]) return new s(vn(+l, u));
  if (l = new s(l), l.eq(1)) return l;
  if (t = s.precision, a = s.rounding, e.eq(1)) return $e(l, t, a);
  if (n = Sn(e.e / Pe), n >= e.d.length - 1 && (o = u < 0 ? -u : u) <= FC)
    return r = cm(s, l, o, t), e.s < 0 ? new s(1).div(r) : $e(r, t, a);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1) return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return o = vn(+l, u), n = o == 0 || !isFinite(o) ? Sn(u * (Math.log("0." + Cn(l.d)) / Math.LN10 + l.e + 1)) : new s(o + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (Te = !1, s.rounding = l.s = 1, o = Math.min(12, (n + "").length), r = ql(e.times(Oo(l, t + o)), t), r.d && (r = $e(r, t + 5, 1), Kt(r.d, t, a) && (n = t + 10, r = $e(ql(e.times(Oo(l, n + o)), n), n + 5, 1), +Cn(r.d).slice(t + 1, t + 15) + 1 == 1e14 && (r = $e(r, t + 1, 0)))), r.s = i, Te = !0, s.rounding = a, $e(r, t, a));
};
Q.toPrecision = function(e, n) {
  var o, t = this, r = t.constructor;
  return e === void 0 ? o = to(t, t.e <= r.toExpNeg || t.e >= r.toExpPos) : (An(e, 1, jo), n === void 0 ? n = r.rounding : An(n, 0, 8), t = $e(new r(t), e, n), o = to(t, e <= t.e || t.e <= r.toExpNeg, e)), t.isNeg() && !t.isZero() ? "-" + o : o;
};
Q.toSignificantDigits = Q.toSD = function(e, n) {
  var o = this, t = o.constructor;
  return e === void 0 ? (e = t.precision, n = t.rounding) : (An(e, 1, jo), n === void 0 ? n = t.rounding : An(n, 0, 8)), $e(new t(o), e, n);
};
Q.toString = function() {
  var e = this, n = e.constructor, o = to(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + o : o;
};
Q.truncated = Q.trunc = function() {
  return $e(new this.constructor(this), this.e + 1, 1);
};
Q.valueOf = Q.toJSON = function() {
  var e = this, n = e.constructor, o = to(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + o : o;
};
function Cn(e) {
  var n, o, t, r = e.length - 1, a = "", i = e[0];
  if (r > 0) {
    for (a += i, n = 1; n < r; n++)
      t = e[n] + "", o = Pe - t.length, o && (a += wo(o)), a += t;
    i = e[n], t = i + "", o = Pe - t.length, o && (a += wo(o));
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
function Br(e, n, o) {
  for (var t, r = [0], a, i = 0, l = e.length; i < l; ) {
    for (a = r.length; a--; ) r[a] *= n;
    for (r[0] += Yl.indexOf(e.charAt(i++)), t = 0; t < r.length; t++)
      r[t] > o - 1 && (r[t + 1] === void 0 && (r[t + 1] = 0), r[t + 1] += r[t] / o | 0, r[t] %= o);
  }
  return r.reverse();
}
function HC(e, n) {
  var o, t, r;
  if (n.isZero()) return n;
  t = n.d.length, t < 32 ? (o = Math.ceil(t / 3), r = (1 / ti(4, o)).toString()) : (o = 16, r = "2.3283064365386962890625e-10"), e.precision += o, n = gt(e, 1, n.times(r), new e(1));
  for (var a = o; a--; ) {
    var i = n.times(n);
    n = i.times(i).minus(i).times(8).plus(1);
  }
  return e.precision -= o, n;
}
var Ze = /* @__PURE__ */ function() {
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
    var u, c, d, f, v, g, m, w, k, y, b, P, O, z, D, T, I, U, j, W, K = t.constructor, E = t.s == r.s ? 1 : -1, R = t.d, L = r.d;
    if (!R || !R[0] || !L || !L[0])
      return new K(
        // Return NaN if either NaN, or both Infinity or 0.
        !t.s || !r.s || (R ? L && R[0] == L[0] : !L) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          R && R[0] == 0 || !L ? E * 0 : E / 0
        )
      );
    for (s ? (v = 1, c = t.e - r.e) : (s = xn, v = Pe, c = Sn(t.e / v) - Sn(r.e / v)), j = L.length, I = R.length, k = new K(E), y = k.d = [], d = 0; L[d] == (R[d] || 0); d++) ;
    if (L[d] > (R[d] || 0) && c--, a == null ? (z = a = K.precision, i = K.rounding) : l ? z = a + (t.e - r.e) + 1 : z = a, z < 0)
      y.push(1), g = !0;
    else {
      if (z = z / v + 2 | 0, d = 0, j == 1) {
        for (f = 0, L = L[0], z++; (d < I || f) && z--; d++)
          D = f * s + (R[d] || 0), y[d] = D / L | 0, f = D % L | 0;
        g = f || d < I;
      } else {
        for (f = s / (L[0] + 1) | 0, f > 1 && (L = e(L, f, s), R = e(R, f, s), j = L.length, I = R.length), T = j, b = R.slice(0, j), P = b.length; P < j; ) b[P++] = 0;
        W = L.slice(), W.unshift(0), U = L[0], L[1] >= s / 2 && ++U;
        do
          f = 0, u = n(L, b, j, P), u < 0 ? (O = b[0], j != P && (O = O * s + (b[1] || 0)), f = O / U | 0, f > 1 ? (f >= s && (f = s - 1), m = e(L, f, s), w = m.length, P = b.length, u = n(m, b, w, P), u == 1 && (f--, o(m, j < w ? W : L, w, s))) : (f == 0 && (u = f = 1), m = L.slice()), w = m.length, w < P && m.unshift(0), o(b, m, P, s), u == -1 && (P = b.length, u = n(L, b, j, P), u < 1 && (f++, o(b, j < P ? W : L, P, s))), P = b.length) : u === 0 && (f++, b = [0]), y[d++] = f, u && b[0] ? b[P++] = R[T] || 0 : (b = [R[T]], P = 1);
        while ((T++ < I || b[0] !== void 0) && z--);
        g = b[0] !== void 0;
      }
      y[0] || y.shift();
    }
    if (v == 1)
      k.e = c, rm = g;
    else {
      for (d = 1, f = y[0]; f >= 10; f /= 10) d++;
      k.e = d + c * v - 1, $e(k, l ? a + k.e + 1 : a, i, g);
    }
    return k;
  };
}();
function $e(e, n, o, t) {
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
function to(e, n, o) {
  if (!e.isFinite()) return fm(e);
  var t, r = e.e, a = Cn(e.d), i = a.length;
  return n ? (o && (t = o - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + wo(t) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : r < 0 ? (a = "0." + wo(-r - 1) + a, o && (t = o - i) > 0 && (a += wo(t))) : r >= i ? (a += wo(r + 1 - i), o && (t = o - r - 1) > 0 && (a = a + "." + wo(t))) : ((t = r + 1) < i && (a = a.slice(0, t) + "." + a.slice(t)), o && (t = o - i) > 0 && (r + 1 === i && (a += "."), a += wo(t))), a;
}
function oi(e, n) {
  var o = e[0];
  for (n *= Pe; o >= 10; o /= 10) n++;
  return n;
}
function _r(e, n, o) {
  if (n > UC)
    throw Te = !0, o && (e.precision = o), Error(am);
  return $e(new e(Qr), n, 1, !0);
}
function Qn(e, n, o) {
  if (n > Kl) throw Error(am);
  return $e(new e(xr), n, o, !0);
}
function um(e) {
  var n = e.length - 1, o = n * Pe + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10) o--;
    for (n = e[0]; n >= 10; n /= 10) o++;
  }
  return o;
}
function wo(e) {
  for (var n = ""; e--; ) n += "0";
  return n;
}
function cm(e, n, o, t) {
  var r, a = new e(1), i = Math.ceil(t / Pe + 4);
  for (Te = !1; ; ) {
    if (o % 2 && (a = a.times(n), Kc(a.d, i) && (r = !0)), o = Sn(o / 2), o === 0) {
      o = a.d.length - 1, r && a.d[o] === 0 && ++a.d[o];
      break;
    }
    n = n.times(n), Kc(n.d, i);
  }
  return Te = !0, a;
}
function Wc(e) {
  return e.d[e.d.length - 1] & 1;
}
function dm(e, n, o) {
  for (var t, r = new e(n[0]), a = 0; ++a < n.length; )
    if (t = new e(n[a]), t.s)
      r[o](t) && (r = t);
    else {
      r = t;
      break;
    }
  return r;
}
function ql(e, n) {
  var o, t, r, a, i, l, s, u = 0, c = 0, d = 0, f = e.constructor, v = f.rounding, g = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
  for (n == null ? (Te = !1, s = g) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), d += 5;
  for (t = Math.log(vn(2, d)) / Math.LN10 * 2 + 5 | 0, s += t, o = a = i = new f(1), f.precision = s; ; ) {
    if (a = $e(a.times(e), s, 1), o = o.times(++c), l = i.plus(Ze(a, o, s, 1)), Cn(l.d).slice(0, s) === Cn(i.d).slice(0, s)) {
      for (r = d; r--; ) i = $e(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && Kt(i.d, s - t, v, u))
          f.precision = s += 10, o = a = l = new f(1), c = 0, u++;
        else
          return $e(i, f.precision = g, v, Te = !0);
      else
        return f.precision = g, i;
    }
    i = l;
  }
}
function Oo(e, n) {
  var o, t, r, a, i, l, s, u, c, d, f, v = 1, g = 10, m = e, w = m.d, k = m.constructor, y = k.rounding, b = k.precision;
  if (m.s < 0 || !w || !w[0] || !m.e && w[0] == 1 && w.length == 1)
    return new k(w && !w[0] ? -1 / 0 : m.s != 1 ? NaN : w ? 0 : m);
  if (n == null ? (Te = !1, c = b) : c = n, k.precision = c += g, o = Cn(w), t = o.charAt(0), Math.abs(a = m.e) < 15e14) {
    for (; t < 7 && t != 1 || t == 1 && o.charAt(1) > 3; )
      m = m.times(e), o = Cn(m.d), t = o.charAt(0), v++;
    a = m.e, t > 1 ? (m = new k("0." + o), a++) : m = new k(t + "." + o.slice(1));
  } else
    return u = _r(k, c + 2, b).times(a + ""), m = Oo(new k(t + "." + o.slice(1)), c - g).plus(u), k.precision = b, n == null ? $e(m, b, y, Te = !0) : m;
  for (d = m, s = i = m = Ze(m.minus(1), m.plus(1), c, 1), f = $e(m.times(m), c, 1), r = 3; ; ) {
    if (i = $e(i.times(f), c, 1), u = s.plus(Ze(i, new k(r), c, 1)), Cn(u.d).slice(0, c) === Cn(s.d).slice(0, c))
      if (s = s.times(2), a !== 0 && (s = s.plus(_r(k, c + 2, b).times(a + ""))), s = Ze(s, new k(v), c, 1), n == null)
        if (Kt(s.d, c - g, y, l))
          k.precision = c += g, u = i = m = Ze(d.minus(1), d.plus(1), c, 1), f = $e(m.times(m), c, 1), r = l = 1;
        else
          return $e(s, k.precision = b, y, Te = !0);
      else
        return k.precision = b, s;
    s = u, r += 2;
  }
}
function fm(e) {
  return String(e.s * e.s / 0);
}
function Xl(e, n) {
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
    e.d.push(+n), Te && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function jC(e, n) {
  var o, t, r, a, i, l, s, u, c;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), sm.test(n)) return Xl(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (RC.test(n))
    o = 16, n = n.toLowerCase();
  else if (VC.test(n))
    o = 2;
  else if (LC.test(n))
    o = 8;
  else
    throw Error(Ro + n);
  for (a = n.search(/p/i), a > 0 ? (s = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, t = e.constructor, i && (n = n.replace(".", ""), l = n.length, a = l - a, r = cm(t, new t(o), a, a * 2)), u = Br(n, o, xn), c = u.length - 1, a = c; u[a] === 0; --a) u.pop();
  return a < 0 ? new t(e.s * 0) : (e.e = oi(u, c), e.d = u, Te = !1, i && (e = Ze(e, r, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? vn(2, s) : zo.pow(2, s))), Te = !0, e);
}
function YC(e, n) {
  var o, t = n.d.length;
  if (t < 3)
    return n.isZero() ? n : gt(e, 2, n, n);
  o = 1.4 * Math.sqrt(t), o = o > 16 ? 16 : o | 0, n = n.times(1 / ti(5, o)), n = gt(e, 2, n, n);
  for (var r, a = new e(5), i = new e(16), l = new e(20); o--; )
    r = n.times(n), n = n.times(a.plus(r.times(i.times(r).minus(l))));
  return n;
}
function gt(e, n, o, t, r) {
  var a, i, l, s, u = e.precision, c = Math.ceil(u / Pe);
  for (Te = !1, s = o.times(o), l = new e(t); ; ) {
    if (i = Ze(l.times(s), new e(n++ * n++), u, 1), l = r ? t.plus(i) : t.minus(i), t = Ze(i.times(s), new e(n++ * n++), u, 1), i = l.plus(t), i.d[c] !== void 0) {
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
function pm(e, n) {
  var o, t = n.s < 0, r = Qn(e, e.precision, 1), a = r.times(0.5);
  if (n = n.abs(), n.lte(a))
    return fo = t ? 4 : 1, n;
  if (o = n.divToInt(r), o.isZero())
    fo = t ? 3 : 2;
  else {
    if (n = n.minus(o.times(r)), n.lte(a))
      return fo = Wc(o) ? t ? 2 : 3 : t ? 4 : 1, n;
    fo = Wc(o) ? t ? 1 : 4 : t ? 3 : 2;
  }
  return n.minus(r).abs();
}
function wu(e, n, o, t) {
  var r, a, i, l, s, u, c, d, f, v = e.constructor, g = o !== void 0;
  if (g ? (An(o, 1, jo), t === void 0 ? t = v.rounding : An(t, 0, 8)) : (o = v.precision, t = v.rounding), !e.isFinite())
    c = fm(e);
  else {
    for (c = to(e), i = c.indexOf("."), g ? (r = 2, n == 16 ? o = o * 4 - 3 : n == 8 && (o = o * 3 - 2)) : r = n, i >= 0 && (c = c.replace(".", ""), f = new v(1), f.e = c.length - i, f.d = Br(to(f), 10, r), f.e = f.d.length), d = Br(c, 10, r), a = s = d.length; d[--s] == 0; ) d.pop();
    if (!d[0])
      c = g ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new v(e), e.d = d, e.e = a, e = Ze(e, f, o, t, 0, r), d = e.d, a = e.e, u = rm), i = d[o], l = r / 2, u = u || d[o + 1] !== void 0, u = t < 4 ? (i !== void 0 || u) && (t === 0 || t === (e.s < 0 ? 3 : 2)) : i > l || i === l && (t === 4 || u || t === 6 && d[o - 1] & 1 || t === (e.s < 0 ? 8 : 7)), d.length = o, u)
        for (; ++d[--o] > r - 1; )
          d[o] = 0, o || (++a, d.unshift(1));
      for (s = d.length; !d[s - 1]; --s) ;
      for (i = 0, c = ""; i < s; i++) c += Yl.charAt(d[i]);
      if (g) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++) c += "0";
            for (d = Br(c, r, n), s = d.length; !d[s - 1]; --s) ;
            for (i = 1, c = "1."; i < s; i++) c += Yl.charAt(d[i]);
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
function Kc(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function WC(e) {
  return new this(e).abs();
}
function KC(e) {
  return new this(e).acos();
}
function qC(e) {
  return new this(e).acosh();
}
function XC(e, n) {
  return new this(e).plus(n);
}
function GC(e) {
  return new this(e).asin();
}
function ZC(e) {
  return new this(e).asinh();
}
function JC(e) {
  return new this(e).atan();
}
function QC(e) {
  return new this(e).atanh();
}
function xC(e, n) {
  e = new this(e), n = new this(n);
  var o, t = this.precision, r = this.rounding, a = t + 4;
  return !e.s || !n.s ? o = new this(NaN) : !e.d && !n.d ? (o = Qn(this, a, 1).times(n.s > 0 ? 0.25 : 0.75), o.s = e.s) : !n.d || e.isZero() ? (o = n.s < 0 ? Qn(this, t, r) : new this(0), o.s = e.s) : !e.d || n.isZero() ? (o = Qn(this, a, 1).times(0.5), o.s = e.s) : n.s < 0 ? (this.precision = a, this.rounding = 1, o = this.atan(Ze(e, n, a, 1)), n = Qn(this, a, 1), this.precision = t, this.rounding = r, o = e.s < 0 ? o.minus(n) : o.plus(n)) : o = this.atan(Ze(e, n, a, 1)), o;
}
function _C(e) {
  return new this(e).cbrt();
}
function eS(e) {
  return $e(e = new this(e), e.e + 1, 2);
}
function nS(e, n, o) {
  return new this(e).clamp(n, o);
}
function oS(e) {
  if (!e || typeof e != "object") throw Error(ni + "Object expected");
  var n, o, t, r = e.defaults === !0, a = [
    "precision",
    1,
    jo,
    "rounding",
    0,
    8,
    "toExpNeg",
    -ot,
    0,
    "toExpPos",
    0,
    ot,
    "maxE",
    0,
    ot,
    "minE",
    -ot,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < a.length; n += 3)
    if (o = a[n], r && (this[o] = Wl[o]), (t = e[o]) !== void 0)
      if (Sn(t) === t && t >= a[n + 1] && t <= a[n + 2]) this[o] = t;
      else throw Error(Ro + o + ": " + t);
  if (o = "crypto", r && (this[o] = Wl[o]), (t = e[o]) !== void 0)
    if (t === !0 || t === !1 || t === 0 || t === 1)
      if (t)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[o] = !0;
        else
          throw Error(im);
      else
        this[o] = !1;
    else
      throw Error(Ro + o + ": " + t);
  return this;
}
function tS(e) {
  return new this(e).cos();
}
function rS(e) {
  return new this(e).cosh();
}
function vm(e) {
  var n, o, t;
  function r(a) {
    var i, l, s, u = this;
    if (!(u instanceof r)) return new r(a);
    if (u.constructor = r, qc(a)) {
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
      return Xl(u, a.toString());
    } else if (s !== "string")
      throw Error(Ro + a);
    return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (l === 43 && (a = a.slice(1)), u.s = 1), sm.test(a) ? Xl(u, a) : jC(u, a);
  }
  if (r.prototype = Q, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.EUCLID = 9, r.config = r.set = oS, r.clone = vm, r.isDecimal = qc, r.abs = WC, r.acos = KC, r.acosh = qC, r.add = XC, r.asin = GC, r.asinh = ZC, r.atan = JC, r.atanh = QC, r.atan2 = xC, r.cbrt = _C, r.ceil = eS, r.clamp = nS, r.cos = tS, r.cosh = rS, r.div = aS, r.exp = iS, r.floor = lS, r.hypot = sS, r.ln = uS, r.log = cS, r.log10 = fS, r.log2 = dS, r.max = pS, r.min = vS, r.mod = mS, r.mul = hS, r.pow = gS, r.random = bS, r.round = yS, r.sign = wS, r.sin = kS, r.sinh = $S, r.sqrt = CS, r.sub = SS, r.sum = PS, r.tan = OS, r.tanh = zS, r.trunc = TS, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (t = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < t.length; ) e.hasOwnProperty(o = t[n++]) || (e[o] = this[o]);
  return r.config(e), r;
}
function aS(e, n) {
  return new this(e).div(n);
}
function iS(e) {
  return new this(e).exp();
}
function lS(e) {
  return $e(e = new this(e), e.e + 1, 3);
}
function sS() {
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
function qc(e) {
  return e instanceof zo || e && e.toStringTag === lm || !1;
}
function uS(e) {
  return new this(e).ln();
}
function cS(e, n) {
  return new this(e).log(n);
}
function dS(e) {
  return new this(e).log(2);
}
function fS(e) {
  return new this(e).log(10);
}
function pS() {
  return dm(this, arguments, "lt");
}
function vS() {
  return dm(this, arguments, "gt");
}
function mS(e, n) {
  return new this(e).mod(n);
}
function hS(e, n) {
  return new this(e).mul(n);
}
function gS(e, n) {
  return new this(e).pow(n);
}
function bS(e) {
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
      throw Error(im);
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
function yS(e) {
  return $e(e = new this(e), e.e + 1, this.rounding);
}
function wS(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function kS(e) {
  return new this(e).sin();
}
function $S(e) {
  return new this(e).sinh();
}
function CS(e) {
  return new this(e).sqrt();
}
function SS(e, n) {
  return new this(e).sub(n);
}
function PS() {
  var e = 0, n = arguments, o = new this(n[e]);
  for (Te = !1; o.s && ++e < n.length; ) o = o.plus(n[e]);
  return Te = !0, $e(o, this.precision, this.rounding);
}
function OS(e) {
  return new this(e).tan();
}
function zS(e) {
  return new this(e).tanh();
}
function TS(e) {
  return $e(e = new this(e), e.e + 1, 1);
}
Q[Symbol.for("nodejs.util.inspect.custom")] = Q.toString;
Q[Symbol.toStringTag] = "Decimal";
var zo = Q.constructor = vm(Wl);
Qr = new zo(Qr);
xr = new zo(xr);
const mm = {
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
}, Xc = 100, Gc = 600, { name: ES, n: BS, classes: IS } = ne("counter"), DS = ["inputmode", "readonly", "disabled"];
function AS(e, n) {
  const o = _("var-icon"), t = _("var-button"), r = _("var-form-details");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
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
          Ve(N("input", {
            class: p(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
            style: X({
              width: e.toSizeUnit(e.inputWidth),
              fontSize: e.toSizeUnit(e.inputTextSize)
            }),
            inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
            readonly: e.readonly || e.formReadonly,
            disabled: e.disabled || e.formDisabled || e.disableInput,
            "onUpdate:modelValue": n[0] || (n[0] = (a) => e.inputValue = a),
            onChange: n[1] || (n[1] = (...a) => e.handleChange && e.handleChange(...a))
          }, null, 46, DS), [
            [Xg, e.inputValue]
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
const hm = ee({
  name: ES,
  components: {
    VarButton: Bn,
    VarIcon: Je,
    VarFormDetails: En
  },
  directives: { Ripple: tn },
  inheritAttrs: !1,
  props: mm,
  setup(e) {
    const n = $(""), { bindForm: o, form: t } = Hn(), {
      errorMessage: r,
      validateWithTrigger: a,
      validate: i,
      // expose
      resetValidation: l
    } = Un(), { readonly: s, disabled: u } = t ?? {}, c = B(() => {
      const { max: L, modelValue: Z } = e;
      return L != null && F(Z) >= F(L);
    }), d = B(() => {
      const { min: L, modelValue: Z } = e;
      return L != null && F(Z) <= F(L);
    });
    let f, v, g, m;
    C(o, {
      reset: b,
      validate: k,
      resetValidation: l
    }), de(
      () => e.modelValue,
      (L) => {
        E(P(String(L))), C(e.onChange, F(L));
      }
    ), E(P(String(e.modelValue)));
    function k() {
      return i(e.rules, e.modelValue);
    }
    function y(L) {
      je(() => {
        const { validateTrigger: Z, rules: x, modelValue: ve } = e;
        a(Z, L, x, ve);
      });
    }
    function b() {
      const { min: L } = e;
      C(e["onUpdate:modelValue"], L != null ? F(L) : 0), l();
    }
    function P(L) {
      const { decimalLength: Z, max: x, min: ve } = e;
      let ye = F(L);
      return x != null && ye > F(x) && (ye = F(x)), ve != null && ye < F(ve) && (ye = F(ve)), L = String(ye), Z != null && (L = ye.toFixed(F(Z))), L;
    }
    function O(L) {
      const { lazyChange: Z, onBeforeChange: x } = e, { value: ve } = L.target, ye = P(ve);
      Z ? C(x, F(ye), R) : E(ye), y("onInputChange");
    }
    function z() {
      const {
        disabled: L,
        readonly: Z,
        disableDecrement: x,
        decrementButton: ve,
        lazyChange: ye,
        step: Ee,
        modelValue: H,
        onDecrement: J,
        onBeforeChange: te
      } = e;
      if (u != null && u.value || s != null && s.value || L || Z || x || !ve || d.value)
        return;
      const me = new zo(F(H)).minus(new zo(F(Ee))).toString(), A = P(me), Y = F(A);
      C(J, Y), ye ? C(te, Y, R) : (E(A), y("onDecrement"));
    }
    function D() {
      const {
        disabled: L,
        readonly: Z,
        disableIncrement: x,
        incrementButton: ve,
        lazyChange: ye,
        step: Ee,
        modelValue: H,
        onIncrement: J,
        onBeforeChange: te
      } = e;
      if (u != null && u.value || s != null && s.value || L || Z || x || !ve || c.value)
        return;
      const me = new zo(F(H)).plus(new zo(F(Ee))).toString(), A = P(me), Y = F(A);
      C(J, Y), ye ? C(te, Y, R) : (E(A), y("onIncrement"));
    }
    function T() {
      const { press: L, lazyChange: Z } = e;
      !L || Z || (m = window.setTimeout(() => {
        K();
      }, Gc));
    }
    function I() {
      const { press: L, lazyChange: Z } = e;
      !L || Z || (g = window.setTimeout(() => {
        W();
      }, Gc));
    }
    function U() {
      v && clearTimeout(v), m && clearTimeout(m);
    }
    function j() {
      f && clearTimeout(f), g && clearTimeout(g);
    }
    function W() {
      f = window.setTimeout(() => {
        D(), W();
      }, Xc);
    }
    function K() {
      v = window.setTimeout(() => {
        z(), K();
      }, Xc);
    }
    function E(L) {
      n.value = L;
      const Z = F(L);
      C(e["onUpdate:modelValue"], Z);
    }
    function R(L) {
      E(P(String(L))), y("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: r,
      formDisabled: u,
      formReadonly: s,
      isMax: c,
      isMin: d,
      n: BS,
      classes: IS,
      formatElevation: dn,
      validate: k,
      reset: b,
      resetValidation: l,
      handleChange: O,
      decrement: z,
      increment: D,
      pressDecrement: T,
      pressIncrement: I,
      releaseDecrement: U,
      releaseIncrement: j,
      toSizeUnit: Oe,
      toNumber: F
    };
  }
});
hm.render = AS;
var ri = hm;
re(ri);
ie(ri, mm);
const PB = ri;
var Gl = ri, gm = 60, bm = gm * 60, ym = bm * 24, NS = ym * 7, bt = 1e3, tl = gm * bt, Zc = bm * bt, MS = ym * bt, VS = NS * bt, ku = "millisecond", tt = "second", rt = "minute", at = "hour", ko = "day", Ir = "week", Jn = "month", wm = "quarter", $o = "year", it = "date", RS = "YYYY-MM-DDTHH:mm:ssZ", Jc = "Invalid Date", LS = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, FS = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const US = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var Zl = function(n, o, t) {
  var r = String(n);
  return !r || r.length >= o ? n : "" + Array(o + 1 - r.length).join(t) + n;
}, HS = function(n) {
  var o = -n.utcOffset(), t = Math.abs(o), r = Math.floor(t / 60), a = t % 60;
  return (o <= 0 ? "+" : "-") + Zl(r, 2, "0") + ":" + Zl(a, 2, "0");
}, jS = function e(n, o) {
  if (n.date() < o.date()) return -e(o, n);
  var t = (o.year() - n.year()) * 12 + (o.month() - n.month()), r = n.clone().add(t, Jn), a = o - r < 0, i = n.clone().add(t + (a ? -1 : 1), Jn);
  return +(-(t + (o - r) / (a ? r - i : i - r)) || 0);
}, YS = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, WS = function(n) {
  var o = {
    M: Jn,
    y: $o,
    w: Ir,
    d: ko,
    D: it,
    h: at,
    m: rt,
    s: tt,
    ms: ku,
    Q: wm
  };
  return o[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, KS = function(n) {
  return n === void 0;
};
const qS = {
  s: Zl,
  z: HS,
  m: jS,
  a: YS,
  p: WS,
  u: KS
};
var At = "en", qo = {};
qo[At] = US;
var $u = function(n) {
  return n instanceof ai;
}, ea = function e(n, o, t) {
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
}, se = function(n, o) {
  if ($u(n))
    return n.clone();
  var t = typeof o == "object" ? o : {};
  return t.date = n, t.args = arguments, new ai(t);
}, XS = function(n, o) {
  return se(n, {
    locale: o.$L,
    utc: o.$u,
    x: o.$x,
    $offset: o.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Ge = qS;
Ge.l = ea;
Ge.i = $u;
Ge.w = XS;
var GS = function(n) {
  var o = n.date, t = n.utc;
  if (o === null) return /* @__PURE__ */ new Date(NaN);
  if (Ge.u(o)) return /* @__PURE__ */ new Date();
  if (o instanceof Date) return new Date(o);
  if (typeof o == "string" && !/Z$/i.test(o)) {
    var r = o.match(LS);
    if (r) {
      var a = r[2] - 1 || 0, i = (r[7] || "0").substring(0, 3);
      return t ? new Date(Date.UTC(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)) : new Date(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i);
    }
  }
  return new Date(o);
}, ai = /* @__PURE__ */ function() {
  function e(o) {
    this.$L = ea(o.locale, null, !0), this.parse(o);
  }
  var n = e.prototype;
  return n.parse = function(t) {
    this.$d = GS(t), this.$x = t.x || {}, this.init();
  }, n.init = function() {
    var t = this.$d;
    this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
  }, n.$utils = function() {
    return Ge;
  }, n.isValid = function() {
    return this.$d.toString() !== Jc;
  }, n.isSame = function(t, r) {
    var a = se(t);
    return this.startOf(r) <= a && a <= this.endOf(r);
  }, n.isAfter = function(t, r) {
    return se(t) < this.startOf(r);
  }, n.isBefore = function(t, r) {
    return this.endOf(r) < se(t);
  }, n.$g = function(t, r, a) {
    return Ge.u(t) ? this[r] : this.set(a, t);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(t, r) {
    var a = this, i = Ge.u(r) ? !0 : r, l = Ge.p(t), s = function(k, y) {
      var b = Ge.w(a.$u ? Date.UTC(a.$y, y, k) : new Date(a.$y, y, k), a);
      return i ? b : b.endOf(ko);
    }, u = function(k, y) {
      var b = [0, 0, 0, 0], P = [23, 59, 59, 999];
      return Ge.w(a.toDate()[k].apply(
        // eslint-disable-line prefer-spread
        a.toDate("s"),
        (i ? b : P).slice(y)
      ), a);
    }, c = this.$W, d = this.$M, f = this.$D, v = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case $o:
        return i ? s(1, 0) : s(31, 11);
      case Jn:
        return i ? s(1, d) : s(0, d + 1);
      case Ir: {
        var g = this.$locale().weekStart || 0, m = (c < g ? c + 7 : c) - g;
        return s(i ? f - m : f + (6 - m), d);
      }
      case ko:
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
    var a, i = Ge.p(t), l = "set" + (this.$u ? "UTC" : ""), s = (a = {}, a[ko] = l + "Date", a[it] = l + "Date", a[Jn] = l + "Month", a[$o] = l + "FullYear", a[at] = l + "Hours", a[rt] = l + "Minutes", a[tt] = l + "Seconds", a[ku] = l + "Milliseconds", a)[i], u = i === ko ? this.$D + (r - this.$W) : r;
    if (i === Jn || i === $o) {
      var c = this.clone().set(it, 1);
      c.$d[s](u), c.init(), this.$d = c.set(it, Math.min(this.$D, c.daysInMonth())).$d;
    } else s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(t, r) {
    return this.clone().$set(t, r);
  }, n.get = function(t) {
    return this[Ge.p(t)]();
  }, n.add = function(t, r) {
    var a = this, i;
    t = Number(t);
    var l = Ge.p(r), s = function(f) {
      var v = se(a);
      return Ge.w(v.date(v.date() + Math.round(f * t)), a);
    };
    if (l === Jn)
      return this.set(Jn, this.$M + t);
    if (l === $o)
      return this.set($o, this.$y + t);
    if (l === ko)
      return s(1);
    if (l === Ir)
      return s(7);
    var u = (i = {}, i[rt] = tl, i[at] = Zc, i[tt] = bt, i)[l] || 1, c = this.$d.getTime() + t * u;
    return Ge.w(c, this);
  }, n.subtract = function(t, r) {
    return this.add(t * -1, r);
  }, n.format = function(t) {
    var r = this, a = this.$locale();
    if (!this.isValid()) return a.invalidDate || Jc;
    var i = t || RS, l = Ge.z(this), s = this.$H, u = this.$m, c = this.$M, d = a.weekdays, f = a.months, v = a.meridiem, g = function(b, P, O, z) {
      return b && (b[P] || b(r, i)) || O[P].slice(0, z);
    }, m = function(b) {
      return Ge.s(s % 12 || 12, b, "0");
    }, w = v || function(y, b, P) {
      var O = y < 12 ? "AM" : "PM";
      return P ? O.toLowerCase() : O;
    }, k = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: c + 1,
      MM: Ge.s(c + 1, 2, "0"),
      MMM: g(a.monthsShort, c, f, 3),
      MMMM: g(f, c),
      D: this.$D,
      DD: Ge.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: g(a.weekdaysMin, this.$W, d, 2),
      ddd: g(a.weekdaysShort, this.$W, d, 3),
      dddd: d[this.$W],
      H: String(s),
      HH: Ge.s(s, 2, "0"),
      h: m(1),
      hh: m(2),
      a: w(s, u, !0),
      A: w(s, u, !1),
      m: String(u),
      mm: Ge.s(u, 2, "0"),
      s: String(this.$s),
      ss: Ge.s(this.$s, 2, "0"),
      SSS: Ge.s(this.$ms, 3, "0"),
      Z: l
      // 'ZZ' logic below
    };
    return i.replace(FS, function(y, b) {
      return b || k[y] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(t, r, a) {
    var i, l = Ge.p(r), s = se(t), u = (s.utcOffset() - this.utcOffset()) * tl, c = this - s, d = Ge.m(this, s);
    return d = (i = {}, i[$o] = d / 12, i[Jn] = d, i[wm] = d / 3, i[Ir] = (c - u) / VS, i[ko] = (c - u) / MS, i[at] = c / Zc, i[rt] = c / tl, i[tt] = c / bt, i)[l] || c, a ? d : Ge.a(d);
  }, n.daysInMonth = function() {
    return this.endOf(Jn).$D;
  }, n.$locale = function() {
    return qo[this.$L];
  }, n.locale = function(t, r) {
    if (!t) return this.$L;
    var a = this.clone(), i = ea(t, r, !0);
    return i && (a.$L = i), a;
  }, n.clone = function() {
    return Ge.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), km = ai.prototype;
se.prototype = km;
[["$ms", ku], ["$s", tt], ["$m", rt], ["$H", at], ["$W", ko], ["$M", Jn], ["$y", $o], ["$D", it]].forEach(function(e) {
  km[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
se.extend = function(e, n) {
  return e.$i || (e(n, ai, se), e.$i = !0), se;
};
se.locale = ea;
se.isDayjs = $u;
se.unix = function(e) {
  return se(e * 1e3);
};
se.en = qo[At];
se.Ls = qo;
se.p = {};
const $m = function(e, n) {
  n.prototype.isSameOrBefore = function(o, t) {
    return this.isSame(o, t) || this.isBefore(o, t);
  };
}, Cm = function(e, n) {
  n.prototype.isSameOrAfter = function(o, t) {
    return this.isSame(o, t) || this.isAfter(o, t);
  };
}, Dr = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"], Bt = ["0", "1", "2", "3", "4", "5", "6"], Sm = {
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
}, { n: ZS } = ne("date-picker-header");
function JS(e, n) {
  const o = _("var-icon"), t = _("var-button");
  return h(), S(
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
      N(
        "div",
        {
          class: p(e.n("value")),
          onClick: n[1] || (n[1] = (r) => e.$emit("check-panel"))
        },
        [
          G(xe, {
            name: `var-date-picker${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: ce(() => [
              (h(), S(
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
const Pm = ee({
  name: "PanelHeader",
  components: {
    VarButton: Bn,
    VarIcon: Je
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
    const o = $(!1), t = $(0), { t: r } = so(), a = B(() => {
      var l;
      const { date: s, type: u } = e, { previewMonth: c, previewYear: d } = s;
      if (u === "year") return d;
      if (u === "month") return F(d) + t.value;
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
      n: ZS,
      reverse: o,
      showDate: a,
      checkDate: i
    };
  }
});
Pm.render = JS;
var Cu = Pm, QS = Object.defineProperty, Qc = Object.getOwnPropertySymbols, xS = Object.prototype.hasOwnProperty, _S = Object.prototype.propertyIsEnumerable, xc = (e, n, o) => n in e ? QS(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, e6 = (e, n) => {
  for (var o in n || (n = {}))
    xS.call(n, o) && xc(e, o, n[o]);
  if (Qc)
    for (var o of Qc(n))
      _S.call(n, o) && xc(e, o, n[o]);
  return e;
};
se.extend($m);
se.extend(Cm);
const { n: br, classes: n6 } = ne("month-picker"), { n: yr } = ne("date-picker");
function o6(e, n) {
  const o = _("panel-header"), t = _("var-button");
  return h(), S(
    "div",
    {
      class: p(e.n())
    },
    [
      N(
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
          G(xe, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: ce(() => [
              (h(), S("ul", { key: e.panelKey }, [
                (h(!0), S(
                  Me,
                  null,
                  Xe(e.MONTH_LIST, (r) => (h(), S("li", { key: r }, [
                    G(t, He({
                      type: "primary",
                      "var-month-picker-cover": "",
                      ripple: !1,
                      elevation: e.componentProps.buttonElevation,
                      ref_for: !0
                    }, e6({}, e.buttonProps(r)), {
                      onClick: (a) => e.chooseMonth(r, a)
                    }), {
                      default: ce(() => [
                        Ie(
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
const Om = ee({
  name: "MonthPickerPanel",
  components: {
    VarButton: Bn,
    PanelHeader: Cu
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
    const [o, t] = e.current.split("-"), r = $(!1), a = $(0), i = $(null), l = _e({
      left: !1,
      right: !1
    }), { t: s } = so(), u = B(() => e.choose.chooseYear === e.preview.previewYear), c = B(() => e.preview.previewYear === o), d = (y) => {
      var b, P;
      return (P = (b = (s || an)("datePickerMonthDict")) == null ? void 0 : b[y].abbr) != null ? P : "";
    }, f = (y) => {
      const {
        preview: { previewYear: b },
        componentProps: { min: P, max: O }
      } = e;
      let z = !0, D = !0;
      const T = `${b}-${y}`;
      return O && (z = se(T).isSameOrBefore(se(O), "month")), P && (D = se(T).isSameOrAfter(se(P), "month")), z && D;
    }, v = (y) => {
      const {
        choose: { chooseMonths: b, chooseDays: P, chooseRangeMonth: O },
        componentProps: { type: z, range: D }
      } = e;
      if (D) {
        if (!O.length) return !1;
        const T = se(y).isSameOrBefore(se(O[1]), "month"), I = se(y).isSameOrAfter(se(O[0]), "month");
        return T && I;
      }
      return z === "month" ? b.includes(y) : P.some((T) => T.includes(y));
    }, g = (y) => {
      const {
        choose: { chooseMonth: b },
        preview: { previewYear: P },
        componentProps: { allowedDates: O, color: z, multiple: D, range: T }
      } = e, I = `${P}-${y}`, U = () => T || D ? v(I) : b === y && u.value, W = f(y) ? O ? !O(I) : !1 : !0, K = () => W ? !0 : T || D ? !v(I) : !u.value || b !== y, E = () => c.value && t === y && e.componentProps.showCurrent ? (T || D || u.value) && W ? !0 : T || D ? !v(I) : u.value ? b !== t : !0 : !1, R = () => W ? "" : E() ? z ?? "" : U() ? "" : `${yr()}-color-cover`, L = R().startsWith(yr());
      return {
        outline: E(),
        text: K(),
        color: K() ? "" : z,
        textColor: L ? "" : R(),
        [`${yr()}-color-cover`]: L,
        class: n6(br("button"), [W, br("button--disabled")]),
        disabled: W
      };
    }, m = (y, b) => {
      b.currentTarget.classList.contains(br("button--disabled")) || n("choose-month", y);
    }, w = (y) => {
      r.value = y === "prev", a.value += y === "prev" ? -1 : 1, n("check-preview", "year", y);
    }, k = (y) => {
      i.value.checkDate(y);
    };
    return de(
      () => [e.preview.previewYear, e.componentProps.max, e.componentProps.min],
      ([y, b, P]) => {
        b && (l.right = !se(`${F(y) + 1}`).isSameOrBefore(se(b), "year")), P && (l.left = !se(`${F(y) - 1}`).isSameOrAfter(se(P), "year"));
      },
      { immediate: !0 }
    ), {
      n: br,
      nDate: yr,
      t: an,
      MONTH_LIST: Dr,
      headerEl: i,
      reverse: r,
      panelKey: a,
      panelBtnDisabled: l,
      forwardRef: k,
      buttonProps: g,
      getMonthAbbr: d,
      chooseMonth: m,
      checkDate: w
    };
  }
});
Om.render = o6;
var t6 = Om;
const Nt = {
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
var _c = (e, n, o) => new Promise((t, r) => {
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
const { name: r6, n: a6, classes: i6 } = ne("sticky");
function l6(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
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
          class: p(e.n("wrapper")),
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
          M(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  );
}
const zm = ee({
  name: r6,
  props: Nt,
  setup(e) {
    const n = $(null), o = $(null), t = $(!1), r = $("0px"), a = $("0px"), i = $("auto"), l = $("auto"), s = $("auto"), u = $("auto"), c = B(() => !e.disabled && e.cssMode), d = B(() => !e.disabled && !e.cssMode && t.value), f = B(() => en(e.offsetTop));
    let v;
    de(() => e.disabled, y), yn(() => _c(this, null, function* () {
      yield bn(), m(), w();
    })), rr(k), lo(y), We(() => window, "scroll", w);
    function g() {
      const { cssMode: b, disabled: P } = e;
      if (P)
        return;
      let O = 0;
      if (v && v !== window) {
        const { top: j } = nn(v);
        O = j;
      }
      const z = o.value, D = n.value, { top: T, left: I } = nn(D), U = T - O;
      return U <= f.value ? (b || (i.value = `${D.offsetWidth}px`, l.value = `${D.offsetHeight}px`, r.value = `${O + f.value}px`, a.value = `${I}px`, s.value = `${z.offsetWidth}px`, u.value = `${z.offsetHeight}px`, t.value = !0), {
        offsetTop: f.value,
        isFixed: !0
      }) : (t.value = !1, {
        offsetTop: U,
        isFixed: !1
      });
    }
    function m() {
      v = Mo(n.value), v !== window && v.addEventListener("scroll", w);
    }
    function w() {
      const b = g();
      b && C(e.onScroll, b.offsetTop, b.isFixed);
    }
    function k() {
      !v || v === window || v.removeEventListener("scroll", w);
    }
    function y() {
      return _c(this, null, function* () {
        t.value = !1, yield Eo(), g();
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
      n: a6,
      classes: i6,
      resize: y,
      toNumber: F
    };
  }
});
zm.render = l6;
var ii = zm;
re(ii);
ie(ii, Nt);
const OB = ii;
var yt = ii, s6 = Object.defineProperty, ed = Object.getOwnPropertySymbols, u6 = Object.prototype.hasOwnProperty, c6 = Object.prototype.propertyIsEnumerable, nd = (e, n, o) => n in e ? s6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, d6 = (e, n) => {
  for (var o in n || (n = {}))
    u6.call(n, o) && nd(e, o, n[o]);
  if (ed)
    for (var o of ed(n))
      c6.call(n, o) && nd(e, o, n[o]);
  return e;
};
const { n: wr, classes: od } = ne("year-picker"), { n: kr } = ne("date-picker");
function f6(e, n) {
  const o = _("panel-header"), t = _("var-sticky"), r = _("var-button");
  return h(), S("div", null, [
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
    G(xe, {
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
              Me,
              null,
              Xe(e.yearList, (a) => (h(), S("li", { key: a }, [
                G(r, He({
                  type: "primary",
                  "var-year-picker-cover": "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation,
                  ref_for: !0
                }, d6({}, e.buttonProps(`${a}`)), {
                  onClick: (i) => e.chooseYear(a, i)
                }), {
                  default: ce(() => [
                    Ie(
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
const Tm = ee({
  name: "YearPickerPanel",
  components: {
    VarButton: Bn,
    VarSticky: yt,
    PanelHeader: Cu
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
    const [o] = e.current.split("-"), t = $(), r = $(null), a = $(!1), i = $(0), l = $(0), s = _e({
      left: !1,
      right: !1
    }), u = B(() => {
      if (!e.preview)
        return [];
      const k = Math.floor(F(e.preview) / 100 + l.value) * 100;
      return Array.from(Array(100), (y, b) => Math.max(0, k) + b);
    }), c = (k) => {
      const {
        choose: { chooseMonths: y, chooseDays: b, chooseYears: P, chooseRangeYear: O },
        componentProps: { type: z, range: D }
      } = e;
      if (D) {
        if (!O.length) return !1;
        const T = se(k).isSameOrBefore(se(O[1]), "year"), I = se(k).isSameOrAfter(se(O[0]), "year");
        return T && I;
      }
      return z === "year" ? P.includes(k) : z === "month" ? y.some((T) => T.includes(k)) : b.some((T) => T.includes(k));
    }, d = (k) => {
      const {
        componentProps: { min: y, max: b }
      } = e, P = b ? se(k).isSameOrBefore(se(b), "year") : !0, O = y ? se(k).isSameOrAfter(se(y), "year") : !0;
      return P && O;
    }, f = (k) => {
      const {
        choose: { chooseYear: y },
        componentProps: { allowedDates: b, color: P, multiple: O, range: z }
      } = e, D = () => z || O ? c(k) : y === k, I = d(k) ? b ? !b(k) : !1 : !0, U = () => I ? !0 : z || O ? !c(k) : y !== k, j = () => o === k && e.componentProps.showCurrent ? (z || O) && I ? !0 : z || O ? !c(k) : y !== o : !1, W = () => I ? "" : j() ? P ?? "" : D() ? "" : `${kr()}-color-cover`, K = W().startsWith(kr());
      return {
        outline: j(),
        text: U(),
        color: U() ? "" : P,
        textColor: K ? "" : W(),
        [`${kr()}-color-cover`]: K,
        class: od(wr("button"), [I, wr("button--disabled")]),
        disabled: I
      };
    }, v = (k, y) => {
      y.currentTarget.classList.contains(wr("button--disabled")) || n("choose-year", k);
    }, g = () => {
      var k;
      const y = (k = t.value.querySelector(".var-button--primary")) != null ? k : t.value.querySelector(".var-button--outline");
      y == null || y.scrollIntoView({
        block: "center"
      });
    }, m = (k) => {
      const y = k === "prev";
      a.value = y, i.value += y ? -1 : 1, l.value += y ? -1 : 1;
    }, w = (k) => {
      r.value.checkDate(k);
    };
    return yn(g), de(
      () => e.preview,
      () => {
        l.value = 0;
      }
    ), de(
      () => [u.value, e.componentProps.max, e.componentProps.min],
      (k) => {
        const [y, b, P] = k;
        b && (s.right = !se(`${F(y[y.length - 1])}`).isSameOrBefore(se(b), "year")), P && (s.left = !se(`${F(y[0])}`).isSameOrAfter(se(P), "year")), F(y[0] <= 0) && (s.left = !1);
      },
      {
        immediate: !0
      }
    ), {
      n: wr,
      classes: od,
      buttonProps: f,
      panel: t,
      headerEl: r,
      yearList: u,
      reverse: a,
      panelKey: i,
      panelBtnDisabled: s,
      nDate: kr,
      checkDate: m,
      chooseYear: v,
      forwardRef: w,
      toNumber: F
    };
  }
});
Tm.render = f6;
var p6 = Tm, v6 = Object.defineProperty, td = Object.getOwnPropertySymbols, m6 = Object.prototype.hasOwnProperty, h6 = Object.prototype.propertyIsEnumerable, rd = (e, n, o) => n in e ? v6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, g6 = (e, n) => {
  for (var o in n || (n = {}))
    m6.call(n, o) && rd(e, o, n[o]);
  if (td)
    for (var o of td(n))
      h6.call(n, o) && rd(e, o, n[o]);
  return e;
};
se.extend($m);
se.extend(Cm);
const { n: _o, classes: b6 } = ne("day-picker"), { n: $r } = ne("date-picker");
function y6(e, n) {
  const o = _("panel-header"), t = _("var-button");
  return h(), S(
    "div",
    {
      class: p(e.n())
    },
    [
      N(
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
          G(xe, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: ce(() => [
              (h(), S("div", { key: e.panelKey }, [
                N(
                  "ul",
                  {
                    class: p(e.n("head"))
                  },
                  [
                    (h(!0), S(
                      Me,
                      null,
                      Xe(e.sortWeekList, (r) => (h(), S(
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
                N(
                  "ul",
                  {
                    class: p(e.n("body"))
                  },
                  [
                    (h(!0), S(
                      Me,
                      null,
                      Xe(e.days, (r, a) => (h(), S("li", { key: a }, [
                        G(t, He({
                          type: "primary",
                          "var-day-picker-cover": "",
                          round: "",
                          ripple: !1,
                          elevation: e.componentProps.buttonElevation,
                          ref_for: !0
                        }, g6({}, e.buttonProps(r)), {
                          onClick: (i) => e.chooseDay(r, i)
                        }), {
                          default: ce(() => [
                            Ie(
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
const Em = ee({
  name: "DayPickerPanel",
  components: {
    VarButton: Bn,
    PanelHeader: Cu
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
    const [o, t, r] = e.current.split("-"), a = $([]), i = $(!1), l = $(0), s = $(null), u = _e({
      left: !1,
      right: !1
    }), { t: c } = so(), d = B(
      () => e.preview.previewYear === o && e.preview.previewMonth === t
    ), f = B(
      () => e.choose.chooseYear === e.preview.previewYear && e.choose.chooseMonth === e.preview.previewMonth
    ), v = B(() => {
      const T = Bt.findIndex((I) => I === e.componentProps.firstDayOfWeek);
      return T === -1 || T === 0 ? Bt : [...Bt.slice(T), ...Bt.slice(0, T)];
    }), g = (T) => {
      var I, U;
      return (U = (I = (c || an)("datePickerWeekDict")) == null ? void 0 : I[T].abbr) != null ? U : "";
    }, m = (T) => T > 0 ? T : "", w = () => {
      const {
        preview: { previewMonth: T, previewYear: I }
      } = e, U = se(`${I}-${T}`).daysInMonth(), j = se(`${I}-${T}-01`).day(), W = v.value.findIndex((K) => K === `${j}`);
      a.value = [...Array(W).fill(-1), ...Array.from(Array(U + 1).keys())].filter((K) => K);
    }, k = () => {
      const {
        preview: { previewYear: T, previewMonth: I },
        componentProps: { max: U, min: j }
      } = e;
      if (U) {
        const W = `${T}-${F(I) + 1}`;
        u.right = !se(W).isSameOrBefore(se(U), "month");
      }
      if (j) {
        const W = `${T}-${F(I) - 1}`;
        u.left = !se(W).isSameOrAfter(se(j), "month");
      }
    }, y = (T) => {
      const {
        preview: { previewYear: I, previewMonth: U },
        componentProps: { min: j, max: W }
      } = e;
      let K = !0, E = !0;
      const R = `${I}-${U}-${T}`;
      return W && (K = se(R).isSameOrBefore(se(W), "day")), j && (E = se(R).isSameOrAfter(se(j), "day")), K && E;
    }, b = (T) => {
      const {
        choose: { chooseDays: I, chooseRangeDay: U },
        componentProps: { range: j }
      } = e;
      if (j) {
        if (!U.length) return !1;
        const W = se(T).isSameOrBefore(se(U[1]), "day"), K = se(T).isSameOrAfter(se(U[0]), "day");
        return W && K;
      }
      return I.includes(T);
    }, P = (T) => {
      if (T < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: _o("button"),
          disabled: !0
        };
      const {
        choose: { chooseDay: I },
        preview: { previewYear: U, previewMonth: j },
        componentProps: { allowedDates: W, color: K, multiple: E, range: R }
      } = e, L = `${U}-${j}-${T}`, Z = () => R || E ? b(L) : F(I) === T && f.value, ve = y(T) ? W ? !W(L) : !1 : !0, ye = () => ve ? !0 : R || E ? !b(L) : !f.value || F(I) !== T, Ee = () => d.value && F(r) === T && e.componentProps.showCurrent ? (R || E || f.value) && ve ? !0 : R || E ? !b(L) : f.value ? I !== r : !0 : !1, H = () => ve ? "" : Ee() ? K ?? "" : Z() ? "" : `${$r()}-color-cover`, J = H().startsWith($r());
      return {
        text: ye(),
        outline: Ee(),
        textColor: J ? "" : H(),
        [`${$r()}-color-cover`]: J,
        class: b6(_o("button"), _o("button--usable"), [ve, _o("button--disabled")]),
        disabled: ve
      };
    }, O = (T) => {
      i.value = T === "prev", l.value += T === "prev" ? -1 : 1, n("check-preview", "month", T);
    }, z = (T, I) => {
      I.currentTarget.classList.contains(_o("button--disabled")) || n("choose-day", T);
    }, D = (T) => {
      s.value.checkDate(T);
    };
    return yn(() => {
      w(), k();
    }), de(
      () => e.preview,
      () => {
        w(), k();
      }
    ), de(() => [e.componentProps.max, e.componentProps.min], k), {
      n: _o,
      nDate: $r,
      days: a,
      reverse: i,
      headerEl: s,
      panelKey: l,
      sortWeekList: v,
      panelBtnDisabled: u,
      forwardRef: D,
      filterDay: m,
      getDayAbbr: g,
      checkDate: O,
      chooseDay: z,
      buttonProps: P
    };
  }
});
Em.render = y6;
var w6 = Em, k6 = (e, n, o) => new Promise((t, r) => {
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
const { name: $6, n: C6, classes: S6 } = ne("date-picker");
function P6(e, n) {
  var o;
  const t = _("year-picker-panel"), r = _("month-picker-panel"), a = _("day-picker-panel");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [
      N(
        "div",
        {
          class: p(e.n("title")),
          style: X({ background: e.titleColor || e.color })
        },
        [
          N(
            "div",
            {
              class: p(e.n("title-select"))
            },
            [
              N(
                "div",
                {
                  class: p(e.n("title-hint"))
                },
                le((o = e.hint) != null ? o : (e.pt ? e.pt : e.t)("datePickerHint")),
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
                  M(e.$slots, "year", { year: e.chooseYear }, () => [
                    Ie(
                      le(e.chooseYear),
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
              G(xe, {
                name: e.multiple ? "" : `${e.n()}${e.reverse ? "-reverse" : ""}-translatey`
              }, {
                default: ce(() => [
                  e.type === "year" ? (h(), S("div", {
                    key: `${e.chooseYear}`
                  }, [
                    e.range ? M(e.$slots, "range", {
                      key: 0,
                      choose: e.getChoose.chooseRangeYear
                    }, () => [
                      Ie(
                        le(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? M(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseYears
                    }, () => [
                      Ie(
                        le(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ]) : M(e.$slots, "year", {
                      key: 2,
                      year: e.chooseYear
                    }, () => [
                      Ie(
                        le(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : e.type === "month" ? (h(), S("div", {
                    key: `${e.chooseYear}${e.chooseMonth}`
                  }, [
                    e.range ? M(e.$slots, "range", {
                      key: 0,
                      choose: e.getChoose.chooseRangeMonth
                    }, () => [
                      Ie(
                        le(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? M(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseMonths
                    }, () => [
                      Ie(
                        le(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ]) : M(e.$slots, "month", {
                      key: 2,
                      month: e.chooseMonth,
                      year: e.chooseYear
                    }, () => [
                      Ie(
                        le(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : (h(), S("div", {
                    key: `${e.chooseYear}${e.chooseMonth}${e.chooseDay}`
                  }, [
                    e.range ? M(e.$slots, "range", {
                      key: 0,
                      choose: e.formatRange
                    }, () => [
                      Ie(
                        le(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? M(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseDays
                    }, () => [
                      Ie(
                        le(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ]) : M(e.$slots, "date", To(He({ key: 2 }, e.slotProps)), () => [
                      Ie(
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
      N(
        "div",
        {
          class: p(e.n("body")),
          onTouchstart: n[2] || (n[2] = (...i) => e.handleTouchstart && e.handleTouchstart(...i)),
          onTouchmove: n[3] || (n[3] = (...i) => e.handleTouchmove && e.handleTouchmove(...i)),
          onTouchend: n[4] || (n[4] = (...i) => e.handleTouchend && e.handleTouchend(...i))
        },
        [
          G(xe, {
            name: `${e.n()}-panel-fade`
          }, {
            default: ce(() => [
              e.getPanelType === "year" ? (h(), Ce(t, {
                key: 0,
                ref: "yearPanelEl",
                choose: e.getChoose,
                current: e.currentDate,
                "component-props": e.componentProps,
                preview: e.previewYear,
                onChooseYear: e.getChooseYear
              }, null, 8, ["choose", "current", "component-props", "preview", "onChooseYear"])) : e.getPanelType === "month" ? (h(), Ce(r, {
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
          class: p(e.n("actions"))
        },
        [
          M(e.$slots, "actions")
        ],
        2
        /* CLASS */
      )) : q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Bm = ee({
  name: $6,
  components: {
    MonthPickerPanel: t6,
    YearPickerPanel: p6,
    DayPickerPanel: w6
  },
  props: Sm,
  setup(e) {
    const { t: n } = so(), o = se().format("YYYY-MM-D"), [t, r] = o.split("-"), a = Dr.find((ae) => ae === r), i = $(!1), l = $(!1), s = $(!0), u = $(), c = $(), d = $(), f = $(a), v = $(t), g = $(!1), m = $([]), w = $([]), k = $([]), y = $([]), b = $([]), P = $([]), O = $(null), z = $(null), D = $(null), T = B(() => ({
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
    })), I = B(() => ({
      chooseMonth: u.value,
      chooseYear: c.value,
      chooseDay: d.value,
      chooseYears: m.value,
      chooseMonths: w.value,
      chooseDays: k.value,
      chooseRangeYear: y.value,
      chooseRangeMonth: b.value,
      chooseRangeDay: P.value
    })), U = B(() => ({
      previewMonth: f.value,
      previewYear: v.value
    })), j = B(() => {
      var ae;
      const { multiple: ke, range: ze } = e;
      return ze ? y.value.length ? `${y.value[0]} ~ ${y.value[1]}` : "" : ke ? `${m.value.length}${(n || an)("datePickerSelected")}` : (ae = c.value) != null ? ae : "";
    }), W = B(() => {
      var ae, ke;
      const { multiple: ze, range: Re } = e;
      if (Re)
        return b.value.length ? `${b.value[0]} ~ ${b.value[1]}` : "";
      let Le = "";
      return u.value && (Le = (ke = (ae = (n || an)("datePickerMonthDict")) == null ? void 0 : ae[u.value].name) != null ? ke : ""), ze ? `${w.value.length}${(n || an)("datePickerSelected")}` : Le;
    }), K = B(() => {
      var ae, ke, ze, Re;
      const { multiple: Le, range: fn } = e;
      if (fn) {
        const zt = P.value.map((Hg) => se(Hg).format("YYYY-MM-DD"));
        return zt.length ? `${zt[0]} ~ ${zt[1]}` : "";
      }
      if (Le) return `${k.value.length}${(n || an)("datePickerSelected")}`;
      if (!c.value || !u.value || !d.value) return "";
      const hn = se(`${c.value}-${u.value}-${d.value}`).day(), gn = Bt.find((zt) => zt === `${hn}`), Ko = (ke = (ae = (n || an)("datePickerWeekDict")) == null ? void 0 : ae[gn].name) != null ? ke : "", Fg = (Re = (ze = (n || an)("datePickerMonthDict")) == null ? void 0 : ze[u.value].name) != null ? Re : "", Ug = Jo(d.value, 2, "0");
      return (n || an)("lang") === "zh-CN" ? `${u.value}-${Ug} ${Ko.slice(0, 3)}` : `${Ko.slice(0, 3)}, ${Fg.slice(0, 3)} ${d.value}`;
    }), E = B(() => e.type === "year" || i.value ? "year" : e.type === "month" || l.value ? "month" : e.type === "date" ? "date" : ""), R = B(() => !e.touchable || !E.value), L = B(() => {
      var ae, ke;
      const ze = se(`${c.value}-${u.value}-${d.value}`).day(), Re = d.value ? Jo(d.value, 2, "0") : "";
      return {
        week: `${ze}`,
        year: (ae = c.value) != null ? ae : "",
        month: (ke = u.value) != null ? ke : "",
        date: Re
      };
    }), Z = B(
      () => I.value.chooseRangeDay.map((ae) => se(ae).format("YYYY-MM-DD"))
    ), x = B(() => c.value === v.value), ve = B(() => u.value === f.value);
    let ye = 0, Ee = 0, H = "", J;
    de(
      () => e.modelValue,
      (ae) => {
        if (!(!Ke() || oe(ae)))
          if (e.range) {
            if (!Fe(ae)) return;
            s.value = ae.length !== 1, ue(ae, e.type);
          } else if (e.multiple) {
            if (!Fe(ae)) return;
            we(ae, e.type);
          } else
            Be(ae);
      },
      { immediate: !0 }
    ), de(E, Qe);
    function te(ae) {
      ae === "year" ? i.value = !0 : ae === "month" ? l.value = !0 : (i.value = !1, l.value = !1);
    }
    function me(ae) {
      if (R.value) return;
      const { clientX: ke, clientY: ze } = ae.touches[0];
      ye = ke, Ee = ze;
    }
    function A(ae, ke) {
      return ae >= ke && ae > 20 ? "x" : "y";
    }
    function Y(ae) {
      if (R.value) return;
      const { clientX: ke, clientY: ze } = ae.touches[0], Re = ke - ye, Le = ze - Ee;
      J = A(Math.abs(Re), Math.abs(Le)), H = Re > 0 ? "prev" : "next";
    }
    function fe() {
      return k6(this, null, function* () {
        if (R.value || J !== "x") return;
        const ae = E.value === "year" ? O : E.value === "month" ? z : D;
        yield bn(), ae.value.forwardRef(H), Qe();
      });
    }
    function Se(ae, ke) {
      const ze = ke === "year" ? y : ke === "month" ? b : P;
      if (ze.value = s.value ? [ae, ae] : [ze.value[0], ae], s.value = !s.value, s.value) {
        const Le = se(ze.value[0]).isAfter(ze.value[1]) ? [ze.value[1], ze.value[0]] : [...ze.value];
        C(e["onUpdate:modelValue"], Le), C(e.onChange, Le);
      }
    }
    function Ue(ae, ke) {
      const ze = ke === "year" ? m : ke === "month" ? w : k, Re = ke === "year" ? "YYYY" : ke === "month" ? "YYYY-MM" : "YYYY-MM-DD", Le = ze.value.map((hn) => se(hn).format(Re)), fn = Le.findIndex((hn) => hn === ae);
      fn === -1 ? Le.push(ae) : Le.splice(fn, 1), C(e["onUpdate:modelValue"], Le), C(e.onChange, Le);
    }
    function Ae(ae, ke) {
      return !c.value || !u.value ? !1 : x.value ? ae === "year" ? ke < F(c.value) : ae === "month" ? ke < u.value : ve.value ? ke < F(d.value) : u.value > f.value : c.value > v.value;
    }
    function rn(ae) {
      const { readonly: ke, range: ze, multiple: Re, onChange: Le, "onUpdate:modelValue": fn } = e;
      if (ae < 0 || ke) return;
      g.value = Ae("day", ae);
      const hn = `${v.value}-${f.value}-${ae}`, gn = se(hn).format("YYYY-MM-DD");
      ze ? Se(gn, "day") : Re ? Ue(gn, "day") : (C(fn, gn), C(Le, gn));
    }
    function un(ae) {
      const { type: ke, readonly: ze, range: Re, multiple: Le, onChange: fn, onPreview: hn, "onUpdate:modelValue": gn } = e;
      if (g.value = Ae("month", ae), ke === "month" && !ze) {
        const Ko = `${v.value}-${ae}`;
        Re ? Se(Ko, "month") : Le ? Ue(Ko, "month") : (C(gn, Ko), C(fn, Ko));
      } else
        f.value = ae, C(
          hn,
          F(v.value),
          F(f.value),
          ke === "date" ? F(d.value) : void 0
        );
      l.value = !1;
    }
    function Pn(ae) {
      const { type: ke, readonly: ze, range: Re, multiple: Le, onChange: fn, onPreview: hn, "onUpdate:modelValue": gn } = e;
      g.value = Ae("year", ae), ke === "year" && !ze ? Re ? Se(`${ae}`, "year") : Le ? Ue(`${ae}`, "year") : (C(gn, `${ae}`), C(fn, `${ae}`)) : (v.value = `${ae}`, C(
        hn,
        F(v.value),
        F(f.value),
        ke === "date" ? F(d.value) : void 0
      )), i.value = !1;
    }
    function pe(ae, ke) {
      const ze = ke === "prev" ? -1 : 1;
      if (ae === "year")
        v.value = `${F(v.value) + ze}`;
      else {
        let Re = F(f.value) + ze;
        Re < 1 && (v.value = `${F(v.value) - 1}`, Re = 12), Re > 12 && (v.value = `${F(v.value) + 1}`, Re = 1), f.value = Dr.find((Le) => F(Le) === Re);
      }
      C(
        e.onPreview,
        F(v.value),
        F(f.value),
        e.type === "date" ? F(d.value) : void 0
      );
    }
    function Ke() {
      return (e.multiple || e.range) && !Fe(e.modelValue) ? (lt("DatePicker", 'type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Fe(e.modelValue) ? (lt("DatePicker", 'type of prop "modelValue" should be a String'), !1) : !0;
    }
    function oe(ae) {
      return Fe(ae) ? !1 : ae === "Invalid Date" ? (lt("DatePicker", '"modelValue" is an Invalid Date'), !0) : !1;
    }
    function ue(ae, ke) {
      const ze = ke === "year" ? y : ke === "month" ? b : P, Re = ke === "year" ? "YYYY" : ke === "month" ? "YYYY-MM" : "YYYY-MM-D", Le = ae.map((gn) => se(gn).format(Re)).slice(0, 2);
      if (ze.value.some((gn) => oe(gn))) return;
      ze.value = Le;
      const hn = se(ze.value[0]).isAfter(ze.value[1]);
      ze.value.length === 2 && hn && (ze.value = [ze.value[1], ze.value[0]]);
    }
    function we(ae, ke) {
      const ze = ke === "year" ? m : ke === "month" ? w : k, Re = ke === "year" ? "YYYY" : ke === "month" ? "YYYY-MM" : "YYYY-MM-D", Le = Array.from(new Set(ae.map((fn) => se(fn).format(Re))));
      ze.value = Le.filter((fn) => fn !== "Invalid Date");
    }
    function Be(ae) {
      const ze = (ae ? se(ae) : se()).format("YYYY-MM-D");
      if (oe(ze)) return;
      const [Re, Le, fn] = ze.split("-"), hn = Dr.find((gn) => gn === Le);
      u.value = hn, c.value = Re, d.value = fn, f.value = hn, v.value = Re;
    }
    function Qe() {
      Ee = 0, ye = 0, H = "", J = void 0;
    }
    return {
      yearPanelEl: O,
      monthPanelEl: z,
      dayPanelEl: D,
      reverse: g,
      currentDate: o,
      chooseMonth: u,
      chooseYear: c,
      chooseDay: d,
      previewYear: v,
      isYearPanel: i,
      isMonthPanel: l,
      getMonthTitle: W,
      getDateTitle: K,
      getYearTitle: j,
      getPanelType: E,
      getChoose: I,
      getPreview: U,
      componentProps: T,
      slotProps: L,
      formatRange: Z,
      pt: n,
      t: an,
      n: C6,
      classes: S6,
      clickEl: te,
      handleTouchstart: me,
      handleTouchmove: Y,
      handleTouchend: fe,
      getChooseDay: rn,
      getChooseMonth: un,
      getChooseYear: Pn,
      checkPreview: pe,
      formatElevation: dn
    };
  }
});
Bm.render = P6;
var li = Bm;
re(li);
ie(li, Sm);
const zB = li;
var Jl = li, O6 = Object.defineProperty, ad = Object.getOwnPropertySymbols, z6 = Object.prototype.hasOwnProperty, T6 = Object.prototype.propertyIsEnumerable, id = (e, n, o) => n in e ? O6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, E6 = (e, n) => {
  for (var o in n || (n = {}))
    z6.call(n, o) && id(e, o, n[o]);
  if (ad)
    for (var o of ad(n))
      T6.call(n, o) && id(e, o, n[o]);
  return e;
};
const Im = E6({
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
var B6 = Object.defineProperty, ld = Object.getOwnPropertySymbols, I6 = Object.prototype.hasOwnProperty, D6 = Object.prototype.propertyIsEnumerable, sd = (e, n, o) => n in e ? B6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, A6 = (e, n) => {
  for (var o in n || (n = {}))
    I6.call(n, o) && sd(e, o, n[o]);
  if (ld)
    for (var o of ld(n))
      D6.call(n, o) && sd(e, o, n[o]);
  return e;
};
const { name: N6, n: M6, classes: V6 } = ne("dialog");
function R6(e, n) {
  const o = _("var-button"), t = _("var-popup");
  return h(), Ce(t, {
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
      N(
        "div",
        He({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: A6({ width: e.toSizeUnit(e.width) }, e.dialogStyle)
        }, e.$attrs),
        [
          N(
            "div",
            {
              class: p(e.n("title"))
            },
            [
              M(e.$slots, "title", {}, () => {
                var r;
                return [
                  Ie(
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
          N(
            "div",
            {
              class: p(e.n("message")),
              style: X({ textAlign: e.messageAlign })
            },
            [
              M(e.$slots, "default", {}, () => [
                Ie(
                  le(e.message),
                  1
                  /* TEXT */
                )
              ])
            ],
            6
            /* CLASS, STYLE */
          ),
          M(e.$slots, "actions", {
            slotClass: e.n("actions"),
            cancel: e.cancel,
            confirm: e.confirm
          }, () => [
            N(
              "div",
              {
                class: p(e.n("actions"))
              },
              [
                e.cancelButton ? (h(), Ce(o, {
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
                        le((r = e.cancelButtonText) != null ? r : (e.pt ? e.pt : e.t)("dialogCancelButtonText")),
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
                        le((r = e.confirmButtonText) != null ? r : (e.pt ? e.pt : e.t)("dialogConfirmButtonText")),
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
const Dm = ee({
  name: N6,
  components: {
    VarPopup: No,
    VarButton: Bn
  },
  inheritAttrs: !1,
  props: Im,
  setup(e) {
    const n = $(!1), o = $(!1), { t } = so();
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
      n: M6,
      classes: V6,
      handleClickOverlay: a,
      confirm: i,
      cancel: l,
      toSizeUnit: Oe,
      handleKeyEscape: s
    };
  }
});
Dm.render = R6;
var cr = Dm, L6 = Object.defineProperty, F6 = Object.defineProperties, U6 = Object.getOwnPropertyDescriptors, ud = Object.getOwnPropertySymbols, H6 = Object.prototype.hasOwnProperty, j6 = Object.prototype.propertyIsEnumerable, cd = (e, n, o) => n in e ? L6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, rl = (e, n) => {
  for (var o in n || (n = {}))
    H6.call(n, o) && cd(e, o, n[o]);
  if (ud)
    for (var o of ud(n))
      j6.call(n, o) && cd(e, o, n[o]);
  return e;
}, Y6 = (e, n) => F6(e, U6(n));
let So, na = {};
function W6(e = {}) {
  return sn(e) ? Y6(rl({}, na), { message: e }) : rl(rl({}, na), e);
}
function Yo(e) {
  return no() ? new Promise((n) => {
    Yo.close();
    const o = W6(e), t = _e(o);
    t.teleport = "body", So = t;
    const { unmountInstance: r } = Ct(cr, t, {
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
        C(t.onClosed), r(), So === t && (So = null);
      },
      onRouteChange: () => {
        r(), So === t && (So = null);
      },
      "onUpdate:show": (a) => {
        t.show = a;
      }
    });
    t.show = !0;
  }) : Promise.resolve();
}
Yo.setDefaultOptions = function(e) {
  na = e;
};
Yo.resetDefaultOptions = function() {
  na = {};
};
Yo.close = function() {
  if (So != null) {
    const e = So;
    So = null, je().then(() => {
      e.show = !1;
    });
  }
};
Yo.Component = cr;
re(cr);
re(cr, Yo);
ie(Yo, Im);
const TB = cr;
var Ql = Yo;
const Am = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: Boolean,
  description: String,
  margin: String,
  dashed: Boolean,
  hairline: Boolean
}, { name: K6, n: q6, classes: X6 } = ne("divider");
function G6(e, n) {
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
      style: X(e.style),
      role: "separator"
    },
    [
      e.vertical ? q("v-if", !0) : M(e.$slots, "default", { key: 0 }, () => [
        e.description ? (h(), S(
          "span",
          {
            key: 0,
            class: p(e.n("text"))
          },
          le(e.description),
          3
          /* TEXT, CLASS */
        )) : q("v-if", !0)
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const Nm = ee({
  name: K6,
  props: Am,
  setup(e, { slots: n }) {
    const o = $(!1), t = B(() => {
      const { vertical: i, inset: l } = e;
      return !i && l === !0;
    }), r = B(() => {
      const { inset: i, vertical: l, margin: s } = e;
      if (la(i) || l)
        return { margin: s };
      const u = F(i), c = Math.abs(u) + (i + "").replace(u + "", "");
      return {
        margin: s,
        width: `calc(100% - ${Oe(c)})`,
        left: u > 0 ? Oe(c) : Oe(0)
      };
    });
    yn(a), _t(a);
    function a() {
      const { description: i, vertical: l } = e;
      o.value = (n.default || i != null) && !l;
    }
    return {
      n: q6,
      classes: X6,
      withText: o,
      style: r,
      withPresetInset: t
    };
  }
});
Nm.render = G6;
var si = Nm;
re(si);
ie(si, Am);
const EB = si;
var xl = si;
const Mm = {
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
var Z6 = Object.defineProperty, J6 = Object.defineProperties, Q6 = Object.getOwnPropertyDescriptors, dd = Object.getOwnPropertySymbols, x6 = Object.prototype.hasOwnProperty, _6 = Object.prototype.propertyIsEnumerable, fd = (e, n, o) => n in e ? Z6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, pd = (e, n) => {
  for (var o in n || (n = {}))
    x6.call(n, o) && fd(e, o, n[o]);
  if (dd)
    for (var o of dd(n))
      _6.call(n, o) && fd(e, o, n[o]);
  return e;
}, vd = (e, n) => J6(e, Q6(n)), eP = (e, n, o) => new Promise((t, r) => {
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
const { name: nP, n: oP, classes: tP } = ne("drag");
function rP(e, n) {
  return h(), Ce(ao, {
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
        M(e.$slots, "default")
      ],
      16
      /* FULL_PROPS */
    )
  ], 8, ["to", "disabled"]);
}
const Vm = ee({
  name: nP,
  inheritAttrs: !1,
  props: Mm,
  setup(e, { attrs: n }) {
    const o = $(null), t = $(0), r = $(0), a = $(!1), i = $(!1), { touching: l, dragging: s, moveX: u, moveY: c, startTouch: d, moveTouch: f, endTouch: v, resetTouch: g } = $t(), { disabled: m } = xo(), w = _e({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    de(() => e.boundary, U), lo(W), yn(() => {
      U(), W();
    });
    function k(E) {
      e.disabled || (d(E), O());
    }
    function y(E) {
      return eP(this, null, function* () {
        !l.value || e.disabled || (f(E), Ne(E), i.value = !1, a.value = !0, e.direction.includes("x") && (t.value += u.value), e.direction.includes("y") && (r.value += c.value), I());
      });
    }
    function b() {
      e.disabled || (v(), i.value = !0, T());
    }
    function P(E) {
      s.value || C(e.onClick, E);
    }
    function O() {
      const { left: E, top: R } = z();
      t.value = E, r.value = R;
    }
    function z() {
      const E = nn(o.value), R = nn(window), L = E.top - R.top, Z = R.bottom - E.bottom, x = E.left - R.left, ve = R.right - E.right, { width: ye, height: Ee } = E, { width: H, height: J } = R;
      return {
        top: L,
        bottom: Z,
        left: x,
        right: ve,
        width: ye,
        height: Ee,
        halfWidth: ye / 2,
        halfHeight: Ee / 2,
        windowWidth: H,
        windowHeight: J
      };
    }
    function D() {
      const E = z(), R = w.left, L = E.windowWidth - w.right - E.width, Z = w.top, x = E.windowHeight - w.bottom - E.height;
      return {
        minX: R,
        minY: Z,
        // fallback the drag element overflows boundary
        maxX: R < L ? L : R,
        maxY: Z < x ? x : Z
      };
    }
    function T() {
      if (e.attraction == null)
        return;
      const { halfWidth: E, halfHeight: R, top: L, bottom: Z, left: x, right: ve } = z(), { minX: ye, minY: Ee, maxX: H, maxY: J } = D(), te = x + E - w.left, me = ve + E - w.right, A = L + R - w.top, Y = Z + R - w.bottom, fe = te <= me, Se = A <= Y;
      e.attraction.includes("x") && (t.value = fe ? ye : H), e.attraction.includes("y") && (r.value = Se ? Ee : J);
    }
    function I() {
      const { minX: E, minY: R, maxX: L, maxY: Z } = D();
      t.value = $n(t.value, E, L), r.value = $n(r.value, R, Z);
    }
    function U() {
      const { top: E = 0, bottom: R = 0, left: L = 0, right: Z = 0 } = e.boundary;
      w.top = en(E), w.bottom = en(R), w.left = en(L), w.right = en(Z);
    }
    function j() {
      var E;
      const R = (E = n.style) != null ? E : {};
      return vd(pd({}, n), {
        style: vd(pd({}, R), {
          // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: a.value ? 0 : R.top,
          left: a.value ? 0 : R.left,
          right: a.value ? "auto" : R.right,
          bottom: a.value ? "auto" : R.bottom,
          transform: a.value ? `translate(${t.value}px, ${r.value}px)` : R.transform
        })
      });
    }
    function W() {
      a.value && (O(), I());
    }
    function K() {
      g(), i.value = !1, a.value = !1, t.value = 0, r.value = 0;
    }
    return {
      drag: o,
      x: t,
      y: r,
      enableTransition: i,
      dragging: s,
      teleportDisabled: m,
      n: oP,
      classes: tP,
      getAttrs: j,
      handleTouchstart: k,
      handleTouchmove: y,
      handleTouchend: b,
      handleClick: P,
      resize: W,
      reset: K
    };
  }
});
Vm.render = rP;
var ui = Vm;
re(ui);
ie(ui, Mm);
const BB = ui;
var oa = ui;
const Rm = {
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
  onOpen: V(),
  onOpened: V(),
  onClose: V(),
  onClosed: V(),
  onClickOutside: V(),
  "onUpdate:show": V()
}, { name: aP, n: iP, classes: lP } = ne("tooltip");
function sP(e, n) {
  return h(), S(
    "div",
    {
      ref: "host",
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      M(e.$slots, "default"),
      (h(), Ce(ao, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        G(xe, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: ce(() => [
            Ve(N(
              "div",
              {
                ref: "popover",
                class: p(e.classes(e.n("tooltip"), e.n("$--box"))),
                style: X({ zIndex: e.zIndex }),
                onClick: n[0] || (n[0] = Xn(() => {
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
                      width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.referenceSize.width)) : void 0
                    }),
                    class: p(e.classes(e.n("content-container"), e.n(`--${e.type}`))),
                    role: "tooltip"
                  },
                  [
                    M(e.$slots, "content", {}, () => [
                      Ie(
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
              [_n, e.show]
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
const Lm = ee({
  name: aP,
  props: Rm,
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
      setReference: g
    } = Wp(e);
    return {
      popover: o,
      host: t,
      referenceSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: Oe,
      n: iP,
      classes: lP,
      handlePopoverClose: u,
      handlePopoverMouseenter: l,
      handlePopoverMouseleave: s,
      handleClosed: c,
      resize: v,
      open: d,
      close: f,
      setReference: g
    };
  }
});
Lm.render = sP;
var ci = Lm;
re(ci);
ie(ci, Rm);
const IB = ci;
var ta = ci;
const Fm = {
  expand: Boolean,
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  },
  "onUpdate:expand": V()
};
var uP = Object.defineProperty, md = Object.getOwnPropertySymbols, cP = Object.prototype.hasOwnProperty, dP = Object.prototype.propertyIsEnumerable, hd = (e, n, o) => n in e ? uP(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, fP = (e, n) => {
  for (var o in n || (n = {}))
    cP.call(n, o) && hd(e, o, n[o]);
  if (md)
    for (var o of md(n))
      dP.call(n, o) && hd(e, o, n[o]);
  return e;
};
const { name: pP, n: vP, classes: mP } = ne("ellipsis"), hP = { key: 0 };
function gP(e, n) {
  const o = _("var-tooltip");
  return h(), Ce(
    o,
    To(er(e.tooltipProps)),
    {
      content: ce(() => [
        M(e.$slots, "tooltip-content", {}, () => {
          var t;
          return [
            (t = e.tooltipProps) != null && t.content ? (h(), S(
              "span",
              hP,
              le(e.tooltipProps.content),
              1
              /* TEXT */
            )) : M(e.$slots, "default", { key: 1 })
          ];
        })
      ]),
      default: ce(() => [
        N(
          "span",
          {
            class: p(
              e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])
            ),
            style: X(e.rootStyles),
            onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
          },
          [
            M(e.$slots, "default")
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
const Um = ee({
  name: pP,
  components: { VarTooltip: ta },
  props: Fm,
  setup(e) {
    const n = Gn(e, "expand"), o = B(() => e.lineClamp ? { "-webkit-line-clamp": e.lineClamp } : {}), t = B(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : fP({ sameWidth: !0 }, e.tooltip));
    function r() {
      e.expandTrigger && (n.value = !n.value);
    }
    return {
      tooltipProps: t,
      expanding: n,
      rootStyles: o,
      n: vP,
      classes: mP,
      handleClick: r
    };
  }
});
Um.render = gP;
var di = Um;
re(di);
ie(di, Fm);
const DB = di;
var _l = di;
const Hm = {
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
  onClick: V(),
  onOpen: V(),
  onOpened: V(),
  onClose: V(),
  onClosed: V(),
  "onUpdate:active": V()
}, {
  name: bP,
  classes: al,
  n: Nn
} = ne("fab");
var fi = ee({
  name: bP,
  inheritAttrs: !1,
  props: Hm,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const t = Gn(e, "active"), r = $(null), a = $(null);
    de(() => e.trigger, () => {
      t.value = !1;
    }), de(() => e.disabled, () => {
      t.value = !1;
    }), de(() => [e.position, e.fixed, e.top, e.bottom, e.left, e.right], () => {
      var c;
      (c = a.value) == null || c.reset();
    }), Gf(r, "click", s);
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
      }) : null : Ve(G(Bn, {
        "var-fab-cover": !0,
        class: Nn("trigger"),
        type: e.type,
        color: e.color,
        disabled: e.disabled,
        elevation: e.elevation,
        iconContainer: !0
      }, {
        default: () => [G(Je, {
          "var-fab-cover": !0,
          class: al([t.value, Nn("trigger-active-icon"), Nn("trigger-inactive-icon")]),
          name: t.value ? e.activeIcon : e.inactiveIcon,
          size: t.value ? e.activeIconSize : e.inactiveIconSize,
          namespace: t.value ? e.activeIconNamespace : e.inactiveIconNamespace,
          transition: 200,
          animationClass: Nn("--trigger-icon-animation")
        }, null)]
      }), [[_n, e.show]]);
    }
    return () => {
      var c;
      const d = Jf((c = C(n.default)) != null ? c : []), f = la(e.drag) ? {} : e.drag;
      return G(oa, He({
        ref: a,
        class: al(Nn(`--position-${e.position}`), [!e.fixed, Nn("--absolute")]),
        style: {
          top: Oe(e.top),
          bottom: Oe(e.bottom),
          left: Oe(e.left),
          right: Oe(e.right)
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
          class: al(Nn(), Nn(`--direction-${e.direction}`), [e.safeArea, Nn("--safe-area")]),
          ref: r,
          onMouseleave: () => l(!1, d.length),
          onMouseenter: () => l(!0, d.length)
        }, [G(xe, {
          name: Nn("--active-transition")
        }, {
          default: () => [u()]
        }), G(xe, {
          name: Nn(`--actions-transition-${e.direction}`),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        }, {
          default: () => [Ve(G("div", {
            class: Nn("actions"),
            onClick: (v) => v.stopPropagation()
          }, [d.map((v) => {
            var g;
            return G("div", {
              class: Nn("action"),
              key: (g = v.key) != null ? g : void 0
            }, [v]);
          })]), [[_n, e.show && t.value && d.length]])]
        })])]
      });
    };
  }
});
re(fi);
ie(fi, Hm);
const AB = fi;
var es = fi;
const jm = {
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
}, { name: yP, n: wP, classes: kP } = ne("floating-panel"), gd = 100, bd = 0.2;
function $P(e, n) {
  return h(), Ce(ao, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    N(
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
        M(e.$slots, "header", {}, () => [
          N(
            "div",
            {
              class: p(e.n("header"))
            },
            [
              N(
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
        N(
          "div",
          {
            class: p(e.n("content")),
            ref: "contentRef"
          },
          [
            M(e.$slots, "default")
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
const Ym = ee({
  name: yP,
  props: jm,
  setup(e) {
    const n = $(0), o = $(null), { height: t } = u0(), r = B(() => t.value * 0.6), a = Gn(e, "anchor", { defaultValue: gd }), i = B(() => {
      const I = [gd, r.value], { anchors: U } = e;
      return Wn(U) ? I : U;
    }), l = B(() => Math.min(...i.value)), s = B(() => Math.max(...i.value)), { disabled: u } = xo(), { deltaY: c, touching: d, startTouch: f, moveTouch: v, endTouch: g, isReachTop: m, isReachBottom: w } = $t();
    let k;
    ir(() => d.value), de(() => a.value, y, { immediate: !0 }), de(
      () => i.value,
      () => {
        y(a.value);
      },
      { immediate: !0 }
    );
    function y(I) {
      z(I ?? l.value);
    }
    function b(I) {
      f(I), k = n.value;
    }
    function P(I) {
      var U;
      v(I);
      const j = I.target, W = o.value === j || ((U = o.value) == null ? void 0 : U.contains(j));
      if (W && !e.contentDraggable)
        return;
      if (W && e.contentDraggable && n.value >= s.value && !m(o.value)) {
        w(o.value) && Ne(I);
        return;
      }
      const K = k - c.value;
      z(D(K)), Ne(I);
    }
    function O() {
      g();
      const I = a.value;
      z(n.value), a.value = n.value, a.value !== I && C(e.onAnchorChange, n.value);
    }
    function z(I) {
      n.value = d.value ? I : T(I);
    }
    function D(I) {
      if (I > s.value) {
        const U = I - s.value;
        return s.value + U * bd;
      }
      if (I < l.value) {
        const U = l.value - I;
        return l.value - U * bd;
      }
      return I;
    }
    function T(I) {
      if (i.value.includes(I))
        return I;
      let U = 1 / 0, j = 0;
      return i.value.forEach((W) => {
        const K = Math.abs(W - I);
        K < U && (U = K, j = W);
      }), j;
    }
    return {
      contentRef: o,
      teleportDisabled: u,
      touching: d,
      minAnchor: l,
      maxAnchor: s,
      visibleHeight: n,
      n: wP,
      classes: kP,
      toSizeUnit: Oe,
      toNumber: F,
      formatElevation: dn,
      handleTouchstart: b,
      handleTouchmove: P,
      handleTouchend: O
    };
  }
});
Ym.render = $P;
var pi = Ym;
re(pi);
ie(pi, jm);
const NB = pi;
var ns = pi;
const Wm = {
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
var yd = (e, n, o) => new Promise((t, r) => {
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
const { name: CP, n: SP } = ne("form");
function PP(e, n) {
  return h(), S(
    "form",
    {
      class: p(e.n()),
      onSubmit: n[0] || (n[0] = (...o) => e.handleSubmit && e.handleSubmit(...o)),
      onReset: n[1] || (n[1] = (...o) => e.handleReset && e.handleReset(...o))
    },
    [
      M(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const Km = ee({
  name: CP,
  props: Wm,
  setup(e) {
    const n = B(() => e.disabled), o = B(() => e.readonly), { formItems: t, bindFormItems: r } = d1();
    r({
      disabled: n,
      readonly: o
    });
    function i(f) {
      setTimeout(() => {
        const v = Mo(f), g = v === window ? 0 : Gu(v), m = Gu(f) - g - en(e.scrollToErrorOffsetY);
        Rt(v, {
          top: m,
          animation: yl
        });
      }, 300);
    }
    function l(f) {
      return yd(this, null, function* () {
        Ne(f);
        const v = yield u();
        C(e.onSubmit, v);
      });
    }
    function s(f) {
      Ne(f), c(), C(e.onReset);
    }
    function u() {
      return yd(this, null, function* () {
        var f;
        const v = yield Promise.all(t.map(({ validate: g }) => g()));
        if (e.scrollToError) {
          const [, g] = Ef(v, (w) => w === !1, e.scrollToError), m = g > -1;
          if (m) {
            const w = (f = t[g].instance.proxy) == null ? void 0 : f.$el;
            i(w);
          }
          return !m;
        }
        return v.every((g) => g === !0);
      });
    }
    function c() {
      return t.forEach(({ reset: f }) => f());
    }
    function d() {
      return t.forEach(({ resetValidation: f }) => f());
    }
    return {
      n: SP,
      handleSubmit: l,
      handleReset: s,
      validate: u,
      reset: c,
      resetValidation: d
    };
  }
});
Km.render = PP;
var Pt = Km;
Pt.useValidation = Un;
Pt.useForm = Hn;
re(Pt);
ie(Pt, Wm);
const MB = Pt;
var os = Pt;
const qm = {
  highlighter: Object,
  theme: String,
  tag: {
    type: String,
    default: "div"
  }
}, { name: OP, n: zP } = ne("highlighter-provider"), TP = ee({
  name: OP,
  props: qm,
  setup(e, { slots: n }) {
    const o = B(() => e.highlighter), t = B(() => e.theme);
    return rC({ highlighter: o, theme: t }), () => xt(
      e.tag,
      {
        class: zP()
      },
      C(n.default)
    );
  }
});
var vi = TP;
re(vi);
ie(vi, qm);
const VB = vi;
var ts = vi;
const Xm = {
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
}, { name: EP, n: BP, classes: IP } = ne("image"), DP = ["alt", "title", "referrerpolicy", "lazy-loading", "lazy-error"], AP = ["alt", "title", "referrerpolicy", "src"];
function NP(e, n) {
  var o;
  const t = Ye("lazy"), r = Ye("ripple");
  return Ve((h(), S(
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
      e.lazy && !e.showErrorSlot ? Ve((h(), S("img", {
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
      }, null, 46, DP)), [
        [t, (o = e.src) != null ? o : ""]
      ]) : q("v-if", !0),
      !e.lazy && !e.showErrorSlot ? (h(), S("img", {
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
      }, null, 46, AP)) : q("v-if", !0),
      e.showErrorSlot ? M(e.$slots, "error", { key: 2 }) : q("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: !e.ripple }]
  ]);
}
const Gm = ee({
  name: EP,
  directives: {
    Lazy: Wt,
    Ripple: tn
  },
  props: Xm,
  setup(e, { slots: n }) {
    const o = $(!1);
    de(
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
      n: BP,
      classes: IP,
      toSizeUnit: Oe,
      handleLoad: r,
      handleError: t,
      handleClick: a
    };
  }
});
Gm.render = NP;
var mi = Gm;
re(mi);
ie(mi, Xm);
const RB = mi;
var rs = mi;
const Su = {
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
var et = (e, n, o) => new Promise((t, r) => {
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
const MP = 250, VP = 20, { name: RP, n: wd, classes: LP } = ne("swipe"), FP = ["onClick"];
function UP(e, n) {
  const o = _("var-icon"), t = _("var-button"), r = Ye("hover");
  return Ve((h(), S(
    "div",
    {
      class: p(e.n()),
      ref: "swipeEl"
    },
    [
      N(
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
          M(e.$slots, "default")
        ],
        38
        /* CLASS, STYLE, NEED_HYDRATION */
      ),
      e.navigation ? M(e.$slots, "prev", To(He({ key: 0 }, {
        index: e.index,
        length: e.length,
        prev: e.prev,
        next: e.next,
        to: e.to,
        hovering: e.hovering
      })), () => [
        G(xe, {
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
            )) : q("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : q("v-if", !0),
      e.navigation ? M(e.$slots, "next", To(He({ key: 1 }, {
        index: e.index,
        length: e.length,
        hovering: e.hovering,
        prev: e.prev,
        next: e.next,
        to: e.to
      })), () => [
        G(xe, {
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
            )) : q("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : q("v-if", !0),
      M(e.$slots, "indicator", To(er({
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
              Me,
              null,
              Xe(e.length, (a, i) => (h(), S("div", {
                class: p(
                  e.classes(e.n("indicator"), [e.index === i, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])
                ),
                style: X({ background: e.indicatorColor }),
                key: a,
                onClick: (l) => e.to(i)
              }, null, 14, FP))),
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
    [r, e.handleHovering]
  ]);
}
const Zm = ee({
  name: RP,
  directives: { Hover: Dn },
  components: { VarButton: Bn, VarIcon: Je },
  props: Su,
  setup(e) {
    const n = $(null), o = $(0), t = B(() => e.vertical), r = $(0), a = $(0), i = $(!1), l = $(0), s = $(!1), { swipeItems: u, bindSwipeItems: c, length: d } = Yy(), { swipeResizeListeners: f, bindSwipeResizeListeners: v } = Wy(), { popup: g, bindPopup: m } = tp(), {
      deltaX: w,
      deltaY: k,
      moveX: y,
      moveY: b,
      offsetX: P,
      offsetY: O,
      touching: z,
      direction: D,
      startTime: T,
      startTouch: I,
      moveTouch: U,
      endTouch: j
    } = $t(), W = B(() => D.value === (e.vertical ? "vertical" : "horizontal"));
    let K = !1, E = -1;
    c({
      size: o,
      currentIndex: l,
      vertical: t
    }), We(() => window, "keydown", Ue), C(m, null), C(v, null), de(
      () => d.value,
      () => et(this, null, function* () {
        yield bn(), H(), Ae();
      })
    ), g && de(
      () => g.show.value,
      (pe) => et(this, null, function* () {
        pe ? (yield bn(), Ae()) : te();
      })
    ), Fo(Ae), rr(te), lo(Ae);
    function L(pe) {
      return u.find(({ index: Ke }) => Ke.value === pe);
    }
    function Z() {
      e.loop && (a.value >= 0 && L(d.value - 1).setTranslate(-r.value), a.value <= -(r.value - o.value) && L(0).setTranslate(r.value), a.value > -(r.value - o.value) && a.value < 0 && (L(d.value - 1).setTranslate(0), L(0).setTranslate(0)));
    }
    function x(pe) {
      const Ke = Tn(pe) ? pe : Math.floor((a.value - o.value / 2) / -o.value), { loop: oe } = e;
      return Ke <= -1 ? oe ? -1 : 0 : Ke >= d.value ? oe ? d.value : d.value - 1 : Ke;
    }
    function ve(pe) {
      const { loop: Ke } = e;
      return pe === -1 ? Ke ? d.value - 1 : 0 : pe === d.value ? Ke ? 0 : d.value - 1 : pe;
    }
    function ye(pe) {
      return e.loop ? pe < 0 ? d.value + pe : pe >= d.value ? pe - d.value : pe : $n(pe, 0, d.value - 1);
    }
    function Ee() {
      return et(this, null, function* () {
        const pe = a.value >= o.value, Ke = a.value <= -r.value, oe = 0, ue = -(r.value - o.value);
        i.value = !0, (pe || Ke) && (i.value = !0, a.value = Ke ? oe : ue, L(0).setTranslate(0), L(d.value - 1).setTranslate(0)), yield bn(), i.value = !1;
      });
    }
    function H() {
      K || (l.value = ye(F(e.initialIndex)), K = !0);
    }
    function J() {
      const { autoplay: pe } = e;
      !pe || d.value <= 1 || (te(), E = window.setTimeout(() => {
        rn(), J();
      }, F(pe)));
    }
    function te() {
      E && clearTimeout(E);
    }
    function me(pe) {
      return et(this, null, function* () {
        d.value <= 1 || !e.touchable || (I(pe), te(), yield Ee(), i.value = !0);
      });
    }
    function A(pe) {
      const { touchable: Ke, vertical: oe } = e;
      !z.value || !Ke || (U(pe), W.value && (Ne(pe), a.value += oe ? b.value : y.value, Z()));
    }
    function Y() {
      if (!z.value || (j(), !W.value))
        return;
      const { vertical: pe, onChange: Ke } = e, oe = pe ? k.value < 0 : w.value < 0, ue = pe ? O.value : P.value, Be = performance.now() - T.value <= MP && ue >= VP ? x(oe ? l.value + 1 : l.value - 1) : x();
      i.value = !1, a.value = Be * -o.value;
      const Qe = l.value;
      l.value = ve(Be), J(), Qe !== l.value && C(Ke, l.value);
    }
    function fe(pe) {
      e.navigation === "hover" && (s.value = pe);
    }
    function Se(pe) {
      return e.navigation !== "hover" ? "" : wd(`--navigation${e.vertical ? "-vertical" : ""}-${pe}-animation`);
    }
    function Ue(pe) {
      if (!u.length || u.findIndex(({ isFocusing: ue }) => ue.value) === -1)
        return;
      const { key: oe } = pe;
      Ne(pe), oe === "ArrowLeft" && un(), oe === "ArrowRight" && rn();
    }
    function Ae() {
      n.value && (i.value = !0, o.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, r.value = o.value * d.value, a.value = l.value * -o.value, u.forEach((pe) => {
        pe.setTranslate(0);
      }), J(), setTimeout(() => {
        i.value = !1;
      }), f.forEach(({ onResize: pe }) => {
        pe();
      }));
    }
    function rn(pe) {
      return et(this, null, function* () {
        if (d.value <= 1)
          return;
        H();
        const { loop: Ke, onChange: oe } = e, ue = l.value;
        if (l.value = ye(ue + 1), (pe == null ? void 0 : pe.event) !== !1 && C(oe, l.value), yield Ee(), ue === d.value - 1 && Ke) {
          L(0).setTranslate(r.value), a.value = d.value * -o.value;
          return;
        }
        ue !== d.value - 1 && (a.value = l.value * -o.value);
      });
    }
    function un(pe) {
      return et(this, null, function* () {
        if (d.value <= 1)
          return;
        H();
        const { loop: Ke, onChange: oe } = e, ue = l.value;
        if (l.value = ye(ue - 1), (pe == null ? void 0 : pe.event) !== !1 && C(oe, l.value), yield Ee(), ue === 0 && Ke) {
          L(d.value - 1).setTranslate(-r.value), a.value = o.value;
          return;
        }
        ue !== 0 && (a.value = l.value * -o.value);
      });
    }
    function Pn(pe, Ke) {
      if (d.value <= 1 || pe === l.value)
        return;
      pe = pe < 0 ? 0 : pe, pe = pe >= d.value ? d.value : pe;
      const oe = pe > l.value ? rn : un, ue = Math.abs(pe - l.value);
      Array.from({ length: ue }).forEach((we, Be) => {
        oe({ event: Be === ue - 1 ? Ke == null ? void 0 : Ke.event : !1 });
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
      n: wd,
      toSizeUnit: Oe,
      classes: LP,
      handleTouchstart: me,
      handleTouchmove: A,
      handleTouchend: Y,
      next: rn,
      prev: un,
      to: Pn,
      resize: Ae,
      toNumber: F,
      handleHovering: fe,
      getNavigationAnimation: Se
    };
  }
});
Zm.render = UP;
var hi = Zm;
re(hi);
ie(hi, Su);
const LB = hi;
var qt = hi;
function HP() {
  const { bindParent: e, index: n, parentProvider: o } = wn(Dp);
  return Ln(!!e, "SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: o,
    bindSwipe: e
  };
}
const { name: jP, n: YP } = ne("swipe-item"), WP = ["aria-hidden"];
function KP(e, n) {
  return h(), S("div", {
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
    M(e.$slots, "default")
  ], 46, WP);
}
const Jm = ee({
  name: jP,
  setup() {
    const e = $(0), n = $(!1), { swipe: o, bindSwipe: t, index: r } = HP(), { size: a, currentIndex: i, vertical: l } = o, s = {
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
      n: YP,
      toSizeUnit: Oe
    };
  }
});
Jm.render = KP;
var Pu = Jm;
re(Pu);
const FB = Pu;
var Xt = Pu, qP = Object.defineProperty, kd = Object.getOwnPropertySymbols, XP = Object.prototype.hasOwnProperty, GP = Object.prototype.propertyIsEnumerable, $d = (e, n, o) => n in e ? qP(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Cd = (e, n) => {
  for (var o in n || (n = {}))
    XP.call(n, o) && $d(e, o, n[o]);
  if (kd)
    for (var o of kd(n))
      GP.call(n, o) && $d(e, o, n[o]);
  return e;
};
const Qm = Cd(Cd({
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
}, De(Su, ["loop", "indicator", "onChange"])), De(St, [
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
])), { name: ZP, n: Sd, classes: JP } = ne("image-preview"), il = 12, Pd = 200, QP = 350, Od = 200, xP = 500, Cr = 1, _P = ["onTouchstart"], e4 = ["src", "alt"];
function n4(e, n) {
  const o = _("var-swipe-item"), t = _("var-swipe"), r = _("var-icon"), a = _("var-popup");
  return h(), Ce(a, {
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
        default: ce(() => [
          (h(!0), S(
            Me,
            null,
            Xe(e.images, (i, l) => (h(), Ce(o, {
              class: p(e.n("swipe-item")),
              "var-image-preview-cover": "",
              key: i
            }, {
              default: ce(() => [
                N("div", {
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
                  N("img", {
                    role: "img",
                    class: p(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
                    src: i,
                    alt: i
                  }, null, 10, e4)
                ], 46, _P)
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["class"]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        indicator: ce(({ index: i, length: l }) => [
          M(e.$slots, "indicator", {
            index: i,
            length: l
          }, () => [
            e.indicator && e.images.length > 1 ? (h(), S(
              "div",
              {
                key: 0,
                class: p(e.n("indicators"))
              },
              le(i + 1) + " / " + le(l),
              3
              /* TEXT, CLASS */
            )) : q("v-if", !0)
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]),
      M(e.$slots, "close-icon", {}, () => [
        e.closeable ? (h(), Ce(r, {
          key: 0,
          class: p(e.n("close-icon")),
          name: "close-circle",
          "var-image-preview-cover": "",
          onClick: e.close
        }, null, 8, ["class", "onClick"])) : q("v-if", !0)
      ]),
      e.$slots.extra ? (h(), S(
        "div",
        {
          key: 0,
          class: p(e.n("extra"))
        },
        [
          M(e.$slots, "extra")
        ],
        2
        /* CLASS */
      )) : q("v-if", !0)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "transition", "close-on-key-escape", "lock-scroll", "teleport", "show", "onOpen", "onClose", "onClosed", "onOpened", "onKeyEscape", "onRouteChange"]);
}
const xm = ee({
  name: ZP,
  components: {
    VarSwipe: qt,
    VarSwipeItem: Xt,
    VarPopup: No,
    VarIcon: Je
  },
  inheritAttrs: !1,
  props: Qm,
  setup(e) {
    const n = Gn(e, "show"), o = $(1), t = $(0), r = $(0), a = $(), i = $(), l = $(!0), s = $(null), { moveX: u, moveY: c, distance: d, startTime: f, startTouch: v, moveTouch: g, endTouch: m } = $t(), w = B(() => {
      const { imagePreventDefault: H, show: J } = e;
      return J && H;
    });
    let k = null, y = null, b = !1;
    const P = {
      start: null,
      prev: null
    };
    We(() => document, "contextmenu", Z);
    function O(H) {
      o.value = F(H), l.value = !1, P.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, Od);
    }
    function z() {
      o.value = 1, t.value = 0, r.value = 0, l.value = !0, P.prev = null, a.value = void 0, i.value = void 0;
    }
    function D(H) {
      return P.prev ? d.value <= il && performance.now() - f.value <= Pd && P.prev === H : !1;
    }
    function T(H) {
      return !H || !P.start || !P.prev ? !1 : d.value <= il && performance.now() - f.value < QP && (H === P.start || H.parentNode === P.start);
    }
    function I() {
      m(), window.clearTimeout(y), b = !1, P.start = null;
    }
    function U(H) {
      if (m(), window.clearTimeout(y), b) {
        b = !1;
        return;
      }
      const J = T(H.target);
      k = window.setTimeout(() => {
        J && L(), P.start = null;
      }, Pd);
    }
    function j(H, J) {
      window.clearTimeout(k), window.clearTimeout(y);
      const te = H.currentTarget;
      if (P.start = te, y = window.setTimeout(() => {
        b = !0, C(e.onLongPress, J);
      }, xP), D(te)) {
        o.value > Cr ? z() : O(e.zoom);
        return;
      }
      v(H), P.prev = te;
    }
    function W(H) {
      const { offsetWidth: J, offsetHeight: te } = H, { naturalWidth: me, naturalHeight: A } = H.querySelector(`.${Sd("image")}`);
      return {
        width: J,
        height: te,
        imageRadio: A / me,
        rootRadio: te / J,
        zoom: F(e.zoom)
      };
    }
    function K(H) {
      const { zoom: J, imageRadio: te, rootRadio: me, width: A, height: Y } = W(H);
      if (!te)
        return 0;
      const fe = te > me ? Y / te : A;
      return Math.max(0, (J * fe - A) / 2) / J;
    }
    function E(H) {
      const { zoom: J, imageRadio: te, rootRadio: me, width: A, height: Y } = W(H);
      if (!te)
        return 0;
      const fe = te > me ? Y : A * te;
      return Math.max(0, (J * fe - Y) / 2) / J;
    }
    function R(H) {
      if (!P.prev)
        return;
      g(H);
      const J = H.currentTarget;
      if (d.value > il && window.clearTimeout(y), o.value > Cr) {
        const te = K(J), me = E(J);
        t.value = $n(t.value + u.value, -te, te), r.value = $n(r.value + c.value, -me, me);
      }
      P.prev = J;
    }
    function L() {
      if (o.value > Cr) {
        z(), setTimeout(() => C(e["onUpdate:show"], !1), Od);
        return;
      }
      C(e["onUpdate:show"], !1);
    }
    function Z(H) {
      w.value && Ne(H);
    }
    function x(H) {
      var J;
      (J = s.value) == null || J.prev(H);
    }
    function ve(H) {
      var J;
      (J = s.value) == null || J.next(H);
    }
    function ye(H, J) {
      var te;
      (te = s.value) == null || te.to(H, J);
    }
    function Ee(H) {
      H <= Cr ? z() : O(H);
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
      n: Sd,
      classes: JP,
      toNumber: F,
      handleTouchstart: j,
      handleTouchmove: R,
      handleTouchend: U,
      handleTouchcancel: I,
      close: L,
      prev: x,
      next: ve,
      to: ye,
      zoom: Ee
    };
  }
});
xm.render = n4;
var dr = xm, o4 = Object.defineProperty, t4 = Object.defineProperties, r4 = Object.getOwnPropertyDescriptors, zd = Object.getOwnPropertySymbols, a4 = Object.prototype.hasOwnProperty, i4 = Object.prototype.propertyIsEnumerable, Td = (e, n, o) => n in e ? o4(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Sr = (e, n) => {
  for (var o in n || (n = {}))
    a4.call(n, o) && Td(e, o, n[o]);
  if (zd)
    for (var o of zd(n))
      i4.call(n, o) && Td(e, o, n[o]);
  return e;
}, Ed = (e, n) => t4(e, r4(n));
let Po, Mt = {};
function l4(e = {}) {
  return sn(e) ? Ed(Sr({}, Mt), { images: [e] }) : Fe(e) ? Ed(Sr({}, Mt), { images: e }) : Sr(Sr({}, Mt), e);
}
function Wo(e) {
  if (!no())
    return;
  Wo.close();
  const n = l4(e), o = _e(n);
  o.teleport = "body", Po = o;
  const { unmountInstance: t } = Ct(dr, o, {
    onClose: () => C(o.onClose),
    onClosed: () => {
      C(o.onClosed), t(), Po === o && (Po = null);
    },
    onRouteChange: () => {
      t(), Po === o && (Po = null);
    },
    "onUpdate:show": (r) => {
      o.show = r;
    }
  });
  o.show = !0;
}
Wo.close = () => {
  if (Po != null) {
    const e = Po;
    Po = null, je().then(() => {
      e.show = !1;
    });
  }
};
Wo.setDefaultOptions = (e) => {
  Mt = e;
};
Wo.resetDefaultOptions = () => {
  Mt = {};
};
Wo.Component = dr;
re(dr);
re(dr, Wo);
ie(Wo, Qm);
const UB = dr;
var Gt = Wo;
const _m = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function s4() {
  const { bindChildren: e, length: n, childProviders: o } = kn(
    _m
  );
  return {
    length: n,
    indexAnchors: o,
    bindIndexAnchors: e
  };
}
function u4() {
  const { parentProvider: e, index: n, bindParent: o } = wn(
    _m
  );
  return Ln(!!o, "IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: o
  };
}
const eh = {
  index: [Number, String]
}, { name: c4, n: d4, classes: f4 } = ne("index-anchor");
function p4(e, n) {
  return h(), Ce(kt(e.sticky ? e.n("$-sticky") : e.Transition), {
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
          M(e.$slots, "default", {}, () => [
            Ie(
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
const nh = ee({
  name: c4,
  components: { VarSticky: yt },
  inheritAttrs: !1,
  props: eh,
  setup(e) {
    const n = $(!1), o = B(() => e.index), t = $(null), { index: r, indexBar: a, bindIndexBar: i } = u4(), { active: l, sticky: s, cssMode: u, stickyOffsetTop: c, zIndex: d } = a;
    i({
      index: r,
      name: o,
      setDisabled: g,
      getOffsetTop: v
    });
    function v() {
      return t.value ? t.value.$el ? t.value.$el.offsetTop : t.value.offsetTop : 0;
    }
    function g(m) {
      n.value = m;
    }
    return {
      n: d4,
      classes: f4,
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
nh.render = p4;
var gi = nh;
re(gi);
ie(gi, eh);
const HB = gi;
var as = gi;
const oh = {
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
var Bd = (e, n, o) => new Promise((t, r) => {
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
const { name: v4, n: m4, classes: h4 } = ne("index-bar"), g4 = ["onClick"];
function b4(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.n()),
      ref: "barEl"
    },
    [
      M(e.$slots, "default"),
      N(
        "ul",
        {
          class: p(e.n("anchor-list")),
          style: X({ zIndex: e.toNumber(e.zIndex) + 2, display: e.hideList ? "none" : "block" })
        },
        [
          (h(!0), S(
            Me,
            null,
            Xe(e.anchorNameList, (o) => (h(), S("li", {
              key: o,
              class: p(e.classes(e.n("anchor-item"), [e.active === o, e.n("anchor-item--active")])),
              style: X({ color: e.active === o && e.highlightColor ? e.highlightColor : void 0 }),
              onClick: (t) => e.anchorClick({ anchorName: o, manualCall: !0 })
            }, [
              M(e.$slots, "anchor-name", { anchorName: o }, () => [
                Ie(
                  le(o),
                  1
                  /* TEXT */
                )
              ])
            ], 14, g4))),
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
const th = ee({
  name: v4,
  props: oh,
  setup(e) {
    const n = $(""), o = $(null), t = $([]), r = $(), a = B(() => e.sticky), i = B(() => e.stickyCssMode), l = B(() => en(e.stickyOffsetTop)), s = B(() => e.zIndex), { length: u, indexAnchors: c, bindIndexAnchors: d } = s4();
    let f = null, v = !1;
    const g = {
      active: r,
      sticky: a,
      cssMode: i,
      stickyOffsetTop: l,
      zIndex: s
    };
    de(
      () => u.value,
      () => Bd(this, null, function* () {
        yield bn(), t.value = c.filter(({ name: z }) => z.value != null).map(({ name: z }) => z.value);
      })
    ), yn(b), ia(P), wt(() => {
      v = !0, P();
    }), Fo(() => {
      !v || r.value === void 0 || (y({
        anchorName: r.value,
        options: { event: !1 }
      }), v = !1);
    }), d(g);
    function m(z, D) {
      const T = Rn(z) ? z.name.value : z;
      T === r.value || T === void 0 || (r.value = T, (D == null ? void 0 : D.event) !== !1 && C(e.onChange, T));
    }
    function w() {
      const { top: z } = nn(f), { top: D } = nn(o.value);
      return ho(f) - z + D;
    }
    function k() {
      const z = ho(f), D = f === window ? document.body.scrollHeight : f.scrollHeight, T = w();
      c.forEach((I, U) => {
        const j = I.getOffsetTop(), W = z - j + l.value - T, K = U === c.length - 1 ? D : c[U + 1].getOffsetTop() - I.getOffsetTop();
        I.setDisabled(!0), W >= 0 && W < K && n.value === "" && (I.setDisabled(!1), m(I));
      });
    }
    function y(z) {
      return Bd(this, arguments, function* ({ anchorName: D, manualCall: T = !1, options: I }) {
        if (T && C(e.onClick, D), D === r.value && !v)
          return;
        const U = c.find(({ name: R }) => D === R.value);
        if (!U)
          return;
        const j = w(), K = U.getOffsetTop() - l.value + j, E = tr(f);
        n.value = D, m(D, I), yield Rt(f, {
          left: E,
          top: K,
          animation: tv,
          duration: F(e.duration)
        }), yield bn(), n.value = "";
      });
    }
    function b() {
      f = Mo(o.value), f.addEventListener("scroll", k);
    }
    function P() {
      f && f.removeEventListener("scroll", k);
    }
    function O(z, D) {
      Ao(() => y({ anchorName: z, options: D }));
    }
    return {
      barEl: o,
      active: r,
      zIndex: s,
      anchorNameList: t,
      n: m4,
      classes: h4,
      toNumber: F,
      scrollTo: O,
      anchorClick: y
    };
  }
});
th.render = b4;
var bi = th;
re(bi);
ie(bi, oh);
const jB = bi;
var is = bi;
const rh = {
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
}, { name: y4, n: w4, classes: k4 } = ne("link");
function $4(e, n) {
  return h(), Ce(kt(e.tag), He(e.linkProps, {
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
      M(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "style", "onClick"]);
}
const ah = ee({
  name: y4,
  props: rh,
  setup(e) {
    const n = $(!1), o = B(() => {
      const { disabled: a, href: i, to: l } = e;
      return a ? "span" : i ? "a" : l ? "router-link" : "a";
    }), t = B(() => {
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
      n: w4,
      classes: k4,
      handleClick: r,
      toSizeUnit: Oe
    };
  }
});
ah.render = $4;
var yi = ah;
re(yi);
ie(yi, rh);
const YB = yi;
var ls = yi;
const ih = {
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
}, lh = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function C4() {
  const { bindChildren: e, childProviders: n, length: o } = kn(
    lh
  );
  return {
    length: o,
    tabItemList: n,
    bindTabItem: e
  };
}
const sh = Symbol("TAB_ITEM_BIND_LIST_KEY");
function S4() {
  const { parentProvider: e, bindParent: n, index: o } = wn(
    lh
  );
  return Ln(!!n, "TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: o,
    tabsItems: e,
    bindTabsItems: n
  };
}
function P4() {
  const { childProviders: e, bindChildren: n, length: o } = kn(sh);
  return {
    length: o,
    lists: e,
    bindLists: n
  };
}
function O4() {
  const { parentProvider: e, bindParent: n, index: o } = wn(sh);
  return {
    index: o,
    tabItem: e,
    bindTabItem: n
  };
}
var z4 = (e, n, o) => new Promise((t, r) => {
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
const { name: T4, n: E4, classes: B4 } = ne("list");
function I4(e, n) {
  const o = _("var-loading"), t = Ye("ripple");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [
      M(e.$slots, "default"),
      e.loading ? M(e.$slots, "loading", { key: 0 }, () => {
        var r;
        return [
          N(
            "div",
            {
              class: p(e.n("loading"))
            },
            [
              N(
                "div",
                {
                  class: p(e.n("loading-text"))
                },
                le((r = e.loadingText) != null ? r : (e.pt ? e.pt : e.t)("listLoadingText")),
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
      e.finished ? M(e.$slots, "finished", { key: 1 }, () => {
        var r;
        return [
          N(
            "div",
            {
              class: p(e.n("finished"))
            },
            le((r = e.finishedText) != null ? r : (e.pt ? e.pt : e.t)("listFinishedText")),
            3
            /* TEXT, CLASS */
          )
        ];
      }) : q("v-if", !0),
      e.error ? M(e.$slots, "error", { key: 2 }, () => {
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
      }) : q("v-if", !0),
      N(
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
const uh = ee({
  name: T4,
  directives: { Ripple: tn },
  components: { VarLoading: ht },
  props: ih,
  setup(e) {
    const n = $(null), o = $(null), { tabItem: t, bindTabItem: r } = O4(), { t: a } = so();
    let i;
    C(r, {}), t && de(() => t.current.value, c), de(() => [e.loading, e.error, e.finished], c), yn(() => {
      i = Mo(n.value), i.addEventListener("scroll", c), e.immediateCheck && c();
    }), rr(u);
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
      return z4(this, null, function* () {
        yield je(), !(e.loading || e.finished || e.error || (t == null ? void 0 : t.current.value) === !1 || !s()) && l();
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
      n: E4,
      classes: B4
    };
  }
});
uh.render = I4;
var wi = uh;
re(wi);
ie(wi, ih);
const WB = wi;
var ss = wi;
const D4 = {
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
  name: A4,
  classes: N4,
  n: Id
} = ne("loading-bar");
var M4 = ee({
  name: A4,
  props: D4,
  setup(e) {
    return () => G("div", {
      class: N4(Id(), [e.error, Id("--error")]),
      style: {
        zIndex: Vn.zIndex + 10,
        width: `${e.value}%`,
        opacity: e.opacity,
        height: Oe(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: Oe(e.top),
        transitionDuration: e.transitionDuration == null ? void 0 : `${e.transitionDuration}ms`
      }
    }, null);
  }
});
const Ou = 200;
let ch, dh, fh, ph, ki, Dd, vh = {};
const V4 = {
  value: 0,
  opacity: 0,
  error: !1
}, ln = _e(V4);
function R4(e) {
  Object.assign(ln, e), vh = e;
}
const L4 = () => {
  Object.keys(vh).forEach((e) => {
    ln[e] !== void 0 && (ln[e] = void 0);
  });
}, mh = () => {
  Dd || (Dd = !0, Ct(M4, ln));
}, zu = () => {
  ch = window.setTimeout(() => {
    ln.transitionDuration = void 0, !(ln.value >= 95) && (ln.value += ln.value < 70 ? Math.round(5 * Math.random()) : Math.random(), zu());
  }, 200);
}, Tu = () => {
  window.clearTimeout(ch), window.clearTimeout(ki), window.clearTimeout(fh), window.clearTimeout(dh), window.clearTimeout(ph);
}, hh = () => {
  Tu(), ln.value = 100, ki = window.setTimeout(() => {
    ln.opacity = 0, ph = window.setTimeout(() => {
      ln.error = !1;
    }, 250);
  }, Ou + 100);
}, F4 = () => {
  Tu(), ln.error = !1, ln.value = 0, ln.transitionDuration = 0, mh(), ki = window.setTimeout(() => {
    ln.opacity = 1;
  }, Ou), zu();
}, U4 = () => {
  var e;
  fh = window.setTimeout(hh, (e = ln.finishDelay) != null ? e : 0);
}, H4 = () => {
  Tu(), ln.error = !0, ln.value === 100 && (ln.value = 0, ln.transitionDuration = 0), mh(), ki = window.setTimeout(() => {
    ln.opacity = 1;
  }, Ou), zu(), dh = window.setTimeout(hh, 300);
}, gh = {
  start: F4,
  finish: U4,
  error: H4,
  setDefaultOptions: R4,
  resetDefaultOptions: L4
}, KB = gh;
var us = gh;
const bh = {
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
var j4 = Object.defineProperty, Y4 = Object.defineProperties, W4 = Object.getOwnPropertyDescriptors, Ad = Object.getOwnPropertySymbols, K4 = Object.prototype.hasOwnProperty, q4 = Object.prototype.propertyIsEnumerable, Nd = (e, n, o) => n in e ? j4(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, X4 = (e, n) => {
  for (var o in n || (n = {}))
    K4.call(n, o) && Nd(e, o, n[o]);
  if (Ad)
    for (var o of Ad(n))
      q4.call(n, o) && Nd(e, o, n[o]);
  return e;
}, G4 = (e, n) => Y4(e, W4(n));
const { name: Z4, n: J4 } = ne("locale-provider"), Q4 = ee({
  name: Z4,
  props: bh,
  setup(e, { slots: n }) {
    const o = B(
      () => {
        var r;
        return Object.entries((r = e.messages) != null ? r : {}).reduce((a, [i, l]) => (a[i] = G4(X4({}, l), {
          lang: i
        }), a), {});
      }
    );
    wy({
      t
    });
    function t(r) {
      if (Xo(o.value, e.locale) && Xo(o.value[e.locale], r))
        return o.value[e.locale][r];
    }
    return () => xt(
      e.tag,
      {
        class: J4()
      },
      C(n.default)
    );
  }
});
var $i = Q4;
re($i);
ie($i, bh);
const qB = $i;
var cs = $i;
const yh = Symbol("SELECT_BIND_OPTION_KEY");
function x4() {
  const { length: e, childProviders: n, bindChildren: o } = kn(yh);
  return {
    length: e,
    options: n,
    bindOptions: o
  };
}
function _4() {
  const { index: e, parentProvider: n, bindParent: o } = wn(yh);
  return Ln(!!o, "Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: o
  };
}
const wh = {
  label: {},
  value: {},
  disabled: Boolean,
  // internal
  option: Object
}, { name: eO, n: nO, classes: oO } = ne("option"), tO = ["tabindex"];
function rO(e, n) {
  const o = _("var-checkbox"), t = _("maybe-v-node"), r = _("var-hover-overlay"), a = Ye("ripple"), i = Ye("hover");
  return Ve((h(), S("div", {
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
    N(
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
    e.multiple ? (h(), Ce(o, {
      key: 0,
      ref: "checkbox",
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (l) => e.optionSelected = l),
      "checked-color": e.focusColor,
      disabled: e.disabled,
      onClick: n[1] || (n[1] = Xn(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, ["modelValue", "checked-color", "disabled", "onChange"])) : q("v-if", !0),
    M(e.$slots, "default", { selected: e.optionSelected }, () => [
      N(
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
  ], 46, tO)), [
    [a, { disabled: e.disabled }],
    [i, e.handleHovering, "desktop"]
  ]);
}
const kh = ee({
  name: eO,
  directives: { Ripple: tn, Hover: Dn },
  components: {
    VarCheckbox: pt,
    VarHoverOverlay: Fn,
    MaybeVNode: ar
  },
  props: wh,
  setup(e) {
    const n = $(), o = $(!1), t = $(!1), r = B(() => t.value), a = B(
      () => {
        var O;
        return mn(e.label) ? e.label(
          (O = e.option) != null ? O : {
            label: e.label,
            value: e.value,
            disabled: e.disabled
          },
          t.value
        ) : e.label;
      }
    ), i = B(() => e.value), { select: l, bindSelect: s } = _4(), { multiple: u, focusColor: c, onSelect: d, computeLabel: f } = l, { hovering: v, handleHovering: g } = eo(), m = {
      label: a,
      value: i,
      selected: r,
      sync: P
    };
    de([() => e.label, () => e.value], f), s(m), We(() => window, "keydown", k), We(() => window, "keyup", y);
    function w() {
      e.disabled || b();
    }
    function k(O) {
      o.value && ((O.key === " " || O.key === "Enter") && Ne(O), O.key === "Enter" && n.value.click());
    }
    function y(O) {
      o.value && O.key === " " && (Ne(O), n.value.click());
    }
    function b() {
      u.value && (t.value = !t.value), d(m);
    }
    function P(O) {
      t.value = O;
    }
    return {
      root: n,
      optionSelected: t,
      multiple: u,
      focusColor: c,
      hovering: v,
      isFocusing: o,
      labelVNode: a,
      n: nO,
      classes: oO,
      handleHovering: g,
      handleClick: w,
      handleSelect: b
    };
  }
});
kh.render = rO;
var Ci = kh;
re(Ci);
ie(Ci, wh);
const XB = Ci;
var ra = Ci;
const $h = {
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
  name: aO,
  n: Md
} = ne("overlay");
var Si = ee({
  name: aO,
  inheritAttrs: !1,
  props: $h,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const {
      zIndex: t
    } = lr(() => e.show, 1), {
      onStackTop: r
    } = nu(() => e.show, t), {
      disabled: a
    } = xo();
    ir(() => e.show, () => e.lockScroll), We(() => window, "keydown", i);
    function i(c) {
      !r() || c.key !== "Escape" || !e.show || (C(e.onKeyEscape), e.closeOnKeyEscape && (Ne(c), C(e["onUpdate:show"], !1)));
    }
    function l() {
      C(e.onClick), C(e["onUpdate:show"], !1);
    }
    function s() {
      return G("div", He({
        class: Md(),
        style: {
          zIndex: t.value
        }
      }, o, {
        onClick: l
      }), [C(n.default)]);
    }
    function u() {
      return G(xe, {
        name: Md("--fade")
      }, {
        default: () => [e.show && s()]
      });
    }
    return () => {
      const {
        teleport: c
      } = e;
      return c ? G(ao, {
        to: c,
        disabled: a.value
      }, {
        default: () => [u()]
      }) : u();
    };
  }
});
re(Si);
ie(Si, $h);
const GB = Si;
var ds = Si;
const Ch = {
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
}, { name: iO, n: lO, classes: sO } = ne("pagination"), uO = ["item-mode", "onClick"];
function cO(e, n) {
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
          M(e.$slots, "prev", {}, () => [
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
            onKeydown: n[3] || (n[3] = Du((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
          }, null, 8, ["disabled", "modelValue"]),
          N("span", null, [
            Ie(
              " / " + le(e.pageCount) + " ",
              1
              /* TEXT */
            ),
            N(
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
        Me,
        { key: 1 },
        Xe(e.pageList, (l, s) => Ve((h(), S("li", {
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
            le(l),
            1
            /* TEXT */
          )
        ], 10, uO)), [
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
          M(e.$slots, "next", {}, () => [
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
          class: p(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
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
                Me,
                null,
                Xe(e.sizeOption, (l, s) => (h(), Ce(r, {
                  key: s,
                  value: l,
                  onClick: e.clickSize
                }, {
                  default: ce(() => [
                    Ie(
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
            default: ce(() => [
              N(
                "div",
                {
                  class: p(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")]))
                },
                [
                  N(
                    "span",
                    null,
                    le(e.size) + le((e.pt ? e.pt : e.t)("paginationItem")) + " / " + le((e.pt ? e.pt : e.t)("paginationPage")),
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
      )) : q("v-if", !0),
      e.showQuickJumper && !e.simple ? (h(), S(
        "li",
        {
          key: 3,
          class: p(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
        },
        [
          Ie(
            le((e.pt ? e.pt : e.t)("paginationJump")) + " ",
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
            onKeydown: n[8] || (n[8] = Du((l) => e.setPage("quick", e.quickJumperValue, l), ["enter"]))
          }, null, 8, ["modelValue", "disabled"])
        ],
        2
        /* CLASS */
      )) : q("v-if", !0),
      e.totalText ? (h(), S(
        "li",
        {
          key: 4,
          class: p(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
        },
        le(e.totalText),
        3
        /* TEXT, CLASS */
      )) : q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Sh = ee({
  name: iO,
  components: {
    VarMenuSelect: Yt,
    VarMenuOption: vt,
    VarIcon: Je,
    VarInput: Ft
  },
  directives: { Ripple: tn },
  props: Ch,
  setup(e) {
    const n = $(""), o = $("1"), t = $(!1), r = $(!1), a = $(F(e.current) || 1), i = $(F(e.size) || 10), l = $([]), s = B(() => Math.ceil(e.maxPagerCount / 2)), u = B(() => Math.ceil(F(e.total) / F(i.value))), c = B(() => {
      const b = i.value * (a.value - 1) + 1, P = Math.min(i.value * a.value, F(e.total));
      return [b, P];
    }), d = B(() => e.showTotal ? e.showTotal(F(e.total), c.value) : ""), { t: f } = so();
    de([() => e.current, () => e.size], ([b, P]) => {
      a.value = F(b) || 1, i.value = F(P || 10);
    }), de(
      [a, i, u],
      ([b, P, O], [z, D]) => {
        let T = [];
        const { maxPagerCount: I, total: U, onChange: j } = e, W = Math.ceil(F(U) / F(D)), K = O - (I - s.value) - 1;
        if (o.value = `${b}`, O - 2 > I) {
          if (z === void 0 || O !== W)
            for (let E = 2; E < I + 2; E++) T.push(E);
          if (b <= I && b < K) {
            T = [];
            for (let E = 1; E < I + 1; E++)
              T.push(E + 1);
            t.value = !0, r.value = !1;
          }
          if (b > I && b < K) {
            T = [];
            for (let E = 1; E < I + 1; E++)
              T.push(b + E - s.value);
            t.value = b === 2 && I === 1, r.value = !1;
          }
          if (b >= K) {
            T = [];
            for (let E = 1; E < I + 1; E++)
              T.push(O - (I - E) - 1);
            t.value = !1, r.value = !0;
          }
          T = [1, "...", ...T, "...", O];
        } else
          for (let E = 1; E <= O; E++) T.push(E);
        l.value = T, z != null && O > 0 && C(j, b, P), C(e["onUpdate:current"], b), C(e["onUpdate:size"], P);
      },
      {
        immediate: !0
      }
    );
    function v(b, P) {
      return Tn(b) ? !1 : P === 1 ? t.value : r.value;
    }
    function g(b, P) {
      return Tn(b) ? "basic" : P === 1 ? "head" : "tail";
    }
    function m(b, P) {
      if (!(b === a.value || e.disabled)) {
        if (b === "...") {
          a.value = P === 1 ? Math.max(a.value - e.maxPagerCount, 1) : Math.min(a.value + e.maxPagerCount, u.value);
          return;
        }
        if (b === "prev") {
          a.value = k(a.value - 1);
          return;
        }
        if (b === "next") {
          a.value = k(a.value + 1);
          return;
        }
        Tn(b) && (a.value = b);
      }
    }
    function w() {
      const b = k(a.value);
      o.value = String(b), a.value = b;
    }
    function k(b) {
      return b > u.value ? u.value : b < 1 ? 1 : b;
    }
    function y(b, P, O) {
      O.target.blur();
      const z = k(F(P));
      o.value = String(z), a.value = z, b === "quick" && (n.value = "");
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
      n: lO,
      classes: sO,
      getMode: g,
      isHideEllipsis: v,
      clickItem: m,
      clickSize: w,
      setPage: y,
      toNumber: F,
      formatElevation: dn
    };
  }
});
Sh.render = cO;
var Pi = Sh;
re(Pi);
ie(Pi, Ch);
const ZB = Pi;
var fs = Pi;
const Ph = {
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
}, { name: dO, n: fO, classes: pO } = ne("paper");
function vO(e, n) {
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
      style: X({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      }),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      M(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [o, { disabled: !e.ripple }]
  ]);
}
const Oh = ee({
  name: dO,
  directives: { Ripple: tn },
  props: Ph,
  setup(e) {
    function n(o) {
      C(e.onClick, o);
    }
    return {
      n: fO,
      classes: pO,
      formatElevation: dn,
      toSizeUnit: Oe,
      handleClick: n
    };
  }
});
Oh.render = vO;
var Oi = Oh;
re(Oi);
ie(Oi, Ph);
const JB = Oi;
var ps = Oi, mO = Object.defineProperty, Vd = Object.getOwnPropertySymbols, hO = Object.prototype.hasOwnProperty, gO = Object.prototype.propertyIsEnumerable, Rd = (e, n, o) => n in e ? mO(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, bO = (e, n) => {
  for (var o in n || (n = {}))
    hO.call(n, o) && Rd(e, o, n[o]);
  if (Vd)
    for (var o of Vd(n))
      gO.call(n, o) && Rd(e, o, n[o]);
  return e;
};
const zh = bO({
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
])), { name: yO, n: wO, classes: kO } = ne("picker"), Ld = 300, $O = 15, Fd = 200, CO = 1e3;
let Ud = 0;
const SO = ["onTouchstartPassive", "onTouchmove", "onTouchend"], PO = ["onTransitionend"], OO = ["onClick"];
function zO(e, n) {
  const o = _("var-button");
  return h(), Ce(
    kt(e.dynamic ? e.n("$-popup") : e.Transition),
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
                class: p(e.n("toolbar"))
              },
              [
                M(e.$slots, "cancel", {}, () => [
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
                        Ie(
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
                M(e.$slots, "title", {}, () => {
                  var t;
                  return [
                    N(
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
                M(e.$slots, "confirm", {}, () => [
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
                        Ie(
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
            )) : q("v-if", !0),
            N(
              "div",
              {
                class: p(e.n("columns")),
                style: X({ height: `${e.columnHeight}px` })
              },
              [
                (h(!0), S(
                  Me,
                  null,
                  Xe(e.scrollColumns, (t) => (h(), S("div", {
                    class: p(e.n("column")),
                    key: t.id,
                    onTouchstartPassive: (r) => e.handleTouchstart(r, t),
                    onTouchmove: Xn((r) => e.handleTouchmove(r, t), ["prevent"]),
                    onTouchend: (r) => e.handleTouchend(t)
                  }, [
                    N("div", {
                      class: p(e.n("scroller")),
                      ref_for: !0,
                      ref: (r) => e.setScrollEl(r, t),
                      style: X({
                        transform: `translateY(${t.translate}px)`,
                        transitionDuration: `${t.duration}ms`,
                        transitionProperty: t.duration ? "transform" : "none"
                      }),
                      onTransitionend: (r) => e.handleTransitionend(t)
                    }, [
                      (h(!0), S(
                        Me,
                        null,
                        Xe(t.column, (r, a) => (h(), S("div", {
                          key: e.getValue(r),
                          class: p(e.classes(e.n("option"), r.className)),
                          style: X({ height: `${e.optionHeight}px` }),
                          onClick: (i) => e.handleClick(t, a)
                        }, [
                          N(
                            "div",
                            {
                              class: p(e.classes(e.n("text"), r.textClassName))
                            },
                            le(r[e.getOptionKey("text")]),
                            3
                            /* TEXT, CLASS */
                          )
                        ], 14, OO))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ], 46, PO)
                  ], 42, SO))),
                  128
                  /* KEYED_FRAGMENT */
                )),
                N(
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
                N(
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
const Th = ee({
  name: yO,
  components: {
    VarButton: Bn,
    VarPopup: No
  },
  inheritAttrs: !1,
  props: zh,
  setup(e) {
    const n = Gn(e, "modelValue"), o = $([]), t = B(() => F(e.columnsCount)), r = B(() => en(e.optionHeight)), a = B(() => en(e.optionCount)), i = B(() => a.value * r.value / 2 - r.value / 2), l = B(() => a.value * r.value), { prevY: s, moveY: u, dragging: c, startTouch: d, moveTouch: f, endTouch: v } = $t(), { t: g } = so();
    let m = [];
    D(), de(() => e.columns, D, { deep: !0 }), de(() => n.value, D);
    function w(A) {
      return {
        text: e.textKey,
        value: e.valueKey,
        children: e.childrenKey
      }[A];
    }
    function k(A) {
      var Y;
      return (Y = A[w("value")]) != null ? Y : A[w("text")];
    }
    function y(A) {
      m = [...A];
    }
    function b(A) {
      return (e.columnsCount != null ? A.slice(0, t.value) : A).map((fe, Se) => {
        const Ue = {
          id: Ud++,
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
        }, Ae = n.value[Se], rn = Ue.column.findIndex((un) => Ae === k(un));
        return Ue.index = rn === -1 ? 0 : rn, E(Ue), Ue;
      });
    }
    function P(A) {
      const Y = [];
      return O(Y, A), Y;
    }
    function O(A, Y, fe = !0, Se = 1) {
      var Ue;
      if (Y.length && (e.columnsCount == null || Se <= t.value)) {
        const Ae = {
          id: Ud++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: i.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: Y,
          scrollEl: null,
          scrolling: !1
        };
        if (A.push(Ae), fe) {
          const rn = n.value[A.length - 1], un = Y.findIndex((Pn) => rn === k(Pn));
          Ae.index = un === -1 ? 0 : un;
        }
        E(Ae), O(
          A,
          (Ue = Ae.column[Ae.index][w("children")]) != null ? Ue : [],
          fe,
          Se + 1
        );
      }
    }
    function z(A) {
      var Y;
      o.value.splice(o.value.indexOf(A) + 1), O(
        o.value,
        (Y = A.column[A.index][w("children")]) != null ? Y : [],
        !1,
        o.value.length + 1
      );
    }
    function D() {
      o.value = e.cascade ? P(e.columns) : b(e.columns);
      const { indexes: A } = K();
      y(A);
    }
    function T(A, Y) {
      Y.scrollEl = A;
    }
    function I(A) {
      C(e["onUpdate:show"], A);
    }
    function U(A) {
      const Y = i.value - A.column.length * r.value, fe = r.value + i.value;
      A.translate = $n(A.translate, Y, fe);
    }
    function j(A, Y) {
      const fe = Math.round((i.value - Y) / r.value);
      return kf(fe, A.column);
    }
    function W(A) {
      return A.translate = i.value - A.index * r.value, A.translate;
    }
    function K() {
      const A = [], Y = [], fe = [];
      return o.value.forEach(({ column: Se, index: Ue }) => {
        const Ae = Se[Ue];
        A.push(k(Ae)), Y.push(Ue), fe.push(Ae);
      }), {
        values: A,
        indexes: Y,
        options: fe
      };
    }
    function E(A, Y = 0) {
      W(A), A.duration = Y;
    }
    function R(A, Y, fe) {
      A.translate += Math.abs(Y / fe) / 3e-3 * (Y < 0 ? -1 : 1);
    }
    function L(A, Y) {
      c.value || (A.index = Y, E(A, Fd));
    }
    function Z(A, Y) {
      Y.touching = !0, Y.translate = _i(Y.scrollEl), d(A);
    }
    function x(A, Y) {
      if (!Y.touching)
        return;
      f(A), Y.scrolling = !1, Y.duration = 0, Y.prevY = s.value, Y.translate += u.value, U(Y);
      const fe = performance.now();
      fe - Y.momentumTime > Ld && (Y.momentumTime = fe, Y.momentumPrevY = Y.translate);
    }
    function ve(A) {
      v(), A.touching = !1, A.prevY = 0;
      const Y = A.translate - A.momentumPrevY, fe = performance.now() - A.momentumTime, Se = Math.abs(Y) >= $O && fe <= Ld, Ue = A.translate;
      Se && R(A, Y, fe), A.index = j(A, A.translate), E(A, Se ? CO : Fd), A.scrolling = A.translate !== Ue, A.scrolling || H(A);
    }
    function ye(A) {
      A.scrolling = !1, H(A);
    }
    function Ee() {
      const { indexes: A } = K();
      return A.every((Y, fe) => Y === m[fe]);
    }
    function H(A) {
      const { onChange: Y, cascade: fe } = e;
      if (Ee())
        return;
      fe && z(A);
      const Se = o.value.some((Pn) => Pn.scrolling), Ue = o.value.some((Pn) => Pn.touching);
      if (Se || Ue)
        return;
      const { values: Ae, indexes: rn, options: un } = K();
      y(rn), C(Y, Ae, rn, un), n.value = Ae;
    }
    function J() {
      if (e.cascade) {
        const A = o.value.find((Y) => Y.scrolling);
        A && (A.index = j(A, _i(A.scrollEl)), A.scrolling = !1, E(A), z(A));
      } else
        o.value.forEach((A) => {
          A.index = j(A, _i(A.scrollEl)), E(A);
        });
    }
    function te() {
      J();
      const { values: A, indexes: Y, options: fe } = K();
      y(Y), C(e.onConfirm, A, Y, fe);
    }
    function me() {
      J();
      const { values: A, indexes: Y, options: fe } = K();
      y(Y), C(e.onCancel, A, Y, fe);
    }
    return {
      optionHeight: r,
      optionCount: a,
      scrollColumns: o,
      columnHeight: l,
      center: i,
      Transition: xe,
      pt: g,
      t: an,
      n: wO,
      classes: kO,
      setScrollEl: T,
      getOptionKey: w,
      getValue: k,
      handlePopupUpdateShow: I,
      handleTouchstart: Z,
      handleTouchmove: x,
      handleTouchend: ve,
      handleTransitionend: ye,
      confirm: te,
      cancel: me,
      handleClick: L
    };
  }
});
Th.render = zO;
var fr = Th;
let st;
function Ot(e) {
  return new Promise((n) => {
    Ot.close();
    const o = Fe(e) ? { columns: e } : e, t = _e(o);
    t.dynamic = !0, t.teleport = "body", st = t;
    function r() {
      st === t && (st = null);
    }
    const { unmountInstance: a } = Ct(fr, t, {
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
  if (st == null)
    return;
  const e = st;
  st = null, je().then(() => {
    e.show = !1;
  });
};
Ot.Component = fr;
re(fr);
re(fr, Ot);
ie(Ot, zh);
const QB = fr;
var vs = Ot;
const Eh = {
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
}, nt = 100, Pr = 0, uo = 20, Hd = 2 * Math.PI * uo, { name: TO, n: EO, classes: BO } = ne("progress"), IO = ["aria-valuenow"], DO = ["viewBox"], AO = { key: 0 }, NO = ["id"], MO = ["offset", "stop-color"], VO = ["d", "stroke-width", "stroke-dasharray"], RO = ["d", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function LO(e, n) {
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
        N(
          "div",
          {
            class: p(e.classes(e.n("linear-block"), [e.track, e.n("linear-background")])),
            style: X({ height: e.toSizeUnit(e.lineWidth), background: e.trackColor })
          },
          [
            e.indeterminate ? (h(), S(
              "div",
              {
                key: 0,
                class: p(e.n("linear-indeterminate"))
              },
              [
                N(
                  "div",
                  {
                    class: p(e.classes(e.n(`linear--${e.type}`))),
                    style: X({ background: e.progressColor })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ),
                N(
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
            )) : (h(), S(
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
        e.label ? (h(), S(
          "div",
          {
            key: 0,
            class: p(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
          },
          [
            M(e.$slots, "default", {}, () => [
              Ie(
                le(e.linearProps.roundValue),
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
        class: p(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
        style: X({ width: e.toSizeUnit(e.size), height: e.toSizeUnit(e.size) })
      },
      [
        (h(), S("svg", {
          class: p(e.n("circle-svg")),
          viewBox: e.circleProps.viewBox
        }, [
          e.isPlainObject(e.color) ? (h(), S("defs", AO, [
            N("linearGradient", {
              id: e.id,
              x1: "100%",
              y1: "0%",
              x2: "0%",
              y2: "0%"
            }, [
              (h(!0), S(
                Me,
                null,
                Xe(e.linearGradientProgress, (o, t) => (h(), S("stop", {
                  key: t,
                  offset: o,
                  "stop-color": e.color[o]
                }, null, 8, MO))),
                128
                /* KEYED_FRAGMENT */
              ))
            ], 8, NO)
          ])) : q("v-if", !0),
          e.track ? (h(), S("path", {
            key: 1,
            class: p(e.n("circle-background")),
            d: e.circleProps.path,
            fill: "transparent",
            "stroke-width": e.circleProps.strokeWidth,
            "stroke-dasharray": e.CIRCUMFERENCE,
            style: X({
              stroke: e.trackColor
            })
          }, null, 14, VO)) : q("v-if", !0),
          N("path", {
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
          }, null, 14, RO)
        ], 10, DO)),
        e.label ? (h(), S(
          "div",
          {
            key: 0,
            class: p(e.classes(e.n("circle-label"), e.labelClass))
          },
          [
            M(e.$slots, "default", {}, () => [
              Ie(
                le(e.circleProps.roundValue),
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
  ], 10, IO);
}
const Bh = ee({
  name: TO,
  props: Eh,
  setup(e) {
    const n = Zf(), o = B(() => {
      const i = F(e.value), l = $n(i, Pr, nt), s = $n(Math.round(i), Pr, nt);
      return {
        width: `${l}%`,
        roundValue: `${s}%`,
        value: l
      };
    }), t = B(() => {
      const { size: i, lineWidth: l, value: s } = e, u = uo / (1 - en(l) / en(i)) * 2, c = `0 0 ${u} ${u}`, d = $n(Math.round(F(s)), Pr, nt), f = `${(nt - d) / nt * Hd}`, v = en(l) / en(i) * u, g = 0, m = -uo, w = 0, k = -2 * uo, y = `M ${u / 2} ${u / 2} m ${g} ${m} a ${uo} ${uo} 
        0 1 1 ${w} ${-k} a ${uo} ${uo} 0 1 1 ${-w} ${k}`;
      return {
        strokeWidth: v,
        viewBox: c,
        strokeOffset: f,
        roundValue: `${d}%`,
        path: y,
        value: $n(F(s), Pr, nt)
      };
    }), r = B(() => Rn(e.color) ? `url(#${n.value})` : e.color), a = B(
      () => Object.keys(e.color).sort((i, l) => parseFloat(i) - parseFloat(l))
    );
    return {
      id: n,
      linearProps: o,
      CIRCUMFERENCE: Hd,
      RADIUS: uo,
      circleProps: t,
      progressColor: r,
      linearGradientProgress: a,
      n: EO,
      classes: BO,
      toSizeUnit: Oe,
      isPlainObject: Rn
    };
  }
});
Bh.render = LO;
var zi = Bh;
re(zi);
ie(zi, Eh);
const xB = zi;
var ms = zi;
const Ih = {
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
var jd = (e, n, o) => new Promise((t, r) => {
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
const { name: FO, n: Yd, classes: UO } = ne("pull-refresh"), Wd = 150;
function HO(e, n) {
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
      N(
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
      M(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const Dh = ee({
  name: FO,
  components: { VarIcon: Je },
  props: Ih,
  setup(e) {
    const n = $(0), o = $(null), t = $(null), r = $(0), a = $("-125%"), i = $("arrow-down"), l = $("default"), s = $(!1), u = B(() => Math.abs(2 * n.value)), c = B(() => l.value === "success"), d = B(
      () => l.value !== "loading" && l.value !== "success" && !e.disabled
    ), f = B(() => ({
      transform: `translate3d(0px, ${sn(a.value) ? a.value : `${a.value}px`}, 0px) translate(-50%, 0)`,
      transition: s.value ? `transform ${e.animationDuration}ms` : void 0,
      background: c.value ? e.successBgColor : e.bgColor,
      color: c.value ? e.successColor : e.color
    })), { startTouch: v, moveTouch: g, endTouch: m, isReachTop: w } = $t();
    let k, y;
    de(
      () => e.modelValue,
      (U) => {
        U === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
          a.value = n.value, I();
        }, F(e.successDuration)));
      }
    ), yn(T), We(o, "touchmove", z);
    function b(U) {
      return jd(this, null, function* () {
        if (i.value !== U)
          return i.value = U, new Promise((j) => {
            window.setTimeout(j, Wd);
          });
      });
    }
    function P(U) {
      ("classList" in k ? k : document.body).classList[U](`${Yd()}--lock`);
    }
    function O(U) {
      if (v(U), n.value === 0) {
        const { width: j } = nn(t.value);
        n.value = -(j + j * 0.25);
      }
      y = Mo(U.target);
    }
    function z(U) {
      if (g(U), !d.value || !y || y !== k && ho(y) > 0 || ho(k) > 0)
        return;
      w(k) && Ne(U), l.value !== "pulling" && (l.value = "pulling", r.value = U.touches[0].clientY), w(k) && Tn(a.value) && a.value > n.value && P("add");
      const W = (U.touches[0].clientY - r.value) / 2 + n.value;
      a.value = W >= u.value ? u.value : W, b(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function D() {
      return jd(this, null, function* () {
        m(), d.value && (s.value = !0, F(a.value) >= u.value * 0.2 ? (yield b("refresh"), l.value = "loading", a.value = u.value * 0.3, C(e["onUpdate:modelValue"], !0), je(() => {
          C(e.onRefresh);
        }), P("remove")) : (l.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          s.value = !1, P("remove");
        }, F(e.animationDuration))), y = null);
      });
    }
    function T() {
      k = e.target ? rp(e.target, "PullRefresh") : Mo(o.value);
    }
    function I() {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, F(e.animationDuration));
    }
    return {
      ICON_TRANSITION: Wd,
      refreshStatus: l,
      freshNode: o,
      controlNode: t,
      iconName: i,
      controlStyle: f,
      isSuccess: c,
      n: Yd,
      classes: UO,
      handleTouchstart: O,
      handleTouchmove: z,
      handleTouchend: D
    };
  }
});
Dh.render = HO;
var Ti = Dh;
re(Ti);
ie(Ti, Ih);
const _B = Ti;
var hs = Ti;
const Ah = {
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
}, Nh = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function jO() {
  const { bindChildren: e, childProviders: n, length: o } = kn(
    Nh
  );
  return {
    length: o,
    radios: n,
    bindRadios: e
  };
}
function YO() {
  const { bindParent: e, parentProvider: n, index: o } = wn(Nh);
  return {
    index: o,
    radioGroup: n,
    bindRadioGroup: e
  };
}
const { name: WO, n: KO, classes: qO } = ne("radio"), XO = ["tabindex"];
function GO(e, n) {
  const o = _("var-icon"), t = _("var-hover-overlay"), r = _("var-form-details"), a = Ye("ripple"), i = Ye("hover");
  return h(), S(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      N(
        "div",
        He({
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
            style: X({ color: e.checked ? e.checkedColor : e.uncheckedColor }),
            onFocus: n[0] || (n[0] = (l) => e.isFocusing = !0),
            onBlur: n[1] || (n[1] = (l) => e.isFocusing = !1)
          }, [
            e.checked ? M(e.$slots, "checked-icon", { key: 0 }, () => [
              G(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                "var-radio-cover": "",
                name: "radio-marked",
                size: e.iconSize
              }, null, 8, ["class", "size"])
            ]) : M(e.$slots, "unchecked-icon", { key: 1 }, () => [
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
          ], 46, XO)), [
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
              M(e.$slots, "default", { checked: e.checked })
            ],
            2
            /* CLASS */
          )) : q("v-if", !0)
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
const Mh = ee({
  name: WO,
  directives: { Ripple: tn, Hover: Dn },
  components: {
    VarIcon: Je,
    VarFormDetails: En,
    VarHoverOverlay: Fn
  },
  inheritAttrs: !1,
  props: Ah,
  setup(e) {
    const n = $(), o = $(!1), t = Gn(e, "modelValue"), r = B(() => t.value === e.checkedValue), a = $(!1), { radioGroup: i, bindRadioGroup: l } = YO(), { hovering: s, handleHovering: u } = eo(), { form: c, bindForm: d } = Hn(), {
      errorMessage: f,
      validateWithTrigger: v,
      validate: g,
      // expose
      resetValidation: m
    } = Un(), w = {
      sync: D,
      validate: I,
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
    C(l, w), C(d, w), We(() => window, "keydown", k), We(() => window, "keyup", y);
    function k(j) {
      if (!o.value)
        return;
      const { key: W } = j;
      (W === "Enter" || W === " ") && Ne(j), W === "Enter" && n.value.click();
    }
    function y(j) {
      o.value && j.key === " " && (Ne(j), n.value.click());
    }
    function b(j) {
      je(() => {
        const { validateTrigger: W, rules: K, modelValue: E } = e;
        v(W, j, K, E);
      });
    }
    function P(j) {
      const { checkedValue: W, onChange: K } = e;
      i && t.value === W || (t.value = j, C(K, t.value), i == null || i.onToggle(W), b("onChange"));
    }
    function O(j) {
      const { disabled: W, readonly: K, uncheckedValue: E, checkedValue: R, onClick: L } = e;
      c != null && c.disabled.value || W || (C(L, j), !(c != null && c.readonly.value || K) && (a.value = !0, P(r.value ? E : R)));
    }
    function z() {
      n.value.focus();
    }
    function D(j) {
      const { checkedValue: W, uncheckedValue: K } = e;
      t.value = j === W ? W : K;
    }
    function T() {
      t.value = e.uncheckedValue, m();
    }
    function I() {
      return g(e.rules, e.modelValue);
    }
    function U(j) {
      const { uncheckedValue: W, checkedValue: K } = e;
      ![W, K].includes(j) && (j = r.value ? W : K), P(j);
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
      n: KO,
      classes: qO,
      handleClick: O,
      handleTextClick: z,
      toggle: U,
      reset: T,
      validate: I,
      resetValidation: m
    };
  }
});
Mh.render = GO;
var Ei = Mh;
re(Ei);
ie(Ei, Ah);
const eI = Ei;
var aa = Ei;
const Vh = {
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
}, { name: ZO, n: JO, classes: QO } = ne("radio-group");
function xO(e, n) {
  const o = _("maybe-v-node"), t = _("var-radio"), r = _("var-form-details");
  return h(), S(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      N(
        "div",
        {
          class: p(e.classes(e.n(), e.n(`--${e.direction}`)))
        },
        [
          e.options.length ? (h(!0), S(
            Me,
            { key: 0 },
            Xe(e.options, (a) => (h(), Ce(t, {
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
          M(e.$slots, "default")
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
const Rh = ee({
  name: ZO,
  components: { VarFormDetails: En, VarRadio: aa, MaybeVNode: ar },
  props: Vh,
  setup(e) {
    const { length: n, radios: o, bindRadios: t } = jO(), { bindForm: r } = Hn(), {
      errorMessage: a,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = Un(), u = B(() => a.value), c = {
      onToggle: m,
      validate: w,
      reset: k,
      resetValidation: s,
      errorMessage: u
    };
    de(() => e.modelValue, g), de(() => n.value, g), C(r, c), t(c), We(() => window, "keydown", d);
    function d(y) {
      const b = o.findIndex(({ isFocusing: O }) => O.value);
      if (!(b === -1 || !o.some(({ moveable: O }, z) => z === b ? !1 : O()))) {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(y.key) && Ne(y), y.key === "ArrowUp" || y.key === "ArrowLeft") {
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
      je(() => {
        const { validateTrigger: b, rules: P, modelValue: O } = e;
        i(b, y, P, O);
      });
    }
    function g() {
      return o.forEach(({ sync: y }) => y(e.modelValue));
    }
    function m(y) {
      C(e["onUpdate:modelValue"], y), C(e.onChange, y), v("onChange");
    }
    function w() {
      return l(e.rules, e.modelValue);
    }
    function k() {
      C(e["onUpdate:modelValue"], void 0), s();
    }
    return {
      errorMessage: a,
      n: JO,
      classes: QO,
      reset: k,
      validate: w,
      resetValidation: s,
      isFunction: mn
    };
  }
});
Rh.render = xO;
var Bi = Rh;
re(Bi);
ie(Bi, Vh);
const nI = Bi;
var gs = Bi;
const Lh = {
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
  onChange: V(),
  "onUpdate:modelValue": V()
}, { name: _O, n: Et } = ne("rate"), ez = ["onClick"];
function nz(e, n) {
  const o = _("var-icon"), t = _("var-hover-overlay"), r = _("var-form-details"), a = Ye("ripple"), i = Ye("hover");
  return h(), S(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      N(
        "div",
        {
          class: p(e.n())
        },
        [
          (h(!0), S(
            Me,
            null,
            Xe(e.toNumber(e.count), (l) => Ve((h(), S("div", {
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
            ], 14, ez)), [
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
const Fh = ee({
  name: _O,
  components: {
    VarIcon: Je,
    VarFormDetails: En,
    VarHoverOverlay: Fn
  },
  directives: { Ripple: tn, Hover: Dn },
  props: Lh,
  setup(e) {
    const n = $(-1), { form: o, bindForm: t } = Hn(), { errorMessage: r, validateWithTrigger: a, validate: i, resetValidation: l } = Un(), { hovering: s } = eo();
    let u = F(e.modelValue);
    C(t, {
      reset: b,
      validate: m,
      resetValidation: l
    });
    function d(P) {
      const { count: O, gap: z } = e;
      return {
        color: v(P).color,
        marginRight: P !== F(O) ? Oe(z) : 0
      };
    }
    function f(P) {
      const { name: O, color: z } = v(P);
      return {
        [Et("content")]: !0,
        [Et("--disabled")]: (o == null ? void 0 : o.disabled.value) || e.disabled,
        [Et("--error")]: r.value,
        [Et("--primary")]: O !== e.emptyIcon && !z
      };
    }
    function v(P) {
      const {
        modelValue: O,
        disabled: z,
        disabledColor: D,
        color: T,
        half: I,
        emptyColor: U,
        icon: j,
        halfIcon: W,
        emptyIcon: K,
        namespace: E,
        halfIconNamespace: R,
        emptyIconNamespace: L
      } = e;
      let Z = T;
      return (z || o != null && o.disabled.value) && (Z = D), P <= O ? { color: Z, name: j, namespace: E } : I && P <= O + 0.5 ? { color: Z, name: W, namespace: R } : {
        color: z || o != null && o.disabled.value ? D : U,
        name: K,
        namespace: L
      };
    }
    function g(P, O) {
      const { half: z, clearable: D } = e, { offsetWidth: T } = O.target;
      z && O.offsetX <= Math.floor(T / 2) && (P -= 0.5), u === P && D && (P = 0), u !== P && (C(e["onUpdate:modelValue"], P), C(e.onChange, P)), u = P;
    }
    function m() {
      return i(e.rules, e.modelValue);
    }
    function w() {
      return je(() => a(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function k(P, O) {
      const { readonly: z, disabled: D } = e;
      z || D || o != null && o.disabled.value || o != null && o.readonly.value || (g(P, O), w());
    }
    function y(P) {
      return (O) => {
        n.value = P, s.value = O;
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
      handleClick: k,
      createHoverHandler: y,
      reset: b,
      validate: m,
      resetValidation: l,
      toSizeUnit: Oe,
      toNumber: F,
      n: Et
    };
  }
});
Fh.render = nz;
var Ii = Fh;
re(Ii);
ie(Ii, Lh);
const oI = Ii;
var bs = Ii;
const oz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
};
function tz(e, n) {
  return h(), S("svg", oz, n[0] || (n[0] = [
    N(
      "path",
      { d: "M11,9H13V7H11M11,20H13V11H11V20Z" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const Uh = ee({});
Uh.render = tz;
var rz = Uh;
const az = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
};
function iz(e, n) {
  return h(), S("svg", az, n[0] || (n[0] = [
    N(
      "path",
      { d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const Hh = ee({});
Hh.render = iz;
var lz = Hh;
const sz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
};
function uz(e, n) {
  return h(), S("svg", sz, n[0] || (n[0] = [
    N(
      "path",
      { d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const jh = ee({});
jh.render = uz;
var cz = jh;
const { n: dz, classes: fz } = ne("result");
function pz(e, n) {
  return h(), S(
    Me,
    null,
    [
      N(
        "span",
        {
          class: p(e.n("success-cover-left"))
        },
        null,
        2
        /* CLASS */
      ),
      N(
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
      N(
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
      N(
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
      N(
        "span",
        {
          class: p(e.n("success-line-fix"))
        },
        null,
        2
        /* CLASS */
      ),
      N(
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
const Yh = ee({
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
      n: dz,
      classes: fz
    };
  }
});
Yh.render = pz;
var vz = Yh;
const mz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
};
function hz(e, n) {
  return h(), S("svg", mz, n[0] || (n[0] = [
    N(
      "path",
      { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const Wh = ee({});
Wh.render = hz;
var gz = Wh;
const bz = { viewBox: "-4 -4 32 32" };
function yz(e, n) {
  return h(), S("svg", bz, n[0] || (n[0] = [
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
const Kh = ee({});
Kh.render = yz;
var wz = Kh;
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
}, { name: kz, n: $z, classes: Cz } = ne("result");
function Sz(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      M(e.$slots, "image", {}, () => [
        e.type ? (h(), S(
          "div",
          {
            key: 0,
            class: p(e.n("image-container"))
          },
          [
            N(
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
                (h(), Ce(kt(e.type), {
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
      M(e.$slots, "title", {}, () => [
        e.title ? (h(), S(
          "div",
          {
            key: 0,
            class: p(e.n("title"))
          },
          le(e.title),
          3
          /* TEXT, CLASS */
        )) : q("v-if", !0)
      ]),
      M(e.$slots, "description", {}, () => [
        e.description ? (h(), S(
          "div",
          {
            key: 0,
            class: p(e.n("description"))
          },
          le(e.description),
          3
          /* TEXT, CLASS */
        )) : q("v-if", !0)
      ]),
      e.$slots.footer ? (h(), S(
        "div",
        {
          key: 0,
          class: p(e.n("footer"))
        },
        [
          M(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Xh = ee({
  name: kz,
  components: {
    Info: rz,
    Success: vz,
    Warning: cz,
    Error: lz,
    Question: gz,
    Empty: wz
  },
  props: qh,
  setup(e) {
    const n = B(
      () => `calc(${e.imageSize ? Oe(e.imageSize) : "var(--result-image-size)"} * 0.9)`
    ), o = B(
      () => `calc(${e.imageSize ? Oe(e.imageSize) : "var(--result-image-size)"} * 0.05)`
    );
    return {
      circleSize: n,
      borderSize: o,
      n: $z,
      classes: Cz
    };
  }
});
Xh.render = Sz;
var Di = Xh;
re(Di);
ie(Di, qh);
const tI = Di;
var ys = Di;
const Gh = {
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
}, { name: Pz, n: Oz, classes: zz } = ne("row");
function Tz(e, n) {
  return h(), S(
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
      M(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Zh = ee({
  name: Pz,
  props: Gh,
  setup(e) {
    const n = B(
      () => Fe(e.gutter) ? e.gutter.map((r) => en(r) / 2) : [0, en(e.gutter) / 2]
    ), { bindCols: o } = fC();
    o({ average: n });
    function t(r) {
      C(e.onClick, r);
    }
    return {
      average: n,
      n: Oz,
      classes: zz,
      handleClick: t,
      padStartFlex: Xr
    };
  }
});
Zh.render = Tz;
var Ai = Zh;
re(Ai);
ie(Ai, Gh);
const rI = Ai;
var ws = Ai, Ez = Object.defineProperty, Kd = Object.getOwnPropertySymbols, Bz = Object.prototype.hasOwnProperty, Iz = Object.prototype.propertyIsEnumerable, qd = (e, n, o) => n in e ? Ez(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Dz = (e, n) => {
  for (var o in n || (n = {}))
    Bz.call(n, o) && qd(e, o, n[o]);
  if (Kd)
    for (var o of Kd(n))
      Iz.call(n, o) && qd(e, o, n[o]);
  return e;
};
const Jh = Dz({
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
}, De(ya, [
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
])), { name: Az, n: Nz, classes: Mz } = ne("select"), Vz = ["tabindex"];
function Rz(e, n) {
  const o = _("maybe-v-node"), t = _("var-chip"), r = _("var-icon"), a = _("var-field-decorator"), i = _("var-option"), l = _("var-menu"), s = _("var-form-details");
  return h(), S("div", {
    ref: "root",
    class: p(e.n()),
    tabindex: e.disabled || e.formDisabled ? void 0 : "0",
    onFocus: n[3] || (n[3] = (...u) => e.handleFocus && e.handleFocus(...u)),
    onBlur: n[4] || (n[4] = (...u) => e.handleRootBlur && e.handleRootBlur(...u))
  }, [
    G(l, {
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
        N(
          "div",
          {
            ref: "menuEl",
            class: p(e.classes(e.n("scroller"), e.n("$-elevation--3")))
          },
          [
            e.options.length ? (h(!0), S(
              Me,
              { key: 0 },
              Xe(e.options, (u) => (h(), Ce(i, {
                key: u[e.valueKey],
                label: u[e.labelKey],
                value: u[e.valueKey],
                option: u,
                disabled: u.disabled
              }, null, 8, ["label", "value", "option", "disabled"]))),
              128
              /* KEYED_FRAGMENT */
            )) : q("v-if", !0),
            M(e.$slots, "default")
          ],
          2
          /* CLASS */
        )
      ]),
      default: ce(() => [
        G(
          a,
          To(er({
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
          ut({
            "clear-icon": ce(({ clear: u }) => [
              M(e.$slots, "clear-icon", { clear: u })
            ]),
            "append-icon": ce(() => [
              M(e.$slots, "append-icon")
            ]),
            default: ce(() => [
              N(
                "div",
                {
                  class: p(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                  style: X({
                    textAlign: e.textAlign,
                    color: e.textColor
                  })
                },
                [
                  N(
                    "div",
                    {
                      class: p(e.n("label"))
                    },
                    [
                      e.isEmptyModelValue ? q("v-if", !0) : M(e.$slots, "selected", { key: 0 }, () => [
                        e.multiple ? (h(), S(
                          Me,
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
                                  Me,
                                  null,
                                  Xe(e.labels, (u) => (h(), Ce(t, {
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
                                class: p(e.n("values"))
                              },
                              [
                                (h(!0), S(
                                  Me,
                                  null,
                                  Xe(e.labels, (u, c) => (h(), S(
                                    Me,
                                    { key: u },
                                    [
                                      G(o, { is: u }, null, 8, ["is"]),
                                      Ie(
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
                      class: p(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
                      style: X({
                        color: e.placeholderColor
                      })
                    },
                    le(e.placeholder),
                    7
                    /* TEXT, CLASS, STYLE */
                  )) : q("v-if", !0),
                  M(e.$slots, "arrow-icon", {
                    focus: e.isFocusing,
                    menuOpen: e.showMenu
                  }, () => [
                    G(r, {
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
                M(e.$slots, "prepend-icon")
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
      onClick: n[2] || (n[2] = Xn(() => {
      }, ["stop"]))
    }, null, 8, ["error-message"])
  ], 42, Vz);
}
const Qh = ee({
  name: Az,
  components: {
    VarIcon: Je,
    VarMenu: jt,
    VarChip: Jr,
    VarOption: ra,
    VarFieldDecorator: Lt,
    VarFormDetails: En,
    MaybeVNode: ar
  },
  props: Jh,
  setup(e) {
    const n = $(!1), o = $(!1), t = $(null), r = B(() => e.multiple), a = B(() => e.focusColor), i = B(() => Wn(e.modelValue)), l = B(() => e.disabled || e.readonly ? "" : "pointer"), s = $(0), { bindForm: u, form: c } = Hn(), { length: d, options: f, bindOptions: v } = x4(), { label: g, labels: m, computeLabel: w, getSelectedValue: k } = _p({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => f,
      optionProvidersLength: () => d.value
    }), {
      errorMessage: y,
      validateWithTrigger: b,
      validate: P,
      // expose
      resetValidation: O
    } = Un(), z = $(null), D = B(() => e.variant === "outlined" ? "bottom" : "cover-top"), T = B(() => {
      const { hint: A, blurColor: Y, focusColor: fe } = e;
      if (!A)
        return y.value ? "var(--field-decorator-error-color)" : n.value ? fe || "var(--field-decorator-focus-color)" : Y || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    }), I = B(() => !e.hint && Wn(e.modelValue)), U = {
      multiple: r,
      focusColor: a,
      computeLabel: w,
      onSelect: x,
      reset: me,
      validate: te,
      resetValidation: O
    };
    de(
      () => e.multiple,
      () => {
        Ln(
          e.multiple && Fe(e.modelValue),
          "Select",
          "The modelValue must be an array when multiple is true"
        );
      }
    ), v(U), We(() => window, "keydown", j), We(() => window, "keyup", W), C(u, U);
    function j(A) {
      const { disabled: Y, readonly: fe } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || Y || fe || !n.value)
        return;
      const { key: Se } = A;
      if (Se === " " && !o.value) {
        Ne(A);
        return;
      }
      if (Se === "Escape" && o.value) {
        t.value.focus(), Ne(A), o.value = !1;
        return;
      }
      if (Se === "Tab" && o.value) {
        t.value.focus(), Ne(A), R();
        return;
      }
      if (Se === "Enter" && !o.value) {
        Ne(A), o.value = !0;
        return;
      }
      (Se === "ArrowDown" || Se === "ArrowUp") && o.value && (Ne(A), ip(t.value, z.value, Se));
    }
    function W(A) {
      const { disabled: Y, readonly: fe } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || Y || fe || o.value || !n.value)
        return;
      const { key: Se } = A;
      Se === " " && !o.value && (Ne(A), o.value = !0);
    }
    function K(A) {
      je(() => {
        const { validateTrigger: Y, rules: fe, modelValue: Se } = e;
        b(Y, A, fe, Se);
      });
    }
    function E() {
      const { disabled: A, readonly: Y, onFocus: fe } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || A || Y || (s.value = en(e.offsetY), H(), C(fe), K("onFocus"));
    }
    function R() {
      const { disabled: A, readonly: Y, onBlur: fe } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || A || Y || (J(), C(fe), K("onBlur"));
    }
    function L() {
      o.value || R();
    }
    function Z() {
      n.value && R();
    }
    function x(A) {
      const { disabled: Y, readonly: fe, multiple: Se, onChange: Ue } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || Y || fe)
        return;
      const Ae = k(A);
      C(e["onUpdate:modelValue"], Ae), C(Ue, Ae), K("onChange"), Se || (t.value.focus(), bn().then(() => {
        o.value = !1;
      }));
    }
    function ve() {
      const { disabled: A, readonly: Y, multiple: fe, clearable: Se, onClear: Ue } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || A || Y || !Se)
        return;
      const Ae = fe ? [] : void 0;
      C(e["onUpdate:modelValue"], Ae), C(Ue, Ae), K("onClear");
    }
    function ye(A) {
      const { disabled: Y, onClick: fe } = e;
      c != null && c.disabled.value || Y || (C(fe, A), K("onClick"));
    }
    function Ee(A) {
      const { disabled: Y, readonly: fe, modelValue: Se, onClose: Ue } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || Y || fe)
        return;
      const Ae = f.find(({ label: un }) => un.value === A), rn = Se.filter(
        (un) => {
          var Pn;
          return un !== ((Pn = Ae.value.value) != null ? Pn : Ae.label.value);
        }
      );
      C(e["onUpdate:modelValue"], rn), C(Ue, rn), K("onClose");
    }
    function H() {
      s.value = en(e.offsetY), n.value = !0;
    }
    function J() {
      n.value = !1, o.value = !1;
    }
    function te() {
      return P(e.rules, e.modelValue);
    }
    function me() {
      C(e["onUpdate:modelValue"], e.multiple ? [] : void 0), O();
    }
    return {
      root: t,
      offsetY: s,
      isFocusing: n,
      showMenu: o,
      errorMessage: y,
      formDisabled: c == null ? void 0 : c.disabled,
      formReadonly: c == null ? void 0 : c.readonly,
      label: g,
      labels: m,
      isEmptyModelValue: i,
      menuEl: z,
      placement: D,
      cursor: l,
      placeholderColor: T,
      enableCustomPlaceholder: I,
      isFunction: mn,
      n: Nz,
      classes: Mz,
      handleFocus: E,
      handleBlur: R,
      handleClickOutside: Z,
      handleClear: ve,
      handleClick: ye,
      handleClose: Ee,
      handleRootBlur: L,
      reset: me,
      validate: te,
      resetValidation: O,
      focus: H,
      blur: J
    };
  }
});
Qh.render = Rz;
var Ni = Qh;
re(Ni);
ie(Ni, Jh);
const aI = Ni;
var ks = Ni;
const xh = {
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
}, { name: Lz, n: Fz, classes: Uz } = ne("skeleton");
function Hz(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n("$--box"), e.n()))
    },
    [
      e.loading ? q("v-if", !0) : (h(), S(
        "div",
        {
          key: 0,
          class: p(e.n("data"))
        },
        [
          M(e.$slots, "default")
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
              style: X({ height: e.toSizeUnit(e.cardHeight) })
            },
            [
              N(
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
          )) : q("v-if", !0),
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
                  style: X({
                    width: e.toSizeUnit(e.avatarSize),
                    height: e.toSizeUnit(e.avatarSize)
                  })
                },
                [
                  N(
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
              )) : q("v-if", !0),
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
                      style: X({ width: e.toSizeUnit(e.titleWidth) })
                    },
                    [
                      N(
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
                  )) : q("v-if", !0),
                  (h(!0), S(
                    Me,
                    null,
                    Xe(e.toNumber(e.rows), (o, t) => (h(), S(
                      "div",
                      {
                        class: p(e.n("row")),
                        key: o,
                        style: X({ width: e.toSizeUnit(e.rowsWidth[t]) })
                      },
                      [
                        N(
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
          class: p(e.n("fullscreen")),
          style: X({ zIndex: e.toNumber(e.fullscreenZIndex) })
        },
        [
          N(
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
      )) : q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const _h = ee({
  name: Lz,
  props: xh,
  setup: () => ({
    n: Fz,
    classes: Uz,
    toSizeUnit: Oe,
    toNumber: F
  })
});
_h.render = Hz;
var Mi = _h;
re(Mi);
ie(Mi, xh);
const iI = Mi;
var $s = Mi, cn = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(cn || {});
const eg = {
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
}, { name: jz, n: Xd, classes: Yz } = ne("slider"), Wz = ["tabindex", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-disabled", "aria-valuetext", "onTouchstart", "onFocusin", "onFocusout"];
function Kz(e, n) {
  const o = _("var-hover-overlay"), t = _("var-form-details"), r = Ye("hover");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(e.direction), e.n("$--box")))
    },
    [
      N(
        "div",
        {
          class: p(e.classes(e.n(`${e.direction}-block`), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(`${e.direction}--error`)])),
          ref: "sliderEl",
          onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
        },
        [
          N(
            "div",
            {
              class: p(e.n(`${e.direction}-track`))
            },
            [
              N(
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
              N(
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
          (h(!0), S(
            Me,
            null,
            Xe(e.thumbList, (a) => (h(), S("div", {
              class: p(e.n(`${e.direction}-thumb`)),
              key: a.enumValue,
              style: X(e.thumbStyle(a)),
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
              M(e.$slots, "button", {
                currentValue: a.text
              }, () => [
                Ve(N(
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
                N(
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
                N(
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
                    N(
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
            ], 46, Wz))),
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
const ng = ee({
  name: jz,
  components: {
    VarFormDetails: En,
    VarHoverOverlay: Fn
  },
  directives: { Hover: Dn },
  props: eg,
  setup(e) {
    const n = $(0), o = $(null), t = $(!1), r = B(() => F(e.max) - F(e.min)), a = B(() => n.value / r.value * F(e.step)), i = B(() => e.disabled || (f == null ? void 0 : f.disabled.value)), l = B(() => e.readonly || (f == null ? void 0 : f.readonly.value)), s = B(() => e.direction === "vertical"), u = $(!1), c = $(!1), { bindForm: d, form: f } = Hn(), { errorMessage: v, validateWithTrigger: g, validate: m, resetValidation: w } = Un(), { hovering: k, handleHovering: y } = eo(), { hovering: b, handleHovering: P } = eo(), O = B(() => {
      const { modelValue: oe, range: ue } = e;
      let we = [];
      return ue && Fe(oe) ? we = [
        {
          value: Z(oe[0]),
          enumValue: cn.First,
          text: x(oe[0]),
          hovering: k.value,
          focusing: u.value,
          handleHovering: y,
          handleFocusing(Be) {
            u.value = Be;
          }
        },
        {
          value: Z(oe[1]),
          enumValue: cn.Second,
          text: x(oe[1]),
          hovering: b.value,
          focusing: c.value,
          handleHovering: P,
          handleFocusing(Be) {
            c.value = Be;
          }
        }
      ] : Tn(oe) && (we = [
        {
          value: Z(oe),
          enumValue: cn.First,
          text: x(oe),
          hovering: k.value,
          focusing: u.value,
          handleHovering: y,
          handleFocusing(Be) {
            u.value = Be;
          }
        }
      ]), we;
    }), z = B(() => {
      const { activeColor: oe, range: ue, modelValue: we } = e, Be = ue && Fe(we) ? Z(Math.min(we[0], we[1])) : 0, Qe = ue && Fe(we) ? Z(Math.max(we[0], we[1])) - Be : Z(we);
      return s.value ? {
        left: "0px",
        height: `${Qe}%`,
        bottom: `${Be}%`,
        background: oe
      } : {
        top: "0px",
        width: `${Qe}%`,
        left: `${Be}%`,
        background: oe
      };
    }), D = _e({
      [cn.First]: W(),
      [cn.Second]: W()
    });
    let T;
    C(d, {
      reset: rn,
      validate: j,
      resetValidation: w
    }), de([() => e.modelValue, () => e.step], ([oe, ue]) => {
      !Se() || !Ue() || t.value || Ae(oe, F(ue));
    }), de(n, () => Ae()), yn(() => {
      !Se() || !Ue() || U();
    }), ia(te), We(() => window, "keydown", Pn), lo(U);
    function U() {
      n.value = o.value[s.value ? "offsetHeight" : "offsetWidth"];
    }
    function j() {
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
    function K() {
      return je(() => g(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function E(oe) {
      const ue = oe.currentTarget;
      return ue ? s.value ? n.value - (oe.clientY - nn(ue).top) : oe.clientX - L0(ue) : 0;
    }
    function R(oe) {
      return {
        [s.value ? "bottom" : "left"]: `${oe.value}%`,
        zIndex: D[oe.enumValue].active ? 1 : void 0
      };
    }
    function L(oe) {
      return e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : D[oe].active;
    }
    function Z(oe) {
      const { min: ue, max: we } = e;
      return oe < F(ue) ? 0 : oe > F(we) ? 100 : (oe - F(ue)) / r.value * 100;
    }
    function x(oe) {
      if (!Tn(oe))
        return 0;
      const ue = $n(oe, F(e.min), F(e.max));
      return parseInt(`${ue}`, 10) === ue ? ue : F(ue.toPrecision(5));
    }
    function ve(oe, ue) {
      i.value || ue.handleHovering(oe);
    }
    function ye(oe) {
      C(e.onChange, oe), C(e["onUpdate:modelValue"], oe), K();
    }
    function Ee(oe, ue) {
      let we = [];
      const { step: Be, range: Qe, modelValue: ae, min: ke } = e, ze = F(Be), Re = Math.round(oe / a.value), Le = Re * ze + F(ke), fn = D[ue].percentValue * ze + F(ke);
      if (D[ue].percentValue = Re, Qe && Fe(ae) && (we = ue === cn.First ? [Le, ae[1]] : [ae[0], Le]), fn !== Le) {
        const hn = Qe ? we.map((gn) => x(gn)) : x(Le);
        ye(hn);
      }
    }
    function H(oe) {
      if (!e.range)
        return cn.First;
      const ue = D[cn.First].percentValue * a.value, we = D[cn.Second].percentValue * a.value, Be = Math.abs(oe - ue), Qe = Math.abs(oe - we);
      return Be <= Qe ? cn.First : cn.Second;
    }
    function J() {
      document.addEventListener("touchmove", A, { passive: !1 }), document.addEventListener("touchend", Y), document.addEventListener("touchcancel", Y);
    }
    function te() {
      document.removeEventListener("touchmove", A), document.removeEventListener("touchend", Y), document.removeEventListener("touchcancel", Y);
    }
    function me(oe, ue) {
      if (U(), i.value || (D[ue].active = !0), T = ue, J(), i.value || l.value)
        return;
      C(e.onStart), t.value = !0;
      const { clientX: we, clientY: Be } = oe.touches[0];
      D[ue].startPosition = s.value ? Be : we;
    }
    function A(oe) {
      if (Ne(oe), i.value || l.value || !t.value)
        return;
      const { startPosition: ue, currentOffset: we } = D[T], { clientX: Be, clientY: Qe } = oe.touches[0];
      let ae = (s.value ? ue - Qe : Be - ue) + we;
      ae <= 0 ? ae = 0 : ae >= n.value && (ae = n.value), Ee(ae, T);
    }
    function Y() {
      te();
      const { range: oe, modelValue: ue, onEnd: we, step: Be, min: Qe } = e;
      if (i.value || (D[T].active = !1), i.value || l.value)
        return;
      let ae = [];
      D[T].currentOffset = D[T].percentValue * a.value;
      const ke = D[T].percentValue * F(Be) + F(Qe);
      oe && Fe(ue) && (ae = T === cn.First ? [ke, ue[1]] : [ue[0], ke]), C(we, oe ? ae : ke), t.value = !1;
    }
    function fe(oe) {
      if (i.value || l.value || oe.target.closest(`.${Xd("thumb")}`))
        return;
      const ue = E(oe), we = H(ue);
      T = we, Ee(ue, we), Y();
    }
    function Se() {
      return F(e.step) <= 0 ? (n0("Slider", '"step" should be > 0'), !1) : !0;
    }
    function Ue() {
      const { range: oe, modelValue: ue } = e;
      return oe && !Fe(ue) ? (lt("Slider", '"modelValue" should be an Array'), !1) : !oe && Fe(ue) ? (lt("Slider", '"modelValue" should be a Number'), !1) : oe && Fe(ue) && ue.length < 2 ? (lt("Slider", '"modelValue" should have two value'), !1) : !0;
    }
    function Ae(oe = e.modelValue, ue = F(e.step)) {
      const we = (Be) => {
        const { min: Qe, max: ae } = e;
        return Be < F(Qe) ? 0 : Be > F(ae) ? r.value / ue : (Be - F(Qe)) / ue;
      };
      e.range && Fe(oe) ? (D[cn.First].percentValue = we(oe[0]), D[cn.First].currentOffset = D[cn.First].percentValue * a.value, D[cn.Second].percentValue = we(oe[1]), D[cn.Second].currentOffset = D[cn.Second].percentValue * a.value) : Tn(oe) && (D[cn.First].currentOffset = we(oe) * a.value);
    }
    function rn() {
      const oe = e.range ? [0, 0] : 0;
      C(e["onUpdate:modelValue"], oe), w();
    }
    function un(oe, ue) {
      const we = F(e.step);
      if (Fe(ue)) {
        const Be = ue[0] + (u.value ? oe * we : 0), Qe = ue[1] + (c.value ? oe * we : 0);
        return [Be, Qe].map(x);
      }
      return x(ue + oe * we);
    }
    function Pn(oe) {
      const ue = {
        ArrowRight: 1,
        ArrowUp: 1,
        ArrowLeft: -1,
        ArrowDown: -1
      }, { key: we } = oe;
      if (!Xo(ue, we) || l.value || i.value || e.range && !u.value && !c.value || !e.range && !u.value)
        return;
      Ne(oe);
      const Be = ue[we], Qe = un(Be, e.modelValue);
      ye(Qe);
    }
    function pe(oe) {
      i.value || oe.handleFocusing(!0);
    }
    function Ke(oe) {
      oe.handleFocusing(!1);
    }
    return {
      sliderEl: o,
      getFillStyle: z,
      isDisabled: i,
      isVertical: s,
      errorMessage: v,
      thumbsProps: D,
      thumbList: O,
      handleFocus: pe,
      handleBlur: Ke,
      n: Xd,
      classes: Yz,
      thumbStyle: R,
      hover: ve,
      toSizeUnit: Oe,
      toNumber: F,
      showLabel: L,
      start: me,
      move: A,
      end: Y,
      handleClick: fe
    };
  }
});
ng.render = Kz;
var Vi = ng;
re(Vi);
ie(Vi, eg);
const lI = Vi;
var Cs = Vi, qz = Object.defineProperty, Xz = Object.defineProperties, Gz = Object.getOwnPropertyDescriptors, Gd = Object.getOwnPropertySymbols, Zz = Object.prototype.hasOwnProperty, Jz = Object.prototype.propertyIsEnumerable, Zd = (e, n, o) => n in e ? qz(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Qz = (e, n) => {
  for (var o in n || (n = {}))
    Zz.call(n, o) && Zd(e, o, n[o]);
  if (Gd)
    for (var o of Gd(n))
      Jz.call(n, o) && Zd(e, o, n[o]);
  return e;
}, xz = (e, n) => Xz(e, Gz(n));
const Eu = {
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
  loadingColor: xz(Qz({}, De(co, "color")), {
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
}, { n: _z, classes: e2 } = ne("snackbar"), n2 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function o2(e, n) {
  const o = _("var-icon"), t = _("var-loading");
  return Ve((h(), S(
    "div",
    {
      class: p(e.n()),
      style: X({ pointerEvents: e.isForbidClick ? "auto" : "none", zIndex: e.zIndex })
    },
    [
      N(
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
          N(
            "div",
            {
              class: p([e.n("content"), e.contentClass])
            },
            [
              M(e.$slots, "default", {}, () => [
                Ie(
                  le(e.content),
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
              e.iconName ? (h(), Ce(o, {
                key: 0,
                name: e.iconName
              }, null, 8, ["name"])) : q("v-if", !0),
              e.type === "loading" ? (h(), Ce(t, {
                key: 1,
                type: e.loadingType,
                size: e.loadingSize,
                color: e.loadingColor,
                radius: e.loadingRadius
              }, null, 8, ["type", "size", "color", "radius"])) : q("v-if", !0),
              M(e.$slots, "icon")
            ],
            2
            /* CLASS */
          )) : q("v-if", !0),
          e.$slots.action ? (h(), S(
            "div",
            {
              key: 1,
              class: p(e.n("action"))
            },
            [
              M(e.$slots, "action")
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
    [_n, e.show]
  ]);
}
const og = ee({
  name: "VarSnackbarCore",
  components: {
    VarLoading: ht,
    VarIcon: Je
  },
  props: Eu,
  setup(e) {
    const n = $(null), { zIndex: o } = lr(() => e.show, 1);
    ir(
      () => e.show,
      () => e.lockScroll
    );
    const t = B(() => {
      const { type: i, forbidClick: l } = e;
      return i === "loading" || l;
    }), r = B(() => e.type ? n2[e.type] : "");
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
    ), yn(() => {
      e.show && (C(e.onOpen), a());
    }), {
      SNACKBAR_TYPE: ag,
      zIndex: o,
      iconName: r,
      isForbidClick: t,
      n: _z,
      classes: e2,
      formatElevation: dn
    };
  }
});
og.render = o2;
var tg = og;
const { name: t2, n: r2 } = ne("snackbar");
function a2(e, n) {
  const o = _("var-snackbar-core");
  return h(), Ce(ao, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [
    G(xe, {
      name: `${e.n()}-fade`,
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed
    }, {
      default: ce(() => [
        G(o, He(e.$props, {
          class: e.n("transition")
        }), ut({
          default: ce(() => [
            M(e.$slots, "default")
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots.icon ? {
            name: "icon",
            fn: ce(() => [
              M(e.$slots, "icon")
            ]),
            key: "0"
          } : void 0,
          e.$slots.action ? {
            name: "action",
            fn: ce(() => [
              M(e.$slots, "action")
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
const rg = ee({
  name: t2,
  components: { VarSnackbarCore: tg },
  props: Eu,
  setup() {
    const { disabled: e } = xo();
    return {
      disabled: e,
      n: r2
    };
  }
});
rg.render = a2;
var Ri = rg, i2 = Object.defineProperty, Jd = Object.getOwnPropertySymbols, l2 = Object.prototype.hasOwnProperty, s2 = Object.prototype.propertyIsEnumerable, Qd = (e, n, o) => n in e ? i2(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Zt = (e, n) => {
  for (var o in n || (n = {}))
    l2.call(n, o) && Qd(e, o, n[o]);
  if (Jd)
    for (var o of Jd(n))
      s2.call(n, o) && Qd(e, o, n[o]);
  return e;
};
const ag = ["loading", "success", "warning", "info", "error"];
let xd = 0, Ss = !1, ig, Jt = !1;
const lg = {
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
let qn = _e([]), Bu = lg;
const u2 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, ll = (e) => () => mn(e) ? e() : e, c2 = {
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
        }, h2(o.position)), {
          content: i,
          icon: l,
          action: s
        } = o, u = {
          default: ll(i),
          icon: ll(l),
          action: ll(s)
        };
        return G(tg, He(o, {
          key: n,
          style: a,
          "data-id": n,
          _update: t,
          show: o.show,
          "onUpdate:show": (c) => o.show = c
        }), u);
      });
      return G(Gg, He(u2, {
        style: {
          zIndex: Vn.zIndex
        },
        onAfterEnter: d2,
        onAfterLeave: f2
      }), {
        default: () => [e]
      });
    };
  }
}, ro = function(e) {
  const n = v2(e), o = _e(Zt(Zt({}, Bu), n));
  o.show = !0, Ss || (Ss = !0, ig = Ct(c2).unmountInstance);
  const {
    length: t
  } = qn, r = {
    id: xd++,
    reactiveSnackOptions: o
  };
  if (t === 0 || Jt)
    p2(r);
  else {
    const a = `update-${xd}`;
    m2(o, a);
  }
  return {
    clear() {
      !Jt && qn.length ? qn[0].reactiveSnackOptions.show = !1 : o.show = !1;
    }
  };
};
ag.forEach((e) => {
  ro[e] = (n) => (Rn(n) ? n.type = e : n = {
    content: n,
    type: e
  }, ro(n));
});
ro.allowMultiple = function(e = !1) {
  e !== Jt && (qn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Jt = e);
};
ro.clear = function() {
  qn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
ro.setDefaultOptions = function(e) {
  Bu = e;
};
ro.resetDefaultOptions = function() {
  Bu = lg;
};
function d2(e) {
  const n = e.getAttribute("data-id"), o = qn.find((t) => t.id === F(n));
  o && C(o.reactiveSnackOptions.onOpened);
}
function f2(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), o = qn.find((r) => r.id === F(n));
  o && (o.animationEnd = !0, C(o.reactiveSnackOptions.onClosed)), qn.every((r) => r.animationEnd) && (C(ig), qn = _e([]), Ss = !1);
}
function p2(e) {
  qn.push(e);
}
function v2(e = {}) {
  return sn(e) ? {
    content: e
  } : e;
}
function m2(e, n) {
  const [o] = qn;
  o.reactiveSnackOptions = Zt(Zt({}, o.reactiveSnackOptions), e), o._update = n;
}
function h2(e = "top") {
  return e === "bottom" ? {
    top: "85%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
ro.Component = Ri;
re(Ri);
re(Ri, ro);
ie(ro, Eu);
const sI = Ri;
var Ps = ro;
const sg = {
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
function Mn(e) {
  return `calc(${e} / 2)`;
}
function g2(e, n, o) {
  const { direction: t, justify: r, index: a, lastIndex: i } = o;
  let l = "0";
  return t === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(r) ? a !== i ? l = `${Mn(e)} ${n} ${Mn(e)} 0` : l = `${Mn(e)} 0` : r === "space-around" ? l = `${Mn(e)} ${Mn(n)}` : r === "space-between" && (a === 0 ? l = `${Mn(e)} ${Mn(n)} ${Mn(e)} 0` : a === i ? l = `${Mn(e)} 0 ${Mn(e)} ${Mn(n)}` : l = `${Mn(e)} ${Mn(n)}`)), t === "column" && a !== i && (l = `0 0 ${e} 0`), l;
}
const b2 = (e) => ["mini", "small", "normal", "large"].includes(e), {
  name: y2,
  n: Or,
  classes: _d
} = ne("space");
function w2(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : Fe(e) ? e.map(Oe) : [Oe(e), Oe(e)];
}
var Li = ee({
  name: y2,
  props: sg,
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
      } = e, u = (o = C(n.default)) != null ? o : [], [c, d] = w2(s, b2(s)), f = Jf(u), v = f.length - 1, g = f.map((m, w) => {
        var k;
        const y = g2(c, d, {
          direction: l,
          justify: r,
          index: w,
          lastIndex: v
        });
        return G("div", {
          class: _d([l === "column", Or("--auto")]),
          key: (k = m.key) != null ? k : void 0,
          style: {
            margin: y
          }
        }, [m]);
      });
      return G("div", {
        class: _d(Or(), Or("$--box"), [t, Or("--inline")]),
        style: {
          flexDirection: l,
          justifyContent: Xr(r),
          alignItems: Xr(a),
          flexWrap: i ? "wrap" : "nowrap",
          margin: l === "row" ? `calc(-1 * ${c} / 2) 0` : void 0
        }
      }, [g]);
    };
  }
});
re(Li);
ie(Li, sg);
const uI = Li;
var Os = Li;
const ug = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: De(on, "name"),
  inactiveIcon: De(on, "name"),
  activeIconNamespace: De(on, "namespace"),
  currentIconNamespace: De(on, "namespace"),
  inactiveIconNamespace: De(on, "namespace")
}, cg = Symbol("STEPS_BIND_STEP_KEY");
function k2() {
  const { bindChildren: e, childProviders: n } = kn(cg);
  return {
    step: n,
    bindStep: e
  };
}
function $2() {
  const { parentProvider: e, index: n, bindParent: o } = wn(cg);
  return Ln(!!o, "Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: o
  };
}
const { name: C2, n: S2, classes: P2 } = ne("step"), O2 = { key: 3 };
function z2(e, n) {
  const o = _("var-icon");
  return h(), S(
    "div",
    {
      class: p(e.n())
    },
    [
      N(
        "div",
        {
          class: p(e.n(e.direction))
        },
        [
          N(
            "div",
            {
              class: p(e.classes(e.n(`${e.direction}-tag`), [e.isActive || e.isCurrent, e.n(`${e.direction}-tag--active`)])),
              style: X({ backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor }),
              onClick: n[0] || (n[0] = (...t) => e.click && e.click(...t))
            },
            [
              e.isActive ? (h(), Ce(o, {
                key: 0,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.activeIcon,
                namespace: e.activeIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.isCurrent && e.currentIcon ? (h(), Ce(o, {
                key: 1,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.currentIcon,
                namespace: e.currentIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.inactiveIcon ? (h(), Ce(o, {
                key: 2,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.inactiveIcon,
                namespace: e.inactiveIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : (h(), S(
                "span",
                O2,
                le(e.index + 1),
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
              M(e.$slots, "default")
            ],
            2
            /* CLASS */
          )) : q("v-if", !0),
          N(
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
const dg = ee({
  name: C2,
  components: { VarIcon: Je },
  props: ug,
  setup() {
    const { index: e, steps: n, bindSteps: o } = $2(), { active: t, activeColor: r, inactiveColor: a, direction: i, clickStep: l } = n, s = B(() => t.value === e.value), u = B(() => e.value !== -1 && F(t.value) > e.value);
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
      n: S2,
      classes: P2,
      click: d
    };
  }
});
dg.render = z2;
var Fi = dg;
re(Fi);
ie(Fi, ug);
const cI = Fi;
var zs = Fi;
const fg = {
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
}, { name: T2, n: E2 } = ne("steps");
function B2(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.n()),
      style: X({ flexDirection: e.direction === "horizontal" ? "row" : "column" })
    },
    [
      M(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const pg = ee({
  name: T2,
  props: fg,
  setup(e) {
    const n = B(() => e.active), o = B(() => e.activeColor), t = B(() => e.inactiveColor), r = B(() => e.direction), { bindStep: a } = k2();
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
    return { n: E2 };
  }
});
pg.render = B2;
var Ui = pg;
re(Ui);
ie(Ui, fg);
const dI = Ui;
var Ts = Ui;
const vg = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: I2, n: D2 } = ne("style-provider"), A2 = ee({
  name: I2,
  props: vg,
  setup(e, { slots: n }) {
    return () => xt(
      e.tag,
      {
        class: D2(),
        style: ap(e.styleVars)
      },
      C(n.default)
    );
  }
});
var Hi = A2;
const mg = "varlet-style-vars";
function ef() {
  const e = document.head.querySelector(`#${mg}`);
  e && document.head.removeChild(e);
}
function N2(e) {
  const n = document.createElement("style");
  n.id = mg, n.innerHTML = e, document.head.appendChild(n);
}
function ji(e) {
  if (e == null) {
    ef();
    return;
  }
  const n = ap(e ?? {}), o = Object.entries(n).reduce((t, [r, a]) => (t += `${r}:${a};`, t), `:root:root {
`);
  ef(), N2(`${o}
}`);
}
ji.Component = Hi;
re(Hi);
re(Hi, ji);
ie(ji, vg);
const fI = Hi;
var Es = ji;
const hg = {
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
}, { name: M2, n: V2, classes: R2 } = ne("switch"), L2 = ["aria-checked"], F2 = ["tabindex"];
function U2(e, n) {
  const o = _("var-hover-overlay"), t = _("var-form-details"), r = Ye("ripple"), a = Ye("hover");
  return Ve((h(), S("div", {
    class: p(e.classes(e.n(), [e.variant, e.n("--variant")])),
    role: "switch",
    "aria-checked": e.modelValue
  }, [
    N(
      "div",
      {
        ref: "switchRef",
        class: p(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.isActive, e.n("block--active")])),
        style: X(e.styleComputed.switch),
        onClick: n[2] || (n[2] = (...i) => e.switchActive && e.switchActive(...i))
      },
      [
        N(
          "div",
          {
            style: X(e.styleComputed.track),
            class: p(e.classes(e.n("track"), [e.isActive, e.n("track--active")], [e.errorMessage && !e.variant, e.n("track--error")]))
          },
          null,
          6
          /* CLASS, STYLE */
        ),
        Ve((h(), S("div", {
          class: p(e.classes(e.n("ripple"), [e.isActive, e.n("ripple--active")])),
          style: X(e.styleComputed.ripple),
          tabindex: e.disabled || e.formDisabled ? void 0 : "0",
          onFocus: n[0] || (n[0] = (i) => e.isFocusing = !0),
          onBlur: n[1] || (n[1] = (i) => e.isFocusing = !1)
        }, [
          N(
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
              e.loading ? (h(), S(
                "span",
                {
                  key: 0,
                  class: p(e.n("loading")),
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
        ], 46, F2)), [
          [r, {
            disabled: !e.ripple || e.disabled || e.loading || e.formDisabled || e.readonly || e.formReadonly
          }]
        ])
      ],
      6
      /* CLASS, STYLE */
    ),
    G(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
  ], 10, L2)), [
    [a, e.hover, "desktop"]
  ]);
}
const gg = ee({
  name: M2,
  components: {
    VarFormDetails: En,
    VarHoverOverlay: Fn
  },
  directives: { Ripple: tn, Hover: Dn },
  props: hg,
  setup(e) {
    const n = $(null), o = $(!1), { bindForm: t, form: r } = Hn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = Un(), { hovering: u, handleHovering: c } = eo(), d = B(() => e.modelValue === e.activeValue), f = B(() => {
      const { size: z, color: D, closeColor: T, loadingColor: I, variant: U } = e;
      return {
        handle: {
          width: On(z),
          height: On(z),
          backgroundColor: d.value ? D : T,
          color: I
        },
        ripple: {
          left: d.value ? On(z, 0.5) : `-${On(z, U ? 1 / 3 : 0.5)}`,
          color: d.value ? D : T || "currentColor",
          width: On(z, 2),
          height: On(z, 2)
        },
        track: {
          width: On(z, U ? 13 / 6 : 1.9),
          height: On(z, U ? 4 / 3 : 0.72),
          borderRadius: On(z, 2 / 3),
          filter: d.value || a != null && a.value ? void 0 : `brightness(${U ? 1 : 0.6})`,
          backgroundColor: d.value ? D : T,
          borderWidth: U && !d.value ? On(z, 1 / 12) : void 0
        },
        switch: {
          width: On(z, U ? 13 / 6 : 2),
          height: On(z, U ? 4 / 3 : 1.2)
        }
      };
    }), v = B(() => On(e.size, 0.8));
    C(t, {
      reset: O,
      validate: k,
      resetValidation: s
    }), We(() => window, "keydown", m), We(() => window, "keyup", w);
    function m(z) {
      o.value && ((z.key === " " || z.key === "Enter") && Ne(z), z.key === "Enter" && n.value.click());
    }
    function w(z) {
      !o.value || z.key !== " " || (Ne(z), n.value.click());
    }
    function k() {
      return l(e.rules, e.modelValue);
    }
    function y(z) {
      je(() => {
        const { validateTrigger: D, rules: T, modelValue: I } = e;
        i(D, z, T, I);
      });
    }
    function b(z) {
      const {
        onClick: D,
        onChange: T,
        disabled: I,
        loading: U,
        readonly: j,
        activeValue: W,
        inactiveValue: K,
        lazyChange: E,
        "onUpdate:modelValue": R,
        onBeforeChange: L
      } = e;
      if (I || r != null && r.disabled.value || (C(D, z), U || j || r != null && r.readonly.value))
        return;
      const Z = d.value ? K : W;
      E ? C(L, Z, (x) => {
        C(R, x), y("onLazyChange");
      }) : (C(T, Z), C(R, Z), y("onChange"));
    }
    function P(z) {
      e.disabled || r != null && r.disabled.value || c(z);
    }
    function O() {
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
      n: V2,
      classes: R2,
      formatElevation: dn,
      multiplySizeUnit: On,
      switchActive: b,
      hover: P
    };
  }
});
gg.render = U2;
var Yi = gg;
re(Yi);
ie(Yi, hg);
const pI = Yi;
var Bs = Yi;
const bg = {
  name: [String, Number],
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: V()
}, yg = Symbol("TABS_BIND_TAB_KEY");
function H2() {
  const { childProviders: e, bindChildren: n, length: o } = kn(yg);
  return {
    length: o,
    tabList: e,
    bindTabList: n
  };
}
function j2() {
  const { parentProvider: e, bindParent: n, index: o } = wn(yg);
  return Ln(!!n, "Tab", "<var-tab/> must in <var-tabs/>"), {
    index: o,
    tabs: e,
    bindTabs: n
  };
}
const { name: Y2, n: zr, classes: W2 } = ne("tab");
function K2(e, n) {
  const o = Ye("ripple");
  return Ve((h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n(`--${e.itemDirection}`))),
      ref: "tabEl",
      style: X({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      M(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [o, { disabled: e.disabled || !e.ripple }]
  ]);
}
const wg = ee({
  name: Y2,
  directives: { Ripple: tn },
  props: bg,
  setup(e) {
    const n = $(null), o = B(() => n.value), t = B(() => e.name), r = B(() => e.disabled), { index: a, tabs: i, bindTabs: l } = j2(), { onTabClick: s, active: u, activeColor: c, inactiveColor: d, disabledColor: f, itemDirection: v, resize: g } = i, m = {
      name: t,
      index: a,
      disabled: r,
      element: o
    };
    l(m), de(() => [e.name, e.disabled], g);
    function w() {
      return e.name != null ? u.value === e.name : u.value === (a == null ? void 0 : a.value);
    }
    function k() {
      return e.disabled ? f.value : w() ? c.value : d.value;
    }
    function y() {
      return e.disabled ? zr("$-tab--disabled") : w() ? zr("$-tab--active") : zr("$-tab--inactive");
    }
    function b(P) {
      const { disabled: O, name: z, onClick: D } = e;
      O || (C(D, z ?? a.value, P), s(m));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: c,
      inactiveColor: d,
      itemDirection: v,
      n: zr,
      classes: W2,
      computeColorStyle: k,
      computeColorClass: y,
      handleClick: b
    };
  }
});
wg.render = K2;
var Wi = wg;
re(Wi);
ie(Wi, bg);
const vI = Wi;
var Is = Wi;
const kg = {
  name: [String, Number]
}, { name: q2, n: X2, classes: G2 } = ne("tab-item");
function Z2(e, n) {
  const o = _("var-swipe-item");
  return h(), Ce(o, {
    class: p(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: ce(() => [
      M(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
const $g = ee({
  name: q2,
  components: { VarSwipeItem: Xt },
  props: kg,
  setup(e) {
    const n = $(!1), o = B(() => e.name), { index: t, bindTabsItems: r } = S4(), { bindLists: a } = P4(), i = {
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
      n: X2,
      classes: G2
    };
  }
});
$g.render = Z2;
var Ki = $g;
re(Ki);
ie(Ki, kg);
const mI = Ki;
var Ds = Ki;
const Cg = {
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
}, { name: J2, n: Q2, classes: x2 } = ne("table");
function _2(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box")))
    },
    [
      N(
        "div",
        {
          class: p(e.n("main")),
          style: X({ height: e.toSizeUnit(e.scrollerHeight) })
        },
        [
          N(
            "table",
            {
              class: p(e.n("table")),
              style: X({ width: e.toSizeUnit(e.fullWidth) })
            },
            [
              M(e.$slots, "default")
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
          M(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Sg = ee({
  name: J2,
  props: Cg,
  setup: () => ({
    toSizeUnit: Oe,
    n: Q2,
    classes: x2,
    formatElevation: dn
  })
});
Sg.render = _2;
var qi = Sg;
re(qi);
ie(qi, Cg);
const hI = qi;
var As = qi;
const Pg = {
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
  stickyCssMode: De(Nt, "cssMode"),
  stickyZIndex: De(Nt, "zIndex"),
  offsetTop: De(Nt, "offsetTop"),
  onClick: V(),
  onChange: V(),
  "onUpdate:active": V()
};
var nf = (e, n, o) => new Promise((t, r) => {
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
const { name: e3, n: n3, classes: o3 } = ne("tabs");
function t3(e, n) {
  return h(), Ce(kt(e.sticky ? e.n("$-sticky") : e.Transition), {
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
              class: p(
                e.classes(
                  e.n("tab-wrap"),
                  [e.localScrollable, e.n(`--layout-${e.layoutDirection}-scrollable`)],
                  e.n(`--layout-${e.layoutDirection}`)
                )
              )
            },
            [
              M(e.$slots, "default"),
              N(
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
                  N(
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
const Og = ee({
  name: e3,
  components: { VarSticky: yt },
  inheritAttrs: !1,
  props: Pg,
  setup(e) {
    const n = $("0px"), o = $("0px"), t = $("0px"), r = $("0px"), a = $(!1), i = $(null), l = B(() => e.active), s = B(() => e.activeColor), u = B(() => e.inactiveColor), c = B(() => e.disabledColor), d = B(() => e.itemDirection), f = $(null), v = B(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: g, bindTabList: m, length: w } = H2();
    m({
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: c,
      itemDirection: d,
      resize: I,
      onTabClick: y
    }), de(
      () => w.value,
      () => nf(this, null, function* () {
        yield bn(), I();
      })
    ), de(() => [e.active, e.scrollable], I), Fo(I), lo(I);
    function y(j) {
      var W;
      const K = (W = j.name.value) != null ? W : j.index.value, { active: E, onChange: R, onClick: L } = e;
      C(e["onUpdate:active"], K), C(L, K), K !== E && C(R, K);
    }
    function b() {
      return g.find(({ name: j }) => e.active === j.value);
    }
    function P(j) {
      return g.find(({ index: W }) => (j ?? e.active) === W.value);
    }
    function O() {
      if (w.value === 0)
        return;
      const { active: j } = e;
      if (Tn(j)) {
        const W = $n(j, 0, w.value - 1);
        return C(e["onUpdate:active"], W), P(W);
      }
    }
    function z() {
      a.value = e.scrollable === "always" || g.length >= 5;
    }
    function D({ element: j }) {
      const W = j.value;
      W && (e.layoutDirection === "horizontal" ? (n.value = `${W.offsetWidth}px`, t.value = `${W.offsetLeft}px`) : (o.value = `${W.offsetHeight}px`, r.value = `${W.offsetTop}px`));
    }
    function T({ element: j }) {
      if (!a.value)
        return;
      const W = i.value, K = j.value;
      if (e.layoutDirection === "horizontal") {
        const E = K.offsetLeft + K.offsetWidth / 2 - W.offsetWidth / 2;
        Rt(W, {
          left: E,
          animation: yl
        });
      } else {
        const E = K.offsetTop + K.offsetHeight / 2 - W.offsetHeight / 2;
        Rt(W, {
          top: E,
          animation: yl
        });
      }
    }
    function I() {
      const j = b() || P() || O();
      !j || j.disabled.value || (z(), D(j), T(j));
    }
    function U() {
      return nf(this, null, function* () {
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
      toSizeUnit: Oe,
      n: n3,
      classes: o3,
      resize: I,
      resizeSticky: U,
      formatElevation: dn
    };
  }
});
Og.render = t3;
var Xi = Og;
re(Xi);
ie(Xi, Pg);
const gI = Xi;
var Ns = Xi;
const zg = {
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
var r3 = (e, n, o) => new Promise((t, r) => {
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
const { name: a3, n: i3 } = ne("tabs-items");
function l3(e, n) {
  const o = _("var-swipe");
  return h(), Ce(o, {
    class: p(e.n()),
    ref: "swipe",
    loop: e.loop,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: ce(() => [
      M(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "loop", "touchable", "onChange"]);
}
const Tg = ee({
  name: a3,
  components: { VarSwipe: qt },
  props: zg,
  setup(e) {
    const n = $(null), { tabItemList: o, bindTabItem: t, length: r } = C4();
    t({}), de(() => e.active, s), de(
      () => r.value,
      () => r3(this, null, function* () {
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
      v && (o.forEach(({ setCurrent: g }) => g(!1)), v.setCurrent(!0), (f = n.value) == null || f.to(v.index.value));
    }
    function u(d) {
      var f;
      const v = o.find(({ index: m }) => m.value === d), g = (f = v.name.value) != null ? f : v.index.value;
      C(e["onUpdate:active"], g);
    }
    function c() {
      return n.value;
    }
    return {
      swipe: n,
      n: i3,
      handleSwipeChange: u,
      getSwipe: c
    };
  }
});
Tg.render = l3;
var Gi = Tg;
re(Gi);
ie(Gi, zg);
const bI = Gi;
var Ms = Gi, s3 = {
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
}, u3 = {
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
}, c3 = {
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
}, d3 = {
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
}, f3 = {
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
}, p3 = {
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
}, v3 = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, m3 = {
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
}, h3 = {
  "--collapse-text-color": "#fff",
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, g3 = {
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
}, b3 = {
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
}, y3 = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, w3 = {
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
}, k3 = {
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
}, $3 = {
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
}, C3 = {
  "--popup-content-background-color": "var(--color-surface-container-low)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, S3 = {
  "--pull-refresh-background": "#303030",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, P3 = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, O3 = {
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
}, z3 = {
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
}, T3 = {
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
}, E3 = {
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
}, B3 = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, I3 = {
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
}, D3 = {
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
}, A3 = {
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
}, N3 = {
  "--tabs-background": "#1e1e1e",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, M3 = {
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
}, V3 = {
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
}, R3 = {
  "--menu-background-color": "#272727",
  "--menu-border-radius": "2px"
}, L3 = {
  "--breadcrumb-inactive-color": "#aaa",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, F3 = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e",
  "--avatar-text-color": "#f5f5f5",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-hover-transform": "scale(1.1)"
}, U3 = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, H3 = {
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
}, j3 = {
  "--option-text-color": "#fff",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, Y3 = {
  "--watermark-content-color": "#ffffff"
}, W3 = {
  "--menu-select-menu-background-color": "#272727",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0",
  "--menu-select-menu-border-radius": "2px"
}, K3 = {
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
}, q3 = {
  "--avatar-group-offset": "-10px"
}, X3 = {
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px",
  "--back-top-button-border-radius": "50%"
}, G3 = {
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-background-color": "var(--color-surface-container-high)",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, Z3 = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, J3 = {
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
}, Q3 = {
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
}, x3 = {
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
}, _3 = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, e8 = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, n8 = {
  "--icon-size": "20px"
}, o8 = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, t8 = {
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
}, r8 = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, a8 = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, i8 = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, l8 = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, s8 = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, u8 = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "4px"
}, c8 = {
  "--rate-color": "var(--color-text)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, d8 = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, f8 = {
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
}, p8 = {
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
}, v8 = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, m8 = {
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
}, h8 = {
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
}, g8 = {
  "--select-scroller-background": "#272727",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-scroller-border-radius": "2px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, b8 = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, y8 = Object.defineProperty, of = Object.getOwnPropertySymbols, w8 = Object.prototype.hasOwnProperty, k8 = Object.prototype.propertyIsEnumerable, tf = (e, n, o) => n in e ? y8(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, he = (e, n) => {
  for (var o in n || (n = {}))
    w8.call(n, o) && tf(e, o, n[o]);
  if (of)
    for (var o of of(n))
      k8.call(n, o) && tf(e, o, n[o]);
  return e;
}, $8 = he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he({
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
}, d3), u3), p3), f3), D3), g3), z3), N3), B3), C3), b3), s3), m3), c3), A3), h3), S3), E3), T3), k3), I3), w3), P3), v3), y3), $3), M3), V3), R3), O3), L3), F3), U3), H3), j3), Y3), W3), K3), q3), X3), G3), Z3), J3), Q3), x3), _3), e8), n8), o8), t8), r8), a8), i8), l8), s8), u8), c8), d8), f8), p8), v8), m8), h8), g8), b8), C8 = {
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
}, S8 = {
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
}, P8 = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, O8 = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, z8 = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, T8 = {
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
}, E8 = {
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
}, B8 = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, I8 = {
  "--link-default-color": "#000",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, D8 = {
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
}, A8 = {
  "--paper-background": "var(--color-surface-container-low)",
  "--paper-border-radius": "12px"
}, N8 = {
  "--avatar-text-color": "#fff",
  "--avatar-background-color": "var(--color-primary)"
}, M8 = {
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
}, V8 = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, R8 = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, L8 = {
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
}, F8 = {
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
}, U8 = {
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
}, H8 = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, j8 = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, Y8 = {
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
}, W8 = {
  "--collapse-background": "var(--color-surface-container-low)",
  "--collapse-text-color": "#1D1B20",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, K8 = {
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
}, q8 = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-fab-border-radius": "12px",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px"
}, X8 = {
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
}, G8 = {
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
}, Z8 = {
  "--action-sheet-background": "var(--color-surface-container-high)",
  "--action-sheet-title-color": "var(--color-on-surface-variant)",
  "--action-sheet-action-item-color": "#1D1B20",
  "--action-sheet-border-radius": "0px"
}, J8 = {
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
}, Q8 = {
  "--pull-refresh-background": "var(--color-body)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, x8 = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, _8 = {
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
}, eT = {
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
}, nT = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, oT = {
  "--select-scroller-background": "var(--color-surface-container)",
  "--select-scroller-border-radius": "4px",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, tT = {
  "--option-text-color": "#1D1B20",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, rT = {
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
}, aT = {
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
}, iT = {
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
}, lT = {
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
}, sT = {
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
}, uT = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, cT = {
  "--avatar-group-offset": "-10px"
}, dT = {
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
}, fT = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, pT = {
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
}, vT = {
  "--divider-color": "var(--color-outline)",
  "--divider-text-color": "#888",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, mT = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, hT = {
  "--icon-size": "20px"
}, gT = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, bT = {
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
}, yT = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, wT = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, kT = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, $T = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, CT = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, ST = {
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
}, PT = {
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
}, OT = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, zT = {
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
}, TT = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, ET = {
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
}, BT = {
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
}, IT = {
  "--watermark-content-color": "#808080"
}, DT = {
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
}, AT = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, NT = Object.defineProperty, rf = Object.getOwnPropertySymbols, MT = Object.prototype.hasOwnProperty, VT = Object.prototype.propertyIsEnumerable, af = (e, n, o) => n in e ? NT(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ge = (e, n) => {
  for (var o in n || (n = {}))
    MT.call(n, o) && af(e, o, n[o]);
  if (rf)
    for (var o of rf(n))
      VT.call(n, o) && af(e, o, n[o]);
  return e;
}, RT = ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge({
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
}, C8), S8), P8), O8), z8), T8), E8), B8), I8), D8), A8), N8), M8), V8), R8), L8), F8), U8), H8), j8), Y8), W8), K8), q8), X8), G8), Z8), J8), Q8), x8), _8), eT), nT), oT), tT), rT), aT), iT), lT), sT), uT), cT), dT), fT), pT), vT), mT), hT), gT), bT), yT), wT), kT), $T), CT), ST), PT), OT), zT), TT), ET), BT), IT), DT), AT), LT = {
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
}, FT = {
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
}, UT = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, HT = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, jT = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, YT = {
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
}, WT = {
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
}, KT = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, qT = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, XT = {
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
}, GT = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "12px"
}, ZT = {
  "--avatar-text-color": "#000",
  "--avatar-background-color": "var(--color-primary)",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-border": "2px solid #fff",
  "--avatar-hover-transform": "scale(1.1)"
}, JT = {
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
}, QT = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, xT = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, _T = {
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
}, eE = {
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
}, nE = {
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
}, oE = {
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
}, tE = {
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
}, rE = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, aE = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, iE = {
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
}, lE = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, sE = {
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
}, uE = {
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
}, cE = {
  "--watermark-content-color": "#ffffff"
}, dE = {
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-text-color": "var(--color-inverse-surface)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, fE = {
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
}, pE = {
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
}, vE = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, mE = {
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
}, hE = {
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
}, gE = {
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
}, bE = {
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
}, yE = {
  "--pull-refresh-background": "var(--color-surface-container-highest)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, wE = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, kE = {
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
}, $E = {
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
}, CE = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, SE = {
  "--select-scroller-background": "var(--color-surface-container)",
  "--select-scroller-border-radius": "4px",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, PE = {
  "--option-text-color": "var(--color-inverse-surface)",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, OE = {
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
}, zE = {
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
}, TE = {
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
}, EE = {
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
}, BE = {
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
}, IE = {
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
}, DE = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, AE = {
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
}, NE = {
  "--avatar-group-offset": "-10px"
}, ME = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, VE = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, RE = {
  "--icon-size": "20px"
}, LE = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, FE = {
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
}, jE = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, YE = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, WE = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, KE = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, qE = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, XE = {
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
}, GE = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, ZE = Object.defineProperty, lf = Object.getOwnPropertySymbols, JE = Object.prototype.hasOwnProperty, QE = Object.prototype.propertyIsEnumerable, sf = (e, n, o) => n in e ? ZE(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, be = (e, n) => {
  for (var o in n || (n = {}))
    JE.call(n, o) && sf(e, o, n[o]);
  if (lf)
    for (var o of lf(n))
      QE.call(n, o) && sf(e, o, n[o]);
  return e;
}, xE = be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be({
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
}, LT), FT), UT), HT), jT), YT), WT), KT), qT), XT), GT), ZT), JT), QT), xT), _T), eE), nE), oE), tE), rE), aE), iE), lE), sE), uE), cE), dE), fE), pE), vE), mE), hE), gE), bE), yE), wE), kE), $E), CE), SE), PE), OE), zE), TE), EE), BE), IE), DE), AE), NE), ME), VE), RE), LE), FE), UE), HE), jE), YE), WE), KE), qE), XE), GE);
function _E(e, n = {}) {
  const { viewportWidth: o = 375, viewportUnit: t = "vmin", unitPrecision: r = 6 } = n;
  return Object.entries(e).reduce((a, [i, l]) => (a[i] = l.includes("px") ? l.replace(
    /(\d+(\.\d+)?)px/g,
    (s, u) => `${Number((u / o * 100).toFixed(r))}${t}`
  ) : l, a), {});
}
const e5 = { dark: $8, md3Light: RT, md3Dark: xE, toViewport: _E }, yI = null;
var Vs = e5;
const Yn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], zn = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], uf = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"], Eg = {
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
}, Bg = (e, n) => e === "24hr" || n === "am", Iu = (e, n, o) => {
  const t = Yn.findIndex((a) => F(a) === F(o)), r = Bg(e, n) ? o : zn[t];
  return {
    hourStr: r,
    hourNum: F(r)
  };
}, In = (e) => {
  const [n, o, t] = e.split(":");
  return {
    hour: F(n),
    minute: F(o),
    second: F(t)
  };
}, Ig = (e) => {
  var n, o;
  const { time: t, format: r, ampm: a, hour: i, max: l, min: s, disableHour: u } = e, { hourStr: c, hourNum: d } = Iu(r, a, i);
  let f = !1, v = !1;
  if (u.includes(c)) return !0;
  if (l && !s) {
    const { hour: g, minute: m } = In(l);
    f = g === d && t > m;
  }
  if (!l && s) {
    const { hour: g, minute: m } = In(s);
    f = g === d && t < m;
  }
  if (l && s) {
    const { hour: g, minute: m } = In(l), { hour: w, minute: k } = In(s);
    f = w === d && t < k || g === d && t > m;
  }
  return (n = e.allowedTime) != null && n.minutes && (v = (o = e.allowedTime) == null ? void 0 : o.minutes(t)), f || v;
}, Dg = (e) => {
  var n, o;
  const { time: t, format: r, ampm: a, hour: i, minute: l, max: s, min: u, disableHour: c } = e, { hourStr: d, hourNum: f } = Iu(r, a, i);
  let v = !1, g = !1;
  if (c.includes(d)) return !0;
  if (s && !u) {
    const { hour: m, minute: w, second: k } = In(s);
    v = m === f && w < l || w === l && t > k;
  }
  if (!s && u) {
    const { hour: m, minute: w, second: k } = In(u);
    v = m === f && w > l || w === l && t > k;
  }
  if (s && u) {
    const { hour: m, minute: w, second: k } = In(s), { hour: y, minute: b, second: P } = In(u);
    v = m === f && w < l || y === f && b > l || m === f && w === l && t > k || y === f && b === l && t < P;
  }
  return (n = e.allowedTime) != null && n.seconds && (g = (o = e.allowedTime) == null ? void 0 : o.seconds(t)), v || g;
}, { n: n5, classes: o5 } = ne("time-picker");
function t5(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.n("clock"))
    },
    [
      N(
        "div",
        {
          class: p(e.n("clock-hand")),
          style: X(e.handStyle)
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      (h(!0), S(
        Me,
        null,
        Xe(e.timeScales, (o, t) => (h(), S(
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
            style: X(e.getStyle(t, o, !1))
          },
          le(o),
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
            Me,
            null,
            Xe(e.hours24, (o, t) => (h(), S(
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
                style: X(e.getStyle(t, o, !0))
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
      )) : q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Ag = ee({
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
    const o = $(null), t = $([]), r = $([]), a = B(() => ({
      transform: `rotate(${F(e.rad)}deg)`,
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: u(),
      borderColor: u()
    })), i = B(() => {
      if (e.rad === void 0) return;
      const m = e.rad / 30;
      return m >= 0 ? m : m + 12;
    }), l = B(() => e.type === "hour" ? Yn : uf), s = (m, w) => {
      m = m ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const k = e.type === "minute" ? Ig : Dg, y = {
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
      return w && e.type === "minute" && Reflect.deleteProperty(y, "minute"), k(y);
    }, u = () => {
      if (i.value === void 0) return e.color;
      const m = e.isInner ? zn[i.value] : l.value[i.value];
      return l.value === uf ? s() ? "var(--time-picker-clock-item-disable-background)" : e.color : d(m) ? "var(--time-picker-clock-item-disable-background)" : e.color;
    }, c = (m, w) => w ? i.value === m && e.isInner : i.value === m && (!e.isInner || e.type !== "hour"), d = (m) => {
      if (e.type === "hour") {
        if (Bg(e.format, e.ampm)) return t.value.includes(m);
        const w = Yn.findIndex((k) => k === m);
        return r.value.includes(w);
      }
      return s(m, !0);
    }, f = (m, w, k) => {
      const y = 2 * Math.PI / 12 * m - Math.PI / 2, b = 50 * (1 + Math.cos(y)), P = 50 * (1 + Math.sin(y)), O = () => c(m, k) ? d(w) ? {
        backgroundColor: "var(--time-picker-clock-item-disable-background)",
        color: "var(--time-picker-clock-item-disable-color)"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, { backgroundColor: z, color: D } = O();
      return {
        left: `${b}%`,
        top: `${P}%`,
        backgroundColor: z,
        color: D
      };
    }, v = () => {
      const { width: m, height: w } = nn(o.value);
      return {
        width: m,
        height: w
      };
    }, g = () => {
      if (i.value === void 0) return;
      const m = e.ampm === "am" ? Yn : zn;
      return Jo(m[i.value], 2, "0");
    };
    return de([i, () => e.isInner], ([m, w], [k, y]) => {
      if (m === k && w === y || e.type !== "hour" || i.value === void 0) return;
      const P = w ? zn[i.value] : g(), O = e.useSeconds ? `:${e.time.second}` : "", z = `${P}:${e.time.minute}${O}`;
      e.preventNextUpdate || n("update", z), n("change-prevent-update");
    }), de(
      () => e.rad,
      (m, w) => {
        if (e.type === "hour" || m === void 0 || w === void 0) return;
        const k = m / 6 >= 0 ? m / 6 : m / 6 + 60, y = w / 6 >= 0 ? w / 6 : w / 6 + 60;
        if (k === y) return;
        let b;
        const { hourStr: P } = Iu(e.format, e.ampm, e.time.hour);
        if (e.type === "minute") {
          const O = se().minute(k).format("mm"), z = e.useSeconds ? `:${e.time.second}` : "";
          b = `${P}:${O}${z}`;
        }
        if (e.type === "second") {
          const O = se().second(k).format("ss"), z = e.useSeconds ? `:${O}` : "";
          b = `${P}:${e.time.minute}${z}`;
        }
        n("update", b);
      }
    ), de(
      [() => e.max, () => e.min, () => e.allowedTime],
      ([m, w, k]) => {
        if (t.value = [], m && !w) {
          const { hour: y } = In(m), b = Yn.filter((O) => F(O) > y), P = zn.filter((O) => F(O) > y);
          t.value = [...b, ...P];
        }
        if (!m && w) {
          const { hour: y } = In(w), b = Yn.filter((O) => F(O) < y), P = zn.filter((O) => F(O) < y);
          t.value = [...b, ...P];
        }
        if (m && w) {
          const { hour: y } = In(m), { hour: b } = In(w), P = Yn.filter((z) => F(z) < b || F(z) > y), O = zn.filter((z) => F(z) < b || F(z) > y);
          t.value = [...P, ...O];
        }
        if (k != null && k.hours) {
          const { hours: y } = k, b = Yn.filter((O) => !y(F(O))), P = zn.filter((O) => !y(F(O)));
          t.value = [.../* @__PURE__ */ new Set([...t.value, ...b, ...P])];
        }
        r.value = t.value.map((y) => zn.findIndex((b) => y === b)).filter((y) => y >= 0);
      },
      { immediate: !0, deep: !0 }
    ), {
      n: n5,
      classes: o5,
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
Ag.render = t5;
var r5 = Ag;
const { name: a5, n: i5, classes: l5 } = ne("time-picker");
function s5(e, n) {
  var o;
  const t = _("clock");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [
      N(
        "div",
        {
          class: p(e.n("title")),
          style: X({ background: e.titleColor || e.color })
        },
        [
          N(
            "div",
            {
              class: p(e.n("title-hint"))
            },
            le((o = e.hint) != null ? o : (e.pt ? e.pt : e.t)("timePickerHint")),
            3
            /* TEXT, CLASS */
          ),
          N(
            "div",
            {
              class: p(e.n("title-time-container"))
            },
            [
              N(
                "div",
                {
                  class: p(e.n("title-time"))
                },
                [
                  N(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
                      onClick: n[0] || (n[0] = (r) => e.checkPanel("hour"))
                    },
                    le(e.time.hour),
                    3
                    /* TEXT, CLASS */
                  ),
                  N(
                    "span",
                    {
                      class: p(e.n("title-splitter"))
                    },
                    ":",
                    2
                    /* CLASS */
                  ),
                  N(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
                      onClick: n[1] || (n[1] = (r) => e.checkPanel("minute"))
                    },
                    le(e.time.minute),
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
                  )) : q("v-if", !0),
                  e.useSeconds ? (h(), S(
                    "div",
                    {
                      key: 1,
                      class: p(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
                      onClick: n[2] || (n[2] = (r) => e.checkPanel("second"))
                    },
                    le(e.time.second),
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
                  class: p(e.n("title-ampm"))
                },
                [
                  N(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
                      onClick: n[3] || (n[3] = (r) => e.checkAmpm("am"))
                    },
                    " AM ",
                    2
                    /* CLASS */
                  ),
                  N(
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
          class: p(e.n("body"))
        },
        [
          N(
            "div",
            {
              class: p(e.n("clock-container")),
              onTouchstart: n[5] || (n[5] = (...r) => e.moveHand && e.moveHand(...r)),
              onTouchmove: n[6] || (n[6] = (...r) => e.moveHand && e.moveHand(...r)),
              onTouchend: n[7] || (n[7] = (...r) => e.end && e.end(...r)),
              ref: "container"
            },
            [
              G(xe, {
                name: `${e.n()}-panel-fade`
              }, {
                default: ce(() => [
                  (h(), Ce(t, {
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
          M(e.$slots, "actions")
        ],
        2
        /* CLASS */
      )) : q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Ng = ee({
  name: a5,
  components: { Clock: r5 },
  props: Eg,
  setup(e) {
    const n = $(null), o = $(null), t = $(null), r = $(!1), a = $(!1), i = $(!1), l = $(!1), s = $(!1), u = $(!1), c = $(!1), d = $(0), f = $(0), v = $(), g = $("hour"), m = $("am"), w = $({
      hour: "00",
      minute: "00",
      second: "00"
    }), k = _e({
      x: 0,
      y: 0
    }), y = _e({
      x: [],
      y: []
    }), b = B(() => g.value === "hour" ? v.value : g.value === "minute" ? d.value : f.value), { t: P } = so();
    de(
      () => e.modelValue,
      (H) => {
        if (H === void 0 || H === "") {
          O();
          return;
        }
        const { hour: J, minute: te, second: me } = In(H), A = se().hour(J).format("hh"), Y = se().hour(J).format("HH"), fe = se().minute(te).format("mm"), Se = se().second(me).format("ss");
        v.value = (A === "12" ? 0 : F(A)) * 30, d.value = F(fe) * 6, f.value = F(Se) * 6, w.value = W(H), e.format !== "24hr" && (m.value = Jo(`${J}`, 2, "0") === Y && zn.includes(Y) ? "pm" : "am"), r.value = e.format === "24hr" && zn.includes(Y);
      },
      { immediate: !0 }
    );
    function O() {
      v.value = void 0, d.value = 0, f.value = 0, w.value = {
        hour: "00",
        minute: "00",
        second: "00"
      }, m.value = "am";
    }
    function z(H) {
      C(e["onUpdate:modelValue"], H), C(e.onChange, H);
    }
    function D(H) {
      return H * 57.29577951308232;
    }
    function T(H) {
      l.value = !1, c.value = !1, g.value = H;
    }
    function I(H) {
      const { disableHour: J } = t.value, te = Yn.findIndex((Y) => F(Y) === F(w.value.hour)), me = H === "am" ? Yn : zn;
      return [...me.slice(te), ...me.slice(0, te)].find((Y, fe) => (a.value = fe !== 0, !J.includes(Y)));
    }
    function U(H) {
      if (e.readonly) return;
      m.value = H;
      const J = I(H);
      if (!J) return;
      const te = e.useSeconds ? `:${w.value.second}` : "", me = `${Jo(J, 2, "0")}:${w.value.minute}${te}`;
      z(me);
    }
    function j(H, J) {
      const te = H >= y.x[0] && H <= y.x[1], me = J >= y.y[0] && J <= y.y[1];
      return te && me;
    }
    function W(H) {
      const J = e.format === "24hr" ? "HH" : "hh", { hour: te, minute: me, second: A } = In(H);
      return {
        hour: se().hour(te).format(J),
        minute: se().minute(me).format("mm"),
        second: se().second(A).format("ss")
      };
    }
    function K(H) {
      const J = H / 30;
      return J >= 0 ? J : J + 12;
    }
    function E() {
      const { width: H, height: J } = t.value.getSize(), te = k.x - H / 2 - 8, me = k.x + H / 2 + 8, A = k.y - J / 2 - 8, Y = k.y + J / 2 + 8;
      return {
        rangeXMin: te,
        rangeXMax: me,
        rangeYMin: A,
        rangeYMax: Y
      };
    }
    function R(H, J, te) {
      const { disableHour: me } = t.value;
      i.value = j(H, J);
      const A = Math.round(te / 30) * 30 + 90, Y = K(A), fe = r.value ? Yn[Y] : zn[Y];
      if (me.includes(fe) || (r.value = e.format === "24hr" ? j(H, J) : !1), r.value !== i.value) return;
      const Se = r.value || m.value === "pm" ? zn[Y] : Yn[Y];
      u.value = me.includes(Se), !u.value && (v.value = A, l.value = !0);
    }
    function L(H) {
      const { disableHour: J } = t.value, te = Math.round(H / 6) * 6 + 90, A = {
        time: te / 6 >= 0 ? te / 6 : te / 6 + 60,
        format: e.format,
        ampm: m.value,
        hour: w.value.hour,
        max: e.max,
        min: e.min,
        disableHour: J,
        allowedTime: e.allowedTime
      };
      c.value = Ig(A), !c.value && (d.value = te, s.value = !0);
    }
    function Z(H) {
      const { disableHour: J } = t.value, te = Math.round(H / 6) * 6 + 90, A = {
        time: te / 6 >= 0 ? te / 6 : te / 6 + 60,
        format: e.format,
        ampm: m.value,
        hour: w.value.hour,
        minute: F(w.value.minute),
        max: e.max,
        min: e.min,
        disableHour: J,
        allowedTime: e.allowedTime
      };
      Dg(A) || (f.value = te);
    }
    function x() {
      const { left: H, top: J, width: te, height: me } = nn(n.value);
      if (k.x = H + te / 2, k.y = J + me / 2, g.value === "hour" && e.format === "24hr") {
        const { rangeXMin: A, rangeXMax: Y, rangeYMin: fe, rangeYMax: Se } = E();
        y.x = [A, Y], y.y = [fe, Se];
      }
    }
    function ve(H) {
      if (Ne(H), e.readonly) return;
      x();
      const { clientX: J, clientY: te } = H.touches[0], me = J - k.x, A = te - k.y, Y = Math.round(D(Math.atan2(A, me)));
      g.value === "hour" ? R(J, te, Y) : g.value === "minute" ? L(Y) : Z(Y);
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
      getRad: b,
      time: w,
      container: n,
      inner: t,
      picker: o,
      isInner: r,
      type: g,
      ampm: m,
      isPreventNextUpdate: a,
      n: i5,
      classes: l5,
      t: an,
      pt: P,
      moveHand: ve,
      checkPanel: T,
      checkAmpm: U,
      end: ye,
      update: z,
      changePreventUpdate: Ee,
      formatElevation: dn
    };
  }
});
Ng.render = s5;
var Zi = Ng;
re(Zi);
ie(Zi, Eg);
const wI = Zi;
var Rs = Zi;
const Mg = {
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
const { name: u5, n: c5, classes: d5 } = ne("uploader");
let f5 = 0;
const p5 = ["onClick"], v5 = ["onClick"], m5 = ["src", "alt"], h5 = ["tabindex"], g5 = ["multiple", "accept", "capture", "disabled"], b5 = ["src"];
function y5(e, n) {
  const o = _("var-icon"), t = _("var-hover-overlay"), r = _("var-form-details"), a = _("var-popup"), i = Ye("ripple"), l = Ye("hover");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      N(
        "div",
        {
          class: p(e.n("file-list"))
        },
        [
          (h(!0), S(
            Me,
            null,
            Xe(e.files, (s) => Ve((h(), S("div", {
              class: p(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
              key: s.id,
              onClick: (u) => e.preview(s)
            }, [
              N(
                "div",
                {
                  class: p(e.n("file-name"))
                },
                le(s.name || s.url),
                3
                /* TEXT, CLASS */
              ),
              e.removable ? (h(), S("div", {
                key: 0,
                class: p(e.n("file-close")),
                onClick: Xn((u) => e.handleRemove(s), ["stop"])
              }, [
                G(o, {
                  class: p(e.n("file-close-icon")),
                  "var-uploader-cover": "",
                  name: "delete"
                }, null, 8, ["class"])
              ], 10, v5)) : q("v-if", !0),
              s.cover ? (h(), S("img", {
                key: 1,
                role: "img",
                class: p(e.n("file-cover")),
                style: X({ objectFit: s.fit }),
                src: s.cover,
                alt: s.name
              }, null, 14, m5)) : q("v-if", !0),
              N(
                "div",
                {
                  class: p(e.n("file-indicator"))
                },
                [
                  N(
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
            ], 10, p5)), [
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
            N("input", {
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
            }, null, 42, g5),
            M(e.$slots, "default", {}, () => [
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
          ], 42, h5)), [
            [i, {
              disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || !!e.$slots.default
            }],
            [l, e.handleHovering, "desktop"]
          ]) : q("v-if", !0)
        ],
        2
        /* CLASS */
      ),
      G(r, {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      }, ut({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: ce(() => [
            M(e.$slots, "extra-message")
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
            }, null, 10, b5)) : q("v-if", !0)
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
const Vg = ee({
  name: u5,
  directives: { Ripple: tn, Hover: Dn },
  components: {
    VarIcon: Je,
    VarPopup: No,
    VarFormDetails: En,
    VarHoverOverlay: Fn
  },
  props: Mg,
  setup(e) {
    const n = $(!1), o = $(null), t = $(null), r = $(!1), a = $(null), i = B(() => {
      const {
        maxlength: H,
        modelValue: { length: J }
      } = e;
      return Tn(H) ? `${J} / ${H}` : "";
    }), { form: l, bindForm: s } = Hn(), {
      errorMessage: u,
      validateWithTrigger: c,
      validate: d,
      // expose
      resetValidation: f
    } = Un(), { hovering: v, handleHovering: g } = eo(), m = B(() => {
      const { modelValue: H, hideList: J } = e;
      return J ? [] : H;
    });
    let w = !1;
    const k = {
      getSuccess: E,
      getError: R,
      getLoading: L
    };
    C(s, {
      validate: ye,
      resetValidation: f,
      reset: Ee
    }), We(() => window, "keydown", b), We(() => window, "keyup", P), de(
      () => e.modelValue,
      () => {
        !w && ve("onChange"), w = !1;
      },
      { deep: !0 }
    );
    function b(H) {
      n.value && ((H.key === " " || H.key === "Enter") && H.preventDefault(), H.key === "Enter" && o.value.click());
    }
    function P(H) {
      !n.value || H.key !== " " || (H.preventDefault(), o.value.click());
    }
    function O(H) {
      const { disabled: J, previewed: te, preventDefaultPreview: me, onPreview: A } = e;
      if (l != null && l.disabled.value || J || !te || (C(A, _e(H)), me))
        return;
      const { url: Y } = H;
      if (Cc(Y)) {
        Gt(Y);
        return;
      }
      Sc(Y) && (a.value = H, r.value = !0);
    }
    function z(H) {
      return {
        id: f5++,
        url: "",
        cover: "",
        name: H.name,
        file: H,
        progress: 0
      };
    }
    function D(H) {
      const J = H.target, { files: te } = J;
      return Array.from(te);
    }
    function T(H) {
      return Tr(this, null, function* () {
        const J = H.file;
        if (e.resolveType === "default" && J.type.startsWith("image") || e.resolveType === "data-url") {
          const me = yield Yf(J);
          H.cover = me, H.url = me;
        }
        return H;
      });
    }
    function I(H) {
      return H.map(T);
    }
    function U(H) {
      const { onBeforeRead: J } = e;
      return H.map(
        (te) => new Promise((me) => {
          J || me({
            valid: !0,
            varFile: te
          });
          const A = po(C(J, _e(te)));
          Promise.all(A).then((Y) => {
            me({
              valid: Y.every(Boolean),
              varFile: te
            });
          });
        })
      );
    }
    function j(H) {
      return Tr(this, null, function* () {
        const { maxsize: J, maxlength: te, modelValue: me, onOversize: A, onAfterRead: Y, onBeforeFilter: fe, readonly: Se, disabled: Ue } = e;
        if (l != null && l.disabled.value || l != null && l.readonly.value || Ue || Se)
          return;
        const Ae = (we) => we.filter((Be) => Be.file.size > F(J) ? (C(A, _e(Be)), !1) : !0), rn = (we) => {
          const Be = Math.min(we.length, F(te) - me.length);
          return we.slice(0, Be);
        }, un = (we) => Tr(this, null, function* () {
          if (!fe)
            return we;
          const Be = po(fe);
          for (const Qe of Be)
            we = yield Qe(we);
          return we;
        });
        let pe = D(H).map(z);
        pe = yield un(pe), pe = J != null ? Ae(pe) : pe, pe = te != null ? rn(pe) : pe;
        const Ke = yield Promise.all(I(pe)), ue = (yield Promise.all(U(Ke))).filter(({ valid: we }) => we).map(({ varFile: we }) => we);
        C(e["onUpdate:modelValue"], [...me, ...ue]), H.target.value = "", ue.forEach((we) => C(Y, _e(we)));
      });
    }
    function W(H) {
      return Tr(this, null, function* () {
        const { disabled: J, readonly: te, modelValue: me, onBeforeRemove: A, onRemove: Y } = e;
        if (l != null && l.disabled.value || l != null && l.readonly.value || J || te)
          return;
        if (A) {
          const Se = po(C(A, _e(H)));
          if ((yield Promise.all(Se)).some((Ue) => !Ue))
            return;
        }
        const fe = me.filter((Se) => Se !== H);
        C(Y, _e(H)), ve("onRemove"), C(e["onUpdate:modelValue"], fe);
      });
    }
    function K(H) {
      if (!(l != null && l.disabled.value || e.disabled)) {
        if (e.onClickAction) {
          C(e.onClickAction, Z, H);
          return;
        }
        Z();
      }
    }
    function E() {
      return e.modelValue.filter((H) => H.state === "success");
    }
    function R() {
      return e.modelValue.filter((H) => H.state === "error");
    }
    function L() {
      return e.modelValue.filter((H) => H.state === "loading");
    }
    function Z() {
      t.value.click();
    }
    function x() {
      a.value = null, r.value = !1, Gt.close();
    }
    function ve(H) {
      je(() => {
        const { validateTrigger: J, rules: te, modelValue: me } = e;
        c(J, H, te, me, k);
      });
    }
    function ye() {
      return d(e.rules, e.modelValue, k);
    }
    function Ee() {
      w = !0, C(e["onUpdate:modelValue"], []), f();
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
      n: c5,
      classes: d5,
      formatElevation: dn,
      toNumber: F,
      handleHovering: g,
      isHTMLSupportVideo: Sc,
      isHTMLSupportImage: Cc,
      preview: O,
      handleChange: j,
      handleRemove: W,
      getSuccess: E,
      getError: R,
      getLoading: L,
      validate: ye,
      resetValidation: f,
      reset: Ee,
      chooseFile: Z,
      closePreview: x,
      handleActionClick: K,
      toSizeUnit: Oe
    };
  }
});
Vg.render = y5;
var Ji = Vg;
re(Ji);
ie(Ji, Mg);
const kI = Ji;
var Ls = Ji;
const Rg = {
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
var w5 = Object.defineProperty, k5 = Object.defineProperties, $5 = Object.getOwnPropertyDescriptors, cf = Object.getOwnPropertySymbols, C5 = Object.prototype.hasOwnProperty, S5 = Object.prototype.propertyIsEnumerable, df = (e, n, o) => n in e ? w5(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, P5 = (e, n) => {
  for (var o in n || (n = {}))
    C5.call(n, o) && df(e, o, n[o]);
  if (cf)
    for (var o of cf(n))
      S5.call(n, o) && df(e, o, n[o]);
  return e;
}, O5 = (e, n) => k5(e, $5(n)), ff = (e, n, o) => new Promise((t, r) => {
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
const { name: z5, n: T5, classes: E5 } = ne("watermark"), B5 = { ref: "svgRef" }, I5 = ["viewBox", "width", "height"], D5 = ["width", "height"], A5 = ["href", "xlink:href", "x", "y", "width", "height"];
function N5(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.n())
    },
    [
      M(e.$slots, "default"),
      (h(), Ce(ao, {
        to: "body",
        disabled: !e.fullscreen
      }, [
        N(
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
            Ve(N(
              "div",
              B5,
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
                        M(e.$slots, "content", {}, () => [
                          N(
                            "span",
                            {
                              style: X(O5(P5({}, e.font), { fontSize: `${e.font.fontSize}px`, color: e.textColor }))
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
                  ], 8, D5)) : q("v-if", !0),
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
                  }, null, 12, A5)) : q("v-if", !0)
                ], 12, I5))
              ],
              512
              /* NEED_PATCH */
            ), [
              [_n, !1]
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
const Lg = ee({
  name: z5,
  props: Rg,
  setup(e, { slots: n }) {
    const o = $(""), t = $(""), r = $(""), a = $(null), i = $(null);
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
    ), Lo(d), Qt(c);
    function l() {
      return !!(n.content || e.content && !e.image);
    }
    function s() {
      return ff(this, null, function* () {
        return new Promise((f) => {
          const v = document.createElement("canvas"), g = v.getContext("2d"), m = new Image();
          m.crossOrigin = "anonymous", m.referrerPolicy = "no-referrer", m.src = e.image, m.onload = () => {
            v.width = m.width, v.height = m.height, g.drawImage(m, 0, 0), f(v.toDataURL());
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
      return ff(this, null, function* () {
        r.value = io(i.value).color, e.image && (t.value = yield s()), yield je(), c(), o.value = u(a.value.innerHTML);
      });
    }
    return {
      svgRef: a,
      containerRef: i,
      watermarkUrl: o,
      imageUrl: t,
      textColor: r,
      n: T5,
      classes: E5,
      showContent: l,
      resize: d
    };
  }
});
Lg.render = N5;
var Qi = Lg;
re(Qi);
ie(Qi, Rg);
const $I = Qi;
var Fs = Qi;
const M5 = "3.7.3";
function V5(e) {
  pl.install && e.use(pl), vl.install && e.use(vl), ml.install && e.use(ml), bl.install && e.use(bl), kl.install && e.use(kl), $l.install && e.use($l), Cl.install && e.use(Cl), Zr.install && e.use(Zr), Sl.install && e.use(Sl), Pl.install && e.use(Pl), Ol.install && e.use(Ol), zl.install && e.use(zl), Bn.install && e.use(Bn), Tl.install && e.use(Tl), El.install && e.use(El), Bl.install && e.use(Bl), pt.install && e.use(pt), Il.install && e.use(Il), Jr.install && e.use(Jr), Al.install && e.use(Al), Nl.install && e.use(Nl), Ml.install && e.use(Ml), Vl.install && e.use(Vl), Rl.install && e.use(Rl), Vn.install && e.use(Vn), Ll.install && e.use(Ll), jl.install && e.use(jl), Gl.install && e.use(Gl), Jl.install && e.use(Jl), Ql.install && e.use(Ql), xl.install && e.use(xl), oa.install && e.use(oa), _l.install && e.use(_l), es.install && e.use(es), Lt.install && e.use(Lt), ns.install && e.use(ns), os.install && e.use(os), En.install && e.use(En), ts.install && e.use(ts), Dn.install && e.use(Dn), Fn.install && e.use(Fn), Je.install && e.use(Je), rs.install && e.use(rs), Gt.install && e.use(Gt), as.install && e.use(as), is.install && e.use(is), Ft.install && e.use(Ft), Wt.install && e.use(Wt), ls.install && e.use(ls), ss.install && e.use(ss), ht.install && e.use(ht), us.install && e.use(us), dl.install && e.use(dl), cs.install && e.use(cs), jt.install && e.use(jt), vt.install && e.use(vt), Yt.install && e.use(Yt), ra.install && e.use(ra), ds.install && e.use(ds), fs.install && e.use(fs), ps.install && e.use(ps), vs.install && e.use(vs), No.install && e.use(No), ms.install && e.use(ms), hs.install && e.use(hs), aa.install && e.use(aa), gs.install && e.use(gs), bs.install && e.use(bs), ys.install && e.use(ys), tn.install && e.use(tn), ws.install && e.use(ws), ks.install && e.use(ks), $s.install && e.use($s), Cs.install && e.use(Cs), Ps.install && e.use(Ps), Os.install && e.use(Os), zs.install && e.use(zs), Ts.install && e.use(Ts), yt.install && e.use(yt), Es.install && e.use(Es), qt.install && e.use(qt), Xt.install && e.use(Xt), Bs.install && e.use(Bs), Is.install && e.use(Is), Ds.install && e.use(Ds), As.install && e.use(As), Ns.install && e.use(Ns), Ms.install && e.use(Ms), Vs.install && e.use(Vs), Rs.install && e.use(Rs), ta.install && e.use(ta), Ls.install && e.use(Ls), Fs.install && e.use(Fs);
}
const CI = {
  version: M5,
  install: V5,
  ActionSheet: pl,
  Alert: vl,
  AppBar: ml,
  AutoComplete: bl,
  Avatar: kl,
  AvatarGroup: $l,
  BackTop: Cl,
  Badge: Zr,
  BottomNavigation: Sl,
  BottomNavigationItem: Pl,
  Breadcrumb: Ol,
  Breadcrumbs: zl,
  Button: Bn,
  ButtonGroup: Tl,
  Card: El,
  Cell: Bl,
  Checkbox: pt,
  CheckboxGroup: Il,
  Chip: Jr,
  Code: Al,
  Col: Nl,
  Collapse: Ml,
  CollapseItem: Vl,
  CollapseTransition: Rl,
  Context: Vn,
  CountTo: Ll,
  Countdown: jl,
  Counter: Gl,
  DatePicker: Jl,
  Dialog: Ql,
  Divider: xl,
  Drag: oa,
  Ellipsis: _l,
  Fab: es,
  FieldDecorator: Lt,
  FloatingPanel: ns,
  Form: os,
  FormDetails: En,
  HighlighterProvider: ts,
  Hover: Dn,
  HoverOverlay: Fn,
  Icon: Je,
  Image: rs,
  ImagePreview: Gt,
  IndexAnchor: as,
  IndexBar: is,
  Input: Ft,
  Lazy: Wt,
  Link: ls,
  List: ss,
  Loading: ht,
  LoadingBar: us,
  Locale: dl,
  LocaleProvider: cs,
  Menu: jt,
  MenuOption: vt,
  MenuSelect: Yt,
  Option: ra,
  Overlay: ds,
  Pagination: fs,
  Paper: ps,
  Picker: vs,
  Popup: No,
  Progress: ms,
  PullRefresh: hs,
  Radio: aa,
  RadioGroup: gs,
  Rate: bs,
  Result: ys,
  Ripple: tn,
  Row: ws,
  Select: ks,
  Skeleton: $s,
  Slider: Cs,
  Snackbar: Ps,
  Space: Os,
  Step: zs,
  Steps: Ts,
  Sticky: yt,
  StyleProvider: Es,
  Swipe: qt,
  SwipeItem: Xt,
  Switch: Bs,
  Tab: Is,
  TabItem: Ds,
  Table: As,
  Tabs: Ns,
  TabsItems: Ms,
  Themes: Vs,
  TimePicker: Rs,
  Tooltip: ta,
  Uploader: Ls,
  Watermark: Fs
};
export {
  pl as ActionSheet,
  vl as Alert,
  ml as AppBar,
  bl as AutoComplete,
  kl as Avatar,
  $l as AvatarGroup,
  Cl as BackTop,
  Zr as Badge,
  Sl as BottomNavigation,
  Pl as BottomNavigationItem,
  Ol as Breadcrumb,
  zl as Breadcrumbs,
  Bn as Button,
  Tl as ButtonGroup,
  El as Card,
  Bl as Cell,
  pt as Checkbox,
  Il as CheckboxGroup,
  Jr as Chip,
  Al as Code,
  Nl as Col,
  Ml as Collapse,
  Vl as CollapseItem,
  Rl as CollapseTransition,
  Vn as Context,
  Ll as CountTo,
  jl as Countdown,
  Gl as Counter,
  Jl as DatePicker,
  Ql as Dialog,
  xl as Divider,
  oa as Drag,
  _l as Ellipsis,
  es as Fab,
  Lt as FieldDecorator,
  ns as FloatingPanel,
  os as Form,
  En as FormDetails,
  ts as HighlighterProvider,
  Dn as Hover,
  Fn as HoverOverlay,
  Je as Icon,
  rs as Image,
  Gt as ImagePreview,
  as as IndexAnchor,
  is as IndexBar,
  Ft as Input,
  Wt as Lazy,
  ls as Link,
  ss as List,
  ht as Loading,
  us as LoadingBar,
  dl as Locale,
  cs as LocaleProvider,
  jt as Menu,
  vt as MenuOption,
  Yt as MenuSelect,
  ra as Option,
  ds as Overlay,
  wl as PIXEL,
  fs as Pagination,
  ps as Paper,
  vs as Picker,
  No as Popup,
  ms as Progress,
  hs as PullRefresh,
  aa as Radio,
  gs as RadioGroup,
  bs as Rate,
  ys as Result,
  tn as Ripple,
  ws as Row,
  ag as SNACKBAR_TYPE,
  ks as Select,
  $s as Skeleton,
  Cs as Slider,
  Ps as Snackbar,
  Os as Space,
  zs as Step,
  Ts as Steps,
  yt as Sticky,
  Es as StyleProvider,
  qt as Swipe,
  Xt as SwipeItem,
  Bs as Switch,
  Is as Tab,
  Ds as TabItem,
  As as Table,
  Ns as Tabs,
  Ms as TabsItems,
  Vs as Themes,
  Rs as TimePicker,
  ta as Tooltip,
  Ls as Uploader,
  Fs as Watermark,
  K5 as _ActionSheetComponent,
  q5 as _AlertComponent,
  X5 as _AppBarComponent,
  nB as _AutoCompleteComponent,
  tB as _AvatarComponent,
  rB as _AvatarGroupComponent,
  lB as _BackTopComponent,
  sB as _BadgeComponent,
  uB as _BottomNavigationComponent,
  cB as _BottomNavigationItemComponent,
  dB as _BreadcrumbComponent,
  fB as _BreadcrumbsComponent,
  iB as _ButtonComponent,
  pB as _ButtonGroupComponent,
  vB as _CardComponent,
  mB as _CellComponent,
  x5 as _CheckboxComponent,
  hB as _CheckboxGroupComponent,
  gB as _ChipComponent,
  bB as _CodeComponent,
  yB as _ColComponent,
  wB as _CollapseComponent,
  kB as _CollapseItemComponent,
  $B as _CollapseTransitionComponent,
  L5 as _ContextComponent,
  CB as _CountToComponent,
  SB as _CountdownComponent,
  PB as _CounterComponent,
  zB as _DatePickerComponent,
  TB as _DialogComponent,
  EB as _DividerComponent,
  BB as _DragComponent,
  DB as _EllipsisComponent,
  AB as _FabComponent,
  Z5 as _FieldDecoratorComponent,
  NB as _FloatingPanelComponent,
  MB as _FormComponent,
  G5 as _FormDetailsComponent,
  VB as _HighlighterProviderComponent,
  Y5 as _HoverComponent,
  j5 as _HoverOverlayComponent,
  H5 as _IconComponent,
  RB as _ImageComponent,
  UB as _ImagePreviewComponent,
  HB as _IndexAnchorComponent,
  jB as _IndexBarComponent,
  J5 as _InputComponent,
  oB as _LazyComponent,
  YB as _LinkComponent,
  WB as _ListComponent,
  KB as _LoadingBarComponent,
  aB as _LoadingComponent,
  W5 as _LocaleComponent,
  qB as _LocaleProviderComponent,
  Q5 as _MenuComponent,
  _5 as _MenuOptionComponent,
  eB as _MenuSelectComponent,
  XB as _OptionComponent,
  GB as _OverlayComponent,
  ZB as _PaginationComponent,
  JB as _PaperComponent,
  QB as _PickerComponent,
  U5 as _PopupComponent,
  xB as _ProgressComponent,
  _B as _PullRefreshComponent,
  eI as _RadioComponent,
  nI as _RadioGroupComponent,
  oI as _RateComponent,
  tI as _ResultComponent,
  F5 as _RippleComponent,
  rI as _RowComponent,
  aI as _SelectComponent,
  iI as _SkeletonComponent,
  lI as _SliderComponent,
  sI as _SnackbarComponent,
  uI as _SpaceComponent,
  cI as _StepComponent,
  dI as _StepsComponent,
  OB as _StickyComponent,
  fI as _StyleProviderComponent,
  LB as _SwipeComponent,
  FB as _SwipeItemComponent,
  pI as _SwitchComponent,
  vI as _TabComponent,
  mI as _TabItemComponent,
  hI as _TableComponent,
  gI as _TabsComponent,
  bI as _TabsItemsComponent,
  yI as _ThemesComponent,
  wI as _TimePickerComponent,
  IB as _TooltipComponent,
  kI as _UploaderComponent,
  $I as _WatermarkComponent,
  bp as actionSheetProps,
  iu as add,
  Op as alertProps,
  Tp as appBarProps,
  dv as avatarGroupProps,
  uv as avatarProps,
  gv as backTopProps,
  yv as badgeProps,
  Sv as bottomNavigationItemProps,
  kv as bottomNavigationProps,
  Ov as breadcrumbProps,
  Ev as breadcrumbsProps,
  Iv as buttonGroupProps,
  vv as buttonProps,
  Av as cardProps,
  Mv as cellProps,
  Rv as checkboxGroupProps,
  qp as checkboxProps,
  Fv as chipProps,
  Hv as codeProps,
  Yv as colProps,
  Zv as collapseItemProps,
  Xv as collapseProps,
  xv as collapseTransitionProps,
  em as countToProps,
  om as countdownProps,
  mm as counterProps,
  Cp as currentMessage,
  Sm as datePickerProps,
  CI as default,
  pn as defaultLazyOptions,
  Im as dialogProps,
  Am as dividerProps,
  Mm as dragProps,
  Fm as ellipsisProps,
  yp as enUS,
  kp as faIR,
  Hm as fabProps,
  ya as fieldDecoratorProps,
  Bp as formDetailsProps,
  Wm as formProps,
  sp as hoverOverlayProps,
  on as iconProps,
  rv as imageCache,
  Qm as imagePreviewProps,
  Xm as imageProps,
  eh as indexAnchorProps,
  oh as indexBarProps,
  uu as inputProps,
  V5 as install,
  rh as linkProps,
  ih as listProps,
  D4 as loadingBarProps,
  co as loadingProps,
  Jp as menuOptionProps,
  cu as menuProps,
  xp as menuSelectProps,
  Sp as merge,
  $p as messages,
  wh as optionProps,
  $h as overlayProps,
  Ch as paginationProps,
  Ph as paperProps,
  zh as pickerProps,
  St as popupProps,
  Eh as progressProps,
  Ih as pullRefreshProps,
  Vh as radioGroupProps,
  Ah as radioProps,
  Lh as rateProps,
  qh as resultProps,
  Gh as rowProps,
  Jh as selectProps,
  xh as skeletonProps,
  eg as sliderProps,
  Eu as snackbarProps,
  sg as spaceProps,
  ug as stepProps,
  fg as stepsProps,
  Nt as stickyProps,
  vg as styleProviderProps,
  Su as swipeProps,
  hg as switchProps,
  an as t,
  kg as tabItemProps,
  bg as tabProps,
  Cg as tableProps,
  zg as tabsItemsProps,
  Pg as tabsProps,
  Eg as timePickerProps,
  Rm as tooltipProps,
  Mg as uploaderProps,
  lu as use,
  eo as useHoverOverlay,
  au as useLocale,
  M5 as version,
  Rg as watermarkProps,
  tu as zhCN,
  wp as zhHK,
  ru as zhTW
};
