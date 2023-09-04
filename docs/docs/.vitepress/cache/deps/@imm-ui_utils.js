// ../node_modules/.pnpm/@imm-ui+utils@1.0.3/node_modules/@imm-ui/utils/dist/es/index.js
var Cr = (e) => (e.install = (t) => {
  const n = e.name || e.__name;
  t.component(n, e);
}, e);
var Mr = (e) => e;
function zt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
  for (let r = 0; r < s.length; r++)
    n[s[r]] = true;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
var $ = true ? Object.freeze({}) : {};
Object.freeze([]);
var Te = () => {
};
var v = Object.assign;
var qt = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
};
var Gt = Object.prototype.hasOwnProperty;
var g = (e, t) => Gt.call(e, t);
var h = Array.isArray;
var L = (e) => ne(e) === "[object Map]";
var Lt = (e) => ne(e) === "[object Set]";
var Fr = (e) => ne(e) === "[object Date]";
var b = (e) => typeof e == "function";
var I = (e) => typeof e == "string";
var Ce = (e) => typeof e == "symbol";
var V = (e) => e !== null && typeof e == "object";
var Yt = (e) => V(e) && b(e.then) && b(e.catch);
var Qt = Object.prototype.toString;
var ne = (e) => Qt.call(e);
var it = (e) => ne(e).slice(8, -1);
var Xt = (e) => ne(e) === "[object Object]";
var Me = (e) => I(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
var Zt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
};
var kt = Zt((e) => e.charAt(0).toUpperCase() + e.slice(1));
var de = (e, t) => !Object.is(e, t);
var en = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: true,
    enumerable: false,
    value: n
  });
};
var tn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
var Je;
var nn = () => Je || (Je = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function qe(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
var rn;
function sn(e, t = rn) {
  t && t.active && t.effects.push(e);
}
var Oe = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
};
var ct = (e) => (e.w & A) > 0;
var lt = (e) => (e.n & A) > 0;
var on = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= A;
};
var cn = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      ct(r) && !lt(r) ? r.delete(e) : t[n++] = r, r.w &= ~A, r.n &= ~A;
    }
    t.length = n;
  }
};
var Se = /* @__PURE__ */ new WeakMap();
var Z = 0;
var A = 1;
var Ve = 30;
var O;
var K = Symbol(true ? "iterate" : "");
var xe = Symbol(true ? "Map key iterate" : "");
var ln = class {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = true, this.deps = [], this.parent = void 0, sn(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = O, n = H;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = O, O = this, H = true, A = 1 << ++Z, Z <= Ve ? on(this) : Ge(this), this.fn();
    } finally {
      Z <= Ve && cn(this), A = 1 << --Z, O = this.parent, H = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    O === this ? this.deferStop = true : this.active && (Ge(this), this.onStop && this.onStop(), this.active = false);
  }
};
function Ge(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
var H = true;
var ut = [];
function at() {
  ut.push(H), H = false;
}
function ft() {
  const e = ut.pop();
  H = e === void 0 ? true : e;
}
function y(e, t, n) {
  if (H && O) {
    let s = Se.get(e);
    s || Se.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = Oe());
    const o = true ? { effect: O, target: e, type: t, key: n } : void 0;
    un(r, o);
  }
}
function un(e, t) {
  let n = false;
  Z <= Ve ? lt(e) || (e.n |= A, n = !ct(e)) : n = !e.has(O), n && (e.add(O), O.deps.push(e), O.onTrack && O.onTrack(Object.assign({ effect: O }, t)));
}
function j(e, t, n, s, r, o) {
  const i = Se.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && h(e)) {
    const f = tn(s);
    i.forEach((d, l) => {
      (l === "length" || l >= f) && c.push(d);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        h(e) ? Me(n) && c.push(i.get("length")) : (c.push(i.get(K)), L(e) && c.push(i.get(xe)));
        break;
      case "delete":
        h(e) || (c.push(i.get(K)), L(e) && c.push(i.get(xe)));
        break;
      case "set":
        L(e) && c.push(i.get(K));
        break;
    }
  const u = true ? { target: e, type: t, key: n, newValue: s, oldValue: r, oldTarget: o } : void 0;
  if (c.length === 1)
    c[0] && (true ? se(c[0], u) : se(c[0]));
  else {
    const f = [];
    for (const d of c)
      d && f.push(...d);
    true ? se(Oe(f), u) : se(Oe(f));
  }
}
function se(e, t) {
  const n = h(e) ? e : [...e];
  for (const s of n)
    s.computed && Le(s, t);
  for (const s of n)
    s.computed || Le(s, t);
}
function Le(e, t) {
  (e !== O || e.allowRecurse) && (e.onTrigger && e.onTrigger(v({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
var an = zt("__proto__,__v_isRef,__isVue");
var pt = new Set(
  Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ce)
);
var fn = Fe();
var pn = Fe(true);
var dn = Fe(true, true);
var Ye = hn();
function hn() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = p(this);
      for (let o = 0, i = this.length; o < i; o++)
        y(s, "get", o + "");
      const r = s[t](...n);
      return r === -1 || r === false ? s[t](...n.map(p)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      at();
      const s = p(this)[t].apply(this, n);
      return ft(), s;
    };
  }), e;
}
function Fe(e = false, t = false) {
  return function(s, r, o) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && o === (e ? t ? mt : gt : t ? vn : _t).get(s))
      return s;
    const i = h(s);
    if (!e && i && g(Ye, r))
      return Reflect.get(Ye, r, o);
    const c = Reflect.get(s, r, o);
    return (Ce(r) ? pt.has(r) : an(r)) || (e || y(s, "get", r), t) ? c : S(c) ? i && Me(r) ? c : c.value : V(c) ? e ? wt(c) : Et(c) : c;
  };
}
var _n = gn();
function gn(e = false) {
  return function(n, s, r, o) {
    let i = n[s];
    if (J(i) && S(i) && !S(r))
      return false;
    if (!e && (!Ie(r) && !J(r) && (i = p(i), r = p(r)), !h(n) && S(i) && !S(r)))
      return i.value = r, true;
    const c = h(n) && Me(s) ? Number(s) < n.length : g(n, s), u = Reflect.set(n, s, r, o);
    return n === p(o) && (c ? de(r, i) && j(n, "set", s, r, i) : j(n, "add", s, r)), u;
  };
}
function mn(e, t) {
  const n = g(e, t), s = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && j(e, "delete", t, void 0, s), r;
}
function En(e, t) {
  const n = Reflect.has(e, t);
  return (!Ce(t) || !pt.has(t)) && y(e, "has", t), n;
}
function wn(e) {
  return y(e, "iterate", h(e) ? "length" : K), Reflect.ownKeys(e);
}
var Nn = {
  get: fn,
  set: _n,
  deleteProperty: mn,
  has: En,
  ownKeys: wn
};
var dt = {
  get: pn,
  set(e, t) {
    return qe(`Set operation on key "${String(t)}" failed: target is readonly.`, e), true;
  },
  deleteProperty(e, t) {
    return qe(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), true;
  }
};
var bn = v({}, dt, {
  get: dn
});
var Ae = (e) => e;
var Ee = (e) => Reflect.getPrototypeOf(e);
function oe(e, t, n = false, s = false) {
  e = e.__v_raw;
  const r = p(e), o = p(t);
  n || (t !== o && y(r, "get", t), y(r, "get", o));
  const { has: i } = Ee(r), c = s ? Ae : n ? He : Ke;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, o))
    return c(e.get(o));
  e !== r && e.get(t);
}
function ie(e, t = false) {
  const n = this.__v_raw, s = p(n), r = p(e);
  return t || (e !== r && y(s, "has", e), y(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function ce(e, t = false) {
  return e = e.__v_raw, !t && y(p(e), "iterate", K), Reflect.get(e, "size", e);
}
function Qe(e) {
  e = p(e);
  const t = p(this);
  return Ee(t).has.call(t, e) || (t.add(e), j(t, "add", e, e)), this;
}
function Xe(e, t) {
  t = p(t);
  const n = p(this), { has: s, get: r } = Ee(n);
  let o = s.call(n, e);
  o ? ht(n, s, e) : (e = p(e), o = s.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), o ? de(t, i) && j(n, "set", e, t, i) : j(n, "add", e, t), this;
}
function Ze(e) {
  const t = p(this), { has: n, get: s } = Ee(t);
  let r = n.call(t, e);
  r ? ht(t, n, e) : (e = p(e), r = n.call(t, e));
  const o = s ? s.call(t, e) : void 0, i = t.delete(e);
  return r && j(t, "delete", e, void 0, o), i;
}
function ke() {
  const e = p(this), t = e.size !== 0, n = true ? L(e) ? new Map(e) : new Set(e) : void 0, s = e.clear();
  return t && j(e, "clear", void 0, void 0, n), s;
}
function le(e, t) {
  return function(s, r) {
    const o = this, i = o.__v_raw, c = p(i), u = t ? Ae : e ? He : Ke;
    return !e && y(c, "iterate", K), i.forEach((f, d) => s.call(r, u(f), u(d), o));
  };
}
function ue(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = p(r), i = L(o), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, f = r[e](...s), d = n ? Ae : t ? He : Ke;
    return !t && y(o, "iterate", u ? xe : K), {
      next() {
        const { value: l, done: a } = f.next();
        return a ? { value: l, done: a } : {
          value: c ? [d(l[0]), d(l[1])] : d(l),
          done: a
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function T(e) {
  return function(...t) {
    if (true) {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${kt(e)} operation ${n}failed: target is readonly.`, p(this));
    }
    return e === "delete" ? false : this;
  };
}
function On() {
  const e = {
    get(o) {
      return oe(this, o);
    },
    get size() {
      return ce(this);
    },
    has: ie,
    add: Qe,
    set: Xe,
    delete: Ze,
    clear: ke,
    forEach: le(false, false)
  }, t = {
    get(o) {
      return oe(this, o, false, true);
    },
    get size() {
      return ce(this);
    },
    has: ie,
    add: Qe,
    set: Xe,
    delete: Ze,
    clear: ke,
    forEach: le(false, true)
  }, n = {
    get(o) {
      return oe(this, o, true);
    },
    get size() {
      return ce(this, true);
    },
    has(o) {
      return ie.call(this, o, true);
    },
    add: T("add"),
    set: T("set"),
    delete: T("delete"),
    clear: T("clear"),
    forEach: le(true, false)
  }, s = {
    get(o) {
      return oe(this, o, true, true);
    },
    get size() {
      return ce(this, true);
    },
    has(o) {
      return ie.call(this, o, true);
    },
    add: T("add"),
    set: T("set"),
    delete: T("delete"),
    clear: T("clear"),
    forEach: le(true, true)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = ue(o, false, false), n[o] = ue(o, true, false), t[o] = ue(o, false, true), s[o] = ue(o, true, true);
  }), [
    e,
    n,
    t,
    s
  ];
}
var [Sn, Vn, xn, In] = On();
function je(e, t) {
  const n = t ? e ? In : xn : e ? Vn : Sn;
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(g(n, r) && r in s ? n : s, r, o);
}
var Dn = {
  get: je(false, false)
};
var yn = {
  get: je(true, false)
};
var Rn = {
  get: je(true, true)
};
function ht(e, t, n) {
  const s = p(n);
  if (s !== n && t.call(e, s)) {
    const r = it(e);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
var _t = /* @__PURE__ */ new WeakMap();
var vn = /* @__PURE__ */ new WeakMap();
var gt = /* @__PURE__ */ new WeakMap();
var mt = /* @__PURE__ */ new WeakMap();
function Pn(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function $n(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Pn(it(e));
}
function Et(e) {
  return J(e) ? e : ze(e, false, Nn, Dn, _t);
}
function wt(e) {
  return ze(e, true, dt, yn, gt);
}
function ae(e) {
  return ze(e, true, bn, Rn, mt);
}
function ze(e, t, n, s, r) {
  if (!V(e))
    return console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const i = $n(e);
  if (i === 0)
    return e;
  const c = new Proxy(e, i === 2 ? s : n);
  return r.set(e, c), c;
}
function U(e) {
  return J(e) ? U(e.__v_raw) : !!(e && e.__v_isReactive);
}
function J(e) {
  return !!(e && e.__v_isReadonly);
}
function Ie(e) {
  return !!(e && e.__v_isShallow);
}
function p(e) {
  const t = e && e.__v_raw;
  return t ? p(t) : e;
}
function Tn(e) {
  return en(e, "__v_skip", true), e;
}
var Ke = (e) => V(e) ? Et(e) : e;
var He = (e) => V(e) ? wt(e) : e;
function S(e) {
  return !!(e && e.__v_isRef === true);
}
function Cn(e) {
  return S(e) ? e.value : e;
}
var Mn = {
  get: (e, t, n) => Cn(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return S(r) && !S(n) ? (r.value = n, true) : Reflect.set(e, t, n, s);
  }
};
function Fn(e) {
  return U(e) ? e : new Proxy(e, Mn);
}
var W = [];
function An(e) {
  W.push(e);
}
function jn() {
  W.pop();
}
function N(e, ...t) {
  if (false)
    return;
  at();
  const n = W.length ? W[W.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = zn();
  if (s)
    B(s, n, 11, [
      e + t.join(""),
      n && n.proxy,
      r.map(({ vnode: o }) => `at <${Ct(n, o.type)}>`).join(`
`),
      r
    ]);
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    r.length && o.push(`
`, ...Kn(r)), console.warn(...o);
  }
  ft();
}
function zn() {
  let e = W[W.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function Kn(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Hn(n));
  }), t;
}
function Hn({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : false, r = ` at <${Ct(e.component, e.type, s)}`, o = ">" + n;
  return e.props ? [r, ...Un(e.props), o] : [r + o];
}
function Un(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...Nt(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Nt(e, t, n) {
  return I(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : S(t) ? (t = Nt(e, p(t.value), true), n ? t : [`${e}=Ref<`, t, ">"]) : b(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = p(t), n ? t : [`${e}=`, t]);
}
var bt = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function B(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (o) {
    Ot(o, t, n);
  }
  return r;
}
function ye(e, t, n, s) {
  if (b(e)) {
    const o = B(e, t, n, s);
    return o && Yt(o) && o.catch((i) => {
      Ot(i, t, n);
    }), o;
  }
  const r = [];
  for (let o = 0; o < e.length; o++)
    r.push(ye(e[o], t, n, s));
  return r;
}
function Ot(e, t, n, s = true) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, c = true ? bt[n] : n;
    for (; o; ) {
      const f = o.ec;
      if (f) {
        for (let d = 0; d < f.length; d++)
          if (f[d](e, i, c) === false)
            return;
      }
      o = o.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      B(u, null, 10, [e, i, c]);
      return;
    }
  }
  Wn(e, n, r, s);
}
function Wn(e, t, n, s = true) {
  if (true) {
    const r = bt[t];
    if (n && An(n), N(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && jn(), s)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
var he = false;
var Re = false;
var R = [];
var M = 0;
var Y = [];
var P = null;
var C = 0;
var St = Promise.resolve();
var Ue = null;
var Bn = 100;
function Jn(e) {
  const t = Ue || St;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function qn(e) {
  let t = M + 1, n = R.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    te(R[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function We(e) {
  (!R.length || !R.includes(e, he && e.allowRecurse ? M + 1 : M)) && (e.id == null ? R.push(e) : R.splice(qn(e.id), 0, e), Vt());
}
function Vt() {
  !he && !Re && (Re = true, Ue = St.then(It));
}
function xt(e) {
  h(e) ? Y.push(...e) : (!P || !P.includes(e, e.allowRecurse ? C + 1 : C)) && Y.push(e), Vt();
}
function Gn(e) {
  if (Y.length) {
    const t = [...new Set(Y)];
    if (Y.length = 0, P) {
      P.push(...t);
      return;
    }
    for (P = t, e = e || /* @__PURE__ */ new Map(), P.sort((n, s) => te(n) - te(s)), C = 0; C < P.length; C++)
      Dt(e, P[C]) || P[C]();
    P = null, C = 0;
  }
}
var te = (e) => e.id == null ? 1 / 0 : e.id;
var Ln = (e, t) => {
  const n = te(e) - te(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function It(e) {
  Re = false, he = true, e = e || /* @__PURE__ */ new Map(), R.sort(Ln);
  const t = true ? (n) => Dt(e, n) : Te;
  try {
    for (M = 0; M < R.length; M++) {
      const n = R[M];
      if (n && n.active !== false) {
        if (t(n))
          continue;
        B(n, null, 14);
      }
    }
  } finally {
    M = 0, R.length = 0, Gn(e), he = false, Ue = null, (R.length || Y.length) && It(e);
  }
}
function Dt(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Bn) {
      const s = t.ownerInstance, r = s && Tt(s.type);
      return N(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), true;
    } else
      e.set(t, n + 1);
  }
}
var X = /* @__PURE__ */ new Set();
nn().__VUE_HMR_RUNTIME__ = {
  createRecord: we(Yn),
  rerender: we(Qn),
  reload: we(Xn)
};
var _e = /* @__PURE__ */ new Map();
function Yn(e, t) {
  return _e.has(e) ? false : (_e.set(e, {
    initialDef: k(t),
    instances: /* @__PURE__ */ new Set()
  }), true);
}
function k(e) {
  return Mt(e) ? e.__vccOpts : e;
}
function Qn(e, t) {
  const n = _e.get(e);
  !n || (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, k(s.type).render = t), s.renderCache = [], s.update();
  }));
}
function Xn(e, t) {
  const n = _e.get(e);
  if (!n)
    return;
  t = k(t), et(n.initialDef, t);
  const s = [...n.instances];
  for (const r of s) {
    const o = k(r.type);
    X.has(o) || (o !== n.initialDef && et(o, t), X.add(o)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (X.add(o), r.ceReload(t.styles), X.delete(o)) : r.parent ? We(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  xt(() => {
    for (const r of s)
      X.delete(k(r.type));
  });
}
function et(e, t) {
  v(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function we(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
var F = null;
function er(e, t) {
  t && t.pendingBranch ? h(e) ? t.effects.push(...e) : t.effects.push(e) : xt(e);
}
var fe = {};
function tr(e, t, { immediate: n, deep: s, flush: r, onTrack: o, onTrigger: i } = $) {
  !t && (n !== void 0 && N('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), s !== void 0 && N('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const c = (_) => {
    N("Invalid watch source: ", _, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, u = Q;
  let f, d = false, l = false;
  if (S(e) ? (f = () => e.value, d = Ie(e)) : U(e) ? (f = () => e, s = true) : h(e) ? (l = true, d = e.some((_) => U(_) || Ie(_)), f = () => e.map((_) => {
    if (S(_))
      return _.value;
    if (U(_))
      return q(_);
    if (b(_))
      return B(_, u, 2);
    c(_);
  })) : b(e) ? t ? f = () => B(e, u, 2) : f = () => {
    if (!(u && u.isUnmounted))
      return a && a(), ye(e, u, 3, [m]);
  } : (f = Te, c(e)), t && s) {
    const _ = f;
    f = () => q(_());
  }
  let a, m = (_) => {
    a = D.onStop = () => {
      B(_, u, 4);
    };
  }, E = l ? new Array(e.length).fill(fe) : fe;
  const x = () => {
    if (!!D.active)
      if (t) {
        const _ = D.run();
        (s || d || (l ? _.some((At, jt) => de(At, E[jt])) : de(_, E))) && (a && a(), ye(t, u, 3, [
          _,
          E === fe ? void 0 : l && E[0] === fe ? [] : E,
          m
        ]), E = _);
      } else
        D.run();
  };
  x.allowRecurse = !!t;
  let re;
  r === "sync" ? re = x : r === "post" ? re = () => rt(x, u && u.suspense) : (x.pre = true, u && (x.id = u.uid), re = () => We(x));
  const D = new ln(f, re);
  return D.onTrack = o, D.onTrigger = i, t ? n ? x() : E = D.run() : r === "post" ? rt(D.run.bind(D), u && u.suspense) : D.run(), () => {
    D.stop(), u && u.scope && qt(u.scope.effects, D);
  };
}
function nr(e, t, n) {
  const s = this.proxy, r = I(e) ? e.includes(".") ? rr(s, e) : () => s[e] : e.bind(s, s);
  let o;
  b(t) ? o = t : (o = t.handler, n = t);
  const i = Q;
  st(this);
  const c = tr(r, o.bind(s), n);
  return i ? st(i) : Or(), c;
}
function rr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
function q(e, t) {
  if (!V(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), S(e))
    q(e.value, t);
  else if (h(e))
    for (let n = 0; n < e.length; n++)
      q(e[n], t);
  else if (Lt(e) || L(e))
    e.forEach((n) => {
      q(n, t);
    });
  else if (Xt(e))
    for (const n in e)
      q(e[n], t);
  return e;
}
var sr = Symbol();
var ve = (e) => e ? Sr(e) ? Vr(e) || e.proxy : ve(e.parent) : null;
var ee = v(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => true ? ae(e.props) : e.props,
  $attrs: (e) => true ? ae(e.attrs) : e.attrs,
  $slots: (e) => true ? ae(e.slots) : e.slots,
  $refs: (e) => true ? ae(e.refs) : e.refs,
  $parent: (e) => ve(e.parent),
  $root: (e) => ve(e.root),
  $emit: (e) => e.emit,
  $options: (e) => __VUE_OPTIONS_API__ ? lr(e) : e.type,
  $forceUpdate: (e) => e.f || (e.f = () => We(e.update)),
  $nextTick: (e) => e.n || (e.n = Jn.bind(e.proxy)),
  $watch: (e) => __VUE_OPTIONS_API__ ? nr.bind(e) : Te
});
var or = (e) => e === "_" || e === "$";
var Ne = (e, t) => e !== $ && !e.__isScriptSetup && g(e, t);
var ir = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: c, appContext: u } = e;
    if (t === "__isVue")
      return true;
    let f;
    if (t[0] !== "$") {
      const m = i[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (Ne(s, t))
          return i[t] = 1, s[t];
        if (r !== $ && g(r, t))
          return i[t] = 2, r[t];
        if ((f = e.propsOptions[0]) && g(f, t))
          return i[t] = 3, o[t];
        if (n !== $ && g(n, t))
          return i[t] = 4, n[t];
        (!__VUE_OPTIONS_API__ || cr) && (i[t] = 0);
      }
    }
    const d = ee[t];
    let l, a;
    if (d)
      return t === "$attrs" && (y(e, "get", t), void 0), d(e);
    if ((l = c.__cssModules) && (l = l[t]))
      return l;
    if (n !== $ && g(n, t))
      return i[t] = 4, n[t];
    if (a = u.config.globalProperties, g(a, t))
      return a[t];
    F && (!I(t) || t.indexOf("__v") !== 0) && (r !== $ && or(t[0]) && g(r, t) ? N(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === F && N(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return Ne(r, t) ? (r[t] = n, true) : r.__isScriptSetup && g(r, t) ? (N(`Cannot mutate <script setup> binding "${t}" from Options API.`), false) : s !== $ && g(s, t) ? (s[t] = n, true) : g(e.props, t) ? (N(`Attempting to mutate prop "${t}". Props are readonly.`), false) : t[0] === "$" && t.slice(1) in e ? (N(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), false) : (t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: true,
      configurable: true,
      value: n
    }) : o[t] = n, true);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o } }, i) {
    let c;
    return !!n[i] || e !== $ && g(e, i) || Ne(t, i) || (c = o[0]) && g(c, i) || g(s, i) || g(ee, i) || g(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : g(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
ir.ownKeys = (e) => (N("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e));
var cr = true;
function lr(e) {
  const t = e.type, { mixins: n, extends: s } = t, { mixins: r, optionsCache: o, config: { optionMergeStrategies: i } } = e.appContext, c = o.get(t);
  let u;
  return c ? u = c : !r.length && !n && !s ? u = t : (u = {}, r.length && r.forEach((f) => ge(u, f, i, true)), ge(u, t, i)), V(t) && o.set(t, u), u;
}
function ge(e, t, n, s = false) {
  const { mixins: r, extends: o } = t;
  o && ge(e, o, n, true), r && r.forEach((i) => ge(e, i, n, true));
  for (const i in t)
    if (s && i === "expose")
      N('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const c = ur[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
var ur = {
  data: tt,
  props: z,
  emits: z,
  methods: z,
  computed: z,
  beforeCreate: w,
  created: w,
  beforeMount: w,
  mounted: w,
  beforeUpdate: w,
  updated: w,
  beforeDestroy: w,
  beforeUnmount: w,
  destroyed: w,
  unmounted: w,
  activated: w,
  deactivated: w,
  errorCaptured: w,
  serverPrefetch: w,
  components: z,
  directives: z,
  watch: fr,
  provide: tt,
  inject: ar
};
function tt(e, t) {
  return t ? e ? function() {
    return v(b(e) ? e.call(this, this) : e, b(t) ? t.call(this, this) : t);
  } : t : e;
}
function ar(e, t) {
  return z(nt(e), nt(t));
}
function nt(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function w(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function z(e, t) {
  return e ? v(v(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function fr(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = v(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = w(e[s], t[s]);
  return n;
}
var rt = er;
var yt = Symbol(true ? "Fragment" : void 0);
var dr = Symbol(true ? "Text" : void 0);
var hr = Symbol(true ? "Comment" : void 0);
Symbol(true ? "Static" : void 0);
var Q = null;
var st = (e) => {
  Q = e, e.scope.on();
};
var Or = () => {
  Q && Q.scope.off(), Q = null;
};
function Sr(e) {
  return e.vnode.shapeFlag & 4;
}
function Vr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Fn(Tn(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in ee)
          return ee[n](e);
      },
      has(t, n) {
        return n in t || n in ee;
      }
    }));
}
var xr = /(?:^|[-_])(\w)/g;
var Ir = (e) => e.replace(xr, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Tt(e, t = true) {
  return b(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ct(e, t, n = false) {
  let s = Tt(t);
  if (!s && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (s = r[1]);
  }
  if (!s && e && e.parent) {
    const r = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    s = r(e.components || e.parent.type.components) || r(e.appContext.components);
  }
  return s ? Ir(s) : n ? "App" : "Anonymous";
}
function Mt(e) {
  return b(e) && "__vccOpts" in e;
}
Symbol(true ? "ssrContext" : "");
function be(e) {
  return !!(e && e.__v_isShallow);
}
function Dr() {
  if (typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, s = { style: "color:#9d288c" }, r = {
    header(l) {
      return V(l) ? l.__isVue ? ["div", e, "VueInstance"] : S(l) ? [
        "div",
        {},
        ["span", e, d(l)],
        "<",
        c(l.value),
        ">"
      ] : U(l) ? [
        "div",
        {},
        ["span", e, be(l) ? "ShallowReactive" : "Reactive"],
        "<",
        c(l),
        `>${J(l) ? " (readonly)" : ""}`
      ] : J(l) ? [
        "div",
        {},
        ["span", e, be(l) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(l),
        ">"
      ] : null : null;
    },
    hasBody(l) {
      return l && l.__isVue;
    },
    body(l) {
      if (l && l.__isVue)
        return [
          "div",
          {},
          ...o(l.$)
        ];
    }
  };
  function o(l) {
    const a = [];
    l.type.props && l.props && a.push(i("props", p(l.props))), l.setupState !== $ && a.push(i("setup", l.setupState)), l.data !== $ && a.push(i("data", p(l.data)));
    const m = u(l, "computed");
    m && a.push(i("computed", m));
    const E = u(l, "inject");
    return E && a.push(i("injected", E)), a.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: l }]
    ]), a;
  }
  function i(l, a) {
    return a = v({}, a), Object.keys(a).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        l
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(a).map((m) => [
          "div",
          {},
          ["span", s, m + ": "],
          c(a[m], false)
        ])
      ]
    ] : ["span", {}];
  }
  function c(l, a = true) {
    return typeof l == "number" ? ["span", t, l] : typeof l == "string" ? ["span", n, JSON.stringify(l)] : typeof l == "boolean" ? ["span", s, l] : V(l) ? ["object", { object: a ? p(l) : l }] : ["span", n, String(l)];
  }
  function u(l, a) {
    const m = l.type;
    if (b(m))
      return;
    const E = {};
    for (const x in l.ctx)
      f(m, x, a) && (E[x] = l.ctx[x]);
    return E;
  }
  function f(l, a, m) {
    const E = l[m];
    if (h(E) && E.includes(a) || V(E) && a in E || l.extends && f(l.extends, a, m) || l.mixins && l.mixins.some((x) => f(x, a, m)))
      return true;
  }
  function d(l) {
    return be(l) ? "ShallowRef" : l.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
function yr() {
  Dr();
}
yr();
var ot;
var Rr = typeof window < "u";
var Ar = (e) => typeof e == "boolean";
var vr = (e) => typeof e == "number";
Rr && ((ot = window == null ? void 0 : window.navigator) == null ? void 0 : ot.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
var jr = (e) => e === void 0;
var Ft = class extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
};
function zr(e, t) {
  throw new Ft(`[${e}] ${t}`);
}
function Pr(e, t) {
  if (true) {
    const n = I(e) ? new Ft(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
var $r = "utils/style";
function Kr(e, t = "px") {
  if (!e)
    return "";
  if (I(e))
    return e;
  if (vr(e))
    return `${e}${t}`;
  Pr($r, "binding value must be a string or number");
}
export {
  Kr as addUnit,
  Pr as debugWarn,
  Mr as definePropType,
  h as isArray,
  Ar as isBoolean,
  Fr as isDate,
  b as isFunction,
  vr as isNumber,
  V as isObject,
  Yt as isPromise,
  I as isString,
  Ce as isSymbol,
  jr as isUndefined,
  zr as throwError,
  Cr as withInstall
};
//# sourceMappingURL=@imm-ui_utils.js.map
