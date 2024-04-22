/* prebid.js v8.45.0
Updated: 2024-04-22
Modules: criteoBidAdapter, consentManagement, consentManagementGpp, consentManagementUsp, enrichmentFpdModule, gdprEnforcement, gppControl_usnat, gppControl_usstates, gptPreAuction */
if (window.pbjs && window.pbjs.libLoaded)
  try {
    window.pbjs.getConfig("debug") &&
      console.warn(
        "Attempted to load a copy of Prebid.js that clashes with the existing 'pbjs' instance. Load aborted."
      );
  } catch (e) {}
else
  (function () {
    !(function () {
      var n,
        r = {},
        e = {};
      function t(n) {
        var o = e[n];
        if (void 0 !== o) return o.exports;
        var u = (e[n] = { exports: {} });
        return r[n].call(u.exports, u, u.exports, t), u.exports;
      }
      (t.m = r),
        (n = []),
        (t.O = function (r, e, o, u) {
          if (!e) {
            var i = 1 / 0;
            for (a = 0; a < n.length; a++) {
              (e = n[a][0]), (o = n[a][1]), (u = n[a][2]);
              for (var f = !0, c = 0; c < e.length; c++)
                (!1 & u || i >= u) &&
                Object.keys(t.O).every(function (n) {
                  return t.O[n](e[c]);
                })
                  ? e.splice(c--, 1)
                  : ((f = !1), u < i && (i = u));
              if (f) {
                n.splice(a--, 1);
                var l = o();
                void 0 !== l && (r = l);
              }
            }
            return r;
          }
          u = u || 0;
          for (var a = n.length; a > 0 && n[a - 1][2] > u; a--) n[a] = n[a - 1];
          n[a] = [e, o, u];
        }),
        (t.n = function (n) {
          var r =
            n && n.__esModule
              ? function () {
                  return n.default;
                }
              : function () {
                  return n;
                };
          return t.d(r, { a: r }), r;
        }),
        (t.d = function (n, r) {
          for (var e in r)
            t.o(r, e) &&
              !t.o(n, e) &&
              Object.defineProperty(n, e, { enumerable: !0, get: r[e] });
        }),
        (t.g = (function () {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")();
          } catch (n) {
            if ("object" == typeof window) return window;
          }
        })()),
        (t.o = function (n, r) {
          return Object.prototype.hasOwnProperty.call(n, r);
        }),
        (t.r = function (n) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(n, "__esModule", { value: !0 });
        }),
        (t.j = 25602),
        (function () {
          var n = { 25602: 0 };
          t.O.j = function (r) {
            return 0 === n[r];
          };
          var r = function (r, e) {
              var o,
                u,
                i = e[0],
                f = e[1],
                c = e[2],
                l = 0;
              if (
                i.some(function (r) {
                  return 0 !== n[r];
                })
              ) {
                for (o in f) t.o(f, o) && (t.m[o] = f[o]);
                if (c) var a = c(t);
              }
              for (r && r(e); l < i.length; l++)
                (u = i[l]), t.o(n, u) && n[u] && n[u][0](), (n[u] = 0);
              return t.O(a);
            },
            e = (self.pbjsChunk = self.pbjsChunk || []);
          e.forEach(r.bind(null, 0)), (e.push = r.bind(null, e.push.bind(e)));
        })();
      var o = t.O(void 0, [25823, 44877, 79270], function () {
        return t(20327);
      });
      o = t.O(o);
    })();
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [25823],
      {
        35706: function (e, n, t) {
          t.d(n, {
            Pd: function () {
              return d;
            },
            Th: function () {
              return s;
            },
            _U: function () {
              return f;
            },
          });
          var r = t(55730),
            i = t(64358),
            o = t(20265),
            a = t(34614),
            u = (0, t(78640).R)(),
            c = "outstream";
          function s(e) {
            var n = this,
              t = e.url,
              o = e.config,
              a = e.id,
              u = e.callback,
              s = e.loaded,
              d = e.adUnitCode,
              f = e.renderNow;
            (this.url = t),
              (this.config = o),
              (this.handlers = {}),
              (this.id = a),
              (this.renderNow = f),
              (this.loaded = s),
              (this.cmd = []),
              (this.push = function (e) {
                "function" == typeof e
                  ? n.loaded
                    ? e.call()
                    : n.cmd.push(e)
                  : (0, i.logError)(
                      "Commands given to Renderer.push must be wrapped in a function"
                    );
              }),
              (this.callback =
                u ||
                function () {
                  (n.loaded = !0), n.process();
                }),
              (this.render = function () {
                var e = this,
                  n = arguments,
                  o = function () {
                    e._render
                      ? e._render.apply(e, n)
                      : (0, i.logWarn)(
                          "No render function was provided, please use .setRender on the renderer"
                        );
                  };
                l(d)
                  ? ((0, i.logWarn)(
                      "External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(
                        d
                      )
                    ),
                    o())
                  : f
                  ? o()
                  : (this.cmd.unshift(o),
                    (0, r.B)(t, c, this.callback, this.documentContext));
              }.bind(this));
          }
          function d(e) {
            return !(!e || (!e.url && !e.renderNow));
          }
          function f(e, n, t) {
            var r = null;
            e.config &&
              e.config.documentResolver &&
              (r = e.config.documentResolver(n, document, t)),
              r || (r = document),
              (e.documentContext = r),
              e.render(n, e.documentContext);
          }
          function l(e) {
            var n = u.adUnits,
              t = (0, a.sE)(n, function (n) {
                return n.code === e;
              });
            if (!t) return !1;
            var r = (0, o.Z)(t, "renderer"),
              i = !!(r && r.url && r.render),
              c = (0, o.Z)(t, "mediaTypes.video.renderer"),
              s = !!(c && c.url && c.render);
            return !!((i && !0 !== r.backupOnly) || (s && !0 !== c.backupOnly));
          }
          (s.install = function (e) {
            return new s({
              url: e.url,
              config: e.config,
              id: e.id,
              callback: e.callback,
              loaded: e.loaded,
              adUnitCode: e.adUnitCode,
              renderNow: e.renderNow,
            });
          }),
            (s.prototype.getConfig = function () {
              return this.config;
            }),
            (s.prototype.setRender = function (e) {
              this._render = e;
            }),
            (s.prototype.setEventHandlers = function (e) {
              this.handlers = e;
            }),
            (s.prototype.handleVideoEvent = function (e) {
              var n = e.id,
                t = e.eventName;
              "function" == typeof this.handlers[t] && this.handlers[t](),
                (0, i.logMessage)(
                  "Prebid Renderer event for id ".concat(n, " type ").concat(t)
                );
            }),
            (s.prototype.process = function () {
              for (; this.cmd.length > 0; )
                try {
                  this.cmd.shift().call();
                } catch (e) {
                  (0, i.logError)("Error processing Renderer command: ", e);
                }
            });
        },
        74947: function (e, n, t) {
          t.d(n, {
            EL: function () {
              return a;
            },
            Jt: function () {
              return l;
            },
            K$: function () {
              return i;
            },
            S1: function () {
              return r;
            },
            S5: function () {
              return o;
            },
            UE: function () {
              return u;
            },
            e: function () {
              return s;
            },
            g0: function () {
              return f;
            },
            oK: function () {
              return d;
            },
            x$: function () {
              return c;
            },
          });
          var r = "accessDevice",
            i = "syncUser",
            o = "enrichUfpd",
            a = "enrichEids",
            u = "fetchBids",
            c = "reportAnalytics",
            s = "transmitEids",
            d = "transmitUfpd",
            f = "transmitPreciseGeo",
            l = "transmitTid";
        },
        10286: function (e, n, t) {
          t.d(n, {
            T: function () {
              return i;
            },
          });
          var r = t(93304),
            i = (0, t(16310).Oj)(function (e) {
              return r.ZP.resolveAlias(e);
            });
        },
        9633: function (e, n, t) {
          t.d(n, {
            UL: function () {
              return i;
            },
            XG: function () {
              return a;
            },
            _U: function () {
              return u;
            },
            wu: function () {
              return r;
            },
            y2: function () {
              return o;
            },
          });
          var r = "prebid",
            i = "bidder",
            o = "userId",
            a = "rtd",
            u = "analytics";
        },
        16310: function (e, n, t) {
          if (
            (t.d(n, {
              $k: function () {
                return u;
              },
              Hw: function () {
                return v;
              },
              IV: function () {
                return g;
              },
              JR: function () {
                return a;
              },
              Ki: function () {
                return s;
              },
              Oj: function () {
                return p;
              },
              Qf: function () {
                return f;
              },
              Ww: function () {
                return h;
              },
              bL: function () {
                return d;
              },
              bp: function () {
                return c;
              },
              cx: function () {
                return l;
              },
            }),
            25602 == t.j)
          )
            var r = t(4942);
          if (25602 == t.j) var i = t(9633);
          var o = t(92797),
            a = "component",
            u = a + "Type",
            c = a + "Name",
            s = "adapterCode",
            d = "storageType",
            f = "configName",
            l = "syncType",
            g = "syncUrl",
            v = "_config";
          function p(e) {
            return function (n, t, o) {
              var d,
                f =
                  ((d = {}),
                  (0, r.Z)(d, u, n),
                  (0, r.Z)(d, c, t),
                  (0, r.Z)(d, a, "".concat(n, ".").concat(t)),
                  d);
              return n === i.UL && (f[s] = e(t)), h(Object.assign(f, o));
            };
          }
          var h = (0, o.z3)("sync", function (e) {
            return e;
          });
        },
        41087: function (e, n, t) {
          t.d(n, {
            $8: function () {
              return f;
            },
            Db: function () {
              return p;
            },
            Mp: function () {
              return E;
            },
            RD: function () {
              return h;
            },
            ZZ: function () {
              return l;
            },
            a: function () {
              return m;
            },
            hb: function () {
              return w;
            },
            js: function () {
              return b;
            },
          });
          var r = t(71002),
            i = t(70885),
            o = t(20265),
            a = t(3193),
            u = t(50571),
            c = t(74947);
          function s(e, n) {
            var t =
              ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
            if (!t) {
              if (
                Array.isArray(e) ||
                (t = (function (e, n) {
                  if (!e) return;
                  if ("string" == typeof e) return d(e, n);
                  var t = Object.prototype.toString.call(e).slice(8, -1);
                  "Object" === t && e.constructor && (t = e.constructor.name);
                  if ("Map" === t || "Set" === t) return Array.from(e);
                  if (
                    "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  )
                    return d(e, n);
                })(e)) ||
                (n && e && "number" == typeof e.length)
              ) {
                t && (e = t);
                var r = 0,
                  i = function () {};
                return {
                  s: i,
                  n: function () {
                    return r >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[r++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: i,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var o,
              a = !0,
              u = !1;
            return {
              s: function () {
                t = t.call(e);
              },
              n: function () {
                var e = t.next();
                return (a = e.done), e;
              },
              e: function (e) {
                (u = !0), (o = e);
              },
              f: function () {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (u) throw o;
                }
              },
            };
          }
          function d(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
            return r;
          }
          var f = [
              "data",
              "ext.data",
              "yob",
              "gender",
              "keywords",
              "kwarray",
              "id",
              "buyeruid",
              "customdata",
            ]
              .map(function (e) {
                return "user.".concat(e);
              })
              .concat("device.ext.cdep"),
            l = ["user.eids", "user.ext.eids"],
            g = [
              "user.geo.lat",
              "user.geo.lon",
              "device.geo.lat",
              "device.geo.lon",
            ];
          function v(e) {
            return Object.assign(
              {
                get: function () {},
                run: function (e, n, t, r, i) {
                  var o = t && t[r];
                  if (m(o) && i()) {
                    var a = this.get(o);
                    void 0 === a ? delete t[r] : (t[r] = a);
                  }
                },
              },
              e
            );
          }
          function p(e) {
            return (
              e.forEach(function (e) {
                e.paths = e.paths.map(function (e) {
                  var n = e.split("."),
                    t = n.pop();
                  return [n.length > 0 ? n.join(".") : null, t];
                });
              }),
              function (n, t) {
                for (
                  var r = [],
                    a = arguments.length,
                    u = new Array(a > 2 ? a - 2 : 0),
                    c = 2;
                  c < a;
                  c++
                )
                  u[c - 2] = arguments[c];
                var d = h.apply(void 0, [n].concat(u));
                return (
                  e.forEach(function (e) {
                    if (!1 !== n[e.name]) {
                      var a,
                        u = s(e.paths);
                      try {
                        for (u.s(); !(a = u.n()).done; ) {
                          var c = (0, i.Z)(a.value, 2),
                            f = c[0],
                            l = c[1],
                            g = null == f ? t : (0, o.Z)(t, f);
                          if (
                            (r.push(e.run(t, f, g, l, d.bind(null, e))),
                            !1 === n[e.name])
                          )
                            return;
                        }
                      } catch (e) {
                        u.e(e);
                      } finally {
                        u.f();
                      }
                    }
                  }),
                  r.filter(function (e) {
                    return null != e;
                  })
                );
              }
            );
          }
          function h(e) {
            for (
              var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1;
              r < n;
              r++
            )
              t[r - 1] = arguments[r];
            return function (n) {
              return (
                e.hasOwnProperty(n.name) ||
                  (e[n.name] = !!n.applies.apply(n, t)),
                e[n.name]
              );
            };
          }
          function m(e) {
            return (
              null != e &&
              ("object" !== (0, r.Z)(e) || Object.keys(e).length > 0)
            );
          }
          function b(e) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : u.xD;
            return function (t) {
              return !n(e, t);
            };
          }
          function y() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : u.xD;
            return [
              {
                name: c.e,
                paths: ["userId", "userIdAsEids"],
                applies: b(c.e, e),
              },
              { name: c.Jt, paths: ["ortb2Imp.ext.tid"], applies: b(c.Jt, e) },
            ].map(v);
          }
          function E() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : u.xD;
            return [
              { name: c.oK, paths: f, applies: b(c.oK, e) },
              { name: c.e, paths: l, applies: b(c.e, e) },
              {
                name: c.g0,
                paths: g,
                applies: b(c.g0, e),
                get: function (e) {
                  return Math.round(100 * (e + Number.EPSILON)) / 100;
                },
              },
              { name: c.Jt, paths: ["source.tid"], applies: b(c.Jt, e) },
            ].map(v);
          }
          var w = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : u.xD,
              n = p(E(e)),
              t = p(y(e));
            return function (e) {
              var r = {};
              return {
                ortb2: function (t) {
                  return n(r, t, e), t;
                },
                bidRequest: function (n) {
                  return t(r, n, e), n;
                },
              };
            };
          })();
          (0, u.oB)(c.Jt, "enableTIDs config", function () {
            if (!a.vc.getConfig("enableTIDs"))
              return { allow: !1, reason: "TIDs are disabled" };
          });
        },
        50571: function (e, n, t) {
          t.d(n, {
            oB: function () {
              return d;
            },
            xD: function () {
              return f;
            },
          });
          var r = t(70885),
            i = t(64358),
            o = t(16310);
          function a(e, n) {
            var t =
              ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
            if (!t) {
              if (
                Array.isArray(e) ||
                (t = (function (e, n) {
                  if (!e) return;
                  if ("string" == typeof e) return u(e, n);
                  var t = Object.prototype.toString.call(e).slice(8, -1);
                  "Object" === t && e.constructor && (t = e.constructor.name);
                  if ("Map" === t || "Set" === t) return Array.from(e);
                  if (
                    "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  )
                    return u(e, n);
                })(e)) ||
                (n && e && "number" == typeof e.length)
              ) {
                t && (e = t);
                var r = 0,
                  i = function () {};
                return {
                  s: i,
                  n: function () {
                    return r >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[r++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: i,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var o,
              a = !0,
              c = !1;
            return {
              s: function () {
                t = t.call(e);
              },
              n: function () {
                var e = t.next();
                return (a = e.done), e;
              },
              e: function (e) {
                (c = !0), (o = e);
              },
              f: function () {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (c) throw o;
                }
              },
            };
          }
          function u(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
            return r;
          }
          var c = (function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : (0, i.prefixLog)("Activity control:"),
                n = {};
              function t(e) {
                return (n[e] = n[e] || []);
              }
              function u(n, t, r, i) {
                var a;
                try {
                  a = r(i);
                } catch (r) {
                  e.logError(
                    "Exception in rule ".concat(t, " for '").concat(n, "'"),
                    r
                  ),
                    (a = { allow: !1, reason: r });
                }
                return (
                  a &&
                  Object.assign({ activity: n, name: t, component: i[o.JR] }, a)
                );
              }
              var c = {},
                s = 1e3;
              function d(n) {
                var t = n.activity,
                  r = n.name,
                  i = n.allow,
                  o = n.reason,
                  a = n.component,
                  u = ""
                    .concat(r, " ")
                    .concat(i ? "allowed" : "denied", " '")
                    .concat(t, "' for '")
                    .concat(a, "'")
                    .concat(o ? ":" : ""),
                  d = c.hasOwnProperty(u);
                if (
                  (d && clearTimeout(c[u]),
                  (c[u] = setTimeout(function () {
                    return delete c[u];
                  }, s)),
                  !d)
                ) {
                  var f = [u];
                  o && f.push(o), (i ? e.logInfo : e.logWarn).apply(e, f);
                }
              }
              return [
                function (e, n, i) {
                  var o =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : 10,
                    a = t(e),
                    u = a.findIndex(function (e) {
                      var n = (0, r.Z)(e, 1)[0];
                      return o < n;
                    }),
                    c = [o, n, i];
                  return (
                    a.splice(u < 0 ? a.length : u, 0, c),
                    function () {
                      var e = a.indexOf(c);
                      e >= 0 && a.splice(e, 1);
                    }
                  );
                },
                function (e, n) {
                  var i,
                    o,
                    c,
                    s = a(t(e));
                  try {
                    for (s.s(); !(c = s.n()).done; ) {
                      var f = (0, r.Z)(c.value, 3),
                        l = f[0],
                        g = f[1],
                        v = f[2];
                      if (i !== l && o) break;
                      i = l;
                      var p = u(e, g, v, n);
                      if (p) {
                        if (!p.allow) return d(p), !1;
                        o = p;
                      }
                    }
                  } catch (e) {
                    s.e(e);
                  } finally {
                    s.f();
                  }
                  return o && d(o), !0;
                },
              ];
            })(),
            s = (0, r.Z)(c, 2),
            d = s[0],
            f = s[1];
        },
        13667: function (e, n, t) {
          t.d(n, {
            E$: function () {
              return I;
            },
            Lj: function () {
              return C;
            },
            XD: function () {
              return S;
            },
            XF: function () {
              return O;
            },
            oc: function () {
              return T;
            },
            tV: function () {
              return j;
            },
          });
          var r = t(4942),
            i = t(64358);
          if (25602 == t.j) var o = t(20265);
          var a = t(52021),
            u = t(62200);
          if (25602 == t.j) var c = t(3193);
          var s = t(35706),
            d = t(24679);
          if (25602 == t.j) var f = t(78653);
          if (25602 == t.j) var l = t(88099);
          var g = t(92797),
            v = t(70059),
            p = u.FP.AD_RENDER_FAILED,
            h = u.FP.AD_RENDER_SUCCEEDED,
            m = u.FP.STALE_RENDER,
            b = u.FP.BID_WON,
            y = u.q_.EXCEPTION;
          function E(e) {
            var n = e.reason,
              t = e.message,
              r = e.bid,
              o = e.id,
              u = { reason: n, message: t };
            r && ((u.bid = r), (u.adId = r.adId)),
              o && (u.adId = o),
              (0, i.logError)(
                "Error rendering ad (id: ".concat(o, "): ").concat(t)
              ),
              a.emit(p, u);
          }
          function w(e) {
            var n = e.doc,
              t = e.bid,
              r = e.id,
              i = { doc: n };
            t && (i.bid = t), r && (i.adId = r), a.emit(h, i);
          }
          function T(e, n) {
            switch (e.event) {
              case u.FP.AD_RENDER_FAILED:
                E({
                  bid: n,
                  id: n.adId,
                  reason: e.info.reason,
                  message: e.info.message,
                });
                break;
              case u.FP.AD_RENDER_SUCCEEDED:
                w({ doc: null, bid: n, id: n.adId });
                break;
              default:
                (0, i.logError)(
                  "Received event request for unsupported event: '"
                    .concat(e.event, "' (adId: '")
                    .concat(n.adId, "')")
                );
            }
          }
          function I(e, n, t) {
            var r = t.resizeFn,
              i = t.fireTrackers,
              o = void 0 === i ? v.e6 : i;
            if ("resizeNativeHeight" === e.action) r(e.width, e.height);
            else o(e, n);
          }
          var A = (0, r.Z)({}, u.X3.EVENT, T);
          A[u.X3.NATIVE] = I;
          var C = (0, g.z3)("sync", function (e, n) {
              var t = e.ad,
                r = e.adUrl,
                o = e.cpm,
                a = e.originalCpm,
                u = e.width,
                c = e.height,
                s = {
                  AUCTION_PRICE: a || o,
                  CLICKTHROUGH: (null == n ? void 0 : n.clickUrl) || "",
                };
              return {
                ad: (0, i.replaceMacros)(t, s),
                adUrl: (0, i.replaceMacros)(r, s),
                width: u,
                height: c,
              };
            }),
            O = (0, g.z3)("sync", function (e) {
              var n = e.renderFn,
                t = e.resizeFn,
                r = e.bidResponse,
                i = e.options;
              if (r.mediaType !== d.pX) {
                var o = C(r, i);
                n(Object.assign({ adId: r.adId }, o));
                var a = o.width,
                  c = o.height;
                null != (null != a ? a : c) && t(a, c);
              } else E({ reason: u.q_.PREVENT_WRITING_ON_MAIN_DOCUMENT, message: "Cannot render video ad", bid: r, id: r.adId });
            });
          function S(e) {
            var n = e.renderFn,
              t = e.resizeFn,
              r = e.adId,
              s = e.options,
              d = e.bidResponse,
              l = e.doc;
            if (null != d) {
              if (
                d.status !== u.UE.RENDERED ||
                ((0, i.logWarn)(
                  "Ad id ".concat(r, " has been rendered before")
                ),
                a.emit(m, d),
                !(0, o.Z)(
                  c.vc.getConfig("auctionOptions"),
                  "suppressStaleRender"
                ))
              ) {
                try {
                  O({
                    renderFn: n,
                    resizeFn: t,
                    bidResponse: d,
                    options: s,
                    doc: l,
                  });
                } catch (e) {
                  E({
                    reason: u.q_.EXCEPTION,
                    message: e.message,
                    id: r,
                    bid: d,
                  });
                }
                f.K.addWinningBid(d), a.emit(b, d);
              }
            } else
              E({
                reason: u.q_.CANNOT_FIND_AD,
                message: "Cannot find ad '".concat(r, "'"),
                id: r,
              });
          }
          function j(e, n, t) {
            var r;
            function o(e, t) {
              E(Object.assign({ id: n, bid: r }, { reason: e, message: t }));
            }
            function a(n, t) {
              e.defaultView &&
                e.defaultView.frameElement &&
                (n && (e.defaultView.frameElement.width = n),
                t && (e.defaultView.frameElement.height = t));
            }
            var c,
              s =
                ((c = { resizeFn: a }),
                function (e, n, t) {
                  A.hasOwnProperty(e) && A[e](n, t, c);
                });
            try {
              n && e
                ? ((r = f.K.findBidByAdId(n)),
                  e !== document || (0, i.inIframe)()
                    ? S({
                        renderFn: function (n) {
                          n.ad
                            ? (e.write(n.ad),
                              e.close(),
                              w({ doc: e, bid: r, adId: r.adId }))
                            : (0, l.W)(r)
                                .then(function (t) {
                                  return t(
                                    n,
                                    {
                                      sendMessage: function (e, n) {
                                        return s(e, n, r);
                                      },
                                      mkFrame: i.createIframe,
                                    },
                                    e.defaultView
                                  );
                                })
                                .then(
                                  function () {
                                    return w({ doc: e, bid: r, adId: r.adId });
                                  },
                                  function (e) {
                                    o(
                                      (null == e ? void 0 : e.reason) ||
                                        u.q_.EXCEPTION,
                                      null == e ? void 0 : e.message
                                    ),
                                      (null == e ? void 0 : e.stack) &&
                                        (0, i.logError)(e);
                                  }
                                );
                          var t = document.createComment(
                            "Creative "
                              .concat(r.creativeId, " served by ")
                              .concat(r.bidder, " Prebid.js Header Bidding")
                          );
                          (0, i.insertElement)(t, e, "html");
                        },
                        resizeFn: a,
                        adId: n,
                        options: {
                          clickUrl: null == t ? void 0 : t.clickThrough,
                        },
                        bidResponse: r,
                        doc: e,
                      })
                    : o(
                        u.q_.PREVENT_WRITING_ON_MAIN_DOCUMENT,
                        "renderAd was prevented from writing to the main document."
                      ))
                : o(
                    u.q_.MISSING_DOC_OR_ADID,
                    "missing ".concat(n ? "doc" : "adId")
                  );
            } catch (e) {
              o(y, e.message);
            }
          }
          O.before(function (e, n) {
            var t = n.bidResponse,
              r = n.doc;
            (0, s.Pd)(t.renderer)
              ? ((0, s._U)(t.renderer, t, r),
                w({ doc: r, bid: t, id: t.adId }),
                e.bail())
              : e(n);
          }, 100);
        },
        54284: function (e, n, t) {
          t.d(n, {
            W: function () {
              return a;
            },
          });
          var r = t(78640);
          if (25602 == t.j) var i = t(64358);
          var o = (0, r.R)();
          function a(e, n) {
            (o.adServers = o.adServers || {}),
              (o.adServers[e] = o.adServers[e] || {}),
              Object.keys(n).forEach(function (t) {
                o.adServers[e][t]
                  ? (0, i.logWarn)(
                      "Attempting to add an already registered function property "
                        .concat(t, " for AdServer ")
                        .concat(e, ".")
                    )
                  : (o.adServers[e][t] = n[t]);
              });
          }
        },
        48525: function (e, n, t) {
          function r(e) {
            var n = e;
            return {
              callBids: function () {},
              setBidderCode: function (e) {
                n = e;
              },
              getBidderCode: function () {
                return n;
              },
            };
          }
          t.d(n, {
            Z: function () {
              return r;
            },
          });
        },
        93304: function (e, n, t) {
          t.d(n, {
            qJ: function () {
              return P;
            },
            ZP: function () {
              return ee;
            },
            JO: function () {
              return z;
            },
            uV: function () {
              return V;
            },
            Ct: function () {
              return J;
            },
            O6: function () {
              return W;
            },
            _x: function () {
              return H;
            },
          });
          var r = t(42982),
            i = t(70885),
            o = t(4942),
            a = t(64358),
            u = t(20265),
            c = t(70059),
            s = t(14699),
            d = t(48928),
            f = t(3193),
            l = t(92797),
            g = t(34614),
            v = {};
          function p(e, n, t) {
            var r = (function (e, n) {
              var t = (v[e] = v[e] || { bidders: {} });
              return n ? (t.bidders[n] = t.bidders[n] || {}) : t;
            })(e, t);
            return (r[n] = (r[n] || 0) + 1), r[n];
          }
          function h(e) {
            return p(e, "requestsCounter");
          }
          function m(e) {
            return (0, u.Z)(v, "".concat(e, ".requestsCounter")) || 0;
          }
          function b(e, n) {
            return (
              (0, u.Z)(
                v,
                "".concat(e, ".bidders.").concat(n, ".requestsCounter")
              ) || 0
            );
          }
          function y(e, n) {
            return (
              (0, u.Z)(
                v,
                "".concat(e, ".bidders.").concat(n, ".winsCounter")
              ) || 0
            );
          }
          var E = t(25102),
            w = t(34516),
            T = t(52021),
            I = t(62200),
            A = t(99128),
            C = t(78653),
            O = t(9633),
            S = t(50571),
            j = t(74947),
            B = t(16310),
            k = t(41087);
          function R(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n &&
                (r = r.filter(function (n) {
                  return Object.getOwnPropertyDescriptor(e, n).enumerable;
                })),
                t.push.apply(t, r);
            }
            return t;
          }
          function D(e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = null != arguments[n] ? arguments[n] : {};
              n % 2
                ? R(Object(t), !0).forEach(function (n) {
                    (0, o.Z)(e, n, t[n]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : R(Object(t)).forEach(function (n) {
                    Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(t, n)
                    );
                  });
            }
            return e;
          }
          var U = "pbsBidAdapter",
            P = { CLIENT: "client", SERVER: "server" },
            _ = { isAllowed: S.xD, redact: k.hb },
            q = {},
            N = (q.bidderRegistry = {}),
            x = (q.aliasRegistry = {}),
            Z = [];
          f.vc.getConfig("s2sConfig", function (e) {
            e &&
              e.s2sConfig &&
              (Z = (0, a.isArray)(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig]);
          });
          var M = {},
            F = (0, B.Oj)(function (e) {
              return q.resolveAlias(e);
            });
          function W(e) {
            return F(O.wu, U, (0, o.Z)({}, B.Qf, e.configName));
          }
          var L = (0, l.z3)(
            "sync",
            function (e) {
              var n = e.bidderCode,
                t = e.auctionId,
                r = e.bidderRequestId,
                i = e.adUnits,
                o = e.src,
                c = e.metrics;
              return i
                .reduce(function (e, i) {
                  var s = i.bids.filter(function (e) {
                    return e.bidder === n;
                  });
                  return (
                    null == n &&
                      0 === s.length &&
                      null != i.s2sBid &&
                      s.push({ bidder: null }),
                    e.push(
                      s.reduce(function (e, s) {
                        var d =
                          null ==
                          (s = Object.assign(
                            {},
                            s,
                            {
                              ortb2Imp: (0, a.mergeDeep)(
                                {},
                                i.ortb2Imp,
                                s.ortb2Imp
                              ),
                            },
                            (0, a.getDefinedParams)(i, [
                              "nativeParams",
                              "nativeOrtbRequest",
                              "mediaType",
                              "renderer",
                            ])
                          )).mediaTypes
                            ? i.mediaTypes
                            : s.mediaTypes;
                        return (
                          (0, a.isValidMediaTypes)(d)
                            ? (s = Object.assign({}, s, { mediaTypes: d }))
                            : (0, a.logError)(
                                "mediaTypes is not correctly configured for adunit ".concat(
                                  i.code
                                )
                              ),
                          "client" === o &&
                            (function (e, n) {
                              p(e, "requestsCounter", n);
                            })(i.code, n),
                          e.push(
                            Object.assign({}, s, {
                              adUnitCode: i.code,
                              transactionId: i.transactionId,
                              adUnitId: i.adUnitId,
                              sizes:
                                (0, u.Z)(d, "banner.sizes") ||
                                (0, u.Z)(d, "video.playerSize") ||
                                [],
                              bidId:
                                s.bid_id || (0, a.getUniqueIdentifierStr)(),
                              bidderRequestId: r,
                              auctionId: t,
                              src: o,
                              metrics: c,
                              bidRequestsCount: m(i.code),
                              bidderRequestsCount: b(i.code, s.bidder),
                              bidderWinsCount: y(i.code, s.bidder),
                            })
                          ),
                          e
                        );
                      }, [])
                    ),
                    e
                  );
                }, [])
                .reduce(a.flatten, [])
                .filter(function (e) {
                  return "" !== e;
                });
            },
            "getBids"
          );
          var z = (0, l.z3)(
            "sync",
            function (e, n) {
              var t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                r = t.getS2SBidders,
                i = void 0 === r ? V : r;
              if (null == n) return e;
              var o = i(n);
              return e.filter(function (e) {
                return o.has(e.bidder);
              });
            },
            "filterBidsForAdUnit"
          );
          function G(e, n) {
            var t = (0, a.deepClone)(e),
              r = !1;
            return (
              t.forEach(function (e) {
                var t = e.bids.filter(function (e) {
                  var t;
                  return (
                    e.module === U &&
                    (null === (t = e.params) || void 0 === t
                      ? void 0
                      : t.configName) === n.configName
                  );
                });
                1 === t.length
                  ? ((e.s2sBid = t[0]),
                    (r = !0),
                    (e.ortb2Imp = (0, a.mergeDeep)(
                      {},
                      e.s2sBid.ortb2Imp,
                      e.ortb2Imp
                    )))
                  : t.length > 1 &&
                    (0, a.logWarn)(
                      'Multiple "module" bids for the same s2s configuration; all will be ignored',
                      t
                    ),
                  (e.bids = z(e.bids, n).map(function (e) {
                    return (e.bid_id = (0, a.getUniqueIdentifierStr)()), e;
                  }));
              }),
              {
                adUnits: (t = t.filter(function (e) {
                  return 0 !== e.bids.length || null != e.s2sBid;
                })),
                hasModuleBids: r,
              }
            );
          }
          function K(e) {
            var n = (0, a.deepClone)(e);
            return (
              n.forEach(function (e) {
                e.bids = z(e.bids, null);
              }),
              (n = n.filter(function (e) {
                return 0 !== e.bids.length;
              }))
            );
          }
          var H = (0, l.z3)(
            "sync",
            function (e, n) {
              return e;
            },
            "setupAdUnitMediaTypes"
          );
          function V(e) {
            (0, a.isArray)(e) || (e = [e]);
            var n = new Set([null]);
            return (
              e
                .filter(function (e) {
                  return e && e.enabled;
                })
                .flatMap(function (e) {
                  return e.bidders;
                })
                .forEach(function (e) {
                  return n.add(e);
                }),
              n
            );
          }
          var J = (0, l.z3)(
            "sync",
            function (e, n) {
              var t,
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                i = r.getS2SBidders,
                u = void 0 === i ? V : i,
                c = u(n);
              return (0, a.getBidderCodes)(e).reduce(function (e, n) {
                return e[c.has(n) ? P.SERVER : P.CLIENT].push(n), e;
              }, ((t = {}),
              (0, o.Z)(t, P.CLIENT, []),
              (0, o.Z)(t, P.SERVER, []),
              t));
            },
            "partitionBidders"
          );
          function Q(e, n) {
            var t = N[e],
              r = (null == t ? void 0 : t.getSpec) && t.getSpec();
            if (r && r[n] && "function" == typeof r[n]) return [r, r[n]];
          }
          function $(e, n, t, r) {
            try {
              (0, a.logInfo)("Invoking ".concat(e, ".").concat(n));
              for (
                var i = arguments.length,
                  o = new Array(i > 4 ? i - 4 : 0),
                  u = 4;
                u < i;
                u++
              )
                o[u - 4] = arguments[u];
              f.vc.runWithBidder(e, r.bind.apply(r, [t].concat(o)));
            } catch (t) {
              (0, a.logWarn)("Error calling ".concat(n, " of ").concat(e));
            }
          }
          function X(e, n, t) {
            if ((null == t ? void 0 : t.src) !== I.os.SRC) {
              var i = Q(e, n);
              null != i && $.apply(void 0, [e, n].concat((0, r.Z)(i), [t]));
            }
          }
          function Y(e) {
            for (var n = new Set(); x.hasOwnProperty(e) && !n.has(e); )
              n.add(e), (e = x[e]);
            return e;
          }
          (q.makeBidRequests = (0, l.z3)(
            "sync",
            function (e, n, t, r, i) {
              var o =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : {},
                u = arguments.length > 6 ? arguments[6] : void 0;
              (u = (0, A.Bf)(u)),
                T.emit(I.FP.BEFORE_REQUEST_BIDS, e),
                (0, c.Fb)(e),
                e.forEach(function (e) {
                  (0, a.isPlainObject)(e.mediaTypes) || (e.mediaTypes = {}),
                    (e.bids = e.bids.filter(function (e) {
                      return !e.bidder || _.isAllowed(j.UE, F(O.UL, e.bidder));
                    })),
                    h(e.code);
                }),
                (e = H(e, i));
              var s = J(e, Z),
                d = s[P.CLIENT],
                l = s[P.SERVER];
              f.vc.getConfig("bidderSequence") === f.FD &&
                (d = (0, a.shuffle)(d));
              var v = (0, E.nH)(),
                p = [],
                m = o.global || {},
                b = o.bidder || {};
              function y(e, n) {
                var r = _.redact(null != n ? n : F(O.UL, e.bidderCode)),
                  i = Object.freeze(
                    r.ortb2(
                      (0, a.mergeDeep)(
                        { source: { tid: t } },
                        m,
                        b[e.bidderCode]
                      )
                    )
                  );
                return (
                  (e.ortb2 = i),
                  (e.bids = e.bids.map(function (e) {
                    return (e.ortb2 = i), r.bidRequest(e);
                  })),
                  e
                );
              }
              Z.forEach(function (r) {
                var i = W(r);
                if (r && r.enabled && _.isAllowed(j.UE, i)) {
                  var o = G(e, r),
                    c = o.adUnits,
                    s = o.hasModuleBids,
                    d = (0, a.generateUUID)();
                  (0 === l.length && s ? [null] : l).forEach(function (e) {
                    var o = (0, a.getUniqueIdentifierStr)(),
                      s = u.fork(),
                      f = y(
                        {
                          bidderCode: e,
                          auctionId: t,
                          bidderRequestId: o,
                          uniquePbsTid: d,
                          bids: L({
                            bidderCode: e,
                            auctionId: t,
                            bidderRequestId: o,
                            adUnits: (0, a.deepClone)(c),
                            src: I.os.SRC,
                            metrics: s,
                          }),
                          auctionStart: n,
                          timeout: r.timeout,
                          src: I.os.SRC,
                          refererInfo: v,
                          metrics: s,
                        },
                        i
                      );
                    0 !== f.bids.length && p.push(f);
                  }),
                    c.forEach(function (e) {
                      var n = e.bids.filter(function (e) {
                        return (0, g.sE)(p, function (n) {
                          return (0, g.sE)(n.bids, function (n) {
                            return n.bidId === e.bid_id;
                          });
                        });
                      });
                      e.bids = n;
                    }),
                    p.forEach(function (e) {
                      void 0 === e.adUnitsS2SCopy &&
                        (e.adUnitsS2SCopy = c.filter(function (e) {
                          return e.bids.length > 0 || null != e.s2sBid;
                        }));
                    });
                }
              });
              var C = K(e);
              return (
                d.forEach(function (e) {
                  var o = (0, a.getUniqueIdentifierStr)(),
                    c = u.fork(),
                    s = y({
                      bidderCode: e,
                      auctionId: t,
                      bidderRequestId: o,
                      bids: L({
                        bidderCode: e,
                        auctionId: t,
                        bidderRequestId: o,
                        adUnits: (0, a.deepClone)(C),
                        labels: i,
                        src: "client",
                        metrics: c,
                      }),
                      auctionStart: n,
                      timeout: r,
                      refererInfo: v,
                      metrics: c,
                    }),
                    d = N[e];
                  d ||
                    (0, a.logError)(
                      "Trying to make a request for bidder that does not exist: ".concat(
                        e
                      )
                    ),
                    d && s.bids && 0 !== s.bids.length && p.push(s);
                }),
                p.forEach(function (e) {
                  w.rp.getConsentData() &&
                    (e.gdprConsent = w.rp.getConsentData()),
                    w.nX.getConsentData() &&
                      (e.uspConsent = w.nX.getConsentData()),
                    w.TJ.getConsentData() &&
                      (e.gppConsent = w.TJ.getConsentData());
                }),
                p
              );
            },
            "makeBidRequests"
          )),
            (q.callBids = function (e, n, t, r, o, u, c) {
              var s =
                arguments.length > 7 && void 0 !== arguments[7]
                  ? arguments[7]
                  : {};
              if (n.length) {
                var l = n.reduce(
                    function (e, n) {
                      return (
                        e[Number(void 0 !== n.src && n.src === I.os.SRC)].push(
                          n
                        ),
                        e
                      );
                    },
                    [[], []]
                  ),
                  g = (0, i.Z)(l, 2),
                  v = g[0],
                  p = g[1],
                  h = [];
                p.forEach(function (e) {
                  for (var n = -1, t = 0; t < h.length; ++t)
                    if (e.uniquePbsTid === h[t].uniquePbsTid) {
                      n = t;
                      break;
                    }
                  n <= -1 && h.push(e);
                });
                var m = 0;
                Z.forEach(function (e) {
                  if (e && h[m] && V(e).has(h[m].bidderCode)) {
                    var n = (0, d.OI)(
                        u,
                        o
                          ? {
                              request: o.request.bind(null, "s2s"),
                              done: o.done,
                            }
                          : void 0
                      ),
                      i = e.bidders,
                      f = N[e.adapter],
                      l = h[m].uniquePbsTid,
                      g = h[m].adUnitsS2SCopy,
                      v = p.filter(function (e) {
                        return e.uniquePbsTid === l;
                      });
                    if (f) {
                      var b = { ad_units: g, s2sConfig: e, ortb2Fragments: s };
                      if (b.ad_units.length) {
                        var y = v.map(function (e) {
                            return (
                              (e.start = (0, a.timestamp)()),
                              function (n) {
                                n || c(e.bidderRequestId),
                                  r.apply(e, arguments);
                              }
                            );
                          }),
                          E = (0, a.getBidderCodes)(b.ad_units).filter(
                            function (e) {
                              return i.includes(e);
                            }
                          );
                        (0, a.logMessage)(
                          "CALLING S2S HEADER BIDDERS ==== ".concat(
                            E.length > 0
                              ? E.join(", ")
                              : 'No bidder specified, using "ortb2Imp" definition(s) only'
                          )
                        ),
                          v.forEach(function (e) {
                            T.emit(
                              I.FP.BID_REQUESTED,
                              D(D({}, e), {}, { tid: e.auctionId })
                            );
                          }),
                          f.callBids(
                            b,
                            p,
                            t,
                            function (e) {
                              return y.forEach(function (n) {
                                return n(e);
                              });
                            },
                            n
                          );
                      }
                    } else (0, a.logError)("missing " + e.adapter);
                    m++;
                  }
                }),
                  v.forEach(function (e) {
                    e.start = (0, a.timestamp)();
                    var n = N[e.bidderCode];
                    f.vc.runWithBidder(e.bidderCode, function () {
                      (0, a.logMessage)("CALLING BIDDER"),
                        T.emit(I.FP.BID_REQUESTED, e);
                    });
                    var i = (0, d.OI)(
                        u,
                        o
                          ? {
                              request: o.request.bind(null, e.bidderCode),
                              done: o.done,
                            }
                          : void 0
                      ),
                      s = r.bind(e);
                    try {
                      f.vc.runWithBidder(
                        e.bidderCode,
                        n.callBids.bind(
                          n,
                          e,
                          t,
                          s,
                          i,
                          function () {
                            return c(e.bidderRequestId);
                          },
                          f.vc.callbackWithBidder(e.bidderCode)
                        )
                      );
                    } catch (n) {
                      (0, a.logError)(
                        "".concat(
                          e.bidderCode,
                          " Bid Adapter emitted an uncaught error when parsing their bidRequest"
                        ),
                        { e: n, bidRequest: e }
                      ),
                        s();
                    }
                  });
              } else
                (0, a.logWarn)(
                  "callBids executed with no bidRequests.  Were they filtered by labels or sizing?"
                );
            }),
            (q.videoAdapters = []),
            (q.registerBidAdapter = function (e, n) {
              var t,
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                i = r.supportedMediaTypes,
                o = void 0 === i ? [] : i;
              e && n
                ? "function" == typeof e.callBids
                  ? ((N[n] = e),
                    w.qh.register(
                      O.UL,
                      n,
                      null === (t = e.getSpec) || void 0 === t
                        ? void 0
                        : t.call(e).gvlid
                    ),
                    (0, g.q9)(o, "video") && q.videoAdapters.push(n),
                    (0, g.q9)(o, "native") && c.Sg.push(n))
                  : (0, a.logError)(
                      "Bidder adaptor error for bidder code: " +
                        n +
                        "bidder must implement a callBids() function"
                    )
                : (0, a.logError)("bidAdapter or bidderCode not specified");
            }),
            (q.aliasBidAdapter = function (e, n, t) {
              if (void 0 === N[n]) {
                var r = N[e];
                if (void 0 === r) {
                  var i = [];
                  Z.forEach(function (t) {
                    if (t.bidders && t.bidders.length) {
                      var r = t && t.bidders;
                      t && (0, g.q9)(r, n) ? (x[n] = e) : i.push(e);
                    }
                  }),
                    i.forEach(function (e) {
                      (0,
                      a.logError)('bidderCode "' + e + '" is not an existing bidder.', "adapterManager.aliasBidAdapter");
                    });
                } else
                  try {
                    var o,
                      u = (function (e) {
                        var n = [];
                        return (
                          (0, g.q9)(q.videoAdapters, e) && n.push("video"),
                          (0, g.q9)(c.Sg, e) && n.push("native"),
                          n
                        );
                      })(e);
                    if (r.constructor.prototype != Object.prototype)
                      (o = new r.constructor()).setBidderCode(n);
                    else {
                      var d = r.getSpec(),
                        f = t && t.gvlid;
                      null != d.gvlid &&
                        null == f &&
                        (0, a.logWarn)(
                          "Alias '"
                            .concat(
                              n,
                              "' will NOT re-use the GVL ID of the original adapter ('"
                            )
                            .concat(d.code, "', gvlid: ")
                            .concat(
                              d.gvlid,
                              "). Functionality that requires TCF consent may not work as expected."
                            )
                        );
                      var l = t && t.skipPbsAliasing;
                      (o = (0, s.PZ)(
                        Object.assign({}, d, {
                          code: n,
                          gvlid: f,
                          skipPbsAliasing: l,
                        })
                      )),
                        (x[n] = e);
                    }
                    q.registerBidAdapter(o, n, { supportedMediaTypes: u });
                  } catch (n) {
                    (0, a.logError)(
                      e + " bidder does not currently support aliasing.",
                      "adapterManager.aliasBidAdapter"
                    );
                  }
              } else
                (0, a.logMessage)(
                  'alias name "' + n + '" has been already specified.'
                );
            }),
            (q.resolveAlias = function (e) {
              for (var n, t = e; x[t] && (!n || !n.has(t)); )
                (t = x[t]), (n = n || new Set()).add(t);
              return t;
            }),
            (q.registerAnalyticsAdapter = function (e) {
              var n = e.adapter,
                t = e.code,
                r = e.gvlid;
              n && t
                ? "function" == typeof n.enableAnalytics
                  ? ((n.code = t),
                    (M[t] = { adapter: n, gvlid: r }),
                    w.qh.register(O._U, t, r))
                  : (0, a.logError)(
                      'Prebid Error: Analytics adaptor error for analytics "'.concat(
                        t,
                        '"\n        analytics adapter must implement an enableAnalytics() function'
                      )
                    )
                : (0, a.logError)(
                    "Prebid Error: analyticsAdapter or analyticsCode not specified"
                  );
            }),
            (q.enableAnalytics = function (e) {
              (0, a.isArray)(e) || (e = [e]),
                e.forEach(function (e) {
                  var n = M[e.provider];
                  n && n.adapter
                    ? _.isAllowed(
                        j.x$,
                        F(O._U, e.provider, (0, o.Z)({}, B.Hw, e))
                      ) && n.adapter.enableAnalytics(e)
                    : (0, a.logError)(
                        "Prebid Error: no analytics adapter found in registry for '".concat(
                          e.provider,
                          "'."
                        )
                      );
                });
            }),
            (q.getBidAdapter = function (e) {
              return N[e];
            }),
            (q.getAnalyticsAdapter = function (e) {
              return M[e];
            }),
            (q.callTimedOutBidders = function (e, n, t) {
              (n = n.map(function (n) {
                return (
                  (n.params = (0, a.getUserConfiguredParams)(
                    e,
                    n.adUnitCode,
                    n.bidder
                  )),
                  (n.timeout = t),
                  n
                );
              })),
                (n = (0, a.groupBy)(n, "bidder")),
                Object.keys(n).forEach(function (e) {
                  X(e, "onTimeout", n[e]);
                });
            }),
            (q.callBidWonBidder = function (e, n, t) {
              var r, i;
              (n.params = (0, a.getUserConfiguredParams)(
                t,
                n.adUnitCode,
                n.bidder
              )),
                (r = n.adUnitCode),
                (i = n.bidder),
                p(r, "winsCounter", i),
                X(e, "onBidWon", n);
            }),
            (q.callBidBillableBidder = function (e) {
              X(e.bidder, "onBidBillable", e);
            }),
            (q.callSetTargetingBidder = function (e, n) {
              X(e, "onSetTargeting", n);
            }),
            (q.callBidViewableBidder = function (e, n) {
              X(e, "onBidViewable", n);
            }),
            (q.callBidderError = function (e, n, t) {
              X(e, "onBidderError", { error: n, bidderRequest: t });
            }),
            (q.callDataDeletionRequest = (0, l.z3)("sync", function () {
              for (
                var e = arguments.length, n = new Array(e), t = 0;
                t < e;
                t++
              )
                n[t] = arguments[t];
              var o = "onDataDeletionRequest";
              Object.keys(N)
                .filter(function (e) {
                  return !x.hasOwnProperty(e);
                })
                .forEach(function (e) {
                  var t = Q(e, o);
                  if (null != t) {
                    var i = C.K.getBidsRequested().filter(function (n) {
                      return Y(n.bidderCode) === e;
                    });
                    $.apply(void 0, [e, o].concat((0, r.Z)(t), [i], n));
                  }
                }),
                Object.entries(M).forEach(function (e) {
                  var t,
                    r = (0, i.Z)(e, 2),
                    u = r[0],
                    c = r[1],
                    s =
                      null == c || null === (t = c.adapter) || void 0 === t
                        ? void 0
                        : t[o];
                  if ("function" == typeof s)
                    try {
                      s.apply(c.adapter, n);
                    } catch (e) {
                      (0, a.logError)(
                        "error calling ".concat(o, " of ").concat(u),
                        e
                      );
                    }
                });
            }));
          var ee = q;
        },
        14699: function (e, n, t) {
          t.d(n, {
            BF: function () {
              return D;
            },
            JY: function () {
              return P;
            },
            PZ: function () {
              return S;
            },
            dX: function () {
              return O;
            },
          });
          var r = t(71002),
            i = t(70885);
          if (25602 == t.j) var o = t(48525);
          var a = t(93304),
            u = t(3193);
          if (25602 == t.j) var c = t(69626);
          var s = t(11974);
          if (25602 == t.j) var d = t(70059);
          if (25602 == t.j) var f = t(90154);
          if (25602 == t.j) var l = t(62200);
          if (25602 == t.j) var g = t(52021);
          if (25602 == t.j) var v = t(34614);
          var p = t(64358),
            h = t(92797);
          if (25602 == t.j) var m = t(78653);
          var b = t(55975),
            y = t(99128),
            E = t(50571),
            w = t(10286),
            T = t(9633),
            I = t(74947),
            A =
              25602 == t.j
                ? ["cpm", "ttl", "creativeId", "netRevenue", "currency"]
                : null,
            C = 25602 == t.j ? ["auctionId", "transactionId"] : null;
          function O(e) {
            var n = Array.isArray(e.supportedMediaTypes)
              ? { supportedMediaTypes: e.supportedMediaTypes }
              : void 0;
            function t(e) {
              var t = S(e);
              a.ZP.registerBidAdapter(t, e.code, n);
            }
            t(e),
              Array.isArray(e.aliases) &&
                e.aliases.forEach(function (n) {
                  var r,
                    i,
                    o = n;
                  (0, p.isPlainObject)(n) &&
                    ((o = n.code), (r = n.gvlid), (i = n.skipPbsAliasing)),
                    (a.ZP.aliasRegistry[o] = e.code),
                    t(
                      Object.assign({}, e, {
                        code: o,
                        gvlid: r,
                        skipPbsAliasing: i,
                      })
                    );
                });
          }
          function S(e) {
            return Object.assign(new o.Z(e.code), {
              getSpec: function () {
                return Object.freeze(Object.assign({}, e));
              },
              registerSyncs: n,
              callBids: function (t, r, o, s, d, f) {
                if (Array.isArray(t.bids)) {
                  var v = (function (e) {
                      if ((0, E.xD)(I.Jt, (0, w.T)(T.UL, e)))
                        return {
                          bidRequest: function (e) {
                            return e;
                          },
                          bidderRequest: function (e) {
                            return e;
                          },
                        };
                      function n(e, n, t) {
                        return C.includes(n) ? null : Reflect.get(e, n, t);
                      }
                      function t(e, n) {
                        var t = new Proxy(e, n);
                        return (
                          Object.entries(e)
                            .filter(function (e) {
                              var n = (0, i.Z)(e, 2);
                              return n[0], "function" == typeof n[1];
                            })
                            .forEach(function (n) {
                              var r = (0, i.Z)(n, 2),
                                o = r[0],
                                a = r[1];
                              return (t[o] = a.bind(e));
                            }),
                          t
                        );
                      }
                      var r = (0, p.memoize)(
                        function (e) {
                          return t(e, { get: n });
                        },
                        function (e) {
                          return e.bidId;
                        }
                      );
                      return {
                        bidRequest: r,
                        bidderRequest: function (e) {
                          return t(e, {
                            get: function (t, i, o) {
                              return "bids" === i ? e.bids.map(r) : n(t, i, o);
                            },
                          });
                        },
                      };
                    })(t.bidderCode),
                    h = {},
                    m = [],
                    A = _(t).measureTime("validate", function () {
                      return t.bids.filter(function (n) {
                        return (function (n) {
                          if (!e.isBidRequestValid(n))
                            return (
                              (0, p.logWarn)(
                                "Invalid bid sent to bidder "
                                  .concat(e.code, ": ")
                                  .concat(JSON.stringify(n))
                              ),
                              !1
                            );
                          return !0;
                        })(v.bidRequest(n));
                      });
                    });
                  if (0 !== A.length) {
                    var O = {};
                    A.forEach(function (e) {
                      (O[e.bidId] = e),
                        e.adUnitCode || (e.adUnitCode = e.placementCode);
                    }),
                      k(e, A.map(v.bidRequest), v.bidderRequest(t), s, f, {
                        onRequest: function (e) {
                          return g.emit(l.FP.BEFORE_BIDDER_HTTP, t, e);
                        },
                        onResponse: function (n) {
                          d(e.code), m.push(n);
                        },
                        onPaapi: function (e) {
                          var n = O[e.bidId];
                          n
                            ? D(n, e.config)
                            : (0, p.logWarn)(
                                "Received fledge auction configuration for an unknown bidId",
                                e
                              );
                        },
                        onError: function (n, r) {
                          r.timedOut || d(e.code),
                            a.ZP.callBidderError(e.code, r, t),
                            g.emit(l.FP.BIDDER_ERROR, {
                              error: r,
                              bidderRequest: t,
                            }),
                            (0, p.logError)(
                              "Server call for "
                                .concat(e.code, " failed: ")
                                .concat(n, " ")
                                .concat(r.status, ". Continuing without bids.")
                            );
                        },
                        onBid: function (n) {
                          var t = O[n.requestId];
                          if (t) {
                            if (
                              ((n.adapterCode = t.bidder),
                              (function (e, n) {
                                var t =
                                    b.S.get(n, "allowAlternateBidderCodes") ||
                                    !1,
                                  r = b.S.get(n, "allowedAlternateBidderCodes");
                                if (
                                  e &&
                                  n &&
                                  n !== e &&
                                  ((r = (0, p.isArray)(r)
                                    ? r
                                        .map(function (e) {
                                          return e.trim().toLowerCase();
                                        })
                                        .filter(function (e) {
                                          return !!e;
                                        })
                                        .filter(p.uniques)
                                    : r),
                                  !t ||
                                    ((0, p.isArray)(r) &&
                                      "*" !== r[0] &&
                                      !r.includes(e)))
                                )
                                  return !0;
                                return !1;
                              })(n.bidderCode, t.bidder))
                            )
                              return (
                                (0, p.logWarn)(
                                  ""
                                    .concat(
                                      n.bidderCode,
                                      " is not a registered partner or known bidder of "
                                    )
                                    .concat(
                                      t.bidder,
                                      ", hence continuing without bid. If you wish to support this bidder, please mark allowAlternateBidderCodes as true in bidderSettings."
                                    )
                                ),
                                void r.reject(
                                  t.adUnitCode,
                                  n,
                                  l.Gw.BIDDER_DISALLOWED
                                )
                              );
                            (n.originalCpm = n.cpm),
                              (n.originalCurrency = n.currency),
                              (n.meta =
                                n.meta || Object.assign({}, n[t.bidder]));
                            var i = Object.assign(
                              (0, c.m)(l.Q_.GOOD, t),
                              n,
                              (0, p.pick)(t, C)
                            );
                            !(function (e, n) {
                              var t = (0, y.Bf)(n.metrics);
                              t.checkpoint("addBidResponse"),
                                (h[e] = !0),
                                t.measureTime(
                                  "addBidResponse.validate",
                                  function () {
                                    return P(e, n);
                                  }
                                )
                                  ? r(e, n)
                                  : r.reject(e, n, l.Gw.INVALID);
                            })(t.adUnitCode, i);
                          } else
                            (0, p.logWarn)(
                              "Bidder "
                                .concat(
                                  e.code,
                                  " made bid for unknown request ID: "
                                )
                                .concat(n.requestId, ". Ignoring.")
                            ),
                              r.reject(null, n, l.Gw.INVALID_REQUEST_ID);
                        },
                        onCompletion: S,
                      });
                  } else S();
                }
                function S() {
                  o(),
                    u.vc.runWithBidder(e.code, function () {
                      g.emit(l.FP.BIDDER_DONE, t),
                        n(m, t.gdprConsent, t.uspConsent, t.gppConsent);
                    });
                }
              },
            });
            function n(n, t, r, i) {
              R(e, n, t, r, i);
            }
          }
          var j = ["paapiAuctionConfigs", "fledgeAuctionConfigs"],
            B = ["bids"].concat(j);
          var k = (0, h.z3)(
              "sync",
              function (e, n, t, o, a, u) {
                var c = u.onRequest,
                  s = u.onResponse,
                  d = u.onPaapi,
                  f = u.onError,
                  l = u.onBid,
                  g = u.onCompletion,
                  v = _(t);
                g = v.startTiming("total").stopBefore(g);
                var h = v.measureTime("buildRequests", function () {
                  return e.buildRequests(n, t);
                });
                if (h && 0 !== h.length) {
                  Array.isArray(h) || (h = [h]);
                  var m = (0, p.delayExecution)(g, h.length);
                  h.forEach(function (n) {
                    var t = v.fork();
                    function u(e) {
                      null != e && (e.metrics = t.fork().renameWith()), l(e);
                    }
                    var g = a(function (r, o) {
                        y();
                        try {
                          r = JSON.parse(r);
                        } catch (e) {}
                        (r = {
                          body: r,
                          headers: { get: o.getResponseHeader.bind(o) },
                        }),
                          s(r);
                        try {
                          r = t.measureTime("interpretResponse", function () {
                            return e.interpretResponse(r, n);
                          });
                        } catch (n) {
                          return (
                            (0, p.logError)(
                              "Bidder ".concat(
                                e.code,
                                " failed to interpret the server's response. Continuing without bids"
                              ),
                              null,
                              n
                            ),
                            void m()
                          );
                        }
                        var a, c;
                        r &&
                        !Object.keys(r).some(function (e) {
                          return !B.includes(e);
                        })
                          ? ((a = r.bids),
                            (c = (function (e) {
                              var n = j.map(function (n) {
                                  return e[n];
                                }),
                                t = (0, i.Z)(n, 2),
                                r = t[0],
                                o = t[1];
                              if (null != r && null != o)
                                throw new Error(
                                  "Adapter response should use "
                                    .concat(j[0], " over ")
                                    .concat(j[1], ", not both")
                                );
                              return null != r ? r : o;
                            })(r)))
                          : (a = r),
                          (0, p.isArray)(c) && c.forEach(d),
                          a && ((0, p.isArray)(a) ? a.forEach(u) : u(a)),
                          m();
                      }),
                      h = a(function (e, n) {
                        y(), f(e, n), m();
                      });
                    c(n);
                    var y = t.startTiming("net");
                    function A(t) {
                      var r,
                        i = n.options;
                      return Object.assign(t, i, {
                        browsingTopics:
                          !(
                            null != i &&
                            i.hasOwnProperty("browsingTopics") &&
                            !i.browsingTopics
                          ) &&
                          (null === (r = b.S.get(e.code, "topicsHeader")) ||
                            void 0 === r ||
                            r) &&
                          (0, E.xD)(I.oK, (0, w.T)(T.UL, e.code)),
                      });
                    }
                    switch (n.method) {
                      case "GET":
                        o(
                          "".concat(n.url).concat(
                            (function (e) {
                              if (e)
                                return "?".concat(
                                  "object" === (0, r.Z)(e)
                                    ? (0, p.parseQueryStringParameters)(e)
                                    : e
                                );
                              return "";
                            })(n.data)
                          ),
                          { success: g, error: h },
                          void 0,
                          A({ method: "GET", withCredentials: !0 })
                        );
                        break;
                      case "POST":
                        o(
                          n.url,
                          { success: g, error: h },
                          "string" == typeof n.data
                            ? n.data
                            : JSON.stringify(n.data),
                          A({
                            method: "POST",
                            contentType: "text/plain",
                            withCredentials: !0,
                          })
                        );
                        break;
                      default:
                        (0, p.logWarn)(
                          "Skipping invalid request from "
                            .concat(e.code, ". Request type ")
                            .concat(n.type, " must be GET or POST")
                        ),
                          m();
                    }
                  });
                } else g();
              },
              "processBidderRequests"
            ),
            R = (0, h.z3)(
              "async",
              function (e, n, t, r, i) {
                var o = u.vc.getConfig("userSync.aliasSyncEnabled");
                if (e.getUserSyncs && (o || !a.ZP.aliasRegistry[e.code])) {
                  var c = u.vc.getConfig("userSync.filterSettings"),
                    d = e.getUserSyncs(
                      {
                        iframeEnabled: !(!c || (!c.iframe && !c.all)),
                        pixelEnabled: !(!c || (!c.image && !c.all)),
                      },
                      n,
                      t,
                      r,
                      i
                    );
                  d &&
                    (Array.isArray(d) || (d = [d]),
                    d.forEach(function (n) {
                      s.k_.registerSync(n.type, e.code, n.url);
                    }),
                    s.k_.bidderDone(e.code));
                }
              },
              "registerSyncs"
            ),
            D = (0, h.z3)("sync", function (e, n) {}, "addComponentAuction");
          function U(e, n) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = t.index,
              o = void 0 === r ? m.K.index : r;
            if (
              (n.width || 0 === parseInt(n.width, 10)) &&
              (n.height || 0 === parseInt(n.height, 10))
            )
              return (
                (n.width = parseInt(n.width, 10)),
                (n.height = parseInt(n.height, 10)),
                !0
              );
            var a = o.getBidRequest(n),
              u = o.getMediaTypes(n),
              c = (a && a.sizes) || (u && u.banner && u.banner.sizes),
              s = (0, p.parseSizesInput)(c);
            if (1 === s.length) {
              var d = s[0].split("x"),
                f = (0, i.Z)(d, 2),
                l = f[0],
                g = f[1];
              return (
                (n.width = parseInt(l, 10)), (n.height = parseInt(g, 10)), !0
              );
            }
            return !1;
          }
          function P(e, n) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = t.index,
              i = void 0 === r ? m.K.index : r;
            function o() {
              var e = Object.keys(n);
              return A.every(function (t) {
                return (0, v.q9)(e, t) && !(0, v.q9)([void 0, null], n[t]);
              });
            }
            function a(e) {
              return "Invalid bid from "
                .concat(n.bidderCode, ". Ignoring bid: ")
                .concat(e);
            }
            return e
              ? n
                ? o()
                  ? "native" !== n.mediaType || (0, d.r4)(n, { index: i })
                    ? "video" !== n.mediaType || (0, f.Dn)(n, { index: i })
                      ? !("banner" === n.mediaType && !U(e, n, { index: i })) ||
                        ((0, p.logError)(
                          a("Banner bids require a width and height")
                        ),
                        !1)
                      : ((0, p.logError)(
                          a(
                            "Video bid does not have required vastUrl or renderer property"
                          )
                        ),
                        !1)
                    : ((0, p.logError)(
                        a("Native bid missing some required properties.")
                      ),
                      !1)
                  : ((0, p.logError)(
                      a(
                        "Bidder ".concat(
                          n.bidderCode,
                          " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."
                        )
                      )
                    ),
                    !1)
                : ((0, p.logWarn)(
                    "Some adapter tried to add an undefined bid for ".concat(
                      e,
                      "."
                    )
                  ),
                  !1)
              : ((0, p.logWarn)(
                  "No adUnitCode was supplied to addBidResponse."
                ),
                !1);
          }
          function _(e) {
            return (0, y.Bf)(e.metrics).renameWith(function (n) {
              return [
                "adapter.client.".concat(n),
                "adapters.client.".concat(e.bidderCode, ".").concat(n),
              ];
            });
          }
        },
        55730: function (e, n, t) {
          if (
            (t.d(n, {
              B: function () {
                return u;
              },
            }),
            25602 == t.j)
          )
            var r = t(34614);
          if (25602 == t.j) var i = t(64358);
          var o = new WeakMap(),
            a =
              25602 == t.j
                ? [
                    "debugging",
                    "adloox",
                    "criteo",
                    "outstream",
                    "adagio",
                    "spotx",
                    "browsi",
                    "brandmetrics",
                    "justtag",
                    "tncId",
                    "akamaidap",
                    "ftrackId",
                    "inskin",
                    "hadron",
                    "medianet",
                    "improvedigital",
                    "azerionedge",
                    "aaxBlockmeter",
                    "confiant",
                    "arcspan",
                    "airgrid",
                    "clean.io",
                    "a1Media",
                    "geoedge",
                    "mediafilter",
                    "qortex",
                    "dynamicAdBoost",
                    "contxtful",
                    "id5",
                    "lucead",
                  ]
                : null;
          function u(e, n, t, u, c) {
            if (n && e) {
              if ((0, r.q9)(a, n)) {
                u || (u = document);
                var s = l(u, e);
                if (s)
                  return (
                    t &&
                      "function" == typeof t &&
                      (s.loaded ? t() : s.callbacks.push(t)),
                    s.tag
                  );
                var d = o.get(u) || {},
                  f = { loaded: !1, tag: null, callbacks: [] };
                return (
                  (d[e] = f),
                  o.set(u, d),
                  t && "function" == typeof t && f.callbacks.push(t),
                  (0, i.logWarn)(
                    "module ".concat(n, " is loading external JavaScript")
                  ),
                  (function (n, t, r, o) {
                    r || (r = document);
                    var a = r.createElement("script");
                    (a.type = "text/javascript"), (a.async = !0);
                    var u = l(r, e);
                    u && (u.tag = a);
                    a.readyState
                      ? (a.onreadystatechange = function () {
                          ("loaded" !== a.readyState &&
                            "complete" !== a.readyState) ||
                            ((a.onreadystatechange = null), t());
                        })
                      : (a.onload = function () {
                          t();
                        });
                    (a.src = n), o && (0, i.setScriptAttributes)(a, o);
                    return (0, i.insertElement)(a, r), a;
                  })(
                    e,
                    function () {
                      f.loaded = !0;
                      try {
                        for (var e = 0; e < f.callbacks.length; e++)
                          f.callbacks[e]();
                      } catch (e) {
                        (0, i.logError)(
                          "Error executing callback",
                          "adloader.js:loadExternalScript",
                          e
                        );
                      }
                    },
                    u,
                    c
                  )
                );
              }
              (0, i.logError)(
                "".concat(n, " not whitelisted for loading external JavaScript")
              );
            } else
              (0, i.logError)(
                "cannot load external script without url and moduleCode"
              );
            function l(e, n) {
              var t = o.get(e);
              return t && t[n] ? t[n] : null;
            }
          }
        },
        7563: function (e, n, t) {
          t.d(n, {
            G: function () {
              return r;
            },
          });
          var r = (0, t(92797).z3)("sync", function () {});
        },
        48928: function (e, n, t) {
          t.d(n, {
            OI: function () {
              return p;
            },
            he: function () {
              return m;
            },
            hj: function () {
              return h;
            },
          });
          var r = t(70885),
            i = t(71002),
            o = t(3193),
            a = t(64358),
            u = {
              fetch: window.fetch.bind(window),
              makeRequest: function (e, n) {
                return new Request(e, n);
              },
              timeout: function (e, n) {
                var t = new AbortController(),
                  r = setTimeout(function () {
                    t.abort(),
                      (0, a.logError)(
                        "Request timeout after ".concat(e, "ms"),
                        n
                      ),
                      (r = null);
                  }, e);
                return {
                  signal: t.signal,
                  done: function () {
                    r && clearTimeout(r);
                  },
                };
              },
            },
            c = "GET",
            s = "POST",
            d = "Content-Type";
          function f(e, n) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = t.method || (n ? s : c);
            if (r === c && n) {
              var i = (0, a.parseUrl)(e, t);
              Object.assign(i.search, n), (e = (0, a.buildUrl)(i));
            }
            var o = new Headers(t.customHeaders);
            o.set(d, t.contentType || "text/plain");
            var f = { method: r, headers: o };
            return (
              r !== c && n && (f.body = n),
              t.withCredentials && (f.credentials = "include"),
              t.browsingTopics && isSecureContext && (f.browsingTopics = !0),
              u.makeRequest(e, f)
            );
          }
          function l() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 3e3,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              t = n.request,
              r = n.done,
              i = function (n, t) {
                var r, i, a;
                null == e ||
                  null !=
                    (null === (r = t) || void 0 === r ? void 0 : r.signal) ||
                  o.vc.getConfig("disableAjaxTimeout") ||
                  ((a = u.timeout(e, n)),
                  (t = Object.assign({ signal: a.signal }, t)));
                var c = u.fetch(n, t);
                return (
                  null !=
                    (null === (i = a) || void 0 === i ? void 0 : i.done) &&
                    (c = c.finally(a.done)),
                  c
                );
              };
            return (
              (null == t && null == r) ||
                (i = (function (e) {
                  return function (n, i) {
                    var o = new URL(
                        null == (null == n ? void 0 : n.url) ? n : n.url,
                        document.location
                      ).origin,
                      a = e(n, i);
                    return (
                      t && t(o),
                      r &&
                        (a = a.finally(function () {
                          return r(o);
                        })),
                      a
                    );
                  };
                })(i)),
              i
            );
          }
          function g(e, n) {
            var t = e.status,
              r = e.statusText,
              i = void 0 === r ? "" : r,
              o = e.headers,
              u = e.url,
              c = 0;
            function s(e) {
              if (0 === c)
                try {
                  var t, r;
                  c = new DOMParser().parseFromString(
                    n,
                    null == o ||
                      null === (t = o.get(d)) ||
                      void 0 === t ||
                      null === (r = t.split(";")) ||
                      void 0 === r
                      ? void 0
                      : r[0]
                  );
                } catch (n) {
                  (c = null), e && e(n);
                }
              return c;
            }
            return {
              readyState: XMLHttpRequest.DONE,
              status: t,
              statusText: i,
              responseText: n,
              response: n,
              responseType: "",
              responseURL: u,
              get responseXML() {
                return s(a.logError);
              },
              getResponseHeader: function (e) {
                return null != o && o.has(e) ? o.get(e) : null;
              },
              toJSON: function () {
                return Object.assign({ responseXML: s() }, this);
              },
              timedOut: !1,
            };
          }
          function v(e, n) {
            var t =
                "object" === (0, i.Z)(n) && null != n
                  ? n
                  : {
                      success:
                        "function" == typeof n
                          ? n
                          : function () {
                              return null;
                            },
                      error: function (e, n) {
                        return (0, a.logError)("Network error", e, n);
                      },
                    },
              o = t.success,
              u = t.error;
            e.then(function (e) {
              return e.text().then(function (n) {
                return [e, n];
              });
            }).then(
              function (e) {
                var n = (0, r.Z)(e, 2),
                  t = n[0],
                  i = n[1],
                  a = g(t, i);
                t.ok || 304 === t.status ? o(i, a) : u(t.statusText, a);
              },
              function (e) {
                return u(
                  "",
                  Object.assign(g({ status: 0 }, ""), {
                    reason: e,
                    timedOut: "AbortError" === (null == e ? void 0 : e.name),
                  })
                );
              }
            );
          }
          function p() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 3e3,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              t = n.request,
              r = n.done,
              i = l(e, { request: t, done: r });
            return function (e, n, t) {
              var r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {};
              v(i(f(e, t, r)), n);
            };
          }
          var h = p(),
            m = l();
        },
        25686: function (e, n, t) {
          if (
            (t.d(n, {
              LX: function () {
                return Q;
              },
              RH: function () {
                return H;
              },
              Yt: function () {
                return U;
              },
              Yw: function () {
                return O;
              },
              dg: function () {
                return V;
              },
              e0: function () {
                return _;
              },
              lU: function () {
                return N;
              },
              mv: function () {
                return S;
              },
              vO: function () {
                return D;
              },
            }),
            25602 == t.j)
          )
            var r = t(71002);
          var i = t(64358),
            o = t(20265);
          if (25602 == t.j) var a = t(56463);
          var u = t(70059),
            c = t(79885);
          if (25602 == t.j) var s = t(35706);
          var d = t(3193),
            f = t(11974),
            l = t(92797),
            g = t(34614);
          if (25602 == t.j) var v = t(90154);
          var p = t(24679),
            h = t(78653),
            m = t(55975),
            b = t(52021);
          if (25602 == t.j) var y = t(93304);
          var E = t(62200);
          if (25602 == t.j) var w = t(68792);
          var T = t(99128),
            I = t(36066),
            A = t(78640),
            C = f.k_.syncUsers,
            O = "inProgress",
            S = "completed";
          b.on(E.FP.BID_ADJUSTMENT, function (e) {
            !(function (e) {
              var n = (0, I.O)(e.cpm, e);
              n >= 0 && (e.cpm = n);
            })(e);
          });
          var j = {},
            B = {},
            k = 25602 == t.j ? [] : null,
            R = (0, A.R)();
          function D(e) {
            var n = e.adUnits,
              t = e.adUnitCodes,
              r = e.callback,
              o = e.cbTimeout,
              a = e.labels,
              c = e.auctionId,
              s = e.ortb2Fragments,
              f = e.metrics;
            f = (0, T.Bf)(f);
            var l,
              v,
              m,
              I,
              A = n,
              D = a,
              Z = t,
              M = c || (0, i.generateUUID)(),
              F = o,
              W = new Set(),
              L = (0, w.P)(),
              K = [],
              H = r,
              V = [],
              J = [],
              Q = [],
              $ = [],
              Y = [];
            function ee() {
              return {
                auctionId: M,
                timestamp: l,
                auctionEnd: v,
                auctionStatus: I,
                adUnits: A,
                adUnitCodes: Z,
                labels: D,
                bidderRequests: V,
                noBids: Q,
                bidsReceived: J,
                bidsRejected: K,
                winningBids: $,
                timeout: F,
                metrics: f,
                seatNonBids: Y,
              };
            }
            function ne(e) {
              if (
                (e ? b.emit(E.FP.AUCTION_TIMEOUT, ee()) : clearTimeout(m),
                void 0 === v)
              ) {
                var t = [];
                e &&
                  ((0, i.logMessage)("Auction ".concat(M, " timedOut")),
                  (t = V.filter(function (e) {
                    return !W.has(e.bidderRequestId);
                  }).flatMap(function (e) {
                    return e.bids;
                  })).length && b.emit(E.FP.BID_TIMEOUT, t)),
                  (I = S),
                  (v = Date.now()),
                  f.checkpoint("auctionEnd"),
                  f.timeBetween(
                    "requestBids",
                    "auctionEnd",
                    "requestBids.total"
                  ),
                  f.timeBetween(
                    "callBids",
                    "auctionEnd",
                    "requestBids.callBids"
                  ),
                  L.resolve(),
                  b.emit(E.FP.AUCTION_END, ee()),
                  q(A, function () {
                    try {
                      if (null != H) {
                        var r = J.filter(function (e) {
                          return Z.includes(e.adUnitCode);
                        }).reduce(X, {});
                        H.apply(R, [r, e, M]), (H = null);
                      }
                    } catch (e) {
                      (0,
                      i.logError)("Error executing bidsBackHandler", null, e);
                    } finally {
                      t.length && y.ZP.callTimedOutBidders(n, t, F);
                      var o = d.vc.getConfig("userSync") || {};
                      o.enableOverride || C(o.syncDelay);
                    }
                  });
              }
            }
            function te() {
              d.vc.resetBidder(),
                (0, i.logInfo)(
                  "Bids Received for Auction with id: ".concat(M),
                  J
                ),
                (I = S),
                ne(!1);
            }
            function re(e) {
              W.add(e);
            }
            function ie(e) {
              var n = this;
              e.forEach(function (e) {
                var n;
                (n = e), (V = V.concat(n));
              });
              var t = {},
                r = {
                  bidRequests: e,
                  run: function () {
                    (m = setTimeout(function () {
                      return ne(!0);
                    }, F)),
                      (I = O),
                      b.emit(E.FP.AUCTION_INIT, ee());
                    var r = (function (e, n) {
                      var t = (
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {}
                        ).index,
                        r = void 0 === t ? h.K.index : t,
                        o = 0,
                        a = !1,
                        c = new Set(),
                        s = {};
                      function f() {
                        o--, a && 0 === o && e();
                      }
                      function l(e, n, t) {
                        return (s[n.requestId] = !0), z(n, e), o++, t(f);
                      }
                      function v(e, t) {
                        l(e, t, function (e) {
                          var i = G(t);
                          b.emit(E.FP.BID_ACCEPTED, i),
                            i.mediaType === p.pX
                              ? x(n, i, e)
                              : ((0, u.ub)(i) && (0, u.kH)(i, r.getAdUnit(i)),
                                N(n, i),
                                e());
                        });
                      }
                      function m(e, t, r) {
                        return l(e, t, function (e) {
                          (t.rejectionReason = r),
                            (0, i.logWarn)(
                              "Bid from "
                                .concat(
                                  t.bidder || "unknown bidder",
                                  " was rejected: "
                                )
                                .concat(r),
                              t
                            ),
                            b.emit(E.FP.BID_REJECTED, t),
                            n.addBidRejected(t),
                            e();
                        });
                      }
                      function y() {
                        var t = this,
                          r = n.getBidRequests(),
                          u = d.vc.getConfig("auctionOptions");
                        if ((c.add(t), u && !(0, i.isEmpty)(u))) {
                          var f = u.secondaryBidders;
                          f &&
                            !r.every(function (e) {
                              return (0, g.q9)(f, e.bidderCode);
                            }) &&
                            (r = r.filter(function (e) {
                              return !(0, g.q9)(f, e.bidderCode);
                            }));
                        }
                        (a = r.every(function (e) {
                          return c.has(e);
                        })),
                          t.bids.forEach(function (e) {
                            s[e.bidId] ||
                              (n.addNoBid(e), b.emit(E.FP.NO_BID, e));
                          }),
                          a && 0 === o && e();
                      }
                      return {
                        addBidResponse: (function () {
                          function e(e, n) {
                            var t;
                            U.call(
                              { dispatch: v },
                              e,
                              n,
                              ((t = !1),
                              function (r) {
                                t || (m(e, n, r), (t = !0));
                              })
                            );
                          }
                          return (e.reject = m), e;
                        })(),
                        adapterDone: function () {
                          var e = this;
                          P(w.Z.resolve()).finally(function () {
                            return y.call(e);
                          });
                        },
                      };
                    })(te, n);
                    y.ZP.callBids(
                      A,
                      e,
                      r.addBidResponse,
                      r.adapterDone,
                      {
                        request: function (e, n) {
                          a(j, n),
                            a(t, e),
                            B[e] || (B[e] = { SRA: !0, origin: n }),
                            t[e] > 1 && (B[e].SRA = !1);
                        },
                        done: function (e) {
                          j[e]--, k[0] && o(k[0]) && k.shift();
                        },
                      },
                      F,
                      re,
                      s
                    );
                  },
                };
              function o(e) {
                var n = !0,
                  t = d.vc.getConfig("maxRequestsPerOrigin") || 4;
                return (
                  e.bidRequests.some(function (e) {
                    var r = 1,
                      i =
                        void 0 !== e.src && e.src === E.os.SRC
                          ? "s2s"
                          : e.bidderCode;
                    return (
                      B[i] &&
                        (!1 === B[i].SRA && (r = Math.min(e.bids.length, t)),
                        j[B[i].origin] + r > t && (n = !1)),
                      !n
                    );
                  }),
                  n && e.run(),
                  n
                );
              }
              function a(e, n) {
                void 0 === e[n] ? (e[n] = 1) : e[n]++;
              }
              o(r) ||
                ((0, i.logWarn)(
                  "queueing auction due to limited endpoint capacity"
                ),
                k.push(r));
            }
            return (
              b.on(E.FP.SEAT_NON_BID, function (e) {
                var n;
                e.auctionId === M && ((n = e.seatnonbid), (Y = Y.concat(n)));
              }),
              {
                addBidReceived: function (e) {
                  J = J.concat(e);
                },
                addBidRejected: function (e) {
                  K = K.concat(e);
                },
                addNoBid: function (e) {
                  Q = Q.concat(e);
                },
                callBids: function () {
                  (I = "started"), (l = Date.now());
                  var e = f.measureTime(
                    "requestBids.makeRequests",
                    function () {
                      return y.ZP.makeBidRequests(A, l, M, F, D, s, f);
                    }
                  );
                  (0, i.logInfo)(
                    "Bids Requested for Auction with id: ".concat(M),
                    e
                  ),
                    f.checkpoint("callBids"),
                    e.length < 1
                      ? ((0, i.logWarn)(
                          "No valid bid requests returned for auction"
                        ),
                        te())
                      : _.call({ dispatch: ie, context: this }, e);
                },
                addWinningBid: function (e) {
                  var t = n.find(function (n) {
                    return n.adUnitId === e.adUnitId;
                  });
                  ($ = $.concat(e)),
                    (0, i.callBurl)(e),
                    y.ZP.callBidWonBidder(e.adapterCode || e.bidder, e, n),
                    t && !t.deferBilling && y.ZP.callBidBillableBidder(e);
                },
                setBidTargeting: function (e) {
                  y.ZP.callSetTargetingBidder(e.adapterCode || e.bidder, e);
                },
                getWinningBids: function () {
                  return $;
                },
                getAuctionStart: function () {
                  return l;
                },
                getAuctionEnd: function () {
                  return v;
                },
                getTimeout: function () {
                  return F;
                },
                getAuctionId: function () {
                  return M;
                },
                getAuctionStatus: function () {
                  return I;
                },
                getAdUnits: function () {
                  return A;
                },
                getAdUnitCodes: function () {
                  return Z;
                },
                getBidRequests: function () {
                  return V;
                },
                getBidsReceived: function () {
                  return J;
                },
                getNoBids: function () {
                  return Q;
                },
                getNonBids: function () {
                  return Y;
                },
                getFPD: function () {
                  return s;
                },
                getMetrics: function () {
                  return f;
                },
                end: L.promise,
              }
            );
          }
          var U = (0, l.z3)(
              "sync",
              function (e, n, t) {
                this.dispatch.call(null, e, n);
              },
              "addBidResponse"
            ),
            P = (0, l.z3)(
              "sync",
              function (e) {
                return e;
              },
              "responsesReady"
            ),
            _ = (0, l.z3)(
              "sync",
              function (e) {
                this.dispatch.call(this.context, e);
              },
              "addBidderRequests"
            ),
            q = (0, l.z3)(
              "async",
              function (e, n) {
                n && n();
              },
              "bidsBackCallback"
            );
          function N(e, n) {
            !(function (e) {
              var n,
                t =
                  !0 === m.S.get(e.bidderCode, "allowZeroCpmBids")
                    ? e.cpm >= 0
                    : e.cpm > 0;
              e.bidderCode &&
                (t || e.dealId) &&
                (n = (function (e, n) {
                  var t = (
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {}
                    ).index,
                    r = void 0 === t ? h.K.index : t;
                  if (!n) return {};
                  var i = r.getBidRequest(n),
                    o = {},
                    a = Q(n.mediaType, e);
                  $(o, a, n, i),
                    e &&
                      m.S.getOwn(e, E.k2.ADSERVER_TARGETING) &&
                      ($(o, m.S.ownSettingsFor(e), n, i),
                      (n.sendStandardTargeting = m.S.get(
                        e,
                        "sendStandardTargeting"
                      )));
                  n.native && (o = Object.assign({}, o, (0, u.Ur)(n)));
                  return o;
                })(e.bidderCode, e));
              e.adserverTargeting = Object.assign(e.adserverTargeting || {}, n);
            })(n),
              (0, T.Bf)(n.metrics).timeSince(
                "addBidResponse",
                "addBidResponse.total"
              ),
              e.addBidReceived(n),
              b.emit(E.FP.BID_RESPONSE, n);
          }
          function x(e, n, t) {
            var r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {},
              a = r.index,
              u = void 0 === a ? h.K.index : a,
              c = !0,
              s = (0, o.Z)(
                u.getMediaTypes({
                  requestId: n.originalRequestId || n.requestId,
                  adUnitId: n.adUnitId,
                }),
                "video"
              ),
              f = s && (0, o.Z)(s, "context"),
              l = s && (0, o.Z)(s, "useCacheKey");
            d.vc.getConfig("cache.url") &&
              (l || f !== v.gZ) &&
              (!n.videoCacheKey || d.vc.getConfig("cache.ignoreBidderCacheKey")
                ? ((c = !1), L(e, n, t, s))
                : n.vastUrl ||
                  ((0, i.logError)(
                    "videoCacheKey specified but not required vastUrl for video bid"
                  ),
                  (c = !1))),
              c && (N(e, n), t());
          }
          var Z,
            M,
            F = function (e) {
              (0, c.h)(
                e.map(function (e) {
                  return e.bidResponse;
                }),
                function (n, t) {
                  t.forEach(function (t, r) {
                    var o = e[r],
                      a = o.auctionInstance,
                      u = o.bidResponse,
                      s = o.afterBidAdded;
                    n
                      ? (0, i.logWarn)(
                          "Failed to save to the video cache: ".concat(
                            n,
                            ". Video bid must be discarded."
                          )
                        )
                      : "" === t.uuid
                      ? (0, i.logWarn)(
                          "Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."
                        )
                      : ((u.videoCacheKey = t.uuid),
                        u.vastUrl || (u.vastUrl = (0, c.z)(u.videoCacheKey)),
                        N(a, u),
                        s());
                  });
                }
              );
            };
          d.vc.getConfig("cache", function (e) {
            (Z =
              "number" == typeof e.cache.batchSize && e.cache.batchSize > 0
                ? e.cache.batchSize
                : 1),
              (M =
                "number" == typeof e.cache.batchTimeout &&
                e.cache.batchTimeout > 0
                  ? e.cache.batchTimeout
                  : 0);
          });
          var W = (function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : setTimeout,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : F,
                t = [[]],
                r = !1,
                i = function (e) {
                  return e();
                };
              return function (o, a, u) {
                var c = M > 0 ? e : i;
                t[t.length - 1].length >= Z && t.push([]),
                  t[t.length - 1].push({
                    auctionInstance: o,
                    bidResponse: a,
                    afterBidAdded: u,
                  }),
                  r ||
                    ((r = !0),
                    c(function () {
                      t.forEach(n), (t = [[]]), (r = !1);
                    }, M));
              };
            })(),
            L = (0, l.z3)(
              "async",
              function (e, n, t, r) {
                W(e, n, t);
              },
              "callPrebidCache"
            );
          function z(e, n) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = t.index,
              o = void 0 === r ? h.K.index : r,
              a = o.getBidderRequest(e),
              u = o.getAdUnit(e),
              c = (a && a.start) || e.requestTimestamp;
            Object.assign(e, {
              responseTimestamp: e.responseTimestamp || (0, i.timestamp)(),
              requestTimestamp: e.requestTimestamp || c,
              cpm: parseFloat(e.cpm) || 0,
              bidder: e.bidder || e.bidderCode,
              adUnitCode: n,
            }),
              null != (null == u ? void 0 : u.ttlBuffer) &&
                (e.ttlBuffer = u.ttlBuffer),
              (e.timeToRespond = e.responseTimestamp - e.requestTimestamp);
          }
          function G(e) {
            var n,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              i = t.index,
              o = void 0 === i ? h.K.index : i;
            b.emit(E.FP.BID_ADJUSTMENT, e);
            var u =
                (null === (n = o.getBidRequest(e)) || void 0 === n
                  ? void 0
                  : n.renderer) || o.getAdUnit(e).renderer,
              c = e.mediaType,
              f = o.getMediaTypes(e),
              l = f && f[c],
              g = l && l.renderer,
              v = null;
            g && g.url && g.render && (!0 !== g.backupOnly || !e.renderer)
              ? (v = g)
              : u &&
                u.url &&
                u.render &&
                (!0 !== u.backupOnly || !e.renderer) &&
                (v = u),
              v &&
                ((e.renderer = s.Th.install({ url: v.url, config: v.options })),
                e.renderer.setRender(v.render));
            var p = K(
                e.mediaType,
                f,
                d.vc.getConfig("mediaTypePriceGranularity")
              ),
              m = (0, a.D)(
                e.cpm,
                "object" === (0, r.Z)(p)
                  ? p
                  : d.vc.getConfig("customPriceBucket"),
                d.vc.getConfig("currency.granularityMultiplier")
              );
            return (
              (e.pbLg = m.low),
              (e.pbMg = m.med),
              (e.pbHg = m.high),
              (e.pbAg = m.auto),
              (e.pbDg = m.dense),
              (e.pbCg = m.custom),
              e
            );
          }
          function K(e, n, t) {
            if (e && t) {
              if (e === p.pX) {
                var r = (0, o.Z)(n, "".concat(p.pX, ".context"), "instream");
                if (t["".concat(p.pX, "-").concat(r)])
                  return t["".concat(p.pX, "-").concat(r)];
              }
              return t[e];
            }
          }
          var H = function (e) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                t = n.index,
                r = void 0 === t ? h.K.index : t,
                i = K(
                  e.mediaType,
                  r.getMediaTypes(e),
                  d.vc.getConfig("mediaTypePriceGranularity")
                ),
                o =
                  "string" == typeof e.mediaType && i
                    ? "string" == typeof i
                      ? i
                      : "custom"
                    : d.vc.getConfig("priceGranularity");
              return o;
            },
            V = function (e) {
              return function (n) {
                var t = e || H(n);
                return t === E.Ql.AUTO
                  ? n.pbAg
                  : t === E.Ql.DENSE
                  ? n.pbDg
                  : t === E.Ql.LOW
                  ? n.pbLg
                  : t === E.Ql.MEDIUM
                  ? n.pbMg
                  : t === E.Ql.HIGH
                  ? n.pbHg
                  : t === E.Ql.CUSTOM
                  ? n.pbCg
                  : void 0;
              };
            };
          function J(e, n) {
            return {
              key: e,
              val:
                "function" == typeof n
                  ? function (e, t) {
                      return n(e, t);
                    }
                  : function (e) {
                      return (0, i.getValue)(e, n);
                    },
            };
          }
          function Q(e, n) {
            var t = Object.assign({}, m.S.settingsFor(null));
            if (
              (t[E.k2.ADSERVER_TARGETING] ||
                (t[E.k2.ADSERVER_TARGETING] = [
                  J(E.TD.BIDDER, "bidderCode"),
                  J(E.TD.AD_ID, "adId"),
                  J(E.TD.PRICE_BUCKET, V()),
                  J(E.TD.SIZE, "size"),
                  J(E.TD.DEAL, "dealId"),
                  J(E.TD.SOURCE, "source"),
                  J(E.TD.FORMAT, "mediaType"),
                  J(E.TD.ADOMAIN, function (e) {
                    return e.meta &&
                      e.meta.advertiserDomains &&
                      e.meta.advertiserDomains.length > 0
                      ? [e.meta.advertiserDomains].flat()[0]
                      : "";
                  }),
                  J(E.TD.ACAT, function (e) {
                    return e.meta && e.meta.primaryCatId
                      ? e.meta.primaryCatId
                      : "";
                  }),
                  J(E.TD.DSP, function (e) {
                    return e.meta && (e.meta.networkId || e.meta.networkName)
                      ? (0, o.Z)(e, "meta.networkName") ||
                          (0, o.Z)(e, "meta.networkId")
                      : "";
                  }),
                  J(E.TD.CRID, function (e) {
                    return e.creativeId ? e.creativeId : "";
                  }),
                ]),
              "video" === e)
            ) {
              var r = t[E.k2.ADSERVER_TARGETING].slice();
              if (
                ((t[E.k2.ADSERVER_TARGETING] = r),
                [E.TD.UUID, E.TD.CACHE_ID].forEach(function (e) {
                  void 0 ===
                    (0, g.sE)(r, function (n) {
                      return n.key === e;
                    }) && r.push(J(e, "videoCacheKey"));
                }),
                d.vc.getConfig("cache.url") &&
                  (!n || !1 !== m.S.get(n, "sendStandardTargeting")))
              ) {
                var a = (0, i.parseUrl)(d.vc.getConfig("cache.url"));
                void 0 ===
                  (0, g.sE)(r, function (e) {
                    return e.key === E.TD.CACHE_HOST;
                  }) &&
                  r.push(
                    J(E.TD.CACHE_HOST, function (e) {
                      return (0, o.Z)(
                        e,
                        "adserverTargeting.".concat(E.TD.CACHE_HOST)
                      )
                        ? e.adserverTargeting[E.TD.CACHE_HOST]
                        : a.hostname;
                    })
                  );
              }
            }
            return t;
          }
          function $(e, n, t, r) {
            var o = n[E.k2.ADSERVER_TARGETING];
            return (
              (t.size = t.getSize()),
              (o || []).forEach(function (o) {
                var a = o.key,
                  u = o.val;
                if (
                  (e[a] &&
                    (0, i.logWarn)("The key: " + a + " is being overwritten"),
                  (0, i.isFn)(u))
                )
                  try {
                    u = u(t, r);
                  } catch (e) {
                    (0, i.logError)("bidmanager", "ERROR", e);
                  }
                ((void 0 === n.suppressEmptyKeys ||
                  !0 !== n.suppressEmptyKeys) &&
                  a !== E.TD.DEAL &&
                  a !== E.TD.ACAT &&
                  a !== E.TD.DSP &&
                  a !== E.TD.CRID) ||
                (!(0, i.isEmptyStr)(u) && null != u)
                  ? (e[a] = u)
                  : (0, i.logInfo)(
                      "suppressing empty key '" +
                        a +
                        "' from adserver targeting"
                    );
              }),
              e
            );
          }
          function X(e, n) {
            return (
              e[n.adUnitCode] || (e[n.adUnitCode] = { bids: [] }),
              e[n.adUnitCode].bids.push(n),
              e
            );
          }
        },
        78653: function (e, n, t) {
          t.d(n, {
            K: function () {
              return h;
            },
          });
          var r = t(70885),
            i = t(42982),
            o = t(64358),
            a = t(25686);
          function u(e) {
            Object.assign(this, {
              getAuction: function (n) {
                var t = n.auctionId;
                if (null != t)
                  return e().find(function (e) {
                    return e.getAuctionId() === t;
                  });
              },
              getAdUnit: function (n) {
                var t = n.adUnitId;
                if (null != t)
                  return e()
                    .flatMap(function (e) {
                      return e.getAdUnits();
                    })
                    .find(function (e) {
                      return e.adUnitId === t;
                    });
              },
              getMediaTypes: function (e) {
                var n = e.adUnitId,
                  t = e.requestId;
                if (null != t) {
                  var r = this.getBidRequest({ requestId: t });
                  if (null != r && (null == n || r.adUnitId === n))
                    return r.mediaTypes;
                } else if (null != n) {
                  var i = this.getAdUnit({ adUnitId: n });
                  if (null != i) return i.mediaTypes;
                }
              },
              getBidderRequest: function (n) {
                var t = n.requestId,
                  r = n.bidderRequestId;
                if (null != t || null != r) {
                  var i = e().flatMap(function (e) {
                    return e.getBidRequests();
                  });
                  return (
                    null != r &&
                      (i = i.filter(function (e) {
                        return e.bidderRequestId === r;
                      })),
                    null == t
                      ? i[0]
                      : i.find(function (e) {
                          return (
                            e.bids &&
                            null !=
                              e.bids.find(function (e) {
                                return e.bidId === t;
                              })
                          );
                        })
                  );
                }
              },
              getBidRequest: function (n) {
                var t = n.requestId;
                if (null != t)
                  return e()
                    .flatMap(function (e) {
                      return e.getBidRequests();
                    })
                    .flatMap(function (e) {
                      return e.bids;
                    })
                    .find(function (e) {
                      return e && e.bidId === t;
                    });
              },
            });
          }
          var c = t(62200),
            s = t(99128),
            d = t(10613),
            f = t(8833),
            l = t(3193);
          function g(e, n) {
            var t =
              ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
            if (!t) {
              if (
                Array.isArray(e) ||
                (t = (function (e, n) {
                  if (!e) return;
                  if ("string" == typeof e) return v(e, n);
                  var t = Object.prototype.toString.call(e).slice(8, -1);
                  "Object" === t && e.constructor && (t = e.constructor.name);
                  if ("Map" === t || "Set" === t) return Array.from(e);
                  if (
                    "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  )
                    return v(e, n);
                })(e)) ||
                (n && e && "number" == typeof e.length)
              ) {
                t && (e = t);
                var r = 0,
                  i = function () {};
                return {
                  s: i,
                  n: function () {
                    return r >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[r++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: i,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var o,
              a = !0,
              u = !1;
            return {
              s: function () {
                t = t.call(e);
              },
              n: function () {
                var e = t.next();
                return (a = e.done), e;
              },
              e: function (e) {
                (u = !0), (o = e);
              },
              f: function () {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (u) throw o;
                }
              },
            };
          }
          function v(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
            return r;
          }
          var p = "minBidCacheTTL";
          var h = (function () {
            var e = null,
              n = (0, d.Z)({
                startTime: function (e) {
                  return e.end.then(function () {
                    return e.getAuctionEnd();
                  });
                },
                ttl: function (n) {
                  return null == e
                    ? null
                    : n.end.then(function () {
                        return (
                          1e3 *
                          Math.max.apply(
                            Math,
                            [e].concat((0, i.Z)(n.getBidsReceived().map(f.N)))
                          )
                        );
                      });
                },
              });
            (0, f.l)(function () {
              null != e && n.refresh();
            }),
              l.vc.getConfig(p, function (t) {
                e !==
                  (e =
                    "number" ==
                    typeof (e = null == t ? void 0 : t.minBidCacheTTL)
                      ? e
                      : null) && n.refresh();
              });
            var t = { onExpiry: n.onExpiry };
            function v(e) {
              var t,
                r = g(n);
              try {
                for (r.s(); !(t = r.n()).done; ) {
                  var i = t.value;
                  if (i.getAuctionId() === e) return i;
                }
              } catch (e) {
                r.e(e);
              } finally {
                r.f();
              }
            }
            function h() {
              return n.toArray().flatMap(function (e) {
                return e.getBidsReceived();
              });
            }
            return (
              (t.addWinningBid = function (e) {
                var n = (0, s.Bf)(e.metrics);
                n.checkpoint("bidWon"),
                  n.timeBetween("auctionEnd", "bidWon", "render.pending"),
                  n.timeBetween("requestBids", "bidWon", "render.e2e");
                var t = v(e.auctionId);
                t
                  ? ((e.status = c.UE.RENDERED), t.addWinningBid(e))
                  : (0, o.logWarn)("Auction not found when adding winning bid");
              }),
              Object.entries({
                getAllWinningBids: { name: "getWinningBids" },
                getBidsRequested: { name: "getBidRequests" },
                getNoBids: {},
                getAdUnits: {},
                getBidsReceived: {
                  pre: function (e) {
                    return e.getAuctionStatus() === a.mv;
                  },
                },
                getAdUnitCodes: { post: o.uniques },
              }).forEach(function (e) {
                var i = (0, r.Z)(e, 2),
                  o = i[0],
                  a = i[1],
                  u = a.name,
                  c = void 0 === u ? o : u,
                  s = a.pre,
                  d = a.post,
                  f =
                    null == s
                      ? function (e) {
                          return e[c]();
                        }
                      : function (e) {
                          return s(e) ? e[c]() : [];
                        },
                  l =
                    null == d
                      ? function (e) {
                          return e;
                        }
                      : function (e) {
                          return e.filter(d);
                        };
                t[o] = function () {
                  return l(n.toArray().flatMap(f));
                };
              }),
              (t.getAllBidsForAdUnitCode = function (e) {
                return h().filter(function (n) {
                  return n && n.adUnitCode === e;
                });
              }),
              (t.createAuction = function (e) {
                var t = (0, a.vO)(e);
                return (
                  (function (e) {
                    n.add(e);
                  })(t),
                  t
                );
              }),
              (t.findBidByAdId = function (e) {
                return h().find(function (n) {
                  return n.adId === e;
                });
              }),
              (t.getStandardBidderAdServerTargeting = function () {
                return (0, a.LX)()[c.k2.ADSERVER_TARGETING];
              }),
              (t.setStatusForBids = function (e, n) {
                var r = t.findBidByAdId(e);
                if ((r && (r.status = n), r && n === c.UE.BID_TARGETING_SET)) {
                  var i = v(r.auctionId);
                  i && i.setBidTargeting(r);
                }
              }),
              (t.getLastAuctionId = function () {
                var e = n.toArray();
                return e.length && e[e.length - 1].getAuctionId();
              }),
              (t.clearAllAuctions = function () {
                n.clear();
              }),
              (t.index = new u(function () {
                return n.toArray();
              })),
              t
            );
          })();
        },
        8833: function (e, n, t) {
          t.d(n, {
            N: function () {
              return u;
            },
            l: function () {
              return c;
            },
          });
          var r = t(3193),
            i = t(64358),
            o = 1,
            a = [];
          function u(e) {
            return e.ttl - (e.hasOwnProperty("ttlBuffer") ? e.ttlBuffer : o);
          }
          function c(e) {
            a.push(e);
          }
          r.vc.getConfig("ttlBuffer", function (e) {
            "number" == typeof e.ttlBuffer
              ? o !== (o = e.ttlBuffer) &&
                a.forEach(function (e) {
                  return e(o);
                })
              : (0, i.logError)("Invalid value for ttlBuffer", e.ttlBuffer);
          });
        },
        55975: function (e, n, t) {
          t.d(n, {
            S: function () {
              return g;
            },
          });
          var r = t(15671),
            i = t(43144),
            o = t(20265),
            a = t(64358),
            u = t(78640),
            c = t(62200);
          function s(e, n) {
            !(function (e, n) {
              if (n.has(e))
                throw new TypeError(
                  "Cannot initialize the same private elements twice on an object"
                );
            })(e, n),
              n.add(e);
          }
          function d(e, n, t) {
            if (!n.has(e))
              throw new TypeError(
                "attempted to get private field on non-instance"
              );
            return t;
          }
          var f = new WeakSet();
          function l(e) {
            return null == e ? this.defaultScope : e;
          }
          var g = new ((function () {
            function e(n, t) {
              (0, r.Z)(this, e),
                s(this, f),
                (this.getSettings = n),
                (this.defaultScope = t);
            }
            return (
              (0, i.Z)(e, [
                {
                  key: "get",
                  value: function (e, n) {
                    var t = this.getOwn(e, n);
                    return void 0 === t && (t = this.getOwn(null, n)), t;
                  },
                },
                {
                  key: "getOwn",
                  value: function (e, n) {
                    return (
                      (e = d(this, f, l).call(this, e)),
                      (0, o.Z)(this.getSettings(), "".concat(e, ".").concat(n))
                    );
                  },
                },
                {
                  key: "getScopes",
                  value: function () {
                    var e = this;
                    return Object.keys(this.getSettings()).filter(function (n) {
                      return n !== e.defaultScope;
                    });
                  },
                },
                {
                  key: "settingsFor",
                  value: function (e) {
                    return (0, a.mergeDeep)(
                      {},
                      this.ownSettingsFor(null),
                      this.ownSettingsFor(e)
                    );
                  },
                },
                {
                  key: "ownSettingsFor",
                  value: function (e) {
                    return (
                      (e = d(this, f, l).call(this, e)),
                      this.getSettings()[e] || {}
                    );
                  },
                },
              ]),
              e
            );
          })())(function () {
            return (0, u.R)().bidderSettings || {};
          }, c.k2.BD_SETTING_STANDARD);
        },
        69626: function (e, n, t) {
          if (
            (t.d(n, {
              m: function () {
                return o;
              },
            }),
            25602 == t.j)
          )
            var r = t(64358);
          function i(e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              t = n.src,
              i = void 0 === t ? "client" : t,
              o = n.bidder,
              a = void 0 === o ? "" : o,
              u = n.bidId,
              c = n.transactionId,
              s = n.adUnitId,
              d = n.auctionId,
              f = i,
              l = e || 0;
            function g() {
              switch (l) {
                case 0:
                  return "Pending";
                case 1:
                  return "Bid available";
                case 2:
                  return "Bid returned empty or error response";
                case 3:
                  return "Bid timed out";
              }
            }
            Object.assign(this, {
              bidderCode: a,
              width: 0,
              height: 0,
              statusMessage: g(),
              adId: (0, r.getUniqueIdentifierStr)(),
              requestId: u,
              transactionId: c,
              adUnitId: s,
              auctionId: d,
              mediaType: "banner",
              source: f,
            }),
              (this.getStatusCode = function () {
                return l;
              }),
              (this.getSize = function () {
                return this.width + "x" + this.height;
              }),
              (this.getIdentifiers = function () {
                return {
                  src: this.source,
                  bidder: this.bidderCode,
                  bidId: this.requestId,
                  transactionId: this.transactionId,
                  adUnitId: this.adUnitId,
                  auctionId: this.auctionId,
                };
              });
          }
          function o(e, n) {
            return new i(e, n);
          }
        },
        3193: function (e, n, t) {
          t.d(n, {
            FD: function () {
              return g;
            },
            vc: function () {
              return b;
            },
          });
          var r = t(4942),
            i = t(71002),
            o = t(70885),
            a = t(56463),
            u = t(34614),
            c = t(64358),
            s = t(20265),
            d = t(62200);
          function f(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n &&
                (r = r.filter(function (n) {
                  return Object.getOwnPropertyDescriptor(e, n).enumerable;
                })),
                t.push.apply(t, r);
            }
            return t;
          }
          var l = "TRUE" === (0, c.getParameterByName)(d.f).toUpperCase(),
            g = "random",
            v = {};
          (v[g] = !0), (v.fixed = !0);
          var p = g,
            h = {
              LOW: "low",
              MEDIUM: "medium",
              HIGH: "high",
              AUTO: "auto",
              DENSE: "dense",
              CUSTOM: "custom",
            },
            m = "*";
          var b = (function () {
            var e,
              n,
              t,
              d = [],
              g = null;
            function b() {
              function r(e) {
                return s[e].val;
              }
              function i(e, n) {
                s[e].val = n;
              }
              e = {};
              var s = {
                  publisherDomain: {
                    set: function (e) {
                      null != e &&
                        (0, c.logWarn)(
                          "publisherDomain is deprecated and has no effect since v7 - use pageUrl instead"
                        ),
                        i("publisherDomain", e);
                    },
                  },
                  priceGranularity: {
                    val: h.MEDIUM,
                    set: function (e) {
                      g(e) &&
                        ("string" == typeof e
                          ? i("priceGranularity", f(e) ? e : h.MEDIUM)
                          : (0, c.isPlainObject)(e) &&
                            (i("customPriceBucket", e),
                            i("priceGranularity", h.CUSTOM),
                            (0, c.logMessage)(
                              "Using custom price granularity"
                            )));
                    },
                  },
                  customPriceBucket: { val: {}, set: function () {} },
                  mediaTypePriceGranularity: {
                    val: {},
                    set: function (e) {
                      null != e &&
                        i(
                          "mediaTypePriceGranularity",
                          Object.keys(e).reduce(function (n, t) {
                            return (
                              g(e[t])
                                ? "string" == typeof e
                                  ? (n[t] = f(e[t])
                                      ? e[t]
                                      : r("priceGranularity"))
                                  : (0, c.isPlainObject)(e) &&
                                    ((n[t] = e[t]),
                                    (0, c.logMessage)(
                                      "Using custom price granularity for ".concat(
                                        t
                                      )
                                    ))
                                : (0, c.logWarn)(
                                    "Invalid price granularity for media type: ".concat(
                                      t
                                    )
                                  ),
                              n
                            );
                          }, {})
                        );
                    },
                  },
                  bidderSequence: {
                    val: p,
                    set: function (e) {
                      v[e]
                        ? i("bidderSequence", e)
                        : (0, c.logWarn)(
                            "Invalid order: ".concat(
                              e,
                              ". Bidder Sequence was not set."
                            )
                          );
                    },
                  },
                  auctionOptions: {
                    val: {},
                    set: function (e) {
                      (function (e) {
                        if (!(0, c.isPlainObject)(e))
                          return (
                            (0, c.logWarn)("Auction Options must be an object"),
                            !1
                          );
                        for (var n = 0, t = Object.keys(e); n < t.length; n++) {
                          var r = t[n];
                          if (
                            "secondaryBidders" !== r &&
                            "suppressStaleRender" !== r
                          )
                            return (
                              (0, c.logWarn)(
                                "Auction Options given an incorrect param: ".concat(
                                  r
                                )
                              ),
                              !1
                            );
                          if ("secondaryBidders" === r) {
                            if (!(0, c.isArray)(e[r]))
                              return (
                                (0, c.logWarn)(
                                  "Auction Options ".concat(
                                    r,
                                    " must be of type Array"
                                  )
                                ),
                                !1
                              );
                            if (!e[r].every(c.isStr))
                              return (
                                (0, c.logWarn)(
                                  "Auction Options ".concat(
                                    r,
                                    " must be only string"
                                  )
                                ),
                                !1
                              );
                          } else if (
                            "suppressStaleRender" === r &&
                            !(0, c.isBoolean)(e[r])
                          )
                            return (
                              (0, c.logWarn)(
                                "Auction Options ".concat(
                                  r,
                                  " must be of type boolean"
                                )
                              ),
                              !1
                            );
                        }
                        return !0;
                      })(e) && i("auctionOptions", e);
                    },
                  },
                },
                d = {
                  debug: l,
                  bidderTimeout: 3e3,
                  enableSendAllBids: true,
                  useBidCache: false,
                  deviceAccess: true,
                  timeoutBuffer: 400,
                  disableAjaxTimeout: false,
                  maxNestedIframes: 10,
                };
              function f(e) {
                return (0, u.sE)(Object.keys(h), function (n) {
                  return e === h[n];
                });
              }
              function g(e) {
                if (!e)
                  return (
                    (0, c.logError)(
                      "Prebid Error: no value passed to `setPriceGranularity()`"
                    ),
                    !1
                  );
                if ("string" == typeof e)
                  f(e) ||
                    (0, c.logWarn)(
                      "Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default."
                    );
                else if ((0, c.isPlainObject)(e) && !(0, a.t)(e))
                  return (
                    (0, c.logError)(
                      "Invalid custom price value passed to `setPriceGranularity()`"
                    ),
                    !1
                  );
                return !0;
              }
              Object.defineProperties(
                d,
                Object.fromEntries(
                  Object.entries(s).map(function (e) {
                    var n = (0, o.Z)(e, 2),
                      t = n[0],
                      a = n[1];
                    return [
                      t,
                      Object.assign(
                        {
                          get: r.bind(null, t),
                          set: i.bind(null, t),
                          enumerable: !0,
                        },
                        a
                      ),
                    ];
                  })
                )
              ),
                n &&
                  k(
                    Object.keys(n).reduce(function (e, t) {
                      return n[t] !== d[t] && (e[t] = d[t] || {}), e;
                    }, {})
                  ),
                (n = d),
                (t = {});
            }
            function y() {
              if (g && t && (0, c.isPlainObject)(t[g])) {
                var e = t[g],
                  r = new Set(Object.keys(n).concat(Object.keys(e)));
                return (0, u.Oc)(r).reduce(function (t, r) {
                  return (
                    void 0 === e[r]
                      ? (t[r] = n[r])
                      : void 0 === n[r]
                      ? (t[r] = e[r])
                      : (0, c.isPlainObject)(e[r])
                      ? (t[r] = (0, c.mergeDeep)({}, n[r], e[r]))
                      : (t[r] = e[r]),
                    t
                  );
                }, {});
              }
              return Object.assign({}, n);
            }
            var E = [
                y,
                function () {
                  var e = y();
                  return (
                    Object.defineProperty(e, "ortb2", {
                      get: function () {
                        throw new Error(
                          "invalid access to 'orbt2' config - use request parameters instead"
                        );
                      },
                    }),
                    e
                  );
                },
              ].map(function (e) {
                return function () {
                  if (
                    arguments.length <= 1 &&
                    "function" !=
                      typeof (arguments.length <= 0 ? void 0 : arguments[0])
                  ) {
                    var n = arguments.length <= 0 ? void 0 : arguments[0];
                    return n ? (0, s.Z)(e(), n) : y();
                  }
                  return B.apply(void 0, arguments);
                };
              }),
              w = (0, o.Z)(E, 2),
              T = w[0],
              I = w[1],
              A = [I, T].map(function (e) {
                return function () {
                  var n = e.apply(void 0, arguments);
                  return (
                    n && "object" === (0, i.Z)(n) && (n = (0, c.deepClone)(n)),
                    n
                  );
                };
              }),
              C = (0, o.Z)(A, 2),
              O = C[0],
              S = C[1];
            function j(t) {
              if ((0, c.isPlainObject)(t)) {
                var r = Object.keys(t),
                  i = {};
                r.forEach(function (r) {
                  var o = t[r];
                  (0, c.isPlainObject)(e[r]) &&
                    (0, c.isPlainObject)(o) &&
                    (o = Object.assign({}, e[r], o));
                  try {
                    i[r] = n[r] = o;
                  } catch (e) {
                    (0,
                    c.logWarn)("Cannot set config for property ".concat(r, " : "), e);
                  }
                }),
                  k(i);
              } else (0, c.logError)("setConfig options must be an object");
            }
            function B(e, n) {
              var t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                i = n;
              if (
                ("string" != typeof e && ((i = e), (e = m), (t = n || {})),
                "function" == typeof i)
              ) {
                var o = { topic: e, callback: i };
                return (
                  d.push(o),
                  t.init && i(e === m ? I() : (0, r.Z)({}, e, I(e))),
                  function () {
                    d.splice(d.indexOf(o), 1);
                  }
                );
              }
              (0, c.logError)("listener must be a function");
            }
            function k(e) {
              var n = Object.keys(e);
              d
                .filter(function (e) {
                  return (0, u.q9)(n, e.topic);
                })
                .forEach(function (n) {
                  n.callback((0, r.Z)({}, n.topic, e[n.topic]));
                }),
                d
                  .filter(function (e) {
                    return e.topic === m;
                  })
                  .forEach(function (n) {
                    return n.callback(e);
                  });
            }
            function R(e) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              try {
                r(e),
                  e.bidders.forEach(function (r) {
                    t[r] || (t[r] = {}),
                      Object.keys(e.config).forEach(function (i) {
                        var o = e.config[i];
                        if ((0, c.isPlainObject)(o)) {
                          var a = n ? c.mergeDeep : Object.assign;
                          t[r][i] = a({}, t[r][i] || {}, o);
                        } else t[r][i] = o;
                      });
                  });
              } catch (e) {
                (0, c.logError)(e);
              }
              function r(e) {
                if (!(0, c.isPlainObject)(e))
                  throw "setBidderConfig bidder options must be an object";
                if (!Array.isArray(e.bidders) || !e.bidders.length)
                  throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                if (!(0, c.isPlainObject)(e.config))
                  throw "setBidderConfig bidder options must contain a config object";
              }
            }
            function D(e, n) {
              g = e;
              try {
                return n();
              } finally {
                U();
              }
            }
            function U() {
              g = null;
            }
            return (
              b(),
              {
                getCurrentBidder: function () {
                  return g;
                },
                resetBidder: U,
                getConfig: I,
                getAnyConfig: T,
                readConfig: O,
                readAnyConfig: S,
                setConfig: j,
                mergeConfig: function (e) {
                  if ((0, c.isPlainObject)(e)) {
                    var n = (0, c.mergeDeep)(y(), e);
                    return (
                      j(
                        (function (e) {
                          for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {};
                            n % 2
                              ? f(Object(t), !0).forEach(function (n) {
                                  (0, r.Z)(e, n, t[n]);
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(t)
                                )
                              : f(Object(t)).forEach(function (n) {
                                  Object.defineProperty(
                                    e,
                                    n,
                                    Object.getOwnPropertyDescriptor(t, n)
                                  );
                                });
                          }
                          return e;
                        })({}, n)
                      ),
                      n
                    );
                  }
                  (0, c.logError)("mergeConfig input must be an object");
                },
                setDefaults: function (t) {
                  (0, c.isPlainObject)(e)
                    ? (Object.assign(e, t), Object.assign(n, t))
                    : (0, c.logError)("defaults must be an object");
                },
                resetConfig: b,
                runWithBidder: D,
                callbackWithBidder: function (e) {
                  return function (n) {
                    return function () {
                      if ("function" == typeof n) {
                        for (
                          var t = arguments.length, r = new Array(t), i = 0;
                          i < t;
                          i++
                        )
                          r[i] = arguments[i];
                        return D(e, n.bind.apply(n, [this].concat(r)));
                      }
                      (0, c.logWarn)(
                        "config.callbackWithBidder callback is not a function"
                      );
                    };
                  };
                },
                setBidderConfig: R,
                getBidderConfig: function () {
                  return t;
                },
                mergeBidderConfig: function (e) {
                  return R(e, !0);
                },
              }
            );
          })();
        },
        34516: function (e, n, t) {
          t.d(n, {
            $P: function () {
              return E;
            },
            Lw: function () {
              return w;
            },
            NO: function () {
              return L;
            },
            TJ: function () {
              return Z;
            },
            VP: function () {
              return M;
            },
            nX: function () {
              return x;
            },
            qh: function () {
              return F;
            },
            rp: function () {
              return N;
            },
          });
          var r = t(70885),
            i = t(97326),
            o = t(60136),
            a = t(82963),
            u = t(61120),
            c = t(15671),
            s = t(43144),
            d = t(4942),
            f = t(86033),
            l = t(13092),
            g = t(64358),
            v = t(68792),
            p = t(3193);
          function h(e) {
            var n = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var t,
                r = (0, u.Z)(e);
              if (n) {
                var i = (0, u.Z)(this).constructor;
                t = Reflect.construct(r, arguments, i);
              } else t = r.apply(this, arguments);
              return (0, a.Z)(this, t);
            };
          }
          function m(e, n, t) {
            b(e, n), n.set(e, t);
          }
          function b(e, n) {
            if (n.has(e))
              throw new TypeError(
                "Cannot initialize the same private elements twice on an object"
              );
          }
          function y(e, n, t) {
            if (!n.has(e))
              throw new TypeError(
                "attempted to get private field on non-instance"
              );
            return t;
          }
          var E = Object.freeze({}),
            w = Object.freeze({}),
            T = new WeakMap(),
            I = new WeakMap(),
            A = new WeakMap(),
            C = new WeakMap(),
            O = new WeakMap(),
            S = new WeakMap(),
            j = new WeakSet(),
            B = (function () {
              function e() {
                var n, t;
                (0, c.Z)(this, e),
                  b((n = this), (t = j)),
                  t.add(n),
                  m(this, T, { writable: !0, value: void 0 }),
                  m(this, I, { writable: !0, value: void 0 }),
                  m(this, A, { writable: !0, value: void 0 }),
                  m(this, C, { writable: !0, value: void 0 }),
                  m(this, O, { writable: !0, value: !0 }),
                  m(this, S, { writable: !0, value: void 0 }),
                  (0, d.Z)(this, "generatedTime", void 0),
                  (0, d.Z)(this, "hashFields", void 0),
                  this.reset();
              }
              return (
                (0, s.Z)(e, [
                  {
                    key: "reset",
                    value: function () {
                      (0, l.Z)(this, A, (0, v.P)()),
                        (0, l.Z)(this, T, !1),
                        (0, l.Z)(this, I, null),
                        (0, l.Z)(this, C, !1),
                        (this.generatedTime = null);
                    },
                  },
                  {
                    key: "enable",
                    value: function () {
                      (0, l.Z)(this, T, !0);
                    },
                  },
                  {
                    key: "enabled",
                    get: function () {
                      return (0, f.Z)(this, T);
                    },
                  },
                  {
                    key: "ready",
                    get: function () {
                      return (0, f.Z)(this, C);
                    },
                  },
                  {
                    key: "promise",
                    get: function () {
                      return (0, f.Z)(this, C)
                        ? v.Z.resolve((0, f.Z)(this, I))
                        : ((0, f.Z)(this, T) || y(this, j, k).call(this, null),
                          (0, f.Z)(this, A).promise);
                    },
                  },
                  {
                    key: "setConsentData",
                    value: function (e) {
                      var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : (0, g.timestamp)();
                      (this.generatedTime = n),
                        (0, l.Z)(this, O, !0),
                        y(this, j, k).call(this, e);
                    },
                  },
                  {
                    key: "getConsentData",
                    value: function () {
                      return (0, f.Z)(this, I);
                    },
                  },
                  {
                    key: "hash",
                    get: function () {
                      var e = this;
                      return (
                        (0, f.Z)(this, O) &&
                          ((0, l.Z)(
                            this,
                            S,
                            (0, g.cyrb53Hash)(
                              JSON.stringify(
                                (0, f.Z)(this, I) && this.hashFields
                                  ? this.hashFields.map(function (n) {
                                      return (0, f.Z)(e, I)[n];
                                    })
                                  : (0, f.Z)(this, I)
                              )
                            )
                          ),
                          (0, l.Z)(this, O, !1)),
                        (0, f.Z)(this, S)
                      );
                    },
                  },
                ]),
                e
              );
            })();
          function k(e) {
            (0, l.Z)(this, C, !0),
              (0, l.Z)(this, I, e),
              (0, f.Z)(this, A).resolve(e);
          }
          var R = (function (e) {
              (0, o.Z)(t, e);
              var n = h(t);
              function t() {
                return (0, c.Z)(this, t), n.apply(this, arguments);
              }
              return (
                (0, s.Z)(t, [
                  {
                    key: "getConsentMeta",
                    value: function () {
                      var e = this.getConsentData();
                      if (e && this.generatedTime)
                        return { usp: e, generatedAt: this.generatedTime };
                    },
                  },
                ]),
                t
              );
            })(B),
            D = (function (e) {
              (0, o.Z)(t, e);
              var n = h(t);
              function t() {
                var e;
                (0, c.Z)(this, t);
                for (
                  var r = arguments.length, o = new Array(r), a = 0;
                  a < r;
                  a++
                )
                  o[a] = arguments[a];
                return (
                  (e = n.call.apply(n, [this].concat(o))),
                  (0, d.Z)((0, i.Z)(e), "hashFields", [
                    "gdprApplies",
                    "consentString",
                  ]),
                  e
                );
              }
              return (
                (0, s.Z)(t, [
                  {
                    key: "getConsentMeta",
                    value: function () {
                      var e = this.getConsentData();
                      if (e && e.vendorData && this.generatedTime)
                        return {
                          gdprApplies: e.gdprApplies,
                          consentStringSize: (0, g.isStr)(e.vendorData.tcString)
                            ? e.vendorData.tcString.length
                            : 0,
                          generatedAt: this.generatedTime,
                          apiVersion: e.apiVersion,
                        };
                    },
                  },
                ]),
                t
              );
            })(B),
            U = (function (e) {
              (0, o.Z)(t, e);
              var n = h(t);
              function t() {
                var e;
                (0, c.Z)(this, t);
                for (
                  var r = arguments.length, o = new Array(r), a = 0;
                  a < r;
                  a++
                )
                  o[a] = arguments[a];
                return (
                  (e = n.call.apply(n, [this].concat(o))),
                  (0, d.Z)((0, i.Z)(e), "hashFields", [
                    "applicableSections",
                    "gppString",
                  ]),
                  e
                );
              }
              return (
                (0, s.Z)(t, [
                  {
                    key: "getConsentMeta",
                    value: function () {
                      if (this.getConsentData() && this.generatedTime)
                        return { generatedAt: this.generatedTime };
                    },
                  },
                ]),
                t
              );
            })(B);
          var P,
            _,
            q,
            N = new D(),
            x = new R(),
            Z = new U(),
            M = (function () {
              function e() {
                return !!p.vc.getConfig("coppa");
              }
              return {
                getCoppa: e,
                getConsentData: e,
                getConsentMeta: e,
                reset: function () {},
                get promise() {
                  return v.Z.resolve(e());
                },
                get hash() {
                  return e() ? "1" : "0";
                },
              };
            })(),
            F =
              ((P = {}),
              (_ = {}),
              (q = {}),
              {
                register: function (e, n, t) {
                  t &&
                    (((P[n] = P[n] || {})[e] = t),
                    _.hasOwnProperty(n)
                      ? _[n] !== t && (_[n] = q)
                      : (_[n] = t));
                },
                get: function (e) {
                  var n = { modules: P[e] || {} };
                  return (
                    _.hasOwnProperty(e) && _[e] !== q && (n.gvlid = _[e]), n
                  );
                },
              }),
            W = { gdpr: N, usp: x, gpp: Z, coppa: M };
          var L = (function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : W;
            function n(n) {
              return function () {
                return Object.fromEntries(
                  e.map(function (e) {
                    var t = (0, r.Z)(e, 2);
                    return [t[0], t[1][n]()];
                  })
                );
              };
            }
            return (
              (e = Object.entries(e)),
              Object.assign(
                {
                  get promise() {
                    return v.Z.all(
                      e.map(function (e) {
                        var n = (0, r.Z)(e, 2),
                          t = n[0];
                        return n[1].promise.then(function (e) {
                          return [t, e];
                        });
                      })
                    ).then(function (e) {
                      return Object.fromEntries(e);
                    });
                  },
                  get hash() {
                    return (0, g.cyrb53Hash)(
                      e
                        .map(function (e) {
                          var n = (0, r.Z)(e, 2);
                          n[0];
                          return n[1].hash;
                        })
                        .join(":")
                    );
                  },
                },
                Object.fromEntries(
                  ["getConsentData", "getConsentMeta", "reset"].map(function (
                    e
                  ) {
                    return [e, n(e)];
                  })
                )
              )
            );
          })();
        },
        62200: function (e, n, t) {
          t.d(n, {
            FP: function () {
              return a;
            },
            FY: function () {
              return l;
            },
            Gw: function () {
              return p;
            },
            Q_: function () {
              return o;
            },
            Ql: function () {
              return s;
            },
            TD: function () {
              return d;
            },
            UE: function () {
              return v;
            },
            V1: function () {
              return h;
            },
            X3: function () {
              return E;
            },
            aI: function () {
              return c;
            },
            f: function () {
              return i;
            },
            k2: function () {
              return r;
            },
            kF: function () {
              return f;
            },
            oF: function () {
              return b;
            },
            os: function () {
              return g;
            },
            q_: function () {
              return u;
            },
            s$: function () {
              return m;
            },
            zA: function () {
              return y;
            },
          });
          var r = {
              PL_CODE: "code",
              PL_SIZE: "sizes",
              PL_BIDS: "bids",
              BD_BIDDER: "bidder",
              BD_ID: "paramsd",
              BD_PL_ID: "placementId",
              ADSERVER_TARGETING: "adserverTargeting",
              BD_SETTING_STANDARD: "standard",
            },
            i = "pbjs_debug",
            o = { GOOD: 1 },
            a = {
              AUCTION_INIT: "auctionInit",
              AUCTION_TIMEOUT: "auctionTimeout",
              AUCTION_END: "auctionEnd",
              BID_ADJUSTMENT: "bidAdjustment",
              BID_TIMEOUT: "bidTimeout",
              BID_REQUESTED: "bidRequested",
              BID_RESPONSE: "bidResponse",
              BID_REJECTED: "bidRejected",
              NO_BID: "noBid",
              SEAT_NON_BID: "seatNonBid",
              BID_WON: "bidWon",
              BIDDER_DONE: "bidderDone",
              BIDDER_ERROR: "bidderError",
              SET_TARGETING: "setTargeting",
              BEFORE_REQUEST_BIDS: "beforeRequestBids",
              BEFORE_BIDDER_HTTP: "beforeBidderHttp",
              REQUEST_BIDS: "requestBids",
              ADD_AD_UNITS: "addAdUnits",
              AD_RENDER_FAILED: "adRenderFailed",
              AD_RENDER_SUCCEEDED: "adRenderSucceeded",
              TCF2_ENFORCEMENT: "tcf2Enforcement",
              AUCTION_DEBUG: "auctionDebug",
              BID_VIEWABLE: "bidViewable",
              STALE_RENDER: "staleRender",
              BILLABLE_EVENT: "billableEvent",
              BID_ACCEPTED: "bidAccepted",
            },
            u = {
              PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocument",
              NO_AD: "noAd",
              EXCEPTION: "exception",
              CANNOT_FIND_AD: "cannotFindAd",
              MISSING_DOC_OR_ADID: "missingDocOrAdid",
            },
            c = { bidWon: "adUnitCode" },
            s = {
              LOW: "low",
              MEDIUM: "medium",
              HIGH: "high",
              AUTO: "auto",
              DENSE: "dense",
              CUSTOM: "custom",
            },
            d = {
              BIDDER: "hb_bidder",
              AD_ID: "hb_adid",
              PRICE_BUCKET: "hb_pb",
              SIZE: "hb_size",
              DEAL: "hb_deal",
              SOURCE: "hb_source",
              FORMAT: "hb_format",
              UUID: "hb_uuid",
              CACHE_ID: "hb_cache_id",
              CACHE_HOST: "hb_cache_host",
              ADOMAIN: "hb_adomain",
              ACAT: "hb_acat",
              CRID: "hb_crid",
              DSP: "hb_dsp",
            },
            f = {
              BIDDER: "hb_bidder",
              AD_ID: "hb_adid",
              PRICE_BUCKET: "hb_pb",
              SIZE: "hb_size",
              DEAL: "hb_deal",
              FORMAT: "hb_format",
              UUID: "hb_uuid",
              CACHE_HOST: "hb_cache_host",
            },
            l = {
              title: "hb_native_title",
              body: "hb_native_body",
              body2: "hb_native_body2",
              privacyLink: "hb_native_privacy",
              privacyIcon: "hb_native_privicon",
              sponsoredBy: "hb_native_brand",
              image: "hb_native_image",
              icon: "hb_native_icon",
              clickUrl: "hb_native_linkurl",
              displayUrl: "hb_native_displayurl",
              cta: "hb_native_cta",
              rating: "hb_native_rating",
              address: "hb_native_address",
              downloads: "hb_native_downloads",
              likes: "hb_native_likes",
              phone: "hb_native_phone",
              price: "hb_native_price",
              salePrice: "hb_native_saleprice",
              rendererUrl: "hb_renderer_url",
              adTemplate: "hb_adTemplate",
            },
            g = {
              SRC: "s2s",
              DEFAULT_ENDPOINT:
                "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
              SYNCED_BIDDERS_KEY: "pbjsSyncs",
            },
            v = {
              BID_TARGETING_SET: "targetingSet",
              RENDERED: "rendered",
              BID_REJECTED: "bidRejected",
            },
            p = {
              INVALID: "Bid has missing or invalid properties",
              INVALID_REQUEST_ID: "Invalid request ID",
              BIDDER_DISALLOWED:
                "Bidder code is not allowed by allowedAlternateBidderCodes / allowUnknownBidderCodes",
              FLOOR_NOT_MET: "Bid does not meet price floor",
              CANNOT_CONVERT_CURRENCY: "Unable to convert currency",
              DSA_REQUIRED:
                "Bid does not provide required DSA transparency info",
              DSA_MISMATCH: "Bid indicates inappropriate DSA rendering method",
            },
            h = {
              body: "desc",
              body2: "desc2",
              sponsoredBy: "sponsored",
              cta: "ctatext",
              rating: "rating",
              address: "address",
              downloads: "downloads",
              likes: "likes",
              phone: "phone",
              price: "price",
              salePrice: "saleprice",
              displayUrl: "displayurl",
            },
            m = {
              sponsored: 1,
              desc: 2,
              rating: 3,
              likes: 4,
              downloads: 5,
              price: 6,
              saleprice: 7,
              phone: 8,
              address: 9,
              desc2: 10,
              displayurl: 11,
              ctatext: 12,
            },
            b = { ICON: 1, MAIN: 3 },
            y =
              25602 == t.j
                ? [
                    "privacyIcon",
                    "clickUrl",
                    "sendTargetingKeys",
                    "adTemplate",
                    "rendererUrl",
                    "type",
                  ]
                : null,
            E = {
              REQUEST: "Prebid Request",
              RESPONSE: "Prebid Response",
              NATIVE: "Prebid Native",
              EVENT: "Prebid Event",
            };
        },
        56463: function (e, n, t) {
          if (
            (t.d(n, {
              D: function () {
                return f;
              },
              t: function () {
                return g;
              },
            }),
            25602 == t.j)
          )
            var r = t(34614);
          var i = t(64358);
          if (25602 == t.j) var o = t(3193);
          var a = { buckets: [{ max: 5, increment: 0.5 }] },
            u = { buckets: [{ max: 20, increment: 0.1 }] },
            c = { buckets: [{ max: 20, increment: 0.01 }] },
            s = {
              buckets: [
                { max: 3, increment: 0.01 },
                { max: 8, increment: 0.05 },
                { max: 20, increment: 0.5 },
              ],
            },
            d = {
              buckets: [
                { max: 5, increment: 0.05 },
                { max: 10, increment: 0.1 },
                { max: 20, increment: 0.5 },
              ],
            };
          function f(e, n) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 1,
              r = parseFloat(e);
            return (
              isNaN(r) && (r = ""),
              {
                low: "" === r ? "" : l(e, a, t),
                med: "" === r ? "" : l(e, u, t),
                high: "" === r ? "" : l(e, c, t),
                auto: "" === r ? "" : l(e, d, t),
                dense: "" === r ? "" : l(e, s, t),
                custom: "" === r ? "" : l(e, n, t),
              }
            );
          }
          function l(e, n, t) {
            var a = "";
            if (!g(n)) return a;
            var u = n.buckets.reduce(
                function (e, n) {
                  return e.max > n.max ? e : n;
                },
                { max: 0 }
              ),
              c = 0,
              s = (0, r.sE)(n.buckets, function (n) {
                if (e > u.max * t) {
                  var r = n.precision;
                  void 0 === r && (r = 2), (a = (n.max * t).toFixed(r));
                } else {
                  if (e <= n.max * t && e >= c * t) return (n.min = c), n;
                  c = n.max;
                }
              });
            return (
              s &&
                (a = (function (e, n, t) {
                  var r = void 0 !== n.precision ? n.precision : 2,
                    a = n.increment * t,
                    u = n.min * t,
                    c = Math.floor,
                    s = o.vc.getConfig("cpmRoundingFunction");
                  "function" == typeof s && (c = s);
                  var d,
                    f,
                    l = Math.pow(10, r + 2),
                    g = (e * l - u * l) / (a * l);
                  try {
                    d = c(g) * a + u;
                  } catch (e) {
                    f = !0;
                  }
                  (f || "number" != typeof d) &&
                    ((0, i.logWarn)(
                      "Invalid rounding function passed in config"
                    ),
                    (d = Math.floor(g) * a + u));
                  return (d = Number(d.toFixed(10))).toFixed(r);
                })(e, s, t)),
              a
            );
          }
          function g(e) {
            if ((0, i.isEmpty)(e) || !e.buckets || !Array.isArray(e.buckets))
              return !1;
            var n = !0;
            return (
              e.buckets.forEach(function (e) {
                (e.max && e.increment) || (n = !1);
              }),
              n
            );
          }
        },
        88099: function (e, n, t) {
          t.d(n, {
            W: function () {
              return c;
            },
            m: function () {
              return u;
            },
          });
          var r,
            i = t(68792),
            o = t(64358),
            a = t(68304),
            u = (0, t(92797).z3)("sync", function (e) {
              return a._;
            }),
            c =
              ((r = {}),
              function (e) {
                var n = u(e);
                return (
                  r.hasOwnProperty(n) ||
                    (r[n] = new i.Z(function (e) {
                      var t = (0, o.createInvisibleIframe)();
                      (t.srcdoc = "<script>".concat(n, "</script>")),
                        (t.onload = function () {
                          return e(t.contentWindow.render);
                        }),
                        document.body.appendChild(t);
                    })),
                  r[n]
                );
              });
        },
        53777: function (e, n, t) {
          t.d(n, {
            Jc: function () {
              return d;
            },
            dF: function () {
              return p;
            },
          });
          var r = t(3193),
            i = t(92797),
            o = t(78640),
            a = t(64358),
            u = t(69626),
            c = t(55730),
            s = t(68792),
            d = "__pbjs_debugging__";
          function f() {
            return (0, o.R)().installedModules.includes("debugging");
          }
          function l(e) {
            return new s.Z(function (n) {
              (0, c.B)(e, "debugging", n);
            });
          }
          function g() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = e.alreadyInstalled,
              t = void 0 === n ? f : n,
              c = e.script,
              g = void 0 === c ? l : c,
              v = null;
            return function () {
              return (
                null == v &&
                  (v = new s.Z(function (e, n) {
                    setTimeout(function () {
                      if (t()) e();
                      else {
                        var c =
                          "https://cdn.jsdelivr.net/npm/prebid.js@8.45.0/dist/debugging-standalone.js";
                        (0, a.logMessage)(
                          'Debugging module not installed, loading it from "'.concat(
                            c,
                            '"...'
                          )
                        ),
                          ((0, o.R)()._installDebugging = !0),
                          g(c)
                            .then(function () {
                              (0, o.R)()._installDebugging({
                                DEBUG_KEY: d,
                                hook: i.z3,
                                config: r.vc,
                                createBid: u.m,
                                logger: (0, a.prefixLog)("DEBUG:"),
                              });
                            })
                            .then(e, n);
                      }
                    });
                  })),
                v
              );
            };
          }
          var v = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = e.load,
              t = void 0 === n ? g() : n,
              r = e.hook,
              o = void 0 === r ? (0, i.v5)("requestBids") : r,
              a = null,
              u = !1;
            function c(e) {
              for (
                var n = this,
                  t = arguments.length,
                  r = new Array(t > 1 ? t - 1 : 0),
                  i = 1;
                i < t;
                i++
              )
                r[i - 1] = arguments[i];
              return (a || s.Z.resolve()).then(function () {
                return e.apply(n, r);
              });
            }
            function d() {
              u || ((a = t()), o.before(c, 99), (u = !0));
            }
            function f() {
              o.getHooks({ hook: c }).remove(), (u = !1);
            }
            function l() {
              (a = null), f();
            }
            return { enable: d, disable: f, reset: l };
          })();
          v.reset;
          function p() {
            var e = null;
            try {
              e = window.sessionStorage;
            } catch (e) {}
            if (null !== e) {
              var n = v,
                t = null;
              try {
                t = e.getItem(d);
              } catch (e) {}
              null !== t && n.enable();
            }
          }
          r.vc.getConfig("debugging", function (e) {
            var n = e.debugging;
            null != n && n.enabled ? v.enable() : v.disable();
          });
        },
        52021: function (e, n, t) {
          t.r(n),
            t.d(n, {
              addEvents: function () {
                return E;
              },
              clearEvents: function () {
                return T;
              },
              emit: function () {
                return y;
              },
              get: function () {
                return m;
              },
              getEvents: function () {
                return b;
              },
              has: function () {
                return w;
              },
              off: function () {
                return h;
              },
              on: function () {
                return p;
              },
            });
          var r = t(64358),
            i = t(62200),
            o = t(10613),
            a = t(3193),
            u = "eventHistoryTTL",
            c = null,
            s = (0, o.Z)({
              monotonic: !0,
              ttl: function () {
                return c;
              },
            });
          a.vc.getConfig(u, function (e) {
            var n,
              t = c;
            (e = null === (n = e) || void 0 === n ? void 0 : n[u]),
              t !== (c = "number" == typeof e ? 1e3 * e : null) && s.refresh();
          });
          var d = Array.prototype.slice,
            f = Array.prototype.push,
            l = Object.values(i.FP),
            g = i.aI,
            v = (function () {
              var e = {},
                n = {};
              function t(n, t) {
                r.logMessage("Emitting event for: " + n);
                var i = t[0] || {},
                  o = i[g[n]],
                  a = e[n] || { que: [] },
                  u = Object.keys(a),
                  c = [];
                s.add({
                  eventType: n,
                  args: i,
                  id: o,
                  elapsedTime: r.getPerformanceNow(),
                }),
                  o && u.includes(o) && f.apply(c, a[o].que),
                  f.apply(c, a.que),
                  (c || []).forEach(function (e) {
                    if (e)
                      try {
                        e.apply(null, t);
                      } catch (e) {
                        r.logError(
                          "Error executing handler:",
                          "events.js",
                          e,
                          n
                        );
                      }
                  });
              }
              function i(e) {
                return l.includes(e);
              }
              return (
                (n.has = i),
                (n.on = function (n, t, o) {
                  if (i(n)) {
                    var a = e[n] || { que: [] };
                    o
                      ? ((a[o] = a[o] || { que: [] }), a[o].que.push(t))
                      : a.que.push(t),
                      (e[n] = a);
                  } else
                    r.logError(
                      "Wrong event name : " + n + " Valid event names :" + l
                    );
                }),
                (n.emit = function (e) {
                  var n = d.call(arguments, 1);
                  t(e, n);
                }),
                (n.off = function (n, t, i) {
                  var o = e[n];
                  r.isEmpty(o) ||
                    (r.isEmpty(o.que) && r.isEmpty(o[i])) ||
                    (i && (r.isEmpty(o[i]) || r.isEmpty(o[i].que))) ||
                    (i
                      ? (o[i].que || []).forEach(function (e) {
                          var n = o[i].que;
                          e === t && n.splice(n.indexOf(e), 1);
                        })
                      : (o.que || []).forEach(function (e) {
                          var n = o.que;
                          e === t && n.splice(n.indexOf(e), 1);
                        }),
                    (e[n] = o));
                }),
                (n.get = function () {
                  return e;
                }),
                (n.addEvents = function (e) {
                  l = l.concat(e);
                }),
                (n.getEvents = function () {
                  return s.toArray().map(function (e) {
                    return Object.assign({}, e);
                  });
                }),
                n
              );
            })();
          r._setEventEmitter(v.emit.bind(v));
          var p = v.on,
            h = v.off,
            m = v.get,
            b = v.getEvents,
            y = v.emit,
            E = v.addEvents,
            w = v.has;
          function T() {
            s.clear();
          }
        },
        54078: function (e, n, t) {
          t.d(n, {
            S: function () {
              return C;
            },
          });
          var r = t(70885),
            i = t(92797),
            o = t(25102),
            a = t(38196),
            u = t(64358),
            c = t(96475),
            s = t(3193),
            d = t(68792),
            f = [
              "architecture",
              "bitness",
              "model",
              "platformVersion",
              "fullVersionList",
            ],
            l = ["brands", "mobile", "platform"],
            g = (function () {
              var e,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null === (e = window.navigator) || void 0 === e
                    ? void 0
                    : e.userAgentData,
                t =
                  n &&
                  l.some(function (e) {
                    return void 0 !== n[e];
                  })
                    ? Object.freeze(p(1, n))
                    : null;
              return function () {
                return t;
              };
            })(),
            v = (function () {
              var e,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null === (e = window.navigator) || void 0 === e
                    ? void 0
                    : e.userAgentData,
                t = {},
                r = new WeakMap();
              return function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : f;
                if (!r.has(e)) {
                  var i = Array.from(e);
                  i.sort(), r.set(e, i.join("|"));
                }
                var o = r.get(e);
                if (!t.hasOwnProperty(o))
                  try {
                    t[o] = n
                      .getHighEntropyValues(e)
                      .then(function (e) {
                        return (0, u.isEmpty)(e)
                          ? null
                          : Object.freeze(p(2, e));
                      })
                      .catch(function () {
                        return null;
                      });
                  } catch (e) {
                    t[o] = d.Z.resolve(null);
                  }
                return t[o];
              };
            })();
          function p(e, n) {
            function t(e, n) {
              var t = { brand: e };
              return (
                (0, u.isStr)(n) &&
                  !(0, u.isEmptyStr)(n) &&
                  (t.version = n.split(".")),
                t
              );
            }
            var r = { source: e };
            return (
              n.platform && (r.platform = t(n.platform, n.platformVersion)),
              (n.fullVersionList || n.brands) &&
                (r.browsers = (n.fullVersionList || n.brands).map(function (e) {
                  return t(e.brand, e.version);
                })),
              void 0 !== n.mobile && (r.mobile = n.mobile ? 1 : 0),
              ["model", "bitness", "architecture"].forEach(function (e) {
                var t = n[e];
                (0, u.isStr)(t) && (r[e] = t);
              }),
              r
            );
          }
          var h = t(83790),
            m = t(50571),
            b = t(10286),
            y = t(74947),
            E = t(9633);
          function w(e, n) {
            var t =
              ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
            if (!t) {
              if (
                Array.isArray(e) ||
                (t = (function (e, n) {
                  if (!e) return;
                  if ("string" == typeof e) return T(e, n);
                  var t = Object.prototype.toString.call(e).slice(8, -1);
                  "Object" === t && e.constructor && (t = e.constructor.name);
                  if ("Map" === t || "Set" === t) return Array.from(e);
                  if (
                    "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  )
                    return T(e, n);
                })(e)) ||
                (n && e && "number" == typeof e.length)
              ) {
                t && (e = t);
                var r = 0,
                  i = function () {};
                return {
                  s: i,
                  n: function () {
                    return r >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[r++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: i,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var o,
              a = !0,
              u = !1;
            return {
              s: function () {
                t = t.call(e);
              },
              n: function () {
                var e = t.next();
                return (a = e.done), e;
              },
              e: function (e) {
                (u = !0), (o = e);
              },
              f: function () {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (u) throw o;
                }
              },
            };
          }
          function T(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
            return r;
          }
          var I = {
              getRefererInfo: o.nH,
              findRootDomain: a.W,
              getWindowTop: u.getWindowTop,
              getWindowSelf: u.getWindowSelf,
              getHighEntropySUA: v,
              getLowEntropySUA: g,
            },
            A = (0, h.A_)("FPD"),
            C = (0, i.z3)("sync", function (e) {
              var n,
                t = [
                  e,
                  ((n = s.vc.getConfig("firstPartyData.uaHints")),
                  Array.isArray(n) && 0 !== n.length
                    ? I.getHighEntropySUA(n)
                    : d.Z.resolve(I.getLowEntropySUA())).catch(function () {
                    return null;
                  }),
                  d.Z.resolve(
                    "cookieDeprecationLabel" in navigator &&
                      (0, m.xD)(y.S1, (0, b.T)(E.wu, "cdep")) &&
                      navigator.cookieDeprecationLabel.getValue()
                  ).catch(function () {
                    return null;
                  }),
                ];
              return d.Z.all(t).then(function (e) {
                var n = (0, r.Z)(e, 3),
                  t = n[0],
                  i = n[1],
                  o = n[2],
                  a = I.getRefererInfo();
                if (
                  ((function (e) {
                    ["app", "site", "device"].forEach(function (n) {
                      var t = s.vc.getConfig(n);
                      null != t && (e[n] = (0, u.mergeDeep)({}, t, e[n]));
                    });
                  })(t),
                  Object.entries(j).forEach(function (e) {
                    var n = (0, r.Z)(e, 2),
                      i = n[0],
                      o = (0, n[1])(t, a);
                    o &&
                      Object.keys(o).length > 0 &&
                      (t[i] = (0, u.mergeDeep)({}, o, t[i]));
                  }),
                  i &&
                    (0, c.N)(
                      t,
                      "device.sua",
                      Object.assign({}, i, t.device.sua)
                    ),
                  o)
                ) {
                  var d = { cdep: o };
                  (0, c.N)(t, "device.ext", Object.assign({}, d, t.device.ext));
                }
                t = A(t);
                var f,
                  l = w(h.Iq);
                try {
                  for (l.s(); !(f = l.n()).done; ) {
                    var g = f.value;
                    if ((0, h.Qg)(t, g)) {
                      t[g] = (0, u.mergeDeep)({}, B(t, a), t[g]);
                      break;
                    }
                  }
                } catch (e) {
                  l.e(e);
                } finally {
                  l.f();
                }
                return t;
              });
            });
          function O(e) {
            try {
              return e(I.getWindowTop());
            } catch (n) {
              return e(I.getWindowSelf());
            }
          }
          function S(e) {
            return (0, u.getDefinedParams)(e, Object.keys(e));
          }
          var j = {
            site: function (e, n) {
              if (
                !h.Iq.filter(function (e) {
                  return "site" !== e;
                }).some(h.Qg.bind(null, e))
              )
                return S({ page: n.page, ref: n.ref });
            },
            device: function () {
              return O(function (e) {
                var n,
                  t = {
                    w:
                      e.innerWidth ||
                      e.document.documentElement.clientWidth ||
                      e.document.body.clientWidth,
                    h:
                      e.innerHeight ||
                      e.document.documentElement.clientHeight ||
                      e.document.body.clientHeight,
                    dnt: (0, u.getDNT)() ? 1 : 0,
                    ua: e.navigator.userAgent,
                    language: e.navigator.language.split("-").shift(),
                  };
                return (
                  null !== (n = e.navigator) &&
                    void 0 !== n &&
                    n.webdriver &&
                    (0, c.N)(t, "ext.webdriver", !0),
                  t
                );
              });
            },
            regs: function () {
              var e = {};
              O(function (e) {
                return e.navigator.globalPrivacyControl;
              }) && (0, c.N)(e, "ext.gpc", 1);
              var n = s.vc.getConfig("coppa");
              return "boolean" == typeof n && (e.coppa = n ? 1 : 0), e;
            },
          };
          function B(e, n) {
            var t,
              r,
              i,
              a = (0, o.hh)(n.page, { noLeadingWww: !0 });
            return S({
              domain: a,
              keywords:
                null ===
                  (t = O(function (e) {
                    return e.document.querySelector("meta[name='keywords']");
                  })) ||
                void 0 === t ||
                null === (r = t.content) ||
                void 0 === r ||
                null === (i = r.replace) ||
                void 0 === i
                  ? void 0
                  : i.call(r, /\s/g, ""),
              publisher: S({ domain: I.findRootDomain(a) }),
            });
          }
        },
        83790: function (e, n, t) {
          if (
            (t.d(n, {
              A_: function () {
                return o;
              },
              Iq: function () {
                return i;
              },
              Qg: function () {
                return a;
              },
            }),
            25602 == t.j)
          )
            var r = t(64358);
          var i = 25602 == t.j ? ["dooh", "app", "site"] : null;
          function o(e) {
            return function (n) {
              return (
                i.reduce(function (t, i) {
                  return (
                    a(n, i) &&
                      (null != t
                        ? ((0, r.logWarn)(
                            ""
                              .concat(e, " specifies both '")
                              .concat(t, "' and '")
                              .concat(i, "'; dropping the latter.")
                          ),
                          delete n[i])
                        : (t = i)),
                    t
                  );
                }, null),
                n
              );
            };
          }
          function a(e, n) {
            return null != e[n] && Object.keys(e[n]).length > 0;
          }
        },
        38196: function (e, n, t) {
          t.d(n, {
            W: function () {
              return o;
            },
          });
          var r = t(64358),
            i = (0, t(15164).eA)("fpdEnrichment"),
            o = (0, r.memoize)(function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : window.location.host;
              if (!i.cookiesAreEnabled()) return e;
              var n,
                t,
                o = e.split(".");
              if (2 === o.length) return e;
              var a = -2,
                u = "_rdc".concat(Date.now()),
                c = "writeable";
              do {
                n = o.slice(a).join(".");
                var s = new Date((0, r.timestamp)() + 1e4).toUTCString();
                i.setCookie(u, c, s, "Lax", n, void 0);
                var d = i.getCookie(u, void 0);
                d === c
                  ? ((t = !1),
                    i.setCookie(
                      u,
                      "",
                      "Thu, 01 Jan 1970 00:00:01 GMT",
                      void 0,
                      n,
                      void 0
                    ))
                  : ((a += -1), (t = Math.abs(a) <= o.length));
              } while (t);
              return n;
            });
        },
        92797: function (e, n, t) {
          if (
            (t.d(n, {
              Bx: function () {
                return v;
              },
              Cd: function () {
                return s;
              },
              IF: function () {
                return p;
              },
              bA: function () {
                return g;
              },
              o0: function () {
                return f;
              },
              v5: function () {
                return d;
              },
              z3: function () {
                return u;
              },
            }),
            25602 == t.j)
          )
            var r = t(42982);
          var i = t(81432),
            o = t.n(i),
            a = t(68792),
            u = o()({ ready: o().SYNC | o().ASYNC | o().QUEUE }),
            c = (0, a.P)();
          u.ready = (function () {
            var e = u.ready;
            return function () {
              try {
                return e.apply(u, arguments);
              } finally {
                c.resolve();
              }
            };
          })();
          var s = c.promise,
            d = u.get;
          function f(e, n) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 15,
              r = e.getHooks({ hook: n });
            0 === r.length && e.before(n, t);
          }
          var l = {};
          function g(e, n) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              i = t.postInstallAllowed,
              o = void 0 !== i && i;
            u(
              "async",
              function (t) {
                t.forEach(function (e) {
                  return n.apply(void 0, (0, r.Z)(e));
                }),
                  o && (l[e] = n);
              },
              e
            )([]);
          }
          function v(e) {
            for (
              var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1;
              r < n;
              r++
            )
              t[r - 1] = arguments[r];
            var i = l[e];
            if (i) return i.apply(void 0, t);
            d(e).before(function (e, n) {
              n.push(t), e(n);
            });
          }
          function p(e, n) {
            return (
              Object.defineProperties(
                n,
                Object.fromEntries(
                  ["before", "after", "getHooks", "removeAll"].map(function (
                    n
                  ) {
                    return [
                      n,
                      {
                        get: function () {
                          return e[n];
                        },
                      },
                    ];
                  })
                )
              ),
              n
            );
          }
        },
        24679: function (e, n, t) {
          t.d(n, {
            B5: function () {
              return r;
            },
            Mk: function () {
              return o;
            },
            Oh: function () {
              return a;
            },
            pX: function () {
              return i;
            },
          });
          var r = "native",
            i = "video",
            o = "banner",
            a = "adpod";
        },
        70059: function (e, n, t) {
          if (
            (t.d(n, {
              FB: function () {
                return F;
              },
              Fb: function () {
                return O;
              },
              JL: function () {
                return x;
              },
              Sg: function () {
                return m;
              },
              Ur: function () {
                return D;
              },
              a$: function () {
                return P;
              },
              e6: function () {
                return k;
              },
              eK: function () {
                return N;
              },
              kH: function () {
                return R;
              },
              lY: function () {
                return L;
              },
              r4: function () {
                return j;
              },
              ub: function () {
                return A;
              },
              xc: function () {
                return b;
              },
              zq: function () {
                return K;
              },
            }),
            25602 == t.j)
          )
            var r = t(42982);
          var i = t(70885);
          if (25602 == t.j) var o = t(4942);
          if (25602 == t.j) var a = t(71002);
          if (25602 == t.j) var u = t(20265);
          if (25602 == t.j) var c = t(64358);
          if (25602 == t.j) var s = t(34614);
          if (25602 == t.j) var d = t(78653);
          var f = t(62200);
          if (25602 == t.j) var l = t(24679);
          function g(e, n) {
            var t =
              ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
            if (!t) {
              if (
                Array.isArray(e) ||
                (t = (function (e, n) {
                  if (!e) return;
                  if ("string" == typeof e) return v(e, n);
                  var t = Object.prototype.toString.call(e).slice(8, -1);
                  "Object" === t && e.constructor && (t = e.constructor.name);
                  if ("Map" === t || "Set" === t) return Array.from(e);
                  if (
                    "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  )
                    return v(e, n);
                })(e)) ||
                (n && e && "number" == typeof e.length)
              ) {
                t && (e = t);
                var r = 0,
                  i = function () {};
                return {
                  s: i,
                  n: function () {
                    return r >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[r++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: i,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var o,
              a = !0,
              u = !1;
            return {
              s: function () {
                t = t.call(e);
              },
              n: function () {
                var e = t.next();
                return (a = e.done), e;
              },
              e: function (e) {
                (u = !0), (o = e);
              },
              f: function () {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (u) throw o;
                }
              },
            };
          }
          function v(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
            return r;
          }
          function p(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n &&
                (r = r.filter(function (n) {
                  return Object.getOwnPropertyDescriptor(e, n).enumerable;
                })),
                t.push.apply(t, r);
            }
            return t;
          }
          function h(e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = null != arguments[n] ? arguments[n] : {};
              n % 2
                ? p(Object(t), !0).forEach(function (n) {
                    (0, o.Z)(e, n, t[n]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : p(Object(t)).forEach(function (n) {
                    Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(t, n)
                    );
                  });
            }
            return e;
          }
          var m = 25602 == t.j ? [] : null,
            b = Object.keys(f.FY).map(function (e) {
              return f.FY[e];
            }),
            y = {
              image: {
                ortb: {
                  ver: "1.2",
                  assets: [
                    {
                      required: 1,
                      id: 1,
                      img: { type: 3, wmin: 100, hmin: 100 },
                    },
                    { required: 1, id: 2, title: { len: 140 } },
                    { required: 1, id: 3, data: { type: 1 } },
                    { required: 0, id: 4, data: { type: 2 } },
                    {
                      required: 0,
                      id: 5,
                      img: { type: 1, wmin: 20, hmin: 20 },
                    },
                  ],
                },
                image: { required: !0 },
                title: { required: !0 },
                sponsoredBy: { required: !0 },
                clickUrl: { required: !0 },
                body: { required: !1 },
                icon: { required: !1 },
              },
            },
            E = H(f.V1),
            w = H(f.s$),
            T = { img: 1, js: 2, 1: "img", 2: "js" },
            I = 1;
          function A(e) {
            return e.native && "object" === (0, a.Z)(e.native);
          }
          function C(e) {
            if (
              (e &&
                e.type &&
                (function (e) {
                  if (!e || !(0, s.q9)(Object.keys(y), e))
                    return (
                      (0, c.logError)(
                        "".concat(e, " nativeParam is not supported")
                      ),
                      !1
                    );
                  return !0;
                })(e.type) &&
                (e = y[e.type]),
              !e || !e.ortb || S(e.ortb))
            )
              return e;
          }
          function O(e) {
            e.forEach(function (e) {
              var n = e.nativeParams || (0, u.Z)(e, "mediaTypes.native");
              n && (e.nativeParams = C(n)),
                e.nativeParams &&
                  (e.nativeOrtbRequest =
                    e.nativeParams.ortb || F(e.nativeParams));
            });
          }
          function S(e) {
            var n = e.assets;
            if (!Array.isArray(n) || 0 === n.length)
              return (
                (0, c.logError)(
                  "assets in mediaTypes.native.ortb is not an array, or it's empty. Assets: ",
                  n
                ),
                !1
              );
            var t = n.map(function (e) {
              return e.id;
            });
            return n.length !== new Set(t).size ||
              t.some(function (e) {
                return e !== parseInt(e, 10);
              })
              ? ((0, c.logError)(
                  "each asset object must have 'id' property, it must be unique and it must be an integer"
                ),
                !1)
              : e.hasOwnProperty("eventtrackers") &&
                !Array.isArray(e.eventtrackers)
              ? ((0, c.logError)(
                  "ortb.eventtrackers is not an array. Eventtrackers: ",
                  e.eventtrackers
                ),
                !1)
              : n.every(function (e) {
                  return (function (e) {
                    if (!(0, c.isPlainObject)(e))
                      return (
                        (0, c.logError)(
                          "asset must be an object. Provided asset: ",
                          e
                        ),
                        !1
                      );
                    if (e.img) {
                      if (
                        !(0, c.isNumber)(e.img.w) &&
                        !(0, c.isNumber)(e.img.wmin)
                      )
                        return (
                          (0, c.logError)(
                            "for img asset there must be 'w' or 'wmin' property"
                          ),
                          !1
                        );
                      if (
                        !(0, c.isNumber)(e.img.h) &&
                        !(0, c.isNumber)(e.img.hmin)
                      )
                        return (
                          (0, c.logError)(
                            "for img asset there must be 'h' or 'hmin' property"
                          ),
                          !1
                        );
                    } else if (e.title) {
                      if (!(0, c.isNumber)(e.title.len))
                        return (
                          (0, c.logError)(
                            "for title asset there must be 'len' property defined"
                          ),
                          !1
                        );
                    } else if (e.data) {
                      if (!(0, c.isNumber)(e.data.type))
                        return (
                          (0, c.logError)(
                            "for data asset 'type' property must be a number"
                          ),
                          !1
                        );
                    } else if (
                      e.video &&
                      !(
                        Array.isArray(e.video.mimes) &&
                        Array.isArray(e.video.protocols) &&
                        (0, c.isNumber)(e.video.minduration) &&
                        (0, c.isNumber)(e.video.maxduration)
                      )
                    )
                      return (
                        (0, c.logError)(
                          "video asset is not properly configured"
                        ),
                        !1
                      );
                    return !0;
                  })(e);
                });
          }
          function j(e) {
            var n,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = t.index,
              i = void 0 === r ? d.K.index : r,
              o = i.getAdUnit(e);
            if (!o) return !1;
            var a = o.nativeOrtbRequest,
              u =
                (null === (n = e.native) || void 0 === n ? void 0 : n.ortb) ||
                G(e.native, a);
            return B(u, a);
          }
          function B(e, n) {
            if (!(0, u.Z)(e, "link.url"))
              return (
                (0, c.logError)(
                  "native response doesn't have 'link' property. Ortb response: ",
                  e
                ),
                !1
              );
            var t = n.assets
                .filter(function (e) {
                  return 1 === e.required;
                })
                .map(function (e) {
                  return e.id;
                }),
              r = e.assets.map(function (e) {
                return e.id;
              }),
              i = t.every(function (e) {
                return (0, s.q9)(r, e);
              });
            return (
              i ||
                (0, c.logError)(
                  "didn't receive a bid with all required assets. Required ids: "
                    .concat(t, ", but received ids in response: ")
                    .concat(r)
                ),
              i
            );
          }
          function k(e, n) {
            var t = n.native.ortb || z(n.native);
            return (
              "click" === e.action
                ? (function (e) {
                    var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      t = (
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {}
                      ).fetchURL,
                      r = void 0 === t ? c.triggerPixel : t;
                    if (n) {
                      var i,
                        o = (e.assets || [])
                          .filter(function (e) {
                            return e.link;
                          })
                          .reduce(function (e, n) {
                            return (e[n.id] = n.link), e;
                          }, {}),
                        a =
                          (null === (i = e.link) || void 0 === i
                            ? void 0
                            : i.clicktrackers) || [],
                        u = o[n],
                        s = a;
                      u && (s = u.clicktrackers || []),
                        s.forEach(function (e) {
                          return r(e);
                        });
                    } else {
                      var d;
                      (
                        (null === (d = e.link) || void 0 === d
                          ? void 0
                          : d.clicktrackers) || []
                      ).forEach(function (e) {
                        return r(e);
                      });
                    }
                  })(t, null == e ? void 0 : e.assetId)
                : (function (e) {
                    var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      t = n.runMarkup,
                      r =
                        void 0 === t
                          ? function (e) {
                              return (0, c.insertHtmlIntoIframe)(e);
                            }
                          : t,
                      i = n.fetchURL,
                      o = void 0 === i ? c.triggerPixel : i,
                      a = (e.eventtrackers || [])
                        .filter(function (e) {
                          return e.event === I;
                        })
                        .reduce(
                          function (e, n) {
                            return (
                              T.hasOwnProperty(n.method) &&
                                e[T[n.method]].push(n.url),
                              e
                            );
                          },
                          { img: [], js: [] }
                        ),
                      u = a.img,
                      s = a.js;
                    e.imptrackers && (u = u.concat(e.imptrackers));
                    u.forEach(function (e) {
                      return o(e);
                    }),
                      (s = s.map(function (e) {
                        return '<script async src="'.concat(e, '"></script>');
                      })),
                      e.jstracker && (s = s.concat([e.jstracker]));
                    s.length && r(s.join("\n"));
                  })(t),
              e.action
            );
          }
          function R(e, n) {
            var t,
              r = null == n ? void 0 : n.nativeOrtbRequest,
              i = null === (t = e.native) || void 0 === t ? void 0 : t.ortb;
            if (r && i) {
              var o = K(i, r);
              Object.assign(e.native, o);
            }
            ["rendererUrl", "adTemplate"].forEach(function (t) {
              var r,
                i =
                  null == n || null === (r = n.nativeParams) || void 0 === r
                    ? void 0
                    : r[t];
              i && (e.native[t] = Z(i));
            });
          }
          function D(e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              t = n.index,
              r = void 0 === t ? d.K.index : t,
              i = {},
              o = r.getAdUnit(e),
              a = !1 !== (0, u.Z)(o, "nativeParams.sendTargetingKeys"),
              c = M(o),
              s = h(h({}, e.native), e.native.ext);
            return (
              delete s.ext,
              Object.keys(s).forEach(function (n) {
                var t = c[n],
                  r = Z(e.native[n]) || Z((0, u.Z)(e, "native.ext.".concat(n)));
                if ("adTemplate" !== n && t && r) {
                  var s = (0, u.Z)(o, "nativeParams.".concat(n, ".sendId"));
                  if (
                    ("boolean" != typeof s &&
                      (s = (0, u.Z)(
                        o,
                        "nativeParams.ext.".concat(n, ".sendId")
                      )),
                    s)
                  )
                    r = "".concat(t, ":").concat(e.adId);
                  var d = (0, u.Z)(
                    o,
                    "nativeParams.".concat(n, ".sendTargetingKeys")
                  );
                  "boolean" != typeof d &&
                    (d = (0, u.Z)(
                      o,
                      "nativeParams.ext.".concat(n, ".sendTargetingKeys")
                    )),
                    ("boolean" == typeof d ? d : a) && (i[t] = r);
                }
              }),
              i
            );
          }
          function U(e, n) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              o = [];
            return (
              Object.entries(e)
                .filter(function (e) {
                  var r = (0, i.Z)(e, 2),
                    o = r[0];
                  return (
                    r[1] &&
                    ((!1 === t && "ext" === o) || null == n || n.includes(o))
                  );
                })
                .forEach(function (e) {
                  var a = (0, i.Z)(e, 2),
                    u = a[0],
                    c = a[1];
                  !1 === t && "ext" === u
                    ? o.push.apply(o, (0, r.Z)(U(c, n, !0)))
                    : (t || f.FY.hasOwnProperty(u)) &&
                      o.push({ key: u, value: Z(c) });
                }),
              o
            );
          }
          function P(e, n, t) {
            var r,
              i,
              o = h(
                h(
                  {},
                  (0, c.getDefinedParams)(e.native, [
                    "rendererUrl",
                    "adTemplate",
                  ])
                ),
                {},
                { assets: U(e.native, t), nativeKeys: f.FY }
              );
            return (
              e.native.ortb
                ? (o.ortb = e.native.ortb)
                : null !== (r = n.mediaTypes) &&
                  void 0 !== r &&
                  null !== (i = r.native) &&
                  void 0 !== i &&
                  i.ortb &&
                  (o.ortb = G(e.native, n.nativeOrtbRequest)),
              o
            );
          }
          function _(e, n, t) {
            var r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {},
              i = r.index,
              o = void 0 === i ? d.K.index : i;
            return h(
              { message: "assetResponse", adId: e.adId },
              P(n, o.getAdUnit(n), t)
            );
          }
          var q = Object.fromEntries(
            Object.entries(f.FY).map(function (e) {
              var n = (0, i.Z)(e, 2),
                t = n[0];
              return [n[1], t];
            })
          );
          function N(e, n) {
            var t = e.assets.map(function (e) {
              return q[e];
            });
            return _(e, n, t);
          }
          function x(e, n) {
            return _(e, n, null);
          }
          function Z(e) {
            return (null == e ? void 0 : e.url) || e;
          }
          function M(e) {
            var n = {};
            return (
              (0, u.Z)(e, "nativeParams.ext") &&
                Object.keys(e.nativeParams.ext).forEach(function (e) {
                  n[e] = "hb_native_".concat(e);
                }),
              h(h({}, f.FY), n)
            );
          }
          function F(e) {
            if (e || (0, c.isPlainObject)(e)) {
              var n = { ver: "1.2", assets: [] };
              for (var t in e)
                if (!f.zA.includes(t))
                  if (f.FY.hasOwnProperty(t))
                    if ("privacyLink" !== t) {
                      var r = e[t],
                        i = 0;
                      r.required &&
                        (0, c.isBoolean)(r.required) &&
                        (i = Number(r.required));
                      var o = { id: n.assets.length, required: i };
                      if (t in f.V1)
                        (o.data = { type: f.s$[f.V1[t]] }),
                          r.len && (o.data.len = r.len);
                      else if ("icon" === t || "image" === t) {
                        if (
                          ((o.img = {
                            type: "icon" === t ? f.oF.ICON : f.oF.MAIN,
                          }),
                          r.aspect_ratios)
                        )
                          if ((0, c.isArray)(r.aspect_ratios))
                            if (r.aspect_ratios.length) {
                              var a = r.aspect_ratios[0],
                                u = a.min_width,
                                s = a.min_height;
                              (0, c.isInteger)(u) && (0, c.isInteger)(s)
                                ? ((o.img.wmin = u), (o.img.hmin = s))
                                : (0, c.logError)(
                                    "image.aspect_ratios min_width or min_height are invalid: ",
                                    u,
                                    s
                                  );
                              var d = r.aspect_ratios
                                .filter(function (e) {
                                  return e.ratio_width && e.ratio_height;
                                })
                                .map(function (e) {
                                  return ""
                                    .concat(e.ratio_width, ":")
                                    .concat(e.ratio_height);
                                });
                              d.length > 0 && (o.img.ext = { aspectratios: d });
                            } else
                              (0, c.logError)(
                                "image.aspect_ratios was passed, but it's empty:",
                                r.aspect_ratios
                              );
                          else
                            (0, c.logError)(
                              "image.aspect_ratios was passed, but it's not a an array:",
                              r.aspect_ratios
                            );
                        r.sizes &&
                          (2 === r.sizes.length &&
                          (0, c.isInteger)(r.sizes[0]) &&
                          (0, c.isInteger)(r.sizes[1])
                            ? ((o.img.w = r.sizes[0]),
                              (o.img.h = r.sizes[1]),
                              delete o.img.hmin,
                              delete o.img.wmin)
                            : (0, c.logError)(
                                "image.sizes was passed, but its value is not an array of integers:",
                                r.sizes
                              ));
                      } else
                        "title" === t
                          ? (o.title = { len: r.len || 140 })
                          : "ext" === t && ((o.ext = r), delete o.required);
                      n.assets.push(o);
                    } else n.privacy = 1;
                  else
                    (0, c.logError)(
                      "Unrecognized native asset code: ".concat(
                        t,
                        ". Asset will be ignored."
                      )
                    );
              return n;
            }
            (0, c.logError)(
              "Native assets object is empty or not an object: ",
              e
            );
          }
          function W(e) {
            if (S(e)) {
              var n,
                t = {},
                r = g(e.assets);
              try {
                var i = function () {
                  var r = n.value;
                  if (r.title) {
                    var i = {
                      required: !!r.required && Boolean(r.required),
                      len: r.title.len,
                    };
                    t.title = i;
                  } else if (r.img) {
                    var o = { required: !!r.required && Boolean(r.required) };
                    if (r.img.w && r.img.h) o.sizes = [r.img.w, r.img.h];
                    else if (r.img.wmin && r.img.hmin) {
                      var a = (function (e, n) {
                        for (; e && n && e !== n; ) e > n ? (e -= n) : (n -= e);
                        return e || n;
                      })(r.img.wmin, r.img.hmin);
                      o.aspect_ratios = [
                        {
                          min_width: r.img.wmin,
                          min_height: r.img.hmin,
                          ratio_width: r.img.wmin / a,
                          ratio_height: r.img.hmin / a,
                        },
                      ];
                    }
                    r.img.type === f.oF.MAIN ? (t.image = o) : (t.icon = o);
                  } else if (r.data) {
                    var u = Object.keys(f.s$).find(function (e) {
                        return f.s$[e] === r.data.type;
                      }),
                      c = Object.keys(f.V1).find(function (e) {
                        return f.V1[e] === u;
                      });
                    (t[c] = { required: !!r.required && Boolean(r.required) }),
                      r.data.len && (t[c].len = r.data.len);
                  }
                  e.privacy && (t.privacyLink = { required: !1 });
                };
                for (r.s(); !(n = r.n()).done; ) i();
              } catch (e) {
                r.e(e);
              } finally {
                r.f();
              }
              return t;
            }
          }
          function L(e) {
            if (!e || !(0, c.isArray)(e)) return e;
            if (
              !e.some(function (e) {
                var n;
                return null ===
                  (n = ((null == e ? void 0 : e.mediaTypes) || {})[l.B5]) ||
                  void 0 === n
                  ? void 0
                  : n.ortb;
              })
            )
              return e;
            var n,
              t = (0, c.deepClone)(e),
              r = g(t);
            try {
              for (r.s(); !(n = r.n()).done; ) {
                var i = n.value;
                i.mediaTypes &&
                  i.mediaTypes[l.B5] &&
                  i.mediaTypes[l.B5].ortb &&
                  ((i.mediaTypes[l.B5] = Object.assign(
                    (0, c.pick)(i.mediaTypes[l.B5], f.zA),
                    W(i.mediaTypes[l.B5].ortb)
                  )),
                  (i.nativeParams = C(i.mediaTypes[l.B5])));
              }
            } catch (e) {
              r.e(e);
            } finally {
              r.f();
            }
            return t;
          }
          function z(e) {
            var n = { link: {}, eventtrackers: [] };
            return (
              Object.entries(e).forEach(function (e) {
                var t = (0, i.Z)(e, 2),
                  r = t[0],
                  o = t[1];
                switch (r) {
                  case "clickUrl":
                    n.link.url = o;
                    break;
                  case "clickTrackers":
                    n.link.clicktrackers = Array.isArray(o) ? o : [o];
                    break;
                  case "impressionTrackers":
                    (Array.isArray(o) ? o : [o]).forEach(function (e) {
                      n.eventtrackers.push({ event: I, method: T.img, url: e });
                    });
                    break;
                  case "javascriptTrackers":
                    n.jstracker = Array.isArray(o) ? o.join("") : o;
                    break;
                  case "privacyLink":
                    n.privacy = o;
                }
              }),
              n
            );
          }
          function G(e, n) {
            var t = h(h({}, z(e)), {}, { assets: [] });
            function r(e, r) {
              var i = n.assets.find(e);
              null != i && (r((i = (0, c.deepClone)(i))), t.assets.push(i));
            }
            return (
              Object.keys(e)
                .filter(function (n) {
                  return !!e[n];
                })
                .forEach(function (n) {
                  var t = Z(e[n]);
                  switch (n) {
                    case "title":
                      r(
                        function (e) {
                          return null != e.title;
                        },
                        function (e) {
                          e.title = { text: t };
                        }
                      );
                      break;
                    case "image":
                    case "icon":
                      var i = "image" === n ? f.oF.MAIN : f.oF.ICON;
                      r(
                        function (e) {
                          return null != e.img && e.img.type === i;
                        },
                        function (e) {
                          e.img = { url: t };
                        }
                      );
                      break;
                    default:
                      n in f.V1 &&
                        r(
                          function (e) {
                            return (
                              null != e.data && e.data.type === f.s$[f.V1[n]]
                            );
                          },
                          function (e) {
                            e.data = { value: t };
                          }
                        );
                  }
                }),
              t
            );
          }
          function K(e, n) {
            var t = {},
              i = (null == n ? void 0 : n.assets) || [];
            (t.clickUrl = e.link.url), (t.privacyLink = e.privacy);
            var o,
              a = g((null == e ? void 0 : e.assets) || []);
            try {
              var u = function () {
                var e = o.value,
                  n = i.find(function (n) {
                    return e.id === n.id;
                  });
                e.title
                  ? (t.title = e.title.text)
                  : e.img
                  ? (t[n.img.type === f.oF.MAIN ? "image" : "icon"] = {
                      url: e.img.url,
                      width: e.img.w,
                      height: e.img.h,
                    })
                  : e.data && (t[E[w[n.data.type]]] = e.data.value);
              };
              for (a.s(); !(o = a.n()).done; ) u();
            } catch (e) {
              a.e(e);
            } finally {
              a.f();
            }
            t.impressionTrackers = [];
            var c,
              s = [];
            e.imptrackers &&
              (c = t.impressionTrackers).push.apply(c, (0, r.Z)(e.imptrackers));
            var d,
              l = g((null == e ? void 0 : e.eventtrackers) || []);
            try {
              for (l.s(); !(d = l.n()).done; ) {
                var v = d.value;
                v.event === I &&
                  v.method === T.img &&
                  t.impressionTrackers.push(v.url),
                  v.event === I && v.method === T.js && s.push(v.url);
              }
            } catch (e) {
              l.e(e);
            } finally {
              l.f();
            }
            return (
              (s = s.map(function (e) {
                return '<script async src="'.concat(e, '"></script>');
              })),
              null != e && e.jstracker && s.push(e.jstracker),
              s.length && (t.javascriptTrackers = s.join("\n")),
              t
            );
          }
          function H(e) {
            var n = {};
            for (var t in e) n[e[t]] = t;
            return n;
          }
        },
        26372: function (e, n, t) {
          t.d(n, {
            DZ: function () {
              return a;
            },
            Px: function () {
              return u;
            },
            TP: function () {
              return s;
            },
            YC: function () {
              return c;
            },
            Z: function () {
              return o;
            },
            f8: function () {
              return v;
            },
            fP: function () {
              return p;
            },
            gm: function () {
              return r;
            },
            md: function () {
              return d;
            },
          });
          var r = ["request", "imp", "bidResponse", "response"],
            i = ["default", "pbs"],
            o = r[0],
            a = r[1],
            u = r[2],
            c = r[3],
            s = i[0],
            d = i[1],
            f = new Set(r);
          var l,
            g =
              ((l = {}),
              {
                registerOrtbProcessor: function (e) {
                  var n = e.type,
                    t = e.name,
                    i = e.fn,
                    o = e.priority,
                    a = void 0 === o ? 0 : o,
                    u = e.dialects,
                    c = void 0 === u ? [s] : u;
                  if (!f.has(n))
                    throw new Error(
                      "ORTB processor type must be one of: ".concat(
                        r.join(", ")
                      )
                    );
                  c.forEach(function (e) {
                    l.hasOwnProperty(e) || (l[e] = {}),
                      l[e].hasOwnProperty(n) || (l[e][n] = {}),
                      (l[e][n][t] = { priority: a, fn: i });
                  });
                },
                getProcessors: function (e) {
                  return l[e] || {};
                },
              }),
            v = g.registerOrtbProcessor,
            p = g.getProcessors;
        },
        34614: function (e, n, t) {
          function r(e, n, t) {
            return (e && e.includes(n, t)) || !1;
          }
          function i() {
            return Array.from.apply(Array, arguments);
          }
          function o(e, n, t) {
            return e && e.find(n, t);
          }
          function a(e, n, t) {
            return e && e.findIndex(n, t);
          }
          t.d(n, {
            Oc: function () {
              return i;
            },
            cx: function () {
              return a;
            },
            q9: function () {
              return r;
            },
            sE: function () {
              return o;
            },
          });
        },
        20327: function (e, n, t) {
          t.d(n, {
            zh: function () {
              return Y;
            },
            O5: function () {
              return ne;
            },
            ew: function () {
              return ie;
            },
          });
          var r,
            i = t(70885),
            o = t(4942),
            a = t(78640),
            u = t(64358),
            c = t(20265),
            s = t(96475),
            d = t(52021),
            f = t(70059),
            l = t(62200),
            g = t(78653),
            v = t(34614),
            p = t(13667),
            h = t(88099);
          function m(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n &&
                (r = r.filter(function (n) {
                  return Object.getOwnPropertyDescriptor(e, n).enumerable;
                })),
                t.push.apply(t, r);
            }
            return t;
          }
          function b(e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = null != arguments[n] ? arguments[n] : {};
              n % 2
                ? m(Object(t), !0).forEach(function (n) {
                    (0, o.Z)(e, n, t[n]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : m(Object(t)).forEach(function (n) {
                    Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(t, n)
                    );
                  });
            }
            return e;
          }
          var y = l.X3.REQUEST,
            E = l.X3.RESPONSE,
            w = l.X3.NATIVE,
            T = l.X3.EVENT,
            I = l.FP.BID_WON,
            A =
              ((r = {}),
              (0, o.Z)(r, y, function (e, n, t) {
                (0, p.XD)({
                  renderFn: function (n) {
                    e(Object.assign({ message: E, renderer: (0, h.m)(t) }, n));
                  },
                  resizeFn: O(t),
                  options: n.options,
                  adId: n.adId,
                  bidResponse: t,
                });
              }),
              (0, o.Z)(r, T, function (e, n, t) {
                if (null == t)
                  return void (0, u.logError)(
                    "Cannot find ad '".concat(
                      n.adId,
                      "' for x-origin event request"
                    )
                  );
                if (t.status !== l.UE.RENDERED)
                  return void (0, u.logWarn)(
                    "Received x-origin event request without corresponding render request for ad '".concat(
                      t.adId,
                      "'"
                    )
                  );
                return (0, p.oc)(n, t);
              }),
              r);
          function C(e) {
            var n = e.message ? "message" : "data",
              t = {};
            try {
              t = JSON.parse(e[n]);
            } catch (e) {
              return;
            }
            if (t && t.adId && t.message) {
              var r = (0, v.sE)(g.K.getBidsReceived(), function (e) {
                return e.adId === t.adId;
              });
              A.hasOwnProperty(t.message) &&
                A[t.message](
                  (function (e) {
                    return null == e.origin && 0 === e.ports.length
                      ? function () {
                          var e =
                            "Cannot post message to a frame with null origin. Please update creatives to use MessageChannel, see https://github.com/prebid/Prebid.js/issues/7870";
                          throw ((0, u.logError)(e), new Error(e));
                        }
                      : e.ports.length > 0
                      ? function (n) {
                          e.ports[0].postMessage(JSON.stringify(n));
                        }
                      : function (n) {
                          e.source.postMessage(JSON.stringify(n), e.origin);
                        };
                  })(e),
                  t,
                  r
                );
            }
          }
          function O(e) {
            return function (n, t) {
              !(function (e) {
                var n = e.adId,
                  t = e.adUnitCode,
                  r = e.width,
                  i = e.height;
                function o(e) {
                  return e ? e + "px" : "100%";
                }
                function a(e) {
                  var r = c(n, t),
                    i = document.getElementById(r);
                  return i && i.querySelector(e);
                }
                function c(e, n) {
                  return (0, u.isGptPubadsDefined)()
                    ? s(e)
                    : (0, u.isApnGetTagDefined)()
                    ? d(n)
                    : n;
                }
                function s(e) {
                  var n = (0, v.sE)(
                    window.googletag.pubads().getSlots(),
                    function (n) {
                      return (0, v.sE)(n.getTargetingKeys(), function (t) {
                        return (0, v.q9)(n.getTargeting(t), e);
                      });
                    }
                  );
                  return n ? n.getSlotElementId() : null;
                }
                function d(e) {
                  var n = window.apntag.getTag(e);
                  return n && n.targetId;
                }
                ["div", "iframe"].forEach(function (e) {
                  var n = a(e + ':not([style*="display: none"])');
                  if (n) {
                    var c = n.style;
                    (c.width = o(r)), (c.height = o(i));
                  } else (0, u.logWarn)("Unable to locate matching page element for adUnitCode ".concat(t, ".  Can't resize it to ad's dimensions.  Please review setup."));
                });
              })(b(b({}, e), {}, { width: n, height: t }));
            };
          }
          Object.assign(
            A,
            (0, o.Z)({}, w, function (e, n, t) {
              if (null == t)
                return void (0, u.logError)(
                  "Cannot find ad for x-origin event request: '".concat(
                    n.adId,
                    "'"
                  )
                );
              t.status !== l.UE.RENDERED &&
                (g.K.addWinningBid(t), d.emit(I, t));
              switch (n.action) {
                case "assetRequest":
                  e((0, f.eK)(n, t));
                  break;
                case "allAssetRequest":
                  e((0, f.JL)(n, t));
                  break;
                default:
                  (0, p.E$)(n, t, { resizeFn: O(t) });
              }
            })
          );
          var S = t(11974),
            j = t(3193),
            B = t(18621),
            k = t(92797),
            R = t(53777),
            D = t(69626),
            U = t(15164),
            P = t(93304),
            _ = t(99128),
            q = t(68792),
            N = t(54078),
            x = t(34516),
            Z = t(31136),
            M = t(90154),
            F = (0, a.R)(),
            W = S.k_.triggerUserSyncs,
            L = l.FP.ADD_AD_UNITS,
            z = l.FP.REQUEST_BIDS,
            G = l.FP.SET_TARGETING,
            K = {
              bidWon: function (e) {
                if (
                  !g.K.getBidsRequested()
                    .map(function (e) {
                      return e.bids.map(function (e) {
                        return e.adUnitCode;
                      });
                    })
                    .reduce(u.flatten)
                    .filter(u.uniques)
                    .includes(e)
                )
                  return void (0, u.logError)(
                    'The "' + e + '" placement is not defined.'
                  );
                return !0;
              },
            };
          function H(e, n) {
            var t = [];
            return (
              (0, u.isArray)(e) &&
                (n ? e.length === n : e.length > 0) &&
                (e.every(function (e) {
                  return (0, u.isArrayOfNums)(e, 2);
                })
                  ? (t = e)
                  : (0, u.isArrayOfNums)(e, 2) && t.push(e)),
              t
            );
          }
          function V(e) {
            var n = (0, u.deepClone)(e),
              t = n.mediaTypes.banner,
              r = H(t.sizes);
            return (
              r.length > 0
                ? ((t.sizes = r), (n.sizes = r))
                : ((0, u.logError)(
                    "Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."
                  ),
                  delete n.mediaTypes.banner),
              n
            );
          }
          function J(e) {
            var n = (0, u.deepClone)(e),
              t = n.mediaTypes.video;
            if (t.playerSize) {
              var r = "number" == typeof t.playerSize[0] ? 2 : 1,
                i = H(t.playerSize, r);
              i.length > 0
                ? (2 === r &&
                    (0, u.logInfo)(
                      "Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."
                    ),
                  (t.playerSize = i),
                  (n.sizes = i))
                : ((0, u.logError)(
                    "Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."
                  ),
                  delete n.mediaTypes.video.playerSize);
            }
            return n;
          }
          function Q(e) {
            var n = (0, u.deepClone)(e),
              t = n.mediaTypes.native;
            if (t.ortb) {
              var r = Object.keys(l.FY).filter(function (e) {
                  return l.FY[e].includes("hb_native_");
                }),
                i = Object.keys(t).filter(function (e) {
                  return r.includes(e);
                });
              i.length > 0 &&
                ((0, u.logError)(
                  "when using native OpenRTB format, you cannot use legacy native properties. Deleting ".concat(
                    i,
                    " keys from request."
                  )
                ),
                i.forEach(function (e) {
                  return delete n.mediaTypes.native[e];
                }));
            }
            return (
              t.image &&
                t.image.sizes &&
                !Array.isArray(t.image.sizes) &&
                ((0, u.logError)(
                  "Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."
                ),
                delete n.mediaTypes.native.image.sizes),
              t.image &&
                t.image.aspect_ratios &&
                !Array.isArray(t.image.aspect_ratios) &&
                ((0, u.logError)(
                  "Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."
                ),
                delete n.mediaTypes.native.image.aspect_ratios),
              t.icon &&
                t.icon.sizes &&
                !Array.isArray(t.icon.sizes) &&
                ((0, u.logError)(
                  "Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."
                ),
                delete n.mediaTypes.native.icon.sizes),
              n
            );
          }
          function $(e, n) {
            var t = (0, c.Z)(e, "mediaTypes.".concat(n, ".pos"));
            if (!(0, u.isNumber)(t) || isNaN(t) || !isFinite(t)) {
              var r = "Value of property 'pos' on ad unit ".concat(
                e.code,
                " should be of type: Number"
              );
              (0, u.logWarn)(r),
                d.emit(l.FP.AUCTION_DEBUG, { type: "WARNING", arguments: r }),
                delete e.mediaTypes[n].pos;
            }
            return e;
          }
          function X(e) {
            var n = function (n) {
                return "adUnit.code '".concat(e.code, "' ").concat(n);
              },
              t = e.mediaTypes,
              r = e.bids;
            return null == r || (0, u.isArray)(r)
              ? null == r && null == e.ortb2Imp
                ? ((0, u.logError)(
                    n(
                      "has no 'adUnit.bids' and no 'adUnit.ortb2Imp'. Removing adUnit from auction"
                    )
                  ),
                  null)
                : t && 0 !== Object.keys(t).length
                ? (null == e.ortb2Imp ||
                    (null != r && 0 !== r.length) ||
                    ((e.bids = [{ bidder: null }]),
                    (0, u.logMessage)(
                      n(
                        "defines 'adUnit.ortb2Imp' with no 'adUnit.bids'; it will be seen only by S2S adapters"
                      )
                    )),
                  e)
                : ((0, u.logError)(
                    n(
                      "does not define a 'mediaTypes' object.  This is a required field for the auction, so this adUnit has been removed."
                    )
                  ),
                  null)
              : ((0, u.logError)(
                  n(
                    "defines 'adUnit.bids' that is not an array. Removing adUnit from auction"
                  )
                ),
                null);
          }
          (0, R.dF)(),
            (F.bidderSettings = F.bidderSettings || {}),
            (F.libLoaded = !0),
            (F.version = "v8.45.0"),
            (0, u.logInfo)("Prebid.js v8.45.0 loaded"),
            (F.installedModules = F.installedModules || []),
            (F.adUnits = F.adUnits || []),
            (F.triggerUserSyncs = W);
          var Y = {
            validateAdUnit: X,
            validateBannerMediaType: V,
            validateSizes: H,
          };
          Object.assign(Y, { validateNativeMediaType: Q }),
            Object.assign(Y, { validateVideoMediaType: J });
          var ee,
            ne = (0, k.z3)(
              "sync",
              function (e) {
                var n = [];
                return (
                  e.forEach(function (e) {
                    if (null != (e = X(e))) {
                      var t,
                        r,
                        i,
                        o = e.mediaTypes;
                      o.banner &&
                        ((t = V(e)),
                        o.banner.hasOwnProperty("pos") && (t = $(t, "banner"))),
                        o.video &&
                          ((r = J(t || e)),
                          o.video.hasOwnProperty("pos") && (r = $(r, "video"))),
                        o.native && (i = Q(r || t || e));
                      var a = Object.assign({}, t, r, i);
                      n.push(a);
                    }
                  }),
                  n
                );
              },
              "checkAdUnitSetup"
            );
          function te(e) {
            e.forEach(function (e) {
              return (0, M.cx)(e);
            });
          }
          function re(e) {
            var n = g.K[e]().filter(function (e) {
                return g.K.getAdUnitCodes().includes(e.adUnitCode);
              }),
              t = g.K.getLastAuctionId();
            return n
              .map(function (e) {
                return e.adUnitCode;
              })
              .filter(u.uniques)
              .map(function (e) {
                return n.filter(function (n) {
                  return n.auctionId === t && n.adUnitCode === e;
                });
              })
              .filter(function (e) {
                return e && e[0] && e[0].adUnitCode;
              })
              .map(function (e) {
                return (0, o.Z)({}, e[0].adUnitCode, { bids: e });
              })
              .reduce(function (e, n) {
                return Object.assign(e, n);
              }, {});
          }
          (F.getAdserverTargetingForAdUnitCodeStr = function (e) {
            if (
              ((0, u.logInfo)(
                "Invoking pbjs.getAdserverTargetingForAdUnitCodeStr",
                arguments
              ),
              e)
            ) {
              var n = F.getAdserverTargetingForAdUnitCode(e);
              return (0, u.transformAdServerTargetingObj)(n);
            }
            (0, u.logMessage)(
              "Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode"
            );
          }),
            (F.getHighestUnusedBidResponseForAdUnitCode = function (e) {
              if (e) {
                var n = g.K.getAllBidsForAdUnitCode(e).filter(B.TL);
                return n.length ? n.reduce(Z.ZH) : {};
              }
              (0, u.logMessage)(
                "Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode"
              );
            }),
            (F.getAdserverTargetingForAdUnitCode = function (e) {
              return F.getAdserverTargeting(e)[e];
            }),
            (F.getAdserverTargeting = function (e) {
              return (
                (0, u.logInfo)("Invoking pbjs.getAdserverTargeting", arguments),
                B.q0.getAllTargeting(e)
              );
            }),
            (F.getConsentMetadata = function () {
              return (
                (0, u.logInfo)("Invoking pbjs.getConsentMetadata"),
                x.NO.getConsentMeta()
              );
            }),
            (F.getNoBids = function () {
              return (
                (0, u.logInfo)("Invoking pbjs.getNoBids", arguments),
                re("getNoBids")
              );
            }),
            (F.getNoBidsForAdUnitCode = function (e) {
              return {
                bids: g.K.getNoBids().filter(function (n) {
                  return n.adUnitCode === e;
                }),
              };
            }),
            (F.getBidResponses = function () {
              return (
                (0, u.logInfo)("Invoking pbjs.getBidResponses", arguments),
                re("getBidsReceived")
              );
            }),
            (F.getBidResponsesForAdUnitCode = function (e) {
              return {
                bids: g.K.getBidsReceived().filter(function (n) {
                  return n.adUnitCode === e;
                }),
              };
            }),
            (F.setTargetingForGPTAsync = function (e, n) {
              if (
                ((0, u.logInfo)(
                  "Invoking pbjs.setTargetingForGPTAsync",
                  arguments
                ),
                (0, u.isGptPubadsDefined)())
              ) {
                var t = B.q0.getAllTargeting(e);
                B.q0.resetPresetTargeting(e, n),
                  B.q0.setTargetingForGPT(t, n),
                  Object.keys(t).forEach(function (e) {
                    Object.keys(t[e]).forEach(function (n) {
                      "hb_adid" === n &&
                        g.K.setStatusForBids(t[e][n], l.UE.BID_TARGETING_SET);
                    });
                  }),
                  d.emit(G, t);
              } else
                (0, u.logError)("window.googletag is not defined on the page");
            }),
            (F.setTargetingForAst = function (e) {
              (0, u.logInfo)("Invoking pbjs.setTargetingForAn", arguments),
                B.q0.isApntagDefined()
                  ? (B.q0.setTargetingForAst(e),
                    d.emit(G, B.q0.getAllTargeting()))
                  : (0, u.logError)("window.apntag is not defined on the page");
            }),
            (F.renderAd = (0, k.z3)("async", function (e, n, t) {
              (0, u.logInfo)("Invoking pbjs.renderAd", arguments),
                (0, u.logMessage)("Calling renderAd with adId :" + n),
                (0, p.tV)(e, n, t);
            })),
            (F.removeAdUnit = function (e) {
              ((0, u.logInfo)("Invoking pbjs.removeAdUnit", arguments), e)
                ? ((0, u.isArray)(e) ? e : [e]).forEach(function (e) {
                    for (var n = F.adUnits.length - 1; n >= 0; n--)
                      F.adUnits[n].code === e && F.adUnits.splice(n, 1);
                  })
                : (F.adUnits = []);
            }),
            (F.requestBids =
              ((ee = (0, k.z3)(
                "async",
                function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    n = e.bidsBackHandler,
                    t = e.timeout,
                    r = e.adUnits,
                    o = e.adUnitCodes,
                    a = e.labels,
                    c = e.auctionId,
                    s = e.ttlBuffer,
                    f = e.ortb2,
                    l = e.metrics,
                    g = e.defer;
                  d.emit(z);
                  var p = t || j.vc.getConfig("bidderTimeout");
                  (0, u.logInfo)("Invoking pbjs.requestBids", arguments),
                    o && o.length
                      ? (r = r.filter(function (e) {
                          return (0, v.q9)(o, e.code);
                        }))
                      : (o =
                          r &&
                          r.map(function (e) {
                            return e.code;
                          }));
                  var h = {
                    global: (0, u.mergeDeep)(
                      {},
                      j.vc.getAnyConfig("ortb2") || {},
                      f || {}
                    ),
                    bidder: Object.fromEntries(
                      Object.entries(j.vc.getBidderConfig())
                        .map(function (e) {
                          var n = (0, i.Z)(e, 2);
                          return [n[0], n[1].ortb2];
                        })
                        .filter(function (e) {
                          var n = (0, i.Z)(e, 2);
                          return n[0], null != n[1];
                        })
                    ),
                  };
                  return (0, N.S)(q.Z.resolve(h.global)).then(function (e) {
                    return (
                      (h.global = e),
                      ie({
                        bidsBackHandler: n,
                        timeout: p,
                        adUnits: r,
                        adUnitCodes: o,
                        labels: a,
                        auctionId: c,
                        ttlBuffer: s,
                        ortb2Fragments: h,
                        metrics: l,
                        defer: g,
                      })
                    );
                  });
                },
                "requestBids"
              )),
              (0, k.IF)(ee, function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = e.adUnits || F.adUnits;
                return (
                  (e.adUnits = (0, u.isArray)(n) ? n.slice() : [n]),
                  (e.metrics = (0, _.V6)()),
                  e.metrics.checkpoint("requestBids"),
                  (e.defer = (0, q.P)({
                    promiseFactory: function (e) {
                      return new Promise(e);
                    },
                  })),
                  ee.call(this, e),
                  e.defer.promise
                );
              })));
          var ie = (0, k.z3)(
            "async",
            function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = e.bidsBackHandler,
                t = e.timeout,
                r = e.adUnits,
                i = e.ttlBuffer,
                o = e.adUnitCodes,
                a = e.labels,
                c = e.auctionId,
                d = e.ortb2Fragments,
                f = e.metrics,
                l = e.defer,
                p = (0, P.uV)(j.vc.getConfig("s2sConfig") || []);
              function h(e, t, r) {
                if ("function" == typeof n)
                  try {
                    n(e, t, r);
                  } catch (e) {
                    (0, u.logError)("Error executing bidsBackHandler", null, e);
                  }
                l.resolve({ bids: e, timedOut: t, auctionId: r });
              }
              te(r),
                (r = (0, _.Bf)(f).measureTime(
                  "requestBids.validate",
                  function () {
                    return ne(r);
                  }
                ));
              var m = {};
              if (
                (r.forEach(function (e) {
                  var n,
                    t,
                    r = Object.keys(e.mediaTypes || { banner: "banner" }),
                    o = e.bids.map(function (e) {
                      return e.bidder;
                    }),
                    a = P.ZP.bidderRegistry,
                    c = o.filter(function (e) {
                      return !p.has(e);
                    });
                  e.adUnitId = (0, u.generateUUID)();
                  var s =
                    null === (n = e.ortb2Imp) ||
                    void 0 === n ||
                    null === (t = n.ext) ||
                    void 0 === t
                      ? void 0
                      : t.tid;
                  s &&
                    (m.hasOwnProperty(e.code)
                      ? (0, u.logWarn)(
                          "Multiple distinct ortb2Imp.ext.tid were provided for twin ad units '".concat(
                            e.code,
                            "'"
                          )
                        )
                      : (m[e.code] = s)),
                    null == i ||
                      e.hasOwnProperty("ttlBuffer") ||
                      (e.ttlBuffer = i),
                    c.forEach(function (n) {
                      var t = a[n],
                        i = t && t.getSpec && t.getSpec(),
                        o = (i && i.supportedMediaTypes) || ["banner"];
                      r.some(function (e) {
                        return (0, v.q9)(o, e);
                      }) ||
                        ((0, u.logWarn)((0, u.unsupportedBidderMessage)(e, n)),
                        (e.bids = e.bids.filter(function (e) {
                          return e.bidder !== n;
                        })));
                    });
                }),
                r && 0 !== r.length)
              ) {
                r.forEach(function (e) {
                  var n,
                    t,
                    r =
                      (null === (n = e.ortb2Imp) ||
                      void 0 === n ||
                      null === (t = n.ext) ||
                      void 0 === t
                        ? void 0
                        : t.tid) ||
                      m[e.code] ||
                      (0, u.generateUUID)();
                  m.hasOwnProperty(e.code) || (m[e.code] = r),
                    (e.transactionId = r),
                    (0, s.N)(e, "ortb2Imp.ext.tid", r);
                });
                var b = g.K.createAuction({
                    adUnits: r,
                    adUnitCodes: o,
                    callback: h,
                    cbTimeout: t,
                    labels: a,
                    auctionId: c,
                    ortb2Fragments: d,
                    metrics: f,
                  }),
                  y = r.length;
                y > 15 &&
                  (0, u.logInfo)(
                    "Current auction "
                      .concat(b.getAuctionId(), " contains ")
                      .concat(y, " adUnits."),
                    r
                  ),
                  o.forEach(function (e) {
                    return B.q0.setLatestAuctionForAdUnit(e, b.getAuctionId());
                  }),
                  b.callBids();
              } else
                (0, u.logMessage)("No adUnits configured. No bids requested."),
                  h();
            },
            "startAuction"
          );
          F.requestBids.before(function (e, n) {
            function t(e) {
              for (var n; (n = e.shift()); ) n();
            }
            t(U.Ld), t(oe), e.call(this, n);
          }, 49),
            (F.addAdUnits = function (e) {
              (0, u.logInfo)("Invoking pbjs.addAdUnits", arguments),
                F.adUnits.push.apply(F.adUnits, (0, u.isArray)(e) ? e : [e]),
                d.emit(L);
            }),
            (F.onEvent = function (e, n, t) {
              (0, u.logInfo)("Invoking pbjs.onEvent", arguments),
                (0, u.isFn)(n)
                  ? !t || K[e].call(null, t)
                    ? d.on(e, n, t)
                    : (0, u.logError)(
                        'The id provided is not valid for event "' +
                          e +
                          '" and no handler was set.'
                      )
                  : (0, u.logError)(
                      'The event handler provided is not a function and was not set on event "' +
                        e +
                        '".'
                    );
            }),
            (F.offEvent = function (e, n, t) {
              (0, u.logInfo)("Invoking pbjs.offEvent", arguments),
                (t && !K[e].call(null, t)) || d.off(e, n, t);
            }),
            (F.getEvents = function () {
              return (0, u.logInfo)("Invoking pbjs.getEvents"), d.getEvents();
            }),
            (F.registerBidAdapter = function (e, n) {
              (0, u.logInfo)("Invoking pbjs.registerBidAdapter", arguments);
              try {
                P.ZP.registerBidAdapter(e(), n);
              } catch (e) {
                (0, u.logError)(
                  "Error registering bidder adapter : " + e.message
                );
              }
            }),
            (F.registerAnalyticsAdapter = function (e) {
              (0, u.logInfo)(
                "Invoking pbjs.registerAnalyticsAdapter",
                arguments
              );
              try {
                P.ZP.registerAnalyticsAdapter(e);
              } catch (e) {
                (0, u.logError)(
                  "Error registering analytics adapter : " + e.message
                );
              }
            }),
            (F.createBid = function (e) {
              return (
                (0, u.logInfo)("Invoking pbjs.createBid", arguments),
                (0, D.m)(e)
              );
            });
          var oe = [],
            ae = (0, k.z3)(
              "async",
              function (e) {
                e && !(0, u.isEmpty)(e)
                  ? ((0, u.logInfo)("Invoking pbjs.enableAnalytics for: ", e),
                    P.ZP.enableAnalytics(e))
                  : (0, u.logError)(
                      "pbjs.enableAnalytics should be called with option {}"
                    );
              },
              "enableAnalyticsCb"
            );
          (F.enableAnalytics = function (e) {
            oe.push(ae.bind(this, e));
          }),
            (F.aliasBidder = function (e, n, t) {
              (0, u.logInfo)("Invoking pbjs.aliasBidder", arguments),
                e && n
                  ? P.ZP.aliasBidAdapter(e, n, t)
                  : (0, u.logError)(
                      "bidderCode and alias must be passed as arguments",
                      "pbjs.aliasBidder"
                    );
            }),
            (F.aliasRegistry = P.ZP.aliasRegistry),
            j.vc.getConfig("aliasRegistry", function (e) {
              "private" === e.aliasRegistry && delete F.aliasRegistry;
            }),
            (F.getAllWinningBids = function () {
              return g.K.getAllWinningBids();
            }),
            (F.getAllPrebidWinningBids = function () {
              return g.K.getBidsReceived().filter(function (e) {
                return e.status === l.UE.BID_TARGETING_SET;
              });
            }),
            (F.getHighestCpmBids = function (e) {
              return B.q0.getWinningBids(e);
            }),
            (F.markWinningBidAsUsed = function (e) {
              var n = ue(
                e,
                "Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."
              );
              n.length > 0 && g.K.addWinningBid(n[0]);
            });
          var ue = function (e, n) {
            var t = [];
            return (
              e.adUnitCode && e.adId
                ? (t = g.K.getBidsReceived().filter(function (n) {
                    return n.adId === e.adId && n.adUnitCode === e.adUnitCode;
                  }))
                : e.adUnitCode
                ? (t = B.q0.getWinningBids(e.adUnitCode))
                : e.adId
                ? (t = g.K.getBidsReceived().filter(function (n) {
                    return n.adId === e.adId;
                  }))
                : (0, u.logWarn)(n),
              t
            );
          };
          function ce(e) {
            e.forEach(function (e) {
              if (void 0 === e.called)
                try {
                  e.call(), (e.called = !0);
                } catch (e) {
                  (0, u.logError)("Error processing command :", "prebid.js", e);
                }
            });
          }
          (F.getConfig = j.vc.getAnyConfig),
            (F.readConfig = j.vc.readAnyConfig),
            (F.mergeConfig = j.vc.mergeConfig),
            (F.mergeBidderConfig = j.vc.mergeBidderConfig),
            (F.setConfig = j.vc.setConfig),
            (F.setBidderConfig = j.vc.setBidderConfig),
            F.que.push(function () {
              window.addEventListener("message", C, !1);
            }),
            (F.cmd.push = function (e) {
              if ("function" == typeof e)
                try {
                  e.call();
                } catch (e) {
                  (0, u.logError)(
                    "Error processing command :",
                    e.message,
                    e.stack
                  );
                }
              else
                (0, u.logError)(
                  "Commands written into pbjs.cmd.push must be wrapped in a function"
                );
            }),
            (F.que.push = F.cmd.push),
            (F.processQueue = function () {
              k.z3.ready(), ce(F.que), ce(F.cmd);
            }),
            (F.triggerBilling = function (e) {
              var n = ue(
                  e,
                  "Improper use of triggerBilling. It requires a bid with at least an adUnitCode or an adId to function."
                ),
                t =
                  n.find(function (n) {
                    return n.requestId === e.requestId;
                  }) || n[0];
              if (n.length > 0 && t)
                try {
                  P.ZP.callBidBillableBidder(t);
                } catch (e) {
                  (0, u.logError)("Error when triggering billing :", e);
                }
              else
                (0, u.logWarn)(
                  "The bid provided to triggerBilling did not match any bids received."
                );
            });
        },
        78640: function (e, n, t) {
          t.d(n, {
            R: function () {
              return o;
            },
            z: function () {
              return a;
            },
          });
          var r = window,
            i = (r.pbjs = r.pbjs || {});
          function o() {
            return i;
          }
          function a(e) {
            i.installedModules.push(e);
          }
          (i.cmd = i.cmd || []),
            (i.que = i.que || []),
            r === window &&
              ((r._pbjsGlobals = r._pbjsGlobals || []),
              r._pbjsGlobals.push("pbjs"));
        },
        25102: function (e, n, t) {
          t.d(n, {
            hh: function () {
              return a;
            },
            nH: function () {
              return s;
            },
          });
          var r = t(3193),
            i = t(64358);
          function o(e) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : window;
            if (!e) return e;
            if (/\w+:\/\//.exec(e)) return e;
            var t = n.location.protocol;
            try {
              t = n.top.location.protocol;
            } catch (e) {}
            return /^\/\//.exec(e) ? t + e : "".concat(t, "//").concat(e);
          }
          function a(e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              t = n.noLeadingWww,
              r = void 0 !== t && t,
              i = n.noPort,
              a = void 0 !== i && i;
            try {
              e = new URL(o(e));
            } catch (e) {
              return;
            }
            return (
              (e = a ? e.hostname : e.host),
              r && e.startsWith("www.") && (e = e.substring(4)),
              e
            );
          }
          function u(e) {
            try {
              var n = e.querySelector("link[rel='canonical']");
              if (null !== n) return n.href;
            } catch (e) {}
            return null;
          }
          var c,
            s = (function (e) {
              var n,
                t,
                r,
                i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : window;
              return i.top !== i
                ? e
                : function () {
                    var o = u(i.document),
                      a = i.location.href;
                    return (
                      (n === o && a === t) || ((n = o), (t = a), (r = e())), r
                    );
                  };
            })(
              ((c = window),
              function () {
                var e,
                  n,
                  t,
                  s,
                  d = [],
                  f = (function (e) {
                    try {
                      if (!e.location.ancestorOrigins) return;
                      return e.location.ancestorOrigins;
                    } catch (e) {}
                  })(c),
                  l = r.vc.getConfig("maxNestedIframes"),
                  g = !1,
                  v = 0,
                  p = !1,
                  h = !1,
                  m = !1;
                do {
                  var b = e,
                    y = h,
                    E = void 0,
                    w = !1,
                    T = null;
                  (h = !1), (e = e ? e.parent : c);
                  try {
                    E = e.location.href || null;
                  } catch (e) {
                    w = !0;
                  }
                  if (w)
                    if (y) {
                      var I = b.context;
                      try {
                        (n = T = I.sourceUrl),
                          (m = !0),
                          (p = !0),
                          e === c.top && (g = !0),
                          I.canonicalUrl && (t = I.canonicalUrl);
                      } catch (e) {}
                    } else {
                      (0, i.logWarn)(
                        "Trying to access cross domain iframe. Continuing without referrer and location"
                      );
                      try {
                        var A = b.document.referrer;
                        A && ((T = A), e === c.top && (g = !0));
                      } catch (e) {}
                      !T &&
                        f &&
                        f[v - 1] &&
                        ((T = f[v - 1]), e === c.top && (m = !0)),
                        T && !p && (n = T);
                    }
                  else {
                    if (E && ((n = T = E), (p = !1), e === c.top)) {
                      g = !0;
                      var C = u(e.document);
                      C && (t = C);
                    }
                    e.context && e.context.sourceUrl && (h = !0);
                  }
                  d.push(T), v++;
                } while (e !== c.top && v < l);
                d.reverse();
                try {
                  s = c.top.document.referrer;
                } catch (e) {}
                var O = g || m ? n : null,
                  S = r.vc.getConfig("pageUrl") || t || null,
                  j = r.vc.getConfig("pageUrl") || O || o(S, c);
                return (
                  O &&
                    O.indexOf("?") > -1 &&
                    -1 === j.indexOf("?") &&
                    (j = "".concat(j).concat(O.substring(O.indexOf("?")))),
                  {
                    reachedTop: g,
                    isAmp: p,
                    numIframes: v - 1,
                    stack: d,
                    topmostLocation: n || null,
                    location: O,
                    canonicalUrl: S,
                    page: j,
                    domain: a(j) || null,
                    ref: s || null,
                    legacy: {
                      reachedTop: g,
                      isAmp: p,
                      numIframes: v - 1,
                      stack: d,
                      referer: n || null,
                      canonicalUrl: S,
                    },
                  }
                );
              })
            );
        },
        15164: function (e, n, t) {
          if (
            (t.d(n, {
              Dp: function () {
                return g;
              },
              Ld: function () {
                return p;
              },
              c$: function () {
                return v;
              },
              df: function () {
                return m;
              },
              eA: function () {
                return b;
              },
            }),
            25602 == t.j)
          )
            var r = t(4942);
          var i = t(64358),
            o = t(55975),
            a = t(9633),
            u = t(50571),
            c = t(16310),
            s = t(74947);
          if (25602 == t.j) var d = t(3193);
          if (25602 == t.j) var f = t(93304);
          if (25602 == t.j) var l = t(10286);
          var g = "html5",
            v = "cookie",
            p = 25602 == t.j ? [] : null;
          function h() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = e.moduleName,
              t = e.moduleType,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              h = o.isAllowed,
              m = void 0 === h ? u.xD : h;
            function b(e, i) {
              var o = n,
                u = d.vc.getCurrentBidder();
              return (
                u && t === a.UL && f.ZP.aliasRegistry[u] === n && (o = u),
                e({ valid: m(s.S1, (0, l.T)(t, o, (0, r.Z)({}, c.bL, i))) })
              );
            }
            function y(e, n, t) {
              if (!t || "function" != typeof t) return b(e, n);
              p.push(function () {
                var r = b(e, n);
                t(r);
              });
            }
            var E = function (e, n, t, r, i, o) {
                return y(
                  function (o) {
                    if (o && o.valid) {
                      var a =
                          i && "" !== i
                            ? " ;domain=".concat(encodeURIComponent(i))
                            : "",
                        u = t && "" !== t ? " ;expires=".concat(t) : "",
                        c =
                          null != r && "none" == r.toLowerCase()
                            ? "; Secure"
                            : "";
                      document.cookie = ""
                        .concat(e, "=")
                        .concat(encodeURIComponent(n))
                        .concat(u, "; path=/")
                        .concat(a)
                        .concat(r ? "; SameSite=".concat(r) : "")
                        .concat(c);
                    }
                  },
                  v,
                  o
                );
              },
              w = function (e, n) {
                return y(
                  function (n) {
                    if (n && n.valid) {
                      var t = window.document.cookie.match(
                        "(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)"
                      );
                      return t ? decodeURIComponent(t[2]) : null;
                    }
                    return null;
                  },
                  v,
                  n
                );
              },
              T = function (e) {
                return y(
                  function (e) {
                    if (e && e.valid)
                      try {
                        return (
                          localStorage.setItem("prebid.cookieTest", "1"),
                          "1" === localStorage.getItem("prebid.cookieTest")
                        );
                      } catch (e) {
                      } finally {
                        try {
                          localStorage.removeItem("prebid.cookieTest");
                        } catch (e) {}
                      }
                    return !1;
                  },
                  g,
                  e
                );
              },
              I = function (e) {
                return y(
                  function (e) {
                    return !(!e || !e.valid) && (0, i.checkCookieSupport)();
                  },
                  v,
                  e
                );
              },
              A = function (e, n, t) {
                return y(
                  function (t) {
                    t && t.valid && S() && window.localStorage.setItem(e, n);
                  },
                  g,
                  t
                );
              },
              C = function (e, n) {
                return y(
                  function (n) {
                    return n && n.valid && S()
                      ? window.localStorage.getItem(e)
                      : null;
                  },
                  g,
                  n
                );
              },
              O = function (e, n) {
                return y(
                  function (n) {
                    n && n.valid && S() && window.localStorage.removeItem(e);
                  },
                  g,
                  n
                );
              },
              S = function (e) {
                return y(
                  function (e) {
                    if (e && e.valid)
                      try {
                        return !!window.localStorage;
                      } catch (e) {
                        (0, i.logError)("Local storage api disabled");
                      }
                    return !1;
                  },
                  g,
                  e
                );
              },
              j = function (e, n) {
                return y(
                  function (n) {
                    if (n && n.valid) {
                      var t = [];
                      if ((0, i.hasDeviceAccess)())
                        for (var r = document.cookie.split(";"); r.length; ) {
                          var o = r.pop(),
                            a = o.indexOf("=");
                          (a = a < 0 ? o.length : a),
                            decodeURIComponent(
                              o.slice(0, a).replace(/^\s+/, "")
                            ).indexOf(e) >= 0 &&
                              t.push(decodeURIComponent(o.slice(a + 1)));
                        }
                      return t;
                    }
                  },
                  v,
                  n
                );
              };
            return {
              setCookie: E,
              getCookie: w,
              localStorageIsEnabled: T,
              cookiesAreEnabled: I,
              setDataInLocalStorage: A,
              getDataFromLocalStorage: C,
              removeDataFromLocalStorage: O,
              hasLocalStorage: S,
              findSimilarCookies: j,
            };
          }
          function m() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = e.moduleType,
              t = e.moduleName,
              r = e.bidderCode;
            function i() {
              throw new Error(
                "Invalid invocation for getStorageManager: must set either bidderCode, or moduleType + moduleName"
              );
            }
            return (
              r
                ? (((n && n !== a.UL) || t) && i(), (n = a.UL), (t = r))
                : (t && n) || i(),
              h({ moduleType: n, moduleName: t })
            );
          }
          function b(e) {
            return h({ moduleName: e, moduleType: a.wu });
          }
          (0, u.oB)(s.S1, "deviceAccess config", function () {
            if (!(0, i.hasDeviceAccess)()) return { allow: !1 };
          }),
            (0, u.oB)(s.S1, "bidderSettings.*.storageAllowed", function (e) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : o.S;
              if (e[c.$k] === a.UL) {
                var t = n.get(e[c.Ki], "storageAllowed");
                if (t && !0 !== t) {
                  var r = e[c.bL];
                  t = Array.isArray(t)
                    ? t.some(function (e) {
                        return e === r;
                      })
                    : t === r;
                } else t = !!t;
                return t ? void 0 : { allow: t };
              }
            });
        },
        18621: function (e, n, t) {
          t.d(n, {
            TL: function () {
              return I;
            },
            bP: function () {
              return C;
            },
            ol: function () {
              return A;
            },
            q0: function () {
              return O;
            },
          });
          var r = t(4942),
            i = t(42982),
            o = t(64358),
            a = t(20265),
            u = t(3193),
            c = t(70059),
            s = t(78653),
            d = t(24679),
            f = t(92797),
            l = t(55975),
            g = t(34614),
            v = t(62200),
            p = t(31136),
            h = t(8833),
            m = [],
            b = "targetingControls.allowTargetingKeys",
            y = "targetingControls.addTargetingKeys",
            E = 'Only one of "'.concat(b, '" or "').concat(y, '" can be set'),
            w = Object.keys(v.TD).map(function (e) {
              return v.TD[e];
            }),
            T = {
              isActualBid: function (e) {
                return e.getStatusCode() === v.Q_.GOOD;
              },
              isBidNotExpired: function (e) {
                return (
                  e.responseTimestamp + 1e3 * (0, h.N)(e) > (0, o.timestamp)()
                );
              },
              isUnusedBid: function (e) {
                return (
                  e &&
                  ((e.status && !(0, g.q9)([v.UE.RENDERED], e.status)) ||
                    !e.status)
                );
              },
            };
          function I(e) {
            return !Object.values(T).some(function (n) {
              return !n(e);
            });
          }
          var A = (0, f.z3)("sync", function (e, n) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              r =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!r) {
              var a = [],
                c = u.vc.getConfig("sendBidsControl.dealPrioritization"),
                s = (0, o.groupBy)(e, "adUnitCode");
              return (
                Object.keys(s).forEach(function (e) {
                  var r = [],
                    u = (0, o.groupBy)(s[e], "bidderCode");
                  Object.keys(u).forEach(function (e) {
                    return r.push(u[e].reduce(n));
                  }),
                    t > 0
                      ? ((r = c
                          ? r.sort(C(!0))
                          : r.sort(function (e, n) {
                              return n.cpm - e.cpm;
                            })),
                        a.push.apply(a, (0, i.Z)(r.slice(0, t))))
                      : a.push.apply(a, (0, i.Z)(r));
                }),
                a
              );
            }
            return e;
          });
          function C() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return function (n, t) {
              return void 0 !== n.adserverTargeting.hb_deal &&
                void 0 === t.adserverTargeting.hb_deal
                ? -1
                : void 0 === n.adserverTargeting.hb_deal &&
                  void 0 !== t.adserverTargeting.hb_deal
                ? 1
                : e
                ? t.cpm - n.cpm
                : t.adserverTargeting.hb_pb - n.adserverTargeting.hb_pb;
            };
          }
          var O = (function (e) {
            var n = {},
              t = {};
            function s(e, n) {
              return (
                e.adserverTargeting &&
                n &&
                (((0, o.isArray)(n) && (0, g.q9)(n, e.adUnitCode)) ||
                  ("string" == typeof n && e.adUnitCode === n))
              );
            }
            function f(e, n) {
              if (
                !0 === u.vc.getConfig("targetingControls.alwaysIncludeDeals")
              ) {
                var t = w.concat(c.xc);
                return A(n, p.ZH)
                  .map(function (n) {
                    if (n.dealId && s(n, e))
                      return (0, r.Z)(
                        {},
                        n.adUnitCode,
                        q(
                          n,
                          t.filter(function (e) {
                            return void 0 !== n.adserverTargeting[e];
                          })
                        )
                      );
                  })
                  .filter(function (e) {
                    return e;
                  });
              }
              return [];
            }
            function h(e, n) {
              var t = Object.assign({}, v.TD, v.FY),
                r = Object.keys(t),
                i = {};
              (0, o.logInfo)(
                "allowTargetingKeys - allowed keys [ ".concat(
                  n
                    .map(function (e) {
                      return t[e];
                    })
                    .join(", "),
                  " ]"
                )
              ),
                e.map(function (e) {
                  var o = Object.keys(e)[0],
                    a = e[o].filter(function (e) {
                      var o = Object.keys(e)[0],
                        a =
                          0 ===
                            r.filter(function (e) {
                              return 0 === o.indexOf(t[e]);
                            }).length ||
                          (0, g.sE)(n, function (e) {
                            var n = t[e];
                            return 0 === o.indexOf(n);
                          });
                      return (i[o] = !a), a;
                    });
                  e[o] = a;
                });
              var a = Object.keys(i).filter(function (e) {
                return i[e];
              });
              return (
                (0, o.logInfo)(
                  "allowTargetingKeys - removed keys [ ".concat(
                    a.join(", "),
                    " ]"
                  )
                ),
                e.filter(function (e) {
                  return e[Object.keys(e)[0]].length > 0;
                })
              );
            }
            function T(e, n) {
              var t = (0, o.deepClone)(e);
              return Object.keys(t)
                .map(function (e) {
                  return { adUnitCode: e, adserverTargeting: t[e] };
                })
                .sort(C())
                .reduce(function (e, r, i, a) {
                  var u,
                    c =
                      ((u = r.adserverTargeting),
                      Object.keys(u).reduce(function (e, n) {
                        return (
                          e +
                          ""
                            .concat(n, "%3d")
                            .concat(encodeURIComponent(u[n]), "%26")
                        );
                      }, ""));
                  i + 1 === a.length && (c = c.slice(0, -3));
                  var s = r.adUnitCode,
                    d = c.length;
                  return (
                    d <= n
                      ? ((n -= d),
                        (0, o.logInfo)(
                          "AdUnit '"
                            .concat(s, "' auction keys comprised of ")
                            .concat(
                              d,
                              " characters.  Deducted from running threshold; new limit is "
                            )
                            .concat(n),
                          t[s]
                        ),
                        (e[s] = t[s]))
                      : (0, o.logWarn)(
                          "The following keys for adUnitCode '"
                            .concat(
                              s,
                              "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was "
                            )
                            .concat(d, ", the current allotted amount was ")
                            .concat(n, ".\n"),
                          t[s]
                        ),
                    i + 1 === a.length &&
                      0 === Object.keys(e).length &&
                      (0, o.logError)(
                        "No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."
                      ),
                    e
                  );
                }, {});
            }
            function O(e) {
              var n = e
                .map(function (e) {
                  return (0, r.Z)(
                    {},
                    Object.keys(e)[0],
                    e[Object.keys(e)[0]]
                      .map(function (e) {
                        return (0,
                        r.Z)({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(","));
                      })
                      .reduce(function (e, n) {
                        return Object.assign(n, e);
                      }, {})
                  );
                })
                .reduce(function (e, n) {
                  var t = Object.keys(n)[0];
                  return (e[t] = Object.assign({}, e[t], n[t])), e;
                }, {});
              return n;
            }
            function S(n) {
              return "string" == typeof n
                ? [n]
                : (0, o.isArray)(n)
                ? n
                : e.getAdUnitCodes() || [];
            }
            function j() {
              var n = e.getBidsReceived();
              if (u.vc.getConfig("useBidCache")) {
                var r = u.vc.getConfig("bidCacheFilterFunction");
                "function" == typeof r &&
                  (n = n.filter(function (e) {
                    return t[e.adUnitCode] === e.auctionId || !!r(e);
                  }));
              } else
                n = n.filter(function (e) {
                  return t[e.adUnitCode] === e.auctionId;
                });
              return (
                (n = n
                  .filter(function (e) {
                    return (0, a.Z)(e, "video.context") !== d.Oh;
                  })
                  .filter(I)).forEach(function (e) {
                  return (e.latestTargetedAuctionId = t[e.adUnitCode]), e;
                }),
                A(n, p.K$)
              );
            }
            function B(e, t) {
              var o = n.getWinningBids(e, t),
                a = k();
              return (
                (o = o.map(function (e) {
                  return (0, r.Z)(
                    {},
                    e.adUnitCode,
                    Object.keys(e.adserverTargeting)
                      .filter(function (n) {
                        return (
                          void 0 === e.sendStandardTargeting ||
                          e.sendStandardTargeting ||
                          -1 === a.indexOf(n)
                        );
                      })
                      .reduce(function (n, t) {
                        var o = [e.adserverTargeting[t]],
                          a = (0, r.Z)({}, t.substring(0, 20), o);
                        if (t === v.TD.DEAL) {
                          var u = ""
                              .concat(t, "_")
                              .concat(e.bidderCode)
                              .substring(0, 20),
                            c = (0, r.Z)({}, u, o);
                          return [].concat((0, i.Z)(n), [a, c]);
                        }
                        return [].concat((0, i.Z)(n), [a]);
                      }, [])
                  );
                })),
                o
              );
            }
            function k() {
              return e
                .getStandardBidderAdServerTargeting()
                .map(function (e) {
                  return e.key;
                })
                .concat(w)
                .filter(o.uniques);
            }
            function R(e, n, t, r) {
              return (
                Object.keys(n.adserverTargeting)
                  .filter(D())
                  .forEach(function (t) {
                    e.length &&
                      e
                        .filter(
                          (function (e) {
                            return function (t) {
                              return (
                                t.adUnitCode === n.adUnitCode &&
                                t.adserverTargeting[e]
                              );
                            };
                          })(t)
                        )
                        .forEach(
                          (function (e) {
                            return function (t) {
                              (0, o.isArray)(t.adserverTargeting[e]) ||
                                (t.adserverTargeting[e] = [
                                  t.adserverTargeting[e],
                                ]),
                                (t.adserverTargeting[e] = t.adserverTargeting[e]
                                  .concat(n.adserverTargeting[e])
                                  .filter(o.uniques)),
                                delete n.adserverTargeting[e];
                            };
                          })(t)
                        );
                  }),
                e.push(n),
                e
              );
            }
            function D() {
              var e = k();
              return (
                (e = e.concat(c.xc)),
                function (n) {
                  return -1 === e.indexOf(n);
                }
              );
            }
            function U(e) {
              return (0, r.Z)(
                {},
                e.adUnitCode,
                Object.keys(e.adserverTargeting)
                  .filter(D())
                  .map(function (n) {
                    return (0,
                    r.Z)({}, n.substring(0, 20), [e.adserverTargeting[n]]);
                  })
              );
            }
            function P(e, n) {
              return n
                .filter(function (n) {
                  return (0, g.q9)(e, n.adUnitCode);
                })
                .map(function (e) {
                  return Object.assign({}, e);
                })
                .reduce(R, [])
                .map(U)
                .filter(function (e) {
                  return e;
                });
            }
            function _(e, n) {
              var t = w.concat(c.xc),
                i = u.vc.getConfig("sendBidsControl.bidLimit"),
                o = A(n, p.ZH, i),
                a = u.vc.getConfig(
                  "targetingControls.allowSendAllBidsTargetingKeys"
                ),
                d = a
                  ? a.map(function (e) {
                      return v.TD[e];
                    })
                  : t;
              return o
                .map(function (n) {
                  if (s(n, e))
                    return (0, r.Z)(
                      {},
                      n.adUnitCode,
                      q(
                        n,
                        t.filter(function (e) {
                          return (
                            void 0 !== n.adserverTargeting[e] &&
                            -1 !== d.indexOf(e)
                          );
                        })
                      )
                    );
                })
                .filter(function (e) {
                  return e;
                });
            }
            function q(e, n) {
              return n.map(function (n) {
                return (0,
                r.Z)({}, "".concat(n, "_").concat(e.bidderCode).substring(0, 20), [e.adserverTargeting[n]]);
              });
            }
            function N(n) {
              function t(e) {
                return (0, a.Z)(e, v.k2.ADSERVER_TARGETING);
              }
              return e
                .getAdUnits()
                .filter(function (e) {
                  return (0, g.q9)(n, e.code) && t(e);
                })
                .map(function (e) {
                  return (0, r.Z)(
                    {},
                    e.code,
                    (function (e) {
                      var n = t(e);
                      return Object.keys(n).map(function (e) {
                        return (
                          (0, o.isStr)(n[e]) &&
                            (n[e] = n[e].split(",").map(function (e) {
                              return e.trim();
                            })),
                          (0, o.isArray)(n[e]) || (n[e] = [n[e]]),
                          (0, r.Z)({}, e, n[e])
                        );
                      });
                    })(e)
                  );
                });
            }
            return (
              (n.setLatestAuctionForAdUnit = function (e, n) {
                t[e] = n;
              }),
              (n.resetPresetTargeting = function (n, t) {
                if ((0, o.isGptPubadsDefined)()) {
                  var r = S(n),
                    i = e.getAdUnits().filter(function (e) {
                      return (0, g.q9)(r, e.code);
                    }),
                    a = m.reduce(function (e, n) {
                      return (e[n] = null), e;
                    }, {});
                  window.googletag
                    .pubads()
                    .getSlots()
                    .forEach(function (e) {
                      var n = (0, o.isFn)(t) && t(e);
                      i.forEach(function (t) {
                        (t.code === e.getAdUnitPath() ||
                          t.code === e.getSlotElementId() ||
                          ((0, o.isFn)(n) && n(t.code))) &&
                          e.updateTargetingFromMap(a);
                      });
                    });
                }
              }),
              (n.resetPresetTargetingAST = function (e) {
                S(e).forEach(function (e) {
                  var n = window.apntag.getTag(e);
                  if (n && n.keywords) {
                    var t = Object.keys(n.keywords),
                      r = {};
                    t.forEach(function (e) {
                      (0, g.q9)(m, e.toLowerCase()) || (r[e] = n.keywords[e]);
                    }),
                      window.apntag.modifyTag(e, { keywords: r });
                  }
                });
              }),
              (n.getAllTargeting = function (e) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : j(),
                  t = S(e),
                  r = B(t, n)
                    .concat(P(t, n))
                    .concat(
                      u.vc.getConfig("enableSendAllBids") ? _(t, n) : f(t, n)
                    )
                    .concat(N(t));
                r.map(function (e) {
                  Object.keys(e).map(function (n) {
                    e[n].map(function (e) {
                      -1 === m.indexOf(Object.keys(e)[0]) &&
                        (m = Object.keys(e).concat(m));
                    });
                  });
                });
                var i = Object.keys(Object.assign({}, v.kF, v.FY)),
                  a = u.vc.getConfig(b),
                  c = u.vc.getConfig(y);
                if (null != c && null != a) throw new Error(E);
                (a = null != c ? i.concat(c) : a || i),
                  Array.isArray(a) && a.length > 0 && (r = h(r, a)),
                  (r = O(r));
                var s = u.vc.getConfig("targetingControls.auctionKeyMaxChars");
                return (
                  s &&
                    ((0, o.logInfo)(
                      "Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(
                        s,
                        " characters.  Running checks on auction keys..."
                      )
                    ),
                    (r = T(r, s))),
                  t.forEach(function (e) {
                    r[e] || (r[e] = {});
                  }),
                  r
                );
              }),
              u.vc.getConfig("targetingControls", function (e) {
                null != (0, a.Z)(e, b) &&
                  null != (0, a.Z)(e, y) &&
                  (0, o.logError)(E);
              }),
              (n.setTargetingForGPT = function (e, n) {
                window.googletag
                  .pubads()
                  .getSlots()
                  .forEach(function (t) {
                    Object.keys(e)
                      .filter(n ? n(t) : (0, o.isAdUnitCodeMatchingSlot)(t))
                      .forEach(function (n) {
                        Object.keys(e[n]).forEach(function (t) {
                          var r = e[n][t];
                          "string" == typeof r &&
                            -1 !== r.indexOf(",") &&
                            (r = r.split(",")),
                            (e[n][t] = r);
                        }),
                          (0, o.logMessage)(
                            "Attempting to set targeting-map for slot: ".concat(
                              t.getSlotElementId(),
                              " with targeting-map:"
                            ),
                            e[n]
                          ),
                          t.updateTargetingFromMap(e[n]);
                      });
                  });
              }),
              (n.getWinningBids = function (e) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : j(),
                  t = S(e);
                return n
                  .filter(function (e) {
                    return (0, g.q9)(t, e.adUnitCode);
                  })
                  .filter(function (e) {
                    return !0 === l.S.get(e.bidderCode, "allowZeroCpmBids")
                      ? e.cpm >= 0
                      : e.cpm > 0;
                  })
                  .map(function (e) {
                    return e.adUnitCode;
                  })
                  .filter(o.uniques)
                  .map(function (e) {
                    return n
                      .filter(function (n) {
                        return n.adUnitCode === e ? n : null;
                      })
                      .reduce(p.ZH);
                  });
              }),
              (n.setTargetingForAst = function (e) {
                var t = n.getAllTargeting(e);
                try {
                  n.resetPresetTargetingAST(e);
                } catch (e) {
                  (0, o.logError)("unable to reset targeting for AST" + e);
                }
                Object.keys(t).forEach(function (e) {
                  return Object.keys(t[e]).forEach(function (n) {
                    if (
                      ((0, o.logMessage)(
                        "Attempting to set targeting for targetId: "
                          .concat(e, " key: ")
                          .concat(n, " value: ")
                          .concat(t[e][n])
                      ),
                      (0, o.isStr)(t[e][n]) || (0, o.isArray)(t[e][n]))
                    ) {
                      var r = {};
                      n.search(/pt[0-9]/) < 0
                        ? (r[n.toUpperCase()] = t[e][n])
                        : (r[n] = t[e][n]),
                        window.apntag.setKeywords(e, r, {
                          overrideKeyValue: !0,
                        });
                    }
                  });
                });
              }),
              (n.isApntagDefined = function () {
                if (window.apntag && (0, o.isFn)(window.apntag.setKeywords))
                  return !0;
              }),
              n
            );
          })(s.K);
        },
        11974: function (e, n, t) {
          t.d(n, {
            k_: function () {
              return h;
            },
            oS: function () {
              return v;
            },
          });
          var r = t(4942),
            i = t(70885),
            o = t(64358),
            a = t(3193),
            u = t(34614),
            c = t(15164),
            s = t(50571),
            d = t(74947),
            f = t(16310),
            l = t(9633),
            g = t(10286),
            v = {
              syncEnabled: !0,
              filterSettings: { image: { bidders: "*", filter: "include" } },
              syncsPerBidder: 5,
              syncDelay: 3e3,
              auctionDelay: 0,
            };
          a.vc.setDefaults({ userSync: (0, o.deepClone)(v) });
          var p = (0, c.eA)("usersync");
          var h = (function (e) {
            var n = {},
              t = { image: [], iframe: [] },
              c = new Set(),
              s = {},
              v = { image: !0, iframe: !1 },
              p = e.config;
            function h() {
              if (p.syncEnabled && e.browserSupportsCookies) {
                try {
                  !(function () {
                    if (!v.iframe) return;
                    m(t.iframe, function (e) {
                      var n = (0, i.Z)(e, 2),
                        r = n[0],
                        a = n[1];
                      (0, o.logMessage)(
                        "Invoking iframe user sync for bidder: ".concat(r)
                      ),
                        (0, o.insertUserSyncIframe)(a),
                        (function (e, n) {
                          e.image = e.image.filter(function (e) {
                            return e[0] !== n;
                          });
                        })(t, r);
                    });
                  })(),
                    (function () {
                      if (!v.image) return;
                      m(t.image, function (e) {
                        var n = (0, i.Z)(e, 2),
                          t = n[0],
                          r = n[1];
                        (0, o.logMessage)(
                          "Invoking image pixel user sync for bidder: ".concat(
                            t
                          )
                        ),
                          (0, o.triggerPixel)(r);
                      });
                    })();
                } catch (e) {
                  return (0, o.logError)("Error firing user syncs", e);
                }
                t = { image: [], iframe: [] };
              }
            }
            function m(e, n) {
              (0, o.shuffle)(e).forEach(n);
            }
            function b(e, n) {
              var t = p.filterSettings;
              if (
                (function (e, n) {
                  if (e.all && e[n])
                    return (
                      (0, o.logWarn)(
                        'Detected presence of the "filterSettings.all" and "filterSettings.'.concat(
                          n,
                          '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.'
                        )
                      ),
                      !1
                    );
                  var t = e.all ? e.all : e[n],
                    r = e.all ? "all" : n;
                  if (!t) return !1;
                  var i = t.filter,
                    a = t.bidders;
                  if (i && "include" !== i && "exclude" !== i)
                    return (
                      (0, o.logWarn)(
                        'UserSync "filterSettings.'
                          .concat(r, ".filter\" setting '")
                          .concat(
                            i,
                            "' is not a valid option; use either 'include' or 'exclude'."
                          )
                      ),
                      !1
                    );
                  if (
                    "*" !== a &&
                    !(
                      Array.isArray(a) &&
                      a.length > 0 &&
                      a.every(function (e) {
                        return (0, o.isStr)(e) && "*" !== e;
                      })
                    )
                  )
                    return (
                      (0, o.logWarn)(
                        'Detected an invalid setup in userSync "filterSettings.'.concat(
                          r,
                          ".bidders\"; use either '*' (to represent all bidders) or an array of bidders."
                        )
                      ),
                      !1
                    );
                  return !0;
                })(t, e)
              ) {
                v[e] = !0;
                var r = t.all ? t.all : t[e],
                  i = "*" === r.bidders ? [n] : r.bidders,
                  a = {
                    include: function (e, n) {
                      return !(0, u.q9)(e, n);
                    },
                    exclude: function (e, n) {
                      return (0, u.q9)(e, n);
                    },
                  };
                return a[r.filter || "include"](i, n);
              }
              return !v[e];
            }
            return (
              a.vc.getConfig("userSync", function (e) {
                if (e.userSync) {
                  var n = e.userSync.filterSettings;
                  (0, o.isPlainObject)(n) &&
                    (n.image ||
                      n.all ||
                      (e.userSync.filterSettings.image = {
                        bidders: "*",
                        filter: "include",
                      }));
                }
                p = Object.assign(p, e.userSync);
              }),
              e.regRule(d.K$, "userSync config", function (e) {
                if (!p.syncEnabled)
                  return { allow: !1, reason: "syncs are disabled" };
                if (e[f.$k] === l.UL) {
                  var t = e[f.cx],
                    r = e[f.bp];
                  if (!n.canBidderRegisterSync(t, r))
                    return {
                      allow: !1,
                      reason: ""
                        .concat(t, " syncs are not enabled for ")
                        .concat(r),
                    };
                }
              }),
              (n.registerSync = function (n, i, a) {
                var u;
                return c.has(i)
                  ? (0, o.logMessage)(
                      'already fired syncs for "'.concat(
                        i,
                        '", ignoring registerSync call'
                      )
                    )
                  : p.syncEnabled && (0, o.isArray)(t[n])
                  ? i
                    ? 0 !== p.syncsPerBidder && Number(s[i]) >= p.syncsPerBidder
                      ? (0, o.logWarn)(
                          'Number of user syncs exceeded for "'.concat(i, '"')
                        )
                      : void (
                          e.isAllowed(
                            d.K$,
                            (0, g.T)(
                              l.UL,
                              i,
                              ((u = {}),
                              (0, r.Z)(u, f.cx, n),
                              (0, r.Z)(u, f.IV, a),
                              u)
                            )
                          ) &&
                          (t[n].push([i, a]),
                          (s = (function (e, n) {
                            return e[n] ? (e[n] += 1) : (e[n] = 1), e;
                          })(s, i)))
                        )
                    : (0, o.logWarn)("Bidder is required for registering sync")
                  : (0, o.logWarn)(
                      'User sync type "'.concat(n, '" not supported')
                    );
              }),
              (n.bidderDone = c.add.bind(c)),
              (n.syncUsers = function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0;
                if (e) return setTimeout(h, Number(e));
                h();
              }),
              (n.triggerUserSyncs = function () {
                p.enableOverride && n.syncUsers();
              }),
              (n.canBidderRegisterSync = function (e, n) {
                return !p.filterSettings || !b(e, n);
              }),
              n
            );
          })(
            Object.defineProperties(
              {
                config: a.vc.getConfig("userSync"),
                isAllowed: s.xD,
                regRule: s.oB,
              },
              {
                browserSupportsCookies: {
                  get: function () {
                    return !(0, o.isSafariBrowser)() && p.cookiesAreEnabled();
                  },
                },
              }
            )
          );
        },
        64358: function (e, n, t) {
          t.r(n),
            t.d(n, {
              _each: function () {
                return de;
              },
              _map: function () {
                return le;
              },
              _setEventEmitter: function () {
                return A;
              },
              binarySearch: function () {
                return sn;
              },
              buildUrl: function () {
                return nn;
              },
              callBurl: function () {
                return he;
              },
              checkCookieSupport: function () {
                return xe;
              },
              cleanObj: function () {
                return Je;
              },
              compareCodeAndSlot: function () {
                return Ge;
              },
              contains: function () {
                return fe;
              },
              createIframe: function () {
                return X;
              },
              createInvisibleIframe: function () {
                return Y;
              },
              createTrackPixelHtml: function () {
                return ye;
              },
              createTrackPixelIframeHtml: function () {
                return Ee;
              },
              cyrb53Hash: function () {
                return on;
              },
              debugTurnedOn: function () {
                return Q;
              },
              deepAccess: function () {
                return v.Z;
              },
              deepClone: function () {
                return Be;
              },
              deepEqual: function () {
                return tn;
              },
              deepSetValue: function () {
                return p.N;
              },
              delayExecution: function () {
                return Ze;
              },
              flatten: function () {
                return Te;
              },
              formatQS: function () {
                return Ye;
              },
              generateUUID: function () {
                return D;
              },
              getBidIdParameter: function () {
                return U;
              },
              getBidRequest: function () {
                return Ie;
              },
              getBidderCodes: function () {
                return Ce;
              },
              getDNT: function () {
                return ze;
              },
              getDefinedParams: function () {
                return Fe;
              },
              getParameterByName: function () {
                return ee;
              },
              getPerformanceNow: function () {
                return qe;
              },
              getPrebidInternal: function () {
                return j;
              },
              getUniqueIdentifierStr: function () {
                return R;
              },
              getUserConfiguredParams: function () {
                return Le;
              },
              getValue: function () {
                return Ae;
              },
              getWindowLocation: function () {
                return W;
              },
              getWindowSelf: function () {
                return F;
              },
              getWindowTop: function () {
                return M;
              },
              groupBy: function () {
                return Me;
              },
              hasConsoleLogger: function () {
                return J;
              },
              hasDeviceAccess: function () {
                return Ne;
              },
              inIframe: function () {
                return ke;
              },
              insertElement: function () {
                return ge;
              },
              insertHtmlIntoIframe: function () {
                return me;
              },
              insertUserSyncIframe: function () {
                return be;
              },
              internal: function () {
                return O;
              },
              isA: function () {
                return ne;
              },
              isAdUnitCodeMatchingSlot: function () {
                return Ke;
              },
              isApnGetTagDefined: function () {
                return Se;
              },
              isArray: function () {
                return ie;
              },
              isArrayOfNums: function () {
                return $e;
              },
              isBoolean: function () {
                return ue;
              },
              isEmpty: function () {
                return ce;
              },
              isEmptyStr: function () {
                return se;
              },
              isFn: function () {
                return te;
              },
              isGptPubadsDefined: function () {
                return Oe;
              },
              isInteger: function () {
                return Ve;
              },
              isNumber: function () {
                return oe;
              },
              isPlainObject: function () {
                return ae;
              },
              isSafariBrowser: function () {
                return Re;
              },
              isStr: function () {
                return re;
              },
              isValidMediaTypes: function () {
                return We;
              },
              logError: function () {
                return K;
              },
              logInfo: function () {
                return z;
              },
              logMessage: function () {
                return L;
              },
              logWarn: function () {
                return G;
              },
              memoize: function () {
                return un;
              },
              mergeDeep: function () {
                return rn;
              },
              parseGPTSingleSizeArray: function () {
                return N;
              },
              parseGPTSingleSizeArrayToRtbSize: function () {
                return x;
              },
              parseQS: function () {
                return Xe;
              },
              parseQueryStringParameters: function () {
                return P;
              },
              parseSizesInput: function () {
                return q;
              },
              parseUrl: function () {
                return en;
              },
              pick: function () {
                return Qe;
              },
              prefixLog: function () {
                return H;
              },
              replaceAuctionPrice: function () {
                return Ue;
              },
              replaceClickThrough: function () {
                return Pe;
              },
              replaceMacros: function () {
                return De;
              },
              safeJSONParse: function () {
                return an;
              },
              setScriptAttributes: function () {
                return cn;
              },
              shuffle: function () {
                return je;
              },
              timestamp: function () {
                return _e;
              },
              transformAdServerTargetingObj: function () {
                return _;
              },
              triggerPixel: function () {
                return pe;
              },
              uniques: function () {
                return we;
              },
              unsupportedBidderMessage: function () {
                return He;
              },
              waitForElementToLoad: function () {
                return ve;
              },
            });
          var r = t(42982),
            i = t(4942),
            o = t(70885),
            a = t(71002),
            u = t(3193),
            c = t(77079),
            s = t.n(c);
          if (25602 == t.j) var d = t(34614);
          var f = t(62200),
            l = t(68792),
            g = t(78640);
          if (25602 == t.j) var v = t(20265);
          if (25602 == t.j) var p = t(96475);
          var h,
            m = Object.prototype.toString,
            b = Boolean(window.console),
            y = Boolean(b && window.console.log),
            E = Boolean(b && window.console.info),
            w = Boolean(b && window.console.warn),
            T = Boolean(b && window.console.error),
            I = (0, g.R)();
          function A(e) {
            h = e;
          }
          function C() {
            null != h && h.apply(void 0, arguments);
          }
          var O = {
              checkCookieSupport: xe,
              createTrackPixelIframeHtml: Ee,
              getWindowSelf: F,
              getWindowTop: M,
              getWindowLocation: W,
              insertUserSyncIframe: be,
              insertElement: ge,
              isFn: te,
              triggerPixel: pe,
              logError: K,
              logWarn: G,
              logMessage: L,
              logInfo: z,
              parseQS: Xe,
              formatQS: Ye,
              deepEqual: tn,
            },
            S = {};
          function j() {
            return S;
          }
          var B,
            k =
              ((B = 0),
              function () {
                return ++B;
              });
          function R() {
            return k() + Math.random().toString(16).substr(2);
          }
          function D(e) {
            return e
              ? (
                  e ^
                  ((window && window.crypto && window.crypto.getRandomValues
                    ? crypto.getRandomValues(new Uint8Array(1))[0] % 16
                    : 16 * Math.random()) >>
                    (e / 4))
                ).toString(16)
              : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, D);
          }
          function U(e, n) {
            return (null == n ? void 0 : n[e]) || "";
          }
          function P(e) {
            var n = "";
            for (var t in e)
              e.hasOwnProperty(t) &&
                (n += t + "=" + encodeURIComponent(e[t]) + "&");
            return (n = n.replace(/&$/, ""));
          }
          function _(e) {
            return e && Object.getOwnPropertyNames(e).length > 0
              ? Object.keys(e)
                  .map(function (n) {
                    return "".concat(n, "=").concat(encodeURIComponent(e[n]));
                  })
                  .join("&")
              : "";
          }
          function q(e) {
            return "string" == typeof e
              ? e.split(",").filter(function (e) {
                  return e.match(/^(\d)+x(\d)+$/i);
                })
              : "object" === (0, a.Z)(e)
              ? 2 === e.length &&
                "number" == typeof e[0] &&
                "number" == typeof e[1]
                ? [N(e)]
                : e.map(N)
              : [];
          }
          function N(e) {
            if (Z(e)) return e[0] + "x" + e[1];
          }
          function x(e) {
            if (Z(e)) return { w: e[0], h: e[1] };
          }
          function Z(e) {
            return ie(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1]);
          }
          function M() {
            return window.top;
          }
          function F() {
            return window.self;
          }
          function W() {
            return window.location;
          }
          function L() {
            Q() && y && console.log.apply(console, V(arguments, "MESSAGE:"));
          }
          function z() {
            Q() && E && console.info.apply(console, V(arguments, "INFO:"));
          }
          function G() {
            Q() && w && console.warn.apply(console, V(arguments, "WARNING:")),
              C(f.FP.AUCTION_DEBUG, { type: "WARNING", arguments: arguments });
          }
          function K() {
            Q() && T && console.error.apply(console, V(arguments, "ERROR:")),
              C(f.FP.AUCTION_DEBUG, { type: "ERROR", arguments: arguments });
          }
          function H(e) {
            function n(n) {
              return function () {
                for (
                  var t = arguments.length, r = new Array(t), i = 0;
                  i < t;
                  i++
                )
                  r[i] = arguments[i];
                n.apply(void 0, [e].concat(r));
              };
            }
            return {
              logError: n(K),
              logWarn: n(G),
              logMessage: n(L),
              logInfo: n(z),
            };
          }
          function V(e, n) {
            e = [].slice.call(e);
            var t = u.vc.getCurrentBidder();
            return (
              n && e.unshift(n),
              t && e.unshift(r("#aaa")),
              e.unshift(r("#3b88c3")),
              e.unshift("%cPrebid" + (t ? "%c".concat(t) : "")),
              e
            );
            function r(e) {
              return "display: inline-block; color: #fff; background: ".concat(
                e,
                "; padding: 1px 4px; border-radius: 3px;"
              );
            }
          }
          function J() {
            return y;
          }
          function Q() {
            return !!u.vc.getConfig("debug");
          }
          var $,
            X =
              (($ = {
                border: "0px",
                hspace: "0",
                vspace: "0",
                marginWidth: "0",
                marginHeight: "0",
                scrolling: "no",
                frameBorder: "0",
                allowtransparency: "true",
              }),
              function (e, n) {
                var t =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  r = e.createElement("iframe");
                return (
                  Object.assign(r, Object.assign({}, $, n)),
                  Object.assign(r.style, t),
                  r
                );
              });
          function Y() {
            return X(
              document,
              { id: R(), width: 0, height: 0, src: "about:blank" },
              { display: "none", height: "0px", width: "0px", border: "0px" }
            );
          }
          function ee(e) {
            return Xe(W().search)[e] || "";
          }
          function ne(e, n) {
            return m.call(e) === "[object " + n + "]";
          }
          function te(e) {
            return ne(e, "Function");
          }
          function re(e) {
            return ne(e, "String");
          }
          var ie = Array.isArray.bind(Array);
          function oe(e) {
            return ne(e, "Number");
          }
          function ae(e) {
            return ne(e, "Object");
          }
          function ue(e) {
            return ne(e, "Boolean");
          }
          function ce(e) {
            return (
              !e ||
              (ie(e) || re(e) ? !(e.length > 0) : Object.keys(e).length <= 0)
            );
          }
          function se(e) {
            return re(e) && (!e || 0 === e.length);
          }
          function de(e, n) {
            var t = this;
            if (te(null == e ? void 0 : e.forEach)) return e.forEach(n, this);
            Object.entries(e || {}).forEach(function (e) {
              var r = (0, o.Z)(e, 2),
                i = r[0],
                a = r[1];
              return n.call(t, a, i);
            });
          }
          function fe(e, n) {
            return te(null == e ? void 0 : e.includes) && e.includes(n);
          }
          function le(e, n) {
            return te(null == e ? void 0 : e.map)
              ? e.map(n)
              : Object.entries(e || {}).map(function (t) {
                  var r = (0, o.Z)(t, 2),
                    i = r[0],
                    a = r[1];
                  return n(a, i, e);
                });
          }
          function ge(e, n, t, r) {
            var i;
            (n = n || document),
              (i = t
                ? n.getElementsByTagName(t)
                : n.getElementsByTagName("head"));
            try {
              if ((i = i.length ? i : n.getElementsByTagName("body")).length) {
                i = i[0];
                var o = r ? null : i.firstChild;
                return i.insertBefore(e, o);
              }
            } catch (e) {}
          }
          function ve(e, n) {
            var t = null;
            return new l.Z(function (r) {
              var i = function n() {
                e.removeEventListener("load", n),
                  e.removeEventListener("error", n),
                  null != t && window.clearTimeout(t),
                  r();
              };
              e.addEventListener("load", i),
                e.addEventListener("error", i),
                null != n && (t = window.setTimeout(i, n));
            });
          }
          function pe(e, n, t) {
            var r = new Image();
            n && O.isFn(n) && ve(r, t).then(n), (r.src = e);
          }
          function he(e) {
            var n = e.source,
              t = e.burl;
            n === f.os.SRC && t && O.triggerPixel(t);
          }
          function me(e) {
            if (e) {
              var n,
                t = Y();
              O.insertElement(t, document, "body"),
                (n = t.contentWindow.document).open(),
                n.write(e),
                n.close();
            }
          }
          function be(e, n, t) {
            var r = O.createTrackPixelIframeHtml(
                e,
                !1,
                "allow-scripts allow-same-origin"
              ),
              i = document.createElement("div");
            i.innerHTML = r;
            var o = i.firstChild;
            n && O.isFn(n) && ve(o, t).then(n),
              O.insertElement(o, document, "html", !0);
          }
          function ye(e) {
            if (!e) return "";
            var n =
              '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return (n += '<img src="' + encodeURI(e) + '"></div>');
          }
          function Ee(e) {
            var n =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1],
              t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "";
            return e
              ? (n && (e = encodeURI(e)),
                t && (t = 'sandbox="'.concat(t, '"')),
                "<iframe "
                  .concat(t, ' id="')
                  .concat(
                    R(),
                    '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="'
                  )
                  .concat(e, '">\n    </iframe>'))
              : "";
          }
          function we(e, n, t) {
            return t.indexOf(e) === n;
          }
          function Te(e, n) {
            return e.concat(n);
          }
          function Ie(e, n) {
            if (e)
              return n
                .flatMap(function (e) {
                  return e.bids;
                })
                .find(function (n) {
                  return ["bidId", "adId", "bid_id"].some(function (t) {
                    return n[t] === e;
                  });
                });
          }
          function Ae(e, n) {
            return e[n];
          }
          function Ce() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : I.adUnits;
            return e
              .map(function (e) {
                return e.bids
                  .map(function (e) {
                    return e.bidder;
                  })
                  .reduce(Te, []);
              })
              .reduce(Te, [])
              .filter(function (e) {
                return void 0 !== e;
              })
              .filter(we);
          }
          function Oe() {
            if (
              window.googletag &&
              te(window.googletag.pubads) &&
              te(window.googletag.pubads().getSlots)
            )
              return !0;
          }
          function Se() {
            if (window.apntag && te(window.apntag.getTag)) return !0;
          }
          function je(e) {
            for (var n = e.length; n > 0; ) {
              var t = Math.floor(Math.random() * n),
                r = e[--n];
              (e[n] = e[t]), (e[t] = r);
            }
            return e;
          }
          function Be(e) {
            return s()(e);
          }
          function ke() {
            try {
              return O.getWindowSelf() !== O.getWindowTop();
            } catch (e) {
              return !0;
            }
          }
          function Re() {
            return /^((?!chrome|android|crios|fxios).)*safari/i.test(
              navigator.userAgent
            );
          }
          function De(e, n) {
            if (e)
              return Object.entries(n).reduce(function (e, n) {
                var t = (0, o.Z)(n, 2),
                  r = t[0],
                  i = t[1];
                return e.replace(
                  new RegExp("\\$\\{" + r + "\\}", "g"),
                  i || ""
                );
              }, e);
          }
          function Ue(e, n) {
            return De(e, { AUCTION_PRICE: n });
          }
          function Pe(e, n) {
            if (e && n && "string" == typeof n)
              return e.replace(/\${CLICKTHROUGH}/g, n);
          }
          function _e() {
            return new Date().getTime();
          }
          function qe() {
            return (
              (window.performance &&
                window.performance.now &&
                window.performance.now()) ||
              0
            );
          }
          function Ne() {
            return !1 !== u.vc.getConfig("deviceAccess");
          }
          function xe() {
            if (window.navigator.cookieEnabled || document.cookie.length)
              return !0;
          }
          function Ze(e, n) {
            if (n < 1)
              throw new Error(
                "numRequiredCalls must be a positive number. Got ".concat(n)
              );
            var t = 0;
            return function () {
              ++t === n && e.apply(this, arguments);
            };
          }
          function Me(e, n) {
            return e.reduce(function (e, t) {
              return (e[t[n]] = e[t[n]] || []).push(t), e;
            }, {});
          }
          function Fe(e, n) {
            return n
              .filter(function (n) {
                return e[n];
              })
              .reduce(function (n, t) {
                return Object.assign(n, (0, i.Z)({}, t, e[t]));
              }, {});
          }
          function We(e) {
            var n = ["banner", "native", "video"];
            return (
              !!Object.keys(e).every(function (e) {
                return (0, d.q9)(n, e);
              }) &&
              (!e.video ||
                !e.video.context ||
                (0, d.q9)(["instream", "outstream", "adpod"], e.video.context))
            );
          }
          function Le(e, n, t) {
            return e
              .filter(function (e) {
                return e.code === n;
              })
              .flatMap(function (e) {
                return e.bids;
              })
              .filter(function (e) {
                return e.bidder === t;
              })
              .map(function (e) {
                return e.params || {};
              });
          }
          function ze() {
            return (
              "1" === navigator.doNotTrack ||
              "1" === window.doNotTrack ||
              "1" === navigator.msDoNotTrack ||
              "yes" === navigator.doNotTrack
            );
          }
          var Ge = function (e, n) {
            return e.getAdUnitPath() === n || e.getSlotElementId() === n;
          };
          function Ke(e) {
            return function (n) {
              return Ge(e, n);
            };
          }
          function He(e, n) {
            var t = Object.keys(e.mediaTypes || { banner: "banner" }).join(
              ", "
            );
            return "\n    "
              .concat(e.code, " is a ")
              .concat(t, " ad unit\n    containing bidders that don't support ")
              .concat(t, ": ")
              .concat(n, ".\n    This bidder won't fetch demand.\n  ");
          }
          var Ve = Number.isInteger.bind(Number);
          function Je(e) {
            return Object.fromEntries(
              Object.entries(e).filter(function (e) {
                var n = (0, o.Z)(e, 2);
                n[0];
                return void 0 !== n[1];
              })
            );
          }
          function Qe(e, n) {
            return "object" !== (0, a.Z)(e)
              ? {}
              : n.reduce(function (t, r, i) {
                  if ("function" == typeof r) return t;
                  var o = r,
                    a = r.match(/^(.+?)\sas\s(.+?)$/i);
                  a && ((r = a[1]), (o = a[2]));
                  var u = e[r];
                  return (
                    "function" == typeof n[i + 1] && (u = n[i + 1](u, t)),
                    void 0 !== u && (t[o] = u),
                    t
                  );
                }, {});
          }
          function $e(e, n) {
            return (
              ie(e) &&
              (!n || e.length === n) &&
              e.every(function (e) {
                return Ve(e);
              })
            );
          }
          function Xe(e) {
            return e
              ? e
                  .replace(/^\?/, "")
                  .split("&")
                  .reduce(function (e, n) {
                    var t = n.split("="),
                      r = (0, o.Z)(t, 2),
                      i = r[0],
                      a = r[1];
                    return (
                      /\[\]$/.test(i)
                        ? ((e[(i = i.replace("[]", ""))] = e[i] || []),
                          e[i].push(a))
                        : (e[i] = a || ""),
                      e
                    );
                  }, {})
              : {};
          }
          function Ye(e) {
            return Object.keys(e)
              .map(function (n) {
                return Array.isArray(e[n])
                  ? e[n]
                      .map(function (e) {
                        return "".concat(n, "[]=").concat(e);
                      })
                      .join("&")
                  : "".concat(n, "=").concat(e[n]);
              })
              .join("&");
          }
          function en(e, n) {
            var t = document.createElement("a");
            n && "noDecodeWholeURL" in n && n.noDecodeWholeURL
              ? (t.href = e)
              : (t.href = decodeURIComponent(e));
            var r = n && "decodeSearchAsString" in n && n.decodeSearchAsString;
            return {
              href: t.href,
              protocol: (t.protocol || "").replace(/:$/, ""),
              hostname: t.hostname,
              port: +t.port,
              pathname: t.pathname.replace(/^(?!\/)/, "/"),
              search: r ? t.search : O.parseQS(t.search || ""),
              hash: (t.hash || "").replace(/^#/, ""),
              host: t.host || window.location.host,
            };
          }
          function nn(e) {
            return (
              (e.protocol || "http") +
              "://" +
              (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) +
              (e.pathname || "") +
              (e.search ? "?".concat(O.formatQS(e.search || "")) : "") +
              (e.hash ? "#".concat(e.hash) : "")
            );
          }
          function tn(e, n) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = t.checkTypes,
              i = void 0 !== r && r;
            if (e === n) return !0;
            if (
              "object" !== (0, a.Z)(e) ||
              null === e ||
              "object" !== (0, a.Z)(n) ||
              null === n ||
              (i && e.constructor !== n.constructor)
            )
              return !1;
            var o = Object.keys(e);
            if (o.length !== Object.keys(n).length) return !1;
            for (var u = 0, c = o; u < c.length; u++) {
              var s = c[u];
              if (!n.hasOwnProperty(s)) return !1;
              if (!tn(e[s], n[s], { checkTypes: i })) return !1;
            }
            return !0;
          }
          function rn(e) {
            for (
              var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), o = 1;
              o < n;
              o++
            )
              t[o - 1] = arguments[o];
            if (!t.length) return e;
            var a = t.shift();
            if (ae(e) && ae(a)) {
              var u = function (n) {
                ae(a[n])
                  ? (e[n] || Object.assign(e, (0, i.Z)({}, n, {})),
                    rn(e[n], a[n]))
                  : ie(a[n])
                  ? e[n]
                    ? ie(e[n]) &&
                      a[n].forEach(function (t) {
                        for (var r = 1, i = 0; i < e[n].length; i++)
                          if (tn(e[n][i], t)) {
                            r = 0;
                            break;
                          }
                        r && e[n].push(t);
                      })
                    : Object.assign(e, (0, i.Z)({}, n, (0, r.Z)(a[n])))
                  : Object.assign(e, (0, i.Z)({}, n, a[n]));
              };
              for (var c in a) u(c);
            }
            return rn.apply(void 0, [e].concat(t));
          }
          function on(e) {
            for (
              var n,
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                r = function (e, n) {
                  if (te(Math.imul)) return Math.imul(e, n);
                  var t = (4194303 & e) * (n |= 0);
                  return (
                    4290772992 & e && (t += ((4290772992 & e) * n) | 0), 0 | t
                  );
                },
                i = 3735928559 ^ t,
                o = 1103547991 ^ t,
                a = 0;
              a < e.length;
              a++
            )
              (i = r(i ^ (n = e.charCodeAt(a)), 2654435761)),
                (o = r(o ^ n, 1597334677));
            return (
              (i =
                r(i ^ (i >>> 16), 2246822507) ^ r(o ^ (o >>> 13), 3266489909)),
              (
                4294967296 *
                  (2097151 &
                    (o =
                      r(o ^ (o >>> 16), 2246822507) ^
                      r(i ^ (i >>> 13), 3266489909))) +
                (i >>> 0)
              ).toString()
            );
          }
          function an(e) {
            try {
              return JSON.parse(e);
            } catch (e) {}
          }
          function un(e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : function (e) {
                      return e;
                    },
              t = new Map(),
              r = function () {
                var r = n.apply(this, arguments);
                return t.has(r) || t.set(r, e.apply(this, arguments)), t.get(r);
              };
            return (r.clear = t.clear.bind(t)), r;
          }
          function cn(e, n) {
            Object.entries(n).forEach(function (n) {
              var t = (0, o.Z)(n, 2),
                r = t[0],
                i = t[1];
              return e.setAttribute(r, i);
            });
          }
          function sn(e, n) {
            for (
              var t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : function (e) {
                        return e;
                      },
                r = 0,
                i = e.length && e.length - 1,
                o = t(n);
              i - r > 1;

            ) {
              var a = r + Math.round((i - r) / 2);
              o > t(e[a]) ? (r = a) : (i = a);
            }
            for (; e.length > r && o > t(e[r]); ) r++;
            return r;
          }
        },
        36066: function (e, n, t) {
          if (
            (t.d(n, {
              O: function () {
                return a;
              },
            }),
            25602 == t.j)
          )
            var r = t(78653);
          if (25602 == t.j) var i = t(55975);
          if (25602 == t.j) var o = t(64358);
          function a(e, n, t) {
            var a,
              u =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {},
              c = u.index,
              s = void 0 === c ? r.K.index : c,
              d = u.bs,
              f = void 0 === d ? i.S : d;
            t = t || s.getBidRequest(n);
            var l = null == n ? void 0 : n.adapterCode,
              g =
                (null == n ? void 0 : n.bidderCode) ||
                (null === (a = t) || void 0 === a ? void 0 : a.bidder),
              v = f.get(
                null == n ? void 0 : n.adapterCode,
                "adjustAlternateBids"
              ),
              p =
                f.getOwn(g, "bidCpmAdjustment") ||
                f.get(v ? l : g, "bidCpmAdjustment");
            if (p && "function" == typeof p)
              try {
                return p(e, Object.assign({}, n), t);
              } catch (e) {
                (0, o.logError)("Error during bid adjustment", e);
              }
            return e;
          }
        },
        17673: function (e, n, t) {
          if (
            (t.d(n, {
              h: function () {
                return i;
              },
            }),
            25602 == t.j)
          )
            var r = t(20265);
          function i(e) {
            return (
              null == e ||
              !e.gdprApplies ||
              !0 === (0, r.Z)(e, "vendorData.purpose.consents.1")
            );
          }
        },
        99128: function (e, n, t) {
          t.d(n, {
            A: function () {
              return w;
            },
            Bf: function () {
              return h;
            },
            V6: function () {
              return b;
            },
            g3: function () {
              return E;
            },
          });
          var r = t(70885),
            i = t(3193);
          function o(e, n) {
            var t =
              ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
            if (!t) {
              if (
                Array.isArray(e) ||
                (t = (function (e, n) {
                  if (!e) return;
                  if ("string" == typeof e) return a(e, n);
                  var t = Object.prototype.toString.call(e).slice(8, -1);
                  "Object" === t && e.constructor && (t = e.constructor.name);
                  if ("Map" === t || "Set" === t) return Array.from(e);
                  if (
                    "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  )
                    return a(e, n);
                })(e)) ||
                (n && e && "number" == typeof e.length)
              ) {
                t && (e = t);
                var r = 0,
                  i = function () {};
                return {
                  s: i,
                  n: function () {
                    return r >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[r++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: i,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var o,
              u = !0,
              c = !1;
            return {
              s: function () {
                t = t.call(e);
              },
              n: function () {
                var e = t.next();
                return (u = e.done), e;
              },
              e: function (e) {
                (c = !0), (o = e);
              },
              f: function () {
                try {
                  u || null == t.return || t.return();
                } finally {
                  if (c) throw o;
                }
              },
            };
          }
          function a(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
            return r;
          }
          var u = "performanceMetrics",
            c =
              window.performance && window.performance.now
                ? function () {
                    return window.performance.now();
                  }
                : function () {
                    return Date.now();
                  },
            s = new WeakMap();
          function d() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = e.now,
              t = void 0 === n ? c : n,
              r = e.mkNode,
              i = void 0 === r ? g : r,
              o = e.mkTimer,
              a = void 0 === o ? l : o,
              u = e.mkRenamer,
              d =
                void 0 === u
                  ? function (e) {
                      return e;
                    }
                  : u,
              f = e.nodes,
              v = void 0 === f ? s : f;
            return function () {
              return (function e(n) {
                var r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : function (e) {
                        return {
                          forEach: function (n) {
                            n(e);
                          },
                        };
                      };
                function o(e) {
                  return function (t) {
                    return n.dfWalk({
                      visit: function (n, r) {
                        var i = r[e];
                        if (i.hasOwnProperty(t)) return i[t];
                      },
                    });
                  };
                }
                r = d(r);
                var u = o("timestamps");
                function c(e, t) {
                  var i = r(e);
                  n.dfWalk({
                    follow: function (e, n) {
                      return n.propagate && (!e || !e.stopPropagation);
                    },
                    visit: function (e, n) {
                      i.forEach(function (r) {
                        null == e
                          ? (n.metrics[r] = t)
                          : (n.groups.hasOwnProperty(r) || (n.groups[r] = []),
                            n.groups[r].push(t));
                      });
                    },
                  });
                }
                function s(e) {
                  n.timestamps[e] = t();
                }
                function f(e, n) {
                  var r = u(e),
                    i = null != r ? t() - r : null;
                  return null != n && c(n, i), i;
                }
                function l(e, n, t) {
                  var r = u(e),
                    i = u(n),
                    o = null != r && null != i ? i - r : null;
                  return null != t && c(t, o), o;
                }
                function g(e) {
                  return a(t, function (n) {
                    return c(e, n);
                  });
                }
                function p(e, n) {
                  return g(e).stopAfter(n)();
                }
                function h(e, n, t) {
                  var r = g(e);
                  return t(
                    (function (e) {
                      var n = r.stopBefore(e);
                      return (
                        (n.bail = e.bail && r.stopBefore(e.bail)),
                        (n.stopTiming = r),
                        (n.untimed = e),
                        n
                      );
                    })(n)
                  );
                }
                function m() {
                  var e = {};
                  return (
                    n.dfWalk({
                      visit: function (n, t) {
                        e = Object.assign(
                          {},
                          !n || n.includeGroups ? t.groups : null,
                          t.metrics,
                          e
                        );
                      },
                    }),
                    e
                  );
                }
                function b() {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    o = t.propagate,
                    a = void 0 === o || o,
                    u = t.stopPropagation,
                    c = void 0 !== u && u,
                    s = t.includeGroups,
                    d = void 0 !== s && s;
                  return e(
                    i([
                      [
                        n,
                        { propagate: a, stopPropagation: c, includeGroups: d },
                      ],
                    ]),
                    r
                  );
                }
                function y(e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = t.propagate,
                    i = void 0 === r || r,
                    o = t.stopPropagation,
                    a = void 0 !== o && o,
                    u = t.includeGroups,
                    c = void 0 !== u && u,
                    s = v.get(e);
                  null != s &&
                    s.addParent(n, {
                      propagate: i,
                      stopPropagation: a,
                      includeGroups: c,
                    });
                }
                function E(t) {
                  return e(n, t);
                }
                function w() {
                  return e(n.newSibling(), r);
                }
                var T = {
                  startTiming: g,
                  measureTime: p,
                  measureHookTime: h,
                  checkpoint: s,
                  timeSince: f,
                  timeBetween: l,
                  setMetric: c,
                  getMetrics: m,
                  fork: b,
                  join: y,
                  newMetrics: w,
                  renameWith: E,
                  toJSON: function () {
                    return m();
                  },
                };
                return v.set(T, n), T;
              })(i([]));
            };
          }
          function f(e, n, t) {
            return function () {
              n && n();
              try {
                return e.apply(this, arguments);
              } finally {
                t && t();
              }
            };
          }
          function l(e, n) {
            var t = e(),
              r = !1;
            function i() {
              r || (n(e() - t), (r = !0));
            }
            return (
              (i.stopBefore = function (e) {
                return f(e, i);
              }),
              (i.stopAfter = function (e) {
                return f(e, null, i);
              }),
              i
            );
          }
          function g(e) {
            return {
              metrics: {},
              timestamps: {},
              groups: {},
              addParent: function (n, t) {
                e.push([n, t]);
              },
              newSibling: function () {
                return g(e.slice());
              },
              dfWalk: function () {
                var n,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  i = t.visit,
                  a = t.follow,
                  u =
                    void 0 === a
                      ? function () {
                          return !0;
                        }
                      : a,
                  c = t.visited,
                  s = void 0 === c ? new Set() : c,
                  d = t.inEdge;
                if (!s.has(this)) {
                  if ((s.add(this), null != (n = i(d, this)))) return n;
                  var f,
                    l = o(e);
                  try {
                    for (l.s(); !(f = l.n()).done; ) {
                      var g = (0, r.Z)(f.value, 2),
                        v = g[0],
                        p = g[1];
                      if (
                        u(d, p) &&
                        null !=
                          (n = v.dfWalk({
                            visit: i,
                            follow: u,
                            visited: s,
                            inEdge: p,
                          }))
                      )
                        return n;
                    }
                  } catch (e) {
                    l.e(e);
                  } finally {
                    l.f();
                  }
                }
              },
            };
          }
          var v = (function () {
              var e = function () {},
                n = function () {
                  return {};
                },
                t = { forEach: e },
                r = function () {
                  return null;
                };
              (r.stopBefore = function (e) {
                return e;
              }),
                (r.stopAfter = function (e) {
                  return e;
                });
              var i = Object.defineProperties(
                {
                  dfWalk: e,
                  newSibling: function () {
                    return i;
                  },
                  addParent: e,
                },
                Object.fromEntries(
                  ["metrics", "timestamps", "groups"].map(function (e) {
                    return [e, { get: n }];
                  })
                )
              );
              return d({
                now: function () {
                  return 0;
                },
                mkNode: function () {
                  return i;
                },
                mkRenamer: function () {
                  return function () {
                    return t;
                  };
                },
                mkTimer: function () {
                  return r;
                },
                nodes: { get: e, set: e },
              })();
            })(),
            p = !0;
          function h(e) {
            return (p && e) || v;
          }
          i.vc.getConfig(u, function (e) {
            p = !!e[u];
          });
          var m,
            b =
              ((m = d()),
              function () {
                return p ? m() : v;
              });
          function y(e, n) {
            return function (t, r) {
              return function (i) {
                for (
                  var o = arguments.length,
                    a = new Array(o > 1 ? o - 1 : 0),
                    u = 1;
                  u < o;
                  u++
                )
                  a[u - 1] = arguments[u];
                var c = this;
                return h(n.apply(c, a)).measureHookTime(e + t, i, function (e) {
                  return r.call.apply(r, [c, e].concat(a));
                });
              };
            };
          }
          var E = y("requestBids.", function (e) {
              return e.metrics;
            }),
            w = y("addBidResponse.", function (e, n) {
              return n.metrics;
            });
        },
        68792: function (e, n, t) {
          t.d(n, {
            P: function () {
              return h;
            },
            Z: function () {
              return v;
            },
          });
          var r = t(70885),
            i = t(15671),
            o = t(43144),
            a = t(86033),
            u = t(13092);
          function c(e, n, t) {
            !(function (e, n) {
              if (n.has(e))
                throw new TypeError(
                  "Cannot initialize the same private elements twice on an object"
                );
            })(e, n),
              n.set(e, t);
          }
          function s(e, n, t) {
            return (
              (function (e, n) {
                if (e !== n)
                  throw new TypeError(
                    "Private static access of wrong provenance"
                  );
              })(e, n),
              t
            );
          }
          var d = 0,
            f = 1,
            l = new WeakMap(),
            g = new WeakMap(),
            v = (function () {
              function e(n) {
                if (
                  ((0, i.Z)(this, e),
                  c(this, l, { writable: !0, value: void 0 }),
                  c(this, g, { writable: !0, value: void 0 }),
                  "function" != typeof n)
                )
                  throw new Error("resolver not a function");
                var t = [],
                  o = [],
                  a = [d, f].map(function (e) {
                    return function (n) {
                      if (
                        e === d &&
                        "function" == typeof (null == n ? void 0 : n.then)
                      )
                        n.then(v, p);
                      else if (!t.length)
                        for (t.push(e, n); o.length; ) o.shift()();
                    };
                  }),
                  s = (0, r.Z)(a, 2),
                  v = s[0],
                  p = s[1];
                try {
                  n(v, p);
                } catch (e) {
                  p(e);
                }
                (0, u.Z)(this, l, t), (0, u.Z)(this, g, o);
              }
              return (
                (0, o.Z)(
                  e,
                  [
                    {
                      key: "then",
                      value: function (e, n) {
                        var t = this,
                          i = (0, a.Z)(this, l);
                        return new this.constructor(function (o, u) {
                          var c = function () {
                            var t = i[1],
                              a = i[0] === d ? [e, o] : [n, u],
                              c = (0, r.Z)(a, 2),
                              s = c[0],
                              f = c[1];
                            if ("function" == typeof s) {
                              try {
                                t = s(t);
                              } catch (e) {
                                return void u(e);
                              }
                              f = o;
                            }
                            f(t);
                          };
                          i.length ? c() : (0, a.Z)(t, g).push(c);
                        });
                      },
                    },
                    {
                      key: "catch",
                      value: function (e) {
                        return this.then(null, e);
                      },
                    },
                    {
                      key: "finally",
                      value: function (e) {
                        var n,
                          t = this;
                        return this.then(
                          function (t) {
                            return (n = t), e();
                          },
                          function (r) {
                            return (n = t.constructor.reject(r)), e();
                          }
                        ).then(function () {
                          return n;
                        });
                      },
                    },
                  ],
                  [
                    {
                      key: "timeout",
                      value: function () {
                        var n =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0;
                        return new e(function (e) {
                          0 === n ? e() : setTimeout(e, n);
                        });
                      },
                    },
                    {
                      key: "race",
                      value: function (n) {
                        var t = this;
                        return new this(function (r, i) {
                          s(t, e, p).call(t, n, function (e, n) {
                            return e ? r(n) : i(n);
                          });
                        });
                      },
                    },
                    {
                      key: "all",
                      value: function (n) {
                        var t = this;
                        return new this(function (r, i) {
                          var o = [];
                          s(t, e, p).call(
                            t,
                            n,
                            function (e, n, t) {
                              return e ? (o[t] = n) : i(n);
                            },
                            function () {
                              return r(o);
                            }
                          );
                        });
                      },
                    },
                    {
                      key: "allSettled",
                      value: function (n) {
                        var t = this;
                        return new this(function (r) {
                          var i = [];
                          s(t, e, p).call(
                            t,
                            n,
                            function (e, n, t) {
                              return (i[t] = e
                                ? { status: "fulfilled", value: n }
                                : { status: "rejected", reason: n });
                            },
                            function () {
                              return r(i);
                            }
                          );
                        });
                      },
                    },
                    {
                      key: "resolve",
                      value: function (e) {
                        return new this(function (n) {
                          return n(e);
                        });
                      },
                    },
                    {
                      key: "reject",
                      value: function (e) {
                        return new this(function (n, t) {
                          return t(e);
                        });
                      },
                    },
                  ]
                ),
                e
              );
            })();
          function p(e, n, t) {
            var r = this,
              i = e.length;
            function o() {
              n.apply(this, arguments), --i <= 0 && t && t();
            }
            0 === e.length && t
              ? t()
              : e.forEach(function (e, n) {
                  return r.resolve(e).then(
                    function (e) {
                      return o(!0, e, n);
                    },
                    function (e) {
                      return o(!1, e, n);
                    }
                  );
                });
          }
          function h() {
            var e,
              n,
              t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = t.promiseFactory,
              i =
                void 0 === r
                  ? function (e) {
                      return new v(e);
                    }
                  : r;
            function o(e) {
              return function (n) {
                return e(n);
              };
            }
            return {
              promise: i(function (t, r) {
                (e = t), (n = r);
              }),
              resolve: o(e),
              reject: o(n),
            };
          }
        },
        31136: function (e, n, t) {
          function r(e, n) {
            return e === n ? 0 : e < n ? -1 : 1;
          }
          function i() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : function (e) {
                    return e;
                  };
            return function (n, t) {
              return r(e(n), e(t));
            };
          }
          function o() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : r;
            return function (n, t) {
              return -e(n, t) || 0;
            };
          }
          function a() {
            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
              n[t] = arguments[t];
            return function (e, t) {
              for (var r = 0, i = n; r < i.length; r++) {
                var o = (0, i[r])(e, t);
                if (0 !== o) return o;
              }
              return 0;
            };
          }
          function u() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : r;
            return function (n, t) {
              return e(t, n) < 0 ? t : n;
            };
          }
          function c() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : r;
            return u(o(e));
          }
          t.d(n, {
            K$: function () {
              return l;
            },
            LT: function () {
              return u;
            },
            ZH: function () {
              return f;
            },
            gW: function () {
              return c;
            },
            xI: function () {
              return i;
            },
          });
          var s = i(function (e) {
              return e.cpm;
            }),
            d = i(function (e) {
              return e.responseTimestamp;
            }),
            f = c(
              a(
                s,
                o(
                  i(function (e) {
                    return e.timeToRespond;
                  })
                )
              )
            ),
            l = c(a(s, o(d)));
          c(a(s, d));
        },
        10613: function (e, n, t) {
          if (
            (t.d(n, {
              Z: function () {
                return s;
              },
            }),
            25602 == t.j)
          )
            var r = t(4942);
          if (25602 == t.j) var i = t(70885);
          if (25602 == t.j) var o = t(68792);
          if (25602 == t.j) var a = t(64358);
          function u(e, n) {
            var t =
              ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
            if (!t) {
              if (
                Array.isArray(e) ||
                (t = (function (e, n) {
                  if (!e) return;
                  if ("string" == typeof e) return c(e, n);
                  var t = Object.prototype.toString.call(e).slice(8, -1);
                  "Object" === t && e.constructor && (t = e.constructor.name);
                  if ("Map" === t || "Set" === t) return Array.from(e);
                  if (
                    "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  )
                    return c(e, n);
                })(e)) ||
                (n && e && "number" == typeof e.length)
              ) {
                t && (e = t);
                var r = 0,
                  i = function () {};
                return {
                  s: i,
                  n: function () {
                    return r >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[r++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: i,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var o,
              a = !0,
              u = !1;
            return {
              s: function () {
                t = t.call(e);
              },
              n: function () {
                var e = t.next();
                return (a = e.done), e;
              },
              e: function (e) {
                (u = !0), (o = e);
              },
              f: function () {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (u) throw o;
                }
              },
            };
          }
          function c(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
            return r;
          }
          function s() {
            var e,
              n,
              t,
              c =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              s = c.startTime,
              d = void 0 === s ? a.timestamp : s,
              f = c.ttl,
              l =
                void 0 === f
                  ? function () {
                      return null;
                    }
                  : f,
              g = c.monotonic,
              v = void 0 !== g && g,
              p = c.slack,
              h = void 0 === p ? 5e3 : p,
              m = new Map(),
              b = [],
              y = [],
              E = v
                ? function (e) {
                    return y.push(e);
                  }
                : function (e) {
                    return y.splice(
                      (0, a.binarySearch)(y, e, function (e) {
                        return e.expiry;
                      }),
                      0,
                      e
                    );
                  };
            function w() {
              if ((t && clearTimeout(t), y.length > 0)) {
                var e = (0, a.timestamp)();
                (n = Math.max(e, y[0].expiry + h)),
                  (t = setTimeout(function () {
                    for (
                      var e = (0, a.timestamp)(),
                        n = 0,
                        r = function () {
                          var t = o[i];
                          if (t.expiry > e) return "break";
                          b.forEach(function (e) {
                            try {
                              e(t.item);
                            } catch (e) {
                              (0, a.logError)(e);
                            }
                          }),
                            m.delete(t.item),
                            n++;
                        },
                        i = 0,
                        o = y;
                      i < o.length;
                      i++
                    ) {
                      if ("break" === r()) break;
                    }
                    y.splice(0, n), (t = null), w();
                  }, n - e));
              } else t = null;
            }
            function T(e) {
              var r,
                a = {},
                u = I;
              var c = Object.entries({ start: d, delta: l }).map(function (c) {
                  var s,
                    d = (0, i.Z)(c, 2),
                    f = d[0],
                    l = d[1];
                  return function () {
                    var i = (s = {});
                    o.Z.resolve(l(e)).then(function (e) {
                      i === s &&
                        ((a[f] = e),
                        u === I &&
                          null != a.start &&
                          null != a.delta &&
                          ((r = a.start + a.delta),
                          E(v),
                          (null == t || n > r + h) && w()));
                    });
                  };
                }),
                s = (0, i.Z)(c, 2),
                f = s[0],
                g = s[1],
                v = {
                  item: e,
                  refresh: g,
                  get expiry() {
                    return r;
                  },
                };
              return f(), g(), v;
            }
            var I = {};
            return (
              (e = {}),
              (0, r.Z)(e, Symbol.iterator, function () {
                return m.keys();
              }),
              (0, r.Z)(e, "add", function (e) {
                !m.has(e) && m.set(e, T(e));
              }),
              (0, r.Z)(e, "clear", function () {
                (y.length = 0), w(), m.clear(), (I = {});
              }),
              (0, r.Z)(e, "toArray", function () {
                return Array.from(m.keys());
              }),
              (0, r.Z)(e, "refresh", function () {
                (y.length = 0), w();
                var e,
                  n = u(m.values());
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    e.value.refresh();
                  }
                } catch (e) {
                  n.e(e);
                } finally {
                  n.f();
                }
              }),
              (0, r.Z)(e, "onExpiry", function (e) {
                return (
                  b.push(e),
                  function () {
                    var n = b.indexOf(e);
                    n >= 0 && b.splice(n, 1);
                  }
                );
              }),
              e
            );
          }
        },
        90154: function (e, n, t) {
          if (
            (t.d(n, {
              Dn: function () {
                return f;
              },
              LD: function () {
                return s;
              },
              cx: function () {
                return d;
              },
              gZ: function () {
                return c;
              },
              hD: function () {
                return l;
              },
            }),
            25602 == t.j)
          )
            var r = t(20265);
          var i = t(64358),
            o = t(3193),
            a = t(92797);
          if (25602 == t.j) var u = t(78653);
          var c = "outstream",
            s = "instream";
          function d(e) {
            var n,
              t =
                null == e || null === (n = e.mediaTypes) || void 0 === n
                  ? void 0
                  : n.video;
            null != t &&
              null == t.plcmt &&
              (t.context === c || [2, 3, 4].includes(t.placement)
                ? (t.plcmt = 4)
                : t.context !== c &&
                  [2, 6].includes(t.playbackmethod) &&
                  (t.plcmt = 2));
          }
          function f(e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              t = n.index,
              i = void 0 === t ? u.K.index : t,
              o = (0, r.Z)(i.getMediaTypes(e), "video"),
              a = o && (0, r.Z)(o, "context"),
              c = o && (0, r.Z)(o, "useCacheKey"),
              s = i.getAdUnit(e);
            return l(e, s, o, a, c);
          }
          var l = (0, a.z3)(
            "sync",
            function (e, n, t, r, a) {
              return t && (a || r !== c)
                ? o.vc.getConfig("cache.url") || !e.vastXml || e.vastUrl
                  ? !(!e.vastUrl && !e.vastXml)
                  : ((0, i.logError)(
                      '\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '
                    ),
                    !1)
                : !(r === c && !a) ||
                    !!(e.renderer || (n && n.renderer) || t.renderer);
            },
            "checkVideoBidSetup"
          );
        },
        79885: function (e, n, t) {
          if (
            (t.d(n, {
              h: function () {
                return s;
              },
              z: function () {
                return d;
              },
            }),
            25602 == t.j)
          )
            var r = t(48928);
          if (25602 == t.j) var i = t(3193);
          if (25602 == t.j) var o = t(78653);
          function a(e, n) {
            var t = (n = n && (Array.isArray(n) ? n : [n]))
              ? n
                  .map(function (e) {
                    return "<Impression><![CDATA[".concat(
                      e,
                      "]]></Impression>"
                    );
                  })
                  .join("")
              : "";
            return '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['
              .concat(e, "]]></VASTAdTagURI>\n        ")
              .concat(
                t,
                "\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>"
              );
          }
          function u(e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              t = n.index,
              r = void 0 === t ? o.K.index : t,
              u = e.vastXml ? e.vastXml : a(e.vastUrl, e.vastImpUrl),
              c = r.getAuction(e),
              s = Number(e.ttl) + 15,
              d = { type: "xml", value: u, ttlseconds: s };
            return (
              i.vc.getConfig("cache.vasttrack") &&
                ((d.bidder = e.bidder),
                (d.bidid = e.requestId),
                (d.aid = e.auctionId)),
              null != c && (d.timestamp = c.getAuctionStart()),
              "string" == typeof e.customCacheKey &&
                "" !== e.customCacheKey &&
                (d.key = e.customCacheKey),
              d
            );
          }
          function c(e) {
            return {
              success: function (n) {
                var t;
                try {
                  t = JSON.parse(n).responses;
                } catch (n) {
                  return void e(n, []);
                }
                t
                  ? e(null, t)
                  : e(
                      new Error(
                        "The cache server didn't respond with a responses property."
                      ),
                      []
                    );
              },
              error: function (n, t) {
                e(
                  new Error(
                    "Error storing video ad in the cache: "
                      .concat(n, ": ")
                      .concat(JSON.stringify(t))
                  ),
                  []
                );
              },
            };
          }
          function s(e, n) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : r.OI,
              o = { puts: e.map(u) },
              a = t(i.vc.getConfig("cache.timeout"));
            a(i.vc.getConfig("cache.url"), c(n), JSON.stringify(o), {
              contentType: "text/plain",
              withCredentials: !0,
            });
          }
          function d(e) {
            return "".concat(i.vc.getConfig("cache.url"), "?uuid=").concat(e);
          }
        },
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [44877],
      {
        55741: function (t, r, n) {
          var e = n(74685);
          t.exports = e;
        },
        2987: function (t, r, n) {
          n(80833);
          var e = n(5379);
          t.exports = e("Array", "find");
        },
        10394: function (t, r, n) {
          var e = n(55741);
          t.exports = e;
        },
        24883: function (t, r, n) {
          var e = n(57475),
            o = n(69826),
            i = TypeError;
          t.exports = function (t) {
            if (e(t)) return t;
            throw i(o(t) + " is not a function");
          };
        },
        18479: function (t) {
          t.exports = function () {};
        },
        96059: function (t, r, n) {
          var e = n(10941),
            o = String,
            i = TypeError;
          t.exports = function (t) {
            if (e(t)) return t;
            throw i(o(t) + " is not an object");
          };
        },
        3610: function (t, r, n) {
          var e = n(86843),
            o = n(95329),
            i = n(37026),
            a = n(89678),
            u = n(10623),
            c = n(64692),
            s = o([].push),
            f = function (t) {
              var r = 1 == t,
                n = 2 == t,
                o = 3 == t,
                f = 4 == t,
                l = 6 == t,
                h = 7 == t,
                p = 5 == t || l;
              return function (d, v, y, g) {
                for (
                  var m,
                    w,
                    b = a(d),
                    x = i(b),
                    S = e(v, y),
                    E = u(x),
                    _ = 0,
                    O = g || c,
                    A = r ? O(d, E) : n || h ? O(d, 0) : void 0;
                  E > _;
                  _++
                )
                  if ((p || _ in x) && ((w = S((m = x[_]), _, b)), t))
                    if (r) A[_] = w;
                    else if (w)
                      switch (t) {
                        case 3:
                          return !0;
                        case 5:
                          return m;
                        case 6:
                          return _;
                        case 2:
                          s(A, m);
                      }
                    else
                      switch (t) {
                        case 4:
                          return !1;
                        case 7:
                          s(A, m);
                      }
                return l ? -1 : o || f ? f : A;
              };
            };
          t.exports = {
            forEach: f(0),
            map: f(1),
            filter: f(2),
            some: f(3),
            every: f(4),
            find: f(5),
            findIndex: f(6),
            filterReject: f(7),
          };
        },
        5693: function (t, r, n) {
          var e = n(1052),
            o = n(24284),
            i = n(10941),
            a = n(99813)("species"),
            u = Array;
          t.exports = function (t) {
            var r;
            return (
              e(t) &&
                ((r = t.constructor),
                ((o(r) && (r === u || e(r.prototype))) ||
                  (i(r) && null === (r = r[a]))) &&
                  (r = void 0)),
              void 0 === r ? u : r
            );
          };
        },
        64692: function (t, r, n) {
          var e = n(5693);
          t.exports = function (t, r) {
            return new (e(t))(0 === r ? 0 : r);
          };
        },
        82532: function (t, r, n) {
          var e = n(24163),
            o = e({}.toString),
            i = e("".slice);
          t.exports = function (t) {
            return i(o(t), 8, -1);
          };
        },
        9697: function (t, r, n) {
          var e = n(22885),
            o = n(57475),
            i = n(82532),
            a = n(99813)("toStringTag"),
            u = Object,
            c =
              "Arguments" ==
              i(
                (function () {
                  return arguments;
                })()
              );
          t.exports = e
            ? i
            : function (t) {
                var r, n, e;
                return void 0 === t
                  ? "Undefined"
                  : null === t
                  ? "Null"
                  : "string" ==
                    typeof (n = (function (t, r) {
                      try {
                        return t[r];
                      } catch (t) {}
                    })((r = u(t)), a))
                  ? n
                  : c
                  ? i(r)
                  : "Object" == (e = i(r)) && o(r.callee)
                  ? "Arguments"
                  : e;
              };
        },
        32029: function (t, r, n) {
          var e = n(55746),
            o = n(65988),
            i = n(31887);
          t.exports = e
            ? function (t, r, n) {
                return o.f(t, r, i(1, n));
              }
            : function (t, r, n) {
                return (t[r] = n), t;
              };
        },
        31887: function (t) {
          t.exports = function (t, r) {
            return {
              enumerable: !(1 & t),
              configurable: !(2 & t),
              writable: !(4 & t),
              value: r,
            };
          };
        },
        75609: function (t, r, n) {
          var e = n(21899),
            o = Object.defineProperty;
          t.exports = function (t, r) {
            try {
              o(e, t, { value: r, configurable: !0, writable: !0 });
            } catch (n) {
              e[t] = r;
            }
            return r;
          };
        },
        55746: function (t, r, n) {
          var e = n(95981);
          t.exports = !e(function () {
            return (
              7 !=
              Object.defineProperty({}, 1, {
                get: function () {
                  return 7;
                },
              })[1]
            );
          });
        },
        76616: function (t) {
          var r = "object" == typeof document && document.all,
            n = void 0 === r && void 0 !== r;
          t.exports = { all: r, IS_HTMLDDA: n };
        },
        61333: function (t, r, n) {
          var e = n(21899),
            o = n(10941),
            i = e.document,
            a = o(i) && o(i.createElement);
          t.exports = function (t) {
            return a ? i.createElement(t) : {};
          };
        },
        2861: function (t, r, n) {
          var e = n(626);
          t.exports = e("navigator", "userAgent") || "";
        },
        53385: function (t, r, n) {
          var e,
            o,
            i = n(21899),
            a = n(2861),
            u = i.process,
            c = i.Deno,
            s = (u && u.versions) || (c && c.version),
            f = s && s.v8;
          f && (o = (e = f.split("."))[0] > 0 && e[0] < 4 ? 1 : +(e[0] + e[1])),
            !o &&
              a &&
              (!(e = a.match(/Edge\/(\d+)/)) || e[1] >= 74) &&
              (e = a.match(/Chrome\/(\d+)/)) &&
              (o = +e[1]),
            (t.exports = o);
        },
        5379: function (t, r, n) {
          var e = n(626);
          t.exports = e;
        },
        76887: function (t, r, n) {
          var e = n(21899),
            o = n(79730),
            i = n(95329),
            a = n(57475),
            u = n(49677).f,
            c = n(37252),
            s = n(54058),
            f = n(86843),
            l = n(32029),
            h = n(90953),
            p = function (t) {
              var r = function (n, e, i) {
                if (this instanceof r) {
                  switch (arguments.length) {
                    case 0:
                      return new t();
                    case 1:
                      return new t(n);
                    case 2:
                      return new t(n, e);
                  }
                  return new t(n, e, i);
                }
                return o(t, this, arguments);
              };
              return (r.prototype = t.prototype), r;
            };
          t.exports = function (t, r) {
            var n,
              o,
              d,
              v,
              y,
              g,
              m,
              w,
              b = t.target,
              x = t.global,
              S = t.stat,
              E = t.proto,
              _ = x ? e : S ? e[b] : (e[b] || {}).prototype,
              O = x ? s : s[b] || l(s, b, {})[b],
              A = O.prototype;
            for (d in r)
              (n =
                !c(x ? d : b + (S ? "." : "#") + d, t.forced) && _ && h(_, d)),
                (y = O[d]),
                n && (g = t.dontCallGetSet ? (w = u(_, d)) && w.value : _[d]),
                (v = n && g ? g : r[d]),
                (n && typeof y == typeof v) ||
                  ((m =
                    t.bind && n
                      ? f(v, e)
                      : t.wrap && n
                      ? p(v)
                      : E && a(v)
                      ? i(v)
                      : v),
                  (t.sham || (v && v.sham) || (y && y.sham)) &&
                    l(m, "sham", !0),
                  l(O, d, m),
                  E &&
                    (h(s, (o = b + "Prototype")) || l(s, o, {}),
                    l(s[o], d, v),
                    t.real && A && !A[d] && l(A, d, v)));
          };
        },
        95981: function (t) {
          t.exports = function (t) {
            try {
              return !!t();
            } catch (t) {
              return !0;
            }
          };
        },
        79730: function (t, r, n) {
          var e = n(18285),
            o = Function.prototype,
            i = o.apply,
            a = o.call;
          t.exports =
            ("object" == typeof Reflect && Reflect.apply) ||
            (e
              ? a.bind(i)
              : function () {
                  return a.apply(i, arguments);
                });
        },
        86843: function (t, r, n) {
          var e = n(95329),
            o = n(24883),
            i = n(18285),
            a = e(e.bind);
          t.exports = function (t, r) {
            return (
              o(t),
              void 0 === r
                ? t
                : i
                ? a(t, r)
                : function () {
                    return t.apply(r, arguments);
                  }
            );
          };
        },
        18285: function (t, r, n) {
          var e = n(95981);
          t.exports = !e(function () {
            var t = function () {}.bind();
            return "function" != typeof t || t.hasOwnProperty("prototype");
          });
        },
        78834: function (t, r, n) {
          var e = n(18285),
            o = Function.prototype.call;
          t.exports = e
            ? o.bind(o)
            : function () {
                return o.apply(o, arguments);
              };
        },
        24163: function (t, r, n) {
          var e = n(18285),
            o = Function.prototype,
            i = o.call,
            a = e && o.bind.bind(i, i);
          t.exports = e
            ? a
            : function (t) {
                return function () {
                  return i.apply(t, arguments);
                };
              };
        },
        95329: function (t, r, n) {
          var e = n(82532),
            o = n(24163);
          t.exports = function (t) {
            if ("Function" === e(t)) return o(t);
          };
        },
        626: function (t, r, n) {
          var e = n(54058),
            o = n(21899),
            i = n(57475),
            a = function (t) {
              return i(t) ? t : void 0;
            };
          t.exports = function (t, r) {
            return arguments.length < 2
              ? a(e[t]) || a(o[t])
              : (e[t] && e[t][r]) || (o[t] && o[t][r]);
          };
        },
        14229: function (t, r, n) {
          var e = n(24883),
            o = n(82119);
          t.exports = function (t, r) {
            var n = t[r];
            return o(n) ? void 0 : e(n);
          };
        },
        21899: function (t, r, n) {
          var e = function (t) {
            return t && t.Math == Math && t;
          };
          t.exports =
            e("object" == typeof globalThis && globalThis) ||
            e("object" == typeof window && window) ||
            e("object" == typeof self && self) ||
            e("object" == typeof n.g && n.g) ||
            (function () {
              return this;
            })() ||
            Function("return this")();
        },
        90953: function (t, r, n) {
          var e = n(95329),
            o = n(89678),
            i = e({}.hasOwnProperty);
          t.exports =
            Object.hasOwn ||
            function (t, r) {
              return i(o(t), r);
            };
        },
        2840: function (t, r, n) {
          var e = n(55746),
            o = n(95981),
            i = n(61333);
          t.exports =
            !e &&
            !o(function () {
              return (
                7 !=
                Object.defineProperty(i("div"), "a", {
                  get: function () {
                    return 7;
                  },
                }).a
              );
            });
        },
        37026: function (t, r, n) {
          var e = n(95329),
            o = n(95981),
            i = n(82532),
            a = Object,
            u = e("".split);
          t.exports = o(function () {
            return !a("z").propertyIsEnumerable(0);
          })
            ? function (t) {
                return "String" == i(t) ? u(t, "") : a(t);
              }
            : a;
        },
        81302: function (t, r, n) {
          var e = n(95329),
            o = n(57475),
            i = n(63030),
            a = e(Function.toString);
          o(i.inspectSource) ||
            (i.inspectSource = function (t) {
              return a(t);
            }),
            (t.exports = i.inspectSource);
        },
        1052: function (t, r, n) {
          var e = n(82532);
          t.exports =
            Array.isArray ||
            function (t) {
              return "Array" == e(t);
            };
        },
        57475: function (t, r, n) {
          var e = n(76616),
            o = e.all;
          t.exports = e.IS_HTMLDDA
            ? function (t) {
                return "function" == typeof t || t === o;
              }
            : function (t) {
                return "function" == typeof t;
              };
        },
        24284: function (t, r, n) {
          var e = n(95329),
            o = n(95981),
            i = n(57475),
            a = n(9697),
            u = n(626),
            c = n(81302),
            s = function () {},
            f = [],
            l = u("Reflect", "construct"),
            h = /^\s*(?:class|function)\b/,
            p = e(h.exec),
            d = !h.exec(s),
            v = function (t) {
              if (!i(t)) return !1;
              try {
                return l(s, f, t), !0;
              } catch (t) {
                return !1;
              }
            },
            y = function (t) {
              if (!i(t)) return !1;
              switch (a(t)) {
                case "AsyncFunction":
                case "GeneratorFunction":
                case "AsyncGeneratorFunction":
                  return !1;
              }
              try {
                return d || !!p(h, c(t));
              } catch (t) {
                return !0;
              }
            };
          (y.sham = !0),
            (t.exports =
              !l ||
              o(function () {
                var t;
                return (
                  v(v.call) ||
                  !v(Object) ||
                  !v(function () {
                    t = !0;
                  }) ||
                  t
                );
              })
                ? y
                : v);
        },
        37252: function (t, r, n) {
          var e = n(95981),
            o = n(57475),
            i = /#|\.prototype\./,
            a = function (t, r) {
              var n = c[u(t)];
              return n == f || (n != s && (o(r) ? e(r) : !!r));
            },
            u = (a.normalize = function (t) {
              return String(t).replace(i, ".").toLowerCase();
            }),
            c = (a.data = {}),
            s = (a.NATIVE = "N"),
            f = (a.POLYFILL = "P");
          t.exports = a;
        },
        82119: function (t) {
          t.exports = function (t) {
            return null == t;
          };
        },
        10941: function (t, r, n) {
          var e = n(57475),
            o = n(76616),
            i = o.all;
          t.exports = o.IS_HTMLDDA
            ? function (t) {
                return "object" == typeof t ? null !== t : e(t) || t === i;
              }
            : function (t) {
                return "object" == typeof t ? null !== t : e(t);
              };
        },
        82529: function (t) {
          t.exports = !0;
        },
        56664: function (t, r, n) {
          var e = n(626),
            o = n(57475),
            i = n(7046),
            a = n(32302),
            u = Object;
          t.exports = a
            ? function (t) {
                return "symbol" == typeof t;
              }
            : function (t) {
                var r = e("Symbol");
                return o(r) && i(r.prototype, u(t));
              };
        },
        10623: function (t, r, n) {
          var e = n(43057);
          t.exports = function (t) {
            return e(t.length);
          };
        },
        35331: function (t) {
          var r = Math.ceil,
            n = Math.floor;
          t.exports =
            Math.trunc ||
            function (t) {
              var e = +t;
              return (e > 0 ? n : r)(e);
            };
        },
        65988: function (t, r, n) {
          var e = n(55746),
            o = n(2840),
            i = n(83937),
            a = n(96059),
            u = n(83894),
            c = TypeError,
            s = Object.defineProperty,
            f = Object.getOwnPropertyDescriptor,
            l = "enumerable",
            h = "configurable",
            p = "writable";
          r.f = e
            ? i
              ? function (t, r, n) {
                  if (
                    (a(t),
                    (r = u(r)),
                    a(n),
                    "function" == typeof t &&
                      "prototype" === r &&
                      "value" in n &&
                      p in n &&
                      !n.writable)
                  ) {
                    var e = f(t, r);
                    e &&
                      e.writable &&
                      ((t[r] = n.value),
                      (n = {
                        configurable: h in n ? n.configurable : e.configurable,
                        enumerable: l in n ? n.enumerable : e.enumerable,
                        writable: !1,
                      }));
                  }
                  return s(t, r, n);
                }
              : s
            : function (t, r, n) {
                if ((a(t), (r = u(r)), a(n), o))
                  try {
                    return s(t, r, n);
                  } catch (t) {}
                if ("get" in n || "set" in n)
                  throw c("Accessors not supported");
                return "value" in n && (t[r] = n.value), t;
              };
        },
        49677: function (t, r, n) {
          var e = n(55746),
            o = n(78834),
            i = n(36760),
            a = n(31887),
            u = n(74529),
            c = n(83894),
            s = n(90953),
            f = n(2840),
            l = Object.getOwnPropertyDescriptor;
          r.f = e
            ? l
            : function (t, r) {
                if (((t = u(t)), (r = c(r)), f))
                  try {
                    return l(t, r);
                  } catch (t) {}
                if (s(t, r)) return a(!o(i.f, t, r), t[r]);
              };
        },
        7046: function (t, r, n) {
          var e = n(95329);
          t.exports = e({}.isPrototypeOf);
        },
        36760: function (t, r) {
          var n = {}.propertyIsEnumerable,
            e = Object.getOwnPropertyDescriptor,
            o = e && !n.call({ 1: 2 }, 1);
          r.f = o
            ? function (t) {
                var r = e(this, t);
                return !!r && r.enumerable;
              }
            : n;
        },
        39811: function (t, r, n) {
          var e = n(78834),
            o = n(57475),
            i = n(10941),
            a = TypeError;
          t.exports = function (t, r) {
            var n, u;
            if ("string" === r && o((n = t.toString)) && !i((u = e(n, t))))
              return u;
            if (o((n = t.valueOf)) && !i((u = e(n, t)))) return u;
            if ("string" !== r && o((n = t.toString)) && !i((u = e(n, t))))
              return u;
            throw a("Can't convert object to primitive value");
          };
        },
        54058: function (t) {
          t.exports = {};
        },
        48219: function (t, r, n) {
          var e = n(82119),
            o = TypeError;
          t.exports = function (t) {
            if (e(t)) throw o("Can't call method on " + t);
            return t;
          };
        },
        63030: function (t, r, n) {
          var e = n(21899),
            o = n(75609),
            i = "__core-js_shared__",
            a = e[i] || o(i, {});
          t.exports = a;
        },
        68726: function (t, r, n) {
          var e = n(82529),
            o = n(63030);
          (t.exports = function (t, r) {
            return o[t] || (o[t] = void 0 !== r ? r : {});
          })("versions", []).push({
            version: "3.26.0",
            mode: e ? "pure" : "global",
            copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
            license: "https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE",
            source: "https://github.com/zloirock/core-js",
          });
        },
        63405: function (t, r, n) {
          var e = n(53385),
            o = n(95981);
          t.exports =
            !!Object.getOwnPropertySymbols &&
            !o(function () {
              var t = Symbol();
              return (
                !String(t) ||
                !(Object(t) instanceof Symbol) ||
                (!Symbol.sham && e && e < 41)
              );
            });
        },
        74529: function (t, r, n) {
          var e = n(37026),
            o = n(48219);
          t.exports = function (t) {
            return e(o(t));
          };
        },
        62435: function (t, r, n) {
          var e = n(35331);
          t.exports = function (t) {
            var r = +t;
            return r != r || 0 === r ? 0 : e(r);
          };
        },
        43057: function (t, r, n) {
          var e = n(62435),
            o = Math.min;
          t.exports = function (t) {
            return t > 0 ? o(e(t), 9007199254740991) : 0;
          };
        },
        89678: function (t, r, n) {
          var e = n(48219),
            o = Object;
          t.exports = function (t) {
            return o(e(t));
          };
        },
        46935: function (t, r, n) {
          var e = n(78834),
            o = n(10941),
            i = n(56664),
            a = n(14229),
            u = n(39811),
            c = n(99813),
            s = TypeError,
            f = c("toPrimitive");
          t.exports = function (t, r) {
            if (!o(t) || i(t)) return t;
            var n,
              c = a(t, f);
            if (c) {
              if (
                (void 0 === r && (r = "default"),
                (n = e(c, t, r)),
                !o(n) || i(n))
              )
                return n;
              throw s("Can't convert object to primitive value");
            }
            return void 0 === r && (r = "number"), u(t, r);
          };
        },
        83894: function (t, r, n) {
          var e = n(46935),
            o = n(56664);
          t.exports = function (t) {
            var r = e(t, "string");
            return o(r) ? r : r + "";
          };
        },
        22885: function (t, r, n) {
          var e = {};
          (e[n(99813)("toStringTag")] = "z"),
            (t.exports = "[object z]" === String(e));
        },
        69826: function (t) {
          var r = String;
          t.exports = function (t) {
            try {
              return r(t);
            } catch (t) {
              return "Object";
            }
          };
        },
        99418: function (t, r, n) {
          var e = n(95329),
            o = 0,
            i = Math.random(),
            a = e((1).toString);
          t.exports = function (t) {
            return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++o + i, 36);
          };
        },
        32302: function (t, r, n) {
          var e = n(63405);
          t.exports = e && !Symbol.sham && "symbol" == typeof Symbol.iterator;
        },
        83937: function (t, r, n) {
          var e = n(55746),
            o = n(95981);
          t.exports =
            e &&
            o(function () {
              return (
                42 !=
                Object.defineProperty(function () {}, "prototype", {
                  value: 42,
                  writable: !1,
                }).prototype
              );
            });
        },
        99813: function (t, r, n) {
          var e = n(21899),
            o = n(68726),
            i = n(90953),
            a = n(99418),
            u = n(63405),
            c = n(32302),
            s = o("wks"),
            f = e.Symbol,
            l = f && f.for,
            h = c ? f : (f && f.withoutSetter) || a;
          t.exports = function (t) {
            if (!i(s, t) || (!u && "string" != typeof s[t])) {
              var r = "Symbol." + t;
              u && i(f, t) ? (s[t] = f[t]) : (s[t] = c && l ? l(r) : h(r));
            }
            return s[t];
          };
        },
        80833: function (t, r, n) {
          var e = n(76887),
            o = n(3610).find,
            i = n(18479),
            a = "find",
            u = !0;
          a in [] &&
            Array(1).find(function () {
              u = !1;
            }),
            e(
              { target: "Array", proto: !0, forced: u },
              {
                find: function (t) {
                  return o(
                    this,
                    t,
                    arguments.length > 1 ? arguments[1] : void 0
                  );
                },
              }
            ),
            i(a);
        },
        74685: function (t, r, n) {
          var e = n(2987);
          t.exports = e;
        },
        44611: function (t, r) {
          var n;
          Object.defineProperty(r, "__esModule", { value: !0 });
          var e = (function () {
            function t(t) {
              null !== t && this.fromHexString(t);
            }
            return (
              (t.prototype.toHexString = function () {
                if (this.s < 0) return "-" + this.negate().toHexString();
                var t,
                  r = !1,
                  n = "",
                  e = this.t,
                  o = this.DB - ((e * this.DB) % 4);
                if (e-- > 0)
                  for (
                    o < this.DB &&
                    (t = this[e] >> o) > 0 &&
                    ((r = !0), (n = f(t)));
                    e >= 0;

                  )
                    o < 4
                      ? ((t = (this[e] & ((1 << o) - 1)) << (4 - o)),
                        (t |= this[--e] >> (o += this.DB - 4)))
                      : ((t = (this[e] >> (o -= 4)) & 15),
                        o <= 0 && ((o += this.DB), --e)),
                      t > 0 && (r = !0),
                      r && (n += f(t));
                return r ? n : "0";
              }),
              (t.prototype.fromHexString = function (r) {
                if (null !== r) {
                  (this.t = 0), (this.s = 0);
                  for (var n = r.length, e = !1, o = 0; --n >= 0; ) {
                    var i = s(r, n);
                    i < 0
                      ? "-" == r.charAt(n) && (e = !0)
                      : ((e = !1),
                        0 == o
                          ? (this[this.t++] = i)
                          : o + 4 > this.DB
                          ? ((this[this.t - 1] |=
                              (i & ((1 << (this.DB - o)) - 1)) << o),
                            (this[this.t++] = i >> (this.DB - o)))
                          : (this[this.t - 1] |= i << o),
                        (o += 4) >= this.DB && (o -= this.DB));
                  }
                  0, this.clamp(), e && t.ZERO.subTo(this, this);
                }
              }),
              (t.prototype.negate = function () {
                var r = o();
                return t.ZERO.subTo(this, r), r;
              }),
              (t.prototype.abs = function () {
                return this.s < 0 ? this.negate() : this;
              }),
              (t.prototype.mod = function (r) {
                var n = o();
                return (
                  this.abs().divRemTo(r, null, n),
                  this.s < 0 && n.compareTo(t.ZERO) > 0 && r.subTo(n, n),
                  n
                );
              }),
              (t.prototype.copyTo = function (t) {
                for (var r = this.t - 1; r >= 0; --r) t[r] = this[r];
                (t.t = this.t), (t.s = this.s);
              }),
              (t.prototype.lShiftTo = function (t, r) {
                for (
                  var n = t % this.DB,
                    e = this.DB - n,
                    o = (1 << e) - 1,
                    i = Math.floor(t / this.DB),
                    a = (this.s << n) & this.DM,
                    u = this.t - 1;
                  u >= 0;
                  --u
                )
                  (r[u + i + 1] = (this[u] >> e) | a), (a = (this[u] & o) << n);
                for (u = i - 1; u >= 0; --u) r[u] = 0;
                (r[i] = a), (r.t = this.t + i + 1), (r.s = this.s), r.clamp();
              }),
              (t.prototype.invDigit = function () {
                if (this.t < 1) return 0;
                var t = this[0];
                if (0 == (1 & t)) return 0;
                var r = 3 & t;
                return (r =
                  ((r =
                    ((r =
                      ((r = (r * (2 - (15 & t) * r)) & 15) *
                        (2 - (255 & t) * r)) &
                      255) *
                      (2 - (((65535 & t) * r) & 65535))) &
                    65535) *
                    (2 - ((t * r) % this.DV))) %
                  this.DV) > 0
                  ? this.DV - r
                  : -r;
              }),
              (t.prototype.dlShiftTo = function (t, r) {
                var n;
                for (n = this.t - 1; n >= 0; --n) r[n + t] = this[n];
                for (n = t - 1; n >= 0; --n) r[n] = 0;
                (r.t = this.t + t), (r.s = this.s);
              }),
              (t.prototype.squareTo = function (t) {
                for (var r = this.abs(), n = (t.t = 2 * r.t); --n >= 0; )
                  t[n] = 0;
                for (n = 0; n < r.t - 1; ++n) {
                  var e = r.am(n, r[n], t, 2 * n, 0, 1);
                  (t[n + r.t] += r.am(
                    n + 1,
                    2 * r[n],
                    t,
                    2 * n + 1,
                    e,
                    r.t - n - 1
                  )) >= r.DV && ((t[n + r.t] -= r.DV), (t[n + r.t + 1] = 1));
                }
                t.t > 0 && (t[t.t - 1] += r.am(n, r[n], t, 2 * n, 0, 1)),
                  (t.s = 0),
                  t.clamp();
              }),
              (t.prototype.multiplyTo = function (r, n) {
                var e = this.abs(),
                  o = r.abs(),
                  i = e.t;
                for (n.t = i + o.t; --i >= 0; ) n[i] = 0;
                for (i = 0; i < o.t; ++i)
                  n[i + e.t] = e.am(0, o[i], n, i, 0, e.t);
                (n.s = 0), n.clamp(), this.s != r.s && t.ZERO.subTo(n, n);
              }),
              (t.prototype.divRemTo = function (r, n, e) {
                var a = r.abs();
                if (!(a.t <= 0)) {
                  var u = this.abs();
                  if (u.t < a.t)
                    return (
                      null != n && n.fromHexString("0"),
                      void (null != e && this.copyTo(e))
                    );
                  null == e && (e = o());
                  var c = o(),
                    s = this.s,
                    f = r.s,
                    l = this.DB - i(a[a.t - 1]);
                  l > 0
                    ? (a.lShiftTo(l, c), u.lShiftTo(l, e))
                    : (a.copyTo(c), u.copyTo(e));
                  var h = c.t,
                    p = c[h - 1];
                  if (0 != p) {
                    var d =
                        p * (1 << this.F1) + (h > 1 ? c[h - 2] >> this.F2 : 0),
                      v = this.FV / d,
                      y = (1 << this.F1) / d,
                      g = 1 << this.F2,
                      m = e.t,
                      w = m - h,
                      b = null == n ? o() : n;
                    for (
                      c.dlShiftTo(w, b),
                        e.compareTo(b) >= 0 && ((e[e.t++] = 1), e.subTo(b, e)),
                        t.ONE.dlShiftTo(h, b),
                        b.subTo(c, c);
                      c.t < h;

                    )
                      c[c.t++] = 0;
                    for (; --w >= 0; ) {
                      var x =
                        e[--m] == p
                          ? this.DM
                          : Math.floor(e[m] * v + (e[m - 1] + g) * y);
                      if ((e[m] += c.am(0, x, e, w, 0, h)) < x)
                        for (c.dlShiftTo(w, b), e.subTo(b, e); e[m] < --x; )
                          e.subTo(b, e);
                    }
                    null != n &&
                      (e.drShiftTo(h, n), s != f && t.ZERO.subTo(n, n)),
                      (e.t = h),
                      e.clamp(),
                      l > 0 && e.rShiftTo(l, e),
                      s < 0 && t.ZERO.subTo(e, e);
                  }
                }
              }),
              (t.prototype.rShiftTo = function (t, r) {
                r.s = this.s;
                var n = Math.floor(t / this.DB);
                if (n >= this.t) r.t = 0;
                else {
                  var e = t % this.DB,
                    o = this.DB - e,
                    i = (1 << e) - 1;
                  r[0] = this[n] >> e;
                  for (var a = n + 1; a < this.t; ++a)
                    (r[a - n - 1] |= (this[a] & i) << o),
                      (r[a - n] = this[a] >> e);
                  e > 0 && (r[this.t - n - 1] |= (this.s & i) << o),
                    (r.t = this.t - n),
                    r.clamp();
                }
              }),
              (t.prototype.drShiftTo = function (t, r) {
                for (var n = t; n < this.t; ++n) r[n - t] = this[n];
                (r.t = Math.max(this.t - t, 0)), (r.s = this.s);
              }),
              (t.prototype.subTo = function (t, r) {
                for (var n = 0, e = 0, o = Math.min(t.t, this.t); n < o; )
                  (e += this[n] - t[n]),
                    (r[n++] = e & this.DM),
                    (e >>= this.DB);
                if (t.t < this.t) {
                  for (e -= t.s; n < this.t; )
                    (e += this[n]), (r[n++] = e & this.DM), (e >>= this.DB);
                  e += this.s;
                } else {
                  for (e += this.s; n < t.t; )
                    (e -= t[n]), (r[n++] = e & this.DM), (e >>= this.DB);
                  e -= t.s;
                }
                (r.s = e < 0 ? -1 : 0),
                  e < -1 ? (r[n++] = this.DV + e) : e > 0 && (r[n++] = e),
                  (r.t = n),
                  r.clamp();
              }),
              (t.prototype.clamp = function () {
                for (
                  var t = this.s & this.DM;
                  this.t > 0 && this[this.t - 1] == t;

                )
                  --this.t;
              }),
              (t.prototype.modPowInt = function (t, r) {
                var n;
                return (
                  (n = t < 256 || r.isEven() ? new l(r) : new h(r)),
                  this.exp(t, n)
                );
              }),
              (t.prototype.exp = function (r, n) {
                if (r > 4294967295 || r < 1) return t.ONE;
                var e = o(),
                  a = o(),
                  u = n.convert(this),
                  c = i(r) - 1;
                for (u.copyTo(e); --c >= 0; )
                  if ((n.sqrTo(e, a), (r & (1 << c)) > 0)) n.mulTo(a, u, e);
                  else {
                    var s = e;
                    (e = a), (a = s);
                  }
                return n.revert(e);
              }),
              (t.prototype.isEven = function () {
                return 0 == (this.t > 0 ? 1 & this[0] : this.s);
              }),
              (t.prototype.compareTo = function (t) {
                var r = this.s - t.s;
                if (0 != r) return r;
                var n = this.t;
                if (0 != (r = n - t.t)) return this.s < 0 ? -r : r;
                for (; --n >= 0; ) if (0 != (r = this[n] - t[n])) return r;
                return 0;
              }),
              (t.prototype.am1 = function (t, r, n, e, o, i) {
                for (; --i >= 0; ) {
                  var a = r * this[t++] + n[e] + o;
                  (o = Math.floor(a / 67108864)), (n[e++] = 67108863 & a);
                }
                return o;
              }),
              (t.prototype.am2 = function (t, r, n, e, o, i) {
                for (var a = 32767 & r, u = r >> 15; --i >= 0; ) {
                  var c = 32767 & this[t],
                    s = this[t++] >> 15,
                    f = u * c + s * a;
                  (o =
                    ((c =
                      a * c + ((32767 & f) << 15) + n[e] + (1073741823 & o)) >>>
                      30) +
                    (f >>> 15) +
                    u * s +
                    (o >>> 30)),
                    (n[e++] = 1073741823 & c);
                }
                return o;
              }),
              (t.prototype.am3 = function (t, r, n, e, o, i) {
                for (var a = 16383 & r, u = r >> 14; --i >= 0; ) {
                  var c = 16383 & this[t],
                    s = this[t++] >> 14,
                    f = u * c + s * a;
                  (o =
                    ((c = a * c + ((16383 & f) << 14) + n[e] + o) >> 28) +
                    (f >> 14) +
                    u * s),
                    (n[e++] = 268435455 & c);
                }
                return o;
              }),
              t
            );
          })();
          function o() {
            return new e(null);
          }
          function i(t) {
            var r,
              n = 1;
            return (
              0 != (r = t >>> 16) && ((t = r), (n += 16)),
              0 != (r = t >> 8) && ((t = r), (n += 8)),
              0 != (r = t >> 4) && ((t = r), (n += 4)),
              0 != (r = t >> 2) && ((t = r), (n += 2)),
              0 != (r = t >> 1) && ((t = r), (n += 1)),
              n
            );
          }
          (r.BigInteger = e), (r.nbi = o), (r.nbits = i);
          var a,
            u,
            c = [];
          for (a = "0".charCodeAt(0), u = 0; u <= 9; ++u) c[a++] = u;
          for (a = "a".charCodeAt(0), u = 10; u < 36; ++u) c[a++] = u;
          for (a = "A".charCodeAt(0), u = 10; u < 36; ++u) c[a++] = u;
          function s(t, r) {
            var n = c[t.charCodeAt(r)];
            return null == n ? -1 : n;
          }
          r.intAt = s;
          function f(t) {
            return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t);
          }
          r.int2char = f;
          (r.b64toHex = function (t) {
            var r,
              n = "",
              e = 0,
              o = 0;
            for (r = 0; r < t.length && "=" != t.charAt(r); ++r) {
              var i =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(
                  t.charAt(r)
                );
              i < 0 ||
                (0 == e
                  ? ((n += f(i >> 2)), (o = 3 & i), (e = 1))
                  : 1 == e
                  ? ((n += f((o << 2) | (i >> 4))), (o = 15 & i), (e = 2))
                  : 2 == e
                  ? ((n += f(o)), (n += f(i >> 2)), (o = 3 & i), (e = 3))
                  : ((n += f((o << 2) | (i >> 4))), (n += f(15 & i)), (e = 0)));
            }
            return 1 == e && (n += f(o << 2)), n;
          }),
            (r.removeExtraSymbols = function (t) {
              return t
                .replace(/^1f+00/, "")
                .replace("3031300d060960864801650304020105000420", "");
            });
          var l = (function () {
              function t(t) {
                this.m = t;
              }
              return (
                (t.prototype.convert = function (t) {
                  return t.s < 0 || t.compareTo(this.m) >= 0
                    ? t.mod(this.m)
                    : t;
                }),
                (t.prototype.revert = function (t) {
                  return t;
                }),
                (t.prototype.reduce = function (t) {
                  t.divRemTo(this.m, null, t);
                }),
                (t.prototype.mulTo = function (t, r, n) {
                  t.multiplyTo(r, n), this.reduce(n);
                }),
                (t.prototype.sqrTo = function (t, r) {
                  t.squareTo(r), this.reduce(r);
                }),
                t
              );
            })(),
            h = (function () {
              function t(t) {
                (this.m = t),
                  (this.mp = t.invDigit()),
                  (this.mpl = 32767 & this.mp),
                  (this.mph = this.mp >> 15),
                  (this.um = (1 << (t.DB - 15)) - 1),
                  (this.mt2 = 2 * t.t);
              }
              return (
                (t.prototype.convert = function (t) {
                  var r = o();
                  return (
                    t.abs().dlShiftTo(this.m.t, r),
                    r.divRemTo(this.m, null, r),
                    t.s < 0 && r.compareTo(e.ZERO) > 0 && this.m.subTo(r, r),
                    r
                  );
                }),
                (t.prototype.revert = function (t) {
                  var r = o();
                  return t.copyTo(r), this.reduce(r), r;
                }),
                (t.prototype.reduce = function (t) {
                  for (; t.t <= this.mt2; ) t[t.t++] = 0;
                  for (var r = 0; r < this.m.t; ++r) {
                    var n = 32767 & t[r],
                      e =
                        (n * this.mpl +
                          (((n * this.mph + (t[r] >> 15) * this.mpl) &
                            this.um) <<
                            15)) &
                        t.DM;
                    for (
                      t[(n = r + this.m.t)] += this.m.am(
                        0,
                        e,
                        t,
                        r,
                        0,
                        this.m.t
                      );
                      t[n] >= t.DV;

                    )
                      (t[n] -= t.DV), t[++n]++;
                  }
                  t.clamp(),
                    t.drShiftTo(this.m.t, t),
                    t.compareTo(this.m) >= 0 && t.subTo(this.m, t);
                }),
                (t.prototype.mulTo = function (t, r, n) {
                  t.multiplyTo(r, n), this.reduce(n);
                }),
                (t.prototype.sqrTo = function (t, r) {
                  t.squareTo(r), this.reduce(r);
                }),
                t
              );
            })();
          function p(t) {
            var r = o();
            return r.fromHexString(t.toString()), r;
          }
          (r.nbv = p),
            (e.ZERO = p(0)),
            (e.ONE = p(1)),
            "Microsoft Internet Explorer" == navigator.appName
              ? ((e.prototype.am = e.prototype.am2), (n = 30))
              : "Netscape" != navigator.appName
              ? ((e.prototype.am = e.prototype.am1), (n = 26))
              : ((e.prototype.am = e.prototype.am3), (n = 28)),
            (e.prototype.DB = n),
            (e.prototype.DM = (1 << n) - 1),
            (e.prototype.DV = 1 << n);
          (e.prototype.FV = Math.pow(2, 52)),
            (e.prototype.F1 = 52 - n),
            (e.prototype.F2 = 2 * n - 52);
        },
        94950: function (t, r) {
          Object.defineProperty(r, "__esModule", { value: !0 });
          var n = (function () {
            function t() {}
            return (
              (t.hash = function (r) {
                r = t.utf8Encode(r || "");
                for (
                  var n = [
                      1116352408, 1899447441, 3049323471, 3921009573, 961987163,
                      1508970993, 2453635748, 2870763221, 3624381080, 310598401,
                      607225278, 1426881987, 1925078388, 2162078206, 2614888103,
                      3248222580, 3835390401, 4022224774, 264347078, 604807628,
                      770255983, 1249150122, 1555081692, 1996064986, 2554220882,
                      2821834349, 2952996808, 3210313671, 3336571891,
                      3584528711, 113926993, 338241895, 666307205, 773529912,
                      1294757372, 1396182291, 1695183700, 1986661051,
                      2177026350, 2456956037, 2730485921, 2820302411,
                      3259730800, 3345764771, 3516065817, 3600352804,
                      4094571909, 275423344, 430227734, 506948616, 659060556,
                      883997877, 958139571, 1322822218, 1537002063, 1747873779,
                      1955562222, 2024104815, 2227730452, 2361852424,
                      2428436474, 2756734187, 3204031479, 3329325298,
                    ],
                    e = [
                      1779033703, 3144134277, 1013904242, 2773480762,
                      1359893119, 2600822924, 528734635, 1541459225,
                    ],
                    o = (r += String.fromCharCode(128)).length / 4 + 2,
                    i = Math.ceil(o / 16),
                    a = new Array(i),
                    u = 0;
                  u < i;
                  u++
                ) {
                  a[u] = new Array(16);
                  for (var c = 0; c < 16; c++)
                    a[u][c] =
                      (r.charCodeAt(64 * u + 4 * c) << 24) |
                      (r.charCodeAt(64 * u + 4 * c + 1) << 16) |
                      (r.charCodeAt(64 * u + 4 * c + 2) << 8) |
                      (r.charCodeAt(64 * u + 4 * c + 3) << 0);
                }
                var s = (8 * (r.length - 1)) / Math.pow(2, 32),
                  f = (8 * (r.length - 1)) >>> 0;
                (a[i - 1][14] = Math.floor(s)), (a[i - 1][15] = f);
                for (u = 0; u < i; u++) {
                  for (var l = new Array(64), h = 0; h < 16; h++)
                    l[h] = a[u][h];
                  for (h = 16; h < 64; h++)
                    l[h] =
                      (t.q1(l[h - 2]) +
                        l[h - 7] +
                        t.q0(l[h - 15]) +
                        l[h - 16]) >>>
                      0;
                  var p = e[0],
                    d = e[1],
                    v = e[2],
                    y = e[3],
                    g = e[4],
                    m = e[5],
                    w = e[6],
                    b = e[7];
                  for (h = 0; h < 64; h++) {
                    var x = b + t.z1(g) + t.Ch(g, m, w) + n[h] + l[h],
                      S = t.z0(p) + t.Maj(p, d, v);
                    (b = w),
                      (w = m),
                      (m = g),
                      (g = (y + x) >>> 0),
                      (y = v),
                      (v = d),
                      (d = p),
                      (p = (x + S) >>> 0);
                  }
                  (e[0] = (e[0] + p) >>> 0),
                    (e[1] = (e[1] + d) >>> 0),
                    (e[2] = (e[2] + v) >>> 0),
                    (e[3] = (e[3] + y) >>> 0),
                    (e[4] = (e[4] + g) >>> 0),
                    (e[5] = (e[5] + m) >>> 0),
                    (e[6] = (e[6] + w) >>> 0),
                    (e[7] = (e[7] + b) >>> 0);
                }
                var E = new Array(e.length);
                for (b = 0; b < e.length; b++)
                  E[b] = ("00000000" + e[b].toString(16)).slice(-8);
                return E.join("");
              }),
              (t.utf8Encode = function (t) {
                try {
                  return new TextEncoder().encode(t).reduce(function (t, r) {
                    return t + String.fromCharCode(r);
                  }, "");
                } catch (r) {
                  return unescape(encodeURIComponent(t));
                }
              }),
              (t.ROTR = function (t, r) {
                return (r >>> t) | (r << (32 - t));
              }),
              (t.z0 = function (r) {
                return t.ROTR(2, r) ^ t.ROTR(13, r) ^ t.ROTR(22, r);
              }),
              (t.z1 = function (r) {
                return t.ROTR(6, r) ^ t.ROTR(11, r) ^ t.ROTR(25, r);
              }),
              (t.q0 = function (r) {
                return t.ROTR(7, r) ^ t.ROTR(18, r) ^ (r >>> 3);
              }),
              (t.q1 = function (r) {
                return t.ROTR(17, r) ^ t.ROTR(19, r) ^ (r >>> 10);
              }),
              (t.Ch = function (t, r, n) {
                return (t & r) ^ (~t & n);
              }),
              (t.Maj = function (t, r, n) {
                return (t & r) ^ (t & n) ^ (r & n);
              }),
              t
            );
          })();
          r.Sha256 = n;
        },
        1582: function (t, r, n) {
          var e = n(44611),
            o = n(94950);
          r.T = function (t, r, n, i) {
            var a = new e.BigInteger(e.b64toHex(r)),
              u = new e.BigInteger(e.b64toHex(n)),
              c = a.modPowInt(i, u);
            return e.removeExtraSymbols(c.toHexString()) === o.Sha256.hash(t);
          };
        },
        78249: function (t, r, n) {
          var e;
          t.exports =
            ((e =
              e ||
              (function (t, r) {
                var e;
                if (
                  ("undefined" != typeof window &&
                    window.crypto &&
                    (e = window.crypto),
                  "undefined" != typeof self &&
                    self.crypto &&
                    (e = self.crypto),
                  "undefined" != typeof globalThis &&
                    globalThis.crypto &&
                    (e = globalThis.crypto),
                  !e &&
                    "undefined" != typeof window &&
                    window.msCrypto &&
                    (e = window.msCrypto),
                  !e && void 0 !== n.g && n.g.crypto && (e = n.g.crypto),
                  !e)
                )
                  try {
                    e = n(42480);
                  } catch (t) {}
                var o = function () {
                    if (e) {
                      if ("function" == typeof e.getRandomValues)
                        try {
                          return e.getRandomValues(new Uint32Array(1))[0];
                        } catch (t) {}
                      if ("function" == typeof e.randomBytes)
                        try {
                          return e.randomBytes(4).readInt32LE();
                        } catch (t) {}
                    }
                    throw new Error(
                      "Native crypto module could not be used to get secure random number."
                    );
                  },
                  i =
                    Object.create ||
                    (function () {
                      function t() {}
                      return function (r) {
                        var n;
                        return (
                          (t.prototype = r),
                          (n = new t()),
                          (t.prototype = null),
                          n
                        );
                      };
                    })(),
                  a = {},
                  u = (a.lib = {}),
                  c = (u.Base = {
                    extend: function (t) {
                      var r = i(this);
                      return (
                        t && r.mixIn(t),
                        (r.hasOwnProperty("init") && this.init !== r.init) ||
                          (r.init = function () {
                            r.$super.init.apply(this, arguments);
                          }),
                        (r.init.prototype = r),
                        (r.$super = this),
                        r
                      );
                    },
                    create: function () {
                      var t = this.extend();
                      return t.init.apply(t, arguments), t;
                    },
                    init: function () {},
                    mixIn: function (t) {
                      for (var r in t) t.hasOwnProperty(r) && (this[r] = t[r]);
                      t.hasOwnProperty("toString") &&
                        (this.toString = t.toString);
                    },
                    clone: function () {
                      return this.init.prototype.extend(this);
                    },
                  }),
                  s = (u.WordArray = c.extend({
                    init: function (t, n) {
                      (t = this.words = t || []),
                        (this.sigBytes = n != r ? n : 4 * t.length);
                    },
                    toString: function (t) {
                      return (t || l).stringify(this);
                    },
                    concat: function (t) {
                      var r = this.words,
                        n = t.words,
                        e = this.sigBytes,
                        o = t.sigBytes;
                      if ((this.clamp(), e % 4))
                        for (var i = 0; i < o; i++) {
                          var a = (n[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                          r[(e + i) >>> 2] |= a << (24 - ((e + i) % 4) * 8);
                        }
                      else
                        for (var u = 0; u < o; u += 4)
                          r[(e + u) >>> 2] = n[u >>> 2];
                      return (this.sigBytes += o), this;
                    },
                    clamp: function () {
                      var r = this.words,
                        n = this.sigBytes;
                      (r[n >>> 2] &= 4294967295 << (32 - (n % 4) * 8)),
                        (r.length = t.ceil(n / 4));
                    },
                    clone: function () {
                      var t = c.clone.call(this);
                      return (t.words = this.words.slice(0)), t;
                    },
                    random: function (t) {
                      for (var r = [], n = 0; n < t; n += 4) r.push(o());
                      return new s.init(r, t);
                    },
                  })),
                  f = (a.enc = {}),
                  l = (f.Hex = {
                    stringify: function (t) {
                      for (
                        var r = t.words, n = t.sigBytes, e = [], o = 0;
                        o < n;
                        o++
                      ) {
                        var i = (r[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
                        e.push((i >>> 4).toString(16)),
                          e.push((15 & i).toString(16));
                      }
                      return e.join("");
                    },
                    parse: function (t) {
                      for (var r = t.length, n = [], e = 0; e < r; e += 2)
                        n[e >>> 3] |=
                          parseInt(t.substr(e, 2), 16) << (24 - (e % 8) * 4);
                      return new s.init(n, r / 2);
                    },
                  }),
                  h = (f.Latin1 = {
                    stringify: function (t) {
                      for (
                        var r = t.words, n = t.sigBytes, e = [], o = 0;
                        o < n;
                        o++
                      ) {
                        var i = (r[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
                        e.push(String.fromCharCode(i));
                      }
                      return e.join("");
                    },
                    parse: function (t) {
                      for (var r = t.length, n = [], e = 0; e < r; e++)
                        n[e >>> 2] |=
                          (255 & t.charCodeAt(e)) << (24 - (e % 4) * 8);
                      return new s.init(n, r);
                    },
                  }),
                  p = (f.Utf8 = {
                    stringify: function (t) {
                      try {
                        return decodeURIComponent(escape(h.stringify(t)));
                      } catch (t) {
                        throw new Error("Malformed UTF-8 data");
                      }
                    },
                    parse: function (t) {
                      return h.parse(unescape(encodeURIComponent(t)));
                    },
                  }),
                  d = (u.BufferedBlockAlgorithm = c.extend({
                    reset: function () {
                      (this._data = new s.init()), (this._nDataBytes = 0);
                    },
                    _append: function (t) {
                      "string" == typeof t && (t = p.parse(t)),
                        this._data.concat(t),
                        (this._nDataBytes += t.sigBytes);
                    },
                    _process: function (r) {
                      var n,
                        e = this._data,
                        o = e.words,
                        i = e.sigBytes,
                        a = this.blockSize,
                        u = i / (4 * a),
                        c =
                          (u = r
                            ? t.ceil(u)
                            : t.max((0 | u) - this._minBufferSize, 0)) * a,
                        f = t.min(4 * c, i);
                      if (c) {
                        for (var l = 0; l < c; l += a)
                          this._doProcessBlock(o, l);
                        (n = o.splice(0, c)), (e.sigBytes -= f);
                      }
                      return new s.init(n, f);
                    },
                    clone: function () {
                      var t = c.clone.call(this);
                      return (t._data = this._data.clone()), t;
                    },
                    _minBufferSize: 0,
                  })),
                  v =
                    ((u.Hasher = d.extend({
                      cfg: c.extend(),
                      init: function (t) {
                        (this.cfg = this.cfg.extend(t)), this.reset();
                      },
                      reset: function () {
                        d.reset.call(this), this._doReset();
                      },
                      update: function (t) {
                        return this._append(t), this._process(), this;
                      },
                      finalize: function (t) {
                        return t && this._append(t), this._doFinalize();
                      },
                      blockSize: 16,
                      _createHelper: function (t) {
                        return function (r, n) {
                          return new t.init(n).finalize(r);
                        };
                      },
                      _createHmacHelper: function (t) {
                        return function (r, n) {
                          return new v.HMAC.init(t, n).finalize(r);
                        };
                      },
                    })),
                    (a.algo = {}));
                return a;
              })(Math)),
            e);
        },
        98269: function (t, r, n) {
          var e;
          t.exports =
            ((e = n(78249)),
            (function () {
              var t = e,
                r = t.lib.WordArray;
              function n(t, n, e) {
                for (var o = [], i = 0, a = 0; a < n; a++)
                  if (a % 4) {
                    var u =
                      (e[t.charCodeAt(a - 1)] << ((a % 4) * 2)) |
                      (e[t.charCodeAt(a)] >>> (6 - (a % 4) * 2));
                    (o[i >>> 2] |= u << (24 - (i % 4) * 8)), i++;
                  }
                return r.create(o, i);
              }
              t.enc.Base64 = {
                stringify: function (t) {
                  var r = t.words,
                    n = t.sigBytes,
                    e = this._map;
                  t.clamp();
                  for (var o = [], i = 0; i < n; i += 3)
                    for (
                      var a =
                          (((r[i >>> 2] >>> (24 - (i % 4) * 8)) & 255) << 16) |
                          (((r[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) &
                            255) <<
                            8) |
                          ((r[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) &
                            255),
                        u = 0;
                      u < 4 && i + 0.75 * u < n;
                      u++
                    )
                      o.push(e.charAt((a >>> (6 * (3 - u))) & 63));
                  var c = e.charAt(64);
                  if (c) for (; o.length % 4; ) o.push(c);
                  return o.join("");
                },
                parse: function (t) {
                  var r = t.length,
                    e = this._map,
                    o = this._reverseMap;
                  if (!o) {
                    o = this._reverseMap = [];
                    for (var i = 0; i < e.length; i++) o[e.charCodeAt(i)] = i;
                  }
                  var a = e.charAt(64);
                  if (a) {
                    var u = t.indexOf(a);
                    -1 !== u && (r = u);
                  }
                  return n(t, r, o);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              };
            })(),
            e.enc.Base64);
        },
        55743: function (t, r, n) {
          var e;
          t.exports = ((e = n(78249)), e.enc.Utf8);
        },
        13418: function (t, r, n) {
          var e;
          t.exports =
            ((e = n(78249)), n(64938), n(70034), n(89824), e.HmacSHA512);
        },
        89824: function (t, r, n) {
          var e, o, i, a;
          t.exports =
            ((e = n(78249)),
            (i = (o = e).lib.Base),
            (a = o.enc.Utf8),
            void (o.algo.HMAC = i.extend({
              init: function (t, r) {
                (t = this._hasher = new t.init()),
                  "string" == typeof r && (r = a.parse(r));
                var n = t.blockSize,
                  e = 4 * n;
                r.sigBytes > e && (r = t.finalize(r)), r.clamp();
                for (
                  var o = (this._oKey = r.clone()),
                    i = (this._iKey = r.clone()),
                    u = o.words,
                    c = i.words,
                    s = 0;
                  s < n;
                  s++
                )
                  (u[s] ^= 1549556828), (c[s] ^= 909522486);
                (o.sigBytes = i.sigBytes = e), this.reset();
              },
              reset: function () {
                var t = this._hasher;
                t.reset(), t.update(this._iKey);
              },
              update: function (t) {
                return this._hasher.update(t), this;
              },
              finalize: function (t) {
                var r = this._hasher,
                  n = r.finalize(t);
                return r.reset(), r.finalize(this._oKey.clone().concat(n));
              },
            })));
        },
        68214: function (t, r, n) {
          var e;
          t.exports =
            ((e = n(78249)),
            (function (t) {
              var r = e,
                n = r.lib,
                o = n.WordArray,
                i = n.Hasher,
                a = r.algo,
                u = [];
              !(function () {
                for (var r = 0; r < 64; r++)
                  u[r] = (4294967296 * t.abs(t.sin(r + 1))) | 0;
              })();
              var c = (a.MD5 = i.extend({
                _doReset: function () {
                  this._hash = new o.init([
                    1732584193, 4023233417, 2562383102, 271733878,
                  ]);
                },
                _doProcessBlock: function (t, r) {
                  for (var n = 0; n < 16; n++) {
                    var e = r + n,
                      o = t[e];
                    t[e] =
                      (16711935 & ((o << 8) | (o >>> 24))) |
                      (4278255360 & ((o << 24) | (o >>> 8)));
                  }
                  var i = this._hash.words,
                    a = t[r + 0],
                    c = t[r + 1],
                    p = t[r + 2],
                    d = t[r + 3],
                    v = t[r + 4],
                    y = t[r + 5],
                    g = t[r + 6],
                    m = t[r + 7],
                    w = t[r + 8],
                    b = t[r + 9],
                    x = t[r + 10],
                    S = t[r + 11],
                    E = t[r + 12],
                    _ = t[r + 13],
                    O = t[r + 14],
                    A = t[r + 15],
                    j = i[0],
                    C = i[1],
                    R = i[2],
                    T = i[3];
                  (j = s(j, C, R, T, a, 7, u[0])),
                    (T = s(T, j, C, R, c, 12, u[1])),
                    (R = s(R, T, j, C, p, 17, u[2])),
                    (C = s(C, R, T, j, d, 22, u[3])),
                    (j = s(j, C, R, T, v, 7, u[4])),
                    (T = s(T, j, C, R, y, 12, u[5])),
                    (R = s(R, T, j, C, g, 17, u[6])),
                    (C = s(C, R, T, j, m, 22, u[7])),
                    (j = s(j, C, R, T, w, 7, u[8])),
                    (T = s(T, j, C, R, b, 12, u[9])),
                    (R = s(R, T, j, C, x, 17, u[10])),
                    (C = s(C, R, T, j, S, 22, u[11])),
                    (j = s(j, C, R, T, E, 7, u[12])),
                    (T = s(T, j, C, R, _, 12, u[13])),
                    (R = s(R, T, j, C, O, 17, u[14])),
                    (j = f(
                      j,
                      (C = s(C, R, T, j, A, 22, u[15])),
                      R,
                      T,
                      c,
                      5,
                      u[16]
                    )),
                    (T = f(T, j, C, R, g, 9, u[17])),
                    (R = f(R, T, j, C, S, 14, u[18])),
                    (C = f(C, R, T, j, a, 20, u[19])),
                    (j = f(j, C, R, T, y, 5, u[20])),
                    (T = f(T, j, C, R, x, 9, u[21])),
                    (R = f(R, T, j, C, A, 14, u[22])),
                    (C = f(C, R, T, j, v, 20, u[23])),
                    (j = f(j, C, R, T, b, 5, u[24])),
                    (T = f(T, j, C, R, O, 9, u[25])),
                    (R = f(R, T, j, C, d, 14, u[26])),
                    (C = f(C, R, T, j, w, 20, u[27])),
                    (j = f(j, C, R, T, _, 5, u[28])),
                    (T = f(T, j, C, R, p, 9, u[29])),
                    (R = f(R, T, j, C, m, 14, u[30])),
                    (j = l(
                      j,
                      (C = f(C, R, T, j, E, 20, u[31])),
                      R,
                      T,
                      y,
                      4,
                      u[32]
                    )),
                    (T = l(T, j, C, R, w, 11, u[33])),
                    (R = l(R, T, j, C, S, 16, u[34])),
                    (C = l(C, R, T, j, O, 23, u[35])),
                    (j = l(j, C, R, T, c, 4, u[36])),
                    (T = l(T, j, C, R, v, 11, u[37])),
                    (R = l(R, T, j, C, m, 16, u[38])),
                    (C = l(C, R, T, j, x, 23, u[39])),
                    (j = l(j, C, R, T, _, 4, u[40])),
                    (T = l(T, j, C, R, a, 11, u[41])),
                    (R = l(R, T, j, C, d, 16, u[42])),
                    (C = l(C, R, T, j, g, 23, u[43])),
                    (j = l(j, C, R, T, b, 4, u[44])),
                    (T = l(T, j, C, R, E, 11, u[45])),
                    (R = l(R, T, j, C, A, 16, u[46])),
                    (j = h(
                      j,
                      (C = l(C, R, T, j, p, 23, u[47])),
                      R,
                      T,
                      a,
                      6,
                      u[48]
                    )),
                    (T = h(T, j, C, R, m, 10, u[49])),
                    (R = h(R, T, j, C, O, 15, u[50])),
                    (C = h(C, R, T, j, y, 21, u[51])),
                    (j = h(j, C, R, T, E, 6, u[52])),
                    (T = h(T, j, C, R, d, 10, u[53])),
                    (R = h(R, T, j, C, x, 15, u[54])),
                    (C = h(C, R, T, j, c, 21, u[55])),
                    (j = h(j, C, R, T, w, 6, u[56])),
                    (T = h(T, j, C, R, A, 10, u[57])),
                    (R = h(R, T, j, C, g, 15, u[58])),
                    (C = h(C, R, T, j, _, 21, u[59])),
                    (j = h(j, C, R, T, v, 6, u[60])),
                    (T = h(T, j, C, R, S, 10, u[61])),
                    (R = h(R, T, j, C, p, 15, u[62])),
                    (C = h(C, R, T, j, b, 21, u[63])),
                    (i[0] = (i[0] + j) | 0),
                    (i[1] = (i[1] + C) | 0),
                    (i[2] = (i[2] + R) | 0),
                    (i[3] = (i[3] + T) | 0);
                },
                _doFinalize: function () {
                  var r = this._data,
                    n = r.words,
                    e = 8 * this._nDataBytes,
                    o = 8 * r.sigBytes;
                  n[o >>> 5] |= 128 << (24 - (o % 32));
                  var i = t.floor(e / 4294967296),
                    a = e;
                  (n[15 + (((o + 64) >>> 9) << 4)] =
                    (16711935 & ((i << 8) | (i >>> 24))) |
                    (4278255360 & ((i << 24) | (i >>> 8)))),
                    (n[14 + (((o + 64) >>> 9) << 4)] =
                      (16711935 & ((a << 8) | (a >>> 24))) |
                      (4278255360 & ((a << 24) | (a >>> 8)))),
                    (r.sigBytes = 4 * (n.length + 1)),
                    this._process();
                  for (var u = this._hash, c = u.words, s = 0; s < 4; s++) {
                    var f = c[s];
                    c[s] =
                      (16711935 & ((f << 8) | (f >>> 24))) |
                      (4278255360 & ((f << 24) | (f >>> 8)));
                  }
                  return u;
                },
                clone: function () {
                  var t = i.clone.call(this);
                  return (t._hash = this._hash.clone()), t;
                },
              }));
              function s(t, r, n, e, o, i, a) {
                var u = t + ((r & n) | (~r & e)) + o + a;
                return ((u << i) | (u >>> (32 - i))) + r;
              }
              function f(t, r, n, e, o, i, a) {
                var u = t + ((r & e) | (n & ~e)) + o + a;
                return ((u << i) | (u >>> (32 - i))) + r;
              }
              function l(t, r, n, e, o, i, a) {
                var u = t + (r ^ n ^ e) + o + a;
                return ((u << i) | (u >>> (32 - i))) + r;
              }
              function h(t, r, n, e, o, i, a) {
                var u = t + (n ^ (r | ~e)) + o + a;
                return ((u << i) | (u >>> (32 - i))) + r;
              }
              (r.MD5 = i._createHelper(c)),
                (r.HmacMD5 = i._createHmacHelper(c));
            })(Math),
            e.MD5);
        },
        62783: function (t, r, n) {
          var e, o, i, a, u, c, s, f;
          t.exports =
            ((f = n(78249)),
            (o = (e = f).lib),
            (i = o.WordArray),
            (a = o.Hasher),
            (u = e.algo),
            (c = []),
            (s = u.SHA1 =
              a.extend({
                _doReset: function () {
                  this._hash = new i.init([
                    1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                  ]);
                },
                _doProcessBlock: function (t, r) {
                  for (
                    var n = this._hash.words,
                      e = n[0],
                      o = n[1],
                      i = n[2],
                      a = n[3],
                      u = n[4],
                      s = 0;
                    s < 80;
                    s++
                  ) {
                    if (s < 16) c[s] = 0 | t[r + s];
                    else {
                      var f = c[s - 3] ^ c[s - 8] ^ c[s - 14] ^ c[s - 16];
                      c[s] = (f << 1) | (f >>> 31);
                    }
                    var l = ((e << 5) | (e >>> 27)) + u + c[s];
                    (l +=
                      s < 20
                        ? 1518500249 + ((o & i) | (~o & a))
                        : s < 40
                        ? 1859775393 + (o ^ i ^ a)
                        : s < 60
                        ? ((o & i) | (o & a) | (i & a)) - 1894007588
                        : (o ^ i ^ a) - 899497514),
                      (u = a),
                      (a = i),
                      (i = (o << 30) | (o >>> 2)),
                      (o = e),
                      (e = l);
                  }
                  (n[0] = (n[0] + e) | 0),
                    (n[1] = (n[1] + o) | 0),
                    (n[2] = (n[2] + i) | 0),
                    (n[3] = (n[3] + a) | 0),
                    (n[4] = (n[4] + u) | 0);
                },
                _doFinalize: function () {
                  var t = this._data,
                    r = t.words,
                    n = 8 * this._nDataBytes,
                    e = 8 * t.sigBytes;
                  return (
                    (r[e >>> 5] |= 128 << (24 - (e % 32))),
                    (r[14 + (((e + 64) >>> 9) << 4)] = Math.floor(
                      n / 4294967296
                    )),
                    (r[15 + (((e + 64) >>> 9) << 4)] = n),
                    (t.sigBytes = 4 * r.length),
                    this._process(),
                    this._hash
                  );
                },
                clone: function () {
                  var t = a.clone.call(this);
                  return (t._hash = this._hash.clone()), t;
                },
              })),
            (e.SHA1 = a._createHelper(s)),
            (e.HmacSHA1 = a._createHmacHelper(s)),
            f.SHA1);
        },
        70034: function (t, r, n) {
          var e;
          t.exports =
            ((e = n(78249)),
            n(64938),
            (function () {
              var t = e,
                r = t.lib.Hasher,
                n = t.x64,
                o = n.Word,
                i = n.WordArray,
                a = t.algo;
              function u() {
                return o.create.apply(o, arguments);
              }
              var c = [
                  u(1116352408, 3609767458),
                  u(1899447441, 602891725),
                  u(3049323471, 3964484399),
                  u(3921009573, 2173295548),
                  u(961987163, 4081628472),
                  u(1508970993, 3053834265),
                  u(2453635748, 2937671579),
                  u(2870763221, 3664609560),
                  u(3624381080, 2734883394),
                  u(310598401, 1164996542),
                  u(607225278, 1323610764),
                  u(1426881987, 3590304994),
                  u(1925078388, 4068182383),
                  u(2162078206, 991336113),
                  u(2614888103, 633803317),
                  u(3248222580, 3479774868),
                  u(3835390401, 2666613458),
                  u(4022224774, 944711139),
                  u(264347078, 2341262773),
                  u(604807628, 2007800933),
                  u(770255983, 1495990901),
                  u(1249150122, 1856431235),
                  u(1555081692, 3175218132),
                  u(1996064986, 2198950837),
                  u(2554220882, 3999719339),
                  u(2821834349, 766784016),
                  u(2952996808, 2566594879),
                  u(3210313671, 3203337956),
                  u(3336571891, 1034457026),
                  u(3584528711, 2466948901),
                  u(113926993, 3758326383),
                  u(338241895, 168717936),
                  u(666307205, 1188179964),
                  u(773529912, 1546045734),
                  u(1294757372, 1522805485),
                  u(1396182291, 2643833823),
                  u(1695183700, 2343527390),
                  u(1986661051, 1014477480),
                  u(2177026350, 1206759142),
                  u(2456956037, 344077627),
                  u(2730485921, 1290863460),
                  u(2820302411, 3158454273),
                  u(3259730800, 3505952657),
                  u(3345764771, 106217008),
                  u(3516065817, 3606008344),
                  u(3600352804, 1432725776),
                  u(4094571909, 1467031594),
                  u(275423344, 851169720),
                  u(430227734, 3100823752),
                  u(506948616, 1363258195),
                  u(659060556, 3750685593),
                  u(883997877, 3785050280),
                  u(958139571, 3318307427),
                  u(1322822218, 3812723403),
                  u(1537002063, 2003034995),
                  u(1747873779, 3602036899),
                  u(1955562222, 1575990012),
                  u(2024104815, 1125592928),
                  u(2227730452, 2716904306),
                  u(2361852424, 442776044),
                  u(2428436474, 593698344),
                  u(2756734187, 3733110249),
                  u(3204031479, 2999351573),
                  u(3329325298, 3815920427),
                  u(3391569614, 3928383900),
                  u(3515267271, 566280711),
                  u(3940187606, 3454069534),
                  u(4118630271, 4000239992),
                  u(116418474, 1914138554),
                  u(174292421, 2731055270),
                  u(289380356, 3203993006),
                  u(460393269, 320620315),
                  u(685471733, 587496836),
                  u(852142971, 1086792851),
                  u(1017036298, 365543100),
                  u(1126000580, 2618297676),
                  u(1288033470, 3409855158),
                  u(1501505948, 4234509866),
                  u(1607167915, 987167468),
                  u(1816402316, 1246189591),
                ],
                s = [];
              !(function () {
                for (var t = 0; t < 80; t++) s[t] = u();
              })();
              var f = (a.SHA512 = r.extend({
                _doReset: function () {
                  this._hash = new i.init([
                    new o.init(1779033703, 4089235720),
                    new o.init(3144134277, 2227873595),
                    new o.init(1013904242, 4271175723),
                    new o.init(2773480762, 1595750129),
                    new o.init(1359893119, 2917565137),
                    new o.init(2600822924, 725511199),
                    new o.init(528734635, 4215389547),
                    new o.init(1541459225, 327033209),
                  ]);
                },
                _doProcessBlock: function (t, r) {
                  for (
                    var n = this._hash.words,
                      e = n[0],
                      o = n[1],
                      i = n[2],
                      a = n[3],
                      u = n[4],
                      f = n[5],
                      l = n[6],
                      h = n[7],
                      p = e.high,
                      d = e.low,
                      v = o.high,
                      y = o.low,
                      g = i.high,
                      m = i.low,
                      w = a.high,
                      b = a.low,
                      x = u.high,
                      S = u.low,
                      E = f.high,
                      _ = f.low,
                      O = l.high,
                      A = l.low,
                      j = h.high,
                      C = h.low,
                      R = p,
                      T = d,
                      D = v,
                      I = y,
                      L = g,
                      k = m,
                      B = w,
                      M = b,
                      N = x,
                      P = S,
                      F = E,
                      H = _,
                      U = O,
                      Z = A,
                      V = j,
                      z = C,
                      W = 0;
                    W < 80;
                    W++
                  ) {
                    var q,
                      G,
                      Q = s[W];
                    if (W < 16)
                      (G = Q.high = 0 | t[r + 2 * W]),
                        (q = Q.low = 0 | t[r + 2 * W + 1]);
                    else {
                      var J = s[W - 15],
                        Y = J.high,
                        X = J.low,
                        K =
                          ((Y >>> 1) | (X << 31)) ^
                          ((Y >>> 8) | (X << 24)) ^
                          (Y >>> 7),
                        $ =
                          ((X >>> 1) | (Y << 31)) ^
                          ((X >>> 8) | (Y << 24)) ^
                          ((X >>> 7) | (Y << 25)),
                        tt = s[W - 2],
                        rt = tt.high,
                        nt = tt.low,
                        et =
                          ((rt >>> 19) | (nt << 13)) ^
                          ((rt << 3) | (nt >>> 29)) ^
                          (rt >>> 6),
                        ot =
                          ((nt >>> 19) | (rt << 13)) ^
                          ((nt << 3) | (rt >>> 29)) ^
                          ((nt >>> 6) | (rt << 26)),
                        it = s[W - 7],
                        at = it.high,
                        ut = it.low,
                        ct = s[W - 16],
                        st = ct.high,
                        ft = ct.low;
                      (G =
                        (G =
                          (G =
                            K + at + ((q = $ + ut) >>> 0 < $ >>> 0 ? 1 : 0)) +
                          et +
                          ((q += ot) >>> 0 < ot >>> 0 ? 1 : 0)) +
                        st +
                        ((q += ft) >>> 0 < ft >>> 0 ? 1 : 0)),
                        (Q.high = G),
                        (Q.low = q);
                    }
                    var lt,
                      ht = (N & F) ^ (~N & U),
                      pt = (P & H) ^ (~P & Z),
                      dt = (R & D) ^ (R & L) ^ (D & L),
                      vt = (T & I) ^ (T & k) ^ (I & k),
                      yt =
                        ((R >>> 28) | (T << 4)) ^
                        ((R << 30) | (T >>> 2)) ^
                        ((R << 25) | (T >>> 7)),
                      gt =
                        ((T >>> 28) | (R << 4)) ^
                        ((T << 30) | (R >>> 2)) ^
                        ((T << 25) | (R >>> 7)),
                      mt =
                        ((N >>> 14) | (P << 18)) ^
                        ((N >>> 18) | (P << 14)) ^
                        ((N << 23) | (P >>> 9)),
                      wt =
                        ((P >>> 14) | (N << 18)) ^
                        ((P >>> 18) | (N << 14)) ^
                        ((P << 23) | (N >>> 9)),
                      bt = c[W],
                      xt = bt.high,
                      St = bt.low,
                      Et = V + mt + ((lt = z + wt) >>> 0 < z >>> 0 ? 1 : 0),
                      _t = gt + vt;
                    (V = U),
                      (z = Z),
                      (U = F),
                      (Z = H),
                      (F = N),
                      (H = P),
                      (N =
                        (B +
                          (Et =
                            (Et =
                              (Et =
                                Et +
                                ht +
                                ((lt += pt) >>> 0 < pt >>> 0 ? 1 : 0)) +
                              xt +
                              ((lt += St) >>> 0 < St >>> 0 ? 1 : 0)) +
                            G +
                            ((lt += q) >>> 0 < q >>> 0 ? 1 : 0)) +
                          ((P = (M + lt) | 0) >>> 0 < M >>> 0 ? 1 : 0)) |
                        0),
                      (B = L),
                      (M = k),
                      (L = D),
                      (k = I),
                      (D = R),
                      (I = T),
                      (R =
                        (Et +
                          (yt + dt + (_t >>> 0 < gt >>> 0 ? 1 : 0)) +
                          ((T = (lt + _t) | 0) >>> 0 < lt >>> 0 ? 1 : 0)) |
                        0);
                  }
                  (d = e.low = d + T),
                    (e.high = p + R + (d >>> 0 < T >>> 0 ? 1 : 0)),
                    (y = o.low = y + I),
                    (o.high = v + D + (y >>> 0 < I >>> 0 ? 1 : 0)),
                    (m = i.low = m + k),
                    (i.high = g + L + (m >>> 0 < k >>> 0 ? 1 : 0)),
                    (b = a.low = b + M),
                    (a.high = w + B + (b >>> 0 < M >>> 0 ? 1 : 0)),
                    (S = u.low = S + P),
                    (u.high = x + N + (S >>> 0 < P >>> 0 ? 1 : 0)),
                    (_ = f.low = _ + H),
                    (f.high = E + F + (_ >>> 0 < H >>> 0 ? 1 : 0)),
                    (A = l.low = A + Z),
                    (l.high = O + U + (A >>> 0 < Z >>> 0 ? 1 : 0)),
                    (C = h.low = C + z),
                    (h.high = j + V + (C >>> 0 < z >>> 0 ? 1 : 0));
                },
                _doFinalize: function () {
                  var t = this._data,
                    r = t.words,
                    n = 8 * this._nDataBytes,
                    e = 8 * t.sigBytes;
                  return (
                    (r[e >>> 5] |= 128 << (24 - (e % 32))),
                    (r[30 + (((e + 128) >>> 10) << 5)] = Math.floor(
                      n / 4294967296
                    )),
                    (r[31 + (((e + 128) >>> 10) << 5)] = n),
                    (t.sigBytes = 4 * r.length),
                    this._process(),
                    this._hash.toX32()
                  );
                },
                clone: function () {
                  var t = r.clone.call(this);
                  return (t._hash = this._hash.clone()), t;
                },
                blockSize: 32,
              }));
              (t.SHA512 = r._createHelper(f)),
                (t.HmacSHA512 = r._createHmacHelper(f));
            })(),
            e.SHA512);
        },
        64938: function (t, r, n) {
          var e;
          t.exports =
            ((e = n(78249)),
            (function (t) {
              var r = e,
                n = r.lib,
                o = n.Base,
                i = n.WordArray,
                a = (r.x64 = {});
              (a.Word = o.extend({
                init: function (t, r) {
                  (this.high = t), (this.low = r);
                },
              })),
                (a.WordArray = o.extend({
                  init: function (r, n) {
                    (r = this.words = r || []),
                      (this.sigBytes = n != t ? n : 8 * r.length);
                  },
                  toX32: function () {
                    for (
                      var t = this.words, r = t.length, n = [], e = 0;
                      e < r;
                      e++
                    ) {
                      var o = t[e];
                      n.push(o.high), n.push(o.low);
                    }
                    return i.create(n, this.sigBytes);
                  },
                  clone: function () {
                    for (
                      var t = o.clone.call(this),
                        r = (t.words = this.words.slice(0)),
                        n = r.length,
                        e = 0;
                      e < n;
                      e++
                    )
                      r[e] = r[e].clone();
                    return t;
                  },
                }));
            })(),
            e);
        },
        20265: function (t, r, n) {
          function e(t, r, n, e, o) {
            for (r = r.split ? r.split(".") : r, e = 0; e < r.length; e++)
              t = t ? t[r[e]] : o;
            return t === o ? n : t;
          }
          n.d(r, {
            Z: function () {
              return e;
            },
          });
        },
        81432: function (t) {
          /*
           * @license MIT
           * Fun Hooks v0.9.10
           * (c) @snapwich
           */
          (a.SYNC = 1), (a.ASYNC = 2), (a.QUEUE = 4);
          var r = Object.freeze({ useProxy: !0, ready: 0 }),
            n = new WeakMap(),
            e =
              "2,1,0" ===
              [1]
                .reduce(function (t, r, n) {
                  return [t, r, n];
                }, 2)
                .toString()
                ? Array.prototype.reduce
                : function (t, r) {
                    var n,
                      e = Object(this),
                      o = e.length >>> 0,
                      i = 0;
                    if (r) n = r;
                    else {
                      for (; i < o && !(i in e); ) i++;
                      n = e[i++];
                    }
                    for (; i < o; ) i in e && (n = t(n, e[i], i, e)), i++;
                    return n;
                  };
          function o(t, r) {
            return Array.prototype.slice.call(t, r);
          }
          var i =
            Object.assign ||
            function (t) {
              return e.call(
                o(arguments, 1),
                function (t, r) {
                  return (
                    r &&
                      Object.keys(r).forEach(function (n) {
                        t[n] = r[n];
                      }),
                    t
                  );
                },
                t
              );
            };
          function a(t) {
            var u,
              c = {},
              s = [];
            function f(t, r) {
              return "function" == typeof t
                ? d.call(null, "sync", t, r)
                : "string" == typeof t && "function" == typeof r
                ? d.apply(null, arguments)
                : "object" == typeof t
                ? l.apply(null, arguments)
                : void 0;
            }
            function l(t, r, n) {
              var e = !0;
              void 0 === r && ((r = Object.getOwnPropertyNames(t)), (e = !1));
              var o = {},
                i = ["constructor"];
              do {
                (r = r.filter(function (r) {
                  return !(
                    "function" != typeof t[r] ||
                    -1 !== i.indexOf(r) ||
                    r.match(/^_/)
                  );
                })).forEach(function (r) {
                  var e = r.split(":"),
                    i = e[0],
                    a = e[1] || "sync";
                  if (!o[i]) {
                    var u = t[i];
                    o[i] = t[i] = d(a, u, n ? [n, i] : void 0);
                  }
                }),
                  (t = Object.getPrototypeOf(t));
              } while (e && t);
              return o;
            }
            function h(t) {
              var r = Array.isArray(t) ? t : t.split(".");
              return e.call(
                r,
                function (n, e, o) {
                  var i = n[e],
                    a = !1;
                  return (
                    i ||
                    (o === r.length - 1
                      ? (u ||
                          s.push(function () {
                            a ||
                              console.warn(
                                "fun-hooks: referenced '" +
                                  t +
                                  "' but it was never created"
                              );
                          }),
                        (n[e] = p(function (t) {
                          (n[e] = t), (a = !0);
                        })))
                      : (n[e] = {}))
                  );
                },
                c
              );
            }
            function p(t) {
              var r = [],
                e = [],
                o = function () {},
                a = {
                  before: function (t, n) {
                    return c.call(this, r, "before", t, n);
                  },
                  after: function (t, r) {
                    return c.call(this, e, "after", t, r);
                  },
                  getHooks: function (t) {
                    var n = r.concat(e);
                    "object" == typeof t &&
                      (n = n.filter(function (r) {
                        return Object.keys(t).every(function (n) {
                          return r[n] === t[n];
                        });
                      }));
                    try {
                      i(n, {
                        remove: function () {
                          return (
                            n.forEach(function (t) {
                              t.remove();
                            }),
                            this
                          );
                        },
                      });
                    } catch (t) {
                      console.error(
                        "error adding `remove` to array, did you modify Array.prototype?"
                      );
                    }
                    return n;
                  },
                  removeAll: function () {
                    return this.getHooks().remove();
                  },
                },
                u = {
                  install: function (n, i, a) {
                    (this.type = n), (o = a), a(r, e), t && t(i);
                  },
                };
              return n.set(a.after, u), a;
              function c(t, n, i, a) {
                var u = {
                  hook: i,
                  type: n,
                  priority: a || 10,
                  remove: function () {
                    var n = t.indexOf(u);
                    -1 !== n && (t.splice(n, 1), o(r, e));
                  },
                };
                return (
                  t.push(u),
                  t.sort(function (t, r) {
                    return r.priority - t.priority;
                  }),
                  o(r, e),
                  this
                );
              }
            }
            function d(r, e, c) {
              var f = e.after && n.get(e.after);
              if (f) {
                if (f.type !== r)
                  throw "fun-hooks: recreated hookable with different type";
                return e;
              }
              var l,
                d,
                v = c ? h(c) : p(),
                y = {
                  get: function (t, r) {
                    return v[r] || Reflect.get.apply(Reflect, arguments);
                  },
                };
              return (
                u || s.push(g),
                t.useProxy && "function" == typeof Proxy && Proxy.revocable
                  ? (d = new Proxy(e, y))
                  : ((d = function () {
                      return y.apply
                        ? y.apply(e, this, o(arguments))
                        : e.apply(this, arguments);
                    }),
                    i(d, v)),
                n.get(d.after).install(r, d, function (t, n) {
                  var e,
                    i = [];
                  t.length || n.length
                    ? (t.forEach(a),
                      (e = i.push(void 0) - 1),
                      n.forEach(a),
                      (l = function (t, n, a) {
                        var u,
                          c = 0,
                          s =
                            "async" === r &&
                            "function" == typeof a[a.length - 1] &&
                            a.pop();
                        function f(t) {
                          "sync" === r
                            ? (u = t)
                            : s && s.apply(null, arguments);
                        }
                        function l(t) {
                          if (i[c]) {
                            var e = o(arguments);
                            return (
                              (l.bail = f), e.unshift(l), i[c++].apply(n, e)
                            );
                          }
                          "sync" === r
                            ? (u = t)
                            : s && s.apply(null, arguments);
                        }
                        return (
                          (i[e] = function () {
                            var e = o(arguments, 1);
                            "async" === r && s && (delete l.bail, e.push(l));
                            var i = t.apply(n, e);
                            "sync" === r && l(i);
                          }),
                          l.apply(null, a),
                          u
                        );
                      }))
                    : (l = void 0);
                  function a(t) {
                    i.push(t.hook);
                  }
                  g();
                }),
                d
              );
              function g() {
                !u &&
                ("sync" !== r || t.ready & a.SYNC) &&
                ("async" !== r || t.ready & a.ASYNC)
                  ? "sync" !== r && t.ready & a.QUEUE
                    ? (y.apply = function () {
                        var t = arguments;
                        s.push(function () {
                          d.apply(t[1], t[2]);
                        });
                      })
                    : (y.apply = function () {
                        throw "fun-hooks: hooked function not ready";
                      })
                  : (y.apply = l);
              }
            }
            return (
              (t = i({}, r, t)).ready
                ? (f.ready = function () {
                    (u = !0),
                      (function (t) {
                        for (var r; (r = t.shift()); ) r();
                      })(s);
                  })
                : (u = !0),
              (f.get = h),
              f
            );
          }
          t.exports = a;
        },
        77079: function (t) {
          t.exports = function t(r) {
            var n = Array.isArray(r) ? [] : {};
            for (var e in r) {
              var o = r[e];
              n[e] = o && "object" == typeof o ? t(o) : o;
            }
            return n;
          };
        },
        76886: function (t, r) {
          for (var n = [], e = 0; e < 64; )
            n[e] = 0 | (4294967296 * Math.sin(++e % Math.PI));
          for (var o, i = 18, a = [], u = []; i > 1; i--)
            for (o = i; o < 320; ) a[(o += i)] = 1;
          function c(t, r) {
            return (4294967296 * Math.pow(t, 1 / r)) | 0;
          }
          for (o = 0; o < 64; )
            a[++i] || ((u[o] = c(i, 2)), (a[o++] = c(i, 3)));
          function s(t, r) {
            return (t >>> r) | (t << -r);
          }
          (r.md5 = function (t) {
            var r,
              o,
              i,
              a = [(r = 1732584193), (o = 4023233417), ~r, ~o],
              u = [],
              c = unescape(encodeURI(t)) + "",
              s = c.length;
            for (t = (--s / 4 + 2) | 15, u[--t] = 8 * s; ~s; )
              u[s >> 2] |= c.charCodeAt(s) << (8 * s--);
            for (e = c = 0; e < t; e += 16) {
              for (
                s = a;
                c < 64;
                s = [
                  (i = s[3]),
                  r +
                    (((i =
                      s[0] +
                      [
                        (r & o) | (~r & i),
                        (i & r) | (~i & o),
                        r ^ o ^ i,
                        o ^ (r | ~i),
                      ][(s = c >> 4)] +
                      n[c] +
                      ~~u[e | (15 & [c, 5 * c + 1, 3 * c + 5, 7 * c][s])]) <<
                      (s = [
                        7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15,
                        21,
                      ][4 * s + (c++ % 4)])) |
                      (i >>> -s)),
                  r,
                  o,
                ]
              )
                (r = 0 | s[1]), (o = s[2]);
              for (c = 4; c; ) a[--c] += s[c];
            }
            for (t = ""; c < 32; )
              t += ((a[c >> 3] >> (4 * (1 ^ c++))) & 15).toString(16);
            return t;
          }),
            (r.sha1 = function (t) {
              var r,
                n,
                e,
                o,
                i,
                a = [],
                u = [(n = 1732584193), (e = 4023233417), ~n, ~e, 3285377520],
                c = [],
                s = unescape(encodeURI(t)) + "",
                f = s.length;
              for (c[(t = (--f / 4 + 2) | 15)] = 8 * f; ~f; )
                c[f >> 2] |= s.charCodeAt(f) << (8 * ~f--);
              for (r = f = 0; r < t; r += 16) {
                for (
                  n = u;
                  f < 80;
                  n = [
                    n[4] +
                      (a[f] = f < 16 ? ~~c[r + f] : (2 * s) | (s < 0)) +
                      1518500249 +
                      [
                        (e & o) | (~e & i),
                        (s = 341275144 + (e ^ o ^ i)),
                        882459459 + ((e & o) | (e & i) | (o & i)),
                        s + 1535694389,
                      ][(f++ / 5) >> 2] +
                      (((s = n[0]) << 5) | (s >>> 27)),
                    s,
                    (e << 30) | (e >>> 2),
                    o,
                    i,
                  ]
                )
                  (s = a[f - 3] ^ a[f - 8] ^ a[f - 14] ^ a[f - 16]),
                    (e = n[1]),
                    (o = n[2]),
                    (i = n[3]);
                for (f = 5; f; ) u[--f] += n[f];
              }
              for (s = ""; f < 40; )
                s += ((u[f >> 3] >> (4 * (7 - f++))) & 15).toString(16);
              return s;
            }),
            (r.sha256 = function (t) {
              var r = u.slice((i = o = 0), 8),
                n = [],
                e = unescape(encodeURI(t)) + "",
                f = e.length;
              for (n[(t = (--f / 4 + 2) | 15)] = 8 * f; ~f; )
                n[f >> 2] |= e.charCodeAt(f) << (8 * ~f--);
              for (f = []; i < t; i += 16) {
                for (
                  c = r.slice();
                  o < 64;
                  c.unshift(
                    e +
                      (s((e = c[0]), 2) ^ s(e, 13) ^ s(e, 22)) +
                      ((e & c[1]) ^ (c[1] & c[2]) ^ (c[2] & e))
                  )
                )
                  c[3] += e =
                    0 |
                    ((f[o] =
                      o < 16
                        ? ~~n[o + i]
                        : (s((e = f[o - 2]), 17) ^ s(e, 19) ^ (e >>> 10)) +
                          f[o - 7] +
                          (s((e = f[o - 15]), 7) ^ s(e, 18) ^ (e >>> 3)) +
                          f[o - 16]) +
                      c.pop() +
                      (s((e = c[4]), 6) ^ s(e, 11) ^ s(e, 25)) +
                      ((e & c[5]) ^ (~e & c[6])) +
                      a[o++]);
                for (o = 8; o; ) r[--o] += c[o];
              }
              for (e = ""; o < 64; )
                e += ((r[o >> 3] >> (4 * (7 - o++))) & 15).toString(16);
              return e;
            });
        },
        17061: function (t, r, n) {
          var e = n(18698).default;
          function o() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            (t.exports = o =
              function () {
                return r;
              }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports);
            var r = {},
              n = Object.prototype,
              i = n.hasOwnProperty,
              a =
                Object.defineProperty ||
                function (t, r, n) {
                  t[r] = n.value;
                },
              u = "function" == typeof Symbol ? Symbol : {},
              c = u.iterator || "@@iterator",
              s = u.asyncIterator || "@@asyncIterator",
              f = u.toStringTag || "@@toStringTag";
            function l(t, r, n) {
              return (
                Object.defineProperty(t, r, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                }),
                t[r]
              );
            }
            try {
              l({}, "");
            } catch (t) {
              l = function (t, r, n) {
                return (t[r] = n);
              };
            }
            function h(t, r, n, e) {
              var o = r && r.prototype instanceof v ? r : v,
                i = Object.create(o.prototype),
                u = new C(e || []);
              return a(i, "_invoke", { value: _(t, n, u) }), i;
            }
            function p(t, r, n) {
              try {
                return { type: "normal", arg: t.call(r, n) };
              } catch (t) {
                return { type: "throw", arg: t };
              }
            }
            r.wrap = h;
            var d = {};
            function v() {}
            function y() {}
            function g() {}
            var m = {};
            l(m, c, function () {
              return this;
            });
            var w = Object.getPrototypeOf,
              b = w && w(w(R([])));
            b && b !== n && i.call(b, c) && (m = b);
            var x = (g.prototype = v.prototype = Object.create(m));
            function S(t) {
              ["next", "throw", "return"].forEach(function (r) {
                l(t, r, function (t) {
                  return this._invoke(r, t);
                });
              });
            }
            function E(t, r) {
              function n(o, a, u, c) {
                var s = p(t[o], t, a);
                if ("throw" !== s.type) {
                  var f = s.arg,
                    l = f.value;
                  return l && "object" == e(l) && i.call(l, "__await")
                    ? r.resolve(l.__await).then(
                        function (t) {
                          n("next", t, u, c);
                        },
                        function (t) {
                          n("throw", t, u, c);
                        }
                      )
                    : r.resolve(l).then(
                        function (t) {
                          (f.value = t), u(f);
                        },
                        function (t) {
                          return n("throw", t, u, c);
                        }
                      );
                }
                c(s.arg);
              }
              var o;
              a(this, "_invoke", {
                value: function (t, e) {
                  function i() {
                    return new r(function (r, o) {
                      n(t, e, r, o);
                    });
                  }
                  return (o = o ? o.then(i, i) : i());
                },
              });
            }
            function _(t, r, n) {
              var e = "suspendedStart";
              return function (o, i) {
                if ("executing" === e)
                  throw new Error("Generator is already running");
                if ("completed" === e) {
                  if ("throw" === o) throw i;
                  return T();
                }
                for (n.method = o, n.arg = i; ; ) {
                  var a = n.delegate;
                  if (a) {
                    var u = O(a, n);
                    if (u) {
                      if (u === d) continue;
                      return u;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === e)
                      throw ((e = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  e = "executing";
                  var c = p(t, r, n);
                  if ("normal" === c.type) {
                    if (
                      ((e = n.done ? "completed" : "suspendedYield"),
                      c.arg === d)
                    )
                      continue;
                    return { value: c.arg, done: n.done };
                  }
                  "throw" === c.type &&
                    ((e = "completed"), (n.method = "throw"), (n.arg = c.arg));
                }
              };
            }
            function O(t, r) {
              var n = t.iterator[r.method];
              if (void 0 === n) {
                if (((r.delegate = null), "throw" === r.method)) {
                  if (
                    t.iterator.return &&
                    ((r.method = "return"),
                    (r.arg = void 0),
                    O(t, r),
                    "throw" === r.method)
                  )
                    return d;
                  (r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a 'throw' method"
                    ));
                }
                return d;
              }
              var e = p(n, t.iterator, r.arg);
              if ("throw" === e.type)
                return (
                  (r.method = "throw"), (r.arg = e.arg), (r.delegate = null), d
                );
              var o = e.arg;
              return o
                ? o.done
                  ? ((r[t.resultName] = o.value),
                    (r.next = t.nextLoc),
                    "return" !== r.method &&
                      ((r.method = "next"), (r.arg = void 0)),
                    (r.delegate = null),
                    d)
                  : o
                : ((r.method = "throw"),
                  (r.arg = new TypeError("iterator result is not an object")),
                  (r.delegate = null),
                  d);
            }
            function A(t) {
              var r = { tryLoc: t[0] };
              1 in t && (r.catchLoc = t[1]),
                2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
                this.tryEntries.push(r);
            }
            function j(t) {
              var r = t.completion || {};
              (r.type = "normal"), delete r.arg, (t.completion = r);
            }
            function C(t) {
              (this.tryEntries = [{ tryLoc: "root" }]),
                t.forEach(A, this),
                this.reset(!0);
            }
            function R(t) {
              if (t) {
                var r = t[c];
                if (r) return r.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                  var n = -1,
                    e = function r() {
                      for (; ++n < t.length; )
                        if (i.call(t, n))
                          return (r.value = t[n]), (r.done = !1), r;
                      return (r.value = void 0), (r.done = !0), r;
                    };
                  return (e.next = e);
                }
              }
              return { next: T };
            }
            function T() {
              return { value: void 0, done: !0 };
            }
            return (
              (y.prototype = g),
              a(x, "constructor", { value: g, configurable: !0 }),
              a(g, "constructor", { value: y, configurable: !0 }),
              (y.displayName = l(g, f, "GeneratorFunction")),
              (r.isGeneratorFunction = function (t) {
                var r = "function" == typeof t && t.constructor;
                return (
                  !!r &&
                  (r === y || "GeneratorFunction" === (r.displayName || r.name))
                );
              }),
              (r.mark = function (t) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, g)
                    : ((t.__proto__ = g), l(t, f, "GeneratorFunction")),
                  (t.prototype = Object.create(x)),
                  t
                );
              }),
              (r.awrap = function (t) {
                return { __await: t };
              }),
              S(E.prototype),
              l(E.prototype, s, function () {
                return this;
              }),
              (r.AsyncIterator = E),
              (r.async = function (t, n, e, o, i) {
                void 0 === i && (i = Promise);
                var a = new E(h(t, n, e, o), i);
                return r.isGeneratorFunction(n)
                  ? a
                  : a.next().then(function (t) {
                      return t.done ? t.value : a.next();
                    });
              }),
              S(x),
              l(x, f, "Generator"),
              l(x, c, function () {
                return this;
              }),
              l(x, "toString", function () {
                return "[object Generator]";
              }),
              (r.keys = function (t) {
                var r = Object(t),
                  n = [];
                for (var e in r) n.push(e);
                return (
                  n.reverse(),
                  function t() {
                    for (; n.length; ) {
                      var e = n.pop();
                      if (e in r) return (t.value = e), (t.done = !1), t;
                    }
                    return (t.done = !0), t;
                  }
                );
              }),
              (r.values = R),
              (C.prototype = {
                constructor: C,
                reset: function (t) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = void 0),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = void 0),
                    this.tryEntries.forEach(j),
                    !t)
                  )
                    for (var r in this)
                      "t" === r.charAt(0) &&
                        i.call(this, r) &&
                        !isNaN(+r.slice(1)) &&
                        (this[r] = void 0);
                },
                stop: function () {
                  this.done = !0;
                  var t = this.tryEntries[0].completion;
                  if ("throw" === t.type) throw t.arg;
                  return this.rval;
                },
                dispatchException: function (t) {
                  if (this.done) throw t;
                  var r = this;
                  function n(n, e) {
                    return (
                      (a.type = "throw"),
                      (a.arg = t),
                      (r.next = n),
                      e && ((r.method = "next"), (r.arg = void 0)),
                      !!e
                    );
                  }
                  for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var o = this.tryEntries[e],
                      a = o.completion;
                    if ("root" === o.tryLoc) return n("end");
                    if (o.tryLoc <= this.prev) {
                      var u = i.call(o, "catchLoc"),
                        c = i.call(o, "finallyLoc");
                      if (u && c) {
                        if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                        if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                      } else if (u) {
                        if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                      } else {
                        if (!c)
                          throw new Error(
                            "try statement without catch or finally"
                          );
                        if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function (t, r) {
                  for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var e = this.tryEntries[n];
                    if (
                      e.tryLoc <= this.prev &&
                      i.call(e, "finallyLoc") &&
                      this.prev < e.finallyLoc
                    ) {
                      var o = e;
                      break;
                    }
                  }
                  o &&
                    ("break" === t || "continue" === t) &&
                    o.tryLoc <= r &&
                    r <= o.finallyLoc &&
                    (o = null);
                  var a = o ? o.completion : {};
                  return (
                    (a.type = t),
                    (a.arg = r),
                    o
                      ? ((this.method = "next"), (this.next = o.finallyLoc), d)
                      : this.complete(a)
                  );
                },
                complete: function (t, r) {
                  if ("throw" === t.type) throw t.arg;
                  return (
                    "break" === t.type || "continue" === t.type
                      ? (this.next = t.arg)
                      : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && r && (this.next = r),
                    d
                  );
                },
                finish: function (t) {
                  for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var n = this.tryEntries[r];
                    if (n.finallyLoc === t)
                      return this.complete(n.completion, n.afterLoc), j(n), d;
                  }
                },
                catch: function (t) {
                  for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var n = this.tryEntries[r];
                    if (n.tryLoc === t) {
                      var e = n.completion;
                      if ("throw" === e.type) {
                        var o = e.arg;
                        j(n);
                      }
                      return o;
                    }
                  }
                  throw new Error("illegal catch attempt");
                },
                delegateYield: function (t, r, n) {
                  return (
                    (this.delegate = {
                      iterator: R(t),
                      resultName: r,
                      nextLoc: n,
                    }),
                    "next" === this.method && (this.arg = void 0),
                    d
                  );
                },
              }),
              r
            );
          }
          (t.exports = o),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
        18698: function (t) {
          function r(n) {
            return (
              (t.exports = r =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        "function" == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? "symbol"
                        : typeof t;
                    }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports),
              r(n)
            );
          }
          (t.exports = r),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
        64687: function (t, r, n) {
          var e = n(17061)();
          t.exports = e;
          try {
            regeneratorRuntime = e;
          } catch (t) {
            "object" == typeof globalThis
              ? (globalThis.regeneratorRuntime = e)
              : Function("r", "regeneratorRuntime = r")(e);
          }
        },
        83186: function (t, r) {
          var n =
              "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}",
            e = new RegExp("^".concat(n, "$"), "i"),
            o = !!String.prototype.trim;
          function i(t) {
            return null != t;
          }
          function a(t) {
            return "[object Array]" === Object.prototype.toString.call(t);
          }
          function u(t) {
            return o
              ? ("" + t).trim()
              : ("" + t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          }
          function c(t) {
            return "string" == typeof t;
          }
          function s(t) {
            return !!t && "object" == typeof t && !a(t);
          }
          function f(t, r) {
            return new Date(new Date().getTime() + t * r);
          }
          function l(t, r, n) {
            if (s(r)) {
              var e = void 0;
              return (
                ((e =
                  "message" in r && "string" == typeof r.message
                    ? new Error(n || r.message)
                    : new Error(n)).name = t),
                "stack" in r &&
                  "string" == typeof r.stack &&
                  (e.stack = r.stack),
                "lineNumber" in r &&
                  "number" == typeof r.lineNumber &&
                  (e.lineNumber = r.lineNumber),
                "columnNumber" in r &&
                  "number" == typeof r.columnNumber &&
                  (e.columnNumber = r.columnNumber),
                e
              );
            }
            return ((e = Error(n)).name = t), e;
          }
          var h = function () {
            return (
              (h =
                Object.assign ||
                function (t) {
                  for (var r, n = 1, e = arguments.length; n < e; n++)
                    for (var o in (r = arguments[n]))
                      Object.prototype.hasOwnProperty.call(r, o) &&
                        (t[o] = r[o]);
                  return t;
                }),
              h.apply(this, arguments)
            );
          };
          function p(t, r, n) {
            if (n || 2 === arguments.length)
              for (var e, o = 0, i = r.length; o < i; o++)
                (!e && o in r) ||
                  (e || (e = Array.prototype.slice.call(r, 0, o)),
                  (e[o] = r[o]));
            return t.concat(e || Array.prototype.slice.call(r));
          }
          "function" == typeof SuppressedError && SuppressedError;
          var d = "li_errors",
            v = (function () {
              function t(t) {
                var r = parseInt(t.toString()) || 5;
                this.data = { h: {}, q: {}, size: r };
              }
              return (
                (t.prototype.on = function (t, r, n) {
                  var e,
                    o = { callback: r.bind(n), unbound: r };
                  return (
                    (this.data = h(h({}, this.data), {
                      h: h(
                        h({}, this.data.h),
                        ((e = {}),
                        (e[t] = p(p([], this.data.h[t] || [], !0), [o], !1)),
                        e)
                      ),
                    })),
                    (this.data.q[t] || []).forEach(function (t) {
                      return r.call(n, t);
                    }),
                    this
                  );
                }),
                (t.prototype.once = function (t, r, n) {
                  var e = this,
                    o = this.data.q[t] || [];
                  if (o.length > 0) return r.call(n, o[0]), this;
                  var i = function (o) {
                    e.off(t, i), r.call(n, o);
                  };
                  return (i._ = r), this.on(t, i, n);
                }),
                (t.prototype.emit = function (t, r) {
                  var n;
                  (this.data.h[t] || []).forEach(function (t) {
                    return t.callback(r);
                  });
                  var e = this.data.q[t] || [];
                  return (
                    (this.data = h(h({}, this.data), {
                      q: h(
                        h({}, this.data.q),
                        ((n = {}),
                        (n[t] = p(
                          p([], e.length < this.data.size ? e : e.slice(1), !0),
                          [r],
                          !1
                        )),
                        n)
                      ),
                    })),
                    this
                  );
                }),
                (t.prototype.off = function (t, r) {
                  var n,
                    e = this.data.h[t],
                    o =
                      (e &&
                        r &&
                        e.filter(function (t) {
                          return t.unbound !== r;
                        })) ||
                      [];
                  if (o.length)
                    this.data = h(h({}, this.data), {
                      h: h(h({}, this.data.h), ((n = {}), (n[t] = o), n)),
                    });
                  else {
                    var i = this.data.h,
                      a = t;
                    i[a];
                    var u = (function (t, r) {
                      var n = {};
                      for (var e in t)
                        Object.prototype.hasOwnProperty.call(t, e) &&
                          r.indexOf(e) < 0 &&
                          (n[e] = t[e]);
                      if (
                        null != t &&
                        "function" == typeof Object.getOwnPropertySymbols
                      ) {
                        var o = 0;
                        for (
                          e = Object.getOwnPropertySymbols(t);
                          o < e.length;
                          o++
                        )
                          r.indexOf(e[o]) < 0 &&
                            Object.prototype.propertyIsEnumerable.call(
                              t,
                              e[o]
                            ) &&
                            (n[e[o]] = t[e[o]]);
                      }
                      return n;
                    })(i, ["symbol" == typeof a ? a : a + ""]);
                    this.data = h(h({}, this.data), { h: u });
                  }
                  return this;
                }),
                (t.prototype.emitErrorWithMessage = function (t, r, n) {
                  var e = l(t, n, r);
                  return this.emit(d, e);
                }),
                (t.prototype.emitError = function (t, r) {
                  var n = l(t, r);
                  return this.emit(d, n);
                }),
                t
              );
            })();
          (r.ERRORS_CHANNEL = d),
            (r.ReplayEmitter = v),
            (r.UUID = n),
            (r.expiresInDays = function (t) {
              return f(t, 864e5);
            }),
            (r.expiresInHours = function (t) {
              return f(t, 36e5);
            }),
            (r.isArray = a),
            (r.isFunction = function (t) {
              return !!t && "function" == typeof t;
            }),
            (r.isNonEmpty = function (t) {
              return i(t) && u(t).length > 0;
            }),
            (r.isObject = s),
            (r.isRecord = function (t) {
              return s(t);
            }),
            (r.isString = c),
            (r.isUUID = function (t) {
              return !!t && e.test(u(t));
            }),
            (r.nonNull = i),
            (r.safeToString = function (t) {
              return "object" == typeof t ? JSON.stringify(t) : "" + t;
            }),
            (r.strEqualsIgnoreCase = function (t, r) {
              return c(t) && c(r) && u(t.toLowerCase()) === u(r.toLowerCase());
            }),
            (r.trim = u),
            (r.wrapError = l);
        },
        51610: function (t, r, n) {
          var e = n(93795);
          n(83186), n(76886);
          var o = e.LiveConnect,
            i = e.StandardLiveConnect,
            a = e.MinimalLiveConnect;
          (r.vH = e.consts),
            (r.YB = e.eventBus),
            (r.VW = o),
            (r.gn = a),
            (r.Vl = i);
        },
        93795: function (t, r, n) {
          var e = n(83186),
            o = n(76886),
            i = function (t, r) {
              return (
                (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, r) {
                      t.__proto__ = r;
                    }) ||
                  function (t, r) {
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }),
                i(t, r)
              );
            };
          function a(t, r) {
            if ("function" != typeof r && null !== r)
              throw new TypeError(
                "Class extends value " +
                  String(r) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = t;
            }
            i(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          }
          var u = function () {
            return (
              (u =
                Object.assign ||
                function (t) {
                  for (var r, n = 1, e = arguments.length; n < e; n++)
                    for (var o in (r = arguments[n]))
                      Object.prototype.hasOwnProperty.call(r, o) &&
                        (t[o] = r[o]);
                  return t;
                }),
              u.apply(this, arguments)
            );
          };
          function c(t, r, n) {
            return e.isNonEmpty(r) ? [[t, n(r)]] : [];
          }
          function s(t, r) {
            return c(t, r, function (t) {
              return encodeURIComponent(t);
            });
          }
          function f(t, r, n) {
            return c(t, r, function (t) {
              return encodeURIComponent(n(t));
            });
          }
          function l(t, r, n) {
            return e.isNonEmpty(r) && e.isFunction(n) && n(r)
              ? [[t, encodeURIComponent(r)]]
              : [];
          }
          var h = (function () {
              function t(t) {
                var r, n, e;
                (this.url =
                  null !== (r = t.collectorUrl) && void 0 !== r
                    ? r
                    : "https://rp.liadm.com"),
                  (this.timeout =
                    null !== (n = t.ajaxTimeout) && void 0 !== n ? n : 0),
                  (this.calls = t.callHandler),
                  (this.eventBus = t.eventBus),
                  (this.retries =
                    null !== (e = t.ajaxRetries) && void 0 !== e ? e : 3);
              }
              return (
                (t.prototype.callBakers = function (t) {
                  try {
                    var r = JSON.parse(t).bakers;
                    if (e.isArray(r))
                      for (var n = 0; n < r.length; n++)
                        this.calls.pixelGet(
                          "".concat(r[n], "?dtstmp=").concat(Date.now())
                        );
                  } catch (r) {
                    this.eventBus.emitErrorWithMessage(
                      "CallBakers",
                      "Error while calling bakers with ".concat(t),
                      r
                    );
                  }
                }),
                (t.prototype.sendState = function (t, r, n, o) {
                  var i;
                  if (t.sendsPixel()) {
                    o && e.isFunction(o) && o();
                    var a = s("dtstmp", Date.now()),
                      u = (i = t.asQuery()).prependParams
                        .apply(i, a)
                        .toQueryString();
                    n("".concat(this.url, "/").concat(r).concat(u));
                  }
                }),
                (t.prototype.sendAjax = function (t, r) {
                  var n = this;
                  void 0 === r && (r = {}),
                    this.sendState(
                      t,
                      "j",
                      function (o) {
                        var i = function (a) {
                          n.calls.ajaxGet(
                            o,
                            function (t) {
                              r.onLoad && e.isFunction(r.onLoad) && r.onLoad(),
                                n.callBakers(t);
                            },
                            function (e) {
                              a <= 0
                                ? (n.sendPixel(t, r),
                                  n.eventBus.emitError("AjaxFailed", e))
                                : i(a - 1);
                            },
                            n.timeout
                          );
                        };
                        i(n.retries);
                      },
                      r.onPreSend
                    );
                }),
                (t.prototype.sendPixel = function (t, r) {
                  var n = this;
                  void 0 === r && (r = {}),
                    this.sendState(
                      t,
                      "p",
                      function (t) {
                        return n.calls.pixelGet(t, r.onLoad);
                      },
                      r.onPreSend
                    );
                }),
                t
              );
            })(),
            p = "__li__evt_bus",
            d = e.ERRORS_CHANNEL,
            v = "lips",
            y = "pre_lips",
            g = "_li_duid",
            m = "https://idx.liadm.com/idex",
            w = [],
            b = Object.freeze({
              __proto__: null,
              DEFAULT_IDEX_AJAX_TIMEOUT: 5e3,
              DEFAULT_IDEX_URL: m,
              DEFAULT_REQUESTED_ATTRIBUTES: w,
              ERRORS_PREFIX: d,
              EVENT_BUS_NAMESPACE: p,
              PEOPLE_VERIFIED_LS_ENTRY: g,
              PIXEL_SENT_PREFIX: v,
              PRELOAD_PIXEL: y,
            });
          function x(t) {
            var r = (function (t) {
              t = "".concat(t);
              for (var r = 0; r < t.length; r++)
                if (t.charCodeAt(r) > 255) return null;
              var n,
                e = "";
              for (r = 0; r < t.length; r += 3) {
                var o = [void 0, void 0, void 0, void 0];
                (o[0] = t.charCodeAt(r) >> 2),
                  (o[1] = (3 & t.charCodeAt(r)) << 4),
                  t.length > r + 2
                    ? ((o[1] |= t.charCodeAt(r + 1) >> 4),
                      (o[2] = (15 & t.charCodeAt(r + 1)) << 2),
                      (o[2] |= t.charCodeAt(r + 2) >> 6),
                      (o[3] = 63 & t.charCodeAt(r + 2)))
                    : t.length > r + 1 &&
                      ((o[1] |= t.charCodeAt(r + 1) >> 4),
                      (o[2] = (15 & t.charCodeAt(r + 1)) << 2));
                for (var i = 0; i < o.length; i++) {
                  var a = o[i];
                  e +=
                    void 0 === a
                      ? "="
                      : (n = a) >= 0 && n < 64
                      ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
                          n
                        ]
                      : void 0;
                }
              }
              return e;
            })(t);
            return r || "";
          }
          var S = /[+/]|=+$/g,
            E = { "+": "-", "/": "_" };
          function _(t) {
            return E[t] || "";
          }
          function O(t) {
            var r = null,
              n = encodeURIComponent(t).replace(
                /%([0-9A-F]{2})/g,
                function (t, r) {
                  return String.fromCharCode(parseInt("0x" + r, 16));
                }
              );
            try {
              r = window && e.isFunction(window.btoa) ? window.btoa : x;
            } catch (t) {
              r = x;
            }
            return r(n).replace(S, _);
          }
          var A = new Map([
            [32, "md5"],
            [40, "sha1"],
            [64, "sha256"],
          ]);
          function j(t) {
            var r = C(t);
            return !!r && A.has(r.length);
          }
          function C(t) {
            var r = t.match(/(\s+)?[a-f0-9]{32,64}(\s+)?/gi);
            return r && r.map(e.trim)[0];
          }
          function R(t) {
            var r = t.toLowerCase();
            return { md5: o.md5(r), sha1: o.sha1(r), sha256: o.sha256(r) };
          }
          function T(t) {
            return /\S+(@|%40)\S+\.\S+/.test(t);
          }
          function D(t) {
            for (
              var r = (function (t) {
                  for (
                    var r = [],
                      n = new RegExp(
                        "([\\w\\d.+-]+(@|%40)[\\w\\d-]+.[\\w\\d.-]+)",
                        "g"
                      ),
                      o = n.exec(t);
                    o;

                  )
                    r.push(e.trim(o[1])), (o = n.exec(t));
                  return r;
                })(t),
                n = [],
                o = t,
                i = 0;
              i < r.length;
              i++
            ) {
              var a = r[i],
                u = R(a);
              (o = o.replace(a, u.md5)), n.push(u);
            }
            return { stringWithoutRawEmails: o, hashesFromOriginalString: n };
          }
          function I(t, r) {
            return "string" == typeof r && T(e.trim(r)) ? "*********" : r;
          }
          var L = function (t) {
            var r = "";
            return (
              t.forEach(function (t) {
                var n = 0 === r.length ? "?" : "&";
                t &&
                  t.length &&
                  2 === t.length &&
                  t[0] &&
                  t[1] &&
                  (r = "".concat(r).concat(n).concat(t[0], "=").concat(t[1]));
              }),
              r
            );
          };
          function k(t) {
            return (function (t) {
              return "false" !== t && ("true" === t || t);
            })(
              (function (t) {
                return "null" === t || "undefined" === t ? null : t;
              })(
                (function (t) {
                  return isNaN(+t) ? t : +t;
                })(t)
              )
            );
          }
          function B(t, r) {
            if (r in t) {
              var n = t[r];
              return e.isArray(n)
                ? n.map(function (t) {
                    return k(N(t));
                  })
                : k(N(n));
            }
          }
          function M(t) {
            var r,
              n,
              o,
              i = {};
            return t &&
              -1 !== (r = t.indexOf("?")) &&
              (n = t.slice(r + 1)) &&
              (-1 === (o = n.indexOf("#")) || (n = n.slice(0, o)))
              ? (n.split("&").forEach(function (t) {
                  if (t) {
                    var r = void 0,
                      n = t.split("=");
                    r = n[0];
                    var o = 2 === n.length ? n[1] : "true";
                    if (
                      ("[]" === r.slice(-2) && (r = r.slice(0, -2)), r in i)
                    ) {
                      var a = i[r];
                      e.isArray(a) ? a.push(o) : (i[r] = [a, o]);
                    } else i[r] = o;
                  }
                }),
                i)
              : i;
          }
          function N(t) {
            return t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
          }
          var P = (function () {
              function t(t) {
                var r = t.match(
                  /^(https?\:\/\/)?(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/
                );
                if (null === r)
                  throw new TypeError("Failed to parse URL: ".concat(t));
                (this.protocol = r[1] || ""),
                  (this.host = r[2] || ""),
                  (this.hostname = r[3] || ""),
                  (this.port = r[4] || ""),
                  (this.pathname = r[5] || ""),
                  (this.search = r[6] || ""),
                  (this.hash = r[7] || "");
              }
              return (
                (t.prototype.toString = function () {
                  return ""
                    .concat(this.protocol)
                    .concat(this.host)
                    .concat(this.pathname)
                    .concat(this.search)
                    .concat(this.hash);
                }),
                t
              );
            })(),
            F = ["items", "itemids"],
            H = ["email", "emailhash", "hash", "hashedemail"],
            U = [
              function (t) {
                for (
                  var r, n = t.eventSource || {}, o = 0, i = Object.keys(n);
                  o < i.length;
                  o++
                ) {
                  var a = i[o],
                    u = a.toLowerCase();
                  if (H.indexOf(u) > -1) {
                    var c = e.trim(e.safeToString(n[a])),
                      s =
                        ((r = void 0),
                        (r = c.match(/\S+(@|%40)\S+\.\S+/)) &&
                          r.map(e.trim)[0]),
                      f = C(c);
                    if (s) {
                      var l = R(N(s));
                      return Z({ hashedEmail: [l.md5, l.sha1, l.sha256] }, t);
                    }
                    if (f && j(f))
                      return Z({ hashedEmail: [f.toLowerCase()] }, t);
                  }
                }
                return t;
              },
              function (t) {
                var r = t.eventSource || {};
                return (
                  Object.keys(r).forEach(function (t) {
                    var n = t.toLowerCase(),
                      o = r[t];
                    F.indexOf(n) > -1 &&
                      e.isArray(o) &&
                      o.length > 10 &&
                      (o.length = 10);
                  }),
                  {}
                );
              },
            ];
          function Z(t, r) {
            var n = {};
            function o(t) {
              return e.isObject(t) ? t : {};
            }
            function i(t) {
              return Object.keys(t);
            }
            var a = o(t),
              u = o(r);
            return (
              i(a).forEach(function (t) {
                n[t] = a[t];
              }),
              i(u).forEach(function (t) {
                n[t] = u[t];
              }),
              n
            );
          }
          var V = "full",
            z = "no_path";
          var W = ["setemail", "setemailhash", "sethashedemail"];
          function q(t, r) {
            return function (n) {
              var o = n[t];
              return e.nonNull(o) ? r(o) : [];
            };
          }
          var G = [
              q("appId", function (t) {
                return s("aid", t);
              }),
              q("distributorId", function (t) {
                return s("did", t);
              }),
              q("eventSource", function (t) {
                return c("se", t, function (t) {
                  return O(JSON.stringify(t, I));
                });
              }),
              q("liveConnectId", function (t) {
                return s("duid", t);
              }),
              q("trackerVersion", function (t) {
                return s("tv", t);
              }),
              function (t) {
                if (e.nonNull(t.pageUrl)) {
                  var r = (function (t) {
                      if (void 0 === t.pageUrl || 0 === t.pageUrl.length)
                        return ["", !1, []];
                      if (
                        (function (t) {
                          return !(
                            (void 0 !== t.urlCollectionMode &&
                              t.urlCollectionMode !== V) ||
                            (void 0 !== t.queryParametersFilter &&
                              "" !== t.queryParametersFilter)
                          );
                        })(t)
                      )
                        return [t.pageUrl, !1, []];
                      var r = new P(t.pageUrl),
                        n = (function (t) {
                          var r = M(t),
                            n = [];
                          return (
                            Object.keys(r).forEach(function (t) {
                              n.push([t, B(r, t)]);
                            }),
                            n
                          );
                        })(r.search),
                        e = (function (t, r) {
                          return (
                            r.urlCollectionMode === z && t.pathname.length > 1
                          );
                        })(r, t),
                        o = (function (t, r) {
                          if (
                            void 0 === r.queryParametersFilter ||
                            "" === r.queryParametersFilter
                          )
                            return [];
                          var n = new RegExp(r.queryParametersFilter);
                          return t
                            .map(function (t) {
                              return t[0];
                            })
                            .filter(function (t) {
                              return n.test(t);
                            });
                        })(n, t);
                      return (
                        e && (r.pathname = "/"),
                        o.length > 0 &&
                          (r.search = (function (t, r) {
                            var n = t
                              .filter(function (t) {
                                return -1 === r.indexOf(t[0]);
                              })
                              .map(function (t) {
                                return "".concat(t[0], "=").concat(t[1]);
                              });
                            return n.length > 0 ? "?".concat(n.join("&")) : "";
                          })(n, o)),
                        [r.toString(), e, o]
                      );
                    })(t),
                    n = r[0],
                    o = r[1],
                    i = r[2],
                    a = [
                      s("pu", n),
                      l("pu_rp", o ? 1 : 0, function (t) {
                        return 1 === t;
                      }),
                      f("pu_rqp", i, function (t) {
                        return t.join(",");
                      }),
                    ];
                  return Array.prototype.concat.apply([], a);
                }
                return [];
              },
              q("errorDetails", function (t) {
                return c("ae", t, function (t) {
                  return O(JSON.stringify(t));
                });
              }),
              q("retrievedIdentifiers", function (t) {
                var r = [];
                return (
                  e.isArray(t) &&
                    t.forEach(function (t) {
                      return r.push.apply(r, s("ext_".concat(t.name), t.value));
                    }),
                  r
                );
              }),
              q("hashesFromIdentifiers", function (t) {
                var r = [];
                return (
                  e.isArray(t) &&
                    t.forEach(function (t) {
                      return r.push.apply(
                        r,
                        s(
                          "scre",
                          ""
                            .concat(t.md5, ",")
                            .concat(t.sha1, ",")
                            .concat(t.sha256)
                        )
                      );
                    }),
                  r
                );
              }),
              q("decisionIds", function (t) {
                return f("li_did", t, function (t) {
                  return t.join(",");
                });
              }),
              q("hashedEmail", function (t) {
                return f("e", t, function (t) {
                  return t.join(",");
                });
              }),
              q("usPrivacyString", function (t) {
                return s("us_privacy", t);
              }),
              q("wrapperName", function (t) {
                return s("wpn", t);
              }),
              q("gdprApplies", function (t) {
                return f("gdpr", t, function (t) {
                  return t ? 1 : 0;
                });
              }),
              q("privacyMode", function (t) {
                return l("n3pc", t ? 1 : 0, function (t) {
                  return 1 === t;
                });
              }),
              q("privacyMode", function (t) {
                return l("n3pct", t ? 1 : 0, function (t) {
                  return 1 === t;
                });
              }),
              q("privacyMode", function (t) {
                return l("nb", t ? 1 : 0, function (t) {
                  return 1 === t;
                });
              }),
              q("gdprConsent", function (t) {
                return s("gdpr_consent", t);
              }),
              q("referrer", function (t) {
                return s("refr", t);
              }),
              q("contextElements", function (t) {
                return s("c", t);
              }),
              q("gppString", function (t) {
                return s("gpp_s", t);
              }),
              q("gppApplicableSections", function (t) {
                return f("gpp_as", t, function (t) {
                  return t.join(",");
                });
              }),
              q("cookieDomain", function (t) {
                return s("cd", t);
              }),
            ],
            Q = (function () {
              function t(t) {
                this.tuples = t;
              }
              return (
                (t.prototype.prependParams = function () {
                  for (var r = [], n = 0; n < arguments.length; n++)
                    r[n] = arguments[n];
                  var e = this.tuples;
                  return e.unshift.apply(e, r), new t(e);
                }),
                (t.prototype.toQueryString = function () {
                  return L(this.tuples);
                }),
                t
              );
            })(),
            J = (function () {
              function t(r, n) {
                (this.data = t.safeFiddle(r, n)), (this.eventBus = n);
              }
              return (
                (t.safeFiddle = function (t, r) {
                  try {
                    return (
                      (n = JSON.parse(JSON.stringify(t))),
                      e.isObject(n.eventSource)
                        ? U.reduce(function (t, r) {
                            return Z(t, r(t));
                          }, n)
                        : n
                    );
                  } catch (t) {
                    return (
                      console.error(t),
                      r.emitErrorWithMessage(
                        "StateCombineWith",
                        "Error while extracting event data",
                        t
                      ),
                      {}
                    );
                  }
                  var n;
                }),
                (t.prototype.combineWith = function (r) {
                  return new t(Z(this.data, r), this.eventBus);
                }),
                (t.prototype.sendsPixel = function () {
                  var t = e.isObject(this.data.eventSource)
                      ? this.data.eventSource
                      : {},
                    r = Object.keys(t).filter(function (t) {
                      return (
                        "eventname" === t.toLowerCase() ||
                        "event" === t.toLowerCase()
                      );
                    }),
                    n = r && r.length >= 1 && r[0],
                    o = n && e.trim(t[n]);
                  return !o || -1 === W.indexOf(o.toLowerCase());
                }),
                (t.prototype.asTuples = function () {
                  var t = this,
                    r = [];
                  return (
                    G.forEach(function (n) {
                      var o = n(t.data);
                      o && e.isArray(o) && r.push.apply(r, o);
                    }),
                    r
                  );
                }),
                (t.prototype.asQuery = function () {
                  return new Q(this.asTuples());
                }),
                t
              );
            })();
          function Y(t) {
            void 0 === t && (t = window);
            for (
              var r,
                n =
                  $(function () {
                    return t.location.ancestorOrigins;
                  }) || [],
                e = [],
                o = t;
              o !== top;

            )
              e.push(o), (o = o.parent);
            e.push(o);
            for (
              var i = function (t) {
                  (r = $(function () {
                    return e[t].location.href;
                  })),
                    0 !== t &&
                      (r ||
                        (r = $(function () {
                          return e[t - 1].document.referrer;
                        })),
                      r || (r = n[t - 1]));
                },
                a = e.length - 1;
              a >= 0 && !r;
              a--
            )
              i(a);
            return r;
          }
          function X(t, r, n) {
            if (!t && r && "" !== r && n) {
              var e = (function (t, r) {
                for (
                  var n = window.document.querySelectorAll(t), e = "", o = 0;
                  o < n.length;
                  o++
                ) {
                  var i = e + D(n[o].outerHTML).stringWithoutRawEmails;
                  if (!(K(i) <= r)) return e;
                  e = i;
                }
                return e;
              })(r, n);
              return O(e);
            }
            return "";
          }
          function K(t) {
            return Math.ceil((4 * new Blob([t]).size) / 3);
          }
          function $(t) {
            try {
              return t();
            } catch (t) {
              return;
            }
          }
          function tt(t) {
            for (var r = new Set(), n = [], e = 0; e < t.length; e++)
              r.has(t[e].md5) || (n.push(t[e]), r.add(t[e].md5));
            return n;
          }
          var rt = function (t) {
            var r;
            return u(u({}, t), {
              privacyMode:
                !!t.gdprApplies ||
                (null !== (r = t.gppApplicableSections) && void 0 !== r
                  ? r
                  : []
                ).indexOf(2) > -1,
            });
          };
          function nt(t, r) {
            if (t && t.appId && t.distributorId) {
              var n = t.distributorId;
              delete t.distributorId,
                r.emitError(
                  "AppIdAndDistributorIdPresent",
                  new Error(
                    "Event contains both appId: "
                      .concat(t.appId, " and distributorId: ")
                      .concat(n, ". Ignoring distributorId")
                  )
                );
            }
            return t;
          }
          var et = (function () {
            function t(t, r, n) {
              var e,
                o,
                i,
                a,
                u,
                f,
                h,
                p,
                d,
                v,
                y = this,
                g = t || { identityResolutionConfig: {} };
              (this.eventBus = n),
                (this.calls = r),
                (this.idexConfig = g.identityResolutionConfig || {}),
                (this.externalIds = g.retrievedIdentifiers || []),
                (this.source = this.idexConfig.source || "unknown"),
                (this.publisherId = this.idexConfig.publisherId || "any"),
                (this.url = this.idexConfig.url || m),
                (this.timeout =
                  this.idexConfig.ajaxTimeout || g.ajaxTimeout || 5e3),
                (this.requestedAttributes =
                  this.idexConfig.requestedAttributes || w),
                (this.tuples = []),
                (e = this.tuples).push.apply(e, s("duid", g.peopleVerifiedId)),
                (o = this.tuples).push.apply(
                  o,
                  s("us_privacy", g.usPrivacyString)
                ),
                (i = this.tuples).push.apply(
                  i,
                  c("gdpr", g.gdprApplies, function (t) {
                    return encodeURIComponent(t ? 1 : 0);
                  })
                ),
                (a = this.tuples).push.apply(
                  a,
                  l("n3pc", g.privacyMode ? "1" : "0", function (t) {
                    return "1" === t;
                  })
                ),
                (u = this.tuples).push.apply(
                  u,
                  s("gdpr_consent", g.gdprConsent)
                ),
                (f = this.tuples).push.apply(f, s("did", g.distributorId)),
                (h = this.tuples).push.apply(h, s("gpp_s", g.gppString)),
                (p = this.tuples).push.apply(
                  p,
                  s(
                    "gpp_as",
                    null === (v = g.gppApplicableSections) || void 0 === v
                      ? void 0
                      : v.join(",")
                  )
                ),
                (d = this.tuples).push.apply(d, s("cd", g.cookieDomain)),
                this.externalIds.forEach(function (t) {
                  var r;
                  (r = y.tuples).push.apply(r, s(t.name, t.value));
                }),
                this.requestedAttributes
                  .filter(function (t) {
                    return "uid2" !== t || !g.privacyMode;
                  })
                  .forEach(function (t) {
                    var r;
                    (r = y.tuples).push.apply(r, s("resolve", t));
                  });
            }
            return (
              (t.prototype.responseReceived = function (t) {
                var r = this;
                return function (n, o) {
                  var i = {};
                  if (n)
                    try {
                      i = JSON.parse(n);
                    } catch (t) {
                      console.error("Error parsing response", t),
                        r.eventBus.emitError("IdentityResolverParser", t);
                    }
                  var a = (function (t) {
                    if (
                      e.isObject(t) &&
                      "getResponseHeader" in t &&
                      e.isFunction(t.getResponseHeader)
                    ) {
                      var r = t.getResponseHeader("expires");
                      if (r) return new Date(r);
                    }
                  })(o);
                  t(i, { expiresAt: a });
                };
              }),
              (t.prototype.unsafeResolve = function (t, r, n) {
                this.calls.ajaxGet(
                  this.getUrl(n),
                  this.responseReceived(t),
                  r,
                  this.timeout
                );
              }),
              (t.prototype.getUrl = function (t) {
                var r = this.tuples.slice().concat(
                    (function (t) {
                      if (t && e.isObject(t)) {
                        var r = [];
                        return (
                          Object.keys(t).forEach(function (n) {
                            var o = t[n];
                            o &&
                              !e.isObject(o) &&
                              o.length &&
                              (e.isArray(o)
                                ? o.forEach(function (t) {
                                    return r.push([
                                      encodeURIComponent(n),
                                      encodeURIComponent(t),
                                    ]);
                                  })
                                : r.push([
                                    encodeURIComponent(n),
                                    encodeURIComponent(o),
                                  ]));
                          }),
                          r
                        );
                      }
                      return [];
                    })(t)
                  ),
                  n = L(r);
                return ""
                  .concat(this.url, "/")
                  .concat(this.source, "/")
                  .concat(this.publisherId)
                  .concat(n);
              }),
              (t.prototype.resolve = function (t, r, n) {
                try {
                  this.unsafeResolve(t, r || function () {}, n || {});
                } catch (t) {
                  console.error("IdentityResolve", t),
                    r && e.isFunction(r) && r(t),
                    this.eventBus &&
                      this.eventBus.emitError("IdentityResolve", t);
                }
              }),
              t
            );
          })();
          function ot(t) {
            return "number" == typeof t && t >= 0
              ? new e.ReplayEmitter(t)
              : new e.ReplayEmitter(5);
          }
          function it(t) {
            (e.isFunction(t.emitErrorWithMessage) &&
              e.isFunction(t.emitError)) ||
              ((t.emitErrorWithMessage = function (r, n, o) {
                void 0 === o && (o = {});
                var i = e.wrapError(r, n, o);
                return t.emit(e.ERRORS_CHANNEL, i);
              }),
              (t.emitError = function (r, n) {
                return t.emitErrorWithMessage(r, n.message, n);
              }));
          }
          function at(t) {
            return void 0 === t && (t = 5), ot(t);
          }
          function ut(t) {
            var r = window[t].eventBus || window[p];
            return it(r), r;
          }
          var ct = Object.freeze({
              __proto__: null,
              GlobalEventBus: function (t, r, n) {
                try {
                  return (
                    window ||
                      n(
                        new Error(
                          "Bus can only be attached to the window, which is not present"
                        )
                      ),
                    window && !window[t] && (window[t] = ot(r)),
                    it(window[t]),
                    window[t]
                  );
                } catch (t) {
                  console.error("events.bus.init", t), n(t);
                }
              },
              LocalEventBus: at,
              getAvailableBus: ut,
            }),
            st = "_li_dcdm_c";
          function ft(t) {
            var r = t.getCookie(st);
            if (r) return r;
            for (
              var n =
                  document.domain ||
                  (document.location && document.location.host) ||
                  (window && window.location && window.location.host) ||
                  "localhost",
                e = n.split("."),
                o = e.length;
              o > 0;
              o--
            ) {
              var i = ".".concat(e.slice(o - 1, e.length).join("."));
              if ((t.setCookie(st, i, void 0, "Lax", i), t.getCookie(st)))
                return i;
            }
            return ".".concat(n);
          }
          var lt = "cookie",
            ht = "none",
            pt = "disabled",
            dt = function (t) {
              var r = t.privacyMode ? pt : t.storageStrategy || lt;
              return u(u({}, t), { storageStrategy: r });
            },
            vt = e.expiresInDays(30),
            yt = "lidids.",
            gt = function (t, r, n) {
              return n.indexOf(t) === r;
            },
            mt = function (t) {
              return t && e.trim(t).length > 0;
            };
          var wt = "0123456789ABCDEFGHJKMNPQRSTVWXYZ",
            bt = wt.length,
            xt = Math.pow(2, 48) - 1,
            St = (function () {
              var t = "undefined" != typeof window ? window : null,
                r = t && (t.crypto || t.msCrypto);
              return r
                ? function () {
                    var t = new Uint8Array(1);
                    return r.getRandomValues(t), t[0] / 255;
                  }
                : function () {
                    return Math.random();
                  };
            })();
          function Et() {
            var t = Math.floor(St() * bt);
            return t === bt && (t = bt - 1), wt.charAt(t);
          }
          function _t() {
            return (
              (function (t, r) {
                if (t > xt)
                  throw (
                    (((n = new Error(
                      "cannot encode time greater than " + xt
                    )).source = "Ulid"),
                    n)
                  );
                for (var n, e, o = ""; r > 0; r--)
                  (o = wt.charAt((e = t % bt)) + o), (t = (t - e) / bt);
                return o;
              })(Date.now(), 10) +
              (function (t) {
                for (var r = ""; t > 0; t--) r = Et() + r;
                return r;
              })(16)
            );
          }
          var Ot = "_lc2_fpi";
          function At(t, r) {
            return function (n) {
              var e,
                i,
                a,
                c,
                s = t.get(Ot);
              if (s) i = s.data;
              else {
                var f = r.getCookie(Ot);
                if (f) t.set(Ot, f), (i = f);
                else {
                  var l = ""
                    .concat(
                      ((a = n.cookieDomain),
                      void 0 === c && (c = 12),
                      o.sha1(a.replace(/^\./, "")).substring(0, c)),
                      "--"
                    )
                    .concat(_t())
                    .toLocaleLowerCase();
                  t.set(Ot, l),
                    (i =
                      null === (e = t.get(Ot)) || void 0 === e
                        ? void 0
                        : e.data);
                }
              }
              return (
                i && r.setDataInLocalStorage(g, i),
                u(u({}, n), { liveConnectId: i, peopleVerifiedId: i })
              );
            };
          }
          var jt = {
            errorDetails: { message: "Unknown message", name: "Unknown name" },
          };
          function Ct(t) {
            try {
              var r = 1 * t;
              return isNaN(r) ? void 0 : r;
            } catch (t) {}
          }
          function Rt(t) {
            try {
              return e.isString(t) && t.length && t.length > 120
                ? "".concat(t.substr(0, 120), "...")
                : "".concat(t);
            } catch (t) {}
          }
          var Tt = function () {},
            Dt = (function () {
              function t(t, r, n) {
                (this.obj = t),
                  (this.name = r),
                  (this.errors = []),
                  (this.eventBus = n);
              }
              return (
                (t.prototype.wrap = function (t) {
                  var r = this;
                  if (e.isObject(this.obj)) {
                    var n = this.obj[t];
                    if (e.isFunction(n))
                      return function () {
                        for (var e, o = [], i = 0; i < arguments.length; i++)
                          o[i] = arguments[i];
                        try {
                          return (e = n).call.apply(
                            e,
                            (function (t, r, n) {
                              if (n || 2 === arguments.length)
                                for (var e, o = 0, i = r.length; o < i; o++)
                                  (!e && o in r) ||
                                    (e ||
                                      (e = Array.prototype.slice.call(r, 0, o)),
                                    (e[o] = r[o]));
                              return t.concat(
                                e || Array.prototype.slice.call(r)
                              );
                            })([r.obj], o, !1)
                          );
                        } catch (e) {
                          r.eventBus.emitErrorWithMessage(
                            r.name,
                            "Failed calling ".concat(t),
                            e
                          );
                        }
                      };
                  }
                  return this.errors.push(t), Tt;
                }),
                (t.prototype.reportErrors = function () {
                  this.errors.length > 0 &&
                    this.eventBus.emitErrorWithMessage(
                      this.name,
                      "The functions '".concat(
                        JSON.stringify(this.errors),
                        "' were not provided"
                      )
                    );
                }),
                t
              );
            })(),
            It = function () {};
          function Lt(t, r, n) {
            return e.strEqualsIgnoreCase(r, pt) ? It : t.wrap(n);
          }
          function kt(t, r, n) {
            return e.strEqualsIgnoreCase(r, ht) ? It : Lt(t, r, n);
          }
          var Bt = (function () {
              function t(t, r) {
                this.minimalFunctions = {
                  getCookie: Lt(r, t, "getCookie"),
                  getDataFromLocalStorage: Lt(r, t, "getDataFromLocalStorage"),
                  localStorageIsEnabled: kt(r, t, "localStorageIsEnabled"),
                };
              }
              return (
                (t.make = function (r, n, e) {
                  var o = new Dt(n, "ReadOnlyStorageHandler", e),
                    i = new t(r, o);
                  return o.reportErrors(), i;
                }),
                (t.prototype.localStorageIsEnabled = function () {
                  return !!this.minimalFunctions.localStorageIsEnabled();
                }),
                (t.prototype.getCookie = function (t) {
                  return this.minimalFunctions.getCookie(t) || null;
                }),
                (t.prototype.getDataFromLocalStorage = function (t) {
                  return (
                    this.minimalFunctions.getDataFromLocalStorage(t) || null
                  );
                }),
                t
              );
            })(),
            Mt = (function (t) {
              function r(r, n) {
                var e = t.call(this, r, n) || this;
                return (
                  (e.storageStrategy = r),
                  (e.functions = {
                    setCookie: kt(n, r, "setCookie"),
                    removeDataFromLocalStorage: kt(
                      n,
                      r,
                      "removeDataFromLocalStorage"
                    ),
                    setDataInLocalStorage: kt(n, r, "setDataInLocalStorage"),
                    findSimilarCookies: Lt(n, r, "findSimilarCookies"),
                  }),
                  e
                );
              }
              return (
                a(r, t),
                (r.make = function (t, n, e) {
                  var o = new Dt(n, "StorageHandler", e),
                    i = new r(t, o);
                  return o.reportErrors(), i;
                }),
                (r.prototype.setCookie = function (t, r, n, e, o) {
                  this.functions.setCookie(t, r, n, e, o);
                }),
                (r.prototype.setDataInLocalStorage = function (t, r) {
                  this.functions.setDataInLocalStorage(t, r);
                }),
                (r.prototype.removeDataFromLocalStorage = function (t) {
                  this.functions.removeDataFromLocalStorage(t);
                }),
                (r.prototype.findSimilarCookies = function (t) {
                  return this.functions.findSimilarCookies(t) || [];
                }),
                r
              );
            })(Bt),
            Nt = (function (t) {
              function r(r) {
                var n = t.call(this, r) || this;
                return (n.name = "ParseError"), n;
              }
              return a(r, t), r;
            })(Error),
            Pt = (function () {
              function t(t) {
                (this.handler = t.storageHandler),
                  (this.cookieDomain = t.cookieDomain),
                  (this.eventBus = t.eventBus);
              }
              return (
                (t.prototype.deleteCookie = function (t) {
                  this.handler.setCookie(
                    t,
                    "",
                    new Date(0),
                    "Lax",
                    this.cookieDomain
                  );
                }),
                (t.prototype.parseMetaRecord = function (t) {
                  var r,
                    n = JSON.parse(t);
                  if (!e.isObject(n))
                    throw new Nt("Meta record is not an object");
                  if ("e" in n && ((r = new Date(n.e)), isNaN(r.getTime())))
                    throw new Nt("Invalid expiresAt");
                  if (!("w" in n)) throw new Nt("Missing writtenAt");
                  var o = new Date(n.w);
                  if (isNaN(o.getTime())) throw new Nt("Invalid writtenAt");
                  return { expiresAt: r, writtenAt: o };
                }),
                (t.prototype.serializeMetaRecord = function (t) {
                  var r;
                  return (
                    t.expiresAt && (r = t.expiresAt.getTime()),
                    JSON.stringify({ w: t.writtenAt.getTime(), e: r })
                  );
                }),
                (t.prototype.getCookieRecord = function (t, r) {
                  var n,
                    e = this.handler.getCookie(r);
                  if (!e || 0 === e.length) return null;
                  try {
                    n = this.parseMetaRecord(e);
                  } catch (n) {
                    return (
                      this.eventBus.emitErrorWithMessage(
                        "Cache",
                        "Failed reading meta from cookies",
                        n
                      ),
                      this.deleteCookie(t),
                      this.deleteCookie(r),
                      null
                    );
                  }
                  var o = n.expiresAt;
                  if (o && o.getTime() <= Date.now()) return null;
                  var i = this.handler.getCookie(t);
                  return i ? { data: i, meta: n } : null;
                }),
                (t.prototype.getLSRecord = function (t, r) {
                  var n,
                    e = this.handler.getDataFromLocalStorage(r);
                  if (!e || 0 === e.length) return null;
                  try {
                    n = this.parseMetaRecord(e);
                  } catch (n) {
                    return (
                      this.eventBus.emitErrorWithMessage(
                        "Cache",
                        "Failed reading meta from ls",
                        n
                      ),
                      this.handler.removeDataFromLocalStorage(t),
                      this.handler.removeDataFromLocalStorage(r),
                      null
                    );
                  }
                  var o = n.expiresAt;
                  if (o && o.getTime() <= Date.now())
                    return (
                      this.handler.removeDataFromLocalStorage(t),
                      this.handler.removeDataFromLocalStorage(r),
                      null
                    );
                  var i = this.handler.getDataFromLocalStorage(t);
                  return i ? { data: i, meta: n } : null;
                }),
                (t.prototype.get = function (t) {
                  var r = Ft(t),
                    n = this.getCookieRecord(t, r),
                    e = this.getLSRecord(t, r);
                  return n && e
                    ? n.meta.writtenAt.getTime() === e.meta.writtenAt.getTime()
                      ? n
                      : n.meta.writtenAt > e.meta.writtenAt
                      ? (this.handler.setDataInLocalStorage(t, n.data),
                        this.handler.setDataInLocalStorage(
                          r,
                          this.serializeMetaRecord(n.meta)
                        ),
                        n)
                      : (this.handler.setCookie(
                          t,
                          e.data,
                          e.meta.expiresAt,
                          "Lax",
                          this.cookieDomain
                        ),
                        this.handler.setCookie(
                          r,
                          this.serializeMetaRecord(e.meta),
                          e.meta.expiresAt,
                          "Lax",
                          this.cookieDomain
                        ),
                        e)
                    : n
                    ? (this.handler.setDataInLocalStorage(t, n.data),
                      this.handler.setDataInLocalStorage(
                        r,
                        this.serializeMetaRecord(n.meta)
                      ),
                      n)
                    : e
                    ? (this.handler.setCookie(
                        t,
                        e.data,
                        e.meta.expiresAt,
                        "Lax",
                        this.cookieDomain
                      ),
                      this.handler.setCookie(
                        r,
                        this.serializeMetaRecord(e.meta),
                        e.meta.expiresAt,
                        "Lax",
                        this.cookieDomain
                      ),
                      e)
                    : null;
                }),
                (t.prototype.set = function (t, r, n) {
                  var o = Ft(t),
                    i = this.serializeMetaRecord({
                      writtenAt: new Date(),
                      expiresAt: n,
                    });
                  this.handler.setDataInLocalStorage(t, r),
                    this.handler.setDataInLocalStorage(o, i);
                  var a = n || e.expiresInDays(730);
                  this.handler.setCookie(t, r, a, "Lax", this.cookieDomain),
                    this.handler.setCookie(o, i, a, "Lax", this.cookieDomain);
                }),
                t
              );
            })();
          function Ft(t) {
            return "".concat(t, "_meta");
          }
          var Ht = (function () {
              function t(t, r) {
                var n = new Dt(t, "CallHandler", r);
                (this.functions = {
                  ajaxGet: n.wrap("ajaxGet"),
                  pixelGet: n.wrap("pixelGet"),
                }),
                  n.reportErrors();
              }
              return (
                (t.prototype.ajaxGet = function (t, r, n, e) {
                  this.functions.ajaxGet(t, r, n, e);
                }),
                (t.prototype.pixelGet = function (t, r) {
                  this.functions.pixelGet(t, r);
                }),
                t
              );
            })(),
            Ut = {};
          function Zt(t, r, n, o) {
            if (t && e.isObject(t))
              if ("config" in t)
                o.emitErrorWithMessage(
                  "StrayConfig",
                  "Received a config after LC has already been initialised",
                  new Error(JSON.stringify(t))
                );
              else {
                var i = new J(n, o),
                  a = i.combineWith({ eventSource: t });
                Ut.hashedEmail = Ut.hashedEmail || a.data.hashedEmail;
                var u = Z({ eventSource: t }, Ut);
                r.sendAjax(i.combineWith(u), {
                  onPreSend: function () {
                    return o.emit(y, "0");
                  },
                  onLoad: function () {
                    return o.emit(v, n);
                  },
                });
              }
            else
              o.emitErrorWithMessage(
                "EventNotAnObject",
                "Received event was not an object",
                new Error(t)
              );
          }
          function Vt(t, r, n, o) {
            try {
              var i = u(u({}, nt(t, o)), {
                  identifiersToResolve: t.identifiersToResolve || [],
                  contextSelectors: t.contextSelectors || "",
                  contextElementsLength: t.contextElementsLength || 0,
                }),
                a = new Ht(n, o),
                c = (function (t) {
                  return u(u({}, t), {
                    pageUrl: Y(),
                    referrer:
                      (void 0 === r && (r = window),
                      $(function () {
                        return r.top.document.referrer;
                      })),
                    contextElements: X(
                      t.privacyMode,
                      t.contextSelectors,
                      t.contextElementsLength
                    ),
                  });
                  var r;
                })(dt(rt(i))),
                s = Mt.make(c.storageStrategy, r, o),
                f = (function (t) {
                  return function (r) {
                    return u(u({}, r), { cookieDomain: ft(t) });
                  };
                })(s)(c),
                l = new Pt({
                  storageHandler: s,
                  eventBus: o,
                  cookieDomain: f.cookieDomain,
                }),
                p = At(
                  l,
                  s
                )(
                  (function (t, r) {
                    return function (n) {
                      function o(t, n) {
                        try {
                          return n();
                        } catch (n) {
                          return (
                            r.emitErrorWithMessage("DecisionsResolve", t, n), []
                          );
                        }
                      }
                      var i = o(
                          "Error while extracting new decision ids",
                          function () {
                            var t;
                            return []
                              .concat(
                                (n.pageUrl &&
                                  ((t = n.pageUrl), B(M(t), "li_did"))) ||
                                  []
                              )
                              .map(e.trim)
                              .filter(mt)
                              .filter(e.isUUID)
                              .filter(gt);
                          }
                        ),
                        a = o(
                          "Error while retrieving stored decision ids",
                          function () {
                            return t
                              .findSimilarCookies(yt)
                              .map(e.trim)
                              .filter(mt)
                              .filter(e.isUUID);
                          }
                        );
                      return (
                        i.forEach(function (e) {
                          try {
                            (o = e) &&
                              t.setCookie(
                                "".concat(yt).concat(o),
                                o,
                                vt,
                                "Lax",
                                n.cookieDomain
                              );
                          } catch (e) {
                            r.emitErrorWithMessage(
                              "DecisionsResolve",
                              "Error while storing new decision id",
                              e
                            );
                          }
                          var o;
                        }),
                        u(u({}, n), { decisionIds: i.concat(a).filter(gt) })
                      );
                    };
                  })(
                    s,
                    o
                  )(
                    (function (t, r) {
                      return function (n) {
                        try {
                          return u(
                            u({}, n),
                            (function (t, r) {
                              for (
                                var n = [], o = [], i = 0;
                                i < t.length;
                                i++
                              ) {
                                var a = t[i],
                                  u =
                                    r.getCookie(a) ||
                                    r.getDataFromLocalStorage(a);
                                if (u) {
                                  var c = D(e.safeToString(u));
                                  n.push({
                                    name: a,
                                    value: c.stringWithoutRawEmails,
                                  }),
                                    (o = o.concat(c.hashesFromOriginalString));
                                }
                              }
                              return {
                                retrievedIdentifiers: n,
                                hashesFromIdentifiers: tt(o),
                              };
                            })(
                              (function (t) {
                                var r = [];
                                t &&
                                  (e.isArray(t)
                                    ? (r = t)
                                    : e.isString(t) && (r = t.split(",")));
                                for (var n = 0; n < r.length; n++)
                                  r[n] = r[n].trim();
                                return r;
                              })(n.identifiersToResolve),
                              t
                            )
                          );
                        } catch (t) {
                          return (
                            r.emitError("IdentifiersEnricher", t),
                            u(u({}, n), {
                              retrievedIdentifiers: [],
                              hashesFromIdentifiers: [],
                            })
                          );
                        }
                      };
                    })(
                      s,
                      o
                    )(f)
                  )
                ),
                d = new h({
                  collectorUrl: i.collectorUrl,
                  ajaxTimeout: i.ajaxTimeout,
                  eventBus: o,
                  callHandler: a,
                });
              !(function (t, r, n) {
                try {
                  n.on(e.ERRORS_CHANNEL, function (o) {
                    var i;
                    r.sendPixel(
                      new J(
                        u(
                          u({}, t),
                          ((i = o),
                          e.isRecord(i)
                            ? {
                                errorDetails: {
                                  message: Rt(i.message) || "",
                                  name: Rt(i.name) || "",
                                  stackTrace: Rt(i.stack),
                                  lineNumber: Ct(i.lineNumber),
                                  columnNumber: Ct(i.columnNumber),
                                  fileName: Rt(i.fileName),
                                },
                              }
                            : jt)
                        ),
                        n
                      )
                    );
                  });
                } catch (t) {
                  console.error("handlers.error.register", t);
                }
              })(p, d, o);
              var v = new et(p, a, o),
                y = function () {
                  for (var t = [], r = 0; r < arguments.length; r++)
                    t[r] = arguments[r];
                  return (function (t, r, n, o) {
                    try {
                      t.forEach(function (t) {
                        var i = t;
                        e.isArray(i)
                          ? i.forEach(function (t) {
                              return Zt(t, r, n, o);
                            })
                          : Zt(i, r, n, o);
                      });
                    } catch (t) {
                      console.error("Error sending events", t),
                        o.emitErrorWithMessage(
                          "LCPush",
                          "Failed sending an event",
                          t
                        );
                    }
                  })(t, d, p, o);
                };
              return {
                push: y,
                fire: function () {
                  return y({});
                },
                peopleVerifiedId: p.peopleVerifiedId,
                ready: !0,
                resolve: v.resolve.bind(v),
                resolutionCallUrl: v.getUrl.bind(v),
                config: i,
                eventBus: o,
                storageHandler: s,
                cache: l,
              };
            } catch (t) {
              console.error(t),
                o.emitErrorWithMessage(
                  "LCConstruction",
                  "Failed to build LC",
                  t
                );
            }
          }
          function zt(t, r, n, o) {
            var i,
              a = (e.isObject(t) && t) || {},
              u = o || at();
            try {
              i = a.globalVarName
                ? (function (t, r, n, o) {
                    var i = window[t.globalVarName] || [],
                      a =
                        (function (t) {
                          try {
                            if (
                              window &&
                              window[t.globalVarName] &&
                              window[t.globalVarName].ready
                            ) {
                              var r =
                                window[t.globalVarName].config &&
                                (function (t, r) {
                                  if (
                                    t.appId !== r.appId ||
                                    t.wrapperName !== r.wrapperName ||
                                    t.collectorUrl !== r.collectorUrl
                                  )
                                    return {
                                      appId: [t.appId, r.appId],
                                      wrapperName: [
                                        t.wrapperName,
                                        r.wrapperName,
                                      ],
                                      collectorUrl: [
                                        t.collectorUrl,
                                        r.collectorUrl,
                                      ],
                                    };
                                })(window[t.globalVarName].config, t);
                              if (r) {
                                var n = new Error();
                                (n.name = "ConfigSent"),
                                  (n.message =
                                    "Additional configuration received");
                                var e = ut(t.globalVarName);
                                (window[t.globalVarName].eventBus = e),
                                  e.emitErrorWithMessage(
                                    "LCDuplication",
                                    JSON.stringify(r),
                                    n
                                  );
                              }
                              return window[t.globalVarName];
                            }
                          } catch (t) {
                            console.error("Could not initialize error bus");
                          }
                        })(t) ||
                        Vt(t, r, n, o) ||
                        i;
                    if (e.isArray(i))
                      for (var u = 0; u < i.length; u++) a.push(i[u]);
                    return (
                      (window[a.config.globalVarName] = a),
                      (window.liQ_instances = window.liQ_instances || []),
                      0 ===
                        window.liQ_instances.filter(function (t) {
                          return (
                            t.config.globalVarName === a.config.globalVarName
                          );
                        }).length && window.liQ_instances.push(a),
                      a
                    );
                  })(a, r, n, u)
                : (function (t, r, n, e) {
                    var o = Vt(t, r, n, e);
                    return (
                      (window.liQ_instances = window.liQ_instances || []),
                      window.liQ_instances.push(o),
                      o
                    );
                  })(a, r, n, u);
            } catch (t) {
              console.error(t),
                u.emitErrorWithMessage(
                  "LCConstruction",
                  "Failed to build LC",
                  t
                );
            }
            return i;
          }
          function Wt(t, r) {
            for (
              var n,
                o = e.isArray(t) ? t : e.safeToString(t).split(","),
                i = [],
                a = 0;
              a < o.length;
              a++
            ) {
              var u = e.trim(o[a]),
                c = r.getCookie(u) || r.getDataFromLocalStorage(u);
              !c ||
                ((n = e.safeToString(c)), /\S+(@|%40)\S+\.\S+/.test(n)) ||
                T(e.safeToString(c)) ||
                i.push({ name: u, value: e.safeToString(c) });
            }
            return i;
          }
          function qt(t, r, n, e, o) {
            try {
              var i = u(u({}, nt(t, e)), {
                  identifiersToResolve: t.identifiersToResolve || [],
                }),
                a = dt(rt(i)),
                c = Bt.make(a.storageStrategy, r, e),
                s = new Ht(n, e),
                f = (function (t, r) {
                  return function (n) {
                    try {
                      return u(u({}, n), {
                        retrievedIdentifiers: Wt(n.identifiersToResolve, t),
                      });
                    } catch (t) {
                      return (
                        r.emitError("IdentifiersEnrich", t),
                        u(u({}, n), { retrievedIdentifiers: [] })
                      );
                    }
                  };
                })(
                  c,
                  e
                )(
                  (function (t, r) {
                    return function (n) {
                      try {
                        return u(u({}, n), {
                          peopleVerifiedId:
                            n.peopleVerifiedId ||
                            t.getDataFromLocalStorage(g) ||
                            void 0,
                        });
                      } catch (t) {
                        return r.emitError("PeopleVerifiedEnrich", t), n;
                      }
                    };
                  })(
                    c,
                    e
                  )(a)
                ),
                l = new et(f, s, e);
              return {
                push: function (t) {
                  return o(t);
                },
                fire: function () {
                  return o({});
                },
                peopleVerifiedId: f.peopleVerifiedId,
                ready: !0,
                resolve: l.resolve.bind(l),
                resolutionCallUrl: l.getUrl.bind(l),
                config: i,
                eventBus: e,
                storageHandler: c,
              };
            } catch (t) {
              console.error(t);
            }
          }
          function Gt(t, r, n, o) {
            var i = (e.isObject(t) && t) || {},
              a = o || at();
            try {
              return i.globalVarName
                ? (function (t, r, n, e) {
                    var o = (window[t.globalVarName] =
                        window[t.globalVarName] || []),
                      i = qt(t, r, n, e, o.push.bind(o));
                    return (
                      (window.liQ_instances = window.liQ_instances || []),
                      0 ===
                        window.liQ_instances.filter(function (t) {
                          return (
                            t.config.globalVarName === i.config.globalVarName
                          );
                        }).length && window.liQ_instances.push(i),
                      i
                    );
                  })(i, r, n, a)
                : (function (t, r, n, e) {
                    var o = qt(t, r, n, e, function () {});
                    return (
                      (window.liQ_instances = window.liQ_instances || []),
                      window.liQ_instances.push(o),
                      o
                    );
                  })(i, r, n, a);
            } catch (t) {
              console.error(t);
            }
            return {};
          }
          (r.LiveConnect = function (t, r, n, o, i) {
            var a = "minimal" === o,
              u = i || at();
            return (a ? Gt : zt)((e.isObject(t) && t) || {}, r, n, u);
          }),
            (r.MinimalLiveConnect = Gt),
            (r.StandardLiveConnect = zt),
            (r.StorageHandlerBackedCache = Pt),
            (r.WrappedStorageHandler = Mt),
            (r.consts = b),
            (r.eventBus = ct);
        },
        30907: function (t, r, n) {
          function e(t, r) {
            (null == r || r > t.length) && (r = t.length);
            for (var n = 0, e = new Array(r); n < r; n++) e[n] = t[n];
            return e;
          }
          n.d(r, {
            Z: function () {
              return e;
            },
          });
        },
        97326: function (t, r, n) {
          function e(t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          }
          n.d(r, {
            Z: function () {
              return e;
            },
          });
        },
        15861: function (t, r, n) {
          function e(t, r, n, e, o, i, a) {
            try {
              var u = t[i](a),
                c = u.value;
            } catch (t) {
              return void n(t);
            }
            u.done ? r(c) : Promise.resolve(c).then(e, o);
          }
          function o(t) {
            return function () {
              var r = this,
                n = arguments;
              return new Promise(function (o, i) {
                var a = t.apply(r, n);
                function u(t) {
                  e(a, o, i, u, c, "next", t);
                }
                function c(t) {
                  e(a, o, i, u, c, "throw", t);
                }
                u(void 0);
              });
            };
          }
          n.d(r, {
            Z: function () {
              return o;
            },
          });
        },
        15671: function (t, r, n) {
          function e(t, r) {
            if (!(t instanceof r))
              throw new TypeError("Cannot call a class as a function");
          }
          n.d(r, {
            Z: function () {
              return e;
            },
          });
        },
        1519: function (t, r, n) {
          function e(t, r, n) {
            if (!r.has(t))
              throw new TypeError(
                "attempted to " + n + " private field on non-instance"
              );
            return r.get(t);
          }
          n.d(r, {
            Z: function () {
              return e;
            },
          });
        },
        86033: function (t, r, n) {
          n.d(r, {
            Z: function () {
              return o;
            },
          });
          var e = n(1519);
          function o(t, r) {
            return (function (t, r) {
              return r.get ? r.get.call(t) : r.value;
            })(t, (0, e.Z)(t, r, "get"));
          }
        },
        13092: function (t, r, n) {
          n.d(r, {
            Z: function () {
              return o;
            },
          });
          var e = n(1519);
          function o(t, r, n) {
            return (
              (function (t, r, n) {
                if (r.set) r.set.call(t, n);
                else {
                  if (!r.writable)
                    throw new TypeError(
                      "attempted to set read only private field"
                    );
                  r.value = n;
                }
              })(t, (0, e.Z)(t, r, "set"), n),
              n
            );
          }
        },
        5647: function (t, r, n) {
          if (
            (n.d(r, {
              Z: function () {
                return i;
              },
            }),
            25602 == n.j)
          )
            var e = n(89611);
          if (25602 == n.j) var o = n(78814);
          function i(t, r, n) {
            return (
              (i = (0, o.Z)()
                ? Reflect.construct.bind()
                : function (t, r, n) {
                    var o = [null];
                    o.push.apply(o, r);
                    var i = new (Function.bind.apply(t, o))();
                    return n && (0, e.Z)(i, n.prototype), i;
                  }),
              i.apply(null, arguments)
            );
          }
        },
        43144: function (t, r, n) {
          function e(t, r) {
            for (var n = 0; n < r.length; n++) {
              var e = r[n];
              (e.enumerable = e.enumerable || !1),
                (e.configurable = !0),
                "value" in e && (e.writable = !0),
                Object.defineProperty(t, e.key, e);
            }
          }
          function o(t, r, n) {
            return (
              r && e(t.prototype, r),
              n && e(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          }
          n.d(r, {
            Z: function () {
              return o;
            },
          });
        },
        4942: function (t, r, n) {
          function e(t, r, n) {
            return (
              r in t
                ? Object.defineProperty(t, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[r] = n),
              t
            );
          }
          n.d(r, {
            Z: function () {
              return e;
            },
          });
        },
        88301: function (t, r, n) {
          if (
            (n.d(r, {
              Z: function () {
                return o;
              },
            }),
            25602 == n.j)
          )
            var e = n(18415);
          function o() {
            return (
              (o =
                "undefined" != typeof Reflect && Reflect.get
                  ? Reflect.get.bind()
                  : function (t, r, n) {
                      var o = (0, e.Z)(t, r);
                      if (o) {
                        var i = Object.getOwnPropertyDescriptor(o, r);
                        return i.get
                          ? i.get.call(arguments.length < 3 ? t : n)
                          : i.value;
                      }
                    }),
              o.apply(this, arguments)
            );
          }
        },
        61120: function (t, r, n) {
          function e(t) {
            return (
              (e = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                  }),
              e(t)
            );
          }
          n.d(r, {
            Z: function () {
              return e;
            },
          });
        },
        60136: function (t, r, n) {
          if (
            (n.d(r, {
              Z: function () {
                return o;
              },
            }),
            25602 == n.j)
          )
            var e = n(89611);
          function o(t, r) {
            if ("function" != typeof r && null !== r)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(r && r.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              r && (0, e.Z)(t, r);
          }
        },
        48989: function (t, r, n) {
          function e(t) {
            return -1 !== Function.toString.call(t).indexOf("[native code]");
          }
          n.d(r, {
            Z: function () {
              return e;
            },
          });
        },
        78814: function (t, r, n) {
          function e() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          n.d(r, {
            Z: function () {
              return e;
            },
          });
        },
        45987: function (t, r, n) {
          if (
            (n.d(r, {
              Z: function () {
                return o;
              },
            }),
            25602 == n.j)
          )
            var e = n(63366);
          function o(t, r) {
            if (null == t) return {};
            var n,
              o,
              i = (0, e.Z)(t, r);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(t);
              for (o = 0; o < a.length; o++)
                (n = a[o]),
                  r.indexOf(n) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(t, n) &&
                      (i[n] = t[n]));
            }
            return i;
          }
        },
        63366: function (t, r, n) {
          function e(t, r) {
            if (null == t) return {};
            var n,
              e,
              o = {},
              i = Object.keys(t);
            for (e = 0; e < i.length; e++)
              (n = i[e]), r.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          }
          n.d(r, {
            Z: function () {
              return e;
            },
          });
        },
        82963: function (t, r, n) {
          if (
            (n.d(r, {
              Z: function () {
                return i;
              },
            }),
            25602 == n.j)
          )
            var e = n(71002);
          if (25602 == n.j) var o = n(97326);
          function i(t, r) {
            if (r && ("object" === (0, e.Z)(r) || "function" == typeof r))
              return r;
            if (void 0 !== r)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return (0, o.Z)(t);
          }
        },
        89611: function (t, r, n) {
          function e(t, r) {
            return (
              (e = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, r) {
                    return (t.__proto__ = r), t;
                  }),
              e(t, r)
            );
          }
          n.d(r, {
            Z: function () {
              return e;
            },
          });
        },
        70885: function (t, r, n) {
          n.d(r, {
            Z: function () {
              return o;
            },
          });
          var e = n(40181);
          function o(t, r) {
            return (
              (function (t) {
                if (Array.isArray(t)) return t;
              })(t) ||
              (function (t, r) {
                var n =
                  null == t
                    ? null
                    : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                      t["@@iterator"];
                if (null != n) {
                  var e,
                    o,
                    i = [],
                    a = !0,
                    u = !1;
                  try {
                    for (
                      n = n.call(t);
                      !(a = (e = n.next()).done) &&
                      (i.push(e.value), !r || i.length !== r);
                      a = !0
                    );
                  } catch (t) {
                    (u = !0), (o = t);
                  } finally {
                    try {
                      a || null == n.return || n.return();
                    } finally {
                      if (u) throw o;
                    }
                  }
                  return i;
                }
              })(t, r) ||
              (0, e.Z)(t, r) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          }
        },
        18415: function (t, r, n) {
          if (
            (n.d(r, {
              Z: function () {
                return o;
              },
            }),
            25602 == n.j)
          )
            var e = n(61120);
          function o(t, r) {
            for (
              ;
              !Object.prototype.hasOwnProperty.call(t, r) &&
              null !== (t = (0, e.Z)(t));

            );
            return t;
          }
        },
        30168: function (t, r, n) {
          function e(t, r) {
            return (
              r || (r = t.slice(0)),
              Object.freeze(
                Object.defineProperties(t, { raw: { value: Object.freeze(r) } })
              )
            );
          }
          n.d(r, {
            Z: function () {
              return e;
            },
          });
        },
        42982: function (t, r, n) {
          n.d(r, {
            Z: function () {
              return i;
            },
          });
          var e = n(30907);
          var o = n(40181);
          function i(t) {
            return (
              (function (t) {
                if (Array.isArray(t)) return (0, e.Z)(t);
              })(t) ||
              (function (t) {
                if (
                  ("undefined" != typeof Symbol &&
                    null != t[Symbol.iterator]) ||
                  null != t["@@iterator"]
                )
                  return Array.from(t);
              })(t) ||
              (0, o.Z)(t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          }
        },
        71002: function (t, r, n) {
          function e(t) {
            return (
              (e =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        "function" == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? "symbol"
                        : typeof t;
                    }),
              e(t)
            );
          }
          n.d(r, {
            Z: function () {
              return e;
            },
          });
        },
        40181: function (t, r, n) {
          n.d(r, {
            Z: function () {
              return o;
            },
          });
          var e = n(30907);
          function o(t, r) {
            if (t) {
              if ("string" == typeof t) return (0, e.Z)(t, r);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? (0, e.Z)(t, r)
                  : void 0
              );
            }
          }
        },
        7112: function (t, r, n) {
          if (
            (n.d(r, {
              Z: function () {
                return u;
              },
            }),
            25602 == n.j)
          )
            var e = n(61120);
          if (25602 == n.j) var o = n(89611);
          if (25602 == n.j) var i = n(48989);
          if (25602 == n.j) var a = n(5647);
          function u(t) {
            var r = "function" == typeof Map ? new Map() : void 0;
            return (
              (u = function (t) {
                if (null === t || !(0, i.Z)(t)) return t;
                if ("function" != typeof t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                if (void 0 !== r) {
                  if (r.has(t)) return r.get(t);
                  r.set(t, n);
                }
                function n() {
                  return (0, a.Z)(t, arguments, (0, e.Z)(this).constructor);
                }
                return (
                  (n.prototype = Object.create(t.prototype, {
                    constructor: {
                      value: n,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                  (0, o.Z)(n, t)
                );
              }),
              u(t)
            );
          }
        },
        96475: function (t, r, n) {
          function e(t, r, n) {
            r.split && (r = r.split("."));
            for (
              var e, o, i = 0, a = r.length, u = t;
              i < a &&
              "__proto__" !== (o = r[i++]) &&
              "constructor" !== o &&
              "prototype" !== o;

            )
              u = u[o] =
                i === a
                  ? n
                  : typeof (e = u[o]) == typeof r
                  ? e
                  : 0 * r[i] != 0 || ~("" + r[i]).indexOf(".")
                  ? {}
                  : [];
          }
          n.d(r, {
            N: function () {
              return e;
            },
          });
        },
        92858: function (t, r, n) {
          n.d(r, {
            VW: function () {
              return o;
            },
          });
          var e = n(51610);
          const o = e.VW;
          e.gn, e.Vl, e.vH, e.YB;
        },
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [79270],
      {
        68304: function (n, s, d) {
          d.d(s, {
            _: function () {
              return i;
            },
          });
          var i =
            '!function(){"use strict";window.render=function({ad:d,adUrl:i,width:n,height:e},{mkFrame:o},r){if(!d&&!i)throw{reason:"noAd",message:"Missing ad markup or URL"};{const t=r.document,s={width:n,height:e};i&&!d?s.src=i:s.srcdoc=d,t.body.appendChild(o(t,s))}}}();';
        },
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [17968],
      {
        52712: function (n, t, r) {
          r.d(t, {
            b6: function () {
              return p;
            },
            kX: function () {
              return f;
            },
            m1: function () {
              return s;
            },
            sM: function () {
              return u;
            },
          });
          var e = r(4942),
            a = r(70885),
            c = r(42982),
            o = r(68792);
          function i(n, t) {
            var r = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
              var e = Object.getOwnPropertySymbols(n);
              t &&
                (e = e.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })),
                r.push.apply(r, e);
            }
            return r;
          }
          function l(n) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? i(Object(r), !0).forEach(function (t) {
                    (0, e.Z)(n, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    n,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : i(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      n,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return n;
          }
          var u = 0,
            f = 1,
            s = 2;
          function p(n) {
            var t = n.apiName,
              r = n.apiVersion,
              i = n.apiArgs,
              p =
                void 0 === i
                  ? ["command", "callback", "parameter", "version"]
                  : i,
              v = n.callbackArgs,
              b = void 0 === v ? ["returnValue", "success"] : v,
              d = n.mode,
              O = void 0 === d ? u : d,
              y =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : window,
              g = {},
              m = "".concat(t, "Call"),
              j = "".concat(t, "Return");
            function k(n) {
              var t,
                r =
                  "string" == typeof n.data && n.data.includes(j)
                    ? JSON.parse(n.data)
                    : n.data;
              if (
                null != r &&
                null !== (t = r[j]) &&
                void 0 !== t &&
                t.callId
              ) {
                var e = r[j];
                g.hasOwnProperty(e.callId) &&
                  g[e.callId].apply(
                    g,
                    (0, c.Z)(
                      b.map(function (n) {
                        return e[n];
                      })
                    )
                  );
              }
            }
            function h() {
              for (var n, r = y, e = !1; null != r; ) {
                try {
                  if ("function" == typeof r[t]) {
                    (n = r), (e = !0);
                    break;
                  }
                } catch (n) {}
                try {
                  if (r.frames["".concat(t, "Locator")]) {
                    n = r;
                    break;
                  }
                } catch (n) {}
                if (r === y.top) break;
                r = r.parent;
              }
              return [n, e];
            }
            var w,
              P = h(),
              Z = (0, a.Z)(P, 2),
              D = Z[0],
              E = Z[1];
            if (D)
              return (
                E
                  ? (w = function () {
                      var n =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      return new o.Z(function (r, e) {
                        var o = D[t].apply(
                          D,
                          (0, c.Z)(
                            I(
                              l(
                                l({}, n),
                                {},
                                {
                                  callback:
                                    n.callback || O === s
                                      ? S(n.callback, r, e)
                                      : void 0,
                                }
                              )
                            ).map(function (n) {
                              var t = (0, a.Z)(n, 2);
                              t[0];
                              return t[1];
                            })
                          )
                        );
                        (O === f || (null == n.callback && O === u)) && r(o);
                      });
                    })
                  : (y.addEventListener("message", k, !1),
                    (w = function (n) {
                      var t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                      return new o.Z(function (r, c) {
                        var o = Math.random().toString(),
                          i = (0, e.Z)(
                            {},
                            m,
                            l(
                              l(
                                {},
                                Object.fromEntries(
                                  I(n).filter(function (n) {
                                    return "callback" !== (0, a.Z)(n, 1)[0];
                                  })
                                )
                              ),
                              {},
                              { callId: o }
                            )
                          );
                        (g[o] = S(
                          null == n ? void 0 : n.callback,
                          r,
                          c,
                          (t || null == (null == n ? void 0 : n.callback)) &&
                            function () {
                              delete g[o];
                            }
                        )),
                          D.postMessage(i, "*"),
                          O === f && r();
                      });
                    })),
                Object.assign(w, {
                  isDirect: E,
                  close: function () {
                    !E && y.removeEventListener("message", k);
                  },
                })
              );
            function I(n) {
              return (
                (n = Object.assign({ version: r }, n)),
                p.map(function (t) {
                  return [t, n[t]];
                })
              );
            }
            function S(n, t, r, e) {
              var a = "function" == typeof n;
              return function (c, o) {
                if ((e && e(), O !== f)) {
                  var i = null == o || o ? t : r;
                  i(a ? void 0 : c);
                }
                a && n.apply(this, arguments);
              };
            }
          }
        },
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [35051],
      {
        77337: function (n, t, e) {
          e.d(t, {
            Ji: function () {
              return O;
            },
          });
          var r,
            i = e(70885),
            o = e(4942),
            u = e(50571),
            a = e(74947),
            c = e(34516),
            s = e(64358);
          function f(n) {
            return null != n && 0 !== n;
          }
          function l(n) {
            return (
              ["MspaServiceProviderMode", "Gpc"].some(function (t) {
                return 1 === n[t];
              }) ||
              2 === n.PersonalDataConsents ||
              1 === n.KnownChildSensitiveDataConsents[0] ||
              f(n.KnownChildSensitiveDataConsents[1]) ||
              0 === n.MspaCoveredTransaction
            );
          }
          function v(n, t) {
            return [
              "SensitiveDataProcessingOptOutNotice",
              "SensitiveDataLimitUseNotice",
            ].some(function (e) {
              return n[e] === t;
            });
          }
          function d(n) {
            return (
              l(n) ||
              ["Sale", "Sharing", "TargetedAdvertising"].some(function (t) {
                var e = n["".concat(t, "OptOut")],
                  r = n["".concat(t, "OptOutNotice")];
                return 1 === e || 2 === r || (2 === e && 0 === r);
              }) ||
              2 === n.SharingNotice ||
              (2 === n.SharingOptOut && 0 === n.SharingNotice)
            );
          }
          var g,
            h,
            S,
            p =
              ((g = [6, 7, 9, 10, 12].map(function (n) {
                return --n;
              })),
              (h = Array.from(Array(12).keys()).filter(function (n) {
                return 7 !== n;
              })),
              (S = h.filter(function (n) {
                return !g.includes(n);
              })),
              function (n) {
                return (
                  d(n) ||
                  v(n, 2) ||
                  g.some(function (t) {
                    return f(n.SensitiveDataProcessing[t]);
                  }) ||
                  S.some(function (t) {
                    return 1 === n.SensitiveDataProcessing[t];
                  }) ||
                  (v(n, 0) &&
                    h.some(function (t) {
                      return 2 === n.SensitiveDataProcessing[t];
                    }))
                );
              });
          var D =
            ((r = {}),
            (0, o.Z)(r, a.K$, d),
            (0, o.Z)(r, a.EL, d),
            (0, o.Z)(r, a.S5, p),
            (0, o.Z)(r, a.g0, function (n) {
              var t = n.SensitiveDataProcessing[7];
              return 1 === t || l(n) || v(n, 2) || (v(n, 0) && 2 === t);
            }),
            r);
          function m(n, t, e) {
            var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : function () {
                    var n;
                    return null === (n = c.TJ.getConsentData()) || void 0 === n
                      ? void 0
                      : n.applicableSections;
                  };
            return function () {
              if (
                r().some(function (t) {
                  return n.includes(t);
                })
              ) {
                var i = t();
                if (null == i)
                  return { allow: !1, reason: "consent data not available" };
                if (e(i)) return { allow: !1 };
              }
            };
          }
          function C(n) {
            return null == n
              ? n
              : n.reduceRight(function (n, t) {
                  return Object.assign(t, n);
                }, {});
          }
          function O(n, t) {
            var e =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : function (n) {
                      return n;
                    },
              r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : D,
              o =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : u.oB,
              a =
                arguments.length > 5 && void 0 !== arguments[5]
                  ? arguments[5]
                  : function () {
                      return c.TJ.getConsentData();
                    },
              f = [],
              l = "MSPA (GPP '"
                .concat(n, "' for section")
                .concat(t.length > 1 ? "s" : "", " ")
                .concat(t.join(", "), ")");
            return (
              (0, s.logInfo)("Enabling activity controls for ".concat(l)),
              Object.entries(r).forEach(function (r) {
                var u = (0, i.Z)(r, 2),
                  c = u[0],
                  s = u[1];
                f.push(
                  o(
                    c,
                    l,
                    m(
                      t,
                      function () {
                        var t, r;
                        return e(
                          C(
                            null === (t = a()) ||
                              void 0 === t ||
                              null === (r = t.parsedSections) ||
                              void 0 === r
                              ? void 0
                              : r[n]
                          )
                        );
                      },
                      s,
                      function () {
                        var n;
                        return (
                          (null === (n = a()) || void 0 === n
                            ? void 0
                            : n.applicableSections) || []
                        );
                      }
                    )
                  )
                );
              }),
              function () {
                return f.forEach(function (n) {
                  return n();
                });
              }
            );
          }
        },
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [21266],
      {
        55630: function (n, e, t) {
          var o,
            r,
            i,
            a,
            c,
            s,
            l = t(71002),
            u = t(78640),
            d = t(64358),
            p = t(96475),
            g = t(3193),
            f = t(34516),
            m = t(34614),
            v = t(99128),
            b = t(26372),
            C = t(54078),
            y = t(52712),
            M = !1,
            S = {
              iab: function (n) {
                var e = n.onSuccess,
                  t = n.onError,
                  o = n.onEvent;
                var r = (0, y.b6)({
                  apiName: "__tcfapi",
                  apiVersion: 2,
                  apiArgs: ["command", "version", "callback", "parameter"],
                });
                if (!r) return t("TCF2 CMP not found.");
                r.isDirect
                  ? (0, d.logInfo)(
                      "Detected CMP API is directly accessible, calling it now..."
                    )
                  : (0, d.logInfo)(
                      "Detected CMP is outside the current iframe where Prebid.js is located, calling it now..."
                    );
                r({
                  command: "addEventListener",
                  callback: function (n, r) {
                    (0, d.logInfo)("Received a response from CMP", n),
                      r
                        ? (o(n),
                          (!1 !== n.gdprApplies &&
                            "tcloaded" !== n.eventStatus &&
                            "useractioncomplete" !== n.eventStatus) ||
                            k(n, { onSuccess: e, onError: t }))
                        : t(
                            "CMP unable to register callback function.  Please check CMP setup."
                          );
                  },
                });
              },
              static: function (n) {
                var e = n.onSuccess,
                  t = n.onError;
                k(a, { onSuccess: e, onError: t });
              },
            };
          function A(n) {
            var e,
              t,
              i = !1,
              a = null,
              s = !1;
            function l(n) {
              null != a && clearTimeout(a),
                i || null == n || (0 === n ? e() : (a = setTimeout(e, n)));
            }
            function u(e, t, o) {
              if (
                (l(null),
                (i = !0),
                f.rp.setConsentData(e),
                "function" == typeof n)
              ) {
                for (
                  var r = arguments.length,
                    a = new Array(r > 3 ? r - 3 : 0),
                    c = 3;
                  c < r;
                  c++
                )
                  a[c - 3] = arguments[c];
                n.apply(void 0, [t, o].concat(a));
              }
            }
            if ((0, m.q9)(Object.keys(S), o)) {
              var d = {
                onSuccess: function (n) {
                  return u(n, !1);
                },
                onError: function (n) {
                  for (
                    var e = arguments.length,
                      t = new Array(e > 1 ? e - 1 : 0),
                      o = 1;
                    o < e;
                    o++
                  )
                    t[o - 1] = arguments[o];
                  u.apply(void 0, [null, !0, n].concat(t));
                },
                onEvent: function (n) {
                  (t = n), s || ((s = !0), null != c && l(c));
                },
              };
              (e = function () {
                var n = function (n) {
                  u(
                    n,
                    !1,
                    "".concat(
                      s
                        ? "Timeout waiting for user action on CMP"
                        : "CMP did not load",
                      ", continuing auction..."
                    )
                  );
                };
                k(t, {
                  onSuccess: n,
                  onError: function () {
                    return n(E(void 0));
                  },
                });
              }),
                S[o](d),
                (null != c && s) || l(r);
            } else
              u(
                null,
                !1,
                "CMP framework (".concat(
                  o,
                  ") is not a supported framework.  Aborting consentManagement module and resuming auction."
                )
              );
          }
          var P = (0, v.g3)("gdpr", function (n, e) {
            var t;
            (t = function (t, o) {
              if (o) {
                var r = d.logWarn;
                t &&
                  ((r = d.logError),
                  (o = "".concat(
                    o,
                    " Canceling auction as per consentManagement config."
                  )));
                for (
                  var i = arguments.length,
                    a = new Array(i > 2 ? i - 2 : 0),
                    c = 2;
                  c < i;
                  c++
                )
                  a[c - 2] = arguments[c];
                r.apply(void 0, [o].concat(a));
              }
              t
                ? (n.stopTiming(),
                  "function" == typeof e.bidsBackHandler
                    ? e.bidsBackHandler()
                    : (0, d.logError)("Error executing bidsBackHandler"))
                : n.call(this, e);
            }),
              s
                ? ((0, d.logInfo)(
                    "User consent information already known.  Pulling internally stored information..."
                  ),
                  t(!1))
                : A(t);
          });
          function k(n, e) {
            var t,
              o,
              r = e.onSuccess,
              a = e.onError;
            (t = n && "boolean" == typeof n.gdprApplies ? n.gdprApplies : i),
              (o = n && n.tcString),
              "boolean" == typeof t && (!0 !== t || (o && (0, d.isStr)(o)))
                ? r(E(n))
                : a("CMP returned unexpected value during lookup process.", n);
          }
          function E(n) {
            return (
              (s = {
                consentString: n ? n.tcString : void 0,
                vendorData: n || void 0,
                gdprApplies:
                  n && "boolean" == typeof n.gdprApplies ? n.gdprApplies : i,
              }),
              n &&
                n.addtlConsent &&
                (0, d.isStr)(n.addtlConsent) &&
                (s.addtlConsent = n.addtlConsent),
              (s.apiVersion = 2),
              s
            );
          }
          g.vc.getConfig("consentManagement", function (n) {
            return (function (n) {
              if (
                (n = n && (n.gdpr || n.usp || n.gpp ? n.gdpr : n)) &&
                "object" === (0, l.Z)(n)
              ) {
                var e;
                (0, d.isStr)(n.cmpApi)
                  ? (o = n.cmpApi)
                  : ((o = "iab"),
                    (0, d.logInfo)(
                      "consentManagement config did not specify cmp.  Using system default setting (".concat(
                        "iab",
                        ")."
                      )
                    )),
                  (0, d.isNumber)(n.timeout)
                    ? (r = n.timeout)
                    : ((r = 1e4),
                      (0, d.logInfo)(
                        "consentManagement config did not specify timeout.  Using system default setting (".concat(
                          1e4,
                          ")."
                        )
                      )),
                  (c = (0, d.isNumber)(n.actionTimeout)
                    ? n.actionTimeout
                    : null),
                  (i = !0 === n.defaultGdprScope),
                  (0, d.logInfo)(
                    "consentManagement module has been activated..."
                  ),
                  "static" === o &&
                    ((0, d.isPlainObject)(n.consentData)
                      ? (null !=
                          (null === (e = a = n.consentData) || void 0 === e
                            ? void 0
                            : e.getTCData) && (a = a.getTCData),
                        (r = 0))
                      : (0, d.logError)(
                          "consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters."
                        )),
                  M || (0, u.R)().requestBids.before(P, 50),
                  (M = !0),
                  f.rp.enable(),
                  A();
              } else (0, d.logWarn)("consentManagement (gdpr) config not defined, exiting consent manager");
            })(n.consentManagement);
          }),
            C.S.before(function (n, e) {
              return n(
                e.then(function (n) {
                  var e = f.rp.getConsentData();
                  return (
                    e &&
                      ("boolean" == typeof e.gdprApplies &&
                        (0, p.N)(n, "regs.ext.gdpr", e.gdprApplies ? 1 : 0),
                      (0, p.N)(n, "user.ext.consent", e.consentString)),
                    n
                  );
                })
              );
            }),
            (0, b.f8)({
              type: b.Z,
              name: "gdprAddtlConsent",
              fn: function (n, e) {
                var t,
                  o =
                    null === (t = e.gdprConsent) || void 0 === t
                      ? void 0
                      : t.addtlConsent;
                o &&
                  "string" == typeof o &&
                  (0, p.N)(
                    n,
                    "user.ext.ConsentedProvidersSettings.consented_providers",
                    o
                  );
              },
            }),
            (0, u.z)("consentManagement");
        },
      },
      function (n) {
        n.O(0, [25823, 17968, 44877, 79270], function () {
          return (e = 55630), n((n.s = e));
          var e;
        });
        n.O();
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [69168],
      {
        67523: function (n, t, e) {
          var r = e(71002),
            i = e(97326),
            o = e(60136),
            a = e(82963),
            c = e(88301),
            u = e(61120),
            s = e(70885),
            l = e(4942),
            p = e(86033),
            f = e(43144),
            g = e(15671),
            d = e(42982),
            v = e(78640),
            h = e(64358),
            m = e(96475),
            y = e(3193),
            b = e(34516),
            P = e(99128),
            Z = e(54078),
            w = e(52712),
            S = e(68792),
            C = e(16310);
          function O(n) {
            var t = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (n) {
                return !1;
              }
            })();
            return function () {
              var e,
                r = (0, u.Z)(n);
              if (t) {
                var i = (0, u.Z)(this).constructor;
                e = Reflect.construct(r, arguments, i);
              } else e = r.apply(this, arguments);
              return (0, a.Z)(this, e);
            };
          }
          function k(n, t) {
            var e = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(n);
              t &&
                (r = r.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })),
                e.push.apply(e, r);
            }
            return e;
          }
          function M(n) {
            for (var t = 1; t < arguments.length; t++) {
              var e = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? k(Object(e), !0).forEach(function (t) {
                    (0, l.Z)(n, t, e[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    n,
                    Object.getOwnPropertyDescriptors(e)
                  )
                : k(Object(e)).forEach(function (t) {
                    Object.defineProperty(
                      n,
                      t,
                      Object.getOwnPropertyDescriptor(e, t)
                    );
                  });
            }
            return n;
          }
          function j(n, t, e) {
            !(function (n, t) {
              if (t.has(n))
                throw new TypeError(
                  "Cannot initialize the same private elements twice on an object"
                );
            })(n, t),
              t.set(n, e);
          }
          function E(n, t) {
            var e = (function (n, t, e) {
              if (!t.has(n))
                throw new TypeError(
                  "attempted to " + e + " private field on non-instance"
                );
              return t.get(n);
            })(n, t, "set");
            return (function (n, t) {
              if (t.set)
                return (
                  "__destrObj" in t ||
                    (t.__destrObj = {
                      set value(e) {
                        t.set.call(n, e);
                      },
                    }),
                  t.__destrObj
                );
              if (!t.writable)
                throw new TypeError("attempted to set read only private field");
              return t;
            })(n, e);
          }
          var T,
            D,
            G,
            I,
            A = !1;
          function N(n, t) {
            var e = t.onSuccess,
              r = t.onError;
            new S.Z(function (t) {
              return t(n());
            }).then(e, function (n) {
              n instanceof W
                ? r.apply(void 0, [n.message].concat((0, d.Z)(n.args)))
                : r("GPP error:", n);
            });
          }
          var R = "1.0",
            W = (0, f.Z)(function n(t, e) {
              (0, g.Z)(this, n),
                (this.message = t),
                (this.args = null == e ? [] : [e]);
            }),
            _ = new WeakMap(),
            z = new WeakMap(),
            L = new WeakMap(),
            U = (function () {
              function n(t, e) {
                var r = this;
                (0, g.Z)(this, n),
                  j(this, _, { writable: !0, value: void 0 }),
                  j(this, z, { writable: !0, value: void 0 }),
                  j(this, L, { writable: !0, value: [] }),
                  (0, l.Z)(this, "initialized", !1),
                  (this.apiVersion = this.constructor.apiVersion),
                  (this.cmpVersion = e),
                  (this.cmp = e);
                var i = [0, 1].map(function (n) {
                    return function (t) {
                      for (; (0, p.Z)(r, L).length; )
                        (0, p.Z)(r, L).pop()[n](t);
                    };
                  }),
                  o = (0, s.Z)(i, 2);
                (E(this, _).value = o[0]), (E(this, z).value = o[1]);
              }
              return (
                (0, f.Z)(
                  n,
                  [
                    {
                      key: "init",
                      value: function (n) {
                        var t = this,
                          e = this.updateWhenReady(n);
                        return (
                          this.initialized ||
                            ((this.initialized = !0),
                            this.cmp({
                              command: "addEventListener",
                              callback: function (n, e) {
                                var r;
                                null == e || e
                                  ? "error" ===
                                    (null == n ||
                                    null === (r = n.pingData) ||
                                    void 0 === r
                                      ? void 0
                                      : r.cmpStatus)
                                    ? (0, p.Z)(t, z).call(
                                        t,
                                        new W(
                                          'CMP status is "error"; please check CMP setup',
                                          n
                                        )
                                      )
                                    : t.isCMPReady(
                                        (null == n ? void 0 : n.pingData) || {}
                                      ) &&
                                      t.events.includes(
                                        null == n ? void 0 : n.eventName
                                      ) &&
                                      (0, p.Z)(t, _).call(
                                        t,
                                        t.updateConsent(n.pingData)
                                      )
                                  : (0, p.Z)(t, z).call(
                                      t,
                                      new W(
                                        "Received error response from CMP",
                                        n
                                      )
                                    );
                              },
                            })),
                          e
                        );
                      },
                    },
                    {
                      key: "refresh",
                      value: function () {
                        return this.cmp({ command: "ping" }).then(
                          this.updateWhenReady.bind(this)
                        );
                      },
                    },
                    {
                      key: "updateConsent",
                      value: function (n) {
                        return this.getGPPData(n)
                          .then(function (n) {
                            if (null == n || (0, h.isEmpty)(n))
                              throw new W(
                                "Received empty response from CMP",
                                n
                              );
                            return q(n);
                          })
                          .then(function (n) {
                            return (
                              (0, h.logInfo)(
                                "Retrieved GPP consent from CMP:",
                                n
                              ),
                              n
                            );
                          });
                      },
                    },
                    {
                      key: "nextUpdate",
                      value: function () {
                        var n = this;
                        return new S.Z(function (t, e) {
                          (0, p.Z)(n, L).push([t, e]);
                        });
                      },
                    },
                    {
                      key: "updateWhenReady",
                      value: function (n) {
                        return this.isCMPReady(n)
                          ? this.updateConsent(n)
                          : this.nextUpdate();
                      },
                    },
                  ],
                  [
                    {
                      key: "register",
                      value: function (n) {
                        var t =
                          arguments.length > 1 &&
                          void 0 !== arguments[1] &&
                          arguments[1];
                        (this.apiVersion = n),
                          (this.CLIENTS[n] = this),
                          t && (this.CLIENTS.default = this);
                      },
                    },
                    {
                      key: "init",
                      value: function () {
                        var n = this,
                          t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : w.b6,
                          e = this.INST;
                        if (!e) {
                          var r,
                            i = function () {
                              return r && (n.INST = null);
                            };
                          (e = this.INST =
                            this.ping(t).catch(function (n) {
                              throw ((r = !0), i(), n);
                            })),
                            i();
                        }
                        return e.then(function (n) {
                          var t = (0, s.Z)(n, 2),
                            e = t[0],
                            r = t[1];
                          return [e, e.initialized ? e.refresh() : e.init(r)];
                        });
                      },
                    },
                    {
                      key: "ping",
                      value: function () {
                        var n = this,
                          t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : w.b6,
                          e = {
                            apiName: "__gpp",
                            apiArgs: ["command", "callback", "parameter"],
                          },
                          r = t(M(M({}, e), {}, { mode: w.kX }));
                        return new S.Z(function (i, o) {
                          if (null != r) {
                            var a = !1,
                              c = function (r, c) {
                                if (!a)
                                  if (null == c || c) {
                                    if (null != r) {
                                      a = !0;
                                      var u = null == r ? void 0 : r.gppVersion,
                                        s = n.getClient(u);
                                      u !== s.apiVersion
                                        ? (0, h.logWarn)(
                                            "Unrecognized GPP CMP version: "
                                              .concat(
                                                u,
                                                ". Continuing using GPP API version "
                                              )
                                              .concat(s, "...")
                                          )
                                        : (0, h.logInfo)(
                                            "Using GPP version ".concat(u)
                                          );
                                      var l = s.apiVersion === R ? w.sM : w.m1,
                                        p = new s(
                                          u,
                                          t(M(M({}, e), {}, { mode: l }))
                                        );
                                      i([p, r]);
                                    }
                                  } else o(r);
                              };
                            r({ command: "ping", callback: c }).then(function (
                              n
                            ) {
                              return c(n, !0);
                            },
                            o);
                          } else o(new W("GPP CMP not found"));
                        }).finally(function () {
                          r && r.close();
                        });
                      },
                    },
                    {
                      key: "getClient",
                      value: function (n) {
                        return this.CLIENTS.hasOwnProperty(n)
                          ? this.CLIENTS[n]
                          : this.CLIENTS.default;
                      },
                    },
                  ]
                ),
                n
              );
            })();
          (0, l.Z)(U, "CLIENTS", {}), (0, l.Z)(U, "INST", void 0);
          var V = (function (n) {
            (0, o.Z)(e, n);
            var t = O(e);
            function e() {
              var n;
              (0, g.Z)(this, e);
              for (
                var r = arguments.length, o = new Array(r), a = 0;
                a < r;
                a++
              )
                o[a] = arguments[a];
              return (
                (n = t.call.apply(t, [this].concat(o))),
                (0, l.Z)((0, i.Z)(n), "events", ["sectionChange", "cmpStatus"]),
                n
              );
            }
            return (
              (0, f.Z)(e, [
                {
                  key: "isCMPReady",
                  value: function (n) {
                    return "loaded" === n.cmpStatus;
                  },
                },
                {
                  key: "getGPPData",
                  value: function (n) {
                    var t = this,
                      e = S.Z.all(
                        (n.supportedAPIs || n.apiSupport || []).map(function (
                          n
                        ) {
                          return t
                            .cmp({ command: "getSection", parameter: n })
                            .catch(function (t) {
                              (0,
                              h.logWarn)("Could not retrieve GPP section '".concat(n, "'"), t);
                            })
                            .then(function (t) {
                              return [n, t];
                            });
                        })
                      ).then(function (n) {
                        return Object.fromEntries(
                          n
                            .filter(function (n) {
                              var t = (0, s.Z)(n, 2);
                              t[0];
                              return null != t[1];
                            })
                            .map(function (n) {
                              var t = (0, s.Z)(n, 2),
                                e = t[0],
                                r = t[1],
                                i = [
                                  Object.fromEntries(
                                    Object.entries(r).filter(function (n) {
                                      return "Gpc" !== (0, s.Z)(n, 1)[0];
                                    })
                                  ),
                                ];
                              return (
                                null != r.Gpc &&
                                  i.push({ SubsectionType: 1, Gpc: r.Gpc }),
                                [e, i]
                              );
                            })
                        );
                      });
                    return S.Z.all([
                      this.cmp({ command: "getGPPData" }),
                      e,
                    ]).then(function (n) {
                      var t = (0, s.Z)(n, 2),
                        e = t[0],
                        r = t[1];
                      return Object.assign({}, e, { parsedSections: r });
                    });
                  },
                },
              ]),
              e
            );
          })(U);
          (0, c.Z)((0, u.Z)(V), "register", V).call(V, R);
          var x = (function (n) {
            (0, o.Z)(e, n);
            var t = O(e);
            function e() {
              var n;
              (0, g.Z)(this, e);
              for (
                var r = arguments.length, o = new Array(r), a = 0;
                a < r;
                a++
              )
                o[a] = arguments[a];
              return (
                (n = t.call.apply(t, [this].concat(o))),
                (0, l.Z)((0, i.Z)(n), "events", [
                  "sectionChange",
                  "signalStatus",
                ]),
                n
              );
            }
            return (
              (0, f.Z)(e, [
                {
                  key: "isCMPReady",
                  value: function (n) {
                    return "ready" === n.signalStatus;
                  },
                },
                {
                  key: "getGPPData",
                  value: function (n) {
                    return S.Z.resolve(n);
                  },
                },
              ]),
              e
            );
          })(U);
          (0, c.Z)((0, u.Z)(x), "register", x).call(x, "1.1", !0);
          var B = {
            iab: function (n) {
              var t = n.onSuccess,
                e = n.onError,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : w.b6;
              N(
                function () {
                  return U.init(r).then(function (n) {
                    var t = (0, s.Z)(n, 2);
                    t[0];
                    return t[1];
                  });
                },
                { onSuccess: t, onError: e }
              );
            },
            static: function (n) {
              return N(function () {
                return q(G);
              }, n);
            },
          };
          function J(n) {
            var t = !1,
              e = null;
            function r(r, i, o) {
              if (
                (null != e && clearTimeout(e),
                (t = !0),
                b.TJ.setConsentData(r),
                "function" == typeof n)
              ) {
                for (
                  var a = arguments.length,
                    c = new Array(a > 3 ? a - 3 : 0),
                    u = 3;
                  u < a;
                  u++
                )
                  c[u - 3] = arguments[u];
                n.apply(void 0, [i, o].concat(c));
              }
            }
            if (B.hasOwnProperty(T)) {
              var i = {
                onSuccess: function (n) {
                  return r(n, !1);
                },
                onError: function (n) {
                  for (
                    var t = arguments.length,
                      e = new Array(t > 1 ? t - 1 : 0),
                      i = 1;
                    i < t;
                    i++
                  )
                    e[i - 1] = arguments[i];
                  r.apply(void 0, [null, !0, n].concat(e));
                },
              };
              if ((B[T](i), !t)) {
                var o = function () {
                  var n = function (n) {
                    r(n, !1, "GPP CMP did not load, continuing auction...");
                  };
                  N(
                    function () {
                      return q(I);
                    },
                    {
                      onSuccess: n,
                      onError: function () {
                        return n(X());
                      },
                    }
                  );
                };
                0 === D ? o() : (e = setTimeout(o, D));
              }
            } else
              r(
                null,
                !1,
                "GPP CMP framework (".concat(
                  T,
                  ") is not a supported framework.  Aborting consentManagement module and resuming auction."
                )
              );
          }
          var H = (0, P.g3)("gpp", function (n, t) {
            var e;
            (e = function (e, r) {
              if (r) {
                var i = h.logWarn;
                e &&
                  ((i = h.logError),
                  (r = "".concat(
                    r,
                    " Canceling auction as per consentManagement config."
                  )));
                for (
                  var o = arguments.length,
                    a = new Array(o > 2 ? o - 2 : 0),
                    c = 2;
                  c < o;
                  c++
                )
                  a[c - 2] = arguments[c];
                i.apply(void 0, [r].concat(a));
              }
              e
                ? (n.stopTiming(),
                  "function" == typeof t.bidsBackHandler
                    ? t.bidsBackHandler()
                    : (0, h.logError)("Error executing bidsBackHandler"))
                : n.call(this, t);
            }),
              I
                ? ((0, h.logInfo)(
                    "User consent information already known.  Pulling internally stored information..."
                  ),
                  e(!1))
                : J(e);
          });
          function q(n) {
            if (
              (null != (null == n ? void 0 : n.applicableSections) &&
                !Array.isArray(n.applicableSections)) ||
              (null != (null == n ? void 0 : n.gppString) &&
                !(0, h.isStr)(n.gppString)) ||
              (null != (null == n ? void 0 : n.parsedSections) &&
                !(0, h.isPlainObject)(n.parsedSections))
            )
              throw new W(
                "CMP returned unexpected value during lookup process.",
                n
              );
            return X(n);
          }
          function X() {
            var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return (
              (I = {
                gppString: null == n ? void 0 : n.gppString,
                applicableSections:
                  (null == n ? void 0 : n.applicableSections) || [],
                parsedSections: (null == n ? void 0 : n.parsedSections) || {},
                gppData: n,
              }),
              b.TJ.setConsentData(n),
              I
            );
          }
          y.vc.getConfig("consentManagement", function (n) {
            return (function (n) {
              (n = n && n.gpp) && "object" === (0, r.Z)(n)
                ? ((0, h.isStr)(n.cmpApi)
                    ? (T = n.cmpApi)
                    : ((T = "iab"),
                      (0, h.logInfo)(
                        "consentManagement.gpp config did not specify cmp.  Using system default setting (".concat(
                          "iab",
                          ")."
                        )
                      )),
                  (0, h.isNumber)(n.timeout)
                    ? (D = n.timeout)
                    : ((D = 1e4),
                      (0, h.logInfo)(
                        "consentManagement.gpp config did not specify timeout.  Using system default setting (".concat(
                          1e4,
                          ")."
                        )
                      )),
                  "static" === T &&
                    ((0, h.isPlainObject)(n.consentData)
                      ? ((G = n.consentData), (D = 0))
                      : (0, h.logError)(
                          "consentManagement.gpp config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters."
                        )),
                  (0, h.logInfo)(
                    "consentManagement.gpp module has been activated..."
                  ),
                  A ||
                    ((0, v.R)().requestBids.before(H, 50),
                    C.Ww.before(function (n, t) {
                      return n(
                        Object.assign({ gppConsent: b.TJ.getConsentData() }, t)
                      );
                    })),
                  (A = !0),
                  b.TJ.enable(),
                  J())
                : (0, h.logWarn)(
                    "consentManagement.gpp config not defined, exiting consent manager module"
                  );
            })(n.consentManagement);
          }),
            Z.S.before(function (n, t) {
              return n(
                t.then(function (n) {
                  var t = b.TJ.getConsentData();
                  return (
                    t &&
                      (Array.isArray(t.applicableSections) &&
                        (0, m.N)(n, "regs.gpp_sid", t.applicableSections),
                      (0, m.N)(n, "regs.gpp", t.gppString)),
                    n
                  );
                })
              );
            }),
            (0, v.z)("consentManagementGpp");
        },
      },
      function (n) {
        n.O(0, [44877, 17968, 25823, 79270], function () {
          return (t = 67523), n((n.s = t));
          var t;
        });
        n.O();
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [5160],
      {
        9099: function (n, t, e) {
          var o,
            a,
            c = e(71002),
            i = e(78640),
            r = e(64358),
            s = e(96475),
            u = e(3193),
            l = e(93304),
            g = e(34516),
            f = e(99128),
            p = e(92797),
            d = e(54078),
            m = e(52712),
            v = "iab",
            P = v,
            b = 50,
            S = !1,
            D = {
              iab: function (n) {
                var t = n.onSuccess,
                  e = n.onError;
                var o =
                    ((c = {}),
                    {
                      consentDataCallback: function (n, o) {
                        o && n.uspString && (c.usPrivacy = n.uspString),
                          c.usPrivacy
                            ? U(c, { onSuccess: t, onError: e })
                            : e("Unable to get USP consent string.");
                      },
                    }),
                  a = (0, m.b6)({
                    apiName: "__uspapi",
                    apiVersion: 1,
                    apiArgs: ["command", "version", "callback"],
                  });
                var c;
                if (!a) return e("USP CMP not found.");
                a.isDirect
                  ? (0, r.logInfo)(
                      "Detected USP CMP is directly accessible, calling it now..."
                    )
                  : (0, r.logInfo)(
                      "Detected USP CMP is outside the current iframe where Prebid.js is located, calling it now..."
                    );
                a({ command: "getUSPData", callback: o.consentDataCallback }),
                  a({
                    command: "registerDeletion",
                    callback: function (n, t) {
                      return (
                        (null == t || t) && l.ZP.callDataDeletionRequest(n)
                      );
                    },
                  }).catch(function (n) {
                    (0,
                    r.logError)("Error invoking CMP `registerDeletion`:", n);
                  });
              },
              static: function (n) {
                var t = n.onSuccess,
                  e = n.onError;
                U(o, { onSuccess: t, onError: e });
              },
            };
          function y(n) {
            var t = null,
              e = !1;
            function o(o, a) {
              if (
                (null != t && clearTimeout(t),
                (e = !0),
                g.nX.setConsentData(o),
                null != n)
              ) {
                for (
                  var c = arguments.length,
                    i = new Array(c > 2 ? c - 2 : 0),
                    r = 2;
                  r < c;
                  r++
                )
                  i[r - 2] = arguments[r];
                n.apply(void 0, [a].concat(i));
              }
            }
            if (D[P]) {
              var a = {
                onSuccess: o,
                onError: function (n) {
                  for (
                    var t = arguments.length,
                      e = new Array(t > 1 ? t - 1 : 0),
                      a = 1;
                    a < t;
                    a++
                  )
                    e[a - 1] = arguments[a];
                  o.apply(
                    void 0,
                    [
                      null,
                      "".concat(
                        n,
                        " Resuming auction without consent data as per consentManagement config."
                      ),
                    ].concat(e)
                  );
                },
              };
              D[P](a),
                e ||
                  (0 === b
                    ? U(void 0, a)
                    : (t = setTimeout(
                        a.onError.bind(
                          null,
                          "USPAPI workflow exceeded timeout threshold."
                        ),
                        b
                      )));
            } else
              o(
                null,
                "USP framework (".concat(
                  P,
                  ") is not a supported framework. Aborting consentManagement module and resuming auction."
                )
              );
          }
          var h = (0, f.g3)("usp", function (n, t) {
            var e = this;
            S || M(),
              y(function (o) {
                if (null != o) {
                  for (
                    var a = arguments.length,
                      c = new Array(a > 1 ? a - 1 : 0),
                      i = 1;
                    i < a;
                    i++
                  )
                    c[i - 1] = arguments[i];
                  r.logWarn.apply(void 0, [o].concat(c));
                }
                n.call(e, t);
              });
          });
          function U(n, t) {
            var e = t.onSuccess,
              o = t.onError;
            !n || !n.usPrivacy
              ? o("USPAPI returned unexpected value during lookup process.", n)
              : (!(function (n) {
                  n && n.usPrivacy && (a = n.usPrivacy);
                })(n),
                e(a));
          }
          function M() {
            var n =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            S ||
              ((0, r.logInfo)(
                "USPAPI consentManagement module has been activated".concat(
                  n
                    ? ""
                    : " using default values (api: '"
                        .concat(P, "', timeout: ")
                        .concat(b, "ms)")
                )
              ),
              (S = !0),
              g.nX.enable()),
              y();
          }
          u.vc.getConfig("consentManagement", function (n) {
            return (function (n) {
              ((n = n && n.usp) && "object" === (0, c.Z)(n)) ||
                (0, r.logWarn)(
                  "consentManagement.usp config not defined, using defaults"
                ),
                n && (0, r.isStr)(n.cmpApi)
                  ? (P = n.cmpApi)
                  : ((P = v),
                    (0, r.logInfo)(
                      "consentManagement.usp config did not specify cmpApi. Using system default setting (".concat(
                        v,
                        ")."
                      )
                    )),
                n && (0, r.isNumber)(n.timeout)
                  ? (b = n.timeout)
                  : ((b = 50),
                    (0, r.logInfo)(
                      "consentManagement.usp config did not specify timeout. Using system default setting (".concat(
                        50,
                        ")."
                      )
                    )),
                "static" === P &&
                  ((0, r.isPlainObject)(n.consentData) &&
                  (0, r.isPlainObject)(n.consentData.getUSPData)
                    ? (n.consentData.getUSPData.uspString &&
                        (o = { usPrivacy: n.consentData.getUSPData.uspString }),
                      (b = 0))
                    : (0, r.logError)(
                        "consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters."
                      )),
                M(!0);
            })(n.consentManagement);
          }),
            (0, p.v5)("requestBids").before(h, 50),
            d.S.before(function (n, t) {
              return n(
                t.then(function (n) {
                  var t = g.nX.getConsentData();
                  return t && (0, s.N)(n, "regs.ext.us_privacy", t), n;
                })
              );
            }),
            (0, i.z)("consentManagementUsp");
        },
      },
      function (n) {
        n.O(0, [17968, 25823, 44877, 79270], function () {
          return (t = 9099), n((n.s = t));
          var t;
        });
        n.O();
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [6406],
      {
        60241: function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__
        ) {
          var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__ =
              __webpack_require__(42982),
            _src_prebidGlobal_js__WEBPACK_IMPORTED_MODULE_14__ =
              __webpack_require__(78640),
            _src_utils_js__WEBPACK_IMPORTED_MODULE_7__ =
              __webpack_require__(64358),
            _src_utils_js__WEBPACK_IMPORTED_MODULE_8__ =
              __webpack_require__(20265),
            _src_adloader_js__WEBPACK_IMPORTED_MODULE_6__ =
              __webpack_require__(55730),
            _src_adapters_bidderFactory_js__WEBPACK_IMPORTED_MODULE_13__ =
              __webpack_require__(14699),
            _src_config_js__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(3193),
            _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(24679),
            criteo_direct_rsa_validate_build_verify_js__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(1582),
            _src_storageManager_js__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(15164),
            _src_refererDetection_js__WEBPACK_IMPORTED_MODULE_5__ =
              __webpack_require__(25102),
            _src_utils_gpdr_js__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(17673),
            _src_Renderer_js__WEBPACK_IMPORTED_MODULE_12__ =
              __webpack_require__(35706),
            _src_video_js__WEBPACK_IMPORTED_MODULE_9__ =
              __webpack_require__(90154),
            _src_ajax_js__WEBPACK_IMPORTED_MODULE_10__ =
              __webpack_require__(48928);
          function _createForOfIteratorHelper(e, r) {
            var i =
              ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
            if (!i) {
              if (
                Array.isArray(e) ||
                (i = _unsupportedIterableToArray(e)) ||
                (r && e && "number" == typeof e.length)
              ) {
                i && (e = i);
                var a = 0,
                  t = function () {};
                return {
                  s: t,
                  n: function () {
                    return a >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[a++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: t,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var _,
              s = !0,
              o = !1;
            return {
              s: function () {
                i = i.call(e);
              },
              n: function () {
                var e = i.next();
                return (s = e.done), e;
              },
              e: function (e) {
                (o = !0), (_ = e);
              },
              f: function () {
                try {
                  s || null == i.return || i.return();
                } finally {
                  if (o) throw _;
                }
              },
            };
          }
          function _unsupportedIterableToArray(e, r) {
            if (e) {
              if ("string" == typeof e) return _arrayLikeToArray(e, r);
              var i = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === i && e.constructor && (i = e.constructor.name),
                "Map" === i || "Set" === i
                  ? Array.from(e)
                  : "Arguments" === i ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                  ? _arrayLikeToArray(e, r)
                  : void 0
              );
            }
          }
          function _arrayLikeToArray(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var i = 0, a = new Array(r); i < r; i++) a[i] = e[i];
            return a;
          }
          var GVLID = 91,
            ADAPTER_VERSION = 36,
            BIDDER_CODE = "criteo",
            CDB_ENDPOINT = "https://bidder.criteo.com/cdb",
            PROFILE_ID_INLINE = 207,
            PROFILE_ID_PUBLISHERTAG = 185,
            storage = (0,
            _src_storageManager_js__WEBPACK_IMPORTED_MODULE_1__.df)({
              bidderCode: BIDDER_CODE,
            }),
            LOG_PREFIX = "Criteo: ",
            FAST_BID_VERSION_PLACEHOLDER = "%FAST_BID_VERSION%",
            FAST_BID_VERSION_CURRENT = 144,
            FAST_BID_VERSION_LATEST = "latest",
            FAST_BID_VERSION_NONE = "none",
            PUBLISHER_TAG_URL_TEMPLATE =
              "https://static.criteo.net/js/ld/publishertag.prebid" +
              FAST_BID_VERSION_PLACEHOLDER +
              ".js",
            PUBLISHER_TAG_OUTSTREAM_SRC =
              "https://static.criteo.net/js/ld/publishertag.renderer.js",
            FAST_BID_PUBKEY_E = 65537,
            FAST_BID_PUBKEY_N =
              "ztQYwCE5BU7T9CDM5he6rKoabstXRmkzx54zFPZkWbK530dwtLBDeaWBMxHBUT55CYyboR/EZ4efghPi3CoNGfGWezpjko9P6p2EwGArtHEeS4slhu/SpSIFMjG6fdrpRoNuIAMhq1Z+Pr/+HOd1pThFKeGFr2/NhtAg+TXAzaU=",
            OPTOUT_COOKIE_NAME = "cto_optout",
            BUNDLE_COOKIE_NAME = "cto_bundle",
            GUID_RETENTION_TIME_HOUR = 9360,
            OPTOUT_RETENTION_TIME_HOUR = 43200,
            spec = {
              code: BIDDER_CODE,
              gvlid: GVLID,
              supportedMediaTypes: [
                _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.Mk,
                _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.pX,
                _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.B5,
              ],
              getUserSyncs: function (e, r, i, a) {
                var t =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : {},
                  _ = t.gppString,
                  s = void 0 === _ ? "" : _,
                  o = t.applicableSections,
                  n = void 0 === o ? [] : o;
                if (
                  e.iframeEnabled &&
                  (0, _src_utils_gpdr_js__WEBPACK_IMPORTED_MODULE_3__.h)(i)
                ) {
                  var d =
                    _src_config_js__WEBPACK_IMPORTED_MODULE_4__.vc.getConfig(
                      "criteo.fastBidVersion"
                    );
                  if (canFastBid(d)) return [];
                  var l = (0,
                    _src_refererDetection_js__WEBPACK_IMPORTED_MODULE_5__.nH)(),
                    c = "criteoPrebidAdapter",
                    p = [];
                  if (
                    (p.push("origin=".concat(c)),
                    p.push("topUrl=".concat(l.domain)),
                    i &&
                      (i.gdprApplies &&
                        p.push("gdpr=".concat(1 == i.gdprApplies ? 1 : 0)),
                      i.consentString &&
                        p.push("gdpr_consent=".concat(i.consentString))),
                    a && p.push("us_privacy=".concat(a)),
                    p.push("gpp=".concat(s)),
                    Array.isArray(n))
                  ) {
                    var u,
                      E = _createForOfIteratorHelper(n);
                    try {
                      for (E.s(); !(u = E.n()).done; ) {
                        var v = u.value;
                        p.push("gpp_sid=".concat(v));
                      }
                    } catch (e) {
                      E.e(e);
                    } finally {
                      E.f();
                    }
                  }
                  var m = Math.random().toString(),
                    T = {
                      bundle: readFromAllStorages(BUNDLE_COOKIE_NAME),
                      cw: storage.cookiesAreEnabled(),
                      lsw: storage.localStorageIsEnabled(),
                      optoutCookie: readFromAllStorages(OPTOUT_COOKIE_NAME),
                      origin: c,
                      requestId: m,
                      tld: l.domain,
                      topUrl: l.domain,
                      version: "8.45.0".replace(/\./g, "_"),
                    };
                  window.addEventListener(
                    "message",
                    function e(r) {
                      if (
                        r.data &&
                        "https://gum.criteo.com" == r.origin &&
                        r.data.requestId === m
                      ) {
                        this.removeEventListener("message", e),
                          r.stopImmediatePropagation();
                        var i = r.data;
                        i.optout
                          ? (deleteFromAllStorages(BUNDLE_COOKIE_NAME),
                            saveOnAllStorages(
                              OPTOUT_COOKIE_NAME,
                              !0,
                              OPTOUT_RETENTION_TIME_HOUR
                            ))
                          : i.bundle &&
                            saveOnAllStorages(
                              BUNDLE_COOKIE_NAME,
                              i.bundle,
                              GUID_RETENTION_TIME_HOUR
                            );
                      }
                    },
                    !0
                  );
                  var g = JSON.stringify(T).replace(/"/g, "%22");
                  return [
                    {
                      type: "iframe",
                      url: "https://gum.criteo.com/syncframe?"
                        .concat(p.join("&"), "#")
                        .concat(g),
                    },
                  ];
                }
                if (
                  e.pixelEnabled &&
                  (0, _src_utils_gpdr_js__WEBPACK_IMPORTED_MODULE_3__.h)(i)
                ) {
                  var O = [];
                  if (
                    (O.push("profile=207"),
                    i &&
                      (!0 === i.gdprApplies && O.push("gdprapplies=true"),
                      i.consentString &&
                        O.push("gdpr=".concat(i.consentString))),
                    a && O.push("ccpa=".concat(a)),
                    O.push("gpp=".concat(s)),
                    Array.isArray(n))
                  ) {
                    var b,
                      P = _createForOfIteratorHelper(n);
                    try {
                      for (P.s(); !(b = P.n()).done; ) {
                        var f = b.value;
                        O.push("gpp_sid=".concat(f));
                      }
                    } catch (e) {
                      P.e(e);
                    } finally {
                      P.f();
                    }
                  }
                  return [
                    {
                      type: "image",
                      url: "https://ssp-sync.criteo.com/user-sync/redirect?".concat(
                        O.join("&")
                      ),
                    },
                  ];
                }
                return [];
              },
              isBidRequestValid: function (e) {
                return (
                  !(
                    !e ||
                    !e.params ||
                    (!e.params.zoneId && !e.params.networkId)
                  ) && !(hasVideoMediaType(e) && !hasValidVideoMediaType(e))
                );
              },
              buildRequests: function (e, r) {
                var i,
                  a,
                  t,
                  _,
                  s = r.ortb2 || {};
                Object.assign(r, {
                  publisherExt:
                    null === (i = s.site) || void 0 === i ? void 0 : i.ext,
                  userExt:
                    null === (a = s.user) || void 0 === a ? void 0 : a.ext,
                  ceh: _src_config_js__WEBPACK_IMPORTED_MODULE_4__.vc.getConfig(
                    "criteo.ceh"
                  ),
                  coppa:
                    _src_config_js__WEBPACK_IMPORTED_MODULE_4__.vc.getConfig(
                      "coppa"
                    ),
                });
                var o =
                    _src_config_js__WEBPACK_IMPORTED_MODULE_4__.vc.getConfig(
                      "criteo.fastBidVersion"
                    ),
                  n = canFastBid(o);
                if (!publisherTagAvailable() && n) {
                  (window.Criteo = window.Criteo || {}),
                    (window.Criteo.usePrebidEvents = !1),
                    tryGetCriteoFastBid();
                  var d = getFastBidUrl(o);
                  setTimeout(function () {
                    (0,
                    _src_adloader_js__WEBPACK_IMPORTED_MODULE_6__.B)(d, BIDDER_CODE);
                  }, r.timeout);
                }
                if (publisherTagAvailable()) {
                  var l = new Criteo.PubTag.Adapters.Prebid(
                    PROFILE_ID_PUBLISHERTAG,
                    ADAPTER_VERSION,
                    e,
                    r,
                    "8.45.0",
                    {
                      createOutstreamVideoRenderer:
                        createOutstreamVideoRenderer,
                    }
                  );
                  (t = l.buildCdbUrl()), (_ = l.buildCdbRequest());
                } else {
                  var c = buildContext(e, r);
                  (t = buildCdbUrl(c)), (_ = buildCdbRequest(c, e, r));
                }
                if (_)
                  return { method: "POST", url: t, data: _, bidRequests: e };
              },
              interpretResponse: function (e, r) {
                var i,
                  a = e.body || e;
                if (publisherTagAvailable()) {
                  var t = Criteo.PubTag.Adapters.Prebid.GetAdapter(r);
                  if (t) return t.interpretResponse(a, r);
                }
                var _ = [],
                  s = [];
                return (
                  a &&
                    a.slots &&
                    (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.isArray)(
                      a.slots
                    ) &&
                    a.slots.forEach(function (i) {
                      var t = getAssociatedBidRequest(r.bidRequests, i);
                      if (t) {
                        var s,
                          o,
                          n,
                          d,
                          l,
                          c,
                          p,
                          u = t.bidId,
                          E = {
                            requestId: u,
                            cpm: i.cpm,
                            currency: i.currency,
                            netRevenue: !0,
                            ttl: i.ttl || 60,
                            creativeId: i.creativecode,
                            width: i.width,
                            height: i.height,
                            dealId: i.deal,
                          };
                        if (
                          null !== (s = a.ext) &&
                          void 0 !== s &&
                          null !== (o = s.paf) &&
                          void 0 !== o &&
                          o.transmission &&
                          null !== (n = i.ext) &&
                          void 0 !== n &&
                          null !== (d = n.paf) &&
                          void 0 !== d &&
                          d.content_id
                        ) {
                          var v = {
                            content_id: i.ext.paf.content_id,
                            transmission: e.ext.paf.transmission,
                          };
                          E.meta = Object.assign({}, E.meta, { paf: v });
                        }
                        if (
                          (i.adomain &&
                            (E.meta = Object.assign({}, E.meta, {
                              advertiserDomains: [i.adomain].flat(),
                            })),
                          null !== (l = i.ext) &&
                            void 0 !== l &&
                            null !== (c = l.meta) &&
                            void 0 !== c &&
                            c.networkName &&
                            (E.meta = Object.assign({}, E.meta, {
                              networkName: i.ext.meta.networkName,
                            })),
                          null !== (p = i.ext) &&
                            void 0 !== p &&
                            p.dsa &&
                            (E.meta = Object.assign({}, E.meta, {
                              dsa: i.ext.dsa,
                            })),
                          i.native)
                        )
                          t.params.nativeCallback
                            ? (E.ad = createNativeAd(
                                u,
                                i.native,
                                t.params.nativeCallback
                              ))
                            : ((E.native = createPrebidNativeAd(i.native)),
                              (E.mediaType =
                                _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.B5));
                        else if (i.video) {
                          (E.vastUrl = i.displayurl),
                            (E.mediaType =
                              _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.pX),
                            (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_8__.Z)(
                              t,
                              "mediaTypes.video.context"
                            ) ===
                              _src_video_js__WEBPACK_IMPORTED_MODULE_9__.gZ &&
                              (E.renderer = createOutstreamVideoRenderer(i));
                        } else E.ad = i.creative;
                        _.push(E);
                      }
                    }),
                  (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.isArray)(
                    null === (i = a.ext) || void 0 === i ? void 0 : i.igi
                  ) &&
                    a.ext.igi.forEach(function (e) {
                      (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.isArray)(
                        null == e ? void 0 : e.igs
                      ) &&
                        e.igs.forEach(function (e) {
                          s.push(e);
                        });
                    }),
                  s.length ? { bids: _, fledgeAuctionConfigs: s } : _
                );
              },
              onTimeout: function (e) {
                if (publisherTagAvailable() && Array.isArray(e)) {
                  var r = [];
                  e.forEach(function (e) {
                    -1 === r.indexOf(e.auctionId) &&
                      (r.push(e.auctionId),
                      Criteo.PubTag.Adapters.Prebid.GetAdapter(
                        e.auctionId
                      ).handleBidTimeout());
                  });
                }
              },
              onBidWon: function (e) {
                publisherTagAvailable() &&
                  e &&
                  Criteo.PubTag.Adapters.Prebid.GetAdapter(
                    e.auctionId
                  ).handleBidWon(e);
              },
              onSetTargeting: function (e) {
                publisherTagAvailable() &&
                  Criteo.PubTag.Adapters.Prebid.GetAdapter(
                    e.auctionId
                  ).handleSetTargeting(e);
              },
              onDataDeletionRequest: function (e) {
                var r = readFromAllStorages(BUNDLE_COOKIE_NAME);
                r &&
                  (deleteFromAllStorages(BUNDLE_COOKIE_NAME),
                  (0, _src_ajax_js__WEBPACK_IMPORTED_MODULE_10__.hj)(
                    "https://privacy.criteo.com/api/privacy/datadeletionrequest",
                    null,
                    JSON.stringify({ publisherUserId: r }),
                    { contentType: "application/json", method: "POST" }
                  ));
              },
            };
          function readFromAllStorages(e) {
            var r = storage.getCookie(e),
              i = storage.getDataFromLocalStorage(e);
            return r || i || void 0;
          }
          function saveOnAllStorages(e, r, i) {
            var a = new Date();
            a.setTime(a.getTime() + 60 * i * 60 * 1e3);
            var t = "expires=".concat(a.toUTCString());
            storage.setCookie(e, r, t), storage.setDataInLocalStorage(e, r);
          }
          function deleteFromAllStorages(e) {
            storage.setCookie(e, "", 0), storage.removeDataFromLocalStorage(e);
          }
          function publisherTagAvailable() {
            return (
              "undefined" != typeof Criteo &&
              Criteo.PubTag &&
              Criteo.PubTag.Adapters &&
              Criteo.PubTag.Adapters.Prebid
            );
          }
          function buildContext(e, r) {
            var i,
              a = "";
            r && r.refererInfo && (a = r.refererInfo.page);
            var t = (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.parseUrl)(
                null == r || null === (i = r.refererInfo) || void 0 === i
                  ? void 0
                  : i.topmostLocation
              ).search,
              _ = {
                url: a,
                debug: "1" === t.pbt_debug,
                noLog: "1" === t.pbt_nolog,
                amp: !1,
              };
            return (
              e.forEach(function (e) {
                "amp" === e.params.integrationMode && (_.amp = !0);
              }),
              _
            );
          }
          function buildCdbUrl(e) {
            var r = CDB_ENDPOINT;
            (r += "?profileId=" + PROFILE_ID_INLINE),
              (r += "&av=" + String(ADAPTER_VERSION)),
              (r += "&wv=" + encodeURIComponent("8.45.0")),
              (r += "&cb=" + String(Math.floor(99999999999 * Math.random()))),
              storage.localStorageIsEnabled()
                ? (r += "&lsavail=1")
                : (r += "&lsavail=0"),
              e.amp && (r += "&im=1"),
              e.debug && (r += "&debug=1"),
              e.noLog && (r += "&nolog=1");
            var i = readFromAllStorages(BUNDLE_COOKIE_NAME);
            return (
              i && (r += "&bundle=".concat(i)),
              readFromAllStorages(OPTOUT_COOKIE_NAME) && (r += "&optout=1"),
              r
            );
          }
          function checkNativeSendId(e) {
            return !(
              e.nativeParams &&
              ((e.nativeParams.image &&
                (!0 !== e.nativeParams.image.sendId ||
                  !0 === e.nativeParams.image.sendTargetingKeys)) ||
                (e.nativeParams.icon &&
                  (!0 !== e.nativeParams.icon.sendId ||
                    !0 === e.nativeParams.icon.sendTargetingKeys)) ||
                (e.nativeParams.clickUrl &&
                  (!0 !== e.nativeParams.clickUrl.sendId ||
                    !0 === e.nativeParams.clickUrl.sendTargetingKeys)) ||
                (e.nativeParams.displayUrl &&
                  (!0 !== e.nativeParams.displayUrl.sendId ||
                    !0 === e.nativeParams.displayUrl.sendTargetingKeys)) ||
                (e.nativeParams.privacyLink &&
                  (!0 !== e.nativeParams.privacyLink.sendId ||
                    !0 === e.nativeParams.privacyLink.sendTargetingKeys)) ||
                (e.nativeParams.privacyIcon &&
                  (!0 !== e.nativeParams.privacyIcon.sendId ||
                    !0 === e.nativeParams.privacyIcon.sendTargetingKeys)))
            );
          }
          function buildCdbRequest(e, r, i) {
            var a,
              t,
              _,
              s,
              o,
              n,
              d,
              l,
              c,
              p,
              u,
              E,
              v,
              m,
              T,
              g,
              O,
              b,
              P = Object.assign(
                {},
                { coppa: !0 === i.coppa ? 1 : !1 === i.coppa ? 0 : void 0 },
                null === (a = i.ortb2) || void 0 === a ? void 0 : a.regs
              ),
              f = {
                id: (0,
                _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.generateUUID)(),
                publisher: { url: e.url, ext: i.publisherExt },
                regs: P,
                slots: r.map(function (e) {
                  var r, a, t, _;
                  g || (g = e.userIdAsEids),
                    (v = e.params.networkId || v),
                    (m = e.params.pubid || m),
                    (T = e.schain || T);
                  var s = {
                    slotid: e.bidId,
                    impid: e.adUnitCode,
                    transactionid:
                      null === (r = e.ortb2Imp) ||
                      void 0 === r ||
                      null === (a = r.ext) ||
                      void 0 === a
                        ? void 0
                        : a.tid,
                  };
                  if (
                    (e.params.zoneId && (s.zoneid = e.params.zoneId),
                    (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_8__.Z)(
                      e,
                      "ortb2Imp.ext"
                    ) && (s.ext = e.ortb2Imp.ext),
                    (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_8__.Z)(
                      e,
                      "ortb2Imp.rwdd"
                    ) && (s.rwdd = e.ortb2Imp.rwdd),
                    e.params.ext &&
                      (s.ext = Object.assign({}, s.ext, e.params.ext)),
                    null !== (t = e.nativeOrtbRequest) &&
                      void 0 !== t &&
                      t.assets &&
                      (s.ext = Object.assign({}, s.ext, {
                        assets: e.nativeOrtbRequest.assets,
                      })),
                    e.params.uid &&
                      (s.ext = Object.assign({}, s.ext, {
                        bidder: { uid: e.params.uid },
                      })),
                    e.params.publisherSubId &&
                      (s.publishersubid = e.params.publisherSubId),
                    (e.params.nativeCallback || hasNativeMediaType(e)) &&
                      ((s.native = !0),
                      checkNativeSendId(e) ||
                        (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.logWarn)(
                          LOG_PREFIX +
                            "all native assets containing URL should be sent as placeholders with sendId(icon, image, clickUrl, displayUrl, privacyLink, privacyIcon)"
                        )),
                    hasBannerMediaType(e)
                      ? (s.sizes = parseSizes(
                          (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_8__.Z)(
                            e,
                            "mediaTypes.banner.sizes"
                          ),
                          parseSize
                        ))
                      : (s.sizes = []),
                    hasVideoMediaType(e))
                  ) {
                    var o = {
                        context: e.mediaTypes.video.context,
                        playersizes: parseSizes(
                          (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_8__.Z)(
                            e,
                            "mediaTypes.video.playerSize"
                          ),
                          parseSize
                        ),
                        mimes: e.mediaTypes.video.mimes,
                        protocols: e.mediaTypes.video.protocols,
                        maxduration: e.mediaTypes.video.maxduration,
                        api: e.mediaTypes.video.api,
                        skip: e.mediaTypes.video.skip,
                        placement: e.mediaTypes.video.placement,
                        minduration: e.mediaTypes.video.minduration,
                        playbackmethod: e.mediaTypes.video.playbackmethod,
                        startdelay: e.mediaTypes.video.startdelay,
                        plcmt: e.mediaTypes.video.plcmt,
                        w: e.mediaTypes.video.w,
                        h: e.mediaTypes.video.h,
                        linearity: e.mediaTypes.video.linearity,
                        skipmin: e.mediaTypes.video.skipmin,
                        skipafter: e.mediaTypes.video.skipafter,
                        minbitrate: e.mediaTypes.video.minbitrate,
                        maxbitrate: e.mediaTypes.video.maxbitrate,
                        delivery: e.mediaTypes.video.delivery,
                        pos: e.mediaTypes.video.pos,
                        playbackend: e.mediaTypes.video.playbackend,
                        adPodDurationSec: e.mediaTypes.video.adPodDurationSec,
                        durationRangeSec: e.mediaTypes.video.durationRangeSec,
                      },
                      n = e.params.video;
                    void 0 !== n &&
                      ((o.skip = o.skip || n.skip || 0),
                      (o.placement = o.placement || n.placement),
                      (o.minduration = o.minduration || n.minduration),
                      (o.playbackmethod = o.playbackmethod || n.playbackmethod),
                      (o.startdelay = o.startdelay || n.startdelay || 0)),
                      (s.video = o);
                  }
                  return (
                    enrichSlotWithFloors(s, e),
                    !i.fledgeEnabled &&
                      null !== (_ = s.ext) &&
                      void 0 !== _ &&
                      _.ae &&
                      delete s.ext.ae,
                    s
                  );
                }),
              };
            (v && (f.publisher.networkid = v),
            m && (f.publisher.id = m),
            (f.source = {
              tid:
                null === (t = i.ortb2) ||
                void 0 === t ||
                null === (_ = t.source) ||
                void 0 === _
                  ? void 0
                  : _.tid,
            }),
            T && (f.source.ext = { schain: T }),
            (f.user =
              (null === (s = i.ortb2) || void 0 === s ? void 0 : s.user) || {}),
            (f.site =
              (null === (o = i.ortb2) || void 0 === o ? void 0 : o.site) || {}),
            (f.app =
              (null === (n = i.ortb2) || void 0 === n ? void 0 : n.app) || {}),
            (f.device =
              (null === (d = i.ortb2) || void 0 === d ? void 0 : d.device) ||
              {}),
            i && i.ceh && (f.user.ceh = i.ceh),
            i &&
              i.gdprConsent &&
              ((f.gdprConsent = {}),
              void 0 !== i.gdprConsent.gdprApplies &&
                (f.gdprConsent.gdprApplies = !!i.gdprConsent.gdprApplies),
              (f.gdprConsent.version = i.gdprConsent.apiVersion),
              void 0 !== i.gdprConsent.consentString &&
                (f.gdprConsent.consentData = i.gdprConsent.consentString)),
            i && i.uspConsent && (f.user.uspIab = i.uspConsent),
            i &&
              null !== (l = i.ortb2) &&
              void 0 !== l &&
              null !== (c = l.device) &&
              void 0 !== c &&
              c.sua) &&
              ((f.user.ext = f.user.ext || {}),
              (f.user.ext.sua =
                (null === (O = i.ortb2) ||
                void 0 === O ||
                null === (b = O.device) ||
                void 0 === b
                  ? void 0
                  : b.sua) || {}));
            return (
              g &&
                ((f.user.ext = f.user.ext || {}),
                (f.user.ext.eids = (0,
                _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__.Z)(
                  g
                ))),
              i &&
                null !== (p = i.ortb2) &&
                void 0 !== p &&
                p.bcat &&
                (f.bcat = i.ortb2.bcat),
              i &&
                null !== (u = i.ortb2) &&
                void 0 !== u &&
                u.badv &&
                (f.badv = i.ortb2.badv),
              i &&
                null !== (E = i.ortb2) &&
                void 0 !== E &&
                E.bapp &&
                (f.bapp = i.ortb2.bapp),
              f
            );
          }
          function parseSizes(e) {
            var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : function (e) {
                    return e;
                  };
            return null == e
              ? []
              : Array.isArray(e[0])
              ? e.map(function (e) {
                  return r(e);
                })
              : [r(e)];
          }
          function parseSize(e) {
            return e[0] + "x" + e[1];
          }
          function hasVideoMediaType(e) {
            return (
              void 0 !==
              (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_8__.Z)(
                e,
                "mediaTypes.video"
              )
            );
          }
          function hasBannerMediaType(e) {
            return (
              void 0 !==
              (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_8__.Z)(
                e,
                "mediaTypes.banner"
              )
            );
          }
          function hasNativeMediaType(e) {
            return (
              void 0 !==
              (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_8__.Z)(
                e,
                "mediaTypes.native"
              )
            );
          }
          function hasValidVideoMediaType(e) {
            var r = !0;
            return (
              [
                "mimes",
                "playerSize",
                "maxduration",
                "protocols",
                "api",
                "skip",
                "placement",
                "playbackmethod",
              ].forEach(function (i) {
                void 0 ===
                  (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_8__.Z)(
                    e,
                    "mediaTypes.video." + i
                  ) &&
                  void 0 ===
                    (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_8__.Z)(
                      e,
                      "params.video." + i
                    ) &&
                  ((r = !1),
                  (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.logError)(
                    "Criteo Bid Adapter: mediaTypes.video." + i + " is required"
                  ));
              }),
              r
            );
          }
          function createPrebidNativeAd(e) {
            return {
              sendTargetingKeys: !1,
              title: e.products[0].title,
              body: e.products[0].description,
              sponsoredBy: e.advertiser.description,
              icon: e.advertiser.logo,
              image: e.products[0].image,
              clickUrl: e.products[0].click_url,
              privacyLink: e.privacy.optout_click_url,
              privacyIcon: e.privacy.optout_image_url,
              cta: e.products[0].call_to_action,
              price: e.products[0].price,
              impressionTrackers: e.impression_pixels.map(function (e) {
                return e.url;
              }),
            };
          }
          function createNativeAd(e, r, i) {
            var a = "criteo_prebid_native_slots";
            return (
              (window[a] = window[a] || {}),
              (window[a][e] = { callback: i, payload: r }),
              '\n<script type="text/javascript">\nfor (var i = 0; i < 10; ++i) {\n var slots = window.parent.'
                .concat(
                  a,
                  ';\n  if(!slots){continue;}\n  var responseSlot = slots["'
                )
                .concat(
                  e,
                  '"];\n  responseSlot.callback(responseSlot.payload);\n  break;\n}\n</script>'
                )
            );
          }
          function pickAvailableGetFloorFunc(e) {
            if (e.getFloor) return e.getFloor;
            if (e.params.bidFloor && e.params.bidFloorCur)
              try {
                var r = parseFloat(e.params.bidFloor);
                return function () {
                  return { currency: e.params.bidFloorCur, floor: r };
                };
              } catch (e) {}
          }
          function enrichSlotWithFloors(e, r) {
            try {
              var i = {},
                a = pickAvailableGetFloorFunc(r);
              if (a) {
                var t, _, s;
                if (null !== (t = r.mediaTypes) && void 0 !== t && t.banner)
                  (i.banner = {}),
                    parseSizes(
                      (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_8__.Z)(
                        r,
                        "mediaTypes.banner.sizes"
                      )
                    ).forEach(function (e) {
                      return (i.banner[parseSize(e).toString()] = a.call(r, {
                        size: e,
                        mediaType:
                          _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.Mk,
                      }));
                    });
                if (null !== (_ = r.mediaTypes) && void 0 !== _ && _.video)
                  (i.video = {}),
                    parseSizes(
                      (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_8__.Z)(
                        r,
                        "mediaTypes.video.playerSize"
                      )
                    ).forEach(function (e) {
                      return (i.video[parseSize(e).toString()] = a.call(r, {
                        size: e,
                        mediaType:
                          _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.pX,
                      }));
                    });
                null !== (s = r.mediaTypes) &&
                  void 0 !== s &&
                  s.native &&
                  ((i.native = {}),
                  (i.native["*"] = a.call(r, {
                    size: "*",
                    mediaType:
                      _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.B5,
                  }))),
                  Object.keys(i).length > 0 &&
                    (e.ext || (e.ext = {}),
                    Object.assign(e.ext, { floors: i }));
              }
            } catch (e) {
              (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.logError)(
                "Could not parse floors from Prebid: " + e
              );
            }
          }
          function canFastBid(e) {
            return e !== FAST_BID_VERSION_NONE;
          }
          function getFastBidUrl(e) {
            var r;
            if (e === FAST_BID_VERSION_LATEST) r = "";
            else if (e) {
              String(e).split(".")[0] < 102 &&
                (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.logWarn)(
                  "Specifying a Fastbid version which is not supporting version selection."
                ),
                (r = "." + e);
            } else r = "." + FAST_BID_VERSION_CURRENT;
            return PUBLISHER_TAG_URL_TEMPLATE.replace(
              FAST_BID_VERSION_PLACEHOLDER,
              r
            );
          }
          function createOutstreamVideoRenderer(e) {
            if (
              void 0 !== e.ext.videoPlayerConfig &&
              void 0 !== e.ext.videoPlayerType
            ) {
              var r = _src_Renderer_js__WEBPACK_IMPORTED_MODULE_12__.Th.install(
                {
                  url: PUBLISHER_TAG_OUTSTREAM_SRC,
                  config: {
                    documentResolver: function (e, r, i) {
                      return null != i ? i : r;
                    },
                  },
                }
              );
              return (
                r.setRender(function (r, i) {
                  var a = {
                      slotid: e.impid,
                      vastUrl: e.displayurl,
                      vastXml: e.creative,
                      documentContext: i,
                    },
                    t = e.ext.videoPlayerConfig;
                  window.CriteoOutStream[e.ext.videoPlayerType].play(a, t);
                }),
                r
              );
            }
          }
          function getAssociatedBidRequest(e, r) {
            var i,
              a = _createForOfIteratorHelper(e);
            try {
              for (a.s(); !(i = a.n()).done; ) {
                var t = i.value;
                if (t.adUnitCode === r.impid) {
                  var _, s;
                  if (t.params.zoneId && parseInt(t.params.zoneId) === r.zoneid)
                    return t;
                  if (r.native) {
                    if (
                      (null !== (s = t.mediaTypes) &&
                        void 0 !== s &&
                        s.native) ||
                      t.nativeParams
                    )
                      return t;
                  } else if (r.video) {
                    var o;
                    if (null !== (o = t.mediaTypes) && void 0 !== o && o.video)
                      return t;
                  } else if (
                    (null !== (_ = t.mediaTypes) && void 0 !== _ && _.banner) ||
                    t.sizes
                  )
                    return t;
                }
              }
            } catch (e) {
              a.e(e);
            } finally {
              a.f();
            }
          }
          function tryGetCriteoFastBid() {
            try {
              var fastBidStorageKey = "criteo_fast_bid",
                hashPrefix = "// Hash: ",
                fastBidFromStorage =
                  storage.getDataFromLocalStorage(fastBidStorageKey);
              if (null !== fastBidFromStorage) {
                var firstLineEndPosition = fastBidFromStorage.indexOf("\n"),
                  firstLine = fastBidFromStorage
                    .substr(0, firstLineEndPosition)
                    .trim();
                if (firstLine.substr(0, hashPrefix.length) !== hashPrefix)
                  (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.logWarn)(
                    "No hash found in FastBid"
                  ),
                    storage.removeDataFromLocalStorage(fastBidStorageKey);
                else {
                  var publisherTagHash = firstLine.substr(hashPrefix.length),
                    publisherTag = fastBidFromStorage.substr(
                      firstLineEndPosition + 1
                    );
                  (0,
                  criteo_direct_rsa_validate_build_verify_js__WEBPACK_IMPORTED_MODULE_0__.T)(
                    publisherTag,
                    publisherTagHash,
                    FAST_BID_PUBKEY_N,
                    FAST_BID_PUBKEY_E
                  )
                    ? ((0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.logInfo)(
                        "Using Criteo FastBid"
                      ),
                      eval(publisherTag))
                    : ((0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.logWarn)(
                        "Invalid Criteo FastBid found"
                      ),
                      storage.removeDataFromLocalStorage(fastBidStorageKey));
                }
              }
            } catch (e) {}
          }
          (0, _src_adapters_bidderFactory_js__WEBPACK_IMPORTED_MODULE_13__.dX)(
            spec
          ),
            (0, _src_prebidGlobal_js__WEBPACK_IMPORTED_MODULE_14__.z)(
              "criteoBidAdapter"
            );
        },
      },
      function (e) {
        e.O(0, [25823, 44877, 79270], function () {
          return (r = 60241), e((e.s = r));
          var r;
        });
        e.O();
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [88806],
      {
        19749: function (n, u, e) {
          (0, e(78640).z)("enrichmentFpdModule");
        },
      },
      function (n) {
        n.O(0, [25823, 44877, 79270], function () {
          return (u = 19749), n((n.s = u));
          var u;
        });
        n.O();
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [87083],
      {
        31498: function (n, e, r) {
          var t = r(70885),
            o = r(78640),
            u = r(64358),
            i = r(20265),
            a = r(3193),
            c = r(93304),
            l = r(34516),
            s = r(52021),
            p = r(62200),
            f = r(9633),
            d = r(16310),
            v = r(50571),
            g = r(74947);
          function h(n, e) {
            var r =
              ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
              n["@@iterator"];
            if (!r) {
              if (
                Array.isArray(n) ||
                (r = (function (n, e) {
                  if (!n) return;
                  if ("string" == typeof n) return y(n, e);
                  var r = Object.prototype.toString.call(n).slice(8, -1);
                  "Object" === r && n.constructor && (r = n.constructor.name);
                  if ("Map" === r || "Set" === r) return Array.from(n);
                  if (
                    "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  )
                    return y(n, e);
                })(n)) ||
                (e && n && "number" == typeof n.length)
              ) {
                r && (n = r);
                var t = 0,
                  o = function () {};
                return {
                  s: o,
                  n: function () {
                    return t >= n.length
                      ? { done: !0 }
                      : { done: !1, value: n[t++] };
                  },
                  e: function (n) {
                    throw n;
                  },
                  f: o,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var u,
              i = !0,
              a = !1;
            return {
              s: function () {
                r = r.call(n);
              },
              n: function () {
                var n = r.next();
                return (i = n.done), n;
              },
              e: function (n) {
                (a = !0), (u = n);
              },
              f: function () {
                try {
                  i || null == r.return || r.return();
                } finally {
                  if (a) throw u;
                }
              },
            };
          }
          function y(n, e) {
            (null == e || e > n.length) && (e = n.length);
            for (var r = 0, t = new Array(e); r < e; r++) t[r] = n[r];
            return t;
          }
          var m = { purpose: {}, feature: {} },
            b = {
              purpose: "purpose.consents",
              feature: "specialFeatureOptins",
            },
            w = {
              storage: {
                type: "purpose",
                default: {
                  purpose: "storage",
                  enforcePurpose: !0,
                  enforceVendor: !0,
                  vendorExceptions: [],
                },
                id: 1,
              },
              basicAds: {
                type: "purpose",
                id: 2,
                default: {
                  purpose: "basicAds",
                  enforcePurpose: !0,
                  enforceVendor: !0,
                  vendorExceptions: [],
                },
              },
              personalizedAds: { type: "purpose", id: 4 },
              measurement: { type: "purpose", id: 7 },
              transmitPreciseGeo: { type: "feature", id: 1 },
            },
            E = new Set(),
            A = new Set(),
            k = new Set(),
            B = new Set(),
            S = new Set(),
            P = new Set(),
            C = !1,
            O = !1,
            D = [f.UL, f.y2, f._U, f.XG],
            I = "TCF2",
            Z = [],
            j = [2];
          function x(n, e, r) {
            if (e) {
              var t = a.vc.getConfig("gvlMapping");
              if (t && t[e]) return t[e];
              if (n === f.wu) return "cdep" === e ? l.Lw : l.$P;
              var o = l.qh.get(e),
                i = o.gvlid,
                c = o.modules;
              if (null == i && Object.keys(c).length > 0) {
                var s,
                  p = h(D);
                try {
                  for (p.s(); !(s = p.n()).done; ) {
                    var d = s.value;
                    if (c.hasOwnProperty(d)) {
                      (i = c[d]),
                        d !== n &&
                          (0, u.logWarn)(
                            "Multiple GVL IDs found for module '"
                              .concat(e, "'; using the ")
                              .concat(d, " module's ID (")
                              .concat(i, ") instead of the ")
                              .concat(n, "'s ID (")
                              .concat(c[n], ")")
                          );
                      break;
                    }
                  }
                } catch (n) {
                  p.e(n);
                } finally {
                  p.f();
                }
              }
              return null == i && r && (i = r()), i || null;
            }
            return null;
          }
          function F(n, e, r) {
            return null == n && l.rp.enabled
              ? ((0, u.logWarn)(
                  "Attempting operation that requires purpose "
                    .concat(e, " consent while consent data is not available")
                    .concat(
                      r ? " (module: ".concat(r, ")") : "",
                      ". Assuming no consent was given."
                    )
                ),
                !0)
              : n && n.gdprApplies;
          }
          function $(n, e, r, t) {
            var o = !!(0, i.Z)(n, "vendorData.".concat(b[e], ".").concat(r)),
              u = !!(0, i.Z)(n, "vendorData.vendor.consents.".concat(t));
            return (
              "purpose" === e &&
                j.includes(r) &&
                (o ||
                  (o = !!(0, i.Z)(
                    n,
                    "vendorData.purpose.legitimateInterests.".concat(r)
                  )),
                u ||
                  (u = !!(0, i.Z)(
                    n,
                    "vendorData.vendor.legitimateInterests.".concat(t)
                  ))),
              { purpose: o, vendor: u }
            );
          }
          function M(n, e, r, t) {
            var o = w[n.purpose];
            if ((n.vendorExceptions || []).includes(r)) return !0;
            var u =
                n.enforceVendor &&
                !(t === l.$P || (n.softVendorExceptions || []).includes(r)),
              a = $(e, o.type, o.id, t),
              c = a.purpose,
              s = a.vendor,
              p = (!n.enforcePurpose || c) && (!u || s);
            return (
              t === l.Lw &&
                (p =
                  !n.enforcePurpose ||
                  !!(0, i.Z)(e, "vendorData.publisher.consents.".concat(o.id))),
              p
            );
          }
          function T(n, e) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null,
              t =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : function () {
                      return null;
                    };
            return function (o) {
              var u = l.rp.getConsentData(),
                i = o[d.bp];
              if (F(u, n, i)) {
                var a = x(o[d.$k], i, t(o)),
                  c = !!e(u, i, a);
                if (!c) return r && r.add(i), { allow: c };
              }
            };
          }
          function V(n) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null,
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : function () {
                      return null;
                    };
            return T(
              n,
              function (e, r, t) {
                return !!M(m.purpose[n], e, r, t);
              },
              e,
              r
            );
          }
          function L(n) {
            return function (e) {
              if (e[d.$k] !== f.wu) return n(e);
            };
          }
          var U,
            N,
            q,
            G =
              ((U = V(1, E)),
              function (n) {
                if (n[d.$k] !== f.wu || O) return U(n);
              }),
            W = V(1, E),
            _ = V(1, E),
            z = L(V(2, A)),
            K = V(7, k, function (n) {
              return (
                (e = n[d.bp]),
                (r = n[d.Hw]),
                (function (n) {
                  if ("function" != typeof n) return n;
                  try {
                    return n.call(o.adapter, r);
                  } catch (n) {
                    (0, u.logError)(
                      "Error invoking ".concat(e, " adapter.gvlid()"),
                      n
                    );
                  }
                })(
                  null == (o = c.ZP.getAnalyticsAdapter(e)) ||
                    null === (t = o.adapter) ||
                    void 0 === t
                    ? void 0
                    : t.gvlid
                )
              );
              var e, r, t, o;
            }),
            R = V(4, B),
            H = L(
              ((N = T(
                "2-10",
                function (n, e, r) {
                  for (var t = 2; t <= 10; t++) {
                    var o, u, i, a;
                    if (
                      null !== (o = m.purpose[t]) &&
                      void 0 !== o &&
                      null !== (u = o.vendorExceptions) &&
                      void 0 !== u &&
                      u.includes(e)
                    )
                      return !0;
                    var c = $(n, "purpose", t, r),
                      l = c.purpose,
                      s = c.vendor;
                    if (
                      l &&
                      (s ||
                        (null !== (i = m.purpose[t]) &&
                          void 0 !== i &&
                          null !== (a = i.softVendorExceptions) &&
                          void 0 !== a &&
                          a.includes(e)))
                    )
                      return !0;
                  }
                  return !1;
                },
                S
              )),
              (q = V(4, S)),
              function () {
                var n,
                  e =
                    null !== (n = m.purpose[4]) &&
                    void 0 !== n &&
                    n.eidsRequireP4Consent
                      ? q
                      : N;
                return e.apply(this, arguments);
              })
            ),
            X = T(
              "Special Feature 1",
              function (n, e, r) {
                return M(m.feature[1], n, e, r);
              },
              P
            );
          s.on(p.FP.AUCTION_END, function () {
            var n = function (n) {
                return Array.from(n.keys()).filter(function (n) {
                  return null != n;
                });
              },
              e = {
                storageBlocked: n(E),
                biddersBlocked: n(A),
                analyticsBlocked: n(k),
                ufpdBlocked: n(B),
                eidsBlocked: n(S),
                geoBlocked: n(P),
              };
            s.emit(p.FP.TCF2_ENFORCEMENT, e),
              [E, A, k, B, S, P].forEach(function (n) {
                return n.clear();
              });
          }),
            a.vc.getConfig("consentManagement", function (n) {
              return (function (n) {
                var e = (0, i.Z)(n, "gdpr.rules");
                e || (0, u.logWarn)("TCF2: enforcing P1 and P2 by default"),
                  (e = Object.fromEntries(
                    (e || []).map(function (n) {
                      return [n.purpose, n];
                    })
                  )),
                  (O = !!(0, i.Z)(n, "strictStorageEnforcement")),
                  Object.entries(w).forEach(function (n) {
                    var r,
                      o = (0, t.Z)(n, 2),
                      u = o[0],
                      i = o[1];
                    m[i.type][i.id] =
                      null !== (r = e[u]) && void 0 !== r ? r : i.default;
                  }),
                  C ||
                    (null != m.purpose[1] &&
                      ((C = !0),
                      Z.push((0, v.oB)(g.S1, I, G)),
                      Z.push((0, v.oB)(g.K$, I, W)),
                      Z.push((0, v.oB)(g.EL, I, _))),
                    null != m.purpose[2] && Z.push((0, v.oB)(g.UE, I, z)),
                    null != m.purpose[4] &&
                      Z.push((0, v.oB)(g.oK, I, R), (0, v.oB)(g.S5, I, R)),
                    null != m.purpose[7] && Z.push((0, v.oB)(g.x$, I, K)),
                    null != m.feature[1] && Z.push((0, v.oB)(g.g0, I, X)),
                    Z.push((0, v.oB)(g.e, I, H)));
              })(n.consentManagement);
            }),
            (0, o.z)("gdprEnforcement");
        },
      },
      function (n) {
        n.O(0, [25823, 44877, 79270], function () {
          return (e = 31498), n((n.s = e));
          var e;
        });
        n.O();
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [48958],
      {
        12670: function (n, t, u) {
          var o = u(78640),
            e = u(3193),
            s = u(77337),
            a = !1;
          e.vc.getConfig("consentManagement", function (n) {
            var t;
            null ==
              (null == n || null === (t = n.consentManagement) || void 0 === t
                ? void 0
                : t.gpp) ||
              a ||
              ((0, s.Ji)("usnat", [7]), (a = !0));
          }),
            (0, o.z)("gppControl_usnat");
        },
      },
      function (n) {
        n.O(0, [35051, 25823, 44877, 79270], function () {
          return (t = 12670), n((n.s = t));
          var t;
        });
        n.O();
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [35093],
      {
        76875: function (n, t, e) {
          var r = e(70885),
            i = e(78640),
            o = e(3193),
            a = e(77337),
            s = e(96475),
            u = e(64358),
            c = {
              Version: 0,
              Gpc: 0,
              SharingNotice: 0,
              SaleOptOutNotice: 0,
              SharingOptOutNotice: 0,
              TargetedAdvertisingOptOutNotice: 0,
              SensitiveDataProcessingOptOutNotice: 0,
              SensitiveDataLimitUseNotice: 0,
              SaleOptOut: 0,
              SharingOptOut: 0,
              TargetedAdvertisingOptOut: 0,
              SensitiveDataProcessing: 12,
              KnownChildSensitiveDataConsents: 2,
              PersonalDataConsents: 0,
              MspaCoveredTransaction: 0,
              MspaOptOutOptionMode: 0,
              MspaServiceProviderMode: 0,
            };
          function f(n) {
            var t = n.nullify,
              e = void 0 === t ? [] : t,
              i = n.move,
              o = void 0 === i ? {} : i,
              a = n.fn,
              u =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : c;
            return (
              (o = Object.fromEntries(
                Object.entries(o).map(function (n) {
                  var t = (0, r.Z)(n, 2),
                    e = t[0],
                    i = t[1];
                  return [
                    e,
                    Object.fromEntries(
                      Object.entries(i)
                        .map(function (n) {
                          var t = (0, r.Z)(n, 2),
                            e = t[0],
                            i = t[1];
                          return [e, Array.isArray(i) ? i : [i]];
                        })
                        .map(function (n) {
                          var t = (0, r.Z)(n, 2),
                            e = t[0];
                          return [
                            --e,
                            t[1].map(function (n) {
                              return --n;
                            }),
                          ];
                        })
                    ),
                  ];
                })
              )),
              function (n) {
                var t = Object.fromEntries(
                  Object.entries(u).map(function (t) {
                    var e = (0, r.Z)(t, 2),
                      i = e[0],
                      a = e[1],
                      s = null;
                    if (a > 0) {
                      if (((s = Array(a).fill(null)), Array.isArray(n[i]))) {
                        var u = o[i] || {},
                          c = [];
                        n[i].forEach(function (n, t) {
                          var e = u.hasOwnProperty(t) ? [u[t], !0] : [[t], !1],
                            i = (0, r.Z)(e, 2),
                            o = i[0],
                            f = i[1];
                          o.forEach(function (t) {
                            t < a &&
                              !c.includes(t) &&
                              ((s[t] = n), f && c.push(t));
                          });
                        });
                      }
                    } else
                      null != n[i] && (s = Array.isArray(n[i]) ? null : n[i]);
                    return [i, s];
                  })
                );
                return (
                  e.forEach(function (n) {
                    return (0, s.N)(t, n, null);
                  }),
                  a && a(n, t),
                  t
                );
              }
            );
          }
          function v(n, t) {
            t.KnownChildSensitiveDataConsents =
              0 === n.KnownChildSensitiveDataConsents ? [0, 0] : [1, 1];
          }
          var l,
            p = {
              7: function (n) {
                return n;
              },
              8: f({
                move: {
                  SensitiveDataProcessing: {
                    1: 9,
                    2: 10,
                    3: 8,
                    4: [1, 2],
                    5: 12,
                    8: 3,
                    9: 4,
                  },
                },
                fn: function (n, t) {
                  n.KnownChildSensitiveDataConsents.some(function (n) {
                    return 0 !== n;
                  }) && (t.KnownChildSensitiveDataConsents = [1, 1]);
                },
              }),
              9: f({ fn: v }),
              10: f({ fn: v }),
              11: f({
                move: { SensitiveDataProcessing: { 3: 4, 4: 5, 5: 3 } },
                fn: v,
              }),
              12: f({
                fn: function (n, t) {
                  var e,
                    r = n.KnownChildSensitiveDataConsents;
                  (e = r.some(function (n) {
                    return 0 !== n;
                  })
                    ? 2 === r[1] && 2 === r[2]
                      ? [2, 1]
                      : [1, 1]
                    : [0, 0]),
                    (t.KnownChildSensitiveDataConsents = e);
                },
              }),
            },
            O = { 8: "usca", 9: "usva", 10: "usco", 11: "usut", 12: "usct" },
            d =
              ((l = Object.keys(O).map(Number)),
              function () {
                var n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = n.sections,
                  e = void 0 === t ? {} : t,
                  r = n.sids,
                  i = void 0 === r ? l : r;
                return i
                  .map(function (n) {
                    var t = (0, u.prefixLog)(
                        "Cannot set up MSPA controls for SID ".concat(n, ":")
                      ),
                      r = e[n] || {},
                      i = r.normalizeAs || n;
                    if (p.hasOwnProperty(i)) {
                      var o = r.name || O[n];
                      if ("string" == typeof o) return [o, [n], p[i]];
                      t.logError("cannot determine GPP section name");
                    } else t.logError("no normalization rules are known for SID ".concat(i));
                  })
                  .filter(function (n) {
                    return null != n;
                  });
              }),
            m = [];
          o.vc.getConfig("consentManagement", function (n) {
            var t,
              e =
                null === (t = n.consentManagement) || void 0 === t
                  ? void 0
                  : t.gpp;
            if (e) {
              for (; m.length; ) m.pop()();
              d((null == e ? void 0 : e.mspa) || {}).forEach(function (n) {
                var t = (0, r.Z)(n, 3),
                  e = t[0],
                  i = t[1],
                  o = t[2];
                return m.push((0, a.Ji)(e, i, o));
              });
            }
          }),
            (0, i.z)("gppControl_usstates");
        },
      },
      function (n) {
        n.O(0, [35051, 25823, 44877, 79270], function () {
          return (t = 76875), n((n.s = t));
          var t;
        });
        n.O();
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [65296],
      {
        96787: function (t, o, e) {
          var n = e(78640),
            a = e(64358),
            r = e(96475),
            d = e(20265),
            i = e(3193),
            u = e(92797),
            c = e(34614),
            s = void 0,
            f = {},
            l = !1,
            p = function (t) {
              var o = f.customGptSlotMatching;
              if ((0, a.isGptPubadsDefined)()) {
                var e = t.reduce(function (t, o) {
                  return (t[o.code] = t[o.code] || []), t[o.code].push(o), t;
                }, {});
                window.googletag
                  .pubads()
                  .getSlots()
                  .forEach(function (t) {
                    var n = (0, c.sE)(
                      Object.keys(e),
                      o ? o(t) : (0, a.isAdUnitCodeMatchingSlot)(t)
                    );
                    if (n) {
                      var d = { name: "gam", adslot: b(t.getAdUnitPath()) };
                      e[n].forEach(function (t) {
                        var o, e, n;
                        (0,
                        r.N)(t, "ortb2Imp.ext.data.adserver", Object.assign({}, null === (o = t.ortb2Imp) || void 0 === o || null === (e = o.ext) || void 0 === e || null === (n = e.data) || void 0 === n ? void 0 : n.adserver, d));
                      });
                    }
                  });
              }
            },
            b = function (t) {
              return (i.vc.getConfig("gptPreAuction") || {}).mcmEnabled
                ? t.replace(/(^\/\d*),\d*\//, "$1/")
                : t;
            },
            g = function (t, o) {
              var e = t.ortb2Imp.ext.data;
              if (e.pbadslot) return e.pbadslot;
              if ((0, a.isGptPubadsDefined)()) {
                var n = window.googletag
                  .pubads()
                  .getSlots()
                  .filter(function (t) {
                    return t.getAdUnitPath() === o;
                  });
                if (0 !== n.length)
                  return 1 === n.length ? o : "".concat(o, "#").concat(t.code);
              }
            },
            v = function (t) {
              var o = t.ortb2Imp.ext.data,
                e = f.customPbAdSlot;
              if (!o.pbadslot)
                if (e) o.pbadslot = e(t.code, (0, d.Z)(o, "adserver.adslot"));
                else {
                  try {
                    var n = document.getElementById(t.code);
                    if (n.dataset.adslotid)
                      return void (o.pbadslot = n.dataset.adslotid);
                  } catch (t) {}
                  if (!(0, d.Z)(o, "adserver.adslot"))
                    return (o.pbadslot = t.code), !0;
                  o.pbadslot = o.adserver.adslot;
                }
            },
            m = function (t, o) {
              p(o);
              var e = f,
                n = e.useDefaultPreAuction,
                a = e.customPreAuction;
              o.forEach(function (t) {
                (t.ortb2Imp = t.ortb2Imp || {}),
                  (t.ortb2Imp.ext = t.ortb2Imp.ext || {}),
                  (t.ortb2Imp.ext.data = t.ortb2Imp.ext.data || {});
                var o = t.ortb2Imp.ext;
                if (a || n) {
                  var e,
                    r = (0, d.Z)(o, "data.adserver.adslot");
                  a ? (e = a(t, r)) : n && (e = g(t, r)),
                    e && (o.gpid = o.data.pbadslot = e);
                } else {
                  var i = v(t);
                  o.gpid || i || (o.gpid = o.data.pbadslot);
                }
              });
              for (
                var r = arguments.length,
                  i = new Array(r > 2 ? r - 2 : 0),
                  u = 2;
                u < r;
                u++
              )
                i[u - 2] = arguments[u];
              return t.call.apply(t, [s, o].concat(i));
            },
            h = function (t) {
              (f = (0, a.pick)(t, [
                "enabled",
                function (t) {
                  return !1 !== t;
                },
                "customGptSlotMatching",
                function (t) {
                  return "function" == typeof t && t;
                },
                "customPbAdSlot",
                function (t) {
                  return "function" == typeof t && t;
                },
                "customPreAuction",
                function (t) {
                  return "function" == typeof t && t;
                },
                "useDefaultPreAuction",
                function (t) {
                  return !0 === t;
                },
              ])).enabled
                ? l || ((0, u.v5)("makeBidRequests").before(m), (l = !0))
                : ((0, a.logInfo)(
                    "".concat("GPT Pre-Auction", ": Turning off module")
                  ),
                  (f = {}),
                  (0, u.v5)("makeBidRequests").getHooks({ hook: m }).remove(),
                  (l = !1));
            };
          i.vc.getConfig("gptPreAuction", function (t) {
            return h(t.gptPreAuction);
          }),
            h({}),
            (0, n.z)("gptPreAuction");
        },
      },
      function (t) {
        t.O(0, [25823, 44877, 79270], function () {
          return (o = 96787), t((t.s = o));
          var o;
        });
        t.O();
      },
    ]);
  })(),
    pbjs.processQueue();
