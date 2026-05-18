import { Comment as nb, Fragment as De, Teleport as cr, Transition as en, TransitionGroup as rb, computed as T, createApp as ob, createBlock as Ce, createCommentVNode as X, createElementBlock as C, createElementVNode as R, createSlots as Xr, createTextVNode as Ae, createVNode as G, defineComponent as oe, getCurrentInstance as Qr, guardReactiveProps as ma, h as xo, inject as nu, isRef as tb, isVNode as ab, mergeProps as Ye, nextTick as Ne, normalizeClass as p, normalizeProps as Kr, normalizeStyle as Z, onActivated as Vr, onBeforeMount as ib, onBeforeUnmount as ha, onDeactivated as mo, onMounted as br, onUnmounted as _o, onUpdated as et, openBlock as g, provide as ru, reactive as nn, ref as y, renderList as qe, renderSlot as F, resolveComponent as ne, resolveDirective as We, resolveDynamicComponent as ho, shallowRef as lb, toDisplayString as fe, unref as ou, useSlots as sb, vModelText as If, vShow as xn, watch as me, withCtx as pe, withDirectives as Re, withKeys as Hu, withModifiers as jn } from "vue";
var wl = Object.defineProperty, ub = Object.getOwnPropertyDescriptor, db = Object.getOwnPropertyNames, cb = Object.prototype.hasOwnProperty, Bf = (e, n) => {
  let r = {};
  for (var o in e) wl(r, o, {
    get: e[o],
    enumerable: !0
  });
  return n || wl(r, Symbol.toStringTag, { value: "Module" }), r;
}, ju = (e, n, r, o) => {
  if (n && typeof n == "object" || typeof n == "function") for (var t = db(n), a = 0, i = t.length, l; a < i; a++)
    l = t[a], !cb.call(e, l) && l !== r && wl(e, l, {
      get: ((s) => n[s]).bind(null, l),
      enumerable: !(o = ub(n, l)) || o.enumerable
    });
  return e;
}, fb = (e, n, r) => (ju(e, n, "default"), r && ju(r, n, "default"));
function He(e) {
  return Array.isArray(e);
}
function an(e) {
  return typeof e == "string";
}
function mn(e) {
  return typeof e == "function";
}
function ro(e, ...n) {
  return mn(e) ? e(...n) : e;
}
var vb = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
function pb(e) {
  return typeof e == "string" && vb.test(e);
}
function mb(e) {
  if (!pb(e)) throw TypeError("Invalid UUID");
  let n;
  return Uint8Array.of((n = parseInt(e.slice(0, 8), 16)) >>> 24, n >>> 16 & 255, n >>> 8 & 255, n & 255, (n = parseInt(e.slice(9, 13), 16)) >>> 8, n & 255, (n = parseInt(e.slice(14, 18), 16)) >>> 8, n & 255, (n = parseInt(e.slice(19, 23), 16)) >>> 8, n & 255, (n = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, n / 4294967296 & 255, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, n & 255);
}
var Cn = [];
for (let e = 0; e < 256; ++e) Cn.push((e + 256).toString(16).slice(1));
function ga(e, n = 0) {
  return (Cn[e[n + 0]] + Cn[e[n + 1]] + Cn[e[n + 2]] + Cn[e[n + 3]] + "-" + Cn[e[n + 4]] + Cn[e[n + 5]] + "-" + Cn[e[n + 6]] + Cn[e[n + 7]] + "-" + Cn[e[n + 8]] + Cn[e[n + 9]] + "-" + Cn[e[n + 10]] + Cn[e[n + 11]] + Cn[e[n + 12]] + Cn[e[n + 13]] + Cn[e[n + 14]] + Cn[e[n + 15]]).toLowerCase();
}
var ul, hb = new Uint8Array(16);
function kl() {
  if (!ul) {
    if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    ul = crypto.getRandomValues.bind(crypto);
  }
  return ul(hb);
}
var So = {};
function gb(e, n, r) {
  let o;
  const t = e?._v6 ?? !1;
  if (e) {
    const a = Object.keys(e);
    a.length === 1 && a[0] === "_v6" && (e = void 0);
  }
  if (e) o = Yu(e.random ?? e.rng?.() ?? kl(), e.msecs, e.nsecs, e.clockseq, e.node, n, r);
  else {
    const a = Date.now(), i = kl();
    bb(So, a, i), o = Yu(i, So.msecs, So.nsecs, t ? void 0 : So.clockseq, t ? void 0 : So.node, n, r);
  }
  return n ?? ga(o);
}
function bb(e, n, r) {
  return e.msecs ??= -1 / 0, e.nsecs ??= 0, n === e.msecs ? (e.nsecs++, e.nsecs >= 1e4 && (e.node = void 0, e.nsecs = 0)) : n > e.msecs ? e.nsecs = 0 : n < e.msecs && (e.node = void 0), e.node || (e.node = r.slice(10, 16), e.node[0] |= 1, e.clockseq = (r[8] << 8 | r[9]) & 16383), e.msecs = n, e;
}
function Yu(e, n, r, o, t, a, i = 0) {
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
function yb(e) {
  const n = wb(typeof e == "string" ? mb(e) : e);
  return typeof e == "string" ? ga(n) : n;
}
function wb(e) {
  return Uint8Array.of((e[6] & 15) << 4 | e[7] >> 4 & 15, (e[7] & 15) << 4 | (e[4] & 240) >> 4, (e[4] & 15) << 4 | (e[5] & 240) >> 4, (e[5] & 15) << 4 | (e[0] & 240) >> 4, (e[0] & 15) << 4 | (e[1] & 240) >> 4, (e[1] & 15) << 4 | (e[2] & 240) >> 4, 96 | e[2] & 15, e[3], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]);
}
var kb = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Wu = { randomUUID: kb };
function $b(e, n, r) {
  e = e || {};
  const o = e.random ?? e.rng?.() ?? kl();
  if (o.length < 16) throw new Error("Random bytes length must be >= 16");
  if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, n) {
    if (r = r || 0, r < 0 || r + 16 > n.length) throw new RangeError(`UUID byte range ${r}:${r + 15} is out of buffer bounds`);
    for (let t = 0; t < 16; ++t) n[r + t] = o[t];
    return n;
  }
  return ga(o);
}
function Df(e, n, r) {
  return Wu.randomUUID && !n && !e ? Wu.randomUUID() : $b(e, n, r);
}
function Mf(e, n, r) {
  e ??= {}, r ??= 0;
  let o = gb({
    ...e,
    _v6: !0
  }, new Uint8Array(16));
  if (o = yb(o), n) {
    for (let t = 0; t < 16; t++) n[r + t] = o[t];
    return n;
  }
  return ga(o);
}
function Af(e) {
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
function bt(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n];
    for (var o in r) e[o] = r[o];
  }
  return e;
}
var Cb = {
  read: function(e) {
    return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(e) {
    return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
  }
};
function $l(e, n) {
  function r(t, a, i) {
    if (!(typeof document > "u")) {
      i = bt({}, n, i), typeof i.expires == "number" && (i.expires = new Date(Date.now() + i.expires * 864e5)), i.expires && (i.expires = i.expires.toUTCString()), t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
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
      r(t, "", bt({}, a, { expires: -1 }));
    },
    withAttributes: function(t) {
      return $l(this.converter, bt({}, this.attributes, t));
    },
    withConverter: function(t) {
      return $l(bt({}, this.converter, t), this.attributes);
    }
  }, {
    attributes: { value: Object.freeze(n) },
    converter: { value: Object.freeze(e) }
  });
}
var dl = $l(Cb, { path: "/" });
function nt(e, n) {
  if (e.length)
    return n < 0 && (n += e.length), e[n];
}
function un(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
function Nf(e, n) {
  return un(e, 0, n.length - 1);
}
function Sb(e) {
  return new Promise((n) => {
    setTimeout(n, e);
  });
}
function Vf(e = 0, n = 100) {
  return Math.floor(Math.random() * (n - e + 1)) + e;
}
function Ob(e, n) {
  return Array.from({ length: e }, (r, o) => n(o));
}
function tr() {
  return typeof window < "u";
}
function rt() {
  return typeof globalThis < "u" ? globalThis : tr() ? window : typeof global < "u" ? global : self;
}
var { hasOwnProperty: Pb } = Object.prototype;
function Ir(e, n) {
  return Pb.call(e, n);
}
function No() {
  return tr() && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
var Rf = Object.prototype.toString;
function tu(e) {
  return Rf.call(e);
}
function Ze(e) {
  return tu(e).slice(8, -1);
}
function jt(e) {
  return Ze(e) === "ArrayBuffer";
}
function ot(e) {
  return typeof e == "boolean";
}
function Yt(e) {
  return Ze(e) === "DataView";
}
function Wt(e) {
  return Ze(e) === "Date";
}
function Kt(e) {
  return Ze(e) === "DOMException";
}
function Zn(e) {
  return e == null || e === "" || He(e) && !e.length;
}
function qt(e) {
  return Ze(e) === "Error";
}
function Xt(e) {
  return Ze(e) === "Map";
}
function or(e) {
  return typeof e == "object" && e !== null;
}
function rn(e) {
  return Ze(e) === "Object";
}
function Gt(e) {
  return Ze(e) === "RegExp";
}
function Zt(e) {
  return Ze(e) === "Set";
}
function Jt(e) {
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
function Lf(e, n, r) {
  const o = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
  function a(i, l, s, u) {
    if (r(i, l) === !0 || i === l || i !== i && l !== l) return !0;
    if (!or(i) || !or(l)) return i === l;
    if (i.constructor !== l.constructor) return !1;
    if (Ze(i) === "String" && Ze(l) === "String" || Ze(i) === "Number" && Ze(l) === "Number" || Ze(i) === "Boolean" && Ze(l) === "Boolean" || Ze(i) === "BigInt" && Ze(l) === "BigInt" || Ze(i) === "Symbol" && Ze(l) === "Symbol") return i.valueOf() === l.valueOf();
    if (Wt(i) && Wt(l)) return i.getTime() === l.getTime();
    if (Gt(i) && Gt(l)) return i.source === l.source && i.flags === l.flags;
    if (qt(i) && qt(l)) return i.name === l.name && i.message === l.message && i.cause === l.cause;
    if (Kt(i) && Kt(l)) return i.name === l.name && i.message === l.message;
    if (Jt(i) && Jt(l) || Yt(i) && Yt(l)) {
      if (i.byteLength !== l.byteLength) return !1;
      const d = new Uint8Array(i.buffer), c = new Uint8Array(l.buffer);
      return d.every((f, v) => f === c[v]);
    }
    if (jt(i) && jt(l)) {
      if (i.byteLength !== l.byteLength) return !1;
      const d = new Uint8Array(i), c = new Uint8Array(l);
      return d.every((f, v) => f === c[v]);
    }
    if (s.get(i) === l && u.get(l) === i) return !0;
    if (s.set(i, l), u.set(l, i), Xt(i) && Xt(l) || Zt(i) && Zt(l)) {
      if (i.size !== l.size) return !1;
      const d = [...i], c = [...l], f = d.every((v, m) => a(v, c[m], s, u));
      return s.delete(i), u.delete(l), f;
    }
    if (He(i) && He(l)) {
      if (i.length !== l.length) return !1;
      const d = i.every((c, f) => a(c, l[f], s, u));
      return s.delete(i), u.delete(l), d;
    }
    if (rn(i) && rn(l)) {
      const d = [...Object.keys(i), ...Object.getOwnPropertySymbols(i)], c = [...Object.keys(l), ...Object.getOwnPropertySymbols(l)];
      if (d.length !== c.length) return !1;
      const f = d.every((v) => a(i[v], l[v], s, u));
      return s.delete(i), u.delete(l), f;
    }
    return !1;
  }
  return a(e, n, o, t);
}
function zb(e, n) {
  return Lf(e, n, () => {
  });
}
function Tb(e) {
  return He(e) && !!e.length;
}
function Eb(e) {
  return e == null;
}
function zn(e) {
  return typeof e == "number";
}
function au(e) {
  return zn(e) || an(e) && /^[-+]?\d+$/.test(e);
}
function Ib(e) {
  return or(e) && mn(e.then) && mn(e.catch);
}
function Bb(e) {
  return typeof e == "symbol";
}
function Db(e) {
  return !!e;
}
function Ff(e) {
  return Ze(e) === "WeakMap";
}
function Uf(e) {
  return Ze(e) === "WeakSet";
}
function ba(e) {
  return e === window;
}
function Hf() {
  return tr() && "ontouchstart" in window;
}
function Mb(e) {
  return Ze(e) === "File";
}
function Ab(e) {
  return Ze(e) === "Blob";
}
function Nb(e) {
  return e == null || typeof e != "object" && typeof e != "function";
}
function Vb(e) {
  return rn(e) && Object.keys(e).length === 0 && Object.getOwnPropertySymbols(e).length === 0;
}
function jf(e, n) {
  if (!e) throw new Error(n);
}
function Rb(e) {
  return Qt(e).length !== e.length;
}
function Lb(e, n) {
  return Vo(e, n).length !== e.length;
}
function j(e) {
  return e == null ? 0 : an(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : ot(e) ? Number(e) : e;
}
var Fb = 0;
function Ub() {
  return Fb++;
}
function Hb(e, n = 1) {
  n = un(n, 1, e.length);
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
function jb(e, n) {
  if (e.length) {
    const r = e.findIndex((o) => n(o));
    if (r > -1) return e.splice(r, 1);
  }
}
function Yb(e, n) {
  let r = 0;
  const o = [];
  for (; r < e.length; ) n(e[r]) ? o.push(...e.splice(r, 1)) : r++;
  return o;
}
function Wb(e, n) {
  return e.includes(n) ? Br(e, n) : e.push(n), e;
}
function Qt(e) {
  return [...new Set(e)];
}
function Vo(e, n) {
  return e.reduce((r, o) => (r.findIndex((t) => n(o, t)) === -1 && r.push(o), r), []);
}
function Yf(e, n, r = "start") {
  let o = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && o >= 0 && o <= e.length - 1; ) {
    if (n(e[o], o, e)) return [e[o], o];
    r === "start" ? o++ : o--;
  }
  return [null, -1];
}
function Kb(e) {
  for (let n = e.length - 1; n > 0; n--) {
    const r = Math.floor(Math.random() * (n + 1));
    [e[n], e[r]] = [e[r], e[n]];
  }
  return e;
}
function Wf(e) {
  return e.filter((n) => n != null);
}
function qb(e) {
  return e.filter((n) => n != null && n !== "");
}
function hr(e) {
  return He(e) ? e : [e];
}
function xt(e, ...n) {
  const r = nt(n, -1), o = n.slice(0, -1).reduce((t, a) => [...t, ...a], []);
  return e.filter((t) => !o.some((a) => r(t, a)));
}
function Xb(e, ...n) {
  return xt(e, ...n, (r, o) => r === o);
}
function Kf(...e) {
  const n = nt(e, -1), r = e.slice(0, -1);
  if (r.length === 0) return [];
  if (r.length === 1) return Vo(r[0], n);
  function o(t, a) {
    return t.filter((i) => a.some((l) => n(i, l)));
  }
  return Vo(r.reduce((t, a) => o(t, a)), n);
}
function Gb(...e) {
  return Kf(...e, (n, r) => n === r);
}
function Zb(e, n) {
  return e.reduce((r, o) => {
    const t = n(o);
    return (r[t] ??= []).push(o), r;
  }, {});
}
function qf(...e) {
  const n = nt(e, -1);
  return Vo(e.slice(0, -1).reduce((r, o) => [...xt(r, o, n), ...xt(o, r, n)]), n);
}
function Jb(...e) {
  return qf(...e, (n, r) => n === r);
}
function Qb(e, n) {
  return n.reduce((r, o) => (r[o] = e[o], r), {});
}
function xb(e, n) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)].reduce((r, o) => {
    const t = e[o];
    return n(t, o) && (r[o] = t), r;
  }, {});
}
function _b(e, n) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)].reduce((r, o) => (n.includes(o) || (r[o] = e[o]), r), {});
}
function e0(e, n) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)].reduce((r, o) => {
    const t = e[o];
    return n(t, o) || (r[o] = t), r;
  }, {});
}
function n0(e, n) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)].reduce((r, o) => {
    const t = Ir(n, o) ? n[o] : o;
    return r[t] = e[o], r;
  }, {});
}
function r0(e, n) {
  return Object.entries(e).reduce((r, [o, t]) => {
    const a = n(o, t);
    if (He(a)) {
      const [i, l] = a;
      r[i] = l;
    }
    return r;
  }, {});
}
function o0() {
  let e, n;
  return {
    promise: new Promise((r, o) => {
      e = r, n = o;
    }),
    resolve: e,
    reject: n
  };
}
function t0(e, n, r) {
  if (!or(e)) return;
  const o = [...n];
  if (o.length === 0) return;
  let t = e;
  for (; o.length > 1; ) {
    const a = o.shift(), i = o[0];
    or(t[a]) || (t[a] = zn(i) ? [] : {}), t = t[a];
  }
  t[o[0]] = r;
}
function a0(e) {
  return Object.keys(e);
}
function i0(e) {
  return Object.entries(e);
}
var l0 = /* @__PURE__ */ Bf({
  mitt: () => Af,
  uuid: () => Df,
  uuidV6: () => Mf
});
function Ro(e) {
  const n = rt();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Xf(...e) {
  return e.map((n) => {
    if (He(n)) {
      const [r, o, t = null] = n;
      return r ? o : t;
    }
    return n;
  });
}
function s0(e) {
  if (!e) return;
  const n = document.createElement("textarea");
  n.value = e, n.style.position = "fixed", n.style.opacity = "0", document.body.appendChild(n), n.select(), document.execCommand("copy"), document.body.removeChild(n);
}
function u0(e, { prefix: n = 2, suffix: r = 2, mask: o = "*", maskLength: t } = {}) {
  if (e.length <= 1) return e;
  const a = Math.min(n, e.length - 1), i = Math.min(r, Math.max(e.length - a - 1, 0)), l = t ?? e.length - a - i, s = i > 0 ? e.slice(-i) : "";
  return e.slice(0, a) + o.repeat(l) + s;
}
function ya(e) {
  return e = e.replace(/[-_](\w)/g, (n, r) => r.toUpperCase()), e.replace(e.charAt(0), e.charAt(0).toLowerCase());
}
function d0(e, n) {
  return e.startsWith(n) ? e : n + e;
}
function c0(e, n) {
  return e.endsWith(n) ? e : e + n;
}
var f0 = 0;
function v0() {
  return `generated-key-${f0++}`;
}
function iu(e) {
  return e.replace(/([A-Z])/g, " $1").replace(/[_\s]+/g, "-").trim().replace(/^-/, "").toLowerCase();
}
function Gf(e) {
  const n = ya(e);
  return n.replace(n.charAt(0), n.charAt(0).toUpperCase());
}
function p0(e) {
  return e.charAt(0).toLowerCase() + e.slice(1);
}
function m0(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function h0() {
  const e = "0123456789abcdef";
  let n = "#";
  for (let r = 0; r < 6; r++) n += e[Math.floor(Math.random() * 16)];
  return n;
}
function g0(e = 10) {
  let n = r();
  for (; n.length < e; ) n += r();
  function r() {
    return Math.random().toString(36).slice(2);
  }
  return n.slice(0, e);
}
function b0(e) {
  return e.startsWith("\\\\?\\") ? e : e.replace(/\\/g, "/");
}
function Zf(e) {
  return (n) => {
    const r = `${e}-${n}`, o = (t) => t ? t[0] === "$" ? t.replace("$", e) : t.startsWith("--") ? `${r}${t}` : `${r}__${t}` : r;
    return {
      name: Gf(r),
      n: o,
      classes: Xf
    };
  };
}
function Gr(e) {
  const n = rt();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e);
}
function On() {
  return new Promise((e) => {
    Gr(() => {
      Gr(e);
    });
  });
}
function _n(e) {
  return window.getComputedStyle(e);
}
function Jf(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const r = /(scroll|auto)/, { overflowY: o, overflow: t } = _n(n);
    if (r.test(o) || r.test(t)) return n;
  }
  return window;
}
function y0(e) {
  const n = [];
  let r = e;
  for (; !ba(r); )
    r = Jf(r), n.push(r);
  return n;
}
function tn(e) {
  if (ba(e)) {
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
function wa(e) {
  const n = "scrollLeft" in e ? e.scrollLeft : e.scrollX;
  return Math.max(n, 0);
}
function Dr(e) {
  const n = "scrollTop" in e ? e.scrollTop : e.scrollY;
  return Math.max(n, 0);
}
function Qf(e) {
  const { top: n, bottom: r, left: o, right: t } = tn(e), { width: a, height: i } = tn(window);
  return o <= a && t >= 0 && n <= i && r >= 0;
}
function w0(e) {
  return JSON.stringify(e, null, 2);
}
function Fe(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function Tr() {
  return new Promise((e) => {
    Gr(e);
  });
}
function lu(e) {
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
function k0(e = {}) {
  const n = e;
  return {
    set(r, o, t = {}) {
      o != null && (an(o) || (o = JSON.stringify(o)), dl.set(r, o, {
        ...n,
        ...t
      }));
    },
    get(r) {
      const o = dl.get(r);
      try {
        return JSON.parse(o);
      } catch {
        return o;
      }
    },
    remove(r, o = {}) {
      dl.remove(r, {
        ...n,
        ...o
      });
    }
  };
}
var $0 = lu(rt().sessionStorage), C0 = lu(rt().localStorage);
function S0(e) {
  try {
    return JSON.parse(e);
  } catch {
    return;
  }
}
function O0(e, n = "file") {
  const r = document.createElement("a");
  r.style.display = "none", r.href = an(e) ? e : URL.createObjectURL(e), r.download = n, document.body.appendChild(r), r.click(), URL.revokeObjectURL(r.href), document.body.removeChild(r);
}
function k(e, ...n) {
  if (He(e)) return e.map((r) => r(...n));
  if (e) return e(...n);
}
function P0(e, ...n) {
  try {
    return [void 0, e(...n)];
  } catch (r) {
    return [r, void 0];
  }
}
async function z0(e, ...n) {
  try {
    return [void 0, await e(...n)];
  } catch (r) {
    return [r, void 0];
  }
}
function T0(e) {
  let n = !1, r;
  return function(...o) {
    return n || (n = !0, r = e.apply(this, o)), r;
  };
}
function E0(e, n = 0) {
  let r;
  return function(...o) {
    r && clearTimeout(r), r = setTimeout(() => {
      e.apply(this, o);
    }, n);
  };
}
function ka(e, n = 200) {
  let r, o = 0;
  return function t(...a) {
    const i = performance.now(), l = i - o;
    o || (o = i), r && clearTimeout(r), l >= n ? (e.apply(this, a), o = i) : r = setTimeout(() => {
      t.apply(this, a);
    }, n - l);
  };
}
function I0() {
}
function B0(e) {
  const n = Object.entries(e).reduce((f, [v, m]) => (f[v] = rn(m) ? m.value : m, f), {}), r = Object.values(e);
  function o(f) {
    const v = c(f);
    return v?.label ? ro(v.label) : "";
  }
  function t(f) {
    const v = c(f);
    return v?.description ? ro(v.description) : "";
  }
  function a() {
    return r.map((f) => rn(f) ? f.value : f);
  }
  function i() {
    return r.map((f) => rn(f) && f.label ? ro(f.label) : "");
  }
  function l() {
    return r.map((f) => rn(f) && f.description ? ro(f.description) : "");
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
    return r.map((f) => rn(f) ? s(f) : {
      value: f,
      label: "",
      description: ""
    });
  }
  function c(f) {
    return r.find((v) => rn(v) && v.value === f);
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
function xf(e) {
  const { from: n, to: r, duration: o = 300, frame: t = () => {
  }, timingFunction: a = (b) => b, onStateChange: i = () => {
  } } = e;
  let l = "pending", s = n;
  const u = r - n;
  let d, c, f, v = 0;
  function m() {
    if (l === "running" || l === "finished") return;
    S("running");
    const b = performance.now();
    c = c ?? b, v += f != null ? b - f : 0, f = void 0, z();
    function z() {
      d = Gr(() => {
        const O = un((performance.now() - c - v) / o, 0, 1);
        if (s = u * a(O) + n, O >= 1) {
          S("finished"), t({
            value: r,
            done: !0
          });
          return;
        }
        t({
          value: s,
          done: !1
        }), z();
      });
    }
  }
  function h() {
    l === "running" && (Ro(d), S("paused"), f = performance.now());
  }
  function w() {
    Ro(d), S("pending"), s = n, d = void 0, c = void 0, f = void 0, v = 0;
  }
  function $() {
    return l;
  }
  function S(b) {
    l = b, i(b);
  }
  return {
    start: m,
    pause: h,
    reset: w,
    getState: $
  };
}
function D0() {
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
function M0(e = {}) {
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
function Nt(e) {
  if (an(e)) return e;
  const { to: n, query: r, hash: o } = e, t = n.indexOf("#"), a = t >= 0 ? n.slice(0, t) : n, i = t >= 0 ? `#${n.slice(t + 1)}` : "", l = a.indexOf("?"), s = l >= 0 ? a.slice(0, l) : a, u = l >= 0 ? a.slice(l + 1) : "", d = new URLSearchParams(u);
  if (r) for (const [m, h] of Object.entries(r)) d.append(m, String(h));
  const c = d.toString(), f = o ?? i;
  let v = s;
  return c && (v += `?${c}`), f && (v += f), v;
}
var A0 = {
  push(e) {
    window.location.assign(Nt(e));
  },
  replace(e) {
    window.location.replace(Nt(e));
  },
  open(e) {
    const n = Nt(e);
    window.open(n);
  },
  back() {
    window.history.back();
  },
  go(e) {
    window.history.go(e);
  }
};
function _f(e, n) {
  const r = /* @__PURE__ */ new WeakMap();
  function o(i, l) {
    const s = n(i);
    if (s !== void 0) return s;
    if (!or(i)) return i;
    if (l.has(i)) return l.get(i);
    if (Wt(i)) return new Date(i);
    if (Gt(i)) return new RegExp(i);
    if (Xt(i)) {
      const u = /* @__PURE__ */ new Map();
      return l.set(i, u), i.forEach((d, c) => {
        u.set(o(c, l), o(d, l));
      }), u;
    }
    if (Zt(i)) {
      const u = /* @__PURE__ */ new Set();
      return l.set(i, u), i.forEach((d) => {
        u.add(o(d, l));
      }), u;
    }
    if (Ze(i) === "String" || Ze(i) === "Number" || Ze(i) === "Boolean") return a(i, i.valueOf());
    if (Ff(i) || Uf(i) || qt(i) || Kt(i)) return {};
    if (Jt(i)) return a(i, t(i.buffer), i.byteOffset, i.length);
    if (Yt(i)) return a(i, t(i.buffer), i.byteOffset, i.byteLength);
    if (jt(i)) return t(i);
    if (He(i)) {
      const u = [];
      return l.set(i, u), i.forEach((d, c) => {
        u[c] = o(d, l);
      }), u;
    }
    if (rn(i)) {
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
function N0(e) {
  return _f(e, () => {
  });
}
function ev(e, ...n) {
  const r = nt(n, -1), o = [e, ...n.slice(0, -1)];
  let t = o.length - 1, a = o[t];
  for (; t; )
    a = i(o[t - 1], a, r), t--;
  function i(l, s, u) {
    function d(c, f) {
      for (const v in f) if (Ir(f, v)) {
        const m = f[v], h = c[v], w = u(h, m, v, l, s);
        w !== void 0 ? c[v] = w : or(m) ? or(h) ? c[v] = d(h, m) : c[v] = d(He(m) ? [] : {}, m) : c[v] = m;
      }
      return c;
    }
    return d(l, s);
  }
  return a;
}
function V0(e, ...n) {
  return ev(e, ...n, () => {
  });
}
function R0(e) {
  return new Promise((n) => {
    const r = new FileReader();
    r.onload = () => {
      n(r.result);
    }, r.readAsArrayBuffer(e);
  });
}
function nv(e) {
  return new Promise((n) => {
    const r = new FileReader();
    r.onload = () => {
      n(r.result);
    }, r.readAsDataURL(e);
  });
}
function L0(e) {
  return new Promise((n) => {
    const r = new FileReader();
    r.onload = () => {
      n(r.result);
    }, r.readAsText(e);
  });
}
function F0(e, n) {
  return e.reduce((r, o) => n(r) > n(o) ? r : o, e[0]);
}
function U0(e, n) {
  return e.reduce((r, o) => n(r) < n(o) ? r : o, e[0]);
}
function rv(e) {
  return e.reduce((n, r) => n + r, 0);
}
function ov(e, n) {
  return e.reduce((r, o) => r + n(o), 0);
}
function H0(e) {
  function n(o, t) {
    for (let a = 0; a < t.length; a++) {
      const i = t.charCodeAt(a);
      o = (o << 5) - o + i, o |= 0;
    }
    return o < 0 ? o * -2 : o;
  }
  function r(o, t, a, i) {
    return o = n(o, a), o = n(o, tu(t)), o = n(o, typeof t), t === null ? n(o, "null") : t === void 0 ? n(o, "undefined") : or(t) || mn(t) ? i.includes(t) ? n(o, `[Circular]${a}`) : (i.push(t), o = Object.keys(t).sort().reduce((l, s) => r(l, t[s], s, i), o), mn(t.valueOf) ? n(o, String(t.valueOf())) : o) : n(o, t.toString());
  }
  return r(0, e, "", []).toString(16).padStart(8, "0");
}
function j0(e) {
  return rv(e) / e.length;
}
function Y0(e, n) {
  return ov(e, n) / e.length;
}
function W0(e) {
  if (e.length)
    return e[Vf(0, e.length - 1)];
}
function K0(e, n = 0) {
  return $a(e, n, Math.round);
}
function $a(e, n, r) {
  return n = un(n ?? 0, -292, 292), n ? +`${r(`${e}e${n}`)}e${-n}` : r(e);
}
function Cl(e, n = 0) {
  return $a(e, n, Math.floor);
}
function q0(e, n = 0) {
  return $a(e, n, Math.ceil);
}
fb(/* @__PURE__ */ Bf({
  NOOP: () => I0,
  assert: () => jf,
  at: () => nt,
  baseRound: () => $a,
  buildNavigationUrl: () => Nt,
  call: () => k,
  callOrReturn: () => ro,
  camelize: () => ya,
  cancelAnimationFrame: () => Ro,
  ceil: () => q0,
  chunk: () => Hb,
  clamp: () => un,
  clampArrayRange: () => Nf,
  classes: () => Xf,
  cloneDeep: () => N0,
  cloneDeepWith: () => _f,
  copyText: () => s0,
  createCacheManager: () => M0,
  createCookieStorage: () => k0,
  createNamespaceFn: () => Zf,
  createStorage: () => lu,
  debounce: () => E0,
  delay: () => Sb,
  difference: () => Xb,
  differenceWith: () => xt,
  doubleRaf: () => On,
  download: () => O0,
  duration: () => D0,
  ensurePrefix: () => d0,
  ensureSuffix: () => c0,
  enumOf: () => B0,
  find: () => Yf,
  floor: () => Cl,
  genNumberKey: () => Ub,
  genStringKey: () => v0,
  getAllParentScroller: () => y0,
  getGlobalThis: () => rt,
  getParentScroller: () => Jf,
  getRect: () => tn,
  getScrollLeft: () => wa,
  getScrollTop: () => Dr,
  getStyle: () => _n,
  groupBy: () => Zb,
  hasDuplicates: () => Rb,
  hasDuplicatesBy: () => Lb,
  hasOwn: () => Ir,
  inBrowser: () => tr,
  inMobile: () => No,
  inViewport: () => Qf,
  intersection: () => Gb,
  intersectionWith: () => Kf,
  isArray: () => He,
  isArrayBuffer: () => jt,
  isBlob: () => Ab,
  isBoolean: () => ot,
  isDOMException: () => Kt,
  isDataView: () => Yt,
  isDate: () => Wt,
  isEmpty: () => Zn,
  isEmptyPlainObject: () => Vb,
  isEqual: () => zb,
  isEqualWith: () => Lf,
  isError: () => qt,
  isFile: () => Mb,
  isFunction: () => mn,
  isMap: () => Xt,
  isNonEmptyArray: () => Tb,
  isNullish: () => Eb,
  isNumber: () => zn,
  isNumeric: () => au,
  isObject: () => or,
  isPlainObject: () => rn,
  isPrimitive: () => Nb,
  isPromise: () => Ib,
  isRegExp: () => Gt,
  isSet: () => Zt,
  isString: () => an,
  isSymbol: () => Bb,
  isTruthy: () => Db,
  isTypedArray: () => Jt,
  isWeakMap: () => Ff,
  isWeakSet: () => Uf,
  isWindow: () => ba,
  kebabCase: () => iu,
  localStorage: () => C0,
  lowerFirst: () => p0,
  mapObject: () => r0,
  maskString: () => u0,
  maxBy: () => F0,
  mean: () => j0,
  meanBy: () => Y0,
  merge: () => V0,
  mergeWith: () => ev,
  minBy: () => U0,
  mitt: () => Af,
  motion: () => xf,
  navigation: () => A0,
  normalizeToArray: () => hr,
  objectEntries: () => i0,
  objectKeys: () => a0,
  objectToString: () => Rf,
  omit: () => _b,
  omitBy: () => e0,
  once: () => T0,
  pascalCase: () => Gf,
  pick: () => Qb,
  pickBy: () => xb,
  prettyJSONObject: () => w0,
  preventDefault: () => Fe,
  promiseWithResolvers: () => o0,
  raf: () => Tr,
  randomColor: () => h0,
  randomNumber: () => Vf,
  randomString: () => g0,
  rekey: () => n0,
  removeArrayBlank: () => Wf,
  removeArrayEmpty: () => qb,
  removeItem: () => Br,
  removeItemBy: () => jb,
  removeItemsBy: () => Yb,
  requestAnimationFrame: () => Gr,
  round: () => K0,
  sample: () => W0,
  sessionStorage: () => $0,
  set: () => t0,
  shuffle: () => Kb,
  slash: () => b0,
  sum: () => rv,
  sumBy: () => ov,
  sumHash: () => H0,
  supportTouch: () => Hf,
  throttle: () => ka,
  times: () => Ob,
  toArrayBuffer: () => R0,
  toDataURL: () => nv,
  toNumber: () => j,
  toRawType: () => Ze,
  toText: () => L0,
  toTypeString: () => tu,
  toggleItem: () => Wb,
  tryAsyncCall: () => z0,
  tryCall: () => P0,
  tryParseJSON: () => S0,
  uniq: () => Qt,
  uniqBy: () => Vo,
  upperFirst: () => m0,
  uuid: () => Df,
  uuidV6: () => Mf,
  xor: () => Jb,
  xorWith: () => qf
}), l0);
function Yn(e, n, r) {
  return jf(e, `Varlet [${n}]: ${r}`);
}
function X0(e, n) {
  console.warn(`Varlet [${e}]: ${n}`);
}
function to(e, n) {
  console.error(`Varlet [${e}]: ${n}`);
}
var G0 = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1;
function wn(e) {
  let n = !1;
  br(() => {
    e(), Ne(() => {
      n = !0;
    });
  }), Vr(() => {
    n && e();
  });
}
function je(e, n, r, o = {}) {
  if (!tr()) return;
  const { passive: t = !1, capture: a = !1 } = o;
  let i = !1, l = !1;
  const s = (v) => mn(v) ? v() : ou(v), u = (v) => {
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
  tb(e) && (c = me(() => e.value, (v, m) => {
    d(m), u(v);
  }));
  const f = () => {
    c?.(), d(e), l = !0;
  };
  return wn(() => {
    u(e);
  }), ha(() => {
    d(e);
  }), mo(() => {
    d(e);
  }), f;
}
function tv(e, n, r) {
  if (!tr()) return;
  je(document, n, (t) => {
    const a = mn(e) ? e() : ou(e);
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
function su(e) {
  return e in Qr().provides;
}
function kn(e) {
  if (!su(e)) return {
    index: null,
    parentProvider: null,
    bindParent: null
  };
  const { childInstances: n, collect: r, clear: o, ...t } = nu(e), a = Qr();
  return {
    index: T(() => n.indexOf(a)),
    parentProvider: t,
    bindParent: (s) => {
      br(() => {
        Ne().then(() => {
          r(a, s);
        });
      }), ha(() => {
        Ne().then(() => {
          o(a, s);
        });
      });
    }
  };
}
function Z0(e) {
  const n = [], r = (o) => {
    if (o?.component) {
      r(o?.component.subTree);
      return;
    }
    He(o?.children) && o.children.forEach((t) => {
      ab(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function $n(e) {
  const n = Qr(), r = nn([]), o = [], t = T(() => r.length), a = () => {
    const u = Z0(n.subTree);
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
      ru(e, {
        childInstances: r,
        collect: i,
        clear: l,
        ...u
      });
    }
  };
}
function ar(e) {
  je(() => window, "resize", e, { passive: !0 }), je(() => window, "orientationchange", e, { passive: !0 });
}
function J0(e, n) {
  const r = y(!1);
  return me(e, (o) => {
    n === o && (r.value = !0);
  }, { immediate: !0 }), r;
}
function Q0(e, n) {
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
      const { clientX: H, clientY: D } = I.touches[0];
      e.value = H, n.value = D, i.value = H, l.value = D, c.value = !0, v.value = performance.now(), f.value = !1, h && window.cancelAnimationFrame(h);
    },
    moveTouch: (I) => {
      const { clientX: H, clientY: D } = I.touches[0];
      f.value = !0, r.value = H - e.value, o.value = D - n.value, t.value = Math.abs(r.value), a.value = Math.abs(o.value), m.value = Math.sqrt(t.value ** 2 + a.value ** 2), s.value = H - i.value, u.value = D - l.value, d.value || (d.value = Q0(t.value, a.value)), i.value = H, l.value = D;
    },
    endTouch: () => {
      c.value = !1, h = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    },
    isReachTop: (I) => Dr(I) === 0 && o.value > 0,
    isReachBottom: (I, H = 1) => {
      const { scrollHeight: D, clientHeight: A, scrollTop: B } = I, E = Math.abs(D - B - A);
      return o.value < 0 && E <= H;
    }
  };
}
function av() {
  const e = Qr(), n = iu(e.type.name), r = y(void 0);
  return br(() => {
    r.value = `${n}-${e.uid}`;
  }), r;
}
function x0(e = {}) {
  const { initialWidth: n = 0, initialHeight: r = 0 } = e, o = y(n), t = y(r), a = () => {
    tr() && (o.value = window.innerWidth, t.value = window.innerHeight);
  };
  return wn(a), ar(a), {
    width: o,
    height: t
  };
}
function Pn(e, n, r = {}) {
  const { passive: o = !0, eventName: t, defaultValue: a, emit: i } = r, l = t ?? `onUpdate:${n.toString()}`, s = () => e[n] ?? a;
  if (!o) return T({
    get() {
      return s();
    },
    set(c) {
      i ? i(l, c) : k(e[l], c);
    }
  });
  const u = y(s());
  let d = !0;
  return me(() => e[n], () => {
    d = !1, u.value = s(), Ne(() => {
      d = !0;
    });
  }), me(() => u.value, (c) => {
    d && (i ? i(l, c) : k(e[l], c));
  }), u;
}
function _0(e) {
  const n = y(t(e.from)), r = y("pending");
  let o = s();
  function t(u) {
    return mn(u) ? u() : u;
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
    return xf({
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
var ey = Object.defineProperty, ny = Object.defineProperties, ry = Object.getOwnPropertyDescriptors, Ku = Object.getOwnPropertySymbols, oy = Object.prototype.hasOwnProperty, ty = Object.prototype.propertyIsEnumerable, qu = (e, n, r) => n in e ? ey(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Sl = (e, n) => {
  for (var r in n || (n = {})) oy.call(n, r) && qu(e, r, n[r]);
  if (Ku)
    for (var r of Ku(n)) ty.call(n, r) && qu(e, r, n[r]);
  return e;
}, ay = (e, n) => ny(e, ry(n)), Xu = (e, n, r) => new Promise((o, t) => {
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
function Me(e, n) {
  return He(n) ? n.reduce((r, o) => (r[o] = e[o], r), {}) : e[n];
}
function se(e, n) {
  const r = n ?? e;
  return r.install = function(o) {
    const { name: t } = e;
    t && o.component(t, e);
  }, r;
}
function ce(e, n) {
  e.setPropsDefaults = function(r) {
    Object.entries(r).forEach(([o, t]) => {
      const a = n[o];
      if (a != null) {
        if (rn(a)) {
          n[o] = ay(Sl({}, a), { default: t });
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
function iy(e) {
  const n = ob(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), r.parentNode && document.body.removeChild(r);
    }
  };
}
function yo(e, n = {}, r = {}) {
  const { unmount: o } = iy({ setup() {
    return () => xo(e, Sl(Sl({}, n), r));
  } });
  return { unmountInstance: o };
}
function Ca(e) {
  const n = [];
  return e.forEach((r) => {
    if (r.type !== nb) {
      if (r.type === De && He(r.children)) {
        n.push(...Ca(r.children));
        return;
      }
      n.push(r);
    }
  }), n;
}
function Gu(e) {
  return rn(e) && mn(e.safeParseAsync);
}
function ly(e) {
  return rn(e) && Ir(e, "success");
}
function Rn() {
  const e = y(""), n = (t, a, i) => Xu(null, null, function* () {
    const l = hr(t).filter((u) => Gu(u) || mn(u)), s = yield Promise.all(l.map((u) => Gu(u) ? u.safeParseAsync(a) : u(a, i)));
    return r(), !s.some((u) => {
      if (ly(u)) {
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
    validateWithTrigger: (t, a, i, l, s) => Xu(null, null, function* () {
      t.includes(a) && (yield n(i, l, s)) && (e.value = "");
    })
  };
}
function sy(e) {
  je(() => window, "hashchange", e), je(() => window, "popstate", e);
}
function xr() {
  const e = y(!1);
  return Vr(() => {
    e.value = !1;
  }), mo(() => {
    e.value = !0;
  }), { disabled: e };
}
var te = Zf("var");
function V(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function hn(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), `var-elevation--${e}`);
}
var tt = oe({
  props: {
    is: { type: [String, Object] },
    tag: {
      type: String,
      default: "span"
    }
  },
  setup(e) {
    return () => an(e.is) ? xo(e.tag, e.is) : e.is;
  }
}), iv = {
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
}, lv = {
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
}, sv = {
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
}, uu = {
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
}, du = {
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
}, uv = du, uy = Object.defineProperty, Zu = Object.getOwnPropertySymbols, dy = Object.prototype.hasOwnProperty, cy = Object.prototype.propertyIsEnumerable, Ju = (e, n, r) => n in e ? uy(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Qu = (e, n) => {
  for (var r in n || (n = {})) dy.call(n, r) && Ju(e, r, n[r]);
  if (Zu)
    for (var r of Zu(n)) cy.call(n, r) && Ju(e, r, n[r]);
  return e;
};
function cu() {
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
      e.value[i] = Qu(Qu({}, e.value[i]), l), o(i);
    },
    t: (i) => {
      if (Ir(n.value, i)) return n.value[i];
    }
  };
}
var { messages: dv, currentMessage: cv, add: fu, use: vu, merge: fv, t: sn } = cu();
fu("zh-CN", uu);
vu("zh-CN");
var DB = {
  zhCN: uu,
  enUS: iv,
  zhTW: du,
  zhHK: uv,
  faIR: lv,
  jaJP: sv,
  messages: dv,
  currentMessage: cv,
  add: fu,
  use: vu,
  merge: fv,
  t: sn,
  useLocale: cu
}, Ol = {
  zhCN: uu,
  enUS: iv,
  zhTW: du,
  zhHK: uv,
  faIR: lv,
  jaJP: sv,
  messages: dv,
  currentMessage: cv,
  add: fu,
  use: vu,
  merge: fv,
  t: sn,
  useLocale: cu
}, Pl = /* @__PURE__ */ Symbol("LOCALE_PROVIDER_KEY");
function fy(e) {
  ru(Pl, e);
}
function ir() {
  return su(Pl) ? nu(Pl) : { t: null };
}
var vv = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, MB = nn(vv), Hn = nn(vv), { n: xu } = te("");
function pv() {
  Object.keys(Hn.locks).length <= 0 ? document.body.classList.remove(xu("$--lock")) : document.body.classList.add(xu("$--lock"));
}
function yt(e) {
  Hn.locks[e] = 1, pv();
}
function wt(e) {
  delete Hn.locks[e], pv();
}
function at(e, n) {
  const { uid: r } = Qr();
  n && me(n, (o) => {
    o === !1 ? wt(r) : o === !0 && e() === !0 && yt(r);
  }), me(e, (o) => {
    n && n() === !1 || (o === !0 ? yt(r) : wt(r));
  }), ib(() => {
    n && n() === !1 || e() === !0 && yt(r);
  }), _o(() => {
    n && n() === !1 || e() === !0 && wt(r);
  }), Vr(() => {
    n && n() === !1 || e() === !0 && yt(r);
  }), mo(() => {
    n && n() === !1 || e() === !0 && wt(r);
  });
}
var yr = [];
function pu(e, n) {
  const { uid: r } = Qr();
  me(e, (i) => {
    i && !a(r) ? t() : setTimeout(() => {
      Br(yr, a(r));
    });
  }), wn(() => {
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
  const r = y(Hn.zIndex);
  return me(e, (o) => {
    o && (Hn.zIndex += n, r.value = Hn.zIndex);
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
  onOpen: V(),
  onOpened: V(),
  onClose: V(),
  onClosed: V(),
  onKeyEscape: V(),
  onClickOverlay: V(),
  "onUpdate:show": V(),
  onRouteChange: V()
}, mv = /* @__PURE__ */ Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function hv() {
  const { bindParent: e, parentProvider: n, index: r } = kn(mv);
  return {
    index: r,
    popup: n,
    bindPopup: e
  };
}
function vy() {
  const { bindChildren: e, childProviders: n, length: r } = $n(mv);
  return {
    length: r,
    popupItems: n,
    bindPopupItems: e
  };
}
var py = Object.defineProperty, _u = Object.getOwnPropertySymbols, my = Object.prototype.hasOwnProperty, hy = Object.prototype.propertyIsEnumerable, ed = (e, n, r) => n in e ? py(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, gy = (e, n) => {
  for (var r in n || (n = {})) my.call(n, r) && ed(e, r, n[r]);
  if (_u)
    for (var r of _u(n)) hy.call(n, r) && ed(e, r, n[r]);
  return e;
}, { name: by, n: Xn, classes: cl } = te("popup"), Sa = oe({
  name: by,
  inheritAttrs: !1,
  props: wo,
  setup(e, { slots: n, attrs: r }) {
    const o = J0(() => e.show, !0), { zIndex: t } = it(() => e.show, 3), a = T(() => {
      var m;
      return (m = e.zIndex) != null ? m : t.value;
    }), { onStackTop: i } = pu(() => e.show, a), { disabled: l } = xr(), { bindPopupItems: s } = vy();
    at(() => e.show, () => e.lockScroll), me(() => e.show, (m) => {
      k(m ? e.onOpen : e.onClose);
    }), s({ show: T(() => e.show) }), je(() => window, "keydown", v), sy(() => k(e.onRouteChange));
    function u() {
      const { closeOnClickOverlay: m, onClickOverlay: h } = e;
      k(h), m && k(e["onUpdate:show"], !1);
    }
    function d() {
      const { overlayClass: m = "", overlayStyle: h } = e;
      return G("div", {
        class: cl(Xn("overlay"), m),
        style: gy({ zIndex: a.value - 1 }, h),
        onClick: u
      }, null);
    }
    function c() {
      return Re(G("div", Ye({
        class: cl(Xn("content"), Xn(`--${e.position}`), [e.defaultStyle, Xn("--content-background-color")], [e.defaultStyle, Xn("$-elevation--3")], [e.safeArea, Xn("--safe-area")], [e.safeAreaTop, Xn("--safe-area-top")]),
        style: { zIndex: a.value },
        role: "dialog",
        "aria-modal": "true"
      }, r), [o.value && k(n.default)]), [[xn, e.show]]);
    }
    function f() {
      return G(en, {
        name: Xn("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, { default: () => [Re(G("div", {
        class: cl(Xn("$--box"), Xn(), [!e.overlay, Xn("--pointer-events-none")]),
        style: { zIndex: a.value - 2 }
      }, [e.overlay && d(), G(en, { name: e.transition || Xn(`$-pop-${e.position}`) }, { default: () => [c()] })]), [[xn, e.show]])] });
    }
    function v(m) {
      !i() || m.key !== "Escape" || !e.show || (k(e.onKeyEscape), e.closeOnKeyEscape && (Fe(m), k(e["onUpdate:show"], !1)));
    }
    return () => {
      const { teleport: m } = e;
      return m ? G(cr, {
        to: m,
        disabled: l.value
      }, { default: () => [f()] }) : f();
    };
  }
});
se(Sa);
ce(Sa, wo);
var AB = Sa, Mr = Sa, yy = Object.defineProperty, wy = Object.defineProperties, ky = Object.getOwnPropertyDescriptors, nd = Object.getOwnPropertySymbols, $y = Object.prototype.hasOwnProperty, Cy = Object.prototype.propertyIsEnumerable, rd = (e, n, r) => n in e ? yy(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, gv = (e, n) => {
  for (var r in n || (n = {})) $y.call(n, r) && rd(e, r, n[r]);
  if (nd)
    for (var r of nd(n)) Cy.call(n, r) && rd(e, r, n[r]);
  return e;
}, Sy = (e, n) => wy(e, ky(n)), { n: bv } = te("ripple"), od = 250;
function Oy(e) {
  const { zIndex: n, position: r } = _n(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function td(e) {
  return "touches" in e;
}
function Py(e, n) {
  const { top: r, left: o } = tn(e), { clientWidth: t, clientHeight: a } = e, i = Math.sqrt(t ** 2 + a ** 2) / 2, l = i * 2, s = td(n) ? n.touches[0].clientX - o : t / 2, u = td(n) ? n.touches[0].clientY - r : a / 2, d = (t - i * 2) / 2, c = (a - i * 2) / 2;
  return {
    x: s - i,
    y: u - i,
    centerX: d,
    centerY: c,
    size: l
  };
}
function mu(e) {
  const n = this._ripple;
  if (n.removeRipple(), n.disabled || n.tasker || !Hn.enableRipple) return;
  const r = () => {
    n.tasker = null;
    const { x: o, y: t, centerX: a, centerY: i, size: l } = Py(this, e), s = document.createElement("div");
    s.classList.add(bv()), s.style.opacity = "0", s.style.transform = `translate(${o}px, ${t}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), Oy(this), this.appendChild(s), window.setTimeout(() => {
      s.style.transform = `translate(${a}px, ${i}px) scale3d(1, 1, 1)`, s.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(r, 30);
}
function _t() {
  const e = this._ripple, n = () => {
    const r = this.querySelectorAll(`.${bv()}`);
    if (!r.length) return;
    const o = r[r.length - 1], t = od - performance.now() + Number(o.dataset.createdAt);
    window.setTimeout(() => {
      o.style.opacity = "0", window.setTimeout(() => {
        var a;
        return (a = o.parentNode) == null ? void 0 : a.removeChild(o);
      }, od);
    }, t);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function yv() {
  if (!Hf() || !Hn.enableRipple) return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
var ea = !1;
function zy(e) {
  ea || !(e.key === " " || e.key === "Enter") || (mu.call(this, e), ea = !0);
}
function ad() {
  ea && (_t.call(this), ea = !1);
}
function Ty(e, n) {
  var r;
  e._ripple = Sy(gv({ tasker: null }, (r = n.value) != null ? r : {}), { removeRipple: _t.bind(e) }), e.addEventListener("touchstart", mu, { passive: !0 }), e.addEventListener("touchmove", yv, { passive: !0 }), e.addEventListener("dragstart", _t, { passive: !0 }), e.addEventListener("keydown", zy), e.addEventListener("keyup", ad), e.addEventListener("blur", ad), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("dragend", e._ripple.removeRipple, { passive: !0 });
}
function Ey(e) {
  e.removeEventListener("touchstart", mu), e.removeEventListener("touchmove", yv), e.removeEventListener("dragstart", _t), !(!e._ripple || !e._ripple.removeRipple) && (document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple), document.removeEventListener("dragend", e._ripple.removeRipple));
}
function Iy(e, n) {
  var r, o, t, a, i, l;
  const s = {
    color: (r = n.value) == null ? void 0 : r.color,
    disabled: (o = n.value) == null ? void 0 : o.disabled
  };
  (s.color !== ((t = e._ripple) == null ? void 0 : t.color) || s.disabled !== ((a = e._ripple) == null ? void 0 : a.disabled)) && (e._ripple = gv({
    tasker: s.disabled ? null : (i = e._ripple) == null ? void 0 : i.tasker,
    removeRipple: (l = e._ripple) == null ? void 0 : l.removeRipple
  }, s));
}
var wv = {
  mounted: Ty,
  unmounted: Ey,
  updated: Iy,
  install(e) {
    e.directive("ripple", this);
  }
}, NB = wv, cn = wv;
function kv(e) {
  return e ? !!(e === "desktop" && No() || e === "mobile" && !No()) : !1;
}
function By(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, o) => {
    const [t, a] = o.split(":").map((i) => i.trim());
    return r[ya(t)] = a, r;
  }, {}) : {};
}
function Dy(e) {
  const { value: n } = e._hover, r = By(e);
  Object.keys(n).forEach((o) => {
    const t = ya(o);
    n[t] != null && r[t] && (e._hover.rawStyle[t] = r[t]);
  });
}
function hu(e, n) {
  Object.keys(n).forEach((r) => {
    const o = n[r];
    o != null && (e.style[r] = o);
  });
}
function My(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function $v(e) {
  e?._hover != null && (My(e), hu(e, e._hover.rawStyle));
}
function Cv() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, mn(e)) {
    e(this._hover.hovering);
    return;
  }
  hu(this, e);
}
function Sv() {
  if (this._hover.hovering = !1, mn(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  $v(this);
}
function Ov(e, n) {
  var r, o;
  const { arg: t, value: a } = n;
  kv(t) || (e._hover = {
    value: a,
    hovering: (o = (r = e._hover) == null ? void 0 : r.hovering) != null ? o : !1,
    rawStyle: {}
  }, Dy(e), e.addEventListener("mouseenter", Cv), e.addEventListener("mouseleave", Sv));
}
function Pv(e, n) {
  kv(n.arg) || ($v(e), e.removeEventListener("mouseenter", Cv), e.removeEventListener("mouseleave", Sv));
}
function Ay(e, n) {
  e._hover && Pv(e, n);
}
function Ny(e, n) {
  return !mn(n.value) && e._hover.hovering;
}
function Vy(e, n) {
  Ov(e, n), Ny(e, n) && hu(e, n.value);
}
var zv = {
  mounted: Ov,
  unmounted: Pv,
  beforeUpdate: Ay,
  updated: Vy,
  install(e) {
    e.directive("hover", this);
  }
}, VB = zv, Tn = zv, Tv = {
  hovering: Boolean,
  focusing: Boolean,
  color: String
}, { name: Ry, n: Ly, classes: Fy } = te("hover-overlay");
function Uy(e, n) {
  return g(), C("div", {
    class: p(e.classes(e.n(), [e.hovering, e.n("--hovering")], [e.focusing && !e.inMobile(), e.n("--focusing")])),
    style: Z({ color: e.color })
  }, null, 6);
}
var Ev = oe({
  name: Ry,
  props: Tv,
  setup: () => ({
    n: Ly,
    classes: Fy,
    inMobile: No
  })
});
Ev.render = Uy;
var Oa = Ev;
se(Oa);
ce(Oa, Tv);
function Wn() {
  const e = y(!1);
  return {
    hovering: e,
    handleHovering: (r) => {
      e.value = r;
    }
  };
}
var RB = Oa, Mn = Oa;
function Hy(e) {
  const { left: n } = tn(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function id(e) {
  const { top: n } = tn(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function fl(e) {
  const { transform: n } = _n(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Ar(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const r = /(scroll|auto)/, { overflowY: o, overflow: t } = _n(n);
    if (r.test(o) || r.test(t)) return n;
  }
  return window;
}
function jy(e) {
  const n = [];
  let r = e;
  for (; !ba(r); )
    r = Ar(r), n.push(r);
  return n;
}
function Iv(e, n) {
  if (an(e)) {
    const r = document.querySelector(e);
    return Yn(!!r, n, "target element cannot found"), r;
  }
  return Yn(or(e), n, 'type of prop "target" should be an element object'), e;
}
function Yy() {
  const { width: e, height: n } = tn(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
var Wy = (e) => an(e) && e.endsWith("rem"), Ky = (e) => an(e) && e.endsWith("px") || zn(e), qy = (e) => an(e) && e.endsWith("vw"), Xy = (e) => an(e) && e.endsWith("vh"), Gy = (e) => an(e) && e.endsWith("vmin"), Zy = (e) => an(e) && e.endsWith("vmax"), on = (e) => {
  if (au(e)) return Number(e);
  if (Ky(e)) return +e.replace("px", "");
  if (!tr()) return 0;
  const { vw: n, vh: r, vMin: o, vMax: t } = Yy();
  if (qy(e)) return +e.replace("vw", "") * n / 100;
  if (Xy(e)) return +e.replace("vh", "") * r / 100;
  if (Gy(e)) return +e.replace("vmin", "") * o / 100;
  if (Zy(e)) return +e.replace("vmax", "") * t / 100;
  if (Wy(e)) {
    const a = +e.replace("rem", ""), i = _n(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return an(e) ? j(e) : 0;
}, ze = (e) => {
  if (e != null)
    return au(e) ? `${e}px` : String(e);
}, Bn = (e, n = 1) => {
  if (e == null) return;
  const r = ze(e), o = r.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
  return `${parseFloat(r) * n}${o}`;
};
function Lo(e, { top: n = 0, left: r = 0, duration: o = 300, animation: t }) {
  const a = Date.now(), i = Dr(e), l = wa(e);
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
function Bv(e) {
  return Object.entries(e ?? {}).reduce((n, [r, o]) => {
    const t = r.startsWith("--") ? r : `--${iu(r)}`;
    return n[t] = o, n;
  }, {});
}
function na(e) {
  return e === "start" || e === "end" ? `flex-${e}` : e;
}
function Jy(e) {
  let n = e;
  for (; n && n !== document.documentElement; ) {
    if (_n(n).display === "none") return !0;
    n = n.parentNode;
  }
  return !1;
}
var ld = [
  "button",
  "input",
  "select",
  "textarea",
  "[tabindex]",
  "[href]"
].map((e) => `${e}:not([disabled])`).join(", ");
function gu(e, n, r, o) {
  const t = Array.from(n.querySelectorAll(ld)).filter((s) => !Jy(s));
  if (!t.length) return;
  const a = [e, ...Array.from(e.querySelectorAll(ld))].findIndex((s) => s === document.activeElement) !== -1, i = Array.from(t).findIndex((s) => s === document.activeElement);
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
var dn = {
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
}, Qy = (e, n, r) => new Promise((o, t) => {
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
}), { name: xy, n: _y, classes: e1 } = te("icon");
function n1(e, n) {
  return g(), Ce(ho(e.isURL(e.name) ? "img" : "i"), {
    class: p(e.classes(e.n(), [e.namespace !== e.n(), e.namespace], `${e.namespace}--set`, [
      e.isURL(e.name),
      e.n("image"),
      `${e.namespace}-${e.nextName}`
    ], [e.animateInProgress, e.animationClass == null ? e.n("--shrinking") : e.animationClass])),
    style: Z({
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
var Dv = oe({
  name: xy,
  props: dn,
  setup(e) {
    const n = y(""), r = y(!1);
    me(() => e.name, o, { immediate: !0 });
    function o(t, a) {
      return Qy(this, null, function* () {
        const { transition: i } = e;
        if (a == null || j(i) === 0) {
          n.value = t;
          return;
        }
        r.value = !0, yield Ne(), setTimeout(() => {
          a != null && (n.value = t), r.value = !1;
        }, j(i));
      });
    }
    return {
      nextName: n,
      animateInProgress: r,
      n: _y,
      classes: e1,
      isURL: G0,
      toNumber: j,
      toSizeUnit: ze
    };
  }
});
Dv.render = n1;
var Pa = Dv;
se(Pa);
ce(Pa, dn);
var LB = Pa, Je = Pa, { name: r1, n: o1, classes: t1 } = te("action-sheet");
function a1(e, n) {
  const r = ne("var-icon"), o = ne("var-hover-overlay"), t = We("ripple"), a = We("hover");
  return Re((g(), C("div", {
    class: p(e.classes(e.n("action-item"), e.className, [e.disabled, e.n("--disabled")])),
    style: Z({ color: e.color })
  }, [
    e.icon ? (g(), Ce(r, {
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
    ])) : X("v-if", !0),
    R("div", { class: p(e.n("action-name")) }, fe(e.name), 3),
    G(o, { hovering: e.disabled ? !1 : e.hovering }, null, 8, ["hovering"])
  ], 6)), [[t, { disabled: e.disabled }], [
    a,
    e.handleHovering,
    "desktop"
  ]]);
}
var Mv = oe({
  name: r1,
  components: {
    VarHoverOverlay: Mn,
    VarIcon: Je
  },
  directives: {
    Ripple: cn,
    Hover: Tn
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
    const { hovering: e, handleHovering: n } = Wn();
    return {
      hovering: e,
      n: o1,
      classes: t1,
      handleHovering: n
    };
  }
});
Mv.render = a1;
var i1 = Mv, l1 = Object.defineProperty, sd = Object.getOwnPropertySymbols, s1 = Object.prototype.hasOwnProperty, u1 = Object.prototype.propertyIsEnumerable, ud = (e, n, r) => n in e ? l1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, d1 = (e, n) => {
  for (var r in n || (n = {})) s1.call(n, r) && ud(e, r, n[r]);
  if (sd)
    for (var r of sd(n)) u1.call(n, r) && ud(e, r, n[r]);
  return e;
}, Av = d1({
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
}, Me(wo, [
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
])), { name: c1, n: f1, classes: v1 } = te("action-sheet");
function p1(e, n) {
  const r = ne("var-action-item"), o = ne("var-popup");
  return g(), Ce(o, {
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
    default: pe(() => [R("div", Ye({ class: e.classes(e.n(), e.n("$--box")) }, e.$attrs), [F(e.$slots, "title", {}, () => {
      var t;
      return [R("div", { class: p(e.n("title")) }, fe((t = e.title) != null ? t : (e.pt ? e.pt : e.t)("actionSheetTitle")), 3)];
    }), F(e.$slots, "actions", {}, () => [(g(!0), C(De, null, qe(e.actions, (t) => (g(), Ce(r, {
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
var Nv = oe({
  name: c1,
  directives: { Ripple: cn },
  components: {
    VarPopup: Mr,
    VarActionItem: i1
  },
  inheritAttrs: !1,
  props: Av,
  setup(e) {
    const n = Pn(e, "show"), { t: r } = ir();
    function o(t) {
      if (t.disabled) return;
      const { closeOnClickAction: a, onSelect: i } = e;
      k(i, t), a && (n.value = !1);
    }
    return {
      show: n,
      pt: r,
      t: sn,
      n: f1,
      classes: v1,
      handleSelect: o
    };
  }
});
Nv.render = p1;
var lt = Nv, m1 = Object.defineProperty, dd = Object.getOwnPropertySymbols, h1 = Object.prototype.hasOwnProperty, g1 = Object.prototype.propertyIsEnumerable, cd = (e, n, r) => n in e ? m1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, fd = (e, n) => {
  for (var r in n || (n = {})) h1.call(n, r) && cd(e, r, n[r]);
  if (dd)
    for (var r of dd(n)) g1.call(n, r) && cd(e, r, n[r]);
  return e;
}, $r, bu = {};
function b1(e = {}) {
  return fd(fd({}, bu), e);
}
function Rr(e) {
  return tr() ? new Promise((n) => {
    Rr.close();
    const r = nn(b1(e));
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
  bu = e;
};
Rr.resetDefaultOptions = function() {
  bu = {};
};
Rr.close = function() {
  if ($r != null) {
    const e = $r;
    $r = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
Rr.Component = lt;
se(lt);
se(lt, Rr);
ce(Rr, Av);
var FB = lt, zl = Rr, Vv = {
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
}, { name: y1, n: w1, classes: k1 } = te("alert"), $1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  danger: "error"
};
function C1(e, n) {
  const r = ne("var-icon");
  return g(), C("div", {
    class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), e.n(`--${e.type}`), e.formatElevation(e.elevation, 2))),
    style: Z({ "background-color": e.color }),
    role: "alert"
  }, [
    e.isInternalType || e.$slots.icon ? (g(), C("div", {
      key: 0,
      class: p(e.n("icon"))
    }, [F(e.$slots, "icon", {}, () => [e.isInternalType ? (g(), Ce(r, {
      key: 0,
      name: e.iconTypeMap[e.type]
    }, null, 8, ["name"])) : X("v-if", !0)])], 2)) : X("v-if", !0),
    F(e.$slots, "content", {}, () => [R("div", { class: p(e.n("content")) }, [e.title || e.$slots.title ? (g(), C("div", {
      key: 0,
      class: p(e.n("title"))
    }, [F(e.$slots, "title", {}, () => [Ae(fe(e.title), 1)])], 2)) : X("v-if", !0), e.message || e.$slots.default ? (g(), C("div", {
      key: 1,
      class: p(e.n("message"))
    }, [F(e.$slots, "default", {}, () => [Ae(fe(e.message), 1)])], 2)) : X("v-if", !0)], 2)]),
    e.closeable ? (g(), C("div", {
      key: 1,
      class: p(e.n("close-icon")),
      onClick: n[0] || (n[0] = (...o) => e.handleClose && e.handleClose(...o))
    }, [F(e.$slots, "close-icon", {}, () => [G(r, { name: "close-circle" })])], 2)) : X("v-if", !0)
  ], 6);
}
var Rv = oe({
  name: y1,
  components: { VarIcon: Je },
  props: Vv,
  setup(e) {
    const n = T(() => [
      "info",
      "success",
      "danger",
      "warning"
    ].includes(e.type));
    function r(o) {
      k(e.onClose, o);
    }
    return {
      n: w1,
      classes: k1,
      iconTypeMap: $1,
      isInternalType: n,
      formatElevation: hn,
      handleClose: r
    };
  }
});
Rv.render = C1;
var za = Rv;
se(za);
ce(za, Vv);
var UB = za, Tl = za, Lv = {
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
}, { name: S1, n: O1, classes: P1 } = te("app-bar");
function z1(e, n) {
  return g(), C(De, null, [R("div", Ye({
    ref: "appBar",
    class: e.classes(e.n(), e.n("$--box"), [e.safeAreaTop, e.n("--safe-area-top")], [e.round, e.n("--round")], [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], e.formatElevation(e.elevation, 3)),
    style: e.rootStyles
  }, e.$attrs), [R("div", { class: p(e.n("toolbar")) }, [
    R("div", { class: p(e.n("left")) }, [F(e.$slots, "left"), e.titlePosition === "left" ? (g(), C("div", {
      key: 0,
      class: p(e.n("title")),
      style: Z({ paddingLeft: e.paddingLeft })
    }, [F(e.$slots, "default", {}, () => [Ae(fe(e.title), 1)])], 6)) : X("v-if", !0)], 2),
    e.titlePosition === "center" ? (g(), C("div", {
      key: 0,
      class: p(e.n("title"))
    }, [F(e.$slots, "default", {}, () => [Ae(fe(e.title), 1)])], 2)) : X("v-if", !0),
    R("div", { class: p(e.n("right")) }, [e.titlePosition === "right" ? (g(), C("div", {
      key: 0,
      class: p(e.n("title")),
      style: Z({ paddingRight: e.paddingRight })
    }, [F(e.$slots, "default", {}, () => [Ae(fe(e.title), 1)])], 6)) : X("v-if", !0), F(e.$slots, "right")], 2)
  ], 2), F(e.$slots, "content")], 16), e.fixed && e.placeholder ? (g(), C("div", {
    key: 0,
    class: p(e.n("placeholder")),
    style: Z({ height: e.placeholderHeight })
  }, null, 6)) : X("v-if", !0)], 64);
}
var Fv = oe({
  name: S1,
  props: Lv,
  setup(e, { slots: n }) {
    const r = y(null), o = y(), t = y(), a = y(), i = T(() => {
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
    ar(s), wn(() => {
      l(), s();
    }), et(l);
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
      n: O1,
      classes: P1,
      formatElevation: hn,
      appBar: r,
      placeholderHeight: a
    };
  }
});
Fv.render = z1;
var Ta = Fv;
se(Ta);
ce(Ta, Lv);
var HB = Ta, El = Ta, Uv = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: T1, n: E1 } = te("form-details"), I1 = { key: 0 }, B1 = { key: 0 };
function D1(e, n) {
  return g(), Ce(en, { name: e.n() }, {
    default: pe(() => [e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (g(), C("div", {
      key: 0,
      class: p(e.n())
    }, [R("div", { class: p(e.n("error-message")) }, [G(en, { name: e.n("message") }, {
      default: pe(() => [e.errorMessage ? (g(), C("div", I1, fe(e.errorMessage), 1)) : X("v-if", !0)]),
      _: 1
    }, 8, ["name"])], 2), R("div", { class: p(e.n("extra-message")) }, [G(en, { name: e.n("message") }, {
      default: pe(() => [F(e.$slots, "extra-message", {}, () => [e.extraMessage ? (g(), C("div", B1, fe(e.extraMessage), 1)) : X("v-if", !0)])]),
      _: 3
    }, 8, ["name"])], 2)], 2)) : X("v-if", !0)]),
    _: 3
  }, 8, ["name"]);
}
var Hv = oe({
  name: T1,
  props: Uv,
  setup: () => ({ n: E1 })
});
Hv.render = D1;
var Ea = Hv;
se(Ea);
ce(Ea, Uv);
var jB = Ea, En = Ea, M1 = Object.defineProperty, A1 = Object.defineProperties, N1 = Object.getOwnPropertyDescriptors, vd = Object.getOwnPropertySymbols, V1 = Object.prototype.hasOwnProperty, R1 = Object.prototype.propertyIsEnumerable, pd = (e, n, r) => n in e ? M1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, L1 = (e, n) => {
  for (var r in n || (n = {})) V1.call(n, r) && pd(e, r, n[r]);
  if (vd)
    for (var r of vd(n)) R1.call(n, r) && pd(e, r, n[r]);
  return e;
}, F1 = (e, n) => A1(e, N1(n)), jv = /* @__PURE__ */ Symbol("FORM_BIND_FORM_ITEM_KEY");
function Ln() {
  const { parentProvider: e, index: n, bindParent: r } = kn(jv), o = Qr();
  return {
    index: n,
    form: e,
    bindForm: r ? (t) => {
      r(F1(L1({}, t), { instance: o }));
    } : null
  };
}
function U1() {
  const { childProviders: e, length: n, bindChildren: r } = $n(jv);
  return {
    length: n,
    formItems: e,
    bindFormItems: r
  };
}
var Yv = /* @__PURE__ */ Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), Wv = /* @__PURE__ */ Symbol("SWIPE_RESIZE_DISPATCHER_BIND_SWIPE_RESIZE_LISTENER_KEY");
function H1() {
  const { childProviders: e, length: n, bindChildren: r } = $n(Yv);
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: r
  };
}
function j1() {
  const { childProviders: e, bindChildren: n } = $n(Wv);
  return {
    swipeResizeListeners: e,
    bindSwipeResizeListeners: n
  };
}
function Y1() {
  const { parentProvider: e, bindParent: n } = kn(Wv);
  return {
    swipeResizeDispatcher: e,
    bindSwipeResizeDispatcher: n
  };
}
var st = {
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
}, W1 = (e, n, r) => new Promise((o, t) => {
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
}), { name: K1, n: vl, classes: q1 } = te("field-decorator"), X1 = ["for"];
function G1(e, n) {
  const r = ne("var-icon");
  return g(), C("div", {
    class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
    onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
  }, [R("div", {
    class: p(e.classes(e.n("controller"), [e.isFocusing, e.n("--focus")], [e.isError, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")], [!e.line, e.n("--bottom-border-radius")])),
    style: Z({
      color: e.color,
      cursor: e.cursor,
      overflow: e.isFloating ? "visible" : "hidden",
      "--field-decorator-middle-offset-left": e.middleOffsetLeft,
      "--field-decorator-middle-offset-width": e.middleOffsetWidth,
      "--field-decorator-middle-offset-height": e.middleOffsetHeight
    })
  }, [
    R("div", { class: p(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")])) }, [F(e.$slots, "prepend-icon")], 2),
    R("div", {
      ref: "middleEl",
      class: p(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
    }, [F(e.$slots, "default")], 2),
    e.placeholder && e.hint ? (g(), C("label", {
      key: 0,
      class: p(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocusing, e.n("--focus")], [e.hintCenter, e.n("--hint-center")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.isError, e.n("--error")], [e.transitionDisabled, e.n("--transition-disabled")], e.computePlaceholderState())),
      style: Z({ color: e.color }),
      for: e.id
    }, [R("span", null, fe(e.placeholder), 1)], 14, X1)) : X("v-if", !0),
    R("div", { class: p(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")])) }, [e.clearable && !e.isEmpty(e.value) && !e.readonly && !e.formReadonly ? F(e.$slots, "clear-icon", {
      key: 0,
      clear: e.handleClear
    }, () => [G(r, {
      class: p(e.n("clear-icon")),
      "var-field-decorator-cover": "",
      name: "close-circle",
      onClick: e.handleClear
    }, null, 8, ["class", "onClick"])]) : X("v-if", !0), F(e.$slots, "append-icon")], 2)
  ], 6), e.line ? (g(), C(De, { key: 0 }, [e.variant === "outlined" ? (g(), C("fieldset", {
    key: 0,
    class: p(e.classes(e.n("line"), [e.isFocusing, e.n("--line-focus")], [e.isError, e.n("--line-error")], [e.formDisabled || e.disabled, e.n("--line-disabled")])),
    style: Z({ borderColor: e.color })
  }, [R("legend", {
    class: p(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
    style: Z({ width: e.legendWidth })
  }, [e.placeholder && e.hint ? (g(), Ce(cr, {
    key: 0,
    to: "body"
  }, [R("span", {
    ref: "placeholderTextEl",
    class: p(e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")]))
  }, fe(e.placeholder), 3)])) : X("v-if", !0)], 6)], 6)) : (g(), C("div", {
    key: 1,
    class: p(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.isError, e.n("--line-error")])),
    style: Z({ background: e.isError ? void 0 : e.blurColor })
  }, [R("div", {
    class: p(e.classes(e.n("dot"), [e.isFocusing, e.n("--line-focus")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.isError, e.n("--line-error")])),
    style: Z({ background: e.isError ? void 0 : e.focusColor })
  }, null, 6)], 6))], 64)) : X("v-if", !0)], 2);
}
var Kv = oe({
  name: K1,
  components: { VarIcon: Je },
  props: st,
  setup(e) {
    const n = y(null), r = y(null), o = y(""), t = y("0px"), a = y("0px"), i = y("0px"), l = y(!0), s = T(() => e.hint && (!Zn(e.value) || e.isFocusing)), { popup: u, bindPopup: d } = hv(), { bindSwipeResizeDispatcher: c } = Y1(), f = T(() => e.isError ? void 0 : e.isFocusing ? e.focusColor : e.blurColor);
    ar(w), wn(() => {
      w(), Ne().then(() => {
        l.value = !1;
      });
    }), et(w), k(d, null), k(c, { onResize() {
      Ne().then(w);
    } }), u && me(() => u.show.value, ($) => W1(null, null, function* () {
      $ && (yield On(), w());
    }));
    function v() {
      const { hint: $, value: S, composing: b } = e;
      if (!$ && (!Zn(S) || b)) return vl("--placeholder-hidden");
      if (s.value) return vl("--placeholder-hint");
    }
    function m($) {
      k(e.onClear, $);
    }
    function h($) {
      k(e.onClick, $);
    }
    function w() {
      if (t.value = `${r.value.offsetLeft}px`, a.value = `${r.value.offsetWidth}px`, i.value = `${r.value.offsetHeight}px`, e.variant === "outlined" && n.value) {
        const $ = _n(n.value), S = `var(--field-decorator-outlined-${e.size}-placeholder-space)`;
        o.value = `calc(${$.width} * 0.75 + ${S} * 2)`;
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
      n: vl,
      classes: q1,
      isEmpty: Zn,
      handleClear: m,
      handleClick: h
    };
  }
});
Kv.render = G1;
var Ia = Kv;
se(Ia);
ce(Ia, st);
var YB = Ia, Fo = Ia, Z1 = Object.defineProperty, J1 = Object.defineProperties, Q1 = Object.getOwnPropertyDescriptors, md = Object.getOwnPropertySymbols, x1 = Object.prototype.hasOwnProperty, _1 = Object.prototype.propertyIsEnumerable, hd = (e, n, r) => n in e ? Z1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, ew = (e, n) => {
  for (var r in n || (n = {})) x1.call(n, r) && hd(e, r, n[r]);
  if (md)
    for (var r of md(n)) _1.call(n, r) && hd(e, r, n[r]);
  return e;
}, nw = (e, n) => J1(e, Q1(n)), yu = nw(ew({
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
}, Me(st, [
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
}), { name: rw, n: ow, classes: tw } = te("input"), aw = [
  "aria-label",
  "placeholder",
  "enterkeyhint"
], iw = [
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
], lw = [
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
function sw(e, n) {
  const r = ne("var-field-decorator"), o = ne("var-form-details");
  return g(), C("div", {
    class: p(e.classes(e.n(), e.n("$--box"))),
    onMousedown: n[12] || (n[12] = (...t) => e.handleMousedown && e.handleMousedown(...t))
  }, [G(r, Kr(ma({
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
    "clear-icon": pe(({ clear: t }) => [F(e.$slots, "clear-icon", { clear: t })]),
    "append-icon": pe(() => [F(e.$slots, "append-icon")]),
    default: pe(() => [e.normalizedType === "password" && e.preventAutoFill ? (g(), C("input", {
      key: 0,
      tabindex: "-1",
      "aria-label": e.ariaLabel,
      class: p(e.n("autocomplete")),
      placeholder: e.hint ? void 0 : e.placeholder,
      style: Z({ "--input-placeholder-color": e.placeholderColor }),
      enterkeyhint: e.enterkeyhint
    }, null, 14, aw)) : X("v-if", !0), e.textarea ? (g(), C("textarea", {
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
      style: Z({
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
    }, null, 46, iw)) : (g(), C("input", {
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
      style: Z({
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
    }, null, 46, lw))]),
    _: 2
  }, [e.$slots["prepend-icon"] ? {
    name: "prepend-icon",
    fn: pe(() => [F(e.$slots, "prepend-icon")]),
    key: "0"
  } : void 0]), 1040), e.isShowFormDetails ? (g(), Ce(o, {
    key: 0,
    "error-message": e.errorMessage,
    "extra-message": e.maxlengthText
  }, Xr({ _: 2 }, [e.$slots["extra-message"] ? {
    name: "extra-message",
    fn: pe(() => [F(e.$slots, "extra-message")]),
    key: "0"
  } : void 0]), 1032, ["error-message", "extra-message"])) : X("v-if", !0)], 34);
}
var qv = oe({
  name: rw,
  components: {
    VarFormDetails: En,
    VarFieldDecorator: Fo
  },
  props: yu,
  setup(e) {
    const n = av(), r = y(null), o = y(!1), t = y(!1), { bindForm: a, form: i } = Ln(), { errorMessage: l, validateWithTrigger: s, validate: u, resetValidation: d } = Rn(), c = T(() => e.disabled || e.readonly ? "" : "text"), f = T(() => e.type === "number" ? "text" : e.type), v = T(() => {
      const { maxlength: Q, modelValue: ae } = e;
      return Q ? Zn(ae) ? `0 / ${Q}` : `${String(ae).length}/${Q}` : "";
    }), m = T(() => {
      const { hint: Q, blurColor: ae, focusColor: Oe } = e;
      if (!Q)
        return l.value ? "var(--field-decorator-error-color)" : o.value ? Oe || "var(--field-decorator-focus-color)" : ae || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    });
    k(a, {
      reset: U,
      validate: L,
      resetValidation: d
    }), wn(() => {
      e.autofocus && P();
    });
    function h(Q) {
      Ne(() => {
        const { validateTrigger: ae, rules: Oe, modelValue: le } = e;
        s(ae, Q, Oe, le);
      });
    }
    function w(Q) {
      o.value = !0, k(e.onFocus, Q), h("onFocus");
    }
    function $(Q) {
      o.value = !1, k(e.onBlur, Q), h("onBlur");
    }
    function S(Q) {
      const ae = Q.target;
      let { value: Oe } = ae;
      e.type === "number" && (Oe = A(Oe));
      const le = E(Oe);
      return le === e.modelValue && (ae.value = le), le;
    }
    function b() {
      t.value = !0;
    }
    function z(Q) {
      t.value && (t.value = !1, Q.target.dispatchEvent(new Event("input")));
    }
    function O(Q) {
      if (t.value) return;
      const ae = S(Q);
      k(e["onUpdate:modelValue"], ae), k(e.onInput, ae, Q), h("onInput");
    }
    function I(Q) {
      const ae = B(S(Q));
      e.modelModifiers.trim && k(e["onUpdate:modelValue"], ae), k(e.onChange, ae, Q), h("onChange");
    }
    function H() {
      const { disabled: Q, readonly: ae, clearable: Oe, onClear: le } = e;
      i?.disabled.value || i?.readonly.value || Q || ae || !Oe || (k(e["onUpdate:modelValue"], ""), k(le, ""), h("onClear"));
    }
    function D(Q) {
      const { disabled: ae, onClick: Oe } = e;
      i?.disabled.value || ae || (k(Oe, Q), h("onClick"));
    }
    function A(Q) {
      const ae = Q.indexOf("-"), Oe = Q.indexOf(".");
      return ae > -1 && (Q = ae === 0 ? "-" + Q.replace(/-/g, "") : Q.replace(/-/g, "")), Oe > -1 && (Q = Q.slice(0, Oe + 1) + Q.slice(Oe).replace(/\./g, "")), Q.replace(/[^-0-9.]/g, "");
    }
    function B(Q) {
      return e.modelModifiers.trim ? Q.trim() : Q;
    }
    function E(Q) {
      return e.maxlength ? Q.slice(0, j(e.maxlength)) : Q;
    }
    function M(Q) {
      const { disabled: ae } = e;
      i?.disabled.value || ae || Q.target === r.value || (P(), Fe(Q));
    }
    function U() {
      k(e["onUpdate:modelValue"], ""), d();
    }
    function L() {
      return u(e.rules, e.modelValue);
    }
    function P() {
      var Q;
      (Q = r.value) == null || Q.focus();
    }
    function N() {
      r.value.blur();
    }
    function ee() {
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
      n: ow,
      classes: tw,
      isEmpty: Zn,
      handleFocus: w,
      handleBlur: $,
      handleInput: O,
      handleChange: I,
      handleClear: H,
      handleClick: D,
      handleCompositionStart: b,
      handleCompositionEnd: z,
      handleMousedown: M,
      validate: L,
      resetValidation: d,
      reset: U,
      focus: P,
      blur: N,
      select: ee
    };
  }
});
qv.render = sw;
var ut = qv;
se(ut);
ce(ut, yu);
var WB = ut, Uo = ut, Xv = {
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
}, Gv = /* @__PURE__ */ Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function uw() {
  const { bindChildren: e, childProviders: n, length: r } = $n(Gv);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function dw() {
  const { bindParent: e, parentProvider: n, index: r } = kn(Gv);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
var { name: cw, n: fw, classes: vw } = te("checkbox"), pw = [
  "aria-checked",
  "aria-disabled",
  "tabindex"
];
function mw(e, n) {
  const r = ne("var-icon"), o = ne("var-hover-overlay"), t = ne("var-form-details"), a = We("hover"), i = We("ripple");
  return g(), C("div", { class: p(e.n("wrap")) }, [R("div", {
    ref: "checkbox",
    role: "checkbox",
    "aria-checked": e.isIndeterminate ? "mixed" : e.checked,
    "aria-disabled": e.formDisabled || e.disabled,
    class: p(e.n()),
    tabindex: e.tabindex == null ? e.disabled || e.formDisabled ? void 0 : "0" : e.tabindex,
    onFocus: n[1] || (n[1] = (l) => e.isFocusing = !0),
    onBlur: n[2] || (n[2] = (l) => e.isFocusing = !1),
    onClick: n[3] || (n[3] = (...l) => e.handleClick && e.handleClick(...l))
  }, [Re((g(), C("div", {
    class: p(e.classes(e.n("action"), [
      e.checked || e.isIndeterminate,
      e.n("--checked"),
      e.n("--unchecked")
    ], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    style: Z({ color: e.checked || e.isIndeterminate ? e.checkedColor : e.uncheckedColor })
  }, [
    e.isIndeterminate ? F(e.$slots, "indeterminate-icon", { key: 0 }, () => [G(r, {
      class: p(e.n("icon")),
      name: "minus-box",
      size: e.iconSize,
      "var-checkbox-cover": ""
    }, null, 8, ["class", "size"])]) : X("v-if", !0),
    e.checked && !e.isIndeterminate ? F(e.$slots, "checked-icon", { key: 1 }, () => [G(r, {
      class: p(e.n("icon")),
      name: "checkbox-marked",
      size: e.iconSize,
      "var-checkbox-cover": ""
    }, null, 8, ["class", "size"])]) : X("v-if", !0),
    !e.checked && !e.isIndeterminate ? F(e.$slots, "unchecked-icon", { key: 2 }, () => [G(r, {
      class: p(e.n("icon")),
      name: "checkbox-blank-outline",
      size: e.iconSize,
      "var-checkbox-cover": ""
    }, null, 8, ["class", "size"])]) : X("v-if", !0),
    G(o, {
      hovering: !e.disabled && !e.formDisabled && e.hovering,
      focusing: !e.disabled && !e.formDisabled && e.isFocusing
    }, null, 8, ["hovering", "focusing"])
  ], 6)), [[
    a,
    e.handleHovering,
    "desktop"
  ], [i, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }]]), e.$slots.default ? (g(), C("div", {
    key: 0,
    class: p(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    onClick: n[0] || (n[0] = (...l) => e.handleTextClick && e.handleTextClick(...l))
  }, [F(e.$slots, "default", { checked: e.checked })], 2)) : X("v-if", !0)], 42, pw), G(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var Zv = oe({
  name: cw,
  directives: {
    Ripple: cn,
    Hover: Tn
  },
  components: {
    VarIcon: Je,
    VarFormDetails: En,
    VarHoverOverlay: Mn
  },
  props: Xv,
  setup(e) {
    const n = y(null), r = y(!1), o = Pn(e, "modelValue"), t = Pn(e, "indeterminate"), a = T(() => o.value === e.checkedValue), i = T(() => e.checkedValue), { checkboxGroup: l, bindCheckboxGroup: s } = dw(), { hovering: u, handleHovering: d } = Wn(), { form: c, bindForm: f } = Ln(), { errorMessage: v, validateWithTrigger: m, validate: h, resetValidation: w } = Rn(), $ = {
      checkedValue: i,
      checked: a,
      sync: I,
      validate: E,
      resetValidation: w,
      reset: H
    };
    k(s, $), k(f, $), je(() => window, "keydown", A), je(() => window, "keyup", B);
    function S(M) {
      Ne(() => {
        const { validateTrigger: U, rules: L, modelValue: P } = e;
        m(U, M, L, P);
      });
    }
    function b(M) {
      const { checkedValue: U, onChange: L } = e;
      o.value = M, k(L, o.value, t.value), S("onChange"), M === U ? l?.onChecked(U) : l?.onUnchecked(U);
    }
    function z(M) {
      const { disabled: U, readonly: L, checkedValue: P, uncheckedValue: N, onClick: ee } = e;
      if (c?.disabled.value || U || (k(ee, M), c?.readonly.value || L)) return;
      if (t.value === !0) {
        t.value = !1, k(e.onChange, o.value, t.value), S("onChange");
        return;
      }
      const Q = l ? l.checkedCount.value >= Number(l.max.value) : !1;
      !a.value && Q || b(a.value ? N : P);
    }
    function O() {
      n.value.focus();
    }
    function I(M) {
      const { checkedValue: U, uncheckedValue: L } = e;
      o.value = M.includes(U) ? U : L;
    }
    function H() {
      o.value = e.uncheckedValue, w();
    }
    function D(M) {
      const { checkedValue: U, uncheckedValue: L } = e;
      [U, L].includes(M) || (M = a.value ? L : U), b(M);
    }
    function A(M) {
      if (!r.value) return;
      const { key: U } = M;
      (U === "Enter" || U === " ") && Fe(M), U === "Enter" && n.value.click();
    }
    function B(M) {
      r.value && M.key === " " && (Fe(M), n.value.click());
    }
    function E() {
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
      n: fw,
      classes: vw,
      handleHovering: d,
      handleClick: z,
      handleTextClick: O,
      toggle: D,
      reset: H,
      validate: E,
      resetValidation: w
    };
  }
});
Zv.render = mw;
var Ba = Zv;
se(Ba);
ce(Ba, Xv);
var KB = Ba, io = Ba, Jv = {
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
}, Qv = /* @__PURE__ */ Symbol("MENU_SELECT_BIND_MENU_OPTION_KEY");
function hw() {
  const { length: e, childProviders: n, bindChildren: r } = $n(Qv);
  return {
    length: e,
    menuOptions: n,
    bindMenuOptions: r
  };
}
function gw() {
  const { index: e, parentProvider: n, bindParent: r } = kn(Qv);
  return Yn(!!r, "MenuOption", "<var-menu-option/> must in <var-menu-select/>"), {
    index: e,
    menuSelect: n,
    bindMenuSelect: r
  };
}
var bw = (e, n, r) => new Promise((o, t) => {
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
}), { name: yw, n: ww, classes: kw } = te("menu-option"), $w = ["tabindex"];
function Cw(e, n) {
  const r = ne("var-checkbox"), o = ne("maybe-v-node"), t = ne("var-icon"), a = ne("var-hover-overlay"), i = We("ripple"), l = We("hover");
  return Re((g(), C("div", {
    ref: "root",
    class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.size}`), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")], [e.childrenTrigger, e.n("--children-trigger")])),
    tabindex: e.disabled ? void 0 : "-1",
    onClick: n[3] || (n[3] = (...s) => e.handleClick && e.handleClick(...s)),
    onFocus: n[4] || (n[4] = (s) => e.isFocusing = !0),
    onBlur: n[5] || (n[5] = (s) => e.isFocusing = !1)
  }, [
    R("div", { class: p(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])) }, null, 2),
    e.multiple ? (g(), Ce(r, {
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
    ])) : X("v-if", !0),
    F(e.$slots, "default", {}, () => [R("div", { class: p(e.classes(e.n("text"))) }, [G(o, {
      is: e.labelVNode,
      class: p(e.n("$--ellipsis"))
    }, null, 8, ["is", "class"])], 2)]),
    e.childrenTrigger ? (g(), C("div", {
      key: 1,
      class: p(e.n("arrow"))
    }, [G(t, {
      "var-menu-option-cover": "",
      class: p(e.n("arrow-icon")),
      name: "chevron-right"
    }, null, 8, ["class"])], 2)) : X("v-if", !0),
    G(a, {
      hovering: (e.hovering || e.highlight) && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 42, $w)), [[i, { disabled: e.disabled || !e.ripple }], [
    l,
    e.handleHovering,
    "desktop"
  ]]);
}
var xv = oe({
  name: yw,
  directives: {
    Ripple: cn,
    Hover: Tn
  },
  components: {
    VarCheckbox: io,
    VarHoverOverlay: Mn,
    VarIcon: Je,
    MaybeVNode: tt
  },
  props: Jv,
  setup(e) {
    const n = y(), r = y(), o = y(!1), t = y(!1), a = y(!1), i = T(() => t.value), l = T(() => a.value), s = T(() => e.value), u = T(() => e.disabled), d = T(() => e.ripple), { menuSelect: c, bindMenuSelect: f } = gw(), { size: v, multiple: m, onSelect: h, computeLabel: w } = c, { hovering: $, handleHovering: S } = Wn(), b = T(() => {
      var B;
      return mn(e.label) ? e.label((B = e.option) != null ? B : {
        label: e.label,
        value: e.value,
        disabled: e.disabled,
        ripple: e.ripple
      }, t.value) : e.label;
    }), z = {
      label: b,
      value: s,
      selected: i,
      disabled: u,
      ripple: d,
      indeterminate: l,
      sync: A
    };
    me([() => e.label, () => e.value], w), f(z), je(() => window, "keydown", I), je(() => window, "keyup", H);
    function O() {
      if (!e.disabled && !(!m.value && e.childrenTrigger)) {
        if (m.value && a.value) {
          a.value = !1, t.value = !1, h(z);
          return;
        }
        m.value && !a.value && (t.value = !t.value), h(z);
      }
    }
    function I(B) {
      var E;
      !o.value && !((E = r.value) != null && E.isFocusing) || ((B.key === "ArrowRight" || B.key === "ArrowLeft") && (Fe(B), k(e.onKeyArrowX, B.key)), o.value && ((B.key === " " || B.key === "Enter") && Fe(B), B.key === "Enter" && n.value.click()));
    }
    function H(B) {
      o.value && B.key === " " && (Fe(B), n.value.click());
    }
    function D() {
      return bw(this, null, function* () {
        yield Ne(), h(z);
      });
    }
    function A(B, E) {
      t.value = B, ot(E) && (a.value = E);
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
      n: ww,
      classes: kw,
      handleHovering: S,
      handleClick: O,
      handleSelect: D
    };
  }
});
xv.render = Cw;
var dt = xv;
se(dt);
ce(dt, Jv);
var qB = dt, lo = dt, wu = {
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
var Ho = "bottom", Da = "right", Ma = "left", Sw = "auto", Aa = [
  "top",
  Ho,
  Da,
  Ma
], Na = "start";
var Ow = "clippingParents", Pw = "viewport", gd = "popper", zw = "reference", bd = /* @__PURE__ */ Aa.reduce(function(e, n) {
  return e.concat([n + "-" + Na, n + "-end"]);
}, []), _v = /* @__PURE__ */ [].concat(Aa, [Sw]).reduce(function(e, n) {
  return e.concat([
    n,
    n + "-" + Na,
    n + "-end"
  ]);
}, []), Tw = "beforeRead", Ew = "read", Iw = "afterRead", Bw = "beforeMain", Dw = "main", Mw = "afterMain", Aw = "beforeWrite", Nw = "write", Vw = "afterWrite", Rw = [
  Tw,
  Ew,
  Iw,
  Bw,
  Dw,
  Mw,
  Aw,
  Nw,
  Vw
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
function gr(e) {
  return Kn(e).getComputedStyle(e);
}
function Zr(e) {
  return e instanceof Kn(e).Element || e instanceof Element;
}
function Jn(e) {
  return e instanceof Kn(e).HTMLElement || e instanceof HTMLElement;
}
function ku(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Kn(e).ShadowRoot || e instanceof ShadowRoot;
}
function Lw(e) {
  return [
    "table",
    "td",
    "th"
  ].indexOf(sr(e)) >= 0;
}
function Lr(e) {
  return ((Zr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Va(e) {
  return sr(e) === "html" ? e : e.assignedSlot || e.parentNode || (ku(e) ? e.host : null) || Lr(e);
}
function Il() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function yd(e) {
  return !Jn(e) || gr(e).position === "fixed" ? null : e.offsetParent;
}
function Fw(e) {
  var n = /firefox/i.test(Il());
  if (/Trident/i.test(Il()) && Jn(e) && gr(e).position === "fixed")
    return null;
  var r = Va(e);
  for (ku(r) && (r = r.host); Jn(r) && ["html", "body"].indexOf(sr(r)) < 0; ) {
    var o = gr(r);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function $u(e) {
  for (var n = Kn(e), r = yd(e); r && Lw(r) && gr(r).position === "static"; ) r = yd(r);
  return r && (sr(r) === "html" || sr(r) === "body" && gr(r).position === "static") ? n : r || Fw(e) || n;
}
function Er(e) {
  return e.split("-")[0];
}
function jo(e) {
  return e.split("-")[1];
}
var Io = Math.max, wd = Math.min, so = Math.round, Uw = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Hw(e, n) {
  var r = e.x, o = e.y, t = n.devicePixelRatio || 1;
  return {
    x: so(r * t) / t || 0,
    y: so(o * t) / t || 0
  };
}
function kd(e) {
  var n, r = e.popper, o = e.popperRect, t = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, c = e.isFixed, f = i.x, v = f === void 0 ? 0 : f, m = i.y, h = m === void 0 ? 0 : m, w = typeof d == "function" ? d({
    x: v,
    y: h
  }) : {
    x: v,
    y: h
  };
  v = w.x, h = w.y;
  var $ = i.hasOwnProperty("x"), S = i.hasOwnProperty("y"), b = Ma, z = "top", O = window;
  if (u) {
    var I = $u(r), H = "clientHeight", D = "clientWidth";
    if (I === Kn(r) && (I = Lr(r), gr(I).position !== "static" && l === "absolute" && (H = "scrollHeight", D = "scrollWidth")), I = I, t === "top" || (t === "left" || t === "right") && a === "end") {
      z = Ho;
      var A = c && I === O && O.visualViewport ? O.visualViewport.height : I[H];
      h -= A - o.height, h *= s ? 1 : -1;
    }
    if (t === "left" || (t === "top" || t === "bottom") && a === "end") {
      b = Da;
      var B = c && I === O && O.visualViewport ? O.visualViewport.width : I[D];
      v -= B - o.width, v *= s ? 1 : -1;
    }
  }
  var E = Object.assign({ position: l }, u && Uw), M = d === !0 ? Hw({
    x: v,
    y: h
  }, Kn(r)) : {
    x: v,
    y: h
  };
  if (v = M.x, h = M.y, s) {
    var U;
    return Object.assign({}, E, (U = {}, U[z] = S ? "0" : "", U[b] = $ ? "0" : "", U.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + h + "px)" : "translate3d(" + v + "px, " + h + "px, 0)", U));
  }
  return Object.assign({}, E, (n = {}, n[z] = S ? h + "px" : "", n[b] = $ ? v + "px" : "", n.transform = "", n));
}
function jw(e) {
  var n = e.state, r = e.options, o = r.gpuAcceleration, t = o === void 0 ? !0 : o, a = r.adaptive, i = a === void 0 ? !0 : a, l = r.roundOffsets, s = l === void 0 ? !0 : l, u = {
    placement: Er(n.placement),
    variation: jo(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, kd(Object.assign({}, u, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, kd(Object.assign({}, u, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, { "data-popper-placement": n.placement });
}
var ep = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: jw,
  data: {}
}, Yw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Vt(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Yw[n];
  });
}
var Ww = {
  start: "end",
  end: "start"
};
function $d(e) {
  return e.replace(/start|end/g, function(n) {
    return Ww[n];
  });
}
function np() {
  return !/^((?!chrome|android).)*safari/i.test(Il());
}
function uo(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var o = e.getBoundingClientRect(), t = 1, a = 1;
  n && Jn(e) && (t = e.offsetWidth > 0 && so(o.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && so(o.height) / e.offsetHeight || 1);
  var i = (Zr(e) ? Kn(e) : window).visualViewport, l = !np() && r, s = (o.left + (l && i ? i.offsetLeft : 0)) / t, u = (o.top + (l && i ? i.offsetTop : 0)) / a, d = o.width / t, c = o.height / a;
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
function Cu(e) {
  var n = Kn(e);
  return {
    scrollLeft: n.pageXOffset,
    scrollTop: n.pageYOffset
  };
}
function Su(e) {
  return uo(Lr(e)).left + Cu(e).scrollLeft;
}
function Kw(e, n) {
  var r = Kn(e), o = Lr(e), t = r.visualViewport, a = o.clientWidth, i = o.clientHeight, l = 0, s = 0;
  if (t) {
    a = t.width, i = t.height;
    var u = np();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: l + Su(e),
    y: s
  };
}
function qw(e) {
  var n, r = Lr(e), o = Cu(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, a = Io(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), i = Io(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -o.scrollLeft + Su(e), s = -o.scrollTop;
  return gr(t || r).direction === "rtl" && (l += Io(r.clientWidth, t ? t.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: s
  };
}
function Ou(e) {
  var n = gr(e), r = n.overflow, o = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + o);
}
function rp(e) {
  return [
    "html",
    "body",
    "#document"
  ].indexOf(sr(e)) >= 0 ? e.ownerDocument.body : Jn(e) && Ou(e) ? e : rp(Va(e));
}
function Bo(e, n) {
  var r;
  n === void 0 && (n = []);
  var o = rp(e), t = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Kn(o), i = t ? [a].concat(a.visualViewport || [], Ou(o) ? o : []) : o, l = n.concat(i);
  return t ? l : l.concat(Bo(Va(i)));
}
function Xw(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n)) return !0;
  if (r && ku(r)) {
    var o = n;
    do {
      if (o && e.isSameNode(o)) return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Bl(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Gw(e, n) {
  var r = uo(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Cd(e, n, r) {
  return n === "viewport" ? Bl(Kw(e, r)) : Zr(n) ? Gw(n, r) : Bl(qw(Lr(e)));
}
function Zw(e) {
  var n = Bo(Va(e)), r = ["absolute", "fixed"].indexOf(gr(e).position) >= 0 && Jn(e) ? $u(e) : e;
  return Zr(r) ? n.filter(function(o) {
    return Zr(o) && Xw(o, r) && sr(o) !== "body";
  }) : [];
}
function Jw(e, n, r, o) {
  var t = n === "clippingParents" ? Zw(e) : [].concat(n), a = [].concat(t, [r]), i = a[0], l = a.reduce(function(s, u) {
    var d = Cd(e, u, o);
    return s.top = Io(d.top, s.top), s.right = wd(d.right, s.right), s.bottom = wd(d.bottom, s.bottom), s.left = Io(d.left, s.left), s;
  }, Cd(e, i, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Qw(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function op(e) {
  var n = e.reference, r = e.element, o = e.placement, t = o ? Er(o) : null, a = o ? jo(o) : null, i = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
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
    case Da:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case Ma:
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
  var u = t ? Qw(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case Na:
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
function xw() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function _w(e) {
  return Object.assign({}, xw(), e);
}
function ek(e, n) {
  return n.reduce(function(r, o) {
    return r[o] = e, r;
  }, {});
}
function tp(e, n) {
  n === void 0 && (n = {});
  var r = n, o = r.placement, t = o === void 0 ? e.placement : o, a = r.strategy, i = a === void 0 ? e.strategy : a, l = r.boundary, s = l === void 0 ? Ow : l, u = r.rootBoundary, d = u === void 0 ? Pw : u, c = r.elementContext, f = c === void 0 ? gd : c, v = r.altBoundary, m = v === void 0 ? !1 : v, h = r.padding, w = h === void 0 ? 0 : h, $ = _w(typeof w != "number" ? w : ek(w, Aa)), S = f === "popper" ? zw : gd, b = e.rects.popper, z = e.elements[m ? S : f], O = Jw(Zr(z) ? z : z.contextElement || Lr(e.elements.popper), s, d, i), I = uo(e.elements.reference), H = op({
    reference: I,
    element: b,
    strategy: "absolute",
    placement: t
  }), D = Bl(Object.assign({}, b, H)), A = f === "popper" ? D : I, B = {
    top: O.top - A.top + $.top,
    bottom: A.bottom - O.bottom + $.bottom,
    left: O.left - A.left + $.left,
    right: A.right - O.right + $.right
  }, E = e.modifiersData.offset;
  if (f === "popper" && E) {
    var M = E[t];
    Object.keys(B).forEach(function(U) {
      var L = ["right", "bottom"].indexOf(U) >= 0 ? 1 : -1, P = ["top", "bottom"].indexOf(U) >= 0 ? "y" : "x";
      B[U] += M[P] * L;
    });
  }
  return B;
}
function nk(e, n) {
  n === void 0 && (n = {});
  var r = n, o = r.placement, t = r.boundary, a = r.rootBoundary, i = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? _v : s, d = jo(o), c = d ? l ? bd : bd.filter(function(m) {
    return jo(m) === d;
  }) : Aa, f = c.filter(function(m) {
    return u.indexOf(m) >= 0;
  });
  f.length === 0 && (f = c);
  var v = f.reduce(function(m, h) {
    return m[h] = tp(e, {
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
function rk(e) {
  if (Er(e) === "auto") return [];
  var n = Vt(e);
  return [
    $d(e),
    n,
    $d(n)
  ];
}
function ok(e) {
  var n = e.state, r = e.options, o = e.name;
  if (!n.modifiersData[o]._skip) {
    for (var t = r.mainAxis, a = t === void 0 ? !0 : t, i = r.altAxis, l = i === void 0 ? !0 : i, s = r.fallbackPlacements, u = r.padding, d = r.boundary, c = r.rootBoundary, f = r.altBoundary, v = r.flipVariations, m = v === void 0 ? !0 : v, h = r.allowedAutoPlacements, w = n.options.placement, $ = Er(w) === w, S = s || ($ || !m ? [Vt(w)] : rk(w)), b = [w].concat(S).reduce(function(K, x) {
      return K.concat(Er(x) === "auto" ? nk(n, {
        placement: x,
        boundary: d,
        rootBoundary: c,
        padding: u,
        flipVariations: m,
        allowedAutoPlacements: h
      }) : x);
    }, []), z = n.rects.reference, O = n.rects.popper, I = /* @__PURE__ */ new Map(), H = !0, D = b[0], A = 0; A < b.length; A++) {
      var B = b[A], E = Er(B), M = jo(B) === Na, U = ["top", Ho].indexOf(E) >= 0, L = U ? "width" : "height", P = tp(n, {
        placement: B,
        boundary: d,
        rootBoundary: c,
        altBoundary: f,
        padding: u
      }), N = U ? M ? Da : Ma : M ? Ho : "top";
      z[L] > O[L] && (N = Vt(N));
      var ee = Vt(N), Q = [];
      if (a && Q.push(P[E] <= 0), l && Q.push(P[N] <= 0, P[ee] <= 0), Q.every(function(K) {
        return K;
      })) {
        D = B, H = !1;
        break;
      }
      I.set(B, Q);
    }
    if (H)
      for (var ae = m ? 3 : 1, Oe = function(x) {
        var ue = b.find(function(he) {
          var W = I.get(he);
          if (W) return W.slice(0, x).every(function(ie) {
            return ie;
          });
        });
        if (ue)
          return D = ue, "break";
      }, le = ae; le > 0 && Oe(le) !== "break"; le--) ;
    n.placement !== D && (n.modifiersData[o]._skip = !0, n.placement = D, n.reset = !0);
  }
}
var tk = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ok,
  requiresIfExists: ["offset"],
  data: { _skip: !1 }
};
function ak(e, n, r) {
  var o = Er(e), t = ["left", "top"].indexOf(o) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, n, { placement: e })) : r, i = a[0], l = a[1];
  return i = i || 0, l = (l || 0) * t, ["left", "right"].indexOf(o) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function ik(e) {
  var n = e.state, r = e.options, o = e.name, t = r.offset, a = t === void 0 ? [0, 0] : t, i = _v.reduce(function(d, c) {
    return d[c] = ak(c, n.rects, a), d;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[o] = i;
}
var lk = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ik
};
function sk(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function uk(e) {
  return e === Kn(e) || !Jn(e) ? Cu(e) : sk(e);
}
function dk(e) {
  var n = e.getBoundingClientRect(), r = so(n.width) / e.offsetWidth || 1, o = so(n.height) / e.offsetHeight || 1;
  return r !== 1 || o !== 1;
}
function ck(e, n, r) {
  r === void 0 && (r = !1);
  var o = Jn(n), t = Jn(n) && dk(n), a = Lr(n), i = uo(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (o || !o && !r) && ((sr(n) !== "body" || Ou(a)) && (l = uk(n)), Jn(n) ? (s = uo(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : a && (s.x = Su(a))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function fk(e) {
  var n = uo(e), r = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - o) <= 1 && (o = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: o
  };
}
function vk(e) {
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
function pk(e) {
  var n = vk(e);
  return Rw.reduce(function(r, o) {
    return r.concat(n.filter(function(t) {
      return t.phase === o;
    }));
  }, []);
}
function mk(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function hk(e) {
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
var Sd = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Od() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
  return !n.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function gk(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, o = r === void 0 ? [] : r, t = n.defaultOptions, a = t === void 0 ? Sd : t;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Sd, a),
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
        var S = typeof $ == "function" ? $(d.options) : $;
        h(), d.options = Object.assign({}, a, d.options, S), d.scrollParents = {
          reference: Zr(l) ? Bo(l) : l.contextElement ? Bo(l.contextElement) : [],
          popper: Bo(s)
        };
        var b = pk(hk([].concat(o, d.options.modifiers)));
        return d.orderedModifiers = b.filter(function(z) {
          return z.enabled;
        }), m(), v.update();
      },
      forceUpdate: function() {
        if (!f) {
          var $ = d.elements, S = $.reference, b = $.popper;
          if (Od(S, b)) {
            d.rects = {
              reference: ck(S, $u(b), d.options.strategy === "fixed"),
              popper: fk(b)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(B) {
              return d.modifiersData[B.name] = Object.assign({}, B.data);
            });
            for (var z = 0; z < d.orderedModifiers.length; z++) {
              if (d.reset === !0) {
                d.reset = !1, z = -1;
                continue;
              }
              var O = d.orderedModifiers[z], I = O.fn, H = O.options, D = H === void 0 ? {} : H, A = O.name;
              typeof I == "function" && (d = I({
                state: d,
                options: D,
                name: A,
                instance: v
              }) || d);
            }
          }
        }
      },
      update: mk(function() {
        return new Promise(function(w) {
          v.forceUpdate(), w(d);
        });
      }),
      destroy: function() {
        h(), f = !0;
      }
    };
    if (!Od(l, s)) return v;
    v.setOptions(u).then(function(w) {
      !f && u.onFirstUpdate && u.onFirstUpdate(w);
    });
    function m() {
      d.orderedModifiers.forEach(function(w) {
        var $ = w.name, S = w.options, b = S === void 0 ? {} : S, z = w.effect;
        if (typeof z == "function") {
          var O = z({
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
var kt = { passive: !0 };
function bk(e) {
  var n = e.state, r = e.instance, o = e.options, t = o.scroll, a = t === void 0 ? !0 : t, i = o.resize, l = i === void 0 ? !0 : i, s = Kn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, kt);
  }), l && s.addEventListener("resize", r.update, kt), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, kt);
    }), l && s.removeEventListener("resize", r.update, kt);
  };
}
var yk = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: bk,
  data: {}
};
function wk(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = op({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
var kk = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: wk,
  data: {}
};
function $k(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var o = n.styles[r] || {}, t = n.attributes[r] || {}, a = n.elements[r];
    !Jn(a) || !sr(a) || (Object.assign(a.style, o), Object.keys(t).forEach(function(i) {
      var l = t[i];
      l === !1 ? a.removeAttribute(i) : a.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function Ck(e) {
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
      !Jn(t) || !sr(t) || (Object.assign(t.style, i), Object.keys(a).forEach(function(l) {
        t.removeAttribute(l);
      }));
    });
  };
}
var Sk = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: $k,
  effect: Ck,
  requires: ["computeStyles"]
}, Ok = [
  yk,
  kk,
  ep,
  Sk
], Pk = /* @__PURE__ */ gk({ defaultModifiers: Ok }), zk = Object.defineProperty, Tk = Object.defineProperties, Ek = Object.getOwnPropertyDescriptors, Pd = Object.getOwnPropertySymbols, Ik = Object.prototype.hasOwnProperty, Bk = Object.prototype.propertyIsEnumerable, zd = (e, n, r) => n in e ? zk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, pl = (e, n) => {
  for (var r in n || (n = {})) Ik.call(n, r) && zd(e, r, n[r]);
  if (Pd)
    for (var r of Pd(n)) Bk.call(n, r) && zd(e, r, n[r]);
  return e;
}, ml = (e, n) => Tk(e, Ek(n)), Td = (e, n, r) => new Promise((o, t) => {
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
function ap(e) {
  const n = y(null), r = y(null), o = y({
    width: 0,
    height: 0
  }), t = Pn(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(N, ee) {
      k(ee ? e.onOpen : e.onClose);
    }
  }), { zIndex: a } = it(() => t.value, 1);
  pu(() => t.value, a);
  let i = null, l, s = !1, u = !1, d = !0;
  je(() => window, "keydown", M), me(() => [
    e.offsetX,
    e.offsetY,
    e.placement,
    e.strategy
  ], U), me(() => e.disabled, P), me(() => t.value, (N) => {
    N && U();
  }), ar(U), br(c), _o(f);
  function c() {
    const N = A();
    i = Pk(N, r.value, D()), N.addEventListener("mouseenter", h), N.addEventListener("mouseleave", w), N.addEventListener("click", b), document.addEventListener("click", z);
  }
  function f() {
    const N = A();
    N && (N.removeEventListener("mouseenter", h), N.removeEventListener("mouseleave", w), N.removeEventListener("click", b)), i.destroy(), document.removeEventListener("click", z);
  }
  function v() {
    const N = A();
    if (!N) return;
    const { width: ee, height: Q } = _n(N);
    o.value = {
      width: on(ee),
      height: on(Q)
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
    return Td(this, null, function* () {
      e.trigger === "hover" && (u = !1, yield On(), !s && P());
    });
  }
  function $() {
    e.trigger === "hover" && (s = !0, e.cascadeOptimization && (d = !1));
  }
  function S() {
    return Td(this, null, function* () {
      e.trigger === "hover" && (s = !1, yield On(), !u && P());
    });
  }
  function b() {
    if (e.trigger === "click") {
      if (e.closeOnClickReference && t.value) {
        P();
        return;
      }
      L();
    }
  }
  function z(N) {
    const ee = A();
    if (ee && !ee.contains(N.target)) {
      if (e.trigger !== "click") return;
      O(), k(e.onClickOutside, N);
    }
  }
  function O() {
    P();
  }
  function I() {
    U(), k(e.onClosed);
  }
  function H() {
    const { offsetX: N, offsetY: ee, placement: Q } = e;
    v();
    const ae = {
      x: on(N),
      y: on(ee)
    };
    switch (Q) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: ae.x,
          distance: ae.y - o.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: ae.x,
          distance: ae.y - o.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: ae.x,
          distance: ae.y - o.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: ae.x,
          distance: -ae.y - o.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: ae.x,
          distance: -ae.y - o.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: ae.x,
          distance: -ae.y - o.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: ae.y,
          distance: ae.x - o.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: ae.y,
          distance: -ae.x - o.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: Q,
          skidding: ae.y,
          distance: -ae.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: Q,
          skidding: ae.x,
          distance: -ae.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: Q,
          skidding: ae.x,
          distance: ae.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: Q,
          skidding: ae.y,
          distance: ae.x
        };
    }
  }
  function D() {
    const { placement: N, skidding: ee, distance: Q } = H();
    return {
      placement: N,
      modifiers: [
        ml(pl({}, tk), { enabled: t.value }),
        ml(pl({}, lk), { options: { offset: [ee, Q] } }),
        ml(pl({}, ep), {
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
          fn({ state: ae }) {
            ae.styles.popper.transformOrigin = m();
          }
        }
      ],
      strategy: e.strategy
    };
  }
  function A() {
    var N, ee;
    const Q = (N = l ?? e.reference) != null ? N : n.value;
    return an(Q) ? (ee = n.value) == null ? void 0 : ee.querySelector(Q) : Q;
  }
  function B(N) {
    d = N;
  }
  function E(N) {
    f(), l = N, c();
  }
  function M(N) {
    const { closeOnKeyEscape: ee = !1 } = e;
    N.key === "Escape" && ee && t.value && (Fe(N), P());
  }
  function U() {
    i.setOptions(D());
  }
  function L() {
    e.disabled || (t.value = !0, k(e["onUpdate:show"], !0));
  }
  function P() {
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
    handlePopoverMouseleave: S,
    handleClosed: I,
    setReference: E,
    setAllowClose: B,
    resize: U,
    open: L,
    close: P
  };
}
var { name: Dk, n: Mk, classes: Ak } = te("menu");
function Nk(e, n) {
  return g(), C("div", {
    ref: "host",
    class: p(e.classes(e.n(), e.n("$--box")))
  }, [F(e.$slots, "default"), (g(), Ce(cr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [G(en, {
    name: e.n(),
    onAfterEnter: e.onOpened,
    onAfterLeave: e.handleClosed,
    persisted: ""
  }, {
    default: pe(() => [Re(R("div", {
      ref: "popover",
      style: Z({
        zIndex: e.zIndex,
        width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.referenceSize.width)) : void 0
      }),
      class: p(e.classes(e.n("menu"), e.n("$--box"), e.popoverClass, [e.defaultStyle, e.n("--menu-background-color")], [e.defaultStyle, e.formatElevation(e.elevation, 3)])),
      onClick: n[0] || (n[0] = jn(() => {
      }, ["stop"])),
      onMouseenter: n[1] || (n[1] = (...r) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...r)),
      onMouseleave: n[2] || (n[2] = (...r) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...r))
    }, [F(e.$slots, "menu")], 38), [[xn, e.show]])]),
    _: 3
  }, 8, [
    "name",
    "onAfterEnter",
    "onAfterLeave"
  ])], 8, ["to", "disabled"]))], 2);
}
var ip = oe({
  name: Dk,
  props: wu,
  setup(e) {
    const { disabled: n } = xr(), { popover: r, host: o, referenceSize: t, show: a, zIndex: i, handlePopoverMouseenter: l, handlePopoverMouseleave: s, handlePopoverClose: u, handleClosed: d, setAllowClose: c, open: f, close: v, resize: m, setReference: h } = ap(e);
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
      formatElevation: hn,
      toSizeUnit: ze,
      n: Mk,
      classes: Ak,
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
ip.render = Nk;
var ct = ip;
se(ct);
ce(ct, wu);
var XB = ct, Yo = ct;
function lp(e) {
  const { multiple: n, modelValue: r, optionProviders: o, optionProvidersLength: t, optionIsIndeterminate: a } = e, i = y(""), l = y([]);
  me(r, f, { deep: !0 }), me(t, f);
  function s() {
    const v = n(), m = r();
    v && (l.value = m.map(u)), !v && !Zn(m) && (i.value = u(m)), !v && Zn(m) && (i.value = "");
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
var Vk = Object.defineProperty, Rk = Object.defineProperties, Lk = Object.getOwnPropertyDescriptors, Ed = Object.getOwnPropertySymbols, Fk = Object.prototype.hasOwnProperty, Uk = Object.prototype.propertyIsEnumerable, Id = (e, n, r) => n in e ? Vk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Hk = (e, n) => {
  for (var r in n || (n = {})) Fk.call(n, r) && Id(e, r, n[r]);
  if (Ed)
    for (var r of Ed(n)) Uk.call(n, r) && Id(e, r, n[r]);
  return e;
}, jk = (e, n) => Rk(e, Lk(n)), ra = jk(Hk({
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
])), { onKeyEscape: V() }), Yk = Object.defineProperty, Bd = Object.getOwnPropertySymbols, Wk = Object.prototype.hasOwnProperty, Kk = Object.prototype.propertyIsEnumerable, Dd = (e, n, r) => n in e ? Yk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, qk = (e, n) => {
  for (var r in n || (n = {})) Wk.call(n, r) && Dd(e, r, n[r]);
  if (Bd)
    for (var r of Bd(n)) Kk.call(n, r) && Dd(e, r, n[r]);
  return e;
}, Xk = (e, n, r) => new Promise((o, t) => {
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
}), { name: Gk, n: Zk } = te("menu-children"), Jk = { ref: "menuOptions" };
function Qk(e, n) {
  const r = ne("var-menu-option"), o = ne("var-menu-children"), t = ne("var-menu");
  return g(), Ce(t, {
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
    default: pe(() => [G(r, {
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
    fn: pe(() => [R("div", Jk, [(g(!0), C(De, null, qe(e.options, (a) => (g(), C(De, { key: a[e.valueKey] }, [a[e.childrenKey] ? (g(), Ce(o, {
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
    ])) : (g(), Ce(r, {
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
var sp = oe({
  name: Gk,
  components: {
    VarMenu: ct,
    VarMenuOption: dt
  },
  props: qk({
    parentShow: Boolean,
    disabled: Boolean,
    option: {
      type: Object,
      required: !0
    },
    highlightOptions: Me(ra, "options"),
    onKeyArrowX: V(),
    onKeyArrowRightOpen: V(),
    onMouseenter: V()
  }, Me(ra, [
    "options",
    "valueKey",
    "labelKey",
    "childrenKey"
  ])),
  setup(e) {
    const n = y(!1), r = y(), o = y(), t = y(), a = y();
    me(() => e.parentShow, (f) => {
      f || (n.value = !1);
    }, { immediate: !0 });
    function i(f) {
      return Xk(this, null, function* () {
        var v;
        k(e.onKeyArrowX, f), f === "ArrowRight" && (k(e.onKeyArrowRightOpen), (v = r.value) == null || v.open(), yield Tr(), gu(r.value.$el, t.value, "ArrowDown"));
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
      n: Zk,
      close: s,
      handleArrowLeft: l,
      handleArrowRight: i,
      handleMouseenter: c,
      allowClose: u,
      allowChildrenClose: d
    };
  }
});
sp.render = Qk;
var xk = sp, _k = Object.defineProperty, e$ = Object.defineProperties, n$ = Object.getOwnPropertyDescriptors, Md = Object.getOwnPropertySymbols, r$ = Object.prototype.hasOwnProperty, o$ = Object.prototype.propertyIsEnumerable, Ad = (e, n, r) => n in e ? _k(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, t$ = (e, n) => {
  for (var r in n || (n = {})) r$.call(n, r) && Ad(e, r, n[r]);
  if (Md)
    for (var r of Md(n)) o$.call(n, r) && Ad(e, r, n[r]);
  return e;
}, a$ = (e, n) => e$(e, n$(n)), { name: i$, n: l$, classes: s$ } = te("menu-select");
function u$(e, n) {
  const r = ne("var-menu-children"), o = ne("var-menu-option"), t = ne("var-menu");
  return g(), Ce(t, {
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
    menu: pe(() => [R("div", {
      ref: "menuOptionsRef",
      class: p(e.classes(e.n("menu"), e.formatElevation(e.elevation, 3), [e.scrollable, e.n("--scrollable")]))
    }, [(g(!0), C(De, null, qe(e.options, (a) => (g(), C(De, { key: a[e.valueKey] }, [a[e.childrenKey] ? (g(), Ce(r, {
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
    ])) : (g(), Ce(o, {
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
    default: pe(() => [F(e.$slots, "default")]),
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
var up = oe({
  name: i$,
  components: {
    VarMenu: Yo,
    VarMenuOption: lo,
    VarMenuChildren: xk
  },
  props: ra,
  setup(e) {
    const n = Pn(e, "show"), r = y(), o = y(), t = y(), a = T(() => $(e.options)), { menuOptions: i, length: l, bindMenuOptions: s } = hw(), { computeLabel: u, getSelectedValue: d, getOptionProviderKey: c } = lp({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => i,
      optionProvidersLength: () => l.value,
      optionIsIndeterminate(E) {
        var M;
        const U = v(E.value.value);
        if (!U) return !1;
        const L = ((M = U._children) != null ? M : []).filter((N) => !N.disabled), P = L.filter((N) => e.modelValue.includes(N.value));
        return P.length > 0 && P.length < L.length;
      }
    }), f = T(() => {
      const { multiple: E, modelValue: M } = e;
      if (E) return [];
      const U = a.value.find((N) => N.value === M), L = [];
      let P = U?._parent;
      for (; P; )
        L.push(P), P = P._parent;
      return L;
    });
    s({
      size: T(() => e.size),
      multiple: T(() => e.multiple),
      computeLabel: u,
      onSelect: S
    }), je(() => window, "keydown", z);
    function v(E) {
      return a.value.find((M) => M.value === E);
    }
    function m(E) {
      return i.find((M) => M.value.value === E);
    }
    function h(E) {
      return E[e.childrenKey];
    }
    function w(E) {
      const M = [];
      U(E);
      function U(L) {
        L.forEach((P) => {
          M.push(P);
          const N = h(P);
          N && U(N);
        });
      }
      return M;
    }
    function $(E) {
      function M(U, L) {
        return U.map((P) => {
          P = a$(t$({}, P), { _rawOption: P }), L && (P._parent = L);
          const N = h(P);
          if (N) {
            const ee = M(N, P);
            P[e.childrenKey] = ee, P._children = w(ee);
          }
          return P;
        });
      }
      return w(M(E));
    }
    function S(E) {
      var M, U;
      const { multiple: L, closeOnSelect: P } = e, { value: N, label: ee, selected: Q, disabled: ae, ripple: Oe } = E, le = v(N.value);
      if (le) {
        const ue = ((M = le._children) != null ? M : []).filter((he) => !he.disabled).map((he) => he.value);
        L && Q.value && (i.forEach((he) => {
          ue.includes(he.value.value) && he.sync(!0, !1);
        }), b(le)), L && !Q.value && (i.forEach((he) => {
          ue.includes(he.value.value) && he.sync(!1, !1);
        }), b(le));
      }
      const K = d(E), x = (U = le?._rawOption) != null ? U : {
        value: N.value,
        label: ee.value,
        disabled: ae.value,
        ripple: Oe.value
      };
      k(e.onSelect, c(E), x), k(e["onUpdate:modelValue"], K), !L && P && (r.value.$el.focus(), D());
    }
    function b(E) {
      let M = E._parent;
      for (; M; ) {
        const U = m(M.value), L = h(M).filter((ee) => !ee.disabled), P = L.every((ee) => !m(ee.value).selected.value), N = L.every((ee) => m(ee.value).selected.value);
        P ? U.sync(!1, !1) : N ? U.sync(!0, !1) : U.sync(!1, !0), M = M._parent;
      }
    }
    function z(E) {
      if (e.disabled || !n.value) return;
      const { key: M } = E;
      if ([
        "Escape",
        "ArrowDown",
        "ArrowUp"
      ].includes(M) && Fe(E), M === "Escape") {
        r.value.$el.focus(), D(), k(e.onKeyEscape);
        return;
      }
      (M === "ArrowDown" || M === "ArrowUp") && gu(r.value.$el, o.value, M, (U, L, P) => P ? !0 : O(U) === O(L));
    }
    function O(E) {
      var M, U;
      if (E.classList.contains("var-menu-option--children-trigger")) return (M = E.parentNode) == null ? void 0 : M.parentNode;
      if (E.classList.contains("var-checkbox")) {
        const L = (U = E.parentNode) == null ? void 0 : U.parentNode;
        if (L) return O(L);
      }
      return E.parentNode;
    }
    function I(E) {
      var M;
      (M = t.value) == null || M.forEach((U) => {
        if (U.allowClose(), E == null) {
          U.close();
          return;
        }
        U.option.value !== E.value && U.close();
      });
    }
    function H() {
      var E;
      (E = r.value) == null || E.open();
    }
    function D() {
      var E;
      (E = r.value) == null || E.close();
    }
    function A() {
      var E;
      (E = r.value) == null || E.resize();
    }
    function B(E) {
      var M;
      (M = r.value) == null || M.setReference(E);
    }
    return {
      show: n,
      menu: r,
      menuOptionsRef: o,
      menuChildren: t,
      highlightOptions: f,
      n: l$,
      classes: s$,
      allowChildrenClose: I,
      formatElevation: hn,
      open: H,
      close: D,
      resize: A,
      setReference: B
    };
  }
});
up.render = u$;
var Ra = up;
se(Ra);
ce(Ra, ra);
var GB = Ra, Wo = Ra, d$ = Object.defineProperty, Nd = Object.getOwnPropertySymbols, c$ = Object.prototype.hasOwnProperty, f$ = Object.prototype.propertyIsEnumerable, Vd = (e, n, r) => n in e ? d$(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, v$ = (e, n) => {
  for (var r in n || (n = {})) c$.call(n, r) && Vd(e, r, n[r]);
  if (Nd)
    for (var r of Nd(n)) f$.call(n, r) && Vd(e, r, n[r]);
  return e;
}, dp = v$({
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
])), Rd = (e, n, r) => new Promise((o, t) => {
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
}), { name: p$, n: m$ } = te("auto-complete"), h$ = ["tabindex"];
function g$(e, n) {
  const r = ne("var-input"), o = ne("var-menu-option"), t = ne("var-menu-select"), a = ne("var-form-details");
  return g(), C("div", {
    ref: "root",
    class: p(e.n()),
    tabindex: e.tabindex == null ? e.disabled || e.formDisabled ? void 0 : "0" : e.tabindex,
    onFocusin: n[2] || (n[2] = (...i) => e.focus && e.focus(...i)),
    onClick: n[3] || (n[3] = (...i) => e.handleClick && e.handleClick(...i))
  }, [G(t, {
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
    options: pe(() => [R("div", { class: p(e.n("options")) }, [(g(!0), C(De, null, qe(e.viewOptions, (i) => (g(), Ce(o, {
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
    default: pe(() => [G(r, Ye({ ref: "input" }, {
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
        fn: pe(() => [F(e.$slots, "prepend-icon")]),
        key: "0"
      } : void 0,
      e.$slots["append-icon"] ? {
        name: "append-icon",
        fn: pe(() => [F(e.$slots, "append-icon")]),
        key: "1"
      } : void 0,
      e.$slots["clear-icon"] ? {
        name: "clear-icon",
        fn: pe(({ clear: i }) => [F(e.$slots, "clear-icon", { clear: i })]),
        key: "2"
      } : void 0,
      e.$slots["extra-message"] ? {
        name: "extra-message",
        fn: pe(() => [F(e.$slots, "extra-message")]),
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
  ]), G(a, {
    "error-message": e.errorMessage,
    "extra-message": e.maxlengthText
  }, null, 8, ["error-message", "extra-message"])], 42, h$);
}
var cp = oe({
  name: p$,
  components: {
    VarInput: Uo,
    VarMenuSelect: Wo,
    VarMenuOption: lo,
    VarFormDetails: En
  },
  props: dp,
  setup(e) {
    const n = y(), r = y(), o = y(!1), t = Pn(e, "modelValue"), a = y([]), i = y(!1), l = T(() => {
      const { maxlength: P } = e;
      return P ? Zn(t.value) ? `0 / ${P}` : `${String(t.value).length}/${P}` : "";
    }), { errorMessage: s, validateWithTrigger: u, validate: d, resetValidation: c } = Rn(), { bindForm: f, form: v } = Ln();
    let m = !1;
    const h = {
      reset: w,
      resetValidation: c,
      validate: $
    };
    tv(() => n.value, "click", () => {
      if (m) {
        m = !1;
        return;
      }
      b();
    }), me(() => [e.options, o.value], H), k(f, h), je(() => window, "keydown", I);
    function w() {
      k(e["onUpdate:modelValue"], ""), c();
    }
    function $() {
      return d(e.rules, e.modelValue);
    }
    function S() {
      o.value || e.disabled || v?.disabled.value || (o.value = !0, r.value.focus(), k(e.onFocus), O("onFocus"));
    }
    function b() {
      o.value && (o.value = !1, i.value = !1, r.value.blur(), k(e.onBlur), O("onBlur"));
    }
    function z() {
      i.value || b();
    }
    function O(P) {
      Ne(() => {
        const { validateTrigger: N, rules: ee, modelValue: Q } = e;
        u(N, P, ee, Q);
      });
    }
    function I(P) {
      return Rd(this, null, function* () {
        var N;
        if (v?.disabled.value || v?.readonly.value || e.disabled || e.readonly || !o.value || !i.value) return;
        const { key: ee } = P;
        if (ee === "Tab") {
          Fe(P), n.value.focus(), i.value = !1;
          return;
        }
        if (![
          "ArrowUp",
          "ArrowDown",
          "Enter"
        ].includes(ee)) {
          r.value.focus();
          return;
        }
        ee === "Enter" && (yield Tr(), (N = r.value) == null || N.focus());
      });
    }
    function H() {
      o.value && (i.value = L(t.value)), i.value && (a.value = e.options);
    }
    function D(P, N) {
      H(), k(e.onInput, P, N), O("onInput");
    }
    function A() {
      m = !0, H(), k(e.onClear, t.value), O("onClear");
    }
    function B(P) {
      e.disabled || v?.disabled.value || (k(e.onClick, P), O("onClick"));
    }
    function E(P) {
      k(e.onChange, P), O("onChange");
    }
    function M(P) {
      return Rd(this, null, function* () {
        var N;
        e.maxlength != null && (P = P.slice(0, j(e.maxlength))), P !== t.value && (t.value = P, k(e.onChange, P), O("onChange")), yield Tr(), (N = r.value) == null || N.focus();
      });
    }
    function U() {
      r.value.focus();
    }
    function L(P) {
      return e.disabled || e.readonly || v?.disabled.value || v?.readonly.value ? !1 : e.options.length > 0 && (e.getShow != null ? e.getShow(P) : P.length > 0);
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
      n: m$,
      handleInput: D,
      handleClear: A,
      handleClick: B,
      handleChange: E,
      handleBlur: z,
      handleKeyEscape: U,
      handleAutoComplete: M,
      reset: w,
      validate: $,
      resetValidation: c,
      blur: b,
      focus: S
    };
  }
});
cp.render = g$;
var La = cp;
se(La);
ce(La, dp);
var ZB = La, Dl = La, Ld = (e) => an(e) ? e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp|ico)$/i.test(e) : !1, Fd = (e) => an(e) ? e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e) : !1, b$ = (e) => {
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
}, Ml = (e) => e, Ud = (e) => e ** 3, fp = (e) => e < 0.5 ? Ud(e * 2) / 2 : 1 - Ud((1 - e) * 2) / 2, Jr = (e, n, r = "") => {
  if (e === void 0 && (e = ""), e.length >= n) return e;
  const o = n - e.length, t = Math.floor(o / r.length);
  return r.repeat(t) + r.slice(0, o % r.length) + e;
}, y$ = Object.defineProperty, Hd = Object.getOwnPropertySymbols, w$ = Object.prototype.hasOwnProperty, k$ = Object.prototype.propertyIsEnumerable, jd = (e, n, r) => n in e ? y$(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, $$ = (e, n) => {
  for (var r in n || (n = {})) w$.call(n, r) && jd(e, r, n[r]);
  if (Hd)
    for (var r of Hd(n)) k$.call(n, r) && jd(e, r, n[r]);
  return e;
}, Fa = (e, n, r) => new Promise((o, t) => {
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
}), C$ = "background-image", S$ = "lazy-loading", O$ = "lazy-error", Yd = "lazy-attempt", P$ = [
  "scroll",
  "wheel",
  "mousewheel",
  "resize",
  "animationend",
  "transitionend",
  "touchmove"
], Al = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", co = [], oa = [], vp = b$(100), bn = {
  loading: Al,
  error: Al,
  attempt: 3,
  throttleWait: 300,
  events: P$
}, Pu = ka(ft, bn.throttleWait);
function Ua(e, n) {
  e._lazy.arg === C$ ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function z$(e) {
  e._lazy.loading && Ua(e, e._lazy.loading), ft();
}
function T$(e) {
  e._lazy.error && Ua(e, e._lazy.error), e._lazy.state = "error", Tu(e), ft();
}
function pp(e, n) {
  Ua(e, n), e._lazy.state = "success", Tu(e), ft();
}
function E$(e) {
  var n;
  oa.includes(e) || (oa.push(e), (n = bn.events) == null || n.forEach((r) => {
    e.addEventListener(r, Pu, { passive: !0 });
  }));
}
function I$() {
  oa.forEach((e) => {
    var n;
    (n = bn.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Pu);
    });
  }), oa.length = 0;
}
function B$(e, n) {
  var r, o;
  const t = {
    loading: (r = e.getAttribute(S$)) != null ? r : bn.loading,
    error: (o = e.getAttribute(O$)) != null ? o : bn.error,
    attempt: e.getAttribute(Yd) ? Number(e.getAttribute(Yd)) : bn.attempt
  };
  e._lazy = $$({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), Ua(e, Al), k(bn.filter, e._lazy);
}
function D$(e, n) {
  const r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, vp.add(n), pp(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? T$(e) : mp(e);
  });
}
function mp(e) {
  if (e._lazy.attemptLock) return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (vp.has(n)) {
    pp(e, n), e._lazy.attemptLock = !1;
    return;
  }
  z$(e), D$(e, n);
}
function zu(e) {
  return Fa(this, null, function* () {
    yield On(), Qf(e) && mp(e);
  });
}
function ft() {
  co.forEach((e) => zu(e));
}
function M$(e) {
  return Fa(this, null, function* () {
    !co.includes(e) && co.push(e), jy(e).forEach(E$), yield zu(e);
  });
}
function Tu(e) {
  Br(co, e), co.length === 0 && I$();
}
function A$(e, n) {
  const { src: r, arg: o } = e._lazy;
  return r !== n.value || o !== n.arg;
}
function hp(e, n) {
  return Fa(this, null, function* () {
    B$(e, n), yield M$(e);
  });
}
function N$(e, n) {
  return Fa(this, null, function* () {
    if (!A$(e, n)) {
      co.includes(e) && (yield zu(e));
      return;
    }
    yield hp(e, n);
  });
}
function V$(e = {}) {
  const { events: n, loading: r, error: o, attempt: t, throttleWait: a, filter: i } = e;
  bn.events = n ?? bn.events, bn.loading = r ?? bn.loading, bn.error = o ?? bn.error, bn.attempt = t ?? bn.attempt, bn.throttleWait = a ?? bn.throttleWait, bn.filter = i;
}
var gp = {
  mounted: hp,
  unmounted: Tu,
  updated: N$,
  install(e, n) {
    V$(n), Pu = ka(ft, bn.throttleWait), e.directive("lazy", this);
  }
}, JB = gp, Ko = gp, bp = {
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
}, R$ = (e) => [
  "mini",
  "small",
  "normal",
  "large"
].includes(e), { name: L$, n: F$, classes: U$ } = te("avatar"), H$ = [
  "src",
  "alt",
  "lazy-loading",
  "lazy-error"
], j$ = ["src", "alt"];
function Y$(e, n) {
  const r = We("lazy");
  return g(), C("div", {
    ref: "avatarElement",
    class: p(e.classes(e.n(), e.n("$--box"), [e.isInternalSize(e.size), e.n(`--${e.size}`)], [e.round, e.n("--round")], [e.bordered, e.n("--bordered")], [e.hoverable, e.n("--hoverable")])),
    style: Z({
      width: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
      height: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
      borderColor: e.borderColor,
      backgroundColor: e.color
    }),
    onClick: n[3] || (n[3] = (...o) => e.handleClick && e.handleClick(...o))
  }, [e.src ? (g(), C(De, { key: 0 }, [e.lazy ? Re((g(), C("img", {
    key: 0,
    role: "img",
    class: p(e.n("image")),
    src: e.src,
    alt: e.alt,
    style: Z({ objectFit: e.fit }),
    "lazy-loading": e.loading,
    "lazy-error": e.error,
    onLoad: n[0] || (n[0] = (...o) => e.handleLoad && e.handleLoad(...o))
  }, null, 46, H$)), [[r, e.src]]) : (g(), C("img", {
    key: 1,
    role: "img",
    class: p(e.n("image")),
    src: e.src,
    alt: e.alt,
    style: Z({ objectFit: e.fit }),
    onLoad: n[1] || (n[1] = (...o) => e.handleLoad && e.handleLoad(...o)),
    onError: n[2] || (n[2] = (...o) => e.handleError && e.handleError(...o))
  }, null, 46, j$))], 64)) : (g(), C("div", {
    key: 1,
    ref: "textElement",
    class: p(e.n("text")),
    style: Z({ transform: `scale(${e.scale})` })
  }, [F(e.$slots, "default")], 6))], 6);
}
var yp = oe({
  name: L$,
  directives: { Lazy: Ko },
  props: bp,
  setup(e) {
    const n = y(null), r = y(null), o = y(1);
    wn(t), et(t);
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
      n: F$,
      classes: U$,
      isInternalSize: R$,
      toSizeUnit: ze,
      handleLoad: a,
      handleError: i,
      handleClick: l
    };
  }
});
yp.render = Y$;
var Ha = yp;
se(Ha);
ce(Ha, bp);
var QB = Ha, Nl = Ha, wp = {
  offset: [Number, String],
  vertical: Boolean
}, { name: W$, n: K$, classes: q$ } = te("avatar-group");
function X$(e, n) {
  return g(), C("div", {
    class: p(e.classes(e.n(), [
      e.vertical,
      e.n("--column"),
      e.n("--row")
    ])),
    style: Z(e.rootStyles)
  }, [F(e.$slots, "default")], 6);
}
var kp = oe({
  name: W$,
  props: wp,
  setup(e) {
    return {
      rootStyles: T(() => e.offset == null ? {} : { "--avatar-group-offset": ze(e.offset) }),
      n: K$,
      classes: q$
    };
  }
});
kp.render = X$;
var ja = kp;
se(ja);
ce(ja, wp);
var xB = ja, Vl = ja, pr = {
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
}, { name: G$, n: Z$, classes: J$ } = te("loading");
function Q$(e, n) {
  return g(), C("div", { class: p(e.n()) }, [e.$slots.default ? (g(), C("div", {
    key: 0,
    class: p(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
  }, [F(e.$slots, "default"), e.loading ? (g(), C("div", {
    key: 0,
    class: p(e.n("content-mask"))
  }, null, 2)) : X("v-if", !0)], 2)) : X("v-if", !0), e.isShow ? (g(), C("div", {
    key: 1,
    class: p(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
  }, [
    e.type === "circle" ? (g(), C("div", {
      key: 0,
      class: p(e.n("circle"))
    }, [R("span", {
      class: p(e.classes(e.n("circle-block"), e.n(`circle-block--${e.size}`))),
      style: Z({
        width: e.multiplySizeUnit(e.radius, 2),
        height: e.multiplySizeUnit(e.radius, 2),
        color: e.color
      })
    }, [...n[0] || (n[0] = [R("svg", { viewBox: "25 25 50 50" }, [R("circle", {
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none"
    })], -1)])], 6)], 2)) : X("v-if", !0),
    (g(!0), C(De, null, qe(e.loadingTypeDict, (r, o) => (g(), C(De, { key: o }, [e.type === o ? (g(), C("div", {
      key: 0,
      class: p(e.classes(e.n(o), e.n(`${o}--${e.size}`)))
    }, [(g(!0), C(De, null, qe(r, (t) => (g(), C("div", {
      key: t + o,
      style: Z({ backgroundColor: e.color }),
      class: p(e.classes(e.n(`${o}-item`), e.n(`${o}-item--${e.size}`)))
    }, null, 6))), 128))], 2)) : X("v-if", !0)], 64))), 128)),
    e.$slots.description || e.description ? (g(), C("div", {
      key: 1,
      class: p(e.classes(e.n("description"), e.n(`description--${e.size}`))),
      style: Z({ color: e.color })
    }, [F(e.$slots, "description", {}, () => [Ae(fe(e.description), 1)])], 6)) : X("v-if", !0)
  ], 2)) : X("v-if", !0)], 2);
}
var $p = oe({
  name: G$,
  props: pr,
  setup(e, { slots: n }) {
    return {
      loadingTypeDict: {
        wave: 5,
        cube: 4,
        rect: 8,
        disappear: 3
      },
      isShow: T(() => k(n.default) ? e.loading : !0),
      n: Z$,
      classes: J$,
      multiplySizeUnit: Bn
    };
  }
});
$p.render = Q$;
var Ya = $p;
se(Ya);
ce(Ya, pr);
var _B = Ya, fo = Ya, x$ = Object.defineProperty, _$ = Object.defineProperties, eC = Object.getOwnPropertyDescriptors, Wd = Object.getOwnPropertySymbols, nC = Object.prototype.hasOwnProperty, rC = Object.prototype.propertyIsEnumerable, Kd = (e, n, r) => n in e ? x$(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, qd = (e, n) => {
  for (var r in n || (n = {})) nC.call(n, r) && Kd(e, r, n[r]);
  if (Wd)
    for (var r of Wd(n)) rC.call(n, r) && Kd(e, r, n[r]);
  return e;
}, Xd = (e, n) => _$(e, eC(n)), Cp = {
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
  loadingType: Me(pr, "type"),
  loadingSize: Xd(qd({}, Me(pr, "size")), { default: void 0 }),
  loadingColor: Xd(qd({}, Me(pr, "color")), { default: "currentColor" }),
  onClick: V(),
  onTouchstart: V()
}, Sp = /* @__PURE__ */ Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function oC() {
  const { bindChildren: e, childProviders: n, length: r } = $n(Sp);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function tC() {
  const { bindParent: e, parentProvider: n, index: r } = kn(Sp);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var { name: aC, n: iC, classes: lC } = te("button"), sC = [
  "tabindex",
  "type",
  "disabled"
];
function uC(e, n) {
  const r = ne("var-loading"), o = ne("var-hover-overlay"), t = We("ripple"), a = We("hover");
  return Re((g(), C("button", {
    class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.states.size}`), [
      e.block,
      `${e.n("$--flex")} ${e.n("--block")}`,
      e.n("$--inline-flex")
    ], [!e.states.text, e.states.elevation], [!e.states.iconContainer && !e.states.text, e.n(`--${e.states.type}`)], [e.states.text, `${e.n("--text")} ${e.n(`--text-${e.states.type}`)}`], [e.states.iconContainer, e.n(`--icon-container-${e.states.type}`)], [e.round, e.n("--round")], [e.states.outline, e.n("--outline")], [e.loading || e.pending, e.n("--loading")], [e.disabled, e.n("--disabled")], [e.states.text && e.disabled, e.n("--text-disabled")])),
    tabindex: e.focusable ? void 0 : "-1",
    style: Z({
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
    e.loading || e.pending ? (g(), Ce(r, {
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
    R("div", { class: p(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")])) }, [F(e.$slots, "default")], 2),
    G(o, {
      hovering: e.disabled || e.loading || e.pending ? !1 : e.hovering,
      focusing: e.disabled || e.loading || e.pending ? !1 : e.isFocusing
    }, null, 8, ["hovering", "focusing"])
  ], 46, sC)), [[t, { disabled: e.disabled || !e.ripple || e.loading || e.pending }], [
    a,
    e.handleHovering,
    "desktop"
  ]]);
}
var Op = oe({
  name: aC,
  components: {
    VarLoading: fo,
    VarHoverOverlay: Mn
  },
  directives: {
    Ripple: cn,
    Hover: Tn
  },
  props: Cp,
  setup(e) {
    const n = y(!1), r = y(!1), { buttonGroup: o } = tC(), { hovering: t, handleHovering: a } = Wn(), i = T(() => {
      var c, f, v, m, h, w;
      if (!o) return {
        elevation: hn(e.elevation, 2),
        type: (c = e.type) != null ? c : "default",
        size: (f = e.size) != null ? f : "normal",
        color: e.color,
        text: e.text,
        textColor: e.textColor,
        outline: e.outline,
        iconContainer: e.iconContainer
      };
      const { type: $, size: S, color: b, textColor: z, mode: O } = o;
      return {
        elevation: "",
        type: (v = e.type) != null ? v : $.value,
        size: (m = e.size) != null ? m : S.value,
        color: (h = e.color) != null ? h : b.value,
        textColor: (w = e.textColor) != null ? w : z.value,
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
      n: iC,
      classes: lC,
      handleHovering: a,
      handleClick: s,
      handleTouchstart: u,
      handleFocus: d
    };
  }
});
Op.render = uC;
var Wa = Op;
se(Wa);
ce(Wa, Cp);
var eD = Wa, An = Wa, Pp = {
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
  onClick: V()
}, { name: dC, n: cC, classes: fC } = te("back-top");
function vC(e, n) {
  const r = ne("var-icon"), o = ne("var-button");
  return g(), Ce(cr, {
    to: "body",
    disabled: e.disabled
  }, [R("div", Ye({
    ref: "backTopEl",
    class: e.classes(e.n(), [e.show, e.n("--active")]),
    style: {
      right: e.toSizeUnit(e.right),
      bottom: e.toSizeUnit(e.bottom)
    }
  }, e.$attrs, { onClick: n[0] || (n[0] = jn((...t) => e.handleClick && e.handleClick(...t), ["stop"])) }), [F(e.$slots, "default", {}, () => [G(o, {
    elevation: e.elevation,
    type: "primary",
    "var-back-top-cover": ""
  }, {
    default: pe(() => [G(r, { name: "chevron-up" })]),
    _: 1
  }, 8, ["elevation"])])], 16)], 8, ["disabled"]);
}
var zp = oe({
  name: dC,
  components: {
    VarButton: An,
    VarIcon: Je
  },
  inheritAttrs: !1,
  props: Pp,
  setup(e) {
    const n = y(!1), r = y(null), o = y(!0);
    let t;
    const a = ka(() => {
      i();
    }, 200);
    br(() => {
      s(), u(), i(), o.value = !1;
    }), Vr(u), go(d);
    function i() {
      n.value = Dr(t) >= on(e.visibilityHeight);
    }
    function l(c) {
      k(e.onClick, c);
      const f = wa(t);
      Lo(t, {
        left: f,
        duration: e.duration,
        animation: fp
      });
    }
    function s() {
      t = e.target ? Iv(e.target, "BackTop") : Ar(r.value);
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
      n: cC,
      classes: fC,
      handleClick: l
    };
  }
});
zp.render = vC;
var Ka = zp;
se(Ka);
ce(Ka, Pp);
var nD = Ka, Rl = Ka, Tp = {
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
  icon: Me(dn, "name"),
  namespace: Me(dn, "namespace"),
  color: String,
  offsetX: {
    type: [String, Number],
    default: 0
  },
  offsetY: {
    type: [String, Number],
    default: 0
  }
}, pC = Object.defineProperty, Gd = Object.getOwnPropertySymbols, mC = Object.prototype.hasOwnProperty, hC = Object.prototype.propertyIsEnumerable, Zd = (e, n, r) => n in e ? pC(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, gC = (e, n) => {
  for (var r in n || (n = {})) mC.call(n, r) && Zd(e, r, n[r]);
  if (Gd)
    for (var r of Gd(n)) hC.call(n, r) && Zd(e, r, n[r]);
  return e;
}, { name: bC, n: yC, classes: wC } = te("badge"), kC = { key: 0 };
function $C(e, n) {
  const r = ne("var-icon");
  return g(), C("div", { class: p(e.classes(e.n(), e.n("$--box"))) }, [F(e.$slots, "default"), G(en, {
    name: e.n("$-badge-fade"),
    persisted: ""
  }, {
    default: pe(() => [Re(R("span", Ye({
      class: e.classes(e.n("content"), e.n(`--${e.type}`), [
        e.$slots.default,
        e.n(`--${e.position}`),
        e.n("--offset")
      ], [e.dot, e.n("--dot")], [e.icon, e.n("--icon")]),
      style: gC({ background: e.color }, e.offsetStyle)
    }, e.$attrs), [e.icon ? (g(), Ce(r, {
      key: 0,
      class: p(e.n("icon")),
      "var-badge-cover": "",
      name: e.icon,
      namespace: e.namespace
    }, null, 8, [
      "class",
      "name",
      "namespace"
    ])) : X("v-if", !0), F(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (g(), C("span", kC, fe(e.value), 1)) : X("v-if", !0)])], 16), [[xn, !e.hidden]])]),
    _: 3
  }, 8, ["name"])], 2);
}
var Ep = oe({
  name: bC,
  components: { VarIcon: Je },
  inheritAttrs: !1,
  props: Tp,
  setup(e) {
    return {
      value: T(() => {
        const { value: n, maxValue: r } = e;
        return n != null && r != null && j(n) > j(r) ? `${r}+` : n;
      }),
      offsetStyle: T(() => ({
        "--badge-offset-y": ze(e.offsetY),
        "--badge-offset-x": ze(e.offsetX)
      })),
      n: yC,
      classes: wC
    };
  }
});
Ep.render = $C;
var qa = Ep;
se(qa);
ce(qa, Tp);
var rD = qa, ta = qa, Ip = {
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
  onChange: V(),
  onBeforeChange: V(),
  onFabClick: V(),
  "onUpdate:active": V()
}, Bp = /* @__PURE__ */ Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function CC() {
  const { childProviders: e, length: n, bindChildren: r } = $n(Bp);
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: r
  };
}
var SC = Object.defineProperty, Jd = Object.getOwnPropertySymbols, OC = Object.prototype.hasOwnProperty, PC = Object.prototype.propertyIsEnumerable, Qd = (e, n, r) => n in e ? SC(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, xd = (e, n) => {
  for (var r in n || (n = {})) OC.call(n, r) && Qd(e, r, n[r]);
  if (Jd)
    for (var r of Jd(n)) PC.call(n, r) && Qd(e, r, n[r]);
  return e;
}, { name: zC, n: TC, classes: EC } = te("bottom-navigation"), { n: Xa } = te("bottom-navigation-item"), _d = Xa("--right-half-space"), ec = Xa("--left-half-space"), nc = Xa("--right-space"), IC = { type: "primary" };
function BC(e, n) {
  const r = ne("var-button");
  return g(), C(De, null, [R("div", Ye({
    ref: "bottomNavigationDom",
    class: e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")], [e.variant, e.n("--variant")]),
    style: `z-index:${e.zIndex}`
  }, e.$attrs), [F(e.$slots, "default"), e.$slots.fab ? (g(), Ce(r, Ye({
    key: 0,
    class: e.classes(e.n("fab"), [
      e.length % 2,
      e.n("--fab-right"),
      e.n("--fab-center")
    ]),
    "var-bottom-navigation__fab": ""
  }, e.fabProps, { onClick: e.handleFabClick }), {
    default: pe(() => [F(e.$slots, "fab")]),
    _: 3
  }, 16, ["class", "onClick"])) : X("v-if", !0)], 16), e.fixed && e.placeholder ? (g(), C("div", {
    key: 0,
    class: p(e.n("placeholder")),
    style: Z({ height: e.placeholderHeight })
  }, null, 6)) : X("v-if", !0)], 64);
}
var Dp = oe({
  name: zC,
  components: { VarButton: An },
  props: Ip,
  setup(e, { slots: n }) {
    const r = y(null), o = T(() => e.animated), t = T(() => e.active), a = T(() => e.activeColor), i = T(() => e.inactiveColor), l = T(() => e.variant), s = y(), u = y({}), { length: d, bottomNavigationItems: c, bindBottomNavigationItem: f } = CC();
    f({
      animated: o,
      active: t,
      activeColor: a,
      inactiveColor: i,
      variant: l,
      onToggle: $
    }), me(() => d.value, v), me(() => e.fabProps, (B) => {
      u.value = xd(xd({}, IC), B);
    }, {
      immediate: !0,
      deep: !0
    }), ar(A), wn(() => {
      A(), n.fab && O(d.value);
    }), et(() => {
      z(), n.fab && O(d.value);
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
      t.value !== B && (e.onBeforeChange ? S(B) : b(B));
    }
    function S(B) {
      const E = hr(k(e.onBeforeChange, B));
      Promise.all(E).then((M) => {
        M.every(Boolean) && b(B);
      });
    }
    function b(B) {
      k(e["onUpdate:active"], B), k(e.onChange, B);
    }
    function z() {
      H().forEach((B) => {
        B.classList.remove(_d, ec, nc);
      });
    }
    function O(B) {
      const E = H(), M = E.length, U = B % 2 === 0;
      E.forEach((L, P) => {
        I(U, L, P, M);
      });
    }
    function I(B, E, M, U) {
      const L = M === U - 1;
      if (!B && L) {
        E.classList.add(nc);
        return;
      }
      const P = M === U / 2 - 1, N = M === U / 2;
      P ? E.classList.add(_d) : N && E.classList.add(ec);
    }
    function H() {
      return Array.from(r.value.querySelectorAll(`.${Xa()}`));
    }
    function D() {
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
      n: TC,
      classes: EC,
      handleFabClick: D
    };
  }
});
Dp.render = BC;
var Ga = Dp;
se(Ga);
ce(Ga, Ip);
var oD = Ga, Ll = Ga, Mp = {
  name: String,
  label: String,
  icon: Me(dn, "name"),
  namespace: Me(dn, "namespace"),
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: V()
};
function DC() {
  const { parentProvider: e, index: n, bindParent: r } = kn(Bp);
  return Yn(!!r, "BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: r
  };
}
var { name: MC, n: AC, classes: NC } = te("bottom-navigation-item"), VC = {
  type: "danger",
  dot: !0
};
function RC(e, n) {
  const r = ne("var-icon"), o = ne("var-badge"), t = We("ripple");
  return Re((g(), C("button", {
    class: p(e.classes(e.n(), e.n("$--box"), [e.variant, e.n("--variant-padding")], [e.isActive && !e.variant, e.n("--active")], [e.animated, e.n("--animated")])),
    style: Z({ color: e.isActive ? e.activeColor : e.inactiveColor }),
    onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
  }, [R("div", { class: p(e.classes(e.n("icon-container"), [e.variant, e.n("--variant-icon-container")], [e.isActive && e.variant, e.n("--variant-active")])) }, [e.badge ? (g(), Ce(o, Ye({ key: 0 }, e.badgeProps, {
    class: e.n("badge"),
    "var-bottom-navigation-item-cover": ""
  }), {
    default: pe(() => [F(e.$slots, "icon", { active: e.isActive }, () => [e.icon ? (g(), Ce(r, {
      key: 0,
      name: e.icon,
      namespace: e.namespace,
      class: p(e.n("icon")),
      "var-bottom-navigation-item-cover": ""
    }, null, 8, [
      "name",
      "namespace",
      "class"
    ])) : X("v-if", !0)])]),
    _: 3
  }, 16, ["class"])) : F(e.$slots, "icon", {
    key: 1,
    active: e.isActive
  }, () => [e.icon ? (g(), Ce(r, {
    key: 0,
    name: e.icon,
    namespace: e.namespace,
    class: p(e.n("icon")),
    "var-bottom-navigation-item-cover": ""
  }, null, 8, [
    "name",
    "namespace",
    "class"
  ])) : X("v-if", !0)])], 2), R("span", { class: p(e.n("label")) }, [F(e.$slots, "default", {}, () => [Ae(fe(e.label), 1)])], 2)], 6)), [[t]]);
}
var Ap = oe({
  name: MC,
  components: {
    VarBadge: ta,
    VarIcon: Je
  },
  directives: { Ripple: cn },
  props: Mp,
  setup(e) {
    const n = T(() => e.name), r = T(() => [n.value, t.value].includes(s.value)), o = T(() => e.badge === !0 ? VC : e.badge), { index: t, bottomNavigation: a, bindBottomNavigation: i } = DC(), { animated: l, active: s, activeColor: u, inactiveColor: d, variant: c } = a;
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
      n: AC,
      classes: NC,
      handleClick: f
    };
  }
});
Ap.render = RC;
var Za = Ap;
se(Za);
ce(Za, Mp);
var tD = Za, Fl = Za, Np = {
  separator: String,
  onClick: V()
}, Vp = /* @__PURE__ */ Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function LC() {
  const { childProviders: e, bindChildren: n, length: r } = $n(Vp);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function FC() {
  const { parentProvider: e, bindParent: n, index: r } = kn(Vp);
  return Yn(!!n, "Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var { name: UC, n: HC, classes: jC } = te("breadcrumb");
function YC(e, n) {
  return g(), C("div", { class: p(e.n()) }, [R("div", {
    class: p(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
    onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
  }, [F(e.$slots, "default")], 2), e.isLast ? X("v-if", !0) : F(e.$slots, "separator", { key: 0 }, () => {
    var r;
    return [R("div", {
      class: p(e.n("separator")),
      "aria-hidden": "true"
    }, fe((r = e.separator) != null ? r : e.parentSeparator), 3)];
  })], 2);
}
var Rp = oe({
  name: UC,
  props: Np,
  setup(e) {
    const { index: n, breadcrumb: r, bindBreadcrumb: o } = FC(), t = T(() => n.value === r.length.value - 1), a = T(() => r.separator.value);
    o(null);
    function i(l) {
      t.value || k(e.onClick, l);
    }
    return {
      n: HC,
      classes: jC,
      isLast: t,
      parentSeparator: a,
      handleClick: i
    };
  }
});
Rp.render = YC;
var Ja = Rp;
se(Ja);
ce(Ja, Np);
var aD = Ja, Ul = Ja, Lp = { separator: {
  type: String,
  default: "/"
} }, { name: WC, n: KC } = te("breadcrumbs");
function qC(e, n) {
  return g(), C("div", {
    class: p(e.n()),
    role: "navigation",
    "aria-label": "Breadcrumbs"
  }, [F(e.$slots, "default")], 2);
}
var Fp = oe({
  name: WC,
  props: Lp,
  setup(e) {
    const n = T(() => e.separator), { bindBreadcrumbList: r, length: o } = LC();
    return r({
      length: o,
      separator: n
    }), { n: KC };
  }
});
Fp.render = qC;
var Qa = Fp;
se(Qa);
ce(Qa, Lp);
var iD = Qa, Hl = Qa, Up = {
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
}, { name: XC, n: GC, classes: ZC } = te("button-group");
function JC(e, n) {
  return g(), C("div", { class: p(e.classes(e.n(), e.n("$--box"), [e.mode, `${e.n(`--mode-${e.mode}`)}`], [
    e.vertical,
    e.n("--vertical"),
    e.n("--horizontal")
  ], [e.mode === "normal", e.formatElevation(e.elevation, 2)])) }, [F(e.$slots, "default")], 2);
}
var Hp = oe({
  name: XC,
  props: Up,
  setup(e) {
    const { bindButtons: n } = oC();
    return n({
      elevation: T(() => e.elevation),
      type: T(() => e.type),
      size: T(() => e.size),
      color: T(() => e.color),
      textColor: T(() => e.textColor),
      mode: T(() => e.mode)
    }), {
      n: GC,
      classes: ZC,
      formatElevation: hn
    };
  }
});
Hp.render = JC;
var xa = Hp;
se(xa);
ce(xa, Up);
var lD = xa, jl = xa, jp = {
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
}, QC = (e, n, r) => new Promise((o, t) => {
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
}), { name: xC, n: _C, classes: eS } = te("card"), nS = 500, rS = ["src", "alt"];
function oS(e, n) {
  const r = ne("var-hover-overlay"), o = ne("var-icon"), t = ne("var-button"), a = We("ripple"), i = We("hover");
  return Re((g(), C("div", {
    ref: "card",
    class: p(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.variant === "outlined" || e.outline, e.n("--outline")], [e.variant === "filled", e.n("--filled")], [e.surfaceLow, e.n("--surface-low")], [!e.normalizedHoverable.disabled, e.n("--cursor")], [e.variant === "standard" || e.outline, e.formatElevation(e.elevation, 1)])),
    style: Z({ zIndex: e.floated ? e.zIndex : void 0 }),
    onClick: n[0] || (n[0] = (...l) => e.handleClick && e.handleClick(...l))
  }, [R("div", {
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
  }, [
    F(e.$slots, "image", {}, () => [e.src ? (g(), C("img", {
      key: 0,
      class: p(e.n("image")),
      style: Z({
        objectFit: e.fit,
        height: e.toSizeUnit(e.imageHeight),
        width: e.toSizeUnit(e.imageWidth)
      }),
      src: e.src,
      alt: e.alt
    }, null, 14, rS)) : X("v-if", !0)]),
    R("div", { class: p(e.n("container")) }, [
      F(e.$slots, "title", { slotClass: e.n("title") }, () => [e.title ? (g(), C("div", {
        key: 0,
        class: p(e.n("title"))
      }, fe(e.title), 3)) : X("v-if", !0)]),
      F(e.$slots, "subtitle", { slotClass: e.n("subtitle") }, () => [e.subtitle ? (g(), C("div", {
        key: 0,
        class: p(e.n("subtitle"))
      }, fe(e.subtitle), 3)) : X("v-if", !0)]),
      e.$slots.default ? (g(), C("div", {
        key: 0,
        class: p(e.n("content"))
      }, [F(e.$slots, "default")], 2)) : X("v-if", !0),
      F(e.$slots, "description", { slotClass: e.n("description") }, () => [e.description ? (g(), C("div", {
        key: 0,
        class: p(e.n("description"))
      }, fe(e.description), 3)) : X("v-if", !0)]),
      e.$slots.extra ? (g(), C("div", {
        key: 1,
        class: p(e.n("footer"))
      }, [F(e.$slots, "extra")], 2)) : X("v-if", !0),
      e.$slots["floating-content"] && !e.isRow ? (g(), C("div", {
        key: 2,
        class: p(e.n("floating-content")),
        style: Z({
          height: e.contentHeight,
          opacity: e.opacity,
          transition: `opacity ${e.floatingDuration * 2}ms`
        })
      }, [F(e.$slots, "floating-content")], 6)) : X("v-if", !0)
    ], 2),
    G(r, {
      hovering: !e.normalizedHoverable.disabled && !e.floated ? e.hovering : !1,
      color: e.normalizedHoverable.color
    }, null, 8, ["hovering", "color"]),
    e.showFloatingButtons ? (g(), C("div", {
      key: 0,
      class: p(e.classes(e.n("floating-buttons"), e.n("$--box"))),
      style: Z({
        zIndex: e.zIndex,
        opacity: e.opacity,
        transition: `opacity ${e.floatingDuration * 2}ms`
      })
    }, [F(e.$slots, "close-button", {}, () => [G(t, {
      "var-card-cover": "",
      class: p(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
      onClick: jn(e.close, ["stop"])
    }, {
      default: pe(() => [G(o, {
        "var-card-cover": "",
        name: "window-close",
        class: p(e.n("close-button-icon"))
      }, null, 8, ["class"])]),
      _: 1
    }, 8, ["class", "onClick"])])], 6)) : X("v-if", !0)
  ], 6), R("div", {
    class: p(e.n("holder")),
    style: Z({
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
var Yp = oe({
  name: xC,
  directives: {
    Ripple: cn,
    Hover: Tn
  },
  components: {
    VarIcon: Je,
    VarButton: An,
    VarHoverOverlay: Mn
  },
  props: jp,
  setup(e) {
    const n = y(null), r = y(null), o = y("auto"), t = y("auto"), a = y("100%"), i = y("100%"), l = y("auto"), s = y("auto"), u = y(void 0), d = y("hidden"), c = y("0px"), f = y("0"), v = T(() => e.layout === "row"), m = T(() => e.surface === "low" && e.variant !== "filled"), { hovering: h, handleHovering: w } = Wn(), $ = y(!1), S = y(!1), { zIndex: b } = it(() => e.floating, 1), z = T(() => M(e.ripple)), O = T(() => U(e.hoverable));
    let I = "auto", H = "auto", D = null;
    const A = y(null);
    let B = !1;
    at(() => e.floating, () => !v.value), me(() => e.floating, (ee) => {
      v.value || Ne(() => {
        ee ? (B = !0, E()) : B && L();
      });
    }, { immediate: !0 });
    function E() {
      clearTimeout(A.value), clearTimeout(D), A.value = null, A.value = setTimeout(() => QC(null, null, function* () {
        const { width: ee, height: Q, left: ae, top: Oe } = tn(n.value);
        o.value = ze(ee), t.value = ze(Q), a.value = o.value, i.value = t.value, l.value = ze(Oe), s.value = ze(ae), u.value = "fixed", I = l.value, H = s.value, $.value = !0, yield On(), l.value = "0", s.value = "0", a.value = "100vw", i.value = "100vh", c.value = "auto", f.value = "1", d.value = "auto", S.value = !0;
      }), z.value.disabled ? 0 : nS);
    }
    function M(ee) {
      return rn(ee) ? {
        disabled: !!ee.disabled,
        color: ee.color
      } : {
        disabled: !ee,
        color: void 0
      };
    }
    function U(ee) {
      return rn(ee) ? {
        disabled: !!ee.disabled,
        color: ee.color
      } : {
        disabled: !ee,
        color: void 0
      };
    }
    function L() {
      clearTimeout(D), clearTimeout(A.value), A.value = null, a.value = o.value, i.value = t.value, l.value = I, s.value = H, c.value = "0px", f.value = "0", $.value = !1, D = setTimeout(() => {
        o.value = "auto", t.value = "auto", a.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", I = "auto", H = "auto", d.value = "hidden", u.value = void 0, S.value = !1;
      }, e.floatingDuration);
    }
    function P() {
      k(e["onUpdate:floating"], !1);
    }
    function N(ee) {
      k(e.onClick, ee);
    }
    return {
      card: n,
      cardFloater: r,
      holderWidth: o,
      holderHeight: t,
      floater: A,
      floaterWidth: a,
      floaterHeight: i,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: c,
      opacity: f,
      zIndex: b,
      isRow: v,
      surfaceLow: m,
      normalizedRipple: z,
      normalizedHoverable: O,
      hovering: h,
      handleHovering: w,
      showFloatingButtons: $,
      floated: S,
      n: _C,
      classes: eS,
      toSizeUnit: ze,
      close: P,
      formatElevation: hn,
      handleClick: N
    };
  }
});
Yp.render = oS;
var _a = Yp;
se(_a);
ce(_a, jp);
var sD = _a, Yl = _a, Wp = {
  title: String,
  icon: Me(dn, "name"),
  namespace: Me(dn, "namespace"),
  description: String,
  border: Boolean,
  borderOffset: [Number, String],
  iconClass: String,
  titleClass: String,
  descriptionClass: String,
  extraClass: String,
  ripple: Boolean,
  onClick: V()
}, { name: tS, n: aS, classes: iS } = te("cell");
function lS(e, n) {
  const r = ne("var-icon"), o = We("ripple");
  return Re((g(), C("div", {
    class: p(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
    style: Z(e.borderOffsetStyles),
    onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
  }, [
    F(e.$slots, "icon", {}, () => [e.icon ? (g(), C("div", {
      key: 0,
      class: p(e.classes(e.n("icon"), e.iconClass))
    }, [G(r, {
      name: e.icon,
      namespace: e.namespace
    }, null, 8, ["name", "namespace"])], 2)) : X("v-if", !0)]),
    R("div", { class: p(e.n("content")) }, [F(e.$slots, "default", {}, () => [e.title ? (g(), C("div", {
      key: 0,
      class: p(e.classes(e.n("title"), e.titleClass))
    }, fe(e.title), 3)) : X("v-if", !0)]), F(e.$slots, "description", {}, () => [e.description ? (g(), C("div", {
      key: 0,
      class: p(e.classes(e.n("description"), e.descriptionClass))
    }, fe(e.description), 3)) : X("v-if", !0)])], 2),
    e.$slots.extra ? (g(), C("div", {
      key: 0,
      class: p(e.classes(e.n("extra"), e.extraClass))
    }, [F(e.$slots, "extra")], 2)) : X("v-if", !0)
  ], 6)), [[o, { disabled: !e.ripple }]]);
}
var Kp = oe({
  name: tS,
  components: { VarIcon: Je },
  directives: { Ripple: cn },
  props: Wp,
  setup(e) {
    const n = T(() => e.borderOffset == null ? {} : {
      "--cell-border-left": ze(e.borderOffset),
      "--cell-border-right": ze(e.borderOffset)
    });
    function r(o) {
      k(e.onClick, o);
    }
    return {
      borderOffsetStyles: n,
      n: aS,
      classes: iS,
      toSizeUnit: ze,
      handleClick: r
    };
  }
});
Kp.render = lS;
var ei = Kp;
se(ei);
ce(ei, Wp);
var uD = ei, Wl = ei, qp = {
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
}, { name: sS, n: uS, classes: dS } = te("checkbox-group");
function cS(e, n) {
  const r = ne("maybe-v-node"), o = ne("var-checkbox"), t = ne("var-form-details");
  return g(), C("div", { class: p(e.n("wrap")) }, [R("div", { class: p(e.classes(e.n(), e.n(`--${e.direction}`))) }, [e.options.length ? (g(!0), C(De, { key: 0 }, qe(e.options, (a) => (g(), Ce(o, {
    key: a[e.valueKey],
    "checked-value": a[e.valueKey],
    disabled: a.disabled
  }, {
    default: pe(({ checked: i }) => [G(r, { is: e.isFunction(a[e.labelKey]) ? a[e.labelKey](a, i) : a[e.labelKey] }, null, 8, ["is"])]),
    _: 2
  }, 1032, ["checked-value", "disabled"]))), 128)) : X("v-if", !0), F(e.$slots, "default")], 2), G(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var Xp = oe({
  name: sS,
  components: {
    VarFormDetails: En,
    VarCheckbox: io,
    MaybeVNode: tt
  },
  props: qp,
  setup(e) {
    const n = T(() => e.max), r = T(() => e.modelValue.length), { length: o, checkboxes: t, bindCheckboxes: a } = uw(), { bindForm: i } = Ln(), { errorMessage: l, validateWithTrigger: s, validate: u, resetValidation: d } = Rn(), c = {
      max: n,
      checkedCount: r,
      onChecked: m,
      onUnchecked: h,
      validate: z,
      resetValidation: d,
      reset: b,
      errorMessage: T(() => l.value)
    };
    me(() => e.modelValue, w, { deep: !0 }), me(() => o.value, w), a(c), k(i, c);
    function f(O) {
      Ne(() => {
        const { validateTrigger: I, rules: H, modelValue: D } = e;
        s(I, O, H, D);
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
      I.includes(O) && v(I.filter((H) => H !== O));
    }
    function w() {
      t.forEach(({ sync: O }) => O(e.modelValue));
    }
    function $() {
      const O = Qt(t.map(({ checkedValue: I }) => I.value));
      return k(e["onUpdate:modelValue"], O), O;
    }
    function S() {
      const O = Qt(t.filter(({ checked: I }) => !I.value).map(({ checkedValue: I }) => I.value));
      return k(e["onUpdate:modelValue"], O), O;
    }
    function b() {
      k(e["onUpdate:modelValue"], []), d();
    }
    function z() {
      return u(e.rules, e.modelValue);
    }
    return {
      errorMessage: l,
      n: uS,
      classes: dS,
      checkAll: $,
      inverseAll: S,
      reset: b,
      validate: z,
      resetValidation: d,
      isFunction: mn
    };
  }
});
Xp.render = cS;
var ni = Xp;
se(ni);
ce(ni, qp);
var dD = ni, Kl = ni, Gp = {
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
  iconName: Me(dn, "name"),
  namespace: Me(dn, "namespace"),
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
}, { name: fS, n: wr, classes: vS } = te("chip");
function pS(e, n) {
  const r = ne("var-icon");
  return g(), Ce(en, { name: e.n("$-fade") }, {
    default: pe(() => [R("span", Ye({
      class: e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 1), ...e.contentClass),
      style: e.chipStyle
    }, e.$attrs), [
      F(e.$slots, "left"),
      R("span", { class: p(e.n(`text-${e.size}`)) }, [F(e.$slots, "default")], 2),
      F(e.$slots, "right"),
      e.closeable ? (g(), C("span", {
        key: 0,
        class: p(e.n("--close")),
        onClick: n[0] || (n[0] = (...o) => e.handleClose && e.handleClose(...o))
      }, [G(r, {
        name: `${e.iconName ? e.iconName : "close-circle"}`,
        namespace: e.namespace
      }, null, 8, ["name", "namespace"])], 2)) : X("v-if", !0)
    ], 16)]),
    _: 3
  }, 8, ["name"]);
}
var Zp = oe({
  name: fS,
  components: { VarIcon: Je },
  inheritAttrs: !1,
  props: Gp,
  setup(e) {
    const n = T(() => {
      const { plain: t, textColor: a, color: i } = e;
      return t ? {
        color: a || i,
        borderColor: i
      } : {
        color: a,
        background: i
      };
    }), r = T(() => {
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
      classes: vS,
      formatElevation: hn,
      handleClose: o
    };
  }
});
Zp.render = pS;
var ri = Zp;
se(ri);
ce(ri, Gp);
var cD = ri, aa = ri, ql = /* @__PURE__ */ Symbol("HIGHLIGHTER_PROVIDER_KEY");
function mS(e) {
  ru(ql, e);
}
function hS() {
  return su(ql) ? nu(ql) : {
    highlighter: null,
    theme: null
  };
}
var Jp = {
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
}, gS = (e, n, r) => new Promise((o, t) => {
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
}), { name: bS, n: yS, classes: wS } = te("code"), kS = ["innerHTML"];
function $S(e, n) {
  return g(), C("div", {
    class: p(e.classes(e.n(), [e.wordWrap, e.n("--word-wrap")])),
    innerHTML: e.highlightedCode
  }, null, 10, kS);
}
var Qp = oe({
  name: bS,
  props: Jp,
  setup(e) {
    const { highlighter: n, theme: r } = hS(), o = y(""), t = T(() => {
      var a;
      return (a = e.theme) != null ? a : r?.value;
    });
    return n && me(() => [
      n.value,
      e.code,
      e.language,
      t.value,
      e.trim
    ], (a) => gS(null, [a], function* ([i, l, s = "", u = "", d]) {
      i && (o.value = yield i.codeToHtml(d ? l.trim() : l, {
        lang: s,
        theme: u
      }));
    }), { immediate: !0 }), {
      n: yS,
      classes: wS,
      highlightedCode: o
    };
  }
});
Qp.render = $S;
var oi = Qp;
se(oi);
ce(oi, Jp);
var fD = oi, Xl = oi, xp = {
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
}, _p = /* @__PURE__ */ Symbol("ROW_BIND_COL_KEY");
function CS() {
  const { length: e, childProviders: n, bindChildren: r } = $n(_p);
  return {
    length: e,
    cols: n,
    bindCols: r
  };
}
function SS() {
  const { index: e, bindParent: n, parentProvider: r } = kn(_p);
  return {
    index: e,
    row: r,
    bindRow: n
  };
}
var { name: OS, n: $t, classes: PS } = te("col");
function zS(e, n) {
  return g(), C("div", {
    class: p(e.classes(e.n(), e.n("$--box"), [e.span >= 0, e.n(`--span-${e.span}`)], [e.offset, e.n(`--offset-${e.offset}`)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
    style: Z({
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
var em = oe({
  name: OS,
  props: xp,
  setup(e) {
    const n = T(() => j(e.span)), r = T(() => j(e.offset)), o = T(() => {
      var s;
      const [u = 0, d = 0] = (s = t?.average.value) != null ? s : [];
      return {
        left: d,
        right: d,
        top: u,
        bottom: u
      };
    }), { row: t, bindRow: a } = SS();
    k(a, null);
    function i(s, u) {
      const d = [];
      if (u == null) return d;
      if (rn(u)) {
        const { offset: c, span: f } = u;
        return Number(f) >= 0 && d.push($t(`--span-${s}-${f}`)), c && d.push($t(`--offset-${s}-${c}`)), d;
      }
      return Number(u) >= 0 && d.push($t(`--span-${s}-${u}`)), d;
    }
    function l(s) {
      k(e.onClick, s);
    }
    return {
      span: n,
      offset: r,
      padding: o,
      n: $t,
      classes: PS,
      toNumber: j,
      toSizeUnit: ze,
      getSize: i,
      handleClick: l,
      padStartFlex: na
    };
  }
});
em.render = zS;
var ti = em;
se(ti);
ce(ti, xp);
var vD = ti, Gl = ti, nm = {
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
}, rm = /* @__PURE__ */ Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function TS() {
  const { childProviders: e, length: n, bindChildren: r } = $n(rm);
  return {
    length: n,
    collapseItems: e,
    bindCollapseItems: r
  };
}
var { name: ES, n: IS } = te("collapse");
function BS(e, n) {
  return g(), C("div", { class: p(e.n()) }, [F(e.$slots, "default")], 2);
}
var om = oe({
  name: ES,
  props: nm,
  setup(e) {
    const n = T(() => e.offset), r = T(() => e.divider), o = T(() => e.elevation), t = T(() => e.accordion), a = T(() => hr(e.modelValue)), { length: i, collapseItems: l, bindCollapseItems: s } = TS(), u = {
      offset: n,
      divider: r,
      elevation: o,
      accordion: t,
      updateItem: d
    };
    me(() => i.value, () => Ne().then(v)), me(() => e.modelValue, () => Ne().then(v)), s(u);
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
        const S = l.find(({ name: b }) => $ === b.value);
        return S ?? l.find(({ index: b, name: z }) => z.value == null && $ === b.value);
      }
      const h = l.filter(({ name: $ }) => $.value != null && a.value.includes($.value)), w = l.filter(({ index: $, name: S }) => S.value == null && a.value.includes($.value));
      return [...h, ...w];
    }
    function v() {
      const h = Wf(hr(f()));
      l.forEach((w) => {
        w.init(h.includes(w));
      });
    }
    return {
      divider: r,
      n: IS,
      toggleAll: (h) => {
        e.accordion || c(l.filter((w) => {
          var $;
          const S = ($ = w.name.value) != null ? $ : w.index.value, b = a.value.includes(S);
          return h.skipDisabled && w.disabled.value ? b : h.expand === "inverse" ? !b : h.expand;
        }).map((w) => {
          var $;
          return ($ = w.name.value) != null ? $ : w.index.value;
        }));
      }
    };
  }
});
om.render = BS;
var ai = om;
se(ai);
ce(ai, nm);
var pD = ai, Zl = ai, rc = (e, n, r) => new Promise((o, t) => {
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
function tm(e) {
  const { contentEl: n, showContent: r, expand: o } = e;
  let t = !0;
  me(o, (u) => {
    Ne(() => {
      u ? a() : i();
    });
  }, { immediate: !0 });
  function a() {
    return rc(this, null, function* () {
      if (!n.value || (n.value.style.height = "", r.value = !0, yield Tr(), !n.value)) return;
      const { offsetHeight: u } = n.value;
      n.value.style.height = "0px", yield Tr(), n.value && (n.value.style.height = u + "px", t && (yield On(), t && l()));
    });
  }
  const i = () => rc(null, null, function* () {
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
var am = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
};
function DS() {
  const { parentProvider: e, index: n, bindParent: r } = kn(rm);
  return Yn(!!r, "Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: r
  };
}
var { name: MS, n: AS, classes: NS } = te("collapse-item"), VS = [
  "aria-expanded",
  "aria-disabled",
  "role"
];
function RS(e, n) {
  const r = ne("var-icon");
  return g(), C("div", {
    class: p(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
    style: Z(`--collapse-divider-top: ${e.divider ? "var(--collapse-border-top)" : "none"}`)
  }, [
    R("div", { class: p(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2))) }, null, 2),
    R("div", {
      class: p(e.classes(e.n("header"), [!e.disabled, e.n("header--cursor-pointer")])),
      "aria-expanded": e.isShow,
      "aria-disabled": e.disabled,
      role: e.accordion ? "tab" : "button",
      onClick: n[0] || (n[0] = (...o) => e.toggle && e.toggle(...o))
    }, [e.$slots.title || e.title ? (g(), C("div", {
      key: 0,
      class: p(e.n("header-title"))
    }, [F(e.$slots, "title", {}, () => [Ae(fe(e.title), 1)])], 2)) : X("v-if", !0), R("div", { class: p(e.n("header-icon")) }, [F(e.$slots, "icon", {}, () => [G(r, {
      name: e.icon,
      transition: 250,
      class: p(e.classes(e.n("header-icon"), [e.isShow && e.icon === "chevron-down", e.n("header-open")], [e.disabled, e.n("header--disable")]))
    }, null, 8, ["name", "class"])])], 2)], 10, VS),
    Re(R("div", {
      ref: "contentEl",
      class: p(e.n("content")),
      onTransitionend: n[1] || (n[1] = (...o) => e.handleTransitionEnd && e.handleTransitionEnd(...o)),
      onTransitionstart: n[2] || (n[2] = (...o) => e.handleTransitionStart && e.handleTransitionStart(...o))
    }, [R("div", { class: p(e.n("content-wrap")) }, [F(e.$slots, "default")], 2)], 34), [[xn, e.showContent]])
  ], 6);
}
var im = oe({
  name: MS,
  components: { VarIcon: Je },
  props: am,
  setup(e) {
    const n = y(!1), r = y(!1), o = y(null), t = T(() => e.name), a = T(() => e.disabled), { index: i, collapse: l, bindCollapse: s } = DS(), { offset: u, divider: d, elevation: c, accordion: f, updateItem: v } = l;
    s({
      index: i,
      name: t,
      disabled: a,
      init: w
    });
    const { handleTransitionEnd: m, handleTransitionStart: h } = tm({
      contentEl: o,
      showContent: r,
      expand: n
    });
    function w(S) {
      n.value = S;
    }
    function $() {
      var S;
      e.disabled || v((S = e.name) != null ? S : i.value, !n.value);
    }
    return {
      isShow: n,
      showContent: r,
      offset: u,
      divider: d,
      elevation: c,
      contentEl: o,
      accordion: f,
      n: AS,
      classes: NS,
      toggle: $,
      formatElevation: hn,
      handleTransitionEnd: m,
      handleTransitionStart: h
    };
  }
});
im.render = RS;
var ii = im;
se(ii);
ce(ii, am);
var mD = ii, Jl = ii, lm = { expand: Boolean }, { name: LS, n: FS } = te("collapse-transition");
function US(e, n) {
  return Re((g(), C("div", {
    ref: "contentEl",
    class: p(e.n("content")),
    onTransitionend: n[0] || (n[0] = (...r) => e.handleTransitionEnd && e.handleTransitionEnd(...r)),
    onTransitionstart: n[1] || (n[1] = (...r) => e.handleTransitionStart && e.handleTransitionStart(...r))
  }, [F(e.$slots, "default")], 34)), [[xn, e.showContent]]);
}
var sm = oe({
  name: LS,
  props: lm,
  setup(e) {
    const n = y(!1), r = y(null), { handleTransitionEnd: o, handleTransitionStart: t } = tm({
      contentEl: r,
      showContent: n,
      expand: T(() => e.expand)
    });
    return {
      showContent: n,
      contentEl: r,
      n: FS,
      handleTransitionEnd: o,
      handleTransitionStart: t
    };
  }
});
sm.render = US;
var li = sm;
se(li);
ce(li, lm);
var hD = li, Ql = li, um = {
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
}, { name: HS, n: jS } = te("count-to");
function YS(e, n) {
  return g(), C("div", { class: p(e.n()) }, [F(e.$slots, "default", { value: e.value }, () => [Ae(fe(e.value), 1)])], 2);
}
var dm = oe({
  name: HS,
  props: um,
  setup(e) {
    const { value: n, reset: r, start: o, pause: t } = _0({
      from: () => j(e.from),
      to: () => j(e.to),
      duration: () => j(e.duration),
      timingFunction: e.timingFunction,
      onFinished() {
        k(e.onEnd);
      }
    }), a = T(() => Cl(n.value, j(e.precision)));
    me(() => [
      e.from,
      e.to,
      e.duration
    ], i), br(i);
    function i() {
      r(), e.autoStart && o();
    }
    return {
      value: a,
      n: jS,
      start: o,
      pause: t,
      reset: i,
      toNumber: j,
      floor: Cl
    };
  }
});
dm.render = YS;
var si = dm;
se(si);
ce(si, um);
var gD = si, xl = si, cm = {
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
}, { name: WS, n: KS } = te("countdown"), _l = 1e3, es = 60 * _l, ns = 60 * es, oc = 24 * ns;
function qS(e, n) {
  return g(), C("div", { class: p(e.n()) }, [F(e.$slots, "default", Kr(ma(e.timeData)), () => [Ae(fe(e.showTime), 1)])], 2);
}
var fm = oe({
  name: WS,
  props: cm,
  setup(e) {
    const n = y(""), r = y({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    });
    let o = 0, t = !1, a = 0, i = 0, l;
    me(() => e.time, () => {
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
      ], S = [
        24,
        60,
        60,
        1e3
      ];
      if ($.forEach((b, z) => {
        m.includes(b) ? m = m.replace(b, Jr(`${w[z]}`, 2, "0")) : w[z + 1] += w[z] * S[z];
      }), m.includes("S")) {
        const b = Jr(`${w[w.length - 1]}`, 3, "0");
        m.includes("SSS") ? m = m.replace("SSS", b) : m.includes("SS") ? m = m.replace("SS", b.slice(0, 2)) : m = m.replace("S", b.slice(0, 1));
      }
      return m;
    }
    function u(m) {
      const h = {
        days: Math.floor(m / oc),
        hours: Math.floor(m % oc / ns),
        minutes: Math.floor(m % ns / es),
        seconds: Math.floor(m % es / _l),
        milliseconds: Math.floor(m % _l)
      };
      r.value = h, k(e.onChange, r.value), n.value = s(e.format, h);
    }
    function d() {
      const { time: m, onEnd: h } = e, w = performance.now();
      if (o || (o = w + j(m)), i = o - w, i < 0 && (i = 0), u(i), i === 0) {
        k(h);
        return;
      }
      t && (a = Gr(d));
    }
    function c(m = !1) {
      t && !m || (t = !0, o = performance.now() + (i || j(e.time)), d());
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
      n: KS,
      start: c,
      pause: f,
      reset: v
    };
  }
});
fm.render = qS;
var ui = fm;
se(ui);
ce(ui, cm);
var bD = ui, rs = ui, oo = 9e15, Fr = 1e9, os = "0123456789abcdef", ia = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", la = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ts = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -oo,
  maxE: oo,
  crypto: !1
}, vm, mr, Be = !0, di = "[DecimalError] ", Nr = di + "Invalid argument: ", pm = di + "Precision limit exceeded", mm = di + "crypto unavailable", hm = "[object Decimal]", In = Math.floor, yn = Math.pow, XS = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, GS = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, ZS = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, gm = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, rr = 1e7, Ie = 7, JS = 9007199254740991, QS = ia.length - 1, as = la.length - 1, re = { toStringTag: hm };
re.absoluteValue = re.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), Se(e);
};
re.ceil = function() {
  return Se(new this.constructor(this), this.e + 1, 2);
};
re.clampedTo = re.clamp = function(e, n) {
  var r, o = this, t = o.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s) return new t(NaN);
  if (e.gt(n)) throw Error(Nr + n);
  return r = o.cmp(e), r < 0 ? e : o.cmp(n) > 0 ? n : new t(o);
};
re.comparedTo = re.cmp = function(e) {
  var n, r, o, t, a = this, i = a.d, l = (e = new a.constructor(e)).d, s = a.s, u = e.s;
  if (!i || !l) return !s || !u ? NaN : s !== u ? s : i === l ? 0 : !i ^ s < 0 ? 1 : -1;
  if (!i[0] || !l[0]) return i[0] ? s : l[0] ? -u : 0;
  if (s !== u) return s;
  if (a.e !== e.e) return a.e > e.e ^ s < 0 ? 1 : -1;
  for (o = i.length, t = l.length, n = 0, r = o < t ? o : t; n < r; ++n) if (i[n] !== l[n]) return i[n] > l[n] ^ s < 0 ? 1 : -1;
  return o === t ? 0 : o > t ^ s < 0 ? 1 : -1;
};
re.cosine = re.cos = function() {
  var e, n, r = this, o = r.constructor;
  return r.d ? r.d[0] ? (e = o.precision, n = o.rounding, o.precision = e + Math.max(r.e, r.sd()) + Ie, o.rounding = 1, r = xS(o, $m(o, r)), o.precision = e, o.rounding = n, Se(mr == 2 || mr == 3 ? r.neg() : r, e, n, !0)) : new o(1) : new o(NaN);
};
re.cubeRoot = re.cbrt = function() {
  var e, n, r, o, t, a, i, l, s, u, d = this, c = d.constructor;
  if (!d.isFinite() || d.isZero()) return new c(d);
  for (Be = !1, a = d.s * yn(d.s * d, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (r = Sn(d.d), e = d.e, (a = (e - r.length + 1) % 3) && (r += a == 1 || a == -2 ? "0" : "00"), a = yn(r, 1 / 3), e = In((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? r = "5e" + e : (r = a.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), o = new c(r), o.s = d.s) : o = new c(a.toString()), i = (e = c.precision) + 3; ; )
    if (l = o, s = l.times(l).times(l), u = s.plus(d), o = xe(u.plus(d).times(l), u.plus(s), i + 2, 1), Sn(l.d).slice(0, i) === (r = Sn(o.d)).slice(0, i))
      if (r = r.slice(i - 3, i + 1), r == "9999" || !t && r == "4999") {
        if (!t && (Se(l, e + 1, 0), l.times(l).times(l).eq(d))) {
          o = l;
          break;
        }
        i += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (Se(o, e + 1, 1), n = !o.times(o).times(o).eq(d));
        break;
      }
  return Be = !0, Se(o, e, c.rounding, n);
};
re.decimalPlaces = re.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - In(this.e / Ie)) * Ie, e = n[e], e) for (; e % 10 == 0; e /= 10) r--;
    r < 0 && (r = 0);
  }
  return r;
};
re.dividedBy = re.div = function(e) {
  return xe(this, new this.constructor(e));
};
re.dividedToIntegerBy = re.divToInt = function(e) {
  var n = this, r = n.constructor;
  return Se(xe(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
re.equals = re.eq = function(e) {
  return this.cmp(e) === 0;
};
re.floor = function() {
  return Se(new this.constructor(this), this.e + 1, 3);
};
re.greaterThan = re.gt = function(e) {
  return this.cmp(e) > 0;
};
re.greaterThanOrEqualTo = re.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
re.hyperbolicCosine = re.cosh = function() {
  var e, n, r, o, t, a = this, i = a.constructor, l = new i(1);
  if (!a.isFinite()) return new i(a.s ? 1 / 0 : NaN);
  if (a.isZero()) return l;
  r = i.precision, o = i.rounding, i.precision = r + Math.max(a.e, a.sd()) + 4, i.rounding = 1, t = a.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / fi(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), a = vo(i, 1, a.times(n), new i(1), !0);
  for (var s, u = e, d = new i(8); u--; )
    s = a.times(a), a = l.minus(s.times(d.minus(s.times(d))));
  return Se(a, i.precision = r, i.rounding = o, !0);
};
re.hyperbolicSine = re.sinh = function() {
  var e, n, r, o, t = this, a = t.constructor;
  if (!t.isFinite() || t.isZero()) return new a(t);
  if (n = a.precision, r = a.rounding, a.precision = n + Math.max(t.e, t.sd()) + 4, a.rounding = 1, o = t.d.length, o < 3) t = vo(a, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(o), e = e > 16 ? 16 : e | 0, t = t.times(1 / fi(5, e)), t = vo(a, 2, t, t, !0);
    for (var i, l = new a(5), s = new a(16), u = new a(20); e--; )
      i = t.times(t), t = t.times(l.plus(i.times(s.times(i).plus(u))));
  }
  return a.precision = n, a.rounding = r, Se(t, n, r, !0);
};
re.hyperbolicTangent = re.tanh = function() {
  var e, n, r = this, o = r.constructor;
  return r.isFinite() ? r.isZero() ? new o(r) : (e = o.precision, n = o.rounding, o.precision = e + 7, o.rounding = 1, xe(r.sinh(), r.cosh(), o.precision = e, o.rounding = n)) : new o(r.s);
};
re.inverseCosine = re.acos = function() {
  var e = this, n = e.constructor, r = e.abs().cmp(1), o = n.precision, t = n.rounding;
  return r !== -1 ? r === 0 ? e.isNeg() ? lr(n, o, t) : new n(0) : new n(NaN) : e.isZero() ? lr(n, o + 4, t).times(0.5) : (n.precision = o + 6, n.rounding = 1, e = new n(1).minus(e).div(e.plus(1)).sqrt().atan(), n.precision = o, n.rounding = t, e.times(2));
};
re.inverseHyperbolicCosine = re.acosh = function() {
  var e, n, r = this, o = r.constructor;
  return r.lte(1) ? new o(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = o.precision, n = o.rounding, o.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, o.rounding = 1, Be = !1, r = r.times(r).minus(1).sqrt().plus(r), Be = !0, o.precision = e, o.rounding = n, r.ln()) : new o(r);
};
re.inverseHyperbolicSine = re.asinh = function() {
  var e, n, r = this, o = r.constructor;
  return !r.isFinite() || r.isZero() ? new o(r) : (e = o.precision, n = o.rounding, o.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, o.rounding = 1, Be = !1, r = r.times(r).plus(1).sqrt().plus(r), Be = !0, o.precision = e, o.rounding = n, r.ln());
};
re.inverseHyperbolicTangent = re.atanh = function() {
  var e, n, r, o, t = this, a = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new a(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = a.precision, n = a.rounding, o = t.sd(), Math.max(o, e) < 2 * -t.e - 1 ? Se(new a(t), e, n, !0) : (a.precision = r = o - t.e, t = xe(t.plus(1), new a(1).minus(t), r + e, 1), a.precision = e + 4, a.rounding = 1, t = t.ln(), a.precision = e, a.rounding = n, t.times(0.5))) : new a(NaN);
};
re.inverseSine = re.asin = function() {
  var e, n, r, o, t = this, a = t.constructor;
  return t.isZero() ? new a(t) : (n = t.abs().cmp(1), r = a.precision, o = a.rounding, n !== -1 ? n === 0 ? (e = lr(a, r + 4, o).times(0.5), e.s = t.s, e) : new a(NaN) : (a.precision = r + 6, a.rounding = 1, t = t.div(new a(1).minus(t.times(t)).sqrt().plus(1)).atan(), a.precision = r, a.rounding = o, t.times(2)));
};
re.inverseTangent = re.atan = function() {
  var e, n, r, o, t, a, i, l, s, u = this, d = u.constructor, c = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero()) return new d(u);
    if (u.abs().eq(1) && c + 4 <= as)
      return i = lr(d, c + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s) return new d(NaN);
    if (c + 4 <= as)
      return i = lr(d, c + 4, f).times(0.5), i.s = u.s, i;
  }
  for (d.precision = l = c + 10, d.rounding = 1, r = Math.min(28, l / Ie + 2 | 0), e = r; e; --e) u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (Be = !1, n = Math.ceil(l / Ie), o = 1, s = u.times(u), i = new d(u), t = u; e !== -1; )
    if (t = t.times(s), a = i.minus(t.div(o += 2)), t = t.times(s), i = a.plus(t.div(o += 2)), i.d[n] !== void 0) for (e = n; i.d[e] === a.d[e] && e--; ) ;
  return r && (i = i.times(2 << r - 1)), Be = !0, Se(i, d.precision = c, d.rounding = f, !0);
};
re.isFinite = function() {
  return !!this.d;
};
re.isInteger = re.isInt = function() {
  return !!this.d && In(this.e / Ie) > this.d.length - 2;
};
re.isNaN = function() {
  return !this.s;
};
re.isNegative = re.isNeg = function() {
  return this.s < 0;
};
re.isPositive = re.isPos = function() {
  return this.s > 0;
};
re.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
re.lessThan = re.lt = function(e) {
  return this.cmp(e) < 0;
};
re.lessThanOrEqualTo = re.lte = function(e) {
  return this.cmp(e) < 1;
};
re.logarithm = re.log = function(e) {
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
  if (Be = !1, l = c + v, i = Pr(u, l), o = n ? sa(d, l + 10) : Pr(e, l), s = xe(i, o, l, 1), qo(s.d, t = c, f)) do
    if (l += 10, i = Pr(u, l), o = n ? sa(d, l + 10) : Pr(e, l), s = xe(i, o, l, 1), !a) {
      +Sn(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = Se(s, c + 1, 0));
      break;
    }
  while (qo(s.d, t += 10, f));
  return Be = !0, Se(s, c, f);
};
re.minus = re.sub = function(e) {
  var n, r, o, t, a, i, l, s, u, d, c, f, v = this, m = v.constructor;
  if (e = new m(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new m(NaN) : v.d ? e.s = -e.s : e = new m(e.d || v.s !== e.s ? v : NaN), e;
  if (v.s != e.s)
    return e.s = -e.s, v.plus(e);
  if (u = v.d, f = e.d, l = m.precision, s = m.rounding, !u[0] || !f[0]) {
    if (f[0]) e.s = -e.s;
    else if (u[0]) e = new m(v);
    else return new m(s === 3 ? -0 : 0);
    return Be ? Se(e, l, s) : e;
  }
  if (r = In(e.e / Ie), d = In(v.e / Ie), u = u.slice(), a = d - r, a) {
    for (c = a < 0, c ? (n = u, a = -a, i = f.length) : (n = f, r = d, i = u.length), o = Math.max(Math.ceil(l / Ie), i) + 2, a > o && (a = o, n.length = 1), n.reverse(), o = a; o--; ) n.push(0);
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
      for (t = o; t && u[--t] === 0; ) u[t] = rr - 1;
      --u[t], u[o] += rr;
    }
    u[o] -= f[o];
  }
  for (; u[--i] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --r;
  return u[0] ? (e.d = u, e.e = ci(u, r), Be ? Se(e, l, s) : e) : new m(s === 3 ? -0 : 0);
};
re.modulo = re.mod = function(e) {
  var n, r = this, o = r.constructor;
  return e = new o(e), !r.d || !e.s || e.d && !e.d[0] ? new o(NaN) : !e.d || r.d && !r.d[0] ? Se(new o(r), o.precision, o.rounding) : (Be = !1, o.modulo == 9 ? (n = xe(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = xe(r, e, 0, o.modulo, 1), n = n.times(e), Be = !0, r.minus(n));
};
re.naturalExponential = re.exp = function() {
  return is(this);
};
re.naturalLogarithm = re.ln = function() {
  return Pr(this);
};
re.negated = re.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, Se(e);
};
re.plus = re.add = function(e) {
  var n, r, o, t, a, i, l, s, u, d, c = this, f = c.constructor;
  if (e = new f(e), !c.d || !e.d)
    return !c.s || !e.s ? e = new f(NaN) : c.d || (e = new f(e.d || c.s === e.s ? c : NaN)), e;
  if (c.s != e.s)
    return e.s = -e.s, c.minus(e);
  if (u = c.d, d = e.d, l = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(c)), Be ? Se(e, l, s) : e;
  if (a = In(c.e / Ie), o = In(e.e / Ie), u = u.slice(), t = a - o, t) {
    for (t < 0 ? (r = u, t = -t, i = d.length) : (r = d, o = a, i = u.length), a = Math.ceil(l / Ie), i = a > i ? a + 1 : i + 1, t > i && (t = i, r.length = 1), r.reverse(); t--; ) r.push(0);
    r.reverse();
  }
  for (i = u.length, t = d.length, i - t < 0 && (t = i, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / rr | 0, u[t] %= rr;
  for (n && (u.unshift(n), ++o), i = u.length; u[--i] == 0; ) u.pop();
  return e.d = u, e.e = ci(u, o), Be ? Se(e, l, s) : e;
};
re.precision = re.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Nr + e);
  return r.d ? (n = bm(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
re.round = function() {
  var e = this, n = e.constructor;
  return Se(new n(e), e.e + 1, n.rounding);
};
re.sine = re.sin = function() {
  var e, n, r = this, o = r.constructor;
  return r.isFinite() ? r.isZero() ? new o(r) : (e = o.precision, n = o.rounding, o.precision = e + Math.max(r.e, r.sd()) + Ie, o.rounding = 1, r = e2(o, $m(o, r)), o.precision = e, o.rounding = n, Se(mr > 2 ? r.neg() : r, e, n, !0)) : new o(NaN);
};
re.squareRoot = re.sqrt = function() {
  var e, n, r, o, t, a, i = this, l = i.d, s = i.e, u = i.s, d = i.constructor;
  if (u !== 1 || !l || !l[0]) return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (Be = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = Sn(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = In((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), o = new d(n)) : o = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (a = o, o = a.plus(xe(i, a, r + 2, 1)).times(0.5), Sn(a.d).slice(0, r) === (n = Sn(o.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !t && n == "4999") {
        if (!t && (Se(a, s + 1, 0), a.times(a).eq(i))) {
          o = a;
          break;
        }
        r += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (Se(o, s + 1, 1), e = !o.times(o).eq(i));
        break;
      }
  return Be = !0, Se(o, s, d.rounding, e);
};
re.tangent = re.tan = function() {
  var e, n, r = this, o = r.constructor;
  return r.isFinite() ? r.isZero() ? new o(r) : (e = o.precision, n = o.rounding, o.precision = e + 10, o.rounding = 1, r = r.sin(), r.s = 1, r = xe(r, new o(1).minus(r.times(r)).sqrt(), e + 10, 0), o.precision = e, o.rounding = n, Se(mr == 2 || mr == 4 ? r.neg() : r, e, n, !0)) : new o(NaN);
};
re.times = re.mul = function(e) {
  var n, r, o, t, a, i, l, s, u, d = this, c = d.constructor, f = d.d, v = (e = new c(e)).d;
  if (e.s *= d.s, !f || !f[0] || !v || !v[0]) return new c(!e.s || f && !f[0] && !v || v && !v[0] && !f ? NaN : !f || !v ? e.s / 0 : e.s * 0);
  for (r = In(d.e / Ie) + In(e.e / Ie), s = f.length, u = v.length, s < u && (a = f, f = v, v = a, i = s, s = u, u = i), a = [], i = s + u, o = i; o--; ) a.push(0);
  for (o = u; --o >= 0; ) {
    for (n = 0, t = s + o; t > o; )
      l = a[t] + v[o] * f[t - o - 1] + n, a[t--] = l % rr | 0, n = l / rr | 0;
    a[t] = (a[t] + n) % rr | 0;
  }
  for (; !a[--i]; ) a.pop();
  return n ? ++r : a.shift(), e.d = a, e.e = ci(a, r), Be ? Se(e, c.precision, c.rounding) : e;
};
re.toBinary = function(e, n) {
  return Eu(this, 2, e, n);
};
re.toDecimalPlaces = re.toDP = function(e, n) {
  var r = this, o = r.constructor;
  return r = new o(r), e === void 0 ? r : (Vn(e, 0, Fr), n === void 0 ? n = o.rounding : Vn(n, 0, 8), Se(r, e + r.e + 1, n));
};
re.toExponential = function(e, n) {
  var r, o = this, t = o.constructor;
  return e === void 0 ? r = ur(o, !0) : (Vn(e, 0, Fr), n === void 0 ? n = t.rounding : Vn(n, 0, 8), o = Se(new t(o), e + 1, n), r = ur(o, !0, e + 1)), o.isNeg() && !o.isZero() ? "-" + r : r;
};
re.toFixed = function(e, n) {
  var r, o, t = this, a = t.constructor;
  return e === void 0 ? r = ur(t) : (Vn(e, 0, Fr), n === void 0 ? n = a.rounding : Vn(n, 0, 8), o = Se(new a(t), e + t.e + 1, n), r = ur(o, !1, e + o.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
re.toFraction = function(e) {
  var n, r, o, t, a, i, l, s, u, d, c, f, v = this, m = v.d, h = v.constructor;
  if (!m) return new h(v);
  if (u = r = new h(1), o = s = new h(0), n = new h(o), a = n.e = bm(m) - v.e - 1, i = a % Ie, n.d[0] = yn(10, i < 0 ? Ie + i : i), e == null) e = a > 0 ? n : u;
  else {
    if (l = new h(e), !l.isInt() || l.lt(u)) throw Error(Nr + l);
    e = l.gt(n) ? a > 0 ? n : u : l;
  }
  for (Be = !1, l = new h(Sn(m)), d = h.precision, h.precision = a = m.length * Ie * 2; c = xe(l, n, 0, 1, 1), t = r.plus(c.times(o)), t.cmp(e) != 1; )
    r = o, o = t, t = u, u = s.plus(c.times(t)), s = t, t = n, n = l.minus(c.times(t)), l = t;
  return t = xe(e.minus(r), o, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(o)), s.s = u.s = v.s, f = xe(u, o, a, 1).minus(v).abs().cmp(xe(s, r, a, 1).minus(v).abs()) < 1 ? [u, o] : [s, r], h.precision = d, Be = !0, f;
};
re.toHexadecimal = re.toHex = function(e, n) {
  return Eu(this, 16, e, n);
};
re.toNearest = function(e, n) {
  var r = this, o = r.constructor;
  if (r = new o(r), e == null) {
    if (!r.d) return r;
    e = new o(1), n = o.rounding;
  } else {
    if (e = new o(e), n === void 0 ? n = o.rounding : Vn(n, 0, 8), !r.d) return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (Be = !1, r = xe(r, e, 0, n, 1).times(e), Be = !0, Se(r)) : (e.s = r.s, r = e), r;
};
re.toNumber = function() {
  return +this;
};
re.toOctal = function(e, n) {
  return Eu(this, 8, e, n);
};
re.toPower = re.pow = function(e) {
  var n, r, o, t, a, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0]) return new s(yn(+l, u));
  if (l = new s(l), l.eq(1)) return l;
  if (o = s.precision, a = s.rounding, e.eq(1)) return Se(l, o, a);
  if (n = In(e.e / Ie), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= JS)
    return t = ym(s, l, r, o), e.s < 0 ? new s(1).div(t) : Se(t, o, a);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1) return new s(NaN);
    if ((e.d[n] & 1) == 0 && (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return r = yn(+l, u), n = r == 0 || !isFinite(r) ? In(u * (Math.log("0." + Sn(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (Be = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = is(e.times(Pr(l, o + r)), o), t.d && (t = Se(t, o + 5, 1), qo(t.d, o, a) && (n = o + 10, t = Se(is(e.times(Pr(l, n + r)), n), n + 5, 1), +Sn(t.d).slice(o + 1, o + 15) + 1 == 1e14 && (t = Se(t, o + 1, 0)))), t.s = i, Be = !0, s.rounding = a, Se(t, o, a));
};
re.toPrecision = function(e, n) {
  var r, o = this, t = o.constructor;
  return e === void 0 ? r = ur(o, o.e <= t.toExpNeg || o.e >= t.toExpPos) : (Vn(e, 1, Fr), n === void 0 ? n = t.rounding : Vn(n, 0, 8), o = Se(new t(o), e, n), r = ur(o, e <= o.e || o.e <= t.toExpNeg, e)), o.isNeg() && !o.isZero() ? "-" + r : r;
};
re.toSignificantDigits = re.toSD = function(e, n) {
  var r = this, o = r.constructor;
  return e === void 0 ? (e = o.precision, n = o.rounding) : (Vn(e, 1, Fr), n === void 0 ? n = o.rounding : Vn(n, 0, 8)), Se(new o(r), e, n);
};
re.toString = function() {
  var e = this, n = e.constructor, r = ur(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
re.truncated = re.trunc = function() {
  return Se(new this.constructor(this), this.e + 1, 1);
};
re.valueOf = re.toJSON = function() {
  var e = this, n = e.constructor, r = ur(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function Sn(e) {
  var n, r, o, t = e.length - 1, a = "", i = e[0];
  if (t > 0) {
    for (a += i, n = 1; n < t; n++)
      o = e[n] + "", r = Ie - o.length, r && (a += kr(r)), a += o;
    i = e[n], o = i + "", r = Ie - o.length, r && (a += kr(r));
  } else if (i === 0) return "0";
  for (; i % 10 === 0; ) i /= 10;
  return a + i;
}
function Vn(e, n, r) {
  if (e !== ~~e || e < n || e > r) throw Error(Nr + e);
}
function qo(e, n, r, o) {
  var t, a, i, l;
  for (a = e[0]; a >= 10; a /= 10) --n;
  return --n < 0 ? (n += Ie, t = 0) : (t = Math.ceil((n + 1) / Ie), n %= Ie), a = yn(10, Ie - n), l = e[t] % a | 0, o == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : i = (r < 4 && l + 1 == a || r > 3 && l + 1 == a / 2) && (e[t + 1] / a / 100 | 0) == yn(10, n - 2) - 1 || (l == a / 2 || l == 0) && (e[t + 1] / a / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (o || r < 4) && l == 9999 || !o && r > 3 && l == 4999) : i = ((o || r < 4) && l + 1 == a || !o && r > 3 && l + 1 == a / 2) && (e[t + 1] / a / 1e3 | 0) == yn(10, n - 3) - 1, i;
}
function Rt(e, n, r) {
  for (var o, t = [0], a, i = 0, l = e.length; i < l; ) {
    for (a = t.length; a--; ) t[a] *= n;
    for (t[0] += os.indexOf(e.charAt(i++)), o = 0; o < t.length; o++) t[o] > r - 1 && (t[o + 1] === void 0 && (t[o + 1] = 0), t[o + 1] += t[o] / r | 0, t[o] %= r);
  }
  return t.reverse();
}
function xS(e, n) {
  var r, o, t;
  if (n.isZero()) return n;
  o = n.d.length, o < 32 ? (r = Math.ceil(o / 3), t = (1 / fi(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = vo(e, 1, n.times(t), new e(1));
  for (var a = r; a--; ) {
    var i = n.times(n);
    n = i.times(i).minus(i).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var xe = /* @__PURE__ */ (function() {
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
    var u, d, c, f, v, m, h, w, $, S, b, z, O, I, H, D, A, B, E, M, U = o.constructor, L = o.s == t.s ? 1 : -1, P = o.d, N = t.d;
    if (!P || !P[0] || !N || !N[0]) return new U(!o.s || !t.s || (P ? N && P[0] == N[0] : !N) ? NaN : P && P[0] == 0 || !N ? L * 0 : L / 0);
    for (s ? (v = 1, d = o.e - t.e) : (s = rr, v = Ie, d = In(o.e / v) - In(t.e / v)), E = N.length, A = P.length, $ = new U(L), S = $.d = [], c = 0; N[c] == (P[c] || 0); c++) ;
    if (N[c] > (P[c] || 0) && d--, a == null ? (I = a = U.precision, i = U.rounding) : l ? I = a + (o.e - t.e) + 1 : I = a, I < 0)
      S.push(1), m = !0;
    else {
      if (I = I / v + 2 | 0, c = 0, E == 1) {
        for (f = 0, N = N[0], I++; (c < A || f) && I--; c++)
          H = f * s + (P[c] || 0), S[c] = H / N | 0, f = H % N | 0;
        m = f || c < A;
      } else {
        for (f = s / (N[0] + 1) | 0, f > 1 && (N = e(N, f, s), P = e(P, f, s), E = N.length, A = P.length), D = E, b = P.slice(0, E), z = b.length; z < E; ) b[z++] = 0;
        M = N.slice(), M.unshift(0), B = N[0], N[1] >= s / 2 && ++B;
        do
          f = 0, u = n(N, b, E, z), u < 0 ? (O = b[0], E != z && (O = O * s + (b[1] || 0)), f = O / B | 0, f > 1 ? (f >= s && (f = s - 1), h = e(N, f, s), w = h.length, z = b.length, u = n(h, b, w, z), u == 1 && (f--, r(h, E < w ? M : N, w, s))) : (f == 0 && (u = f = 1), h = N.slice()), w = h.length, w < z && h.unshift(0), r(b, h, z, s), u == -1 && (z = b.length, u = n(N, b, E, z), u < 1 && (f++, r(b, E < z ? M : N, z, s))), z = b.length) : u === 0 && (f++, b = [0]), S[c++] = f, u && b[0] ? b[z++] = P[D] || 0 : (b = [P[D]], z = 1);
        while ((D++ < A || b[0] !== void 0) && I--);
        m = b[0] !== void 0;
      }
      S[0] || S.shift();
    }
    if (v == 1)
      $.e = d, vm = m;
    else {
      for (c = 1, f = S[0]; f >= 10; f /= 10) c++;
      $.e = c + d * v - 1, Se($, l ? a + $.e + 1 : a, i, m);
    }
    return $;
  };
})();
function Se(e, n, r, o) {
  var t, a, i, l, s, u, d, c, f, v = e.constructor;
  e: if (n != null) {
    if (c = e.d, !c) return e;
    for (t = 1, l = c[0]; l >= 10; l /= 10) t++;
    if (a = n - t, a < 0)
      a += Ie, i = n, d = c[f = 0], s = d / yn(10, t - i - 1) % 10 | 0;
    else if (f = Math.ceil((a + 1) / Ie), l = c.length, f >= l) if (o) {
      for (; l++ <= f; ) c.push(0);
      d = s = 0, t = 1, a %= Ie, i = a - Ie + 1;
    } else break e;
    else {
      for (d = l = c[f], t = 1; l >= 10; l /= 10) t++;
      a %= Ie, i = a - Ie + t, s = i < 0 ? 0 : d / yn(10, t - i - 1) % 10 | 0;
    }
    if (o = o || n < 0 || c[f + 1] !== void 0 || (i < 0 ? d : d % yn(10, t - i - 1)), u = r < 4 ? (s || o) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || o || r == 6 && (a > 0 ? i > 0 ? d / yn(10, t - i) : 0 : c[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !c[0])
      return c.length = 0, u ? (n -= e.e + 1, c[0] = yn(10, (Ie - n % Ie) % Ie), e.e = -n || 0) : c[0] = e.e = 0, e;
    if (a == 0 ? (c.length = f, l = 1, f--) : (c.length = f + 1, l = yn(10, Ie - a), c[f] = i > 0 ? (d / yn(10, t - i) % yn(10, i) | 0) * l : 0), u) for (; ; ) if (f == 0) {
      for (a = 1, i = c[0]; i >= 10; i /= 10) a++;
      for (i = c[0] += l, l = 1; i >= 10; i /= 10) l++;
      a != l && (e.e++, c[0] == rr && (c[0] = 1));
      break;
    } else {
      if (c[f] += l, c[f] != rr) break;
      c[f--] = 0, l = 1;
    }
    for (a = c.length; c[--a] === 0; ) c.pop();
  }
  return Be && (e.e > v.maxE ? (e.d = null, e.e = NaN) : e.e < v.minE && (e.e = 0, e.d = [0])), e;
}
function ur(e, n, r) {
  if (!e.isFinite()) return km(e);
  var o, t = e.e, a = Sn(e.d), i = a.length;
  return n ? (r && (o = r - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + kr(o) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (a = "0." + kr(-t - 1) + a, r && (o = r - i) > 0 && (a += kr(o))) : t >= i ? (a += kr(t + 1 - i), r && (o = r - t - 1) > 0 && (a = a + "." + kr(o))) : ((o = t + 1) < i && (a = a.slice(0, o) + "." + a.slice(o)), r && (o = r - i) > 0 && (t + 1 === i && (a += "."), a += kr(o))), a;
}
function ci(e, n) {
  var r = e[0];
  for (n *= Ie; r >= 10; r /= 10) n++;
  return n;
}
function sa(e, n, r) {
  if (n > QS)
    throw Be = !0, r && (e.precision = r), Error(pm);
  return Se(new e(ia), n, 1, !0);
}
function lr(e, n, r) {
  if (n > as) throw Error(pm);
  return Se(new e(la), n, r, !0);
}
function bm(e) {
  var n = e.length - 1, r = n * Ie + 1;
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
function ym(e, n, r, o) {
  var t, a = new e(1), i = Math.ceil(o / Ie + 4);
  for (Be = !1; ; ) {
    if (r % 2 && (a = a.times(n), ac(a.d, i) && (t = !0)), r = In(r / 2), r === 0) {
      r = a.d.length - 1, t && a.d[r] === 0 && ++a.d[r];
      break;
    }
    n = n.times(n), ac(n.d, i);
  }
  return Be = !0, a;
}
function tc(e) {
  return e.d[e.d.length - 1] & 1;
}
function wm(e, n, r) {
  for (var o, t, a = new e(n[0]), i = 0; ++i < n.length; ) {
    if (t = new e(n[i]), !t.s) {
      a = t;
      break;
    }
    o = a.cmp(t), (o === r || o === 0 && a.s === r) && (a = t);
  }
  return a;
}
function is(e, n) {
  var r, o, t, a, i, l, s, u = 0, d = 0, c = 0, f = e.constructor, v = f.rounding, m = f.precision;
  if (!e.d || !e.d[0] || e.e > 17) return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
  for (n == null ? (Be = !1, s = m) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), c += 5;
  for (o = Math.log(yn(2, c)) / Math.LN10 * 2 + 5 | 0, s += o, r = a = i = new f(1), f.precision = s; ; ) {
    if (a = Se(a.times(e), s, 1), r = r.times(++d), l = i.plus(xe(a, r, s, 1)), Sn(l.d).slice(0, s) === Sn(i.d).slice(0, s)) {
      for (t = c; t--; ) i = Se(i.times(i), s, 1);
      if (n == null) if (u < 3 && qo(i.d, s - o, v, u))
        f.precision = s += 10, r = a = l = new f(1), d = 0, u++;
      else return Se(i, f.precision = m, v, Be = !0);
      else
        return f.precision = m, i;
    }
    i = l;
  }
}
function Pr(e, n) {
  var r, o, t, a, i, l, s, u, d, c, f, v = 1, m = 10, h = e, w = h.d, $ = h.constructor, S = $.rounding, b = $.precision;
  if (h.s < 0 || !w || !w[0] || !h.e && w[0] == 1 && w.length == 1) return new $(w && !w[0] ? -1 / 0 : h.s != 1 ? NaN : w ? 0 : h);
  if (n == null ? (Be = !1, d = b) : d = n, $.precision = d += m, r = Sn(w), o = r.charAt(0), Math.abs(a = h.e) < 15e14) {
    for (; o < 7 && o != 1 || o == 1 && r.charAt(1) > 3; )
      h = h.times(e), r = Sn(h.d), o = r.charAt(0), v++;
    a = h.e, o > 1 ? (h = new $("0." + r), a++) : h = new $(o + "." + r.slice(1));
  } else
    return u = sa($, d + 2, b).times(a + ""), h = Pr(new $(o + "." + r.slice(1)), d - m).plus(u), $.precision = b, n == null ? Se(h, b, S, Be = !0) : h;
  for (c = h, s = i = h = xe(h.minus(1), h.plus(1), d, 1), f = Se(h.times(h), d, 1), t = 3; ; ) {
    if (i = Se(i.times(f), d, 1), u = s.plus(xe(i, new $(t), d, 1)), Sn(u.d).slice(0, d) === Sn(s.d).slice(0, d))
      if (s = s.times(2), a !== 0 && (s = s.plus(sa($, d + 2, b).times(a + ""))), s = xe(s, new $(v), d, 1), n == null) if (qo(s.d, d - m, S, l))
        $.precision = d += m, u = i = h = xe(c.minus(1), c.plus(1), d, 1), f = Se(h.times(h), d, 1), t = l = 1;
      else return Se(s, $.precision = b, S, Be = !0);
      else
        return $.precision = b, s;
    s = u, t += 2;
  }
}
function km(e) {
  return String(e.s * e.s / 0);
}
function Lt(e, n) {
  var r, o, t;
  for ((r = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (o = n.search(/e/i)) > 0 ? (r < 0 && (r = o), r += +n.slice(o + 1), n = n.substring(0, o)) : r < 0 && (r = n.length), o = 0; n.charCodeAt(o) === 48; o++) ;
  for (t = n.length; n.charCodeAt(t - 1) === 48; --t) ;
  if (n = n.slice(o, t), n) {
    if (t -= o, e.e = r = r - o - 1, e.d = [], o = (r + 1) % Ie, r < 0 && (o += Ie), o < t) {
      for (o && e.d.push(+n.slice(0, o)), t -= Ie; o < t; ) e.d.push(+n.slice(o, o += Ie));
      n = n.slice(o), o = Ie - n.length;
    } else o -= t;
    for (; o--; ) n += "0";
    e.d.push(+n), Be && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function _S(e, n) {
  var r, o, t, a, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), gm.test(n)) return Lt(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (GS.test(n))
    r = 16, n = n.toLowerCase();
  else if (XS.test(n)) r = 2;
  else if (ZS.test(n)) r = 8;
  else throw Error(Nr + n);
  for (a = n.search(/p/i), a > 0 ? (s = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, o = e.constructor, i && (n = n.replace(".", ""), l = n.length, a = l - a, t = ym(o, new o(r), a, a * 2)), u = Rt(n, r, rr), d = u.length - 1, a = d; u[a] === 0; --a) u.pop();
  return a < 0 ? new o(e.s * 0) : (e.e = ci(u, d), e.d = u, Be = !1, i && (e = xe(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? yn(2, s) : zr.pow(2, s))), Be = !0, e);
}
function e2(e, n) {
  var r, o = n.d.length;
  if (o < 3) return n.isZero() ? n : vo(e, 2, n, n);
  r = 1.4 * Math.sqrt(o), r = r > 16 ? 16 : r | 0, n = n.times(1 / fi(5, r)), n = vo(e, 2, n, n);
  for (var t, a = new e(5), i = new e(16), l = new e(20); r--; )
    t = n.times(n), n = n.times(a.plus(t.times(i.times(t).minus(l))));
  return n;
}
function vo(e, n, r, o, t) {
  var a, i, l, s, u = 1, d = e.precision, c = Math.ceil(d / Ie);
  for (Be = !1, s = r.times(r), l = new e(o); ; ) {
    if (i = xe(l.times(s), new e(n++ * n++), d, 1), l = t ? o.plus(i) : o.minus(i), o = xe(i.times(s), new e(n++ * n++), d, 1), i = l.plus(o), i.d[c] !== void 0) {
      for (a = c; i.d[a] === l.d[a] && a--; ) ;
      if (a == -1) break;
    }
    a = l, l = o, o = i, i = a, u++;
  }
  return Be = !0, i.d.length = c + 1, i;
}
function fi(e, n) {
  for (var r = e; --n; ) r *= e;
  return r;
}
function $m(e, n) {
  var r, o = n.s < 0, t = lr(e, e.precision, 1), a = t.times(0.5);
  if (n = n.abs(), n.lte(a))
    return mr = o ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero()) mr = o ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(a))
      return mr = tc(r) ? o ? 2 : 3 : o ? 4 : 1, n;
    mr = tc(r) ? o ? 1 : 4 : o ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Eu(e, n, r, o) {
  var t, a, i, l, s, u, d, c, f, v = e.constructor, m = r !== void 0;
  if (m ? (Vn(r, 1, Fr), o === void 0 ? o = v.rounding : Vn(o, 0, 8)) : (r = v.precision, o = v.rounding), !e.isFinite()) d = km(e);
  else {
    for (d = ur(e), i = d.indexOf("."), m ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, i >= 0 && (d = d.replace(".", ""), f = new v(1), f.e = d.length - i, f.d = Rt(ur(f), 10, t), f.e = f.d.length), c = Rt(d, 10, t), a = s = c.length; c[--s] == 0; ) c.pop();
    if (!c[0]) d = m ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new v(e), e.d = c, e.e = a, e = xe(e, f, r, o, 0, t), c = e.d, a = e.e, u = vm), i = c[r], l = t / 2, u = u || c[r + 1] !== void 0, u = o < 4 ? (i !== void 0 || u) && (o === 0 || o === (e.s < 0 ? 3 : 2)) : i > l || i === l && (o === 4 || u || o === 6 && c[r - 1] & 1 || o === (e.s < 0 ? 8 : 7)), c.length = r, u) for (; ++c[--r] > t - 1; )
        c[r] = 0, r || (++a, c.unshift(1));
      for (s = c.length; !c[s - 1]; --s) ;
      for (i = 0, d = ""; i < s; i++) d += os.charAt(c[i]);
      if (m) {
        if (s > 1) if (n == 16 || n == 8) {
          for (i = n == 16 ? 4 : 3, --s; s % i; s++) d += "0";
          for (c = Rt(d, t, n), s = c.length; !c[s - 1]; --s) ;
          for (i = 1, d = "1."; i < s; i++) d += os.charAt(c[i]);
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
function ac(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function n2(e) {
  return new this(e).abs();
}
function r2(e) {
  return new this(e).acos();
}
function o2(e) {
  return new this(e).acosh();
}
function t2(e, n) {
  return new this(e).plus(n);
}
function a2(e) {
  return new this(e).asin();
}
function i2(e) {
  return new this(e).asinh();
}
function l2(e) {
  return new this(e).atan();
}
function s2(e) {
  return new this(e).atanh();
}
function u2(e, n) {
  e = new this(e), n = new this(n);
  var r, o = this.precision, t = this.rounding, a = o + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = lr(this, a, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? lr(this, o, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = lr(this, a, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = a, this.rounding = 1, r = this.atan(xe(e, n, a, 1)), n = lr(this, a, 1), this.precision = o, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(xe(e, n, a, 1)), r;
}
function d2(e) {
  return new this(e).cbrt();
}
function c2(e) {
  return Se(e = new this(e), e.e + 1, 2);
}
function f2(e, n, r) {
  return new this(e).clamp(n, r);
}
function v2(e) {
  if (!e || typeof e != "object") throw Error(di + "Object expected");
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
    if (r = a[n], t && (this[r] = ts[r]), (o = e[r]) !== void 0) if (In(o) === o && o >= a[n + 1] && o <= a[n + 2]) this[r] = o;
    else throw Error(Nr + r + ": " + o);
  if (r = "crypto", t && (this[r] = ts[r]), (o = e[r]) !== void 0) if (o === !0 || o === !1 || o === 0 || o === 1) if (o) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[r] = !0;
  else throw Error(mm);
  else this[r] = !1;
  else throw Error(Nr + r + ": " + o);
  return this;
}
function p2(e) {
  return new this(e).cos();
}
function m2(e) {
  return new this(e).cosh();
}
function Cm(e) {
  var n, r, o;
  function t(a) {
    var i, l, s, u = this;
    if (!(u instanceof t)) return new t(a);
    if (u.constructor = t, ic(a)) {
      u.s = a.s, Be ? !a.d || a.e > t.maxE ? (u.e = NaN, u.d = null) : a.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = a.e, u.d = a.d.slice()) : (u.e = a.e, u.d = a.d ? a.d.slice() : a.d);
      return;
    }
    if (s = typeof a, s === "number") {
      if (a === 0) {
        u.s = 1 / a < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (a < 0 ? (a = -a, u.s = -1) : u.s = 1, a === ~~a && a < 1e7) {
        for (i = 0, l = a; l >= 10; l /= 10) i++;
        Be ? i > t.maxE ? (u.e = NaN, u.d = null) : i < t.minE ? (u.e = 0, u.d = [0]) : (u.e = i, u.d = [a]) : (u.e = i, u.d = [a]);
        return;
      }
      if (a * 0 !== 0) {
        a || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return Lt(u, a.toString());
    }
    if (s === "string")
      return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (l === 43 && (a = a.slice(1)), u.s = 1), gm.test(a) ? Lt(u, a) : _S(u, a);
    if (s === "bigint")
      return a < 0 ? (a = -a, u.s = -1) : u.s = 1, Lt(u, a.toString());
    throw Error(Nr + a);
  }
  if (t.prototype = re, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = v2, t.clone = Cm, t.isDecimal = ic, t.abs = n2, t.acos = r2, t.acosh = o2, t.add = t2, t.asin = a2, t.asinh = i2, t.atan = l2, t.atanh = s2, t.atan2 = u2, t.cbrt = d2, t.ceil = c2, t.clamp = f2, t.cos = p2, t.cosh = m2, t.div = h2, t.exp = g2, t.floor = b2, t.hypot = y2, t.ln = w2, t.log = k2, t.log10 = C2, t.log2 = $2, t.max = S2, t.min = O2, t.mod = P2, t.mul = z2, t.pow = T2, t.random = E2, t.round = I2, t.sign = B2, t.sin = D2, t.sinh = M2, t.sqrt = A2, t.sub = N2, t.sum = V2, t.tan = R2, t.tanh = L2, t.trunc = F2, e === void 0 && (e = {}), e && e.defaults !== !0)
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
function h2(e, n) {
  return new this(e).div(n);
}
function g2(e) {
  return new this(e).exp();
}
function b2(e) {
  return Se(e = new this(e), e.e + 1, 3);
}
function y2() {
  var e, n, r = new this(0);
  for (Be = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      r.d && (r = r.plus(n.times(n)));
    else {
      if (n.s)
        return Be = !0, new this(1 / 0);
      r = n;
    }
  return Be = !0, r.sqrt();
}
function ic(e) {
  return e instanceof zr || e && e.toStringTag === hm || !1;
}
function w2(e) {
  return new this(e).ln();
}
function k2(e, n) {
  return new this(e).log(n);
}
function $2(e) {
  return new this(e).log(2);
}
function C2(e) {
  return new this(e).log(10);
}
function S2() {
  return wm(this, arguments, -1);
}
function O2() {
  return wm(this, arguments, 1);
}
function P2(e, n) {
  return new this(e).mod(n);
}
function z2(e, n) {
  return new this(e).mul(n);
}
function T2(e, n) {
  return new this(e).pow(n);
}
function E2(e) {
  var n, r, o, t, a = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : Vn(e, 1, Fr), o = Math.ceil(e / Ie), this.crypto) if (crypto.getRandomValues)
    for (n = crypto.getRandomValues(new Uint32Array(o)); a < o; )
      t = n[a], t >= 429e7 ? n[a] = crypto.getRandomValues(new Uint32Array(1))[0] : l[a++] = t % 1e7;
  else if (crypto.randomBytes) {
    for (n = crypto.randomBytes(o *= 4); a < o; )
      t = n[a] + (n[a + 1] << 8) + (n[a + 2] << 16) + ((n[a + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, a) : (l.push(t % 1e7), a += 4);
    a = o / 4;
  } else throw Error(mm);
  else for (; a < o; ) l[a++] = Math.random() * 1e7 | 0;
  for (o = l[--a], e %= Ie, o && e && (t = yn(10, Ie - e), l[a] = (o / t | 0) * t); l[a] === 0; a--) l.pop();
  if (a < 0)
    r = 0, l = [0];
  else {
    for (r = -1; l[0] === 0; r -= Ie) l.shift();
    for (o = 1, t = l[0]; t >= 10; t /= 10) o++;
    o < Ie && (r -= Ie - o);
  }
  return i.e = r, i.d = l, i;
}
function I2(e) {
  return Se(e = new this(e), e.e + 1, this.rounding);
}
function B2(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function D2(e) {
  return new this(e).sin();
}
function M2(e) {
  return new this(e).sinh();
}
function A2(e) {
  return new this(e).sqrt();
}
function N2(e, n) {
  return new this(e).sub(n);
}
function V2() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (Be = !1; r.s && ++e < n.length; ) r = r.plus(n[e]);
  return Be = !0, Se(r, this.precision, this.rounding);
}
function R2(e) {
  return new this(e).tan();
}
function L2(e) {
  return new this(e).tanh();
}
function F2(e) {
  return Se(e = new this(e), e.e + 1, 1);
}
re[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = re.toString;
re[Symbol.toStringTag] = "Decimal";
var zr = re.constructor = Cm(ts);
ia = new zr(ia);
la = new zr(la);
var Sm = {
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
}, lc = 100, sc = 600, { name: U2, n: H2, classes: j2 } = te("counter"), Y2 = [
  "inputmode",
  "readonly",
  "disabled"
];
function W2(e, n) {
  const r = ne("var-icon"), o = ne("var-button"), t = ne("var-form-details");
  return g(), C("div", { class: p(e.classes(e.n(), e.n("$--box"))) }, [R("div", Ye({
    class: e.classes(e.n("controller"), e.formatElevation(e.elevation, 2), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
    style: { background: e.color }
  }, e.$attrs), [
    G(o, {
      class: p(e.classes(e.n("decrement-button"), [!e.decrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
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
      default: pe(() => [G(r, { name: "minus" })]),
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
    Re(R("input", {
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
    }, null, 46, Y2), [[If, e.inputValue]]),
    G(o, {
      class: p(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
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
      default: pe(() => [G(r, { name: "plus" })]),
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
  ], 16), G(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var Om = oe({
  name: U2,
  components: {
    VarButton: An,
    VarIcon: Je,
    VarFormDetails: En
  },
  directives: { Ripple: cn },
  inheritAttrs: !1,
  props: Sm,
  setup(e) {
    const n = y(""), { bindForm: r, form: o } = Ln(), { errorMessage: t, validateWithTrigger: a, validate: i, resetValidation: l } = Rn(), { readonly: s, disabled: u } = o ?? {}, d = T(() => {
      const { max: P, modelValue: N } = e;
      return P != null && j(N) >= j(P);
    }), c = T(() => {
      const { min: P, modelValue: N } = e;
      return P != null && j(N) <= j(P);
    });
    let f, v, m, h;
    k(r, {
      reset: S,
      validate: w,
      resetValidation: l
    }), me(() => e.modelValue, (P) => {
      U(b(String(P))), k(e.onChange, j(P));
    }), U(b(String(e.modelValue)));
    function w() {
      return i(e.rules, e.modelValue);
    }
    function $(P) {
      Ne(() => {
        const { validateTrigger: N, rules: ee, modelValue: Q } = e;
        a(N, P, ee, Q);
      });
    }
    function S() {
      const { min: P } = e;
      k(e["onUpdate:modelValue"], P != null ? j(P) : 0), l();
    }
    function b(P) {
      const { decimalLength: N, max: ee, min: Q } = e;
      let ae = j(P);
      return ee != null && ae > j(ee) && (ae = j(ee)), Q != null && ae < j(Q) && (ae = j(Q)), P = String(ae), N != null && (P = ae.toFixed(j(N))), P;
    }
    function z(P) {
      const { lazyChange: N, onBeforeChange: ee } = e, { value: Q } = P.target, ae = b(Q);
      N ? k(ee, j(ae), L) : U(ae), $("onInputChange");
    }
    function O() {
      const { disabled: P, readonly: N, disableDecrement: ee, decrementButton: Q, lazyChange: ae, step: Oe, modelValue: le, onDecrement: K, onBeforeChange: x } = e;
      if (u?.value || s?.value || P || N || ee || !Q || c.value) return;
      const ue = b(new zr(j(le)).minus(new zr(j(Oe))).toString()), he = j(ue);
      k(K, he), ae ? k(x, he, L) : (U(ue), $("onDecrement"));
    }
    function I() {
      const { disabled: P, readonly: N, disableIncrement: ee, incrementButton: Q, lazyChange: ae, step: Oe, modelValue: le, onIncrement: K, onBeforeChange: x } = e;
      if (u?.value || s?.value || P || N || ee || !Q || d.value) return;
      const ue = b(new zr(j(le)).plus(new zr(j(Oe))).toString()), he = j(ue);
      k(K, he), ae ? k(x, he, L) : (U(ue), $("onIncrement"));
    }
    function H() {
      const { press: P, lazyChange: N } = e;
      !P || N || (h = window.setTimeout(() => {
        M();
      }, sc));
    }
    function D() {
      const { press: P, lazyChange: N } = e;
      !P || N || (m = window.setTimeout(() => {
        E();
      }, sc));
    }
    function A() {
      v && clearTimeout(v), h && clearTimeout(h);
    }
    function B() {
      f && clearTimeout(f), m && clearTimeout(m);
    }
    function E() {
      f = window.setTimeout(() => {
        I(), E();
      }, lc);
    }
    function M() {
      v = window.setTimeout(() => {
        O(), M();
      }, lc);
    }
    function U(P) {
      n.value = P;
      const N = j(P);
      k(e["onUpdate:modelValue"], N);
    }
    function L(P) {
      U(b(String(P))), $("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: d,
      isMin: c,
      n: H2,
      classes: j2,
      formatElevation: hn,
      validate: w,
      reset: S,
      resetValidation: l,
      handleChange: z,
      decrement: O,
      increment: I,
      pressDecrement: H,
      pressIncrement: D,
      releaseDecrement: A,
      releaseIncrement: B,
      toSizeUnit: ze,
      toNumber: j
    };
  }
});
Om.render = W2;
var vi = Om;
se(vi);
ce(vi, Sm);
var yD = vi, ls = vi;
var Pm = 3600, zm = Pm * 24, K2 = zm * 7, vt = 1e3, uc = 60 * vt, q2 = Pm * vt, X2 = zm * vt, G2 = K2 * vt, Tm = "millisecond", Ft = "second", Ut = "minute", Ht = "hour";
var dc = "week", Cr = "month", Z2 = "quarter", Po = "year", zo = "date";
var J2 = "Invalid Date", Q2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, x2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, _2 = {
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
}, ss = function(n, r, o) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(o) + n;
}, e3 = function(n) {
  var r = -n.utcOffset(), o = Math.abs(r), t = Math.floor(o / 60), a = o % 60;
  return (r <= 0 ? "+" : "-") + ss(t, 2, "0") + ":" + ss(a, 2, "0");
}, n3 = function e(n, r) {
  if (n.date() < r.date()) return -e(r, n);
  var o = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(o, Cr), a = r - t < 0, i = n.clone().add(o + (a ? -1 : 1), Cr);
  return +(-(o + (r - t) / (a ? t - i : i - t)) || 0);
}, r3 = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, o3 = function(n) {
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
}, t3 = function(n) {
  return n === void 0;
}, a3 = {
  s: ss,
  z: e3,
  m: n3,
  a: r3,
  p: o3,
  u: t3
}, Do = "en", qr = {};
qr[Do] = _2;
var Em = "$isDayjsObject", Iu = function(n) {
  return n instanceof pi || !!(n && n[Em]);
}, ua = function e(n, r, o) {
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
}, de = function(n, r) {
  if (Iu(n)) return n.clone();
  var o = typeof r == "object" ? r : {};
  return o.date = n, o.args = arguments, new pi(o);
}, i3 = function(n, r) {
  return de(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
  });
}, Ge = a3;
Ge.l = ua;
Ge.i = Iu;
Ge.w = i3;
var l3 = function(n) {
  var r = n.date, o = n.utc;
  if (r === null) return /* @__PURE__ */ new Date(NaN);
  if (Ge.u(r)) return /* @__PURE__ */ new Date();
  if (r instanceof Date) return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(Q2);
    if (t) {
      var a = t[2] - 1 || 0, i = (t[7] || "0").substring(0, 3);
      return o ? new Date(Date.UTC(t[1], a, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i)) : new Date(t[1], a, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i);
    }
  }
  return new Date(r);
}, pi = /* @__PURE__ */ (function() {
  function e(r) {
    this.$L = ua(r.locale, null, !0), this.parse(r), this.$x = this.$x || r.x || {}, this[Em] = !0;
  }
  var n = e.prototype;
  return n.parse = function(o) {
    this.$d = l3(o), this.init();
  }, n.init = function() {
    var o = this.$d;
    this.$y = o.getFullYear(), this.$M = o.getMonth(), this.$D = o.getDate(), this.$W = o.getDay(), this.$H = o.getHours(), this.$m = o.getMinutes(), this.$s = o.getSeconds(), this.$ms = o.getMilliseconds();
  }, n.$utils = function() {
    return Ge;
  }, n.isValid = function() {
    return this.$d.toString() !== J2;
  }, n.isSame = function(o, t) {
    var a = de(o);
    return this.startOf(t) <= a && a <= this.endOf(t);
  }, n.isAfter = function(o, t) {
    return de(o) < this.startOf(t);
  }, n.isBefore = function(o, t) {
    return this.endOf(t) < de(o);
  }, n.$g = function(o, t, a) {
    return Ge.u(o) ? this[t] : this.set(a, o);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(o, t) {
    var a = this, i = Ge.u(t) ? !0 : t, l = Ge.p(o), s = function($, S) {
      var b = Ge.w(a.$u ? Date.UTC(a.$y, S, $) : new Date(a.$y, S, $), a);
      return i ? b : b.endOf("day");
    }, u = function($, S) {
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
      ]).slice(S)), a);
    }, d = this.$W, c = this.$M, f = this.$D, v = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case Po:
        return i ? s(1, 0) : s(31, 11);
      case Cr:
        return i ? s(1, c) : s(0, c + 1);
      case dc:
        var m = this.$locale().weekStart || 0, h = (d < m ? d + 7 : d) - m;
        return s(i ? f - h : f + (6 - h), c);
      case "day":
      case zo:
        return u(v + "Hours", 0);
      case Ht:
        return u(v + "Minutes", 1);
      case Ut:
        return u(v + "Seconds", 2);
      case Ft:
        return u(v + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(o) {
    return this.startOf(o, !1);
  }, n.$set = function(o, t) {
    var a, i = Ge.p(o), l = "set" + (this.$u ? "UTC" : ""), s = (a = {}, a.day = l + "Date", a[zo] = l + "Date", a[Cr] = l + "Month", a[Po] = l + "FullYear", a[Ht] = l + "Hours", a[Ut] = l + "Minutes", a[Ft] = l + "Seconds", a[Tm] = l + "Milliseconds", a)[i], u = i === "day" ? this.$D + (t - this.$W) : t;
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
      var v = de(a);
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
    var i = o || "YYYY-MM-DDTHH:mm:ssZ", l = Ge.z(this), s = this.$H, u = this.$m, d = this.$M, c = a.weekdays, f = a.months, v = a.meridiem, m = function(b, z, O, I) {
      return b && (b[z] || b(t, i)) || O[z].slice(0, I);
    }, h = function(b) {
      return Ge.s(s % 12 || 12, b, "0");
    }, w = v || function(S, b, z) {
      var O = S < 12 ? "AM" : "PM";
      return z ? O.toLowerCase() : O;
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
    return i.replace(x2, function(S, b) {
      return b || $(S) || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(o, t, a) {
    var i = this, l = Ge.p(t), s = de(o), u = (s.utcOffset() - this.utcOffset()) * uc, d = this - s, c = function() {
      return Ge.m(i, s);
    }, f;
    switch (l) {
      case Po:
        f = c() / 12;
        break;
      case Cr:
        f = c();
        break;
      case Z2:
        f = c() / 3;
        break;
      case dc:
        f = (d - u) / G2;
        break;
      case "day":
        f = (d - u) / X2;
        break;
      case Ht:
        f = d / q2;
        break;
      case Ut:
        f = d / uc;
        break;
      case Ft:
        f = d / vt;
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
    var a = this.clone(), i = ua(o, t, !0);
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
})(), Im = pi.prototype;
de.prototype = Im;
[
  ["$ms", Tm],
  ["$s", Ft],
  ["$m", Ut],
  ["$H", Ht],
  ["$W", "day"],
  ["$M", Cr],
  ["$y", Po],
  ["$D", zo]
].forEach(function(e) {
  Im[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
de.extend = function(e, n) {
  return e.$i || (e(n, pi, de), e.$i = !0), de;
};
de.locale = ua;
de.isDayjs = Iu;
de.unix = function(e) {
  return de(e * 1e3);
};
de.en = qr[Do];
de.Ls = qr;
de.p = {};
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
], Bm = {
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
  onPreview: V(),
  onChange: V(),
  "onUpdate:modelValue": V()
}, Dm = (function(e, n) {
  n.prototype.isSameOrAfter = function(r, o) {
    return this.isSame(r, o) || this.isAfter(r, o);
  };
}), Mm = (function(e, n) {
  n.prototype.isSameOrBefore = function(r, o) {
    return this.isSame(r, o) || this.isBefore(r, o);
  };
}), { n: s3 } = te("date-picker-header");
function u3(e, n) {
  const r = ne("var-icon"), o = ne("var-button");
  return g(), C("div", { class: p(e.n()) }, [
    G(o, {
      class: p(e.n("arrow")),
      "var-date-picker-header-cover": "",
      round: "",
      text: "",
      disabled: e.disabled.left,
      onClick: n[0] || (n[0] = (t) => e.checkDate("prev"))
    }, {
      default: pe(() => [G(r, { name: "chevron-left" })]),
      _: 1
    }, 8, ["class", "disabled"]),
    R("div", {
      class: p(e.n("value")),
      onClick: n[1] || (n[1] = (t) => e.$emit("check-panel"))
    }, [G(en, { name: `var-date-picker${e.reverse ? "-reverse" : ""}-translatex` }, {
      default: pe(() => [(g(), C("div", { key: e.showDate }, fe(e.showDate), 1))]),
      _: 1
    }, 8, ["name"])], 2),
    G(o, {
      class: p(e.n("arrow")),
      "var-date-picker-header-cover": "",
      round: "",
      text: "",
      disabled: e.disabled.right,
      onClick: n[2] || (n[2] = (t) => e.checkDate("next"))
    }, {
      default: pe(() => [G(r, { name: "chevron-right" })]),
      _: 1
    }, 8, ["class", "disabled"])
  ], 2);
}
var Am = oe({
  name: "PanelHeader",
  components: {
    VarButton: An,
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
    const r = y(!1), o = y(0), { t } = ir(), a = T(() => {
      var l;
      const { date: s, type: u } = e, { previewMonth: d, previewYear: c } = s;
      if (u === "year") return c;
      if (u === "month") return j(c) + o.value;
      const f = (l = (t || sn)("datePickerMonthDict")) == null ? void 0 : l[d].name;
      return (t || sn)("lang") === "zh-CN" ? `${c} ${f}` : `${f} ${c}`;
    }), i = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (n("check-date", l), r.value = l === "prev", o.value += l === "prev" ? -1 : 1);
    };
    return me(() => e.date, () => {
      o.value = 0;
    }), {
      n: s3,
      reverse: r,
      showDate: a,
      checkDate: i
    };
  }
});
Am.render = u3;
var Bu = Am, d3 = Object.defineProperty, cc = Object.getOwnPropertySymbols, c3 = Object.prototype.hasOwnProperty, f3 = Object.prototype.propertyIsEnumerable, fc = (e, n, r) => n in e ? d3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, v3 = (e, n) => {
  for (var r in n || (n = {})) c3.call(n, r) && fc(e, r, n[r]);
  if (cc)
    for (var r of cc(n)) f3.call(n, r) && fc(e, r, n[r]);
  return e;
};
de.extend(Mm);
de.extend(Dm);
var { n: _r, classes: p3 } = te("day-picker"), { n: Ct } = te("date-picker");
function m3(e, n) {
  const r = ne("panel-header"), o = ne("var-button");
  return g(), C("div", { class: p(e.n()) }, [R("div", { class: p(e.n("content")) }, [G(r, {
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
  ]), G(en, { name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex` }, {
    default: pe(() => [(g(), C("div", { key: e.panelKey }, [R("ul", { class: p(e.n("head")) }, [(g(!0), C(De, null, qe(e.sortWeekList, (t) => (g(), C("li", { key: t }, fe(e.getDayAbbr(t)), 1))), 128))], 2), R("ul", { class: p(e.n("body")) }, [(g(!0), C(De, null, qe(e.days, (t, a) => (g(), C("li", { key: a }, [G(o, Ye({
      type: "primary",
      "var-day-picker-cover": "",
      round: "",
      ripple: !1,
      elevation: e.componentProps.buttonElevation
    }, { ref_for: !0 }, v3({}, e.buttonProps(t)), { onClick: (i) => e.chooseDay(t, i) }), {
      default: pe(() => [Ae(fe(e.filterDay(t)), 1)]),
      _: 2
    }, 1040, ["elevation", "onClick"])]))), 128))], 2)]))]),
    _: 1
  }, 8, ["name"])], 2)], 2);
}
var Nm = oe({
  name: "DayPickerPanel",
  components: {
    VarButton: An,
    PanelHeader: Bu
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
    }), { t: d } = ir(), c = T(() => e.preview.previewYear === r && e.preview.previewMonth === o), f = T(() => e.choose.chooseYear === e.preview.previewYear && e.choose.chooseMonth === e.preview.previewMonth), v = T(() => {
      const D = Eo.findIndex((A) => A === e.componentProps.firstDayOfWeek);
      return D === -1 || D === 0 ? Eo : [...Eo.slice(D), ...Eo.slice(0, D)];
    }), m = (D) => {
      var A, B;
      return (B = (A = (d || sn)("datePickerWeekDict")) == null ? void 0 : A[D].abbr) != null ? B : "";
    }, h = (D) => D > 0 ? D : "", w = () => {
      const { preview: { previewMonth: D, previewYear: A } } = e, B = de(`${A}-${D}`).daysInMonth(), E = de(`${A}-${D}-01`).day(), M = v.value.findIndex((U) => U === `${E}`);
      a.value = [...Array(M).fill(-1), ...Array.from(Array(B + 1).keys())].filter((U) => U);
    }, $ = () => {
      const { preview: { previewYear: D, previewMonth: A }, componentProps: { max: B, min: E } } = e;
      B && (u.right = !de(`${D}-${j(A) + 1}`).isSameOrBefore(de(B), "month")), E && (u.left = !de(`${D}-${j(A) - 1}`).isSameOrAfter(de(E), "month"));
    }, S = (D) => {
      const { preview: { previewYear: A, previewMonth: B }, componentProps: { min: E, max: M } } = e;
      let U = !0, L = !0;
      const P = `${A}-${B}-${D}`;
      return M && (U = de(P).isSameOrBefore(de(M), "day")), E && (L = de(P).isSameOrAfter(de(E), "day")), U && L;
    }, b = (D) => {
      const { choose: { chooseDays: A, chooseRangeDay: B }, componentProps: { range: E } } = e;
      if (E) {
        if (!B.length) return !1;
        const M = de(D).isSameOrBefore(de(B[1]), "day"), U = de(D).isSameOrAfter(de(B[0]), "day");
        return M && U;
      }
      return A.includes(D);
    }, z = (D) => {
      if (D < 0) return {
        text: !0,
        outline: !1,
        textColor: "",
        class: _r("button"),
        disabled: !0
      };
      const { choose: { chooseDay: A }, preview: { previewYear: B, previewMonth: E }, componentProps: { allowedDates: M, color: U, multiple: L, range: P } } = e, N = `${B}-${E}-${D}`, ee = () => P || L ? b(N) : j(A) === D && f.value, ae = S(D) ? M ? !M(N) : !1 : !0, Oe = () => ae ? !0 : P || L ? !b(N) : !f.value || j(A) !== D, le = () => c.value && j(t) === D && e.componentProps.showCurrent ? (P || L || f.value) && ae ? !0 : P || L ? !b(N) : f.value ? A !== t : !0 : !1, K = () => ae ? "" : le() ? U ?? "" : ee() ? "" : `${Ct()}-color-cover`, x = K().startsWith(Ct());
      return {
        text: Oe(),
        outline: le(),
        textColor: x ? "" : K(),
        [`${Ct()}-color-cover`]: x,
        class: p3(_r("button"), _r("button--usable"), [ae, _r("button--disabled")]),
        disabled: ae
      };
    }, O = (D) => {
      i.value = D === "prev", l.value += D === "prev" ? -1 : 1, n("check-preview", "month", D);
    }, I = (D, A) => {
      A.currentTarget.classList.contains(_r("button--disabled")) || n("choose-day", D);
    }, H = (D) => {
      s.value.checkDate(D);
    };
    return wn(() => {
      w(), $();
    }), me(() => e.preview, () => {
      w(), $();
    }), me(() => [e.componentProps.max, e.componentProps.min], $), {
      n: _r,
      nDate: Ct,
      days: a,
      reverse: i,
      headerEl: s,
      panelKey: l,
      sortWeekList: v,
      panelBtnDisabled: u,
      forwardRef: H,
      filterDay: h,
      getDayAbbr: m,
      checkDate: O,
      chooseDay: I,
      buttonProps: z
    };
  }
});
Nm.render = m3;
var h3 = Nm, g3 = Object.defineProperty, vc = Object.getOwnPropertySymbols, b3 = Object.prototype.hasOwnProperty, y3 = Object.prototype.propertyIsEnumerable, pc = (e, n, r) => n in e ? g3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, w3 = (e, n) => {
  for (var r in n || (n = {})) b3.call(n, r) && pc(e, r, n[r]);
  if (vc)
    for (var r of vc(n)) y3.call(n, r) && pc(e, r, n[r]);
  return e;
};
de.extend(Mm);
de.extend(Dm);
var { n: St, classes: k3 } = te("month-picker"), { n: Ot } = te("date-picker");
function $3(e, n) {
  const r = ne("panel-header"), o = ne("var-button");
  return g(), C("div", { class: p(e.n()) }, [R("div", { class: p(e.n("content")) }, [G(r, {
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
  ]), G(en, { name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex` }, {
    default: pe(() => [(g(), C("ul", { key: e.panelKey }, [(g(!0), C(De, null, qe(e.MONTH_LIST, (t) => (g(), C("li", { key: t }, [G(o, Ye({
      type: "primary",
      "var-month-picker-cover": "",
      ripple: !1,
      elevation: e.componentProps.buttonElevation
    }, { ref_for: !0 }, w3({}, e.buttonProps(t)), { onClick: (a) => e.chooseMonth(t, a) }), {
      default: pe(() => [Ae(fe(e.getMonthAbbr(t)), 1)]),
      _: 2
    }, 1040, ["elevation", "onClick"])]))), 128))]))]),
    _: 1
  }, 8, ["name"])], 2)], 2);
}
var Vm = oe({
  name: "MonthPickerPanel",
  components: {
    VarButton: An,
    PanelHeader: Bu
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
    }), { t: s } = ir(), u = T(() => e.choose.chooseYear === e.preview.previewYear), d = T(() => e.preview.previewYear === r), c = (S) => {
      var b, z;
      return (z = (b = (s || sn)("datePickerMonthDict")) == null ? void 0 : b[S].abbr) != null ? z : "";
    }, f = (S) => {
      const { preview: { previewYear: b }, componentProps: { min: z, max: O } } = e;
      let I = !0, H = !0;
      const D = `${b}-${S}`;
      return O && (I = de(D).isSameOrBefore(de(O), "month")), z && (H = de(D).isSameOrAfter(de(z), "month")), I && H;
    }, v = (S) => {
      const { choose: { chooseMonths: b, chooseDays: z, chooseRangeMonth: O }, componentProps: { type: I, range: H } } = e;
      if (H) {
        if (!O.length) return !1;
        const D = de(S).isSameOrBefore(de(O[1]), "month"), A = de(S).isSameOrAfter(de(O[0]), "month");
        return D && A;
      }
      return I === "month" ? b.includes(S) : z.some((D) => D.includes(S));
    }, m = (S) => {
      const { choose: { chooseMonth: b }, preview: { previewYear: z }, componentProps: { allowedDates: O, color: I, multiple: H, range: D } } = e, A = `${z}-${S}`, B = () => D || H ? v(A) : b === S && u.value, M = f(S) ? O ? !O(A) : !1 : !0, U = () => M ? !0 : D || H ? !v(A) : !u.value || b !== S, L = () => d.value && o === S && e.componentProps.showCurrent ? (D || H || u.value) && M ? !0 : D || H ? !v(A) : u.value ? b !== o : !0 : !1, P = () => M ? "" : L() ? I ?? "" : B() ? "" : `${Ot()}-color-cover`, N = P().startsWith(Ot());
      return {
        outline: L(),
        text: U(),
        color: U() ? "" : I,
        textColor: N ? "" : P(),
        [`${Ot()}-color-cover`]: N,
        class: k3(St("button"), [M, St("button--disabled")]),
        disabled: M
      };
    }, h = (S, b) => {
      b.currentTarget.classList.contains(St("button--disabled")) || n("choose-month", S);
    }, w = (S) => {
      t.value = S === "prev", a.value += S === "prev" ? -1 : 1, n("check-preview", "year", S);
    }, $ = (S) => {
      i.value.checkDate(S);
    };
    return me(() => [
      e.preview.previewYear,
      e.componentProps.max,
      e.componentProps.min
    ], ([S, b, z]) => {
      b && (l.right = !de(`${j(S) + 1}`).isSameOrBefore(de(b), "year")), z && (l.left = !de(`${j(S) - 1}`).isSameOrAfter(de(z), "year"));
    }, { immediate: !0 }), {
      n: St,
      nDate: Ot,
      t: sn,
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
Vm.render = $3;
var C3 = Vm, Mo = {
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
}, mc = (e, n, r) => new Promise((o, t) => {
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
}), { name: S3, n: O3, classes: P3 } = te("sticky");
function z3(e, n) {
  return g(), C("div", {
    ref: "stickyEl",
    class: p(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
    style: Z({
      zIndex: e.toNumber(e.zIndex),
      top: e.enableCSSMode ? `${e.offsetTop}px` : void 0,
      width: e.enableFixedMode ? e.fixedWidth : void 0,
      height: e.enableFixedMode ? e.fixedHeight : void 0
    })
  }, [R("div", {
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
  }, [F(e.$slots, "default")], 6)], 6);
}
var Rm = oe({
  name: S3,
  props: Mo,
  setup(e) {
    const n = y(null), r = y(null), o = y(!1), t = y("0px"), a = y("0px"), i = y("auto"), l = y("auto"), s = y("auto"), u = y("auto"), d = T(() => !e.disabled && e.cssMode), c = T(() => !e.disabled && !e.cssMode && o.value), f = T(() => on(e.offsetTop));
    let v;
    me(() => e.disabled, S), wn(() => mc(null, null, function* () {
      yield On(), h(), w();
    })), go($), ar(S), je(() => window, "scroll", w);
    function m() {
      const { cssMode: b, disabled: z } = e;
      if (z) return;
      let O = 0;
      if (v && v !== window) {
        const { top: E } = tn(v);
        O = E;
      }
      const I = r.value, H = n.value, { top: D, left: A } = tn(H), B = D - O;
      return B <= f.value ? (b || (i.value = `${H.offsetWidth}px`, l.value = `${H.offsetHeight}px`, t.value = `${O + f.value}px`, a.value = `${A}px`, s.value = `${I.offsetWidth}px`, u.value = `${I.offsetHeight}px`, o.value = !0), {
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
    function S() {
      return mc(this, null, function* () {
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
      n: O3,
      classes: P3,
      resize: S,
      toNumber: j
    };
  }
});
Rm.render = z3;
var mi = Rm;
se(mi);
ce(mi, Mo);
var wD = mi, po = mi, T3 = Object.defineProperty, hc = Object.getOwnPropertySymbols, E3 = Object.prototype.hasOwnProperty, I3 = Object.prototype.propertyIsEnumerable, gc = (e, n, r) => n in e ? T3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, B3 = (e, n) => {
  for (var r in n || (n = {})) E3.call(n, r) && gc(e, r, n[r]);
  if (hc)
    for (var r of hc(n)) I3.call(n, r) && gc(e, r, n[r]);
  return e;
}, { n: Pt, classes: bc } = te("year-picker"), { n: zt } = te("date-picker");
function D3(e, n) {
  const r = ne("panel-header"), o = ne("var-sticky"), t = ne("var-button");
  return g(), C("div", null, [G(o, { "css-mode": "" }, {
    default: pe(() => [G(r, {
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
  }), G(en, { name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex` }, {
    default: pe(() => [(g(), C("ul", {
      ref: "panel",
      key: e.panelKey,
      class: p(e.n())
    }, [(g(!0), C(De, null, qe(e.yearList, (a) => (g(), C("li", { key: a }, [G(t, Ye({
      type: "primary",
      "var-year-picker-cover": "",
      ripple: !1,
      elevation: e.componentProps.buttonElevation
    }, { ref_for: !0 }, B3({}, e.buttonProps(`${a}`)), { onClick: (i) => e.chooseYear(a, i) }), {
      default: pe(() => [Ae(fe(a), 1)]),
      _: 2
    }, 1040, ["elevation", "onClick"])]))), 128))], 2))]),
    _: 1
  }, 8, ["name"])]);
}
var Lm = oe({
  name: "YearPickerPanel",
  components: {
    VarButton: An,
    VarSticky: po,
    PanelHeader: Bu
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
    }), u = T(() => {
      if (!e.preview) return [];
      const $ = Math.floor(j(e.preview) / 100 + l.value) * 100;
      return Array.from(Array(100), (S, b) => Math.max(0, $) + b);
    }), d = ($) => {
      const { choose: { chooseMonths: S, chooseDays: b, chooseYears: z, chooseRangeYear: O }, componentProps: { type: I, range: H } } = e;
      if (H) {
        if (!O.length) return !1;
        const D = de($).isSameOrBefore(de(O[1]), "year"), A = de($).isSameOrAfter(de(O[0]), "year");
        return D && A;
      }
      return I === "year" ? z.includes($) : I === "month" ? S.some((D) => D.includes($)) : b.some((D) => D.includes($));
    }, c = ($) => {
      const { componentProps: { min: S, max: b } } = e, z = b ? de($).isSameOrBefore(de(b), "year") : !0, O = S ? de($).isSameOrAfter(de(S), "year") : !0;
      return z && O;
    }, f = ($) => {
      const { choose: { chooseYear: S }, componentProps: { allowedDates: b, color: z, multiple: O, range: I } } = e, H = () => I || O ? d($) : S === $, A = c($) ? b ? !b($) : !1 : !0, B = () => A ? !0 : I || O ? !d($) : S !== $, E = () => r === $ && e.componentProps.showCurrent ? (I || O) && A ? !0 : I || O ? !d($) : S !== r : !1, M = () => A ? "" : E() ? z ?? "" : H() ? "" : `${zt()}-color-cover`, U = M().startsWith(zt());
      return {
        outline: E(),
        text: B(),
        color: B() ? "" : z,
        textColor: U ? "" : M(),
        [`${zt()}-color-cover`]: U,
        class: bc(Pt("button"), [A, Pt("button--disabled")]),
        disabled: A
      };
    }, v = ($, S) => {
      S.currentTarget.classList.contains(Pt("button--disabled")) || n("choose-year", $);
    }, m = () => {
      var $;
      (($ = o.value.querySelector(".var-button--primary")) != null ? $ : o.value.querySelector(".var-button--outline"))?.scrollIntoView({ block: "center" });
    }, h = ($) => {
      const S = $ === "prev";
      a.value = S, i.value += S ? -1 : 1, l.value += S ? -1 : 1;
    }, w = ($) => {
      t.value.checkDate($);
    };
    return wn(m), me(() => e.preview, () => {
      l.value = 0;
    }), me(() => [
      u.value,
      e.componentProps.max,
      e.componentProps.min
    ], ($) => {
      const [S, b, z] = $;
      b && (s.right = !de(`${j(S[S.length - 1])}`).isSameOrBefore(de(b), "year")), z && (s.left = !de(`${j(S[0])}`).isSameOrAfter(de(z), "year")), j(S[0] <= 0) && (s.left = !1);
    }, { immediate: !0 }), {
      n: Pt,
      classes: bc,
      buttonProps: f,
      panel: o,
      headerEl: t,
      yearList: u,
      reverse: a,
      panelKey: i,
      panelBtnDisabled: s,
      nDate: zt,
      checkDate: h,
      chooseYear: v,
      forwardRef: w,
      toNumber: j
    };
  }
});
Lm.render = D3;
var M3 = Lm, A3 = (e, n, r) => new Promise((o, t) => {
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
}), { name: N3, n: V3, classes: R3 } = te("date-picker");
function L3(e, n) {
  var r;
  const o = ne("year-picker-panel"), t = ne("month-picker-panel"), a = ne("day-picker-panel");
  return g(), C("div", { class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2))) }, [
    R("div", {
      class: p(e.n("title")),
      style: Z({ background: e.titleColor || e.color })
    }, [R("div", { class: p(e.n("title-select")) }, [R("div", { class: p(e.n("title-hint")) }, fe((r = e.hint) != null ? r : (e.pt ? e.pt : e.t)("datePickerHint")), 3), e.type !== "year" ? (g(), C("div", {
      key: 0,
      class: p(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
      onClick: n[0] || (n[0] = (i) => e.clickEl("year"))
    }, [F(e.$slots, "year", { year: e.displayYear }, () => [Ae(fe(e.displayYear), 1)])], 2)) : X("v-if", !0)], 2), R("div", {
      class: p(e.classes(e.n("title-date"), [!e.isYearPanel || e.type === "year", e.n("title-date--active")], [e.range, e.n("title-date--range")])),
      onClick: n[1] || (n[1] = (i) => e.clickEl("date"))
    }, [G(en, { name: e.multiple ? "" : `${e.n()}${e.reverse ? "-reverse" : ""}-translatey` }, {
      default: pe(() => [e.type === "year" ? (g(), C("div", { key: `${e.chooseYear}` }, [e.range ? F(e.$slots, "range", {
        key: 0,
        choose: e.getChoose.chooseRangeYear
      }, () => [Ae(fe(e.getYearTitle), 1)]) : e.multiple ? F(e.$slots, "multiple", {
        key: 1,
        choose: e.getChoose.chooseYears
      }, () => [Ae(fe(e.getYearTitle), 1)]) : F(e.$slots, "year", {
        key: 2,
        year: e.chooseYear
      }, () => [Ae(fe(e.getYearTitle), 1)])])) : e.type === "month" ? (g(), C("div", { key: `${e.chooseYear}${e.chooseMonth}` }, [e.range ? F(e.$slots, "range", {
        key: 0,
        choose: e.getChoose.chooseRangeMonth
      }, () => [Ae(fe(e.getMonthTitle), 1)]) : e.multiple ? F(e.$slots, "multiple", {
        key: 1,
        choose: e.getChoose.chooseMonths
      }, () => [Ae(fe(e.getMonthTitle), 1)]) : F(e.$slots, "month", {
        key: 2,
        month: e.chooseMonth,
        year: e.chooseYear
      }, () => [Ae(fe(e.getMonthTitle), 1)])])) : (g(), C("div", { key: `${e.chooseYear}${e.chooseMonth}${e.chooseDay}` }, [e.range ? F(e.$slots, "range", {
        key: 0,
        choose: e.formatRange
      }, () => [Ae(fe(e.getDateTitle), 1)]) : e.multiple ? F(e.$slots, "multiple", {
        key: 1,
        choose: e.getChoose.chooseDays
      }, () => [Ae(fe(e.getDateTitle), 1)]) : F(e.$slots, "date", Kr(Ye({ key: 2 }, e.slotProps)), () => [Ae(fe(e.getDateTitle), 1)])]))]),
      _: 3
    }, 8, ["name"])], 2)], 6),
    R("div", {
      class: p(e.n("body")),
      onTouchstart: n[2] || (n[2] = (...i) => e.handleTouchstart && e.handleTouchstart(...i)),
      onTouchmove: n[3] || (n[3] = (...i) => e.handleTouchmove && e.handleTouchmove(...i)),
      onTouchend: n[4] || (n[4] = (...i) => e.handleTouchend && e.handleTouchend(...i))
    }, [G(en, { name: `${e.n()}-panel-fade` }, {
      default: pe(() => [e.getPanelType === "year" ? (g(), Ce(o, {
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
      ])) : e.getPanelType === "month" ? (g(), Ce(t, {
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
      ])) : e.getPanelType === "date" ? (g(), Ce(a, {
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
      ])) : X("v-if", !0)]),
      _: 1
    }, 8, ["name"])], 34),
    e.$slots.actions ? (g(), C("div", {
      key: 0,
      class: p(e.n("actions"))
    }, [F(e.$slots, "actions")], 2)) : X("v-if", !0)
  ], 2);
}
var Fm = oe({
  name: N3,
  components: {
    MonthPickerPanel: C3,
    YearPickerPanel: M3,
    DayPickerPanel: h3
  },
  props: Bm,
  setup(e) {
    const { t: n } = ir(), r = de().format("YYYY-MM-D"), [o, t] = r.split("-"), a = To.find((J) => J === t), i = y(!1), l = y(!1), s = y(!0), u = y(), d = y(), c = y(), f = y(a), v = y(o), m = y(!1), h = y([]), w = y([]), $ = y([]), S = y([]), b = y([]), z = y([]), O = y(null), I = y(null), H = y(null), D = T(() => ({
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
    })), A = T(() => ({
      chooseMonth: u.value,
      chooseYear: d.value,
      chooseDay: c.value,
      chooseYears: h.value,
      chooseMonths: w.value,
      chooseDays: $.value,
      chooseRangeYear: S.value,
      chooseRangeMonth: b.value,
      chooseRangeDay: z.value
    })), B = T(() => ({
      previewMonth: f.value,
      previewYear: v.value
    })), E = T(() => v.value || d.value || ""), M = T(() => {
      var J;
      const { multiple: ve, range: ye } = e;
      return ye ? S.value.length ? `${S.value[0]} ~ ${S.value[1]}` : "" : ve ? `${h.value.length}${(n || sn)("datePickerSelected")}` : (J = d.value) != null ? J : "";
    }), U = T(() => {
      var J, ve;
      const { multiple: ye, range: Ee } = e;
      if (Ee) return b.value.length ? `${b.value[0]} ~ ${b.value[1]}` : "";
      let Ue = "";
      return u.value && (Ue = (ve = (J = (n || sn)("datePickerMonthDict")) == null ? void 0 : J[u.value].name) != null ? ve : ""), ye ? `${w.value.length}${(n || sn)("datePickerSelected")}` : Ue;
    }), L = T(() => {
      var J, ve, ye, Ee;
      const { multiple: Ue, range: _e } = e;
      if (_e) {
        const Co = z.value.map((eb) => de(eb).format("YYYY-MM-DD"));
        return Co.length ? `${Co[0]} ~ ${Co[1]}` : "";
      }
      if (Ue) return `${$.value.length}${(n || sn)("datePickerSelected")}`;
      if (!d.value || !u.value || !c.value) return "";
      const Xe = de(`${d.value}-${u.value}-${c.value}`).day(), fr = Eo.find((Co) => Co === `${Xe}`), nr = (ve = (J = (n || sn)("datePickerWeekDict")) == null ? void 0 : J[fr].name) != null ? ve : "", gt = (Ee = (ye = (n || sn)("datePickerMonthDict")) == null ? void 0 : ye[u.value].name) != null ? Ee : "", _g = Jr(c.value, 2, "0");
      return (n || sn)("lang") === "zh-CN" ? `${u.value}-${_g} ${nr.slice(0, 3)}` : `${nr.slice(0, 3)}, ${gt.slice(0, 3)} ${c.value}`;
    }), P = T(() => e.type === "year" || i.value ? "year" : e.type === "month" || l.value ? "month" : e.type === "date" ? "date" : ""), N = T(() => !e.touchable || !P.value), ee = T(() => {
      var J, ve;
      const ye = de(`${d.value}-${u.value}-${c.value}`).day(), Ee = c.value ? Jr(c.value, 2, "0") : "";
      return {
        week: `${ye}`,
        year: (J = d.value) != null ? J : "",
        month: (ve = u.value) != null ? ve : "",
        date: Ee
      };
    }), Q = T(() => A.value.chooseRangeDay.map((J) => de(J).format("YYYY-MM-DD"))), ae = T(() => d.value === v.value), Oe = T(() => u.value === f.value);
    let le = 0, K = 0, x = "", ue;
    me(() => e.modelValue, (J) => {
      if (_())
        if (e.range) {
          if (!He(J)) return;
          s.value = J.length !== 1, qn(J, e.type);
        } else if (e.multiple) {
          if (!He(J)) return;
          jr(J, e.type);
        } else Yr(gn(J));
    }, { immediate: !0 }), me(P, Wr);
    function he(J) {
      J === "year" ? i.value = !0 : J === "month" ? l.value = !0 : (i.value = !1, l.value = !1);
    }
    function W(J) {
      if (N.value) return;
      const { clientX: ve, clientY: ye } = J.touches[0];
      le = ve, K = ye;
    }
    function ie(J, ve) {
      return J >= ve && J > 20 ? "x" : "y";
    }
    function Pe(J) {
      if (N.value) return;
      const { clientX: ve, clientY: ye } = J.touches[0], Ee = ve - le, Ue = ye - K;
      ue = ie(Math.abs(Ee), Math.abs(Ue)), x = Ee > 0 ? "prev" : "next";
    }
    function Le() {
      return A3(this, null, function* () {
        if (N.value || ue !== "x") return;
        const J = P.value === "year" ? O : P.value === "month" ? I : H;
        yield On(), J.value.forwardRef(x), Wr();
      });
    }
    function Ke(J, ve) {
      const ye = ve === "year" ? S : ve === "month" ? b : z;
      if (ye.value = s.value ? [J, J] : [ye.value[0], J], s.value = !s.value, s.value) {
        const Ee = de(ye.value[0]).isAfter(ye.value[1]) ? [ye.value[1], ye.value[0]] : [...ye.value];
        k(e["onUpdate:modelValue"], Ee), k(e.onChange, Ee);
      }
    }
    function Ve(J, ve) {
      const ye = ve === "year" ? h : ve === "month" ? w : $, Ee = ve === "year" ? "YYYY" : ve === "month" ? "YYYY-MM" : "YYYY-MM-DD", Ue = ye.value.map((Xe) => de(Xe).format(Ee)), _e = Ue.findIndex((Xe) => Xe === J);
      _e === -1 ? Ue.push(J) : Ue.splice(_e, 1), k(e["onUpdate:modelValue"], Ue), k(e.onChange, Ue);
    }
    function ln(J, ve) {
      return !d.value || !u.value ? !1 : ae.value ? J === "year" ? ve < j(d.value) : J === "month" ? ve < u.value : Oe.value ? ve < j(c.value) : u.value > f.value : d.value > v.value;
    }
    function Qe(J) {
      const { readonly: ve, range: ye, multiple: Ee, onChange: Ue, "onUpdate:modelValue": _e } = e;
      if (J < 0 || ve) return;
      m.value = ln("day", J);
      const Xe = de(`${v.value}-${f.value}-${J}`).format("YYYY-MM-DD");
      ye ? Ke(Xe, "day") : Ee ? Ve(Xe, "day") : (k(_e, Xe), k(Ue, Xe));
    }
    function ge(J) {
      const { type: ve, readonly: ye, range: Ee, multiple: Ue, onChange: _e, onPreview: Xe, "onUpdate:modelValue": fr } = e;
      if (m.value = ln("month", J), ve === "month" && !ye) {
        const nr = `${v.value}-${J}`;
        Ee ? Ke(nr, "month") : Ue ? Ve(nr, "month") : (k(fr, nr), k(_e, nr));
      } else
        f.value = J, k(Xe, j(v.value), j(f.value), ve === "date" ? j(c.value) : void 0);
      l.value = !1;
    }
    function q(J) {
      const { type: ve, readonly: ye, range: Ee, multiple: Ue, onChange: _e, onPreview: Xe, "onUpdate:modelValue": fr } = e;
      m.value = ln("year", J), ve === "year" && !ye ? Ee ? Ke(`${J}`, "year") : Ue ? Ve(`${J}`, "year") : (k(fr, `${J}`), k(_e, `${J}`)) : (v.value = `${J}`, k(Xe, j(v.value), j(f.value), ve === "date" ? j(c.value) : void 0)), i.value = !1;
    }
    function Y(J, ve) {
      const ye = ve === "prev" ? -1 : 1;
      if (J === "year") v.value = `${j(v.value) + ye}`;
      else {
        let Ee = j(f.value) + ye;
        Ee < 1 && (v.value = `${j(v.value) - 1}`, Ee = 12), Ee > 12 && (v.value = `${j(v.value) + 1}`, Ee = 1), f.value = To.find((Ue) => j(Ue) === Ee);
      }
      k(e.onPreview, j(v.value), j(f.value), e.type === "date" ? j(c.value) : void 0);
    }
    function _() {
      return (e.multiple || e.range) && !He(e.modelValue) ? (to("DatePicker", 'type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && He(e.modelValue) ? (to("DatePicker", 'type of prop "modelValue" should be a String'), !1) : !0;
    }
    function be(J) {
      return He(J) ? !1 : J === "Invalid Date" ? (to("DatePicker", '"modelValue" is an Invalid Date'), !0) : !1;
    }
    function Te() {
      return e.fallbackViewDate && de(e.fallbackViewDate).format("YYYY-MM-D") !== "Invalid Date" ? e.fallbackViewDate : de().format("YYYY-MM-D");
    }
    function gn(J) {
      return J && !be(de(J).format("YYYY-MM-D")) ? J : Te();
    }
    function fn(J, ve) {
      const ye = ve === "year" ? "YYYY" : ve === "month" ? "YYYY-MM" : "YYYY-MM-D";
      return J.find((Ee) => !be(de(Ee).format(ye)));
    }
    function qn(J, ve) {
      var ye;
      const Ee = ve === "year" ? S : ve === "month" ? b : z, Ue = ve === "year" ? "YYYY" : ve === "month" ? "YYYY-MM" : "YYYY-MM-D";
      Ee.value = J.map((Xe) => de(Xe).format(Ue)).filter((Xe) => !be(Xe)).slice(0, 2);
      const _e = de(Ee.value[0]).isAfter(Ee.value[1]);
      Ee.value.length === 2 && _e && (Ee.value = [Ee.value[1], Ee.value[0]]), er((ye = fn(J, ve)) != null ? ye : Te());
    }
    function jr(J, ve) {
      var ye;
      const Ee = ve === "year" ? h : ve === "month" ? w : $, Ue = ve === "year" ? "YYYY" : ve === "month" ? "YYYY-MM" : "YYYY-MM-D";
      Ee.value = Array.from(new Set(J.map((_e) => de(_e).format(Ue)))).filter((_e) => _e !== "Invalid Date"), er((ye = fn(J, ve)) != null ? ye : Te());
    }
    function Yr(J) {
      const ve = de(J || Te()).format("YYYY-MM-D");
      if (be(ve)) return;
      const [ye, Ee, Ue] = ve.split("-");
      u.value = To.find((_e) => _e === Ee), d.value = ye, c.value = Ue, er(ve);
    }
    function er(J) {
      const ve = de(J || Te()).format("YYYY-MM-D");
      if (be(ve)) return;
      const [ye, Ee] = ve.split("-");
      f.value = To.find((Ue) => Ue === Ee), v.value = ye;
    }
    function Wr() {
      K = 0, le = 0, x = "", ue = void 0;
    }
    return {
      yearPanelEl: O,
      monthPanelEl: I,
      dayPanelEl: H,
      reverse: m,
      currentDate: r,
      chooseMonth: u,
      chooseYear: d,
      chooseDay: c,
      previewYear: v,
      displayYear: E,
      isYearPanel: i,
      isMonthPanel: l,
      getMonthTitle: U,
      getDateTitle: L,
      getYearTitle: M,
      getPanelType: P,
      getChoose: A,
      getPreview: B,
      componentProps: D,
      slotProps: ee,
      formatRange: Q,
      pt: n,
      t: sn,
      n: V3,
      classes: R3,
      clickEl: he,
      handleTouchstart: W,
      handleTouchmove: Pe,
      handleTouchend: Le,
      getChooseDay: Qe,
      getChooseMonth: ge,
      getChooseYear: q,
      checkPreview: Y,
      formatElevation: hn
    };
  }
});
Fm.render = L3;
var hi = Fm;
se(hi);
ce(hi, Bm);
var kD = hi, us = hi, F3 = Object.defineProperty, yc = Object.getOwnPropertySymbols, U3 = Object.prototype.hasOwnProperty, H3 = Object.prototype.propertyIsEnumerable, wc = (e, n, r) => n in e ? F3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, j3 = (e, n) => {
  for (var r in n || (n = {})) U3.call(n, r) && wc(e, r, n[r]);
  if (yc)
    for (var r of yc(n)) H3.call(n, r) && wc(e, r, n[r]);
  return e;
}, Um = j3({
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
  onBeforeClose: V(),
  onConfirm: V(),
  onCancel: V(),
  "onUpdate:show": V()
}, Me(wo, [
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
])), Y3 = Object.defineProperty, kc = Object.getOwnPropertySymbols, W3 = Object.prototype.hasOwnProperty, K3 = Object.prototype.propertyIsEnumerable, $c = (e, n, r) => n in e ? Y3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, q3 = (e, n) => {
  for (var r in n || (n = {})) W3.call(n, r) && $c(e, r, n[r]);
  if (kc)
    for (var r of kc(n)) K3.call(n, r) && $c(e, r, n[r]);
  return e;
}, { name: X3, n: G3, classes: Z3 } = te("dialog");
function J3(e, n) {
  const r = ne("var-button"), o = ne("var-popup");
  return g(), Ce(o, {
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
    default: pe(() => [R("div", Ye({
      class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
      style: q3({ width: e.toSizeUnit(e.width) }, e.dialogStyle)
    }, e.$attrs), [
      R("div", { class: p(e.n("title")) }, [F(e.$slots, "title", {}, () => {
        var t;
        return [Ae(fe((t = e.title) != null ? t : (e.pt ? e.pt : e.t)("dialogTitle")), 1)];
      })], 2),
      R("div", {
        class: p(e.n("message")),
        style: Z({ textAlign: e.messageAlign })
      }, [F(e.$slots, "default", {}, () => [Ae(fe(e.message), 1)])], 6),
      F(e.$slots, "actions", {
        slotClass: e.n("actions"),
        cancel: e.cancel,
        confirm: e.confirm
      }, () => [R("div", { class: p(e.n("actions")) }, [e.cancelButton ? (g(), Ce(r, {
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
        default: pe(() => {
          var t;
          return [Ae(fe((t = e.cancelButtonText) != null ? t : (e.pt ? e.pt : e.t)("dialogCancelButtonText")), 1)];
        }),
        _: 1
      }, 8, [
        "class",
        "text-color",
        "color",
        "loading",
        "disabled",
        "onClick"
      ])) : X("v-if", !0), e.confirmButton ? (g(), Ce(r, {
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
        default: pe(() => {
          var t;
          return [Ae(fe((t = e.confirmButtonText) != null ? t : (e.pt ? e.pt : e.t)("dialogConfirmButtonText")), 1)];
        }),
        _: 1
      }, 8, [
        "class",
        "text-color",
        "color",
        "loading",
        "disabled",
        "onClick"
      ])) : X("v-if", !0)], 2)])
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
var Hm = oe({
  name: X3,
  components: {
    VarPopup: Mr,
    VarButton: An
  },
  inheritAttrs: !1,
  props: Um,
  setup(e) {
    const { t: n } = ir(), r = y(!1), o = y(!1), t = Pn(e, "confirmButtonLoading"), a = Pn(e, "cancelButtonLoading"), i = Pn(e, "confirmButtonDisabled"), l = Pn(e, "cancelButtonDisabled"), s = {
      confirmButtonLoading: t,
      cancelButtonLoading: a,
      confirmButtonDisabled: i,
      cancelButtonDisabled: l
    };
    me(() => e.show, (m) => {
      r.value = m;
    }, { immediate: !0 }), me(() => e.closeOnClickOverlay, (m) => {
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
      t: sn,
      n: G3,
      classes: Z3,
      handleClickOverlay: d,
      confirm: c,
      cancel: f,
      toSizeUnit: ze,
      handleKeyEscape: v
    };
  }
});
Hm.render = J3;
var pt = Hm, Q3 = Object.defineProperty, x3 = Object.defineProperties, _3 = Object.getOwnPropertyDescriptors, Cc = Object.getOwnPropertySymbols, e4 = Object.prototype.hasOwnProperty, n4 = Object.prototype.propertyIsEnumerable, Sc = (e, n, r) => n in e ? Q3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, hl = (e, n) => {
  for (var r in n || (n = {})) e4.call(n, r) && Sc(e, r, n[r]);
  if (Cc)
    for (var r of Cc(n)) n4.call(n, r) && Sc(e, r, n[r]);
  return e;
}, r4 = (e, n) => x3(e, _3(n)), Sr, da = {};
function o4(e = {}) {
  return an(e) ? r4(hl({}, da), { message: e }) : hl(hl({}, da), e);
}
function Ur(e) {
  return tr() ? new Promise((n) => {
    Ur.close();
    const r = nn(o4(e));
    r.teleport = "body", Sr = r;
    const { unmountInstance: o } = yo(pt, r, {
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
  da = e;
};
Ur.resetDefaultOptions = function() {
  da = {};
};
Ur.close = function() {
  if (Sr != null) {
    const e = Sr;
    Sr = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
Ur.Component = pt;
se(pt);
se(pt, Ur);
ce(Ur, Um);
var $D = pt, ds = Ur, jm = {
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
}, { name: t4, n: a4, classes: i4 } = te("divider");
function l4(e, n) {
  return g(), C("div", {
    class: p(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.withPresetInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
    style: Z(e.style),
    role: "separator"
  }, [e.vertical ? X("v-if", !0) : F(e.$slots, "default", { key: 0 }, () => [e.description ? (g(), C("span", {
    key: 0,
    class: p(e.n("text"))
  }, fe(e.description), 3)) : X("v-if", !0)])], 6);
}
var Ym = oe({
  name: t4,
  props: jm,
  setup(e, { slots: n }) {
    const r = y(!1), o = T(() => {
      const { vertical: i, inset: l } = e;
      return !i && l === !0;
    }), t = T(() => {
      const { inset: i, vertical: l, margin: s } = e;
      if (ot(i) || l) return { margin: s };
      const u = j(i), d = Math.abs(u) + (i + "").replace(u + "", "");
      return {
        margin: s,
        width: `calc(100% - ${ze(d)})`,
        left: u > 0 ? ze(d) : ze(0)
      };
    });
    wn(a), et(a);
    function a() {
      const { description: i, vertical: l } = e;
      r.value = (n.default || i != null) && !l;
    }
    return {
      n: a4,
      classes: i4,
      withText: r,
      style: t,
      withPresetInset: o
    };
  }
});
Ym.render = l4;
var gi = Ym;
se(gi);
ce(gi, jm);
var CD = gi, cs = gi, Wm = {
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
}, s4 = Object.defineProperty, u4 = Object.defineProperties, d4 = Object.getOwnPropertyDescriptors, Oc = Object.getOwnPropertySymbols, c4 = Object.prototype.hasOwnProperty, f4 = Object.prototype.propertyIsEnumerable, Pc = (e, n, r) => n in e ? s4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, zc = (e, n) => {
  for (var r in n || (n = {})) c4.call(n, r) && Pc(e, r, n[r]);
  if (Oc)
    for (var r of Oc(n)) f4.call(n, r) && Pc(e, r, n[r]);
  return e;
}, Tc = (e, n) => u4(e, d4(n)), { name: v4, n: p4, classes: m4 } = te("drag");
function h4(e, n) {
  return g(), Ce(cr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [R("div", Ye({
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
var Km = oe({
  name: v4,
  inheritAttrs: !1,
  props: Wm,
  setup(e, { attrs: n }) {
    const r = y(null), o = y(0), t = y(0), a = y(!1), i = y(!1), { touching: l, dragging: s, moveX: u, moveY: d, startTouch: c, moveTouch: f, endTouch: v, resetTouch: m } = bo(), { disabled: h } = xr(), w = nn({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    me(() => e.boundary, B), ar(M), wn(() => {
      B(), M();
    });
    function $(L) {
      e.disabled || (c(L), O());
    }
    function S(L) {
      !l.value || e.disabled || (f(L), Fe(L), i.value = !1, a.value = !0, e.direction.includes("x") && (o.value += u.value), e.direction.includes("y") && (t.value += d.value), A());
    }
    function b() {
      e.disabled || (v(), i.value = !0, D());
    }
    function z(L) {
      s.value || k(e.onClick, L);
    }
    function O() {
      const { left: L, top: P } = I();
      o.value = L, t.value = P;
    }
    function I() {
      const L = tn(r.value), P = tn(window), N = L.top - P.top, ee = P.bottom - L.bottom, Q = L.left - P.left, ae = P.right - L.right, { width: Oe, height: le } = L, { width: K, height: x } = P;
      return {
        top: N,
        bottom: ee,
        left: Q,
        right: ae,
        width: Oe,
        height: le,
        halfWidth: Oe / 2,
        halfHeight: le / 2,
        windowWidth: K,
        windowHeight: x
      };
    }
    function H() {
      const L = I(), P = w.left, N = L.windowWidth - w.right - L.width, ee = w.top, Q = L.windowHeight - w.bottom - L.height;
      return {
        minX: P,
        minY: ee,
        maxX: P < N ? N : P,
        maxY: ee < Q ? Q : ee
      };
    }
    function D() {
      if (e.attraction == null) return;
      const { halfWidth: L, halfHeight: P, top: N, bottom: ee, left: Q, right: ae } = I(), { minX: Oe, minY: le, maxX: K, maxY: x } = H(), ue = Q + L - w.left, he = ae + L - w.right, W = N + P - w.top, ie = ee + P - w.bottom, Pe = ue <= he, Le = W <= ie;
      e.attraction.includes("x") && (o.value = Pe ? Oe : K), e.attraction.includes("y") && (t.value = Le ? le : x);
    }
    function A() {
      const { minX: L, minY: P, maxX: N, maxY: ee } = H();
      o.value = un(o.value, L, N), t.value = un(t.value, P, ee);
    }
    function B() {
      const { top: L = 0, bottom: P = 0, left: N = 0, right: ee = 0 } = e.boundary;
      w.top = on(L), w.bottom = on(P), w.left = on(N), w.right = on(ee);
    }
    function E() {
      var L;
      const P = (L = n.style) != null ? L : {};
      return Tc(zc({}, n), { style: Tc(zc({}, P), {
        top: a.value ? 0 : P.top,
        left: a.value ? 0 : P.left,
        right: a.value ? "auto" : P.right,
        bottom: a.value ? "auto" : P.bottom,
        transform: a.value ? `translate(${o.value}px, ${t.value}px)` : P.transform
      }) });
    }
    function M() {
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
      n: p4,
      classes: m4,
      getAttrs: E,
      handleTouchstart: $,
      handleTouchmove: S,
      handleTouchend: b,
      handleClick: z,
      resize: M,
      reset: U
    };
  }
});
Km.render = h4;
var bi = Km;
se(bi);
ce(bi, Wm);
var SD = bi, ca = bi, qm = {
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
}, { name: g4, n: b4, classes: y4 } = te("tooltip");
function w4(e, n) {
  return g(), C("div", {
    ref: "host",
    class: p(e.classes(e.n(), e.n("$--box")))
  }, [F(e.$slots, "default"), (g(), Ce(cr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [G(en, {
    name: e.n(),
    onAfterEnter: e.onOpened,
    onAfterLeave: e.handleClosed,
    persisted: ""
  }, {
    default: pe(() => [Re(R("div", {
      ref: "popover",
      class: p(e.classes(e.n("tooltip"), e.n("$--box"))),
      style: Z({ zIndex: e.zIndex }),
      onClick: n[0] || (n[0] = jn(() => {
      }, ["stop"])),
      onMouseenter: n[1] || (n[1] = (...r) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...r)),
      onMouseleave: n[2] || (n[2] = (...r) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...r))
    }, [R("div", {
      style: Z({
        background: e.color,
        color: e.textColor,
        width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.referenceSize.width)) : void 0
      }),
      class: p(e.classes(e.n("content-container"), e.n(`--${e.type}`))),
      role: "tooltip"
    }, [F(e.$slots, "content", {}, () => [Ae(fe(e.content), 1)])], 6)], 38), [[xn, e.show]])]),
    _: 3
  }, 8, [
    "name",
    "onAfterEnter",
    "onAfterLeave"
  ])], 8, ["to", "disabled"]))], 2);
}
var Xm = oe({
  name: g4,
  props: qm,
  setup(e) {
    const { disabled: n } = xr(), { popover: r, host: o, referenceSize: t, show: a, zIndex: i, handlePopoverMouseenter: l, handlePopoverMouseleave: s, handlePopoverClose: u, handleClosed: d, open: c, close: f, resize: v, setReference: m } = ap(e);
    return {
      popover: r,
      host: o,
      referenceSize: t,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: ze,
      n: b4,
      classes: y4,
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
Xm.render = w4;
var yi = Xm;
se(yi);
ce(yi, qm);
var OD = yi, fa = yi, Gm = {
  expand: Boolean,
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  },
  "onUpdate:expand": V()
}, k4 = Object.defineProperty, Ec = Object.getOwnPropertySymbols, $4 = Object.prototype.hasOwnProperty, C4 = Object.prototype.propertyIsEnumerable, Ic = (e, n, r) => n in e ? k4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, S4 = (e, n) => {
  for (var r in n || (n = {})) $4.call(n, r) && Ic(e, r, n[r]);
  if (Ec)
    for (var r of Ec(n)) C4.call(n, r) && Ic(e, r, n[r]);
  return e;
}, { name: O4, n: P4, classes: z4 } = te("ellipsis"), T4 = { key: 0 };
function E4(e, n) {
  const r = ne("var-tooltip");
  return g(), Ce(r, Ye({
    class: e.classes(e.n(), [
      e.lineClamp,
      e.n("--clamp"),
      e.n("--line")
    ], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")]),
    "var-ellipsis-cover": "",
    style: e.rootStyles
  }, e.tooltipProps, { onClick: e.handleClick }), {
    content: pe(() => [F(e.$slots, "tooltip-content", {}, () => {
      var o;
      return [(o = e.tooltipProps) != null && o.content ? (g(), C("span", T4, fe(e.tooltipProps.content), 1)) : F(e.$slots, "default", { key: 1 })];
    })]),
    default: pe(() => [R("span", null, [F(e.$slots, "default")])]),
    _: 3
  }, 16, [
    "class",
    "style",
    "onClick"
  ]);
}
var Zm = oe({
  name: O4,
  components: { VarTooltip: fa },
  props: Gm,
  setup(e) {
    const n = Pn(e, "expand"), r = T(() => e.lineClamp ? { "-webkit-line-clamp": e.lineClamp } : {}), o = T(() => e.tooltip === !1 ? { disabled: !0 } : e.tooltip === !0 ? { sameWidth: !0 } : S4({ sameWidth: !0 }, e.tooltip));
    function t() {
      e.expandTrigger && (n.value = !n.value);
    }
    return {
      tooltipProps: o,
      expanding: n,
      rootStyles: r,
      n: P4,
      classes: z4,
      handleClick: t
    };
  }
});
Zm.render = E4;
var wi = Zm;
se(wi);
ce(wi, Gm);
var PD = wi, fs = wi, Jm = {
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
  inactiveIconSize: Me(dn, "size"),
  activeIconSize: Me(dn, "size"),
  inactiveIconNamespace: Me(dn, "namespace"),
  activeIconNamespace: Me(dn, "namespace"),
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
}, { name: I4, classes: gl, n: Fn } = te("fab"), ki = oe({
  name: I4,
  inheritAttrs: !1,
  props: Jm,
  setup(e, { slots: n, attrs: r }) {
    const o = Pn(e, "active"), t = y(null), a = y(null);
    me(() => e.trigger, () => {
      o.value = !1;
    }), me(() => e.disabled, () => {
      o.value = !1;
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
    }), tv(t, "click", s);
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
      return n.trigger ? e.show ? n.trigger({ active: o.value }) : null : Re(G(An, {
        "var-fab-cover": !0,
        class: Fn("trigger"),
        type: e.type,
        color: e.color,
        disabled: e.disabled,
        elevation: e.elevation,
        iconContainer: !0
      }, { default: () => [G(Je, {
        "var-fab-cover": !0,
        class: gl([
          o.value,
          Fn("trigger-active-icon"),
          Fn("trigger-inactive-icon")
        ]),
        name: o.value ? e.activeIcon : e.inactiveIcon,
        size: o.value ? e.activeIconSize : e.inactiveIconSize,
        namespace: o.value ? e.activeIconNamespace : e.inactiveIconNamespace,
        transition: 200,
        animationClass: Fn("--trigger-icon-animation")
      }, null)] }), [[xn, e.show]]);
    }
    return () => {
      var d;
      const c = Ca((d = k(n.default)) != null ? d : []), f = ot(e.drag) ? {} : e.drag;
      return G(ca, Ye({
        ref: a,
        class: gl(Fn(`--position-${e.position}`), [!e.fixed, Fn("--absolute")]),
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
      }, r), { default: () => [G("div", {
        class: gl(Fn(), Fn(`--direction-${e.direction}`), [e.safeArea, Fn("--safe-area")]),
        ref: t,
        onMouseleave: () => l(!1, c.length),
        onMouseenter: () => l(!0, c.length)
      }, [G(en, { name: Fn("--active-transition") }, { default: () => [u()] }), G(en, {
        name: Fn(`--actions-transition-${e.direction}`),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, { default: () => [Re(G("div", {
        class: Fn("actions"),
        onClick: (v) => v.stopPropagation()
      }, [c.map((v) => {
        var m;
        return G("div", {
          class: Fn("action"),
          key: (m = v.key) != null ? m : void 0
        }, [v]);
      })]), [[xn, e.show && o.value && c.length]])] })])] });
    };
  }
});
se(ki);
ce(ki, Jm);
var zD = ki, vs = ki, Qm = {
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
}, { name: B4, n: D4, classes: M4 } = te("floating-panel"), Bc = 100, Dc = 0.2;
function A4(e, n) {
  return g(), Ce(cr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [R("div", {
    class: p(e.classes(e.n(), [e.safeArea, e.n("--safe-area")], e.formatElevation(e.elevation, 3))),
    style: Z({
      height: `${e.toSizeUnit(e.maxAnchor)}`,
      transform: `translateY(calc(100% - ${e.toSizeUnit(e.visibleHeight)}))`,
      transition: e.touching ? "none" : `transform ${e.toNumber(e.duration)}ms var(--floating-panel-transition-timing-function), background-color 0.25s`
    }),
    onTouchstart: n[0] || (n[0] = (...r) => e.handleTouchstart && e.handleTouchstart(...r)),
    onTouchmove: n[1] || (n[1] = (...r) => e.handleTouchmove && e.handleTouchmove(...r)),
    onTouchend: n[2] || (n[2] = (...r) => e.handleTouchend && e.handleTouchend(...r)),
    onTouchcancel: n[3] || (n[3] = (...r) => e.handleTouchend && e.handleTouchend(...r))
  }, [F(e.$slots, "header", {}, () => [R("div", { class: p(e.n("header")) }, [R("div", { class: p(e.n("header-toolbar")) }, null, 2)], 2)]), R("div", {
    ref: "contentRef",
    class: p(e.n("content"))
  }, [F(e.$slots, "default")], 2)], 38)], 8, ["to", "disabled"]);
}
var xm = oe({
  name: B4,
  props: Qm,
  setup(e) {
    const n = y(0), r = y(null), { height: o } = x0(), t = T(() => o.value * 0.6), a = Pn(e, "anchor", { defaultValue: Bc }), i = T(() => {
      const A = [Bc, t.value], { anchors: B } = e;
      return Zn(B) ? A : B;
    }), l = T(() => Math.min(...i.value)), s = T(() => Math.max(...i.value)), { disabled: u } = xr(), { deltaY: d, touching: c, startTouch: f, moveTouch: v, endTouch: m, isReachTop: h, isReachBottom: w } = bo();
    let $;
    at(() => c.value), me(() => a.value, S, { immediate: !0 }), me(() => i.value, () => {
      S(a.value);
    }, { immediate: !0 });
    function S(A) {
      I(A ?? l.value);
    }
    function b(A) {
      f(A), $ = n.value;
    }
    function z(A) {
      var B;
      v(A);
      const E = A.target, M = r.value === E || ((B = r.value) == null ? void 0 : B.contains(E));
      if (!(M && !e.contentDraggable)) {
        if (M && e.contentDraggable && n.value >= s.value && !h(r.value)) {
          w(r.value) && Fe(A);
          return;
        }
        I(H($ - d.value)), Fe(A);
      }
    }
    function O() {
      m();
      const A = a.value;
      I(n.value), a.value = n.value, a.value !== A && k(e.onAnchorChange, n.value);
    }
    function I(A) {
      n.value = c.value ? A : D(A);
    }
    function H(A) {
      if (A > s.value) {
        const B = A - s.value;
        return s.value + B * Dc;
      }
      if (A < l.value) {
        const B = l.value - A;
        return l.value - B * Dc;
      }
      return A;
    }
    function D(A) {
      if (i.value.includes(A)) return A;
      let B = 1 / 0, E = 0;
      return i.value.forEach((M) => {
        const U = Math.abs(M - A);
        U < B && (B = U, E = M);
      }), E;
    }
    return {
      contentRef: r,
      teleportDisabled: u,
      touching: c,
      minAnchor: l,
      maxAnchor: s,
      visibleHeight: n,
      n: D4,
      classes: M4,
      toSizeUnit: ze,
      toNumber: j,
      formatElevation: hn,
      handleTouchstart: b,
      handleTouchmove: z,
      handleTouchend: O
    };
  }
});
xm.render = A4;
var $i = xm;
se($i);
ce($i, Qm);
var TD = $i, ps = $i, _m = {
  disabled: Boolean,
  readonly: Boolean,
  scrollToError: String,
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  },
  onSubmit: V(),
  onReset: V()
}, Mc = (e, n, r) => new Promise((o, t) => {
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
}), { name: N4, n: V4 } = te("form");
function R4(e, n) {
  return g(), C("form", {
    class: p(e.n()),
    onSubmit: n[0] || (n[0] = (...r) => e.handleSubmit && e.handleSubmit(...r)),
    onReset: n[1] || (n[1] = (...r) => e.handleReset && e.handleReset(...r))
  }, [F(e.$slots, "default")], 34);
}
var eh = oe({
  name: N4,
  props: _m,
  setup(e) {
    const n = T(() => e.disabled), r = T(() => e.readonly), { formItems: o, bindFormItems: t } = U1();
    t({
      disabled: n,
      readonly: r
    });
    function a(c) {
      setTimeout(() => {
        const f = Ar(c), v = f === window ? 0 : id(f);
        Lo(f, {
          top: id(c) - v - on(e.scrollToErrorOffsetY),
          animation: Ml
        });
      }, 300);
    }
    function i(c) {
      return Mc(this, null, function* () {
        Fe(c);
        const f = yield s();
        k(e.onSubmit, f);
      });
    }
    function l(c) {
      Fe(c), u(), k(e.onReset);
    }
    function s() {
      return Mc(this, null, function* () {
        var c;
        const f = yield Promise.all(o.map(({ validate: v }) => v()));
        if (e.scrollToError) {
          const [, v] = Yf(f, (h) => h === !1, e.scrollToError), m = v > -1;
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
      n: V4,
      handleSubmit: i,
      handleReset: l,
      validate: s,
      reset: u,
      resetValidation: d
    };
  }
});
eh.render = R4;
var ko = eh;
ko.useValidation = Rn;
ko.useForm = Ln;
se(ko);
ce(ko, _m);
var ED = ko, ms = ko, nh = {
  highlighter: Object,
  theme: String,
  tag: {
    type: String,
    default: "div"
  }
}, { name: L4, n: F4 } = te("highlighter-provider"), Ci = oe({
  name: L4,
  props: nh,
  setup(e, { slots: n }) {
    return mS({
      highlighter: T(() => e.highlighter),
      theme: T(() => e.theme)
    }), () => xo(e.tag, { class: F4() }, k(n.default));
  }
});
se(Ci);
ce(Ci, nh);
var ID = Ci, hs = Ci, rh = {
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
}, { name: U4, n: H4, classes: j4 } = te("image"), Y4 = [
  "alt",
  "title",
  "referrerpolicy",
  "lazy-loading",
  "lazy-error"
], W4 = [
  "alt",
  "title",
  "referrerpolicy",
  "src"
];
function K4(e, n) {
  var r;
  const o = We("lazy"), t = We("ripple");
  return Re((g(), C("div", {
    class: p(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
    style: Z({
      width: e.toSizeUnit(e.width),
      height: e.toSizeUnit(e.height),
      borderRadius: e.toSizeUnit(e.radius)
    })
  }, [
    e.lazy && !e.showErrorSlot ? Re((g(), C("img", {
      key: 0,
      role: "img",
      class: p(e.n("image")),
      alt: e.alt,
      title: e.title,
      referrerpolicy: e.referrerpolicy,
      "lazy-loading": e.loading,
      "lazy-error": e.error,
      style: Z({
        objectFit: e.fit,
        objectPosition: e.position
      }),
      onLoad: n[0] || (n[0] = (...a) => e.handleLoad && e.handleLoad(...a)),
      onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
    }, null, 46, Y4)), [[o, (r = e.src) != null ? r : ""]]) : X("v-if", !0),
    !e.lazy && !e.showErrorSlot ? (g(), C("img", {
      key: 1,
      role: "img",
      class: p(e.n("image")),
      alt: e.alt,
      title: e.title,
      referrerpolicy: e.referrerpolicy,
      style: Z({
        objectFit: e.fit,
        objectPosition: e.position
      }),
      src: e.src,
      onLoad: n[2] || (n[2] = (...a) => e.handleLoad && e.handleLoad(...a)),
      onError: n[3] || (n[3] = (...a) => e.handleError && e.handleError(...a)),
      onClick: n[4] || (n[4] = (...a) => e.handleClick && e.handleClick(...a))
    }, null, 46, W4)) : X("v-if", !0),
    e.showErrorSlot ? F(e.$slots, "error", { key: 2 }) : X("v-if", !0)
  ], 6)), [[t, { disabled: !e.ripple }]]);
}
var oh = oe({
  name: U4,
  directives: {
    Lazy: Ko,
    Ripple: cn
  },
  props: rh,
  setup(e, { slots: n }) {
    const r = y(!1);
    me(() => e.src, () => {
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
      n: H4,
      classes: j4,
      toSizeUnit: ze,
      handleLoad: t,
      handleError: o,
      handleClick: a
    };
  }
});
oh.render = K4;
var Si = oh;
se(Si);
ce(Si, rh);
var BD = Si, gs = Si, Du = {
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
}), q4 = 250, X4 = 20, { name: G4, n: Ac, classes: Z4 } = te("swipe"), J4 = ["onClick"];
function Q4(e, n) {
  const r = ne("var-icon"), o = ne("var-button"), t = We("hover");
  return Re((g(), C("div", {
    ref: "swipeEl",
    class: p(e.n())
  }, [
    R("div", {
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
    }, [F(e.$slots, "default")], 38),
    e.navigation ? F(e.$slots, "prev", Kr(Ye({ key: 0 }, {
      index: e.index,
      length: e.length,
      prev: e.prev,
      next: e.next,
      to: e.to,
      hovering: e.hovering
    })), () => [G(en, { name: e.getNavigationAnimation("prev") }, {
      default: pe(() => [e.navigation === !0 || e.hovering ? (g(), C("div", {
        key: 0,
        class: p(e.classes(e.n("navigation"), e.n("navigation-prev"), [e.vertical, e.n("--navigation-vertical-prev")]))
      }, [G(o, {
        "var-swipe-cover": "",
        disabled: !e.loop && e.index === 0,
        class: p(e.n("navigation-prev-button")),
        onClick: n[3] || (n[3] = (a) => e.prev())
      }, {
        default: pe(() => [G(r, {
          "var-swipe-cover": "",
          class: p(e.n("navigation-prev-button-icon")),
          name: e.vertical ? "chevron-up" : "chevron-left"
        }, null, 8, ["class", "name"])]),
        _: 1
      }, 8, ["disabled", "class"])], 2)) : X("v-if", !0)]),
      _: 1
    }, 8, ["name"])]) : X("v-if", !0),
    e.navigation ? F(e.$slots, "next", Kr(Ye({ key: 1 }, {
      index: e.index,
      length: e.length,
      hovering: e.hovering,
      prev: e.prev,
      next: e.next,
      to: e.to
    })), () => [G(en, { name: e.getNavigationAnimation("next") }, {
      default: pe(() => [e.navigation === !0 || e.hovering ? (g(), C("div", {
        key: 0,
        class: p(e.classes(e.n("navigation"), e.n("navigation-next"), [e.vertical, e.n("--navigation-vertical-next")]))
      }, [G(o, {
        "var-swipe-cover": "",
        class: p(e.n("navigation-next-button")),
        disabled: !e.loop && e.index === e.length - 1,
        onClick: n[4] || (n[4] = (a) => e.next())
      }, {
        default: pe(() => [G(r, {
          "var-swipe-cover": "",
          class: p(e.n("navigation-next-button-icon")),
          name: e.vertical ? "chevron-down" : "chevron-right"
        }, null, 8, ["class", "name"])]),
        _: 1
      }, 8, ["class", "disabled"])], 2)) : X("v-if", !0)]),
      _: 1
    }, 8, ["name"])]) : X("v-if", !0),
    F(e.$slots, "indicator", Kr(ma({
      index: e.index,
      length: e.length,
      hovering: e.hovering,
      prev: e.prev,
      next: e.next,
      to: e.to
    })), () => [e.indicator && e.length ? (g(), C("div", {
      key: 0,
      class: p(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
    }, [(g(!0), C(De, null, qe(e.length, (a, i) => (g(), C("div", {
      key: a,
      class: p(e.classes(e.n("indicator"), [e.index === i, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
      style: Z({ background: e.indicatorColor }),
      onClick: (l) => e.to(i)
    }, null, 14, J4))), 128))], 2)) : X("v-if", !0)])
  ], 2)), [[t, e.handleHovering]]);
}
var th = oe({
  name: G4,
  directives: { Hover: Tn },
  components: {
    VarButton: An,
    VarIcon: Je
  },
  props: Du,
  setup(e) {
    const n = y(null), r = y(0), o = T(() => e.vertical), t = y(0), a = y(0), i = y(!1), l = y(0), s = y(!1), { swipeItems: u, bindSwipeItems: d, length: c } = H1(), { swipeResizeListeners: f, bindSwipeResizeListeners: v } = j1(), { popup: m, bindPopup: h } = hv(), { deltaX: w, deltaY: $, moveX: S, moveY: b, offsetX: z, offsetY: O, touching: I, direction: H, startTime: D, startTouch: A, moveTouch: B, endTouch: E } = bo(), M = T(() => H.value === (e.vertical ? "vertical" : "horizontal"));
    let U = !1, L = -1;
    d({
      size: r,
      currentIndex: l,
      vertical: o
    }), je(() => window, "keydown", Le), k(h, null), k(v, null), me(() => c.value, () => eo(null, null, function* () {
      yield On(), le(), Ke();
    })), m && me(() => m.show.value, (ge) => eo(null, null, function* () {
      ge ? (yield On(), Ke()) : x();
    })), Vr(Ke), go(x), ar(Ke);
    function P(ge) {
      return u.find(({ index: q }) => q.value === ge);
    }
    function N() {
      e.loop && (a.value >= 0 && P(c.value - 1).setTranslate(-t.value), a.value <= -(t.value - r.value) && P(0).setTranslate(t.value), a.value > -(t.value - r.value) && a.value < 0 && (P(c.value - 1).setTranslate(0), P(0).setTranslate(0)));
    }
    function ee(ge) {
      const q = zn(ge) ? ge : Math.floor((a.value - r.value / 2) / -r.value), { loop: Y } = e;
      return q <= -1 ? Y ? -1 : 0 : q >= c.value ? Y ? c.value : c.value - 1 : q;
    }
    function Q(ge) {
      const { loop: q } = e;
      return ge === -1 ? q ? c.value - 1 : 0 : ge === c.value ? q ? 0 : c.value - 1 : ge;
    }
    function ae(ge) {
      return e.loop ? ge < 0 ? c.value + ge : ge >= c.value ? ge - c.value : ge : un(ge, 0, c.value - 1);
    }
    function Oe() {
      return eo(this, null, function* () {
        const ge = a.value >= r.value, q = a.value <= -t.value, Y = 0, _ = -(t.value - r.value);
        i.value = !0, (ge || q) && (i.value = !0, a.value = q ? Y : _, P(0).setTranslate(0), P(c.value - 1).setTranslate(0)), yield On(), i.value = !1;
      });
    }
    function le() {
      U || (l.value = ae(j(e.initialIndex)), U = !0);
    }
    function K() {
      const { autoplay: ge } = e;
      !ge || c.value <= 1 || (x(), L = window.setTimeout(() => {
        Ve(), K();
      }, j(ge)));
    }
    function x() {
      L && clearTimeout(L);
    }
    function ue(ge) {
      return eo(this, null, function* () {
        c.value <= 1 || !e.touchable || (A(ge), x(), yield Oe(), i.value = !0);
      });
    }
    function he(ge) {
      const { touchable: q, vertical: Y } = e;
      !I.value || !q || (B(ge), M.value && (Fe(ge), a.value += Y ? b.value : S.value, N()));
    }
    function W() {
      if (!I.value || (E(), !M.value)) return;
      const { vertical: ge, onChange: q } = e, Y = ge ? $.value < 0 : w.value < 0, _ = ge ? O.value : z.value, be = performance.now() - D.value <= q4 && _ >= X4 ? ee(Y ? l.value + 1 : l.value - 1) : ee();
      i.value = !1, a.value = be * -r.value;
      const Te = l.value;
      l.value = Q(be), K(), Te !== l.value && k(q, l.value);
    }
    function ie(ge) {
      e.navigation === "hover" && (s.value = ge);
    }
    function Pe(ge) {
      return e.navigation !== "hover" ? "" : Ac(`--navigation${e.vertical ? "-vertical" : ""}-${ge}-animation`);
    }
    function Le(ge) {
      if (!u.length || u.findIndex(({ isFocusing: Y }) => Y.value) === -1) return;
      const { key: q } = ge;
      Fe(ge), q === "ArrowLeft" && ln(), q === "ArrowRight" && Ve();
    }
    function Ke() {
      n.value && (i.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * c.value, a.value = l.value * -r.value, u.forEach((ge) => {
        ge.setTranslate(0);
      }), K(), setTimeout(() => {
        i.value = !1;
      }), f.forEach(({ onResize: ge }) => {
        ge();
      }));
    }
    function Ve(ge) {
      return eo(this, null, function* () {
        if (c.value <= 1) return;
        le();
        const { loop: q, onChange: Y } = e, _ = l.value;
        if (l.value = ae(_ + 1), ge?.event !== !1 && k(Y, l.value), yield Oe(), _ === c.value - 1 && q) {
          P(0).setTranslate(t.value), a.value = c.value * -r.value;
          return;
        }
        _ !== c.value - 1 && (a.value = l.value * -r.value);
      });
    }
    function ln(ge) {
      return eo(this, null, function* () {
        if (c.value <= 1) return;
        le();
        const { loop: q, onChange: Y } = e, _ = l.value;
        if (l.value = ae(_ - 1), ge?.event !== !1 && k(Y, l.value), yield Oe(), _ === 0 && q) {
          P(c.value - 1).setTranslate(-t.value), a.value = r.value;
          return;
        }
        _ !== 0 && (a.value = l.value * -r.value);
      });
    }
    function Qe(ge, q) {
      if (c.value <= 1 || ge === l.value) return;
      ge = ge < 0 ? 0 : ge, ge = ge >= c.value ? c.value : ge;
      const Y = ge > l.value ? Ve : ln, _ = Math.abs(ge - l.value);
      Array.from({ length: _ }).forEach((be, Te) => {
        Y({ event: Te === _ - 1 ? q?.event : !1 });
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
      n: Ac,
      toSizeUnit: ze,
      classes: Z4,
      handleTouchstart: ue,
      handleTouchmove: he,
      handleTouchend: W,
      next: Ve,
      prev: ln,
      to: Qe,
      resize: Ke,
      toNumber: j,
      handleHovering: ie,
      getNavigationAnimation: Pe
    };
  }
});
th.render = Q4;
var Oi = th;
se(Oi);
ce(Oi, Du);
var DD = Oi, Xo = Oi;
function x4() {
  const { bindParent: e, index: n, parentProvider: r } = kn(Yv);
  return Yn(!!e, "SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: r,
    bindSwipe: e
  };
}
var { name: _4, n: e6 } = te("swipe-item"), n6 = ["aria-hidden"];
function r6(e, n) {
  return g(), C("div", {
    class: p(e.n()),
    style: Z({
      width: e.vertical ? void 0 : e.toSizeUnit(e.size),
      height: e.vertical ? e.toSizeUnit(e.size) : void 0,
      transform: `translate${e.vertical ? "Y" : "X"}(${e.toSizeUnit(e.translate)})`
    }),
    tabindex: "-1",
    "aria-hidden": e.currentIndex !== e.index,
    onFocus: n[0] || (n[0] = (r) => e.isFocusing = !0),
    onBlur: n[1] || (n[1] = (r) => e.isFocusing = !1)
  }, [F(e.$slots, "default")], 46, n6);
}
var ah = oe({
  name: _4,
  setup() {
    const e = y(0), n = y(!1), { swipe: r, bindSwipe: o, index: t } = x4(), { size: a, currentIndex: i, vertical: l } = r;
    o({
      index: t,
      isFocusing: T(() => n.value),
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
      n: e6,
      toSizeUnit: ze
    };
  }
});
ah.render = r6;
var Mu = ah;
se(Mu);
var MD = Mu, Go = Mu, o6 = Object.defineProperty, Nc = Object.getOwnPropertySymbols, t6 = Object.prototype.hasOwnProperty, a6 = Object.prototype.propertyIsEnumerable, Vc = (e, n, r) => n in e ? o6(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Rc = (e, n) => {
  for (var r in n || (n = {})) t6.call(n, r) && Vc(e, r, n[r]);
  if (Nc)
    for (var r of Nc(n)) a6.call(n, r) && Vc(e, r, n[r]);
  return e;
}, ih = Rc(Rc({
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
}, Me(Du, [
  "loop",
  "indicator",
  "onChange"
])), Me(wo, [
  "lockScroll",
  "teleport",
  "closeOnKeyEscape",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onKeyEscape",
  "onRouteChange"
])), { name: i6, n: Lc, classes: l6 } = te("image-preview"), bl = 12, Fc = 200, s6 = 350, Uc = 200, u6 = 500, Tt = 1, d6 = ["onTouchstart"], c6 = ["src", "alt"];
function f6(e, n) {
  const r = ne("var-swipe-item"), o = ne("var-swipe"), t = ne("var-icon"), a = ne("var-popup");
  return g(), Ce(a, {
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
    default: pe(() => [
      G(o, Ye({
        ref: "swipeRef",
        class: e.n("swipe"),
        "var-image-preview-cover": "",
        touchable: e.canSwipe,
        indicator: e.indicator && e.images.length > 1,
        "initial-index": e.toNumber(e.initialIndex),
        loop: e.loop
      }, e.$attrs, { onChange: e.onChange }), {
        default: pe(() => [(g(!0), C(De, null, qe(e.images, (i, l) => (g(), Ce(r, {
          key: i,
          class: p(e.n("swipe-item")),
          "var-image-preview-cover": ""
        }, {
          default: pe(() => [R("div", {
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
          }, [R("img", {
            role: "img",
            class: p(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
            src: i,
            alt: i
          }, null, 10, c6)], 46, d6)]),
          _: 2
        }, 1032, ["class"]))), 128))]),
        indicator: pe(({ index: i, length: l }) => [F(e.$slots, "indicator", {
          index: i,
          length: l
        }, () => [e.indicator && e.images.length > 1 ? (g(), C("div", {
          key: 0,
          class: p(e.n("indicators"))
        }, fe(i + 1) + " / " + fe(l), 3)) : X("v-if", !0)])]),
        _: 3
      }, 16, [
        "class",
        "touchable",
        "indicator",
        "initial-index",
        "loop",
        "onChange"
      ]),
      F(e.$slots, "close-icon", {}, () => [e.closeable ? (g(), Ce(t, {
        key: 0,
        class: p(e.n("close-icon")),
        name: "close-circle",
        "var-image-preview-cover": "",
        onClick: e.close
      }, null, 8, ["class", "onClick"])) : X("v-if", !0)]),
      e.$slots.extra ? (g(), C("div", {
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
var lh = oe({
  name: i6,
  components: {
    VarSwipe: Xo,
    VarSwipeItem: Go,
    VarPopup: Mr,
    VarIcon: Je
  },
  inheritAttrs: !1,
  props: ih,
  setup(e) {
    const n = Pn(e, "show"), r = y(1), o = y(0), t = y(0), a = y(), i = y(), l = y(!0), s = y(null), { moveX: u, moveY: d, distance: c, startTime: f, startTouch: v, moveTouch: m, endTouch: h } = bo(), w = T(() => {
      const { imagePreventDefault: K, show: x } = e;
      return x && K;
    });
    let $ = null, S = null, b = !1;
    const z = {
      start: null,
      prev: null
    };
    je(() => document, "contextmenu", ee);
    function O(K) {
      r.value = j(K), l.value = !1, z.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, Uc);
    }
    function I() {
      r.value = 1, o.value = 0, t.value = 0, l.value = !0, z.prev = null, a.value = void 0, i.value = void 0;
    }
    function H(K) {
      return z.prev ? c.value <= bl && performance.now() - f.value <= Fc && z.prev === K : !1;
    }
    function D(K) {
      return !K || !z.start || !z.prev ? !1 : c.value <= bl && performance.now() - f.value < s6 && (K === z.start || K.parentNode === z.start);
    }
    function A() {
      h(), window.clearTimeout(S), b = !1, z.start = null;
    }
    function B(K) {
      if (h(), window.clearTimeout(S), b) {
        b = !1;
        return;
      }
      const x = D(K.target);
      $ = window.setTimeout(() => {
        x && N(), z.start = null;
      }, Fc);
    }
    function E(K, x) {
      window.clearTimeout($), window.clearTimeout(S);
      const ue = K.currentTarget;
      if (z.start = ue, S = window.setTimeout(() => {
        b = !0, k(e.onLongPress, x);
      }, u6), H(ue)) {
        r.value > Tt ? I() : O(e.zoom);
        return;
      }
      v(K), z.prev = ue;
    }
    function M(K) {
      const { offsetWidth: x, offsetHeight: ue } = K, { naturalWidth: he, naturalHeight: W } = K.querySelector(`.${Lc("image")}`);
      return {
        width: x,
        height: ue,
        imageRadio: W / he,
        rootRadio: ue / x,
        zoom: j(e.zoom)
      };
    }
    function U(K) {
      const { zoom: x, imageRadio: ue, rootRadio: he, width: W, height: ie } = M(K);
      if (!ue) return 0;
      const Pe = ue > he ? ie / ue : W;
      return Math.max(0, (x * Pe - W) / 2) / x;
    }
    function L(K) {
      const { zoom: x, imageRadio: ue, rootRadio: he, width: W, height: ie } = M(K);
      if (!ue) return 0;
      const Pe = ue > he ? ie : W * ue;
      return Math.max(0, (x * Pe - ie) / 2) / x;
    }
    function P(K) {
      if (!z.prev) return;
      m(K);
      const x = K.currentTarget;
      if (c.value > bl && window.clearTimeout(S), r.value > Tt) {
        const ue = U(x), he = L(x);
        o.value = un(o.value + u.value, -ue, ue), t.value = un(t.value + d.value, -he, he);
      }
      z.prev = x;
    }
    function N() {
      if (r.value > Tt) {
        I(), setTimeout(() => k(e["onUpdate:show"], !1), Uc);
        return;
      }
      k(e["onUpdate:show"], !1);
    }
    function ee(K) {
      w.value && Fe(K);
    }
    function Q(K) {
      var x;
      (x = s.value) == null || x.prev(K);
    }
    function ae(K) {
      var x;
      (x = s.value) == null || x.next(K);
    }
    function Oe(K, x) {
      var ue;
      (ue = s.value) == null || ue.to(K, x);
    }
    function le(K) {
      K <= Tt ? I() : O(K);
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
      n: Lc,
      classes: l6,
      toNumber: j,
      handleTouchstart: E,
      handleTouchmove: P,
      handleTouchend: B,
      handleTouchcancel: A,
      close: N,
      prev: Q,
      next: ae,
      to: Oe,
      zoom: le
    };
  }
});
lh.render = f6;
var mt = lh, v6 = Object.defineProperty, p6 = Object.defineProperties, m6 = Object.getOwnPropertyDescriptors, Hc = Object.getOwnPropertySymbols, h6 = Object.prototype.hasOwnProperty, g6 = Object.prototype.propertyIsEnumerable, jc = (e, n, r) => n in e ? v6(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Et = (e, n) => {
  for (var r in n || (n = {})) h6.call(n, r) && jc(e, r, n[r]);
  if (Hc)
    for (var r of Hc(n)) g6.call(n, r) && jc(e, r, n[r]);
  return e;
}, Yc = (e, n) => p6(e, m6(n)), Or, Ao = {};
function b6(e = {}) {
  return an(e) ? Yc(Et({}, Ao), { images: [e] }) : He(e) ? Yc(Et({}, Ao), { images: e }) : Et(Et({}, Ao), e);
}
function Hr(e) {
  if (!tr()) return;
  Hr.close();
  const n = nn(b6(e));
  n.teleport = "body", Or = n;
  const { unmountInstance: r } = yo(mt, n, {
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
    Or = null, Ne().then(() => {
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
Hr.Component = mt;
se(mt);
se(mt, Hr);
ce(Hr, ih);
var AD = mt, Zo = Hr, sh = { index: [Number, String] }, uh = /* @__PURE__ */ Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function y6() {
  const { bindChildren: e, length: n, childProviders: r } = $n(uh);
  return {
    length: n,
    indexAnchors: r,
    bindIndexAnchors: e
  };
}
function w6() {
  const { parentProvider: e, index: n, bindParent: r } = kn(uh);
  return Yn(!!r, "IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: r
  };
}
var { name: k6, n: $6, classes: C6 } = te("index-anchor");
function S6(e, n) {
  return g(), Ce(ho(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: "anchorEl",
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode
  }, {
    default: pe(() => [R("div", Ye({ class: e.n() }, e.$attrs), [F(e.$slots, "default", {}, () => [Ae(fe(e.name), 1)])], 16)]),
    _: 3
  }, 8, [
    "offset-top",
    "z-index",
    "disabled",
    "css-mode"
  ]);
}
var dh = oe({
  name: k6,
  components: { VarSticky: po },
  inheritAttrs: !1,
  props: sh,
  setup(e) {
    const n = y(!1), r = T(() => e.index), o = y(null), { index: t, indexBar: a, bindIndexBar: i } = w6(), { active: l, sticky: s, cssMode: u, stickyOffsetTop: d, zIndex: c } = a;
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
      n: $6,
      classes: C6,
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
dh.render = S6;
var Pi = dh;
se(Pi);
ce(Pi, sh);
var ND = Pi, bs = Pi, ch = {
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
}, Wc = (e, n, r) => new Promise((o, t) => {
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
}), { name: O6, n: P6, classes: z6 } = te("index-bar"), T6 = ["onClick"];
function E6(e, n) {
  return g(), C("div", {
    ref: "barEl",
    class: p(e.n())
  }, [F(e.$slots, "default"), R("ul", {
    class: p(e.n("anchor-list")),
    style: Z({
      zIndex: e.toNumber(e.zIndex) + 2,
      display: e.hideList ? "none" : "block"
    })
  }, [(g(!0), C(De, null, qe(e.anchorNameList, (r) => (g(), C("li", {
    key: r,
    class: p(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
    style: Z({ color: e.active === r && e.highlightColor ? e.highlightColor : void 0 }),
    onClick: (o) => e.anchorClick({
      anchorName: r,
      manualCall: !0
    })
  }, [F(e.$slots, "anchor-name", { anchorName: r }, () => [Ae(fe(r), 1)])], 14, T6))), 128))], 6)], 2);
}
var fh = oe({
  name: O6,
  props: ch,
  setup(e) {
    const n = y(""), r = y(null), o = y([]), t = y(), a = T(() => e.sticky), i = T(() => e.stickyCssMode), l = T(() => on(e.stickyOffsetTop)), s = T(() => e.zIndex), { length: u, indexAnchors: d, bindIndexAnchors: c } = y6();
    let f = null, v = !1;
    const m = {
      active: t,
      sticky: a,
      cssMode: i,
      stickyOffsetTop: l,
      zIndex: s
    };
    me(() => u.value, () => Wc(null, null, function* () {
      yield On(), o.value = d.filter(({ name: I }) => I.value != null).map(({ name: I }) => I.value);
    })), wn(b), ha(z), mo(() => {
      v = !0, z();
    }), Vr(() => {
      !v || t.value === void 0 || (S({
        anchorName: t.value,
        options: { event: !1 }
      }), v = !1);
    }), c(m);
    function h(I, H) {
      const D = rn(I) ? I.name.value : I;
      D === t.value || D === void 0 || (t.value = D, H?.event !== !1 && k(e.onChange, D));
    }
    function w() {
      const { top: I } = tn(f), { top: H } = tn(r.value);
      return Dr(f) - I + H;
    }
    function $() {
      const I = Dr(f), H = f === window ? document.body.scrollHeight : f.scrollHeight, D = w();
      d.forEach((A, B) => {
        const E = I - A.getOffsetTop() + l.value - D, M = B === d.length - 1 ? H : d[B + 1].getOffsetTop() - A.getOffsetTop();
        A.setDisabled(!0), E >= 0 && E < M && n.value === "" && (A.setDisabled(!1), h(A));
      });
    }
    function S(I) {
      return Wc(this, arguments, function* ({ anchorName: H, manualCall: D = !1, options: A }) {
        if (D && k(e.onClick, H), H === t.value && !v) return;
        const B = d.find(({ name: L }) => H === L.value);
        if (!B) return;
        const E = w(), M = B.getOffsetTop() - l.value + E, U = wa(f);
        n.value = H, h(H, A), yield Lo(f, {
          left: U,
          top: M,
          animation: fp,
          duration: j(e.duration)
        }), yield On(), n.value = "";
      });
    }
    function b() {
      f = Ar(r.value), f.addEventListener("scroll", $);
    }
    function z() {
      f && f.removeEventListener("scroll", $);
    }
    function O(I, H) {
      Gr(() => S({
        anchorName: I,
        options: H
      }));
    }
    return {
      barEl: r,
      active: t,
      zIndex: s,
      anchorNameList: o,
      n: P6,
      classes: z6,
      toNumber: j,
      scrollTo: O,
      anchorClick: S
    };
  }
});
fh.render = E6;
var zi = fh;
se(zi);
ce(zi, ch);
var VD = zi, ys = zi, vh = {
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
}, { name: I6, n: B6, classes: D6 } = te("link");
function M6(e, n) {
  return g(), Ce(ho(e.tag), Ye(e.linkProps, {
    class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n(`--${e.type}`), [e.underline !== "none", e.n(`--underline-${e.underline}`)], [e.disabled, e.n("--disabled")], [e.isFocusing && !e.inMobile(), e.n("--focusing")]),
    style: {
      color: e.textColor,
      fontSize: e.toSizeUnit(e.textSize)
    },
    onClick: e.handleClick,
    onFocus: n[0] || (n[0] = (r) => e.isFocusing = !0),
    onBlur: n[1] || (n[1] = (r) => e.isFocusing = !1)
  }), {
    default: pe(() => [F(e.$slots, "default")]),
    _: 3
  }, 16, [
    "class",
    "style",
    "onClick"
  ]);
}
var ph = oe({
  name: I6,
  props: vh,
  setup(e) {
    const n = y(!1), r = T(() => {
      const { disabled: a, href: i, to: l } = e;
      return a ? "span" : i ? "a" : l ? "router-link" : "a";
    }), o = T(() => {
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
      n: B6,
      classes: D6,
      handleClick: t,
      toSizeUnit: ze
    };
  }
});
ph.render = M6;
var Ti = ph;
se(Ti);
ce(Ti, vh);
var RD = Ti, ws = Ti, mh = {
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
}, hh = /* @__PURE__ */ Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function A6() {
  const { bindChildren: e, childProviders: n, length: r } = $n(hh);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
var gh = /* @__PURE__ */ Symbol("TAB_ITEM_BIND_LIST_KEY");
function N6() {
  const { parentProvider: e, bindParent: n, index: r } = kn(hh);
  return Yn(!!n, "TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
function V6() {
  const { childProviders: e, bindChildren: n, length: r } = $n(gh);
  return {
    length: r,
    lists: e,
    bindLists: n
  };
}
function R6() {
  const { parentProvider: e, bindParent: n, index: r } = kn(gh);
  return {
    index: r,
    tabItem: e,
    bindTabItem: n
  };
}
var L6 = (e, n, r) => new Promise((o, t) => {
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
}), { name: F6, n: U6, classes: H6 } = te("list");
function j6(e, n) {
  const r = ne("var-loading"), o = We("ripple");
  return g(), C("div", {
    ref: "listEl",
    class: p(e.classes(e.n(), e.n("$--box")))
  }, [
    F(e.$slots, "default"),
    e.loading ? F(e.$slots, "loading", { key: 0 }, () => {
      var t;
      return [R("div", { class: p(e.n("loading")) }, [R("div", { class: p(e.n("loading-text")) }, fe((t = e.loadingText) != null ? t : (e.pt ? e.pt : e.t)("listLoadingText")), 3), G(r, {
        size: "mini",
        radius: 10
      })], 2)];
    }) : X("v-if", !0),
    e.finished ? F(e.$slots, "finished", { key: 1 }, () => {
      var t;
      return [R("div", { class: p(e.n("finished")) }, fe((t = e.finishedText) != null ? t : (e.pt ? e.pt : e.t)("listFinishedText")), 3)];
    }) : X("v-if", !0),
    e.error ? F(e.$slots, "error", { key: 2 }, () => {
      var t;
      return [Re((g(), C("div", {
        class: p(e.n("error")),
        onClick: n[0] || (n[0] = (...a) => e.load && e.load(...a))
      }, [Ae(fe((t = e.errorText) != null ? t : (e.pt ? e.pt : e.t)("listErrorText")), 1)], 2)), [[o]])];
    }) : X("v-if", !0),
    R("div", {
      ref: "detectorEl",
      class: p(e.n("detector"))
    }, null, 2)
  ], 2);
}
var bh = oe({
  name: F6,
  directives: { Ripple: cn },
  components: { VarLoading: fo },
  props: mh,
  setup(e) {
    const n = y(null), r = y(null), { tabItem: o, bindTabItem: t } = R6(), { t: a } = ir();
    let i;
    k(t, {}), o && me(() => o.current.value, d), me(() => [
      e.loading,
      e.error,
      e.finished
    ], d), wn(() => {
      i = Ar(n.value), i.addEventListener("scroll", d), e.immediateCheck && d();
    }), go(u);
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
      return L6(this, null, function* () {
        yield Ne(), !(e.loading || e.finished || e.error || o?.current.value === !1 || !s()) && l();
      });
    }
    return {
      listEl: n,
      detectorEl: r,
      pt: a,
      t: sn,
      isNumber: zn,
      load: l,
      check: d,
      n: U6,
      classes: H6
    };
  }
});
bh.render = j6;
var Ei = bh;
se(Ei);
ce(Ei, mh);
var LD = Ei, ks = Ei, Y6 = {
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
}, { name: W6, classes: K6, n: Kc } = te("loading-bar"), q6 = oe({
  name: W6,
  props: Y6,
  setup(e) {
    return () => G("div", {
      class: K6(Kc(), [e.error, Kc("--error")]),
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
}), Au = 200, yh, wh, kh, $h, Ii, qc, Ch = {}, vn = nn({
  value: 0,
  opacity: 0,
  error: !1
});
function X6(e) {
  Object.assign(vn, e), Ch = e;
}
var G6 = () => {
  Object.keys(Ch).forEach((e) => {
    vn[e] !== void 0 && (vn[e] = void 0);
  });
}, Sh = () => {
  qc || (qc = !0, yo(q6, vn));
}, Nu = () => {
  yh = window.setTimeout(() => {
    vn.transitionDuration = void 0, !(vn.value >= 95) && (vn.value += vn.value < 70 ? Math.round(5 * Math.random()) : Math.random(), Nu());
  }, 200);
}, Vu = () => {
  window.clearTimeout(yh), window.clearTimeout(Ii), window.clearTimeout(kh), window.clearTimeout(wh), window.clearTimeout($h);
}, Oh = () => {
  Vu(), vn.value = 100, Ii = window.setTimeout(() => {
    vn.opacity = 0, $h = window.setTimeout(() => {
      vn.error = !1;
    }, 250);
  }, Au + 100);
}, Z6 = () => {
  Vu(), vn.error = !1, vn.value = 0, vn.transitionDuration = 0, Sh(), Ii = window.setTimeout(() => {
    vn.opacity = 1;
  }, Au), Nu();
}, J6 = () => {
  var e;
  kh = window.setTimeout(Oh, (e = vn.finishDelay) != null ? e : 0);
}, Q6 = () => {
  Vu(), vn.error = !0, vn.value === 100 && (vn.value = 0, vn.transitionDuration = 0), Sh(), Ii = window.setTimeout(() => {
    vn.opacity = 1;
  }, Au), Nu(), wh = window.setTimeout(Oh, 300);
}, Ph = {
  start: Z6,
  finish: J6,
  error: Q6,
  setDefaultOptions: X6,
  resetDefaultOptions: G6
}, FD = Ph, $s = Ph, zh = {
  tag: {
    type: String,
    default: "div"
  },
  locale: {
    type: String,
    default: "zh-CN"
  },
  messages: { type: Object }
}, x6 = Object.defineProperty, _6 = Object.defineProperties, eO = Object.getOwnPropertyDescriptors, Xc = Object.getOwnPropertySymbols, nO = Object.prototype.hasOwnProperty, rO = Object.prototype.propertyIsEnumerable, Gc = (e, n, r) => n in e ? x6(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, oO = (e, n) => {
  for (var r in n || (n = {})) nO.call(n, r) && Gc(e, r, n[r]);
  if (Xc)
    for (var r of Xc(n)) rO.call(n, r) && Gc(e, r, n[r]);
  return e;
}, tO = (e, n) => _6(e, eO(n)), { name: aO, n: iO } = te("locale-provider"), Bi = oe({
  name: aO,
  props: zh,
  setup(e, { slots: n }) {
    const r = T(() => {
      var t;
      return Object.entries((t = e.messages) != null ? t : {}).reduce((a, [i, l]) => (a[i] = tO(oO({}, l), { lang: i }), a), {});
    });
    fy({ t: o });
    function o(t) {
      if (Ir(r.value, e.locale) && Ir(r.value[e.locale], t)) return r.value[e.locale][t];
    }
    return () => xo(e.tag, { class: iO() }, k(n.default));
  }
});
se(Bi);
ce(Bi, zh);
var UD = Bi, Cs = Bi, Th = {
  label: {},
  value: {},
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  option: Object
}, Eh = /* @__PURE__ */ Symbol("SELECT_BIND_OPTION_KEY");
function lO() {
  const { length: e, childProviders: n, bindChildren: r } = $n(Eh);
  return {
    length: e,
    options: n,
    bindOptions: r
  };
}
function sO() {
  const { index: e, parentProvider: n, bindParent: r } = kn(Eh);
  return Yn(!!r, "Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: r
  };
}
var { name: uO, n: dO, classes: cO } = te("option"), fO = ["tabindex"];
function vO(e, n) {
  const r = ne("var-checkbox"), o = ne("maybe-v-node"), t = ne("var-hover-overlay"), a = We("ripple"), i = We("hover");
  return Re((g(), C("div", {
    ref: "root",
    class: p(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")])),
    style: Z({ color: e.optionSelected ? e.focusColor : void 0 }),
    tabindex: e.disabled ? void 0 : "-1",
    onFocus: n[2] || (n[2] = (l) => e.isFocusing = !0),
    onBlur: n[3] || (n[3] = (l) => e.isFocusing = !1),
    onClick: n[4] || (n[4] = (...l) => e.handleClick && e.handleClick(...l))
  }, [
    R("div", {
      class: p(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
      style: Z({ background: e.optionSelected ? e.focusColor : void 0 })
    }, null, 6),
    e.multiple ? (g(), Ce(r, {
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
    ])) : X("v-if", !0),
    F(e.$slots, "default", { selected: e.optionSelected }, () => [R("div", { class: p(e.classes(e.n("text"), e.n("$--ellipsis"))) }, [G(o, { is: e.labelVNode }, null, 8, ["is"])], 2)]),
    G(t, {
      hovering: e.hovering && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 46, fO)), [
    [xn, e.visible],
    [a, { disabled: e.disabled || !e.ripple }],
    [
      i,
      e.handleHovering,
      "desktop"
    ]
  ]);
}
var Ih = oe({
  name: uO,
  directives: {
    Ripple: cn,
    Hover: Tn
  },
  components: {
    VarCheckbox: io,
    VarHoverOverlay: Mn,
    MaybeVNode: tt
  },
  props: Th,
  setup(e) {
    const n = y(), r = y(!1), o = y(!1), t = T(() => {
      var P;
      return (P = e.option) != null ? P : {
        label: e.label,
        value: e.value,
        disabled: e.disabled
      };
    }), a = T(() => o.value), i = T(() => e.value), l = T(() => e.disabled), s = T(() => e.ripple), { select: u, bindSelect: d } = sO(), { pattern: c, showMenu: f, filterable: v, multiple: m, focusColor: h, onSelect: w, computeLabel: $, filter: S } = u, { hovering: b, handleHovering: z } = Wn(), O = T(() => {
      var P;
      return mn(e.label) ? e.label((P = e.option) != null ? P : {
        label: e.label,
        value: e.value,
        disabled: e.disabled
      }, o.value) : e.label;
    }), I = y(!0), H = T(() => !v.value || !c.value ? !0 : S(c.value, t.value)), D = T(() => f.value ? H.value : I.value), A = {
      label: O,
      value: i,
      disabled: l,
      ripple: s,
      selected: a,
      sync: L
    };
    me([() => e.label, () => e.value], $), me(() => [f.value, H.value], () => {
      f.value && (I.value = H.value);
    }, { immediate: !0 }), d(A), je(() => window, "keydown", E), je(() => window, "keyup", M);
    function B() {
      e.disabled || U();
    }
    function E(P) {
      r.value && ((P.key === " " || P.key === "Enter") && Fe(P), P.key === "Enter" && n.value.click());
    }
    function M(P) {
      r.value && P.key === " " && (Fe(P), n.value.click());
    }
    function U() {
      m.value && (o.value = !o.value), w(A);
    }
    function L(P) {
      o.value = P;
    }
    return {
      root: n,
      optionSelected: o,
      visible: D,
      multiple: m,
      focusColor: h,
      hovering: b,
      isFocusing: r,
      labelVNode: O,
      n: dO,
      classes: cO,
      handleHovering: z,
      handleClick: B,
      handleSelect: U
    };
  }
});
Ih.render = vO;
var Di = Ih;
se(Di);
ce(Di, Th);
var HD = Di, va = Di, pO = Object.defineProperty, mO = Object.defineProperties, hO = Object.getOwnPropertyDescriptors, Zc = Object.getOwnPropertySymbols, gO = Object.prototype.hasOwnProperty, bO = Object.prototype.propertyIsEnumerable, Jc = (e, n, r) => n in e ? pO(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, yO = (e, n) => {
  for (var r in n || (n = {})) gO.call(n, r) && Jc(e, r, n[r]);
  if (Zc)
    for (var r of Zc(n)) bO.call(n, r) && Jc(e, r, n[r]);
  return e;
}, wO = (e, n) => mO(e, hO(n)), Bh = wO(yO({
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
}, Me(st, [
  "textColor",
  "focusColor",
  "blurColor"
])), { variant: {
  type: String,
  default: "outlined"
} }), { name: kO, n: Qc, classes: $O } = te("otp-input"), CO = ["data-index"];
function SO(e, n) {
  const r = ne("var-input"), o = ne("var-form-details");
  return g(), C("div", {
    ref: "rootEl",
    class: p(e.classes(e.n(), e.n("$--box"), e.n(`--align-${e.align}`))),
    style: Z({
      "--otp-input-gutter": e.gutterStyle,
      "--otp-input-cell-height": e.cellHeightStyle,
      "--otp-input-cell-max-width": e.cellMaxWidthStyle
    }),
    onClick: n[1] || (n[1] = (...t) => e.handleClick && e.handleClick(...t)),
    onKeydown: n[2] || (n[2] = (...t) => e.handleKeydown && e.handleKeydown(...t)),
    onPaste: n[3] || (n[3] = (...t) => e.handlePaste && e.handlePaste(...t))
  }, [R("div", { class: p(e.n("cells")) }, [(g(!0), C(De, null, qe(e.cellIndexes, (t, a) => (g(), C(De, { key: a }, [R("div", {
    class: p(e.n("cell")),
    "data-index": a
  }, [G(r, {
    ref_for: !0,
    ref: (i) => e.setInputRef(i, a),
    "model-value": e.getDisplayChar(a),
    type: e.nativeInputType,
    maxlength: 1,
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
  ])], 10, CO), e.shouldRenderSeparator(a) ? (g(), C("div", {
    key: 0,
    class: p(e.n("separator"))
  }, [F(e.$slots, "separator", { index: a })], 2)) : X("v-if", !0)], 64))), 128))], 2), G(o, {
    class: p(e.n("details")),
    "var-otp-input-cover": "",
    "error-message": e.errorMessage
  }, null, 8, ["class", "error-message"])], 38);
}
var Dh = oe({
  name: kO,
  components: {
    VarFormDetails: En,
    VarInput: ut
  },
  props: Bh,
  setup(e) {
    const n = sb(), r = y(null), o = y([]), t = y(-1), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = Rn(), { bindForm: u, form: d } = Ln(), c = T(() => j(e.length)), f = T(() => {
      var q;
      return (q = D(e.maskSymbol)[0]) != null ? q : "•";
    }), v = T(() => A(e.modelValue)), m = T(() => Array.from({ length: c.value })), h = T(() => ze(e.gutter)), w = T(() => ze(e.cellHeight)), $ = T(() => ze(e.cellMaxWidth)), S = T(() => e.type === "digit" ? "numeric" : void 0), b = T(() => e.type === "digit" ? "tel" : "text"), z = T(() => {
      var q;
      return (q = d?.disabled.value) != null ? q : !1;
    }), O = T(() => {
      var q;
      return (q = d?.readonly.value) != null ? q : !1;
    });
    let I = null, H = !1;
    u?.({
      validate: le,
      resetValidation: s,
      reset: K
    }), wn(() => {
      e.autofocus && ae();
    });
    function D(q) {
      return Array.from(q);
    }
    function A(q) {
      return B(q).slice(0, c.value);
    }
    function B(q) {
      switch (e.type) {
        case "digit":
          return q.replace(/\D+/g, "");
        case "alphanumeric":
          return D(q).filter((Y) => /[A-Za-z0-9]/.test(Y)).join("");
        default:
          return q;
      }
    }
    function E() {
      return D(v.value);
    }
    function M(q) {
      var Y;
      const _ = (Y = E()[q]) != null ? Y : "";
      return _ ? e.mask ? f.value : _ : "";
    }
    function U(q, Y) {
      o.value[Y] = q && "$" in q ? q : null;
    }
    function L(q) {
      return q >= c.value - 1 || !n.separator ? !1 : Ca(n.separator({ index: q })).length > 0;
    }
    function P(q, Y = v.value) {
      Ne(() => {
        i(e.validateTrigger, q, e.rules, Y);
      });
    }
    function N(q) {
      D(q).length === c.value && (k(e.onComplete, q), P("onComplete", q));
    }
    function ee(q, Y) {
      if (q === v.value) {
        x(Y);
        return;
      }
      k(e["onUpdate:modelValue"], q), k(e.onInput, q), P("onInput", q), N(q);
    }
    function Q(q) {
      var Y, _;
      const be = un(q, 0, c.value - 1);
      (_ = (Y = o.value[be]) == null ? void 0 : Y.focus) == null || _.call(Y);
    }
    function ae(q) {
      Q(q ?? Math.min(E().length, c.value - 1));
    }
    function Oe() {
      o.value.forEach((q) => {
        var Y;
        (Y = q?.blur) == null || Y.call(q);
      });
    }
    function le() {
      return l(e.rules, v.value);
    }
    function K() {
      v.value !== "" && k(e["onUpdate:modelValue"], ""), s();
    }
    function x(q) {
      var Y;
      const _ = (Y = o.value[q]) == null ? void 0 : Y.el;
      _ && (_.value = M(q));
    }
    function ue() {
      m.value.forEach((q, Y) => {
        x(Y);
      });
    }
    function he(q) {
      I = q, !H && (H = !0, Ne(() => {
        H = !1, I != null && (t.value = I, Q(I), I = null);
      }));
    }
    function W(q, Y) {
      const _ = E(), be = un(q, 0, _.length), Te = [..._], gn = Y.slice(0, c.value - be);
      gn.forEach((fn, qn) => {
        Te[be + qn] = fn;
      }), ee(Te.join("").slice(0, c.value), be), he(un(be + gn.length, 0, c.value - 1));
    }
    function ie(q, Y = un(q, 0, c.value - 1)) {
      const _ = E();
      _.splice(q, 1), ee(_.join(""), q), he(Y);
    }
    function Pe(q) {
      const Y = E();
      if (!Y[q]) {
        if (q <= 0) {
          ue();
          return;
        }
        ie(q - 1, q - 1);
        return;
      }
      ie(q, q !== Y.length - 1 && q > 0 ? q - 1 : un(q, 0, c.value - 1));
    }
    function Le(q) {
      e.disabled || z.value || (k(e.onClick, q), P("onClick"));
    }
    function Ke(q) {
      const Y = E();
      t.value = q, Y[q] && Ne(() => {
        var _, be;
        (be = (_ = o.value[q]) == null ? void 0 : _.select) == null || be.call(_);
      });
    }
    function Ve(q) {
      var Y;
      const _ = q.relatedTarget;
      (!_ || !((Y = r.value) != null && Y.contains(_))) && (t.value = -1);
    }
    function ln(q, Y) {
      const _ = D(B(Y)), be = E(), Te = q > be.length;
      if (_.length === 0) {
        if (Te) {
          he(be.length), x(q);
          return;
        }
        Y === "" ? ie(q) : x(q);
        return;
      }
      if (Te) {
        W(be.length, _);
        return;
      }
      W(q, _);
    }
    function Qe(q) {
      var Y, _;
      if (!e.allowPaste || z.value || O.value || e.disabled || e.readonly) return;
      const be = (_ = (Y = q.clipboardData) == null ? void 0 : Y.getData("text")) != null ? _ : "";
      if (!be) return;
      q.preventDefault();
      const Te = B(e.pasteTransform ? e.pasteTransform(be) : be);
      if (k(e.onPaste, Te, q), P("onPaste", Te), !Te) {
        ue();
        return;
      }
      W(0, D(Te));
    }
    function ge(q) {
      if (z.value || O.value || e.disabled || e.readonly) return;
      const Y = q.target, _ = Y?.closest(`.${Qc("cell")}`), be = _?.dataset.index;
      if (be == null) return;
      const Te = Number(be);
      if (q.key === "Backspace" && E().length > 0) {
        q.preventDefault(), Pe(Te);
        return;
      }
      if (q.key === "ArrowLeft" && Te > 0) {
        q.preventDefault(), Q(Te - 1);
        return;
      }
      if (q.key === "ArrowRight" && Te < c.value - 1) {
        q.preventDefault(), Q(Te + 1);
        return;
      }
    }
    return {
      rootEl: r,
      activeIndex: t,
      errorMessage: a,
      formDisabled: z,
      formReadonly: O,
      cellIndexes: m,
      gutterStyle: h,
      cellHeightStyle: w,
      cellMaxWidthStyle: $,
      resolvedInputmode: S,
      nativeInputType: b,
      align: e.align,
      n: Qc,
      classes: $O,
      setInputRef: U,
      getDisplayChar: M,
      shouldRenderSeparator: L,
      handleClick: Le,
      handleFocus: Ke,
      handleBlur: Ve,
      handleCellInput: ln,
      handleKeydown: ge,
      handlePaste: Qe,
      focus: ae,
      blur: Oe,
      reset: K,
      validate: le,
      resetValidation: s
    };
  }
});
Dh.render = SO;
var Mi = Dh;
se(Mi);
ce(Mi, Bh);
var jD = Mi, Ss = Mi, Mh = {
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
}, { name: OO, n: It } = te("overlay"), Ai = oe({
  name: OO,
  inheritAttrs: !1,
  props: Mh,
  setup(e, { slots: n, attrs: r }) {
    const { zIndex: o } = it(() => e.show, 3), { onStackTop: t } = pu(() => e.show, o), { disabled: a } = xr();
    at(() => e.show, () => e.lockScroll), je(() => window, "keydown", i);
    function i(d) {
      !t() || d.key !== "Escape" || !e.show || (k(e.onKeyEscape), e.closeOnKeyEscape && (Fe(d), k(e["onUpdate:show"], !1)));
    }
    function l() {
      k(e.onClick), k(e["onUpdate:show"], !1);
    }
    function s() {
      return G("div", Ye({
        class: It(),
        style: { zIndex: o.value - 2 }
      }, r), [G("div", {
        class: It("overlay"),
        style: { zIndex: o.value - 1 },
        onClick: l
      }, null), G("div", {
        class: It("content"),
        style: { zIndex: o.value }
      }, [k(n.default)])]);
    }
    function u() {
      return G(en, { name: It("--fade") }, { default: () => [e.show && s()] });
    }
    return () => {
      const { teleport: d } = e;
      return d ? G(cr, {
        to: d,
        disabled: a.value
      }, { default: () => [u()] }) : u();
    };
  }
});
se(Ai);
ce(Ai, Mh);
var YD = Ai, Os = Ai, Ah = {
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
}, { name: PO, n: zO, classes: TO } = te("pagination"), EO = ["item-mode", "onClick"];
function IO(e, n) {
  const r = ne("var-icon"), o = ne("var-input"), t = ne("var-menu-option"), a = ne("var-menu-select"), i = We("ripple");
  return g(), C("ul", { class: p(e.n()) }, [
    Re((g(), C("li", {
      class: p(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [
        e.simple,
        e.n("item--simple"),
        e.formatElevation(e.elevation, 2)
      ])),
      onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
    }, [F(e.$slots, "prev", {}, () => [G(r, { name: "chevron-left" })])], 2)), [[i, { disabled: e.current <= 1 || e.disabled }]]),
    e.simple ? (g(), C("li", {
      key: 0,
      class: p(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
    }, [G(o, {
      modelValue: e.simpleCurrentValue,
      "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleCurrentValue = l),
      "var-pagination-cover": "",
      variant: "standard",
      hint: !1,
      disabled: e.disabled,
      onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleCurrentValue, l)),
      onKeydown: n[3] || (n[3] = Hu((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
    }, null, 8, ["modelValue", "disabled"]), R("span", null, [Ae(" / " + fe(e.pageCount) + " ", 1), R("div", { class: p(e.n("simple-line")) }, null, 2)])], 2)) : (g(!0), C(De, { key: 1 }, qe(e.pageList, (l, s) => Re((g(), C("li", {
      key: s,
      "item-mode": e.getMode(l, s),
      class: p(e.classes(e.n("item"), e.formatElevation(e.elevation, 2), [l === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(l, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [l === e.current && e.disabled, e.n("item--disabled--active")])),
      onClick: (u) => e.clickItem(l, s)
    }, [Ae(fe(l), 1)], 10, EO)), [[i, { disabled: e.disabled }]])), 128)),
    Re((g(), C("li", {
      class: p(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [
        e.simple,
        e.n("item--simple"),
        e.formatElevation(e.elevation, 2)
      ])),
      onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
    }, [F(e.$slots, "next", {}, () => [G(r, { name: "chevron-right" })])], 2)), [[i, { disabled: e.current >= e.pageCount || e.disabled }]]),
    e.showSizeChanger ? (g(), Ce(a, {
      key: 2,
      modelValue: e.size,
      "onUpdate:modelValue": n[5] || (n[5] = (l) => e.size = l),
      placement: "cover-top",
      disabled: e.disabled
    }, {
      options: pe(() => [(g(!0), C(De, null, qe(e.sizeOption, (l, s) => (g(), Ce(t, {
        key: s,
        value: l,
        onClick: e.clickSize
      }, {
        default: pe(() => [Ae(fe(l) + fe((e.pt ? e.pt : e.t)("paginationItem")) + " / " + fe((e.pt ? e.pt : e.t)("paginationPage")), 1)]),
        _: 2
      }, 1032, ["value", "onClick"]))), 128))]),
      default: pe(() => [R("li", { class: p(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")])) }, [R("div", { class: p(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])) }, [R("span", null, fe(e.size) + fe((e.pt ? e.pt : e.t)("paginationItem")) + " / " + fe((e.pt ? e.pt : e.t)("paginationPage")), 1), G(r, {
        class: p(e.n("size--open-icon")),
        "var-pagination-cover": "",
        name: "menu-down"
      }, null, 8, ["class"])], 2)], 2)]),
      _: 1
    }, 8, ["modelValue", "disabled"])) : X("v-if", !0),
    e.showQuickJumper && !e.simple ? (g(), C("li", {
      key: 3,
      class: p(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
    }, [Ae(fe((e.pt ? e.pt : e.t)("paginationJump")) + " ", 1), G(o, {
      modelValue: e.quickJumperValue,
      "onUpdate:modelValue": n[6] || (n[6] = (l) => e.quickJumperValue = l),
      disabled: e.disabled,
      hint: !1,
      variant: "standard",
      "var-pagination-cover": "",
      onBlur: n[7] || (n[7] = (l) => e.setPage("quick", e.quickJumperValue, l)),
      onKeydown: n[8] || (n[8] = Hu((l) => e.setPage("quick", e.quickJumperValue, l), ["enter"]))
    }, null, 8, ["modelValue", "disabled"])], 2)) : X("v-if", !0),
    e.totalText ? (g(), C("li", {
      key: 4,
      class: p(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
    }, fe(e.totalText), 3)) : X("v-if", !0)
  ], 2);
}
var Nh = oe({
  name: PO,
  components: {
    VarMenuSelect: Wo,
    VarMenuOption: lo,
    VarIcon: Je,
    VarInput: Uo
  },
  directives: { Ripple: cn },
  props: Ah,
  setup(e) {
    const n = y(""), r = y("1"), o = y(!1), t = y(!1), a = y(j(e.current) || 1), i = y(j(e.size) || 10), l = y([]), s = T(() => Math.ceil(e.maxPagerCount / 2)), u = T(() => Math.ceil(j(e.total) / j(i.value))), d = T(() => [i.value * (a.value - 1) + 1, Math.min(i.value * a.value, j(e.total))]), c = T(() => e.showTotal ? e.showTotal(j(e.total), d.value) : ""), { t: f } = ir();
    me([() => e.current, () => e.size], ([b, z]) => {
      a.value = j(b) || 1, i.value = j(z || 10);
    }), me([
      a,
      i,
      u
    ], ([b, z, O], [I, H]) => {
      let D = [];
      const { maxPagerCount: A, total: B, onChange: E } = e, M = Math.ceil(j(B) / j(H)), U = O - (A - s.value) - 1;
      if (r.value = `${b}`, O - 2 > A) {
        if (I === void 0 || O !== M) for (let L = 2; L < A + 2; L++) D.push(L);
        if (b <= A && b < U) {
          D = [];
          for (let L = 1; L < A + 1; L++) D.push(L + 1);
          o.value = !0, t.value = !1;
        }
        if (b > A && b < U) {
          D = [];
          for (let L = 1; L < A + 1; L++) D.push(b + L - s.value);
          o.value = b === 2 && A === 1, t.value = !1;
        }
        if (b >= U) {
          D = [];
          for (let L = 1; L < A + 1; L++) D.push(O - (A - L) - 1);
          o.value = !1, t.value = !0;
        }
        D = [
          1,
          "...",
          ...D,
          "...",
          O
        ];
      } else for (let L = 1; L <= O; L++) D.push(L);
      l.value = D, I != null && O > 0 && k(E, b, z), k(e["onUpdate:current"], b), k(e["onUpdate:size"], z);
    }, { immediate: !0 });
    function v(b, z) {
      return zn(b) ? !1 : z === 1 ? o.value : t.value;
    }
    function m(b, z) {
      return zn(b) ? "basic" : z === 1 ? "head" : "tail";
    }
    function h(b, z) {
      if (!(b === a.value || e.disabled)) {
        if (b === "...") {
          a.value = z === 1 ? Math.max(a.value - e.maxPagerCount, 1) : Math.min(a.value + e.maxPagerCount, u.value);
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
    function S(b, z, O) {
      O.target.blur();
      const I = $(j(z));
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
      t: sn,
      n: zO,
      classes: TO,
      getMode: m,
      isHideEllipsis: v,
      clickItem: h,
      clickSize: w,
      setPage: S,
      toNumber: j,
      formatElevation: hn
    };
  }
});
Nh.render = IO;
var Ni = Nh;
se(Ni);
ce(Ni, Ah);
var WD = Ni, Ps = Ni, Vh = {
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
  surface: String,
  hoverable: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: V()
}, { name: BO, n: DO, classes: MO } = te("paper");
function AO(e, n) {
  const r = ne("var-hover-overlay"), o = We("ripple"), t = We("hover");
  return Re((g(), C("div", {
    class: p(e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 2), [e.onClick || !e.normalizedHoverable.disabled, e.n("--cursor")], [e.round, e.n("--round")], [e.surfaceLow, e.n("--surface-low")], [e.inline, e.n("$--inline-flex")])),
    style: Z({
      width: e.toSizeUnit(e.width),
      height: e.toSizeUnit(e.height),
      "border-radius": e.toSizeUnit(e.radius)
    }),
    onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
  }, [F(e.$slots, "default"), G(r, {
    hovering: e.normalizedHoverable.disabled ? !1 : e.hovering,
    color: e.normalizedHoverable.color
  }, null, 8, ["hovering", "color"])], 6)), [[o, {
    disabled: e.normalizedRipple.disabled,
    color: e.normalizedRipple.color
  }], [
    t,
    e.handleHovering,
    "desktop"
  ]]);
}
var Rh = oe({
  name: BO,
  directives: {
    Ripple: cn,
    Hover: Tn
  },
  components: { VarHoverOverlay: Mn },
  props: Vh,
  setup(e) {
    const n = T(() => e.surface === "low"), { hovering: r, handleHovering: o } = Wn(), t = T(() => i(e.ripple)), a = T(() => l(e.hoverable));
    function i(u) {
      return rn(u) ? {
        disabled: !!u.disabled,
        color: u.color
      } : {
        disabled: !u,
        color: void 0
      };
    }
    function l(u) {
      return rn(u) ? {
        disabled: !!u.disabled,
        color: u.color
      } : {
        disabled: !u,
        color: void 0
      };
    }
    function s(u) {
      k(e.onClick, u);
    }
    return {
      n: DO,
      classes: MO,
      formatElevation: hn,
      surfaceLow: n,
      normalizedRipple: t,
      normalizedHoverable: a,
      hovering: r,
      handleHovering: o,
      toSizeUnit: ze,
      handleClick: s
    };
  }
});
Rh.render = AO;
var Vi = Rh;
se(Vi);
ce(Vi, Vh);
var KD = Vi, zs = Vi, NO = Object.defineProperty, xc = Object.getOwnPropertySymbols, VO = Object.prototype.hasOwnProperty, RO = Object.prototype.propertyIsEnumerable, _c = (e, n, r) => n in e ? NO(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, LO = (e, n) => {
  for (var r in n || (n = {})) VO.call(n, r) && _c(e, r, n[r]);
  if (xc)
    for (var r of xc(n)) RO.call(n, r) && _c(e, r, n[r]);
  return e;
}, Lh = LO({
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
}, Me(wo, [
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
])), { name: FO, n: UO, classes: HO } = te("picker"), ef = 300, jO = 15, nf = 200, YO = 1e3, rf = 0, WO = [
  "onTouchstartPassive",
  "onTouchmove",
  "onTouchend"
], KO = ["onTransitionend"], qO = ["onClick"];
function XO(e, n) {
  const r = ne("var-button");
  return g(), Ce(ho(e.dynamic ? e.n("$-popup") : e.Transition), Ye(e.dynamic ? {
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
    default: pe(() => [R("div", Ye({ class: e.n() }, e.$attrs), [e.toolbar ? (g(), C("div", {
      key: 0,
      class: p(e.n("toolbar"))
    }, [
      F(e.$slots, "cancel", {}, () => [G(r, {
        class: p(e.n("cancel-button")),
        "var-picker-cover": "",
        text: "",
        "text-color": e.cancelButtonTextColor,
        onClick: e.cancel
      }, {
        default: pe(() => {
          var o;
          return [Ae(fe((o = e.cancelButtonText) != null ? o : (e.pt ? e.pt : e.t)("pickerCancelButtonText")), 1)];
        }),
        _: 1
      }, 8, [
        "class",
        "text-color",
        "onClick"
      ])]),
      F(e.$slots, "title", {}, () => {
        var o;
        return [R("div", { class: p(e.n("title")) }, fe((o = e.title) != null ? o : (e.pt ? e.pt : e.t)("pickerTitle")), 3)];
      }),
      F(e.$slots, "confirm", {}, () => [G(r, {
        class: p(e.n("confirm-button")),
        text: "",
        "var-picker-cover": "",
        "text-color": e.confirmButtonTextColor,
        onClick: e.confirm
      }, {
        default: pe(() => {
          var o;
          return [Ae(fe((o = e.confirmButtonText) != null ? o : (e.pt ? e.pt : e.t)("pickerConfirmButtonText")), 1)];
        }),
        _: 1
      }, 8, [
        "class",
        "text-color",
        "onClick"
      ])])
    ], 2)) : X("v-if", !0), R("div", {
      class: p(e.n("columns")),
      style: Z({ height: `${e.columnHeight}px` })
    }, [
      (g(!0), C(De, null, qe(e.scrollColumns, (o) => (g(), C("div", {
        key: o.id,
        class: p(e.n("column")),
        onTouchstartPassive: (t) => e.handleTouchstart(t, o),
        onTouchmove: jn((t) => e.handleTouchmove(t, o), ["prevent"]),
        onTouchend: (t) => e.handleTouchend(o)
      }, [R("div", {
        ref_for: !0,
        ref: (t) => e.setScrollEl(t, o),
        class: p(e.n("scroller")),
        style: Z({
          transform: `translateY(${o.translate}px)`,
          transitionDuration: `${o.duration}ms`,
          transitionProperty: o.duration ? "transform" : "none"
        }),
        onTransitionend: (t) => e.handleTransitionend(o)
      }, [(g(!0), C(De, null, qe(o.column, (t, a) => (g(), C("div", {
        key: e.getValue(t),
        class: p(e.classes(e.n("option"), t.className)),
        style: Z({ height: `${e.optionHeight}px` }),
        onClick: (i) => e.handleClick(o, a)
      }, [R("div", { class: p(e.classes(e.n("text"), t.textClassName)) }, fe(t[e.getOptionKey("text")]), 3)], 14, qO))), 128))], 46, KO)], 42, WO))), 128)),
      R("div", {
        class: p(e.n("picked")),
        style: Z({
          top: `${e.center}px`,
          height: `${e.optionHeight}px`
        })
      }, null, 6),
      R("div", {
        class: p(e.n("mask")),
        style: Z({ backgroundSize: `100% ${(e.columnHeight - e.optionHeight) / 2}px` })
      }, null, 6)
    ], 6)], 16)]),
    _: 3
  }, 16);
}
var Fh = oe({
  name: FO,
  components: {
    VarButton: An,
    VarPopup: Mr
  },
  inheritAttrs: !1,
  props: Lh,
  setup(e) {
    const n = Pn(e, "modelValue"), r = y([]), o = T(() => j(e.columnsCount)), t = T(() => on(e.optionHeight)), a = T(() => on(e.optionCount)), i = T(() => a.value * t.value / 2 - t.value / 2), l = T(() => a.value * t.value), { prevY: s, moveY: u, dragging: d, startTouch: c, moveTouch: f, endTouch: v } = bo(), { t: m } = ir();
    let h = [];
    H(), me(() => e.columns, H, { deep: !0 }), me(() => n.value, H);
    function w(W) {
      return {
        text: e.textKey,
        value: e.valueKey,
        children: e.childrenKey
      }[W];
    }
    function $(W) {
      var ie;
      return (ie = W[w("value")]) != null ? ie : W[w("text")];
    }
    function S(W) {
      h = [...W];
    }
    function b(W) {
      return (e.columnsCount != null ? W.slice(0, o.value) : W).map((ie, Pe) => {
        const Le = {
          id: rf++,
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
        }, Ke = n.value[Pe], Ve = Le.column.findIndex((ln) => Ke === $(ln));
        return Le.index = Ve === -1 ? 0 : Ve, L(Le), Le;
      });
    }
    function z(W) {
      const ie = [];
      return O(ie, W), ie;
    }
    function O(W, ie, Pe = !0, Le = 1) {
      var Ke;
      if (ie.length && (e.columnsCount == null || Le <= o.value)) {
        const Ve = {
          id: rf++,
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
        if (W.push(Ve), Pe) {
          const ln = n.value[W.length - 1], Qe = ie.findIndex((ge) => ln === $(ge));
          Ve.index = Qe === -1 ? 0 : Qe;
        }
        L(Ve), O(W, (Ke = Ve.column[Ve.index][w("children")]) != null ? Ke : [], Pe, Le + 1);
      }
    }
    function I(W) {
      var ie;
      r.value.splice(r.value.indexOf(W) + 1), O(r.value, (ie = W.column[W.index][w("children")]) != null ? ie : [], !1, r.value.length + 1);
    }
    function H() {
      r.value = e.cascade ? z(e.columns) : b(e.columns);
      const { indexes: W } = U();
      S(W);
    }
    function D(W, ie) {
      ie.scrollEl = W;
    }
    function A(W) {
      k(e["onUpdate:show"], W);
    }
    function B(W) {
      const ie = i.value - W.column.length * t.value, Pe = t.value + i.value;
      W.translate = un(W.translate, ie, Pe);
    }
    function E(W, ie) {
      return Nf(Math.round((i.value - ie) / t.value), W.column);
    }
    function M(W) {
      return W.translate = i.value - W.index * t.value, W.translate;
    }
    function U() {
      const W = [], ie = [], Pe = [];
      return r.value.forEach(({ column: Le, index: Ke }) => {
        const Ve = Le[Ke];
        W.push($(Ve)), ie.push(Ke), Pe.push(Ve);
      }), {
        values: W,
        indexes: ie,
        options: Pe
      };
    }
    function L(W, ie = 0) {
      M(W), W.duration = ie;
    }
    function P(W, ie, Pe) {
      W.translate += Math.abs(ie / Pe) / 3e-3 * (ie < 0 ? -1 : 1);
    }
    function N(W, ie) {
      d.value || (W.index = ie, L(W, nf));
    }
    function ee(W, ie) {
      ie.touching = !0, ie.translate = fl(ie.scrollEl), c(W);
    }
    function Q(W, ie) {
      if (!ie.touching) return;
      f(W), ie.scrolling = !1, ie.duration = 0, ie.prevY = s.value, ie.translate += u.value, B(ie);
      const Pe = performance.now();
      Pe - ie.momentumTime > ef && (ie.momentumTime = Pe, ie.momentumPrevY = ie.translate);
    }
    function ae(W) {
      v(), W.touching = !1, W.prevY = 0;
      const ie = W.translate - W.momentumPrevY, Pe = performance.now() - W.momentumTime, Le = Math.abs(ie) >= jO && Pe <= ef, Ke = W.translate;
      Le && P(W, ie, Pe), W.index = E(W, W.translate), L(W, Le ? YO : nf), W.scrolling = W.translate !== Ke, W.scrolling || K(W);
    }
    function Oe(W) {
      W.scrolling = !1, K(W);
    }
    function le() {
      const { indexes: W } = U();
      return W.every((ie, Pe) => ie === h[Pe]);
    }
    function K(W) {
      const { onChange: ie, cascade: Pe } = e;
      if (le()) return;
      Pe && I(W);
      const Le = r.value.some((ge) => ge.scrolling), Ke = r.value.some((ge) => ge.touching);
      if (Le || Ke) return;
      const { values: Ve, indexes: ln, options: Qe } = U();
      S(ln), k(ie, Ve, ln, Qe), n.value = Ve;
    }
    function x() {
      if (e.cascade) {
        const W = r.value.find((ie) => ie.scrolling);
        W && (W.index = E(W, fl(W.scrollEl)), W.scrolling = !1, L(W), I(W));
      } else r.value.forEach((W) => {
        W.index = E(W, fl(W.scrollEl)), L(W);
      });
    }
    function ue() {
      x();
      const { values: W, indexes: ie, options: Pe } = U();
      S(ie), k(e.onConfirm, W, ie, Pe);
    }
    function he() {
      x();
      const { values: W, indexes: ie, options: Pe } = U();
      S(ie), k(e.onCancel, W, ie, Pe);
    }
    return {
      optionHeight: t,
      optionCount: a,
      scrollColumns: r,
      columnHeight: l,
      center: i,
      Transition: en,
      pt: m,
      t: sn,
      n: UO,
      classes: HO,
      setScrollEl: D,
      getOptionKey: w,
      getValue: $,
      handlePopupUpdateShow: A,
      handleTouchstart: ee,
      handleTouchmove: Q,
      handleTouchend: ae,
      handleTransitionend: Oe,
      confirm: ue,
      cancel: he,
      handleClick: N
    };
  }
});
Fh.render = XO;
var ht = Fh, ao;
function $o(e) {
  return new Promise((n) => {
    $o.close();
    const r = nn(He(e) ? { columns: e } : e);
    r.dynamic = !0, r.teleport = "body", ao = r;
    function o() {
      ao === r && (ao = null);
    }
    const { unmountInstance: t } = yo(ht, r, {
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
  ao = null, Ne().then(() => {
    e.show = !1;
  });
};
$o.Component = ht;
se(ht);
se(ht, $o);
ce($o, Lh);
var qD = ht, Ts = $o, Uh = {
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
}, no = 100, Bt = 0, vr = 20, of = 2 * Math.PI * vr, { name: GO, n: ZO, classes: JO } = te("progress"), QO = ["aria-valuenow"], xO = ["viewBox"], _O = { key: 0 }, eP = ["id"], nP = ["offset", "stop-color"], rP = [
  "d",
  "stroke-width",
  "stroke-dasharray"
], oP = [
  "d",
  "stroke-width",
  "stroke-dasharray",
  "stroke-dashoffset"
];
function tP(e, n) {
  return g(), C("div", {
    class: p(e.n()),
    role: "progressbar",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": e.indeterminate ? void 0 : e.mode === "linear" ? e.linearProps.value : e.circleProps.value
  }, [e.mode === "linear" ? (g(), C("div", {
    key: 0,
    class: p(e.n("linear"))
  }, [R("div", {
    class: p(e.classes(e.n("linear-block"), [e.track, e.n("linear-background")])),
    style: Z({
      height: e.toSizeUnit(e.lineWidth),
      background: e.trackColor
    })
  }, [e.indeterminate ? (g(), C("div", {
    key: 0,
    class: p(e.n("linear-indeterminate"))
  }, [R("div", {
    class: p(e.classes(e.n(`linear--${e.type}`))),
    style: Z({ background: e.progressColor })
  }, null, 6), R("div", {
    class: p(e.classes(e.n(`linear--${e.type}`))),
    style: Z({ background: e.progressColor })
  }, null, 6)], 2)) : (g(), C("div", {
    key: 1,
    class: p(e.classes(e.n("linear-certain"), e.n(`linear--${e.type}`))),
    style: Z({
      background: e.progressColor,
      width: e.linearProps.width
    })
  }, null, 6))], 6), e.label ? (g(), C("div", {
    key: 0,
    class: p(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
  }, [F(e.$slots, "default", {}, () => [Ae(fe(e.linearProps.roundValue), 1)])], 2)) : X("v-if", !0)], 2)) : X("v-if", !0), e.mode === "circle" ? (g(), C("div", {
    key: 1,
    class: p(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
    style: Z({
      width: e.toSizeUnit(e.size),
      height: e.toSizeUnit(e.size)
    })
  }, [(g(), C("svg", {
    class: p(e.n("circle-svg")),
    viewBox: e.circleProps.viewBox
  }, [
    e.isPlainObject(e.color) ? (g(), C("defs", _O, [R("linearGradient", {
      id: e.id,
      x1: "100%",
      y1: "0%",
      x2: "0%",
      y2: "0%"
    }, [(g(!0), C(De, null, qe(e.linearGradientProgress, (r, o) => (g(), C("stop", {
      key: o,
      offset: r,
      "stop-color": e.color[r]
    }, null, 8, nP))), 128))], 8, eP)])) : X("v-if", !0),
    e.track ? (g(), C("path", {
      key: 1,
      class: p(e.n("circle-background")),
      d: e.circleProps.path,
      fill: "transparent",
      "stroke-width": e.circleProps.strokeWidth,
      "stroke-dasharray": e.CIRCUMFERENCE,
      style: Z({ stroke: e.trackColor })
    }, null, 14, rP)) : X("v-if", !0),
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
    }, null, 14, oP)
  ], 10, xO)), e.label ? (g(), C("div", {
    key: 0,
    class: p(e.classes(e.n("circle-label"), e.labelClass))
  }, [F(e.$slots, "default", {}, () => [Ae(fe(e.circleProps.roundValue), 1)])], 2)) : X("v-if", !0)], 6)) : X("v-if", !0)], 10, QO);
}
var Hh = oe({
  name: GO,
  props: Uh,
  setup(e) {
    const n = av();
    return {
      id: n,
      linearProps: T(() => {
        const r = j(e.value), o = un(r, Bt, no), t = un(Math.round(r), Bt, no);
        return {
          width: `${o}%`,
          roundValue: `${t}%`,
          value: o
        };
      }),
      CIRCUMFERENCE: of,
      RADIUS: vr,
      circleProps: T(() => {
        const { size: r, lineWidth: o, value: t } = e, a = vr / (1 - on(o) / on(r)) * 2, i = `0 0 ${a} ${a}`, l = un(Math.round(j(t)), Bt, no), s = `${(no - l) / no * of}`, u = on(o) / on(r) * a, d = 0, c = -vr, f = 0, v = -2 * vr, m = `M ${a / 2} ${a / 2} m ${d} ${c} a ${vr} ${vr} 
        0 1 1 ${f} ${-v} a ${vr} ${vr} 0 1 1 ${-f} ${v}`;
        return {
          strokeWidth: u,
          viewBox: i,
          strokeOffset: s,
          roundValue: `${l}%`,
          path: m,
          value: un(j(t), Bt, no)
        };
      }),
      progressColor: T(() => rn(e.color) ? `url(#${n.value})` : e.color),
      linearGradientProgress: T(() => Object.keys(e.color).sort((r, o) => parseFloat(r) - parseFloat(o))),
      n: ZO,
      classes: JO,
      toSizeUnit: ze,
      isPlainObject: rn
    };
  }
});
Hh.render = tP;
var Ri = Hh;
se(Ri);
ce(Ri, Uh);
var XD = Ri, Es = Ri, jh = {
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
}, aP = (e, n, r) => new Promise((o, t) => {
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
}), { name: iP, n: tf, classes: lP } = te("pull-refresh"), af = 150;
function sP(e, n) {
  const r = ne("var-icon");
  return g(), C("div", {
    ref: "freshNode",
    class: p(e.n()),
    onTouchstart: n[0] || (n[0] = (...o) => e.handleTouchstart && e.handleTouchstart(...o)),
    onTouchend: n[1] || (n[1] = (...o) => e.handleTouchend && e.handleTouchend(...o)),
    onTouchcancel: n[2] || (n[2] = (...o) => e.handleTouchend && e.handleTouchend(...o))
  }, [R("div", {
    ref: "controlNode",
    class: p(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
    style: Z(e.controlStyle)
  }, [G(r, {
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
var Yh = oe({
  name: iP,
  components: { VarIcon: Je },
  props: jh,
  setup(e) {
    const n = y(0), r = y(null), o = y(null), t = y(0), a = y("-125%"), i = y("arrow-down"), l = y("default"), s = y(!1), u = T(() => Math.abs(2 * n.value)), d = T(() => l.value === "success"), c = T(() => l.value !== "loading" && l.value !== "success" && !e.disabled), f = T(() => ({
      transform: `translate3d(0px, ${an(a.value) ? a.value : `${a.value}px`}, 0px) translate(-50%, 0)`,
      transition: s.value ? `transform ${e.animationDuration}ms` : void 0,
      background: d.value ? e.successBgColor : e.bgColor,
      color: d.value ? e.successColor : e.color
    })), { startTouch: v, moveTouch: m, endTouch: h, isReachTop: w } = bo();
    let $, S;
    me(() => e.modelValue, (B) => {
      B === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
        a.value = n.value, A();
      }, j(e.successDuration)));
    }), wn(D), je(r, "touchmove", I);
    function b(B) {
      if (i.value !== B)
        return i.value = B, new Promise((E) => {
          window.setTimeout(E, af);
        });
    }
    function z(B) {
      ("classList" in $ ? $ : document.body).classList[B](`${tf()}--lock`);
    }
    function O(B) {
      if (v(B), n.value === 0) {
        const { width: E } = tn(o.value);
        n.value = -(E + E * 0.25);
      }
      S = Ar(B.target);
    }
    function I(B) {
      if (m(B), !c.value || !S || S !== $ && Dr(S) > 0 || Dr($) > 0) return;
      w($) && Fe(B), l.value !== "pulling" && (l.value = "pulling", t.value = B.touches[0].clientY), w($) && zn(a.value) && a.value > n.value && z("add");
      const E = (B.touches[0].clientY - t.value) / 2 + n.value;
      a.value = E >= u.value ? u.value : E, b(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function H() {
      return aP(this, null, function* () {
        h(), c.value && (s.value = !0, j(a.value) >= u.value * 0.2 ? (yield b("refresh"), l.value = "loading", a.value = u.value * 0.3, k(e["onUpdate:modelValue"], !0), Ne(() => {
          k(e.onRefresh);
        }), z("remove")) : (l.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          s.value = !1, z("remove");
        }, j(e.animationDuration))), S = null);
      });
    }
    function D() {
      $ = e.target ? Iv(e.target, "PullRefresh") : Ar(r.value);
    }
    function A() {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, j(e.animationDuration));
    }
    return {
      ICON_TRANSITION: af,
      refreshStatus: l,
      freshNode: r,
      controlNode: o,
      iconName: i,
      controlStyle: f,
      isSuccess: d,
      n: tf,
      classes: lP,
      handleTouchstart: O,
      handleTouchmove: I,
      handleTouchend: H
    };
  }
});
Yh.render = sP;
var Li = Yh;
se(Li);
ce(Li, jh);
var GD = Li, Is = Li, Wh = {
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
}, Kh = /* @__PURE__ */ Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function uP() {
  const { bindChildren: e, childProviders: n, length: r } = $n(Kh);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function dP() {
  const { bindParent: e, parentProvider: n, index: r } = kn(Kh);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var { name: cP, n: fP, classes: vP } = te("radio"), pP = [
  "aria-checked",
  "aria-disabled",
  "tabindex"
];
function mP(e, n) {
  const r = ne("var-icon"), o = ne("var-hover-overlay"), t = ne("var-form-details"), a = We("ripple"), i = We("hover");
  return g(), C("div", { class: p(e.n("wrap")) }, [R("div", Ye({
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
  }), [Re((g(), C("div", {
    class: p(e.classes(e.n("action"), [
      e.checked,
      e.n("--checked"),
      e.n("--unchecked")
    ], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    style: Z({ color: e.checked ? e.checkedColor : e.uncheckedColor })
  }, [e.checked ? F(e.$slots, "checked-icon", { key: 0 }, () => [G(r, {
    class: p(e.n("icon")),
    "var-radio-cover": "",
    name: "radio-marked",
    size: e.iconSize
  }, null, 8, ["class", "size"])]) : F(e.$slots, "unchecked-icon", { key: 1 }, () => [G(r, {
    class: p(e.n("icon")),
    "var-radio-cover": "",
    name: "radio-blank",
    size: e.iconSize
  }, null, 8, ["class", "size"])]), G(o, {
    hovering: !e.disabled && !e.formDisabled && e.hovering,
    focusing: !e.disabled && !e.formDisabled && e.isFocusing
  }, null, 8, ["hovering", "focusing"])], 6)), [[a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }], [
    i,
    e.handleHovering,
    "desktop"
  ]]), e.$slots.default ? (g(), C("div", {
    key: 0,
    class: p(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    onClick: n[0] || (n[0] = (...l) => e.handleTextClick && e.handleTextClick(...l))
  }, [F(e.$slots, "default", { checked: e.checked })], 2)) : X("v-if", !0)], 16, pP), G(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var qh = oe({
  name: cP,
  directives: {
    Ripple: cn,
    Hover: Tn
  },
  components: {
    VarIcon: Je,
    VarFormDetails: En,
    VarHoverOverlay: Mn
  },
  inheritAttrs: !1,
  props: Wh,
  setup(e) {
    const n = y(), r = y(!1), o = Pn(e, "modelValue"), t = T(() => o.value === e.checkedValue), { radioGroup: a, bindRadioGroup: i } = dP(), { hovering: l, handleHovering: s } = Wn(), { form: u, bindForm: d } = Ln(), c = T(() => {
      const E = u?.disabled.value || e.disabled, M = t.value, U = a?.hasChecked.value;
      if (e.tabindex != null) return e.tabindex;
      if (!E)
        return a && U && !M ? "-1" : "0";
    }), { errorMessage: f, validateWithTrigger: v, validate: m, resetValidation: h } = Rn(), w = {
      sync: H,
      validate: A,
      resetValidation: h,
      reset: D,
      isFocusing: T(() => r.value),
      move() {
        n.value.focus(), n.value.click();
      },
      moveable() {
        return !u?.disabled.value && !e.disabled && !u?.readonly.value && !e.readonly;
      }
    };
    k(i, w), k(d, w), je(() => window, "keydown", $), je(() => window, "keyup", S);
    function $(E) {
      if (!r.value) return;
      const { key: M } = E;
      (M === "Enter" || M === " ") && Fe(E), M === "Enter" && n.value.click();
    }
    function S(E) {
      r.value && E.key === " " && (Fe(E), n.value.click());
    }
    function b(E) {
      Ne(() => {
        const { validateTrigger: M, rules: U, modelValue: L } = e;
        v(M, E, U, L);
      });
    }
    function z(E) {
      const { checkedValue: M, onChange: U } = e;
      a && o.value === M || (o.value = E, k(U, o.value), a?.onToggle(M), b("onChange"));
    }
    function O(E) {
      const { disabled: M, readonly: U, uncheckedValue: L, checkedValue: P, onClick: N } = e;
      u?.disabled.value || M || (k(N, E), !(u?.readonly.value || U) && z(t.value ? L : P));
    }
    function I() {
      n.value.focus();
    }
    function H(E) {
      const { checkedValue: M, uncheckedValue: U } = e, L = E === M;
      return o.value = L ? M : U, L;
    }
    function D() {
      o.value = e.uncheckedValue, h();
    }
    function A() {
      return m(e.rules, e.modelValue);
    }
    function B(E) {
      const { uncheckedValue: M, checkedValue: U } = e;
      [M, U].includes(E) || (E = t.value ? M : U), z(E);
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
      n: fP,
      classes: vP,
      handleClick: O,
      handleTextClick: I,
      toggle: B,
      reset: D,
      validate: A,
      resetValidation: h
    };
  }
});
qh.render = mP;
var Fi = qh;
se(Fi);
ce(Fi, Wh);
var ZD = Fi, pa = Fi, Xh = {
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
}, { name: hP, n: gP, classes: bP } = te("radio-group"), yP = ["aria-label"];
function wP(e, n) {
  const r = ne("maybe-v-node"), o = ne("var-radio"), t = ne("var-form-details");
  return g(), C("div", { class: p(e.n("wrap")) }, [R("div", {
    "aria-label": e.ariaLabel,
    role: "radiogroup",
    class: p(e.classes(e.n(), e.n(`--${e.direction}`)))
  }, [e.options.length ? (g(!0), C(De, { key: 0 }, qe(e.options, (a) => (g(), Ce(o, {
    key: a[e.valueKey],
    "checked-value": a[e.valueKey],
    disabled: a.disabled
  }, {
    default: pe(({ checked: i }) => [G(r, { is: e.isFunction(a[e.labelKey]) ? a[e.labelKey](a, i) : a[e.labelKey] }, null, 8, ["is"])]),
    _: 2
  }, 1032, ["checked-value", "disabled"]))), 128)) : X("v-if", !0), F(e.$slots, "default")], 10, yP), G(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var Gh = oe({
  name: hP,
  components: {
    VarFormDetails: En,
    VarRadio: pa,
    MaybeVNode: tt
  },
  props: Xh,
  setup(e) {
    const { length: n, radios: r, bindRadios: o } = uP(), { bindForm: t } = Ln(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = Rn(), u = T(() => a.value), d = y(!1), c = {
      onToggle: w,
      validate: $,
      reset: S,
      resetValidation: s,
      hasChecked: T(() => d.value),
      errorMessage: u
    };
    me(() => e.modelValue, h), me(() => n.value, h), k(t, c), o(c), je(() => window, "keydown", f);
    function f(b) {
      const z = r.findIndex(({ isFocusing: O }) => O.value);
      if (z !== -1 && r.some(({ moveable: O }, I) => I === z ? !1 : O())) {
        if ([
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight"
        ].includes(b.key) && Fe(b), b.key === "ArrowUp" || b.key === "ArrowLeft") {
          v(z, "prev");
          return;
        }
        (b.key === "ArrowDown" || b.key === "ArrowRight") && v(z, "next");
      }
    }
    function v(b, z) {
      for (; ; ) {
        z === "prev" ? b-- : b++, b < 0 && (b = r.length - 1), b > r.length - 1 && (b = 0);
        const I = r[b];
        if (I.moveable()) {
          I.move();
          break;
        }
      }
    }
    function m(b) {
      Ne(() => {
        const { validateTrigger: z, rules: O, modelValue: I } = e;
        i(z, b, O, I);
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
    function S() {
      k(e["onUpdate:modelValue"], void 0), s();
    }
    return {
      errorMessage: a,
      n: gP,
      classes: bP,
      reset: S,
      validate: $,
      resetValidation: s,
      isFunction: mn
    };
  }
});
Gh.render = wP;
var Ui = Gh;
se(Ui);
ce(Ui, Xh);
var JD = Ui, Bs = Ui, Zh = {
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
  namespace: Me(dn, "namespace"),
  emptyIconNamespace: Me(dn, "namespace"),
  halfIconNamespace: Me(dn, "namespace"),
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
}, { name: kP, n: Oo } = te("rate"), $P = ["onClick"];
function CP(e, n) {
  const r = ne("var-icon"), o = ne("var-hover-overlay"), t = ne("var-form-details"), a = We("ripple"), i = We("hover");
  return g(), C("div", { class: p(e.n("wrap")) }, [R("div", { class: p(e.n()) }, [(g(!0), C(De, null, qe(e.toNumber(e.count), (l) => Re((g(), C("div", {
    key: l,
    style: Z(e.getStyle(l)),
    class: p(e.getClass(l)),
    onClick: (s) => e.handleClick(l, s)
  }, [G(r, {
    class: p(e.n("content-icon")),
    "var-rate-cover": "",
    transition: 0,
    namespace: e.getCurrentState(l).namespace,
    name: e.getCurrentState(l).name,
    style: Z({ fontSize: e.toSizeUnit(e.size) })
  }, null, 8, [
    "class",
    "namespace",
    "name",
    "style"
  ]), G(o, { hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled }, null, 8, ["hovering"])], 14, $P)), [[a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }], [
    i,
    e.createHoverHandler(l),
    "desktop"
  ]])), 128))], 2), G(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var Jh = oe({
  name: kP,
  components: {
    VarIcon: Je,
    VarFormDetails: En,
    VarHoverOverlay: Mn
  },
  directives: {
    Ripple: cn,
    Hover: Tn
  },
  props: Zh,
  setup(e) {
    const n = y(-1), { form: r, bindForm: o } = Ln(), { errorMessage: t, validateWithTrigger: a, validate: i, resetValidation: l } = Rn(), { hovering: s } = Wn();
    let u = j(e.modelValue);
    k(o, {
      reset: S,
      validate: m,
      resetValidation: l
    });
    function d(b) {
      const { count: z, gap: O } = e;
      return {
        color: f(b).color,
        marginRight: b !== j(z) ? ze(O) : 0
      };
    }
    function c(b) {
      const { name: z, color: O } = f(b);
      return {
        [Oo("content")]: !0,
        [Oo("--disabled")]: r?.disabled.value || e.disabled,
        [Oo("--error")]: t.value,
        [Oo("--primary")]: z !== e.emptyIcon && !O
      };
    }
    function f(b) {
      const { modelValue: z, disabled: O, disabledColor: I, color: H, half: D, emptyColor: A, icon: B, halfIcon: E, emptyIcon: M, namespace: U, halfIconNamespace: L, emptyIconNamespace: P } = e;
      let N = H;
      return (O || r?.disabled.value) && (N = I), b <= z ? {
        color: N,
        name: B,
        namespace: U
      } : D && b <= z + 0.5 ? {
        color: N,
        name: E,
        namespace: L
      } : {
        color: O || r?.disabled.value ? I : A,
        name: M,
        namespace: P
      };
    }
    function v(b, z) {
      const { half: O, clearable: I } = e, { offsetWidth: H } = z.target;
      O && z.offsetX <= Math.floor(H / 2) && (b -= 0.5), u === b && I && (b = 0), u !== b && (k(e["onUpdate:modelValue"], b), k(e.onChange, b)), u = b;
    }
    function m() {
      return i(e.rules, e.modelValue);
    }
    function h() {
      Ne(() => a(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function w(b, z) {
      const { readonly: O, disabled: I } = e;
      O || I || r?.disabled.value || r?.readonly.value || (v(b, z), h());
    }
    function $(b) {
      return (z) => {
        n.value = b, s.value = z;
      };
    }
    function S() {
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
      reset: S,
      validate: m,
      resetValidation: l,
      toSizeUnit: ze,
      toNumber: j,
      n: Oo
    };
  }
});
Jh.render = CP;
var Hi = Jh;
se(Hi);
ce(Hi, Zh);
var QD = Hi, Ds = Hi, Qh = {
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
}, SP = { viewBox: "-4 -4 32 32" };
function OP(e, n) {
  return g(), C("svg", SP, [...n[0] || (n[0] = [R("path", {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  }, null, -1)])]);
}
var xh = oe({});
xh.render = OP;
var PP = xh, zP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
};
function TP(e, n) {
  return g(), C("svg", zP, [...n[0] || (n[0] = [R("path", { d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" }, null, -1)])]);
}
var _h = oe({});
_h.render = TP;
var EP = _h, IP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
};
function BP(e, n) {
  return g(), C("svg", IP, [...n[0] || (n[0] = [R("path", { d: "M11,9H13V7H11M11,20H13V11H11V20Z" }, null, -1)])]);
}
var eg = oe({});
eg.render = BP;
var DP = eg, MP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
};
function AP(e, n) {
  return g(), C("svg", MP, [...n[0] || (n[0] = [R("path", { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" }, null, -1)])]);
}
var ng = oe({});
ng.render = AP;
var NP = ng, { n: VP, classes: RP } = te("result");
function LP(e, n) {
  return g(), C(De, null, [
    R("span", { class: p(e.n("success-cover-left")) }, null, 2),
    R("span", {
      class: p(e.classes(e.n("success-line"), e.n("success-line-tip"))),
      style: Z({
        animationDuration: e.animation ? "760ms" : "0ms",
        borderRadius: `calc(${e.borderSize} * 0.625)`
      })
    }, null, 6),
    R("span", {
      class: p(e.classes(e.n("success-line"), e.n("success-line-long"))),
      style: Z({
        animationDuration: e.animation ? "770ms" : "0ms",
        borderRadius: `calc(${e.borderSize} * 0.625)`
      })
    }, null, 6),
    R("span", {
      ref: "circle",
      class: p(e.n("success-circle")),
      style: Z({
        left: `-${e.borderSize}`,
        top: `-${e.borderSize}`,
        borderWidth: e.borderSize
      })
    }, null, 6),
    R("span", { class: p(e.n("success-line-fix")) }, null, 2),
    R("span", {
      class: p(e.n("success-cover-right")),
      style: Z({ animationDuration: e.animation ? "4250ms" : "0ms" })
    }, null, 6)
  ], 64);
}
var rg = oe({
  props: {
    animation: { type: Boolean },
    borderSize: { type: String }
  },
  setup() {
    return {
      n: VP,
      classes: RP
    };
  }
});
rg.render = LP;
var FP = rg, UP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
};
function HP(e, n) {
  return g(), C("svg", UP, [...n[0] || (n[0] = [R("path", { d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11" }, null, -1)])]);
}
var og = oe({});
og.render = HP;
var jP = og, { name: YP, n: WP, classes: KP } = te("result");
function qP(e, n) {
  return g(), C("div", { class: p(e.classes(e.n(), e.n("$--box"))) }, [
    F(e.$slots, "image", {}, () => [e.type ? (g(), C("div", {
      key: 0,
      class: p(e.n("image-container"))
    }, [R("div", {
      class: p(e.classes(e.n("image"), e.n(e.type))),
      style: Z({
        width: e.circleSize,
        height: e.circleSize,
        borderWidth: e.borderSize
      })
    }, [(g(), Ce(ho(e.type), {
      "border-size": e.borderSize,
      animation: e.animation
    }, null, 8, ["border-size", "animation"]))], 6)], 2)) : X("v-if", !0)]),
    F(e.$slots, "title", {}, () => [e.title ? (g(), C("div", {
      key: 0,
      class: p(e.n("title"))
    }, fe(e.title), 3)) : X("v-if", !0)]),
    F(e.$slots, "description", {}, () => [e.description ? (g(), C("div", {
      key: 0,
      class: p(e.n("description"))
    }, fe(e.description), 3)) : X("v-if", !0)]),
    e.$slots.footer ? (g(), C("div", {
      key: 0,
      class: p(e.n("footer"))
    }, [F(e.$slots, "footer")], 2)) : X("v-if", !0)
  ], 2);
}
var tg = oe({
  name: YP,
  components: {
    Info: DP,
    Success: FP,
    Warning: jP,
    Error: EP,
    Question: NP,
    Empty: PP
  },
  props: Qh,
  setup(e) {
    return {
      circleSize: T(() => `calc(${e.imageSize ? ze(e.imageSize) : "var(--result-image-size)"} * 0.9)`),
      borderSize: T(() => `calc(${e.imageSize ? ze(e.imageSize) : "var(--result-image-size)"} * 0.05)`),
      n: WP,
      classes: KP
    };
  }
});
tg.render = qP;
var ji = tg;
se(ji);
ce(ji, Qh);
var xD = ji, Ms = ji, ag = {
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
}, { name: XP, n: GP, classes: ZP } = te("row");
function JP(e, n) {
  return g(), C("div", {
    class: p(e.classes(e.n(), e.n("$--box"))),
    style: Z({
      justifyContent: e.padStartFlex(e.justify),
      alignItems: e.padStartFlex(e.align),
      margin: `${-e.average[0]}px ${-e.average[1]}px`
    }),
    onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
  }, [F(e.$slots, "default")], 6);
}
var ig = oe({
  name: XP,
  props: ag,
  setup(e) {
    const n = T(() => He(e.gutter) ? e.gutter.map((t) => on(t) / 2) : [0, on(e.gutter) / 2]), { bindCols: r } = CS();
    r({ average: n });
    function o(t) {
      k(e.onClick, t);
    }
    return {
      average: n,
      n: GP,
      classes: ZP,
      handleClick: o,
      padStartFlex: na
    };
  }
});
ig.render = JP;
var Yi = ig;
se(Yi);
ce(Yi, ag);
var _D = Yi, As = Yi, QP = Object.defineProperty, lf = Object.getOwnPropertySymbols, xP = Object.prototype.hasOwnProperty, _P = Object.prototype.propertyIsEnumerable, sf = (e, n, r) => n in e ? QP(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, ez = (e, n) => {
  for (var r in n || (n = {})) xP.call(n, r) && sf(e, r, n[r]);
  if (lf)
    for (var r of lf(n)) _P.call(n, r) && sf(e, r, n[r]);
  return e;
}, lg = ez({
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
}, Me(st, [
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
])), { n: nz, classes: rz } = te("select");
function oz(e, n) {
  return Re((g(), C("input", {
    ref: "filterInputRef",
    "onUpdate:modelValue": n[0] || (n[0] = (r) => e.value = r),
    type: "text",
    class: p(e.classes(e.n("filter"), [e.multiple, e.n("filter--multiple")]))
  }, null, 2)), [[If, e.value]]);
}
var sg = oe({
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
    const n = y(), r = T({
      get: () => e.modelValue,
      set: (a) => k(e["onUpdate:modelValue"], a)
    });
    return {
      n: nz,
      classes: rz,
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
sg.render = oz;
var tz = sg, uf = (e, n, r) => new Promise((o, t) => {
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
function az(e, n, r) {
  const o = y(!1);
  let t = null;
  me(() => n.value, () => uf(null, null, function* () {
    l(), n.value && (yield Ne(), i(), a());
  }), { immediate: !0 }), go(l);
  function a() {
    var s;
    const u = e.value, d = u?.querySelectorAll(".var-option");
    o.value = d?.length ? Array.from(d).every((c) => _n(c).display === "none") : !0, (s = r?.onAfterUpdate) == null || s.call(r);
  }
  function i() {
    e.value && (t = new MutationObserver(() => uf(null, null, function* () {
      yield Ne(), a();
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
var iz = 11;
function lz(e) {
  const n = lb(), r = y(0), o = T(() => ({ minWidth: `${Math.max(r.value, iz)}px` })), t = () => {
    var a, i;
    r.value = (i = (a = n.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? i : 0;
  };
  return me(() => ou(e), () => {
    Ne(t);
  }), {
    calculatorRef: n,
    filterStyle: o,
    resize: t
  };
}
var sz = Object.defineProperty, uz = Object.defineProperties, dz = Object.getOwnPropertyDescriptors, df = Object.getOwnPropertySymbols, cz = Object.prototype.hasOwnProperty, fz = Object.prototype.propertyIsEnumerable, cf = (e, n, r) => n in e ? sz(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, vz = (e, n) => {
  for (var r in n || (n = {})) cz.call(n, r) && cf(e, r, n[r]);
  if (df)
    for (var r of df(n)) fz.call(n, r) && cf(e, r, n[r]);
  return e;
}, pz = (e, n) => uz(e, dz(n)), mz = (e, n, r) => new Promise((o, t) => {
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
}), { name: hz, n: gz, classes: bz } = te("select"), yz = ["tabindex"];
function wz(e, n) {
  const r = ne("maybe-v-node"), o = ne("var-chip"), t = ne("var-select-filter"), a = ne("var-icon"), i = ne("var-field-decorator"), l = ne("var-option"), s = ne("var-menu"), u = ne("var-form-details");
  return g(), C("div", {
    ref: "root",
    class: p(e.n()),
    tabindex: e.tabindex,
    onFocus: n[6] || (n[6] = (...d) => e.handleFocus && e.handleFocus(...d)),
    onBlur: n[7] || (n[7] = (...d) => e.handleRootBlur && e.handleRootBlur(...d))
  }, [G(s, {
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
    menu: pe(() => [R("div", {
      ref: "menuEl",
      class: p(e.classes(e.n("scroller"), e.n("$-elevation--3")))
    }, [
      e.showEmpty ? F(e.$slots, "empty", { key: 0 }, () => [R("div", { class: p(e.n("empty")) }, fe((e.pt ? e.pt : e.t)("selectEmptyText")), 3)]) : X("v-if", !0),
      e.options.length ? (g(!0), C(De, { key: 1 }, qe(e.options, (d) => (g(), Ce(l, {
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
    default: pe(() => [G(i, Kr(ma({
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
      "append-icon": pe(() => [F(e.$slots, "arrow-icon", {
        focus: e.isFocusing,
        menuOpen: e.showMenu
      }, () => [G(a, {
        class: p(e.classes(e.n("arrow"), [e.showMenu, e.n("--arrow-rotate")])),
        "var-select-cover": "",
        name: "menu-down",
        transition: 300
      }, null, 8, ["class"])]), F(e.$slots, "append-icon")]),
      default: pe(() => [R("div", {
        class: p(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: Z({
          textAlign: e.textAlign,
          color: e.textColor
        })
      }, [
        R("div", { class: p(e.classes(e.n("label"), [e.filterable && e.showMenu, e.n("--label-focusing")])) }, [e.isShowSelected() ? F(e.$slots, "selected", { key: 0 }, () => [e.multiple ? (g(), C(De, { key: 0 }, [e.chip ? (g(), C("div", {
          key: 0,
          class: p(e.n("chips"))
        }, [(g(!0), C(De, null, qe(e.labels, (d) => (g(), Ce(o, {
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
          default: pe(() => [G(r, { is: d }, null, 8, ["is"])]),
          _: 2
        }, 1032, [
          "class",
          "type",
          "onClose"
        ]))), 128)), e.isShowMultipleFilter() ? (g(), Ce(t, {
          key: 0,
          ref: "filterRef",
          modelValue: e.pattern,
          "onUpdate:modelValue": n[1] || (n[1] = (d) => e.pattern = d),
          style: Z(e.filterStyle),
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
        ])) : X("v-if", !0)], 2)) : (g(), C("div", {
          key: 1,
          class: p(e.n("values"))
        }, [(g(!0), C(De, null, qe(e.labels, (d, c) => (g(), C(De, { key: d }, [G(r, { is: d }, null, 8, ["is"]), Ae(fe(c !== e.labels.length - 1 ? e.separator : ""), 1)], 64))), 128)), e.isShowMultipleFilter() ? (g(), Ce(t, {
          key: 0,
          ref: "filterRef",
          modelValue: e.pattern,
          "onUpdate:modelValue": n[2] || (n[2] = (d) => e.pattern = d),
          style: Z(pz(vz({}, e.filterStyle), { paddingLeft: e.labels.length ? "4px" : 0 })),
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
        ])) : X("v-if", !0)], 2))], 64)) : (g(), Ce(r, {
          key: 1,
          is: e.label
        }, null, 8, ["is"]))]) : X("v-if", !0)], 2),
        e.enableCustomPlaceholder && !e.pattern ? (g(), C("span", {
          key: 0,
          class: p(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
          style: Z({ color: e.placeholderColor })
        }, fe(e.placeholder), 7)) : X("v-if", !0),
        e.isShowSingleFilter() ? (g(), Ce(t, {
          key: 1,
          ref: "filterRef",
          modelValue: e.pattern,
          "onUpdate:modelValue": n[3] || (n[3] = (d) => e.pattern = d),
          style: Z(e.filterStyle),
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
        e.filterable ? (g(), C("span", {
          key: 2,
          ref: "calculatorRef",
          class: p(e.n("filter-calculator"))
        }, fe(e.pattern), 3)) : X("v-if", !0)
      ], 6)]),
      _: 2
    }, [e.$slots["prepend-icon"] ? {
      name: "prepend-icon",
      fn: pe(() => [F(e.$slots, "prepend-icon")]),
      key: "0"
    } : void 0, e.pattern ? void 0 : {
      name: "clear-icon",
      fn: pe(({ clear: d }) => [F(e.$slots, "clear-icon", { clear: d })]),
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
  ]), G(u, {
    "error-message": e.errorMessage,
    onClick: n[5] || (n[5] = jn(() => {
    }, ["stop"]))
  }, null, 8, ["error-message"])], 42, yz);
}
var ug = oe({
  name: hz,
  components: {
    VarIcon: Je,
    VarMenu: Yo,
    VarChip: aa,
    VarOption: va,
    VarFieldDecorator: Fo,
    VarFormDetails: En,
    VarSelectFilter: tz,
    MaybeVNode: tt
  },
  props: lg,
  setup(e) {
    var n;
    const r = y(!1), o = y(!1), t = y(null), a = y(null), i = y(""), l = y(!1), s = T(() => e.filterable), u = T(() => e.multiple), d = T(() => e.focusColor), c = T(() => Zn(e.modelValue)), f = T(() => e.disabled || e.readonly ? "" : "pointer"), { bindForm: v, form: m } = Ln(), { length: h, options: w, bindOptions: $ } = lO(), { label: S, labels: b, computeLabel: z, getSelectedValue: O } = lp({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => w,
      optionProvidersLength: () => h.value
    }), { errorMessage: I, validateWithTrigger: H, validate: D, resetValidation: A } = Rn(), B = T(() => m?.readonly.value || e.readonly), E = T(() => m?.disabled.value || e.disabled), M = y(null), U = y(null), L = T(() => e.variant === "standard" && !e.filterable ? "cover-top" : "bottom"), { t: P } = ir(), N = y(0), ee = T({
      get() {
        return N.value + (L.value === "bottom" ? 2 : 0);
      },
      set(J) {
        N.value = J;
      }
    }), Q = T(() => {
      const { hint: J, blurColor: ve, focusColor: ye } = e;
      if (!J)
        return I.value ? "var(--field-decorator-error-color)" : r.value ? ye || "var(--field-decorator-focus-color)" : ve || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    }), ae = T(() => !e.hint && Zn(e.modelValue)), Oe = T(() => {
      var J;
      if (!E.value)
        return s.value && r.value ? "-1" : (J = e.tabindex) != null ? J : "0";
    }), { calculatorRef: le, filterStyle: K } = lz(i), x = {
      pattern: T(() => i.value),
      showMenu: T(() => o.value),
      multiple: u,
      filterable: s,
      filter: (n = e.filter) != null ? n : ((J, ve) => String(ve[e.labelKey]).toLocaleLowerCase().includes(J.toLocaleLowerCase())),
      focusColor: d,
      computeLabel: z,
      onSelect: Y,
      reset: Wr,
      validate: er,
      resetValidation: A
    }, { showEmpty: ue } = az(M, o, { onAfterUpdate: () => {
      var J;
      return (J = U.value) == null ? void 0 : J.resize();
    } });
    let he = !1;
    me(() => e.multiple, () => {
      Yn(e.multiple && He(e.modelValue), "Select", "The modelValue must be an array when multiple is true");
    }), $(x), je(() => window, "keydown", Le), je(() => window, "keyup", Ke), k(v, x);
    function W() {
      return s.value && !B.value && !E.value && !u.value;
    }
    function ie() {
      return s.value && !B.value && !E.value && u.value;
    }
    function Pe() {
      return !(c.value && !u.value || !u.value && (i.value || l.value));
    }
    function Le(J) {
      var ve;
      if (E.value || B.value || !r.value) return;
      const { key: ye } = J;
      if (ye === " " && !o.value) {
        Fe(J);
        return;
      }
      if (ye === "Escape" && o.value) {
        t.value.focus(), Fe(J), o.value = !1;
        return;
      }
      if (ye === "Tab" && o.value) {
        t.value.focus(), Fe(J), Qe();
        return;
      }
      if (ye === "Enter" && !o.value) {
        Fe(J), o.value = !0, (ve = a.value) == null || ve.focus();
        return;
      }
      (ye === "ArrowDown" || ye === "ArrowUp") && o.value && (Fe(J), gu(t.value, M.value, ye));
    }
    function Ke(J) {
      if (E.value || B.value || o.value || !r.value) return;
      const { key: ve } = J;
      ve === " " && !o.value && (Fe(J), o.value = !0);
    }
    function Ve(J) {
      Ne(() => {
        const { validateTrigger: ve, rules: ye, modelValue: Ee } = e;
        H(ve, J, ye, Ee);
      });
    }
    function ln() {
      var J;
      const { disabled: ve, readonly: ye, onFocus: Ee } = e;
      if (!(m?.disabled.value || m?.readonly.value || ve || ye)) {
        if (he) {
          he = !1;
          return;
        }
        ee.value = on(e.offsetY), jr(), (ie() || W()) && (he = !0, (J = a.value) == null || J.focus()), k(Ee), Ve("onFocus");
      }
    }
    function Qe() {
      const { disabled: J, readonly: ve, onBlur: ye } = e;
      m?.disabled.value || m?.readonly.value || J || ve || (Yr(), k(ye), Ve("onBlur"), i.value = "");
    }
    function ge() {
      return mz(this, null, function* () {
        if (he) {
          yield Ne(), he = !1;
          return;
        }
        o.value || Qe();
      });
    }
    function q() {
      r.value && Qe();
    }
    function Y(J) {
      const { disabled: ve, readonly: ye, multiple: Ee, onChange: Ue } = e;
      if (m?.disabled.value || m?.readonly.value || ve || ye) return;
      const _e = O(J);
      k(e["onUpdate:modelValue"], _e), k(Ue, _e), Ve("onChange"), Ne(() => {
        var Xe;
        return (Xe = a.value) == null ? void 0 : Xe.focus();
      }), Ee || (t.value.focus(), On().then(() => {
        o.value = !1, i.value = "";
      }));
    }
    function _() {
      const { disabled: J, readonly: ve, multiple: ye, clearable: Ee, onClear: Ue, onChange: _e } = e;
      if (m?.disabled.value || m?.readonly.value || J || ve || !Ee) return;
      const Xe = ye ? [] : void 0;
      k(e["onUpdate:modelValue"], Xe), k(Ue, Xe), Ve("onClear"), k(_e, Xe), Ve("onChange");
    }
    function be(J) {
      const { disabled: ve, onClick: ye } = e;
      m?.disabled.value || ve || (k(ye, J), Ve("onClick"));
    }
    function Te(J) {
      const { disabled: ve, readonly: ye, modelValue: Ee, onClose: Ue, onChange: _e } = e;
      if (m?.disabled.value || m?.readonly.value || ve || ye) return;
      const Xe = w.find(({ label: nr }) => nr.value === J), fr = Ee.filter((nr) => {
        var gt;
        return nr !== ((gt = Xe.value.value) != null ? gt : Xe.label.value);
      });
      k(e["onUpdate:modelValue"], fr), k(Ue, fr), Ve("onClose"), k(_e, fr), Ve("onChange");
    }
    function gn() {
      o.value = !0;
    }
    function fn() {
      l.value = !0;
    }
    function qn() {
      l.value = !1;
    }
    function jr() {
      ee.value = on(e.offsetY), r.value = !0;
    }
    function Yr() {
      r.value = !1, o.value = !1;
    }
    function er() {
      return D(e.rules, e.modelValue);
    }
    function Wr() {
      k(e["onUpdate:modelValue"], e.multiple ? [] : void 0), A();
    }
    return {
      root: t,
      filterRef: a,
      calculatorRef: le,
      isComposing: l,
      filterStyle: K,
      pattern: i,
      tabindex: Oe,
      readonly: B,
      disabled: E,
      offsetY: ee,
      isFocusing: r,
      showMenu: o,
      errorMessage: I,
      formDisabled: m?.disabled,
      formReadonly: m?.readonly,
      label: S,
      labels: b,
      isEmptyModelValue: c,
      menuEl: M,
      menuRef: U,
      placement: L,
      cursor: f,
      placeholderColor: Q,
      enableCustomPlaceholder: ae,
      showEmpty: ue,
      t: sn,
      pt: P,
      isFunction: mn,
      n: gz,
      classes: bz,
      isShowSelected: Pe,
      isShowSingleFilter: W,
      isShowMultipleFilter: ie,
      handleFocus: ln,
      handleBlur: Qe,
      handleClickOutside: q,
      handleClear: _,
      handleClick: be,
      handleClose: Te,
      handleRootBlur: ge,
      handleInput: gn,
      handleCompositionStart: fn,
      handleCompositionEnd: qn,
      reset: Wr,
      validate: er,
      resetValidation: A,
      focus: jr,
      blur: Yr
    };
  }
});
ug.render = wz;
var Wi = ug;
se(Wi);
ce(Wi, lg);
var e7 = Wi, Ns = Wi, dg = {
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
}, { name: kz, n: $z } = te("signature"), Cz = ["height", "width"];
function Sz(e, n) {
  return g(), C("div", {
    ref: "root",
    class: p(e.n())
  }, [R("canvas", {
    ref: "canvas",
    height: e.canvasHeight,
    width: e.canvasWidth
  }, null, 8, Cz)], 2);
}
var cg = oe({
  name: kz,
  props: dg,
  setup(e) {
    const n = y(), r = y(), o = y(0), t = y(0);
    let a = !1, i = null;
    je(r, "touchstart", s), je(r, "touchmove", u), je(r, "touchend", d), ar(l), br(l);
    function l() {
      !r.value || !n.value || (i = r.value.getContext("2d"), o.value = n.value.offsetWidth, t.value = n.value.offsetHeight);
    }
    function s(h) {
      !i || !n.value || (h.preventDefault(), a = !0, i.beginPath(), i.lineWidth = j(e.lineWidth), i.strokeStyle = e.strokeStyle === "currentColor" ? _n(n.value).color : e.strokeStyle, k(e.onStart));
    }
    function u(h) {
      if (h.preventDefault(), !r.value || !i || !a) return;
      const w = h.touches[0].clientX, $ = h.touches[0].clientY, S = tn(r.value), b = w - S.left, z = $ - S.top;
      i.lineTo(b, z), i.stroke(), k(e.onSigning);
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
      n: $z,
      confirm: m,
      reset: v
    };
  }
});
cg.render = Sz;
var Ki = cg;
se(Ki);
ce(Ki, dg);
var n7 = Ki, Vs = Ki, fg = {
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
}, { name: Oz, n: Pz, classes: zz } = te("skeleton");
function Tz(e, n) {
  return g(), C("div", { class: p(e.classes(e.n("$--box"), e.n())) }, [
    e.loading ? X("v-if", !0) : (g(), C("div", {
      key: 0,
      class: p(e.n("data"))
    }, [F(e.$slots, "default")], 2)),
    e.loading && !e.fullscreen ? (g(), C("div", {
      key: 1,
      class: p(e.n("content"))
    }, [e.card ? (g(), C("div", {
      key: 0,
      class: p(e.n("card")),
      style: Z({ height: e.toSizeUnit(e.cardHeight) })
    }, [R("div", { class: p(e.n("--animation")) }, null, 2)], 6)) : X("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (g(), C("div", {
      key: 1,
      class: p(e.n("article"))
    }, [e.avatar ? (g(), C("div", {
      key: 0,
      class: p(e.n("avatar")),
      style: Z({
        width: e.toSizeUnit(e.avatarSize),
        height: e.toSizeUnit(e.avatarSize)
      })
    }, [R("div", { class: p(e.n("--animation")) }, null, 2)], 6)) : X("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (g(), C("div", {
      key: 1,
      class: p(e.n("section"))
    }, [e.title ? (g(), C("div", {
      key: 0,
      class: p(e.n("title")),
      style: Z({ width: e.toSizeUnit(e.titleWidth) })
    }, [R("div", { class: p(e.n("--animation")) }, null, 2)], 6)) : X("v-if", !0), (g(!0), C(De, null, qe(e.toNumber(e.rows), (r, o) => (g(), C("div", {
      key: r,
      class: p(e.n("row")),
      style: Z({ width: e.toSizeUnit(e.rowsWidth[o]) })
    }, [R("div", { class: p(e.n("--animation")) }, null, 2)], 6))), 128))], 2)) : X("v-if", !0)], 2)) : X("v-if", !0)], 2)) : X("v-if", !0),
    e.loading && e.fullscreen ? (g(), C("div", {
      key: 2,
      class: p(e.n("fullscreen")),
      style: Z({ zIndex: e.toNumber(e.fullscreenZIndex) })
    }, [R("div", { class: p(e.n("--animation")) }, null, 2)], 6)) : X("v-if", !0)
  ], 2);
}
var vg = oe({
  name: Oz,
  props: fg,
  setup: () => ({
    n: Pz,
    classes: zz,
    toSizeUnit: ze,
    toNumber: j
  })
});
vg.render = Tz;
var qi = vg;
se(qi);
ce(qi, fg);
var r7 = qi, Rs = qi, pn = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(pn || {}), pg = {
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
}, { name: Ez, n: ff, classes: Iz } = te("slider"), Bz = [
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
function Dz(e, n) {
  const r = ne("var-hover-overlay"), o = ne("var-form-details"), t = We("hover");
  return g(), C("div", { class: p(e.classes(e.n(e.direction), e.n("$--box"))) }, [R("div", {
    ref: "sliderEl",
    class: p(e.classes(e.n(`${e.direction}-block`), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(`${e.direction}--error`)])),
    onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
  }, [R("div", { class: p(e.n(`${e.direction}-track`)) }, [R("div", {
    class: p(e.n(`${e.direction}-track-background`)),
    style: Z({
      background: e.trackColor,
      height: e.isVertical ? "100%" : e.toSizeUnit(e.trackHeight),
      width: e.isVertical ? e.toSizeUnit(e.trackHeight) : "100%"
    })
  }, null, 6), R("div", {
    class: p(e.n(`${e.direction}-track-fill`)),
    style: Z(e.getFillStyle)
  }, null, 6)], 2), (g(!0), C(De, null, qe(e.thumbList, (a) => (g(), C("div", {
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
    onTouchstart: jn((i) => e.start(i, a.enumValue), ["stop"]),
    onTouchmove: n[0] || (n[0] = jn((...i) => e.move && e.move(...i), ["stop"])),
    onFocusin: (i) => e.handleFocus(a),
    onFocusout: (i) => e.handleBlur(a)
  }, [F(e.$slots, "button", { currentValue: a.text }, () => [
    Re(R("div", {
      class: p(e.n(`${e.direction}-thumb-block`)),
      style: Z({ background: e.thumbColor })
    }, null, 6), [[
      t,
      (i) => e.hover(i, a),
      "desktop"
    ]]),
    R("div", {
      class: p(e.classes(e.n(`${e.direction}-thumb-ripple`), [e.thumbsProps[a.enumValue].active, e.n(`${e.direction}-thumb-ripple--active`)])),
      style: Z({ background: e.thumbsProps[a.enumValue].active ? e.thumbColor : void 0 })
    }, [G(r, {
      hovering: !e.isDisabled && a.hovering,
      focusing: !e.isDisabled && a.focusing
    }, null, 8, ["hovering", "focusing"])], 6),
    R("div", {
      class: p(e.classes(e.n(`${e.direction}-thumb-label`), [e.showLabel(a.enumValue), e.n(`${e.direction}-thumb-label--active`)])),
      style: Z({
        background: e.labelColor,
        color: e.labelTextColor,
        height: e.toSizeUnit(e.thumbSize),
        width: e.toSizeUnit(e.thumbSize)
      })
    }, [R("span", null, fe(a.text), 1)], 6)
  ])], 46, Bz))), 128))], 2), G(o, {
    "error-message": e.errorMessage,
    class: p(e.n("form")),
    "var-slider-cover": ""
  }, null, 8, ["error-message", "class"])], 2);
}
var mg = oe({
  name: Ez,
  components: {
    VarFormDetails: En,
    VarHoverOverlay: Mn
  },
  directives: { Hover: Tn },
  props: pg,
  setup(e) {
    const n = y(0), r = y(null), o = y(!1), t = T(() => j(e.max) - j(e.min)), a = T(() => n.value / t.value * j(e.step)), i = T(() => e.disabled || f?.disabled.value), l = T(() => e.readonly || f?.readonly.value), s = T(() => e.direction === "vertical"), u = y(!1), d = y(!1), { bindForm: c, form: f } = Ln(), { errorMessage: v, validateWithTrigger: m, validate: h, resetValidation: w } = Rn(), { hovering: $, handleHovering: S } = Wn(), { hovering: b, handleHovering: z } = Wn(), O = T(() => {
      const { modelValue: Y, range: _ } = e;
      let be = [];
      return _ && He(Y) ? be = [{
        value: N(Y[0]),
        enumValue: pn.First,
        text: ee(Y[0]),
        hovering: $.value,
        focusing: u.value,
        handleHovering: S,
        handleFocusing(Te) {
          u.value = Te;
        }
      }, {
        value: N(Y[1]),
        enumValue: pn.Second,
        text: ee(Y[1]),
        hovering: b.value,
        focusing: d.value,
        handleHovering: z,
        handleFocusing(Te) {
          d.value = Te;
        }
      }] : zn(Y) && (be = [{
        value: N(Y),
        enumValue: pn.First,
        text: ee(Y),
        hovering: $.value,
        focusing: u.value,
        handleHovering: S,
        handleFocusing(Te) {
          u.value = Te;
        }
      }]), be;
    }), I = T(() => {
      const { activeColor: Y, range: _, modelValue: be } = e, Te = _ && He(be) ? N(Math.min(be[0], be[1])) : 0, gn = _ && He(be) ? N(Math.max(be[0], be[1])) - Te : N(be);
      return s.value ? {
        left: "0px",
        height: `${gn}%`,
        bottom: `${Te}%`,
        background: Y
      } : {
        top: "0px",
        width: `${gn}%`,
        left: `${Te}%`,
        background: Y
      };
    }), H = nn({
      [pn.First]: E(),
      [pn.Second]: E()
    });
    let D;
    k(c, {
      reset: Ve,
      validate: B,
      resetValidation: w
    }), me([() => e.modelValue, () => e.step], ([Y, _]) => {
      !Pe() || !Le() || o.value || Ke(Y, j(_));
    }), me(n, () => Ke()), wn(() => {
      !Pe() || !Le() || A();
    }), ha(x), je(() => window, "keydown", Qe), ar(A);
    function A() {
      n.value = r.value[s.value ? "offsetHeight" : "offsetWidth"];
    }
    function B() {
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
    function M() {
      Ne(() => m(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function U(Y) {
      const _ = Y.currentTarget;
      return _ ? s.value ? n.value - (Y.clientY - tn(_).top) : Y.clientX - Hy(_) : 0;
    }
    function L(Y) {
      return {
        [s.value ? "bottom" : "left"]: `${Y.value}%`,
        zIndex: H[Y.enumValue].active ? 1 : void 0
      };
    }
    function P(Y) {
      return e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : H[Y].active;
    }
    function N(Y) {
      const { min: _, max: be } = e;
      return Y < j(_) ? 0 : Y > j(be) ? 100 : (Y - j(_)) / t.value * 100;
    }
    function ee(Y) {
      if (!zn(Y)) return 0;
      const _ = un(Y, j(e.min), j(e.max));
      return parseInt(`${_}`, 10) === _ ? _ : j(_.toPrecision(5));
    }
    function Q(Y, _) {
      i.value || _.handleHovering(Y);
    }
    function ae(Y) {
      k(e.onChange, Y), k(e["onUpdate:modelValue"], Y), M();
    }
    function Oe(Y, _) {
      let be = [];
      const { step: Te, range: gn, modelValue: fn, min: qn } = e, jr = j(Te), Yr = Math.round(Y / a.value), er = Yr * jr + j(qn), Wr = H[_].percentValue * jr + j(qn);
      H[_].percentValue = Yr, gn && He(fn) && (be = _ === pn.First ? [er, fn[1]] : [fn[0], er]), Wr !== er && ae(gn ? be.map((J) => ee(J)) : ee(er));
    }
    function le(Y) {
      if (!e.range) return pn.First;
      const _ = H[pn.First].percentValue * a.value, be = H[pn.Second].percentValue * a.value;
      return Math.abs(Y - _) <= Math.abs(Y - be) ? pn.First : pn.Second;
    }
    function K() {
      document.addEventListener("touchmove", he, { passive: !1 }), document.addEventListener("touchend", W), document.addEventListener("touchcancel", W);
    }
    function x() {
      document.removeEventListener("touchmove", he), document.removeEventListener("touchend", W), document.removeEventListener("touchcancel", W);
    }
    function ue(Y, _) {
      if (A(), i.value || (H[_].active = !0), D = _, K(), i.value || l.value) return;
      k(e.onStart), o.value = !0;
      const { clientX: be, clientY: Te } = Y.touches[0];
      H[_].startPosition = s.value ? Te : be;
    }
    function he(Y) {
      if (Fe(Y), i.value || l.value || !o.value) return;
      const { startPosition: _, currentOffset: be } = H[D], { clientX: Te, clientY: gn } = Y.touches[0];
      let fn = (s.value ? _ - gn : Te - _) + be;
      fn <= 0 ? fn = 0 : fn >= n.value && (fn = n.value), Oe(fn, D);
    }
    function W() {
      x();
      const { range: Y, modelValue: _, onEnd: be, step: Te, min: gn } = e;
      if (i.value || (H[D].active = !1), i.value || l.value) return;
      let fn = [];
      H[D].currentOffset = H[D].percentValue * a.value;
      const qn = H[D].percentValue * j(Te) + j(gn);
      Y && He(_) && (fn = D === pn.First ? [qn, _[1]] : [_[0], qn]), k(be, Y ? fn : qn), o.value = !1;
    }
    function ie(Y) {
      if (i.value || l.value || Y.target.closest(`.${ff("thumb")}`)) return;
      const _ = U(Y), be = le(_);
      D = be, Oe(_, be), W();
    }
    function Pe() {
      return j(e.step) <= 0 ? (X0("Slider", '"step" should be > 0'), !1) : !0;
    }
    function Le() {
      const { range: Y, modelValue: _ } = e;
      return Y && !He(_) ? (to("Slider", '"modelValue" should be an Array'), !1) : !Y && He(_) ? (to("Slider", '"modelValue" should be a Number'), !1) : Y && He(_) && _.length < 2 ? (to("Slider", '"modelValue" should have two value'), !1) : !0;
    }
    function Ke(Y = e.modelValue, _ = j(e.step)) {
      const be = (Te) => {
        const { min: gn, max: fn } = e;
        return Te < j(gn) ? 0 : Te > j(fn) ? t.value / _ : (Te - j(gn)) / _;
      };
      e.range && He(Y) ? (H[pn.First].percentValue = be(Y[0]), H[pn.First].currentOffset = H[pn.First].percentValue * a.value, H[pn.Second].percentValue = be(Y[1]), H[pn.Second].currentOffset = H[pn.Second].percentValue * a.value) : zn(Y) && (H[pn.First].currentOffset = be(Y) * a.value);
    }
    function Ve() {
      const Y = e.range ? [0, 0] : 0;
      k(e["onUpdate:modelValue"], Y), w();
    }
    function ln(Y, _) {
      const be = j(e.step);
      return He(_) ? [_[0] + (u.value ? Y * be : 0), _[1] + (d.value ? Y * be : 0)].map(ee) : ee(_ + Y * be);
    }
    function Qe(Y) {
      const _ = {
        ArrowRight: 1,
        ArrowUp: 1,
        ArrowLeft: -1,
        ArrowDown: -1
      }, { key: be } = Y;
      if (!Ir(_, be) || l.value || i.value || e.range && !u.value && !d.value || !e.range && !u.value) return;
      Fe(Y);
      const Te = _[be];
      ae(ln(Te, e.modelValue));
    }
    function ge(Y) {
      i.value || Y.handleFocusing(!0);
    }
    function q(Y) {
      Y.handleFocusing(!1);
    }
    return {
      sliderEl: r,
      getFillStyle: I,
      isDisabled: i,
      isVertical: s,
      errorMessage: v,
      thumbsProps: H,
      thumbList: O,
      handleFocus: ge,
      handleBlur: q,
      n: ff,
      classes: Iz,
      thumbStyle: L,
      hover: Q,
      toSizeUnit: ze,
      toNumber: j,
      showLabel: P,
      start: ue,
      move: he,
      end: W,
      handleClick: ie
    };
  }
});
mg.render = Dz;
var Xi = mg;
se(Xi);
ce(Xi, pg);
var o7 = Xi, Ls = Xi, Mz = Object.defineProperty, Az = Object.defineProperties, Nz = Object.getOwnPropertyDescriptors, vf = Object.getOwnPropertySymbols, Vz = Object.prototype.hasOwnProperty, Rz = Object.prototype.propertyIsEnumerable, pf = (e, n, r) => n in e ? Mz(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Lz = (e, n) => {
  for (var r in n || (n = {})) Vz.call(n, r) && pf(e, r, n[r]);
  if (vf)
    for (var r of vf(n)) Rz.call(n, r) && pf(e, r, n[r]);
  return e;
}, Fz = (e, n) => Az(e, Nz(n)), Ru = {
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
  loadingType: Me(pr, "type"),
  loadingSize: Me(pr, "size"),
  loadingRadius: Me(pr, "radius"),
  loadingColor: Fz(Lz({}, Me(pr, "color")), { default: "currentColor" }),
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
}, { n: Uz, classes: Hz } = te("snackbar"), jz = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function Yz(e, n) {
  const r = ne("var-icon"), o = ne("var-loading");
  return Re((g(), C("div", {
    class: p(e.n()),
    style: Z({
      pointerEvents: e.isForbidClick ? "auto" : "none",
      zIndex: e.zIndex
    })
  }, [R("div", {
    class: p(e.classes(e.n("wrapper"), e.n(`wrapper-${e.position}`), e.formatElevation(e.elevation, 4), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n(`wrapper-${e.type}`)])),
    style: Z({ zIndex: e.zIndex })
  }, [
    R("div", { class: p([e.n("content"), e.contentClass]) }, [F(e.$slots, "default", {}, () => [Ae(fe(e.content), 1)])], 2),
    e.iconName || e.type === "loading" || e.$slots.icon ? (g(), C("div", {
      key: 0,
      class: p(e.n("icon"))
    }, [
      e.iconName ? (g(), Ce(r, {
        key: 0,
        name: e.iconName
      }, null, 8, ["name"])) : X("v-if", !0),
      e.type === "loading" ? (g(), Ce(o, {
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
    e.$slots.action ? (g(), C("div", {
      key: 1,
      class: p(e.n("action"))
    }, [F(e.$slots, "action")], 2)) : X("v-if", !0)
  ], 6)], 6)), [[xn, e.show]]);
}
var hg = oe({
  name: "VarSnackbarCore",
  components: {
    VarLoading: fo,
    VarIcon: Je
  },
  props: Ru,
  setup(e) {
    const n = y(null), { zIndex: r } = it(() => e.show, 1);
    at(() => e.show, () => e.lockScroll);
    const o = T(() => {
      const { type: i, forbidClick: l } = e;
      return i === "loading" || l;
    }), t = T(() => e.type ? jz[e.type] : "");
    function a() {
      n.value = setTimeout(() => {
        e.type !== "loading" && k(e["onUpdate:show"], !1);
      }, e.duration);
    }
    return me(() => e.show, (i) => {
      i ? (k(e.onOpen), a()) : (clearTimeout(n.value), k(e.onClose));
    }), me(() => e._update, () => {
      clearTimeout(n.value), a();
    }), wn(() => {
      e.show && (k(e.onOpen), a());
    }), {
      SNACKBAR_TYPE: yg,
      zIndex: r,
      iconName: t,
      isForbidClick: o,
      n: Uz,
      classes: Hz,
      formatElevation: hn
    };
  }
});
hg.render = Yz;
var gg = hg, { name: Wz, n: Kz } = te("snackbar");
function qz(e, n) {
  const r = ne("var-snackbar-core");
  return g(), Ce(cr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [G(en, {
    name: `${e.n()}-fade`,
    onAfterEnter: e.onOpened,
    onAfterLeave: e.onClosed
  }, {
    default: pe(() => [G(r, Ye(e.$props, { class: e.n("transition") }), Xr({
      default: pe(() => [F(e.$slots, "default")]),
      _: 2
    }, [e.$slots.icon ? {
      name: "icon",
      fn: pe(() => [F(e.$slots, "icon")]),
      key: "0"
    } : void 0, e.$slots.action ? {
      name: "action",
      fn: pe(() => [F(e.$slots, "action")]),
      key: "1"
    } : void 0]), 1040, ["class"])]),
    _: 3
  }, 8, [
    "name",
    "onAfterEnter",
    "onAfterLeave"
  ])], 8, ["to", "disabled"]);
}
var bg = oe({
  name: Wz,
  components: { VarSnackbarCore: gg },
  props: Ru,
  setup() {
    const { disabled: e } = xr();
    return {
      disabled: e,
      n: Kz
    };
  }
});
bg.render = qz;
var Gi = bg, Xz = Object.defineProperty, mf = Object.getOwnPropertySymbols, Gz = Object.prototype.hasOwnProperty, Zz = Object.prototype.propertyIsEnumerable, hf = (e, n, r) => n in e ? Xz(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Jo = (e, n) => {
  for (var r in n || (n = {})) Gz.call(n, r) && hf(e, r, n[r]);
  if (mf)
    for (var r of mf(n)) Zz.call(n, r) && hf(e, r, n[r]);
  return e;
}, yg = [
  "loading",
  "success",
  "warning",
  "info",
  "error"
], gf = 0, Fs = !1, wg, Qo = !1, kg = {
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
}, Qn = nn([]), Lu = kg, Jz = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, yl = (e) => () => mn(e) ? e() : e, Qz = { setup() {
  return () => {
    const e = Qn.map(({ id: n, reactiveSnackOptions: r, _update: o }) => {
      const t = document.querySelector(".var-transition-group");
      r.forbidClick || r.type === "loading" ? t.classList.add("var-pointer-auto") : t.classList.remove("var-pointer-auto");
      const a = Jo({ position: Qo ? "relative" : "absolute" }, o8(r.position)), { content: i, icon: l, action: s } = r, u = {
        default: yl(i),
        icon: yl(l),
        action: yl(s)
      };
      return G(gg, Ye(r, {
        key: n,
        style: a,
        "data-id": n,
        _update: o,
        show: r.show,
        "onUpdate:show": (d) => r.show = d
      }), u);
    });
    return G(rb, Ye(Jz, {
      style: { zIndex: Hn.zIndex },
      onAfterEnter: xz,
      onAfterLeave: _z
    }), { default: () => [e] });
  };
} }, dr = function(e) {
  const n = n8(e), r = nn(Jo(Jo({}, Lu), n));
  r.show = !0, Fs || (Fs = !0, wg = yo(Qz).unmountInstance);
  const { length: o } = Qn, t = {
    id: gf++,
    reactiveSnackOptions: r
  };
  return o === 0 || Qo ? e8(t) : r8(r, `update-${gf}`), { clear() {
    !Qo && Qn.length ? Qn[0].reactiveSnackOptions.show = !1 : r.show = !1;
  } };
};
yg.forEach((e) => {
  dr[e] = (n) => (rn(n) ? n.type = e : n = {
    content: n,
    type: e
  }, dr(n));
});
dr.allowMultiple = function(e = !1) {
  e !== Qo && (Qn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Qo = e);
};
dr.clear = function() {
  Qn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
dr.setDefaultOptions = function(e) {
  Lu = e;
};
dr.resetDefaultOptions = function() {
  Lu = kg;
};
function xz(e) {
  const n = e.getAttribute("data-id"), r = Qn.find((o) => o.id === j(n));
  r && k(r.reactiveSnackOptions.onOpened);
}
function _z(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), r = Qn.find((o) => o.id === j(n));
  r && (r.animationEnd = !0, k(r.reactiveSnackOptions.onClosed)), Qn.every((o) => o.animationEnd) && (k(wg), Qn = nn([]), Fs = !1);
}
function e8(e) {
  Qn.push(e);
}
function n8(e = {}) {
  return an(e) ? { content: e } : e;
}
function r8(e, n) {
  const [r] = Qn;
  r.reactiveSnackOptions = Jo(Jo({}, r.reactiveSnackOptions), e), r._update = n;
}
function o8(e = "top") {
  return e === "bottom" ? { top: "85%" } : { top: e === "top" ? "5%" : "45%" };
}
dr.Component = Gi;
se(Gi);
se(Gi, dr);
ce(dr, Ru);
var t7 = Gi, Us = dr, $g = {
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
function t8(e, n, r) {
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
var a8 = (e) => [
  "mini",
  "small",
  "normal",
  "large"
].includes(e), { name: i8, n: Dt, classes: bf } = te("space");
function l8(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : He(e) ? e.map(ze) : [ze(e), ze(e)];
}
var Zi = oe({
  name: i8,
  props: $g,
  setup(e, { slots: n }) {
    return () => {
      var r;
      const { inline: o, justify: t, align: a, wrap: i, direction: l, size: s } = e, u = (r = k(n.default)) != null ? r : [], [d, c] = l8(s, a8(s)), f = Ca(u), v = f.length - 1, m = f.map((h, w) => {
        var $;
        const S = t8(d, c, {
          direction: l,
          justify: t,
          index: w,
          lastIndex: v
        });
        return G("div", {
          class: bf([l === "column", Dt("--auto")]),
          key: ($ = h.key) != null ? $ : void 0,
          style: { margin: S }
        }, [h]);
      });
      return G("div", {
        class: bf(Dt(), Dt("$--box"), [o, Dt("--inline")]),
        style: {
          flexDirection: l,
          justifyContent: na(t),
          alignItems: na(a),
          flexWrap: i ? "wrap" : "nowrap",
          margin: l === "row" ? `calc(-1 * ${d} / 2) 0` : void 0
        }
      }, [m]);
    };
  }
});
se(Zi);
ce(Zi, $g);
var a7 = Zi, Hs = Zi, Cg = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: Me(dn, "name"),
  inactiveIcon: Me(dn, "name"),
  activeIconNamespace: Me(dn, "namespace"),
  currentIconNamespace: Me(dn, "namespace"),
  inactiveIconNamespace: Me(dn, "namespace")
}, Sg = /* @__PURE__ */ Symbol("STEPS_BIND_STEP_KEY");
function s8() {
  const { bindChildren: e, childProviders: n } = $n(Sg);
  return {
    step: n,
    bindStep: e
  };
}
function u8() {
  const { parentProvider: e, index: n, bindParent: r } = kn(Sg);
  return Yn(!!r, "Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: r
  };
}
var { name: d8, n: c8, classes: f8 } = te("step"), v8 = { key: 3 };
function p8(e, n) {
  const r = ne("var-icon");
  return g(), C("div", { class: p(e.n()) }, [R("div", { class: p(e.n(e.direction)) }, [
    R("div", {
      class: p(e.classes(e.n(`${e.direction}-tag`), [e.isActive || e.isCurrent, e.n(`${e.direction}-tag--active`)])),
      style: Z({ backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor }),
      onClick: n[0] || (n[0] = (...o) => e.click && e.click(...o))
    }, [e.isActive ? (g(), Ce(r, {
      key: 0,
      class: p(e.n("icon")),
      "var-step-cover": "",
      name: e.activeIcon,
      namespace: e.activeIconNamespace
    }, null, 8, [
      "class",
      "name",
      "namespace"
    ])) : e.isCurrent && e.currentIcon ? (g(), Ce(r, {
      key: 1,
      class: p(e.n("icon")),
      "var-step-cover": "",
      name: e.currentIcon,
      namespace: e.currentIconNamespace
    }, null, 8, [
      "class",
      "name",
      "namespace"
    ])) : e.inactiveIcon ? (g(), Ce(r, {
      key: 2,
      class: p(e.n("icon")),
      "var-step-cover": "",
      name: e.inactiveIcon,
      namespace: e.inactiveIconNamespace
    }, null, 8, [
      "class",
      "name",
      "namespace"
    ])) : (g(), C("span", v8, fe(e.index + 1), 1))], 6),
    e.$slots.default ? (g(), C("div", {
      key: 0,
      class: p(e.classes(e.n(`${e.direction}-content`), [e.isActive || e.isCurrent, e.n(`${e.direction}-content--active`)])),
      onClick: n[1] || (n[1] = (...o) => e.click && e.click(...o))
    }, [F(e.$slots, "default")], 2)) : X("v-if", !0),
    R("div", { class: p(e.n(`${e.direction}-line`)) }, null, 2)
  ], 2)], 2);
}
var Og = oe({
  name: d8,
  components: { VarIcon: Je },
  props: Cg,
  setup() {
    const { index: e, steps: n, bindSteps: r } = u8(), { active: o, activeColor: t, inactiveColor: a, direction: i, clickStep: l } = n, s = T(() => o.value === e.value), u = T(() => e.value !== -1 && j(o.value) > e.value);
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
      n: c8,
      classes: f8,
      click: d
    };
  }
});
Og.render = p8;
var Ji = Og;
se(Ji);
ce(Ji, Cg);
var i7 = Ji, js = Ji, Pg = {
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
}, { name: m8, n: h8 } = te("steps");
function g8(e, n) {
  return g(), C("div", {
    class: p(e.n()),
    style: Z({ flexDirection: e.direction === "horizontal" ? "row" : "column" })
  }, [F(e.$slots, "default")], 6);
}
var zg = oe({
  name: m8,
  props: Pg,
  setup(e) {
    const n = T(() => e.active), r = T(() => e.activeColor), o = T(() => e.inactiveColor), t = T(() => e.direction), { bindStep: a } = s8();
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
    return { n: h8 };
  }
});
zg.render = g8;
var Qi = zg;
se(Qi);
ce(Qi, Pg);
var l7 = Qi, Ys = Qi, Tg = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: b8, n: y8 } = te("style-provider"), xi = oe({
  name: b8,
  props: Tg,
  setup(e, { slots: n }) {
    return () => xo(e.tag, {
      class: y8(),
      style: Bv(e.styleVars)
    }, k(n.default));
  }
}), Eg = "varlet-style-vars";
function yf() {
  const e = document.head.querySelector(`#${Eg}`);
  e && document.head.removeChild(e);
}
function w8(e) {
  const n = document.createElement("style");
  n.id = Eg, n.innerHTML = e, document.head.appendChild(n);
}
function _i(e) {
  if (e == null) {
    yf();
    return;
  }
  const n = Bv(e ?? {}), r = Object.entries(n).reduce((o, [t, a]) => (o += `${t}:${a};`, o), `:root:root {
`);
  yf(), w8(`${r}
}`);
}
_i.Component = xi;
se(xi);
se(xi, _i);
ce(_i, Tg);
var s7 = xi, Ws = _i, Ig = {
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
}, { name: k8, n: $8, classes: C8 } = te("switch"), S8 = ["aria-checked"], O8 = ["tabindex"];
function P8(e, n) {
  const r = ne("var-hover-overlay"), o = ne("var-form-details"), t = We("ripple"), a = We("hover");
  return Re((g(), C("div", {
    class: p(e.classes(e.n(), [e.variant, e.n("--variant")])),
    role: "switch",
    "aria-checked": e.modelValue
  }, [R("div", {
    ref: "switchRef",
    class: p(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.isActive, e.n("block--active")])),
    style: Z(e.styleComputed.switch),
    onClick: n[2] || (n[2] = (...i) => e.switchActive && e.switchActive(...i))
  }, [R("div", {
    style: Z(e.styleComputed.track),
    class: p(e.classes(e.n("track"), [e.isActive, e.n("track--active")], [e.errorMessage && !e.variant, e.n("track--error")]))
  }, null, 6), Re((g(), C("div", {
    class: p(e.classes(e.n("ripple"), [e.isActive, e.n("ripple--active")])),
    style: Z(e.styleComputed.ripple),
    tabindex: e.tabindex == null ? e.disabled || e.formDisabled ? void 0 : "0" : e.tabindex,
    onFocus: n[0] || (n[0] = (i) => e.isFocusing = !0),
    onBlur: n[1] || (n[1] = (i) => e.isFocusing = !1)
  }, [R("div", {
    style: Z(e.styleComputed.handle),
    class: p(e.classes(e.n("handle"), e.formatElevation(e.buttonElevation, 2), [e.isActive, e.n("handle--active")], [e.errorMessage && !e.variant, e.n("handle--error")], [e.hovering, e.n("handle--hover")]))
  }, [e.loading ? (g(), C("span", {
    key: 0,
    class: p(e.n("loading")),
    style: Z({
      width: e.radius,
      height: e.radius
    })
  }, [...n[3] || (n[3] = [R("svg", { viewBox: "25 25 50 50" }, [R("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })], -1)])], 6)) : X("v-if", !0)], 6), G(r, {
    hovering: e.hovering && !e.disabled && !e.formDisabled,
    focusing: e.isFocusing && !e.disabled && !e.formDisabled
  }, null, 8, ["hovering", "focusing"])], 46, O8)), [[t, { disabled: !e.ripple || e.disabled || e.loading || e.formDisabled || e.readonly || e.formReadonly }]])], 6), G(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 10, S8)), [[
    a,
    e.hover,
    "desktop"
  ]]);
}
var Bg = oe({
  name: k8,
  components: {
    VarFormDetails: En,
    VarHoverOverlay: Mn
  },
  directives: {
    Ripple: cn,
    Hover: Tn
  },
  props: Ig,
  setup(e) {
    const n = y(null), r = y(!1), { bindForm: o, form: t } = Ln(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = Rn(), { hovering: u, handleHovering: d } = Wn(), c = T(() => e.modelValue === e.activeValue), f = T(() => {
      const { size: O, color: I, closeColor: H, loadingColor: D, variant: A } = e;
      return {
        handle: {
          width: Bn(O),
          height: Bn(O),
          backgroundColor: c.value ? I : H,
          color: D
        },
        ripple: {
          left: c.value ? Bn(O, 0.5) : `-${Bn(O, A ? 1 / 3 : 0.5)}`,
          color: c.value ? I : H || "currentColor",
          width: Bn(O, 2),
          height: Bn(O, 2)
        },
        track: {
          width: Bn(O, A ? 13 / 6 : 1.9),
          height: Bn(O, A ? 4 / 3 : 0.72),
          borderRadius: Bn(O, 2 / 3),
          filter: c.value || a?.value ? void 0 : `brightness(${A ? 1 : 0.6})`,
          backgroundColor: c.value ? I : H,
          borderWidth: A && !c.value ? Bn(O, 1 / 12) : void 0
        },
        switch: {
          width: Bn(O, A ? 13 / 6 : 2),
          height: Bn(O, A ? 4 / 3 : 1.2)
        }
      };
    }), v = T(() => Bn(e.size, 0.8));
    k(o, {
      reset: z,
      validate: w,
      resetValidation: s
    }), je(() => window, "keydown", m), je(() => window, "keyup", h);
    function m(O) {
      r.value && ((O.key === " " || O.key === "Enter") && Fe(O), O.key === "Enter" && n.value.click());
    }
    function h(O) {
      !r.value || O.key !== " " || (Fe(O), n.value.click());
    }
    function w() {
      return l(e.rules, e.modelValue);
    }
    function $(O) {
      Ne(() => {
        const { validateTrigger: I, rules: H, modelValue: D } = e;
        i(I, O, H, D);
      });
    }
    function S(O) {
      const { onClick: I, onChange: H, disabled: D, loading: A, readonly: B, activeValue: E, inactiveValue: M, lazyChange: U, "onUpdate:modelValue": L, onBeforeChange: P } = e;
      if (D || t?.disabled.value || (k(I, O), A || B || t?.readonly.value)) return;
      const N = c.value ? M : E;
      U ? k(P, N, (ee) => {
        k(L, ee), $("onLazyChange");
      }) : (k(H, N), k(L, N), $("onChange"));
    }
    function b(O) {
      e.disabled || t?.disabled.value || d(O);
    }
    function z() {
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
      n: $8,
      classes: C8,
      formatElevation: hn,
      multiplySizeUnit: Bn,
      switchActive: S,
      hover: b
    };
  }
});
Bg.render = P8;
var el = Bg;
se(el);
ce(el, Ig);
var u7 = el, Ks = el, Dg = {
  name: [String, Number],
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: V()
}, Mg = /* @__PURE__ */ Symbol("TABS_BIND_TAB_KEY");
function z8() {
  const { childProviders: e, bindChildren: n, length: r } = $n(Mg);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function T8() {
  const { parentProvider: e, bindParent: n, index: r } = kn(Mg);
  return Yn(!!n, "Tab", "<var-tab/> must in <var-tabs/>"), {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var { name: E8, n: Mt, classes: I8 } = te("tab");
function B8(e, n) {
  const r = We("ripple");
  return Re((g(), C("div", {
    ref: "tabEl",
    class: p(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n(`--${e.itemDirection}`))),
    style: Z({ color: e.computeColorStyle() }),
    onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
  }, [F(e.$slots, "default")], 6)), [[r, { disabled: e.disabled || !e.ripple }]]);
}
var Ag = oe({
  name: E8,
  directives: { Ripple: cn },
  props: Dg,
  setup(e) {
    const n = y(null), r = T(() => n.value), o = T(() => e.name), t = T(() => e.disabled), { index: a, tabs: i, bindTabs: l } = T8(), { onTabClick: s, active: u, activeColor: d, inactiveColor: c, disabledColor: f, itemDirection: v, resize: m } = i, h = {
      name: o,
      index: a,
      disabled: t,
      element: r
    };
    l(h), me(() => [e.name, e.disabled], m);
    function w() {
      return e.name != null ? u.value === e.name : u.value === a?.value;
    }
    function $() {
      return e.disabled ? f.value : w() ? d.value : c.value;
    }
    function S() {
      return e.disabled ? Mt("$-tab--disabled") : w() ? Mt("$-tab--active") : Mt("$-tab--inactive");
    }
    function b(z) {
      const { disabled: O, name: I, onClick: H } = e;
      O || (k(H, I ?? a.value, z), s(h));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: c,
      itemDirection: v,
      n: Mt,
      classes: I8,
      computeColorStyle: $,
      computeColorClass: S,
      handleClick: b
    };
  }
});
Ag.render = B8;
var nl = Ag;
se(nl);
ce(nl, Dg);
var d7 = nl, qs = nl, Ng = { name: [String, Number] }, { name: D8, n: M8, classes: A8 } = te("tab-item");
function N8(e, n) {
  const r = ne("var-swipe-item");
  return g(), Ce(r, {
    class: p(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: pe(() => [F(e.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}
var Vg = oe({
  name: D8,
  components: { VarSwipeItem: Go },
  props: Ng,
  setup(e) {
    const n = y(!1), r = T(() => e.name), { index: o, bindTabsItems: t } = N6(), { bindLists: a } = V6(), i = {
      index: o,
      name: r,
      current: T(() => n.value),
      setCurrent: l
    };
    t(i), a(i);
    function l(s) {
      n.value = s;
    }
    return {
      current: n,
      n: M8,
      classes: A8
    };
  }
});
Vg.render = N8;
var rl = Vg;
se(rl);
ce(rl, Ng);
var c7 = rl, Xs = rl, Rg = {
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
}, { name: V8, n: R8, classes: L8 } = te("table");
function F8(e, n) {
  return g(), C("div", { class: p(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box"))) }, [R("div", {
    class: p(e.n("main")),
    style: Z({ "max-height": e.toSizeUnit(e.scrollerHeight) })
  }, [R("table", {
    class: p(e.n("table")),
    style: Z({ width: e.toSizeUnit(e.fullWidth) })
  }, [F(e.$slots, "default")], 6)], 6), e.$slots.footer ? (g(), C("div", {
    key: 0,
    class: p(e.n("footer"))
  }, [F(e.$slots, "footer")], 2)) : X("v-if", !0)], 2);
}
var Lg = oe({
  name: V8,
  props: Rg,
  setup: () => ({
    toSizeUnit: ze,
    n: R8,
    classes: L8,
    formatElevation: hn
  })
});
Lg.render = F8;
var ol = Lg;
se(ol);
ce(ol, Rg);
var f7 = ol, Gs = ol, Fg = {
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
  stickyCssMode: Me(Mo, "cssMode"),
  stickyZIndex: Me(Mo, "zIndex"),
  offsetTop: Me(Mo, "offsetTop"),
  onClick: V(),
  onChange: V(),
  "onUpdate:active": V()
}, wf = (e, n, r) => new Promise((o, t) => {
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
}), { name: U8, n: H8, classes: j8 } = te("tabs");
function Y8(e, n) {
  return g(), Ce(ho(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: pe(() => [R("div", Ye({
      class: e.classes(e.n(), e.n("$--box"), e.n(`--item-${e.itemDirection}`), e.n(`--layout-${e.layoutDirection}-padding`), e.formatElevation(e.elevation, 4), [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
      style: { background: e.color }
    }, e.$attrs), [R("div", {
      ref: "scrollerEl",
      class: p(e.classes(e.n("tab-wrap"), [e.localScrollable, e.n(`--layout-${e.layoutDirection}-scrollable`)], e.n(`--layout-${e.layoutDirection}`)))
    }, [F(e.$slots, "default"), R("div", {
      class: p(e.classes(e.n("indicator"), e.n(`--layout-${e.layoutDirection}${e.indicatorPosition}-indicator`))),
      style: Z({
        width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
        height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
        transform: e.layoutDirection === "horizontal" ? `translateX(${e.indicatorX})` : `translateY(${e.indicatorY})`
      })
    }, [R("div", {
      class: p(e.classes(e.n("indicator-inner"), e.n(`--layout-${e.layoutDirection}-indicator-inner`))),
      style: Z({ background: e.indicatorColor || e.activeColor })
    }, null, 6)], 6)], 2)], 16)]),
    _: 3
  }, 8, [
    "css-mode",
    "offset-top",
    "z-index"
  ]);
}
var Ug = oe({
  name: U8,
  components: { VarSticky: po },
  inheritAttrs: !1,
  props: Fg,
  setup(e) {
    const n = y("0px"), r = y("0px"), o = y("0px"), t = y("0px"), a = y(!1), i = y(null), l = T(() => e.active), s = T(() => e.activeColor), u = T(() => e.inactiveColor), d = T(() => e.disabledColor), c = T(() => e.itemDirection), f = y(null), v = T(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: m, bindTabList: h, length: w } = z8();
    h({
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: c,
      resize: D,
      onTabClick: $
    }), me(() => w.value, () => wf(null, null, function* () {
      yield On(), D();
    })), me(() => [e.active, e.scrollable], D), Vr(D), ar(D);
    function $(B) {
      var E;
      const M = (E = B.name.value) != null ? E : B.index.value, { active: U, onChange: L, onClick: P } = e;
      k(e["onUpdate:active"], M), k(P, M), M !== U && k(L, M);
    }
    function S() {
      return m.find(({ name: B }) => e.active === B.value);
    }
    function b(B) {
      return m.find(({ index: E }) => (B ?? e.active) === E.value);
    }
    function z() {
      if (w.value === 0) return;
      const { active: B } = e;
      if (zn(B)) {
        const E = un(B, 0, w.value - 1);
        return k(e["onUpdate:active"], E), b(E);
      }
    }
    function O() {
      a.value = e.scrollable === "always" || m.length >= 5;
    }
    function I({ element: B }) {
      const E = B.value;
      E && (e.layoutDirection === "horizontal" ? (n.value = `${E.offsetWidth}px`, o.value = `${E.offsetLeft}px`) : (r.value = `${E.offsetHeight}px`, t.value = `${E.offsetTop}px`));
    }
    function H({ element: B }) {
      if (!a.value) return;
      const E = i.value, M = B.value;
      e.layoutDirection === "horizontal" ? Lo(E, {
        left: M.offsetLeft + M.offsetWidth / 2 - E.offsetWidth / 2,
        animation: Ml
      }) : Lo(E, {
        top: M.offsetTop + M.offsetHeight / 2 - E.offsetHeight / 2,
        animation: Ml
      });
    }
    function D() {
      const B = S() || b() || z();
      !B || B.disabled.value || (O(), I(B), H(B));
    }
    function A() {
      return wf(this, null, function* () {
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
      toSizeUnit: ze,
      n: H8,
      classes: j8,
      resize: D,
      resizeSticky: A,
      formatElevation: hn
    };
  }
});
Ug.render = Y8;
var tl = Ug;
se(tl);
ce(tl, Fg);
var v7 = tl, Zs = tl, Hg = {
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
}, W8 = (e, n, r) => new Promise((o, t) => {
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
}), { name: K8, n: q8 } = te("tabs-items");
function X8(e, n) {
  const r = ne("var-swipe");
  return g(), Ce(r, {
    ref: "swipe",
    class: p(e.n()),
    loop: e.loop,
    duration: e.animated ? void 0 : 0,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: pe(() => [F(e.$slots, "default")]),
    _: 3
  }, 8, [
    "class",
    "loop",
    "duration",
    "touchable",
    "onChange"
  ]);
}
var jg = oe({
  name: K8,
  components: { VarSwipe: Xo },
  props: Hg,
  setup(e) {
    const n = y(null), { tabItemList: r, bindTabItem: o, length: t } = A6();
    o({}), me(() => e.active, s), me(() => t.value, () => W8(null, null, function* () {
      yield On(), s(e.active);
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
      n: q8,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
jg.render = X8;
var al = jg;
se(al);
ce(al, Hg);
var p7 = al, Js = al;
function Fu(e, n) {
  return Object.entries(e).reduce((r, [o, t]) => (r[o] = t.includes("px") ? t.replace(/(\d+(\.\d+)?)px/g, (a, i) => n(i)) : t, r), {});
}
var G8 = {
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
}, Q8 = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e",
  "--avatar-text-color": "#f5f5f5",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-hover-transform": "scale(1.1)"
}, x8 = { "--avatar-group-offset": "-10px" }, _8 = {
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px",
  "--back-top-button-border-radius": "50%"
}, e5 = {
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
}, n5 = {
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-background-color": "var(--color-surface-container-high)",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, r5 = {
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
}, o5 = {
  "--breadcrumb-inactive-color": "#aaa",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, t5 = {
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
}, a5 = {
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
}, i5 = {
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
}, l5 = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, s5 = {
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
}, u5 = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, d5 = {
  "--collapse-text-color": "#fff",
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, c5 = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, f5 = {
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
}, v5 = {
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
}, p5 = {
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
}, m5 = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, h5 = {
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
}, g5 = {
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
}, b5 = {
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
}, y5 = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, w5 = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, k5 = { "--icon-size": "20px" }, $5 = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, C5 = {
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
}, S5 = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, O5 = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, P5 = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, z5 = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, T5 = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, E5 = {
  "--menu-background-color": "#272727",
  "--menu-border-radius": "2px"
}, I5 = {
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
}, B5 = {
  "--menu-select-menu-background-color": "#272727",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0",
  "--menu-select-menu-border-radius": "2px"
}, D5 = {
  "--option-text-color": "#fff",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, M5 = {
  "--otp-input-gutter": "8px",
  "--otp-input-cell-height": "48px",
  "--otp-input-cell-max-width": "48px",
  "--otp-input-input-font-size": "20px"
}, A5 = { "--overlay-background-color": "rgba(0, 0, 0, 0.6)" }, N5 = {
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
}, V5 = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "4px"
}, R5 = {
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
}, L5 = {
  "--popup-content-background-color": "var(--color-surface-container-low)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, F5 = {
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
}, U5 = {
  "--pull-refresh-background": "#303030",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, H5 = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, j5 = {
  "--rate-color": "var(--color-text)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, Y5 = {
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
}, W5 = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, K5 = {
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
}, q5 = {
  "--signature-background-color": "var(--color-surface-container-highest)",
  "--signature-stroke-color": "#fff",
  "--signature-height": "200px",
  "--signature-border-radius": "4px"
}, X5 = {
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
}, G5 = {
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
}, Z5 = {
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
}, J5 = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, Q5 = {
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
}, x5 = {
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
}, _5 = {
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
}, eT = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, nT = {
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
}, rT = {
  "--tabs-background": "#1e1e1e",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, oT = {
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
}, tT = {
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
}, aT = {
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
}, iT = { "--watermark-content-color": "#ffffff" }, lT = Object.defineProperty, kf = Object.getOwnPropertySymbols, sT = Object.prototype.hasOwnProperty, uT = Object.prototype.propertyIsEnumerable, $f = (e, n, r) => n in e ? lT(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, we = (e, n) => {
  for (var r in n || (n = {})) sT.call(n, r) && $f(e, r, n[r]);
  if (kf)
    for (var r of kf(n)) uT.call(n, r) && $f(e, r, n[r]);
  return e;
}, dT = we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we(we({
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
}, t5), Z8), i5), a5), oT), v5), X5), rT), eT), L5), p5), G8), s5), e5), aT), d5), U5), _5), Q5), N5), nT), g5), H5), l5), m5), R5), J8), r5), E5), Y5), o5), Q8), O5), F5), D5), iT), B5), I5), x8), _8), n5), c5), f5), h5), b5), y5), w5), k5), $5), C5), S5), M5), P5), z5), T5), A5), V5), j5), W5), G5), Z5), J5), x5), tT), K5), u5), q5), cT = {
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
}, fT = {
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
}, vT = {
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
}, pT = {
  "--avatar-text-color": "#000",
  "--avatar-background-color": "var(--color-primary)",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-border": "2px solid #fff",
  "--avatar-hover-transform": "scale(1.1)"
}, mT = { "--avatar-group-offset": "-10px" }, hT = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, gT = {
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
}, bT = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, yT = {
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
}, wT = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, kT = {
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
}, $T = {
  "--card-border-radius": "12px",
  "--card-background": "var(--color-surface-container-highest)",
  "--card-surface-low-background": "#1c1b1d",
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
}, CT = {
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
}, ST = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, OT = {
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
}, PT = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, zT = {
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-text-color": "var(--color-inverse-surface)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, TT = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, ET = {
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
}, IT = {
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
}, BT = {
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
}, DT = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, MT = {
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
}, AT = {
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
}, NT = {
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
}, VT = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, RT = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, LT = { "--icon-size": "20px" }, FT = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, UT = {
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
}, HT = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, jT = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, YT = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, WT = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, KT = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, qT = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, XT = {
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
}, GT = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, ZT = {
  "--option-text-color": "var(--color-inverse-surface)",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, JT = {
  "--otp-input-gutter": "8px",
  "--otp-input-cell-height": "48px",
  "--otp-input-cell-max-width": "48px",
  "--otp-input-input-font-size": "20px"
}, QT = { "--overlay-background-color": "rgba(0, 0, 0, 0.6)" }, xT = {
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
}, _T = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-surface-low-background": "#1c1b1d",
  "--paper-border-radius": "12px"
}, eE = {
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
}, nE = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, rE = {
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
}, oE = {
  "--pull-refresh-background": "var(--color-surface-container-highest)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, tE = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, aE = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, iE = {
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
}, lE = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, sE = {
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
}, uE = {
  "--signature-background-color": "var(--color-surface-container-highest)",
  "--signature-stroke-color": "var(--color-inverse-surface)",
  "--signature-height": "200px",
  "--signature-border-radius": "12px"
}, dE = {
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
}, cE = {
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
}, fE = {
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
}, vE = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, pE = {
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
}, mE = {
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
}, hE = {
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
}, gE = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, bE = {
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
}, yE = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, wE = {
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
}, kE = {
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
}, $E = {
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
}, CE = { "--watermark-content-color": "#ffffff" }, SE = Object.defineProperty, Cf = Object.getOwnPropertySymbols, OE = Object.prototype.hasOwnProperty, PE = Object.prototype.propertyIsEnumerable, Sf = (e, n, r) => n in e ? SE(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, ke = (e, n) => {
  for (var r in n || (n = {})) OE.call(n, r) && Sf(e, r, n[r]);
  if (Cf)
    for (var r of Cf(n)) PE.call(n, r) && Sf(e, r, n[r]);
  return e;
}, zE = ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke({
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
}, kT), fT), RT), qT), GT), XT), MT), wT), jT), CT), _T), pT), AT), ST), tE), $T), OT), gT), kE), rE), yE), gE), pE), DT), bE), xT), CE), zT), iE), vT), bT), yT), fE), cT), BT), oE), nE), eE), NT), hT), sE), ZT), ET), hE), cE), $E), wE), IT), aE), dE), mT), TT), VT), LT), FT), UT), HT), JT), YT), WT), KT), QT), lE), vE), mE), PT), uE), TE = {
  "--action-sheet-background": "var(--color-surface-container-high)",
  "--action-sheet-title-color": "var(--color-on-surface-variant)",
  "--action-sheet-action-item-color": "#1D1B20",
  "--action-sheet-border-radius": "0px"
}, EE = {
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
}, IE = {
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
}, BE = {
  "--avatar-text-color": "#fff",
  "--avatar-background-color": "var(--color-primary)"
}, DE = { "--avatar-group-offset": "-10px" }, ME = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, AE = {
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
}, NE = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-fab-border-radius": "12px",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px"
}, VE = {
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
}, RE = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, LE = {
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
}, FE = {
  "--card-border-radius": "12px",
  "--card-background": "var(--color-surface-container-low)",
  "--card-surface-low-background": "var(--color-surface-container-low)",
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
}, UE = {
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
}, HE = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, jE = {
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
}, YE = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, WE = {
  "--collapse-background": "var(--color-surface-container-low)",
  "--collapse-text-color": "#1D1B20",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, KE = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, qE = {
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
}, XE = {
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
}, GE = {
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
}, ZE = {
  "--divider-color": "var(--color-outline)",
  "--divider-text-color": "#888",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, JE = {
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
}, QE = {
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
}, xE = {
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
}, _E = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, eI = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, nI = { "--icon-size": "20px" }, rI = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, oI = {
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
}, tI = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, aI = {
  "--link-default-color": "#000",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, iI = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, lI = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, sI = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, uI = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, dI = {
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
}, cI = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, fI = {
  "--option-text-color": "#1D1B20",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, vI = {
  "--otp-input-gutter": "8px",
  "--otp-input-cell-height": "48px",
  "--otp-input-cell-max-width": "48px",
  "--otp-input-input-font-size": "20px"
}, pI = { "--overlay-background-color": "rgba(0, 0, 0, 0.6)" }, mI = {
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
}, hI = {
  "--paper-background": "var(--color-surface-container-low)",
  "--paper-surface-low-background": "var(--color-surface-container-low)",
  "--paper-border-radius": "12px"
}, gI = {
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
}, bI = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, yI = {
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
}, wI = {
  "--pull-refresh-background": "var(--color-body)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, kI = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, $I = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, CI = {
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
}, SI = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, OI = {
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
}, PI = {
  "--signature-background-color": "var(--color-surface-container-low)",
  "--signature-stroke-color": "#1D1B20",
  "--signature-height": "200px",
  "--signature-border-radius": "12px"
}, zI = {
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
}, TI = {
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
}, EI = {
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
}, II = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, BI = {
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
}, DI = {
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
}, MI = {
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
}, AI = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, NI = {
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
}, VI = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, RI = {
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
}, LI = {
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
}, FI = {
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
}, UI = { "--watermark-content-color": "#808080" }, HI = Object.defineProperty, Of = Object.getOwnPropertySymbols, jI = Object.prototype.hasOwnProperty, YI = Object.prototype.propertyIsEnumerable, Pf = (e, n, r) => n in e ? HI(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, $e = (e, n) => {
  for (var r in n || (n = {})) jI.call(n, r) && Pf(e, r, n[r]);
  if (Of)
    for (var r of Of(n)) YI.call(n, r) && Pf(e, r, n[r]);
  return e;
}, WI = $e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e({
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
}, LE), EE), eI), uI), cI), dI), JE), RE), aI), UE), hI), BE), QE), HE), kI), FE), jE), LI), VI), AI), NI), WE), CI), NE), VE), EI), TE), GE), wI), bI), gI), xE), ME), OI), fI), TI), FI), RI), XE), MI), $I), DE), AE), KE), qE), ZE), _E), nI), rI), oI), tI), vI), iI), lI), sI), pI), mI), yI), SI), zI), II), BI), DI), UI), IE), YE), PI);
function KI(e, n = {}) {
  const { rootFontSize: r = 16, unitPrecision: o = 6 } = n;
  return Fu(e, (t) => `${Number((t / r).toFixed(o))}rem`);
}
function qI(e, n = {}) {
  const { viewportWidth: r = 375, viewportUnit: o = "vmin", unitPrecision: t = 6 } = n;
  return Fu(e, (a) => `${Number((a / r * 100).toFixed(t))}${o}`);
}
var XI = {
  dark: dT,
  md3Light: WI,
  md3Dark: zE,
  toViewport: qI,
  toRem: KI,
  convert: Fu
}, m7 = null, Qs = XI, Gn = [
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
], Dn = [
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
], zf = [
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
], Yg = {
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
}, Wg = (e, n) => e === "24hr" || n === "am", Uu = (e, n, r) => {
  const o = Gn.findIndex((a) => j(a) === j(r)), t = Wg(e, n) ? r : Dn[o];
  return {
    hourStr: t,
    hourNum: j(t)
  };
}, Nn = (e) => {
  const [n, r, o] = e.split(":");
  return {
    hour: j(n),
    minute: j(r),
    second: j(o)
  };
}, Kg = (e) => {
  var n, r;
  const { time: o, format: t, ampm: a, hour: i, max: l, min: s, disableHour: u } = e, { hourStr: d, hourNum: c } = Uu(t, a, i);
  let f = !1, v = !1;
  if (u.includes(d)) return !0;
  if (l && !s) {
    const { hour: m, minute: h } = Nn(l);
    f = m === c && o > h;
  }
  if (!l && s) {
    const { hour: m, minute: h } = Nn(s);
    f = m === c && o < h;
  }
  if (l && s) {
    const { hour: m, minute: h } = Nn(l), { hour: w, minute: $ } = Nn(s);
    f = w === c && o < $ || m === c && o > h;
  }
  return (n = e.allowedTime) != null && n.minutes && (v = (r = e.allowedTime) == null ? void 0 : r.minutes(o)), f || v;
}, qg = (e) => {
  var n, r;
  const { time: o, format: t, ampm: a, hour: i, minute: l, max: s, min: u, disableHour: d } = e, { hourStr: c, hourNum: f } = Uu(t, a, i);
  let v = !1, m = !1;
  if (d.includes(c)) return !0;
  if (s && !u) {
    const { hour: h, minute: w, second: $ } = Nn(s);
    v = h === f && w < l || w === l && o > $;
  }
  if (!s && u) {
    const { hour: h, minute: w, second: $ } = Nn(u);
    v = h === f && w > l || w === l && o > $;
  }
  if (s && u) {
    const { hour: h, minute: w, second: $ } = Nn(s), { hour: S, minute: b, second: z } = Nn(u);
    v = h === f && w < l || S === f && b > l || h === f && w === l && o > $ || S === f && b === l && o < z;
  }
  return (n = e.allowedTime) != null && n.seconds && (m = (r = e.allowedTime) == null ? void 0 : r.seconds(o)), v || m;
}, { n: GI, classes: ZI } = te("time-picker");
function JI(e, n) {
  return g(), C("div", { class: p(e.n("clock")) }, [
    R("div", {
      class: p(e.n("clock-hand")),
      style: Z(e.handStyle)
    }, null, 6),
    (g(!0), C(De, null, qe(e.timeScales, (r, o) => (g(), C("div", {
      key: r,
      class: p(e.classes(e.n("clock-item"), [e.isActive(o, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
      style: Z(e.getStyle(o, r, !1))
    }, fe(r), 7))), 128)),
    e.format === "24hr" && e.type === "hour" ? (g(), C("div", {
      key: 0,
      ref: "inner",
      class: p(e.n("clock-inner"))
    }, [(g(!0), C(De, null, qe(e.hours24, (r, o) => (g(), C("div", {
      key: r,
      class: p(e.classes(e.n("clock-item"), [e.isActive(o, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
      style: Z(e.getStyle(o, r, !0))
    }, fe(r), 7))), 128))], 2)) : X("v-if", !0)
  ], 2);
}
var Xg = oe({
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
    const r = y(null), o = y([]), t = y([]), a = T(() => ({
      transform: `rotate(${j(e.rad)}deg)`,
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: u(),
      borderColor: u()
    })), i = T(() => {
      if (e.rad === void 0) return;
      const h = e.rad / 30;
      return h >= 0 ? h : h + 12;
    }), l = T(() => e.type === "hour" ? Gn : zf), s = (h, w) => {
      h = h ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const $ = e.type === "minute" ? Kg : qg, S = {
        time: j(h),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: j(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: o.value
      };
      return w && e.type === "minute" && Reflect.deleteProperty(S, "minute"), $(S);
    }, u = () => {
      if (i.value === void 0) return e.color;
      const h = e.isInner ? Dn[i.value] : l.value[i.value];
      return l.value === zf ? s() ? "var(--time-picker-clock-item-disable-background)" : e.color : c(h) ? "var(--time-picker-clock-item-disable-background)" : e.color;
    }, d = (h, w) => w ? i.value === h && e.isInner : i.value === h && (!e.isInner || e.type !== "hour"), c = (h) => {
      if (e.type === "hour") {
        if (Wg(e.format, e.ampm)) return o.value.includes(h);
        const w = Gn.findIndex(($) => $ === h);
        return t.value.includes(w);
      }
      return s(h, !0);
    }, f = (h, w, $) => {
      const S = 2 * Math.PI / 12 * h - Math.PI / 2, b = 50 * (1 + Math.cos(S)), z = 50 * (1 + Math.sin(S)), O = () => d(h, $) ? c(w) ? {
        backgroundColor: "var(--time-picker-clock-item-disable-background)",
        color: "var(--time-picker-clock-item-disable-color)"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, { backgroundColor: I, color: H } = O();
      return {
        left: `${b}%`,
        top: `${z}%`,
        backgroundColor: I,
        color: H
      };
    }, v = () => {
      const { width: h, height: w } = tn(r.value);
      return {
        width: h,
        height: w
      };
    }, m = () => {
      if (i.value !== void 0)
        return Jr((e.ampm === "am" ? Gn : Dn)[i.value], 2, "0");
    };
    return me([i, () => e.isInner], ([h, w], [$, S]) => {
      if (h === $ && w === S || e.type !== "hour" || i.value === void 0) return;
      const b = w ? Dn[i.value] : m(), z = e.useSeconds ? `:${e.time.second}` : "", O = `${b}:${e.time.minute}${z}`;
      e.preventNextUpdate || n("update", O), n("change-prevent-update");
    }), me(() => e.rad, (h, w) => {
      if (e.type === "hour" || h === void 0 || w === void 0) return;
      const $ = h / 6 >= 0 ? h / 6 : h / 6 + 60;
      if ($ === (w / 6 >= 0 ? w / 6 : w / 6 + 60)) return;
      let S;
      const { hourStr: b } = Uu(e.format, e.ampm, e.time.hour);
      if (e.type === "minute" && (S = `${b}:${de().minute($).format("mm")}${e.useSeconds ? `:${e.time.second}` : ""}`), e.type === "second") {
        const z = de().second($).format("ss"), O = e.useSeconds ? `:${z}` : "";
        S = `${b}:${e.time.minute}${O}`;
      }
      n("update", S);
    }), me([
      () => e.max,
      () => e.min,
      () => e.allowedTime
    ], ([h, w, $]) => {
      if (o.value = [], h && !w) {
        const { hour: S } = Nn(h), b = Gn.filter((O) => j(O) > S), z = Dn.filter((O) => j(O) > S);
        o.value = [...b, ...z];
      }
      if (!h && w) {
        const { hour: S } = Nn(w), b = Gn.filter((O) => j(O) < S), z = Dn.filter((O) => j(O) < S);
        o.value = [...b, ...z];
      }
      if (h && w) {
        const { hour: S } = Nn(h), { hour: b } = Nn(w), z = Gn.filter((I) => j(I) < b || j(I) > S), O = Dn.filter((I) => j(I) < b || j(I) > S);
        o.value = [...z, ...O];
      }
      if ($?.hours) {
        const { hours: S } = $, b = Gn.filter((O) => !S(j(O))), z = Dn.filter((O) => !S(j(O)));
        o.value = [.../* @__PURE__ */ new Set([
          ...o.value,
          ...b,
          ...z
        ])];
      }
      t.value = o.value.map((S) => Dn.findIndex((b) => S === b)).filter((S) => S >= 0);
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: GI,
      classes: ZI,
      hours24: Dn,
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
Xg.render = JI;
var QI = Xg, { name: xI, n: _I, classes: eB } = te("time-picker");
function nB(e, n) {
  var r;
  const o = ne("clock");
  return g(), C("div", {
    ref: "picker",
    class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
  }, [
    R("div", {
      class: p(e.n("title")),
      style: Z({ background: e.titleColor || e.color })
    }, [R("div", { class: p(e.n("title-hint")) }, fe((r = e.hint) != null ? r : (e.pt ? e.pt : e.t)("timePickerHint")), 3), R("div", { class: p(e.n("title-time-container")) }, [R("div", { class: p(e.n("title-time")) }, [
      R("div", {
        class: p(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
        onClick: n[0] || (n[0] = (t) => e.checkPanel("hour"))
      }, fe(e.time.hour), 3),
      R("span", { class: p(e.n("title-splitter")) }, ":", 2),
      R("div", {
        class: p(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
        onClick: n[1] || (n[1] = (t) => e.checkPanel("minute"))
      }, fe(e.time.minute), 3),
      e.useSeconds ? (g(), C("span", {
        key: 0,
        class: p(e.n("title-splitter"))
      }, ":", 2)) : X("v-if", !0),
      e.useSeconds ? (g(), C("div", {
        key: 1,
        class: p(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
        onClick: n[2] || (n[2] = (t) => e.checkPanel("second"))
      }, fe(e.time.second), 3)) : X("v-if", !0)
    ], 2), e.format === "ampm" ? (g(), C("div", {
      key: 0,
      class: p(e.n("title-ampm"))
    }, [R("div", {
      class: p(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
      onClick: n[3] || (n[3] = (t) => e.checkAmpm("am"))
    }, " AM ", 2), R("div", {
      class: p(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
      onClick: n[4] || (n[4] = (t) => e.checkAmpm("pm"))
    }, " PM ", 2)], 2)) : X("v-if", !0)], 2)], 6),
    R("div", { class: p(e.n("body")) }, [R("div", {
      ref: "container",
      class: p(e.n("clock-container")),
      onTouchstart: n[5] || (n[5] = (...t) => e.moveHand && e.moveHand(...t)),
      onTouchmove: n[6] || (n[6] = (...t) => e.moveHand && e.moveHand(...t)),
      onTouchend: n[7] || (n[7] = (...t) => e.end && e.end(...t))
    }, [G(en, { name: `${e.n()}-panel-fade` }, {
      default: pe(() => [(g(), Ce(o, {
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
    e.$slots.actions ? (g(), C("div", {
      key: 0,
      class: p(e.n("actions"))
    }, [F(e.$slots, "actions")], 2)) : X("v-if", !0)
  ], 2);
}
var Gg = oe({
  name: xI,
  components: { Clock: QI },
  props: Yg,
  setup(e) {
    const n = y(null), r = y(null), o = y(null), t = y(!1), a = y(!1), i = y(!1), l = y(!1), s = y(!1), u = y(!1), d = y(!1), c = y(0), f = y(0), v = y(), m = y("hour"), h = y("am"), w = y({
      hour: "00",
      minute: "00",
      second: "00"
    }), $ = nn({
      x: 0,
      y: 0
    }), S = nn({
      x: [],
      y: []
    }), b = T(() => m.value === "hour" ? v.value : m.value === "minute" ? c.value : f.value), { t: z } = ir();
    me(() => e.modelValue, (K) => {
      if (K === void 0 || K === "") {
        O();
        return;
      }
      const { hour: x, minute: ue, second: he } = Nn(K), W = de().hour(x).format("hh"), ie = de().hour(x).format("HH"), Pe = de().minute(ue).format("mm"), Le = de().second(he).format("ss");
      v.value = (W === "12" ? 0 : j(W)) * 30, c.value = j(Pe) * 6, f.value = j(Le) * 6, w.value = M(K), e.format !== "24hr" && (h.value = Jr(`${x}`, 2, "0") === ie && Dn.includes(ie) ? "pm" : "am"), t.value = e.format === "24hr" && Dn.includes(ie);
    }, { immediate: !0 });
    function O() {
      v.value = void 0, c.value = 0, f.value = 0, w.value = {
        hour: "00",
        minute: "00",
        second: "00"
      }, h.value = "am";
    }
    function I(K) {
      k(e["onUpdate:modelValue"], K), k(e.onChange, K);
    }
    function H(K) {
      return K * 57.29577951308232;
    }
    function D(K) {
      l.value = !1, d.value = !1, m.value = K;
    }
    function A(K) {
      const { disableHour: x } = o.value, ue = Gn.findIndex((W) => j(W) === j(w.value.hour)), he = K === "am" ? Gn : Dn;
      return [...he.slice(ue), ...he.slice(0, ue)].find((W, ie) => (a.value = ie !== 0, !x.includes(W)));
    }
    function B(K) {
      if (e.readonly) return;
      h.value = K;
      const x = A(K);
      if (!x) return;
      const ue = e.useSeconds ? `:${w.value.second}` : "";
      I(`${Jr(x, 2, "0")}:${w.value.minute}${ue}`);
    }
    function E(K, x) {
      const ue = K >= S.x[0] && K <= S.x[1], he = x >= S.y[0] && x <= S.y[1];
      return ue && he;
    }
    function M(K) {
      const x = e.format === "24hr" ? "HH" : "hh", { hour: ue, minute: he, second: W } = Nn(K);
      return {
        hour: de().hour(ue).format(x),
        minute: de().minute(he).format("mm"),
        second: de().second(W).format("ss")
      };
    }
    function U(K) {
      const x = K / 30;
      return x >= 0 ? x : x + 12;
    }
    function L() {
      const { width: K, height: x } = o.value.getSize();
      return {
        rangeXMin: $.x - K / 2 - 8,
        rangeXMax: $.x + K / 2 + 8,
        rangeYMin: $.y - x / 2 - 8,
        rangeYMax: $.y + x / 2 + 8
      };
    }
    function P(K, x, ue) {
      const { disableHour: he } = o.value;
      i.value = E(K, x);
      const W = Math.round(ue / 30) * 30 + 90, ie = U(W), Pe = t.value ? Gn[ie] : Dn[ie];
      if (he.includes(Pe) || (t.value = e.format === "24hr" ? E(K, x) : !1), t.value !== i.value) return;
      const Le = t.value || h.value === "pm" ? Dn[ie] : Gn[ie];
      u.value = he.includes(Le), !u.value && (v.value = W, l.value = !0);
    }
    function N(K) {
      const { disableHour: x } = o.value, ue = Math.round(K / 6) * 6 + 90;
      d.value = Kg({
        time: ue / 6 >= 0 ? ue / 6 : ue / 6 + 60,
        format: e.format,
        ampm: h.value,
        hour: w.value.hour,
        max: e.max,
        min: e.min,
        disableHour: x,
        allowedTime: e.allowedTime
      }), !d.value && (c.value = ue, s.value = !0);
    }
    function ee(K) {
      const { disableHour: x } = o.value, ue = Math.round(K / 6) * 6 + 90;
      qg({
        time: ue / 6 >= 0 ? ue / 6 : ue / 6 + 60,
        format: e.format,
        ampm: h.value,
        hour: w.value.hour,
        minute: j(w.value.minute),
        max: e.max,
        min: e.min,
        disableHour: x,
        allowedTime: e.allowedTime
      }) || (f.value = ue);
    }
    function Q() {
      const { left: K, top: x, width: ue, height: he } = tn(n.value);
      if ($.x = K + ue / 2, $.y = x + he / 2, m.value === "hour" && e.format === "24hr") {
        const { rangeXMin: W, rangeXMax: ie, rangeYMin: Pe, rangeYMax: Le } = L();
        S.x = [W, ie], S.y = [Pe, Le];
      }
    }
    function ae(K) {
      if (Fe(K), e.readonly) return;
      Q();
      const { clientX: x, clientY: ue } = K.touches[0], he = x - $.x, W = ue - $.y, ie = Math.round(H(Math.atan2(W, he)));
      m.value === "hour" ? P(x, ue, ie) : m.value === "minute" ? N(ie) : ee(ie);
    }
    function Oe() {
      if (!e.readonly) {
        if (m.value === "hour" && l.value) {
          m.value = "minute";
          return;
        }
        m.value === "minute" && e.useSeconds && s.value && (m.value = "second");
      }
    }
    function le() {
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
      n: _I,
      classes: eB,
      t: sn,
      pt: z,
      moveHand: ae,
      checkPanel: D,
      checkAmpm: B,
      end: Oe,
      update: I,
      changePreventUpdate: le,
      formatElevation: hn
    };
  }
});
Gg.render = nB;
var il = Gg;
se(il);
ce(il, Yg);
var h7 = il, xs = il, Zg = {
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
}, At = (e, n, r) => new Promise((o, t) => {
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
}), { name: rB, n: oB, classes: tB } = te("uploader"), aB = 0, iB = ["onClick"], lB = ["onClick"], sB = ["src", "alt"], uB = ["tabindex"], dB = [
  "multiple",
  "accept",
  "capture",
  "disabled"
], cB = ["src"];
function fB(e, n) {
  const r = ne("var-icon"), o = ne("var-hover-overlay"), t = ne("var-form-details"), a = ne("var-popup"), i = We("ripple"), l = We("hover");
  return g(), C("div", { class: p(e.classes(e.n(), e.n("$--box"))) }, [
    R("div", { class: p(e.n("file-list")) }, [(g(!0), C(De, null, qe(e.files, (s) => Re((g(), C("div", {
      key: s.id,
      class: p(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
      onClick: (u) => e.preview(s)
    }, [
      R("div", { class: p(e.n("file-name")) }, fe(s.name || s.url), 3),
      e.removable ? F(e.$slots, "remove-button", {
        key: 0,
        remove: () => {
          e.handleRemove(s);
        }
      }, () => [R("div", {
        class: p(e.n("file-close")),
        onClick: jn((u) => e.handleRemove(s), ["stop"])
      }, [G(r, {
        class: p(e.n("file-close-icon")),
        "var-uploader-cover": "",
        name: "delete"
      }, null, 8, ["class"])], 10, lB)]) : X("v-if", !0),
      s.cover ? (g(), C("img", {
        key: 1,
        role: "img",
        class: p(e.n("file-cover")),
        style: Z({ objectFit: s.fit }),
        src: s.cover,
        alt: s.name
      }, null, 14, sB)) : X("v-if", !0),
      R("div", { class: p(e.n("file-indicator")) }, [R("div", {
        class: p(e.classes(e.n("progress"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")])),
        style: Z({ width: s.state === "success" || s.state === "error" ? "100%" : `${s.progress}%` })
      }, null, 6)], 2)
    ], 10, iB)), [[i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple }]])), 128)), !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Re((g(), C("div", {
      key: 0,
      ref: "actionRef",
      class: p(e.classes(e.n("--outline-none"), [!e.$slots.default, `${e.n("action")} ${e.formatElevation(e.elevation, 2)}`], [e.disabled || e.formDisabled, e.n("--disabled")])),
      tabindex: e.disabled || e.formDisabled ? void 0 : "0",
      onClick: n[2] || (n[2] = (...s) => e.handleActionClick && e.handleActionClick(...s)),
      onFocus: n[3] || (n[3] = (s) => e.isFocusing = !0),
      onBlur: n[4] || (n[4] = (s) => e.isFocusing = !1)
    }, [R("input", {
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
    }, null, 42, dB), F(e.$slots, "default", {}, () => [G(r, {
      class: p(e.n("action-icon")),
      "var-uploader-cover": "",
      name: "plus"
    }, null, 8, ["class"]), G(o, {
      hovering: e.hovering && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly,
      focusing: e.isFocusing && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly
    }, null, 8, ["hovering", "focusing"])])], 42, uB)), [[i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || !!e.$slots.default }], [
      l,
      e.handleHovering,
      "desktop"
    ]]) : X("v-if", !0)], 2),
    G(t, {
      "error-message": e.errorMessage,
      "extra-message": e.maxlengthText
    }, Xr({ _: 2 }, [e.$slots["extra-message"] ? {
      name: "extra-message",
      fn: pe(() => [F(e.$slots, "extra-message")]),
      key: "0"
    } : void 0]), 1032, ["error-message", "extra-message"]),
    G(a, {
      show: e.showPreview,
      "onUpdate:show": n[5] || (n[5] = (s) => e.showPreview = s),
      class: p(e.n("preview")),
      "var-uploader-cover": "",
      position: "center",
      onClosed: n[6] || (n[6] = (s) => e.currentPreview = null)
    }, {
      default: pe(() => {
        var s, u;
        return [e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (g(), C("video", {
          key: 0,
          class: p(e.n("preview-video")),
          playsinline: "true",
          "webkit-playsinline": "true",
          "x5-playsinline": "true",
          "x5-video-player-type": "h5",
          "x5-video-player-fullscreen": "false",
          controls: "",
          src: (u = e.currentPreview) == null ? void 0 : u.url
        }, null, 10, cB)) : X("v-if", !0)];
      }),
      _: 1
    }, 8, ["show", "class"])
  ], 2);
}
var Jg = oe({
  name: rB,
  directives: {
    Ripple: cn,
    Hover: Tn
  },
  components: {
    VarIcon: Je,
    VarPopup: Mr,
    VarFormDetails: En,
    VarHoverOverlay: Mn
  },
  props: Zg,
  setup(e) {
    const n = y(!1), r = y(null), o = y(null), t = y(!1), a = y(null), i = T(() => {
      const { maxlength: le, modelValue: { length: K } } = e;
      return zn(le) ? `${K} / ${le}` : "";
    }), { form: l, bindForm: s } = Ln(), { errorMessage: u, validateWithTrigger: d, validate: c, resetValidation: f } = Rn(), { hovering: v, handleHovering: m } = Wn(), h = T(() => {
      const { modelValue: le, hideList: K } = e;
      return K ? [] : le;
    });
    let w = !1;
    const $ = {
      getSuccess: U,
      getError: L,
      getLoading: P
    };
    k(s, {
      validate: ae,
      resetValidation: f,
      reset: Oe
    }), je(() => window, "keydown", S), je(() => window, "keyup", b), me(() => e.modelValue, () => {
      !w && Q("onChange"), w = !1;
    }, { deep: !0 });
    function S(le) {
      n.value && ((le.key === " " || le.key === "Enter") && le.preventDefault(), le.key === "Enter" && r.value.click());
    }
    function b(le) {
      !n.value || le.key !== " " || (le.preventDefault(), r.value.click());
    }
    function z(le) {
      const { disabled: K, previewed: x, preventDefaultPreview: ue, onPreview: he } = e;
      if (l?.disabled.value || K || !x || (k(he, nn(le)), ue)) return;
      const { url: W } = le;
      if (Ld(W)) {
        Zo(W);
        return;
      }
      Fd(W) && (a.value = le, t.value = !0);
    }
    function O(le) {
      return {
        id: aB++,
        url: "",
        cover: "",
        name: le.name,
        file: le,
        progress: 0
      };
    }
    function I(le) {
      const { files: K } = le.target;
      return Array.from(K);
    }
    function H(le) {
      return At(this, null, function* () {
        const K = le.file;
        if (e.resolveType === "default" && K.type.startsWith("image") || e.resolveType === "data-url") {
          const x = yield nv(K);
          le.cover = x, le.url = x;
        }
        return le;
      });
    }
    function D(le) {
      return le.map(H);
    }
    function A(le) {
      const { onBeforeRead: K } = e;
      return le.map((x) => new Promise((ue) => {
        K || ue({
          valid: !0,
          varFile: x
        });
        const he = hr(k(K, nn(x)));
        Promise.all(he).then((W) => {
          ue({
            valid: W.every(Boolean),
            varFile: x
          });
        });
      }));
    }
    function B(le) {
      return At(this, null, function* () {
        const { maxsize: K, maxlength: x, modelValue: ue, onOversize: he, onAfterRead: W, onBeforeFilter: ie, readonly: Pe, disabled: Le } = e;
        if (l?.disabled.value || l?.readonly.value || Le || Pe) return;
        const Ke = (Y) => Y.filter((_) => _.file.size > j(K) ? (k(he, nn(_)), !1) : !0), Ve = (Y) => {
          const _ = Math.min(Y.length, j(x) - ue.length);
          return Y.slice(0, _);
        }, ln = (Y) => At(null, null, function* () {
          if (!ie) return Y;
          const _ = hr(ie);
          for (const be of _) Y = yield be(Y);
          return Y;
        });
        let Qe = I(le).map(O);
        Qe = yield ln(Qe), Qe = K != null ? Ke(Qe) : Qe, Qe = x != null ? Ve(Qe) : Qe;
        const ge = yield Promise.all(D(Qe)), q = (yield Promise.all(A(ge))).filter(({ valid: Y }) => Y).map(({ varFile: Y }) => Y);
        k(e["onUpdate:modelValue"], [...ue, ...q]), le.target.value = "", q.forEach((Y) => k(W, nn(Y)));
      });
    }
    function E(le) {
      return At(this, null, function* () {
        const { disabled: K, readonly: x, modelValue: ue, onBeforeRemove: he, onRemove: W } = e;
        if (l?.disabled.value || l?.readonly.value || K || x) return;
        if (he) {
          const Pe = hr(k(he, nn(le)));
          if ((yield Promise.all(Pe)).some((Le) => !Le)) return;
        }
        const ie = ue.filter((Pe) => Pe !== le);
        k(W, nn(le)), Q("onRemove"), k(e["onUpdate:modelValue"], ie);
      });
    }
    function M(le) {
      if (!(l?.disabled.value || e.disabled)) {
        if (e.onClickAction) {
          k(e.onClickAction, N, le);
          return;
        }
        N();
      }
    }
    function U() {
      return e.modelValue.filter((le) => le.state === "success");
    }
    function L() {
      return e.modelValue.filter((le) => le.state === "error");
    }
    function P() {
      return e.modelValue.filter((le) => le.state === "loading");
    }
    function N() {
      o.value.click();
    }
    function ee() {
      a.value = null, t.value = !1, Zo.close();
    }
    function Q(le) {
      Ne(() => {
        const { validateTrigger: K, rules: x, modelValue: ue } = e;
        d(K, le, x, ue, $);
      });
    }
    function ae() {
      return c(e.rules, e.modelValue, $);
    }
    function Oe() {
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
      n: oB,
      classes: tB,
      formatElevation: hn,
      toNumber: j,
      handleHovering: m,
      isHTMLSupportVideo: Fd,
      isHTMLSupportImage: Ld,
      preview: z,
      handleChange: B,
      handleRemove: E,
      getSuccess: U,
      getError: L,
      getLoading: P,
      validate: ae,
      resetValidation: f,
      reset: Oe,
      chooseFile: N,
      closePreview: ee,
      handleActionClick: M,
      toSizeUnit: ze
    };
  }
});
Jg.render = fB;
var ll = Jg;
se(ll);
ce(ll, Zg);
var g7 = ll, _s = ll, Qg = {
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
}, vB = Object.defineProperty, pB = Object.defineProperties, mB = Object.getOwnPropertyDescriptors, Tf = Object.getOwnPropertySymbols, hB = Object.prototype.hasOwnProperty, gB = Object.prototype.propertyIsEnumerable, Ef = (e, n, r) => n in e ? vB(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, bB = (e, n) => {
  for (var r in n || (n = {})) hB.call(n, r) && Ef(e, r, n[r]);
  if (Tf)
    for (var r of Tf(n)) gB.call(n, r) && Ef(e, r, n[r]);
  return e;
}, yB = (e, n) => pB(e, mB(n)), wB = (e, n, r) => new Promise((o, t) => {
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
}), { name: kB, n: $B, classes: CB } = te("watermark"), SB = { ref: "svgRef" }, OB = [
  "viewBox",
  "width",
  "height"
], PB = ["width", "height"], zB = [
  "href",
  "xlink:href",
  "x",
  "y",
  "width",
  "height"
];
function TB(e, n) {
  return g(), C("div", { class: p(e.n()) }, [F(e.$slots, "default"), (g(), Ce(cr, {
    to: "body",
    disabled: !e.fullscreen
  }, [R("div", {
    ref: "containerRef",
    class: p(e.classes(e.n("container"), [e.fullscreen, e.n("--fullscreen")])),
    style: Z({
      backgroundImage: `url(${e.watermarkUrl})`,
      zIndex: e.zIndex
    })
  }, [Re(R("div", SB, [(g(), C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: `0 0 ${e.width + e.gapX} ${e.height + e.gapY}`,
    width: `${e.width + e.gapX}`,
    height: `${e.height + e.gapY}`,
    style: Z({
      padding: `0 ${e.gapX}px ${e.gapY}px 0`,
      opacity: e.opacity
    })
  }, [e.showContent() ? (g(), C("foreignObject", {
    key: 0,
    x: "0",
    y: "0",
    width: e.width,
    height: e.height
  }, [R("div", {
    xmlns: "http://www.w3.org/1999/xhtml",
    style: Z({
      transform: `translate(${e.offsetX}px, ${e.offsetY}px) rotate(${e.rotate}deg)`,
      transformOrigin: "center"
    })
  }, [F(e.$slots, "content", {}, () => [R("span", { style: Z(yB(bB({}, e.font), {
    fontSize: `${e.font.fontSize}px`,
    color: e.textColor
  })) }, fe(e.content), 5)])], 4)], 8, PB)) : X("v-if", !0), !e.$slots.content && e.image ? (g(), C("image", {
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
  }, null, 12, zB)) : X("v-if", !0)], 12, OB))], 512), [[xn, !1]])], 6)], 8, ["disabled"]))], 2);
}
var xg = oe({
  name: kB,
  props: Qg,
  setup(e, { slots: n }) {
    const r = y(""), o = y(""), t = y(""), a = y(null), i = y(null);
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
      return wB(this, null, function* () {
        t.value = _n(i.value).color, e.image && (o.value = yield s()), yield Ne(), d(), r.value = u(a.value.innerHTML);
      });
    }
    return {
      svgRef: a,
      containerRef: i,
      watermarkUrl: r,
      imageUrl: o,
      textColor: t,
      n: $B,
      classes: CB,
      showContent: l,
      resize: c
    };
  }
});
xg.render = TB;
var sl = xg;
se(sl);
ce(sl, Qg);
var b7 = sl, eu = sl, EB = "3.16.2";
function IB(e) {
  zl.install && e.use(zl), Tl.install && e.use(Tl), El.install && e.use(El), Dl.install && e.use(Dl), Nl.install && e.use(Nl), Vl.install && e.use(Vl), Rl.install && e.use(Rl), ta.install && e.use(ta), Ll.install && e.use(Ll), Fl.install && e.use(Fl), Ul.install && e.use(Ul), Hl.install && e.use(Hl), An.install && e.use(An), jl.install && e.use(jl), Yl.install && e.use(Yl), Wl.install && e.use(Wl), io.install && e.use(io), Kl.install && e.use(Kl), aa.install && e.use(aa), Xl.install && e.use(Xl), Gl.install && e.use(Gl), Zl.install && e.use(Zl), Jl.install && e.use(Jl), Ql.install && e.use(Ql), Hn.install && e.use(Hn), xl.install && e.use(xl), rs.install && e.use(rs), ls.install && e.use(ls), us.install && e.use(us), ds.install && e.use(ds), cs.install && e.use(cs), ca.install && e.use(ca), fs.install && e.use(fs), vs.install && e.use(vs), Fo.install && e.use(Fo), ps.install && e.use(ps), ms.install && e.use(ms), En.install && e.use(En), hs.install && e.use(hs), Tn.install && e.use(Tn), Mn.install && e.use(Mn), Je.install && e.use(Je), gs.install && e.use(gs), Zo.install && e.use(Zo), bs.install && e.use(bs), ys.install && e.use(ys), Uo.install && e.use(Uo), Ko.install && e.use(Ko), ws.install && e.use(ws), ks.install && e.use(ks), fo.install && e.use(fo), $s.install && e.use($s), Ol.install && e.use(Ol), Cs.install && e.use(Cs), Yo.install && e.use(Yo), lo.install && e.use(lo), Wo.install && e.use(Wo), va.install && e.use(va), Ss.install && e.use(Ss), Os.install && e.use(Os), Ps.install && e.use(Ps), zs.install && e.use(zs), Ts.install && e.use(Ts), Mr.install && e.use(Mr), Es.install && e.use(Es), Is.install && e.use(Is), pa.install && e.use(pa), Bs.install && e.use(Bs), Ds.install && e.use(Ds), Ms.install && e.use(Ms), cn.install && e.use(cn), As.install && e.use(As), Ns.install && e.use(Ns), Vs.install && e.use(Vs), Rs.install && e.use(Rs), Ls.install && e.use(Ls), Us.install && e.use(Us), Hs.install && e.use(Hs), js.install && e.use(js), Ys.install && e.use(Ys), po.install && e.use(po), Ws.install && e.use(Ws), Xo.install && e.use(Xo), Go.install && e.use(Go), Ks.install && e.use(Ks), qs.install && e.use(qs), Xs.install && e.use(Xs), Gs.install && e.use(Gs), Zs.install && e.use(Zs), Js.install && e.use(Js), Qs.install && e.use(Qs), xs.install && e.use(xs), fa.install && e.use(fa), _s.install && e.use(_s), eu.install && e.use(eu);
}
var y7 = {
  version: EB,
  install: IB,
  ActionSheet: zl,
  Alert: Tl,
  AppBar: El,
  AutoComplete: Dl,
  Avatar: Nl,
  AvatarGroup: Vl,
  BackTop: Rl,
  Badge: ta,
  BottomNavigation: Ll,
  BottomNavigationItem: Fl,
  Breadcrumb: Ul,
  Breadcrumbs: Hl,
  Button: An,
  ButtonGroup: jl,
  Card: Yl,
  Cell: Wl,
  Checkbox: io,
  CheckboxGroup: Kl,
  Chip: aa,
  Code: Xl,
  Col: Gl,
  Collapse: Zl,
  CollapseItem: Jl,
  CollapseTransition: Ql,
  Context: Hn,
  CountTo: xl,
  Countdown: rs,
  Counter: ls,
  DatePicker: us,
  Dialog: ds,
  Divider: cs,
  Drag: ca,
  Ellipsis: fs,
  Fab: vs,
  FieldDecorator: Fo,
  FloatingPanel: ps,
  Form: ms,
  FormDetails: En,
  HighlighterProvider: hs,
  Hover: Tn,
  HoverOverlay: Mn,
  Icon: Je,
  Image: gs,
  ImagePreview: Zo,
  IndexAnchor: bs,
  IndexBar: ys,
  Input: Uo,
  Lazy: Ko,
  Link: ws,
  List: ks,
  Loading: fo,
  LoadingBar: $s,
  Locale: Ol,
  LocaleProvider: Cs,
  Menu: Yo,
  MenuOption: lo,
  MenuSelect: Wo,
  Option: va,
  OtpInput: Ss,
  Overlay: Os,
  Pagination: Ps,
  Paper: zs,
  Picker: Ts,
  Popup: Mr,
  Progress: Es,
  PullRefresh: Is,
  Radio: pa,
  RadioGroup: Bs,
  Rate: Ds,
  Result: Ms,
  Ripple: cn,
  Row: As,
  Select: Ns,
  Signature: Vs,
  Skeleton: Rs,
  Slider: Ls,
  Snackbar: Us,
  Space: Hs,
  Step: js,
  Steps: Ys,
  Sticky: po,
  StyleProvider: Ws,
  Swipe: Xo,
  SwipeItem: Go,
  Switch: Ks,
  Tab: qs,
  TabItem: Xs,
  Table: Gs,
  Tabs: Zs,
  TabsItems: Js,
  Themes: Qs,
  TimePicker: xs,
  Tooltip: fa,
  Uploader: _s,
  Watermark: eu
};
export {
  zl as ActionSheet,
  Tl as Alert,
  El as AppBar,
  Dl as AutoComplete,
  Nl as Avatar,
  Vl as AvatarGroup,
  Rl as BackTop,
  ta as Badge,
  Ll as BottomNavigation,
  Fl as BottomNavigationItem,
  Ul as Breadcrumb,
  Hl as Breadcrumbs,
  An as Button,
  jl as ButtonGroup,
  Yl as Card,
  Wl as Cell,
  io as Checkbox,
  Kl as CheckboxGroup,
  aa as Chip,
  Xl as Code,
  Gl as Col,
  Zl as Collapse,
  Jl as CollapseItem,
  Ql as CollapseTransition,
  Hn as Context,
  xl as CountTo,
  rs as Countdown,
  ls as Counter,
  us as DatePicker,
  ds as Dialog,
  cs as Divider,
  ca as Drag,
  fs as Ellipsis,
  vs as Fab,
  Fo as FieldDecorator,
  ps as FloatingPanel,
  ms as Form,
  En as FormDetails,
  hs as HighlighterProvider,
  Tn as Hover,
  Mn as HoverOverlay,
  Je as Icon,
  gs as Image,
  Zo as ImagePreview,
  bs as IndexAnchor,
  ys as IndexBar,
  Uo as Input,
  Ko as Lazy,
  ws as Link,
  ks as List,
  fo as Loading,
  $s as LoadingBar,
  Ol as Locale,
  Cs as LocaleProvider,
  Yo as Menu,
  lo as MenuOption,
  Wo as MenuSelect,
  va as Option,
  Ss as OtpInput,
  Os as Overlay,
  Al as PIXEL,
  Ps as Pagination,
  zs as Paper,
  Ts as Picker,
  Mr as Popup,
  Es as Progress,
  Is as PullRefresh,
  pa as Radio,
  Bs as RadioGroup,
  Ds as Rate,
  Ms as Result,
  cn as Ripple,
  As as Row,
  yg as SNACKBAR_TYPE,
  Ns as Select,
  Vs as Signature,
  Rs as Skeleton,
  Ls as Slider,
  Us as Snackbar,
  Hs as Space,
  js as Step,
  Ys as Steps,
  po as Sticky,
  Ws as StyleProvider,
  Xo as Swipe,
  Go as SwipeItem,
  Ks as Switch,
  qs as Tab,
  Xs as TabItem,
  Gs as Table,
  Zs as Tabs,
  Js as TabsItems,
  Qs as Themes,
  xs as TimePicker,
  fa as Tooltip,
  _s as Uploader,
  eu as Watermark,
  FB as _ActionSheetComponent,
  UB as _AlertComponent,
  HB as _AppBarComponent,
  ZB as _AutoCompleteComponent,
  QB as _AvatarComponent,
  xB as _AvatarGroupComponent,
  nD as _BackTopComponent,
  rD as _BadgeComponent,
  oD as _BottomNavigationComponent,
  tD as _BottomNavigationItemComponent,
  aD as _BreadcrumbComponent,
  iD as _BreadcrumbsComponent,
  eD as _ButtonComponent,
  lD as _ButtonGroupComponent,
  sD as _CardComponent,
  uD as _CellComponent,
  KB as _CheckboxComponent,
  dD as _CheckboxGroupComponent,
  cD as _ChipComponent,
  fD as _CodeComponent,
  vD as _ColComponent,
  pD as _CollapseComponent,
  mD as _CollapseItemComponent,
  hD as _CollapseTransitionComponent,
  MB as _ContextComponent,
  gD as _CountToComponent,
  bD as _CountdownComponent,
  yD as _CounterComponent,
  kD as _DatePickerComponent,
  $D as _DialogComponent,
  CD as _DividerComponent,
  SD as _DragComponent,
  PD as _EllipsisComponent,
  zD as _FabComponent,
  YB as _FieldDecoratorComponent,
  TD as _FloatingPanelComponent,
  ED as _FormComponent,
  jB as _FormDetailsComponent,
  ID as _HighlighterProviderComponent,
  VB as _HoverComponent,
  RB as _HoverOverlayComponent,
  LB as _IconComponent,
  BD as _ImageComponent,
  AD as _ImagePreviewComponent,
  ND as _IndexAnchorComponent,
  VD as _IndexBarComponent,
  WB as _InputComponent,
  JB as _LazyComponent,
  RD as _LinkComponent,
  LD as _ListComponent,
  FD as _LoadingBarComponent,
  _B as _LoadingComponent,
  DB as _LocaleComponent,
  UD as _LocaleProviderComponent,
  XB as _MenuComponent,
  qB as _MenuOptionComponent,
  GB as _MenuSelectComponent,
  HD as _OptionComponent,
  jD as _OtpInputComponent,
  YD as _OverlayComponent,
  WD as _PaginationComponent,
  KD as _PaperComponent,
  qD as _PickerComponent,
  AB as _PopupComponent,
  XD as _ProgressComponent,
  GD as _PullRefreshComponent,
  ZD as _RadioComponent,
  JD as _RadioGroupComponent,
  QD as _RateComponent,
  xD as _ResultComponent,
  NB as _RippleComponent,
  _D as _RowComponent,
  e7 as _SelectComponent,
  n7 as _SignatureComponent,
  r7 as _SkeletonComponent,
  o7 as _SliderComponent,
  t7 as _SnackbarComponent,
  a7 as _SpaceComponent,
  i7 as _StepComponent,
  l7 as _StepsComponent,
  wD as _StickyComponent,
  s7 as _StyleProviderComponent,
  DD as _SwipeComponent,
  MD as _SwipeItemComponent,
  u7 as _SwitchComponent,
  d7 as _TabComponent,
  c7 as _TabItemComponent,
  f7 as _TableComponent,
  v7 as _TabsComponent,
  p7 as _TabsItemsComponent,
  m7 as _ThemesComponent,
  h7 as _TimePickerComponent,
  OD as _TooltipComponent,
  g7 as _UploaderComponent,
  b7 as _WatermarkComponent,
  Av as actionSheetProps,
  fu as add,
  Vv as alertProps,
  Lv as appBarProps,
  wp as avatarGroupProps,
  bp as avatarProps,
  Pp as backTopProps,
  Tp as badgeProps,
  Mp as bottomNavigationItemProps,
  Ip as bottomNavigationProps,
  Np as breadcrumbProps,
  Lp as breadcrumbsProps,
  Up as buttonGroupProps,
  Cp as buttonProps,
  jp as cardProps,
  Wp as cellProps,
  qp as checkboxGroupProps,
  Xv as checkboxProps,
  Gp as chipProps,
  Jp as codeProps,
  xp as colProps,
  am as collapseItemProps,
  nm as collapseProps,
  lm as collapseTransitionProps,
  um as countToProps,
  cm as countdownProps,
  Sm as counterProps,
  cv as currentMessage,
  Bm as datePickerProps,
  y7 as default,
  bn as defaultLazyOptions,
  Um as dialogProps,
  jm as dividerProps,
  Wm as dragProps,
  Gm as ellipsisProps,
  iv as enUS,
  lv as faIR,
  Jm as fabProps,
  st as fieldDecoratorProps,
  Uv as formDetailsProps,
  _m as formProps,
  Tv as hoverOverlayProps,
  dn as iconProps,
  vp as imageCache,
  ih as imagePreviewProps,
  rh as imageProps,
  sh as indexAnchorProps,
  ch as indexBarProps,
  yu as inputProps,
  IB as install,
  vh as linkProps,
  mh as listProps,
  Y6 as loadingBarProps,
  pr as loadingProps,
  Jv as menuOptionProps,
  wu as menuProps,
  ra as menuSelectProps,
  fv as merge,
  dv as messages,
  Th as optionProps,
  Bh as otpInputProps,
  Mh as overlayProps,
  Ah as paginationProps,
  Vh as paperProps,
  Lh as pickerProps,
  wo as popupProps,
  Uh as progressProps,
  jh as pullRefreshProps,
  Xh as radioGroupProps,
  Wh as radioProps,
  Zh as rateProps,
  Qh as resultProps,
  ag as rowProps,
  lg as selectProps,
  dg as signatureProps,
  fg as skeletonProps,
  pg as sliderProps,
  Ru as snackbarProps,
  $g as spaceProps,
  Cg as stepProps,
  Pg as stepsProps,
  Mo as stickyProps,
  Tg as styleProviderProps,
  Du as swipeProps,
  Ig as switchProps,
  sn as t,
  Ng as tabItemProps,
  Dg as tabProps,
  Rg as tableProps,
  Hg as tabsItemsProps,
  Fg as tabsProps,
  Yg as timePickerProps,
  qm as tooltipProps,
  Zg as uploaderProps,
  vu as use,
  Wn as useHoverOverlay,
  cu as useLocale,
  EB as version,
  Qg as watermarkProps,
  uu as zhCN,
  uv as zhHK,
  du as zhTW
};
