import { Comment as Kg, Fragment as Ae, Teleport as cr, Transition as nn, TransitionGroup as qg, computed as E, createApp as Xg, createBlock as ye, createCommentVNode as K, createElementBlock as S, createElementVNode as N, createSlots as Wr, createTextVNode as Be, createVNode as X, defineComponent as _, getCurrentInstance as Zr, guardReactiveProps as da, h as Zo, inject as Js, isRef as Gg, isVNode as Zg, mergeProps as We, nextTick as Fe, normalizeClass as p, normalizeProps as jr, normalizeStyle as q, onActivated as Nr, onBeforeMount as Jg, onBeforeUnmount as ca, onDeactivated as vo, onMounted as gr, onUnmounted as Jo, onUpdated as Qo, openBlock as g, provide as Qs, reactive as rn, ref as y, renderList as Ge, renderSlot as F, resolveComponent as Q, resolveDirective as qe, resolveDynamicComponent as po, shallowRef as Qg, toDisplayString as ie, unref as xs, vModelText as Sf, vShow as _n, watch as ve, withCtx as fe, withDirectives as Ne, withKeys as Lu, withModifiers as jn } from "vue";
var hl = Object.defineProperty, xg = Object.getOwnPropertyDescriptor, _g = Object.getOwnPropertyNames, eb = Object.prototype.hasOwnProperty, Of = (e, n) => {
  let r = {};
  for (var o in e) hl(r, o, {
    get: e[o],
    enumerable: !0
  });
  return n || hl(r, Symbol.toStringTag, { value: "Module" }), r;
}, Fu = (e, n, r, o) => {
  if (n && typeof n == "object" || typeof n == "function") for (var t = _g(n), a = 0, i = t.length, l; a < i; a++)
    l = t[a], !eb.call(e, l) && l !== r && hl(e, l, {
      get: ((s) => n[s]).bind(null, l),
      enumerable: !(o = xg(n, l)) || o.enumerable
    });
  return e;
}, nb = (e, n, r) => (Fu(e, n, "default"), r && Fu(r, n, "default"));
function He(e) {
  return Array.isArray(e);
}
function an(e) {
  return typeof e == "string";
}
function fn(e) {
  return typeof e == "function";
}
function eo(e, ...n) {
  return fn(e) ? e(...n) : e;
}
var rb = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
function ob(e) {
  return typeof e == "string" && rb.test(e);
}
function tb(e) {
  if (!ob(e)) throw TypeError("Invalid UUID");
  let n;
  return Uint8Array.of((n = parseInt(e.slice(0, 8), 16)) >>> 24, n >>> 16 & 255, n >>> 8 & 255, n & 255, (n = parseInt(e.slice(9, 13), 16)) >>> 8, n & 255, (n = parseInt(e.slice(14, 18), 16)) >>> 8, n & 255, (n = parseInt(e.slice(19, 23), 16)) >>> 8, n & 255, (n = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, n / 4294967296 & 255, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, n & 255);
}
var Cn = [];
for (let e = 0; e < 256; ++e) Cn.push((e + 256).toString(16).slice(1));
function fa(e, n = 0) {
  return (Cn[e[n + 0]] + Cn[e[n + 1]] + Cn[e[n + 2]] + Cn[e[n + 3]] + "-" + Cn[e[n + 4]] + Cn[e[n + 5]] + "-" + Cn[e[n + 6]] + Cn[e[n + 7]] + "-" + Cn[e[n + 8]] + Cn[e[n + 9]] + "-" + Cn[e[n + 10]] + Cn[e[n + 11]] + Cn[e[n + 12]] + Cn[e[n + 13]] + Cn[e[n + 14]] + Cn[e[n + 15]]).toLowerCase();
}
var al, ab = new Uint8Array(16);
function gl() {
  if (!al) {
    if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    al = crypto.getRandomValues.bind(crypto);
  }
  return al(ab);
}
var $o = {};
function ib(e, n, r) {
  let o;
  const t = e?._v6 ?? !1;
  if (e) {
    const a = Object.keys(e);
    a.length === 1 && a[0] === "_v6" && (e = void 0);
  }
  if (e) o = Uu(e.random ?? e.rng?.() ?? gl(), e.msecs, e.nsecs, e.clockseq, e.node, n, r);
  else {
    const a = Date.now(), i = gl();
    lb($o, a, i), o = Uu(i, $o.msecs, $o.nsecs, t ? void 0 : $o.clockseq, t ? void 0 : $o.node, n, r);
  }
  return n ?? fa(o);
}
function lb(e, n, r) {
  return e.msecs ??= -1 / 0, e.nsecs ??= 0, n === e.msecs ? (e.nsecs++, e.nsecs >= 1e4 && (e.node = void 0, e.nsecs = 0)) : n > e.msecs ? e.nsecs = 0 : n < e.msecs && (e.node = void 0), e.node || (e.node = r.slice(10, 16), e.node[0] |= 1, e.clockseq = (r[8] << 8 | r[9]) & 16383), e.msecs = n, e;
}
function Uu(e, n, r, o, t, a, i = 0) {
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
function sb(e) {
  const n = ub(typeof e == "string" ? tb(e) : e);
  return typeof e == "string" ? fa(n) : n;
}
function ub(e) {
  return Uint8Array.of((e[6] & 15) << 4 | e[7] >> 4 & 15, (e[7] & 15) << 4 | (e[4] & 240) >> 4, (e[4] & 15) << 4 | (e[5] & 240) >> 4, (e[5] & 15) << 4 | (e[0] & 240) >> 4, (e[0] & 15) << 4 | (e[1] & 240) >> 4, (e[1] & 15) << 4 | (e[2] & 240) >> 4, 96 | e[2] & 15, e[3], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]);
}
var db = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Hu = { randomUUID: db };
function cb(e, n, r) {
  e = e || {};
  const o = e.random ?? e.rng?.() ?? gl();
  if (o.length < 16) throw new Error("Random bytes length must be >= 16");
  if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, n) {
    if (r = r || 0, r < 0 || r + 16 > n.length) throw new RangeError(`UUID byte range ${r}:${r + 15} is out of buffer bounds`);
    for (let t = 0; t < 16; ++t) n[r + t] = o[t];
    return n;
  }
  return fa(o);
}
function Pf(e, n, r) {
  return Hu.randomUUID && !n && !e ? Hu.randomUUID() : cb(e, n, r);
}
function zf(e, n, r) {
  e ??= {}, r ??= 0;
  let o = ib({
    ...e,
    _v6: !0
  }, new Uint8Array(16));
  if (o = sb(o), n) {
    for (let t = 0; t < 16; t++) n[r + t] = o[t];
    return n;
  }
  return fa(o);
}
function Tf(e) {
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
function ft(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n];
    for (var o in r) e[o] = r[o];
  }
  return e;
}
var fb = {
  read: function(e) {
    return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(e) {
    return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
  }
};
function bl(e, n) {
  function r(t, a, i) {
    if (!(typeof document > "u")) {
      i = ft({}, n, i), typeof i.expires == "number" && (i.expires = new Date(Date.now() + i.expires * 864e5)), i.expires && (i.expires = i.expires.toUTCString()), t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
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
      r(t, "", ft({}, a, { expires: -1 }));
    },
    withAttributes: function(t) {
      return bl(this.converter, ft({}, this.attributes, t));
    },
    withConverter: function(t) {
      return bl(ft({}, this.converter, t), this.attributes);
    }
  }, {
    attributes: { value: Object.freeze(n) },
    converter: { value: Object.freeze(e) }
  });
}
var il = bl(fb, { path: "/" });
function xo(e, n) {
  if (e.length)
    return n < 0 && (n += e.length), e[n];
}
function Sn(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
function Ef(e, n) {
  return Sn(e, 0, n.length - 1);
}
function vb(e) {
  return new Promise((n) => {
    setTimeout(n, e);
  });
}
function If(e = 0, n = 100) {
  return Math.floor(Math.random() * (n - e + 1)) + e;
}
function pb(e, n) {
  return Array.from({ length: e }, (r, o) => n(o));
}
function tr() {
  return typeof window < "u";
}
function _o() {
  return typeof globalThis < "u" ? globalThis : tr() ? window : typeof global < "u" ? global : self;
}
var { hasOwnProperty: mb } = Object.prototype;
function Kr(e, n) {
  return mb.call(e, n);
}
function Do() {
  return tr() && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
var Bf = Object.prototype.toString;
function _s(e) {
  return Bf.call(e);
}
function Qe(e) {
  return _s(e).slice(8, -1);
}
function Rt(e) {
  return Qe(e) === "ArrayBuffer";
}
function et(e) {
  return typeof e == "boolean";
}
function Lt(e) {
  return Qe(e) === "DataView";
}
function Ft(e) {
  return Qe(e) === "Date";
}
function Ut(e) {
  return Qe(e) === "DOMException";
}
function Jn(e) {
  return e == null || e === "" || He(e) && !e.length;
}
function Ht(e) {
  return Qe(e) === "Error";
}
function jt(e) {
  return Qe(e) === "Map";
}
function rr(e) {
  return typeof e == "object" && e !== null;
}
function gn(e) {
  return Qe(e) === "Object";
}
function Yt(e) {
  return Qe(e) === "RegExp";
}
function Wt(e) {
  return Qe(e) === "Set";
}
function Kt(e) {
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
  ].includes(Qe(e));
}
function Df(e, n, r) {
  const o = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
  function a(i, l, s, u) {
    if (r(i, l) === !0 || i === l || i !== i && l !== l) return !0;
    if (!rr(i) || !rr(l)) return i === l;
    if (i.constructor !== l.constructor) return !1;
    if (Qe(i) === "String" && Qe(l) === "String" || Qe(i) === "Number" && Qe(l) === "Number" || Qe(i) === "Boolean" && Qe(l) === "Boolean" || Qe(i) === "BigInt" && Qe(l) === "BigInt" || Qe(i) === "Symbol" && Qe(l) === "Symbol") return i.valueOf() === l.valueOf();
    if (Ft(i) && Ft(l)) return i.getTime() === l.getTime();
    if (Yt(i) && Yt(l)) return i.source === l.source && i.flags === l.flags;
    if (Ht(i) && Ht(l)) return i.name === l.name && i.message === l.message && i.cause === l.cause;
    if (Ut(i) && Ut(l)) return i.name === l.name && i.message === l.message;
    if (Kt(i) && Kt(l) || Lt(i) && Lt(l)) {
      if (i.byteLength !== l.byteLength) return !1;
      const d = new Uint8Array(i.buffer), c = new Uint8Array(l.buffer);
      return d.every((f, v) => f === c[v]);
    }
    if (Rt(i) && Rt(l)) {
      if (i.byteLength !== l.byteLength) return !1;
      const d = new Uint8Array(i), c = new Uint8Array(l);
      return d.every((f, v) => f === c[v]);
    }
    if (s.get(i) === l && u.get(l) === i) return !0;
    if (s.set(i, l), u.set(l, i), jt(i) && jt(l) || Wt(i) && Wt(l)) {
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
function hb(e, n) {
  return Df(e, n, () => {
  });
}
function gb(e) {
  return He(e) && !!e.length;
}
function bb(e) {
  return e == null;
}
function En(e) {
  return typeof e == "number";
}
function eu(e) {
  return En(e) || an(e) && /^[-+]?\d+$/.test(e);
}
function yb(e) {
  return rr(e) && fn(e.then) && fn(e.catch);
}
function wb(e) {
  return typeof e == "symbol";
}
function kb(e) {
  return !!e;
}
function Mf(e) {
  return Qe(e) === "WeakMap";
}
function Af(e) {
  return Qe(e) === "WeakSet";
}
function va(e) {
  return e === window;
}
function Nf() {
  return tr() && "ontouchstart" in window;
}
function $b(e) {
  return Qe(e) === "File";
}
function Cb(e) {
  return Qe(e) === "Blob";
}
function Sb(e) {
  return e == null || typeof e != "object" && typeof e != "function";
}
function Ob(e) {
  return gn(e) && Object.keys(e).length === 0 && Object.getOwnPropertySymbols(e).length === 0;
}
function Vf(e, n) {
  if (!e) throw new Error(n);
}
function Pb(e) {
  return qt(e).length !== e.length;
}
function zb(e, n) {
  return Mo(e, n).length !== e.length;
}
function H(e) {
  return e == null ? 0 : an(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : et(e) ? Number(e) : e;
}
var Tb = 0;
function Eb() {
  return Tb++;
}
function Ib(e, n = 1) {
  n = Sn(n, 1, e.length);
  const r = [];
  let o = 0;
  for (; o < e.length; )
    r.push(e.slice(o, o + n)), o += n;
  return r;
}
function Ir(e, n) {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1) return e.splice(r, 1);
  }
}
function Bb(e, n) {
  if (e.length) {
    const r = e.findIndex((o) => n(o));
    if (r > -1) return e.splice(r, 1);
  }
}
function Db(e, n) {
  let r = 0;
  const o = [];
  for (; r < e.length; ) n(e[r]) ? o.push(...e.splice(r, 1)) : r++;
  return o;
}
function Mb(e, n) {
  return e.includes(n) ? Ir(e, n) : e.push(n), e;
}
function qt(e) {
  return [...new Set(e)];
}
function Mo(e, n) {
  return e.reduce((r, o) => (r.findIndex((t) => n(o, t)) === -1 && r.push(o), r), []);
}
function Rf(e, n, r = "start") {
  let o = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && o >= 0 && o <= e.length - 1; ) {
    if (n(e[o], o, e)) return [e[o], o];
    r === "start" ? o++ : o--;
  }
  return [null, -1];
}
function Ab(e) {
  for (let n = e.length - 1; n > 0; n--) {
    const r = Math.floor(Math.random() * (n + 1));
    [e[n], e[r]] = [e[r], e[n]];
  }
  return e;
}
function Lf(e) {
  return e.filter((n) => n != null);
}
function Nb(e) {
  return e.filter((n) => n != null && n !== "");
}
function mr(e) {
  return He(e) ? e : [e];
}
function Xt(e, ...n) {
  const r = xo(n, -1), o = n.slice(0, -1).reduce((t, a) => [...t, ...a], []);
  return e.filter((t) => !o.some((a) => r(t, a)));
}
function Vb(e, ...n) {
  return Xt(e, ...n, (r, o) => r === o);
}
function Ff(...e) {
  const n = xo(e, -1), r = e.slice(0, -1);
  if (r.length === 0) return [];
  if (r.length === 1) return Mo(r[0], n);
  function o(t, a) {
    return t.filter((i) => a.some((l) => n(i, l)));
  }
  return Mo(r.reduce((t, a) => o(t, a)), n);
}
function Rb(...e) {
  return Ff(...e, (n, r) => n === r);
}
function Lb(e, n) {
  return e.reduce((r, o) => {
    const t = n(o);
    return (r[t] ??= []).push(o), r;
  }, {});
}
function Uf(...e) {
  const n = xo(e, -1);
  return Mo(e.slice(0, -1).reduce((r, o) => [...Xt(r, o, n), ...Xt(o, r, n)]), n);
}
function Fb(...e) {
  return Uf(...e, (n, r) => n === r);
}
function Ub(e, n) {
  return n.reduce((r, o) => (r[o] = e[o], r), {});
}
function Hb(e, n) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)].reduce((r, o) => {
    const t = e[o];
    return n(t, o) && (r[o] = t), r;
  }, {});
}
function jb(e, n) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)].reduce((r, o) => (n.includes(o) || (r[o] = e[o]), r), {});
}
function Yb(e, n) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)].reduce((r, o) => {
    const t = e[o];
    return n(t, o) || (r[o] = t), r;
  }, {});
}
function Wb(e, n) {
  return Object.entries(e).reduce((r, [o, t]) => {
    const a = n(o, t);
    if (He(a)) {
      const [i, l] = a;
      r[i] = l;
    }
    return r;
  }, {});
}
function Kb() {
  let e, n;
  return {
    promise: new Promise((r, o) => {
      e = r, n = o;
    }),
    resolve: e,
    reject: n
  };
}
function qb(e, n, r) {
  if (!rr(e)) return;
  const o = [...n];
  if (o.length === 0) return;
  let t = e;
  for (; o.length > 1; ) {
    const a = o.shift(), i = o[0];
    rr(t[a]) || (t[a] = En(i) ? [] : {}), t = t[a];
  }
  t[o[0]] = r;
}
function Xb(e) {
  return Object.keys(e);
}
function Gb(e) {
  return Object.entries(e);
}
var Zb = /* @__PURE__ */ Of({
  mitt: () => Tf,
  uuid: () => Pf,
  uuidV6: () => zf
});
function Ao(e) {
  const n = _o();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Hf(...e) {
  return e.map((n) => {
    if (He(n)) {
      const [r, o, t = null] = n;
      return r ? o : t;
    }
    return n;
  });
}
function Jb(e) {
  if (!e) return;
  const n = document.createElement("textarea");
  n.value = e, n.style.position = "fixed", n.style.opacity = "0", document.body.appendChild(n), n.select(), document.execCommand("copy"), document.body.removeChild(n);
}
function Qb(e, { prefix: n = 2, suffix: r = 2, mask: o = "*", maskLength: t } = {}) {
  if (e.length <= 1) return e;
  const a = Math.min(n, e.length - 1), i = Math.min(r, Math.max(e.length - a - 1, 0)), l = t ?? e.length - a - i, s = i > 0 ? e.slice(-i) : "";
  return e.slice(0, a) + o.repeat(l) + s;
}
function pa(e) {
  return e = e.replace(/[-_](\w)/g, (n, r) => r.toUpperCase()), e.replace(e.charAt(0), e.charAt(0).toLowerCase());
}
function xb(e, n) {
  return e.startsWith(n) ? e : n + e;
}
function _b(e, n) {
  return e.endsWith(n) ? e : e + n;
}
var e0 = 0;
function n0() {
  return `generated-key-${e0++}`;
}
function nu(e) {
  return e.replace(/([A-Z])/g, " $1").replace(/[_\s]+/g, "-").trim().replace(/^-/, "").toLowerCase();
}
function jf(e) {
  const n = pa(e);
  return n.replace(n.charAt(0), n.charAt(0).toUpperCase());
}
function r0(e) {
  return e.charAt(0).toLowerCase() + e.slice(1);
}
function o0(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function t0() {
  const e = "0123456789abcdef";
  let n = "#";
  for (let r = 0; r < 6; r++) n += e[Math.floor(Math.random() * 16)];
  return n;
}
function a0(e = 10) {
  let n = r();
  for (; n.length < e; ) n += r();
  function r() {
    return Math.random().toString(36).slice(2);
  }
  return n.slice(0, e);
}
function i0(e) {
  return e.startsWith("\\\\?\\") ? e : e.replace(/\\/g, "/");
}
function Yf(e) {
  return (n) => {
    const r = `${e}-${n}`, o = (t) => t ? t[0] === "$" ? t.replace("$", e) : t.startsWith("--") ? `${r}${t}` : `${r}__${t}` : r;
    return {
      name: jf(r),
      n: o,
      classes: Hf
    };
  };
}
function qr(e) {
  const n = _o();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e);
}
function Pn() {
  return new Promise((e) => {
    qr(() => {
      qr(e);
    });
  });
}
function er(e) {
  return window.getComputedStyle(e);
}
function Wf(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const r = /(scroll|auto)/, { overflowY: o, overflow: t } = er(n);
    if (r.test(o) || r.test(t)) return n;
  }
  return window;
}
function l0(e) {
  const n = [];
  let r = e;
  for (; !va(r); )
    r = Wf(r), n.push(r);
  return n;
}
function tn(e) {
  if (va(e)) {
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
function ma(e) {
  const n = "scrollLeft" in e ? e.scrollLeft : e.scrollX;
  return Math.max(n, 0);
}
function Br(e) {
  const n = "scrollTop" in e ? e.scrollTop : e.scrollY;
  return Math.max(n, 0);
}
function Kf(e) {
  const { top: n, bottom: r, left: o, right: t } = tn(e), { width: a, height: i } = tn(window);
  return o <= a && t >= 0 && n <= i && r >= 0;
}
function s0(e) {
  return JSON.stringify(e, null, 2);
}
function Re(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function Tr() {
  return new Promise((e) => {
    qr(e);
  });
}
function ru(e) {
  return {
    ...e,
    set(n, r) {
      r != null && (an(r) || (r = JSON.stringify(r)), e.setItem(n, r));
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
function u0(e = {}) {
  const n = e;
  return {
    set(r, o, t = {}) {
      o != null && (an(o) || (o = JSON.stringify(o)), il.set(r, o, {
        ...n,
        ...t
      }));
    },
    get(r) {
      const o = il.get(r);
      try {
        return JSON.parse(o);
      } catch {
        return o;
      }
    },
    remove(r, o = {}) {
      il.remove(r, {
        ...n,
        ...o
      });
    }
  };
}
var d0 = ru(_o().sessionStorage), c0 = ru(_o().localStorage);
function f0(e) {
  try {
    return JSON.parse(e);
  } catch {
    return;
  }
}
function v0(e, n = "file") {
  const r = document.createElement("a");
  r.style.display = "none", r.href = an(e) ? e : URL.createObjectURL(e), r.download = n, document.body.appendChild(r), r.click(), URL.revokeObjectURL(r.href), document.body.removeChild(r);
}
function k(e, ...n) {
  if (He(e)) return e.map((r) => r(...n));
  if (e) return e(...n);
}
function p0(e, ...n) {
  try {
    return [void 0, e(...n)];
  } catch (r) {
    return [r, void 0];
  }
}
async function m0(e, ...n) {
  try {
    return [void 0, await e(...n)];
  } catch (r) {
    return [r, void 0];
  }
}
function h0(e) {
  let n = !1, r;
  return function(...o) {
    return n || (n = !0, r = e.apply(this, o)), r;
  };
}
function g0(e, n = 0) {
  let r;
  return function(...o) {
    r && clearTimeout(r), r = setTimeout(() => {
      e.apply(this, o);
    }, n);
  };
}
function ha(e, n = 200) {
  let r, o = 0;
  return function t(...a) {
    const i = performance.now(), l = i - o;
    o || (o = i), r && clearTimeout(r), l >= n ? (e.apply(this, a), o = i) : r = setTimeout(() => {
      t.apply(this, a);
    }, n - l);
  };
}
function b0() {
}
function y0(e) {
  const n = Object.entries(e).reduce((f, [v, m]) => (f[v] = gn(m) ? m.value : m, f), {}), r = Object.values(e);
  function o(f) {
    const v = c(f);
    return v?.label ? eo(v.label) : "";
  }
  function t(f) {
    const v = c(f);
    return v?.description ? eo(v.description) : "";
  }
  function a() {
    return r.map((f) => gn(f) ? f.value : f);
  }
  function i() {
    return r.map((f) => gn(f) && f.label ? eo(f.label) : "");
  }
  function l() {
    return r.map((f) => gn(f) && f.description ? eo(f.description) : "");
  }
  function s(f) {
    const v = {};
    for (const m of Object.keys(f)) v[m] = eo(f[m]);
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
function qf(e) {
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
      d = qr(() => {
        const O = Sn((performance.now() - c - v) / o, 0, 1);
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
    l === "running" && (Ao(d), C("paused"), f = performance.now());
  }
  function w() {
    Ao(d), C("pending"), s = n, d = void 0, c = void 0, f = void 0, v = 0;
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
function w0() {
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
function k0(e = {}) {
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
function Et(e) {
  if (an(e)) return e;
  const { to: n, query: r, hash: o } = e, t = n.indexOf("#"), a = t >= 0 ? n.slice(0, t) : n, i = t >= 0 ? `#${n.slice(t + 1)}` : "", l = a.indexOf("?"), s = l >= 0 ? a.slice(0, l) : a, u = l >= 0 ? a.slice(l + 1) : "", d = new URLSearchParams(u);
  if (r) for (const [m, h] of Object.entries(r)) d.append(m, String(h));
  const c = d.toString(), f = o ?? i;
  let v = s;
  return c && (v += `?${c}`), f && (v += f), v;
}
var $0 = {
  push(e) {
    window.location.assign(Et(e));
  },
  replace(e) {
    window.location.replace(Et(e));
  },
  open(e) {
    const n = Et(e);
    window.open(n);
  },
  back() {
    window.history.back();
  },
  go(e) {
    window.history.go(e);
  }
};
function Xf(e, n) {
  const r = /* @__PURE__ */ new WeakMap();
  function o(i, l) {
    const s = n(i);
    if (s !== void 0) return s;
    if (!rr(i)) return i;
    if (l.has(i)) return l.get(i);
    if (Ft(i)) return new Date(i);
    if (Yt(i)) return new RegExp(i);
    if (jt(i)) {
      const u = /* @__PURE__ */ new Map();
      return l.set(i, u), i.forEach((d, c) => {
        u.set(o(c, l), o(d, l));
      }), u;
    }
    if (Wt(i)) {
      const u = /* @__PURE__ */ new Set();
      return l.set(i, u), i.forEach((d) => {
        u.add(o(d, l));
      }), u;
    }
    if (Qe(i) === "String" || Qe(i) === "Number" || Qe(i) === "Boolean") return a(i, i.valueOf());
    if (Mf(i) || Af(i) || Ht(i) || Ut(i)) return {};
    if (Kt(i)) return a(i, t(i.buffer), i.byteOffset, i.length);
    if (Lt(i)) return a(i, t(i.buffer), i.byteOffset, i.byteLength);
    if (Rt(i)) return t(i);
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
function C0(e) {
  return Xf(e, () => {
  });
}
function Gf(e, ...n) {
  const r = xo(n, -1), o = [e, ...n.slice(0, -1)];
  let t = o.length - 1, a = o[t];
  for (; t; )
    a = i(o[t - 1], a, r), t--;
  function i(l, s, u) {
    function d(c, f) {
      for (const v in f) if (Kr(f, v)) {
        const m = f[v], h = c[v], w = u(h, m, v, l, s);
        w !== void 0 ? c[v] = w : rr(m) ? rr(h) ? c[v] = d(h, m) : c[v] = d(He(m) ? [] : {}, m) : c[v] = m;
      }
      return c;
    }
    return d(l, s);
  }
  return a;
}
function S0(e, ...n) {
  return Gf(e, ...n, () => {
  });
}
function O0(e) {
  return new Promise((n) => {
    const r = new FileReader();
    r.onload = () => {
      n(r.result);
    }, r.readAsArrayBuffer(e);
  });
}
function Zf(e) {
  return new Promise((n) => {
    const r = new FileReader();
    r.onload = () => {
      n(r.result);
    }, r.readAsDataURL(e);
  });
}
function P0(e) {
  return new Promise((n) => {
    const r = new FileReader();
    r.onload = () => {
      n(r.result);
    }, r.readAsText(e);
  });
}
function z0(e, n) {
  return e.reduce((r, o) => n(r) > n(o) ? r : o, e[0]);
}
function T0(e, n) {
  return e.reduce((r, o) => n(r) < n(o) ? r : o, e[0]);
}
function Jf(e) {
  return e.reduce((n, r) => n + r, 0);
}
function Qf(e, n) {
  return e.reduce((r, o) => r + n(o), 0);
}
function E0(e) {
  function n(o, t) {
    for (let a = 0; a < t.length; a++) {
      const i = t.charCodeAt(a);
      o = (o << 5) - o + i, o |= 0;
    }
    return o < 0 ? o * -2 : o;
  }
  function r(o, t, a, i) {
    return o = n(o, a), o = n(o, _s(t)), o = n(o, typeof t), t === null ? n(o, "null") : t === void 0 ? n(o, "undefined") : rr(t) || fn(t) ? i.includes(t) ? n(o, `[Circular]${a}`) : (i.push(t), o = Object.keys(t).sort().reduce((l, s) => r(l, t[s], s, i), o), fn(t.valueOf) ? n(o, String(t.valueOf())) : o) : n(o, t.toString());
  }
  return r(0, e, "", []).toString(16).padStart(8, "0");
}
function I0(e) {
  return Jf(e) / e.length;
}
function B0(e, n) {
  return Qf(e, n) / e.length;
}
function D0(e) {
  if (e.length)
    return e[If(0, e.length - 1)];
}
function M0(e, n = 0) {
  return ga(e, n, Math.round);
}
function ga(e, n, r) {
  return n = Sn(n ?? 0, -292, 292), n ? +`${r(`${e}e${n}`)}e${-n}` : r(e);
}
function yl(e, n = 0) {
  return ga(e, n, Math.floor);
}
function A0(e, n = 0) {
  return ga(e, n, Math.ceil);
}
nb(/* @__PURE__ */ Of({
  NOOP: () => b0,
  assert: () => Vf,
  at: () => xo,
  baseRound: () => ga,
  buildNavigationUrl: () => Et,
  call: () => k,
  callOrReturn: () => eo,
  camelize: () => pa,
  cancelAnimationFrame: () => Ao,
  ceil: () => A0,
  chunk: () => Ib,
  clamp: () => Sn,
  clampArrayRange: () => Ef,
  classes: () => Hf,
  cloneDeep: () => C0,
  cloneDeepWith: () => Xf,
  copyText: () => Jb,
  createCacheManager: () => k0,
  createCookieStorage: () => u0,
  createNamespaceFn: () => Yf,
  createStorage: () => ru,
  debounce: () => g0,
  delay: () => vb,
  difference: () => Vb,
  differenceWith: () => Xt,
  doubleRaf: () => Pn,
  download: () => v0,
  duration: () => w0,
  ensurePrefix: () => xb,
  ensureSuffix: () => _b,
  enumOf: () => y0,
  find: () => Rf,
  floor: () => yl,
  genNumberKey: () => Eb,
  genStringKey: () => n0,
  getAllParentScroller: () => l0,
  getGlobalThis: () => _o,
  getParentScroller: () => Wf,
  getRect: () => tn,
  getScrollLeft: () => ma,
  getScrollTop: () => Br,
  getStyle: () => er,
  groupBy: () => Lb,
  hasDuplicates: () => Pb,
  hasDuplicatesBy: () => zb,
  hasOwn: () => Kr,
  inBrowser: () => tr,
  inMobile: () => Do,
  inViewport: () => Kf,
  intersection: () => Rb,
  intersectionWith: () => Ff,
  isArray: () => He,
  isArrayBuffer: () => Rt,
  isBlob: () => Cb,
  isBoolean: () => et,
  isDOMException: () => Ut,
  isDataView: () => Lt,
  isDate: () => Ft,
  isEmpty: () => Jn,
  isEmptyPlainObject: () => Ob,
  isEqual: () => hb,
  isEqualWith: () => Df,
  isError: () => Ht,
  isFile: () => $b,
  isFunction: () => fn,
  isMap: () => jt,
  isNonEmptyArray: () => gb,
  isNullish: () => bb,
  isNumber: () => En,
  isNumeric: () => eu,
  isObject: () => rr,
  isPlainObject: () => gn,
  isPrimitive: () => Sb,
  isPromise: () => yb,
  isRegExp: () => Yt,
  isSet: () => Wt,
  isString: () => an,
  isSymbol: () => wb,
  isTruthy: () => kb,
  isTypedArray: () => Kt,
  isWeakMap: () => Mf,
  isWeakSet: () => Af,
  isWindow: () => va,
  kebabCase: () => nu,
  localStorage: () => c0,
  lowerFirst: () => r0,
  mapObject: () => Wb,
  maskString: () => Qb,
  maxBy: () => z0,
  mean: () => I0,
  meanBy: () => B0,
  merge: () => S0,
  mergeWith: () => Gf,
  minBy: () => T0,
  mitt: () => Tf,
  motion: () => qf,
  navigation: () => $0,
  normalizeToArray: () => mr,
  objectEntries: () => Gb,
  objectKeys: () => Xb,
  objectToString: () => Bf,
  omit: () => jb,
  omitBy: () => Yb,
  once: () => h0,
  pascalCase: () => jf,
  pick: () => Ub,
  pickBy: () => Hb,
  prettyJSONObject: () => s0,
  preventDefault: () => Re,
  promiseWithResolvers: () => Kb,
  raf: () => Tr,
  randomColor: () => t0,
  randomNumber: () => If,
  randomString: () => a0,
  removeArrayBlank: () => Lf,
  removeArrayEmpty: () => Nb,
  removeItem: () => Ir,
  removeItemBy: () => Bb,
  removeItemsBy: () => Db,
  requestAnimationFrame: () => qr,
  round: () => M0,
  sample: () => D0,
  sessionStorage: () => d0,
  set: () => qb,
  shuffle: () => Ab,
  slash: () => i0,
  sum: () => Jf,
  sumBy: () => Qf,
  sumHash: () => E0,
  supportTouch: () => Nf,
  throttle: () => ha,
  times: () => pb,
  toArrayBuffer: () => O0,
  toDataURL: () => Zf,
  toNumber: () => H,
  toRawType: () => Qe,
  toText: () => P0,
  toTypeString: () => _s,
  toggleItem: () => Mb,
  tryAsyncCall: () => m0,
  tryCall: () => p0,
  tryParseJSON: () => f0,
  uniq: () => qt,
  uniqBy: () => Mo,
  upperFirst: () => o0,
  uuid: () => Pf,
  uuidV6: () => zf,
  xor: () => Fb,
  xorWith: () => Uf
}), Zb);
function Yn(e, n, r) {
  return Vf(e, `Varlet [${n}]: ${r}`);
}
function N0(e, n) {
  console.warn(`Varlet [${e}]: ${n}`);
}
function ro(e, n) {
  console.error(`Varlet [${e}]: ${n}`);
}
var V0 = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1;
function yn(e) {
  let n = !1;
  gr(() => {
    e(), Fe(() => {
      n = !0;
    });
  }), Nr(() => {
    n && e();
  });
}
function Ye(e, n, r, o = {}) {
  if (!tr()) return;
  const { passive: t = !1, capture: a = !1 } = o;
  let i = !1, l = !1;
  const s = (v) => fn(v) ? v() : xs(v), u = (v) => {
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
  Gg(e) && (c = ve(() => e.value, (v, m) => {
    d(m), u(v);
  }));
  const f = () => {
    c?.(), d(e), l = !0;
  };
  return yn(() => {
    u(e);
  }), ca(() => {
    d(e);
  }), vo(() => {
    d(e);
  }), f;
}
function xf(e, n, r) {
  if (!tr()) return;
  Ye(document, n, (t) => {
    const a = fn(e) ? e() : xs(e);
    a && !a.contains(t.target) && r(t);
  });
}
function mo(e) {
  let n = !1;
  vo(() => {
    n = !0, e();
  }), Jo(() => {
    n || e();
  });
}
function ou(e) {
  return e in Zr().provides;
}
function wn(e) {
  if (!ou(e)) return {
    index: null,
    parentProvider: null,
    bindParent: null
  };
  const { childInstances: n, collect: r, clear: o, ...t } = Js(e), a = Zr();
  return {
    index: E(() => n.indexOf(a)),
    parentProvider: t,
    bindParent: (s) => {
      gr(() => {
        Fe().then(() => {
          r(a, s);
        });
      }), ca(() => {
        Fe().then(() => {
          o(a, s);
        });
      });
    }
  };
}
function R0(e) {
  const n = [], r = (o) => {
    if (o?.component) {
      r(o?.component.subTree);
      return;
    }
    He(o?.children) && o.children.forEach((t) => {
      Zg(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function kn(e) {
  const n = Zr(), r = rn([]), o = [], t = E(() => r.length), a = () => {
    const u = R0(n.subTree);
    r.sort((d, c) => u.indexOf(d.vnode) - u.indexOf(c.vnode));
  }, i = (u, d) => {
    r.push(u), o.push(d), a();
  }, l = (u, d) => {
    Ir(r, u), Ir(o, d);
  };
  return {
    length: t,
    childProviders: o,
    bindChildren: (u) => {
      Qs(e, {
        childInstances: r,
        collect: i,
        clear: l,
        ...u
      });
    }
  };
}
function ar(e) {
  Ye(() => window, "resize", e, { passive: !0 }), Ye(() => window, "orientationchange", e, { passive: !0 });
}
function L0(e, n) {
  const r = y(!1);
  return ve(e, (o) => {
    n === o && (r.value = !0);
  }, { immediate: !0 }), r;
}
function F0(e, n) {
  if (e > n) return "horizontal";
  if (n > e) return "vertical";
}
function ho() {
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
      const { clientX: j, clientY: M } = I.touches[0];
      e.value = j, n.value = M, i.value = j, l.value = M, c.value = !0, v.value = performance.now(), f.value = !1, h && window.cancelAnimationFrame(h);
    },
    moveTouch: (I) => {
      const { clientX: j, clientY: M } = I.touches[0];
      f.value = !0, r.value = j - e.value, o.value = M - n.value, t.value = Math.abs(r.value), a.value = Math.abs(o.value), m.value = Math.sqrt(t.value ** 2 + a.value ** 2), s.value = j - i.value, u.value = M - l.value, d.value || (d.value = F0(t.value, a.value)), i.value = j, l.value = M;
    },
    endTouch: () => {
      c.value = !1, h = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    },
    isReachTop: (I) => Br(I) === 0 && o.value > 0,
    isReachBottom: (I, j = 1) => {
      const { scrollHeight: M, clientHeight: A, scrollTop: B } = I, T = Math.abs(M - B - A);
      return o.value < 0 && T <= j;
    }
  };
}
function _f() {
  const e = Zr(), n = nu(e.type.name), r = y(void 0);
  return gr(() => {
    r.value = `${n}-${e.uid}`;
  }), r;
}
function U0(e = {}) {
  const { initialWidth: n = 0, initialHeight: r = 0 } = e, o = y(n), t = y(r), a = () => {
    tr() && (o.value = window.innerWidth, t.value = window.innerHeight);
  };
  return yn(a), ar(a), {
    width: o,
    height: t
  };
}
function Tn(e, n, r = {}) {
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
  return ve(() => e[n], () => {
    d = !1, u.value = s(), Fe(() => {
      d = !0;
    });
  }), ve(() => u.value, (c) => {
    d && (i ? i(l, c) : k(e[l], c));
  }), u;
}
function H0(e) {
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
    return qf({
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
var j0 = Object.defineProperty, Y0 = Object.defineProperties, W0 = Object.getOwnPropertyDescriptors, ju = Object.getOwnPropertySymbols, K0 = Object.prototype.hasOwnProperty, q0 = Object.prototype.propertyIsEnumerable, Yu = (e, n, r) => n in e ? j0(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, wl = (e, n) => {
  for (var r in n || (n = {})) K0.call(n, r) && Yu(e, r, n[r]);
  if (ju)
    for (var r of ju(n)) q0.call(n, r) && Yu(e, r, n[r]);
  return e;
}, X0 = (e, n) => Y0(e, W0(n)), Wu = (e, n, r) => new Promise((o, t) => {
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
function De(e, n) {
  return He(n) ? n.reduce((r, o) => (r[o] = e[o], r), {}) : e[n];
}
function te(e, n) {
  const r = n ?? e;
  return r.install = function(o) {
    const { name: t } = e;
    t && o.component(t, e);
  }, r;
}
function le(e, n) {
  e.setPropsDefaults = function(r) {
    Object.entries(r).forEach(([o, t]) => {
      const a = n[o];
      if (a != null) {
        if (gn(a)) {
          n[o] = X0(wl({}, a), { default: t });
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
function G0(e) {
  const n = Xg(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), r.parentNode && document.body.removeChild(r);
    }
  };
}
function go(e, n = {}, r = {}) {
  const { unmount: o } = G0({ setup() {
    return () => Zo(e, wl(wl({}, n), r));
  } });
  return { unmountInstance: o };
}
function tu(e) {
  const n = [];
  return e.forEach((r) => {
    if (r.type !== Kg) {
      if (r.type === Ae && He(r.children)) {
        n.push(...tu(r.children));
        return;
      }
      n.push(r);
    }
  }), n;
}
function Ku(e) {
  return gn(e) && fn(e.safeParseAsync);
}
function Z0(e) {
  return gn(e) && Kr(e, "success");
}
function qn() {
  const e = y(""), n = (t, a, i) => Wu(null, null, function* () {
    const l = mr(t).filter((u) => Ku(u) || fn(u)), s = yield Promise.all(l.map((u) => Ku(u) ? u.safeParseAsync(a) : u(a, i)));
    return r(), !s.some((u) => {
      if (Z0(u)) {
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
    validateWithTrigger: (t, a, i, l, s) => Wu(null, null, function* () {
      t.includes(a) && (yield n(i, l, s)) && (e.value = "");
    })
  };
}
function J0(e) {
  Ye(() => window, "hashchange", e), Ye(() => window, "popstate", e);
}
function Jr() {
  const e = y(!1);
  return Nr(() => {
    e.value = !1;
  }), vo(() => {
    e.value = !0;
  }), { disabled: e };
}
var ee = Yf("var");
function R(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function vn(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), `var-elevation--${e}`);
}
var nt = _({
  props: {
    is: { type: [String, Object] },
    tag: {
      type: String,
      default: "span"
    }
  },
  setup(e) {
    return () => an(e.is) ? Zo(e.tag, e.is) : e.is;
  }
}), ev = {
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
}, nv = {
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
}, rv = {
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
}, au = {
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
}, iu = {
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
}, ov = iu, Q0 = Object.defineProperty, qu = Object.getOwnPropertySymbols, x0 = Object.prototype.hasOwnProperty, _0 = Object.prototype.propertyIsEnumerable, Xu = (e, n, r) => n in e ? Q0(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Gu = (e, n) => {
  for (var r in n || (n = {})) x0.call(n, r) && Xu(e, r, n[r]);
  if (qu)
    for (var r of qu(n)) _0.call(n, r) && Xu(e, r, n[r]);
  return e;
};
function lu() {
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
      e.value[i] = Gu(Gu({}, e.value[i]), l), o(i);
    },
    t: (i) => {
      if (Kr(n.value, i)) return n.value[i];
    }
  };
}
var { messages: tv, currentMessage: av, add: su, use: uu, merge: iv, t: ln } = lu();
su("zh-CN", au);
uu("zh-CN");
var iB = {
  zhCN: au,
  enUS: ev,
  zhTW: iu,
  zhHK: ov,
  faIR: nv,
  jaJP: rv,
  messages: tv,
  currentMessage: av,
  add: su,
  use: uu,
  merge: iv,
  t: ln,
  useLocale: lu
}, kl = {
  zhCN: au,
  enUS: ev,
  zhTW: iu,
  zhHK: ov,
  faIR: nv,
  jaJP: rv,
  messages: tv,
  currentMessage: av,
  add: su,
  use: uu,
  merge: iv,
  t: ln,
  useLocale: lu
}, $l = /* @__PURE__ */ Symbol("LOCALE_PROVIDER_KEY");
function ey(e) {
  Qs($l, e);
}
function ir() {
  return ou($l) ? Js($l) : { t: null };
}
var lv = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, lB = rn(lv), Hn = rn(lv), { n: Zu } = ee("");
function sv() {
  Object.keys(Hn.locks).length <= 0 ? document.body.classList.remove(Zu("$--lock")) : document.body.classList.add(Zu("$--lock"));
}
function vt(e) {
  Hn.locks[e] = 1, sv();
}
function pt(e) {
  delete Hn.locks[e], sv();
}
function rt(e, n) {
  const { uid: r } = Zr();
  n && ve(n, (o) => {
    o === !1 ? pt(r) : o === !0 && e() === !0 && vt(r);
  }), ve(e, (o) => {
    n && n() === !1 || (o === !0 ? vt(r) : pt(r));
  }), Jg(() => {
    n && n() === !1 || e() === !0 && vt(r);
  }), Jo(() => {
    n && n() === !1 || e() === !0 && pt(r);
  }), Nr(() => {
    n && n() === !1 || e() === !0 && vt(r);
  }), vo(() => {
    n && n() === !1 || e() === !0 && pt(r);
  });
}
var yr = [];
function du(e, n) {
  const { uid: r } = Zr();
  ve(e, (i) => {
    i && !a(r) ? t() : setTimeout(() => {
      Ir(yr, a(r));
    });
  }), yn(() => {
    e() && t();
  }), mo(() => {
    Ir(yr, a(r));
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
function ot(e, n) {
  const r = y(Hn.zIndex);
  return ve(e, (o) => {
    o && (Hn.zIndex += n, r.value = Hn.zIndex);
  }, { immediate: !0 }), { zIndex: r };
}
var bo = {
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
}, uv = /* @__PURE__ */ Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function dv() {
  const { bindParent: e, parentProvider: n, index: r } = wn(uv);
  return {
    index: r,
    popup: n,
    bindPopup: e
  };
}
function ny() {
  const { bindChildren: e, childProviders: n, length: r } = kn(uv);
  return {
    length: r,
    popupItems: n,
    bindPopupItems: e
  };
}
var ry = Object.defineProperty, Ju = Object.getOwnPropertySymbols, oy = Object.prototype.hasOwnProperty, ty = Object.prototype.propertyIsEnumerable, Qu = (e, n, r) => n in e ? ry(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, ay = (e, n) => {
  for (var r in n || (n = {})) oy.call(n, r) && Qu(e, r, n[r]);
  if (Ju)
    for (var r of Ju(n)) ty.call(n, r) && Qu(e, r, n[r]);
  return e;
}, { name: iy, n: Gn, classes: ll } = ee("popup"), ba = _({
  name: iy,
  inheritAttrs: !1,
  props: bo,
  setup(e, { slots: n, attrs: r }) {
    const o = L0(() => e.show, !0), { zIndex: t } = ot(() => e.show, 3), a = E(() => {
      var m;
      return (m = e.zIndex) != null ? m : t.value;
    }), { onStackTop: i } = du(() => e.show, a), { disabled: l } = Jr(), { bindPopupItems: s } = ny();
    rt(() => e.show, () => e.lockScroll), ve(() => e.show, (m) => {
      k(m ? e.onOpen : e.onClose);
    }), s({ show: E(() => e.show) }), Ye(() => window, "keydown", v), J0(() => k(e.onRouteChange));
    function u() {
      const { closeOnClickOverlay: m, onClickOverlay: h } = e;
      k(h), m && k(e["onUpdate:show"], !1);
    }
    function d() {
      const { overlayClass: m = "", overlayStyle: h } = e;
      return X("div", {
        class: ll(Gn("overlay"), m),
        style: ay({ zIndex: a.value - 1 }, h),
        onClick: u
      }, null);
    }
    function c() {
      return Ne(X("div", We({
        class: ll(Gn("content"), Gn(`--${e.position}`), [e.defaultStyle, Gn("--content-background-color")], [e.defaultStyle, Gn("$-elevation--3")], [e.safeArea, Gn("--safe-area")], [e.safeAreaTop, Gn("--safe-area-top")]),
        style: { zIndex: a.value },
        role: "dialog",
        "aria-modal": "true"
      }, r), [o.value && k(n.default)]), [[_n, e.show]]);
    }
    function f() {
      return X(nn, {
        name: Gn("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, { default: () => [Ne(X("div", {
        class: ll(Gn("$--box"), Gn(), [!e.overlay, Gn("--pointer-events-none")]),
        style: { zIndex: a.value - 2 }
      }, [e.overlay && d(), X(nn, { name: e.transition || Gn(`$-pop-${e.position}`) }, { default: () => [c()] })]), [[_n, e.show]])] });
    }
    function v(m) {
      !i() || m.key !== "Escape" || !e.show || (k(e.onKeyEscape), e.closeOnKeyEscape && (Re(m), k(e["onUpdate:show"], !1)));
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
te(ba);
le(ba, bo);
var sB = ba, Dr = ba, ly = Object.defineProperty, sy = Object.defineProperties, uy = Object.getOwnPropertyDescriptors, xu = Object.getOwnPropertySymbols, dy = Object.prototype.hasOwnProperty, cy = Object.prototype.propertyIsEnumerable, _u = (e, n, r) => n in e ? ly(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, cv = (e, n) => {
  for (var r in n || (n = {})) dy.call(n, r) && _u(e, r, n[r]);
  if (xu)
    for (var r of xu(n)) cy.call(n, r) && _u(e, r, n[r]);
  return e;
}, fy = (e, n) => sy(e, uy(n)), { n: fv } = ee("ripple"), ed = 250;
function vy(e) {
  const { zIndex: n, position: r } = er(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function nd(e) {
  return "touches" in e;
}
function py(e, n) {
  const { top: r, left: o } = tn(e), { clientWidth: t, clientHeight: a } = e, i = Math.sqrt(t ** 2 + a ** 2) / 2, l = i * 2, s = nd(n) ? n.touches[0].clientX - o : t / 2, u = nd(n) ? n.touches[0].clientY - r : a / 2, d = (t - i * 2) / 2, c = (a - i * 2) / 2;
  return {
    x: s - i,
    y: u - i,
    centerX: d,
    centerY: c,
    size: l
  };
}
function cu(e) {
  const n = this._ripple;
  if (n.removeRipple(), n.disabled || n.tasker || !Hn.enableRipple) return;
  const r = () => {
    n.tasker = null;
    const { x: o, y: t, centerX: a, centerY: i, size: l } = py(this, e), s = document.createElement("div");
    s.classList.add(fv()), s.style.opacity = "0", s.style.transform = `translate(${o}px, ${t}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), vy(this), this.appendChild(s), window.setTimeout(() => {
      s.style.transform = `translate(${a}px, ${i}px) scale3d(1, 1, 1)`, s.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(r, 30);
}
function Gt() {
  const e = this._ripple, n = () => {
    const r = this.querySelectorAll(`.${fv()}`);
    if (!r.length) return;
    const o = r[r.length - 1], t = ed - performance.now() + Number(o.dataset.createdAt);
    window.setTimeout(() => {
      o.style.opacity = "0", window.setTimeout(() => {
        var a;
        return (a = o.parentNode) == null ? void 0 : a.removeChild(o);
      }, ed);
    }, t);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function vv() {
  if (!Nf() || !Hn.enableRipple) return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
var Zt = !1;
function my(e) {
  Zt || !(e.key === " " || e.key === "Enter") || (cu.call(this, e), Zt = !0);
}
function rd() {
  Zt && (Gt.call(this), Zt = !1);
}
function hy(e, n) {
  var r;
  e._ripple = fy(cv({ tasker: null }, (r = n.value) != null ? r : {}), { removeRipple: Gt.bind(e) }), e.addEventListener("touchstart", cu, { passive: !0 }), e.addEventListener("touchmove", vv, { passive: !0 }), e.addEventListener("dragstart", Gt, { passive: !0 }), e.addEventListener("keydown", my), e.addEventListener("keyup", rd), e.addEventListener("blur", rd), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("dragend", e._ripple.removeRipple, { passive: !0 });
}
function gy(e) {
  e.removeEventListener("touchstart", cu), e.removeEventListener("touchmove", vv), e.removeEventListener("dragstart", Gt), !(!e._ripple || !e._ripple.removeRipple) && (document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple), document.removeEventListener("dragend", e._ripple.removeRipple));
}
function by(e, n) {
  var r, o, t, a, i, l;
  const s = {
    color: (r = n.value) == null ? void 0 : r.color,
    disabled: (o = n.value) == null ? void 0 : o.disabled
  };
  (s.color !== ((t = e._ripple) == null ? void 0 : t.color) || s.disabled !== ((a = e._ripple) == null ? void 0 : a.disabled)) && (e._ripple = cv({
    tasker: s.disabled ? null : (i = e._ripple) == null ? void 0 : i.tasker,
    removeRipple: (l = e._ripple) == null ? void 0 : l.removeRipple
  }, s));
}
var pv = {
  mounted: hy,
  unmounted: gy,
  updated: by,
  install(e) {
    e.directive("ripple", this);
  }
}, uB = pv, un = pv;
function mv(e) {
  return e ? !!(e === "desktop" && Do() || e === "mobile" && !Do()) : !1;
}
function yy(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, o) => {
    const [t, a] = o.split(":").map((i) => i.trim());
    return r[pa(t)] = a, r;
  }, {}) : {};
}
function wy(e) {
  const { value: n } = e._hover, r = yy(e);
  Object.keys(n).forEach((o) => {
    const t = pa(o);
    n[t] != null && r[t] && (e._hover.rawStyle[t] = r[t]);
  });
}
function fu(e, n) {
  Object.keys(n).forEach((r) => {
    const o = n[r];
    o != null && (e.style[r] = o);
  });
}
function ky(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function hv(e) {
  e?._hover != null && (ky(e), fu(e, e._hover.rawStyle));
}
function gv() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, fn(e)) {
    e(this._hover.hovering);
    return;
  }
  fu(this, e);
}
function bv() {
  if (this._hover.hovering = !1, fn(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  hv(this);
}
function yv(e, n) {
  var r, o;
  const { arg: t, value: a } = n;
  mv(t) || (e._hover = {
    value: a,
    hovering: (o = (r = e._hover) == null ? void 0 : r.hovering) != null ? o : !1,
    rawStyle: {}
  }, wy(e), e.addEventListener("mouseenter", gv), e.addEventListener("mouseleave", bv));
}
function wv(e, n) {
  mv(n.arg) || (hv(e), e.removeEventListener("mouseenter", gv), e.removeEventListener("mouseleave", bv));
}
function $y(e, n) {
  e._hover && wv(e, n);
}
function Cy(e, n) {
  return !fn(n.value) && e._hover.hovering;
}
function Sy(e, n) {
  yv(e, n), Cy(e, n) && fu(e, n.value);
}
var kv = {
  mounted: yv,
  unmounted: wv,
  beforeUpdate: $y,
  updated: Sy,
  install(e) {
    e.directive("hover", this);
  }
}, dB = kv, Rn = kv, $v = {
  hovering: Boolean,
  focusing: Boolean
}, { name: Oy, n: Py, classes: zy } = ee("hover-overlay");
function Ty(e, n) {
  return g(), S("div", { class: p(e.classes(e.n(), [e.hovering, e.n("--hovering")], [e.focusing && !e.inMobile(), e.n("--focusing")])) }, null, 2);
}
var Cv = _({
  name: Oy,
  props: $v,
  setup: () => ({
    n: Py,
    classes: zy,
    inMobile: Do
  })
});
Cv.render = Ty;
var ya = Cv;
te(ya);
le(ya, $v);
function or() {
  const e = y(!1);
  return {
    hovering: e,
    handleHovering: (r) => {
      e.value = r;
    }
  };
}
var cB = ya, Wn = ya;
function Ey(e) {
  const { left: n } = tn(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function od(e) {
  const { top: n } = tn(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function sl(e) {
  const { transform: n } = er(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Mr(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const r = /(scroll|auto)/, { overflowY: o, overflow: t } = er(n);
    if (r.test(o) || r.test(t)) return n;
  }
  return window;
}
function Iy(e) {
  const n = [];
  let r = e;
  for (; !va(r); )
    r = Mr(r), n.push(r);
  return n;
}
function Sv(e, n) {
  if (an(e)) {
    const r = document.querySelector(e);
    return Yn(!!r, n, "target element cannot found"), r;
  }
  return Yn(rr(e), n, 'type of prop "target" should be an element object'), e;
}
function By() {
  const { width: e, height: n } = tn(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
var Dy = (e) => an(e) && e.endsWith("rem"), My = (e) => an(e) && e.endsWith("px") || En(e), Ay = (e) => an(e) && e.endsWith("vw"), Ny = (e) => an(e) && e.endsWith("vh"), Vy = (e) => an(e) && e.endsWith("vmin"), Ry = (e) => an(e) && e.endsWith("vmax"), on = (e) => {
  if (eu(e)) return Number(e);
  if (My(e)) return +e.replace("px", "");
  if (!tr()) return 0;
  const { vw: n, vh: r, vMin: o, vMax: t } = By();
  if (Ay(e)) return +e.replace("vw", "") * n / 100;
  if (Ny(e)) return +e.replace("vh", "") * r / 100;
  if (Vy(e)) return +e.replace("vmin", "") * o / 100;
  if (Ry(e)) return +e.replace("vmax", "") * t / 100;
  if (Dy(e)) {
    const a = +e.replace("rem", ""), i = er(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return an(e) ? H(e) : 0;
}, ze = (e) => {
  if (e != null)
    return eu(e) ? `${e}px` : String(e);
}, Dn = (e, n = 1) => {
  if (e == null) return;
  const r = ze(e), o = r.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
  return `${parseFloat(r) * n}${o}`;
};
function No(e, { top: n = 0, left: r = 0, duration: o = 300, animation: t }) {
  const a = Date.now(), i = Br(e), l = ma(e);
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
function Ov(e) {
  return Object.entries(e ?? {}).reduce((n, [r, o]) => {
    const t = r.startsWith("--") ? r : `--${nu(r)}`;
    return n[t] = o, n;
  }, {});
}
function Jt(e) {
  return e === "start" || e === "end" ? `flex-${e}` : e;
}
function Ly(e) {
  let n = e;
  for (; n && n !== document.documentElement; ) {
    if (er(n).display === "none") return !0;
    n = n.parentNode;
  }
  return !1;
}
var td = [
  "button",
  "input",
  "select",
  "textarea",
  "[tabindex]",
  "[href]"
].map((e) => `${e}:not([disabled])`).join(", ");
function vu(e, n, r, o) {
  const t = Array.from(n.querySelectorAll(td)).filter((s) => !Ly(s));
  if (!t.length) return;
  const a = [e, ...Array.from(e.querySelectorAll(td))].findIndex((s) => s === document.activeElement) !== -1, i = Array.from(t).findIndex((s) => s === document.activeElement);
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
var sn = {
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
}, Fy = (e, n, r) => new Promise((o, t) => {
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
}), { name: Uy, n: Hy, classes: jy } = ee("icon");
function Yy(e, n) {
  return g(), ye(po(e.isURL(e.name) ? "img" : "i"), {
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
var Pv = _({
  name: Uy,
  props: sn,
  setup(e) {
    const n = y(""), r = y(!1);
    ve(() => e.name, o, { immediate: !0 });
    function o(t, a) {
      return Fy(this, null, function* () {
        const { transition: i } = e;
        if (a == null || H(i) === 0) {
          n.value = t;
          return;
        }
        r.value = !0, yield Fe(), setTimeout(() => {
          a != null && (n.value = t), r.value = !1;
        }, H(i));
      });
    }
    return {
      nextName: n,
      animateInProgress: r,
      n: Hy,
      classes: jy,
      isURL: V0,
      toNumber: H,
      toSizeUnit: ze
    };
  }
});
Pv.render = Yy;
var wa = Pv;
te(wa);
le(wa, sn);
var fB = wa, xe = wa, { name: Wy, n: Ky, classes: qy } = ee("action-sheet");
function Xy(e, n) {
  const r = Q("var-icon"), o = Q("var-hover-overlay"), t = qe("ripple"), a = qe("hover");
  return Ne((g(), S("div", {
    class: p(e.classes(e.n("action-item"), e.className, [e.disabled, e.n("--disabled")])),
    style: q({ color: e.color })
  }, [
    e.icon ? (g(), ye(r, {
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
    N("div", { class: p(e.n("action-name")) }, ie(e.name), 3),
    X(o, { hovering: e.disabled ? !1 : e.hovering }, null, 8, ["hovering"])
  ], 6)), [[t, { disabled: e.disabled }], [
    a,
    e.handleHovering,
    "desktop"
  ]]);
}
var zv = _({
  name: Wy,
  components: {
    VarHoverOverlay: Wn,
    VarIcon: xe
  },
  directives: {
    Ripple: un,
    Hover: Rn
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
    const { hovering: e, handleHovering: n } = or();
    return {
      hovering: e,
      n: Ky,
      classes: qy,
      handleHovering: n
    };
  }
});
zv.render = Xy;
var Gy = zv, Zy = Object.defineProperty, ad = Object.getOwnPropertySymbols, Jy = Object.prototype.hasOwnProperty, Qy = Object.prototype.propertyIsEnumerable, id = (e, n, r) => n in e ? Zy(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, xy = (e, n) => {
  for (var r in n || (n = {})) Jy.call(n, r) && id(e, r, n[r]);
  if (ad)
    for (var r of ad(n)) Qy.call(n, r) && id(e, r, n[r]);
  return e;
}, Tv = xy({
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
}, De(bo, [
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
])), { name: _y, n: e1, classes: n1 } = ee("action-sheet");
function r1(e, n) {
  const r = Q("var-action-item"), o = Q("var-popup");
  return g(), ye(o, {
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
    default: fe(() => [N("div", We({ class: e.classes(e.n(), e.n("$--box")) }, e.$attrs), [F(e.$slots, "title", {}, () => {
      var t;
      return [N("div", { class: p(e.n("title")) }, ie((t = e.title) != null ? t : (e.pt ? e.pt : e.t)("actionSheetTitle")), 3)];
    }), F(e.$slots, "actions", {}, () => [(g(!0), S(Ae, null, Ge(e.actions, (t) => (g(), ye(r, {
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
var Ev = _({
  name: _y,
  directives: { Ripple: un },
  components: {
    VarPopup: Dr,
    VarActionItem: Gy
  },
  inheritAttrs: !1,
  props: Tv,
  setup(e) {
    const n = Tn(e, "show"), { t: r } = ir();
    function o(t) {
      if (t.disabled) return;
      const { closeOnClickAction: a, onSelect: i } = e;
      k(i, t), a && (n.value = !1);
    }
    return {
      show: n,
      pt: r,
      t: ln,
      n: e1,
      classes: n1,
      handleSelect: o
    };
  }
});
Ev.render = r1;
var tt = Ev, o1 = Object.defineProperty, ld = Object.getOwnPropertySymbols, t1 = Object.prototype.hasOwnProperty, a1 = Object.prototype.propertyIsEnumerable, sd = (e, n, r) => n in e ? o1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, ud = (e, n) => {
  for (var r in n || (n = {})) t1.call(n, r) && sd(e, r, n[r]);
  if (ld)
    for (var r of ld(n)) a1.call(n, r) && sd(e, r, n[r]);
  return e;
}, $r, pu = {};
function i1(e = {}) {
  return ud(ud({}, pu), e);
}
function Vr(e) {
  return tr() ? new Promise((n) => {
    Vr.close();
    const r = rn(i1(e));
    r.teleport = "body", $r = r;
    const { unmountInstance: o } = go(tt, r, {
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
Vr.setDefaultOptions = function(e) {
  pu = e;
};
Vr.resetDefaultOptions = function() {
  pu = {};
};
Vr.close = function() {
  if ($r != null) {
    const e = $r;
    $r = null, Fe().then(() => {
      e.show = !1;
    });
  }
};
Vr.Component = tt;
te(tt);
te(tt, Vr);
le(Vr, Tv);
var vB = tt, Cl = Vr, Iv = {
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
}, { name: l1, n: s1, classes: u1 } = ee("alert"), d1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  danger: "error"
};
function c1(e, n) {
  const r = Q("var-icon");
  return g(), S("div", {
    class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), e.n(`--${e.type}`), e.formatElevation(e.elevation, 2))),
    style: q({ "background-color": e.color }),
    role: "alert"
  }, [
    e.isInternalType || e.$slots.icon ? (g(), S("div", {
      key: 0,
      class: p(e.n("icon"))
    }, [F(e.$slots, "icon", {}, () => [e.isInternalType ? (g(), ye(r, {
      key: 0,
      name: e.iconTypeMap[e.type]
    }, null, 8, ["name"])) : K("v-if", !0)])], 2)) : K("v-if", !0),
    F(e.$slots, "content", {}, () => [N("div", { class: p(e.n("content")) }, [e.title || e.$slots.title ? (g(), S("div", {
      key: 0,
      class: p(e.n("title"))
    }, [F(e.$slots, "title", {}, () => [Be(ie(e.title), 1)])], 2)) : K("v-if", !0), e.message || e.$slots.default ? (g(), S("div", {
      key: 1,
      class: p(e.n("message"))
    }, [F(e.$slots, "default", {}, () => [Be(ie(e.message), 1)])], 2)) : K("v-if", !0)], 2)]),
    e.closeable ? (g(), S("div", {
      key: 1,
      class: p(e.n("close-icon")),
      onClick: n[0] || (n[0] = (...o) => e.handleClose && e.handleClose(...o))
    }, [F(e.$slots, "close-icon", {}, () => [X(r, { name: "close-circle" })])], 2)) : K("v-if", !0)
  ], 6);
}
var Bv = _({
  name: l1,
  components: { VarIcon: xe },
  props: Iv,
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
      n: s1,
      classes: u1,
      iconTypeMap: d1,
      isInternalType: n,
      formatElevation: vn,
      handleClose: r
    };
  }
});
Bv.render = c1;
var ka = Bv;
te(ka);
le(ka, Iv);
var pB = ka, Sl = ka, Dv = {
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
}, { name: f1, n: v1, classes: p1 } = ee("app-bar");
function m1(e, n) {
  return g(), S(Ae, null, [N("div", We({
    ref: "appBar",
    class: e.classes(e.n(), e.n("$--box"), [e.safeAreaTop, e.n("--safe-area-top")], [e.round, e.n("--round")], [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], e.formatElevation(e.elevation, 3)),
    style: e.rootStyles
  }, e.$attrs), [N("div", { class: p(e.n("toolbar")) }, [
    N("div", { class: p(e.n("left")) }, [F(e.$slots, "left"), e.titlePosition === "left" ? (g(), S("div", {
      key: 0,
      class: p(e.n("title")),
      style: q({ paddingLeft: e.paddingLeft })
    }, [F(e.$slots, "default", {}, () => [Be(ie(e.title), 1)])], 6)) : K("v-if", !0)], 2),
    e.titlePosition === "center" ? (g(), S("div", {
      key: 0,
      class: p(e.n("title"))
    }, [F(e.$slots, "default", {}, () => [Be(ie(e.title), 1)])], 2)) : K("v-if", !0),
    N("div", { class: p(e.n("right")) }, [e.titlePosition === "right" ? (g(), S("div", {
      key: 0,
      class: p(e.n("title")),
      style: q({ paddingRight: e.paddingRight })
    }, [F(e.$slots, "default", {}, () => [Be(ie(e.title), 1)])], 6)) : K("v-if", !0), F(e.$slots, "right")], 2)
  ], 2), F(e.$slots, "content")], 16), e.fixed && e.placeholder ? (g(), S("div", {
    key: 0,
    class: p(e.n("placeholder")),
    style: q({ height: e.placeholderHeight })
  }, null, 6)) : K("v-if", !0)], 64);
}
var Mv = _({
  name: f1,
  props: Dv,
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
    ar(s), yn(() => {
      l(), s();
    }), Qo(l);
    function l() {
      o.value = n.left ? 0 : void 0, t.value = n.right ? 0 : void 0;
    }
    function s() {
      if (!e.fixed || !e.placeholder) return;
      const { height: u } = tn(r.value);
      a.value = ze(u);
    }
    return {
      rootStyles: i,
      paddingLeft: o,
      paddingRight: t,
      n: v1,
      classes: p1,
      formatElevation: vn,
      appBar: r,
      placeholderHeight: a
    };
  }
});
Mv.render = m1;
var $a = Mv;
te($a);
le($a, Dv);
var mB = $a, Ol = $a, Av = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: h1, n: g1 } = ee("form-details"), b1 = { key: 0 }, y1 = { key: 0 };
function w1(e, n) {
  return g(), ye(nn, { name: e.n() }, {
    default: fe(() => [e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (g(), S("div", {
      key: 0,
      class: p(e.n())
    }, [N("div", { class: p(e.n("error-message")) }, [X(nn, { name: e.n("message") }, {
      default: fe(() => [e.errorMessage ? (g(), S("div", b1, ie(e.errorMessage), 1)) : K("v-if", !0)]),
      _: 1
    }, 8, ["name"])], 2), N("div", { class: p(e.n("extra-message")) }, [X(nn, { name: e.n("message") }, {
      default: fe(() => [F(e.$slots, "extra-message", {}, () => [e.extraMessage ? (g(), S("div", y1, ie(e.extraMessage), 1)) : K("v-if", !0)])]),
      _: 3
    }, 8, ["name"])], 2)], 2)) : K("v-if", !0)]),
    _: 3
  }, 8, ["name"]);
}
var Nv = _({
  name: h1,
  props: Av,
  setup: () => ({ n: g1 })
});
Nv.render = w1;
var Ca = Nv;
te(Ca);
le(Ca, Av);
var hB = Ca, An = Ca, k1 = Object.defineProperty, $1 = Object.defineProperties, C1 = Object.getOwnPropertyDescriptors, dd = Object.getOwnPropertySymbols, S1 = Object.prototype.hasOwnProperty, O1 = Object.prototype.propertyIsEnumerable, cd = (e, n, r) => n in e ? k1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, P1 = (e, n) => {
  for (var r in n || (n = {})) S1.call(n, r) && cd(e, r, n[r]);
  if (dd)
    for (var r of dd(n)) O1.call(n, r) && cd(e, r, n[r]);
  return e;
}, z1 = (e, n) => $1(e, C1(n)), Vv = /* @__PURE__ */ Symbol("FORM_BIND_FORM_ITEM_KEY");
function Xn() {
  const { parentProvider: e, index: n, bindParent: r } = wn(Vv), o = Zr();
  return {
    index: n,
    form: e,
    bindForm: r ? (t) => {
      r(z1(P1({}, t), { instance: o }));
    } : null
  };
}
function T1() {
  const { childProviders: e, length: n, bindChildren: r } = kn(Vv);
  return {
    length: n,
    formItems: e,
    bindFormItems: r
  };
}
var Rv = /* @__PURE__ */ Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), Lv = /* @__PURE__ */ Symbol("SWIPE_RESIZE_DISPATCHER_BIND_SWIPE_RESIZE_LISTENER_KEY");
function E1() {
  const { childProviders: e, length: n, bindChildren: r } = kn(Rv);
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: r
  };
}
function I1() {
  const { childProviders: e, bindChildren: n } = kn(Lv);
  return {
    swipeResizeListeners: e,
    bindSwipeResizeListeners: n
  };
}
function B1() {
  const { parentProvider: e, bindParent: n } = wn(Lv);
  return {
    swipeResizeDispatcher: e,
    bindSwipeResizeDispatcher: n
  };
}
var Sa = {
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
}, D1 = (e, n, r) => new Promise((o, t) => {
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
}), { name: M1, n: ul, classes: A1 } = ee("field-decorator"), N1 = ["for"];
function V1(e, n) {
  const r = Q("var-icon");
  return g(), S("div", {
    class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
    onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
  }, [N("div", {
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
    N("div", { class: p(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")])) }, [F(e.$slots, "prepend-icon")], 2),
    N("div", {
      ref: "middleEl",
      class: p(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
    }, [F(e.$slots, "default")], 2),
    e.placeholder && e.hint ? (g(), S("label", {
      key: 0,
      class: p(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocusing, e.n("--focus")], [e.hintCenter, e.n("--hint-center")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.isError, e.n("--error")], [e.transitionDisabled, e.n("--transition-disabled")], e.computePlaceholderState())),
      style: q({ color: e.color }),
      for: e.id
    }, [N("span", null, ie(e.placeholder), 1)], 14, N1)) : K("v-if", !0),
    N("div", { class: p(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")])) }, [e.clearable && !e.isEmpty(e.value) && !e.readonly && !e.formReadonly ? F(e.$slots, "clear-icon", {
      key: 0,
      clear: e.handleClear
    }, () => [X(r, {
      class: p(e.n("clear-icon")),
      "var-field-decorator-cover": "",
      name: "close-circle",
      onClick: e.handleClear
    }, null, 8, ["class", "onClick"])]) : K("v-if", !0), F(e.$slots, "append-icon")], 2)
  ], 6), e.line ? (g(), S(Ae, { key: 0 }, [e.variant === "outlined" ? (g(), S("fieldset", {
    key: 0,
    class: p(e.classes(e.n("line"), [e.isFocusing, e.n("--line-focus")], [e.isError, e.n("--line-error")], [e.formDisabled || e.disabled, e.n("--line-disabled")])),
    style: q({ borderColor: e.color })
  }, [N("legend", {
    class: p(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
    style: q({ width: e.legendWidth })
  }, [e.placeholder && e.hint ? (g(), ye(cr, {
    key: 0,
    to: "body"
  }, [N("span", {
    ref: "placeholderTextEl",
    class: p(e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")]))
  }, ie(e.placeholder), 3)])) : K("v-if", !0)], 6)], 6)) : (g(), S("div", {
    key: 1,
    class: p(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.isError, e.n("--line-error")])),
    style: q({ background: e.isError ? void 0 : e.blurColor })
  }, [N("div", {
    class: p(e.classes(e.n("dot"), [e.isFocusing, e.n("--line-focus")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.isError, e.n("--line-error")])),
    style: q({ background: e.isError ? void 0 : e.focusColor })
  }, null, 6)], 6))], 64)) : K("v-if", !0)], 2);
}
var Fv = _({
  name: M1,
  components: { VarIcon: xe },
  props: Sa,
  setup(e) {
    const n = y(null), r = y(null), o = y(""), t = y("0px"), a = y("0px"), i = y("0px"), l = y(!0), s = E(() => e.hint && (!Jn(e.value) || e.isFocusing)), { popup: u, bindPopup: d } = dv(), { bindSwipeResizeDispatcher: c } = B1(), f = E(() => e.isError ? void 0 : e.isFocusing ? e.focusColor : e.blurColor);
    ar(w), yn(() => {
      w(), Fe().then(() => {
        l.value = !1;
      });
    }), Qo(w), k(d, null), k(c, { onResize() {
      Fe().then(w);
    } }), u && ve(() => u.show.value, ($) => D1(null, null, function* () {
      $ && (yield Pn(), w());
    }));
    function v() {
      const { hint: $, value: C, composing: b } = e;
      if (!$ && (!Jn(C) || b)) return ul("--placeholder-hidden");
      if (s.value) return ul("--placeholder-hint");
    }
    function m($) {
      k(e.onClear, $);
    }
    function h($) {
      k(e.onClick, $);
    }
    function w() {
      if (t.value = `${r.value.offsetLeft}px`, a.value = `${r.value.offsetWidth}px`, i.value = `${r.value.offsetHeight}px`, e.variant === "outlined" && n.value) {
        const $ = er(n.value), C = `var(--field-decorator-outlined-${e.size}-placeholder-space)`;
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
      n: ul,
      classes: A1,
      isEmpty: Jn,
      handleClear: m,
      handleClick: h
    };
  }
});
Fv.render = V1;
var Oa = Fv;
te(Oa);
le(Oa, Sa);
var gB = Oa, Vo = Oa, R1 = Object.defineProperty, L1 = Object.defineProperties, F1 = Object.getOwnPropertyDescriptors, fd = Object.getOwnPropertySymbols, U1 = Object.prototype.hasOwnProperty, H1 = Object.prototype.propertyIsEnumerable, vd = (e, n, r) => n in e ? R1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, j1 = (e, n) => {
  for (var r in n || (n = {})) U1.call(n, r) && vd(e, r, n[r]);
  if (fd)
    for (var r of fd(n)) H1.call(n, r) && vd(e, r, n[r]);
  return e;
}, Y1 = (e, n) => L1(e, F1(n)), mu = Y1(j1({
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
}, De(Sa, [
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
}), { name: W1, n: K1, classes: q1 } = ee("input"), X1 = [
  "aria-label",
  "placeholder",
  "enterkeyhint"
], G1 = [
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
], Z1 = [
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
function J1(e, n) {
  const r = Q("var-field-decorator"), o = Q("var-form-details");
  return g(), S("div", {
    class: p(e.classes(e.n(), e.n("$--box"))),
    onMousedown: n[12] || (n[12] = (...t) => e.handleMousedown && e.handleMousedown(...t))
  }, [X(r, jr(da({
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
  })), Wr({
    "clear-icon": fe(({ clear: t }) => [F(e.$slots, "clear-icon", { clear: t })]),
    "append-icon": fe(() => [F(e.$slots, "append-icon")]),
    default: fe(() => [e.normalizedType === "password" && e.preventAutoFill ? (g(), S("input", {
      key: 0,
      tabindex: "-1",
      "aria-label": e.ariaLabel,
      class: p(e.n("autocomplete")),
      placeholder: e.hint ? void 0 : e.placeholder,
      style: q({ "--input-placeholder-color": e.placeholderColor }),
      enterkeyhint: e.enterkeyhint
    }, null, 14, X1)) : K("v-if", !0), e.textarea ? (g(), S("textarea", {
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
    }, null, 46, G1)) : (g(), S("input", {
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
    }, null, 46, Z1))]),
    _: 2
  }, [e.$slots["prepend-icon"] ? {
    name: "prepend-icon",
    fn: fe(() => [F(e.$slots, "prepend-icon")]),
    key: "0"
  } : void 0]), 1040), e.isShowFormDetails ? (g(), ye(o, {
    key: 0,
    "error-message": e.errorMessage,
    "extra-message": e.maxlengthText
  }, Wr({ _: 2 }, [e.$slots["extra-message"] ? {
    name: "extra-message",
    fn: fe(() => [F(e.$slots, "extra-message")]),
    key: "0"
  } : void 0]), 1032, ["error-message", "extra-message"])) : K("v-if", !0)], 34);
}
var Uv = _({
  name: W1,
  components: {
    VarFormDetails: An,
    VarFieldDecorator: Vo
  },
  props: mu,
  setup(e) {
    const n = _f(), r = y(null), o = y(!1), t = y(!1), { bindForm: a, form: i } = Xn(), { errorMessage: l, validateWithTrigger: s, validate: u, resetValidation: d } = qn(), c = E(() => e.disabled || e.readonly ? "" : "text"), f = E(() => e.type === "number" ? "text" : e.type), v = E(() => {
      const { maxlength: Z, modelValue: re } = e;
      return Z ? Jn(re) ? `0 / ${Z}` : `${String(re).length}/${Z}` : "";
    }), m = E(() => {
      const { hint: Z, blurColor: re, focusColor: Ce } = e;
      if (!Z)
        return l.value ? "var(--field-decorator-error-color)" : o.value ? Ce || "var(--field-decorator-focus-color)" : re || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    });
    k(a, {
      reset: U,
      validate: L,
      resetValidation: d
    }), yn(() => {
      e.autofocus && z();
    });
    function h(Z) {
      Fe(() => {
        const { validateTrigger: re, rules: Ce, modelValue: oe } = e;
        s(re, Z, Ce, oe);
      });
    }
    function w(Z) {
      o.value = !0, k(e.onFocus, Z), h("onFocus");
    }
    function $(Z) {
      o.value = !1, k(e.onBlur, Z), h("onBlur");
    }
    function C(Z) {
      const re = Z.target;
      let { value: Ce } = re;
      e.type === "number" && (Ce = A(Ce));
      const oe = T(Ce);
      return oe === e.modelValue && (re.value = oe), oe;
    }
    function b() {
      t.value = !0;
    }
    function P(Z) {
      t.value && (t.value = !1, Z.target.dispatchEvent(new Event("input")));
    }
    function O(Z) {
      if (t.value) return;
      const re = C(Z);
      k(e["onUpdate:modelValue"], re), k(e.onInput, re, Z), h("onInput");
    }
    function I(Z) {
      const re = B(C(Z));
      e.modelModifiers.trim && k(e["onUpdate:modelValue"], re), k(e.onChange, re, Z), h("onChange");
    }
    function j() {
      const { disabled: Z, readonly: re, clearable: Ce, onClear: oe } = e;
      i?.disabled.value || i?.readonly.value || Z || re || !Ce || (k(e["onUpdate:modelValue"], ""), k(oe, ""), h("onClear"));
    }
    function M(Z) {
      const { disabled: re, onClick: Ce } = e;
      i?.disabled.value || re || (k(Ce, Z), h("onClick"));
    }
    function A(Z) {
      const re = Z.indexOf("-"), Ce = Z.indexOf(".");
      return re > -1 && (Z = re === 0 ? "-" + Z.replace(/-/g, "") : Z.replace(/-/g, "")), Ce > -1 && (Z = Z.slice(0, Ce + 1) + Z.slice(Ce).replace(/\./g, "")), Z.replace(/[^-0-9.]/g, "");
    }
    function B(Z) {
      return e.modelModifiers.trim ? Z.trim() : Z;
    }
    function T(Z) {
      return e.maxlength ? Z.slice(0, H(e.maxlength)) : Z;
    }
    function D(Z) {
      const { disabled: re } = e;
      i?.disabled.value || re || Z.target === r.value || (z(), Re(Z));
    }
    function U() {
      k(e["onUpdate:modelValue"], ""), d();
    }
    function L() {
      return u(e.rules, e.modelValue);
    }
    function z() {
      var Z;
      (Z = r.value) == null || Z.focus();
    }
    function V() {
      r.value.blur();
    }
    function ae() {
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
      n: K1,
      classes: q1,
      isEmpty: Jn,
      handleFocus: w,
      handleBlur: $,
      handleInput: O,
      handleChange: I,
      handleClear: j,
      handleClick: M,
      handleCompositionStart: b,
      handleCompositionEnd: P,
      handleMousedown: D,
      validate: L,
      resetValidation: d,
      reset: U,
      focus: z,
      blur: V,
      select: ae
    };
  }
});
Uv.render = J1;
var Pa = Uv;
te(Pa);
le(Pa, mu);
var bB = Pa, Ro = Pa, Hv = {
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
function Q1() {
  const { bindChildren: e, childProviders: n, length: r } = kn(jv);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function x1() {
  const { bindParent: e, parentProvider: n, index: r } = wn(jv);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
var { name: _1, n: ew, classes: nw } = ee("checkbox"), rw = [
  "aria-checked",
  "aria-disabled",
  "tabindex"
];
function ow(e, n) {
  const r = Q("var-icon"), o = Q("var-hover-overlay"), t = Q("var-form-details"), a = qe("hover"), i = qe("ripple");
  return g(), S("div", { class: p(e.n("wrap")) }, [N("div", {
    ref: "checkbox",
    role: "checkbox",
    "aria-checked": e.isIndeterminate ? "mixed" : e.checked,
    "aria-disabled": e.formDisabled || e.disabled,
    class: p(e.n()),
    tabindex: e.tabindex == null ? e.disabled || e.formDisabled ? void 0 : "0" : e.tabindex,
    onFocus: n[1] || (n[1] = (l) => e.isFocusing = !0),
    onBlur: n[2] || (n[2] = (l) => e.isFocusing = !1),
    onClick: n[3] || (n[3] = (...l) => e.handleClick && e.handleClick(...l))
  }, [Ne((g(), S("div", {
    class: p(e.classes(e.n("action"), [
      e.checked || e.isIndeterminate,
      e.n("--checked"),
      e.n("--unchecked")
    ], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    style: q({ color: e.checked || e.isIndeterminate ? e.checkedColor : e.uncheckedColor })
  }, [
    e.isIndeterminate ? F(e.$slots, "indeterminate-icon", { key: 0 }, () => [X(r, {
      class: p(e.n("icon")),
      name: "minus-box",
      size: e.iconSize,
      "var-checkbox-cover": ""
    }, null, 8, ["class", "size"])]) : K("v-if", !0),
    e.checked && !e.isIndeterminate ? F(e.$slots, "checked-icon", { key: 1 }, () => [X(r, {
      class: p(e.n("icon")),
      name: "checkbox-marked",
      size: e.iconSize,
      "var-checkbox-cover": ""
    }, null, 8, ["class", "size"])]) : K("v-if", !0),
    !e.checked && !e.isIndeterminate ? F(e.$slots, "unchecked-icon", { key: 2 }, () => [X(r, {
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
  }, [F(e.$slots, "default", { checked: e.checked })], 2)) : K("v-if", !0)], 42, rw), X(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var Yv = _({
  name: _1,
  directives: {
    Ripple: un,
    Hover: Rn
  },
  components: {
    VarIcon: xe,
    VarFormDetails: An,
    VarHoverOverlay: Wn
  },
  props: Hv,
  setup(e) {
    const n = y(null), r = y(!1), o = Tn(e, "modelValue"), t = Tn(e, "indeterminate"), a = E(() => o.value === e.checkedValue), i = E(() => e.checkedValue), { checkboxGroup: l, bindCheckboxGroup: s } = x1(), { hovering: u, handleHovering: d } = or(), { form: c, bindForm: f } = Xn(), { errorMessage: v, validateWithTrigger: m, validate: h, resetValidation: w } = qn(), $ = {
      checkedValue: i,
      checked: a,
      sync: I,
      validate: T,
      resetValidation: w,
      reset: j
    };
    k(s, $), k(f, $), Ye(() => window, "keydown", A), Ye(() => window, "keyup", B);
    function C(D) {
      Fe(() => {
        const { validateTrigger: U, rules: L, modelValue: z } = e;
        m(U, D, L, z);
      });
    }
    function b(D) {
      const { checkedValue: U, onChange: L } = e;
      o.value = D, k(L, o.value, t.value), C("onChange"), D === U ? l?.onChecked(U) : l?.onUnchecked(U);
    }
    function P(D) {
      const { disabled: U, readonly: L, checkedValue: z, uncheckedValue: V, onClick: ae } = e;
      if (c?.disabled.value || U || (k(ae, D), c?.readonly.value || L)) return;
      if (t.value === !0) {
        t.value = !1, k(e.onChange, o.value, t.value), C("onChange");
        return;
      }
      const Z = l ? l.checkedCount.value >= Number(l.max.value) : !1;
      !a.value && Z || b(a.value ? V : z);
    }
    function O() {
      n.value.focus();
    }
    function I(D) {
      const { checkedValue: U, uncheckedValue: L } = e;
      o.value = D.includes(U) ? U : L;
    }
    function j() {
      o.value = e.uncheckedValue, w();
    }
    function M(D) {
      const { checkedValue: U, uncheckedValue: L } = e;
      [U, L].includes(D) || (D = a.value ? L : U), b(D);
    }
    function A(D) {
      if (!r.value) return;
      const { key: U } = D;
      (U === "Enter" || U === " ") && Re(D), U === "Enter" && n.value.click();
    }
    function B(D) {
      r.value && D.key === " " && (Re(D), n.value.click());
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
      n: ew,
      classes: nw,
      handleHovering: d,
      handleClick: P,
      handleTextClick: O,
      toggle: M,
      reset: j,
      validate: T,
      resetValidation: w
    };
  }
});
Yv.render = ow;
var za = Yv;
te(za);
le(za, Hv);
var yB = za, to = za, Wv = {
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
}, Kv = /* @__PURE__ */ Symbol("MENU_SELECT_BIND_MENU_OPTION_KEY");
function tw() {
  const { length: e, childProviders: n, bindChildren: r } = kn(Kv);
  return {
    length: e,
    menuOptions: n,
    bindMenuOptions: r
  };
}
function aw() {
  const { index: e, parentProvider: n, bindParent: r } = wn(Kv);
  return Yn(!!r, "MenuOption", "<var-menu-option/> must in <var-menu-select/>"), {
    index: e,
    menuSelect: n,
    bindMenuSelect: r
  };
}
var iw = (e, n, r) => new Promise((o, t) => {
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
}), { name: lw, n: sw, classes: uw } = ee("menu-option"), dw = ["tabindex"];
function cw(e, n) {
  const r = Q("var-checkbox"), o = Q("maybe-v-node"), t = Q("var-icon"), a = Q("var-hover-overlay"), i = qe("ripple"), l = qe("hover");
  return Ne((g(), S("div", {
    ref: "root",
    class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.size}`), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")], [e.childrenTrigger, e.n("--children-trigger")])),
    tabindex: e.disabled ? void 0 : "-1",
    onClick: n[3] || (n[3] = (...s) => e.handleClick && e.handleClick(...s)),
    onFocus: n[4] || (n[4] = (s) => e.isFocusing = !0),
    onBlur: n[5] || (n[5] = (s) => e.isFocusing = !1)
  }, [
    N("div", { class: p(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])) }, null, 2),
    e.multiple ? (g(), ye(r, {
      key: 0,
      ref: "checkbox",
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (s) => e.optionSelected = s),
      indeterminate: e.optionIndeterminate,
      "onUpdate:indeterminate": n[1] || (n[1] = (s) => e.optionIndeterminate = s),
      disabled: e.disabled,
      onClick: n[2] || (n[2] = jn(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, [
      "modelValue",
      "indeterminate",
      "disabled",
      "onChange"
    ])) : K("v-if", !0),
    F(e.$slots, "default", {}, () => [N("div", { class: p(e.classes(e.n("text"))) }, [X(o, {
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
  ], 42, dw)), [[i, { disabled: e.disabled || !e.ripple }], [
    l,
    e.handleHovering,
    "desktop"
  ]]);
}
var qv = _({
  name: lw,
  directives: {
    Ripple: un,
    Hover: Rn
  },
  components: {
    VarCheckbox: to,
    VarHoverOverlay: Wn,
    VarIcon: xe,
    MaybeVNode: nt
  },
  props: Wv,
  setup(e) {
    const n = y(), r = y(), o = y(!1), t = y(!1), a = y(!1), i = E(() => t.value), l = E(() => a.value), s = E(() => e.value), u = E(() => e.disabled), d = E(() => e.ripple), { menuSelect: c, bindMenuSelect: f } = aw(), { size: v, multiple: m, onSelect: h, computeLabel: w } = c, { hovering: $, handleHovering: C } = or(), b = E(() => {
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
    ve([() => e.label, () => e.value], w), f(P), Ye(() => window, "keydown", I), Ye(() => window, "keyup", j);
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
      !o.value && !((T = r.value) != null && T.isFocusing) || ((B.key === "ArrowRight" || B.key === "ArrowLeft") && (Re(B), k(e.onKeyArrowX, B.key)), o.value && ((B.key === " " || B.key === "Enter") && Re(B), B.key === "Enter" && n.value.click()));
    }
    function j(B) {
      o.value && B.key === " " && (Re(B), n.value.click());
    }
    function M() {
      return iw(this, null, function* () {
        yield Fe(), h(P);
      });
    }
    function A(B, T) {
      t.value = B, et(T) && (a.value = T);
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
      n: sw,
      classes: uw,
      handleHovering: C,
      handleClick: O,
      handleSelect: M
    };
  }
});
qv.render = cw;
var at = qv;
te(at);
le(at, Wv);
var wB = at, ao = at, hu = {
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
var Lo = "bottom", Ta = "right", Ea = "left", fw = "auto", Ia = [
  "top",
  Lo,
  Ta,
  Ea
], Ba = "start";
var vw = "clippingParents", pw = "viewport", pd = "popper", mw = "reference", md = /* @__PURE__ */ Ia.reduce(function(e, n) {
  return e.concat([n + "-" + Ba, n + "-end"]);
}, []), Xv = /* @__PURE__ */ [].concat(Ia, [fw]).reduce(function(e, n) {
  return e.concat([
    n,
    n + "-" + Ba,
    n + "-end"
  ]);
}, []), hw = "beforeRead", gw = "read", bw = "afterRead", yw = "beforeMain", ww = "main", kw = "afterMain", $w = "beforeWrite", Cw = "write", Sw = "afterWrite", Ow = [
  hw,
  gw,
  bw,
  yw,
  ww,
  kw,
  $w,
  Cw,
  Sw
];
function Kn(e) {
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
function hr(e) {
  return Kn(e).getComputedStyle(e);
}
function Xr(e) {
  return e instanceof Kn(e).Element || e instanceof Element;
}
function Qn(e) {
  return e instanceof Kn(e).HTMLElement || e instanceof HTMLElement;
}
function gu(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Kn(e).ShadowRoot || e instanceof ShadowRoot;
}
function Pw(e) {
  return [
    "table",
    "td",
    "th"
  ].indexOf(sr(e)) >= 0;
}
function Rr(e) {
  return ((Xr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Da(e) {
  return sr(e) === "html" ? e : e.assignedSlot || e.parentNode || (gu(e) ? e.host : null) || Rr(e);
}
function Pl() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function hd(e) {
  return !Qn(e) || hr(e).position === "fixed" ? null : e.offsetParent;
}
function zw(e) {
  var n = /firefox/i.test(Pl());
  if (/Trident/i.test(Pl()) && Qn(e) && hr(e).position === "fixed")
    return null;
  var r = Da(e);
  for (gu(r) && (r = r.host); Qn(r) && ["html", "body"].indexOf(sr(r)) < 0; ) {
    var o = hr(r);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function bu(e) {
  for (var n = Kn(e), r = hd(e); r && Pw(r) && hr(r).position === "static"; ) r = hd(r);
  return r && (sr(r) === "html" || sr(r) === "body" && hr(r).position === "static") ? n : r || zw(e) || n;
}
function Er(e) {
  return e.split("-")[0];
}
function Fo(e) {
  return e.split("-")[1];
}
var zo = Math.max, gd = Math.min, io = Math.round, Tw = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Ew(e, n) {
  var r = e.x, o = e.y, t = n.devicePixelRatio || 1;
  return {
    x: io(r * t) / t || 0,
    y: io(o * t) / t || 0
  };
}
function bd(e) {
  var n, r = e.popper, o = e.popperRect, t = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, c = e.isFixed, f = i.x, v = f === void 0 ? 0 : f, m = i.y, h = m === void 0 ? 0 : m, w = typeof d == "function" ? d({
    x: v,
    y: h
  }) : {
    x: v,
    y: h
  };
  v = w.x, h = w.y;
  var $ = i.hasOwnProperty("x"), C = i.hasOwnProperty("y"), b = Ea, P = "top", O = window;
  if (u) {
    var I = bu(r), j = "clientHeight", M = "clientWidth";
    if (I === Kn(r) && (I = Rr(r), hr(I).position !== "static" && l === "absolute" && (j = "scrollHeight", M = "scrollWidth")), I = I, t === "top" || (t === "left" || t === "right") && a === "end") {
      P = Lo;
      var A = c && I === O && O.visualViewport ? O.visualViewport.height : I[j];
      h -= A - o.height, h *= s ? 1 : -1;
    }
    if (t === "left" || (t === "top" || t === "bottom") && a === "end") {
      b = Ta;
      var B = c && I === O && O.visualViewport ? O.visualViewport.width : I[M];
      v -= B - o.width, v *= s ? 1 : -1;
    }
  }
  var T = Object.assign({ position: l }, u && Tw), D = d === !0 ? Ew({
    x: v,
    y: h
  }, Kn(r)) : {
    x: v,
    y: h
  };
  if (v = D.x, h = D.y, s) {
    var U;
    return Object.assign({}, T, (U = {}, U[P] = C ? "0" : "", U[b] = $ ? "0" : "", U.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + h + "px)" : "translate3d(" + v + "px, " + h + "px, 0)", U));
  }
  return Object.assign({}, T, (n = {}, n[P] = C ? h + "px" : "", n[b] = $ ? v + "px" : "", n.transform = "", n));
}
function Iw(e) {
  var n = e.state, r = e.options, o = r.gpuAcceleration, t = o === void 0 ? !0 : o, a = r.adaptive, i = a === void 0 ? !0 : a, l = r.roundOffsets, s = l === void 0 ? !0 : l, u = {
    placement: Er(n.placement),
    variation: Fo(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, bd(Object.assign({}, u, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, bd(Object.assign({}, u, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, { "data-popper-placement": n.placement });
}
var Gv = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Iw,
  data: {}
}, Bw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function It(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Bw[n];
  });
}
var Dw = {
  start: "end",
  end: "start"
};
function yd(e) {
  return e.replace(/start|end/g, function(n) {
    return Dw[n];
  });
}
function Zv() {
  return !/^((?!chrome|android).)*safari/i.test(Pl());
}
function lo(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var o = e.getBoundingClientRect(), t = 1, a = 1;
  n && Qn(e) && (t = e.offsetWidth > 0 && io(o.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && io(o.height) / e.offsetHeight || 1);
  var i = (Xr(e) ? Kn(e) : window).visualViewport, l = !Zv() && r, s = (o.left + (l && i ? i.offsetLeft : 0)) / t, u = (o.top + (l && i ? i.offsetTop : 0)) / a, d = o.width / t, c = o.height / a;
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
function yu(e) {
  var n = Kn(e);
  return {
    scrollLeft: n.pageXOffset,
    scrollTop: n.pageYOffset
  };
}
function wu(e) {
  return lo(Rr(e)).left + yu(e).scrollLeft;
}
function Mw(e, n) {
  var r = Kn(e), o = Rr(e), t = r.visualViewport, a = o.clientWidth, i = o.clientHeight, l = 0, s = 0;
  if (t) {
    a = t.width, i = t.height;
    var u = Zv();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: l + wu(e),
    y: s
  };
}
function Aw(e) {
  var n, r = Rr(e), o = yu(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, a = zo(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), i = zo(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -o.scrollLeft + wu(e), s = -o.scrollTop;
  return hr(t || r).direction === "rtl" && (l += zo(r.clientWidth, t ? t.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: s
  };
}
function ku(e) {
  var n = hr(e), r = n.overflow, o = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + o);
}
function Jv(e) {
  return [
    "html",
    "body",
    "#document"
  ].indexOf(sr(e)) >= 0 ? e.ownerDocument.body : Qn(e) && ku(e) ? e : Jv(Da(e));
}
function To(e, n) {
  var r;
  n === void 0 && (n = []);
  var o = Jv(e), t = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Kn(o), i = t ? [a].concat(a.visualViewport || [], ku(o) ? o : []) : o, l = n.concat(i);
  return t ? l : l.concat(To(Da(i)));
}
function Nw(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n)) return !0;
  if (r && gu(r)) {
    var o = n;
    do {
      if (o && e.isSameNode(o)) return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function zl(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Vw(e, n) {
  var r = lo(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function wd(e, n, r) {
  return n === "viewport" ? zl(Mw(e, r)) : Xr(n) ? Vw(n, r) : zl(Aw(Rr(e)));
}
function Rw(e) {
  var n = To(Da(e)), r = ["absolute", "fixed"].indexOf(hr(e).position) >= 0 && Qn(e) ? bu(e) : e;
  return Xr(r) ? n.filter(function(o) {
    return Xr(o) && Nw(o, r) && sr(o) !== "body";
  }) : [];
}
function Lw(e, n, r, o) {
  var t = n === "clippingParents" ? Rw(e) : [].concat(n), a = [].concat(t, [r]), i = a[0], l = a.reduce(function(s, u) {
    var d = wd(e, u, o);
    return s.top = zo(d.top, s.top), s.right = gd(d.right, s.right), s.bottom = gd(d.bottom, s.bottom), s.left = zo(d.left, s.left), s;
  }, wd(e, i, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Fw(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Qv(e) {
  var n = e.reference, r = e.element, o = e.placement, t = o ? Er(o) : null, a = o ? Fo(o) : null, i = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case "top":
      s = {
        x: i,
        y: n.y - r.height
      };
      break;
    case Lo:
      s = {
        x: i,
        y: n.y + n.height
      };
      break;
    case Ta:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case Ea:
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
  var u = t ? Fw(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case Ba:
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
function Uw() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Hw(e) {
  return Object.assign({}, Uw(), e);
}
function jw(e, n) {
  return n.reduce(function(r, o) {
    return r[o] = e, r;
  }, {});
}
function xv(e, n) {
  n === void 0 && (n = {});
  var r = n, o = r.placement, t = o === void 0 ? e.placement : o, a = r.strategy, i = a === void 0 ? e.strategy : a, l = r.boundary, s = l === void 0 ? vw : l, u = r.rootBoundary, d = u === void 0 ? pw : u, c = r.elementContext, f = c === void 0 ? pd : c, v = r.altBoundary, m = v === void 0 ? !1 : v, h = r.padding, w = h === void 0 ? 0 : h, $ = Hw(typeof w != "number" ? w : jw(w, Ia)), C = f === "popper" ? mw : pd, b = e.rects.popper, P = e.elements[m ? C : f], O = Lw(Xr(P) ? P : P.contextElement || Rr(e.elements.popper), s, d, i), I = lo(e.elements.reference), j = Qv({
    reference: I,
    element: b,
    strategy: "absolute",
    placement: t
  }), M = zl(Object.assign({}, b, j)), A = f === "popper" ? M : I, B = {
    top: O.top - A.top + $.top,
    bottom: A.bottom - O.bottom + $.bottom,
    left: O.left - A.left + $.left,
    right: A.right - O.right + $.right
  }, T = e.modifiersData.offset;
  if (f === "popper" && T) {
    var D = T[t];
    Object.keys(B).forEach(function(U) {
      var L = ["right", "bottom"].indexOf(U) >= 0 ? 1 : -1, z = ["top", "bottom"].indexOf(U) >= 0 ? "y" : "x";
      B[U] += D[z] * L;
    });
  }
  return B;
}
function Yw(e, n) {
  n === void 0 && (n = {});
  var r = n, o = r.placement, t = r.boundary, a = r.rootBoundary, i = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? Xv : s, d = Fo(o), c = d ? l ? md : md.filter(function(m) {
    return Fo(m) === d;
  }) : Ia, f = c.filter(function(m) {
    return u.indexOf(m) >= 0;
  });
  f.length === 0 && (f = c);
  var v = f.reduce(function(m, h) {
    return m[h] = xv(e, {
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
function Ww(e) {
  if (Er(e) === "auto") return [];
  var n = It(e);
  return [
    yd(e),
    n,
    yd(n)
  ];
}
function Kw(e) {
  var n = e.state, r = e.options, o = e.name;
  if (!n.modifiersData[o]._skip) {
    for (var t = r.mainAxis, a = t === void 0 ? !0 : t, i = r.altAxis, l = i === void 0 ? !0 : i, s = r.fallbackPlacements, u = r.padding, d = r.boundary, c = r.rootBoundary, f = r.altBoundary, v = r.flipVariations, m = v === void 0 ? !0 : v, h = r.allowedAutoPlacements, w = n.options.placement, $ = Er(w) === w, C = s || ($ || !m ? [It(w)] : Ww(w)), b = [w].concat(C).reduce(function(W, G) {
      return W.concat(Er(G) === "auto" ? Yw(n, {
        placement: G,
        boundary: d,
        rootBoundary: c,
        padding: u,
        flipVariations: m,
        allowedAutoPlacements: h
      }) : G);
    }, []), P = n.rects.reference, O = n.rects.popper, I = /* @__PURE__ */ new Map(), j = !0, M = b[0], A = 0; A < b.length; A++) {
      var B = b[A], T = Er(B), D = Fo(B) === Ba, U = ["top", Lo].indexOf(T) >= 0, L = U ? "width" : "height", z = xv(n, {
        placement: B,
        boundary: d,
        rootBoundary: c,
        altBoundary: f,
        padding: u
      }), V = U ? D ? Ta : Ea : D ? Lo : "top";
      P[L] > O[L] && (V = It(V));
      var ae = It(V), Z = [];
      if (a && Z.push(z[T] <= 0), l && Z.push(z[V] <= 0, z[ae] <= 0), Z.every(function(W) {
        return W;
      })) {
        M = B, j = !1;
        break;
      }
      I.set(B, Z);
    }
    if (j)
      for (var re = m ? 3 : 1, Ce = function(G) {
        var se = b.find(function(me) {
          var Y = I.get(me);
          if (Y) return Y.slice(0, G).every(function(ne) {
            return ne;
          });
        });
        if (se)
          return M = se, "break";
      }, oe = re; oe > 0 && Ce(oe) !== "break"; oe--) ;
    n.placement !== M && (n.modifiersData[o]._skip = !0, n.placement = M, n.reset = !0);
  }
}
var qw = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Kw,
  requiresIfExists: ["offset"],
  data: { _skip: !1 }
};
function Xw(e, n, r) {
  var o = Er(e), t = ["left", "top"].indexOf(o) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, n, { placement: e })) : r, i = a[0], l = a[1];
  return i = i || 0, l = (l || 0) * t, ["left", "right"].indexOf(o) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function Gw(e) {
  var n = e.state, r = e.options, o = e.name, t = r.offset, a = t === void 0 ? [0, 0] : t, i = Xv.reduce(function(d, c) {
    return d[c] = Xw(c, n.rects, a), d;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[o] = i;
}
var Zw = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Gw
};
function Jw(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Qw(e) {
  return e === Kn(e) || !Qn(e) ? yu(e) : Jw(e);
}
function xw(e) {
  var n = e.getBoundingClientRect(), r = io(n.width) / e.offsetWidth || 1, o = io(n.height) / e.offsetHeight || 1;
  return r !== 1 || o !== 1;
}
function _w(e, n, r) {
  r === void 0 && (r = !1);
  var o = Qn(n), t = Qn(n) && xw(n), a = Rr(n), i = lo(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (o || !o && !r) && ((sr(n) !== "body" || ku(a)) && (l = Qw(n)), Qn(n) ? (s = lo(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : a && (s.x = wu(a))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function ek(e) {
  var n = lo(e), r = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - o) <= 1 && (o = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: o
  };
}
function nk(e) {
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
function rk(e) {
  var n = nk(e);
  return Ow.reduce(function(r, o) {
    return r.concat(n.filter(function(t) {
      return t.phase === o;
    }));
  }, []);
}
function ok(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function tk(e) {
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
var kd = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function $d() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
  return !n.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function ak(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, o = r === void 0 ? [] : r, t = n.defaultOptions, a = t === void 0 ? kd : t;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, kd, a),
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
          reference: Xr(l) ? To(l) : l.contextElement ? To(l.contextElement) : [],
          popper: To(s)
        };
        var b = rk(tk([].concat(o, d.options.modifiers)));
        return d.orderedModifiers = b.filter(function(P) {
          return P.enabled;
        }), m(), v.update();
      },
      forceUpdate: function() {
        if (!f) {
          var $ = d.elements, C = $.reference, b = $.popper;
          if ($d(C, b)) {
            d.rects = {
              reference: _w(C, bu(b), d.options.strategy === "fixed"),
              popper: ek(b)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(B) {
              return d.modifiersData[B.name] = Object.assign({}, B.data);
            });
            for (var P = 0; P < d.orderedModifiers.length; P++) {
              if (d.reset === !0) {
                d.reset = !1, P = -1;
                continue;
              }
              var O = d.orderedModifiers[P], I = O.fn, j = O.options, M = j === void 0 ? {} : j, A = O.name;
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
      update: ok(function() {
        return new Promise(function(w) {
          v.forceUpdate(), w(d);
        });
      }),
      destroy: function() {
        h(), f = !0;
      }
    };
    if (!$d(l, s)) return v;
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
var mt = { passive: !0 };
function ik(e) {
  var n = e.state, r = e.instance, o = e.options, t = o.scroll, a = t === void 0 ? !0 : t, i = o.resize, l = i === void 0 ? !0 : i, s = Kn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, mt);
  }), l && s.addEventListener("resize", r.update, mt), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, mt);
    }), l && s.removeEventListener("resize", r.update, mt);
  };
}
var lk = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ik,
  data: {}
};
function sk(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = Qv({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
var uk = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: sk,
  data: {}
};
function dk(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var o = n.styles[r] || {}, t = n.attributes[r] || {}, a = n.elements[r];
    !Qn(a) || !sr(a) || (Object.assign(a.style, o), Object.keys(t).forEach(function(i) {
      var l = t[i];
      l === !1 ? a.removeAttribute(i) : a.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function ck(e) {
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
      !Qn(t) || !sr(t) || (Object.assign(t.style, i), Object.keys(a).forEach(function(l) {
        t.removeAttribute(l);
      }));
    });
  };
}
var fk = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: dk,
  effect: ck,
  requires: ["computeStyles"]
}, vk = [
  lk,
  uk,
  Gv,
  fk
], pk = /* @__PURE__ */ ak({ defaultModifiers: vk }), mk = Object.defineProperty, hk = Object.defineProperties, gk = Object.getOwnPropertyDescriptors, Cd = Object.getOwnPropertySymbols, bk = Object.prototype.hasOwnProperty, yk = Object.prototype.propertyIsEnumerable, Sd = (e, n, r) => n in e ? mk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, dl = (e, n) => {
  for (var r in n || (n = {})) bk.call(n, r) && Sd(e, r, n[r]);
  if (Cd)
    for (var r of Cd(n)) yk.call(n, r) && Sd(e, r, n[r]);
  return e;
}, cl = (e, n) => hk(e, gk(n)), Od = (e, n, r) => new Promise((o, t) => {
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
function _v(e) {
  const n = y(null), r = y(null), o = y({
    width: 0,
    height: 0
  }), t = Tn(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(V, ae) {
      k(ae ? e.onOpen : e.onClose);
    }
  }), { zIndex: a } = ot(() => t.value, 1);
  du(() => t.value, a);
  let i = null, l, s = !1, u = !1, d = !0;
  Ye(() => window, "keydown", D), ve(() => [
    e.offsetX,
    e.offsetY,
    e.placement,
    e.strategy
  ], U), ve(() => e.disabled, z), ve(() => t.value, (V) => {
    V && U();
  }), ar(U), gr(c), Jo(f);
  function c() {
    const V = A();
    i = pk(V, r.value, M()), V.addEventListener("mouseenter", h), V.addEventListener("mouseleave", w), V.addEventListener("click", b), document.addEventListener("click", P);
  }
  function f() {
    const V = A();
    V && (V.removeEventListener("mouseenter", h), V.removeEventListener("mouseleave", w), V.removeEventListener("click", b)), i.destroy(), document.removeEventListener("click", P);
  }
  function v() {
    const V = A();
    if (!V) return;
    const { width: ae, height: Z } = er(V);
    o.value = {
      width: on(ae),
      height: on(Z)
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
    e.trigger === "hover" && (u = !0, L());
  }
  function w() {
    return Od(this, null, function* () {
      e.trigger === "hover" && (u = !1, yield Pn(), !s && z());
    });
  }
  function $() {
    e.trigger === "hover" && (s = !0, e.cascadeOptimization && (d = !1));
  }
  function C() {
    return Od(this, null, function* () {
      e.trigger === "hover" && (s = !1, yield Pn(), !u && z());
    });
  }
  function b() {
    if (e.trigger === "click") {
      if (e.closeOnClickReference && t.value) {
        z();
        return;
      }
      L();
    }
  }
  function P(V) {
    const ae = A();
    if (ae && !ae.contains(V.target)) {
      if (e.trigger !== "click") return;
      O(), k(e.onClickOutside, V);
    }
  }
  function O() {
    z();
  }
  function I() {
    U(), k(e.onClosed);
  }
  function j() {
    const { offsetX: V, offsetY: ae, placement: Z } = e;
    v();
    const re = {
      x: on(V),
      y: on(ae)
    };
    switch (Z) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: re.x,
          distance: re.y - o.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: re.x,
          distance: re.y - o.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: re.x,
          distance: re.y - o.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: re.x,
          distance: -re.y - o.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: re.x,
          distance: -re.y - o.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: re.x,
          distance: -re.y - o.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: re.y,
          distance: re.x - o.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: re.y,
          distance: -re.x - o.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: Z,
          skidding: re.y,
          distance: -re.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: Z,
          skidding: re.x,
          distance: -re.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: Z,
          skidding: re.x,
          distance: re.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: Z,
          skidding: re.y,
          distance: re.x
        };
    }
  }
  function M() {
    const { placement: V, skidding: ae, distance: Z } = j();
    return {
      placement: V,
      modifiers: [
        cl(dl({}, qw), { enabled: t.value }),
        cl(dl({}, Zw), { options: { offset: [ae, Z] } }),
        cl(dl({}, Gv), {
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
          fn({ state: re }) {
            re.styles.popper.transformOrigin = m();
          }
        }
      ],
      strategy: e.strategy
    };
  }
  function A() {
    var V, ae;
    const Z = (V = l ?? e.reference) != null ? V : n.value;
    return an(Z) ? (ae = n.value) == null ? void 0 : ae.querySelector(Z) : Z;
  }
  function B(V) {
    d = V;
  }
  function T(V) {
    f(), l = V, c();
  }
  function D(V) {
    const { closeOnKeyEscape: ae = !1 } = e;
    V.key === "Escape" && ae && t.value && (Re(V), z());
  }
  function U() {
    i.setOptions(M());
  }
  function L() {
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
    open: L,
    close: z
  };
}
var { name: wk, n: kk, classes: $k } = ee("menu");
function Ck(e, n) {
  return g(), S("div", {
    ref: "host",
    class: p(e.classes(e.n(), e.n("$--box")))
  }, [F(e.$slots, "default"), (g(), ye(cr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [X(nn, {
    name: e.n(),
    onAfterEnter: e.onOpened,
    onAfterLeave: e.handleClosed,
    persisted: ""
  }, {
    default: fe(() => [Ne(N("div", {
      ref: "popover",
      style: q({
        zIndex: e.zIndex,
        width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.referenceSize.width)) : void 0
      }),
      class: p(e.classes(e.n("menu"), e.n("$--box"), e.popoverClass, [e.defaultStyle, e.n("--menu-background-color")], [e.defaultStyle, e.formatElevation(e.elevation, 3)])),
      onClick: n[0] || (n[0] = jn(() => {
      }, ["stop"])),
      onMouseenter: n[1] || (n[1] = (...r) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...r)),
      onMouseleave: n[2] || (n[2] = (...r) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...r))
    }, [F(e.$slots, "menu")], 38), [[_n, e.show]])]),
    _: 3
  }, 8, [
    "name",
    "onAfterEnter",
    "onAfterLeave"
  ])], 8, ["to", "disabled"]))], 2);
}
var ep = _({
  name: wk,
  props: hu,
  setup(e) {
    const { disabled: n } = Jr(), { popover: r, host: o, referenceSize: t, show: a, zIndex: i, handlePopoverMouseenter: l, handlePopoverMouseleave: s, handlePopoverClose: u, handleClosed: d, setAllowClose: c, open: f, close: v, resize: m, setReference: h } = _v(e);
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
      toSizeUnit: ze,
      n: kk,
      classes: $k,
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
ep.render = Ck;
var it = ep;
te(it);
le(it, hu);
var kB = it, Uo = it;
function np(e) {
  const { multiple: n, modelValue: r, optionProviders: o, optionProvidersLength: t, optionIsIndeterminate: a } = e, i = y(""), l = y([]);
  ve(r, f, { deep: !0 }), ve(t, f);
  function s() {
    const v = n(), m = r();
    v && (l.value = m.map(u)), !v && !Jn(m) && (i.value = u(m)), !v && Jn(m) && (i.value = "");
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
var Sk = Object.defineProperty, Ok = Object.defineProperties, Pk = Object.getOwnPropertyDescriptors, Pd = Object.getOwnPropertySymbols, zk = Object.prototype.hasOwnProperty, Tk = Object.prototype.propertyIsEnumerable, zd = (e, n, r) => n in e ? Sk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Ek = (e, n) => {
  for (var r in n || (n = {})) zk.call(n, r) && zd(e, r, n[r]);
  if (Pd)
    for (var r of Pd(n)) Tk.call(n, r) && zd(e, r, n[r]);
  return e;
}, Ik = (e, n) => Ok(e, Pk(n)), Qt = Ik(Ek({
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
}, De(hu, [
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
])), { onKeyEscape: R() }), Bk = Object.defineProperty, Td = Object.getOwnPropertySymbols, Dk = Object.prototype.hasOwnProperty, Mk = Object.prototype.propertyIsEnumerable, Ed = (e, n, r) => n in e ? Bk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Ak = (e, n) => {
  for (var r in n || (n = {})) Dk.call(n, r) && Ed(e, r, n[r]);
  if (Td)
    for (var r of Td(n)) Mk.call(n, r) && Ed(e, r, n[r]);
  return e;
}, Nk = (e, n, r) => new Promise((o, t) => {
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
}), { name: Vk, n: Rk } = ee("menu-children"), Lk = { ref: "menuOptions" };
function Fk(e, n) {
  const r = Q("var-menu-option"), o = Q("var-menu-children"), t = Q("var-menu");
  return g(), ye(t, {
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
  }, Wr({
    default: fe(() => [X(r, {
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
    fn: fe(() => [N("div", Lk, [(g(!0), S(Ae, null, Ge(e.options, (a) => (g(), S(Ae, { key: a[e.valueKey] }, [a[e.childrenKey] ? (g(), ye(o, {
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
    ])) : (g(), ye(r, {
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
var rp = _({
  name: Vk,
  components: {
    VarMenu: it,
    VarMenuOption: at
  },
  props: Ak({
    parentShow: Boolean,
    disabled: Boolean,
    option: {
      type: Object,
      required: !0
    },
    highlightOptions: De(Qt, "options"),
    onKeyArrowX: R(),
    onKeyArrowRightOpen: R(),
    onMouseenter: R()
  }, De(Qt, [
    "options",
    "valueKey",
    "labelKey",
    "childrenKey"
  ])),
  setup(e) {
    const n = y(!1), r = y(), o = y(), t = y(), a = y();
    ve(() => e.parentShow, (f) => {
      f || (n.value = !1);
    }, { immediate: !0 });
    function i(f) {
      return Nk(this, null, function* () {
        var v;
        k(e.onKeyArrowX, f), f === "ArrowRight" && (k(e.onKeyArrowRightOpen), (v = r.value) == null || v.open(), yield Tr(), vu(r.value.$el, t.value, "ArrowDown"));
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
      n: Rk,
      close: s,
      handleArrowLeft: l,
      handleArrowRight: i,
      handleMouseenter: c,
      allowClose: u,
      allowChildrenClose: d
    };
  }
});
rp.render = Fk;
var Uk = rp, Hk = Object.defineProperty, jk = Object.defineProperties, Yk = Object.getOwnPropertyDescriptors, Id = Object.getOwnPropertySymbols, Wk = Object.prototype.hasOwnProperty, Kk = Object.prototype.propertyIsEnumerable, Bd = (e, n, r) => n in e ? Hk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, qk = (e, n) => {
  for (var r in n || (n = {})) Wk.call(n, r) && Bd(e, r, n[r]);
  if (Id)
    for (var r of Id(n)) Kk.call(n, r) && Bd(e, r, n[r]);
  return e;
}, Xk = (e, n) => jk(e, Yk(n)), { name: Gk, n: Zk, classes: Jk } = ee("menu-select");
function Qk(e, n) {
  const r = Q("var-menu-children"), o = Q("var-menu-option"), t = Q("var-menu");
  return g(), ye(t, {
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
    menu: fe(() => [N("div", {
      ref: "menuOptionsRef",
      class: p(e.classes(e.n("menu"), e.formatElevation(e.elevation, 3), [e.scrollable, e.n("--scrollable")]))
    }, [(g(!0), S(Ae, null, Ge(e.options, (a) => (g(), S(Ae, { key: a[e.valueKey] }, [a[e.childrenKey] ? (g(), ye(r, {
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
    ])) : (g(), ye(o, {
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
    default: fe(() => [F(e.$slots, "default")]),
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
var op = _({
  name: Gk,
  components: {
    VarMenu: Uo,
    VarMenuOption: ao,
    VarMenuChildren: Uk
  },
  props: Qt,
  setup(e) {
    const n = Tn(e, "show"), r = y(), o = y(), t = y(), a = E(() => $(e.options)), { menuOptions: i, length: l, bindMenuOptions: s } = tw(), { computeLabel: u, getSelectedValue: d, getOptionProviderKey: c } = np({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => i,
      optionProvidersLength: () => l.value,
      optionIsIndeterminate(T) {
        var D;
        const U = v(T.value.value);
        if (!U) return !1;
        const L = ((D = U._children) != null ? D : []).filter((V) => !V.disabled), z = L.filter((V) => e.modelValue.includes(V.value));
        return z.length > 0 && z.length < L.length;
      }
    }), f = E(() => {
      const { multiple: T, modelValue: D } = e;
      if (T) return [];
      const U = a.value.find((V) => V.value === D), L = [];
      let z = U?._parent;
      for (; z; )
        L.push(z), z = z._parent;
      return L;
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
      function U(L) {
        L.forEach((z) => {
          D.push(z);
          const V = h(z);
          V && U(V);
        });
      }
      return D;
    }
    function $(T) {
      function D(U, L) {
        return U.map((z) => {
          z = Xk(qk({}, z), { _rawOption: z }), L && (z._parent = L);
          const V = h(z);
          if (V) {
            const ae = D(V, z);
            z[e.childrenKey] = ae, z._children = w(ae);
          }
          return z;
        });
      }
      return w(D(T));
    }
    function C(T) {
      var D, U;
      const { multiple: L, closeOnSelect: z } = e, { value: V, label: ae, selected: Z, disabled: re, ripple: Ce } = T, oe = v(V.value);
      if (oe) {
        const se = ((D = oe._children) != null ? D : []).filter((me) => !me.disabled).map((me) => me.value);
        L && Z.value && (i.forEach((me) => {
          se.includes(me.value.value) && me.sync(!0, !1);
        }), b(oe)), L && !Z.value && (i.forEach((me) => {
          se.includes(me.value.value) && me.sync(!1, !1);
        }), b(oe));
      }
      const W = d(T), G = (U = oe?._rawOption) != null ? U : {
        value: V.value,
        label: ae.value,
        disabled: re.value,
        ripple: Ce.value
      };
      k(e.onSelect, c(T), G), k(e["onUpdate:modelValue"], W), !L && z && (r.value.$el.focus(), M());
    }
    function b(T) {
      let D = T._parent;
      for (; D; ) {
        const U = m(D.value), L = h(D).filter((ae) => !ae.disabled), z = L.every((ae) => !m(ae.value).selected.value), V = L.every((ae) => m(ae.value).selected.value);
        z ? U.sync(!1, !1) : V ? U.sync(!0, !1) : U.sync(!1, !0), D = D._parent;
      }
    }
    function P(T) {
      if (e.disabled || !n.value) return;
      const { key: D } = T;
      if ([
        "Escape",
        "ArrowDown",
        "ArrowUp"
      ].includes(D) && Re(T), D === "Escape") {
        r.value.$el.focus(), M(), k(e.onKeyEscape);
        return;
      }
      (D === "ArrowDown" || D === "ArrowUp") && vu(r.value.$el, o.value, D, (U, L, z) => z ? !0 : O(U) === O(L));
    }
    function O(T) {
      var D, U;
      if (T.classList.contains("var-menu-option--children-trigger")) return (D = T.parentNode) == null ? void 0 : D.parentNode;
      if (T.classList.contains("var-checkbox")) {
        const L = (U = T.parentNode) == null ? void 0 : U.parentNode;
        if (L) return O(L);
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
    function j() {
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
      n: Zk,
      classes: Jk,
      allowChildrenClose: I,
      formatElevation: vn,
      open: j,
      close: M,
      resize: A,
      setReference: B
    };
  }
});
op.render = Qk;
var Ma = op;
te(Ma);
le(Ma, Qt);
var $B = Ma, Ho = Ma, xk = Object.defineProperty, Dd = Object.getOwnPropertySymbols, _k = Object.prototype.hasOwnProperty, e$ = Object.prototype.propertyIsEnumerable, Md = (e, n, r) => n in e ? xk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, n$ = (e, n) => {
  for (var r in n || (n = {})) _k.call(n, r) && Md(e, r, n[r]);
  if (Dd)
    for (var r of Dd(n)) e$.call(n, r) && Md(e, r, n[r]);
  return e;
}, tp = n$({
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
}, De(mu, [
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
])), Ad = (e, n, r) => new Promise((o, t) => {
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
}), { name: r$, n: o$ } = ee("auto-complete"), t$ = ["tabindex"];
function a$(e, n) {
  const r = Q("var-input"), o = Q("var-menu-option"), t = Q("var-menu-select"), a = Q("var-form-details");
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
    options: fe(() => [N("div", { class: p(e.n("options")) }, [(g(!0), S(Ae, null, Ge(e.viewOptions, (i) => (g(), ye(o, {
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
    default: fe(() => [X(r, We({ ref: "input" }, {
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
    }), Wr({ _: 2 }, [
      e.$slots["prepend-icon"] ? {
        name: "prepend-icon",
        fn: fe(() => [F(e.$slots, "prepend-icon")]),
        key: "0"
      } : void 0,
      e.$slots["append-icon"] ? {
        name: "append-icon",
        fn: fe(() => [F(e.$slots, "append-icon")]),
        key: "1"
      } : void 0,
      e.$slots["clear-icon"] ? {
        name: "clear-icon",
        fn: fe(({ clear: i }) => [F(e.$slots, "clear-icon", { clear: i })]),
        key: "2"
      } : void 0,
      e.$slots["extra-message"] ? {
        name: "extra-message",
        fn: fe(() => [F(e.$slots, "extra-message")]),
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
  }, null, 8, ["error-message", "extra-message"])], 42, t$);
}
var ap = _({
  name: r$,
  components: {
    VarInput: Ro,
    VarMenuSelect: Ho,
    VarMenuOption: ao,
    VarFormDetails: An
  },
  props: tp,
  setup(e) {
    const n = y(), r = y(), o = y(!1), t = Tn(e, "modelValue"), a = y([]), i = y(!1), l = E(() => {
      const { maxlength: z } = e;
      return z ? Jn(t.value) ? `0 / ${z}` : `${String(t.value).length}/${z}` : "";
    }), { errorMessage: s, validateWithTrigger: u, validate: d, resetValidation: c } = qn(), { bindForm: f, form: v } = Xn();
    let m = !1;
    const h = {
      reset: w,
      resetValidation: c,
      validate: $
    };
    xf(() => n.value, "click", () => {
      if (m) {
        m = !1;
        return;
      }
      b();
    }), ve(() => [e.options, o.value], j), k(f, h), Ye(() => window, "keydown", I);
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
      Fe(() => {
        const { validateTrigger: V, rules: ae, modelValue: Z } = e;
        u(V, z, ae, Z);
      });
    }
    function I(z) {
      return Ad(this, null, function* () {
        var V;
        if (v?.disabled.value || v?.readonly.value || e.disabled || e.readonly || !o.value || !i.value) return;
        const { key: ae } = z;
        if (ae === "Tab") {
          Re(z), n.value.focus(), i.value = !1;
          return;
        }
        if (![
          "ArrowUp",
          "ArrowDown",
          "Enter"
        ].includes(ae)) {
          r.value.focus();
          return;
        }
        ae === "Enter" && (yield Tr(), (V = r.value) == null || V.focus());
      });
    }
    function j() {
      o.value && (i.value = L(t.value)), i.value && (a.value = e.options);
    }
    function M(z, V) {
      j(), k(e.onInput, z, V), O("onInput");
    }
    function A() {
      m = !0, j(), k(e.onClear, t.value), O("onClear");
    }
    function B(z) {
      e.disabled || v?.disabled.value || (k(e.onClick, z), O("onClick"));
    }
    function T(z) {
      k(e.onChange, z), O("onChange");
    }
    function D(z) {
      return Ad(this, null, function* () {
        var V;
        e.maxlength != null && (z = z.slice(0, H(e.maxlength))), z !== t.value && (t.value = z, k(e.onChange, z), O("onChange")), yield Tr(), (V = r.value) == null || V.focus();
      });
    }
    function U() {
      r.value.focus();
    }
    function L(z) {
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
      n: o$,
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
ap.render = a$;
var Aa = ap;
te(Aa);
le(Aa, tp);
var CB = Aa, Tl = Aa, Nd = (e) => an(e) ? e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp|ico)$/i.test(e) : !1, Vd = (e) => an(e) ? e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e) : !1, i$ = (e) => {
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
      this.has(r) && Ir(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, El = (e) => e, Rd = (e) => e ** 3, ip = (e) => e < 0.5 ? Rd(e * 2) / 2 : 1 - Rd((1 - e) * 2) / 2, Gr = (e, n, r = "") => {
  if (e === void 0 && (e = ""), e.length >= n) return e;
  const o = n - e.length, t = Math.floor(o / r.length);
  return r.repeat(t) + r.slice(0, o % r.length) + e;
}, l$ = Object.defineProperty, Ld = Object.getOwnPropertySymbols, s$ = Object.prototype.hasOwnProperty, u$ = Object.prototype.propertyIsEnumerable, Fd = (e, n, r) => n in e ? l$(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, d$ = (e, n) => {
  for (var r in n || (n = {})) s$.call(n, r) && Fd(e, r, n[r]);
  if (Ld)
    for (var r of Ld(n)) u$.call(n, r) && Fd(e, r, n[r]);
  return e;
}, Na = (e, n, r) => new Promise((o, t) => {
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
}), c$ = "background-image", f$ = "lazy-loading", v$ = "lazy-error", Ud = "lazy-attempt", p$ = [
  "scroll",
  "wheel",
  "mousewheel",
  "resize",
  "animationend",
  "transitionend",
  "touchmove"
], Il = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", so = [], xt = [], lp = i$(100), mn = {
  loading: Il,
  error: Il,
  attempt: 3,
  throttleWait: 300,
  events: p$
}, $u = ha(lt, mn.throttleWait);
function Va(e, n) {
  e._lazy.arg === c$ ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function m$(e) {
  e._lazy.loading && Va(e, e._lazy.loading), lt();
}
function h$(e) {
  e._lazy.error && Va(e, e._lazy.error), e._lazy.state = "error", Su(e), lt();
}
function sp(e, n) {
  Va(e, n), e._lazy.state = "success", Su(e), lt();
}
function g$(e) {
  var n;
  xt.includes(e) || (xt.push(e), (n = mn.events) == null || n.forEach((r) => {
    e.addEventListener(r, $u, { passive: !0 });
  }));
}
function b$() {
  xt.forEach((e) => {
    var n;
    (n = mn.events) == null || n.forEach((r) => {
      e.removeEventListener(r, $u);
    });
  }), xt.length = 0;
}
function y$(e, n) {
  var r, o;
  const t = {
    loading: (r = e.getAttribute(f$)) != null ? r : mn.loading,
    error: (o = e.getAttribute(v$)) != null ? o : mn.error,
    attempt: e.getAttribute(Ud) ? Number(e.getAttribute(Ud)) : mn.attempt
  };
  e._lazy = d$({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), Va(e, Il), k(mn.filter, e._lazy);
}
function w$(e, n) {
  const r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, lp.add(n), sp(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? h$(e) : up(e);
  });
}
function up(e) {
  if (e._lazy.attemptLock) return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (lp.has(n)) {
    sp(e, n), e._lazy.attemptLock = !1;
    return;
  }
  m$(e), w$(e, n);
}
function Cu(e) {
  return Na(this, null, function* () {
    yield Pn(), Kf(e) && up(e);
  });
}
function lt() {
  so.forEach((e) => Cu(e));
}
function k$(e) {
  return Na(this, null, function* () {
    !so.includes(e) && so.push(e), Iy(e).forEach(g$), yield Cu(e);
  });
}
function Su(e) {
  Ir(so, e), so.length === 0 && b$();
}
function $$(e, n) {
  const { src: r, arg: o } = e._lazy;
  return r !== n.value || o !== n.arg;
}
function dp(e, n) {
  return Na(this, null, function* () {
    y$(e, n), yield k$(e);
  });
}
function C$(e, n) {
  return Na(this, null, function* () {
    if (!$$(e, n)) {
      so.includes(e) && (yield Cu(e));
      return;
    }
    yield dp(e, n);
  });
}
function S$(e = {}) {
  const { events: n, loading: r, error: o, attempt: t, throttleWait: a, filter: i } = e;
  mn.events = n ?? mn.events, mn.loading = r ?? mn.loading, mn.error = o ?? mn.error, mn.attempt = t ?? mn.attempt, mn.throttleWait = a ?? mn.throttleWait, mn.filter = i;
}
var cp = {
  mounted: dp,
  unmounted: Su,
  updated: C$,
  install(e, n) {
    S$(n), $u = ha(lt, mn.throttleWait), e.directive("lazy", this);
  }
}, SB = cp, jo = cp, fp = {
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
}, O$ = (e) => [
  "mini",
  "small",
  "normal",
  "large"
].includes(e), { name: P$, n: z$, classes: T$ } = ee("avatar"), E$ = [
  "src",
  "alt",
  "lazy-loading",
  "lazy-error"
], I$ = ["src", "alt"];
function B$(e, n) {
  const r = qe("lazy");
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
  }, [e.src ? (g(), S(Ae, { key: 0 }, [e.lazy ? Ne((g(), S("img", {
    key: 0,
    role: "img",
    class: p(e.n("image")),
    src: e.src,
    alt: e.alt,
    style: q({ objectFit: e.fit }),
    "lazy-loading": e.loading,
    "lazy-error": e.error,
    onLoad: n[0] || (n[0] = (...o) => e.handleLoad && e.handleLoad(...o))
  }, null, 46, E$)), [[r, e.src]]) : (g(), S("img", {
    key: 1,
    role: "img",
    class: p(e.n("image")),
    src: e.src,
    alt: e.alt,
    style: q({ objectFit: e.fit }),
    onLoad: n[1] || (n[1] = (...o) => e.handleLoad && e.handleLoad(...o)),
    onError: n[2] || (n[2] = (...o) => e.handleError && e.handleError(...o))
  }, null, 46, I$))], 64)) : (g(), S("div", {
    key: 1,
    ref: "textElement",
    class: p(e.n("text")),
    style: q({ transform: `scale(${e.scale})` })
  }, [F(e.$slots, "default")], 6))], 6);
}
var vp = _({
  name: P$,
  directives: { Lazy: jo },
  props: fp,
  setup(e) {
    const n = y(null), r = y(null), o = y(1);
    yn(t), Qo(t);
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
      n: z$,
      classes: T$,
      isInternalSize: O$,
      toSizeUnit: ze,
      handleLoad: a,
      handleError: i,
      handleClick: l
    };
  }
});
vp.render = B$;
var Ra = vp;
te(Ra);
le(Ra, fp);
var OB = Ra, Bl = Ra, pp = {
  offset: [Number, String],
  vertical: Boolean
}, { name: D$, n: M$, classes: A$ } = ee("avatar-group");
function N$(e, n) {
  return g(), S("div", {
    class: p(e.classes(e.n(), [
      e.vertical,
      e.n("--column"),
      e.n("--row")
    ])),
    style: q(e.rootStyles)
  }, [F(e.$slots, "default")], 6);
}
var mp = _({
  name: D$,
  props: pp,
  setup(e) {
    return {
      rootStyles: E(() => e.offset == null ? {} : { "--avatar-group-offset": ze(e.offset) }),
      n: M$,
      classes: A$
    };
  }
});
mp.render = N$;
var La = mp;
te(La);
le(La, pp);
var PB = La, Dl = La, vr = {
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
}, { name: V$, n: R$, classes: L$ } = ee("loading");
function F$(e, n) {
  return g(), S("div", { class: p(e.n()) }, [e.$slots.default ? (g(), S("div", {
    key: 0,
    class: p(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
  }, [F(e.$slots, "default"), e.loading ? (g(), S("div", {
    key: 0,
    class: p(e.n("content-mask"))
  }, null, 2)) : K("v-if", !0)], 2)) : K("v-if", !0), e.isShow ? (g(), S("div", {
    key: 1,
    class: p(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
  }, [
    e.type === "circle" ? (g(), S("div", {
      key: 0,
      class: p(e.n("circle"))
    }, [N("span", {
      class: p(e.classes(e.n("circle-block"), e.n(`circle-block--${e.size}`))),
      style: q({
        width: e.multiplySizeUnit(e.radius, 2),
        height: e.multiplySizeUnit(e.radius, 2),
        color: e.color
      })
    }, [...n[0] || (n[0] = [N("svg", { viewBox: "25 25 50 50" }, [N("circle", {
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none"
    })], -1)])], 6)], 2)) : K("v-if", !0),
    (g(!0), S(Ae, null, Ge(e.loadingTypeDict, (r, o) => (g(), S(Ae, { key: o }, [e.type === o ? (g(), S("div", {
      key: 0,
      class: p(e.classes(e.n(o), e.n(`${o}--${e.size}`)))
    }, [(g(!0), S(Ae, null, Ge(r, (t) => (g(), S("div", {
      key: t + o,
      style: q({ backgroundColor: e.color }),
      class: p(e.classes(e.n(`${o}-item`), e.n(`${o}-item--${e.size}`)))
    }, null, 6))), 128))], 2)) : K("v-if", !0)], 64))), 128)),
    e.$slots.description || e.description ? (g(), S("div", {
      key: 1,
      class: p(e.classes(e.n("description"), e.n(`description--${e.size}`))),
      style: q({ color: e.color })
    }, [F(e.$slots, "description", {}, () => [Be(ie(e.description), 1)])], 6)) : K("v-if", !0)
  ], 2)) : K("v-if", !0)], 2);
}
var hp = _({
  name: V$,
  props: vr,
  setup(e, { slots: n }) {
    return {
      loadingTypeDict: {
        wave: 5,
        cube: 4,
        rect: 8,
        disappear: 3
      },
      isShow: E(() => k(n.default) ? e.loading : !0),
      n: R$,
      classes: L$,
      multiplySizeUnit: Dn
    };
  }
});
hp.render = F$;
var Fa = hp;
te(Fa);
le(Fa, vr);
var zB = Fa, uo = Fa, U$ = Object.defineProperty, H$ = Object.defineProperties, j$ = Object.getOwnPropertyDescriptors, Hd = Object.getOwnPropertySymbols, Y$ = Object.prototype.hasOwnProperty, W$ = Object.prototype.propertyIsEnumerable, jd = (e, n, r) => n in e ? U$(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Yd = (e, n) => {
  for (var r in n || (n = {})) Y$.call(n, r) && jd(e, r, n[r]);
  if (Hd)
    for (var r of Hd(n)) W$.call(n, r) && jd(e, r, n[r]);
  return e;
}, Wd = (e, n) => H$(e, j$(n)), gp = {
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
  loadingType: De(vr, "type"),
  loadingSize: Wd(Yd({}, De(vr, "size")), { default: void 0 }),
  loadingColor: Wd(Yd({}, De(vr, "color")), { default: "currentColor" }),
  onClick: R(),
  onTouchstart: R()
}, bp = /* @__PURE__ */ Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function K$() {
  const { bindChildren: e, childProviders: n, length: r } = kn(bp);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function q$() {
  const { bindParent: e, parentProvider: n, index: r } = wn(bp);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var { name: X$, n: G$, classes: Z$ } = ee("button"), J$ = [
  "tabindex",
  "type",
  "disabled"
];
function Q$(e, n) {
  const r = Q("var-loading"), o = Q("var-hover-overlay"), t = qe("ripple"), a = qe("hover");
  return Ne((g(), S("button", {
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
    e.loading || e.pending ? (g(), ye(r, {
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
    N("div", { class: p(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")])) }, [F(e.$slots, "default")], 2),
    X(o, {
      hovering: e.disabled || e.loading || e.pending ? !1 : e.hovering,
      focusing: e.disabled || e.loading || e.pending ? !1 : e.isFocusing
    }, null, 8, ["hovering", "focusing"])
  ], 46, J$)), [[t, { disabled: e.disabled || !e.ripple || e.loading || e.pending }], [
    a,
    e.handleHovering,
    "desktop"
  ]]);
}
var yp = _({
  name: X$,
  components: {
    VarLoading: uo,
    VarHoverOverlay: Wn
  },
  directives: {
    Ripple: un,
    Hover: Rn
  },
  props: gp,
  setup(e) {
    const n = y(!1), r = y(!1), { buttonGroup: o } = q$(), { hovering: t, handleHovering: a } = or(), i = E(() => {
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
      e.autoLoading && (r.value = !0, Promise.all(mr(c)).then(() => {
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
      n: G$,
      classes: Z$,
      handleHovering: a,
      handleClick: s,
      handleTouchstart: u,
      handleFocus: d
    };
  }
});
yp.render = Q$;
var Ua = yp;
te(Ua);
le(Ua, gp);
var TB = Ua, Nn = Ua, wp = {
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
}, { name: x$, n: _$, classes: eC } = ee("back-top");
function nC(e, n) {
  const r = Q("var-icon"), o = Q("var-button");
  return g(), ye(cr, {
    to: "body",
    disabled: e.disabled
  }, [N("div", We({
    ref: "backTopEl",
    class: e.classes(e.n(), [e.show, e.n("--active")]),
    style: {
      right: e.toSizeUnit(e.right),
      bottom: e.toSizeUnit(e.bottom)
    }
  }, e.$attrs, { onClick: n[0] || (n[0] = jn((...t) => e.handleClick && e.handleClick(...t), ["stop"])) }), [F(e.$slots, "default", {}, () => [X(o, {
    elevation: e.elevation,
    type: "primary",
    "var-back-top-cover": ""
  }, {
    default: fe(() => [X(r, { name: "chevron-up" })]),
    _: 1
  }, 8, ["elevation"])])], 16)], 8, ["disabled"]);
}
var kp = _({
  name: x$,
  components: {
    VarButton: Nn,
    VarIcon: xe
  },
  inheritAttrs: !1,
  props: wp,
  setup(e) {
    const n = y(!1), r = y(null), o = y(!0);
    let t;
    const a = ha(() => {
      i();
    }, 200);
    gr(() => {
      s(), u(), i(), o.value = !1;
    }), Nr(u), mo(d);
    function i() {
      n.value = Br(t) >= on(e.visibilityHeight);
    }
    function l(c) {
      k(e.onClick, c);
      const f = ma(t);
      No(t, {
        left: f,
        duration: e.duration,
        animation: ip
      });
    }
    function s() {
      t = e.target ? Sv(e.target, "BackTop") : Mr(r.value);
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
      toSizeUnit: ze,
      n: _$,
      classes: eC,
      handleClick: l
    };
  }
});
kp.render = nC;
var Ha = kp;
te(Ha);
le(Ha, wp);
var EB = Ha, Ml = Ha, $p = {
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
  icon: De(sn, "name"),
  namespace: De(sn, "namespace"),
  color: String,
  offsetX: {
    type: [String, Number],
    default: 0
  },
  offsetY: {
    type: [String, Number],
    default: 0
  }
}, rC = Object.defineProperty, Kd = Object.getOwnPropertySymbols, oC = Object.prototype.hasOwnProperty, tC = Object.prototype.propertyIsEnumerable, qd = (e, n, r) => n in e ? rC(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, aC = (e, n) => {
  for (var r in n || (n = {})) oC.call(n, r) && qd(e, r, n[r]);
  if (Kd)
    for (var r of Kd(n)) tC.call(n, r) && qd(e, r, n[r]);
  return e;
}, { name: iC, n: lC, classes: sC } = ee("badge"), uC = { key: 0 };
function dC(e, n) {
  const r = Q("var-icon");
  return g(), S("div", { class: p(e.classes(e.n(), e.n("$--box"))) }, [F(e.$slots, "default"), X(nn, {
    name: e.n("$-badge-fade"),
    persisted: ""
  }, {
    default: fe(() => [Ne(N("span", We({
      class: e.classes(e.n("content"), e.n(`--${e.type}`), [
        e.$slots.default,
        e.n(`--${e.position}`),
        e.n("--offset")
      ], [e.dot, e.n("--dot")], [e.icon, e.n("--icon")]),
      style: aC({ background: e.color }, e.offsetStyle)
    }, e.$attrs), [e.icon ? (g(), ye(r, {
      key: 0,
      class: p(e.n("icon")),
      "var-badge-cover": "",
      name: e.icon,
      namespace: e.namespace
    }, null, 8, [
      "class",
      "name",
      "namespace"
    ])) : K("v-if", !0), F(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (g(), S("span", uC, ie(e.value), 1)) : K("v-if", !0)])], 16), [[_n, !e.hidden]])]),
    _: 3
  }, 8, ["name"])], 2);
}
var Cp = _({
  name: iC,
  components: { VarIcon: xe },
  inheritAttrs: !1,
  props: $p,
  setup(e) {
    return {
      value: E(() => {
        const { value: n, maxValue: r } = e;
        return n != null && r != null && H(n) > H(r) ? `${r}+` : n;
      }),
      offsetStyle: E(() => ({
        "--badge-offset-y": ze(e.offsetY),
        "--badge-offset-x": ze(e.offsetX)
      })),
      n: lC,
      classes: sC
    };
  }
});
Cp.render = dC;
var ja = Cp;
te(ja);
le(ja, $p);
var IB = ja, _t = ja, Sp = {
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
}, Op = /* @__PURE__ */ Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function cC() {
  const { childProviders: e, length: n, bindChildren: r } = kn(Op);
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: r
  };
}
var fC = Object.defineProperty, Xd = Object.getOwnPropertySymbols, vC = Object.prototype.hasOwnProperty, pC = Object.prototype.propertyIsEnumerable, Gd = (e, n, r) => n in e ? fC(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Zd = (e, n) => {
  for (var r in n || (n = {})) vC.call(n, r) && Gd(e, r, n[r]);
  if (Xd)
    for (var r of Xd(n)) pC.call(n, r) && Gd(e, r, n[r]);
  return e;
}, { name: mC, n: hC, classes: gC } = ee("bottom-navigation"), { n: Ya } = ee("bottom-navigation-item"), Jd = Ya("--right-half-space"), Qd = Ya("--left-half-space"), xd = Ya("--right-space"), bC = { type: "primary" };
function yC(e, n) {
  const r = Q("var-button");
  return g(), S(Ae, null, [N("div", We({
    ref: "bottomNavigationDom",
    class: e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")], [e.variant, e.n("--variant")]),
    style: `z-index:${e.zIndex}`
  }, e.$attrs), [F(e.$slots, "default"), e.$slots.fab ? (g(), ye(r, We({
    key: 0,
    class: e.classes(e.n("fab"), [
      e.length % 2,
      e.n("--fab-right"),
      e.n("--fab-center")
    ]),
    "var-bottom-navigation__fab": ""
  }, e.fabProps, { onClick: e.handleFabClick }), {
    default: fe(() => [F(e.$slots, "fab")]),
    _: 3
  }, 16, ["class", "onClick"])) : K("v-if", !0)], 16), e.fixed && e.placeholder ? (g(), S("div", {
    key: 0,
    class: p(e.n("placeholder")),
    style: q({ height: e.placeholderHeight })
  }, null, 6)) : K("v-if", !0)], 64);
}
var Pp = _({
  name: mC,
  components: { VarButton: Nn },
  props: Sp,
  setup(e, { slots: n }) {
    const r = y(null), o = E(() => e.animated), t = E(() => e.active), a = E(() => e.activeColor), i = E(() => e.inactiveColor), l = E(() => e.variant), s = y(), u = y({}), { length: d, bottomNavigationItems: c, bindBottomNavigationItem: f } = cC();
    f({
      animated: o,
      active: t,
      activeColor: a,
      inactiveColor: i,
      variant: l,
      onToggle: $
    }), ve(() => d.value, v), ve(() => e.fabProps, (B) => {
      u.value = Zd(Zd({}, bC), B);
    }, {
      immediate: !0,
      deep: !0
    }), ar(A), yn(() => {
      A(), n.fab && O(d.value);
    }), Qo(() => {
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
      En(t.value) && (t.value < 0 ? k(e["onUpdate:active"], 0) : t.value > d.value - 1 && k(e["onUpdate:active"], d.value - 1));
    }
    function $(B) {
      t.value !== B && (e.onBeforeChange ? C(B) : b(B));
    }
    function C(B) {
      const T = mr(k(e.onBeforeChange, B));
      Promise.all(T).then((D) => {
        D.every(Boolean) && b(B);
      });
    }
    function b(B) {
      k(e["onUpdate:active"], B), k(e.onChange, B);
    }
    function P() {
      j().forEach((B) => {
        B.classList.remove(Jd, Qd, xd);
      });
    }
    function O(B) {
      const T = j(), D = T.length, U = B % 2 === 0;
      T.forEach((L, z) => {
        I(U, L, z, D);
      });
    }
    function I(B, T, D, U) {
      const L = D === U - 1;
      if (!B && L) {
        T.classList.add(xd);
        return;
      }
      const z = D === U / 2 - 1, V = D === U / 2;
      z ? T.classList.add(Jd) : V && T.classList.add(Qd);
    }
    function j() {
      return Array.from(r.value.querySelectorAll(`.${Ya()}`));
    }
    function M() {
      k(e.onFabClick);
    }
    function A() {
      if (!e.fixed || !e.placeholder) return;
      const { height: B } = tn(r.value);
      s.value = ze(B);
    }
    return {
      length: d,
      bottomNavigationDom: r,
      fabProps: u,
      placeholderHeight: s,
      n: hC,
      classes: gC,
      handleFabClick: M
    };
  }
});
Pp.render = yC;
var Wa = Pp;
te(Wa);
le(Wa, Sp);
var BB = Wa, Al = Wa, zp = {
  name: String,
  label: String,
  icon: De(sn, "name"),
  namespace: De(sn, "namespace"),
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: R()
};
function wC() {
  const { parentProvider: e, index: n, bindParent: r } = wn(Op);
  return Yn(!!r, "BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: r
  };
}
var { name: kC, n: $C, classes: CC } = ee("bottom-navigation-item"), SC = {
  type: "danger",
  dot: !0
};
function OC(e, n) {
  const r = Q("var-icon"), o = Q("var-badge"), t = qe("ripple");
  return Ne((g(), S("button", {
    class: p(e.classes(e.n(), e.n("$--box"), [e.variant, e.n("--variant-padding")], [e.isActive && !e.variant, e.n("--active")], [e.animated, e.n("--animated")])),
    style: q({ color: e.isActive ? e.activeColor : e.inactiveColor }),
    onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
  }, [N("div", { class: p(e.classes(e.n("icon-container"), [e.variant, e.n("--variant-icon-container")], [e.isActive && e.variant, e.n("--variant-active")])) }, [e.badge ? (g(), ye(o, We({ key: 0 }, e.badgeProps, {
    class: e.n("badge"),
    "var-bottom-navigation-item-cover": ""
  }), {
    default: fe(() => [F(e.$slots, "icon", { active: e.isActive }, () => [e.icon ? (g(), ye(r, {
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
  }, 16, ["class"])) : F(e.$slots, "icon", {
    key: 1,
    active: e.isActive
  }, () => [e.icon ? (g(), ye(r, {
    key: 0,
    name: e.icon,
    namespace: e.namespace,
    class: p(e.n("icon")),
    "var-bottom-navigation-item-cover": ""
  }, null, 8, [
    "name",
    "namespace",
    "class"
  ])) : K("v-if", !0)])], 2), N("span", { class: p(e.n("label")) }, [F(e.$slots, "default", {}, () => [Be(ie(e.label), 1)])], 2)], 6)), [[t]]);
}
var Tp = _({
  name: kC,
  components: {
    VarBadge: _t,
    VarIcon: xe
  },
  directives: { Ripple: un },
  props: zp,
  setup(e) {
    const n = E(() => e.name), r = E(() => [n.value, t.value].includes(s.value)), o = E(() => e.badge === !0 ? SC : e.badge), { index: t, bottomNavigation: a, bindBottomNavigation: i } = wC(), { animated: l, active: s, activeColor: u, inactiveColor: d, variant: c } = a;
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
      n: $C,
      classes: CC,
      handleClick: f
    };
  }
});
Tp.render = OC;
var Ka = Tp;
te(Ka);
le(Ka, zp);
var DB = Ka, Nl = Ka, Ep = {
  separator: String,
  onClick: R()
}, Ip = /* @__PURE__ */ Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function PC() {
  const { childProviders: e, bindChildren: n, length: r } = kn(Ip);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function zC() {
  const { parentProvider: e, bindParent: n, index: r } = wn(Ip);
  return Yn(!!n, "Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var { name: TC, n: EC, classes: IC } = ee("breadcrumb");
function BC(e, n) {
  return g(), S("div", { class: p(e.n()) }, [N("div", {
    class: p(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
    onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
  }, [F(e.$slots, "default")], 2), e.isLast ? K("v-if", !0) : F(e.$slots, "separator", { key: 0 }, () => {
    var r;
    return [N("div", {
      class: p(e.n("separator")),
      "aria-hidden": "true"
    }, ie((r = e.separator) != null ? r : e.parentSeparator), 3)];
  })], 2);
}
var Bp = _({
  name: TC,
  props: Ep,
  setup(e) {
    const { index: n, breadcrumb: r, bindBreadcrumb: o } = zC(), t = E(() => n.value === r.length.value - 1), a = E(() => r.separator.value);
    o(null);
    function i(l) {
      t.value || k(e.onClick, l);
    }
    return {
      n: EC,
      classes: IC,
      isLast: t,
      parentSeparator: a,
      handleClick: i
    };
  }
});
Bp.render = BC;
var qa = Bp;
te(qa);
le(qa, Ep);
var MB = qa, Vl = qa, Dp = { separator: {
  type: String,
  default: "/"
} }, { name: DC, n: MC } = ee("breadcrumbs");
function AC(e, n) {
  return g(), S("div", {
    class: p(e.n()),
    role: "navigation",
    "aria-label": "Breadcrumbs"
  }, [F(e.$slots, "default")], 2);
}
var Mp = _({
  name: DC,
  props: Dp,
  setup(e) {
    const n = E(() => e.separator), { bindBreadcrumbList: r, length: o } = PC();
    return r({
      length: o,
      separator: n
    }), { n: MC };
  }
});
Mp.render = AC;
var Xa = Mp;
te(Xa);
le(Xa, Dp);
var AB = Xa, Rl = Xa, Ap = {
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
}, { name: NC, n: VC, classes: RC } = ee("button-group");
function LC(e, n) {
  return g(), S("div", { class: p(e.classes(e.n(), e.n("$--box"), [e.mode, `${e.n(`--mode-${e.mode}`)}`], [
    e.vertical,
    e.n("--vertical"),
    e.n("--horizontal")
  ], [e.mode === "normal", e.formatElevation(e.elevation, 2)])) }, [F(e.$slots, "default")], 2);
}
var Np = _({
  name: NC,
  props: Ap,
  setup(e) {
    const { bindButtons: n } = K$();
    return n({
      elevation: E(() => e.elevation),
      type: E(() => e.type),
      size: E(() => e.size),
      color: E(() => e.color),
      textColor: E(() => e.textColor),
      mode: E(() => e.mode)
    }), {
      n: VC,
      classes: RC,
      formatElevation: vn
    };
  }
});
Np.render = LC;
var Ga = Np;
te(Ga);
le(Ga, Ap);
var NB = Ga, Ll = Ga, Vp = {
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
}, FC = (e, n, r) => new Promise((o, t) => {
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
}), { name: UC, n: HC, classes: jC } = ee("card"), YC = 500, WC = ["src", "alt"];
function KC(e, n) {
  const r = Q("var-icon"), o = Q("var-button"), t = qe("ripple");
  return Ne((g(), S("div", {
    ref: "card",
    class: p(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.variant === "outlined" || e.outline, e.n("--outline")], [e.variant === "filled", e.n("--filled")], [e.variant === "standard" || e.outline, e.formatElevation(e.elevation, 1)])),
    style: q({ zIndex: e.floated ? e.zIndex : void 0 }),
    onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
  }, [N("div", {
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
    F(e.$slots, "image", {}, () => [e.src ? (g(), S("img", {
      key: 0,
      class: p(e.n("image")),
      style: q({
        objectFit: e.fit,
        height: e.toSizeUnit(e.imageHeight),
        width: e.toSizeUnit(e.imageWidth)
      }),
      src: e.src,
      alt: e.alt
    }, null, 14, WC)) : K("v-if", !0)]),
    N("div", { class: p(e.n("container")) }, [
      F(e.$slots, "title", { slotClass: e.n("title") }, () => [e.title ? (g(), S("div", {
        key: 0,
        class: p(e.n("title"))
      }, ie(e.title), 3)) : K("v-if", !0)]),
      F(e.$slots, "subtitle", { slotClass: e.n("subtitle") }, () => [e.subtitle ? (g(), S("div", {
        key: 0,
        class: p(e.n("subtitle"))
      }, ie(e.subtitle), 3)) : K("v-if", !0)]),
      e.$slots.default ? (g(), S("div", {
        key: 0,
        class: p(e.n("content"))
      }, [F(e.$slots, "default")], 2)) : K("v-if", !0),
      F(e.$slots, "description", { slotClass: e.n("description") }, () => [e.description ? (g(), S("div", {
        key: 0,
        class: p(e.n("description"))
      }, ie(e.description), 3)) : K("v-if", !0)]),
      e.$slots.extra ? (g(), S("div", {
        key: 1,
        class: p(e.n("footer"))
      }, [F(e.$slots, "extra")], 2)) : K("v-if", !0),
      e.$slots["floating-content"] && !e.isRow ? (g(), S("div", {
        key: 2,
        class: p(e.n("floating-content")),
        style: q({
          height: e.contentHeight,
          opacity: e.opacity,
          transition: `opacity ${e.floatingDuration * 2}ms`
        })
      }, [F(e.$slots, "floating-content")], 6)) : K("v-if", !0)
    ], 2),
    e.showFloatingButtons ? (g(), S("div", {
      key: 0,
      class: p(e.classes(e.n("floating-buttons"), e.n("$--box"))),
      style: q({
        zIndex: e.zIndex,
        opacity: e.opacity,
        transition: `opacity ${e.floatingDuration * 2}ms`
      })
    }, [F(e.$slots, "close-button", {}, () => [X(o, {
      "var-card-cover": "",
      class: p(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
      onClick: jn(e.close, ["stop"])
    }, {
      default: fe(() => [X(r, {
        "var-card-cover": "",
        name: "window-close",
        class: p(e.n("close-button-icon"))
      }, null, 8, ["class"])]),
      _: 1
    }, 8, ["class", "onClick"])])], 6)) : K("v-if", !0)
  ], 6), N("div", {
    class: p(e.n("holder")),
    style: q({
      width: e.holderWidth,
      height: e.holderHeight
    })
  }, null, 6)], 6)), [[t, { disabled: !e.ripple || e.floater }]]);
}
var Rp = _({
  name: UC,
  directives: { Ripple: un },
  components: {
    VarIcon: xe,
    VarButton: Nn
  },
  props: Vp,
  setup(e) {
    const n = y(null), r = y(null), o = y("auto"), t = y("auto"), a = y("100%"), i = y("100%"), l = y("auto"), s = y("auto"), u = y(void 0), d = y("hidden"), c = y("0px"), f = y("0"), v = E(() => e.layout === "row"), m = y(!1), h = y(!1), { zIndex: w } = ot(() => e.floating, 1);
    let $ = "auto", C = "auto", b = null;
    const P = y(null);
    rt(() => e.floating, () => !v.value), ve(() => e.floating, (A) => {
      v.value || Fe(() => {
        A ? O() : I();
      });
    }, { immediate: !0 });
    function O() {
      clearTimeout(P.value), clearTimeout(b), P.value = null, P.value = setTimeout(() => FC(null, null, function* () {
        const { width: A, height: B, left: T, top: D } = tn(n.value);
        o.value = ze(A), t.value = ze(B), a.value = o.value, i.value = t.value, l.value = ze(D), s.value = ze(T), u.value = "fixed", $ = l.value, C = s.value, m.value = !0, yield Pn(), l.value = "0", s.value = "0", a.value = "100vw", i.value = "100vh", c.value = "auto", f.value = "1", d.value = "auto", h.value = !0;
      }), e.ripple ? YC : 0);
    }
    function I() {
      clearTimeout(b), clearTimeout(P.value), P.value = null, a.value = o.value, i.value = t.value, l.value = $, s.value = C, c.value = "0px", f.value = "0", m.value = !1, b = setTimeout(() => {
        o.value = "auto", t.value = "auto", a.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", $ = "auto", C = "auto", d.value = "hidden", u.value = void 0, h.value = !1;
      }, e.floatingDuration);
    }
    function j() {
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
      n: HC,
      classes: jC,
      toSizeUnit: ze,
      close: j,
      formatElevation: vn,
      handleClick: M
    };
  }
});
Rp.render = KC;
var Za = Rp;
te(Za);
le(Za, Vp);
var VB = Za, Fl = Za, Lp = {
  title: String,
  icon: De(sn, "name"),
  namespace: De(sn, "namespace"),
  description: String,
  border: Boolean,
  borderOffset: [Number, String],
  iconClass: String,
  titleClass: String,
  descriptionClass: String,
  extraClass: String,
  ripple: Boolean,
  onClick: R()
}, { name: qC, n: XC, classes: GC } = ee("cell");
function ZC(e, n) {
  const r = Q("var-icon"), o = qe("ripple");
  return Ne((g(), S("div", {
    class: p(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
    style: q(e.borderOffsetStyles),
    onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
  }, [
    F(e.$slots, "icon", {}, () => [e.icon ? (g(), S("div", {
      key: 0,
      class: p(e.classes(e.n("icon"), e.iconClass))
    }, [X(r, {
      name: e.icon,
      namespace: e.namespace
    }, null, 8, ["name", "namespace"])], 2)) : K("v-if", !0)]),
    N("div", { class: p(e.n("content")) }, [F(e.$slots, "default", {}, () => [e.title ? (g(), S("div", {
      key: 0,
      class: p(e.classes(e.n("title"), e.titleClass))
    }, ie(e.title), 3)) : K("v-if", !0)]), F(e.$slots, "description", {}, () => [e.description ? (g(), S("div", {
      key: 0,
      class: p(e.classes(e.n("description"), e.descriptionClass))
    }, ie(e.description), 3)) : K("v-if", !0)])], 2),
    e.$slots.extra ? (g(), S("div", {
      key: 0,
      class: p(e.classes(e.n("extra"), e.extraClass))
    }, [F(e.$slots, "extra")], 2)) : K("v-if", !0)
  ], 6)), [[o, { disabled: !e.ripple }]]);
}
var Fp = _({
  name: qC,
  components: { VarIcon: xe },
  directives: { Ripple: un },
  props: Lp,
  setup(e) {
    const n = E(() => e.borderOffset == null ? {} : {
      "--cell-border-left": ze(e.borderOffset),
      "--cell-border-right": ze(e.borderOffset)
    });
    function r(o) {
      k(e.onClick, o);
    }
    return {
      borderOffsetStyles: n,
      n: XC,
      classes: GC,
      toSizeUnit: ze,
      handleClick: r
    };
  }
});
Fp.render = ZC;
var Ja = Fp;
te(Ja);
le(Ja, Lp);
var RB = Ja, Ul = Ja, Up = {
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
}, { name: JC, n: QC, classes: xC } = ee("checkbox-group");
function _C(e, n) {
  const r = Q("maybe-v-node"), o = Q("var-checkbox"), t = Q("var-form-details");
  return g(), S("div", { class: p(e.n("wrap")) }, [N("div", { class: p(e.classes(e.n(), e.n(`--${e.direction}`))) }, [e.options.length ? (g(!0), S(Ae, { key: 0 }, Ge(e.options, (a) => (g(), ye(o, {
    key: a[e.valueKey],
    "checked-value": a[e.valueKey],
    disabled: a.disabled
  }, {
    default: fe(({ checked: i }) => [X(r, { is: e.isFunction(a[e.labelKey]) ? a[e.labelKey](a, i) : a[e.labelKey] }, null, 8, ["is"])]),
    _: 2
  }, 1032, ["checked-value", "disabled"]))), 128)) : K("v-if", !0), F(e.$slots, "default")], 2), X(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var Hp = _({
  name: JC,
  components: {
    VarFormDetails: An,
    VarCheckbox: to,
    MaybeVNode: nt
  },
  props: Up,
  setup(e) {
    const n = E(() => e.max), r = E(() => e.modelValue.length), { length: o, checkboxes: t, bindCheckboxes: a } = Q1(), { bindForm: i } = Xn(), { errorMessage: l, validateWithTrigger: s, validate: u, resetValidation: d } = qn(), c = {
      max: n,
      checkedCount: r,
      onChecked: m,
      onUnchecked: h,
      validate: P,
      resetValidation: d,
      reset: b,
      errorMessage: E(() => l.value)
    };
    ve(() => e.modelValue, w, { deep: !0 }), ve(() => o.value, w), a(c), k(i, c);
    function f(O) {
      Fe(() => {
        const { validateTrigger: I, rules: j, modelValue: M } = e;
        s(I, O, j, M);
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
      I.includes(O) && v(I.filter((j) => j !== O));
    }
    function w() {
      t.forEach(({ sync: O }) => O(e.modelValue));
    }
    function $() {
      const O = qt(t.map(({ checkedValue: I }) => I.value));
      return k(e["onUpdate:modelValue"], O), O;
    }
    function C() {
      const O = qt(t.filter(({ checked: I }) => !I.value).map(({ checkedValue: I }) => I.value));
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
      n: QC,
      classes: xC,
      checkAll: $,
      inverseAll: C,
      reset: b,
      validate: P,
      resetValidation: d,
      isFunction: fn
    };
  }
});
Hp.render = _C;
var Qa = Hp;
te(Qa);
le(Qa, Up);
var LB = Qa, Hl = Qa, jp = {
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
  iconName: De(sn, "name"),
  namespace: De(sn, "namespace"),
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
}, { name: eS, n: wr, classes: nS } = ee("chip");
function rS(e, n) {
  const r = Q("var-icon");
  return g(), ye(nn, { name: e.n("$-fade") }, {
    default: fe(() => [N("span", We({
      class: e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 1), ...e.contentClass),
      style: e.chipStyle
    }, e.$attrs), [
      F(e.$slots, "left"),
      N("span", { class: p(e.n(`text-${e.size}`)) }, [F(e.$slots, "default")], 2),
      F(e.$slots, "right"),
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
var Yp = _({
  name: eS,
  components: { VarIcon: xe },
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
      classes: nS,
      formatElevation: vn,
      handleClose: o
    };
  }
});
Yp.render = rS;
var xa = Yp;
te(xa);
le(xa, jp);
var FB = xa, ea = xa, jl = /* @__PURE__ */ Symbol("HIGHLIGHTER_PROVIDER_KEY");
function oS(e) {
  Qs(jl, e);
}
function tS() {
  return ou(jl) ? Js(jl) : {
    highlighter: null,
    theme: null
  };
}
var Wp = {
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
}, aS = (e, n, r) => new Promise((o, t) => {
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
}), { name: iS, n: lS, classes: sS } = ee("code"), uS = ["innerHTML"];
function dS(e, n) {
  return g(), S("div", {
    class: p(e.classes(e.n(), [e.wordWrap, e.n("--word-wrap")])),
    innerHTML: e.highlightedCode
  }, null, 10, uS);
}
var Kp = _({
  name: iS,
  props: Wp,
  setup(e) {
    const { highlighter: n, theme: r } = tS(), o = y(""), t = E(() => {
      var a;
      return (a = e.theme) != null ? a : r?.value;
    });
    return n && ve(() => [
      n.value,
      e.code,
      e.language,
      t.value,
      e.trim
    ], (a) => aS(null, [a], function* ([i, l, s = "", u = "", d]) {
      i && (o.value = yield i.codeToHtml(d ? l.trim() : l, {
        lang: s,
        theme: u
      }));
    }), { immediate: !0 }), {
      n: lS,
      classes: sS,
      highlightedCode: o
    };
  }
});
Kp.render = dS;
var _a = Kp;
te(_a);
le(_a, Wp);
var UB = _a, Yl = _a, qp = {
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
}, Xp = /* @__PURE__ */ Symbol("ROW_BIND_COL_KEY");
function cS() {
  const { length: e, childProviders: n, bindChildren: r } = kn(Xp);
  return {
    length: e,
    cols: n,
    bindCols: r
  };
}
function fS() {
  const { index: e, bindParent: n, parentProvider: r } = wn(Xp);
  return {
    index: e,
    row: r,
    bindRow: n
  };
}
var { name: vS, n: ht, classes: pS } = ee("col");
function mS(e, n) {
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
  }, [F(e.$slots, "default")], 6);
}
var Gp = _({
  name: vS,
  props: qp,
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
    }), { row: t, bindRow: a } = fS();
    k(a, null);
    function i(s, u) {
      const d = [];
      if (u == null) return d;
      if (gn(u)) {
        const { offset: c, span: f } = u;
        return Number(f) >= 0 && d.push(ht(`--span-${s}-${f}`)), c && d.push(ht(`--offset-${s}-${c}`)), d;
      }
      return Number(u) >= 0 && d.push(ht(`--span-${s}-${u}`)), d;
    }
    function l(s) {
      k(e.onClick, s);
    }
    return {
      span: n,
      offset: r,
      padding: o,
      n: ht,
      classes: pS,
      toNumber: H,
      toSizeUnit: ze,
      getSize: i,
      handleClick: l,
      padStartFlex: Jt
    };
  }
});
Gp.render = mS;
var ei = Gp;
te(ei);
le(ei, qp);
var HB = ei, Wl = ei, Zp = {
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
}, Jp = /* @__PURE__ */ Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function hS() {
  const { childProviders: e, length: n, bindChildren: r } = kn(Jp);
  return {
    length: n,
    collapseItems: e,
    bindCollapseItems: r
  };
}
var { name: gS, n: bS } = ee("collapse");
function yS(e, n) {
  return g(), S("div", { class: p(e.n()) }, [F(e.$slots, "default")], 2);
}
var Qp = _({
  name: gS,
  props: Zp,
  setup(e) {
    const n = E(() => e.offset), r = E(() => e.divider), o = E(() => e.elevation), t = E(() => e.accordion), a = E(() => mr(e.modelValue)), { length: i, collapseItems: l, bindCollapseItems: s } = hS(), u = {
      offset: n,
      divider: r,
      elevation: o,
      accordion: t,
      updateItem: d
    };
    ve(() => i.value, () => Fe().then(v)), ve(() => e.modelValue, () => Fe().then(v)), s(u);
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
      const h = Lf(mr(f()));
      l.forEach((w) => {
        w.init(h.includes(w));
      });
    }
    return {
      divider: r,
      n: bS,
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
Qp.render = yS;
var ni = Qp;
te(ni);
le(ni, Zp);
var jB = ni, Kl = ni, _d = (e, n, r) => new Promise((o, t) => {
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
function xp(e) {
  const { contentEl: n, showContent: r, expand: o } = e;
  let t = !0;
  ve(o, (u) => {
    Fe(() => {
      u ? a() : i();
    });
  }, { immediate: !0 });
  function a() {
    return _d(this, null, function* () {
      if (!n.value || (n.value.style.height = "", r.value = !0, yield Tr(), !n.value)) return;
      const { offsetHeight: u } = n.value;
      n.value.style.height = "0px", yield Tr(), n.value && (n.value.style.height = u + "px", t && (yield Pn(), t && l()));
    });
  }
  const i = () => _d(null, null, function* () {
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
var _p = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
};
function wS() {
  const { parentProvider: e, index: n, bindParent: r } = wn(Jp);
  return Yn(!!r, "Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: r
  };
}
var { name: kS, n: $S, classes: CS } = ee("collapse-item"), SS = [
  "aria-expanded",
  "aria-disabled",
  "role"
];
function OS(e, n) {
  const r = Q("var-icon");
  return g(), S("div", {
    class: p(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
    style: q(`--collapse-divider-top: ${e.divider ? "var(--collapse-border-top)" : "none"}`)
  }, [
    N("div", { class: p(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2))) }, null, 2),
    N("div", {
      class: p(e.classes(e.n("header"), [!e.disabled, e.n("header--cursor-pointer")])),
      "aria-expanded": e.isShow,
      "aria-disabled": e.disabled,
      role: e.accordion ? "tab" : "button",
      onClick: n[0] || (n[0] = (...o) => e.toggle && e.toggle(...o))
    }, [e.$slots.title || e.title ? (g(), S("div", {
      key: 0,
      class: p(e.n("header-title"))
    }, [F(e.$slots, "title", {}, () => [Be(ie(e.title), 1)])], 2)) : K("v-if", !0), N("div", { class: p(e.n("header-icon")) }, [F(e.$slots, "icon", {}, () => [X(r, {
      name: e.icon,
      transition: 250,
      class: p(e.classes(e.n("header-icon"), [e.isShow && e.icon === "chevron-down", e.n("header-open")], [e.disabled, e.n("header--disable")]))
    }, null, 8, ["name", "class"])])], 2)], 10, SS),
    Ne(N("div", {
      ref: "contentEl",
      class: p(e.n("content")),
      onTransitionend: n[1] || (n[1] = (...o) => e.handleTransitionEnd && e.handleTransitionEnd(...o)),
      onTransitionstart: n[2] || (n[2] = (...o) => e.handleTransitionStart && e.handleTransitionStart(...o))
    }, [N("div", { class: p(e.n("content-wrap")) }, [F(e.$slots, "default")], 2)], 34), [[_n, e.showContent]])
  ], 6);
}
var em = _({
  name: kS,
  components: { VarIcon: xe },
  props: _p,
  setup(e) {
    const n = y(!1), r = y(!1), o = y(null), t = E(() => e.name), a = E(() => e.disabled), { index: i, collapse: l, bindCollapse: s } = wS(), { offset: u, divider: d, elevation: c, accordion: f, updateItem: v } = l;
    s({
      index: i,
      name: t,
      disabled: a,
      init: w
    });
    const { handleTransitionEnd: m, handleTransitionStart: h } = xp({
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
      n: $S,
      classes: CS,
      toggle: $,
      formatElevation: vn,
      handleTransitionEnd: m,
      handleTransitionStart: h
    };
  }
});
em.render = OS;
var ri = em;
te(ri);
le(ri, _p);
var YB = ri, ql = ri, nm = { expand: Boolean }, { name: PS, n: zS } = ee("collapse-transition");
function TS(e, n) {
  return Ne((g(), S("div", {
    ref: "contentEl",
    class: p(e.n("content")),
    onTransitionend: n[0] || (n[0] = (...r) => e.handleTransitionEnd && e.handleTransitionEnd(...r)),
    onTransitionstart: n[1] || (n[1] = (...r) => e.handleTransitionStart && e.handleTransitionStart(...r))
  }, [F(e.$slots, "default")], 34)), [[_n, e.showContent]]);
}
var rm = _({
  name: PS,
  props: nm,
  setup(e) {
    const n = y(!1), r = y(null), { handleTransitionEnd: o, handleTransitionStart: t } = xp({
      contentEl: r,
      showContent: n,
      expand: E(() => e.expand)
    });
    return {
      showContent: n,
      contentEl: r,
      n: zS,
      handleTransitionEnd: o,
      handleTransitionStart: t
    };
  }
});
rm.render = TS;
var oi = rm;
te(oi);
le(oi, nm);
var WB = oi, Xl = oi, om = {
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
}, { name: ES, n: IS } = ee("count-to");
function BS(e, n) {
  return g(), S("div", { class: p(e.n()) }, [F(e.$slots, "default", { value: e.value }, () => [Be(ie(e.value), 1)])], 2);
}
var tm = _({
  name: ES,
  props: om,
  setup(e) {
    const { value: n, reset: r, start: o, pause: t } = H0({
      from: () => H(e.from),
      to: () => H(e.to),
      duration: () => H(e.duration),
      timingFunction: e.timingFunction,
      onFinished() {
        k(e.onEnd);
      }
    }), a = E(() => yl(n.value, H(e.precision)));
    ve(() => [
      e.from,
      e.to,
      e.duration
    ], i), gr(i);
    function i() {
      r(), e.autoStart && o();
    }
    return {
      value: a,
      n: IS,
      start: o,
      pause: t,
      reset: i,
      toNumber: H,
      floor: yl
    };
  }
});
tm.render = BS;
var ti = tm;
te(ti);
le(ti, om);
var KB = ti, Gl = ti, am = {
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
}, { name: DS, n: MS } = ee("countdown"), Zl = 1e3, Jl = 60 * Zl, Ql = 60 * Jl, ec = 24 * Ql;
function AS(e, n) {
  return g(), S("div", { class: p(e.n()) }, [F(e.$slots, "default", jr(da(e.timeData)), () => [Be(ie(e.showTime), 1)])], 2);
}
var im = _({
  name: DS,
  props: am,
  setup(e) {
    const n = y(""), r = y({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    });
    let o = 0, t = !1, a = 0, i = 0, l;
    ve(() => e.time, () => {
      v(), e.autoStart && c();
    }), gr(() => {
      d(), e.autoStart && c();
    }), Nr(() => {
      l != null && (t = l, t === !0 && c(!0));
    }), vo(() => {
      l = t, f();
    }), Jo(f);
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
        m.includes(b) ? m = m.replace(b, Gr(`${w[P]}`, 2, "0")) : w[P + 1] += w[P] * C[P];
      }), m.includes("S")) {
        const b = Gr(`${w[w.length - 1]}`, 3, "0");
        m.includes("SSS") ? m = m.replace("SSS", b) : m.includes("SS") ? m = m.replace("SS", b.slice(0, 2)) : m = m.replace("S", b.slice(0, 1));
      }
      return m;
    }
    function u(m) {
      const h = {
        days: Math.floor(m / ec),
        hours: Math.floor(m % ec / Ql),
        minutes: Math.floor(m % Ql / Jl),
        seconds: Math.floor(m % Jl / Zl),
        milliseconds: Math.floor(m % Zl)
      };
      r.value = h, k(e.onChange, r.value), n.value = s(e.format, h);
    }
    function d() {
      const { time: m, onEnd: h } = e, w = performance.now();
      if (o || (o = w + H(m)), i = o - w, i < 0 && (i = 0), u(i), i === 0) {
        k(h);
        return;
      }
      t && (a = qr(d));
    }
    function c(m = !1) {
      t && !m || (t = !0, o = performance.now() + (i || H(e.time)), d());
    }
    function f() {
      t = !1, Ao(a);
    }
    function v() {
      o = 0, t = !1, Ao(a), d();
    }
    return {
      showTime: n,
      timeData: r,
      n: MS,
      start: c,
      pause: f,
      reset: v
    };
  }
});
im.render = AS;
var ai = im;
te(ai);
le(ai, am);
var qB = ai, xl = ai, no = 9e15, Lr = 1e9, _l = "0123456789abcdef", na = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", ra = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", es = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -no,
  maxE: no,
  crypto: !1
}, lm, pr, Ee = !0, ii = "[DecimalError] ", Ar = ii + "Invalid argument: ", sm = ii + "Precision limit exceeded", um = ii + "crypto unavailable", dm = "[object Decimal]", In = Math.floor, hn = Math.pow, NS = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, VS = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, RS = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, cm = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, nr = 1e7, Pe = 7, LS = 9007199254740991, FS = na.length - 1, ns = ra.length - 1, x = { toStringTag: dm };
x.absoluteValue = x.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), ke(e);
};
x.ceil = function() {
  return ke(new this.constructor(this), this.e + 1, 2);
};
x.clampedTo = x.clamp = function(e, n) {
  var r, o = this, t = o.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s) return new t(NaN);
  if (e.gt(n)) throw Error(Ar + n);
  return r = o.cmp(e), r < 0 ? e : o.cmp(n) > 0 ? n : new t(o);
};
x.comparedTo = x.cmp = function(e) {
  var n, r, o, t, a = this, i = a.d, l = (e = new a.constructor(e)).d, s = a.s, u = e.s;
  if (!i || !l) return !s || !u ? NaN : s !== u ? s : i === l ? 0 : !i ^ s < 0 ? 1 : -1;
  if (!i[0] || !l[0]) return i[0] ? s : l[0] ? -u : 0;
  if (s !== u) return s;
  if (a.e !== e.e) return a.e > e.e ^ s < 0 ? 1 : -1;
  for (o = i.length, t = l.length, n = 0, r = o < t ? o : t; n < r; ++n) if (i[n] !== l[n]) return i[n] > l[n] ^ s < 0 ? 1 : -1;
  return o === t ? 0 : o > t ^ s < 0 ? 1 : -1;
};
x.cosine = x.cos = function() {
  var e, n, r = this, o = r.constructor;
  return r.d ? r.d[0] ? (e = o.precision, n = o.rounding, o.precision = e + Math.max(r.e, r.sd()) + Pe, o.rounding = 1, r = US(o, hm(o, r)), o.precision = e, o.rounding = n, ke(pr == 2 || pr == 3 ? r.neg() : r, e, n, !0)) : new o(1) : new o(NaN);
};
x.cubeRoot = x.cbrt = function() {
  var e, n, r, o, t, a, i, l, s, u, d = this, c = d.constructor;
  if (!d.isFinite() || d.isZero()) return new c(d);
  for (Ee = !1, a = d.s * hn(d.s * d, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (r = On(d.d), e = d.e, (a = (e - r.length + 1) % 3) && (r += a == 1 || a == -2 ? "0" : "00"), a = hn(r, 1 / 3), e = In((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? r = "5e" + e : (r = a.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), o = new c(r), o.s = d.s) : o = new c(a.toString()), i = (e = c.precision) + 3; ; )
    if (l = o, s = l.times(l).times(l), u = s.plus(d), o = _e(u.plus(d).times(l), u.plus(s), i + 2, 1), On(l.d).slice(0, i) === (r = On(o.d)).slice(0, i))
      if (r = r.slice(i - 3, i + 1), r == "9999" || !t && r == "4999") {
        if (!t && (ke(l, e + 1, 0), l.times(l).times(l).eq(d))) {
          o = l;
          break;
        }
        i += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (ke(o, e + 1, 1), n = !o.times(o).times(o).eq(d));
        break;
      }
  return Ee = !0, ke(o, e, c.rounding, n);
};
x.decimalPlaces = x.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - In(this.e / Pe)) * Pe, e = n[e], e) for (; e % 10 == 0; e /= 10) r--;
    r < 0 && (r = 0);
  }
  return r;
};
x.dividedBy = x.div = function(e) {
  return _e(this, new this.constructor(e));
};
x.dividedToIntegerBy = x.divToInt = function(e) {
  var n = this, r = n.constructor;
  return ke(_e(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
x.equals = x.eq = function(e) {
  return this.cmp(e) === 0;
};
x.floor = function() {
  return ke(new this.constructor(this), this.e + 1, 3);
};
x.greaterThan = x.gt = function(e) {
  return this.cmp(e) > 0;
};
x.greaterThanOrEqualTo = x.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
x.hyperbolicCosine = x.cosh = function() {
  var e, n, r, o, t, a = this, i = a.constructor, l = new i(1);
  if (!a.isFinite()) return new i(a.s ? 1 / 0 : NaN);
  if (a.isZero()) return l;
  r = i.precision, o = i.rounding, i.precision = r + Math.max(a.e, a.sd()) + 4, i.rounding = 1, t = a.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / si(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), a = co(i, 1, a.times(n), new i(1), !0);
  for (var s, u = e, d = new i(8); u--; )
    s = a.times(a), a = l.minus(s.times(d.minus(s.times(d))));
  return ke(a, i.precision = r, i.rounding = o, !0);
};
x.hyperbolicSine = x.sinh = function() {
  var e, n, r, o, t = this, a = t.constructor;
  if (!t.isFinite() || t.isZero()) return new a(t);
  if (n = a.precision, r = a.rounding, a.precision = n + Math.max(t.e, t.sd()) + 4, a.rounding = 1, o = t.d.length, o < 3) t = co(a, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(o), e = e > 16 ? 16 : e | 0, t = t.times(1 / si(5, e)), t = co(a, 2, t, t, !0);
    for (var i, l = new a(5), s = new a(16), u = new a(20); e--; )
      i = t.times(t), t = t.times(l.plus(i.times(s.times(i).plus(u))));
  }
  return a.precision = n, a.rounding = r, ke(t, n, r, !0);
};
x.hyperbolicTangent = x.tanh = function() {
  var e, n, r = this, o = r.constructor;
  return r.isFinite() ? r.isZero() ? new o(r) : (e = o.precision, n = o.rounding, o.precision = e + 7, o.rounding = 1, _e(r.sinh(), r.cosh(), o.precision = e, o.rounding = n)) : new o(r.s);
};
x.inverseCosine = x.acos = function() {
  var e = this, n = e.constructor, r = e.abs().cmp(1), o = n.precision, t = n.rounding;
  return r !== -1 ? r === 0 ? e.isNeg() ? lr(n, o, t) : new n(0) : new n(NaN) : e.isZero() ? lr(n, o + 4, t).times(0.5) : (n.precision = o + 6, n.rounding = 1, e = new n(1).minus(e).div(e.plus(1)).sqrt().atan(), n.precision = o, n.rounding = t, e.times(2));
};
x.inverseHyperbolicCosine = x.acosh = function() {
  var e, n, r = this, o = r.constructor;
  return r.lte(1) ? new o(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = o.precision, n = o.rounding, o.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, o.rounding = 1, Ee = !1, r = r.times(r).minus(1).sqrt().plus(r), Ee = !0, o.precision = e, o.rounding = n, r.ln()) : new o(r);
};
x.inverseHyperbolicSine = x.asinh = function() {
  var e, n, r = this, o = r.constructor;
  return !r.isFinite() || r.isZero() ? new o(r) : (e = o.precision, n = o.rounding, o.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, o.rounding = 1, Ee = !1, r = r.times(r).plus(1).sqrt().plus(r), Ee = !0, o.precision = e, o.rounding = n, r.ln());
};
x.inverseHyperbolicTangent = x.atanh = function() {
  var e, n, r, o, t = this, a = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new a(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = a.precision, n = a.rounding, o = t.sd(), Math.max(o, e) < 2 * -t.e - 1 ? ke(new a(t), e, n, !0) : (a.precision = r = o - t.e, t = _e(t.plus(1), new a(1).minus(t), r + e, 1), a.precision = e + 4, a.rounding = 1, t = t.ln(), a.precision = e, a.rounding = n, t.times(0.5))) : new a(NaN);
};
x.inverseSine = x.asin = function() {
  var e, n, r, o, t = this, a = t.constructor;
  return t.isZero() ? new a(t) : (n = t.abs().cmp(1), r = a.precision, o = a.rounding, n !== -1 ? n === 0 ? (e = lr(a, r + 4, o).times(0.5), e.s = t.s, e) : new a(NaN) : (a.precision = r + 6, a.rounding = 1, t = t.div(new a(1).minus(t.times(t)).sqrt().plus(1)).atan(), a.precision = r, a.rounding = o, t.times(2)));
};
x.inverseTangent = x.atan = function() {
  var e, n, r, o, t, a, i, l, s, u = this, d = u.constructor, c = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero()) return new d(u);
    if (u.abs().eq(1) && c + 4 <= ns)
      return i = lr(d, c + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s) return new d(NaN);
    if (c + 4 <= ns)
      return i = lr(d, c + 4, f).times(0.5), i.s = u.s, i;
  }
  for (d.precision = l = c + 10, d.rounding = 1, r = Math.min(28, l / Pe + 2 | 0), e = r; e; --e) u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (Ee = !1, n = Math.ceil(l / Pe), o = 1, s = u.times(u), i = new d(u), t = u; e !== -1; )
    if (t = t.times(s), a = i.minus(t.div(o += 2)), t = t.times(s), i = a.plus(t.div(o += 2)), i.d[n] !== void 0) for (e = n; i.d[e] === a.d[e] && e--; ) ;
  return r && (i = i.times(2 << r - 1)), Ee = !0, ke(i, d.precision = c, d.rounding = f, !0);
};
x.isFinite = function() {
  return !!this.d;
};
x.isInteger = x.isInt = function() {
  return !!this.d && In(this.e / Pe) > this.d.length - 2;
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
  if (Ee = !1, l = c + v, i = Pr(u, l), o = n ? oa(d, l + 10) : Pr(e, l), s = _e(i, o, l, 1), Yo(s.d, t = c, f)) do
    if (l += 10, i = Pr(u, l), o = n ? oa(d, l + 10) : Pr(e, l), s = _e(i, o, l, 1), !a) {
      +On(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = ke(s, c + 1, 0));
      break;
    }
  while (Yo(s.d, t += 10, f));
  return Ee = !0, ke(s, c, f);
};
x.minus = x.sub = function(e) {
  var n, r, o, t, a, i, l, s, u, d, c, f, v = this, m = v.constructor;
  if (e = new m(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new m(NaN) : v.d ? e.s = -e.s : e = new m(e.d || v.s !== e.s ? v : NaN), e;
  if (v.s != e.s)
    return e.s = -e.s, v.plus(e);
  if (u = v.d, f = e.d, l = m.precision, s = m.rounding, !u[0] || !f[0]) {
    if (f[0]) e.s = -e.s;
    else if (u[0]) e = new m(v);
    else return new m(s === 3 ? -0 : 0);
    return Ee ? ke(e, l, s) : e;
  }
  if (r = In(e.e / Pe), d = In(v.e / Pe), u = u.slice(), a = d - r, a) {
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
      for (t = o; t && u[--t] === 0; ) u[t] = nr - 1;
      --u[t], u[o] += nr;
    }
    u[o] -= f[o];
  }
  for (; u[--i] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --r;
  return u[0] ? (e.d = u, e.e = li(u, r), Ee ? ke(e, l, s) : e) : new m(s === 3 ? -0 : 0);
};
x.modulo = x.mod = function(e) {
  var n, r = this, o = r.constructor;
  return e = new o(e), !r.d || !e.s || e.d && !e.d[0] ? new o(NaN) : !e.d || r.d && !r.d[0] ? ke(new o(r), o.precision, o.rounding) : (Ee = !1, o.modulo == 9 ? (n = _e(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = _e(r, e, 0, o.modulo, 1), n = n.times(e), Ee = !0, r.minus(n));
};
x.naturalExponential = x.exp = function() {
  return rs(this);
};
x.naturalLogarithm = x.ln = function() {
  return Pr(this);
};
x.negated = x.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, ke(e);
};
x.plus = x.add = function(e) {
  var n, r, o, t, a, i, l, s, u, d, c = this, f = c.constructor;
  if (e = new f(e), !c.d || !e.d)
    return !c.s || !e.s ? e = new f(NaN) : c.d || (e = new f(e.d || c.s === e.s ? c : NaN)), e;
  if (c.s != e.s)
    return e.s = -e.s, c.minus(e);
  if (u = c.d, d = e.d, l = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(c)), Ee ? ke(e, l, s) : e;
  if (a = In(c.e / Pe), o = In(e.e / Pe), u = u.slice(), t = a - o, t) {
    for (t < 0 ? (r = u, t = -t, i = d.length) : (r = d, o = a, i = u.length), a = Math.ceil(l / Pe), i = a > i ? a + 1 : i + 1, t > i && (t = i, r.length = 1), r.reverse(); t--; ) r.push(0);
    r.reverse();
  }
  for (i = u.length, t = d.length, i - t < 0 && (t = i, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / nr | 0, u[t] %= nr;
  for (n && (u.unshift(n), ++o), i = u.length; u[--i] == 0; ) u.pop();
  return e.d = u, e.e = li(u, o), Ee ? ke(e, l, s) : e;
};
x.precision = x.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Ar + e);
  return r.d ? (n = fm(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
x.round = function() {
  var e = this, n = e.constructor;
  return ke(new n(e), e.e + 1, n.rounding);
};
x.sine = x.sin = function() {
  var e, n, r = this, o = r.constructor;
  return r.isFinite() ? r.isZero() ? new o(r) : (e = o.precision, n = o.rounding, o.precision = e + Math.max(r.e, r.sd()) + Pe, o.rounding = 1, r = jS(o, hm(o, r)), o.precision = e, o.rounding = n, ke(pr > 2 ? r.neg() : r, e, n, !0)) : new o(NaN);
};
x.squareRoot = x.sqrt = function() {
  var e, n, r, o, t, a, i = this, l = i.d, s = i.e, u = i.s, d = i.constructor;
  if (u !== 1 || !l || !l[0]) return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (Ee = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = On(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = In((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), o = new d(n)) : o = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (a = o, o = a.plus(_e(i, a, r + 2, 1)).times(0.5), On(a.d).slice(0, r) === (n = On(o.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !t && n == "4999") {
        if (!t && (ke(a, s + 1, 0), a.times(a).eq(i))) {
          o = a;
          break;
        }
        r += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (ke(o, s + 1, 1), e = !o.times(o).eq(i));
        break;
      }
  return Ee = !0, ke(o, s, d.rounding, e);
};
x.tangent = x.tan = function() {
  var e, n, r = this, o = r.constructor;
  return r.isFinite() ? r.isZero() ? new o(r) : (e = o.precision, n = o.rounding, o.precision = e + 10, o.rounding = 1, r = r.sin(), r.s = 1, r = _e(r, new o(1).minus(r.times(r)).sqrt(), e + 10, 0), o.precision = e, o.rounding = n, ke(pr == 2 || pr == 4 ? r.neg() : r, e, n, !0)) : new o(NaN);
};
x.times = x.mul = function(e) {
  var n, r, o, t, a, i, l, s, u, d = this, c = d.constructor, f = d.d, v = (e = new c(e)).d;
  if (e.s *= d.s, !f || !f[0] || !v || !v[0]) return new c(!e.s || f && !f[0] && !v || v && !v[0] && !f ? NaN : !f || !v ? e.s / 0 : e.s * 0);
  for (r = In(d.e / Pe) + In(e.e / Pe), s = f.length, u = v.length, s < u && (a = f, f = v, v = a, i = s, s = u, u = i), a = [], i = s + u, o = i; o--; ) a.push(0);
  for (o = u; --o >= 0; ) {
    for (n = 0, t = s + o; t > o; )
      l = a[t] + v[o] * f[t - o - 1] + n, a[t--] = l % nr | 0, n = l / nr | 0;
    a[t] = (a[t] + n) % nr | 0;
  }
  for (; !a[--i]; ) a.pop();
  return n ? ++r : a.shift(), e.d = a, e.e = li(a, r), Ee ? ke(e, c.precision, c.rounding) : e;
};
x.toBinary = function(e, n) {
  return Ou(this, 2, e, n);
};
x.toDecimalPlaces = x.toDP = function(e, n) {
  var r = this, o = r.constructor;
  return r = new o(r), e === void 0 ? r : (Ln(e, 0, Lr), n === void 0 ? n = o.rounding : Ln(n, 0, 8), ke(r, e + r.e + 1, n));
};
x.toExponential = function(e, n) {
  var r, o = this, t = o.constructor;
  return e === void 0 ? r = ur(o, !0) : (Ln(e, 0, Lr), n === void 0 ? n = t.rounding : Ln(n, 0, 8), o = ke(new t(o), e + 1, n), r = ur(o, !0, e + 1)), o.isNeg() && !o.isZero() ? "-" + r : r;
};
x.toFixed = function(e, n) {
  var r, o, t = this, a = t.constructor;
  return e === void 0 ? r = ur(t) : (Ln(e, 0, Lr), n === void 0 ? n = a.rounding : Ln(n, 0, 8), o = ke(new a(t), e + t.e + 1, n), r = ur(o, !1, e + o.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
x.toFraction = function(e) {
  var n, r, o, t, a, i, l, s, u, d, c, f, v = this, m = v.d, h = v.constructor;
  if (!m) return new h(v);
  if (u = r = new h(1), o = s = new h(0), n = new h(o), a = n.e = fm(m) - v.e - 1, i = a % Pe, n.d[0] = hn(10, i < 0 ? Pe + i : i), e == null) e = a > 0 ? n : u;
  else {
    if (l = new h(e), !l.isInt() || l.lt(u)) throw Error(Ar + l);
    e = l.gt(n) ? a > 0 ? n : u : l;
  }
  for (Ee = !1, l = new h(On(m)), d = h.precision, h.precision = a = m.length * Pe * 2; c = _e(l, n, 0, 1, 1), t = r.plus(c.times(o)), t.cmp(e) != 1; )
    r = o, o = t, t = u, u = s.plus(c.times(t)), s = t, t = n, n = l.minus(c.times(t)), l = t;
  return t = _e(e.minus(r), o, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(o)), s.s = u.s = v.s, f = _e(u, o, a, 1).minus(v).abs().cmp(_e(s, r, a, 1).minus(v).abs()) < 1 ? [u, o] : [s, r], h.precision = d, Ee = !0, f;
};
x.toHexadecimal = x.toHex = function(e, n) {
  return Ou(this, 16, e, n);
};
x.toNearest = function(e, n) {
  var r = this, o = r.constructor;
  if (r = new o(r), e == null) {
    if (!r.d) return r;
    e = new o(1), n = o.rounding;
  } else {
    if (e = new o(e), n === void 0 ? n = o.rounding : Ln(n, 0, 8), !r.d) return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (Ee = !1, r = _e(r, e, 0, n, 1).times(e), Ee = !0, ke(r)) : (e.s = r.s, r = e), r;
};
x.toNumber = function() {
  return +this;
};
x.toOctal = function(e, n) {
  return Ou(this, 8, e, n);
};
x.toPower = x.pow = function(e) {
  var n, r, o, t, a, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0]) return new s(hn(+l, u));
  if (l = new s(l), l.eq(1)) return l;
  if (o = s.precision, a = s.rounding, e.eq(1)) return ke(l, o, a);
  if (n = In(e.e / Pe), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= LS)
    return t = vm(s, l, r, o), e.s < 0 ? new s(1).div(t) : ke(t, o, a);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1) return new s(NaN);
    if ((e.d[n] & 1) == 0 && (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return r = hn(+l, u), n = r == 0 || !isFinite(r) ? In(u * (Math.log("0." + On(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (Ee = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = rs(e.times(Pr(l, o + r)), o), t.d && (t = ke(t, o + 5, 1), Yo(t.d, o, a) && (n = o + 10, t = ke(rs(e.times(Pr(l, n + r)), n), n + 5, 1), +On(t.d).slice(o + 1, o + 15) + 1 == 1e14 && (t = ke(t, o + 1, 0)))), t.s = i, Ee = !0, s.rounding = a, ke(t, o, a));
};
x.toPrecision = function(e, n) {
  var r, o = this, t = o.constructor;
  return e === void 0 ? r = ur(o, o.e <= t.toExpNeg || o.e >= t.toExpPos) : (Ln(e, 1, Lr), n === void 0 ? n = t.rounding : Ln(n, 0, 8), o = ke(new t(o), e, n), r = ur(o, e <= o.e || o.e <= t.toExpNeg, e)), o.isNeg() && !o.isZero() ? "-" + r : r;
};
x.toSignificantDigits = x.toSD = function(e, n) {
  var r = this, o = r.constructor;
  return e === void 0 ? (e = o.precision, n = o.rounding) : (Ln(e, 1, Lr), n === void 0 ? n = o.rounding : Ln(n, 0, 8)), ke(new o(r), e, n);
};
x.toString = function() {
  var e = this, n = e.constructor, r = ur(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
x.truncated = x.trunc = function() {
  return ke(new this.constructor(this), this.e + 1, 1);
};
x.valueOf = x.toJSON = function() {
  var e = this, n = e.constructor, r = ur(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function On(e) {
  var n, r, o, t = e.length - 1, a = "", i = e[0];
  if (t > 0) {
    for (a += i, n = 1; n < t; n++)
      o = e[n] + "", r = Pe - o.length, r && (a += kr(r)), a += o;
    i = e[n], o = i + "", r = Pe - o.length, r && (a += kr(r));
  } else if (i === 0) return "0";
  for (; i % 10 === 0; ) i /= 10;
  return a + i;
}
function Ln(e, n, r) {
  if (e !== ~~e || e < n || e > r) throw Error(Ar + e);
}
function Yo(e, n, r, o) {
  var t, a, i, l;
  for (a = e[0]; a >= 10; a /= 10) --n;
  return --n < 0 ? (n += Pe, t = 0) : (t = Math.ceil((n + 1) / Pe), n %= Pe), a = hn(10, Pe - n), l = e[t] % a | 0, o == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : i = (r < 4 && l + 1 == a || r > 3 && l + 1 == a / 2) && (e[t + 1] / a / 100 | 0) == hn(10, n - 2) - 1 || (l == a / 2 || l == 0) && (e[t + 1] / a / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (o || r < 4) && l == 9999 || !o && r > 3 && l == 4999) : i = ((o || r < 4) && l + 1 == a || !o && r > 3 && l + 1 == a / 2) && (e[t + 1] / a / 1e3 | 0) == hn(10, n - 3) - 1, i;
}
function Bt(e, n, r) {
  for (var o, t = [0], a, i = 0, l = e.length; i < l; ) {
    for (a = t.length; a--; ) t[a] *= n;
    for (t[0] += _l.indexOf(e.charAt(i++)), o = 0; o < t.length; o++) t[o] > r - 1 && (t[o + 1] === void 0 && (t[o + 1] = 0), t[o + 1] += t[o] / r | 0, t[o] %= r);
  }
  return t.reverse();
}
function US(e, n) {
  var r, o, t;
  if (n.isZero()) return n;
  o = n.d.length, o < 32 ? (r = Math.ceil(o / 3), t = (1 / si(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = co(e, 1, n.times(t), new e(1));
  for (var a = r; a--; ) {
    var i = n.times(n);
    n = i.times(i).minus(i).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var _e = /* @__PURE__ */ (function() {
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
    var u, d, c, f, v, m, h, w, $, C, b, P, O, I, j, M, A, B, T, D, U = o.constructor, L = o.s == t.s ? 1 : -1, z = o.d, V = t.d;
    if (!z || !z[0] || !V || !V[0]) return new U(!o.s || !t.s || (z ? V && z[0] == V[0] : !V) ? NaN : z && z[0] == 0 || !V ? L * 0 : L / 0);
    for (s ? (v = 1, d = o.e - t.e) : (s = nr, v = Pe, d = In(o.e / v) - In(t.e / v)), T = V.length, A = z.length, $ = new U(L), C = $.d = [], c = 0; V[c] == (z[c] || 0); c++) ;
    if (V[c] > (z[c] || 0) && d--, a == null ? (I = a = U.precision, i = U.rounding) : l ? I = a + (o.e - t.e) + 1 : I = a, I < 0)
      C.push(1), m = !0;
    else {
      if (I = I / v + 2 | 0, c = 0, T == 1) {
        for (f = 0, V = V[0], I++; (c < A || f) && I--; c++)
          j = f * s + (z[c] || 0), C[c] = j / V | 0, f = j % V | 0;
        m = f || c < A;
      } else {
        for (f = s / (V[0] + 1) | 0, f > 1 && (V = e(V, f, s), z = e(z, f, s), T = V.length, A = z.length), M = T, b = z.slice(0, T), P = b.length; P < T; ) b[P++] = 0;
        D = V.slice(), D.unshift(0), B = V[0], V[1] >= s / 2 && ++B;
        do
          f = 0, u = n(V, b, T, P), u < 0 ? (O = b[0], T != P && (O = O * s + (b[1] || 0)), f = O / B | 0, f > 1 ? (f >= s && (f = s - 1), h = e(V, f, s), w = h.length, P = b.length, u = n(h, b, w, P), u == 1 && (f--, r(h, T < w ? D : V, w, s))) : (f == 0 && (u = f = 1), h = V.slice()), w = h.length, w < P && h.unshift(0), r(b, h, P, s), u == -1 && (P = b.length, u = n(V, b, T, P), u < 1 && (f++, r(b, T < P ? D : V, P, s))), P = b.length) : u === 0 && (f++, b = [0]), C[c++] = f, u && b[0] ? b[P++] = z[M] || 0 : (b = [z[M]], P = 1);
        while ((M++ < A || b[0] !== void 0) && I--);
        m = b[0] !== void 0;
      }
      C[0] || C.shift();
    }
    if (v == 1)
      $.e = d, lm = m;
    else {
      for (c = 1, f = C[0]; f >= 10; f /= 10) c++;
      $.e = c + d * v - 1, ke($, l ? a + $.e + 1 : a, i, m);
    }
    return $;
  };
})();
function ke(e, n, r, o) {
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
      a != l && (e.e++, c[0] == nr && (c[0] = 1));
      break;
    } else {
      if (c[f] += l, c[f] != nr) break;
      c[f--] = 0, l = 1;
    }
    for (a = c.length; c[--a] === 0; ) c.pop();
  }
  return Ee && (e.e > v.maxE ? (e.d = null, e.e = NaN) : e.e < v.minE && (e.e = 0, e.d = [0])), e;
}
function ur(e, n, r) {
  if (!e.isFinite()) return mm(e);
  var o, t = e.e, a = On(e.d), i = a.length;
  return n ? (r && (o = r - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + kr(o) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (a = "0." + kr(-t - 1) + a, r && (o = r - i) > 0 && (a += kr(o))) : t >= i ? (a += kr(t + 1 - i), r && (o = r - t - 1) > 0 && (a = a + "." + kr(o))) : ((o = t + 1) < i && (a = a.slice(0, o) + "." + a.slice(o)), r && (o = r - i) > 0 && (t + 1 === i && (a += "."), a += kr(o))), a;
}
function li(e, n) {
  var r = e[0];
  for (n *= Pe; r >= 10; r /= 10) n++;
  return n;
}
function oa(e, n, r) {
  if (n > FS)
    throw Ee = !0, r && (e.precision = r), Error(sm);
  return ke(new e(na), n, 1, !0);
}
function lr(e, n, r) {
  if (n > ns) throw Error(sm);
  return ke(new e(ra), n, r, !0);
}
function fm(e) {
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
function vm(e, n, r, o) {
  var t, a = new e(1), i = Math.ceil(o / Pe + 4);
  for (Ee = !1; ; ) {
    if (r % 2 && (a = a.times(n), rc(a.d, i) && (t = !0)), r = In(r / 2), r === 0) {
      r = a.d.length - 1, t && a.d[r] === 0 && ++a.d[r];
      break;
    }
    n = n.times(n), rc(n.d, i);
  }
  return Ee = !0, a;
}
function nc(e) {
  return e.d[e.d.length - 1] & 1;
}
function pm(e, n, r) {
  for (var o, t, a = new e(n[0]), i = 0; ++i < n.length; ) {
    if (t = new e(n[i]), !t.s) {
      a = t;
      break;
    }
    o = a.cmp(t), (o === r || o === 0 && a.s === r) && (a = t);
  }
  return a;
}
function rs(e, n) {
  var r, o, t, a, i, l, s, u = 0, d = 0, c = 0, f = e.constructor, v = f.rounding, m = f.precision;
  if (!e.d || !e.d[0] || e.e > 17) return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
  for (n == null ? (Ee = !1, s = m) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), c += 5;
  for (o = Math.log(hn(2, c)) / Math.LN10 * 2 + 5 | 0, s += o, r = a = i = new f(1), f.precision = s; ; ) {
    if (a = ke(a.times(e), s, 1), r = r.times(++d), l = i.plus(_e(a, r, s, 1)), On(l.d).slice(0, s) === On(i.d).slice(0, s)) {
      for (t = c; t--; ) i = ke(i.times(i), s, 1);
      if (n == null) if (u < 3 && Yo(i.d, s - o, v, u))
        f.precision = s += 10, r = a = l = new f(1), d = 0, u++;
      else return ke(i, f.precision = m, v, Ee = !0);
      else
        return f.precision = m, i;
    }
    i = l;
  }
}
function Pr(e, n) {
  var r, o, t, a, i, l, s, u, d, c, f, v = 1, m = 10, h = e, w = h.d, $ = h.constructor, C = $.rounding, b = $.precision;
  if (h.s < 0 || !w || !w[0] || !h.e && w[0] == 1 && w.length == 1) return new $(w && !w[0] ? -1 / 0 : h.s != 1 ? NaN : w ? 0 : h);
  if (n == null ? (Ee = !1, d = b) : d = n, $.precision = d += m, r = On(w), o = r.charAt(0), Math.abs(a = h.e) < 15e14) {
    for (; o < 7 && o != 1 || o == 1 && r.charAt(1) > 3; )
      h = h.times(e), r = On(h.d), o = r.charAt(0), v++;
    a = h.e, o > 1 ? (h = new $("0." + r), a++) : h = new $(o + "." + r.slice(1));
  } else
    return u = oa($, d + 2, b).times(a + ""), h = Pr(new $(o + "." + r.slice(1)), d - m).plus(u), $.precision = b, n == null ? ke(h, b, C, Ee = !0) : h;
  for (c = h, s = i = h = _e(h.minus(1), h.plus(1), d, 1), f = ke(h.times(h), d, 1), t = 3; ; ) {
    if (i = ke(i.times(f), d, 1), u = s.plus(_e(i, new $(t), d, 1)), On(u.d).slice(0, d) === On(s.d).slice(0, d))
      if (s = s.times(2), a !== 0 && (s = s.plus(oa($, d + 2, b).times(a + ""))), s = _e(s, new $(v), d, 1), n == null) if (Yo(s.d, d - m, C, l))
        $.precision = d += m, u = i = h = _e(c.minus(1), c.plus(1), d, 1), f = ke(h.times(h), d, 1), t = l = 1;
      else return ke(s, $.precision = b, C, Ee = !0);
      else
        return $.precision = b, s;
    s = u, t += 2;
  }
}
function mm(e) {
  return String(e.s * e.s / 0);
}
function Dt(e, n) {
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
function HS(e, n) {
  var r, o, t, a, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), cm.test(n)) return Dt(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (VS.test(n))
    r = 16, n = n.toLowerCase();
  else if (NS.test(n)) r = 2;
  else if (RS.test(n)) r = 8;
  else throw Error(Ar + n);
  for (a = n.search(/p/i), a > 0 ? (s = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, o = e.constructor, i && (n = n.replace(".", ""), l = n.length, a = l - a, t = vm(o, new o(r), a, a * 2)), u = Bt(n, r, nr), d = u.length - 1, a = d; u[a] === 0; --a) u.pop();
  return a < 0 ? new o(e.s * 0) : (e.e = li(u, d), e.d = u, Ee = !1, i && (e = _e(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? hn(2, s) : zr.pow(2, s))), Ee = !0, e);
}
function jS(e, n) {
  var r, o = n.d.length;
  if (o < 3) return n.isZero() ? n : co(e, 2, n, n);
  r = 1.4 * Math.sqrt(o), r = r > 16 ? 16 : r | 0, n = n.times(1 / si(5, r)), n = co(e, 2, n, n);
  for (var t, a = new e(5), i = new e(16), l = new e(20); r--; )
    t = n.times(n), n = n.times(a.plus(t.times(i.times(t).minus(l))));
  return n;
}
function co(e, n, r, o, t) {
  var a, i, l, s, u = 1, d = e.precision, c = Math.ceil(d / Pe);
  for (Ee = !1, s = r.times(r), l = new e(o); ; ) {
    if (i = _e(l.times(s), new e(n++ * n++), d, 1), l = t ? o.plus(i) : o.minus(i), o = _e(i.times(s), new e(n++ * n++), d, 1), i = l.plus(o), i.d[c] !== void 0) {
      for (a = c; i.d[a] === l.d[a] && a--; ) ;
      if (a == -1) break;
    }
    a = l, l = o, o = i, i = a, u++;
  }
  return Ee = !0, i.d.length = c + 1, i;
}
function si(e, n) {
  for (var r = e; --n; ) r *= e;
  return r;
}
function hm(e, n) {
  var r, o = n.s < 0, t = lr(e, e.precision, 1), a = t.times(0.5);
  if (n = n.abs(), n.lte(a))
    return pr = o ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero()) pr = o ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(a))
      return pr = nc(r) ? o ? 2 : 3 : o ? 4 : 1, n;
    pr = nc(r) ? o ? 1 : 4 : o ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Ou(e, n, r, o) {
  var t, a, i, l, s, u, d, c, f, v = e.constructor, m = r !== void 0;
  if (m ? (Ln(r, 1, Lr), o === void 0 ? o = v.rounding : Ln(o, 0, 8)) : (r = v.precision, o = v.rounding), !e.isFinite()) d = mm(e);
  else {
    for (d = ur(e), i = d.indexOf("."), m ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, i >= 0 && (d = d.replace(".", ""), f = new v(1), f.e = d.length - i, f.d = Bt(ur(f), 10, t), f.e = f.d.length), c = Bt(d, 10, t), a = s = c.length; c[--s] == 0; ) c.pop();
    if (!c[0]) d = m ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new v(e), e.d = c, e.e = a, e = _e(e, f, r, o, 0, t), c = e.d, a = e.e, u = lm), i = c[r], l = t / 2, u = u || c[r + 1] !== void 0, u = o < 4 ? (i !== void 0 || u) && (o === 0 || o === (e.s < 0 ? 3 : 2)) : i > l || i === l && (o === 4 || u || o === 6 && c[r - 1] & 1 || o === (e.s < 0 ? 8 : 7)), c.length = r, u) for (; ++c[--r] > t - 1; )
        c[r] = 0, r || (++a, c.unshift(1));
      for (s = c.length; !c[s - 1]; --s) ;
      for (i = 0, d = ""; i < s; i++) d += _l.charAt(c[i]);
      if (m) {
        if (s > 1) if (n == 16 || n == 8) {
          for (i = n == 16 ? 4 : 3, --s; s % i; s++) d += "0";
          for (c = Bt(d, t, n), s = c.length; !c[s - 1]; --s) ;
          for (i = 1, d = "1."; i < s; i++) d += _l.charAt(c[i]);
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
function rc(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function YS(e) {
  return new this(e).abs();
}
function WS(e) {
  return new this(e).acos();
}
function KS(e) {
  return new this(e).acosh();
}
function qS(e, n) {
  return new this(e).plus(n);
}
function XS(e) {
  return new this(e).asin();
}
function GS(e) {
  return new this(e).asinh();
}
function ZS(e) {
  return new this(e).atan();
}
function JS(e) {
  return new this(e).atanh();
}
function QS(e, n) {
  e = new this(e), n = new this(n);
  var r, o = this.precision, t = this.rounding, a = o + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = lr(this, a, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? lr(this, o, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = lr(this, a, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = a, this.rounding = 1, r = this.atan(_e(e, n, a, 1)), n = lr(this, a, 1), this.precision = o, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(_e(e, n, a, 1)), r;
}
function xS(e) {
  return new this(e).cbrt();
}
function _S(e) {
  return ke(e = new this(e), e.e + 1, 2);
}
function e2(e, n, r) {
  return new this(e).clamp(n, r);
}
function n2(e) {
  if (!e || typeof e != "object") throw Error(ii + "Object expected");
  var n, r, o, t = e.defaults === !0, a = [
    "precision",
    1,
    Lr,
    "rounding",
    0,
    8,
    "toExpNeg",
    -no,
    0,
    "toExpPos",
    0,
    no,
    "maxE",
    0,
    no,
    "minE",
    -no,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < a.length; n += 3)
    if (r = a[n], t && (this[r] = es[r]), (o = e[r]) !== void 0) if (In(o) === o && o >= a[n + 1] && o <= a[n + 2]) this[r] = o;
    else throw Error(Ar + r + ": " + o);
  if (r = "crypto", t && (this[r] = es[r]), (o = e[r]) !== void 0) if (o === !0 || o === !1 || o === 0 || o === 1) if (o) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[r] = !0;
  else throw Error(um);
  else this[r] = !1;
  else throw Error(Ar + r + ": " + o);
  return this;
}
function r2(e) {
  return new this(e).cos();
}
function o2(e) {
  return new this(e).cosh();
}
function gm(e) {
  var n, r, o;
  function t(a) {
    var i, l, s, u = this;
    if (!(u instanceof t)) return new t(a);
    if (u.constructor = t, oc(a)) {
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
      return Dt(u, a.toString());
    }
    if (s === "string")
      return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (l === 43 && (a = a.slice(1)), u.s = 1), cm.test(a) ? Dt(u, a) : HS(u, a);
    if (s === "bigint")
      return a < 0 ? (a = -a, u.s = -1) : u.s = 1, Dt(u, a.toString());
    throw Error(Ar + a);
  }
  if (t.prototype = x, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = n2, t.clone = gm, t.isDecimal = oc, t.abs = YS, t.acos = WS, t.acosh = KS, t.add = qS, t.asin = XS, t.asinh = GS, t.atan = ZS, t.atanh = JS, t.atan2 = QS, t.cbrt = xS, t.ceil = _S, t.clamp = e2, t.cos = r2, t.cosh = o2, t.div = t2, t.exp = a2, t.floor = i2, t.hypot = l2, t.ln = s2, t.log = u2, t.log10 = c2, t.log2 = d2, t.max = f2, t.min = v2, t.mod = p2, t.mul = m2, t.pow = h2, t.random = g2, t.round = b2, t.sign = y2, t.sin = w2, t.sinh = k2, t.sqrt = $2, t.sub = C2, t.sum = S2, t.tan = O2, t.tanh = P2, t.trunc = z2, e === void 0 && (e = {}), e && e.defaults !== !0)
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
function t2(e, n) {
  return new this(e).div(n);
}
function a2(e) {
  return new this(e).exp();
}
function i2(e) {
  return ke(e = new this(e), e.e + 1, 3);
}
function l2() {
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
function oc(e) {
  return e instanceof zr || e && e.toStringTag === dm || !1;
}
function s2(e) {
  return new this(e).ln();
}
function u2(e, n) {
  return new this(e).log(n);
}
function d2(e) {
  return new this(e).log(2);
}
function c2(e) {
  return new this(e).log(10);
}
function f2() {
  return pm(this, arguments, -1);
}
function v2() {
  return pm(this, arguments, 1);
}
function p2(e, n) {
  return new this(e).mod(n);
}
function m2(e, n) {
  return new this(e).mul(n);
}
function h2(e, n) {
  return new this(e).pow(n);
}
function g2(e) {
  var n, r, o, t, a = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : Ln(e, 1, Lr), o = Math.ceil(e / Pe), this.crypto) if (crypto.getRandomValues)
    for (n = crypto.getRandomValues(new Uint32Array(o)); a < o; )
      t = n[a], t >= 429e7 ? n[a] = crypto.getRandomValues(new Uint32Array(1))[0] : l[a++] = t % 1e7;
  else if (crypto.randomBytes) {
    for (n = crypto.randomBytes(o *= 4); a < o; )
      t = n[a] + (n[a + 1] << 8) + (n[a + 2] << 16) + ((n[a + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, a) : (l.push(t % 1e7), a += 4);
    a = o / 4;
  } else throw Error(um);
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
function b2(e) {
  return ke(e = new this(e), e.e + 1, this.rounding);
}
function y2(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function w2(e) {
  return new this(e).sin();
}
function k2(e) {
  return new this(e).sinh();
}
function $2(e) {
  return new this(e).sqrt();
}
function C2(e, n) {
  return new this(e).sub(n);
}
function S2() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (Ee = !1; r.s && ++e < n.length; ) r = r.plus(n[e]);
  return Ee = !0, ke(r, this.precision, this.rounding);
}
function O2(e) {
  return new this(e).tan();
}
function P2(e) {
  return new this(e).tanh();
}
function z2(e) {
  return ke(e = new this(e), e.e + 1, 1);
}
x[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = x.toString;
x[Symbol.toStringTag] = "Decimal";
var zr = x.constructor = gm(es);
na = new zr(na);
ra = new zr(ra);
var bm = {
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
}, tc = 100, ac = 600, { name: T2, n: E2, classes: I2 } = ee("counter"), B2 = [
  "inputmode",
  "readonly",
  "disabled"
];
function D2(e, n) {
  const r = Q("var-icon"), o = Q("var-button"), t = Q("var-form-details");
  return g(), S("div", { class: p(e.classes(e.n(), e.n("$--box"))) }, [N("div", We({
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
      default: fe(() => [X(r, { name: "minus" })]),
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
    Ne(N("input", {
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
    }, null, 46, B2), [[Sf, e.inputValue]]),
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
      default: fe(() => [X(r, { name: "plus" })]),
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
var ym = _({
  name: T2,
  components: {
    VarButton: Nn,
    VarIcon: xe,
    VarFormDetails: An
  },
  directives: { Ripple: un },
  inheritAttrs: !1,
  props: bm,
  setup(e) {
    const n = y(""), { bindForm: r, form: o } = Xn(), { errorMessage: t, validateWithTrigger: a, validate: i, resetValidation: l } = qn(), { readonly: s, disabled: u } = o ?? {}, d = E(() => {
      const { max: z, modelValue: V } = e;
      return z != null && H(V) >= H(z);
    }), c = E(() => {
      const { min: z, modelValue: V } = e;
      return z != null && H(V) <= H(z);
    });
    let f, v, m, h;
    k(r, {
      reset: C,
      validate: w,
      resetValidation: l
    }), ve(() => e.modelValue, (z) => {
      U(b(String(z))), k(e.onChange, H(z));
    }), U(b(String(e.modelValue)));
    function w() {
      return i(e.rules, e.modelValue);
    }
    function $(z) {
      Fe(() => {
        const { validateTrigger: V, rules: ae, modelValue: Z } = e;
        a(V, z, ae, Z);
      });
    }
    function C() {
      const { min: z } = e;
      k(e["onUpdate:modelValue"], z != null ? H(z) : 0), l();
    }
    function b(z) {
      const { decimalLength: V, max: ae, min: Z } = e;
      let re = H(z);
      return ae != null && re > H(ae) && (re = H(ae)), Z != null && re < H(Z) && (re = H(Z)), z = String(re), V != null && (z = re.toFixed(H(V))), z;
    }
    function P(z) {
      const { lazyChange: V, onBeforeChange: ae } = e, { value: Z } = z.target, re = b(Z);
      V ? k(ae, H(re), L) : U(re), $("onInputChange");
    }
    function O() {
      const { disabled: z, readonly: V, disableDecrement: ae, decrementButton: Z, lazyChange: re, step: Ce, modelValue: oe, onDecrement: W, onBeforeChange: G } = e;
      if (u?.value || s?.value || z || V || ae || !Z || c.value) return;
      const se = b(new zr(H(oe)).minus(new zr(H(Ce))).toString()), me = H(se);
      k(W, me), re ? k(G, me, L) : (U(se), $("onDecrement"));
    }
    function I() {
      const { disabled: z, readonly: V, disableIncrement: ae, incrementButton: Z, lazyChange: re, step: Ce, modelValue: oe, onIncrement: W, onBeforeChange: G } = e;
      if (u?.value || s?.value || z || V || ae || !Z || d.value) return;
      const se = b(new zr(H(oe)).plus(new zr(H(Ce))).toString()), me = H(se);
      k(W, me), re ? k(G, me, L) : (U(se), $("onIncrement"));
    }
    function j() {
      const { press: z, lazyChange: V } = e;
      !z || V || (h = window.setTimeout(() => {
        D();
      }, ac));
    }
    function M() {
      const { press: z, lazyChange: V } = e;
      !z || V || (m = window.setTimeout(() => {
        T();
      }, ac));
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
      }, tc);
    }
    function D() {
      v = window.setTimeout(() => {
        O(), D();
      }, tc);
    }
    function U(z) {
      n.value = z;
      const V = H(z);
      k(e["onUpdate:modelValue"], V);
    }
    function L(z) {
      U(b(String(z))), $("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: d,
      isMin: c,
      n: E2,
      classes: I2,
      formatElevation: vn,
      validate: w,
      reset: C,
      resetValidation: l,
      handleChange: P,
      decrement: O,
      increment: I,
      pressDecrement: j,
      pressIncrement: M,
      releaseDecrement: A,
      releaseIncrement: B,
      toSizeUnit: ze,
      toNumber: H
    };
  }
});
ym.render = D2;
var ui = ym;
te(ui);
le(ui, bm);
var XB = ui, os = ui;
var wm = 3600, km = wm * 24, M2 = km * 7, st = 1e3, ic = 60 * st, A2 = wm * st, N2 = km * st, V2 = M2 * st, $m = "millisecond", Mt = "second", At = "minute", Nt = "hour";
var lc = "week", Cr = "month", R2 = "quarter", So = "year", Oo = "date";
var L2 = "Invalid Date", F2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, U2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, H2 = {
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
}, ts = function(n, r, o) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(o) + n;
}, j2 = function(n) {
  var r = -n.utcOffset(), o = Math.abs(r), t = Math.floor(o / 60), a = o % 60;
  return (r <= 0 ? "+" : "-") + ts(t, 2, "0") + ":" + ts(a, 2, "0");
}, Y2 = function e(n, r) {
  if (n.date() < r.date()) return -e(r, n);
  var o = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(o, Cr), a = r - t < 0, i = n.clone().add(o + (a ? -1 : 1), Cr);
  return +(-(o + (r - t) / (a ? t - i : i - t)) || 0);
}, W2 = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, K2 = function(n) {
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
}, q2 = function(n) {
  return n === void 0;
}, X2 = {
  s: ts,
  z: j2,
  m: Y2,
  a: W2,
  p: K2,
  u: q2
}, Eo = "en", Yr = {};
Yr[Eo] = H2;
var Cm = "$isDayjsObject", Pu = function(n) {
  return n instanceof di || !!(n && n[Cm]);
}, ta = function e(n, r, o) {
  var t;
  if (!n) return Eo;
  if (typeof n == "string") {
    var a = n.toLowerCase();
    Yr[a] && (t = a), r && (Yr[a] = r, t = a);
    var i = n.split("-");
    if (!t && i.length > 1) return e(i[0]);
  } else {
    var l = n.name;
    Yr[l] = n, t = l;
  }
  return !o && t && (Eo = t), t || !o && Eo;
}, ce = function(n, r) {
  if (Pu(n)) return n.clone();
  var o = typeof r == "object" ? r : {};
  return o.date = n, o.args = arguments, new di(o);
}, G2 = function(n, r) {
  return ce(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
  });
}, Je = X2;
Je.l = ta;
Je.i = Pu;
Je.w = G2;
var Z2 = function(n) {
  var r = n.date, o = n.utc;
  if (r === null) return /* @__PURE__ */ new Date(NaN);
  if (Je.u(r)) return /* @__PURE__ */ new Date();
  if (r instanceof Date) return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(F2);
    if (t) {
      var a = t[2] - 1 || 0, i = (t[7] || "0").substring(0, 3);
      return o ? new Date(Date.UTC(t[1], a, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i)) : new Date(t[1], a, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i);
    }
  }
  return new Date(r);
}, di = /* @__PURE__ */ (function() {
  function e(r) {
    this.$L = ta(r.locale, null, !0), this.parse(r), this.$x = this.$x || r.x || {}, this[Cm] = !0;
  }
  var n = e.prototype;
  return n.parse = function(o) {
    this.$d = Z2(o), this.init();
  }, n.init = function() {
    var o = this.$d;
    this.$y = o.getFullYear(), this.$M = o.getMonth(), this.$D = o.getDate(), this.$W = o.getDay(), this.$H = o.getHours(), this.$m = o.getMinutes(), this.$s = o.getSeconds(), this.$ms = o.getMilliseconds();
  }, n.$utils = function() {
    return Je;
  }, n.isValid = function() {
    return this.$d.toString() !== L2;
  }, n.isSame = function(o, t) {
    var a = ce(o);
    return this.startOf(t) <= a && a <= this.endOf(t);
  }, n.isAfter = function(o, t) {
    return ce(o) < this.startOf(t);
  }, n.isBefore = function(o, t) {
    return this.endOf(t) < ce(o);
  }, n.$g = function(o, t, a) {
    return Je.u(o) ? this[t] : this.set(a, o);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(o, t) {
    var a = this, i = Je.u(t) ? !0 : t, l = Je.p(o), s = function($, C) {
      var b = Je.w(a.$u ? Date.UTC(a.$y, C, $) : new Date(a.$y, C, $), a);
      return i ? b : b.endOf("day");
    }, u = function($, C) {
      return Je.w(a.toDate()[$].apply(a.toDate("s"), (i ? [
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
      case So:
        return i ? s(1, 0) : s(31, 11);
      case Cr:
        return i ? s(1, c) : s(0, c + 1);
      case lc:
        var m = this.$locale().weekStart || 0, h = (d < m ? d + 7 : d) - m;
        return s(i ? f - h : f + (6 - h), c);
      case "day":
      case Oo:
        return u(v + "Hours", 0);
      case Nt:
        return u(v + "Minutes", 1);
      case At:
        return u(v + "Seconds", 2);
      case Mt:
        return u(v + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(o) {
    return this.startOf(o, !1);
  }, n.$set = function(o, t) {
    var a, i = Je.p(o), l = "set" + (this.$u ? "UTC" : ""), s = (a = {}, a.day = l + "Date", a[Oo] = l + "Date", a[Cr] = l + "Month", a[So] = l + "FullYear", a[Nt] = l + "Hours", a[At] = l + "Minutes", a[Mt] = l + "Seconds", a[$m] = l + "Milliseconds", a)[i], u = i === "day" ? this.$D + (t - this.$W) : t;
    if (i === "month" || i === "year") {
      var d = this.clone().set(Oo, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Oo, Math.min(this.$D, d.daysInMonth())).$d;
    } else s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(o, t) {
    return this.clone().$set(o, t);
  }, n.get = function(o) {
    return this[Je.p(o)]();
  }, n.add = function(o, t) {
    var a = this, i;
    o = Number(o);
    var l = Je.p(t), s = function(f) {
      var v = ce(a);
      return Je.w(v.date(v.date() + Math.round(f * o)), a);
    };
    if (l === "month") return this.set(Cr, this.$M + o);
    if (l === "year") return this.set(So, this.$y + o);
    if (l === "day") return s(1);
    if (l === "week") return s(7);
    var u = (i = {}, i.minute = 6e4, i.hour = 36e5, i.second = 1e3, i)[l] || 1, d = this.$d.getTime() + o * u;
    return Je.w(d, this);
  }, n.subtract = function(o, t) {
    return this.add(o * -1, t);
  }, n.format = function(o) {
    var t = this, a = this.$locale();
    if (!this.isValid()) return a.invalidDate || "Invalid Date";
    var i = o || "YYYY-MM-DDTHH:mm:ssZ", l = Je.z(this), s = this.$H, u = this.$m, d = this.$M, c = a.weekdays, f = a.months, v = a.meridiem, m = function(b, P, O, I) {
      return b && (b[P] || b(t, i)) || O[P].slice(0, I);
    }, h = function(b) {
      return Je.s(s % 12 || 12, b, "0");
    }, w = v || function(C, b, P) {
      var O = C < 12 ? "AM" : "PM";
      return P ? O.toLowerCase() : O;
    }, $ = function(b) {
      switch (b) {
        case "YY":
          return String(t.$y).slice(-2);
        case "YYYY":
          return Je.s(t.$y, 4, "0");
        case "M":
          return d + 1;
        case "MM":
          return Je.s(d + 1, 2, "0");
        case "MMM":
          return m(a.monthsShort, d, f, 3);
        case "MMMM":
          return m(f, d);
        case "D":
          return t.$D;
        case "DD":
          return Je.s(t.$D, 2, "0");
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
          return Je.s(s, 2, "0");
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
          return Je.s(u, 2, "0");
        case "s":
          return String(t.$s);
        case "ss":
          return Je.s(t.$s, 2, "0");
        case "SSS":
          return Je.s(t.$ms, 3, "0");
        case "Z":
          return l;
        default:
          break;
      }
      return null;
    };
    return i.replace(U2, function(C, b) {
      return b || $(C) || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(o, t, a) {
    var i = this, l = Je.p(t), s = ce(o), u = (s.utcOffset() - this.utcOffset()) * ic, d = this - s, c = function() {
      return Je.m(i, s);
    }, f;
    switch (l) {
      case So:
        f = c() / 12;
        break;
      case Cr:
        f = c();
        break;
      case R2:
        f = c() / 3;
        break;
      case lc:
        f = (d - u) / V2;
        break;
      case "day":
        f = (d - u) / N2;
        break;
      case Nt:
        f = d / A2;
        break;
      case At:
        f = d / ic;
        break;
      case Mt:
        f = d / st;
        break;
      default:
        f = d;
        break;
    }
    return a ? f : Je.a(f);
  }, n.daysInMonth = function() {
    return this.endOf(Cr).$D;
  }, n.$locale = function() {
    return Yr[this.$L];
  }, n.locale = function(o, t) {
    if (!o) return this.$L;
    var a = this.clone(), i = ta(o, t, !0);
    return i && (a.$L = i), a;
  }, n.clone = function() {
    return Je.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
})(), Sm = di.prototype;
ce.prototype = Sm;
[
  ["$ms", $m],
  ["$s", Mt],
  ["$m", At],
  ["$H", Nt],
  ["$W", "day"],
  ["$M", Cr],
  ["$y", So],
  ["$D", Oo]
].forEach(function(e) {
  Sm[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ce.extend = function(e, n) {
  return e.$i || (e(n, di, ce), e.$i = !0), ce;
};
ce.locale = ta;
ce.isDayjs = Pu;
ce.unix = function(e) {
  return ce(e * 1e3);
};
ce.en = Yr[Eo];
ce.Ls = Yr;
ce.p = {};
var Vt = [
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
], Po = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6"
], Om = {
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
}, Pm = (function(e, n) {
  n.prototype.isSameOrAfter = function(r, o) {
    return this.isSame(r, o) || this.isAfter(r, o);
  };
}), zm = (function(e, n) {
  n.prototype.isSameOrBefore = function(r, o) {
    return this.isSame(r, o) || this.isBefore(r, o);
  };
}), { n: J2 } = ee("date-picker-header");
function Q2(e, n) {
  const r = Q("var-icon"), o = Q("var-button");
  return g(), S("div", { class: p(e.n()) }, [
    X(o, {
      class: p(e.n("arrow")),
      "var-date-picker-header-cover": "",
      round: "",
      text: "",
      disabled: e.disabled.left,
      onClick: n[0] || (n[0] = (t) => e.checkDate("prev"))
    }, {
      default: fe(() => [X(r, { name: "chevron-left" })]),
      _: 1
    }, 8, ["class", "disabled"]),
    N("div", {
      class: p(e.n("value")),
      onClick: n[1] || (n[1] = (t) => e.$emit("check-panel"))
    }, [X(nn, { name: `var-date-picker${e.reverse ? "-reverse" : ""}-translatex` }, {
      default: fe(() => [(g(), S("div", { key: e.showDate }, ie(e.showDate), 1))]),
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
      default: fe(() => [X(r, { name: "chevron-right" })]),
      _: 1
    }, 8, ["class", "disabled"])
  ], 2);
}
var Tm = _({
  name: "PanelHeader",
  components: {
    VarButton: Nn,
    VarIcon: xe
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
    const r = y(!1), o = y(0), { t } = ir(), a = E(() => {
      var l;
      const { date: s, type: u } = e, { previewMonth: d, previewYear: c } = s;
      if (u === "year") return c;
      if (u === "month") return H(c) + o.value;
      const f = (l = (t || ln)("datePickerMonthDict")) == null ? void 0 : l[d].name;
      return (t || ln)("lang") === "zh-CN" ? `${c} ${f}` : `${f} ${c}`;
    }), i = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (n("check-date", l), r.value = l === "prev", o.value += l === "prev" ? -1 : 1);
    };
    return ve(() => e.date, () => {
      o.value = 0;
    }), {
      n: J2,
      reverse: r,
      showDate: a,
      checkDate: i
    };
  }
});
Tm.render = Q2;
var zu = Tm, x2 = Object.defineProperty, sc = Object.getOwnPropertySymbols, _2 = Object.prototype.hasOwnProperty, e3 = Object.prototype.propertyIsEnumerable, uc = (e, n, r) => n in e ? x2(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, n3 = (e, n) => {
  for (var r in n || (n = {})) _2.call(n, r) && uc(e, r, n[r]);
  if (sc)
    for (var r of sc(n)) e3.call(n, r) && uc(e, r, n[r]);
  return e;
};
ce.extend(zm);
ce.extend(Pm);
var { n: Qr, classes: r3 } = ee("day-picker"), { n: gt } = ee("date-picker");
function o3(e, n) {
  const r = Q("panel-header"), o = Q("var-button");
  return g(), S("div", { class: p(e.n()) }, [N("div", { class: p(e.n("content")) }, [X(r, {
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
  ]), X(nn, { name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex` }, {
    default: fe(() => [(g(), S("div", { key: e.panelKey }, [N("ul", { class: p(e.n("head")) }, [(g(!0), S(Ae, null, Ge(e.sortWeekList, (t) => (g(), S("li", { key: t }, ie(e.getDayAbbr(t)), 1))), 128))], 2), N("ul", { class: p(e.n("body")) }, [(g(!0), S(Ae, null, Ge(e.days, (t, a) => (g(), S("li", { key: a }, [X(o, We({
      type: "primary",
      "var-day-picker-cover": "",
      round: "",
      ripple: !1,
      elevation: e.componentProps.buttonElevation
    }, { ref_for: !0 }, n3({}, e.buttonProps(t)), { onClick: (i) => e.chooseDay(t, i) }), {
      default: fe(() => [Be(ie(e.filterDay(t)), 1)]),
      _: 2
    }, 1040, ["elevation", "onClick"])]))), 128))], 2)]))]),
    _: 1
  }, 8, ["name"])], 2)], 2);
}
var Em = _({
  name: "DayPickerPanel",
  components: {
    VarButton: Nn,
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
    const [r, o, t] = e.current.split("-"), a = y([]), i = y(!1), l = y(0), s = y(null), u = rn({
      left: !1,
      right: !1
    }), { t: d } = ir(), c = E(() => e.preview.previewYear === r && e.preview.previewMonth === o), f = E(() => e.choose.chooseYear === e.preview.previewYear && e.choose.chooseMonth === e.preview.previewMonth), v = E(() => {
      const M = Po.findIndex((A) => A === e.componentProps.firstDayOfWeek);
      return M === -1 || M === 0 ? Po : [...Po.slice(M), ...Po.slice(0, M)];
    }), m = (M) => {
      var A, B;
      return (B = (A = (d || ln)("datePickerWeekDict")) == null ? void 0 : A[M].abbr) != null ? B : "";
    }, h = (M) => M > 0 ? M : "", w = () => {
      const { preview: { previewMonth: M, previewYear: A } } = e, B = ce(`${A}-${M}`).daysInMonth(), T = ce(`${A}-${M}-01`).day(), D = v.value.findIndex((U) => U === `${T}`);
      a.value = [...Array(D).fill(-1), ...Array.from(Array(B + 1).keys())].filter((U) => U);
    }, $ = () => {
      const { preview: { previewYear: M, previewMonth: A }, componentProps: { max: B, min: T } } = e;
      B && (u.right = !ce(`${M}-${H(A) + 1}`).isSameOrBefore(ce(B), "month")), T && (u.left = !ce(`${M}-${H(A) - 1}`).isSameOrAfter(ce(T), "month"));
    }, C = (M) => {
      const { preview: { previewYear: A, previewMonth: B }, componentProps: { min: T, max: D } } = e;
      let U = !0, L = !0;
      const z = `${A}-${B}-${M}`;
      return D && (U = ce(z).isSameOrBefore(ce(D), "day")), T && (L = ce(z).isSameOrAfter(ce(T), "day")), U && L;
    }, b = (M) => {
      const { choose: { chooseDays: A, chooseRangeDay: B }, componentProps: { range: T } } = e;
      if (T) {
        if (!B.length) return !1;
        const D = ce(M).isSameOrBefore(ce(B[1]), "day"), U = ce(M).isSameOrAfter(ce(B[0]), "day");
        return D && U;
      }
      return A.includes(M);
    }, P = (M) => {
      if (M < 0) return {
        text: !0,
        outline: !1,
        textColor: "",
        class: Qr("button"),
        disabled: !0
      };
      const { choose: { chooseDay: A }, preview: { previewYear: B, previewMonth: T }, componentProps: { allowedDates: D, color: U, multiple: L, range: z } } = e, V = `${B}-${T}-${M}`, ae = () => z || L ? b(V) : H(A) === M && f.value, re = C(M) ? D ? !D(V) : !1 : !0, Ce = () => re ? !0 : z || L ? !b(V) : !f.value || H(A) !== M, oe = () => c.value && H(t) === M && e.componentProps.showCurrent ? (z || L || f.value) && re ? !0 : z || L ? !b(V) : f.value ? A !== t : !0 : !1, W = () => re ? "" : oe() ? U ?? "" : ae() ? "" : `${gt()}-color-cover`, G = W().startsWith(gt());
      return {
        text: Ce(),
        outline: oe(),
        textColor: G ? "" : W(),
        [`${gt()}-color-cover`]: G,
        class: r3(Qr("button"), Qr("button--usable"), [re, Qr("button--disabled")]),
        disabled: re
      };
    }, O = (M) => {
      i.value = M === "prev", l.value += M === "prev" ? -1 : 1, n("check-preview", "month", M);
    }, I = (M, A) => {
      A.currentTarget.classList.contains(Qr("button--disabled")) || n("choose-day", M);
    }, j = (M) => {
      s.value.checkDate(M);
    };
    return yn(() => {
      w(), $();
    }), ve(() => e.preview, () => {
      w(), $();
    }), ve(() => [e.componentProps.max, e.componentProps.min], $), {
      n: Qr,
      nDate: gt,
      days: a,
      reverse: i,
      headerEl: s,
      panelKey: l,
      sortWeekList: v,
      panelBtnDisabled: u,
      forwardRef: j,
      filterDay: h,
      getDayAbbr: m,
      checkDate: O,
      chooseDay: I,
      buttonProps: P
    };
  }
});
Em.render = o3;
var t3 = Em, a3 = Object.defineProperty, dc = Object.getOwnPropertySymbols, i3 = Object.prototype.hasOwnProperty, l3 = Object.prototype.propertyIsEnumerable, cc = (e, n, r) => n in e ? a3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, s3 = (e, n) => {
  for (var r in n || (n = {})) i3.call(n, r) && cc(e, r, n[r]);
  if (dc)
    for (var r of dc(n)) l3.call(n, r) && cc(e, r, n[r]);
  return e;
};
ce.extend(zm);
ce.extend(Pm);
var { n: bt, classes: u3 } = ee("month-picker"), { n: yt } = ee("date-picker");
function d3(e, n) {
  const r = Q("panel-header"), o = Q("var-button");
  return g(), S("div", { class: p(e.n()) }, [N("div", { class: p(e.n("content")) }, [X(r, {
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
  ]), X(nn, { name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex` }, {
    default: fe(() => [(g(), S("ul", { key: e.panelKey }, [(g(!0), S(Ae, null, Ge(e.MONTH_LIST, (t) => (g(), S("li", { key: t }, [X(o, We({
      type: "primary",
      "var-month-picker-cover": "",
      ripple: !1,
      elevation: e.componentProps.buttonElevation
    }, { ref_for: !0 }, s3({}, e.buttonProps(t)), { onClick: (a) => e.chooseMonth(t, a) }), {
      default: fe(() => [Be(ie(e.getMonthAbbr(t)), 1)]),
      _: 2
    }, 1040, ["elevation", "onClick"])]))), 128))]))]),
    _: 1
  }, 8, ["name"])], 2)], 2);
}
var Im = _({
  name: "MonthPickerPanel",
  components: {
    VarButton: Nn,
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
    const [r, o] = e.current.split("-"), t = y(!1), a = y(0), i = y(null), l = rn({
      left: !1,
      right: !1
    }), { t: s } = ir(), u = E(() => e.choose.chooseYear === e.preview.previewYear), d = E(() => e.preview.previewYear === r), c = (C) => {
      var b, P;
      return (P = (b = (s || ln)("datePickerMonthDict")) == null ? void 0 : b[C].abbr) != null ? P : "";
    }, f = (C) => {
      const { preview: { previewYear: b }, componentProps: { min: P, max: O } } = e;
      let I = !0, j = !0;
      const M = `${b}-${C}`;
      return O && (I = ce(M).isSameOrBefore(ce(O), "month")), P && (j = ce(M).isSameOrAfter(ce(P), "month")), I && j;
    }, v = (C) => {
      const { choose: { chooseMonths: b, chooseDays: P, chooseRangeMonth: O }, componentProps: { type: I, range: j } } = e;
      if (j) {
        if (!O.length) return !1;
        const M = ce(C).isSameOrBefore(ce(O[1]), "month"), A = ce(C).isSameOrAfter(ce(O[0]), "month");
        return M && A;
      }
      return I === "month" ? b.includes(C) : P.some((M) => M.includes(C));
    }, m = (C) => {
      const { choose: { chooseMonth: b }, preview: { previewYear: P }, componentProps: { allowedDates: O, color: I, multiple: j, range: M } } = e, A = `${P}-${C}`, B = () => M || j ? v(A) : b === C && u.value, D = f(C) ? O ? !O(A) : !1 : !0, U = () => D ? !0 : M || j ? !v(A) : !u.value || b !== C, L = () => d.value && o === C && e.componentProps.showCurrent ? (M || j || u.value) && D ? !0 : M || j ? !v(A) : u.value ? b !== o : !0 : !1, z = () => D ? "" : L() ? I ?? "" : B() ? "" : `${yt()}-color-cover`, V = z().startsWith(yt());
      return {
        outline: L(),
        text: U(),
        color: U() ? "" : I,
        textColor: V ? "" : z(),
        [`${yt()}-color-cover`]: V,
        class: u3(bt("button"), [D, bt("button--disabled")]),
        disabled: D
      };
    }, h = (C, b) => {
      b.currentTarget.classList.contains(bt("button--disabled")) || n("choose-month", C);
    }, w = (C) => {
      t.value = C === "prev", a.value += C === "prev" ? -1 : 1, n("check-preview", "year", C);
    }, $ = (C) => {
      i.value.checkDate(C);
    };
    return ve(() => [
      e.preview.previewYear,
      e.componentProps.max,
      e.componentProps.min
    ], ([C, b, P]) => {
      b && (l.right = !ce(`${H(C) + 1}`).isSameOrBefore(ce(b), "year")), P && (l.left = !ce(`${H(C) - 1}`).isSameOrAfter(ce(P), "year"));
    }, { immediate: !0 }), {
      n: bt,
      nDate: yt,
      t: ln,
      MONTH_LIST: Vt,
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
Im.render = d3;
var c3 = Im, Io = {
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
}, fc = (e, n, r) => new Promise((o, t) => {
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
}), { name: f3, n: v3, classes: p3 } = ee("sticky");
function m3(e, n) {
  return g(), S("div", {
    ref: "stickyEl",
    class: p(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
    style: q({
      zIndex: e.toNumber(e.zIndex),
      top: e.enableCSSMode ? `${e.offsetTop}px` : void 0,
      width: e.enableFixedMode ? e.fixedWidth : void 0,
      height: e.enableFixedMode ? e.fixedHeight : void 0
    })
  }, [N("div", {
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
  }, [F(e.$slots, "default")], 6)], 6);
}
var Bm = _({
  name: f3,
  props: Io,
  setup(e) {
    const n = y(null), r = y(null), o = y(!1), t = y("0px"), a = y("0px"), i = y("auto"), l = y("auto"), s = y("auto"), u = y("auto"), d = E(() => !e.disabled && e.cssMode), c = E(() => !e.disabled && !e.cssMode && o.value), f = E(() => on(e.offsetTop));
    let v;
    ve(() => e.disabled, C), yn(() => fc(null, null, function* () {
      yield Pn(), h(), w();
    })), mo($), ar(C), Ye(() => window, "scroll", w);
    function m() {
      const { cssMode: b, disabled: P } = e;
      if (P) return;
      let O = 0;
      if (v && v !== window) {
        const { top: T } = tn(v);
        O = T;
      }
      const I = r.value, j = n.value, { top: M, left: A } = tn(j), B = M - O;
      return B <= f.value ? (b || (i.value = `${j.offsetWidth}px`, l.value = `${j.offsetHeight}px`, t.value = `${O + f.value}px`, a.value = `${A}px`, s.value = `${I.offsetWidth}px`, u.value = `${I.offsetHeight}px`, o.value = !0), {
        offsetTop: f.value,
        isFixed: !0
      }) : (o.value = !1, {
        offsetTop: B,
        isFixed: !1
      });
    }
    function h() {
      v = Mr(n.value), v !== window && v.addEventListener("scroll", w);
    }
    function w() {
      const b = m();
      b && k(e.onScroll, b.offsetTop, b.isFixed);
    }
    function $() {
      !v || v === window || v.removeEventListener("scroll", w);
    }
    function C() {
      return fc(this, null, function* () {
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
      n: v3,
      classes: p3,
      resize: C,
      toNumber: H
    };
  }
});
Bm.render = m3;
var ci = Bm;
te(ci);
le(ci, Io);
var GB = ci, fo = ci, h3 = Object.defineProperty, vc = Object.getOwnPropertySymbols, g3 = Object.prototype.hasOwnProperty, b3 = Object.prototype.propertyIsEnumerable, pc = (e, n, r) => n in e ? h3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, y3 = (e, n) => {
  for (var r in n || (n = {})) g3.call(n, r) && pc(e, r, n[r]);
  if (vc)
    for (var r of vc(n)) b3.call(n, r) && pc(e, r, n[r]);
  return e;
}, { n: wt, classes: mc } = ee("year-picker"), { n: kt } = ee("date-picker");
function w3(e, n) {
  const r = Q("panel-header"), o = Q("var-sticky"), t = Q("var-button");
  return g(), S("div", null, [X(o, { "css-mode": "" }, {
    default: fe(() => [X(r, {
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
  }), X(nn, { name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex` }, {
    default: fe(() => [(g(), S("ul", {
      ref: "panel",
      key: e.panelKey,
      class: p(e.n())
    }, [(g(!0), S(Ae, null, Ge(e.yearList, (a) => (g(), S("li", { key: a }, [X(t, We({
      type: "primary",
      "var-year-picker-cover": "",
      ripple: !1,
      elevation: e.componentProps.buttonElevation
    }, { ref_for: !0 }, y3({}, e.buttonProps(`${a}`)), { onClick: (i) => e.chooseYear(a, i) }), {
      default: fe(() => [Be(ie(a), 1)]),
      _: 2
    }, 1040, ["elevation", "onClick"])]))), 128))], 2))]),
    _: 1
  }, 8, ["name"])]);
}
var Dm = _({
  name: "YearPickerPanel",
  components: {
    VarButton: Nn,
    VarSticky: fo,
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
    preview: { type: String },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["choose-year"],
  setup(e, { emit: n }) {
    const [r] = e.current.split("-"), o = y(), t = y(null), a = y(!1), i = y(0), l = y(0), s = rn({
      left: !1,
      right: !1
    }), u = E(() => {
      if (!e.preview) return [];
      const $ = Math.floor(H(e.preview) / 100 + l.value) * 100;
      return Array.from(Array(100), (C, b) => Math.max(0, $) + b);
    }), d = ($) => {
      const { choose: { chooseMonths: C, chooseDays: b, chooseYears: P, chooseRangeYear: O }, componentProps: { type: I, range: j } } = e;
      if (j) {
        if (!O.length) return !1;
        const M = ce($).isSameOrBefore(ce(O[1]), "year"), A = ce($).isSameOrAfter(ce(O[0]), "year");
        return M && A;
      }
      return I === "year" ? P.includes($) : I === "month" ? C.some((M) => M.includes($)) : b.some((M) => M.includes($));
    }, c = ($) => {
      const { componentProps: { min: C, max: b } } = e, P = b ? ce($).isSameOrBefore(ce(b), "year") : !0, O = C ? ce($).isSameOrAfter(ce(C), "year") : !0;
      return P && O;
    }, f = ($) => {
      const { choose: { chooseYear: C }, componentProps: { allowedDates: b, color: P, multiple: O, range: I } } = e, j = () => I || O ? d($) : C === $, A = c($) ? b ? !b($) : !1 : !0, B = () => A ? !0 : I || O ? !d($) : C !== $, T = () => r === $ && e.componentProps.showCurrent ? (I || O) && A ? !0 : I || O ? !d($) : C !== r : !1, D = () => A ? "" : T() ? P ?? "" : j() ? "" : `${kt()}-color-cover`, U = D().startsWith(kt());
      return {
        outline: T(),
        text: B(),
        color: B() ? "" : P,
        textColor: U ? "" : D(),
        [`${kt()}-color-cover`]: U,
        class: mc(wt("button"), [A, wt("button--disabled")]),
        disabled: A
      };
    }, v = ($, C) => {
      C.currentTarget.classList.contains(wt("button--disabled")) || n("choose-year", $);
    }, m = () => {
      var $;
      (($ = o.value.querySelector(".var-button--primary")) != null ? $ : o.value.querySelector(".var-button--outline"))?.scrollIntoView({ block: "center" });
    }, h = ($) => {
      const C = $ === "prev";
      a.value = C, i.value += C ? -1 : 1, l.value += C ? -1 : 1;
    }, w = ($) => {
      t.value.checkDate($);
    };
    return yn(m), ve(() => e.preview, () => {
      l.value = 0;
    }), ve(() => [
      u.value,
      e.componentProps.max,
      e.componentProps.min
    ], ($) => {
      const [C, b, P] = $;
      b && (s.right = !ce(`${H(C[C.length - 1])}`).isSameOrBefore(ce(b), "year")), P && (s.left = !ce(`${H(C[0])}`).isSameOrAfter(ce(P), "year")), H(C[0] <= 0) && (s.left = !1);
    }, { immediate: !0 }), {
      n: wt,
      classes: mc,
      buttonProps: f,
      panel: o,
      headerEl: t,
      yearList: u,
      reverse: a,
      panelKey: i,
      panelBtnDisabled: s,
      nDate: kt,
      checkDate: h,
      chooseYear: v,
      forwardRef: w,
      toNumber: H
    };
  }
});
Dm.render = w3;
var k3 = Dm, $3 = (e, n, r) => new Promise((o, t) => {
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
}), { name: C3, n: S3, classes: O3 } = ee("date-picker");
function P3(e, n) {
  var r;
  const o = Q("year-picker-panel"), t = Q("month-picker-panel"), a = Q("day-picker-panel");
  return g(), S("div", { class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2))) }, [
    N("div", {
      class: p(e.n("title")),
      style: q({ background: e.titleColor || e.color })
    }, [N("div", { class: p(e.n("title-select")) }, [N("div", { class: p(e.n("title-hint")) }, ie((r = e.hint) != null ? r : (e.pt ? e.pt : e.t)("datePickerHint")), 3), e.type !== "year" ? (g(), S("div", {
      key: 0,
      class: p(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
      onClick: n[0] || (n[0] = (i) => e.clickEl("year"))
    }, [F(e.$slots, "year", { year: e.chooseYear }, () => [Be(ie(e.chooseYear), 1)])], 2)) : K("v-if", !0)], 2), N("div", {
      class: p(e.classes(e.n("title-date"), [!e.isYearPanel || e.type === "year", e.n("title-date--active")], [e.range, e.n("title-date--range")])),
      onClick: n[1] || (n[1] = (i) => e.clickEl("date"))
    }, [X(nn, { name: e.multiple ? "" : `${e.n()}${e.reverse ? "-reverse" : ""}-translatey` }, {
      default: fe(() => [e.type === "year" ? (g(), S("div", { key: `${e.chooseYear}` }, [e.range ? F(e.$slots, "range", {
        key: 0,
        choose: e.getChoose.chooseRangeYear
      }, () => [Be(ie(e.getYearTitle), 1)]) : e.multiple ? F(e.$slots, "multiple", {
        key: 1,
        choose: e.getChoose.chooseYears
      }, () => [Be(ie(e.getYearTitle), 1)]) : F(e.$slots, "year", {
        key: 2,
        year: e.chooseYear
      }, () => [Be(ie(e.getYearTitle), 1)])])) : e.type === "month" ? (g(), S("div", { key: `${e.chooseYear}${e.chooseMonth}` }, [e.range ? F(e.$slots, "range", {
        key: 0,
        choose: e.getChoose.chooseRangeMonth
      }, () => [Be(ie(e.getMonthTitle), 1)]) : e.multiple ? F(e.$slots, "multiple", {
        key: 1,
        choose: e.getChoose.chooseMonths
      }, () => [Be(ie(e.getMonthTitle), 1)]) : F(e.$slots, "month", {
        key: 2,
        month: e.chooseMonth,
        year: e.chooseYear
      }, () => [Be(ie(e.getMonthTitle), 1)])])) : (g(), S("div", { key: `${e.chooseYear}${e.chooseMonth}${e.chooseDay}` }, [e.range ? F(e.$slots, "range", {
        key: 0,
        choose: e.formatRange
      }, () => [Be(ie(e.getDateTitle), 1)]) : e.multiple ? F(e.$slots, "multiple", {
        key: 1,
        choose: e.getChoose.chooseDays
      }, () => [Be(ie(e.getDateTitle), 1)]) : F(e.$slots, "date", jr(We({ key: 2 }, e.slotProps)), () => [Be(ie(e.getDateTitle), 1)])]))]),
      _: 3
    }, 8, ["name"])], 2)], 6),
    N("div", {
      class: p(e.n("body")),
      onTouchstart: n[2] || (n[2] = (...i) => e.handleTouchstart && e.handleTouchstart(...i)),
      onTouchmove: n[3] || (n[3] = (...i) => e.handleTouchmove && e.handleTouchmove(...i)),
      onTouchend: n[4] || (n[4] = (...i) => e.handleTouchend && e.handleTouchend(...i))
    }, [X(nn, { name: `${e.n()}-panel-fade` }, {
      default: fe(() => [e.getPanelType === "year" ? (g(), ye(o, {
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
      ])) : e.getPanelType === "month" ? (g(), ye(t, {
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
      ])) : e.getPanelType === "date" ? (g(), ye(a, {
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
    }, [F(e.$slots, "actions")], 2)) : K("v-if", !0)
  ], 2);
}
var Mm = _({
  name: C3,
  components: {
    MonthPickerPanel: c3,
    YearPickerPanel: k3,
    DayPickerPanel: t3
  },
  props: Om,
  setup(e) {
    const { t: n } = ir(), r = ce().format("YYYY-MM-D"), [o, t] = r.split("-"), a = Vt.find((de) => de === t), i = y(!1), l = y(!1), s = y(!0), u = y(), d = y(), c = y(), f = y(a), v = y(o), m = y(!1), h = y([]), w = y([]), $ = y([]), C = y([]), b = y([]), P = y([]), O = y(null), I = y(null), j = y(null), M = E(() => ({
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
    })), T = E(() => {
      var de;
      const { multiple: we, range: Oe } = e;
      return Oe ? C.value.length ? `${C.value[0]} ~ ${C.value[1]}` : "" : we ? `${h.value.length}${(n || ln)("datePickerSelected")}` : (de = d.value) != null ? de : "";
    }), D = E(() => {
      var de, we;
      const { multiple: Oe, range: Me } = e;
      if (Me) return b.value.length ? `${b.value[0]} ~ ${b.value[1]}` : "";
      let je = "";
      return u.value && (je = (we = (de = (n || ln)("datePickerMonthDict")) == null ? void 0 : de[u.value].name) != null ? we : ""), Oe ? `${w.value.length}${(n || ln)("datePickerSelected")}` : je;
    }), U = E(() => {
      var de, we, Oe, Me;
      const { multiple: je, range: $e } = e;
      if ($e) {
        const Bn = P.value.map((ko) => ce(ko).format("YYYY-MM-DD"));
        return Bn.length ? `${Bn[0]} ~ ${Bn[1]}` : "";
      }
      if (je) return `${$.value.length}${(n || ln)("datePickerSelected")}`;
      if (!d.value || !u.value || !c.value) return "";
      const Ie = ce(`${d.value}-${u.value}-${c.value}`).day(), Xe = Po.find((Bn) => Bn === `${Ie}`), $n = (we = (de = (n || ln)("datePickerWeekDict")) == null ? void 0 : de[Xe].name) != null ? we : "", Hr = (Me = (Oe = (n || ln)("datePickerMonthDict")) == null ? void 0 : Oe[u.value].name) != null ? Me : "", br = Gr(c.value, 2, "0");
      return (n || ln)("lang") === "zh-CN" ? `${u.value}-${br} ${$n.slice(0, 3)}` : `${$n.slice(0, 3)}, ${Hr.slice(0, 3)} ${c.value}`;
    }), L = E(() => e.type === "year" || i.value ? "year" : e.type === "month" || l.value ? "month" : e.type === "date" ? "date" : ""), z = E(() => !e.touchable || !L.value), V = E(() => {
      var de, we;
      const Oe = ce(`${d.value}-${u.value}-${c.value}`).day(), Me = c.value ? Gr(c.value, 2, "0") : "";
      return {
        week: `${Oe}`,
        year: (de = d.value) != null ? de : "",
        month: (we = u.value) != null ? we : "",
        date: Me
      };
    }), ae = E(() => A.value.chooseRangeDay.map((de) => ce(de).format("YYYY-MM-DD"))), Z = E(() => d.value === v.value), re = E(() => u.value === f.value);
    let Ce = 0, oe = 0, W = "", G;
    ve(() => e.modelValue, (de) => {
      if (!(!J() || ue(de)))
        if (e.range) {
          if (!He(de)) return;
          s.value = de.length !== 1, Te(de, e.type);
        } else if (e.multiple) {
          if (!He(de)) return;
          Ke(de, e.type);
        } else zn(de);
    }, { immediate: !0 }), ve(L, pn);
    function se(de) {
      de === "year" ? i.value = !0 : de === "month" ? l.value = !0 : (i.value = !1, l.value = !1);
    }
    function me(de) {
      if (z.value) return;
      const { clientX: we, clientY: Oe } = de.touches[0];
      Ce = we, oe = Oe;
    }
    function Y(de, we) {
      return de >= we && de > 20 ? "x" : "y";
    }
    function ne(de) {
      if (z.value) return;
      const { clientX: we, clientY: Oe } = de.touches[0], Me = we - Ce, je = Oe - oe;
      G = Y(Math.abs(Me), Math.abs(je)), W = Me > 0 ? "prev" : "next";
    }
    function Se() {
      return $3(this, null, function* () {
        if (z.value || G !== "x") return;
        const de = L.value === "year" ? O : L.value === "month" ? I : j;
        yield Pn(), de.value.forwardRef(W), pn();
      });
    }
    function Ve(de, we) {
      const Oe = we === "year" ? C : we === "month" ? b : P;
      if (Oe.value = s.value ? [de, de] : [Oe.value[0], de], s.value = !s.value, s.value) {
        const Me = ce(Oe.value[0]).isAfter(Oe.value[1]) ? [Oe.value[1], Oe.value[0]] : [...Oe.value];
        k(e["onUpdate:modelValue"], Me), k(e.onChange, Me);
      }
    }
    function Ze(de, we) {
      const Oe = we === "year" ? h : we === "month" ? w : $, Me = we === "year" ? "YYYY" : we === "month" ? "YYYY-MM" : "YYYY-MM-DD", je = Oe.value.map((Ie) => ce(Ie).format(Me)), $e = je.findIndex((Ie) => Ie === de);
      $e === -1 ? je.push(de) : je.splice($e, 1), k(e["onUpdate:modelValue"], je), k(e.onChange, je);
    }
    function Le(de, we) {
      return !d.value || !u.value ? !1 : Z.value ? de === "year" ? we < H(d.value) : de === "month" ? we < u.value : re.value ? we < H(c.value) : u.value > f.value : d.value > v.value;
    }
    function bn(de) {
      const { readonly: we, range: Oe, multiple: Me, onChange: je, "onUpdate:modelValue": $e } = e;
      if (de < 0 || we) return;
      m.value = Le("day", de);
      const Ie = ce(`${v.value}-${f.value}-${de}`).format("YYYY-MM-DD");
      Oe ? Ve(Ie, "day") : Me ? Ze(Ie, "day") : (k($e, Ie), k(je, Ie));
    }
    function en(de) {
      const { type: we, readonly: Oe, range: Me, multiple: je, onChange: $e, onPreview: Ie, "onUpdate:modelValue": Xe } = e;
      if (m.value = Le("month", de), we === "month" && !Oe) {
        const $n = `${v.value}-${de}`;
        Me ? Ve($n, "month") : je ? Ze($n, "month") : (k(Xe, $n), k($e, $n));
      } else
        f.value = de, k(Ie, H(v.value), H(f.value), we === "date" ? H(c.value) : void 0);
      l.value = !1;
    }
    function pe(de) {
      const { type: we, readonly: Oe, range: Me, multiple: je, onChange: $e, onPreview: Ie, "onUpdate:modelValue": Xe } = e;
      m.value = Le("year", de), we === "year" && !Oe ? Me ? Ve(`${de}`, "year") : je ? Ze(`${de}`, "year") : (k(Xe, `${de}`), k($e, `${de}`)) : (v.value = `${de}`, k(Ie, H(v.value), H(f.value), we === "date" ? H(c.value) : void 0)), i.value = !1;
    }
    function Ue(de, we) {
      const Oe = we === "prev" ? -1 : 1;
      if (de === "year") v.value = `${H(v.value) + Oe}`;
      else {
        let Me = H(f.value) + Oe;
        Me < 1 && (v.value = `${H(v.value) - 1}`, Me = 12), Me > 12 && (v.value = `${H(v.value) + 1}`, Me = 1), f.value = Vt.find((je) => H(je) === Me);
      }
      k(e.onPreview, H(v.value), H(f.value), e.type === "date" ? H(c.value) : void 0);
    }
    function J() {
      return (e.multiple || e.range) && !He(e.modelValue) ? (ro("DatePicker", 'type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && He(e.modelValue) ? (ro("DatePicker", 'type of prop "modelValue" should be a String'), !1) : !0;
    }
    function ue(de) {
      return He(de) ? !1 : de === "Invalid Date" ? (ro("DatePicker", '"modelValue" is an Invalid Date'), !0) : !1;
    }
    function Te(de, we) {
      const Oe = we === "year" ? C : we === "month" ? b : P, Me = we === "year" ? "YYYY" : we === "month" ? "YYYY-MM" : "YYYY-MM-D", je = de.map((Ie) => ce(Ie).format(Me)).slice(0, 2);
      if (Oe.value.some((Ie) => ue(Ie))) return;
      Oe.value = je;
      const $e = ce(Oe.value[0]).isAfter(Oe.value[1]);
      Oe.value.length === 2 && $e && (Oe.value = [Oe.value[1], Oe.value[0]]);
    }
    function Ke(de, we) {
      const Oe = we === "year" ? h : we === "month" ? w : $, Me = we === "year" ? "YYYY" : we === "month" ? "YYYY-MM" : "YYYY-MM-D";
      Oe.value = Array.from(new Set(de.map((je) => ce(je).format(Me)))).filter((je) => je !== "Invalid Date");
    }
    function zn(de) {
      const we = (de ? ce(de) : ce()).format("YYYY-MM-D");
      if (ue(we)) return;
      const [Oe, Me, je] = we.split("-"), $e = Vt.find((Ie) => Ie === Me);
      u.value = $e, d.value = Oe, c.value = je, f.value = $e, v.value = Oe;
    }
    function pn() {
      oe = 0, Ce = 0, W = "", G = void 0;
    }
    return {
      yearPanelEl: O,
      monthPanelEl: I,
      dayPanelEl: j,
      reverse: m,
      currentDate: r,
      chooseMonth: u,
      chooseYear: d,
      chooseDay: c,
      previewYear: v,
      isYearPanel: i,
      isMonthPanel: l,
      getMonthTitle: D,
      getDateTitle: U,
      getYearTitle: T,
      getPanelType: L,
      getChoose: A,
      getPreview: B,
      componentProps: M,
      slotProps: V,
      formatRange: ae,
      pt: n,
      t: ln,
      n: S3,
      classes: O3,
      clickEl: se,
      handleTouchstart: me,
      handleTouchmove: ne,
      handleTouchend: Se,
      getChooseDay: bn,
      getChooseMonth: en,
      getChooseYear: pe,
      checkPreview: Ue,
      formatElevation: vn
    };
  }
});
Mm.render = P3;
var fi = Mm;
te(fi);
le(fi, Om);
var ZB = fi, as = fi, z3 = Object.defineProperty, hc = Object.getOwnPropertySymbols, T3 = Object.prototype.hasOwnProperty, E3 = Object.prototype.propertyIsEnumerable, gc = (e, n, r) => n in e ? z3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, I3 = (e, n) => {
  for (var r in n || (n = {})) T3.call(n, r) && gc(e, r, n[r]);
  if (hc)
    for (var r of hc(n)) E3.call(n, r) && gc(e, r, n[r]);
  return e;
}, Am = I3({
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
}, De(bo, [
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
])), B3 = Object.defineProperty, bc = Object.getOwnPropertySymbols, D3 = Object.prototype.hasOwnProperty, M3 = Object.prototype.propertyIsEnumerable, yc = (e, n, r) => n in e ? B3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, A3 = (e, n) => {
  for (var r in n || (n = {})) D3.call(n, r) && yc(e, r, n[r]);
  if (bc)
    for (var r of bc(n)) M3.call(n, r) && yc(e, r, n[r]);
  return e;
}, { name: N3, n: V3, classes: R3 } = ee("dialog");
function L3(e, n) {
  const r = Q("var-button"), o = Q("var-popup");
  return g(), ye(o, {
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
    default: fe(() => [N("div", We({
      class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
      style: A3({ width: e.toSizeUnit(e.width) }, e.dialogStyle)
    }, e.$attrs), [
      N("div", { class: p(e.n("title")) }, [F(e.$slots, "title", {}, () => {
        var t;
        return [Be(ie((t = e.title) != null ? t : (e.pt ? e.pt : e.t)("dialogTitle")), 1)];
      })], 2),
      N("div", {
        class: p(e.n("message")),
        style: q({ textAlign: e.messageAlign })
      }, [F(e.$slots, "default", {}, () => [Be(ie(e.message), 1)])], 6),
      F(e.$slots, "actions", {
        slotClass: e.n("actions"),
        cancel: e.cancel,
        confirm: e.confirm
      }, () => [N("div", { class: p(e.n("actions")) }, [e.cancelButton ? (g(), ye(r, {
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
        default: fe(() => {
          var t;
          return [Be(ie((t = e.cancelButtonText) != null ? t : (e.pt ? e.pt : e.t)("dialogCancelButtonText")), 1)];
        }),
        _: 1
      }, 8, [
        "class",
        "text-color",
        "color",
        "loading",
        "disabled",
        "onClick"
      ])) : K("v-if", !0), e.confirmButton ? (g(), ye(r, {
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
        default: fe(() => {
          var t;
          return [Be(ie((t = e.confirmButtonText) != null ? t : (e.pt ? e.pt : e.t)("dialogConfirmButtonText")), 1)];
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
var Nm = _({
  name: N3,
  components: {
    VarPopup: Dr,
    VarButton: Nn
  },
  inheritAttrs: !1,
  props: Am,
  setup(e) {
    const { t: n } = ir(), r = y(!1), o = y(!1), t = Tn(e, "confirmButtonLoading"), a = Tn(e, "cancelButtonLoading"), i = Tn(e, "confirmButtonDisabled"), l = Tn(e, "cancelButtonDisabled"), s = {
      confirmButtonLoading: t,
      cancelButtonLoading: a,
      confirmButtonDisabled: i,
      cancelButtonDisabled: l
    };
    ve(() => e.show, (m) => {
      r.value = m;
    }, { immediate: !0 }), ve(() => e.closeOnClickOverlay, (m) => {
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
      t: ln,
      n: V3,
      classes: R3,
      handleClickOverlay: d,
      confirm: c,
      cancel: f,
      toSizeUnit: ze,
      handleKeyEscape: v
    };
  }
});
Nm.render = L3;
var ut = Nm, F3 = Object.defineProperty, U3 = Object.defineProperties, H3 = Object.getOwnPropertyDescriptors, wc = Object.getOwnPropertySymbols, j3 = Object.prototype.hasOwnProperty, Y3 = Object.prototype.propertyIsEnumerable, kc = (e, n, r) => n in e ? F3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, fl = (e, n) => {
  for (var r in n || (n = {})) j3.call(n, r) && kc(e, r, n[r]);
  if (wc)
    for (var r of wc(n)) Y3.call(n, r) && kc(e, r, n[r]);
  return e;
}, W3 = (e, n) => U3(e, H3(n)), Sr, aa = {};
function K3(e = {}) {
  return an(e) ? W3(fl({}, aa), { message: e }) : fl(fl({}, aa), e);
}
function Fr(e) {
  return tr() ? new Promise((n) => {
    Fr.close();
    const r = rn(K3(e));
    r.teleport = "body", Sr = r;
    const { unmountInstance: o } = go(ut, r, {
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
Fr.setDefaultOptions = function(e) {
  aa = e;
};
Fr.resetDefaultOptions = function() {
  aa = {};
};
Fr.close = function() {
  if (Sr != null) {
    const e = Sr;
    Sr = null, Fe().then(() => {
      e.show = !1;
    });
  }
};
Fr.Component = ut;
te(ut);
te(ut, Fr);
le(Fr, Am);
var JB = ut, is = Fr, Vm = {
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
}, { name: q3, n: X3, classes: G3 } = ee("divider");
function Z3(e, n) {
  return g(), S("div", {
    class: p(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.withPresetInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
    style: q(e.style),
    role: "separator"
  }, [e.vertical ? K("v-if", !0) : F(e.$slots, "default", { key: 0 }, () => [e.description ? (g(), S("span", {
    key: 0,
    class: p(e.n("text"))
  }, ie(e.description), 3)) : K("v-if", !0)])], 6);
}
var Rm = _({
  name: q3,
  props: Vm,
  setup(e, { slots: n }) {
    const r = y(!1), o = E(() => {
      const { vertical: i, inset: l } = e;
      return !i && l === !0;
    }), t = E(() => {
      const { inset: i, vertical: l, margin: s } = e;
      if (et(i) || l) return { margin: s };
      const u = H(i), d = Math.abs(u) + (i + "").replace(u + "", "");
      return {
        margin: s,
        width: `calc(100% - ${ze(d)})`,
        left: u > 0 ? ze(d) : ze(0)
      };
    });
    yn(a), Qo(a);
    function a() {
      const { description: i, vertical: l } = e;
      r.value = (n.default || i != null) && !l;
    }
    return {
      n: X3,
      classes: G3,
      withText: r,
      style: t,
      withPresetInset: o
    };
  }
});
Rm.render = Z3;
var vi = Rm;
te(vi);
le(vi, Vm);
var QB = vi, ls = vi, Lm = {
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
}, J3 = Object.defineProperty, Q3 = Object.defineProperties, x3 = Object.getOwnPropertyDescriptors, $c = Object.getOwnPropertySymbols, _3 = Object.prototype.hasOwnProperty, e4 = Object.prototype.propertyIsEnumerable, Cc = (e, n, r) => n in e ? J3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Sc = (e, n) => {
  for (var r in n || (n = {})) _3.call(n, r) && Cc(e, r, n[r]);
  if ($c)
    for (var r of $c(n)) e4.call(n, r) && Cc(e, r, n[r]);
  return e;
}, Oc = (e, n) => Q3(e, x3(n)), { name: n4, n: r4, classes: o4 } = ee("drag");
function t4(e, n) {
  return g(), ye(cr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [N("div", We({
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
var Fm = _({
  name: n4,
  inheritAttrs: !1,
  props: Lm,
  setup(e, { attrs: n }) {
    const r = y(null), o = y(0), t = y(0), a = y(!1), i = y(!1), { touching: l, dragging: s, moveX: u, moveY: d, startTouch: c, moveTouch: f, endTouch: v, resetTouch: m } = ho(), { disabled: h } = Jr(), w = rn({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    ve(() => e.boundary, B), ar(D), yn(() => {
      B(), D();
    });
    function $(L) {
      e.disabled || (c(L), O());
    }
    function C(L) {
      !l.value || e.disabled || (f(L), Re(L), i.value = !1, a.value = !0, e.direction.includes("x") && (o.value += u.value), e.direction.includes("y") && (t.value += d.value), A());
    }
    function b() {
      e.disabled || (v(), i.value = !0, M());
    }
    function P(L) {
      s.value || k(e.onClick, L);
    }
    function O() {
      const { left: L, top: z } = I();
      o.value = L, t.value = z;
    }
    function I() {
      const L = tn(r.value), z = tn(window), V = L.top - z.top, ae = z.bottom - L.bottom, Z = L.left - z.left, re = z.right - L.right, { width: Ce, height: oe } = L, { width: W, height: G } = z;
      return {
        top: V,
        bottom: ae,
        left: Z,
        right: re,
        width: Ce,
        height: oe,
        halfWidth: Ce / 2,
        halfHeight: oe / 2,
        windowWidth: W,
        windowHeight: G
      };
    }
    function j() {
      const L = I(), z = w.left, V = L.windowWidth - w.right - L.width, ae = w.top, Z = L.windowHeight - w.bottom - L.height;
      return {
        minX: z,
        minY: ae,
        maxX: z < V ? V : z,
        maxY: ae < Z ? Z : ae
      };
    }
    function M() {
      if (e.attraction == null) return;
      const { halfWidth: L, halfHeight: z, top: V, bottom: ae, left: Z, right: re } = I(), { minX: Ce, minY: oe, maxX: W, maxY: G } = j(), se = Z + L - w.left, me = re + L - w.right, Y = V + z - w.top, ne = ae + z - w.bottom, Se = se <= me, Ve = Y <= ne;
      e.attraction.includes("x") && (o.value = Se ? Ce : W), e.attraction.includes("y") && (t.value = Ve ? oe : G);
    }
    function A() {
      const { minX: L, minY: z, maxX: V, maxY: ae } = j();
      o.value = Sn(o.value, L, V), t.value = Sn(t.value, z, ae);
    }
    function B() {
      const { top: L = 0, bottom: z = 0, left: V = 0, right: ae = 0 } = e.boundary;
      w.top = on(L), w.bottom = on(z), w.left = on(V), w.right = on(ae);
    }
    function T() {
      var L;
      const z = (L = n.style) != null ? L : {};
      return Oc(Sc({}, n), { style: Oc(Sc({}, z), {
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
      n: r4,
      classes: o4,
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
Fm.render = t4;
var pi = Fm;
te(pi);
le(pi, Lm);
var xB = pi, ia = pi, Um = {
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
}, { name: a4, n: i4, classes: l4 } = ee("tooltip");
function s4(e, n) {
  return g(), S("div", {
    ref: "host",
    class: p(e.classes(e.n(), e.n("$--box")))
  }, [F(e.$slots, "default"), (g(), ye(cr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [X(nn, {
    name: e.n(),
    onAfterEnter: e.onOpened,
    onAfterLeave: e.handleClosed,
    persisted: ""
  }, {
    default: fe(() => [Ne(N("div", {
      ref: "popover",
      class: p(e.classes(e.n("tooltip"), e.n("$--box"))),
      style: q({ zIndex: e.zIndex }),
      onClick: n[0] || (n[0] = jn(() => {
      }, ["stop"])),
      onMouseenter: n[1] || (n[1] = (...r) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...r)),
      onMouseleave: n[2] || (n[2] = (...r) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...r))
    }, [N("div", {
      style: q({
        background: e.color,
        color: e.textColor,
        width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.referenceSize.width)) : void 0
      }),
      class: p(e.classes(e.n("content-container"), e.n(`--${e.type}`))),
      role: "tooltip"
    }, [F(e.$slots, "content", {}, () => [Be(ie(e.content), 1)])], 6)], 38), [[_n, e.show]])]),
    _: 3
  }, 8, [
    "name",
    "onAfterEnter",
    "onAfterLeave"
  ])], 8, ["to", "disabled"]))], 2);
}
var Hm = _({
  name: a4,
  props: Um,
  setup(e) {
    const { disabled: n } = Jr(), { popover: r, host: o, referenceSize: t, show: a, zIndex: i, handlePopoverMouseenter: l, handlePopoverMouseleave: s, handlePopoverClose: u, handleClosed: d, open: c, close: f, resize: v, setReference: m } = _v(e);
    return {
      popover: r,
      host: o,
      referenceSize: t,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: ze,
      n: i4,
      classes: l4,
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
Hm.render = s4;
var mi = Hm;
te(mi);
le(mi, Um);
var _B = mi, la = mi, jm = {
  expand: Boolean,
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  },
  "onUpdate:expand": R()
}, u4 = Object.defineProperty, Pc = Object.getOwnPropertySymbols, d4 = Object.prototype.hasOwnProperty, c4 = Object.prototype.propertyIsEnumerable, zc = (e, n, r) => n in e ? u4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, f4 = (e, n) => {
  for (var r in n || (n = {})) d4.call(n, r) && zc(e, r, n[r]);
  if (Pc)
    for (var r of Pc(n)) c4.call(n, r) && zc(e, r, n[r]);
  return e;
}, { name: v4, n: p4, classes: m4 } = ee("ellipsis"), h4 = { key: 0 };
function g4(e, n) {
  const r = Q("var-tooltip");
  return g(), ye(r, We({
    class: e.classes(e.n(), [
      e.lineClamp,
      e.n("--clamp"),
      e.n("--line")
    ], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")]),
    "var-ellipsis-cover": "",
    style: e.rootStyles
  }, e.tooltipProps, { onClick: e.handleClick }), {
    content: fe(() => [F(e.$slots, "tooltip-content", {}, () => {
      var o;
      return [(o = e.tooltipProps) != null && o.content ? (g(), S("span", h4, ie(e.tooltipProps.content), 1)) : F(e.$slots, "default", { key: 1 })];
    })]),
    default: fe(() => [N("span", null, [F(e.$slots, "default")])]),
    _: 3
  }, 16, [
    "class",
    "style",
    "onClick"
  ]);
}
var Ym = _({
  name: v4,
  components: { VarTooltip: la },
  props: jm,
  setup(e) {
    const n = Tn(e, "expand"), r = E(() => e.lineClamp ? { "-webkit-line-clamp": e.lineClamp } : {}), o = E(() => e.tooltip === !1 ? { disabled: !0 } : e.tooltip === !0 ? { sameWidth: !0 } : f4({ sameWidth: !0 }, e.tooltip));
    function t() {
      e.expandTrigger && (n.value = !n.value);
    }
    return {
      tooltipProps: o,
      expanding: n,
      rootStyles: r,
      n: p4,
      classes: m4,
      handleClick: t
    };
  }
});
Ym.render = g4;
var hi = Ym;
te(hi);
le(hi, jm);
var eD = hi, ss = hi, Wm = {
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
  inactiveIconSize: De(sn, "size"),
  activeIconSize: De(sn, "size"),
  inactiveIconNamespace: De(sn, "namespace"),
  activeIconNamespace: De(sn, "namespace"),
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
}, { name: b4, classes: vl, n: Fn } = ee("fab"), gi = _({
  name: b4,
  inheritAttrs: !1,
  props: Wm,
  setup(e, { slots: n, attrs: r }) {
    const o = Tn(e, "active"), t = y(null), a = y(null);
    ve(() => e.trigger, () => {
      o.value = !1;
    }), ve(() => e.disabled, () => {
      o.value = !1;
    }), ve(() => [
      e.position,
      e.fixed,
      e.top,
      e.bottom,
      e.left,
      e.right
    ], () => {
      var d;
      (d = a.value) == null || d.reset();
    }), xf(t, "click", s);
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
      return n.trigger ? e.show ? n.trigger({ active: o.value }) : null : Ne(X(Nn, {
        "var-fab-cover": !0,
        class: Fn("trigger"),
        type: e.type,
        color: e.color,
        disabled: e.disabled,
        elevation: e.elevation,
        iconContainer: !0
      }, { default: () => [X(xe, {
        "var-fab-cover": !0,
        class: vl([
          o.value,
          Fn("trigger-active-icon"),
          Fn("trigger-inactive-icon")
        ]),
        name: o.value ? e.activeIcon : e.inactiveIcon,
        size: o.value ? e.activeIconSize : e.inactiveIconSize,
        namespace: o.value ? e.activeIconNamespace : e.inactiveIconNamespace,
        transition: 200,
        animationClass: Fn("--trigger-icon-animation")
      }, null)] }), [[_n, e.show]]);
    }
    return () => {
      var d;
      const c = tu((d = k(n.default)) != null ? d : []), f = et(e.drag) ? {} : e.drag;
      return X(ia, We({
        ref: a,
        class: vl(Fn(`--position-${e.position}`), [!e.fixed, Fn("--absolute")]),
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
        onClick: (v) => i(v, !o.value, c.length)
      }, r), { default: () => [X("div", {
        class: vl(Fn(), Fn(`--direction-${e.direction}`), [e.safeArea, Fn("--safe-area")]),
        ref: t,
        onMouseleave: () => l(!1, c.length),
        onMouseenter: () => l(!0, c.length)
      }, [X(nn, { name: Fn("--active-transition") }, { default: () => [u()] }), X(nn, {
        name: Fn(`--actions-transition-${e.direction}`),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, { default: () => [Ne(X("div", {
        class: Fn("actions"),
        onClick: (v) => v.stopPropagation()
      }, [c.map((v) => {
        var m;
        return X("div", {
          class: Fn("action"),
          key: (m = v.key) != null ? m : void 0
        }, [v]);
      })]), [[_n, e.show && o.value && c.length]])] })])] });
    };
  }
});
te(gi);
le(gi, Wm);
var nD = gi, us = gi, Km = {
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
}, { name: y4, n: w4, classes: k4 } = ee("floating-panel"), Tc = 100, Ec = 0.2;
function $4(e, n) {
  return g(), ye(cr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [N("div", {
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
  }, [F(e.$slots, "header", {}, () => [N("div", { class: p(e.n("header")) }, [N("div", { class: p(e.n("header-toolbar")) }, null, 2)], 2)]), N("div", {
    ref: "contentRef",
    class: p(e.n("content"))
  }, [F(e.$slots, "default")], 2)], 38)], 8, ["to", "disabled"]);
}
var qm = _({
  name: y4,
  props: Km,
  setup(e) {
    const n = y(0), r = y(null), { height: o } = U0(), t = E(() => o.value * 0.6), a = Tn(e, "anchor", { defaultValue: Tc }), i = E(() => {
      const A = [Tc, t.value], { anchors: B } = e;
      return Jn(B) ? A : B;
    }), l = E(() => Math.min(...i.value)), s = E(() => Math.max(...i.value)), { disabled: u } = Jr(), { deltaY: d, touching: c, startTouch: f, moveTouch: v, endTouch: m, isReachTop: h, isReachBottom: w } = ho();
    let $;
    rt(() => c.value), ve(() => a.value, C, { immediate: !0 }), ve(() => i.value, () => {
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
          w(r.value) && Re(A);
          return;
        }
        I(j($ - d.value)), Re(A);
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
    function j(A) {
      if (A > s.value) {
        const B = A - s.value;
        return s.value + B * Ec;
      }
      if (A < l.value) {
        const B = l.value - A;
        return l.value - B * Ec;
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
      n: w4,
      classes: k4,
      toSizeUnit: ze,
      toNumber: H,
      formatElevation: vn,
      handleTouchstart: b,
      handleTouchmove: P,
      handleTouchend: O
    };
  }
});
qm.render = $4;
var bi = qm;
te(bi);
le(bi, Km);
var rD = bi, ds = bi, Xm = {
  disabled: Boolean,
  readonly: Boolean,
  scrollToError: String,
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  },
  onSubmit: R(),
  onReset: R()
}, Ic = (e, n, r) => new Promise((o, t) => {
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
}), { name: C4, n: S4 } = ee("form");
function O4(e, n) {
  return g(), S("form", {
    class: p(e.n()),
    onSubmit: n[0] || (n[0] = (...r) => e.handleSubmit && e.handleSubmit(...r)),
    onReset: n[1] || (n[1] = (...r) => e.handleReset && e.handleReset(...r))
  }, [F(e.$slots, "default")], 34);
}
var Gm = _({
  name: C4,
  props: Xm,
  setup(e) {
    const n = E(() => e.disabled), r = E(() => e.readonly), { formItems: o, bindFormItems: t } = T1();
    t({
      disabled: n,
      readonly: r
    });
    function a(c) {
      setTimeout(() => {
        const f = Mr(c), v = f === window ? 0 : od(f);
        No(f, {
          top: od(c) - v - on(e.scrollToErrorOffsetY),
          animation: El
        });
      }, 300);
    }
    function i(c) {
      return Ic(this, null, function* () {
        Re(c);
        const f = yield s();
        k(e.onSubmit, f);
      });
    }
    function l(c) {
      Re(c), u(), k(e.onReset);
    }
    function s() {
      return Ic(this, null, function* () {
        var c;
        const f = yield Promise.all(o.map(({ validate: v }) => v()));
        if (e.scrollToError) {
          const [, v] = Rf(f, (h) => h === !1, e.scrollToError), m = v > -1;
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
      n: S4,
      handleSubmit: i,
      handleReset: l,
      validate: s,
      reset: u,
      resetValidation: d
    };
  }
});
Gm.render = O4;
var yo = Gm;
yo.useValidation = qn;
yo.useForm = Xn;
te(yo);
le(yo, Xm);
var oD = yo, cs = yo, Zm = {
  highlighter: Object,
  theme: String,
  tag: {
    type: String,
    default: "div"
  }
}, { name: P4, n: z4 } = ee("highlighter-provider"), yi = _({
  name: P4,
  props: Zm,
  setup(e, { slots: n }) {
    return oS({
      highlighter: E(() => e.highlighter),
      theme: E(() => e.theme)
    }), () => Zo(e.tag, { class: z4() }, k(n.default));
  }
});
te(yi);
le(yi, Zm);
var tD = yi, fs = yi, Jm = {
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
}, { name: T4, n: E4, classes: I4 } = ee("image"), B4 = [
  "alt",
  "title",
  "referrerpolicy",
  "lazy-loading",
  "lazy-error"
], D4 = [
  "alt",
  "title",
  "referrerpolicy",
  "src"
];
function M4(e, n) {
  var r;
  const o = qe("lazy"), t = qe("ripple");
  return Ne((g(), S("div", {
    class: p(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
    style: q({
      width: e.toSizeUnit(e.width),
      height: e.toSizeUnit(e.height),
      borderRadius: e.toSizeUnit(e.radius)
    })
  }, [
    e.lazy && !e.showErrorSlot ? Ne((g(), S("img", {
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
    }, null, 46, B4)), [[o, (r = e.src) != null ? r : ""]]) : K("v-if", !0),
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
    }, null, 46, D4)) : K("v-if", !0),
    e.showErrorSlot ? F(e.$slots, "error", { key: 2 }) : K("v-if", !0)
  ], 6)), [[t, { disabled: !e.ripple }]]);
}
var Qm = _({
  name: T4,
  directives: {
    Lazy: jo,
    Ripple: un
  },
  props: Jm,
  setup(e, { slots: n }) {
    const r = y(!1);
    ve(() => e.src, () => {
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
      n: E4,
      classes: I4,
      toSizeUnit: ze,
      handleLoad: t,
      handleError: o,
      handleClick: a
    };
  }
});
Qm.render = M4;
var wi = Qm;
te(wi);
le(wi, Jm);
var aD = wi, vs = wi, Tu = {
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
}, xr = (e, n, r) => new Promise((o, t) => {
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
}), A4 = 250, N4 = 20, { name: V4, n: Bc, classes: R4 } = ee("swipe"), L4 = ["onClick"];
function F4(e, n) {
  const r = Q("var-icon"), o = Q("var-button"), t = qe("hover");
  return Ne((g(), S("div", {
    ref: "swipeEl",
    class: p(e.n())
  }, [
    N("div", {
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
    }, [F(e.$slots, "default")], 38),
    e.navigation ? F(e.$slots, "prev", jr(We({ key: 0 }, {
      index: e.index,
      length: e.length,
      prev: e.prev,
      next: e.next,
      to: e.to,
      hovering: e.hovering
    })), () => [X(nn, { name: e.getNavigationAnimation("prev") }, {
      default: fe(() => [e.navigation === !0 || e.hovering ? (g(), S("div", {
        key: 0,
        class: p(e.classes(e.n("navigation"), e.n("navigation-prev"), [e.vertical, e.n("--navigation-vertical-prev")]))
      }, [X(o, {
        "var-swipe-cover": "",
        disabled: !e.loop && e.index === 0,
        class: p(e.n("navigation-prev-button")),
        onClick: n[3] || (n[3] = (a) => e.prev())
      }, {
        default: fe(() => [X(r, {
          "var-swipe-cover": "",
          class: p(e.n("navigation-prev-button-icon")),
          name: e.vertical ? "chevron-up" : "chevron-left"
        }, null, 8, ["class", "name"])]),
        _: 1
      }, 8, ["disabled", "class"])], 2)) : K("v-if", !0)]),
      _: 1
    }, 8, ["name"])]) : K("v-if", !0),
    e.navigation ? F(e.$slots, "next", jr(We({ key: 1 }, {
      index: e.index,
      length: e.length,
      hovering: e.hovering,
      prev: e.prev,
      next: e.next,
      to: e.to
    })), () => [X(nn, { name: e.getNavigationAnimation("next") }, {
      default: fe(() => [e.navigation === !0 || e.hovering ? (g(), S("div", {
        key: 0,
        class: p(e.classes(e.n("navigation"), e.n("navigation-next"), [e.vertical, e.n("--navigation-vertical-next")]))
      }, [X(o, {
        "var-swipe-cover": "",
        class: p(e.n("navigation-next-button")),
        disabled: !e.loop && e.index === e.length - 1,
        onClick: n[4] || (n[4] = (a) => e.next())
      }, {
        default: fe(() => [X(r, {
          "var-swipe-cover": "",
          class: p(e.n("navigation-next-button-icon")),
          name: e.vertical ? "chevron-down" : "chevron-right"
        }, null, 8, ["class", "name"])]),
        _: 1
      }, 8, ["class", "disabled"])], 2)) : K("v-if", !0)]),
      _: 1
    }, 8, ["name"])]) : K("v-if", !0),
    F(e.$slots, "indicator", jr(da({
      index: e.index,
      length: e.length,
      hovering: e.hovering,
      prev: e.prev,
      next: e.next,
      to: e.to
    })), () => [e.indicator && e.length ? (g(), S("div", {
      key: 0,
      class: p(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
    }, [(g(!0), S(Ae, null, Ge(e.length, (a, i) => (g(), S("div", {
      key: a,
      class: p(e.classes(e.n("indicator"), [e.index === i, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
      style: q({ background: e.indicatorColor }),
      onClick: (l) => e.to(i)
    }, null, 14, L4))), 128))], 2)) : K("v-if", !0)])
  ], 2)), [[t, e.handleHovering]]);
}
var xm = _({
  name: V4,
  directives: { Hover: Rn },
  components: {
    VarButton: Nn,
    VarIcon: xe
  },
  props: Tu,
  setup(e) {
    const n = y(null), r = y(0), o = E(() => e.vertical), t = y(0), a = y(0), i = y(!1), l = y(0), s = y(!1), { swipeItems: u, bindSwipeItems: d, length: c } = E1(), { swipeResizeListeners: f, bindSwipeResizeListeners: v } = I1(), { popup: m, bindPopup: h } = dv(), { deltaX: w, deltaY: $, moveX: C, moveY: b, offsetX: P, offsetY: O, touching: I, direction: j, startTime: M, startTouch: A, moveTouch: B, endTouch: T } = ho(), D = E(() => j.value === (e.vertical ? "vertical" : "horizontal"));
    let U = !1, L = -1;
    d({
      size: r,
      currentIndex: l,
      vertical: o
    }), Ye(() => window, "keydown", Ve), k(h, null), k(v, null), ve(() => c.value, () => xr(null, null, function* () {
      yield Pn(), oe(), Ze();
    })), m && ve(() => m.show.value, (pe) => xr(null, null, function* () {
      pe ? (yield Pn(), Ze()) : G();
    })), Nr(Ze), mo(G), ar(Ze);
    function z(pe) {
      return u.find(({ index: Ue }) => Ue.value === pe);
    }
    function V() {
      e.loop && (a.value >= 0 && z(c.value - 1).setTranslate(-t.value), a.value <= -(t.value - r.value) && z(0).setTranslate(t.value), a.value > -(t.value - r.value) && a.value < 0 && (z(c.value - 1).setTranslate(0), z(0).setTranslate(0)));
    }
    function ae(pe) {
      const Ue = En(pe) ? pe : Math.floor((a.value - r.value / 2) / -r.value), { loop: J } = e;
      return Ue <= -1 ? J ? -1 : 0 : Ue >= c.value ? J ? c.value : c.value - 1 : Ue;
    }
    function Z(pe) {
      const { loop: Ue } = e;
      return pe === -1 ? Ue ? c.value - 1 : 0 : pe === c.value ? Ue ? 0 : c.value - 1 : pe;
    }
    function re(pe) {
      return e.loop ? pe < 0 ? c.value + pe : pe >= c.value ? pe - c.value : pe : Sn(pe, 0, c.value - 1);
    }
    function Ce() {
      return xr(this, null, function* () {
        const pe = a.value >= r.value, Ue = a.value <= -t.value, J = 0, ue = -(t.value - r.value);
        i.value = !0, (pe || Ue) && (i.value = !0, a.value = Ue ? J : ue, z(0).setTranslate(0), z(c.value - 1).setTranslate(0)), yield Pn(), i.value = !1;
      });
    }
    function oe() {
      U || (l.value = re(H(e.initialIndex)), U = !0);
    }
    function W() {
      const { autoplay: pe } = e;
      !pe || c.value <= 1 || (G(), L = window.setTimeout(() => {
        Le(), W();
      }, H(pe)));
    }
    function G() {
      L && clearTimeout(L);
    }
    function se(pe) {
      return xr(this, null, function* () {
        c.value <= 1 || !e.touchable || (A(pe), G(), yield Ce(), i.value = !0);
      });
    }
    function me(pe) {
      const { touchable: Ue, vertical: J } = e;
      !I.value || !Ue || (B(pe), D.value && (Re(pe), a.value += J ? b.value : C.value, V()));
    }
    function Y() {
      if (!I.value || (T(), !D.value)) return;
      const { vertical: pe, onChange: Ue } = e, J = pe ? $.value < 0 : w.value < 0, ue = pe ? O.value : P.value, Te = performance.now() - M.value <= A4 && ue >= N4 ? ae(J ? l.value + 1 : l.value - 1) : ae();
      i.value = !1, a.value = Te * -r.value;
      const Ke = l.value;
      l.value = Z(Te), W(), Ke !== l.value && k(Ue, l.value);
    }
    function ne(pe) {
      e.navigation === "hover" && (s.value = pe);
    }
    function Se(pe) {
      return e.navigation !== "hover" ? "" : Bc(`--navigation${e.vertical ? "-vertical" : ""}-${pe}-animation`);
    }
    function Ve(pe) {
      if (!u.length || u.findIndex(({ isFocusing: J }) => J.value) === -1) return;
      const { key: Ue } = pe;
      Re(pe), Ue === "ArrowLeft" && bn(), Ue === "ArrowRight" && Le();
    }
    function Ze() {
      n.value && (i.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * c.value, a.value = l.value * -r.value, u.forEach((pe) => {
        pe.setTranslate(0);
      }), W(), setTimeout(() => {
        i.value = !1;
      }), f.forEach(({ onResize: pe }) => {
        pe();
      }));
    }
    function Le(pe) {
      return xr(this, null, function* () {
        if (c.value <= 1) return;
        oe();
        const { loop: Ue, onChange: J } = e, ue = l.value;
        if (l.value = re(ue + 1), pe?.event !== !1 && k(J, l.value), yield Ce(), ue === c.value - 1 && Ue) {
          z(0).setTranslate(t.value), a.value = c.value * -r.value;
          return;
        }
        ue !== c.value - 1 && (a.value = l.value * -r.value);
      });
    }
    function bn(pe) {
      return xr(this, null, function* () {
        if (c.value <= 1) return;
        oe();
        const { loop: Ue, onChange: J } = e, ue = l.value;
        if (l.value = re(ue - 1), pe?.event !== !1 && k(J, l.value), yield Ce(), ue === 0 && Ue) {
          z(c.value - 1).setTranslate(-t.value), a.value = r.value;
          return;
        }
        ue !== 0 && (a.value = l.value * -r.value);
      });
    }
    function en(pe, Ue) {
      if (c.value <= 1 || pe === l.value) return;
      pe = pe < 0 ? 0 : pe, pe = pe >= c.value ? c.value : pe;
      const J = pe > l.value ? Le : bn, ue = Math.abs(pe - l.value);
      Array.from({ length: ue }).forEach((Te, Ke) => {
        J({ event: Ke === ue - 1 ? Ue?.event : !1 });
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
      n: Bc,
      toSizeUnit: ze,
      classes: R4,
      handleTouchstart: se,
      handleTouchmove: me,
      handleTouchend: Y,
      next: Le,
      prev: bn,
      to: en,
      resize: Ze,
      toNumber: H,
      handleHovering: ne,
      getNavigationAnimation: Se
    };
  }
});
xm.render = F4;
var ki = xm;
te(ki);
le(ki, Tu);
var iD = ki, Wo = ki;
function U4() {
  const { bindParent: e, index: n, parentProvider: r } = wn(Rv);
  return Yn(!!e, "SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: r,
    bindSwipe: e
  };
}
var { name: H4, n: j4 } = ee("swipe-item"), Y4 = ["aria-hidden"];
function W4(e, n) {
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
  }, [F(e.$slots, "default")], 46, Y4);
}
var _m = _({
  name: H4,
  setup() {
    const e = y(0), n = y(!1), { swipe: r, bindSwipe: o, index: t } = U4(), { size: a, currentIndex: i, vertical: l } = r;
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
      n: j4,
      toSizeUnit: ze
    };
  }
});
_m.render = W4;
var Eu = _m;
te(Eu);
var lD = Eu, Ko = Eu, K4 = Object.defineProperty, Dc = Object.getOwnPropertySymbols, q4 = Object.prototype.hasOwnProperty, X4 = Object.prototype.propertyIsEnumerable, Mc = (e, n, r) => n in e ? K4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Ac = (e, n) => {
  for (var r in n || (n = {})) q4.call(n, r) && Mc(e, r, n[r]);
  if (Dc)
    for (var r of Dc(n)) X4.call(n, r) && Mc(e, r, n[r]);
  return e;
}, eh = Ac(Ac({
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
}, De(Tu, [
  "loop",
  "indicator",
  "onChange"
])), De(bo, [
  "lockScroll",
  "teleport",
  "closeOnKeyEscape",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onKeyEscape",
  "onRouteChange"
])), { name: G4, n: Nc, classes: Z4 } = ee("image-preview"), pl = 12, Vc = 200, J4 = 350, Rc = 200, Q4 = 500, $t = 1, x4 = ["onTouchstart"], _4 = ["src", "alt"];
function e6(e, n) {
  const r = Q("var-swipe-item"), o = Q("var-swipe"), t = Q("var-icon"), a = Q("var-popup");
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
    default: fe(() => [
      X(o, We({
        ref: "swipeRef",
        class: e.n("swipe"),
        "var-image-preview-cover": "",
        touchable: e.canSwipe,
        indicator: e.indicator && e.images.length > 1,
        "initial-index": e.toNumber(e.initialIndex),
        loop: e.loop
      }, e.$attrs, { onChange: e.onChange }), {
        default: fe(() => [(g(!0), S(Ae, null, Ge(e.images, (i, l) => (g(), ye(r, {
          key: i,
          class: p(e.n("swipe-item")),
          "var-image-preview-cover": ""
        }, {
          default: fe(() => [N("div", {
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
          }, [N("img", {
            role: "img",
            class: p(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
            src: i,
            alt: i
          }, null, 10, _4)], 46, x4)]),
          _: 2
        }, 1032, ["class"]))), 128))]),
        indicator: fe(({ index: i, length: l }) => [F(e.$slots, "indicator", {
          index: i,
          length: l
        }, () => [e.indicator && e.images.length > 1 ? (g(), S("div", {
          key: 0,
          class: p(e.n("indicators"))
        }, ie(i + 1) + " / " + ie(l), 3)) : K("v-if", !0)])]),
        _: 3
      }, 16, [
        "class",
        "touchable",
        "indicator",
        "initial-index",
        "loop",
        "onChange"
      ]),
      F(e.$slots, "close-icon", {}, () => [e.closeable ? (g(), ye(t, {
        key: 0,
        class: p(e.n("close-icon")),
        name: "close-circle",
        "var-image-preview-cover": "",
        onClick: e.close
      }, null, 8, ["class", "onClick"])) : K("v-if", !0)]),
      e.$slots.extra ? (g(), S("div", {
        key: 0,
        class: p(e.n("extra"))
      }, [F(e.$slots, "extra")], 2)) : K("v-if", !0)
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
var nh = _({
  name: G4,
  components: {
    VarSwipe: Wo,
    VarSwipeItem: Ko,
    VarPopup: Dr,
    VarIcon: xe
  },
  inheritAttrs: !1,
  props: eh,
  setup(e) {
    const n = Tn(e, "show"), r = y(1), o = y(0), t = y(0), a = y(), i = y(), l = y(!0), s = y(null), { moveX: u, moveY: d, distance: c, startTime: f, startTouch: v, moveTouch: m, endTouch: h } = ho(), w = E(() => {
      const { imagePreventDefault: W, show: G } = e;
      return G && W;
    });
    let $ = null, C = null, b = !1;
    const P = {
      start: null,
      prev: null
    };
    Ye(() => document, "contextmenu", ae);
    function O(W) {
      r.value = H(W), l.value = !1, P.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, Rc);
    }
    function I() {
      r.value = 1, o.value = 0, t.value = 0, l.value = !0, P.prev = null, a.value = void 0, i.value = void 0;
    }
    function j(W) {
      return P.prev ? c.value <= pl && performance.now() - f.value <= Vc && P.prev === W : !1;
    }
    function M(W) {
      return !W || !P.start || !P.prev ? !1 : c.value <= pl && performance.now() - f.value < J4 && (W === P.start || W.parentNode === P.start);
    }
    function A() {
      h(), window.clearTimeout(C), b = !1, P.start = null;
    }
    function B(W) {
      if (h(), window.clearTimeout(C), b) {
        b = !1;
        return;
      }
      const G = M(W.target);
      $ = window.setTimeout(() => {
        G && V(), P.start = null;
      }, Vc);
    }
    function T(W, G) {
      window.clearTimeout($), window.clearTimeout(C);
      const se = W.currentTarget;
      if (P.start = se, C = window.setTimeout(() => {
        b = !0, k(e.onLongPress, G);
      }, Q4), j(se)) {
        r.value > $t ? I() : O(e.zoom);
        return;
      }
      v(W), P.prev = se;
    }
    function D(W) {
      const { offsetWidth: G, offsetHeight: se } = W, { naturalWidth: me, naturalHeight: Y } = W.querySelector(`.${Nc("image")}`);
      return {
        width: G,
        height: se,
        imageRadio: Y / me,
        rootRadio: se / G,
        zoom: H(e.zoom)
      };
    }
    function U(W) {
      const { zoom: G, imageRadio: se, rootRadio: me, width: Y, height: ne } = D(W);
      if (!se) return 0;
      const Se = se > me ? ne / se : Y;
      return Math.max(0, (G * Se - Y) / 2) / G;
    }
    function L(W) {
      const { zoom: G, imageRadio: se, rootRadio: me, width: Y, height: ne } = D(W);
      if (!se) return 0;
      const Se = se > me ? ne : Y * se;
      return Math.max(0, (G * Se - ne) / 2) / G;
    }
    function z(W) {
      if (!P.prev) return;
      m(W);
      const G = W.currentTarget;
      if (c.value > pl && window.clearTimeout(C), r.value > $t) {
        const se = U(G), me = L(G);
        o.value = Sn(o.value + u.value, -se, se), t.value = Sn(t.value + d.value, -me, me);
      }
      P.prev = G;
    }
    function V() {
      if (r.value > $t) {
        I(), setTimeout(() => k(e["onUpdate:show"], !1), Rc);
        return;
      }
      k(e["onUpdate:show"], !1);
    }
    function ae(W) {
      w.value && Re(W);
    }
    function Z(W) {
      var G;
      (G = s.value) == null || G.prev(W);
    }
    function re(W) {
      var G;
      (G = s.value) == null || G.next(W);
    }
    function Ce(W, G) {
      var se;
      (se = s.value) == null || se.to(W, G);
    }
    function oe(W) {
      W <= $t ? I() : O(W);
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
      n: Nc,
      classes: Z4,
      toNumber: H,
      handleTouchstart: T,
      handleTouchmove: z,
      handleTouchend: B,
      handleTouchcancel: A,
      close: V,
      prev: Z,
      next: re,
      to: Ce,
      zoom: oe
    };
  }
});
nh.render = e6;
var dt = nh, n6 = Object.defineProperty, r6 = Object.defineProperties, o6 = Object.getOwnPropertyDescriptors, Lc = Object.getOwnPropertySymbols, t6 = Object.prototype.hasOwnProperty, a6 = Object.prototype.propertyIsEnumerable, Fc = (e, n, r) => n in e ? n6(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Ct = (e, n) => {
  for (var r in n || (n = {})) t6.call(n, r) && Fc(e, r, n[r]);
  if (Lc)
    for (var r of Lc(n)) a6.call(n, r) && Fc(e, r, n[r]);
  return e;
}, Uc = (e, n) => r6(e, o6(n)), Or, Bo = {};
function i6(e = {}) {
  return an(e) ? Uc(Ct({}, Bo), { images: [e] }) : He(e) ? Uc(Ct({}, Bo), { images: e }) : Ct(Ct({}, Bo), e);
}
function Ur(e) {
  if (!tr()) return;
  Ur.close();
  const n = rn(i6(e));
  n.teleport = "body", Or = n;
  const { unmountInstance: r } = go(dt, n, {
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
Ur.close = () => {
  if (Or != null) {
    const e = Or;
    Or = null, Fe().then(() => {
      e.show = !1;
    });
  }
};
Ur.setDefaultOptions = (e) => {
  Bo = e;
};
Ur.resetDefaultOptions = () => {
  Bo = {};
};
Ur.Component = dt;
te(dt);
te(dt, Ur);
le(Ur, eh);
var sD = dt, qo = Ur, rh = { index: [Number, String] }, oh = /* @__PURE__ */ Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function l6() {
  const { bindChildren: e, length: n, childProviders: r } = kn(oh);
  return {
    length: n,
    indexAnchors: r,
    bindIndexAnchors: e
  };
}
function s6() {
  const { parentProvider: e, index: n, bindParent: r } = wn(oh);
  return Yn(!!r, "IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: r
  };
}
var { name: u6, n: d6, classes: c6 } = ee("index-anchor");
function f6(e, n) {
  return g(), ye(po(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: "anchorEl",
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode
  }, {
    default: fe(() => [N("div", We({ class: e.n() }, e.$attrs), [F(e.$slots, "default", {}, () => [Be(ie(e.name), 1)])], 16)]),
    _: 3
  }, 8, [
    "offset-top",
    "z-index",
    "disabled",
    "css-mode"
  ]);
}
var th = _({
  name: u6,
  components: { VarSticky: fo },
  inheritAttrs: !1,
  props: rh,
  setup(e) {
    const n = y(!1), r = E(() => e.index), o = y(null), { index: t, indexBar: a, bindIndexBar: i } = s6(), { active: l, sticky: s, cssMode: u, stickyOffsetTop: d, zIndex: c } = a;
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
      n: d6,
      classes: c6,
      name: r,
      anchorEl: o,
      active: l,
      sticky: s,
      zIndex: c,
      disabled: n,
      cssMode: u,
      stickyOffsetTop: d,
      Transition: nn
    };
  }
});
th.render = f6;
var $i = th;
te($i);
le($i, rh);
var uD = $i, ps = $i, ah = {
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
}, Hc = (e, n, r) => new Promise((o, t) => {
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
}), { name: v6, n: p6, classes: m6 } = ee("index-bar"), h6 = ["onClick"];
function g6(e, n) {
  return g(), S("div", {
    ref: "barEl",
    class: p(e.n())
  }, [F(e.$slots, "default"), N("ul", {
    class: p(e.n("anchor-list")),
    style: q({
      zIndex: e.toNumber(e.zIndex) + 2,
      display: e.hideList ? "none" : "block"
    })
  }, [(g(!0), S(Ae, null, Ge(e.anchorNameList, (r) => (g(), S("li", {
    key: r,
    class: p(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
    style: q({ color: e.active === r && e.highlightColor ? e.highlightColor : void 0 }),
    onClick: (o) => e.anchorClick({
      anchorName: r,
      manualCall: !0
    })
  }, [F(e.$slots, "anchor-name", { anchorName: r }, () => [Be(ie(r), 1)])], 14, h6))), 128))], 6)], 2);
}
var ih = _({
  name: v6,
  props: ah,
  setup(e) {
    const n = y(""), r = y(null), o = y([]), t = y(), a = E(() => e.sticky), i = E(() => e.stickyCssMode), l = E(() => on(e.stickyOffsetTop)), s = E(() => e.zIndex), { length: u, indexAnchors: d, bindIndexAnchors: c } = l6();
    let f = null, v = !1;
    const m = {
      active: t,
      sticky: a,
      cssMode: i,
      stickyOffsetTop: l,
      zIndex: s
    };
    ve(() => u.value, () => Hc(null, null, function* () {
      yield Pn(), o.value = d.filter(({ name: I }) => I.value != null).map(({ name: I }) => I.value);
    })), yn(b), ca(P), vo(() => {
      v = !0, P();
    }), Nr(() => {
      !v || t.value === void 0 || (C({
        anchorName: t.value,
        options: { event: !1 }
      }), v = !1);
    }), c(m);
    function h(I, j) {
      const M = gn(I) ? I.name.value : I;
      M === t.value || M === void 0 || (t.value = M, j?.event !== !1 && k(e.onChange, M));
    }
    function w() {
      const { top: I } = tn(f), { top: j } = tn(r.value);
      return Br(f) - I + j;
    }
    function $() {
      const I = Br(f), j = f === window ? document.body.scrollHeight : f.scrollHeight, M = w();
      d.forEach((A, B) => {
        const T = I - A.getOffsetTop() + l.value - M, D = B === d.length - 1 ? j : d[B + 1].getOffsetTop() - A.getOffsetTop();
        A.setDisabled(!0), T >= 0 && T < D && n.value === "" && (A.setDisabled(!1), h(A));
      });
    }
    function C(I) {
      return Hc(this, arguments, function* ({ anchorName: j, manualCall: M = !1, options: A }) {
        if (M && k(e.onClick, j), j === t.value && !v) return;
        const B = d.find(({ name: L }) => j === L.value);
        if (!B) return;
        const T = w(), D = B.getOffsetTop() - l.value + T, U = ma(f);
        n.value = j, h(j, A), yield No(f, {
          left: U,
          top: D,
          animation: ip,
          duration: H(e.duration)
        }), yield Pn(), n.value = "";
      });
    }
    function b() {
      f = Mr(r.value), f.addEventListener("scroll", $);
    }
    function P() {
      f && f.removeEventListener("scroll", $);
    }
    function O(I, j) {
      qr(() => C({
        anchorName: I,
        options: j
      }));
    }
    return {
      barEl: r,
      active: t,
      zIndex: s,
      anchorNameList: o,
      n: p6,
      classes: m6,
      toNumber: H,
      scrollTo: O,
      anchorClick: C
    };
  }
});
ih.render = g6;
var Ci = ih;
te(Ci);
le(Ci, ah);
var dD = Ci, ms = Ci, lh = {
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
}, { name: b6, n: y6, classes: w6 } = ee("link");
function k6(e, n) {
  return g(), ye(po(e.tag), We(e.linkProps, {
    class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n(`--${e.type}`), [e.underline !== "none", e.n(`--underline-${e.underline}`)], [e.disabled, e.n("--disabled")], [e.isFocusing && !e.inMobile(), e.n("--focusing")]),
    style: {
      color: e.textColor,
      fontSize: e.toSizeUnit(e.textSize)
    },
    onClick: e.handleClick,
    onFocus: n[0] || (n[0] = (r) => e.isFocusing = !0),
    onBlur: n[1] || (n[1] = (r) => e.isFocusing = !1)
  }), {
    default: fe(() => [F(e.$slots, "default")]),
    _: 3
  }, 16, [
    "class",
    "style",
    "onClick"
  ]);
}
var sh = _({
  name: b6,
  props: lh,
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
      inMobile: Do,
      n: y6,
      classes: w6,
      handleClick: t,
      toSizeUnit: ze
    };
  }
});
sh.render = k6;
var Si = sh;
te(Si);
le(Si, lh);
var cD = Si, hs = Si, uh = {
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
}, dh = /* @__PURE__ */ Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function $6() {
  const { bindChildren: e, childProviders: n, length: r } = kn(dh);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
var ch = /* @__PURE__ */ Symbol("TAB_ITEM_BIND_LIST_KEY");
function C6() {
  const { parentProvider: e, bindParent: n, index: r } = wn(dh);
  return Yn(!!n, "TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
function S6() {
  const { childProviders: e, bindChildren: n, length: r } = kn(ch);
  return {
    length: r,
    lists: e,
    bindLists: n
  };
}
function O6() {
  const { parentProvider: e, bindParent: n, index: r } = wn(ch);
  return {
    index: r,
    tabItem: e,
    bindTabItem: n
  };
}
var P6 = (e, n, r) => new Promise((o, t) => {
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
}), { name: z6, n: T6, classes: E6 } = ee("list");
function I6(e, n) {
  const r = Q("var-loading"), o = qe("ripple");
  return g(), S("div", {
    ref: "listEl",
    class: p(e.classes(e.n(), e.n("$--box")))
  }, [
    F(e.$slots, "default"),
    e.loading ? F(e.$slots, "loading", { key: 0 }, () => {
      var t;
      return [N("div", { class: p(e.n("loading")) }, [N("div", { class: p(e.n("loading-text")) }, ie((t = e.loadingText) != null ? t : (e.pt ? e.pt : e.t)("listLoadingText")), 3), X(r, {
        size: "mini",
        radius: 10
      })], 2)];
    }) : K("v-if", !0),
    e.finished ? F(e.$slots, "finished", { key: 1 }, () => {
      var t;
      return [N("div", { class: p(e.n("finished")) }, ie((t = e.finishedText) != null ? t : (e.pt ? e.pt : e.t)("listFinishedText")), 3)];
    }) : K("v-if", !0),
    e.error ? F(e.$slots, "error", { key: 2 }, () => {
      var t;
      return [Ne((g(), S("div", {
        class: p(e.n("error")),
        onClick: n[0] || (n[0] = (...a) => e.load && e.load(...a))
      }, [Be(ie((t = e.errorText) != null ? t : (e.pt ? e.pt : e.t)("listErrorText")), 1)], 2)), [[o]])];
    }) : K("v-if", !0),
    N("div", {
      ref: "detectorEl",
      class: p(e.n("detector"))
    }, null, 2)
  ], 2);
}
var fh = _({
  name: z6,
  directives: { Ripple: un },
  components: { VarLoading: uo },
  props: uh,
  setup(e) {
    const n = y(null), r = y(null), { tabItem: o, bindTabItem: t } = O6(), { t: a } = ir();
    let i;
    k(t, {}), o && ve(() => o.current.value, d), ve(() => [
      e.loading,
      e.error,
      e.finished
    ], d), yn(() => {
      i = Mr(n.value), i.addEventListener("scroll", d), e.immediateCheck && d();
    }), mo(u);
    function l() {
      k(e["onUpdate:error"], !1), k(e["onUpdate:loading"], !0), k(e.onLoad);
    }
    function s() {
      const { bottom: c } = tn(i), { bottom: f } = tn(r.value);
      return Math.floor(f) - on(e.offset) <= c;
    }
    function u() {
      i && i.removeEventListener("scroll", d);
    }
    function d() {
      return P6(this, null, function* () {
        yield Fe(), !(e.loading || e.finished || e.error || o?.current.value === !1 || !s()) && l();
      });
    }
    return {
      listEl: n,
      detectorEl: r,
      pt: a,
      t: ln,
      isNumber: En,
      load: l,
      check: d,
      n: T6,
      classes: E6
    };
  }
});
fh.render = I6;
var Oi = fh;
te(Oi);
le(Oi, uh);
var fD = Oi, gs = Oi, B6 = {
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
}, { name: D6, classes: M6, n: jc } = ee("loading-bar"), A6 = _({
  name: D6,
  props: B6,
  setup(e) {
    return () => X("div", {
      class: M6(jc(), [e.error, jc("--error")]),
      style: {
        zIndex: Hn.zIndex + 10,
        width: `${e.value}%`,
        opacity: e.opacity,
        height: ze(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: ze(e.top),
        transitionDuration: e.transitionDuration == null ? void 0 : `${e.transitionDuration}ms`
      }
    }, null);
  }
}), Iu = 200, vh, ph, mh, hh, Pi, Yc, gh = {}, dn = rn({
  value: 0,
  opacity: 0,
  error: !1
});
function N6(e) {
  Object.assign(dn, e), gh = e;
}
var V6 = () => {
  Object.keys(gh).forEach((e) => {
    dn[e] !== void 0 && (dn[e] = void 0);
  });
}, bh = () => {
  Yc || (Yc = !0, go(A6, dn));
}, Bu = () => {
  vh = window.setTimeout(() => {
    dn.transitionDuration = void 0, !(dn.value >= 95) && (dn.value += dn.value < 70 ? Math.round(5 * Math.random()) : Math.random(), Bu());
  }, 200);
}, Du = () => {
  window.clearTimeout(vh), window.clearTimeout(Pi), window.clearTimeout(mh), window.clearTimeout(ph), window.clearTimeout(hh);
}, yh = () => {
  Du(), dn.value = 100, Pi = window.setTimeout(() => {
    dn.opacity = 0, hh = window.setTimeout(() => {
      dn.error = !1;
    }, 250);
  }, Iu + 100);
}, R6 = () => {
  Du(), dn.error = !1, dn.value = 0, dn.transitionDuration = 0, bh(), Pi = window.setTimeout(() => {
    dn.opacity = 1;
  }, Iu), Bu();
}, L6 = () => {
  var e;
  mh = window.setTimeout(yh, (e = dn.finishDelay) != null ? e : 0);
}, F6 = () => {
  Du(), dn.error = !0, dn.value === 100 && (dn.value = 0, dn.transitionDuration = 0), bh(), Pi = window.setTimeout(() => {
    dn.opacity = 1;
  }, Iu), Bu(), ph = window.setTimeout(yh, 300);
}, wh = {
  start: R6,
  finish: L6,
  error: F6,
  setDefaultOptions: N6,
  resetDefaultOptions: V6
}, vD = wh, bs = wh, kh = {
  tag: {
    type: String,
    default: "div"
  },
  locale: {
    type: String,
    default: "zh-CN"
  },
  messages: { type: Object }
}, U6 = Object.defineProperty, H6 = Object.defineProperties, j6 = Object.getOwnPropertyDescriptors, Wc = Object.getOwnPropertySymbols, Y6 = Object.prototype.hasOwnProperty, W6 = Object.prototype.propertyIsEnumerable, Kc = (e, n, r) => n in e ? U6(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, K6 = (e, n) => {
  for (var r in n || (n = {})) Y6.call(n, r) && Kc(e, r, n[r]);
  if (Wc)
    for (var r of Wc(n)) W6.call(n, r) && Kc(e, r, n[r]);
  return e;
}, q6 = (e, n) => H6(e, j6(n)), { name: X6, n: G6 } = ee("locale-provider"), zi = _({
  name: X6,
  props: kh,
  setup(e, { slots: n }) {
    const r = E(() => {
      var t;
      return Object.entries((t = e.messages) != null ? t : {}).reduce((a, [i, l]) => (a[i] = q6(K6({}, l), { lang: i }), a), {});
    });
    ey({ t: o });
    function o(t) {
      if (Kr(r.value, e.locale) && Kr(r.value[e.locale], t)) return r.value[e.locale][t];
    }
    return () => Zo(e.tag, { class: G6() }, k(n.default));
  }
});
te(zi);
le(zi, kh);
var pD = zi, ys = zi, $h = {
  label: {},
  value: {},
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  option: Object
}, Ch = /* @__PURE__ */ Symbol("SELECT_BIND_OPTION_KEY");
function Z6() {
  const { length: e, childProviders: n, bindChildren: r } = kn(Ch);
  return {
    length: e,
    options: n,
    bindOptions: r
  };
}
function J6() {
  const { index: e, parentProvider: n, bindParent: r } = wn(Ch);
  return Yn(!!r, "Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: r
  };
}
var { name: Q6, n: x6, classes: _6 } = ee("option"), eO = ["tabindex"];
function nO(e, n) {
  const r = Q("var-checkbox"), o = Q("maybe-v-node"), t = Q("var-hover-overlay"), a = qe("ripple"), i = qe("hover");
  return Ne((g(), S("div", {
    ref: "root",
    class: p(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")])),
    style: q({ color: e.optionSelected ? e.focusColor : void 0 }),
    tabindex: e.disabled ? void 0 : "-1",
    onFocus: n[2] || (n[2] = (l) => e.isFocusing = !0),
    onBlur: n[3] || (n[3] = (l) => e.isFocusing = !1),
    onClick: n[4] || (n[4] = (...l) => e.handleClick && e.handleClick(...l))
  }, [
    N("div", {
      class: p(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
      style: q({ background: e.optionSelected ? e.focusColor : void 0 })
    }, null, 6),
    e.multiple ? (g(), ye(r, {
      key: 0,
      ref: "checkbox",
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (l) => e.optionSelected = l),
      "checked-color": e.focusColor,
      disabled: e.disabled,
      onClick: n[1] || (n[1] = jn(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, [
      "modelValue",
      "checked-color",
      "disabled",
      "onChange"
    ])) : K("v-if", !0),
    F(e.$slots, "default", { selected: e.optionSelected }, () => [N("div", { class: p(e.classes(e.n("text"), e.n("$--ellipsis"))) }, [X(o, { is: e.labelVNode }, null, 8, ["is"])], 2)]),
    X(t, {
      hovering: e.hovering && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 46, eO)), [
    [_n, e.visible],
    [a, { disabled: e.disabled || !e.ripple }],
    [
      i,
      e.handleHovering,
      "desktop"
    ]
  ]);
}
var Sh = _({
  name: Q6,
  directives: {
    Ripple: un,
    Hover: Rn
  },
  components: {
    VarCheckbox: to,
    VarHoverOverlay: Wn,
    MaybeVNode: nt
  },
  props: $h,
  setup(e) {
    const n = y(), r = y(!1), o = y(!1), t = E(() => {
      var z;
      return (z = e.option) != null ? z : {
        label: e.label,
        value: e.value,
        disabled: e.disabled
      };
    }), a = E(() => o.value), i = E(() => e.value), l = E(() => e.disabled), s = E(() => e.ripple), { select: u, bindSelect: d } = J6(), { pattern: c, showMenu: f, filterable: v, multiple: m, focusColor: h, onSelect: w, computeLabel: $, filter: C } = u, { hovering: b, handleHovering: P } = or(), O = E(() => {
      var z;
      return fn(e.label) ? e.label((z = e.option) != null ? z : {
        label: e.label,
        value: e.value,
        disabled: e.disabled
      }, o.value) : e.label;
    }), I = y(!0), j = E(() => !v.value || !c.value ? !0 : C(c.value, t.value)), M = E(() => f.value ? j.value : I.value), A = {
      label: O,
      value: i,
      disabled: l,
      ripple: s,
      selected: a,
      sync: L
    };
    ve([() => e.label, () => e.value], $), ve(() => [f.value, j.value], () => {
      f.value && (I.value = j.value);
    }, { immediate: !0 }), d(A), Ye(() => window, "keydown", T), Ye(() => window, "keyup", D);
    function B() {
      e.disabled || U();
    }
    function T(z) {
      r.value && ((z.key === " " || z.key === "Enter") && Re(z), z.key === "Enter" && n.value.click());
    }
    function D(z) {
      r.value && z.key === " " && (Re(z), n.value.click());
    }
    function U() {
      m.value && (o.value = !o.value), w(A);
    }
    function L(z) {
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
      n: x6,
      classes: _6,
      handleHovering: P,
      handleClick: B,
      handleSelect: U
    };
  }
});
Sh.render = nO;
var Ti = Sh;
te(Ti);
le(Ti, $h);
var mD = Ti, sa = Ti, Oh = {
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
}, { name: rO, n: St } = ee("overlay"), Ei = _({
  name: rO,
  inheritAttrs: !1,
  props: Oh,
  setup(e, { slots: n, attrs: r }) {
    const { zIndex: o } = ot(() => e.show, 3), { onStackTop: t } = du(() => e.show, o), { disabled: a } = Jr();
    rt(() => e.show, () => e.lockScroll), Ye(() => window, "keydown", i);
    function i(d) {
      !t() || d.key !== "Escape" || !e.show || (k(e.onKeyEscape), e.closeOnKeyEscape && (Re(d), k(e["onUpdate:show"], !1)));
    }
    function l() {
      k(e.onClick), k(e["onUpdate:show"], !1);
    }
    function s() {
      return X("div", We({
        class: St(),
        style: { zIndex: o.value - 2 }
      }, r), [X("div", {
        class: St("overlay"),
        style: { zIndex: o.value - 1 },
        onClick: l
      }, null), X("div", {
        class: St("content"),
        style: { zIndex: o.value }
      }, [k(n.default)])]);
    }
    function u() {
      return X(nn, { name: St("--fade") }, { default: () => [e.show && s()] });
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
te(Ei);
le(Ei, Oh);
var hD = Ei, ws = Ei, Ph = {
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
}, { name: oO, n: tO, classes: aO } = ee("pagination"), iO = ["item-mode", "onClick"];
function lO(e, n) {
  const r = Q("var-icon"), o = Q("var-input"), t = Q("var-menu-option"), a = Q("var-menu-select"), i = qe("ripple");
  return g(), S("ul", { class: p(e.n()) }, [
    Ne((g(), S("li", {
      class: p(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [
        e.simple,
        e.n("item--simple"),
        e.formatElevation(e.elevation, 2)
      ])),
      onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
    }, [F(e.$slots, "prev", {}, () => [X(r, { name: "chevron-left" })])], 2)), [[i, { disabled: e.current <= 1 || e.disabled }]]),
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
      onKeydown: n[3] || (n[3] = Lu((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
    }, null, 8, ["modelValue", "disabled"]), N("span", null, [Be(" / " + ie(e.pageCount) + " ", 1), N("div", { class: p(e.n("simple-line")) }, null, 2)])], 2)) : (g(!0), S(Ae, { key: 1 }, Ge(e.pageList, (l, s) => Ne((g(), S("li", {
      key: s,
      "item-mode": e.getMode(l, s),
      class: p(e.classes(e.n("item"), e.formatElevation(e.elevation, 2), [l === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(l, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [l === e.current && e.disabled, e.n("item--disabled--active")])),
      onClick: (u) => e.clickItem(l, s)
    }, [Be(ie(l), 1)], 10, iO)), [[i, { disabled: e.disabled }]])), 128)),
    Ne((g(), S("li", {
      class: p(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [
        e.simple,
        e.n("item--simple"),
        e.formatElevation(e.elevation, 2)
      ])),
      onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
    }, [F(e.$slots, "next", {}, () => [X(r, { name: "chevron-right" })])], 2)), [[i, { disabled: e.current >= e.pageCount || e.disabled }]]),
    e.showSizeChanger ? (g(), ye(a, {
      key: 2,
      modelValue: e.size,
      "onUpdate:modelValue": n[5] || (n[5] = (l) => e.size = l),
      placement: "cover-top",
      disabled: e.disabled
    }, {
      options: fe(() => [(g(!0), S(Ae, null, Ge(e.sizeOption, (l, s) => (g(), ye(t, {
        key: s,
        value: l,
        onClick: e.clickSize
      }, {
        default: fe(() => [Be(ie(l) + ie((e.pt ? e.pt : e.t)("paginationItem")) + " / " + ie((e.pt ? e.pt : e.t)("paginationPage")), 1)]),
        _: 2
      }, 1032, ["value", "onClick"]))), 128))]),
      default: fe(() => [N("li", { class: p(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")])) }, [N("div", { class: p(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])) }, [N("span", null, ie(e.size) + ie((e.pt ? e.pt : e.t)("paginationItem")) + " / " + ie((e.pt ? e.pt : e.t)("paginationPage")), 1), X(r, {
        class: p(e.n("size--open-icon")),
        "var-pagination-cover": "",
        name: "menu-down"
      }, null, 8, ["class"])], 2)], 2)]),
      _: 1
    }, 8, ["modelValue", "disabled"])) : K("v-if", !0),
    e.showQuickJumper && !e.simple ? (g(), S("li", {
      key: 3,
      class: p(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
    }, [Be(ie((e.pt ? e.pt : e.t)("paginationJump")) + " ", 1), X(o, {
      modelValue: e.quickJumperValue,
      "onUpdate:modelValue": n[6] || (n[6] = (l) => e.quickJumperValue = l),
      disabled: e.disabled,
      hint: !1,
      variant: "standard",
      "var-pagination-cover": "",
      onBlur: n[7] || (n[7] = (l) => e.setPage("quick", e.quickJumperValue, l)),
      onKeydown: n[8] || (n[8] = Lu((l) => e.setPage("quick", e.quickJumperValue, l), ["enter"]))
    }, null, 8, ["modelValue", "disabled"])], 2)) : K("v-if", !0),
    e.totalText ? (g(), S("li", {
      key: 4,
      class: p(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
    }, ie(e.totalText), 3)) : K("v-if", !0)
  ], 2);
}
var zh = _({
  name: oO,
  components: {
    VarMenuSelect: Ho,
    VarMenuOption: ao,
    VarIcon: xe,
    VarInput: Ro
  },
  directives: { Ripple: un },
  props: Ph,
  setup(e) {
    const n = y(""), r = y("1"), o = y(!1), t = y(!1), a = y(H(e.current) || 1), i = y(H(e.size) || 10), l = y([]), s = E(() => Math.ceil(e.maxPagerCount / 2)), u = E(() => Math.ceil(H(e.total) / H(i.value))), d = E(() => [i.value * (a.value - 1) + 1, Math.min(i.value * a.value, H(e.total))]), c = E(() => e.showTotal ? e.showTotal(H(e.total), d.value) : ""), { t: f } = ir();
    ve([() => e.current, () => e.size], ([b, P]) => {
      a.value = H(b) || 1, i.value = H(P || 10);
    }), ve([
      a,
      i,
      u
    ], ([b, P, O], [I, j]) => {
      let M = [];
      const { maxPagerCount: A, total: B, onChange: T } = e, D = Math.ceil(H(B) / H(j)), U = O - (A - s.value) - 1;
      if (r.value = `${b}`, O - 2 > A) {
        if (I === void 0 || O !== D) for (let L = 2; L < A + 2; L++) M.push(L);
        if (b <= A && b < U) {
          M = [];
          for (let L = 1; L < A + 1; L++) M.push(L + 1);
          o.value = !0, t.value = !1;
        }
        if (b > A && b < U) {
          M = [];
          for (let L = 1; L < A + 1; L++) M.push(b + L - s.value);
          o.value = b === 2 && A === 1, t.value = !1;
        }
        if (b >= U) {
          M = [];
          for (let L = 1; L < A + 1; L++) M.push(O - (A - L) - 1);
          o.value = !1, t.value = !0;
        }
        M = [
          1,
          "...",
          ...M,
          "...",
          O
        ];
      } else for (let L = 1; L <= O; L++) M.push(L);
      l.value = M, I != null && O > 0 && k(T, b, P), k(e["onUpdate:current"], b), k(e["onUpdate:size"], P);
    }, { immediate: !0 });
    function v(b, P) {
      return En(b) ? !1 : P === 1 ? o.value : t.value;
    }
    function m(b, P) {
      return En(b) ? "basic" : P === 1 ? "head" : "tail";
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
        En(b) && (a.value = b);
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
      t: ln,
      n: tO,
      classes: aO,
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
zh.render = lO;
var Ii = zh;
te(Ii);
le(Ii, Ph);
var gD = Ii, ks = Ii, Th = {
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
}, { name: sO, n: uO, classes: dO } = ee("paper");
function cO(e, n) {
  const r = qe("ripple");
  return Ne((g(), S("div", {
    class: p(e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 2), [e.onClick, e.n("--cursor")], [e.round, e.n("--round")], [e.inline, e.n("$--inline-flex")])),
    style: q({
      width: e.toSizeUnit(e.width),
      height: e.toSizeUnit(e.height),
      "border-radius": e.toSizeUnit(e.radius)
    }),
    onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
  }, [F(e.$slots, "default")], 6)), [[r, { disabled: !e.ripple }]]);
}
var Eh = _({
  name: sO,
  directives: { Ripple: un },
  props: Th,
  setup(e) {
    function n(r) {
      k(e.onClick, r);
    }
    return {
      n: uO,
      classes: dO,
      formatElevation: vn,
      toSizeUnit: ze,
      handleClick: n
    };
  }
});
Eh.render = cO;
var Bi = Eh;
te(Bi);
le(Bi, Th);
var bD = Bi, $s = Bi, fO = Object.defineProperty, qc = Object.getOwnPropertySymbols, vO = Object.prototype.hasOwnProperty, pO = Object.prototype.propertyIsEnumerable, Xc = (e, n, r) => n in e ? fO(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, mO = (e, n) => {
  for (var r in n || (n = {})) vO.call(n, r) && Xc(e, r, n[r]);
  if (qc)
    for (var r of qc(n)) pO.call(n, r) && Xc(e, r, n[r]);
  return e;
}, Ih = mO({
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
}, De(bo, [
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
])), { name: hO, n: gO, classes: bO } = ee("picker"), Gc = 300, yO = 15, Zc = 200, wO = 1e3, Jc = 0, kO = [
  "onTouchstartPassive",
  "onTouchmove",
  "onTouchend"
], $O = ["onTransitionend"], CO = ["onClick"];
function SO(e, n) {
  const r = Q("var-button");
  return g(), ye(po(e.dynamic ? e.n("$-popup") : e.Transition), We(e.dynamic ? {
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
    default: fe(() => [N("div", We({ class: e.n() }, e.$attrs), [e.toolbar ? (g(), S("div", {
      key: 0,
      class: p(e.n("toolbar"))
    }, [
      F(e.$slots, "cancel", {}, () => [X(r, {
        class: p(e.n("cancel-button")),
        "var-picker-cover": "",
        text: "",
        "text-color": e.cancelButtonTextColor,
        onClick: e.cancel
      }, {
        default: fe(() => {
          var o;
          return [Be(ie((o = e.cancelButtonText) != null ? o : (e.pt ? e.pt : e.t)("pickerCancelButtonText")), 1)];
        }),
        _: 1
      }, 8, [
        "class",
        "text-color",
        "onClick"
      ])]),
      F(e.$slots, "title", {}, () => {
        var o;
        return [N("div", { class: p(e.n("title")) }, ie((o = e.title) != null ? o : (e.pt ? e.pt : e.t)("pickerTitle")), 3)];
      }),
      F(e.$slots, "confirm", {}, () => [X(r, {
        class: p(e.n("confirm-button")),
        text: "",
        "var-picker-cover": "",
        "text-color": e.confirmButtonTextColor,
        onClick: e.confirm
      }, {
        default: fe(() => {
          var o;
          return [Be(ie((o = e.confirmButtonText) != null ? o : (e.pt ? e.pt : e.t)("pickerConfirmButtonText")), 1)];
        }),
        _: 1
      }, 8, [
        "class",
        "text-color",
        "onClick"
      ])])
    ], 2)) : K("v-if", !0), N("div", {
      class: p(e.n("columns")),
      style: q({ height: `${e.columnHeight}px` })
    }, [
      (g(!0), S(Ae, null, Ge(e.scrollColumns, (o) => (g(), S("div", {
        key: o.id,
        class: p(e.n("column")),
        onTouchstartPassive: (t) => e.handleTouchstart(t, o),
        onTouchmove: jn((t) => e.handleTouchmove(t, o), ["prevent"]),
        onTouchend: (t) => e.handleTouchend(o)
      }, [N("div", {
        ref_for: !0,
        ref: (t) => e.setScrollEl(t, o),
        class: p(e.n("scroller")),
        style: q({
          transform: `translateY(${o.translate}px)`,
          transitionDuration: `${o.duration}ms`,
          transitionProperty: o.duration ? "transform" : "none"
        }),
        onTransitionend: (t) => e.handleTransitionend(o)
      }, [(g(!0), S(Ae, null, Ge(o.column, (t, a) => (g(), S("div", {
        key: e.getValue(t),
        class: p(e.classes(e.n("option"), t.className)),
        style: q({ height: `${e.optionHeight}px` }),
        onClick: (i) => e.handleClick(o, a)
      }, [N("div", { class: p(e.classes(e.n("text"), t.textClassName)) }, ie(t[e.getOptionKey("text")]), 3)], 14, CO))), 128))], 46, $O)], 42, kO))), 128)),
      N("div", {
        class: p(e.n("picked")),
        style: q({
          top: `${e.center}px`,
          height: `${e.optionHeight}px`
        })
      }, null, 6),
      N("div", {
        class: p(e.n("mask")),
        style: q({ backgroundSize: `100% ${(e.columnHeight - e.optionHeight) / 2}px` })
      }, null, 6)
    ], 6)], 16)]),
    _: 3
  }, 16);
}
var Bh = _({
  name: hO,
  components: {
    VarButton: Nn,
    VarPopup: Dr
  },
  inheritAttrs: !1,
  props: Ih,
  setup(e) {
    const n = Tn(e, "modelValue"), r = y([]), o = E(() => H(e.columnsCount)), t = E(() => on(e.optionHeight)), a = E(() => on(e.optionCount)), i = E(() => a.value * t.value / 2 - t.value / 2), l = E(() => a.value * t.value), { prevY: s, moveY: u, dragging: d, startTouch: c, moveTouch: f, endTouch: v } = ho(), { t: m } = ir();
    let h = [];
    j(), ve(() => e.columns, j, { deep: !0 }), ve(() => n.value, j);
    function w(Y) {
      return {
        text: e.textKey,
        value: e.valueKey,
        children: e.childrenKey
      }[Y];
    }
    function $(Y) {
      var ne;
      return (ne = Y[w("value")]) != null ? ne : Y[w("text")];
    }
    function C(Y) {
      h = [...Y];
    }
    function b(Y) {
      return (e.columnsCount != null ? Y.slice(0, o.value) : Y).map((ne, Se) => {
        const Ve = {
          id: Jc++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: i.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: ne,
          scrollEl: null,
          scrolling: !1
        }, Ze = n.value[Se], Le = Ve.column.findIndex((bn) => Ze === $(bn));
        return Ve.index = Le === -1 ? 0 : Le, L(Ve), Ve;
      });
    }
    function P(Y) {
      const ne = [];
      return O(ne, Y), ne;
    }
    function O(Y, ne, Se = !0, Ve = 1) {
      var Ze;
      if (ne.length && (e.columnsCount == null || Ve <= o.value)) {
        const Le = {
          id: Jc++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: i.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: ne,
          scrollEl: null,
          scrolling: !1
        };
        if (Y.push(Le), Se) {
          const bn = n.value[Y.length - 1], en = ne.findIndex((pe) => bn === $(pe));
          Le.index = en === -1 ? 0 : en;
        }
        L(Le), O(Y, (Ze = Le.column[Le.index][w("children")]) != null ? Ze : [], Se, Ve + 1);
      }
    }
    function I(Y) {
      var ne;
      r.value.splice(r.value.indexOf(Y) + 1), O(r.value, (ne = Y.column[Y.index][w("children")]) != null ? ne : [], !1, r.value.length + 1);
    }
    function j() {
      r.value = e.cascade ? P(e.columns) : b(e.columns);
      const { indexes: Y } = U();
      C(Y);
    }
    function M(Y, ne) {
      ne.scrollEl = Y;
    }
    function A(Y) {
      k(e["onUpdate:show"], Y);
    }
    function B(Y) {
      const ne = i.value - Y.column.length * t.value, Se = t.value + i.value;
      Y.translate = Sn(Y.translate, ne, Se);
    }
    function T(Y, ne) {
      return Ef(Math.round((i.value - ne) / t.value), Y.column);
    }
    function D(Y) {
      return Y.translate = i.value - Y.index * t.value, Y.translate;
    }
    function U() {
      const Y = [], ne = [], Se = [];
      return r.value.forEach(({ column: Ve, index: Ze }) => {
        const Le = Ve[Ze];
        Y.push($(Le)), ne.push(Ze), Se.push(Le);
      }), {
        values: Y,
        indexes: ne,
        options: Se
      };
    }
    function L(Y, ne = 0) {
      D(Y), Y.duration = ne;
    }
    function z(Y, ne, Se) {
      Y.translate += Math.abs(ne / Se) / 3e-3 * (ne < 0 ? -1 : 1);
    }
    function V(Y, ne) {
      d.value || (Y.index = ne, L(Y, Zc));
    }
    function ae(Y, ne) {
      ne.touching = !0, ne.translate = sl(ne.scrollEl), c(Y);
    }
    function Z(Y, ne) {
      if (!ne.touching) return;
      f(Y), ne.scrolling = !1, ne.duration = 0, ne.prevY = s.value, ne.translate += u.value, B(ne);
      const Se = performance.now();
      Se - ne.momentumTime > Gc && (ne.momentumTime = Se, ne.momentumPrevY = ne.translate);
    }
    function re(Y) {
      v(), Y.touching = !1, Y.prevY = 0;
      const ne = Y.translate - Y.momentumPrevY, Se = performance.now() - Y.momentumTime, Ve = Math.abs(ne) >= yO && Se <= Gc, Ze = Y.translate;
      Ve && z(Y, ne, Se), Y.index = T(Y, Y.translate), L(Y, Ve ? wO : Zc), Y.scrolling = Y.translate !== Ze, Y.scrolling || W(Y);
    }
    function Ce(Y) {
      Y.scrolling = !1, W(Y);
    }
    function oe() {
      const { indexes: Y } = U();
      return Y.every((ne, Se) => ne === h[Se]);
    }
    function W(Y) {
      const { onChange: ne, cascade: Se } = e;
      if (oe()) return;
      Se && I(Y);
      const Ve = r.value.some((pe) => pe.scrolling), Ze = r.value.some((pe) => pe.touching);
      if (Ve || Ze) return;
      const { values: Le, indexes: bn, options: en } = U();
      C(bn), k(ne, Le, bn, en), n.value = Le;
    }
    function G() {
      if (e.cascade) {
        const Y = r.value.find((ne) => ne.scrolling);
        Y && (Y.index = T(Y, sl(Y.scrollEl)), Y.scrolling = !1, L(Y), I(Y));
      } else r.value.forEach((Y) => {
        Y.index = T(Y, sl(Y.scrollEl)), L(Y);
      });
    }
    function se() {
      G();
      const { values: Y, indexes: ne, options: Se } = U();
      C(ne), k(e.onConfirm, Y, ne, Se);
    }
    function me() {
      G();
      const { values: Y, indexes: ne, options: Se } = U();
      C(ne), k(e.onCancel, Y, ne, Se);
    }
    return {
      optionHeight: t,
      optionCount: a,
      scrollColumns: r,
      columnHeight: l,
      center: i,
      Transition: nn,
      pt: m,
      t: ln,
      n: gO,
      classes: bO,
      setScrollEl: M,
      getOptionKey: w,
      getValue: $,
      handlePopupUpdateShow: A,
      handleTouchstart: ae,
      handleTouchmove: Z,
      handleTouchend: re,
      handleTransitionend: Ce,
      confirm: se,
      cancel: me,
      handleClick: V
    };
  }
});
Bh.render = SO;
var ct = Bh, oo;
function wo(e) {
  return new Promise((n) => {
    wo.close();
    const r = rn(He(e) ? { columns: e } : e);
    r.dynamic = !0, r.teleport = "body", oo = r;
    function o() {
      oo === r && (oo = null);
    }
    const { unmountInstance: t } = go(ct, r, {
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
wo.close = function() {
  if (oo == null) return;
  const e = oo;
  oo = null, Fe().then(() => {
    e.show = !1;
  });
};
wo.Component = ct;
te(ct);
te(ct, wo);
le(wo, Ih);
var yD = ct, Cs = wo, Dh = {
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
}, _r = 100, Ot = 0, fr = 20, Qc = 2 * Math.PI * fr, { name: OO, n: PO, classes: zO } = ee("progress"), TO = ["aria-valuenow"], EO = ["viewBox"], IO = { key: 0 }, BO = ["id"], DO = ["offset", "stop-color"], MO = [
  "d",
  "stroke-width",
  "stroke-dasharray"
], AO = [
  "d",
  "stroke-width",
  "stroke-dasharray",
  "stroke-dashoffset"
];
function NO(e, n) {
  return g(), S("div", {
    class: p(e.n()),
    role: "progressbar",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": e.indeterminate ? void 0 : e.mode === "linear" ? e.linearProps.value : e.circleProps.value
  }, [e.mode === "linear" ? (g(), S("div", {
    key: 0,
    class: p(e.n("linear"))
  }, [N("div", {
    class: p(e.classes(e.n("linear-block"), [e.track, e.n("linear-background")])),
    style: q({
      height: e.toSizeUnit(e.lineWidth),
      background: e.trackColor
    })
  }, [e.indeterminate ? (g(), S("div", {
    key: 0,
    class: p(e.n("linear-indeterminate"))
  }, [N("div", {
    class: p(e.classes(e.n(`linear--${e.type}`))),
    style: q({ background: e.progressColor })
  }, null, 6), N("div", {
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
  }, [F(e.$slots, "default", {}, () => [Be(ie(e.linearProps.roundValue), 1)])], 2)) : K("v-if", !0)], 2)) : K("v-if", !0), e.mode === "circle" ? (g(), S("div", {
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
    e.isPlainObject(e.color) ? (g(), S("defs", IO, [N("linearGradient", {
      id: e.id,
      x1: "100%",
      y1: "0%",
      x2: "0%",
      y2: "0%"
    }, [(g(!0), S(Ae, null, Ge(e.linearGradientProgress, (r, o) => (g(), S("stop", {
      key: o,
      offset: r,
      "stop-color": e.color[r]
    }, null, 8, DO))), 128))], 8, BO)])) : K("v-if", !0),
    e.track ? (g(), S("path", {
      key: 1,
      class: p(e.n("circle-background")),
      d: e.circleProps.path,
      fill: "transparent",
      "stroke-width": e.circleProps.strokeWidth,
      "stroke-dasharray": e.CIRCUMFERENCE,
      style: q({ stroke: e.trackColor })
    }, null, 14, MO)) : K("v-if", !0),
    N("path", {
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
    }, null, 14, AO)
  ], 10, EO)), e.label ? (g(), S("div", {
    key: 0,
    class: p(e.classes(e.n("circle-label"), e.labelClass))
  }, [F(e.$slots, "default", {}, () => [Be(ie(e.circleProps.roundValue), 1)])], 2)) : K("v-if", !0)], 6)) : K("v-if", !0)], 10, TO);
}
var Mh = _({
  name: OO,
  props: Dh,
  setup(e) {
    const n = _f();
    return {
      id: n,
      linearProps: E(() => {
        const r = H(e.value), o = Sn(r, Ot, _r), t = Sn(Math.round(r), Ot, _r);
        return {
          width: `${o}%`,
          roundValue: `${t}%`,
          value: o
        };
      }),
      CIRCUMFERENCE: Qc,
      RADIUS: fr,
      circleProps: E(() => {
        const { size: r, lineWidth: o, value: t } = e, a = fr / (1 - on(o) / on(r)) * 2, i = `0 0 ${a} ${a}`, l = Sn(Math.round(H(t)), Ot, _r), s = `${(_r - l) / _r * Qc}`, u = on(o) / on(r) * a, d = 0, c = -fr, f = 0, v = -2 * fr, m = `M ${a / 2} ${a / 2} m ${d} ${c} a ${fr} ${fr} 
        0 1 1 ${f} ${-v} a ${fr} ${fr} 0 1 1 ${-f} ${v}`;
        return {
          strokeWidth: u,
          viewBox: i,
          strokeOffset: s,
          roundValue: `${l}%`,
          path: m,
          value: Sn(H(t), Ot, _r)
        };
      }),
      progressColor: E(() => gn(e.color) ? `url(#${n.value})` : e.color),
      linearGradientProgress: E(() => Object.keys(e.color).sort((r, o) => parseFloat(r) - parseFloat(o))),
      n: PO,
      classes: zO,
      toSizeUnit: ze,
      isPlainObject: gn
    };
  }
});
Mh.render = NO;
var Di = Mh;
te(Di);
le(Di, Dh);
var wD = Di, Ss = Di, Ah = {
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
}, VO = (e, n, r) => new Promise((o, t) => {
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
}), { name: RO, n: xc, classes: LO } = ee("pull-refresh"), _c = 150;
function FO(e, n) {
  const r = Q("var-icon");
  return g(), S("div", {
    ref: "freshNode",
    class: p(e.n()),
    onTouchstart: n[0] || (n[0] = (...o) => e.handleTouchstart && e.handleTouchstart(...o)),
    onTouchend: n[1] || (n[1] = (...o) => e.handleTouchend && e.handleTouchend(...o)),
    onTouchcancel: n[2] || (n[2] = (...o) => e.handleTouchend && e.handleTouchend(...o))
  }, [N("div", {
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
  ])], 6), F(e.$slots, "default")], 34);
}
var Nh = _({
  name: RO,
  components: { VarIcon: xe },
  props: Ah,
  setup(e) {
    const n = y(0), r = y(null), o = y(null), t = y(0), a = y("-125%"), i = y("arrow-down"), l = y("default"), s = y(!1), u = E(() => Math.abs(2 * n.value)), d = E(() => l.value === "success"), c = E(() => l.value !== "loading" && l.value !== "success" && !e.disabled), f = E(() => ({
      transform: `translate3d(0px, ${an(a.value) ? a.value : `${a.value}px`}, 0px) translate(-50%, 0)`,
      transition: s.value ? `transform ${e.animationDuration}ms` : void 0,
      background: d.value ? e.successBgColor : e.bgColor,
      color: d.value ? e.successColor : e.color
    })), { startTouch: v, moveTouch: m, endTouch: h, isReachTop: w } = ho();
    let $, C;
    ve(() => e.modelValue, (B) => {
      B === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
        a.value = n.value, A();
      }, H(e.successDuration)));
    }), yn(M), Ye(r, "touchmove", I);
    function b(B) {
      if (i.value !== B)
        return i.value = B, new Promise((T) => {
          window.setTimeout(T, _c);
        });
    }
    function P(B) {
      ("classList" in $ ? $ : document.body).classList[B](`${xc()}--lock`);
    }
    function O(B) {
      if (v(B), n.value === 0) {
        const { width: T } = tn(o.value);
        n.value = -(T + T * 0.25);
      }
      C = Mr(B.target);
    }
    function I(B) {
      if (m(B), !c.value || !C || C !== $ && Br(C) > 0 || Br($) > 0) return;
      w($) && Re(B), l.value !== "pulling" && (l.value = "pulling", t.value = B.touches[0].clientY), w($) && En(a.value) && a.value > n.value && P("add");
      const T = (B.touches[0].clientY - t.value) / 2 + n.value;
      a.value = T >= u.value ? u.value : T, b(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function j() {
      return VO(this, null, function* () {
        h(), c.value && (s.value = !0, H(a.value) >= u.value * 0.2 ? (yield b("refresh"), l.value = "loading", a.value = u.value * 0.3, k(e["onUpdate:modelValue"], !0), Fe(() => {
          k(e.onRefresh);
        }), P("remove")) : (l.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          s.value = !1, P("remove");
        }, H(e.animationDuration))), C = null);
      });
    }
    function M() {
      $ = e.target ? Sv(e.target, "PullRefresh") : Mr(r.value);
    }
    function A() {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, H(e.animationDuration));
    }
    return {
      ICON_TRANSITION: _c,
      refreshStatus: l,
      freshNode: r,
      controlNode: o,
      iconName: i,
      controlStyle: f,
      isSuccess: d,
      n: xc,
      classes: LO,
      handleTouchstart: O,
      handleTouchmove: I,
      handleTouchend: j
    };
  }
});
Nh.render = FO;
var Mi = Nh;
te(Mi);
le(Mi, Ah);
var kD = Mi, Os = Mi, Vh = {
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
}, Rh = /* @__PURE__ */ Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function UO() {
  const { bindChildren: e, childProviders: n, length: r } = kn(Rh);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function HO() {
  const { bindParent: e, parentProvider: n, index: r } = wn(Rh);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var { name: jO, n: YO, classes: WO } = ee("radio"), KO = [
  "aria-checked",
  "aria-disabled",
  "tabindex"
];
function qO(e, n) {
  const r = Q("var-icon"), o = Q("var-hover-overlay"), t = Q("var-form-details"), a = qe("ripple"), i = qe("hover");
  return g(), S("div", { class: p(e.n("wrap")) }, [N("div", We({
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
  }), [Ne((g(), S("div", {
    class: p(e.classes(e.n("action"), [
      e.checked,
      e.n("--checked"),
      e.n("--unchecked")
    ], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    style: q({ color: e.checked ? e.checkedColor : e.uncheckedColor })
  }, [e.checked ? F(e.$slots, "checked-icon", { key: 0 }, () => [X(r, {
    class: p(e.n("icon")),
    "var-radio-cover": "",
    name: "radio-marked",
    size: e.iconSize
  }, null, 8, ["class", "size"])]) : F(e.$slots, "unchecked-icon", { key: 1 }, () => [X(r, {
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
  }, [F(e.$slots, "default", { checked: e.checked })], 2)) : K("v-if", !0)], 16, KO), X(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var Lh = _({
  name: jO,
  directives: {
    Ripple: un,
    Hover: Rn
  },
  components: {
    VarIcon: xe,
    VarFormDetails: An,
    VarHoverOverlay: Wn
  },
  inheritAttrs: !1,
  props: Vh,
  setup(e) {
    const n = y(), r = y(!1), o = Tn(e, "modelValue"), t = E(() => o.value === e.checkedValue), { radioGroup: a, bindRadioGroup: i } = HO(), { hovering: l, handleHovering: s } = or(), { form: u, bindForm: d } = Xn(), c = E(() => {
      const T = u?.disabled.value || e.disabled, D = t.value, U = a?.hasChecked.value;
      if (e.tabindex != null) return e.tabindex;
      if (!T)
        return a && U && !D ? "-1" : "0";
    }), { errorMessage: f, validateWithTrigger: v, validate: m, resetValidation: h } = qn(), w = {
      sync: j,
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
      (D === "Enter" || D === " ") && Re(T), D === "Enter" && n.value.click();
    }
    function C(T) {
      r.value && T.key === " " && (Re(T), n.value.click());
    }
    function b(T) {
      Fe(() => {
        const { validateTrigger: D, rules: U, modelValue: L } = e;
        v(D, T, U, L);
      });
    }
    function P(T) {
      const { checkedValue: D, onChange: U } = e;
      a && o.value === D || (o.value = T, k(U, o.value), a?.onToggle(D), b("onChange"));
    }
    function O(T) {
      const { disabled: D, readonly: U, uncheckedValue: L, checkedValue: z, onClick: V } = e;
      u?.disabled.value || D || (k(V, T), !(u?.readonly.value || U) && P(t.value ? L : z));
    }
    function I() {
      n.value.focus();
    }
    function j(T) {
      const { checkedValue: D, uncheckedValue: U } = e, L = T === D;
      return o.value = L ? D : U, L;
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
      n: YO,
      classes: WO,
      handleClick: O,
      handleTextClick: I,
      toggle: B,
      reset: M,
      validate: A,
      resetValidation: h
    };
  }
});
Lh.render = qO;
var Ai = Lh;
te(Ai);
le(Ai, Vh);
var $D = Ai, ua = Ai, Fh = {
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
}, { name: XO, n: GO, classes: ZO } = ee("radio-group"), JO = ["aria-label"];
function QO(e, n) {
  const r = Q("maybe-v-node"), o = Q("var-radio"), t = Q("var-form-details");
  return g(), S("div", { class: p(e.n("wrap")) }, [N("div", {
    "aria-label": e.ariaLabel,
    role: "radiogroup",
    class: p(e.classes(e.n(), e.n(`--${e.direction}`)))
  }, [e.options.length ? (g(!0), S(Ae, { key: 0 }, Ge(e.options, (a) => (g(), ye(o, {
    key: a[e.valueKey],
    "checked-value": a[e.valueKey],
    disabled: a.disabled
  }, {
    default: fe(({ checked: i }) => [X(r, { is: e.isFunction(a[e.labelKey]) ? a[e.labelKey](a, i) : a[e.labelKey] }, null, 8, ["is"])]),
    _: 2
  }, 1032, ["checked-value", "disabled"]))), 128)) : K("v-if", !0), F(e.$slots, "default")], 10, JO), X(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var Uh = _({
  name: XO,
  components: {
    VarFormDetails: An,
    VarRadio: ua,
    MaybeVNode: nt
  },
  props: Fh,
  setup(e) {
    const { length: n, radios: r, bindRadios: o } = UO(), { bindForm: t } = Xn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = qn(), u = E(() => a.value), d = y(!1), c = {
      onToggle: w,
      validate: $,
      reset: C,
      resetValidation: s,
      hasChecked: E(() => d.value),
      errorMessage: u
    };
    ve(() => e.modelValue, h), ve(() => n.value, h), k(t, c), o(c), Ye(() => window, "keydown", f);
    function f(b) {
      const P = r.findIndex(({ isFocusing: O }) => O.value);
      if (P !== -1 && r.some(({ moveable: O }, I) => I === P ? !1 : O())) {
        if ([
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight"
        ].includes(b.key) && Re(b), b.key === "ArrowUp" || b.key === "ArrowLeft") {
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
      Fe(() => {
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
      n: GO,
      classes: ZO,
      reset: C,
      validate: $,
      resetValidation: s,
      isFunction: fn
    };
  }
});
Uh.render = QO;
var Ni = Uh;
te(Ni);
le(Ni, Fh);
var CD = Ni, Ps = Ni, Hh = {
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
  namespace: De(sn, "namespace"),
  emptyIconNamespace: De(sn, "namespace"),
  halfIconNamespace: De(sn, "namespace"),
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
}, { name: xO, n: Co } = ee("rate"), _O = ["onClick"];
function eP(e, n) {
  const r = Q("var-icon"), o = Q("var-hover-overlay"), t = Q("var-form-details"), a = qe("ripple"), i = qe("hover");
  return g(), S("div", { class: p(e.n("wrap")) }, [N("div", { class: p(e.n()) }, [(g(!0), S(Ae, null, Ge(e.toNumber(e.count), (l) => Ne((g(), S("div", {
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
  ]), X(o, { hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled }, null, 8, ["hovering"])], 14, _O)), [[a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }], [
    i,
    e.createHoverHandler(l),
    "desktop"
  ]])), 128))], 2), X(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var jh = _({
  name: xO,
  components: {
    VarIcon: xe,
    VarFormDetails: An,
    VarHoverOverlay: Wn
  },
  directives: {
    Ripple: un,
    Hover: Rn
  },
  props: Hh,
  setup(e) {
    const n = y(-1), { form: r, bindForm: o } = Xn(), { errorMessage: t, validateWithTrigger: a, validate: i, resetValidation: l } = qn(), { hovering: s } = or();
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
        marginRight: b !== H(P) ? ze(O) : 0
      };
    }
    function c(b) {
      const { name: P, color: O } = f(b);
      return {
        [Co("content")]: !0,
        [Co("--disabled")]: r?.disabled.value || e.disabled,
        [Co("--error")]: t.value,
        [Co("--primary")]: P !== e.emptyIcon && !O
      };
    }
    function f(b) {
      const { modelValue: P, disabled: O, disabledColor: I, color: j, half: M, emptyColor: A, icon: B, halfIcon: T, emptyIcon: D, namespace: U, halfIconNamespace: L, emptyIconNamespace: z } = e;
      let V = j;
      return (O || r?.disabled.value) && (V = I), b <= P ? {
        color: V,
        name: B,
        namespace: U
      } : M && b <= P + 0.5 ? {
        color: V,
        name: T,
        namespace: L
      } : {
        color: O || r?.disabled.value ? I : A,
        name: D,
        namespace: z
      };
    }
    function v(b, P) {
      const { half: O, clearable: I } = e, { offsetWidth: j } = P.target;
      O && P.offsetX <= Math.floor(j / 2) && (b -= 0.5), u === b && I && (b = 0), u !== b && (k(e["onUpdate:modelValue"], b), k(e.onChange, b)), u = b;
    }
    function m() {
      return i(e.rules, e.modelValue);
    }
    function h() {
      Fe(() => a(["onChange"], "onChange", e.rules, e.modelValue));
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
      toSizeUnit: ze,
      toNumber: H,
      n: Co
    };
  }
});
jh.render = eP;
var Vi = jh;
te(Vi);
le(Vi, Hh);
var SD = Vi, zs = Vi, Yh = {
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
}, nP = { viewBox: "-4 -4 32 32" };
function rP(e, n) {
  return g(), S("svg", nP, [...n[0] || (n[0] = [N("path", {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  }, null, -1)])]);
}
var Wh = _({});
Wh.render = rP;
var oP = Wh, tP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
};
function aP(e, n) {
  return g(), S("svg", tP, [...n[0] || (n[0] = [N("path", { d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" }, null, -1)])]);
}
var Kh = _({});
Kh.render = aP;
var iP = Kh, lP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
};
function sP(e, n) {
  return g(), S("svg", lP, [...n[0] || (n[0] = [N("path", { d: "M11,9H13V7H11M11,20H13V11H11V20Z" }, null, -1)])]);
}
var qh = _({});
qh.render = sP;
var uP = qh, dP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
};
function cP(e, n) {
  return g(), S("svg", dP, [...n[0] || (n[0] = [N("path", { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" }, null, -1)])]);
}
var Xh = _({});
Xh.render = cP;
var fP = Xh, { n: vP, classes: pP } = ee("result");
function mP(e, n) {
  return g(), S(Ae, null, [
    N("span", { class: p(e.n("success-cover-left")) }, null, 2),
    N("span", {
      class: p(e.classes(e.n("success-line"), e.n("success-line-tip"))),
      style: q({
        animationDuration: e.animation ? "760ms" : "0ms",
        borderRadius: `calc(${e.borderSize} * 0.625)`
      })
    }, null, 6),
    N("span", {
      class: p(e.classes(e.n("success-line"), e.n("success-line-long"))),
      style: q({
        animationDuration: e.animation ? "770ms" : "0ms",
        borderRadius: `calc(${e.borderSize} * 0.625)`
      })
    }, null, 6),
    N("span", {
      ref: "circle",
      class: p(e.n("success-circle")),
      style: q({
        left: `-${e.borderSize}`,
        top: `-${e.borderSize}`,
        borderWidth: e.borderSize
      })
    }, null, 6),
    N("span", { class: p(e.n("success-line-fix")) }, null, 2),
    N("span", {
      class: p(e.n("success-cover-right")),
      style: q({ animationDuration: e.animation ? "4250ms" : "0ms" })
    }, null, 6)
  ], 64);
}
var Gh = _({
  props: {
    animation: { type: Boolean },
    borderSize: { type: String }
  },
  setup() {
    return {
      n: vP,
      classes: pP
    };
  }
});
Gh.render = mP;
var hP = Gh, gP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
};
function bP(e, n) {
  return g(), S("svg", gP, [...n[0] || (n[0] = [N("path", { d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11" }, null, -1)])]);
}
var Zh = _({});
Zh.render = bP;
var yP = Zh, { name: wP, n: kP, classes: $P } = ee("result");
function CP(e, n) {
  return g(), S("div", { class: p(e.classes(e.n(), e.n("$--box"))) }, [
    F(e.$slots, "image", {}, () => [e.type ? (g(), S("div", {
      key: 0,
      class: p(e.n("image-container"))
    }, [N("div", {
      class: p(e.classes(e.n("image"), e.n(e.type))),
      style: q({
        width: e.circleSize,
        height: e.circleSize,
        borderWidth: e.borderSize
      })
    }, [(g(), ye(po(e.type), {
      "border-size": e.borderSize,
      animation: e.animation
    }, null, 8, ["border-size", "animation"]))], 6)], 2)) : K("v-if", !0)]),
    F(e.$slots, "title", {}, () => [e.title ? (g(), S("div", {
      key: 0,
      class: p(e.n("title"))
    }, ie(e.title), 3)) : K("v-if", !0)]),
    F(e.$slots, "description", {}, () => [e.description ? (g(), S("div", {
      key: 0,
      class: p(e.n("description"))
    }, ie(e.description), 3)) : K("v-if", !0)]),
    e.$slots.footer ? (g(), S("div", {
      key: 0,
      class: p(e.n("footer"))
    }, [F(e.$slots, "footer")], 2)) : K("v-if", !0)
  ], 2);
}
var Jh = _({
  name: wP,
  components: {
    Info: uP,
    Success: hP,
    Warning: yP,
    Error: iP,
    Question: fP,
    Empty: oP
  },
  props: Yh,
  setup(e) {
    return {
      circleSize: E(() => `calc(${e.imageSize ? ze(e.imageSize) : "var(--result-image-size)"} * 0.9)`),
      borderSize: E(() => `calc(${e.imageSize ? ze(e.imageSize) : "var(--result-image-size)"} * 0.05)`),
      n: kP,
      classes: $P
    };
  }
});
Jh.render = CP;
var Ri = Jh;
te(Ri);
le(Ri, Yh);
var OD = Ri, Ts = Ri, Qh = {
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
}, { name: SP, n: OP, classes: PP } = ee("row");
function zP(e, n) {
  return g(), S("div", {
    class: p(e.classes(e.n(), e.n("$--box"))),
    style: q({
      justifyContent: e.padStartFlex(e.justify),
      alignItems: e.padStartFlex(e.align),
      margin: `${-e.average[0]}px ${-e.average[1]}px`
    }),
    onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
  }, [F(e.$slots, "default")], 6);
}
var xh = _({
  name: SP,
  props: Qh,
  setup(e) {
    const n = E(() => He(e.gutter) ? e.gutter.map((t) => on(t) / 2) : [0, on(e.gutter) / 2]), { bindCols: r } = cS();
    r({ average: n });
    function o(t) {
      k(e.onClick, t);
    }
    return {
      average: n,
      n: OP,
      classes: PP,
      handleClick: o,
      padStartFlex: Jt
    };
  }
});
xh.render = zP;
var Li = xh;
te(Li);
le(Li, Qh);
var PD = Li, Es = Li, TP = Object.defineProperty, ef = Object.getOwnPropertySymbols, EP = Object.prototype.hasOwnProperty, IP = Object.prototype.propertyIsEnumerable, nf = (e, n, r) => n in e ? TP(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, BP = (e, n) => {
  for (var r in n || (n = {})) EP.call(n, r) && nf(e, r, n[r]);
  if (ef)
    for (var r of ef(n)) IP.call(n, r) && nf(e, r, n[r]);
  return e;
}, _h = BP({
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
}, De(Sa, [
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
])), { n: DP, classes: MP } = ee("select");
function AP(e, n) {
  return Ne((g(), S("input", {
    ref: "filterInputRef",
    "onUpdate:modelValue": n[0] || (n[0] = (r) => e.value = r),
    type: "text",
    class: p(e.classes(e.n("filter"), [e.multiple, e.n("filter--multiple")]))
  }, null, 2)), [[Sf, e.value]]);
}
var eg = _({
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
      n: DP,
      classes: MP,
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
eg.render = AP;
var NP = eg, rf = (e, n, r) => new Promise((o, t) => {
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
function VP(e, n, r) {
  const o = y(!1);
  let t = null;
  ve(() => n.value, () => rf(null, null, function* () {
    l(), n.value && (yield Fe(), i(), a());
  }), { immediate: !0 }), mo(l);
  function a() {
    var s;
    const u = e.value, d = u?.querySelectorAll(".var-option");
    o.value = d?.length ? Array.from(d).every((c) => er(c).display === "none") : !0, (s = r?.onAfterUpdate) == null || s.call(r);
  }
  function i() {
    e.value && (t = new MutationObserver(() => rf(null, null, function* () {
      yield Fe(), a();
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
var RP = 11;
function LP(e) {
  const n = Qg(), r = y(0), o = E(() => ({ minWidth: `${Math.max(r.value, RP)}px` })), t = () => {
    var a, i;
    r.value = (i = (a = n.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? i : 0;
  };
  return ve(() => xs(e), () => {
    Fe(t);
  }), {
    calculatorRef: n,
    filterStyle: o,
    resize: t
  };
}
var FP = Object.defineProperty, UP = Object.defineProperties, HP = Object.getOwnPropertyDescriptors, of = Object.getOwnPropertySymbols, jP = Object.prototype.hasOwnProperty, YP = Object.prototype.propertyIsEnumerable, tf = (e, n, r) => n in e ? FP(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, WP = (e, n) => {
  for (var r in n || (n = {})) jP.call(n, r) && tf(e, r, n[r]);
  if (of)
    for (var r of of(n)) YP.call(n, r) && tf(e, r, n[r]);
  return e;
}, KP = (e, n) => UP(e, HP(n)), qP = (e, n, r) => new Promise((o, t) => {
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
}), { name: XP, n: GP, classes: ZP } = ee("select"), JP = ["tabindex"];
function QP(e, n) {
  const r = Q("maybe-v-node"), o = Q("var-chip"), t = Q("var-select-filter"), a = Q("var-icon"), i = Q("var-field-decorator"), l = Q("var-option"), s = Q("var-menu"), u = Q("var-form-details");
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
    menu: fe(() => [N("div", {
      ref: "menuEl",
      class: p(e.classes(e.n("scroller"), e.n("$-elevation--3")))
    }, [
      e.showEmpty ? F(e.$slots, "empty", { key: 0 }, () => [N("div", { class: p(e.n("empty")) }, ie((e.pt ? e.pt : e.t)("selectEmptyText")), 3)]) : K("v-if", !0),
      e.options.length ? (g(!0), S(Ae, { key: 1 }, Ge(e.options, (d) => (g(), ye(l, {
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
      F(e.$slots, "default")
    ], 2)]),
    default: fe(() => [X(i, jr(da({
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
    })), Wr({
      "append-icon": fe(() => [F(e.$slots, "arrow-icon", {
        focus: e.isFocusing,
        menuOpen: e.showMenu
      }, () => [X(a, {
        class: p(e.classes(e.n("arrow"), [e.showMenu, e.n("--arrow-rotate")])),
        "var-select-cover": "",
        name: "menu-down",
        transition: 300
      }, null, 8, ["class"])]), F(e.$slots, "append-icon")]),
      default: fe(() => [N("div", {
        class: p(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: q({
          textAlign: e.textAlign,
          color: e.textColor
        })
      }, [
        N("div", { class: p(e.classes(e.n("label"), [e.filterable && e.showMenu, e.n("--label-focusing")])) }, [e.isShowSelected() ? F(e.$slots, "selected", { key: 0 }, () => [e.multiple ? (g(), S(Ae, { key: 0 }, [e.chip ? (g(), S("div", {
          key: 0,
          class: p(e.n("chips"))
        }, [(g(!0), S(Ae, null, Ge(e.labels, (d) => (g(), ye(o, {
          key: d,
          class: p(e.n("chip")),
          "var-select-cover": "",
          closeable: "",
          size: "small",
          type: e.errorMessage ? "danger" : void 0,
          onClick: n[0] || (n[0] = jn(() => {
          }, ["stop"])),
          onClose: () => e.handleClose(d)
        }, {
          default: fe(() => [X(r, { is: d }, null, 8, ["is"])]),
          _: 2
        }, 1032, [
          "class",
          "type",
          "onClose"
        ]))), 128)), e.isShowMultipleFilter() ? (g(), ye(t, {
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
        }, [(g(!0), S(Ae, null, Ge(e.labels, (d, c) => (g(), S(Ae, { key: d }, [X(r, { is: d }, null, 8, ["is"]), Be(ie(c !== e.labels.length - 1 ? e.separator : ""), 1)], 64))), 128)), e.isShowMultipleFilter() ? (g(), ye(t, {
          key: 0,
          ref: "filterRef",
          modelValue: e.pattern,
          "onUpdate:modelValue": n[2] || (n[2] = (d) => e.pattern = d),
          style: q(KP(WP({}, e.filterStyle), { paddingLeft: e.labels.length ? "4px" : 0 })),
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
        ])) : K("v-if", !0)], 2))], 64)) : (g(), ye(r, {
          key: 1,
          is: e.label
        }, null, 8, ["is"]))]) : K("v-if", !0)], 2),
        e.enableCustomPlaceholder && !e.pattern ? (g(), S("span", {
          key: 0,
          class: p(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
          style: q({ color: e.placeholderColor })
        }, ie(e.placeholder), 7)) : K("v-if", !0),
        e.isShowSingleFilter() ? (g(), ye(t, {
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
        }, ie(e.pattern), 3)) : K("v-if", !0)
      ], 6)]),
      _: 2
    }, [e.$slots["prepend-icon"] ? {
      name: "prepend-icon",
      fn: fe(() => [F(e.$slots, "prepend-icon")]),
      key: "0"
    } : void 0, e.pattern ? void 0 : {
      name: "clear-icon",
      fn: fe(({ clear: d }) => [F(e.$slots, "clear-icon", { clear: d })]),
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
    onClick: n[5] || (n[5] = jn(() => {
    }, ["stop"]))
  }, null, 8, ["error-message"])], 42, JP);
}
var ng = _({
  name: XP,
  components: {
    VarIcon: xe,
    VarMenu: Uo,
    VarChip: ea,
    VarOption: sa,
    VarFieldDecorator: Vo,
    VarFormDetails: An,
    VarSelectFilter: NP,
    MaybeVNode: nt
  },
  props: _h,
  setup(e) {
    var n;
    const r = y(!1), o = y(!1), t = y(null), a = y(null), i = y(""), l = y(!1), s = E(() => e.filterable), u = E(() => e.multiple), d = E(() => e.focusColor), c = E(() => Jn(e.modelValue)), f = E(() => e.disabled || e.readonly ? "" : "pointer"), { bindForm: v, form: m } = Xn(), { length: h, options: w, bindOptions: $ } = Z6(), { label: C, labels: b, computeLabel: P, getSelectedValue: O } = np({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => w,
      optionProvidersLength: () => h.value
    }), { errorMessage: I, validateWithTrigger: j, validate: M, resetValidation: A } = qn(), B = E(() => m?.readonly.value || e.readonly), T = E(() => m?.disabled.value || e.disabled), D = y(null), U = y(null), L = E(() => e.variant === "standard" && !e.filterable ? "cover-top" : "bottom"), { t: z } = ir(), V = y(0), ae = E({
      get() {
        return V.value + (L.value === "bottom" ? 2 : 0);
      },
      set($e) {
        V.value = $e;
      }
    }), Z = E(() => {
      const { hint: $e, blurColor: Ie, focusColor: Xe } = e;
      if (!$e)
        return I.value ? "var(--field-decorator-error-color)" : r.value ? Xe || "var(--field-decorator-focus-color)" : Ie || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    }), re = E(() => !e.hint && Jn(e.modelValue)), Ce = E(() => {
      var $e;
      if (!T.value)
        return s.value && r.value ? "-1" : ($e = e.tabindex) != null ? $e : "0";
    }), { calculatorRef: oe, filterStyle: W } = LP(i), G = {
      pattern: E(() => i.value),
      showMenu: E(() => o.value),
      multiple: u,
      filterable: s,
      filter: (n = e.filter) != null ? n : (($e, Ie) => String(Ie[e.labelKey]).toLocaleLowerCase().includes($e.toLocaleLowerCase())),
      focusColor: d,
      computeLabel: P,
      onSelect: J,
      reset: je,
      validate: Me,
      resetValidation: A
    }, { showEmpty: se } = VP(D, o, { onAfterUpdate: () => {
      var $e;
      return ($e = U.value) == null ? void 0 : $e.resize();
    } });
    let me = !1;
    ve(() => e.multiple, () => {
      Yn(e.multiple && He(e.modelValue), "Select", "The modelValue must be an array when multiple is true");
    }), $(G), Ye(() => window, "keydown", Ve), Ye(() => window, "keyup", Ze), k(v, G);
    function Y() {
      return s.value && !B.value && !T.value && !u.value;
    }
    function ne() {
      return s.value && !B.value && !T.value && u.value;
    }
    function Se() {
      return !(c.value && !u.value || !u.value && (i.value || l.value));
    }
    function Ve($e) {
      var Ie;
      if (T.value || B.value || !r.value) return;
      const { key: Xe } = $e;
      if (Xe === " " && !o.value) {
        Re($e);
        return;
      }
      if (Xe === "Escape" && o.value) {
        t.value.focus(), Re($e), o.value = !1;
        return;
      }
      if (Xe === "Tab" && o.value) {
        t.value.focus(), Re($e), en();
        return;
      }
      if (Xe === "Enter" && !o.value) {
        Re($e), o.value = !0, (Ie = a.value) == null || Ie.focus();
        return;
      }
      (Xe === "ArrowDown" || Xe === "ArrowUp") && o.value && (Re($e), vu(t.value, D.value, Xe));
    }
    function Ze($e) {
      if (T.value || B.value || o.value || !r.value) return;
      const { key: Ie } = $e;
      Ie === " " && !o.value && (Re($e), o.value = !0);
    }
    function Le($e) {
      Fe(() => {
        const { validateTrigger: Ie, rules: Xe, modelValue: $n } = e;
        j(Ie, $e, Xe, $n);
      });
    }
    function bn() {
      var $e;
      const { disabled: Ie, readonly: Xe, onFocus: $n } = e;
      if (!(m?.disabled.value || m?.readonly.value || Ie || Xe)) {
        if (me) {
          me = !1;
          return;
        }
        ae.value = on(e.offsetY), we(), (ne() || Y()) && (me = !0, ($e = a.value) == null || $e.focus()), k($n), Le("onFocus");
      }
    }
    function en() {
      const { disabled: $e, readonly: Ie, onBlur: Xe } = e;
      m?.disabled.value || m?.readonly.value || $e || Ie || (Oe(), k(Xe), Le("onBlur"), i.value = "");
    }
    function pe() {
      return qP(this, null, function* () {
        if (me) {
          yield Fe(), me = !1;
          return;
        }
        o.value || en();
      });
    }
    function Ue() {
      r.value && en();
    }
    function J($e) {
      const { disabled: Ie, readonly: Xe, multiple: $n, onChange: Hr } = e;
      if (m?.disabled.value || m?.readonly.value || Ie || Xe) return;
      const br = O($e);
      k(e["onUpdate:modelValue"], br), k(Hr, br), Le("onChange"), Fe(() => {
        var Bn;
        return (Bn = a.value) == null ? void 0 : Bn.focus();
      }), $n || (t.value.focus(), Pn().then(() => {
        o.value = !1, i.value = "";
      }));
    }
    function ue() {
      const { disabled: $e, readonly: Ie, multiple: Xe, clearable: $n, onClear: Hr, onChange: br } = e;
      if (m?.disabled.value || m?.readonly.value || $e || Ie || !$n) return;
      const Bn = Xe ? [] : void 0;
      k(e["onUpdate:modelValue"], Bn), k(Hr, Bn), Le("onClear"), k(br, Bn), Le("onChange");
    }
    function Te($e) {
      const { disabled: Ie, onClick: Xe } = e;
      m?.disabled.value || Ie || (k(Xe, $e), Le("onClick"));
    }
    function Ke($e) {
      const { disabled: Ie, readonly: Xe, modelValue: $n, onClose: Hr, onChange: br } = e;
      if (m?.disabled.value || m?.readonly.value || Ie || Xe) return;
      const Bn = w.find(({ label: tl }) => tl.value === $e), ko = $n.filter((tl) => {
        var Ru;
        return tl !== ((Ru = Bn.value.value) != null ? Ru : Bn.label.value);
      });
      k(e["onUpdate:modelValue"], ko), k(Hr, ko), Le("onClose"), k(br, ko), Le("onChange");
    }
    function zn() {
      o.value = !0;
    }
    function pn() {
      l.value = !0;
    }
    function de() {
      l.value = !1;
    }
    function we() {
      ae.value = on(e.offsetY), r.value = !0;
    }
    function Oe() {
      r.value = !1, o.value = !1;
    }
    function Me() {
      return M(e.rules, e.modelValue);
    }
    function je() {
      k(e["onUpdate:modelValue"], e.multiple ? [] : void 0), A();
    }
    return {
      root: t,
      filterRef: a,
      calculatorRef: oe,
      isComposing: l,
      filterStyle: W,
      pattern: i,
      tabindex: Ce,
      readonly: B,
      disabled: T,
      offsetY: ae,
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
      placement: L,
      cursor: f,
      placeholderColor: Z,
      enableCustomPlaceholder: re,
      showEmpty: se,
      t: ln,
      pt: z,
      isFunction: fn,
      n: GP,
      classes: ZP,
      isShowSelected: Se,
      isShowSingleFilter: Y,
      isShowMultipleFilter: ne,
      handleFocus: bn,
      handleBlur: en,
      handleClickOutside: Ue,
      handleClear: ue,
      handleClick: Te,
      handleClose: Ke,
      handleRootBlur: pe,
      handleInput: zn,
      handleCompositionStart: pn,
      handleCompositionEnd: de,
      reset: je,
      validate: Me,
      resetValidation: A,
      focus: we,
      blur: Oe
    };
  }
});
ng.render = QP;
var Fi = ng;
te(Fi);
le(Fi, _h);
var zD = Fi, Is = Fi, rg = {
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
}, { name: xP, n: _P } = ee("signature"), ez = ["height", "width"];
function nz(e, n) {
  return g(), S("div", {
    ref: "root",
    class: p(e.n())
  }, [N("canvas", {
    ref: "canvas",
    height: e.canvasHeight,
    width: e.canvasWidth
  }, null, 8, ez)], 2);
}
var og = _({
  name: xP,
  props: rg,
  setup(e) {
    const n = y(), r = y(), o = y(0), t = y(0);
    let a = !1, i = null;
    Ye(r, "touchstart", s), Ye(r, "touchmove", u), Ye(r, "touchend", d), ar(l), gr(l);
    function l() {
      !r.value || !n.value || (i = r.value.getContext("2d"), o.value = n.value.offsetWidth, t.value = n.value.offsetHeight);
    }
    function s(h) {
      !i || !n.value || (h.preventDefault(), a = !0, i.beginPath(), i.lineWidth = H(e.lineWidth), i.strokeStyle = e.strokeStyle === "currentColor" ? er(n.value).color : e.strokeStyle, k(e.onStart));
    }
    function u(h) {
      if (h.preventDefault(), !r.value || !i || !a) return;
      const w = h.touches[0].clientX, $ = h.touches[0].clientY, C = tn(r.value), b = w - C.left, P = $ - C.top;
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
      n: _P,
      confirm: m,
      reset: v
    };
  }
});
og.render = nz;
var Ui = og;
te(Ui);
le(Ui, rg);
var TD = Ui, Bs = Ui, tg = {
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
}, { name: rz, n: oz, classes: tz } = ee("skeleton");
function az(e, n) {
  return g(), S("div", { class: p(e.classes(e.n("$--box"), e.n())) }, [
    e.loading ? K("v-if", !0) : (g(), S("div", {
      key: 0,
      class: p(e.n("data"))
    }, [F(e.$slots, "default")], 2)),
    e.loading && !e.fullscreen ? (g(), S("div", {
      key: 1,
      class: p(e.n("content"))
    }, [e.card ? (g(), S("div", {
      key: 0,
      class: p(e.n("card")),
      style: q({ height: e.toSizeUnit(e.cardHeight) })
    }, [N("div", { class: p(e.n("--animation")) }, null, 2)], 6)) : K("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (g(), S("div", {
      key: 1,
      class: p(e.n("article"))
    }, [e.avatar ? (g(), S("div", {
      key: 0,
      class: p(e.n("avatar")),
      style: q({
        width: e.toSizeUnit(e.avatarSize),
        height: e.toSizeUnit(e.avatarSize)
      })
    }, [N("div", { class: p(e.n("--animation")) }, null, 2)], 6)) : K("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (g(), S("div", {
      key: 1,
      class: p(e.n("section"))
    }, [e.title ? (g(), S("div", {
      key: 0,
      class: p(e.n("title")),
      style: q({ width: e.toSizeUnit(e.titleWidth) })
    }, [N("div", { class: p(e.n("--animation")) }, null, 2)], 6)) : K("v-if", !0), (g(!0), S(Ae, null, Ge(e.toNumber(e.rows), (r, o) => (g(), S("div", {
      key: r,
      class: p(e.n("row")),
      style: q({ width: e.toSizeUnit(e.rowsWidth[o]) })
    }, [N("div", { class: p(e.n("--animation")) }, null, 2)], 6))), 128))], 2)) : K("v-if", !0)], 2)) : K("v-if", !0)], 2)) : K("v-if", !0),
    e.loading && e.fullscreen ? (g(), S("div", {
      key: 2,
      class: p(e.n("fullscreen")),
      style: q({ zIndex: e.toNumber(e.fullscreenZIndex) })
    }, [N("div", { class: p(e.n("--animation")) }, null, 2)], 6)) : K("v-if", !0)
  ], 2);
}
var ag = _({
  name: rz,
  props: tg,
  setup: () => ({
    n: oz,
    classes: tz,
    toSizeUnit: ze,
    toNumber: H
  })
});
ag.render = az;
var Hi = ag;
te(Hi);
le(Hi, tg);
var ED = Hi, Ds = Hi, cn = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(cn || {}), ig = {
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
}, { name: iz, n: af, classes: lz } = ee("slider"), sz = [
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
function uz(e, n) {
  const r = Q("var-hover-overlay"), o = Q("var-form-details"), t = qe("hover");
  return g(), S("div", { class: p(e.classes(e.n(e.direction), e.n("$--box"))) }, [N("div", {
    ref: "sliderEl",
    class: p(e.classes(e.n(`${e.direction}-block`), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(`${e.direction}--error`)])),
    onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
  }, [N("div", { class: p(e.n(`${e.direction}-track`)) }, [N("div", {
    class: p(e.n(`${e.direction}-track-background`)),
    style: q({
      background: e.trackColor,
      height: e.isVertical ? "100%" : e.toSizeUnit(e.trackHeight),
      width: e.isVertical ? e.toSizeUnit(e.trackHeight) : "100%"
    })
  }, null, 6), N("div", {
    class: p(e.n(`${e.direction}-track-fill`)),
    style: q(e.getFillStyle)
  }, null, 6)], 2), (g(!0), S(Ae, null, Ge(e.thumbList, (a) => (g(), S("div", {
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
    onTouchstart: jn((i) => e.start(i, a.enumValue), ["stop"]),
    onTouchmove: n[0] || (n[0] = jn((...i) => e.move && e.move(...i), ["stop"])),
    onFocusin: (i) => e.handleFocus(a),
    onFocusout: (i) => e.handleBlur(a)
  }, [F(e.$slots, "button", { currentValue: a.text }, () => [
    Ne(N("div", {
      class: p(e.n(`${e.direction}-thumb-block`)),
      style: q({ background: e.thumbColor })
    }, null, 6), [[
      t,
      (i) => e.hover(i, a),
      "desktop"
    ]]),
    N("div", {
      class: p(e.classes(e.n(`${e.direction}-thumb-ripple`), [e.thumbsProps[a.enumValue].active, e.n(`${e.direction}-thumb-ripple--active`)])),
      style: q({ background: e.thumbsProps[a.enumValue].active ? e.thumbColor : void 0 })
    }, [X(r, {
      hovering: !e.isDisabled && a.hovering,
      focusing: !e.isDisabled && a.focusing
    }, null, 8, ["hovering", "focusing"])], 6),
    N("div", {
      class: p(e.classes(e.n(`${e.direction}-thumb-label`), [e.showLabel(a.enumValue), e.n(`${e.direction}-thumb-label--active`)])),
      style: q({
        background: e.labelColor,
        color: e.labelTextColor,
        height: e.toSizeUnit(e.thumbSize),
        width: e.toSizeUnit(e.thumbSize)
      })
    }, [N("span", null, ie(a.text), 1)], 6)
  ])], 46, sz))), 128))], 2), X(o, {
    "error-message": e.errorMessage,
    class: p(e.n("form")),
    "var-slider-cover": ""
  }, null, 8, ["error-message", "class"])], 2);
}
var lg = _({
  name: iz,
  components: {
    VarFormDetails: An,
    VarHoverOverlay: Wn
  },
  directives: { Hover: Rn },
  props: ig,
  setup(e) {
    const n = y(0), r = y(null), o = y(!1), t = E(() => H(e.max) - H(e.min)), a = E(() => n.value / t.value * H(e.step)), i = E(() => e.disabled || f?.disabled.value), l = E(() => e.readonly || f?.readonly.value), s = E(() => e.direction === "vertical"), u = y(!1), d = y(!1), { bindForm: c, form: f } = Xn(), { errorMessage: v, validateWithTrigger: m, validate: h, resetValidation: w } = qn(), { hovering: $, handleHovering: C } = or(), { hovering: b, handleHovering: P } = or(), O = E(() => {
      const { modelValue: J, range: ue } = e;
      let Te = [];
      return ue && He(J) ? Te = [{
        value: V(J[0]),
        enumValue: cn.First,
        text: ae(J[0]),
        hovering: $.value,
        focusing: u.value,
        handleHovering: C,
        handleFocusing(Ke) {
          u.value = Ke;
        }
      }, {
        value: V(J[1]),
        enumValue: cn.Second,
        text: ae(J[1]),
        hovering: b.value,
        focusing: d.value,
        handleHovering: P,
        handleFocusing(Ke) {
          d.value = Ke;
        }
      }] : En(J) && (Te = [{
        value: V(J),
        enumValue: cn.First,
        text: ae(J),
        hovering: $.value,
        focusing: u.value,
        handleHovering: C,
        handleFocusing(Ke) {
          u.value = Ke;
        }
      }]), Te;
    }), I = E(() => {
      const { activeColor: J, range: ue, modelValue: Te } = e, Ke = ue && He(Te) ? V(Math.min(Te[0], Te[1])) : 0, zn = ue && He(Te) ? V(Math.max(Te[0], Te[1])) - Ke : V(Te);
      return s.value ? {
        left: "0px",
        height: `${zn}%`,
        bottom: `${Ke}%`,
        background: J
      } : {
        top: "0px",
        width: `${zn}%`,
        left: `${Ke}%`,
        background: J
      };
    }), j = rn({
      [cn.First]: T(),
      [cn.Second]: T()
    });
    let M;
    k(c, {
      reset: Le,
      validate: B,
      resetValidation: w
    }), ve([() => e.modelValue, () => e.step], ([J, ue]) => {
      !Se() || !Ve() || o.value || Ze(J, H(ue));
    }), ve(n, () => Ze()), yn(() => {
      !Se() || !Ve() || A();
    }), ca(G), Ye(() => window, "keydown", en), ar(A);
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
      Fe(() => m(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function U(J) {
      const ue = J.currentTarget;
      return ue ? s.value ? n.value - (J.clientY - tn(ue).top) : J.clientX - Ey(ue) : 0;
    }
    function L(J) {
      return {
        [s.value ? "bottom" : "left"]: `${J.value}%`,
        zIndex: j[J.enumValue].active ? 1 : void 0
      };
    }
    function z(J) {
      return e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : j[J].active;
    }
    function V(J) {
      const { min: ue, max: Te } = e;
      return J < H(ue) ? 0 : J > H(Te) ? 100 : (J - H(ue)) / t.value * 100;
    }
    function ae(J) {
      if (!En(J)) return 0;
      const ue = Sn(J, H(e.min), H(e.max));
      return parseInt(`${ue}`, 10) === ue ? ue : H(ue.toPrecision(5));
    }
    function Z(J, ue) {
      i.value || ue.handleHovering(J);
    }
    function re(J) {
      k(e.onChange, J), k(e["onUpdate:modelValue"], J), D();
    }
    function Ce(J, ue) {
      let Te = [];
      const { step: Ke, range: zn, modelValue: pn, min: de } = e, we = H(Ke), Oe = Math.round(J / a.value), Me = Oe * we + H(de), je = j[ue].percentValue * we + H(de);
      j[ue].percentValue = Oe, zn && He(pn) && (Te = ue === cn.First ? [Me, pn[1]] : [pn[0], Me]), je !== Me && re(zn ? Te.map(($e) => ae($e)) : ae(Me));
    }
    function oe(J) {
      if (!e.range) return cn.First;
      const ue = j[cn.First].percentValue * a.value, Te = j[cn.Second].percentValue * a.value;
      return Math.abs(J - ue) <= Math.abs(J - Te) ? cn.First : cn.Second;
    }
    function W() {
      document.addEventListener("touchmove", me, { passive: !1 }), document.addEventListener("touchend", Y), document.addEventListener("touchcancel", Y);
    }
    function G() {
      document.removeEventListener("touchmove", me), document.removeEventListener("touchend", Y), document.removeEventListener("touchcancel", Y);
    }
    function se(J, ue) {
      if (A(), i.value || (j[ue].active = !0), M = ue, W(), i.value || l.value) return;
      k(e.onStart), o.value = !0;
      const { clientX: Te, clientY: Ke } = J.touches[0];
      j[ue].startPosition = s.value ? Ke : Te;
    }
    function me(J) {
      if (Re(J), i.value || l.value || !o.value) return;
      const { startPosition: ue, currentOffset: Te } = j[M], { clientX: Ke, clientY: zn } = J.touches[0];
      let pn = (s.value ? ue - zn : Ke - ue) + Te;
      pn <= 0 ? pn = 0 : pn >= n.value && (pn = n.value), Ce(pn, M);
    }
    function Y() {
      G();
      const { range: J, modelValue: ue, onEnd: Te, step: Ke, min: zn } = e;
      if (i.value || (j[M].active = !1), i.value || l.value) return;
      let pn = [];
      j[M].currentOffset = j[M].percentValue * a.value;
      const de = j[M].percentValue * H(Ke) + H(zn);
      J && He(ue) && (pn = M === cn.First ? [de, ue[1]] : [ue[0], de]), k(Te, J ? pn : de), o.value = !1;
    }
    function ne(J) {
      if (i.value || l.value || J.target.closest(`.${af("thumb")}`)) return;
      const ue = U(J), Te = oe(ue);
      M = Te, Ce(ue, Te), Y();
    }
    function Se() {
      return H(e.step) <= 0 ? (N0("Slider", '"step" should be > 0'), !1) : !0;
    }
    function Ve() {
      const { range: J, modelValue: ue } = e;
      return J && !He(ue) ? (ro("Slider", '"modelValue" should be an Array'), !1) : !J && He(ue) ? (ro("Slider", '"modelValue" should be a Number'), !1) : J && He(ue) && ue.length < 2 ? (ro("Slider", '"modelValue" should have two value'), !1) : !0;
    }
    function Ze(J = e.modelValue, ue = H(e.step)) {
      const Te = (Ke) => {
        const { min: zn, max: pn } = e;
        return Ke < H(zn) ? 0 : Ke > H(pn) ? t.value / ue : (Ke - H(zn)) / ue;
      };
      e.range && He(J) ? (j[cn.First].percentValue = Te(J[0]), j[cn.First].currentOffset = j[cn.First].percentValue * a.value, j[cn.Second].percentValue = Te(J[1]), j[cn.Second].currentOffset = j[cn.Second].percentValue * a.value) : En(J) && (j[cn.First].currentOffset = Te(J) * a.value);
    }
    function Le() {
      const J = e.range ? [0, 0] : 0;
      k(e["onUpdate:modelValue"], J), w();
    }
    function bn(J, ue) {
      const Te = H(e.step);
      return He(ue) ? [ue[0] + (u.value ? J * Te : 0), ue[1] + (d.value ? J * Te : 0)].map(ae) : ae(ue + J * Te);
    }
    function en(J) {
      const ue = {
        ArrowRight: 1,
        ArrowUp: 1,
        ArrowLeft: -1,
        ArrowDown: -1
      }, { key: Te } = J;
      if (!Kr(ue, Te) || l.value || i.value || e.range && !u.value && !d.value || !e.range && !u.value) return;
      Re(J);
      const Ke = ue[Te];
      re(bn(Ke, e.modelValue));
    }
    function pe(J) {
      i.value || J.handleFocusing(!0);
    }
    function Ue(J) {
      J.handleFocusing(!1);
    }
    return {
      sliderEl: r,
      getFillStyle: I,
      isDisabled: i,
      isVertical: s,
      errorMessage: v,
      thumbsProps: j,
      thumbList: O,
      handleFocus: pe,
      handleBlur: Ue,
      n: af,
      classes: lz,
      thumbStyle: L,
      hover: Z,
      toSizeUnit: ze,
      toNumber: H,
      showLabel: z,
      start: se,
      move: me,
      end: Y,
      handleClick: ne
    };
  }
});
lg.render = uz;
var ji = lg;
te(ji);
le(ji, ig);
var ID = ji, Ms = ji, dz = Object.defineProperty, cz = Object.defineProperties, fz = Object.getOwnPropertyDescriptors, lf = Object.getOwnPropertySymbols, vz = Object.prototype.hasOwnProperty, pz = Object.prototype.propertyIsEnumerable, sf = (e, n, r) => n in e ? dz(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, mz = (e, n) => {
  for (var r in n || (n = {})) vz.call(n, r) && sf(e, r, n[r]);
  if (lf)
    for (var r of lf(n)) pz.call(n, r) && sf(e, r, n[r]);
  return e;
}, hz = (e, n) => cz(e, fz(n)), Mu = {
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
  loadingType: De(vr, "type"),
  loadingSize: De(vr, "size"),
  loadingRadius: De(vr, "radius"),
  loadingColor: hz(mz({}, De(vr, "color")), { default: "currentColor" }),
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
}, { n: gz, classes: bz } = ee("snackbar"), yz = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function wz(e, n) {
  const r = Q("var-icon"), o = Q("var-loading");
  return Ne((g(), S("div", {
    class: p(e.n()),
    style: q({
      pointerEvents: e.isForbidClick ? "auto" : "none",
      zIndex: e.zIndex
    })
  }, [N("div", {
    class: p(e.classes(e.n("wrapper"), e.n(`wrapper-${e.position}`), e.formatElevation(e.elevation, 4), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n(`wrapper-${e.type}`)])),
    style: q({ zIndex: e.zIndex })
  }, [
    N("div", { class: p([e.n("content"), e.contentClass]) }, [F(e.$slots, "default", {}, () => [Be(ie(e.content), 1)])], 2),
    e.iconName || e.type === "loading" || e.$slots.icon ? (g(), S("div", {
      key: 0,
      class: p(e.n("icon"))
    }, [
      e.iconName ? (g(), ye(r, {
        key: 0,
        name: e.iconName
      }, null, 8, ["name"])) : K("v-if", !0),
      e.type === "loading" ? (g(), ye(o, {
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
      F(e.$slots, "icon")
    ], 2)) : K("v-if", !0),
    e.$slots.action ? (g(), S("div", {
      key: 1,
      class: p(e.n("action"))
    }, [F(e.$slots, "action")], 2)) : K("v-if", !0)
  ], 6)], 6)), [[_n, e.show]]);
}
var sg = _({
  name: "VarSnackbarCore",
  components: {
    VarLoading: uo,
    VarIcon: xe
  },
  props: Mu,
  setup(e) {
    const n = y(null), { zIndex: r } = ot(() => e.show, 1);
    rt(() => e.show, () => e.lockScroll);
    const o = E(() => {
      const { type: i, forbidClick: l } = e;
      return i === "loading" || l;
    }), t = E(() => e.type ? yz[e.type] : "");
    function a() {
      n.value = setTimeout(() => {
        e.type !== "loading" && k(e["onUpdate:show"], !1);
      }, e.duration);
    }
    return ve(() => e.show, (i) => {
      i ? (k(e.onOpen), a()) : (clearTimeout(n.value), k(e.onClose));
    }), ve(() => e._update, () => {
      clearTimeout(n.value), a();
    }), yn(() => {
      e.show && (k(e.onOpen), a());
    }), {
      SNACKBAR_TYPE: cg,
      zIndex: r,
      iconName: t,
      isForbidClick: o,
      n: gz,
      classes: bz,
      formatElevation: vn
    };
  }
});
sg.render = wz;
var ug = sg, { name: kz, n: $z } = ee("snackbar");
function Cz(e, n) {
  const r = Q("var-snackbar-core");
  return g(), ye(cr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [X(nn, {
    name: `${e.n()}-fade`,
    onAfterEnter: e.onOpened,
    onAfterLeave: e.onClosed
  }, {
    default: fe(() => [X(r, We(e.$props, { class: e.n("transition") }), Wr({
      default: fe(() => [F(e.$slots, "default")]),
      _: 2
    }, [e.$slots.icon ? {
      name: "icon",
      fn: fe(() => [F(e.$slots, "icon")]),
      key: "0"
    } : void 0, e.$slots.action ? {
      name: "action",
      fn: fe(() => [F(e.$slots, "action")]),
      key: "1"
    } : void 0]), 1040, ["class"])]),
    _: 3
  }, 8, [
    "name",
    "onAfterEnter",
    "onAfterLeave"
  ])], 8, ["to", "disabled"]);
}
var dg = _({
  name: kz,
  components: { VarSnackbarCore: ug },
  props: Mu,
  setup() {
    const { disabled: e } = Jr();
    return {
      disabled: e,
      n: $z
    };
  }
});
dg.render = Cz;
var Yi = dg, Sz = Object.defineProperty, uf = Object.getOwnPropertySymbols, Oz = Object.prototype.hasOwnProperty, Pz = Object.prototype.propertyIsEnumerable, df = (e, n, r) => n in e ? Sz(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Xo = (e, n) => {
  for (var r in n || (n = {})) Oz.call(n, r) && df(e, r, n[r]);
  if (uf)
    for (var r of uf(n)) Pz.call(n, r) && df(e, r, n[r]);
  return e;
}, cg = [
  "loading",
  "success",
  "warning",
  "info",
  "error"
], cf = 0, As = !1, fg, Go = !1, vg = {
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
}, xn = rn([]), Au = vg, zz = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, ml = (e) => () => fn(e) ? e() : e, Tz = { setup() {
  return () => {
    const e = xn.map(({ id: n, reactiveSnackOptions: r, _update: o }) => {
      const t = document.querySelector(".var-transition-group");
      r.forbidClick || r.type === "loading" ? t.classList.add("var-pointer-auto") : t.classList.remove("var-pointer-auto");
      const a = Xo({ position: Go ? "relative" : "absolute" }, Az(r.position)), { content: i, icon: l, action: s } = r, u = {
        default: ml(i),
        icon: ml(l),
        action: ml(s)
      };
      return X(ug, We(r, {
        key: n,
        style: a,
        "data-id": n,
        _update: o,
        show: r.show,
        "onUpdate:show": (d) => r.show = d
      }), u);
    });
    return X(qg, We(zz, {
      style: { zIndex: Hn.zIndex },
      onAfterEnter: Ez,
      onAfterLeave: Iz
    }), { default: () => [e] });
  };
} }, dr = function(e) {
  const n = Dz(e), r = rn(Xo(Xo({}, Au), n));
  r.show = !0, As || (As = !0, fg = go(Tz).unmountInstance);
  const { length: o } = xn, t = {
    id: cf++,
    reactiveSnackOptions: r
  };
  return o === 0 || Go ? Bz(t) : Mz(r, `update-${cf}`), { clear() {
    !Go && xn.length ? xn[0].reactiveSnackOptions.show = !1 : r.show = !1;
  } };
};
cg.forEach((e) => {
  dr[e] = (n) => (gn(n) ? n.type = e : n = {
    content: n,
    type: e
  }, dr(n));
});
dr.allowMultiple = function(e = !1) {
  e !== Go && (xn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Go = e);
};
dr.clear = function() {
  xn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
dr.setDefaultOptions = function(e) {
  Au = e;
};
dr.resetDefaultOptions = function() {
  Au = vg;
};
function Ez(e) {
  const n = e.getAttribute("data-id"), r = xn.find((o) => o.id === H(n));
  r && k(r.reactiveSnackOptions.onOpened);
}
function Iz(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), r = xn.find((o) => o.id === H(n));
  r && (r.animationEnd = !0, k(r.reactiveSnackOptions.onClosed)), xn.every((o) => o.animationEnd) && (k(fg), xn = rn([]), As = !1);
}
function Bz(e) {
  xn.push(e);
}
function Dz(e = {}) {
  return an(e) ? { content: e } : e;
}
function Mz(e, n) {
  const [r] = xn;
  r.reactiveSnackOptions = Xo(Xo({}, r.reactiveSnackOptions), e), r._update = n;
}
function Az(e = "top") {
  return e === "bottom" ? { top: "85%" } : { top: e === "top" ? "5%" : "45%" };
}
dr.Component = Yi;
te(Yi);
te(Yi, dr);
le(dr, Mu);
var BD = Yi, Ns = dr, pg = {
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
function Un(e) {
  return `calc(${e} / 2)`;
}
function Nz(e, n, r) {
  const { direction: o, justify: t, index: a, lastIndex: i } = r;
  let l = "0";
  return o === "row" && ([
    "flex-start",
    "center",
    "flex-end",
    "start",
    "end"
  ].includes(t) ? a !== i ? l = `${Un(e)} ${n} ${Un(e)} 0` : l = `${Un(e)} 0` : t === "space-around" ? l = `${Un(e)} ${Un(n)}` : t === "space-between" && (a === 0 ? l = `${Un(e)} ${Un(n)} ${Un(e)} 0` : a === i ? l = `${Un(e)} 0 ${Un(e)} ${Un(n)}` : l = `${Un(e)} ${Un(n)}`)), o === "column" && a !== i && (l = `0 0 ${e} 0`), l;
}
var Vz = (e) => [
  "mini",
  "small",
  "normal",
  "large"
].includes(e), { name: Rz, n: Pt, classes: ff } = ee("space");
function Lz(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : He(e) ? e.map(ze) : [ze(e), ze(e)];
}
var Wi = _({
  name: Rz,
  props: pg,
  setup(e, { slots: n }) {
    return () => {
      var r;
      const { inline: o, justify: t, align: a, wrap: i, direction: l, size: s } = e, u = (r = k(n.default)) != null ? r : [], [d, c] = Lz(s, Vz(s)), f = tu(u), v = f.length - 1, m = f.map((h, w) => {
        var $;
        const C = Nz(d, c, {
          direction: l,
          justify: t,
          index: w,
          lastIndex: v
        });
        return X("div", {
          class: ff([l === "column", Pt("--auto")]),
          key: ($ = h.key) != null ? $ : void 0,
          style: { margin: C }
        }, [h]);
      });
      return X("div", {
        class: ff(Pt(), Pt("$--box"), [o, Pt("--inline")]),
        style: {
          flexDirection: l,
          justifyContent: Jt(t),
          alignItems: Jt(a),
          flexWrap: i ? "wrap" : "nowrap",
          margin: l === "row" ? `calc(-1 * ${d} / 2) 0` : void 0
        }
      }, [m]);
    };
  }
});
te(Wi);
le(Wi, pg);
var DD = Wi, Vs = Wi, mg = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: De(sn, "name"),
  inactiveIcon: De(sn, "name"),
  activeIconNamespace: De(sn, "namespace"),
  currentIconNamespace: De(sn, "namespace"),
  inactiveIconNamespace: De(sn, "namespace")
}, hg = /* @__PURE__ */ Symbol("STEPS_BIND_STEP_KEY");
function Fz() {
  const { bindChildren: e, childProviders: n } = kn(hg);
  return {
    step: n,
    bindStep: e
  };
}
function Uz() {
  const { parentProvider: e, index: n, bindParent: r } = wn(hg);
  return Yn(!!r, "Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: r
  };
}
var { name: Hz, n: jz, classes: Yz } = ee("step"), Wz = { key: 3 };
function Kz(e, n) {
  const r = Q("var-icon");
  return g(), S("div", { class: p(e.n()) }, [N("div", { class: p(e.n(e.direction)) }, [
    N("div", {
      class: p(e.classes(e.n(`${e.direction}-tag`), [e.isActive || e.isCurrent, e.n(`${e.direction}-tag--active`)])),
      style: q({ backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor }),
      onClick: n[0] || (n[0] = (...o) => e.click && e.click(...o))
    }, [e.isActive ? (g(), ye(r, {
      key: 0,
      class: p(e.n("icon")),
      "var-step-cover": "",
      name: e.activeIcon,
      namespace: e.activeIconNamespace
    }, null, 8, [
      "class",
      "name",
      "namespace"
    ])) : e.isCurrent && e.currentIcon ? (g(), ye(r, {
      key: 1,
      class: p(e.n("icon")),
      "var-step-cover": "",
      name: e.currentIcon,
      namespace: e.currentIconNamespace
    }, null, 8, [
      "class",
      "name",
      "namespace"
    ])) : e.inactiveIcon ? (g(), ye(r, {
      key: 2,
      class: p(e.n("icon")),
      "var-step-cover": "",
      name: e.inactiveIcon,
      namespace: e.inactiveIconNamespace
    }, null, 8, [
      "class",
      "name",
      "namespace"
    ])) : (g(), S("span", Wz, ie(e.index + 1), 1))], 6),
    e.$slots.default ? (g(), S("div", {
      key: 0,
      class: p(e.classes(e.n(`${e.direction}-content`), [e.isActive || e.isCurrent, e.n(`${e.direction}-content--active`)])),
      onClick: n[1] || (n[1] = (...o) => e.click && e.click(...o))
    }, [F(e.$slots, "default")], 2)) : K("v-if", !0),
    N("div", { class: p(e.n(`${e.direction}-line`)) }, null, 2)
  ], 2)], 2);
}
var gg = _({
  name: Hz,
  components: { VarIcon: xe },
  props: mg,
  setup() {
    const { index: e, steps: n, bindSteps: r } = Uz(), { active: o, activeColor: t, inactiveColor: a, direction: i, clickStep: l } = n, s = E(() => o.value === e.value), u = E(() => e.value !== -1 && H(o.value) > e.value);
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
      n: jz,
      classes: Yz,
      click: d
    };
  }
});
gg.render = Kz;
var Ki = gg;
te(Ki);
le(Ki, mg);
var MD = Ki, Rs = Ki, bg = {
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
}, { name: qz, n: Xz } = ee("steps");
function Gz(e, n) {
  return g(), S("div", {
    class: p(e.n()),
    style: q({ flexDirection: e.direction === "horizontal" ? "row" : "column" })
  }, [F(e.$slots, "default")], 6);
}
var yg = _({
  name: qz,
  props: bg,
  setup(e) {
    const n = E(() => e.active), r = E(() => e.activeColor), o = E(() => e.inactiveColor), t = E(() => e.direction), { bindStep: a } = Fz();
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
    return { n: Xz };
  }
});
yg.render = Gz;
var qi = yg;
te(qi);
le(qi, bg);
var AD = qi, Ls = qi, wg = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: Zz, n: Jz } = ee("style-provider"), Xi = _({
  name: Zz,
  props: wg,
  setup(e, { slots: n }) {
    return () => Zo(e.tag, {
      class: Jz(),
      style: Ov(e.styleVars)
    }, k(n.default));
  }
}), kg = "varlet-style-vars";
function vf() {
  const e = document.head.querySelector(`#${kg}`);
  e && document.head.removeChild(e);
}
function Qz(e) {
  const n = document.createElement("style");
  n.id = kg, n.innerHTML = e, document.head.appendChild(n);
}
function Gi(e) {
  if (e == null) {
    vf();
    return;
  }
  const n = Ov(e ?? {}), r = Object.entries(n).reduce((o, [t, a]) => (o += `${t}:${a};`, o), `:root:root {
`);
  vf(), Qz(`${r}
}`);
}
Gi.Component = Xi;
te(Xi);
te(Xi, Gi);
le(Gi, wg);
var ND = Xi, Fs = Gi, $g = {
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
}, { name: xz, n: _z, classes: e8 } = ee("switch"), n8 = ["aria-checked"], r8 = ["tabindex"];
function o8(e, n) {
  const r = Q("var-hover-overlay"), o = Q("var-form-details"), t = qe("ripple"), a = qe("hover");
  return Ne((g(), S("div", {
    class: p(e.classes(e.n(), [e.variant, e.n("--variant")])),
    role: "switch",
    "aria-checked": e.modelValue
  }, [N("div", {
    ref: "switchRef",
    class: p(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.isActive, e.n("block--active")])),
    style: q(e.styleComputed.switch),
    onClick: n[2] || (n[2] = (...i) => e.switchActive && e.switchActive(...i))
  }, [N("div", {
    style: q(e.styleComputed.track),
    class: p(e.classes(e.n("track"), [e.isActive, e.n("track--active")], [e.errorMessage && !e.variant, e.n("track--error")]))
  }, null, 6), Ne((g(), S("div", {
    class: p(e.classes(e.n("ripple"), [e.isActive, e.n("ripple--active")])),
    style: q(e.styleComputed.ripple),
    tabindex: e.tabindex == null ? e.disabled || e.formDisabled ? void 0 : "0" : e.tabindex,
    onFocus: n[0] || (n[0] = (i) => e.isFocusing = !0),
    onBlur: n[1] || (n[1] = (i) => e.isFocusing = !1)
  }, [N("div", {
    style: q(e.styleComputed.handle),
    class: p(e.classes(e.n("handle"), e.formatElevation(e.buttonElevation, 2), [e.isActive, e.n("handle--active")], [e.errorMessage && !e.variant, e.n("handle--error")], [e.hovering, e.n("handle--hover")]))
  }, [e.loading ? (g(), S("span", {
    key: 0,
    class: p(e.n("loading")),
    style: q({
      width: e.radius,
      height: e.radius
    })
  }, [...n[3] || (n[3] = [N("svg", { viewBox: "25 25 50 50" }, [N("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })], -1)])], 6)) : K("v-if", !0)], 6), X(r, {
    hovering: e.hovering && !e.disabled && !e.formDisabled,
    focusing: e.isFocusing && !e.disabled && !e.formDisabled
  }, null, 8, ["hovering", "focusing"])], 46, r8)), [[t, { disabled: !e.ripple || e.disabled || e.loading || e.formDisabled || e.readonly || e.formReadonly }]])], 6), X(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 10, n8)), [[
    a,
    e.hover,
    "desktop"
  ]]);
}
var Cg = _({
  name: xz,
  components: {
    VarFormDetails: An,
    VarHoverOverlay: Wn
  },
  directives: {
    Ripple: un,
    Hover: Rn
  },
  props: $g,
  setup(e) {
    const n = y(null), r = y(!1), { bindForm: o, form: t } = Xn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = qn(), { hovering: u, handleHovering: d } = or(), c = E(() => e.modelValue === e.activeValue), f = E(() => {
      const { size: O, color: I, closeColor: j, loadingColor: M, variant: A } = e;
      return {
        handle: {
          width: Dn(O),
          height: Dn(O),
          backgroundColor: c.value ? I : j,
          color: M
        },
        ripple: {
          left: c.value ? Dn(O, 0.5) : `-${Dn(O, A ? 1 / 3 : 0.5)}`,
          color: c.value ? I : j || "currentColor",
          width: Dn(O, 2),
          height: Dn(O, 2)
        },
        track: {
          width: Dn(O, A ? 13 / 6 : 1.9),
          height: Dn(O, A ? 4 / 3 : 0.72),
          borderRadius: Dn(O, 2 / 3),
          filter: c.value || a?.value ? void 0 : `brightness(${A ? 1 : 0.6})`,
          backgroundColor: c.value ? I : j,
          borderWidth: A && !c.value ? Dn(O, 1 / 12) : void 0
        },
        switch: {
          width: Dn(O, A ? 13 / 6 : 2),
          height: Dn(O, A ? 4 / 3 : 1.2)
        }
      };
    }), v = E(() => Dn(e.size, 0.8));
    k(o, {
      reset: P,
      validate: w,
      resetValidation: s
    }), Ye(() => window, "keydown", m), Ye(() => window, "keyup", h);
    function m(O) {
      r.value && ((O.key === " " || O.key === "Enter") && Re(O), O.key === "Enter" && n.value.click());
    }
    function h(O) {
      !r.value || O.key !== " " || (Re(O), n.value.click());
    }
    function w() {
      return l(e.rules, e.modelValue);
    }
    function $(O) {
      Fe(() => {
        const { validateTrigger: I, rules: j, modelValue: M } = e;
        i(I, O, j, M);
      });
    }
    function C(O) {
      const { onClick: I, onChange: j, disabled: M, loading: A, readonly: B, activeValue: T, inactiveValue: D, lazyChange: U, "onUpdate:modelValue": L, onBeforeChange: z } = e;
      if (M || t?.disabled.value || (k(I, O), A || B || t?.readonly.value)) return;
      const V = c.value ? D : T;
      U ? k(z, V, (ae) => {
        k(L, ae), $("onLazyChange");
      }) : (k(j, V), k(L, V), $("onChange"));
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
      n: _z,
      classes: e8,
      formatElevation: vn,
      multiplySizeUnit: Dn,
      switchActive: C,
      hover: b
    };
  }
});
Cg.render = o8;
var Zi = Cg;
te(Zi);
le(Zi, $g);
var VD = Zi, Us = Zi, Sg = {
  name: [String, Number],
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: R()
}, Og = /* @__PURE__ */ Symbol("TABS_BIND_TAB_KEY");
function t8() {
  const { childProviders: e, bindChildren: n, length: r } = kn(Og);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function a8() {
  const { parentProvider: e, bindParent: n, index: r } = wn(Og);
  return Yn(!!n, "Tab", "<var-tab/> must in <var-tabs/>"), {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var { name: i8, n: zt, classes: l8 } = ee("tab");
function s8(e, n) {
  const r = qe("ripple");
  return Ne((g(), S("div", {
    ref: "tabEl",
    class: p(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n(`--${e.itemDirection}`))),
    style: q({ color: e.computeColorStyle() }),
    onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
  }, [F(e.$slots, "default")], 6)), [[r, { disabled: e.disabled || !e.ripple }]]);
}
var Pg = _({
  name: i8,
  directives: { Ripple: un },
  props: Sg,
  setup(e) {
    const n = y(null), r = E(() => n.value), o = E(() => e.name), t = E(() => e.disabled), { index: a, tabs: i, bindTabs: l } = a8(), { onTabClick: s, active: u, activeColor: d, inactiveColor: c, disabledColor: f, itemDirection: v, resize: m } = i, h = {
      name: o,
      index: a,
      disabled: t,
      element: r
    };
    l(h), ve(() => [e.name, e.disabled], m);
    function w() {
      return e.name != null ? u.value === e.name : u.value === a?.value;
    }
    function $() {
      return e.disabled ? f.value : w() ? d.value : c.value;
    }
    function C() {
      return e.disabled ? zt("$-tab--disabled") : w() ? zt("$-tab--active") : zt("$-tab--inactive");
    }
    function b(P) {
      const { disabled: O, name: I, onClick: j } = e;
      O || (k(j, I ?? a.value, P), s(h));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: c,
      itemDirection: v,
      n: zt,
      classes: l8,
      computeColorStyle: $,
      computeColorClass: C,
      handleClick: b
    };
  }
});
Pg.render = s8;
var Ji = Pg;
te(Ji);
le(Ji, Sg);
var RD = Ji, Hs = Ji, zg = { name: [String, Number] }, { name: u8, n: d8, classes: c8 } = ee("tab-item");
function f8(e, n) {
  const r = Q("var-swipe-item");
  return g(), ye(r, {
    class: p(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: fe(() => [F(e.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}
var Tg = _({
  name: u8,
  components: { VarSwipeItem: Ko },
  props: zg,
  setup(e) {
    const n = y(!1), r = E(() => e.name), { index: o, bindTabsItems: t } = C6(), { bindLists: a } = S6(), i = {
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
      n: d8,
      classes: c8
    };
  }
});
Tg.render = f8;
var Qi = Tg;
te(Qi);
le(Qi, zg);
var LD = Qi, js = Qi, Eg = {
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
}, { name: v8, n: p8, classes: m8 } = ee("table");
function h8(e, n) {
  return g(), S("div", { class: p(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box"))) }, [N("div", {
    class: p(e.n("main")),
    style: q({ "max-height": e.toSizeUnit(e.scrollerHeight) })
  }, [N("table", {
    class: p(e.n("table")),
    style: q({ width: e.toSizeUnit(e.fullWidth) })
  }, [F(e.$slots, "default")], 6)], 6), e.$slots.footer ? (g(), S("div", {
    key: 0,
    class: p(e.n("footer"))
  }, [F(e.$slots, "footer")], 2)) : K("v-if", !0)], 2);
}
var Ig = _({
  name: v8,
  props: Eg,
  setup: () => ({
    toSizeUnit: ze,
    n: p8,
    classes: m8,
    formatElevation: vn
  })
});
Ig.render = h8;
var xi = Ig;
te(xi);
le(xi, Eg);
var FD = xi, Ys = xi, Bg = {
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
  stickyCssMode: De(Io, "cssMode"),
  stickyZIndex: De(Io, "zIndex"),
  offsetTop: De(Io, "offsetTop"),
  onClick: R(),
  onChange: R(),
  "onUpdate:active": R()
}, pf = (e, n, r) => new Promise((o, t) => {
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
}), { name: g8, n: b8, classes: y8 } = ee("tabs");
function w8(e, n) {
  return g(), ye(po(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: fe(() => [N("div", We({
      class: e.classes(e.n(), e.n("$--box"), e.n(`--item-${e.itemDirection}`), e.n(`--layout-${e.layoutDirection}-padding`), e.formatElevation(e.elevation, 4), [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
      style: { background: e.color }
    }, e.$attrs), [N("div", {
      ref: "scrollerEl",
      class: p(e.classes(e.n("tab-wrap"), [e.localScrollable, e.n(`--layout-${e.layoutDirection}-scrollable`)], e.n(`--layout-${e.layoutDirection}`)))
    }, [F(e.$slots, "default"), N("div", {
      class: p(e.classes(e.n("indicator"), e.n(`--layout-${e.layoutDirection}${e.indicatorPosition}-indicator`))),
      style: q({
        width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
        height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
        transform: e.layoutDirection === "horizontal" ? `translateX(${e.indicatorX})` : `translateY(${e.indicatorY})`
      })
    }, [N("div", {
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
var Dg = _({
  name: g8,
  components: { VarSticky: fo },
  inheritAttrs: !1,
  props: Bg,
  setup(e) {
    const n = y("0px"), r = y("0px"), o = y("0px"), t = y("0px"), a = y(!1), i = y(null), l = E(() => e.active), s = E(() => e.activeColor), u = E(() => e.inactiveColor), d = E(() => e.disabledColor), c = E(() => e.itemDirection), f = y(null), v = E(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: m, bindTabList: h, length: w } = t8();
    h({
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: c,
      resize: M,
      onTabClick: $
    }), ve(() => w.value, () => pf(null, null, function* () {
      yield Pn(), M();
    })), ve(() => [e.active, e.scrollable], M), Nr(M), ar(M);
    function $(B) {
      var T;
      const D = (T = B.name.value) != null ? T : B.index.value, { active: U, onChange: L, onClick: z } = e;
      k(e["onUpdate:active"], D), k(z, D), D !== U && k(L, D);
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
      if (En(B)) {
        const T = Sn(B, 0, w.value - 1);
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
    function j({ element: B }) {
      if (!a.value) return;
      const T = i.value, D = B.value;
      e.layoutDirection === "horizontal" ? No(T, {
        left: D.offsetLeft + D.offsetWidth / 2 - T.offsetWidth / 2,
        animation: El
      }) : No(T, {
        top: D.offsetTop + D.offsetHeight / 2 - T.offsetHeight / 2,
        animation: El
      });
    }
    function M() {
      const B = C() || b() || P();
      !B || B.disabled.value || (O(), I(B), j(B));
    }
    function A() {
      return pf(this, null, function* () {
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
      Transition: nn,
      toSizeUnit: ze,
      n: b8,
      classes: y8,
      resize: M,
      resizeSticky: A,
      formatElevation: vn
    };
  }
});
Dg.render = w8;
var _i = Dg;
te(_i);
le(_i, Bg);
var UD = _i, Ws = _i, Mg = {
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
}, k8 = (e, n, r) => new Promise((o, t) => {
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
}), { name: $8, n: C8 } = ee("tabs-items");
function S8(e, n) {
  const r = Q("var-swipe");
  return g(), ye(r, {
    ref: "swipe",
    class: p(e.n()),
    loop: e.loop,
    duration: e.animated ? void 0 : 0,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: fe(() => [F(e.$slots, "default")]),
    _: 3
  }, 8, [
    "class",
    "loop",
    "duration",
    "touchable",
    "onChange"
  ]);
}
var Ag = _({
  name: $8,
  components: { VarSwipe: Wo },
  props: Mg,
  setup(e) {
    const n = y(null), { tabItemList: r, bindTabItem: o, length: t } = $6();
    o({}), ve(() => e.active, s), ve(() => t.value, () => k8(null, null, function* () {
      yield Pn(), s(e.active);
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
      n: C8,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
Ag.render = S8;
var el = Ag;
te(el);
le(el, Mg);
var HD = el, Ks = el;
function Nu(e, n) {
  return Object.entries(e).reduce((r, [o, t]) => (r[o] = t.includes("px") ? t.replace(/(\d+(\.\d+)?)px/g, (a, i) => n(i)) : t, r), {});
}
var O8 = {
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
}, P8 = {
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
}, z8 = {
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
}, T8 = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e",
  "--avatar-text-color": "#f5f5f5",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-hover-transform": "scale(1.1)"
}, E8 = { "--avatar-group-offset": "-10px" }, I8 = {
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px",
  "--back-top-button-border-radius": "50%"
}, B8 = {
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
}, D8 = {
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-background-color": "var(--color-surface-container-high)",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, M8 = {
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
}, A8 = {
  "--breadcrumb-inactive-color": "#aaa",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, N8 = {
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
}, V8 = {
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
}, R8 = {
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
}, L8 = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, F8 = {
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
}, U8 = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, H8 = {
  "--collapse-text-color": "#fff",
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, j8 = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, Y8 = {
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
}, W8 = {
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
}, K8 = {
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
}, q8 = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, X8 = {
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
}, G8 = {
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
}, Z8 = {
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
}, J8 = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, Q8 = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, x8 = { "--icon-size": "20px" }, _8 = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, e5 = {
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
}, n5 = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, r5 = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, o5 = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, t5 = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, a5 = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, i5 = {
  "--menu-background-color": "#272727",
  "--menu-border-radius": "2px"
}, l5 = {
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
}, s5 = {
  "--menu-select-menu-background-color": "#272727",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0",
  "--menu-select-menu-border-radius": "2px"
}, u5 = {
  "--option-text-color": "#fff",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, d5 = { "--overlay-background-color": "rgba(0, 0, 0, 0.6)" }, c5 = {
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
}, f5 = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "4px"
}, v5 = {
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
}, p5 = {
  "--popup-content-background-color": "var(--color-surface-container-low)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, m5 = {
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
}, h5 = {
  "--pull-refresh-background": "#303030",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, g5 = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, b5 = {
  "--rate-color": "var(--color-text)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, y5 = {
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
}, w5 = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, k5 = {
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
}, $5 = {
  "--signature-background-color": "var(--color-surface-container-highest)",
  "--signature-stroke-color": "#fff",
  "--signature-height": "200px",
  "--signature-border-radius": "4px"
}, C5 = {
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
}, S5 = {
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
}, O5 = {
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
}, P5 = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, z5 = {
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
}, T5 = {
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
}, E5 = {
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
}, I5 = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, B5 = {
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
}, D5 = {
  "--tabs-background": "#1e1e1e",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, M5 = {
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
}, A5 = {
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
}, N5 = {
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
}, V5 = { "--watermark-content-color": "#ffffff" }, R5 = Object.defineProperty, mf = Object.getOwnPropertySymbols, L5 = Object.prototype.hasOwnProperty, F5 = Object.prototype.propertyIsEnumerable, hf = (e, n, r) => n in e ? R5(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, he = (e, n) => {
  for (var r in n || (n = {})) L5.call(n, r) && hf(e, r, n[r]);
  if (mf)
    for (var r of mf(n)) F5.call(n, r) && hf(e, r, n[r]);
  return e;
}, U5 = he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he({
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
}, N8), P8), R8), V8), M5), W8), C5), D5), I5), p5), K8), O8), F8), B8), N5), H8), h5), E5), z5), c5), B5), G8), g5), L8), q8), v5), z8), M8), i5), y5), A8), T8), r5), m5), u5), V5), s5), l5), E8), I8), D8), j8), Y8), X8), Z8), J8), Q8), x8), _8), e5), n5), o5), t5), a5), d5), f5), b5), w5), S5), O5), P5), T5), A5), k5), U8), $5), H5 = {
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
}, j5 = {
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
}, Y5 = {
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
}, W5 = {
  "--avatar-text-color": "#000",
  "--avatar-background-color": "var(--color-primary)",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-border": "2px solid #fff",
  "--avatar-hover-transform": "scale(1.1)"
}, K5 = { "--avatar-group-offset": "-10px" }, q5 = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, X5 = {
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
}, G5 = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, Z5 = {
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
}, J5 = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, Q5 = {
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
}, x5 = {
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
}, _5 = {
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
}, eT = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, nT = {
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
}, rT = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, oT = {
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-text-color": "var(--color-inverse-surface)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, tT = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, aT = {
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
}, iT = {
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
}, lT = {
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
}, sT = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, uT = {
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
}, dT = {
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
}, cT = {
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
}, fT = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, vT = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, pT = { "--icon-size": "20px" }, mT = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, hT = {
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
}, gT = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, bT = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, yT = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, wT = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, kT = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, $T = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, CT = {
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
}, ST = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, OT = {
  "--option-text-color": "var(--color-inverse-surface)",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, PT = { "--overlay-background-color": "rgba(0, 0, 0, 0.6)" }, zT = {
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
}, TT = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "12px"
}, ET = {
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
}, IT = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, BT = {
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
}, DT = {
  "--pull-refresh-background": "var(--color-surface-container-highest)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, MT = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, AT = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, NT = {
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
}, VT = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, RT = {
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
}, LT = {
  "--signature-background-color": "var(--color-surface-container-highest)",
  "--signature-stroke-color": "var(--color-inverse-surface)",
  "--signature-height": "200px",
  "--signature-border-radius": "12px"
}, FT = {
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
}, UT = {
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
}, HT = {
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
}, jT = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, YT = {
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
}, WT = {
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
}, KT = {
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
}, qT = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, XT = {
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
}, GT = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, ZT = {
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
}, JT = {
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
}, QT = {
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
}, xT = { "--watermark-content-color": "#ffffff" }, _T = Object.defineProperty, gf = Object.getOwnPropertySymbols, eE = Object.prototype.hasOwnProperty, nE = Object.prototype.propertyIsEnumerable, bf = (e, n, r) => n in e ? _T(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, ge = (e, n) => {
  for (var r in n || (n = {})) eE.call(n, r) && bf(e, r, n[r]);
  if (gf)
    for (var r of gf(n)) nE.call(n, r) && bf(e, r, n[r]);
  return e;
}, rE = ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge({
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
}, Q5), j5), vT), $T), ST), CT), uT), J5), bT), _5), TT), W5), dT), eT), MT), x5), nT), X5), JT), BT), GT), qT), YT), sT), XT), zT), xT), oT), NT), Y5), G5), Z5), HT), H5), lT), DT), IT), ET), cT), q5), RT), OT), aT), KT), UT), QT), ZT), iT), AT), FT), K5), tT), fT), pT), mT), hT), gT), yT), wT), kT), PT), VT), jT), WT), rT), LT), oE = {
  "--action-sheet-background": "var(--color-surface-container-high)",
  "--action-sheet-title-color": "var(--color-on-surface-variant)",
  "--action-sheet-action-item-color": "#1D1B20",
  "--action-sheet-border-radius": "0px"
}, tE = {
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
}, iE = {
  "--avatar-text-color": "#fff",
  "--avatar-background-color": "var(--color-primary)"
}, lE = { "--avatar-group-offset": "-10px" }, sE = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, uE = {
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
}, dE = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-fab-border-radius": "12px",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px"
}, cE = {
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
}, fE = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, vE = {
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
}, pE = {
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
}, bE = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, yE = {
  "--collapse-background": "var(--color-surface-container-low)",
  "--collapse-text-color": "#1D1B20",
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
}, $E = {
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
}, CE = {
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
}, SE = {
  "--divider-color": "var(--color-outline)",
  "--divider-text-color": "#888",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, OE = {
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
}, PE = {
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
}, zE = {
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
  "--link-default-color": "#000",
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
}, UE = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, HE = {
  "--option-text-color": "#1D1B20",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, jE = { "--overlay-background-color": "rgba(0, 0, 0, 0.6)" }, YE = {
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
}, WE = {
  "--paper-background": "var(--color-surface-container-low)",
  "--paper-border-radius": "12px"
}, KE = {
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
}, qE = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, XE = {
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
}, GE = {
  "--pull-refresh-background": "var(--color-body)",
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
}, xE = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, _E = {
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
}, eI = {
  "--signature-background-color": "var(--color-surface-container-low)",
  "--signature-stroke-color": "#1D1B20",
  "--signature-height": "200px",
  "--signature-border-radius": "12px"
}, nI = {
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
}, rI = {
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
}, oI = {
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
}, tI = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, aI = {
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
}, iI = {
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
}, lI = {
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
}, sI = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, uI = {
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
}, dI = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, cI = {
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
}, fI = {
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
}, vI = {
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
}, pI = { "--watermark-content-color": "#808080" }, mI = Object.defineProperty, yf = Object.getOwnPropertySymbols, hI = Object.prototype.hasOwnProperty, gI = Object.prototype.propertyIsEnumerable, wf = (e, n, r) => n in e ? mI(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, be = (e, n) => {
  for (var r in n || (n = {})) hI.call(n, r) && wf(e, r, n[r]);
  if (yf)
    for (var r of yf(n)) gI.call(n, r) && wf(e, r, n[r]);
  return e;
}, bI = be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be({
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
}, vE), tE), EE), LE), UE), FE), OE), fE), AE), mE), WE), iE), PE), hE), ZE), pE), gE), fI), dI), sI), uI), yE), QE), dE), cE), oI), oE), CE), GE), qE), KE), zE), sE), _E), HE), rI), vI), cI), $E), lI), JE), lE), uE), wE), kE), SE), TE), IE), BE), DE), ME), NE), VE), RE), jE), YE), XE), xE), nI), tI), aI), iI), pI), aE), bE), eI);
function yI(e, n = {}) {
  const { rootFontSize: r = 16, unitPrecision: o = 6 } = n;
  return Nu(e, (t) => `${Number((t / r).toFixed(o))}rem`);
}
function wI(e, n = {}) {
  const { viewportWidth: r = 375, viewportUnit: o = "vmin", unitPrecision: t = 6 } = n;
  return Nu(e, (a) => `${Number((a / r * 100).toFixed(t))}${o}`);
}
var kI = {
  dark: U5,
  md3Light: bI,
  md3Dark: rE,
  toViewport: wI,
  toRem: yI,
  convert: Nu
}, jD = null, qs = kI, Zn = [
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
], Mn = [
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
], kf = [
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
], Ng = {
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
}, Vg = (e, n) => e === "24hr" || n === "am", Vu = (e, n, r) => {
  const o = Zn.findIndex((a) => H(a) === H(r)), t = Vg(e, n) ? r : Mn[o];
  return {
    hourStr: t,
    hourNum: H(t)
  };
}, Vn = (e) => {
  const [n, r, o] = e.split(":");
  return {
    hour: H(n),
    minute: H(r),
    second: H(o)
  };
}, Rg = (e) => {
  var n, r;
  const { time: o, format: t, ampm: a, hour: i, max: l, min: s, disableHour: u } = e, { hourStr: d, hourNum: c } = Vu(t, a, i);
  let f = !1, v = !1;
  if (u.includes(d)) return !0;
  if (l && !s) {
    const { hour: m, minute: h } = Vn(l);
    f = m === c && o > h;
  }
  if (!l && s) {
    const { hour: m, minute: h } = Vn(s);
    f = m === c && o < h;
  }
  if (l && s) {
    const { hour: m, minute: h } = Vn(l), { hour: w, minute: $ } = Vn(s);
    f = w === c && o < $ || m === c && o > h;
  }
  return (n = e.allowedTime) != null && n.minutes && (v = (r = e.allowedTime) == null ? void 0 : r.minutes(o)), f || v;
}, Lg = (e) => {
  var n, r;
  const { time: o, format: t, ampm: a, hour: i, minute: l, max: s, min: u, disableHour: d } = e, { hourStr: c, hourNum: f } = Vu(t, a, i);
  let v = !1, m = !1;
  if (d.includes(c)) return !0;
  if (s && !u) {
    const { hour: h, minute: w, second: $ } = Vn(s);
    v = h === f && w < l || w === l && o > $;
  }
  if (!s && u) {
    const { hour: h, minute: w, second: $ } = Vn(u);
    v = h === f && w > l || w === l && o > $;
  }
  if (s && u) {
    const { hour: h, minute: w, second: $ } = Vn(s), { hour: C, minute: b, second: P } = Vn(u);
    v = h === f && w < l || C === f && b > l || h === f && w === l && o > $ || C === f && b === l && o < P;
  }
  return (n = e.allowedTime) != null && n.seconds && (m = (r = e.allowedTime) == null ? void 0 : r.seconds(o)), v || m;
}, { n: $I, classes: CI } = ee("time-picker");
function SI(e, n) {
  return g(), S("div", { class: p(e.n("clock")) }, [
    N("div", {
      class: p(e.n("clock-hand")),
      style: q(e.handStyle)
    }, null, 6),
    (g(!0), S(Ae, null, Ge(e.timeScales, (r, o) => (g(), S("div", {
      key: r,
      class: p(e.classes(e.n("clock-item"), [e.isActive(o, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
      style: q(e.getStyle(o, r, !1))
    }, ie(r), 7))), 128)),
    e.format === "24hr" && e.type === "hour" ? (g(), S("div", {
      key: 0,
      ref: "inner",
      class: p(e.n("clock-inner"))
    }, [(g(!0), S(Ae, null, Ge(e.hours24, (r, o) => (g(), S("div", {
      key: r,
      class: p(e.classes(e.n("clock-item"), [e.isActive(o, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
      style: q(e.getStyle(o, r, !0))
    }, ie(r), 7))), 128))], 2)) : K("v-if", !0)
  ], 2);
}
var Fg = _({
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
    }), l = E(() => e.type === "hour" ? Zn : kf), s = (h, w) => {
      h = h ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const $ = e.type === "minute" ? Rg : Lg, C = {
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
      const h = e.isInner ? Mn[i.value] : l.value[i.value];
      return l.value === kf ? s() ? "var(--time-picker-clock-item-disable-background)" : e.color : c(h) ? "var(--time-picker-clock-item-disable-background)" : e.color;
    }, d = (h, w) => w ? i.value === h && e.isInner : i.value === h && (!e.isInner || e.type !== "hour"), c = (h) => {
      if (e.type === "hour") {
        if (Vg(e.format, e.ampm)) return o.value.includes(h);
        const w = Zn.findIndex(($) => $ === h);
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
      }, { backgroundColor: I, color: j } = O();
      return {
        left: `${b}%`,
        top: `${P}%`,
        backgroundColor: I,
        color: j
      };
    }, v = () => {
      const { width: h, height: w } = tn(r.value);
      return {
        width: h,
        height: w
      };
    }, m = () => {
      if (i.value !== void 0)
        return Gr((e.ampm === "am" ? Zn : Mn)[i.value], 2, "0");
    };
    return ve([i, () => e.isInner], ([h, w], [$, C]) => {
      if (h === $ && w === C || e.type !== "hour" || i.value === void 0) return;
      const b = w ? Mn[i.value] : m(), P = e.useSeconds ? `:${e.time.second}` : "", O = `${b}:${e.time.minute}${P}`;
      e.preventNextUpdate || n("update", O), n("change-prevent-update");
    }), ve(() => e.rad, (h, w) => {
      if (e.type === "hour" || h === void 0 || w === void 0) return;
      const $ = h / 6 >= 0 ? h / 6 : h / 6 + 60;
      if ($ === (w / 6 >= 0 ? w / 6 : w / 6 + 60)) return;
      let C;
      const { hourStr: b } = Vu(e.format, e.ampm, e.time.hour);
      if (e.type === "minute" && (C = `${b}:${ce().minute($).format("mm")}${e.useSeconds ? `:${e.time.second}` : ""}`), e.type === "second") {
        const P = ce().second($).format("ss"), O = e.useSeconds ? `:${P}` : "";
        C = `${b}:${e.time.minute}${O}`;
      }
      n("update", C);
    }), ve([
      () => e.max,
      () => e.min,
      () => e.allowedTime
    ], ([h, w, $]) => {
      if (o.value = [], h && !w) {
        const { hour: C } = Vn(h), b = Zn.filter((O) => H(O) > C), P = Mn.filter((O) => H(O) > C);
        o.value = [...b, ...P];
      }
      if (!h && w) {
        const { hour: C } = Vn(w), b = Zn.filter((O) => H(O) < C), P = Mn.filter((O) => H(O) < C);
        o.value = [...b, ...P];
      }
      if (h && w) {
        const { hour: C } = Vn(h), { hour: b } = Vn(w), P = Zn.filter((I) => H(I) < b || H(I) > C), O = Mn.filter((I) => H(I) < b || H(I) > C);
        o.value = [...P, ...O];
      }
      if ($?.hours) {
        const { hours: C } = $, b = Zn.filter((O) => !C(H(O))), P = Mn.filter((O) => !C(H(O)));
        o.value = [.../* @__PURE__ */ new Set([
          ...o.value,
          ...b,
          ...P
        ])];
      }
      t.value = o.value.map((C) => Mn.findIndex((b) => C === b)).filter((C) => C >= 0);
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: $I,
      classes: CI,
      hours24: Mn,
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
Fg.render = SI;
var OI = Fg, { name: PI, n: zI, classes: TI } = ee("time-picker");
function EI(e, n) {
  var r;
  const o = Q("clock");
  return g(), S("div", {
    ref: "picker",
    class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
  }, [
    N("div", {
      class: p(e.n("title")),
      style: q({ background: e.titleColor || e.color })
    }, [N("div", { class: p(e.n("title-hint")) }, ie((r = e.hint) != null ? r : (e.pt ? e.pt : e.t)("timePickerHint")), 3), N("div", { class: p(e.n("title-time-container")) }, [N("div", { class: p(e.n("title-time")) }, [
      N("div", {
        class: p(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
        onClick: n[0] || (n[0] = (t) => e.checkPanel("hour"))
      }, ie(e.time.hour), 3),
      N("span", { class: p(e.n("title-splitter")) }, ":", 2),
      N("div", {
        class: p(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
        onClick: n[1] || (n[1] = (t) => e.checkPanel("minute"))
      }, ie(e.time.minute), 3),
      e.useSeconds ? (g(), S("span", {
        key: 0,
        class: p(e.n("title-splitter"))
      }, ":", 2)) : K("v-if", !0),
      e.useSeconds ? (g(), S("div", {
        key: 1,
        class: p(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
        onClick: n[2] || (n[2] = (t) => e.checkPanel("second"))
      }, ie(e.time.second), 3)) : K("v-if", !0)
    ], 2), e.format === "ampm" ? (g(), S("div", {
      key: 0,
      class: p(e.n("title-ampm"))
    }, [N("div", {
      class: p(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
      onClick: n[3] || (n[3] = (t) => e.checkAmpm("am"))
    }, " AM ", 2), N("div", {
      class: p(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
      onClick: n[4] || (n[4] = (t) => e.checkAmpm("pm"))
    }, " PM ", 2)], 2)) : K("v-if", !0)], 2)], 6),
    N("div", { class: p(e.n("body")) }, [N("div", {
      ref: "container",
      class: p(e.n("clock-container")),
      onTouchstart: n[5] || (n[5] = (...t) => e.moveHand && e.moveHand(...t)),
      onTouchmove: n[6] || (n[6] = (...t) => e.moveHand && e.moveHand(...t)),
      onTouchend: n[7] || (n[7] = (...t) => e.end && e.end(...t))
    }, [X(nn, { name: `${e.n()}-panel-fade` }, {
      default: fe(() => [(g(), ye(o, {
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
    }, [F(e.$slots, "actions")], 2)) : K("v-if", !0)
  ], 2);
}
var Ug = _({
  name: PI,
  components: { Clock: OI },
  props: Ng,
  setup(e) {
    const n = y(null), r = y(null), o = y(null), t = y(!1), a = y(!1), i = y(!1), l = y(!1), s = y(!1), u = y(!1), d = y(!1), c = y(0), f = y(0), v = y(), m = y("hour"), h = y("am"), w = y({
      hour: "00",
      minute: "00",
      second: "00"
    }), $ = rn({
      x: 0,
      y: 0
    }), C = rn({
      x: [],
      y: []
    }), b = E(() => m.value === "hour" ? v.value : m.value === "minute" ? c.value : f.value), { t: P } = ir();
    ve(() => e.modelValue, (W) => {
      if (W === void 0 || W === "") {
        O();
        return;
      }
      const { hour: G, minute: se, second: me } = Vn(W), Y = ce().hour(G).format("hh"), ne = ce().hour(G).format("HH"), Se = ce().minute(se).format("mm"), Ve = ce().second(me).format("ss");
      v.value = (Y === "12" ? 0 : H(Y)) * 30, c.value = H(Se) * 6, f.value = H(Ve) * 6, w.value = D(W), e.format !== "24hr" && (h.value = Gr(`${G}`, 2, "0") === ne && Mn.includes(ne) ? "pm" : "am"), t.value = e.format === "24hr" && Mn.includes(ne);
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
    function j(W) {
      return W * 57.29577951308232;
    }
    function M(W) {
      l.value = !1, d.value = !1, m.value = W;
    }
    function A(W) {
      const { disableHour: G } = o.value, se = Zn.findIndex((Y) => H(Y) === H(w.value.hour)), me = W === "am" ? Zn : Mn;
      return [...me.slice(se), ...me.slice(0, se)].find((Y, ne) => (a.value = ne !== 0, !G.includes(Y)));
    }
    function B(W) {
      if (e.readonly) return;
      h.value = W;
      const G = A(W);
      if (!G) return;
      const se = e.useSeconds ? `:${w.value.second}` : "";
      I(`${Gr(G, 2, "0")}:${w.value.minute}${se}`);
    }
    function T(W, G) {
      const se = W >= C.x[0] && W <= C.x[1], me = G >= C.y[0] && G <= C.y[1];
      return se && me;
    }
    function D(W) {
      const G = e.format === "24hr" ? "HH" : "hh", { hour: se, minute: me, second: Y } = Vn(W);
      return {
        hour: ce().hour(se).format(G),
        minute: ce().minute(me).format("mm"),
        second: ce().second(Y).format("ss")
      };
    }
    function U(W) {
      const G = W / 30;
      return G >= 0 ? G : G + 12;
    }
    function L() {
      const { width: W, height: G } = o.value.getSize();
      return {
        rangeXMin: $.x - W / 2 - 8,
        rangeXMax: $.x + W / 2 + 8,
        rangeYMin: $.y - G / 2 - 8,
        rangeYMax: $.y + G / 2 + 8
      };
    }
    function z(W, G, se) {
      const { disableHour: me } = o.value;
      i.value = T(W, G);
      const Y = Math.round(se / 30) * 30 + 90, ne = U(Y), Se = t.value ? Zn[ne] : Mn[ne];
      if (me.includes(Se) || (t.value = e.format === "24hr" ? T(W, G) : !1), t.value !== i.value) return;
      const Ve = t.value || h.value === "pm" ? Mn[ne] : Zn[ne];
      u.value = me.includes(Ve), !u.value && (v.value = Y, l.value = !0);
    }
    function V(W) {
      const { disableHour: G } = o.value, se = Math.round(W / 6) * 6 + 90;
      d.value = Rg({
        time: se / 6 >= 0 ? se / 6 : se / 6 + 60,
        format: e.format,
        ampm: h.value,
        hour: w.value.hour,
        max: e.max,
        min: e.min,
        disableHour: G,
        allowedTime: e.allowedTime
      }), !d.value && (c.value = se, s.value = !0);
    }
    function ae(W) {
      const { disableHour: G } = o.value, se = Math.round(W / 6) * 6 + 90;
      Lg({
        time: se / 6 >= 0 ? se / 6 : se / 6 + 60,
        format: e.format,
        ampm: h.value,
        hour: w.value.hour,
        minute: H(w.value.minute),
        max: e.max,
        min: e.min,
        disableHour: G,
        allowedTime: e.allowedTime
      }) || (f.value = se);
    }
    function Z() {
      const { left: W, top: G, width: se, height: me } = tn(n.value);
      if ($.x = W + se / 2, $.y = G + me / 2, m.value === "hour" && e.format === "24hr") {
        const { rangeXMin: Y, rangeXMax: ne, rangeYMin: Se, rangeYMax: Ve } = L();
        C.x = [Y, ne], C.y = [Se, Ve];
      }
    }
    function re(W) {
      if (Re(W), e.readonly) return;
      Z();
      const { clientX: G, clientY: se } = W.touches[0], me = G - $.x, Y = se - $.y, ne = Math.round(j(Math.atan2(Y, me)));
      m.value === "hour" ? z(G, se, ne) : m.value === "minute" ? V(ne) : ae(ne);
    }
    function Ce() {
      if (!e.readonly) {
        if (m.value === "hour" && l.value) {
          m.value = "minute";
          return;
        }
        m.value === "minute" && e.useSeconds && s.value && (m.value = "second");
      }
    }
    function oe() {
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
      n: zI,
      classes: TI,
      t: ln,
      pt: P,
      moveHand: re,
      checkPanel: M,
      checkAmpm: B,
      end: Ce,
      update: I,
      changePreventUpdate: oe,
      formatElevation: vn
    };
  }
});
Ug.render = EI;
var nl = Ug;
te(nl);
le(nl, Ng);
var YD = nl, Xs = nl, Hg = {
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
}, Tt = (e, n, r) => new Promise((o, t) => {
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
}), { name: II, n: BI, classes: DI } = ee("uploader"), MI = 0, AI = ["onClick"], NI = ["onClick"], VI = ["src", "alt"], RI = ["tabindex"], LI = [
  "multiple",
  "accept",
  "capture",
  "disabled"
], FI = ["src"];
function UI(e, n) {
  const r = Q("var-icon"), o = Q("var-hover-overlay"), t = Q("var-form-details"), a = Q("var-popup"), i = qe("ripple"), l = qe("hover");
  return g(), S("div", { class: p(e.classes(e.n(), e.n("$--box"))) }, [
    N("div", { class: p(e.n("file-list")) }, [(g(!0), S(Ae, null, Ge(e.files, (s) => Ne((g(), S("div", {
      key: s.id,
      class: p(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
      onClick: (u) => e.preview(s)
    }, [
      N("div", { class: p(e.n("file-name")) }, ie(s.name || s.url), 3),
      e.removable ? F(e.$slots, "remove-button", {
        key: 0,
        remove: () => {
          e.handleRemove(s);
        }
      }, () => [N("div", {
        class: p(e.n("file-close")),
        onClick: jn((u) => e.handleRemove(s), ["stop"])
      }, [X(r, {
        class: p(e.n("file-close-icon")),
        "var-uploader-cover": "",
        name: "delete"
      }, null, 8, ["class"])], 10, NI)]) : K("v-if", !0),
      s.cover ? (g(), S("img", {
        key: 1,
        role: "img",
        class: p(e.n("file-cover")),
        style: q({ objectFit: s.fit }),
        src: s.cover,
        alt: s.name
      }, null, 14, VI)) : K("v-if", !0),
      N("div", { class: p(e.n("file-indicator")) }, [N("div", {
        class: p(e.classes(e.n("progress"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")])),
        style: q({ width: s.state === "success" || s.state === "error" ? "100%" : `${s.progress}%` })
      }, null, 6)], 2)
    ], 10, AI)), [[i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple }]])), 128)), !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Ne((g(), S("div", {
      key: 0,
      ref: "actionRef",
      class: p(e.classes(e.n("--outline-none"), [!e.$slots.default, `${e.n("action")} ${e.formatElevation(e.elevation, 2)}`], [e.disabled || e.formDisabled, e.n("--disabled")])),
      tabindex: e.disabled || e.formDisabled ? void 0 : "0",
      onClick: n[2] || (n[2] = (...s) => e.handleActionClick && e.handleActionClick(...s)),
      onFocus: n[3] || (n[3] = (s) => e.isFocusing = !0),
      onBlur: n[4] || (n[4] = (s) => e.isFocusing = !1)
    }, [N("input", {
      ref: "input",
      type: "file",
      class: p(e.n("action-input")),
      multiple: e.multiple,
      accept: e.accept,
      capture: e.capture,
      disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
      onChange: n[0] || (n[0] = (...s) => e.handleChange && e.handleChange(...s)),
      onClick: n[1] || (n[1] = jn(() => {
      }, ["stop"]))
    }, null, 42, LI), F(e.$slots, "default", {}, () => [X(r, {
      class: p(e.n("action-icon")),
      "var-uploader-cover": "",
      name: "plus"
    }, null, 8, ["class"]), X(o, {
      hovering: e.hovering && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly,
      focusing: e.isFocusing && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly
    }, null, 8, ["hovering", "focusing"])])], 42, RI)), [[i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || !!e.$slots.default }], [
      l,
      e.handleHovering,
      "desktop"
    ]]) : K("v-if", !0)], 2),
    X(t, {
      "error-message": e.errorMessage,
      "extra-message": e.maxlengthText
    }, Wr({ _: 2 }, [e.$slots["extra-message"] ? {
      name: "extra-message",
      fn: fe(() => [F(e.$slots, "extra-message")]),
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
      default: fe(() => {
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
        }, null, 10, FI)) : K("v-if", !0)];
      }),
      _: 1
    }, 8, ["show", "class"])
  ], 2);
}
var jg = _({
  name: II,
  directives: {
    Ripple: un,
    Hover: Rn
  },
  components: {
    VarIcon: xe,
    VarPopup: Dr,
    VarFormDetails: An,
    VarHoverOverlay: Wn
  },
  props: Hg,
  setup(e) {
    const n = y(!1), r = y(null), o = y(null), t = y(!1), a = y(null), i = E(() => {
      const { maxlength: oe, modelValue: { length: W } } = e;
      return En(oe) ? `${W} / ${oe}` : "";
    }), { form: l, bindForm: s } = Xn(), { errorMessage: u, validateWithTrigger: d, validate: c, resetValidation: f } = qn(), { hovering: v, handleHovering: m } = or(), h = E(() => {
      const { modelValue: oe, hideList: W } = e;
      return W ? [] : oe;
    });
    let w = !1;
    const $ = {
      getSuccess: U,
      getError: L,
      getLoading: z
    };
    k(s, {
      validate: re,
      resetValidation: f,
      reset: Ce
    }), Ye(() => window, "keydown", C), Ye(() => window, "keyup", b), ve(() => e.modelValue, () => {
      !w && Z("onChange"), w = !1;
    }, { deep: !0 });
    function C(oe) {
      n.value && ((oe.key === " " || oe.key === "Enter") && oe.preventDefault(), oe.key === "Enter" && r.value.click());
    }
    function b(oe) {
      !n.value || oe.key !== " " || (oe.preventDefault(), r.value.click());
    }
    function P(oe) {
      const { disabled: W, previewed: G, preventDefaultPreview: se, onPreview: me } = e;
      if (l?.disabled.value || W || !G || (k(me, rn(oe)), se)) return;
      const { url: Y } = oe;
      if (Nd(Y)) {
        qo(Y);
        return;
      }
      Vd(Y) && (a.value = oe, t.value = !0);
    }
    function O(oe) {
      return {
        id: MI++,
        url: "",
        cover: "",
        name: oe.name,
        file: oe,
        progress: 0
      };
    }
    function I(oe) {
      const { files: W } = oe.target;
      return Array.from(W);
    }
    function j(oe) {
      return Tt(this, null, function* () {
        const W = oe.file;
        if (e.resolveType === "default" && W.type.startsWith("image") || e.resolveType === "data-url") {
          const G = yield Zf(W);
          oe.cover = G, oe.url = G;
        }
        return oe;
      });
    }
    function M(oe) {
      return oe.map(j);
    }
    function A(oe) {
      const { onBeforeRead: W } = e;
      return oe.map((G) => new Promise((se) => {
        W || se({
          valid: !0,
          varFile: G
        });
        const me = mr(k(W, rn(G)));
        Promise.all(me).then((Y) => {
          se({
            valid: Y.every(Boolean),
            varFile: G
          });
        });
      }));
    }
    function B(oe) {
      return Tt(this, null, function* () {
        const { maxsize: W, maxlength: G, modelValue: se, onOversize: me, onAfterRead: Y, onBeforeFilter: ne, readonly: Se, disabled: Ve } = e;
        if (l?.disabled.value || l?.readonly.value || Ve || Se) return;
        const Ze = (J) => J.filter((ue) => ue.file.size > H(W) ? (k(me, rn(ue)), !1) : !0), Le = (J) => {
          const ue = Math.min(J.length, H(G) - se.length);
          return J.slice(0, ue);
        }, bn = (J) => Tt(null, null, function* () {
          if (!ne) return J;
          const ue = mr(ne);
          for (const Te of ue) J = yield Te(J);
          return J;
        });
        let en = I(oe).map(O);
        en = yield bn(en), en = W != null ? Ze(en) : en, en = G != null ? Le(en) : en;
        const pe = yield Promise.all(M(en)), Ue = (yield Promise.all(A(pe))).filter(({ valid: J }) => J).map(({ varFile: J }) => J);
        k(e["onUpdate:modelValue"], [...se, ...Ue]), oe.target.value = "", Ue.forEach((J) => k(Y, rn(J)));
      });
    }
    function T(oe) {
      return Tt(this, null, function* () {
        const { disabled: W, readonly: G, modelValue: se, onBeforeRemove: me, onRemove: Y } = e;
        if (l?.disabled.value || l?.readonly.value || W || G) return;
        if (me) {
          const Se = mr(k(me, rn(oe)));
          if ((yield Promise.all(Se)).some((Ve) => !Ve)) return;
        }
        const ne = se.filter((Se) => Se !== oe);
        k(Y, rn(oe)), Z("onRemove"), k(e["onUpdate:modelValue"], ne);
      });
    }
    function D(oe) {
      if (!(l?.disabled.value || e.disabled)) {
        if (e.onClickAction) {
          k(e.onClickAction, V, oe);
          return;
        }
        V();
      }
    }
    function U() {
      return e.modelValue.filter((oe) => oe.state === "success");
    }
    function L() {
      return e.modelValue.filter((oe) => oe.state === "error");
    }
    function z() {
      return e.modelValue.filter((oe) => oe.state === "loading");
    }
    function V() {
      o.value.click();
    }
    function ae() {
      a.value = null, t.value = !1, qo.close();
    }
    function Z(oe) {
      Fe(() => {
        const { validateTrigger: W, rules: G, modelValue: se } = e;
        d(W, oe, G, se, $);
      });
    }
    function re() {
      return c(e.rules, e.modelValue, $);
    }
    function Ce() {
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
      n: BI,
      classes: DI,
      formatElevation: vn,
      toNumber: H,
      handleHovering: m,
      isHTMLSupportVideo: Vd,
      isHTMLSupportImage: Nd,
      preview: P,
      handleChange: B,
      handleRemove: T,
      getSuccess: U,
      getError: L,
      getLoading: z,
      validate: re,
      resetValidation: f,
      reset: Ce,
      chooseFile: V,
      closePreview: ae,
      handleActionClick: D,
      toSizeUnit: ze
    };
  }
});
jg.render = UI;
var rl = jg;
te(rl);
le(rl, Hg);
var WD = rl, Gs = rl, Yg = {
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
}, HI = Object.defineProperty, jI = Object.defineProperties, YI = Object.getOwnPropertyDescriptors, $f = Object.getOwnPropertySymbols, WI = Object.prototype.hasOwnProperty, KI = Object.prototype.propertyIsEnumerable, Cf = (e, n, r) => n in e ? HI(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, qI = (e, n) => {
  for (var r in n || (n = {})) WI.call(n, r) && Cf(e, r, n[r]);
  if ($f)
    for (var r of $f(n)) KI.call(n, r) && Cf(e, r, n[r]);
  return e;
}, XI = (e, n) => jI(e, YI(n)), GI = (e, n, r) => new Promise((o, t) => {
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
}), { name: ZI, n: JI, classes: QI } = ee("watermark"), xI = { ref: "svgRef" }, _I = [
  "viewBox",
  "width",
  "height"
], eB = ["width", "height"], nB = [
  "href",
  "xlink:href",
  "x",
  "y",
  "width",
  "height"
];
function rB(e, n) {
  return g(), S("div", { class: p(e.n()) }, [F(e.$slots, "default"), (g(), ye(cr, {
    to: "body",
    disabled: !e.fullscreen
  }, [N("div", {
    ref: "containerRef",
    class: p(e.classes(e.n("container"), [e.fullscreen, e.n("--fullscreen")])),
    style: q({
      backgroundImage: `url(${e.watermarkUrl})`,
      zIndex: e.zIndex
    })
  }, [Ne(N("div", xI, [(g(), S("svg", {
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
  }, [N("div", {
    xmlns: "http://www.w3.org/1999/xhtml",
    style: q({
      transform: `translate(${e.offsetX}px, ${e.offsetY}px) rotate(${e.rotate}deg)`,
      transformOrigin: "center"
    })
  }, [F(e.$slots, "content", {}, () => [N("span", { style: q(XI(qI({}, e.font), {
    fontSize: `${e.font.fontSize}px`,
    color: e.textColor
  })) }, ie(e.content), 5)])], 4)], 8, eB)) : K("v-if", !0), !e.$slots.content && e.image ? (g(), S("image", {
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
  }, null, 12, nB)) : K("v-if", !0)], 12, _I))], 512), [[_n, !1]])], 6)], 8, ["disabled"]))], 2);
}
var Wg = _({
  name: ZI,
  props: Yg,
  setup(e, { slots: n }) {
    const r = y(""), o = y(""), t = y(""), a = y(null), i = y(null);
    ve(() => [
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
    ], c, { deep: !0 }), gr(c), Jo(d);
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
      return GI(this, null, function* () {
        t.value = er(i.value).color, e.image && (o.value = yield s()), yield Fe(), d(), r.value = u(a.value.innerHTML);
      });
    }
    return {
      svgRef: a,
      containerRef: i,
      watermarkUrl: r,
      imageUrl: o,
      textColor: t,
      n: JI,
      classes: QI,
      showContent: l,
      resize: c
    };
  }
});
Wg.render = rB;
var ol = Wg;
te(ol);
le(ol, Yg);
var KD = ol, Zs = ol, oB = "3.15.1";
function tB(e) {
  Cl.install && e.use(Cl), Sl.install && e.use(Sl), Ol.install && e.use(Ol), Tl.install && e.use(Tl), Bl.install && e.use(Bl), Dl.install && e.use(Dl), Ml.install && e.use(Ml), _t.install && e.use(_t), Al.install && e.use(Al), Nl.install && e.use(Nl), Vl.install && e.use(Vl), Rl.install && e.use(Rl), Nn.install && e.use(Nn), Ll.install && e.use(Ll), Fl.install && e.use(Fl), Ul.install && e.use(Ul), to.install && e.use(to), Hl.install && e.use(Hl), ea.install && e.use(ea), Yl.install && e.use(Yl), Wl.install && e.use(Wl), Kl.install && e.use(Kl), ql.install && e.use(ql), Xl.install && e.use(Xl), Hn.install && e.use(Hn), Gl.install && e.use(Gl), xl.install && e.use(xl), os.install && e.use(os), as.install && e.use(as), is.install && e.use(is), ls.install && e.use(ls), ia.install && e.use(ia), ss.install && e.use(ss), us.install && e.use(us), Vo.install && e.use(Vo), ds.install && e.use(ds), cs.install && e.use(cs), An.install && e.use(An), fs.install && e.use(fs), Rn.install && e.use(Rn), Wn.install && e.use(Wn), xe.install && e.use(xe), vs.install && e.use(vs), qo.install && e.use(qo), ps.install && e.use(ps), ms.install && e.use(ms), Ro.install && e.use(Ro), jo.install && e.use(jo), hs.install && e.use(hs), gs.install && e.use(gs), uo.install && e.use(uo), bs.install && e.use(bs), kl.install && e.use(kl), ys.install && e.use(ys), Uo.install && e.use(Uo), ao.install && e.use(ao), Ho.install && e.use(Ho), sa.install && e.use(sa), ws.install && e.use(ws), ks.install && e.use(ks), $s.install && e.use($s), Cs.install && e.use(Cs), Dr.install && e.use(Dr), Ss.install && e.use(Ss), Os.install && e.use(Os), ua.install && e.use(ua), Ps.install && e.use(Ps), zs.install && e.use(zs), Ts.install && e.use(Ts), un.install && e.use(un), Es.install && e.use(Es), Is.install && e.use(Is), Bs.install && e.use(Bs), Ds.install && e.use(Ds), Ms.install && e.use(Ms), Ns.install && e.use(Ns), Vs.install && e.use(Vs), Rs.install && e.use(Rs), Ls.install && e.use(Ls), fo.install && e.use(fo), Fs.install && e.use(Fs), Wo.install && e.use(Wo), Ko.install && e.use(Ko), Us.install && e.use(Us), Hs.install && e.use(Hs), js.install && e.use(js), Ys.install && e.use(Ys), Ws.install && e.use(Ws), Ks.install && e.use(Ks), qs.install && e.use(qs), Xs.install && e.use(Xs), la.install && e.use(la), Gs.install && e.use(Gs), Zs.install && e.use(Zs);
}
var qD = {
  version: oB,
  install: tB,
  ActionSheet: Cl,
  Alert: Sl,
  AppBar: Ol,
  AutoComplete: Tl,
  Avatar: Bl,
  AvatarGroup: Dl,
  BackTop: Ml,
  Badge: _t,
  BottomNavigation: Al,
  BottomNavigationItem: Nl,
  Breadcrumb: Vl,
  Breadcrumbs: Rl,
  Button: Nn,
  ButtonGroup: Ll,
  Card: Fl,
  Cell: Ul,
  Checkbox: to,
  CheckboxGroup: Hl,
  Chip: ea,
  Code: Yl,
  Col: Wl,
  Collapse: Kl,
  CollapseItem: ql,
  CollapseTransition: Xl,
  Context: Hn,
  CountTo: Gl,
  Countdown: xl,
  Counter: os,
  DatePicker: as,
  Dialog: is,
  Divider: ls,
  Drag: ia,
  Ellipsis: ss,
  Fab: us,
  FieldDecorator: Vo,
  FloatingPanel: ds,
  Form: cs,
  FormDetails: An,
  HighlighterProvider: fs,
  Hover: Rn,
  HoverOverlay: Wn,
  Icon: xe,
  Image: vs,
  ImagePreview: qo,
  IndexAnchor: ps,
  IndexBar: ms,
  Input: Ro,
  Lazy: jo,
  Link: hs,
  List: gs,
  Loading: uo,
  LoadingBar: bs,
  Locale: kl,
  LocaleProvider: ys,
  Menu: Uo,
  MenuOption: ao,
  MenuSelect: Ho,
  Option: sa,
  Overlay: ws,
  Pagination: ks,
  Paper: $s,
  Picker: Cs,
  Popup: Dr,
  Progress: Ss,
  PullRefresh: Os,
  Radio: ua,
  RadioGroup: Ps,
  Rate: zs,
  Result: Ts,
  Ripple: un,
  Row: Es,
  Select: Is,
  Signature: Bs,
  Skeleton: Ds,
  Slider: Ms,
  Snackbar: Ns,
  Space: Vs,
  Step: Rs,
  Steps: Ls,
  Sticky: fo,
  StyleProvider: Fs,
  Swipe: Wo,
  SwipeItem: Ko,
  Switch: Us,
  Tab: Hs,
  TabItem: js,
  Table: Ys,
  Tabs: Ws,
  TabsItems: Ks,
  Themes: qs,
  TimePicker: Xs,
  Tooltip: la,
  Uploader: Gs,
  Watermark: Zs
};
export {
  Cl as ActionSheet,
  Sl as Alert,
  Ol as AppBar,
  Tl as AutoComplete,
  Bl as Avatar,
  Dl as AvatarGroup,
  Ml as BackTop,
  _t as Badge,
  Al as BottomNavigation,
  Nl as BottomNavigationItem,
  Vl as Breadcrumb,
  Rl as Breadcrumbs,
  Nn as Button,
  Ll as ButtonGroup,
  Fl as Card,
  Ul as Cell,
  to as Checkbox,
  Hl as CheckboxGroup,
  ea as Chip,
  Yl as Code,
  Wl as Col,
  Kl as Collapse,
  ql as CollapseItem,
  Xl as CollapseTransition,
  Hn as Context,
  Gl as CountTo,
  xl as Countdown,
  os as Counter,
  as as DatePicker,
  is as Dialog,
  ls as Divider,
  ia as Drag,
  ss as Ellipsis,
  us as Fab,
  Vo as FieldDecorator,
  ds as FloatingPanel,
  cs as Form,
  An as FormDetails,
  fs as HighlighterProvider,
  Rn as Hover,
  Wn as HoverOverlay,
  xe as Icon,
  vs as Image,
  qo as ImagePreview,
  ps as IndexAnchor,
  ms as IndexBar,
  Ro as Input,
  jo as Lazy,
  hs as Link,
  gs as List,
  uo as Loading,
  bs as LoadingBar,
  kl as Locale,
  ys as LocaleProvider,
  Uo as Menu,
  ao as MenuOption,
  Ho as MenuSelect,
  sa as Option,
  ws as Overlay,
  Il as PIXEL,
  ks as Pagination,
  $s as Paper,
  Cs as Picker,
  Dr as Popup,
  Ss as Progress,
  Os as PullRefresh,
  ua as Radio,
  Ps as RadioGroup,
  zs as Rate,
  Ts as Result,
  un as Ripple,
  Es as Row,
  cg as SNACKBAR_TYPE,
  Is as Select,
  Bs as Signature,
  Ds as Skeleton,
  Ms as Slider,
  Ns as Snackbar,
  Vs as Space,
  Rs as Step,
  Ls as Steps,
  fo as Sticky,
  Fs as StyleProvider,
  Wo as Swipe,
  Ko as SwipeItem,
  Us as Switch,
  Hs as Tab,
  js as TabItem,
  Ys as Table,
  Ws as Tabs,
  Ks as TabsItems,
  qs as Themes,
  Xs as TimePicker,
  la as Tooltip,
  Gs as Uploader,
  Zs as Watermark,
  vB as _ActionSheetComponent,
  pB as _AlertComponent,
  mB as _AppBarComponent,
  CB as _AutoCompleteComponent,
  OB as _AvatarComponent,
  PB as _AvatarGroupComponent,
  EB as _BackTopComponent,
  IB as _BadgeComponent,
  BB as _BottomNavigationComponent,
  DB as _BottomNavigationItemComponent,
  MB as _BreadcrumbComponent,
  AB as _BreadcrumbsComponent,
  TB as _ButtonComponent,
  NB as _ButtonGroupComponent,
  VB as _CardComponent,
  RB as _CellComponent,
  yB as _CheckboxComponent,
  LB as _CheckboxGroupComponent,
  FB as _ChipComponent,
  UB as _CodeComponent,
  HB as _ColComponent,
  jB as _CollapseComponent,
  YB as _CollapseItemComponent,
  WB as _CollapseTransitionComponent,
  lB as _ContextComponent,
  KB as _CountToComponent,
  qB as _CountdownComponent,
  XB as _CounterComponent,
  ZB as _DatePickerComponent,
  JB as _DialogComponent,
  QB as _DividerComponent,
  xB as _DragComponent,
  eD as _EllipsisComponent,
  nD as _FabComponent,
  gB as _FieldDecoratorComponent,
  rD as _FloatingPanelComponent,
  oD as _FormComponent,
  hB as _FormDetailsComponent,
  tD as _HighlighterProviderComponent,
  dB as _HoverComponent,
  cB as _HoverOverlayComponent,
  fB as _IconComponent,
  aD as _ImageComponent,
  sD as _ImagePreviewComponent,
  uD as _IndexAnchorComponent,
  dD as _IndexBarComponent,
  bB as _InputComponent,
  SB as _LazyComponent,
  cD as _LinkComponent,
  fD as _ListComponent,
  vD as _LoadingBarComponent,
  zB as _LoadingComponent,
  iB as _LocaleComponent,
  pD as _LocaleProviderComponent,
  kB as _MenuComponent,
  wB as _MenuOptionComponent,
  $B as _MenuSelectComponent,
  mD as _OptionComponent,
  hD as _OverlayComponent,
  gD as _PaginationComponent,
  bD as _PaperComponent,
  yD as _PickerComponent,
  sB as _PopupComponent,
  wD as _ProgressComponent,
  kD as _PullRefreshComponent,
  $D as _RadioComponent,
  CD as _RadioGroupComponent,
  SD as _RateComponent,
  OD as _ResultComponent,
  uB as _RippleComponent,
  PD as _RowComponent,
  zD as _SelectComponent,
  TD as _SignatureComponent,
  ED as _SkeletonComponent,
  ID as _SliderComponent,
  BD as _SnackbarComponent,
  DD as _SpaceComponent,
  MD as _StepComponent,
  AD as _StepsComponent,
  GB as _StickyComponent,
  ND as _StyleProviderComponent,
  iD as _SwipeComponent,
  lD as _SwipeItemComponent,
  VD as _SwitchComponent,
  RD as _TabComponent,
  LD as _TabItemComponent,
  FD as _TableComponent,
  UD as _TabsComponent,
  HD as _TabsItemsComponent,
  jD as _ThemesComponent,
  YD as _TimePickerComponent,
  _B as _TooltipComponent,
  WD as _UploaderComponent,
  KD as _WatermarkComponent,
  Tv as actionSheetProps,
  su as add,
  Iv as alertProps,
  Dv as appBarProps,
  pp as avatarGroupProps,
  fp as avatarProps,
  wp as backTopProps,
  $p as badgeProps,
  zp as bottomNavigationItemProps,
  Sp as bottomNavigationProps,
  Ep as breadcrumbProps,
  Dp as breadcrumbsProps,
  Ap as buttonGroupProps,
  gp as buttonProps,
  Vp as cardProps,
  Lp as cellProps,
  Up as checkboxGroupProps,
  Hv as checkboxProps,
  jp as chipProps,
  Wp as codeProps,
  qp as colProps,
  _p as collapseItemProps,
  Zp as collapseProps,
  nm as collapseTransitionProps,
  om as countToProps,
  am as countdownProps,
  bm as counterProps,
  av as currentMessage,
  Om as datePickerProps,
  qD as default,
  mn as defaultLazyOptions,
  Am as dialogProps,
  Vm as dividerProps,
  Lm as dragProps,
  jm as ellipsisProps,
  ev as enUS,
  nv as faIR,
  Wm as fabProps,
  Sa as fieldDecoratorProps,
  Av as formDetailsProps,
  Xm as formProps,
  $v as hoverOverlayProps,
  sn as iconProps,
  lp as imageCache,
  eh as imagePreviewProps,
  Jm as imageProps,
  rh as indexAnchorProps,
  ah as indexBarProps,
  mu as inputProps,
  tB as install,
  lh as linkProps,
  uh as listProps,
  B6 as loadingBarProps,
  vr as loadingProps,
  Wv as menuOptionProps,
  hu as menuProps,
  Qt as menuSelectProps,
  iv as merge,
  tv as messages,
  $h as optionProps,
  Oh as overlayProps,
  Ph as paginationProps,
  Th as paperProps,
  Ih as pickerProps,
  bo as popupProps,
  Dh as progressProps,
  Ah as pullRefreshProps,
  Fh as radioGroupProps,
  Vh as radioProps,
  Hh as rateProps,
  Yh as resultProps,
  Qh as rowProps,
  _h as selectProps,
  rg as signatureProps,
  tg as skeletonProps,
  ig as sliderProps,
  Mu as snackbarProps,
  pg as spaceProps,
  mg as stepProps,
  bg as stepsProps,
  Io as stickyProps,
  wg as styleProviderProps,
  Tu as swipeProps,
  $g as switchProps,
  ln as t,
  zg as tabItemProps,
  Sg as tabProps,
  Eg as tableProps,
  Mg as tabsItemsProps,
  Bg as tabsProps,
  Ng as timePickerProps,
  Um as tooltipProps,
  Hg as uploaderProps,
  uu as use,
  or as useHoverOverlay,
  lu as useLocale,
  oB as version,
  Yg as watermarkProps,
  au as zhCN,
  ov as zhHK,
  iu as zhTW
};
