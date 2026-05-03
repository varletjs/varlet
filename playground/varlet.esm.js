import { Comment as Gg, Fragment as De, Teleport as cr, Transition as en, TransitionGroup as Zg, computed as E, createApp as Jg, createBlock as ke, createCommentVNode as K, createElementBlock as S, createElementVNode as V, createSlots as Xr, createTextVNode as Ie, createVNode as X, defineComponent as ee, getCurrentInstance as Qr, guardReactiveProps as va, h as xo, inject as xs, isRef as Qg, isVNode as xg, mergeProps as je, nextTick as Ve, normalizeClass as p, normalizeProps as Kr, normalizeStyle as q, onActivated as Vr, onBeforeMount as _g, onBeforeUnmount as pa, onDeactivated as mo, onMounted as br, onUnmounted as _o, onUpdated as et, openBlock as g, provide as _s, reactive as nn, ref as y, renderList as Ke, renderSlot as L, resolveComponent as x, resolveDirective as We, resolveDynamicComponent as ho, shallowRef as eb, toDisplayString as ue, unref as eu, vModelText as Of, vShow as Jn, watch as pe, withCtx as ve, withDirectives as Me, withKeys as Fu, withModifiers as Fn } from "vue";
var bl = Object.defineProperty, nb = Object.getOwnPropertyDescriptor, rb = Object.getOwnPropertyNames, ob = Object.prototype.hasOwnProperty, Pf = (e, n) => {
  let r = {};
  for (var o in e) bl(r, o, {
    get: e[o],
    enumerable: !0
  });
  return n || bl(r, Symbol.toStringTag, { value: "Module" }), r;
}, Uu = (e, n, r, o) => {
  if (n && typeof n == "object" || typeof n == "function") for (var t = rb(n), a = 0, i = t.length, l; a < i; a++)
    l = t[a], !ob.call(e, l) && l !== r && bl(e, l, {
      get: ((s) => n[s]).bind(null, l),
      enumerable: !(o = nb(n, l)) || o.enumerable
    });
  return e;
}, tb = (e, n, r) => (Uu(e, n, "default"), r && Uu(r, n, "default"));
function He(e) {
  return Array.isArray(e);
}
function tn(e) {
  return typeof e == "string";
}
function fn(e) {
  return typeof e == "function";
}
function ro(e, ...n) {
  return fn(e) ? e(...n) : e;
}
var ab = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
function ib(e) {
  return typeof e == "string" && ab.test(e);
}
function lb(e) {
  if (!ib(e)) throw TypeError("Invalid UUID");
  let n;
  return Uint8Array.of((n = parseInt(e.slice(0, 8), 16)) >>> 24, n >>> 16 & 255, n >>> 8 & 255, n & 255, (n = parseInt(e.slice(9, 13), 16)) >>> 8, n & 255, (n = parseInt(e.slice(14, 18), 16)) >>> 8, n & 255, (n = parseInt(e.slice(19, 23), 16)) >>> 8, n & 255, (n = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, n / 4294967296 & 255, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, n & 255);
}
var kn = [];
for (let e = 0; e < 256; ++e) kn.push((e + 256).toString(16).slice(1));
function ma(e, n = 0) {
  return (kn[e[n + 0]] + kn[e[n + 1]] + kn[e[n + 2]] + kn[e[n + 3]] + "-" + kn[e[n + 4]] + kn[e[n + 5]] + "-" + kn[e[n + 6]] + kn[e[n + 7]] + "-" + kn[e[n + 8]] + kn[e[n + 9]] + "-" + kn[e[n + 10]] + kn[e[n + 11]] + kn[e[n + 12]] + kn[e[n + 13]] + kn[e[n + 14]] + kn[e[n + 15]]).toLowerCase();
}
var ll, sb = new Uint8Array(16);
function yl() {
  if (!ll) {
    if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    ll = crypto.getRandomValues.bind(crypto);
  }
  return ll(sb);
}
var So = {};
function ub(e, n, r) {
  let o;
  const t = e?._v6 ?? !1;
  if (e) {
    const a = Object.keys(e);
    a.length === 1 && a[0] === "_v6" && (e = void 0);
  }
  if (e) o = Hu(e.random ?? e.rng?.() ?? yl(), e.msecs, e.nsecs, e.clockseq, e.node, n, r);
  else {
    const a = Date.now(), i = yl();
    db(So, a, i), o = Hu(i, So.msecs, So.nsecs, t ? void 0 : So.clockseq, t ? void 0 : So.node, n, r);
  }
  return n ?? ma(o);
}
function db(e, n, r) {
  return e.msecs ??= -1 / 0, e.nsecs ??= 0, n === e.msecs ? (e.nsecs++, e.nsecs >= 1e4 && (e.node = void 0, e.nsecs = 0)) : n > e.msecs ? e.nsecs = 0 : n < e.msecs && (e.node = void 0), e.node || (e.node = r.slice(10, 16), e.node[0] |= 1, e.clockseq = (r[8] << 8 | r[9]) & 16383), e.msecs = n, e;
}
function Hu(e, n, r, o, t, a, i = 0) {
  if (e.length < 16) throw new Error("Random bytes length must be >= 16");
  if (!a)
    a = new Uint8Array(16), i = 0;
  else if (i < 0 || i + 16 > a.length) throw new RangeError(`UUID byte range ${i}:${i + 15} is out of buffer bounds`);
  n ??= Date.now(), r ??= 0, o ??= (e[8] << 8 | e[9]) & 16383, t ??= e.slice(10, 16), n += 122192928e5;
  const l = ((n & 268435455) * 1e4 + r) % 4294967296;
  a[i++] = l >>> 24 & 255, a[i++] = l >>> 16 & 255, a[i++] = l >>> 8 & 255, a[i++] = l & 255;
  const s = n / 4294967296 * 1e4 & 268435455;
  a[i++] = s >>> 8 & 255, a[i++] = s & 255, a[i++] = s >>> 24 & 15 | 16, a[i++] = s >>> 16 & 255, a[i++] = o >>> 8 | 128, a[i++] = o & 255;
  for (let u = 0; u < 6; ++u) a[i++] = t[u];
  return a;
}
function cb(e) {
  const n = fb(typeof e == "string" ? lb(e) : e);
  return typeof e == "string" ? ma(n) : n;
}
function fb(e) {
  return Uint8Array.of((e[6] & 15) << 4 | e[7] >> 4 & 15, (e[7] & 15) << 4 | (e[4] & 240) >> 4, (e[4] & 15) << 4 | (e[5] & 240) >> 4, (e[5] & 15) << 4 | (e[0] & 240) >> 4, (e[0] & 15) << 4 | (e[1] & 240) >> 4, (e[1] & 15) << 4 | (e[2] & 240) >> 4, 96 | e[2] & 15, e[3], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]);
}
var vb = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Yu = { randomUUID: vb };
function pb(e, n, r) {
  e = e || {};
  const o = e.random ?? e.rng?.() ?? yl();
  if (o.length < 16) throw new Error("Random bytes length must be >= 16");
  if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, n) {
    if (r = r || 0, r < 0 || r + 16 > n.length) throw new RangeError(`UUID byte range ${r}:${r + 15} is out of buffer bounds`);
    for (let t = 0; t < 16; ++t) n[r + t] = o[t];
    return n;
  }
  return ma(o);
}
function zf(e, n, r) {
  return Yu.randomUUID && !n && !e ? Yu.randomUUID() : pb(e, n, r);
}
function Tf(e, n, r) {
  e ??= {}, r ??= 0;
  let o = ub({
    ...e,
    _v6: !0
  }, new Uint8Array(16));
  if (o = cb(o), n) {
    for (let t = 0; t < 16; t++) n[r + t] = o[t];
    return n;
  }
  return ma(o);
}
function Ef(e) {
  return {
    all: e = e || /* @__PURE__ */ new Map(),
    on: function(n, r) {
      var o = e.get(n);
      o ? o.push(r) : e.set(n, [r]);
    },
    off: function(n, r) {
      var o = e.get(n);
      o && (r ? o.splice(o.indexOf(r) >>> 0, 1) : e.set(n, []));
    },
    emit: function(n, r) {
      var o = e.get(n);
      o && o.slice().map(function(t) {
        t(r);
      }), (o = e.get("*")) && o.slice().map(function(t) {
        t(n, r);
      });
    }
  };
}
function ht(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n];
    for (var o in r) e[o] = r[o];
  }
  return e;
}
var mb = {
  read: function(e) {
    return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(e) {
    return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
  }
};
function wl(e, n) {
  function r(t, a, i) {
    if (!(typeof document > "u")) {
      i = ht({}, n, i), typeof i.expires == "number" && (i.expires = new Date(Date.now() + i.expires * 864e5)), i.expires && (i.expires = i.expires.toUTCString()), t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var l = "";
      for (var s in i)
        i[s] && (l += "; " + s, i[s] !== !0 && (l += "=" + i[s].split(";")[0]));
      return document.cookie = t + "=" + e.write(a, t) + l;
    }
  }
  function o(t) {
    if (!(typeof document > "u" || arguments.length && !t)) {
      for (var a = document.cookie ? document.cookie.split("; ") : [], i = {}, l = 0; l < a.length; l++) {
        var s = a[l].split("="), u = s.slice(1).join("=");
        try {
          var d = decodeURIComponent(s[0]);
          if (i[d] = e.read(u, d), t === d) break;
        } catch {
        }
      }
      return t ? i[t] : i;
    }
  }
  return Object.create({
    set: r,
    get: o,
    remove: function(t, a) {
      r(t, "", ht({}, a, { expires: -1 }));
    },
    withAttributes: function(t) {
      return wl(this.converter, ht({}, this.attributes, t));
    },
    withConverter: function(t) {
      return wl(ht({}, this.converter, t), this.attributes);
    }
  }, {
    attributes: { value: Object.freeze(n) },
    converter: { value: Object.freeze(e) }
  });
}
var sl = wl(mb, { path: "/" });
function nt(e, n) {
  if (e.length)
    return n < 0 && (n += e.length), e[n];
}
function $n(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
function If(e, n) {
  return $n(e, 0, n.length - 1);
}
function hb(e) {
  return new Promise((n) => {
    setTimeout(n, e);
  });
}
function Bf(e = 0, n = 100) {
  return Math.floor(Math.random() * (n - e + 1)) + e;
}
function gb(e, n) {
  return Array.from({ length: e }, (r, o) => n(o));
}
function or() {
  return typeof window < "u";
}
function rt() {
  return typeof globalThis < "u" ? globalThis : or() ? window : typeof global < "u" ? global : self;
}
var { hasOwnProperty: bb } = Object.prototype;
function Ir(e, n) {
  return bb.call(e, n);
}
function No() {
  return or() && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
var Df = Object.prototype.toString;
function nu(e) {
  return Df.call(e);
}
function Ze(e) {
  return nu(e).slice(8, -1);
}
function Ut(e) {
  return Ze(e) === "ArrayBuffer";
}
function ot(e) {
  return typeof e == "boolean";
}
function Ht(e) {
  return Ze(e) === "DataView";
}
function Yt(e) {
  return Ze(e) === "Date";
}
function jt(e) {
  return Ze(e) === "DOMException";
}
function Xn(e) {
  return e == null || e === "" || He(e) && !e.length;
}
function Wt(e) {
  return Ze(e) === "Error";
}
function Kt(e) {
  return Ze(e) === "Map";
}
function nr(e) {
  return typeof e == "object" && e !== null;
}
function gn(e) {
  return Ze(e) === "Object";
}
function qt(e) {
  return Ze(e) === "RegExp";
}
function Xt(e) {
  return Ze(e) === "Set";
}
function Gt(e) {
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
  ].includes(Ze(e));
}
function Mf(e, n, r) {
  const o = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
  function a(i, l, s, u) {
    if (r(i, l) === !0 || i === l || i !== i && l !== l) return !0;
    if (!nr(i) || !nr(l)) return i === l;
    if (i.constructor !== l.constructor) return !1;
    if (Ze(i) === "String" && Ze(l) === "String" || Ze(i) === "Number" && Ze(l) === "Number" || Ze(i) === "Boolean" && Ze(l) === "Boolean" || Ze(i) === "BigInt" && Ze(l) === "BigInt" || Ze(i) === "Symbol" && Ze(l) === "Symbol") return i.valueOf() === l.valueOf();
    if (Yt(i) && Yt(l)) return i.getTime() === l.getTime();
    if (qt(i) && qt(l)) return i.source === l.source && i.flags === l.flags;
    if (Wt(i) && Wt(l)) return i.name === l.name && i.message === l.message && i.cause === l.cause;
    if (jt(i) && jt(l)) return i.name === l.name && i.message === l.message;
    if (Gt(i) && Gt(l) || Ht(i) && Ht(l)) {
      if (i.byteLength !== l.byteLength) return !1;
      const d = new Uint8Array(i.buffer), c = new Uint8Array(l.buffer);
      return d.every((f, v) => f === c[v]);
    }
    if (Ut(i) && Ut(l)) {
      if (i.byteLength !== l.byteLength) return !1;
      const d = new Uint8Array(i), c = new Uint8Array(l);
      return d.every((f, v) => f === c[v]);
    }
    if (s.get(i) === l && u.get(l) === i) return !0;
    if (s.set(i, l), u.set(l, i), Kt(i) && Kt(l) || Xt(i) && Xt(l)) {
      if (i.size !== l.size) return !1;
      const d = [...i], c = [...l], f = d.every((v, m) => a(v, c[m], s, u));
      return s.delete(i), u.delete(l), f;
    }
    if (He(i) && He(l)) {
      if (i.length !== l.length) return !1;
      const d = i.every((c, f) => a(c, l[f], s, u));
      return s.delete(i), u.delete(l), d;
    }
    if (gn(i) && gn(l)) {
      const d = [...Object.keys(i), ...Object.getOwnPropertySymbols(i)], c = [...Object.keys(l), ...Object.getOwnPropertySymbols(l)];
      if (d.length !== c.length) return !1;
      const f = d.every((v) => a(i[v], l[v], s, u));
      return s.delete(i), u.delete(l), f;
    }
    return !1;
  }
  return a(e, n, o, t);
}
function yb(e, n) {
  return Mf(e, n, () => {
  });
}
function wb(e) {
  return He(e) && !!e.length;
}
function kb(e) {
  return e == null;
}
function zn(e) {
  return typeof e == "number";
}
function ru(e) {
  return zn(e) || tn(e) && /^[-+]?\d+$/.test(e);
}
function $b(e) {
  return nr(e) && fn(e.then) && fn(e.catch);
}
function Cb(e) {
  return typeof e == "symbol";
}
function Sb(e) {
  return !!e;
}
function Af(e) {
  return Ze(e) === "WeakMap";
}
function Nf(e) {
  return Ze(e) === "WeakSet";
}
function ha(e) {
  return e === window;
}
function Vf() {
  return or() && "ontouchstart" in window;
}
function Ob(e) {
  return Ze(e) === "File";
}
function Pb(e) {
  return Ze(e) === "Blob";
}
function zb(e) {
  return e == null || typeof e != "object" && typeof e != "function";
}
function Tb(e) {
  return gn(e) && Object.keys(e).length === 0 && Object.getOwnPropertySymbols(e).length === 0;
}
function Rf(e, n) {
  if (!e) throw new Error(n);
}
function Eb(e) {
  return Zt(e).length !== e.length;
}
function Ib(e, n) {
  return Vo(e, n).length !== e.length;
}
function H(e) {
  return e == null ? 0 : tn(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : ot(e) ? Number(e) : e;
}
var Bb = 0;
function Db() {
  return Bb++;
}
function Mb(e, n = 1) {
  n = $n(n, 1, e.length);
  const r = [];
  let o = 0;
  for (; o < e.length; )
    r.push(e.slice(o, o + n)), o += n;
  return r;
}
function Br(e, n) {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1) return e.splice(r, 1);
  }
}
function Ab(e, n) {
  if (e.length) {
    const r = e.findIndex((o) => n(o));
    if (r > -1) return e.splice(r, 1);
  }
}
function Nb(e, n) {
  let r = 0;
  const o = [];
  for (; r < e.length; ) n(e[r]) ? o.push(...e.splice(r, 1)) : r++;
  return o;
}
function Vb(e, n) {
  return e.includes(n) ? Br(e, n) : e.push(n), e;
}
function Zt(e) {
  return [...new Set(e)];
}
function Vo(e, n) {
  return e.reduce((r, o) => (r.findIndex((t) => n(o, t)) === -1 && r.push(o), r), []);
}
function Lf(e, n, r = "start") {
  let o = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && o >= 0 && o <= e.length - 1; ) {
    if (n(e[o], o, e)) return [e[o], o];
    r === "start" ? o++ : o--;
  }
  return [null, -1];
}
function Rb(e) {
  for (let n = e.length - 1; n > 0; n--) {
    const r = Math.floor(Math.random() * (n + 1));
    [e[n], e[r]] = [e[r], e[n]];
  }
  return e;
}
function Ff(e) {
  return e.filter((n) => n != null);
}
function Lb(e) {
  return e.filter((n) => n != null && n !== "");
}
function hr(e) {
  return He(e) ? e : [e];
}
function Jt(e, ...n) {
  const r = nt(n, -1), o = n.slice(0, -1).reduce((t, a) => [...t, ...a], []);
  return e.filter((t) => !o.some((a) => r(t, a)));
}
function Fb(e, ...n) {
  return Jt(e, ...n, (r, o) => r === o);
}
function Uf(...e) {
  const n = nt(e, -1), r = e.slice(0, -1);
  if (r.length === 0) return [];
  if (r.length === 1) return Vo(r[0], n);
  function o(t, a) {
    return t.filter((i) => a.some((l) => n(i, l)));
  }
  return Vo(r.reduce((t, a) => o(t, a)), n);
}
function Ub(...e) {
  return Uf(...e, (n, r) => n === r);
}
function Hb(e, n) {
  return e.reduce((r, o) => {
    const t = n(o);
    return (r[t] ??= []).push(o), r;
  }, {});
}
function Hf(...e) {
  const n = nt(e, -1);
  return Vo(e.slice(0, -1).reduce((r, o) => [...Jt(r, o, n), ...Jt(o, r, n)]), n);
}
function Yb(...e) {
  return Hf(...e, (n, r) => n === r);
}
function jb(e, n) {
  return n.reduce((r, o) => (r[o] = e[o], r), {});
}
function Wb(e, n) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)].reduce((r, o) => {
    const t = e[o];
    return n(t, o) && (r[o] = t), r;
  }, {});
}
function Kb(e, n) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)].reduce((r, o) => (n.includes(o) || (r[o] = e[o]), r), {});
}
function qb(e, n) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)].reduce((r, o) => {
    const t = e[o];
    return n(t, o) || (r[o] = t), r;
  }, {});
}
function Xb(e, n) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)].reduce((r, o) => {
    const t = Ir(n, o) ? n[o] : o;
    return r[t] = e[o], r;
  }, {});
}
function Gb(e, n) {
  return Object.entries(e).reduce((r, [o, t]) => {
    const a = n(o, t);
    if (He(a)) {
      const [i, l] = a;
      r[i] = l;
    }
    return r;
  }, {});
}
function Zb() {
  let e, n;
  return {
    promise: new Promise((r, o) => {
      e = r, n = o;
    }),
    resolve: e,
    reject: n
  };
}
function Jb(e, n, r) {
  if (!nr(e)) return;
  const o = [...n];
  if (o.length === 0) return;
  let t = e;
  for (; o.length > 1; ) {
    const a = o.shift(), i = o[0];
    nr(t[a]) || (t[a] = zn(i) ? [] : {}), t = t[a];
  }
  t[o[0]] = r;
}
function Qb(e) {
  return Object.keys(e);
}
function xb(e) {
  return Object.entries(e);
}
var _b = /* @__PURE__ */ Pf({
  mitt: () => Ef,
  uuid: () => zf,
  uuidV6: () => Tf
});
function Ro(e) {
  const n = rt();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Yf(...e) {
  return e.map((n) => {
    if (He(n)) {
      const [r, o, t = null] = n;
      return r ? o : t;
    }
    return n;
  });
}
function e0(e) {
  if (!e) return;
  const n = document.createElement("textarea");
  n.value = e, n.style.position = "fixed", n.style.opacity = "0", document.body.appendChild(n), n.select(), document.execCommand("copy"), document.body.removeChild(n);
}
function n0(e, { prefix: n = 2, suffix: r = 2, mask: o = "*", maskLength: t } = {}) {
  if (e.length <= 1) return e;
  const a = Math.min(n, e.length - 1), i = Math.min(r, Math.max(e.length - a - 1, 0)), l = t ?? e.length - a - i, s = i > 0 ? e.slice(-i) : "";
  return e.slice(0, a) + o.repeat(l) + s;
}
function ga(e) {
  return e = e.replace(/[-_](\w)/g, (n, r) => r.toUpperCase()), e.replace(e.charAt(0), e.charAt(0).toLowerCase());
}
function r0(e, n) {
  return e.startsWith(n) ? e : n + e;
}
function o0(e, n) {
  return e.endsWith(n) ? e : e + n;
}
var t0 = 0;
function a0() {
  return `generated-key-${t0++}`;
}
function ou(e) {
  return e.replace(/([A-Z])/g, " $1").replace(/[_\s]+/g, "-").trim().replace(/^-/, "").toLowerCase();
}
function jf(e) {
  const n = ga(e);
  return n.replace(n.charAt(0), n.charAt(0).toUpperCase());
}
function i0(e) {
  return e.charAt(0).toLowerCase() + e.slice(1);
}
function l0(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function s0() {
  const e = "0123456789abcdef";
  let n = "#";
  for (let r = 0; r < 6; r++) n += e[Math.floor(Math.random() * 16)];
  return n;
}
function u0(e = 10) {
  let n = r();
  for (; n.length < e; ) n += r();
  function r() {
    return Math.random().toString(36).slice(2);
  }
  return n.slice(0, e);
}
function d0(e) {
  return e.startsWith("\\\\?\\") ? e : e.replace(/\\/g, "/");
}
function Wf(e) {
  return (n) => {
    const r = `${e}-${n}`, o = (t) => t ? t[0] === "$" ? t.replace("$", e) : t.startsWith("--") ? `${r}${t}` : `${r}__${t}` : r;
    return {
      name: jf(r),
      n: o,
      classes: Yf
    };
  };
}
function Gr(e) {
  const n = rt();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e);
}
function Sn() {
  return new Promise((e) => {
    Gr(() => {
      Gr(e);
    });
  });
}
function Qn(e) {
  return window.getComputedStyle(e);
}
function Kf(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const r = /(scroll|auto)/, { overflowY: o, overflow: t } = Qn(n);
    if (r.test(o) || r.test(t)) return n;
  }
  return window;
}
function c0(e) {
  const n = [];
  let r = e;
  for (; !ha(r); )
    r = Kf(r), n.push(r);
  return n;
}
function on(e) {
  if (ha(e)) {
    const n = e.innerWidth, r = e.innerHeight, o = {
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
      ...o,
      toJSON: () => o
    };
  }
  return e.getBoundingClientRect();
}
function ba(e) {
  const n = "scrollLeft" in e ? e.scrollLeft : e.scrollX;
  return Math.max(n, 0);
}
function Dr(e) {
  const n = "scrollTop" in e ? e.scrollTop : e.scrollY;
  return Math.max(n, 0);
}
function qf(e) {
  const { top: n, bottom: r, left: o, right: t } = on(e), { width: a, height: i } = on(window);
  return o <= a && t >= 0 && n <= i && r >= 0;
}
function f0(e) {
  return JSON.stringify(e, null, 2);
}
function Ae(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function Tr() {
  return new Promise((e) => {
    Gr(e);
  });
}
function tu(e) {
  return {
    ...e,
    set(n, r) {
      r != null && (tn(r) || (r = JSON.stringify(r)), e.setItem(n, r));
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
function v0(e = {}) {
  const n = e;
  return {
    set(r, o, t = {}) {
      o != null && (tn(o) || (o = JSON.stringify(o)), sl.set(r, o, {
        ...n,
        ...t
      }));
    },
    get(r) {
      const o = sl.get(r);
      try {
        return JSON.parse(o);
      } catch {
        return o;
      }
    },
    remove(r, o = {}) {
      sl.remove(r, {
        ...n,
        ...o
      });
    }
  };
}
var p0 = tu(rt().sessionStorage), m0 = tu(rt().localStorage);
function h0(e) {
  try {
    return JSON.parse(e);
  } catch {
    return;
  }
}
function g0(e, n = "file") {
  const r = document.createElement("a");
  r.style.display = "none", r.href = tn(e) ? e : URL.createObjectURL(e), r.download = n, document.body.appendChild(r), r.click(), URL.revokeObjectURL(r.href), document.body.removeChild(r);
}
function k(e, ...n) {
  if (He(e)) return e.map((r) => r(...n));
  if (e) return e(...n);
}
function b0(e, ...n) {
  try {
    return [void 0, e(...n)];
  } catch (r) {
    return [r, void 0];
  }
}
async function y0(e, ...n) {
  try {
    return [void 0, await e(...n)];
  } catch (r) {
    return [r, void 0];
  }
}
function w0(e) {
  let n = !1, r;
  return function(...o) {
    return n || (n = !0, r = e.apply(this, o)), r;
  };
}
function k0(e, n = 0) {
  let r;
  return function(...o) {
    r && clearTimeout(r), r = setTimeout(() => {
      e.apply(this, o);
    }, n);
  };
}
function ya(e, n = 200) {
  let r, o = 0;
  return function t(...a) {
    const i = performance.now(), l = i - o;
    o || (o = i), r && clearTimeout(r), l >= n ? (e.apply(this, a), o = i) : r = setTimeout(() => {
      t.apply(this, a);
    }, n - l);
  };
}
function $0() {
}
function C0(e) {
  const n = Object.entries(e).reduce((f, [v, m]) => (f[v] = gn(m) ? m.value : m, f), {}), r = Object.values(e);
  function o(f) {
    const v = c(f);
    return v?.label ? ro(v.label) : "";
  }
  function t(f) {
    const v = c(f);
    return v?.description ? ro(v.description) : "";
  }
  function a() {
    return r.map((f) => gn(f) ? f.value : f);
  }
  function i() {
    return r.map((f) => gn(f) && f.label ? ro(f.label) : "");
  }
  function l() {
    return r.map((f) => gn(f) && f.description ? ro(f.description) : "");
  }
  function s(f) {
    const v = {};
    for (const m of Object.keys(f)) v[m] = ro(f[m]);
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
    return r.map((f) => gn(f) ? s(f) : {
      value: f,
      label: "",
      description: ""
    });
  }
  function c(f) {
    return r.find((v) => gn(v) && v.value === f);
  }
  return {
    ...n,
    values: a,
    label: o,
    description: t,
    labels: i,
    descriptions: l,
    option: u,
    options: d
  };
}
function Xf(e) {
  const { from: n, to: r, duration: o = 300, frame: t = () => {
  }, timingFunction: a = (b) => b, onStateChange: i = () => {
  } } = e;
  let l = "pending", s = n;
  const u = r - n;
  let d, c, f, v = 0;
  function m() {
    if (l === "running" || l === "finished") return;
    C("running");
    const b = performance.now();
    c = c ?? b, v += f != null ? b - f : 0, f = void 0, P();
    function P() {
      d = Gr(() => {
        const O = $n((performance.now() - c - v) / o, 0, 1);
        if (s = u * a(O) + n, O >= 1) {
          C("finished"), t({
            value: r,
            done: !0
          });
          return;
        }
        t({
          value: s,
          done: !1
        }), P();
      });
    }
  }
  function h() {
    l === "running" && (Ro(d), C("paused"), f = performance.now());
  }
  function w() {
    Ro(d), C("pending"), s = n, d = void 0, c = void 0, f = void 0, v = 0;
  }
  function $() {
    return l;
  }
  function C(b) {
    l = b, i(b);
  }
  return {
    start: m,
    pause: h,
    reset: w,
    getState: $
  };
}
function S0() {
  const e = {
    value: 0,
    years: n,
    months: r,
    weeks: o,
    days: t,
    hours: a,
    minutes: i,
    seconds: l,
    milliseconds: s,
    valueOf: u
  };
  function n(d) {
    return e.value += d * 365 * 24 * 60 * 60 * 1e3, e;
  }
  function r(d) {
    return e.value += d * 30 * 24 * 60 * 60 * 1e3, e;
  }
  function o(d) {
    return e.value += d * 7 * 24 * 60 * 60 * 1e3, e;
  }
  function t(d) {
    return e.value += d * 24 * 60 * 60 * 1e3, e;
  }
  function a(d) {
    return e.value += d * 60 * 60 * 1e3, e;
  }
  function i(d) {
    return e.value += d * 60 * 1e3, e;
  }
  function l(d) {
    return e.value += d * 1e3, e;
  }
  function s(d) {
    return e.value += d, e;
  }
  function u(d = { milliseconds: !0 }) {
    return d.milliseconds ? e.value : e.value / 1e3;
  }
  return e;
}
function O0(e = {}) {
  const n = /* @__PURE__ */ new Map(), { ttl: r = 1 / 0 } = e;
  function o() {
    n.forEach((u, d) => {
      performance.now() > u.expiredAt && l(d);
    });
  }
  function t(u) {
    return o(), n.has(u);
  }
  function a(u) {
    return o(), n.get(u)?.value;
  }
  function i(u, d, c) {
    const f = c?.ttl ?? r;
    n.set(u, {
      expiredAt: performance.now() + f,
      value: d
    });
  }
  function l(u) {
    return n.delete(u);
  }
  function s() {
    n.clear();
  }
  return {
    has: t,
    get: a,
    set: i,
    remove: l,
    clear: s
  };
}
function Mt(e) {
  if (tn(e)) return e;
  const { to: n, query: r, hash: o } = e, t = n.indexOf("#"), a = t >= 0 ? n.slice(0, t) : n, i = t >= 0 ? `#${n.slice(t + 1)}` : "", l = a.indexOf("?"), s = l >= 0 ? a.slice(0, l) : a, u = l >= 0 ? a.slice(l + 1) : "", d = new URLSearchParams(u);
  if (r) for (const [m, h] of Object.entries(r)) d.append(m, String(h));
  const c = d.toString(), f = o ?? i;
  let v = s;
  return c && (v += `?${c}`), f && (v += f), v;
}
var P0 = {
  push(e) {
    window.location.assign(Mt(e));
  },
  replace(e) {
    window.location.replace(Mt(e));
  },
  open(e) {
    const n = Mt(e);
    window.open(n);
  },
  back() {
    window.history.back();
  },
  go(e) {
    window.history.go(e);
  }
};
function Gf(e, n) {
  const r = /* @__PURE__ */ new WeakMap();
  function o(i, l) {
    const s = n(i);
    if (s !== void 0) return s;
    if (!nr(i)) return i;
    if (l.has(i)) return l.get(i);
    if (Yt(i)) return new Date(i);
    if (qt(i)) return new RegExp(i);
    if (Kt(i)) {
      const u = /* @__PURE__ */ new Map();
      return l.set(i, u), i.forEach((d, c) => {
        u.set(o(c, l), o(d, l));
      }), u;
    }
    if (Xt(i)) {
      const u = /* @__PURE__ */ new Set();
      return l.set(i, u), i.forEach((d) => {
        u.add(o(d, l));
      }), u;
    }
    if (Ze(i) === "String" || Ze(i) === "Number" || Ze(i) === "Boolean") return a(i, i.valueOf());
    if (Af(i) || Nf(i) || Wt(i) || jt(i)) return {};
    if (Gt(i)) return a(i, t(i.buffer), i.byteOffset, i.length);
    if (Ht(i)) return a(i, t(i.buffer), i.byteOffset, i.byteLength);
    if (Ut(i)) return t(i);
    if (He(i)) {
      const u = [];
      return l.set(i, u), i.forEach((d, c) => {
        u[c] = o(d, l);
      }), u;
    }
    if (gn(i)) {
      const u = Object.create(Reflect.getPrototypeOf(i));
      return l.set(i, u), [...Object.keys(i), ...Object.getOwnPropertySymbols(i)].forEach((d) => {
        u[d] = o(i[d], l);
      }), u;
    }
    return i;
  }
  function t(i) {
    const l = new ArrayBuffer(i.byteLength);
    return new Uint8Array(l).set(new Uint8Array(i)), l;
  }
  function a(i, ...l) {
    return new i.constructor(...l);
  }
  return o(e, r);
}
function z0(e) {
  return Gf(e, () => {
  });
}
function Zf(e, ...n) {
  const r = nt(n, -1), o = [e, ...n.slice(0, -1)];
  let t = o.length - 1, a = o[t];
  for (; t; )
    a = i(o[t - 1], a, r), t--;
  function i(l, s, u) {
    function d(c, f) {
      for (const v in f) if (Ir(f, v)) {
        const m = f[v], h = c[v], w = u(h, m, v, l, s);
        w !== void 0 ? c[v] = w : nr(m) ? nr(h) ? c[v] = d(h, m) : c[v] = d(He(m) ? [] : {}, m) : c[v] = m;
      }
      return c;
    }
    return d(l, s);
  }
  return a;
}
function T0(e, ...n) {
  return Zf(e, ...n, () => {
  });
}
function E0(e) {
  return new Promise((n) => {
    const r = new FileReader();
    r.onload = () => {
      n(r.result);
    }, r.readAsArrayBuffer(e);
  });
}
function Jf(e) {
  return new Promise((n) => {
    const r = new FileReader();
    r.onload = () => {
      n(r.result);
    }, r.readAsDataURL(e);
  });
}
function I0(e) {
  return new Promise((n) => {
    const r = new FileReader();
    r.onload = () => {
      n(r.result);
    }, r.readAsText(e);
  });
}
function B0(e, n) {
  return e.reduce((r, o) => n(r) > n(o) ? r : o, e[0]);
}
function D0(e, n) {
  return e.reduce((r, o) => n(r) < n(o) ? r : o, e[0]);
}
function Qf(e) {
  return e.reduce((n, r) => n + r, 0);
}
function xf(e, n) {
  return e.reduce((r, o) => r + n(o), 0);
}
function M0(e) {
  function n(o, t) {
    for (let a = 0; a < t.length; a++) {
      const i = t.charCodeAt(a);
      o = (o << 5) - o + i, o |= 0;
    }
    return o < 0 ? o * -2 : o;
  }
  function r(o, t, a, i) {
    return o = n(o, a), o = n(o, nu(t)), o = n(o, typeof t), t === null ? n(o, "null") : t === void 0 ? n(o, "undefined") : nr(t) || fn(t) ? i.includes(t) ? n(o, `[Circular]${a}`) : (i.push(t), o = Object.keys(t).sort().reduce((l, s) => r(l, t[s], s, i), o), fn(t.valueOf) ? n(o, String(t.valueOf())) : o) : n(o, t.toString());
  }
  return r(0, e, "", []).toString(16).padStart(8, "0");
}
function A0(e) {
  return Qf(e) / e.length;
}
function N0(e, n) {
  return xf(e, n) / e.length;
}
function V0(e) {
  if (e.length)
    return e[Bf(0, e.length - 1)];
}
function R0(e, n = 0) {
  return wa(e, n, Math.round);
}
function wa(e, n, r) {
  return n = $n(n ?? 0, -292, 292), n ? +`${r(`${e}e${n}`)}e${-n}` : r(e);
}
function kl(e, n = 0) {
  return wa(e, n, Math.floor);
}
function L0(e, n = 0) {
  return wa(e, n, Math.ceil);
}
tb(/* @__PURE__ */ Pf({
  NOOP: () => $0,
  assert: () => Rf,
  at: () => nt,
  baseRound: () => wa,
  buildNavigationUrl: () => Mt,
  call: () => k,
  callOrReturn: () => ro,
  camelize: () => ga,
  cancelAnimationFrame: () => Ro,
  ceil: () => L0,
  chunk: () => Mb,
  clamp: () => $n,
  clampArrayRange: () => If,
  classes: () => Yf,
  cloneDeep: () => z0,
  cloneDeepWith: () => Gf,
  copyText: () => e0,
  createCacheManager: () => O0,
  createCookieStorage: () => v0,
  createNamespaceFn: () => Wf,
  createStorage: () => tu,
  debounce: () => k0,
  delay: () => hb,
  difference: () => Fb,
  differenceWith: () => Jt,
  doubleRaf: () => Sn,
  download: () => g0,
  duration: () => S0,
  ensurePrefix: () => r0,
  ensureSuffix: () => o0,
  enumOf: () => C0,
  find: () => Lf,
  floor: () => kl,
  genNumberKey: () => Db,
  genStringKey: () => a0,
  getAllParentScroller: () => c0,
  getGlobalThis: () => rt,
  getParentScroller: () => Kf,
  getRect: () => on,
  getScrollLeft: () => ba,
  getScrollTop: () => Dr,
  getStyle: () => Qn,
  groupBy: () => Hb,
  hasDuplicates: () => Eb,
  hasDuplicatesBy: () => Ib,
  hasOwn: () => Ir,
  inBrowser: () => or,
  inMobile: () => No,
  inViewport: () => qf,
  intersection: () => Ub,
  intersectionWith: () => Uf,
  isArray: () => He,
  isArrayBuffer: () => Ut,
  isBlob: () => Pb,
  isBoolean: () => ot,
  isDOMException: () => jt,
  isDataView: () => Ht,
  isDate: () => Yt,
  isEmpty: () => Xn,
  isEmptyPlainObject: () => Tb,
  isEqual: () => yb,
  isEqualWith: () => Mf,
  isError: () => Wt,
  isFile: () => Ob,
  isFunction: () => fn,
  isMap: () => Kt,
  isNonEmptyArray: () => wb,
  isNullish: () => kb,
  isNumber: () => zn,
  isNumeric: () => ru,
  isObject: () => nr,
  isPlainObject: () => gn,
  isPrimitive: () => zb,
  isPromise: () => $b,
  isRegExp: () => qt,
  isSet: () => Xt,
  isString: () => tn,
  isSymbol: () => Cb,
  isTruthy: () => Sb,
  isTypedArray: () => Gt,
  isWeakMap: () => Af,
  isWeakSet: () => Nf,
  isWindow: () => ha,
  kebabCase: () => ou,
  localStorage: () => m0,
  lowerFirst: () => i0,
  mapObject: () => Gb,
  maskString: () => n0,
  maxBy: () => B0,
  mean: () => A0,
  meanBy: () => N0,
  merge: () => T0,
  mergeWith: () => Zf,
  minBy: () => D0,
  mitt: () => Ef,
  motion: () => Xf,
  navigation: () => P0,
  normalizeToArray: () => hr,
  objectEntries: () => xb,
  objectKeys: () => Qb,
  objectToString: () => Df,
  omit: () => Kb,
  omitBy: () => qb,
  once: () => w0,
  pascalCase: () => jf,
  pick: () => jb,
  pickBy: () => Wb,
  prettyJSONObject: () => f0,
  preventDefault: () => Ae,
  promiseWithResolvers: () => Zb,
  raf: () => Tr,
  randomColor: () => s0,
  randomNumber: () => Bf,
  randomString: () => u0,
  rekey: () => Xb,
  removeArrayBlank: () => Ff,
  removeArrayEmpty: () => Lb,
  removeItem: () => Br,
  removeItemBy: () => Ab,
  removeItemsBy: () => Nb,
  requestAnimationFrame: () => Gr,
  round: () => R0,
  sample: () => V0,
  sessionStorage: () => p0,
  set: () => Jb,
  shuffle: () => Rb,
  slash: () => d0,
  sum: () => Qf,
  sumBy: () => xf,
  sumHash: () => M0,
  supportTouch: () => Vf,
  throttle: () => ya,
  times: () => gb,
  toArrayBuffer: () => E0,
  toDataURL: () => Jf,
  toNumber: () => H,
  toRawType: () => Ze,
  toText: () => I0,
  toTypeString: () => nu,
  toggleItem: () => Vb,
  tryAsyncCall: () => y0,
  tryCall: () => b0,
  tryParseJSON: () => h0,
  uniq: () => Zt,
  uniqBy: () => Vo,
  upperFirst: () => l0,
  uuid: () => zf,
  uuidV6: () => Tf,
  xor: () => Yb,
  xorWith: () => Hf
}), _b);
function Un(e, n, r) {
  return Rf(e, `Varlet [${n}]: ${r}`);
}
function F0(e, n) {
  console.warn(`Varlet [${e}]: ${n}`);
}
function to(e, n) {
  console.error(`Varlet [${e}]: ${n}`);
}
var U0 = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1;
function bn(e) {
  let n = !1;
  br(() => {
    e(), Ve(() => {
      n = !0;
    });
  }), Vr(() => {
    n && e();
  });
}
function Ye(e, n, r, o = {}) {
  if (!or()) return;
  const { passive: t = !1, capture: a = !1 } = o;
  let i = !1, l = !1;
  const s = (v) => fn(v) ? v() : eu(v), u = (v) => {
    if (i || l) return;
    const m = s(v);
    m && (m.addEventListener(n, r, {
      passive: t,
      capture: a
    }), i = !0);
  }, d = (v) => {
    if (!i || l) return;
    const m = s(v);
    m && (m.removeEventListener(n, r, { capture: a }), i = !1);
  };
  let c;
  Qg(e) && (c = pe(() => e.value, (v, m) => {
    d(m), u(v);
  }));
  const f = () => {
    c?.(), d(e), l = !0;
  };
  return bn(() => {
    u(e);
  }), pa(() => {
    d(e);
  }), mo(() => {
    d(e);
  }), f;
}
function _f(e, n, r) {
  if (!or()) return;
  Ye(document, n, (t) => {
    const a = fn(e) ? e() : eu(e);
    a && !a.contains(t.target) && r(t);
  });
}
function go(e) {
  let n = !1;
  mo(() => {
    n = !0, e();
  }), _o(() => {
    n || e();
  });
}
function au(e) {
  return e in Qr().provides;
}
function yn(e) {
  if (!au(e)) return {
    index: null,
    parentProvider: null,
    bindParent: null
  };
  const { childInstances: n, collect: r, clear: o, ...t } = xs(e), a = Qr();
  return {
    index: E(() => n.indexOf(a)),
    parentProvider: t,
    bindParent: (s) => {
      br(() => {
        Ve().then(() => {
          r(a, s);
        });
      }), pa(() => {
        Ve().then(() => {
          o(a, s);
        });
      });
    }
  };
}
function H0(e) {
  const n = [], r = (o) => {
    if (o?.component) {
      r(o?.component.subTree);
      return;
    }
    He(o?.children) && o.children.forEach((t) => {
      xg(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function wn(e) {
  const n = Qr(), r = nn([]), o = [], t = E(() => r.length), a = () => {
    const u = H0(n.subTree);
    r.sort((d, c) => u.indexOf(d.vnode) - u.indexOf(c.vnode));
  }, i = (u, d) => {
    r.push(u), o.push(d), a();
  }, l = (u, d) => {
    Br(r, u), Br(o, d);
  };
  return {
    length: t,
    childProviders: o,
    bindChildren: (u) => {
      _s(e, {
        childInstances: r,
        collect: i,
        clear: l,
        ...u
      });
    }
  };
}
function tr(e) {
  Ye(() => window, "resize", e, { passive: !0 }), Ye(() => window, "orientationchange", e, { passive: !0 });
}
function Y0(e, n) {
  const r = y(!1);
  return pe(e, (o) => {
    n === o && (r.value = !0);
  }, { immediate: !0 }), r;
}
function j0(e, n) {
  if (e > n) return "horizontal";
  if (n > e) return "vertical";
}
function bo() {
  const e = y(0), n = y(0), r = y(0), o = y(0), t = y(0), a = y(0), i = y(0), l = y(0), s = y(0), u = y(0), d = y(), c = y(!1), f = y(!1), v = y(0), m = y(0);
  let h = null;
  const w = () => {
    e.value = 0, n.value = 0, r.value = 0, o.value = 0, t.value = 0, a.value = 0, i.value = 0, l.value = 0, s.value = 0, u.value = 0, d.value = void 0, c.value = !1, f.value = !1, v.value = 0, m.value = 0;
  };
  return {
    startX: e,
    startY: n,
    deltaX: r,
    deltaY: o,
    offsetX: t,
    offsetY: a,
    prevX: i,
    prevY: l,
    moveX: s,
    moveY: u,
    direction: d,
    touching: c,
    dragging: f,
    startTime: v,
    distance: m,
    resetTouch: w,
    startTouch: (I) => {
      w();
      const { clientX: Y, clientY: M } = I.touches[0];
      e.value = Y, n.value = M, i.value = Y, l.value = M, c.value = !0, v.value = performance.now(), f.value = !1, h && window.cancelAnimationFrame(h);
    },
    moveTouch: (I) => {
      const { clientX: Y, clientY: M } = I.touches[0];
      f.value = !0, r.value = Y - e.value, o.value = M - n.value, t.value = Math.abs(r.value), a.value = Math.abs(o.value), m.value = Math.sqrt(t.value ** 2 + a.value ** 2), s.value = Y - i.value, u.value = M - l.value, d.value || (d.value = j0(t.value, a.value)), i.value = Y, l.value = M;
    },
    endTouch: () => {
      c.value = !1, h = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    },
    isReachTop: (I) => Dr(I) === 0 && o.value > 0,
    isReachBottom: (I, Y = 1) => {
      const { scrollHeight: M, clientHeight: A, scrollTop: B } = I, T = Math.abs(M - B - A);
      return o.value < 0 && T <= Y;
    }
  };
}
function ev() {
  const e = Qr(), n = ou(e.type.name), r = y(void 0);
  return br(() => {
    r.value = `${n}-${e.uid}`;
  }), r;
}
function W0(e = {}) {
  const { initialWidth: n = 0, initialHeight: r = 0 } = e, o = y(n), t = y(r), a = () => {
    or() && (o.value = window.innerWidth, t.value = window.innerHeight);
  };
  return bn(a), tr(a), {
    width: o,
    height: t
  };
}
function Pn(e, n, r = {}) {
  const { passive: o = !0, eventName: t, defaultValue: a, emit: i } = r, l = t ?? `onUpdate:${n.toString()}`, s = () => e[n] ?? a;
  if (!o) return E({
    get() {
      return s();
    },
    set(c) {
      i ? i(l, c) : k(e[l], c);
    }
  });
  const u = y(s());
  let d = !0;
  return pe(() => e[n], () => {
    d = !1, u.value = s(), Ve(() => {
      d = !0;
    });
  }), pe(() => u.value, (c) => {
    d && (i ? i(l, c) : k(e[l], c));
  }), u;
}
function K0(e) {
  const n = y(t(e.from)), r = y("pending");
  let o = s();
  function t(u) {
    return fn(u) ? u() : u;
  }
  function a() {
    o.reset(), n.value = t(e.from), r.value = "pending", o = s();
  }
  function i() {
    o.start();
  }
  function l() {
    o.pause();
  }
  function s() {
    return Xf({
      from: t(e.from),
      to: t(e.to),
      duration: e.duration ? t(e.duration) : 300,
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
var q0 = Object.defineProperty, X0 = Object.defineProperties, G0 = Object.getOwnPropertyDescriptors, ju = Object.getOwnPropertySymbols, Z0 = Object.prototype.hasOwnProperty, J0 = Object.prototype.propertyIsEnumerable, Wu = (e, n, r) => n in e ? q0(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, $l = (e, n) => {
  for (var r in n || (n = {})) Z0.call(n, r) && Wu(e, r, n[r]);
  if (ju)
    for (var r of ju(n)) J0.call(n, r) && Wu(e, r, n[r]);
  return e;
}, Q0 = (e, n) => X0(e, G0(n)), Ku = (e, n, r) => new Promise((o, t) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
});
function Be(e, n) {
  return He(n) ? n.reduce((r, o) => (r[o] = e[o], r), {}) : e[n];
}
function ae(e, n) {
  const r = n ?? e;
  return r.install = function(o) {
    const { name: t } = e;
    t && o.component(t, e);
  }, r;
}
function de(e, n) {
  e.setPropsDefaults = function(r) {
    Object.entries(r).forEach(([o, t]) => {
      const a = n[o];
      if (a != null) {
        if (gn(a)) {
          n[o] = Q0($l({}, a), { default: t });
          return;
        }
        n[o] = {
          type: a,
          default: t
        };
      }
    });
  };
}
function x0(e) {
  const n = Jg(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), r.parentNode && document.body.removeChild(r);
    }
  };
}
function yo(e, n = {}, r = {}) {
  const { unmount: o } = x0({ setup() {
    return () => xo(e, $l($l({}, n), r));
  } });
  return { unmountInstance: o };
}
function iu(e) {
  const n = [];
  return e.forEach((r) => {
    if (r.type !== Gg) {
      if (r.type === De && He(r.children)) {
        n.push(...iu(r.children));
        return;
      }
      n.push(r);
    }
  }), n;
}
function qu(e) {
  return gn(e) && fn(e.safeParseAsync);
}
function _0(e) {
  return gn(e) && Ir(e, "success");
}
function jn() {
  const e = y(""), n = (t, a, i) => Ku(null, null, function* () {
    const l = hr(t).filter((u) => qu(u) || fn(u)), s = yield Promise.all(l.map((u) => qu(u) ? u.safeParseAsync(a) : u(a, i)));
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
    validateWithTrigger: (t, a, i, l, s) => Ku(null, null, function* () {
      t.includes(a) && (yield n(i, l, s)) && (e.value = "");
    })
  };
}
function ey(e) {
  Ye(() => window, "hashchange", e), Ye(() => window, "popstate", e);
}
function xr() {
  const e = y(!1);
  return Vr(() => {
    e.value = !1;
  }), mo(() => {
    e.value = !0;
  }), { disabled: e };
}
var ne = Wf("var");
function R(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function vn(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), `var-elevation--${e}`);
}
var tt = ee({
  props: {
    is: { type: [String, Object] },
    tag: {
      type: String,
      default: "span"
    }
  },
  setup(e) {
    return () => tn(e.is) ? xo(e.tag, e.is) : e.is;
  }
}), nv = {
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
  paginationItem: "",
  paginationPage: "page",
  paginationJump: "Go to",
  timePickerHint: "SELECT TIME",
  selectEmptyText: "No Data"
}, rv = {
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
  paginationItem: "",
  paginationPage: "صفحه",
  paginationJump: "برو به",
  timePickerHint: "انتخاب زمان",
  selectEmptyText: "داده‌ای وجود ندارد"
}, ov = {
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
  paginationItem: "件",
  paginationPage: "ページ",
  paginationJump: "ジャンプ",
  timePickerHint: "時間を選択",
  selectEmptyText: "データがありません"
}, lu = {
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
  paginationItem: "条",
  paginationPage: "页",
  paginationJump: "前往",
  timePickerHint: "选择时间",
  selectEmptyText: "暂无数据"
}, su = {
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
  paginationItem: "條",
  paginationPage: "頁",
  paginationJump: "前往",
  timePickerHint: "選擇時間",
  selectEmptyText: "暫無數據"
}, tv = su, ny = Object.defineProperty, Xu = Object.getOwnPropertySymbols, ry = Object.prototype.hasOwnProperty, oy = Object.prototype.propertyIsEnumerable, Gu = (e, n, r) => n in e ? ny(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Zu = (e, n) => {
  for (var r in n || (n = {})) ry.call(n, r) && Gu(e, r, n[r]);
  if (Xu)
    for (var r of Xu(n)) oy.call(n, r) && Gu(e, r, n[r]);
  return e;
};
function uu() {
  const e = y({}), n = y({}), r = (i, l) => {
    l.lang = i, e.value[i] = l;
  }, o = (i) => {
    if (!e.value[i])
      return console.warn(`The ${i} does not exist. You can mount a language message using the add method`), {};
    n.value = e.value[i];
  };
  return {
    messages: e,
    currentMessage: n,
    add: r,
    use: o,
    merge: (i, l) => {
      if (!e.value[i]) {
        console.warn(`The ${i} does not exist. You can mount a language message using the add method`);
        return;
      }
      e.value[i] = Zu(Zu({}, e.value[i]), l), o(i);
    },
    t: (i) => {
      if (Ir(n.value, i)) return n.value[i];
    }
  };
}
var { messages: av, currentMessage: iv, add: du, use: cu, merge: lv, t: an } = uu();
du("zh-CN", lu);
cu("zh-CN");
var dB = {
  zhCN: lu,
  enUS: nv,
  zhTW: su,
  zhHK: tv,
  faIR: rv,
  jaJP: ov,
  messages: av,
  currentMessage: iv,
  add: du,
  use: cu,
  merge: lv,
  t: an,
  useLocale: uu
}, Cl = {
  zhCN: lu,
  enUS: nv,
  zhTW: su,
  zhHK: tv,
  faIR: rv,
  jaJP: ov,
  messages: av,
  currentMessage: iv,
  add: du,
  use: cu,
  merge: lv,
  t: an,
  useLocale: uu
}, Sl = /* @__PURE__ */ Symbol("LOCALE_PROVIDER_KEY");
function ty(e) {
  _s(Sl, e);
}
function ar() {
  return au(Sl) ? xs(Sl) : { t: null };
}
var sv = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, cB = nn(sv), Ln = nn(sv), { n: Ju } = ne("");
function uv() {
  Object.keys(Ln.locks).length <= 0 ? document.body.classList.remove(Ju("$--lock")) : document.body.classList.add(Ju("$--lock"));
}
function gt(e) {
  Ln.locks[e] = 1, uv();
}
function bt(e) {
  delete Ln.locks[e], uv();
}
function at(e, n) {
  const { uid: r } = Qr();
  n && pe(n, (o) => {
    o === !1 ? bt(r) : o === !0 && e() === !0 && gt(r);
  }), pe(e, (o) => {
    n && n() === !1 || (o === !0 ? gt(r) : bt(r));
  }), _g(() => {
    n && n() === !1 || e() === !0 && gt(r);
  }), _o(() => {
    n && n() === !1 || e() === !0 && bt(r);
  }), Vr(() => {
    n && n() === !1 || e() === !0 && gt(r);
  }), mo(() => {
    n && n() === !1 || e() === !0 && bt(r);
  });
}
var yr = [];
function fu(e, n) {
  const { uid: r } = Qr();
  pe(e, (i) => {
    i && !a(r) ? t() : setTimeout(() => {
      Br(yr, a(r));
    });
  }), bn(() => {
    e() && t();
  }), go(() => {
    Br(yr, a(r));
  });
  function o() {
    return yr.length === 0 ? !0 : (yr.sort((i, l) => i.zIndex.value - l.zIndex.value), yr[yr.length - 1].uid === r);
  }
  function t() {
    a(r) || yr.push({
      uid: r,
      zIndex: n
    });
  }
  function a(i) {
    return yr.find((l) => l.uid === i);
  }
  return { onStackTop: o };
}
function it(e, n) {
  const r = y(Ln.zIndex);
  return pe(e, (o) => {
    o && (Ln.zIndex += n, r.value = Ln.zIndex);
  }, { immediate: !0 }), { zIndex: r };
}
var wo = {
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
  onOpen: R(),
  onOpened: R(),
  onClose: R(),
  onClosed: R(),
  onKeyEscape: R(),
  onClickOverlay: R(),
  "onUpdate:show": R(),
  onRouteChange: R()
}, dv = /* @__PURE__ */ Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function cv() {
  const { bindParent: e, parentProvider: n, index: r } = yn(dv);
  return {
    index: r,
    popup: n,
    bindPopup: e
  };
}
function ay() {
  const { bindChildren: e, childProviders: n, length: r } = wn(dv);
  return {
    length: r,
    popupItems: n,
    bindPopupItems: e
  };
}
var iy = Object.defineProperty, Qu = Object.getOwnPropertySymbols, ly = Object.prototype.hasOwnProperty, sy = Object.prototype.propertyIsEnumerable, xu = (e, n, r) => n in e ? iy(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, uy = (e, n) => {
  for (var r in n || (n = {})) ly.call(n, r) && xu(e, r, n[r]);
  if (Qu)
    for (var r of Qu(n)) sy.call(n, r) && xu(e, r, n[r]);
  return e;
}, { name: dy, n: Kn, classes: ul } = ne("popup"), ka = ee({
  name: dy,
  inheritAttrs: !1,
  props: wo,
  setup(e, { slots: n, attrs: r }) {
    const o = Y0(() => e.show, !0), { zIndex: t } = it(() => e.show, 3), a = E(() => {
      var m;
      return (m = e.zIndex) != null ? m : t.value;
    }), { onStackTop: i } = fu(() => e.show, a), { disabled: l } = xr(), { bindPopupItems: s } = ay();
    at(() => e.show, () => e.lockScroll), pe(() => e.show, (m) => {
      k(m ? e.onOpen : e.onClose);
    }), s({ show: E(() => e.show) }), Ye(() => window, "keydown", v), ey(() => k(e.onRouteChange));
    function u() {
      const { closeOnClickOverlay: m, onClickOverlay: h } = e;
      k(h), m && k(e["onUpdate:show"], !1);
    }
    function d() {
      const { overlayClass: m = "", overlayStyle: h } = e;
      return X("div", {
        class: ul(Kn("overlay"), m),
        style: uy({ zIndex: a.value - 1 }, h),
        onClick: u
      }, null);
    }
    function c() {
      return Me(X("div", je({
        class: ul(Kn("content"), Kn(`--${e.position}`), [e.defaultStyle, Kn("--content-background-color")], [e.defaultStyle, Kn("$-elevation--3")], [e.safeArea, Kn("--safe-area")], [e.safeAreaTop, Kn("--safe-area-top")]),
        style: { zIndex: a.value },
        role: "dialog",
        "aria-modal": "true"
      }, r), [o.value && k(n.default)]), [[Jn, e.show]]);
    }
    function f() {
      return X(en, {
        name: Kn("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, { default: () => [Me(X("div", {
        class: ul(Kn("$--box"), Kn(), [!e.overlay, Kn("--pointer-events-none")]),
        style: { zIndex: a.value - 2 }
      }, [e.overlay && d(), X(en, { name: e.transition || Kn(`$-pop-${e.position}`) }, { default: () => [c()] })]), [[Jn, e.show]])] });
    }
    function v(m) {
      !i() || m.key !== "Escape" || !e.show || (k(e.onKeyEscape), e.closeOnKeyEscape && (Ae(m), k(e["onUpdate:show"], !1)));
    }
    return () => {
      const { teleport: m } = e;
      return m ? X(cr, {
        to: m,
        disabled: l.value
      }, { default: () => [f()] }) : f();
    };
  }
});
ae(ka);
de(ka, wo);
var fB = ka, Mr = ka, cy = Object.defineProperty, fy = Object.defineProperties, vy = Object.getOwnPropertyDescriptors, _u = Object.getOwnPropertySymbols, py = Object.prototype.hasOwnProperty, my = Object.prototype.propertyIsEnumerable, ed = (e, n, r) => n in e ? cy(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, fv = (e, n) => {
  for (var r in n || (n = {})) py.call(n, r) && ed(e, r, n[r]);
  if (_u)
    for (var r of _u(n)) my.call(n, r) && ed(e, r, n[r]);
  return e;
}, hy = (e, n) => fy(e, vy(n)), { n: vv } = ne("ripple"), nd = 250;
function gy(e) {
  const { zIndex: n, position: r } = Qn(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function rd(e) {
  return "touches" in e;
}
function by(e, n) {
  const { top: r, left: o } = on(e), { clientWidth: t, clientHeight: a } = e, i = Math.sqrt(t ** 2 + a ** 2) / 2, l = i * 2, s = rd(n) ? n.touches[0].clientX - o : t / 2, u = rd(n) ? n.touches[0].clientY - r : a / 2, d = (t - i * 2) / 2, c = (a - i * 2) / 2;
  return {
    x: s - i,
    y: u - i,
    centerX: d,
    centerY: c,
    size: l
  };
}
function vu(e) {
  const n = this._ripple;
  if (n.removeRipple(), n.disabled || n.tasker || !Ln.enableRipple) return;
  const r = () => {
    n.tasker = null;
    const { x: o, y: t, centerX: a, centerY: i, size: l } = by(this, e), s = document.createElement("div");
    s.classList.add(vv()), s.style.opacity = "0", s.style.transform = `translate(${o}px, ${t}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), gy(this), this.appendChild(s), window.setTimeout(() => {
      s.style.transform = `translate(${a}px, ${i}px) scale3d(1, 1, 1)`, s.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(r, 30);
}
function Qt() {
  const e = this._ripple, n = () => {
    const r = this.querySelectorAll(`.${vv()}`);
    if (!r.length) return;
    const o = r[r.length - 1], t = nd - performance.now() + Number(o.dataset.createdAt);
    window.setTimeout(() => {
      o.style.opacity = "0", window.setTimeout(() => {
        var a;
        return (a = o.parentNode) == null ? void 0 : a.removeChild(o);
      }, nd);
    }, t);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function pv() {
  if (!Vf() || !Ln.enableRipple) return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
var xt = !1;
function yy(e) {
  xt || !(e.key === " " || e.key === "Enter") || (vu.call(this, e), xt = !0);
}
function od() {
  xt && (Qt.call(this), xt = !1);
}
function wy(e, n) {
  var r;
  e._ripple = hy(fv({ tasker: null }, (r = n.value) != null ? r : {}), { removeRipple: Qt.bind(e) }), e.addEventListener("touchstart", vu, { passive: !0 }), e.addEventListener("touchmove", pv, { passive: !0 }), e.addEventListener("dragstart", Qt, { passive: !0 }), e.addEventListener("keydown", yy), e.addEventListener("keyup", od), e.addEventListener("blur", od), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("dragend", e._ripple.removeRipple, { passive: !0 });
}
function ky(e) {
  e.removeEventListener("touchstart", vu), e.removeEventListener("touchmove", pv), e.removeEventListener("dragstart", Qt), !(!e._ripple || !e._ripple.removeRipple) && (document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple), document.removeEventListener("dragend", e._ripple.removeRipple));
}
function $y(e, n) {
  var r, o, t, a, i, l;
  const s = {
    color: (r = n.value) == null ? void 0 : r.color,
    disabled: (o = n.value) == null ? void 0 : o.disabled
  };
  (s.color !== ((t = e._ripple) == null ? void 0 : t.color) || s.disabled !== ((a = e._ripple) == null ? void 0 : a.disabled)) && (e._ripple = fv({
    tasker: s.disabled ? null : (i = e._ripple) == null ? void 0 : i.tasker,
    removeRipple: (l = e._ripple) == null ? void 0 : l.removeRipple
  }, s));
}
var mv = {
  mounted: wy,
  unmounted: ky,
  updated: $y,
  install(e) {
    e.directive("ripple", this);
  }
}, vB = mv, sn = mv;
function hv(e) {
  return e ? !!(e === "desktop" && No() || e === "mobile" && !No()) : !1;
}
function Cy(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, o) => {
    const [t, a] = o.split(":").map((i) => i.trim());
    return r[ga(t)] = a, r;
  }, {}) : {};
}
function Sy(e) {
  const { value: n } = e._hover, r = Cy(e);
  Object.keys(n).forEach((o) => {
    const t = ga(o);
    n[t] != null && r[t] && (e._hover.rawStyle[t] = r[t]);
  });
}
function pu(e, n) {
  Object.keys(n).forEach((r) => {
    const o = n[r];
    o != null && (e.style[r] = o);
  });
}
function Oy(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function gv(e) {
  e?._hover != null && (Oy(e), pu(e, e._hover.rawStyle));
}
function bv() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, fn(e)) {
    e(this._hover.hovering);
    return;
  }
  pu(this, e);
}
function yv() {
  if (this._hover.hovering = !1, fn(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  gv(this);
}
function wv(e, n) {
  var r, o;
  const { arg: t, value: a } = n;
  hv(t) || (e._hover = {
    value: a,
    hovering: (o = (r = e._hover) == null ? void 0 : r.hovering) != null ? o : !1,
    rawStyle: {}
  }, Sy(e), e.addEventListener("mouseenter", bv), e.addEventListener("mouseleave", yv));
}
function kv(e, n) {
  hv(n.arg) || (gv(e), e.removeEventListener("mouseenter", bv), e.removeEventListener("mouseleave", yv));
}
function Py(e, n) {
  e._hover && kv(e, n);
}
function zy(e, n) {
  return !fn(n.value) && e._hover.hovering;
}
function Ty(e, n) {
  wv(e, n), zy(e, n) && pu(e, n.value);
}
var $v = {
  mounted: wv,
  unmounted: kv,
  beforeUpdate: Py,
  updated: Ty,
  install(e) {
    e.directive("hover", this);
  }
}, pB = $v, An = $v, Cv = {
  hovering: Boolean,
  focusing: Boolean
}, { name: Ey, n: Iy, classes: By } = ne("hover-overlay");
function Dy(e, n) {
  return g(), S("div", { class: p(e.classes(e.n(), [e.hovering, e.n("--hovering")], [e.focusing && !e.inMobile(), e.n("--focusing")])) }, null, 2);
}
var Sv = ee({
  name: Ey,
  props: Cv,
  setup: () => ({
    n: Iy,
    classes: By,
    inMobile: No
  })
});
Sv.render = Dy;
var $a = Sv;
ae($a);
de($a, Cv);
function rr() {
  const e = y(!1);
  return {
    hovering: e,
    handleHovering: (r) => {
      e.value = r;
    }
  };
}
var mB = $a, Hn = $a;
function My(e) {
  const { left: n } = on(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function td(e) {
  const { top: n } = on(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function dl(e) {
  const { transform: n } = Qn(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Ar(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const r = /(scroll|auto)/, { overflowY: o, overflow: t } = Qn(n);
    if (r.test(o) || r.test(t)) return n;
  }
  return window;
}
function Ay(e) {
  const n = [];
  let r = e;
  for (; !ha(r); )
    r = Ar(r), n.push(r);
  return n;
}
function Ov(e, n) {
  if (tn(e)) {
    const r = document.querySelector(e);
    return Un(!!r, n, "target element cannot found"), r;
  }
  return Un(nr(e), n, 'type of prop "target" should be an element object'), e;
}
function Ny() {
  const { width: e, height: n } = on(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
var Vy = (e) => tn(e) && e.endsWith("rem"), Ry = (e) => tn(e) && e.endsWith("px") || zn(e), Ly = (e) => tn(e) && e.endsWith("vw"), Fy = (e) => tn(e) && e.endsWith("vh"), Uy = (e) => tn(e) && e.endsWith("vmin"), Hy = (e) => tn(e) && e.endsWith("vmax"), rn = (e) => {
  if (ru(e)) return Number(e);
  if (Ry(e)) return +e.replace("px", "");
  if (!or()) return 0;
  const { vw: n, vh: r, vMin: o, vMax: t } = Ny();
  if (Ly(e)) return +e.replace("vw", "") * n / 100;
  if (Fy(e)) return +e.replace("vh", "") * r / 100;
  if (Uy(e)) return +e.replace("vmin", "") * o / 100;
  if (Hy(e)) return +e.replace("vmax", "") * t / 100;
  if (Vy(e)) {
    const a = +e.replace("rem", ""), i = Qn(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return tn(e) ? H(e) : 0;
}, Te = (e) => {
  if (e != null)
    return ru(e) ? `${e}px` : String(e);
}, En = (e, n = 1) => {
  if (e == null) return;
  const r = Te(e), o = r.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
  return `${parseFloat(r) * n}${o}`;
};
function Lo(e, { top: n = 0, left: r = 0, duration: o = 300, animation: t }) {
  const a = Date.now(), i = Dr(e), l = ba(e);
  return new Promise((s) => {
    const u = () => {
      const d = (Date.now() - a) / o;
      if (d < 1) {
        const c = i + (n - i) * t(d), f = l + (r - l) * t(d);
        e.scrollTo(f, c), requestAnimationFrame(u);
      } else
        e.scrollTo(r, n), s();
    };
    requestAnimationFrame(u);
  });
}
function Pv(e) {
  return Object.entries(e ?? {}).reduce((n, [r, o]) => {
    const t = r.startsWith("--") ? r : `--${ou(r)}`;
    return n[t] = o, n;
  }, {});
}
function _t(e) {
  return e === "start" || e === "end" ? `flex-${e}` : e;
}
function Yy(e) {
  let n = e;
  for (; n && n !== document.documentElement; ) {
    if (Qn(n).display === "none") return !0;
    n = n.parentNode;
  }
  return !1;
}
var ad = [
  "button",
  "input",
  "select",
  "textarea",
  "[tabindex]",
  "[href]"
].map((e) => `${e}:not([disabled])`).join(", ");
function mu(e, n, r, o) {
  const t = Array.from(n.querySelectorAll(ad)).filter((s) => !Yy(s));
  if (!t.length) return;
  const a = [e, ...Array.from(e.querySelectorAll(ad))].findIndex((s) => s === document.activeElement) !== -1, i = Array.from(t).findIndex((s) => s === document.activeElement);
  if (r === "ArrowDown") {
    if (a && i === -1 || i === t.length - 1) {
      l(t[0]);
      return;
    }
    if (i !== -1 && i < t.length - 1) {
      l(t[i + 1]);
      return;
    }
  }
  if (r === "ArrowUp") {
    if (a && i === -1 || i === 0) {
      l(t[t.length - 1]);
      return;
    }
    i > 0 && l(t[i - 1]);
  }
  function l(s) {
    o && !o(document.activeElement, s, a) || s.focus();
  }
}
var ln = {
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
  onClick: R()
}, jy = (e, n, r) => new Promise((o, t) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: Wy, n: Ky, classes: qy } = ne("icon");
function Xy(e, n) {
  return g(), ke(ho(e.isURL(e.name) ? "img" : "i"), {
    class: p(e.classes(e.n(), [e.namespace !== e.n(), e.namespace], `${e.namespace}--set`, [
      e.isURL(e.name),
      e.n("image"),
      `${e.namespace}-${e.nextName}`
    ], [e.animateInProgress, e.animationClass == null ? e.n("--shrinking") : e.animationClass])),
    style: q({
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
var zv = ee({
  name: Wy,
  props: ln,
  setup(e) {
    const n = y(""), r = y(!1);
    pe(() => e.name, o, { immediate: !0 });
    function o(t, a) {
      return jy(this, null, function* () {
        const { transition: i } = e;
        if (a == null || H(i) === 0) {
          n.value = t;
          return;
        }
        r.value = !0, yield Ve(), setTimeout(() => {
          a != null && (n.value = t), r.value = !1;
        }, H(i));
      });
    }
    return {
      nextName: n,
      animateInProgress: r,
      n: Ky,
      classes: qy,
      isURL: U0,
      toNumber: H,
      toSizeUnit: Te
    };
  }
});
zv.render = Xy;
var Ca = zv;
ae(Ca);
de(Ca, ln);
var hB = Ca, Je = Ca, { name: Gy, n: Zy, classes: Jy } = ne("action-sheet");
function Qy(e, n) {
  const r = x("var-icon"), o = x("var-hover-overlay"), t = We("ripple"), a = We("hover");
  return Me((g(), S("div", {
    class: p(e.classes(e.n("action-item"), e.className, [e.disabled, e.n("--disabled")])),
    style: q({ color: e.color })
  }, [
    e.icon ? (g(), ke(r, {
      key: 0,
      "var-action-sheet-cover": "",
      class: p(e.n("action-icon")),
      namespace: e.namespace,
      name: e.icon,
      size: e.iconSize
    }, null, 8, [
      "class",
      "namespace",
      "name",
      "size"
    ])) : K("v-if", !0),
    V("div", { class: p(e.n("action-name")) }, ue(e.name), 3),
    X(o, { hovering: e.disabled ? !1 : e.hovering }, null, 8, ["hovering"])
  ], 6)), [[t, { disabled: e.disabled }], [
    a,
    e.handleHovering,
    "desktop"
  ]]);
}
var Tv = ee({
  name: Gy,
  components: {
    VarHoverOverlay: Hn,
    VarIcon: Je
  },
  directives: {
    Ripple: sn,
    Hover: An
  },
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
    const { hovering: e, handleHovering: n } = rr();
    return {
      hovering: e,
      n: Zy,
      classes: Jy,
      handleHovering: n
    };
  }
});
Tv.render = Qy;
var xy = Tv, _y = Object.defineProperty, id = Object.getOwnPropertySymbols, e1 = Object.prototype.hasOwnProperty, n1 = Object.prototype.propertyIsEnumerable, ld = (e, n, r) => n in e ? _y(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, r1 = (e, n) => {
  for (var r in n || (n = {})) e1.call(n, r) && ld(e, r, n[r]);
  if (id)
    for (var r of id(n)) n1.call(n, r) && ld(e, r, n[r]);
  return e;
}, Ev = r1({
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
  onSelect: R(),
  "onUpdate:show": R()
}, Be(wo, [
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
])), { name: o1, n: t1, classes: a1 } = ne("action-sheet");
function i1(e, n) {
  const r = x("var-action-item"), o = x("var-popup");
  return g(), ke(o, {
    show: e.show,
    "onUpdate:show": n[0] || (n[0] = (t) => e.show = t),
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
    default: ve(() => [V("div", je({ class: e.classes(e.n(), e.n("$--box")) }, e.$attrs), [L(e.$slots, "title", {}, () => {
      var t;
      return [V("div", { class: p(e.n("title")) }, ue((t = e.title) != null ? t : (e.pt ? e.pt : e.t)("actionSheetTitle")), 3)];
    }), L(e.$slots, "actions", {}, () => [(g(!0), S(De, null, Ke(e.actions, (t) => (g(), ke(r, {
      key: t.name,
      name: t.name,
      namespace: t.namespace,
      icon: t.icon,
      "icon-size": t.iconSize,
      "class-name": t.className,
      color: t.color,
      onClick: (a) => e.handleSelect(t)
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
var Iv = ee({
  name: o1,
  directives: { Ripple: sn },
  components: {
    VarPopup: Mr,
    VarActionItem: xy
  },
  inheritAttrs: !1,
  props: Ev,
  setup(e) {
    const n = Pn(e, "show"), { t: r } = ar();
    function o(t) {
      if (t.disabled) return;
      const { closeOnClickAction: a, onSelect: i } = e;
      k(i, t), a && (n.value = !1);
    }
    return {
      show: n,
      pt: r,
      t: an,
      n: t1,
      classes: a1,
      handleSelect: o
    };
  }
});
Iv.render = i1;
var lt = Iv, l1 = Object.defineProperty, sd = Object.getOwnPropertySymbols, s1 = Object.prototype.hasOwnProperty, u1 = Object.prototype.propertyIsEnumerable, ud = (e, n, r) => n in e ? l1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, dd = (e, n) => {
  for (var r in n || (n = {})) s1.call(n, r) && ud(e, r, n[r]);
  if (sd)
    for (var r of sd(n)) u1.call(n, r) && ud(e, r, n[r]);
  return e;
}, $r, hu = {};
function d1(e = {}) {
  return dd(dd({}, hu), e);
}
function Rr(e) {
  return or() ? new Promise((n) => {
    Rr.close();
    const r = nn(d1(e));
    r.teleport = "body", $r = r;
    const { unmountInstance: o } = yo(lt, r, {
      onSelect: (t) => {
        k(r.onSelect, t), n(t);
      },
      onClose: () => {
        k(r.onClose), n("close");
      },
      onClosed: () => {
        k(r.onClosed), o(), $r === r && ($r = null);
      },
      onRouteChange: () => {
        o(), $r === r && ($r = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
Rr.setDefaultOptions = function(e) {
  hu = e;
};
Rr.resetDefaultOptions = function() {
  hu = {};
};
Rr.close = function() {
  if ($r != null) {
    const e = $r;
    $r = null, Ve().then(() => {
      e.show = !1;
    });
  }
};
Rr.Component = lt;
ae(lt);
ae(lt, Rr);
de(Rr, Ev);
var gB = lt, Ol = Rr, Bv = {
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
  onClose: R()
}, { name: c1, n: f1, classes: v1 } = ne("alert"), p1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  danger: "error"
};
function m1(e, n) {
  const r = x("var-icon");
  return g(), S("div", {
    class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), e.n(`--${e.type}`), e.formatElevation(e.elevation, 2))),
    style: q({ "background-color": e.color }),
    role: "alert"
  }, [
    e.isInternalType || e.$slots.icon ? (g(), S("div", {
      key: 0,
      class: p(e.n("icon"))
    }, [L(e.$slots, "icon", {}, () => [e.isInternalType ? (g(), ke(r, {
      key: 0,
      name: e.iconTypeMap[e.type]
    }, null, 8, ["name"])) : K("v-if", !0)])], 2)) : K("v-if", !0),
    L(e.$slots, "content", {}, () => [V("div", { class: p(e.n("content")) }, [e.title || e.$slots.title ? (g(), S("div", {
      key: 0,
      class: p(e.n("title"))
    }, [L(e.$slots, "title", {}, () => [Ie(ue(e.title), 1)])], 2)) : K("v-if", !0), e.message || e.$slots.default ? (g(), S("div", {
      key: 1,
      class: p(e.n("message"))
    }, [L(e.$slots, "default", {}, () => [Ie(ue(e.message), 1)])], 2)) : K("v-if", !0)], 2)]),
    e.closeable ? (g(), S("div", {
      key: 1,
      class: p(e.n("close-icon")),
      onClick: n[0] || (n[0] = (...o) => e.handleClose && e.handleClose(...o))
    }, [L(e.$slots, "close-icon", {}, () => [X(r, { name: "close-circle" })])], 2)) : K("v-if", !0)
  ], 6);
}
var Dv = ee({
  name: c1,
  components: { VarIcon: Je },
  props: Bv,
  setup(e) {
    const n = E(() => [
      "info",
      "success",
      "danger",
      "warning"
    ].includes(e.type));
    function r(o) {
      k(e.onClose, o);
    }
    return {
      n: f1,
      classes: v1,
      iconTypeMap: p1,
      isInternalType: n,
      formatElevation: vn,
      handleClose: r
    };
  }
});
Dv.render = m1;
var Sa = Dv;
ae(Sa);
de(Sa, Bv);
var bB = Sa, Pl = Sa, Mv = {
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
}, { name: h1, n: g1, classes: b1 } = ne("app-bar");
function y1(e, n) {
  return g(), S(De, null, [V("div", je({
    ref: "appBar",
    class: e.classes(e.n(), e.n("$--box"), [e.safeAreaTop, e.n("--safe-area-top")], [e.round, e.n("--round")], [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], e.formatElevation(e.elevation, 3)),
    style: e.rootStyles
  }, e.$attrs), [V("div", { class: p(e.n("toolbar")) }, [
    V("div", { class: p(e.n("left")) }, [L(e.$slots, "left"), e.titlePosition === "left" ? (g(), S("div", {
      key: 0,
      class: p(e.n("title")),
      style: q({ paddingLeft: e.paddingLeft })
    }, [L(e.$slots, "default", {}, () => [Ie(ue(e.title), 1)])], 6)) : K("v-if", !0)], 2),
    e.titlePosition === "center" ? (g(), S("div", {
      key: 0,
      class: p(e.n("title"))
    }, [L(e.$slots, "default", {}, () => [Ie(ue(e.title), 1)])], 2)) : K("v-if", !0),
    V("div", { class: p(e.n("right")) }, [e.titlePosition === "right" ? (g(), S("div", {
      key: 0,
      class: p(e.n("title")),
      style: q({ paddingRight: e.paddingRight })
    }, [L(e.$slots, "default", {}, () => [Ie(ue(e.title), 1)])], 6)) : K("v-if", !0), L(e.$slots, "right")], 2)
  ], 2), L(e.$slots, "content")], 16), e.fixed && e.placeholder ? (g(), S("div", {
    key: 0,
    class: p(e.n("placeholder")),
    style: q({ height: e.placeholderHeight })
  }, null, 6)) : K("v-if", !0)], 64);
}
var Av = ee({
  name: h1,
  props: Mv,
  setup(e, { slots: n }) {
    const r = y(null), o = y(), t = y(), a = y(), i = E(() => {
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
    tr(s), bn(() => {
      l(), s();
    }), et(l);
    function l() {
      o.value = n.left ? 0 : void 0, t.value = n.right ? 0 : void 0;
    }
    function s() {
      if (!e.fixed || !e.placeholder) return;
      const { height: u } = on(r.value);
      a.value = Te(u);
    }
    return {
      rootStyles: i,
      paddingLeft: o,
      paddingRight: t,
      n: g1,
      classes: b1,
      formatElevation: vn,
      appBar: r,
      placeholderHeight: a
    };
  }
});
Av.render = y1;
var Oa = Av;
ae(Oa);
de(Oa, Mv);
var yB = Oa, zl = Oa, Nv = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: w1, n: k1 } = ne("form-details"), $1 = { key: 0 }, C1 = { key: 0 };
function S1(e, n) {
  return g(), ke(en, { name: e.n() }, {
    default: ve(() => [e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (g(), S("div", {
      key: 0,
      class: p(e.n())
    }, [V("div", { class: p(e.n("error-message")) }, [X(en, { name: e.n("message") }, {
      default: ve(() => [e.errorMessage ? (g(), S("div", $1, ue(e.errorMessage), 1)) : K("v-if", !0)]),
      _: 1
    }, 8, ["name"])], 2), V("div", { class: p(e.n("extra-message")) }, [X(en, { name: e.n("message") }, {
      default: ve(() => [L(e.$slots, "extra-message", {}, () => [e.extraMessage ? (g(), S("div", C1, ue(e.extraMessage), 1)) : K("v-if", !0)])]),
      _: 3
    }, 8, ["name"])], 2)], 2)) : K("v-if", !0)]),
    _: 3
  }, 8, ["name"]);
}
var Vv = ee({
  name: w1,
  props: Nv,
  setup: () => ({ n: k1 })
});
Vv.render = S1;
var Pa = Vv;
ae(Pa);
de(Pa, Nv);
var wB = Pa, Bn = Pa, O1 = Object.defineProperty, P1 = Object.defineProperties, z1 = Object.getOwnPropertyDescriptors, cd = Object.getOwnPropertySymbols, T1 = Object.prototype.hasOwnProperty, E1 = Object.prototype.propertyIsEnumerable, fd = (e, n, r) => n in e ? O1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, I1 = (e, n) => {
  for (var r in n || (n = {})) T1.call(n, r) && fd(e, r, n[r]);
  if (cd)
    for (var r of cd(n)) E1.call(n, r) && fd(e, r, n[r]);
  return e;
}, B1 = (e, n) => P1(e, z1(n)), Rv = /* @__PURE__ */ Symbol("FORM_BIND_FORM_ITEM_KEY");
function Wn() {
  const { parentProvider: e, index: n, bindParent: r } = yn(Rv), o = Qr();
  return {
    index: n,
    form: e,
    bindForm: r ? (t) => {
      r(B1(I1({}, t), { instance: o }));
    } : null
  };
}
function D1() {
  const { childProviders: e, length: n, bindChildren: r } = wn(Rv);
  return {
    length: n,
    formItems: e,
    bindFormItems: r
  };
}
var Lv = /* @__PURE__ */ Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), Fv = /* @__PURE__ */ Symbol("SWIPE_RESIZE_DISPATCHER_BIND_SWIPE_RESIZE_LISTENER_KEY");
function M1() {
  const { childProviders: e, length: n, bindChildren: r } = wn(Lv);
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: r
  };
}
function A1() {
  const { childProviders: e, bindChildren: n } = wn(Fv);
  return {
    swipeResizeListeners: e,
    bindSwipeResizeListeners: n
  };
}
function N1() {
  const { parentProvider: e, bindParent: n } = yn(Fv);
  return {
    swipeResizeDispatcher: e,
    bindSwipeResizeDispatcher: n
  };
}
var za = {
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
  onClick: R(),
  onClear: R()
}, V1 = (e, n, r) => new Promise((o, t) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: R1, n: cl, classes: L1 } = ne("field-decorator"), F1 = ["for"];
function U1(e, n) {
  const r = x("var-icon");
  return g(), S("div", {
    class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
    onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
  }, [V("div", {
    class: p(e.classes(e.n("controller"), [e.isFocusing, e.n("--focus")], [e.isError, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")], [!e.line, e.n("--bottom-border-radius")])),
    style: q({
      color: e.color,
      cursor: e.cursor,
      overflow: e.isFloating ? "visible" : "hidden",
      "--field-decorator-middle-offset-left": e.middleOffsetLeft,
      "--field-decorator-middle-offset-width": e.middleOffsetWidth,
      "--field-decorator-middle-offset-height": e.middleOffsetHeight
    })
  }, [
    V("div", { class: p(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")])) }, [L(e.$slots, "prepend-icon")], 2),
    V("div", {
      ref: "middleEl",
      class: p(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
    }, [L(e.$slots, "default")], 2),
    e.placeholder && e.hint ? (g(), S("label", {
      key: 0,
      class: p(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocusing, e.n("--focus")], [e.hintCenter, e.n("--hint-center")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.isError, e.n("--error")], [e.transitionDisabled, e.n("--transition-disabled")], e.computePlaceholderState())),
      style: q({ color: e.color }),
      for: e.id
    }, [V("span", null, ue(e.placeholder), 1)], 14, F1)) : K("v-if", !0),
    V("div", { class: p(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")])) }, [e.clearable && !e.isEmpty(e.value) && !e.readonly && !e.formReadonly ? L(e.$slots, "clear-icon", {
      key: 0,
      clear: e.handleClear
    }, () => [X(r, {
      class: p(e.n("clear-icon")),
      "var-field-decorator-cover": "",
      name: "close-circle",
      onClick: e.handleClear
    }, null, 8, ["class", "onClick"])]) : K("v-if", !0), L(e.$slots, "append-icon")], 2)
  ], 6), e.line ? (g(), S(De, { key: 0 }, [e.variant === "outlined" ? (g(), S("fieldset", {
    key: 0,
    class: p(e.classes(e.n("line"), [e.isFocusing, e.n("--line-focus")], [e.isError, e.n("--line-error")], [e.formDisabled || e.disabled, e.n("--line-disabled")])),
    style: q({ borderColor: e.color })
  }, [V("legend", {
    class: p(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
    style: q({ width: e.legendWidth })
  }, [e.placeholder && e.hint ? (g(), ke(cr, {
    key: 0,
    to: "body"
  }, [V("span", {
    ref: "placeholderTextEl",
    class: p(e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")]))
  }, ue(e.placeholder), 3)])) : K("v-if", !0)], 6)], 6)) : (g(), S("div", {
    key: 1,
    class: p(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.isError, e.n("--line-error")])),
    style: q({ background: e.isError ? void 0 : e.blurColor })
  }, [V("div", {
    class: p(e.classes(e.n("dot"), [e.isFocusing, e.n("--line-focus")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.isError, e.n("--line-error")])),
    style: q({ background: e.isError ? void 0 : e.focusColor })
  }, null, 6)], 6))], 64)) : K("v-if", !0)], 2);
}
var Uv = ee({
  name: R1,
  components: { VarIcon: Je },
  props: za,
  setup(e) {
    const n = y(null), r = y(null), o = y(""), t = y("0px"), a = y("0px"), i = y("0px"), l = y(!0), s = E(() => e.hint && (!Xn(e.value) || e.isFocusing)), { popup: u, bindPopup: d } = cv(), { bindSwipeResizeDispatcher: c } = N1(), f = E(() => e.isError ? void 0 : e.isFocusing ? e.focusColor : e.blurColor);
    tr(w), bn(() => {
      w(), Ve().then(() => {
        l.value = !1;
      });
    }), et(w), k(d, null), k(c, { onResize() {
      Ve().then(w);
    } }), u && pe(() => u.show.value, ($) => V1(null, null, function* () {
      $ && (yield Sn(), w());
    }));
    function v() {
      const { hint: $, value: C, composing: b } = e;
      if (!$ && (!Xn(C) || b)) return cl("--placeholder-hidden");
      if (s.value) return cl("--placeholder-hint");
    }
    function m($) {
      k(e.onClear, $);
    }
    function h($) {
      k(e.onClick, $);
    }
    function w() {
      if (t.value = `${r.value.offsetLeft}px`, a.value = `${r.value.offsetWidth}px`, i.value = `${r.value.offsetHeight}px`, e.variant === "outlined" && n.value) {
        const $ = Qn(n.value), C = `var(--field-decorator-outlined-${e.size}-placeholder-space)`;
        o.value = `calc(${$.width} * 0.75 + ${C} * 2)`;
      }
    }
    return {
      placeholderTextEl: n,
      middleEl: r,
      middleOffsetLeft: t,
      middleOffsetWidth: a,
      middleOffsetHeight: i,
      color: f,
      legendWidth: o,
      isFloating: s,
      transitionDisabled: l,
      resize: w,
      computePlaceholderState: v,
      n: cl,
      classes: L1,
      isEmpty: Xn,
      handleClear: m,
      handleClick: h
    };
  }
});
Uv.render = U1;
var Ta = Uv;
ae(Ta);
de(Ta, za);
var kB = Ta, Fo = Ta, H1 = Object.defineProperty, Y1 = Object.defineProperties, j1 = Object.getOwnPropertyDescriptors, vd = Object.getOwnPropertySymbols, W1 = Object.prototype.hasOwnProperty, K1 = Object.prototype.propertyIsEnumerable, pd = (e, n, r) => n in e ? H1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, q1 = (e, n) => {
  for (var r in n || (n = {})) W1.call(n, r) && pd(e, r, n[r]);
  if (vd)
    for (var r of vd(n)) K1.call(n, r) && pd(e, r, n[r]);
  return e;
}, X1 = (e, n) => Y1(e, j1(n)), gu = X1(q1({
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
  onFocus: R(),
  onBlur: R(),
  onInput: R(),
  onChange: R(),
  onClear: R(),
  "onUpdate:modelValue": R()
}, Be(za, [
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
}), { name: G1, n: Z1, classes: J1 } = ne("input"), Q1 = [
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
  const r = x("var-field-decorator"), o = x("var-form-details");
  return g(), S("div", {
    class: p(e.classes(e.n(), e.n("$--box"))),
    onMousedown: n[12] || (n[12] = (...t) => e.handleMousedown && e.handleMousedown(...t))
  }, [X(r, Kr(va({
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
  })), Xr({
    "clear-icon": ve(({ clear: t }) => [L(e.$slots, "clear-icon", { clear: t })]),
    "append-icon": ve(() => [L(e.$slots, "append-icon")]),
    default: ve(() => [e.normalizedType === "password" && e.preventAutoFill ? (g(), S("input", {
      key: 0,
      tabindex: "-1",
      "aria-label": e.ariaLabel,
      class: p(e.n("autocomplete")),
      placeholder: e.hint ? void 0 : e.placeholder,
      style: q({ "--input-placeholder-color": e.placeholderColor }),
      enterkeyhint: e.enterkeyhint
    }, null, 14, Q1)) : K("v-if", !0), e.textarea ? (g(), S("textarea", {
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
      style: q({
        color: e.errorMessage ? void 0 : e.textColor,
        caretColor: e.errorMessage ? void 0 : e.focusColor,
        resize: e.resize ? "vertical" : "none",
        "--input-placeholder-color": e.placeholderColor
      }),
      onFocus: n[0] || (n[0] = (...t) => e.handleFocus && e.handleFocus(...t)),
      onBlur: n[1] || (n[1] = (...t) => e.handleBlur && e.handleBlur(...t)),
      onInput: n[2] || (n[2] = (...t) => e.handleInput && e.handleInput(...t)),
      onChange: n[3] || (n[3] = (...t) => e.handleChange && e.handleChange(...t)),
      onCompositionstart: n[4] || (n[4] = (...t) => e.handleCompositionStart && e.handleCompositionStart(...t)),
      onCompositionend: n[5] || (n[5] = (...t) => e.handleCompositionEnd && e.handleCompositionEnd(...t))
    }, null, 46, x1)) : (g(), S("input", {
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
      style: q({
        color: e.errorMessage ? void 0 : e.textColor,
        caretColor: e.errorMessage ? void 0 : e.focusColor,
        "--input-placeholder-color": e.placeholderColor
      }),
      onFocus: n[6] || (n[6] = (...t) => e.handleFocus && e.handleFocus(...t)),
      onBlur: n[7] || (n[7] = (...t) => e.handleBlur && e.handleBlur(...t)),
      onInput: n[8] || (n[8] = (...t) => e.handleInput && e.handleInput(...t)),
      onChange: n[9] || (n[9] = (...t) => e.handleChange && e.handleChange(...t)),
      onCompositionstart: n[10] || (n[10] = (...t) => e.handleCompositionStart && e.handleCompositionStart(...t)),
      onCompositionend: n[11] || (n[11] = (...t) => e.handleCompositionEnd && e.handleCompositionEnd(...t))
    }, null, 46, _1))]),
    _: 2
  }, [e.$slots["prepend-icon"] ? {
    name: "prepend-icon",
    fn: ve(() => [L(e.$slots, "prepend-icon")]),
    key: "0"
  } : void 0]), 1040), e.isShowFormDetails ? (g(), ke(o, {
    key: 0,
    "error-message": e.errorMessage,
    "extra-message": e.maxlengthText
  }, Xr({ _: 2 }, [e.$slots["extra-message"] ? {
    name: "extra-message",
    fn: ve(() => [L(e.$slots, "extra-message")]),
    key: "0"
  } : void 0]), 1032, ["error-message", "extra-message"])) : K("v-if", !0)], 34);
}
var Hv = ee({
  name: G1,
  components: {
    VarFormDetails: Bn,
    VarFieldDecorator: Fo
  },
  props: gu,
  setup(e) {
    const n = ev(), r = y(null), o = y(!1), t = y(!1), { bindForm: a, form: i } = Wn(), { errorMessage: l, validateWithTrigger: s, validate: u, resetValidation: d } = jn(), c = E(() => e.disabled || e.readonly ? "" : "text"), f = E(() => e.type === "number" ? "text" : e.type), v = E(() => {
      const { maxlength: J, modelValue: oe } = e;
      return J ? Xn(oe) ? `0 / ${J}` : `${String(oe).length}/${J}` : "";
    }), m = E(() => {
      const { hint: J, blurColor: oe, focusColor: ze } = e;
      if (!J)
        return l.value ? "var(--field-decorator-error-color)" : o.value ? ze || "var(--field-decorator-focus-color)" : oe || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    });
    k(a, {
      reset: U,
      validate: F,
      resetValidation: d
    }), bn(() => {
      e.autofocus && z();
    });
    function h(J) {
      Ve(() => {
        const { validateTrigger: oe, rules: ze, modelValue: te } = e;
        s(oe, J, ze, te);
      });
    }
    function w(J) {
      o.value = !0, k(e.onFocus, J), h("onFocus");
    }
    function $(J) {
      o.value = !1, k(e.onBlur, J), h("onBlur");
    }
    function C(J) {
      const oe = J.target;
      let { value: ze } = oe;
      e.type === "number" && (ze = A(ze));
      const te = T(ze);
      return te === e.modelValue && (oe.value = te), te;
    }
    function b() {
      t.value = !0;
    }
    function P(J) {
      t.value && (t.value = !1, J.target.dispatchEvent(new Event("input")));
    }
    function O(J) {
      if (t.value) return;
      const oe = C(J);
      k(e["onUpdate:modelValue"], oe), k(e.onInput, oe, J), h("onInput");
    }
    function I(J) {
      const oe = B(C(J));
      e.modelModifiers.trim && k(e["onUpdate:modelValue"], oe), k(e.onChange, oe, J), h("onChange");
    }
    function Y() {
      const { disabled: J, readonly: oe, clearable: ze, onClear: te } = e;
      i?.disabled.value || i?.readonly.value || J || oe || !ze || (k(e["onUpdate:modelValue"], ""), k(te, ""), h("onClear"));
    }
    function M(J) {
      const { disabled: oe, onClick: ze } = e;
      i?.disabled.value || oe || (k(ze, J), h("onClick"));
    }
    function A(J) {
      const oe = J.indexOf("-"), ze = J.indexOf(".");
      return oe > -1 && (J = oe === 0 ? "-" + J.replace(/-/g, "") : J.replace(/-/g, "")), ze > -1 && (J = J.slice(0, ze + 1) + J.slice(ze).replace(/\./g, "")), J.replace(/[^-0-9.]/g, "");
    }
    function B(J) {
      return e.modelModifiers.trim ? J.trim() : J;
    }
    function T(J) {
      return e.maxlength ? J.slice(0, H(e.maxlength)) : J;
    }
    function D(J) {
      const { disabled: oe } = e;
      i?.disabled.value || oe || J.target === r.value || (z(), Ae(J));
    }
    function U() {
      k(e["onUpdate:modelValue"], ""), d();
    }
    function F() {
      return u(e.rules, e.modelValue);
    }
    function z() {
      var J;
      (J = r.value) == null || J.focus();
    }
    function N() {
      r.value.blur();
    }
    function ie() {
      r.value.select();
    }
    return {
      el: r,
      id: n,
      isFocusing: o,
      isComposing: t,
      errorMessage: l,
      placeholderColor: m,
      normalizedType: f,
      cursor: c,
      maxlengthText: v,
      formDisabled: i?.disabled,
      formReadonly: i?.readonly,
      n: Z1,
      classes: J1,
      isEmpty: Xn,
      handleFocus: w,
      handleBlur: $,
      handleInput: O,
      handleChange: I,
      handleClear: Y,
      handleClick: M,
      handleCompositionStart: b,
      handleCompositionEnd: P,
      handleMousedown: D,
      validate: F,
      resetValidation: d,
      reset: U,
      focus: z,
      blur: N,
      select: ie
    };
  }
});
Hv.render = ew;
var Ea = Hv;
ae(Ea);
de(Ea, gu);
var $B = Ea, Uo = Ea, Yv = {
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
  onClick: R(),
  onChange: R(),
  "onUpdate:modelValue": R(),
  "onUpdate:indeterminate": R()
}, jv = /* @__PURE__ */ Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function nw() {
  const { bindChildren: e, childProviders: n, length: r } = wn(jv);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function rw() {
  const { bindParent: e, parentProvider: n, index: r } = yn(jv);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
var { name: ow, n: tw, classes: aw } = ne("checkbox"), iw = [
  "aria-checked",
  "aria-disabled",
  "tabindex"
];
function lw(e, n) {
  const r = x("var-icon"), o = x("var-hover-overlay"), t = x("var-form-details"), a = We("hover"), i = We("ripple");
  return g(), S("div", { class: p(e.n("wrap")) }, [V("div", {
    ref: "checkbox",
    role: "checkbox",
    "aria-checked": e.isIndeterminate ? "mixed" : e.checked,
    "aria-disabled": e.formDisabled || e.disabled,
    class: p(e.n()),
    tabindex: e.tabindex == null ? e.disabled || e.formDisabled ? void 0 : "0" : e.tabindex,
    onFocus: n[1] || (n[1] = (l) => e.isFocusing = !0),
    onBlur: n[2] || (n[2] = (l) => e.isFocusing = !1),
    onClick: n[3] || (n[3] = (...l) => e.handleClick && e.handleClick(...l))
  }, [Me((g(), S("div", {
    class: p(e.classes(e.n("action"), [
      e.checked || e.isIndeterminate,
      e.n("--checked"),
      e.n("--unchecked")
    ], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    style: q({ color: e.checked || e.isIndeterminate ? e.checkedColor : e.uncheckedColor })
  }, [
    e.isIndeterminate ? L(e.$slots, "indeterminate-icon", { key: 0 }, () => [X(r, {
      class: p(e.n("icon")),
      name: "minus-box",
      size: e.iconSize,
      "var-checkbox-cover": ""
    }, null, 8, ["class", "size"])]) : K("v-if", !0),
    e.checked && !e.isIndeterminate ? L(e.$slots, "checked-icon", { key: 1 }, () => [X(r, {
      class: p(e.n("icon")),
      name: "checkbox-marked",
      size: e.iconSize,
      "var-checkbox-cover": ""
    }, null, 8, ["class", "size"])]) : K("v-if", !0),
    !e.checked && !e.isIndeterminate ? L(e.$slots, "unchecked-icon", { key: 2 }, () => [X(r, {
      class: p(e.n("icon")),
      name: "checkbox-blank-outline",
      size: e.iconSize,
      "var-checkbox-cover": ""
    }, null, 8, ["class", "size"])]) : K("v-if", !0),
    X(o, {
      hovering: !e.disabled && !e.formDisabled && e.hovering,
      focusing: !e.disabled && !e.formDisabled && e.isFocusing
    }, null, 8, ["hovering", "focusing"])
  ], 6)), [[
    a,
    e.handleHovering,
    "desktop"
  ], [i, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }]]), e.$slots.default ? (g(), S("div", {
    key: 0,
    class: p(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    onClick: n[0] || (n[0] = (...l) => e.handleTextClick && e.handleTextClick(...l))
  }, [L(e.$slots, "default", { checked: e.checked })], 2)) : K("v-if", !0)], 42, iw), X(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var Wv = ee({
  name: ow,
  directives: {
    Ripple: sn,
    Hover: An
  },
  components: {
    VarIcon: Je,
    VarFormDetails: Bn,
    VarHoverOverlay: Hn
  },
  props: Yv,
  setup(e) {
    const n = y(null), r = y(!1), o = Pn(e, "modelValue"), t = Pn(e, "indeterminate"), a = E(() => o.value === e.checkedValue), i = E(() => e.checkedValue), { checkboxGroup: l, bindCheckboxGroup: s } = rw(), { hovering: u, handleHovering: d } = rr(), { form: c, bindForm: f } = Wn(), { errorMessage: v, validateWithTrigger: m, validate: h, resetValidation: w } = jn(), $ = {
      checkedValue: i,
      checked: a,
      sync: I,
      validate: T,
      resetValidation: w,
      reset: Y
    };
    k(s, $), k(f, $), Ye(() => window, "keydown", A), Ye(() => window, "keyup", B);
    function C(D) {
      Ve(() => {
        const { validateTrigger: U, rules: F, modelValue: z } = e;
        m(U, D, F, z);
      });
    }
    function b(D) {
      const { checkedValue: U, onChange: F } = e;
      o.value = D, k(F, o.value, t.value), C("onChange"), D === U ? l?.onChecked(U) : l?.onUnchecked(U);
    }
    function P(D) {
      const { disabled: U, readonly: F, checkedValue: z, uncheckedValue: N, onClick: ie } = e;
      if (c?.disabled.value || U || (k(ie, D), c?.readonly.value || F)) return;
      if (t.value === !0) {
        t.value = !1, k(e.onChange, o.value, t.value), C("onChange");
        return;
      }
      const J = l ? l.checkedCount.value >= Number(l.max.value) : !1;
      !a.value && J || b(a.value ? N : z);
    }
    function O() {
      n.value.focus();
    }
    function I(D) {
      const { checkedValue: U, uncheckedValue: F } = e;
      o.value = D.includes(U) ? U : F;
    }
    function Y() {
      o.value = e.uncheckedValue, w();
    }
    function M(D) {
      const { checkedValue: U, uncheckedValue: F } = e;
      [U, F].includes(D) || (D = a.value ? F : U), b(D);
    }
    function A(D) {
      if (!r.value) return;
      const { key: U } = D;
      (U === "Enter" || U === " ") && Ae(D), U === "Enter" && n.value.click();
    }
    function B(D) {
      r.value && D.key === " " && (Ae(D), n.value.click());
    }
    function T() {
      return h(e.rules, e.modelValue);
    }
    return {
      checkbox: n,
      isFocusing: r,
      isIndeterminate: t,
      checked: a,
      errorMessage: v,
      checkboxGroupErrorMessage: l?.errorMessage,
      formDisabled: c?.disabled,
      formReadonly: c?.readonly,
      hovering: u,
      n: tw,
      classes: aw,
      handleHovering: d,
      handleClick: P,
      handleTextClick: O,
      toggle: M,
      reset: Y,
      validate: T,
      resetValidation: w
    };
  }
});
Wv.render = lw;
var Ia = Wv;
ae(Ia);
de(Ia, Yv);
var CB = Ia, io = Ia, Kv = {
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
  onKeyArrowX: R()
}, qv = /* @__PURE__ */ Symbol("MENU_SELECT_BIND_MENU_OPTION_KEY");
function sw() {
  const { length: e, childProviders: n, bindChildren: r } = wn(qv);
  return {
    length: e,
    menuOptions: n,
    bindMenuOptions: r
  };
}
function uw() {
  const { index: e, parentProvider: n, bindParent: r } = yn(qv);
  return Un(!!r, "MenuOption", "<var-menu-option/> must in <var-menu-select/>"), {
    index: e,
    menuSelect: n,
    bindMenuSelect: r
  };
}
var dw = (e, n, r) => new Promise((o, t) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: cw, n: fw, classes: vw } = ne("menu-option"), pw = ["tabindex"];
function mw(e, n) {
  const r = x("var-checkbox"), o = x("maybe-v-node"), t = x("var-icon"), a = x("var-hover-overlay"), i = We("ripple"), l = We("hover");
  return Me((g(), S("div", {
    ref: "root",
    class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.size}`), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")], [e.childrenTrigger, e.n("--children-trigger")])),
    tabindex: e.disabled ? void 0 : "-1",
    onClick: n[3] || (n[3] = (...s) => e.handleClick && e.handleClick(...s)),
    onFocus: n[4] || (n[4] = (s) => e.isFocusing = !0),
    onBlur: n[5] || (n[5] = (s) => e.isFocusing = !1)
  }, [
    V("div", { class: p(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])) }, null, 2),
    e.multiple ? (g(), ke(r, {
      key: 0,
      ref: "checkbox",
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (s) => e.optionSelected = s),
      indeterminate: e.optionIndeterminate,
      "onUpdate:indeterminate": n[1] || (n[1] = (s) => e.optionIndeterminate = s),
      disabled: e.disabled,
      onClick: n[2] || (n[2] = Fn(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, [
      "modelValue",
      "indeterminate",
      "disabled",
      "onChange"
    ])) : K("v-if", !0),
    L(e.$slots, "default", {}, () => [V("div", { class: p(e.classes(e.n("text"))) }, [X(o, {
      is: e.labelVNode,
      class: p(e.n("$--ellipsis"))
    }, null, 8, ["is", "class"])], 2)]),
    e.childrenTrigger ? (g(), S("div", {
      key: 1,
      class: p(e.n("arrow"))
    }, [X(t, {
      "var-menu-option-cover": "",
      class: p(e.n("arrow-icon")),
      name: "chevron-right"
    }, null, 8, ["class"])], 2)) : K("v-if", !0),
    X(a, {
      hovering: (e.hovering || e.highlight) && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 42, pw)), [[i, { disabled: e.disabled || !e.ripple }], [
    l,
    e.handleHovering,
    "desktop"
  ]]);
}
var Xv = ee({
  name: cw,
  directives: {
    Ripple: sn,
    Hover: An
  },
  components: {
    VarCheckbox: io,
    VarHoverOverlay: Hn,
    VarIcon: Je,
    MaybeVNode: tt
  },
  props: Kv,
  setup(e) {
    const n = y(), r = y(), o = y(!1), t = y(!1), a = y(!1), i = E(() => t.value), l = E(() => a.value), s = E(() => e.value), u = E(() => e.disabled), d = E(() => e.ripple), { menuSelect: c, bindMenuSelect: f } = uw(), { size: v, multiple: m, onSelect: h, computeLabel: w } = c, { hovering: $, handleHovering: C } = rr(), b = E(() => {
      var B;
      return fn(e.label) ? e.label((B = e.option) != null ? B : {
        label: e.label,
        value: e.value,
        disabled: e.disabled,
        ripple: e.ripple
      }, t.value) : e.label;
    }), P = {
      label: b,
      value: s,
      selected: i,
      disabled: u,
      ripple: d,
      indeterminate: l,
      sync: A
    };
    pe([() => e.label, () => e.value], w), f(P), Ye(() => window, "keydown", I), Ye(() => window, "keyup", Y);
    function O() {
      if (!e.disabled && !(!m.value && e.childrenTrigger)) {
        if (m.value && a.value) {
          a.value = !1, t.value = !1, h(P);
          return;
        }
        m.value && !a.value && (t.value = !t.value), h(P);
      }
    }
    function I(B) {
      var T;
      !o.value && !((T = r.value) != null && T.isFocusing) || ((B.key === "ArrowRight" || B.key === "ArrowLeft") && (Ae(B), k(e.onKeyArrowX, B.key)), o.value && ((B.key === " " || B.key === "Enter") && Ae(B), B.key === "Enter" && n.value.click()));
    }
    function Y(B) {
      o.value && B.key === " " && (Ae(B), n.value.click());
    }
    function M() {
      return dw(this, null, function* () {
        yield Ve(), h(P);
      });
    }
    function A(B, T) {
      t.value = B, ot(T) && (a.value = T);
    }
    return {
      root: n,
      checkbox: r,
      optionSelected: t,
      optionIndeterminate: a,
      size: v,
      multiple: m,
      hovering: $,
      isFocusing: o,
      labelVNode: b,
      n: fw,
      classes: vw,
      handleHovering: C,
      handleClick: O,
      handleSelect: M
    };
  }
});
Xv.render = mw;
var st = Xv;
ae(st);
de(st, Kv);
var SB = st, lo = st, bu = {
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
  onOpen: R(),
  onOpened: R(),
  onClose: R(),
  onClosed: R(),
  onClickOutside: R(),
  "onUpdate:show": R(),
  cascadeOptimization: Boolean
};
var Ho = "bottom", Ba = "right", Da = "left", hw = "auto", Ma = [
  "top",
  Ho,
  Ba,
  Da
], Aa = "start";
var gw = "clippingParents", bw = "viewport", md = "popper", yw = "reference", hd = /* @__PURE__ */ Ma.reduce(function(e, n) {
  return e.concat([n + "-" + Aa, n + "-end"]);
}, []), Gv = /* @__PURE__ */ [].concat(Ma, [hw]).reduce(function(e, n) {
  return e.concat([
    n,
    n + "-" + Aa,
    n + "-end"
  ]);
}, []), ww = "beforeRead", kw = "read", $w = "afterRead", Cw = "beforeMain", Sw = "main", Ow = "afterMain", Pw = "beforeWrite", zw = "write", Tw = "afterWrite", Ew = [
  ww,
  kw,
  $w,
  Cw,
  Sw,
  Ow,
  Pw,
  zw,
  Tw
];
function Yn(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function sr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function gr(e) {
  return Yn(e).getComputedStyle(e);
}
function Zr(e) {
  return e instanceof Yn(e).Element || e instanceof Element;
}
function Gn(e) {
  return e instanceof Yn(e).HTMLElement || e instanceof HTMLElement;
}
function yu(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Yn(e).ShadowRoot || e instanceof ShadowRoot;
}
function Iw(e) {
  return [
    "table",
    "td",
    "th"
  ].indexOf(sr(e)) >= 0;
}
function Lr(e) {
  return ((Zr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Na(e) {
  return sr(e) === "html" ? e : e.assignedSlot || e.parentNode || (yu(e) ? e.host : null) || Lr(e);
}
function Tl() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function gd(e) {
  return !Gn(e) || gr(e).position === "fixed" ? null : e.offsetParent;
}
function Bw(e) {
  var n = /firefox/i.test(Tl());
  if (/Trident/i.test(Tl()) && Gn(e) && gr(e).position === "fixed")
    return null;
  var r = Na(e);
  for (yu(r) && (r = r.host); Gn(r) && ["html", "body"].indexOf(sr(r)) < 0; ) {
    var o = gr(r);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function wu(e) {
  for (var n = Yn(e), r = gd(e); r && Iw(r) && gr(r).position === "static"; ) r = gd(r);
  return r && (sr(r) === "html" || sr(r) === "body" && gr(r).position === "static") ? n : r || Bw(e) || n;
}
function Er(e) {
  return e.split("-")[0];
}
function Yo(e) {
  return e.split("-")[1];
}
var Io = Math.max, bd = Math.min, so = Math.round, Dw = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Mw(e, n) {
  var r = e.x, o = e.y, t = n.devicePixelRatio || 1;
  return {
    x: so(r * t) / t || 0,
    y: so(o * t) / t || 0
  };
}
function yd(e) {
  var n, r = e.popper, o = e.popperRect, t = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, c = e.isFixed, f = i.x, v = f === void 0 ? 0 : f, m = i.y, h = m === void 0 ? 0 : m, w = typeof d == "function" ? d({
    x: v,
    y: h
  }) : {
    x: v,
    y: h
  };
  v = w.x, h = w.y;
  var $ = i.hasOwnProperty("x"), C = i.hasOwnProperty("y"), b = Da, P = "top", O = window;
  if (u) {
    var I = wu(r), Y = "clientHeight", M = "clientWidth";
    if (I === Yn(r) && (I = Lr(r), gr(I).position !== "static" && l === "absolute" && (Y = "scrollHeight", M = "scrollWidth")), I = I, t === "top" || (t === "left" || t === "right") && a === "end") {
      P = Ho;
      var A = c && I === O && O.visualViewport ? O.visualViewport.height : I[Y];
      h -= A - o.height, h *= s ? 1 : -1;
    }
    if (t === "left" || (t === "top" || t === "bottom") && a === "end") {
      b = Ba;
      var B = c && I === O && O.visualViewport ? O.visualViewport.width : I[M];
      v -= B - o.width, v *= s ? 1 : -1;
    }
  }
  var T = Object.assign({ position: l }, u && Dw), D = d === !0 ? Mw({
    x: v,
    y: h
  }, Yn(r)) : {
    x: v,
    y: h
  };
  if (v = D.x, h = D.y, s) {
    var U;
    return Object.assign({}, T, (U = {}, U[P] = C ? "0" : "", U[b] = $ ? "0" : "", U.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + h + "px)" : "translate3d(" + v + "px, " + h + "px, 0)", U));
  }
  return Object.assign({}, T, (n = {}, n[P] = C ? h + "px" : "", n[b] = $ ? v + "px" : "", n.transform = "", n));
}
function Aw(e) {
  var n = e.state, r = e.options, o = r.gpuAcceleration, t = o === void 0 ? !0 : o, a = r.adaptive, i = a === void 0 ? !0 : a, l = r.roundOffsets, s = l === void 0 ? !0 : l, u = {
    placement: Er(n.placement),
    variation: Yo(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, yd(Object.assign({}, u, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, yd(Object.assign({}, u, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, { "data-popper-placement": n.placement });
}
var Zv = {
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
function At(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Nw[n];
  });
}
var Vw = {
  start: "end",
  end: "start"
};
function wd(e) {
  return e.replace(/start|end/g, function(n) {
    return Vw[n];
  });
}
function Jv() {
  return !/^((?!chrome|android).)*safari/i.test(Tl());
}
function uo(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var o = e.getBoundingClientRect(), t = 1, a = 1;
  n && Gn(e) && (t = e.offsetWidth > 0 && so(o.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && so(o.height) / e.offsetHeight || 1);
  var i = (Zr(e) ? Yn(e) : window).visualViewport, l = !Jv() && r, s = (o.left + (l && i ? i.offsetLeft : 0)) / t, u = (o.top + (l && i ? i.offsetTop : 0)) / a, d = o.width / t, c = o.height / a;
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
function ku(e) {
  var n = Yn(e);
  return {
    scrollLeft: n.pageXOffset,
    scrollTop: n.pageYOffset
  };
}
function $u(e) {
  return uo(Lr(e)).left + ku(e).scrollLeft;
}
function Rw(e, n) {
  var r = Yn(e), o = Lr(e), t = r.visualViewport, a = o.clientWidth, i = o.clientHeight, l = 0, s = 0;
  if (t) {
    a = t.width, i = t.height;
    var u = Jv();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: l + $u(e),
    y: s
  };
}
function Lw(e) {
  var n, r = Lr(e), o = ku(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, a = Io(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), i = Io(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -o.scrollLeft + $u(e), s = -o.scrollTop;
  return gr(t || r).direction === "rtl" && (l += Io(r.clientWidth, t ? t.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: s
  };
}
function Cu(e) {
  var n = gr(e), r = n.overflow, o = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + o);
}
function Qv(e) {
  return [
    "html",
    "body",
    "#document"
  ].indexOf(sr(e)) >= 0 ? e.ownerDocument.body : Gn(e) && Cu(e) ? e : Qv(Na(e));
}
function Bo(e, n) {
  var r;
  n === void 0 && (n = []);
  var o = Qv(e), t = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Yn(o), i = t ? [a].concat(a.visualViewport || [], Cu(o) ? o : []) : o, l = n.concat(i);
  return t ? l : l.concat(Bo(Na(i)));
}
function Fw(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n)) return !0;
  if (r && yu(r)) {
    var o = n;
    do {
      if (o && e.isSameNode(o)) return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function El(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Uw(e, n) {
  var r = uo(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function kd(e, n, r) {
  return n === "viewport" ? El(Rw(e, r)) : Zr(n) ? Uw(n, r) : El(Lw(Lr(e)));
}
function Hw(e) {
  var n = Bo(Na(e)), r = ["absolute", "fixed"].indexOf(gr(e).position) >= 0 && Gn(e) ? wu(e) : e;
  return Zr(r) ? n.filter(function(o) {
    return Zr(o) && Fw(o, r) && sr(o) !== "body";
  }) : [];
}
function Yw(e, n, r, o) {
  var t = n === "clippingParents" ? Hw(e) : [].concat(n), a = [].concat(t, [r]), i = a[0], l = a.reduce(function(s, u) {
    var d = kd(e, u, o);
    return s.top = Io(d.top, s.top), s.right = bd(d.right, s.right), s.bottom = bd(d.bottom, s.bottom), s.left = Io(d.left, s.left), s;
  }, kd(e, i, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function jw(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function xv(e) {
  var n = e.reference, r = e.element, o = e.placement, t = o ? Er(o) : null, a = o ? Yo(o) : null, i = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case "top":
      s = {
        x: i,
        y: n.y - r.height
      };
      break;
    case Ho:
      s = {
        x: i,
        y: n.y + n.height
      };
      break;
    case Ba:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case Da:
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
  var u = t ? jw(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case Aa:
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
function Ww() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Kw(e) {
  return Object.assign({}, Ww(), e);
}
function qw(e, n) {
  return n.reduce(function(r, o) {
    return r[o] = e, r;
  }, {});
}
function _v(e, n) {
  n === void 0 && (n = {});
  var r = n, o = r.placement, t = o === void 0 ? e.placement : o, a = r.strategy, i = a === void 0 ? e.strategy : a, l = r.boundary, s = l === void 0 ? gw : l, u = r.rootBoundary, d = u === void 0 ? bw : u, c = r.elementContext, f = c === void 0 ? md : c, v = r.altBoundary, m = v === void 0 ? !1 : v, h = r.padding, w = h === void 0 ? 0 : h, $ = Kw(typeof w != "number" ? w : qw(w, Ma)), C = f === "popper" ? yw : md, b = e.rects.popper, P = e.elements[m ? C : f], O = Yw(Zr(P) ? P : P.contextElement || Lr(e.elements.popper), s, d, i), I = uo(e.elements.reference), Y = xv({
    reference: I,
    element: b,
    strategy: "absolute",
    placement: t
  }), M = El(Object.assign({}, b, Y)), A = f === "popper" ? M : I, B = {
    top: O.top - A.top + $.top,
    bottom: A.bottom - O.bottom + $.bottom,
    left: O.left - A.left + $.left,
    right: A.right - O.right + $.right
  }, T = e.modifiersData.offset;
  if (f === "popper" && T) {
    var D = T[t];
    Object.keys(B).forEach(function(U) {
      var F = ["right", "bottom"].indexOf(U) >= 0 ? 1 : -1, z = ["top", "bottom"].indexOf(U) >= 0 ? "y" : "x";
      B[U] += D[z] * F;
    });
  }
  return B;
}
function Xw(e, n) {
  n === void 0 && (n = {});
  var r = n, o = r.placement, t = r.boundary, a = r.rootBoundary, i = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? Gv : s, d = Yo(o), c = d ? l ? hd : hd.filter(function(m) {
    return Yo(m) === d;
  }) : Ma, f = c.filter(function(m) {
    return u.indexOf(m) >= 0;
  });
  f.length === 0 && (f = c);
  var v = f.reduce(function(m, h) {
    return m[h] = _v(e, {
      placement: h,
      boundary: t,
      rootBoundary: a,
      padding: i
    })[Er(h)], m;
  }, {});
  return Object.keys(v).sort(function(m, h) {
    return v[m] - v[h];
  });
}
function Gw(e) {
  if (Er(e) === "auto") return [];
  var n = At(e);
  return [
    wd(e),
    n,
    wd(n)
  ];
}
function Zw(e) {
  var n = e.state, r = e.options, o = e.name;
  if (!n.modifiersData[o]._skip) {
    for (var t = r.mainAxis, a = t === void 0 ? !0 : t, i = r.altAxis, l = i === void 0 ? !0 : i, s = r.fallbackPlacements, u = r.padding, d = r.boundary, c = r.rootBoundary, f = r.altBoundary, v = r.flipVariations, m = v === void 0 ? !0 : v, h = r.allowedAutoPlacements, w = n.options.placement, $ = Er(w) === w, C = s || ($ || !m ? [At(w)] : Gw(w)), b = [w].concat(C).reduce(function(W, Z) {
      return W.concat(Er(Z) === "auto" ? Xw(n, {
        placement: Z,
        boundary: d,
        rootBoundary: c,
        padding: u,
        flipVariations: m,
        allowedAutoPlacements: h
      }) : Z);
    }, []), P = n.rects.reference, O = n.rects.popper, I = /* @__PURE__ */ new Map(), Y = !0, M = b[0], A = 0; A < b.length; A++) {
      var B = b[A], T = Er(B), D = Yo(B) === Aa, U = ["top", Ho].indexOf(T) >= 0, F = U ? "width" : "height", z = _v(n, {
        placement: B,
        boundary: d,
        rootBoundary: c,
        altBoundary: f,
        padding: u
      }), N = U ? D ? Ba : Da : D ? Ho : "top";
      P[F] > O[F] && (N = At(N));
      var ie = At(N), J = [];
      if (a && J.push(z[T] <= 0), l && J.push(z[N] <= 0, z[ie] <= 0), J.every(function(W) {
        return W;
      })) {
        M = B, Y = !1;
        break;
      }
      I.set(B, J);
    }
    if (Y)
      for (var oe = m ? 3 : 1, ze = function(Z) {
        var se = b.find(function(he) {
          var j = I.get(he);
          if (j) return j.slice(0, Z).every(function(re) {
            return re;
          });
        });
        if (se)
          return M = se, "break";
      }, te = oe; te > 0 && ze(te) !== "break"; te--) ;
    n.placement !== M && (n.modifiersData[o]._skip = !0, n.placement = M, n.reset = !0);
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
  var o = Er(e), t = ["left", "top"].indexOf(o) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, n, { placement: e })) : r, i = a[0], l = a[1];
  return i = i || 0, l = (l || 0) * t, ["left", "right"].indexOf(o) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function xw(e) {
  var n = e.state, r = e.options, o = e.name, t = r.offset, a = t === void 0 ? [0, 0] : t, i = Gv.reduce(function(d, c) {
    return d[c] = Qw(c, n.rects, a), d;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[o] = i;
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
  return e === Yn(e) || !Gn(e) ? ku(e) : ek(e);
}
function rk(e) {
  var n = e.getBoundingClientRect(), r = so(n.width) / e.offsetWidth || 1, o = so(n.height) / e.offsetHeight || 1;
  return r !== 1 || o !== 1;
}
function ok(e, n, r) {
  r === void 0 && (r = !1);
  var o = Gn(n), t = Gn(n) && rk(n), a = Lr(n), i = uo(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (o || !o && !r) && ((sr(n) !== "body" || Cu(a)) && (l = nk(n)), Gn(n) ? (s = uo(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : a && (s.x = $u(a))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function tk(e) {
  var n = uo(e), r = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - o) <= 1 && (o = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: o
  };
}
function ak(e) {
  var n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(a) {
    n.set(a.name, a);
  });
  function t(a) {
    r.add(a.name), [].concat(a.requires || [], a.requiresIfExists || []).forEach(function(i) {
      if (!r.has(i)) {
        var l = n.get(i);
        l && t(l);
      }
    }), o.push(a);
  }
  return e.forEach(function(a) {
    r.has(a.name) || t(a);
  }), o;
}
function ik(e) {
  var n = ak(e);
  return Ew.reduce(function(r, o) {
    return r.concat(n.filter(function(t) {
      return t.phase === o;
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
  var n = e.reduce(function(r, o) {
    var t = r[o.name];
    return r[o.name] = t ? Object.assign({}, t, o, {
      options: Object.assign({}, t.options, o.options),
      data: Object.assign({}, t.data, o.data)
    }) : o, r;
  }, {});
  return Object.keys(n).map(function(r) {
    return n[r];
  });
}
var $d = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Cd() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
  return !n.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function uk(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, o = r === void 0 ? [] : r, t = n.defaultOptions, a = t === void 0 ? $d : t;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, $d, a),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, c = [], f = !1, v = {
      state: d,
      setOptions: function($) {
        var C = typeof $ == "function" ? $(d.options) : $;
        h(), d.options = Object.assign({}, a, d.options, C), d.scrollParents = {
          reference: Zr(l) ? Bo(l) : l.contextElement ? Bo(l.contextElement) : [],
          popper: Bo(s)
        };
        var b = ik(sk([].concat(o, d.options.modifiers)));
        return d.orderedModifiers = b.filter(function(P) {
          return P.enabled;
        }), m(), v.update();
      },
      forceUpdate: function() {
        if (!f) {
          var $ = d.elements, C = $.reference, b = $.popper;
          if (Cd(C, b)) {
            d.rects = {
              reference: ok(C, wu(b), d.options.strategy === "fixed"),
              popper: tk(b)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(B) {
              return d.modifiersData[B.name] = Object.assign({}, B.data);
            });
            for (var P = 0; P < d.orderedModifiers.length; P++) {
              if (d.reset === !0) {
                d.reset = !1, P = -1;
                continue;
              }
              var O = d.orderedModifiers[P], I = O.fn, Y = O.options, M = Y === void 0 ? {} : Y, A = O.name;
              typeof I == "function" && (d = I({
                state: d,
                options: M,
                name: A,
                instance: v
              }) || d);
            }
          }
        }
      },
      update: lk(function() {
        return new Promise(function(w) {
          v.forceUpdate(), w(d);
        });
      }),
      destroy: function() {
        h(), f = !0;
      }
    };
    if (!Cd(l, s)) return v;
    v.setOptions(u).then(function(w) {
      !f && u.onFirstUpdate && u.onFirstUpdate(w);
    });
    function m() {
      d.orderedModifiers.forEach(function(w) {
        var $ = w.name, C = w.options, b = C === void 0 ? {} : C, P = w.effect;
        if (typeof P == "function") {
          var O = P({
            state: d,
            name: $,
            instance: v,
            options: b
          });
          c.push(O || function() {
          });
        }
      });
    }
    function h() {
      c.forEach(function(w) {
        return w();
      }), c = [];
    }
    return v;
  };
}
var yt = { passive: !0 };
function dk(e) {
  var n = e.state, r = e.instance, o = e.options, t = o.scroll, a = t === void 0 ? !0 : t, i = o.resize, l = i === void 0 ? !0 : i, s = Yn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, yt);
  }), l && s.addEventListener("resize", r.update, yt), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, yt);
    }), l && s.removeEventListener("resize", r.update, yt);
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
  n.modifiersData[r] = xv({
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
    var o = n.styles[r] || {}, t = n.attributes[r] || {}, a = n.elements[r];
    !Gn(a) || !sr(a) || (Object.assign(a.style, o), Object.keys(t).forEach(function(i) {
      var l = t[i];
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
    Object.keys(n.elements).forEach(function(o) {
      var t = n.elements[o], a = n.attributes[o] || {}, i = Object.keys(n.styles.hasOwnProperty(o) ? n.styles[o] : r[o]).reduce(function(l, s) {
        return l[s] = "", l;
      }, {});
      !Gn(t) || !sr(t) || (Object.assign(t.style, i), Object.keys(a).forEach(function(l) {
        t.removeAttribute(l);
      }));
    });
  };
}
var hk = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: pk,
  effect: mk,
  requires: ["computeStyles"]
}, gk = [
  ck,
  vk,
  Zv,
  hk
], bk = /* @__PURE__ */ uk({ defaultModifiers: gk }), yk = Object.defineProperty, wk = Object.defineProperties, kk = Object.getOwnPropertyDescriptors, Sd = Object.getOwnPropertySymbols, $k = Object.prototype.hasOwnProperty, Ck = Object.prototype.propertyIsEnumerable, Od = (e, n, r) => n in e ? yk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, fl = (e, n) => {
  for (var r in n || (n = {})) $k.call(n, r) && Od(e, r, n[r]);
  if (Sd)
    for (var r of Sd(n)) Ck.call(n, r) && Od(e, r, n[r]);
  return e;
}, vl = (e, n) => wk(e, kk(n)), Pd = (e, n, r) => new Promise((o, t) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
});
function ep(e) {
  const n = y(null), r = y(null), o = y({
    width: 0,
    height: 0
  }), t = Pn(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(N, ie) {
      k(ie ? e.onOpen : e.onClose);
    }
  }), { zIndex: a } = it(() => t.value, 1);
  fu(() => t.value, a);
  let i = null, l, s = !1, u = !1, d = !0;
  Ye(() => window, "keydown", D), pe(() => [
    e.offsetX,
    e.offsetY,
    e.placement,
    e.strategy
  ], U), pe(() => e.disabled, z), pe(() => t.value, (N) => {
    N && U();
  }), tr(U), br(c), _o(f);
  function c() {
    const N = A();
    i = bk(N, r.value, M()), N.addEventListener("mouseenter", h), N.addEventListener("mouseleave", w), N.addEventListener("click", b), document.addEventListener("click", P);
  }
  function f() {
    const N = A();
    N && (N.removeEventListener("mouseenter", h), N.removeEventListener("mouseleave", w), N.removeEventListener("click", b)), i.destroy(), document.removeEventListener("click", P);
  }
  function v() {
    const N = A();
    if (!N) return;
    const { width: ie, height: J } = Qn(N);
    o.value = {
      width: rn(ie),
      height: rn(J)
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
    e.trigger === "hover" && (u = !0, F());
  }
  function w() {
    return Pd(this, null, function* () {
      e.trigger === "hover" && (u = !1, yield Sn(), !s && z());
    });
  }
  function $() {
    e.trigger === "hover" && (s = !0, e.cascadeOptimization && (d = !1));
  }
  function C() {
    return Pd(this, null, function* () {
      e.trigger === "hover" && (s = !1, yield Sn(), !u && z());
    });
  }
  function b() {
    if (e.trigger === "click") {
      if (e.closeOnClickReference && t.value) {
        z();
        return;
      }
      F();
    }
  }
  function P(N) {
    const ie = A();
    if (ie && !ie.contains(N.target)) {
      if (e.trigger !== "click") return;
      O(), k(e.onClickOutside, N);
    }
  }
  function O() {
    z();
  }
  function I() {
    U(), k(e.onClosed);
  }
  function Y() {
    const { offsetX: N, offsetY: ie, placement: J } = e;
    v();
    const oe = {
      x: rn(N),
      y: rn(ie)
    };
    switch (J) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: oe.x,
          distance: oe.y - o.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: oe.x,
          distance: oe.y - o.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: oe.x,
          distance: oe.y - o.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: oe.x,
          distance: -oe.y - o.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: oe.x,
          distance: -oe.y - o.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: oe.x,
          distance: -oe.y - o.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: oe.y,
          distance: oe.x - o.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: oe.y,
          distance: -oe.x - o.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: J,
          skidding: oe.y,
          distance: -oe.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: J,
          skidding: oe.x,
          distance: -oe.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: J,
          skidding: oe.x,
          distance: oe.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: J,
          skidding: oe.y,
          distance: oe.x
        };
    }
  }
  function M() {
    const { placement: N, skidding: ie, distance: J } = Y();
    return {
      placement: N,
      modifiers: [
        vl(fl({}, Jw), { enabled: t.value }),
        vl(fl({}, _w), { options: { offset: [ie, J] } }),
        vl(fl({}, Zv), {
          options: {
            adaptive: !1,
            gpuAcceleration: !1
          },
          enabled: t.value
        }),
        {
          name: "applyTransformOrigin",
          enabled: t.value,
          phase: "beforeWrite",
          fn({ state: oe }) {
            oe.styles.popper.transformOrigin = m();
          }
        }
      ],
      strategy: e.strategy
    };
  }
  function A() {
    var N, ie;
    const J = (N = l ?? e.reference) != null ? N : n.value;
    return tn(J) ? (ie = n.value) == null ? void 0 : ie.querySelector(J) : J;
  }
  function B(N) {
    d = N;
  }
  function T(N) {
    f(), l = N, c();
  }
  function D(N) {
    const { closeOnKeyEscape: ie = !1 } = e;
    N.key === "Escape" && ie && t.value && (Ae(N), z());
  }
  function U() {
    i.setOptions(M());
  }
  function F() {
    e.disabled || (t.value = !0, k(e["onUpdate:show"], !0));
  }
  function z() {
    d && (t.value = !1, k(e["onUpdate:show"], !1));
  }
  return {
    show: t,
    popover: r,
    zIndex: a,
    host: n,
    referenceSize: o,
    handlePopoverClose: O,
    handlePopoverMouseenter: $,
    handlePopoverMouseleave: C,
    handleClosed: I,
    setReference: T,
    setAllowClose: B,
    resize: U,
    open: F,
    close: z
  };
}
var { name: Sk, n: Ok, classes: Pk } = ne("menu");
function zk(e, n) {
  return g(), S("div", {
    ref: "host",
    class: p(e.classes(e.n(), e.n("$--box")))
  }, [L(e.$slots, "default"), (g(), ke(cr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [X(en, {
    name: e.n(),
    onAfterEnter: e.onOpened,
    onAfterLeave: e.handleClosed,
    persisted: ""
  }, {
    default: ve(() => [Me(V("div", {
      ref: "popover",
      style: q({
        zIndex: e.zIndex,
        width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.referenceSize.width)) : void 0
      }),
      class: p(e.classes(e.n("menu"), e.n("$--box"), e.popoverClass, [e.defaultStyle, e.n("--menu-background-color")], [e.defaultStyle, e.formatElevation(e.elevation, 3)])),
      onClick: n[0] || (n[0] = Fn(() => {
      }, ["stop"])),
      onMouseenter: n[1] || (n[1] = (...r) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...r)),
      onMouseleave: n[2] || (n[2] = (...r) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...r))
    }, [L(e.$slots, "menu")], 38), [[Jn, e.show]])]),
    _: 3
  }, 8, [
    "name",
    "onAfterEnter",
    "onAfterLeave"
  ])], 8, ["to", "disabled"]))], 2);
}
var np = ee({
  name: Sk,
  props: bu,
  setup(e) {
    const { disabled: n } = xr(), { popover: r, host: o, referenceSize: t, show: a, zIndex: i, handlePopoverMouseenter: l, handlePopoverMouseleave: s, handlePopoverClose: u, handleClosed: d, setAllowClose: c, open: f, close: v, resize: m, setReference: h } = ep(e);
    function w() {
      c(!0);
    }
    return {
      popover: r,
      host: o,
      referenceSize: t,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      allowClose: w,
      formatElevation: vn,
      toSizeUnit: Te,
      n: Ok,
      classes: Pk,
      handlePopoverMouseenter: l,
      handlePopoverMouseleave: s,
      handlePopoverClose: u,
      handleClosed: d,
      resize: m,
      open: f,
      close: v,
      setReference: h
    };
  }
});
np.render = zk;
var ut = np;
ae(ut);
de(ut, bu);
var OB = ut, jo = ut;
function rp(e) {
  const { multiple: n, modelValue: r, optionProviders: o, optionProvidersLength: t, optionIsIndeterminate: a } = e, i = y(""), l = y([]);
  pe(r, f, { deep: !0 }), pe(t, f);
  function s() {
    const v = n(), m = r();
    v && (l.value = m.map(u)), !v && !Xn(m) && (i.value = u(m)), !v && Xn(m) && (i.value = "");
  }
  function u(v) {
    var m;
    const h = o();
    let w = h.find(({ value: $ }) => $.value === v);
    return w || (w = h.find(({ label: $ }) => $.value === v)), (m = w?.label.value) != null ? m : "";
  }
  function d({ value: v, label: m }) {
    var h;
    return (h = v.value) != null ? h : m.value;
  }
  function c(v) {
    const m = n(), h = o();
    return m ? h.filter(({ selected: w }) => w.value).map(d) : d(v);
  }
  function f() {
    const v = n(), m = r(), h = o();
    v ? h.forEach((w) => w.sync(m.includes(d(w)), a ? a(w) : void 0)) : h.forEach((w) => w.sync(m === d(w))), s();
  }
  return {
    label: i,
    labels: l,
    getOptionProviderKey: d,
    computeLabel: s,
    getSelectedValue: c
  };
}
var Tk = Object.defineProperty, Ek = Object.defineProperties, Ik = Object.getOwnPropertyDescriptors, zd = Object.getOwnPropertySymbols, Bk = Object.prototype.hasOwnProperty, Dk = Object.prototype.propertyIsEnumerable, Td = (e, n, r) => n in e ? Tk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Mk = (e, n) => {
  for (var r in n || (n = {})) Bk.call(n, r) && Td(e, r, n[r]);
  if (zd)
    for (var r of zd(n)) Dk.call(n, r) && Td(e, r, n[r]);
  return e;
}, Ak = (e, n) => Ek(e, Ik(n)), ea = Ak(Mk({
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
  "onUpdate:modelValue": R(),
  onSelect: R()
}, Be(bu, [
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
])), { onKeyEscape: R() }), Nk = Object.defineProperty, Ed = Object.getOwnPropertySymbols, Vk = Object.prototype.hasOwnProperty, Rk = Object.prototype.propertyIsEnumerable, Id = (e, n, r) => n in e ? Nk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Lk = (e, n) => {
  for (var r in n || (n = {})) Vk.call(n, r) && Id(e, r, n[r]);
  if (Ed)
    for (var r of Ed(n)) Rk.call(n, r) && Id(e, r, n[r]);
  return e;
}, Fk = (e, n, r) => new Promise((o, t) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: Uk, n: Hk } = ne("menu-children"), Yk = { ref: "menuOptions" };
function jk(e, n) {
  const r = x("var-menu-option"), o = x("var-menu-children"), t = x("var-menu");
  return g(), ke(t, {
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
  }, Xr({
    default: ve(() => [X(r, {
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
    fn: ve(() => [V("div", Yk, [(g(!0), S(De, null, Ke(e.options, (a) => (g(), S(De, { key: a[e.valueKey] }, [a[e.childrenKey] ? (g(), ke(o, {
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
    ])) : (g(), ke(r, {
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
var op = ee({
  name: Uk,
  components: {
    VarMenu: ut,
    VarMenuOption: st
  },
  props: Lk({
    parentShow: Boolean,
    disabled: Boolean,
    option: {
      type: Object,
      required: !0
    },
    highlightOptions: Be(ea, "options"),
    onKeyArrowX: R(),
    onKeyArrowRightOpen: R(),
    onMouseenter: R()
  }, Be(ea, [
    "options",
    "valueKey",
    "labelKey",
    "childrenKey"
  ])),
  setup(e) {
    const n = y(!1), r = y(), o = y(), t = y(), a = y();
    pe(() => e.parentShow, (f) => {
      f || (n.value = !1);
    }, { immediate: !0 });
    function i(f) {
      return Fk(this, null, function* () {
        var v;
        k(e.onKeyArrowX, f), f === "ArrowRight" && (k(e.onKeyArrowRightOpen), (v = r.value) == null || v.open(), yield Tr(), mu(r.value.$el, t.value, "ArrowDown"));
      });
    }
    function l(f) {
      var v;
      f === "ArrowLeft" && (u(), s(), (v = o.value) == null || v.$el.focus());
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
      (v = a.value) == null || v.forEach((m) => {
        if (m.allowClose(), f == null) {
          m.close();
          return;
        }
        m.option.value !== f.value && m.close();
      });
    }
    function c() {
      k(e.onMouseenter);
    }
    return {
      show: n,
      menu: r,
      trigger: o,
      menuOptions: t,
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
op.render = jk;
var Wk = op, Kk = Object.defineProperty, qk = Object.defineProperties, Xk = Object.getOwnPropertyDescriptors, Bd = Object.getOwnPropertySymbols, Gk = Object.prototype.hasOwnProperty, Zk = Object.prototype.propertyIsEnumerable, Dd = (e, n, r) => n in e ? Kk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Jk = (e, n) => {
  for (var r in n || (n = {})) Gk.call(n, r) && Dd(e, r, n[r]);
  if (Bd)
    for (var r of Bd(n)) Zk.call(n, r) && Dd(e, r, n[r]);
  return e;
}, Qk = (e, n) => qk(e, Xk(n)), { name: xk, n: _k, classes: e$ } = ne("menu-select");
function n$(e, n) {
  const r = x("var-menu-children"), o = x("var-menu-option"), t = x("var-menu");
  return g(), ke(t, {
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
    menu: ve(() => [V("div", {
      ref: "menuOptionsRef",
      class: p(e.classes(e.n("menu"), e.formatElevation(e.elevation, 3), [e.scrollable, e.n("--scrollable")]))
    }, [(g(!0), S(De, null, Ke(e.options, (a) => (g(), S(De, { key: a[e.valueKey] }, [a[e.childrenKey] ? (g(), ke(r, {
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
    ])) : (g(), ke(o, {
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
    ]))], 64))), 128)), L(e.$slots, "options")], 2)]),
    default: ve(() => [L(e.$slots, "default")]),
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
var tp = ee({
  name: xk,
  components: {
    VarMenu: jo,
    VarMenuOption: lo,
    VarMenuChildren: Wk
  },
  props: ea,
  setup(e) {
    const n = Pn(e, "show"), r = y(), o = y(), t = y(), a = E(() => $(e.options)), { menuOptions: i, length: l, bindMenuOptions: s } = sw(), { computeLabel: u, getSelectedValue: d, getOptionProviderKey: c } = rp({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => i,
      optionProvidersLength: () => l.value,
      optionIsIndeterminate(T) {
        var D;
        const U = v(T.value.value);
        if (!U) return !1;
        const F = ((D = U._children) != null ? D : []).filter((N) => !N.disabled), z = F.filter((N) => e.modelValue.includes(N.value));
        return z.length > 0 && z.length < F.length;
      }
    }), f = E(() => {
      const { multiple: T, modelValue: D } = e;
      if (T) return [];
      const U = a.value.find((N) => N.value === D), F = [];
      let z = U?._parent;
      for (; z; )
        F.push(z), z = z._parent;
      return F;
    });
    s({
      size: E(() => e.size),
      multiple: E(() => e.multiple),
      computeLabel: u,
      onSelect: C
    }), Ye(() => window, "keydown", P);
    function v(T) {
      return a.value.find((D) => D.value === T);
    }
    function m(T) {
      return i.find((D) => D.value.value === T);
    }
    function h(T) {
      return T[e.childrenKey];
    }
    function w(T) {
      const D = [];
      U(T);
      function U(F) {
        F.forEach((z) => {
          D.push(z);
          const N = h(z);
          N && U(N);
        });
      }
      return D;
    }
    function $(T) {
      function D(U, F) {
        return U.map((z) => {
          z = Qk(Jk({}, z), { _rawOption: z }), F && (z._parent = F);
          const N = h(z);
          if (N) {
            const ie = D(N, z);
            z[e.childrenKey] = ie, z._children = w(ie);
          }
          return z;
        });
      }
      return w(D(T));
    }
    function C(T) {
      var D, U;
      const { multiple: F, closeOnSelect: z } = e, { value: N, label: ie, selected: J, disabled: oe, ripple: ze } = T, te = v(N.value);
      if (te) {
        const se = ((D = te._children) != null ? D : []).filter((he) => !he.disabled).map((he) => he.value);
        F && J.value && (i.forEach((he) => {
          se.includes(he.value.value) && he.sync(!0, !1);
        }), b(te)), F && !J.value && (i.forEach((he) => {
          se.includes(he.value.value) && he.sync(!1, !1);
        }), b(te));
      }
      const W = d(T), Z = (U = te?._rawOption) != null ? U : {
        value: N.value,
        label: ie.value,
        disabled: oe.value,
        ripple: ze.value
      };
      k(e.onSelect, c(T), Z), k(e["onUpdate:modelValue"], W), !F && z && (r.value.$el.focus(), M());
    }
    function b(T) {
      let D = T._parent;
      for (; D; ) {
        const U = m(D.value), F = h(D).filter((ie) => !ie.disabled), z = F.every((ie) => !m(ie.value).selected.value), N = F.every((ie) => m(ie.value).selected.value);
        z ? U.sync(!1, !1) : N ? U.sync(!0, !1) : U.sync(!1, !0), D = D._parent;
      }
    }
    function P(T) {
      if (e.disabled || !n.value) return;
      const { key: D } = T;
      if ([
        "Escape",
        "ArrowDown",
        "ArrowUp"
      ].includes(D) && Ae(T), D === "Escape") {
        r.value.$el.focus(), M(), k(e.onKeyEscape);
        return;
      }
      (D === "ArrowDown" || D === "ArrowUp") && mu(r.value.$el, o.value, D, (U, F, z) => z ? !0 : O(U) === O(F));
    }
    function O(T) {
      var D, U;
      if (T.classList.contains("var-menu-option--children-trigger")) return (D = T.parentNode) == null ? void 0 : D.parentNode;
      if (T.classList.contains("var-checkbox")) {
        const F = (U = T.parentNode) == null ? void 0 : U.parentNode;
        if (F) return O(F);
      }
      return T.parentNode;
    }
    function I(T) {
      var D;
      (D = t.value) == null || D.forEach((U) => {
        if (U.allowClose(), T == null) {
          U.close();
          return;
        }
        U.option.value !== T.value && U.close();
      });
    }
    function Y() {
      var T;
      (T = r.value) == null || T.open();
    }
    function M() {
      var T;
      (T = r.value) == null || T.close();
    }
    function A() {
      var T;
      (T = r.value) == null || T.resize();
    }
    function B(T) {
      var D;
      (D = r.value) == null || D.setReference(T);
    }
    return {
      show: n,
      menu: r,
      menuOptionsRef: o,
      menuChildren: t,
      highlightOptions: f,
      n: _k,
      classes: e$,
      allowChildrenClose: I,
      formatElevation: vn,
      open: Y,
      close: M,
      resize: A,
      setReference: B
    };
  }
});
tp.render = n$;
var Va = tp;
ae(Va);
de(Va, ea);
var PB = Va, Wo = Va, r$ = Object.defineProperty, Md = Object.getOwnPropertySymbols, o$ = Object.prototype.hasOwnProperty, t$ = Object.prototype.propertyIsEnumerable, Ad = (e, n, r) => n in e ? r$(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, a$ = (e, n) => {
  for (var r in n || (n = {})) o$.call(n, r) && Ad(e, r, n[r]);
  if (Md)
    for (var r of Md(n)) t$.call(n, r) && Ad(e, r, n[r]);
  return e;
}, ap = a$({
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
  onFocus: R(),
  onBlur: R(),
  onInput: R(),
  onChange: R(),
  onClear: R(),
  onClick: R(),
  "onUpdate:modelValue": R()
}, Be(gu, [
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
])), Nd = (e, n, r) => new Promise((o, t) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: i$, n: l$ } = ne("auto-complete"), s$ = ["tabindex"];
function u$(e, n) {
  const r = x("var-input"), o = x("var-menu-option"), t = x("var-menu-select"), a = x("var-form-details");
  return g(), S("div", {
    ref: "root",
    class: p(e.n()),
    tabindex: e.tabindex == null ? e.disabled || e.formDisabled ? void 0 : "0" : e.tabindex,
    onFocusin: n[2] || (n[2] = (...i) => e.focus && e.focus(...i)),
    onClick: n[3] || (n[3] = (...i) => e.handleClick && e.handleClick(...i))
  }, [X(t, {
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
    options: ve(() => [V("div", { class: p(e.n("options")) }, [(g(!0), S(De, null, Ke(e.viewOptions, (i) => (g(), ke(o, {
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
    default: ve(() => [X(r, je({ ref: "input" }, {
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
    }), Xr({ _: 2 }, [
      e.$slots["prepend-icon"] ? {
        name: "prepend-icon",
        fn: ve(() => [L(e.$slots, "prepend-icon")]),
        key: "0"
      } : void 0,
      e.$slots["append-icon"] ? {
        name: "append-icon",
        fn: ve(() => [L(e.$slots, "append-icon")]),
        key: "1"
      } : void 0,
      e.$slots["clear-icon"] ? {
        name: "clear-icon",
        fn: ve(({ clear: i }) => [L(e.$slots, "clear-icon", { clear: i })]),
        key: "2"
      } : void 0,
      e.$slots["extra-message"] ? {
        name: "extra-message",
        fn: ve(() => [L(e.$slots, "extra-message")]),
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
  ]), X(a, {
    "error-message": e.errorMessage,
    "extra-message": e.maxlengthText
  }, null, 8, ["error-message", "extra-message"])], 42, s$);
}
var ip = ee({
  name: i$,
  components: {
    VarInput: Uo,
    VarMenuSelect: Wo,
    VarMenuOption: lo,
    VarFormDetails: Bn
  },
  props: ap,
  setup(e) {
    const n = y(), r = y(), o = y(!1), t = Pn(e, "modelValue"), a = y([]), i = y(!1), l = E(() => {
      const { maxlength: z } = e;
      return z ? Xn(t.value) ? `0 / ${z}` : `${String(t.value).length}/${z}` : "";
    }), { errorMessage: s, validateWithTrigger: u, validate: d, resetValidation: c } = jn(), { bindForm: f, form: v } = Wn();
    let m = !1;
    const h = {
      reset: w,
      resetValidation: c,
      validate: $
    };
    _f(() => n.value, "click", () => {
      if (m) {
        m = !1;
        return;
      }
      b();
    }), pe(() => [e.options, o.value], Y), k(f, h), Ye(() => window, "keydown", I);
    function w() {
      k(e["onUpdate:modelValue"], ""), c();
    }
    function $() {
      return d(e.rules, e.modelValue);
    }
    function C() {
      o.value || e.disabled || v?.disabled.value || (o.value = !0, r.value.focus(), k(e.onFocus), O("onFocus"));
    }
    function b() {
      o.value && (o.value = !1, i.value = !1, r.value.blur(), k(e.onBlur), O("onBlur"));
    }
    function P() {
      i.value || b();
    }
    function O(z) {
      Ve(() => {
        const { validateTrigger: N, rules: ie, modelValue: J } = e;
        u(N, z, ie, J);
      });
    }
    function I(z) {
      return Nd(this, null, function* () {
        var N;
        if (v?.disabled.value || v?.readonly.value || e.disabled || e.readonly || !o.value || !i.value) return;
        const { key: ie } = z;
        if (ie === "Tab") {
          Ae(z), n.value.focus(), i.value = !1;
          return;
        }
        if (![
          "ArrowUp",
          "ArrowDown",
          "Enter"
        ].includes(ie)) {
          r.value.focus();
          return;
        }
        ie === "Enter" && (yield Tr(), (N = r.value) == null || N.focus());
      });
    }
    function Y() {
      o.value && (i.value = F(t.value)), i.value && (a.value = e.options);
    }
    function M(z, N) {
      Y(), k(e.onInput, z, N), O("onInput");
    }
    function A() {
      m = !0, Y(), k(e.onClear, t.value), O("onClear");
    }
    function B(z) {
      e.disabled || v?.disabled.value || (k(e.onClick, z), O("onClick"));
    }
    function T(z) {
      k(e.onChange, z), O("onChange");
    }
    function D(z) {
      return Nd(this, null, function* () {
        var N;
        e.maxlength != null && (z = z.slice(0, H(e.maxlength))), z !== t.value && (t.value = z, k(e.onChange, z), O("onChange")), yield Tr(), (N = r.value) == null || N.focus();
      });
    }
    function U() {
      r.value.focus();
    }
    function F(z) {
      return e.disabled || e.readonly || v?.disabled.value || v?.readonly.value ? !1 : e.options.length > 0 && (e.getShow != null ? e.getShow(z) : z.length > 0);
    }
    return {
      root: n,
      input: r,
      value: t,
      isShowMenuSelect: i,
      viewOptions: a,
      isFocusing: o,
      formDisabled: v?.disabled,
      formReadonly: v?.readonly,
      errorMessage: s,
      maxlengthText: l,
      n: l$,
      handleInput: M,
      handleClear: A,
      handleClick: B,
      handleChange: T,
      handleBlur: P,
      handleKeyEscape: U,
      handleAutoComplete: D,
      reset: w,
      validate: $,
      resetValidation: c,
      blur: b,
      focus: C
    };
  }
});
ip.render = u$;
var Ra = ip;
ae(Ra);
de(Ra, ap);
var zB = Ra, Il = Ra, Vd = (e) => tn(e) ? e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp|ico)$/i.test(e) : !1, Rd = (e) => tn(e) ? e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e) : !1, d$ = (e) => {
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
      this.has(r) && Br(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Bl = (e) => e, Ld = (e) => e ** 3, lp = (e) => e < 0.5 ? Ld(e * 2) / 2 : 1 - Ld((1 - e) * 2) / 2, Jr = (e, n, r = "") => {
  if (e === void 0 && (e = ""), e.length >= n) return e;
  const o = n - e.length, t = Math.floor(o / r.length);
  return r.repeat(t) + r.slice(0, o % r.length) + e;
}, c$ = Object.defineProperty, Fd = Object.getOwnPropertySymbols, f$ = Object.prototype.hasOwnProperty, v$ = Object.prototype.propertyIsEnumerable, Ud = (e, n, r) => n in e ? c$(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, p$ = (e, n) => {
  for (var r in n || (n = {})) f$.call(n, r) && Ud(e, r, n[r]);
  if (Fd)
    for (var r of Fd(n)) v$.call(n, r) && Ud(e, r, n[r]);
  return e;
}, La = (e, n, r) => new Promise((o, t) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), m$ = "background-image", h$ = "lazy-loading", g$ = "lazy-error", Hd = "lazy-attempt", b$ = [
  "scroll",
  "wheel",
  "mousewheel",
  "resize",
  "animationend",
  "transitionend",
  "touchmove"
], Dl = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", co = [], na = [], sp = d$(100), mn = {
  loading: Dl,
  error: Dl,
  attempt: 3,
  throttleWait: 300,
  events: b$
}, Su = ya(dt, mn.throttleWait);
function Fa(e, n) {
  e._lazy.arg === m$ ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function y$(e) {
  e._lazy.loading && Fa(e, e._lazy.loading), dt();
}
function w$(e) {
  e._lazy.error && Fa(e, e._lazy.error), e._lazy.state = "error", Pu(e), dt();
}
function up(e, n) {
  Fa(e, n), e._lazy.state = "success", Pu(e), dt();
}
function k$(e) {
  var n;
  na.includes(e) || (na.push(e), (n = mn.events) == null || n.forEach((r) => {
    e.addEventListener(r, Su, { passive: !0 });
  }));
}
function $$() {
  na.forEach((e) => {
    var n;
    (n = mn.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Su);
    });
  }), na.length = 0;
}
function C$(e, n) {
  var r, o;
  const t = {
    loading: (r = e.getAttribute(h$)) != null ? r : mn.loading,
    error: (o = e.getAttribute(g$)) != null ? o : mn.error,
    attempt: e.getAttribute(Hd) ? Number(e.getAttribute(Hd)) : mn.attempt
  };
  e._lazy = p$({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), Fa(e, Dl), k(mn.filter, e._lazy);
}
function S$(e, n) {
  const r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, sp.add(n), up(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? w$(e) : dp(e);
  });
}
function dp(e) {
  if (e._lazy.attemptLock) return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (sp.has(n)) {
    up(e, n), e._lazy.attemptLock = !1;
    return;
  }
  y$(e), S$(e, n);
}
function Ou(e) {
  return La(this, null, function* () {
    yield Sn(), qf(e) && dp(e);
  });
}
function dt() {
  co.forEach((e) => Ou(e));
}
function O$(e) {
  return La(this, null, function* () {
    !co.includes(e) && co.push(e), Ay(e).forEach(k$), yield Ou(e);
  });
}
function Pu(e) {
  Br(co, e), co.length === 0 && $$();
}
function P$(e, n) {
  const { src: r, arg: o } = e._lazy;
  return r !== n.value || o !== n.arg;
}
function cp(e, n) {
  return La(this, null, function* () {
    C$(e, n), yield O$(e);
  });
}
function z$(e, n) {
  return La(this, null, function* () {
    if (!P$(e, n)) {
      co.includes(e) && (yield Ou(e));
      return;
    }
    yield cp(e, n);
  });
}
function T$(e = {}) {
  const { events: n, loading: r, error: o, attempt: t, throttleWait: a, filter: i } = e;
  mn.events = n ?? mn.events, mn.loading = r ?? mn.loading, mn.error = o ?? mn.error, mn.attempt = t ?? mn.attempt, mn.throttleWait = a ?? mn.throttleWait, mn.filter = i;
}
var fp = {
  mounted: cp,
  unmounted: Pu,
  updated: z$,
  install(e, n) {
    T$(n), Su = ya(dt, mn.throttleWait), e.directive("lazy", this);
  }
}, TB = fp, Ko = fp, vp = {
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
  onClick: R(),
  onLoad: R(),
  onError: R()
}, E$ = (e) => [
  "mini",
  "small",
  "normal",
  "large"
].includes(e), { name: I$, n: B$, classes: D$ } = ne("avatar"), M$ = [
  "src",
  "alt",
  "lazy-loading",
  "lazy-error"
], A$ = ["src", "alt"];
function N$(e, n) {
  const r = We("lazy");
  return g(), S("div", {
    ref: "avatarElement",
    class: p(e.classes(e.n(), e.n("$--box"), [e.isInternalSize(e.size), e.n(`--${e.size}`)], [e.round, e.n("--round")], [e.bordered, e.n("--bordered")], [e.hoverable, e.n("--hoverable")])),
    style: q({
      width: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
      height: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
      borderColor: e.borderColor,
      backgroundColor: e.color
    }),
    onClick: n[3] || (n[3] = (...o) => e.handleClick && e.handleClick(...o))
  }, [e.src ? (g(), S(De, { key: 0 }, [e.lazy ? Me((g(), S("img", {
    key: 0,
    role: "img",
    class: p(e.n("image")),
    src: e.src,
    alt: e.alt,
    style: q({ objectFit: e.fit }),
    "lazy-loading": e.loading,
    "lazy-error": e.error,
    onLoad: n[0] || (n[0] = (...o) => e.handleLoad && e.handleLoad(...o))
  }, null, 46, M$)), [[r, e.src]]) : (g(), S("img", {
    key: 1,
    role: "img",
    class: p(e.n("image")),
    src: e.src,
    alt: e.alt,
    style: q({ objectFit: e.fit }),
    onLoad: n[1] || (n[1] = (...o) => e.handleLoad && e.handleLoad(...o)),
    onError: n[2] || (n[2] = (...o) => e.handleError && e.handleError(...o))
  }, null, 46, A$))], 64)) : (g(), S("div", {
    key: 1,
    ref: "textElement",
    class: p(e.n("text")),
    style: q({ transform: `scale(${e.scale})` })
  }, [L(e.$slots, "default")], 6))], 6);
}
var pp = ee({
  name: I$,
  directives: { Lazy: Ko },
  props: vp,
  setup(e) {
    const n = y(null), r = y(null), o = y(1);
    bn(t), et(t);
    function t() {
      if (!n.value || !r.value) {
        o.value = 1;
        return;
      }
      const s = n.value.offsetWidth, u = r.value.offsetWidth;
      s > u ? o.value = 1 : o.value = s / u;
    }
    function a(s) {
      const u = s.currentTarget, { lazy: d, onLoad: c, onError: f } = e;
      d ? (u._lazy.state === "success" && k(c, s), u._lazy.state === "error" && k(f, s)) : k(c, s);
    }
    function i(s) {
      k(e.onError, s);
    }
    function l(s) {
      k(e.onClick, s);
    }
    return {
      avatarElement: n,
      textElement: r,
      scale: o,
      n: B$,
      classes: D$,
      isInternalSize: E$,
      toSizeUnit: Te,
      handleLoad: a,
      handleError: i,
      handleClick: l
    };
  }
});
pp.render = N$;
var Ua = pp;
ae(Ua);
de(Ua, vp);
var EB = Ua, Ml = Ua, mp = {
  offset: [Number, String],
  vertical: Boolean
}, { name: V$, n: R$, classes: L$ } = ne("avatar-group");
function F$(e, n) {
  return g(), S("div", {
    class: p(e.classes(e.n(), [
      e.vertical,
      e.n("--column"),
      e.n("--row")
    ])),
    style: q(e.rootStyles)
  }, [L(e.$slots, "default")], 6);
}
var hp = ee({
  name: V$,
  props: mp,
  setup(e) {
    return {
      rootStyles: E(() => e.offset == null ? {} : { "--avatar-group-offset": Te(e.offset) }),
      n: R$,
      classes: L$
    };
  }
});
hp.render = F$;
var Ha = hp;
ae(Ha);
de(Ha, mp);
var IB = Ha, Al = Ha, pr = {
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
}, { name: U$, n: H$, classes: Y$ } = ne("loading");
function j$(e, n) {
  return g(), S("div", { class: p(e.n()) }, [e.$slots.default ? (g(), S("div", {
    key: 0,
    class: p(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
  }, [L(e.$slots, "default"), e.loading ? (g(), S("div", {
    key: 0,
    class: p(e.n("content-mask"))
  }, null, 2)) : K("v-if", !0)], 2)) : K("v-if", !0), e.isShow ? (g(), S("div", {
    key: 1,
    class: p(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
  }, [
    e.type === "circle" ? (g(), S("div", {
      key: 0,
      class: p(e.n("circle"))
    }, [V("span", {
      class: p(e.classes(e.n("circle-block"), e.n(`circle-block--${e.size}`))),
      style: q({
        width: e.multiplySizeUnit(e.radius, 2),
        height: e.multiplySizeUnit(e.radius, 2),
        color: e.color
      })
    }, [...n[0] || (n[0] = [V("svg", { viewBox: "25 25 50 50" }, [V("circle", {
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none"
    })], -1)])], 6)], 2)) : K("v-if", !0),
    (g(!0), S(De, null, Ke(e.loadingTypeDict, (r, o) => (g(), S(De, { key: o }, [e.type === o ? (g(), S("div", {
      key: 0,
      class: p(e.classes(e.n(o), e.n(`${o}--${e.size}`)))
    }, [(g(!0), S(De, null, Ke(r, (t) => (g(), S("div", {
      key: t + o,
      style: q({ backgroundColor: e.color }),
      class: p(e.classes(e.n(`${o}-item`), e.n(`${o}-item--${e.size}`)))
    }, null, 6))), 128))], 2)) : K("v-if", !0)], 64))), 128)),
    e.$slots.description || e.description ? (g(), S("div", {
      key: 1,
      class: p(e.classes(e.n("description"), e.n(`description--${e.size}`))),
      style: q({ color: e.color })
    }, [L(e.$slots, "description", {}, () => [Ie(ue(e.description), 1)])], 6)) : K("v-if", !0)
  ], 2)) : K("v-if", !0)], 2);
}
var gp = ee({
  name: U$,
  props: pr,
  setup(e, { slots: n }) {
    return {
      loadingTypeDict: {
        wave: 5,
        cube: 4,
        rect: 8,
        disappear: 3
      },
      isShow: E(() => k(n.default) ? e.loading : !0),
      n: H$,
      classes: Y$,
      multiplySizeUnit: En
    };
  }
});
gp.render = j$;
var Ya = gp;
ae(Ya);
de(Ya, pr);
var BB = Ya, fo = Ya, W$ = Object.defineProperty, K$ = Object.defineProperties, q$ = Object.getOwnPropertyDescriptors, Yd = Object.getOwnPropertySymbols, X$ = Object.prototype.hasOwnProperty, G$ = Object.prototype.propertyIsEnumerable, jd = (e, n, r) => n in e ? W$(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Wd = (e, n) => {
  for (var r in n || (n = {})) X$.call(n, r) && jd(e, r, n[r]);
  if (Yd)
    for (var r of Yd(n)) G$.call(n, r) && jd(e, r, n[r]);
  return e;
}, Kd = (e, n) => K$(e, q$(n)), bp = {
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
    type: [
      Boolean,
      Number,
      String
    ],
    default: !0
  },
  loadingRadius: [Number, String],
  loadingType: Be(pr, "type"),
  loadingSize: Kd(Wd({}, Be(pr, "size")), { default: void 0 }),
  loadingColor: Kd(Wd({}, Be(pr, "color")), { default: "currentColor" }),
  onClick: R(),
  onTouchstart: R()
}, yp = /* @__PURE__ */ Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function Z$() {
  const { bindChildren: e, childProviders: n, length: r } = wn(yp);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function J$() {
  const { bindParent: e, parentProvider: n, index: r } = yn(yp);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var { name: Q$, n: x$, classes: _$ } = ne("button"), eC = [
  "tabindex",
  "type",
  "disabled"
];
function nC(e, n) {
  const r = x("var-loading"), o = x("var-hover-overlay"), t = We("ripple"), a = We("hover");
  return Me((g(), S("button", {
    class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.states.size}`), [
      e.block,
      `${e.n("$--flex")} ${e.n("--block")}`,
      e.n("$--inline-flex")
    ], [!e.states.text, e.states.elevation], [!e.states.iconContainer && !e.states.text, e.n(`--${e.states.type}`)], [e.states.text, `${e.n("--text")} ${e.n(`--text-${e.states.type}`)}`], [e.states.iconContainer, e.n(`--icon-container-${e.states.type}`)], [e.round, e.n("--round")], [e.states.outline, e.n("--outline")], [e.loading || e.pending, e.n("--loading")], [e.disabled, e.n("--disabled")], [e.states.text && e.disabled, e.n("--text-disabled")])),
    tabindex: e.focusable ? void 0 : "-1",
    style: q({
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
    e.loading || e.pending ? (g(), ke(r, {
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
    ])) : K("v-if", !0),
    V("div", { class: p(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")])) }, [L(e.$slots, "default")], 2),
    X(o, {
      hovering: e.disabled || e.loading || e.pending ? !1 : e.hovering,
      focusing: e.disabled || e.loading || e.pending ? !1 : e.isFocusing
    }, null, 8, ["hovering", "focusing"])
  ], 46, eC)), [[t, { disabled: e.disabled || !e.ripple || e.loading || e.pending }], [
    a,
    e.handleHovering,
    "desktop"
  ]]);
}
var wp = ee({
  name: Q$,
  components: {
    VarLoading: fo,
    VarHoverOverlay: Hn
  },
  directives: {
    Ripple: sn,
    Hover: An
  },
  props: bp,
  setup(e) {
    const n = y(!1), r = y(!1), { buttonGroup: o } = J$(), { hovering: t, handleHovering: a } = rr(), i = E(() => {
      var c, f, v, m, h, w;
      if (!o) return {
        elevation: vn(e.elevation, 2),
        type: (c = e.type) != null ? c : "default",
        size: (f = e.size) != null ? f : "normal",
        color: e.color,
        text: e.text,
        textColor: e.textColor,
        outline: e.outline,
        iconContainer: e.iconContainer
      };
      const { type: $, size: C, color: b, textColor: P, mode: O } = o;
      return {
        elevation: "",
        type: (v = e.type) != null ? v : $.value,
        size: (m = e.size) != null ? m : C.value,
        color: (h = e.color) != null ? h : b.value,
        textColor: (w = e.textColor) != null ? w : P.value,
        text: O.value === "text" || O.value === "outline",
        outline: O.value === "outline",
        iconContainer: O.value === "icon-container"
      };
    });
    function l(c) {
      e.autoLoading && (r.value = !0, Promise.all(hr(c)).then(() => {
        r.value = !1;
      }).catch(() => {
        r.value = !1;
      }));
    }
    function s(c) {
      const { loading: f, disabled: v, onClick: m } = e;
      !m || f || v || r.value || l(k(m, c));
    }
    function u(c) {
      const { loading: f, disabled: v, onTouchstart: m } = e;
      !m || f || v || r.value || l(k(m, c));
    }
    function d() {
      e.focusable && (n.value = !0);
    }
    return {
      pending: r,
      states: i,
      hovering: t,
      isFocusing: n,
      n: x$,
      classes: _$,
      handleHovering: a,
      handleClick: s,
      handleTouchstart: u,
      handleFocus: d
    };
  }
});
wp.render = nC;
var ja = wp;
ae(ja);
de(ja, bp);
var DB = ja, Dn = ja, kp = {
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
  onClick: R()
}, { name: rC, n: oC, classes: tC } = ne("back-top");
function aC(e, n) {
  const r = x("var-icon"), o = x("var-button");
  return g(), ke(cr, {
    to: "body",
    disabled: e.disabled
  }, [V("div", je({
    ref: "backTopEl",
    class: e.classes(e.n(), [e.show, e.n("--active")]),
    style: {
      right: e.toSizeUnit(e.right),
      bottom: e.toSizeUnit(e.bottom)
    }
  }, e.$attrs, { onClick: n[0] || (n[0] = Fn((...t) => e.handleClick && e.handleClick(...t), ["stop"])) }), [L(e.$slots, "default", {}, () => [X(o, {
    elevation: e.elevation,
    type: "primary",
    "var-back-top-cover": ""
  }, {
    default: ve(() => [X(r, { name: "chevron-up" })]),
    _: 1
  }, 8, ["elevation"])])], 16)], 8, ["disabled"]);
}
var $p = ee({
  name: rC,
  components: {
    VarButton: Dn,
    VarIcon: Je
  },
  inheritAttrs: !1,
  props: kp,
  setup(e) {
    const n = y(!1), r = y(null), o = y(!0);
    let t;
    const a = ya(() => {
      i();
    }, 200);
    br(() => {
      s(), u(), i(), o.value = !1;
    }), Vr(u), go(d);
    function i() {
      n.value = Dr(t) >= rn(e.visibilityHeight);
    }
    function l(c) {
      k(e.onClick, c);
      const f = ba(t);
      Lo(t, {
        left: f,
        duration: e.duration,
        animation: lp
      });
    }
    function s() {
      t = e.target ? Ov(e.target, "BackTop") : Ar(r.value);
    }
    function u() {
      t.addEventListener("scroll", a);
    }
    function d() {
      t && t.removeEventListener("scroll", a);
    }
    return {
      disabled: o,
      show: n,
      backTopEl: r,
      toSizeUnit: Te,
      n: oC,
      classes: tC,
      handleClick: l
    };
  }
});
$p.render = aC;
var Wa = $p;
ae(Wa);
de(Wa, kp);
var MB = Wa, Nl = Wa, Cp = {
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
  icon: Be(ln, "name"),
  namespace: Be(ln, "namespace"),
  color: String,
  offsetX: {
    type: [String, Number],
    default: 0
  },
  offsetY: {
    type: [String, Number],
    default: 0
  }
}, iC = Object.defineProperty, qd = Object.getOwnPropertySymbols, lC = Object.prototype.hasOwnProperty, sC = Object.prototype.propertyIsEnumerable, Xd = (e, n, r) => n in e ? iC(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, uC = (e, n) => {
  for (var r in n || (n = {})) lC.call(n, r) && Xd(e, r, n[r]);
  if (qd)
    for (var r of qd(n)) sC.call(n, r) && Xd(e, r, n[r]);
  return e;
}, { name: dC, n: cC, classes: fC } = ne("badge"), vC = { key: 0 };
function pC(e, n) {
  const r = x("var-icon");
  return g(), S("div", { class: p(e.classes(e.n(), e.n("$--box"))) }, [L(e.$slots, "default"), X(en, {
    name: e.n("$-badge-fade"),
    persisted: ""
  }, {
    default: ve(() => [Me(V("span", je({
      class: e.classes(e.n("content"), e.n(`--${e.type}`), [
        e.$slots.default,
        e.n(`--${e.position}`),
        e.n("--offset")
      ], [e.dot, e.n("--dot")], [e.icon, e.n("--icon")]),
      style: uC({ background: e.color }, e.offsetStyle)
    }, e.$attrs), [e.icon ? (g(), ke(r, {
      key: 0,
      class: p(e.n("icon")),
      "var-badge-cover": "",
      name: e.icon,
      namespace: e.namespace
    }, null, 8, [
      "class",
      "name",
      "namespace"
    ])) : K("v-if", !0), L(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (g(), S("span", vC, ue(e.value), 1)) : K("v-if", !0)])], 16), [[Jn, !e.hidden]])]),
    _: 3
  }, 8, ["name"])], 2);
}
var Sp = ee({
  name: dC,
  components: { VarIcon: Je },
  inheritAttrs: !1,
  props: Cp,
  setup(e) {
    return {
      value: E(() => {
        const { value: n, maxValue: r } = e;
        return n != null && r != null && H(n) > H(r) ? `${r}+` : n;
      }),
      offsetStyle: E(() => ({
        "--badge-offset-y": Te(e.offsetY),
        "--badge-offset-x": Te(e.offsetX)
      })),
      n: cC,
      classes: fC
    };
  }
});
Sp.render = pC;
var Ka = Sp;
ae(Ka);
de(Ka, Cp);
var AB = Ka, ra = Ka, Op = {
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
  onChange: R(),
  onBeforeChange: R(),
  onFabClick: R(),
  "onUpdate:active": R()
}, Pp = /* @__PURE__ */ Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function mC() {
  const { childProviders: e, length: n, bindChildren: r } = wn(Pp);
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: r
  };
}
var hC = Object.defineProperty, Gd = Object.getOwnPropertySymbols, gC = Object.prototype.hasOwnProperty, bC = Object.prototype.propertyIsEnumerable, Zd = (e, n, r) => n in e ? hC(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Jd = (e, n) => {
  for (var r in n || (n = {})) gC.call(n, r) && Zd(e, r, n[r]);
  if (Gd)
    for (var r of Gd(n)) bC.call(n, r) && Zd(e, r, n[r]);
  return e;
}, { name: yC, n: wC, classes: kC } = ne("bottom-navigation"), { n: qa } = ne("bottom-navigation-item"), Qd = qa("--right-half-space"), xd = qa("--left-half-space"), _d = qa("--right-space"), $C = { type: "primary" };
function CC(e, n) {
  const r = x("var-button");
  return g(), S(De, null, [V("div", je({
    ref: "bottomNavigationDom",
    class: e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")], [e.variant, e.n("--variant")]),
    style: `z-index:${e.zIndex}`
  }, e.$attrs), [L(e.$slots, "default"), e.$slots.fab ? (g(), ke(r, je({
    key: 0,
    class: e.classes(e.n("fab"), [
      e.length % 2,
      e.n("--fab-right"),
      e.n("--fab-center")
    ]),
    "var-bottom-navigation__fab": ""
  }, e.fabProps, { onClick: e.handleFabClick }), {
    default: ve(() => [L(e.$slots, "fab")]),
    _: 3
  }, 16, ["class", "onClick"])) : K("v-if", !0)], 16), e.fixed && e.placeholder ? (g(), S("div", {
    key: 0,
    class: p(e.n("placeholder")),
    style: q({ height: e.placeholderHeight })
  }, null, 6)) : K("v-if", !0)], 64);
}
var zp = ee({
  name: yC,
  components: { VarButton: Dn },
  props: Op,
  setup(e, { slots: n }) {
    const r = y(null), o = E(() => e.animated), t = E(() => e.active), a = E(() => e.activeColor), i = E(() => e.inactiveColor), l = E(() => e.variant), s = y(), u = y({}), { length: d, bottomNavigationItems: c, bindBottomNavigationItem: f } = mC();
    f({
      animated: o,
      active: t,
      activeColor: a,
      inactiveColor: i,
      variant: l,
      onToggle: $
    }), pe(() => d.value, v), pe(() => e.fabProps, (B) => {
      u.value = Jd(Jd({}, $C), B);
    }, {
      immediate: !0,
      deep: !0
    }), tr(A), bn(() => {
      A(), n.fab && O(d.value);
    }), et(() => {
      P(), n.fab && O(d.value);
    });
    function v() {
      d.value === 0 || m() || h() || w();
    }
    function m() {
      return c.find(({ name: B }) => t.value === B.value);
    }
    function h() {
      return c.find(({ index: B }) => t.value === B.value);
    }
    function w() {
      zn(t.value) && (t.value < 0 ? k(e["onUpdate:active"], 0) : t.value > d.value - 1 && k(e["onUpdate:active"], d.value - 1));
    }
    function $(B) {
      t.value !== B && (e.onBeforeChange ? C(B) : b(B));
    }
    function C(B) {
      const T = hr(k(e.onBeforeChange, B));
      Promise.all(T).then((D) => {
        D.every(Boolean) && b(B);
      });
    }
    function b(B) {
      k(e["onUpdate:active"], B), k(e.onChange, B);
    }
    function P() {
      Y().forEach((B) => {
        B.classList.remove(Qd, xd, _d);
      });
    }
    function O(B) {
      const T = Y(), D = T.length, U = B % 2 === 0;
      T.forEach((F, z) => {
        I(U, F, z, D);
      });
    }
    function I(B, T, D, U) {
      const F = D === U - 1;
      if (!B && F) {
        T.classList.add(_d);
        return;
      }
      const z = D === U / 2 - 1, N = D === U / 2;
      z ? T.classList.add(Qd) : N && T.classList.add(xd);
    }
    function Y() {
      return Array.from(r.value.querySelectorAll(`.${qa()}`));
    }
    function M() {
      k(e.onFabClick);
    }
    function A() {
      if (!e.fixed || !e.placeholder) return;
      const { height: B } = on(r.value);
      s.value = Te(B);
    }
    return {
      length: d,
      bottomNavigationDom: r,
      fabProps: u,
      placeholderHeight: s,
      n: wC,
      classes: kC,
      handleFabClick: M
    };
  }
});
zp.render = CC;
var Xa = zp;
ae(Xa);
de(Xa, Op);
var NB = Xa, Vl = Xa, Tp = {
  name: String,
  label: String,
  icon: Be(ln, "name"),
  namespace: Be(ln, "namespace"),
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: R()
};
function SC() {
  const { parentProvider: e, index: n, bindParent: r } = yn(Pp);
  return Un(!!r, "BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: r
  };
}
var { name: OC, n: PC, classes: zC } = ne("bottom-navigation-item"), TC = {
  type: "danger",
  dot: !0
};
function EC(e, n) {
  const r = x("var-icon"), o = x("var-badge"), t = We("ripple");
  return Me((g(), S("button", {
    class: p(e.classes(e.n(), e.n("$--box"), [e.variant, e.n("--variant-padding")], [e.isActive && !e.variant, e.n("--active")], [e.animated, e.n("--animated")])),
    style: q({ color: e.isActive ? e.activeColor : e.inactiveColor }),
    onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
  }, [V("div", { class: p(e.classes(e.n("icon-container"), [e.variant, e.n("--variant-icon-container")], [e.isActive && e.variant, e.n("--variant-active")])) }, [e.badge ? (g(), ke(o, je({ key: 0 }, e.badgeProps, {
    class: e.n("badge"),
    "var-bottom-navigation-item-cover": ""
  }), {
    default: ve(() => [L(e.$slots, "icon", { active: e.isActive }, () => [e.icon ? (g(), ke(r, {
      key: 0,
      name: e.icon,
      namespace: e.namespace,
      class: p(e.n("icon")),
      "var-bottom-navigation-item-cover": ""
    }, null, 8, [
      "name",
      "namespace",
      "class"
    ])) : K("v-if", !0)])]),
    _: 3
  }, 16, ["class"])) : L(e.$slots, "icon", {
    key: 1,
    active: e.isActive
  }, () => [e.icon ? (g(), ke(r, {
    key: 0,
    name: e.icon,
    namespace: e.namespace,
    class: p(e.n("icon")),
    "var-bottom-navigation-item-cover": ""
  }, null, 8, [
    "name",
    "namespace",
    "class"
  ])) : K("v-if", !0)])], 2), V("span", { class: p(e.n("label")) }, [L(e.$slots, "default", {}, () => [Ie(ue(e.label), 1)])], 2)], 6)), [[t]]);
}
var Ep = ee({
  name: OC,
  components: {
    VarBadge: ra,
    VarIcon: Je
  },
  directives: { Ripple: sn },
  props: Tp,
  setup(e) {
    const n = E(() => e.name), r = E(() => [n.value, t.value].includes(s.value)), o = E(() => e.badge === !0 ? TC : e.badge), { index: t, bottomNavigation: a, bindBottomNavigation: i } = SC(), { animated: l, active: s, activeColor: u, inactiveColor: d, variant: c } = a;
    i({
      name: n,
      index: t
    });
    function f() {
      var v;
      const m = (v = n.value) != null ? v : t.value;
      k(e.onClick, m), k(a.onToggle, m);
    }
    return {
      animated: l,
      activeColor: u,
      inactiveColor: d,
      badgeProps: o,
      isActive: r,
      variant: c,
      n: PC,
      classes: zC,
      handleClick: f
    };
  }
});
Ep.render = EC;
var Ga = Ep;
ae(Ga);
de(Ga, Tp);
var VB = Ga, Rl = Ga, Ip = {
  separator: String,
  onClick: R()
}, Bp = /* @__PURE__ */ Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function IC() {
  const { childProviders: e, bindChildren: n, length: r } = wn(Bp);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function BC() {
  const { parentProvider: e, bindParent: n, index: r } = yn(Bp);
  return Un(!!n, "Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var { name: DC, n: MC, classes: AC } = ne("breadcrumb");
function NC(e, n) {
  return g(), S("div", { class: p(e.n()) }, [V("div", {
    class: p(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
    onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
  }, [L(e.$slots, "default")], 2), e.isLast ? K("v-if", !0) : L(e.$slots, "separator", { key: 0 }, () => {
    var r;
    return [V("div", {
      class: p(e.n("separator")),
      "aria-hidden": "true"
    }, ue((r = e.separator) != null ? r : e.parentSeparator), 3)];
  })], 2);
}
var Dp = ee({
  name: DC,
  props: Ip,
  setup(e) {
    const { index: n, breadcrumb: r, bindBreadcrumb: o } = BC(), t = E(() => n.value === r.length.value - 1), a = E(() => r.separator.value);
    o(null);
    function i(l) {
      t.value || k(e.onClick, l);
    }
    return {
      n: MC,
      classes: AC,
      isLast: t,
      parentSeparator: a,
      handleClick: i
    };
  }
});
Dp.render = NC;
var Za = Dp;
ae(Za);
de(Za, Ip);
var RB = Za, Ll = Za, Mp = { separator: {
  type: String,
  default: "/"
} }, { name: VC, n: RC } = ne("breadcrumbs");
function LC(e, n) {
  return g(), S("div", {
    class: p(e.n()),
    role: "navigation",
    "aria-label": "Breadcrumbs"
  }, [L(e.$slots, "default")], 2);
}
var Ap = ee({
  name: VC,
  props: Mp,
  setup(e) {
    const n = E(() => e.separator), { bindBreadcrumbList: r, length: o } = IC();
    return r({
      length: o,
      separator: n
    }), { n: RC };
  }
});
Ap.render = LC;
var Ja = Ap;
ae(Ja);
de(Ja, Mp);
var LB = Ja, Fl = Ja, Np = {
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
}, { name: FC, n: UC, classes: HC } = ne("button-group");
function YC(e, n) {
  return g(), S("div", { class: p(e.classes(e.n(), e.n("$--box"), [e.mode, `${e.n(`--mode-${e.mode}`)}`], [
    e.vertical,
    e.n("--vertical"),
    e.n("--horizontal")
  ], [e.mode === "normal", e.formatElevation(e.elevation, 2)])) }, [L(e.$slots, "default")], 2);
}
var Vp = ee({
  name: FC,
  props: Np,
  setup(e) {
    const { bindButtons: n } = Z$();
    return n({
      elevation: E(() => e.elevation),
      type: E(() => e.type),
      size: E(() => e.size),
      color: E(() => e.color),
      textColor: E(() => e.textColor),
      mode: E(() => e.mode)
    }), {
      n: UC,
      classes: HC,
      formatElevation: vn
    };
  }
});
Vp.render = YC;
var Qa = Vp;
ae(Qa);
de(Qa, Np);
var FB = Qa, Ul = Qa, Rp = {
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
    type: [
      Boolean,
      Number,
      String
    ],
    default: !0
  },
  ripple: Boolean,
  onClick: R(),
  "onUpdate:floating": R(),
  outline: Boolean
}, jC = (e, n, r) => new Promise((o, t) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: WC, n: KC, classes: qC } = ne("card"), XC = 500, GC = ["src", "alt"];
function ZC(e, n) {
  const r = x("var-icon"), o = x("var-button"), t = We("ripple");
  return Me((g(), S("div", {
    ref: "card",
    class: p(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.variant === "outlined" || e.outline, e.n("--outline")], [e.variant === "filled", e.n("--filled")], [e.variant === "standard" || e.outline, e.formatElevation(e.elevation, 1)])),
    style: q({ zIndex: e.floated ? e.zIndex : void 0 }),
    onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
  }, [V("div", {
    ref: "cardFloater",
    class: p(e.n("floater")),
    style: q({
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
    L(e.$slots, "image", {}, () => [e.src ? (g(), S("img", {
      key: 0,
      class: p(e.n("image")),
      style: q({
        objectFit: e.fit,
        height: e.toSizeUnit(e.imageHeight),
        width: e.toSizeUnit(e.imageWidth)
      }),
      src: e.src,
      alt: e.alt
    }, null, 14, GC)) : K("v-if", !0)]),
    V("div", { class: p(e.n("container")) }, [
      L(e.$slots, "title", { slotClass: e.n("title") }, () => [e.title ? (g(), S("div", {
        key: 0,
        class: p(e.n("title"))
      }, ue(e.title), 3)) : K("v-if", !0)]),
      L(e.$slots, "subtitle", { slotClass: e.n("subtitle") }, () => [e.subtitle ? (g(), S("div", {
        key: 0,
        class: p(e.n("subtitle"))
      }, ue(e.subtitle), 3)) : K("v-if", !0)]),
      e.$slots.default ? (g(), S("div", {
        key: 0,
        class: p(e.n("content"))
      }, [L(e.$slots, "default")], 2)) : K("v-if", !0),
      L(e.$slots, "description", { slotClass: e.n("description") }, () => [e.description ? (g(), S("div", {
        key: 0,
        class: p(e.n("description"))
      }, ue(e.description), 3)) : K("v-if", !0)]),
      e.$slots.extra ? (g(), S("div", {
        key: 1,
        class: p(e.n("footer"))
      }, [L(e.$slots, "extra")], 2)) : K("v-if", !0),
      e.$slots["floating-content"] && !e.isRow ? (g(), S("div", {
        key: 2,
        class: p(e.n("floating-content")),
        style: q({
          height: e.contentHeight,
          opacity: e.opacity,
          transition: `opacity ${e.floatingDuration * 2}ms`
        })
      }, [L(e.$slots, "floating-content")], 6)) : K("v-if", !0)
    ], 2),
    e.showFloatingButtons ? (g(), S("div", {
      key: 0,
      class: p(e.classes(e.n("floating-buttons"), e.n("$--box"))),
      style: q({
        zIndex: e.zIndex,
        opacity: e.opacity,
        transition: `opacity ${e.floatingDuration * 2}ms`
      })
    }, [L(e.$slots, "close-button", {}, () => [X(o, {
      "var-card-cover": "",
      class: p(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
      onClick: Fn(e.close, ["stop"])
    }, {
      default: ve(() => [X(r, {
        "var-card-cover": "",
        name: "window-close",
        class: p(e.n("close-button-icon"))
      }, null, 8, ["class"])]),
      _: 1
    }, 8, ["class", "onClick"])])], 6)) : K("v-if", !0)
  ], 6), V("div", {
    class: p(e.n("holder")),
    style: q({
      width: e.holderWidth,
      height: e.holderHeight
    })
  }, null, 6)], 6)), [[t, { disabled: !e.ripple || e.floater }]]);
}
var Lp = ee({
  name: WC,
  directives: { Ripple: sn },
  components: {
    VarIcon: Je,
    VarButton: Dn
  },
  props: Rp,
  setup(e) {
    const n = y(null), r = y(null), o = y("auto"), t = y("auto"), a = y("100%"), i = y("100%"), l = y("auto"), s = y("auto"), u = y(void 0), d = y("hidden"), c = y("0px"), f = y("0"), v = E(() => e.layout === "row"), m = y(!1), h = y(!1), { zIndex: w } = it(() => e.floating, 1);
    let $ = "auto", C = "auto", b = null;
    const P = y(null);
    at(() => e.floating, () => !v.value), pe(() => e.floating, (A) => {
      v.value || Ve(() => {
        A ? O() : I();
      });
    }, { immediate: !0 });
    function O() {
      clearTimeout(P.value), clearTimeout(b), P.value = null, P.value = setTimeout(() => jC(null, null, function* () {
        const { width: A, height: B, left: T, top: D } = on(n.value);
        o.value = Te(A), t.value = Te(B), a.value = o.value, i.value = t.value, l.value = Te(D), s.value = Te(T), u.value = "fixed", $ = l.value, C = s.value, m.value = !0, yield Sn(), l.value = "0", s.value = "0", a.value = "100vw", i.value = "100vh", c.value = "auto", f.value = "1", d.value = "auto", h.value = !0;
      }), e.ripple ? XC : 0);
    }
    function I() {
      clearTimeout(b), clearTimeout(P.value), P.value = null, a.value = o.value, i.value = t.value, l.value = $, s.value = C, c.value = "0px", f.value = "0", m.value = !1, b = setTimeout(() => {
        o.value = "auto", t.value = "auto", a.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", $ = "auto", C = "auto", d.value = "hidden", u.value = void 0, h.value = !1;
      }, e.floatingDuration);
    }
    function Y() {
      k(e["onUpdate:floating"], !1);
    }
    function M(A) {
      k(e.onClick, A);
    }
    return {
      card: n,
      cardFloater: r,
      holderWidth: o,
      holderHeight: t,
      floater: P,
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
      showFloatingButtons: m,
      floated: h,
      n: KC,
      classes: qC,
      toSizeUnit: Te,
      close: Y,
      formatElevation: vn,
      handleClick: M
    };
  }
});
Lp.render = ZC;
var xa = Lp;
ae(xa);
de(xa, Rp);
var UB = xa, Hl = xa, Fp = {
  title: String,
  icon: Be(ln, "name"),
  namespace: Be(ln, "namespace"),
  description: String,
  border: Boolean,
  borderOffset: [Number, String],
  iconClass: String,
  titleClass: String,
  descriptionClass: String,
  extraClass: String,
  ripple: Boolean,
  onClick: R()
}, { name: JC, n: QC, classes: xC } = ne("cell");
function _C(e, n) {
  const r = x("var-icon"), o = We("ripple");
  return Me((g(), S("div", {
    class: p(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
    style: q(e.borderOffsetStyles),
    onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
  }, [
    L(e.$slots, "icon", {}, () => [e.icon ? (g(), S("div", {
      key: 0,
      class: p(e.classes(e.n("icon"), e.iconClass))
    }, [X(r, {
      name: e.icon,
      namespace: e.namespace
    }, null, 8, ["name", "namespace"])], 2)) : K("v-if", !0)]),
    V("div", { class: p(e.n("content")) }, [L(e.$slots, "default", {}, () => [e.title ? (g(), S("div", {
      key: 0,
      class: p(e.classes(e.n("title"), e.titleClass))
    }, ue(e.title), 3)) : K("v-if", !0)]), L(e.$slots, "description", {}, () => [e.description ? (g(), S("div", {
      key: 0,
      class: p(e.classes(e.n("description"), e.descriptionClass))
    }, ue(e.description), 3)) : K("v-if", !0)])], 2),
    e.$slots.extra ? (g(), S("div", {
      key: 0,
      class: p(e.classes(e.n("extra"), e.extraClass))
    }, [L(e.$slots, "extra")], 2)) : K("v-if", !0)
  ], 6)), [[o, { disabled: !e.ripple }]]);
}
var Up = ee({
  name: JC,
  components: { VarIcon: Je },
  directives: { Ripple: sn },
  props: Fp,
  setup(e) {
    const n = E(() => e.borderOffset == null ? {} : {
      "--cell-border-left": Te(e.borderOffset),
      "--cell-border-right": Te(e.borderOffset)
    });
    function r(o) {
      k(e.onClick, o);
    }
    return {
      borderOffsetStyles: n,
      n: QC,
      classes: xC,
      toSizeUnit: Te,
      handleClick: r
    };
  }
});
Up.render = _C;
var _a = Up;
ae(_a);
de(_a, Fp);
var HB = _a, Yl = _a, Hp = {
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
  onChange: R(),
  "onUpdate:modelValue": R()
}, { name: eS, n: nS, classes: rS } = ne("checkbox-group");
function oS(e, n) {
  const r = x("maybe-v-node"), o = x("var-checkbox"), t = x("var-form-details");
  return g(), S("div", { class: p(e.n("wrap")) }, [V("div", { class: p(e.classes(e.n(), e.n(`--${e.direction}`))) }, [e.options.length ? (g(!0), S(De, { key: 0 }, Ke(e.options, (a) => (g(), ke(o, {
    key: a[e.valueKey],
    "checked-value": a[e.valueKey],
    disabled: a.disabled
  }, {
    default: ve(({ checked: i }) => [X(r, { is: e.isFunction(a[e.labelKey]) ? a[e.labelKey](a, i) : a[e.labelKey] }, null, 8, ["is"])]),
    _: 2
  }, 1032, ["checked-value", "disabled"]))), 128)) : K("v-if", !0), L(e.$slots, "default")], 2), X(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var Yp = ee({
  name: eS,
  components: {
    VarFormDetails: Bn,
    VarCheckbox: io,
    MaybeVNode: tt
  },
  props: Hp,
  setup(e) {
    const n = E(() => e.max), r = E(() => e.modelValue.length), { length: o, checkboxes: t, bindCheckboxes: a } = nw(), { bindForm: i } = Wn(), { errorMessage: l, validateWithTrigger: s, validate: u, resetValidation: d } = jn(), c = {
      max: n,
      checkedCount: r,
      onChecked: m,
      onUnchecked: h,
      validate: P,
      resetValidation: d,
      reset: b,
      errorMessage: E(() => l.value)
    };
    pe(() => e.modelValue, w, { deep: !0 }), pe(() => o.value, w), a(c), k(i, c);
    function f(O) {
      Ve(() => {
        const { validateTrigger: I, rules: Y, modelValue: M } = e;
        s(I, O, Y, M);
      });
    }
    function v(O) {
      k(e["onUpdate:modelValue"], O), k(e.onChange, O), f("onChange");
    }
    function m(O) {
      const { modelValue: I } = e;
      I.includes(O) || v([...I, O]);
    }
    function h(O) {
      const { modelValue: I } = e;
      I.includes(O) && v(I.filter((Y) => Y !== O));
    }
    function w() {
      t.forEach(({ sync: O }) => O(e.modelValue));
    }
    function $() {
      const O = Zt(t.map(({ checkedValue: I }) => I.value));
      return k(e["onUpdate:modelValue"], O), O;
    }
    function C() {
      const O = Zt(t.filter(({ checked: I }) => !I.value).map(({ checkedValue: I }) => I.value));
      return k(e["onUpdate:modelValue"], O), O;
    }
    function b() {
      k(e["onUpdate:modelValue"], []), d();
    }
    function P() {
      return u(e.rules, e.modelValue);
    }
    return {
      errorMessage: l,
      n: nS,
      classes: rS,
      checkAll: $,
      inverseAll: C,
      reset: b,
      validate: P,
      resetValidation: d,
      isFunction: fn
    };
  }
});
Yp.render = oS;
var ei = Yp;
ae(ei);
de(ei, Hp);
var YB = ei, jl = ei, jp = {
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
  iconName: Be(ln, "name"),
  namespace: Be(ln, "namespace"),
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
  onClose: R()
}, { name: tS, n: wr, classes: aS } = ne("chip");
function iS(e, n) {
  const r = x("var-icon");
  return g(), ke(en, { name: e.n("$-fade") }, {
    default: ve(() => [V("span", je({
      class: e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 1), ...e.contentClass),
      style: e.chipStyle
    }, e.$attrs), [
      L(e.$slots, "left"),
      V("span", { class: p(e.n(`text-${e.size}`)) }, [L(e.$slots, "default")], 2),
      L(e.$slots, "right"),
      e.closeable ? (g(), S("span", {
        key: 0,
        class: p(e.n("--close")),
        onClick: n[0] || (n[0] = (...o) => e.handleClose && e.handleClose(...o))
      }, [X(r, {
        name: `${e.iconName ? e.iconName : "close-circle"}`,
        namespace: e.namespace
      }, null, 8, ["name", "namespace"])], 2)) : K("v-if", !0)
    ], 16)]),
    _: 3
  }, 8, ["name"]);
}
var Wp = ee({
  name: tS,
  components: { VarIcon: Je },
  inheritAttrs: !1,
  props: jp,
  setup(e) {
    const n = E(() => {
      const { plain: t, textColor: a, color: i } = e;
      return t ? {
        color: a || i,
        borderColor: i
      } : {
        color: a,
        background: i
      };
    }), r = E(() => {
      const { size: t, block: a, type: i, plain: l, round: s } = e, u = wr(a ? "$--flex" : "$--inline-flex"), d = l ? `${wr("plain")} ${wr(`plain-${i}`)}` : wr(`--${i}`), c = s ? wr("--round") : null;
      return [
        wr(`--${t}`),
        u,
        d,
        c
      ];
    });
    function o(t) {
      k(e.onClose, t);
    }
    return {
      chipStyle: n,
      contentClass: r,
      n: wr,
      classes: aS,
      formatElevation: vn,
      handleClose: o
    };
  }
});
Wp.render = iS;
var ni = Wp;
ae(ni);
de(ni, jp);
var jB = ni, oa = ni, Wl = /* @__PURE__ */ Symbol("HIGHLIGHTER_PROVIDER_KEY");
function lS(e) {
  _s(Wl, e);
}
function sS() {
  return au(Wl) ? xs(Wl) : {
    highlighter: null,
    theme: null
  };
}
var Kp = {
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
}, uS = (e, n, r) => new Promise((o, t) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: dS, n: cS, classes: fS } = ne("code"), vS = ["innerHTML"];
function pS(e, n) {
  return g(), S("div", {
    class: p(e.classes(e.n(), [e.wordWrap, e.n("--word-wrap")])),
    innerHTML: e.highlightedCode
  }, null, 10, vS);
}
var qp = ee({
  name: dS,
  props: Kp,
  setup(e) {
    const { highlighter: n, theme: r } = sS(), o = y(""), t = E(() => {
      var a;
      return (a = e.theme) != null ? a : r?.value;
    });
    return n && pe(() => [
      n.value,
      e.code,
      e.language,
      t.value,
      e.trim
    ], (a) => uS(null, [a], function* ([i, l, s = "", u = "", d]) {
      i && (o.value = yield i.codeToHtml(d ? l.trim() : l, {
        lang: s,
        theme: u
      }));
    }), { immediate: !0 }), {
      n: cS,
      classes: fS,
      highlightedCode: o
    };
  }
});
qp.render = pS;
var ri = qp;
ae(ri);
de(ri, Kp);
var WB = ri, Kl = ri, Xp = {
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
  onClick: R()
}, Gp = /* @__PURE__ */ Symbol("ROW_BIND_COL_KEY");
function mS() {
  const { length: e, childProviders: n, bindChildren: r } = wn(Gp);
  return {
    length: e,
    cols: n,
    bindCols: r
  };
}
function hS() {
  const { index: e, bindParent: n, parentProvider: r } = yn(Gp);
  return {
    index: e,
    row: r,
    bindRow: n
  };
}
var { name: gS, n: wt, classes: bS } = ne("col");
function yS(e, n) {
  return g(), S("div", {
    class: p(e.classes(e.n(), e.n("$--box"), [e.span >= 0, e.n(`--span-${e.span}`)], [e.offset, e.n(`--offset-${e.offset}`)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
    style: q({
      flexDirection: e.direction,
      justifyContent: e.padStartFlex(e.justify),
      alignItems: e.padStartFlex(e.align),
      paddingLeft: e.toSizeUnit(e.padding.left),
      paddingRight: e.toSizeUnit(e.padding.right),
      paddingTop: e.toSizeUnit(e.padding.top),
      paddingBottom: e.toSizeUnit(e.padding.bottom)
    }),
    onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
  }, [L(e.$slots, "default")], 6);
}
var Zp = ee({
  name: gS,
  props: Xp,
  setup(e) {
    const n = E(() => H(e.span)), r = E(() => H(e.offset)), o = E(() => {
      var s;
      const [u = 0, d = 0] = (s = t?.average.value) != null ? s : [];
      return {
        left: d,
        right: d,
        top: u,
        bottom: u
      };
    }), { row: t, bindRow: a } = hS();
    k(a, null);
    function i(s, u) {
      const d = [];
      if (u == null) return d;
      if (gn(u)) {
        const { offset: c, span: f } = u;
        return Number(f) >= 0 && d.push(wt(`--span-${s}-${f}`)), c && d.push(wt(`--offset-${s}-${c}`)), d;
      }
      return Number(u) >= 0 && d.push(wt(`--span-${s}-${u}`)), d;
    }
    function l(s) {
      k(e.onClick, s);
    }
    return {
      span: n,
      offset: r,
      padding: o,
      n: wt,
      classes: bS,
      toNumber: H,
      toSizeUnit: Te,
      getSize: i,
      handleClick: l,
      padStartFlex: _t
    };
  }
});
Zp.render = yS;
var oi = Zp;
ae(oi);
de(oi, Xp);
var KB = oi, ql = oi, Jp = {
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
  onChange: R(),
  "onUpdate:modelValue": R()
}, Qp = /* @__PURE__ */ Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function wS() {
  const { childProviders: e, length: n, bindChildren: r } = wn(Qp);
  return {
    length: n,
    collapseItems: e,
    bindCollapseItems: r
  };
}
var { name: kS, n: $S } = ne("collapse");
function CS(e, n) {
  return g(), S("div", { class: p(e.n()) }, [L(e.$slots, "default")], 2);
}
var xp = ee({
  name: kS,
  props: Jp,
  setup(e) {
    const n = E(() => e.offset), r = E(() => e.divider), o = E(() => e.elevation), t = E(() => e.accordion), a = E(() => hr(e.modelValue)), { length: i, collapseItems: l, bindCollapseItems: s } = wS(), u = {
      offset: n,
      divider: r,
      elevation: o,
      accordion: t,
      updateItem: d
    };
    pe(() => i.value, () => Ve().then(v)), pe(() => e.modelValue, () => Ve().then(v)), s(u);
    function d(h, w) {
      if (e.accordion) {
        c(w ? h : void 0);
        return;
      }
      c(w ? [...a.value, h] : a.value.filter(($) => $ !== h));
    }
    function c(h) {
      k(e["onUpdate:modelValue"], h), k(e.onChange, h);
    }
    function f() {
      if (e.accordion) {
        const [$] = a.value;
        if ($ == null) return;
        const C = l.find(({ name: b }) => $ === b.value);
        return C ?? l.find(({ index: b, name: P }) => P.value == null && $ === b.value);
      }
      const h = l.filter(({ name: $ }) => $.value != null && a.value.includes($.value)), w = l.filter(({ index: $, name: C }) => C.value == null && a.value.includes($.value));
      return [...h, ...w];
    }
    function v() {
      const h = Ff(hr(f()));
      l.forEach((w) => {
        w.init(h.includes(w));
      });
    }
    return {
      divider: r,
      n: $S,
      toggleAll: (h) => {
        e.accordion || c(l.filter((w) => {
          var $;
          const C = ($ = w.name.value) != null ? $ : w.index.value, b = a.value.includes(C);
          return h.skipDisabled && w.disabled.value ? b : h.expand === "inverse" ? !b : h.expand;
        }).map((w) => {
          var $;
          return ($ = w.name.value) != null ? $ : w.index.value;
        }));
      }
    };
  }
});
xp.render = CS;
var ti = xp;
ae(ti);
de(ti, Jp);
var qB = ti, Xl = ti, ec = (e, n, r) => new Promise((o, t) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
});
function _p(e) {
  const { contentEl: n, showContent: r, expand: o } = e;
  let t = !0;
  pe(o, (u) => {
    Ve(() => {
      u ? a() : i();
    });
  }, { immediate: !0 });
  function a() {
    return ec(this, null, function* () {
      if (!n.value || (n.value.style.height = "", r.value = !0, yield Tr(), !n.value)) return;
      const { offsetHeight: u } = n.value;
      n.value.style.height = "0px", yield Tr(), n.value && (n.value.style.height = u + "px", t && (yield Sn(), t && l()));
    });
  }
  const i = () => ec(null, null, function* () {
    if (!n.value) return;
    const { offsetHeight: u } = n.value;
    n.value.style.height = u + "px", yield Tr(), n.value.style.height = "0px";
  }), l = () => {
    o.value || (r.value = !1), n.value.style.height = "";
  };
  return {
    handleTransitionEnd: l,
    handleTransitionStart: () => {
      t = !1;
    }
  };
}
var em = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
};
function SS() {
  const { parentProvider: e, index: n, bindParent: r } = yn(Qp);
  return Un(!!r, "Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: r
  };
}
var { name: OS, n: PS, classes: zS } = ne("collapse-item"), TS = [
  "aria-expanded",
  "aria-disabled",
  "role"
];
function ES(e, n) {
  const r = x("var-icon");
  return g(), S("div", {
    class: p(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
    style: q(`--collapse-divider-top: ${e.divider ? "var(--collapse-border-top)" : "none"}`)
  }, [
    V("div", { class: p(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2))) }, null, 2),
    V("div", {
      class: p(e.classes(e.n("header"), [!e.disabled, e.n("header--cursor-pointer")])),
      "aria-expanded": e.isShow,
      "aria-disabled": e.disabled,
      role: e.accordion ? "tab" : "button",
      onClick: n[0] || (n[0] = (...o) => e.toggle && e.toggle(...o))
    }, [e.$slots.title || e.title ? (g(), S("div", {
      key: 0,
      class: p(e.n("header-title"))
    }, [L(e.$slots, "title", {}, () => [Ie(ue(e.title), 1)])], 2)) : K("v-if", !0), V("div", { class: p(e.n("header-icon")) }, [L(e.$slots, "icon", {}, () => [X(r, {
      name: e.icon,
      transition: 250,
      class: p(e.classes(e.n("header-icon"), [e.isShow && e.icon === "chevron-down", e.n("header-open")], [e.disabled, e.n("header--disable")]))
    }, null, 8, ["name", "class"])])], 2)], 10, TS),
    Me(V("div", {
      ref: "contentEl",
      class: p(e.n("content")),
      onTransitionend: n[1] || (n[1] = (...o) => e.handleTransitionEnd && e.handleTransitionEnd(...o)),
      onTransitionstart: n[2] || (n[2] = (...o) => e.handleTransitionStart && e.handleTransitionStart(...o))
    }, [V("div", { class: p(e.n("content-wrap")) }, [L(e.$slots, "default")], 2)], 34), [[Jn, e.showContent]])
  ], 6);
}
var nm = ee({
  name: OS,
  components: { VarIcon: Je },
  props: em,
  setup(e) {
    const n = y(!1), r = y(!1), o = y(null), t = E(() => e.name), a = E(() => e.disabled), { index: i, collapse: l, bindCollapse: s } = SS(), { offset: u, divider: d, elevation: c, accordion: f, updateItem: v } = l;
    s({
      index: i,
      name: t,
      disabled: a,
      init: w
    });
    const { handleTransitionEnd: m, handleTransitionStart: h } = _p({
      contentEl: o,
      showContent: r,
      expand: n
    });
    function w(C) {
      n.value = C;
    }
    function $() {
      var C;
      e.disabled || v((C = e.name) != null ? C : i.value, !n.value);
    }
    return {
      isShow: n,
      showContent: r,
      offset: u,
      divider: d,
      elevation: c,
      contentEl: o,
      accordion: f,
      n: PS,
      classes: zS,
      toggle: $,
      formatElevation: vn,
      handleTransitionEnd: m,
      handleTransitionStart: h
    };
  }
});
nm.render = ES;
var ai = nm;
ae(ai);
de(ai, em);
var XB = ai, Gl = ai, rm = { expand: Boolean }, { name: IS, n: BS } = ne("collapse-transition");
function DS(e, n) {
  return Me((g(), S("div", {
    ref: "contentEl",
    class: p(e.n("content")),
    onTransitionend: n[0] || (n[0] = (...r) => e.handleTransitionEnd && e.handleTransitionEnd(...r)),
    onTransitionstart: n[1] || (n[1] = (...r) => e.handleTransitionStart && e.handleTransitionStart(...r))
  }, [L(e.$slots, "default")], 34)), [[Jn, e.showContent]]);
}
var om = ee({
  name: IS,
  props: rm,
  setup(e) {
    const n = y(!1), r = y(null), { handleTransitionEnd: o, handleTransitionStart: t } = _p({
      contentEl: r,
      showContent: n,
      expand: E(() => e.expand)
    });
    return {
      showContent: n,
      contentEl: r,
      n: BS,
      handleTransitionEnd: o,
      handleTransitionStart: t
    };
  }
});
om.render = DS;
var ii = om;
ae(ii);
de(ii, rm);
var GB = ii, Zl = ii, tm = {
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
  onEnd: R()
}, { name: MS, n: AS } = ne("count-to");
function NS(e, n) {
  return g(), S("div", { class: p(e.n()) }, [L(e.$slots, "default", { value: e.value }, () => [Ie(ue(e.value), 1)])], 2);
}
var am = ee({
  name: MS,
  props: tm,
  setup(e) {
    const { value: n, reset: r, start: o, pause: t } = K0({
      from: () => H(e.from),
      to: () => H(e.to),
      duration: () => H(e.duration),
      timingFunction: e.timingFunction,
      onFinished() {
        k(e.onEnd);
      }
    }), a = E(() => kl(n.value, H(e.precision)));
    pe(() => [
      e.from,
      e.to,
      e.duration
    ], i), br(i);
    function i() {
      r(), e.autoStart && o();
    }
    return {
      value: a,
      n: AS,
      start: o,
      pause: t,
      reset: i,
      toNumber: H,
      floor: kl
    };
  }
});
am.render = NS;
var li = am;
ae(li);
de(li, tm);
var ZB = li, Jl = li, im = {
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
  onEnd: R(),
  onChange: R()
}, { name: VS, n: RS } = ne("countdown"), Ql = 1e3, xl = 60 * Ql, _l = 60 * xl, nc = 24 * _l;
function LS(e, n) {
  return g(), S("div", { class: p(e.n()) }, [L(e.$slots, "default", Kr(va(e.timeData)), () => [Ie(ue(e.showTime), 1)])], 2);
}
var lm = ee({
  name: VS,
  props: im,
  setup(e) {
    const n = y(""), r = y({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    });
    let o = 0, t = !1, a = 0, i = 0, l;
    pe(() => e.time, () => {
      v(), e.autoStart && c();
    }), br(() => {
      d(), e.autoStart && c();
    }), Vr(() => {
      l != null && (t = l, t === !0 && c(!0));
    }), mo(() => {
      l = t, f();
    }), _o(f);
    function s(m, h) {
      const w = Object.values(h), $ = [
        "DD",
        "HH",
        "mm",
        "ss"
      ], C = [
        24,
        60,
        60,
        1e3
      ];
      if ($.forEach((b, P) => {
        m.includes(b) ? m = m.replace(b, Jr(`${w[P]}`, 2, "0")) : w[P + 1] += w[P] * C[P];
      }), m.includes("S")) {
        const b = Jr(`${w[w.length - 1]}`, 3, "0");
        m.includes("SSS") ? m = m.replace("SSS", b) : m.includes("SS") ? m = m.replace("SS", b.slice(0, 2)) : m = m.replace("S", b.slice(0, 1));
      }
      return m;
    }
    function u(m) {
      const h = {
        days: Math.floor(m / nc),
        hours: Math.floor(m % nc / _l),
        minutes: Math.floor(m % _l / xl),
        seconds: Math.floor(m % xl / Ql),
        milliseconds: Math.floor(m % Ql)
      };
      r.value = h, k(e.onChange, r.value), n.value = s(e.format, h);
    }
    function d() {
      const { time: m, onEnd: h } = e, w = performance.now();
      if (o || (o = w + H(m)), i = o - w, i < 0 && (i = 0), u(i), i === 0) {
        k(h);
        return;
      }
      t && (a = Gr(d));
    }
    function c(m = !1) {
      t && !m || (t = !0, o = performance.now() + (i || H(e.time)), d());
    }
    function f() {
      t = !1, Ro(a);
    }
    function v() {
      o = 0, t = !1, Ro(a), d();
    }
    return {
      showTime: n,
      timeData: r,
      n: RS,
      start: c,
      pause: f,
      reset: v
    };
  }
});
lm.render = LS;
var si = lm;
ae(si);
de(si, im);
var JB = si, es = si, oo = 9e15, Fr = 1e9, ns = "0123456789abcdef", ta = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", aa = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", rs = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -oo,
  maxE: oo,
  crypto: !1
}, sm, mr, Ee = !0, ui = "[DecimalError] ", Nr = ui + "Invalid argument: ", um = ui + "Precision limit exceeded", dm = ui + "crypto unavailable", cm = "[object Decimal]", Tn = Math.floor, hn = Math.pow, FS = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, US = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, HS = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, fm = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, er = 1e7, Pe = 7, YS = 9007199254740991, jS = ta.length - 1, os = aa.length - 1, _ = { toStringTag: cm };
_.absoluteValue = _.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), $e(e);
};
_.ceil = function() {
  return $e(new this.constructor(this), this.e + 1, 2);
};
_.clampedTo = _.clamp = function(e, n) {
  var r, o = this, t = o.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s) return new t(NaN);
  if (e.gt(n)) throw Error(Nr + n);
  return r = o.cmp(e), r < 0 ? e : o.cmp(n) > 0 ? n : new t(o);
};
_.comparedTo = _.cmp = function(e) {
  var n, r, o, t, a = this, i = a.d, l = (e = new a.constructor(e)).d, s = a.s, u = e.s;
  if (!i || !l) return !s || !u ? NaN : s !== u ? s : i === l ? 0 : !i ^ s < 0 ? 1 : -1;
  if (!i[0] || !l[0]) return i[0] ? s : l[0] ? -u : 0;
  if (s !== u) return s;
  if (a.e !== e.e) return a.e > e.e ^ s < 0 ? 1 : -1;
  for (o = i.length, t = l.length, n = 0, r = o < t ? o : t; n < r; ++n) if (i[n] !== l[n]) return i[n] > l[n] ^ s < 0 ? 1 : -1;
  return o === t ? 0 : o > t ^ s < 0 ? 1 : -1;
};
_.cosine = _.cos = function() {
  var e, n, r = this, o = r.constructor;
  return r.d ? r.d[0] ? (e = o.precision, n = o.rounding, o.precision = e + Math.max(r.e, r.sd()) + Pe, o.rounding = 1, r = WS(o, gm(o, r)), o.precision = e, o.rounding = n, $e(mr == 2 || mr == 3 ? r.neg() : r, e, n, !0)) : new o(1) : new o(NaN);
};
_.cubeRoot = _.cbrt = function() {
  var e, n, r, o, t, a, i, l, s, u, d = this, c = d.constructor;
  if (!d.isFinite() || d.isZero()) return new c(d);
  for (Ee = !1, a = d.s * hn(d.s * d, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (r = Cn(d.d), e = d.e, (a = (e - r.length + 1) % 3) && (r += a == 1 || a == -2 ? "0" : "00"), a = hn(r, 1 / 3), e = Tn((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? r = "5e" + e : (r = a.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), o = new c(r), o.s = d.s) : o = new c(a.toString()), i = (e = c.precision) + 3; ; )
    if (l = o, s = l.times(l).times(l), u = s.plus(d), o = Qe(u.plus(d).times(l), u.plus(s), i + 2, 1), Cn(l.d).slice(0, i) === (r = Cn(o.d)).slice(0, i))
      if (r = r.slice(i - 3, i + 1), r == "9999" || !t && r == "4999") {
        if (!t && ($e(l, e + 1, 0), l.times(l).times(l).eq(d))) {
          o = l;
          break;
        }
        i += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && ($e(o, e + 1, 1), n = !o.times(o).times(o).eq(d));
        break;
      }
  return Ee = !0, $e(o, e, c.rounding, n);
};
_.decimalPlaces = _.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - Tn(this.e / Pe)) * Pe, e = n[e], e) for (; e % 10 == 0; e /= 10) r--;
    r < 0 && (r = 0);
  }
  return r;
};
_.dividedBy = _.div = function(e) {
  return Qe(this, new this.constructor(e));
};
_.dividedToIntegerBy = _.divToInt = function(e) {
  var n = this, r = n.constructor;
  return $e(Qe(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
_.equals = _.eq = function(e) {
  return this.cmp(e) === 0;
};
_.floor = function() {
  return $e(new this.constructor(this), this.e + 1, 3);
};
_.greaterThan = _.gt = function(e) {
  return this.cmp(e) > 0;
};
_.greaterThanOrEqualTo = _.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
_.hyperbolicCosine = _.cosh = function() {
  var e, n, r, o, t, a = this, i = a.constructor, l = new i(1);
  if (!a.isFinite()) return new i(a.s ? 1 / 0 : NaN);
  if (a.isZero()) return l;
  r = i.precision, o = i.rounding, i.precision = r + Math.max(a.e, a.sd()) + 4, i.rounding = 1, t = a.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / ci(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), a = vo(i, 1, a.times(n), new i(1), !0);
  for (var s, u = e, d = new i(8); u--; )
    s = a.times(a), a = l.minus(s.times(d.minus(s.times(d))));
  return $e(a, i.precision = r, i.rounding = o, !0);
};
_.hyperbolicSine = _.sinh = function() {
  var e, n, r, o, t = this, a = t.constructor;
  if (!t.isFinite() || t.isZero()) return new a(t);
  if (n = a.precision, r = a.rounding, a.precision = n + Math.max(t.e, t.sd()) + 4, a.rounding = 1, o = t.d.length, o < 3) t = vo(a, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(o), e = e > 16 ? 16 : e | 0, t = t.times(1 / ci(5, e)), t = vo(a, 2, t, t, !0);
    for (var i, l = new a(5), s = new a(16), u = new a(20); e--; )
      i = t.times(t), t = t.times(l.plus(i.times(s.times(i).plus(u))));
  }
  return a.precision = n, a.rounding = r, $e(t, n, r, !0);
};
_.hyperbolicTangent = _.tanh = function() {
  var e, n, r = this, o = r.constructor;
  return r.isFinite() ? r.isZero() ? new o(r) : (e = o.precision, n = o.rounding, o.precision = e + 7, o.rounding = 1, Qe(r.sinh(), r.cosh(), o.precision = e, o.rounding = n)) : new o(r.s);
};
_.inverseCosine = _.acos = function() {
  var e = this, n = e.constructor, r = e.abs().cmp(1), o = n.precision, t = n.rounding;
  return r !== -1 ? r === 0 ? e.isNeg() ? lr(n, o, t) : new n(0) : new n(NaN) : e.isZero() ? lr(n, o + 4, t).times(0.5) : (n.precision = o + 6, n.rounding = 1, e = new n(1).minus(e).div(e.plus(1)).sqrt().atan(), n.precision = o, n.rounding = t, e.times(2));
};
_.inverseHyperbolicCosine = _.acosh = function() {
  var e, n, r = this, o = r.constructor;
  return r.lte(1) ? new o(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = o.precision, n = o.rounding, o.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, o.rounding = 1, Ee = !1, r = r.times(r).minus(1).sqrt().plus(r), Ee = !0, o.precision = e, o.rounding = n, r.ln()) : new o(r);
};
_.inverseHyperbolicSine = _.asinh = function() {
  var e, n, r = this, o = r.constructor;
  return !r.isFinite() || r.isZero() ? new o(r) : (e = o.precision, n = o.rounding, o.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, o.rounding = 1, Ee = !1, r = r.times(r).plus(1).sqrt().plus(r), Ee = !0, o.precision = e, o.rounding = n, r.ln());
};
_.inverseHyperbolicTangent = _.atanh = function() {
  var e, n, r, o, t = this, a = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new a(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = a.precision, n = a.rounding, o = t.sd(), Math.max(o, e) < 2 * -t.e - 1 ? $e(new a(t), e, n, !0) : (a.precision = r = o - t.e, t = Qe(t.plus(1), new a(1).minus(t), r + e, 1), a.precision = e + 4, a.rounding = 1, t = t.ln(), a.precision = e, a.rounding = n, t.times(0.5))) : new a(NaN);
};
_.inverseSine = _.asin = function() {
  var e, n, r, o, t = this, a = t.constructor;
  return t.isZero() ? new a(t) : (n = t.abs().cmp(1), r = a.precision, o = a.rounding, n !== -1 ? n === 0 ? (e = lr(a, r + 4, o).times(0.5), e.s = t.s, e) : new a(NaN) : (a.precision = r + 6, a.rounding = 1, t = t.div(new a(1).minus(t.times(t)).sqrt().plus(1)).atan(), a.precision = r, a.rounding = o, t.times(2)));
};
_.inverseTangent = _.atan = function() {
  var e, n, r, o, t, a, i, l, s, u = this, d = u.constructor, c = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero()) return new d(u);
    if (u.abs().eq(1) && c + 4 <= os)
      return i = lr(d, c + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s) return new d(NaN);
    if (c + 4 <= os)
      return i = lr(d, c + 4, f).times(0.5), i.s = u.s, i;
  }
  for (d.precision = l = c + 10, d.rounding = 1, r = Math.min(28, l / Pe + 2 | 0), e = r; e; --e) u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (Ee = !1, n = Math.ceil(l / Pe), o = 1, s = u.times(u), i = new d(u), t = u; e !== -1; )
    if (t = t.times(s), a = i.minus(t.div(o += 2)), t = t.times(s), i = a.plus(t.div(o += 2)), i.d[n] !== void 0) for (e = n; i.d[e] === a.d[e] && e--; ) ;
  return r && (i = i.times(2 << r - 1)), Ee = !0, $e(i, d.precision = c, d.rounding = f, !0);
};
_.isFinite = function() {
  return !!this.d;
};
_.isInteger = _.isInt = function() {
  return !!this.d && Tn(this.e / Pe) > this.d.length - 2;
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
  var n, r, o, t, a, i, l, s, u = this, d = u.constructor, c = d.precision, f = d.rounding, v = 5;
  if (e == null)
    e = new d(10), n = !0;
  else {
    if (e = new d(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1)) return new d(NaN);
    n = e.eq(10);
  }
  if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1)) return new d(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (n) if (r.length > 1) a = !0;
  else {
    for (t = r[0]; t % 10 === 0; ) t /= 10;
    a = t !== 1;
  }
  if (Ee = !1, l = c + v, i = Pr(u, l), o = n ? ia(d, l + 10) : Pr(e, l), s = Qe(i, o, l, 1), qo(s.d, t = c, f)) do
    if (l += 10, i = Pr(u, l), o = n ? ia(d, l + 10) : Pr(e, l), s = Qe(i, o, l, 1), !a) {
      +Cn(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = $e(s, c + 1, 0));
      break;
    }
  while (qo(s.d, t += 10, f));
  return Ee = !0, $e(s, c, f);
};
_.minus = _.sub = function(e) {
  var n, r, o, t, a, i, l, s, u, d, c, f, v = this, m = v.constructor;
  if (e = new m(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new m(NaN) : v.d ? e.s = -e.s : e = new m(e.d || v.s !== e.s ? v : NaN), e;
  if (v.s != e.s)
    return e.s = -e.s, v.plus(e);
  if (u = v.d, f = e.d, l = m.precision, s = m.rounding, !u[0] || !f[0]) {
    if (f[0]) e.s = -e.s;
    else if (u[0]) e = new m(v);
    else return new m(s === 3 ? -0 : 0);
    return Ee ? $e(e, l, s) : e;
  }
  if (r = Tn(e.e / Pe), d = Tn(v.e / Pe), u = u.slice(), a = d - r, a) {
    for (c = a < 0, c ? (n = u, a = -a, i = f.length) : (n = f, r = d, i = u.length), o = Math.max(Math.ceil(l / Pe), i) + 2, a > o && (a = o, n.length = 1), n.reverse(), o = a; o--; ) n.push(0);
    n.reverse();
  } else {
    for (o = u.length, i = f.length, c = o < i, c && (i = o), o = 0; o < i; o++) if (u[o] != f[o]) {
      c = u[o] < f[o];
      break;
    }
    a = 0;
  }
  for (c && (n = u, u = f, f = n, e.s = -e.s), i = u.length, o = f.length - i; o > 0; --o) u[i++] = 0;
  for (o = f.length; o > a; ) {
    if (u[--o] < f[o]) {
      for (t = o; t && u[--t] === 0; ) u[t] = er - 1;
      --u[t], u[o] += er;
    }
    u[o] -= f[o];
  }
  for (; u[--i] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --r;
  return u[0] ? (e.d = u, e.e = di(u, r), Ee ? $e(e, l, s) : e) : new m(s === 3 ? -0 : 0);
};
_.modulo = _.mod = function(e) {
  var n, r = this, o = r.constructor;
  return e = new o(e), !r.d || !e.s || e.d && !e.d[0] ? new o(NaN) : !e.d || r.d && !r.d[0] ? $e(new o(r), o.precision, o.rounding) : (Ee = !1, o.modulo == 9 ? (n = Qe(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Qe(r, e, 0, o.modulo, 1), n = n.times(e), Ee = !0, r.minus(n));
};
_.naturalExponential = _.exp = function() {
  return ts(this);
};
_.naturalLogarithm = _.ln = function() {
  return Pr(this);
};
_.negated = _.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, $e(e);
};
_.plus = _.add = function(e) {
  var n, r, o, t, a, i, l, s, u, d, c = this, f = c.constructor;
  if (e = new f(e), !c.d || !e.d)
    return !c.s || !e.s ? e = new f(NaN) : c.d || (e = new f(e.d || c.s === e.s ? c : NaN)), e;
  if (c.s != e.s)
    return e.s = -e.s, c.minus(e);
  if (u = c.d, d = e.d, l = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(c)), Ee ? $e(e, l, s) : e;
  if (a = Tn(c.e / Pe), o = Tn(e.e / Pe), u = u.slice(), t = a - o, t) {
    for (t < 0 ? (r = u, t = -t, i = d.length) : (r = d, o = a, i = u.length), a = Math.ceil(l / Pe), i = a > i ? a + 1 : i + 1, t > i && (t = i, r.length = 1), r.reverse(); t--; ) r.push(0);
    r.reverse();
  }
  for (i = u.length, t = d.length, i - t < 0 && (t = i, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / er | 0, u[t] %= er;
  for (n && (u.unshift(n), ++o), i = u.length; u[--i] == 0; ) u.pop();
  return e.d = u, e.e = di(u, o), Ee ? $e(e, l, s) : e;
};
_.precision = _.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Nr + e);
  return r.d ? (n = vm(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
_.round = function() {
  var e = this, n = e.constructor;
  return $e(new n(e), e.e + 1, n.rounding);
};
_.sine = _.sin = function() {
  var e, n, r = this, o = r.constructor;
  return r.isFinite() ? r.isZero() ? new o(r) : (e = o.precision, n = o.rounding, o.precision = e + Math.max(r.e, r.sd()) + Pe, o.rounding = 1, r = qS(o, gm(o, r)), o.precision = e, o.rounding = n, $e(mr > 2 ? r.neg() : r, e, n, !0)) : new o(NaN);
};
_.squareRoot = _.sqrt = function() {
  var e, n, r, o, t, a, i = this, l = i.d, s = i.e, u = i.s, d = i.constructor;
  if (u !== 1 || !l || !l[0]) return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (Ee = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = Cn(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Tn((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), o = new d(n)) : o = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (a = o, o = a.plus(Qe(i, a, r + 2, 1)).times(0.5), Cn(a.d).slice(0, r) === (n = Cn(o.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !t && n == "4999") {
        if (!t && ($e(a, s + 1, 0), a.times(a).eq(i))) {
          o = a;
          break;
        }
        r += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && ($e(o, s + 1, 1), e = !o.times(o).eq(i));
        break;
      }
  return Ee = !0, $e(o, s, d.rounding, e);
};
_.tangent = _.tan = function() {
  var e, n, r = this, o = r.constructor;
  return r.isFinite() ? r.isZero() ? new o(r) : (e = o.precision, n = o.rounding, o.precision = e + 10, o.rounding = 1, r = r.sin(), r.s = 1, r = Qe(r, new o(1).minus(r.times(r)).sqrt(), e + 10, 0), o.precision = e, o.rounding = n, $e(mr == 2 || mr == 4 ? r.neg() : r, e, n, !0)) : new o(NaN);
};
_.times = _.mul = function(e) {
  var n, r, o, t, a, i, l, s, u, d = this, c = d.constructor, f = d.d, v = (e = new c(e)).d;
  if (e.s *= d.s, !f || !f[0] || !v || !v[0]) return new c(!e.s || f && !f[0] && !v || v && !v[0] && !f ? NaN : !f || !v ? e.s / 0 : e.s * 0);
  for (r = Tn(d.e / Pe) + Tn(e.e / Pe), s = f.length, u = v.length, s < u && (a = f, f = v, v = a, i = s, s = u, u = i), a = [], i = s + u, o = i; o--; ) a.push(0);
  for (o = u; --o >= 0; ) {
    for (n = 0, t = s + o; t > o; )
      l = a[t] + v[o] * f[t - o - 1] + n, a[t--] = l % er | 0, n = l / er | 0;
    a[t] = (a[t] + n) % er | 0;
  }
  for (; !a[--i]; ) a.pop();
  return n ? ++r : a.shift(), e.d = a, e.e = di(a, r), Ee ? $e(e, c.precision, c.rounding) : e;
};
_.toBinary = function(e, n) {
  return zu(this, 2, e, n);
};
_.toDecimalPlaces = _.toDP = function(e, n) {
  var r = this, o = r.constructor;
  return r = new o(r), e === void 0 ? r : (Nn(e, 0, Fr), n === void 0 ? n = o.rounding : Nn(n, 0, 8), $e(r, e + r.e + 1, n));
};
_.toExponential = function(e, n) {
  var r, o = this, t = o.constructor;
  return e === void 0 ? r = ur(o, !0) : (Nn(e, 0, Fr), n === void 0 ? n = t.rounding : Nn(n, 0, 8), o = $e(new t(o), e + 1, n), r = ur(o, !0, e + 1)), o.isNeg() && !o.isZero() ? "-" + r : r;
};
_.toFixed = function(e, n) {
  var r, o, t = this, a = t.constructor;
  return e === void 0 ? r = ur(t) : (Nn(e, 0, Fr), n === void 0 ? n = a.rounding : Nn(n, 0, 8), o = $e(new a(t), e + t.e + 1, n), r = ur(o, !1, e + o.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
_.toFraction = function(e) {
  var n, r, o, t, a, i, l, s, u, d, c, f, v = this, m = v.d, h = v.constructor;
  if (!m) return new h(v);
  if (u = r = new h(1), o = s = new h(0), n = new h(o), a = n.e = vm(m) - v.e - 1, i = a % Pe, n.d[0] = hn(10, i < 0 ? Pe + i : i), e == null) e = a > 0 ? n : u;
  else {
    if (l = new h(e), !l.isInt() || l.lt(u)) throw Error(Nr + l);
    e = l.gt(n) ? a > 0 ? n : u : l;
  }
  for (Ee = !1, l = new h(Cn(m)), d = h.precision, h.precision = a = m.length * Pe * 2; c = Qe(l, n, 0, 1, 1), t = r.plus(c.times(o)), t.cmp(e) != 1; )
    r = o, o = t, t = u, u = s.plus(c.times(t)), s = t, t = n, n = l.minus(c.times(t)), l = t;
  return t = Qe(e.minus(r), o, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(o)), s.s = u.s = v.s, f = Qe(u, o, a, 1).minus(v).abs().cmp(Qe(s, r, a, 1).minus(v).abs()) < 1 ? [u, o] : [s, r], h.precision = d, Ee = !0, f;
};
_.toHexadecimal = _.toHex = function(e, n) {
  return zu(this, 16, e, n);
};
_.toNearest = function(e, n) {
  var r = this, o = r.constructor;
  if (r = new o(r), e == null) {
    if (!r.d) return r;
    e = new o(1), n = o.rounding;
  } else {
    if (e = new o(e), n === void 0 ? n = o.rounding : Nn(n, 0, 8), !r.d) return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (Ee = !1, r = Qe(r, e, 0, n, 1).times(e), Ee = !0, $e(r)) : (e.s = r.s, r = e), r;
};
_.toNumber = function() {
  return +this;
};
_.toOctal = function(e, n) {
  return zu(this, 8, e, n);
};
_.toPower = _.pow = function(e) {
  var n, r, o, t, a, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0]) return new s(hn(+l, u));
  if (l = new s(l), l.eq(1)) return l;
  if (o = s.precision, a = s.rounding, e.eq(1)) return $e(l, o, a);
  if (n = Tn(e.e / Pe), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= YS)
    return t = pm(s, l, r, o), e.s < 0 ? new s(1).div(t) : $e(t, o, a);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1) return new s(NaN);
    if ((e.d[n] & 1) == 0 && (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return r = hn(+l, u), n = r == 0 || !isFinite(r) ? Tn(u * (Math.log("0." + Cn(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (Ee = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = ts(e.times(Pr(l, o + r)), o), t.d && (t = $e(t, o + 5, 1), qo(t.d, o, a) && (n = o + 10, t = $e(ts(e.times(Pr(l, n + r)), n), n + 5, 1), +Cn(t.d).slice(o + 1, o + 15) + 1 == 1e14 && (t = $e(t, o + 1, 0)))), t.s = i, Ee = !0, s.rounding = a, $e(t, o, a));
};
_.toPrecision = function(e, n) {
  var r, o = this, t = o.constructor;
  return e === void 0 ? r = ur(o, o.e <= t.toExpNeg || o.e >= t.toExpPos) : (Nn(e, 1, Fr), n === void 0 ? n = t.rounding : Nn(n, 0, 8), o = $e(new t(o), e, n), r = ur(o, e <= o.e || o.e <= t.toExpNeg, e)), o.isNeg() && !o.isZero() ? "-" + r : r;
};
_.toSignificantDigits = _.toSD = function(e, n) {
  var r = this, o = r.constructor;
  return e === void 0 ? (e = o.precision, n = o.rounding) : (Nn(e, 1, Fr), n === void 0 ? n = o.rounding : Nn(n, 0, 8)), $e(new o(r), e, n);
};
_.toString = function() {
  var e = this, n = e.constructor, r = ur(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
_.truncated = _.trunc = function() {
  return $e(new this.constructor(this), this.e + 1, 1);
};
_.valueOf = _.toJSON = function() {
  var e = this, n = e.constructor, r = ur(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function Cn(e) {
  var n, r, o, t = e.length - 1, a = "", i = e[0];
  if (t > 0) {
    for (a += i, n = 1; n < t; n++)
      o = e[n] + "", r = Pe - o.length, r && (a += kr(r)), a += o;
    i = e[n], o = i + "", r = Pe - o.length, r && (a += kr(r));
  } else if (i === 0) return "0";
  for (; i % 10 === 0; ) i /= 10;
  return a + i;
}
function Nn(e, n, r) {
  if (e !== ~~e || e < n || e > r) throw Error(Nr + e);
}
function qo(e, n, r, o) {
  var t, a, i, l;
  for (a = e[0]; a >= 10; a /= 10) --n;
  return --n < 0 ? (n += Pe, t = 0) : (t = Math.ceil((n + 1) / Pe), n %= Pe), a = hn(10, Pe - n), l = e[t] % a | 0, o == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : i = (r < 4 && l + 1 == a || r > 3 && l + 1 == a / 2) && (e[t + 1] / a / 100 | 0) == hn(10, n - 2) - 1 || (l == a / 2 || l == 0) && (e[t + 1] / a / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (o || r < 4) && l == 9999 || !o && r > 3 && l == 4999) : i = ((o || r < 4) && l + 1 == a || !o && r > 3 && l + 1 == a / 2) && (e[t + 1] / a / 1e3 | 0) == hn(10, n - 3) - 1, i;
}
function Nt(e, n, r) {
  for (var o, t = [0], a, i = 0, l = e.length; i < l; ) {
    for (a = t.length; a--; ) t[a] *= n;
    for (t[0] += ns.indexOf(e.charAt(i++)), o = 0; o < t.length; o++) t[o] > r - 1 && (t[o + 1] === void 0 && (t[o + 1] = 0), t[o + 1] += t[o] / r | 0, t[o] %= r);
  }
  return t.reverse();
}
function WS(e, n) {
  var r, o, t;
  if (n.isZero()) return n;
  o = n.d.length, o < 32 ? (r = Math.ceil(o / 3), t = (1 / ci(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = vo(e, 1, n.times(t), new e(1));
  for (var a = r; a--; ) {
    var i = n.times(n);
    n = i.times(i).minus(i).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var Qe = /* @__PURE__ */ (function() {
  function e(o, t, a) {
    var i, l = 0, s = o.length;
    for (o = o.slice(); s--; )
      i = o[s] * t + l, o[s] = i % a | 0, l = i / a | 0;
    return l && o.unshift(l), o;
  }
  function n(o, t, a, i) {
    var l, s;
    if (a != i) s = a > i ? 1 : -1;
    else for (l = s = 0; l < a; l++) if (o[l] != t[l]) {
      s = o[l] > t[l] ? 1 : -1;
      break;
    }
    return s;
  }
  function r(o, t, a, i) {
    for (var l = 0; a--; )
      o[a] -= l, l = o[a] < t[a] ? 1 : 0, o[a] = l * i + o[a] - t[a];
    for (; !o[0] && o.length > 1; ) o.shift();
  }
  return function(o, t, a, i, l, s) {
    var u, d, c, f, v, m, h, w, $, C, b, P, O, I, Y, M, A, B, T, D, U = o.constructor, F = o.s == t.s ? 1 : -1, z = o.d, N = t.d;
    if (!z || !z[0] || !N || !N[0]) return new U(!o.s || !t.s || (z ? N && z[0] == N[0] : !N) ? NaN : z && z[0] == 0 || !N ? F * 0 : F / 0);
    for (s ? (v = 1, d = o.e - t.e) : (s = er, v = Pe, d = Tn(o.e / v) - Tn(t.e / v)), T = N.length, A = z.length, $ = new U(F), C = $.d = [], c = 0; N[c] == (z[c] || 0); c++) ;
    if (N[c] > (z[c] || 0) && d--, a == null ? (I = a = U.precision, i = U.rounding) : l ? I = a + (o.e - t.e) + 1 : I = a, I < 0)
      C.push(1), m = !0;
    else {
      if (I = I / v + 2 | 0, c = 0, T == 1) {
        for (f = 0, N = N[0], I++; (c < A || f) && I--; c++)
          Y = f * s + (z[c] || 0), C[c] = Y / N | 0, f = Y % N | 0;
        m = f || c < A;
      } else {
        for (f = s / (N[0] + 1) | 0, f > 1 && (N = e(N, f, s), z = e(z, f, s), T = N.length, A = z.length), M = T, b = z.slice(0, T), P = b.length; P < T; ) b[P++] = 0;
        D = N.slice(), D.unshift(0), B = N[0], N[1] >= s / 2 && ++B;
        do
          f = 0, u = n(N, b, T, P), u < 0 ? (O = b[0], T != P && (O = O * s + (b[1] || 0)), f = O / B | 0, f > 1 ? (f >= s && (f = s - 1), h = e(N, f, s), w = h.length, P = b.length, u = n(h, b, w, P), u == 1 && (f--, r(h, T < w ? D : N, w, s))) : (f == 0 && (u = f = 1), h = N.slice()), w = h.length, w < P && h.unshift(0), r(b, h, P, s), u == -1 && (P = b.length, u = n(N, b, T, P), u < 1 && (f++, r(b, T < P ? D : N, P, s))), P = b.length) : u === 0 && (f++, b = [0]), C[c++] = f, u && b[0] ? b[P++] = z[M] || 0 : (b = [z[M]], P = 1);
        while ((M++ < A || b[0] !== void 0) && I--);
        m = b[0] !== void 0;
      }
      C[0] || C.shift();
    }
    if (v == 1)
      $.e = d, sm = m;
    else {
      for (c = 1, f = C[0]; f >= 10; f /= 10) c++;
      $.e = c + d * v - 1, $e($, l ? a + $.e + 1 : a, i, m);
    }
    return $;
  };
})();
function $e(e, n, r, o) {
  var t, a, i, l, s, u, d, c, f, v = e.constructor;
  e: if (n != null) {
    if (c = e.d, !c) return e;
    for (t = 1, l = c[0]; l >= 10; l /= 10) t++;
    if (a = n - t, a < 0)
      a += Pe, i = n, d = c[f = 0], s = d / hn(10, t - i - 1) % 10 | 0;
    else if (f = Math.ceil((a + 1) / Pe), l = c.length, f >= l) if (o) {
      for (; l++ <= f; ) c.push(0);
      d = s = 0, t = 1, a %= Pe, i = a - Pe + 1;
    } else break e;
    else {
      for (d = l = c[f], t = 1; l >= 10; l /= 10) t++;
      a %= Pe, i = a - Pe + t, s = i < 0 ? 0 : d / hn(10, t - i - 1) % 10 | 0;
    }
    if (o = o || n < 0 || c[f + 1] !== void 0 || (i < 0 ? d : d % hn(10, t - i - 1)), u = r < 4 ? (s || o) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || o || r == 6 && (a > 0 ? i > 0 ? d / hn(10, t - i) : 0 : c[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !c[0])
      return c.length = 0, u ? (n -= e.e + 1, c[0] = hn(10, (Pe - n % Pe) % Pe), e.e = -n || 0) : c[0] = e.e = 0, e;
    if (a == 0 ? (c.length = f, l = 1, f--) : (c.length = f + 1, l = hn(10, Pe - a), c[f] = i > 0 ? (d / hn(10, t - i) % hn(10, i) | 0) * l : 0), u) for (; ; ) if (f == 0) {
      for (a = 1, i = c[0]; i >= 10; i /= 10) a++;
      for (i = c[0] += l, l = 1; i >= 10; i /= 10) l++;
      a != l && (e.e++, c[0] == er && (c[0] = 1));
      break;
    } else {
      if (c[f] += l, c[f] != er) break;
      c[f--] = 0, l = 1;
    }
    for (a = c.length; c[--a] === 0; ) c.pop();
  }
  return Ee && (e.e > v.maxE ? (e.d = null, e.e = NaN) : e.e < v.minE && (e.e = 0, e.d = [0])), e;
}
function ur(e, n, r) {
  if (!e.isFinite()) return hm(e);
  var o, t = e.e, a = Cn(e.d), i = a.length;
  return n ? (r && (o = r - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + kr(o) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (a = "0." + kr(-t - 1) + a, r && (o = r - i) > 0 && (a += kr(o))) : t >= i ? (a += kr(t + 1 - i), r && (o = r - t - 1) > 0 && (a = a + "." + kr(o))) : ((o = t + 1) < i && (a = a.slice(0, o) + "." + a.slice(o)), r && (o = r - i) > 0 && (t + 1 === i && (a += "."), a += kr(o))), a;
}
function di(e, n) {
  var r = e[0];
  for (n *= Pe; r >= 10; r /= 10) n++;
  return n;
}
function ia(e, n, r) {
  if (n > jS)
    throw Ee = !0, r && (e.precision = r), Error(um);
  return $e(new e(ta), n, 1, !0);
}
function lr(e, n, r) {
  if (n > os) throw Error(um);
  return $e(new e(aa), n, r, !0);
}
function vm(e) {
  var n = e.length - 1, r = n * Pe + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = e[0]; n >= 10; n /= 10) r++;
  }
  return r;
}
function kr(e) {
  for (var n = ""; e--; ) n += "0";
  return n;
}
function pm(e, n, r, o) {
  var t, a = new e(1), i = Math.ceil(o / Pe + 4);
  for (Ee = !1; ; ) {
    if (r % 2 && (a = a.times(n), oc(a.d, i) && (t = !0)), r = Tn(r / 2), r === 0) {
      r = a.d.length - 1, t && a.d[r] === 0 && ++a.d[r];
      break;
    }
    n = n.times(n), oc(n.d, i);
  }
  return Ee = !0, a;
}
function rc(e) {
  return e.d[e.d.length - 1] & 1;
}
function mm(e, n, r) {
  for (var o, t, a = new e(n[0]), i = 0; ++i < n.length; ) {
    if (t = new e(n[i]), !t.s) {
      a = t;
      break;
    }
    o = a.cmp(t), (o === r || o === 0 && a.s === r) && (a = t);
  }
  return a;
}
function ts(e, n) {
  var r, o, t, a, i, l, s, u = 0, d = 0, c = 0, f = e.constructor, v = f.rounding, m = f.precision;
  if (!e.d || !e.d[0] || e.e > 17) return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
  for (n == null ? (Ee = !1, s = m) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), c += 5;
  for (o = Math.log(hn(2, c)) / Math.LN10 * 2 + 5 | 0, s += o, r = a = i = new f(1), f.precision = s; ; ) {
    if (a = $e(a.times(e), s, 1), r = r.times(++d), l = i.plus(Qe(a, r, s, 1)), Cn(l.d).slice(0, s) === Cn(i.d).slice(0, s)) {
      for (t = c; t--; ) i = $e(i.times(i), s, 1);
      if (n == null) if (u < 3 && qo(i.d, s - o, v, u))
        f.precision = s += 10, r = a = l = new f(1), d = 0, u++;
      else return $e(i, f.precision = m, v, Ee = !0);
      else
        return f.precision = m, i;
    }
    i = l;
  }
}
function Pr(e, n) {
  var r, o, t, a, i, l, s, u, d, c, f, v = 1, m = 10, h = e, w = h.d, $ = h.constructor, C = $.rounding, b = $.precision;
  if (h.s < 0 || !w || !w[0] || !h.e && w[0] == 1 && w.length == 1) return new $(w && !w[0] ? -1 / 0 : h.s != 1 ? NaN : w ? 0 : h);
  if (n == null ? (Ee = !1, d = b) : d = n, $.precision = d += m, r = Cn(w), o = r.charAt(0), Math.abs(a = h.e) < 15e14) {
    for (; o < 7 && o != 1 || o == 1 && r.charAt(1) > 3; )
      h = h.times(e), r = Cn(h.d), o = r.charAt(0), v++;
    a = h.e, o > 1 ? (h = new $("0." + r), a++) : h = new $(o + "." + r.slice(1));
  } else
    return u = ia($, d + 2, b).times(a + ""), h = Pr(new $(o + "." + r.slice(1)), d - m).plus(u), $.precision = b, n == null ? $e(h, b, C, Ee = !0) : h;
  for (c = h, s = i = h = Qe(h.minus(1), h.plus(1), d, 1), f = $e(h.times(h), d, 1), t = 3; ; ) {
    if (i = $e(i.times(f), d, 1), u = s.plus(Qe(i, new $(t), d, 1)), Cn(u.d).slice(0, d) === Cn(s.d).slice(0, d))
      if (s = s.times(2), a !== 0 && (s = s.plus(ia($, d + 2, b).times(a + ""))), s = Qe(s, new $(v), d, 1), n == null) if (qo(s.d, d - m, C, l))
        $.precision = d += m, u = i = h = Qe(c.minus(1), c.plus(1), d, 1), f = $e(h.times(h), d, 1), t = l = 1;
      else return $e(s, $.precision = b, C, Ee = !0);
      else
        return $.precision = b, s;
    s = u, t += 2;
  }
}
function hm(e) {
  return String(e.s * e.s / 0);
}
function Vt(e, n) {
  var r, o, t;
  for ((r = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (o = n.search(/e/i)) > 0 ? (r < 0 && (r = o), r += +n.slice(o + 1), n = n.substring(0, o)) : r < 0 && (r = n.length), o = 0; n.charCodeAt(o) === 48; o++) ;
  for (t = n.length; n.charCodeAt(t - 1) === 48; --t) ;
  if (n = n.slice(o, t), n) {
    if (t -= o, e.e = r = r - o - 1, e.d = [], o = (r + 1) % Pe, r < 0 && (o += Pe), o < t) {
      for (o && e.d.push(+n.slice(0, o)), t -= Pe; o < t; ) e.d.push(+n.slice(o, o += Pe));
      n = n.slice(o), o = Pe - n.length;
    } else o -= t;
    for (; o--; ) n += "0";
    e.d.push(+n), Ee && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function KS(e, n) {
  var r, o, t, a, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), fm.test(n)) return Vt(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (US.test(n))
    r = 16, n = n.toLowerCase();
  else if (FS.test(n)) r = 2;
  else if (HS.test(n)) r = 8;
  else throw Error(Nr + n);
  for (a = n.search(/p/i), a > 0 ? (s = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, o = e.constructor, i && (n = n.replace(".", ""), l = n.length, a = l - a, t = pm(o, new o(r), a, a * 2)), u = Nt(n, r, er), d = u.length - 1, a = d; u[a] === 0; --a) u.pop();
  return a < 0 ? new o(e.s * 0) : (e.e = di(u, d), e.d = u, Ee = !1, i && (e = Qe(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? hn(2, s) : zr.pow(2, s))), Ee = !0, e);
}
function qS(e, n) {
  var r, o = n.d.length;
  if (o < 3) return n.isZero() ? n : vo(e, 2, n, n);
  r = 1.4 * Math.sqrt(o), r = r > 16 ? 16 : r | 0, n = n.times(1 / ci(5, r)), n = vo(e, 2, n, n);
  for (var t, a = new e(5), i = new e(16), l = new e(20); r--; )
    t = n.times(n), n = n.times(a.plus(t.times(i.times(t).minus(l))));
  return n;
}
function vo(e, n, r, o, t) {
  var a, i, l, s, u = 1, d = e.precision, c = Math.ceil(d / Pe);
  for (Ee = !1, s = r.times(r), l = new e(o); ; ) {
    if (i = Qe(l.times(s), new e(n++ * n++), d, 1), l = t ? o.plus(i) : o.minus(i), o = Qe(i.times(s), new e(n++ * n++), d, 1), i = l.plus(o), i.d[c] !== void 0) {
      for (a = c; i.d[a] === l.d[a] && a--; ) ;
      if (a == -1) break;
    }
    a = l, l = o, o = i, i = a, u++;
  }
  return Ee = !0, i.d.length = c + 1, i;
}
function ci(e, n) {
  for (var r = e; --n; ) r *= e;
  return r;
}
function gm(e, n) {
  var r, o = n.s < 0, t = lr(e, e.precision, 1), a = t.times(0.5);
  if (n = n.abs(), n.lte(a))
    return mr = o ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero()) mr = o ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(a))
      return mr = rc(r) ? o ? 2 : 3 : o ? 4 : 1, n;
    mr = rc(r) ? o ? 1 : 4 : o ? 3 : 2;
  }
  return n.minus(t).abs();
}
function zu(e, n, r, o) {
  var t, a, i, l, s, u, d, c, f, v = e.constructor, m = r !== void 0;
  if (m ? (Nn(r, 1, Fr), o === void 0 ? o = v.rounding : Nn(o, 0, 8)) : (r = v.precision, o = v.rounding), !e.isFinite()) d = hm(e);
  else {
    for (d = ur(e), i = d.indexOf("."), m ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, i >= 0 && (d = d.replace(".", ""), f = new v(1), f.e = d.length - i, f.d = Nt(ur(f), 10, t), f.e = f.d.length), c = Nt(d, 10, t), a = s = c.length; c[--s] == 0; ) c.pop();
    if (!c[0]) d = m ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new v(e), e.d = c, e.e = a, e = Qe(e, f, r, o, 0, t), c = e.d, a = e.e, u = sm), i = c[r], l = t / 2, u = u || c[r + 1] !== void 0, u = o < 4 ? (i !== void 0 || u) && (o === 0 || o === (e.s < 0 ? 3 : 2)) : i > l || i === l && (o === 4 || u || o === 6 && c[r - 1] & 1 || o === (e.s < 0 ? 8 : 7)), c.length = r, u) for (; ++c[--r] > t - 1; )
        c[r] = 0, r || (++a, c.unshift(1));
      for (s = c.length; !c[s - 1]; --s) ;
      for (i = 0, d = ""; i < s; i++) d += ns.charAt(c[i]);
      if (m) {
        if (s > 1) if (n == 16 || n == 8) {
          for (i = n == 16 ? 4 : 3, --s; s % i; s++) d += "0";
          for (c = Nt(d, t, n), s = c.length; !c[s - 1]; --s) ;
          for (i = 1, d = "1."; i < s; i++) d += ns.charAt(c[i]);
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
function oc(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function XS(e) {
  return new this(e).abs();
}
function GS(e) {
  return new this(e).acos();
}
function ZS(e) {
  return new this(e).acosh();
}
function JS(e, n) {
  return new this(e).plus(n);
}
function QS(e) {
  return new this(e).asin();
}
function xS(e) {
  return new this(e).asinh();
}
function _S(e) {
  return new this(e).atan();
}
function e2(e) {
  return new this(e).atanh();
}
function n2(e, n) {
  e = new this(e), n = new this(n);
  var r, o = this.precision, t = this.rounding, a = o + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = lr(this, a, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? lr(this, o, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = lr(this, a, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = a, this.rounding = 1, r = this.atan(Qe(e, n, a, 1)), n = lr(this, a, 1), this.precision = o, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Qe(e, n, a, 1)), r;
}
function r2(e) {
  return new this(e).cbrt();
}
function o2(e) {
  return $e(e = new this(e), e.e + 1, 2);
}
function t2(e, n, r) {
  return new this(e).clamp(n, r);
}
function a2(e) {
  if (!e || typeof e != "object") throw Error(ui + "Object expected");
  var n, r, o, t = e.defaults === !0, a = [
    "precision",
    1,
    Fr,
    "rounding",
    0,
    8,
    "toExpNeg",
    -oo,
    0,
    "toExpPos",
    0,
    oo,
    "maxE",
    0,
    oo,
    "minE",
    -oo,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < a.length; n += 3)
    if (r = a[n], t && (this[r] = rs[r]), (o = e[r]) !== void 0) if (Tn(o) === o && o >= a[n + 1] && o <= a[n + 2]) this[r] = o;
    else throw Error(Nr + r + ": " + o);
  if (r = "crypto", t && (this[r] = rs[r]), (o = e[r]) !== void 0) if (o === !0 || o === !1 || o === 0 || o === 1) if (o) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[r] = !0;
  else throw Error(dm);
  else this[r] = !1;
  else throw Error(Nr + r + ": " + o);
  return this;
}
function i2(e) {
  return new this(e).cos();
}
function l2(e) {
  return new this(e).cosh();
}
function bm(e) {
  var n, r, o;
  function t(a) {
    var i, l, s, u = this;
    if (!(u instanceof t)) return new t(a);
    if (u.constructor = t, tc(a)) {
      u.s = a.s, Ee ? !a.d || a.e > t.maxE ? (u.e = NaN, u.d = null) : a.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = a.e, u.d = a.d.slice()) : (u.e = a.e, u.d = a.d ? a.d.slice() : a.d);
      return;
    }
    if (s = typeof a, s === "number") {
      if (a === 0) {
        u.s = 1 / a < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (a < 0 ? (a = -a, u.s = -1) : u.s = 1, a === ~~a && a < 1e7) {
        for (i = 0, l = a; l >= 10; l /= 10) i++;
        Ee ? i > t.maxE ? (u.e = NaN, u.d = null) : i < t.minE ? (u.e = 0, u.d = [0]) : (u.e = i, u.d = [a]) : (u.e = i, u.d = [a]);
        return;
      }
      if (a * 0 !== 0) {
        a || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return Vt(u, a.toString());
    }
    if (s === "string")
      return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (l === 43 && (a = a.slice(1)), u.s = 1), fm.test(a) ? Vt(u, a) : KS(u, a);
    if (s === "bigint")
      return a < 0 ? (a = -a, u.s = -1) : u.s = 1, Vt(u, a.toString());
    throw Error(Nr + a);
  }
  if (t.prototype = _, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = a2, t.clone = bm, t.isDecimal = tc, t.abs = XS, t.acos = GS, t.acosh = ZS, t.add = JS, t.asin = QS, t.asinh = xS, t.atan = _S, t.atanh = e2, t.atan2 = n2, t.cbrt = r2, t.ceil = o2, t.clamp = t2, t.cos = i2, t.cosh = l2, t.div = s2, t.exp = u2, t.floor = d2, t.hypot = c2, t.ln = f2, t.log = v2, t.log10 = m2, t.log2 = p2, t.max = h2, t.min = g2, t.mod = b2, t.mul = y2, t.pow = w2, t.random = k2, t.round = $2, t.sign = C2, t.sin = S2, t.sinh = O2, t.sqrt = P2, t.sub = z2, t.sum = T2, t.tan = E2, t.tanh = I2, t.trunc = B2, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (o = [
      "precision",
      "rounding",
      "toExpNeg",
      "toExpPos",
      "maxE",
      "minE",
      "modulo",
      "crypto"
    ], n = 0; n < o.length; ) e.hasOwnProperty(r = o[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function s2(e, n) {
  return new this(e).div(n);
}
function u2(e) {
  return new this(e).exp();
}
function d2(e) {
  return $e(e = new this(e), e.e + 1, 3);
}
function c2() {
  var e, n, r = new this(0);
  for (Ee = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      r.d && (r = r.plus(n.times(n)));
    else {
      if (n.s)
        return Ee = !0, new this(1 / 0);
      r = n;
    }
  return Ee = !0, r.sqrt();
}
function tc(e) {
  return e instanceof zr || e && e.toStringTag === cm || !1;
}
function f2(e) {
  return new this(e).ln();
}
function v2(e, n) {
  return new this(e).log(n);
}
function p2(e) {
  return new this(e).log(2);
}
function m2(e) {
  return new this(e).log(10);
}
function h2() {
  return mm(this, arguments, -1);
}
function g2() {
  return mm(this, arguments, 1);
}
function b2(e, n) {
  return new this(e).mod(n);
}
function y2(e, n) {
  return new this(e).mul(n);
}
function w2(e, n) {
  return new this(e).pow(n);
}
function k2(e) {
  var n, r, o, t, a = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : Nn(e, 1, Fr), o = Math.ceil(e / Pe), this.crypto) if (crypto.getRandomValues)
    for (n = crypto.getRandomValues(new Uint32Array(o)); a < o; )
      t = n[a], t >= 429e7 ? n[a] = crypto.getRandomValues(new Uint32Array(1))[0] : l[a++] = t % 1e7;
  else if (crypto.randomBytes) {
    for (n = crypto.randomBytes(o *= 4); a < o; )
      t = n[a] + (n[a + 1] << 8) + (n[a + 2] << 16) + ((n[a + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, a) : (l.push(t % 1e7), a += 4);
    a = o / 4;
  } else throw Error(dm);
  else for (; a < o; ) l[a++] = Math.random() * 1e7 | 0;
  for (o = l[--a], e %= Pe, o && e && (t = hn(10, Pe - e), l[a] = (o / t | 0) * t); l[a] === 0; a--) l.pop();
  if (a < 0)
    r = 0, l = [0];
  else {
    for (r = -1; l[0] === 0; r -= Pe) l.shift();
    for (o = 1, t = l[0]; t >= 10; t /= 10) o++;
    o < Pe && (r -= Pe - o);
  }
  return i.e = r, i.d = l, i;
}
function $2(e) {
  return $e(e = new this(e), e.e + 1, this.rounding);
}
function C2(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function S2(e) {
  return new this(e).sin();
}
function O2(e) {
  return new this(e).sinh();
}
function P2(e) {
  return new this(e).sqrt();
}
function z2(e, n) {
  return new this(e).sub(n);
}
function T2() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (Ee = !1; r.s && ++e < n.length; ) r = r.plus(n[e]);
  return Ee = !0, $e(r, this.precision, this.rounding);
}
function E2(e) {
  return new this(e).tan();
}
function I2(e) {
  return new this(e).tanh();
}
function B2(e) {
  return $e(e = new this(e), e.e + 1, 1);
}
_[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = _.toString;
_[Symbol.toStringTag] = "Decimal";
var zr = _.constructor = bm(rs);
ta = new zr(ta);
aa = new zr(aa);
var ym = {
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
  onBeforeChange: R(),
  onChange: R(),
  onIncrement: R(),
  onDecrement: R(),
  "onUpdate:modelValue": R()
}, ac = 100, ic = 600, { name: D2, n: M2, classes: A2 } = ne("counter"), N2 = [
  "inputmode",
  "readonly",
  "disabled"
];
function V2(e, n) {
  const r = x("var-icon"), o = x("var-button"), t = x("var-form-details");
  return g(), S("div", { class: p(e.classes(e.n(), e.n("$--box"))) }, [V("div", je({
    class: e.classes(e.n("controller"), e.formatElevation(e.elevation, 2), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
    style: { background: e.color }
  }, e.$attrs), [
    X(o, {
      class: p(e.classes(e.n("decrement-button"), [!e.decrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
      style: q({
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
      default: ve(() => [X(r, { name: "minus" })]),
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
    Me(V("input", {
      "onUpdate:modelValue": n[0] || (n[0] = (a) => e.inputValue = a),
      class: p(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
      style: q({
        width: e.toSizeUnit(e.inputWidth),
        fontSize: e.toSizeUnit(e.inputTextSize)
      }),
      inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
      readonly: e.readonly || e.formReadonly,
      disabled: e.disabled || e.formDisabled || e.disableInput,
      onChange: n[1] || (n[1] = (...a) => e.handleChange && e.handleChange(...a))
    }, null, 46, N2), [[Of, e.inputValue]]),
    X(o, {
      class: p(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
      style: q({
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
      default: ve(() => [X(r, { name: "plus" })]),
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
  ], 16), X(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var wm = ee({
  name: D2,
  components: {
    VarButton: Dn,
    VarIcon: Je,
    VarFormDetails: Bn
  },
  directives: { Ripple: sn },
  inheritAttrs: !1,
  props: ym,
  setup(e) {
    const n = y(""), { bindForm: r, form: o } = Wn(), { errorMessage: t, validateWithTrigger: a, validate: i, resetValidation: l } = jn(), { readonly: s, disabled: u } = o ?? {}, d = E(() => {
      const { max: z, modelValue: N } = e;
      return z != null && H(N) >= H(z);
    }), c = E(() => {
      const { min: z, modelValue: N } = e;
      return z != null && H(N) <= H(z);
    });
    let f, v, m, h;
    k(r, {
      reset: C,
      validate: w,
      resetValidation: l
    }), pe(() => e.modelValue, (z) => {
      U(b(String(z))), k(e.onChange, H(z));
    }), U(b(String(e.modelValue)));
    function w() {
      return i(e.rules, e.modelValue);
    }
    function $(z) {
      Ve(() => {
        const { validateTrigger: N, rules: ie, modelValue: J } = e;
        a(N, z, ie, J);
      });
    }
    function C() {
      const { min: z } = e;
      k(e["onUpdate:modelValue"], z != null ? H(z) : 0), l();
    }
    function b(z) {
      const { decimalLength: N, max: ie, min: J } = e;
      let oe = H(z);
      return ie != null && oe > H(ie) && (oe = H(ie)), J != null && oe < H(J) && (oe = H(J)), z = String(oe), N != null && (z = oe.toFixed(H(N))), z;
    }
    function P(z) {
      const { lazyChange: N, onBeforeChange: ie } = e, { value: J } = z.target, oe = b(J);
      N ? k(ie, H(oe), F) : U(oe), $("onInputChange");
    }
    function O() {
      const { disabled: z, readonly: N, disableDecrement: ie, decrementButton: J, lazyChange: oe, step: ze, modelValue: te, onDecrement: W, onBeforeChange: Z } = e;
      if (u?.value || s?.value || z || N || ie || !J || c.value) return;
      const se = b(new zr(H(te)).minus(new zr(H(ze))).toString()), he = H(se);
      k(W, he), oe ? k(Z, he, F) : (U(se), $("onDecrement"));
    }
    function I() {
      const { disabled: z, readonly: N, disableIncrement: ie, incrementButton: J, lazyChange: oe, step: ze, modelValue: te, onIncrement: W, onBeforeChange: Z } = e;
      if (u?.value || s?.value || z || N || ie || !J || d.value) return;
      const se = b(new zr(H(te)).plus(new zr(H(ze))).toString()), he = H(se);
      k(W, he), oe ? k(Z, he, F) : (U(se), $("onIncrement"));
    }
    function Y() {
      const { press: z, lazyChange: N } = e;
      !z || N || (h = window.setTimeout(() => {
        D();
      }, ic));
    }
    function M() {
      const { press: z, lazyChange: N } = e;
      !z || N || (m = window.setTimeout(() => {
        T();
      }, ic));
    }
    function A() {
      v && clearTimeout(v), h && clearTimeout(h);
    }
    function B() {
      f && clearTimeout(f), m && clearTimeout(m);
    }
    function T() {
      f = window.setTimeout(() => {
        I(), T();
      }, ac);
    }
    function D() {
      v = window.setTimeout(() => {
        O(), D();
      }, ac);
    }
    function U(z) {
      n.value = z;
      const N = H(z);
      k(e["onUpdate:modelValue"], N);
    }
    function F(z) {
      U(b(String(z))), $("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: d,
      isMin: c,
      n: M2,
      classes: A2,
      formatElevation: vn,
      validate: w,
      reset: C,
      resetValidation: l,
      handleChange: P,
      decrement: O,
      increment: I,
      pressDecrement: Y,
      pressIncrement: M,
      releaseDecrement: A,
      releaseIncrement: B,
      toSizeUnit: Te,
      toNumber: H
    };
  }
});
wm.render = V2;
var fi = wm;
ae(fi);
de(fi, ym);
var QB = fi, as = fi;
var km = 3600, $m = km * 24, R2 = $m * 7, ct = 1e3, lc = 60 * ct, L2 = km * ct, F2 = $m * ct, U2 = R2 * ct, Cm = "millisecond", Rt = "second", Lt = "minute", Ft = "hour";
var sc = "week", Cr = "month", H2 = "quarter", Po = "year", zo = "date";
var Y2 = "Invalid Date", j2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, W2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, K2 = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
  ordinal: function(n) {
    var r = [
      "th",
      "st",
      "nd",
      "rd"
    ], o = n % 100;
    return "[" + n + (r[(o - 20) % 10] || r[o] || r[0]) + "]";
  }
}, is = function(n, r, o) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(o) + n;
}, q2 = function(n) {
  var r = -n.utcOffset(), o = Math.abs(r), t = Math.floor(o / 60), a = o % 60;
  return (r <= 0 ? "+" : "-") + is(t, 2, "0") + ":" + is(a, 2, "0");
}, X2 = function e(n, r) {
  if (n.date() < r.date()) return -e(r, n);
  var o = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(o, Cr), a = r - t < 0, i = n.clone().add(o + (a ? -1 : 1), Cr);
  return +(-(o + (r - t) / (a ? t - i : i - t)) || 0);
}, G2 = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, Z2 = function(n) {
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
}, J2 = function(n) {
  return n === void 0;
}, Q2 = {
  s: is,
  z: q2,
  m: X2,
  a: G2,
  p: Z2,
  u: J2
}, Do = "en", qr = {};
qr[Do] = K2;
var Sm = "$isDayjsObject", Tu = function(n) {
  return n instanceof vi || !!(n && n[Sm]);
}, la = function e(n, r, o) {
  var t;
  if (!n) return Do;
  if (typeof n == "string") {
    var a = n.toLowerCase();
    qr[a] && (t = a), r && (qr[a] = r, t = a);
    var i = n.split("-");
    if (!t && i.length > 1) return e(i[0]);
  } else {
    var l = n.name;
    qr[l] = n, t = l;
  }
  return !o && t && (Do = t), t || !o && Do;
}, le = function(n, r) {
  if (Tu(n)) return n.clone();
  var o = typeof r == "object" ? r : {};
  return o.date = n, o.args = arguments, new vi(o);
}, x2 = function(n, r) {
  return le(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
  });
}, Ge = Q2;
Ge.l = la;
Ge.i = Tu;
Ge.w = x2;
var _2 = function(n) {
  var r = n.date, o = n.utc;
  if (r === null) return /* @__PURE__ */ new Date(NaN);
  if (Ge.u(r)) return /* @__PURE__ */ new Date();
  if (r instanceof Date) return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(j2);
    if (t) {
      var a = t[2] - 1 || 0, i = (t[7] || "0").substring(0, 3);
      return o ? new Date(Date.UTC(t[1], a, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i)) : new Date(t[1], a, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i);
    }
  }
  return new Date(r);
}, vi = /* @__PURE__ */ (function() {
  function e(r) {
    this.$L = la(r.locale, null, !0), this.parse(r), this.$x = this.$x || r.x || {}, this[Sm] = !0;
  }
  var n = e.prototype;
  return n.parse = function(o) {
    this.$d = _2(o), this.init();
  }, n.init = function() {
    var o = this.$d;
    this.$y = o.getFullYear(), this.$M = o.getMonth(), this.$D = o.getDate(), this.$W = o.getDay(), this.$H = o.getHours(), this.$m = o.getMinutes(), this.$s = o.getSeconds(), this.$ms = o.getMilliseconds();
  }, n.$utils = function() {
    return Ge;
  }, n.isValid = function() {
    return this.$d.toString() !== Y2;
  }, n.isSame = function(o, t) {
    var a = le(o);
    return this.startOf(t) <= a && a <= this.endOf(t);
  }, n.isAfter = function(o, t) {
    return le(o) < this.startOf(t);
  }, n.isBefore = function(o, t) {
    return this.endOf(t) < le(o);
  }, n.$g = function(o, t, a) {
    return Ge.u(o) ? this[t] : this.set(a, o);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(o, t) {
    var a = this, i = Ge.u(t) ? !0 : t, l = Ge.p(o), s = function($, C) {
      var b = Ge.w(a.$u ? Date.UTC(a.$y, C, $) : new Date(a.$y, C, $), a);
      return i ? b : b.endOf("day");
    }, u = function($, C) {
      return Ge.w(a.toDate()[$].apply(a.toDate("s"), (i ? [
        0,
        0,
        0,
        0
      ] : [
        23,
        59,
        59,
        999
      ]).slice(C)), a);
    }, d = this.$W, c = this.$M, f = this.$D, v = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case Po:
        return i ? s(1, 0) : s(31, 11);
      case Cr:
        return i ? s(1, c) : s(0, c + 1);
      case sc:
        var m = this.$locale().weekStart || 0, h = (d < m ? d + 7 : d) - m;
        return s(i ? f - h : f + (6 - h), c);
      case "day":
      case zo:
        return u(v + "Hours", 0);
      case Ft:
        return u(v + "Minutes", 1);
      case Lt:
        return u(v + "Seconds", 2);
      case Rt:
        return u(v + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(o) {
    return this.startOf(o, !1);
  }, n.$set = function(o, t) {
    var a, i = Ge.p(o), l = "set" + (this.$u ? "UTC" : ""), s = (a = {}, a.day = l + "Date", a[zo] = l + "Date", a[Cr] = l + "Month", a[Po] = l + "FullYear", a[Ft] = l + "Hours", a[Lt] = l + "Minutes", a[Rt] = l + "Seconds", a[Cm] = l + "Milliseconds", a)[i], u = i === "day" ? this.$D + (t - this.$W) : t;
    if (i === "month" || i === "year") {
      var d = this.clone().set(zo, 1);
      d.$d[s](u), d.init(), this.$d = d.set(zo, Math.min(this.$D, d.daysInMonth())).$d;
    } else s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(o, t) {
    return this.clone().$set(o, t);
  }, n.get = function(o) {
    return this[Ge.p(o)]();
  }, n.add = function(o, t) {
    var a = this, i;
    o = Number(o);
    var l = Ge.p(t), s = function(f) {
      var v = le(a);
      return Ge.w(v.date(v.date() + Math.round(f * o)), a);
    };
    if (l === "month") return this.set(Cr, this.$M + o);
    if (l === "year") return this.set(Po, this.$y + o);
    if (l === "day") return s(1);
    if (l === "week") return s(7);
    var u = (i = {}, i.minute = 6e4, i.hour = 36e5, i.second = 1e3, i)[l] || 1, d = this.$d.getTime() + o * u;
    return Ge.w(d, this);
  }, n.subtract = function(o, t) {
    return this.add(o * -1, t);
  }, n.format = function(o) {
    var t = this, a = this.$locale();
    if (!this.isValid()) return a.invalidDate || "Invalid Date";
    var i = o || "YYYY-MM-DDTHH:mm:ssZ", l = Ge.z(this), s = this.$H, u = this.$m, d = this.$M, c = a.weekdays, f = a.months, v = a.meridiem, m = function(b, P, O, I) {
      return b && (b[P] || b(t, i)) || O[P].slice(0, I);
    }, h = function(b) {
      return Ge.s(s % 12 || 12, b, "0");
    }, w = v || function(C, b, P) {
      var O = C < 12 ? "AM" : "PM";
      return P ? O.toLowerCase() : O;
    }, $ = function(b) {
      switch (b) {
        case "YY":
          return String(t.$y).slice(-2);
        case "YYYY":
          return Ge.s(t.$y, 4, "0");
        case "M":
          return d + 1;
        case "MM":
          return Ge.s(d + 1, 2, "0");
        case "MMM":
          return m(a.monthsShort, d, f, 3);
        case "MMMM":
          return m(f, d);
        case "D":
          return t.$D;
        case "DD":
          return Ge.s(t.$D, 2, "0");
        case "d":
          return String(t.$W);
        case "dd":
          return m(a.weekdaysMin, t.$W, c, 2);
        case "ddd":
          return m(a.weekdaysShort, t.$W, c, 3);
        case "dddd":
          return c[t.$W];
        case "H":
          return String(s);
        case "HH":
          return Ge.s(s, 2, "0");
        case "h":
          return h(1);
        case "hh":
          return h(2);
        case "a":
          return w(s, u, !0);
        case "A":
          return w(s, u, !1);
        case "m":
          return String(u);
        case "mm":
          return Ge.s(u, 2, "0");
        case "s":
          return String(t.$s);
        case "ss":
          return Ge.s(t.$s, 2, "0");
        case "SSS":
          return Ge.s(t.$ms, 3, "0");
        case "Z":
          return l;
        default:
          break;
      }
      return null;
    };
    return i.replace(W2, function(C, b) {
      return b || $(C) || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(o, t, a) {
    var i = this, l = Ge.p(t), s = le(o), u = (s.utcOffset() - this.utcOffset()) * lc, d = this - s, c = function() {
      return Ge.m(i, s);
    }, f;
    switch (l) {
      case Po:
        f = c() / 12;
        break;
      case Cr:
        f = c();
        break;
      case H2:
        f = c() / 3;
        break;
      case sc:
        f = (d - u) / U2;
        break;
      case "day":
        f = (d - u) / F2;
        break;
      case Ft:
        f = d / L2;
        break;
      case Lt:
        f = d / lc;
        break;
      case Rt:
        f = d / ct;
        break;
      default:
        f = d;
        break;
    }
    return a ? f : Ge.a(f);
  }, n.daysInMonth = function() {
    return this.endOf(Cr).$D;
  }, n.$locale = function() {
    return qr[this.$L];
  }, n.locale = function(o, t) {
    if (!o) return this.$L;
    var a = this.clone(), i = la(o, t, !0);
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
})(), Om = vi.prototype;
le.prototype = Om;
[
  ["$ms", Cm],
  ["$s", Rt],
  ["$m", Lt],
  ["$H", Ft],
  ["$W", "day"],
  ["$M", Cr],
  ["$y", Po],
  ["$D", zo]
].forEach(function(e) {
  Om[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
le.extend = function(e, n) {
  return e.$i || (e(n, vi, le), e.$i = !0), le;
};
le.locale = la;
le.isDayjs = Tu;
le.unix = function(e) {
  return le(e * 1e3);
};
le.en = qr[Do];
le.Ls = qr;
le.p = {};
var To = [
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
], Eo = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6"
], Pm = {
  modelValue: [String, Array],
  type: {
    type: String,
    default: "date"
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
  readonly: Boolean,
  multiple: Boolean,
  range: Boolean,
  touchable: {
    type: Boolean,
    default: !0
  },
  onPreview: R(),
  onChange: R(),
  "onUpdate:modelValue": R()
}, zm = (function(e, n) {
  n.prototype.isSameOrAfter = function(r, o) {
    return this.isSame(r, o) || this.isAfter(r, o);
  };
}), Tm = (function(e, n) {
  n.prototype.isSameOrBefore = function(r, o) {
    return this.isSame(r, o) || this.isBefore(r, o);
  };
}), { n: e3 } = ne("date-picker-header");
function n3(e, n) {
  const r = x("var-icon"), o = x("var-button");
  return g(), S("div", { class: p(e.n()) }, [
    X(o, {
      class: p(e.n("arrow")),
      "var-date-picker-header-cover": "",
      round: "",
      text: "",
      disabled: e.disabled.left,
      onClick: n[0] || (n[0] = (t) => e.checkDate("prev"))
    }, {
      default: ve(() => [X(r, { name: "chevron-left" })]),
      _: 1
    }, 8, ["class", "disabled"]),
    V("div", {
      class: p(e.n("value")),
      onClick: n[1] || (n[1] = (t) => e.$emit("check-panel"))
    }, [X(en, { name: `var-date-picker${e.reverse ? "-reverse" : ""}-translatex` }, {
      default: ve(() => [(g(), S("div", { key: e.showDate }, ue(e.showDate), 1))]),
      _: 1
    }, 8, ["name"])], 2),
    X(o, {
      class: p(e.n("arrow")),
      "var-date-picker-header-cover": "",
      round: "",
      text: "",
      disabled: e.disabled.right,
      onClick: n[2] || (n[2] = (t) => e.checkDate("next"))
    }, {
      default: ve(() => [X(r, { name: "chevron-right" })]),
      _: 1
    }, 8, ["class", "disabled"])
  ], 2);
}
var Em = ee({
  name: "PanelHeader",
  components: {
    VarButton: Dn,
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
    const r = y(!1), o = y(0), { t } = ar(), a = E(() => {
      var l;
      const { date: s, type: u } = e, { previewMonth: d, previewYear: c } = s;
      if (u === "year") return c;
      if (u === "month") return H(c) + o.value;
      const f = (l = (t || an)("datePickerMonthDict")) == null ? void 0 : l[d].name;
      return (t || an)("lang") === "zh-CN" ? `${c} ${f}` : `${f} ${c}`;
    }), i = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (n("check-date", l), r.value = l === "prev", o.value += l === "prev" ? -1 : 1);
    };
    return pe(() => e.date, () => {
      o.value = 0;
    }), {
      n: e3,
      reverse: r,
      showDate: a,
      checkDate: i
    };
  }
});
Em.render = n3;
var Eu = Em, r3 = Object.defineProperty, uc = Object.getOwnPropertySymbols, o3 = Object.prototype.hasOwnProperty, t3 = Object.prototype.propertyIsEnumerable, dc = (e, n, r) => n in e ? r3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, a3 = (e, n) => {
  for (var r in n || (n = {})) o3.call(n, r) && dc(e, r, n[r]);
  if (uc)
    for (var r of uc(n)) t3.call(n, r) && dc(e, r, n[r]);
  return e;
};
le.extend(Tm);
le.extend(zm);
var { n: _r, classes: i3 } = ne("day-picker"), { n: kt } = ne("date-picker");
function l3(e, n) {
  const r = x("panel-header"), o = x("var-button");
  return g(), S("div", { class: p(e.n()) }, [V("div", { class: p(e.n("content")) }, [X(r, {
    ref: "headerEl",
    type: "day",
    date: e.preview,
    disabled: e.panelBtnDisabled,
    onCheckPanel: e.clickMonth,
    onCheckDate: e.checkDate
  }, null, 8, [
    "date",
    "disabled",
    "onCheckPanel",
    "onCheckDate"
  ]), X(en, { name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex` }, {
    default: ve(() => [(g(), S("div", { key: e.panelKey }, [V("ul", { class: p(e.n("head")) }, [(g(!0), S(De, null, Ke(e.sortWeekList, (t) => (g(), S("li", { key: t }, ue(e.getDayAbbr(t)), 1))), 128))], 2), V("ul", { class: p(e.n("body")) }, [(g(!0), S(De, null, Ke(e.days, (t, a) => (g(), S("li", { key: a }, [X(o, je({
      type: "primary",
      "var-day-picker-cover": "",
      round: "",
      ripple: !1,
      elevation: e.componentProps.buttonElevation
    }, { ref_for: !0 }, a3({}, e.buttonProps(t)), { onClick: (i) => e.chooseDay(t, i) }), {
      default: ve(() => [Ie(ue(e.filterDay(t)), 1)]),
      _: 2
    }, 1040, ["elevation", "onClick"])]))), 128))], 2)]))]),
    _: 1
  }, 8, ["name"])], 2)], 2);
}
var Im = ee({
  name: "DayPickerPanel",
  components: {
    VarButton: Dn,
    PanelHeader: Eu
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
    const [r, o, t] = e.current.split("-"), a = y([]), i = y(!1), l = y(0), s = y(null), u = nn({
      left: !1,
      right: !1
    }), { t: d } = ar(), c = E(() => e.preview.previewYear === r && e.preview.previewMonth === o), f = E(() => e.choose.chooseYear === e.preview.previewYear && e.choose.chooseMonth === e.preview.previewMonth), v = E(() => {
      const M = Eo.findIndex((A) => A === e.componentProps.firstDayOfWeek);
      return M === -1 || M === 0 ? Eo : [...Eo.slice(M), ...Eo.slice(0, M)];
    }), m = (M) => {
      var A, B;
      return (B = (A = (d || an)("datePickerWeekDict")) == null ? void 0 : A[M].abbr) != null ? B : "";
    }, h = (M) => M > 0 ? M : "", w = () => {
      const { preview: { previewMonth: M, previewYear: A } } = e, B = le(`${A}-${M}`).daysInMonth(), T = le(`${A}-${M}-01`).day(), D = v.value.findIndex((U) => U === `${T}`);
      a.value = [...Array(D).fill(-1), ...Array.from(Array(B + 1).keys())].filter((U) => U);
    }, $ = () => {
      const { preview: { previewYear: M, previewMonth: A }, componentProps: { max: B, min: T } } = e;
      B && (u.right = !le(`${M}-${H(A) + 1}`).isSameOrBefore(le(B), "month")), T && (u.left = !le(`${M}-${H(A) - 1}`).isSameOrAfter(le(T), "month"));
    }, C = (M) => {
      const { preview: { previewYear: A, previewMonth: B }, componentProps: { min: T, max: D } } = e;
      let U = !0, F = !0;
      const z = `${A}-${B}-${M}`;
      return D && (U = le(z).isSameOrBefore(le(D), "day")), T && (F = le(z).isSameOrAfter(le(T), "day")), U && F;
    }, b = (M) => {
      const { choose: { chooseDays: A, chooseRangeDay: B }, componentProps: { range: T } } = e;
      if (T) {
        if (!B.length) return !1;
        const D = le(M).isSameOrBefore(le(B[1]), "day"), U = le(M).isSameOrAfter(le(B[0]), "day");
        return D && U;
      }
      return A.includes(M);
    }, P = (M) => {
      if (M < 0) return {
        text: !0,
        outline: !1,
        textColor: "",
        class: _r("button"),
        disabled: !0
      };
      const { choose: { chooseDay: A }, preview: { previewYear: B, previewMonth: T }, componentProps: { allowedDates: D, color: U, multiple: F, range: z } } = e, N = `${B}-${T}-${M}`, ie = () => z || F ? b(N) : H(A) === M && f.value, oe = C(M) ? D ? !D(N) : !1 : !0, ze = () => oe ? !0 : z || F ? !b(N) : !f.value || H(A) !== M, te = () => c.value && H(t) === M && e.componentProps.showCurrent ? (z || F || f.value) && oe ? !0 : z || F ? !b(N) : f.value ? A !== t : !0 : !1, W = () => oe ? "" : te() ? U ?? "" : ie() ? "" : `${kt()}-color-cover`, Z = W().startsWith(kt());
      return {
        text: ze(),
        outline: te(),
        textColor: Z ? "" : W(),
        [`${kt()}-color-cover`]: Z,
        class: i3(_r("button"), _r("button--usable"), [oe, _r("button--disabled")]),
        disabled: oe
      };
    }, O = (M) => {
      i.value = M === "prev", l.value += M === "prev" ? -1 : 1, n("check-preview", "month", M);
    }, I = (M, A) => {
      A.currentTarget.classList.contains(_r("button--disabled")) || n("choose-day", M);
    }, Y = (M) => {
      s.value.checkDate(M);
    };
    return bn(() => {
      w(), $();
    }), pe(() => e.preview, () => {
      w(), $();
    }), pe(() => [e.componentProps.max, e.componentProps.min], $), {
      n: _r,
      nDate: kt,
      days: a,
      reverse: i,
      headerEl: s,
      panelKey: l,
      sortWeekList: v,
      panelBtnDisabled: u,
      forwardRef: Y,
      filterDay: h,
      getDayAbbr: m,
      checkDate: O,
      chooseDay: I,
      buttonProps: P
    };
  }
});
Im.render = l3;
var s3 = Im, u3 = Object.defineProperty, cc = Object.getOwnPropertySymbols, d3 = Object.prototype.hasOwnProperty, c3 = Object.prototype.propertyIsEnumerable, fc = (e, n, r) => n in e ? u3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, f3 = (e, n) => {
  for (var r in n || (n = {})) d3.call(n, r) && fc(e, r, n[r]);
  if (cc)
    for (var r of cc(n)) c3.call(n, r) && fc(e, r, n[r]);
  return e;
};
le.extend(Tm);
le.extend(zm);
var { n: $t, classes: v3 } = ne("month-picker"), { n: Ct } = ne("date-picker");
function p3(e, n) {
  const r = x("panel-header"), o = x("var-button");
  return g(), S("div", { class: p(e.n()) }, [V("div", { class: p(e.n("content")) }, [X(r, {
    ref: "headerEl",
    type: "month",
    date: e.preview,
    disabled: e.panelBtnDisabled,
    onCheckPanel: e.clickYear,
    onCheckDate: e.checkDate
  }, null, 8, [
    "date",
    "disabled",
    "onCheckPanel",
    "onCheckDate"
  ]), X(en, { name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex` }, {
    default: ve(() => [(g(), S("ul", { key: e.panelKey }, [(g(!0), S(De, null, Ke(e.MONTH_LIST, (t) => (g(), S("li", { key: t }, [X(o, je({
      type: "primary",
      "var-month-picker-cover": "",
      ripple: !1,
      elevation: e.componentProps.buttonElevation
    }, { ref_for: !0 }, f3({}, e.buttonProps(t)), { onClick: (a) => e.chooseMonth(t, a) }), {
      default: ve(() => [Ie(ue(e.getMonthAbbr(t)), 1)]),
      _: 2
    }, 1040, ["elevation", "onClick"])]))), 128))]))]),
    _: 1
  }, 8, ["name"])], 2)], 2);
}
var Bm = ee({
  name: "MonthPickerPanel",
  components: {
    VarButton: Dn,
    PanelHeader: Eu
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
    const [r, o] = e.current.split("-"), t = y(!1), a = y(0), i = y(null), l = nn({
      left: !1,
      right: !1
    }), { t: s } = ar(), u = E(() => e.choose.chooseYear === e.preview.previewYear), d = E(() => e.preview.previewYear === r), c = (C) => {
      var b, P;
      return (P = (b = (s || an)("datePickerMonthDict")) == null ? void 0 : b[C].abbr) != null ? P : "";
    }, f = (C) => {
      const { preview: { previewYear: b }, componentProps: { min: P, max: O } } = e;
      let I = !0, Y = !0;
      const M = `${b}-${C}`;
      return O && (I = le(M).isSameOrBefore(le(O), "month")), P && (Y = le(M).isSameOrAfter(le(P), "month")), I && Y;
    }, v = (C) => {
      const { choose: { chooseMonths: b, chooseDays: P, chooseRangeMonth: O }, componentProps: { type: I, range: Y } } = e;
      if (Y) {
        if (!O.length) return !1;
        const M = le(C).isSameOrBefore(le(O[1]), "month"), A = le(C).isSameOrAfter(le(O[0]), "month");
        return M && A;
      }
      return I === "month" ? b.includes(C) : P.some((M) => M.includes(C));
    }, m = (C) => {
      const { choose: { chooseMonth: b }, preview: { previewYear: P }, componentProps: { allowedDates: O, color: I, multiple: Y, range: M } } = e, A = `${P}-${C}`, B = () => M || Y ? v(A) : b === C && u.value, D = f(C) ? O ? !O(A) : !1 : !0, U = () => D ? !0 : M || Y ? !v(A) : !u.value || b !== C, F = () => d.value && o === C && e.componentProps.showCurrent ? (M || Y || u.value) && D ? !0 : M || Y ? !v(A) : u.value ? b !== o : !0 : !1, z = () => D ? "" : F() ? I ?? "" : B() ? "" : `${Ct()}-color-cover`, N = z().startsWith(Ct());
      return {
        outline: F(),
        text: U(),
        color: U() ? "" : I,
        textColor: N ? "" : z(),
        [`${Ct()}-color-cover`]: N,
        class: v3($t("button"), [D, $t("button--disabled")]),
        disabled: D
      };
    }, h = (C, b) => {
      b.currentTarget.classList.contains($t("button--disabled")) || n("choose-month", C);
    }, w = (C) => {
      t.value = C === "prev", a.value += C === "prev" ? -1 : 1, n("check-preview", "year", C);
    }, $ = (C) => {
      i.value.checkDate(C);
    };
    return pe(() => [
      e.preview.previewYear,
      e.componentProps.max,
      e.componentProps.min
    ], ([C, b, P]) => {
      b && (l.right = !le(`${H(C) + 1}`).isSameOrBefore(le(b), "year")), P && (l.left = !le(`${H(C) - 1}`).isSameOrAfter(le(P), "year"));
    }, { immediate: !0 }), {
      n: $t,
      nDate: Ct,
      t: an,
      MONTH_LIST: To,
      headerEl: i,
      reverse: t,
      panelKey: a,
      panelBtnDisabled: l,
      forwardRef: $,
      buttonProps: m,
      getMonthAbbr: c,
      chooseMonth: h,
      checkDate: w
    };
  }
});
Bm.render = p3;
var m3 = Bm, Mo = {
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
  onScroll: R()
}, vc = (e, n, r) => new Promise((o, t) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: h3, n: g3, classes: b3 } = ne("sticky");
function y3(e, n) {
  return g(), S("div", {
    ref: "stickyEl",
    class: p(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
    style: q({
      zIndex: e.toNumber(e.zIndex),
      top: e.enableCSSMode ? `${e.offsetTop}px` : void 0,
      width: e.enableFixedMode ? e.fixedWidth : void 0,
      height: e.enableFixedMode ? e.fixedHeight : void 0
    })
  }, [V("div", {
    ref: "wrapperEl",
    class: p(e.n("wrapper")),
    style: q({
      zIndex: e.toNumber(e.zIndex),
      position: e.enableFixedMode ? "fixed" : void 0,
      width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
      height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
      left: e.enableFixedMode ? e.fixedLeft : void 0,
      top: e.enableFixedMode ? e.fixedTop : void 0
    })
  }, [L(e.$slots, "default")], 6)], 6);
}
var Dm = ee({
  name: h3,
  props: Mo,
  setup(e) {
    const n = y(null), r = y(null), o = y(!1), t = y("0px"), a = y("0px"), i = y("auto"), l = y("auto"), s = y("auto"), u = y("auto"), d = E(() => !e.disabled && e.cssMode), c = E(() => !e.disabled && !e.cssMode && o.value), f = E(() => rn(e.offsetTop));
    let v;
    pe(() => e.disabled, C), bn(() => vc(null, null, function* () {
      yield Sn(), h(), w();
    })), go($), tr(C), Ye(() => window, "scroll", w);
    function m() {
      const { cssMode: b, disabled: P } = e;
      if (P) return;
      let O = 0;
      if (v && v !== window) {
        const { top: T } = on(v);
        O = T;
      }
      const I = r.value, Y = n.value, { top: M, left: A } = on(Y), B = M - O;
      return B <= f.value ? (b || (i.value = `${Y.offsetWidth}px`, l.value = `${Y.offsetHeight}px`, t.value = `${O + f.value}px`, a.value = `${A}px`, s.value = `${I.offsetWidth}px`, u.value = `${I.offsetHeight}px`, o.value = !0), {
        offsetTop: f.value,
        isFixed: !0
      }) : (o.value = !1, {
        offsetTop: B,
        isFixed: !1
      });
    }
    function h() {
      v = Ar(n.value), v !== window && v.addEventListener("scroll", w);
    }
    function w() {
      const b = m();
      b && k(e.onScroll, b.offsetTop, b.isFixed);
    }
    function $() {
      !v || v === window || v.removeEventListener("scroll", w);
    }
    function C() {
      return vc(this, null, function* () {
        o.value = !1, yield Tr(), m();
      });
    }
    return {
      stickyEl: n,
      wrapperEl: r,
      isFixed: o,
      offsetTop: f,
      fixedTop: t,
      fixedLeft: a,
      fixedWidth: i,
      fixedHeight: l,
      fixedWrapperWidth: s,
      fixedWrapperHeight: u,
      enableCSSMode: d,
      enableFixedMode: c,
      n: g3,
      classes: b3,
      resize: C,
      toNumber: H
    };
  }
});
Dm.render = y3;
var pi = Dm;
ae(pi);
de(pi, Mo);
var xB = pi, po = pi, w3 = Object.defineProperty, pc = Object.getOwnPropertySymbols, k3 = Object.prototype.hasOwnProperty, $3 = Object.prototype.propertyIsEnumerable, mc = (e, n, r) => n in e ? w3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, C3 = (e, n) => {
  for (var r in n || (n = {})) k3.call(n, r) && mc(e, r, n[r]);
  if (pc)
    for (var r of pc(n)) $3.call(n, r) && mc(e, r, n[r]);
  return e;
}, { n: St, classes: hc } = ne("year-picker"), { n: Ot } = ne("date-picker");
function S3(e, n) {
  const r = x("panel-header"), o = x("var-sticky"), t = x("var-button");
  return g(), S("div", null, [X(o, { "css-mode": "" }, {
    default: ve(() => [X(r, {
      ref: "headerEl",
      type: "year",
      date: { previewYear: `${e.yearList[0]} ~ ${e.yearList[e.yearList.length - 1]}` },
      disabled: e.panelBtnDisabled,
      onCheckDate: e.checkDate
    }, null, 8, [
      "date",
      "disabled",
      "onCheckDate"
    ])]),
    _: 1
  }), X(en, { name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex` }, {
    default: ve(() => [(g(), S("ul", {
      ref: "panel",
      key: e.panelKey,
      class: p(e.n())
    }, [(g(!0), S(De, null, Ke(e.yearList, (a) => (g(), S("li", { key: a }, [X(t, je({
      type: "primary",
      "var-year-picker-cover": "",
      ripple: !1,
      elevation: e.componentProps.buttonElevation
    }, { ref_for: !0 }, C3({}, e.buttonProps(`${a}`)), { onClick: (i) => e.chooseYear(a, i) }), {
      default: ve(() => [Ie(ue(a), 1)]),
      _: 2
    }, 1040, ["elevation", "onClick"])]))), 128))], 2))]),
    _: 1
  }, 8, ["name"])]);
}
var Mm = ee({
  name: "YearPickerPanel",
  components: {
    VarButton: Dn,
    VarSticky: po,
    PanelHeader: Eu
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
    preview: { type: String },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["choose-year"],
  setup(e, { emit: n }) {
    const [r] = e.current.split("-"), o = y(), t = y(null), a = y(!1), i = y(0), l = y(0), s = nn({
      left: !1,
      right: !1
    }), u = E(() => {
      if (!e.preview) return [];
      const $ = Math.floor(H(e.preview) / 100 + l.value) * 100;
      return Array.from(Array(100), (C, b) => Math.max(0, $) + b);
    }), d = ($) => {
      const { choose: { chooseMonths: C, chooseDays: b, chooseYears: P, chooseRangeYear: O }, componentProps: { type: I, range: Y } } = e;
      if (Y) {
        if (!O.length) return !1;
        const M = le($).isSameOrBefore(le(O[1]), "year"), A = le($).isSameOrAfter(le(O[0]), "year");
        return M && A;
      }
      return I === "year" ? P.includes($) : I === "month" ? C.some((M) => M.includes($)) : b.some((M) => M.includes($));
    }, c = ($) => {
      const { componentProps: { min: C, max: b } } = e, P = b ? le($).isSameOrBefore(le(b), "year") : !0, O = C ? le($).isSameOrAfter(le(C), "year") : !0;
      return P && O;
    }, f = ($) => {
      const { choose: { chooseYear: C }, componentProps: { allowedDates: b, color: P, multiple: O, range: I } } = e, Y = () => I || O ? d($) : C === $, A = c($) ? b ? !b($) : !1 : !0, B = () => A ? !0 : I || O ? !d($) : C !== $, T = () => r === $ && e.componentProps.showCurrent ? (I || O) && A ? !0 : I || O ? !d($) : C !== r : !1, D = () => A ? "" : T() ? P ?? "" : Y() ? "" : `${Ot()}-color-cover`, U = D().startsWith(Ot());
      return {
        outline: T(),
        text: B(),
        color: B() ? "" : P,
        textColor: U ? "" : D(),
        [`${Ot()}-color-cover`]: U,
        class: hc(St("button"), [A, St("button--disabled")]),
        disabled: A
      };
    }, v = ($, C) => {
      C.currentTarget.classList.contains(St("button--disabled")) || n("choose-year", $);
    }, m = () => {
      var $;
      (($ = o.value.querySelector(".var-button--primary")) != null ? $ : o.value.querySelector(".var-button--outline"))?.scrollIntoView({ block: "center" });
    }, h = ($) => {
      const C = $ === "prev";
      a.value = C, i.value += C ? -1 : 1, l.value += C ? -1 : 1;
    }, w = ($) => {
      t.value.checkDate($);
    };
    return bn(m), pe(() => e.preview, () => {
      l.value = 0;
    }), pe(() => [
      u.value,
      e.componentProps.max,
      e.componentProps.min
    ], ($) => {
      const [C, b, P] = $;
      b && (s.right = !le(`${H(C[C.length - 1])}`).isSameOrBefore(le(b), "year")), P && (s.left = !le(`${H(C[0])}`).isSameOrAfter(le(P), "year")), H(C[0] <= 0) && (s.left = !1);
    }, { immediate: !0 }), {
      n: St,
      classes: hc,
      buttonProps: f,
      panel: o,
      headerEl: t,
      yearList: u,
      reverse: a,
      panelKey: i,
      panelBtnDisabled: s,
      nDate: Ot,
      checkDate: h,
      chooseYear: v,
      forwardRef: w,
      toNumber: H
    };
  }
});
Mm.render = S3;
var O3 = Mm, P3 = (e, n, r) => new Promise((o, t) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: z3, n: T3, classes: E3 } = ne("date-picker");
function I3(e, n) {
  var r;
  const o = x("year-picker-panel"), t = x("month-picker-panel"), a = x("day-picker-panel");
  return g(), S("div", { class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2))) }, [
    V("div", {
      class: p(e.n("title")),
      style: q({ background: e.titleColor || e.color })
    }, [V("div", { class: p(e.n("title-select")) }, [V("div", { class: p(e.n("title-hint")) }, ue((r = e.hint) != null ? r : (e.pt ? e.pt : e.t)("datePickerHint")), 3), e.type !== "year" ? (g(), S("div", {
      key: 0,
      class: p(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
      onClick: n[0] || (n[0] = (i) => e.clickEl("year"))
    }, [L(e.$slots, "year", { year: e.displayYear }, () => [Ie(ue(e.displayYear), 1)])], 2)) : K("v-if", !0)], 2), V("div", {
      class: p(e.classes(e.n("title-date"), [!e.isYearPanel || e.type === "year", e.n("title-date--active")], [e.range, e.n("title-date--range")])),
      onClick: n[1] || (n[1] = (i) => e.clickEl("date"))
    }, [X(en, { name: e.multiple ? "" : `${e.n()}${e.reverse ? "-reverse" : ""}-translatey` }, {
      default: ve(() => [e.type === "year" ? (g(), S("div", { key: `${e.chooseYear}` }, [e.range ? L(e.$slots, "range", {
        key: 0,
        choose: e.getChoose.chooseRangeYear
      }, () => [Ie(ue(e.getYearTitle), 1)]) : e.multiple ? L(e.$slots, "multiple", {
        key: 1,
        choose: e.getChoose.chooseYears
      }, () => [Ie(ue(e.getYearTitle), 1)]) : L(e.$slots, "year", {
        key: 2,
        year: e.chooseYear
      }, () => [Ie(ue(e.getYearTitle), 1)])])) : e.type === "month" ? (g(), S("div", { key: `${e.chooseYear}${e.chooseMonth}` }, [e.range ? L(e.$slots, "range", {
        key: 0,
        choose: e.getChoose.chooseRangeMonth
      }, () => [Ie(ue(e.getMonthTitle), 1)]) : e.multiple ? L(e.$slots, "multiple", {
        key: 1,
        choose: e.getChoose.chooseMonths
      }, () => [Ie(ue(e.getMonthTitle), 1)]) : L(e.$slots, "month", {
        key: 2,
        month: e.chooseMonth,
        year: e.chooseYear
      }, () => [Ie(ue(e.getMonthTitle), 1)])])) : (g(), S("div", { key: `${e.chooseYear}${e.chooseMonth}${e.chooseDay}` }, [e.range ? L(e.$slots, "range", {
        key: 0,
        choose: e.formatRange
      }, () => [Ie(ue(e.getDateTitle), 1)]) : e.multiple ? L(e.$slots, "multiple", {
        key: 1,
        choose: e.getChoose.chooseDays
      }, () => [Ie(ue(e.getDateTitle), 1)]) : L(e.$slots, "date", Kr(je({ key: 2 }, e.slotProps)), () => [Ie(ue(e.getDateTitle), 1)])]))]),
      _: 3
    }, 8, ["name"])], 2)], 6),
    V("div", {
      class: p(e.n("body")),
      onTouchstart: n[2] || (n[2] = (...i) => e.handleTouchstart && e.handleTouchstart(...i)),
      onTouchmove: n[3] || (n[3] = (...i) => e.handleTouchmove && e.handleTouchmove(...i)),
      onTouchend: n[4] || (n[4] = (...i) => e.handleTouchend && e.handleTouchend(...i))
    }, [X(en, { name: `${e.n()}-panel-fade` }, {
      default: ve(() => [e.getPanelType === "year" ? (g(), ke(o, {
        key: 0,
        ref: "yearPanelEl",
        choose: e.getChoose,
        current: e.currentDate,
        "component-props": e.componentProps,
        preview: e.previewYear,
        onChooseYear: e.getChooseYear
      }, null, 8, [
        "choose",
        "current",
        "component-props",
        "preview",
        "onChooseYear"
      ])) : e.getPanelType === "month" ? (g(), ke(t, {
        key: 1,
        ref: "monthPanelEl",
        current: e.currentDate,
        choose: e.getChoose,
        preview: e.getPreview,
        "click-year": () => e.clickEl("year"),
        "component-props": e.componentProps,
        onChooseMonth: e.getChooseMonth,
        onCheckPreview: e.checkPreview
      }, null, 8, [
        "current",
        "choose",
        "preview",
        "click-year",
        "component-props",
        "onChooseMonth",
        "onCheckPreview"
      ])) : e.getPanelType === "date" ? (g(), ke(a, {
        key: 2,
        ref: "dayPanelEl",
        current: e.currentDate,
        choose: e.getChoose,
        preview: e.getPreview,
        "component-props": e.componentProps,
        "click-month": () => e.clickEl("month"),
        onChooseDay: e.getChooseDay,
        onCheckPreview: e.checkPreview
      }, null, 8, [
        "current",
        "choose",
        "preview",
        "component-props",
        "click-month",
        "onChooseDay",
        "onCheckPreview"
      ])) : K("v-if", !0)]),
      _: 1
    }, 8, ["name"])], 34),
    e.$slots.actions ? (g(), S("div", {
      key: 0,
      class: p(e.n("actions"))
    }, [L(e.$slots, "actions")], 2)) : K("v-if", !0)
  ], 2);
}
var Am = ee({
  name: z3,
  components: {
    MonthPickerPanel: m3,
    YearPickerPanel: O3,
    DayPickerPanel: s3
  },
  props: Pm,
  setup(e) {
    const { t: n } = ar(), r = le().format("YYYY-MM-D"), [o, t] = r.split("-"), a = To.find((G) => G === t), i = y(!1), l = y(!1), s = y(!0), u = y(), d = y(), c = y(), f = y(a), v = y(o), m = y(!1), h = y([]), w = y([]), $ = y([]), C = y([]), b = y([]), P = y([]), O = y(null), I = y(null), Y = y(null), M = E(() => ({
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
    })), A = E(() => ({
      chooseMonth: u.value,
      chooseYear: d.value,
      chooseDay: c.value,
      chooseYears: h.value,
      chooseMonths: w.value,
      chooseDays: $.value,
      chooseRangeYear: C.value,
      chooseRangeMonth: b.value,
      chooseRangeDay: P.value
    })), B = E(() => ({
      previewMonth: f.value,
      previewYear: v.value
    })), T = E(() => v.value || d.value || ""), D = E(() => {
      var G;
      const { multiple: ce, range: ge } = e;
      return ge ? C.value.length ? `${C.value[0]} ~ ${C.value[1]}` : "" : ce ? `${h.value.length}${(n || an)("datePickerSelected")}` : (G = d.value) != null ? G : "";
    }), U = E(() => {
      var G, ce;
      const { multiple: ge, range: Oe } = e;
      if (Oe) return b.value.length ? `${b.value[0]} ~ ${b.value[1]}` : "";
      let Ue = "";
      return u.value && (Ue = (ce = (G = (n || an)("datePickerMonthDict")) == null ? void 0 : G[u.value].name) != null ? ce : ""), ge ? `${w.value.length}${(n || an)("datePickerSelected")}` : Ue;
    }), F = E(() => {
      var G, ce, ge, Oe;
      const { multiple: Ue, range: _e } = e;
      if (_e) {
        const Co = P.value.map((Xg) => le(Xg).format("YYYY-MM-DD"));
        return Co.length ? `${Co[0]} ~ ${Co[1]}` : "";
      }
      if (Ue) return `${$.value.length}${(n || an)("datePickerSelected")}`;
      if (!d.value || !u.value || !c.value) return "";
      const Xe = le(`${d.value}-${u.value}-${c.value}`).day(), fr = Eo.find((Co) => Co === `${Xe}`), _n = (ce = (G = (n || an)("datePickerWeekDict")) == null ? void 0 : G[fr].name) != null ? ce : "", mt = (Oe = (ge = (n || an)("datePickerMonthDict")) == null ? void 0 : ge[u.value].name) != null ? Oe : "", qg = Jr(c.value, 2, "0");
      return (n || an)("lang") === "zh-CN" ? `${u.value}-${qg} ${_n.slice(0, 3)}` : `${_n.slice(0, 3)}, ${mt.slice(0, 3)} ${c.value}`;
    }), z = E(() => e.type === "year" || i.value ? "year" : e.type === "month" || l.value ? "month" : e.type === "date" ? "date" : ""), N = E(() => !e.touchable || !z.value), ie = E(() => {
      var G, ce;
      const ge = le(`${d.value}-${u.value}-${c.value}`).day(), Oe = c.value ? Jr(c.value, 2, "0") : "";
      return {
        week: `${ge}`,
        year: (G = d.value) != null ? G : "",
        month: (ce = u.value) != null ? ce : "",
        date: Oe
      };
    }), J = E(() => A.value.chooseRangeDay.map((G) => le(G).format("YYYY-MM-DD"))), oe = E(() => d.value === v.value), ze = E(() => u.value === f.value);
    let te = 0, W = 0, Z = "", se;
    pe(() => e.modelValue, (G) => {
      if (fe())
        if (e.range) {
          if (!He(G)) return;
          s.value = G.length !== 1, ir(G, e.type);
        } else if (e.multiple) {
          if (!He(G)) return;
          Yr(G, e.type);
        } else jr(On(G));
    }, { immediate: !0 }), pe(z, Wr);
    function he(G) {
      G === "year" ? i.value = !0 : G === "month" ? l.value = !0 : (i.value = !1, l.value = !1);
    }
    function j(G) {
      if (N.value) return;
      const { clientX: ce, clientY: ge } = G.touches[0];
      te = ce, W = ge;
    }
    function re(G, ce) {
      return G >= ce && G > 20 ? "x" : "y";
    }
    function Ce(G) {
      if (N.value) return;
      const { clientX: ce, clientY: ge } = G.touches[0], Oe = ce - te, Ue = ge - W;
      se = re(Math.abs(Oe), Math.abs(Ue)), Z = Oe > 0 ? "prev" : "next";
    }
    function Re() {
      return P3(this, null, function* () {
        if (N.value || se !== "x") return;
        const G = z.value === "year" ? O : z.value === "month" ? I : Y;
        yield Sn(), G.value.forwardRef(Z), Wr();
      });
    }
    function qe(G, ce) {
      const ge = ce === "year" ? C : ce === "month" ? b : P;
      if (ge.value = s.value ? [G, G] : [ge.value[0], G], s.value = !s.value, s.value) {
        const Oe = le(ge.value[0]).isAfter(ge.value[1]) ? [ge.value[1], ge.value[0]] : [...ge.value];
        k(e["onUpdate:modelValue"], Oe), k(e.onChange, Oe);
      }
    }
    function Ne(G, ce) {
      const ge = ce === "year" ? h : ce === "month" ? w : $, Oe = ce === "year" ? "YYYY" : ce === "month" ? "YYYY-MM" : "YYYY-MM-DD", Ue = ge.value.map((Xe) => le(Xe).format(Oe)), _e = Ue.findIndex((Xe) => Xe === G);
      _e === -1 ? Ue.push(G) : Ue.splice(_e, 1), k(e["onUpdate:modelValue"], Ue), k(e.onChange, Ue);
    }
    function dn(G, ce) {
      return !d.value || !u.value ? !1 : oe.value ? G === "year" ? ce < H(d.value) : G === "month" ? ce < u.value : ze.value ? ce < H(c.value) : u.value > f.value : d.value > v.value;
    }
    function xe(G) {
      const { readonly: ce, range: ge, multiple: Oe, onChange: Ue, "onUpdate:modelValue": _e } = e;
      if (G < 0 || ce) return;
      m.value = dn("day", G);
      const Xe = le(`${v.value}-${f.value}-${G}`).format("YYYY-MM-DD");
      ge ? qe(Xe, "day") : Oe ? Ne(Xe, "day") : (k(_e, Xe), k(Ue, Xe));
    }
    function me(G) {
      const { type: ce, readonly: ge, range: Oe, multiple: Ue, onChange: _e, onPreview: Xe, "onUpdate:modelValue": fr } = e;
      if (m.value = dn("month", G), ce === "month" && !ge) {
        const _n = `${v.value}-${G}`;
        Oe ? qe(_n, "month") : Ue ? Ne(_n, "month") : (k(fr, _n), k(_e, _n));
      } else
        f.value = G, k(Xe, H(v.value), H(f.value), ce === "date" ? H(c.value) : void 0);
      l.value = !1;
    }
    function Fe(G) {
      const { type: ce, readonly: ge, range: Oe, multiple: Ue, onChange: _e, onPreview: Xe, "onUpdate:modelValue": fr } = e;
      m.value = dn("year", G), ce === "year" && !ge ? Oe ? qe(`${G}`, "year") : Ue ? Ne(`${G}`, "year") : (k(fr, `${G}`), k(_e, `${G}`)) : (v.value = `${G}`, k(Xe, H(v.value), H(f.value), ce === "date" ? H(c.value) : void 0)), i.value = !1;
    }
    function Q(G, ce) {
      const ge = ce === "prev" ? -1 : 1;
      if (G === "year") v.value = `${H(v.value) + ge}`;
      else {
        let Oe = H(f.value) + ge;
        Oe < 1 && (v.value = `${H(v.value) - 1}`, Oe = 12), Oe > 12 && (v.value = `${H(v.value) + 1}`, Oe = 1), f.value = To.find((Ue) => H(Ue) === Oe);
      }
      k(e.onPreview, H(v.value), H(f.value), e.type === "date" ? H(c.value) : void 0);
    }
    function fe() {
      return (e.multiple || e.range) && !He(e.modelValue) ? (to("DatePicker", 'type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && He(e.modelValue) ? (to("DatePicker", 'type of prop "modelValue" should be a String'), !1) : !0;
    }
    function Se(G) {
      return He(G) ? !1 : G === "Invalid Date" ? (to("DatePicker", '"modelValue" is an Invalid Date'), !0) : !1;
    }
    function Le() {
      return e.fallbackViewDate && le(e.fallbackViewDate).format("YYYY-MM-D") !== "Invalid Date" ? e.fallbackViewDate : le().format("YYYY-MM-D");
    }
    function On(G) {
      return G && !Se(le(G).format("YYYY-MM-D")) ? G : Le();
    }
    function pn(G, ce) {
      const ge = ce === "year" ? "YYYY" : ce === "month" ? "YYYY-MM" : "YYYY-MM-D";
      return G.find((Oe) => !Se(le(Oe).format(ge)));
    }
    function ir(G, ce) {
      var ge;
      const Oe = ce === "year" ? C : ce === "month" ? b : P, Ue = ce === "year" ? "YYYY" : ce === "month" ? "YYYY-MM" : "YYYY-MM-D";
      Oe.value = G.map((Xe) => le(Xe).format(Ue)).filter((Xe) => !Se(Xe)).slice(0, 2);
      const _e = le(Oe.value[0]).isAfter(Oe.value[1]);
      Oe.value.length === 2 && _e && (Oe.value = [Oe.value[1], Oe.value[0]]), xn((ge = pn(G, ce)) != null ? ge : Le());
    }
    function Yr(G, ce) {
      var ge;
      const Oe = ce === "year" ? h : ce === "month" ? w : $, Ue = ce === "year" ? "YYYY" : ce === "month" ? "YYYY-MM" : "YYYY-MM-D";
      Oe.value = Array.from(new Set(G.map((_e) => le(_e).format(Ue)))).filter((_e) => _e !== "Invalid Date"), xn((ge = pn(G, ce)) != null ? ge : Le());
    }
    function jr(G) {
      const ce = le(G || Le()).format("YYYY-MM-D");
      if (Se(ce)) return;
      const [ge, Oe, Ue] = ce.split("-");
      u.value = To.find((_e) => _e === Oe), d.value = ge, c.value = Ue, xn(ce);
    }
    function xn(G) {
      const ce = le(G || Le()).format("YYYY-MM-D");
      if (Se(ce)) return;
      const [ge, Oe] = ce.split("-");
      f.value = To.find((Ue) => Ue === Oe), v.value = ge;
    }
    function Wr() {
      W = 0, te = 0, Z = "", se = void 0;
    }
    return {
      yearPanelEl: O,
      monthPanelEl: I,
      dayPanelEl: Y,
      reverse: m,
      currentDate: r,
      chooseMonth: u,
      chooseYear: d,
      chooseDay: c,
      previewYear: v,
      displayYear: T,
      isYearPanel: i,
      isMonthPanel: l,
      getMonthTitle: U,
      getDateTitle: F,
      getYearTitle: D,
      getPanelType: z,
      getChoose: A,
      getPreview: B,
      componentProps: M,
      slotProps: ie,
      formatRange: J,
      pt: n,
      t: an,
      n: T3,
      classes: E3,
      clickEl: he,
      handleTouchstart: j,
      handleTouchmove: Ce,
      handleTouchend: Re,
      getChooseDay: xe,
      getChooseMonth: me,
      getChooseYear: Fe,
      checkPreview: Q,
      formatElevation: vn
    };
  }
});
Am.render = I3;
var mi = Am;
ae(mi);
de(mi, Pm);
var _B = mi, ls = mi, B3 = Object.defineProperty, gc = Object.getOwnPropertySymbols, D3 = Object.prototype.hasOwnProperty, M3 = Object.prototype.propertyIsEnumerable, bc = (e, n, r) => n in e ? B3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, A3 = (e, n) => {
  for (var r in n || (n = {})) D3.call(n, r) && bc(e, r, n[r]);
  if (gc)
    for (var r of gc(n)) M3.call(n, r) && bc(e, r, n[r]);
  return e;
}, Nm = A3({
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
  onBeforeClose: R(),
  onConfirm: R(),
  onCancel: R(),
  "onUpdate:show": R()
}, Be(wo, [
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
])), N3 = Object.defineProperty, yc = Object.getOwnPropertySymbols, V3 = Object.prototype.hasOwnProperty, R3 = Object.prototype.propertyIsEnumerable, wc = (e, n, r) => n in e ? N3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, L3 = (e, n) => {
  for (var r in n || (n = {})) V3.call(n, r) && wc(e, r, n[r]);
  if (yc)
    for (var r of yc(n)) R3.call(n, r) && wc(e, r, n[r]);
  return e;
}, { name: F3, n: U3, classes: H3 } = ne("dialog");
function Y3(e, n) {
  const r = x("var-button"), o = x("var-popup");
  return g(), ke(o, {
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
    default: ve(() => [V("div", je({
      class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
      style: L3({ width: e.toSizeUnit(e.width) }, e.dialogStyle)
    }, e.$attrs), [
      V("div", { class: p(e.n("title")) }, [L(e.$slots, "title", {}, () => {
        var t;
        return [Ie(ue((t = e.title) != null ? t : (e.pt ? e.pt : e.t)("dialogTitle")), 1)];
      })], 2),
      V("div", {
        class: p(e.n("message")),
        style: q({ textAlign: e.messageAlign })
      }, [L(e.$slots, "default", {}, () => [Ie(ue(e.message), 1)])], 6),
      L(e.$slots, "actions", {
        slotClass: e.n("actions"),
        cancel: e.cancel,
        confirm: e.confirm
      }, () => [V("div", { class: p(e.n("actions")) }, [e.cancelButton ? (g(), ke(r, {
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
        default: ve(() => {
          var t;
          return [Ie(ue((t = e.cancelButtonText) != null ? t : (e.pt ? e.pt : e.t)("dialogCancelButtonText")), 1)];
        }),
        _: 1
      }, 8, [
        "class",
        "text-color",
        "color",
        "loading",
        "disabled",
        "onClick"
      ])) : K("v-if", !0), e.confirmButton ? (g(), ke(r, {
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
        default: ve(() => {
          var t;
          return [Ie(ue((t = e.confirmButtonText) != null ? t : (e.pt ? e.pt : e.t)("dialogConfirmButtonText")), 1)];
        }),
        _: 1
      }, 8, [
        "class",
        "text-color",
        "color",
        "loading",
        "disabled",
        "onClick"
      ])) : K("v-if", !0)], 2)])
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
var Vm = ee({
  name: F3,
  components: {
    VarPopup: Mr,
    VarButton: Dn
  },
  inheritAttrs: !1,
  props: Nm,
  setup(e) {
    const { t: n } = ar(), r = y(!1), o = y(!1), t = Pn(e, "confirmButtonLoading"), a = Pn(e, "cancelButtonLoading"), i = Pn(e, "confirmButtonDisabled"), l = Pn(e, "cancelButtonDisabled"), s = {
      confirmButtonLoading: t,
      cancelButtonLoading: a,
      confirmButtonDisabled: i,
      cancelButtonDisabled: l
    };
    pe(() => e.show, (m) => {
      r.value = m;
    }, { immediate: !0 }), pe(() => e.closeOnClickOverlay, (m) => {
      if (e.onBeforeClose != null) {
        o.value = !1;
        return;
      }
      o.value = m;
    }, { immediate: !0 });
    function u() {
      return k(e["onUpdate:show"], !1);
    }
    function d() {
      const { closeOnClickOverlay: m, onClickOverlay: h, onBeforeClose: w } = e;
      if (k(h), !!m) {
        if (w != null) {
          k(w, "close", u, s);
          return;
        }
        k(e["onUpdate:show"], !1);
      }
    }
    function c() {
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
      popupShow: r,
      popupCloseOnClickOverlay: o,
      confirmButtonLoading: t,
      cancelButtonLoading: a,
      confirmButtonDisabled: i,
      cancelButtonDisabled: l,
      pt: n,
      t: an,
      n: U3,
      classes: H3,
      handleClickOverlay: d,
      confirm: c,
      cancel: f,
      toSizeUnit: Te,
      handleKeyEscape: v
    };
  }
});
Vm.render = Y3;
var ft = Vm, j3 = Object.defineProperty, W3 = Object.defineProperties, K3 = Object.getOwnPropertyDescriptors, kc = Object.getOwnPropertySymbols, q3 = Object.prototype.hasOwnProperty, X3 = Object.prototype.propertyIsEnumerable, $c = (e, n, r) => n in e ? j3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, pl = (e, n) => {
  for (var r in n || (n = {})) q3.call(n, r) && $c(e, r, n[r]);
  if (kc)
    for (var r of kc(n)) X3.call(n, r) && $c(e, r, n[r]);
  return e;
}, G3 = (e, n) => W3(e, K3(n)), Sr, sa = {};
function Z3(e = {}) {
  return tn(e) ? G3(pl({}, sa), { message: e }) : pl(pl({}, sa), e);
}
function Ur(e) {
  return or() ? new Promise((n) => {
    Ur.close();
    const r = nn(Z3(e));
    r.teleport = "body", Sr = r;
    const { unmountInstance: o } = yo(ft, r, {
      onConfirm: () => {
        k(r.onConfirm), n("confirm");
      },
      onCancel: () => {
        k(r.onCancel), n("cancel");
      },
      onClose: () => {
        k(r.onClose), n("close");
      },
      onClosed: () => {
        k(r.onClosed), o(), Sr === r && (Sr = null);
      },
      onRouteChange: () => {
        o(), Sr === r && (Sr = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
Ur.setDefaultOptions = function(e) {
  sa = e;
};
Ur.resetDefaultOptions = function() {
  sa = {};
};
Ur.close = function() {
  if (Sr != null) {
    const e = Sr;
    Sr = null, Ve().then(() => {
      e.show = !1;
    });
  }
};
Ur.Component = ft;
ae(ft);
ae(ft, Ur);
de(Ur, Nm);
var eD = ft, ss = Ur, Rm = {
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
}, { name: J3, n: Q3, classes: x3 } = ne("divider");
function _3(e, n) {
  return g(), S("div", {
    class: p(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.withPresetInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
    style: q(e.style),
    role: "separator"
  }, [e.vertical ? K("v-if", !0) : L(e.$slots, "default", { key: 0 }, () => [e.description ? (g(), S("span", {
    key: 0,
    class: p(e.n("text"))
  }, ue(e.description), 3)) : K("v-if", !0)])], 6);
}
var Lm = ee({
  name: J3,
  props: Rm,
  setup(e, { slots: n }) {
    const r = y(!1), o = E(() => {
      const { vertical: i, inset: l } = e;
      return !i && l === !0;
    }), t = E(() => {
      const { inset: i, vertical: l, margin: s } = e;
      if (ot(i) || l) return { margin: s };
      const u = H(i), d = Math.abs(u) + (i + "").replace(u + "", "");
      return {
        margin: s,
        width: `calc(100% - ${Te(d)})`,
        left: u > 0 ? Te(d) : Te(0)
      };
    });
    bn(a), et(a);
    function a() {
      const { description: i, vertical: l } = e;
      r.value = (n.default || i != null) && !l;
    }
    return {
      n: Q3,
      classes: x3,
      withText: r,
      style: t,
      withPresetInset: o
    };
  }
});
Lm.render = _3;
var hi = Lm;
ae(hi);
de(hi, Rm);
var nD = hi, us = hi, Fm = {
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
  onClick: R()
}, e4 = Object.defineProperty, n4 = Object.defineProperties, r4 = Object.getOwnPropertyDescriptors, Cc = Object.getOwnPropertySymbols, o4 = Object.prototype.hasOwnProperty, t4 = Object.prototype.propertyIsEnumerable, Sc = (e, n, r) => n in e ? e4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Oc = (e, n) => {
  for (var r in n || (n = {})) o4.call(n, r) && Sc(e, r, n[r]);
  if (Cc)
    for (var r of Cc(n)) t4.call(n, r) && Sc(e, r, n[r]);
  return e;
}, Pc = (e, n) => n4(e, r4(n)), { name: a4, n: i4, classes: l4 } = ne("drag");
function s4(e, n) {
  return g(), ke(cr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [V("div", je({
    ref: "drag",
    class: e.classes(e.n(), e.n("$--box"), [e.enableTransition, e.n("--transition")]),
    style: { "z-index": e.zIndex }
  }, e.getAttrs(), {
    onTouchstart: n[0] || (n[0] = (...r) => e.handleTouchstart && e.handleTouchstart(...r)),
    onTouchmove: n[1] || (n[1] = (...r) => e.handleTouchmove && e.handleTouchmove(...r)),
    onTouchend: n[2] || (n[2] = (...r) => e.handleTouchend && e.handleTouchend(...r)),
    onTouchcancel: n[3] || (n[3] = (...r) => e.handleTouchend && e.handleTouchend(...r)),
    onClick: n[4] || (n[4] = (...r) => e.handleClick && e.handleClick(...r))
  }), [L(e.$slots, "default")], 16)], 8, ["to", "disabled"]);
}
var Um = ee({
  name: a4,
  inheritAttrs: !1,
  props: Fm,
  setup(e, { attrs: n }) {
    const r = y(null), o = y(0), t = y(0), a = y(!1), i = y(!1), { touching: l, dragging: s, moveX: u, moveY: d, startTouch: c, moveTouch: f, endTouch: v, resetTouch: m } = bo(), { disabled: h } = xr(), w = nn({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    pe(() => e.boundary, B), tr(D), bn(() => {
      B(), D();
    });
    function $(F) {
      e.disabled || (c(F), O());
    }
    function C(F) {
      !l.value || e.disabled || (f(F), Ae(F), i.value = !1, a.value = !0, e.direction.includes("x") && (o.value += u.value), e.direction.includes("y") && (t.value += d.value), A());
    }
    function b() {
      e.disabled || (v(), i.value = !0, M());
    }
    function P(F) {
      s.value || k(e.onClick, F);
    }
    function O() {
      const { left: F, top: z } = I();
      o.value = F, t.value = z;
    }
    function I() {
      const F = on(r.value), z = on(window), N = F.top - z.top, ie = z.bottom - F.bottom, J = F.left - z.left, oe = z.right - F.right, { width: ze, height: te } = F, { width: W, height: Z } = z;
      return {
        top: N,
        bottom: ie,
        left: J,
        right: oe,
        width: ze,
        height: te,
        halfWidth: ze / 2,
        halfHeight: te / 2,
        windowWidth: W,
        windowHeight: Z
      };
    }
    function Y() {
      const F = I(), z = w.left, N = F.windowWidth - w.right - F.width, ie = w.top, J = F.windowHeight - w.bottom - F.height;
      return {
        minX: z,
        minY: ie,
        maxX: z < N ? N : z,
        maxY: ie < J ? J : ie
      };
    }
    function M() {
      if (e.attraction == null) return;
      const { halfWidth: F, halfHeight: z, top: N, bottom: ie, left: J, right: oe } = I(), { minX: ze, minY: te, maxX: W, maxY: Z } = Y(), se = J + F - w.left, he = oe + F - w.right, j = N + z - w.top, re = ie + z - w.bottom, Ce = se <= he, Re = j <= re;
      e.attraction.includes("x") && (o.value = Ce ? ze : W), e.attraction.includes("y") && (t.value = Re ? te : Z);
    }
    function A() {
      const { minX: F, minY: z, maxX: N, maxY: ie } = Y();
      o.value = $n(o.value, F, N), t.value = $n(t.value, z, ie);
    }
    function B() {
      const { top: F = 0, bottom: z = 0, left: N = 0, right: ie = 0 } = e.boundary;
      w.top = rn(F), w.bottom = rn(z), w.left = rn(N), w.right = rn(ie);
    }
    function T() {
      var F;
      const z = (F = n.style) != null ? F : {};
      return Pc(Oc({}, n), { style: Pc(Oc({}, z), {
        top: a.value ? 0 : z.top,
        left: a.value ? 0 : z.left,
        right: a.value ? "auto" : z.right,
        bottom: a.value ? "auto" : z.bottom,
        transform: a.value ? `translate(${o.value}px, ${t.value}px)` : z.transform
      }) });
    }
    function D() {
      a.value && (O(), A());
    }
    function U() {
      m(), i.value = !1, a.value = !1, o.value = 0, t.value = 0;
    }
    return {
      drag: r,
      x: o,
      y: t,
      enableTransition: i,
      dragging: s,
      teleportDisabled: h,
      n: i4,
      classes: l4,
      getAttrs: T,
      handleTouchstart: $,
      handleTouchmove: C,
      handleTouchend: b,
      handleClick: P,
      resize: D,
      reset: U
    };
  }
});
Um.render = s4;
var gi = Um;
ae(gi);
de(gi, Fm);
var rD = gi, ua = gi, Hm = {
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
  onOpen: R(),
  onOpened: R(),
  onClose: R(),
  onClosed: R(),
  onClickOutside: R(),
  "onUpdate:show": R()
}, { name: u4, n: d4, classes: c4 } = ne("tooltip");
function f4(e, n) {
  return g(), S("div", {
    ref: "host",
    class: p(e.classes(e.n(), e.n("$--box")))
  }, [L(e.$slots, "default"), (g(), ke(cr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [X(en, {
    name: e.n(),
    onAfterEnter: e.onOpened,
    onAfterLeave: e.handleClosed,
    persisted: ""
  }, {
    default: ve(() => [Me(V("div", {
      ref: "popover",
      class: p(e.classes(e.n("tooltip"), e.n("$--box"))),
      style: q({ zIndex: e.zIndex }),
      onClick: n[0] || (n[0] = Fn(() => {
      }, ["stop"])),
      onMouseenter: n[1] || (n[1] = (...r) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...r)),
      onMouseleave: n[2] || (n[2] = (...r) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...r))
    }, [V("div", {
      style: q({
        background: e.color,
        color: e.textColor,
        width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.referenceSize.width)) : void 0
      }),
      class: p(e.classes(e.n("content-container"), e.n(`--${e.type}`))),
      role: "tooltip"
    }, [L(e.$slots, "content", {}, () => [Ie(ue(e.content), 1)])], 6)], 38), [[Jn, e.show]])]),
    _: 3
  }, 8, [
    "name",
    "onAfterEnter",
    "onAfterLeave"
  ])], 8, ["to", "disabled"]))], 2);
}
var Ym = ee({
  name: u4,
  props: Hm,
  setup(e) {
    const { disabled: n } = xr(), { popover: r, host: o, referenceSize: t, show: a, zIndex: i, handlePopoverMouseenter: l, handlePopoverMouseleave: s, handlePopoverClose: u, handleClosed: d, open: c, close: f, resize: v, setReference: m } = ep(e);
    return {
      popover: r,
      host: o,
      referenceSize: t,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: Te,
      n: d4,
      classes: c4,
      handlePopoverClose: u,
      handlePopoverMouseenter: l,
      handlePopoverMouseleave: s,
      handleClosed: d,
      resize: v,
      open: c,
      close: f,
      setReference: m
    };
  }
});
Ym.render = f4;
var bi = Ym;
ae(bi);
de(bi, Hm);
var oD = bi, da = bi, jm = {
  expand: Boolean,
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  },
  "onUpdate:expand": R()
}, v4 = Object.defineProperty, zc = Object.getOwnPropertySymbols, p4 = Object.prototype.hasOwnProperty, m4 = Object.prototype.propertyIsEnumerable, Tc = (e, n, r) => n in e ? v4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, h4 = (e, n) => {
  for (var r in n || (n = {})) p4.call(n, r) && Tc(e, r, n[r]);
  if (zc)
    for (var r of zc(n)) m4.call(n, r) && Tc(e, r, n[r]);
  return e;
}, { name: g4, n: b4, classes: y4 } = ne("ellipsis"), w4 = { key: 0 };
function k4(e, n) {
  const r = x("var-tooltip");
  return g(), ke(r, je({
    class: e.classes(e.n(), [
      e.lineClamp,
      e.n("--clamp"),
      e.n("--line")
    ], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")]),
    "var-ellipsis-cover": "",
    style: e.rootStyles
  }, e.tooltipProps, { onClick: e.handleClick }), {
    content: ve(() => [L(e.$slots, "tooltip-content", {}, () => {
      var o;
      return [(o = e.tooltipProps) != null && o.content ? (g(), S("span", w4, ue(e.tooltipProps.content), 1)) : L(e.$slots, "default", { key: 1 })];
    })]),
    default: ve(() => [V("span", null, [L(e.$slots, "default")])]),
    _: 3
  }, 16, [
    "class",
    "style",
    "onClick"
  ]);
}
var Wm = ee({
  name: g4,
  components: { VarTooltip: da },
  props: jm,
  setup(e) {
    const n = Pn(e, "expand"), r = E(() => e.lineClamp ? { "-webkit-line-clamp": e.lineClamp } : {}), o = E(() => e.tooltip === !1 ? { disabled: !0 } : e.tooltip === !0 ? { sameWidth: !0 } : h4({ sameWidth: !0 }, e.tooltip));
    function t() {
      e.expandTrigger && (n.value = !n.value);
    }
    return {
      tooltipProps: o,
      expanding: n,
      rootStyles: r,
      n: b4,
      classes: y4,
      handleClick: t
    };
  }
});
Wm.render = k4;
var yi = Wm;
ae(yi);
de(yi, jm);
var tD = yi, ds = yi, Km = {
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
  inactiveIconSize: Be(ln, "size"),
  activeIconSize: Be(ln, "size"),
  inactiveIconNamespace: Be(ln, "namespace"),
  activeIconNamespace: Be(ln, "namespace"),
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
  onClick: R(),
  onOpen: R(),
  onOpened: R(),
  onClose: R(),
  onClosed: R(),
  "onUpdate:active": R()
}, { name: $4, classes: ml, n: Vn } = ne("fab"), wi = ee({
  name: $4,
  inheritAttrs: !1,
  props: Km,
  setup(e, { slots: n, attrs: r }) {
    const o = Pn(e, "active"), t = y(null), a = y(null);
    pe(() => e.trigger, () => {
      o.value = !1;
    }), pe(() => e.disabled, () => {
      o.value = !1;
    }), pe(() => [
      e.position,
      e.fixed,
      e.top,
      e.bottom,
      e.left,
      e.right
    ], () => {
      var d;
      (d = a.value) == null || d.reset();
    }), _f(t, "click", s);
    function i(d, c, f) {
      if (d.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (f === 0) {
          k(e.onClick, o.value, d);
          return;
        }
        o.value = c, k(e.onClick, o.value, d), k(o.value ? e.onOpen : e.onClose);
      }
    }
    function l(d, c) {
      e.trigger !== "hover" || e.disabled || c === 0 || (o.value = d, k(o.value ? e.onOpen : e.onClose));
    }
    function s() {
      e.trigger !== "click" || e.disabled || o.value !== !1 && (o.value = !1, k(e.onClose));
    }
    function u() {
      return n.trigger ? e.show ? n.trigger({ active: o.value }) : null : Me(X(Dn, {
        "var-fab-cover": !0,
        class: Vn("trigger"),
        type: e.type,
        color: e.color,
        disabled: e.disabled,
        elevation: e.elevation,
        iconContainer: !0
      }, { default: () => [X(Je, {
        "var-fab-cover": !0,
        class: ml([
          o.value,
          Vn("trigger-active-icon"),
          Vn("trigger-inactive-icon")
        ]),
        name: o.value ? e.activeIcon : e.inactiveIcon,
        size: o.value ? e.activeIconSize : e.inactiveIconSize,
        namespace: o.value ? e.activeIconNamespace : e.inactiveIconNamespace,
        transition: 200,
        animationClass: Vn("--trigger-icon-animation")
      }, null)] }), [[Jn, e.show]]);
    }
    return () => {
      var d;
      const c = iu((d = k(n.default)) != null ? d : []), f = ot(e.drag) ? {} : e.drag;
      return X(ua, je({
        ref: a,
        class: ml(Vn(`--position-${e.position}`), [!e.fixed, Vn("--absolute")]),
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
        onClick: (v) => i(v, !o.value, c.length)
      }, r), { default: () => [X("div", {
        class: ml(Vn(), Vn(`--direction-${e.direction}`), [e.safeArea, Vn("--safe-area")]),
        ref: t,
        onMouseleave: () => l(!1, c.length),
        onMouseenter: () => l(!0, c.length)
      }, [X(en, { name: Vn("--active-transition") }, { default: () => [u()] }), X(en, {
        name: Vn(`--actions-transition-${e.direction}`),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, { default: () => [Me(X("div", {
        class: Vn("actions"),
        onClick: (v) => v.stopPropagation()
      }, [c.map((v) => {
        var m;
        return X("div", {
          class: Vn("action"),
          key: (m = v.key) != null ? m : void 0
        }, [v]);
      })]), [[Jn, e.show && o.value && c.length]])] })])] });
    };
  }
});
ae(wi);
de(wi, Km);
var aD = wi, cs = wi, qm = {
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
  "onUpdate:anchor": R(),
  onAnchorChange: R()
}, { name: C4, n: S4, classes: O4 } = ne("floating-panel"), Ec = 100, Ic = 0.2;
function P4(e, n) {
  return g(), ke(cr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [V("div", {
    class: p(e.classes(e.n(), [e.safeArea, e.n("--safe-area")], e.formatElevation(e.elevation, 3))),
    style: q({
      height: `${e.toSizeUnit(e.maxAnchor)}`,
      transform: `translateY(calc(100% - ${e.toSizeUnit(e.visibleHeight)}))`,
      transition: e.touching ? "none" : `transform ${e.toNumber(e.duration)}ms var(--floating-panel-transition-timing-function), background-color 0.25s`
    }),
    onTouchstart: n[0] || (n[0] = (...r) => e.handleTouchstart && e.handleTouchstart(...r)),
    onTouchmove: n[1] || (n[1] = (...r) => e.handleTouchmove && e.handleTouchmove(...r)),
    onTouchend: n[2] || (n[2] = (...r) => e.handleTouchend && e.handleTouchend(...r)),
    onTouchcancel: n[3] || (n[3] = (...r) => e.handleTouchend && e.handleTouchend(...r))
  }, [L(e.$slots, "header", {}, () => [V("div", { class: p(e.n("header")) }, [V("div", { class: p(e.n("header-toolbar")) }, null, 2)], 2)]), V("div", {
    ref: "contentRef",
    class: p(e.n("content"))
  }, [L(e.$slots, "default")], 2)], 38)], 8, ["to", "disabled"]);
}
var Xm = ee({
  name: C4,
  props: qm,
  setup(e) {
    const n = y(0), r = y(null), { height: o } = W0(), t = E(() => o.value * 0.6), a = Pn(e, "anchor", { defaultValue: Ec }), i = E(() => {
      const A = [Ec, t.value], { anchors: B } = e;
      return Xn(B) ? A : B;
    }), l = E(() => Math.min(...i.value)), s = E(() => Math.max(...i.value)), { disabled: u } = xr(), { deltaY: d, touching: c, startTouch: f, moveTouch: v, endTouch: m, isReachTop: h, isReachBottom: w } = bo();
    let $;
    at(() => c.value), pe(() => a.value, C, { immediate: !0 }), pe(() => i.value, () => {
      C(a.value);
    }, { immediate: !0 });
    function C(A) {
      I(A ?? l.value);
    }
    function b(A) {
      f(A), $ = n.value;
    }
    function P(A) {
      var B;
      v(A);
      const T = A.target, D = r.value === T || ((B = r.value) == null ? void 0 : B.contains(T));
      if (!(D && !e.contentDraggable)) {
        if (D && e.contentDraggable && n.value >= s.value && !h(r.value)) {
          w(r.value) && Ae(A);
          return;
        }
        I(Y($ - d.value)), Ae(A);
      }
    }
    function O() {
      m();
      const A = a.value;
      I(n.value), a.value = n.value, a.value !== A && k(e.onAnchorChange, n.value);
    }
    function I(A) {
      n.value = c.value ? A : M(A);
    }
    function Y(A) {
      if (A > s.value) {
        const B = A - s.value;
        return s.value + B * Ic;
      }
      if (A < l.value) {
        const B = l.value - A;
        return l.value - B * Ic;
      }
      return A;
    }
    function M(A) {
      if (i.value.includes(A)) return A;
      let B = 1 / 0, T = 0;
      return i.value.forEach((D) => {
        const U = Math.abs(D - A);
        U < B && (B = U, T = D);
      }), T;
    }
    return {
      contentRef: r,
      teleportDisabled: u,
      touching: c,
      minAnchor: l,
      maxAnchor: s,
      visibleHeight: n,
      n: S4,
      classes: O4,
      toSizeUnit: Te,
      toNumber: H,
      formatElevation: vn,
      handleTouchstart: b,
      handleTouchmove: P,
      handleTouchend: O
    };
  }
});
Xm.render = P4;
var ki = Xm;
ae(ki);
de(ki, qm);
var iD = ki, fs = ki, Gm = {
  disabled: Boolean,
  readonly: Boolean,
  scrollToError: String,
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  },
  onSubmit: R(),
  onReset: R()
}, Bc = (e, n, r) => new Promise((o, t) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: z4, n: T4 } = ne("form");
function E4(e, n) {
  return g(), S("form", {
    class: p(e.n()),
    onSubmit: n[0] || (n[0] = (...r) => e.handleSubmit && e.handleSubmit(...r)),
    onReset: n[1] || (n[1] = (...r) => e.handleReset && e.handleReset(...r))
  }, [L(e.$slots, "default")], 34);
}
var Zm = ee({
  name: z4,
  props: Gm,
  setup(e) {
    const n = E(() => e.disabled), r = E(() => e.readonly), { formItems: o, bindFormItems: t } = D1();
    t({
      disabled: n,
      readonly: r
    });
    function a(c) {
      setTimeout(() => {
        const f = Ar(c), v = f === window ? 0 : td(f);
        Lo(f, {
          top: td(c) - v - rn(e.scrollToErrorOffsetY),
          animation: Bl
        });
      }, 300);
    }
    function i(c) {
      return Bc(this, null, function* () {
        Ae(c);
        const f = yield s();
        k(e.onSubmit, f);
      });
    }
    function l(c) {
      Ae(c), u(), k(e.onReset);
    }
    function s() {
      return Bc(this, null, function* () {
        var c;
        const f = yield Promise.all(o.map(({ validate: v }) => v()));
        if (e.scrollToError) {
          const [, v] = Lf(f, (h) => h === !1, e.scrollToError), m = v > -1;
          return m && a((c = o[v].instance.proxy) == null ? void 0 : c.$el), !m;
        }
        return f.every((v) => v === !0);
      });
    }
    function u() {
      return o.forEach(({ reset: c }) => c());
    }
    function d() {
      return o.forEach(({ resetValidation: c }) => c());
    }
    return {
      n: T4,
      handleSubmit: i,
      handleReset: l,
      validate: s,
      reset: u,
      resetValidation: d
    };
  }
});
Zm.render = E4;
var ko = Zm;
ko.useValidation = jn;
ko.useForm = Wn;
ae(ko);
de(ko, Gm);
var lD = ko, vs = ko, Jm = {
  highlighter: Object,
  theme: String,
  tag: {
    type: String,
    default: "div"
  }
}, { name: I4, n: B4 } = ne("highlighter-provider"), $i = ee({
  name: I4,
  props: Jm,
  setup(e, { slots: n }) {
    return lS({
      highlighter: E(() => e.highlighter),
      theme: E(() => e.theme)
    }), () => xo(e.tag, { class: B4() }, k(n.default));
  }
});
ae($i);
de($i, Jm);
var sD = $i, ps = $i, Qm = {
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
  onClick: R(),
  onLoad: R(),
  onError: R()
}, { name: D4, n: M4, classes: A4 } = ne("image"), N4 = [
  "alt",
  "title",
  "referrerpolicy",
  "lazy-loading",
  "lazy-error"
], V4 = [
  "alt",
  "title",
  "referrerpolicy",
  "src"
];
function R4(e, n) {
  var r;
  const o = We("lazy"), t = We("ripple");
  return Me((g(), S("div", {
    class: p(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
    style: q({
      width: e.toSizeUnit(e.width),
      height: e.toSizeUnit(e.height),
      borderRadius: e.toSizeUnit(e.radius)
    })
  }, [
    e.lazy && !e.showErrorSlot ? Me((g(), S("img", {
      key: 0,
      role: "img",
      class: p(e.n("image")),
      alt: e.alt,
      title: e.title,
      referrerpolicy: e.referrerpolicy,
      "lazy-loading": e.loading,
      "lazy-error": e.error,
      style: q({
        objectFit: e.fit,
        objectPosition: e.position
      }),
      onLoad: n[0] || (n[0] = (...a) => e.handleLoad && e.handleLoad(...a)),
      onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
    }, null, 46, N4)), [[o, (r = e.src) != null ? r : ""]]) : K("v-if", !0),
    !e.lazy && !e.showErrorSlot ? (g(), S("img", {
      key: 1,
      role: "img",
      class: p(e.n("image")),
      alt: e.alt,
      title: e.title,
      referrerpolicy: e.referrerpolicy,
      style: q({
        objectFit: e.fit,
        objectPosition: e.position
      }),
      src: e.src,
      onLoad: n[2] || (n[2] = (...a) => e.handleLoad && e.handleLoad(...a)),
      onError: n[3] || (n[3] = (...a) => e.handleError && e.handleError(...a)),
      onClick: n[4] || (n[4] = (...a) => e.handleClick && e.handleClick(...a))
    }, null, 46, V4)) : K("v-if", !0),
    e.showErrorSlot ? L(e.$slots, "error", { key: 2 }) : K("v-if", !0)
  ], 6)), [[t, { disabled: !e.ripple }]]);
}
var xm = ee({
  name: D4,
  directives: {
    Lazy: Ko,
    Ripple: sn
  },
  props: Qm,
  setup(e, { slots: n }) {
    const r = y(!1);
    pe(() => e.src, () => {
      r.value = !1;
    });
    function o(i) {
      r.value = !!n.error, k(e.onError, i);
    }
    function t(i) {
      const l = i.currentTarget;
      if (e.lazy) {
        if (l._lazy.state === "success") {
          k(e.onLoad, i);
          return;
        }
        l._lazy.state === "error" && o(i);
      } else k(e.onLoad, i);
    }
    function a(i) {
      k(e.onClick, i);
    }
    return {
      showErrorSlot: r,
      n: M4,
      classes: A4,
      toSizeUnit: Te,
      handleLoad: t,
      handleError: o,
      handleClick: a
    };
  }
});
xm.render = R4;
var Ci = xm;
ae(Ci);
de(Ci, Qm);
var uD = Ci, ms = Ci, Iu = {
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
  onChange: R()
}, eo = (e, n, r) => new Promise((o, t) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), L4 = 250, F4 = 20, { name: U4, n: Dc, classes: H4 } = ne("swipe"), Y4 = ["onClick"];
function j4(e, n) {
  const r = x("var-icon"), o = x("var-button"), t = We("hover");
  return Me((g(), S("div", {
    ref: "swipeEl",
    class: p(e.n())
  }, [
    V("div", {
      class: p(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
      style: q({
        width: e.vertical ? void 0 : e.toSizeUnit(e.trackSize),
        height: e.vertical ? e.toSizeUnit(e.trackSize) : void 0,
        transform: `translate${e.vertical ? "Y" : "X"}(${e.toSizeUnit(e.trackTranslate)})`,
        transitionDuration: e.lockDuration ? "0ms" : `${e.toNumber(e.duration)}ms`
      }),
      onTouchstart: n[0] || (n[0] = (...a) => e.handleTouchstart && e.handleTouchstart(...a)),
      onTouchmove: n[1] || (n[1] = (...a) => e.handleTouchmove && e.handleTouchmove(...a)),
      onTouchend: n[2] || (n[2] = (...a) => e.handleTouchend && e.handleTouchend(...a))
    }, [L(e.$slots, "default")], 38),
    e.navigation ? L(e.$slots, "prev", Kr(je({ key: 0 }, {
      index: e.index,
      length: e.length,
      prev: e.prev,
      next: e.next,
      to: e.to,
      hovering: e.hovering
    })), () => [X(en, { name: e.getNavigationAnimation("prev") }, {
      default: ve(() => [e.navigation === !0 || e.hovering ? (g(), S("div", {
        key: 0,
        class: p(e.classes(e.n("navigation"), e.n("navigation-prev"), [e.vertical, e.n("--navigation-vertical-prev")]))
      }, [X(o, {
        "var-swipe-cover": "",
        disabled: !e.loop && e.index === 0,
        class: p(e.n("navigation-prev-button")),
        onClick: n[3] || (n[3] = (a) => e.prev())
      }, {
        default: ve(() => [X(r, {
          "var-swipe-cover": "",
          class: p(e.n("navigation-prev-button-icon")),
          name: e.vertical ? "chevron-up" : "chevron-left"
        }, null, 8, ["class", "name"])]),
        _: 1
      }, 8, ["disabled", "class"])], 2)) : K("v-if", !0)]),
      _: 1
    }, 8, ["name"])]) : K("v-if", !0),
    e.navigation ? L(e.$slots, "next", Kr(je({ key: 1 }, {
      index: e.index,
      length: e.length,
      hovering: e.hovering,
      prev: e.prev,
      next: e.next,
      to: e.to
    })), () => [X(en, { name: e.getNavigationAnimation("next") }, {
      default: ve(() => [e.navigation === !0 || e.hovering ? (g(), S("div", {
        key: 0,
        class: p(e.classes(e.n("navigation"), e.n("navigation-next"), [e.vertical, e.n("--navigation-vertical-next")]))
      }, [X(o, {
        "var-swipe-cover": "",
        class: p(e.n("navigation-next-button")),
        disabled: !e.loop && e.index === e.length - 1,
        onClick: n[4] || (n[4] = (a) => e.next())
      }, {
        default: ve(() => [X(r, {
          "var-swipe-cover": "",
          class: p(e.n("navigation-next-button-icon")),
          name: e.vertical ? "chevron-down" : "chevron-right"
        }, null, 8, ["class", "name"])]),
        _: 1
      }, 8, ["class", "disabled"])], 2)) : K("v-if", !0)]),
      _: 1
    }, 8, ["name"])]) : K("v-if", !0),
    L(e.$slots, "indicator", Kr(va({
      index: e.index,
      length: e.length,
      hovering: e.hovering,
      prev: e.prev,
      next: e.next,
      to: e.to
    })), () => [e.indicator && e.length ? (g(), S("div", {
      key: 0,
      class: p(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
    }, [(g(!0), S(De, null, Ke(e.length, (a, i) => (g(), S("div", {
      key: a,
      class: p(e.classes(e.n("indicator"), [e.index === i, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
      style: q({ background: e.indicatorColor }),
      onClick: (l) => e.to(i)
    }, null, 14, Y4))), 128))], 2)) : K("v-if", !0)])
  ], 2)), [[t, e.handleHovering]]);
}
var _m = ee({
  name: U4,
  directives: { Hover: An },
  components: {
    VarButton: Dn,
    VarIcon: Je
  },
  props: Iu,
  setup(e) {
    const n = y(null), r = y(0), o = E(() => e.vertical), t = y(0), a = y(0), i = y(!1), l = y(0), s = y(!1), { swipeItems: u, bindSwipeItems: d, length: c } = M1(), { swipeResizeListeners: f, bindSwipeResizeListeners: v } = A1(), { popup: m, bindPopup: h } = cv(), { deltaX: w, deltaY: $, moveX: C, moveY: b, offsetX: P, offsetY: O, touching: I, direction: Y, startTime: M, startTouch: A, moveTouch: B, endTouch: T } = bo(), D = E(() => Y.value === (e.vertical ? "vertical" : "horizontal"));
    let U = !1, F = -1;
    d({
      size: r,
      currentIndex: l,
      vertical: o
    }), Ye(() => window, "keydown", Re), k(h, null), k(v, null), pe(() => c.value, () => eo(null, null, function* () {
      yield Sn(), te(), qe();
    })), m && pe(() => m.show.value, (me) => eo(null, null, function* () {
      me ? (yield Sn(), qe()) : Z();
    })), Vr(qe), go(Z), tr(qe);
    function z(me) {
      return u.find(({ index: Fe }) => Fe.value === me);
    }
    function N() {
      e.loop && (a.value >= 0 && z(c.value - 1).setTranslate(-t.value), a.value <= -(t.value - r.value) && z(0).setTranslate(t.value), a.value > -(t.value - r.value) && a.value < 0 && (z(c.value - 1).setTranslate(0), z(0).setTranslate(0)));
    }
    function ie(me) {
      const Fe = zn(me) ? me : Math.floor((a.value - r.value / 2) / -r.value), { loop: Q } = e;
      return Fe <= -1 ? Q ? -1 : 0 : Fe >= c.value ? Q ? c.value : c.value - 1 : Fe;
    }
    function J(me) {
      const { loop: Fe } = e;
      return me === -1 ? Fe ? c.value - 1 : 0 : me === c.value ? Fe ? 0 : c.value - 1 : me;
    }
    function oe(me) {
      return e.loop ? me < 0 ? c.value + me : me >= c.value ? me - c.value : me : $n(me, 0, c.value - 1);
    }
    function ze() {
      return eo(this, null, function* () {
        const me = a.value >= r.value, Fe = a.value <= -t.value, Q = 0, fe = -(t.value - r.value);
        i.value = !0, (me || Fe) && (i.value = !0, a.value = Fe ? Q : fe, z(0).setTranslate(0), z(c.value - 1).setTranslate(0)), yield Sn(), i.value = !1;
      });
    }
    function te() {
      U || (l.value = oe(H(e.initialIndex)), U = !0);
    }
    function W() {
      const { autoplay: me } = e;
      !me || c.value <= 1 || (Z(), F = window.setTimeout(() => {
        Ne(), W();
      }, H(me)));
    }
    function Z() {
      F && clearTimeout(F);
    }
    function se(me) {
      return eo(this, null, function* () {
        c.value <= 1 || !e.touchable || (A(me), Z(), yield ze(), i.value = !0);
      });
    }
    function he(me) {
      const { touchable: Fe, vertical: Q } = e;
      !I.value || !Fe || (B(me), D.value && (Ae(me), a.value += Q ? b.value : C.value, N()));
    }
    function j() {
      if (!I.value || (T(), !D.value)) return;
      const { vertical: me, onChange: Fe } = e, Q = me ? $.value < 0 : w.value < 0, fe = me ? O.value : P.value, Se = performance.now() - M.value <= L4 && fe >= F4 ? ie(Q ? l.value + 1 : l.value - 1) : ie();
      i.value = !1, a.value = Se * -r.value;
      const Le = l.value;
      l.value = J(Se), W(), Le !== l.value && k(Fe, l.value);
    }
    function re(me) {
      e.navigation === "hover" && (s.value = me);
    }
    function Ce(me) {
      return e.navigation !== "hover" ? "" : Dc(`--navigation${e.vertical ? "-vertical" : ""}-${me}-animation`);
    }
    function Re(me) {
      if (!u.length || u.findIndex(({ isFocusing: Q }) => Q.value) === -1) return;
      const { key: Fe } = me;
      Ae(me), Fe === "ArrowLeft" && dn(), Fe === "ArrowRight" && Ne();
    }
    function qe() {
      n.value && (i.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * c.value, a.value = l.value * -r.value, u.forEach((me) => {
        me.setTranslate(0);
      }), W(), setTimeout(() => {
        i.value = !1;
      }), f.forEach(({ onResize: me }) => {
        me();
      }));
    }
    function Ne(me) {
      return eo(this, null, function* () {
        if (c.value <= 1) return;
        te();
        const { loop: Fe, onChange: Q } = e, fe = l.value;
        if (l.value = oe(fe + 1), me?.event !== !1 && k(Q, l.value), yield ze(), fe === c.value - 1 && Fe) {
          z(0).setTranslate(t.value), a.value = c.value * -r.value;
          return;
        }
        fe !== c.value - 1 && (a.value = l.value * -r.value);
      });
    }
    function dn(me) {
      return eo(this, null, function* () {
        if (c.value <= 1) return;
        te();
        const { loop: Fe, onChange: Q } = e, fe = l.value;
        if (l.value = oe(fe - 1), me?.event !== !1 && k(Q, l.value), yield ze(), fe === 0 && Fe) {
          z(c.value - 1).setTranslate(-t.value), a.value = r.value;
          return;
        }
        fe !== 0 && (a.value = l.value * -r.value);
      });
    }
    function xe(me, Fe) {
      if (c.value <= 1 || me === l.value) return;
      me = me < 0 ? 0 : me, me = me >= c.value ? c.value : me;
      const Q = me > l.value ? Ne : dn, fe = Math.abs(me - l.value);
      Array.from({ length: fe }).forEach((Se, Le) => {
        Q({ event: Le === fe - 1 ? Fe?.event : !1 });
      });
    }
    return {
      length: c,
      index: l,
      swipeEl: n,
      trackSize: t,
      trackTranslate: a,
      lockDuration: i,
      hovering: s,
      n: Dc,
      toSizeUnit: Te,
      classes: H4,
      handleTouchstart: se,
      handleTouchmove: he,
      handleTouchend: j,
      next: Ne,
      prev: dn,
      to: xe,
      resize: qe,
      toNumber: H,
      handleHovering: re,
      getNavigationAnimation: Ce
    };
  }
});
_m.render = j4;
var Si = _m;
ae(Si);
de(Si, Iu);
var dD = Si, Xo = Si;
function W4() {
  const { bindParent: e, index: n, parentProvider: r } = yn(Lv);
  return Un(!!e, "SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: r,
    bindSwipe: e
  };
}
var { name: K4, n: q4 } = ne("swipe-item"), X4 = ["aria-hidden"];
function G4(e, n) {
  return g(), S("div", {
    class: p(e.n()),
    style: q({
      width: e.vertical ? void 0 : e.toSizeUnit(e.size),
      height: e.vertical ? e.toSizeUnit(e.size) : void 0,
      transform: `translate${e.vertical ? "Y" : "X"}(${e.toSizeUnit(e.translate)})`
    }),
    tabindex: "-1",
    "aria-hidden": e.currentIndex !== e.index,
    onFocus: n[0] || (n[0] = (r) => e.isFocusing = !0),
    onBlur: n[1] || (n[1] = (r) => e.isFocusing = !1)
  }, [L(e.$slots, "default")], 46, X4);
}
var eh = ee({
  name: K4,
  setup() {
    const e = y(0), n = y(!1), { swipe: r, bindSwipe: o, index: t } = W4(), { size: a, currentIndex: i, vertical: l } = r;
    o({
      index: t,
      isFocusing: E(() => n.value),
      setTranslate: s
    });
    function s(u) {
      e.value = u;
    }
    return {
      isFocusing: n,
      size: a,
      index: t,
      currentIndex: i,
      vertical: l,
      translate: e,
      n: q4,
      toSizeUnit: Te
    };
  }
});
eh.render = G4;
var Bu = eh;
ae(Bu);
var cD = Bu, Go = Bu, Z4 = Object.defineProperty, Mc = Object.getOwnPropertySymbols, J4 = Object.prototype.hasOwnProperty, Q4 = Object.prototype.propertyIsEnumerable, Ac = (e, n, r) => n in e ? Z4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Nc = (e, n) => {
  for (var r in n || (n = {})) J4.call(n, r) && Ac(e, r, n[r]);
  if (Mc)
    for (var r of Mc(n)) Q4.call(n, r) && Ac(e, r, n[r]);
  return e;
}, nh = Nc(Nc({
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
  "onUpdate:show": R(),
  onLongPress: R()
}, Be(Iu, [
  "loop",
  "indicator",
  "onChange"
])), Be(wo, [
  "lockScroll",
  "teleport",
  "closeOnKeyEscape",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onKeyEscape",
  "onRouteChange"
])), { name: x4, n: Vc, classes: _4 } = ne("image-preview"), hl = 12, Rc = 200, e6 = 350, Lc = 200, n6 = 500, Pt = 1, r6 = ["onTouchstart"], o6 = ["src", "alt"];
function t6(e, n) {
  const r = x("var-swipe-item"), o = x("var-swipe"), t = x("var-icon"), a = x("var-popup");
  return g(), ke(a, {
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
    default: ve(() => [
      X(o, je({
        ref: "swipeRef",
        class: e.n("swipe"),
        "var-image-preview-cover": "",
        touchable: e.canSwipe,
        indicator: e.indicator && e.images.length > 1,
        "initial-index": e.toNumber(e.initialIndex),
        loop: e.loop
      }, e.$attrs, { onChange: e.onChange }), {
        default: ve(() => [(g(!0), S(De, null, Ke(e.images, (i, l) => (g(), ke(r, {
          key: i,
          class: p(e.n("swipe-item")),
          "var-image-preview-cover": ""
        }, {
          default: ve(() => [V("div", {
            class: p(e.n("zoom-container")),
            style: q({
              transform: `scale(${e.scale}) translate(${e.translateX}px, ${e.translateY}px)`,
              transitionTimingFunction: e.transitionTimingFunction,
              transitionDuration: e.transitionDuration
            }),
            onTouchstart: (s) => e.handleTouchstart(s, l),
            onTouchmove: n[0] || (n[0] = (...s) => e.handleTouchmove && e.handleTouchmove(...s)),
            onTouchend: n[1] || (n[1] = (...s) => e.handleTouchend && e.handleTouchend(...s)),
            onTouchcancel: n[2] || (n[2] = (...s) => e.handleTouchcancel && e.handleTouchcancel(...s))
          }, [V("img", {
            role: "img",
            class: p(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
            src: i,
            alt: i
          }, null, 10, o6)], 46, r6)]),
          _: 2
        }, 1032, ["class"]))), 128))]),
        indicator: ve(({ index: i, length: l }) => [L(e.$slots, "indicator", {
          index: i,
          length: l
        }, () => [e.indicator && e.images.length > 1 ? (g(), S("div", {
          key: 0,
          class: p(e.n("indicators"))
        }, ue(i + 1) + " / " + ue(l), 3)) : K("v-if", !0)])]),
        _: 3
      }, 16, [
        "class",
        "touchable",
        "indicator",
        "initial-index",
        "loop",
        "onChange"
      ]),
      L(e.$slots, "close-icon", {}, () => [e.closeable ? (g(), ke(t, {
        key: 0,
        class: p(e.n("close-icon")),
        name: "close-circle",
        "var-image-preview-cover": "",
        onClick: e.close
      }, null, 8, ["class", "onClick"])) : K("v-if", !0)]),
      e.$slots.extra ? (g(), S("div", {
        key: 0,
        class: p(e.n("extra"))
      }, [L(e.$slots, "extra")], 2)) : K("v-if", !0)
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
var rh = ee({
  name: x4,
  components: {
    VarSwipe: Xo,
    VarSwipeItem: Go,
    VarPopup: Mr,
    VarIcon: Je
  },
  inheritAttrs: !1,
  props: nh,
  setup(e) {
    const n = Pn(e, "show"), r = y(1), o = y(0), t = y(0), a = y(), i = y(), l = y(!0), s = y(null), { moveX: u, moveY: d, distance: c, startTime: f, startTouch: v, moveTouch: m, endTouch: h } = bo(), w = E(() => {
      const { imagePreventDefault: W, show: Z } = e;
      return Z && W;
    });
    let $ = null, C = null, b = !1;
    const P = {
      start: null,
      prev: null
    };
    Ye(() => document, "contextmenu", ie);
    function O(W) {
      r.value = H(W), l.value = !1, P.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, Lc);
    }
    function I() {
      r.value = 1, o.value = 0, t.value = 0, l.value = !0, P.prev = null, a.value = void 0, i.value = void 0;
    }
    function Y(W) {
      return P.prev ? c.value <= hl && performance.now() - f.value <= Rc && P.prev === W : !1;
    }
    function M(W) {
      return !W || !P.start || !P.prev ? !1 : c.value <= hl && performance.now() - f.value < e6 && (W === P.start || W.parentNode === P.start);
    }
    function A() {
      h(), window.clearTimeout(C), b = !1, P.start = null;
    }
    function B(W) {
      if (h(), window.clearTimeout(C), b) {
        b = !1;
        return;
      }
      const Z = M(W.target);
      $ = window.setTimeout(() => {
        Z && N(), P.start = null;
      }, Rc);
    }
    function T(W, Z) {
      window.clearTimeout($), window.clearTimeout(C);
      const se = W.currentTarget;
      if (P.start = se, C = window.setTimeout(() => {
        b = !0, k(e.onLongPress, Z);
      }, n6), Y(se)) {
        r.value > Pt ? I() : O(e.zoom);
        return;
      }
      v(W), P.prev = se;
    }
    function D(W) {
      const { offsetWidth: Z, offsetHeight: se } = W, { naturalWidth: he, naturalHeight: j } = W.querySelector(`.${Vc("image")}`);
      return {
        width: Z,
        height: se,
        imageRadio: j / he,
        rootRadio: se / Z,
        zoom: H(e.zoom)
      };
    }
    function U(W) {
      const { zoom: Z, imageRadio: se, rootRadio: he, width: j, height: re } = D(W);
      if (!se) return 0;
      const Ce = se > he ? re / se : j;
      return Math.max(0, (Z * Ce - j) / 2) / Z;
    }
    function F(W) {
      const { zoom: Z, imageRadio: se, rootRadio: he, width: j, height: re } = D(W);
      if (!se) return 0;
      const Ce = se > he ? re : j * se;
      return Math.max(0, (Z * Ce - re) / 2) / Z;
    }
    function z(W) {
      if (!P.prev) return;
      m(W);
      const Z = W.currentTarget;
      if (c.value > hl && window.clearTimeout(C), r.value > Pt) {
        const se = U(Z), he = F(Z);
        o.value = $n(o.value + u.value, -se, se), t.value = $n(t.value + d.value, -he, he);
      }
      P.prev = Z;
    }
    function N() {
      if (r.value > Pt) {
        I(), setTimeout(() => k(e["onUpdate:show"], !1), Lc);
        return;
      }
      k(e["onUpdate:show"], !1);
    }
    function ie(W) {
      w.value && Ae(W);
    }
    function J(W) {
      var Z;
      (Z = s.value) == null || Z.prev(W);
    }
    function oe(W) {
      var Z;
      (Z = s.value) == null || Z.next(W);
    }
    function ze(W, Z) {
      var se;
      (se = s.value) == null || se.to(W, Z);
    }
    function te(W) {
      W <= Pt ? I() : O(W);
    }
    return {
      swipeRef: s,
      isPreventDefault: w,
      show: n,
      scale: r,
      translateX: o,
      translateY: t,
      canSwipe: l,
      transitionTimingFunction: a,
      transitionDuration: i,
      n: Vc,
      classes: _4,
      toNumber: H,
      handleTouchstart: T,
      handleTouchmove: z,
      handleTouchend: B,
      handleTouchcancel: A,
      close: N,
      prev: J,
      next: oe,
      to: ze,
      zoom: te
    };
  }
});
rh.render = t6;
var vt = rh, a6 = Object.defineProperty, i6 = Object.defineProperties, l6 = Object.getOwnPropertyDescriptors, Fc = Object.getOwnPropertySymbols, s6 = Object.prototype.hasOwnProperty, u6 = Object.prototype.propertyIsEnumerable, Uc = (e, n, r) => n in e ? a6(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, zt = (e, n) => {
  for (var r in n || (n = {})) s6.call(n, r) && Uc(e, r, n[r]);
  if (Fc)
    for (var r of Fc(n)) u6.call(n, r) && Uc(e, r, n[r]);
  return e;
}, Hc = (e, n) => i6(e, l6(n)), Or, Ao = {};
function d6(e = {}) {
  return tn(e) ? Hc(zt({}, Ao), { images: [e] }) : He(e) ? Hc(zt({}, Ao), { images: e }) : zt(zt({}, Ao), e);
}
function Hr(e) {
  if (!or()) return;
  Hr.close();
  const n = nn(d6(e));
  n.teleport = "body", Or = n;
  const { unmountInstance: r } = yo(vt, n, {
    onClose: () => k(n.onClose),
    onClosed: () => {
      k(n.onClosed), r(), Or === n && (Or = null);
    },
    onRouteChange: () => {
      r(), Or === n && (Or = null);
    },
    "onUpdate:show": (o) => {
      n.show = o;
    }
  });
  n.show = !0;
}
Hr.close = () => {
  if (Or != null) {
    const e = Or;
    Or = null, Ve().then(() => {
      e.show = !1;
    });
  }
};
Hr.setDefaultOptions = (e) => {
  Ao = e;
};
Hr.resetDefaultOptions = () => {
  Ao = {};
};
Hr.Component = vt;
ae(vt);
ae(vt, Hr);
de(Hr, nh);
var fD = vt, Zo = Hr, oh = { index: [Number, String] }, th = /* @__PURE__ */ Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function c6() {
  const { bindChildren: e, length: n, childProviders: r } = wn(th);
  return {
    length: n,
    indexAnchors: r,
    bindIndexAnchors: e
  };
}
function f6() {
  const { parentProvider: e, index: n, bindParent: r } = yn(th);
  return Un(!!r, "IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: r
  };
}
var { name: v6, n: p6, classes: m6 } = ne("index-anchor");
function h6(e, n) {
  return g(), ke(ho(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: "anchorEl",
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode
  }, {
    default: ve(() => [V("div", je({ class: e.n() }, e.$attrs), [L(e.$slots, "default", {}, () => [Ie(ue(e.name), 1)])], 16)]),
    _: 3
  }, 8, [
    "offset-top",
    "z-index",
    "disabled",
    "css-mode"
  ]);
}
var ah = ee({
  name: v6,
  components: { VarSticky: po },
  inheritAttrs: !1,
  props: oh,
  setup(e) {
    const n = y(!1), r = E(() => e.index), o = y(null), { index: t, indexBar: a, bindIndexBar: i } = f6(), { active: l, sticky: s, cssMode: u, stickyOffsetTop: d, zIndex: c } = a;
    i({
      index: t,
      name: r,
      setDisabled: v,
      getOffsetTop: f
    });
    function f() {
      return o.value ? o.value.$el ? o.value.$el.offsetTop : o.value.offsetTop : 0;
    }
    function v(m) {
      n.value = m;
    }
    return {
      n: p6,
      classes: m6,
      name: r,
      anchorEl: o,
      active: l,
      sticky: s,
      zIndex: c,
      disabled: n,
      cssMode: u,
      stickyOffsetTop: d,
      Transition: en
    };
  }
});
ah.render = h6;
var Oi = ah;
ae(Oi);
de(Oi, oh);
var vD = Oi, hs = Oi, ih = {
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
  onClick: R(),
  onChange: R()
}, Yc = (e, n, r) => new Promise((o, t) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: g6, n: b6, classes: y6 } = ne("index-bar"), w6 = ["onClick"];
function k6(e, n) {
  return g(), S("div", {
    ref: "barEl",
    class: p(e.n())
  }, [L(e.$slots, "default"), V("ul", {
    class: p(e.n("anchor-list")),
    style: q({
      zIndex: e.toNumber(e.zIndex) + 2,
      display: e.hideList ? "none" : "block"
    })
  }, [(g(!0), S(De, null, Ke(e.anchorNameList, (r) => (g(), S("li", {
    key: r,
    class: p(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
    style: q({ color: e.active === r && e.highlightColor ? e.highlightColor : void 0 }),
    onClick: (o) => e.anchorClick({
      anchorName: r,
      manualCall: !0
    })
  }, [L(e.$slots, "anchor-name", { anchorName: r }, () => [Ie(ue(r), 1)])], 14, w6))), 128))], 6)], 2);
}
var lh = ee({
  name: g6,
  props: ih,
  setup(e) {
    const n = y(""), r = y(null), o = y([]), t = y(), a = E(() => e.sticky), i = E(() => e.stickyCssMode), l = E(() => rn(e.stickyOffsetTop)), s = E(() => e.zIndex), { length: u, indexAnchors: d, bindIndexAnchors: c } = c6();
    let f = null, v = !1;
    const m = {
      active: t,
      sticky: a,
      cssMode: i,
      stickyOffsetTop: l,
      zIndex: s
    };
    pe(() => u.value, () => Yc(null, null, function* () {
      yield Sn(), o.value = d.filter(({ name: I }) => I.value != null).map(({ name: I }) => I.value);
    })), bn(b), pa(P), mo(() => {
      v = !0, P();
    }), Vr(() => {
      !v || t.value === void 0 || (C({
        anchorName: t.value,
        options: { event: !1 }
      }), v = !1);
    }), c(m);
    function h(I, Y) {
      const M = gn(I) ? I.name.value : I;
      M === t.value || M === void 0 || (t.value = M, Y?.event !== !1 && k(e.onChange, M));
    }
    function w() {
      const { top: I } = on(f), { top: Y } = on(r.value);
      return Dr(f) - I + Y;
    }
    function $() {
      const I = Dr(f), Y = f === window ? document.body.scrollHeight : f.scrollHeight, M = w();
      d.forEach((A, B) => {
        const T = I - A.getOffsetTop() + l.value - M, D = B === d.length - 1 ? Y : d[B + 1].getOffsetTop() - A.getOffsetTop();
        A.setDisabled(!0), T >= 0 && T < D && n.value === "" && (A.setDisabled(!1), h(A));
      });
    }
    function C(I) {
      return Yc(this, arguments, function* ({ anchorName: Y, manualCall: M = !1, options: A }) {
        if (M && k(e.onClick, Y), Y === t.value && !v) return;
        const B = d.find(({ name: F }) => Y === F.value);
        if (!B) return;
        const T = w(), D = B.getOffsetTop() - l.value + T, U = ba(f);
        n.value = Y, h(Y, A), yield Lo(f, {
          left: U,
          top: D,
          animation: lp,
          duration: H(e.duration)
        }), yield Sn(), n.value = "";
      });
    }
    function b() {
      f = Ar(r.value), f.addEventListener("scroll", $);
    }
    function P() {
      f && f.removeEventListener("scroll", $);
    }
    function O(I, Y) {
      Gr(() => C({
        anchorName: I,
        options: Y
      }));
    }
    return {
      barEl: r,
      active: t,
      zIndex: s,
      anchorNameList: o,
      n: b6,
      classes: y6,
      toNumber: H,
      scrollTo: O,
      anchorClick: C
    };
  }
});
lh.render = k6;
var Pi = lh;
ae(Pi);
de(Pi, ih);
var pD = Pi, gs = Pi, sh = {
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
  onClick: R()
}, { name: $6, n: C6, classes: S6 } = ne("link");
function O6(e, n) {
  return g(), ke(ho(e.tag), je(e.linkProps, {
    class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n(`--${e.type}`), [e.underline !== "none", e.n(`--underline-${e.underline}`)], [e.disabled, e.n("--disabled")], [e.isFocusing && !e.inMobile(), e.n("--focusing")]),
    style: {
      color: e.textColor,
      fontSize: e.toSizeUnit(e.textSize)
    },
    onClick: e.handleClick,
    onFocus: n[0] || (n[0] = (r) => e.isFocusing = !0),
    onBlur: n[1] || (n[1] = (r) => e.isFocusing = !1)
  }), {
    default: ve(() => [L(e.$slots, "default")]),
    _: 3
  }, 16, [
    "class",
    "style",
    "onClick"
  ]);
}
var uh = ee({
  name: $6,
  props: sh,
  setup(e) {
    const n = y(!1), r = E(() => {
      const { disabled: a, href: i, to: l } = e;
      return a ? "span" : i ? "a" : l ? "router-link" : "a";
    }), o = E(() => {
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
    function t(a) {
      e.disabled || k(e.onClick, a);
    }
    return {
      tag: r,
      linkProps: o,
      isFocusing: n,
      inMobile: No,
      n: C6,
      classes: S6,
      handleClick: t,
      toSizeUnit: Te
    };
  }
});
uh.render = O6;
var zi = uh;
ae(zi);
de(zi, sh);
var mD = zi, bs = zi, dh = {
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
  onLoad: R(),
  "onUpdate:loading": R(),
  "onUpdate:error": R()
}, ch = /* @__PURE__ */ Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function P6() {
  const { bindChildren: e, childProviders: n, length: r } = wn(ch);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
var fh = /* @__PURE__ */ Symbol("TAB_ITEM_BIND_LIST_KEY");
function z6() {
  const { parentProvider: e, bindParent: n, index: r } = yn(ch);
  return Un(!!n, "TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
function T6() {
  const { childProviders: e, bindChildren: n, length: r } = wn(fh);
  return {
    length: r,
    lists: e,
    bindLists: n
  };
}
function E6() {
  const { parentProvider: e, bindParent: n, index: r } = yn(fh);
  return {
    index: r,
    tabItem: e,
    bindTabItem: n
  };
}
var I6 = (e, n, r) => new Promise((o, t) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: B6, n: D6, classes: M6 } = ne("list");
function A6(e, n) {
  const r = x("var-loading"), o = We("ripple");
  return g(), S("div", {
    ref: "listEl",
    class: p(e.classes(e.n(), e.n("$--box")))
  }, [
    L(e.$slots, "default"),
    e.loading ? L(e.$slots, "loading", { key: 0 }, () => {
      var t;
      return [V("div", { class: p(e.n("loading")) }, [V("div", { class: p(e.n("loading-text")) }, ue((t = e.loadingText) != null ? t : (e.pt ? e.pt : e.t)("listLoadingText")), 3), X(r, {
        size: "mini",
        radius: 10
      })], 2)];
    }) : K("v-if", !0),
    e.finished ? L(e.$slots, "finished", { key: 1 }, () => {
      var t;
      return [V("div", { class: p(e.n("finished")) }, ue((t = e.finishedText) != null ? t : (e.pt ? e.pt : e.t)("listFinishedText")), 3)];
    }) : K("v-if", !0),
    e.error ? L(e.$slots, "error", { key: 2 }, () => {
      var t;
      return [Me((g(), S("div", {
        class: p(e.n("error")),
        onClick: n[0] || (n[0] = (...a) => e.load && e.load(...a))
      }, [Ie(ue((t = e.errorText) != null ? t : (e.pt ? e.pt : e.t)("listErrorText")), 1)], 2)), [[o]])];
    }) : K("v-if", !0),
    V("div", {
      ref: "detectorEl",
      class: p(e.n("detector"))
    }, null, 2)
  ], 2);
}
var vh = ee({
  name: B6,
  directives: { Ripple: sn },
  components: { VarLoading: fo },
  props: dh,
  setup(e) {
    const n = y(null), r = y(null), { tabItem: o, bindTabItem: t } = E6(), { t: a } = ar();
    let i;
    k(t, {}), o && pe(() => o.current.value, d), pe(() => [
      e.loading,
      e.error,
      e.finished
    ], d), bn(() => {
      i = Ar(n.value), i.addEventListener("scroll", d), e.immediateCheck && d();
    }), go(u);
    function l() {
      k(e["onUpdate:error"], !1), k(e["onUpdate:loading"], !0), k(e.onLoad);
    }
    function s() {
      const { bottom: c } = on(i), { bottom: f } = on(r.value);
      return Math.floor(f) - rn(e.offset) <= c;
    }
    function u() {
      i && i.removeEventListener("scroll", d);
    }
    function d() {
      return I6(this, null, function* () {
        yield Ve(), !(e.loading || e.finished || e.error || o?.current.value === !1 || !s()) && l();
      });
    }
    return {
      listEl: n,
      detectorEl: r,
      pt: a,
      t: an,
      isNumber: zn,
      load: l,
      check: d,
      n: D6,
      classes: M6
    };
  }
});
vh.render = A6;
var Ti = vh;
ae(Ti);
de(Ti, dh);
var hD = Ti, ys = Ti, N6 = {
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
}, { name: V6, classes: R6, n: jc } = ne("loading-bar"), L6 = ee({
  name: V6,
  props: N6,
  setup(e) {
    return () => X("div", {
      class: R6(jc(), [e.error, jc("--error")]),
      style: {
        zIndex: Ln.zIndex + 10,
        width: `${e.value}%`,
        opacity: e.opacity,
        height: Te(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: Te(e.top),
        transitionDuration: e.transitionDuration == null ? void 0 : `${e.transitionDuration}ms`
      }
    }, null);
  }
}), Du = 200, ph, mh, hh, gh, Ei, Wc, bh = {}, un = nn({
  value: 0,
  opacity: 0,
  error: !1
});
function F6(e) {
  Object.assign(un, e), bh = e;
}
var U6 = () => {
  Object.keys(bh).forEach((e) => {
    un[e] !== void 0 && (un[e] = void 0);
  });
}, yh = () => {
  Wc || (Wc = !0, yo(L6, un));
}, Mu = () => {
  ph = window.setTimeout(() => {
    un.transitionDuration = void 0, !(un.value >= 95) && (un.value += un.value < 70 ? Math.round(5 * Math.random()) : Math.random(), Mu());
  }, 200);
}, Au = () => {
  window.clearTimeout(ph), window.clearTimeout(Ei), window.clearTimeout(hh), window.clearTimeout(mh), window.clearTimeout(gh);
}, wh = () => {
  Au(), un.value = 100, Ei = window.setTimeout(() => {
    un.opacity = 0, gh = window.setTimeout(() => {
      un.error = !1;
    }, 250);
  }, Du + 100);
}, H6 = () => {
  Au(), un.error = !1, un.value = 0, un.transitionDuration = 0, yh(), Ei = window.setTimeout(() => {
    un.opacity = 1;
  }, Du), Mu();
}, Y6 = () => {
  var e;
  hh = window.setTimeout(wh, (e = un.finishDelay) != null ? e : 0);
}, j6 = () => {
  Au(), un.error = !0, un.value === 100 && (un.value = 0, un.transitionDuration = 0), yh(), Ei = window.setTimeout(() => {
    un.opacity = 1;
  }, Du), Mu(), mh = window.setTimeout(wh, 300);
}, kh = {
  start: H6,
  finish: Y6,
  error: j6,
  setDefaultOptions: F6,
  resetDefaultOptions: U6
}, gD = kh, ws = kh, $h = {
  tag: {
    type: String,
    default: "div"
  },
  locale: {
    type: String,
    default: "zh-CN"
  },
  messages: { type: Object }
}, W6 = Object.defineProperty, K6 = Object.defineProperties, q6 = Object.getOwnPropertyDescriptors, Kc = Object.getOwnPropertySymbols, X6 = Object.prototype.hasOwnProperty, G6 = Object.prototype.propertyIsEnumerable, qc = (e, n, r) => n in e ? W6(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Z6 = (e, n) => {
  for (var r in n || (n = {})) X6.call(n, r) && qc(e, r, n[r]);
  if (Kc)
    for (var r of Kc(n)) G6.call(n, r) && qc(e, r, n[r]);
  return e;
}, J6 = (e, n) => K6(e, q6(n)), { name: Q6, n: x6 } = ne("locale-provider"), Ii = ee({
  name: Q6,
  props: $h,
  setup(e, { slots: n }) {
    const r = E(() => {
      var t;
      return Object.entries((t = e.messages) != null ? t : {}).reduce((a, [i, l]) => (a[i] = J6(Z6({}, l), { lang: i }), a), {});
    });
    ty({ t: o });
    function o(t) {
      if (Ir(r.value, e.locale) && Ir(r.value[e.locale], t)) return r.value[e.locale][t];
    }
    return () => xo(e.tag, { class: x6() }, k(n.default));
  }
});
ae(Ii);
de(Ii, $h);
var bD = Ii, ks = Ii, Ch = {
  label: {},
  value: {},
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  option: Object
}, Sh = /* @__PURE__ */ Symbol("SELECT_BIND_OPTION_KEY");
function _6() {
  const { length: e, childProviders: n, bindChildren: r } = wn(Sh);
  return {
    length: e,
    options: n,
    bindOptions: r
  };
}
function eO() {
  const { index: e, parentProvider: n, bindParent: r } = yn(Sh);
  return Un(!!r, "Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: r
  };
}
var { name: nO, n: rO, classes: oO } = ne("option"), tO = ["tabindex"];
function aO(e, n) {
  const r = x("var-checkbox"), o = x("maybe-v-node"), t = x("var-hover-overlay"), a = We("ripple"), i = We("hover");
  return Me((g(), S("div", {
    ref: "root",
    class: p(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")])),
    style: q({ color: e.optionSelected ? e.focusColor : void 0 }),
    tabindex: e.disabled ? void 0 : "-1",
    onFocus: n[2] || (n[2] = (l) => e.isFocusing = !0),
    onBlur: n[3] || (n[3] = (l) => e.isFocusing = !1),
    onClick: n[4] || (n[4] = (...l) => e.handleClick && e.handleClick(...l))
  }, [
    V("div", {
      class: p(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
      style: q({ background: e.optionSelected ? e.focusColor : void 0 })
    }, null, 6),
    e.multiple ? (g(), ke(r, {
      key: 0,
      ref: "checkbox",
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (l) => e.optionSelected = l),
      "checked-color": e.focusColor,
      disabled: e.disabled,
      onClick: n[1] || (n[1] = Fn(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, [
      "modelValue",
      "checked-color",
      "disabled",
      "onChange"
    ])) : K("v-if", !0),
    L(e.$slots, "default", { selected: e.optionSelected }, () => [V("div", { class: p(e.classes(e.n("text"), e.n("$--ellipsis"))) }, [X(o, { is: e.labelVNode }, null, 8, ["is"])], 2)]),
    X(t, {
      hovering: e.hovering && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 46, tO)), [
    [Jn, e.visible],
    [a, { disabled: e.disabled || !e.ripple }],
    [
      i,
      e.handleHovering,
      "desktop"
    ]
  ]);
}
var Oh = ee({
  name: nO,
  directives: {
    Ripple: sn,
    Hover: An
  },
  components: {
    VarCheckbox: io,
    VarHoverOverlay: Hn,
    MaybeVNode: tt
  },
  props: Ch,
  setup(e) {
    const n = y(), r = y(!1), o = y(!1), t = E(() => {
      var z;
      return (z = e.option) != null ? z : {
        label: e.label,
        value: e.value,
        disabled: e.disabled
      };
    }), a = E(() => o.value), i = E(() => e.value), l = E(() => e.disabled), s = E(() => e.ripple), { select: u, bindSelect: d } = eO(), { pattern: c, showMenu: f, filterable: v, multiple: m, focusColor: h, onSelect: w, computeLabel: $, filter: C } = u, { hovering: b, handleHovering: P } = rr(), O = E(() => {
      var z;
      return fn(e.label) ? e.label((z = e.option) != null ? z : {
        label: e.label,
        value: e.value,
        disabled: e.disabled
      }, o.value) : e.label;
    }), I = y(!0), Y = E(() => !v.value || !c.value ? !0 : C(c.value, t.value)), M = E(() => f.value ? Y.value : I.value), A = {
      label: O,
      value: i,
      disabled: l,
      ripple: s,
      selected: a,
      sync: F
    };
    pe([() => e.label, () => e.value], $), pe(() => [f.value, Y.value], () => {
      f.value && (I.value = Y.value);
    }, { immediate: !0 }), d(A), Ye(() => window, "keydown", T), Ye(() => window, "keyup", D);
    function B() {
      e.disabled || U();
    }
    function T(z) {
      r.value && ((z.key === " " || z.key === "Enter") && Ae(z), z.key === "Enter" && n.value.click());
    }
    function D(z) {
      r.value && z.key === " " && (Ae(z), n.value.click());
    }
    function U() {
      m.value && (o.value = !o.value), w(A);
    }
    function F(z) {
      o.value = z;
    }
    return {
      root: n,
      optionSelected: o,
      visible: M,
      multiple: m,
      focusColor: h,
      hovering: b,
      isFocusing: r,
      labelVNode: O,
      n: rO,
      classes: oO,
      handleHovering: P,
      handleClick: B,
      handleSelect: U
    };
  }
});
Oh.render = aO;
var Bi = Oh;
ae(Bi);
de(Bi, Ch);
var yD = Bi, ca = Bi, Ph = {
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
  onClick: R(),
  onKeyEscape: R(),
  "onUpdate:show": R()
}, { name: iO, n: Tt } = ne("overlay"), Di = ee({
  name: iO,
  inheritAttrs: !1,
  props: Ph,
  setup(e, { slots: n, attrs: r }) {
    const { zIndex: o } = it(() => e.show, 3), { onStackTop: t } = fu(() => e.show, o), { disabled: a } = xr();
    at(() => e.show, () => e.lockScroll), Ye(() => window, "keydown", i);
    function i(d) {
      !t() || d.key !== "Escape" || !e.show || (k(e.onKeyEscape), e.closeOnKeyEscape && (Ae(d), k(e["onUpdate:show"], !1)));
    }
    function l() {
      k(e.onClick), k(e["onUpdate:show"], !1);
    }
    function s() {
      return X("div", je({
        class: Tt(),
        style: { zIndex: o.value - 2 }
      }, r), [X("div", {
        class: Tt("overlay"),
        style: { zIndex: o.value - 1 },
        onClick: l
      }, null), X("div", {
        class: Tt("content"),
        style: { zIndex: o.value }
      }, [k(n.default)])]);
    }
    function u() {
      return X(en, { name: Tt("--fade") }, { default: () => [e.show && s()] });
    }
    return () => {
      const { teleport: d } = e;
      return d ? X(cr, {
        to: d,
        disabled: a.value
      }, { default: () => [u()] }) : u();
    };
  }
});
ae(Di);
de(Di, Ph);
var wD = Di, $s = Di, zh = {
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
  onChange: R(),
  "onUpdate:current": R(),
  "onUpdate:size": R()
}, { name: lO, n: sO, classes: uO } = ne("pagination"), dO = ["item-mode", "onClick"];
function cO(e, n) {
  const r = x("var-icon"), o = x("var-input"), t = x("var-menu-option"), a = x("var-menu-select"), i = We("ripple");
  return g(), S("ul", { class: p(e.n()) }, [
    Me((g(), S("li", {
      class: p(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [
        e.simple,
        e.n("item--simple"),
        e.formatElevation(e.elevation, 2)
      ])),
      onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
    }, [L(e.$slots, "prev", {}, () => [X(r, { name: "chevron-left" })])], 2)), [[i, { disabled: e.current <= 1 || e.disabled }]]),
    e.simple ? (g(), S("li", {
      key: 0,
      class: p(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
    }, [X(o, {
      modelValue: e.simpleCurrentValue,
      "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleCurrentValue = l),
      "var-pagination-cover": "",
      variant: "standard",
      hint: !1,
      disabled: e.disabled,
      onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleCurrentValue, l)),
      onKeydown: n[3] || (n[3] = Fu((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
    }, null, 8, ["modelValue", "disabled"]), V("span", null, [Ie(" / " + ue(e.pageCount) + " ", 1), V("div", { class: p(e.n("simple-line")) }, null, 2)])], 2)) : (g(!0), S(De, { key: 1 }, Ke(e.pageList, (l, s) => Me((g(), S("li", {
      key: s,
      "item-mode": e.getMode(l, s),
      class: p(e.classes(e.n("item"), e.formatElevation(e.elevation, 2), [l === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(l, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [l === e.current && e.disabled, e.n("item--disabled--active")])),
      onClick: (u) => e.clickItem(l, s)
    }, [Ie(ue(l), 1)], 10, dO)), [[i, { disabled: e.disabled }]])), 128)),
    Me((g(), S("li", {
      class: p(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [
        e.simple,
        e.n("item--simple"),
        e.formatElevation(e.elevation, 2)
      ])),
      onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
    }, [L(e.$slots, "next", {}, () => [X(r, { name: "chevron-right" })])], 2)), [[i, { disabled: e.current >= e.pageCount || e.disabled }]]),
    e.showSizeChanger ? (g(), ke(a, {
      key: 2,
      modelValue: e.size,
      "onUpdate:modelValue": n[5] || (n[5] = (l) => e.size = l),
      placement: "cover-top",
      disabled: e.disabled
    }, {
      options: ve(() => [(g(!0), S(De, null, Ke(e.sizeOption, (l, s) => (g(), ke(t, {
        key: s,
        value: l,
        onClick: e.clickSize
      }, {
        default: ve(() => [Ie(ue(l) + ue((e.pt ? e.pt : e.t)("paginationItem")) + " / " + ue((e.pt ? e.pt : e.t)("paginationPage")), 1)]),
        _: 2
      }, 1032, ["value", "onClick"]))), 128))]),
      default: ve(() => [V("li", { class: p(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")])) }, [V("div", { class: p(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])) }, [V("span", null, ue(e.size) + ue((e.pt ? e.pt : e.t)("paginationItem")) + " / " + ue((e.pt ? e.pt : e.t)("paginationPage")), 1), X(r, {
        class: p(e.n("size--open-icon")),
        "var-pagination-cover": "",
        name: "menu-down"
      }, null, 8, ["class"])], 2)], 2)]),
      _: 1
    }, 8, ["modelValue", "disabled"])) : K("v-if", !0),
    e.showQuickJumper && !e.simple ? (g(), S("li", {
      key: 3,
      class: p(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
    }, [Ie(ue((e.pt ? e.pt : e.t)("paginationJump")) + " ", 1), X(o, {
      modelValue: e.quickJumperValue,
      "onUpdate:modelValue": n[6] || (n[6] = (l) => e.quickJumperValue = l),
      disabled: e.disabled,
      hint: !1,
      variant: "standard",
      "var-pagination-cover": "",
      onBlur: n[7] || (n[7] = (l) => e.setPage("quick", e.quickJumperValue, l)),
      onKeydown: n[8] || (n[8] = Fu((l) => e.setPage("quick", e.quickJumperValue, l), ["enter"]))
    }, null, 8, ["modelValue", "disabled"])], 2)) : K("v-if", !0),
    e.totalText ? (g(), S("li", {
      key: 4,
      class: p(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
    }, ue(e.totalText), 3)) : K("v-if", !0)
  ], 2);
}
var Th = ee({
  name: lO,
  components: {
    VarMenuSelect: Wo,
    VarMenuOption: lo,
    VarIcon: Je,
    VarInput: Uo
  },
  directives: { Ripple: sn },
  props: zh,
  setup(e) {
    const n = y(""), r = y("1"), o = y(!1), t = y(!1), a = y(H(e.current) || 1), i = y(H(e.size) || 10), l = y([]), s = E(() => Math.ceil(e.maxPagerCount / 2)), u = E(() => Math.ceil(H(e.total) / H(i.value))), d = E(() => [i.value * (a.value - 1) + 1, Math.min(i.value * a.value, H(e.total))]), c = E(() => e.showTotal ? e.showTotal(H(e.total), d.value) : ""), { t: f } = ar();
    pe([() => e.current, () => e.size], ([b, P]) => {
      a.value = H(b) || 1, i.value = H(P || 10);
    }), pe([
      a,
      i,
      u
    ], ([b, P, O], [I, Y]) => {
      let M = [];
      const { maxPagerCount: A, total: B, onChange: T } = e, D = Math.ceil(H(B) / H(Y)), U = O - (A - s.value) - 1;
      if (r.value = `${b}`, O - 2 > A) {
        if (I === void 0 || O !== D) for (let F = 2; F < A + 2; F++) M.push(F);
        if (b <= A && b < U) {
          M = [];
          for (let F = 1; F < A + 1; F++) M.push(F + 1);
          o.value = !0, t.value = !1;
        }
        if (b > A && b < U) {
          M = [];
          for (let F = 1; F < A + 1; F++) M.push(b + F - s.value);
          o.value = b === 2 && A === 1, t.value = !1;
        }
        if (b >= U) {
          M = [];
          for (let F = 1; F < A + 1; F++) M.push(O - (A - F) - 1);
          o.value = !1, t.value = !0;
        }
        M = [
          1,
          "...",
          ...M,
          "...",
          O
        ];
      } else for (let F = 1; F <= O; F++) M.push(F);
      l.value = M, I != null && O > 0 && k(T, b, P), k(e["onUpdate:current"], b), k(e["onUpdate:size"], P);
    }, { immediate: !0 });
    function v(b, P) {
      return zn(b) ? !1 : P === 1 ? o.value : t.value;
    }
    function m(b, P) {
      return zn(b) ? "basic" : P === 1 ? "head" : "tail";
    }
    function h(b, P) {
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
        zn(b) && (a.value = b);
      }
    }
    function w() {
      const b = $(a.value);
      r.value = String(b), a.value = b;
    }
    function $(b) {
      return b > u.value ? u.value : b < 1 ? 1 : b;
    }
    function C(b, P, O) {
      O.target.blur();
      const I = $(H(P));
      r.value = String(I), a.value = I, b === "quick" && (n.value = "");
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
      t: an,
      n: sO,
      classes: uO,
      getMode: m,
      isHideEllipsis: v,
      clickItem: h,
      clickSize: w,
      setPage: C,
      toNumber: H,
      formatElevation: vn
    };
  }
});
Th.render = cO;
var Mi = Th;
ae(Mi);
de(Mi, zh);
var kD = Mi, Cs = Mi, Eh = {
  elevation: {
    type: [
      Boolean,
      Number,
      String
    ],
    default: !1
  },
  ripple: Boolean,
  radius: [Number, String],
  width: [Number, String],
  height: [Number, String],
  round: Boolean,
  inline: Boolean,
  onClick: R()
}, { name: fO, n: vO, classes: pO } = ne("paper");
function mO(e, n) {
  const r = We("ripple");
  return Me((g(), S("div", {
    class: p(e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 2), [e.onClick, e.n("--cursor")], [e.round, e.n("--round")], [e.inline, e.n("$--inline-flex")])),
    style: q({
      width: e.toSizeUnit(e.width),
      height: e.toSizeUnit(e.height),
      "border-radius": e.toSizeUnit(e.radius)
    }),
    onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
  }, [L(e.$slots, "default")], 6)), [[r, { disabled: !e.ripple }]]);
}
var Ih = ee({
  name: fO,
  directives: { Ripple: sn },
  props: Eh,
  setup(e) {
    function n(r) {
      k(e.onClick, r);
    }
    return {
      n: vO,
      classes: pO,
      formatElevation: vn,
      toSizeUnit: Te,
      handleClick: n
    };
  }
});
Ih.render = mO;
var Ai = Ih;
ae(Ai);
de(Ai, Eh);
var $D = Ai, Ss = Ai, hO = Object.defineProperty, Xc = Object.getOwnPropertySymbols, gO = Object.prototype.hasOwnProperty, bO = Object.prototype.propertyIsEnumerable, Gc = (e, n, r) => n in e ? hO(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, yO = (e, n) => {
  for (var r in n || (n = {})) gO.call(n, r) && Gc(e, r, n[r]);
  if (Xc)
    for (var r of Xc(n)) bO.call(n, r) && Gc(e, r, n[r]);
  return e;
}, Bh = yO({
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
  onChange: R(),
  onConfirm: R(),
  onCancel: R(),
  "onUpdate:modelValue": R()
}, Be(wo, [
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
])), { name: wO, n: kO, classes: $O } = ne("picker"), Zc = 300, CO = 15, Jc = 200, SO = 1e3, Qc = 0, OO = [
  "onTouchstartPassive",
  "onTouchmove",
  "onTouchend"
], PO = ["onTransitionend"], zO = ["onClick"];
function TO(e, n) {
  const r = x("var-button");
  return g(), ke(ho(e.dynamic ? e.n("$-popup") : e.Transition), je(e.dynamic ? {
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
    default: ve(() => [V("div", je({ class: e.n() }, e.$attrs), [e.toolbar ? (g(), S("div", {
      key: 0,
      class: p(e.n("toolbar"))
    }, [
      L(e.$slots, "cancel", {}, () => [X(r, {
        class: p(e.n("cancel-button")),
        "var-picker-cover": "",
        text: "",
        "text-color": e.cancelButtonTextColor,
        onClick: e.cancel
      }, {
        default: ve(() => {
          var o;
          return [Ie(ue((o = e.cancelButtonText) != null ? o : (e.pt ? e.pt : e.t)("pickerCancelButtonText")), 1)];
        }),
        _: 1
      }, 8, [
        "class",
        "text-color",
        "onClick"
      ])]),
      L(e.$slots, "title", {}, () => {
        var o;
        return [V("div", { class: p(e.n("title")) }, ue((o = e.title) != null ? o : (e.pt ? e.pt : e.t)("pickerTitle")), 3)];
      }),
      L(e.$slots, "confirm", {}, () => [X(r, {
        class: p(e.n("confirm-button")),
        text: "",
        "var-picker-cover": "",
        "text-color": e.confirmButtonTextColor,
        onClick: e.confirm
      }, {
        default: ve(() => {
          var o;
          return [Ie(ue((o = e.confirmButtonText) != null ? o : (e.pt ? e.pt : e.t)("pickerConfirmButtonText")), 1)];
        }),
        _: 1
      }, 8, [
        "class",
        "text-color",
        "onClick"
      ])])
    ], 2)) : K("v-if", !0), V("div", {
      class: p(e.n("columns")),
      style: q({ height: `${e.columnHeight}px` })
    }, [
      (g(!0), S(De, null, Ke(e.scrollColumns, (o) => (g(), S("div", {
        key: o.id,
        class: p(e.n("column")),
        onTouchstartPassive: (t) => e.handleTouchstart(t, o),
        onTouchmove: Fn((t) => e.handleTouchmove(t, o), ["prevent"]),
        onTouchend: (t) => e.handleTouchend(o)
      }, [V("div", {
        ref_for: !0,
        ref: (t) => e.setScrollEl(t, o),
        class: p(e.n("scroller")),
        style: q({
          transform: `translateY(${o.translate}px)`,
          transitionDuration: `${o.duration}ms`,
          transitionProperty: o.duration ? "transform" : "none"
        }),
        onTransitionend: (t) => e.handleTransitionend(o)
      }, [(g(!0), S(De, null, Ke(o.column, (t, a) => (g(), S("div", {
        key: e.getValue(t),
        class: p(e.classes(e.n("option"), t.className)),
        style: q({ height: `${e.optionHeight}px` }),
        onClick: (i) => e.handleClick(o, a)
      }, [V("div", { class: p(e.classes(e.n("text"), t.textClassName)) }, ue(t[e.getOptionKey("text")]), 3)], 14, zO))), 128))], 46, PO)], 42, OO))), 128)),
      V("div", {
        class: p(e.n("picked")),
        style: q({
          top: `${e.center}px`,
          height: `${e.optionHeight}px`
        })
      }, null, 6),
      V("div", {
        class: p(e.n("mask")),
        style: q({ backgroundSize: `100% ${(e.columnHeight - e.optionHeight) / 2}px` })
      }, null, 6)
    ], 6)], 16)]),
    _: 3
  }, 16);
}
var Dh = ee({
  name: wO,
  components: {
    VarButton: Dn,
    VarPopup: Mr
  },
  inheritAttrs: !1,
  props: Bh,
  setup(e) {
    const n = Pn(e, "modelValue"), r = y([]), o = E(() => H(e.columnsCount)), t = E(() => rn(e.optionHeight)), a = E(() => rn(e.optionCount)), i = E(() => a.value * t.value / 2 - t.value / 2), l = E(() => a.value * t.value), { prevY: s, moveY: u, dragging: d, startTouch: c, moveTouch: f, endTouch: v } = bo(), { t: m } = ar();
    let h = [];
    Y(), pe(() => e.columns, Y, { deep: !0 }), pe(() => n.value, Y);
    function w(j) {
      return {
        text: e.textKey,
        value: e.valueKey,
        children: e.childrenKey
      }[j];
    }
    function $(j) {
      var re;
      return (re = j[w("value")]) != null ? re : j[w("text")];
    }
    function C(j) {
      h = [...j];
    }
    function b(j) {
      return (e.columnsCount != null ? j.slice(0, o.value) : j).map((re, Ce) => {
        const Re = {
          id: Qc++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: i.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: re,
          scrollEl: null,
          scrolling: !1
        }, qe = n.value[Ce], Ne = Re.column.findIndex((dn) => qe === $(dn));
        return Re.index = Ne === -1 ? 0 : Ne, F(Re), Re;
      });
    }
    function P(j) {
      const re = [];
      return O(re, j), re;
    }
    function O(j, re, Ce = !0, Re = 1) {
      var qe;
      if (re.length && (e.columnsCount == null || Re <= o.value)) {
        const Ne = {
          id: Qc++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: i.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: re,
          scrollEl: null,
          scrolling: !1
        };
        if (j.push(Ne), Ce) {
          const dn = n.value[j.length - 1], xe = re.findIndex((me) => dn === $(me));
          Ne.index = xe === -1 ? 0 : xe;
        }
        F(Ne), O(j, (qe = Ne.column[Ne.index][w("children")]) != null ? qe : [], Ce, Re + 1);
      }
    }
    function I(j) {
      var re;
      r.value.splice(r.value.indexOf(j) + 1), O(r.value, (re = j.column[j.index][w("children")]) != null ? re : [], !1, r.value.length + 1);
    }
    function Y() {
      r.value = e.cascade ? P(e.columns) : b(e.columns);
      const { indexes: j } = U();
      C(j);
    }
    function M(j, re) {
      re.scrollEl = j;
    }
    function A(j) {
      k(e["onUpdate:show"], j);
    }
    function B(j) {
      const re = i.value - j.column.length * t.value, Ce = t.value + i.value;
      j.translate = $n(j.translate, re, Ce);
    }
    function T(j, re) {
      return If(Math.round((i.value - re) / t.value), j.column);
    }
    function D(j) {
      return j.translate = i.value - j.index * t.value, j.translate;
    }
    function U() {
      const j = [], re = [], Ce = [];
      return r.value.forEach(({ column: Re, index: qe }) => {
        const Ne = Re[qe];
        j.push($(Ne)), re.push(qe), Ce.push(Ne);
      }), {
        values: j,
        indexes: re,
        options: Ce
      };
    }
    function F(j, re = 0) {
      D(j), j.duration = re;
    }
    function z(j, re, Ce) {
      j.translate += Math.abs(re / Ce) / 3e-3 * (re < 0 ? -1 : 1);
    }
    function N(j, re) {
      d.value || (j.index = re, F(j, Jc));
    }
    function ie(j, re) {
      re.touching = !0, re.translate = dl(re.scrollEl), c(j);
    }
    function J(j, re) {
      if (!re.touching) return;
      f(j), re.scrolling = !1, re.duration = 0, re.prevY = s.value, re.translate += u.value, B(re);
      const Ce = performance.now();
      Ce - re.momentumTime > Zc && (re.momentumTime = Ce, re.momentumPrevY = re.translate);
    }
    function oe(j) {
      v(), j.touching = !1, j.prevY = 0;
      const re = j.translate - j.momentumPrevY, Ce = performance.now() - j.momentumTime, Re = Math.abs(re) >= CO && Ce <= Zc, qe = j.translate;
      Re && z(j, re, Ce), j.index = T(j, j.translate), F(j, Re ? SO : Jc), j.scrolling = j.translate !== qe, j.scrolling || W(j);
    }
    function ze(j) {
      j.scrolling = !1, W(j);
    }
    function te() {
      const { indexes: j } = U();
      return j.every((re, Ce) => re === h[Ce]);
    }
    function W(j) {
      const { onChange: re, cascade: Ce } = e;
      if (te()) return;
      Ce && I(j);
      const Re = r.value.some((me) => me.scrolling), qe = r.value.some((me) => me.touching);
      if (Re || qe) return;
      const { values: Ne, indexes: dn, options: xe } = U();
      C(dn), k(re, Ne, dn, xe), n.value = Ne;
    }
    function Z() {
      if (e.cascade) {
        const j = r.value.find((re) => re.scrolling);
        j && (j.index = T(j, dl(j.scrollEl)), j.scrolling = !1, F(j), I(j));
      } else r.value.forEach((j) => {
        j.index = T(j, dl(j.scrollEl)), F(j);
      });
    }
    function se() {
      Z();
      const { values: j, indexes: re, options: Ce } = U();
      C(re), k(e.onConfirm, j, re, Ce);
    }
    function he() {
      Z();
      const { values: j, indexes: re, options: Ce } = U();
      C(re), k(e.onCancel, j, re, Ce);
    }
    return {
      optionHeight: t,
      optionCount: a,
      scrollColumns: r,
      columnHeight: l,
      center: i,
      Transition: en,
      pt: m,
      t: an,
      n: kO,
      classes: $O,
      setScrollEl: M,
      getOptionKey: w,
      getValue: $,
      handlePopupUpdateShow: A,
      handleTouchstart: ie,
      handleTouchmove: J,
      handleTouchend: oe,
      handleTransitionend: ze,
      confirm: se,
      cancel: he,
      handleClick: N
    };
  }
});
Dh.render = TO;
var pt = Dh, ao;
function $o(e) {
  return new Promise((n) => {
    $o.close();
    const r = nn(He(e) ? { columns: e } : e);
    r.dynamic = !0, r.teleport = "body", ao = r;
    function o() {
      ao === r && (ao = null);
    }
    const { unmountInstance: t } = yo(pt, r, {
      onConfirm: (a, i, l) => {
        k(r.onConfirm, a, i, l), n({
          state: "confirm",
          values: a,
          indexes: i,
          options: l
        }), r.show = !1, o();
      },
      onCancel: (a, i, l) => {
        k(r.onCancel, a, i, l), n({
          state: "cancel",
          values: a,
          indexes: i,
          options: l
        }), r.show = !1, o();
      },
      onClose: () => {
        k(r.onClose), n({ state: "close" }), o();
      },
      onClosed: () => {
        k(r.onClosed), t(), o();
      },
      onRouteChange: () => {
        t(), o();
      },
      "onUpdate:show": (a) => {
        r.show = a;
      }
    });
    r.show = !0;
  });
}
$o.close = function() {
  if (ao == null) return;
  const e = ao;
  ao = null, Ve().then(() => {
    e.show = !1;
  });
};
$o.Component = pt;
ae(pt);
ae(pt, $o);
de($o, Bh);
var CD = pt, Os = $o, Mh = {
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
}, no = 100, Et = 0, vr = 20, xc = 2 * Math.PI * vr, { name: EO, n: IO, classes: BO } = ne("progress"), DO = ["aria-valuenow"], MO = ["viewBox"], AO = { key: 0 }, NO = ["id"], VO = ["offset", "stop-color"], RO = [
  "d",
  "stroke-width",
  "stroke-dasharray"
], LO = [
  "d",
  "stroke-width",
  "stroke-dasharray",
  "stroke-dashoffset"
];
function FO(e, n) {
  return g(), S("div", {
    class: p(e.n()),
    role: "progressbar",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": e.indeterminate ? void 0 : e.mode === "linear" ? e.linearProps.value : e.circleProps.value
  }, [e.mode === "linear" ? (g(), S("div", {
    key: 0,
    class: p(e.n("linear"))
  }, [V("div", {
    class: p(e.classes(e.n("linear-block"), [e.track, e.n("linear-background")])),
    style: q({
      height: e.toSizeUnit(e.lineWidth),
      background: e.trackColor
    })
  }, [e.indeterminate ? (g(), S("div", {
    key: 0,
    class: p(e.n("linear-indeterminate"))
  }, [V("div", {
    class: p(e.classes(e.n(`linear--${e.type}`))),
    style: q({ background: e.progressColor })
  }, null, 6), V("div", {
    class: p(e.classes(e.n(`linear--${e.type}`))),
    style: q({ background: e.progressColor })
  }, null, 6)], 2)) : (g(), S("div", {
    key: 1,
    class: p(e.classes(e.n("linear-certain"), e.n(`linear--${e.type}`))),
    style: q({
      background: e.progressColor,
      width: e.linearProps.width
    })
  }, null, 6))], 6), e.label ? (g(), S("div", {
    key: 0,
    class: p(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
  }, [L(e.$slots, "default", {}, () => [Ie(ue(e.linearProps.roundValue), 1)])], 2)) : K("v-if", !0)], 2)) : K("v-if", !0), e.mode === "circle" ? (g(), S("div", {
    key: 1,
    class: p(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
    style: q({
      width: e.toSizeUnit(e.size),
      height: e.toSizeUnit(e.size)
    })
  }, [(g(), S("svg", {
    class: p(e.n("circle-svg")),
    viewBox: e.circleProps.viewBox
  }, [
    e.isPlainObject(e.color) ? (g(), S("defs", AO, [V("linearGradient", {
      id: e.id,
      x1: "100%",
      y1: "0%",
      x2: "0%",
      y2: "0%"
    }, [(g(!0), S(De, null, Ke(e.linearGradientProgress, (r, o) => (g(), S("stop", {
      key: o,
      offset: r,
      "stop-color": e.color[r]
    }, null, 8, VO))), 128))], 8, NO)])) : K("v-if", !0),
    e.track ? (g(), S("path", {
      key: 1,
      class: p(e.n("circle-background")),
      d: e.circleProps.path,
      fill: "transparent",
      "stroke-width": e.circleProps.strokeWidth,
      "stroke-dasharray": e.CIRCUMFERENCE,
      style: q({ stroke: e.trackColor })
    }, null, 14, RO)) : K("v-if", !0),
    V("path", {
      class: p(e.classes(e.n("circle-certain"), e.n(`circle--${e.type}`), [e.indeterminate, e.n("circle-overlay")])),
      d: e.circleProps.path,
      fill: "transparent",
      "stroke-width": e.circleProps.strokeWidth,
      "stroke-dasharray": e.CIRCUMFERENCE,
      "stroke-dashoffset": e.circleProps.strokeOffset,
      style: q({
        stroke: e.progressColor,
        transform: `rotateZ(${e.rotate}deg)`,
        transformOrigin: "50% 50%"
      })
    }, null, 14, LO)
  ], 10, MO)), e.label ? (g(), S("div", {
    key: 0,
    class: p(e.classes(e.n("circle-label"), e.labelClass))
  }, [L(e.$slots, "default", {}, () => [Ie(ue(e.circleProps.roundValue), 1)])], 2)) : K("v-if", !0)], 6)) : K("v-if", !0)], 10, DO);
}
var Ah = ee({
  name: EO,
  props: Mh,
  setup(e) {
    const n = ev();
    return {
      id: n,
      linearProps: E(() => {
        const r = H(e.value), o = $n(r, Et, no), t = $n(Math.round(r), Et, no);
        return {
          width: `${o}%`,
          roundValue: `${t}%`,
          value: o
        };
      }),
      CIRCUMFERENCE: xc,
      RADIUS: vr,
      circleProps: E(() => {
        const { size: r, lineWidth: o, value: t } = e, a = vr / (1 - rn(o) / rn(r)) * 2, i = `0 0 ${a} ${a}`, l = $n(Math.round(H(t)), Et, no), s = `${(no - l) / no * xc}`, u = rn(o) / rn(r) * a, d = 0, c = -vr, f = 0, v = -2 * vr, m = `M ${a / 2} ${a / 2} m ${d} ${c} a ${vr} ${vr} 
        0 1 1 ${f} ${-v} a ${vr} ${vr} 0 1 1 ${-f} ${v}`;
        return {
          strokeWidth: u,
          viewBox: i,
          strokeOffset: s,
          roundValue: `${l}%`,
          path: m,
          value: $n(H(t), Et, no)
        };
      }),
      progressColor: E(() => gn(e.color) ? `url(#${n.value})` : e.color),
      linearGradientProgress: E(() => Object.keys(e.color).sort((r, o) => parseFloat(r) - parseFloat(o))),
      n: IO,
      classes: BO,
      toSizeUnit: Te,
      isPlainObject: gn
    };
  }
});
Ah.render = FO;
var Ni = Ah;
ae(Ni);
de(Ni, Mh);
var SD = Ni, Ps = Ni, Nh = {
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
  onRefresh: R(),
  "onUpdate:modelValue": R()
}, UO = (e, n, r) => new Promise((o, t) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: HO, n: _c, classes: YO } = ne("pull-refresh"), ef = 150;
function jO(e, n) {
  const r = x("var-icon");
  return g(), S("div", {
    ref: "freshNode",
    class: p(e.n()),
    onTouchstart: n[0] || (n[0] = (...o) => e.handleTouchstart && e.handleTouchstart(...o)),
    onTouchend: n[1] || (n[1] = (...o) => e.handleTouchend && e.handleTouchend(...o)),
    onTouchcancel: n[2] || (n[2] = (...o) => e.handleTouchend && e.handleTouchend(...o))
  }, [V("div", {
    ref: "controlNode",
    class: p(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
    style: q(e.controlStyle)
  }, [X(r, {
    name: e.iconName,
    transition: e.ICON_TRANSITION,
    class: p(e.classes(e.n("icon"), [e.refreshStatus === "loading", e.n("animation")])),
    "var-pull-refresh-cover": ""
  }, null, 8, [
    "name",
    "transition",
    "class"
  ])], 6), L(e.$slots, "default")], 34);
}
var Vh = ee({
  name: HO,
  components: { VarIcon: Je },
  props: Nh,
  setup(e) {
    const n = y(0), r = y(null), o = y(null), t = y(0), a = y("-125%"), i = y("arrow-down"), l = y("default"), s = y(!1), u = E(() => Math.abs(2 * n.value)), d = E(() => l.value === "success"), c = E(() => l.value !== "loading" && l.value !== "success" && !e.disabled), f = E(() => ({
      transform: `translate3d(0px, ${tn(a.value) ? a.value : `${a.value}px`}, 0px) translate(-50%, 0)`,
      transition: s.value ? `transform ${e.animationDuration}ms` : void 0,
      background: d.value ? e.successBgColor : e.bgColor,
      color: d.value ? e.successColor : e.color
    })), { startTouch: v, moveTouch: m, endTouch: h, isReachTop: w } = bo();
    let $, C;
    pe(() => e.modelValue, (B) => {
      B === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
        a.value = n.value, A();
      }, H(e.successDuration)));
    }), bn(M), Ye(r, "touchmove", I);
    function b(B) {
      if (i.value !== B)
        return i.value = B, new Promise((T) => {
          window.setTimeout(T, ef);
        });
    }
    function P(B) {
      ("classList" in $ ? $ : document.body).classList[B](`${_c()}--lock`);
    }
    function O(B) {
      if (v(B), n.value === 0) {
        const { width: T } = on(o.value);
        n.value = -(T + T * 0.25);
      }
      C = Ar(B.target);
    }
    function I(B) {
      if (m(B), !c.value || !C || C !== $ && Dr(C) > 0 || Dr($) > 0) return;
      w($) && Ae(B), l.value !== "pulling" && (l.value = "pulling", t.value = B.touches[0].clientY), w($) && zn(a.value) && a.value > n.value && P("add");
      const T = (B.touches[0].clientY - t.value) / 2 + n.value;
      a.value = T >= u.value ? u.value : T, b(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function Y() {
      return UO(this, null, function* () {
        h(), c.value && (s.value = !0, H(a.value) >= u.value * 0.2 ? (yield b("refresh"), l.value = "loading", a.value = u.value * 0.3, k(e["onUpdate:modelValue"], !0), Ve(() => {
          k(e.onRefresh);
        }), P("remove")) : (l.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          s.value = !1, P("remove");
        }, H(e.animationDuration))), C = null);
      });
    }
    function M() {
      $ = e.target ? Ov(e.target, "PullRefresh") : Ar(r.value);
    }
    function A() {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, H(e.animationDuration));
    }
    return {
      ICON_TRANSITION: ef,
      refreshStatus: l,
      freshNode: r,
      controlNode: o,
      iconName: i,
      controlStyle: f,
      isSuccess: d,
      n: _c,
      classes: YO,
      handleTouchstart: O,
      handleTouchmove: I,
      handleTouchend: Y
    };
  }
});
Vh.render = jO;
var Vi = Vh;
ae(Vi);
de(Vi, Nh);
var OD = Vi, zs = Vi, Rh = {
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
  onClick: R(),
  onChange: R(),
  "onUpdate:modelValue": R()
}, Lh = /* @__PURE__ */ Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function WO() {
  const { bindChildren: e, childProviders: n, length: r } = wn(Lh);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function KO() {
  const { bindParent: e, parentProvider: n, index: r } = yn(Lh);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var { name: qO, n: XO, classes: GO } = ne("radio"), ZO = [
  "aria-checked",
  "aria-disabled",
  "tabindex"
];
function JO(e, n) {
  const r = x("var-icon"), o = x("var-hover-overlay"), t = x("var-form-details"), a = We("ripple"), i = We("hover");
  return g(), S("div", { class: p(e.n("wrap")) }, [V("div", je({
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
  }), [Me((g(), S("div", {
    class: p(e.classes(e.n("action"), [
      e.checked,
      e.n("--checked"),
      e.n("--unchecked")
    ], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    style: q({ color: e.checked ? e.checkedColor : e.uncheckedColor })
  }, [e.checked ? L(e.$slots, "checked-icon", { key: 0 }, () => [X(r, {
    class: p(e.n("icon")),
    "var-radio-cover": "",
    name: "radio-marked",
    size: e.iconSize
  }, null, 8, ["class", "size"])]) : L(e.$slots, "unchecked-icon", { key: 1 }, () => [X(r, {
    class: p(e.n("icon")),
    "var-radio-cover": "",
    name: "radio-blank",
    size: e.iconSize
  }, null, 8, ["class", "size"])]), X(o, {
    hovering: !e.disabled && !e.formDisabled && e.hovering,
    focusing: !e.disabled && !e.formDisabled && e.isFocusing
  }, null, 8, ["hovering", "focusing"])], 6)), [[a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }], [
    i,
    e.handleHovering,
    "desktop"
  ]]), e.$slots.default ? (g(), S("div", {
    key: 0,
    class: p(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    onClick: n[0] || (n[0] = (...l) => e.handleTextClick && e.handleTextClick(...l))
  }, [L(e.$slots, "default", { checked: e.checked })], 2)) : K("v-if", !0)], 16, ZO), X(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var Fh = ee({
  name: qO,
  directives: {
    Ripple: sn,
    Hover: An
  },
  components: {
    VarIcon: Je,
    VarFormDetails: Bn,
    VarHoverOverlay: Hn
  },
  inheritAttrs: !1,
  props: Rh,
  setup(e) {
    const n = y(), r = y(!1), o = Pn(e, "modelValue"), t = E(() => o.value === e.checkedValue), { radioGroup: a, bindRadioGroup: i } = KO(), { hovering: l, handleHovering: s } = rr(), { form: u, bindForm: d } = Wn(), c = E(() => {
      const T = u?.disabled.value || e.disabled, D = t.value, U = a?.hasChecked.value;
      if (e.tabindex != null) return e.tabindex;
      if (!T)
        return a && U && !D ? "-1" : "0";
    }), { errorMessage: f, validateWithTrigger: v, validate: m, resetValidation: h } = jn(), w = {
      sync: Y,
      validate: A,
      resetValidation: h,
      reset: M,
      isFocusing: E(() => r.value),
      move() {
        n.value.focus(), n.value.click();
      },
      moveable() {
        return !u?.disabled.value && !e.disabled && !u?.readonly.value && !e.readonly;
      }
    };
    k(i, w), k(d, w), Ye(() => window, "keydown", $), Ye(() => window, "keyup", C);
    function $(T) {
      if (!r.value) return;
      const { key: D } = T;
      (D === "Enter" || D === " ") && Ae(T), D === "Enter" && n.value.click();
    }
    function C(T) {
      r.value && T.key === " " && (Ae(T), n.value.click());
    }
    function b(T) {
      Ve(() => {
        const { validateTrigger: D, rules: U, modelValue: F } = e;
        v(D, T, U, F);
      });
    }
    function P(T) {
      const { checkedValue: D, onChange: U } = e;
      a && o.value === D || (o.value = T, k(U, o.value), a?.onToggle(D), b("onChange"));
    }
    function O(T) {
      const { disabled: D, readonly: U, uncheckedValue: F, checkedValue: z, onClick: N } = e;
      u?.disabled.value || D || (k(N, T), !(u?.readonly.value || U) && P(t.value ? F : z));
    }
    function I() {
      n.value.focus();
    }
    function Y(T) {
      const { checkedValue: D, uncheckedValue: U } = e, F = T === D;
      return o.value = F ? D : U, F;
    }
    function M() {
      o.value = e.uncheckedValue, h();
    }
    function A() {
      return m(e.rules, e.modelValue);
    }
    function B(T) {
      const { uncheckedValue: D, checkedValue: U } = e;
      [D, U].includes(T) || (T = t.value ? D : U), P(T);
    }
    return {
      radio: n,
      isFocusing: r,
      checked: t,
      errorMessage: f,
      radioGroupErrorMessage: a?.errorMessage,
      formDisabled: u?.disabled,
      formReadonly: u?.readonly,
      hovering: l,
      tabIndex: c,
      handleHovering: s,
      n: XO,
      classes: GO,
      handleClick: O,
      handleTextClick: I,
      toggle: B,
      reset: M,
      validate: A,
      resetValidation: h
    };
  }
});
Fh.render = JO;
var Ri = Fh;
ae(Ri);
de(Ri, Rh);
var PD = Ri, fa = Ri, Uh = {
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
  onChange: R(),
  "onUpdate:modelValue": R()
}, { name: QO, n: xO, classes: _O } = ne("radio-group"), eP = ["aria-label"];
function nP(e, n) {
  const r = x("maybe-v-node"), o = x("var-radio"), t = x("var-form-details");
  return g(), S("div", { class: p(e.n("wrap")) }, [V("div", {
    "aria-label": e.ariaLabel,
    role: "radiogroup",
    class: p(e.classes(e.n(), e.n(`--${e.direction}`)))
  }, [e.options.length ? (g(!0), S(De, { key: 0 }, Ke(e.options, (a) => (g(), ke(o, {
    key: a[e.valueKey],
    "checked-value": a[e.valueKey],
    disabled: a.disabled
  }, {
    default: ve(({ checked: i }) => [X(r, { is: e.isFunction(a[e.labelKey]) ? a[e.labelKey](a, i) : a[e.labelKey] }, null, 8, ["is"])]),
    _: 2
  }, 1032, ["checked-value", "disabled"]))), 128)) : K("v-if", !0), L(e.$slots, "default")], 10, eP), X(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var Hh = ee({
  name: QO,
  components: {
    VarFormDetails: Bn,
    VarRadio: fa,
    MaybeVNode: tt
  },
  props: Uh,
  setup(e) {
    const { length: n, radios: r, bindRadios: o } = WO(), { bindForm: t } = Wn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = jn(), u = E(() => a.value), d = y(!1), c = {
      onToggle: w,
      validate: $,
      reset: C,
      resetValidation: s,
      hasChecked: E(() => d.value),
      errorMessage: u
    };
    pe(() => e.modelValue, h), pe(() => n.value, h), k(t, c), o(c), Ye(() => window, "keydown", f);
    function f(b) {
      const P = r.findIndex(({ isFocusing: O }) => O.value);
      if (P !== -1 && r.some(({ moveable: O }, I) => I === P ? !1 : O())) {
        if ([
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight"
        ].includes(b.key) && Ae(b), b.key === "ArrowUp" || b.key === "ArrowLeft") {
          v(P, "prev");
          return;
        }
        (b.key === "ArrowDown" || b.key === "ArrowRight") && v(P, "next");
      }
    }
    function v(b, P) {
      for (; ; ) {
        P === "prev" ? b-- : b++, b < 0 && (b = r.length - 1), b > r.length - 1 && (b = 0);
        const I = r[b];
        if (I.moveable()) {
          I.move();
          break;
        }
      }
    }
    function m(b) {
      Ve(() => {
        const { validateTrigger: P, rules: O, modelValue: I } = e;
        i(P, b, O, I);
      });
    }
    function h() {
      r.forEach(({ sync: b }) => {
        b(e.modelValue) && (d.value = !0);
      });
    }
    function w(b) {
      k(e["onUpdate:modelValue"], b), k(e.onChange, b), m("onChange");
    }
    function $() {
      return l(e.rules, e.modelValue);
    }
    function C() {
      k(e["onUpdate:modelValue"], void 0), s();
    }
    return {
      errorMessage: a,
      n: xO,
      classes: _O,
      reset: C,
      validate: $,
      resetValidation: s,
      isFunction: fn
    };
  }
});
Hh.render = nP;
var Li = Hh;
ae(Li);
de(Li, Uh);
var zD = Li, Ts = Li, Yh = {
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
  namespace: Be(ln, "namespace"),
  emptyIconNamespace: Be(ln, "namespace"),
  halfIconNamespace: Be(ln, "namespace"),
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
  onChange: R(),
  "onUpdate:modelValue": R()
}, { name: rP, n: Oo } = ne("rate"), oP = ["onClick"];
function tP(e, n) {
  const r = x("var-icon"), o = x("var-hover-overlay"), t = x("var-form-details"), a = We("ripple"), i = We("hover");
  return g(), S("div", { class: p(e.n("wrap")) }, [V("div", { class: p(e.n()) }, [(g(!0), S(De, null, Ke(e.toNumber(e.count), (l) => Me((g(), S("div", {
    key: l,
    style: q(e.getStyle(l)),
    class: p(e.getClass(l)),
    onClick: (s) => e.handleClick(l, s)
  }, [X(r, {
    class: p(e.n("content-icon")),
    "var-rate-cover": "",
    transition: 0,
    namespace: e.getCurrentState(l).namespace,
    name: e.getCurrentState(l).name,
    style: q({ fontSize: e.toSizeUnit(e.size) })
  }, null, 8, [
    "class",
    "namespace",
    "name",
    "style"
  ]), X(o, { hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled }, null, 8, ["hovering"])], 14, oP)), [[a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }], [
    i,
    e.createHoverHandler(l),
    "desktop"
  ]])), 128))], 2), X(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var jh = ee({
  name: rP,
  components: {
    VarIcon: Je,
    VarFormDetails: Bn,
    VarHoverOverlay: Hn
  },
  directives: {
    Ripple: sn,
    Hover: An
  },
  props: Yh,
  setup(e) {
    const n = y(-1), { form: r, bindForm: o } = Wn(), { errorMessage: t, validateWithTrigger: a, validate: i, resetValidation: l } = jn(), { hovering: s } = rr();
    let u = H(e.modelValue);
    k(o, {
      reset: C,
      validate: m,
      resetValidation: l
    });
    function d(b) {
      const { count: P, gap: O } = e;
      return {
        color: f(b).color,
        marginRight: b !== H(P) ? Te(O) : 0
      };
    }
    function c(b) {
      const { name: P, color: O } = f(b);
      return {
        [Oo("content")]: !0,
        [Oo("--disabled")]: r?.disabled.value || e.disabled,
        [Oo("--error")]: t.value,
        [Oo("--primary")]: P !== e.emptyIcon && !O
      };
    }
    function f(b) {
      const { modelValue: P, disabled: O, disabledColor: I, color: Y, half: M, emptyColor: A, icon: B, halfIcon: T, emptyIcon: D, namespace: U, halfIconNamespace: F, emptyIconNamespace: z } = e;
      let N = Y;
      return (O || r?.disabled.value) && (N = I), b <= P ? {
        color: N,
        name: B,
        namespace: U
      } : M && b <= P + 0.5 ? {
        color: N,
        name: T,
        namespace: F
      } : {
        color: O || r?.disabled.value ? I : A,
        name: D,
        namespace: z
      };
    }
    function v(b, P) {
      const { half: O, clearable: I } = e, { offsetWidth: Y } = P.target;
      O && P.offsetX <= Math.floor(Y / 2) && (b -= 0.5), u === b && I && (b = 0), u !== b && (k(e["onUpdate:modelValue"], b), k(e.onChange, b)), u = b;
    }
    function m() {
      return i(e.rules, e.modelValue);
    }
    function h() {
      Ve(() => a(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function w(b, P) {
      const { readonly: O, disabled: I } = e;
      O || I || r?.disabled.value || r?.readonly.value || (v(b, P), h());
    }
    function $(b) {
      return (P) => {
        n.value = b, s.value = P;
      };
    }
    function C() {
      k(e["onUpdate:modelValue"], 0), l();
    }
    return {
      errorMessage: t,
      formDisabled: r?.disabled,
      formReadonly: r?.readonly,
      hovering: s,
      currentHoveringValue: n,
      getStyle: d,
      getClass: c,
      getCurrentState: f,
      handleClick: w,
      createHoverHandler: $,
      reset: C,
      validate: m,
      resetValidation: l,
      toSizeUnit: Te,
      toNumber: H,
      n: Oo
    };
  }
});
jh.render = tP;
var Fi = jh;
ae(Fi);
de(Fi, Yh);
var TD = Fi, Es = Fi, Wh = {
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
}, aP = { viewBox: "-4 -4 32 32" };
function iP(e, n) {
  return g(), S("svg", aP, [...n[0] || (n[0] = [V("path", {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  }, null, -1)])]);
}
var Kh = ee({});
Kh.render = iP;
var lP = Kh, sP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
};
function uP(e, n) {
  return g(), S("svg", sP, [...n[0] || (n[0] = [V("path", { d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" }, null, -1)])]);
}
var qh = ee({});
qh.render = uP;
var dP = qh, cP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
};
function fP(e, n) {
  return g(), S("svg", cP, [...n[0] || (n[0] = [V("path", { d: "M11,9H13V7H11M11,20H13V11H11V20Z" }, null, -1)])]);
}
var Xh = ee({});
Xh.render = fP;
var vP = Xh, pP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
};
function mP(e, n) {
  return g(), S("svg", pP, [...n[0] || (n[0] = [V("path", { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" }, null, -1)])]);
}
var Gh = ee({});
Gh.render = mP;
var hP = Gh, { n: gP, classes: bP } = ne("result");
function yP(e, n) {
  return g(), S(De, null, [
    V("span", { class: p(e.n("success-cover-left")) }, null, 2),
    V("span", {
      class: p(e.classes(e.n("success-line"), e.n("success-line-tip"))),
      style: q({
        animationDuration: e.animation ? "760ms" : "0ms",
        borderRadius: `calc(${e.borderSize} * 0.625)`
      })
    }, null, 6),
    V("span", {
      class: p(e.classes(e.n("success-line"), e.n("success-line-long"))),
      style: q({
        animationDuration: e.animation ? "770ms" : "0ms",
        borderRadius: `calc(${e.borderSize} * 0.625)`
      })
    }, null, 6),
    V("span", {
      ref: "circle",
      class: p(e.n("success-circle")),
      style: q({
        left: `-${e.borderSize}`,
        top: `-${e.borderSize}`,
        borderWidth: e.borderSize
      })
    }, null, 6),
    V("span", { class: p(e.n("success-line-fix")) }, null, 2),
    V("span", {
      class: p(e.n("success-cover-right")),
      style: q({ animationDuration: e.animation ? "4250ms" : "0ms" })
    }, null, 6)
  ], 64);
}
var Zh = ee({
  props: {
    animation: { type: Boolean },
    borderSize: { type: String }
  },
  setup() {
    return {
      n: gP,
      classes: bP
    };
  }
});
Zh.render = yP;
var wP = Zh, kP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
};
function $P(e, n) {
  return g(), S("svg", kP, [...n[0] || (n[0] = [V("path", { d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11" }, null, -1)])]);
}
var Jh = ee({});
Jh.render = $P;
var CP = Jh, { name: SP, n: OP, classes: PP } = ne("result");
function zP(e, n) {
  return g(), S("div", { class: p(e.classes(e.n(), e.n("$--box"))) }, [
    L(e.$slots, "image", {}, () => [e.type ? (g(), S("div", {
      key: 0,
      class: p(e.n("image-container"))
    }, [V("div", {
      class: p(e.classes(e.n("image"), e.n(e.type))),
      style: q({
        width: e.circleSize,
        height: e.circleSize,
        borderWidth: e.borderSize
      })
    }, [(g(), ke(ho(e.type), {
      "border-size": e.borderSize,
      animation: e.animation
    }, null, 8, ["border-size", "animation"]))], 6)], 2)) : K("v-if", !0)]),
    L(e.$slots, "title", {}, () => [e.title ? (g(), S("div", {
      key: 0,
      class: p(e.n("title"))
    }, ue(e.title), 3)) : K("v-if", !0)]),
    L(e.$slots, "description", {}, () => [e.description ? (g(), S("div", {
      key: 0,
      class: p(e.n("description"))
    }, ue(e.description), 3)) : K("v-if", !0)]),
    e.$slots.footer ? (g(), S("div", {
      key: 0,
      class: p(e.n("footer"))
    }, [L(e.$slots, "footer")], 2)) : K("v-if", !0)
  ], 2);
}
var Qh = ee({
  name: SP,
  components: {
    Info: vP,
    Success: wP,
    Warning: CP,
    Error: dP,
    Question: hP,
    Empty: lP
  },
  props: Wh,
  setup(e) {
    return {
      circleSize: E(() => `calc(${e.imageSize ? Te(e.imageSize) : "var(--result-image-size)"} * 0.9)`),
      borderSize: E(() => `calc(${e.imageSize ? Te(e.imageSize) : "var(--result-image-size)"} * 0.05)`),
      n: OP,
      classes: PP
    };
  }
});
Qh.render = zP;
var Ui = Qh;
ae(Ui);
de(Ui, Wh);
var ED = Ui, Is = Ui, xh = {
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
  onClick: R()
}, { name: TP, n: EP, classes: IP } = ne("row");
function BP(e, n) {
  return g(), S("div", {
    class: p(e.classes(e.n(), e.n("$--box"))),
    style: q({
      justifyContent: e.padStartFlex(e.justify),
      alignItems: e.padStartFlex(e.align),
      margin: `${-e.average[0]}px ${-e.average[1]}px`
    }),
    onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
  }, [L(e.$slots, "default")], 6);
}
var _h = ee({
  name: TP,
  props: xh,
  setup(e) {
    const n = E(() => He(e.gutter) ? e.gutter.map((t) => rn(t) / 2) : [0, rn(e.gutter) / 2]), { bindCols: r } = mS();
    r({ average: n });
    function o(t) {
      k(e.onClick, t);
    }
    return {
      average: n,
      n: EP,
      classes: IP,
      handleClick: o,
      padStartFlex: _t
    };
  }
});
_h.render = BP;
var Hi = _h;
ae(Hi);
de(Hi, xh);
var ID = Hi, Bs = Hi, DP = Object.defineProperty, nf = Object.getOwnPropertySymbols, MP = Object.prototype.hasOwnProperty, AP = Object.prototype.propertyIsEnumerable, rf = (e, n, r) => n in e ? DP(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, NP = (e, n) => {
  for (var r in n || (n = {})) MP.call(n, r) && rf(e, r, n[r]);
  if (nf)
    for (var r of nf(n)) AP.call(n, r) && rf(e, r, n[r]);
  return e;
}, eg = NP({
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
  onFocus: R(),
  onBlur: R(),
  onClose: R(),
  onChange: R(),
  onClear: R(),
  "onUpdate:modelValue": R()
}, Be(za, [
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
])), { n: VP, classes: RP } = ne("select");
function LP(e, n) {
  return Me((g(), S("input", {
    ref: "filterInputRef",
    "onUpdate:modelValue": n[0] || (n[0] = (r) => e.value = r),
    type: "text",
    class: p(e.classes(e.n("filter"), [e.multiple, e.n("filter--multiple")]))
  }, null, 2)), [[Of, e.value]]);
}
var ng = ee({
  name: "VarSelectFilter",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    multiple: Boolean,
    "onUpdate:modelValue": R()
  },
  setup(e) {
    const n = y(), r = E({
      get: () => e.modelValue,
      set: (a) => k(e["onUpdate:modelValue"], a)
    });
    return {
      n: VP,
      classes: RP,
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
ng.render = LP;
var FP = ng, of = (e, n, r) => new Promise((o, t) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
});
function UP(e, n, r) {
  const o = y(!1);
  let t = null;
  pe(() => n.value, () => of(null, null, function* () {
    l(), n.value && (yield Ve(), i(), a());
  }), { immediate: !0 }), go(l);
  function a() {
    var s;
    const u = e.value, d = u?.querySelectorAll(".var-option");
    o.value = d?.length ? Array.from(d).every((c) => Qn(c).display === "none") : !0, (s = r?.onAfterUpdate) == null || s.call(r);
  }
  function i() {
    e.value && (t = new MutationObserver(() => of(null, null, function* () {
      yield Ve(), a();
    })), t.observe(e.value, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["style", "class"]
    }));
  }
  function l() {
    t?.disconnect(), t = null;
  }
  return { showEmpty: o };
}
var HP = 11;
function YP(e) {
  const n = eb(), r = y(0), o = E(() => ({ minWidth: `${Math.max(r.value, HP)}px` })), t = () => {
    var a, i;
    r.value = (i = (a = n.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? i : 0;
  };
  return pe(() => eu(e), () => {
    Ve(t);
  }), {
    calculatorRef: n,
    filterStyle: o,
    resize: t
  };
}
var jP = Object.defineProperty, WP = Object.defineProperties, KP = Object.getOwnPropertyDescriptors, tf = Object.getOwnPropertySymbols, qP = Object.prototype.hasOwnProperty, XP = Object.prototype.propertyIsEnumerable, af = (e, n, r) => n in e ? jP(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, GP = (e, n) => {
  for (var r in n || (n = {})) qP.call(n, r) && af(e, r, n[r]);
  if (tf)
    for (var r of tf(n)) XP.call(n, r) && af(e, r, n[r]);
  return e;
}, ZP = (e, n) => WP(e, KP(n)), JP = (e, n, r) => new Promise((o, t) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: QP, n: xP, classes: _P } = ne("select"), ez = ["tabindex"];
function nz(e, n) {
  const r = x("maybe-v-node"), o = x("var-chip"), t = x("var-select-filter"), a = x("var-icon"), i = x("var-field-decorator"), l = x("var-option"), s = x("var-menu"), u = x("var-form-details");
  return g(), S("div", {
    ref: "root",
    class: p(e.n()),
    tabindex: e.tabindex,
    onFocus: n[6] || (n[6] = (...d) => e.handleFocus && e.handleFocus(...d)),
    onBlur: n[7] || (n[7] = (...d) => e.handleRootBlur && e.handleRootBlur(...d))
  }, [X(s, {
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
    menu: ve(() => [V("div", {
      ref: "menuEl",
      class: p(e.classes(e.n("scroller"), e.n("$-elevation--3")))
    }, [
      e.showEmpty ? L(e.$slots, "empty", { key: 0 }, () => [V("div", { class: p(e.n("empty")) }, ue((e.pt ? e.pt : e.t)("selectEmptyText")), 3)]) : K("v-if", !0),
      e.options.length ? (g(!0), S(De, { key: 1 }, Ke(e.options, (d) => (g(), ke(l, {
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
      ]))), 128)) : K("v-if", !0),
      L(e.$slots, "default")
    ], 2)]),
    default: ve(() => [X(i, Kr(va({
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
    })), Xr({
      "append-icon": ve(() => [L(e.$slots, "arrow-icon", {
        focus: e.isFocusing,
        menuOpen: e.showMenu
      }, () => [X(a, {
        class: p(e.classes(e.n("arrow"), [e.showMenu, e.n("--arrow-rotate")])),
        "var-select-cover": "",
        name: "menu-down",
        transition: 300
      }, null, 8, ["class"])]), L(e.$slots, "append-icon")]),
      default: ve(() => [V("div", {
        class: p(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: q({
          textAlign: e.textAlign,
          color: e.textColor
        })
      }, [
        V("div", { class: p(e.classes(e.n("label"), [e.filterable && e.showMenu, e.n("--label-focusing")])) }, [e.isShowSelected() ? L(e.$slots, "selected", { key: 0 }, () => [e.multiple ? (g(), S(De, { key: 0 }, [e.chip ? (g(), S("div", {
          key: 0,
          class: p(e.n("chips"))
        }, [(g(!0), S(De, null, Ke(e.labels, (d) => (g(), ke(o, {
          key: d,
          class: p(e.n("chip")),
          "var-select-cover": "",
          closeable: "",
          size: "small",
          type: e.errorMessage ? "danger" : void 0,
          onClick: n[0] || (n[0] = Fn(() => {
          }, ["stop"])),
          onClose: () => e.handleClose(d)
        }, {
          default: ve(() => [X(r, { is: d }, null, 8, ["is"])]),
          _: 2
        }, 1032, [
          "class",
          "type",
          "onClose"
        ]))), 128)), e.isShowMultipleFilter() ? (g(), ke(t, {
          key: 0,
          ref: "filterRef",
          modelValue: e.pattern,
          "onUpdate:modelValue": n[1] || (n[1] = (d) => e.pattern = d),
          style: q(e.filterStyle),
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
        ])) : K("v-if", !0)], 2)) : (g(), S("div", {
          key: 1,
          class: p(e.n("values"))
        }, [(g(!0), S(De, null, Ke(e.labels, (d, c) => (g(), S(De, { key: d }, [X(r, { is: d }, null, 8, ["is"]), Ie(ue(c !== e.labels.length - 1 ? e.separator : ""), 1)], 64))), 128)), e.isShowMultipleFilter() ? (g(), ke(t, {
          key: 0,
          ref: "filterRef",
          modelValue: e.pattern,
          "onUpdate:modelValue": n[2] || (n[2] = (d) => e.pattern = d),
          style: q(ZP(GP({}, e.filterStyle), { paddingLeft: e.labels.length ? "4px" : 0 })),
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
        ])) : K("v-if", !0)], 2))], 64)) : (g(), ke(r, {
          key: 1,
          is: e.label
        }, null, 8, ["is"]))]) : K("v-if", !0)], 2),
        e.enableCustomPlaceholder && !e.pattern ? (g(), S("span", {
          key: 0,
          class: p(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
          style: q({ color: e.placeholderColor })
        }, ue(e.placeholder), 7)) : K("v-if", !0),
        e.isShowSingleFilter() ? (g(), ke(t, {
          key: 1,
          ref: "filterRef",
          modelValue: e.pattern,
          "onUpdate:modelValue": n[3] || (n[3] = (d) => e.pattern = d),
          style: q(e.filterStyle),
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
        ])) : K("v-if", !0),
        e.filterable ? (g(), S("span", {
          key: 2,
          ref: "calculatorRef",
          class: p(e.n("filter-calculator"))
        }, ue(e.pattern), 3)) : K("v-if", !0)
      ], 6)]),
      _: 2
    }, [e.$slots["prepend-icon"] ? {
      name: "prepend-icon",
      fn: ve(() => [L(e.$slots, "prepend-icon")]),
      key: "0"
    } : void 0, e.pattern ? void 0 : {
      name: "clear-icon",
      fn: ve(({ clear: d }) => [L(e.$slots, "clear-icon", { clear: d })]),
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
  ]), X(u, {
    "error-message": e.errorMessage,
    onClick: n[5] || (n[5] = Fn(() => {
    }, ["stop"]))
  }, null, 8, ["error-message"])], 42, ez);
}
var rg = ee({
  name: QP,
  components: {
    VarIcon: Je,
    VarMenu: jo,
    VarChip: oa,
    VarOption: ca,
    VarFieldDecorator: Fo,
    VarFormDetails: Bn,
    VarSelectFilter: FP,
    MaybeVNode: tt
  },
  props: eg,
  setup(e) {
    var n;
    const r = y(!1), o = y(!1), t = y(null), a = y(null), i = y(""), l = y(!1), s = E(() => e.filterable), u = E(() => e.multiple), d = E(() => e.focusColor), c = E(() => Xn(e.modelValue)), f = E(() => e.disabled || e.readonly ? "" : "pointer"), { bindForm: v, form: m } = Wn(), { length: h, options: w, bindOptions: $ } = _6(), { label: C, labels: b, computeLabel: P, getSelectedValue: O } = rp({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => w,
      optionProvidersLength: () => h.value
    }), { errorMessage: I, validateWithTrigger: Y, validate: M, resetValidation: A } = jn(), B = E(() => m?.readonly.value || e.readonly), T = E(() => m?.disabled.value || e.disabled), D = y(null), U = y(null), F = E(() => e.variant === "standard" && !e.filterable ? "cover-top" : "bottom"), { t: z } = ar(), N = y(0), ie = E({
      get() {
        return N.value + (F.value === "bottom" ? 2 : 0);
      },
      set(G) {
        N.value = G;
      }
    }), J = E(() => {
      const { hint: G, blurColor: ce, focusColor: ge } = e;
      if (!G)
        return I.value ? "var(--field-decorator-error-color)" : r.value ? ge || "var(--field-decorator-focus-color)" : ce || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    }), oe = E(() => !e.hint && Xn(e.modelValue)), ze = E(() => {
      var G;
      if (!T.value)
        return s.value && r.value ? "-1" : (G = e.tabindex) != null ? G : "0";
    }), { calculatorRef: te, filterStyle: W } = YP(i), Z = {
      pattern: E(() => i.value),
      showMenu: E(() => o.value),
      multiple: u,
      filterable: s,
      filter: (n = e.filter) != null ? n : ((G, ce) => String(ce[e.labelKey]).toLocaleLowerCase().includes(G.toLocaleLowerCase())),
      focusColor: d,
      computeLabel: P,
      onSelect: Q,
      reset: Wr,
      validate: xn,
      resetValidation: A
    }, { showEmpty: se } = UP(D, o, { onAfterUpdate: () => {
      var G;
      return (G = U.value) == null ? void 0 : G.resize();
    } });
    let he = !1;
    pe(() => e.multiple, () => {
      Un(e.multiple && He(e.modelValue), "Select", "The modelValue must be an array when multiple is true");
    }), $(Z), Ye(() => window, "keydown", Re), Ye(() => window, "keyup", qe), k(v, Z);
    function j() {
      return s.value && !B.value && !T.value && !u.value;
    }
    function re() {
      return s.value && !B.value && !T.value && u.value;
    }
    function Ce() {
      return !(c.value && !u.value || !u.value && (i.value || l.value));
    }
    function Re(G) {
      var ce;
      if (T.value || B.value || !r.value) return;
      const { key: ge } = G;
      if (ge === " " && !o.value) {
        Ae(G);
        return;
      }
      if (ge === "Escape" && o.value) {
        t.value.focus(), Ae(G), o.value = !1;
        return;
      }
      if (ge === "Tab" && o.value) {
        t.value.focus(), Ae(G), xe();
        return;
      }
      if (ge === "Enter" && !o.value) {
        Ae(G), o.value = !0, (ce = a.value) == null || ce.focus();
        return;
      }
      (ge === "ArrowDown" || ge === "ArrowUp") && o.value && (Ae(G), mu(t.value, D.value, ge));
    }
    function qe(G) {
      if (T.value || B.value || o.value || !r.value) return;
      const { key: ce } = G;
      ce === " " && !o.value && (Ae(G), o.value = !0);
    }
    function Ne(G) {
      Ve(() => {
        const { validateTrigger: ce, rules: ge, modelValue: Oe } = e;
        Y(ce, G, ge, Oe);
      });
    }
    function dn() {
      var G;
      const { disabled: ce, readonly: ge, onFocus: Oe } = e;
      if (!(m?.disabled.value || m?.readonly.value || ce || ge)) {
        if (he) {
          he = !1;
          return;
        }
        ie.value = rn(e.offsetY), Yr(), (re() || j()) && (he = !0, (G = a.value) == null || G.focus()), k(Oe), Ne("onFocus");
      }
    }
    function xe() {
      const { disabled: G, readonly: ce, onBlur: ge } = e;
      m?.disabled.value || m?.readonly.value || G || ce || (jr(), k(ge), Ne("onBlur"), i.value = "");
    }
    function me() {
      return JP(this, null, function* () {
        if (he) {
          yield Ve(), he = !1;
          return;
        }
        o.value || xe();
      });
    }
    function Fe() {
      r.value && xe();
    }
    function Q(G) {
      const { disabled: ce, readonly: ge, multiple: Oe, onChange: Ue } = e;
      if (m?.disabled.value || m?.readonly.value || ce || ge) return;
      const _e = O(G);
      k(e["onUpdate:modelValue"], _e), k(Ue, _e), Ne("onChange"), Ve(() => {
        var Xe;
        return (Xe = a.value) == null ? void 0 : Xe.focus();
      }), Oe || (t.value.focus(), Sn().then(() => {
        o.value = !1, i.value = "";
      }));
    }
    function fe() {
      const { disabled: G, readonly: ce, multiple: ge, clearable: Oe, onClear: Ue, onChange: _e } = e;
      if (m?.disabled.value || m?.readonly.value || G || ce || !Oe) return;
      const Xe = ge ? [] : void 0;
      k(e["onUpdate:modelValue"], Xe), k(Ue, Xe), Ne("onClear"), k(_e, Xe), Ne("onChange");
    }
    function Se(G) {
      const { disabled: ce, onClick: ge } = e;
      m?.disabled.value || ce || (k(ge, G), Ne("onClick"));
    }
    function Le(G) {
      const { disabled: ce, readonly: ge, modelValue: Oe, onClose: Ue, onChange: _e } = e;
      if (m?.disabled.value || m?.readonly.value || ce || ge) return;
      const Xe = w.find(({ label: _n }) => _n.value === G), fr = Oe.filter((_n) => {
        var mt;
        return _n !== ((mt = Xe.value.value) != null ? mt : Xe.label.value);
      });
      k(e["onUpdate:modelValue"], fr), k(Ue, fr), Ne("onClose"), k(_e, fr), Ne("onChange");
    }
    function On() {
      o.value = !0;
    }
    function pn() {
      l.value = !0;
    }
    function ir() {
      l.value = !1;
    }
    function Yr() {
      ie.value = rn(e.offsetY), r.value = !0;
    }
    function jr() {
      r.value = !1, o.value = !1;
    }
    function xn() {
      return M(e.rules, e.modelValue);
    }
    function Wr() {
      k(e["onUpdate:modelValue"], e.multiple ? [] : void 0), A();
    }
    return {
      root: t,
      filterRef: a,
      calculatorRef: te,
      isComposing: l,
      filterStyle: W,
      pattern: i,
      tabindex: ze,
      readonly: B,
      disabled: T,
      offsetY: ie,
      isFocusing: r,
      showMenu: o,
      errorMessage: I,
      formDisabled: m?.disabled,
      formReadonly: m?.readonly,
      label: C,
      labels: b,
      isEmptyModelValue: c,
      menuEl: D,
      menuRef: U,
      placement: F,
      cursor: f,
      placeholderColor: J,
      enableCustomPlaceholder: oe,
      showEmpty: se,
      t: an,
      pt: z,
      isFunction: fn,
      n: xP,
      classes: _P,
      isShowSelected: Ce,
      isShowSingleFilter: j,
      isShowMultipleFilter: re,
      handleFocus: dn,
      handleBlur: xe,
      handleClickOutside: Fe,
      handleClear: fe,
      handleClick: Se,
      handleClose: Le,
      handleRootBlur: me,
      handleInput: On,
      handleCompositionStart: pn,
      handleCompositionEnd: ir,
      reset: Wr,
      validate: xn,
      resetValidation: A,
      focus: Yr,
      blur: jr
    };
  }
});
rg.render = nz;
var Yi = rg;
ae(Yi);
de(Yi, eg);
var BD = Yi, Ds = Yi, og = {
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
  onStart: R(),
  onEnd: R(),
  onSigning: R()
}, { name: rz, n: oz } = ne("signature"), tz = ["height", "width"];
function az(e, n) {
  return g(), S("div", {
    ref: "root",
    class: p(e.n())
  }, [V("canvas", {
    ref: "canvas",
    height: e.canvasHeight,
    width: e.canvasWidth
  }, null, 8, tz)], 2);
}
var tg = ee({
  name: rz,
  props: og,
  setup(e) {
    const n = y(), r = y(), o = y(0), t = y(0);
    let a = !1, i = null;
    Ye(r, "touchstart", s), Ye(r, "touchmove", u), Ye(r, "touchend", d), tr(l), br(l);
    function l() {
      !r.value || !n.value || (i = r.value.getContext("2d"), o.value = n.value.offsetWidth, t.value = n.value.offsetHeight);
    }
    function s(h) {
      !i || !n.value || (h.preventDefault(), a = !0, i.beginPath(), i.lineWidth = H(e.lineWidth), i.strokeStyle = e.strokeStyle === "currentColor" ? Qn(n.value).color : e.strokeStyle, k(e.onStart));
    }
    function u(h) {
      if (h.preventDefault(), !r.value || !i || !a) return;
      const w = h.touches[0].clientX, $ = h.touches[0].clientY, C = on(r.value), b = w - C.left, P = $ - C.top;
      i.lineTo(b, P), i.stroke(), k(e.onSigning);
    }
    function d(h) {
      a && (h.preventDefault(), a = !1, k(e.onEnd));
    }
    function c(h) {
      return e.dataUrlType === "jpg" ? h.toDataURL("image/jpeg") : h.toDataURL("image/png");
    }
    function f(h) {
      if (!h) return !0;
      const w = document.createElement("canvas");
      return w.width = h.width, w.height = h.height, c(h) === c(w);
    }
    function v() {
      i && (a = !1, i.clearRect(0, 0, o.value, t.value), i.closePath());
    }
    function m() {
      if (r.value)
        return f(r.value) ? "" : c(r.value);
    }
    return {
      root: n,
      canvas: r,
      canvasWidth: o,
      canvasHeight: t,
      n: oz,
      confirm: m,
      reset: v
    };
  }
});
tg.render = az;
var ji = tg;
ae(ji);
de(ji, og);
var DD = ji, Ms = ji, ag = {
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
}, { name: iz, n: lz, classes: sz } = ne("skeleton");
function uz(e, n) {
  return g(), S("div", { class: p(e.classes(e.n("$--box"), e.n())) }, [
    e.loading ? K("v-if", !0) : (g(), S("div", {
      key: 0,
      class: p(e.n("data"))
    }, [L(e.$slots, "default")], 2)),
    e.loading && !e.fullscreen ? (g(), S("div", {
      key: 1,
      class: p(e.n("content"))
    }, [e.card ? (g(), S("div", {
      key: 0,
      class: p(e.n("card")),
      style: q({ height: e.toSizeUnit(e.cardHeight) })
    }, [V("div", { class: p(e.n("--animation")) }, null, 2)], 6)) : K("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (g(), S("div", {
      key: 1,
      class: p(e.n("article"))
    }, [e.avatar ? (g(), S("div", {
      key: 0,
      class: p(e.n("avatar")),
      style: q({
        width: e.toSizeUnit(e.avatarSize),
        height: e.toSizeUnit(e.avatarSize)
      })
    }, [V("div", { class: p(e.n("--animation")) }, null, 2)], 6)) : K("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (g(), S("div", {
      key: 1,
      class: p(e.n("section"))
    }, [e.title ? (g(), S("div", {
      key: 0,
      class: p(e.n("title")),
      style: q({ width: e.toSizeUnit(e.titleWidth) })
    }, [V("div", { class: p(e.n("--animation")) }, null, 2)], 6)) : K("v-if", !0), (g(!0), S(De, null, Ke(e.toNumber(e.rows), (r, o) => (g(), S("div", {
      key: r,
      class: p(e.n("row")),
      style: q({ width: e.toSizeUnit(e.rowsWidth[o]) })
    }, [V("div", { class: p(e.n("--animation")) }, null, 2)], 6))), 128))], 2)) : K("v-if", !0)], 2)) : K("v-if", !0)], 2)) : K("v-if", !0),
    e.loading && e.fullscreen ? (g(), S("div", {
      key: 2,
      class: p(e.n("fullscreen")),
      style: q({ zIndex: e.toNumber(e.fullscreenZIndex) })
    }, [V("div", { class: p(e.n("--animation")) }, null, 2)], 6)) : K("v-if", !0)
  ], 2);
}
var ig = ee({
  name: iz,
  props: ag,
  setup: () => ({
    n: lz,
    classes: sz,
    toSizeUnit: Te,
    toNumber: H
  })
});
ig.render = uz;
var Wi = ig;
ae(Wi);
de(Wi, ag);
var MD = Wi, As = Wi, cn = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(cn || {}), lg = {
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
  onChange: R(),
  onStart: R(),
  onEnd: R(),
  "onUpdate:modelValue": R()
}, { name: dz, n: lf, classes: cz } = ne("slider"), fz = [
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
function vz(e, n) {
  const r = x("var-hover-overlay"), o = x("var-form-details"), t = We("hover");
  return g(), S("div", { class: p(e.classes(e.n(e.direction), e.n("$--box"))) }, [V("div", {
    ref: "sliderEl",
    class: p(e.classes(e.n(`${e.direction}-block`), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(`${e.direction}--error`)])),
    onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
  }, [V("div", { class: p(e.n(`${e.direction}-track`)) }, [V("div", {
    class: p(e.n(`${e.direction}-track-background`)),
    style: q({
      background: e.trackColor,
      height: e.isVertical ? "100%" : e.toSizeUnit(e.trackHeight),
      width: e.isVertical ? e.toSizeUnit(e.trackHeight) : "100%"
    })
  }, null, 6), V("div", {
    class: p(e.n(`${e.direction}-track-fill`)),
    style: q(e.getFillStyle)
  }, null, 6)], 2), (g(!0), S(De, null, Ke(e.thumbList, (a) => (g(), S("div", {
    key: a.enumValue,
    class: p(e.n(`${e.direction}-thumb`)),
    style: q(e.thumbStyle(a)),
    tabindex: e.isDisabled ? void 0 : "0",
    role: "slider",
    "aria-valuemin": e.min,
    "aria-valuemax": e.max,
    "aria-valuenow": a.value,
    "aria-disabled": e.isDisabled,
    "aria-valuetext": `${a.text}`,
    onTouchstart: Fn((i) => e.start(i, a.enumValue), ["stop"]),
    onTouchmove: n[0] || (n[0] = Fn((...i) => e.move && e.move(...i), ["stop"])),
    onFocusin: (i) => e.handleFocus(a),
    onFocusout: (i) => e.handleBlur(a)
  }, [L(e.$slots, "button", { currentValue: a.text }, () => [
    Me(V("div", {
      class: p(e.n(`${e.direction}-thumb-block`)),
      style: q({ background: e.thumbColor })
    }, null, 6), [[
      t,
      (i) => e.hover(i, a),
      "desktop"
    ]]),
    V("div", {
      class: p(e.classes(e.n(`${e.direction}-thumb-ripple`), [e.thumbsProps[a.enumValue].active, e.n(`${e.direction}-thumb-ripple--active`)])),
      style: q({ background: e.thumbsProps[a.enumValue].active ? e.thumbColor : void 0 })
    }, [X(r, {
      hovering: !e.isDisabled && a.hovering,
      focusing: !e.isDisabled && a.focusing
    }, null, 8, ["hovering", "focusing"])], 6),
    V("div", {
      class: p(e.classes(e.n(`${e.direction}-thumb-label`), [e.showLabel(a.enumValue), e.n(`${e.direction}-thumb-label--active`)])),
      style: q({
        background: e.labelColor,
        color: e.labelTextColor,
        height: e.toSizeUnit(e.thumbSize),
        width: e.toSizeUnit(e.thumbSize)
      })
    }, [V("span", null, ue(a.text), 1)], 6)
  ])], 46, fz))), 128))], 2), X(o, {
    "error-message": e.errorMessage,
    class: p(e.n("form")),
    "var-slider-cover": ""
  }, null, 8, ["error-message", "class"])], 2);
}
var sg = ee({
  name: dz,
  components: {
    VarFormDetails: Bn,
    VarHoverOverlay: Hn
  },
  directives: { Hover: An },
  props: lg,
  setup(e) {
    const n = y(0), r = y(null), o = y(!1), t = E(() => H(e.max) - H(e.min)), a = E(() => n.value / t.value * H(e.step)), i = E(() => e.disabled || f?.disabled.value), l = E(() => e.readonly || f?.readonly.value), s = E(() => e.direction === "vertical"), u = y(!1), d = y(!1), { bindForm: c, form: f } = Wn(), { errorMessage: v, validateWithTrigger: m, validate: h, resetValidation: w } = jn(), { hovering: $, handleHovering: C } = rr(), { hovering: b, handleHovering: P } = rr(), O = E(() => {
      const { modelValue: Q, range: fe } = e;
      let Se = [];
      return fe && He(Q) ? Se = [{
        value: N(Q[0]),
        enumValue: cn.First,
        text: ie(Q[0]),
        hovering: $.value,
        focusing: u.value,
        handleHovering: C,
        handleFocusing(Le) {
          u.value = Le;
        }
      }, {
        value: N(Q[1]),
        enumValue: cn.Second,
        text: ie(Q[1]),
        hovering: b.value,
        focusing: d.value,
        handleHovering: P,
        handleFocusing(Le) {
          d.value = Le;
        }
      }] : zn(Q) && (Se = [{
        value: N(Q),
        enumValue: cn.First,
        text: ie(Q),
        hovering: $.value,
        focusing: u.value,
        handleHovering: C,
        handleFocusing(Le) {
          u.value = Le;
        }
      }]), Se;
    }), I = E(() => {
      const { activeColor: Q, range: fe, modelValue: Se } = e, Le = fe && He(Se) ? N(Math.min(Se[0], Se[1])) : 0, On = fe && He(Se) ? N(Math.max(Se[0], Se[1])) - Le : N(Se);
      return s.value ? {
        left: "0px",
        height: `${On}%`,
        bottom: `${Le}%`,
        background: Q
      } : {
        top: "0px",
        width: `${On}%`,
        left: `${Le}%`,
        background: Q
      };
    }), Y = nn({
      [cn.First]: T(),
      [cn.Second]: T()
    });
    let M;
    k(c, {
      reset: Ne,
      validate: B,
      resetValidation: w
    }), pe([() => e.modelValue, () => e.step], ([Q, fe]) => {
      !Ce() || !Re() || o.value || qe(Q, H(fe));
    }), pe(n, () => qe()), bn(() => {
      !Ce() || !Re() || A();
    }), pa(Z), Ye(() => window, "keydown", xe), tr(A);
    function A() {
      n.value = r.value[s.value ? "offsetHeight" : "offsetWidth"];
    }
    function B() {
      return h(e.rules, e.modelValue);
    }
    function T() {
      return {
        startPosition: 0,
        currentOffset: 0,
        active: !1,
        percentValue: 0
      };
    }
    function D() {
      Ve(() => m(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function U(Q) {
      const fe = Q.currentTarget;
      return fe ? s.value ? n.value - (Q.clientY - on(fe).top) : Q.clientX - My(fe) : 0;
    }
    function F(Q) {
      return {
        [s.value ? "bottom" : "left"]: `${Q.value}%`,
        zIndex: Y[Q.enumValue].active ? 1 : void 0
      };
    }
    function z(Q) {
      return e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : Y[Q].active;
    }
    function N(Q) {
      const { min: fe, max: Se } = e;
      return Q < H(fe) ? 0 : Q > H(Se) ? 100 : (Q - H(fe)) / t.value * 100;
    }
    function ie(Q) {
      if (!zn(Q)) return 0;
      const fe = $n(Q, H(e.min), H(e.max));
      return parseInt(`${fe}`, 10) === fe ? fe : H(fe.toPrecision(5));
    }
    function J(Q, fe) {
      i.value || fe.handleHovering(Q);
    }
    function oe(Q) {
      k(e.onChange, Q), k(e["onUpdate:modelValue"], Q), D();
    }
    function ze(Q, fe) {
      let Se = [];
      const { step: Le, range: On, modelValue: pn, min: ir } = e, Yr = H(Le), jr = Math.round(Q / a.value), xn = jr * Yr + H(ir), Wr = Y[fe].percentValue * Yr + H(ir);
      Y[fe].percentValue = jr, On && He(pn) && (Se = fe === cn.First ? [xn, pn[1]] : [pn[0], xn]), Wr !== xn && oe(On ? Se.map((G) => ie(G)) : ie(xn));
    }
    function te(Q) {
      if (!e.range) return cn.First;
      const fe = Y[cn.First].percentValue * a.value, Se = Y[cn.Second].percentValue * a.value;
      return Math.abs(Q - fe) <= Math.abs(Q - Se) ? cn.First : cn.Second;
    }
    function W() {
      document.addEventListener("touchmove", he, { passive: !1 }), document.addEventListener("touchend", j), document.addEventListener("touchcancel", j);
    }
    function Z() {
      document.removeEventListener("touchmove", he), document.removeEventListener("touchend", j), document.removeEventListener("touchcancel", j);
    }
    function se(Q, fe) {
      if (A(), i.value || (Y[fe].active = !0), M = fe, W(), i.value || l.value) return;
      k(e.onStart), o.value = !0;
      const { clientX: Se, clientY: Le } = Q.touches[0];
      Y[fe].startPosition = s.value ? Le : Se;
    }
    function he(Q) {
      if (Ae(Q), i.value || l.value || !o.value) return;
      const { startPosition: fe, currentOffset: Se } = Y[M], { clientX: Le, clientY: On } = Q.touches[0];
      let pn = (s.value ? fe - On : Le - fe) + Se;
      pn <= 0 ? pn = 0 : pn >= n.value && (pn = n.value), ze(pn, M);
    }
    function j() {
      Z();
      const { range: Q, modelValue: fe, onEnd: Se, step: Le, min: On } = e;
      if (i.value || (Y[M].active = !1), i.value || l.value) return;
      let pn = [];
      Y[M].currentOffset = Y[M].percentValue * a.value;
      const ir = Y[M].percentValue * H(Le) + H(On);
      Q && He(fe) && (pn = M === cn.First ? [ir, fe[1]] : [fe[0], ir]), k(Se, Q ? pn : ir), o.value = !1;
    }
    function re(Q) {
      if (i.value || l.value || Q.target.closest(`.${lf("thumb")}`)) return;
      const fe = U(Q), Se = te(fe);
      M = Se, ze(fe, Se), j();
    }
    function Ce() {
      return H(e.step) <= 0 ? (F0("Slider", '"step" should be > 0'), !1) : !0;
    }
    function Re() {
      const { range: Q, modelValue: fe } = e;
      return Q && !He(fe) ? (to("Slider", '"modelValue" should be an Array'), !1) : !Q && He(fe) ? (to("Slider", '"modelValue" should be a Number'), !1) : Q && He(fe) && fe.length < 2 ? (to("Slider", '"modelValue" should have two value'), !1) : !0;
    }
    function qe(Q = e.modelValue, fe = H(e.step)) {
      const Se = (Le) => {
        const { min: On, max: pn } = e;
        return Le < H(On) ? 0 : Le > H(pn) ? t.value / fe : (Le - H(On)) / fe;
      };
      e.range && He(Q) ? (Y[cn.First].percentValue = Se(Q[0]), Y[cn.First].currentOffset = Y[cn.First].percentValue * a.value, Y[cn.Second].percentValue = Se(Q[1]), Y[cn.Second].currentOffset = Y[cn.Second].percentValue * a.value) : zn(Q) && (Y[cn.First].currentOffset = Se(Q) * a.value);
    }
    function Ne() {
      const Q = e.range ? [0, 0] : 0;
      k(e["onUpdate:modelValue"], Q), w();
    }
    function dn(Q, fe) {
      const Se = H(e.step);
      return He(fe) ? [fe[0] + (u.value ? Q * Se : 0), fe[1] + (d.value ? Q * Se : 0)].map(ie) : ie(fe + Q * Se);
    }
    function xe(Q) {
      const fe = {
        ArrowRight: 1,
        ArrowUp: 1,
        ArrowLeft: -1,
        ArrowDown: -1
      }, { key: Se } = Q;
      if (!Ir(fe, Se) || l.value || i.value || e.range && !u.value && !d.value || !e.range && !u.value) return;
      Ae(Q);
      const Le = fe[Se];
      oe(dn(Le, e.modelValue));
    }
    function me(Q) {
      i.value || Q.handleFocusing(!0);
    }
    function Fe(Q) {
      Q.handleFocusing(!1);
    }
    return {
      sliderEl: r,
      getFillStyle: I,
      isDisabled: i,
      isVertical: s,
      errorMessage: v,
      thumbsProps: Y,
      thumbList: O,
      handleFocus: me,
      handleBlur: Fe,
      n: lf,
      classes: cz,
      thumbStyle: F,
      hover: J,
      toSizeUnit: Te,
      toNumber: H,
      showLabel: z,
      start: se,
      move: he,
      end: j,
      handleClick: re
    };
  }
});
sg.render = vz;
var Ki = sg;
ae(Ki);
de(Ki, lg);
var AD = Ki, Ns = Ki, pz = Object.defineProperty, mz = Object.defineProperties, hz = Object.getOwnPropertyDescriptors, sf = Object.getOwnPropertySymbols, gz = Object.prototype.hasOwnProperty, bz = Object.prototype.propertyIsEnumerable, uf = (e, n, r) => n in e ? pz(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, yz = (e, n) => {
  for (var r in n || (n = {})) gz.call(n, r) && uf(e, r, n[r]);
  if (sf)
    for (var r of sf(n)) bz.call(n, r) && uf(e, r, n[r]);
  return e;
}, wz = (e, n) => mz(e, hz(n)), Nu = {
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
  loadingType: Be(pr, "type"),
  loadingSize: Be(pr, "size"),
  loadingRadius: Be(pr, "radius"),
  loadingColor: wz(yz({}, Be(pr, "color")), { default: "currentColor" }),
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
  onOpen: R(),
  onOpened: R(),
  onClose: R(),
  onClosed: R(),
  "onUpdate:show": R(),
  _update: String
}, { n: kz, classes: $z } = ne("snackbar"), Cz = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function Sz(e, n) {
  const r = x("var-icon"), o = x("var-loading");
  return Me((g(), S("div", {
    class: p(e.n()),
    style: q({
      pointerEvents: e.isForbidClick ? "auto" : "none",
      zIndex: e.zIndex
    })
  }, [V("div", {
    class: p(e.classes(e.n("wrapper"), e.n(`wrapper-${e.position}`), e.formatElevation(e.elevation, 4), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n(`wrapper-${e.type}`)])),
    style: q({ zIndex: e.zIndex })
  }, [
    V("div", { class: p([e.n("content"), e.contentClass]) }, [L(e.$slots, "default", {}, () => [Ie(ue(e.content), 1)])], 2),
    e.iconName || e.type === "loading" || e.$slots.icon ? (g(), S("div", {
      key: 0,
      class: p(e.n("icon"))
    }, [
      e.iconName ? (g(), ke(r, {
        key: 0,
        name: e.iconName
      }, null, 8, ["name"])) : K("v-if", !0),
      e.type === "loading" ? (g(), ke(o, {
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
      ])) : K("v-if", !0),
      L(e.$slots, "icon")
    ], 2)) : K("v-if", !0),
    e.$slots.action ? (g(), S("div", {
      key: 1,
      class: p(e.n("action"))
    }, [L(e.$slots, "action")], 2)) : K("v-if", !0)
  ], 6)], 6)), [[Jn, e.show]]);
}
var ug = ee({
  name: "VarSnackbarCore",
  components: {
    VarLoading: fo,
    VarIcon: Je
  },
  props: Nu,
  setup(e) {
    const n = y(null), { zIndex: r } = it(() => e.show, 1);
    at(() => e.show, () => e.lockScroll);
    const o = E(() => {
      const { type: i, forbidClick: l } = e;
      return i === "loading" || l;
    }), t = E(() => e.type ? Cz[e.type] : "");
    function a() {
      n.value = setTimeout(() => {
        e.type !== "loading" && k(e["onUpdate:show"], !1);
      }, e.duration);
    }
    return pe(() => e.show, (i) => {
      i ? (k(e.onOpen), a()) : (clearTimeout(n.value), k(e.onClose));
    }), pe(() => e._update, () => {
      clearTimeout(n.value), a();
    }), bn(() => {
      e.show && (k(e.onOpen), a());
    }), {
      SNACKBAR_TYPE: fg,
      zIndex: r,
      iconName: t,
      isForbidClick: o,
      n: kz,
      classes: $z,
      formatElevation: vn
    };
  }
});
ug.render = Sz;
var dg = ug, { name: Oz, n: Pz } = ne("snackbar");
function zz(e, n) {
  const r = x("var-snackbar-core");
  return g(), ke(cr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [X(en, {
    name: `${e.n()}-fade`,
    onAfterEnter: e.onOpened,
    onAfterLeave: e.onClosed
  }, {
    default: ve(() => [X(r, je(e.$props, { class: e.n("transition") }), Xr({
      default: ve(() => [L(e.$slots, "default")]),
      _: 2
    }, [e.$slots.icon ? {
      name: "icon",
      fn: ve(() => [L(e.$slots, "icon")]),
      key: "0"
    } : void 0, e.$slots.action ? {
      name: "action",
      fn: ve(() => [L(e.$slots, "action")]),
      key: "1"
    } : void 0]), 1040, ["class"])]),
    _: 3
  }, 8, [
    "name",
    "onAfterEnter",
    "onAfterLeave"
  ])], 8, ["to", "disabled"]);
}
var cg = ee({
  name: Oz,
  components: { VarSnackbarCore: dg },
  props: Nu,
  setup() {
    const { disabled: e } = xr();
    return {
      disabled: e,
      n: Pz
    };
  }
});
cg.render = zz;
var qi = cg, Tz = Object.defineProperty, df = Object.getOwnPropertySymbols, Ez = Object.prototype.hasOwnProperty, Iz = Object.prototype.propertyIsEnumerable, cf = (e, n, r) => n in e ? Tz(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Jo = (e, n) => {
  for (var r in n || (n = {})) Ez.call(n, r) && cf(e, r, n[r]);
  if (df)
    for (var r of df(n)) Iz.call(n, r) && cf(e, r, n[r]);
  return e;
}, fg = [
  "loading",
  "success",
  "warning",
  "info",
  "error"
], ff = 0, Vs = !1, vg, Qo = !1, pg = {
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
}, Zn = nn([]), Vu = pg, Bz = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, gl = (e) => () => fn(e) ? e() : e, Dz = { setup() {
  return () => {
    const e = Zn.map(({ id: n, reactiveSnackOptions: r, _update: o }) => {
      const t = document.querySelector(".var-transition-group");
      r.forbidClick || r.type === "loading" ? t.classList.add("var-pointer-auto") : t.classList.remove("var-pointer-auto");
      const a = Jo({ position: Qo ? "relative" : "absolute" }, Lz(r.position)), { content: i, icon: l, action: s } = r, u = {
        default: gl(i),
        icon: gl(l),
        action: gl(s)
      };
      return X(dg, je(r, {
        key: n,
        style: a,
        "data-id": n,
        _update: o,
        show: r.show,
        "onUpdate:show": (d) => r.show = d
      }), u);
    });
    return X(Zg, je(Bz, {
      style: { zIndex: Ln.zIndex },
      onAfterEnter: Mz,
      onAfterLeave: Az
    }), { default: () => [e] });
  };
} }, dr = function(e) {
  const n = Vz(e), r = nn(Jo(Jo({}, Vu), n));
  r.show = !0, Vs || (Vs = !0, vg = yo(Dz).unmountInstance);
  const { length: o } = Zn, t = {
    id: ff++,
    reactiveSnackOptions: r
  };
  return o === 0 || Qo ? Nz(t) : Rz(r, `update-${ff}`), { clear() {
    !Qo && Zn.length ? Zn[0].reactiveSnackOptions.show = !1 : r.show = !1;
  } };
};
fg.forEach((e) => {
  dr[e] = (n) => (gn(n) ? n.type = e : n = {
    content: n,
    type: e
  }, dr(n));
});
dr.allowMultiple = function(e = !1) {
  e !== Qo && (Zn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Qo = e);
};
dr.clear = function() {
  Zn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
dr.setDefaultOptions = function(e) {
  Vu = e;
};
dr.resetDefaultOptions = function() {
  Vu = pg;
};
function Mz(e) {
  const n = e.getAttribute("data-id"), r = Zn.find((o) => o.id === H(n));
  r && k(r.reactiveSnackOptions.onOpened);
}
function Az(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), r = Zn.find((o) => o.id === H(n));
  r && (r.animationEnd = !0, k(r.reactiveSnackOptions.onClosed)), Zn.every((o) => o.animationEnd) && (k(vg), Zn = nn([]), Vs = !1);
}
function Nz(e) {
  Zn.push(e);
}
function Vz(e = {}) {
  return tn(e) ? { content: e } : e;
}
function Rz(e, n) {
  const [r] = Zn;
  r.reactiveSnackOptions = Jo(Jo({}, r.reactiveSnackOptions), e), r._update = n;
}
function Lz(e = "top") {
  return e === "bottom" ? { top: "85%" } : { top: e === "top" ? "5%" : "45%" };
}
dr.Component = qi;
ae(qi);
ae(qi, dr);
de(dr, Nu);
var ND = qi, Rs = dr, mg = {
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
function Rn(e) {
  return `calc(${e} / 2)`;
}
function Fz(e, n, r) {
  const { direction: o, justify: t, index: a, lastIndex: i } = r;
  let l = "0";
  return o === "row" && ([
    "flex-start",
    "center",
    "flex-end",
    "start",
    "end"
  ].includes(t) ? a !== i ? l = `${Rn(e)} ${n} ${Rn(e)} 0` : l = `${Rn(e)} 0` : t === "space-around" ? l = `${Rn(e)} ${Rn(n)}` : t === "space-between" && (a === 0 ? l = `${Rn(e)} ${Rn(n)} ${Rn(e)} 0` : a === i ? l = `${Rn(e)} 0 ${Rn(e)} ${Rn(n)}` : l = `${Rn(e)} ${Rn(n)}`)), o === "column" && a !== i && (l = `0 0 ${e} 0`), l;
}
var Uz = (e) => [
  "mini",
  "small",
  "normal",
  "large"
].includes(e), { name: Hz, n: It, classes: vf } = ne("space");
function Yz(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : He(e) ? e.map(Te) : [Te(e), Te(e)];
}
var Xi = ee({
  name: Hz,
  props: mg,
  setup(e, { slots: n }) {
    return () => {
      var r;
      const { inline: o, justify: t, align: a, wrap: i, direction: l, size: s } = e, u = (r = k(n.default)) != null ? r : [], [d, c] = Yz(s, Uz(s)), f = iu(u), v = f.length - 1, m = f.map((h, w) => {
        var $;
        const C = Fz(d, c, {
          direction: l,
          justify: t,
          index: w,
          lastIndex: v
        });
        return X("div", {
          class: vf([l === "column", It("--auto")]),
          key: ($ = h.key) != null ? $ : void 0,
          style: { margin: C }
        }, [h]);
      });
      return X("div", {
        class: vf(It(), It("$--box"), [o, It("--inline")]),
        style: {
          flexDirection: l,
          justifyContent: _t(t),
          alignItems: _t(a),
          flexWrap: i ? "wrap" : "nowrap",
          margin: l === "row" ? `calc(-1 * ${d} / 2) 0` : void 0
        }
      }, [m]);
    };
  }
});
ae(Xi);
de(Xi, mg);
var VD = Xi, Ls = Xi, hg = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: Be(ln, "name"),
  inactiveIcon: Be(ln, "name"),
  activeIconNamespace: Be(ln, "namespace"),
  currentIconNamespace: Be(ln, "namespace"),
  inactiveIconNamespace: Be(ln, "namespace")
}, gg = /* @__PURE__ */ Symbol("STEPS_BIND_STEP_KEY");
function jz() {
  const { bindChildren: e, childProviders: n } = wn(gg);
  return {
    step: n,
    bindStep: e
  };
}
function Wz() {
  const { parentProvider: e, index: n, bindParent: r } = yn(gg);
  return Un(!!r, "Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: r
  };
}
var { name: Kz, n: qz, classes: Xz } = ne("step"), Gz = { key: 3 };
function Zz(e, n) {
  const r = x("var-icon");
  return g(), S("div", { class: p(e.n()) }, [V("div", { class: p(e.n(e.direction)) }, [
    V("div", {
      class: p(e.classes(e.n(`${e.direction}-tag`), [e.isActive || e.isCurrent, e.n(`${e.direction}-tag--active`)])),
      style: q({ backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor }),
      onClick: n[0] || (n[0] = (...o) => e.click && e.click(...o))
    }, [e.isActive ? (g(), ke(r, {
      key: 0,
      class: p(e.n("icon")),
      "var-step-cover": "",
      name: e.activeIcon,
      namespace: e.activeIconNamespace
    }, null, 8, [
      "class",
      "name",
      "namespace"
    ])) : e.isCurrent && e.currentIcon ? (g(), ke(r, {
      key: 1,
      class: p(e.n("icon")),
      "var-step-cover": "",
      name: e.currentIcon,
      namespace: e.currentIconNamespace
    }, null, 8, [
      "class",
      "name",
      "namespace"
    ])) : e.inactiveIcon ? (g(), ke(r, {
      key: 2,
      class: p(e.n("icon")),
      "var-step-cover": "",
      name: e.inactiveIcon,
      namespace: e.inactiveIconNamespace
    }, null, 8, [
      "class",
      "name",
      "namespace"
    ])) : (g(), S("span", Gz, ue(e.index + 1), 1))], 6),
    e.$slots.default ? (g(), S("div", {
      key: 0,
      class: p(e.classes(e.n(`${e.direction}-content`), [e.isActive || e.isCurrent, e.n(`${e.direction}-content--active`)])),
      onClick: n[1] || (n[1] = (...o) => e.click && e.click(...o))
    }, [L(e.$slots, "default")], 2)) : K("v-if", !0),
    V("div", { class: p(e.n(`${e.direction}-line`)) }, null, 2)
  ], 2)], 2);
}
var bg = ee({
  name: Kz,
  components: { VarIcon: Je },
  props: hg,
  setup() {
    const { index: e, steps: n, bindSteps: r } = Wz(), { active: o, activeColor: t, inactiveColor: a, direction: i, clickStep: l } = n, s = E(() => o.value === e.value), u = E(() => e.value !== -1 && H(o.value) > e.value);
    r({ index: e });
    function d() {
      return l(e.value);
    }
    return {
      index: e,
      isActive: u,
      isCurrent: s,
      direction: i,
      activeColor: t,
      inactiveColor: a,
      n: qz,
      classes: Xz,
      click: d
    };
  }
});
bg.render = Zz;
var Gi = bg;
ae(Gi);
de(Gi, hg);
var RD = Gi, Fs = Gi, yg = {
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
  onClickStep: R()
}, { name: Jz, n: Qz } = ne("steps");
function xz(e, n) {
  return g(), S("div", {
    class: p(e.n()),
    style: q({ flexDirection: e.direction === "horizontal" ? "row" : "column" })
  }, [L(e.$slots, "default")], 6);
}
var wg = ee({
  name: Jz,
  props: yg,
  setup(e) {
    const n = E(() => e.active), r = E(() => e.activeColor), o = E(() => e.inactiveColor), t = E(() => e.direction), { bindStep: a } = jz();
    a({
      active: n,
      direction: t,
      activeColor: r,
      inactiveColor: o,
      clickStep: i
    });
    function i(l) {
      k(e.onClickStep, l);
    }
    return { n: Qz };
  }
});
wg.render = xz;
var Zi = wg;
ae(Zi);
de(Zi, yg);
var LD = Zi, Us = Zi, kg = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: _z, n: e8 } = ne("style-provider"), Ji = ee({
  name: _z,
  props: kg,
  setup(e, { slots: n }) {
    return () => xo(e.tag, {
      class: e8(),
      style: Pv(e.styleVars)
    }, k(n.default));
  }
}), $g = "varlet-style-vars";
function pf() {
  const e = document.head.querySelector(`#${$g}`);
  e && document.head.removeChild(e);
}
function n8(e) {
  const n = document.createElement("style");
  n.id = $g, n.innerHTML = e, document.head.appendChild(n);
}
function Qi(e) {
  if (e == null) {
    pf();
    return;
  }
  const n = Pv(e ?? {}), r = Object.entries(n).reduce((o, [t, a]) => (o += `${t}:${a};`, o), `:root:root {
`);
  pf(), n8(`${r}
}`);
}
Qi.Component = Ji;
ae(Ji);
ae(Ji, Qi);
de(Qi, kg);
var FD = Ji, Hs = Qi, Cg = {
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
  onClick: R(),
  onBeforeChange: R(),
  onChange: R(),
  "onUpdate:modelValue": R()
}, { name: r8, n: o8, classes: t8 } = ne("switch"), a8 = ["aria-checked"], i8 = ["tabindex"];
function l8(e, n) {
  const r = x("var-hover-overlay"), o = x("var-form-details"), t = We("ripple"), a = We("hover");
  return Me((g(), S("div", {
    class: p(e.classes(e.n(), [e.variant, e.n("--variant")])),
    role: "switch",
    "aria-checked": e.modelValue
  }, [V("div", {
    ref: "switchRef",
    class: p(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.isActive, e.n("block--active")])),
    style: q(e.styleComputed.switch),
    onClick: n[2] || (n[2] = (...i) => e.switchActive && e.switchActive(...i))
  }, [V("div", {
    style: q(e.styleComputed.track),
    class: p(e.classes(e.n("track"), [e.isActive, e.n("track--active")], [e.errorMessage && !e.variant, e.n("track--error")]))
  }, null, 6), Me((g(), S("div", {
    class: p(e.classes(e.n("ripple"), [e.isActive, e.n("ripple--active")])),
    style: q(e.styleComputed.ripple),
    tabindex: e.tabindex == null ? e.disabled || e.formDisabled ? void 0 : "0" : e.tabindex,
    onFocus: n[0] || (n[0] = (i) => e.isFocusing = !0),
    onBlur: n[1] || (n[1] = (i) => e.isFocusing = !1)
  }, [V("div", {
    style: q(e.styleComputed.handle),
    class: p(e.classes(e.n("handle"), e.formatElevation(e.buttonElevation, 2), [e.isActive, e.n("handle--active")], [e.errorMessage && !e.variant, e.n("handle--error")], [e.hovering, e.n("handle--hover")]))
  }, [e.loading ? (g(), S("span", {
    key: 0,
    class: p(e.n("loading")),
    style: q({
      width: e.radius,
      height: e.radius
    })
  }, [...n[3] || (n[3] = [V("svg", { viewBox: "25 25 50 50" }, [V("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })], -1)])], 6)) : K("v-if", !0)], 6), X(r, {
    hovering: e.hovering && !e.disabled && !e.formDisabled,
    focusing: e.isFocusing && !e.disabled && !e.formDisabled
  }, null, 8, ["hovering", "focusing"])], 46, i8)), [[t, { disabled: !e.ripple || e.disabled || e.loading || e.formDisabled || e.readonly || e.formReadonly }]])], 6), X(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 10, a8)), [[
    a,
    e.hover,
    "desktop"
  ]]);
}
var Sg = ee({
  name: r8,
  components: {
    VarFormDetails: Bn,
    VarHoverOverlay: Hn
  },
  directives: {
    Ripple: sn,
    Hover: An
  },
  props: Cg,
  setup(e) {
    const n = y(null), r = y(!1), { bindForm: o, form: t } = Wn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = jn(), { hovering: u, handleHovering: d } = rr(), c = E(() => e.modelValue === e.activeValue), f = E(() => {
      const { size: O, color: I, closeColor: Y, loadingColor: M, variant: A } = e;
      return {
        handle: {
          width: En(O),
          height: En(O),
          backgroundColor: c.value ? I : Y,
          color: M
        },
        ripple: {
          left: c.value ? En(O, 0.5) : `-${En(O, A ? 1 / 3 : 0.5)}`,
          color: c.value ? I : Y || "currentColor",
          width: En(O, 2),
          height: En(O, 2)
        },
        track: {
          width: En(O, A ? 13 / 6 : 1.9),
          height: En(O, A ? 4 / 3 : 0.72),
          borderRadius: En(O, 2 / 3),
          filter: c.value || a?.value ? void 0 : `brightness(${A ? 1 : 0.6})`,
          backgroundColor: c.value ? I : Y,
          borderWidth: A && !c.value ? En(O, 1 / 12) : void 0
        },
        switch: {
          width: En(O, A ? 13 / 6 : 2),
          height: En(O, A ? 4 / 3 : 1.2)
        }
      };
    }), v = E(() => En(e.size, 0.8));
    k(o, {
      reset: P,
      validate: w,
      resetValidation: s
    }), Ye(() => window, "keydown", m), Ye(() => window, "keyup", h);
    function m(O) {
      r.value && ((O.key === " " || O.key === "Enter") && Ae(O), O.key === "Enter" && n.value.click());
    }
    function h(O) {
      !r.value || O.key !== " " || (Ae(O), n.value.click());
    }
    function w() {
      return l(e.rules, e.modelValue);
    }
    function $(O) {
      Ve(() => {
        const { validateTrigger: I, rules: Y, modelValue: M } = e;
        i(I, O, Y, M);
      });
    }
    function C(O) {
      const { onClick: I, onChange: Y, disabled: M, loading: A, readonly: B, activeValue: T, inactiveValue: D, lazyChange: U, "onUpdate:modelValue": F, onBeforeChange: z } = e;
      if (M || t?.disabled.value || (k(I, O), A || B || t?.readonly.value)) return;
      const N = c.value ? D : T;
      U ? k(z, N, (ie) => {
        k(F, ie), $("onLazyChange");
      }) : (k(Y, N), k(F, N), $("onChange"));
    }
    function b(O) {
      e.disabled || t?.disabled.value || d(O);
    }
    function P() {
      k(e["onUpdate:modelValue"], e.inactiveValue), s();
    }
    return {
      isActive: c,
      switchRef: n,
      hovering: u,
      isFocusing: r,
      radius: v,
      styleComputed: f,
      errorMessage: a,
      formDisabled: t?.disabled,
      formReadonly: t?.readonly,
      n: o8,
      classes: t8,
      formatElevation: vn,
      multiplySizeUnit: En,
      switchActive: C,
      hover: b
    };
  }
});
Sg.render = l8;
var xi = Sg;
ae(xi);
de(xi, Cg);
var UD = xi, Ys = xi, Og = {
  name: [String, Number],
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: R()
}, Pg = /* @__PURE__ */ Symbol("TABS_BIND_TAB_KEY");
function s8() {
  const { childProviders: e, bindChildren: n, length: r } = wn(Pg);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function u8() {
  const { parentProvider: e, bindParent: n, index: r } = yn(Pg);
  return Un(!!n, "Tab", "<var-tab/> must in <var-tabs/>"), {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var { name: d8, n: Bt, classes: c8 } = ne("tab");
function f8(e, n) {
  const r = We("ripple");
  return Me((g(), S("div", {
    ref: "tabEl",
    class: p(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n(`--${e.itemDirection}`))),
    style: q({ color: e.computeColorStyle() }),
    onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
  }, [L(e.$slots, "default")], 6)), [[r, { disabled: e.disabled || !e.ripple }]]);
}
var zg = ee({
  name: d8,
  directives: { Ripple: sn },
  props: Og,
  setup(e) {
    const n = y(null), r = E(() => n.value), o = E(() => e.name), t = E(() => e.disabled), { index: a, tabs: i, bindTabs: l } = u8(), { onTabClick: s, active: u, activeColor: d, inactiveColor: c, disabledColor: f, itemDirection: v, resize: m } = i, h = {
      name: o,
      index: a,
      disabled: t,
      element: r
    };
    l(h), pe(() => [e.name, e.disabled], m);
    function w() {
      return e.name != null ? u.value === e.name : u.value === a?.value;
    }
    function $() {
      return e.disabled ? f.value : w() ? d.value : c.value;
    }
    function C() {
      return e.disabled ? Bt("$-tab--disabled") : w() ? Bt("$-tab--active") : Bt("$-tab--inactive");
    }
    function b(P) {
      const { disabled: O, name: I, onClick: Y } = e;
      O || (k(Y, I ?? a.value, P), s(h));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: c,
      itemDirection: v,
      n: Bt,
      classes: c8,
      computeColorStyle: $,
      computeColorClass: C,
      handleClick: b
    };
  }
});
zg.render = f8;
var _i = zg;
ae(_i);
de(_i, Og);
var HD = _i, js = _i, Tg = { name: [String, Number] }, { name: v8, n: p8, classes: m8 } = ne("tab-item");
function h8(e, n) {
  const r = x("var-swipe-item");
  return g(), ke(r, {
    class: p(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: ve(() => [L(e.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}
var Eg = ee({
  name: v8,
  components: { VarSwipeItem: Go },
  props: Tg,
  setup(e) {
    const n = y(!1), r = E(() => e.name), { index: o, bindTabsItems: t } = z6(), { bindLists: a } = T6(), i = {
      index: o,
      name: r,
      current: E(() => n.value),
      setCurrent: l
    };
    t(i), a(i);
    function l(s) {
      n.value = s;
    }
    return {
      current: n,
      n: p8,
      classes: m8
    };
  }
});
Eg.render = h8;
var el = Eg;
ae(el);
de(el, Tg);
var YD = el, Ws = el, Ig = {
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
  }
}, { name: g8, n: b8, classes: y8 } = ne("table");
function w8(e, n) {
  return g(), S("div", { class: p(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box"))) }, [V("div", {
    class: p(e.n("main")),
    style: q({ "max-height": e.toSizeUnit(e.scrollerHeight) })
  }, [V("table", {
    class: p(e.n("table")),
    style: q({ width: e.toSizeUnit(e.fullWidth) })
  }, [L(e.$slots, "default")], 6)], 6), e.$slots.footer ? (g(), S("div", {
    key: 0,
    class: p(e.n("footer"))
  }, [L(e.$slots, "footer")], 2)) : K("v-if", !0)], 2);
}
var Bg = ee({
  name: g8,
  props: Ig,
  setup: () => ({
    toSizeUnit: Te,
    n: b8,
    classes: y8,
    formatElevation: vn
  })
});
Bg.render = w8;
var nl = Bg;
ae(nl);
de(nl, Ig);
var jD = nl, Ks = nl, Dg = {
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
  stickyCssMode: Be(Mo, "cssMode"),
  stickyZIndex: Be(Mo, "zIndex"),
  offsetTop: Be(Mo, "offsetTop"),
  onClick: R(),
  onChange: R(),
  "onUpdate:active": R()
}, mf = (e, n, r) => new Promise((o, t) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: k8, n: $8, classes: C8 } = ne("tabs");
function S8(e, n) {
  return g(), ke(ho(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: ve(() => [V("div", je({
      class: e.classes(e.n(), e.n("$--box"), e.n(`--item-${e.itemDirection}`), e.n(`--layout-${e.layoutDirection}-padding`), e.formatElevation(e.elevation, 4), [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
      style: { background: e.color }
    }, e.$attrs), [V("div", {
      ref: "scrollerEl",
      class: p(e.classes(e.n("tab-wrap"), [e.localScrollable, e.n(`--layout-${e.layoutDirection}-scrollable`)], e.n(`--layout-${e.layoutDirection}`)))
    }, [L(e.$slots, "default"), V("div", {
      class: p(e.classes(e.n("indicator"), e.n(`--layout-${e.layoutDirection}${e.indicatorPosition}-indicator`))),
      style: q({
        width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
        height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
        transform: e.layoutDirection === "horizontal" ? `translateX(${e.indicatorX})` : `translateY(${e.indicatorY})`
      })
    }, [V("div", {
      class: p(e.classes(e.n("indicator-inner"), e.n(`--layout-${e.layoutDirection}-indicator-inner`))),
      style: q({ background: e.indicatorColor || e.activeColor })
    }, null, 6)], 6)], 2)], 16)]),
    _: 3
  }, 8, [
    "css-mode",
    "offset-top",
    "z-index"
  ]);
}
var Mg = ee({
  name: k8,
  components: { VarSticky: po },
  inheritAttrs: !1,
  props: Dg,
  setup(e) {
    const n = y("0px"), r = y("0px"), o = y("0px"), t = y("0px"), a = y(!1), i = y(null), l = E(() => e.active), s = E(() => e.activeColor), u = E(() => e.inactiveColor), d = E(() => e.disabledColor), c = E(() => e.itemDirection), f = y(null), v = E(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: m, bindTabList: h, length: w } = s8();
    h({
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: c,
      resize: M,
      onTabClick: $
    }), pe(() => w.value, () => mf(null, null, function* () {
      yield Sn(), M();
    })), pe(() => [e.active, e.scrollable], M), Vr(M), tr(M);
    function $(B) {
      var T;
      const D = (T = B.name.value) != null ? T : B.index.value, { active: U, onChange: F, onClick: z } = e;
      k(e["onUpdate:active"], D), k(z, D), D !== U && k(F, D);
    }
    function C() {
      return m.find(({ name: B }) => e.active === B.value);
    }
    function b(B) {
      return m.find(({ index: T }) => (B ?? e.active) === T.value);
    }
    function P() {
      if (w.value === 0) return;
      const { active: B } = e;
      if (zn(B)) {
        const T = $n(B, 0, w.value - 1);
        return k(e["onUpdate:active"], T), b(T);
      }
    }
    function O() {
      a.value = e.scrollable === "always" || m.length >= 5;
    }
    function I({ element: B }) {
      const T = B.value;
      T && (e.layoutDirection === "horizontal" ? (n.value = `${T.offsetWidth}px`, o.value = `${T.offsetLeft}px`) : (r.value = `${T.offsetHeight}px`, t.value = `${T.offsetTop}px`));
    }
    function Y({ element: B }) {
      if (!a.value) return;
      const T = i.value, D = B.value;
      e.layoutDirection === "horizontal" ? Lo(T, {
        left: D.offsetLeft + D.offsetWidth / 2 - T.offsetWidth / 2,
        animation: Bl
      }) : Lo(T, {
        top: D.offsetTop + D.offsetHeight / 2 - T.offsetHeight / 2,
        animation: Bl
      });
    }
    function M() {
      const B = C() || b() || P();
      !B || B.disabled.value || (O(), I(B), Y(B));
    }
    function A() {
      return mf(this, null, function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
    }
    return {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: o,
      indicatorY: t,
      indicatorPosition: v,
      localScrollable: a,
      scrollerEl: i,
      Transition: en,
      toSizeUnit: Te,
      n: $8,
      classes: C8,
      resize: M,
      resizeSticky: A,
      formatElevation: vn
    };
  }
});
Mg.render = S8;
var rl = Mg;
ae(rl);
de(rl, Dg);
var WD = rl, qs = rl, Ag = {
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
  "onUpdate:active": R()
}, O8 = (e, n, r) => new Promise((o, t) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: P8, n: z8 } = ne("tabs-items");
function T8(e, n) {
  const r = x("var-swipe");
  return g(), ke(r, {
    ref: "swipe",
    class: p(e.n()),
    loop: e.loop,
    duration: e.animated ? void 0 : 0,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: ve(() => [L(e.$slots, "default")]),
    _: 3
  }, 8, [
    "class",
    "loop",
    "duration",
    "touchable",
    "onChange"
  ]);
}
var Ng = ee({
  name: P8,
  components: { VarSwipe: Xo },
  props: Ag,
  setup(e) {
    const n = y(null), { tabItemList: r, bindTabItem: o, length: t } = P6();
    o({}), pe(() => e.active, s), pe(() => t.value, () => O8(null, null, function* () {
      yield Sn(), s(e.active);
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
      v && (r.forEach(({ setCurrent: m }) => m(!1)), v.setCurrent(!0), (f = n.value) == null || f.to(v.index.value));
    }
    function u(c) {
      var f;
      const v = r.find(({ index: h }) => h.value === c), m = (f = v.name.value) != null ? f : v.index.value;
      k(e["onUpdate:active"], m);
    }
    function d() {
      return n.value;
    }
    return {
      swipe: n,
      n: z8,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
Ng.render = T8;
var ol = Ng;
ae(ol);
de(ol, Ag);
var KD = ol, Xs = ol;
function Ru(e, n) {
  return Object.entries(e).reduce((r, [o, t]) => (r[o] = t.includes("px") ? t.replace(/(\d+(\.\d+)?)px/g, (a, i) => n(i)) : t, r), {});
}
var E8 = {
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
}, I8 = {
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
}, B8 = {
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
}, D8 = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e",
  "--avatar-text-color": "#f5f5f5",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-hover-transform": "scale(1.1)"
}, M8 = { "--avatar-group-offset": "-10px" }, A8 = {
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px",
  "--back-top-button-border-radius": "50%"
}, N8 = {
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
}, V8 = {
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-background-color": "var(--color-surface-container-high)",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, R8 = {
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
}, L8 = {
  "--breadcrumb-inactive-color": "#aaa",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, F8 = {
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
}, U8 = {
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
}, H8 = {
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
}, Y8 = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, j8 = {
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
}, W8 = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, K8 = {
  "--collapse-text-color": "#fff",
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, q8 = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, X8 = {
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
}, G8 = {
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
}, Z8 = {
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
}, J8 = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, Q8 = {
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
}, x8 = {
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
}, _8 = {
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
}, e5 = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, n5 = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, r5 = { "--icon-size": "20px" }, o5 = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, t5 = {
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
}, a5 = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, i5 = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, l5 = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, s5 = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, u5 = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, d5 = {
  "--menu-background-color": "#272727",
  "--menu-border-radius": "2px"
}, c5 = {
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
}, f5 = {
  "--menu-select-menu-background-color": "#272727",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0",
  "--menu-select-menu-border-radius": "2px"
}, v5 = {
  "--option-text-color": "#fff",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, p5 = { "--overlay-background-color": "rgba(0, 0, 0, 0.6)" }, m5 = {
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
}, h5 = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "4px"
}, g5 = {
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
}, b5 = {
  "--popup-content-background-color": "var(--color-surface-container-low)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, y5 = {
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
}, w5 = {
  "--pull-refresh-background": "#303030",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, k5 = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, $5 = {
  "--rate-color": "var(--color-text)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, C5 = {
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
}, S5 = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, O5 = {
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
}, P5 = {
  "--signature-background-color": "var(--color-surface-container-highest)",
  "--signature-stroke-color": "#fff",
  "--signature-height": "200px",
  "--signature-border-radius": "4px"
}, z5 = {
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
}, T5 = {
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
}, E5 = {
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
}, I5 = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, B5 = {
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
}, D5 = {
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
}, M5 = {
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
}, A5 = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, N5 = {
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
}, V5 = {
  "--tabs-background": "#1e1e1e",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, R5 = {
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
}, L5 = {
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
}, F5 = {
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
}, U5 = { "--watermark-content-color": "#ffffff" }, H5 = Object.defineProperty, hf = Object.getOwnPropertySymbols, Y5 = Object.prototype.hasOwnProperty, j5 = Object.prototype.propertyIsEnumerable, gf = (e, n, r) => n in e ? H5(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, be = (e, n) => {
  for (var r in n || (n = {})) Y5.call(n, r) && gf(e, r, n[r]);
  if (hf)
    for (var r of hf(n)) j5.call(n, r) && gf(e, r, n[r]);
  return e;
}, W5 = be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be({
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
}, F8), I8), H8), U8), R5), G8), z5), V5), A5), b5), Z8), E8), j8), N8), F5), K8), w5), M5), B5), m5), N5), x8), k5), Y8), J8), g5), B8), R8), d5), C5), L8), D8), i5), y5), v5), U5), f5), c5), M8), A8), V8), q8), X8), Q8), _8), e5), n5), r5), o5), t5), a5), l5), s5), u5), p5), h5), $5), S5), T5), E5), I5), D5), L5), O5), W8), P5), K5 = {
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
}, q5 = {
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
}, X5 = {
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
}, G5 = {
  "--avatar-text-color": "#000",
  "--avatar-background-color": "var(--color-primary)",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-border": "2px solid #fff",
  "--avatar-hover-transform": "scale(1.1)"
}, Z5 = { "--avatar-group-offset": "-10px" }, J5 = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, Q5 = {
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
}, x5 = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, _5 = {
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
}, eT = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, nT = {
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
}, rT = {
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
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, aT = {
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
}, iT = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, lT = {
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-text-color": "var(--color-inverse-surface)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, sT = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, uT = {
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
}, dT = {
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
}, cT = {
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
}, fT = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, vT = {
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
}, pT = {
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
}, mT = {
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
}, hT = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, gT = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, bT = { "--icon-size": "20px" }, yT = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, wT = {
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
}, kT = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, $T = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, CT = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, ST = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, OT = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, PT = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, zT = {
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
}, TT = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, ET = {
  "--option-text-color": "var(--color-inverse-surface)",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, IT = { "--overlay-background-color": "rgba(0, 0, 0, 0.6)" }, BT = {
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
}, DT = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "12px"
}, MT = {
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
}, AT = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, NT = {
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
}, VT = {
  "--pull-refresh-background": "var(--color-surface-container-highest)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, RT = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, LT = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, FT = {
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
}, UT = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, HT = {
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
}, YT = {
  "--signature-background-color": "var(--color-surface-container-highest)",
  "--signature-stroke-color": "var(--color-inverse-surface)",
  "--signature-height": "200px",
  "--signature-border-radius": "12px"
}, jT = {
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
}, WT = {
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
}, KT = {
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
}, qT = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, XT = {
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
}, GT = {
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
}, ZT = {
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
}, JT = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, QT = {
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
}, xT = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, _T = {
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
}, eE = {
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
}, nE = {
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
}, rE = { "--watermark-content-color": "#ffffff" }, oE = Object.defineProperty, bf = Object.getOwnPropertySymbols, tE = Object.prototype.hasOwnProperty, aE = Object.prototype.propertyIsEnumerable, yf = (e, n, r) => n in e ? oE(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, ye = (e, n) => {
  for (var r in n || (n = {})) tE.call(n, r) && yf(e, r, n[r]);
  if (bf)
    for (var r of bf(n)) aE.call(n, r) && yf(e, r, n[r]);
  return e;
}, iE = ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye({
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
}, nT), q5), gT), PT), TT), zT), vT), eT), $T), oT), DT), G5), pT), tT), RT), rT), aT), Q5), eE), NT), xT), JT), XT), fT), QT), BT), rE), lT), FT), X5), x5), _5), KT), K5), cT), VT), AT), MT), mT), J5), HT), ET), uT), ZT), WT), nE), _T), dT), LT), jT), Z5), sT), hT), bT), yT), wT), kT), CT), ST), OT), IT), UT), qT), GT), iT), YT), lE = {
  "--action-sheet-background": "var(--color-surface-container-high)",
  "--action-sheet-title-color": "var(--color-on-surface-variant)",
  "--action-sheet-action-item-color": "#1D1B20",
  "--action-sheet-border-radius": "0px"
}, sE = {
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
}, uE = {
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
}, dE = {
  "--avatar-text-color": "#fff",
  "--avatar-background-color": "var(--color-primary)"
}, cE = { "--avatar-group-offset": "-10px" }, fE = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, vE = {
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
}, pE = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-fab-border-radius": "12px",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px"
}, mE = {
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
}, hE = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, gE = {
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
}, bE = {
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
}, yE = {
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
}, wE = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, kE = {
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
}, $E = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, CE = {
  "--collapse-background": "var(--color-surface-container-low)",
  "--collapse-text-color": "#1D1B20",
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
}, OE = {
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
}, zE = {
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
}, TE = {
  "--divider-color": "var(--color-outline)",
  "--divider-text-color": "#888",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, EE = {
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
}, IE = {
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
}, BE = {
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
}, DE = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, ME = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, AE = { "--icon-size": "20px" }, NE = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
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
}, RE = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, LE = {
  "--link-default-color": "#000",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, FE = {
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
}, HE = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, YE = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, jE = {
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
}, WE = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, KE = {
  "--option-text-color": "#1D1B20",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, qE = { "--overlay-background-color": "rgba(0, 0, 0, 0.6)" }, XE = {
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
}, GE = {
  "--paper-background": "var(--color-surface-container-low)",
  "--paper-border-radius": "12px"
}, ZE = {
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
}, JE = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, QE = {
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
}, xE = {
  "--pull-refresh-background": "var(--color-body)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, _E = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, eI = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, nI = {
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
}, rI = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, oI = {
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
}, tI = {
  "--signature-background-color": "var(--color-surface-container-low)",
  "--signature-stroke-color": "#1D1B20",
  "--signature-height": "200px",
  "--signature-border-radius": "12px"
}, aI = {
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
}, iI = {
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
}, lI = {
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
}, sI = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, uI = {
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
}, dI = {
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
}, cI = {
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
}, fI = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, vI = {
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
}, pI = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, mI = {
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
}, hI = {
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
}, gI = {
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
}, bI = { "--watermark-content-color": "#808080" }, yI = Object.defineProperty, wf = Object.getOwnPropertySymbols, wI = Object.prototype.hasOwnProperty, kI = Object.prototype.propertyIsEnumerable, kf = (e, n, r) => n in e ? yI(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, we = (e, n) => {
  for (var r in n || (n = {})) wI.call(n, r) && kf(e, r, n[r]);
  if (wf)
    for (var r of wf(n)) kI.call(n, r) && kf(e, r, n[r]);
  return e;
}, $I = we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we({
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
}, gE), sE), ME), YE), WE), jE), EE), hE), LE), yE), GE), dE), IE), wE), _E), bE), kE), hI), pI), fI), vI), CE), nI), pE), mE), lI), lE), zE), xE), JE), ZE), BE), fE), oI), KE), iI), gI), mI), PE), cI), eI), cE), vE), SE), OE), TE), DE), AE), NE), VE), RE), FE), UE), HE), qE), XE), QE), rI), aI), sI), uI), dI), bI), uE), $E), tI);
function CI(e, n = {}) {
  const { rootFontSize: r = 16, unitPrecision: o = 6 } = n;
  return Ru(e, (t) => `${Number((t / r).toFixed(o))}rem`);
}
function SI(e, n = {}) {
  const { viewportWidth: r = 375, viewportUnit: o = "vmin", unitPrecision: t = 6 } = n;
  return Ru(e, (a) => `${Number((a / r * 100).toFixed(t))}${o}`);
}
var OI = {
  dark: W5,
  md3Light: $I,
  md3Dark: iE,
  toViewport: SI,
  toRem: CI,
  convert: Ru
}, qD = null, Gs = OI, qn = [
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
], In = [
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
], $f = [
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
], Vg = {
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
  "onUpdate:modelValue": R(),
  onChange: R()
}, Rg = (e, n) => e === "24hr" || n === "am", Lu = (e, n, r) => {
  const o = qn.findIndex((a) => H(a) === H(r)), t = Rg(e, n) ? r : In[o];
  return {
    hourStr: t,
    hourNum: H(t)
  };
}, Mn = (e) => {
  const [n, r, o] = e.split(":");
  return {
    hour: H(n),
    minute: H(r),
    second: H(o)
  };
}, Lg = (e) => {
  var n, r;
  const { time: o, format: t, ampm: a, hour: i, max: l, min: s, disableHour: u } = e, { hourStr: d, hourNum: c } = Lu(t, a, i);
  let f = !1, v = !1;
  if (u.includes(d)) return !0;
  if (l && !s) {
    const { hour: m, minute: h } = Mn(l);
    f = m === c && o > h;
  }
  if (!l && s) {
    const { hour: m, minute: h } = Mn(s);
    f = m === c && o < h;
  }
  if (l && s) {
    const { hour: m, minute: h } = Mn(l), { hour: w, minute: $ } = Mn(s);
    f = w === c && o < $ || m === c && o > h;
  }
  return (n = e.allowedTime) != null && n.minutes && (v = (r = e.allowedTime) == null ? void 0 : r.minutes(o)), f || v;
}, Fg = (e) => {
  var n, r;
  const { time: o, format: t, ampm: a, hour: i, minute: l, max: s, min: u, disableHour: d } = e, { hourStr: c, hourNum: f } = Lu(t, a, i);
  let v = !1, m = !1;
  if (d.includes(c)) return !0;
  if (s && !u) {
    const { hour: h, minute: w, second: $ } = Mn(s);
    v = h === f && w < l || w === l && o > $;
  }
  if (!s && u) {
    const { hour: h, minute: w, second: $ } = Mn(u);
    v = h === f && w > l || w === l && o > $;
  }
  if (s && u) {
    const { hour: h, minute: w, second: $ } = Mn(s), { hour: C, minute: b, second: P } = Mn(u);
    v = h === f && w < l || C === f && b > l || h === f && w === l && o > $ || C === f && b === l && o < P;
  }
  return (n = e.allowedTime) != null && n.seconds && (m = (r = e.allowedTime) == null ? void 0 : r.seconds(o)), v || m;
}, { n: PI, classes: zI } = ne("time-picker");
function TI(e, n) {
  return g(), S("div", { class: p(e.n("clock")) }, [
    V("div", {
      class: p(e.n("clock-hand")),
      style: q(e.handStyle)
    }, null, 6),
    (g(!0), S(De, null, Ke(e.timeScales, (r, o) => (g(), S("div", {
      key: r,
      class: p(e.classes(e.n("clock-item"), [e.isActive(o, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
      style: q(e.getStyle(o, r, !1))
    }, ue(r), 7))), 128)),
    e.format === "24hr" && e.type === "hour" ? (g(), S("div", {
      key: 0,
      ref: "inner",
      class: p(e.n("clock-inner"))
    }, [(g(!0), S(De, null, Ke(e.hours24, (r, o) => (g(), S("div", {
      key: r,
      class: p(e.classes(e.n("clock-item"), [e.isActive(o, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
      style: q(e.getStyle(o, r, !0))
    }, ue(r), 7))), 128))], 2)) : K("v-if", !0)
  ], 2);
}
var Ug = ee({
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
    const r = y(null), o = y([]), t = y([]), a = E(() => ({
      transform: `rotate(${H(e.rad)}deg)`,
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: u(),
      borderColor: u()
    })), i = E(() => {
      if (e.rad === void 0) return;
      const h = e.rad / 30;
      return h >= 0 ? h : h + 12;
    }), l = E(() => e.type === "hour" ? qn : $f), s = (h, w) => {
      h = h ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const $ = e.type === "minute" ? Lg : Fg, C = {
        time: H(h),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: H(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: o.value
      };
      return w && e.type === "minute" && Reflect.deleteProperty(C, "minute"), $(C);
    }, u = () => {
      if (i.value === void 0) return e.color;
      const h = e.isInner ? In[i.value] : l.value[i.value];
      return l.value === $f ? s() ? "var(--time-picker-clock-item-disable-background)" : e.color : c(h) ? "var(--time-picker-clock-item-disable-background)" : e.color;
    }, d = (h, w) => w ? i.value === h && e.isInner : i.value === h && (!e.isInner || e.type !== "hour"), c = (h) => {
      if (e.type === "hour") {
        if (Rg(e.format, e.ampm)) return o.value.includes(h);
        const w = qn.findIndex(($) => $ === h);
        return t.value.includes(w);
      }
      return s(h, !0);
    }, f = (h, w, $) => {
      const C = 2 * Math.PI / 12 * h - Math.PI / 2, b = 50 * (1 + Math.cos(C)), P = 50 * (1 + Math.sin(C)), O = () => d(h, $) ? c(w) ? {
        backgroundColor: "var(--time-picker-clock-item-disable-background)",
        color: "var(--time-picker-clock-item-disable-color)"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, { backgroundColor: I, color: Y } = O();
      return {
        left: `${b}%`,
        top: `${P}%`,
        backgroundColor: I,
        color: Y
      };
    }, v = () => {
      const { width: h, height: w } = on(r.value);
      return {
        width: h,
        height: w
      };
    }, m = () => {
      if (i.value !== void 0)
        return Jr((e.ampm === "am" ? qn : In)[i.value], 2, "0");
    };
    return pe([i, () => e.isInner], ([h, w], [$, C]) => {
      if (h === $ && w === C || e.type !== "hour" || i.value === void 0) return;
      const b = w ? In[i.value] : m(), P = e.useSeconds ? `:${e.time.second}` : "", O = `${b}:${e.time.minute}${P}`;
      e.preventNextUpdate || n("update", O), n("change-prevent-update");
    }), pe(() => e.rad, (h, w) => {
      if (e.type === "hour" || h === void 0 || w === void 0) return;
      const $ = h / 6 >= 0 ? h / 6 : h / 6 + 60;
      if ($ === (w / 6 >= 0 ? w / 6 : w / 6 + 60)) return;
      let C;
      const { hourStr: b } = Lu(e.format, e.ampm, e.time.hour);
      if (e.type === "minute" && (C = `${b}:${le().minute($).format("mm")}${e.useSeconds ? `:${e.time.second}` : ""}`), e.type === "second") {
        const P = le().second($).format("ss"), O = e.useSeconds ? `:${P}` : "";
        C = `${b}:${e.time.minute}${O}`;
      }
      n("update", C);
    }), pe([
      () => e.max,
      () => e.min,
      () => e.allowedTime
    ], ([h, w, $]) => {
      if (o.value = [], h && !w) {
        const { hour: C } = Mn(h), b = qn.filter((O) => H(O) > C), P = In.filter((O) => H(O) > C);
        o.value = [...b, ...P];
      }
      if (!h && w) {
        const { hour: C } = Mn(w), b = qn.filter((O) => H(O) < C), P = In.filter((O) => H(O) < C);
        o.value = [...b, ...P];
      }
      if (h && w) {
        const { hour: C } = Mn(h), { hour: b } = Mn(w), P = qn.filter((I) => H(I) < b || H(I) > C), O = In.filter((I) => H(I) < b || H(I) > C);
        o.value = [...P, ...O];
      }
      if ($?.hours) {
        const { hours: C } = $, b = qn.filter((O) => !C(H(O))), P = In.filter((O) => !C(H(O)));
        o.value = [.../* @__PURE__ */ new Set([
          ...o.value,
          ...b,
          ...P
        ])];
      }
      t.value = o.value.map((C) => In.findIndex((b) => C === b)).filter((C) => C >= 0);
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: PI,
      classes: zI,
      hours24: In,
      timeScales: l,
      inner: r,
      handStyle: a,
      disableHour: o,
      isActive: d,
      isDisable: c,
      getSize: v,
      getStyle: f,
      activeItemIndex: i
    };
  }
});
Ug.render = TI;
var EI = Ug, { name: II, n: BI, classes: DI } = ne("time-picker");
function MI(e, n) {
  var r;
  const o = x("clock");
  return g(), S("div", {
    ref: "picker",
    class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
  }, [
    V("div", {
      class: p(e.n("title")),
      style: q({ background: e.titleColor || e.color })
    }, [V("div", { class: p(e.n("title-hint")) }, ue((r = e.hint) != null ? r : (e.pt ? e.pt : e.t)("timePickerHint")), 3), V("div", { class: p(e.n("title-time-container")) }, [V("div", { class: p(e.n("title-time")) }, [
      V("div", {
        class: p(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
        onClick: n[0] || (n[0] = (t) => e.checkPanel("hour"))
      }, ue(e.time.hour), 3),
      V("span", { class: p(e.n("title-splitter")) }, ":", 2),
      V("div", {
        class: p(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
        onClick: n[1] || (n[1] = (t) => e.checkPanel("minute"))
      }, ue(e.time.minute), 3),
      e.useSeconds ? (g(), S("span", {
        key: 0,
        class: p(e.n("title-splitter"))
      }, ":", 2)) : K("v-if", !0),
      e.useSeconds ? (g(), S("div", {
        key: 1,
        class: p(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
        onClick: n[2] || (n[2] = (t) => e.checkPanel("second"))
      }, ue(e.time.second), 3)) : K("v-if", !0)
    ], 2), e.format === "ampm" ? (g(), S("div", {
      key: 0,
      class: p(e.n("title-ampm"))
    }, [V("div", {
      class: p(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
      onClick: n[3] || (n[3] = (t) => e.checkAmpm("am"))
    }, " AM ", 2), V("div", {
      class: p(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
      onClick: n[4] || (n[4] = (t) => e.checkAmpm("pm"))
    }, " PM ", 2)], 2)) : K("v-if", !0)], 2)], 6),
    V("div", { class: p(e.n("body")) }, [V("div", {
      ref: "container",
      class: p(e.n("clock-container")),
      onTouchstart: n[5] || (n[5] = (...t) => e.moveHand && e.moveHand(...t)),
      onTouchmove: n[6] || (n[6] = (...t) => e.moveHand && e.moveHand(...t)),
      onTouchend: n[7] || (n[7] = (...t) => e.end && e.end(...t))
    }, [X(en, { name: `${e.n()}-panel-fade` }, {
      default: ve(() => [(g(), ke(o, {
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
    e.$slots.actions ? (g(), S("div", {
      key: 0,
      class: p(e.n("actions"))
    }, [L(e.$slots, "actions")], 2)) : K("v-if", !0)
  ], 2);
}
var Hg = ee({
  name: II,
  components: { Clock: EI },
  props: Vg,
  setup(e) {
    const n = y(null), r = y(null), o = y(null), t = y(!1), a = y(!1), i = y(!1), l = y(!1), s = y(!1), u = y(!1), d = y(!1), c = y(0), f = y(0), v = y(), m = y("hour"), h = y("am"), w = y({
      hour: "00",
      minute: "00",
      second: "00"
    }), $ = nn({
      x: 0,
      y: 0
    }), C = nn({
      x: [],
      y: []
    }), b = E(() => m.value === "hour" ? v.value : m.value === "minute" ? c.value : f.value), { t: P } = ar();
    pe(() => e.modelValue, (W) => {
      if (W === void 0 || W === "") {
        O();
        return;
      }
      const { hour: Z, minute: se, second: he } = Mn(W), j = le().hour(Z).format("hh"), re = le().hour(Z).format("HH"), Ce = le().minute(se).format("mm"), Re = le().second(he).format("ss");
      v.value = (j === "12" ? 0 : H(j)) * 30, c.value = H(Ce) * 6, f.value = H(Re) * 6, w.value = D(W), e.format !== "24hr" && (h.value = Jr(`${Z}`, 2, "0") === re && In.includes(re) ? "pm" : "am"), t.value = e.format === "24hr" && In.includes(re);
    }, { immediate: !0 });
    function O() {
      v.value = void 0, c.value = 0, f.value = 0, w.value = {
        hour: "00",
        minute: "00",
        second: "00"
      }, h.value = "am";
    }
    function I(W) {
      k(e["onUpdate:modelValue"], W), k(e.onChange, W);
    }
    function Y(W) {
      return W * 57.29577951308232;
    }
    function M(W) {
      l.value = !1, d.value = !1, m.value = W;
    }
    function A(W) {
      const { disableHour: Z } = o.value, se = qn.findIndex((j) => H(j) === H(w.value.hour)), he = W === "am" ? qn : In;
      return [...he.slice(se), ...he.slice(0, se)].find((j, re) => (a.value = re !== 0, !Z.includes(j)));
    }
    function B(W) {
      if (e.readonly) return;
      h.value = W;
      const Z = A(W);
      if (!Z) return;
      const se = e.useSeconds ? `:${w.value.second}` : "";
      I(`${Jr(Z, 2, "0")}:${w.value.minute}${se}`);
    }
    function T(W, Z) {
      const se = W >= C.x[0] && W <= C.x[1], he = Z >= C.y[0] && Z <= C.y[1];
      return se && he;
    }
    function D(W) {
      const Z = e.format === "24hr" ? "HH" : "hh", { hour: se, minute: he, second: j } = Mn(W);
      return {
        hour: le().hour(se).format(Z),
        minute: le().minute(he).format("mm"),
        second: le().second(j).format("ss")
      };
    }
    function U(W) {
      const Z = W / 30;
      return Z >= 0 ? Z : Z + 12;
    }
    function F() {
      const { width: W, height: Z } = o.value.getSize();
      return {
        rangeXMin: $.x - W / 2 - 8,
        rangeXMax: $.x + W / 2 + 8,
        rangeYMin: $.y - Z / 2 - 8,
        rangeYMax: $.y + Z / 2 + 8
      };
    }
    function z(W, Z, se) {
      const { disableHour: he } = o.value;
      i.value = T(W, Z);
      const j = Math.round(se / 30) * 30 + 90, re = U(j), Ce = t.value ? qn[re] : In[re];
      if (he.includes(Ce) || (t.value = e.format === "24hr" ? T(W, Z) : !1), t.value !== i.value) return;
      const Re = t.value || h.value === "pm" ? In[re] : qn[re];
      u.value = he.includes(Re), !u.value && (v.value = j, l.value = !0);
    }
    function N(W) {
      const { disableHour: Z } = o.value, se = Math.round(W / 6) * 6 + 90;
      d.value = Lg({
        time: se / 6 >= 0 ? se / 6 : se / 6 + 60,
        format: e.format,
        ampm: h.value,
        hour: w.value.hour,
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      }), !d.value && (c.value = se, s.value = !0);
    }
    function ie(W) {
      const { disableHour: Z } = o.value, se = Math.round(W / 6) * 6 + 90;
      Fg({
        time: se / 6 >= 0 ? se / 6 : se / 6 + 60,
        format: e.format,
        ampm: h.value,
        hour: w.value.hour,
        minute: H(w.value.minute),
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      }) || (f.value = se);
    }
    function J() {
      const { left: W, top: Z, width: se, height: he } = on(n.value);
      if ($.x = W + se / 2, $.y = Z + he / 2, m.value === "hour" && e.format === "24hr") {
        const { rangeXMin: j, rangeXMax: re, rangeYMin: Ce, rangeYMax: Re } = F();
        C.x = [j, re], C.y = [Ce, Re];
      }
    }
    function oe(W) {
      if (Ae(W), e.readonly) return;
      J();
      const { clientX: Z, clientY: se } = W.touches[0], he = Z - $.x, j = se - $.y, re = Math.round(Y(Math.atan2(j, he)));
      m.value === "hour" ? z(Z, se, re) : m.value === "minute" ? N(re) : ie(re);
    }
    function ze() {
      if (!e.readonly) {
        if (m.value === "hour" && l.value) {
          m.value = "minute";
          return;
        }
        m.value === "minute" && e.useSeconds && s.value && (m.value = "second");
      }
    }
    function te() {
      a.value = !1;
    }
    return {
      getRad: b,
      time: w,
      container: n,
      inner: o,
      picker: r,
      isInner: t,
      type: m,
      ampm: h,
      isPreventNextUpdate: a,
      n: BI,
      classes: DI,
      t: an,
      pt: P,
      moveHand: oe,
      checkPanel: M,
      checkAmpm: B,
      end: ze,
      update: I,
      changePreventUpdate: te,
      formatElevation: vn
    };
  }
});
Hg.render = MI;
var tl = Hg;
ae(tl);
de(tl, Vg);
var XD = tl, Zs = tl, Yg = {
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
  onClickAction: R(),
  onBeforeFilter: R(),
  onBeforeRead: R(),
  onAfterRead: R(),
  onBeforeRemove: R(),
  onRemove: R(),
  onOversize: R(),
  onPreview: R(),
  "onUpdate:modelValue": R()
}, Dt = (e, n, r) => new Promise((o, t) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: AI, n: NI, classes: VI } = ne("uploader"), RI = 0, LI = ["onClick"], FI = ["onClick"], UI = ["src", "alt"], HI = ["tabindex"], YI = [
  "multiple",
  "accept",
  "capture",
  "disabled"
], jI = ["src"];
function WI(e, n) {
  const r = x("var-icon"), o = x("var-hover-overlay"), t = x("var-form-details"), a = x("var-popup"), i = We("ripple"), l = We("hover");
  return g(), S("div", { class: p(e.classes(e.n(), e.n("$--box"))) }, [
    V("div", { class: p(e.n("file-list")) }, [(g(!0), S(De, null, Ke(e.files, (s) => Me((g(), S("div", {
      key: s.id,
      class: p(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
      onClick: (u) => e.preview(s)
    }, [
      V("div", { class: p(e.n("file-name")) }, ue(s.name || s.url), 3),
      e.removable ? L(e.$slots, "remove-button", {
        key: 0,
        remove: () => {
          e.handleRemove(s);
        }
      }, () => [V("div", {
        class: p(e.n("file-close")),
        onClick: Fn((u) => e.handleRemove(s), ["stop"])
      }, [X(r, {
        class: p(e.n("file-close-icon")),
        "var-uploader-cover": "",
        name: "delete"
      }, null, 8, ["class"])], 10, FI)]) : K("v-if", !0),
      s.cover ? (g(), S("img", {
        key: 1,
        role: "img",
        class: p(e.n("file-cover")),
        style: q({ objectFit: s.fit }),
        src: s.cover,
        alt: s.name
      }, null, 14, UI)) : K("v-if", !0),
      V("div", { class: p(e.n("file-indicator")) }, [V("div", {
        class: p(e.classes(e.n("progress"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")])),
        style: q({ width: s.state === "success" || s.state === "error" ? "100%" : `${s.progress}%` })
      }, null, 6)], 2)
    ], 10, LI)), [[i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple }]])), 128)), !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Me((g(), S("div", {
      key: 0,
      ref: "actionRef",
      class: p(e.classes(e.n("--outline-none"), [!e.$slots.default, `${e.n("action")} ${e.formatElevation(e.elevation, 2)}`], [e.disabled || e.formDisabled, e.n("--disabled")])),
      tabindex: e.disabled || e.formDisabled ? void 0 : "0",
      onClick: n[2] || (n[2] = (...s) => e.handleActionClick && e.handleActionClick(...s)),
      onFocus: n[3] || (n[3] = (s) => e.isFocusing = !0),
      onBlur: n[4] || (n[4] = (s) => e.isFocusing = !1)
    }, [V("input", {
      ref: "input",
      type: "file",
      class: p(e.n("action-input")),
      multiple: e.multiple,
      accept: e.accept,
      capture: e.capture,
      disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
      onChange: n[0] || (n[0] = (...s) => e.handleChange && e.handleChange(...s)),
      onClick: n[1] || (n[1] = Fn(() => {
      }, ["stop"]))
    }, null, 42, YI), L(e.$slots, "default", {}, () => [X(r, {
      class: p(e.n("action-icon")),
      "var-uploader-cover": "",
      name: "plus"
    }, null, 8, ["class"]), X(o, {
      hovering: e.hovering && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly,
      focusing: e.isFocusing && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly
    }, null, 8, ["hovering", "focusing"])])], 42, HI)), [[i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || !!e.$slots.default }], [
      l,
      e.handleHovering,
      "desktop"
    ]]) : K("v-if", !0)], 2),
    X(t, {
      "error-message": e.errorMessage,
      "extra-message": e.maxlengthText
    }, Xr({ _: 2 }, [e.$slots["extra-message"] ? {
      name: "extra-message",
      fn: ve(() => [L(e.$slots, "extra-message")]),
      key: "0"
    } : void 0]), 1032, ["error-message", "extra-message"]),
    X(a, {
      show: e.showPreview,
      "onUpdate:show": n[5] || (n[5] = (s) => e.showPreview = s),
      class: p(e.n("preview")),
      "var-uploader-cover": "",
      position: "center",
      onClosed: n[6] || (n[6] = (s) => e.currentPreview = null)
    }, {
      default: ve(() => {
        var s, u;
        return [e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (g(), S("video", {
          key: 0,
          class: p(e.n("preview-video")),
          playsinline: "true",
          "webkit-playsinline": "true",
          "x5-playsinline": "true",
          "x5-video-player-type": "h5",
          "x5-video-player-fullscreen": "false",
          controls: "",
          src: (u = e.currentPreview) == null ? void 0 : u.url
        }, null, 10, jI)) : K("v-if", !0)];
      }),
      _: 1
    }, 8, ["show", "class"])
  ], 2);
}
var jg = ee({
  name: AI,
  directives: {
    Ripple: sn,
    Hover: An
  },
  components: {
    VarIcon: Je,
    VarPopup: Mr,
    VarFormDetails: Bn,
    VarHoverOverlay: Hn
  },
  props: Yg,
  setup(e) {
    const n = y(!1), r = y(null), o = y(null), t = y(!1), a = y(null), i = E(() => {
      const { maxlength: te, modelValue: { length: W } } = e;
      return zn(te) ? `${W} / ${te}` : "";
    }), { form: l, bindForm: s } = Wn(), { errorMessage: u, validateWithTrigger: d, validate: c, resetValidation: f } = jn(), { hovering: v, handleHovering: m } = rr(), h = E(() => {
      const { modelValue: te, hideList: W } = e;
      return W ? [] : te;
    });
    let w = !1;
    const $ = {
      getSuccess: U,
      getError: F,
      getLoading: z
    };
    k(s, {
      validate: oe,
      resetValidation: f,
      reset: ze
    }), Ye(() => window, "keydown", C), Ye(() => window, "keyup", b), pe(() => e.modelValue, () => {
      !w && J("onChange"), w = !1;
    }, { deep: !0 });
    function C(te) {
      n.value && ((te.key === " " || te.key === "Enter") && te.preventDefault(), te.key === "Enter" && r.value.click());
    }
    function b(te) {
      !n.value || te.key !== " " || (te.preventDefault(), r.value.click());
    }
    function P(te) {
      const { disabled: W, previewed: Z, preventDefaultPreview: se, onPreview: he } = e;
      if (l?.disabled.value || W || !Z || (k(he, nn(te)), se)) return;
      const { url: j } = te;
      if (Vd(j)) {
        Zo(j);
        return;
      }
      Rd(j) && (a.value = te, t.value = !0);
    }
    function O(te) {
      return {
        id: RI++,
        url: "",
        cover: "",
        name: te.name,
        file: te,
        progress: 0
      };
    }
    function I(te) {
      const { files: W } = te.target;
      return Array.from(W);
    }
    function Y(te) {
      return Dt(this, null, function* () {
        const W = te.file;
        if (e.resolveType === "default" && W.type.startsWith("image") || e.resolveType === "data-url") {
          const Z = yield Jf(W);
          te.cover = Z, te.url = Z;
        }
        return te;
      });
    }
    function M(te) {
      return te.map(Y);
    }
    function A(te) {
      const { onBeforeRead: W } = e;
      return te.map((Z) => new Promise((se) => {
        W || se({
          valid: !0,
          varFile: Z
        });
        const he = hr(k(W, nn(Z)));
        Promise.all(he).then((j) => {
          se({
            valid: j.every(Boolean),
            varFile: Z
          });
        });
      }));
    }
    function B(te) {
      return Dt(this, null, function* () {
        const { maxsize: W, maxlength: Z, modelValue: se, onOversize: he, onAfterRead: j, onBeforeFilter: re, readonly: Ce, disabled: Re } = e;
        if (l?.disabled.value || l?.readonly.value || Re || Ce) return;
        const qe = (Q) => Q.filter((fe) => fe.file.size > H(W) ? (k(he, nn(fe)), !1) : !0), Ne = (Q) => {
          const fe = Math.min(Q.length, H(Z) - se.length);
          return Q.slice(0, fe);
        }, dn = (Q) => Dt(null, null, function* () {
          if (!re) return Q;
          const fe = hr(re);
          for (const Se of fe) Q = yield Se(Q);
          return Q;
        });
        let xe = I(te).map(O);
        xe = yield dn(xe), xe = W != null ? qe(xe) : xe, xe = Z != null ? Ne(xe) : xe;
        const me = yield Promise.all(M(xe)), Fe = (yield Promise.all(A(me))).filter(({ valid: Q }) => Q).map(({ varFile: Q }) => Q);
        k(e["onUpdate:modelValue"], [...se, ...Fe]), te.target.value = "", Fe.forEach((Q) => k(j, nn(Q)));
      });
    }
    function T(te) {
      return Dt(this, null, function* () {
        const { disabled: W, readonly: Z, modelValue: se, onBeforeRemove: he, onRemove: j } = e;
        if (l?.disabled.value || l?.readonly.value || W || Z) return;
        if (he) {
          const Ce = hr(k(he, nn(te)));
          if ((yield Promise.all(Ce)).some((Re) => !Re)) return;
        }
        const re = se.filter((Ce) => Ce !== te);
        k(j, nn(te)), J("onRemove"), k(e["onUpdate:modelValue"], re);
      });
    }
    function D(te) {
      if (!(l?.disabled.value || e.disabled)) {
        if (e.onClickAction) {
          k(e.onClickAction, N, te);
          return;
        }
        N();
      }
    }
    function U() {
      return e.modelValue.filter((te) => te.state === "success");
    }
    function F() {
      return e.modelValue.filter((te) => te.state === "error");
    }
    function z() {
      return e.modelValue.filter((te) => te.state === "loading");
    }
    function N() {
      o.value.click();
    }
    function ie() {
      a.value = null, t.value = !1, Zo.close();
    }
    function J(te) {
      Ve(() => {
        const { validateTrigger: W, rules: Z, modelValue: se } = e;
        d(W, te, Z, se, $);
      });
    }
    function oe() {
      return c(e.rules, e.modelValue, $);
    }
    function ze() {
      w = !0, k(e["onUpdate:modelValue"], []), f();
    }
    return {
      input: o,
      actionRef: r,
      files: h,
      showPreview: t,
      currentPreview: a,
      errorMessage: u,
      maxlengthText: i,
      hovering: v,
      isFocusing: n,
      formDisabled: l?.disabled,
      formReadonly: l?.readonly,
      n: NI,
      classes: VI,
      formatElevation: vn,
      toNumber: H,
      handleHovering: m,
      isHTMLSupportVideo: Rd,
      isHTMLSupportImage: Vd,
      preview: P,
      handleChange: B,
      handleRemove: T,
      getSuccess: U,
      getError: F,
      getLoading: z,
      validate: oe,
      resetValidation: f,
      reset: ze,
      chooseFile: N,
      closePreview: ie,
      handleActionClick: D,
      toSizeUnit: Te
    };
  }
});
jg.render = WI;
var al = jg;
ae(al);
de(al, Yg);
var GD = al, Js = al, Wg = {
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
}, KI = Object.defineProperty, qI = Object.defineProperties, XI = Object.getOwnPropertyDescriptors, Cf = Object.getOwnPropertySymbols, GI = Object.prototype.hasOwnProperty, ZI = Object.prototype.propertyIsEnumerable, Sf = (e, n, r) => n in e ? KI(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, JI = (e, n) => {
  for (var r in n || (n = {})) GI.call(n, r) && Sf(e, r, n[r]);
  if (Cf)
    for (var r of Cf(n)) ZI.call(n, r) && Sf(e, r, n[r]);
  return e;
}, QI = (e, n) => qI(e, XI(n)), xI = (e, n, r) => new Promise((o, t) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: _I, n: eB, classes: nB } = ne("watermark"), rB = { ref: "svgRef" }, oB = [
  "viewBox",
  "width",
  "height"
], tB = ["width", "height"], aB = [
  "href",
  "xlink:href",
  "x",
  "y",
  "width",
  "height"
];
function iB(e, n) {
  return g(), S("div", { class: p(e.n()) }, [L(e.$slots, "default"), (g(), ke(cr, {
    to: "body",
    disabled: !e.fullscreen
  }, [V("div", {
    ref: "containerRef",
    class: p(e.classes(e.n("container"), [e.fullscreen, e.n("--fullscreen")])),
    style: q({
      backgroundImage: `url(${e.watermarkUrl})`,
      zIndex: e.zIndex
    })
  }, [Me(V("div", rB, [(g(), S("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: `0 0 ${e.width + e.gapX} ${e.height + e.gapY}`,
    width: `${e.width + e.gapX}`,
    height: `${e.height + e.gapY}`,
    style: q({
      padding: `0 ${e.gapX}px ${e.gapY}px 0`,
      opacity: e.opacity
    })
  }, [e.showContent() ? (g(), S("foreignObject", {
    key: 0,
    x: "0",
    y: "0",
    width: e.width,
    height: e.height
  }, [V("div", {
    xmlns: "http://www.w3.org/1999/xhtml",
    style: q({
      transform: `translate(${e.offsetX}px, ${e.offsetY}px) rotate(${e.rotate}deg)`,
      transformOrigin: "center"
    })
  }, [L(e.$slots, "content", {}, () => [V("span", { style: q(QI(JI({}, e.font), {
    fontSize: `${e.font.fontSize}px`,
    color: e.textColor
  })) }, ue(e.content), 5)])], 4)], 8, tB)) : K("v-if", !0), !e.$slots.content && e.image ? (g(), S("image", {
    key: 1,
    href: e.imageUrl,
    "xlink:href": e.imageUrl,
    x: e.offsetX,
    y: e.offsetY,
    width: e.width,
    height: e.height,
    style: q({
      transform: `rotate(${e.rotate}deg)`,
      transformOrigin: "center"
    })
  }, null, 12, aB)) : K("v-if", !0)], 12, oB))], 512), [[Jn, !1]])], 6)], 8, ["disabled"]))], 2);
}
var Kg = ee({
  name: _I,
  props: Wg,
  setup(e, { slots: n }) {
    const r = y(""), o = y(""), t = y(""), a = y(null), i = y(null);
    pe(() => [
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
    ], c, { deep: !0 }), br(c), _o(d);
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
      const v = new Blob([f], { type: "image/svg+xml" });
      return URL.createObjectURL(v);
    }
    function d() {
      r.value && URL.revokeObjectURL(r.value);
    }
    function c() {
      return xI(this, null, function* () {
        t.value = Qn(i.value).color, e.image && (o.value = yield s()), yield Ve(), d(), r.value = u(a.value.innerHTML);
      });
    }
    return {
      svgRef: a,
      containerRef: i,
      watermarkUrl: r,
      imageUrl: o,
      textColor: t,
      n: eB,
      classes: nB,
      showContent: l,
      resize: c
    };
  }
});
Kg.render = iB;
var il = Kg;
ae(il);
de(il, Wg);
var ZD = il, Qs = il, lB = "3.15.2";
function sB(e) {
  Ol.install && e.use(Ol), Pl.install && e.use(Pl), zl.install && e.use(zl), Il.install && e.use(Il), Ml.install && e.use(Ml), Al.install && e.use(Al), Nl.install && e.use(Nl), ra.install && e.use(ra), Vl.install && e.use(Vl), Rl.install && e.use(Rl), Ll.install && e.use(Ll), Fl.install && e.use(Fl), Dn.install && e.use(Dn), Ul.install && e.use(Ul), Hl.install && e.use(Hl), Yl.install && e.use(Yl), io.install && e.use(io), jl.install && e.use(jl), oa.install && e.use(oa), Kl.install && e.use(Kl), ql.install && e.use(ql), Xl.install && e.use(Xl), Gl.install && e.use(Gl), Zl.install && e.use(Zl), Ln.install && e.use(Ln), Jl.install && e.use(Jl), es.install && e.use(es), as.install && e.use(as), ls.install && e.use(ls), ss.install && e.use(ss), us.install && e.use(us), ua.install && e.use(ua), ds.install && e.use(ds), cs.install && e.use(cs), Fo.install && e.use(Fo), fs.install && e.use(fs), vs.install && e.use(vs), Bn.install && e.use(Bn), ps.install && e.use(ps), An.install && e.use(An), Hn.install && e.use(Hn), Je.install && e.use(Je), ms.install && e.use(ms), Zo.install && e.use(Zo), hs.install && e.use(hs), gs.install && e.use(gs), Uo.install && e.use(Uo), Ko.install && e.use(Ko), bs.install && e.use(bs), ys.install && e.use(ys), fo.install && e.use(fo), ws.install && e.use(ws), Cl.install && e.use(Cl), ks.install && e.use(ks), jo.install && e.use(jo), lo.install && e.use(lo), Wo.install && e.use(Wo), ca.install && e.use(ca), $s.install && e.use($s), Cs.install && e.use(Cs), Ss.install && e.use(Ss), Os.install && e.use(Os), Mr.install && e.use(Mr), Ps.install && e.use(Ps), zs.install && e.use(zs), fa.install && e.use(fa), Ts.install && e.use(Ts), Es.install && e.use(Es), Is.install && e.use(Is), sn.install && e.use(sn), Bs.install && e.use(Bs), Ds.install && e.use(Ds), Ms.install && e.use(Ms), As.install && e.use(As), Ns.install && e.use(Ns), Rs.install && e.use(Rs), Ls.install && e.use(Ls), Fs.install && e.use(Fs), Us.install && e.use(Us), po.install && e.use(po), Hs.install && e.use(Hs), Xo.install && e.use(Xo), Go.install && e.use(Go), Ys.install && e.use(Ys), js.install && e.use(js), Ws.install && e.use(Ws), Ks.install && e.use(Ks), qs.install && e.use(qs), Xs.install && e.use(Xs), Gs.install && e.use(Gs), Zs.install && e.use(Zs), da.install && e.use(da), Js.install && e.use(Js), Qs.install && e.use(Qs);
}
var JD = {
  version: lB,
  install: sB,
  ActionSheet: Ol,
  Alert: Pl,
  AppBar: zl,
  AutoComplete: Il,
  Avatar: Ml,
  AvatarGroup: Al,
  BackTop: Nl,
  Badge: ra,
  BottomNavigation: Vl,
  BottomNavigationItem: Rl,
  Breadcrumb: Ll,
  Breadcrumbs: Fl,
  Button: Dn,
  ButtonGroup: Ul,
  Card: Hl,
  Cell: Yl,
  Checkbox: io,
  CheckboxGroup: jl,
  Chip: oa,
  Code: Kl,
  Col: ql,
  Collapse: Xl,
  CollapseItem: Gl,
  CollapseTransition: Zl,
  Context: Ln,
  CountTo: Jl,
  Countdown: es,
  Counter: as,
  DatePicker: ls,
  Dialog: ss,
  Divider: us,
  Drag: ua,
  Ellipsis: ds,
  Fab: cs,
  FieldDecorator: Fo,
  FloatingPanel: fs,
  Form: vs,
  FormDetails: Bn,
  HighlighterProvider: ps,
  Hover: An,
  HoverOverlay: Hn,
  Icon: Je,
  Image: ms,
  ImagePreview: Zo,
  IndexAnchor: hs,
  IndexBar: gs,
  Input: Uo,
  Lazy: Ko,
  Link: bs,
  List: ys,
  Loading: fo,
  LoadingBar: ws,
  Locale: Cl,
  LocaleProvider: ks,
  Menu: jo,
  MenuOption: lo,
  MenuSelect: Wo,
  Option: ca,
  Overlay: $s,
  Pagination: Cs,
  Paper: Ss,
  Picker: Os,
  Popup: Mr,
  Progress: Ps,
  PullRefresh: zs,
  Radio: fa,
  RadioGroup: Ts,
  Rate: Es,
  Result: Is,
  Ripple: sn,
  Row: Bs,
  Select: Ds,
  Signature: Ms,
  Skeleton: As,
  Slider: Ns,
  Snackbar: Rs,
  Space: Ls,
  Step: Fs,
  Steps: Us,
  Sticky: po,
  StyleProvider: Hs,
  Swipe: Xo,
  SwipeItem: Go,
  Switch: Ys,
  Tab: js,
  TabItem: Ws,
  Table: Ks,
  Tabs: qs,
  TabsItems: Xs,
  Themes: Gs,
  TimePicker: Zs,
  Tooltip: da,
  Uploader: Js,
  Watermark: Qs
};
export {
  Ol as ActionSheet,
  Pl as Alert,
  zl as AppBar,
  Il as AutoComplete,
  Ml as Avatar,
  Al as AvatarGroup,
  Nl as BackTop,
  ra as Badge,
  Vl as BottomNavigation,
  Rl as BottomNavigationItem,
  Ll as Breadcrumb,
  Fl as Breadcrumbs,
  Dn as Button,
  Ul as ButtonGroup,
  Hl as Card,
  Yl as Cell,
  io as Checkbox,
  jl as CheckboxGroup,
  oa as Chip,
  Kl as Code,
  ql as Col,
  Xl as Collapse,
  Gl as CollapseItem,
  Zl as CollapseTransition,
  Ln as Context,
  Jl as CountTo,
  es as Countdown,
  as as Counter,
  ls as DatePicker,
  ss as Dialog,
  us as Divider,
  ua as Drag,
  ds as Ellipsis,
  cs as Fab,
  Fo as FieldDecorator,
  fs as FloatingPanel,
  vs as Form,
  Bn as FormDetails,
  ps as HighlighterProvider,
  An as Hover,
  Hn as HoverOverlay,
  Je as Icon,
  ms as Image,
  Zo as ImagePreview,
  hs as IndexAnchor,
  gs as IndexBar,
  Uo as Input,
  Ko as Lazy,
  bs as Link,
  ys as List,
  fo as Loading,
  ws as LoadingBar,
  Cl as Locale,
  ks as LocaleProvider,
  jo as Menu,
  lo as MenuOption,
  Wo as MenuSelect,
  ca as Option,
  $s as Overlay,
  Dl as PIXEL,
  Cs as Pagination,
  Ss as Paper,
  Os as Picker,
  Mr as Popup,
  Ps as Progress,
  zs as PullRefresh,
  fa as Radio,
  Ts as RadioGroup,
  Es as Rate,
  Is as Result,
  sn as Ripple,
  Bs as Row,
  fg as SNACKBAR_TYPE,
  Ds as Select,
  Ms as Signature,
  As as Skeleton,
  Ns as Slider,
  Rs as Snackbar,
  Ls as Space,
  Fs as Step,
  Us as Steps,
  po as Sticky,
  Hs as StyleProvider,
  Xo as Swipe,
  Go as SwipeItem,
  Ys as Switch,
  js as Tab,
  Ws as TabItem,
  Ks as Table,
  qs as Tabs,
  Xs as TabsItems,
  Gs as Themes,
  Zs as TimePicker,
  da as Tooltip,
  Js as Uploader,
  Qs as Watermark,
  gB as _ActionSheetComponent,
  bB as _AlertComponent,
  yB as _AppBarComponent,
  zB as _AutoCompleteComponent,
  EB as _AvatarComponent,
  IB as _AvatarGroupComponent,
  MB as _BackTopComponent,
  AB as _BadgeComponent,
  NB as _BottomNavigationComponent,
  VB as _BottomNavigationItemComponent,
  RB as _BreadcrumbComponent,
  LB as _BreadcrumbsComponent,
  DB as _ButtonComponent,
  FB as _ButtonGroupComponent,
  UB as _CardComponent,
  HB as _CellComponent,
  CB as _CheckboxComponent,
  YB as _CheckboxGroupComponent,
  jB as _ChipComponent,
  WB as _CodeComponent,
  KB as _ColComponent,
  qB as _CollapseComponent,
  XB as _CollapseItemComponent,
  GB as _CollapseTransitionComponent,
  cB as _ContextComponent,
  ZB as _CountToComponent,
  JB as _CountdownComponent,
  QB as _CounterComponent,
  _B as _DatePickerComponent,
  eD as _DialogComponent,
  nD as _DividerComponent,
  rD as _DragComponent,
  tD as _EllipsisComponent,
  aD as _FabComponent,
  kB as _FieldDecoratorComponent,
  iD as _FloatingPanelComponent,
  lD as _FormComponent,
  wB as _FormDetailsComponent,
  sD as _HighlighterProviderComponent,
  pB as _HoverComponent,
  mB as _HoverOverlayComponent,
  hB as _IconComponent,
  uD as _ImageComponent,
  fD as _ImagePreviewComponent,
  vD as _IndexAnchorComponent,
  pD as _IndexBarComponent,
  $B as _InputComponent,
  TB as _LazyComponent,
  mD as _LinkComponent,
  hD as _ListComponent,
  gD as _LoadingBarComponent,
  BB as _LoadingComponent,
  dB as _LocaleComponent,
  bD as _LocaleProviderComponent,
  OB as _MenuComponent,
  SB as _MenuOptionComponent,
  PB as _MenuSelectComponent,
  yD as _OptionComponent,
  wD as _OverlayComponent,
  kD as _PaginationComponent,
  $D as _PaperComponent,
  CD as _PickerComponent,
  fB as _PopupComponent,
  SD as _ProgressComponent,
  OD as _PullRefreshComponent,
  PD as _RadioComponent,
  zD as _RadioGroupComponent,
  TD as _RateComponent,
  ED as _ResultComponent,
  vB as _RippleComponent,
  ID as _RowComponent,
  BD as _SelectComponent,
  DD as _SignatureComponent,
  MD as _SkeletonComponent,
  AD as _SliderComponent,
  ND as _SnackbarComponent,
  VD as _SpaceComponent,
  RD as _StepComponent,
  LD as _StepsComponent,
  xB as _StickyComponent,
  FD as _StyleProviderComponent,
  dD as _SwipeComponent,
  cD as _SwipeItemComponent,
  UD as _SwitchComponent,
  HD as _TabComponent,
  YD as _TabItemComponent,
  jD as _TableComponent,
  WD as _TabsComponent,
  KD as _TabsItemsComponent,
  qD as _ThemesComponent,
  XD as _TimePickerComponent,
  oD as _TooltipComponent,
  GD as _UploaderComponent,
  ZD as _WatermarkComponent,
  Ev as actionSheetProps,
  du as add,
  Bv as alertProps,
  Mv as appBarProps,
  mp as avatarGroupProps,
  vp as avatarProps,
  kp as backTopProps,
  Cp as badgeProps,
  Tp as bottomNavigationItemProps,
  Op as bottomNavigationProps,
  Ip as breadcrumbProps,
  Mp as breadcrumbsProps,
  Np as buttonGroupProps,
  bp as buttonProps,
  Rp as cardProps,
  Fp as cellProps,
  Hp as checkboxGroupProps,
  Yv as checkboxProps,
  jp as chipProps,
  Kp as codeProps,
  Xp as colProps,
  em as collapseItemProps,
  Jp as collapseProps,
  rm as collapseTransitionProps,
  tm as countToProps,
  im as countdownProps,
  ym as counterProps,
  iv as currentMessage,
  Pm as datePickerProps,
  JD as default,
  mn as defaultLazyOptions,
  Nm as dialogProps,
  Rm as dividerProps,
  Fm as dragProps,
  jm as ellipsisProps,
  nv as enUS,
  rv as faIR,
  Km as fabProps,
  za as fieldDecoratorProps,
  Nv as formDetailsProps,
  Gm as formProps,
  Cv as hoverOverlayProps,
  ln as iconProps,
  sp as imageCache,
  nh as imagePreviewProps,
  Qm as imageProps,
  oh as indexAnchorProps,
  ih as indexBarProps,
  gu as inputProps,
  sB as install,
  sh as linkProps,
  dh as listProps,
  N6 as loadingBarProps,
  pr as loadingProps,
  Kv as menuOptionProps,
  bu as menuProps,
  ea as menuSelectProps,
  lv as merge,
  av as messages,
  Ch as optionProps,
  Ph as overlayProps,
  zh as paginationProps,
  Eh as paperProps,
  Bh as pickerProps,
  wo as popupProps,
  Mh as progressProps,
  Nh as pullRefreshProps,
  Uh as radioGroupProps,
  Rh as radioProps,
  Yh as rateProps,
  Wh as resultProps,
  xh as rowProps,
  eg as selectProps,
  og as signatureProps,
  ag as skeletonProps,
  lg as sliderProps,
  Nu as snackbarProps,
  mg as spaceProps,
  hg as stepProps,
  yg as stepsProps,
  Mo as stickyProps,
  kg as styleProviderProps,
  Iu as swipeProps,
  Cg as switchProps,
  an as t,
  Tg as tabItemProps,
  Og as tabProps,
  Ig as tableProps,
  Ag as tabsItemsProps,
  Dg as tabsProps,
  Vg as timePickerProps,
  Hm as tooltipProps,
  Yg as uploaderProps,
  cu as use,
  rr as useHoverOverlay,
  uu as useLocale,
  lB as version,
  Wg as watermarkProps,
  lu as zhCN,
  tv as zhHK,
  su as zhTW
};
