(() => {
  var M_ = Object.create;
  var Zr = Object.defineProperty;
  var D_ = Object.getOwnPropertyDescriptor;
  var F_ = Object.getOwnPropertyNames;
  var G_ = Object.getPrototypeOf,
    V_ = Object.prototype.hasOwnProperty;
  var ce = (e, t) => () => (e && (t = e((e = 0))), t);
  var u = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Re = (e, t) => {
      for (var r in t) Zr(e, r, { get: t[r], enumerable: !0 });
    },
    Os = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of F_(t))
          !V_.call(e, i) &&
            i !== r &&
            Zr(e, i, {
              get: () => t[i],
              enumerable: !(n = D_(t, i)) || n.enumerable,
            });
      return e;
    };
  var ie = (e, t, r) => (
      (r = e != null ? M_(G_(e)) : {}),
      Os(
        t || !e || !e.__esModule
          ? Zr(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    ze = (e) => Os(Zr({}, "__esModule", { value: !0 }), e);
  var Ai = u(() => {
    "use strict";
    window.tram = (function (e) {
      function t(l, v) {
        var _ = new M.Bare();
        return _.init(l, v);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (v) {
          return "-" + v.toLowerCase();
        });
      }
      function n(l) {
        var v = parseInt(l.slice(1), 16),
          _ = (v >> 16) & 255,
          I = (v >> 8) & 255,
          y = 255 & v;
        return [_, I, y];
      }
      function i(l, v, _) {
        return (
          "#" + ((1 << 24) | (l << 16) | (v << 8) | _).toString(16).slice(1)
        );
      }
      function o() {}
      function a(l, v) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof v + "] " + v);
      }
      function s(l, v, _) {
        f("Units do not match [" + l + "]: " + v + ", " + _);
      }
      function c(l, v, _) {
        if ((v !== void 0 && (_ = v), l === void 0)) return _;
        var I = _;
        return (
          Si.test(l) || !Yr.test(l)
            ? (I = parseInt(l, 10))
            : Yr.test(l) && (I = 1e3 * parseFloat(l)),
          0 > I && (I = 0),
          I === I ? I : _
        );
      }
      function f(l) {
        ge.debug && window && window.console.warn(l);
      }
      function p(l) {
        for (var v = -1, _ = l ? l.length : 0, I = []; ++v < _; ) {
          var y = l[v];
          y && I.push(y);
        }
        return I;
      }
      var d = (function (l, v, _) {
          function I($) {
            return typeof $ == "object";
          }
          function y($) {
            return typeof $ == "function";
          }
          function b() {}
          function B($, se) {
            function D() {
              var be = new J();
              return y(be.init) && be.init.apply(be, arguments), be;
            }
            function J() {}
            se === _ && ((se = $), ($ = Object)), (D.Bare = J);
            var ee,
              ve = (b[l] = $[l]),
              je = (J[l] = D[l] = new b());
            return (
              (je.constructor = D),
              (D.mixin = function (be) {
                return (J[l] = D[l] = B(D, be)[l]), D;
              }),
              (D.open = function (be) {
                if (
                  ((ee = {}),
                  y(be) ? (ee = be.call(D, je, ve, D, $)) : I(be) && (ee = be),
                  I(ee))
                )
                  for (var dr in ee) v.call(ee, dr) && (je[dr] = ee[dr]);
                return y(je.init) || (je.init = $), D;
              }),
              D.open(se)
            );
          }
          return B;
        })("prototype", {}.hasOwnProperty),
        g = {
          ease: [
            "ease",
            function (l, v, _, I) {
              var y = (l /= I) * l,
                b = y * l;
              return (
                v +
                _ * (-2.75 * b * y + 11 * y * y + -15.5 * b + 8 * y + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, v, _, I) {
              var y = (l /= I) * l,
                b = y * l;
              return v + _ * (-1 * b * y + 3 * y * y + -3 * b + 2 * y);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, v, _, I) {
              var y = (l /= I) * l,
                b = y * l;
              return (
                v +
                _ * (0.3 * b * y + -1.6 * y * y + 2.2 * b + -1.8 * y + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, v, _, I) {
              var y = (l /= I) * l,
                b = y * l;
              return v + _ * (2 * b * y + -5 * y * y + 2 * b + 2 * y);
            },
          ],
          linear: [
            "linear",
            function (l, v, _, I) {
              return (_ * l) / I + v;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, v, _, I) {
              return _ * (l /= I) * l + v;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, v, _, I) {
              return -_ * (l /= I) * (l - 2) + v;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, v, _, I) {
              return (l /= I / 2) < 1
                ? (_ / 2) * l * l + v
                : (-_ / 2) * (--l * (l - 2) - 1) + v;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, v, _, I) {
              return _ * (l /= I) * l * l + v;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, v, _, I) {
              return _ * ((l = l / I - 1) * l * l + 1) + v;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, v, _, I) {
              return (l /= I / 2) < 1
                ? (_ / 2) * l * l * l + v
                : (_ / 2) * ((l -= 2) * l * l + 2) + v;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, v, _, I) {
              return _ * (l /= I) * l * l * l + v;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, v, _, I) {
              return -_ * ((l = l / I - 1) * l * l * l - 1) + v;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, v, _, I) {
              return (l /= I / 2) < 1
                ? (_ / 2) * l * l * l * l + v
                : (-_ / 2) * ((l -= 2) * l * l * l - 2) + v;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, v, _, I) {
              return _ * (l /= I) * l * l * l * l + v;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, v, _, I) {
              return _ * ((l = l / I - 1) * l * l * l * l + 1) + v;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, v, _, I) {
              return (l /= I / 2) < 1
                ? (_ / 2) * l * l * l * l * l + v
                : (_ / 2) * ((l -= 2) * l * l * l * l + 2) + v;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, v, _, I) {
              return -_ * Math.cos((l / I) * (Math.PI / 2)) + _ + v;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, v, _, I) {
              return _ * Math.sin((l / I) * (Math.PI / 2)) + v;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, v, _, I) {
              return (-_ / 2) * (Math.cos((Math.PI * l) / I) - 1) + v;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, v, _, I) {
              return l === 0 ? v : _ * Math.pow(2, 10 * (l / I - 1)) + v;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, v, _, I) {
              return l === I
                ? v + _
                : _ * (-Math.pow(2, (-10 * l) / I) + 1) + v;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, v, _, I) {
              return l === 0
                ? v
                : l === I
                ? v + _
                : (l /= I / 2) < 1
                ? (_ / 2) * Math.pow(2, 10 * (l - 1)) + v
                : (_ / 2) * (-Math.pow(2, -10 * --l) + 2) + v;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, v, _, I) {
              return -_ * (Math.sqrt(1 - (l /= I) * l) - 1) + v;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, v, _, I) {
              return _ * Math.sqrt(1 - (l = l / I - 1) * l) + v;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, v, _, I) {
              return (l /= I / 2) < 1
                ? (-_ / 2) * (Math.sqrt(1 - l * l) - 1) + v
                : (_ / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + v;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, v, _, I, y) {
              return (
                y === void 0 && (y = 1.70158),
                _ * (l /= I) * l * ((y + 1) * l - y) + v
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, v, _, I, y) {
              return (
                y === void 0 && (y = 1.70158),
                _ * ((l = l / I - 1) * l * ((y + 1) * l + y) + 1) + v
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, v, _, I, y) {
              return (
                y === void 0 && (y = 1.70158),
                (l /= I / 2) < 1
                  ? (_ / 2) * l * l * (((y *= 1.525) + 1) * l - y) + v
                  : (_ / 2) *
                      ((l -= 2) * l * (((y *= 1.525) + 1) * l + y) + 2) +
                    v
              );
            },
          ],
        },
        h = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        E = document,
        m = window,
        C = "bkwld-tram",
        S = /[\-\.0-9]/g,
        A = /[A-Z]/,
        O = "number",
        w = /^(rgb|#)/,
        R = /(em|cm|mm|in|pt|pc|px)$/,
        x = /(em|cm|mm|in|pt|pc|px|%)$/,
        G = /(deg|rad|turn)$/,
        X = "unitless",
        H = /(all|none) 0s ease 0s/,
        k = /^(width|height)$/,
        Q = " ",
        P = E.createElement("a"),
        T = ["Webkit", "Moz", "O", "ms"],
        N = ["-webkit-", "-moz-", "-o-", "-ms-"],
        U = function (l) {
          if (l in P.style) return { dom: l, css: l };
          var v,
            _,
            I = "",
            y = l.split("-");
          for (v = 0; v < y.length; v++)
            I += y[v].charAt(0).toUpperCase() + y[v].slice(1);
          for (v = 0; v < T.length; v++)
            if (((_ = T[v] + I), _ in P.style))
              return { dom: _, css: N[v] + l };
        },
        F = (t.support = {
          bind: Function.prototype.bind,
          transform: U("transform"),
          transition: U("transition"),
          backface: U("backface-visibility"),
          timing: U("transition-timing-function"),
        });
      if (F.transition) {
        var Z = F.timing.dom;
        if (((P.style[Z] = g["ease-in-back"][0]), !P.style[Z]))
          for (var Y in h) g[Y][0] = h[Y];
      }
      var L = (t.frame = (function () {
          var l =
            m.requestAnimationFrame ||
            m.webkitRequestAnimationFrame ||
            m.mozRequestAnimationFrame ||
            m.oRequestAnimationFrame ||
            m.msRequestAnimationFrame;
          return l && F.bind
            ? l.bind(m)
            : function (v) {
                m.setTimeout(v, 16);
              };
        })()),
        V = (t.now = (function () {
          var l = m.performance,
            v = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return v && F.bind
            ? v.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        W = d(function (l) {
          function v(j, ne) {
            var de = p(("" + j).split(Q)),
              oe = de[0];
            ne = ne || {};
            var Oe = fr[oe];
            if (!Oe) return f("Unsupported property: " + oe);
            if (!ne.weak || !this.props[oe]) {
              var De = Oe[0],
                we = this.props[oe];
              return (
                we || (we = this.props[oe] = new De.Bare()),
                we.init(this.$el, de, Oe, ne),
                we
              );
            }
          }
          function _(j, ne, de) {
            if (j) {
              var oe = typeof j;
              if (
                (ne ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                oe == "number" && ne)
              )
                return (
                  (this.timer = new le({
                    duration: j,
                    context: this,
                    complete: b,
                  })),
                  void (this.active = !0)
                );
              if (oe == "string" && ne) {
                switch (j) {
                  case "hide":
                    D.call(this);
                    break;
                  case "stop":
                    B.call(this);
                    break;
                  case "redraw":
                    J.call(this);
                    break;
                  default:
                    v.call(this, j, de && de[1]);
                }
                return b.call(this);
              }
              if (oe == "function") return void j.call(this, this);
              if (oe == "object") {
                var Oe = 0;
                je.call(
                  this,
                  j,
                  function (he, q_) {
                    he.span > Oe && (Oe = he.span), he.stop(), he.animate(q_);
                  },
                  function (he) {
                    "wait" in he && (Oe = c(he.wait, 0));
                  }
                ),
                  ve.call(this),
                  Oe > 0 &&
                    ((this.timer = new le({ duration: Oe, context: this })),
                    (this.active = !0),
                    ne && (this.timer.complete = b));
                var De = this,
                  we = !1,
                  Qr = {};
                L(function () {
                  je.call(De, j, function (he) {
                    he.active && ((we = !0), (Qr[he.name] = he.nextStyle));
                  }),
                    we && De.$el.css(Qr);
                });
              }
            }
          }
          function I(j) {
            (j = c(j, 0)),
              this.active
                ? this.queue.push({ options: j })
                : ((this.timer = new le({
                    duration: j,
                    context: this,
                    complete: b,
                  })),
                  (this.active = !0));
          }
          function y(j) {
            return this.active
              ? (this.queue.push({ options: j, args: arguments }),
                void (this.timer.complete = b))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function b() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var j = this.queue.shift();
              _.call(this, j.options, !0, j.args);
            }
          }
          function B(j) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var ne;
            typeof j == "string"
              ? ((ne = {}), (ne[j] = 1))
              : (ne = typeof j == "object" && j != null ? j : this.props),
              je.call(this, ne, be),
              ve.call(this);
          }
          function $(j) {
            B.call(this, j), je.call(this, j, dr, L_);
          }
          function se(j) {
            typeof j != "string" && (j = "block"), (this.el.style.display = j);
          }
          function D() {
            B.call(this), (this.el.style.display = "none");
          }
          function J() {
            this.el.offsetHeight;
          }
          function ee() {
            B.call(this), e.removeData(this.el, C), (this.$el = this.el = null);
          }
          function ve() {
            var j,
              ne,
              de = [];
            this.upstream && de.push(this.upstream);
            for (j in this.props)
              (ne = this.props[j]), ne.active && de.push(ne.string);
            (de = de.join(",")),
              this.style !== de &&
                ((this.style = de), (this.el.style[F.transition.dom] = de));
          }
          function je(j, ne, de) {
            var oe,
              Oe,
              De,
              we,
              Qr = ne !== be,
              he = {};
            for (oe in j)
              (De = j[oe]),
                oe in ke
                  ? (he.transform || (he.transform = {}),
                    (he.transform[oe] = De))
                  : (A.test(oe) && (oe = r(oe)),
                    oe in fr
                      ? (he[oe] = De)
                      : (we || (we = {}), (we[oe] = De)));
            for (oe in he) {
              if (((De = he[oe]), (Oe = this.props[oe]), !Oe)) {
                if (!Qr) continue;
                Oe = v.call(this, oe);
              }
              ne.call(this, Oe, De);
            }
            de && we && de.call(this, we);
          }
          function be(j) {
            j.stop();
          }
          function dr(j, ne) {
            j.set(ne);
          }
          function L_(j) {
            this.$el.css(j);
          }
          function Me(j, ne) {
            l[j] = function () {
              return this.children
                ? P_.call(this, ne, arguments)
                : (this.el && ne.apply(this, arguments), this);
            };
          }
          function P_(j, ne) {
            var de,
              oe = this.children.length;
            for (de = 0; oe > de; de++) j.apply(this.children[de], ne);
            return this;
          }
          (l.init = function (j) {
            if (
              ((this.$el = e(j)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              ge.keepInherited && !ge.fallback)
            ) {
              var ne = cr(this.el, "transition");
              ne && !H.test(ne) && (this.upstream = ne);
            }
            F.backface &&
              ge.hideBackface &&
              lt(this.el, F.backface.css, "hidden");
          }),
            Me("add", v),
            Me("start", _),
            Me("wait", I),
            Me("then", y),
            Me("next", b),
            Me("stop", B),
            Me("set", $),
            Me("show", se),
            Me("hide", D),
            Me("redraw", J),
            Me("destroy", ee);
        }),
        M = d(W, function (l) {
          function v(_, I) {
            var y = e.data(_, C) || e.data(_, C, new W.Bare());
            return y.el || y.init(_), I ? y.start(I) : y;
          }
          l.init = function (_, I) {
            var y = e(_);
            if (!y.length) return this;
            if (y.length === 1) return v(y[0], I);
            var b = [];
            return (
              y.each(function (B, $) {
                b.push(v($, I));
              }),
              (this.children = b),
              this
            );
          };
        }),
        q = d(function (l) {
          function v() {
            var b = this.get();
            this.update("auto");
            var B = this.get();
            return this.update(b), B;
          }
          function _(b, B, $) {
            return B !== void 0 && ($ = B), b in g ? b : $;
          }
          function I(b) {
            var B = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(b);
            return (B ? i(B[1], B[2], B[3]) : b).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var y = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (b, B, $, se) {
            (this.$el = b), (this.el = b[0]);
            var D = B[0];
            $[2] && (D = $[2]),
              lr[D] && (D = lr[D]),
              (this.name = D),
              (this.type = $[1]),
              (this.duration = c(B[1], this.duration, y.duration)),
              (this.ease = _(B[2], this.ease, y.ease)),
              (this.delay = c(B[3], this.delay, y.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = k.test(this.name)),
              (this.unit = se.unit || this.unit || ge.defaultUnit),
              (this.angle = se.angle || this.angle || ge.defaultAngle),
              ge.fallback || se.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    Q +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? Q + g[this.ease][0] : "") +
                    (this.delay ? Q + this.delay + "ms" : "")));
          }),
            (l.set = function (b) {
              (b = this.convert(b, this.type)), this.update(b), this.redraw();
            }),
            (l.transition = function (b) {
              (this.active = !0),
                (b = this.convert(b, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  b == "auto" && (b = v.call(this))),
                (this.nextStyle = b);
            }),
            (l.fallback = function (b) {
              var B =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (b = this.convert(b, this.type)),
                this.auto &&
                  (B == "auto" && (B = this.convert(this.get(), this.type)),
                  b == "auto" && (b = v.call(this))),
                (this.tween = new z({
                  from: B,
                  to: b,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return cr(this.el, this.name);
            }),
            (l.update = function (b) {
              lt(this.el, this.name, b);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                lt(this.el, this.name, this.get()));
              var b = this.tween;
              b && b.context && b.destroy();
            }),
            (l.convert = function (b, B) {
              if (b == "auto" && this.auto) return b;
              var $,
                se = typeof b == "number",
                D = typeof b == "string";
              switch (B) {
                case O:
                  if (se) return b;
                  if (D && b.replace(S, "") === "") return +b;
                  $ = "number(unitless)";
                  break;
                case w:
                  if (D) {
                    if (b === "" && this.original) return this.original;
                    if (B.test(b))
                      return b.charAt(0) == "#" && b.length == 7 ? b : I(b);
                  }
                  $ = "hex or rgb string";
                  break;
                case R:
                  if (se) return b + this.unit;
                  if (D && B.test(b)) return b;
                  $ = "number(px) or string(unit)";
                  break;
                case x:
                  if (se) return b + this.unit;
                  if (D && B.test(b)) return b;
                  $ = "number(px) or string(unit or %)";
                  break;
                case G:
                  if (se) return b + this.angle;
                  if (D && B.test(b)) return b;
                  $ = "number(deg) or string(angle)";
                  break;
                case X:
                  if (se || (D && x.test(b))) return b;
                  $ = "number(unitless) or string(unit or %)";
              }
              return a($, b), b;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        K = d(q, function (l, v) {
          l.init = function () {
            v.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), w));
          };
        }),
        te = d(q, function (l, v) {
          (l.init = function () {
            v.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (_) {
              this.$el[this.name](_);
            });
        }),
        re = d(q, function (l, v) {
          function _(I, y) {
            var b, B, $, se, D;
            for (b in I)
              (se = ke[b]),
                ($ = se[0]),
                (B = se[1] || b),
                (D = this.convert(I[b], $)),
                y.call(this, B, D, $);
          }
          (l.init = function () {
            v.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                ke.perspective &&
                  ge.perspective &&
                  ((this.current.perspective = ge.perspective),
                  lt(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (I) {
              _.call(this, I, function (y, b) {
                this.current[y] = b;
              }),
                lt(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (I) {
              var y = this.values(I);
              this.tween = new Ct({
                current: this.current,
                values: y,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var b,
                B = {};
              for (b in this.current) B[b] = b in y ? y[b] : this.current[b];
              (this.active = !0), (this.nextStyle = this.style(B));
            }),
            (l.fallback = function (I) {
              var y = this.values(I);
              this.tween = new Ct({
                current: this.current,
                values: y,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              lt(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (I) {
              var y,
                b = "";
              for (y in I) b += y + "(" + I[y] + ") ";
              return b;
            }),
            (l.values = function (I) {
              var y,
                b = {};
              return (
                _.call(this, I, function (B, $, se) {
                  (b[B] = $),
                    this.current[B] === void 0 &&
                      ((y = 0),
                      ~B.indexOf("scale") && (y = 1),
                      (this.current[B] = this.convert(y, se)));
                }),
                b
              );
            });
        }),
        z = d(function (l) {
          function v(D) {
            $.push(D) === 1 && L(_);
          }
          function _() {
            var D,
              J,
              ee,
              ve = $.length;
            if (ve)
              for (L(_), J = V(), D = ve; D--; )
                (ee = $[D]), ee && ee.render(J);
          }
          function I(D) {
            var J,
              ee = e.inArray(D, $);
            ee >= 0 &&
              ((J = $.slice(ee + 1)),
              ($.length = ee),
              J.length && ($ = $.concat(J)));
          }
          function y(D) {
            return Math.round(D * se) / se;
          }
          function b(D, J, ee) {
            return i(
              D[0] + ee * (J[0] - D[0]),
              D[1] + ee * (J[1] - D[1]),
              D[2] + ee * (J[2] - D[2])
            );
          }
          var B = { ease: g.ease[1], from: 0, to: 1 };
          (l.init = function (D) {
            (this.duration = D.duration || 0), (this.delay = D.delay || 0);
            var J = D.ease || B.ease;
            g[J] && (J = g[J][1]),
              typeof J != "function" && (J = B.ease),
              (this.ease = J),
              (this.update = D.update || o),
              (this.complete = D.complete || o),
              (this.context = D.context || this),
              (this.name = D.name);
            var ee = D.from,
              ve = D.to;
            ee === void 0 && (ee = B.from),
              ve === void 0 && (ve = B.to),
              (this.unit = D.unit || ""),
              typeof ee == "number" && typeof ve == "number"
                ? ((this.begin = ee), (this.change = ve - ee))
                : this.format(ve, ee),
              (this.value = this.begin + this.unit),
              (this.start = V()),
              D.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = V()), (this.active = !0), v(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), I(this));
            }),
            (l.render = function (D) {
              var J,
                ee = D - this.start;
              if (this.delay) {
                if (ee <= this.delay) return;
                ee -= this.delay;
              }
              if (ee < this.duration) {
                var ve = this.ease(ee, 0, 1, this.duration);
                return (
                  (J = this.startRGB
                    ? b(this.startRGB, this.endRGB, ve)
                    : y(this.begin + ve * this.change)),
                  (this.value = J + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (J = this.endHex || this.begin + this.change),
                (this.value = J + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (D, J) {
              if (((J += ""), (D += ""), D.charAt(0) == "#"))
                return (
                  (this.startRGB = n(J)),
                  (this.endRGB = n(D)),
                  (this.endHex = D),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var ee = J.replace(S, ""),
                  ve = D.replace(S, "");
                ee !== ve && s("tween", J, D), (this.unit = ee);
              }
              (J = parseFloat(J)),
                (D = parseFloat(D)),
                (this.begin = this.value = J),
                (this.change = D - J);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var $ = [],
            se = 1e3;
        }),
        le = d(z, function (l) {
          (l.init = function (v) {
            (this.duration = v.duration || 0),
              (this.complete = v.complete || o),
              (this.context = v.context),
              this.play();
          }),
            (l.render = function (v) {
              var _ = v - this.start;
              _ < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        Ct = d(z, function (l, v) {
          (l.init = function (_) {
            (this.context = _.context),
              (this.update = _.update),
              (this.tweens = []),
              (this.current = _.current);
            var I, y;
            for (I in _.values)
              (y = _.values[I]),
                this.current[I] !== y &&
                  this.tweens.push(
                    new z({
                      name: I,
                      from: this.current[I],
                      to: y,
                      duration: _.duration,
                      delay: _.delay,
                      ease: _.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (_) {
              var I,
                y,
                b = this.tweens.length,
                B = !1;
              for (I = b; I--; )
                (y = this.tweens[I]),
                  y.context &&
                    (y.render(_), (this.current[y.name] = y.value), (B = !0));
              return B
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((v.destroy.call(this), this.tweens)) {
                var _,
                  I = this.tweens.length;
                for (_ = I; _--; ) this.tweens[_].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        ge = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !F.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!F.transition) return (ge.fallback = !0);
        ge.agentTests.push("(" + l + ")");
        var v = new RegExp(ge.agentTests.join("|"), "i");
        ge.fallback = v.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new z(l);
        }),
        (t.delay = function (l, v, _) {
          return new le({ complete: v, duration: l, context: _ });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var lt = e.style,
        cr = e.css,
        lr = { transform: F.transform && F.transform.css },
        fr = {
          color: [K, w],
          background: [K, w, "background-color"],
          "outline-color": [K, w],
          "border-color": [K, w],
          "border-top-color": [K, w],
          "border-right-color": [K, w],
          "border-bottom-color": [K, w],
          "border-left-color": [K, w],
          "border-width": [q, R],
          "border-top-width": [q, R],
          "border-right-width": [q, R],
          "border-bottom-width": [q, R],
          "border-left-width": [q, R],
          "border-spacing": [q, R],
          "letter-spacing": [q, R],
          margin: [q, R],
          "margin-top": [q, R],
          "margin-right": [q, R],
          "margin-bottom": [q, R],
          "margin-left": [q, R],
          padding: [q, R],
          "padding-top": [q, R],
          "padding-right": [q, R],
          "padding-bottom": [q, R],
          "padding-left": [q, R],
          "outline-width": [q, R],
          opacity: [q, O],
          top: [q, x],
          right: [q, x],
          bottom: [q, x],
          left: [q, x],
          "font-size": [q, x],
          "text-indent": [q, x],
          "word-spacing": [q, x],
          width: [q, x],
          "min-width": [q, x],
          "max-width": [q, x],
          height: [q, x],
          "min-height": [q, x],
          "max-height": [q, x],
          "line-height": [q, X],
          "scroll-top": [te, O, "scrollTop"],
          "scroll-left": [te, O, "scrollLeft"],
        },
        ke = {};
      F.transform &&
        ((fr.transform = [re]),
        (ke = {
          x: [x, "translateX"],
          y: [x, "translateY"],
          rotate: [G],
          rotateX: [G],
          rotateY: [G],
          scale: [O],
          scaleX: [O],
          scaleY: [O],
          skew: [G],
          skewX: [G],
          skewY: [G],
        })),
        F.transform &&
          F.backface &&
          ((ke.z = [x, "translateZ"]),
          (ke.rotateZ = [G]),
          (ke.scaleZ = [O]),
          (ke.perspective = [R]));
      var Si = /ms/,
        Yr = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var As = u((bX, Ss) => {
    "use strict";
    var U_ = window.$,
      X_ = Ai() && U_.tram;
    Ss.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        c = n.toString,
        f = n.hasOwnProperty,
        p = r.forEach,
        d = r.map,
        g = r.reduce,
        h = r.reduceRight,
        E = r.filter,
        m = r.every,
        C = r.some,
        S = r.indexOf,
        A = r.lastIndexOf,
        O = Array.isArray,
        w = Object.keys,
        R = i.bind,
        x =
          (e.each =
          e.forEach =
            function (T, N, U) {
              if (T == null) return T;
              if (p && T.forEach === p) T.forEach(N, U);
              else if (T.length === +T.length) {
                for (var F = 0, Z = T.length; F < Z; F++)
                  if (N.call(U, T[F], F, T) === t) return;
              } else
                for (var Y = e.keys(T), F = 0, Z = Y.length; F < Z; F++)
                  if (N.call(U, T[Y[F]], Y[F], T) === t) return;
              return T;
            });
      (e.map = e.collect =
        function (T, N, U) {
          var F = [];
          return T == null
            ? F
            : d && T.map === d
            ? T.map(N, U)
            : (x(T, function (Z, Y, L) {
                F.push(N.call(U, Z, Y, L));
              }),
              F);
        }),
        (e.find = e.detect =
          function (T, N, U) {
            var F;
            return (
              G(T, function (Z, Y, L) {
                if (N.call(U, Z, Y, L)) return (F = Z), !0;
              }),
              F
            );
          }),
        (e.filter = e.select =
          function (T, N, U) {
            var F = [];
            return T == null
              ? F
              : E && T.filter === E
              ? T.filter(N, U)
              : (x(T, function (Z, Y, L) {
                  N.call(U, Z, Y, L) && F.push(Z);
                }),
                F);
          });
      var G =
        (e.some =
        e.any =
          function (T, N, U) {
            N || (N = e.identity);
            var F = !1;
            return T == null
              ? F
              : C && T.some === C
              ? T.some(N, U)
              : (x(T, function (Z, Y, L) {
                  if (F || (F = N.call(U, Z, Y, L))) return t;
                }),
                !!F);
          });
      (e.contains = e.include =
        function (T, N) {
          return T == null
            ? !1
            : S && T.indexOf === S
            ? T.indexOf(N) != -1
            : G(T, function (U) {
                return U === N;
              });
        }),
        (e.delay = function (T, N) {
          var U = a.call(arguments, 2);
          return setTimeout(function () {
            return T.apply(null, U);
          }, N);
        }),
        (e.defer = function (T) {
          return e.delay.apply(e, [T, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (T) {
          var N, U, F;
          return function () {
            N ||
              ((N = !0),
              (U = arguments),
              (F = this),
              X_.frame(function () {
                (N = !1), T.apply(F, U);
              }));
          };
        }),
        (e.debounce = function (T, N, U) {
          var F,
            Z,
            Y,
            L,
            V,
            W = function () {
              var M = e.now() - L;
              M < N
                ? (F = setTimeout(W, N - M))
                : ((F = null), U || ((V = T.apply(Y, Z)), (Y = Z = null)));
            };
          return function () {
            (Y = this), (Z = arguments), (L = e.now());
            var M = U && !F;
            return (
              F || (F = setTimeout(W, N)),
              M && ((V = T.apply(Y, Z)), (Y = Z = null)),
              V
            );
          };
        }),
        (e.defaults = function (T) {
          if (!e.isObject(T)) return T;
          for (var N = 1, U = arguments.length; N < U; N++) {
            var F = arguments[N];
            for (var Z in F) T[Z] === void 0 && (T[Z] = F[Z]);
          }
          return T;
        }),
        (e.keys = function (T) {
          if (!e.isObject(T)) return [];
          if (w) return w(T);
          var N = [];
          for (var U in T) e.has(T, U) && N.push(U);
          return N;
        }),
        (e.has = function (T, N) {
          return f.call(T, N);
        }),
        (e.isObject = function (T) {
          return T === Object(T);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var X = /(.)^/,
        H = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        k = /\\|'|\r|\n|\u2028|\u2029/g,
        Q = function (T) {
          return "\\" + H[T];
        },
        P = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (T, N, U) {
          !N && U && (N = U), (N = e.defaults({}, N, e.templateSettings));
          var F = RegExp(
              [
                (N.escape || X).source,
                (N.interpolate || X).source,
                (N.evaluate || X).source,
              ].join("|") + "|$",
              "g"
            ),
            Z = 0,
            Y = "__p+='";
          T.replace(F, function (M, q, K, te, re) {
            return (
              (Y += T.slice(Z, re).replace(k, Q)),
              (Z = re + M.length),
              q
                ? (Y +=
                    `'+
    ((__t=(` +
                    q +
                    `))==null?'':_.escape(__t))+
    '`)
                : K
                ? (Y +=
                    `'+
    ((__t=(` +
                    K +
                    `))==null?'':__t)+
    '`)
                : te &&
                  (Y +=
                    `';
    ` +
                    te +
                    `
    __p+='`),
              M
            );
          }),
            (Y += `';
    `);
          var L = N.variable;
          if (L) {
            if (!P.test(L))
              throw new Error("variable is not a bare identifier: " + L);
          } else
            (Y =
              `with(obj||{}){
    ` +
              Y +
              `}
    `),
              (L = "obj");
          Y =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
    ` +
            Y +
            `return __p;
    `;
          var V;
          try {
            V = new Function(N.variable || "obj", "_", Y);
          } catch (M) {
            throw ((M.source = Y), M);
          }
          var W = function (M) {
            return V.call(this, M, e);
          };
          return (
            (W.source =
              "function(" +
              L +
              `){
    ` +
              Y +
              "}"),
            W
          );
        }),
        e
      );
    })();
  });
  var $e = u((OX, qs) => {
    "use strict";
    var ae = {},
      Nt = {},
      Lt = [],
      wi = window.Webflow || [],
      ft = window.jQuery,
      Ge = ft(window),
      H_ = ft(document),
      Ke = ft.isFunction,
      Fe = (ae._ = As()),
      ws = (ae.tram = Ai() && ft.tram),
      en = !1,
      Ri = !1;
    ws.config.hideBackface = !1;
    ws.config.keepInherited = !0;
    ae.define = function (e, t, r) {
      Nt[e] && Cs(Nt[e]);
      var n = (Nt[e] = t(ft, Fe, r) || {});
      return Rs(n), n;
    };
    ae.require = function (e) {
      return Nt[e];
    };
    function Rs(e) {
      ae.env() &&
        (Ke(e.design) && Ge.on("__wf_design", e.design),
        Ke(e.preview) && Ge.on("__wf_preview", e.preview)),
        Ke(e.destroy) && Ge.on("__wf_destroy", e.destroy),
        e.ready && Ke(e.ready) && B_(e);
    }
    function B_(e) {
      if (en) {
        e.ready();
        return;
      }
      Fe.contains(Lt, e.ready) || Lt.push(e.ready);
    }
    function Cs(e) {
      Ke(e.design) && Ge.off("__wf_design", e.design),
        Ke(e.preview) && Ge.off("__wf_preview", e.preview),
        Ke(e.destroy) && Ge.off("__wf_destroy", e.destroy),
        e.ready && Ke(e.ready) && W_(e);
    }
    function W_(e) {
      Lt = Fe.filter(Lt, function (t) {
        return t !== e.ready;
      });
    }
    ae.push = function (e) {
      if (en) {
        Ke(e) && e();
        return;
      }
      wi.push(e);
    };
    ae.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var Jr = navigator.userAgent.toLowerCase(),
      Ns = (ae.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      k_ = (ae.env.chrome =
        /chrome/.test(Jr) &&
        /Google/.test(navigator.vendor) &&
        parseInt(Jr.match(/chrome\/(\d+)\./)[1], 10)),
      j_ = (ae.env.ios = /(ipod|iphone|ipad)/.test(Jr));
    ae.env.safari = /safari/.test(Jr) && !k_ && !j_;
    var xi;
    Ns &&
      H_.on("touchstart mousedown", function (e) {
        xi = e.target;
      });
    ae.validClick = Ns
      ? function (e) {
          return e === xi || ft.contains(e, xi);
        }
      : function () {
          return !0;
        };
    var Ls = "resize.webflow orientationchange.webflow load.webflow",
      z_ = "scroll.webflow " + Ls;
    ae.resize = Ci(Ge, Ls);
    ae.scroll = Ci(Ge, z_);
    ae.redraw = Ci();
    function Ci(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = Fe.throttle(function (i) {
          Fe.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (Fe.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = Fe.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    ae.location = function (e) {
      window.location = e;
    };
    ae.env() && (ae.location = function () {});
    ae.ready = function () {
      (en = !0), Ri ? K_() : Fe.each(Lt, xs), Fe.each(wi, xs), ae.resize.up();
    };
    function xs(e) {
      Ke(e) && e();
    }
    function K_() {
      (Ri = !1), Fe.each(Nt, Rs);
    }
    var mt;
    ae.load = function (e) {
      mt.then(e);
    };
    function Ps() {
      mt && (mt.reject(), Ge.off("load", mt.resolve)),
        (mt = new ft.Deferred()),
        Ge.on("load", mt.resolve);
    }
    ae.destroy = function (e) {
      (e = e || {}),
        (Ri = !0),
        Ge.triggerHandler("__wf_destroy"),
        e.domready != null && (en = e.domready),
        Fe.each(Nt, Cs),
        ae.resize.off(),
        ae.scroll.off(),
        ae.redraw.off(),
        (Lt = []),
        (wi = []),
        mt.state() === "pending" && Ps();
    };
    ft(ae.ready);
    Ps();
    qs.exports = window.Webflow = ae;
  });
  var Fs = u((SX, Ds) => {
    "use strict";
    var Ms = $e();
    Ms.define(
      "brand",
      (Ds.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          c =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var h = n.attr("data-wf-status"),
            E = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(E) && a.hostname !== E && (h = !0),
            h &&
              !s &&
              ((f = f || d()),
              g(),
              setTimeout(g, 500),
              e(r).off(c, p).on(c, p));
        };
        function p() {
          var h =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", h ? "display: none !important;" : "");
        }
        // function d() {
        //   var h = e('<a class="w-webflow-badge"></a>').attr(
        //       "href",
        //       "https://webflow.com?utm_campaign=brandjs"
        //     ),
        //     E = e("<img>")
        //       .attr(
        //         "src",
        //         "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
        //       )
        //       .attr("alt", "")
        //       .css({ marginRight: "4px", width: "26px" }),
        //     m = e("<img>")
        //       .attr(
        //         "src",
        //         "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
        //       )
        //       .attr("alt", "Made in Webflow");
        //   return h.append(E, m), h[0];
        // }
        function g() {
          var h = i.children(o),
            E = h.length && h.get(0) === f,
            m = Ms.env("editor");
          if (E) {
            m && h.remove();
            return;
          }
          h.length && h.remove(), m || i.append(f);
        }
        return t;
      })
    );
  });
  var Vs = u((AX, Gs) => {
    "use strict";
    var Ni = $e();
    Ni.define(
      "edit",
      (Gs.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Ni.env("test") || Ni.env("frame")) && !r.fixture && !$_())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          c,
          f = r.load || g,
          p = !1;
        try {
          p =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        p
          ? f()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            f()
          : i.on(s, d).triggerHandler(s);
        function d() {
          c || (/\?edit/.test(a.hash) && f());
        }
        function g() {
          (c = !0),
            (window.WebflowEditor = !0),
            i.off(s, d),
            A(function (w) {
              e.ajax({
                url: S("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: h(w),
              });
            });
        }
        function h(w) {
          return function (R) {
            if (!R) {
              console.error("Could not load editor data");
              return;
            }
            (R.thirdPartyCookiesSupported = w),
              E(C(R.scriptPath), function () {
                window.WebflowEditor(R);
              });
          };
        }
        function E(w, R) {
          e.ajax({ type: "GET", url: w, dataType: "script", cache: !0 }).then(
            R,
            m
          );
        }
        function m(w, R, x) {
          throw (console.error("Could not load editor script: " + R), x);
        }
        function C(w) {
          return w.indexOf("//") >= 0
            ? w
            : S("https://editor-api.webflow.com" + w);
        }
        function S(w) {
          return w.replace(/([^:])\/\//g, "$1/");
        }
        function A(w) {
          var R = window.document.createElement("iframe");
          (R.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (R.style.display = "none"),
            (R.sandbox = "allow-scripts allow-same-origin");
          var x = function (G) {
            G.data === "WF_third_party_cookies_unsupported"
              ? (O(R, x), w(!1))
              : G.data === "WF_third_party_cookies_supported" &&
                (O(R, x), w(!0));
          };
          (R.onerror = function () {
            O(R, x), w(!1);
          }),
            window.addEventListener("message", x, !1),
            window.document.body.appendChild(R);
        }
        function O(w, R) {
          window.removeEventListener("message", R, !1), w.remove();
        }
        return n;
      })
    );
    function $_() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Xs = u((xX, Us) => {
    "use strict";
    var Y_ = $e();
    Y_.define(
      "focus-visible",
      (Us.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(O) {
            return !!(
              O &&
              O !== document &&
              O.nodeName !== "HTML" &&
              O.nodeName !== "BODY" &&
              "classList" in O &&
              "contains" in O.classList
            );
          }
          function c(O) {
            var w = O.type,
              R = O.tagName;
            return !!(
              (R === "INPUT" && a[w] && !O.readOnly) ||
              (R === "TEXTAREA" && !O.readOnly) ||
              O.isContentEditable
            );
          }
          function f(O) {
            O.getAttribute("data-wf-focus-visible") ||
              O.setAttribute("data-wf-focus-visible", "true");
          }
          function p(O) {
            O.getAttribute("data-wf-focus-visible") &&
              O.removeAttribute("data-wf-focus-visible");
          }
          function d(O) {
            O.metaKey ||
              O.altKey ||
              O.ctrlKey ||
              (s(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function g() {
            n = !1;
          }
          function h(O) {
            s(O.target) && (n || c(O.target)) && f(O.target);
          }
          function E(O) {
            s(O.target) &&
              O.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              p(O.target));
          }
          function m() {
            document.visibilityState === "hidden" && (i && (n = !0), C());
          }
          function C() {
            document.addEventListener("mousemove", A),
              document.addEventListener("mousedown", A),
              document.addEventListener("mouseup", A),
              document.addEventListener("pointermove", A),
              document.addEventListener("pointerdown", A),
              document.addEventListener("pointerup", A),
              document.addEventListener("touchmove", A),
              document.addEventListener("touchstart", A),
              document.addEventListener("touchend", A);
          }
          function S() {
            document.removeEventListener("mousemove", A),
              document.removeEventListener("mousedown", A),
              document.removeEventListener("mouseup", A),
              document.removeEventListener("pointermove", A),
              document.removeEventListener("pointerdown", A),
              document.removeEventListener("pointerup", A),
              document.removeEventListener("touchmove", A),
              document.removeEventListener("touchstart", A),
              document.removeEventListener("touchend", A);
          }
          function A(O) {
            (O.target.nodeName && O.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), S());
          }
          document.addEventListener("keydown", d, !0),
            document.addEventListener("mousedown", g, !0),
            document.addEventListener("pointerdown", g, !0),
            document.addEventListener("touchstart", g, !0),
            document.addEventListener("visibilitychange", m, !0),
            C(),
            r.addEventListener("focus", h, !0),
            r.addEventListener("blur", E, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Ws = u((wX, Bs) => {
    "use strict";
    var Hs = $e();
    Hs.define(
      "focus",
      (Bs.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            c = s.tagName;
          return (
            (/^a$/i.test(c) && s.href != null) ||
            (/^(button|textarea)$/i.test(c) && s.disabled !== !0) ||
            (/^input$/i.test(c) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(c) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(c) ||
            (/^video$/i.test(c) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Hs.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var zs = u((RX, js) => {
    "use strict";
    var Li = window.jQuery,
      Ye = {},
      tn = [],
      ks = ".w-ix",
      rn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Li(t).triggerHandler(Ye.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Li(t).triggerHandler(Ye.types.OUTRO));
        },
      };
    Ye.triggers = {};
    Ye.types = { INTRO: "w-ix-intro" + ks, OUTRO: "w-ix-outro" + ks };
    Ye.init = function () {
      for (var e = tn.length, t = 0; t < e; t++) {
        var r = tn[t];
        r[0](0, r[1]);
      }
      (tn = []), Li.extend(Ye.triggers, rn);
    };
    Ye.async = function () {
      for (var e in rn) {
        var t = rn[e];
        rn.hasOwnProperty(e) &&
          (Ye.triggers[e] = function (r, n) {
            tn.push([t, n]);
          });
      }
    };
    Ye.async();
    js.exports = Ye;
  });
  var Qs = u((CX, Ys) => {
    "use strict";
    var Pi = zs();
    function Ks(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var Q_ = window.jQuery,
      nn = {},
      $s = ".w-ix",
      Z_ = {
        reset: function (e, t) {
          Pi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Pi.triggers.intro(e, t), Ks(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Pi.triggers.outro(e, t), Ks(t, "COMPONENT_INACTIVE");
        },
      };
    nn.triggers = {};
    nn.types = { INTRO: "w-ix-intro" + $s, OUTRO: "w-ix-outro" + $s };
    Q_.extend(nn.triggers, Z_);
    Ys.exports = nn;
  });
  var Zs = u((NX, nt) => {
    function qi(e) {
      return (
        (nt.exports = qi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (nt.exports.__esModule = !0),
        (nt.exports.default = nt.exports),
        qi(e)
      );
    }
    (nt.exports = qi),
      (nt.exports.__esModule = !0),
      (nt.exports.default = nt.exports);
  });
  var on = u((LX, pr) => {
    var J_ = Zs().default;
    function Js(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (Js = function (i) {
        return i ? r : t;
      })(e);
    }
    function eT(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (J_(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = Js(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (pr.exports = eT),
      (pr.exports.__esModule = !0),
      (pr.exports.default = pr.exports);
  });
  var eu = u((PX, gr) => {
    function tT(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (gr.exports = tT),
      (gr.exports.__esModule = !0),
      (gr.exports.default = gr.exports);
  });
  var fe = u((qX, tu) => {
    var an = function (e) {
      return e && e.Math == Math && e;
    };
    tu.exports =
      an(typeof globalThis == "object" && globalThis) ||
      an(typeof window == "object" && window) ||
      an(typeof self == "object" && self) ||
      an(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Pt = u((MX, ru) => {
    ru.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var _t = u((DX, nu) => {
    var rT = Pt();
    nu.exports = !rT(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var sn = u((FX, iu) => {
    var vr = Function.prototype.call;
    iu.exports = vr.bind
      ? vr.bind(vr)
      : function () {
          return vr.apply(vr, arguments);
        };
  });
  var uu = u((su) => {
    "use strict";
    var ou = {}.propertyIsEnumerable,
      au = Object.getOwnPropertyDescriptor,
      nT = au && !ou.call({ 1: 2 }, 1);
    su.f = nT
      ? function (t) {
          var r = au(this, t);
          return !!r && r.enumerable;
        }
      : ou;
  });
  var Mi = u((VX, cu) => {
    cu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Ve = u((UX, fu) => {
    var lu = Function.prototype,
      Di = lu.bind,
      Fi = lu.call,
      iT = Di && Di.bind(Fi);
    fu.exports = Di
      ? function (e) {
          return e && iT(Fi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Fi.apply(e, arguments);
            }
          );
        };
  });
  var gu = u((XX, pu) => {
    var du = Ve(),
      oT = du({}.toString),
      aT = du("".slice);
    pu.exports = function (e) {
      return aT(oT(e), 8, -1);
    };
  });
  var hu = u((HX, vu) => {
    var sT = fe(),
      uT = Ve(),
      cT = Pt(),
      lT = gu(),
      Gi = sT.Object,
      fT = uT("".split);
    vu.exports = cT(function () {
      return !Gi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return lT(e) == "String" ? fT(e, "") : Gi(e);
        }
      : Gi;
  });
  var Vi = u((BX, Eu) => {
    var dT = fe(),
      pT = dT.TypeError;
    Eu.exports = function (e) {
      if (e == null) throw pT("Can't call method on " + e);
      return e;
    };
  });
  var hr = u((WX, yu) => {
    var gT = hu(),
      vT = Vi();
    yu.exports = function (e) {
      return gT(vT(e));
    };
  });
  var Qe = u((kX, mu) => {
    mu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var qt = u((jX, _u) => {
    var hT = Qe();
    _u.exports = function (e) {
      return typeof e == "object" ? e !== null : hT(e);
    };
  });
  var Er = u((zX, Tu) => {
    var Ui = fe(),
      ET = Qe(),
      yT = function (e) {
        return ET(e) ? e : void 0;
      };
    Tu.exports = function (e, t) {
      return arguments.length < 2 ? yT(Ui[e]) : Ui[e] && Ui[e][t];
    };
  });
  var bu = u((KX, Iu) => {
    var mT = Ve();
    Iu.exports = mT({}.isPrototypeOf);
  });
  var Su = u(($X, Ou) => {
    var _T = Er();
    Ou.exports = _T("navigator", "userAgent") || "";
  });
  var Lu = u((YX, Nu) => {
    var Cu = fe(),
      Xi = Su(),
      Au = Cu.process,
      xu = Cu.Deno,
      wu = (Au && Au.versions) || (xu && xu.version),
      Ru = wu && wu.v8,
      Ue,
      un;
    Ru &&
      ((Ue = Ru.split(".")),
      (un = Ue[0] > 0 && Ue[0] < 4 ? 1 : +(Ue[0] + Ue[1])));
    !un &&
      Xi &&
      ((Ue = Xi.match(/Edge\/(\d+)/)),
      (!Ue || Ue[1] >= 74) &&
        ((Ue = Xi.match(/Chrome\/(\d+)/)), Ue && (un = +Ue[1])));
    Nu.exports = un;
  });
  var Hi = u((QX, qu) => {
    var Pu = Lu(),
      TT = Pt();
    qu.exports =
      !!Object.getOwnPropertySymbols &&
      !TT(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Pu && Pu < 41)
        );
      });
  });
  var Bi = u((ZX, Mu) => {
    var IT = Hi();
    Mu.exports = IT && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var Wi = u((JX, Du) => {
    var bT = fe(),
      OT = Er(),
      ST = Qe(),
      AT = bu(),
      xT = Bi(),
      wT = bT.Object;
    Du.exports = xT
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = OT("Symbol");
          return ST(t) && AT(t.prototype, wT(e));
        };
  });
  var Gu = u((eH, Fu) => {
    var RT = fe(),
      CT = RT.String;
    Fu.exports = function (e) {
      try {
        return CT(e);
      } catch {
        return "Object";
      }
    };
  });
  var Uu = u((tH, Vu) => {
    var NT = fe(),
      LT = Qe(),
      PT = Gu(),
      qT = NT.TypeError;
    Vu.exports = function (e) {
      if (LT(e)) return e;
      throw qT(PT(e) + " is not a function");
    };
  });
  var Hu = u((rH, Xu) => {
    var MT = Uu();
    Xu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : MT(r);
    };
  });
  var Wu = u((nH, Bu) => {
    var DT = fe(),
      ki = sn(),
      ji = Qe(),
      zi = qt(),
      FT = DT.TypeError;
    Bu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && ji((r = e.toString)) && !zi((n = ki(r, e)))) ||
        (ji((r = e.valueOf)) && !zi((n = ki(r, e)))) ||
        (t !== "string" && ji((r = e.toString)) && !zi((n = ki(r, e))))
      )
        return n;
      throw FT("Can't convert object to primitive value");
    };
  });
  var ju = u((iH, ku) => {
    ku.exports = !1;
  });
  var cn = u((oH, Ku) => {
    var zu = fe(),
      GT = Object.defineProperty;
    Ku.exports = function (e, t) {
      try {
        GT(zu, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        zu[e] = t;
      }
      return t;
    };
  });
  var ln = u((aH, Yu) => {
    var VT = fe(),
      UT = cn(),
      $u = "__core-js_shared__",
      XT = VT[$u] || UT($u, {});
    Yu.exports = XT;
  });
  var Ki = u((sH, Zu) => {
    var HT = ju(),
      Qu = ln();
    (Zu.exports = function (e, t) {
      return Qu[e] || (Qu[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: HT ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var ec = u((uH, Ju) => {
    var BT = fe(),
      WT = Vi(),
      kT = BT.Object;
    Ju.exports = function (e) {
      return kT(WT(e));
    };
  });
  var dt = u((cH, tc) => {
    var jT = Ve(),
      zT = ec(),
      KT = jT({}.hasOwnProperty);
    tc.exports =
      Object.hasOwn ||
      function (t, r) {
        return KT(zT(t), r);
      };
  });
  var $i = u((lH, rc) => {
    var $T = Ve(),
      YT = 0,
      QT = Math.random(),
      ZT = $T((1).toString);
    rc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + ZT(++YT + QT, 36);
    };
  });
  var Yi = u((fH, sc) => {
    var JT = fe(),
      eI = Ki(),
      nc = dt(),
      tI = $i(),
      ic = Hi(),
      ac = Bi(),
      Mt = eI("wks"),
      Tt = JT.Symbol,
      oc = Tt && Tt.for,
      rI = ac ? Tt : (Tt && Tt.withoutSetter) || tI;
    sc.exports = function (e) {
      if (!nc(Mt, e) || !(ic || typeof Mt[e] == "string")) {
        var t = "Symbol." + e;
        ic && nc(Tt, e)
          ? (Mt[e] = Tt[e])
          : ac && oc
          ? (Mt[e] = oc(t))
          : (Mt[e] = rI(t));
      }
      return Mt[e];
    };
  });
  var fc = u((dH, lc) => {
    var nI = fe(),
      iI = sn(),
      uc = qt(),
      cc = Wi(),
      oI = Hu(),
      aI = Wu(),
      sI = Yi(),
      uI = nI.TypeError,
      cI = sI("toPrimitive");
    lc.exports = function (e, t) {
      if (!uc(e) || cc(e)) return e;
      var r = oI(e, cI),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = iI(r, e, t)), !uc(n) || cc(n))
        )
          return n;
        throw uI("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), aI(e, t);
    };
  });
  var Qi = u((pH, dc) => {
    var lI = fc(),
      fI = Wi();
    dc.exports = function (e) {
      var t = lI(e, "string");
      return fI(t) ? t : t + "";
    };
  });
  var Ji = u((gH, gc) => {
    var dI = fe(),
      pc = qt(),
      Zi = dI.document,
      pI = pc(Zi) && pc(Zi.createElement);
    gc.exports = function (e) {
      return pI ? Zi.createElement(e) : {};
    };
  });
  var eo = u((vH, vc) => {
    var gI = _t(),
      vI = Pt(),
      hI = Ji();
    vc.exports =
      !gI &&
      !vI(function () {
        return (
          Object.defineProperty(hI("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var to = u((Ec) => {
    var EI = _t(),
      yI = sn(),
      mI = uu(),
      _I = Mi(),
      TI = hr(),
      II = Qi(),
      bI = dt(),
      OI = eo(),
      hc = Object.getOwnPropertyDescriptor;
    Ec.f = EI
      ? hc
      : function (t, r) {
          if (((t = TI(t)), (r = II(r)), OI))
            try {
              return hc(t, r);
            } catch {}
          if (bI(t, r)) return _I(!yI(mI.f, t, r), t[r]);
        };
  });
  var yr = u((EH, mc) => {
    var yc = fe(),
      SI = qt(),
      AI = yc.String,
      xI = yc.TypeError;
    mc.exports = function (e) {
      if (SI(e)) return e;
      throw xI(AI(e) + " is not an object");
    };
  });
  var mr = u((Ic) => {
    var wI = fe(),
      RI = _t(),
      CI = eo(),
      _c = yr(),
      NI = Qi(),
      LI = wI.TypeError,
      Tc = Object.defineProperty;
    Ic.f = RI
      ? Tc
      : function (t, r, n) {
          if ((_c(t), (r = NI(r)), _c(n), CI))
            try {
              return Tc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw LI("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var fn = u((mH, bc) => {
    var PI = _t(),
      qI = mr(),
      MI = Mi();
    bc.exports = PI
      ? function (e, t, r) {
          return qI.f(e, t, MI(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var no = u((_H, Oc) => {
    var DI = Ve(),
      FI = Qe(),
      ro = ln(),
      GI = DI(Function.toString);
    FI(ro.inspectSource) ||
      (ro.inspectSource = function (e) {
        return GI(e);
      });
    Oc.exports = ro.inspectSource;
  });
  var xc = u((TH, Ac) => {
    var VI = fe(),
      UI = Qe(),
      XI = no(),
      Sc = VI.WeakMap;
    Ac.exports = UI(Sc) && /native code/.test(XI(Sc));
  });
  var io = u((IH, Rc) => {
    var HI = Ki(),
      BI = $i(),
      wc = HI("keys");
    Rc.exports = function (e) {
      return wc[e] || (wc[e] = BI(e));
    };
  });
  var dn = u((bH, Cc) => {
    Cc.exports = {};
  });
  var Dc = u((OH, Mc) => {
    var WI = xc(),
      qc = fe(),
      oo = Ve(),
      kI = qt(),
      jI = fn(),
      ao = dt(),
      so = ln(),
      zI = io(),
      KI = dn(),
      Nc = "Object already initialized",
      co = qc.TypeError,
      $I = qc.WeakMap,
      pn,
      _r,
      gn,
      YI = function (e) {
        return gn(e) ? _r(e) : pn(e, {});
      },
      QI = function (e) {
        return function (t) {
          var r;
          if (!kI(t) || (r = _r(t)).type !== e)
            throw co("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    WI || so.state
      ? ((pt = so.state || (so.state = new $I())),
        (Lc = oo(pt.get)),
        (uo = oo(pt.has)),
        (Pc = oo(pt.set)),
        (pn = function (e, t) {
          if (uo(pt, e)) throw new co(Nc);
          return (t.facade = e), Pc(pt, e, t), t;
        }),
        (_r = function (e) {
          return Lc(pt, e) || {};
        }),
        (gn = function (e) {
          return uo(pt, e);
        }))
      : ((It = zI("state")),
        (KI[It] = !0),
        (pn = function (e, t) {
          if (ao(e, It)) throw new co(Nc);
          return (t.facade = e), jI(e, It, t), t;
        }),
        (_r = function (e) {
          return ao(e, It) ? e[It] : {};
        }),
        (gn = function (e) {
          return ao(e, It);
        }));
    var pt, Lc, uo, Pc, It;
    Mc.exports = { set: pn, get: _r, has: gn, enforce: YI, getterFor: QI };
  });
  var Vc = u((SH, Gc) => {
    var lo = _t(),
      ZI = dt(),
      Fc = Function.prototype,
      JI = lo && Object.getOwnPropertyDescriptor,
      fo = ZI(Fc, "name"),
      eb = fo && function () {}.name === "something",
      tb = fo && (!lo || (lo && JI(Fc, "name").configurable));
    Gc.exports = { EXISTS: fo, PROPER: eb, CONFIGURABLE: tb };
  });
  var Wc = u((AH, Bc) => {
    var rb = fe(),
      Uc = Qe(),
      nb = dt(),
      Xc = fn(),
      ib = cn(),
      ob = no(),
      Hc = Dc(),
      ab = Vc().CONFIGURABLE,
      sb = Hc.get,
      ub = Hc.enforce,
      cb = String(String).split("String");
    (Bc.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        c;
      if (
        (Uc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!nb(r, "name") || (ab && r.name !== s)) && Xc(r, "name", s),
          (c = ub(r)),
          c.source || (c.source = cb.join(typeof s == "string" ? s : ""))),
        e === rb)
      ) {
        o ? (e[t] = r) : ib(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : Xc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Uc(this) && sb(this).source) || ob(this);
    });
  });
  var po = u((xH, kc) => {
    var lb = Math.ceil,
      fb = Math.floor;
    kc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? fb : lb)(t);
    };
  });
  var zc = u((wH, jc) => {
    var db = po(),
      pb = Math.max,
      gb = Math.min;
    jc.exports = function (e, t) {
      var r = db(e);
      return r < 0 ? pb(r + t, 0) : gb(r, t);
    };
  });
  var $c = u((RH, Kc) => {
    var vb = po(),
      hb = Math.min;
    Kc.exports = function (e) {
      return e > 0 ? hb(vb(e), 9007199254740991) : 0;
    };
  });
  var Qc = u((CH, Yc) => {
    var Eb = $c();
    Yc.exports = function (e) {
      return Eb(e.length);
    };
  });
  var go = u((NH, Jc) => {
    var yb = hr(),
      mb = zc(),
      _b = Qc(),
      Zc = function (e) {
        return function (t, r, n) {
          var i = yb(t),
            o = _b(i),
            a = mb(n, o),
            s;
          if (e && r != r) {
            for (; o > a; ) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    Jc.exports = { includes: Zc(!0), indexOf: Zc(!1) };
  });
  var ho = u((LH, tl) => {
    var Tb = Ve(),
      vo = dt(),
      Ib = hr(),
      bb = go().indexOf,
      Ob = dn(),
      el = Tb([].push);
    tl.exports = function (e, t) {
      var r = Ib(e),
        n = 0,
        i = [],
        o;
      for (o in r) !vo(Ob, o) && vo(r, o) && el(i, o);
      for (; t.length > n; ) vo(r, (o = t[n++])) && (~bb(i, o) || el(i, o));
      return i;
    };
  });
  var vn = u((PH, rl) => {
    rl.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var il = u((nl) => {
    var Sb = ho(),
      Ab = vn(),
      xb = Ab.concat("length", "prototype");
    nl.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return Sb(t, xb);
      };
  });
  var al = u((ol) => {
    ol.f = Object.getOwnPropertySymbols;
  });
  var ul = u((DH, sl) => {
    var wb = Er(),
      Rb = Ve(),
      Cb = il(),
      Nb = al(),
      Lb = yr(),
      Pb = Rb([].concat);
    sl.exports =
      wb("Reflect", "ownKeys") ||
      function (t) {
        var r = Cb.f(Lb(t)),
          n = Nb.f;
        return n ? Pb(r, n(t)) : r;
      };
  });
  var ll = u((FH, cl) => {
    var qb = dt(),
      Mb = ul(),
      Db = to(),
      Fb = mr();
    cl.exports = function (e, t) {
      for (var r = Mb(t), n = Fb.f, i = Db.f, o = 0; o < r.length; o++) {
        var a = r[o];
        qb(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var dl = u((GH, fl) => {
    var Gb = Pt(),
      Vb = Qe(),
      Ub = /#|\.prototype\./,
      Tr = function (e, t) {
        var r = Hb[Xb(e)];
        return r == Wb ? !0 : r == Bb ? !1 : Vb(t) ? Gb(t) : !!t;
      },
      Xb = (Tr.normalize = function (e) {
        return String(e).replace(Ub, ".").toLowerCase();
      }),
      Hb = (Tr.data = {}),
      Bb = (Tr.NATIVE = "N"),
      Wb = (Tr.POLYFILL = "P");
    fl.exports = Tr;
  });
  var gl = u((VH, pl) => {
    var Eo = fe(),
      kb = to().f,
      jb = fn(),
      zb = Wc(),
      Kb = cn(),
      $b = ll(),
      Yb = dl();
    pl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        c,
        f,
        p;
      if (
        (n
          ? (a = Eo)
          : i
          ? (a = Eo[r] || Kb(r, {}))
          : (a = (Eo[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((f = t[s]),
            e.noTargetGet ? ((p = kb(a, s)), (c = p && p.value)) : (c = a[s]),
            (o = Yb(n ? s : r + (i ? "." : "#") + s, e.forced)),
            !o && c !== void 0)
          ) {
            if (typeof f == typeof c) continue;
            $b(f, c);
          }
          (e.sham || (c && c.sham)) && jb(f, "sham", !0), zb(a, s, f, e);
        }
    };
  });
  var hl = u((UH, vl) => {
    var Qb = ho(),
      Zb = vn();
    vl.exports =
      Object.keys ||
      function (t) {
        return Qb(t, Zb);
      };
  });
  var yl = u((XH, El) => {
    var Jb = _t(),
      eO = mr(),
      tO = yr(),
      rO = hr(),
      nO = hl();
    El.exports = Jb
      ? Object.defineProperties
      : function (t, r) {
          tO(t);
          for (var n = rO(r), i = nO(r), o = i.length, a = 0, s; o > a; )
            eO.f(t, (s = i[a++]), n[s]);
          return t;
        };
  });
  var _l = u((HH, ml) => {
    var iO = Er();
    ml.exports = iO("document", "documentElement");
  });
  var wl = u((BH, xl) => {
    var oO = yr(),
      aO = yl(),
      Tl = vn(),
      sO = dn(),
      uO = _l(),
      cO = Ji(),
      lO = io(),
      Il = ">",
      bl = "<",
      mo = "prototype",
      _o = "script",
      Sl = lO("IE_PROTO"),
      yo = function () {},
      Al = function (e) {
        return bl + _o + Il + e + bl + "/" + _o + Il;
      },
      Ol = function (e) {
        e.write(Al("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      fO = function () {
        var e = cO("iframe"),
          t = "java" + _o + ":",
          r;
        return (
          (e.style.display = "none"),
          uO.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(Al("document.F=Object")),
          r.close(),
          r.F
        );
      },
      hn,
      En = function () {
        try {
          hn = new ActiveXObject("htmlfile");
        } catch {}
        En =
          typeof document < "u"
            ? document.domain && hn
              ? Ol(hn)
              : fO()
            : Ol(hn);
        for (var e = Tl.length; e--; ) delete En[mo][Tl[e]];
        return En();
      };
    sO[Sl] = !0;
    xl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((yo[mo] = oO(t)), (n = new yo()), (yo[mo] = null), (n[Sl] = t))
            : (n = En()),
          r === void 0 ? n : aO(n, r)
        );
      };
  });
  var Cl = u((WH, Rl) => {
    var dO = Yi(),
      pO = wl(),
      gO = mr(),
      To = dO("unscopables"),
      Io = Array.prototype;
    Io[To] == null && gO.f(Io, To, { configurable: !0, value: pO(null) });
    Rl.exports = function (e) {
      Io[To][e] = !0;
    };
  });
  var Nl = u(() => {
    "use strict";
    var vO = gl(),
      hO = go().includes,
      EO = Cl();
    vO(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return hO(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    EO("includes");
  });
  var Pl = u((zH, Ll) => {
    var yO = fe(),
      mO = Ve();
    Ll.exports = function (e, t) {
      return mO(yO[e].prototype[t]);
    };
  });
  var Ml = u((KH, ql) => {
    Nl();
    var _O = Pl();
    ql.exports = _O("Array", "includes");
  });
  var Fl = u(($H, Dl) => {
    var TO = Ml();
    Dl.exports = TO;
  });
  var Vl = u((YH, Gl) => {
    var IO = Fl();
    Gl.exports = IO;
  });
  var bo = u((QH, Ul) => {
    var bO =
      typeof global == "object" && global && global.Object === Object && global;
    Ul.exports = bO;
  });
  var Xe = u((ZH, Xl) => {
    var OO = bo(),
      SO = typeof self == "object" && self && self.Object === Object && self,
      AO = OO || SO || Function("return this")();
    Xl.exports = AO;
  });
  var Dt = u((JH, Hl) => {
    var xO = Xe(),
      wO = xO.Symbol;
    Hl.exports = wO;
  });
  var jl = u((e5, kl) => {
    var Bl = Dt(),
      Wl = Object.prototype,
      RO = Wl.hasOwnProperty,
      CO = Wl.toString,
      Ir = Bl ? Bl.toStringTag : void 0;
    function NO(e) {
      var t = RO.call(e, Ir),
        r = e[Ir];
      try {
        e[Ir] = void 0;
        var n = !0;
      } catch {}
      var i = CO.call(e);
      return n && (t ? (e[Ir] = r) : delete e[Ir]), i;
    }
    kl.exports = NO;
  });
  var Kl = u((t5, zl) => {
    var LO = Object.prototype,
      PO = LO.toString;
    function qO(e) {
      return PO.call(e);
    }
    zl.exports = qO;
  });
  var gt = u((r5, Ql) => {
    var $l = Dt(),
      MO = jl(),
      DO = Kl(),
      FO = "[object Null]",
      GO = "[object Undefined]",
      Yl = $l ? $l.toStringTag : void 0;
    function VO(e) {
      return e == null
        ? e === void 0
          ? GO
          : FO
        : Yl && Yl in Object(e)
        ? MO(e)
        : DO(e);
    }
    Ql.exports = VO;
  });
  var Oo = u((n5, Zl) => {
    function UO(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    Zl.exports = UO;
  });
  var So = u((i5, Jl) => {
    var XO = Oo(),
      HO = XO(Object.getPrototypeOf, Object);
    Jl.exports = HO;
  });
  var it = u((o5, ef) => {
    function BO(e) {
      return e != null && typeof e == "object";
    }
    ef.exports = BO;
  });
  var Ao = u((a5, rf) => {
    var WO = gt(),
      kO = So(),
      jO = it(),
      zO = "[object Object]",
      KO = Function.prototype,
      $O = Object.prototype,
      tf = KO.toString,
      YO = $O.hasOwnProperty,
      QO = tf.call(Object);
    function ZO(e) {
      if (!jO(e) || WO(e) != zO) return !1;
      var t = kO(e);
      if (t === null) return !0;
      var r = YO.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && tf.call(r) == QO;
    }
    rf.exports = ZO;
  });
  var nf = u((xo) => {
    "use strict";
    Object.defineProperty(xo, "__esModule", { value: !0 });
    xo.default = JO;
    function JO(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var of = u((Ro, wo) => {
    "use strict";
    Object.defineProperty(Ro, "__esModule", { value: !0 });
    var eS = nf(),
      tS = rS(eS);
    function rS(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Ft;
    typeof self < "u"
      ? (Ft = self)
      : typeof window < "u"
      ? (Ft = window)
      : typeof global < "u"
      ? (Ft = global)
      : typeof wo < "u"
      ? (Ft = wo)
      : (Ft = Function("return this")());
    var nS = (0, tS.default)(Ft);
    Ro.default = nS;
  });
  var Co = u((br) => {
    "use strict";
    br.__esModule = !0;
    br.ActionTypes = void 0;
    br.default = cf;
    var iS = Ao(),
      oS = uf(iS),
      aS = of(),
      af = uf(aS);
    function uf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var sf = (br.ActionTypes = { INIT: "@@redux/INIT" });
    function cf(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(cf)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        c = !1;
      function f() {
        s === a && (s = a.slice());
      }
      function p() {
        return o;
      }
      function d(m) {
        if (typeof m != "function")
          throw new Error("Expected listener to be a function.");
        var C = !0;
        return (
          f(),
          s.push(m),
          function () {
            if (C) {
              (C = !1), f();
              var A = s.indexOf(m);
              s.splice(A, 1);
            }
          }
        );
      }
      function g(m) {
        if (!(0, oS.default)(m))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof m.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (c) throw new Error("Reducers may not dispatch actions.");
        try {
          (c = !0), (o = i(o, m));
        } finally {
          c = !1;
        }
        for (var C = (a = s), S = 0; S < C.length; S++) C[S]();
        return m;
      }
      function h(m) {
        if (typeof m != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = m), g({ type: sf.INIT });
      }
      function E() {
        var m,
          C = d;
        return (
          (m = {
            subscribe: function (A) {
              if (typeof A != "object")
                throw new TypeError("Expected the observer to be an object.");
              function O() {
                A.next && A.next(p());
              }
              O();
              var w = C(O);
              return { unsubscribe: w };
            },
          }),
          (m[af.default] = function () {
            return this;
          }),
          m
        );
      }
      return (
        g({ type: sf.INIT }),
        (n = { dispatch: g, subscribe: d, getState: p, replaceReducer: h }),
        (n[af.default] = E),
        n
      );
    }
  });
  var Lo = u((No) => {
    "use strict";
    No.__esModule = !0;
    No.default = sS;
    function sS(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var df = u((Po) => {
    "use strict";
    Po.__esModule = !0;
    Po.default = dS;
    var lf = Co(),
      uS = Ao(),
      l5 = ff(uS),
      cS = Lo(),
      f5 = ff(cS);
    function ff(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function lS(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function fS(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: lf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                lf.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function dS(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        fS(r);
      } catch (c) {
        s = c;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          p = arguments[1];
        if (s) throw s;
        if (!1) var d;
        for (var g = !1, h = {}, E = 0; E < o.length; E++) {
          var m = o[E],
            C = r[m],
            S = f[m],
            A = C(S, p);
          if (typeof A > "u") {
            var O = lS(m, p);
            throw new Error(O);
          }
          (h[m] = A), (g = g || A !== S);
        }
        return g ? h : f;
      };
    }
  });
  var gf = u((qo) => {
    "use strict";
    qo.__esModule = !0;
    qo.default = pS;
    function pf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function pS(e, t) {
      if (typeof e == "function") return pf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = pf(a, t));
      }
      return n;
    }
  });
  var Do = u((Mo) => {
    "use strict";
    Mo.__esModule = !0;
    Mo.default = gS;
    function gS() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var vf = u((Fo) => {
    "use strict";
    Fo.__esModule = !0;
    var vS =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Fo.default = mS;
    var hS = Do(),
      ES = yS(hS);
    function yS(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function mS() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            c = s.dispatch,
            f = [],
            p = {
              getState: s.getState,
              dispatch: function (g) {
                return c(g);
              },
            };
          return (
            (f = t.map(function (d) {
              return d(p);
            })),
            (c = ES.default.apply(void 0, f)(s.dispatch)),
            vS({}, s, { dispatch: c })
          );
        };
      };
    }
  });
  var Go = u((qe) => {
    "use strict";
    qe.__esModule = !0;
    qe.compose =
      qe.applyMiddleware =
      qe.bindActionCreators =
      qe.combineReducers =
      qe.createStore =
        void 0;
    var _S = Co(),
      TS = Gt(_S),
      IS = df(),
      bS = Gt(IS),
      OS = gf(),
      SS = Gt(OS),
      AS = vf(),
      xS = Gt(AS),
      wS = Do(),
      RS = Gt(wS),
      CS = Lo(),
      h5 = Gt(CS);
    function Gt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    qe.createStore = TS.default;
    qe.combineReducers = bS.default;
    qe.bindActionCreators = SS.default;
    qe.applyMiddleware = xS.default;
    qe.compose = RS.default;
  });
  var He,
    Vo,
    Ze,
    NS,
    LS,
    yn,
    PS,
    Uo = ce(() => {
      "use strict";
      (He = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (Vo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (Ze = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (NS = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (LS = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (yn = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (PS = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Ce,
    qS,
    mn = ce(() => {
      "use strict";
      (Ce = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (qS = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var MS,
    hf = ce(() => {
      "use strict";
      MS = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var DS,
    FS,
    GS,
    VS,
    US,
    XS,
    HS,
    Xo,
    Ef = ce(() => {
      "use strict";
      mn();
      ({
        TRANSFORM_MOVE: DS,
        TRANSFORM_SCALE: FS,
        TRANSFORM_ROTATE: GS,
        TRANSFORM_SKEW: VS,
        STYLE_SIZE: US,
        STYLE_FILTER: XS,
        STYLE_FONT_VARIATION: HS,
      } = Ce),
        (Xo = {
          [DS]: !0,
          [FS]: !0,
          [GS]: !0,
          [VS]: !0,
          [US]: !0,
          [XS]: !0,
          [HS]: !0,
        });
    });
  var Ee = {};
  Re(Ee, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => oA,
    IX2_ANIMATION_FRAME_CHANGED: () => JS,
    IX2_CLEAR_REQUESTED: () => YS,
    IX2_ELEMENT_STATE_CHANGED: () => iA,
    IX2_EVENT_LISTENER_ADDED: () => QS,
    IX2_EVENT_STATE_CHANGED: () => ZS,
    IX2_INSTANCE_ADDED: () => tA,
    IX2_INSTANCE_REMOVED: () => nA,
    IX2_INSTANCE_STARTED: () => rA,
    IX2_MEDIA_QUERIES_DEFINED: () => sA,
    IX2_PARAMETER_CHANGED: () => eA,
    IX2_PLAYBACK_REQUESTED: () => KS,
    IX2_PREVIEW_REQUESTED: () => zS,
    IX2_RAW_DATA_IMPORTED: () => BS,
    IX2_SESSION_INITIALIZED: () => WS,
    IX2_SESSION_STARTED: () => kS,
    IX2_SESSION_STOPPED: () => jS,
    IX2_STOP_REQUESTED: () => $S,
    IX2_TEST_FRAME_RENDERED: () => uA,
    IX2_VIEWPORT_WIDTH_CHANGED: () => aA,
  });
  var BS,
    WS,
    kS,
    jS,
    zS,
    KS,
    $S,
    YS,
    QS,
    ZS,
    JS,
    eA,
    tA,
    rA,
    nA,
    iA,
    oA,
    aA,
    sA,
    uA,
    yf = ce(() => {
      "use strict";
      (BS = "IX2_RAW_DATA_IMPORTED"),
        (WS = "IX2_SESSION_INITIALIZED"),
        (kS = "IX2_SESSION_STARTED"),
        (jS = "IX2_SESSION_STOPPED"),
        (zS = "IX2_PREVIEW_REQUESTED"),
        (KS = "IX2_PLAYBACK_REQUESTED"),
        ($S = "IX2_STOP_REQUESTED"),
        (YS = "IX2_CLEAR_REQUESTED"),
        (QS = "IX2_EVENT_LISTENER_ADDED"),
        (ZS = "IX2_EVENT_STATE_CHANGED"),
        (JS = "IX2_ANIMATION_FRAME_CHANGED"),
        (eA = "IX2_PARAMETER_CHANGED"),
        (tA = "IX2_INSTANCE_ADDED"),
        (rA = "IX2_INSTANCE_STARTED"),
        (nA = "IX2_INSTANCE_REMOVED"),
        (iA = "IX2_ELEMENT_STATE_CHANGED"),
        (oA = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (aA = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (sA = "IX2_MEDIA_QUERIES_DEFINED"),
        (uA = "IX2_TEST_FRAME_RENDERED");
    });
  var Ie = {};
  Re(Ie, {
    ABSTRACT_NODE: () => ax,
    AUTO: () => $A,
    BACKGROUND: () => BA,
    BACKGROUND_COLOR: () => HA,
    BAR_DELIMITER: () => ZA,
    BORDER_COLOR: () => WA,
    BOUNDARY_SELECTOR: () => pA,
    CHILDREN: () => JA,
    COLON_DELIMITER: () => QA,
    COLOR: () => kA,
    COMMA_DELIMITER: () => YA,
    CONFIG_UNIT: () => TA,
    CONFIG_VALUE: () => EA,
    CONFIG_X_UNIT: () => yA,
    CONFIG_X_VALUE: () => gA,
    CONFIG_Y_UNIT: () => mA,
    CONFIG_Y_VALUE: () => vA,
    CONFIG_Z_UNIT: () => _A,
    CONFIG_Z_VALUE: () => hA,
    DISPLAY: () => jA,
    FILTER: () => GA,
    FLEX: () => zA,
    FONT_VARIATION_SETTINGS: () => VA,
    HEIGHT: () => XA,
    HTML_ELEMENT: () => ix,
    IMMEDIATE_CHILDREN: () => ex,
    IX2_ID_DELIMITER: () => cA,
    OPACITY: () => FA,
    PARENT: () => rx,
    PLAIN_OBJECT: () => ox,
    PRESERVE_3D: () => nx,
    RENDER_GENERAL: () => ux,
    RENDER_PLUGIN: () => lx,
    RENDER_STYLE: () => cx,
    RENDER_TRANSFORM: () => sx,
    ROTATE_X: () => NA,
    ROTATE_Y: () => LA,
    ROTATE_Z: () => PA,
    SCALE_3D: () => CA,
    SCALE_X: () => xA,
    SCALE_Y: () => wA,
    SCALE_Z: () => RA,
    SIBLINGS: () => tx,
    SKEW: () => qA,
    SKEW_X: () => MA,
    SKEW_Y: () => DA,
    TRANSFORM: () => IA,
    TRANSLATE_3D: () => AA,
    TRANSLATE_X: () => bA,
    TRANSLATE_Y: () => OA,
    TRANSLATE_Z: () => SA,
    WF_PAGE: () => lA,
    WIDTH: () => UA,
    WILL_CHANGE: () => KA,
    W_MOD_IX: () => dA,
    W_MOD_JS: () => fA,
  });
  var cA,
    lA,
    fA,
    dA,
    pA,
    gA,
    vA,
    hA,
    EA,
    yA,
    mA,
    _A,
    TA,
    IA,
    bA,
    OA,
    SA,
    AA,
    xA,
    wA,
    RA,
    CA,
    NA,
    LA,
    PA,
    qA,
    MA,
    DA,
    FA,
    GA,
    VA,
    UA,
    XA,
    HA,
    BA,
    WA,
    kA,
    jA,
    zA,
    KA,
    $A,
    YA,
    QA,
    ZA,
    JA,
    ex,
    tx,
    rx,
    nx,
    ix,
    ox,
    ax,
    sx,
    ux,
    cx,
    lx,
    mf = ce(() => {
      "use strict";
      (cA = "|"),
        (lA = "data-wf-page"),
        (fA = "w-mod-js"),
        (dA = "w-mod-ix"),
        (pA = ".w-dyn-item"),
        (gA = "xValue"),
        (vA = "yValue"),
        (hA = "zValue"),
        (EA = "value"),
        (yA = "xUnit"),
        (mA = "yUnit"),
        (_A = "zUnit"),
        (TA = "unit"),
        (IA = "transform"),
        (bA = "translateX"),
        (OA = "translateY"),
        (SA = "translateZ"),
        (AA = "translate3d"),
        (xA = "scaleX"),
        (wA = "scaleY"),
        (RA = "scaleZ"),
        (CA = "scale3d"),
        (NA = "rotateX"),
        (LA = "rotateY"),
        (PA = "rotateZ"),
        (qA = "skew"),
        (MA = "skewX"),
        (DA = "skewY"),
        (FA = "opacity"),
        (GA = "filter"),
        (VA = "font-variation-settings"),
        (UA = "width"),
        (XA = "height"),
        (HA = "backgroundColor"),
        (BA = "background"),
        (WA = "borderColor"),
        (kA = "color"),
        (jA = "display"),
        (zA = "flex"),
        (KA = "willChange"),
        ($A = "AUTO"),
        (YA = ","),
        (QA = ":"),
        (ZA = "|"),
        (JA = "CHILDREN"),
        (ex = "IMMEDIATE_CHILDREN"),
        (tx = "SIBLINGS"),
        (rx = "PARENT"),
        (nx = "preserve-3d"),
        (ix = "HTML_ELEMENT"),
        (ox = "PLAIN_OBJECT"),
        (ax = "ABSTRACT_NODE"),
        (sx = "RENDER_TRANSFORM"),
        (ux = "RENDER_GENERAL"),
        (cx = "RENDER_STYLE"),
        (lx = "RENDER_PLUGIN");
    });
  var _f = {};
  Re(_f, {
    ActionAppliesTo: () => qS,
    ActionTypeConsts: () => Ce,
    EventAppliesTo: () => Vo,
    EventBasedOn: () => Ze,
    EventContinuousMouseAxes: () => NS,
    EventLimitAffectedElements: () => LS,
    EventTypeConsts: () => He,
    IX2EngineActionTypes: () => Ee,
    IX2EngineConstants: () => Ie,
    InteractionTypeConsts: () => MS,
    QuickEffectDirectionConsts: () => PS,
    QuickEffectIds: () => yn,
    ReducedMotionTypes: () => Xo,
  });
  var Ne = ce(() => {
    "use strict";
    Uo();
    mn();
    hf();
    Ef();
    yf();
    mf();
    mn();
    Uo();
  });
  var fx,
    Tf,
    If = ce(() => {
      "use strict";
      Ne();
      ({ IX2_RAW_DATA_IMPORTED: fx } = Ee),
        (Tf = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case fx:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Vt = u((pe) => {
    "use strict";
    Object.defineProperty(pe, "__esModule", { value: !0 });
    var dx =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    pe.clone = Tn;
    pe.addLast = Sf;
    pe.addFirst = Af;
    pe.removeLast = xf;
    pe.removeFirst = wf;
    pe.insert = Rf;
    pe.removeAt = Cf;
    pe.replaceAt = Nf;
    pe.getIn = In;
    pe.set = bn;
    pe.setIn = On;
    pe.update = Pf;
    pe.updateIn = qf;
    pe.merge = Mf;
    pe.mergeDeep = Df;
    pe.mergeIn = Ff;
    pe.omit = Gf;
    pe.addDefaults = Vf;
    var bf = "INVALID_ARGS";
    function Of(e) {
      throw new Error(e);
    }
    function Ho(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var px = {}.hasOwnProperty;
    function Tn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Ho(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Le(e, t, r) {
      var n = r;
      n == null && Of(bf);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var c = 0; c < a.length; c++) {
        var f = a[c];
        if (f != null) {
          var p = Ho(f);
          if (p.length)
            for (var d = 0; d <= p.length; d++) {
              var g = p[d];
              if (!(e && n[g] !== void 0)) {
                var h = f[g];
                t && _n(n[g]) && _n(h) && (h = Le(e, t, n[g], h)),
                  !(h === void 0 || h === n[g]) &&
                    (i || ((i = !0), (n = Tn(n))), (n[g] = h));
              }
            }
        }
      }
      return n;
    }
    function _n(e) {
      var t = typeof e > "u" ? "undefined" : dx(e);
      return e != null && (t === "object" || t === "function");
    }
    function Sf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Af(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function xf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function wf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Rf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Cf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Nf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function In(e, t) {
      if ((!Array.isArray(t) && Of(bf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function bn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = Tn(i);
      return (o[t] = r), o;
    }
    function Lf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          _n(e) && _n(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Lf(a, t, r, n + 1);
      }
      return bn(e, o, i);
    }
    function On(e, t, r) {
      return t.length ? Lf(e, t, r, 0) : r;
    }
    function Pf(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return bn(e, t, i);
    }
    function qf(e, t, r) {
      var n = In(e, t),
        i = r(n);
      return On(e, t, i);
    }
    function Mf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Le.call.apply(Le, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : Le(!1, !1, e, t, r, n, i, o);
    }
    function Df(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Le.call.apply(Le, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : Le(!1, !0, e, t, r, n, i, o);
    }
    function Ff(e, t, r, n, i, o, a) {
      var s = In(e, t);
      s == null && (s = {});
      for (
        var c = void 0,
          f = arguments.length,
          p = Array(f > 7 ? f - 7 : 0),
          d = 7;
        d < f;
        d++
      )
        p[d - 7] = arguments[d];
      return (
        p.length
          ? (c = Le.call.apply(Le, [null, !1, !1, s, r, n, i, o, a].concat(p)))
          : (c = Le(!1, !1, s, r, n, i, o, a)),
        On(e, t, c)
      );
    }
    function Gf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (px.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = Ho(e), s = 0; s < a.length; s++) {
        var c = a[s];
        r.indexOf(c) >= 0 || (o[c] = e[c]);
      }
      return o;
    }
    function Vf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Le.call.apply(Le, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : Le(!0, !1, e, t, r, n, i, o);
    }
    var gx = {
      clone: Tn,
      addLast: Sf,
      addFirst: Af,
      removeLast: xf,
      removeFirst: wf,
      insert: Rf,
      removeAt: Cf,
      replaceAt: Nf,
      getIn: In,
      set: bn,
      setIn: On,
      update: Pf,
      updateIn: qf,
      merge: Mf,
      mergeDeep: Df,
      mergeIn: Ff,
      omit: Gf,
      addDefaults: Vf,
    };
    pe.default = gx;
  });
  var Xf,
    vx,
    hx,
    Ex,
    yx,
    mx,
    Uf,
    Hf,
    Bf = ce(() => {
      "use strict";
      Ne();
      (Xf = ie(Vt())),
        ({
          IX2_PREVIEW_REQUESTED: vx,
          IX2_PLAYBACK_REQUESTED: hx,
          IX2_STOP_REQUESTED: Ex,
          IX2_CLEAR_REQUESTED: yx,
        } = Ee),
        (mx = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Uf = Object.create(null, {
          [vx]: { value: "preview" },
          [hx]: { value: "playback" },
          [Ex]: { value: "stop" },
          [yx]: { value: "clear" },
        })),
        (Hf = (e = mx, t) => {
          if (t.type in Uf) {
            let r = [Uf[t.type]];
            return (0, Xf.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Se,
    _x,
    Tx,
    Ix,
    bx,
    Ox,
    Sx,
    Ax,
    xx,
    wx,
    Rx,
    Wf,
    Cx,
    kf,
    jf = ce(() => {
      "use strict";
      Ne();
      (Se = ie(Vt())),
        ({
          IX2_SESSION_INITIALIZED: _x,
          IX2_SESSION_STARTED: Tx,
          IX2_TEST_FRAME_RENDERED: Ix,
          IX2_SESSION_STOPPED: bx,
          IX2_EVENT_LISTENER_ADDED: Ox,
          IX2_EVENT_STATE_CHANGED: Sx,
          IX2_ANIMATION_FRAME_CHANGED: Ax,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: xx,
          IX2_VIEWPORT_WIDTH_CHANGED: wx,
          IX2_MEDIA_QUERIES_DEFINED: Rx,
        } = Ee),
        (Wf = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (Cx = 20),
        (kf = (e = Wf, t) => {
          switch (t.type) {
            case _x: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Se.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case Tx:
              return (0, Se.set)(e, "active", !0);
            case Ix: {
              let {
                payload: { step: r = Cx },
              } = t;
              return (0, Se.set)(e, "tick", e.tick + r);
            }
            case bx:
              return Wf;
            case Ax: {
              let {
                payload: { now: r },
              } = t;
              return (0, Se.set)(e, "tick", r);
            }
            case Ox: {
              let r = (0, Se.addLast)(e.eventListeners, t.payload);
              return (0, Se.set)(e, "eventListeners", r);
            }
            case Sx: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Se.setIn)(e, ["eventState", r], n);
            }
            case xx: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Se.setIn)(e, ["playbackState", r], n);
            }
            case wx: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: c, max: f } = n[a];
                if (r >= c && r <= f) {
                  o = s;
                  break;
                }
              }
              return (0, Se.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case Rx:
              return (0, Se.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var Kf = u((D5, zf) => {
    function Nx() {
      (this.__data__ = []), (this.size = 0);
    }
    zf.exports = Nx;
  });
  var Sn = u((F5, $f) => {
    function Lx(e, t) {
      return e === t || (e !== e && t !== t);
    }
    $f.exports = Lx;
  });
  var Or = u((G5, Yf) => {
    var Px = Sn();
    function qx(e, t) {
      for (var r = e.length; r--; ) if (Px(e[r][0], t)) return r;
      return -1;
    }
    Yf.exports = qx;
  });
  var Zf = u((V5, Qf) => {
    var Mx = Or(),
      Dx = Array.prototype,
      Fx = Dx.splice;
    function Gx(e) {
      var t = this.__data__,
        r = Mx(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : Fx.call(t, r, 1), --this.size, !0;
    }
    Qf.exports = Gx;
  });
  var ed = u((U5, Jf) => {
    var Vx = Or();
    function Ux(e) {
      var t = this.__data__,
        r = Vx(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    Jf.exports = Ux;
  });
  var rd = u((X5, td) => {
    var Xx = Or();
    function Hx(e) {
      return Xx(this.__data__, e) > -1;
    }
    td.exports = Hx;
  });
  var id = u((H5, nd) => {
    var Bx = Or();
    function Wx(e, t) {
      var r = this.__data__,
        n = Bx(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    nd.exports = Wx;
  });
  var Sr = u((B5, od) => {
    var kx = Kf(),
      jx = Zf(),
      zx = ed(),
      Kx = rd(),
      $x = id();
    function Ut(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Ut.prototype.clear = kx;
    Ut.prototype.delete = jx;
    Ut.prototype.get = zx;
    Ut.prototype.has = Kx;
    Ut.prototype.set = $x;
    od.exports = Ut;
  });
  var sd = u((W5, ad) => {
    var Yx = Sr();
    function Qx() {
      (this.__data__ = new Yx()), (this.size = 0);
    }
    ad.exports = Qx;
  });
  var cd = u((k5, ud) => {
    function Zx(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    ud.exports = Zx;
  });
  var fd = u((j5, ld) => {
    function Jx(e) {
      return this.__data__.get(e);
    }
    ld.exports = Jx;
  });
  var pd = u((z5, dd) => {
    function ew(e) {
      return this.__data__.has(e);
    }
    dd.exports = ew;
  });
  var Je = u((K5, gd) => {
    function tw(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    gd.exports = tw;
  });
  var Bo = u(($5, vd) => {
    var rw = gt(),
      nw = Je(),
      iw = "[object AsyncFunction]",
      ow = "[object Function]",
      aw = "[object GeneratorFunction]",
      sw = "[object Proxy]";
    function uw(e) {
      if (!nw(e)) return !1;
      var t = rw(e);
      return t == ow || t == aw || t == iw || t == sw;
    }
    vd.exports = uw;
  });
  var Ed = u((Y5, hd) => {
    var cw = Xe(),
      lw = cw["__core-js_shared__"];
    hd.exports = lw;
  });
  var _d = u((Q5, md) => {
    var Wo = Ed(),
      yd = (function () {
        var e = /[^.]+$/.exec((Wo && Wo.keys && Wo.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function fw(e) {
      return !!yd && yd in e;
    }
    md.exports = fw;
  });
  var ko = u((Z5, Td) => {
    var dw = Function.prototype,
      pw = dw.toString;
    function gw(e) {
      if (e != null) {
        try {
          return pw.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Td.exports = gw;
  });
  var bd = u((J5, Id) => {
    var vw = Bo(),
      hw = _d(),
      Ew = Je(),
      yw = ko(),
      mw = /[\\^$.*+?()[\]{}|]/g,
      _w = /^\[object .+?Constructor\]$/,
      Tw = Function.prototype,
      Iw = Object.prototype,
      bw = Tw.toString,
      Ow = Iw.hasOwnProperty,
      Sw = RegExp(
        "^" +
          bw
            .call(Ow)
            .replace(mw, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function Aw(e) {
      if (!Ew(e) || hw(e)) return !1;
      var t = vw(e) ? Sw : _w;
      return t.test(yw(e));
    }
    Id.exports = Aw;
  });
  var Sd = u((eB, Od) => {
    function xw(e, t) {
      return e?.[t];
    }
    Od.exports = xw;
  });
  var vt = u((tB, Ad) => {
    var ww = bd(),
      Rw = Sd();
    function Cw(e, t) {
      var r = Rw(e, t);
      return ww(r) ? r : void 0;
    }
    Ad.exports = Cw;
  });
  var An = u((rB, xd) => {
    var Nw = vt(),
      Lw = Xe(),
      Pw = Nw(Lw, "Map");
    xd.exports = Pw;
  });
  var Ar = u((nB, wd) => {
    var qw = vt(),
      Mw = qw(Object, "create");
    wd.exports = Mw;
  });
  var Nd = u((iB, Cd) => {
    var Rd = Ar();
    function Dw() {
      (this.__data__ = Rd ? Rd(null) : {}), (this.size = 0);
    }
    Cd.exports = Dw;
  });
  var Pd = u((oB, Ld) => {
    function Fw(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Ld.exports = Fw;
  });
  var Md = u((aB, qd) => {
    var Gw = Ar(),
      Vw = "__lodash_hash_undefined__",
      Uw = Object.prototype,
      Xw = Uw.hasOwnProperty;
    function Hw(e) {
      var t = this.__data__;
      if (Gw) {
        var r = t[e];
        return r === Vw ? void 0 : r;
      }
      return Xw.call(t, e) ? t[e] : void 0;
    }
    qd.exports = Hw;
  });
  var Fd = u((sB, Dd) => {
    var Bw = Ar(),
      Ww = Object.prototype,
      kw = Ww.hasOwnProperty;
    function jw(e) {
      var t = this.__data__;
      return Bw ? t[e] !== void 0 : kw.call(t, e);
    }
    Dd.exports = jw;
  });
  var Vd = u((uB, Gd) => {
    var zw = Ar(),
      Kw = "__lodash_hash_undefined__";
    function $w(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = zw && t === void 0 ? Kw : t),
        this
      );
    }
    Gd.exports = $w;
  });
  var Xd = u((cB, Ud) => {
    var Yw = Nd(),
      Qw = Pd(),
      Zw = Md(),
      Jw = Fd(),
      e0 = Vd();
    function Xt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Xt.prototype.clear = Yw;
    Xt.prototype.delete = Qw;
    Xt.prototype.get = Zw;
    Xt.prototype.has = Jw;
    Xt.prototype.set = e0;
    Ud.exports = Xt;
  });
  var Wd = u((lB, Bd) => {
    var Hd = Xd(),
      t0 = Sr(),
      r0 = An();
    function n0() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Hd(),
          map: new (r0 || t0)(),
          string: new Hd(),
        });
    }
    Bd.exports = n0;
  });
  var jd = u((fB, kd) => {
    function i0(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    kd.exports = i0;
  });
  var xr = u((dB, zd) => {
    var o0 = jd();
    function a0(e, t) {
      var r = e.__data__;
      return o0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    zd.exports = a0;
  });
  var $d = u((pB, Kd) => {
    var s0 = xr();
    function u0(e) {
      var t = s0(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Kd.exports = u0;
  });
  var Qd = u((gB, Yd) => {
    var c0 = xr();
    function l0(e) {
      return c0(this, e).get(e);
    }
    Yd.exports = l0;
  });
  var Jd = u((vB, Zd) => {
    var f0 = xr();
    function d0(e) {
      return f0(this, e).has(e);
    }
    Zd.exports = d0;
  });
  var tp = u((hB, ep) => {
    var p0 = xr();
    function g0(e, t) {
      var r = p0(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    ep.exports = g0;
  });
  var xn = u((EB, rp) => {
    var v0 = Wd(),
      h0 = $d(),
      E0 = Qd(),
      y0 = Jd(),
      m0 = tp();
    function Ht(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Ht.prototype.clear = v0;
    Ht.prototype.delete = h0;
    Ht.prototype.get = E0;
    Ht.prototype.has = y0;
    Ht.prototype.set = m0;
    rp.exports = Ht;
  });
  var ip = u((yB, np) => {
    var _0 = Sr(),
      T0 = An(),
      I0 = xn(),
      b0 = 200;
    function O0(e, t) {
      var r = this.__data__;
      if (r instanceof _0) {
        var n = r.__data__;
        if (!T0 || n.length < b0 - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new I0(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    np.exports = O0;
  });
  var jo = u((mB, op) => {
    var S0 = Sr(),
      A0 = sd(),
      x0 = cd(),
      w0 = fd(),
      R0 = pd(),
      C0 = ip();
    function Bt(e) {
      var t = (this.__data__ = new S0(e));
      this.size = t.size;
    }
    Bt.prototype.clear = A0;
    Bt.prototype.delete = x0;
    Bt.prototype.get = w0;
    Bt.prototype.has = R0;
    Bt.prototype.set = C0;
    op.exports = Bt;
  });
  var sp = u((_B, ap) => {
    var N0 = "__lodash_hash_undefined__";
    function L0(e) {
      return this.__data__.set(e, N0), this;
    }
    ap.exports = L0;
  });
  var cp = u((TB, up) => {
    function P0(e) {
      return this.__data__.has(e);
    }
    up.exports = P0;
  });
  var fp = u((IB, lp) => {
    var q0 = xn(),
      M0 = sp(),
      D0 = cp();
    function wn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new q0(); ++t < r; ) this.add(e[t]);
    }
    wn.prototype.add = wn.prototype.push = M0;
    wn.prototype.has = D0;
    lp.exports = wn;
  });
  var pp = u((bB, dp) => {
    function F0(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    dp.exports = F0;
  });
  var vp = u((OB, gp) => {
    function G0(e, t) {
      return e.has(t);
    }
    gp.exports = G0;
  });
  var zo = u((SB, hp) => {
    var V0 = fp(),
      U0 = pp(),
      X0 = vp(),
      H0 = 1,
      B0 = 2;
    function W0(e, t, r, n, i, o) {
      var a = r & H0,
        s = e.length,
        c = t.length;
      if (s != c && !(a && c > s)) return !1;
      var f = o.get(e),
        p = o.get(t);
      if (f && p) return f == t && p == e;
      var d = -1,
        g = !0,
        h = r & B0 ? new V0() : void 0;
      for (o.set(e, t), o.set(t, e); ++d < s; ) {
        var E = e[d],
          m = t[d];
        if (n) var C = a ? n(m, E, d, t, e, o) : n(E, m, d, e, t, o);
        if (C !== void 0) {
          if (C) continue;
          g = !1;
          break;
        }
        if (h) {
          if (
            !U0(t, function (S, A) {
              if (!X0(h, A) && (E === S || i(E, S, r, n, o))) return h.push(A);
            })
          ) {
            g = !1;
            break;
          }
        } else if (!(E === m || i(E, m, r, n, o))) {
          g = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), g;
    }
    hp.exports = W0;
  });
  var yp = u((AB, Ep) => {
    var k0 = Xe(),
      j0 = k0.Uint8Array;
    Ep.exports = j0;
  });
  var _p = u((xB, mp) => {
    function z0(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    mp.exports = z0;
  });
  var Ip = u((wB, Tp) => {
    function K0(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Tp.exports = K0;
  });
  var xp = u((RB, Ap) => {
    var bp = Dt(),
      Op = yp(),
      $0 = Sn(),
      Y0 = zo(),
      Q0 = _p(),
      Z0 = Ip(),
      J0 = 1,
      eR = 2,
      tR = "[object Boolean]",
      rR = "[object Date]",
      nR = "[object Error]",
      iR = "[object Map]",
      oR = "[object Number]",
      aR = "[object RegExp]",
      sR = "[object Set]",
      uR = "[object String]",
      cR = "[object Symbol]",
      lR = "[object ArrayBuffer]",
      fR = "[object DataView]",
      Sp = bp ? bp.prototype : void 0,
      Ko = Sp ? Sp.valueOf : void 0;
    function dR(e, t, r, n, i, o, a) {
      switch (r) {
        case fR:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case lR:
          return !(e.byteLength != t.byteLength || !o(new Op(e), new Op(t)));
        case tR:
        case rR:
        case oR:
          return $0(+e, +t);
        case nR:
          return e.name == t.name && e.message == t.message;
        case aR:
        case uR:
          return e == t + "";
        case iR:
          var s = Q0;
        case sR:
          var c = n & J0;
          if ((s || (s = Z0), e.size != t.size && !c)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= eR), a.set(e, t);
          var p = Y0(s(e), s(t), n, i, o, a);
          return a.delete(e), p;
        case cR:
          if (Ko) return Ko.call(e) == Ko.call(t);
      }
      return !1;
    }
    Ap.exports = dR;
  });
  var Rn = u((CB, wp) => {
    function pR(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    wp.exports = pR;
  });
  var me = u((NB, Rp) => {
    var gR = Array.isArray;
    Rp.exports = gR;
  });
  var $o = u((LB, Cp) => {
    var vR = Rn(),
      hR = me();
    function ER(e, t, r) {
      var n = t(e);
      return hR(e) ? n : vR(n, r(e));
    }
    Cp.exports = ER;
  });
  var Lp = u((PB, Np) => {
    function yR(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Np.exports = yR;
  });
  var Yo = u((qB, Pp) => {
    function mR() {
      return [];
    }
    Pp.exports = mR;
  });
  var Qo = u((MB, Mp) => {
    var _R = Lp(),
      TR = Yo(),
      IR = Object.prototype,
      bR = IR.propertyIsEnumerable,
      qp = Object.getOwnPropertySymbols,
      OR = qp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                _R(qp(e), function (t) {
                  return bR.call(e, t);
                }));
          }
        : TR;
    Mp.exports = OR;
  });
  var Fp = u((DB, Dp) => {
    function SR(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Dp.exports = SR;
  });
  var Vp = u((FB, Gp) => {
    var AR = gt(),
      xR = it(),
      wR = "[object Arguments]";
    function RR(e) {
      return xR(e) && AR(e) == wR;
    }
    Gp.exports = RR;
  });
  var wr = u((GB, Hp) => {
    var Up = Vp(),
      CR = it(),
      Xp = Object.prototype,
      NR = Xp.hasOwnProperty,
      LR = Xp.propertyIsEnumerable,
      PR = Up(
        (function () {
          return arguments;
        })()
      )
        ? Up
        : function (e) {
            return CR(e) && NR.call(e, "callee") && !LR.call(e, "callee");
          };
    Hp.exports = PR;
  });
  var Wp = u((VB, Bp) => {
    function qR() {
      return !1;
    }
    Bp.exports = qR;
  });
  var Cn = u((Rr, Wt) => {
    var MR = Xe(),
      DR = Wp(),
      zp = typeof Rr == "object" && Rr && !Rr.nodeType && Rr,
      kp = zp && typeof Wt == "object" && Wt && !Wt.nodeType && Wt,
      FR = kp && kp.exports === zp,
      jp = FR ? MR.Buffer : void 0,
      GR = jp ? jp.isBuffer : void 0,
      VR = GR || DR;
    Wt.exports = VR;
  });
  var Nn = u((UB, Kp) => {
    var UR = 9007199254740991,
      XR = /^(?:0|[1-9]\d*)$/;
    function HR(e, t) {
      var r = typeof e;
      return (
        (t = t ?? UR),
        !!t &&
          (r == "number" || (r != "symbol" && XR.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Kp.exports = HR;
  });
  var Ln = u((XB, $p) => {
    var BR = 9007199254740991;
    function WR(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= BR;
    }
    $p.exports = WR;
  });
  var Qp = u((HB, Yp) => {
    var kR = gt(),
      jR = Ln(),
      zR = it(),
      KR = "[object Arguments]",
      $R = "[object Array]",
      YR = "[object Boolean]",
      QR = "[object Date]",
      ZR = "[object Error]",
      JR = "[object Function]",
      eC = "[object Map]",
      tC = "[object Number]",
      rC = "[object Object]",
      nC = "[object RegExp]",
      iC = "[object Set]",
      oC = "[object String]",
      aC = "[object WeakMap]",
      sC = "[object ArrayBuffer]",
      uC = "[object DataView]",
      cC = "[object Float32Array]",
      lC = "[object Float64Array]",
      fC = "[object Int8Array]",
      dC = "[object Int16Array]",
      pC = "[object Int32Array]",
      gC = "[object Uint8Array]",
      vC = "[object Uint8ClampedArray]",
      hC = "[object Uint16Array]",
      EC = "[object Uint32Array]",
      ue = {};
    ue[cC] =
      ue[lC] =
      ue[fC] =
      ue[dC] =
      ue[pC] =
      ue[gC] =
      ue[vC] =
      ue[hC] =
      ue[EC] =
        !0;
    ue[KR] =
      ue[$R] =
      ue[sC] =
      ue[YR] =
      ue[uC] =
      ue[QR] =
      ue[ZR] =
      ue[JR] =
      ue[eC] =
      ue[tC] =
      ue[rC] =
      ue[nC] =
      ue[iC] =
      ue[oC] =
      ue[aC] =
        !1;
    function yC(e) {
      return zR(e) && jR(e.length) && !!ue[kR(e)];
    }
    Yp.exports = yC;
  });
  var Jp = u((BB, Zp) => {
    function mC(e) {
      return function (t) {
        return e(t);
      };
    }
    Zp.exports = mC;
  });
  var tg = u((Cr, kt) => {
    var _C = bo(),
      eg = typeof Cr == "object" && Cr && !Cr.nodeType && Cr,
      Nr = eg && typeof kt == "object" && kt && !kt.nodeType && kt,
      TC = Nr && Nr.exports === eg,
      Zo = TC && _C.process,
      IC = (function () {
        try {
          var e = Nr && Nr.require && Nr.require("util").types;
          return e || (Zo && Zo.binding && Zo.binding("util"));
        } catch {}
      })();
    kt.exports = IC;
  });
  var Pn = u((WB, ig) => {
    var bC = Qp(),
      OC = Jp(),
      rg = tg(),
      ng = rg && rg.isTypedArray,
      SC = ng ? OC(ng) : bC;
    ig.exports = SC;
  });
  var Jo = u((kB, og) => {
    var AC = Fp(),
      xC = wr(),
      wC = me(),
      RC = Cn(),
      CC = Nn(),
      NC = Pn(),
      LC = Object.prototype,
      PC = LC.hasOwnProperty;
    function qC(e, t) {
      var r = wC(e),
        n = !r && xC(e),
        i = !r && !n && RC(e),
        o = !r && !n && !i && NC(e),
        a = r || n || i || o,
        s = a ? AC(e.length, String) : [],
        c = s.length;
      for (var f in e)
        (t || PC.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (i && (f == "offset" || f == "parent")) ||
              (o &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              CC(f, c))
          ) &&
          s.push(f);
      return s;
    }
    og.exports = qC;
  });
  var qn = u((jB, ag) => {
    var MC = Object.prototype;
    function DC(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || MC;
      return e === r;
    }
    ag.exports = DC;
  });
  var ug = u((zB, sg) => {
    var FC = Oo(),
      GC = FC(Object.keys, Object);
    sg.exports = GC;
  });
  var Mn = u((KB, cg) => {
    var VC = qn(),
      UC = ug(),
      XC = Object.prototype,
      HC = XC.hasOwnProperty;
    function BC(e) {
      if (!VC(e)) return UC(e);
      var t = [];
      for (var r in Object(e)) HC.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    cg.exports = BC;
  });
  var bt = u(($B, lg) => {
    var WC = Bo(),
      kC = Ln();
    function jC(e) {
      return e != null && kC(e.length) && !WC(e);
    }
    lg.exports = jC;
  });
  var Lr = u((YB, fg) => {
    var zC = Jo(),
      KC = Mn(),
      $C = bt();
    function YC(e) {
      return $C(e) ? zC(e) : KC(e);
    }
    fg.exports = YC;
  });
  var pg = u((QB, dg) => {
    var QC = $o(),
      ZC = Qo(),
      JC = Lr();
    function eN(e) {
      return QC(e, JC, ZC);
    }
    dg.exports = eN;
  });
  var hg = u((ZB, vg) => {
    var gg = pg(),
      tN = 1,
      rN = Object.prototype,
      nN = rN.hasOwnProperty;
    function iN(e, t, r, n, i, o) {
      var a = r & tN,
        s = gg(e),
        c = s.length,
        f = gg(t),
        p = f.length;
      if (c != p && !a) return !1;
      for (var d = c; d--; ) {
        var g = s[d];
        if (!(a ? g in t : nN.call(t, g))) return !1;
      }
      var h = o.get(e),
        E = o.get(t);
      if (h && E) return h == t && E == e;
      var m = !0;
      o.set(e, t), o.set(t, e);
      for (var C = a; ++d < c; ) {
        g = s[d];
        var S = e[g],
          A = t[g];
        if (n) var O = a ? n(A, S, g, t, e, o) : n(S, A, g, e, t, o);
        if (!(O === void 0 ? S === A || i(S, A, r, n, o) : O)) {
          m = !1;
          break;
        }
        C || (C = g == "constructor");
      }
      if (m && !C) {
        var w = e.constructor,
          R = t.constructor;
        w != R &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof w == "function" &&
            w instanceof w &&
            typeof R == "function" &&
            R instanceof R
          ) &&
          (m = !1);
      }
      return o.delete(e), o.delete(t), m;
    }
    vg.exports = iN;
  });
  var yg = u((JB, Eg) => {
    var oN = vt(),
      aN = Xe(),
      sN = oN(aN, "DataView");
    Eg.exports = sN;
  });
  var _g = u((eW, mg) => {
    var uN = vt(),
      cN = Xe(),
      lN = uN(cN, "Promise");
    mg.exports = lN;
  });
  var Ig = u((tW, Tg) => {
    var fN = vt(),
      dN = Xe(),
      pN = fN(dN, "Set");
    Tg.exports = pN;
  });
  var ea = u((rW, bg) => {
    var gN = vt(),
      vN = Xe(),
      hN = gN(vN, "WeakMap");
    bg.exports = hN;
  });
  var Dn = u((nW, Cg) => {
    var ta = yg(),
      ra = An(),
      na = _g(),
      ia = Ig(),
      oa = ea(),
      Rg = gt(),
      jt = ko(),
      Og = "[object Map]",
      EN = "[object Object]",
      Sg = "[object Promise]",
      Ag = "[object Set]",
      xg = "[object WeakMap]",
      wg = "[object DataView]",
      yN = jt(ta),
      mN = jt(ra),
      _N = jt(na),
      TN = jt(ia),
      IN = jt(oa),
      Ot = Rg;
    ((ta && Ot(new ta(new ArrayBuffer(1))) != wg) ||
      (ra && Ot(new ra()) != Og) ||
      (na && Ot(na.resolve()) != Sg) ||
      (ia && Ot(new ia()) != Ag) ||
      (oa && Ot(new oa()) != xg)) &&
      (Ot = function (e) {
        var t = Rg(e),
          r = t == EN ? e.constructor : void 0,
          n = r ? jt(r) : "";
        if (n)
          switch (n) {
            case yN:
              return wg;
            case mN:
              return Og;
            case _N:
              return Sg;
            case TN:
              return Ag;
            case IN:
              return xg;
          }
        return t;
      });
    Cg.exports = Ot;
  });
  var Gg = u((iW, Fg) => {
    var aa = jo(),
      bN = zo(),
      ON = xp(),
      SN = hg(),
      Ng = Dn(),
      Lg = me(),
      Pg = Cn(),
      AN = Pn(),
      xN = 1,
      qg = "[object Arguments]",
      Mg = "[object Array]",
      Fn = "[object Object]",
      wN = Object.prototype,
      Dg = wN.hasOwnProperty;
    function RN(e, t, r, n, i, o) {
      var a = Lg(e),
        s = Lg(t),
        c = a ? Mg : Ng(e),
        f = s ? Mg : Ng(t);
      (c = c == qg ? Fn : c), (f = f == qg ? Fn : f);
      var p = c == Fn,
        d = f == Fn,
        g = c == f;
      if (g && Pg(e)) {
        if (!Pg(t)) return !1;
        (a = !0), (p = !1);
      }
      if (g && !p)
        return (
          o || (o = new aa()),
          a || AN(e) ? bN(e, t, r, n, i, o) : ON(e, t, c, r, n, i, o)
        );
      if (!(r & xN)) {
        var h = p && Dg.call(e, "__wrapped__"),
          E = d && Dg.call(t, "__wrapped__");
        if (h || E) {
          var m = h ? e.value() : e,
            C = E ? t.value() : t;
          return o || (o = new aa()), i(m, C, r, n, o);
        }
      }
      return g ? (o || (o = new aa()), SN(e, t, r, n, i, o)) : !1;
    }
    Fg.exports = RN;
  });
  var sa = u((oW, Xg) => {
    var CN = Gg(),
      Vg = it();
    function Ug(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Vg(e) && !Vg(t))
        ? e !== e && t !== t
        : CN(e, t, r, n, Ug, i);
    }
    Xg.exports = Ug;
  });
  var Bg = u((aW, Hg) => {
    var NN = jo(),
      LN = sa(),
      PN = 1,
      qN = 2;
    function MN(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var c = s[0],
          f = e[c],
          p = s[1];
        if (a && s[2]) {
          if (f === void 0 && !(c in e)) return !1;
        } else {
          var d = new NN();
          if (n) var g = n(f, p, c, e, t, d);
          if (!(g === void 0 ? LN(p, f, PN | qN, n, d) : g)) return !1;
        }
      }
      return !0;
    }
    Hg.exports = MN;
  });
  var ua = u((sW, Wg) => {
    var DN = Je();
    function FN(e) {
      return e === e && !DN(e);
    }
    Wg.exports = FN;
  });
  var jg = u((uW, kg) => {
    var GN = ua(),
      VN = Lr();
    function UN(e) {
      for (var t = VN(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, GN(i)];
      }
      return t;
    }
    kg.exports = UN;
  });
  var ca = u((cW, zg) => {
    function XN(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    zg.exports = XN;
  });
  var $g = u((lW, Kg) => {
    var HN = Bg(),
      BN = jg(),
      WN = ca();
    function kN(e) {
      var t = BN(e);
      return t.length == 1 && t[0][2]
        ? WN(t[0][0], t[0][1])
        : function (r) {
            return r === e || HN(r, e, t);
          };
    }
    Kg.exports = kN;
  });
  var Pr = u((fW, Yg) => {
    var jN = gt(),
      zN = it(),
      KN = "[object Symbol]";
    function $N(e) {
      return typeof e == "symbol" || (zN(e) && jN(e) == KN);
    }
    Yg.exports = $N;
  });
  var Gn = u((dW, Qg) => {
    var YN = me(),
      QN = Pr(),
      ZN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      JN = /^\w*$/;
    function eL(e, t) {
      if (YN(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        QN(e)
        ? !0
        : JN.test(e) || !ZN.test(e) || (t != null && e in Object(t));
    }
    Qg.exports = eL;
  });
  var ev = u((pW, Jg) => {
    var Zg = xn(),
      tL = "Expected a function";
    function la(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(tL);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (la.Cache || Zg)()), r;
    }
    la.Cache = Zg;
    Jg.exports = la;
  });
  var rv = u((gW, tv) => {
    var rL = ev(),
      nL = 500;
    function iL(e) {
      var t = rL(e, function (n) {
          return r.size === nL && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    tv.exports = iL;
  });
  var iv = u((vW, nv) => {
    var oL = rv(),
      aL =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      sL = /\\(\\)?/g,
      uL = oL(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(aL, function (r, n, i, o) {
            t.push(i ? o.replace(sL, "$1") : n || r);
          }),
          t
        );
      });
    nv.exports = uL;
  });
  var fa = u((hW, ov) => {
    function cL(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    ov.exports = cL;
  });
  var fv = u((EW, lv) => {
    var av = Dt(),
      lL = fa(),
      fL = me(),
      dL = Pr(),
      pL = 1 / 0,
      sv = av ? av.prototype : void 0,
      uv = sv ? sv.toString : void 0;
    function cv(e) {
      if (typeof e == "string") return e;
      if (fL(e)) return lL(e, cv) + "";
      if (dL(e)) return uv ? uv.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -pL ? "-0" : t;
    }
    lv.exports = cv;
  });
  var pv = u((yW, dv) => {
    var gL = fv();
    function vL(e) {
      return e == null ? "" : gL(e);
    }
    dv.exports = vL;
  });
  var qr = u((mW, gv) => {
    var hL = me(),
      EL = Gn(),
      yL = iv(),
      mL = pv();
    function _L(e, t) {
      return hL(e) ? e : EL(e, t) ? [e] : yL(mL(e));
    }
    gv.exports = _L;
  });
  var zt = u((_W, vv) => {
    var TL = Pr(),
      IL = 1 / 0;
    function bL(e) {
      if (typeof e == "string" || TL(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -IL ? "-0" : t;
    }
    vv.exports = bL;
  });
  var Vn = u((TW, hv) => {
    var OL = qr(),
      SL = zt();
    function AL(e, t) {
      t = OL(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[SL(t[r++])];
      return r && r == n ? e : void 0;
    }
    hv.exports = AL;
  });
  var Un = u((IW, Ev) => {
    var xL = Vn();
    function wL(e, t, r) {
      var n = e == null ? void 0 : xL(e, t);
      return n === void 0 ? r : n;
    }
    Ev.exports = wL;
  });
  var mv = u((bW, yv) => {
    function RL(e, t) {
      return e != null && t in Object(e);
    }
    yv.exports = RL;
  });
  var Tv = u((OW, _v) => {
    var CL = qr(),
      NL = wr(),
      LL = me(),
      PL = Nn(),
      qL = Ln(),
      ML = zt();
    function DL(e, t, r) {
      t = CL(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = ML(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && qL(i) && PL(a, i) && (LL(e) || NL(e)));
    }
    _v.exports = DL;
  });
  var bv = u((SW, Iv) => {
    var FL = mv(),
      GL = Tv();
    function VL(e, t) {
      return e != null && GL(e, t, FL);
    }
    Iv.exports = VL;
  });
  var Sv = u((AW, Ov) => {
    var UL = sa(),
      XL = Un(),
      HL = bv(),
      BL = Gn(),
      WL = ua(),
      kL = ca(),
      jL = zt(),
      zL = 1,
      KL = 2;
    function $L(e, t) {
      return BL(e) && WL(t)
        ? kL(jL(e), t)
        : function (r) {
            var n = XL(r, e);
            return n === void 0 && n === t ? HL(r, e) : UL(t, n, zL | KL);
          };
    }
    Ov.exports = $L;
  });
  var Xn = u((xW, Av) => {
    function YL(e) {
      return e;
    }
    Av.exports = YL;
  });
  var da = u((wW, xv) => {
    function QL(e) {
      return function (t) {
        return t?.[e];
      };
    }
    xv.exports = QL;
  });
  var Rv = u((RW, wv) => {
    var ZL = Vn();
    function JL(e) {
      return function (t) {
        return ZL(t, e);
      };
    }
    wv.exports = JL;
  });
  var Nv = u((CW, Cv) => {
    var eP = da(),
      tP = Rv(),
      rP = Gn(),
      nP = zt();
    function iP(e) {
      return rP(e) ? eP(nP(e)) : tP(e);
    }
    Cv.exports = iP;
  });
  var ht = u((NW, Lv) => {
    var oP = $g(),
      aP = Sv(),
      sP = Xn(),
      uP = me(),
      cP = Nv();
    function lP(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? sP
        : typeof e == "object"
        ? uP(e)
          ? aP(e[0], e[1])
          : oP(e)
        : cP(e);
    }
    Lv.exports = lP;
  });
  var pa = u((LW, Pv) => {
    var fP = ht(),
      dP = bt(),
      pP = Lr();
    function gP(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!dP(t)) {
          var o = fP(r, 3);
          (t = pP(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Pv.exports = gP;
  });
  var ga = u((PW, qv) => {
    function vP(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    qv.exports = vP;
  });
  var Dv = u((qW, Mv) => {
    var hP = /\s/;
    function EP(e) {
      for (var t = e.length; t-- && hP.test(e.charAt(t)); );
      return t;
    }
    Mv.exports = EP;
  });
  var Gv = u((MW, Fv) => {
    var yP = Dv(),
      mP = /^\s+/;
    function _P(e) {
      return e && e.slice(0, yP(e) + 1).replace(mP, "");
    }
    Fv.exports = _P;
  });
  var Hn = u((DW, Xv) => {
    var TP = Gv(),
      Vv = Je(),
      IP = Pr(),
      Uv = 0 / 0,
      bP = /^[-+]0x[0-9a-f]+$/i,
      OP = /^0b[01]+$/i,
      SP = /^0o[0-7]+$/i,
      AP = parseInt;
    function xP(e) {
      if (typeof e == "number") return e;
      if (IP(e)) return Uv;
      if (Vv(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Vv(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = TP(e);
      var r = OP.test(e);
      return r || SP.test(e) ? AP(e.slice(2), r ? 2 : 8) : bP.test(e) ? Uv : +e;
    }
    Xv.exports = xP;
  });
  var Wv = u((FW, Bv) => {
    var wP = Hn(),
      Hv = 1 / 0,
      RP = 17976931348623157e292;
    function CP(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = wP(e)), e === Hv || e === -Hv)) {
        var t = e < 0 ? -1 : 1;
        return t * RP;
      }
      return e === e ? e : 0;
    }
    Bv.exports = CP;
  });
  var va = u((GW, kv) => {
    var NP = Wv();
    function LP(e) {
      var t = NP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    kv.exports = LP;
  });
  var zv = u((VW, jv) => {
    var PP = ga(),
      qP = ht(),
      MP = va(),
      DP = Math.max;
    function FP(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : MP(r);
      return i < 0 && (i = DP(n + i, 0)), PP(e, qP(t, 3), i);
    }
    jv.exports = FP;
  });
  var ha = u((UW, Kv) => {
    var GP = pa(),
      VP = zv(),
      UP = GP(VP);
    Kv.exports = UP;
  });
  var Qv = {};
  Re(Qv, {
    ELEMENT_MATCHES: () => XP,
    FLEX_PREFIXED: () => Ea,
    IS_BROWSER_ENV: () => Be,
    TRANSFORM_PREFIXED: () => Et,
    TRANSFORM_STYLE_PREFIXED: () => Wn,
    withBrowser: () => Bn,
  });
  var Yv,
    Be,
    Bn,
    XP,
    Ea,
    Et,
    $v,
    Wn,
    kn = ce(() => {
      "use strict";
      (Yv = ie(ha())),
        (Be = typeof window < "u"),
        (Bn = (e, t) => (Be ? e() : t)),
        (XP = Bn(() =>
          (0, Yv.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (Ea = Bn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (Et = Bn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        ($v = Et.split("transform")[0]),
        (Wn = $v ? $v + "TransformStyle" : "transformStyle");
    });
  var ya = u((XW, rh) => {
    var HP = 4,
      BP = 0.001,
      WP = 1e-7,
      kP = 10,
      Mr = 11,
      jn = 1 / (Mr - 1),
      jP = typeof Float32Array == "function";
    function Zv(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function Jv(e, t) {
      return 3 * t - 6 * e;
    }
    function eh(e) {
      return 3 * e;
    }
    function zn(e, t, r) {
      return ((Zv(t, r) * e + Jv(t, r)) * e + eh(t)) * e;
    }
    function th(e, t, r) {
      return 3 * Zv(t, r) * e * e + 2 * Jv(t, r) * e + eh(t);
    }
    function zP(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = zn(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > WP && ++s < kP);
      return a;
    }
    function KP(e, t, r, n) {
      for (var i = 0; i < HP; ++i) {
        var o = th(t, r, n);
        if (o === 0) return t;
        var a = zn(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    rh.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = jP ? new Float32Array(Mr) : new Array(Mr);
      if (t !== r || n !== i)
        for (var a = 0; a < Mr; ++a) o[a] = zn(a * jn, t, n);
      function s(c) {
        for (var f = 0, p = 1, d = Mr - 1; p !== d && o[p] <= c; ++p) f += jn;
        --p;
        var g = (c - o[p]) / (o[p + 1] - o[p]),
          h = f + g * jn,
          E = th(h, t, n);
        return E >= BP ? KP(c, h, t, n) : E === 0 ? h : zP(c, f, f + jn, t, n);
      }
      return function (f) {
        return t === r && n === i
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : zn(s(f), r, i);
      };
    };
  });
  var Fr = {};
  Re(Fr, {
    bounce: () => Cq,
    bouncePast: () => Nq,
    ease: () => $P,
    easeIn: () => YP,
    easeInOut: () => ZP,
    easeOut: () => QP,
    inBack: () => Tq,
    inCirc: () => Eq,
    inCubic: () => rq,
    inElastic: () => Oq,
    inExpo: () => gq,
    inOutBack: () => bq,
    inOutCirc: () => mq,
    inOutCubic: () => iq,
    inOutElastic: () => Aq,
    inOutExpo: () => hq,
    inOutQuad: () => tq,
    inOutQuart: () => sq,
    inOutQuint: () => lq,
    inOutSine: () => pq,
    inQuad: () => JP,
    inQuart: () => oq,
    inQuint: () => uq,
    inSine: () => fq,
    outBack: () => Iq,
    outBounce: () => _q,
    outCirc: () => yq,
    outCubic: () => nq,
    outElastic: () => Sq,
    outExpo: () => vq,
    outQuad: () => eq,
    outQuart: () => aq,
    outQuint: () => cq,
    outSine: () => dq,
    swingFrom: () => wq,
    swingFromTo: () => xq,
    swingTo: () => Rq,
  });
  function JP(e) {
    return Math.pow(e, 2);
  }
  function eq(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function tq(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function rq(e) {
    return Math.pow(e, 3);
  }
  function nq(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function iq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function oq(e) {
    return Math.pow(e, 4);
  }
  function aq(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function sq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function uq(e) {
    return Math.pow(e, 5);
  }
  function cq(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function lq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function fq(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function dq(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function pq(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function gq(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function vq(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function hq(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function Eq(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function yq(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function mq(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function _q(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Tq(e) {
    let t = ot;
    return e * e * ((t + 1) * e - t);
  }
  function Iq(e) {
    let t = ot;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function bq(e) {
    let t = ot;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Oq(e) {
    let t = ot,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function Sq(e) {
    let t = ot,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function Aq(e) {
    let t = ot,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function xq(e) {
    let t = ot;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function wq(e) {
    let t = ot;
    return e * e * ((t + 1) * e - t);
  }
  function Rq(e) {
    let t = ot;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Cq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Nq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var Dr,
    ot,
    $P,
    YP,
    QP,
    ZP,
    ma = ce(() => {
      "use strict";
      (Dr = ie(ya())),
        (ot = 1.70158),
        ($P = (0, Dr.default)(0.25, 0.1, 0.25, 1)),
        (YP = (0, Dr.default)(0.42, 0, 1, 1)),
        (QP = (0, Dr.default)(0, 0, 0.58, 1)),
        (ZP = (0, Dr.default)(0.42, 0, 0.58, 1));
    });
  var ih = {};
  Re(ih, {
    applyEasing: () => Pq,
    createBezierEasing: () => Lq,
    optimizeFloat: () => Gr,
  });
  function Gr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function Lq(e) {
    return (0, nh.default)(...e);
  }
  function Pq(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : Gr(r ? (t > 0 ? r(t) : t) : t > 0 && e && Fr[e] ? Fr[e](t) : t);
  }
  var nh,
    _a = ce(() => {
      "use strict";
      ma();
      nh = ie(ya());
    });
  var sh = {};
  Re(sh, {
    createElementState: () => ah,
    ixElements: () => zq,
    mergeActionState: () => Ta,
  });
  function ah(e, t, r, n, i) {
    let o =
      r === qq ? (0, Kt.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, Kt.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function Ta(e, t, r, n, i) {
    let o = $q(i);
    return (0, Kt.mergeIn)(e, [t, jq, r], n, o);
  }
  function $q(e) {
    let { config: t } = e;
    return Kq.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (r[o] = s), r;
    }, {});
  }
  var Kt,
    BW,
    qq,
    WW,
    Mq,
    Dq,
    Fq,
    Gq,
    Vq,
    Uq,
    Xq,
    Hq,
    Bq,
    Wq,
    kq,
    oh,
    jq,
    zq,
    Kq,
    uh = ce(() => {
      "use strict";
      Kt = ie(Vt());
      Ne();
      ({
        HTML_ELEMENT: BW,
        PLAIN_OBJECT: qq,
        ABSTRACT_NODE: WW,
        CONFIG_X_VALUE: Mq,
        CONFIG_Y_VALUE: Dq,
        CONFIG_Z_VALUE: Fq,
        CONFIG_VALUE: Gq,
        CONFIG_X_UNIT: Vq,
        CONFIG_Y_UNIT: Uq,
        CONFIG_Z_UNIT: Xq,
        CONFIG_UNIT: Hq,
      } = Ie),
        ({
          IX2_SESSION_STOPPED: Bq,
          IX2_INSTANCE_ADDED: Wq,
          IX2_ELEMENT_STATE_CHANGED: kq,
        } = Ee),
        (oh = {}),
        (jq = "refState"),
        (zq = (e = oh, t = {}) => {
          switch (t.type) {
            case Bq:
              return oh;
            case Wq: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = o,
                c = e;
              return (
                (0, Kt.getIn)(c, [r, n]) !== n && (c = ah(c, n, a, r, o)),
                Ta(c, r, s, i, o)
              );
            }
            case kq: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return Ta(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      Kq = [
        [Mq, Vq],
        [Dq, Uq],
        [Fq, Xq],
        [Gq, Hq],
      ];
    });
  var ch = u((_e) => {
    "use strict";
    Object.defineProperty(_e, "__esModule", { value: !0 });
    _e.renderPlugin =
      _e.getPluginOrigin =
      _e.getPluginDuration =
      _e.getPluginDestination =
      _e.getPluginConfig =
      _e.createPluginInstance =
      _e.clearPlugin =
        void 0;
    var Yq = (e) => e.value;
    _e.getPluginConfig = Yq;
    var Qq = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    _e.getPluginDuration = Qq;
    var Zq = (e) => e || { value: 0 };
    _e.getPluginOrigin = Zq;
    var Jq = (e) => ({ value: e.value });
    _e.getPluginDestination = Jq;
    var eM = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    _e.createPluginInstance = eM;
    var tM = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    _e.renderPlugin = tM;
    var rM = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    _e.clearPlugin = rM;
  });
  var fh = u((Te) => {
    "use strict";
    Object.defineProperty(Te, "__esModule", { value: !0 });
    Te.renderPlugin =
      Te.getPluginOrigin =
      Te.getPluginDuration =
      Te.getPluginDestination =
      Te.getPluginConfig =
      Te.createPluginInstance =
      Te.clearPlugin =
        void 0;
    var nM = (e) => document.querySelector(`[data-w-id="${e}"]`),
      iM = () => window.Webflow.require("spline"),
      oM = (e, t) => e.filter((r) => !t.includes(r)),
      aM = (e, t) => e.value[t];
    Te.getPluginConfig = aM;
    var sM = () => null;
    Te.getPluginDuration = sM;
    var lh = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      uM = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = oM(n, o);
          return a.length ? a.reduce((c, f) => ((c[f] = lh[f]), c), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = lh[a]), o), {});
      };
    Te.getPluginOrigin = uM;
    var cM = (e) => e.value;
    Te.getPluginDestination = cM;
    var lM = (e, t) => {
      var r;
      let n =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (r = r.target) === null ||
        r === void 0
          ? void 0
          : r.pluginElement;
      return n ? nM(n) : null;
    };
    Te.createPluginInstance = lM;
    var fM = (e, t, r) => {
      let n = iM(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        a = (s) => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let c = o && s.findObjectById(o);
          if (!c) return;
          let { PLUGIN_SPLINE: f } = t;
          f.positionX != null && (c.position.x = f.positionX),
            f.positionY != null && (c.position.y = f.positionY),
            f.positionZ != null && (c.position.z = f.positionZ),
            f.rotationX != null && (c.rotation.x = f.rotationX),
            f.rotationY != null && (c.rotation.y = f.rotationY),
            f.rotationZ != null && (c.rotation.z = f.rotationZ),
            f.scaleX != null && (c.scale.x = f.scaleX),
            f.scaleY != null && (c.scale.y = f.scaleY),
            f.scaleZ != null && (c.scale.z = f.scaleZ);
        };
      i ? a(i.spline) : n.setLoadHandler(e, a);
    };
    Te.renderPlugin = fM;
    var dM = () => null;
    Te.clearPlugin = dM;
  });
  var ph = u((ye) => {
    "use strict";
    Object.defineProperty(ye, "__esModule", { value: !0 });
    ye.getPluginOrigin =
      ye.getPluginDuration =
      ye.getPluginDestination =
      ye.getPluginConfig =
      ye.createPluginInstance =
      ye.clearPlugin =
        void 0;
    ye.normalizeColor = dh;
    ye.renderPlugin = void 0;
    function dh(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase();
      if (o.startsWith("#")) {
        let a = o.substring(1);
        a.length === 3
          ? ((t = parseInt(a[0] + a[0], 16)),
            (r = parseInt(a[1] + a[1], 16)),
            (n = parseInt(a[2] + a[2], 16)))
          : a.length === 6 &&
            ((t = parseInt(a.substring(0, 2), 16)),
            (r = parseInt(a.substring(2, 4), 16)),
            (n = parseInt(a.substring(4, 6), 16)));
      } else if (o.startsWith("rgba")) {
        let a = o.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10)),
          (i = parseFloat(a[3]));
      } else if (o.startsWith("rgb")) {
        let a = o.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10));
      } else if (o.startsWith("hsla")) {
        let a = o.match(/hsla\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          c = parseFloat(a[1].replace("%", "")) / 100,
          f = parseFloat(a[2].replace("%", "")) / 100;
        i = parseFloat(a[3]);
        let p = (1 - Math.abs(2 * f - 1)) * c,
          d = p * (1 - Math.abs(((s / 60) % 2) - 1)),
          g = f - p / 2,
          h,
          E,
          m;
        s >= 0 && s < 60
          ? ((h = p), (E = d), (m = 0))
          : s >= 60 && s < 120
          ? ((h = d), (E = p), (m = 0))
          : s >= 120 && s < 180
          ? ((h = 0), (E = p), (m = d))
          : s >= 180 && s < 240
          ? ((h = 0), (E = d), (m = p))
          : s >= 240 && s < 300
          ? ((h = d), (E = 0), (m = p))
          : ((h = p), (E = 0), (m = d)),
          (t = Math.round((h + g) * 255)),
          (r = Math.round((E + g) * 255)),
          (n = Math.round((m + g) * 255));
      } else if (o.startsWith("hsl")) {
        let a = o.match(/hsl\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          c = parseFloat(a[1].replace("%", "")) / 100,
          f = parseFloat(a[2].replace("%", "")) / 100,
          p = (1 - Math.abs(2 * f - 1)) * c,
          d = p * (1 - Math.abs(((s / 60) % 2) - 1)),
          g = f - p / 2,
          h,
          E,
          m;
        s >= 0 && s < 60
          ? ((h = p), (E = d), (m = 0))
          : s >= 60 && s < 120
          ? ((h = d), (E = p), (m = 0))
          : s >= 120 && s < 180
          ? ((h = 0), (E = p), (m = d))
          : s >= 180 && s < 240
          ? ((h = 0), (E = d), (m = p))
          : s >= 240 && s < 300
          ? ((h = d), (E = 0), (m = p))
          : ((h = p), (E = 0), (m = d)),
          (t = Math.round((h + g) * 255)),
          (r = Math.round((E + g) * 255)),
          (n = Math.round((m + g) * 255));
      }
      return (
        (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`,
        { red: t, green: r, blue: n, alpha: i }
      );
    }
    var pM = (e, t) => e.value[t];
    ye.getPluginConfig = pM;
    var gM = () => null;
    ye.getPluginDuration = gM;
    var vM = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(i, 10) };
      if (r.red != null && r.green != null && r.blue != null) return dh(i);
    };
    ye.getPluginOrigin = vM;
    var hM = (e) => e.value;
    ye.getPluginDestination = hM;
    var EM = () => null;
    ye.createPluginInstance = EM;
    var yM = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        { PLUGIN_VARIABLE: o } = t,
        { size: a, red: s, green: c, blue: f, alpha: p } = o,
        d;
      a != null && (d = a + i),
        s != null &&
          f != null &&
          c != null &&
          p != null &&
          (d = `rgba(${s}, ${c}, ${f}, ${p})`),
        d != null && document.documentElement.style.setProperty(n, d);
    };
    ye.renderPlugin = yM;
    var mM = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    ye.clearPlugin = mM;
  });
  var gh = u((Kn) => {
    "use strict";
    var ba = on().default;
    Object.defineProperty(Kn, "__esModule", { value: !0 });
    Kn.pluginMethodMap = void 0;
    var Ia = (Ne(), ze(_f)),
      _M = ba(ch()),
      TM = ba(fh()),
      IM = ba(ph()),
      KW = (Kn.pluginMethodMap = new Map([
        [Ia.ActionTypeConsts.PLUGIN_LOTTIE, { ..._M }],
        [Ia.ActionTypeConsts.PLUGIN_SPLINE, { ...TM }],
        [Ia.ActionTypeConsts.PLUGIN_VARIABLE, { ...IM }],
      ]));
  });
  var vh = {};
  Re(vh, {
    clearPlugin: () => Ra,
    createPluginInstance: () => OM,
    getPluginConfig: () => Sa,
    getPluginDestination: () => xa,
    getPluginDuration: () => bM,
    getPluginOrigin: () => Aa,
    isPluginType: () => St,
    renderPlugin: () => wa,
  });
  function St(e) {
    return Oa.pluginMethodMap.has(e);
  }
  var Oa,
    At,
    Sa,
    Aa,
    bM,
    xa,
    OM,
    wa,
    Ra,
    Ca = ce(() => {
      "use strict";
      kn();
      Oa = ie(gh());
      (At = (e) => (t) => {
        if (!Be) return () => null;
        let r = Oa.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (Sa = At("getPluginConfig")),
        (Aa = At("getPluginOrigin")),
        (bM = At("getPluginDuration")),
        (xa = At("getPluginDestination")),
        (OM = At("createPluginInstance")),
        (wa = At("renderPlugin")),
        (Ra = At("clearPlugin"));
    });
  var Eh = u((QW, hh) => {
    function SM(e, t) {
      return e == null || e !== e ? t : e;
    }
    hh.exports = SM;
  });
  var mh = u((ZW, yh) => {
    function AM(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    yh.exports = AM;
  });
  var Th = u((JW, _h) => {
    function xM(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var c = a[e ? s : ++i];
          if (r(o[c], c, o) === !1) break;
        }
        return t;
      };
    }
    _h.exports = xM;
  });
  var bh = u((ek, Ih) => {
    var wM = Th(),
      RM = wM();
    Ih.exports = RM;
  });
  var Na = u((tk, Oh) => {
    var CM = bh(),
      NM = Lr();
    function LM(e, t) {
      return e && CM(e, t, NM);
    }
    Oh.exports = LM;
  });
  var Ah = u((rk, Sh) => {
    var PM = bt();
    function qM(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!PM(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    Sh.exports = qM;
  });
  var La = u((nk, xh) => {
    var MM = Na(),
      DM = Ah(),
      FM = DM(MM);
    xh.exports = FM;
  });
  var Rh = u((ik, wh) => {
    function GM(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    wh.exports = GM;
  });
  var Nh = u((ok, Ch) => {
    var VM = mh(),
      UM = La(),
      XM = ht(),
      HM = Rh(),
      BM = me();
    function WM(e, t, r) {
      var n = BM(e) ? VM : HM,
        i = arguments.length < 3;
      return n(e, XM(t, 4), r, i, UM);
    }
    Ch.exports = WM;
  });
  var Ph = u((ak, Lh) => {
    var kM = ga(),
      jM = ht(),
      zM = va(),
      KM = Math.max,
      $M = Math.min;
    function YM(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = zM(r)), (i = r < 0 ? KM(n + i, 0) : $M(i, n - 1))),
        kM(e, jM(t, 3), i, !0)
      );
    }
    Lh.exports = YM;
  });
  var Mh = u((sk, qh) => {
    var QM = pa(),
      ZM = Ph(),
      JM = QM(ZM);
    qh.exports = JM;
  });
  function Dh(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function t1(e, t) {
    if (Dh(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!e1.call(t, r[i]) || !Dh(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var e1,
    Pa,
    Fh = ce(() => {
      "use strict";
      e1 = Object.prototype.hasOwnProperty;
      Pa = t1;
    });
  var eE = {};
  Re(eE, {
    cleanupHTMLElement: () => Z1,
    clearAllStyles: () => Q1,
    clearObjectCache: () => y1,
    getActionListProgress: () => eD,
    getAffectedElements: () => Ga,
    getComputedStyle: () => A1,
    getDestinationValues: () => P1,
    getElementId: () => I1,
    getInstanceId: () => _1,
    getInstanceOrigin: () => R1,
    getItemConfigByKey: () => L1,
    getMaxDurationItemIndex: () => Jh,
    getNamespacedParameterId: () => nD,
    getRenderType: () => Yh,
    getStyleProp: () => q1,
    mediaQueriesEqual: () => oD,
    observeStore: () => S1,
    reduceListToGroup: () => tD,
    reifyState: () => b1,
    renderHTMLElement: () => M1,
    shallowEqual: () => Pa,
    shouldAllowMediaQuery: () => iD,
    shouldNamespaceEventParameter: () => rD,
    stringifyTarget: () => aD,
  });
  function y1() {
    $n.clear();
  }
  function _1() {
    return "i" + m1++;
  }
  function I1(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + T1++;
  }
  function b1({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, Jn.default)(
        e,
        (a, s) => {
          let { eventTypeId: c } = s;
          return a[c] || (a[c] = {}), (a[c][s.id] = s), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function S1({ store: e, select: t, onChange: r, comparator: n = O1 }) {
    let { getState: i, subscribe: o } = e,
      a = o(c),
      s = t(i());
    function c() {
      let f = t(i());
      if (f == null) {
        a();
        return;
      }
      n(f, s) || ((s = f), r(s, e));
    }
    return a;
  }
  function Uh(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function Ga({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (P, T) =>
          P.concat(
            Ga({
              config: { target: T },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: c,
        getChildElements: f,
        getSiblingElements: p,
        matchSelector: d,
        elementContains: g,
        isSiblingNode: h,
      } = i,
      { target: E } = e;
    if (!E) return [];
    let {
      id: m,
      objectId: C,
      selector: S,
      selectorGuids: A,
      appliesTo: O,
      useEventTarget: w,
    } = Uh(E);
    if (C) return [$n.has(C) ? $n.get(C) : $n.set(C, {}).get(C)];
    if (O === Vo.PAGE) {
      let P = a(m);
      return P ? [P] : [];
    }
    let x = (t?.action?.config?.affectedElements ?? {})[m || S] || {},
      G = !!(x.id || x.selector),
      X,
      H,
      k,
      Q = t && s(Uh(t.target));
    if (
      (G
        ? ((X = x.limitAffectedElements), (H = Q), (k = s(x)))
        : (H = k = s({ id: m, selector: S, selectorGuids: A })),
      t && w)
    ) {
      let P = r && (k || w === !0) ? [r] : c(Q);
      if (k) {
        if (w === v1) return c(k).filter((T) => P.some((N) => g(T, N)));
        if (w === Gh) return c(k).filter((T) => P.some((N) => g(N, T)));
        if (w === Vh) return c(k).filter((T) => P.some((N) => h(N, T)));
      }
      return P;
    }
    return H == null || k == null
      ? []
      : Be && n
      ? c(k).filter((P) => n.contains(P))
      : X === Gh
      ? c(H, k)
      : X === g1
      ? f(c(H)).filter(d(k))
      : X === Vh
      ? p(c(H)).filter(d(k))
      : c(k);
  }
  function A1({ element: e, actionItem: t }) {
    if (!Be) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case Jt:
      case er:
      case tr:
      case rr:
      case ti:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function R1(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (St(a)) return Aa(a)(t[a], n);
    switch (n.actionTypeId) {
      case Yt:
      case Qt:
      case Zt:
      case Hr:
        return t[n.actionTypeId] || Va[n.actionTypeId];
      case Br:
        return x1(t[n.actionTypeId], n.config.filters);
      case Wr:
        return w1(t[n.actionTypeId], n.config.fontVariations);
      case zh:
        return { value: (0, at.default)(parseFloat(o(e, Qn)), 1) };
      case Jt: {
        let s = o(e, et),
          c = o(e, tt),
          f,
          p;
        return (
          n.config.widthUnit === yt
            ? (f = Xh.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (f = (0, at.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === yt
            ? (p = Xh.test(c) ? parseFloat(c) : parseFloat(r.height))
            : (p = (0, at.default)(parseFloat(c), parseFloat(r.height))),
          { widthValue: f, heightValue: p }
        );
      }
      case er:
      case tr:
      case rr:
        return K1({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case ti:
        return { value: (0, at.default)(o(e, Zn), r.display) };
      case E1:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function P1({ element: e, actionItem: t, elementApi: r }) {
    if (St(t.actionTypeId)) return xa(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case Yt:
      case Qt:
      case Zt:
      case Hr: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case Jt: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: c, heightValue: f } = t.config;
        if (!Be) return { widthValue: c, heightValue: f };
        if (a === yt) {
          let p = n(e, et);
          i(e, et, ""), (c = o(e, "offsetWidth")), i(e, et, p);
        }
        if (s === yt) {
          let p = n(e, tt);
          i(e, tt, ""), (f = o(e, "offsetHeight")), i(e, tt, p);
        }
        return { widthValue: c, heightValue: f };
      }
      case er:
      case tr:
      case rr: {
        let { rValue: n, gValue: i, bValue: o, aValue: a } = t.config;
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case Br:
        return t.config.filters.reduce(C1, {});
      case Wr:
        return t.config.fontVariations.reduce(N1, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function Yh(e) {
    if (/^TRANSFORM_/.test(e)) return kh;
    if (/^STYLE_/.test(e)) return Da;
    if (/^GENERAL_/.test(e)) return Ma;
    if (/^PLUGIN_/.test(e)) return jh;
  }
  function q1(e, t) {
    return e === Da ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function M1(e, t, r, n, i, o, a, s, c) {
    switch (s) {
      case kh:
        return U1(e, t, r, i, a);
      case Da:
        return $1(e, t, r, i, o, a);
      case Ma:
        return Y1(e, i, a);
      case jh: {
        let { actionTypeId: f } = i;
        if (St(f)) return wa(f)(c, t, i);
      }
    }
  }
  function U1(e, t, r, n, i) {
    let o = V1.map((s) => {
        let c = Va[s],
          {
            xValue: f = c.xValue,
            yValue: p = c.yValue,
            zValue: d = c.zValue,
            xUnit: g = "",
            yUnit: h = "",
            zUnit: E = "",
          } = t[s] || {};
        switch (s) {
          case Yt:
            return `${i1}(${f}${g}, ${p}${h}, ${d}${E})`;
          case Qt:
            return `${o1}(${f}${g}, ${p}${h}, ${d}${E})`;
          case Zt:
            return `${a1}(${f}${g}) ${s1}(${p}${h}) ${u1}(${d}${E})`;
          case Hr:
            return `${c1}(${f}${g}, ${p}${h})`;
          default:
            return "";
        }
      }).join(" "),
      { setStyle: a } = i;
    xt(e, Et, i), a(e, Et, o), B1(n, r) && a(e, Wn, l1);
  }
  function X1(e, t, r, n) {
    let i = (0, Jn.default)(t, (a, s, c) => `${a} ${c}(${s}${G1(c, r)})`, ""),
      { setStyle: o } = n;
    xt(e, Vr, n), o(e, Vr, i);
  }
  function H1(e, t, r, n) {
    let i = (0, Jn.default)(
        t,
        (a, s, c) => (a.push(`"${c}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    xt(e, Ur, n), o(e, Ur, i);
  }
  function B1({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === Yt && n !== void 0) ||
      (e === Qt && n !== void 0) ||
      (e === Zt && (t !== void 0 || r !== void 0))
    );
  }
  function z1(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function K1({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = Fa[t],
      o = n(e, i),
      a = k1.test(o) ? o : r[i],
      s = z1(j1, a).split(Xr);
    return {
      rValue: (0, at.default)(parseInt(s[0], 10), 255),
      gValue: (0, at.default)(parseInt(s[1], 10), 255),
      bValue: (0, at.default)(parseInt(s[2], 10), 255),
      aValue: (0, at.default)(parseFloat(s[3]), 1),
    };
  }
  function $1(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case Jt: {
        let { widthUnit: s = "", heightUnit: c = "" } = n.config,
          { widthValue: f, heightValue: p } = r;
        f !== void 0 && (s === yt && (s = "px"), xt(e, et, o), a(e, et, f + s)),
          p !== void 0 &&
            (c === yt && (c = "px"), xt(e, tt, o), a(e, tt, p + c));
        break;
      }
      case Br: {
        X1(e, r, n.config, o);
        break;
      }
      case Wr: {
        H1(e, r, n.config, o);
        break;
      }
      case er:
      case tr:
      case rr: {
        let s = Fa[n.actionTypeId],
          c = Math.round(r.rValue),
          f = Math.round(r.gValue),
          p = Math.round(r.bValue),
          d = r.aValue;
        xt(e, s, o),
          a(e, s, d >= 1 ? `rgb(${c},${f},${p})` : `rgba(${c},${f},${p},${d})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        xt(e, i, o), a(e, i, r.value + s);
        break;
      }
    }
  }
  function Y1(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case ti: {
        let { value: i } = t.config;
        i === f1 && Be ? n(e, Zn, Ea) : n(e, Zn, i);
        return;
      }
    }
  }
  function xt(e, t, r) {
    if (!Be) return;
    let n = $h[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, $t);
    if (!a) {
      o(e, $t, n);
      return;
    }
    let s = a.split(Xr).map(Kh);
    s.indexOf(n) === -1 && o(e, $t, s.concat(n).join(Xr));
  }
  function Qh(e, t, r) {
    if (!Be) return;
    let n = $h[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, $t);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        $t,
        a
          .split(Xr)
          .map(Kh)
          .filter((s) => s !== n)
          .join(Xr)
      );
  }
  function Q1({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: s } = a.action,
        { actionListId: c } = s,
        f = i[c];
      f && Hh({ actionList: f, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        Hh({ actionList: i[o], elementApi: t });
      });
  }
  function Hh({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        Bh({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((s) => {
            Bh({ actionGroup: s, event: t, elementApi: r });
          });
        });
  }
  function Bh({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      St(o)
        ? (s = (c) => Ra(o)(c, i))
        : (s = Zh({ effect: J1, actionTypeId: o, elementApi: r })),
        Ga({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function Z1(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === Jt) {
      let { config: a } = t;
      a.widthUnit === yt && n(e, et, ""), a.heightUnit === yt && n(e, tt, "");
    }
    i(e, $t) && Zh({ effect: Qh, actionTypeId: o, elementApi: r })(e);
  }
  function J1(e, t, r) {
    let { setStyle: n } = r;
    Qh(e, t, r), n(e, t, ""), t === Et && n(e, Wn, "");
  }
  function Jh(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function eD(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((c, f) => {
        if (n && f === 0) return;
        let { actionItems: p } = c,
          d = p[Jh(p)],
          { config: g, actionTypeId: h } = d;
        i.id === d.id && (s = a + o);
        let E = Yh(h) === Ma ? 0 : g.duration;
        a += g.delay + E;
      }),
      a > 0 ? Gr(s / a) : 0
    );
  }
  function tD({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push((0, ei.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      i &&
        i.some((s) => {
          let { continuousActionGroups: c } = s;
          return c.some(({ actionItems: f }) => f.some(a));
        }),
      (0, ei.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function rD(e, { basedOn: t }) {
    return (
      (e === He.SCROLLING_IN_VIEW && (t === Ze.ELEMENT || t == null)) ||
      (e === He.MOUSE_MOVE && t === Ze.ELEMENT)
    );
  }
  function nD(e, t) {
    return e + h1 + t;
  }
  function iD(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function oD(e, t) {
    return Pa(e && e.sort(), t && t.sort());
  }
  function aD(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + qa + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + qa + r + qa + n;
  }
  var at,
    Jn,
    Yn,
    ei,
    r1,
    n1,
    i1,
    o1,
    a1,
    s1,
    u1,
    c1,
    l1,
    f1,
    Qn,
    Vr,
    Ur,
    et,
    tt,
    Wh,
    d1,
    p1,
    Gh,
    g1,
    Vh,
    v1,
    Zn,
    $t,
    yt,
    Xr,
    h1,
    qa,
    kh,
    Ma,
    Da,
    jh,
    Yt,
    Qt,
    Zt,
    Hr,
    zh,
    Br,
    Wr,
    Jt,
    er,
    tr,
    rr,
    ti,
    E1,
    Kh,
    Fa,
    $h,
    $n,
    m1,
    T1,
    O1,
    Xh,
    x1,
    w1,
    C1,
    N1,
    L1,
    Va,
    D1,
    F1,
    G1,
    V1,
    W1,
    k1,
    j1,
    Zh,
    tE = ce(() => {
      "use strict";
      (at = ie(Eh())), (Jn = ie(Nh())), (Yn = ie(Mh())), (ei = ie(Vt()));
      Ne();
      Fh();
      _a();
      Ca();
      kn();
      ({
        BACKGROUND: r1,
        TRANSFORM: n1,
        TRANSLATE_3D: i1,
        SCALE_3D: o1,
        ROTATE_X: a1,
        ROTATE_Y: s1,
        ROTATE_Z: u1,
        SKEW: c1,
        PRESERVE_3D: l1,
        FLEX: f1,
        OPACITY: Qn,
        FILTER: Vr,
        FONT_VARIATION_SETTINGS: Ur,
        WIDTH: et,
        HEIGHT: tt,
        BACKGROUND_COLOR: Wh,
        BORDER_COLOR: d1,
        COLOR: p1,
        CHILDREN: Gh,
        IMMEDIATE_CHILDREN: g1,
        SIBLINGS: Vh,
        PARENT: v1,
        DISPLAY: Zn,
        WILL_CHANGE: $t,
        AUTO: yt,
        COMMA_DELIMITER: Xr,
        COLON_DELIMITER: h1,
        BAR_DELIMITER: qa,
        RENDER_TRANSFORM: kh,
        RENDER_GENERAL: Ma,
        RENDER_STYLE: Da,
        RENDER_PLUGIN: jh,
      } = Ie),
        ({
          TRANSFORM_MOVE: Yt,
          TRANSFORM_SCALE: Qt,
          TRANSFORM_ROTATE: Zt,
          TRANSFORM_SKEW: Hr,
          STYLE_OPACITY: zh,
          STYLE_FILTER: Br,
          STYLE_FONT_VARIATION: Wr,
          STYLE_SIZE: Jt,
          STYLE_BACKGROUND_COLOR: er,
          STYLE_BORDER: tr,
          STYLE_TEXT_COLOR: rr,
          GENERAL_DISPLAY: ti,
          OBJECT_VALUE: E1,
        } = Ce),
        (Kh = (e) => e.trim()),
        (Fa = Object.freeze({ [er]: Wh, [tr]: d1, [rr]: p1 })),
        ($h = Object.freeze({
          [Et]: n1,
          [Wh]: r1,
          [Qn]: Qn,
          [Vr]: Vr,
          [et]: et,
          [tt]: tt,
          [Ur]: Ur,
        })),
        ($n = new Map());
      m1 = 1;
      T1 = 1;
      O1 = (e, t) => e === t;
      (Xh = /px/),
        (x1 = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = D1[n.type]), r),
            e || {}
          )),
        (w1 = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = F1[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (C1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (N1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (L1 = (e, t, r) => {
          if (St(e)) return Sa(e)(r, t);
          switch (e) {
            case Br: {
              let n = (0, Yn.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case Wr: {
              let n = (0, Yn.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (Va = {
        [Yt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Qt]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [Zt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Hr]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (D1 = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (F1 = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (G1 = (e, t) => {
          let r = (0, Yn.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (V1 = Object.keys(Va));
      (W1 = "\\(([^)]+)\\)"), (k1 = /^rgb/), (j1 = RegExp(`rgba?${W1}`));
      Zh =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case Yt:
            case Qt:
            case Zt:
            case Hr:
              e(n, Et, r);
              break;
            case Br:
              e(n, Vr, r);
              break;
            case Wr:
              e(n, Ur, r);
              break;
            case zh:
              e(n, Qn, r);
              break;
            case Jt:
              e(n, et, r), e(n, tt, r);
              break;
            case er:
            case tr:
            case rr:
              e(n, Fa[t], r);
              break;
            case ti:
              e(n, Zn, r);
              break;
          }
        };
    });
  var wt = u((Ae) => {
    "use strict";
    var nr = on().default;
    Object.defineProperty(Ae, "__esModule", { value: !0 });
    Ae.IX2VanillaUtils =
      Ae.IX2VanillaPlugins =
      Ae.IX2ElementsReducer =
      Ae.IX2Easings =
      Ae.IX2EasingUtils =
      Ae.IX2BrowserSupport =
        void 0;
    var sD = nr((kn(), ze(Qv)));
    Ae.IX2BrowserSupport = sD;
    var uD = nr((ma(), ze(Fr)));
    Ae.IX2Easings = uD;
    var cD = nr((_a(), ze(ih)));
    Ae.IX2EasingUtils = cD;
    var lD = nr((uh(), ze(sh)));
    Ae.IX2ElementsReducer = lD;
    var fD = nr((Ca(), ze(vh)));
    Ae.IX2VanillaPlugins = fD;
    var dD = nr((tE(), ze(eE)));
    Ae.IX2VanillaUtils = dD;
  });
  var ni,
    st,
    pD,
    gD,
    vD,
    hD,
    ED,
    yD,
    ri,
    rE,
    mD,
    _D,
    Ua,
    TD,
    ID,
    bD,
    OD,
    nE,
    iE = ce(() => {
      "use strict";
      Ne();
      (ni = ie(wt())),
        (st = ie(Vt())),
        ({
          IX2_RAW_DATA_IMPORTED: pD,
          IX2_SESSION_STOPPED: gD,
          IX2_INSTANCE_ADDED: vD,
          IX2_INSTANCE_STARTED: hD,
          IX2_INSTANCE_REMOVED: ED,
          IX2_ANIMATION_FRAME_CHANGED: yD,
        } = Ee),
        ({
          optimizeFloat: ri,
          applyEasing: rE,
          createBezierEasing: mD,
        } = ni.IX2EasingUtils),
        ({ RENDER_GENERAL: _D } = Ie),
        ({
          getItemConfigByKey: Ua,
          getRenderType: TD,
          getStyleProp: ID,
        } = ni.IX2VanillaUtils),
        (bD = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: c,
              customEasingFn: f,
              skipMotion: p,
              skipToValue: d,
            } = e,
            { parameters: g } = t.payload,
            h = Math.max(1 - a, 0.01),
            E = g[n];
          E == null && ((h = 1), (E = s));
          let m = Math.max(E, 0) || 0,
            C = ri(m - r),
            S = p ? d : ri(r + C * h),
            A = S * 100;
          if (S === r && e.current) return e;
          let O, w, R, x;
          for (let X = 0, { length: H } = i; X < H; X++) {
            let { keyframe: k, actionItems: Q } = i[X];
            if ((X === 0 && (O = Q[0]), A >= k)) {
              O = Q[0];
              let P = i[X + 1],
                T = P && A !== k;
              (w = T ? P.actionItems[0] : null),
                T && ((R = k / 100), (x = (P.keyframe - k) / 100));
            }
          }
          let G = {};
          if (O && !w)
            for (let X = 0, { length: H } = o; X < H; X++) {
              let k = o[X];
              G[k] = Ua(c, k, O.config);
            }
          else if (O && w && R !== void 0 && x !== void 0) {
            let X = (S - R) / x,
              H = O.config.easing,
              k = rE(H, X, f);
            for (let Q = 0, { length: P } = o; Q < P; Q++) {
              let T = o[Q],
                N = Ua(c, T, O.config),
                Z = (Ua(c, T, w.config) - N) * k + N;
              G[T] = Z;
            }
          }
          return (0, st.merge)(e, { position: S, current: G });
        }),
        (OD = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: c,
              destination: f,
              destinationKeys: p,
              pluginDuration: d,
              instanceDelay: g,
              customEasingFn: h,
              skipMotion: E,
            } = e,
            m = c.config.easing,
            { duration: C, delay: S } = c.config;
          d != null && (C = d),
            (S = g ?? S),
            a === _D ? (C = 0) : (o || E) && (C = S = 0);
          let { now: A } = t.payload;
          if (r && n) {
            let O = A - (i + S);
            if (s) {
              let X = A - i,
                H = C + S,
                k = ri(Math.min(Math.max(0, X / H), 1));
              e = (0, st.set)(e, "verboseTimeElapsed", H * k);
            }
            if (O < 0) return e;
            let w = ri(Math.min(Math.max(0, O / C), 1)),
              R = rE(m, w, h),
              x = {},
              G = null;
            return (
              p.length &&
                (G = p.reduce((X, H) => {
                  let k = f[H],
                    Q = parseFloat(n[H]) || 0,
                    T = (parseFloat(k) - Q) * R + Q;
                  return (X[H] = T), X;
                }, {})),
              (x.current = G),
              (x.position = w),
              w === 1 && ((x.active = !1), (x.complete = !0)),
              (0, st.merge)(e, x)
            );
          }
          return e;
        }),
        (nE = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case pD:
              return t.payload.ixInstances || Object.freeze({});
            case gD:
              return Object.freeze({});
            case vD: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: c,
                  groupIndex: f,
                  isCarrier: p,
                  origin: d,
                  destination: g,
                  immediate: h,
                  verbose: E,
                  continuous: m,
                  parameterId: C,
                  actionGroups: S,
                  smoothing: A,
                  restingValue: O,
                  pluginInstance: w,
                  pluginDuration: R,
                  instanceDelay: x,
                  skipMotion: G,
                  skipToValue: X,
                } = t.payload,
                { actionTypeId: H } = i,
                k = TD(H),
                Q = ID(k, H),
                P = Object.keys(g).filter(
                  (N) => g[N] != null && typeof g[N] != "string"
                ),
                { easing: T } = i.config;
              return (0, st.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: d,
                destination: g,
                destinationKeys: P,
                immediate: h,
                verbose: E,
                current: null,
                actionItem: i,
                actionTypeId: H,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: c,
                groupIndex: f,
                renderType: k,
                isCarrier: p,
                styleProp: Q,
                continuous: m,
                parameterId: C,
                actionGroups: S,
                smoothing: A,
                restingValue: O,
                pluginInstance: w,
                pluginDuration: R,
                instanceDelay: x,
                skipMotion: G,
                skipToValue: X,
                customEasingFn:
                  Array.isArray(T) && T.length === 4 ? mD(T) : void 0,
              });
            }
            case hD: {
              let { instanceId: r, time: n } = t.payload;
              return (0, st.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case ED: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case yD: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  s = e[a],
                  c = s.continuous ? bD : OD;
                r = (0, st.set)(r, a, c(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var SD,
    AD,
    xD,
    oE,
    aE = ce(() => {
      "use strict";
      Ne();
      ({
        IX2_RAW_DATA_IMPORTED: SD,
        IX2_SESSION_STOPPED: AD,
        IX2_PARAMETER_CHANGED: xD,
      } = Ee),
        (oE = (e = {}, t) => {
          switch (t.type) {
            case SD:
              return t.payload.ixParameters || {};
            case AD:
              return {};
            case xD: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var cE = {};
  Re(cE, { default: () => RD });
  var sE,
    uE,
    wD,
    RD,
    lE = ce(() => {
      "use strict";
      sE = ie(Go());
      If();
      Bf();
      jf();
      uE = ie(wt());
      iE();
      aE();
      ({ ixElements: wD } = uE.IX2ElementsReducer),
        (RD = (0, sE.combineReducers)({
          ixData: Tf,
          ixRequest: Hf,
          ixSession: kf,
          ixElements: wD,
          ixInstances: nE,
          ixParameters: oE,
        }));
    });
  var dE = u((Ok, fE) => {
    var CD = gt(),
      ND = me(),
      LD = it(),
      PD = "[object String]";
    function qD(e) {
      return typeof e == "string" || (!ND(e) && LD(e) && CD(e) == PD);
    }
    fE.exports = qD;
  });
  var gE = u((Sk, pE) => {
    var MD = da(),
      DD = MD("length");
    pE.exports = DD;
  });
  var hE = u((Ak, vE) => {
    var FD = "\\ud800-\\udfff",
      GD = "\\u0300-\\u036f",
      VD = "\\ufe20-\\ufe2f",
      UD = "\\u20d0-\\u20ff",
      XD = GD + VD + UD,
      HD = "\\ufe0e\\ufe0f",
      BD = "\\u200d",
      WD = RegExp("[" + BD + FD + XD + HD + "]");
    function kD(e) {
      return WD.test(e);
    }
    vE.exports = kD;
  });
  var SE = u((xk, OE) => {
    var yE = "\\ud800-\\udfff",
      jD = "\\u0300-\\u036f",
      zD = "\\ufe20-\\ufe2f",
      KD = "\\u20d0-\\u20ff",
      $D = jD + zD + KD,
      YD = "\\ufe0e\\ufe0f",
      QD = "[" + yE + "]",
      Xa = "[" + $D + "]",
      Ha = "\\ud83c[\\udffb-\\udfff]",
      ZD = "(?:" + Xa + "|" + Ha + ")",
      mE = "[^" + yE + "]",
      _E = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      TE = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      JD = "\\u200d",
      IE = ZD + "?",
      bE = "[" + YD + "]?",
      e2 = "(?:" + JD + "(?:" + [mE, _E, TE].join("|") + ")" + bE + IE + ")*",
      t2 = bE + IE + e2,
      r2 = "(?:" + [mE + Xa + "?", Xa, _E, TE, QD].join("|") + ")",
      EE = RegExp(Ha + "(?=" + Ha + ")|" + r2 + t2, "g");
    function n2(e) {
      for (var t = (EE.lastIndex = 0); EE.test(e); ) ++t;
      return t;
    }
    OE.exports = n2;
  });
  var xE = u((wk, AE) => {
    var i2 = gE(),
      o2 = hE(),
      a2 = SE();
    function s2(e) {
      return o2(e) ? a2(e) : i2(e);
    }
    AE.exports = s2;
  });
  var RE = u((Rk, wE) => {
    var u2 = Mn(),
      c2 = Dn(),
      l2 = bt(),
      f2 = dE(),
      d2 = xE(),
      p2 = "[object Map]",
      g2 = "[object Set]";
    function v2(e) {
      if (e == null) return 0;
      if (l2(e)) return f2(e) ? d2(e) : e.length;
      var t = c2(e);
      return t == p2 || t == g2 ? e.size : u2(e).length;
    }
    wE.exports = v2;
  });
  var NE = u((Ck, CE) => {
    var h2 = "Expected a function";
    function E2(e) {
      if (typeof e != "function") throw new TypeError(h2);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    CE.exports = E2;
  });
  var Ba = u((Nk, LE) => {
    var y2 = vt(),
      m2 = (function () {
        try {
          var e = y2(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    LE.exports = m2;
  });
  var Wa = u((Lk, qE) => {
    var PE = Ba();
    function _2(e, t, r) {
      t == "__proto__" && PE
        ? PE(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    qE.exports = _2;
  });
  var DE = u((Pk, ME) => {
    var T2 = Wa(),
      I2 = Sn(),
      b2 = Object.prototype,
      O2 = b2.hasOwnProperty;
    function S2(e, t, r) {
      var n = e[t];
      (!(O2.call(e, t) && I2(n, r)) || (r === void 0 && !(t in e))) &&
        T2(e, t, r);
    }
    ME.exports = S2;
  });
  var VE = u((qk, GE) => {
    var A2 = DE(),
      x2 = qr(),
      w2 = Nn(),
      FE = Je(),
      R2 = zt();
    function C2(e, t, r, n) {
      if (!FE(e)) return e;
      t = x2(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var c = R2(t[i]),
          f = r;
        if (c === "__proto__" || c === "constructor" || c === "prototype")
          return e;
        if (i != a) {
          var p = s[c];
          (f = n ? n(p, c, s) : void 0),
            f === void 0 && (f = FE(p) ? p : w2(t[i + 1]) ? [] : {});
        }
        A2(s, c, f), (s = s[c]);
      }
      return e;
    }
    GE.exports = C2;
  });
  var XE = u((Mk, UE) => {
    var N2 = Vn(),
      L2 = VE(),
      P2 = qr();
    function q2(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = N2(e, a);
        r(s, a) && L2(o, P2(a, e), s);
      }
      return o;
    }
    UE.exports = q2;
  });
  var BE = u((Dk, HE) => {
    var M2 = Rn(),
      D2 = So(),
      F2 = Qo(),
      G2 = Yo(),
      V2 = Object.getOwnPropertySymbols,
      U2 = V2
        ? function (e) {
            for (var t = []; e; ) M2(t, F2(e)), (e = D2(e));
            return t;
          }
        : G2;
    HE.exports = U2;
  });
  var kE = u((Fk, WE) => {
    function X2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    WE.exports = X2;
  });
  var zE = u((Gk, jE) => {
    var H2 = Je(),
      B2 = qn(),
      W2 = kE(),
      k2 = Object.prototype,
      j2 = k2.hasOwnProperty;
    function z2(e) {
      if (!H2(e)) return W2(e);
      var t = B2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !j2.call(e, n))) || r.push(n);
      return r;
    }
    jE.exports = z2;
  });
  var $E = u((Vk, KE) => {
    var K2 = Jo(),
      $2 = zE(),
      Y2 = bt();
    function Q2(e) {
      return Y2(e) ? K2(e, !0) : $2(e);
    }
    KE.exports = Q2;
  });
  var QE = u((Uk, YE) => {
    var Z2 = $o(),
      J2 = BE(),
      eF = $E();
    function tF(e) {
      return Z2(e, eF, J2);
    }
    YE.exports = tF;
  });
  var JE = u((Xk, ZE) => {
    var rF = fa(),
      nF = ht(),
      iF = XE(),
      oF = QE();
    function aF(e, t) {
      if (e == null) return {};
      var r = rF(oF(e), function (n) {
        return [n];
      });
      return (
        (t = nF(t)),
        iF(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    ZE.exports = aF;
  });
  var ty = u((Hk, ey) => {
    var sF = ht(),
      uF = NE(),
      cF = JE();
    function lF(e, t) {
      return cF(e, uF(sF(t)));
    }
    ey.exports = lF;
  });
  var ny = u((Bk, ry) => {
    var fF = Mn(),
      dF = Dn(),
      pF = wr(),
      gF = me(),
      vF = bt(),
      hF = Cn(),
      EF = qn(),
      yF = Pn(),
      mF = "[object Map]",
      _F = "[object Set]",
      TF = Object.prototype,
      IF = TF.hasOwnProperty;
    function bF(e) {
      if (e == null) return !0;
      if (
        vF(e) &&
        (gF(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          hF(e) ||
          yF(e) ||
          pF(e))
      )
        return !e.length;
      var t = dF(e);
      if (t == mF || t == _F) return !e.size;
      if (EF(e)) return !fF(e).length;
      for (var r in e) if (IF.call(e, r)) return !1;
      return !0;
    }
    ry.exports = bF;
  });
  var oy = u((Wk, iy) => {
    var OF = Wa(),
      SF = Na(),
      AF = ht();
    function xF(e, t) {
      var r = {};
      return (
        (t = AF(t, 3)),
        SF(e, function (n, i, o) {
          OF(r, i, t(n, i, o));
        }),
        r
      );
    }
    iy.exports = xF;
  });
  var sy = u((kk, ay) => {
    function wF(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    ay.exports = wF;
  });
  var cy = u((jk, uy) => {
    var RF = Xn();
    function CF(e) {
      return typeof e == "function" ? e : RF;
    }
    uy.exports = CF;
  });
  var fy = u((zk, ly) => {
    var NF = sy(),
      LF = La(),
      PF = cy(),
      qF = me();
    function MF(e, t) {
      var r = qF(e) ? NF : LF;
      return r(e, PF(t));
    }
    ly.exports = MF;
  });
  var py = u((Kk, dy) => {
    var DF = Xe(),
      FF = function () {
        return DF.Date.now();
      };
    dy.exports = FF;
  });
  var hy = u(($k, vy) => {
    var GF = Je(),
      ka = py(),
      gy = Hn(),
      VF = "Expected a function",
      UF = Math.max,
      XF = Math.min;
    function HF(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        c,
        f = 0,
        p = !1,
        d = !1,
        g = !0;
      if (typeof e != "function") throw new TypeError(VF);
      (t = gy(t) || 0),
        GF(r) &&
          ((p = !!r.leading),
          (d = "maxWait" in r),
          (o = d ? UF(gy(r.maxWait) || 0, t) : o),
          (g = "trailing" in r ? !!r.trailing : g));
      function h(x) {
        var G = n,
          X = i;
        return (n = i = void 0), (f = x), (a = e.apply(X, G)), a;
      }
      function E(x) {
        return (f = x), (s = setTimeout(S, t)), p ? h(x) : a;
      }
      function m(x) {
        var G = x - c,
          X = x - f,
          H = t - G;
        return d ? XF(H, o - X) : H;
      }
      function C(x) {
        var G = x - c,
          X = x - f;
        return c === void 0 || G >= t || G < 0 || (d && X >= o);
      }
      function S() {
        var x = ka();
        if (C(x)) return A(x);
        s = setTimeout(S, m(x));
      }
      function A(x) {
        return (s = void 0), g && n ? h(x) : ((n = i = void 0), a);
      }
      function O() {
        s !== void 0 && clearTimeout(s), (f = 0), (n = c = i = s = void 0);
      }
      function w() {
        return s === void 0 ? a : A(ka());
      }
      function R() {
        var x = ka(),
          G = C(x);
        if (((n = arguments), (i = this), (c = x), G)) {
          if (s === void 0) return E(c);
          if (d) return clearTimeout(s), (s = setTimeout(S, t)), h(c);
        }
        return s === void 0 && (s = setTimeout(S, t)), a;
      }
      return (R.cancel = O), (R.flush = w), R;
    }
    vy.exports = HF;
  });
  var yy = u((Yk, Ey) => {
    var BF = hy(),
      WF = Je(),
      kF = "Expected a function";
    function jF(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(kF);
      return (
        WF(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        BF(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    Ey.exports = jF;
  });
  var _y = {};
  Re(_y, {
    actionListPlaybackChanged: () => or,
    animationFrameChanged: () => oi,
    clearRequested: () => EG,
    elementStateChanged: () => Ja,
    eventListenerAdded: () => ii,
    eventStateChanged: () => Ya,
    instanceAdded: () => Qa,
    instanceRemoved: () => Za,
    instanceStarted: () => ai,
    mediaQueriesDefined: () => ts,
    parameterChanged: () => ir,
    playbackRequested: () => vG,
    previewRequested: () => gG,
    rawDataImported: () => ja,
    sessionInitialized: () => za,
    sessionStarted: () => Ka,
    sessionStopped: () => $a,
    stopRequested: () => hG,
    testFrameRendered: () => yG,
    viewportWidthChanged: () => es,
  });
  var my,
    zF,
    KF,
    $F,
    YF,
    QF,
    ZF,
    JF,
    eG,
    tG,
    rG,
    nG,
    iG,
    oG,
    aG,
    sG,
    uG,
    cG,
    lG,
    fG,
    dG,
    pG,
    ja,
    za,
    Ka,
    $a,
    gG,
    vG,
    hG,
    EG,
    ii,
    yG,
    Ya,
    oi,
    ir,
    Qa,
    ai,
    Za,
    Ja,
    or,
    es,
    ts,
    si = ce(() => {
      "use strict";
      Ne();
      (my = ie(wt())),
        ({
          IX2_RAW_DATA_IMPORTED: zF,
          IX2_SESSION_INITIALIZED: KF,
          IX2_SESSION_STARTED: $F,
          IX2_SESSION_STOPPED: YF,
          IX2_PREVIEW_REQUESTED: QF,
          IX2_PLAYBACK_REQUESTED: ZF,
          IX2_STOP_REQUESTED: JF,
          IX2_CLEAR_REQUESTED: eG,
          IX2_EVENT_LISTENER_ADDED: tG,
          IX2_TEST_FRAME_RENDERED: rG,
          IX2_EVENT_STATE_CHANGED: nG,
          IX2_ANIMATION_FRAME_CHANGED: iG,
          IX2_PARAMETER_CHANGED: oG,
          IX2_INSTANCE_ADDED: aG,
          IX2_INSTANCE_STARTED: sG,
          IX2_INSTANCE_REMOVED: uG,
          IX2_ELEMENT_STATE_CHANGED: cG,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: lG,
          IX2_VIEWPORT_WIDTH_CHANGED: fG,
          IX2_MEDIA_QUERIES_DEFINED: dG,
        } = Ee),
        ({ reifyState: pG } = my.IX2VanillaUtils),
        (ja = (e) => ({ type: zF, payload: { ...pG(e) } })),
        (za = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: KF,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (Ka = () => ({ type: $F })),
        ($a = () => ({ type: YF })),
        (gG = ({ rawData: e, defer: t }) => ({
          type: QF,
          payload: { defer: t, rawData: e },
        })),
        (vG = ({
          actionTypeId: e = Ce.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: c,
        }) => ({
          type: ZF,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: c,
          },
        })),
        (hG = (e) => ({ type: JF, payload: { actionListId: e } })),
        (EG = () => ({ type: eG })),
        (ii = (e, t) => ({
          type: tG,
          payload: { target: e, listenerParams: t },
        })),
        (yG = (e = 1) => ({ type: rG, payload: { step: e } })),
        (Ya = (e, t) => ({ type: nG, payload: { stateKey: e, newState: t } })),
        (oi = (e, t) => ({ type: iG, payload: { now: e, parameters: t } })),
        (ir = (e, t) => ({ type: oG, payload: { key: e, value: t } })),
        (Qa = (e) => ({ type: aG, payload: { ...e } })),
        (ai = (e, t) => ({ type: sG, payload: { instanceId: e, time: t } })),
        (Za = (e) => ({ type: uG, payload: { instanceId: e } })),
        (Ja = (e, t, r, n) => ({
          type: cG,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (or = ({ actionListId: e, isPlaying: t }) => ({
          type: lG,
          payload: { actionListId: e, isPlaying: t },
        })),
        (es = ({ width: e, mediaQueries: t }) => ({
          type: fG,
          payload: { width: e, mediaQueries: t },
        })),
        (ts = () => ({ type: dG }));
    });
  var xe = {};
  Re(xe, {
    elementContains: () => is,
    getChildElements: () => wG,
    getClosestElement: () => kr,
    getProperty: () => bG,
    getQuerySelector: () => ns,
    getRefType: () => os,
    getSiblingElements: () => RG,
    getStyle: () => IG,
    getValidDocument: () => SG,
    isSiblingNode: () => xG,
    matchSelector: () => OG,
    queryDocument: () => AG,
    setStyle: () => TG,
  });
  function TG(e, t, r) {
    e.style[t] = r;
  }
  function IG(e, t) {
    return e.style[t];
  }
  function bG(e, t) {
    return e[t];
  }
  function OG(e) {
    return (t) => t[rs](e);
  }
  function ns({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(Ty) !== -1) {
        let n = e.split(Ty),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(by)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function SG(e) {
    return e == null || e === document.documentElement.getAttribute(by)
      ? document
      : null;
  }
  function AG(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function is(e, t) {
    return e.contains(t);
  }
  function xG(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function wG(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function RG(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function os(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? mG
        : _G
      : null;
  }
  var Iy,
    rs,
    Ty,
    mG,
    _G,
    by,
    kr,
    Oy = ce(() => {
      "use strict";
      Iy = ie(wt());
      Ne();
      ({ ELEMENT_MATCHES: rs } = Iy.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: Ty,
          HTML_ELEMENT: mG,
          PLAIN_OBJECT: _G,
          WF_PAGE: by,
        } = Ie);
      kr = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[rs] && r[rs](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var as = u((Jk, Ay) => {
    var CG = Je(),
      Sy = Object.create,
      NG = (function () {
        function e() {}
        return function (t) {
          if (!CG(t)) return {};
          if (Sy) return Sy(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    Ay.exports = NG;
  });
  var ui = u((ej, xy) => {
    function LG() {}
    xy.exports = LG;
  });
  var li = u((tj, wy) => {
    var PG = as(),
      qG = ui();
    function ci(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    ci.prototype = PG(qG.prototype);
    ci.prototype.constructor = ci;
    wy.exports = ci;
  });
  var Ly = u((rj, Ny) => {
    var Ry = Dt(),
      MG = wr(),
      DG = me(),
      Cy = Ry ? Ry.isConcatSpreadable : void 0;
    function FG(e) {
      return DG(e) || MG(e) || !!(Cy && e && e[Cy]);
    }
    Ny.exports = FG;
  });
  var My = u((nj, qy) => {
    var GG = Rn(),
      VG = Ly();
    function Py(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = VG), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? Py(s, t - 1, r, n, i)
            : GG(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    qy.exports = Py;
  });
  var Fy = u((ij, Dy) => {
    var UG = My();
    function XG(e) {
      var t = e == null ? 0 : e.length;
      return t ? UG(e, 1) : [];
    }
    Dy.exports = XG;
  });
  var Vy = u((oj, Gy) => {
    function HG(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    Gy.exports = HG;
  });
  var Hy = u((aj, Xy) => {
    var BG = Vy(),
      Uy = Math.max;
    function WG(e, t, r) {
      return (
        (t = Uy(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = Uy(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), BG(e, this, s);
        }
      );
    }
    Xy.exports = WG;
  });
  var Wy = u((sj, By) => {
    function kG(e) {
      return function () {
        return e;
      };
    }
    By.exports = kG;
  });
  var zy = u((uj, jy) => {
    var jG = Wy(),
      ky = Ba(),
      zG = Xn(),
      KG = ky
        ? function (e, t) {
            return ky(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: jG(t),
              writable: !0,
            });
          }
        : zG;
    jy.exports = KG;
  });
  var $y = u((cj, Ky) => {
    var $G = 800,
      YG = 16,
      QG = Date.now;
    function ZG(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = QG(),
          i = YG - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= $G) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    Ky.exports = ZG;
  });
  var Qy = u((lj, Yy) => {
    var JG = zy(),
      eV = $y(),
      tV = eV(JG);
    Yy.exports = tV;
  });
  var Jy = u((fj, Zy) => {
    var rV = Fy(),
      nV = Hy(),
      iV = Qy();
    function oV(e) {
      return iV(nV(e, void 0, rV), e + "");
    }
    Zy.exports = oV;
  });
  var rm = u((dj, tm) => {
    var em = ea(),
      aV = em && new em();
    tm.exports = aV;
  });
  var im = u((pj, nm) => {
    function sV() {}
    nm.exports = sV;
  });
  var ss = u((gj, am) => {
    var om = rm(),
      uV = im(),
      cV = om
        ? function (e) {
            return om.get(e);
          }
        : uV;
    am.exports = cV;
  });
  var um = u((vj, sm) => {
    var lV = {};
    sm.exports = lV;
  });
  var us = u((hj, lm) => {
    var cm = um(),
      fV = Object.prototype,
      dV = fV.hasOwnProperty;
    function pV(e) {
      for (
        var t = e.name + "", r = cm[t], n = dV.call(cm, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    lm.exports = pV;
  });
  var di = u((Ej, fm) => {
    var gV = as(),
      vV = ui(),
      hV = 4294967295;
    function fi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = hV),
        (this.__views__ = []);
    }
    fi.prototype = gV(vV.prototype);
    fi.prototype.constructor = fi;
    fm.exports = fi;
  });
  var pm = u((yj, dm) => {
    function EV(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    dm.exports = EV;
  });
  var vm = u((mj, gm) => {
    var yV = di(),
      mV = li(),
      _V = pm();
    function TV(e) {
      if (e instanceof yV) return e.clone();
      var t = new mV(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = _V(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    gm.exports = TV;
  });
  var ym = u((_j, Em) => {
    var IV = di(),
      hm = li(),
      bV = ui(),
      OV = me(),
      SV = it(),
      AV = vm(),
      xV = Object.prototype,
      wV = xV.hasOwnProperty;
    function pi(e) {
      if (SV(e) && !OV(e) && !(e instanceof IV)) {
        if (e instanceof hm) return e;
        if (wV.call(e, "__wrapped__")) return AV(e);
      }
      return new hm(e);
    }
    pi.prototype = bV.prototype;
    pi.prototype.constructor = pi;
    Em.exports = pi;
  });
  var _m = u((Tj, mm) => {
    var RV = di(),
      CV = ss(),
      NV = us(),
      LV = ym();
    function PV(e) {
      var t = NV(e),
        r = LV[t];
      if (typeof r != "function" || !(t in RV.prototype)) return !1;
      if (e === r) return !0;
      var n = CV(r);
      return !!n && e === n[0];
    }
    mm.exports = PV;
  });
  var Om = u((Ij, bm) => {
    var Tm = li(),
      qV = Jy(),
      MV = ss(),
      cs = us(),
      DV = me(),
      Im = _m(),
      FV = "Expected a function",
      GV = 8,
      VV = 32,
      UV = 128,
      XV = 256;
    function HV(e) {
      return qV(function (t) {
        var r = t.length,
          n = r,
          i = Tm.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(FV);
          if (i && !a && cs(o) == "wrapper") var a = new Tm([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = cs(o),
            c = s == "wrapper" ? MV(o) : void 0;
          c &&
          Im(c[0]) &&
          c[1] == (UV | GV | VV | XV) &&
          !c[4].length &&
          c[9] == 1
            ? (a = a[cs(c[0])].apply(a, c[3]))
            : (a = o.length == 1 && Im(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var f = arguments,
            p = f[0];
          if (a && f.length == 1 && DV(p)) return a.plant(p).value();
          for (var d = 0, g = r ? t[d].apply(this, f) : p; ++d < r; )
            g = t[d].call(this, g);
          return g;
        };
      });
    }
    bm.exports = HV;
  });
  var Am = u((bj, Sm) => {
    var BV = Om(),
      WV = BV();
    Sm.exports = WV;
  });
  var wm = u((Oj, xm) => {
    function kV(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    xm.exports = kV;
  });
  var Cm = u((Sj, Rm) => {
    var jV = wm(),
      ls = Hn();
    function zV(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = ls(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = ls(t)), (t = t === t ? t : 0)),
        jV(ls(e), t, r)
      );
    }
    Rm.exports = zV;
  });
  var Vm,
    Um,
    Xm,
    Hm,
    KV,
    $V,
    YV,
    QV,
    ZV,
    JV,
    eU,
    tU,
    rU,
    nU,
    iU,
    oU,
    aU,
    sU,
    uU,
    Bm,
    Wm,
    cU,
    lU,
    fU,
    km,
    dU,
    pU,
    jm,
    gU,
    fs,
    zm,
    Nm,
    Lm,
    Km,
    zr,
    vU,
    rt,
    $m,
    hU,
    Pe,
    We,
    Kr,
    Ym,
    ds,
    Pm,
    ps,
    EU,
    jr,
    yU,
    mU,
    _U,
    Qm,
    qm,
    TU,
    Mm,
    IU,
    bU,
    OU,
    Dm,
    gi,
    vi,
    Fm,
    Gm,
    Zm,
    Jm = ce(() => {
      "use strict";
      (Vm = ie(Am())), (Um = ie(Un())), (Xm = ie(Cm()));
      Ne();
      gs();
      si();
      (Hm = ie(wt())),
        ({
          MOUSE_CLICK: KV,
          MOUSE_SECOND_CLICK: $V,
          MOUSE_DOWN: YV,
          MOUSE_UP: QV,
          MOUSE_OVER: ZV,
          MOUSE_OUT: JV,
          DROPDOWN_CLOSE: eU,
          DROPDOWN_OPEN: tU,
          SLIDER_ACTIVE: rU,
          SLIDER_INACTIVE: nU,
          TAB_ACTIVE: iU,
          TAB_INACTIVE: oU,
          NAVBAR_CLOSE: aU,
          NAVBAR_OPEN: sU,
          MOUSE_MOVE: uU,
          PAGE_SCROLL_DOWN: Bm,
          SCROLL_INTO_VIEW: Wm,
          SCROLL_OUT_OF_VIEW: cU,
          PAGE_SCROLL_UP: lU,
          SCROLLING_IN_VIEW: fU,
          PAGE_FINISH: km,
          ECOMMERCE_CART_CLOSE: dU,
          ECOMMERCE_CART_OPEN: pU,
          PAGE_START: jm,
          PAGE_SCROLL: gU,
        } = He),
        (fs = "COMPONENT_ACTIVE"),
        (zm = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: Nm } = Ie),
        ({ getNamespacedParameterId: Lm } = Hm.IX2VanillaUtils),
        (Km = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (zr = Km(({ element: e, nativeEvent: t }) => e === t.target)),
        (vU = Km(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (rt = (0, Vm.default)([zr, vU])),
        ($m = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !EU[i.eventTypeId]) return i;
          }
          return null;
        }),
        (hU = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!$m(e, n);
        }),
        (Pe = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: c } = o.config,
            f = $m(e, c);
          return (
            f &&
              ar({
                store: e,
                eventId: c,
                eventTarget: r,
                eventStateKey: c + Nm + n.split(Nm)[1],
                actionListId: (0, Um.default)(f, "action.config.actionListId"),
              }),
            ar({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            $r({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            i
          );
        }),
        (We = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (Kr = { handler: We(rt, Pe) }),
        (Ym = { ...Kr, types: [fs, zm].join(" ") }),
        (ds = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (Pm = "mouseover mouseout"),
        (ps = { types: ds }),
        (EU = { PAGE_START: jm, PAGE_FINISH: km }),
        (jr = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, Xm.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (yU = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (mU = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (_U = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = jr(),
            o = r.scrollOffsetValue,
            c = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return yU(t.getBoundingClientRect(), {
            left: 0,
            top: c,
            right: n,
            bottom: i - c,
          });
        }),
        (Qm = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [fs, zm].indexOf(n) !== -1 ? n === fs : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (qm = (e) => (t, r) => {
          let n = { elementHovered: mU(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (TU = (e) => (t, r) => {
          let n = { ...r, elementVisible: _U(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (Mm =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = jr(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: c, scrollOffsetUnit: f } = a,
              p = f === "PX",
              d = i - o,
              g = Number((n / d).toFixed(2));
            if (r && r.percentTop === g) return r;
            let h = (p ? c : (o * (c || 0)) / 100) / d,
              E,
              m,
              C = 0;
            r &&
              ((E = g > r.percentTop),
              (m = r.scrollingDown !== E),
              (C = m ? g : r.anchorTop));
            let S = s === Bm ? g >= C + h : g <= C - h,
              A = {
                ...r,
                percentTop: g,
                inBounds: S,
                anchorTop: C,
                scrollingDown: E,
              };
            return (r && S && (m || A.inBounds !== r.inBounds) && e(t, A)) || A;
          }),
        (IU = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (bU = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (OU = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (Dm =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (gi = (e = !0) => ({
          ...Ym,
          handler: We(
            e ? rt : zr,
            Qm((t, r) => (r.isActive ? Kr.handler(t, r) : r))
          ),
        })),
        (vi = (e = !0) => ({
          ...Ym,
          handler: We(
            e ? rt : zr,
            Qm((t, r) => (r.isActive ? r : Kr.handler(t, r)))
          ),
        })),
        (Fm = {
          ...ps,
          handler: TU((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === Wm) === r
              ? (Pe(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (Gm = 0.05),
        (Zm = {
          [rU]: gi(),
          [nU]: vi(),
          [tU]: gi(),
          [eU]: vi(),
          [sU]: gi(!1),
          [aU]: vi(!1),
          [iU]: gi(),
          [oU]: vi(),
          [pU]: { types: "ecommerce-cart-open", handler: We(rt, Pe) },
          [dU]: { types: "ecommerce-cart-close", handler: We(rt, Pe) },
          [KV]: {
            types: "click",
            handler: We(
              rt,
              Dm((e, { clickCount: t }) => {
                hU(e) ? t === 1 && Pe(e) : Pe(e);
              })
            ),
          },
          [$V]: {
            types: "click",
            handler: We(
              rt,
              Dm((e, { clickCount: t }) => {
                t === 2 && Pe(e);
              })
            ),
          },
          [YV]: { ...Kr, types: "mousedown" },
          [QV]: { ...Kr, types: "mouseup" },
          [ZV]: {
            types: Pm,
            handler: We(
              rt,
              qm((e, t) => {
                t.elementHovered && Pe(e);
              })
            ),
          },
          [JV]: {
            types: Pm,
            handler: We(
              rt,
              qm((e, t) => {
                t.elementHovered || Pe(e);
              })
            ),
          },
          [uU]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: c,
                  reverse: f,
                  restingState: p = 0,
                } = r,
                {
                  clientX: d = o.clientX,
                  clientY: g = o.clientY,
                  pageX: h = o.pageX,
                  pageY: E = o.pageY,
                } = n,
                m = s === "X_AXIS",
                C = n.type === "mouseout",
                S = p / 100,
                A = c,
                O = !1;
              switch (a) {
                case Ze.VIEWPORT: {
                  S = m
                    ? Math.min(d, window.innerWidth) / window.innerWidth
                    : Math.min(g, window.innerHeight) / window.innerHeight;
                  break;
                }
                case Ze.PAGE: {
                  let {
                    scrollLeft: w,
                    scrollTop: R,
                    scrollWidth: x,
                    scrollHeight: G,
                  } = jr();
                  S = m ? Math.min(w + h, x) / x : Math.min(R + E, G) / G;
                  break;
                }
                case Ze.ELEMENT:
                default: {
                  A = Lm(i, c);
                  let w = n.type.indexOf("mouse") === 0;
                  if (w && rt({ element: t, nativeEvent: n }) !== !0) break;
                  let R = t.getBoundingClientRect(),
                    { left: x, top: G, width: X, height: H } = R;
                  if (!w && !IU({ left: d, top: g }, R)) break;
                  (O = !0), (S = m ? (d - x) / X : (g - G) / H);
                  break;
                }
              }
              return (
                C && (S > 1 - Gm || S < Gm) && (S = Math.round(S)),
                (a !== Ze.ELEMENT || O || O !== o.elementHovered) &&
                  ((S = f ? 1 - S : S), e.dispatch(ir(A, S))),
                {
                  elementHovered: O,
                  clientX: d,
                  clientY: g,
                  pageX: h,
                  pageY: E,
                }
              );
            },
          },
          [gU]: {
            types: ds,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = jr(),
                s = i / (o - a);
              (s = n ? 1 - s : s), e.dispatch(ir(r, s));
            },
          },
          [fU]: {
            types: ds,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: c,
                  clientHeight: f,
                } = jr(),
                {
                  basedOn: p,
                  selectedAxis: d,
                  continuousParameterGroupId: g,
                  startsEntering: h,
                  startsExiting: E,
                  addEndOffset: m,
                  addStartOffset: C,
                  addOffsetValue: S = 0,
                  endOffsetValue: A = 0,
                } = r,
                O = d === "X_AXIS";
              if (p === Ze.VIEWPORT) {
                let w = O ? o / s : a / c;
                return (
                  w !== i.scrollPercent && t.dispatch(ir(g, w)),
                  { scrollPercent: w }
                );
              } else {
                let w = Lm(n, g),
                  R = e.getBoundingClientRect(),
                  x = (C ? S : 0) / 100,
                  G = (m ? A : 0) / 100;
                (x = h ? x : 1 - x), (G = E ? G : 1 - G);
                let X = R.top + Math.min(R.height * x, f),
                  k = R.top + R.height * G - X,
                  Q = Math.min(f + k, c),
                  T = Math.min(Math.max(0, f - X), Q) / Q;
                return (
                  T !== i.scrollPercent && t.dispatch(ir(w, T)),
                  { scrollPercent: T }
                );
              }
            },
          },
          [Wm]: Fm,
          [cU]: Fm,
          [Bm]: {
            ...ps,
            handler: Mm((e, t) => {
              t.scrollingDown && Pe(e);
            }),
          },
          [lU]: {
            ...ps,
            handler: Mm((e, t) => {
              t.scrollingDown || Pe(e);
            }),
          },
          [km]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: We(zr, bU(Pe)),
          },
          [jm]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: We(zr, OU(Pe)),
          },
        });
    });
  var h_ = {};
  Re(h_, {
    observeRequests: () => WU,
    startActionGroup: () => $r,
    startEngine: () => Ti,
    stopActionGroup: () => ar,
    stopAllActionGroups: () => p_,
    stopEngine: () => Ii,
  });
  function WU(e) {
    Rt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: zU }),
      Rt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: KU }),
      Rt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: $U }),
      Rt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: YU });
  }
  function kU(e) {
    Rt({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Ii(e),
          c_({ store: e, elementApi: xe }),
          Ti({ store: e, allowEvents: !0 }),
          l_();
      },
    });
  }
  function jU(e, t) {
    let r = Rt({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function zU({ rawData: e, defer: t }, r) {
    let n = () => {
      Ti({ store: r, rawData: e, allowEvents: !0 }), l_();
    };
    t ? setTimeout(n, 0) : n();
  }
  function l_() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function KU(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: c,
        verbose: f = !0,
      } = e,
      { rawData: p } = e;
    if (n && i && p && s) {
      let d = p.actionLists[n];
      d && (p = PU({ actionList: d, actionItemId: i, rawData: p }));
    }
    if (
      (Ti({ store: t, rawData: p, allowEvents: a, testManual: c }),
      (n && r === Ce.GENERAL_START_ACTION) || vs(r))
    ) {
      ar({ store: t, actionListId: n }),
        d_({ store: t, actionListId: n, eventId: o });
      let d = $r({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: s,
        verbose: f,
      });
      f && d && t.dispatch(or({ actionListId: n, isPlaying: !s }));
    }
  }
  function $U({ actionListId: e }, t) {
    e ? ar({ store: t, actionListId: e }) : p_({ store: t }), Ii(t);
  }
  function YU(e, t) {
    Ii(t), c_({ store: t, elementApi: xe });
  }
  function Ti({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(ja(t)),
      i.active ||
        (e.dispatch(
          za({
            hasBoundaryNodes: !!document.querySelector(Ei),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (rX(e), QU(), e.getState().ixSession.hasDefinedMediaQueries && kU(e)),
        e.dispatch(Ka()),
        ZU(e, n));
  }
  function QU() {
    let { documentElement: e } = document;
    e.className.indexOf(e_) === -1 && (e.className += ` ${e_}`);
  }
  function ZU(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(oi(n, o)), t ? jU(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Ii(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(JU), FU(), e.dispatch($a());
    }
  }
  function JU({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function eX({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: c,
  }) {
    let { ixData: f, ixSession: p } = e.getState(),
      { events: d } = f,
      g = d[n],
      { eventTypeId: h } = g,
      E = {},
      m = {},
      C = [],
      { continuousActionGroups: S } = a,
      { id: A } = a;
    qU(h, i) && (A = MU(t, A));
    let O = p.hasBoundaryNodes && r ? kr(r, Ei) : null;
    S.forEach((w) => {
      let { keyframe: R, actionItems: x } = w;
      x.forEach((G) => {
        let { actionTypeId: X } = G,
          { target: H } = G.config;
        if (!H) return;
        let k = H.boundaryMode ? O : null,
          Q = GU(H) + hs + X;
        if (((m[Q] = tX(m[Q], R, G)), !E[Q])) {
          E[Q] = !0;
          let { config: P } = G;
          yi({
            config: P,
            event: g,
            eventTarget: r,
            elementRoot: k,
            elementApi: xe,
          }).forEach((T) => {
            C.push({ element: T, key: Q });
          });
        }
      });
    }),
      C.forEach(({ element: w, key: R }) => {
        let x = m[R],
          G = (0, ut.default)(x, "[0].actionItems[0]", {}),
          { actionTypeId: X } = G,
          H = _i(X) ? ys(X)(w, G) : null,
          k = Es({ element: w, actionItem: G, elementApi: xe }, H);
        ms({
          store: e,
          element: w,
          eventId: n,
          actionListId: o,
          actionItem: G,
          destination: k,
          continuous: !0,
          parameterId: A,
          actionGroups: x,
          smoothing: s,
          restingValue: c,
          pluginInstance: H,
        });
      });
  }
  function tX(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function rX(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    f_(e),
      (0, sr.default)(r, (i, o) => {
        let a = Zm[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        uX({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && iX(e);
  }
  function iX(e) {
    let t = () => {
      f_(e);
    };
    nX.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(ii(window, [r, t]));
    }),
      t();
  }
  function f_(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(es({ width: n, mediaQueries: i }));
    }
  }
  function uX({ logic: e, store: t, events: r }) {
    cX(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = oX(r, sX);
    if (!(0, n_.default)(s)) return;
    (0, sr.default)(s, (d, g) => {
      let h = r[g],
        { action: E, id: m, mediaQueries: C = o.mediaQueryKeys } = h,
        { actionListId: S } = E.config;
      VU(C, o.mediaQueryKeys) || t.dispatch(ts()),
        E.actionTypeId === Ce.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(h.config) ? h.config : [h.config]).forEach((O) => {
            let { continuousParameterGroupId: w } = O,
              R = (0, ut.default)(a, `${S}.continuousParameterGroups`, []),
              x = (0, r_.default)(R, ({ id: H }) => H === w),
              G = (O.smoothing || 0) / 100,
              X = (O.restingState || 0) / 100;
            x &&
              d.forEach((H, k) => {
                let Q = m + hs + k;
                eX({
                  store: t,
                  eventStateKey: Q,
                  eventTarget: H,
                  eventId: m,
                  eventConfig: O,
                  actionListId: S,
                  parameterGroup: x,
                  smoothing: G,
                  restingValue: X,
                });
              });
          }),
        (E.actionTypeId === Ce.GENERAL_START_ACTION || vs(E.actionTypeId)) &&
          d_({ store: t, actionListId: S, eventId: m });
    });
    let c = (d) => {
        let { ixSession: g } = t.getState();
        aX(s, (h, E, m) => {
          let C = r[E],
            S = g.eventState[m],
            { action: A, mediaQueries: O = o.mediaQueryKeys } = C;
          if (!mi(O, g.mediaQueryKey)) return;
          let w = (R = {}) => {
            let x = i(
              {
                store: t,
                element: h,
                event: C,
                eventConfig: R,
                nativeEvent: d,
                eventStateKey: m,
              },
              S
            );
            UU(x, S) || t.dispatch(Ya(m, x));
          };
          A.actionTypeId === Ce.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(C.config) ? C.config : [C.config]).forEach(w)
            : w();
        });
      },
      f = (0, s_.default)(c, BU),
      p = ({ target: d = document, types: g, throttle: h }) => {
        g.split(" ")
          .filter(Boolean)
          .forEach((E) => {
            let m = h ? f : c;
            d.addEventListener(E, m), t.dispatch(ii(d, [E, m]));
          });
      };
    Array.isArray(n) ? n.forEach(p) : typeof n == "string" && p(e);
  }
  function cX(e) {
    if (!HU) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = ns(o);
      t[a] ||
        ((i === He.MOUSE_CLICK || i === He.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function d_({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      s = a[r],
      c = o[t];
    if (c && c.useFirstGroupAsInitialState) {
      let f = (0, ut.default)(c, "actionItemGroups[0].actionItems", []),
        p = (0, ut.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!mi(p, i.mediaQueryKey)) return;
      f.forEach((d) => {
        let { config: g, actionTypeId: h } = d,
          E =
            g?.target?.useEventTarget === !0 && g?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : g,
          m = yi({ config: E, event: s, elementApi: xe }),
          C = _i(h);
        m.forEach((S) => {
          let A = C ? ys(h)(S, d) : null;
          ms({
            destination: Es({ element: S, actionItem: d, elementApi: xe }, A),
            immediate: !0,
            store: e,
            element: S,
            eventId: r,
            actionItem: d,
            actionListId: t,
            pluginInstance: A,
          });
        });
      });
    }
  }
  function p_({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, sr.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        _s(r, e), i && e.dispatch(or({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function ar({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? kr(r, Ei) : null;
    (0, sr.default)(o, (c) => {
      let f = (0, ut.default)(c, "actionItem.config.target.boundaryMode"),
        p = n ? c.eventStateKey === n : !0;
      if (c.actionListId === i && c.eventId === t && p) {
        if (s && f && !is(s, c.element)) return;
        _s(c, e),
          c.verbose && e.dispatch(or({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function $r({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: c, ixSession: f } = e.getState(),
      { events: p } = c,
      d = p[t] || {},
      { mediaQueries: g = c.mediaQueryKeys } = d,
      h = (0, ut.default)(c, `actionLists.${i}`, {}),
      { actionItemGroups: E, useFirstGroupAsInitialState: m } = h;
    if (!E || !E.length) return !1;
    o >= E.length && (0, ut.default)(d, "config.loop") && (o = 0),
      o === 0 && m && o++;
    let S =
        (o === 0 || (o === 1 && m)) && vs(d.action?.actionTypeId)
          ? d.config.delay
          : void 0,
      A = (0, ut.default)(E, [o, "actionItems"], []);
    if (!A.length || !mi(g, f.mediaQueryKey)) return !1;
    let O = f.hasBoundaryNodes && r ? kr(r, Ei) : null,
      w = CU(A),
      R = !1;
    return (
      A.forEach((x, G) => {
        let { config: X, actionTypeId: H } = x,
          k = _i(H),
          { target: Q } = X;
        if (!Q) return;
        let P = Q.boundaryMode ? O : null;
        yi({
          config: X,
          event: d,
          eventTarget: r,
          elementRoot: P,
          elementApi: xe,
        }).forEach((N, U) => {
          let F = k ? ys(H)(N, x) : null,
            Z = k ? XU(H)(N, x) : null;
          R = !0;
          let Y = w === G && U === 0,
            L = NU({ element: N, actionItem: x }),
            V = Es({ element: N, actionItem: x, elementApi: xe }, F);
          ms({
            store: e,
            element: N,
            actionItem: x,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: Y,
            computedStyle: L,
            destination: V,
            immediate: a,
            verbose: s,
            pluginInstance: F,
            pluginDuration: Z,
            instanceDelay: S,
          });
        });
      }),
      R
    );
  }
  function ms(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: c,
        restingValue: f,
        eventId: p,
      } = n,
      d = !c,
      g = wU(),
      { ixElements: h, ixSession: E, ixData: m } = t.getState(),
      C = xU(h, i),
      { refState: S } = h[C] || {},
      A = os(i),
      O = E.reducedMotion && Xo[o.actionTypeId],
      w;
    if (O && c)
      switch (m.events[p]?.eventTypeId) {
        case He.MOUSE_MOVE:
        case He.MOUSE_MOVE_IN_VIEWPORT:
          w = f;
          break;
        default:
          w = 0.5;
          break;
      }
    let R = LU(i, S, r, o, xe, s);
    if (
      (t.dispatch(
        Qa({
          instanceId: g,
          elementId: C,
          origin: R,
          refType: A,
          skipMotion: O,
          skipToValue: w,
          ...n,
        })
      ),
      g_(document.body, "ix2-animation-started", g),
      a)
    ) {
      lX(t, g);
      return;
    }
    Rt({ store: t, select: ({ ixInstances: x }) => x[g], onChange: v_ }),
      d && t.dispatch(ai(g, E.tick));
  }
  function _s(e, t) {
    g_(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === u_ && DU(o, n, xe), t.dispatch(Za(e.id));
  }
  function g_(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function lX(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(ai(t, 0)), e.dispatch(oi(performance.now(), r));
    let { ixInstances: n } = e.getState();
    v_(n[t], e);
  }
  function v_(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: c,
        current: f,
        groupIndex: p,
        eventId: d,
        eventTarget: g,
        eventStateKey: h,
        actionListId: E,
        isCarrier: m,
        styleProp: C,
        verbose: S,
        pluginInstance: A,
      } = e,
      { ixData: O, ixSession: w } = t.getState(),
      { events: R } = O,
      x = R[d] || {},
      { mediaQueries: G = O.mediaQueryKeys } = x;
    if (mi(G, w.mediaQueryKey) && (n || r || i)) {
      if (f || (c === AU && i)) {
        t.dispatch(Ja(o, s, f, a));
        let { ixElements: X } = t.getState(),
          { ref: H, refType: k, refState: Q } = X[o] || {},
          P = Q && Q[s];
        (k === u_ || _i(s)) && RU(H, Q, P, d, a, C, xe, c, A);
      }
      if (i) {
        if (m) {
          let X = $r({
            store: t,
            eventId: d,
            eventTarget: g,
            eventStateKey: h,
            actionListId: E,
            groupIndex: p + 1,
            verbose: S,
          });
          S && !X && t.dispatch(or({ actionListId: E, isPlaying: !1 }));
        }
        _s(e, t);
      }
    }
  }
  var r_,
    ut,
    n_,
    i_,
    o_,
    a_,
    sr,
    s_,
    hi,
    SU,
    vs,
    hs,
    Ei,
    u_,
    AU,
    e_,
    yi,
    xU,
    Es,
    Rt,
    wU,
    RU,
    c_,
    CU,
    NU,
    LU,
    PU,
    qU,
    MU,
    mi,
    DU,
    FU,
    GU,
    VU,
    UU,
    _i,
    ys,
    XU,
    t_,
    HU,
    BU,
    nX,
    oX,
    aX,
    sX,
    gs = ce(() => {
      "use strict";
      (r_ = ie(ha())),
        (ut = ie(Un())),
        (n_ = ie(RE())),
        (i_ = ie(ty())),
        (o_ = ie(ny())),
        (a_ = ie(oy())),
        (sr = ie(fy())),
        (s_ = ie(yy()));
      Ne();
      hi = ie(wt());
      si();
      Oy();
      Jm();
      (SU = Object.keys(yn)),
        (vs = (e) => SU.includes(e)),
        ({
          COLON_DELIMITER: hs,
          BOUNDARY_SELECTOR: Ei,
          HTML_ELEMENT: u_,
          RENDER_GENERAL: AU,
          W_MOD_IX: e_,
        } = Ie),
        ({
          getAffectedElements: yi,
          getElementId: xU,
          getDestinationValues: Es,
          observeStore: Rt,
          getInstanceId: wU,
          renderHTMLElement: RU,
          clearAllStyles: c_,
          getMaxDurationItemIndex: CU,
          getComputedStyle: NU,
          getInstanceOrigin: LU,
          reduceListToGroup: PU,
          shouldNamespaceEventParameter: qU,
          getNamespacedParameterId: MU,
          shouldAllowMediaQuery: mi,
          cleanupHTMLElement: DU,
          clearObjectCache: FU,
          stringifyTarget: GU,
          mediaQueriesEqual: VU,
          shallowEqual: UU,
        } = hi.IX2VanillaUtils),
        ({
          isPluginType: _i,
          createPluginInstance: ys,
          getPluginDuration: XU,
        } = hi.IX2VanillaPlugins),
        (t_ = navigator.userAgent),
        (HU = t_.match(/iPad/i) || t_.match(/iPhone/)),
        (BU = 12);
      nX = ["resize", "orientationchange"];
      (oX = (e, t) => (0, i_.default)((0, a_.default)(e, t), o_.default)),
        (aX = (e, t) => {
          (0, sr.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + hs + o;
              t(i, n, a);
            });
          });
        }),
        (sX = (e) => {
          let t = { target: e.target, targets: e.targets };
          return yi({ config: t, elementApi: xe });
        });
    });
  var y_ = u((ct) => {
    "use strict";
    var fX = on().default,
      dX = eu().default;
    Object.defineProperty(ct, "__esModule", { value: !0 });
    ct.actions = void 0;
    ct.destroy = E_;
    ct.init = EX;
    ct.setEnv = hX;
    ct.store = void 0;
    Vl();
    var pX = Go(),
      gX = dX((lE(), ze(cE))),
      Ts = (gs(), ze(h_)),
      vX = fX((si(), ze(_y)));
    ct.actions = vX;
    var Is = (ct.store = (0, pX.createStore)(gX.default));
    function hX(e) {
      e() && (0, Ts.observeRequests)(Is);
    }
    function EX(e) {
      E_(), (0, Ts.startEngine)({ store: Is, rawData: e, allowEvents: !0 });
    }
    function E_() {
      (0, Ts.stopEngine)(Is);
    }
  });
  var I_ = u((qj, T_) => {
    "use strict";
    var m_ = $e(),
      __ = y_();
    __.setEnv(m_.env);
    m_.define(
      "ix2",
      (T_.exports = function () {
        return __;
      })
    );
  });
  var O_ = u((Mj, b_) => {
    "use strict";
    var ur = $e();
    ur.define(
      "links",
      (b_.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = ur.env(),
          a = window.location,
          s = document.createElement("a"),
          c = "w--current",
          f = /index\.(html|php)$/,
          p = /\/$/,
          d,
          g;
        r.ready = r.design = r.preview = h;
        function h() {
          (i = o && ur.env("design")),
            (g = ur.env("slug") || a.pathname || ""),
            ur.scroll.off(m),
            (d = []);
          for (var S = document.links, A = 0; A < S.length; ++A) E(S[A]);
          d.length && (ur.scroll.on(m), m());
        }
        function E(S) {
          if (!S.getAttribute("hreflang")) {
            var A =
              (i && S.getAttribute("href-disabled")) || S.getAttribute("href");
            if (((s.href = A), !(A.indexOf(":") >= 0))) {
              var O = e(S);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var w = e(s.hash);
                w.length && d.push({ link: O, sec: w, active: !1 });
                return;
              }
              if (!(A === "#" || A === "")) {
                var R =
                  s.href === a.href || A === g || (f.test(A) && p.test(g));
                C(O, c, R);
              }
            }
          }
        }
        function m() {
          var S = n.scrollTop(),
            A = n.height();
          t.each(d, function (O) {
            if (!O.link.attr("hreflang")) {
              var w = O.link,
                R = O.sec,
                x = R.offset().top,
                G = R.outerHeight(),
                X = A * 0.5,
                H = R.is(":visible") && x + G - X >= S && x + X <= S + A;
              O.active !== H && ((O.active = H), C(w, c, H));
            }
          });
        }
        function C(S, A, O) {
          var w = S.hasClass(A);
          (O && w) || (!O && !w) || (O ? S.addClass(A) : S.removeClass(A));
        }
        return r;
      })
    );
  });
  var A_ = u((Dj, S_) => {
    "use strict";
    var bi = $e();
    bi.define(
      "scroll",
      (S_.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = E() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (P) {
              window.setTimeout(P, 15);
            },
          c = bi.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            c +
            " > .header, " +
            c +
            " > .w-nav:not([data-no-scroll])",
          p = 'a[href="#"]',
          d = 'a[href*="#"]:not(.w-tab-link):not(' + p + ")",
          g = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          h = document.createElement("style");
        h.appendChild(document.createTextNode(g));
        function E() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var m = /^#[a-zA-Z0-9][\w:.-]*$/;
        function C(P) {
          return m.test(P.hash) && P.host + P.pathname === r.host + r.pathname;
        }
        let S =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function A() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            S.matches
          );
        }
        function O(P, T) {
          var N;
          switch (T) {
            case "add":
              (N = P.attr("tabindex")),
                N
                  ? P.attr("data-wf-tabindex-swap", N)
                  : P.attr("tabindex", "-1");
              break;
            case "remove":
              (N = P.attr("data-wf-tabindex-swap")),
                N
                  ? (P.attr("tabindex", N),
                    P.removeAttr("data-wf-tabindex-swap"))
                  : P.removeAttr("tabindex");
              break;
          }
          P.toggleClass("wf-force-outline-none", T === "add");
        }
        function w(P) {
          var T = P.currentTarget;
          if (
            !(
              bi.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(T.className))
            )
          ) {
            var N = C(T) ? T.hash : "";
            if (N !== "") {
              var U = e(N);
              U.length &&
                (P && (P.preventDefault(), P.stopPropagation()),
                R(N, P),
                window.setTimeout(
                  function () {
                    x(U, function () {
                      O(U, "add"),
                        U.get(0).focus({ preventScroll: !0 }),
                        O(U, "remove");
                    });
                  },
                  P ? 0 : 300
                ));
            }
          }
        }
        function R(P) {
          if (
            r.hash !== P &&
            n &&
            n.pushState &&
            !(bi.env.chrome && r.protocol === "file:")
          ) {
            var T = n.state && n.state.hash;
            T !== P && n.pushState({ hash: P }, "", P);
          }
        }
        function x(P, T) {
          var N = i.scrollTop(),
            U = G(P);
          if (N !== U) {
            var F = X(P, N, U),
              Z = Date.now(),
              Y = function () {
                var L = Date.now() - Z;
                window.scroll(0, H(N, U, L, F)),
                  L <= F ? s(Y) : typeof T == "function" && T();
              };
            s(Y);
          }
        }
        function G(P) {
          var T = e(f),
            N = T.css("position") === "fixed" ? T.outerHeight() : 0,
            U = P.offset().top - N;
          if (P.data("scroll") === "mid") {
            var F = i.height() - N,
              Z = P.outerHeight();
            Z < F && (U -= Math.round((F - Z) / 2));
          }
          return U;
        }
        function X(P, T, N) {
          if (A()) return 0;
          var U = 1;
          return (
            a.add(P).each(function (F, Z) {
              var Y = parseFloat(Z.getAttribute("data-scroll-time"));
              !isNaN(Y) && Y >= 0 && (U = Y);
            }),
            (472.143 * Math.log(Math.abs(T - N) + 125) - 2e3) * U
          );
        }
        function H(P, T, N, U) {
          return N > U ? T : P + (T - P) * k(N / U);
        }
        function k(P) {
          return P < 0.5
            ? 4 * P * P * P
            : (P - 1) * (2 * P - 2) * (2 * P - 2) + 1;
        }
        function Q() {
          var { WF_CLICK_EMPTY: P, WF_CLICK_SCROLL: T } = t;
          o.on(T, d, w),
            o.on(P, p, function (N) {
              N.preventDefault();
            }),
            document.head.insertBefore(h, document.head.firstChild);
        }
        return { ready: Q };
      })
    );
  });
  var w_ = u((Fj, x_) => {
    "use strict";
    var yX = $e();
    yX.define(
      "touch",
      (x_.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            c = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            p;
          o.addEventListener("touchstart", d, !1),
            o.addEventListener("touchmove", g, !1),
            o.addEventListener("touchend", h, !1),
            o.addEventListener("touchcancel", E, !1),
            o.addEventListener("mousedown", d, !1),
            o.addEventListener("mousemove", g, !1),
            o.addEventListener("mouseup", h, !1),
            o.addEventListener("mouseout", E, !1);
          function d(C) {
            var S = C.touches;
            (S && S.length > 1) ||
              ((a = !0),
              S ? ((s = !0), (f = S[0].clientX)) : (f = C.clientX),
              (p = f));
          }
          function g(C) {
            if (a) {
              if (s && C.type === "mousemove") {
                C.preventDefault(), C.stopPropagation();
                return;
              }
              var S = C.touches,
                A = S ? S[0].clientX : C.clientX,
                O = A - p;
              (p = A),
                Math.abs(O) > c &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", C, { direction: O > 0 ? "right" : "left" }), E());
            }
          }
          function h(C) {
            if (a && ((a = !1), s && C.type === "mouseup")) {
              C.preventDefault(), C.stopPropagation(), (s = !1);
              return;
            }
          }
          function E() {
            a = !1;
          }
          function m() {
            o.removeEventListener("touchstart", d, !1),
              o.removeEventListener("touchmove", g, !1),
              o.removeEventListener("touchend", h, !1),
              o.removeEventListener("touchcancel", E, !1),
              o.removeEventListener("mousedown", d, !1),
              o.removeEventListener("mousemove", g, !1),
              o.removeEventListener("mouseup", h, !1),
              o.removeEventListener("mouseout", E, !1),
              (o = null);
          }
          this.destroy = m;
        }
        function i(o, a, s) {
          var c = e.Event(o, { originalEvent: a });
          e(a.target).trigger(c, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var R_ = u((bs) => {
    "use strict";
    Object.defineProperty(bs, "__esModule", { value: !0 });
    bs.default = mX;
    function mX(e, t, r, n, i, o, a, s, c, f, p, d, g) {
      return function (h) {
        e(h);
        var E = h.form,
          m = {
            name: E.attr("data-name") || E.attr("name") || "Untitled Form",
            pageId: E.attr("data-wf-page-id") || "",
            elementId: E.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              E.html()
            ),
            trackingCookies: n(),
          };
        let C = E.attr("data-wf-flow");
        C && (m.wfFlow = C), i(h);
        var S = o(E, m.fields);
        if (S) return a(S);
        if (((m.fileUploads = s(E)), c(h), !f)) {
          p(h);
          return;
        }
        d.ajax({
          url: g,
          type: "POST",
          data: m,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (A) {
            A && A.code === 200 && (h.success = !0), p(h);
          })
          .fail(function () {
            p(h);
          });
      };
    }
  });
  var N_ = u((Vj, C_) => {
    "use strict";
    var Oi = $e();
    Oi.define(
      "forms",
      (C_.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          c,
          f = /e(-)?mail/i,
          p = /^\S+@\S+$/,
          d = window.alert,
          g = Oi.env(),
          h,
          E,
          m,
          C = /list-manage[1-9]?.com/i,
          S = t.debounce(function () {
            d(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              A(), !g && !h && w();
            };
        function A() {
          (c = e("html").attr("data-wf-site")),
            (E = "https://webflow.com/api/v1/form/" + c),
            a &&
              E.indexOf("https://webflow.com") >= 0 &&
              (E = E.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (m = `${E}/signFile`),
            (i = e(s + " form")),
            i.length && i.each(O);
        }
        function O(L, V) {
          var W = e(V),
            M = e.data(V, s);
          M || (M = e.data(V, s, { form: W })), R(M);
          var q = W.closest("div.w-form");
          (M.done = q.find("> .w-form-done")),
            (M.fail = q.find("> .w-form-fail")),
            (M.fileUploads = q.find(".w-file-upload")),
            M.fileUploads.each(function (re) {
              F(re, M);
            });
          var K =
            M.form.attr("aria-label") || M.form.attr("data-name") || "Form";
          M.done.attr("aria-label") || M.form.attr("aria-label", K),
            M.done.attr("tabindex", "-1"),
            M.done.attr("role", "region"),
            M.done.attr("aria-label") ||
              M.done.attr("aria-label", K + " success"),
            M.fail.attr("tabindex", "-1"),
            M.fail.attr("role", "region"),
            M.fail.attr("aria-label") ||
              M.fail.attr("aria-label", K + " failure");
          var te = (M.action = W.attr("action"));
          if (
            ((M.handler = null),
            (M.redirect = W.attr("data-redirect")),
            C.test(te))
          ) {
            M.handler = T;
            return;
          }
          if (!te) {
            if (c) {
              M.handler = (() => {
                let re = R_().default;
                return re(R, o, Oi, k, U, G, d, X, x, c, N, e, E);
              })();
              return;
            }
            S();
          }
        }
        function w() {
          (h = !0),
            n.on("submit", s + " form", function (re) {
              var z = e.data(this, s);
              z.handler && ((z.evt = re), z.handler(z));
            });
          let L = ".w-checkbox-input",
            V = ".w-radio-input",
            W = "w--redirected-checked",
            M = "w--redirected-focus",
            q = "w--redirected-focus-visible",
            K = ":focus-visible, [data-wf-focus-visible]",
            te = [
              ["checkbox", L],
              ["radio", V],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + L + ")",
            (re) => {
              e(re.target).siblings(L).toggleClass(W);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', (re) => {
              e(`input[name="${re.target.name}"]:not(${L})`).map((le, Ct) =>
                e(Ct).siblings(V).removeClass(W)
              );
              let z = e(re.target);
              z.hasClass("w-radio-input") || z.siblings(V).addClass(W);
            }),
            te.forEach(([re, z]) => {
              n.on(
                "focus",
                s + ` form input[type="${re}"]:not(` + z + ")",
                (le) => {
                  e(le.target).siblings(z).addClass(M),
                    e(le.target).filter(K).siblings(z).addClass(q);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${re}"]:not(` + z + ")",
                  (le) => {
                    e(le.target).siblings(z).removeClass(`${M} ${q}`);
                  }
                );
            });
        }
        function R(L) {
          var V = (L.btn = L.form.find(':input[type="submit"]'));
          (L.wait = L.btn.attr("data-wait") || null),
            (L.success = !1),
            V.prop("disabled", !1),
            L.label && V.val(L.label);
        }
        function x(L) {
          var V = L.btn,
            W = L.wait;
          V.prop("disabled", !0), W && ((L.label = V.val()), V.val(W));
        }
        function G(L, V) {
          var W = null;
          return (
            (V = V || {}),
            L.find(':input:not([type="submit"]):not([type="file"])').each(
              function (M, q) {
                var K = e(q),
                  te = K.attr("type"),
                  re =
                    K.attr("data-name") || K.attr("name") || "Field " + (M + 1),
                  z = K.val();
                if (te === "checkbox") z = K.is(":checked");
                else if (te === "radio") {
                  if (V[re] === null || typeof V[re] == "string") return;
                  z =
                    L.find(
                      'input[name="' + K.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof z == "string" && (z = e.trim(z)),
                  (V[re] = z),
                  (W = W || Q(K, te, re, z));
              }
            ),
            W
          );
        }
        function X(L) {
          var V = {};
          return (
            L.find(':input[type="file"]').each(function (W, M) {
              var q = e(M),
                K = q.attr("data-name") || q.attr("name") || "File " + (W + 1),
                te = q.attr("data-value");
              typeof te == "string" && (te = e.trim(te)), (V[K] = te);
            }),
            V
          );
        }
        let H = { _mkto_trk: "marketo" };
        function k() {
          return document.cookie.split("; ").reduce(function (V, W) {
            let M = W.split("="),
              q = M[0];
            if (q in H) {
              let K = H[q],
                te = M.slice(1).join("=");
              V[K] = te;
            }
            return V;
          }, {});
        }
        function Q(L, V, W, M) {
          var q = null;
          return (
            V === "password"
              ? (q = "Passwords cannot be submitted.")
              : L.attr("required")
              ? M
                ? f.test(L.attr("type")) &&
                  (p.test(M) ||
                    (q = "Please enter a valid email address for: " + W))
                : (q = "Please fill out the required field: " + W)
              : W === "g-recaptcha-response" &&
                !M &&
                (q = "Please confirm you\u2019re not a robot."),
            q
          );
        }
        function P(L) {
          U(L), N(L);
        }
        function T(L) {
          R(L);
          var V = L.form,
            W = {};
          if (/^https/.test(o.href) && !/^https/.test(L.action)) {
            V.attr("method", "post");
            return;
          }
          U(L);
          var M = G(V, W);
          if (M) return d(M);
          x(L);
          var q;
          t.each(W, function (z, le) {
            f.test(le) && (W.EMAIL = z),
              /^((full[ _-]?)?name)$/i.test(le) && (q = z),
              /^(first[ _-]?name)$/i.test(le) && (W.FNAME = z),
              /^(last[ _-]?name)$/i.test(le) && (W.LNAME = z);
          }),
            q &&
              !W.FNAME &&
              ((q = q.split(" ")),
              (W.FNAME = q[0]),
              (W.LNAME = W.LNAME || q[1]));
          var K = L.action.replace("/post?", "/post-json?") + "&c=?",
            te = K.indexOf("u=") + 2;
          te = K.substring(te, K.indexOf("&", te));
          var re = K.indexOf("id=") + 3;
          (re = K.substring(re, K.indexOf("&", re))),
            (W["b_" + te + "_" + re] = ""),
            e
              .ajax({ url: K, data: W, dataType: "jsonp" })
              .done(function (z) {
                (L.success = z.result === "success" || /already/.test(z.msg)),
                  L.success || console.info("MailChimp error: " + z.msg),
                  N(L);
              })
              .fail(function () {
                N(L);
              });
        }
        function N(L) {
          var V = L.form,
            W = L.redirect,
            M = L.success;
          if (M && W) {
            Oi.location(W);
            return;
          }
          L.done.toggle(M),
            L.fail.toggle(!M),
            M ? L.done.focus() : L.fail.focus(),
            V.toggle(!M),
            R(L);
        }
        function U(L) {
          L.evt && L.evt.preventDefault(), (L.evt = null);
        }
        function F(L, V) {
          if (!V.fileUploads || !V.fileUploads[L]) return;
          var W,
            M = e(V.fileUploads[L]),
            q = M.find("> .w-file-upload-default"),
            K = M.find("> .w-file-upload-uploading"),
            te = M.find("> .w-file-upload-success"),
            re = M.find("> .w-file-upload-error"),
            z = q.find(".w-file-upload-input"),
            le = q.find(".w-file-upload-label"),
            Ct = le.children(),
            ge = re.find(".w-file-upload-error-msg"),
            lt = te.find(".w-file-upload-file"),
            cr = te.find(".w-file-remove-link"),
            lr = lt.find(".w-file-upload-file-name"),
            fr = ge.attr("data-w-size-error"),
            ke = ge.attr("data-w-type-error"),
            Si = ge.attr("data-w-generic-error");
          if (
            (g ||
              le.on("click keydown", function (y) {
                (y.type === "keydown" && y.which !== 13 && y.which !== 32) ||
                  (y.preventDefault(), z.click());
              }),
            le.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            cr.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            g)
          )
            z.on("click", function (y) {
              y.preventDefault();
            }),
              le.on("click", function (y) {
                y.preventDefault();
              }),
              Ct.on("click", function (y) {
                y.preventDefault();
              });
          else {
            cr.on("click keydown", function (y) {
              if (y.type === "keydown") {
                if (y.which !== 13 && y.which !== 32) return;
                y.preventDefault();
              }
              z.removeAttr("data-value"),
                z.val(""),
                lr.html(""),
                q.toggle(!0),
                te.toggle(!1),
                le.focus();
            }),
              z.on("change", function (y) {
                (W = y.target && y.target.files && y.target.files[0]),
                  W &&
                    (q.toggle(!1),
                    re.toggle(!1),
                    K.toggle(!0),
                    K.focus(),
                    lr.text(W.name),
                    I() || x(V),
                    (V.fileUploads[L].uploading = !0),
                    Z(W, v));
              });
            var Yr = le.outerHeight();
            z.height(Yr), z.width(1);
          }
          function l(y) {
            var b = y.responseJSON && y.responseJSON.msg,
              B = Si;
            typeof b == "string" && b.indexOf("InvalidFileTypeError") === 0
              ? (B = ke)
              : typeof b == "string" &&
                b.indexOf("MaxFileSizeError") === 0 &&
                (B = fr),
              ge.text(B),
              z.removeAttr("data-value"),
              z.val(""),
              K.toggle(!1),
              q.toggle(!0),
              re.toggle(!0),
              re.focus(),
              (V.fileUploads[L].uploading = !1),
              I() || R(V);
          }
          function v(y, b) {
            if (y) return l(y);
            var B = b.fileName,
              $ = b.postData,
              se = b.fileId,
              D = b.s3Url;
            z.attr("data-value", se), Y(D, $, W, B, _);
          }
          function _(y) {
            if (y) return l(y);
            K.toggle(!1),
              te.css("display", "inline-block"),
              te.focus(),
              (V.fileUploads[L].uploading = !1),
              I() || R(V);
          }
          function I() {
            var y = (V.fileUploads && V.fileUploads.toArray()) || [];
            return y.some(function (b) {
              return b.uploading;
            });
          }
        }
        function Z(L, V) {
          var W = new URLSearchParams({ name: L.name, size: L.size });
          e.ajax({ type: "GET", url: `${m}?${W}`, crossDomain: !0 })
            .done(function (M) {
              V(null, M);
            })
            .fail(function (M) {
              V(M);
            });
        }
        function Y(L, V, W, M, q) {
          var K = new FormData();
          for (var te in V) K.append(te, V[te]);
          K.append("file", W, M),
            e
              .ajax({
                type: "POST",
                url: L,
                data: K,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                q(null);
              })
              .fail(function (re) {
                q(re);
              });
        }
        return r;
      })
    );
  });
  Fs();
  Vs();
  Xs();
  Ws();
  Qs();
  I_();
  O_();
  A_();
  w_();
  N_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:
    
    timm/lib/timm.js:
      (*!
       * Timm
       *
       * Immutability helpers with fast reads and acceptable writes.
       *
       * @copyright Guillermo Grau Panea 2016
       * @license MIT
       *)
    */
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".button.primary",
        originalId: "acda0d49-3284-d0bd-c2c0-78ca1ad25bb5",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".button.primary",
          originalId: "acda0d49-3284-d0bd-c2c0-78ca1ad25bb5",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705309557569,
    },
    "e-2": {
      id: "e-2",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".button.primary",
        originalId: "acda0d49-3284-d0bd-c2c0-78ca1ad25bb5",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".button.primary",
          originalId: "acda0d49-3284-d0bd-c2c0-78ca1ad25bb5",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705309557571,
    },
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-4",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        selector: ".home-trending-article-link",
        originalId:
          "65a118d82cee7eeed8c90bd8|ba0763c7-13f3-77b9-e6a9-3185648ed1ac",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".home-trending-article-link",
          originalId:
            "65a118d82cee7eeed8c90bd8|ba0763c7-13f3-77b9-e6a9-3185648ed1ac",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705312926293,
    },
    "e-4": {
      id: "e-4",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        selector: ".home-trending-article-link",
        originalId:
          "65a118d82cee7eeed8c90bd8|ba0763c7-13f3-77b9-e6a9-3185648ed1ac",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".home-trending-article-link",
          originalId:
            "65a118d82cee7eeed8c90bd8|ba0763c7-13f3-77b9-e6a9-3185648ed1ac",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705312926293,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-6",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        selector: ".home-category-item",
        originalId:
          "65a118d82cee7eeed8c90bd8|c8344cd2-0909-db70-9389-c1ee0634b9c6",
        appliesTo: "CLASS",
      },
      targets: [
        {
          id: "65a118d82cee7eeed8c90bd8|c8344cd2-0909-db70-9389-c1ee0634b9c6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705317834871,
    },
    "e-6": {
      id: "e-6",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-5",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        selector: ".home-category-item",
        originalId:
          "65a118d82cee7eeed8c90bd8|c8344cd2-0909-db70-9389-c1ee0634b9c6",
        appliesTo: "CLASS",
      },
      targets: [
        {
          id: "65a118d82cee7eeed8c90bd8|c8344cd2-0909-db70-9389-c1ee0634b9c6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705317834871,
    },
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-8",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".article-item",
        originalId:
          "65a118d82cee7eeed8c90bd8|71e71426-4b4a-7516-771e-2e0d1518efbe",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".article-item",
          originalId:
            "65a118d82cee7eeed8c90bd8|71e71426-4b4a-7516-771e-2e0d1518efbe",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705325604069,
    },
    "e-8": {
      id: "e-8",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-7",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".article-item",
        originalId:
          "65a118d82cee7eeed8c90bd8|71e71426-4b4a-7516-771e-2e0d1518efbe",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".article-item",
          originalId:
            "65a118d82cee7eeed8c90bd8|71e71426-4b4a-7516-771e-2e0d1518efbe",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705325604070,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-10",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "90d6feac-066b-d6d1-a212-d9832f332499",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "90d6feac-066b-d6d1-a212-d9832f332499",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: -100,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705399573143,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-12",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "90d6feac-066b-d6d1-a212-d9832f33249b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "90d6feac-066b-d6d1-a212-d9832f33249b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705400073215,
    },
    "e-12": {
      id: "e-12",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-11",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "90d6feac-066b-d6d1-a212-d9832f33249b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "90d6feac-066b-d6d1-a212-d9832f33249b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705400073215,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        selector: ".nav-trigger",
        originalId: "5f982de6-354e-887e-0847-31d84c7e05cc",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".nav-trigger",
          originalId: "5f982de6-354e-887e-0847-31d84c7e05cc",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705412334340,
    },
    "e-14": {
      id: "e-14",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-13",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        selector: ".nav-trigger",
        originalId: "5f982de6-354e-887e-0847-31d84c7e05cc",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".nav-trigger",
          originalId: "5f982de6-354e-887e-0847-31d84c7e05cc",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705412334340,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-19", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium"],
      target: {
        selector: ".footer",
        originalId: "64200cc2-55a4-0984-8fcf-4eb65f965418",
        appliesTo: "CLASS",
      },
      targets: [
        {
          id: "64200cc2-55a4-0984-8fcf-4eb65f965418",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-19-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1705414753338,
    },
    "e-16": {
      id: "e-16",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-17",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".scroll-callout",
        originalId: "0db83761-a9c8-24ef-542f-a51b796dcb56",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".scroll-callout",
          originalId: "0db83761-a9c8-24ef-542f-a51b796dcb56",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705414958053,
    },
    "e-17": {
      id: "e-17",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-16",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".scroll-callout",
        originalId: "0db83761-a9c8-24ef-542f-a51b796dcb56",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".scroll-callout",
          originalId: "0db83761-a9c8-24ef-542f-a51b796dcb56",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705414958054,
    },
    "e-18": {
      id: "e-18",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-19",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a118d82cee7eeed8c90bd8|4b8f2ac2-7e7c-249b-510e-1137aa33484b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a118d82cee7eeed8c90bd8|4b8f2ac2-7e7c-249b-510e-1137aa33484b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: -1000,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705415534991,
    },
    "e-20": {
      id: "e-20",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-21",
        },
      },
      mediaQueries: ["small", "tiny"],
      target: {
        selector: ".nav-trigger",
        originalId: "5f982de6-354e-887e-0847-31d84c7e05cc",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".nav-trigger",
          originalId: "5f982de6-354e-887e-0847-31d84c7e05cc",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705572522248,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-20",
        },
      },
      mediaQueries: ["small", "tiny"],
      target: {
        selector: ".nav-trigger",
        originalId: "5f982de6-354e-887e-0847-31d84c7e05cc",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".nav-trigger",
          originalId: "5f982de6-354e-887e-0847-31d84c7e05cc",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705572522249,
    },
    "e-22": {
      id: "e-22",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-23",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        selector: ".trending-article-link",
        originalId:
          "65a8face90bf40ac000b3076|2573afbc-af1b-3df2-2e11-a30605554147",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".trending-article-link",
          originalId:
            "65a8face90bf40ac000b3076|2573afbc-af1b-3df2-2e11-a30605554147",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705575185039,
    },
    "e-23": {
      id: "e-23",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-22",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        selector: ".trending-article-link",
        originalId:
          "65a8face90bf40ac000b3076|2573afbc-af1b-3df2-2e11-a30605554147",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".trending-article-link",
          originalId:
            "65a8face90bf40ac000b3076|2573afbc-af1b-3df2-2e11-a30605554147",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705575185040,
    },
    "e-26": {
      id: "e-26",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-27",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a8face90bf40ac000b3076|46920b40-10b9-c8a1-e885-7e06e495bca2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a8face90bf40ac000b3076|46920b40-10b9-c8a1-e885-7e06e495bca2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: -1000,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705591618178,
    },
    "e-30": {
      id: "e-30",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-33", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium"],
      target: {
        selector: ".story-section",
        originalId: "52935f18-eb14-39e3-fafc-a254ebc5e4ef",
        appliesTo: "CLASS",
      },
      targets: [
        {
          id: "52935f18-eb14-39e3-fafc-a254ebc5e4ef",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-33-p",
          smoothing: 50,
          startsEntering: false,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1705594835558,
    },
    "e-31": {
      id: "e-31",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-32",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".author-item",
        originalId:
          "65a9464af2bc1007d34fe257|620a6c9c-8e9f-0900-5d11-6e52aec96987",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".author-item",
          originalId:
            "65a9464af2bc1007d34fe257|620a6c9c-8e9f-0900-5d11-6e52aec96987",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706524613001,
    },
    "e-32": {
      id: "e-32",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-31",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".author-item",
        originalId:
          "65a9464af2bc1007d34fe257|620a6c9c-8e9f-0900-5d11-6e52aec96987",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".author-item",
          originalId:
            "65a9464af2bc1007d34fe257|620a6c9c-8e9f-0900-5d11-6e52aec96987",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706524613002,
    },
    "e-33": {
      id: "e-33",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-34",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9464af2bc1007d34fe257|3749ad1b-bfdc-0d4a-cf17-9a51317477b4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9464af2bc1007d34fe257|3749ad1b-bfdc-0d4a-cf17-9a51317477b4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706525226315,
    },
    "e-35": {
      id: "e-35",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-39",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-36",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b78791ab0af1867317c02d|475c9cf8-d2a6-f6f9-5233-d08720b1fedb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b78791ab0af1867317c02d|475c9cf8-d2a6-f6f9-5233-d08720b1fedb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706527979335,
    },
    "e-37": {
      id: "e-37",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-40",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-38",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".value-item",
        originalId:
          "65b78791ab0af1867317c02d|adcbff97-eff4-4423-f00f-dbce77e6237f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".value-item",
          originalId:
            "65b78791ab0af1867317c02d|adcbff97-eff4-4423-f00f-dbce77e6237f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706529133812,
    },
    "e-38": {
      id: "e-38",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-37",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".value-item",
        originalId:
          "65b78791ab0af1867317c02d|adcbff97-eff4-4423-f00f-dbce77e6237f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".value-item",
          originalId:
            "65b78791ab0af1867317c02d|adcbff97-eff4-4423-f00f-dbce77e6237f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706529133813,
    },
    "e-39": {
      id: "e-39",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-42",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-40",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        selector: ".value-item",
        originalId:
          "65b78791ab0af1867317c02d|adcbff97-eff4-4423-f00f-dbce77e6237f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".value-item",
          originalId:
            "65b78791ab0af1867317c02d|adcbff97-eff4-4423-f00f-dbce77e6237f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706529403410,
    },
    "e-40": {
      id: "e-40",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-43",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-39",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        selector: ".value-item",
        originalId:
          "65b78791ab0af1867317c02d|adcbff97-eff4-4423-f00f-dbce77e6237f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".value-item",
          originalId:
            "65b78791ab0af1867317c02d|adcbff97-eff4-4423-f00f-dbce77e6237f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706529403411,
    },
    "e-41": {
      id: "e-41",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-44",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-42",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b78791ab0af1867317c02d|0ce91822-1780-0804-97e2-8c74597c9848",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b78791ab0af1867317c02d|0ce91822-1780-0804-97e2-8c74597c9848",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: -1000,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706538699432,
    },
    "e-43": {
      id: "e-43",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-44",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a12d3ae2ed6a66373ef0ee|ffe30abe-b48b-2aaa-caf8-0728e296a5d4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a12d3ae2ed6a66373ef0ee|ffe30abe-b48b-2aaa-caf8-0728e296a5d4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: -1000,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706542725829,
    },
    "e-45": {
      id: "e-45",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-46",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-46",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a12d3ae2ed6a66373ef0ee",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a12d3ae2ed6a66373ef0ee",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706543084368,
    },
    "e-47": {
      id: "e-47",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-55",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-48",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a15a85d9348d94ac15a7a8|70b8334f-07fe-5c06-c0a6-a8c8c2bd8205",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a15a85d9348d94ac15a7a8|70b8334f-07fe-5c06-c0a6-a8c8c2bd8205",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: -1000,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706867292076,
    },
    "e-49": {
      id: "e-49",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-48",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-50",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a15a85d9348d94ac15a7a8|99c9b6af-0d86-5adc-b61e-80276cc58b7f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a15a85d9348d94ac15a7a8|99c9b6af-0d86-5adc-b61e-80276cc58b7f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706867707554,
    },
    "e-50": {
      id: "e-50",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-49",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-49",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a15a85d9348d94ac15a7a8|99c9b6af-0d86-5adc-b61e-80276cc58b7f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a15a85d9348d94ac15a7a8|99c9b6af-0d86-5adc-b61e-80276cc58b7f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706867707555,
    },
    "e-51": {
      id: "e-51",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-50", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a15a85d9348d94ac15a7a8|99c9b6af-0d86-5adc-b61e-80276cc58b7f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a15a85d9348d94ac15a7a8|99c9b6af-0d86-5adc-b61e-80276cc58b7f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-50-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1706867871275,
    },
    "e-52": {
      id: "e-52",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-51",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-53",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "1f6c4d63-6398-0f6f-9f66-86c1cbdf7fc4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "1f6c4d63-6398-0f6f-9f66-86c1cbdf7fc4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706868237079,
    },
    "e-53": {
      id: "e-53",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-52",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-52",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "1f6c4d63-6398-0f6f-9f66-86c1cbdf7fc4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "1f6c4d63-6398-0f6f-9f66-86c1cbdf7fc4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706868237080,
    },
    "e-54": {
      id: "e-54",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-51",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-55",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".button-large-icon",
        originalId:
          "65a15a85d9348d94ac15a7a8|af5f8fb4-4261-65b5-efd6-62ab447763c9",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".button-large-icon",
          originalId:
            "65a15a85d9348d94ac15a7a8|af5f8fb4-4261-65b5-efd6-62ab447763c9",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706868437289,
    },
    "e-55": {
      id: "e-55",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-52",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-54",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".button-large-icon",
        originalId:
          "65a15a85d9348d94ac15a7a8|af5f8fb4-4261-65b5-efd6-62ab447763c9",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".button-large-icon",
          originalId:
            "65a15a85d9348d94ac15a7a8|af5f8fb4-4261-65b5-efd6-62ab447763c9",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706868437289,
    },
    "e-56": {
      id: "e-56",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-56",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-57",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a15a85d9348d94ac15a7a8",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a15a85d9348d94ac15a7a8",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706869091505,
    },
    "e-58": {
      id: "e-58",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-57",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-59",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64200cc2-55a4-0984-8fcf-4eb65f965418",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64200cc2-55a4-0984-8fcf-4eb65f965418",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706869594048,
    },
    "e-59": {
      id: "e-59",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-58",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-58",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64200cc2-55a4-0984-8fcf-4eb65f965418",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64200cc2-55a4-0984-8fcf-4eb65f965418",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706869594049,
    },
    "e-62": {
      id: "e-62",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-61",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-63",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a1559fc5f22e9280138873|5b9bfd20-32ae-f386-5b6e-b409edd67073",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a1559fc5f22e9280138873|5b9bfd20-32ae-f386-5b6e-b409edd67073",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: -1000,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706882852619,
    },
    "e-64": {
      id: "e-64",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-46",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-65",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a1559fc5f22e9280138873",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a1559fc5f22e9280138873",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706882953540,
    },
    "e-66": {
      id: "e-66",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-61",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-67",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a1559fc5f22e9280138873|cec908be-fb07-0f2c-e76c-5d8173e0dff3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a1559fc5f22e9280138873|cec908be-fb07-0f2c-e76c-5d8173e0dff3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: -1000,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706882997193,
    },
    "e-68": {
      id: "e-68",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-56",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-69",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a1559fc5f22e9280138873",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a1559fc5f22e9280138873",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706883033544,
    },
    "e-72": {
      id: "e-72",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-66",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-73",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".button.secondary",
        originalId: "a98350e3-18b9-1f1f-9e18-97d50124a137",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".button.secondary",
          originalId: "a98350e3-18b9-1f1f-9e18-97d50124a137",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1707127605068,
    },
    "e-73": {
      id: "e-73",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-67",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-72",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".button.secondary",
        originalId: "a98350e3-18b9-1f1f-9e18-97d50124a137",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".button.secondary",
          originalId: "a98350e3-18b9-1f1f-9e18-97d50124a137",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1707127605069,
    },
    "e-74": {
      id: "e-74",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-68", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65bcfff211088bee20f94632|e6ba20d8-2553-4817-4e85-31aed4f2420e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65bcfff211088bee20f94632|e6ba20d8-2553-4817-4e85-31aed4f2420e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-68-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1707128052637,
    },
    "e-75": {
      id: "e-75",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-69",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-76",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".category-item-content-wrap",
        originalId:
          "65bcfff211088bee20f94632|533dc817-a8fe-4189-75e7-9468d94e5057",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".category-item-content-wrap",
          originalId:
            "65bcfff211088bee20f94632|533dc817-a8fe-4189-75e7-9468d94e5057",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1707128239738,
    },
    "e-76": {
      id: "e-76",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-70",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-75",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".category-item-content-wrap",
        originalId:
          "65bcfff211088bee20f94632|533dc817-a8fe-4189-75e7-9468d94e5057",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".category-item-content-wrap",
          originalId:
            "65bcfff211088bee20f94632|533dc817-a8fe-4189-75e7-9468d94e5057",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1707128239739,
    },
    "e-77": {
      id: "e-77",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-71",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-78",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65bcfff211088bee20f94632|62425e11-5703-51d3-3267-fa907252bb59",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65bcfff211088bee20f94632|62425e11-5703-51d3-3267-fa907252bb59",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: -1000,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1707137883408,
    },
    "e-79": {
      id: "e-79",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-72", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65bcfff211088bee20f94632|62425e11-5703-51d3-3267-fa907252bb59",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65bcfff211088bee20f94632|62425e11-5703-51d3-3267-fa907252bb59",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-72-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1707138025010,
    },
    "e-80": {
      id: "e-80",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-81",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65c0dca1595807266e807370|05074101-e876-75c0-4566-09e703ad83ac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65c0dca1595807266e807370|05074101-e876-75c0-4566-09e703ad83ac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: -100,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1707139391659,
    },
    "e-82": {
      id: "e-82",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-56",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-83",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65c0dca1595807266e807370",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65c0dca1595807266e807370",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1707139418034,
    },
    "e-84": {
      id: "e-84",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-56",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-85",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a118d82cee7eeed8c90bd8",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a118d82cee7eeed8c90bd8",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1707140628898,
    },
    "e-86": {
      id: "e-86",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-56",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-87",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a8face90bf40ac000b3076",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a8face90bf40ac000b3076",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1707140652005,
    },
    "e-88": {
      id: "e-88",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-56",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-89",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9464af2bc1007d34fe257",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9464af2bc1007d34fe257",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1707140665483,
    },
    "e-90": {
      id: "e-90",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-56",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-91",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b78791ab0af1867317c02d",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b78791ab0af1867317c02d",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1707140680938,
    },
    "e-92": {
      id: "e-92",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-56",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-93",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65bcfff211088bee20f94632",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65bcfff211088bee20f94632",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1707140701548,
    },
  },
  actionLists: {
    "a-6": {
      id: "a-6",
      title: "Button Primary - Hover in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon-absolute",
                  selectorGuids: ["98d7ae05-8a4f-ce6e-7f66-204c9d554877"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-6-n-5",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button.primary",
                  selectorGuids: [
                    "3a5c0720-5329-94d8-cd17-77657151b47b",
                    "05888439-62a0-0cf3-eb5f-1e0888a4f106",
                  ],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-6-n-4",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button.primary",
                  selectorGuids: [
                    "3a5c0720-5329-94d8-cd17-77657151b47b",
                    "05888439-62a0-0cf3-eb5f-1e0888a4f106",
                  ],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-6-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon-relative",
                  selectorGuids: ["79c7979c-620b-87af-8f02-8b73fee3ea17"],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-6-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon-absolute",
                  selectorGuids: ["98d7ae05-8a4f-ce6e-7f66-204c9d554877"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705309561924,
    },
    "a-7": {
      id: "a-7",
      title: "Button Primary - Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button.primary",
                  selectorGuids: [
                    "3a5c0720-5329-94d8-cd17-77657151b47b",
                    "05888439-62a0-0cf3-eb5f-1e0888a4f106",
                  ],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-7-n-3",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button.primary",
                  selectorGuids: [
                    "3a5c0720-5329-94d8-cd17-77657151b47b",
                    "05888439-62a0-0cf3-eb5f-1e0888a4f106",
                  ],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-7-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon-relative",
                  selectorGuids: ["79c7979c-620b-87af-8f02-8b73fee3ea17"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon-absolute",
                  selectorGuids: ["98d7ae05-8a4f-ce6e-7f66-204c9d554877"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1705309561924,
    },
    "a-8": {
      id: "a-8",
      title: "Home Trending Article - Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-moves",
                  selectorGuids: ["2e03d44e-285e-d2b8-a027-41a2df69b5ad"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-8-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-left-panel",
                  selectorGuids: ["7997d62b-8286-4fbb-2094-045d6343e574"],
                },
                xValue: 0,
                locked: false,
              },
            },
            {
              id: "a-8-n-6",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-right-panel",
                  selectorGuids: ["1b695a80-c6da-559c-bc7b-5f63b10345cb"],
                },
                xValue: 0,
                locked: false,
              },
            },
            {
              id: "a-8-n-7",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-top-panel",
                  selectorGuids: ["45304523-a0d2-77d2-4b6c-cc7b0cc29513"],
                },
                xValue: null,
                yValue: 0,
                locked: false,
              },
            },
            {
              id: "a-8-n-8",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-btm-panel",
                  selectorGuids: ["030130fc-3c92-efc2-b074-48f20f6803e7"],
                },
                xValue: null,
                yValue: 0,
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-8-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-moves",
                  selectorGuids: ["2e03d44e-285e-d2b8-a027-41a2df69b5ad"],
                },
                xValue: 400,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-8-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-cover-absolute",
                  selectorGuids: ["de72b46c-a96c-1c7e-000f-91e09b13bd08"],
                },
                xValue: 1.15,
                yValue: 1.15,
                locked: true,
              },
            },
            {
              id: "a-8-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".title-small.text-underline",
                  selectorGuids: [
                    "85809171-a80f-8247-bc09-42c56722d8fd",
                    "ea7fe52f-bffa-bdae-b6f8-22b3342270ee",
                  ],
                },
                value: 0.5,
                unit: "",
              },
            },
            {
              id: "a-8-n-9",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-left-panel",
                  selectorGuids: ["7997d62b-8286-4fbb-2094-045d6343e574"],
                },
                xValue: 1,
                locked: false,
              },
            },
            {
              id: "a-8-n-12",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-btm-panel",
                  selectorGuids: ["030130fc-3c92-efc2-b074-48f20f6803e7"],
                },
                xValue: null,
                yValue: 1,
                locked: false,
              },
            },
            {
              id: "a-8-n-11",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-top-panel",
                  selectorGuids: ["45304523-a0d2-77d2-4b6c-cc7b0cc29513"],
                },
                xValue: null,
                yValue: 1,
                locked: false,
              },
            },
            {
              id: "a-8-n-10",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-right-panel",
                  selectorGuids: ["1b695a80-c6da-559c-bc7b-5f63b10345cb"],
                },
                xValue: 1,
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705312929887,
    },
    "a-9": {
      id: "a-9",
      title: "Home Trending Article - Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-moves",
                  selectorGuids: ["2e03d44e-285e-d2b8-a027-41a2df69b5ad"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-cover-absolute",
                  selectorGuids: ["de72b46c-a96c-1c7e-000f-91e09b13bd08"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-9-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".title-small.text-underline",
                  selectorGuids: [
                    "85809171-a80f-8247-bc09-42c56722d8fd",
                    "ea7fe52f-bffa-bdae-b6f8-22b3342270ee",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-9-n-6",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-right-panel",
                  selectorGuids: ["1b695a80-c6da-559c-bc7b-5f63b10345cb"],
                },
                xValue: 0,
                locked: false,
              },
            },
            {
              id: "a-9-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-left-panel",
                  selectorGuids: ["7997d62b-8286-4fbb-2094-045d6343e574"],
                },
                xValue: 0,
                locked: false,
              },
            },
            {
              id: "a-9-n-7",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-top-panel",
                  selectorGuids: ["45304523-a0d2-77d2-4b6c-cc7b0cc29513"],
                },
                xValue: null,
                yValue: 0,
                locked: false,
              },
            },
            {
              id: "a-9-n-8",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-btm-panel",
                  selectorGuids: ["030130fc-3c92-efc2-b074-48f20f6803e7"],
                },
                xValue: null,
                yValue: 0,
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1705312929887,
    },
    "a-10": {
      id: "a-10",
      title: "Home Category - Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".category-img-wrap",
                  selectorGuids: ["ad4d9b40-8496-a37e-0c64-893f9717f3ec"],
                },
                value: "none",
              },
            },
            {
              id: "a-10-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".category-img",
                  selectorGuids: ["7bd33422-09ca-2a3a-794a-094858470bc9"],
                },
                xValue: 0.25,
                yValue: 0.25,
                locked: true,
              },
            },
            {
              id: "a-10-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".category-img",
                  selectorGuids: ["7bd33422-09ca-2a3a-794a-094858470bc9"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-10-n-7",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".category-line",
                  selectorGuids: ["49a69ed7-e769-38b8-e8a3-691adce5f836"],
                },
                xValue: 0,
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-10-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".category-img-wrap",
                  selectorGuids: ["ad4d9b40-8496-a37e-0c64-893f9717f3ec"],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-10-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".category-img",
                  selectorGuids: ["7bd33422-09ca-2a3a-794a-094858470bc9"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-10-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 800,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".home-category-item",
                  selectorGuids: ["544af1da-85b3-978b-36fc-f8498f4cd65d"],
                },
                value: 0.08,
                unit: "",
              },
            },
            {
              id: "a-10-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".category-img",
                  selectorGuids: ["7bd33422-09ca-2a3a-794a-094858470bc9"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-10-n-8",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".category-line",
                  selectorGuids: ["49a69ed7-e769-38b8-e8a3-691adce5f836"],
                },
                xValue: 1,
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705317302273,
    },
    "a-11": {
      id: "a-11",
      title: "Home Category - Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-11-n-6",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".category-img",
                  selectorGuids: ["7bd33422-09ca-2a3a-794a-094858470bc9"],
                },
                xValue: 0.2,
                yValue: 0.2,
                locked: true,
              },
            },
            {
              id: "a-11-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 600,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".home-category-item",
                  selectorGuids: ["544af1da-85b3-978b-36fc-f8498f4cd65d"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-11-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".category-img",
                  selectorGuids: ["7bd33422-09ca-2a3a-794a-094858470bc9"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-11-n-9",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".category-line",
                  selectorGuids: ["49a69ed7-e769-38b8-e8a3-691adce5f836"],
                },
                xValue: 0,
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".category-img-wrap",
                  selectorGuids: ["ad4d9b40-8496-a37e-0c64-893f9717f3ec"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1705317302273,
    },
    "a-12": {
      id: "a-12",
      title: "Article Card - Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-moves",
                  selectorGuids: ["2e03d44e-285e-d2b8-a027-41a2df69b5ad"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-left-panel",
                  selectorGuids: ["7997d62b-8286-4fbb-2094-045d6343e574"],
                },
                xValue: 0,
                locked: false,
              },
            },
            {
              id: "a-12-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-right-panel",
                  selectorGuids: ["1b695a80-c6da-559c-bc7b-5f63b10345cb"],
                },
                xValue: 0,
                locked: false,
              },
            },
            {
              id: "a-12-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-top-panel",
                  selectorGuids: ["45304523-a0d2-77d2-4b6c-cc7b0cc29513"],
                },
                xValue: null,
                yValue: 0,
                locked: false,
              },
            },
            {
              id: "a-12-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-btm-panel",
                  selectorGuids: ["030130fc-3c92-efc2-b074-48f20f6803e7"],
                },
                xValue: null,
                yValue: 0,
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-moves",
                  selectorGuids: ["2e03d44e-285e-d2b8-a027-41a2df69b5ad"],
                },
                xValue: 400,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-7",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-cover-absolute",
                  selectorGuids: ["de72b46c-a96c-1c7e-000f-91e09b13bd08"],
                },
                xValue: 1.15,
                yValue: 1.15,
                locked: true,
              },
            },
            {
              id: "a-12-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".element-trigger",
                  selectorGuids: ["2c3f3ae1-4c11-c535-384e-ccdc8cd87f7e"],
                },
                value: 0.5,
                unit: "",
              },
            },
            {
              id: "a-12-n-9",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-left-panel",
                  selectorGuids: ["7997d62b-8286-4fbb-2094-045d6343e574"],
                },
                xValue: 1,
                locked: false,
              },
            },
            {
              id: "a-12-n-10",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-btm-panel",
                  selectorGuids: ["030130fc-3c92-efc2-b074-48f20f6803e7"],
                },
                xValue: null,
                yValue: 1,
                locked: false,
              },
            },
            {
              id: "a-12-n-11",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-top-panel",
                  selectorGuids: ["45304523-a0d2-77d2-4b6c-cc7b0cc29513"],
                },
                xValue: null,
                yValue: 1,
                locked: false,
              },
            },
            {
              id: "a-12-n-12",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-right-panel",
                  selectorGuids: ["1b695a80-c6da-559c-bc7b-5f63b10345cb"],
                },
                xValue: 1,
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705312929887,
    },
    "a-13": {
      id: "a-13",
      title: "Article Card - Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-13-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-moves",
                  selectorGuids: ["2e03d44e-285e-d2b8-a027-41a2df69b5ad"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-13-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-cover-absolute",
                  selectorGuids: ["de72b46c-a96c-1c7e-000f-91e09b13bd08"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-13-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".element-trigger",
                  selectorGuids: ["2c3f3ae1-4c11-c535-384e-ccdc8cd87f7e"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-13-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-right-panel",
                  selectorGuids: ["1b695a80-c6da-559c-bc7b-5f63b10345cb"],
                },
                xValue: 0,
                locked: false,
              },
            },
            {
              id: "a-13-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-left-panel",
                  selectorGuids: ["7997d62b-8286-4fbb-2094-045d6343e574"],
                },
                xValue: 0,
                locked: false,
              },
            },
            {
              id: "a-13-n-6",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-top-panel",
                  selectorGuids: ["45304523-a0d2-77d2-4b6c-cc7b0cc29513"],
                },
                xValue: null,
                yValue: 0,
                locked: false,
              },
            },
            {
              id: "a-13-n-7",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-btm-panel",
                  selectorGuids: ["030130fc-3c92-efc2-b074-48f20f6803e7"],
                },
                xValue: null,
                yValue: 0,
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1705312929887,
    },
    "a-14": {
      id: "a-14",
      title: "Instagram Marquee Loops",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-14-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 12000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".callout-instagram-marquee._1",
                  selectorGuids: [
                    "75a22ed4-1a4a-c7a1-a8fd-5332bde9d82f",
                    "216a037f-117f-e3c6-5c7d-dffe733263b2",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 12000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".callout-instagram-marquee._2",
                  selectorGuids: [
                    "75a22ed4-1a4a-c7a1-a8fd-5332bde9d82f",
                    "1c970e9b-676d-9e6e-20ec-17d52c2a1470",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".callout-instagram-marquee._1",
                  selectorGuids: [
                    "75a22ed4-1a4a-c7a1-a8fd-5332bde9d82f",
                    "216a037f-117f-e3c6-5c7d-dffe733263b2",
                  ],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 12000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".callout-instagram-marquee._1",
                  selectorGuids: [
                    "75a22ed4-1a4a-c7a1-a8fd-5332bde9d82f",
                    "216a037f-117f-e3c6-5c7d-dffe733263b2",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 12000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".callout-instagram-marquee._2",
                  selectorGuids: [
                    "75a22ed4-1a4a-c7a1-a8fd-5332bde9d82f",
                    "1c970e9b-676d-9e6e-20ec-17d52c2a1470",
                  ],
                },
                xValue: -200,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".callout-instagram-marquee._2",
                  selectorGuids: [
                    "75a22ed4-1a4a-c7a1-a8fd-5332bde9d82f",
                    "1c970e9b-676d-9e6e-20ec-17d52c2a1470",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1705399575597,
    },
    "a-15": {
      id: "a-15",
      title: "Callout Instagram - Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".callout-instagram-img",
                  selectorGuids: ["059cdd4a-f3bd-e2bd-b01b-66f0aa453321"],
                },
                xValue: 0.85,
                yValue: 0.85,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1705400078888,
    },
    "a-16": {
      id: "a-16",
      title: "Callout Instagram - Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".callout-instagram-img",
                  selectorGuids: ["059cdd4a-f3bd-e2bd-b01b-66f0aa453321"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1705400078888,
    },
    "a-17": {
      id: "a-17",
      title: "Nav Desktop - Opens",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-17-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-right-wrap",
                  selectorGuids: ["f093e872-3f7f-62a9-0752-5e650d27b2cb"],
                },
                value: "none",
              },
            },
            {
              id: "a-17-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-left-wrap",
                  selectorGuids: ["3d3bb0f7-f0ba-c5c0-3be1-5fc96e1bd6bf"],
                },
                value: "none",
              },
            },
            {
              id: "a-17-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-close-icon",
                  selectorGuids: ["ba1457a7-11ae-10da-35ca-9d274f37ea73"],
                },
                xValue: null,
                yValue: -100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-trigger-label-absolute",
                  selectorGuids: ["93b37833-03a6-8245-c4e1-ed3a5cb48ed7"],
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link._1",
                  selectorGuids: [
                    "06de6d37-a76d-f219-a355-7fac4d32b2d9",
                    "2888825a-0353-41b1-ac74-f6ae8093cd1c",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link._1",
                  selectorGuids: [
                    "06de6d37-a76d-f219-a355-7fac4d32b2d9",
                    "2888825a-0353-41b1-ac74-f6ae8093cd1c",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-17-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link._2",
                  selectorGuids: [
                    "06de6d37-a76d-f219-a355-7fac4d32b2d9",
                    "0ddbe758-af3d-4bac-c669-47872c070ad0",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link._2",
                  selectorGuids: [
                    "06de6d37-a76d-f219-a355-7fac4d32b2d9",
                    "0ddbe758-af3d-4bac-c669-47872c070ad0",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-17-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link._3",
                  selectorGuids: [
                    "06de6d37-a76d-f219-a355-7fac4d32b2d9",
                    "8238f658-037e-733f-5e7d-287448ce17d9",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link._3",
                  selectorGuids: [
                    "06de6d37-a76d-f219-a355-7fac4d32b2d9",
                    "8238f658-037e-733f-5e7d-287448ce17d9",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-17-n-13",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-right-wrap",
                  selectorGuids: ["f093e872-3f7f-62a9-0752-5e650d27b2cb"],
                },
                value: "grid",
              },
            },
            {
              id: "a-17-n-14",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-left-wrap",
                  selectorGuids: ["3d3bb0f7-f0ba-c5c0-3be1-5fc96e1bd6bf"],
                },
                value: "grid",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-17-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-close-icon",
                  selectorGuids: ["ba1457a7-11ae-10da-35ca-9d274f37ea73"],
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-burger-icon",
                  selectorGuids: ["0481e953-0133-e33d-a96a-932578d7e180"],
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "outExpo",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-trigger-label-relative",
                  selectorGuids: ["d8b37cb6-6f34-8e19-8cca-cb9b34ed4aed"],
                },
                xValue: null,
                yValue: -100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "outExpo",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-trigger-label-absolute",
                  selectorGuids: ["93b37833-03a6-8245-c4e1-ed3a5cb48ed7"],
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "outExpo",
                duration: 800,
                target: {
                  selector: ".nav-link._1",
                  selectorGuids: [
                    "06de6d37-a76d-f219-a355-7fac4d32b2d9",
                    "2888825a-0353-41b1-ac74-f6ae8093cd1c",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 50,
                easing: "outExpo",
                duration: 800,
                target: {
                  selector: ".nav-link._1",
                  selectorGuids: [
                    "06de6d37-a76d-f219-a355-7fac4d32b2d9",
                    "2888825a-0353-41b1-ac74-f6ae8093cd1c",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-17-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "outExpo",
                duration: 800,
                target: {
                  selector: ".nav-link._2",
                  selectorGuids: [
                    "06de6d37-a76d-f219-a355-7fac4d32b2d9",
                    "0ddbe758-af3d-4bac-c669-47872c070ad0",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "outExpo",
                duration: 800,
                target: {
                  selector: ".nav-link._2",
                  selectorGuids: [
                    "06de6d37-a76d-f219-a355-7fac4d32b2d9",
                    "0ddbe758-af3d-4bac-c669-47872c070ad0",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-17-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 150,
                easing: "outExpo",
                duration: 800,
                target: {
                  selector: ".nav-link._3",
                  selectorGuids: [
                    "06de6d37-a76d-f219-a355-7fac4d32b2d9",
                    "8238f658-037e-733f-5e7d-287448ce17d9",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 150,
                easing: "outExpo",
                duration: 800,
                target: {
                  selector: ".nav-link._3",
                  selectorGuids: [
                    "06de6d37-a76d-f219-a355-7fac4d32b2d9",
                    "8238f658-037e-733f-5e7d-287448ce17d9",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705412336830,
    },
    "a-18": {
      id: "a-18",
      title: "Nav Desktop - Close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-18-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-close-icon",
                  selectorGuids: ["ba1457a7-11ae-10da-35ca-9d274f37ea73"],
                },
                xValue: null,
                yValue: -100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-14",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-burger-icon",
                  selectorGuids: ["0481e953-0133-e33d-a96a-932578d7e180"],
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "outExpo",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-trigger-label-relative",
                  selectorGuids: ["d8b37cb6-6f34-8e19-8cca-cb9b34ed4aed"],
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-16",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "outExpo",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-trigger-label-absolute",
                  selectorGuids: ["93b37833-03a6-8245-c4e1-ed3a5cb48ed7"],
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "outExpo",
                duration: 600,
                target: {
                  selector: ".nav-link._3",
                  selectorGuids: [
                    "06de6d37-a76d-f219-a355-7fac4d32b2d9",
                    "8238f658-037e-733f-5e7d-287448ce17d9",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 50,
                easing: "outExpo",
                duration: 400,
                target: {
                  selector: ".nav-link._3",
                  selectorGuids: [
                    "06de6d37-a76d-f219-a355-7fac4d32b2d9",
                    "8238f658-037e-733f-5e7d-287448ce17d9",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-18-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "outExpo",
                duration: 400,
                target: {
                  selector: ".nav-link._2",
                  selectorGuids: [
                    "06de6d37-a76d-f219-a355-7fac4d32b2d9",
                    "0ddbe758-af3d-4bac-c669-47872c070ad0",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-18-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "outExpo",
                duration: 600,
                target: {
                  selector: ".nav-link._2",
                  selectorGuids: [
                    "06de6d37-a76d-f219-a355-7fac4d32b2d9",
                    "0ddbe758-af3d-4bac-c669-47872c070ad0",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 150,
                easing: "outExpo",
                duration: 400,
                target: {
                  selector: ".nav-link._1",
                  selectorGuids: [
                    "06de6d37-a76d-f219-a355-7fac4d32b2d9",
                    "2888825a-0353-41b1-ac74-f6ae8093cd1c",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-18-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 150,
                easing: "outExpo",
                duration: 600,
                target: {
                  selector: ".nav-link._1",
                  selectorGuids: [
                    "06de6d37-a76d-f219-a355-7fac4d32b2d9",
                    "2888825a-0353-41b1-ac74-f6ae8093cd1c",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-18-n-11",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-right-wrap",
                  selectorGuids: ["f093e872-3f7f-62a9-0752-5e650d27b2cb"],
                },
                value: "none",
              },
            },
            {
              id: "a-18-n-12",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-left-wrap",
                  selectorGuids: ["3d3bb0f7-f0ba-c5c0-3be1-5fc96e1bd6bf"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1705412336830,
    },
    "a-19": {
      id: "a-19",
      title: "Footer Scroll In View",
      continuousParameterGroups: [
        {
          id: "a-19-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-19-n-3",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".footer-content",
                      selectorGuids: ["c6b0bdf7-705c-d699-5c6b-6dc07ec00c0f"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 50,
              actionItems: [
                {
                  id: "a-19-n-4",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".footer-content",
                      selectorGuids: ["c6b0bdf7-705c-d699-5c6b-6dc07ec00c0f"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1705414756574,
    },
    "a-20": {
      id: "a-20",
      title: "Scroll Callout - Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-20-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".scroll-callout-line",
                  selectorGuids: ["479223ab-a9ec-a47e-d10b-6d9fce7c9e2f"],
                },
                xValue: 0,
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1705414963226,
    },
    "a-21": {
      id: "a-21",
      title: "Scroll Callout - Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-21-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".scroll-callout-line",
                  selectorGuids: ["479223ab-a9ec-a47e-d10b-6d9fce7c9e2f"],
                },
                xValue: 1,
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1705414963226,
    },
    "a-23": {
      id: "a-23",
      title: "Home Hero - In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-23-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-cover.div-relative",
                  selectorGuids: [
                    "c359bbaf-6c80-996e-622e-68a341ffba0a",
                    "b723b243-7de9-2b41-d818-b564b157c426",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-23-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-cover.div-relative",
                  selectorGuids: [
                    "c359bbaf-6c80-996e-622e-68a341ffba0a",
                    "b723b243-7de9-2b41-d818-b564b157c426",
                  ],
                },
                xValue: 1.25,
                yValue: 1.25,
                locked: true,
              },
            },
            {
              id: "a-23-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".home-hero-content-container",
                  selectorGuids: ["ace36ca2-9131-3ea0-cb1a-d4af2e96dd9a"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-23-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".div-flex.center",
                  selectorGuids: [
                    "1bc1970a-3e93-538f-9a61-fec5a8526db5",
                    "831391f3-2761-582e-7b02-d899669ea9ae",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-23-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".home-hero-logo-img",
                  selectorGuids: ["429f2497-b5bc-7d2b-c791-f0149f6db793"],
                },
                yValue: 35,
                xUnit: "PX",
                yUnit: "vh",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-8",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".home-hero-logo-img",
                  selectorGuids: ["429f2497-b5bc-7d2b-c791-f0149f6db793"],
                },
                xValue: 0.05,
                yValue: 0.05,
                locked: true,
              },
            },
            {
              id: "a-23-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".home-hero-logo-img",
                  selectorGuids: ["429f2497-b5bc-7d2b-c791-f0149f6db793"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-23-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".home-hero-content-absolute-wrap",
                  selectorGuids: ["c7c9a3a5-33e8-bd99-7d3d-bae041a27ded"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-23-n-24",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".div-flex.center",
                  selectorGuids: [
                    "1bc1970a-3e93-538f-9a61-fec5a8526db5",
                    "831391f3-2761-582e-7b02-d899669ea9ae",
                  ],
                },
                yValue: 2,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-22",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".home-hero-content-absolute-wrap",
                  selectorGuids: ["c7c9a3a5-33e8-bd99-7d3d-bae041a27ded"],
                },
                yValue: 2,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-20",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".home-hero-content-container",
                  selectorGuids: ["ace36ca2-9131-3ea0-cb1a-d4af2e96dd9a"],
                },
                yValue: 2,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-23-n-11",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".home-hero-logo-img",
                  selectorGuids: ["429f2497-b5bc-7d2b-c791-f0149f6db793"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-23-n-12",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".home-hero-logo-img",
                  selectorGuids: ["429f2497-b5bc-7d2b-c791-f0149f6db793"],
                },
                xValue: 0.2,
                yValue: 0.2,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-23-n-14",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "inOutExpo",
                duration: 1400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".home-hero-logo-img",
                  selectorGuids: ["429f2497-b5bc-7d2b-c791-f0149f6db793"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vh",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-15",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 200,
                easing: "inOutExpo",
                duration: 1400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".home-hero-logo-img",
                  selectorGuids: ["429f2497-b5bc-7d2b-c791-f0149f6db793"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-23-n-26",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "inOutExpo",
                duration: 1400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-cover.div-relative",
                  selectorGuids: [
                    "c359bbaf-6c80-996e-622e-68a341ffba0a",
                    "b723b243-7de9-2b41-d818-b564b157c426",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-23-n-27",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 200,
                easing: "inOutExpo",
                duration: 1400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-cover.div-relative",
                  selectorGuids: [
                    "c359bbaf-6c80-996e-622e-68a341ffba0a",
                    "b723b243-7de9-2b41-d818-b564b157c426",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-23-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 850,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".home-hero-content-container",
                  selectorGuids: ["ace36ca2-9131-3ea0-cb1a-d4af2e96dd9a"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 850,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".home-hero-content-container",
                  selectorGuids: ["ace36ca2-9131-3ea0-cb1a-d4af2e96dd9a"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-23-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 950,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".home-hero-content-absolute-wrap",
                  selectorGuids: ["c7c9a3a5-33e8-bd99-7d3d-bae041a27ded"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-17",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 950,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".home-hero-content-absolute-wrap",
                  selectorGuids: ["c7c9a3a5-33e8-bd99-7d3d-bae041a27ded"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-23-n-25",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1050,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".div-flex.center",
                  selectorGuids: [
                    "1bc1970a-3e93-538f-9a61-fec5a8526db5",
                    "831391f3-2761-582e-7b02-d899669ea9ae",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-19",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1050,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".div-flex.center",
                  selectorGuids: [
                    "1bc1970a-3e93-538f-9a61-fec5a8526db5",
                    "831391f3-2761-582e-7b02-d899669ea9ae",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705415537330,
    },
    "a-24": {
      id: "a-24",
      title: "Nav Mobile - Opens",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-24-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-right-wrap",
                  selectorGuids: ["f093e872-3f7f-62a9-0752-5e650d27b2cb"],
                },
                value: "none",
              },
            },
            {
              id: "a-24-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-left-wrap",
                  selectorGuids: ["3d3bb0f7-f0ba-c5c0-3be1-5fc96e1bd6bf"],
                },
                value: "none",
              },
            },
            {
              id: "a-24-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-close-icon",
                  selectorGuids: ["ba1457a7-11ae-10da-35ca-9d274f37ea73"],
                },
                xValue: null,
                yValue: -100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-trigger-label-absolute",
                  selectorGuids: ["93b37833-03a6-8245-c4e1-ed3a5cb48ed7"],
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link",
                  selectorGuids: ["06de6d37-a76d-f219-a355-7fac4d32b2d9"],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link",
                  selectorGuids: ["06de6d37-a76d-f219-a355-7fac4d32b2d9"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-24-n-11",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-right-wrap",
                  selectorGuids: ["f093e872-3f7f-62a9-0752-5e650d27b2cb"],
                },
                value: "grid",
              },
            },
            {
              id: "a-24-n-12",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-left-wrap",
                  selectorGuids: ["3d3bb0f7-f0ba-c5c0-3be1-5fc96e1bd6bf"],
                },
                value: "grid",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-24-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-close-icon",
                  selectorGuids: ["ba1457a7-11ae-10da-35ca-9d274f37ea73"],
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-14",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-burger-icon",
                  selectorGuids: ["0481e953-0133-e33d-a96a-932578d7e180"],
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "outExpo",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-trigger-label-relative",
                  selectorGuids: ["d8b37cb6-6f34-8e19-8cca-cb9b34ed4aed"],
                },
                xValue: null,
                yValue: -100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-16",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "outExpo",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-trigger-label-absolute",
                  selectorGuids: ["93b37833-03a6-8245-c4e1-ed3a5cb48ed7"],
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "outExpo",
                duration: 800,
                target: {
                  selector: ".nav-link",
                  selectorGuids: ["06de6d37-a76d-f219-a355-7fac4d32b2d9"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 50,
                easing: "outExpo",
                duration: 800,
                target: {
                  selector: ".nav-link",
                  selectorGuids: ["06de6d37-a76d-f219-a355-7fac4d32b2d9"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705412336830,
    },
    "a-25": {
      id: "a-25",
      title: "Nav Mobile - Close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-25-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-close-icon",
                  selectorGuids: ["ba1457a7-11ae-10da-35ca-9d274f37ea73"],
                },
                xValue: null,
                yValue: -100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-burger-icon",
                  selectorGuids: ["0481e953-0133-e33d-a96a-932578d7e180"],
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "outExpo",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-trigger-label-relative",
                  selectorGuids: ["d8b37cb6-6f34-8e19-8cca-cb9b34ed4aed"],
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "outExpo",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-trigger-label-absolute",
                  selectorGuids: ["93b37833-03a6-8245-c4e1-ed3a5cb48ed7"],
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "outExpo",
                duration: 600,
                target: {
                  selector: ".nav-link",
                  selectorGuids: ["06de6d37-a76d-f219-a355-7fac4d32b2d9"],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 50,
                easing: "outExpo",
                duration: 400,
                target: {
                  selector: ".nav-link",
                  selectorGuids: ["06de6d37-a76d-f219-a355-7fac4d32b2d9"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-25-n-11",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-right-wrap",
                  selectorGuids: ["f093e872-3f7f-62a9-0752-5e650d27b2cb"],
                },
                value: "none",
              },
            },
            {
              id: "a-25-n-12",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-left-wrap",
                  selectorGuids: ["3d3bb0f7-f0ba-c5c0-3be1-5fc96e1bd6bf"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1705412336830,
    },
    "a-26": {
      id: "a-26",
      title: "Trending Article - Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-26-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-left-panel",
                  selectorGuids: ["7997d62b-8286-4fbb-2094-045d6343e574"],
                },
                xValue: 0,
                locked: false,
              },
            },
            {
              id: "a-26-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-right-panel",
                  selectorGuids: ["1b695a80-c6da-559c-bc7b-5f63b10345cb"],
                },
                xValue: 0,
                locked: false,
              },
            },
            {
              id: "a-26-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-top-panel",
                  selectorGuids: ["45304523-a0d2-77d2-4b6c-cc7b0cc29513"],
                },
                xValue: null,
                yValue: 0,
                locked: false,
              },
            },
            {
              id: "a-26-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-btm-panel",
                  selectorGuids: ["030130fc-3c92-efc2-b074-48f20f6803e7"],
                },
                xValue: null,
                yValue: 0,
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-26-n-7",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-cover-absolute",
                  selectorGuids: ["de72b46c-a96c-1c7e-000f-91e09b13bd08"],
                },
                xValue: 1.15,
                yValue: 1.15,
                locked: true,
              },
            },
            {
              id: "a-26-n-13",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".gradient-overlay-absolute",
                  selectorGuids: ["1692e5fa-4d5f-85d9-bd8f-d59c8b12539a"],
                },
                yValue: 1.25,
                locked: false,
              },
            },
            {
              id: "a-26-n-9",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-left-panel",
                  selectorGuids: ["7997d62b-8286-4fbb-2094-045d6343e574"],
                },
                xValue: 1,
                locked: false,
              },
            },
            {
              id: "a-26-n-10",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-btm-panel",
                  selectorGuids: ["030130fc-3c92-efc2-b074-48f20f6803e7"],
                },
                xValue: null,
                yValue: 1,
                locked: false,
              },
            },
            {
              id: "a-26-n-11",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-top-panel",
                  selectorGuids: ["45304523-a0d2-77d2-4b6c-cc7b0cc29513"],
                },
                xValue: null,
                yValue: 1,
                locked: false,
              },
            },
            {
              id: "a-26-n-12",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-right-panel",
                  selectorGuids: ["1b695a80-c6da-559c-bc7b-5f63b10345cb"],
                },
                xValue: 1,
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705312929887,
    },
    "a-27": {
      id: "a-27",
      title: "Trending Article - Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-27-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-cover-absolute",
                  selectorGuids: ["de72b46c-a96c-1c7e-000f-91e09b13bd08"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-27-n-8",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".gradient-overlay-absolute.origin-btm",
                  selectorGuids: [
                    "1692e5fa-4d5f-85d9-bd8f-d59c8b12539a",
                    "8445006c-1677-2215-cb86-e69164e8bcfc",
                  ],
                },
                yValue: 1,
                locked: false,
              },
            },
            {
              id: "a-27-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-right-panel",
                  selectorGuids: ["1b695a80-c6da-559c-bc7b-5f63b10345cb"],
                },
                xValue: 0,
                locked: false,
              },
            },
            {
              id: "a-27-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-left-panel",
                  selectorGuids: ["7997d62b-8286-4fbb-2094-045d6343e574"],
                },
                xValue: 0,
                locked: false,
              },
            },
            {
              id: "a-27-n-6",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-top-panel",
                  selectorGuids: ["45304523-a0d2-77d2-4b6c-cc7b0cc29513"],
                },
                xValue: null,
                yValue: 0,
                locked: false,
              },
            },
            {
              id: "a-27-n-7",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-btm-panel",
                  selectorGuids: ["030130fc-3c92-efc2-b074-48f20f6803e7"],
                },
                xValue: null,
                yValue: 0,
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1705312929887,
    },
    "a-30": {
      id: "a-30",
      title: "Articles Hero - In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-30-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector:
                    ".title-small.text-align-center.text-word-caps.line-height-1",
                  selectorGuids: [
                    "85809171-a80f-8247-bc09-42c56722d8fd",
                    "a63ed722-612b-d313-0e04-fda8444113e6",
                    "ee25dc64-4309-57bb-67a7-cc5979b37ed9",
                    "8a391ca5-ac8e-a222-cb53-e9d338f9d84f",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-30-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector:
                    ".title-small.text-align-center.text-word-caps.line-height-1",
                  selectorGuids: [
                    "85809171-a80f-8247-bc09-42c56722d8fd",
                    "a63ed722-612b-d313-0e04-fda8444113e6",
                    "ee25dc64-4309-57bb-67a7-cc5979b37ed9",
                    "8a391ca5-ac8e-a222-cb53-e9d338f9d84f",
                  ],
                },
                yValue: 2,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-30-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".element-trigger",
                  selectorGuids: ["2c3f3ae1-4c11-c535-384e-ccdc8cd87f7e"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-30-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".element-trigger",
                  selectorGuids: ["2c3f3ae1-4c11-c535-384e-ccdc8cd87f7e"],
                },
                yValue: 2,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-30-n-24",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".trending-articles-cms",
                  selectorGuids: ["741d5f4f-4b68-84f3-bab3-a6a3b7033a80"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-30-n-25",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".trending-articles-cms",
                  selectorGuids: ["741d5f4f-4b68-84f3-bab3-a6a3b7033a80"],
                },
                yValue: 2,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-30-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector:
                    ".title-small.text-align-center.text-word-caps.line-height-1",
                  selectorGuids: [
                    "85809171-a80f-8247-bc09-42c56722d8fd",
                    "a63ed722-612b-d313-0e04-fda8444113e6",
                    "ee25dc64-4309-57bb-67a7-cc5979b37ed9",
                    "8a391ca5-ac8e-a222-cb53-e9d338f9d84f",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-30-n-19",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector:
                    ".title-small.text-align-center.text-word-caps.line-height-1",
                  selectorGuids: [
                    "85809171-a80f-8247-bc09-42c56722d8fd",
                    "a63ed722-612b-d313-0e04-fda8444113e6",
                    "ee25dc64-4309-57bb-67a7-cc5979b37ed9",
                    "8a391ca5-ac8e-a222-cb53-e9d338f9d84f",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-30-n-23",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "outCubic",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".element-trigger",
                  selectorGuids: ["2c3f3ae1-4c11-c535-384e-ccdc8cd87f7e"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-30-n-22",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "outCubic",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".element-trigger",
                  selectorGuids: ["2c3f3ae1-4c11-c535-384e-ccdc8cd87f7e"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-30-n-26",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "outCubic",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".trending-articles-cms",
                  selectorGuids: ["741d5f4f-4b68-84f3-bab3-a6a3b7033a80"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-30-n-27",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outCubic",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".trending-articles-cms",
                  selectorGuids: ["741d5f4f-4b68-84f3-bab3-a6a3b7033a80"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705415537330,
    },
    "a-33": {
      id: "a-33",
      title: "Story Section Horizontal Scroll",
      continuousParameterGroups: [
        {
          id: "a-33-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-33-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".story-steps-container",
                      selectorGuids: ["c30813a7-d4c4-8dde-afc4-953e4a71550e"],
                    },
                    xValue: 0,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-33-n-3",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".story-scroll-line",
                      selectorGuids: ["310a0fb1-1746-f75f-f4d8-d75d7a7333a8"],
                    },
                    xValue: 0,
                    locked: false,
                  },
                },
              ],
            },
            {
              keyframe: 62,
              actionItems: [
                {
                  id: "a-33-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".story-steps-container",
                      selectorGuids: ["c30813a7-d4c4-8dde-afc4-953e4a71550e"],
                    },
                    xValue: -200,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-33-n-4",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".story-scroll-line",
                      selectorGuids: ["310a0fb1-1746-f75f-f4d8-d75d7a7333a8"],
                    },
                    xValue: 1,
                    locked: false,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1705594852752,
    },
    "a-34": {
      id: "a-34",
      title: "Author Card - Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-34-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-moves",
                  selectorGuids: ["2e03d44e-285e-d2b8-a027-41a2df69b5ad"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-left-panel",
                  selectorGuids: ["7997d62b-8286-4fbb-2094-045d6343e574"],
                },
                xValue: 0,
                locked: false,
              },
            },
            {
              id: "a-34-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-right-panel",
                  selectorGuids: ["1b695a80-c6da-559c-bc7b-5f63b10345cb"],
                },
                xValue: 0,
                locked: false,
              },
            },
            {
              id: "a-34-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-top-panel",
                  selectorGuids: ["45304523-a0d2-77d2-4b6c-cc7b0cc29513"],
                },
                xValue: null,
                yValue: 0,
                locked: false,
              },
            },
            {
              id: "a-34-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-btm-panel",
                  selectorGuids: ["030130fc-3c92-efc2-b074-48f20f6803e7"],
                },
                xValue: null,
                yValue: 0,
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-34-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-moves",
                  selectorGuids: ["2e03d44e-285e-d2b8-a027-41a2df69b5ad"],
                },
                xValue: 400,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n-7",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-cover-absolute",
                  selectorGuids: ["de72b46c-a96c-1c7e-000f-91e09b13bd08"],
                },
                xValue: 1.15,
                yValue: 1.15,
                locked: true,
              },
            },
            {
              id: "a-34-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".author-item-content-grid",
                  selectorGuids: ["e6576692-f78d-b9a4-2ac6-a40cc4b86681"],
                },
                value: 0.5,
                unit: "",
              },
            },
            {
              id: "a-34-n-9",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-left-panel",
                  selectorGuids: ["7997d62b-8286-4fbb-2094-045d6343e574"],
                },
                xValue: 1,
                locked: false,
              },
            },
            {
              id: "a-34-n-10",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-btm-panel",
                  selectorGuids: ["030130fc-3c92-efc2-b074-48f20f6803e7"],
                },
                xValue: null,
                yValue: 1,
                locked: false,
              },
            },
            {
              id: "a-34-n-11",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-top-panel",
                  selectorGuids: ["45304523-a0d2-77d2-4b6c-cc7b0cc29513"],
                },
                xValue: null,
                yValue: 1,
                locked: false,
              },
            },
            {
              id: "a-34-n-12",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-right-panel",
                  selectorGuids: ["1b695a80-c6da-559c-bc7b-5f63b10345cb"],
                },
                xValue: 1,
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705312929887,
    },
    "a-35": {
      id: "a-35",
      title: "Author Card - Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-35-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-moves",
                  selectorGuids: ["2e03d44e-285e-d2b8-a027-41a2df69b5ad"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-35-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-cover-absolute",
                  selectorGuids: ["de72b46c-a96c-1c7e-000f-91e09b13bd08"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-35-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".author-item-content-grid",
                  selectorGuids: ["e6576692-f78d-b9a4-2ac6-a40cc4b86681"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-35-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-right-panel",
                  selectorGuids: ["1b695a80-c6da-559c-bc7b-5f63b10345cb"],
                },
                xValue: 0,
                locked: false,
              },
            },
            {
              id: "a-35-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-left-panel",
                  selectorGuids: ["7997d62b-8286-4fbb-2094-045d6343e574"],
                },
                xValue: 0,
                locked: false,
              },
            },
            {
              id: "a-35-n-6",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-top-panel",
                  selectorGuids: ["45304523-a0d2-77d2-4b6c-cc7b0cc29513"],
                },
                xValue: null,
                yValue: 0,
                locked: false,
              },
            },
            {
              id: "a-35-n-7",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-btm-panel",
                  selectorGuids: ["030130fc-3c92-efc2-b074-48f20f6803e7"],
                },
                xValue: null,
                yValue: 0,
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1705312929887,
    },
    "a-36": {
      id: "a-36",
      title: "Authors Hero - In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-36-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".text-word-caps",
                  selectorGuids: ["74736a91-373e-a6bb-a35a-2e13ed1a9ed8"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-36-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-cover-absolute",
                  selectorGuids: ["de72b46c-a96c-1c7e-000f-91e09b13bd08"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-36-n-11",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-cover-absolute",
                  selectorGuids: ["de72b46c-a96c-1c7e-000f-91e09b13bd08"],
                },
                xValue: 1.2,
                yValue: 1.2,
                locked: true,
              },
            },
            {
              id: "a-36-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".text-word-caps",
                  selectorGuids: ["74736a91-373e-a6bb-a35a-2e13ed1a9ed8"],
                },
                yValue: 2,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-36-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".authors-hero-subtitle",
                  selectorGuids: ["0c02b55f-5f13-3413-2806-a409be65bc1a"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-36-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".authors-hero-subtitle",
                  selectorGuids: ["0c02b55f-5f13-3413-2806-a409be65bc1a"],
                },
                yValue: 2,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-36-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".text-word-caps",
                  selectorGuids: ["74736a91-373e-a6bb-a35a-2e13ed1a9ed8"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-36-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".text-word-caps",
                  selectorGuids: ["74736a91-373e-a6bb-a35a-2e13ed1a9ed8"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-36-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 1200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-cover-absolute",
                  selectorGuids: ["de72b46c-a96c-1c7e-000f-91e09b13bd08"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-36-n-14",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 1200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-cover-absolute",
                  selectorGuids: ["de72b46c-a96c-1c7e-000f-91e09b13bd08"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-36-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 150,
                easing: "outCubic",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".authors-hero-subtitle",
                  selectorGuids: ["0c02b55f-5f13-3413-2806-a409be65bc1a"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-36-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 150,
                easing: "outCubic",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".authors-hero-subtitle",
                  selectorGuids: ["0c02b55f-5f13-3413-2806-a409be65bc1a"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705415537330,
    },
    "a-39": {
      id: "a-39",
      title: "Manifesto Read More Trigger",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-39-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".manifesto-content-hidden-wrap",
                  selectorGuids: ["d4b258fb-4bed-af45-4feb-fa6e53045b59"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-39-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".manifesto-content-hidden-wrap",
                  selectorGuids: ["d4b258fb-4bed-af45-4feb-fa6e53045b59"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-39-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 800,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".manifesto-content-hidden-wrap",
                  selectorGuids: ["d4b258fb-4bed-af45-4feb-fa6e53045b59"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-39-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 800,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".manifesto-content-hidden-wrap",
                  selectorGuids: ["d4b258fb-4bed-af45-4feb-fa6e53045b59"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-39-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "65b78791ab0af1867317c02d|475c9cf8-d2a6-f6f9-5233-d08720b1fedb",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-39-n-8",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: true,
                  id: "65b78791ab0af1867317c02d|475c9cf8-d2a6-f6f9-5233-d08720b1fedb",
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1706527981822,
    },
    "a-40": {
      id: "a-40",
      title: "Value Item - Opens",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-40-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".value-desc-wrap",
                  selectorGuids: ["114c083a-bb59-191e-d27b-640226a85a4d"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-40-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".value-desc-wrap",
                  selectorGuids: ["114c083a-bb59-191e-d27b-640226a85a4d"],
                },
                yValue: 3,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-40-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".value-desc-wrap",
                  selectorGuids: ["114c083a-bb59-191e-d27b-640226a85a4d"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-40-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".value-desc-wrap",
                  selectorGuids: ["114c083a-bb59-191e-d27b-640226a85a4d"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-40-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".value-desc-wrap",
                  selectorGuids: ["114c083a-bb59-191e-d27b-640226a85a4d"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-40-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".value-icon-line.vertical",
                  selectorGuids: [
                    "07580bb9-1490-423b-4417-cf426c38e09f",
                    "e4c83d30-e9ae-014a-fa41-95b0acd117a7",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-40-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".value-icon-wrap",
                  selectorGuids: ["d0aa8c1a-2f3a-da19-413a-7cf0e049a225"],
                },
                zValue: 180,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-40-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".value-desc-wrap",
                  selectorGuids: ["114c083a-bb59-191e-d27b-640226a85a4d"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1706529136527,
    },
    "a-41": {
      id: "a-41",
      title: "Value Item - Close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-41-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".value-desc-wrap",
                  selectorGuids: ["114c083a-bb59-191e-d27b-640226a85a4d"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-41-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".value-desc-wrap",
                  selectorGuids: ["114c083a-bb59-191e-d27b-640226a85a4d"],
                },
                yValue: 3,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-41-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".value-desc-wrap",
                  selectorGuids: ["114c083a-bb59-191e-d27b-640226a85a4d"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-41-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".value-icon-line.vertical",
                  selectorGuids: [
                    "07580bb9-1490-423b-4417-cf426c38e09f",
                    "e4c83d30-e9ae-014a-fa41-95b0acd117a7",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-41-n-3",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".value-icon-wrap",
                  selectorGuids: ["d0aa8c1a-2f3a-da19-413a-7cf0e049a225"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1706529136527,
    },
    "a-42": {
      id: "a-42",
      title: "Value Item - Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-42-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".value-number-wrap",
                  selectorGuids: ["a82311f0-8f02-adb6-dc74-df3d5486701e"],
                },
                xValue: 1,
                xUnit: "em",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-42-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".value-trigger-wrap",
                  selectorGuids: ["c06aa35d-bdde-8a6e-6839-aeed4b63ae0f"],
                },
                xValue: -1,
                xUnit: "em",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1706529409526,
    },
    "a-43": {
      id: "a-43",
      title: "Value Item - Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-43-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".value-number-wrap",
                  selectorGuids: ["a82311f0-8f02-adb6-dc74-df3d5486701e"],
                },
                xValue: 0,
                xUnit: "em",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-43-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".value-trigger-wrap",
                  selectorGuids: ["c06aa35d-bdde-8a6e-6839-aeed4b63ae0f"],
                },
                xValue: 0,
                xUnit: "em",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1706529409526,
    },
    "a-44": {
      id: "a-44",
      title: "Story Hero - In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-44-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-cover.div-relative",
                  selectorGuids: [
                    "c359bbaf-6c80-996e-622e-68a341ffba0a",
                    "b723b243-7de9-2b41-d818-b564b157c426",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-44-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-cover.div-relative",
                  selectorGuids: [
                    "c359bbaf-6c80-996e-622e-68a341ffba0a",
                    "b723b243-7de9-2b41-d818-b564b157c426",
                  ],
                },
                xValue: 1.25,
                yValue: 1.25,
                locked: true,
              },
            },
            {
              id: "a-44-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".story-hero-content-container",
                  selectorGuids: ["b7ce3ef4-70a2-a5fb-f025-c3e5498998a9"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-44-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".div-flex.center",
                  selectorGuids: [
                    "1bc1970a-3e93-538f-9a61-fec5a8526db5",
                    "831391f3-2761-582e-7b02-d899669ea9ae",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-44-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".story-hero-content-absolute-wrap",
                  selectorGuids: ["de25e2a9-65d2-591c-d5c0-c2d776df951c"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-44-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".div-flex.center",
                  selectorGuids: [
                    "1bc1970a-3e93-538f-9a61-fec5a8526db5",
                    "831391f3-2761-582e-7b02-d899669ea9ae",
                  ],
                },
                yValue: 2,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-44-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".story-hero-content-absolute-wrap",
                  selectorGuids: ["de25e2a9-65d2-591c-d5c0-c2d776df951c"],
                },
                yValue: 2,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-44-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".story-hero-content-container",
                  selectorGuids: ["b7ce3ef4-70a2-a5fb-f025-c3e5498998a9"],
                },
                yValue: 2,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-44-n-17",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 2000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-cover.div-relative",
                  selectorGuids: [
                    "c359bbaf-6c80-996e-622e-68a341ffba0a",
                    "b723b243-7de9-2b41-d818-b564b157c426",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-44-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-cover.div-relative",
                  selectorGuids: [
                    "c359bbaf-6c80-996e-622e-68a341ffba0a",
                    "b723b243-7de9-2b41-d818-b564b157c426",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-44-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".story-hero-content-container",
                  selectorGuids: ["b7ce3ef4-70a2-a5fb-f025-c3e5498998a9"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-44-n-19",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".story-hero-content-container",
                  selectorGuids: ["b7ce3ef4-70a2-a5fb-f025-c3e5498998a9"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-44-n-20",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".story-hero-content-absolute-wrap",
                  selectorGuids: ["de25e2a9-65d2-591c-d5c0-c2d776df951c"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-44-n-21",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".story-hero-content-absolute-wrap",
                  selectorGuids: ["de25e2a9-65d2-591c-d5c0-c2d776df951c"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-44-n-23",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".div-flex.center",
                  selectorGuids: [
                    "1bc1970a-3e93-538f-9a61-fec5a8526db5",
                    "831391f3-2761-582e-7b02-d899669ea9ae",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-44-n-22",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".div-flex.center",
                  selectorGuids: [
                    "1bc1970a-3e93-538f-9a61-fec5a8526db5",
                    "831391f3-2761-582e-7b02-d899669ea9ae",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705415537330,
    },
    "a-45": {
      id: "a-45",
      title: "Category Hero - In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-45-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".category-background-wrap",
                  selectorGuids: ["03c2c98f-bd9e-1d6b-7fca-693421bcaecf"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-45-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".category-background-wrap",
                  selectorGuids: ["03c2c98f-bd9e-1d6b-7fca-693421bcaecf"],
                },
                xValue: 1.25,
                yValue: 1.25,
                locked: true,
              },
            },
            {
              id: "a-45-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".category-hero-wrap",
                  selectorGuids: ["9b444eaa-b530-8e45-0470-72462c32a79e"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-45-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".category-hero-wrap",
                  selectorGuids: ["9b444eaa-b530-8e45-0470-72462c32a79e"],
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-45-n-17",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".category-hero-desc-grid",
                  selectorGuids: ["ad0d57eb-6703-6c65-5d2e-14e1324b7205"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-45-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".category-hero-desc-grid",
                  selectorGuids: ["ad0d57eb-6703-6c65-5d2e-14e1324b7205"],
                },
                yValue: 3,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-45-n-9",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 2000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".category-background-wrap",
                  selectorGuids: ["03c2c98f-bd9e-1d6b-7fca-693421bcaecf"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-45-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".category-background-wrap",
                  selectorGuids: ["03c2c98f-bd9e-1d6b-7fca-693421bcaecf"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-45-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "outExpo",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".category-hero-wrap",
                  selectorGuids: ["9b444eaa-b530-8e45-0470-72462c32a79e"],
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-45-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "outExpo",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".category-hero-wrap",
                  selectorGuids: ["9b444eaa-b530-8e45-0470-72462c32a79e"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-45-n-16",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 250,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".category-hero-desc-grid",
                  selectorGuids: ["ad0d57eb-6703-6c65-5d2e-14e1324b7205"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-45-n-15",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 250,
                easing: "outQuad",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".category-hero-desc-grid",
                  selectorGuids: ["ad0d57eb-6703-6c65-5d2e-14e1324b7205"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705415537330,
    },
    "a-46": {
      id: "a-46",
      title: "Title Marquee Loops",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-46-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 12000,
                target: {
                  selector: ".hero-marquee._1",
                  selectorGuids: [
                    "a2b64aae-225c-ee72-c54f-f45ced8be445",
                    "652e3340-96e8-3c0b-2eea-f2b183b138fa",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-46-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 12000,
                target: {
                  selector: ".hero-marquee._2",
                  selectorGuids: [
                    "a2b64aae-225c-ee72-c54f-f45ced8be445",
                    "f98932d6-c4af-afa1-aaff-29fb63f4a703",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-46-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".hero-marquee._1",
                  selectorGuids: [
                    "a2b64aae-225c-ee72-c54f-f45ced8be445",
                    "652e3340-96e8-3c0b-2eea-f2b183b138fa",
                  ],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-46-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 12000,
                target: {
                  selector: ".hero-marquee._1",
                  selectorGuids: [
                    "a2b64aae-225c-ee72-c54f-f45ced8be445",
                    "652e3340-96e8-3c0b-2eea-f2b183b138fa",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-46-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 12000,
                target: {
                  selector: ".hero-marquee._2",
                  selectorGuids: [
                    "a2b64aae-225c-ee72-c54f-f45ced8be445",
                    "f98932d6-c4af-afa1-aaff-29fb63f4a703",
                  ],
                },
                xValue: -200,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-46-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".hero-marquee._2",
                  selectorGuids: [
                    "a2b64aae-225c-ee72-c54f-f45ced8be445",
                    "f98932d6-c4af-afa1-aaff-29fb63f4a703",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1705399575597,
    },
    "a-55": {
      id: "a-55",
      title: "Article Item Hero - In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-55-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".article-hero-bg",
                  selectorGuids: ["8b120d37-eabc-a65f-a9be-cf04522ea5fd"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-55-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".article-hero-bg",
                  selectorGuids: ["8b120d37-eabc-a65f-a9be-cf04522ea5fd"],
                },
                xValue: 1.25,
                yValue: 1.25,
                locked: true,
              },
            },
            {
              id: "a-55-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tag-text-style.category-white",
                  selectorGuids: [
                    "e04f62c7-e3e4-9c87-d911-9edecf31f043",
                    "a17aef22-8076-9c1d-fe63-91d0d9a2118a",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-55-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tag-text-style.category-white",
                  selectorGuids: [
                    "e04f62c7-e3e4-9c87-d911-9edecf31f043",
                    "a17aef22-8076-9c1d-fe63-91d0d9a2118a",
                  ],
                },
                yValue: 2,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-55-n-14",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".article-infos-wrap",
                  selectorGuids: ["7bfd9d6a-945a-86ce-b192-01aac2d30bdc"],
                },
                yValue: 2,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-55-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".article-infos-wrap",
                  selectorGuids: ["7bfd9d6a-945a-86ce-b192-01aac2d30bdc"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-55-n-20",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".title-medium.text-align-center.text-word-caps",
                  selectorGuids: [
                    "6f4e2fdb-4695-5b75-5e80-e69dbf6a9016",
                    "9e138bbf-460b-6eeb-9e4a-f7601a2c7944",
                    "8a02453c-0581-c95f-1fc7-581daa7dc521",
                  ],
                },
                yValue: 2,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-55-n-17",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".title-medium.text-align-center.text-word-caps",
                  selectorGuids: [
                    "6f4e2fdb-4695-5b75-5e80-e69dbf6a9016",
                    "9e138bbf-460b-6eeb-9e4a-f7601a2c7944",
                    "8a02453c-0581-c95f-1fc7-581daa7dc521",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-55-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-large-icon.margin-top",
                  selectorGuids: [
                    "15d503d8-4cb5-71c2-841d-dd0e9fb17b76",
                    "dfec4394-3bef-07f3-9561-f5c5e07dceb7",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-55-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-large-icon.margin-top",
                  selectorGuids: [
                    "15d503d8-4cb5-71c2-841d-dd0e9fb17b76",
                    "dfec4394-3bef-07f3-9561-f5c5e07dceb7",
                  ],
                },
                yValue: 2,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-55-n-9",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 2000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".article-hero-bg",
                  selectorGuids: ["8b120d37-eabc-a65f-a9be-cf04522ea5fd"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-55-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".article-hero-bg",
                  selectorGuids: ["8b120d37-eabc-a65f-a9be-cf04522ea5fd"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-55-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tag-text-style.category-white",
                  selectorGuids: [
                    "e04f62c7-e3e4-9c87-d911-9edecf31f043",
                    "a17aef22-8076-9c1d-fe63-91d0d9a2118a",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-55-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tag-text-style.category-white",
                  selectorGuids: [
                    "e04f62c7-e3e4-9c87-d911-9edecf31f043",
                    "a17aef22-8076-9c1d-fe63-91d0d9a2118a",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-55-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".title-medium.text-align-center.text-word-caps",
                  selectorGuids: [
                    "6f4e2fdb-4695-5b75-5e80-e69dbf6a9016",
                    "9e138bbf-460b-6eeb-9e4a-f7601a2c7944",
                    "8a02453c-0581-c95f-1fc7-581daa7dc521",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-55-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".title-medium.text-align-center.text-word-caps",
                  selectorGuids: [
                    "6f4e2fdb-4695-5b75-5e80-e69dbf6a9016",
                    "9e138bbf-460b-6eeb-9e4a-f7601a2c7944",
                    "8a02453c-0581-c95f-1fc7-581daa7dc521",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-55-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".article-infos-wrap",
                  selectorGuids: ["7bfd9d6a-945a-86ce-b192-01aac2d30bdc"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-55-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".article-infos-wrap",
                  selectorGuids: ["7bfd9d6a-945a-86ce-b192-01aac2d30bdc"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-55-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-large-icon.margin-top",
                  selectorGuids: [
                    "15d503d8-4cb5-71c2-841d-dd0e9fb17b76",
                    "dfec4394-3bef-07f3-9561-f5c5e07dceb7",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-55-n-24",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-large-icon.margin-top",
                  selectorGuids: [
                    "15d503d8-4cb5-71c2-841d-dd0e9fb17b76",
                    "dfec4394-3bef-07f3-9561-f5c5e07dceb7",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705415537330,
    },
    "a-48": {
      id: "a-48",
      title: "Article - Fixed Elements In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-48-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  selector: ".article-scroll-indicator",
                  selectorGuids: ["07f34153-62e1-d4f2-a499-dec40f51d3ca"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-48-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".article-scroll-indicator",
                  selectorGuids: ["07f34153-62e1-d4f2-a499-dec40f51d3ca"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-48-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".article-social-share",
                  selectorGuids: ["f8a2bce3-d455-834f-abce-be6aaed9a0ec"],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-48-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  selector: ".article-social-share",
                  selectorGuids: ["f8a2bce3-d455-834f-abce-be6aaed9a0ec"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-48-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 600,
                target: {
                  selector: ".article-scroll-indicator",
                  selectorGuids: ["07f34153-62e1-d4f2-a499-dec40f51d3ca"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-48-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 600,
                target: {
                  selector: ".article-scroll-indicator",
                  selectorGuids: ["07f34153-62e1-d4f2-a499-dec40f51d3ca"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-48-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 600,
                target: {
                  selector: ".article-social-share",
                  selectorGuids: ["f8a2bce3-d455-834f-abce-be6aaed9a0ec"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-48-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 600,
                target: {
                  selector: ".article-social-share",
                  selectorGuids: ["f8a2bce3-d455-834f-abce-be6aaed9a0ec"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1706867353609,
    },
    "a-49": {
      id: "a-49",
      title: "Article - Fixed Elements Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-49-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 400,
                target: {
                  selector: ".article-scroll-indicator",
                  selectorGuids: ["07f34153-62e1-d4f2-a499-dec40f51d3ca"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-49-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 400,
                target: {
                  selector: ".article-social-share",
                  selectorGuids: ["f8a2bce3-d455-834f-abce-be6aaed9a0ec"],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-49-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 400,
                target: {
                  selector: ".article-social-share",
                  selectorGuids: ["f8a2bce3-d455-834f-abce-be6aaed9a0ec"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-49-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 400,
                target: {
                  selector: ".article-scroll-indicator",
                  selectorGuids: ["07f34153-62e1-d4f2-a499-dec40f51d3ca"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1706867353609,
    },
    "a-50": {
      id: "a-50",
      title: "Article Scroll Indicator - Scales",
      continuousParameterGroups: [
        {
          id: "a-50-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 10,
              actionItems: [
                {
                  id: "a-50-n",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-indicator-line",
                      selectorGuids: ["acdda2cb-f1cd-553b-cfa9-49f37c2754ab"],
                    },
                    yValue: 0,
                    locked: false,
                  },
                },
              ],
            },
            {
              keyframe: 85,
              actionItems: [
                {
                  id: "a-50-n-2",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-indicator-line",
                      selectorGuids: ["acdda2cb-f1cd-553b-cfa9-49f37c2754ab"],
                    },
                    yValue: 1,
                    locked: false,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1706867873836,
    },
    "a-51": {
      id: "a-51",
      title: "Button Icon - Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-51-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-large-icon-bg",
                  selectorGuids: ["e62d46eb-f64e-fc6a-67ba-516703b8782d"],
                },
                xValue: 1.2,
                yValue: 1.2,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1706868239944,
    },
    "a-52": {
      id: "a-52",
      title: "Button Icon - Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-52-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-large-icon-bg",
                  selectorGuids: ["e62d46eb-f64e-fc6a-67ba-516703b8782d"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1706868239944,
    },
    "a-56": {
      id: "a-56",
      title: "Nav - On Load",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-56-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav",
                  selectorGuids: ["a8d5d67d-03ce-b67b-e21a-79ffe8517071"],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-56-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".fixed-button-wrap",
                  selectorGuids: ["fe043591-8e18-fbc5-5ea4-8b35655e4354"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-56-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".fixed-button-wrap",
                  selectorGuids: ["fe043591-8e18-fbc5-5ea4-8b35655e4354"],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-56-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav",
                  selectorGuids: ["a8d5d67d-03ce-b67b-e21a-79ffe8517071"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-56-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  selector: ".nav",
                  selectorGuids: ["a8d5d67d-03ce-b67b-e21a-79ffe8517071"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-56-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  selector: ".nav",
                  selectorGuids: ["a8d5d67d-03ce-b67b-e21a-79ffe8517071"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-56-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  selector: ".fixed-button-wrap",
                  selectorGuids: ["fe043591-8e18-fbc5-5ea4-8b35655e4354"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-56-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  selector: ".fixed-button-wrap",
                  selectorGuids: ["fe043591-8e18-fbc5-5ea4-8b35655e4354"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1706869094167,
    },
    "a-57": {
      id: "a-57",
      title: "Footer - In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-57-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".nav",
                  selectorGuids: ["a8d5d67d-03ce-b67b-e21a-79ffe8517071"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-57-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".nav",
                  selectorGuids: ["a8d5d67d-03ce-b67b-e21a-79ffe8517071"],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1706869597087,
    },
    "a-58": {
      id: "a-58",
      title: "Footer - Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-58-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".nav",
                  selectorGuids: ["a8d5d67d-03ce-b67b-e21a-79ffe8517071"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-58-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".nav",
                  selectorGuids: ["a8d5d67d-03ce-b67b-e21a-79ffe8517071"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1706869597087,
    },
    "a-61": {
      id: "a-61",
      title: "Author Item Hero - In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-61-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".author-hero-img",
                  selectorGuids: ["38896384-dcd2-87e1-50a7-2672290140a2"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-61-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".author-hero-img",
                  selectorGuids: ["38896384-dcd2-87e1-50a7-2672290140a2"],
                },
                xValue: 0.4,
                yValue: 0.4,
                locked: true,
              },
            },
            {
              id: "a-61-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".about-hero-wrap",
                  selectorGuids: ["eccbf5af-0758-fcba-56cd-ea5d3e9ef895"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-61-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".about-hero-wrap",
                  selectorGuids: ["eccbf5af-0758-fcba-56cd-ea5d3e9ef895"],
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-61-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 600,
                target: {
                  selector: ".author-hero-desc-grid",
                  selectorGuids: ["3d2102ef-142d-a488-5ea6-f6a22c44cabe"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-61-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 600,
                target: {
                  selector: ".author-hero-desc-grid",
                  selectorGuids: ["3d2102ef-142d-a488-5ea6-f6a22c44cabe"],
                },
                yValue: 3,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-61-n-7",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 2000,
                target: {
                  selector: ".author-hero-img",
                  selectorGuids: ["38896384-dcd2-87e1-50a7-2672290140a2"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-61-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1400,
                target: {
                  selector: ".author-hero-img",
                  selectorGuids: ["38896384-dcd2-87e1-50a7-2672290140a2"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-61-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "outExpo",
                duration: 1000,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".about-hero-wrap",
                  selectorGuids: ["eccbf5af-0758-fcba-56cd-ea5d3e9ef895"],
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-61-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "outExpo",
                duration: 1000,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".about-hero-wrap",
                  selectorGuids: ["eccbf5af-0758-fcba-56cd-ea5d3e9ef895"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-61-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 250,
                easing: "outExpo",
                duration: 800,
                target: {
                  selector: ".author-hero-desc-grid",
                  selectorGuids: ["3d2102ef-142d-a488-5ea6-f6a22c44cabe"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-61-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 250,
                easing: "outQuad",
                duration: 800,
                target: {
                  selector: ".author-hero-desc-grid",
                  selectorGuids: ["3d2102ef-142d-a488-5ea6-f6a22c44cabe"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705415537330,
    },
    "a-66": {
      id: "a-66",
      title: "Button Secondary - Hover in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-66-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon-absolute",
                  selectorGuids: ["98d7ae05-8a4f-ce6e-7f66-204c9d554877"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-66-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tag-text-style.text-color-black",
                  selectorGuids: [
                    "e04f62c7-e3e4-9c87-d911-9edecf31f043",
                    "fc37fa13-da8a-af8e-4183-3546c16d0468",
                  ],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-66-n-3",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button.secondary",
                  selectorGuids: [
                    "3a5c0720-5329-94d8-cd17-77657151b47b",
                    "38635765-556c-6244-a971-4bb37e2b5231",
                  ],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-66-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon-relative",
                  selectorGuids: ["79c7979c-620b-87af-8f02-8b73fee3ea17"],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-66-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon-absolute",
                  selectorGuids: ["98d7ae05-8a4f-ce6e-7f66-204c9d554877"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705309561924,
    },
    "a-67": {
      id: "a-67",
      title: "Button Secondary - Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-67-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tag-text-style.text-color-black",
                  selectorGuids: [
                    "e04f62c7-e3e4-9c87-d911-9edecf31f043",
                    "fc37fa13-da8a-af8e-4183-3546c16d0468",
                  ],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-67-n-2",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button.secondary",
                  selectorGuids: [
                    "3a5c0720-5329-94d8-cd17-77657151b47b",
                    "38635765-556c-6244-a971-4bb37e2b5231",
                  ],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-67-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon-relative",
                  selectorGuids: ["79c7979c-620b-87af-8f02-8b73fee3ea17"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-67-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-icon-absolute",
                  selectorGuids: ["98d7ae05-8a4f-ce6e-7f66-204c9d554877"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1705309561924,
    },
    "a-68": {
      id: "a-68",
      title: "Category List Item - Scrolls",
      continuousParameterGroups: [
        {
          id: "a-68-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-68-n",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".img-left-panel.big",
                      selectorGuids: [
                        "7997d62b-8286-4fbb-2094-045d6343e574",
                        "f7862b70-6ec9-e118-ffe1-c04c1552f2a3",
                      ],
                    },
                    xValue: 1,
                    locked: false,
                  },
                },
                {
                  id: "a-68-n-3",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".img-right-panel.big",
                      selectorGuids: [
                        "1b695a80-c6da-559c-bc7b-5f63b10345cb",
                        "c1327d57-c70e-0e42-ce8c-e2cab9aa45bc",
                      ],
                    },
                    xValue: 1,
                    locked: false,
                  },
                },
                {
                  id: "a-68-n-5",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".img-top-panel.big",
                      selectorGuids: [
                        "45304523-a0d2-77d2-4b6c-cc7b0cc29513",
                        "949e5423-0d1b-7f92-0286-8780757c948f",
                      ],
                    },
                    xValue: null,
                    yValue: 1,
                    locked: false,
                  },
                },
                {
                  id: "a-68-n-7",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".img-btm-panel.big",
                      selectorGuids: [
                        "030130fc-3c92-efc2-b074-48f20f6803e7",
                        "15164b44-d4f0-093d-f8cc-1fad3bff9397",
                      ],
                    },
                    xValue: null,
                    yValue: 1,
                    locked: false,
                  },
                },
              ],
            },
            {
              keyframe: 50,
              actionItems: [
                {
                  id: "a-68-n-2",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".img-left-panel.big",
                      selectorGuids: [
                        "7997d62b-8286-4fbb-2094-045d6343e574",
                        "f7862b70-6ec9-e118-ffe1-c04c1552f2a3",
                      ],
                    },
                    xValue: 0,
                    locked: false,
                  },
                },
              ],
            },
            {
              keyframe: 75,
              actionItems: [
                {
                  id: "a-68-n-4",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".img-right-panel.big",
                      selectorGuids: [
                        "1b695a80-c6da-559c-bc7b-5f63b10345cb",
                        "c1327d57-c70e-0e42-ce8c-e2cab9aa45bc",
                      ],
                    },
                    xValue: 0,
                    locked: false,
                  },
                },
                {
                  id: "a-68-n-6",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".img-top-panel.big",
                      selectorGuids: [
                        "45304523-a0d2-77d2-4b6c-cc7b0cc29513",
                        "949e5423-0d1b-7f92-0286-8780757c948f",
                      ],
                    },
                    xValue: null,
                    yValue: 0,
                    locked: false,
                  },
                },
                {
                  id: "a-68-n-8",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".img-btm-panel.big",
                      selectorGuids: [
                        "030130fc-3c92-efc2-b074-48f20f6803e7",
                        "15164b44-d4f0-093d-f8cc-1fad3bff9397",
                      ],
                    },
                    xValue: null,
                    yValue: 0,
                    locked: false,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1707128064412,
    },
    "a-69": {
      id: "a-69",
      title: "Category Item - Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-69-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".category-item-bg-wrap",
                  selectorGuids: ["75ea84d5-33ed-eddf-e612-a71eb739469b"],
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1707128242106,
    },
    "a-70": {
      id: "a-70",
      title: "Category Item - Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-70-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".category-item-bg-wrap",
                  selectorGuids: ["75ea84d5-33ed-eddf-e612-a71eb739469b"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1707128242106,
    },
    "a-71": {
      id: "a-71",
      title: "Categories List Hero - In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-71-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".categories-hero-heading-wrap",
                  selectorGuids: ["2cf6eca8-b6be-93e9-d202-f9918fe1e025"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-71-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".categories-hero-heading-wrap",
                  selectorGuids: ["2cf6eca8-b6be-93e9-d202-f9918fe1e025"],
                },
                yValue: 3,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".div-flex.center",
                  selectorGuids: [
                    "1bc1970a-3e93-538f-9a61-fec5a8526db5",
                    "831391f3-2761-582e-7b02-d899669ea9ae",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-71-n-14",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".div-flex.center",
                  selectorGuids: [
                    "1bc1970a-3e93-538f-9a61-fec5a8526db5",
                    "831391f3-2761-582e-7b02-d899669ea9ae",
                  ],
                },
                yValue: 3,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".categories-cms-list",
                  selectorGuids: ["fcd2c27a-b809-23cc-7486-32b196333254"],
                },
                yValue: 3,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-17",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".categories-cms-list",
                  selectorGuids: ["fcd2c27a-b809-23cc-7486-32b196333254"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-71-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".categories-hero-heading-wrap",
                  selectorGuids: ["2cf6eca8-b6be-93e9-d202-f9918fe1e025"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-71-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".categories-hero-heading-wrap",
                  selectorGuids: ["2cf6eca8-b6be-93e9-d202-f9918fe1e025"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-16",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".div-flex.center",
                  selectorGuids: [
                    "1bc1970a-3e93-538f-9a61-fec5a8526db5",
                    "831391f3-2761-582e-7b02-d899669ea9ae",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-15",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "outQuad",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".div-flex.center",
                  selectorGuids: [
                    "1bc1970a-3e93-538f-9a61-fec5a8526db5",
                    "831391f3-2761-582e-7b02-d899669ea9ae",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-71-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".categories-cms-list",
                  selectorGuids: ["fcd2c27a-b809-23cc-7486-32b196333254"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "outQuad",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".categories-cms-list",
                  selectorGuids: ["fcd2c27a-b809-23cc-7486-32b196333254"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705415537330,
    },
    "a-72": {
      id: "a-72",
      title: "Categories List Hero - Scrolls",
      continuousParameterGroups: [
        {
          id: "a-72-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 50,
              actionItems: [
                {
                  id: "a-72-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".categories-cms-list",
                      selectorGuids: ["fcd2c27a-b809-23cc-7486-32b196333254"],
                    },
                    xValue: 0,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-72-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".categories-cms-list",
                      selectorGuids: ["fcd2c27a-b809-23cc-7486-32b196333254"],
                    },
                    xValue: -50,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1707138028876,
    },
    "a-3": {
      id: "a-3",
      title: "Fade in - Medium",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "65c0dca1595807266e807370|05074101-e876-75c0-4566-09e703ad83ac",
                },
                yValue: 4,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-3-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "65c0dca1595807266e807370|05074101-e876-75c0-4566-09e703ad83ac",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-3-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "65c0dca1595807266e807370|05074101-e876-75c0-4566-09e703ad83ac",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-3-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "65c0dca1595807266e807370|05074101-e876-75c0-4566-09e703ad83ac",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1645878315623,
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
