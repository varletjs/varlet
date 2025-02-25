import { onMounted as Lo, nextTick as He, onActivated as Fo, computed as B, ref as w, watch as fe, isRef as Kg, onBeforeUnmount as ua, onDeactivated as yt, onUnmounted as Jt, getCurrentInstance as _o, inject as Hs, unref as hf, reactive as xe, provide as js, isVNode as qg, defineComponent as ee, h as Qt, Comment as Xg, Fragment as Ae, createApp as Gg, onBeforeMount as Zg, createVNode as X, Teleport as io, Transition as _e, withDirectives as Ve, vShow as xn, mergeProps as je, createElementBlock as P, openBlock as m, normalizeClass as p, createBlock as we, resolveDynamicComponent as wt, normalizeStyle as Z, resolveComponent as _, resolveDirective as Ye, createCommentVNode as G, createElementVNode as L, toDisplayString as se, withCtx as ce, renderSlot as U, renderList as qe, createTextVNode as De, onUpdated as _t, normalizeProps as To, guardReactiveProps as xt, createSlots as Xo, withModifiers as Xn, vModelText as Jg, withKeys as Mu, TransitionGroup as Qg } from "vue";
function Ys(e) {
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
const _g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ys
}, Symbol.toStringTag, { value: "Module" }));
var Ws = Object.defineProperty, xg = Object.defineProperties, eb = Object.getOwnPropertyDescriptor, nb = Object.getOwnPropertyDescriptors, ob = Object.getOwnPropertyNames, Nu = Object.getOwnPropertySymbols, gf = Object.prototype.hasOwnProperty, tb = Object.prototype.propertyIsEnumerable, Vu = (e, n, o) => n in e ? Ws(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, bf = (e, n) => {
  for (var o in n || (n = {}))
    gf.call(n, o) && Vu(e, o, n[o]);
  if (Nu)
    for (var o of Nu(n))
      tb.call(n, o) && Vu(e, o, n[o]);
  return e;
}, yf = (e, n) => xg(e, nb(n)), wf = (e, n) => {
  for (var o in n)
    Ws(e, o, { get: n[o], enumerable: !0 });
}, rb = (e, n, o, t) => {
  if (n && typeof n == "object" || typeof n == "function")
    for (let r of ob(n))
      !gf.call(e, r) && r !== o && Ws(e, r, { get: () => n[r], enumerable: !(t = eb(n, r)) || t.enumerable });
  return e;
}, kf = (e, n, o) => (rb(e, n, "default"), o), $f = {};
wf($f, {
  NOOP: () => Kb,
  assert: () => Bf,
  at: () => er,
  baseRound: () => va,
  call: () => C,
  camelize: () => da,
  cancelAnimationFrame: () => ut,
  ceil: () => t0,
  chunk: () => wb,
  clamp: () => $n,
  clampArrayRange: () => Cf,
  classes: () => Gs,
  cloneDeep: () => qb,
  cloneDeepWith: () => Yf,
  copyText: () => Nf,
  createNamespaceFn: () => Js,
  createStorage: () => fa,
  debounce: () => Wb,
  delay: () => ab,
  difference: () => Sb,
  differenceWith: () => Kr,
  doubleRaf: () => bn,
  download: () => jf,
  ensurePrefix: () => Mb,
  ensureSuffix: () => Nb,
  find: () => Df,
  floor: () => ul,
  genNumberKey: () => yb,
  genStringKey: () => Rb,
  getAllParentScroller: () => Rf,
  getGlobalThis: () => nr,
  getParentScroller: () => Qs,
  getRect: () => nn,
  getScrollLeft: () => tr,
  getScrollTop: () => ho,
  getStyle: () => oo,
  groupBy: () => Ob,
  hasOwn: () => Go,
  inBrowser: () => no,
  inMobile: () => Nt,
  inViewport: () => _s,
  intersection: () => Pb,
  intersectionWith: () => Af,
  isArray: () => Fe,
  isArrayBuffer: () => Nr,
  isBlob: () => mb,
  isBoolean: () => or,
  isDOMException: () => Lr,
  isDataView: () => Vr,
  isDate: () => Rr,
  isEmpty: () => Wn,
  isEmptyPlainObject: () => gb,
  isEqual: () => sb,
  isEqualWith: () => Of,
  isError: () => jr,
  isFile: () => vb,
  isFunction: () => mn,
  isMap: () => Fr,
  isNonEmptyArray: () => ub,
  isNullish: () => cb,
  isNumber: () => En,
  isNumeric: () => qs,
  isObject: () => mo,
  isPlainObject: () => Rn,
  isPrimitive: () => hb,
  isPromise: () => db,
  isRegExp: () => Hr,
  isSet: () => Ur,
  isString: () => sn,
  isSymbol: () => fb,
  isTruthy: () => pb,
  isTypedArray: () => Yr,
  isWeakMap: () => zf,
  isWeakSet: () => Ef,
  isWindow: () => ca,
  kebabCase: () => Zs,
  localStorage: () => Uf,
  lowerFirst: () => Lb,
  mapObject: () => Ib,
  maxBy: () => Jb,
  mean: () => xb,
  meanBy: () => e0,
  merge: () => Xb,
  mergeWith: () => Wf,
  minBy: () => Qb,
  mitt: () => Ys,
  motion: () => xs,
  normalizeToArray: () => fo,
  objectToString: () => Pf,
  omit: () => Bb,
  omitBy: () => Db,
  once: () => Yb,
  pascalCase: () => Vf,
  pick: () => Eb,
  pickBy: () => Tb,
  prettyJSONObject: () => Lf,
  preventDefault: () => Me,
  promiseWithResolvers: () => Ab,
  raf: () => po,
  randomColor: () => Ub,
  randomNumber: () => Sf,
  randomString: () => Hb,
  removeArrayBlank: () => If,
  removeArrayEmpty: () => Cb,
  removeItem: () => Io,
  requestAnimationFrame: () => Ao,
  round: () => o0,
  sample: () => n0,
  sessionStorage: () => Ff,
  shuffle: () => $b,
  slash: () => jb,
  sum: () => qf,
  sumBy: () => Xf,
  sumHash: () => _b,
  supportTouch: () => Tf,
  throttle: () => pa,
  times: () => ib,
  toArrayBuffer: () => Gb,
  toDataURL: () => Kf,
  toNumber: () => W,
  toRawType: () => Xe,
  toText: () => Zb,
  toTypeString: () => Ks,
  toggleItem: () => kb,
  tryParseJSON: () => Hf,
  uniq: () => sl,
  uniqBy: () => Wr,
  upperFirst: () => Fb,
  xor: () => zb,
  xorWith: () => Mf
});
function er(e, n) {
  if (e.length)
    return n < 0 && (n += e.length), e[n];
}
function $n(e, n, o) {
  return Math.min(o, Math.max(n, e));
}
function Cf(e, n) {
  return $n(e, 0, n.length - 1);
}
function ab(e) {
  return new Promise((n) => {
    setTimeout(n, e);
  });
}
function Sf(e = 0, n = 100) {
  return Math.floor(Math.random() * (n - e + 1)) + e;
}
function ib(e, n) {
  return Array.from({ length: e }, (o, t) => n(t));
}
function no() {
  return typeof window < "u";
}
function nr() {
  return typeof globalThis < "u" ? globalThis : no() ? window : typeof global < "u" ? global : self;
}
var { hasOwnProperty: lb } = Object.prototype;
function Go(e, n) {
  return lb.call(e, n);
}
function Nt() {
  return no() && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
function Fe(e) {
  return Array.isArray(e);
}
var Pf = Object.prototype.toString;
function Ks(e) {
  return Pf.call(e);
}
function Xe(e) {
  return Ks(e).slice(8, -1);
}
function Nr(e) {
  return Xe(e) === "ArrayBuffer";
}
function or(e) {
  return typeof e == "boolean";
}
function Vr(e) {
  return Xe(e) === "DataView";
}
function Rr(e) {
  return Xe(e) === "Date";
}
function Lr(e) {
  return Xe(e) === "DOMException";
}
function Wn(e) {
  return e == null || e === "" || Fe(e) && !e.length;
}
function Fr(e) {
  return Xe(e) === "Map";
}
function Rn(e) {
  return Xe(e) === "Object";
}
function Ur(e) {
  return Xe(e) === "Set";
}
function mo(e) {
  return typeof e == "object" && e !== null;
}
function Hr(e) {
  return Xe(e) === "RegExp";
}
function jr(e) {
  return Xe(e) === "Error";
}
function Yr(e) {
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
function Of(e, n, o) {
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
    if (Rr(i) && Rr(l))
      return i.getTime() === l.getTime();
    if (Hr(i) && Hr(l))
      return i.source === l.source && i.flags === l.flags;
    if (jr(i) && jr(l))
      return i.name === l.name && i.message === l.message && i.cause === l.cause;
    if (Lr(i) && Lr(l))
      return i.name === l.name && i.message === l.message;
    if (Yr(i) && Yr(l) || Vr(i) && Vr(l)) {
      if (i.byteLength !== l.byteLength)
        return !1;
      const d = new Uint8Array(i.buffer), f = new Uint8Array(l.buffer);
      return d.every((v, h) => v === f[h]);
    }
    if (Nr(i) && Nr(l)) {
      if (i.byteLength !== l.byteLength)
        return !1;
      const d = new Uint8Array(i), f = new Uint8Array(l);
      return d.every((v, h) => v === f[h]);
    }
    if (s.get(i) === l && u.get(l) === i)
      return !0;
    if (s.set(i, l), u.set(l, i), Fr(i) && Fr(l) || Ur(i) && Ur(l)) {
      if (i.size !== l.size)
        return !1;
      const d = [...i], f = [...l], v = d.every((h, g) => a(h, f[g], s, u));
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
        (h) => a(i[h], l[h], s, u)
      );
      return s.delete(i), u.delete(l), v;
    }
    return !1;
  }
  return a(e, n, t, r);
}
function sb(e, n) {
  return Of(e, n, () => {
  });
}
function mn(e) {
  return typeof e == "function";
}
function ub(e) {
  return Fe(e) && !!e.length;
}
function cb(e) {
  return e == null;
}
function En(e) {
  return typeof e == "number";
}
function sn(e) {
  return typeof e == "string";
}
function qs(e) {
  return En(e) || sn(e) && /^[-+]?\d+$/.test(e);
}
function db(e) {
  return mo(e) && mn(e.then) && mn(e.catch);
}
function fb(e) {
  return typeof e == "symbol";
}
function pb(e) {
  return !!e;
}
function zf(e) {
  return Xe(e) === "WeakMap";
}
function Ef(e) {
  return Xe(e) === "WeakSet";
}
function ca(e) {
  return e === window;
}
function Tf() {
  return no() && "ontouchstart" in window;
}
function vb(e) {
  return Xe(e) === "File";
}
function mb(e) {
  return Xe(e) === "Blob";
}
function hb(e) {
  return e == null || typeof e != "object" && typeof e != "function";
}
function gb(e) {
  return Rn(e) && Object.keys(e).length === 0 && Object.getOwnPropertySymbols(e).length === 0;
}
function Bf(e, n) {
  if (!e)
    throw new Error(n);
}
function W(e) {
  return e == null ? 0 : sn(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : or(e) ? Number(e) : e;
}
var bb = 0;
function yb() {
  return bb++;
}
function wb(e, n = 1) {
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
function kb(e, n) {
  return e.includes(n) ? Io(e, n) : e.push(n), e;
}
function sl(e) {
  return [...new Set(e)];
}
function Wr(e, n) {
  return e.reduce((o, t) => (o.findIndex((a) => n(t, a)) === -1 && o.push(t), o), []);
}
function Df(e, n, o = "start") {
  let t = o === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && t >= 0 && t <= e.length - 1; ) {
    if (n(e[t], t, e))
      return [e[t], t];
    o === "start" ? t++ : t--;
  }
  return [null, -1];
}
function $b(e) {
  for (let n = e.length - 1; n > 0; n--) {
    const o = Math.floor(Math.random() * (n + 1));
    [e[n], e[o]] = [e[o], e[n]];
  }
  return e;
}
function If(e) {
  return e.filter((n) => n != null);
}
function Cb(e) {
  return e.filter((n) => n != null && n !== "");
}
function fo(e) {
  return Fe(e) ? e : [e];
}
function Kr(e, ...n) {
  const o = er(n, -1), t = n.slice(0, -1).reduce((r, a) => [...r, ...a], []);
  return e.filter((r) => !t.some((a) => o(r, a)));
}
function Sb(e, ...n) {
  return Kr(e, ...n, (o, t) => o === t);
}
function Af(...e) {
  const n = er(e, -1), o = e.slice(0, -1);
  if (o.length === 0)
    return [];
  if (o.length === 1)
    return Wr(o[0], n);
  function t(r, a) {
    return r.filter((i) => a.some((l) => n(i, l)));
  }
  return Wr(
    o.reduce((r, a) => t(r, a)),
    n
  );
}
function Pb(...e) {
  return Af(...e, (n, o) => n === o);
}
function Ob(e, n) {
  return e.reduce(
    (o, t) => {
      var r;
      const a = n(t);
      return ((r = o[a]) != null ? r : o[a] = []).push(t), o;
    },
    {}
  );
}
function Mf(...e) {
  const n = er(e, -1), o = e.slice(0, -1);
  return Wr(
    o.reduce((t, r) => [...Kr(t, r, n), ...Kr(r, t, n)]),
    n
  );
}
function zb(...e) {
  return Mf(...e, (n, o) => n === o);
}
function Eb(e, n) {
  return n.reduce(
    (o, t) => (o[t] = e[t], o),
    {}
  );
}
function Tb(e, n) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)].reduce((t, r) => {
    const a = e[r];
    return n(a, r) && (t[r] = a), t;
  }, {});
}
function Bb(e, n) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)].reduce(
    (t, r) => (n.includes(r) || (t[r] = e[r]), t),
    {}
  );
}
function Db(e, n) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)].reduce((t, r) => {
    const a = e[r];
    return n(a, r) || (t[r] = a), t;
  }, {});
}
function Ib(e, n) {
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
function Ab() {
  let e, n;
  return { promise: new Promise((t, r) => {
    e = t, n = r;
  }), resolve: e, reject: n };
}
var Xs = {};
wf(Xs, {
  cancelAnimationFrame: () => ut,
  classes: () => Gs,
  copyText: () => Nf,
  createNamespaceFn: () => Js,
  createStorage: () => fa,
  doubleRaf: () => bn,
  download: () => jf,
  getAllParentScroller: () => Rf,
  getParentScroller: () => Qs,
  getRect: () => nn,
  getScrollLeft: () => tr,
  getScrollTop: () => ho,
  getStyle: () => oo,
  inViewport: () => _s,
  localStorage: () => Uf,
  mitt: () => Ys,
  motion: () => xs,
  prettyJSONObject: () => Lf,
  preventDefault: () => Me,
  raf: () => po,
  requestAnimationFrame: () => Ao,
  sessionStorage: () => Ff,
  tryParseJSON: () => Hf
});
function ut(e) {
  const n = nr();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Gs(...e) {
  return e.map((n) => {
    if (Fe(n)) {
      const [o, t, r = null] = n;
      return o ? t : r;
    }
    return n;
  });
}
function Nf(e) {
  if (!e)
    return;
  const n = document.createElement("textarea");
  n.value = e, n.style.position = "fixed", n.style.opacity = "0", document.body.appendChild(n), n.select(), document.execCommand("copy"), document.body.removeChild(n);
}
function da(e) {
  return e = e.replace(/-(\w)/g, (n, o) => o.toUpperCase()), e.replace(e.charAt(0), e.charAt(0).toLowerCase());
}
function Mb(e, n) {
  return e.startsWith(n) ? e : n + e;
}
function Nb(e, n) {
  return e.endsWith(n) ? e : e + n;
}
var Vb = 0;
function Rb() {
  return `generated-key-${Vb++}`;
}
function Zs(e) {
  return e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase();
}
function Vf(e) {
  return da(e).replace(e.charAt(0), e.charAt(0).toUpperCase());
}
function Lb(e) {
  return e.charAt(0).toLowerCase() + e.slice(1);
}
function Fb(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ub() {
  const e = "0123456789abcdef";
  let n = "#";
  for (let o = 0; o < 6; o++)
    n += e[Math.floor(Math.random() * 16)];
  return n;
}
function Hb(e = 10) {
  let n = o();
  for (; n.length < e; )
    n += o();
  function o() {
    return Math.random().toString(36).slice(2);
  }
  return n.slice(0, e);
}
function jb(e) {
  return e.startsWith("\\\\?\\") ? e : e.replace(/\\/g, "/");
}
function Js(e) {
  return (n) => {
    const o = `${e}-${n}`, t = (r) => r ? r[0] === "$" ? r.replace("$", e) : r.startsWith("--") ? `${o}${r}` : `${o}__${r}` : o;
    return {
      name: Vf(o),
      n: t,
      classes: Gs
    };
  };
}
function Ao(e) {
  const n = nr();
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
function Qs(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const o = /(scroll|auto)/, { overflowY: t, overflow: r } = oo(n);
    if (o.test(t) || o.test(r))
      return n;
  }
  return window;
}
function Rf(e) {
  const n = [];
  let o = e;
  for (; !ca(o); )
    o = Qs(o), n.push(o);
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
    return yf(bf({}, t), {
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
function _s(e) {
  const { top: n, bottom: o, left: t, right: r } = nn(e), { width: a, height: i } = nn(window), l = t <= a && r >= 0, s = n <= i && o >= 0;
  return l && s;
}
function Lf(e) {
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
  return yf(bf({}, e), {
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
var Ff = fa(nr().sessionStorage), Uf = fa(nr().localStorage);
function Hf(e) {
  try {
    return JSON.parse(e);
  } catch {
    return;
  }
}
function jf(e, n = "file") {
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
  function g() {
    l === "running" && (ut(c), k("paused"), f = performance.now());
  }
  function y() {
    ut(c), k("pending"), s = n, c = void 0, d = void 0, f = void 0, v = 0;
  }
  function $() {
    return l;
  }
  function k(b) {
    l = b, i(b);
  }
  return {
    start: h,
    pause: g,
    reset: y,
    getState: $
  };
}
kf(Xs, _g);
kf($f, Xs);
function C(e, ...n) {
  if (Fe(e))
    return e.map((o) => o(...n));
  if (e)
    return e(...n);
}
function Yb(e) {
  let n = !1, o;
  return function(...t) {
    return n || (n = !0, o = e.apply(this, t)), o;
  };
}
function Wb(e, n = 0) {
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
function Kb() {
}
function Yf(e, n) {
  const o = /* @__PURE__ */ new WeakMap();
  function t(i, l) {
    const s = n(i);
    if (s !== void 0)
      return s;
    if (!mo(i))
      return i;
    if (l.has(i))
      return l.get(i);
    if (Rr(i))
      return new Date(i);
    if (Hr(i))
      return new RegExp(i);
    if (Fr(i)) {
      const u = /* @__PURE__ */ new Map();
      return l.set(i, u), i.forEach((c, d) => {
        u.set(t(d, l), t(c, l));
      }), u;
    }
    if (Ur(i)) {
      const u = /* @__PURE__ */ new Set();
      return l.set(i, u), i.forEach((c) => {
        u.add(t(c, l));
      }), u;
    }
    if (Xe(i) === "String" || Xe(i) === "Number" || Xe(i) === "Boolean")
      return a(i, i.valueOf());
    if (zf(i) || Ef(i) || jr(i) || Lr(i))
      return {};
    if (Yr(i))
      return a(i, r(i.buffer), i.byteOffset, i.length);
    if (Vr(i))
      return a(i, r(i.buffer), i.byteOffset, i.byteLength);
    if (Nr(i))
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
function qb(e) {
  return Yf(e, () => {
  });
}
function Wf(e, ...n) {
  const o = er(n, -1), t = [e, ...n.slice(0, -1)];
  let r = t.length - 1, a = t[r];
  for (; r; )
    a = i(t[r - 1], a, o), r--;
  function i(l, s, u) {
    function c(d, f) {
      for (const v in f)
        if (Go(f, v)) {
          const h = f[v], g = d[v], y = u(g, h, v, l, s);
          y !== void 0 ? d[v] = y : mo(h) ? mo(g) ? d[v] = c(g, h) : d[v] = c(Fe(h) ? [] : {}, h) : d[v] = h;
        }
      return d;
    }
    return c(l, s);
  }
  return a;
}
function Xb(e, ...n) {
  return Wf(e, ...n, () => {
  });
}
function Gb(e) {
  return new Promise((n) => {
    const o = new FileReader();
    o.onload = () => {
      n(o.result);
    }, o.readAsArrayBuffer(e);
  });
}
function Kf(e) {
  return new Promise((n) => {
    const o = new FileReader();
    o.onload = () => {
      n(o.result);
    }, o.readAsDataURL(e);
  });
}
function Zb(e) {
  return new Promise((n) => {
    const o = new FileReader();
    o.onload = () => {
      n(o.result);
    }, o.readAsText(e);
  });
}
function Jb(e, n) {
  if (e.length)
    return e.reduce((o, t) => n(o) > n(t) ? o : t, e[0]);
}
function Qb(e, n) {
  if (e.length)
    return e.reduce((o, t) => n(o) < n(t) ? o : t, e[0]);
}
function qf(e) {
  return e.reduce((n, o) => n + o, 0);
}
function Xf(e, n) {
  return e.reduce((o, t) => o + n(t), 0);
}
function _b(e) {
  function n(t, r) {
    for (let a = 0; a < r.length; a++) {
      const i = r.charCodeAt(a);
      t = (t << 5) - t + i, t |= 0;
    }
    return t < 0 ? t * -2 : t;
  }
  function o(t, r, a, i) {
    return t = n(t, a), t = n(t, Ks(r)), t = n(t, typeof r), r === null ? n(t, "null") : r === void 0 ? n(t, "undefined") : mo(r) || mn(r) ? i.includes(r) ? n(t, `[Circular]${a}`) : (i.push(r), t = Object.keys(r).sort().reduce((l, s) => o(l, r[s], s, i), t), mn(r.valueOf) ? n(t, String(r.valueOf())) : t) : n(t, r.toString());
  }
  return o(0, e, "", []).toString(16).padStart(8, "0");
}
function xb(e) {
  return qf(e) / e.length;
}
function e0(e, n) {
  return Xf(e, n) / e.length;
}
function n0(e) {
  if (e.length)
    return e[Sf(0, e.length - 1)];
}
function o0(e, n = 0) {
  return va(e, n, Math.round);
}
function va(e, n = 0, o) {
  return n = $n(n, -292, 292), n ? +`${o(`${e}e${n}`)}e${-n}` : o(e);
}
function ul(e, n = 0) {
  return va(e, n, Math.floor);
}
function t0(e, n = 0) {
  return va(e, n, Math.ceil);
}
function Ln(e, n, o) {
  return Bf(e, `Varlet [${n}]: ${o}`);
}
function r0(e, n) {
  console.warn(`Varlet [${e}]: ${n}`);
}
function lt(e, n) {
  console.error(`Varlet [${e}]: ${n}`);
}
var a0 = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, i0 = Object.defineProperty, qr = Object.getOwnPropertySymbols, Gf = Object.prototype.hasOwnProperty, Zf = Object.prototype.propertyIsEnumerable, Ru = (e, n, o) => n in e ? i0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, l0 = (e, n) => {
  for (var o in n || (n = {}))
    Gf.call(n, o) && Ru(e, o, n[o]);
  if (qr)
    for (var o of qr(n))
      Zf.call(n, o) && Ru(e, o, n[o]);
  return e;
}, s0 = (e, n) => {
  var o = {};
  for (var t in e)
    Gf.call(e, t) && n.indexOf(t) < 0 && (o[t] = e[t]);
  if (e != null && qr)
    for (var t of qr(e))
      n.indexOf(t) < 0 && Zf.call(e, t) && (o[t] = e[t]);
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
  const s = (v) => mn(v) ? v() : hf(v), u = (v) => {
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
  Kg(e) && (d = fe(
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
  }), ua(() => {
    c(e);
  }), yt(() => {
    c(e);
  }), f;
}
function Jf(e, n, o) {
  if (!no())
    return;
  We(document, n, (r) => {
    const a = mn(e) ? e() : hf(e);
    a && !a.contains(r.target) && o(r);
  });
}
function rr(e) {
  let n = !1;
  yt(() => {
    n = !0, e();
  }), Jt(() => {
    n || e();
  });
}
function eu(e) {
  const n = _o();
  return e in n.provides;
}
function wn(e) {
  if (!eu(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const o = Hs(e), { childInstances: t, collect: r, clear: a } = o, i = s0(o, ["childInstances", "collect", "clear"]), l = _o();
  return {
    index: B(() => t.indexOf(l)),
    parentProvider: i,
    bindParent: (c) => {
      Lo(() => {
        He().then(() => {
          r(l, c);
        });
      }), ua(() => {
        He().then(() => {
          a(l, c);
        });
      });
    }
  };
}
function u0(e) {
  const n = [], o = (t) => {
    if (t != null && t.component) {
      o(t == null ? void 0 : t.component.subTree);
      return;
    }
    Fe(t == null ? void 0 : t.children) && t.children.forEach((r) => {
      qg(r) && (n.push(r), o(r));
    });
  };
  return o(e), n;
}
function kn(e) {
  const n = _o(), o = xe([]), t = [], r = B(() => o.length), a = () => {
    const u = u0(n.subTree);
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
      js(e, l0({
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
function c0(e, n) {
  const o = w(!1);
  return fe(
    e,
    (t) => {
      n === t && (o.value = !0);
    },
    { immediate: !0 }
  ), o;
}
function d0(e, n) {
  if (e > n)
    return "horizontal";
  if (n > e)
    return "vertical";
}
function kt() {
  const e = w(0), n = w(0), o = w(0), t = w(0), r = w(0), a = w(0), i = w(0), l = w(0), s = w(0), u = w(0), c = w(), d = w(!1), f = w(!1), v = w(0), h = w(0);
  let g = null;
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
      const { clientX: D, clientY: A } = O.touches[0];
      e.value = D, n.value = A, i.value = D, l.value = A, d.value = !0, v.value = performance.now(), f.value = !1, g && window.cancelAnimationFrame(g);
    },
    moveTouch: (O) => {
      const { clientX: D, clientY: A } = O.touches[0];
      f.value = !0, o.value = D - e.value, t.value = A - n.value, r.value = Math.abs(o.value), a.value = Math.abs(t.value), h.value = Math.sqrt(r.value ** 2 + a.value ** 2), s.value = D - i.value, u.value = A - l.value, c.value || (c.value = d0(r.value, a.value)), i.value = D, l.value = A;
    },
    endTouch: () => {
      d.value = !1, g = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    },
    isReachTop: (O) => ho(O) === 0 && t.value > 0,
    isReachBottom: (O, D = 1) => {
      const { scrollHeight: A, clientHeight: V, scrollTop: R } = O, Y = Math.abs(A - R - V);
      return t.value < 0 && Y <= D;
    }
  };
}
function Qf() {
  const e = _o(), n = Zs(e.type.name), o = w(void 0);
  return Lo(() => {
    o.value = `${n}-${e.uid}`;
  }), o;
}
function f0(e = {}) {
  const { initialWidth: n = 0, initialHeight: o = 0 } = e, t = w(n), r = w(o), a = () => {
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
  const u = w(s());
  let c = !0;
  return fe(
    () => e[n],
    () => {
      c = !1, u.value = s(), He(() => {
        c = !0;
      });
    }
  ), fe(
    () => u.value,
    (d) => {
      c && (i ? i(l, d) : C(e[l], d));
    }
  ), u;
}
function p0(e) {
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
var v0 = Object.defineProperty, m0 = Object.defineProperties, h0 = Object.getOwnPropertyDescriptors, Lu = Object.getOwnPropertySymbols, g0 = Object.prototype.hasOwnProperty, b0 = Object.prototype.propertyIsEnumerable, Fu = (e, n, o) => n in e ? v0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, cl = (e, n) => {
  for (var o in n || (n = {}))
    g0.call(n, o) && Fu(e, o, n[o]);
  if (Lu)
    for (var o of Lu(n))
      b0.call(n, o) && Fu(e, o, n[o]);
  return e;
}, y0 = (e, n) => m0(e, h0(n)), Uu = (e, n, o) => new Promise((t, r) => {
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
          n[t] = y0(cl({}, a), {
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
function w0(e) {
  const n = Gg(e), o = document.createElement("div");
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
      return () => Qt(e, cl(cl({}, n), o));
    }
  }, { unmount: r } = w0(t);
  return { unmountInstance: r };
}
function _f(e) {
  const n = [];
  return e.forEach((o) => {
    if (o.type !== Xg) {
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
function Hu(e) {
  return Rn(e) && mn(e.safeParseAsync);
}
function k0(e) {
  return Rn(e) && Go(e, "success");
}
function Un() {
  const e = w(""), n = (r, a, i) => Uu(this, null, function* () {
    const l = fo(r).filter((u) => Hu(u) || mn(u)), s = yield Promise.all(
      l.map((u) => Hu(u) ? u.safeParseAsync(a) : u(a, i))
    );
    return o(), !s.some((u) => {
      if (k0(u)) {
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
    validateWithTrigger: (r, a, i, l, s) => Uu(this, null, function* () {
      r.includes(a) && (yield n(i, l, s)) && (e.value = "");
    })
  };
}
function $0(e) {
  We(() => window, "hashchange", e), We(() => window, "popstate", e);
}
function xo() {
  const e = w(!1);
  return Fo(() => {
    e.value = !1;
  }), yt(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
const ne = Js("var");
function F(e) {
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
    return () => sn(e.is) ? Qt(e.tag, e.is) : e.is;
  }
});
var xf = {
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
}, ep = {
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
}, np = {
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
}, nu = {
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
}, ou = {
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
}, op = ou, C0 = Object.defineProperty, ju = Object.getOwnPropertySymbols, S0 = Object.prototype.hasOwnProperty, P0 = Object.prototype.propertyIsEnumerable, Yu = (e, n, o) => n in e ? C0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Wu = (e, n) => {
  for (var o in n || (n = {}))
    S0.call(n, o) && Yu(e, o, n[o]);
  if (ju)
    for (var o of ju(n))
      P0.call(n, o) && Yu(e, o, n[o]);
  return e;
};
function tu() {
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
      e.value[i] = Wu(Wu({}, e.value[i]), l), t(i);
    },
    t: (i) => {
      if (Go(n.value, i))
        return n.value[i];
    }
  };
}
const { messages: tp, currentMessage: rp, add: ru, use: au, merge: ap, t: an } = tu();
ru("zh-CN", nu);
au("zh-CN");
const cB = {
  zhCN: nu,
  enUS: xf,
  zhTW: ou,
  zhHK: op,
  faIR: ep,
  jaJP: np,
  messages: tp,
  currentMessage: rp,
  add: ru,
  use: au,
  merge: ap,
  t: an,
  useLocale: tu
};
var dl = {
  zhCN: nu,
  enUS: xf,
  zhTW: ou,
  zhHK: op,
  faIR: ep,
  jaJP: np,
  messages: tp,
  currentMessage: rp,
  add: ru,
  use: au,
  merge: ap,
  t: an,
  useLocale: tu
};
const fl = Symbol("LOCALE_PROVIDER_KEY");
function O0(e) {
  js(fl, e);
}
function so() {
  return eu(fl) ? Hs(fl) : { t: null };
}
const ip = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, dB = xe(ip);
var Vn = xe(ip);
const { n: Ku } = ne("");
function lp() {
  Object.keys(Vn.locks).length <= 0 ? document.body.classList.remove(Ku("$--lock")) : document.body.classList.add(Ku("$--lock"));
}
function mr(e) {
  Vn.locks[e] = 1, lp();
}
function hr(e) {
  delete Vn.locks[e], lp();
}
function ir(e, n) {
  const { uid: o } = _o();
  n && fe(n, (t) => {
    t === !1 ? hr(o) : t === !0 && e() === !0 && mr(o);
  }), fe(e, (t) => {
    n && n() === !1 || (t === !0 ? mr(o) : hr(o));
  }), Zg(() => {
    n && n() === !1 || e() === !0 && mr(o);
  }), Jt(() => {
    n && n() === !1 || e() === !0 && hr(o);
  }), Fo(() => {
    n && n() === !1 || e() === !0 && mr(o);
  }), yt(() => {
    n && n() === !1 || e() === !0 && hr(o);
  });
}
const bo = [];
function iu(e, n) {
  const { uid: o } = _o();
  fe(e, (i) => {
    i && !a(o) ? r() : setTimeout(() => {
      Io(bo, a(o));
    });
  }), yn(() => {
    e() && r();
  }), rr(() => {
    Io(bo, a(o));
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
function lr(e, n) {
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
}, sp = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function up() {
  const { bindParent: e, parentProvider: n, index: o } = wn(sp);
  return {
    index: o,
    popup: n,
    bindPopup: e
  };
}
function z0() {
  const { bindChildren: e, childProviders: n, length: o } = kn(sp);
  return {
    length: o,
    popupItems: n,
    bindPopupItems: e
  };
}
var E0 = Object.defineProperty, qu = Object.getOwnPropertySymbols, T0 = Object.prototype.hasOwnProperty, B0 = Object.prototype.propertyIsEnumerable, Xu = (e, n, o) => n in e ? E0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, D0 = (e, n) => {
  for (var o in n || (n = {}))
    T0.call(n, o) && Xu(e, o, n[o]);
  if (qu)
    for (var o of qu(n))
      B0.call(n, o) && Xu(e, o, n[o]);
  return e;
};
const {
  name: I0,
  n: jn,
  classes: _i
} = ne("popup");
var ma = ee({
  name: I0,
  inheritAttrs: !1,
  props: Ct,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const t = c0(() => e.show, !0), {
      zIndex: r
    } = lr(() => e.show, 3), a = B(() => {
      var h;
      return (h = e.zIndex) != null ? h : r.value;
    }), {
      onStackTop: i
    } = iu(() => e.show, a), {
      disabled: l
    } = xo(), {
      bindPopupItems: s
    } = z0();
    ir(() => e.show, () => e.lockScroll), fe(() => e.show, (h) => {
      C(h ? e.onOpen : e.onClose);
    }), s({
      show: B(() => e.show)
    }), We(() => window, "keydown", v), $0(() => C(e.onRouteChange));
    function u() {
      const {
        closeOnClickOverlay: h,
        onClickOverlay: g
      } = e;
      C(g), h && C(e["onUpdate:show"], !1);
    }
    function c() {
      const {
        overlayClass: h = "",
        overlayStyle: g
      } = e;
      return X("div", {
        class: _i(jn("overlay"), h),
        style: D0({
          zIndex: a.value - 1
        }, g),
        onClick: u
      }, null);
    }
    function d() {
      return Ve(X("div", je({
        class: _i(jn("content"), jn(`--${e.position}`), [e.defaultStyle, jn("--content-background-color")], [e.defaultStyle, jn("$-elevation--3")], [e.safeArea, jn("--safe-area")], [e.safeAreaTop, jn("--safe-area-top")]),
        style: {
          zIndex: a.value
        },
        role: "dialog",
        "aria-modal": "true"
      }, o), [t.value && C(n.default)]), [[xn, e.show]]);
    }
    function f() {
      return X(_e, {
        name: jn("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [Ve(X("div", {
          class: _i(jn("$--box"), jn(), [!e.overlay, jn("--pointer-events-none")]),
          style: {
            zIndex: a.value - 2
          }
        }, [e.overlay && c(), X(_e, {
          name: e.transition || jn(`$-pop-${e.position}`)
        }, {
          default: () => [d()]
        })]), [[xn, e.show]])]
      });
    }
    function v(h) {
      !i() || h.key !== "Escape" || !e.show || (C(e.onKeyEscape), e.closeOnKeyEscape && (Me(h), C(e["onUpdate:show"], !1)));
    }
    return () => {
      const {
        teleport: h
      } = e;
      return h ? X(io, {
        to: h,
        disabled: l.value
      }, {
        default: () => [f()]
      }) : f();
    };
  }
});
ae(ma);
le(ma, Ct);
const fB = ma;
var Mo = ma, A0 = Object.defineProperty, M0 = Object.defineProperties, N0 = Object.getOwnPropertyDescriptors, Gu = Object.getOwnPropertySymbols, V0 = Object.prototype.hasOwnProperty, R0 = Object.prototype.propertyIsEnumerable, Zu = (e, n, o) => n in e ? A0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, cp = (e, n) => {
  for (var o in n || (n = {}))
    V0.call(n, o) && Zu(e, o, n[o]);
  if (Gu)
    for (var o of Gu(n))
      R0.call(n, o) && Zu(e, o, n[o]);
  return e;
}, L0 = (e, n) => M0(e, N0(n));
const { n: dp } = ne("ripple"), Ju = 250;
function F0(e) {
  const { zIndex: n, position: o } = oo(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", o === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Qu(e) {
  return "touches" in e;
}
function U0(e, n) {
  const { top: o, left: t } = nn(e), { clientWidth: r, clientHeight: a } = e, i = Math.sqrt(r ** 2 + a ** 2) / 2, l = i * 2, s = Qu(n) ? n.touches[0].clientX - t : r / 2, u = Qu(n) ? n.touches[0].clientY - o : a / 2, c = (r - i * 2) / 2, d = (a - i * 2) / 2, f = s - i, v = u - i;
  return { x: f, y: v, centerX: c, centerY: d, size: l };
}
function lu(e) {
  const n = this._ripple;
  if (n.removeRipple(), n.disabled || n.tasker || !Vn.enableRipple)
    return;
  const o = () => {
    n.tasker = null;
    const { x: t, y: r, centerX: a, centerY: i, size: l } = U0(this, e), s = document.createElement("div");
    s.classList.add(dp()), s.style.opacity = "0", s.style.transform = `translate(${t}px, ${r}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), F0(this), this.appendChild(s), window.setTimeout(() => {
      s.style.transform = `translate(${a}px, ${i}px) scale3d(1, 1, 1)`, s.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(o, 30);
}
function Xr() {
  const e = this._ripple, n = () => {
    const o = this.querySelectorAll(`.${dp()}`);
    if (!o.length)
      return;
    const t = o[o.length - 1], r = Ju - performance.now() + Number(t.dataset.createdAt);
    window.setTimeout(() => {
      t.style.opacity = "0", window.setTimeout(() => {
        var a;
        return (a = t.parentNode) == null ? void 0 : a.removeChild(t);
      }, Ju);
    }, r);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function fp() {
  if (!Tf() || !Vn.enableRipple)
    return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
let Gr = !1;
function H0(e) {
  Gr || !(e.key === " " || e.key === "Enter") || (lu.call(this, e), Gr = !0);
}
function _u() {
  Gr && (Xr.call(this), Gr = !1);
}
function j0(e, n) {
  var o;
  e._ripple = L0(cp({
    tasker: null
  }, (o = n.value) != null ? o : {}), {
    removeRipple: Xr.bind(e)
  }), e.addEventListener("touchstart", lu, { passive: !0 }), e.addEventListener("touchmove", fp, { passive: !0 }), e.addEventListener("dragstart", Xr, { passive: !0 }), e.addEventListener("keydown", H0), e.addEventListener("keyup", _u), e.addEventListener("blur", _u), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("dragend", e._ripple.removeRipple, { passive: !0 });
}
function Y0(e) {
  e.removeEventListener("touchstart", lu), e.removeEventListener("touchmove", fp), e.removeEventListener("dragstart", Xr), !(!e._ripple || !e._ripple.removeRipple) && (document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple), document.removeEventListener("dragend", e._ripple.removeRipple));
}
function W0(e, n) {
  var o, t, r, a, i, l;
  const s = {
    color: (o = n.value) == null ? void 0 : o.color,
    disabled: (t = n.value) == null ? void 0 : t.disabled
  };
  (s.color !== ((r = e._ripple) == null ? void 0 : r.color) || s.disabled !== ((a = e._ripple) == null ? void 0 : a.disabled)) && (e._ripple = cp({
    tasker: s.disabled ? null : (i = e._ripple) == null ? void 0 : i.tasker,
    removeRipple: (l = e._ripple) == null ? void 0 : l.removeRipple
  }, s));
}
const pp = {
  mounted: j0,
  unmounted: Y0,
  updated: W0,
  install(e) {
    e.directive("ripple", this);
  }
}, pB = pp;
var tn = pp;
function vp(e) {
  return e ? !!(e === "desktop" && Nt() || e === "mobile" && !Nt()) : !1;
}
function K0(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce(
    (o, t) => {
      const [r, a] = t.split(":").map((i) => i.trim());
      return o[da(r)] = a, o;
    },
    {}
  ) : {};
}
function q0(e) {
  const { value: n } = e._hover, o = K0(e);
  Object.keys(n).forEach((t) => {
    const r = da(t);
    n[r] != null && o[r] && (e._hover.rawStyle[r] = o[r]);
  });
}
function su(e, n) {
  Object.keys(n).forEach((o) => {
    const t = n[o];
    t != null && (e.style[o] = t);
  });
}
function X0(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function mp(e) {
  (e == null ? void 0 : e._hover) != null && (X0(e), su(e, e._hover.rawStyle));
}
function hp() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, mn(e)) {
    e(this._hover.hovering);
    return;
  }
  su(this, e);
}
function gp() {
  if (this._hover.hovering = !1, mn(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  mp(this);
}
function bp(e, n) {
  var o, t;
  const { arg: r, value: a } = n;
  vp(r) || (e._hover = {
    value: a,
    hovering: (t = (o = e._hover) == null ? void 0 : o.hovering) != null ? t : !1,
    rawStyle: {}
  }, q0(e), e.addEventListener("mouseenter", hp), e.addEventListener("mouseleave", gp));
}
function yp(e, n) {
  vp(n.arg) || (mp(e), e.removeEventListener("mouseenter", hp), e.removeEventListener("mouseleave", gp));
}
function G0(e, n) {
  e._hover && yp(e, n);
}
function Z0(e, n) {
  return !mn(n.value) && e._hover.hovering;
}
function J0(e, n) {
  bp(e, n), Z0(e, n) && su(e, n.value);
}
const wp = {
  mounted: bp,
  unmounted: yp,
  beforeUpdate: G0,
  updated: J0,
  install(e) {
    e.directive("hover", this);
  }
}, vB = wp;
var In = wp;
const kp = {
  hovering: Boolean,
  focusing: Boolean
}, { name: Q0, n: _0, classes: x0 } = ne("hover-overlay");
function ey(e, n) {
  return m(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.hovering, e.n("--hovering")], [e.focusing && !e.inMobile(), e.n("--focusing")]))
    },
    null,
    2
    /* CLASS */
  );
}
const $p = ee({
  name: Q0,
  props: kp,
  setup: () => ({
    n: _0,
    classes: x0,
    inMobile: Nt
  })
});
$p.render = ey;
var ha = $p;
ae(ha);
le(ha, kp);
function eo() {
  const e = w(!1);
  return {
    hovering: e,
    handleHovering: (o) => {
      e.value = o;
    }
  };
}
const mB = ha;
var Fn = ha;
function ny(e) {
  const { left: n } = nn(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function xu(e) {
  const { top: n } = nn(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function xi(e) {
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
function oy(e) {
  const n = [];
  let o = e;
  for (; !ca(o); )
    o = No(o), n.push(o);
  return n;
}
function Cp(e, n) {
  if (sn(e)) {
    const o = document.querySelector(e);
    return Ln(!!o, n, "target element cannot found"), o;
  }
  return Ln(mo(e), n, 'type of prop "target" should be an element object'), e;
}
function ty() {
  const { width: e, height: n } = nn(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
const ry = (e) => sn(e) && e.endsWith("rem"), ay = (e) => sn(e) && e.endsWith("px") || En(e), iy = (e) => sn(e) && e.endsWith("vw"), ly = (e) => sn(e) && e.endsWith("vh"), sy = (e) => sn(e) && e.endsWith("vmin"), uy = (e) => sn(e) && e.endsWith("vmax"), en = (e) => {
  if (qs(e))
    return Number(e);
  if (ay(e))
    return +e.replace("px", "");
  if (!no())
    return 0;
  const { vw: n, vh: o, vMin: t, vMax: r } = ty();
  if (iy(e))
    return +e.replace("vw", "") * n / 100;
  if (ly(e))
    return +e.replace("vh", "") * o / 100;
  if (sy(e))
    return +e.replace("vmin", "") * t / 100;
  if (uy(e))
    return +e.replace("vmax", "") * r / 100;
  if (ry(e)) {
    const a = +e.replace("rem", ""), i = oo(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return sn(e) ? W(e) : 0;
}, Oe = (e) => {
  if (e != null)
    return qs(e) ? `${e}px` : String(e);
}, On = (e, n = 1) => {
  if (e == null)
    return;
  const o = Oe(e), t = o.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
  return `${parseFloat(o) * n}${t}`;
};
function Vt(e, { top: n = 0, left: o = 0, duration: t = 300, animation: r }) {
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
function Sp(e) {
  return Object.entries(e ?? {}).reduce((n, [o, t]) => {
    const r = o.startsWith("--") ? o : `--${Zs(o)}`;
    return n[r] = t, n;
  }, {});
}
function Zr(e) {
  return e === "start" || e === "end" ? `flex-${e}` : e;
}
function cy(e) {
  let n = e;
  for (; n && n !== document.documentElement; ) {
    if (oo(n).display === "none")
      return !0;
    n = n.parentNode;
  }
  return !1;
}
const ec = ["button", "input", "select", "textarea", "[tabindex]", "[href]"].map((e) => `${e}:not([disabled])`).join(", ");
function uu(e, n, o, t) {
  const r = Array.from(n.querySelectorAll(ec)).filter(
    (s) => !cy(s)
  );
  if (!r.length)
    return;
  const a = [e, ...Array.from(e.querySelectorAll(ec))].findIndex(
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
  onClick: F()
};
var dy = (e, n, o) => new Promise((t, r) => {
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
const { name: fy, n: py, classes: vy } = ne("icon");
function my(e, n) {
  return m(), we(wt(e.isURL(e.name) ? "img" : "i"), {
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
const Pp = ee({
  name: fy,
  props: on,
  setup(e) {
    const n = w(""), o = w(!1);
    fe(() => e.name, t, { immediate: !0 });
    function t(r, a) {
      return dy(this, null, function* () {
        const { transition: i } = e;
        if (a == null || W(i) === 0) {
          n.value = r;
          return;
        }
        o.value = !0, yield He(), setTimeout(() => {
          a != null && (n.value = r), o.value = !1;
        }, W(i));
      });
    }
    return {
      nextName: n,
      animateInProgress: o,
      n: py,
      classes: vy,
      isURL: a0,
      toNumber: W,
      toSizeUnit: Oe
    };
  }
});
Pp.render = my;
var ga = Pp;
ae(ga);
le(ga, on);
const hB = ga;
var Ge = ga;
const { name: hy, n: gy, classes: by } = ne("action-sheet");
function yy(e, n) {
  const o = _("var-icon"), t = _("var-hover-overlay"), r = Ye("ripple"), a = Ye("hover");
  return Ve((m(), P(
    "div",
    {
      class: p(e.classes(e.n("action-item"), e.className, [e.disabled, e.n("--disabled")])),
      style: Z({ color: e.color })
    },
    [
      e.icon ? (m(), we(o, {
        key: 0,
        "var-action-sheet-cover": "",
        class: p(e.n("action-icon")),
        namespace: e.namespace,
        name: e.icon,
        size: e.iconSize
      }, null, 8, ["class", "namespace", "name", "size"])) : G("v-if", !0),
      L(
        "div",
        {
          class: p(e.n("action-name"))
        },
        se(e.name),
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
const Op = ee({
  name: hy,
  components: {
    VarHoverOverlay: Fn,
    VarIcon: Ge
  },
  directives: { Ripple: tn, Hover: In },
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
      n: gy,
      classes: by,
      handleHovering: n
    };
  }
});
Op.render = yy;
var wy = Op, ky = Object.defineProperty, nc = Object.getOwnPropertySymbols, $y = Object.prototype.hasOwnProperty, Cy = Object.prototype.propertyIsEnumerable, oc = (e, n, o) => n in e ? ky(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Sy = (e, n) => {
  for (var o in n || (n = {}))
    $y.call(n, o) && oc(e, o, n[o]);
  if (nc)
    for (var o of nc(n))
      Cy.call(n, o) && oc(e, o, n[o]);
  return e;
};
const zp = Sy({
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
])), { name: Py, n: Oy, classes: zy } = ne("action-sheet");
function Ey(e, n) {
  const o = _("var-action-item"), t = _("var-popup");
  return m(), we(t, {
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
      L(
        "div",
        je({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [
          U(e.$slots, "title", {}, () => {
            var r;
            return [
              L(
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
          U(e.$slots, "actions", {}, () => [
            (m(!0), P(
              Ae,
              null,
              qe(e.actions, (r) => (m(), we(o, {
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
const Ep = ee({
  name: Py,
  directives: { Ripple: tn },
  components: {
    VarPopup: Mo,
    VarActionItem: wy
  },
  inheritAttrs: !1,
  props: zp,
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
      n: Oy,
      classes: zy,
      handleSelect: t
    };
  }
});
Ep.render = Ey;
var sr = Ep, Ty = Object.defineProperty, tc = Object.getOwnPropertySymbols, By = Object.prototype.hasOwnProperty, Dy = Object.prototype.propertyIsEnumerable, rc = (e, n, o) => n in e ? Ty(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ac = (e, n) => {
  for (var o in n || (n = {}))
    By.call(n, o) && rc(e, o, n[o]);
  if (tc)
    for (var o of tc(n))
      Dy.call(n, o) && rc(e, o, n[o]);
  return e;
};
let So, cu = {};
function Iy(e = {}) {
  return ac(ac({}, cu), e);
}
function Uo(e) {
  return no() ? new Promise((n) => {
    Uo.close();
    const o = xe(Iy(e));
    o.teleport = "body", So = o;
    const { unmountInstance: t } = $t(sr, o, {
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
  cu = e;
};
Uo.resetDefaultOptions = function() {
  cu = {};
};
Uo.close = function() {
  if (So != null) {
    const e = So;
    So = null, He().then(() => {
      e.show = !1;
    });
  }
};
Uo.Component = sr;
ae(sr);
ae(sr, Uo);
le(Uo, zp);
const gB = sr;
var pl = Uo;
const Tp = {
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
}, { name: Ay, n: My, classes: Ny } = ne("alert"), Vy = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  danger: "error"
};
function Ry(e, n) {
  const o = _("var-icon");
  return m(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), e.n(`--${e.type}`), e.formatElevation(e.elevation, 2))),
      style: Z({
        "background-color": e.color
      }),
      role: "alert"
    },
    [
      e.isInternalType || e.$slots.icon ? (m(), P(
        "div",
        {
          key: 0,
          class: p(e.n("icon"))
        },
        [
          U(e.$slots, "icon", {}, () => [
            e.isInternalType ? (m(), we(o, {
              key: 0,
              name: e.iconTypeMap[e.type]
            }, null, 8, ["name"])) : G("v-if", !0)
          ])
        ],
        2
        /* CLASS */
      )) : G("v-if", !0),
      U(e.$slots, "content", {}, () => [
        L(
          "div",
          {
            class: p(e.n("content"))
          },
          [
            e.title || e.$slots.title ? (m(), P(
              "div",
              {
                key: 0,
                class: p(e.n("title"))
              },
              [
                U(e.$slots, "title", {}, () => [
                  De(
                    se(e.title),
                    1
                    /* TEXT */
                  )
                ])
              ],
              2
              /* CLASS */
            )) : G("v-if", !0),
            e.message || e.$slots.default ? (m(), P(
              "div",
              {
                key: 1,
                class: p(e.n("message"))
              },
              [
                U(e.$slots, "default", {}, () => [
                  De(
                    se(e.message),
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
      e.closeable ? (m(), P(
        "div",
        {
          key: 1,
          class: p(e.n("close-icon")),
          onClick: n[0] || (n[0] = (...t) => e.handleClose && e.handleClose(...t))
        },
        [
          U(e.$slots, "close-icon", {}, () => [
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
const Bp = ee({
  name: Ay,
  components: {
    VarIcon: Ge
  },
  props: Tp,
  setup(e) {
    const n = B(() => ["info", "success", "danger", "warning"].includes(e.type));
    function o(t) {
      C(e.onClose, t);
    }
    return {
      n: My,
      classes: Ny,
      iconTypeMap: Vy,
      isInternalType: n,
      formatElevation: dn,
      handleClose: o
    };
  }
});
Bp.render = Ry;
var ba = Bp;
ae(ba);
le(ba, Tp);
const bB = ba;
var vl = ba;
const Dp = {
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
}, { name: Ly, n: Fy, classes: Uy } = ne("app-bar");
function Hy(e, n) {
  return m(), P(
    Ae,
    null,
    [
      L(
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
          L(
            "div",
            {
              class: p(e.n("toolbar"))
            },
            [
              L(
                "div",
                {
                  class: p(e.n("left"))
                },
                [
                  U(e.$slots, "left"),
                  e.titlePosition === "left" ? (m(), P(
                    "div",
                    {
                      key: 0,
                      class: p(e.n("title")),
                      style: Z({ paddingLeft: e.paddingLeft })
                    },
                    [
                      U(e.$slots, "default", {}, () => [
                        De(
                          se(e.title),
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
              e.titlePosition === "center" ? (m(), P(
                "div",
                {
                  key: 0,
                  class: p(e.n("title"))
                },
                [
                  U(e.$slots, "default", {}, () => [
                    De(
                      se(e.title),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                2
                /* CLASS */
              )) : G("v-if", !0),
              L(
                "div",
                {
                  class: p(e.n("right"))
                },
                [
                  e.titlePosition === "right" ? (m(), P(
                    "div",
                    {
                      key: 0,
                      class: p(e.n("title")),
                      style: Z({ paddingRight: e.paddingRight })
                    },
                    [
                      U(e.$slots, "default", {}, () => [
                        De(
                          se(e.title),
                          1
                          /* TEXT */
                        )
                      ])
                    ],
                    6
                    /* CLASS, STYLE */
                  )) : G("v-if", !0),
                  U(e.$slots, "right")
                ],
                2
                /* CLASS */
              )
            ],
            2
            /* CLASS */
          ),
          U(e.$slots, "content")
        ],
        16
        /* FULL_PROPS */
      ),
      e.fixed && e.placeholder ? (m(), P(
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
const Ip = ee({
  name: Ly,
  props: Dp,
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
      n: Fy,
      classes: Uy,
      formatElevation: dn,
      appBar: o,
      placeholderHeight: a
    };
  }
});
Ip.render = Hy;
var ya = Ip;
ae(ya);
le(ya, Dp);
const yB = ya;
var ml = ya;
const Ap = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: jy, n: Yy } = ne("form-details"), Wy = { key: 0 }, Ky = { key: 0 };
function qy(e, n) {
  return m(), we(_e, {
    name: e.n()
  }, {
    default: ce(() => [
      e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (m(), P(
        "div",
        {
          key: 0,
          class: p(e.n())
        },
        [
          L(
            "div",
            {
              class: p(e.n("error-message"))
            },
            [
              X(_e, {
                name: e.n("message")
              }, {
                default: ce(() => [
                  e.errorMessage ? (m(), P(
                    "div",
                    Wy,
                    se(e.errorMessage),
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
          L(
            "div",
            {
              class: p(e.n("extra-message"))
            },
            [
              X(_e, {
                name: e.n("message")
              }, {
                default: ce(() => [
                  U(e.$slots, "extra-message", {}, () => [
                    e.extraMessage ? (m(), P(
                      "div",
                      Ky,
                      se(e.extraMessage),
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
const Mp = ee({
  name: jy,
  props: Ap,
  setup: () => ({ n: Yy })
});
Mp.render = qy;
var wa = Mp;
ae(wa);
le(wa, Ap);
const wB = wa;
var Tn = wa, Xy = Object.defineProperty, Gy = Object.defineProperties, Zy = Object.getOwnPropertyDescriptors, ic = Object.getOwnPropertySymbols, Jy = Object.prototype.hasOwnProperty, Qy = Object.prototype.propertyIsEnumerable, lc = (e, n, o) => n in e ? Xy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, _y = (e, n) => {
  for (var o in n || (n = {}))
    Jy.call(n, o) && lc(e, o, n[o]);
  if (ic)
    for (var o of ic(n))
      Qy.call(n, o) && lc(e, o, n[o]);
  return e;
}, xy = (e, n) => Gy(e, Zy(n));
const Np = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Hn() {
  const { parentProvider: e, index: n, bindParent: o } = wn(Np), t = _o();
  return {
    index: n,
    form: e,
    bindForm: o ? (a) => {
      o(xy(_y({}, a), { instance: t }));
    } : null
  };
}
function e1() {
  const { childProviders: e, length: n, bindChildren: o } = kn(Np);
  return {
    length: n,
    formItems: e,
    bindFormItems: o
  };
}
const Vp = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), Rp = Symbol(
  "SWIPE_RESIZE_DISPATCHER_BIND_SWIPE_RESIZE_LISTENER_KEY"
);
function n1() {
  const { childProviders: e, length: n, bindChildren: o } = kn(
    Vp
  );
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: o
  };
}
function o1() {
  const { childProviders: e, bindChildren: n } = kn(
    Rp
  );
  return {
    swipeResizeListeners: e,
    bindSwipeResizeListeners: n
  };
}
function t1() {
  const { parentProvider: e, bindParent: n } = wn(
    Rp
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
var r1 = (e, n, o) => new Promise((t, r) => {
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
const { name: a1, n: el, classes: i1 } = ne("field-decorator"), l1 = ["for"];
function s1(e, n) {
  const o = _("var-icon");
  return m(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      L(
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
          L(
            "div",
            {
              class: p(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              U(e.$slots, "prepend-icon")
            ],
            2
            /* CLASS */
          ),
          L(
            "div",
            {
              ref: "middleEl",
              class: p(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
            },
            [
              U(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          e.placeholder && e.hint ? (m(), P("label", {
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
            L(
              "span",
              null,
              se(e.placeholder),
              1
              /* TEXT */
            )
          ], 14, l1)) : G("v-if", !0),
          L(
            "div",
            {
              class: p(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              e.clearable && !e.isEmpty(e.value) ? U(e.$slots, "clear-icon", {
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
              U(e.$slots, "append-icon")
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      e.line ? (m(), P(
        Ae,
        { key: 0 },
        [
          e.variant === "outlined" ? (m(), P(
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
              L(
                "legend",
                {
                  class: p(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
                  style: Z({ width: e.legendWidth })
                },
                [
                  e.placeholder && e.hint ? (m(), we(io, {
                    key: 0,
                    to: "body"
                  }, [
                    L(
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
                  ])) : G("v-if", !0)
                ],
                6
                /* CLASS, STYLE */
              )
            ],
            6
            /* CLASS, STYLE */
          )) : (m(), P(
            "div",
            {
              key: 1,
              class: p(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.isError, e.n("--line-error")])),
              style: Z({ background: e.isError ? void 0 : e.blurColor })
            },
            [
              L(
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
const Lp = ee({
  name: a1,
  components: { VarIcon: Ge },
  props: ka,
  setup(e) {
    const n = w(null), o = w(null), t = w(""), r = w("0px"), a = w("0px"), i = w("0px"), l = w(!0), s = B(() => e.hint && (!Wn(e.value) || e.isFocusing)), { popup: u, bindPopup: c } = up(), { bindSwipeResizeDispatcher: d } = t1(), f = B(
      () => e.isError ? void 0 : e.isFocusing ? e.focusColor : e.blurColor
    );
    lo(y), yn(() => {
      y(), He().then(() => {
        l.value = !1;
      });
    }), _t(y), C(c, null), C(d, {
      onResize() {
        He().then(y);
      }
    }), u && fe(
      () => u.show.value,
      ($) => r1(this, null, function* () {
        $ && (yield bn(), y());
      })
    );
    function v() {
      const { hint: $, value: k, composing: b } = e;
      if (!$ && (!Wn(k) || b))
        return el("--placeholder-hidden");
      if (s.value)
        return el("--placeholder-hint");
    }
    function h($) {
      C(e.onClear, $);
    }
    function g($) {
      C(e.onClick, $);
    }
    function y() {
      if (r.value = `${o.value.offsetLeft}px`, a.value = `${o.value.offsetWidth}px`, i.value = `${o.value.offsetHeight}px`, e.variant === "outlined" && n.value) {
        const $ = oo(n.value), k = `var(--field-decorator-outlined-${e.size}-placeholder-space)`;
        t.value = `calc(${$.width} * 0.75 + ${k} * 2)`;
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
      n: el,
      classes: i1,
      isEmpty: Wn,
      handleClear: h,
      handleClick: g
    };
  }
});
Lp.render = s1;
var $a = Lp;
ae($a);
le($a, ka);
const kB = $a;
var Rt = $a, u1 = Object.defineProperty, c1 = Object.defineProperties, d1 = Object.getOwnPropertyDescriptors, sc = Object.getOwnPropertySymbols, f1 = Object.prototype.hasOwnProperty, p1 = Object.prototype.propertyIsEnumerable, uc = (e, n, o) => n in e ? u1(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, v1 = (e, n) => {
  for (var o in n || (n = {}))
    f1.call(n, o) && uc(e, o, n[o]);
  if (sc)
    for (var o of sc(n))
      p1.call(n, o) && uc(e, o, n[o]);
  return e;
}, m1 = (e, n) => c1(e, d1(n));
const du = m1(v1({
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
}), { name: h1, n: g1, classes: b1 } = ne("input"), y1 = ["aria-label", "placeholder", "enterkeyhint"], w1 = ["id", "aria-label", "autocomplete", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], k1 = ["id", "aria-label", "autocomplete", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function $1(e, n) {
  const o = _("var-field-decorator"), t = _("var-form-details");
  return m(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[12] || (n[12] = (...r) => e.handleMousedown && e.handleMousedown(...r))
    },
    [
      X(
        o,
        To(xt({
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
          "clear-icon": ce(({ clear: r }) => [
            U(e.$slots, "clear-icon", { clear: r })
          ]),
          "append-icon": ce(() => [
            U(e.$slots, "append-icon")
          ]),
          default: ce(() => [
            e.normalizedType === "password" ? (m(), P("input", {
              key: 0,
              tabindex: "-1",
              "aria-label": e.ariaLabel,
              class: p(e.n("autocomplete")),
              placeholder: e.hint ? void 0 : e.placeholder,
              style: Z({
                "--input-placeholder-color": e.placeholderColor
              }),
              enterkeyhint: e.enterkeyhint
            }, null, 14, y1)) : G("v-if", !0),
            e.textarea ? (m(), P("textarea", {
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
            }, null, 46, w1)) : (m(), P("input", {
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
            }, null, 46, k1))
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots["prepend-icon"] ? {
            name: "prepend-icon",
            fn: ce(() => [
              U(e.$slots, "prepend-icon")
            ]),
            key: "0"
          } : void 0
        ]),
        1040
        /* FULL_PROPS, DYNAMIC_SLOTS */
      ),
      e.isShowFormDetails ? (m(), we(t, {
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
            U(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"])) : G("v-if", !0)
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const Fp = ee({
  name: h1,
  components: {
    VarFormDetails: Tn,
    VarFieldDecorator: Rt
  },
  props: du,
  setup(e) {
    const n = Qf(), o = w(null), t = w(!1), r = w(!1), { bindForm: a, form: i } = Hn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: c
    } = Un(), d = B(() => e.disabled || e.readonly ? "" : "text"), f = B(() => e.type === "number" ? "text" : e.type), v = B(() => {
      const { maxlength: q, modelValue: oe } = e;
      return q ? Wn(oe) ? `0 / ${q}` : `${String(oe).length}/${q}` : "";
    }), h = B(() => {
      const { hint: q, blurColor: oe, focusColor: ye } = e;
      if (!q)
        return l.value ? "var(--field-decorator-error-color)" : t.value ? ye || "var(--field-decorator-focus-color)" : oe || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    });
    C(a, {
      reset: N,
      validate: H,
      resetValidation: c
    }), yn(() => {
      e.autofocus && z();
    });
    function y(q) {
      He(() => {
        const { validateTrigger: oe, rules: ye, modelValue: Te } = e;
        s(oe, q, ye, Te);
      });
    }
    function $(q) {
      t.value = !0, C(e.onFocus, q), y("onFocus");
    }
    function k(q) {
      t.value = !1, C(e.onBlur, q), y("onBlur");
    }
    function b(q) {
      const oe = q.target;
      let { value: ye } = oe;
      e.type === "number" && (ye = R(ye));
      const Te = E(ye);
      return Te === e.modelValue && (oe.value = Te), Te;
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
      const oe = b(q);
      C(e["onUpdate:modelValue"], oe), C(e.onInput, oe, q), y("onInput");
    }
    function D(q) {
      const oe = Y(b(q));
      e.modelModifiers.trim && C(e["onUpdate:modelValue"], oe), C(e.onChange, oe, q), y("onChange");
    }
    function A() {
      const { disabled: q, readonly: oe, clearable: ye, onClear: Te } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || q || oe || !ye || (C(e["onUpdate:modelValue"], ""), C(Te, ""), y("onClear"));
    }
    function V(q) {
      const { disabled: oe, onClick: ye } = e;
      i != null && i.disabled.value || oe || (C(ye, q), y("onClick"));
    }
    function R(q) {
      const oe = q.indexOf("-"), ye = q.indexOf(".");
      return oe > -1 && (q = oe === 0 ? "-" + q.replace(/-/g, "") : q.replace(/-/g, "")), ye > -1 && (q = q.slice(0, ye + 1) + q.slice(ye).replace(/\./g, "")), q.replace(/[^-0-9.]/g, "");
    }
    function Y(q) {
      return e.modelModifiers.trim ? q.trim() : q;
    }
    function E(q) {
      return e.maxlength ? q.slice(0, W(e.maxlength)) : q;
    }
    function M(q) {
      const { disabled: oe } = e;
      i != null && i.disabled.value || oe || q.target === o.value || (z(), Me(q));
    }
    function N() {
      C(e["onUpdate:modelValue"], ""), c();
    }
    function H() {
      return u(e.rules, e.modelValue);
    }
    function z() {
      var q;
      (q = o.value) == null || q.focus();
    }
    function J() {
      o.value.blur();
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
      n: g1,
      classes: b1,
      isEmpty: Wn,
      handleFocus: $,
      handleBlur: k,
      handleInput: O,
      handleChange: D,
      handleClear: A,
      handleClick: V,
      handleCompositionStart: S,
      handleCompositionEnd: T,
      handleMousedown: M,
      validate: H,
      resetValidation: c,
      reset: N,
      focus: z,
      blur: J
    };
  }
});
Fp.render = $1;
var Ca = Fp;
ae(Ca);
le(Ca, du);
const $B = Ca;
var Lt = Ca;
const Up = {
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
}, Hp = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function C1() {
  const { bindChildren: e, childProviders: n, length: o } = kn(
    Hp
  );
  return {
    length: o,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function S1() {
  const { bindParent: e, parentProvider: n, index: o } = wn(
    Hp
  );
  return {
    index: o,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
const { name: P1, n: O1, classes: z1 } = ne("checkbox"), E1 = ["tabindex"];
function T1(e, n) {
  const o = _("var-icon"), t = _("var-hover-overlay"), r = _("var-form-details"), a = Ye("hover"), i = Ye("ripple");
  return m(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      L(
        "div",
        {
          class: p(e.n()),
          onClick: n[3] || (n[3] = (...l) => e.handleClick && e.handleClick(...l))
        },
        [
          Ve((m(), P("div", {
            ref: "action",
            class: p(
              e.classes(
                e.n("action"),
                [e.checked || e.isIndeterminate, e.n("--checked"), e.n("--unchecked")],
                [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")],
                [e.formDisabled || e.disabled, e.n("--disabled")]
              )
            ),
            style: Z({ color: e.checked || e.isIndeterminate ? e.checkedColor : e.uncheckedColor }),
            tabindex: e.disabled || e.formDisabled ? void 0 : "0",
            onFocus: n[0] || (n[0] = (l) => e.isFocusing = !0),
            onBlur: n[1] || (n[1] = (l) => e.isFocusing = !1)
          }, [
            e.isIndeterminate ? U(e.$slots, "indeterminate-icon", { key: 0 }, () => [
              X(o, {
                class: p(e.n("icon")),
                name: "minus-box",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : G("v-if", !0),
            e.checked && !e.isIndeterminate ? U(e.$slots, "checked-icon", { key: 1 }, () => [
              X(o, {
                class: p(e.n("icon")),
                name: "checkbox-marked",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : G("v-if", !0),
            !e.checked && !e.isIndeterminate ? U(e.$slots, "unchecked-icon", { key: 2 }, () => [
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
          ], 46, E1)), [
            [a, e.handleHovering, "desktop"],
            [i, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }]
          ]),
          e.$slots.default ? (m(), P(
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
              U(e.$slots, "default", { checked: e.checked })
            ],
            2
            /* CLASS */
          )) : G("v-if", !0)
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
const jp = ee({
  name: P1,
  directives: { Ripple: tn, Hover: In },
  components: {
    VarIcon: Ge,
    VarFormDetails: Tn,
    VarHoverOverlay: Fn
  },
  props: Up,
  setup(e) {
    const n = w(null), o = w(!1), t = Gn(e, "modelValue"), r = Gn(e, "indeterminate"), a = B(() => t.value === e.checkedValue), i = B(() => e.checkedValue), { checkboxGroup: l, bindCheckboxGroup: s } = S1(), { hovering: u, handleHovering: c } = eo(), { form: d, bindForm: f } = Hn(), {
      errorMessage: v,
      validateWithTrigger: h,
      validate: g,
      // expose
      resetValidation: y
    } = Un(), $ = {
      checkedValue: i,
      checked: a,
      sync: O,
      validate: Y,
      resetValidation: y,
      reset: D
    };
    C(s, $), C(f, $), We(() => window, "keydown", V), We(() => window, "keyup", R);
    function k(E) {
      He(() => {
        const { validateTrigger: M, rules: N, modelValue: H } = e;
        h(M, E, N, H);
      });
    }
    function b(E) {
      const { checkedValue: M, onChange: N } = e;
      t.value = E, C(N, t.value, r.value), k("onChange"), E === M ? l == null || l.onChecked(M) : l == null || l.onUnchecked(M);
    }
    function S(E) {
      const { disabled: M, readonly: N, checkedValue: H, uncheckedValue: z, onClick: J } = e;
      if (d != null && d.disabled.value || M || (C(J, E), d != null && d.readonly.value || N))
        return;
      if (r.value === !0) {
        r.value = !1, C(e.onChange, t.value, r.value), k("onChange");
        return;
      }
      const q = l ? l.checkedCount.value >= Number(l.max.value) : !1;
      !a.value && q || b(a.value ? z : H);
    }
    function T() {
      n.value.focus();
    }
    function O(E) {
      const { checkedValue: M, uncheckedValue: N } = e;
      t.value = E.includes(M) ? M : N;
    }
    function D() {
      t.value = e.uncheckedValue, y();
    }
    function A(E) {
      const { checkedValue: M, uncheckedValue: N } = e;
      ![M, N].includes(E) && (E = a.value ? N : M), b(E);
    }
    function V(E) {
      if (!o.value)
        return;
      const { key: M } = E;
      (M === "Enter" || M === " ") && Me(E), M === "Enter" && n.value.click();
    }
    function R(E) {
      o.value && E.key === " " && (Me(E), n.value.click());
    }
    function Y() {
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
      n: O1,
      classes: z1,
      handleHovering: c,
      handleClick: S,
      handleTextClick: T,
      toggle: A,
      reset: D,
      validate: Y,
      resetValidation: y
    };
  }
});
jp.render = T1;
var Sa = jp;
ae(Sa);
le(Sa, Up);
const CB = Sa;
var ct = Sa;
const Yp = {
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
}, Wp = Symbol("MENU_SELECT_BIND_MENU_OPTION_KEY");
function B1() {
  const { length: e, childProviders: n, bindChildren: o } = kn(
    Wp
  );
  return {
    length: e,
    menuOptions: n,
    bindMenuOptions: o
  };
}
function D1() {
  const { index: e, parentProvider: n, bindParent: o } = wn(
    Wp
  );
  return Ln(!!o, "MenuOption", "<var-menu-option/> must in <var-menu-select/>"), {
    index: e,
    menuSelect: n,
    bindMenuSelect: o
  };
}
var I1 = (e, n, o) => new Promise((t, r) => {
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
const { name: A1, n: M1, classes: N1 } = ne("menu-option"), V1 = ["tabindex"];
function R1(e, n) {
  const o = _("var-checkbox"), t = _("maybe-v-node"), r = _("var-icon"), a = _("var-hover-overlay"), i = Ye("ripple"), l = Ye("hover");
  return Ve((m(), P("div", {
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
    L(
      "div",
      {
        class: p(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")]))
      },
      null,
      2
      /* CLASS */
    ),
    e.multiple ? (m(), we(o, {
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
    }, null, 8, ["modelValue", "indeterminate", "disabled", "onChange"])) : G("v-if", !0),
    U(e.$slots, "default", {}, () => [
      L(
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
    e.childrenTrigger ? (m(), P(
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
  ], 42, V1)), [
    [i, { disabled: e.disabled || !e.ripple }],
    [l, e.handleHovering, "desktop"]
  ]);
}
const Kp = ee({
  name: A1,
  directives: { Ripple: tn, Hover: In },
  components: {
    VarCheckbox: ct,
    VarHoverOverlay: Fn,
    VarIcon: Ge,
    MaybeVNode: ar
  },
  props: Yp,
  setup(e) {
    const n = w(), o = w(), t = w(!1), r = w(!1), a = w(!1), i = B(() => r.value), l = B(() => a.value), s = B(() => e.value), u = B(() => e.disabled), c = B(() => e.ripple), { menuSelect: d, bindMenuSelect: f } = D1(), { size: v, multiple: h, onSelect: g, computeLabel: y } = d, { hovering: $, handleHovering: k } = eo(), b = B(
      () => {
        var R;
        return mn(e.label) ? e.label(
          (R = e.option) != null ? R : {
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
    fe([() => e.label, () => e.value], y), f(S), We(() => window, "keydown", O), We(() => window, "keyup", D);
    function T() {
      if (!e.disabled && !(!h.value && e.childrenTrigger)) {
        if (h.value && a.value) {
          a.value = !1, r.value = !1, g(S);
          return;
        }
        h.value && !a.value && (r.value = !r.value), g(S);
      }
    }
    function O(R) {
      var Y;
      !t.value && !((Y = o.value) != null && Y.isFocusing) || ((R.key === "ArrowRight" || R.key === "ArrowLeft") && (Me(R), C(e.onKeyArrowX, R.key)), t.value && ((R.key === " " || R.key === "Enter") && Me(R), R.key === "Enter" && n.value.click()));
    }
    function D(R) {
      t.value && R.key === " " && (Me(R), n.value.click());
    }
    function A() {
      return I1(this, null, function* () {
        yield He(), g(S);
      });
    }
    function V(R, Y) {
      r.value = R, or(Y) && (a.value = Y);
    }
    return {
      root: n,
      checkbox: o,
      optionSelected: r,
      optionIndeterminate: a,
      size: v,
      multiple: h,
      hovering: $,
      isFocusing: t,
      labelVNode: b,
      n: M1,
      classes: N1,
      handleHovering: k,
      handleClick: T,
      handleSelect: A
    };
  }
});
Kp.render = R1;
var ur = Kp;
ae(ur);
le(ur, Yp);
const SB = ur;
var dt = ur;
const fu = {
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
var vo = "top", Vo = "bottom", Zo = "right", Bo = "left", pu = "auto", Pa = [vo, Vo, Zo, Bo], Oa = "start", Ft = "end", L1 = "clippingParents", qp = "viewport", zt = "popper", F1 = "reference", cc = /* @__PURE__ */ Pa.reduce(function(e, n) {
  return e.concat([n + "-" + Oa, n + "-" + Ft]);
}, []), Xp = /* @__PURE__ */ [].concat(Pa, [pu]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Oa, n + "-" + Ft]);
}, []), U1 = "beforeRead", H1 = "read", j1 = "afterRead", Y1 = "beforeMain", W1 = "main", K1 = "afterMain", q1 = "beforeWrite", X1 = "write", G1 = "afterWrite", Z1 = [U1, H1, j1, Y1, W1, K1, q1, X1, G1];
function Zn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function to(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function go(e) {
  return Zn(e).getComputedStyle(e);
}
function Jo(e) {
  var n = Zn(e).Element;
  return e instanceof n || e instanceof Element;
}
function Kn(e) {
  var n = Zn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function vu(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Zn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function J1(e) {
  return ["table", "td", "th"].indexOf(to(e)) >= 0;
}
function Ho(e) {
  return ((Jo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function za(e) {
  return to(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (vu(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Ho(e)
  );
}
function hl() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function dc(e) {
  return !Kn(e) || // https://github.com/popperjs/popper-core/issues/837
  go(e).position === "fixed" ? null : e.offsetParent;
}
function Q1(e) {
  var n = /firefox/i.test(hl()), o = /Trident/i.test(hl());
  if (o && Kn(e)) {
    var t = go(e);
    if (t.position === "fixed")
      return null;
  }
  var r = za(e);
  for (vu(r) && (r = r.host); Kn(r) && ["html", "body"].indexOf(to(r)) < 0; ) {
    var a = go(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || n && a.willChange === "filter" || n && a.filter && a.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function mu(e) {
  for (var n = Zn(e), o = dc(e); o && J1(o) && go(o).position === "static"; )
    o = dc(o);
  return o && (to(o) === "html" || to(o) === "body" && go(o).position === "static") ? n : o || Q1(e) || n;
}
function Do(e) {
  return e.split("-")[0];
}
function Ut(e) {
  return e.split("-")[1];
}
var Bt = Math.max, fc = Math.min, ft = Math.round, _1 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function x1(e) {
  var n = e.x, o = e.y, t = window, r = t.devicePixelRatio || 1;
  return {
    x: ft(n * r) / r || 0,
    y: ft(o * r) / r || 0
  };
}
function pc(e) {
  var n, o = e.popper, t = e.popperRect, r = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = i.x, v = f === void 0 ? 0 : f, h = i.y, g = h === void 0 ? 0 : h, y = typeof c == "function" ? c({
    x: v,
    y: g
  }) : {
    x: v,
    y: g
  };
  v = y.x, g = y.y;
  var $ = i.hasOwnProperty("x"), k = i.hasOwnProperty("y"), b = Bo, S = vo, T = window;
  if (u) {
    var O = mu(o), D = "clientHeight", A = "clientWidth";
    if (O === Zn(o) && (O = Ho(o), go(O).position !== "static" && l === "absolute" && (D = "scrollHeight", A = "scrollWidth")), O = O, r === vo || (r === Bo || r === Zo) && a === Ft) {
      S = Vo;
      var V = d && O === T && T.visualViewport ? T.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        O[D]
      );
      g -= V - t.height, g *= s ? 1 : -1;
    }
    if (r === Bo || (r === vo || r === Vo) && a === Ft) {
      b = Zo;
      var R = d && O === T && T.visualViewport ? T.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        O[A]
      );
      v -= R - t.width, v *= s ? 1 : -1;
    }
  }
  var Y = Object.assign({
    position: l
  }, u && _1), E = c === !0 ? x1({
    x: v,
    y: g
  }) : {
    x: v,
    y: g
  };
  if (v = E.x, g = E.y, s) {
    var M;
    return Object.assign({}, Y, (M = {}, M[S] = k ? "0" : "", M[b] = $ ? "0" : "", M.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + g + "px)" : "translate3d(" + v + "px, " + g + "px, 0)", M));
  }
  return Object.assign({}, Y, (n = {}, n[S] = k ? g + "px" : "", n[b] = $ ? v + "px" : "", n.transform = "", n));
}
function ew(e) {
  var n = e.state, o = e.options, t = o.gpuAcceleration, r = t === void 0 ? !0 : t, a = o.adaptive, i = a === void 0 ? !0 : a, l = o.roundOffsets, s = l === void 0 ? !0 : l, u = {
    placement: Do(n.placement),
    variation: Ut(n.placement),
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
const Gp = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ew,
  data: {}
};
var nw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Dr(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return nw[n];
  });
}
var ow = {
  start: "end",
  end: "start"
};
function vc(e) {
  return e.replace(/start|end/g, function(n) {
    return ow[n];
  });
}
function Zp() {
  return !/^((?!chrome|android).)*safari/i.test(hl());
}
function pt(e, n, o) {
  n === void 0 && (n = !1), o === void 0 && (o = !1);
  var t = e.getBoundingClientRect(), r = 1, a = 1;
  n && Kn(e) && (r = e.offsetWidth > 0 && ft(t.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && ft(t.height) / e.offsetHeight || 1);
  var i = Jo(e) ? Zn(e) : window, l = i.visualViewport, s = !Zp() && o, u = (t.left + (s && l ? l.offsetLeft : 0)) / r, c = (t.top + (s && l ? l.offsetTop : 0)) / a, d = t.width / r, f = t.height / a;
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
  return pt(Ho(e)).left + hu(e).scrollLeft;
}
function tw(e, n) {
  var o = Zn(e), t = Ho(e), r = o.visualViewport, a = t.clientWidth, i = t.clientHeight, l = 0, s = 0;
  if (r) {
    a = r.width, i = r.height;
    var u = Zp();
    (u || !u && n === "fixed") && (l = r.offsetLeft, s = r.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: l + gu(e),
    y: s
  };
}
function rw(e) {
  var n, o = Ho(e), t = hu(e), r = (n = e.ownerDocument) == null ? void 0 : n.body, a = Bt(o.scrollWidth, o.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = Bt(o.scrollHeight, o.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -t.scrollLeft + gu(e), s = -t.scrollTop;
  return go(r || o).direction === "rtl" && (l += Bt(o.clientWidth, r ? r.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: s
  };
}
function bu(e) {
  var n = go(e), o = n.overflow, t = n.overflowX, r = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + r + t);
}
function Jp(e) {
  return ["html", "body", "#document"].indexOf(to(e)) >= 0 ? e.ownerDocument.body : Kn(e) && bu(e) ? e : Jp(za(e));
}
function Dt(e, n) {
  var o;
  n === void 0 && (n = []);
  var t = Jp(e), r = t === ((o = e.ownerDocument) == null ? void 0 : o.body), a = Zn(t), i = r ? [a].concat(a.visualViewport || [], bu(t) ? t : []) : t, l = n.concat(i);
  return r ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Dt(za(i)))
  );
}
function aw(e, n) {
  var o = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (o && vu(o)) {
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
function iw(e, n) {
  var o = pt(e, !1, n === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function mc(e, n, o) {
  return n === qp ? gl(tw(e, o)) : Jo(n) ? iw(n, o) : gl(rw(Ho(e)));
}
function lw(e) {
  var n = Dt(za(e)), o = ["absolute", "fixed"].indexOf(go(e).position) >= 0, t = o && Kn(e) ? mu(e) : e;
  return Jo(t) ? n.filter(function(r) {
    return Jo(r) && aw(r, t) && to(r) !== "body";
  }) : [];
}
function sw(e, n, o, t) {
  var r = n === "clippingParents" ? lw(e) : [].concat(n), a = [].concat(r, [o]), i = a[0], l = a.reduce(function(s, u) {
    var c = mc(e, u, t);
    return s.top = Bt(c.top, s.top), s.right = fc(c.right, s.right), s.bottom = fc(c.bottom, s.bottom), s.left = Bt(c.left, s.left), s;
  }, mc(e, i, t));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function uw(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Qp(e) {
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
  var u = r ? uw(r) : null;
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
function cw() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function dw(e) {
  return Object.assign({}, cw(), e);
}
function fw(e, n) {
  return n.reduce(function(o, t) {
    return o[t] = e, o;
  }, {});
}
function _p(e, n) {
  n === void 0 && (n = {});
  var o = n, t = o.placement, r = t === void 0 ? e.placement : t, a = o.strategy, i = a === void 0 ? e.strategy : a, l = o.boundary, s = l === void 0 ? L1 : l, u = o.rootBoundary, c = u === void 0 ? qp : u, d = o.elementContext, f = d === void 0 ? zt : d, v = o.altBoundary, h = v === void 0 ? !1 : v, g = o.padding, y = g === void 0 ? 0 : g, $ = dw(typeof y != "number" ? y : fw(y, Pa)), k = f === zt ? F1 : zt, b = e.rects.popper, S = e.elements[h ? k : f], T = sw(Jo(S) ? S : S.contextElement || Ho(e.elements.popper), s, c, i), O = pt(e.elements.reference), D = Qp({
    reference: O,
    element: b,
    placement: r
  }), A = gl(Object.assign({}, b, D)), V = f === zt ? A : O, R = {
    top: T.top - V.top + $.top,
    bottom: V.bottom - T.bottom + $.bottom,
    left: T.left - V.left + $.left,
    right: V.right - T.right + $.right
  }, Y = e.modifiersData.offset;
  if (f === zt && Y) {
    var E = Y[r];
    Object.keys(R).forEach(function(M) {
      var N = [Zo, Vo].indexOf(M) >= 0 ? 1 : -1, H = [vo, Vo].indexOf(M) >= 0 ? "y" : "x";
      R[M] += E[H] * N;
    });
  }
  return R;
}
function pw(e, n) {
  n === void 0 && (n = {});
  var o = n, t = o.placement, r = o.boundary, a = o.rootBoundary, i = o.padding, l = o.flipVariations, s = o.allowedAutoPlacements, u = s === void 0 ? Xp : s, c = Ut(t), d = c ? l ? cc : cc.filter(function(h) {
    return Ut(h) === c;
  }) : Pa, f = d.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  f.length === 0 && (f = d);
  var v = f.reduce(function(h, g) {
    return h[g] = _p(e, {
      placement: g,
      boundary: r,
      rootBoundary: a,
      padding: i
    })[Do(g)], h;
  }, {});
  return Object.keys(v).sort(function(h, g) {
    return v[h] - v[g];
  });
}
function vw(e) {
  if (Do(e) === pu)
    return [];
  var n = Dr(e);
  return [vc(e), n, vc(n)];
}
function mw(e) {
  var n = e.state, o = e.options, t = e.name;
  if (!n.modifiersData[t]._skip) {
    for (var r = o.mainAxis, a = r === void 0 ? !0 : r, i = o.altAxis, l = i === void 0 ? !0 : i, s = o.fallbackPlacements, u = o.padding, c = o.boundary, d = o.rootBoundary, f = o.altBoundary, v = o.flipVariations, h = v === void 0 ? !0 : v, g = o.allowedAutoPlacements, y = n.options.placement, $ = Do(y), k = $ === y, b = s || (k || !h ? [Dr(y)] : vw(y)), S = [y].concat(b).reduce(function(re, ve) {
      return re.concat(Do(ve) === pu ? pw(n, {
        placement: ve,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: g
      }) : ve);
    }, []), T = n.rects.reference, O = n.rects.popper, D = /* @__PURE__ */ new Map(), A = !0, V = S[0], R = 0; R < S.length; R++) {
      var Y = S[R], E = Do(Y), M = Ut(Y) === Oa, N = [vo, Vo].indexOf(E) >= 0, H = N ? "width" : "height", z = _p(n, {
        placement: Y,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), J = N ? M ? Zo : Bo : M ? Vo : vo;
      T[H] > O[H] && (J = Dr(J));
      var q = Dr(J), oe = [];
      if (a && oe.push(z[E] <= 0), l && oe.push(z[J] <= 0, z[q] <= 0), oe.every(function(re) {
        return re;
      })) {
        V = Y, A = !1;
        break;
      }
      D.set(Y, oe);
    }
    if (A)
      for (var ye = h ? 3 : 1, Te = function(ve) {
        var I = S.find(function(K) {
          var pe = D.get(K);
          if (pe)
            return pe.slice(0, ve).every(function(Se) {
              return Se;
            });
        });
        if (I)
          return V = I, "break";
      }, j = ye; j > 0; j--) {
        var Q = Te(j);
        if (Q === "break") break;
      }
    n.placement !== V && (n.modifiersData[t]._skip = !0, n.placement = V, n.reset = !0);
  }
}
const hw = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: mw,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function gw(e, n, o) {
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
function bw(e) {
  var n = e.state, o = e.options, t = e.name, r = o.offset, a = r === void 0 ? [0, 0] : r, i = Xp.reduce(function(c, d) {
    return c[d] = gw(d, n.rects, a), c;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[t] = i;
}
const yw = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: bw
};
function ww(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function kw(e) {
  return e === Zn(e) || !Kn(e) ? hu(e) : ww(e);
}
function $w(e) {
  var n = e.getBoundingClientRect(), o = ft(n.width) / e.offsetWidth || 1, t = ft(n.height) / e.offsetHeight || 1;
  return o !== 1 || t !== 1;
}
function Cw(e, n, o) {
  o === void 0 && (o = !1);
  var t = Kn(n), r = Kn(n) && $w(n), a = Ho(n), i = pt(e, r, o), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (t || !t && !o) && ((to(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  bu(a)) && (l = kw(n)), Kn(n) ? (s = pt(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : a && (s.x = gu(a))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function Sw(e) {
  var n = pt(e), o = e.offsetWidth, t = e.offsetHeight;
  return Math.abs(n.width - o) <= 1 && (o = n.width), Math.abs(n.height - t) <= 1 && (t = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: t
  };
}
function Pw(e) {
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
function Ow(e) {
  var n = Pw(e);
  return Z1.reduce(function(o, t) {
    return o.concat(n.filter(function(r) {
      return r.phase === t;
    }));
  }, []);
}
function zw(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(o) {
      Promise.resolve().then(function() {
        n = void 0, o(e());
      });
    })), n;
  };
}
function Ew(e) {
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
var hc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function gc() {
  for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
    n[o] = arguments[o];
  return !n.some(function(t) {
    return !(t && typeof t.getBoundingClientRect == "function");
  });
}
function Tw(e) {
  e === void 0 && (e = {});
  var n = e, o = n.defaultModifiers, t = o === void 0 ? [] : o, r = n.defaultOptions, a = r === void 0 ? hc : r;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, hc, a),
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
        var k = typeof $ == "function" ? $(c.options) : $;
        g(), c.options = Object.assign({}, a, c.options, k), c.scrollParents = {
          reference: Jo(l) ? Dt(l) : l.contextElement ? Dt(l.contextElement) : [],
          popper: Dt(s)
        };
        var b = Ow(Ew([].concat(t, c.options.modifiers)));
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
          var $ = c.elements, k = $.reference, b = $.popper;
          if (gc(k, b)) {
            c.rects = {
              reference: Cw(k, mu(b), c.options.strategy === "fixed"),
              popper: Sw(b)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(R) {
              return c.modifiersData[R.name] = Object.assign({}, R.data);
            });
            for (var S = 0; S < c.orderedModifiers.length; S++) {
              if (c.reset === !0) {
                c.reset = !1, S = -1;
                continue;
              }
              var T = c.orderedModifiers[S], O = T.fn, D = T.options, A = D === void 0 ? {} : D, V = T.name;
              typeof O == "function" && (c = O({
                state: c,
                options: A,
                name: V,
                instance: v
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: zw(function() {
        return new Promise(function(y) {
          v.forceUpdate(), y(c);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!gc(l, s))
      return v;
    v.setOptions(u).then(function(y) {
      !f && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function h() {
      c.orderedModifiers.forEach(function(y) {
        var $ = y.name, k = y.options, b = k === void 0 ? {} : k, S = y.effect;
        if (typeof S == "function") {
          var T = S({
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
      d.forEach(function(y) {
        return y();
      }), d = [];
    }
    return v;
  };
}
var gr = {
  passive: !0
};
function Bw(e) {
  var n = e.state, o = e.instance, t = e.options, r = t.scroll, a = r === void 0 ? !0 : r, i = t.resize, l = i === void 0 ? !0 : i, s = Zn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", o.update, gr);
  }), l && s.addEventListener("resize", o.update, gr), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", o.update, gr);
    }), l && s.removeEventListener("resize", o.update, gr);
  };
}
const Dw = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Bw,
  data: {}
};
function Iw(e) {
  var n = e.state, o = e.name;
  n.modifiersData[o] = Qp({
    reference: n.rects.reference,
    element: n.rects.popper,
    placement: n.placement
  });
}
const Aw = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Iw,
  data: {}
};
function Mw(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(o) {
    var t = n.styles[o] || {}, r = n.attributes[o] || {}, a = n.elements[o];
    !Kn(a) || !to(a) || (Object.assign(a.style, t), Object.keys(r).forEach(function(i) {
      var l = r[i];
      l === !1 ? a.removeAttribute(i) : a.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function Nw(e) {
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
const Vw = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Mw,
  effect: Nw,
  requires: ["computeStyles"]
};
var Rw = [Dw, Aw, Gp, Vw], Lw = /* @__PURE__ */ Tw({
  defaultModifiers: Rw
}), Fw = Object.defineProperty, Uw = Object.defineProperties, Hw = Object.getOwnPropertyDescriptors, bc = Object.getOwnPropertySymbols, jw = Object.prototype.hasOwnProperty, Yw = Object.prototype.propertyIsEnumerable, yc = (e, n, o) => n in e ? Fw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, nl = (e, n) => {
  for (var o in n || (n = {}))
    jw.call(n, o) && yc(e, o, n[o]);
  if (bc)
    for (var o of bc(n))
      Yw.call(n, o) && yc(e, o, n[o]);
  return e;
}, ol = (e, n) => Uw(e, Hw(n)), wc = (e, n, o) => new Promise((t, r) => {
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
function xp(e) {
  const n = w(null), o = w(null), t = w({ width: 0, height: 0 }), r = Gn(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(z, J) {
      C(J ? e.onOpen : e.onClose);
    }
  }), { zIndex: a } = lr(() => r.value, 1);
  iu(() => r.value, a);
  let i = null, l, s = !1, u = !1, c = !0;
  We(() => window, "keydown", E), fe(() => [e.offsetX, e.offsetY, e.placement, e.strategy], M), fe(() => e.disabled, H), fe(
    () => r.value,
    (z) => {
      z && M();
    }
  ), lo(M), Lo(d), Jt(f);
  function d() {
    const z = V();
    i = Lw(z, o.value, A()), z.addEventListener("mouseenter", g), z.addEventListener("mouseleave", y), z.addEventListener("click", b), document.addEventListener("click", S);
  }
  function f() {
    const z = V();
    z && (z.removeEventListener("mouseenter", g), z.removeEventListener("mouseleave", y), z.removeEventListener("click", b)), i.destroy(), document.removeEventListener("click", S);
  }
  function v() {
    const z = V();
    if (!z)
      return;
    const { width: J, height: q } = oo(z);
    t.value = {
      width: en(J),
      height: en(q)
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
  function g() {
    e.trigger === "hover" && (u = !0, N());
  }
  function y() {
    return wc(this, null, function* () {
      e.trigger === "hover" && (u = !1, yield bn(), !s && H());
    });
  }
  function $() {
    e.trigger === "hover" && (s = !0, e.cascadeOptimization && (c = !1));
  }
  function k() {
    return wc(this, null, function* () {
      e.trigger === "hover" && (s = !1, yield bn(), !u && H());
    });
  }
  function b() {
    if (e.trigger === "click") {
      if (e.closeOnClickReference && r.value) {
        H();
        return;
      }
      N();
    }
  }
  function S(z) {
    const J = V();
    if (J && !J.contains(z.target)) {
      if (e.trigger !== "click")
        return;
      T(), C(e.onClickOutside, z);
    }
  }
  function T() {
    H();
  }
  function O() {
    M(), C(e.onClosed);
  }
  function D() {
    const { offsetX: z, offsetY: J, placement: q } = e;
    v();
    const oe = {
      x: en(z),
      y: en(J)
    };
    switch (q) {
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
          placement: q,
          skidding: oe.y,
          distance: -oe.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: q,
          skidding: oe.x,
          distance: -oe.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: q,
          skidding: oe.x,
          distance: oe.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: q,
          skidding: oe.y,
          distance: oe.x
        };
    }
  }
  function A() {
    const { placement: z, skidding: J, distance: q } = D(), oe = [
      ol(nl({}, hw), {
        enabled: r.value
      }),
      ol(nl({}, yw), {
        options: {
          offset: [J, q]
        }
      }),
      ol(nl({}, Gp), {
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
          ye.styles.popper.transformOrigin = h();
        }
      }
    ];
    return {
      placement: z,
      modifiers: oe,
      strategy: e.strategy
    };
  }
  function V() {
    var z, J;
    const q = (z = l ?? e.reference) != null ? z : n.value;
    return sn(q) ? (J = n.value) == null ? void 0 : J.querySelector(q) : q;
  }
  function R(z) {
    c = z;
  }
  function Y(z) {
    f(), l = z, d();
  }
  function E(z) {
    const { closeOnKeyEscape: J = !1 } = e;
    z.key === "Escape" && J && r.value && (Me(z), H());
  }
  function M() {
    i.setOptions(A());
  }
  function N() {
    e.disabled || (r.value = !0, C(e["onUpdate:show"], !0));
  }
  function H() {
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
    handlePopoverMouseleave: k,
    handleClosed: O,
    setReference: Y,
    setAllowClose: R,
    resize: M,
    open: N,
    close: H
  };
}
const { name: Ww, n: Kw, classes: qw } = ne("menu");
function Xw(e, n) {
  return m(), P(
    "div",
    {
      ref: "host",
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      U(e.$slots, "default"),
      (m(), we(io, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        X(_e, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: ce(() => [
            Ve(L(
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
                onClick: n[0] || (n[0] = Xn(() => {
                }, ["stop"])),
                onMouseenter: n[1] || (n[1] = (...o) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...o)),
                onMouseleave: n[2] || (n[2] = (...o) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...o))
              },
              [
                U(e.$slots, "menu")
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
const ev = ee({
  name: Ww,
  props: fu,
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
      setReference: g
    } = xp(e);
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
      toSizeUnit: Oe,
      n: Kw,
      classes: qw,
      handlePopoverMouseenter: l,
      handlePopoverMouseleave: s,
      handlePopoverClose: u,
      handleClosed: c,
      resize: h,
      open: f,
      close: v,
      setReference: g
    };
  }
});
ev.render = Xw;
var cr = ev;
ae(cr);
le(cr, fu);
const PB = cr;
var Ht = cr;
function nv(e) {
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
    v && (l.value = h.map(u)), !v && !Wn(h) && (i.value = u(h)), !v && Wn(h) && (i.value = "");
  }
  function u(v) {
    var h;
    const g = t();
    let y = g.find(({ value: $ }) => $.value === v);
    return y || (y = g.find(({ label: $ }) => $.value === v)), (h = y == null ? void 0 : y.label.value) != null ? h : "";
  }
  function c({ value: v, label: h }) {
    var g;
    return (g = v.value) != null ? g : h.value;
  }
  function d(v) {
    const h = n(), g = t();
    return h ? g.filter(({ selected: y }) => y.value).map(c) : c(v);
  }
  function f() {
    const v = n(), h = o(), g = t();
    v ? g.forEach(
      (y) => y.sync(
        h.includes(c(y)),
        a ? a(y) : void 0
      )
    ) : g.forEach((y) => y.sync(h === c(y))), s();
  }
  return {
    label: i,
    labels: l,
    getOptionProviderKey: c,
    computeLabel: s,
    getSelectedValue: d
  };
}
var Gw = Object.defineProperty, Zw = Object.defineProperties, Jw = Object.getOwnPropertyDescriptors, kc = Object.getOwnPropertySymbols, Qw = Object.prototype.hasOwnProperty, _w = Object.prototype.propertyIsEnumerable, $c = (e, n, o) => n in e ? Gw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, xw = (e, n) => {
  for (var o in n || (n = {}))
    Qw.call(n, o) && $c(e, o, n[o]);
  if (kc)
    for (var o of kc(n))
      _w.call(n, o) && $c(e, o, n[o]);
  return e;
}, ek = (e, n) => Zw(e, Jw(n));
const Jr = ek(xw({
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
}, Ie(fu, [
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
var nk = Object.defineProperty, Cc = Object.getOwnPropertySymbols, ok = Object.prototype.hasOwnProperty, tk = Object.prototype.propertyIsEnumerable, Sc = (e, n, o) => n in e ? nk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, rk = (e, n) => {
  for (var o in n || (n = {}))
    ok.call(n, o) && Sc(e, o, n[o]);
  if (Cc)
    for (var o of Cc(n))
      tk.call(n, o) && Sc(e, o, n[o]);
  return e;
}, ak = (e, n, o) => new Promise((t, r) => {
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
const { name: ik, n: lk } = ne("menu-children"), sk = { ref: "menuOptions" };
function uk(e, n) {
  const o = _("var-menu-option"), t = _("var-menu-children"), r = _("var-menu");
  return m(), we(r, {
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
    default: ce(() => [
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
      fn: ce(() => [
        L(
          "div",
          sk,
          [
            (m(!0), P(
              Ae,
              null,
              qe(e.options, (a) => (m(), P(
                Ae,
                {
                  key: a[e.valueKey]
                },
                [
                  a[e.childrenKey] ? (m(), we(t, {
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
                  }, null, 8, ["parent-show", "option", "options", "highlight-options", "disabled", "onKeyArrowX", "onKeyArrowRightOpen", "onMouseenter"])) : (m(), we(o, {
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
const ov = ee({
  name: ik,
  components: {
    VarMenu: cr,
    VarMenuOption: ur
  },
  props: rk({
    parentShow: Boolean,
    disabled: Boolean,
    option: {
      type: Object,
      required: !0
    },
    highlightOptions: Ie(Jr, "options"),
    onKeyArrowX: F(),
    onKeyArrowRightOpen: F(),
    onMouseenter: F()
  }, Ie(Jr, ["options", "valueKey", "labelKey", "childrenKey"])),
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
      return ak(this, null, function* () {
        var v;
        C(e.onKeyArrowX, f), f === "ArrowRight" && (C(e.onKeyArrowRightOpen), (v = o.value) == null || v.open(), yield po(), uu(o.value.$el, r.value, "ArrowDown"));
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
      C(e.onMouseenter);
    }
    return {
      show: n,
      menu: o,
      trigger: t,
      menuOptions: r,
      menuChildren: a,
      n: lk,
      close: s,
      handleArrowLeft: l,
      handleArrowRight: i,
      handleMouseenter: d,
      allowClose: u,
      allowChildrenClose: c
    };
  }
});
ov.render = uk;
var ck = ov, dk = Object.defineProperty, fk = Object.defineProperties, pk = Object.getOwnPropertyDescriptors, Pc = Object.getOwnPropertySymbols, vk = Object.prototype.hasOwnProperty, mk = Object.prototype.propertyIsEnumerable, Oc = (e, n, o) => n in e ? dk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, hk = (e, n) => {
  for (var o in n || (n = {}))
    vk.call(n, o) && Oc(e, o, n[o]);
  if (Pc)
    for (var o of Pc(n))
      mk.call(n, o) && Oc(e, o, n[o]);
  return e;
}, gk = (e, n) => fk(e, pk(n));
const { name: bk, n: yk, classes: wk } = ne("menu-select");
function kk(e, n) {
  const o = _("var-menu-children"), t = _("var-menu-option"), r = _("var-menu");
  return m(), we(r, {
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
      L(
        "div",
        {
          ref: "menuOptionsRef",
          class: p(e.classes(e.n("menu"), e.formatElevation(e.elevation, 3), [e.scrollable, e.n("--scrollable")]))
        },
        [
          (m(!0), P(
            Ae,
            null,
            qe(e.options, (a) => (m(), P(
              Ae,
              {
                key: a[e.valueKey]
              },
              [
                a[e.childrenKey] ? (m(), we(o, {
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
                }, null, 8, ["parent-show", "option", "options", "highlight-options", "disabled", "onKeyArrowRightOpen", "onMouseenter"])) : (m(), we(t, {
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
          U(e.$slots, "options")
        ],
        2
        /* CLASS */
      )
    ]),
    default: ce(() => [
      U(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["show", "class", "disabled", "trigger", "reference", "placement", "strategy", "offset-x", "offset-y", "teleport", "same-width", "elevation", "popover-class", "close-on-click-reference", "onOpen", "onOpened", "onClose", "onClosed", "onClickOutside"]);
}
const tv = ee({
  name: bk,
  components: { VarMenu: Ht, VarMenuOption: dt, VarMenuChildren: ck },
  props: Jr,
  setup(e) {
    const n = Gn(e, "show"), o = w(), t = w(), r = w(), a = B(() => k(e.options)), { menuOptions: i, length: l, bindMenuOptions: s } = B1(), { computeLabel: u, getSelectedValue: c, getOptionProviderKey: d } = nv({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => i,
      optionProvidersLength: () => l.value,
      optionIsIndeterminate(E) {
        var M;
        const N = h(E.value.value);
        if (!N)
          return !1;
        const H = ((M = N._children) != null ? M : []).filter((J) => !J.disabled), z = H.filter((J) => e.modelValue.includes(J.value));
        return z.length > 0 && z.length < H.length;
      }
    }), f = B(() => {
      const { multiple: E, modelValue: M } = e;
      if (E)
        return [];
      const N = a.value.find((J) => J.value === M), H = [];
      let z = N == null ? void 0 : N._parent;
      for (; z; )
        H.push(z), z = z._parent;
      return H;
    }), v = {
      size: B(() => e.size),
      multiple: B(() => e.multiple),
      computeLabel: u,
      onSelect: b
    };
    s(v), We(() => window, "keydown", T);
    function h(E) {
      return a.value.find((M) => M.value === E);
    }
    function g(E) {
      return i.find((M) => M.value.value === E);
    }
    function y(E) {
      return E[e.childrenKey];
    }
    function $(E) {
      const M = [];
      N(E);
      function N(H) {
        H.forEach((z) => {
          M.push(z);
          const J = y(z);
          J && N(J);
        });
      }
      return M;
    }
    function k(E) {
      function M(N, H) {
        return N.map((z) => {
          z = gk(hk({}, z), { _rawOption: z }), H && (z._parent = H);
          const J = y(z);
          if (J) {
            const q = M(J, z);
            z[e.childrenKey] = q, z._children = $(q);
          }
          return z;
        });
      }
      return $(M(E));
    }
    function b(E) {
      var M, N;
      const { multiple: H, closeOnSelect: z } = e, { value: J, label: q, selected: oe, disabled: ye, ripple: Te } = E, j = h(J.value);
      if (j) {
        const ve = ((M = j._children) != null ? M : []).filter((I) => !I.disabled).map((I) => I.value);
        H && oe.value && (i.forEach((I) => {
          ve.includes(I.value.value) && I.sync(!0, !1);
        }), S(j)), H && !oe.value && (i.forEach((I) => {
          ve.includes(I.value.value) && I.sync(!1, !1);
        }), S(j));
      }
      const Q = c(E), re = (N = j == null ? void 0 : j._rawOption) != null ? N : {
        value: J.value,
        label: q.value,
        disabled: ye.value,
        ripple: Te.value
      };
      C(e.onSelect, d(E), re), C(e["onUpdate:modelValue"], Q), !H && z && (o.value.$el.focus(), V());
    }
    function S(E) {
      let M = E._parent;
      for (; M; ) {
        const N = g(M.value), H = y(M).filter((q) => !q.disabled), z = H.every((q) => !g(q.value).selected.value), J = H.every((q) => g(q.value).selected.value);
        z ? N.sync(!1, !1) : J ? N.sync(!0, !1) : N.sync(!1, !0), M = M._parent;
      }
    }
    function T(E) {
      if (e.disabled || !n.value)
        return;
      const { key: M } = E;
      if (["Escape", "ArrowDown", "ArrowUp"].includes(M) && Me(E), M === "Escape") {
        o.value.$el.focus(), V(), C(e.onKeyEscape);
        return;
      }
      (M === "ArrowDown" || M === "ArrowUp") && uu(
        o.value.$el,
        t.value,
        M,
        (N, H, z) => z ? !0 : O(N) === O(H)
      );
    }
    function O(E) {
      var M, N, H;
      if (E.classList.contains("var-menu-option--children-trigger"))
        return (M = E.parentNode) == null ? void 0 : M.parentNode;
      if (E.classList.contains("var-checkbox__action")) {
        const z = (H = (N = E.parentNode) == null ? void 0 : N.parentNode) == null ? void 0 : H.parentNode;
        if (z)
          return O(z);
      }
      return E.parentNode;
    }
    function D(E) {
      var M;
      (M = r.value) == null || M.forEach((N) => {
        if (N.allowClose(), E == null) {
          N.close();
          return;
        }
        N.option.value !== E.value && N.close();
      });
    }
    function A() {
      var E;
      (E = o.value) == null || E.open();
    }
    function V() {
      var E;
      (E = o.value) == null || E.close();
    }
    function R() {
      var E;
      (E = o.value) == null || E.resize();
    }
    function Y(E) {
      var M;
      (M = o.value) == null || M.setReference(E);
    }
    return {
      show: n,
      menu: o,
      menuOptionsRef: t,
      menuChildren: r,
      highlightOptions: f,
      n: yk,
      classes: wk,
      allowChildrenClose: D,
      formatElevation: dn,
      open: A,
      close: V,
      resize: R,
      setReference: Y
    };
  }
});
tv.render = kk;
var Ea = tv;
ae(Ea);
le(Ea, Jr);
const OB = Ea;
var jt = Ea, $k = Object.defineProperty, zc = Object.getOwnPropertySymbols, Ck = Object.prototype.hasOwnProperty, Sk = Object.prototype.propertyIsEnumerable, Ec = (e, n, o) => n in e ? $k(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Pk = (e, n) => {
  for (var o in n || (n = {}))
    Ck.call(n, o) && Ec(e, o, n[o]);
  if (zc)
    for (var o of zc(n))
      Sk.call(n, o) && Ec(e, o, n[o]);
  return e;
};
const rv = Pk({
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
}, Ie(du, [
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
var Tc = (e, n, o) => new Promise((t, r) => {
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
const { name: Ok, n: zk } = ne("auto-complete"), Ek = ["tabindex"];
function Tk(e, n) {
  const o = _("var-input"), t = _("var-menu-option"), r = _("var-menu-select"), a = _("var-form-details");
  return m(), P("div", {
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
      options: ce(() => [
        L(
          "div",
          {
            class: p(e.n("options"))
          },
          [
            (m(!0), P(
              Ae,
              null,
              qe(e.viewOptions, (i) => (m(), we(t, {
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
            fn: ce(() => [
              U(e.$slots, "prepend-icon")
            ]),
            key: "0"
          } : void 0,
          e.$slots["append-icon"] ? {
            name: "append-icon",
            fn: ce(() => [
              U(e.$slots, "append-icon")
            ]),
            key: "1"
          } : void 0,
          e.$slots["clear-icon"] ? {
            name: "clear-icon",
            fn: ce(({ clear: i }) => [
              U(e.$slots, "clear-icon", { clear: i })
            ]),
            key: "2"
          } : void 0,
          e.$slots["extra-message"] ? {
            name: "extra-message",
            fn: ce(() => [
              U(e.$slots, "extra-message")
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
  ], 42, Ek);
}
const av = ee({
  name: Ok,
  components: {
    VarInput: Lt,
    VarMenuSelect: jt,
    VarMenuOption: dt,
    VarFormDetails: Tn
  },
  props: rv,
  setup(e) {
    const n = w(), o = w(), t = w(!1), r = Gn(e, "modelValue"), a = w([]), i = w(!1), l = B(() => {
      const { maxlength: H } = e;
      return H ? Wn(r.value) ? `0 / ${H}` : `${String(r.value).length}/${H}` : "";
    }), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: c,
      // expose
      resetValidation: d
    } = Un(), { bindForm: f, form: v } = Hn();
    let h = !1;
    const g = {
      reset: y,
      resetValidation: d,
      validate: $
    };
    Jf(
      () => n.value,
      "click",
      () => {
        if (h) {
          h = !1;
          return;
        }
        b();
      }
    ), fe(() => [e.options, t.value], D), C(f, g), We(() => window, "keydown", O);
    function y() {
      C(e["onUpdate:modelValue"], ""), d();
    }
    function $() {
      return c(e.rules, e.modelValue);
    }
    function k() {
      t.value || e.disabled || v != null && v.disabled.value || (t.value = !0, o.value.focus(), C(e.onFocus), T("onFocus"));
    }
    function b() {
      t.value && (t.value = !1, i.value = !1, o.value.blur(), C(e.onBlur), T("onBlur"));
    }
    function S() {
      i.value || b();
    }
    function T(H) {
      He(() => {
        const { validateTrigger: z, rules: J, modelValue: q } = e;
        u(z, H, J, q);
      });
    }
    function O(H) {
      return Tc(this, null, function* () {
        var z;
        if (v != null && v.disabled.value || v != null && v.readonly.value || e.disabled || e.readonly || !t.value || !i.value)
          return;
        const { key: J } = H;
        if (J === "Tab") {
          Me(H), n.value.focus(), i.value = !1;
          return;
        }
        if (!["ArrowUp", "ArrowDown", "Enter"].includes(J)) {
          o.value.focus();
          return;
        }
        J === "Enter" && (yield po(), (z = o.value) == null || z.focus());
      });
    }
    function D() {
      t.value && (i.value = N(r.value)), i.value && (a.value = e.options);
    }
    function A(H, z) {
      D(), C(e.onInput, H, z), T("onInput");
    }
    function V() {
      h = !0, D(), C(e.onClear, r.value), T("onClear");
    }
    function R(H) {
      e.disabled || v != null && v.disabled.value || (C(e.onClick, H), T("onClick"));
    }
    function Y(H) {
      C(e.onChange, H), T("onChange");
    }
    function E(H) {
      return Tc(this, null, function* () {
        var z;
        e.maxlength != null && (H = H.slice(0, W(e.maxlength))), H !== r.value && (r.value = H, C(e.onChange, H), T("onChange")), yield po(), (z = o.value) == null || z.focus();
      });
    }
    function M() {
      o.value.focus();
    }
    function N(H) {
      return e.disabled || e.readonly || v != null && v.disabled.value || v != null && v.readonly.value ? !1 : e.options.length > 0 && (e.getShow != null ? e.getShow(H) : H.length > 0);
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
      n: zk,
      handleInput: A,
      handleClear: V,
      handleClick: R,
      handleChange: Y,
      handleBlur: S,
      handleKeyEscape: M,
      handleAutoComplete: E,
      reset: y,
      validate: $,
      resetValidation: d,
      blur: b,
      focus: k
    };
  }
});
av.render = Tk;
var Ta = av;
ae(Ta);
le(Ta, rv);
const zB = Ta;
var bl = Ta;
const Bc = (e) => sn(e) ? e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp|ico)$/i.test(e) : !1, Dc = (e) => sn(e) ? e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e) : !1, Bk = (e) => {
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
}, yl = (e) => e, Ic = (e) => e ** 3, iv = (e) => e < 0.5 ? Ic(e * 2) / 2 : 1 - Ic((1 - e) * 2) / 2, Qo = (e, n, o = "") => {
  if (e === void 0 && (e = ""), e.length >= n)
    return e;
  const t = n - e.length, r = Math.floor(t / o.length);
  return o.repeat(r) + o.slice(0, t % o.length) + e;
};
var Dk = Object.defineProperty, Ac = Object.getOwnPropertySymbols, Ik = Object.prototype.hasOwnProperty, Ak = Object.prototype.propertyIsEnumerable, Mc = (e, n, o) => n in e ? Dk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Mk = (e, n) => {
  for (var o in n || (n = {}))
    Ik.call(n, o) && Mc(e, o, n[o]);
  if (Ac)
    for (var o of Ac(n))
      Ak.call(n, o) && Mc(e, o, n[o]);
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
const Nk = "background-image", Vk = "lazy-loading", Rk = "lazy-error", Nc = "lazy-attempt", Lk = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], wl = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", vt = [], Qr = [], lv = Bk(100), pn = {
  loading: wl,
  error: wl,
  attempt: 3,
  throttleWait: 300,
  events: Lk
};
let yu = pa(dr, pn.throttleWait);
function Da(e, n) {
  e._lazy.arg === Nk ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function Fk(e) {
  e._lazy.loading && Da(e, e._lazy.loading), dr();
}
function Uk(e) {
  e._lazy.error && Da(e, e._lazy.error), e._lazy.state = "error", ku(e), dr();
}
function sv(e, n) {
  Da(e, n), e._lazy.state = "success", ku(e), dr();
}
function Hk(e) {
  var n;
  Qr.includes(e) || (Qr.push(e), (n = pn.events) == null || n.forEach((o) => {
    e.addEventListener(o, yu, { passive: !0 });
  }));
}
function jk() {
  Qr.forEach((e) => {
    var n;
    (n = pn.events) == null || n.forEach((o) => {
      e.removeEventListener(o, yu);
    });
  }), Qr.length = 0;
}
function Yk(e, n) {
  var o, t;
  const r = {
    loading: (o = e.getAttribute(Vk)) != null ? o : pn.loading,
    error: (t = e.getAttribute(Rk)) != null ? t : pn.error,
    attempt: e.getAttribute(Nc) ? Number(e.getAttribute(Nc)) : pn.attempt
  };
  e._lazy = Mk({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, r), Da(e, wl), C(pn.filter, e._lazy);
}
function Wk(e, n) {
  const o = new Image();
  o.src = n, e._lazy.preloadImage = o, o.addEventListener("load", () => {
    e._lazy.attemptLock = !1, lv.add(n), sv(e, n);
  }), o.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Uk(e) : uv(e);
  });
}
function uv(e) {
  if (e._lazy.attemptLock)
    return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (lv.has(n)) {
    sv(e, n), e._lazy.attemptLock = !1;
    return;
  }
  Fk(e), Wk(e, n);
}
function wu(e) {
  return Ba(this, null, function* () {
    yield bn(), _s(e) && uv(e);
  });
}
function dr() {
  vt.forEach((e) => wu(e));
}
function Kk(e) {
  return Ba(this, null, function* () {
    !vt.includes(e) && vt.push(e), oy(e).forEach(Hk), yield wu(e);
  });
}
function ku(e) {
  Io(vt, e), vt.length === 0 && jk();
}
function qk(e, n) {
  const { src: o, arg: t } = e._lazy;
  return o !== n.value || t !== n.arg;
}
function cv(e, n) {
  return Ba(this, null, function* () {
    Yk(e, n), yield Kk(e);
  });
}
function Xk(e, n) {
  return Ba(this, null, function* () {
    if (!qk(e, n)) {
      vt.includes(e) && (yield wu(e));
      return;
    }
    yield cv(e, n);
  });
}
function Gk(e = {}) {
  const { events: n, loading: o, error: t, attempt: r, throttleWait: a, filter: i } = e;
  pn.events = n ?? pn.events, pn.loading = o ?? pn.loading, pn.error = t ?? pn.error, pn.attempt = r ?? pn.attempt, pn.throttleWait = a ?? pn.throttleWait, pn.filter = i;
}
const dv = {
  mounted: cv,
  unmounted: ku,
  updated: Xk,
  install(e, n) {
    Gk(n), yu = pa(dr, pn.throttleWait), e.directive("lazy", this);
  }
}, EB = dv;
var Yt = dv;
const fv = {
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
}, Zk = (e) => ["mini", "small", "normal", "large"].includes(e), { name: Jk, n: Qk, classes: _k } = ne("avatar"), xk = ["src", "alt", "lazy-loading", "lazy-error"], e$ = ["src", "alt"];
function n$(e, n) {
  const o = Ye("lazy");
  return m(), P(
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
      e.src ? (m(), P(
        Ae,
        { key: 0 },
        [
          e.lazy ? Ve((m(), P("img", {
            key: 0,
            role: "img",
            class: p(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: Z({ objectFit: e.fit }),
            "lazy-loading": e.loading,
            "lazy-error": e.error,
            onLoad: n[0] || (n[0] = (...t) => e.handleLoad && e.handleLoad(...t))
          }, null, 46, xk)), [
            [o, e.src]
          ]) : (m(), P("img", {
            key: 1,
            role: "img",
            class: p(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: Z({ objectFit: e.fit }),
            onLoad: n[1] || (n[1] = (...t) => e.handleLoad && e.handleLoad(...t)),
            onError: n[2] || (n[2] = (...t) => e.handleError && e.handleError(...t))
          }, null, 46, e$))
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (m(), P(
        "div",
        {
          key: 1,
          ref: "textElement",
          class: p(e.n("text")),
          style: Z({ transform: `scale(${e.scale})` })
        },
        [
          U(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      ))
    ],
    6
    /* CLASS, STYLE */
  );
}
const pv = ee({
  name: Jk,
  directives: { Lazy: Yt },
  props: fv,
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
      n: Qk,
      classes: _k,
      isInternalSize: Zk,
      toSizeUnit: Oe,
      handleLoad: a,
      handleError: i,
      handleClick: l
    };
  }
});
pv.render = n$;
var Ia = pv;
ae(Ia);
le(Ia, fv);
const TB = Ia;
var kl = Ia;
const vv = {
  offset: [Number, String],
  vertical: Boolean
}, { name: o$, n: t$, classes: r$ } = ne("avatar-group");
function a$(e, n) {
  return m(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: Z(e.rootStyles)
    },
    [
      U(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const mv = ee({
  name: o$,
  props: vv,
  setup(e) {
    return {
      rootStyles: B(() => e.offset == null ? {} : {
        "--avatar-group-offset": Oe(e.offset)
      }),
      n: t$,
      classes: r$
    };
  }
});
mv.render = a$;
var Aa = mv;
ae(Aa);
le(Aa, vv);
const BB = Aa;
var $l = Aa;
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
}, { name: i$, n: l$, classes: s$ } = ne("loading");
function u$(e, n) {
  return m(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      e.$slots.default ? (m(), P(
        "div",
        {
          key: 0,
          class: p(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
        },
        [
          U(e.$slots, "default"),
          e.loading ? (m(), P(
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
      e.isShow ? (m(), P(
        "div",
        {
          key: 1,
          class: p(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
        },
        [
          e.type === "circle" ? (m(), P(
            "div",
            {
              key: 0,
              class: p(e.n("circle"))
            },
            [
              L(
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
                  L(
                    "svg",
                    { viewBox: "25 25 50 50" },
                    [
                      L("circle", {
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
          (m(!0), P(
            Ae,
            null,
            qe(e.loadingTypeDict, (o, t) => (m(), P(
              Ae,
              { key: t },
              [
                e.type === t ? (m(), P(
                  "div",
                  {
                    key: 0,
                    class: p(e.classes(e.n(t), e.n(`${t}--${e.size}`)))
                  },
                  [
                    (m(!0), P(
                      Ae,
                      null,
                      qe(o, (r) => (m(), P(
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
          e.$slots.description || e.description ? (m(), P(
            "div",
            {
              key: 1,
              class: p(e.classes(e.n("description"), e.n(`description--${e.size}`))),
              style: Z({ color: e.color })
            },
            [
              U(e.$slots, "description", {}, () => [
                De(
                  se(e.description),
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
const hv = ee({
  name: i$,
  props: uo,
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
      n: l$,
      classes: s$,
      multiplySizeUnit: On
    };
  }
});
hv.render = u$;
var Ma = hv;
ae(Ma);
le(Ma, uo);
const DB = Ma;
var mt = Ma, c$ = Object.defineProperty, d$ = Object.defineProperties, f$ = Object.getOwnPropertyDescriptors, Vc = Object.getOwnPropertySymbols, p$ = Object.prototype.hasOwnProperty, v$ = Object.prototype.propertyIsEnumerable, Rc = (e, n, o) => n in e ? c$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Lc = (e, n) => {
  for (var o in n || (n = {}))
    p$.call(n, o) && Rc(e, o, n[o]);
  if (Vc)
    for (var o of Vc(n))
      v$.call(n, o) && Rc(e, o, n[o]);
  return e;
}, Fc = (e, n) => d$(e, f$(n));
const gv = {
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
  loadingSize: Fc(Lc({}, Ie(uo, "size")), {
    default: void 0
  }),
  loadingColor: Fc(Lc({}, Ie(uo, "color")), {
    default: "currentColor"
  }),
  onClick: F(),
  onTouchstart: F()
}, bv = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function m$() {
  const { bindChildren: e, childProviders: n, length: o } = kn(bv);
  return {
    length: o,
    buttons: n,
    bindButtons: e
  };
}
function h$() {
  const { bindParent: e, parentProvider: n, index: o } = wn(bv);
  return {
    index: o,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
const { name: g$, n: b$, classes: y$ } = ne("button"), w$ = ["tabindex", "type", "disabled"];
function k$(e, n) {
  const o = _("var-loading"), t = _("var-hover-overlay"), r = Ye("ripple"), a = Ye("hover");
  return Ve((m(), P("button", {
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
    e.loading || e.pending ? (m(), we(o, {
      key: 0,
      class: p(e.n("loading")),
      "var-button-cover": "",
      color: e.loadingColor,
      type: e.loadingType,
      size: e.loadingSize || e.states.size,
      radius: e.loadingRadius
    }, null, 8, ["class", "color", "type", "size", "radius"])) : G("v-if", !0),
    L(
      "div",
      {
        class: p(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [
        U(e.$slots, "default")
      ],
      2
      /* CLASS */
    ),
    X(t, {
      hovering: e.disabled || e.loading || e.pending ? !1 : e.hovering,
      focusing: e.disabled || e.loading || e.pending ? !1 : e.isFocusing
    }, null, 8, ["hovering", "focusing"])
  ], 46, w$)), [
    [r, { disabled: e.disabled || !e.ripple || e.loading || e.pending }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const yv = ee({
  name: g$,
  components: {
    VarLoading: mt,
    VarHoverOverlay: Fn
  },
  directives: { Ripple: tn, Hover: In },
  props: gv,
  setup(e) {
    const n = w(!1), o = w(!1), { buttonGroup: t } = h$(), { hovering: r, handleHovering: a } = eo(), i = B(() => {
      var d, f, v, h, g, y;
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
      const { type: $, size: k, color: b, textColor: S, mode: T } = t;
      return {
        elevation: "",
        type: (v = e.type) != null ? v : $.value,
        size: (h = e.size) != null ? h : k.value,
        color: (g = e.color) != null ? g : b.value,
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
      !h || f || v || o.value || l(C(h, d));
    }
    function u(d) {
      const { loading: f, disabled: v, onTouchstart: h } = e;
      !h || f || v || o.value || l(C(h, d));
    }
    function c() {
      e.focusable && (n.value = !0);
    }
    return {
      pending: o,
      states: i,
      hovering: r,
      isFocusing: n,
      n: b$,
      classes: y$,
      handleHovering: a,
      handleClick: s,
      handleTouchstart: u,
      handleFocus: c
    };
  }
});
yv.render = k$;
var Na = yv;
ae(Na);
le(Na, gv);
const IB = Na;
var Bn = Na;
const wv = {
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
}, { name: $$, n: C$, classes: S$ } = ne("back-top");
function P$(e, n) {
  const o = _("var-icon"), t = _("var-button");
  return m(), we(io, {
    to: "body",
    disabled: e.disabled
  }, [
    L(
      "div",
      je({
        ref: "backTopEl",
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = Xn((...r) => e.handleClick && e.handleClick(...r), ["stop"]))
      }),
      [
        U(e.$slots, "default", {}, () => [
          X(t, {
            elevation: e.elevation,
            type: "primary",
            "var-back-top-cover": ""
          }, {
            default: ce(() => [
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
const kv = ee({
  name: $$,
  components: {
    VarButton: Bn,
    VarIcon: Ge
  },
  inheritAttrs: !1,
  props: wv,
  setup(e) {
    const n = w(!1), o = w(null), t = w(!0);
    let r;
    const a = pa(() => {
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
      Vt(r, {
        left: f,
        duration: e.duration,
        animation: iv
      });
    }
    function s() {
      r = e.target ? Cp(e.target, "BackTop") : No(o.value);
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
      n: C$,
      classes: S$,
      handleClick: l
    };
  }
});
kv.render = P$;
var Va = kv;
ae(Va);
le(Va, wv);
const AB = Va;
var Cl = Va;
const $v = {
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
  icon: Ie(on, "name"),
  namespace: Ie(on, "namespace"),
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
var O$ = Object.defineProperty, Uc = Object.getOwnPropertySymbols, z$ = Object.prototype.hasOwnProperty, E$ = Object.prototype.propertyIsEnumerable, Hc = (e, n, o) => n in e ? O$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, T$ = (e, n) => {
  for (var o in n || (n = {}))
    z$.call(n, o) && Hc(e, o, n[o]);
  if (Uc)
    for (var o of Uc(n))
      E$.call(n, o) && Hc(e, o, n[o]);
  return e;
};
const { name: B$, n: D$, classes: I$ } = ne("badge"), A$ = { key: 0 };
function M$(e, n) {
  const o = _("var-icon");
  return m(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      U(e.$slots, "default"),
      X(_e, {
        name: e.n("$-badge-fade"),
        persisted: ""
      }, {
        default: ce(() => [
          Ve(L(
            "span",
            je({
              class: e.classes(
                e.n("content"),
                e.n(`--${e.type}`),
                [e.$slots.default, e.n(`--${e.position}`), e.n("--offset")],
                [e.dot, e.n("--dot")],
                [e.icon, e.n("--icon")]
              ),
              style: T$({ background: e.color }, e.offsetStyle)
            }, e.$attrs),
            [
              e.icon ? (m(), we(o, {
                key: 0,
                class: p(e.n("icon")),
                "var-badge-cover": "",
                name: e.icon,
                namespace: e.namespace
              }, null, 8, ["class", "name", "namespace"])) : G("v-if", !0),
              U(e.$slots, "value", {}, () => [
                !e.icon && !e.dot ? (m(), P(
                  "span",
                  A$,
                  se(e.value),
                  1
                  /* TEXT */
                )) : G("v-if", !0)
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
const Cv = ee({
  name: B$,
  components: { VarIcon: Ge },
  inheritAttrs: !1,
  props: $v,
  setup(e) {
    const n = B(() => {
      const { value: t, maxValue: r } = e;
      return t != null && r != null && W(t) > W(r) ? `${r}+` : t;
    }), o = B(() => ({
      "--badge-offset-y": Oe(e.offsetY),
      "--badge-offset-x": Oe(e.offsetX)
    }));
    return {
      value: n,
      offsetStyle: o,
      n: D$,
      classes: I$
    };
  }
});
Cv.render = M$;
var Ra = Cv;
ae(Ra);
le(Ra, $v);
const MB = Ra;
var _r = Ra;
const Sv = {
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
}, Pv = Symbol(
  "BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"
);
function N$() {
  const { childProviders: e, length: n, bindChildren: o } = kn(
    Pv
  );
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: o
  };
}
var V$ = Object.defineProperty, jc = Object.getOwnPropertySymbols, R$ = Object.prototype.hasOwnProperty, L$ = Object.prototype.propertyIsEnumerable, Yc = (e, n, o) => n in e ? V$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Wc = (e, n) => {
  for (var o in n || (n = {}))
    R$.call(n, o) && Yc(e, o, n[o]);
  if (jc)
    for (var o of jc(n))
      L$.call(n, o) && Yc(e, o, n[o]);
  return e;
};
const { name: F$, n: U$, classes: H$ } = ne("bottom-navigation"), { n: La } = ne("bottom-navigation-item"), Kc = La("--right-half-space"), qc = La("--left-half-space"), Xc = La("--right-space"), j$ = {
  type: "primary"
};
function Y$(e, n) {
  const o = _("var-button");
  return m(), P(
    Ae,
    null,
    [
      L(
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
          U(e.$slots, "default"),
          e.$slots.fab ? (m(), we(o, je({
            key: 0,
            class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
            "var-bottom-navigation__fab": ""
          }, e.fabProps, { onClick: e.handleFabClick }), {
            default: ce(() => [
              U(e.$slots, "fab")
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["class", "onClick"])) : G("v-if", !0)
        ],
        16
        /* FULL_PROPS */
      ),
      e.fixed && e.placeholder ? (m(), P(
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
const Ov = ee({
  name: F$,
  components: { VarButton: Bn },
  props: Sv,
  setup(e, { slots: n }) {
    const o = w(null), t = B(() => e.active), r = B(() => e.activeColor), a = B(() => e.inactiveColor), i = B(() => e.variant), l = w(), s = w({}), { length: u, bottomNavigationItems: c, bindBottomNavigationItem: d } = N$();
    d({
      active: t,
      activeColor: r,
      inactiveColor: a,
      variant: i,
      onToggle: $
    }), fe(() => u.value, v), fe(
      () => e.fabProps,
      (R) => {
        s.value = Wc(Wc({}, j$), R);
      },
      { immediate: !0, deep: !0 }
    ), lo(V), yn(() => {
      V(), n.fab && T(u.value);
    }), _t(() => {
      S(), n.fab && T(u.value);
    });
    function v() {
      u.value === 0 || h() || g() || y();
    }
    function h() {
      return c.find(({ name: R }) => t.value === R.value);
    }
    function g() {
      return c.find(({ index: R }) => t.value === R.value);
    }
    function y() {
      En(t.value) && (t.value < 0 ? C(e["onUpdate:active"], 0) : t.value > u.value - 1 && C(e["onUpdate:active"], u.value - 1));
    }
    function $(R) {
      t.value !== R && (e.onBeforeChange ? k(R) : b(R));
    }
    function k(R) {
      const Y = fo(C(e.onBeforeChange, R));
      Promise.all(Y).then((E) => {
        E.every(Boolean) && b(R);
      });
    }
    function b(R) {
      C(e["onUpdate:active"], R), C(e.onChange, R);
    }
    function S() {
      D().forEach((Y) => {
        Y.classList.remove(Kc, qc, Xc);
      });
    }
    function T(R) {
      const Y = D(), E = Y.length, M = R % 2 === 0;
      Y.forEach((N, H) => {
        O(M, N, H, E);
      });
    }
    function O(R, Y, E, M) {
      const N = E === M - 1;
      if (!R && N) {
        Y.classList.add(Xc);
        return;
      }
      const H = E === M / 2 - 1, z = E === M / 2;
      H ? Y.classList.add(Kc) : z && Y.classList.add(qc);
    }
    function D() {
      return Array.from(o.value.querySelectorAll(`.${La()}`));
    }
    function A() {
      C(e.onFabClick);
    }
    function V() {
      if (!e.fixed || !e.placeholder)
        return;
      const { height: R } = nn(o.value);
      l.value = Oe(R);
    }
    return {
      length: u,
      bottomNavigationDom: o,
      fabProps: s,
      placeholderHeight: l,
      n: U$,
      classes: H$,
      handleFabClick: A
    };
  }
});
Ov.render = Y$;
var Fa = Ov;
ae(Fa);
le(Fa, Sv);
const NB = Fa;
var Sl = Fa;
const zv = {
  name: String,
  label: String,
  icon: Ie(on, "name"),
  namespace: Ie(on, "namespace"),
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: F()
};
function W$() {
  const { parentProvider: e, index: n, bindParent: o } = wn(
    Pv
  );
  return Ln(!!o, "BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: o
  };
}
const { name: K$, n: q$, classes: X$ } = ne("bottom-navigation-item"), G$ = {
  type: "danger",
  dot: !0
};
function Z$(e, n) {
  const o = _("var-icon"), t = _("var-badge"), r = Ye("ripple");
  return Ve((m(), P(
    "button",
    {
      class: p(e.classes(e.n(), e.n("$--box"), [e.variant, e.n("--variant-padding")], [e.isActive && !e.variant, e.n("--active")])),
      style: Z({
        color: e.isActive ? e.activeColor : e.inactiveColor
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      L(
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
          e.badge ? (m(), we(t, je({ key: 0 }, e.badgeProps, {
            class: e.n("badge"),
            "var-bottom-navigation-item-cover": ""
          }), {
            default: ce(() => [
              U(e.$slots, "icon", { active: e.isActive }, () => [
                e.icon ? (m(), we(o, {
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
          }, 16, ["class"])) : U(e.$slots, "icon", {
            key: 1,
            active: e.isActive
          }, () => [
            e.icon ? (m(), we(o, {
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
      L(
        "span",
        {
          class: p(e.n("label"))
        },
        [
          U(e.$slots, "default", {}, () => [
            De(
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
const Ev = ee({
  name: K$,
  components: {
    VarBadge: _r,
    VarIcon: Ge
  },
  directives: { Ripple: tn },
  props: zv,
  setup(e) {
    const n = B(() => e.name), o = B(() => [n.value, r.value].includes(l.value)), t = B(() => e.badge === !0 ? G$ : e.badge), { index: r, bottomNavigation: a, bindBottomNavigation: i } = W$(), { active: l, activeColor: s, inactiveColor: u, variant: c } = a;
    i({
      name: n,
      index: r
    });
    function f() {
      var v;
      const h = (v = n.value) != null ? v : r.value;
      C(e.onClick, h), C(a.onToggle, h);
    }
    return {
      activeColor: s,
      inactiveColor: u,
      badgeProps: t,
      isActive: o,
      variant: c,
      n: q$,
      classes: X$,
      handleClick: f
    };
  }
});
Ev.render = Z$;
var Ua = Ev;
ae(Ua);
le(Ua, zv);
const VB = Ua;
var Pl = Ua;
const Tv = {
  separator: String,
  onClick: F()
}, Bv = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function J$() {
  const { childProviders: e, bindChildren: n, length: o } = kn(
    Bv
  );
  return {
    length: o,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function Q$() {
  const { parentProvider: e, bindParent: n, index: o } = wn(
    Bv
  );
  return Ln(!!n, "Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: o,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
const { name: _$, n: x$, classes: eC } = ne("breadcrumb");
function nC(e, n) {
  return m(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      L(
        "div",
        {
          class: p(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
          onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
        },
        [
          U(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      e.isLast ? G("v-if", !0) : U(e.$slots, "separator", { key: 0 }, () => {
        var o;
        return [
          L(
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
const Dv = ee({
  name: _$,
  props: Tv,
  setup(e) {
    const { index: n, breadcrumb: o, bindBreadcrumb: t } = Q$(), r = B(() => n.value === o.length.value - 1), a = B(() => o.separator.value);
    t(null);
    function i(l) {
      r.value || C(e.onClick, l);
    }
    return {
      n: x$,
      classes: eC,
      isLast: r,
      parentSeparator: a,
      handleClick: i
    };
  }
});
Dv.render = nC;
var Ha = Dv;
ae(Ha);
le(Ha, Tv);
const RB = Ha;
var Ol = Ha;
const Iv = {
  separator: {
    type: String,
    default: "/"
  }
}, { name: oC, n: tC } = ne("breadcrumbs");
function rC(e, n) {
  return m(), P(
    "div",
    {
      class: p(e.n()),
      role: "navigation",
      "aria-label": "Breadcrumbs"
    },
    [
      U(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Av = ee({
  name: oC,
  props: Iv,
  setup(e) {
    const n = B(() => e.separator), { bindBreadcrumbList: o, length: t } = J$();
    return o({
      length: t,
      separator: n
    }), { n: tC };
  }
});
Av.render = rC;
var ja = Av;
ae(ja);
le(ja, Iv);
const LB = ja;
var zl = ja;
const Mv = {
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
}, { name: aC, n: iC, classes: lC } = ne("button-group");
function sC(e, n) {
  return m(), P(
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
      U(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Nv = ee({
  name: aC,
  props: Mv,
  setup(e) {
    const { bindButtons: n } = m$(), o = {
      elevation: B(() => e.elevation),
      type: B(() => e.type),
      size: B(() => e.size),
      color: B(() => e.color),
      textColor: B(() => e.textColor),
      mode: B(() => e.mode)
    };
    return n(o), {
      n: iC,
      classes: lC,
      formatElevation: dn
    };
  }
});
Nv.render = sC;
var Ya = Nv;
ae(Ya);
le(Ya, Mv);
const FB = Ya;
var El = Ya;
const Vv = {
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
var uC = (e, n, o) => new Promise((t, r) => {
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
const { name: cC, n: dC, classes: fC } = ne("card"), pC = 500, vC = ["src", "alt"];
function mC(e, n) {
  const o = _("var-icon"), t = _("var-button"), r = Ye("ripple");
  return Ve((m(), P(
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
      L(
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
          U(e.$slots, "image", {}, () => [
            e.src ? (m(), P("img", {
              key: 0,
              class: p(e.n("image")),
              style: Z({
                objectFit: e.fit,
                height: e.toSizeUnit(e.imageHeight),
                width: e.toSizeUnit(e.imageWidth)
              }),
              src: e.src,
              alt: e.alt
            }, null, 14, vC)) : G("v-if", !0)
          ]),
          L(
            "div",
            {
              class: p(e.n("container"))
            },
            [
              U(e.$slots, "title", {
                slotClass: e.n("title")
              }, () => [
                e.title ? (m(), P(
                  "div",
                  {
                    key: 0,
                    class: p(e.n("title"))
                  },
                  se(e.title),
                  3
                  /* TEXT, CLASS */
                )) : G("v-if", !0)
              ]),
              U(e.$slots, "subtitle", {
                slotClass: e.n("subtitle")
              }, () => [
                e.subtitle ? (m(), P(
                  "div",
                  {
                    key: 0,
                    class: p(e.n("subtitle"))
                  },
                  se(e.subtitle),
                  3
                  /* TEXT, CLASS */
                )) : G("v-if", !0)
              ]),
              e.$slots.default ? (m(), P(
                "div",
                {
                  key: 0,
                  class: p(e.n("content"))
                },
                [
                  U(e.$slots, "default")
                ],
                2
                /* CLASS */
              )) : G("v-if", !0),
              U(e.$slots, "description", {
                slotClass: e.n("description")
              }, () => [
                e.description ? (m(), P(
                  "div",
                  {
                    key: 0,
                    class: p(e.n("description"))
                  },
                  se(e.description),
                  3
                  /* TEXT, CLASS */
                )) : G("v-if", !0)
              ]),
              e.$slots.extra ? (m(), P(
                "div",
                {
                  key: 1,
                  class: p(e.n("footer"))
                },
                [
                  U(e.$slots, "extra")
                ],
                2
                /* CLASS */
              )) : G("v-if", !0),
              e.$slots["floating-content"] && !e.isRow ? (m(), P(
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
                  U(e.$slots, "floating-content")
                ],
                6
                /* CLASS, STYLE */
              )) : G("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          e.showFloatingButtons ? (m(), P(
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
              U(e.$slots, "close-button", {}, () => [
                X(t, {
                  "var-card-cover": "",
                  class: p(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
                  onClick: Xn(e.close, ["stop"])
                }, {
                  default: ce(() => [
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
      L(
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
const Rv = ee({
  name: cC,
  directives: { Ripple: tn },
  components: {
    VarIcon: Ge,
    VarButton: Bn
  },
  props: Vv,
  setup(e) {
    const n = w(null), o = w(null), t = w("auto"), r = w("auto"), a = w("100%"), i = w("100%"), l = w("auto"), s = w("auto"), u = w(void 0), c = w("hidden"), d = w("0px"), f = w("0"), v = B(() => e.layout === "row"), h = w(!1), g = w(!1), { zIndex: y } = lr(() => e.floating, 1);
    let $ = "auto", k = "auto", b = null;
    const S = w(null);
    ir(
      () => e.floating,
      () => !v.value
    ), fe(
      () => e.floating,
      (V) => {
        v.value || He(() => {
          V ? T() : O();
        });
      },
      { immediate: !0 }
    );
    function T() {
      clearTimeout(S.value), clearTimeout(b), S.value = null, S.value = setTimeout(
        () => uC(this, null, function* () {
          const { width: V, height: R, left: Y, top: E } = nn(n.value);
          t.value = Oe(V), r.value = Oe(R), a.value = t.value, i.value = r.value, l.value = Oe(E), s.value = Oe(Y), u.value = "fixed", $ = l.value, k = s.value, h.value = !0, yield bn(), l.value = "0", s.value = "0", a.value = "100vw", i.value = "100vh", d.value = "auto", f.value = "1", c.value = "auto", g.value = !0;
        }),
        e.ripple ? pC : 0
      );
    }
    function O() {
      clearTimeout(b), clearTimeout(S.value), S.value = null, a.value = t.value, i.value = r.value, l.value = $, s.value = k, d.value = "0px", f.value = "0", h.value = !1, b = setTimeout(() => {
        t.value = "auto", r.value = "auto", a.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", $ = "auto", k = "auto", c.value = "hidden", u.value = void 0, g.value = !1;
      }, e.floatingDuration);
    }
    function D() {
      C(e["onUpdate:floating"], !1);
    }
    function A(V) {
      C(e.onClick, V);
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
      floated: g,
      n: dC,
      classes: fC,
      toSizeUnit: Oe,
      close: D,
      formatElevation: dn,
      handleClick: A
    };
  }
});
Rv.render = mC;
var Wa = Rv;
ae(Wa);
le(Wa, Vv);
const UB = Wa;
var Tl = Wa;
const Lv = {
  title: String,
  icon: Ie(on, "name"),
  namespace: Ie(on, "namespace"),
  description: String,
  border: Boolean,
  borderOffset: [Number, String],
  iconClass: String,
  titleClass: String,
  descriptionClass: String,
  extraClass: String,
  ripple: Boolean,
  onClick: F()
}, { name: hC, n: gC, classes: bC } = ne("cell");
function yC(e, n) {
  const o = _("var-icon"), t = Ye("ripple");
  return Ve((m(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: Z(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
    },
    [
      U(e.$slots, "icon", {}, () => [
        e.icon ? (m(), P(
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
      L(
        "div",
        {
          class: p(e.n("content"))
        },
        [
          U(e.$slots, "default", {}, () => [
            e.title ? (m(), P(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("title"), e.titleClass))
              },
              se(e.title),
              3
              /* TEXT, CLASS */
            )) : G("v-if", !0)
          ]),
          U(e.$slots, "description", {}, () => [
            e.description ? (m(), P(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("description"), e.descriptionClass))
              },
              se(e.description),
              3
              /* TEXT, CLASS */
            )) : G("v-if", !0)
          ])
        ],
        2
        /* CLASS */
      ),
      e.$slots.extra ? (m(), P(
        "div",
        {
          key: 0,
          class: p(e.classes(e.n("extra"), e.extraClass))
        },
        [
          U(e.$slots, "extra")
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
const Fv = ee({
  name: hC,
  components: { VarIcon: Ge },
  directives: { Ripple: tn },
  props: Lv,
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
      n: gC,
      classes: bC,
      toSizeUnit: Oe,
      handleClick: o
    };
  }
});
Fv.render = yC;
var Ka = Fv;
ae(Ka);
le(Ka, Lv);
const HB = Ka;
var Bl = Ka;
const Uv = {
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
}, { name: wC, n: kC, classes: $C } = ne("checkbox-group");
function CC(e, n) {
  const o = _("maybe-v-node"), t = _("var-checkbox"), r = _("var-form-details");
  return m(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      L(
        "div",
        {
          class: p(e.classes(e.n(), e.n(`--${e.direction}`)))
        },
        [
          e.options.length ? (m(!0), P(
            Ae,
            { key: 0 },
            qe(e.options, (a) => (m(), we(t, {
              key: a[e.valueKey],
              "checked-value": a[e.valueKey],
              disabled: a.disabled
            }, {
              default: ce(({ checked: i }) => [
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
          U(e.$slots, "default")
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
const Hv = ee({
  name: wC,
  components: { VarFormDetails: Tn, VarCheckbox: ct, MaybeVNode: ar },
  props: Uv,
  setup(e) {
    const n = B(() => e.max), o = B(() => e.modelValue.length), { length: t, checkboxes: r, bindCheckboxes: a } = C1(), { bindForm: i } = Hn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: c
    } = Un(), d = B(() => l.value), f = {
      max: n,
      checkedCount: o,
      onChecked: g,
      onUnchecked: y,
      validate: T,
      resetValidation: c,
      reset: S,
      errorMessage: d
    };
    fe(() => e.modelValue, $, { deep: !0 }), fe(() => t.value, $), a(f), C(i, f);
    function v(O) {
      He(() => {
        const { validateTrigger: D, rules: A, modelValue: V } = e;
        s(D, O, A, V);
      });
    }
    function h(O) {
      C(e["onUpdate:modelValue"], O), C(e.onChange, O), v("onChange");
    }
    function g(O) {
      const { modelValue: D } = e;
      D.includes(O) || h([...D, O]);
    }
    function y(O) {
      const { modelValue: D } = e;
      D.includes(O) && h(D.filter((A) => A !== O));
    }
    function $() {
      r.forEach(({ sync: O }) => O(e.modelValue));
    }
    function k() {
      const O = r.map(({ checkedValue: A }) => A.value), D = sl(O);
      return C(e["onUpdate:modelValue"], D), D;
    }
    function b() {
      const O = r.filter(({ checked: A }) => !A.value).map(({ checkedValue: A }) => A.value), D = sl(O);
      return C(e["onUpdate:modelValue"], D), D;
    }
    function S() {
      C(e["onUpdate:modelValue"], []), c();
    }
    function T() {
      return u(e.rules, e.modelValue);
    }
    return {
      errorMessage: l,
      n: kC,
      classes: $C,
      checkAll: k,
      inverseAll: b,
      reset: S,
      validate: T,
      resetValidation: c,
      isFunction: mn
    };
  }
});
Hv.render = CC;
var qa = Hv;
ae(qa);
le(qa, Uv);
const jB = qa;
var Dl = qa;
const jv = {
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
  iconName: Ie(on, "name"),
  namespace: Ie(on, "namespace"),
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
}, { name: SC, n: yo, classes: PC } = ne("chip");
function OC(e, n) {
  const o = _("var-icon");
  return m(), we(_e, {
    name: e.n("$-fade")
  }, {
    default: ce(() => [
      L(
        "span",
        je({
          class: e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 1), ...e.contentClass),
          style: e.chipStyle
        }, e.$attrs),
        [
          U(e.$slots, "left"),
          L(
            "span",
            {
              class: p(e.n(`text-${e.size}`))
            },
            [
              U(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          U(e.$slots, "right"),
          e.closeable ? (m(), P(
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
const Yv = ee({
  name: SC,
  components: {
    VarIcon: Ge
  },
  inheritAttrs: !1,
  props: jv,
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
      classes: PC,
      formatElevation: dn,
      handleClose: t
    };
  }
});
Yv.render = OC;
var Xa = Yv;
ae(Xa);
le(Xa, jv);
const YB = Xa;
var xr = Xa;
const Il = Symbol("HIGHLIGHTER_PROVIDER_KEY");
function zC(e) {
  js(Il, e);
}
function EC() {
  return eu(Il) ? Hs(Il) : { highlighter: null, theme: null };
}
const Wv = {
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
var TC = (e, n, o) => new Promise((t, r) => {
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
const { name: BC, n: DC, classes: IC } = ne("code"), AC = ["innerHTML"];
function MC(e, n) {
  return m(), P("div", {
    class: p(e.classes(e.n(), [e.wordWrap, e.n("--word-wrap")])),
    innerHTML: e.highlightedCode
  }, null, 10, AC);
}
const Kv = ee({
  name: BC,
  props: Wv,
  setup(e) {
    const { highlighter: n, theme: o } = EC(), t = w(""), r = B(() => {
      var a;
      return (a = e.theme) != null ? a : o == null ? void 0 : o.value;
    });
    return n && fe(
      () => [n.value, e.code, e.language, r.value, e.trim],
      (a) => TC(this, [a], function* ([i, l, s = "", u = "", c]) {
        i && (t.value = yield i.codeToHtml(c ? l.trim() : l, { lang: s, theme: u }));
      }),
      { immediate: !0 }
    ), {
      n: DC,
      classes: IC,
      highlightedCode: t
    };
  }
});
Kv.render = MC;
var Ga = Kv;
ae(Ga);
le(Ga, Wv);
const WB = Ga;
var Al = Ga;
const qv = {
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
}, Xv = Symbol("ROW_BIND_COL_KEY");
function NC() {
  const { length: e, childProviders: n, bindChildren: o } = kn(Xv);
  return {
    length: e,
    cols: n,
    bindCols: o
  };
}
function VC() {
  const { index: e, bindParent: n, parentProvider: o } = wn(Xv);
  return {
    index: e,
    row: o,
    bindRow: n
  };
}
const { name: RC, n: br, classes: LC } = ne("col");
function FC(e, n) {
  return m(), P(
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
      U(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Gv = ee({
  name: RC,
  props: qv,
  setup(e) {
    const n = B(() => W(e.span)), o = B(() => W(e.offset)), t = B(() => {
      var s;
      const [u = 0, c = 0] = (s = r == null ? void 0 : r.average.value) != null ? s : [];
      return { left: c, right: c, top: u, bottom: u };
    }), { row: r, bindRow: a } = VC();
    C(a, null);
    function i(s, u) {
      const c = [];
      if (u == null)
        return c;
      if (Rn(u)) {
        const { offset: d, span: f } = u;
        return Number(f) >= 0 && c.push(br(`--span-${s}-${f}`)), d && c.push(br(`--offset-${s}-${d}`)), c;
      }
      return Number(u) >= 0 && c.push(br(`--span-${s}-${u}`)), c;
    }
    function l(s) {
      C(e.onClick, s);
    }
    return {
      span: n,
      offset: o,
      padding: t,
      n: br,
      classes: LC,
      toNumber: W,
      toSizeUnit: Oe,
      getSize: i,
      handleClick: l,
      padStartFlex: Zr
    };
  }
});
Gv.render = FC;
var Za = Gv;
ae(Za);
le(Za, qv);
const KB = Za;
var Ml = Za;
const Zv = {
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
}, Jv = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function UC() {
  const { childProviders: e, length: n, bindChildren: o } = kn(
    Jv
  );
  return {
    length: n,
    collapseItems: e,
    bindCollapseItems: o
  };
}
const { name: HC, n: jC } = ne("collapse");
function YC(e, n) {
  return m(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      U(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Qv = ee({
  name: HC,
  props: Zv,
  setup(e) {
    const n = B(() => e.offset), o = B(() => e.divider), t = B(() => e.elevation), r = B(() => e.accordion), a = B(() => fo(e.modelValue)), { length: i, collapseItems: l, bindCollapseItems: s } = UC(), u = {
      offset: n,
      divider: o,
      elevation: t,
      accordion: r,
      updateItem: c
    };
    fe(
      () => i.value,
      () => He().then(v)
    ), fe(
      () => e.modelValue,
      () => He().then(v)
    ), s(u);
    function c(g, y) {
      if (e.accordion) {
        d(y ? g : void 0);
        return;
      }
      const $ = y ? [...a.value, g] : a.value.filter((k) => k !== g);
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
        const k = l.find(({ name: b }) => $ === b.value);
        return k ?? l.find(({ index: b, name: S }) => S.value == null && $ === b.value);
      }
      const g = l.filter(
        ({ name: $ }) => $.value != null && a.value.includes($.value)
      ), y = l.filter(
        ({ index: $, name: k }) => k.value == null && a.value.includes($.value)
      );
      return [...g, ...y];
    }
    function v() {
      const g = If(fo(f()));
      l.forEach((y) => {
        y.init(g.includes(y));
      });
    }
    return {
      divider: o,
      n: jC,
      toggleAll: (g) => {
        if (e.accordion)
          return;
        const $ = l.filter((k) => {
          var b;
          const S = (b = k.name.value) != null ? b : k.index.value, T = a.value.includes(S);
          return g.skipDisabled && k.disabled.value ? T : g.expand === "inverse" ? !T : g.expand;
        }).map((k) => {
          var b;
          return (b = k.name.value) != null ? b : k.index.value;
        });
        d($);
      }
    };
  }
});
Qv.render = YC;
var Ja = Qv;
ae(Ja);
le(Ja, Zv);
const qB = Ja;
var Nl = Ja, Gc = (e, n, o) => new Promise((t, r) => {
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
function _v(e) {
  const { contentEl: n, showContent: o, expand: t } = e;
  let r = !0;
  fe(
    t,
    (u) => {
      He(() => {
        u ? a() : i();
      });
    },
    { immediate: !0 }
  );
  function a() {
    return Gc(this, null, function* () {
      if (!n.value || (n.value.style.height = "", o.value = !0, yield po(), !n.value))
        return;
      const { offsetHeight: u } = n.value;
      n.value.style.height = "0px", yield po(), n.value && (n.value.style.height = u + "px", r && (yield bn(), r && l()));
    });
  }
  const i = () => Gc(this, null, function* () {
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
const xv = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
};
function WC() {
  const { parentProvider: e, index: n, bindParent: o } = wn(
    Jv
  );
  return Ln(!!o, "Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: o
  };
}
const { name: KC, n: qC, classes: XC } = ne("collapse-item"), GC = ["aria-expanded", "aria-disabled", "role"];
function ZC(e, n) {
  const o = _("var-icon");
  return m(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: Z(`--collapse-divider-top: ${e.divider ? "var(--collapse-border-top)" : "none"}`)
    },
    [
      L(
        "div",
        {
          class: p(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2)))
        },
        null,
        2
        /* CLASS */
      ),
      L("div", {
        class: p(e.classes(e.n("header"), [!e.disabled, e.n("header--cursor-pointer")])),
        "aria-expanded": e.isShow,
        "aria-disabled": e.disabled,
        role: e.accordion ? "tab" : "button",
        onClick: n[0] || (n[0] = (...t) => e.toggle && e.toggle(...t))
      }, [
        e.$slots.title || e.title ? (m(), P(
          "div",
          {
            key: 0,
            class: p(e.n("header-title"))
          },
          [
            U(e.$slots, "title", {}, () => [
              De(
                se(e.title),
                1
                /* TEXT */
              )
            ])
          ],
          2
          /* CLASS */
        )) : G("v-if", !0),
        L(
          "div",
          {
            class: p(e.n("header-icon"))
          },
          [
            U(e.$slots, "icon", {}, () => [
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
      ], 10, GC),
      Ve(L(
        "div",
        {
          ref: "contentEl",
          class: p(e.n("content")),
          onTransitionend: n[1] || (n[1] = (...t) => e.handleTransitionEnd && e.handleTransitionEnd(...t)),
          onTransitionstart: n[2] || (n[2] = (...t) => e.handleTransitionStart && e.handleTransitionStart(...t))
        },
        [
          L(
            "div",
            {
              class: p(e.n("content-wrap"))
            },
            [
              U(e.$slots, "default")
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
const em = ee({
  name: KC,
  components: {
    VarIcon: Ge
  },
  props: xv,
  setup(e) {
    const n = w(!1), o = w(!1), t = w(null), r = B(() => e.name), a = B(() => e.disabled), { index: i, collapse: l, bindCollapse: s } = WC(), { offset: u, divider: c, elevation: d, accordion: f, updateItem: v } = l;
    s({
      index: i,
      name: r,
      disabled: a,
      init: $
    });
    const { handleTransitionEnd: g, handleTransitionStart: y } = _v({
      contentEl: t,
      showContent: o,
      expand: n
    });
    function $(b) {
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
      n: qC,
      classes: XC,
      toggle: k,
      formatElevation: dn,
      handleTransitionEnd: g,
      handleTransitionStart: y
    };
  }
});
em.render = ZC;
var Qa = em;
ae(Qa);
le(Qa, xv);
const XB = Qa;
var Vl = Qa;
const nm = {
  expand: Boolean
}, { name: JC, n: QC } = ne("collapse-transition");
function _C(e, n) {
  return Ve((m(), P(
    "div",
    {
      ref: "contentEl",
      class: p(e.n("content")),
      onTransitionend: n[0] || (n[0] = (...o) => e.handleTransitionEnd && e.handleTransitionEnd(...o)),
      onTransitionstart: n[1] || (n[1] = (...o) => e.handleTransitionStart && e.handleTransitionStart(...o))
    },
    [
      U(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  )), [
    [xn, e.showContent]
  ]);
}
const om = ee({
  name: JC,
  props: nm,
  setup(e) {
    const n = w(!1), o = w(null), t = B(() => e.expand), { handleTransitionEnd: r, handleTransitionStart: a } = _v({
      contentEl: o,
      showContent: n,
      expand: t
    });
    return {
      showContent: n,
      contentEl: o,
      n: QC,
      handleTransitionEnd: r,
      handleTransitionStart: a
    };
  }
});
om.render = _C;
var _a = om;
ae(_a);
le(_a, nm);
const GB = _a;
var Rl = _a;
const tm = {
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
}, { name: xC, n: eS } = ne("count-to");
function nS(e, n) {
  return m(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      U(e.$slots, "default", { value: e.value }, () => [
        De(
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
const rm = ee({
  name: xC,
  props: tm,
  setup(e) {
    const {
      value: n,
      reset: o,
      // expose
      start: t,
      // expose
      pause: r
    } = p0({
      from: () => W(e.from),
      to: () => W(e.to),
      duration: () => W(e.duration),
      timingFunction: e.timingFunction,
      onFinished() {
        C(e.onEnd);
      }
    }), a = B(() => ul(n.value, W(e.precision)));
    fe(() => [e.from, e.to, e.duration], i), Lo(i);
    function i() {
      o(), e.autoStart && t();
    }
    return {
      value: a,
      n: eS,
      start: t,
      pause: r,
      reset: i,
      toNumber: W,
      floor: ul
    };
  }
});
rm.render = nS;
var xa = rm;
ae(xa);
le(xa, tm);
const ZB = xa;
var Ll = xa;
const am = {
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
}, { name: oS, n: tS } = ne("countdown"), Fl = 1e3, Ul = 60 * Fl, Hl = 60 * Ul, Zc = 24 * Hl;
function rS(e, n) {
  return m(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      U(e.$slots, "default", To(xt(e.timeData)), () => [
        De(
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
const im = ee({
  name: oS,
  props: am,
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
    ), Lo(() => {
      c(), e.autoStart && d();
    }), Fo(() => {
      l != null && (r = l, r === !0 && d(!0));
    }), yt(() => {
      l = r, f();
    }), Jt(f);
    function s(h, g) {
      const y = Object.values(g), $ = ["DD", "HH", "mm", "ss"], k = [24, 60, 60, 1e3];
      if ($.forEach((b, S) => {
        h.includes(b) ? h = h.replace(b, Qo(`${y[S]}`, 2, "0")) : y[S + 1] += y[S] * k[S];
      }), h.includes("S")) {
        const b = Qo(`${y[y.length - 1]}`, 3, "0");
        h.includes("SSS") ? h = h.replace("SSS", b) : h.includes("SS") ? h = h.replace("SS", b.slice(0, 2)) : h = h.replace("S", b.slice(0, 1));
      }
      return h;
    }
    function u(h) {
      const g = Math.floor(h / Zc), y = Math.floor(h % Zc / Hl), $ = Math.floor(h % Hl / Ul), k = Math.floor(h % Ul / Fl), b = Math.floor(h % Fl), S = {
        days: g,
        hours: y,
        minutes: $,
        seconds: k,
        milliseconds: b
      };
      o.value = S, C(e.onChange, o.value), n.value = s(e.format, S);
    }
    function c() {
      const { time: h, onEnd: g } = e, y = performance.now();
      if (t || (t = y + W(h)), i = t - y, i < 0 && (i = 0), u(i), i === 0) {
        C(g);
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
      n: tS,
      start: d,
      pause: f,
      reset: v
    };
  }
});
im.render = rS;
var ei = im;
ae(ei);
le(ei, am);
const JB = ei;
var jl = ei;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Yl = 9e15, jo = 1e9, Wl = "0123456789abcdef", ea = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", na = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Kl = {
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
  maxE: Yl,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, lm, co, Ee = !0, ni = "[DecimalError] ", Ro = ni + "Invalid argument: ", sm = ni + "Precision limit exceeded", um = ni + "crypto unavailable", cm = "[object Decimal]", Sn = Math.floor, vn = Math.pow, aS = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, iS = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, lS = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, dm = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, _n = 1e7, Pe = 7, sS = 9007199254740991, uS = ea.length - 1, ql = na.length - 1, x = { toStringTag: cm };
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
  return o.d ? o.d[0] ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(o.e, o.sd()) + Pe, t.rounding = 1, o = cS(t, hm(t, o)), t.precision = e, t.rounding = n, Ce(co == 2 || co == 3 ? o.neg() : o, e, n, !0)) : new t(1) : new t(NaN);
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
    if (u.abs().eq(1) && d + 4 <= ql)
      return i = Qn(c, d + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s) return new c(NaN);
    if (d + 4 <= ql)
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
  if (Ee = !1, l = d + v, i = zo(u, l), t = n ? oa(c, l + 10) : zo(e, l), s = Je(i, t, l, 1), Wt(s.d, r = d, f))
    do
      if (l += 10, i = zo(u, l), t = n ? oa(c, l + 10) : zo(e, l), s = Je(i, t, l, 1), !a) {
        +Cn(s.d).slice(r + 1, r + 15) + 1 == 1e14 && (s = Ce(s, d + 1, 0));
        break;
      }
    while (Wt(s.d, r += 10, f));
  return Ee = !0, Ce(s, d, f);
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
  return u[0] ? (e.d = u, e.e = oi(u, o), Ee ? Ce(e, l, s) : e) : new h(s === 3 ? -0 : 0);
};
x.modulo = x.mod = function(e) {
  var n, o = this, t = o.constructor;
  return e = new t(e), !o.d || !e.s || e.d && !e.d[0] ? new t(NaN) : !e.d || o.d && !o.d[0] ? Ce(new t(o), t.precision, t.rounding) : (Ee = !1, t.modulo == 9 ? (n = Je(o, e.abs(), 0, 3, 1), n.s *= e.s) : n = Je(o, e, 0, t.modulo, 1), n = n.times(e), Ee = !0, o.minus(n));
};
x.naturalExponential = x.exp = function() {
  return Xl(this);
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
  return e.d = u, e.e = oi(u, t), Ee ? Ce(e, l, s) : e;
};
x.precision = x.sd = function(e) {
  var n, o = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Ro + e);
  return o.d ? (n = fm(o.d), e && o.e + 1 > n && (n = o.e + 1)) : n = NaN, n;
};
x.round = function() {
  var e = this, n = e.constructor;
  return Ce(new n(e), e.e + 1, n.rounding);
};
x.sine = x.sin = function() {
  var e, n, o = this, t = o.constructor;
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + Math.max(o.e, o.sd()) + Pe, t.rounding = 1, o = fS(t, hm(t, o)), t.precision = e, t.rounding = n, Ce(co > 2 ? o.neg() : o, e, n, !0)) : new t(NaN);
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
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + 10, t.rounding = 1, o = o.sin(), o.s = 1, o = Je(o, new t(1).minus(o.times(o)).sqrt(), e + 10, 0), t.precision = e, t.rounding = n, Ce(co == 2 || co == 4 ? o.neg() : o, e, n, !0)) : new t(NaN);
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
  return n ? ++o : a.shift(), e.d = a, e.e = oi(a, o), Ee ? Ce(e, d.precision, d.rounding) : e;
};
x.toBinary = function(e, n) {
  return $u(this, 2, e, n);
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
  var n, o, t, r, a, i, l, s, u, c, d, f, v = this, h = v.d, g = v.constructor;
  if (!h) return new g(v);
  if (u = o = new g(1), t = s = new g(0), n = new g(t), a = n.e = fm(h) - v.e - 1, i = a % Pe, n.d[0] = vn(10, i < 0 ? Pe + i : i), e == null)
    e = a > 0 ? n : u;
  else {
    if (l = new g(e), !l.isInt() || l.lt(u)) throw Error(Ro + l);
    e = l.gt(n) ? a > 0 ? n : u : l;
  }
  for (Ee = !1, l = new g(Cn(h)), c = g.precision, g.precision = a = h.length * Pe * 2; d = Je(l, n, 0, 1, 1), r = o.plus(d.times(t)), r.cmp(e) != 1; )
    o = t, t = r, r = u, u = s.plus(d.times(r)), s = r, r = n, n = l.minus(d.times(r)), l = r;
  return r = Je(e.minus(o), t, 0, 1, 1), s = s.plus(r.times(u)), o = o.plus(r.times(t)), s.s = u.s = v.s, f = Je(u, t, a, 1).minus(v).abs().cmp(Je(s, o, a, 1).minus(v).abs()) < 1 ? [u, t] : [s, o], g.precision = c, Ee = !0, f;
};
x.toHexadecimal = x.toHex = function(e, n) {
  return $u(this, 16, e, n);
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
  return $u(this, 8, e, n);
};
x.toPower = x.pow = function(e) {
  var n, o, t, r, a, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0]) return new s(vn(+l, u));
  if (l = new s(l), l.eq(1)) return l;
  if (t = s.precision, a = s.rounding, e.eq(1)) return Ce(l, t, a);
  if (n = Sn(e.e / Pe), n >= e.d.length - 1 && (o = u < 0 ? -u : u) <= sS)
    return r = pm(s, l, o, t), e.s < 0 ? new s(1).div(r) : Ce(r, t, a);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1) return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return o = vn(+l, u), n = o == 0 || !isFinite(o) ? Sn(u * (Math.log("0." + Cn(l.d)) / Math.LN10 + l.e + 1)) : new s(o + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (Ee = !1, s.rounding = l.s = 1, o = Math.min(12, (n + "").length), r = Xl(e.times(zo(l, t + o)), t), r.d && (r = Ce(r, t + 5, 1), Wt(r.d, t, a) && (n = t + 10, r = Ce(Xl(e.times(zo(l, n + o)), n), n + 5, 1), +Cn(r.d).slice(t + 1, t + 15) + 1 == 1e14 && (r = Ce(r, t + 1, 0)))), r.s = i, Ee = !0, s.rounding = a, Ce(r, t, a));
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
function Wt(e, n, o, t) {
  var r, a, i, l;
  for (a = e[0]; a >= 10; a /= 10) --n;
  return --n < 0 ? (n += Pe, r = 0) : (r = Math.ceil((n + 1) / Pe), n %= Pe), a = vn(10, Pe - n), l = e[r] % a | 0, t == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = o < 4 && l == 99999 || o > 3 && l == 49999 || l == 5e4 || l == 0) : i = (o < 4 && l + 1 == a || o > 3 && l + 1 == a / 2) && (e[r + 1] / a / 100 | 0) == vn(10, n - 2) - 1 || (l == a / 2 || l == 0) && (e[r + 1] / a / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (t || o < 4) && l == 9999 || !t && o > 3 && l == 4999) : i = ((t || o < 4) && l + 1 == a || !t && o > 3 && l + 1 == a / 2) && (e[r + 1] / a / 1e3 | 0) == vn(10, n - 3) - 1, i;
}
function Ir(e, n, o) {
  for (var t, r = [0], a, i = 0, l = e.length; i < l; ) {
    for (a = r.length; a--; ) r[a] *= n;
    for (r[0] += Wl.indexOf(e.charAt(i++)), t = 0; t < r.length; t++)
      r[t] > o - 1 && (r[t + 1] === void 0 && (r[t + 1] = 0), r[t + 1] += r[t] / o | 0, r[t] %= o);
  }
  return r.reverse();
}
function cS(e, n) {
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
    var u, c, d, f, v, h, g, y, $, k, b, S, T, O, D, A, V, R, Y, E, M = t.constructor, N = t.s == r.s ? 1 : -1, H = t.d, z = r.d;
    if (!H || !H[0] || !z || !z[0])
      return new M(
        // Return NaN if either NaN, or both Infinity or 0.
        !t.s || !r.s || (H ? z && H[0] == z[0] : !z) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          H && H[0] == 0 || !z ? N * 0 : N / 0
        )
      );
    for (s ? (v = 1, c = t.e - r.e) : (s = _n, v = Pe, c = Sn(t.e / v) - Sn(r.e / v)), Y = z.length, V = H.length, $ = new M(N), k = $.d = [], d = 0; z[d] == (H[d] || 0); d++) ;
    if (z[d] > (H[d] || 0) && c--, a == null ? (O = a = M.precision, i = M.rounding) : l ? O = a + (t.e - r.e) + 1 : O = a, O < 0)
      k.push(1), h = !0;
    else {
      if (O = O / v + 2 | 0, d = 0, Y == 1) {
        for (f = 0, z = z[0], O++; (d < V || f) && O--; d++)
          D = f * s + (H[d] || 0), k[d] = D / z | 0, f = D % z | 0;
        h = f || d < V;
      } else {
        for (f = s / (z[0] + 1) | 0, f > 1 && (z = e(z, f, s), H = e(H, f, s), Y = z.length, V = H.length), A = Y, b = H.slice(0, Y), S = b.length; S < Y; ) b[S++] = 0;
        E = z.slice(), E.unshift(0), R = z[0], z[1] >= s / 2 && ++R;
        do
          f = 0, u = n(z, b, Y, S), u < 0 ? (T = b[0], Y != S && (T = T * s + (b[1] || 0)), f = T / R | 0, f > 1 ? (f >= s && (f = s - 1), g = e(z, f, s), y = g.length, S = b.length, u = n(g, b, y, S), u == 1 && (f--, o(g, Y < y ? E : z, y, s))) : (f == 0 && (u = f = 1), g = z.slice()), y = g.length, y < S && g.unshift(0), o(b, g, S, s), u == -1 && (S = b.length, u = n(z, b, Y, S), u < 1 && (f++, o(b, Y < S ? E : z, S, s))), S = b.length) : u === 0 && (f++, b = [0]), k[d++] = f, u && b[0] ? b[S++] = H[A] || 0 : (b = [H[A]], S = 1);
        while ((A++ < V || b[0] !== void 0) && O--);
        h = b[0] !== void 0;
      }
      k[0] || k.shift();
    }
    if (v == 1)
      $.e = c, lm = h;
    else {
      for (d = 1, f = k[0]; f >= 10; f /= 10) d++;
      $.e = d + c * v - 1, Ce($, l ? a + $.e + 1 : a, i, h);
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
  if (!e.isFinite()) return mm(e);
  var t, r = e.e, a = Cn(e.d), i = a.length;
  return n ? (o && (t = o - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + ko(t) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : r < 0 ? (a = "0." + ko(-r - 1) + a, o && (t = o - i) > 0 && (a += ko(t))) : r >= i ? (a += ko(r + 1 - i), o && (t = o - r - 1) > 0 && (a = a + "." + ko(t))) : ((t = r + 1) < i && (a = a.slice(0, t) + "." + a.slice(t)), o && (t = o - i) > 0 && (r + 1 === i && (a += "."), a += ko(t))), a;
}
function oi(e, n) {
  var o = e[0];
  for (n *= Pe; o >= 10; o /= 10) n++;
  return n;
}
function oa(e, n, o) {
  if (n > uS)
    throw Ee = !0, o && (e.precision = o), Error(sm);
  return Ce(new e(ea), n, 1, !0);
}
function Qn(e, n, o) {
  if (n > ql) throw Error(sm);
  return Ce(new e(na), n, o, !0);
}
function fm(e) {
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
function pm(e, n, o, t) {
  var r, a = new e(1), i = Math.ceil(t / Pe + 4);
  for (Ee = !1; ; ) {
    if (o % 2 && (a = a.times(n), Qc(a.d, i) && (r = !0)), o = Sn(o / 2), o === 0) {
      o = a.d.length - 1, r && a.d[o] === 0 && ++a.d[o];
      break;
    }
    n = n.times(n), Qc(n.d, i);
  }
  return Ee = !0, a;
}
function Jc(e) {
  return e.d[e.d.length - 1] & 1;
}
function vm(e, n, o) {
  for (var t, r = new e(n[0]), a = 0; ++a < n.length; )
    if (t = new e(n[a]), t.s)
      r[o](t) && (r = t);
    else {
      r = t;
      break;
    }
  return r;
}
function Xl(e, n) {
  var o, t, r, a, i, l, s, u = 0, c = 0, d = 0, f = e.constructor, v = f.rounding, h = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
  for (n == null ? (Ee = !1, s = h) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), d += 5;
  for (t = Math.log(vn(2, d)) / Math.LN10 * 2 + 5 | 0, s += t, o = a = i = new f(1), f.precision = s; ; ) {
    if (a = Ce(a.times(e), s, 1), o = o.times(++c), l = i.plus(Je(a, o, s, 1)), Cn(l.d).slice(0, s) === Cn(i.d).slice(0, s)) {
      for (r = d; r--; ) i = Ce(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && Wt(i.d, s - t, v, u))
          f.precision = s += 10, o = a = l = new f(1), c = 0, u++;
        else
          return Ce(i, f.precision = h, v, Ee = !0);
      else
        return f.precision = h, i;
    }
    i = l;
  }
}
function zo(e, n) {
  var o, t, r, a, i, l, s, u, c, d, f, v = 1, h = 10, g = e, y = g.d, $ = g.constructor, k = $.rounding, b = $.precision;
  if (g.s < 0 || !y || !y[0] || !g.e && y[0] == 1 && y.length == 1)
    return new $(y && !y[0] ? -1 / 0 : g.s != 1 ? NaN : y ? 0 : g);
  if (n == null ? (Ee = !1, c = b) : c = n, $.precision = c += h, o = Cn(y), t = o.charAt(0), Math.abs(a = g.e) < 15e14) {
    for (; t < 7 && t != 1 || t == 1 && o.charAt(1) > 3; )
      g = g.times(e), o = Cn(g.d), t = o.charAt(0), v++;
    a = g.e, t > 1 ? (g = new $("0." + o), a++) : g = new $(t + "." + o.slice(1));
  } else
    return u = oa($, c + 2, b).times(a + ""), g = zo(new $(t + "." + o.slice(1)), c - h).plus(u), $.precision = b, n == null ? Ce(g, b, k, Ee = !0) : g;
  for (d = g, s = i = g = Je(g.minus(1), g.plus(1), c, 1), f = Ce(g.times(g), c, 1), r = 3; ; ) {
    if (i = Ce(i.times(f), c, 1), u = s.plus(Je(i, new $(r), c, 1)), Cn(u.d).slice(0, c) === Cn(s.d).slice(0, c))
      if (s = s.times(2), a !== 0 && (s = s.plus(oa($, c + 2, b).times(a + ""))), s = Je(s, new $(v), c, 1), n == null)
        if (Wt(s.d, c - h, k, l))
          $.precision = c += h, u = i = g = Je(d.minus(1), d.plus(1), c, 1), f = Ce(g.times(g), c, 1), r = l = 1;
        else
          return Ce(s, $.precision = b, k, Ee = !0);
      else
        return $.precision = b, s;
    s = u, r += 2;
  }
}
function mm(e) {
  return String(e.s * e.s / 0);
}
function Gl(e, n) {
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
function dS(e, n) {
  var o, t, r, a, i, l, s, u, c;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), dm.test(n)) return Gl(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (iS.test(n))
    o = 16, n = n.toLowerCase();
  else if (aS.test(n))
    o = 2;
  else if (lS.test(n))
    o = 8;
  else
    throw Error(Ro + n);
  for (a = n.search(/p/i), a > 0 ? (s = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, t = e.constructor, i && (n = n.replace(".", ""), l = n.length, a = l - a, r = pm(t, new t(o), a, a * 2)), u = Ir(n, o, _n), c = u.length - 1, a = c; u[a] === 0; --a) u.pop();
  return a < 0 ? new t(e.s * 0) : (e.e = oi(u, c), e.d = u, Ee = !1, i && (e = Je(e, r, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? vn(2, s) : Eo.pow(2, s))), Ee = !0, e);
}
function fS(e, n) {
  var o, t = n.d.length;
  if (t < 3)
    return n.isZero() ? n : ht(e, 2, n, n);
  o = 1.4 * Math.sqrt(t), o = o > 16 ? 16 : o | 0, n = n.times(1 / ti(5, o)), n = ht(e, 2, n, n);
  for (var r, a = new e(5), i = new e(16), l = new e(20); o--; )
    r = n.times(n), n = n.times(a.plus(r.times(i.times(r).minus(l))));
  return n;
}
function ht(e, n, o, t, r) {
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
function ti(e, n) {
  for (var o = e; --n; ) o *= e;
  return o;
}
function hm(e, n) {
  var o, t = n.s < 0, r = Qn(e, e.precision, 1), a = r.times(0.5);
  if (n = n.abs(), n.lte(a))
    return co = t ? 4 : 1, n;
  if (o = n.divToInt(r), o.isZero())
    co = t ? 3 : 2;
  else {
    if (n = n.minus(o.times(r)), n.lte(a))
      return co = Jc(o) ? t ? 2 : 3 : t ? 4 : 1, n;
    co = Jc(o) ? t ? 1 : 4 : t ? 3 : 2;
  }
  return n.minus(r).abs();
}
function $u(e, n, o, t) {
  var r, a, i, l, s, u, c, d, f, v = e.constructor, h = o !== void 0;
  if (h ? (An(o, 1, jo), t === void 0 ? t = v.rounding : An(t, 0, 8)) : (o = v.precision, t = v.rounding), !e.isFinite())
    c = mm(e);
  else {
    for (c = ro(e), i = c.indexOf("."), h ? (r = 2, n == 16 ? o = o * 4 - 3 : n == 8 && (o = o * 3 - 2)) : r = n, i >= 0 && (c = c.replace(".", ""), f = new v(1), f.e = c.length - i, f.d = Ir(ro(f), 10, r), f.e = f.d.length), d = Ir(c, 10, r), a = s = d.length; d[--s] == 0; ) d.pop();
    if (!d[0])
      c = h ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new v(e), e.d = d, e.e = a, e = Je(e, f, o, t, 0, r), d = e.d, a = e.e, u = lm), i = d[o], l = r / 2, u = u || d[o + 1] !== void 0, u = t < 4 ? (i !== void 0 || u) && (t === 0 || t === (e.s < 0 ? 3 : 2)) : i > l || i === l && (t === 4 || u || t === 6 && d[o - 1] & 1 || t === (e.s < 0 ? 8 : 7)), d.length = o, u)
        for (; ++d[--o] > r - 1; )
          d[o] = 0, o || (++a, d.unshift(1));
      for (s = d.length; !d[s - 1]; --s) ;
      for (i = 0, c = ""; i < s; i++) c += Wl.charAt(d[i]);
      if (h) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++) c += "0";
            for (d = Ir(c, r, n), s = d.length; !d[s - 1]; --s) ;
            for (i = 1, c = "1."; i < s; i++) c += Wl.charAt(d[i]);
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
function Qc(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function pS(e) {
  return new this(e).abs();
}
function vS(e) {
  return new this(e).acos();
}
function mS(e) {
  return new this(e).acosh();
}
function hS(e, n) {
  return new this(e).plus(n);
}
function gS(e) {
  return new this(e).asin();
}
function bS(e) {
  return new this(e).asinh();
}
function yS(e) {
  return new this(e).atan();
}
function wS(e) {
  return new this(e).atanh();
}
function kS(e, n) {
  e = new this(e), n = new this(n);
  var o, t = this.precision, r = this.rounding, a = t + 4;
  return !e.s || !n.s ? o = new this(NaN) : !e.d && !n.d ? (o = Qn(this, a, 1).times(n.s > 0 ? 0.25 : 0.75), o.s = e.s) : !n.d || e.isZero() ? (o = n.s < 0 ? Qn(this, t, r) : new this(0), o.s = e.s) : !e.d || n.isZero() ? (o = Qn(this, a, 1).times(0.5), o.s = e.s) : n.s < 0 ? (this.precision = a, this.rounding = 1, o = this.atan(Je(e, n, a, 1)), n = Qn(this, a, 1), this.precision = t, this.rounding = r, o = e.s < 0 ? o.minus(n) : o.plus(n)) : o = this.atan(Je(e, n, a, 1)), o;
}
function $S(e) {
  return new this(e).cbrt();
}
function CS(e) {
  return Ce(e = new this(e), e.e + 1, 2);
}
function SS(e, n, o) {
  return new this(e).clamp(n, o);
}
function PS(e) {
  if (!e || typeof e != "object") throw Error(ni + "Object expected");
  var n, o, t, r = e.defaults === !0, a = [
    "precision",
    1,
    jo,
    "rounding",
    0,
    8,
    "toExpNeg",
    -9e15,
    0,
    "toExpPos",
    0,
    Yl,
    "maxE",
    0,
    Yl,
    "minE",
    -9e15,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < a.length; n += 3)
    if (o = a[n], r && (this[o] = Kl[o]), (t = e[o]) !== void 0)
      if (Sn(t) === t && t >= a[n + 1] && t <= a[n + 2]) this[o] = t;
      else throw Error(Ro + o + ": " + t);
  if (o = "crypto", r && (this[o] = Kl[o]), (t = e[o]) !== void 0)
    if (t === !0 || t === !1 || t === 0 || t === 1)
      if (t)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[o] = !0;
        else
          throw Error(um);
      else
        this[o] = !1;
    else
      throw Error(Ro + o + ": " + t);
  return this;
}
function OS(e) {
  return new this(e).cos();
}
function zS(e) {
  return new this(e).cosh();
}
function gm(e) {
  var n, o, t;
  function r(a) {
    var i, l, s, u = this;
    if (!(u instanceof r)) return new r(a);
    if (u.constructor = r, _c(a)) {
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
      return Gl(u, a.toString());
    } else if (s !== "string")
      throw Error(Ro + a);
    return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (l === 43 && (a = a.slice(1)), u.s = 1), dm.test(a) ? Gl(u, a) : dS(u, a);
  }
  if (r.prototype = x, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.EUCLID = 9, r.config = r.set = PS, r.clone = gm, r.isDecimal = _c, r.abs = pS, r.acos = vS, r.acosh = mS, r.add = hS, r.asin = gS, r.asinh = bS, r.atan = yS, r.atanh = wS, r.atan2 = kS, r.cbrt = $S, r.ceil = CS, r.clamp = SS, r.cos = OS, r.cosh = zS, r.div = ES, r.exp = TS, r.floor = BS, r.hypot = DS, r.ln = IS, r.log = AS, r.log10 = NS, r.log2 = MS, r.max = VS, r.min = RS, r.mod = LS, r.mul = FS, r.pow = US, r.random = HS, r.round = jS, r.sign = YS, r.sin = WS, r.sinh = KS, r.sqrt = qS, r.sub = XS, r.sum = GS, r.tan = ZS, r.tanh = JS, r.trunc = QS, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (t = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < t.length; ) e.hasOwnProperty(o = t[n++]) || (e[o] = this[o]);
  return r.config(e), r;
}
function ES(e, n) {
  return new this(e).div(n);
}
function TS(e) {
  return new this(e).exp();
}
function BS(e) {
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
function _c(e) {
  return e instanceof Eo || e && e.toStringTag === cm || !1;
}
function IS(e) {
  return new this(e).ln();
}
function AS(e, n) {
  return new this(e).log(n);
}
function MS(e) {
  return new this(e).log(2);
}
function NS(e) {
  return new this(e).log(10);
}
function VS() {
  return vm(this, arguments, "lt");
}
function RS() {
  return vm(this, arguments, "gt");
}
function LS(e, n) {
  return new this(e).mod(n);
}
function FS(e, n) {
  return new this(e).mul(n);
}
function US(e, n) {
  return new this(e).pow(n);
}
function HS(e) {
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
      throw Error(um);
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
function jS(e) {
  return Ce(e = new this(e), e.e + 1, this.rounding);
}
function YS(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function WS(e) {
  return new this(e).sin();
}
function KS(e) {
  return new this(e).sinh();
}
function qS(e) {
  return new this(e).sqrt();
}
function XS(e, n) {
  return new this(e).sub(n);
}
function GS() {
  var e = 0, n = arguments, o = new this(n[e]);
  for (Ee = !1; o.s && ++e < n.length; ) o = o.plus(n[e]);
  return Ee = !0, Ce(o, this.precision, this.rounding);
}
function ZS(e) {
  return new this(e).tan();
}
function JS(e) {
  return new this(e).tanh();
}
function QS(e) {
  return Ce(e = new this(e), e.e + 1, 1);
}
x[Symbol.for("nodejs.util.inspect.custom")] = x.toString;
x[Symbol.toStringTag] = "Decimal";
var Eo = x.constructor = gm(Kl);
ea = new Eo(ea);
na = new Eo(na);
const bm = {
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
}, xc = 100, ed = 600, { name: _S, n: xS, classes: e6 } = ne("counter"), n6 = ["inputmode", "readonly", "disabled"];
function o6(e, n) {
  const o = _("var-icon"), t = _("var-button"), r = _("var-form-details");
  return m(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      L(
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
            default: ce(() => [
              X(o, { name: "minus" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]),
          Ve(L("input", {
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
          }, null, 46, n6), [
            [Jg, e.inputValue]
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
            default: ce(() => [
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
const ym = ee({
  name: _S,
  components: {
    VarButton: Bn,
    VarIcon: Ge,
    VarFormDetails: Tn
  },
  directives: { Ripple: tn },
  inheritAttrs: !1,
  props: bm,
  setup(e) {
    const n = w(""), { bindForm: o, form: t } = Hn(), {
      errorMessage: r,
      validateWithTrigger: a,
      validate: i,
      // expose
      resetValidation: l
    } = Un(), { readonly: s, disabled: u } = t ?? {}, c = B(() => {
      const { max: z, modelValue: J } = e;
      return z != null && W(J) >= W(z);
    }), d = B(() => {
      const { min: z, modelValue: J } = e;
      return z != null && W(J) <= W(z);
    });
    let f, v, h, g;
    C(o, {
      reset: b,
      validate: $,
      resetValidation: l
    }), fe(
      () => e.modelValue,
      (z) => {
        N(S(String(z))), C(e.onChange, W(z));
      }
    ), N(S(String(e.modelValue)));
    function $() {
      return i(e.rules, e.modelValue);
    }
    function k(z) {
      He(() => {
        const { validateTrigger: J, rules: q, modelValue: oe } = e;
        a(J, z, q, oe);
      });
    }
    function b() {
      const { min: z } = e;
      C(e["onUpdate:modelValue"], z != null ? W(z) : 0), l();
    }
    function S(z) {
      const { decimalLength: J, max: q, min: oe } = e;
      let ye = W(z);
      return q != null && ye > W(q) && (ye = W(q)), oe != null && ye < W(oe) && (ye = W(oe)), z = String(ye), J != null && (z = ye.toFixed(W(J))), z;
    }
    function T(z) {
      const { lazyChange: J, onBeforeChange: q } = e, { value: oe } = z.target, ye = S(oe);
      J ? C(q, W(ye), H) : N(ye), k("onInputChange");
    }
    function O() {
      const {
        disabled: z,
        readonly: J,
        disableDecrement: q,
        decrementButton: oe,
        lazyChange: ye,
        step: Te,
        modelValue: j,
        onDecrement: Q,
        onBeforeChange: re
      } = e;
      if (u != null && u.value || s != null && s.value || z || J || q || !oe || d.value)
        return;
      const ve = new Eo(W(j)).minus(new Eo(W(Te))).toString(), I = S(ve), K = W(I);
      C(Q, K), ye ? C(re, K, H) : (N(I), k("onDecrement"));
    }
    function D() {
      const {
        disabled: z,
        readonly: J,
        disableIncrement: q,
        incrementButton: oe,
        lazyChange: ye,
        step: Te,
        modelValue: j,
        onIncrement: Q,
        onBeforeChange: re
      } = e;
      if (u != null && u.value || s != null && s.value || z || J || q || !oe || c.value)
        return;
      const ve = new Eo(W(j)).plus(new Eo(W(Te))).toString(), I = S(ve), K = W(I);
      C(Q, K), ye ? C(re, K, H) : (N(I), k("onIncrement"));
    }
    function A() {
      const { press: z, lazyChange: J } = e;
      !z || J || (g = window.setTimeout(() => {
        M();
      }, ed));
    }
    function V() {
      const { press: z, lazyChange: J } = e;
      !z || J || (h = window.setTimeout(() => {
        E();
      }, ed));
    }
    function R() {
      v && clearTimeout(v), g && clearTimeout(g);
    }
    function Y() {
      f && clearTimeout(f), h && clearTimeout(h);
    }
    function E() {
      f = window.setTimeout(() => {
        D(), E();
      }, xc);
    }
    function M() {
      v = window.setTimeout(() => {
        O(), M();
      }, xc);
    }
    function N(z) {
      n.value = z;
      const J = W(z);
      C(e["onUpdate:modelValue"], J);
    }
    function H(z) {
      N(S(String(z))), k("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: r,
      formDisabled: u,
      formReadonly: s,
      isMax: c,
      isMin: d,
      n: xS,
      classes: e6,
      formatElevation: dn,
      validate: $,
      reset: b,
      resetValidation: l,
      handleChange: T,
      decrement: O,
      increment: D,
      pressDecrement: A,
      pressIncrement: V,
      releaseDecrement: R,
      releaseIncrement: Y,
      toSizeUnit: Oe,
      toNumber: W
    };
  }
});
ym.render = o6;
var ri = ym;
ae(ri);
le(ri, bm);
const QB = ri;
var Zl = ri, wm = 60, km = wm * 60, $m = km * 24, t6 = $m * 7, gt = 1e3, tl = wm * gt, nd = km * gt, r6 = $m * gt, a6 = t6 * gt, Cu = "millisecond", tt = "second", rt = "minute", at = "hour", $o = "day", Ar = "week", Jn = "month", Cm = "quarter", Co = "year", it = "date", i6 = "YYYY-MM-DDTHH:mm:ssZ", od = "Invalid Date", l6 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, s6 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const u6 = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var Jl = function(n, o, t) {
  var r = String(n);
  return !r || r.length >= o ? n : "" + Array(o + 1 - r.length).join(t) + n;
}, c6 = function(n) {
  var o = -n.utcOffset(), t = Math.abs(o), r = Math.floor(t / 60), a = t % 60;
  return (o <= 0 ? "+" : "-") + Jl(r, 2, "0") + ":" + Jl(a, 2, "0");
}, d6 = function e(n, o) {
  if (n.date() < o.date()) return -e(o, n);
  var t = (o.year() - n.year()) * 12 + (o.month() - n.month()), r = n.clone().add(t, Jn), a = o - r < 0, i = n.clone().add(t + (a ? -1 : 1), Jn);
  return +(-(t + (o - r) / (a ? r - i : i - r)) || 0);
}, f6 = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, p6 = function(n) {
  var o = {
    M: Jn,
    y: Co,
    w: Ar,
    d: $o,
    D: it,
    h: at,
    m: rt,
    s: tt,
    ms: Cu,
    Q: Cm
  };
  return o[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, v6 = function(n) {
  return n === void 0;
};
const m6 = {
  s: Jl,
  z: c6,
  m: d6,
  a: f6,
  p: p6,
  u: v6
};
var It = "en", qo = {};
qo[It] = u6;
var Su = function(n) {
  return n instanceof ai;
}, ta = function e(n, o, t) {
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
}, ue = function(n, o) {
  if (Su(n))
    return n.clone();
  var t = typeof o == "object" ? o : {};
  return t.date = n, t.args = arguments, new ai(t);
}, h6 = function(n, o) {
  return ue(n, {
    locale: o.$L,
    utc: o.$u,
    x: o.$x,
    $offset: o.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Ze = m6;
Ze.l = ta;
Ze.i = Su;
Ze.w = h6;
var g6 = function(n) {
  var o = n.date, t = n.utc;
  if (o === null) return /* @__PURE__ */ new Date(NaN);
  if (Ze.u(o)) return /* @__PURE__ */ new Date();
  if (o instanceof Date) return new Date(o);
  if (typeof o == "string" && !/Z$/i.test(o)) {
    var r = o.match(l6);
    if (r) {
      var a = r[2] - 1 || 0, i = (r[7] || "0").substring(0, 3);
      return t ? new Date(Date.UTC(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)) : new Date(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i);
    }
  }
  return new Date(o);
}, ai = /* @__PURE__ */ function() {
  function e(o) {
    this.$L = ta(o.locale, null, !0), this.parse(o);
  }
  var n = e.prototype;
  return n.parse = function(t) {
    this.$d = g6(t), this.$x = t.x || {}, this.init();
  }, n.init = function() {
    var t = this.$d;
    this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
  }, n.$utils = function() {
    return Ze;
  }, n.isValid = function() {
    return this.$d.toString() !== od;
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
    var a = this, i = Ze.u(r) ? !0 : r, l = Ze.p(t), s = function($, k) {
      var b = Ze.w(a.$u ? Date.UTC(a.$y, k, $) : new Date(a.$y, k, $), a);
      return i ? b : b.endOf($o);
    }, u = function($, k) {
      var b = [0, 0, 0, 0], S = [23, 59, 59, 999];
      return Ze.w(a.toDate()[$].apply(
        // eslint-disable-line prefer-spread
        a.toDate("s"),
        (i ? b : S).slice(k)
      ), a);
    }, c = this.$W, d = this.$M, f = this.$D, v = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case Co:
        return i ? s(1, 0) : s(31, 11);
      case Jn:
        return i ? s(1, d) : s(0, d + 1);
      case Ar: {
        var h = this.$locale().weekStart || 0, g = (c < h ? c + 7 : c) - h;
        return s(i ? f - g : f + (6 - g), d);
      }
      case $o:
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
    var a, i = Ze.p(t), l = "set" + (this.$u ? "UTC" : ""), s = (a = {}, a[$o] = l + "Date", a[it] = l + "Date", a[Jn] = l + "Month", a[Co] = l + "FullYear", a[at] = l + "Hours", a[rt] = l + "Minutes", a[tt] = l + "Seconds", a[Cu] = l + "Milliseconds", a)[i], u = i === $o ? this.$D + (r - this.$W) : r;
    if (i === Jn || i === Co) {
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
      var v = ue(a);
      return Ze.w(v.date(v.date() + Math.round(f * t)), a);
    };
    if (l === Jn)
      return this.set(Jn, this.$M + t);
    if (l === Co)
      return this.set(Co, this.$y + t);
    if (l === $o)
      return s(1);
    if (l === Ar)
      return s(7);
    var u = (i = {}, i[rt] = tl, i[at] = nd, i[tt] = gt, i)[l] || 1, c = this.$d.getTime() + t * u;
    return Ze.w(c, this);
  }, n.subtract = function(t, r) {
    return this.add(t * -1, r);
  }, n.format = function(t) {
    var r = this, a = this.$locale();
    if (!this.isValid()) return a.invalidDate || od;
    var i = t || i6, l = Ze.z(this), s = this.$H, u = this.$m, c = this.$M, d = a.weekdays, f = a.months, v = a.meridiem, h = function(b, S, T, O) {
      return b && (b[S] || b(r, i)) || T[S].slice(0, O);
    }, g = function(b) {
      return Ze.s(s % 12 || 12, b, "0");
    }, y = v || function(k, b, S) {
      var T = k < 12 ? "AM" : "PM";
      return S ? T.toLowerCase() : T;
    }, $ = {
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
      h: g(1),
      hh: g(2),
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
    return i.replace(s6, function(k, b) {
      return b || $[k] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(t, r, a) {
    var i, l = Ze.p(r), s = ue(t), u = (s.utcOffset() - this.utcOffset()) * tl, c = this - s, d = Ze.m(this, s);
    return d = (i = {}, i[Co] = d / 12, i[Jn] = d, i[Cm] = d / 3, i[Ar] = (c - u) / a6, i[$o] = (c - u) / r6, i[at] = c / nd, i[rt] = c / tl, i[tt] = c / gt, i)[l] || c, a ? d : Ze.a(d);
  }, n.daysInMonth = function() {
    return this.endOf(Jn).$D;
  }, n.$locale = function() {
    return qo[this.$L];
  }, n.locale = function(t, r) {
    if (!t) return this.$L;
    var a = this.clone(), i = ta(t, r, !0);
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
}(), Sm = ai.prototype;
ue.prototype = Sm;
[["$ms", Cu], ["$s", tt], ["$m", rt], ["$H", at], ["$W", $o], ["$M", Jn], ["$y", Co], ["$D", it]].forEach(function(e) {
  Sm[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ue.extend = function(e, n) {
  return e.$i || (e(n, ai, ue), e.$i = !0), ue;
};
ue.locale = ta;
ue.isDayjs = Su;
ue.unix = function(e) {
  return ue(e * 1e3);
};
ue.en = qo[It];
ue.Ls = qo;
ue.p = {};
const Mr = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"], Tt = ["0", "1", "2", "3", "4", "5", "6"], Pm = {
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
}, Om = function(e, n) {
  n.prototype.isSameOrAfter = function(o, t) {
    return this.isSame(o, t) || this.isAfter(o, t);
  };
}, zm = function(e, n) {
  n.prototype.isSameOrBefore = function(o, t) {
    return this.isSame(o, t) || this.isBefore(o, t);
  };
}, { n: b6 } = ne("date-picker-header");
function y6(e, n) {
  const o = _("var-icon"), t = _("var-button");
  return m(), P(
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
        default: ce(() => [
          X(o, { name: "chevron-left" })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["class", "disabled"]),
      L(
        "div",
        {
          class: p(e.n("value")),
          onClick: n[1] || (n[1] = (r) => e.$emit("check-panel"))
        },
        [
          X(_e, {
            name: `var-date-picker${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: ce(() => [
              (m(), P(
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
      X(t, {
        class: p(e.n("arrow")),
        "var-date-picker-header-cover": "",
        round: "",
        text: "",
        disabled: e.disabled.right,
        onClick: n[2] || (n[2] = (r) => e.checkDate("next"))
      }, {
        default: ce(() => [
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
const Em = ee({
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
      n: b6,
      reverse: o,
      showDate: a,
      checkDate: i
    };
  }
});
Em.render = y6;
var Pu = Em, w6 = Object.defineProperty, td = Object.getOwnPropertySymbols, k6 = Object.prototype.hasOwnProperty, $6 = Object.prototype.propertyIsEnumerable, rd = (e, n, o) => n in e ? w6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, C6 = (e, n) => {
  for (var o in n || (n = {}))
    k6.call(n, o) && rd(e, o, n[o]);
  if (td)
    for (var o of td(n))
      $6.call(n, o) && rd(e, o, n[o]);
  return e;
};
ue.extend(zm);
ue.extend(Om);
const { n: et, classes: S6 } = ne("day-picker"), { n: yr } = ne("date-picker");
function P6(e, n) {
  const o = _("panel-header"), t = _("var-button");
  return m(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      L(
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
          X(_e, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: ce(() => [
              (m(), P("div", { key: e.panelKey }, [
                L(
                  "ul",
                  {
                    class: p(e.n("head"))
                  },
                  [
                    (m(!0), P(
                      Ae,
                      null,
                      qe(e.sortWeekList, (r) => (m(), P(
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
                L(
                  "ul",
                  {
                    class: p(e.n("body"))
                  },
                  [
                    (m(!0), P(
                      Ae,
                      null,
                      qe(e.days, (r, a) => (m(), P("li", { key: a }, [
                        X(t, je({
                          type: "primary",
                          "var-day-picker-cover": "",
                          round: "",
                          ripple: !1,
                          elevation: e.componentProps.buttonElevation,
                          ref_for: !0
                        }, C6({}, e.buttonProps(r)), {
                          onClick: (i) => e.chooseDay(r, i)
                        }), {
                          default: ce(() => [
                            De(
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
const Tm = ee({
  name: "DayPickerPanel",
  components: {
    VarButton: Bn,
    PanelHeader: Pu
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
    const [o, t, r] = e.current.split("-"), a = w([]), i = w(!1), l = w(0), s = w(null), u = xe({
      left: !1,
      right: !1
    }), { t: c } = so(), d = B(
      () => e.preview.previewYear === o && e.preview.previewMonth === t
    ), f = B(
      () => e.choose.chooseYear === e.preview.previewYear && e.choose.chooseMonth === e.preview.previewMonth
    ), v = B(() => {
      const A = Tt.findIndex((V) => V === e.componentProps.firstDayOfWeek);
      return A === -1 || A === 0 ? Tt : [...Tt.slice(A), ...Tt.slice(0, A)];
    }), h = (A) => {
      var V, R;
      return (R = (V = (c || an)("datePickerWeekDict")) == null ? void 0 : V[A].abbr) != null ? R : "";
    }, g = (A) => A > 0 ? A : "", y = () => {
      const {
        preview: { previewMonth: A, previewYear: V }
      } = e, R = ue(`${V}-${A}`).daysInMonth(), Y = ue(`${V}-${A}-01`).day(), E = v.value.findIndex((M) => M === `${Y}`);
      a.value = [...Array(E).fill(-1), ...Array.from(Array(R + 1).keys())].filter((M) => M);
    }, $ = () => {
      const {
        preview: { previewYear: A, previewMonth: V },
        componentProps: { max: R, min: Y }
      } = e;
      if (R) {
        const E = `${A}-${W(V) + 1}`;
        u.right = !ue(E).isSameOrBefore(ue(R), "month");
      }
      if (Y) {
        const E = `${A}-${W(V) - 1}`;
        u.left = !ue(E).isSameOrAfter(ue(Y), "month");
      }
    }, k = (A) => {
      const {
        preview: { previewYear: V, previewMonth: R },
        componentProps: { min: Y, max: E }
      } = e;
      let M = !0, N = !0;
      const H = `${V}-${R}-${A}`;
      return E && (M = ue(H).isSameOrBefore(ue(E), "day")), Y && (N = ue(H).isSameOrAfter(ue(Y), "day")), M && N;
    }, b = (A) => {
      const {
        choose: { chooseDays: V, chooseRangeDay: R },
        componentProps: { range: Y }
      } = e;
      if (Y) {
        if (!R.length)
          return !1;
        const E = ue(A).isSameOrBefore(ue(R[1]), "day"), M = ue(A).isSameOrAfter(ue(R[0]), "day");
        return E && M;
      }
      return V.includes(A);
    }, S = (A) => {
      if (A < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: et("button"),
          disabled: !0
        };
      const {
        choose: { chooseDay: V },
        preview: { previewYear: R, previewMonth: Y },
        componentProps: { allowedDates: E, color: M, multiple: N, range: H }
      } = e, z = `${R}-${Y}-${A}`, J = () => H || N ? b(z) : W(V) === A && f.value, oe = k(A) ? E ? !E(z) : !1 : !0, ye = () => oe ? !0 : H || N ? !b(z) : !f.value || W(V) !== A, Te = () => d.value && W(r) === A && e.componentProps.showCurrent ? (H || N || f.value) && oe ? !0 : H || N ? !b(z) : f.value ? V !== r : !0 : !1, j = () => oe ? "" : Te() ? M ?? "" : J() ? "" : `${yr()}-color-cover`, Q = j().startsWith(yr());
      return {
        text: ye(),
        outline: Te(),
        textColor: Q ? "" : j(),
        [`${yr()}-color-cover`]: Q,
        class: S6(et("button"), et("button--usable"), [oe, et("button--disabled")]),
        disabled: oe
      };
    }, T = (A) => {
      i.value = A === "prev", l.value += A === "prev" ? -1 : 1, n("check-preview", "month", A);
    }, O = (A, V) => {
      V.currentTarget.classList.contains(et("button--disabled")) || n("choose-day", A);
    }, D = (A) => {
      s.value.checkDate(A);
    };
    return yn(() => {
      y(), $();
    }), fe(
      () => e.preview,
      () => {
        y(), $();
      }
    ), fe(() => [e.componentProps.max, e.componentProps.min], $), {
      n: et,
      nDate: yr,
      days: a,
      reverse: i,
      headerEl: s,
      panelKey: l,
      sortWeekList: v,
      panelBtnDisabled: u,
      forwardRef: D,
      filterDay: g,
      getDayAbbr: h,
      checkDate: T,
      chooseDay: O,
      buttonProps: S
    };
  }
});
Tm.render = P6;
var O6 = Tm, z6 = Object.defineProperty, ad = Object.getOwnPropertySymbols, E6 = Object.prototype.hasOwnProperty, T6 = Object.prototype.propertyIsEnumerable, id = (e, n, o) => n in e ? z6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, B6 = (e, n) => {
  for (var o in n || (n = {}))
    E6.call(n, o) && id(e, o, n[o]);
  if (ad)
    for (var o of ad(n))
      T6.call(n, o) && id(e, o, n[o]);
  return e;
};
ue.extend(zm);
ue.extend(Om);
const { n: wr, classes: D6 } = ne("month-picker"), { n: kr } = ne("date-picker");
function I6(e, n) {
  const o = _("panel-header"), t = _("var-button");
  return m(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      L(
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
          X(_e, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: ce(() => [
              (m(), P("ul", { key: e.panelKey }, [
                (m(!0), P(
                  Ae,
                  null,
                  qe(e.MONTH_LIST, (r) => (m(), P("li", { key: r }, [
                    X(t, je({
                      type: "primary",
                      "var-month-picker-cover": "",
                      ripple: !1,
                      elevation: e.componentProps.buttonElevation,
                      ref_for: !0
                    }, B6({}, e.buttonProps(r)), {
                      onClick: (a) => e.chooseMonth(r, a)
                    }), {
                      default: ce(() => [
                        De(
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
const Bm = ee({
  name: "MonthPickerPanel",
  components: {
    VarButton: Bn,
    PanelHeader: Pu
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
    const [o, t] = e.current.split("-"), r = w(!1), a = w(0), i = w(null), l = xe({
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
      const A = `${b}-${k}`;
      return T && (O = ue(A).isSameOrBefore(ue(T), "month")), S && (D = ue(A).isSameOrAfter(ue(S), "month")), O && D;
    }, v = (k) => {
      const {
        choose: { chooseMonths: b, chooseDays: S, chooseRangeMonth: T },
        componentProps: { type: O, range: D }
      } = e;
      if (D) {
        if (!T.length)
          return !1;
        const A = ue(k).isSameOrBefore(ue(T[1]), "month"), V = ue(k).isSameOrAfter(ue(T[0]), "month");
        return A && V;
      }
      return O === "month" ? b.includes(k) : S.some((A) => A.includes(k));
    }, h = (k) => {
      const {
        choose: { chooseMonth: b },
        preview: { previewYear: S },
        componentProps: { allowedDates: T, color: O, multiple: D, range: A }
      } = e, V = `${S}-${k}`, R = () => A || D ? v(V) : b === k && u.value, E = f(k) ? T ? !T(V) : !1 : !0, M = () => E ? !0 : A || D ? !v(V) : !u.value || b !== k, N = () => c.value && t === k && e.componentProps.showCurrent ? (A || D || u.value) && E ? !0 : A || D ? !v(V) : u.value ? b !== t : !0 : !1, H = () => E ? "" : N() ? O ?? "" : R() ? "" : `${kr()}-color-cover`, z = H().startsWith(kr());
      return {
        outline: N(),
        text: M(),
        color: M() ? "" : O,
        textColor: z ? "" : H(),
        [`${kr()}-color-cover`]: z,
        class: D6(wr("button"), [E, wr("button--disabled")]),
        disabled: E
      };
    }, g = (k, b) => {
      b.currentTarget.classList.contains(wr("button--disabled")) || n("choose-month", k);
    }, y = (k) => {
      r.value = k === "prev", a.value += k === "prev" ? -1 : 1, n("check-preview", "year", k);
    }, $ = (k) => {
      i.value.checkDate(k);
    };
    return fe(
      () => [e.preview.previewYear, e.componentProps.max, e.componentProps.min],
      ([k, b, S]) => {
        b && (l.right = !ue(`${W(k) + 1}`).isSameOrBefore(ue(b), "year")), S && (l.left = !ue(`${W(k) - 1}`).isSameOrAfter(ue(S), "year"));
      },
      { immediate: !0 }
    ), {
      n: wr,
      nDate: kr,
      t: an,
      MONTH_LIST: Mr,
      headerEl: i,
      reverse: r,
      panelKey: a,
      panelBtnDisabled: l,
      forwardRef: $,
      buttonProps: h,
      getMonthAbbr: d,
      chooseMonth: g,
      checkDate: y
    };
  }
});
Bm.render = I6;
var A6 = Bm;
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
var ld = (e, n, o) => new Promise((t, r) => {
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
const { name: M6, n: N6, classes: V6 } = ne("sticky");
function R6(e, n) {
  return m(), P(
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
      L(
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
          U(e.$slots, "default")
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
  name: M6,
  props: At,
  setup(e) {
    const n = w(null), o = w(null), t = w(!1), r = w("0px"), a = w("0px"), i = w("auto"), l = w("auto"), s = w("auto"), u = w("auto"), c = B(() => !e.disabled && e.cssMode), d = B(() => !e.disabled && !e.cssMode && t.value), f = B(() => en(e.offsetTop));
    let v;
    fe(() => e.disabled, k), yn(() => ld(this, null, function* () {
      yield bn(), g(), y();
    })), rr($), lo(k), We(() => window, "scroll", y);
    function h() {
      const { cssMode: b, disabled: S } = e;
      if (S)
        return;
      let T = 0;
      if (v && v !== window) {
        const { top: Y } = nn(v);
        T = Y;
      }
      const O = o.value, D = n.value, { top: A, left: V } = nn(D), R = A - T;
      return R <= f.value ? (b || (i.value = `${D.offsetWidth}px`, l.value = `${D.offsetHeight}px`, r.value = `${T + f.value}px`, a.value = `${V}px`, s.value = `${O.offsetWidth}px`, u.value = `${O.offsetHeight}px`, t.value = !0), {
        offsetTop: f.value,
        isFixed: !0
      }) : (t.value = !1, {
        offsetTop: R,
        isFixed: !1
      });
    }
    function g() {
      v = No(n.value), v !== window && v.addEventListener("scroll", y);
    }
    function y() {
      const b = h();
      b && C(e.onScroll, b.offsetTop, b.isFixed);
    }
    function $() {
      !v || v === window || v.removeEventListener("scroll", y);
    }
    function k() {
      return ld(this, null, function* () {
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
      n: N6,
      classes: V6,
      resize: k,
      toNumber: W
    };
  }
});
Dm.render = R6;
var ii = Dm;
ae(ii);
le(ii, At);
const _B = ii;
var bt = ii, L6 = Object.defineProperty, sd = Object.getOwnPropertySymbols, F6 = Object.prototype.hasOwnProperty, U6 = Object.prototype.propertyIsEnumerable, ud = (e, n, o) => n in e ? L6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, H6 = (e, n) => {
  for (var o in n || (n = {}))
    F6.call(n, o) && ud(e, o, n[o]);
  if (sd)
    for (var o of sd(n))
      U6.call(n, o) && ud(e, o, n[o]);
  return e;
};
const { n: $r, classes: cd } = ne("year-picker"), { n: Cr } = ne("date-picker");
function j6(e, n) {
  const o = _("panel-header"), t = _("var-sticky"), r = _("var-button");
  return m(), P("div", null, [
    X(t, { "css-mode": "" }, {
      default: ce(() => [
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
    X(_e, {
      name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
    }, {
      default: ce(() => [
        (m(), P(
          "ul",
          {
            ref: "panel",
            key: e.panelKey,
            class: p(e.n())
          },
          [
            (m(!0), P(
              Ae,
              null,
              qe(e.yearList, (a) => (m(), P("li", { key: a }, [
                X(r, je({
                  type: "primary",
                  "var-year-picker-cover": "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation,
                  ref_for: !0
                }, H6({}, e.buttonProps(`${a}`)), {
                  onClick: (i) => e.chooseYear(a, i)
                }), {
                  default: ce(() => [
                    De(
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
const Im = ee({
  name: "YearPickerPanel",
  components: {
    VarButton: Bn,
    VarSticky: bt,
    PanelHeader: Pu
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
    const [o] = e.current.split("-"), t = w(), r = w(null), a = w(!1), i = w(0), l = w(0), s = xe({
      left: !1,
      right: !1
    }), u = B(() => {
      if (!e.preview)
        return [];
      const $ = Math.floor(W(e.preview) / 100 + l.value) * 100;
      return Array.from(Array(100), (k, b) => Math.max(0, $) + b);
    }), c = ($) => {
      const {
        choose: { chooseMonths: k, chooseDays: b, chooseYears: S, chooseRangeYear: T },
        componentProps: { type: O, range: D }
      } = e;
      if (D) {
        if (!T.length)
          return !1;
        const A = ue($).isSameOrBefore(ue(T[1]), "year"), V = ue($).isSameOrAfter(ue(T[0]), "year");
        return A && V;
      }
      return O === "year" ? S.includes($) : O === "month" ? k.some((A) => A.includes($)) : b.some((A) => A.includes($));
    }, d = ($) => {
      const {
        componentProps: { min: k, max: b }
      } = e, S = b ? ue($).isSameOrBefore(ue(b), "year") : !0, T = k ? ue($).isSameOrAfter(ue(k), "year") : !0;
      return S && T;
    }, f = ($) => {
      const {
        choose: { chooseYear: k },
        componentProps: { allowedDates: b, color: S, multiple: T, range: O }
      } = e, D = () => O || T ? c($) : k === $, V = d($) ? b ? !b($) : !1 : !0, R = () => V ? !0 : O || T ? !c($) : k !== $, Y = () => o === $ && e.componentProps.showCurrent ? (O || T) && V ? !0 : O || T ? !c($) : k !== o : !1, E = () => V ? "" : Y() ? S ?? "" : D() ? "" : `${Cr()}-color-cover`, M = E().startsWith(Cr());
      return {
        outline: Y(),
        text: R(),
        color: R() ? "" : S,
        textColor: M ? "" : E(),
        [`${Cr()}-color-cover`]: M,
        class: cd($r("button"), [V, $r("button--disabled")]),
        disabled: V
      };
    }, v = ($, k) => {
      k.currentTarget.classList.contains($r("button--disabled")) || n("choose-year", $);
    }, h = () => {
      var $;
      const k = ($ = t.value.querySelector(".var-button--primary")) != null ? $ : t.value.querySelector(".var-button--outline");
      k == null || k.scrollIntoView({
        block: "center"
      });
    }, g = ($) => {
      const k = $ === "prev";
      a.value = k, i.value += k ? -1 : 1, l.value += k ? -1 : 1;
    }, y = ($) => {
      r.value.checkDate($);
    };
    return yn(h), fe(
      () => e.preview,
      () => {
        l.value = 0;
      }
    ), fe(
      () => [u.value, e.componentProps.max, e.componentProps.min],
      ($) => {
        const [k, b, S] = $;
        b && (s.right = !ue(`${W(k[k.length - 1])}`).isSameOrBefore(ue(b), "year")), S && (s.left = !ue(`${W(k[0])}`).isSameOrAfter(ue(S), "year")), W(k[0] <= 0) && (s.left = !1);
      },
      {
        immediate: !0
      }
    ), {
      n: $r,
      classes: cd,
      buttonProps: f,
      panel: t,
      headerEl: r,
      yearList: u,
      reverse: a,
      panelKey: i,
      panelBtnDisabled: s,
      nDate: Cr,
      checkDate: g,
      chooseYear: v,
      forwardRef: y,
      toNumber: W
    };
  }
});
Im.render = j6;
var Y6 = Im, W6 = (e, n, o) => new Promise((t, r) => {
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
const { name: K6, n: q6, classes: X6 } = ne("date-picker");
function G6(e, n) {
  var o;
  const t = _("year-picker-panel"), r = _("month-picker-panel"), a = _("day-picker-panel");
  return m(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [
      L(
        "div",
        {
          class: p(e.n("title")),
          style: Z({ background: e.titleColor || e.color })
        },
        [
          L(
            "div",
            {
              class: p(e.n("title-select"))
            },
            [
              L(
                "div",
                {
                  class: p(e.n("title-hint"))
                },
                se((o = e.hint) != null ? o : (e.pt ? e.pt : e.t)("datePickerHint")),
                3
                /* TEXT, CLASS */
              ),
              e.type !== "year" ? (m(), P(
                "div",
                {
                  key: 0,
                  class: p(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
                  onClick: n[0] || (n[0] = (i) => e.clickEl("year"))
                },
                [
                  U(e.$slots, "year", { year: e.chooseYear }, () => [
                    De(
                      se(e.chooseYear),
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
          L(
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
              X(_e, {
                name: e.multiple ? "" : `${e.n()}${e.reverse ? "-reverse" : ""}-translatey`
              }, {
                default: ce(() => [
                  e.type === "year" ? (m(), P("div", {
                    key: `${e.chooseYear}`
                  }, [
                    e.range ? U(e.$slots, "range", {
                      key: 0,
                      choose: e.getChoose.chooseRangeYear
                    }, () => [
                      De(
                        se(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? U(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseYears
                    }, () => [
                      De(
                        se(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ]) : U(e.$slots, "year", {
                      key: 2,
                      year: e.chooseYear
                    }, () => [
                      De(
                        se(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : e.type === "month" ? (m(), P("div", {
                    key: `${e.chooseYear}${e.chooseMonth}`
                  }, [
                    e.range ? U(e.$slots, "range", {
                      key: 0,
                      choose: e.getChoose.chooseRangeMonth
                    }, () => [
                      De(
                        se(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? U(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseMonths
                    }, () => [
                      De(
                        se(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ]) : U(e.$slots, "month", {
                      key: 2,
                      month: e.chooseMonth,
                      year: e.chooseYear
                    }, () => [
                      De(
                        se(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : (m(), P("div", {
                    key: `${e.chooseYear}${e.chooseMonth}${e.chooseDay}`
                  }, [
                    e.range ? U(e.$slots, "range", {
                      key: 0,
                      choose: e.formatRange
                    }, () => [
                      De(
                        se(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? U(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseDays
                    }, () => [
                      De(
                        se(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ]) : U(e.$slots, "date", To(je({ key: 2 }, e.slotProps)), () => [
                      De(
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
      L(
        "div",
        {
          class: p(e.n("body")),
          onTouchstart: n[2] || (n[2] = (...i) => e.handleTouchstart && e.handleTouchstart(...i)),
          onTouchmove: n[3] || (n[3] = (...i) => e.handleTouchmove && e.handleTouchmove(...i)),
          onTouchend: n[4] || (n[4] = (...i) => e.handleTouchend && e.handleTouchend(...i))
        },
        [
          X(_e, {
            name: `${e.n()}-panel-fade`
          }, {
            default: ce(() => [
              e.getPanelType === "year" ? (m(), we(t, {
                key: 0,
                ref: "yearPanelEl",
                choose: e.getChoose,
                current: e.currentDate,
                "component-props": e.componentProps,
                preview: e.previewYear,
                onChooseYear: e.getChooseYear
              }, null, 8, ["choose", "current", "component-props", "preview", "onChooseYear"])) : e.getPanelType === "month" ? (m(), we(r, {
                key: 1,
                ref: "monthPanelEl",
                current: e.currentDate,
                choose: e.getChoose,
                preview: e.getPreview,
                "click-year": () => e.clickEl("year"),
                "component-props": e.componentProps,
                onChooseMonth: e.getChooseMonth,
                onCheckPreview: e.checkPreview
              }, null, 8, ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"])) : e.getPanelType === "date" ? (m(), we(a, {
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
      e.$slots.actions ? (m(), P(
        "div",
        {
          key: 0,
          class: p(e.n("actions"))
        },
        [
          U(e.$slots, "actions")
        ],
        2
        /* CLASS */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Am = ee({
  name: K6,
  components: {
    MonthPickerPanel: A6,
    YearPickerPanel: Y6,
    DayPickerPanel: O6
  },
  props: Pm,
  setup(e) {
    const { t: n } = so(), o = ue().format("YYYY-MM-D"), [t, r] = o.split("-"), a = Mr.find((ie) => ie === r), i = w(!1), l = w(!1), s = w(!0), u = w(), c = w(), d = w(), f = w(a), v = w(t), h = w(!1), g = w([]), y = w([]), $ = w([]), k = w([]), b = w([]), S = w([]), T = w(null), O = w(null), D = w(null), A = B(() => ({
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
      chooseYears: g.value,
      chooseMonths: y.value,
      chooseDays: $.value,
      chooseRangeYear: k.value,
      chooseRangeMonth: b.value,
      chooseRangeDay: S.value
    })), R = B(() => ({
      previewMonth: f.value,
      previewYear: v.value
    })), Y = B(() => {
      var ie;
      const { multiple: $e, range: ze } = e;
      return ze ? k.value.length ? `${k.value[0]} ~ ${k.value[1]}` : "" : $e ? `${g.value.length}${(n || an)("datePickerSelected")}` : (ie = c.value) != null ? ie : "";
    }), E = B(() => {
      var ie, $e;
      const { multiple: ze, range: Re } = e;
      if (Re)
        return b.value.length ? `${b.value[0]} ~ ${b.value[1]}` : "";
      let Le = "";
      return u.value && (Le = ($e = (ie = (n || an)("datePickerMonthDict")) == null ? void 0 : ie[u.value].name) != null ? $e : ""), ze ? `${y.value.length}${(n || an)("datePickerSelected")}` : Le;
    }), M = B(() => {
      var ie, $e, ze, Re;
      const { multiple: Le, range: fn } = e;
      if (fn) {
        const Ot = S.value.map((Wg) => ue(Wg).format("YYYY-MM-DD"));
        return Ot.length ? `${Ot[0]} ~ ${Ot[1]}` : "";
      }
      if (Le)
        return `${$.value.length}${(n || an)("datePickerSelected")}`;
      if (!c.value || !u.value || !d.value)
        return "";
      const hn = ue(`${c.value}-${u.value}-${d.value}`).day(), gn = Tt.find((Ot) => Ot === `${hn}`), Ko = ($e = (ie = (n || an)("datePickerWeekDict")) == null ? void 0 : ie[gn].name) != null ? $e : "", jg = (Re = (ze = (n || an)("datePickerMonthDict")) == null ? void 0 : ze[u.value].name) != null ? Re : "", Yg = Qo(d.value, 2, "0");
      return (n || an)("lang") === "zh-CN" ? `${u.value}-${Yg} ${Ko.slice(0, 3)}` : `${Ko.slice(0, 3)}, ${jg.slice(0, 3)} ${d.value}`;
    }), N = B(() => e.type === "year" || i.value ? "year" : e.type === "month" || l.value ? "month" : e.type === "date" ? "date" : ""), H = B(() => !e.touchable || !N.value), z = B(() => {
      var ie, $e;
      const ze = ue(`${c.value}-${u.value}-${d.value}`).day(), Re = d.value ? Qo(d.value, 2, "0") : "";
      return {
        week: `${ze}`,
        year: (ie = c.value) != null ? ie : "",
        month: ($e = u.value) != null ? $e : "",
        date: Re
      };
    }), J = B(
      () => V.value.chooseRangeDay.map((ie) => ue(ie).format("YYYY-MM-DD"))
    ), q = B(() => c.value === v.value), oe = B(() => u.value === f.value);
    let ye = 0, Te = 0, j = "", Q;
    fe(
      () => e.modelValue,
      (ie) => {
        if (!(!Ke() || te(ie)))
          if (e.range) {
            if (!Fe(ie))
              return;
            s.value = ie.length !== 1, de(ie, e.type);
          } else if (e.multiple) {
            if (!Fe(ie))
              return;
            ke(ie, e.type);
          } else
            Be(ie);
      },
      { immediate: !0 }
    ), fe(N, Qe);
    function re(ie) {
      ie === "year" ? i.value = !0 : ie === "month" ? l.value = !0 : (i.value = !1, l.value = !1);
    }
    function ve(ie) {
      if (H.value)
        return;
      const { clientX: $e, clientY: ze } = ie.touches[0];
      ye = $e, Te = ze;
    }
    function I(ie, $e) {
      return ie >= $e && ie > 20 ? "x" : "y";
    }
    function K(ie) {
      if (H.value)
        return;
      const { clientX: $e, clientY: ze } = ie.touches[0], Re = $e - ye, Le = ze - Te;
      Q = I(Math.abs(Re), Math.abs(Le)), j = Re > 0 ? "prev" : "next";
    }
    function pe() {
      return W6(this, null, function* () {
        if (H.value || Q !== "x")
          return;
        const ie = N.value === "year" ? T : N.value === "month" ? O : D;
        yield bn(), ie.value.forwardRef(j), Qe();
      });
    }
    function Se(ie, $e) {
      const ze = $e === "year" ? k : $e === "month" ? b : S;
      if (ze.value = s.value ? [ie, ie] : [ze.value[0], ie], s.value = !s.value, s.value) {
        const Le = ue(ze.value[0]).isAfter(ze.value[1]) ? [ze.value[1], ze.value[0]] : [...ze.value];
        C(e["onUpdate:modelValue"], Le), C(e.onChange, Le);
      }
    }
    function Ue(ie, $e) {
      const ze = $e === "year" ? g : $e === "month" ? y : $, Re = $e === "year" ? "YYYY" : $e === "month" ? "YYYY-MM" : "YYYY-MM-DD", Le = ze.value.map((hn) => ue(hn).format(Re)), fn = Le.findIndex((hn) => hn === ie);
      fn === -1 ? Le.push(ie) : Le.splice(fn, 1), C(e["onUpdate:modelValue"], Le), C(e.onChange, Le);
    }
    function Ne(ie, $e) {
      return !c.value || !u.value ? !1 : q.value ? ie === "year" ? $e < W(c.value) : ie === "month" ? $e < u.value : oe.value ? $e < W(d.value) : u.value > f.value : c.value > v.value;
    }
    function rn(ie) {
      const { readonly: $e, range: ze, multiple: Re, onChange: Le, "onUpdate:modelValue": fn } = e;
      if (ie < 0 || $e)
        return;
      h.value = Ne("day", ie);
      const hn = `${v.value}-${f.value}-${ie}`, gn = ue(hn).format("YYYY-MM-DD");
      ze ? Se(gn, "day") : Re ? Ue(gn, "day") : (C(fn, gn), C(Le, gn));
    }
    function un(ie) {
      const { type: $e, readonly: ze, range: Re, multiple: Le, onChange: fn, onPreview: hn, "onUpdate:modelValue": gn } = e;
      if (h.value = Ne("month", ie), $e === "month" && !ze) {
        const Ko = `${v.value}-${ie}`;
        Re ? Se(Ko, "month") : Le ? Ue(Ko, "month") : (C(gn, Ko), C(fn, Ko));
      } else
        f.value = ie, C(
          hn,
          W(v.value),
          W(f.value),
          $e === "date" ? W(d.value) : void 0
        );
      l.value = !1;
    }
    function Pn(ie) {
      const { type: $e, readonly: ze, range: Re, multiple: Le, onChange: fn, onPreview: hn, "onUpdate:modelValue": gn } = e;
      h.value = Ne("year", ie), $e === "year" && !ze ? Re ? Se(`${ie}`, "year") : Le ? Ue(`${ie}`, "year") : (C(gn, `${ie}`), C(fn, `${ie}`)) : (v.value = `${ie}`, C(
        hn,
        W(v.value),
        W(f.value),
        $e === "date" ? W(d.value) : void 0
      )), i.value = !1;
    }
    function me(ie, $e) {
      const ze = $e === "prev" ? -1 : 1;
      if (ie === "year")
        v.value = `${W(v.value) + ze}`;
      else {
        let Re = W(f.value) + ze;
        Re < 1 && (v.value = `${W(v.value) - 1}`, Re = 12), Re > 12 && (v.value = `${W(v.value) + 1}`, Re = 1), f.value = Mr.find((Le) => W(Le) === Re);
      }
      C(
        e.onPreview,
        W(v.value),
        W(f.value),
        e.type === "date" ? W(d.value) : void 0
      );
    }
    function Ke() {
      return (e.multiple || e.range) && !Fe(e.modelValue) ? (lt("DatePicker", 'type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Fe(e.modelValue) ? (lt("DatePicker", 'type of prop "modelValue" should be a String'), !1) : !0;
    }
    function te(ie) {
      return Fe(ie) ? !1 : ie === "Invalid Date" ? (lt("DatePicker", '"modelValue" is an Invalid Date'), !0) : !1;
    }
    function de(ie, $e) {
      const ze = $e === "year" ? k : $e === "month" ? b : S, Re = $e === "year" ? "YYYY" : $e === "month" ? "YYYY-MM" : "YYYY-MM-D", Le = ie.map((gn) => ue(gn).format(Re)).slice(0, 2);
      if (ze.value.some((gn) => te(gn)))
        return;
      ze.value = Le;
      const hn = ue(ze.value[0]).isAfter(ze.value[1]);
      ze.value.length === 2 && hn && (ze.value = [ze.value[1], ze.value[0]]);
    }
    function ke(ie, $e) {
      const ze = $e === "year" ? g : $e === "month" ? y : $, Re = $e === "year" ? "YYYY" : $e === "month" ? "YYYY-MM" : "YYYY-MM-D", Le = Array.from(new Set(ie.map((fn) => ue(fn).format(Re))));
      ze.value = Le.filter((fn) => fn !== "Invalid Date");
    }
    function Be(ie) {
      const ze = (ie ? ue(ie) : ue()).format("YYYY-MM-D");
      if (te(ze))
        return;
      const [Re, Le, fn] = ze.split("-"), hn = Mr.find((gn) => gn === Le);
      u.value = hn, c.value = Re, d.value = fn, f.value = hn, v.value = Re;
    }
    function Qe() {
      Te = 0, ye = 0, j = "", Q = void 0;
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
      getMonthTitle: E,
      getDateTitle: M,
      getYearTitle: Y,
      getPanelType: N,
      getChoose: V,
      getPreview: R,
      componentProps: A,
      slotProps: z,
      formatRange: J,
      pt: n,
      t: an,
      n: q6,
      classes: X6,
      clickEl: re,
      handleTouchstart: ve,
      handleTouchmove: K,
      handleTouchend: pe,
      getChooseDay: rn,
      getChooseMonth: un,
      getChooseYear: Pn,
      checkPreview: me,
      formatElevation: dn
    };
  }
});
Am.render = G6;
var li = Am;
ae(li);
le(li, Pm);
const xB = li;
var Ql = li, Z6 = Object.defineProperty, dd = Object.getOwnPropertySymbols, J6 = Object.prototype.hasOwnProperty, Q6 = Object.prototype.propertyIsEnumerable, fd = (e, n, o) => n in e ? Z6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, _6 = (e, n) => {
  for (var o in n || (n = {}))
    J6.call(n, o) && fd(e, o, n[o]);
  if (dd)
    for (var o of dd(n))
      Q6.call(n, o) && fd(e, o, n[o]);
  return e;
};
const Mm = _6({
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
var x6 = Object.defineProperty, pd = Object.getOwnPropertySymbols, eP = Object.prototype.hasOwnProperty, nP = Object.prototype.propertyIsEnumerable, vd = (e, n, o) => n in e ? x6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, oP = (e, n) => {
  for (var o in n || (n = {}))
    eP.call(n, o) && vd(e, o, n[o]);
  if (pd)
    for (var o of pd(n))
      nP.call(n, o) && vd(e, o, n[o]);
  return e;
};
const { name: tP, n: rP, classes: aP } = ne("dialog");
function iP(e, n) {
  const o = _("var-button"), t = _("var-popup");
  return m(), we(t, {
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
      L(
        "div",
        je({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: oP({ width: e.toSizeUnit(e.width) }, e.dialogStyle)
        }, e.$attrs),
        [
          L(
            "div",
            {
              class: p(e.n("title"))
            },
            [
              U(e.$slots, "title", {}, () => {
                var r;
                return [
                  De(
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
          L(
            "div",
            {
              class: p(e.n("message")),
              style: Z({ textAlign: e.messageAlign })
            },
            [
              U(e.$slots, "default", {}, () => [
                De(
                  se(e.message),
                  1
                  /* TEXT */
                )
              ])
            ],
            6
            /* CLASS, STYLE */
          ),
          U(e.$slots, "actions", {
            slotClass: e.n("actions"),
            cancel: e.cancel,
            confirm: e.confirm
          }, () => [
            L(
              "div",
              {
                class: p(e.n("actions"))
              },
              [
                e.cancelButton ? (m(), we(o, {
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
                      De(
                        se((r = e.cancelButtonText) != null ? r : (e.pt ? e.pt : e.t)("dialogCancelButtonText")),
                        1
                        /* TEXT */
                      )
                    ];
                  }),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "text-color", "color", "onClick"])) : G("v-if", !0),
                e.confirmButton ? (m(), we(o, {
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
                      De(
                        se((r = e.confirmButtonText) != null ? r : (e.pt ? e.pt : e.t)("dialogConfirmButtonText")),
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
const Nm = ee({
  name: tP,
  components: {
    VarPopup: Mo,
    VarButton: Bn
  },
  inheritAttrs: !1,
  props: Mm,
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
      n: rP,
      classes: aP,
      handleClickOverlay: a,
      confirm: i,
      cancel: l,
      toSizeUnit: Oe,
      handleKeyEscape: s
    };
  }
});
Nm.render = iP;
var fr = Nm, lP = Object.defineProperty, sP = Object.defineProperties, uP = Object.getOwnPropertyDescriptors, md = Object.getOwnPropertySymbols, cP = Object.prototype.hasOwnProperty, dP = Object.prototype.propertyIsEnumerable, hd = (e, n, o) => n in e ? lP(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, rl = (e, n) => {
  for (var o in n || (n = {}))
    cP.call(n, o) && hd(e, o, n[o]);
  if (md)
    for (var o of md(n))
      dP.call(n, o) && hd(e, o, n[o]);
  return e;
}, fP = (e, n) => sP(e, uP(n));
let Po, ra = {};
function pP(e = {}) {
  return sn(e) ? fP(rl({}, ra), { message: e }) : rl(rl({}, ra), e);
}
function Yo(e) {
  return no() ? new Promise((n) => {
    Yo.close();
    const o = pP(e), t = xe(o);
    t.teleport = "body", Po = t;
    const { unmountInstance: r } = $t(fr, t, {
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
  ra = e;
};
Yo.resetDefaultOptions = function() {
  ra = {};
};
Yo.close = function() {
  if (Po != null) {
    const e = Po;
    Po = null, He().then(() => {
      e.show = !1;
    });
  }
};
Yo.Component = fr;
ae(fr);
ae(fr, Yo);
le(Yo, Mm);
const eD = fr;
var _l = Yo;
const Vm = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: Boolean,
  description: String,
  margin: String,
  dashed: Boolean,
  hairline: Boolean
}, { name: vP, n: mP, classes: hP } = ne("divider");
function gP(e, n) {
  return m(), P(
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
      e.vertical ? G("v-if", !0) : U(e.$slots, "default", { key: 0 }, () => [
        e.description ? (m(), P(
          "span",
          {
            key: 0,
            class: p(e.n("text"))
          },
          se(e.description),
          3
          /* TEXT, CLASS */
        )) : G("v-if", !0)
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const Rm = ee({
  name: vP,
  props: Vm,
  setup(e, { slots: n }) {
    const o = w(!1), t = B(() => {
      const { vertical: i, inset: l } = e;
      return !i && l === !0;
    }), r = B(() => {
      const { inset: i, vertical: l, margin: s } = e;
      if (or(i) || l)
        return { margin: s };
      const u = W(i), c = Math.abs(u) + (i + "").replace(u + "", "");
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
      n: mP,
      classes: hP,
      withText: o,
      style: r,
      withPresetInset: t
    };
  }
});
Rm.render = gP;
var si = Rm;
ae(si);
le(si, Vm);
const nD = si;
var xl = si;
const Lm = {
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
var bP = Object.defineProperty, yP = Object.defineProperties, wP = Object.getOwnPropertyDescriptors, gd = Object.getOwnPropertySymbols, kP = Object.prototype.hasOwnProperty, $P = Object.prototype.propertyIsEnumerable, bd = (e, n, o) => n in e ? bP(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, yd = (e, n) => {
  for (var o in n || (n = {}))
    kP.call(n, o) && bd(e, o, n[o]);
  if (gd)
    for (var o of gd(n))
      $P.call(n, o) && bd(e, o, n[o]);
  return e;
}, wd = (e, n) => yP(e, wP(n));
const { name: CP, n: SP, classes: PP } = ne("drag");
function OP(e, n) {
  return m(), we(io, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    L(
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
        U(e.$slots, "default")
      ],
      16
      /* FULL_PROPS */
    )
  ], 8, ["to", "disabled"]);
}
const Fm = ee({
  name: CP,
  inheritAttrs: !1,
  props: Lm,
  setup(e, { attrs: n }) {
    const o = w(null), t = w(0), r = w(0), a = w(!1), i = w(!1), { touching: l, dragging: s, moveX: u, moveY: c, startTouch: d, moveTouch: f, endTouch: v, resetTouch: h } = kt(), { disabled: g } = xo(), y = xe({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    fe(() => e.boundary, R), lo(E), yn(() => {
      R(), E();
    });
    function $(N) {
      e.disabled || (d(N), T());
    }
    function k(N) {
      !l.value || e.disabled || (f(N), Me(N), i.value = !1, a.value = !0, e.direction.includes("x") && (t.value += u.value), e.direction.includes("y") && (r.value += c.value), V());
    }
    function b() {
      e.disabled || (v(), i.value = !0, A());
    }
    function S(N) {
      s.value || C(e.onClick, N);
    }
    function T() {
      const { left: N, top: H } = O();
      t.value = N, r.value = H;
    }
    function O() {
      const N = nn(o.value), H = nn(window), z = N.top - H.top, J = H.bottom - N.bottom, q = N.left - H.left, oe = H.right - N.right, { width: ye, height: Te } = N, { width: j, height: Q } = H;
      return {
        top: z,
        bottom: J,
        left: q,
        right: oe,
        width: ye,
        height: Te,
        halfWidth: ye / 2,
        halfHeight: Te / 2,
        windowWidth: j,
        windowHeight: Q
      };
    }
    function D() {
      const N = O(), H = y.left, z = N.windowWidth - y.right - N.width, J = y.top, q = N.windowHeight - y.bottom - N.height;
      return {
        minX: H,
        minY: J,
        // fallback the drag element overflows boundary
        maxX: H < z ? z : H,
        maxY: J < q ? q : J
      };
    }
    function A() {
      if (e.attraction == null)
        return;
      const { halfWidth: N, halfHeight: H, top: z, bottom: J, left: q, right: oe } = O(), { minX: ye, minY: Te, maxX: j, maxY: Q } = D(), re = q + N - y.left, ve = oe + N - y.right, I = z + H - y.top, K = J + H - y.bottom, pe = re <= ve, Se = I <= K;
      e.attraction.includes("x") && (t.value = pe ? ye : j), e.attraction.includes("y") && (r.value = Se ? Te : Q);
    }
    function V() {
      const { minX: N, minY: H, maxX: z, maxY: J } = D();
      t.value = $n(t.value, N, z), r.value = $n(r.value, H, J);
    }
    function R() {
      const { top: N = 0, bottom: H = 0, left: z = 0, right: J = 0 } = e.boundary;
      y.top = en(N), y.bottom = en(H), y.left = en(z), y.right = en(J);
    }
    function Y() {
      var N;
      const H = (N = n.style) != null ? N : {};
      return wd(yd({}, n), {
        style: wd(yd({}, H), {
          // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: a.value ? 0 : H.top,
          left: a.value ? 0 : H.left,
          right: a.value ? "auto" : H.right,
          bottom: a.value ? "auto" : H.bottom,
          transform: a.value ? `translate(${t.value}px, ${r.value}px)` : H.transform
        })
      });
    }
    function E() {
      a.value && (T(), V());
    }
    function M() {
      h(), i.value = !1, a.value = !1, t.value = 0, r.value = 0;
    }
    return {
      drag: o,
      x: t,
      y: r,
      enableTransition: i,
      dragging: s,
      teleportDisabled: g,
      n: SP,
      classes: PP,
      getAttrs: Y,
      handleTouchstart: $,
      handleTouchmove: k,
      handleTouchend: b,
      handleClick: S,
      resize: E,
      reset: M
    };
  }
});
Fm.render = OP;
var ui = Fm;
ae(ui);
le(ui, Lm);
const oD = ui;
var aa = ui;
const Um = {
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
}, { name: zP, n: EP, classes: TP } = ne("tooltip");
function BP(e, n) {
  return m(), P(
    "div",
    {
      ref: "host",
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      U(e.$slots, "default"),
      (m(), we(io, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        X(_e, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: ce(() => [
            Ve(L(
              "div",
              {
                ref: "popover",
                class: p(e.classes(e.n("tooltip"), e.n("$--box"))),
                style: Z({ zIndex: e.zIndex }),
                onClick: n[0] || (n[0] = Xn(() => {
                }, ["stop"])),
                onMouseenter: n[1] || (n[1] = (...o) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...o)),
                onMouseleave: n[2] || (n[2] = (...o) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...o))
              },
              [
                L(
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
                    U(e.$slots, "content", {}, () => [
                      De(
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
const Hm = ee({
  name: zP,
  props: Um,
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
    } = xp(e);
    return {
      popover: o,
      host: t,
      referenceSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: Oe,
      n: EP,
      classes: TP,
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
Hm.render = BP;
var ci = Hm;
ae(ci);
le(ci, Um);
const tD = ci;
var ia = ci;
const jm = {
  expand: Boolean,
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  },
  "onUpdate:expand": F()
};
var DP = Object.defineProperty, kd = Object.getOwnPropertySymbols, IP = Object.prototype.hasOwnProperty, AP = Object.prototype.propertyIsEnumerable, $d = (e, n, o) => n in e ? DP(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, MP = (e, n) => {
  for (var o in n || (n = {}))
    IP.call(n, o) && $d(e, o, n[o]);
  if (kd)
    for (var o of kd(n))
      AP.call(n, o) && $d(e, o, n[o]);
  return e;
};
const { name: NP, n: VP, classes: RP } = ne("ellipsis"), LP = { key: 0 };
function FP(e, n) {
  const o = _("var-tooltip");
  return m(), we(
    o,
    To(xt(e.tooltipProps)),
    {
      content: ce(() => [
        U(e.$slots, "tooltip-content", {}, () => {
          var t;
          return [
            (t = e.tooltipProps) != null && t.content ? (m(), P(
              "span",
              LP,
              se(e.tooltipProps.content),
              1
              /* TEXT */
            )) : U(e.$slots, "default", { key: 1 })
          ];
        })
      ]),
      default: ce(() => [
        L(
          "span",
          {
            class: p(
              e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])
            ),
            style: Z(e.rootStyles),
            onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
          },
          [
            U(e.$slots, "default")
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
const Ym = ee({
  name: NP,
  components: { VarTooltip: ia },
  props: jm,
  setup(e) {
    const n = Gn(e, "expand"), o = B(() => e.lineClamp ? { "-webkit-line-clamp": e.lineClamp } : {}), t = B(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : MP({ sameWidth: !0 }, e.tooltip));
    function r() {
      e.expandTrigger && (n.value = !n.value);
    }
    return {
      tooltipProps: t,
      expanding: n,
      rootStyles: o,
      n: VP,
      classes: RP,
      handleClick: r
    };
  }
});
Ym.render = FP;
var di = Ym;
ae(di);
le(di, jm);
const rD = di;
var es = di;
const Wm = {
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
  inactiveIconSize: Ie(on, "size"),
  activeIconSize: Ie(on, "size"),
  inactiveIconNamespace: Ie(on, "namespace"),
  activeIconNamespace: Ie(on, "namespace"),
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
  name: UP,
  classes: al,
  n: Mn
} = ne("fab");
var fi = ee({
  name: UP,
  inheritAttrs: !1,
  props: Wm,
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
    }), Jf(r, "click", s);
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
      }) : null : Ve(X(Bn, {
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
          class: al([t.value, Mn("trigger-active-icon"), Mn("trigger-inactive-icon")]),
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
      const d = _f((c = C(n.default)) != null ? c : []), f = or(e.drag) ? {} : e.drag;
      return X(aa, je({
        ref: a,
        class: al(Mn(`--position-${e.position}`), [!e.fixed, Mn("--absolute")]),
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
        default: () => [X("div", {
          class: al(Mn(), Mn(`--direction-${e.direction}`), [e.safeArea, Mn("--safe-area")]),
          ref: r,
          onMouseleave: () => l(!1, d.length),
          onMouseenter: () => l(!0, d.length)
        }, [X(_e, {
          name: Mn("--active-transition")
        }, {
          default: () => [u()]
        }), X(_e, {
          name: Mn(`--actions-transition-${e.direction}`),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        }, {
          default: () => [Ve(X("div", {
            class: Mn("actions"),
            onClick: (v) => v.stopPropagation()
          }, [d.map((v) => {
            var h;
            return X("div", {
              class: Mn("action"),
              key: (h = v.key) != null ? h : void 0
            }, [v]);
          })]), [[xn, e.show && t.value && d.length]])]
        })])]
      });
    };
  }
});
ae(fi);
le(fi, Wm);
const aD = fi;
var ns = fi;
const Km = {
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
}, { name: HP, n: jP, classes: YP } = ne("floating-panel"), Cd = 100, Sd = 0.2;
function WP(e, n) {
  return m(), we(io, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    L(
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
        U(e.$slots, "header", {}, () => [
          L(
            "div",
            {
              class: p(e.n("header"))
            },
            [
              L(
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
        L(
          "div",
          {
            ref: "contentRef",
            class: p(e.n("content"))
          },
          [
            U(e.$slots, "default")
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
const qm = ee({
  name: HP,
  props: Km,
  setup(e) {
    const n = w(0), o = w(null), { height: t } = f0(), r = B(() => t.value * 0.6), a = Gn(e, "anchor", { defaultValue: Cd }), i = B(() => {
      const V = [Cd, r.value], { anchors: R } = e;
      return Wn(R) ? V : R;
    }), l = B(() => Math.min(...i.value)), s = B(() => Math.max(...i.value)), { disabled: u } = xo(), { deltaY: c, touching: d, startTouch: f, moveTouch: v, endTouch: h, isReachTop: g, isReachBottom: y } = kt();
    let $;
    ir(() => d.value), fe(() => a.value, k, { immediate: !0 }), fe(
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
      f(V), $ = n.value;
    }
    function S(V) {
      var R;
      v(V);
      const Y = V.target, E = o.value === Y || ((R = o.value) == null ? void 0 : R.contains(Y));
      if (E && !e.contentDraggable)
        return;
      if (E && e.contentDraggable && n.value >= s.value && !g(o.value)) {
        y(o.value) && Me(V);
        return;
      }
      const M = $ - c.value;
      O(D(M)), Me(V);
    }
    function T() {
      h();
      const V = a.value;
      O(n.value), a.value = n.value, a.value !== V && C(e.onAnchorChange, n.value);
    }
    function O(V) {
      n.value = d.value ? V : A(V);
    }
    function D(V) {
      if (V > s.value) {
        const R = V - s.value;
        return s.value + R * Sd;
      }
      if (V < l.value) {
        const R = l.value - V;
        return l.value - R * Sd;
      }
      return V;
    }
    function A(V) {
      if (i.value.includes(V))
        return V;
      let R = 1 / 0, Y = 0;
      return i.value.forEach((E) => {
        const M = Math.abs(E - V);
        M < R && (R = M, Y = E);
      }), Y;
    }
    return {
      contentRef: o,
      teleportDisabled: u,
      touching: d,
      minAnchor: l,
      maxAnchor: s,
      visibleHeight: n,
      n: jP,
      classes: YP,
      toSizeUnit: Oe,
      toNumber: W,
      formatElevation: dn,
      handleTouchstart: b,
      handleTouchmove: S,
      handleTouchend: T
    };
  }
});
qm.render = WP;
var pi = qm;
ae(pi);
le(pi, Km);
const iD = pi;
var os = pi;
const Xm = {
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
var Pd = (e, n, o) => new Promise((t, r) => {
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
const { name: KP, n: qP } = ne("form");
function XP(e, n) {
  return m(), P(
    "form",
    {
      class: p(e.n()),
      onSubmit: n[0] || (n[0] = (...o) => e.handleSubmit && e.handleSubmit(...o)),
      onReset: n[1] || (n[1] = (...o) => e.handleReset && e.handleReset(...o))
    },
    [
      U(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const Gm = ee({
  name: KP,
  props: Xm,
  setup(e) {
    const n = B(() => e.disabled), o = B(() => e.readonly), { formItems: t, bindFormItems: r } = e1();
    r({
      disabled: n,
      readonly: o
    });
    function i(f) {
      setTimeout(() => {
        const v = No(f), h = v === window ? 0 : xu(v), g = xu(f) - h - en(e.scrollToErrorOffsetY);
        Vt(v, {
          top: g,
          animation: yl
        });
      }, 300);
    }
    function l(f) {
      return Pd(this, null, function* () {
        Me(f);
        const v = yield u();
        C(e.onSubmit, v);
      });
    }
    function s(f) {
      Me(f), c(), C(e.onReset);
    }
    function u() {
      return Pd(this, null, function* () {
        var f;
        const v = yield Promise.all(t.map(({ validate: h }) => h()));
        if (e.scrollToError) {
          const [, h] = Df(v, (y) => y === !1, e.scrollToError), g = h > -1;
          if (g) {
            const y = (f = t[h].instance.proxy) == null ? void 0 : f.$el;
            i(y);
          }
          return !g;
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
      n: qP,
      handleSubmit: l,
      handleReset: s,
      validate: u,
      reset: c,
      resetValidation: d
    };
  }
});
Gm.render = XP;
var St = Gm;
St.useValidation = Un;
St.useForm = Hn;
ae(St);
le(St, Xm);
const lD = St;
var ts = St;
const Zm = {
  highlighter: Object,
  theme: String,
  tag: {
    type: String,
    default: "div"
  }
}, { name: GP, n: ZP } = ne("highlighter-provider"), JP = ee({
  name: GP,
  props: Zm,
  setup(e, { slots: n }) {
    const o = B(() => e.highlighter), t = B(() => e.theme);
    return zC({ highlighter: o, theme: t }), () => Qt(
      e.tag,
      {
        class: ZP()
      },
      C(n.default)
    );
  }
});
var vi = JP;
ae(vi);
le(vi, Zm);
const sD = vi;
var rs = vi;
const Jm = {
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
}, { name: QP, n: _P, classes: xP } = ne("image"), e4 = ["alt", "title", "referrerpolicy", "lazy-loading", "lazy-error"], n4 = ["alt", "title", "referrerpolicy", "src"];
function o4(e, n) {
  var o;
  const t = Ye("lazy"), r = Ye("ripple");
  return Ve((m(), P(
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
      e.lazy && !e.showErrorSlot ? Ve((m(), P("img", {
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
      }, null, 46, e4)), [
        [t, (o = e.src) != null ? o : ""]
      ]) : G("v-if", !0),
      !e.lazy && !e.showErrorSlot ? (m(), P("img", {
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
      }, null, 46, n4)) : G("v-if", !0),
      e.showErrorSlot ? U(e.$slots, "error", { key: 2 }) : G("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: !e.ripple }]
  ]);
}
const Qm = ee({
  name: QP,
  directives: {
    Lazy: Yt,
    Ripple: tn
  },
  props: Jm,
  setup(e, { slots: n }) {
    const o = w(!1);
    fe(
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
      n: _P,
      classes: xP,
      toSizeUnit: Oe,
      handleLoad: r,
      handleError: t,
      handleClick: a
    };
  }
});
Qm.render = o4;
var mi = Qm;
ae(mi);
le(mi, Jm);
const uD = mi;
var as = mi;
const Ou = {
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
const t4 = 250, r4 = 20, { name: a4, n: Od, classes: i4 } = ne("swipe"), l4 = ["onClick"];
function s4(e, n) {
  const o = _("var-icon"), t = _("var-button"), r = Ye("hover");
  return Ve((m(), P(
    "div",
    {
      ref: "swipeEl",
      class: p(e.n())
    },
    [
      L(
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
          U(e.$slots, "default")
        ],
        38
        /* CLASS, STYLE, NEED_HYDRATION */
      ),
      e.navigation ? U(e.$slots, "prev", To(je({ key: 0 }, {
        index: e.index,
        length: e.length,
        prev: e.prev,
        next: e.next,
        to: e.to,
        hovering: e.hovering
      })), () => [
        X(_e, {
          name: e.getNavigationAnimation("prev")
        }, {
          default: ce(() => [
            e.navigation === !0 || e.hovering ? (m(), P(
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
                  default: ce(() => [
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
      e.navigation ? U(e.$slots, "next", To(je({ key: 1 }, {
        index: e.index,
        length: e.length,
        hovering: e.hovering,
        prev: e.prev,
        next: e.next,
        to: e.to
      })), () => [
        X(_e, {
          name: e.getNavigationAnimation("next")
        }, {
          default: ce(() => [
            e.navigation === !0 || e.hovering ? (m(), P(
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
                  default: ce(() => [
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
      U(e.$slots, "indicator", To(xt({
        index: e.index,
        length: e.length,
        hovering: e.hovering,
        prev: e.prev,
        next: e.next,
        to: e.to
      })), () => [
        e.indicator && e.length ? (m(), P(
          "div",
          {
            key: 0,
            class: p(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
          },
          [
            (m(!0), P(
              Ae,
              null,
              qe(e.length, (a, i) => (m(), P("div", {
                key: a,
                class: p(
                  e.classes(e.n("indicator"), [e.index === i, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])
                ),
                style: Z({ background: e.indicatorColor }),
                onClick: (l) => e.to(i)
              }, null, 14, l4))),
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
const _m = ee({
  name: a4,
  directives: { Hover: In },
  components: { VarButton: Bn, VarIcon: Ge },
  props: Ou,
  setup(e) {
    const n = w(null), o = w(0), t = B(() => e.vertical), r = w(0), a = w(0), i = w(!1), l = w(0), s = w(!1), { swipeItems: u, bindSwipeItems: c, length: d } = n1(), { swipeResizeListeners: f, bindSwipeResizeListeners: v } = o1(), { popup: h, bindPopup: g } = up(), {
      deltaX: y,
      deltaY: $,
      moveX: k,
      moveY: b,
      offsetX: S,
      offsetY: T,
      touching: O,
      direction: D,
      startTime: A,
      startTouch: V,
      moveTouch: R,
      endTouch: Y
    } = kt(), E = B(() => D.value === (e.vertical ? "vertical" : "horizontal"));
    let M = !1, N = -1;
    c({
      size: o,
      currentIndex: l,
      vertical: t
    }), We(() => window, "keydown", Ue), C(g, null), C(v, null), fe(
      () => d.value,
      () => nt(this, null, function* () {
        yield bn(), j(), Ne();
      })
    ), h && fe(
      () => h.show.value,
      (me) => nt(this, null, function* () {
        me ? (yield bn(), Ne()) : re();
      })
    ), Fo(Ne), rr(re), lo(Ne);
    function z(me) {
      return u.find(({ index: Ke }) => Ke.value === me);
    }
    function J() {
      e.loop && (a.value >= 0 && z(d.value - 1).setTranslate(-r.value), a.value <= -(r.value - o.value) && z(0).setTranslate(r.value), a.value > -(r.value - o.value) && a.value < 0 && (z(d.value - 1).setTranslate(0), z(0).setTranslate(0)));
    }
    function q(me) {
      const Ke = En(me) ? me : Math.floor((a.value - o.value / 2) / -o.value), { loop: te } = e;
      return Ke <= -1 ? te ? -1 : 0 : Ke >= d.value ? te ? d.value : d.value - 1 : Ke;
    }
    function oe(me) {
      const { loop: Ke } = e;
      return me === -1 ? Ke ? d.value - 1 : 0 : me === d.value ? Ke ? 0 : d.value - 1 : me;
    }
    function ye(me) {
      return e.loop ? me < 0 ? d.value + me : me >= d.value ? me - d.value : me : $n(me, 0, d.value - 1);
    }
    function Te() {
      return nt(this, null, function* () {
        const me = a.value >= o.value, Ke = a.value <= -r.value, te = 0, de = -(r.value - o.value);
        i.value = !0, (me || Ke) && (i.value = !0, a.value = Ke ? te : de, z(0).setTranslate(0), z(d.value - 1).setTranslate(0)), yield bn(), i.value = !1;
      });
    }
    function j() {
      M || (l.value = ye(W(e.initialIndex)), M = !0);
    }
    function Q() {
      const { autoplay: me } = e;
      !me || d.value <= 1 || (re(), N = window.setTimeout(() => {
        rn(), Q();
      }, W(me)));
    }
    function re() {
      N && clearTimeout(N);
    }
    function ve(me) {
      return nt(this, null, function* () {
        d.value <= 1 || !e.touchable || (V(me), re(), yield Te(), i.value = !0);
      });
    }
    function I(me) {
      const { touchable: Ke, vertical: te } = e;
      !O.value || !Ke || (R(me), E.value && (Me(me), a.value += te ? b.value : k.value, J()));
    }
    function K() {
      if (!O.value || (Y(), !E.value))
        return;
      const { vertical: me, onChange: Ke } = e, te = me ? $.value < 0 : y.value < 0, de = me ? T.value : S.value, Be = performance.now() - A.value <= t4 && de >= r4 ? q(te ? l.value + 1 : l.value - 1) : q();
      i.value = !1, a.value = Be * -o.value;
      const Qe = l.value;
      l.value = oe(Be), Q(), Qe !== l.value && C(Ke, l.value);
    }
    function pe(me) {
      e.navigation === "hover" && (s.value = me);
    }
    function Se(me) {
      return e.navigation !== "hover" ? "" : Od(`--navigation${e.vertical ? "-vertical" : ""}-${me}-animation`);
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
      }), Q(), setTimeout(() => {
        i.value = !1;
      }), f.forEach(({ onResize: me }) => {
        me();
      }));
    }
    function rn(me) {
      return nt(this, null, function* () {
        if (d.value <= 1)
          return;
        j();
        const { loop: Ke, onChange: te } = e, de = l.value;
        if (l.value = ye(de + 1), (me == null ? void 0 : me.event) !== !1 && C(te, l.value), yield Te(), de === d.value - 1 && Ke) {
          z(0).setTranslate(r.value), a.value = d.value * -o.value;
          return;
        }
        de !== d.value - 1 && (a.value = l.value * -o.value);
      });
    }
    function un(me) {
      return nt(this, null, function* () {
        if (d.value <= 1)
          return;
        j();
        const { loop: Ke, onChange: te } = e, de = l.value;
        if (l.value = ye(de - 1), (me == null ? void 0 : me.event) !== !1 && C(te, l.value), yield Te(), de === 0 && Ke) {
          z(d.value - 1).setTranslate(-r.value), a.value = o.value;
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
      n: Od,
      toSizeUnit: Oe,
      classes: i4,
      handleTouchstart: ve,
      handleTouchmove: I,
      handleTouchend: K,
      next: rn,
      prev: un,
      to: Pn,
      resize: Ne,
      toNumber: W,
      handleHovering: pe,
      getNavigationAnimation: Se
    };
  }
});
_m.render = s4;
var hi = _m;
ae(hi);
le(hi, Ou);
const cD = hi;
var Kt = hi;
function u4() {
  const { bindParent: e, index: n, parentProvider: o } = wn(Vp);
  return Ln(!!e, "SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: o,
    bindSwipe: e
  };
}
const { name: c4, n: d4 } = ne("swipe-item"), f4 = ["aria-hidden"];
function p4(e, n) {
  return m(), P("div", {
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
    U(e.$slots, "default")
  ], 46, f4);
}
const xm = ee({
  name: c4,
  setup() {
    const e = w(0), n = w(!1), { swipe: o, bindSwipe: t, index: r } = u4(), { size: a, currentIndex: i, vertical: l } = o, s = {
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
      n: d4,
      toSizeUnit: Oe
    };
  }
});
xm.render = p4;
var zu = xm;
ae(zu);
const dD = zu;
var qt = zu, v4 = Object.defineProperty, zd = Object.getOwnPropertySymbols, m4 = Object.prototype.hasOwnProperty, h4 = Object.prototype.propertyIsEnumerable, Ed = (e, n, o) => n in e ? v4(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Td = (e, n) => {
  for (var o in n || (n = {}))
    m4.call(n, o) && Ed(e, o, n[o]);
  if (zd)
    for (var o of zd(n))
      h4.call(n, o) && Ed(e, o, n[o]);
  return e;
};
const eh = Td(Td({
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
}, Ie(Ou, ["loop", "indicator", "onChange"])), Ie(Ct, [
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
])), { name: g4, n: Bd, classes: b4 } = ne("image-preview"), il = 12, Dd = 200, y4 = 350, Id = 200, w4 = 500, Sr = 1, k4 = ["onTouchstart"], $4 = ["src", "alt"];
function C4(e, n) {
  const o = _("var-swipe-item"), t = _("var-swipe"), r = _("var-icon"), a = _("var-popup");
  return m(), we(a, {
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
      X(t, je({
        ref: "swipeRef",
        class: e.n("swipe"),
        "var-image-preview-cover": "",
        touchable: e.canSwipe,
        indicator: e.indicator && e.images.length > 1,
        "initial-index": e.toNumber(e.initialIndex),
        loop: e.loop
      }, e.$attrs, { onChange: e.onChange }), {
        default: ce(() => [
          (m(!0), P(
            Ae,
            null,
            qe(e.images, (i, l) => (m(), we(o, {
              key: i,
              class: p(e.n("swipe-item")),
              "var-image-preview-cover": ""
            }, {
              default: ce(() => [
                L("div", {
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
                  L("img", {
                    role: "img",
                    class: p(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
                    src: i,
                    alt: i
                  }, null, 10, $4)
                ], 46, k4)
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["class"]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        indicator: ce(({ index: i, length: l }) => [
          U(e.$slots, "indicator", {
            index: i,
            length: l
          }, () => [
            e.indicator && e.images.length > 1 ? (m(), P(
              "div",
              {
                key: 0,
                class: p(e.n("indicators"))
              },
              se(i + 1) + " / " + se(l),
              3
              /* TEXT, CLASS */
            )) : G("v-if", !0)
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]),
      U(e.$slots, "close-icon", {}, () => [
        e.closeable ? (m(), we(r, {
          key: 0,
          class: p(e.n("close-icon")),
          name: "close-circle",
          "var-image-preview-cover": "",
          onClick: e.close
        }, null, 8, ["class", "onClick"])) : G("v-if", !0)
      ]),
      e.$slots.extra ? (m(), P(
        "div",
        {
          key: 0,
          class: p(e.n("extra"))
        },
        [
          U(e.$slots, "extra")
        ],
        2
        /* CLASS */
      )) : G("v-if", !0)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["show", "class", "transition", "close-on-key-escape", "lock-scroll", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onKeyEscape", "onRouteChange"]);
}
const nh = ee({
  name: g4,
  components: {
    VarSwipe: Kt,
    VarSwipeItem: qt,
    VarPopup: Mo,
    VarIcon: Ge
  },
  inheritAttrs: !1,
  props: eh,
  setup(e) {
    const n = Gn(e, "show"), o = w(1), t = w(0), r = w(0), a = w(), i = w(), l = w(!0), s = w(null), { moveX: u, moveY: c, distance: d, startTime: f, startTouch: v, moveTouch: h, endTouch: g } = kt(), y = B(() => {
      const { imagePreventDefault: j, show: Q } = e;
      return Q && j;
    });
    let $ = null, k = null, b = !1;
    const S = {
      start: null,
      prev: null
    };
    We(() => document, "contextmenu", J);
    function T(j) {
      o.value = W(j), l.value = !1, S.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, Id);
    }
    function O() {
      o.value = 1, t.value = 0, r.value = 0, l.value = !0, S.prev = null, a.value = void 0, i.value = void 0;
    }
    function D(j) {
      return S.prev ? d.value <= il && performance.now() - f.value <= Dd && S.prev === j : !1;
    }
    function A(j) {
      return !j || !S.start || !S.prev ? !1 : d.value <= il && performance.now() - f.value < y4 && (j === S.start || j.parentNode === S.start);
    }
    function V() {
      g(), window.clearTimeout(k), b = !1, S.start = null;
    }
    function R(j) {
      if (g(), window.clearTimeout(k), b) {
        b = !1;
        return;
      }
      const Q = A(j.target);
      $ = window.setTimeout(() => {
        Q && z(), S.start = null;
      }, Dd);
    }
    function Y(j, Q) {
      window.clearTimeout($), window.clearTimeout(k);
      const re = j.currentTarget;
      if (S.start = re, k = window.setTimeout(() => {
        b = !0, C(e.onLongPress, Q);
      }, w4), D(re)) {
        o.value > Sr ? O() : T(e.zoom);
        return;
      }
      v(j), S.prev = re;
    }
    function E(j) {
      const { offsetWidth: Q, offsetHeight: re } = j, { naturalWidth: ve, naturalHeight: I } = j.querySelector(`.${Bd("image")}`);
      return {
        width: Q,
        height: re,
        imageRadio: I / ve,
        rootRadio: re / Q,
        zoom: W(e.zoom)
      };
    }
    function M(j) {
      const { zoom: Q, imageRadio: re, rootRadio: ve, width: I, height: K } = E(j);
      if (!re)
        return 0;
      const pe = re > ve ? K / re : I;
      return Math.max(0, (Q * pe - I) / 2) / Q;
    }
    function N(j) {
      const { zoom: Q, imageRadio: re, rootRadio: ve, width: I, height: K } = E(j);
      if (!re)
        return 0;
      const pe = re > ve ? K : I * re;
      return Math.max(0, (Q * pe - K) / 2) / Q;
    }
    function H(j) {
      if (!S.prev)
        return;
      h(j);
      const Q = j.currentTarget;
      if (d.value > il && window.clearTimeout(k), o.value > Sr) {
        const re = M(Q), ve = N(Q);
        t.value = $n(t.value + u.value, -re, re), r.value = $n(r.value + c.value, -ve, ve);
      }
      S.prev = Q;
    }
    function z() {
      if (o.value > Sr) {
        O(), setTimeout(() => C(e["onUpdate:show"], !1), Id);
        return;
      }
      C(e["onUpdate:show"], !1);
    }
    function J(j) {
      y.value && Me(j);
    }
    function q(j) {
      var Q;
      (Q = s.value) == null || Q.prev(j);
    }
    function oe(j) {
      var Q;
      (Q = s.value) == null || Q.next(j);
    }
    function ye(j, Q) {
      var re;
      (re = s.value) == null || re.to(j, Q);
    }
    function Te(j) {
      j <= Sr ? O() : T(j);
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
      n: Bd,
      classes: b4,
      toNumber: W,
      handleTouchstart: Y,
      handleTouchmove: H,
      handleTouchend: R,
      handleTouchcancel: V,
      close: z,
      prev: q,
      next: oe,
      to: ye,
      zoom: Te
    };
  }
});
nh.render = C4;
var pr = nh, S4 = Object.defineProperty, P4 = Object.defineProperties, O4 = Object.getOwnPropertyDescriptors, Ad = Object.getOwnPropertySymbols, z4 = Object.prototype.hasOwnProperty, E4 = Object.prototype.propertyIsEnumerable, Md = (e, n, o) => n in e ? S4(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Pr = (e, n) => {
  for (var o in n || (n = {}))
    z4.call(n, o) && Md(e, o, n[o]);
  if (Ad)
    for (var o of Ad(n))
      E4.call(n, o) && Md(e, o, n[o]);
  return e;
}, Nd = (e, n) => P4(e, O4(n));
let Oo, Mt = {};
function T4(e = {}) {
  return sn(e) ? Nd(Pr({}, Mt), { images: [e] }) : Fe(e) ? Nd(Pr({}, Mt), { images: e }) : Pr(Pr({}, Mt), e);
}
function Wo(e) {
  if (!no())
    return;
  Wo.close();
  const n = T4(e), o = xe(n);
  o.teleport = "body", Oo = o;
  const { unmountInstance: t } = $t(pr, o, {
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
  Mt = e;
};
Wo.resetDefaultOptions = () => {
  Mt = {};
};
Wo.Component = pr;
ae(pr);
ae(pr, Wo);
le(Wo, eh);
const fD = pr;
var Xt = Wo;
const oh = {
  index: [Number, String]
}, th = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function B4() {
  const { bindChildren: e, length: n, childProviders: o } = kn(
    th
  );
  return {
    length: n,
    indexAnchors: o,
    bindIndexAnchors: e
  };
}
function D4() {
  const { parentProvider: e, index: n, bindParent: o } = wn(
    th
  );
  return Ln(!!o, "IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: o
  };
}
const { name: I4, n: A4, classes: M4 } = ne("index-anchor");
function N4(e, n) {
  return m(), we(wt(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: "anchorEl",
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode
  }, {
    default: ce(() => [
      L(
        "div",
        je({
          class: e.n()
        }, e.$attrs),
        [
          U(e.$slots, "default", {}, () => [
            De(
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
const rh = ee({
  name: I4,
  components: { VarSticky: bt },
  inheritAttrs: !1,
  props: oh,
  setup(e) {
    const n = w(!1), o = B(() => e.index), t = w(null), { index: r, indexBar: a, bindIndexBar: i } = D4(), { active: l, sticky: s, cssMode: u, stickyOffsetTop: c, zIndex: d } = a;
    i({
      index: r,
      name: o,
      setDisabled: h,
      getOffsetTop: v
    });
    function v() {
      return t.value ? t.value.$el ? t.value.$el.offsetTop : t.value.offsetTop : 0;
    }
    function h(g) {
      n.value = g;
    }
    return {
      n: A4,
      classes: M4,
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
rh.render = N4;
var gi = rh;
ae(gi);
le(gi, oh);
const pD = gi;
var is = gi;
const ah = {
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
var Vd = (e, n, o) => new Promise((t, r) => {
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
const { name: V4, n: R4, classes: L4 } = ne("index-bar"), F4 = ["onClick"];
function U4(e, n) {
  return m(), P(
    "div",
    {
      ref: "barEl",
      class: p(e.n())
    },
    [
      U(e.$slots, "default"),
      L(
        "ul",
        {
          class: p(e.n("anchor-list")),
          style: Z({ zIndex: e.toNumber(e.zIndex) + 2, display: e.hideList ? "none" : "block" })
        },
        [
          (m(!0), P(
            Ae,
            null,
            qe(e.anchorNameList, (o) => (m(), P("li", {
              key: o,
              class: p(e.classes(e.n("anchor-item"), [e.active === o, e.n("anchor-item--active")])),
              style: Z({ color: e.active === o && e.highlightColor ? e.highlightColor : void 0 }),
              onClick: (t) => e.anchorClick({ anchorName: o, manualCall: !0 })
            }, [
              U(e.$slots, "anchor-name", { anchorName: o }, () => [
                De(
                  se(o),
                  1
                  /* TEXT */
                )
              ])
            ], 14, F4))),
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
const ih = ee({
  name: V4,
  props: ah,
  setup(e) {
    const n = w(""), o = w(null), t = w([]), r = w(), a = B(() => e.sticky), i = B(() => e.stickyCssMode), l = B(() => en(e.stickyOffsetTop)), s = B(() => e.zIndex), { length: u, indexAnchors: c, bindIndexAnchors: d } = B4();
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
      () => Vd(this, null, function* () {
        yield bn(), t.value = c.filter(({ name: O }) => O.value != null).map(({ name: O }) => O.value);
      })
    ), yn(b), ua(S), yt(() => {
      v = !0, S();
    }), Fo(() => {
      !v || r.value === void 0 || (k({
        anchorName: r.value,
        options: { event: !1 }
      }), v = !1);
    }), d(h);
    function g(O, D) {
      const A = Rn(O) ? O.name.value : O;
      A === r.value || A === void 0 || (r.value = A, (D == null ? void 0 : D.event) !== !1 && C(e.onChange, A));
    }
    function y() {
      const { top: O } = nn(f), { top: D } = nn(o.value);
      return ho(f) - O + D;
    }
    function $() {
      const O = ho(f), D = f === window ? document.body.scrollHeight : f.scrollHeight, A = y();
      c.forEach((V, R) => {
        const Y = V.getOffsetTop(), E = O - Y + l.value - A, M = R === c.length - 1 ? D : c[R + 1].getOffsetTop() - V.getOffsetTop();
        V.setDisabled(!0), E >= 0 && E < M && n.value === "" && (V.setDisabled(!1), g(V));
      });
    }
    function k(O) {
      return Vd(this, arguments, function* ({ anchorName: D, manualCall: A = !1, options: V }) {
        if (A && C(e.onClick, D), D === r.value && !v)
          return;
        const R = c.find(({ name: H }) => D === H.value);
        if (!R)
          return;
        const Y = y(), M = R.getOffsetTop() - l.value + Y, N = tr(f);
        n.value = D, g(D, V), yield Vt(f, {
          left: N,
          top: M,
          animation: iv,
          duration: W(e.duration)
        }), yield bn(), n.value = "";
      });
    }
    function b() {
      f = No(o.value), f.addEventListener("scroll", $);
    }
    function S() {
      f && f.removeEventListener("scroll", $);
    }
    function T(O, D) {
      Ao(() => k({ anchorName: O, options: D }));
    }
    return {
      barEl: o,
      active: r,
      zIndex: s,
      anchorNameList: t,
      n: R4,
      classes: L4,
      toNumber: W,
      scrollTo: T,
      anchorClick: k
    };
  }
});
ih.render = U4;
var bi = ih;
ae(bi);
le(bi, ah);
const vD = bi;
var ls = bi;
const lh = {
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
}, { name: H4, n: j4, classes: Y4 } = ne("link");
function W4(e, n) {
  return m(), we(wt(e.tag), je(e.linkProps, {
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
      U(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "style", "onClick"]);
}
const sh = ee({
  name: H4,
  props: lh,
  setup(e) {
    const n = w(!1), o = B(() => {
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
      inMobile: Nt,
      n: j4,
      classes: Y4,
      handleClick: r,
      toSizeUnit: Oe
    };
  }
});
sh.render = W4;
var yi = sh;
ae(yi);
le(yi, lh);
const mD = yi;
var ss = yi;
const uh = {
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
}, ch = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function K4() {
  const { bindChildren: e, childProviders: n, length: o } = kn(
    ch
  );
  return {
    length: o,
    tabItemList: n,
    bindTabItem: e
  };
}
const dh = Symbol("TAB_ITEM_BIND_LIST_KEY");
function q4() {
  const { parentProvider: e, bindParent: n, index: o } = wn(
    ch
  );
  return Ln(!!n, "TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: o,
    tabsItems: e,
    bindTabsItems: n
  };
}
function X4() {
  const { childProviders: e, bindChildren: n, length: o } = kn(dh);
  return {
    length: o,
    lists: e,
    bindLists: n
  };
}
function G4() {
  const { parentProvider: e, bindParent: n, index: o } = wn(dh);
  return {
    index: o,
    tabItem: e,
    bindTabItem: n
  };
}
var Z4 = (e, n, o) => new Promise((t, r) => {
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
const { name: J4, n: Q4, classes: _4 } = ne("list");
function x4(e, n) {
  const o = _("var-loading"), t = Ye("ripple");
  return m(), P(
    "div",
    {
      ref: "listEl",
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      U(e.$slots, "default"),
      e.loading ? U(e.$slots, "loading", { key: 0 }, () => {
        var r;
        return [
          L(
            "div",
            {
              class: p(e.n("loading"))
            },
            [
              L(
                "div",
                {
                  class: p(e.n("loading-text"))
                },
                se((r = e.loadingText) != null ? r : (e.pt ? e.pt : e.t)("listLoadingText")),
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
      e.finished ? U(e.$slots, "finished", { key: 1 }, () => {
        var r;
        return [
          L(
            "div",
            {
              class: p(e.n("finished"))
            },
            se((r = e.finishedText) != null ? r : (e.pt ? e.pt : e.t)("listFinishedText")),
            3
            /* TEXT, CLASS */
          )
        ];
      }) : G("v-if", !0),
      e.error ? U(e.$slots, "error", { key: 2 }, () => {
        var r;
        return [
          Ve((m(), P(
            "div",
            {
              class: p(e.n("error")),
              onClick: n[0] || (n[0] = (...a) => e.load && e.load(...a))
            },
            [
              De(
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
      }) : G("v-if", !0),
      L(
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
const fh = ee({
  name: J4,
  directives: { Ripple: tn },
  components: { VarLoading: mt },
  props: uh,
  setup(e) {
    const n = w(null), o = w(null), { tabItem: t, bindTabItem: r } = G4(), { t: a } = so();
    let i;
    C(r, {}), t && fe(() => t.current.value, c), fe(() => [e.loading, e.error, e.finished], c), yn(() => {
      i = No(n.value), i.addEventListener("scroll", c), e.immediateCheck && c();
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
      return Z4(this, null, function* () {
        yield He(), !(e.loading || e.finished || e.error || (t == null ? void 0 : t.current.value) === !1 || !s()) && l();
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
      n: Q4,
      classes: _4
    };
  }
});
fh.render = x4;
var wi = fh;
ae(wi);
le(wi, uh);
const hD = wi;
var us = wi;
const eO = {
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
  name: nO,
  classes: oO,
  n: Rd
} = ne("loading-bar");
var tO = ee({
  name: nO,
  props: eO,
  setup(e) {
    return () => X("div", {
      class: oO(Rd(), [e.error, Rd("--error")]),
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
const Eu = 200;
let ph, vh, mh, hh, ki, Ld, gh = {};
const rO = {
  value: 0,
  opacity: 0,
  error: !1
}, ln = xe(rO);
function aO(e) {
  Object.assign(ln, e), gh = e;
}
const iO = () => {
  Object.keys(gh).forEach((e) => {
    ln[e] !== void 0 && (ln[e] = void 0);
  });
}, bh = () => {
  Ld || (Ld = !0, $t(tO, ln));
}, Tu = () => {
  ph = window.setTimeout(() => {
    ln.transitionDuration = void 0, !(ln.value >= 95) && (ln.value += ln.value < 70 ? Math.round(5 * Math.random()) : Math.random(), Tu());
  }, 200);
}, Bu = () => {
  window.clearTimeout(ph), window.clearTimeout(ki), window.clearTimeout(mh), window.clearTimeout(vh), window.clearTimeout(hh);
}, yh = () => {
  Bu(), ln.value = 100, ki = window.setTimeout(() => {
    ln.opacity = 0, hh = window.setTimeout(() => {
      ln.error = !1;
    }, 250);
  }, Eu + 100);
}, lO = () => {
  Bu(), ln.error = !1, ln.value = 0, ln.transitionDuration = 0, bh(), ki = window.setTimeout(() => {
    ln.opacity = 1;
  }, Eu), Tu();
}, sO = () => {
  var e;
  mh = window.setTimeout(yh, (e = ln.finishDelay) != null ? e : 0);
}, uO = () => {
  Bu(), ln.error = !0, ln.value === 100 && (ln.value = 0, ln.transitionDuration = 0), bh(), ki = window.setTimeout(() => {
    ln.opacity = 1;
  }, Eu), Tu(), vh = window.setTimeout(yh, 300);
}, wh = {
  start: lO,
  finish: sO,
  error: uO,
  setDefaultOptions: aO,
  resetDefaultOptions: iO
}, gD = wh;
var cs = wh;
const kh = {
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
var cO = Object.defineProperty, dO = Object.defineProperties, fO = Object.getOwnPropertyDescriptors, Fd = Object.getOwnPropertySymbols, pO = Object.prototype.hasOwnProperty, vO = Object.prototype.propertyIsEnumerable, Ud = (e, n, o) => n in e ? cO(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, mO = (e, n) => {
  for (var o in n || (n = {}))
    pO.call(n, o) && Ud(e, o, n[o]);
  if (Fd)
    for (var o of Fd(n))
      vO.call(n, o) && Ud(e, o, n[o]);
  return e;
}, hO = (e, n) => dO(e, fO(n));
const { name: gO, n: bO } = ne("locale-provider"), yO = ee({
  name: gO,
  props: kh,
  setup(e, { slots: n }) {
    const o = B(
      () => {
        var r;
        return Object.entries((r = e.messages) != null ? r : {}).reduce(
          (a, [i, l]) => (a[i] = hO(mO({}, l), {
            lang: i
          }), a),
          {}
        );
      }
    );
    O0({
      t
    });
    function t(r) {
      if (Go(o.value, e.locale) && Go(o.value[e.locale], r))
        return o.value[e.locale][r];
    }
    return () => Qt(
      e.tag,
      {
        class: bO()
      },
      C(n.default)
    );
  }
});
var $i = yO;
ae($i);
le($i, kh);
const bD = $i;
var ds = $i;
const $h = {
  label: {},
  value: {},
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  // internal
  option: Object
}, Ch = Symbol("SELECT_BIND_OPTION_KEY");
function wO() {
  const { length: e, childProviders: n, bindChildren: o } = kn(Ch);
  return {
    length: e,
    options: n,
    bindOptions: o
  };
}
function kO() {
  const { index: e, parentProvider: n, bindParent: o } = wn(Ch);
  return Ln(!!o, "Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: o
  };
}
const { name: $O, n: CO, classes: SO } = ne("option"), PO = ["tabindex"];
function OO(e, n) {
  const o = _("var-checkbox"), t = _("maybe-v-node"), r = _("var-hover-overlay"), a = Ye("ripple"), i = Ye("hover");
  return Ve((m(), P("div", {
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
    L(
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
    e.multiple ? (m(), we(o, {
      key: 0,
      ref: "checkbox",
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (l) => e.optionSelected = l),
      "checked-color": e.focusColor,
      disabled: e.disabled,
      onClick: n[1] || (n[1] = Xn(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, ["modelValue", "checked-color", "disabled", "onChange"])) : G("v-if", !0),
    U(e.$slots, "default", { selected: e.optionSelected }, () => [
      L(
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
  ], 46, PO)), [
    [a, { disabled: e.disabled || !e.ripple }],
    [i, e.handleHovering, "desktop"]
  ]);
}
const Sh = ee({
  name: $O,
  directives: { Ripple: tn, Hover: In },
  components: {
    VarCheckbox: ct,
    VarHoverOverlay: Fn,
    MaybeVNode: ar
  },
  props: $h,
  setup(e) {
    const n = w(), o = w(!1), t = w(!1), r = B(() => t.value), a = B(() => e.value), i = B(() => e.disabled), l = B(() => e.ripple), { select: s, bindSelect: u } = kO(), { multiple: c, focusColor: d, onSelect: f, computeLabel: v } = s, { hovering: h, handleHovering: g } = eo(), y = B(
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
    ), $ = {
      label: y,
      value: a,
      disabled: i,
      ripple: l,
      selected: r,
      sync: O
    };
    fe([() => e.label, () => e.value], v), u($), We(() => window, "keydown", b), We(() => window, "keyup", S);
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
      c.value && (t.value = !t.value), f($);
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
      n: CO,
      classes: SO,
      handleHovering: g,
      handleClick: k,
      handleSelect: T
    };
  }
});
Sh.render = OO;
var Ci = Sh;
ae(Ci);
le(Ci, $h);
const yD = Ci;
var la = Ci;
const Ph = {
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
  name: zO,
  n: Or
} = ne("overlay");
var Si = ee({
  name: zO,
  inheritAttrs: !1,
  props: Ph,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const {
      zIndex: t
    } = lr(() => e.show, 3), {
      onStackTop: r
    } = iu(() => e.show, t), {
      disabled: a
    } = xo();
    ir(() => e.show, () => e.lockScroll), We(() => window, "keydown", i);
    function i(c) {
      !r() || c.key !== "Escape" || !e.show || (C(e.onKeyEscape), e.closeOnKeyEscape && (Me(c), C(e["onUpdate:show"], !1)));
    }
    function l() {
      C(e.onClick), C(e["onUpdate:show"], !1);
    }
    function s() {
      return X("div", je({
        class: Or(),
        style: {
          zIndex: t.value - 2
        }
      }, o), [X("div", {
        class: Or("overlay"),
        style: {
          zIndex: t.value - 1
        },
        onClick: l
      }, null), X("div", {
        class: Or("content"),
        style: {
          zIndex: t.value
        }
      }, [C(n.default)])]);
    }
    function u() {
      return X(_e, {
        name: Or("--fade")
      }, {
        default: () => [e.show && s()]
      });
    }
    return () => {
      const {
        teleport: c
      } = e;
      return c ? X(io, {
        to: c,
        disabled: a.value
      }, {
        default: () => [u()]
      }) : u();
    };
  }
});
ae(Si);
le(Si, Ph);
const wD = Si;
var fs = Si;
const Oh = {
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
}, { name: EO, n: TO, classes: BO } = ne("pagination"), DO = ["item-mode", "onClick"];
function IO(e, n) {
  const o = _("var-icon"), t = _("var-input"), r = _("var-menu-option"), a = _("var-menu-select"), i = Ye("ripple");
  return m(), P(
    "ul",
    {
      class: p(e.n())
    },
    [
      Ve((m(), P(
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
          U(e.$slots, "prev", {}, () => [
            X(o, { name: "chevron-left" })
          ])
        ],
        2
        /* CLASS */
      )), [
        [i, { disabled: e.current <= 1 || e.disabled }]
      ]),
      e.simple ? (m(), P(
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
            onKeydown: n[3] || (n[3] = Mu((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
          }, null, 8, ["modelValue", "disabled"]),
          L("span", null, [
            De(
              " / " + se(e.pageCount) + " ",
              1
              /* TEXT */
            ),
            L(
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
      )) : (m(!0), P(
        Ae,
        { key: 1 },
        qe(e.pageList, (l, s) => Ve((m(), P("li", {
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
            se(l),
            1
            /* TEXT */
          )
        ], 10, DO)), [
          [i, { disabled: e.disabled }]
        ])),
        128
        /* KEYED_FRAGMENT */
      )),
      Ve((m(), P(
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
          U(e.$slots, "next", {}, () => [
            X(o, { name: "chevron-right" })
          ])
        ],
        2
        /* CLASS */
      )), [
        [i, { disabled: e.current >= e.pageCount || e.disabled }]
      ]),
      e.showSizeChanger ? (m(), we(a, {
        key: 2,
        modelValue: e.size,
        "onUpdate:modelValue": n[5] || (n[5] = (l) => e.size = l),
        placement: "cover-top",
        disabled: e.disabled
      }, {
        options: ce(() => [
          (m(!0), P(
            Ae,
            null,
            qe(e.sizeOption, (l, s) => (m(), we(r, {
              key: s,
              value: l,
              onClick: e.clickSize
            }, {
              default: ce(() => [
                De(
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
          L(
            "li",
            {
              class: p(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
            },
            [
              L(
                "div",
                {
                  class: p(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")]))
                },
                [
                  L(
                    "span",
                    null,
                    se(e.size) + se((e.pt ? e.pt : e.t)("paginationItem")) + " / " + se((e.pt ? e.pt : e.t)("paginationPage")),
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
      e.showQuickJumper && !e.simple ? (m(), P(
        "li",
        {
          key: 3,
          class: p(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
        },
        [
          De(
            se((e.pt ? e.pt : e.t)("paginationJump")) + " ",
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
            onKeydown: n[8] || (n[8] = Mu((l) => e.setPage("quick", e.quickJumperValue, l), ["enter"]))
          }, null, 8, ["modelValue", "disabled"])
        ],
        2
        /* CLASS */
      )) : G("v-if", !0),
      e.totalText ? (m(), P(
        "li",
        {
          key: 4,
          class: p(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
        },
        se(e.totalText),
        3
        /* TEXT, CLASS */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const zh = ee({
  name: EO,
  components: {
    VarMenuSelect: jt,
    VarMenuOption: dt,
    VarIcon: Ge,
    VarInput: Lt
  },
  directives: { Ripple: tn },
  props: Oh,
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
        let A = [];
        const { maxPagerCount: V, total: R, onChange: Y } = e, E = Math.ceil(W(R) / W(D)), M = T - (V - s.value) - 1;
        if (o.value = `${b}`, T - 2 > V) {
          if (O === void 0 || T !== E)
            for (let N = 2; N < V + 2; N++)
              A.push(N);
          if (b <= V && b < M) {
            A = [];
            for (let N = 1; N < V + 1; N++)
              A.push(N + 1);
            t.value = !0, r.value = !1;
          }
          if (b > V && b < M) {
            A = [];
            for (let N = 1; N < V + 1; N++)
              A.push(b + N - s.value);
            t.value = b === 2 && V === 1, r.value = !1;
          }
          if (b >= M) {
            A = [];
            for (let N = 1; N < V + 1; N++)
              A.push(T - (V - N) - 1);
            t.value = !1, r.value = !0;
          }
          A = [1, "...", ...A, "...", T];
        } else
          for (let N = 1; N <= T; N++)
            A.push(N);
        l.value = A, O != null && T > 0 && C(Y, b, S), C(e["onUpdate:current"], b), C(e["onUpdate:size"], S);
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
    function g(b, S) {
      if (!(b === a.value || e.disabled)) {
        if (b === "...") {
          a.value = S === 1 ? Math.max(a.value - e.maxPagerCount, 1) : Math.min(a.value + e.maxPagerCount, u.value);
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
        En(b) && (a.value = b);
      }
    }
    function y() {
      const b = $(a.value);
      o.value = String(b), a.value = b;
    }
    function $(b) {
      return b > u.value ? u.value : b < 1 ? 1 : b;
    }
    function k(b, S, T) {
      T.target.blur();
      const O = $(W(S));
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
      n: TO,
      classes: BO,
      getMode: h,
      isHideEllipsis: v,
      clickItem: g,
      clickSize: y,
      setPage: k,
      toNumber: W,
      formatElevation: dn
    };
  }
});
zh.render = IO;
var Pi = zh;
ae(Pi);
le(Pi, Oh);
const kD = Pi;
var ps = Pi;
const Eh = {
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
}, { name: AO, n: MO, classes: NO } = ne("paper");
function VO(e, n) {
  const o = Ye("ripple");
  return Ve((m(), P(
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
      U(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [o, { disabled: !e.ripple }]
  ]);
}
const Th = ee({
  name: AO,
  directives: { Ripple: tn },
  props: Eh,
  setup(e) {
    function n(o) {
      C(e.onClick, o);
    }
    return {
      n: MO,
      classes: NO,
      formatElevation: dn,
      toSizeUnit: Oe,
      handleClick: n
    };
  }
});
Th.render = VO;
var Oi = Th;
ae(Oi);
le(Oi, Eh);
const $D = Oi;
var vs = Oi, RO = Object.defineProperty, Hd = Object.getOwnPropertySymbols, LO = Object.prototype.hasOwnProperty, FO = Object.prototype.propertyIsEnumerable, jd = (e, n, o) => n in e ? RO(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, UO = (e, n) => {
  for (var o in n || (n = {}))
    LO.call(n, o) && jd(e, o, n[o]);
  if (Hd)
    for (var o of Hd(n))
      FO.call(n, o) && jd(e, o, n[o]);
  return e;
};
const Bh = UO({
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
])), { name: HO, n: jO, classes: YO } = ne("picker"), Yd = 300, WO = 15, Wd = 200, KO = 1e3;
let Kd = 0;
const qO = ["onTouchstartPassive", "onTouchmove", "onTouchend"], XO = ["onTransitionend"], GO = ["onClick"];
function ZO(e, n) {
  const o = _("var-button");
  return m(), we(
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
      default: ce(() => [
        L(
          "div",
          je({
            class: e.n()
          }, e.$attrs),
          [
            e.toolbar ? (m(), P(
              "div",
              {
                key: 0,
                class: p(e.n("toolbar"))
              },
              [
                U(e.$slots, "cancel", {}, () => [
                  X(o, {
                    class: p(e.n("cancel-button")),
                    "var-picker-cover": "",
                    text: "",
                    "text-color": e.cancelButtonTextColor,
                    onClick: e.cancel
                  }, {
                    default: ce(() => {
                      var t;
                      return [
                        De(
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
                U(e.$slots, "title", {}, () => {
                  var t;
                  return [
                    L(
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
                U(e.$slots, "confirm", {}, () => [
                  X(o, {
                    class: p(e.n("confirm-button")),
                    text: "",
                    "var-picker-cover": "",
                    "text-color": e.confirmButtonTextColor,
                    onClick: e.confirm
                  }, {
                    default: ce(() => {
                      var t;
                      return [
                        De(
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
            )) : G("v-if", !0),
            L(
              "div",
              {
                class: p(e.n("columns")),
                style: Z({ height: `${e.columnHeight}px` })
              },
              [
                (m(!0), P(
                  Ae,
                  null,
                  qe(e.scrollColumns, (t) => (m(), P("div", {
                    key: t.id,
                    class: p(e.n("column")),
                    onTouchstartPassive: (r) => e.handleTouchstart(r, t),
                    onTouchmove: Xn((r) => e.handleTouchmove(r, t), ["prevent"]),
                    onTouchend: (r) => e.handleTouchend(t)
                  }, [
                    L("div", {
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
                      (m(!0), P(
                        Ae,
                        null,
                        qe(t.column, (r, a) => (m(), P("div", {
                          key: e.getValue(r),
                          class: p(e.classes(e.n("option"), r.className)),
                          style: Z({ height: `${e.optionHeight}px` }),
                          onClick: (i) => e.handleClick(t, a)
                        }, [
                          L(
                            "div",
                            {
                              class: p(e.classes(e.n("text"), r.textClassName))
                            },
                            se(r[e.getOptionKey("text")]),
                            3
                            /* TEXT, CLASS */
                          )
                        ], 14, GO))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ], 46, XO)
                  ], 42, qO))),
                  128
                  /* KEYED_FRAGMENT */
                )),
                L(
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
                L(
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
const Dh = ee({
  name: HO,
  components: {
    VarButton: Bn,
    VarPopup: Mo
  },
  inheritAttrs: !1,
  props: Bh,
  setup(e) {
    const n = Gn(e, "modelValue"), o = w([]), t = B(() => W(e.columnsCount)), r = B(() => en(e.optionHeight)), a = B(() => en(e.optionCount)), i = B(() => a.value * r.value / 2 - r.value / 2), l = B(() => a.value * r.value), { prevY: s, moveY: u, dragging: c, startTouch: d, moveTouch: f, endTouch: v } = kt(), { t: h } = so();
    let g = [];
    D(), fe(() => e.columns, D, { deep: !0 }), fe(() => n.value, D);
    function y(I) {
      return {
        text: e.textKey,
        value: e.valueKey,
        children: e.childrenKey
      }[I];
    }
    function $(I) {
      var K;
      return (K = I[y("value")]) != null ? K : I[y("text")];
    }
    function k(I) {
      g = [...I];
    }
    function b(I) {
      return (e.columnsCount != null ? I.slice(0, t.value) : I).map((pe, Se) => {
        const Ue = {
          id: Kd++,
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
        }, Ne = n.value[Se], rn = Ue.column.findIndex((un) => Ne === $(un));
        return Ue.index = rn === -1 ? 0 : rn, N(Ue), Ue;
      });
    }
    function S(I) {
      const K = [];
      return T(K, I), K;
    }
    function T(I, K, pe = !0, Se = 1) {
      var Ue;
      if (K.length && (e.columnsCount == null || Se <= t.value)) {
        const Ne = {
          id: Kd++,
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
        if (I.push(Ne), pe) {
          const rn = n.value[I.length - 1], un = K.findIndex((Pn) => rn === $(Pn));
          Ne.index = un === -1 ? 0 : un;
        }
        N(Ne), T(
          I,
          (Ue = Ne.column[Ne.index][y("children")]) != null ? Ue : [],
          pe,
          Se + 1
        );
      }
    }
    function O(I) {
      var K;
      o.value.splice(o.value.indexOf(I) + 1), T(
        o.value,
        (K = I.column[I.index][y("children")]) != null ? K : [],
        !1,
        o.value.length + 1
      );
    }
    function D() {
      o.value = e.cascade ? S(e.columns) : b(e.columns);
      const { indexes: I } = M();
      k(I);
    }
    function A(I, K) {
      K.scrollEl = I;
    }
    function V(I) {
      C(e["onUpdate:show"], I);
    }
    function R(I) {
      const K = i.value - I.column.length * r.value, pe = r.value + i.value;
      I.translate = $n(I.translate, K, pe);
    }
    function Y(I, K) {
      const pe = Math.round((i.value - K) / r.value);
      return Cf(pe, I.column);
    }
    function E(I) {
      return I.translate = i.value - I.index * r.value, I.translate;
    }
    function M() {
      const I = [], K = [], pe = [];
      return o.value.forEach(({ column: Se, index: Ue }) => {
        const Ne = Se[Ue];
        I.push($(Ne)), K.push(Ue), pe.push(Ne);
      }), {
        values: I,
        indexes: K,
        options: pe
      };
    }
    function N(I, K = 0) {
      E(I), I.duration = K;
    }
    function H(I, K, pe) {
      I.translate += Math.abs(K / pe) / 3e-3 * (K < 0 ? -1 : 1);
    }
    function z(I, K) {
      c.value || (I.index = K, N(I, Wd));
    }
    function J(I, K) {
      K.touching = !0, K.translate = xi(K.scrollEl), d(I);
    }
    function q(I, K) {
      if (!K.touching)
        return;
      f(I), K.scrolling = !1, K.duration = 0, K.prevY = s.value, K.translate += u.value, R(K);
      const pe = performance.now();
      pe - K.momentumTime > Yd && (K.momentumTime = pe, K.momentumPrevY = K.translate);
    }
    function oe(I) {
      v(), I.touching = !1, I.prevY = 0;
      const K = I.translate - I.momentumPrevY, pe = performance.now() - I.momentumTime, Se = Math.abs(K) >= WO && pe <= Yd, Ue = I.translate;
      Se && H(I, K, pe), I.index = Y(I, I.translate), N(I, Se ? KO : Wd), I.scrolling = I.translate !== Ue, I.scrolling || j(I);
    }
    function ye(I) {
      I.scrolling = !1, j(I);
    }
    function Te() {
      const { indexes: I } = M();
      return I.every((K, pe) => K === g[pe]);
    }
    function j(I) {
      const { onChange: K, cascade: pe } = e;
      if (Te())
        return;
      pe && O(I);
      const Se = o.value.some((Pn) => Pn.scrolling), Ue = o.value.some((Pn) => Pn.touching);
      if (Se || Ue)
        return;
      const { values: Ne, indexes: rn, options: un } = M();
      k(rn), C(K, Ne, rn, un), n.value = Ne;
    }
    function Q() {
      if (e.cascade) {
        const I = o.value.find((K) => K.scrolling);
        I && (I.index = Y(I, xi(I.scrollEl)), I.scrolling = !1, N(I), O(I));
      } else
        o.value.forEach((I) => {
          I.index = Y(I, xi(I.scrollEl)), N(I);
        });
    }
    function re() {
      Q();
      const { values: I, indexes: K, options: pe } = M();
      k(K), C(e.onConfirm, I, K, pe);
    }
    function ve() {
      Q();
      const { values: I, indexes: K, options: pe } = M();
      k(K), C(e.onCancel, I, K, pe);
    }
    return {
      optionHeight: r,
      optionCount: a,
      scrollColumns: o,
      columnHeight: l,
      center: i,
      Transition: _e,
      pt: h,
      t: an,
      n: jO,
      classes: YO,
      setScrollEl: A,
      getOptionKey: y,
      getValue: $,
      handlePopupUpdateShow: V,
      handleTouchstart: J,
      handleTouchmove: q,
      handleTouchend: oe,
      handleTransitionend: ye,
      confirm: re,
      cancel: ve,
      handleClick: z
    };
  }
});
Dh.render = ZO;
var vr = Dh;
let st;
function Pt(e) {
  return new Promise((n) => {
    Pt.close();
    const o = Fe(e) ? { columns: e } : e, t = xe(o);
    t.dynamic = !0, t.teleport = "body", st = t;
    function r() {
      st === t && (st = null);
    }
    const { unmountInstance: a } = $t(vr, t, {
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
Pt.close = function() {
  if (st == null)
    return;
  const e = st;
  st = null, He().then(() => {
    e.show = !1;
  });
};
Pt.Component = vr;
ae(vr);
ae(vr, Pt);
le(Pt, Bh);
const CD = vr;
var ms = Pt;
const Ih = {
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
}, ot = 100, zr = 0, wo = 20, qd = 2 * Math.PI * wo, { name: JO, n: QO, classes: _O } = ne("progress"), xO = ["aria-valuenow"], ez = ["viewBox"], nz = { key: 0 }, oz = ["id"], tz = ["offset", "stop-color"], rz = ["d", "stroke-width", "stroke-dasharray"], az = ["d", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function iz(e, n) {
  return m(), P("div", {
    class: p(e.n()),
    role: "progressbar",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": e.indeterminate ? void 0 : e.mode === "linear" ? e.linearProps.value : e.circleProps.value
  }, [
    e.mode === "linear" ? (m(), P(
      "div",
      {
        key: 0,
        class: p(e.n("linear"))
      },
      [
        L(
          "div",
          {
            class: p(e.classes(e.n("linear-block"), [e.track, e.n("linear-background")])),
            style: Z({ height: e.toSizeUnit(e.lineWidth), background: e.trackColor })
          },
          [
            e.indeterminate ? (m(), P(
              "div",
              {
                key: 0,
                class: p(e.n("linear-indeterminate"))
              },
              [
                L(
                  "div",
                  {
                    class: p(e.classes(e.n(`linear--${e.type}`))),
                    style: Z({ background: e.progressColor })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ),
                L(
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
            )) : (m(), P(
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
        e.label ? (m(), P(
          "div",
          {
            key: 0,
            class: p(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
          },
          [
            U(e.$slots, "default", {}, () => [
              De(
                se(e.linearProps.roundValue),
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
    e.mode === "circle" ? (m(), P(
      "div",
      {
        key: 1,
        class: p(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
        style: Z({ width: e.toSizeUnit(e.size), height: e.toSizeUnit(e.size) })
      },
      [
        (m(), P("svg", {
          class: p(e.n("circle-svg")),
          viewBox: e.circleProps.viewBox
        }, [
          e.isPlainObject(e.color) ? (m(), P("defs", nz, [
            L("linearGradient", {
              id: e.id,
              x1: "100%",
              y1: "0%",
              x2: "0%",
              y2: "0%"
            }, [
              (m(!0), P(
                Ae,
                null,
                qe(e.linearGradientProgress, (o, t) => (m(), P("stop", {
                  key: t,
                  offset: o,
                  "stop-color": e.color[o]
                }, null, 8, tz))),
                128
                /* KEYED_FRAGMENT */
              ))
            ], 8, oz)
          ])) : G("v-if", !0),
          e.track ? (m(), P("path", {
            key: 1,
            class: p(e.n("circle-background")),
            d: e.circleProps.path,
            fill: "transparent",
            "stroke-width": e.circleProps.strokeWidth,
            "stroke-dasharray": e.CIRCUMFERENCE,
            style: Z({
              stroke: e.trackColor
            })
          }, null, 14, rz)) : G("v-if", !0),
          L("path", {
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
          }, null, 14, az)
        ], 10, ez)),
        e.label ? (m(), P(
          "div",
          {
            key: 0,
            class: p(e.classes(e.n("circle-label"), e.labelClass))
          },
          [
            U(e.$slots, "default", {}, () => [
              De(
                se(e.circleProps.roundValue),
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
  ], 10, xO);
}
const Ah = ee({
  name: JO,
  props: Ih,
  setup(e) {
    const n = Qf(), o = B(() => {
      const i = W(e.value), l = $n(i, zr, ot), s = $n(Math.round(i), zr, ot);
      return {
        width: `${l}%`,
        roundValue: `${s}%`,
        value: l
      };
    }), t = B(() => {
      const { size: i, lineWidth: l, value: s } = e, u = wo / (1 - en(l) / en(i)) * 2, c = `0 0 ${u} ${u}`, d = $n(Math.round(W(s)), zr, ot), f = `${(ot - d) / ot * qd}`, v = en(l) / en(i) * u, h = 0, g = -20, y = 0, $ = -2 * wo, k = `M ${u / 2} ${u / 2} m ${h} ${g} a ${wo} ${wo} 
        0 1 1 ${y} 40 a ${wo} ${wo} 0 1 1 0 ${$}`;
      return {
        strokeWidth: v,
        viewBox: c,
        strokeOffset: f,
        roundValue: `${d}%`,
        path: k,
        value: $n(W(s), zr, ot)
      };
    }), r = B(() => Rn(e.color) ? `url(#${n.value})` : e.color), a = B(
      () => Object.keys(e.color).sort((i, l) => parseFloat(i) - parseFloat(l))
    );
    return {
      id: n,
      linearProps: o,
      CIRCUMFERENCE: qd,
      RADIUS: wo,
      circleProps: t,
      progressColor: r,
      linearGradientProgress: a,
      n: QO,
      classes: _O,
      toSizeUnit: Oe,
      isPlainObject: Rn
    };
  }
});
Ah.render = iz;
var zi = Ah;
ae(zi);
le(zi, Ih);
const SD = zi;
var hs = zi;
const Mh = {
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
var lz = (e, n, o) => new Promise((t, r) => {
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
const { name: sz, n: Xd, classes: uz } = ne("pull-refresh"), Gd = 150;
function cz(e, n) {
  const o = _("var-icon");
  return m(), P(
    "div",
    {
      ref: "freshNode",
      class: p(e.n()),
      onTouchstart: n[0] || (n[0] = (...t) => e.handleTouchstart && e.handleTouchstart(...t)),
      onTouchend: n[1] || (n[1] = (...t) => e.handleTouchend && e.handleTouchend(...t)),
      onTouchcancel: n[2] || (n[2] = (...t) => e.handleTouchend && e.handleTouchend(...t))
    },
    [
      L(
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
      U(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const Nh = ee({
  name: sz,
  components: { VarIcon: Ge },
  props: Mh,
  setup(e) {
    const n = w(0), o = w(null), t = w(null), r = w(0), a = w("-125%"), i = w("arrow-down"), l = w("default"), s = w(!1), u = B(() => Math.abs(2 * n.value)), c = B(() => l.value === "success"), d = B(
      () => l.value !== "loading" && l.value !== "success" && !e.disabled
    ), f = B(() => ({
      transform: `translate3d(0px, ${sn(a.value) ? a.value : `${a.value}px`}, 0px) translate(-50%, 0)`,
      transition: s.value ? `transform ${e.animationDuration}ms` : void 0,
      background: c.value ? e.successBgColor : e.bgColor,
      color: c.value ? e.successColor : e.color
    })), { startTouch: v, moveTouch: h, endTouch: g, isReachTop: y } = kt();
    let $, k;
    fe(
      () => e.modelValue,
      (R) => {
        R === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
          a.value = n.value, V();
        }, W(e.successDuration)));
      }
    ), yn(A), We(o, "touchmove", O);
    function b(R) {
      if (i.value !== R)
        return i.value = R, new Promise((Y) => {
          window.setTimeout(Y, Gd);
        });
    }
    function S(R) {
      ("classList" in $ ? $ : document.body).classList[R](`${Xd()}--lock`);
    }
    function T(R) {
      if (v(R), n.value === 0) {
        const { width: Y } = nn(t.value);
        n.value = -(Y + Y * 0.25);
      }
      k = No(R.target);
    }
    function O(R) {
      if (h(R), !d.value || !k || k !== $ && ho(k) > 0 || ho($) > 0)
        return;
      y($) && Me(R), l.value !== "pulling" && (l.value = "pulling", r.value = R.touches[0].clientY), y($) && En(a.value) && a.value > n.value && S("add");
      const E = (R.touches[0].clientY - r.value) / 2 + n.value;
      a.value = E >= u.value ? u.value : E, b(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function D() {
      return lz(this, null, function* () {
        g(), d.value && (s.value = !0, W(a.value) >= u.value * 0.2 ? (yield b("refresh"), l.value = "loading", a.value = u.value * 0.3, C(e["onUpdate:modelValue"], !0), He(() => {
          C(e.onRefresh);
        }), S("remove")) : (l.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          s.value = !1, S("remove");
        }, W(e.animationDuration))), k = null);
      });
    }
    function A() {
      $ = e.target ? Cp(e.target, "PullRefresh") : No(o.value);
    }
    function V() {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, W(e.animationDuration));
    }
    return {
      ICON_TRANSITION: Gd,
      refreshStatus: l,
      freshNode: o,
      controlNode: t,
      iconName: i,
      controlStyle: f,
      isSuccess: c,
      n: Xd,
      classes: uz,
      handleTouchstart: T,
      handleTouchmove: O,
      handleTouchend: D
    };
  }
});
Nh.render = cz;
var Ei = Nh;
ae(Ei);
le(Ei, Mh);
const PD = Ei;
var gs = Ei;
const Vh = {
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
}, Rh = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function dz() {
  const { bindChildren: e, childProviders: n, length: o } = kn(
    Rh
  );
  return {
    length: o,
    radios: n,
    bindRadios: e
  };
}
function fz() {
  const { bindParent: e, parentProvider: n, index: o } = wn(Rh);
  return {
    index: o,
    radioGroup: n,
    bindRadioGroup: e
  };
}
const { name: pz, n: vz, classes: mz } = ne("radio"), hz = ["aria-checked"], gz = ["tabindex"];
function bz(e, n) {
  const o = _("var-icon"), t = _("var-hover-overlay"), r = _("var-form-details"), a = Ye("ripple"), i = Ye("hover");
  return m(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      L("div", je({
        role: "radio",
        "aria-checked": e.checked,
        class: e.n()
      }, e.$attrs, {
        onClick: n[3] || (n[3] = (...l) => e.handleClick && e.handleClick(...l))
      }), [
        Ve((m(), P("div", {
          ref: "action",
          class: p(
            e.classes(
              e.n("action"),
              [e.checked, e.n("--checked"), e.n("--unchecked")],
              [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")],
              [e.formDisabled || e.disabled, e.n("--disabled")]
            )
          ),
          tabindex: e.tabIndex,
          style: Z({ color: e.checked ? e.checkedColor : e.uncheckedColor }),
          onFocus: n[0] || (n[0] = (l) => e.isFocusing = !0),
          onBlur: n[1] || (n[1] = (l) => e.isFocusing = !1)
        }, [
          e.checked ? U(e.$slots, "checked-icon", { key: 0 }, () => [
            X(o, {
              class: p(e.n("icon")),
              "var-radio-cover": "",
              name: "radio-marked",
              size: e.iconSize
            }, null, 8, ["class", "size"])
          ]) : U(e.$slots, "unchecked-icon", { key: 1 }, () => [
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
        ], 46, gz)), [
          [a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }],
          [i, e.handleHovering, "desktop"]
        ]),
        e.$slots.default ? (m(), P(
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
            U(e.$slots, "default", { checked: e.checked })
          ],
          2
          /* CLASS */
        )) : G("v-if", !0)
      ], 16, hz),
      X(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Lh = ee({
  name: pz,
  directives: { Ripple: tn, Hover: In },
  components: {
    VarIcon: Ge,
    VarFormDetails: Tn,
    VarHoverOverlay: Fn
  },
  inheritAttrs: !1,
  props: Vh,
  setup(e) {
    const n = w(), o = w(!1), t = Gn(e, "modelValue"), r = B(() => t.value === e.checkedValue), { radioGroup: a, bindRadioGroup: i } = fz(), { hovering: l, handleHovering: s } = eo(), { form: u, bindForm: c } = Hn(), d = B(() => {
      const Y = (u == null ? void 0 : u.disabled.value) || e.disabled, E = r.value, M = a == null ? void 0 : a.hasChecked.value;
      if (!Y)
        return a && M && !E ? "-1" : "0";
    }), {
      errorMessage: f,
      validateWithTrigger: v,
      validate: h,
      // expose
      resetValidation: g
    } = Un(), y = {
      sync: D,
      validate: V,
      resetValidation: g,
      reset: A,
      isFocusing: B(() => o.value),
      // keyboard arrow move
      move() {
        n.value.focus(), n.value.click();
      },
      moveable() {
        return !(u != null && u.disabled.value) && !e.disabled && !(u != null && u.readonly.value) && !e.readonly;
      }
    };
    C(i, y), C(c, y), We(() => window, "keydown", $), We(() => window, "keyup", k);
    function $(Y) {
      if (!o.value)
        return;
      const { key: E } = Y;
      (E === "Enter" || E === " ") && Me(Y), E === "Enter" && n.value.click();
    }
    function k(Y) {
      o.value && Y.key === " " && (Me(Y), n.value.click());
    }
    function b(Y) {
      He(() => {
        const { validateTrigger: E, rules: M, modelValue: N } = e;
        v(E, Y, M, N);
      });
    }
    function S(Y) {
      const { checkedValue: E, onChange: M } = e;
      a && t.value === E || (t.value = Y, C(M, t.value), a == null || a.onToggle(E), b("onChange"));
    }
    function T(Y) {
      const { disabled: E, readonly: M, uncheckedValue: N, checkedValue: H, onClick: z } = e;
      u != null && u.disabled.value || E || (C(z, Y), !(u != null && u.readonly.value || M) && S(r.value ? N : H));
    }
    function O() {
      n.value.focus();
    }
    function D(Y) {
      const { checkedValue: E, uncheckedValue: M } = e, N = Y === E;
      return t.value = N ? E : M, N;
    }
    function A() {
      t.value = e.uncheckedValue, g();
    }
    function V() {
      return h(e.rules, e.modelValue);
    }
    function R(Y) {
      const { uncheckedValue: E, checkedValue: M } = e;
      ![E, M].includes(Y) && (Y = r.value ? E : M), S(Y);
    }
    return {
      action: n,
      isFocusing: o,
      checked: r,
      errorMessage: f,
      radioGroupErrorMessage: a == null ? void 0 : a.errorMessage,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      hovering: l,
      tabIndex: d,
      handleHovering: s,
      n: vz,
      classes: mz,
      handleClick: T,
      handleTextClick: O,
      toggle: R,
      reset: A,
      validate: V,
      resetValidation: g
    };
  }
});
Lh.render = bz;
var Ti = Lh;
ae(Ti);
le(Ti, Vh);
const OD = Ti;
var sa = Ti;
const Fh = {
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
}, { name: yz, n: wz, classes: kz } = ne("radio-group"), $z = ["aria-label"];
function Cz(e, n) {
  const o = _("maybe-v-node"), t = _("var-radio"), r = _("var-form-details");
  return m(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      L("div", {
        "aria-label": e.ariaLabel,
        role: "radiogroup",
        class: p(e.classes(e.n(), e.n(`--${e.direction}`)))
      }, [
        e.options.length ? (m(!0), P(
          Ae,
          { key: 0 },
          qe(e.options, (a) => (m(), we(t, {
            key: a[e.valueKey],
            "checked-value": a[e.valueKey],
            disabled: a.disabled
          }, {
            default: ce(({ checked: i }) => [
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
        U(e.$slots, "default")
      ], 10, $z),
      X(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Uh = ee({
  name: yz,
  components: { VarFormDetails: Tn, VarRadio: sa, MaybeVNode: ar },
  props: Fh,
  setup(e) {
    const { length: n, radios: o, bindRadios: t } = dz(), { bindForm: r } = Hn(), {
      errorMessage: a,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = Un(), u = B(() => a.value), c = w(!1), d = {
      onToggle: y,
      validate: $,
      reset: k,
      resetValidation: s,
      hasChecked: B(() => c.value),
      errorMessage: u
    };
    fe(() => e.modelValue, g), fe(() => n.value, g), C(r, d), t(d), We(() => window, "keydown", f);
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
      He(() => {
        const { validateTrigger: S, rules: T, modelValue: O } = e;
        i(S, b, T, O);
      });
    }
    function g() {
      o.forEach(({ sync: b }) => {
        b(e.modelValue) && (c.value = !0);
      });
    }
    function y(b) {
      C(e["onUpdate:modelValue"], b), C(e.onChange, b), h("onChange");
    }
    function $() {
      return l(e.rules, e.modelValue);
    }
    function k() {
      C(e["onUpdate:modelValue"], void 0), s();
    }
    return {
      errorMessage: a,
      n: wz,
      classes: kz,
      reset: k,
      validate: $,
      resetValidation: s,
      isFunction: mn
    };
  }
});
Uh.render = Cz;
var Bi = Uh;
ae(Bi);
le(Bi, Fh);
const zD = Bi;
var bs = Bi;
const Hh = {
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
  namespace: Ie(on, "namespace"),
  emptyIconNamespace: Ie(on, "namespace"),
  halfIconNamespace: Ie(on, "namespace"),
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
}, { name: Sz, n: Et } = ne("rate"), Pz = ["onClick"];
function Oz(e, n) {
  const o = _("var-icon"), t = _("var-hover-overlay"), r = _("var-form-details"), a = Ye("ripple"), i = Ye("hover");
  return m(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      L(
        "div",
        {
          class: p(e.n())
        },
        [
          (m(!0), P(
            Ae,
            null,
            qe(e.toNumber(e.count), (l) => Ve((m(), P("div", {
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
            ], 14, Pz)), [
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
const jh = ee({
  name: Sz,
  components: {
    VarIcon: Ge,
    VarFormDetails: Tn,
    VarHoverOverlay: Fn
  },
  directives: { Ripple: tn, Hover: In },
  props: Hh,
  setup(e) {
    const n = w(-1), { form: o, bindForm: t } = Hn(), { errorMessage: r, validateWithTrigger: a, validate: i, resetValidation: l } = Un(), { hovering: s } = eo();
    let u = W(e.modelValue);
    C(t, {
      reset: b,
      validate: g,
      resetValidation: l
    });
    function d(S) {
      const { count: T, gap: O } = e;
      return {
        color: v(S).color,
        marginRight: S !== W(T) ? Oe(O) : 0
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
        color: A,
        half: V,
        emptyColor: R,
        icon: Y,
        halfIcon: E,
        emptyIcon: M,
        namespace: N,
        halfIconNamespace: H,
        emptyIconNamespace: z
      } = e;
      let J = A;
      return (O || o != null && o.disabled.value) && (J = D), S <= T ? { color: J, name: Y, namespace: N } : V && S <= T + 0.5 ? { color: J, name: E, namespace: H } : {
        color: O || o != null && o.disabled.value ? D : R,
        name: M,
        namespace: z
      };
    }
    function h(S, T) {
      const { half: O, clearable: D } = e, { offsetWidth: A } = T.target;
      O && T.offsetX <= Math.floor(A / 2) && (S -= 0.5), u === S && D && (S = 0), u !== S && (C(e["onUpdate:modelValue"], S), C(e.onChange, S)), u = S;
    }
    function g() {
      return i(e.rules, e.modelValue);
    }
    function y() {
      He(() => a(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function $(S, T) {
      const { readonly: O, disabled: D } = e;
      O || D || o != null && o.disabled.value || o != null && o.readonly.value || (h(S, T), y());
    }
    function k(S) {
      return (T) => {
        n.value = S, s.value = T;
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
      createHoverHandler: k,
      reset: b,
      validate: g,
      resetValidation: l,
      toSizeUnit: Oe,
      toNumber: W,
      n: Et
    };
  }
});
jh.render = Oz;
var Di = jh;
ae(Di);
le(Di, Hh);
const ED = Di;
var ys = Di;
const Yh = {
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
}, zz = { viewBox: "-4 -4 32 32" };
function Ez(e, n) {
  return m(), P("svg", zz, n[0] || (n[0] = [
    L(
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
const Wh = ee({});
Wh.render = Ez;
var Tz = Wh;
const Bz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
};
function Dz(e, n) {
  return m(), P("svg", Bz, n[0] || (n[0] = [
    L(
      "path",
      { d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const Kh = ee({});
Kh.render = Dz;
var Iz = Kh;
const Az = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
};
function Mz(e, n) {
  return m(), P("svg", Az, n[0] || (n[0] = [
    L(
      "path",
      { d: "M11,9H13V7H11M11,20H13V11H11V20Z" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const qh = ee({});
qh.render = Mz;
var Nz = qh;
const Vz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
};
function Rz(e, n) {
  return m(), P("svg", Vz, n[0] || (n[0] = [
    L(
      "path",
      { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const Xh = ee({});
Xh.render = Rz;
var Lz = Xh;
const { n: Fz, classes: Uz } = ne("result");
function Hz(e, n) {
  return m(), P(
    Ae,
    null,
    [
      L(
        "span",
        {
          class: p(e.n("success-cover-left"))
        },
        null,
        2
        /* CLASS */
      ),
      L(
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
      L(
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
      L(
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
      L(
        "span",
        {
          class: p(e.n("success-line-fix"))
        },
        null,
        2
        /* CLASS */
      ),
      L(
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
      n: Fz,
      classes: Uz
    };
  }
});
Gh.render = Hz;
var jz = Gh;
const Yz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
};
function Wz(e, n) {
  return m(), P("svg", Yz, n[0] || (n[0] = [
    L(
      "path",
      { d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const Zh = ee({});
Zh.render = Wz;
var Kz = Zh;
const { name: qz, n: Xz, classes: Gz } = ne("result");
function Zz(e, n) {
  return m(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      U(e.$slots, "image", {}, () => [
        e.type ? (m(), P(
          "div",
          {
            key: 0,
            class: p(e.n("image-container"))
          },
          [
            L(
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
                (m(), we(wt(e.type), {
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
      U(e.$slots, "title", {}, () => [
        e.title ? (m(), P(
          "div",
          {
            key: 0,
            class: p(e.n("title"))
          },
          se(e.title),
          3
          /* TEXT, CLASS */
        )) : G("v-if", !0)
      ]),
      U(e.$slots, "description", {}, () => [
        e.description ? (m(), P(
          "div",
          {
            key: 0,
            class: p(e.n("description"))
          },
          se(e.description),
          3
          /* TEXT, CLASS */
        )) : G("v-if", !0)
      ]),
      e.$slots.footer ? (m(), P(
        "div",
        {
          key: 0,
          class: p(e.n("footer"))
        },
        [
          U(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Jh = ee({
  name: qz,
  components: {
    Info: Nz,
    Success: jz,
    Warning: Kz,
    Error: Iz,
    Question: Lz,
    Empty: Tz
  },
  props: Yh,
  setup(e) {
    const n = B(
      () => `calc(${e.imageSize ? Oe(e.imageSize) : "var(--result-image-size)"} * 0.9)`
    ), o = B(
      () => `calc(${e.imageSize ? Oe(e.imageSize) : "var(--result-image-size)"} * 0.05)`
    );
    return {
      circleSize: n,
      borderSize: o,
      n: Xz,
      classes: Gz
    };
  }
});
Jh.render = Zz;
var Ii = Jh;
ae(Ii);
le(Ii, Yh);
const TD = Ii;
var ws = Ii;
const Qh = {
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
}, { name: Jz, n: Qz, classes: _z } = ne("row");
function xz(e, n) {
  return m(), P(
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
      U(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const _h = ee({
  name: Jz,
  props: Qh,
  setup(e) {
    const n = B(
      () => Fe(e.gutter) ? e.gutter.map((r) => en(r) / 2) : [0, en(e.gutter) / 2]
    ), { bindCols: o } = NC();
    o({ average: n });
    function t(r) {
      C(e.onClick, r);
    }
    return {
      average: n,
      n: Qz,
      classes: _z,
      handleClick: t,
      padStartFlex: Zr
    };
  }
});
_h.render = xz;
var Ai = _h;
ae(Ai);
le(Ai, Qh);
const BD = Ai;
var ks = Ai, e2 = Object.defineProperty, Zd = Object.getOwnPropertySymbols, n2 = Object.prototype.hasOwnProperty, o2 = Object.prototype.propertyIsEnumerable, Jd = (e, n, o) => n in e ? e2(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, t2 = (e, n) => {
  for (var o in n || (n = {}))
    n2.call(n, o) && Jd(e, o, n[o]);
  if (Zd)
    for (var o of Zd(n))
      o2.call(n, o) && Jd(e, o, n[o]);
  return e;
};
const xh = t2({
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
])), { name: r2, n: a2, classes: i2 } = ne("select"), l2 = ["tabindex"];
function s2(e, n) {
  const o = _("maybe-v-node"), t = _("var-chip"), r = _("var-icon"), a = _("var-field-decorator"), i = _("var-option"), l = _("var-menu"), s = _("var-form-details");
  return m(), P("div", {
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
      menu: ce(() => [
        L(
          "div",
          {
            ref: "menuEl",
            class: p(e.classes(e.n("scroller"), e.n("$-elevation--3")))
          },
          [
            e.options.length ? (m(!0), P(
              Ae,
              { key: 0 },
              qe(e.options, (u) => (m(), we(i, {
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
            U(e.$slots, "default")
          ],
          2
          /* CLASS */
        )
      ]),
      default: ce(() => [
        X(
          a,
          To(xt({
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
              U(e.$slots, "clear-icon", { clear: u })
            ]),
            "append-icon": ce(() => [
              U(e.$slots, "append-icon")
            ]),
            default: ce(() => [
              L(
                "div",
                {
                  class: p(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                  style: Z({
                    textAlign: e.textAlign,
                    color: e.textColor
                  })
                },
                [
                  L(
                    "div",
                    {
                      class: p(e.n("label"))
                    },
                    [
                      e.isEmptyModelValue ? G("v-if", !0) : U(e.$slots, "selected", { key: 0 }, () => [
                        e.multiple ? (m(), P(
                          Ae,
                          { key: 0 },
                          [
                            e.chip ? (m(), P(
                              "div",
                              {
                                key: 0,
                                class: p(e.n("chips"))
                              },
                              [
                                (m(!0), P(
                                  Ae,
                                  null,
                                  qe(e.labels, (u) => (m(), we(t, {
                                    key: u,
                                    class: p(e.n("chip")),
                                    "var-select-cover": "",
                                    closeable: "",
                                    size: "small",
                                    type: e.errorMessage ? "danger" : void 0,
                                    onClick: n[0] || (n[0] = Xn(() => {
                                    }, ["stop"])),
                                    onClose: () => e.handleClose(u)
                                  }, {
                                    default: ce(() => [
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
                            )) : (m(), P(
                              "div",
                              {
                                key: 1,
                                class: p(e.n("values"))
                              },
                              [
                                (m(!0), P(
                                  Ae,
                                  null,
                                  qe(e.labels, (u, c) => (m(), P(
                                    Ae,
                                    { key: u },
                                    [
                                      X(o, { is: u }, null, 8, ["is"]),
                                      De(
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
                        )) : (m(), we(o, {
                          key: 1,
                          is: e.label
                        }, null, 8, ["is"]))
                      ])
                    ],
                    2
                    /* CLASS */
                  ),
                  e.enableCustomPlaceholder ? (m(), P(
                    "span",
                    {
                      key: 0,
                      class: p(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
                      style: Z({
                        color: e.placeholderColor
                      })
                    },
                    se(e.placeholder),
                    7
                    /* TEXT, CLASS, STYLE */
                  )) : G("v-if", !0),
                  U(e.$slots, "arrow-icon", {
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
              fn: ce(() => [
                U(e.$slots, "prepend-icon")
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
      onClick: n[2] || (n[2] = Xn(() => {
      }, ["stop"]))
    }, null, 8, ["error-message"])
  ], 42, l2);
}
const eg = ee({
  name: r2,
  components: {
    VarIcon: Ge,
    VarMenu: Ht,
    VarChip: xr,
    VarOption: la,
    VarFieldDecorator: Rt,
    VarFormDetails: Tn,
    MaybeVNode: ar
  },
  props: xh,
  setup(e) {
    const n = w(!1), o = w(!1), t = w(null), r = B(() => e.multiple), a = B(() => e.focusColor), i = B(() => Wn(e.modelValue)), l = B(() => e.disabled || e.readonly ? "" : "pointer"), s = w(0), { bindForm: u, form: c } = Hn(), { length: d, options: f, bindOptions: v } = wO(), { label: h, labels: g, computeLabel: y, getSelectedValue: $ } = nv({
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
    } = Un(), O = w(null), D = B(() => e.variant === "outlined" ? "bottom" : "cover-top"), A = B(() => {
      const { hint: I, blurColor: K, focusColor: pe } = e;
      if (!I)
        return k.value ? "var(--field-decorator-error-color)" : n.value ? pe || "var(--field-decorator-focus-color)" : K || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    }), V = B(() => !e.hint && Wn(e.modelValue)), R = {
      multiple: r,
      focusColor: a,
      computeLabel: y,
      onSelect: q,
      reset: ve,
      validate: re,
      resetValidation: T
    };
    fe(
      () => e.multiple,
      () => {
        Ln(
          e.multiple && Fe(e.modelValue),
          "Select",
          "The modelValue must be an array when multiple is true"
        );
      }
    ), v(R), We(() => window, "keydown", Y), We(() => window, "keyup", E), C(u, R);
    function Y(I) {
      const { disabled: K, readonly: pe } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || K || pe || !n.value)
        return;
      const { key: Se } = I;
      if (Se === " " && !o.value) {
        Me(I);
        return;
      }
      if (Se === "Escape" && o.value) {
        t.value.focus(), Me(I), o.value = !1;
        return;
      }
      if (Se === "Tab" && o.value) {
        t.value.focus(), Me(I), H();
        return;
      }
      if (Se === "Enter" && !o.value) {
        Me(I), o.value = !0;
        return;
      }
      (Se === "ArrowDown" || Se === "ArrowUp") && o.value && (Me(I), uu(t.value, O.value, Se));
    }
    function E(I) {
      const { disabled: K, readonly: pe } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || K || pe || o.value || !n.value)
        return;
      const { key: Se } = I;
      Se === " " && !o.value && (Me(I), o.value = !0);
    }
    function M(I) {
      He(() => {
        const { validateTrigger: K, rules: pe, modelValue: Se } = e;
        b(K, I, pe, Se);
      });
    }
    function N() {
      const { disabled: I, readonly: K, onFocus: pe } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || I || K || (s.value = en(e.offsetY), j(), C(pe), M("onFocus"));
    }
    function H() {
      const { disabled: I, readonly: K, onBlur: pe } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || I || K || (Q(), C(pe), M("onBlur"));
    }
    function z() {
      o.value || H();
    }
    function J() {
      n.value && H();
    }
    function q(I) {
      const { disabled: K, readonly: pe, multiple: Se, onChange: Ue } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || K || pe)
        return;
      const Ne = $(I);
      C(e["onUpdate:modelValue"], Ne), C(Ue, Ne), M("onChange"), Se || (t.value.focus(), bn().then(() => {
        o.value = !1;
      }));
    }
    function oe() {
      const { disabled: I, readonly: K, multiple: pe, clearable: Se, onClear: Ue } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || I || K || !Se)
        return;
      const Ne = pe ? [] : void 0;
      C(e["onUpdate:modelValue"], Ne), C(Ue, Ne), M("onClear");
    }
    function ye(I) {
      const { disabled: K, onClick: pe } = e;
      c != null && c.disabled.value || K || (C(pe, I), M("onClick"));
    }
    function Te(I) {
      const { disabled: K, readonly: pe, modelValue: Se, onClose: Ue } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || K || pe)
        return;
      const Ne = f.find(({ label: un }) => un.value === I), rn = Se.filter(
        (un) => {
          var Pn;
          return un !== ((Pn = Ne.value.value) != null ? Pn : Ne.label.value);
        }
      );
      C(e["onUpdate:modelValue"], rn), C(Ue, rn), M("onClose");
    }
    function j() {
      s.value = en(e.offsetY), n.value = !0;
    }
    function Q() {
      n.value = !1, o.value = !1;
    }
    function re() {
      return S(e.rules, e.modelValue);
    }
    function ve() {
      C(e["onUpdate:modelValue"], e.multiple ? [] : void 0), T();
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
      labels: g,
      isEmptyModelValue: i,
      menuEl: O,
      placement: D,
      cursor: l,
      placeholderColor: A,
      enableCustomPlaceholder: V,
      isFunction: mn,
      n: a2,
      classes: i2,
      handleFocus: N,
      handleBlur: H,
      handleClickOutside: J,
      handleClear: oe,
      handleClick: ye,
      handleClose: Te,
      handleRootBlur: z,
      reset: ve,
      validate: re,
      resetValidation: T,
      focus: j,
      blur: Q
    };
  }
});
eg.render = s2;
var Mi = eg;
ae(Mi);
le(Mi, xh);
const DD = Mi;
var $s = Mi;
const ng = {
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
}, { name: u2, n: c2, classes: d2 } = ne("skeleton");
function f2(e, n) {
  return m(), P(
    "div",
    {
      class: p(e.classes(e.n("$--box"), e.n()))
    },
    [
      e.loading ? G("v-if", !0) : (m(), P(
        "div",
        {
          key: 0,
          class: p(e.n("data"))
        },
        [
          U(e.$slots, "default")
        ],
        2
        /* CLASS */
      )),
      e.loading && !e.fullscreen ? (m(), P(
        "div",
        {
          key: 1,
          class: p(e.n("content"))
        },
        [
          e.card ? (m(), P(
            "div",
            {
              key: 0,
              class: p(e.n("card")),
              style: Z({ height: e.toSizeUnit(e.cardHeight) })
            },
            [
              L(
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
          e.avatar || e.title || e.toNumber(e.rows) > 0 ? (m(), P(
            "div",
            {
              key: 1,
              class: p(e.n("article"))
            },
            [
              e.avatar ? (m(), P(
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
                  L(
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
              e.title || e.toNumber(e.rows) > 0 ? (m(), P(
                "div",
                {
                  key: 1,
                  class: p(e.n("section"))
                },
                [
                  e.title ? (m(), P(
                    "div",
                    {
                      key: 0,
                      class: p(e.n("title")),
                      style: Z({ width: e.toSizeUnit(e.titleWidth) })
                    },
                    [
                      L(
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
                  (m(!0), P(
                    Ae,
                    null,
                    qe(e.toNumber(e.rows), (o, t) => (m(), P(
                      "div",
                      {
                        key: o,
                        class: p(e.n("row")),
                        style: Z({ width: e.toSizeUnit(e.rowsWidth[t]) })
                      },
                      [
                        L(
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
      e.loading && e.fullscreen ? (m(), P(
        "div",
        {
          key: 2,
          class: p(e.n("fullscreen")),
          style: Z({ zIndex: e.toNumber(e.fullscreenZIndex) })
        },
        [
          L(
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
const og = ee({
  name: u2,
  props: ng,
  setup: () => ({
    n: c2,
    classes: d2,
    toSizeUnit: Oe,
    toNumber: W
  })
});
og.render = f2;
var Ni = og;
ae(Ni);
le(Ni, ng);
const ID = Ni;
var Cs = Ni, cn = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(cn || {});
const tg = {
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
}, { name: p2, n: Qd, classes: v2 } = ne("slider"), m2 = ["tabindex", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-disabled", "aria-valuetext", "onTouchstart", "onFocusin", "onFocusout"];
function h2(e, n) {
  const o = _("var-hover-overlay"), t = _("var-form-details"), r = Ye("hover");
  return m(), P(
    "div",
    {
      class: p(e.classes(e.n(e.direction), e.n("$--box")))
    },
    [
      L(
        "div",
        {
          ref: "sliderEl",
          class: p(e.classes(e.n(`${e.direction}-block`), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(`${e.direction}--error`)])),
          onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
        },
        [
          L(
            "div",
            {
              class: p(e.n(`${e.direction}-track`))
            },
            [
              L(
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
              L(
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
          (m(!0), P(
            Ae,
            null,
            qe(e.thumbList, (a) => (m(), P("div", {
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
              onTouchstart: Xn((i) => e.start(i, a.enumValue), ["stop"]),
              onFocusin: (i) => e.handleFocus(a),
              onFocusout: (i) => e.handleBlur(a)
            }, [
              U(e.$slots, "button", {
                currentValue: a.text
              }, () => [
                Ve(L(
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
                L(
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
                L(
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
                    L(
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
            ], 46, m2))),
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
const rg = ee({
  name: p2,
  components: {
    VarFormDetails: Tn,
    VarHoverOverlay: Fn
  },
  directives: { Hover: In },
  props: tg,
  setup(e) {
    const n = w(0), o = w(null), t = w(!1), r = B(() => W(e.max) - W(e.min)), a = B(() => n.value / r.value * W(e.step)), i = B(() => e.disabled || (f == null ? void 0 : f.disabled.value)), l = B(() => e.readonly || (f == null ? void 0 : f.readonly.value)), s = B(() => e.direction === "vertical"), u = w(!1), c = w(!1), { bindForm: d, form: f } = Hn(), { errorMessage: v, validateWithTrigger: h, validate: g, resetValidation: y } = Un(), { hovering: $, handleHovering: k } = eo(), { hovering: b, handleHovering: S } = eo(), T = B(() => {
      const { modelValue: te, range: de } = e;
      let ke = [];
      return de && Fe(te) ? ke = [
        {
          value: J(te[0]),
          enumValue: cn.First,
          text: q(te[0]),
          hovering: $.value,
          focusing: u.value,
          handleHovering: k,
          handleFocusing(Be) {
            u.value = Be;
          }
        },
        {
          value: J(te[1]),
          enumValue: cn.Second,
          text: q(te[1]),
          hovering: b.value,
          focusing: c.value,
          handleHovering: S,
          handleFocusing(Be) {
            c.value = Be;
          }
        }
      ] : En(te) && (ke = [
        {
          value: J(te),
          enumValue: cn.First,
          text: q(te),
          hovering: $.value,
          focusing: u.value,
          handleHovering: k,
          handleFocusing(Be) {
            u.value = Be;
          }
        }
      ]), ke;
    }), O = B(() => {
      const { activeColor: te, range: de, modelValue: ke } = e, Be = de && Fe(ke) ? J(Math.min(ke[0], ke[1])) : 0, Qe = de && Fe(ke) ? J(Math.max(ke[0], ke[1])) - Be : J(ke);
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
    }), D = xe({
      [cn.First]: E(),
      [cn.Second]: E()
    });
    let A;
    C(d, {
      reset: rn,
      validate: Y,
      resetValidation: y
    }), fe([() => e.modelValue, () => e.step], ([te, de]) => {
      !Se() || !Ue() || t.value || Ne(te, W(de));
    }), fe(n, () => Ne()), yn(() => {
      !Se() || !Ue() || R();
    }), ua(re), We(() => window, "keydown", Pn), lo(R);
    function R() {
      n.value = o.value[s.value ? "offsetHeight" : "offsetWidth"];
    }
    function Y() {
      return g(e.rules, e.modelValue);
    }
    function E() {
      return {
        startPosition: 0,
        currentOffset: 0,
        active: !1,
        percentValue: 0
      };
    }
    function M() {
      He(() => h(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function N(te) {
      const de = te.currentTarget;
      return de ? s.value ? n.value - (te.clientY - nn(de).top) : te.clientX - ny(de) : 0;
    }
    function H(te) {
      return {
        [s.value ? "bottom" : "left"]: `${te.value}%`,
        zIndex: D[te.enumValue].active ? 1 : void 0
      };
    }
    function z(te) {
      return e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : D[te].active;
    }
    function J(te) {
      const { min: de, max: ke } = e;
      return te < W(de) ? 0 : te > W(ke) ? 100 : (te - W(de)) / r.value * 100;
    }
    function q(te) {
      if (!En(te))
        return 0;
      const de = $n(te, W(e.min), W(e.max));
      return parseInt(`${de}`, 10) === de ? de : W(de.toPrecision(5));
    }
    function oe(te, de) {
      i.value || de.handleHovering(te);
    }
    function ye(te) {
      C(e.onChange, te), C(e["onUpdate:modelValue"], te), M();
    }
    function Te(te, de) {
      let ke = [];
      const { step: Be, range: Qe, modelValue: ie, min: $e } = e, ze = W(Be), Re = Math.round(te / a.value), Le = Re * ze + W($e), fn = D[de].percentValue * ze + W($e);
      if (D[de].percentValue = Re, Qe && Fe(ie) && (ke = de === cn.First ? [Le, ie[1]] : [ie[0], Le]), fn !== Le) {
        const hn = Qe ? ke.map((gn) => q(gn)) : q(Le);
        ye(hn);
      }
    }
    function j(te) {
      if (!e.range)
        return cn.First;
      const de = D[cn.First].percentValue * a.value, ke = D[cn.Second].percentValue * a.value, Be = Math.abs(te - de), Qe = Math.abs(te - ke);
      return Be <= Qe ? cn.First : cn.Second;
    }
    function Q() {
      document.addEventListener("touchmove", I, { passive: !1 }), document.addEventListener("touchend", K), document.addEventListener("touchcancel", K);
    }
    function re() {
      document.removeEventListener("touchmove", I), document.removeEventListener("touchend", K), document.removeEventListener("touchcancel", K);
    }
    function ve(te, de) {
      if (R(), i.value || (D[de].active = !0), A = de, Q(), i.value || l.value)
        return;
      C(e.onStart), t.value = !0;
      const { clientX: ke, clientY: Be } = te.touches[0];
      D[de].startPosition = s.value ? Be : ke;
    }
    function I(te) {
      if (Me(te), i.value || l.value || !t.value)
        return;
      const { startPosition: de, currentOffset: ke } = D[A], { clientX: Be, clientY: Qe } = te.touches[0];
      let ie = (s.value ? de - Qe : Be - de) + ke;
      ie <= 0 ? ie = 0 : ie >= n.value && (ie = n.value), Te(ie, A);
    }
    function K() {
      re();
      const { range: te, modelValue: de, onEnd: ke, step: Be, min: Qe } = e;
      if (i.value || (D[A].active = !1), i.value || l.value)
        return;
      let ie = [];
      D[A].currentOffset = D[A].percentValue * a.value;
      const $e = D[A].percentValue * W(Be) + W(Qe);
      te && Fe(de) && (ie = A === cn.First ? [$e, de[1]] : [de[0], $e]), C(ke, te ? ie : $e), t.value = !1;
    }
    function pe(te) {
      if (i.value || l.value || te.target.closest(`.${Qd("thumb")}`))
        return;
      const de = N(te), ke = j(de);
      A = ke, Te(de, ke), K();
    }
    function Se() {
      return W(e.step) <= 0 ? (r0("Slider", '"step" should be > 0'), !1) : !0;
    }
    function Ue() {
      const { range: te, modelValue: de } = e;
      return te && !Fe(de) ? (lt("Slider", '"modelValue" should be an Array'), !1) : !te && Fe(de) ? (lt("Slider", '"modelValue" should be a Number'), !1) : te && Fe(de) && de.length < 2 ? (lt("Slider", '"modelValue" should have two value'), !1) : !0;
    }
    function Ne(te = e.modelValue, de = W(e.step)) {
      const ke = (Be) => {
        const { min: Qe, max: ie } = e;
        return Be < W(Qe) ? 0 : Be > W(ie) ? r.value / de : (Be - W(Qe)) / de;
      };
      e.range && Fe(te) ? (D[cn.First].percentValue = ke(te[0]), D[cn.First].currentOffset = D[cn.First].percentValue * a.value, D[cn.Second].percentValue = ke(te[1]), D[cn.Second].currentOffset = D[cn.Second].percentValue * a.value) : En(te) && (D[cn.First].currentOffset = ke(te) * a.value);
    }
    function rn() {
      const te = e.range ? [0, 0] : 0;
      C(e["onUpdate:modelValue"], te), y();
    }
    function un(te, de) {
      const ke = W(e.step);
      if (Fe(de)) {
        const Be = de[0] + (u.value ? te * ke : 0), Qe = de[1] + (c.value ? te * ke : 0);
        return [Be, Qe].map(q);
      }
      return q(de + te * ke);
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
      thumbsProps: D,
      thumbList: T,
      handleFocus: me,
      handleBlur: Ke,
      n: Qd,
      classes: v2,
      thumbStyle: H,
      hover: oe,
      toSizeUnit: Oe,
      toNumber: W,
      showLabel: z,
      start: ve,
      move: I,
      end: K,
      handleClick: pe
    };
  }
});
rg.render = h2;
var Vi = rg;
ae(Vi);
le(Vi, tg);
const AD = Vi;
var Ss = Vi, g2 = Object.defineProperty, b2 = Object.defineProperties, y2 = Object.getOwnPropertyDescriptors, _d = Object.getOwnPropertySymbols, w2 = Object.prototype.hasOwnProperty, k2 = Object.prototype.propertyIsEnumerable, xd = (e, n, o) => n in e ? g2(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, $2 = (e, n) => {
  for (var o in n || (n = {}))
    w2.call(n, o) && xd(e, o, n[o]);
  if (_d)
    for (var o of _d(n))
      k2.call(n, o) && xd(e, o, n[o]);
  return e;
}, C2 = (e, n) => b2(e, y2(n));
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
  loadingType: Ie(uo, "type"),
  loadingSize: Ie(uo, "size"),
  loadingRadius: Ie(uo, "radius"),
  loadingColor: C2($2({}, Ie(uo, "color")), {
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
}, { n: S2, classes: P2 } = ne("snackbar"), O2 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function z2(e, n) {
  const o = _("var-icon"), t = _("var-loading");
  return Ve((m(), P(
    "div",
    {
      class: p(e.n()),
      style: Z({ pointerEvents: e.isForbidClick ? "auto" : "none", zIndex: e.zIndex })
    },
    [
      L(
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
          L(
            "div",
            {
              class: p([e.n("content"), e.contentClass])
            },
            [
              U(e.$slots, "default", {}, () => [
                De(
                  se(e.content),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          ),
          e.iconName || e.type === "loading" || e.$slots.icon ? (m(), P(
            "div",
            {
              key: 0,
              class: p(e.n("icon"))
            },
            [
              e.iconName ? (m(), we(o, {
                key: 0,
                name: e.iconName
              }, null, 8, ["name"])) : G("v-if", !0),
              e.type === "loading" ? (m(), we(t, {
                key: 1,
                type: e.loadingType,
                size: e.loadingSize,
                color: e.loadingColor,
                radius: e.loadingRadius
              }, null, 8, ["type", "size", "color", "radius"])) : G("v-if", !0),
              U(e.$slots, "icon")
            ],
            2
            /* CLASS */
          )) : G("v-if", !0),
          e.$slots.action ? (m(), P(
            "div",
            {
              key: 1,
              class: p(e.n("action"))
            },
            [
              U(e.$slots, "action")
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
    [xn, e.show]
  ]);
}
const ag = ee({
  name: "VarSnackbarCore",
  components: {
    VarLoading: mt,
    VarIcon: Ge
  },
  props: Du,
  setup(e) {
    const n = w(null), { zIndex: o } = lr(() => e.show, 1);
    ir(
      () => e.show,
      () => e.lockScroll
    );
    const t = B(() => {
      const { type: i, forbidClick: l } = e;
      return i === "loading" || l;
    }), r = B(() => e.type ? O2[e.type] : "");
    function a() {
      n.value = setTimeout(() => {
        e.type !== "loading" && C(e["onUpdate:show"], !1);
      }, e.duration);
    }
    return fe(
      () => e.show,
      (i) => {
        i ? (C(e.onOpen), a()) : (clearTimeout(n.value), C(e.onClose));
      }
    ), fe(
      () => e._update,
      () => {
        clearTimeout(n.value), a();
      }
    ), yn(() => {
      e.show && (C(e.onOpen), a());
    }), {
      SNACKBAR_TYPE: sg,
      zIndex: o,
      iconName: r,
      isForbidClick: t,
      n: S2,
      classes: P2,
      formatElevation: dn
    };
  }
});
ag.render = z2;
var ig = ag;
const { name: E2, n: T2 } = ne("snackbar");
function B2(e, n) {
  const o = _("var-snackbar-core");
  return m(), we(io, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [
    X(_e, {
      name: `${e.n()}-fade`,
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed
    }, {
      default: ce(() => [
        X(o, je(e.$props, {
          class: e.n("transition")
        }), Xo({
          default: ce(() => [
            U(e.$slots, "default")
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots.icon ? {
            name: "icon",
            fn: ce(() => [
              U(e.$slots, "icon")
            ]),
            key: "0"
          } : void 0,
          e.$slots.action ? {
            name: "action",
            fn: ce(() => [
              U(e.$slots, "action")
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
const lg = ee({
  name: E2,
  components: { VarSnackbarCore: ig },
  props: Du,
  setup() {
    const { disabled: e } = xo();
    return {
      disabled: e,
      n: T2
    };
  }
});
lg.render = B2;
var Ri = lg, D2 = Object.defineProperty, ef = Object.getOwnPropertySymbols, I2 = Object.prototype.hasOwnProperty, A2 = Object.prototype.propertyIsEnumerable, nf = (e, n, o) => n in e ? D2(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Gt = (e, n) => {
  for (var o in n || (n = {}))
    I2.call(n, o) && nf(e, o, n[o]);
  if (ef)
    for (var o of ef(n))
      A2.call(n, o) && nf(e, o, n[o]);
  return e;
};
const sg = ["loading", "success", "warning", "info", "error"];
let of = 0, Ps = !1, ug, Zt = !1;
const cg = {
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
let qn = xe([]), Iu = cg;
const M2 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, ll = (e) => () => mn(e) ? e() : e, N2 = {
  setup() {
    return () => {
      const e = qn.map(({
        id: n,
        reactiveSnackOptions: o,
        _update: t
      }) => {
        const r = document.querySelector(".var-transition-group");
        o.forbidClick || o.type === "loading" ? r.classList.add("var-pointer-auto") : r.classList.remove("var-pointer-auto");
        const a = Gt({
          position: Zt ? "relative" : "absolute"
        }, H2(o.position)), {
          content: i,
          icon: l,
          action: s
        } = o, u = {
          default: ll(i),
          icon: ll(l),
          action: ll(s)
        };
        return X(ig, je(o, {
          key: n,
          style: a,
          "data-id": n,
          _update: t,
          show: o.show,
          "onUpdate:show": (c) => o.show = c
        }), u);
      });
      return X(Qg, je(M2, {
        style: {
          zIndex: Vn.zIndex
        },
        onAfterEnter: V2,
        onAfterLeave: R2
      }), {
        default: () => [e]
      });
    };
  }
}, ao = function(e) {
  const n = F2(e), o = xe(Gt(Gt({}, Iu), n));
  o.show = !0, Ps || (Ps = !0, ug = $t(N2).unmountInstance);
  const {
    length: t
  } = qn, r = {
    id: of++,
    reactiveSnackOptions: o
  };
  if (t === 0 || Zt)
    L2(r);
  else {
    const a = `update-${of}`;
    U2(o, a);
  }
  return {
    clear() {
      !Zt && qn.length ? qn[0].reactiveSnackOptions.show = !1 : o.show = !1;
    }
  };
};
sg.forEach((e) => {
  ao[e] = (n) => (Rn(n) ? n.type = e : n = {
    content: n,
    type: e
  }, ao(n));
});
ao.allowMultiple = function(e = !1) {
  e !== Zt && (qn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Zt = e);
};
ao.clear = function() {
  qn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
ao.setDefaultOptions = function(e) {
  Iu = e;
};
ao.resetDefaultOptions = function() {
  Iu = cg;
};
function V2(e) {
  const n = e.getAttribute("data-id"), o = qn.find((t) => t.id === W(n));
  o && C(o.reactiveSnackOptions.onOpened);
}
function R2(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), o = qn.find((r) => r.id === W(n));
  o && (o.animationEnd = !0, C(o.reactiveSnackOptions.onClosed)), qn.every((r) => r.animationEnd) && (C(ug), qn = xe([]), Ps = !1);
}
function L2(e) {
  qn.push(e);
}
function F2(e = {}) {
  return sn(e) ? {
    content: e
  } : e;
}
function U2(e, n) {
  const [o] = qn;
  o.reactiveSnackOptions = Gt(Gt({}, o.reactiveSnackOptions), e), o._update = n;
}
function H2(e = "top") {
  return e === "bottom" ? {
    top: "85%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
ao.Component = Ri;
ae(Ri);
ae(Ri, ao);
le(ao, Du);
const MD = Ri;
var Os = ao;
const dg = {
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
function j2(e, n, o) {
  const { direction: t, justify: r, index: a, lastIndex: i } = o;
  let l = "0";
  return t === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(r) ? a !== i ? l = `${Nn(e)} ${n} ${Nn(e)} 0` : l = `${Nn(e)} 0` : r === "space-around" ? l = `${Nn(e)} ${Nn(n)}` : r === "space-between" && (a === 0 ? l = `${Nn(e)} ${Nn(n)} ${Nn(e)} 0` : a === i ? l = `${Nn(e)} 0 ${Nn(e)} ${Nn(n)}` : l = `${Nn(e)} ${Nn(n)}`)), t === "column" && a !== i && (l = `0 0 ${e} 0`), l;
}
const Y2 = (e) => ["mini", "small", "normal", "large"].includes(e), {
  name: W2,
  n: Er,
  classes: tf
} = ne("space");
function K2(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : Fe(e) ? e.map(Oe) : [Oe(e), Oe(e)];
}
var Li = ee({
  name: W2,
  props: dg,
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
      } = e, u = (o = C(n.default)) != null ? o : [], [c, d] = K2(s, Y2(s)), f = _f(u), v = f.length - 1, h = f.map((g, y) => {
        var $;
        const k = j2(c, d, {
          direction: l,
          justify: r,
          index: y,
          lastIndex: v
        });
        return X("div", {
          class: tf([l === "column", Er("--auto")]),
          key: ($ = g.key) != null ? $ : void 0,
          style: {
            margin: k
          }
        }, [g]);
      });
      return X("div", {
        class: tf(Er(), Er("$--box"), [t, Er("--inline")]),
        style: {
          flexDirection: l,
          justifyContent: Zr(r),
          alignItems: Zr(a),
          flexWrap: i ? "wrap" : "nowrap",
          margin: l === "row" ? `calc(-1 * ${c} / 2) 0` : void 0
        }
      }, [h]);
    };
  }
});
ae(Li);
le(Li, dg);
const ND = Li;
var zs = Li;
const fg = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: Ie(on, "name"),
  inactiveIcon: Ie(on, "name"),
  activeIconNamespace: Ie(on, "namespace"),
  currentIconNamespace: Ie(on, "namespace"),
  inactiveIconNamespace: Ie(on, "namespace")
}, pg = Symbol("STEPS_BIND_STEP_KEY");
function q2() {
  const { bindChildren: e, childProviders: n } = kn(pg);
  return {
    step: n,
    bindStep: e
  };
}
function X2() {
  const { parentProvider: e, index: n, bindParent: o } = wn(pg);
  return Ln(!!o, "Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: o
  };
}
const { name: G2, n: Z2, classes: J2 } = ne("step"), Q2 = { key: 3 };
function _2(e, n) {
  const o = _("var-icon");
  return m(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      L(
        "div",
        {
          class: p(e.n(e.direction))
        },
        [
          L(
            "div",
            {
              class: p(e.classes(e.n(`${e.direction}-tag`), [e.isActive || e.isCurrent, e.n(`${e.direction}-tag--active`)])),
              style: Z({ backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor }),
              onClick: n[0] || (n[0] = (...t) => e.click && e.click(...t))
            },
            [
              e.isActive ? (m(), we(o, {
                key: 0,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.activeIcon,
                namespace: e.activeIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.isCurrent && e.currentIcon ? (m(), we(o, {
                key: 1,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.currentIcon,
                namespace: e.currentIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.inactiveIcon ? (m(), we(o, {
                key: 2,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.inactiveIcon,
                namespace: e.inactiveIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : (m(), P(
                "span",
                Q2,
                se(e.index + 1),
                1
                /* TEXT */
              ))
            ],
            6
            /* CLASS, STYLE */
          ),
          e.$slots.default ? (m(), P(
            "div",
            {
              key: 0,
              class: p(e.classes(e.n(`${e.direction}-content`), [e.isActive || e.isCurrent, e.n(`${e.direction}-content--active`)])),
              onClick: n[1] || (n[1] = (...t) => e.click && e.click(...t))
            },
            [
              U(e.$slots, "default")
            ],
            2
            /* CLASS */
          )) : G("v-if", !0),
          L(
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
const vg = ee({
  name: G2,
  components: { VarIcon: Ge },
  props: fg,
  setup() {
    const { index: e, steps: n, bindSteps: o } = X2(), { active: t, activeColor: r, inactiveColor: a, direction: i, clickStep: l } = n, s = B(() => t.value === e.value), u = B(() => e.value !== -1 && W(t.value) > e.value);
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
      n: Z2,
      classes: J2,
      click: d
    };
  }
});
vg.render = _2;
var Fi = vg;
ae(Fi);
le(Fi, fg);
const VD = Fi;
var Es = Fi;
const mg = {
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
}, { name: x2, n: e3 } = ne("steps");
function n3(e, n) {
  return m(), P(
    "div",
    {
      class: p(e.n()),
      style: Z({ flexDirection: e.direction === "horizontal" ? "row" : "column" })
    },
    [
      U(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const hg = ee({
  name: x2,
  props: mg,
  setup(e) {
    const n = B(() => e.active), o = B(() => e.activeColor), t = B(() => e.inactiveColor), r = B(() => e.direction), { bindStep: a } = q2();
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
    return { n: e3 };
  }
});
hg.render = n3;
var Ui = hg;
ae(Ui);
le(Ui, mg);
const RD = Ui;
var Ts = Ui;
const gg = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: o3, n: t3 } = ne("style-provider"), r3 = ee({
  name: o3,
  props: gg,
  setup(e, { slots: n }) {
    return () => Qt(
      e.tag,
      {
        class: t3(),
        style: Sp(e.styleVars)
      },
      C(n.default)
    );
  }
});
var Hi = r3;
const bg = "varlet-style-vars";
function rf() {
  const e = document.head.querySelector(`#${bg}`);
  e && document.head.removeChild(e);
}
function a3(e) {
  const n = document.createElement("style");
  n.id = bg, n.innerHTML = e, document.head.appendChild(n);
}
function ji(e) {
  if (e == null) {
    rf();
    return;
  }
  const n = Sp(e ?? {}), o = Object.entries(n).reduce((t, [r, a]) => (t += `${r}:${a};`, t), `:root:root {
`);
  rf(), a3(`${o}
}`);
}
ji.Component = Hi;
ae(Hi);
ae(Hi, ji);
le(ji, gg);
const LD = Hi;
var Bs = ji;
const yg = {
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
}, { name: i3, n: l3, classes: s3 } = ne("switch"), u3 = ["aria-checked"], c3 = ["tabindex"];
function d3(e, n) {
  const o = _("var-hover-overlay"), t = _("var-form-details"), r = Ye("ripple"), a = Ye("hover");
  return Ve((m(), P("div", {
    class: p(e.classes(e.n(), [e.variant, e.n("--variant")])),
    role: "switch",
    "aria-checked": e.modelValue
  }, [
    L(
      "div",
      {
        ref: "switchRef",
        class: p(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.isActive, e.n("block--active")])),
        style: Z(e.styleComputed.switch),
        onClick: n[2] || (n[2] = (...i) => e.switchActive && e.switchActive(...i))
      },
      [
        L(
          "div",
          {
            style: Z(e.styleComputed.track),
            class: p(e.classes(e.n("track"), [e.isActive, e.n("track--active")], [e.errorMessage && !e.variant, e.n("track--error")]))
          },
          null,
          6
          /* CLASS, STYLE */
        ),
        Ve((m(), P("div", {
          class: p(e.classes(e.n("ripple"), [e.isActive, e.n("ripple--active")])),
          style: Z(e.styleComputed.ripple),
          tabindex: e.disabled || e.formDisabled ? void 0 : "0",
          onFocus: n[0] || (n[0] = (i) => e.isFocusing = !0),
          onBlur: n[1] || (n[1] = (i) => e.isFocusing = !1)
        }, [
          L(
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
              e.loading ? (m(), P(
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
                  L(
                    "svg",
                    { viewBox: "25 25 50 50" },
                    [
                      L("circle", {
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
        ], 46, c3)), [
          [r, {
            disabled: !e.ripple || e.disabled || e.loading || e.formDisabled || e.readonly || e.formReadonly
          }]
        ])
      ],
      6
      /* CLASS, STYLE */
    ),
    X(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
  ], 10, u3)), [
    [a, e.hover, "desktop"]
  ]);
}
const wg = ee({
  name: i3,
  components: {
    VarFormDetails: Tn,
    VarHoverOverlay: Fn
  },
  directives: { Ripple: tn, Hover: In },
  props: yg,
  setup(e) {
    const n = w(null), o = w(!1), { bindForm: t, form: r } = Hn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = Un(), { hovering: u, handleHovering: c } = eo(), d = B(() => e.modelValue === e.activeValue), f = B(() => {
      const { size: O, color: D, closeColor: A, loadingColor: V, variant: R } = e;
      return {
        handle: {
          width: On(O),
          height: On(O),
          backgroundColor: d.value ? D : A,
          color: V
        },
        ripple: {
          left: d.value ? On(O, 0.5) : `-${On(O, R ? 1 / 3 : 0.5)}`,
          color: d.value ? D : A || "currentColor",
          width: On(O, 2),
          height: On(O, 2)
        },
        track: {
          width: On(O, R ? 13 / 6 : 1.9),
          height: On(O, R ? 4 / 3 : 0.72),
          borderRadius: On(O, 2 / 3),
          filter: d.value || a != null && a.value ? void 0 : `brightness(${R ? 1 : 0.6})`,
          backgroundColor: d.value ? D : A,
          borderWidth: R && !d.value ? On(O, 1 / 12) : void 0
        },
        switch: {
          width: On(O, R ? 13 / 6 : 2),
          height: On(O, R ? 4 / 3 : 1.2)
        }
      };
    }), v = B(() => On(e.size, 0.8));
    C(t, {
      reset: T,
      validate: $,
      resetValidation: s
    }), We(() => window, "keydown", g), We(() => window, "keyup", y);
    function g(O) {
      o.value && ((O.key === " " || O.key === "Enter") && Me(O), O.key === "Enter" && n.value.click());
    }
    function y(O) {
      !o.value || O.key !== " " || (Me(O), n.value.click());
    }
    function $() {
      return l(e.rules, e.modelValue);
    }
    function k(O) {
      He(() => {
        const { validateTrigger: D, rules: A, modelValue: V } = e;
        i(D, O, A, V);
      });
    }
    function b(O) {
      const {
        onClick: D,
        onChange: A,
        disabled: V,
        loading: R,
        readonly: Y,
        activeValue: E,
        inactiveValue: M,
        lazyChange: N,
        "onUpdate:modelValue": H,
        onBeforeChange: z
      } = e;
      if (V || r != null && r.disabled.value || (C(D, O), R || Y || r != null && r.readonly.value))
        return;
      const J = d.value ? M : E;
      N ? C(z, J, (q) => {
        C(H, q), k("onLazyChange");
      }) : (C(A, J), C(H, J), k("onChange"));
    }
    function S(O) {
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
      n: l3,
      classes: s3,
      formatElevation: dn,
      multiplySizeUnit: On,
      switchActive: b,
      hover: S
    };
  }
});
wg.render = d3;
var Yi = wg;
ae(Yi);
le(Yi, yg);
const FD = Yi;
var Ds = Yi;
const kg = {
  name: [String, Number],
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: F()
}, $g = Symbol("TABS_BIND_TAB_KEY");
function f3() {
  const { childProviders: e, bindChildren: n, length: o } = kn($g);
  return {
    length: o,
    tabList: e,
    bindTabList: n
  };
}
function p3() {
  const { parentProvider: e, bindParent: n, index: o } = wn($g);
  return Ln(!!n, "Tab", "<var-tab/> must in <var-tabs/>"), {
    index: o,
    tabs: e,
    bindTabs: n
  };
}
const { name: v3, n: Tr, classes: m3 } = ne("tab");
function h3(e, n) {
  const o = Ye("ripple");
  return Ve((m(), P(
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
      U(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [o, { disabled: e.disabled || !e.ripple }]
  ]);
}
const Cg = ee({
  name: v3,
  directives: { Ripple: tn },
  props: kg,
  setup(e) {
    const n = w(null), o = B(() => n.value), t = B(() => e.name), r = B(() => e.disabled), { index: a, tabs: i, bindTabs: l } = p3(), { onTabClick: s, active: u, activeColor: c, inactiveColor: d, disabledColor: f, itemDirection: v, resize: h } = i, g = {
      name: t,
      index: a,
      disabled: r,
      element: o
    };
    l(g), fe(() => [e.name, e.disabled], h);
    function y() {
      return e.name != null ? u.value === e.name : u.value === (a == null ? void 0 : a.value);
    }
    function $() {
      return e.disabled ? f.value : y() ? c.value : d.value;
    }
    function k() {
      return e.disabled ? Tr("$-tab--disabled") : y() ? Tr("$-tab--active") : Tr("$-tab--inactive");
    }
    function b(S) {
      const { disabled: T, name: O, onClick: D } = e;
      T || (C(D, O ?? a.value, S), s(g));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: c,
      inactiveColor: d,
      itemDirection: v,
      n: Tr,
      classes: m3,
      computeColorStyle: $,
      computeColorClass: k,
      handleClick: b
    };
  }
});
Cg.render = h3;
var Wi = Cg;
ae(Wi);
le(Wi, kg);
const UD = Wi;
var Is = Wi;
const Sg = {
  name: [String, Number]
}, { name: g3, n: b3, classes: y3 } = ne("tab-item");
function w3(e, n) {
  const o = _("var-swipe-item");
  return m(), we(o, {
    class: p(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: ce(() => [
      U(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
const Pg = ee({
  name: g3,
  components: { VarSwipeItem: qt },
  props: Sg,
  setup(e) {
    const n = w(!1), o = B(() => e.name), { index: t, bindTabsItems: r } = q4(), { bindLists: a } = X4(), i = {
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
      n: b3,
      classes: y3
    };
  }
});
Pg.render = w3;
var Ki = Pg;
ae(Ki);
le(Ki, Sg);
const HD = Ki;
var As = Ki;
const Og = {
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
}, { name: k3, n: $3, classes: C3 } = ne("table");
function S3(e, n) {
  return m(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box")))
    },
    [
      L(
        "div",
        {
          class: p(e.n("main")),
          style: Z({ height: e.toSizeUnit(e.scrollerHeight) })
        },
        [
          L(
            "table",
            {
              class: p(e.n("table")),
              style: Z({ width: e.toSizeUnit(e.fullWidth) })
            },
            [
              U(e.$slots, "default")
            ],
            6
            /* CLASS, STYLE */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      e.$slots.footer ? (m(), P(
        "div",
        {
          key: 0,
          class: p(e.n("footer"))
        },
        [
          U(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const zg = ee({
  name: k3,
  props: Og,
  setup: () => ({
    toSizeUnit: Oe,
    n: $3,
    classes: C3,
    formatElevation: dn
  })
});
zg.render = S3;
var qi = zg;
ae(qi);
le(qi, Og);
const jD = qi;
var Ms = qi;
const Eg = {
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
var af = (e, n, o) => new Promise((t, r) => {
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
const { name: P3, n: O3, classes: z3 } = ne("tabs");
function E3(e, n) {
  return m(), we(wt(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: ce(() => [
      L(
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
          L(
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
              U(e.$slots, "default"),
              L(
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
                  L(
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
const Tg = ee({
  name: P3,
  components: { VarSticky: bt },
  inheritAttrs: !1,
  props: Eg,
  setup(e) {
    const n = w("0px"), o = w("0px"), t = w("0px"), r = w("0px"), a = w(!1), i = w(null), l = B(() => e.active), s = B(() => e.activeColor), u = B(() => e.inactiveColor), c = B(() => e.disabledColor), d = B(() => e.itemDirection), f = w(null), v = B(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: h, bindTabList: g, length: y } = f3();
    g({
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: c,
      itemDirection: d,
      resize: V,
      onTabClick: k
    }), fe(
      () => y.value,
      () => af(this, null, function* () {
        yield bn(), V();
      })
    ), fe(() => [e.active, e.scrollable], V), Fo(V), lo(V);
    function k(Y) {
      var E;
      const M = (E = Y.name.value) != null ? E : Y.index.value, { active: N, onChange: H, onClick: z } = e;
      C(e["onUpdate:active"], M), C(z, M), M !== N && C(H, M);
    }
    function b() {
      return h.find(({ name: Y }) => e.active === Y.value);
    }
    function S(Y) {
      return h.find(({ index: E }) => (Y ?? e.active) === E.value);
    }
    function T() {
      if (y.value === 0)
        return;
      const { active: Y } = e;
      if (En(Y)) {
        const E = $n(Y, 0, y.value - 1);
        return C(e["onUpdate:active"], E), S(E);
      }
    }
    function O() {
      a.value = e.scrollable === "always" || h.length >= 5;
    }
    function D({ element: Y }) {
      const E = Y.value;
      E && (e.layoutDirection === "horizontal" ? (n.value = `${E.offsetWidth}px`, t.value = `${E.offsetLeft}px`) : (o.value = `${E.offsetHeight}px`, r.value = `${E.offsetTop}px`));
    }
    function A({ element: Y }) {
      if (!a.value)
        return;
      const E = i.value, M = Y.value;
      if (e.layoutDirection === "horizontal") {
        const N = M.offsetLeft + M.offsetWidth / 2 - E.offsetWidth / 2;
        Vt(E, {
          left: N,
          animation: yl
        });
      } else {
        const N = M.offsetTop + M.offsetHeight / 2 - E.offsetHeight / 2;
        Vt(E, {
          top: N,
          animation: yl
        });
      }
    }
    function V() {
      const Y = b() || S() || T();
      !Y || Y.disabled.value || (O(), D(Y), A(Y));
    }
    function R() {
      return af(this, null, function* () {
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
      toSizeUnit: Oe,
      n: O3,
      classes: z3,
      resize: V,
      resizeSticky: R,
      formatElevation: dn
    };
  }
});
Tg.render = E3;
var Xi = Tg;
ae(Xi);
le(Xi, Eg);
const YD = Xi;
var Ns = Xi;
const Bg = {
  active: {
    type: [String, Number],
    default: 0
  },
  canSwipe: {
    type: Boolean,
    default: !0
  },
  loop: Boolean,
  "onUpdate:active": F()
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
const { name: B3, n: D3 } = ne("tabs-items");
function I3(e, n) {
  const o = _("var-swipe");
  return m(), we(o, {
    ref: "swipe",
    class: p(e.n()),
    loop: e.loop,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: ce(() => [
      U(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "loop", "touchable", "onChange"]);
}
const Dg = ee({
  name: B3,
  components: { VarSwipe: Kt },
  props: Bg,
  setup(e) {
    const n = w(null), { tabItemList: o, bindTabItem: t, length: r } = K4();
    t({}), fe(() => e.active, s), fe(
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
      v && (o.forEach(({ setCurrent: h }) => h(!1)), v.setCurrent(!0), (f = n.value) == null || f.to(v.index.value));
    }
    function u(d) {
      var f;
      const v = o.find(({ index: g }) => g.value === d), h = (f = v.name.value) != null ? f : v.index.value;
      C(e["onUpdate:active"], h);
    }
    function c() {
      return n.value;
    }
    return {
      swipe: n,
      n: D3,
      handleSwipeChange: u,
      getSwipe: c
    };
  }
});
Dg.render = I3;
var Gi = Dg;
ae(Gi);
le(Gi, Bg);
const WD = Gi;
var Vs = Gi, A3 = {
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
}, M3 = {
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
}, N3 = {
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
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e",
  "--avatar-text-color": "#f5f5f5",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-hover-transform": "scale(1.1)"
}, R3 = {
  "--avatar-group-offset": "-10px"
}, L3 = {
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px",
  "--back-top-button-border-radius": "50%"
}, F3 = {
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
}, U3 = {
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-background-color": "var(--color-surface-container-high)",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, H3 = {
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
}, j3 = {
  "--breadcrumb-inactive-color": "#aaa",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, Y3 = {
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
}, W3 = {
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
}, K3 = {
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
}, q3 = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, X3 = {
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
}, G3 = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, Z3 = {
  "--collapse-text-color": "#fff",
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, J3 = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, Q3 = {
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
}, _3 = {
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
}, x3 = {
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
}, e8 = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, n8 = {
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
}, o8 = {
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
}, t8 = {
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
}, r8 = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, a8 = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, i8 = {
  "--icon-size": "20px"
}, l8 = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, s8 = {
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
}, u8 = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
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
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, f8 = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, p8 = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, v8 = {
  "--menu-background-color": "#272727",
  "--menu-border-radius": "2px"
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
  "--menu-select-menu-background-color": "#272727",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0",
  "--menu-select-menu-border-radius": "2px"
}, g8 = {
  "--option-text-color": "#fff",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, b8 = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, y8 = {
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
}, w8 = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "4px"
}, k8 = {
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
}, $8 = {
  "--popup-content-background-color": "var(--color-surface-container-low)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, C8 = {
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
}, S8 = {
  "--pull-refresh-background": "#303030",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, P8 = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, O8 = {
  "--rate-color": "var(--color-text)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, z8 = {
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
}, E8 = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, T8 = {
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
}, B8 = {
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
}, D8 = {
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
}, I8 = {
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
}, A8 = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, M8 = {
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
}, N8 = {
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
}, V8 = {
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
}, R8 = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, L8 = {
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
}, F8 = {
  "--tabs-background": "#1e1e1e",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, U8 = {
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
}, H8 = {
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
}, j8 = {
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
}, Y8 = {
  "--watermark-content-color": "#ffffff"
}, W8 = Object.defineProperty, lf = Object.getOwnPropertySymbols, K8 = Object.prototype.hasOwnProperty, q8 = Object.prototype.propertyIsEnumerable, sf = (e, n, o) => n in e ? W8(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, he = (e, n) => {
  for (var o in n || (n = {}))
    K8.call(n, o) && sf(e, o, n[o]);
  if (lf)
    for (var o of lf(n))
      q8.call(n, o) && sf(e, o, n[o]);
  return e;
}, X8 = he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he({
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
}, Y3), M3), K3), W3), U8), _3), B8), F8), R8), $8), x3), A3), X3), F3), j8), Z3), S8), V8), M8), y8), L8), o8), P8), q3), e8), k8), N3), H3), v8), z8), j3), V3), c8), C8), g8), Y8), h8), m8), R3), L3), U3), J3), Q3), n8), t8), r8), a8), i8), l8), s8), u8), d8), f8), p8), b8), w8), O8), E8), D8), I8), A8), N8), H8), T8), G3), G8 = {
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
}, Z8 = {
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
}, J8 = {
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
}, Q8 = {
  "--avatar-text-color": "#000",
  "--avatar-background-color": "var(--color-primary)",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-border": "2px solid #fff",
  "--avatar-hover-transform": "scale(1.1)"
}, _8 = {
  "--avatar-group-offset": "-10px"
}, x8 = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, eE = {
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
}, nE = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, oE = {
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
}, tE = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, rE = {
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
}, aE = {
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
}, iE = {
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
}, lE = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, sE = {
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
}, uE = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, cE = {
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-text-color": "var(--color-inverse-surface)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, dE = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, fE = {
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
}, pE = {
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
}, vE = {
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
}, mE = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, hE = {
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
}, gE = {
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
}, bE = {
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
}, yE = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, wE = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, kE = {
  "--icon-size": "20px"
}, $E = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, CE = {
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
}, SE = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, PE = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, OE = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, zE = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, EE = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, TE = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, BE = {
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
}, DE = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, IE = {
  "--option-text-color": "var(--color-inverse-surface)",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, AE = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, ME = {
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
}, NE = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "12px"
}, VE = {
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
}, RE = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, LE = {
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
}, FE = {
  "--pull-refresh-background": "var(--color-surface-container-highest)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, UE = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, HE = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, jE = {
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
}, YE = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, WE = {
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
}, KE = {
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
}, qE = {
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
}, XE = {
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
}, GE = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, ZE = {
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
}, JE = {
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
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, xE = {
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
}, eT = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, nT = {
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
}, oT = {
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
}, tT = {
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
}, rT = {
  "--watermark-content-color": "#ffffff"
}, aT = Object.defineProperty, uf = Object.getOwnPropertySymbols, iT = Object.prototype.hasOwnProperty, lT = Object.prototype.propertyIsEnumerable, cf = (e, n, o) => n in e ? aT(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ge = (e, n) => {
  for (var o in n || (n = {}))
    iT.call(n, o) && cf(e, o, n[o]);
  if (uf)
    for (var o of uf(n))
      lT.call(n, o) && cf(e, o, n[o]);
  return e;
}, sT = ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge({
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
}, rE), Z8), wE), TE), DE), BE), hE), tE), PE), iE), NE), Q8), gE), lE), UE), aE), sE), eE), oT), LE), eT), _E), ZE), mE), xE), ME), rT), cE), jE), J8), nE), oE), XE), G8), vE), FE), RE), VE), bE), x8), WE), IE), fE), QE), qE), tT), nT), pE), HE), KE), _8), dE), yE), kE), $E), CE), SE), OE), zE), EE), AE), YE), GE), JE), uE), uT = {
  "--action-sheet-background": "var(--color-surface-container-high)",
  "--action-sheet-title-color": "var(--color-on-surface-variant)",
  "--action-sheet-action-item-color": "#1D1B20",
  "--action-sheet-border-radius": "0px"
}, cT = {
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
}, dT = {
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
}, fT = {
  "--avatar-text-color": "#fff",
  "--avatar-background-color": "var(--color-primary)"
}, pT = {
  "--avatar-group-offset": "-10px"
}, vT = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, mT = {
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
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, yT = {
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
}, wT = {
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
}, kT = {
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
}, $T = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, CT = {
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
}, ST = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, PT = {
  "--collapse-background": "var(--color-surface-container-low)",
  "--collapse-text-color": "#1D1B20",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, OT = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, zT = {
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
}, ET = {
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
}, TT = {
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
}, BT = {
  "--divider-color": "var(--color-outline)",
  "--divider-text-color": "#888",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, DT = {
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
}, IT = {
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
}, AT = {
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
}, MT = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, NT = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, VT = {
  "--icon-size": "20px"
}, RT = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, LT = {
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
}, FT = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, UT = {
  "--link-default-color": "#000",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, HT = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, jT = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, YT = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, WT = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, KT = {
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
}, qT = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, XT = {
  "--option-text-color": "#1D1B20",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, GT = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, ZT = {
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
}, JT = {
  "--paper-background": "var(--color-surface-container-low)",
  "--paper-border-radius": "12px"
}, QT = {
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
}, _T = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, xT = {
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
}, e5 = {
  "--pull-refresh-background": "var(--color-body)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, n5 = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, o5 = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, t5 = {
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
}, r5 = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, a5 = {
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
}, i5 = {
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
}, l5 = {
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
}, s5 = {
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
}, u5 = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, c5 = {
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
}, d5 = {
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
}, f5 = {
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
}, p5 = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, v5 = {
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
}, m5 = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, h5 = {
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
}, g5 = {
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
}, b5 = {
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
}, y5 = {
  "--watermark-content-color": "#808080"
}, w5 = Object.defineProperty, df = Object.getOwnPropertySymbols, k5 = Object.prototype.hasOwnProperty, $5 = Object.prototype.propertyIsEnumerable, ff = (e, n, o) => n in e ? w5(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, be = (e, n) => {
  for (var o in n || (n = {}))
    k5.call(n, o) && ff(e, o, n[o]);
  if (df)
    for (var o of df(n))
      $5.call(n, o) && ff(e, o, n[o]);
  return e;
}, C5 = be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be({
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
}, yT), cT), NT), WT), qT), KT), DT), bT), UT), kT), JT), fT), IT), $T), n5), wT), CT), g5), m5), p5), v5), PT), t5), hT), gT), s5), uT), TT), e5), _T), QT), AT), vT), a5), XT), l5), b5), h5), ET), f5), o5), pT), mT), OT), zT), BT), MT), VT), RT), LT), FT), HT), jT), YT), GT), ZT), xT), r5), i5), u5), c5), d5), y5), dT), ST);
function S5(e, n = {}) {
  const { viewportWidth: o = 375, viewportUnit: t = "vmin", unitPrecision: r = 6 } = n;
  return Object.entries(e).reduce((a, [i, l]) => (a[i] = l.includes("px") ? l.replace(
    /(\d+(\.\d+)?)px/g,
    (s, u) => `${Number((u / o * 100).toFixed(r))}${t}`
  ) : l, a), {});
}
const P5 = { dark: X8, md3Light: C5, md3Dark: sT, toViewport: S5 }, KD = null;
var Rs = P5;
const Yn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], zn = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], pf = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"], Ig = {
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
}, Ag = (e, n) => e === "24hr" || n === "am", Au = (e, n, o) => {
  const t = Yn.findIndex((a) => W(a) === W(o)), r = Ag(e, n) ? o : zn[t];
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
}, Mg = (e) => {
  var n, o;
  const { time: t, format: r, ampm: a, hour: i, max: l, min: s, disableHour: u } = e, { hourStr: c, hourNum: d } = Au(r, a, i);
  let f = !1, v = !1;
  if (u.includes(c))
    return !0;
  if (l && !s) {
    const { hour: h, minute: g } = Dn(l);
    f = h === d && t > g;
  }
  if (!l && s) {
    const { hour: h, minute: g } = Dn(s);
    f = h === d && t < g;
  }
  if (l && s) {
    const { hour: h, minute: g } = Dn(l), { hour: y, minute: $ } = Dn(s);
    f = y === d && t < $ || h === d && t > g;
  }
  return (n = e.allowedTime) != null && n.minutes && (v = (o = e.allowedTime) == null ? void 0 : o.minutes(t)), f || v;
}, Ng = (e) => {
  var n, o;
  const { time: t, format: r, ampm: a, hour: i, minute: l, max: s, min: u, disableHour: c } = e, { hourStr: d, hourNum: f } = Au(r, a, i);
  let v = !1, h = !1;
  if (c.includes(d))
    return !0;
  if (s && !u) {
    const { hour: g, minute: y, second: $ } = Dn(s);
    v = g === f && y < l || y === l && t > $;
  }
  if (!s && u) {
    const { hour: g, minute: y, second: $ } = Dn(u);
    v = g === f && y > l || y === l && t > $;
  }
  if (s && u) {
    const { hour: g, minute: y, second: $ } = Dn(s), { hour: k, minute: b, second: S } = Dn(u);
    v = g === f && y < l || k === f && b > l || g === f && y === l && t > $ || k === f && b === l && t < S;
  }
  return (n = e.allowedTime) != null && n.seconds && (h = (o = e.allowedTime) == null ? void 0 : o.seconds(t)), v || h;
}, { n: O5, classes: z5 } = ne("time-picker");
function E5(e, n) {
  return m(), P(
    "div",
    {
      class: p(e.n("clock"))
    },
    [
      L(
        "div",
        {
          class: p(e.n("clock-hand")),
          style: Z(e.handStyle)
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      (m(!0), P(
        Ae,
        null,
        qe(e.timeScales, (o, t) => (m(), P(
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
          se(o),
          7
          /* TEXT, CLASS, STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      )),
      e.format === "24hr" && e.type === "hour" ? (m(), P(
        "div",
        {
          key: 0,
          ref: "inner",
          class: p(e.n("clock-inner"))
        },
        [
          (m(!0), P(
            Ae,
            null,
            qe(e.hours24, (o, t) => (m(), P(
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
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Vg = ee({
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
      const g = e.rad / 30;
      return g >= 0 ? g : g + 12;
    }), l = B(() => e.type === "hour" ? Yn : pf), s = (g, y) => {
      g = g ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const $ = e.type === "minute" ? Mg : Ng, k = {
        time: W(g),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: W(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return y && e.type === "minute" && Reflect.deleteProperty(k, "minute"), $(k);
    }, u = () => {
      if (i.value === void 0)
        return e.color;
      const g = e.isInner ? zn[i.value] : l.value[i.value];
      return l.value === pf ? s() ? "var(--time-picker-clock-item-disable-background)" : e.color : d(g) ? "var(--time-picker-clock-item-disable-background)" : e.color;
    }, c = (g, y) => y ? i.value === g && e.isInner : i.value === g && (!e.isInner || e.type !== "hour"), d = (g) => {
      if (e.type === "hour") {
        if (Ag(e.format, e.ampm))
          return t.value.includes(g);
        const y = Yn.findIndex(($) => $ === g);
        return r.value.includes(y);
      }
      return s(g, !0);
    }, f = (g, y, $) => {
      const k = 2 * Math.PI / 12 * g - Math.PI / 2, b = 50 * (1 + Math.cos(k)), S = 50 * (1 + Math.sin(k)), T = () => c(g, $) ? d(y) ? {
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
      const { width: g, height: y } = nn(o.value);
      return {
        width: g,
        height: y
      };
    }, h = () => {
      if (i.value === void 0)
        return;
      const g = e.ampm === "am" ? Yn : zn;
      return Qo(g[i.value], 2, "0");
    };
    return fe([i, () => e.isInner], ([g, y], [$, k]) => {
      if (g === $ && y === k || e.type !== "hour" || i.value === void 0)
        return;
      const S = y ? zn[i.value] : h(), T = e.useSeconds ? `:${e.time.second}` : "", O = `${S}:${e.time.minute}${T}`;
      e.preventNextUpdate || n("update", O), n("change-prevent-update");
    }), fe(
      () => e.rad,
      (g, y) => {
        if (e.type === "hour" || g === void 0 || y === void 0)
          return;
        const $ = g / 6 >= 0 ? g / 6 : g / 6 + 60, k = y / 6 >= 0 ? y / 6 : y / 6 + 60;
        if ($ === k)
          return;
        let b;
        const { hourStr: S } = Au(e.format, e.ampm, e.time.hour);
        if (e.type === "minute") {
          const T = ue().minute($).format("mm"), O = e.useSeconds ? `:${e.time.second}` : "";
          b = `${S}:${T}${O}`;
        }
        if (e.type === "second") {
          const T = ue().second($).format("ss"), O = e.useSeconds ? `:${T}` : "";
          b = `${S}:${e.time.minute}${O}`;
        }
        n("update", b);
      }
    ), fe(
      [() => e.max, () => e.min, () => e.allowedTime],
      ([g, y, $]) => {
        if (t.value = [], g && !y) {
          const { hour: k } = Dn(g), b = Yn.filter((T) => W(T) > k), S = zn.filter((T) => W(T) > k);
          t.value = [...b, ...S];
        }
        if (!g && y) {
          const { hour: k } = Dn(y), b = Yn.filter((T) => W(T) < k), S = zn.filter((T) => W(T) < k);
          t.value = [...b, ...S];
        }
        if (g && y) {
          const { hour: k } = Dn(g), { hour: b } = Dn(y), S = Yn.filter((O) => W(O) < b || W(O) > k), T = zn.filter((O) => W(O) < b || W(O) > k);
          t.value = [...S, ...T];
        }
        if ($ != null && $.hours) {
          const { hours: k } = $, b = Yn.filter((T) => !k(W(T))), S = zn.filter((T) => !k(W(T)));
          t.value = [.../* @__PURE__ */ new Set([...t.value, ...b, ...S])];
        }
        r.value = t.value.map((k) => zn.findIndex((b) => k === b)).filter((k) => k >= 0);
      },
      { immediate: !0, deep: !0 }
    ), {
      n: O5,
      classes: z5,
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
Vg.render = E5;
var T5 = Vg;
const { name: B5, n: D5, classes: I5 } = ne("time-picker");
function A5(e, n) {
  var o;
  const t = _("clock");
  return m(), P(
    "div",
    {
      ref: "picker",
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [
      L(
        "div",
        {
          class: p(e.n("title")),
          style: Z({ background: e.titleColor || e.color })
        },
        [
          L(
            "div",
            {
              class: p(e.n("title-hint"))
            },
            se((o = e.hint) != null ? o : (e.pt ? e.pt : e.t)("timePickerHint")),
            3
            /* TEXT, CLASS */
          ),
          L(
            "div",
            {
              class: p(e.n("title-time-container"))
            },
            [
              L(
                "div",
                {
                  class: p(e.n("title-time"))
                },
                [
                  L(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
                      onClick: n[0] || (n[0] = (r) => e.checkPanel("hour"))
                    },
                    se(e.time.hour),
                    3
                    /* TEXT, CLASS */
                  ),
                  L(
                    "span",
                    {
                      class: p(e.n("title-splitter"))
                    },
                    ":",
                    2
                    /* CLASS */
                  ),
                  L(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
                      onClick: n[1] || (n[1] = (r) => e.checkPanel("minute"))
                    },
                    se(e.time.minute),
                    3
                    /* TEXT, CLASS */
                  ),
                  e.useSeconds ? (m(), P(
                    "span",
                    {
                      key: 0,
                      class: p(e.n("title-splitter"))
                    },
                    ":",
                    2
                    /* CLASS */
                  )) : G("v-if", !0),
                  e.useSeconds ? (m(), P(
                    "div",
                    {
                      key: 1,
                      class: p(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
                      onClick: n[2] || (n[2] = (r) => e.checkPanel("second"))
                    },
                    se(e.time.second),
                    3
                    /* TEXT, CLASS */
                  )) : G("v-if", !0)
                ],
                2
                /* CLASS */
              ),
              e.format === "ampm" ? (m(), P(
                "div",
                {
                  key: 0,
                  class: p(e.n("title-ampm"))
                },
                [
                  L(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
                      onClick: n[3] || (n[3] = (r) => e.checkAmpm("am"))
                    },
                    " AM ",
                    2
                    /* CLASS */
                  ),
                  L(
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
      L(
        "div",
        {
          class: p(e.n("body"))
        },
        [
          L(
            "div",
            {
              ref: "container",
              class: p(e.n("clock-container")),
              onTouchstart: n[5] || (n[5] = (...r) => e.moveHand && e.moveHand(...r)),
              onTouchmove: n[6] || (n[6] = (...r) => e.moveHand && e.moveHand(...r)),
              onTouchend: n[7] || (n[7] = (...r) => e.end && e.end(...r))
            },
            [
              X(_e, {
                name: `${e.n()}-panel-fade`
              }, {
                default: ce(() => [
                  (m(), we(t, {
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
      e.$slots.actions ? (m(), P(
        "div",
        {
          key: 0,
          class: p(e.n("actions"))
        },
        [
          U(e.$slots, "actions")
        ],
        2
        /* CLASS */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Rg = ee({
  name: B5,
  components: { Clock: T5 },
  props: Ig,
  setup(e) {
    const n = w(null), o = w(null), t = w(null), r = w(!1), a = w(!1), i = w(!1), l = w(!1), s = w(!1), u = w(!1), c = w(!1), d = w(0), f = w(0), v = w(), h = w("hour"), g = w("am"), y = w({
      hour: "00",
      minute: "00",
      second: "00"
    }), $ = xe({
      x: 0,
      y: 0
    }), k = xe({
      x: [],
      y: []
    }), b = B(() => h.value === "hour" ? v.value : h.value === "minute" ? d.value : f.value), { t: S } = so();
    fe(
      () => e.modelValue,
      (j) => {
        if (j === void 0 || j === "") {
          T();
          return;
        }
        const { hour: Q, minute: re, second: ve } = Dn(j), I = ue().hour(Q).format("hh"), K = ue().hour(Q).format("HH"), pe = ue().minute(re).format("mm"), Se = ue().second(ve).format("ss");
        v.value = (I === "12" ? 0 : W(I)) * 30, d.value = W(pe) * 6, f.value = W(Se) * 6, y.value = E(j), e.format !== "24hr" && (g.value = Qo(`${Q}`, 2, "0") === K && zn.includes(K) ? "pm" : "am"), r.value = e.format === "24hr" && zn.includes(K);
      },
      { immediate: !0 }
    );
    function T() {
      v.value = void 0, d.value = 0, f.value = 0, y.value = {
        hour: "00",
        minute: "00",
        second: "00"
      }, g.value = "am";
    }
    function O(j) {
      C(e["onUpdate:modelValue"], j), C(e.onChange, j);
    }
    function D(j) {
      return j * 57.29577951308232;
    }
    function A(j) {
      l.value = !1, c.value = !1, h.value = j;
    }
    function V(j) {
      const { disableHour: Q } = t.value, re = Yn.findIndex((K) => W(K) === W(y.value.hour)), ve = j === "am" ? Yn : zn;
      return [...ve.slice(re), ...ve.slice(0, re)].find((K, pe) => (a.value = pe !== 0, !Q.includes(K)));
    }
    function R(j) {
      if (e.readonly)
        return;
      g.value = j;
      const Q = V(j);
      if (!Q)
        return;
      const re = e.useSeconds ? `:${y.value.second}` : "", ve = `${Qo(Q, 2, "0")}:${y.value.minute}${re}`;
      O(ve);
    }
    function Y(j, Q) {
      const re = j >= k.x[0] && j <= k.x[1], ve = Q >= k.y[0] && Q <= k.y[1];
      return re && ve;
    }
    function E(j) {
      const Q = e.format === "24hr" ? "HH" : "hh", { hour: re, minute: ve, second: I } = Dn(j);
      return {
        hour: ue().hour(re).format(Q),
        minute: ue().minute(ve).format("mm"),
        second: ue().second(I).format("ss")
      };
    }
    function M(j) {
      const Q = j / 30;
      return Q >= 0 ? Q : Q + 12;
    }
    function N() {
      const { width: j, height: Q } = t.value.getSize(), re = $.x - j / 2 - 8, ve = $.x + j / 2 + 8, I = $.y - Q / 2 - 8, K = $.y + Q / 2 + 8;
      return {
        rangeXMin: re,
        rangeXMax: ve,
        rangeYMin: I,
        rangeYMax: K
      };
    }
    function H(j, Q, re) {
      const { disableHour: ve } = t.value;
      i.value = Y(j, Q);
      const I = Math.round(re / 30) * 30 + 90, K = M(I), pe = r.value ? Yn[K] : zn[K];
      if (ve.includes(pe) || (r.value = e.format === "24hr" ? Y(j, Q) : !1), r.value !== i.value)
        return;
      const Se = r.value || g.value === "pm" ? zn[K] : Yn[K];
      u.value = ve.includes(Se), !u.value && (v.value = I, l.value = !0);
    }
    function z(j) {
      const { disableHour: Q } = t.value, re = Math.round(j / 6) * 6 + 90, I = {
        time: re / 6 >= 0 ? re / 6 : re / 6 + 60,
        format: e.format,
        ampm: g.value,
        hour: y.value.hour,
        max: e.max,
        min: e.min,
        disableHour: Q,
        allowedTime: e.allowedTime
      };
      c.value = Mg(I), !c.value && (d.value = re, s.value = !0);
    }
    function J(j) {
      const { disableHour: Q } = t.value, re = Math.round(j / 6) * 6 + 90, I = {
        time: re / 6 >= 0 ? re / 6 : re / 6 + 60,
        format: e.format,
        ampm: g.value,
        hour: y.value.hour,
        minute: W(y.value.minute),
        max: e.max,
        min: e.min,
        disableHour: Q,
        allowedTime: e.allowedTime
      };
      Ng(I) || (f.value = re);
    }
    function q() {
      const { left: j, top: Q, width: re, height: ve } = nn(n.value);
      if ($.x = j + re / 2, $.y = Q + ve / 2, h.value === "hour" && e.format === "24hr") {
        const { rangeXMin: I, rangeXMax: K, rangeYMin: pe, rangeYMax: Se } = N();
        k.x = [I, K], k.y = [pe, Se];
      }
    }
    function oe(j) {
      if (Me(j), e.readonly)
        return;
      q();
      const { clientX: Q, clientY: re } = j.touches[0], ve = Q - $.x, I = re - $.y, K = Math.round(D(Math.atan2(I, ve)));
      h.value === "hour" ? H(Q, re, K) : h.value === "minute" ? z(K) : J(K);
    }
    function ye() {
      if (!e.readonly) {
        if (h.value === "hour" && l.value) {
          h.value = "minute";
          return;
        }
        h.value === "minute" && e.useSeconds && s.value && (h.value = "second");
      }
    }
    function Te() {
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
      ampm: g,
      isPreventNextUpdate: a,
      n: D5,
      classes: I5,
      t: an,
      pt: S,
      moveHand: oe,
      checkPanel: A,
      checkAmpm: R,
      end: ye,
      update: O,
      changePreventUpdate: Te,
      formatElevation: dn
    };
  }
});
Rg.render = A5;
var Zi = Rg;
ae(Zi);
le(Zi, Ig);
const qD = Zi;
var Ls = Zi;
const Lg = {
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
var Br = (e, n, o) => new Promise((t, r) => {
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
const { name: M5, n: N5, classes: V5 } = ne("uploader");
let R5 = 0;
const L5 = ["onClick"], F5 = ["onClick"], U5 = ["src", "alt"], H5 = ["tabindex"], j5 = ["multiple", "accept", "capture", "disabled"], Y5 = ["src"];
function W5(e, n) {
  const o = _("var-icon"), t = _("var-hover-overlay"), r = _("var-form-details"), a = _("var-popup"), i = Ye("ripple"), l = Ye("hover");
  return m(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      L(
        "div",
        {
          class: p(e.n("file-list"))
        },
        [
          (m(!0), P(
            Ae,
            null,
            qe(e.files, (s) => Ve((m(), P("div", {
              key: s.id,
              class: p(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
              onClick: (u) => e.preview(s)
            }, [
              L(
                "div",
                {
                  class: p(e.n("file-name"))
                },
                se(s.name || s.url),
                3
                /* TEXT, CLASS */
              ),
              e.removable ? U(e.$slots, "remove-button", {
                key: 0,
                remove: () => {
                  e.handleRemove(s);
                }
              }, () => [
                L("div", {
                  class: p(e.n("file-close")),
                  onClick: Xn((u) => e.handleRemove(s), ["stop"])
                }, [
                  X(o, {
                    class: p(e.n("file-close-icon")),
                    "var-uploader-cover": "",
                    name: "delete"
                  }, null, 8, ["class"])
                ], 10, F5)
              ]) : G("v-if", !0),
              s.cover ? (m(), P("img", {
                key: 1,
                role: "img",
                class: p(e.n("file-cover")),
                style: Z({ objectFit: s.fit }),
                src: s.cover,
                alt: s.name
              }, null, 14, U5)) : G("v-if", !0),
              L(
                "div",
                {
                  class: p(e.n("file-indicator"))
                },
                [
                  L(
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
            ], 10, L5)), [
              [i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple }]
            ])),
            128
            /* KEYED_FRAGMENT */
          )),
          !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Ve((m(), P("div", {
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
            L("input", {
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
            }, null, 42, j5),
            U(e.$slots, "default", {}, () => [
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
          ], 42, H5)), [
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
          fn: ce(() => [
            U(e.$slots, "extra-message")
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
        default: ce(() => {
          var s, u;
          return [
            e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (m(), P("video", {
              key: 0,
              class: p(e.n("preview-video")),
              playsinline: "true",
              "webkit-playsinline": "true",
              "x5-playsinline": "true",
              "x5-video-player-type": "h5",
              "x5-video-player-fullscreen": "false",
              controls: "",
              src: (u = e.currentPreview) == null ? void 0 : u.url
            }, null, 10, Y5)) : G("v-if", !0)
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
const Fg = ee({
  name: M5,
  directives: { Ripple: tn, Hover: In },
  components: {
    VarIcon: Ge,
    VarPopup: Mo,
    VarFormDetails: Tn,
    VarHoverOverlay: Fn
  },
  props: Lg,
  setup(e) {
    const n = w(!1), o = w(null), t = w(null), r = w(!1), a = w(null), i = B(() => {
      const {
        maxlength: j,
        modelValue: { length: Q }
      } = e;
      return En(j) ? `${Q} / ${j}` : "";
    }), { form: l, bindForm: s } = Hn(), {
      errorMessage: u,
      validateWithTrigger: c,
      validate: d,
      // expose
      resetValidation: f
    } = Un(), { hovering: v, handleHovering: h } = eo(), g = B(() => {
      const { modelValue: j, hideList: Q } = e;
      return Q ? [] : j;
    });
    let y = !1;
    const $ = {
      getSuccess: N,
      getError: H,
      getLoading: z
    };
    C(s, {
      validate: ye,
      resetValidation: f,
      reset: Te
    }), We(() => window, "keydown", b), We(() => window, "keyup", S), fe(
      () => e.modelValue,
      () => {
        !y && oe("onChange"), y = !1;
      },
      { deep: !0 }
    );
    function b(j) {
      n.value && ((j.key === " " || j.key === "Enter") && j.preventDefault(), j.key === "Enter" && o.value.click());
    }
    function S(j) {
      !n.value || j.key !== " " || (j.preventDefault(), o.value.click());
    }
    function T(j) {
      const { disabled: Q, previewed: re, preventDefaultPreview: ve, onPreview: I } = e;
      if (l != null && l.disabled.value || Q || !re || (C(I, xe(j)), ve))
        return;
      const { url: K } = j;
      if (Bc(K)) {
        Xt(K);
        return;
      }
      Dc(K) && (a.value = j, r.value = !0);
    }
    function O(j) {
      return {
        id: R5++,
        url: "",
        cover: "",
        name: j.name,
        file: j,
        progress: 0
      };
    }
    function D(j) {
      const Q = j.target, { files: re } = Q;
      return Array.from(re);
    }
    function A(j) {
      return Br(this, null, function* () {
        const Q = j.file;
        if (e.resolveType === "default" && Q.type.startsWith("image") || e.resolveType === "data-url") {
          const ve = yield Kf(Q);
          j.cover = ve, j.url = ve;
        }
        return j;
      });
    }
    function V(j) {
      return j.map(A);
    }
    function R(j) {
      const { onBeforeRead: Q } = e;
      return j.map(
        (re) => new Promise((ve) => {
          Q || ve({
            valid: !0,
            varFile: re
          });
          const I = fo(C(Q, xe(re)));
          Promise.all(I).then((K) => {
            ve({
              valid: K.every(Boolean),
              varFile: re
            });
          });
        })
      );
    }
    function Y(j) {
      return Br(this, null, function* () {
        const { maxsize: Q, maxlength: re, modelValue: ve, onOversize: I, onAfterRead: K, onBeforeFilter: pe, readonly: Se, disabled: Ue } = e;
        if (l != null && l.disabled.value || l != null && l.readonly.value || Ue || Se)
          return;
        const Ne = (ke) => ke.filter((Be) => Be.file.size > W(Q) ? (C(I, xe(Be)), !1) : !0), rn = (ke) => {
          const Be = Math.min(ke.length, W(re) - ve.length);
          return ke.slice(0, Be);
        }, un = (ke) => Br(this, null, function* () {
          if (!pe)
            return ke;
          const Be = fo(pe);
          for (const Qe of Be)
            ke = yield Qe(ke);
          return ke;
        });
        let me = D(j).map(O);
        me = yield un(me), me = Q != null ? Ne(me) : me, me = re != null ? rn(me) : me;
        const Ke = yield Promise.all(V(me)), de = (yield Promise.all(R(Ke))).filter(({ valid: ke }) => ke).map(({ varFile: ke }) => ke);
        C(e["onUpdate:modelValue"], [...ve, ...de]), j.target.value = "", de.forEach((ke) => C(K, xe(ke)));
      });
    }
    function E(j) {
      return Br(this, null, function* () {
        const { disabled: Q, readonly: re, modelValue: ve, onBeforeRemove: I, onRemove: K } = e;
        if (l != null && l.disabled.value || l != null && l.readonly.value || Q || re)
          return;
        if (I) {
          const Se = fo(C(I, xe(j)));
          if ((yield Promise.all(Se)).some((Ue) => !Ue))
            return;
        }
        const pe = ve.filter((Se) => Se !== j);
        C(K, xe(j)), oe("onRemove"), C(e["onUpdate:modelValue"], pe);
      });
    }
    function M(j) {
      if (!(l != null && l.disabled.value || e.disabled)) {
        if (e.onClickAction) {
          C(e.onClickAction, J, j);
          return;
        }
        J();
      }
    }
    function N() {
      return e.modelValue.filter((j) => j.state === "success");
    }
    function H() {
      return e.modelValue.filter((j) => j.state === "error");
    }
    function z() {
      return e.modelValue.filter((j) => j.state === "loading");
    }
    function J() {
      t.value.click();
    }
    function q() {
      a.value = null, r.value = !1, Xt.close();
    }
    function oe(j) {
      He(() => {
        const { validateTrigger: Q, rules: re, modelValue: ve } = e;
        c(Q, j, re, ve, $);
      });
    }
    function ye() {
      return d(e.rules, e.modelValue, $);
    }
    function Te() {
      y = !0, C(e["onUpdate:modelValue"], []), f();
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
      n: N5,
      classes: V5,
      formatElevation: dn,
      toNumber: W,
      handleHovering: h,
      isHTMLSupportVideo: Dc,
      isHTMLSupportImage: Bc,
      preview: T,
      handleChange: Y,
      handleRemove: E,
      getSuccess: N,
      getError: H,
      getLoading: z,
      validate: ye,
      resetValidation: f,
      reset: Te,
      chooseFile: J,
      closePreview: q,
      handleActionClick: M,
      toSizeUnit: Oe
    };
  }
});
Fg.render = W5;
var Ji = Fg;
ae(Ji);
le(Ji, Lg);
const XD = Ji;
var Fs = Ji;
const Ug = {
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
var K5 = Object.defineProperty, q5 = Object.defineProperties, X5 = Object.getOwnPropertyDescriptors, vf = Object.getOwnPropertySymbols, G5 = Object.prototype.hasOwnProperty, Z5 = Object.prototype.propertyIsEnumerable, mf = (e, n, o) => n in e ? K5(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, J5 = (e, n) => {
  for (var o in n || (n = {}))
    G5.call(n, o) && mf(e, o, n[o]);
  if (vf)
    for (var o of vf(n))
      Z5.call(n, o) && mf(e, o, n[o]);
  return e;
}, Q5 = (e, n) => q5(e, X5(n)), _5 = (e, n, o) => new Promise((t, r) => {
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
const { name: x5, n: eB, classes: nB } = ne("watermark"), oB = { ref: "svgRef" }, tB = ["viewBox", "width", "height"], rB = ["width", "height"], aB = ["href", "xlink:href", "x", "y", "width", "height"];
function iB(e, n) {
  return m(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      U(e.$slots, "default"),
      (m(), we(io, {
        to: "body",
        disabled: !e.fullscreen
      }, [
        L(
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
            Ve(L(
              "div",
              oB,
              [
                (m(), P("svg", {
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
                  e.showContent() ? (m(), P("foreignObject", {
                    key: 0,
                    x: "0",
                    y: "0",
                    width: e.width,
                    height: e.height
                  }, [
                    L(
                      "div",
                      {
                        xmlns: "http://www.w3.org/1999/xhtml",
                        style: Z({
                          transform: `translate(${e.offsetX}px, ${e.offsetY}px) rotate(${e.rotate}deg)`,
                          transformOrigin: "center"
                        })
                      },
                      [
                        U(e.$slots, "content", {}, () => [
                          L(
                            "span",
                            {
                              style: Z(Q5(J5({}, e.font), { fontSize: `${e.font.fontSize}px`, color: e.textColor }))
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
                  ], 8, rB)) : G("v-if", !0),
                  !e.$slots.content && e.image ? (m(), P("image", {
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
                  }, null, 12, aB)) : G("v-if", !0)
                ], 12, tB))
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
const Hg = ee({
  name: x5,
  props: Ug,
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
    ), Lo(d), Jt(c);
    function l() {
      return !!(n.content || e.content && !e.image);
    }
    function s() {
      return new Promise((f) => {
        const v = document.createElement("canvas"), h = v.getContext("2d"), g = new Image();
        g.crossOrigin = "anonymous", g.referrerPolicy = "no-referrer", g.src = e.image, g.onload = () => {
          v.width = g.width, v.height = g.height, h.drawImage(g, 0, 0), f(v.toDataURL());
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
      return _5(this, null, function* () {
        r.value = oo(i.value).color, e.image && (t.value = yield s()), yield He(), c(), o.value = u(a.value.innerHTML);
      });
    }
    return {
      svgRef: a,
      containerRef: i,
      watermarkUrl: o,
      imageUrl: t,
      textColor: r,
      n: eB,
      classes: nB,
      showContent: l,
      resize: d
    };
  }
});
Hg.render = iB;
var Qi = Hg;
ae(Qi);
le(Qi, Ug);
const GD = Qi;
var Us = Qi;
const lB = "3.9.0";
function sB(e) {
  pl.install && e.use(pl), vl.install && e.use(vl), ml.install && e.use(ml), bl.install && e.use(bl), kl.install && e.use(kl), $l.install && e.use($l), Cl.install && e.use(Cl), _r.install && e.use(_r), Sl.install && e.use(Sl), Pl.install && e.use(Pl), Ol.install && e.use(Ol), zl.install && e.use(zl), Bn.install && e.use(Bn), El.install && e.use(El), Tl.install && e.use(Tl), Bl.install && e.use(Bl), ct.install && e.use(ct), Dl.install && e.use(Dl), xr.install && e.use(xr), Al.install && e.use(Al), Ml.install && e.use(Ml), Nl.install && e.use(Nl), Vl.install && e.use(Vl), Rl.install && e.use(Rl), Vn.install && e.use(Vn), Ll.install && e.use(Ll), jl.install && e.use(jl), Zl.install && e.use(Zl), Ql.install && e.use(Ql), _l.install && e.use(_l), xl.install && e.use(xl), aa.install && e.use(aa), es.install && e.use(es), ns.install && e.use(ns), Rt.install && e.use(Rt), os.install && e.use(os), ts.install && e.use(ts), Tn.install && e.use(Tn), rs.install && e.use(rs), In.install && e.use(In), Fn.install && e.use(Fn), Ge.install && e.use(Ge), as.install && e.use(as), Xt.install && e.use(Xt), is.install && e.use(is), ls.install && e.use(ls), Lt.install && e.use(Lt), Yt.install && e.use(Yt), ss.install && e.use(ss), us.install && e.use(us), mt.install && e.use(mt), cs.install && e.use(cs), dl.install && e.use(dl), ds.install && e.use(ds), Ht.install && e.use(Ht), dt.install && e.use(dt), jt.install && e.use(jt), la.install && e.use(la), fs.install && e.use(fs), ps.install && e.use(ps), vs.install && e.use(vs), ms.install && e.use(ms), Mo.install && e.use(Mo), hs.install && e.use(hs), gs.install && e.use(gs), sa.install && e.use(sa), bs.install && e.use(bs), ys.install && e.use(ys), ws.install && e.use(ws), tn.install && e.use(tn), ks.install && e.use(ks), $s.install && e.use($s), Cs.install && e.use(Cs), Ss.install && e.use(Ss), Os.install && e.use(Os), zs.install && e.use(zs), Es.install && e.use(Es), Ts.install && e.use(Ts), bt.install && e.use(bt), Bs.install && e.use(Bs), Kt.install && e.use(Kt), qt.install && e.use(qt), Ds.install && e.use(Ds), Is.install && e.use(Is), As.install && e.use(As), Ms.install && e.use(Ms), Ns.install && e.use(Ns), Vs.install && e.use(Vs), Rs.install && e.use(Rs), Ls.install && e.use(Ls), ia.install && e.use(ia), Fs.install && e.use(Fs), Us.install && e.use(Us);
}
const ZD = {
  version: lB,
  install: sB,
  ActionSheet: pl,
  Alert: vl,
  AppBar: ml,
  AutoComplete: bl,
  Avatar: kl,
  AvatarGroup: $l,
  BackTop: Cl,
  Badge: _r,
  BottomNavigation: Sl,
  BottomNavigationItem: Pl,
  Breadcrumb: Ol,
  Breadcrumbs: zl,
  Button: Bn,
  ButtonGroup: El,
  Card: Tl,
  Cell: Bl,
  Checkbox: ct,
  CheckboxGroup: Dl,
  Chip: xr,
  Code: Al,
  Col: Ml,
  Collapse: Nl,
  CollapseItem: Vl,
  CollapseTransition: Rl,
  Context: Vn,
  CountTo: Ll,
  Countdown: jl,
  Counter: Zl,
  DatePicker: Ql,
  Dialog: _l,
  Divider: xl,
  Drag: aa,
  Ellipsis: es,
  Fab: ns,
  FieldDecorator: Rt,
  FloatingPanel: os,
  Form: ts,
  FormDetails: Tn,
  HighlighterProvider: rs,
  Hover: In,
  HoverOverlay: Fn,
  Icon: Ge,
  Image: as,
  ImagePreview: Xt,
  IndexAnchor: is,
  IndexBar: ls,
  Input: Lt,
  Lazy: Yt,
  Link: ss,
  List: us,
  Loading: mt,
  LoadingBar: cs,
  Locale: dl,
  LocaleProvider: ds,
  Menu: Ht,
  MenuOption: dt,
  MenuSelect: jt,
  Option: la,
  Overlay: fs,
  Pagination: ps,
  Paper: vs,
  Picker: ms,
  Popup: Mo,
  Progress: hs,
  PullRefresh: gs,
  Radio: sa,
  RadioGroup: bs,
  Rate: ys,
  Result: ws,
  Ripple: tn,
  Row: ks,
  Select: $s,
  Skeleton: Cs,
  Slider: Ss,
  Snackbar: Os,
  Space: zs,
  Step: Es,
  Steps: Ts,
  Sticky: bt,
  StyleProvider: Bs,
  Swipe: Kt,
  SwipeItem: qt,
  Switch: Ds,
  Tab: Is,
  TabItem: As,
  Table: Ms,
  Tabs: Ns,
  TabsItems: Vs,
  Themes: Rs,
  TimePicker: Ls,
  Tooltip: ia,
  Uploader: Fs,
  Watermark: Us
};
export {
  pl as ActionSheet,
  vl as Alert,
  ml as AppBar,
  bl as AutoComplete,
  kl as Avatar,
  $l as AvatarGroup,
  Cl as BackTop,
  _r as Badge,
  Sl as BottomNavigation,
  Pl as BottomNavigationItem,
  Ol as Breadcrumb,
  zl as Breadcrumbs,
  Bn as Button,
  El as ButtonGroup,
  Tl as Card,
  Bl as Cell,
  ct as Checkbox,
  Dl as CheckboxGroup,
  xr as Chip,
  Al as Code,
  Ml as Col,
  Nl as Collapse,
  Vl as CollapseItem,
  Rl as CollapseTransition,
  Vn as Context,
  Ll as CountTo,
  jl as Countdown,
  Zl as Counter,
  Ql as DatePicker,
  _l as Dialog,
  xl as Divider,
  aa as Drag,
  es as Ellipsis,
  ns as Fab,
  Rt as FieldDecorator,
  os as FloatingPanel,
  ts as Form,
  Tn as FormDetails,
  rs as HighlighterProvider,
  In as Hover,
  Fn as HoverOverlay,
  Ge as Icon,
  as as Image,
  Xt as ImagePreview,
  is as IndexAnchor,
  ls as IndexBar,
  Lt as Input,
  Yt as Lazy,
  ss as Link,
  us as List,
  mt as Loading,
  cs as LoadingBar,
  dl as Locale,
  ds as LocaleProvider,
  Ht as Menu,
  dt as MenuOption,
  jt as MenuSelect,
  la as Option,
  fs as Overlay,
  wl as PIXEL,
  ps as Pagination,
  vs as Paper,
  ms as Picker,
  Mo as Popup,
  hs as Progress,
  gs as PullRefresh,
  sa as Radio,
  bs as RadioGroup,
  ys as Rate,
  ws as Result,
  tn as Ripple,
  ks as Row,
  sg as SNACKBAR_TYPE,
  $s as Select,
  Cs as Skeleton,
  Ss as Slider,
  Os as Snackbar,
  zs as Space,
  Es as Step,
  Ts as Steps,
  bt as Sticky,
  Bs as StyleProvider,
  Kt as Swipe,
  qt as SwipeItem,
  Ds as Switch,
  Is as Tab,
  As as TabItem,
  Ms as Table,
  Ns as Tabs,
  Vs as TabsItems,
  Rs as Themes,
  Ls as TimePicker,
  ia as Tooltip,
  Fs as Uploader,
  Us as Watermark,
  gB as _ActionSheetComponent,
  bB as _AlertComponent,
  yB as _AppBarComponent,
  zB as _AutoCompleteComponent,
  TB as _AvatarComponent,
  BB as _AvatarGroupComponent,
  AB as _BackTopComponent,
  MB as _BadgeComponent,
  NB as _BottomNavigationComponent,
  VB as _BottomNavigationItemComponent,
  RB as _BreadcrumbComponent,
  LB as _BreadcrumbsComponent,
  IB as _ButtonComponent,
  FB as _ButtonGroupComponent,
  UB as _CardComponent,
  HB as _CellComponent,
  CB as _CheckboxComponent,
  jB as _CheckboxGroupComponent,
  YB as _ChipComponent,
  WB as _CodeComponent,
  KB as _ColComponent,
  qB as _CollapseComponent,
  XB as _CollapseItemComponent,
  GB as _CollapseTransitionComponent,
  dB as _ContextComponent,
  ZB as _CountToComponent,
  JB as _CountdownComponent,
  QB as _CounterComponent,
  xB as _DatePickerComponent,
  eD as _DialogComponent,
  nD as _DividerComponent,
  oD as _DragComponent,
  rD as _EllipsisComponent,
  aD as _FabComponent,
  kB as _FieldDecoratorComponent,
  iD as _FloatingPanelComponent,
  lD as _FormComponent,
  wB as _FormDetailsComponent,
  sD as _HighlighterProviderComponent,
  vB as _HoverComponent,
  mB as _HoverOverlayComponent,
  hB as _IconComponent,
  uD as _ImageComponent,
  fD as _ImagePreviewComponent,
  pD as _IndexAnchorComponent,
  vD as _IndexBarComponent,
  $B as _InputComponent,
  EB as _LazyComponent,
  mD as _LinkComponent,
  hD as _ListComponent,
  gD as _LoadingBarComponent,
  DB as _LoadingComponent,
  cB as _LocaleComponent,
  bD as _LocaleProviderComponent,
  PB as _MenuComponent,
  SB as _MenuOptionComponent,
  OB as _MenuSelectComponent,
  yD as _OptionComponent,
  wD as _OverlayComponent,
  kD as _PaginationComponent,
  $D as _PaperComponent,
  CD as _PickerComponent,
  fB as _PopupComponent,
  SD as _ProgressComponent,
  PD as _PullRefreshComponent,
  OD as _RadioComponent,
  zD as _RadioGroupComponent,
  ED as _RateComponent,
  TD as _ResultComponent,
  pB as _RippleComponent,
  BD as _RowComponent,
  DD as _SelectComponent,
  ID as _SkeletonComponent,
  AD as _SliderComponent,
  MD as _SnackbarComponent,
  ND as _SpaceComponent,
  VD as _StepComponent,
  RD as _StepsComponent,
  _B as _StickyComponent,
  LD as _StyleProviderComponent,
  cD as _SwipeComponent,
  dD as _SwipeItemComponent,
  FD as _SwitchComponent,
  UD as _TabComponent,
  HD as _TabItemComponent,
  jD as _TableComponent,
  YD as _TabsComponent,
  WD as _TabsItemsComponent,
  KD as _ThemesComponent,
  qD as _TimePickerComponent,
  tD as _TooltipComponent,
  XD as _UploaderComponent,
  GD as _WatermarkComponent,
  zp as actionSheetProps,
  ru as add,
  Tp as alertProps,
  Dp as appBarProps,
  vv as avatarGroupProps,
  fv as avatarProps,
  wv as backTopProps,
  $v as badgeProps,
  zv as bottomNavigationItemProps,
  Sv as bottomNavigationProps,
  Tv as breadcrumbProps,
  Iv as breadcrumbsProps,
  Mv as buttonGroupProps,
  gv as buttonProps,
  Vv as cardProps,
  Lv as cellProps,
  Uv as checkboxGroupProps,
  Up as checkboxProps,
  jv as chipProps,
  Wv as codeProps,
  qv as colProps,
  xv as collapseItemProps,
  Zv as collapseProps,
  nm as collapseTransitionProps,
  tm as countToProps,
  am as countdownProps,
  bm as counterProps,
  rp as currentMessage,
  Pm as datePickerProps,
  ZD as default,
  pn as defaultLazyOptions,
  Mm as dialogProps,
  Vm as dividerProps,
  Lm as dragProps,
  jm as ellipsisProps,
  xf as enUS,
  ep as faIR,
  Wm as fabProps,
  ka as fieldDecoratorProps,
  Ap as formDetailsProps,
  Xm as formProps,
  kp as hoverOverlayProps,
  on as iconProps,
  lv as imageCache,
  eh as imagePreviewProps,
  Jm as imageProps,
  oh as indexAnchorProps,
  ah as indexBarProps,
  du as inputProps,
  sB as install,
  lh as linkProps,
  uh as listProps,
  eO as loadingBarProps,
  uo as loadingProps,
  Yp as menuOptionProps,
  fu as menuProps,
  Jr as menuSelectProps,
  ap as merge,
  tp as messages,
  $h as optionProps,
  Ph as overlayProps,
  Oh as paginationProps,
  Eh as paperProps,
  Bh as pickerProps,
  Ct as popupProps,
  Ih as progressProps,
  Mh as pullRefreshProps,
  Fh as radioGroupProps,
  Vh as radioProps,
  Hh as rateProps,
  Yh as resultProps,
  Qh as rowProps,
  xh as selectProps,
  ng as skeletonProps,
  tg as sliderProps,
  Du as snackbarProps,
  dg as spaceProps,
  fg as stepProps,
  mg as stepsProps,
  At as stickyProps,
  gg as styleProviderProps,
  Ou as swipeProps,
  yg as switchProps,
  an as t,
  Sg as tabItemProps,
  kg as tabProps,
  Og as tableProps,
  Bg as tabsItemsProps,
  Eg as tabsProps,
  Ig as timePickerProps,
  Um as tooltipProps,
  Lg as uploaderProps,
  au as use,
  eo as useHoverOverlay,
  tu as useLocale,
  lB as version,
  Ug as watermarkProps,
  nu as zhCN,
  op as zhHK,
  ou as zhTW
};
