function d(e) {
  var t, i;
  return this.length ? (t = this[0], t.ownerDocument ? i = t.ownerDocument : (i = t, t = i.documentElement), null == e ? i.exitFullscreen || i.webkitExitFullscreen || i.webkitCancelFullScreen || i.msExitFullscreen || i.mozCancelFullScreen ? (e = !!(i.fullscreenElement || i.msFullscreenElement || i.webkitIsFullScreen || i.mozFullScreen), e ? i.fullscreenElement || i.webkitFullscreenElement || i.webkitCurrentFullScreenElement || i.msFullscreenElement || i.mozFullScreenElement || e : e) : null : (e ? (e = t.requestFullscreen || t.webkitRequestFullscreen || t.webkitRequestFullScreen || t.msRequestFullscreen || t.mozRequestFullScreen) && e.call(t) : (e = i.exitFullscreen || i.webkitExitFullscreen || i.webkitCancelFullScreen || i.msExitFullscreen || i.mozCancelFullScreen) && e.call(i), this)) : this
}
window.Modernizr = function(e, t, i) {
  function n(e) {
    b.cssText = e
  }

  function s(e, t) {
    return n(k.join(e + ";") + (t || ""))
  }

  function o(e, t) {
    return typeof e === t
  }

  function a(e, t) {
    return !!~("" + e).indexOf(t)
  }

  function r(e, t) {
    for (var n in e) {
      var s = e[n];
      if (!a(s, "-") && b[s] !== i) return "pfx" == t ? s : !0
    }
    return !1
  }

  function l(e, t, n) {
    for (var s in e) {
      var a = t[e[s]];
      if (a !== i) return n === !1 ? e[s] : o(a, "function") ? a.bind(n || t) : a
    }
    return !1
  }

  function c(e, t, i) {
    var n = e.charAt(0).toUpperCase() + e.slice(1),
    s = (e + " " + T.join(n + " ") + n).split(" ");
    return o(t, "string") || o(t, "undefined") ? r(s, t) : (s = (e + " " + D.join(n + " ") + n).split(" "), l(s, t, i))
  }

  function u() {
    f.input = function(i) {
      for (var n = 0, s = i.length; s > n; n++) M[i[n]] = i[n] in w;
      return M.list && (M.list = !!t.createElement("datalist") && !!e.HTMLDataListElement), M
    }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), f.inputtypes = function(e) {
      for (var n, s, o, a = 0, r = e.length; r > a; a++) w.setAttribute("type", s = e[a]), n = "text" !== w.type, n && (w.value = _, w.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(s) && w.style.WebkitAppearance !== i ? (g.appendChild(w), o = t.defaultView, n = o.getComputedStyle && "textfield" !== o.getComputedStyle(w, null).WebkitAppearance && 0 !== w.offsetHeight, g.removeChild(w)) : /^(search|tel)$/.test(s) || (n = /^(url|email)$/.test(s) ? w.checkValidity && w.checkValidity() === !1 : w.value != _)), P[e[a]] = !!n;
      return P
    }("search tel url email datetime date month week time datetime-local number range color".split(" "))
  }
  var h, d, p = "2.8.3",
  f = {},
  m = !0,
  g = t.documentElement,
  v = "modernizr",
  y = t.createElement(v),
  b = y.style,
  w = t.createElement("input"),
  _ = ":)",
  x = {}.toString,
  k = " -webkit- -moz- -o- -ms- ".split(" "),
  C = "Webkit Moz O ms",
  T = C.split(" "),
  D = C.toLowerCase().split(" "),
  S = {
    svg: "http://www.w3.org/2000/svg"
  },
  E = {},
  P = {},
  M = {},
  I = [],
  $ = I.slice,
  A = function(e, i, n, s) {
    var o, a, r, l, c = t.createElement("div"),
    u = t.body,
    h = u || t.createElement("body");
    if (parseInt(n, 10))
    for (; n--;) r = t.createElement("div"), r.id = s ? s[n] : v + (n + 1), c.appendChild(r);
    return o = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), c.id = v, (u ? c : h).innerHTML += o, h.appendChild(c), u || (h.style.background = "", h.style.overflow = "hidden", l = g.style.overflow, g.style.overflow = "hidden", g.appendChild(h)), a = i(c, e), u ? c.parentNode.removeChild(c) : (h.parentNode.removeChild(h), g.style.overflow = l), !!a
  },
  N = function() {
    function e(e, s) {
      s = s || t.createElement(n[e] || "div"), e = "on" + e;
      var a = e in s;
      return a || (s.setAttribute || (s = t.createElement("div")), s.setAttribute && s.removeAttribute && (s.setAttribute(e, ""), a = o(s[e], "function"), o(s[e], "undefined") || (s[e] = i), s.removeAttribute(e))), s = null, a
    }
    var n = {
      select: "input",
      change: "input",
      submit: "form",
      reset: "form",
      error: "img",
      load: "img",
      abort: "img"
    };
    return e
  }(),
  j = {}.hasOwnProperty;
  d = o(j, "undefined") || o(j.call, "undefined") ? function(e, t) {
    return t in e && o(e.constructor.prototype[t], "undefined")
  } : function(e, t) {
    return j.call(e, t)
  }, Function.prototype.bind || (Function.prototype.bind = function(e) {
    var t = this;
    if ("function" != typeof t) throw new TypeError;
    var i = $.call(arguments, 1),
    n = function() {
      if (this instanceof n) {
        var s = function() {};
        s.prototype = t.prototype;
        var o = new s,
        a = t.apply(o, i.concat($.call(arguments)));
        return Object(a) === a ? a : o
      }
      return t.apply(e, i.concat($.call(arguments)))
    };
    return n
  }), E.flexbox = function() {
    return c("flexWrap")
  }, E.canvas = function() {
    var e = t.createElement("canvas");
    return !!e.getContext && !!e.getContext("2d")
  }, E.canvastext = function() {
    return !!f.canvas && !!o(t.createElement("canvas").getContext("2d").fillText, "function")
  }, E.webgl = function() {
    return !!e.WebGLRenderingContext
  }, E.touch = function() {
    var i;
    return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? i = !0 : A(["@media (", k.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
      i = 9 === e.offsetTop
    }), i
  }, E.geolocation = function() {
    return "geolocation" in navigator
  }, E.postmessage = function() {
    return !!e.postMessage
  }, E.websqldatabase = function() {
    return !!e.openDatabase
  }, E.indexedDB = function() {
    return !!c("indexedDB", e)
  }, E.hashchange = function() {
    return N("hashchange", e) && (t.documentMode === i || t.documentMode > 7)
  }, E.history = function() {
    return !!e.history && !!history.pushState
  }, E.draganddrop = function() {
    var e = t.createElement("div");
    return "draggable" in e || "ondragstart" in e && "ondrop" in e
  }, E.websockets = function() {
    return "WebSocket" in e || "MozWebSocket" in e
  }, E.rgba = function() {
    return n("background-color:rgba(150,255,150,.5)"), a(b.backgroundColor, "rgba")
  }, E.hsla = function() {
    return n("background-color:hsla(120,40%,100%,.5)"), a(b.backgroundColor, "rgba") || a(b.backgroundColor, "hsla")
  }, E.multiplebgs = function() {
    return n("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
  }, E.backgroundsize = function() {
    return c("backgroundSize")
  }, E.borderimage = function() {
    return c("borderImage")
  }, E.borderradius = function() {
    return c("borderRadius")
  }, E.boxshadow = function() {
    return c("boxShadow")
  }, E.textshadow = function() {
    return "" === t.createElement("div").style.textShadow
  }, E.opacity = function() {
    return s("opacity:.55"), /^0.55$/.test(b.opacity)
  }, E.cssanimations = function() {
    return c("animationName")
  }, E.csscolumns = function() {
    return c("columnCount")
  }, E.cssgradients = function() {
    var e = "background-image:",
    t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
    i = "linear-gradient(left top,#9f9, white);";
    return n((e + "-webkit- ".split(" ").join(t + e) + k.join(i + e)).slice(0, -e.length)), a(b.backgroundImage, "gradient")
  }, E.cssreflections = function() {
    return c("boxReflect")
  }, E.csstransforms = function() {
    return !!c("transform")
  }, E.csstransforms3d = function() {
    var e = !!c("perspective");
    return e && "webkitPerspective" in g.style && A("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t) {
      e = 9 === t.offsetLeft && 3 === t.offsetHeight
    }), e
  }, E.csstransitions = function() {
    return c("transition")
  }, E.fontface = function() {
    var e;
    return A('@font-face {font-family:"font";src:url("https://")}', function(i, n) {
      var s = t.getElementById("smodernizr"),
      o = s.sheet || s.styleSheet,
      a = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
      e = /src/i.test(a) && 0 === a.indexOf(n.split(" ")[0])
    }), e
  }, E.generatedcontent = function() {
    var e;
    return A(["#", v, "{font:0/0 a}#", v, ':after{content:"', _, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
      e = t.offsetHeight >= 3
    }), e
  }, E.video = function() {
    var e = t.createElement("video"),
    i = !1;
    try {
      (i = !!e.canPlayType) && (i = new Boolean(i), i.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), i.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), i.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
    } catch (n) {}
    return i
  }, E.audio = function() {
    var e = t.createElement("audio"),
    i = !1;
    try {
      (i = !!e.canPlayType) && (i = new Boolean(i), i.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), i.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), i.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), i.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
    } catch (n) {}
    return i
  }, E.localstorage = function() {
    try {
      return localStorage.setItem(v, v), localStorage.removeItem(v), !0
    } catch (e) {
      return !1
    }
  }, E.sessionstorage = function() {
    try {
      return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
    } catch (e) {
      return !1
    }
  }, E.webworkers = function() {
    return !!e.Worker
  }, E.applicationcache = function() {
    return !!e.applicationCache
  }, E.svg = function() {
    return !!t.createElementNS && !!t.createElementNS(S.svg, "svg").createSVGRect
  }, E.inlinesvg = function() {
    var e = t.createElement("div");
    return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == S.svg
  }, E.smil = function() {
    return !!t.createElementNS && /SVGAnimate/.test(x.call(t.createElementNS(S.svg, "animate")))
  }, E.svgclippaths = function() {
    return !!t.createElementNS && /SVGClipPath/.test(x.call(t.createElementNS(S.svg, "clipPath")))
  };
  for (var H in E) d(E, H) && (h = H.toLowerCase(), f[h] = E[H](), I.push((f[h] ? "" : "no-") + h));
  return f.input || u(), f.addTest = function(e, t) {
    if ("object" == typeof e)
    for (var n in e) d(e, n) && f.addTest(n, e[n]);
    else {
      if (e = e.toLowerCase(), f[e] !== i) return f;
      t = "function" == typeof t ? t() : t, "undefined" != typeof m && m && (g.className += " " + (t ? "" : "no-") + e), f[e] = t
    }
    return f
  }, n(""), y = w = null,
  function(e, t) {
    function i(e, t) {
      var i = e.createElement("p"),
      n = e.getElementsByTagName("head")[0] || e.documentElement;
      return i.innerHTML = "x<style>" + t + "</style>", n.insertBefore(i.lastChild, n.firstChild)
    }

    function n() {
      var e = y.elements;
      return "string" == typeof e ? e.split(" ") : e
    }

    function s(e) {
      var t = v[e[m]];
      return t || (t = {}, g++, e[m] = g, v[g] = t), t
    }

    function o(e, i, n) {
      if (i || (i = t), u) return i.createElement(e);
      n || (n = s(i));
      var o;
      return o = n.cache[e] ? n.cache[e].cloneNode() : f.test(e) ? (n.cache[e] = n.createElem(e)).cloneNode() : n.createElem(e), !o.canHaveChildren || p.test(e) || o.tagUrn ? o : n.frag.appendChild(o)
    }

    function a(e, i) {
      if (e || (e = t), u) return e.createDocumentFragment();
      i = i || s(e);
      for (var o = i.frag.cloneNode(), a = 0, r = n(), l = r.length; l > a; a++) o.createElement(r[a]);
      return o
    }

    function r(e, t) {
      t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(i) {
        return y.shivMethods ? o(i, e, t) : t.createElem(i)
      }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-]+/g, function(e) {
        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
      }) + ");return n}")(y, t.frag)
    }

    function l(e) {
      e || (e = t);
      var n = s(e);
      return y.shivCSS && !c && !n.hasCSS && (n.hasCSS = !!i(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || r(e, n), e
    }
    var c, u, h = "3.7.0",
    d = e.html5 || {},
    p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
    m = "_html5shiv",
    g = 0,
    v = {};
    ! function() {
      try {
        var e = t.createElement("a");
        e.innerHTML = "<xyz></xyz>", c = "hidden" in e, u = 1 == e.childNodes.length || function() {
          t.createElement("a");
          var e = t.createDocumentFragment();
          return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
        }()
      } catch (i) {
        c = !0, u = !0
      }
    }();
    var y = {
      elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
      version: h,
      shivCSS: d.shivCSS !== !1,
      supportsUnknownElements: u,
      shivMethods: d.shivMethods !== !1,
      type: "default",
      shivDocument: l,
      createElement: o,
      createDocumentFragment: a
    };
    e.html5 = y, l(t)
  }(this, t), f._version = p, f._prefixes = k, f._domPrefixes = D, f._cssomPrefixes = T, f.hasEvent = N, f.testProp = function(e) {
    return r([e])
  }, f.testAllProps = c, f.testStyles = A, f.prefixed = function(e, t, i) {
    return t ? c(e, t, i) : c(e, "pfx")
  }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + I.join(" ") : ""), f
}(this, this.document),
function(e, t, i) {
  function n(e) {
    return "[object Function]" == g.call(e)
  }

  function s(e) {
    return "string" == typeof e
  }

  function o() {}

  function a(e) {
    return !e || "loaded" == e || "complete" == e || "uninitialized" == e
  }

  function r() {
    var e = v.shift();
    y = 1, e ? e.t ? f(function() {
      ("c" == e.t ? d.injectCss : d.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
    }, 0) : (e(), r()) : y = 0
  }

  function l(e, i, n, s, o, l, c) {
    function u(t) {
      if (!p && a(h.readyState) && (b.r = p = 1, !y && r(), h.onload = h.onreadystatechange = null, t)) {
        "img" != e && f(function() {
          _.removeChild(h)
        }, 50);
        for (var n in D[i]) D[i].hasOwnProperty(n) && D[i][n].onload()
      }
    }
    var c = c || d.errorTimeout,
    h = t.createElement(e),
    p = 0,
    g = 0,
    b = {
      t: n,
      s: i,
      e: o,
      a: l,
      x: c
    };
    1 === D[i] && (g = 1, D[i] = []), "object" == e ? h.data = i : (h.src = i, h.type = e), h.width = h.height = "0", h.onerror = h.onload = h.onreadystatechange = function() {
      u.call(this, g)
    }, v.splice(s, 0, b), "img" != e && (g || 2 === D[i] ? (_.insertBefore(h, w ? null : m), f(u, c)) : D[i].push(h))
  }

  function c(e, t, i, n, o) {
    return y = 0, t = t || "j", s(e) ? l("c" == t ? k : x, e, t, this.i++, i, n, o) : (v.splice(this.i++, 0, e), 1 == v.length && r()), this
  }

  function u() {
    var e = d;
    return e.loader = {
      load: c,
      i: 0
    }, e
  }
  var h, d, p = t.documentElement,
  f = e.setTimeout,
  m = t.getElementsByTagName("script")[0],
  g = {}.toString,
  v = [],
  y = 0,
  b = "MozAppearance" in p.style,
  w = b && !!t.createRange().compareNode,
  _ = w ? p : m.parentNode,
  p = e.opera && "[object Opera]" == g.call(e.opera),
  p = !!t.attachEvent && !p,
  x = b ? "object" : p ? "script" : "img",
  k = p ? "script" : x,
  C = Array.isArray || function(e) {
    return "[object Array]" == g.call(e)
  },
  T = [],
  D = {},
  S = {
    timeout: function(e, t) {
      return t.length && (e.timeout = t[0]), e
    }
  };
  d = function(e) {
    function t(e) {
      var t, i, n, e = e.split("!"),
      s = T.length,
      o = e.pop(),
      a = e.length,
      o = {
        url: o,
        origUrl: o,
        prefixes: e
      };
      for (i = 0; a > i; i++) n = e[i].split("="), (t = S[n.shift()]) && (o = t(o, n));
      for (i = 0; s > i; i++) o = T[i](o);
      return o
    }

    function a(e, s, o, a, r) {
      var l = t(e),
      c = l.autoCallback;
      l.url.split(".").pop().split("?").shift(), l.bypass || (s && (s = n(s) ? s : s[e] || s[a] || s[e.split("/").pop().split("?")[0]]), l.instead ? l.instead(e, s, o, a, r) : (D[l.url] ? l.noexec = !0 : D[l.url] = 1, o.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : i, l.noexec, l.attrs, l.timeout), (n(s) || n(c)) && o.load(function() {
        u(), s && s(l.origUrl, r, a), c && c(l.origUrl, r, a), D[l.url] = 2
      })))
    }

    function r(e, t) {
      function i(e, i) {
        if (e) {
          if (s(e)) i || (h = function() {
            var e = [].slice.call(arguments);
            d.apply(this, e), p()
          }), a(e, h, t, 0, c);
          else if (Object(e) === e)
          for (l in r = function() {
            var t, i = 0;
            for (t in e) e.hasOwnProperty(t) && i++;
            return i
          }(), e) e.hasOwnProperty(l) && (!i && !--r && (n(h) ? h = function() {
            var e = [].slice.call(arguments);
            d.apply(this, e), p()
          } : h[l] = function(e) {
            return function() {
              var t = [].slice.call(arguments);
              e && e.apply(this, t), p()
            }
          }(d[l])), a(e[l], h, t, l, c))
        } else !i && p()
      }
      var r, l, c = !!e.test,
      u = e.load || e.both,
      h = e.callback || o,
      d = h,
      p = e.complete || o;
      i(c ? e.yep : e.nope, !!u), u && i(u)
    }
    var l, c, h = this.yepnope.loader;
    if (s(e)) a(e, 0, h, 0);
    else if (C(e))
    for (l = 0; l < e.length; l++) c = e[l], s(c) ? a(c, 0, h, 0) : C(c) ? d(c) : Object(c) === c && r(c, h);
    else Object(e) === e && r(e, h)
  }, d.addPrefix = function(e, t) {
    S[e] = t
  }, d.addFilter = function(e) {
    T.push(e)
  }, d.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", h = function() {
    t.removeEventListener("DOMContentLoaded", h, 0), t.readyState = "complete"
  }, 0)), e.yepnope = u(), e.yepnope.executeStack = r, e.yepnope.injectJs = function(e, i, n, s, l, c) {
    var u, h, p = t.createElement("script"),
    s = s || d.errorTimeout;
    p.src = e;
    for (h in n) p.setAttribute(h, n[h]);
    i = c ? r : i || o, p.onreadystatechange = p.onload = function() {
      !u && a(p.readyState) && (u = 1, i(), p.onload = p.onreadystatechange = null)
    }, f(function() {
      u || (u = 1, i(1))
    }, s), l ? p.onload() : m.parentNode.insertBefore(p, m)
  }, e.yepnope.injectCss = function(e, i, n, s, a, l) {
    var c, s = t.createElement("link"),
    i = l ? r : i || o;
    s.href = e, s.rel = "stylesheet", s.type = "text/css";
    for (c in n) s.setAttribute(c, n[c]);
    a || (m.parentNode.insertBefore(s, m), f(i, 0))
  }
}(this, document), Modernizr.load = function() {
  yepnope.apply(window, [].slice.call(arguments, 0))
}, Modernizr.addTest("fullscreen", function() {
  for (var e = 0; e < Modernizr._domPrefixes.length; e++)
  if (document[Modernizr._domPrefixes[e].toLowerCase() + "CancelFullScreen"]) return !0;
  return !!document.cancelFullScreen || !1
}),
function() {
  if (Event.prototype.preventDefault || (Event.prototype.preventDefault = function() {
    this.returnValue = !1
  }), Event.prototype.stopPropagation || (Event.prototype.stopPropagation = function() {
    this.cancelBubble = !0
  }), !Element.prototype.addEventListener) {
    var e = [],
    t = function(t, i) {
      var n = this,
      s = function(e) {
        e.target = e.srcElement, e.currentTarget = n, i.handleEvent ? i.handleEvent(e) : i.call(n, e)
      };
      if ("DOMContentLoaded" === t) {
        var o = function(e) {
          "complete" === document.readyState && s(e)
        };
        if (document.attachEvent("onreadystatechange", o), e.push({
          object: this,
          type: t,
          listener: i,
          wrapper: o
        }), "complete" === document.readyState) {
          var a = new Event;
          a.srcElement = window, o(a)
        }
      } else this.attachEvent("on" + t, s), e.push({
        object: this,
        type: t,
        listener: i,
        wrapper: s
      })
    },
    i = function(t, i) {
      for (var n = 0; n < e.length;) {
        var s = e[n];
        if (s.object === this && s.type === t && s.listener === i) {
          "DOMContentLoaded" === t ? this.detachEvent("onreadystatechange", s.wrapper) : this.detachEvent("on" + t, s.wrapper), e.splice(n, 1);
          break
        }++n
      }
    };
    Element.prototype.addEventListener = t, Element.prototype.removeEventListener = i, HTMLDocument && (HTMLDocument.prototype.addEventListener = t, HTMLDocument.prototype.removeEventListener = i), Window && (Window.prototype.addEventListener = t, Window.prototype.removeEventListener = i)
  }
}(),
function(e, t) {
  function i(e) {
    var t = ft[e] = {};
    return J.each(e.split(tt), function(e, i) {
      t[i] = !0
    }), t
  }

  function n(e, i, n) {
    if (n === t && 1 === e.nodeType) {
      var s = "data-" + i.replace(gt, "-$1").toLowerCase();
      if (n = e.getAttribute(s), "string" == typeof n) {
        try {
          n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : mt.test(n) ? J.parseJSON(n) : n
        } catch (o) {}
        J.data(e, i, n)
      } else n = t
    }
    return n
  }

  function s(e) {
    var t;
    for (t in e)
    if (("data" !== t || !J.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0
  }

  function o() {
    return !1
  }

  function a() {
    return !0
  }

  function r(e) {
    return !e || !e.parentNode || 11 === e.parentNode.nodeType
  }

  function l(e, t) {
    do e = e[t]; while (e && 1 !== e.nodeType);
    return e
  }

  function c(e, t, i) {
    if (t = t || 0, J.isFunction(t)) return J.grep(e, function(e, n) {
      var s = !!t.call(e, n, e);
      return s === i
    });
    if (t.nodeType) return J.grep(e, function(e) {
      return e === t === i
    });
    if ("string" == typeof t) {
      var n = J.grep(e, function(e) {
        return 1 === e.nodeType
      });
      if (Ht.test(t)) return J.filter(t, n, !i);
      t = J.filter(t, n)
    }
    return J.grep(e, function(e) {
      return J.inArray(e, t) >= 0 === i
    })
  }

  function u(e) {
    var t = Lt.split("|"),
    i = e.createDocumentFragment();
    if (i.createElement)
    for (; t.length;) i.createElement(t.pop());
    return i
  }

  function h(e, t) {
    return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
  }

  function d(e, t) {
    if (1 === t.nodeType && J.hasData(e)) {
      var i, n, s, o = J._data(e),
      a = J._data(t, o),
      r = o.events;
      if (r) {
        delete a.handle, a.events = {};
        for (i in r)
        for (n = 0, s = r[i].length; s > n; n++) J.event.add(t, i, r[i][n])
      }
      a.data && (a.data = J.extend({}, a.data))
    }
  }

  function p(e, t) {
    var i;
    1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), i = t.nodeName.toLowerCase(), "object" === i ? (t.parentNode && (t.outerHTML = e.outerHTML), J.support.html5Clone && e.innerHTML && !J.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === i && Vt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === i ? t.selected = e.defaultSelected : "input" === i || "textarea" === i ? t.defaultValue = e.defaultValue : "script" === i && t.text !== e.text && (t.text = e.text), t.removeAttribute(J.expando))
  }

  function f(e) {
    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
  }

  function m(e) {
    Vt.test(e.type) && (e.defaultChecked = e.checked)
  }

  function g(e, t) {
    if (t in e) return t;
    for (var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, s = vi.length; s--;)
    if (t = vi[s] + i, t in e) return t;
    return n
  }

  function v(e, t) {
    return e = t || e, "none" === J.css(e, "display") || !J.contains(e.ownerDocument, e)
  }

  function y(e, t) {
    for (var i, n, s = [], o = 0, a = e.length; a > o; o++) i = e[o], i.style && (s[o] = J._data(i, "olddisplay"), t ? (!s[o] && "none" === i.style.display && (i.style.display = ""), "" === i.style.display && v(i) && (s[o] = J._data(i, "olddisplay", x(i.nodeName)))) : (n = ii(i, "display"), !s[o] && "none" !== n && J._data(i, "olddisplay", n)));
    for (o = 0; a > o; o++) i = e[o], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? s[o] || "" : "none"));
    return e
  }

  function b(e, t, i) {
    var n = ui.exec(t);
    return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
  }

  function w(e, t, i, n) {
    for (var s = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > s; s += 2) "margin" === i && (o += J.css(e, i + gi[s], !0)), n ? ("content" === i && (o -= parseFloat(ii(e, "padding" + gi[s])) || 0), "margin" !== i && (o -= parseFloat(ii(e, "border" + gi[s] + "Width")) || 0)) : (o += parseFloat(ii(e, "padding" + gi[s])) || 0, "padding" !== i && (o += parseFloat(ii(e, "border" + gi[s] + "Width")) || 0));
    return o
  }

  function _(e, t, i) {
    var n = "width" === t ? e.offsetWidth : e.offsetHeight,
    s = !0,
    o = J.support.boxSizing && "border-box" === J.css(e, "boxSizing");
    if (0 >= n || null == n) {
      if (n = ii(e, t), (0 > n || null == n) && (n = e.style[t]), hi.test(n)) return n;
      s = o && (J.support.boxSizingReliable || n === e.style[t]), n = parseFloat(n) || 0
    }
    return n + w(e, t, i || (o ? "border" : "content"), s) + "px"
  }

  function x(e) {
    if (pi[e]) return pi[e];
    var t = J("<" + e + ">").appendTo(F.body),
    i = t.css("display");
    return t.remove(), ("none" === i || "" === i) && (ni = F.body.appendChild(ni || J.extend(F.createElement("iframe"), {
      frameBorder: 0,
      width: 0,
      height: 0
    })), si && ni.createElement || (si = (ni.contentWindow || ni.contentDocument).document, si.write("<!doctype html><html><body>"), si.close()), t = si.body.appendChild(si.createElement(e)), i = ii(t, "display"), F.body.removeChild(ni)), pi[e] = i, i
    }

    function k(e, t, i, n) {
      var s;
      if (J.isArray(t)) J.each(t, function(t, s) {
        i || wi.test(e) ? n(e, s) : k(e + "[" + ("object" == typeof s ? t : "") + "]", s, i, n)
      });
      else if (i || "object" !== J.type(t)) n(e, t);
      else
      for (s in t) k(e + "[" + s + "]", t[s], i, n)
    }

    function C(e) {
      return function(t, i) {
        "string" != typeof t && (i = t, t = "*");
        var n, s, o, a = t.toLowerCase().split(tt),
        r = 0,
        l = a.length;
        if (J.isFunction(i))
        for (; l > r; r++) n = a[r], o = /^\+/.test(n), o && (n = n.substr(1) || "*"), s = e[n] = e[n] || [], s[o ? "unshift" : "push"](i)
      }
    }

    function T(e, i, n, s, o, a) {
      o = o || i.dataTypes[0], a = a || {}, a[o] = !0;
      for (var r, l = e[o], c = 0, u = l ? l.length : 0, h = e === Hi; u > c && (h || !r); c++) r = l[c](i, n, s), "string" == typeof r && (!h || a[r] ? r = t : (i.dataTypes.unshift(r), r = T(e, i, n, s, r, a)));
      return (h || !r) && !a["*"] && (r = T(e, i, n, s, "*", a)), r
    }

    function D(e, i) {
      var n, s, o = J.ajaxSettings.flatOptions || {};
      for (n in i) i[n] !== t && ((o[n] ? e : s || (s = {}))[n] = i[n]);
      s && J.extend(!0, e, s)
    }

    function S(e, i, n) {
      var s, o, a, r, l = e.contents,
      c = e.dataTypes,
      u = e.responseFields;
      for (o in u) o in n && (i[u[o]] = n[o]);
      for (;
      "*" === c[0];) c.shift(), s === t && (s = e.mimeType || i.getResponseHeader("content-type"));
      if (s)
      for (o in l)
      if (l[o] && l[o].test(s)) {
        c.unshift(o);
        break
      }
      if (c[0] in n) a = c[0];
      else {
        for (o in n) {
          if (!c[0] || e.converters[o + " " + c[0]]) {
            a = o;
            break
          }
          r || (r = o)
        }
        a = a || r
      }
      return a ? (a !== c[0] && c.unshift(a), n[a]) : void 0
    }

    function E(e, t) {
      var i, n, s, o, a = e.dataTypes.slice(),
      r = a[0],
      l = {},
      c = 0;
      if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), a[1])
      for (i in e.converters) l[i.toLowerCase()] = e.converters[i];
      for (; s = a[++c];)
      if ("*" !== s) {
        if ("*" !== r && r !== s) {
          if (i = l[r + " " + s] || l["* " + s], !i)
          for (n in l)
          if (o = n.split(" "), o[1] === s && (i = l[r + " " + o[0]] || l["* " + o[0]])) {
            i === !0 ? i = l[n] : l[n] !== !0 && (s = o[0], a.splice(c--, 0, s));
            break
          }
          if (i !== !0)
          if (i && e["throws"]) t = i(t);
          else try {
            t = i(t)
          } catch (u) {
            return {
              state: "parsererror",
              error: i ? u : "No conversion from " + r + " to " + s
            }
          }
        }
        r = s
      }
      return {
        state: "success",
        data: t
      }
    }

    function P() {
      try {
        return new e.XMLHttpRequest
      } catch (t) {}
    }

    function M() {
      try {
        return new e.ActiveXObject("Microsoft.XMLHTTP")
      } catch (t) {}
    }

    function I() {
      return setTimeout(function() {
        Xi = t
      }, 0), Xi = J.now()
    }

    function $(e, t) {
      J.each(t, function(t, i) {
        for (var n = (Zi[t] || []).concat(Zi["*"]), s = 0, o = n.length; o > s; s++)
        if (n[s].call(e, t, i)) return
      })
    }

    function A(e, t, i) {
      var n, s = 0,
      o = Ji.length,
      a = J.Deferred().always(function() {
        delete r.elem
      }),
      r = function() {
        for (var t = Xi || I(), i = Math.max(0, l.startTime + l.duration - t), n = i / l.duration || 0, s = 1 - n, o = 0, r = l.tweens.length; r > o; o++) l.tweens[o].run(s);
        return a.notifyWith(e, [l, s, i]), 1 > s && r ? i : (a.resolveWith(e, [l]), !1)
      },
      l = a.promise({
        elem: e,
        props: J.extend({}, t),
        opts: J.extend(!0, {
          specialEasing: {}
        }, i),
        originalProperties: t,
        originalOptions: i,
        startTime: Xi || I(),
        duration: i.duration,
        tweens: [],
        createTween: function(t, i) {
          var n = J.Tween(e, l.opts, t, i, l.opts.specialEasing[t] || l.opts.easing);
          return l.tweens.push(n), n
        },
        stop: function(t) {
          for (var i = 0, n = t ? l.tweens.length : 0; n > i; i++) l.tweens[i].run(1);
          return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
        }
      }),
      c = l.props;
      for (N(c, l.opts.specialEasing); o > s; s++)
      if (n = Ji[s].call(l, e, c, l.opts)) return n;
      return $(l, c), J.isFunction(l.opts.start) && l.opts.start.call(e, l), J.fx.timer(J.extend(r, {
        anim: l,
        queue: l.opts.queue,
        elem: e
      })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function N(e, t) {
      var i, n, s, o, a;
      for (i in e)
      if (n = J.camelCase(i), s = t[n], o = e[i], J.isArray(o) && (s = o[1], o = e[i] = o[0]), i !== n && (e[n] = o, delete e[i]), a = J.cssHooks[n], a && "expand" in a) {
        o = a.expand(o), delete e[n];
        for (i in o) i in e || (e[i] = o[i], t[i] = s)
      } else t[n] = s
    }

    function j(e, t, i) {
      var n, s, o, a, r, l, c, u, h, d = this,
      p = e.style,
      f = {},
      m = [],
      g = e.nodeType && v(e);
      i.queue || (u = J._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, h = u.empty.fire, u.empty.fire = function() {
        u.unqueued || h()
      }), u.unqueued++, d.always(function() {
        d.always(function() {
          u.unqueued--, J.queue(e, "fx").length || u.empty.fire()
        })
      })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === J.css(e, "display") && "none" === J.css(e, "float") && (J.support.inlineBlockNeedsLayout && "inline" !== x(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", J.support.shrinkWrapBlocks || d.done(function() {
        p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
      }));
      for (n in t)
      if (o = t[n], Vi.exec(o)) {
        if (delete t[n], l = l || "toggle" === o, o === (g ? "hide" : "show")) continue;
        m.push(n)
      }
      if (a = m.length) {
        r = J._data(e, "fxshow") || J._data(e, "fxshow", {}), "hidden" in r && (g = r.hidden), l && (r.hidden = !g), g ? J(e).show() : d.done(function() {
          J(e).hide()
        }), d.done(function() {
          var t;
          J.removeData(e, "fxshow", !0);
          for (t in f) J.style(e, t, f[t])
        });
        for (n = 0; a > n; n++) s = m[n], c = d.createTween(s, g ? r[s] : 0), f[s] = r[s] || J.style(e, s), s in r || (r[s] = c.start, g && (c.end = c.start, c.start = "width" === s || "height" === s ? 1 : 0))
      }
    }

    function H(e, t, i, n, s) {
      return new H.prototype.init(e, t, i, n, s)
    }

    function z(e, t) {
      var i, n = {
        height: e
      },
      s = 0;
      for (t = t ? 1 : 0; 4 > s; s += 2 - t) i = gi[s], n["margin" + i] = n["padding" + i] = e;
      return t && (n.opacity = n.width = e), n
    }

    function O(e) {
      return J.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var L, W, F = e.document,
    R = e.location,
    B = e.navigator,
    Y = e.jQuery,
    q = e.$,
    U = Array.prototype.push,
    X = Array.prototype.slice,
    Q = Array.prototype.indexOf,
    V = Object.prototype.toString,
    K = Object.prototype.hasOwnProperty,
    G = String.prototype.trim,
    J = function(e, t) {
      return new J.fn.init(e, t, L)
    },
    Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
    et = /\S/,
    tt = /\s+/,
    it = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    nt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
    st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    ot = /^[\],:{}\s]*$/,
    at = /(?:^|:|,)(?:\s*\[)+/g,
    rt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    lt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
    ct = /^-ms-/,
    ut = /-([\da-z])/gi,
    ht = function(e, t) {
      return (t + "").toUpperCase()
    },
    dt = function() {
      F.addEventListener ? (F.removeEventListener("DOMContentLoaded", dt, !1), J.ready()) : "complete" === F.readyState && (F.detachEvent("onreadystatechange", dt), J.ready())
    },
    pt = {};
    J.fn = J.prototype = {
      constructor: J,
      init: function(e, i, n) {
        var s, o, a;
        if (!e) return this;
        if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
        if ("string" == typeof e) {
          if (s = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : nt.exec(e), s && (s[1] || !i)) {
            if (s[1]) return i = i instanceof J ? i[0] : i, a = i && i.nodeType ? i.ownerDocument || i : F, e = J.parseHTML(s[1], a, !0), st.test(s[1]) && J.isPlainObject(i) && this.attr.call(e, i, !0), J.merge(this, e);
            if (o = F.getElementById(s[2]), o && o.parentNode) {
              if (o.id !== s[2]) return n.find(e);
              this.length = 1, this[0] = o
            }
            return this.context = F, this.selector = e, this
          }
          return !i || i.jquery ? (i || n).find(e) : this.constructor(i).find(e)
        }
        return J.isFunction(e) ? n.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), J.makeArray(e, this))
      },
      selector: "",
      jquery: "1.8.3",
      length: 0,
      size: function() {
        return this.length
      },
      toArray: function() {
        return X.call(this)
      },
      get: function(e) {
        return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
      },
      pushStack: function(e, t, i) {
        var n = J.merge(this.constructor(), e);
        return n.prevObject = this, n.context = this.context, "find" === t ? n.selector = this.selector + (this.selector ? " " : "") + i : t && (n.selector = this.selector + "." + t + "(" + i + ")"), n
      },
      each: function(e, t) {
        return J.each(this, e, t)
      },
      ready: function(e) {
        return J.ready.promise().done(e), this
      },
      eq: function(e) {
        return e = +e, -1 === e ? this.slice(e) : this.slice(e, e + 1)
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      slice: function() {
        return this.pushStack(X.apply(this, arguments), "slice", X.call(arguments).join(","))
      },
      map: function(e) {
        return this.pushStack(J.map(this, function(t, i) {
          return e.call(t, i, t)
        }))
      },
      end: function() {
        return this.prevObject || this.constructor(null)
      },
      push: U,
      sort: [].sort,
      splice: [].splice
    }, J.fn.init.prototype = J.fn, J.extend = J.fn.extend = function() {
      var e, i, n, s, o, a, r = arguments[0] || {},
      l = 1,
      c = arguments.length,
      u = !1;
      for ("boolean" == typeof r && (u = r, r = arguments[1] || {}, l = 2), "object" != typeof r && !J.isFunction(r) && (r = {}), c === l && (r = this, --l); c > l; l++)
      if (null != (e = arguments[l]))
      for (i in e) n = r[i], s = e[i], r !== s && (u && s && (J.isPlainObject(s) || (o = J.isArray(s))) ? (o ? (o = !1, a = n && J.isArray(n) ? n : []) : a = n && J.isPlainObject(n) ? n : {}, r[i] = J.extend(u, a, s)) : s !== t && (r[i] = s));
      return r
    }, J.extend({
      noConflict: function(t) {
        return e.$ === J && (e.$ = q), t && e.jQuery === J && (e.jQuery = Y), J
      },
      isReady: !1,
      readyWait: 1,
      holdReady: function(e) {
        e ? J.readyWait++ : J.ready(!0)
      },
      ready: function(e) {
        if (e === !0 ? !--J.readyWait : !J.isReady) {
          if (!F.body) return setTimeout(J.ready, 1);
          J.isReady = !0, e !== !0 && --J.readyWait > 0 || (W.resolveWith(F, [J]), J.fn.trigger && J(F).trigger("ready").off("ready"))
        }
      },
      isFunction: function(e) {
        return "function" === J.type(e)
      },
      isArray: Array.isArray || function(e) {
        return "array" === J.type(e)
      },
      isWindow: function(e) {
        return null != e && e == e.window
      },
      isNumeric: function(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
      },
      type: function(e) {
        return null == e ? String(e) : pt[V.call(e)] || "object"
      },
      isPlainObject: function(e) {
        if (!e || "object" !== J.type(e) || e.nodeType || J.isWindow(e)) return !1;
        try {
          if (e.constructor && !K.call(e, "constructor") && !K.call(e.constructor.prototype, "isPrototypeOf")) return !1
        } catch (i) {
          return !1
        }
        var n;
        for (n in e);
        return n === t || K.call(e, n)
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0
      },
      error: function(e) {
        throw new Error(e)
      },
      parseHTML: function(e, t, i) {
        var n;
        return e && "string" == typeof e ? ("boolean" == typeof t && (i = t, t = 0), t = t || F, (n = st.exec(e)) ? [t.createElement(n[1])] : (n = J.buildFragment([e], t, i ? null : []), J.merge([], (n.cacheable ? J.clone(n.fragment) : n.fragment).childNodes))) : null
      },
      parseJSON: function(t) {
        return t && "string" == typeof t ? (t = J.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : ot.test(t.replace(rt, "@").replace(lt, "]").replace(at, "")) ? new Function("return " + t)() : void J.error("Invalid JSON: " + t)) : null
      },
      parseXML: function(i) {
        var n, s;
        if (!i || "string" != typeof i) return null;
        try {
          e.DOMParser ? (s = new DOMParser, n = s.parseFromString(i, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(i))
        } catch (o) {
          n = t
        }
        return (!n || !n.documentElement || n.getElementsByTagName("parsererror").length) && J.error("Invalid XML: " + i), n
      },
      noop: function() {},
      globalEval: function(t) {
        t && et.test(t) && (e.execScript || function(t) {
          e.eval.call(e, t)
        })(t)
      },
      camelCase: function(e) {
        return e.replace(ct, "ms-").replace(ut, ht)
      },
      nodeName: function(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function(e, i, n) {
        var s, o = 0,
        a = e.length,
        r = a === t || J.isFunction(e);
        if (n)
        if (r) {
          for (s in e)
          if (i.apply(e[s], n) === !1) break
        } else
        for (; a > o && i.apply(e[o++], n) !== !1;);
        else if (r) {
          for (s in e)
          if (i.call(e[s], s, e[s]) === !1) break
        } else
        for (; a > o && i.call(e[o], o, e[o++]) !== !1;);
        return e
      },
      trim: G && !G.call("﻿ ") ? function(e) {
        return null == e ? "" : G.call(e)
      } : function(e) {
        return null == e ? "" : (e + "").replace(it, "")
      },
      makeArray: function(e, t) {
        var i, n = t || [];
        return null != e && (i = J.type(e), null == e.length || "string" === i || "function" === i || "regexp" === i || J.isWindow(e) ? U.call(n, e) : J.merge(n, e)), n
      },
      inArray: function(e, t, i) {
        var n;
        if (t) {
          if (Q) return Q.call(t, e, i);
          for (n = t.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
          if (i in t && t[i] === e) return i
        }
        return -1
      },
      merge: function(e, i) {
        var n = i.length,
        s = e.length,
        o = 0;
        if ("number" == typeof n)
        for (; n > o; o++) e[s++] = i[o];
        else
        for (; i[o] !== t;) e[s++] = i[o++];
        return e.length = s, e
      },
      grep: function(e, t, i) {
        var n, s = [],
        o = 0,
        a = e.length;
        for (i = !!i; a > o; o++) n = !!t(e[o], o), i !== n && s.push(e[o]);
        return s
      },
      map: function(e, i, n) {
        var s, o, a = [],
        r = 0,
        l = e.length,
        c = e instanceof J || l !== t && "number" == typeof l && (l > 0 && e[0] && e[l - 1] || 0 === l || J.isArray(e));
        if (c)
        for (; l > r; r++) s = i(e[r], r, n), null != s && (a[a.length] = s);
        else
        for (o in e) s = i(e[o], o, n), null != s && (a[a.length] = s);
        return a.concat.apply([], a)
      },
      guid: 1,
      proxy: function(e, i) {
        var n, s, o;
        return "string" == typeof i && (n = e[i], i = e, e = n), J.isFunction(e) ? (s = X.call(arguments, 2), o = function() {
          return e.apply(i, s.concat(X.call(arguments)))
        }, o.guid = e.guid = e.guid || J.guid++, o) : t
      },
      access: function(e, i, n, s, o, a, r) {
        var l, c = null == n,
        u = 0,
        h = e.length;
        if (n && "object" == typeof n) {
          for (u in n) J.access(e, i, u, n[u], 1, a, s);
          o = 1
        } else if (s !== t) {
          if (l = r === t && J.isFunction(s), c && (l ? (l = i, i = function(e, t, i) {
            return l.call(J(e), i)
          }) : (i.call(e, s), i = null)), i)
          for (; h > u; u++) i(e[u], n, l ? s.call(e[u], u, i(e[u], n)) : s, r);
          o = 1
        }
        return o ? e : c ? i.call(e) : h ? i(e[0], n) : a
      },
      now: function() {
        return (new Date).getTime()
      }
    }), J.ready.promise = function(t) {
      if (!W)
      if (W = J.Deferred(), "complete" === F.readyState) setTimeout(J.ready, 1);
      else if (F.addEventListener) F.addEventListener("DOMContentLoaded", dt, !1), e.addEventListener("load", J.ready, !1);
      else {
        F.attachEvent("onreadystatechange", dt), e.attachEvent("onload", J.ready);
        var i = !1;
        try {
          i = null == e.frameElement && F.documentElement
        } catch (n) {}
        i && i.doScroll && function s() {
          if (!J.isReady) {
            try {
              i.doScroll("left")
            } catch (e) {
              return setTimeout(s, 50)
            }
            J.ready()
          }
        }()
      }
      return W.promise(t)
    }, J.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
      pt["[object " + t + "]"] = t.toLowerCase()
    }), L = J(F);
    var ft = {};
    J.Callbacks = function(e) {
      e = "string" == typeof e ? ft[e] || i(e) : J.extend({}, e);
      var n, s, o, a, r, l, c = [],
      u = !e.once && [],
      h = function(t) {
        for (n = e.memory && t, s = !0, l = a || 0, a = 0, r = c.length, o = !0; c && r > l; l++)
        if (c[l].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
          n = !1;
          break
        }
        o = !1, c && (u ? u.length && h(u.shift()) : n ? c = [] : d.disable())
      },
      d = {
        add: function() {
          if (c) {
            var t = c.length;
            ! function i(t) {
              J.each(t, function(t, n) {
                var s = J.type(n);
                "function" === s ? (!e.unique || !d.has(n)) && c.push(n) : n && n.length && "string" !== s && i(n)
              })
            }(arguments), o ? r = c.length : n && (a = t, h(n))
          }
          return this
        },
        remove: function() {
          return c && J.each(arguments, function(e, t) {
            for (var i;
            (i = J.inArray(t, c, i)) > -1;) c.splice(i, 1), o && (r >= i && r--, l >= i && l--)
          }), this
        },
        has: function(e) {
          return J.inArray(e, c) > -1
        },
        empty: function() {
          return c = [], this
        },
        disable: function() {
          return c = u = n = t, this
        },
        disabled: function() {
          return !c
        },
        lock: function() {
          return u = t, n || d.disable(), this
        },
        locked: function() {
          return !u
        },
        fireWith: function(e, t) {
          return t = t || [], t = [e, t.slice ? t.slice() : t], c && (!s || u) && (o ? u.push(t) : h(t)), this
        },
        fire: function() {
          return d.fireWith(this, arguments), this
        },
        fired: function() {
          return !!s
        }
      };
      return d
    }, J.extend({
      Deferred: function(e) {
        var t = [
        ["resolve", "done", J.Callbacks("once memory"), "resolved"],
        ["reject", "fail", J.Callbacks("once memory"), "rejected"],
        ["notify", "progress", J.Callbacks("memory")]
        ],
        i = "pending",
        n = {
          state: function() {
            return i
          },
          always: function() {
            return s.done(arguments).fail(arguments), this
          },
          then: function() {
            var e = arguments;
            return J.Deferred(function(i) {
              J.each(t, function(t, n) {
                var o = n[0],
                a = e[t];
                s[n[1]](J.isFunction(a) ? function() {
                  var e = a.apply(this, arguments);
                  e && J.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o + "With"](this === s ? i : this, [e])
                } : i[o])
              }), e = null
            }).promise()
          },
          promise: function(e) {
            return null != e ? J.extend(e, n) : n
          }
        },
        s = {};
        return n.pipe = n.then, J.each(t, function(e, o) {
          var a = o[2],
          r = o[3];
          n[o[1]] = a.add, r && a.add(function() {
            i = r
          }, t[1 ^ e][2].disable, t[2][2].lock), s[o[0]] = a.fire, s[o[0] + "With"] = a.fireWith
        }), n.promise(s), e && e.call(s, s), s
      },
      when: function(e) {
        var t, i, n, s = 0,
        o = X.call(arguments),
        a = o.length,
        r = 1 !== a || e && J.isFunction(e.promise) ? a : 0,
        l = 1 === r ? e : J.Deferred(),
        c = function(e, i, n) {
          return function(s) {
            i[e] = this, n[e] = arguments.length > 1 ? X.call(arguments) : s, n === t ? l.notifyWith(i, n) : --r || l.resolveWith(i, n)
          }
        };
        if (a > 1)
        for (t = new Array(a), i = new Array(a), n = new Array(a); a > s; s++) o[s] && J.isFunction(o[s].promise) ? o[s].promise().done(c(s, n, o)).fail(l.reject).progress(c(s, i, t)) : --r;
        return r || l.resolveWith(n, o), l.promise()
      }
    }), J.support = function() {
      var t, i, n, s, o, a, r, l, c, u, h, d = F.createElement("div");
      if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = d.getElementsByTagName("*"), n = d.getElementsByTagName("a")[0], !i || !n || !i.length) return {};
      s = F.createElement("select"), o = s.appendChild(F.createElement("option")), a = d.getElementsByTagName("input")[0], n.style.cssText = "top:1px;float:left;opacity:.5", t = {
        leadingWhitespace: 3 === d.firstChild.nodeType,
        tbody: !d.getElementsByTagName("tbody").length,
        htmlSerialize: !!d.getElementsByTagName("link").length,
        style: /top/.test(n.getAttribute("style")),
        hrefNormalized: "/a" === n.getAttribute("href"),
        opacity: /^0.5/.test(n.style.opacity),
        cssFloat: !!n.style.cssFloat,
        checkOn: "on" === a.value,
        optSelected: o.selected,
        getSetAttribute: "t" !== d.className,
        enctype: !!F.createElement("form").enctype,
        html5Clone: "<:nav></:nav>" !== F.createElement("nav").cloneNode(!0).outerHTML,
        boxModel: "CSS1Compat" === F.compatMode,
        submitBubbles: !0,
        changeBubbles: !0,
        focusinBubbles: !1,
        deleteExpando: !0,
        noCloneEvent: !0,
        inlineBlockNeedsLayout: !1,
        shrinkWrapBlocks: !1,
        reliableMarginRight: !0,
        boxSizingReliable: !0,
        pixelPosition: !1
      }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !o.disabled;
      try {
        delete d.test
      } catch (p) {
        t.deleteExpando = !1
      }
      if (!d.addEventListener && d.attachEvent && d.fireEvent && (d.attachEvent("onclick", h = function() {
        t.noCloneEvent = !1
      }), d.cloneNode(!0).fireEvent("onclick"), d.detachEvent("onclick", h)), a = F.createElement("input"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), d.appendChild(a), r = F.createDocumentFragment(), r.appendChild(d.lastChild), t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = a.checked, r.removeChild(a), r.appendChild(d), d.attachEvent)
      for (c in {
        submit: !0,
        change: !0,
        focusin: !0
      }) l = "on" + c, u = l in d, u || (d.setAttribute(l, "return;"), u = "function" == typeof d[l]), t[c + "Bubbles"] = u;
      return J(function() {
        var i, n, s, o, a = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
        r = F.getElementsByTagName("body")[0];
        r && (i = F.createElement("div"), i.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", r.insertBefore(i, r.firstChild), n = F.createElement("div"), i.appendChild(n), n.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = n.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === s[0].offsetHeight, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = u && 0 === s[0].offsetHeight, n.innerHTML = "", n.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === n.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== r.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(n, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(n, null) || {
          width: "4px"
        }).width, o = F.createElement("div"), o.style.cssText = n.style.cssText = a, o.style.marginRight = o.style.width = "0", n.style.width = "1px", n.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), "undefined" != typeof n.style.zoom && (n.innerHTML = "", n.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === n.offsetWidth, n.style.display = "block", n.style.overflow = "visible", n.innerHTML = "<div></div>", n.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== n.offsetWidth, i.style.zoom = 1), r.removeChild(i), i = n = s = o = null)
      }), r.removeChild(d), i = n = s = o = a = r = d = null, t
    }();
    var mt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    gt = /([A-Z])/g;
    J.extend({
      cache: {},
      deletedIds: [],
      uuid: 0,
      expando: "jQuery" + (J.fn.jquery + Math.random()).replace(/\D/g, ""),
      noData: {
        embed: !0,
        object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
        applet: !0
      },
      hasData: function(e) {
        return e = e.nodeType ? J.cache[e[J.expando]] : e[J.expando], !!e && !s(e)
      },
      data: function(e, i, n, s) {
        if (J.acceptData(e)) {
          var o, a, r = J.expando,
          l = "string" == typeof i,
          c = e.nodeType,
          u = c ? J.cache : e,
          h = c ? e[r] : e[r] && r;
          if (h && u[h] && (s || u[h].data) || !l || n !== t) return h || (c ? e[r] = h = J.deletedIds.pop() || J.guid++ : h = r), u[h] || (u[h] = {}, c || (u[h].toJSON = J.noop)), ("object" == typeof i || "function" == typeof i) && (s ? u[h] = J.extend(u[h], i) : u[h].data = J.extend(u[h].data, i)), o = u[h], s || (o.data || (o.data = {}), o = o.data), n !== t && (o[J.camelCase(i)] = n), l ? (a = o[i], null == a && (a = o[J.camelCase(i)])) : a = o, a
        }
      },
      removeData: function(e, t, i) {
        if (J.acceptData(e)) {
          var n, o, a, r = e.nodeType,
          l = r ? J.cache : e,
          c = r ? e[J.expando] : J.expando;
          if (l[c]) {
            if (t && (n = i ? l[c] : l[c].data)) {
              J.isArray(t) || (t in n ? t = [t] : (t = J.camelCase(t), t = t in n ? [t] : t.split(" ")));
              for (o = 0, a = t.length; a > o; o++) delete n[t[o]];
              if (!(i ? s : J.isEmptyObject)(n)) return
            }(i || (delete l[c].data, s(l[c]))) && (r ? J.cleanData([e], !0) : J.support.deleteExpando || l != l.window ? delete l[c] : l[c] = null)
          }
        }
      },
      _data: function(e, t, i) {
        return J.data(e, t, i, !0)
      },
      acceptData: function(e) {
        var t = e.nodeName && J.noData[e.nodeName.toLowerCase()];
        return !t || t !== !0 && e.getAttribute("classid") === t
      }
    }), J.fn.extend({
      data: function(e, i) {
        var s, o, a, r, l, c = this[0],
        u = 0,
        h = null;
        if (e === t) {
          if (this.length && (h = J.data(c), 1 === c.nodeType && !J._data(c, "parsedAttrs"))) {
            for (a = c.attributes, l = a.length; l > u; u++) r = a[u].name, r.indexOf("data-") || (r = J.camelCase(r.substring(5)), n(c, r, h[r]));
            J._data(c, "parsedAttrs", !0)
          }
          return h
        }
        return "object" == typeof e ? this.each(function() {
          J.data(this, e)
        }) : (s = e.split(".", 2), s[1] = s[1] ? "." + s[1] : "", o = s[1] + "!", J.access(this, function(i) {
          return i === t ? (h = this.triggerHandler("getData" + o, [s[0]]), h === t && c && (h = J.data(c, e), h = n(c, e, h)), h === t && s[1] ? this.data(s[0]) : h) : (s[1] = i, void this.each(function() {
            var t = J(this);
            t.triggerHandler("setData" + o, s), J.data(this, e, i), t.triggerHandler("changeData" + o, s)
          }))
        }, null, i, arguments.length > 1, null, !1))
      },
      removeData: function(e) {
        return this.each(function() {
          J.removeData(this, e)
        })
      }
    }), J.extend({
      queue: function(e, t, i) {
        var n;
        return e ? (t = (t || "fx") + "queue", n = J._data(e, t), i && (!n || J.isArray(i) ? n = J._data(e, t, J.makeArray(i)) : n.push(i)), n || []) : void 0
      },
      dequeue: function(e, t) {
        t = t || "fx";
        var i = J.queue(e, t),
        n = i.length,
        s = i.shift(),
        o = J._queueHooks(e, t),
        a = function() {
          J.dequeue(e, t)
        };
        "inprogress" === s && (s = i.shift(), n--), s && ("fx" === t && i.unshift("inprogress"), delete o.stop, s.call(e, a, o)), !n && o && o.empty.fire()
      },
      _queueHooks: function(e, t) {
        var i = t + "queueHooks";
        return J._data(e, i) || J._data(e, i, {
          empty: J.Callbacks("once memory").add(function() {
            J.removeData(e, t + "queue", !0), J.removeData(e, i, !0)
          })
        })
      }
    }), J.fn.extend({
      queue: function(e, i) {
        var n = 2;
        return "string" != typeof e && (i = e, e = "fx", n--), arguments.length < n ? J.queue(this[0], e) : i === t ? this : this.each(function() {
          var t = J.queue(this, e, i);
          J._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && J.dequeue(this, e)
        })
      },
      dequeue: function(e) {
        return this.each(function() {
          J.dequeue(this, e)
        })
      },
      delay: function(e, t) {
        return e = J.fx ? J.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, i) {
          var n = setTimeout(t, e);
          i.stop = function() {
            clearTimeout(n)
          }
        })
      },
      clearQueue: function(e) {
        return this.queue(e || "fx", [])
      },
      promise: function(e, i) {
        var n, s = 1,
        o = J.Deferred(),
        a = this,
        r = this.length,
        l = function() {
          --s || o.resolveWith(a, [a])
        };
        for ("string" != typeof e && (i = e, e = t), e = e || "fx"; r--;) n = J._data(a[r], e + "queueHooks"), n && n.empty && (s++, n.empty.add(l));
        return l(), o.promise(i)
      }
    });
    var vt, yt, bt, wt = /[\t\r\n]/g,
    _t = /\r/g,
    xt = /^(?:button|input)$/i,
    kt = /^(?:button|input|object|select|textarea)$/i,
    Ct = /^a(?:rea|)$/i,
    Tt = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    Dt = J.support.getSetAttribute;
    J.fn.extend({
      attr: function(e, t) {
        return J.access(this, J.attr, e, t, arguments.length > 1)
      },
      removeAttr: function(e) {
        return this.each(function() {
          J.removeAttr(this, e)
        })
      },
      prop: function(e, t) {
        return J.access(this, J.prop, e, t, arguments.length > 1)
      },
      removeProp: function(e) {
        return e = J.propFix[e] || e, this.each(function() {
          try {
            this[e] = t, delete this[e]
          } catch (i) {}
        })
      },
      addClass: function(e) {
        var t, i, n, s, o, a, r;
        if (J.isFunction(e)) return this.each(function(t) {
          J(this).addClass(e.call(this, t, this.className))
        });
        if (e && "string" == typeof e)
        for (t = e.split(tt), i = 0, n = this.length; n > i; i++)
        if (s = this[i], 1 === s.nodeType)
        if (s.className || 1 !== t.length) {
          for (o = " " + s.className + " ", a = 0, r = t.length; r > a; a++) o.indexOf(" " + t[a] + " ") < 0 && (o += t[a] + " ");
          s.className = J.trim(o)
        } else s.className = e;
        return this
      },
      removeClass: function(e) {
        var i, n, s, o, a, r, l;
        if (J.isFunction(e)) return this.each(function(t) {
          J(this).removeClass(e.call(this, t, this.className))
        });
        if (e && "string" == typeof e || e === t)
        for (i = (e || "").split(tt), r = 0, l = this.length; l > r; r++)
        if (s = this[r], 1 === s.nodeType && s.className) {
          for (n = (" " + s.className + " ").replace(wt, " "), o = 0, a = i.length; a > o; o++)
          for (; n.indexOf(" " + i[o] + " ") >= 0;) n = n.replace(" " + i[o] + " ", " ");
          s.className = e ? J.trim(n) : ""
        }
        return this
      },
      toggleClass: function(e, t) {
        var i = typeof e,
        n = "boolean" == typeof t;
        return this.each(J.isFunction(e) ? function(i) {
          J(this).toggleClass(e.call(this, i, this.className, t), t)
        } : function() {
          if ("string" === i)
          for (var s, o = 0, a = J(this), r = t, l = e.split(tt); s = l[o++];) r = n ? r : !a.hasClass(s), a[r ? "addClass" : "removeClass"](s);
          else("undefined" === i || "boolean" === i) && (this.className && J._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : J._data(this, "__className__") || "")
        })
      },
      hasClass: function(e) {
        for (var t = " " + e + " ", i = 0, n = this.length; n > i; i++)
        if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(wt, " ").indexOf(t) >= 0) return !0;
        return !1
      },
      val: function(e) {
        var i, n, s, o = this[0]; {
          if (arguments.length) return s = J.isFunction(e), this.each(function(n) {
            var o, a = J(this);
            1 === this.nodeType && (o = s ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : J.isArray(o) && (o = J.map(o, function(e) {
              return null == e ? "" : e + ""
            })), i = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, o, "value") !== t || (this.value = o))
          });
          if (o) return i = J.valHooks[o.type] || J.valHooks[o.nodeName.toLowerCase()], i && "get" in i && (n = i.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(_t, "") : null == n ? "" : n)
        }
      }
    }), J.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = e.attributes.value;
            return !t || t.specified ? e.value : e.text
          }
        },
        select: {
          get: function(e) {
            for (var t, i, n = e.options, s = e.selectedIndex, o = "select-one" === e.type || 0 > s, a = o ? null : [], r = o ? s + 1 : n.length, l = 0 > s ? r : o ? s : 0; r > l; l++)
            if (i = n[l], !(!i.selected && l !== s || (J.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && J.nodeName(i.parentNode, "optgroup"))) {
              if (t = J(i).val(), o) return t;
              a.push(t)
            }
            return a
          },
          set: function(e, t) {
            var i = J.makeArray(t);
            return J(e).find("option").each(function() {
              this.selected = J.inArray(J(this).val(), i) >= 0
            }), i.length || (e.selectedIndex = -1), i
          }
        }
      },
      attrFn: {},
      attr: function(e, i, n, s) {
        var o, a, r, l = e.nodeType;
        if (e && 3 !== l && 8 !== l && 2 !== l) return s && J.isFunction(J.fn[i]) ? J(e)[i](n) : "undefined" == typeof e.getAttribute ? J.prop(e, i, n) : (r = 1 !== l || !J.isXMLDoc(e), r && (i = i.toLowerCase(), a = J.attrHooks[i] || (Tt.test(i) ? yt : vt)), n !== t ? null === n ? void J.removeAttr(e, i) : a && "set" in a && r && (o = a.set(e, n, i)) !== t ? o : (e.setAttribute(i, n + ""), n) : a && "get" in a && r && null !== (o = a.get(e, i)) ? o : (o = e.getAttribute(i), null === o ? t : o))
      },
      removeAttr: function(e, t) {
        var i, n, s, o, a = 0;
        if (t && 1 === e.nodeType)
        for (n = t.split(tt); a < n.length; a++) s = n[a], s && (i = J.propFix[s] || s, o = Tt.test(s), o || J.attr(e, s, ""), e.removeAttribute(Dt ? s : i), o && i in e && (e[i] = !1))
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (xt.test(e.nodeName) && e.parentNode) J.error("type property can't be changed");
            else if (!J.support.radioValue && "radio" === t && J.nodeName(e, "input")) {
              var i = e.value;
              return e.setAttribute("type", t), i && (e.value = i), t
            }
          }
        },
        value: {
          get: function(e, t) {
            return vt && J.nodeName(e, "button") ? vt.get(e, t) : t in e ? e.value : null
          },
          set: function(e, t, i) {
            return vt && J.nodeName(e, "button") ? vt.set(e, t, i) : void(e.value = t)
          }
        }
      },
      propFix: {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
      },
      prop: function(e, i, n) {
        var s, o, a, r = e.nodeType;
        if (e && 3 !== r && 8 !== r && 2 !== r) return a = 1 !== r || !J.isXMLDoc(e), a && (i = J.propFix[i] || i, o = J.propHooks[i]), n !== t ? o && "set" in o && (s = o.set(e, n, i)) !== t ? s : e[i] = n : o && "get" in o && null !== (s = o.get(e, i)) ? s : e[i]
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var i = e.getAttributeNode("tabindex");
            return i && i.specified ? parseInt(i.value, 10) : kt.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : t
          }
        }
      }
    }), yt = {
      get: function(e, i) {
        var n, s = J.prop(e, i);
        return s === !0 || "boolean" != typeof s && (n = e.getAttributeNode(i)) && n.nodeValue !== !1 ? i.toLowerCase() : t
      },
      set: function(e, t, i) {
        var n;
        return t === !1 ? J.removeAttr(e, i) : (n = J.propFix[i] || i, n in e && (e[n] = !0), e.setAttribute(i, i.toLowerCase())), i
      }
    }, Dt || (bt = {
      name: !0,
      id: !0,
      coords: !0
    }, vt = J.valHooks.button = {
      get: function(e, i) {
        var n;
        return n = e.getAttributeNode(i), n && (bt[i] ? "" !== n.value : n.specified) ? n.value : t
      },
      set: function(e, t, i) {
        var n = e.getAttributeNode(i);
        return n || (n = F.createAttribute(i), e.setAttributeNode(n)), n.value = t + ""
      }
    }, J.each(["width", "height"], function(e, t) {
      J.attrHooks[t] = J.extend(J.attrHooks[t], {
        set: function(e, i) {
          return "" === i ? (e.setAttribute(t, "auto"), i) : void 0
        }
      })
    }), J.attrHooks.contenteditable = {
      get: vt.get,
      set: function(e, t, i) {
        "" === t && (t = "false"), vt.set(e, t, i)
      }
    }), J.support.hrefNormalized || J.each(["href", "src", "width", "height"], function(e, i) {
      J.attrHooks[i] = J.extend(J.attrHooks[i], {
        get: function(e) {
          var n = e.getAttribute(i, 2);
          return null === n ? t : n
        }
      })
    }), J.support.style || (J.attrHooks.style = {
      get: function(e) {
        return e.style.cssText.toLowerCase() || t
      },
      set: function(e, t) {
        return e.style.cssText = t + ""
      }
    }), J.support.optSelected || (J.propHooks.selected = J.extend(J.propHooks.selected, {
      get: function(e) {
        var t = e.parentNode;
        return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
      }
    })), J.support.enctype || (J.propFix.enctype = "encoding"), J.support.checkOn || J.each(["radio", "checkbox"], function() {
      J.valHooks[this] = {
        get: function(e) {
          return null === e.getAttribute("value") ? "on" : e.value
        }
      }
    }), J.each(["radio", "checkbox"], function() {
      J.valHooks[this] = J.extend(J.valHooks[this], {
        set: function(e, t) {
          return J.isArray(t) ? e.checked = J.inArray(J(e).val(), t) >= 0 : void 0
        }
      })
    });
    var St = /^(?:textarea|input|select)$/i,
    Et = /^([^\.]*|)(?:\.(.+)|)$/,
    Pt = /(?:^|\s)hover(\.\S+|)\b/,
    Mt = /^key/,
    It = /^(?:mouse|contextmenu)|click/,
    $t = /^(?:focusinfocus|focusoutblur)$/,
    At = function(e) {
      return J.event.special.hover ? e : e.replace(Pt, "mouseenter$1 mouseleave$1")
    };
    J.event = {
      add: function(e, i, n, s, o) {
        var a, r, l, c, u, h, d, p, f, m, g;
        if (3 !== e.nodeType && 8 !== e.nodeType && i && n && (a = J._data(e))) {
          for (n.handler && (f = n, n = f.handler, o = f.selector), n.guid || (n.guid = J.guid++), l = a.events, l || (a.events = l = {}), r = a.handle, r || (a.handle = r = function(e) {
            return "undefined" == typeof J || e && J.event.triggered === e.type ? t : J.event.dispatch.apply(r.elem, arguments)
          }, r.elem = e), i = J.trim(At(i)).split(" "), c = 0; c < i.length; c++) u = Et.exec(i[c]) || [], h = u[1], d = (u[2] || "").split(".").sort(), g = J.event.special[h] || {}, h = (o ? g.delegateType : g.bindType) || h, g = J.event.special[h] || {}, p = J.extend({
            type: h,
            origType: u[1],
            data: s,
            handler: n,
            guid: n.guid,
            selector: o,
            needsContext: o && J.expr.match.needsContext.test(o),
            namespace: d.join(".")
          }, f), m = l[h], m || (m = l[h] = [], m.delegateCount = 0, g.setup && g.setup.call(e, s, d, r) !== !1 || (e.addEventListener ? e.addEventListener(h, r, !1) : e.attachEvent && e.attachEvent("on" + h, r))), g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), o ? m.splice(m.delegateCount++, 0, p) : m.push(p), J.event.global[h] = !0;
          e = null
        }
      },
      global: {},
      remove: function(e, t, i, n, s) {
        var o, a, r, l, c, u, h, d, p, f, m, g = J.hasData(e) && J._data(e);
        if (g && (d = g.events)) {
          for (t = J.trim(At(t || "")).split(" "), o = 0; o < t.length; o++)
          if (a = Et.exec(t[o]) || [], r = l = a[1], c = a[2], r) {
            for (p = J.event.special[r] || {}, r = (n ? p.delegateType : p.bindType) || r, f = d[r] || [], u = f.length, c = c ? new RegExp("(^|\\.)" + c.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = 0; h < f.length; h++) m = f[h], !(!s && l !== m.origType || i && i.guid !== m.guid || c && !c.test(m.namespace) || n && n !== m.selector && ("**" !== n || !m.selector) || (f.splice(h--, 1), m.selector && f.delegateCount--, !p.remove || !p.remove.call(e, m)));
            0 === f.length && u !== f.length && ((!p.teardown || p.teardown.call(e, c, g.handle) === !1) && J.removeEvent(e, r, g.handle), delete d[r])
          } else
          for (r in d) J.event.remove(e, r + t[o], i, n, !0);
          J.isEmptyObject(d) && (delete g.handle, J.removeData(e, "events", !0))
        }
      },
      customEvent: {
        getData: !0,
        setData: !0,
        changeData: !0
      },
      trigger: function(i, n, s, o) {
        if (!s || 3 !== s.nodeType && 8 !== s.nodeType) {
          var a, r, l, c, u, h, d, p, f, m, g = i.type || i,
          v = [];
          if ($t.test(g + J.event.triggered)) return;
          if (g.indexOf("!") >= 0 && (g = g.slice(0, -1), r = !0), g.indexOf(".") >= 0 && (v = g.split("."), g = v.shift(), v.sort()), (!s || J.event.customEvent[g]) && !J.event.global[g]) return;
          if (i = "object" == typeof i ? i[J.expando] ? i : new J.Event(g, i) : new J.Event(g), i.type = g, i.isTrigger = !0, i.exclusive = r, i.namespace = v.join("."), i.namespace_re = i.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = g.indexOf(":") < 0 ? "on" + g : "", !s) {
            a = J.cache;
            for (l in a) a[l].events && a[l].events[g] && J.event.trigger(i, n, a[l].handle.elem, !0);
            return
          }
          if (i.result = t, i.target || (i.target = s), n = null != n ? J.makeArray(n) : [], n.unshift(i), d = J.event.special[g] || {}, d.trigger && d.trigger.apply(s, n) === !1) return;
          if (f = [
          [s, d.bindType || g]
          ], !o && !d.noBubble && !J.isWindow(s)) {
            for (m = d.delegateType || g, c = $t.test(m + g) ? s : s.parentNode, u = s; c; c = c.parentNode) f.push([c, m]), u = c;
            u === (s.ownerDocument || F) && f.push([u.defaultView || u.parentWindow || e, m])
          }
          for (l = 0; l < f.length && !i.isPropagationStopped(); l++) c = f[l][0], i.type = f[l][1], p = (J._data(c, "events") || {})[i.type] && J._data(c, "handle"), p && p.apply(c, n), p = h && c[h], p && J.acceptData(c) && p.apply && p.apply(c, n) === !1 && i.preventDefault();
          return i.type = g, !(o || i.isDefaultPrevented() || d._default && d._default.apply(s.ownerDocument, n) !== !1 || "click" === g && J.nodeName(s, "a") || !J.acceptData(s) || !h || !s[g] || ("focus" === g || "blur" === g) && 0 === i.target.offsetWidth || J.isWindow(s) || (u = s[h], u && (s[h] = null), J.event.triggered = g, s[g](), J.event.triggered = t, !u || !(s[h] = u))), i.result
        }
      },
      dispatch: function(i) {
        i = J.event.fix(i || e.event);
        var n, s, o, a, r, l, c, u, h, d = (J._data(this, "events") || {})[i.type] || [],
        p = d.delegateCount,
        f = X.call(arguments),
        m = !i.exclusive && !i.namespace,
        g = J.event.special[i.type] || {},
        v = [];
        if (f[0] = i, i.delegateTarget = this, !g.preDispatch || g.preDispatch.call(this, i) !== !1) {
          if (p && (!i.button || "click" !== i.type))
          for (o = i.target; o != this; o = o.parentNode || this)
          if (o.disabled !== !0 || "click" !== i.type) {
            for (r = {}, c = [], n = 0; p > n; n++) u = d[n], h = u.selector, r[h] === t && (r[h] = u.needsContext ? J(h, this).index(o) >= 0 : J.find(h, this, null, [o]).length), r[h] && c.push(u);
            c.length && v.push({
              elem: o,
              matches: c
            })
          }
          for (d.length > p && v.push({
            elem: this,
            matches: d.slice(p)
          }), n = 0; n < v.length && !i.isPropagationStopped(); n++)
          for (l = v[n], i.currentTarget = l.elem, s = 0; s < l.matches.length && !i.isImmediatePropagationStopped(); s++) u = l.matches[s], (m || !i.namespace && !u.namespace || i.namespace_re && i.namespace_re.test(u.namespace)) && (i.data = u.data, i.handleObj = u, a = ((J.event.special[u.origType] || {}).handle || u.handler).apply(l.elem, f), a !== t && (i.result = a, a === !1 && (i.preventDefault(), i.stopPropagation())));
          return g.postDispatch && g.postDispatch.call(this, i), i.result
        }
      },
      props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(e, t) {
          return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(e, i) {
          var n, s, o, a = i.button,
          r = i.fromElement;
          return null == e.pageX && null != i.clientX && (n = e.target.ownerDocument || F, s = n.documentElement, o = n.body, e.pageX = i.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = i.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !e.relatedTarget && r && (e.relatedTarget = r === e.target ? i.toElement : r), !e.which && a !== t && (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
        }
      },
      fix: function(e) {
        if (e[J.expando]) return e;
        var t, i, n = e,
        s = J.event.fixHooks[e.type] || {},
        o = s.props ? this.props.concat(s.props) : this.props;
        for (e = J.Event(n), t = o.length; t;) i = o[--t], e[i] = n[i];
        return e.target || (e.target = n.srcElement || F), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, n) : e
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          delegateType: "focusin"
        },
        blur: {
          delegateType: "focusout"
        },
        beforeunload: {
          setup: function(e, t, i) {
            J.isWindow(this) && (this.onbeforeunload = i)
          },
          teardown: function(e, t) {
            this.onbeforeunload === t && (this.onbeforeunload = null)
          }
        }
      },
      simulate: function(e, t, i, n) {
        var s = J.extend(new J.Event, i, {
          type: e,
          isSimulated: !0,
          originalEvent: {}
        });
        n ? J.event.trigger(s, null, t) : J.event.dispatch.call(t, s), s.isDefaultPrevented() && i.preventDefault()
      }
    }, J.event.handle = J.event.dispatch, J.removeEvent = F.removeEventListener ? function(e, t, i) {
      e.removeEventListener && e.removeEventListener(t, i, !1)
    } : function(e, t, i) {
      var n = "on" + t;
      e.detachEvent && ("undefined" == typeof e[n] && (e[n] = null), e.detachEvent(n, i))
    }, J.Event = function(e, t) {
      return this instanceof J.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? a : o) : this.type = e, t && J.extend(this, t), this.timeStamp = e && e.timeStamp || J.now(), this[J.expando] = !0, void 0) : new J.Event(e, t)
    }, J.Event.prototype = {
      preventDefault: function() {
        this.isDefaultPrevented = a;
        var e = this.originalEvent;
        e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
      },
      stopPropagation: function() {
        this.isPropagationStopped = a;
        var e = this.originalEvent;
        e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
      },
      stopImmediatePropagation: function() {
        this.isImmediatePropagationStopped = a, this.stopPropagation()
      },
      isDefaultPrevented: o,
      isPropagationStopped: o,
      isImmediatePropagationStopped: o
    }, J.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    }, function(e, t) {
      J.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(e) {
          {
            var i, n = this,
            s = e.relatedTarget,
            o = e.handleObj;
            o.selector
          }
          return (!s || s !== n && !J.contains(n, s)) && (e.type = o.origType, i = o.handler.apply(this, arguments), e.type = t), i
        }
      }
    }), J.support.submitBubbles || (J.event.special.submit = {
      setup: function() {
        return J.nodeName(this, "form") ? !1 : void J.event.add(this, "click._submit keypress._submit", function(e) {
          var i = e.target,
          n = J.nodeName(i, "input") || J.nodeName(i, "button") ? i.form : t;
          n && !J._data(n, "_submit_attached") && (J.event.add(n, "submit._submit", function(e) {
            e._submit_bubble = !0
          }), J._data(n, "_submit_attached", !0))
        })
      },
      postDispatch: function(e) {
        e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && J.event.simulate("submit", this.parentNode, e, !0))
      },
      teardown: function() {
        return J.nodeName(this, "form") ? !1 : void J.event.remove(this, "._submit")
      }
    }), J.support.changeBubbles || (J.event.special.change = {
      setup: function() {
        return St.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (J.event.add(this, "propertychange._change", function(e) {
          "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
        }), J.event.add(this, "click._change", function(e) {
          this._just_changed && !e.isTrigger && (this._just_changed = !1), J.event.simulate("change", this, e, !0)
        })), !1) : void J.event.add(this, "beforeactivate._change", function(e) {
          var t = e.target;
          St.test(t.nodeName) && !J._data(t, "_change_attached") && (J.event.add(t, "change._change", function(e) {
            this.parentNode && !e.isSimulated && !e.isTrigger && J.event.simulate("change", this.parentNode, e, !0)
          }), J._data(t, "_change_attached", !0))
        })
      },
      handle: function(e) {
        var t = e.target;
        return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
      },
      teardown: function() {
        return J.event.remove(this, "._change"), !St.test(this.nodeName)
      }
    }), J.support.focusinBubbles || J.each({
      focus: "focusin",
      blur: "focusout"
    }, function(e, t) {
      var i = 0,
      n = function(e) {
        J.event.simulate(t, e.target, J.event.fix(e), !0)
      };
      J.event.special[t] = {
        setup: function() {
          0 === i++ && F.addEventListener(e, n, !0)
        },
        teardown: function() {
          0 === --i && F.removeEventListener(e, n, !0)
        }
      }
    }), J.fn.extend({
      on: function(e, i, n, s, a) {
        var r, l;
        if ("object" == typeof e) {
          "string" != typeof i && (n = n || i, i = t);
          for (l in e) this.on(l, i, n, e[l], a);
          return this
        }
        if (null == n && null == s ? (s = i, n = i = t) : null == s && ("string" == typeof i ? (s = n, n = t) : (s = n, n = i, i = t)), s === !1) s = o;
        else if (!s) return this;
        return 1 === a && (r = s, s = function(e) {
          return J().off(e), r.apply(this, arguments)
        }, s.guid = r.guid || (r.guid = J.guid++)), this.each(function() {
          J.event.add(this, e, s, n, i)
        })
      },
      one: function(e, t, i, n) {
        return this.on(e, t, i, n, 1)
      },
      off: function(e, i, n) {
        var s, a;
        if (e && e.preventDefault && e.handleObj) return s = e.handleObj, J(e.delegateTarget).off(s.namespace ? s.origType + "." + s.namespace : s.origType, s.selector, s.handler), this;
        if ("object" == typeof e) {
          for (a in e) this.off(a, i, e[a]);
          return this
        }
        return (i === !1 || "function" == typeof i) && (n = i, i = t), n === !1 && (n = o), this.each(function() {
          J.event.remove(this, e, n, i)
        })
      },
      bind: function(e, t, i) {
        return this.on(e, null, t, i)
      },
      unbind: function(e, t) {
        return this.off(e, null, t)
      },
      live: function(e, t, i) {
        return J(this.context).on(e, this.selector, t, i), this
      },
      die: function(e, t) {
        return J(this.context).off(e, this.selector || "**", t), this
      },
      delegate: function(e, t, i, n) {
        return this.on(t, e, i, n)
      },
      undelegate: function(e, t, i) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
      },
      trigger: function(e, t) {
        return this.each(function() {
          J.event.trigger(e, t, this)
        })
      },
      triggerHandler: function(e, t) {
        return this[0] ? J.event.trigger(e, t, this[0], !0) : void 0
      },
      toggle: function(e) {
        var t = arguments,
        i = e.guid || J.guid++,
        n = 0,
        s = function(i) {
          var s = (J._data(this, "lastToggle" + e.guid) || 0) % n;
          return J._data(this, "lastToggle" + e.guid, s + 1), i.preventDefault(), t[s].apply(this, arguments) || !1
        };
        for (s.guid = i; n < t.length;) t[n++].guid = i;
        return this.click(s)
      },
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
      J.fn[t] = function(e, i) {
        return null == i && (i = e, e = null), arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
      }, Mt.test(t) && (J.event.fixHooks[t] = J.event.keyHooks), It.test(t) && (J.event.fixHooks[t] = J.event.mouseHooks)
    }),
    function(e, t) {
      function i(e, t, i, n) {
        i = i || [], t = t || I;
        var s, o, a, r, l = t.nodeType;
        if (!e || "string" != typeof e) return i;
        if (1 !== l && 9 !== l) return [];
        if (a = _(t), !a && !n && (s = it.exec(e)))
        if (r = s[1]) {
          if (9 === l) {
            if (o = t.getElementById(r), !o || !o.parentNode) return i;
            if (o.id === r) return i.push(o), i
          } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(r)) && x(t, o) && o.id === r) return i.push(o), i
        } else {
          if (s[2]) return H.apply(i, z.call(t.getElementsByTagName(e), 0)), i;
          if ((r = s[3]) && dt && t.getElementsByClassName) return H.apply(i, z.call(t.getElementsByClassName(r), 0)), i
        }
        return m(e.replace(G, "$1"), t, i, n, a)
      }

      function n(e) {
        return function(t) {
          var i = t.nodeName.toLowerCase();
          return "input" === i && t.type === e
        }
      }

      function s(e) {
        return function(t) {
          var i = t.nodeName.toLowerCase();
          return ("input" === i || "button" === i) && t.type === e
        }
      }

      function o(e) {
        return L(function(t) {
          return t = +t, L(function(i, n) {
            for (var s, o = e([], i.length, t), a = o.length; a--;) i[s = o[a]] && (i[s] = !(n[s] = i[s]))
          })
        })
      }

      function a(e, t, i) {
        if (e === t) return i;
        for (var n = e.nextSibling; n;) {
          if (n === t) return -1;
          n = n.nextSibling
        }
        return 1
      }

      function r(e, t) {
        var n, s, o, a, r, l, c, u = R[P][e + " "];
        if (u) return t ? 0 : u.slice(0);
        for (r = e, l = [], c = b.preFilter; r;) {
          (!n || (s = Z.exec(r))) && (s && (r = r.slice(s[0].length) || r), l.push(o = [])), n = !1, (s = et.exec(r)) && (o.push(n = new M(s.shift())), r = r.slice(n.length), n.type = s[0].replace(G, " "));
          for (a in b.filter)(s = rt[a].exec(r)) && (!c[a] || (s = c[a](s))) && (o.push(n = new M(s.shift())), r = r.slice(n.length), n.type = a, n.matches = s);
          if (!n) break
        }
        return t ? r.length : r ? i.error(e) : R(e, l).slice(0)
      }

      function l(e, t, i) {
        var n = t.dir,
        s = i && "parentNode" === t.dir,
        o = N++;
        return t.first ? function(t, i, o) {
          for (; t = t[n];)
          if (s || 1 === t.nodeType) return e(t, i, o)
        } : function(t, i, a) {
          if (a) {
            for (; t = t[n];)
            if ((s || 1 === t.nodeType) && e(t, i, a)) return t
          } else
          for (var r, l = A + " " + o + " ", c = l + v; t = t[n];)
          if (s || 1 === t.nodeType) {
            if ((r = t[P]) === c) return t.sizset;
            if ("string" == typeof r && 0 === r.indexOf(l)) {
              if (t.sizset) return t
            } else {
              if (t[P] = c, e(t, i, a)) return t.sizset = !0, t;
              t.sizset = !1
            }
          }
        }
      }

      function c(e) {
        return e.length > 1 ? function(t, i, n) {
          for (var s = e.length; s--;)
          if (!e[s](t, i, n)) return !1;
          return !0
        } : e[0]
      }

      function u(e, t, i, n, s) {
        for (var o, a = [], r = 0, l = e.length, c = null != t; l > r; r++)(o = e[r]) && (!i || i(o, n, s)) && (a.push(o), c && t.push(r));
        return a
      }

      function h(e, t, i, n, s, o) {
        return n && !n[P] && (n = h(n)), s && !s[P] && (s = h(s, o)), L(function(o, a, r, l) {
          var c, h, d, p = [],
          m = [],
          g = a.length,
          v = o || f(t || "*", r.nodeType ? [r] : r, []),
          y = !e || !o && t ? v : u(v, p, e, r, l),
          b = i ? s || (o ? e : g || n) ? [] : a : y;
          if (i && i(y, b, r, l), n)
          for (c = u(b, m), n(c, [], r, l), h = c.length; h--;)(d = c[h]) && (b[m[h]] = !(y[m[h]] = d));
          if (o) {
            if (s || e) {
              if (s) {
                for (c = [], h = b.length; h--;)(d = b[h]) && c.push(y[h] = d);
                s(null, b = [], c, l)
              }
              for (h = b.length; h--;)(d = b[h]) && (c = s ? O.call(o, d) : p[h]) > -1 && (o[c] = !(a[c] = d))
            }
          } else b = u(b === a ? b.splice(g, b.length) : b), s ? s(null, a, b, l) : H.apply(a, b)
        })
      }

      function d(e) {
        for (var t, i, n, s = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], r = o ? 1 : 0, u = l(function(e) {
          return e === t
        }, a, !0), p = l(function(e) {
          return O.call(t, e) > -1
        }, a, !0), f = [function(e, i, n) {
          return !o && (n || i !== D) || ((t = i).nodeType ? u(e, i, n) : p(e, i, n))
        }]; s > r; r++)
        if (i = b.relative[e[r].type]) f = [l(c(f), i)];
        else {
          if (i = b.filter[e[r].type].apply(null, e[r].matches), i[P]) {
            for (n = ++r; s > n && !b.relative[e[n].type]; n++);
            return h(r > 1 && c(f), r > 1 && e.slice(0, r - 1).join("").replace(G, "$1"), i, n > r && d(e.slice(r, n)), s > n && d(e = e.slice(n)), s > n && e.join(""))
          }
          f.push(i)
        }
        return c(f)
      }

      function p(e, t) {
        var n = t.length > 0,
        s = e.length > 0,
        o = function(a, r, l, c, h) {
          var d, p, f, m = [],
          g = 0,
          y = "0",
          w = a && [],
          _ = null != h,
          x = D,
          k = a || s && b.find.TAG("*", h && r.parentNode || r),
          C = A += null == x ? 1 : Math.E;
          for (_ && (D = r !== I && r, v = o.el); null != (d = k[y]); y++) {
            if (s && d) {
              for (p = 0; f = e[p]; p++)
              if (f(d, r, l)) {
                c.push(d);
                break
              }
              _ && (A = C, v = ++o.el)
            }
            n && ((d = !f && d) && g--, a && w.push(d))
          }
          if (g += y, n && y !== g) {
            for (p = 0; f = t[p]; p++) f(w, m, r, l);
            if (a) {
              if (g > 0)
              for (; y--;) !w[y] && !m[y] && (m[y] = j.call(c));
              m = u(m)
            }
            H.apply(c, m), _ && !a && m.length > 0 && g + t.length > 1 && i.uniqueSort(c)
          }
          return _ && (A = C, D = x), w
        };
        return o.el = 0, n ? L(o) : o
      }

      function f(e, t, n) {
        for (var s = 0, o = t.length; o > s; s++) i(e, t[s], n);
        return n
      }

      function m(e, t, i, n, s) {
        {
          var o, a, l, c, u, h = r(e);
          h.length
        }
        if (!n && 1 === h.length) {
          if (a = h[0] = h[0].slice(0), a.length > 2 && "ID" === (l = a[0]).type && 9 === t.nodeType && !s && b.relative[a[1].type]) {
            if (t = b.find.ID(l.matches[0].replace(at, ""), t, s)[0], !t) return i;
            e = e.slice(a.shift().length)
          }
          for (o = rt.POS.test(e) ? -1 : a.length - 1; o >= 0 && (l = a[o], !b.relative[c = l.type]); o--)
          if ((u = b.find[c]) && (n = u(l.matches[0].replace(at, ""), nt.test(a[0].type) && t.parentNode || t, s))) {
            if (a.splice(o, 1), e = n.length && a.join(""), !e) return H.apply(i, z.call(n, 0)), i;
            break
          }
        }
        return k(e, h)(n, t, s, i, nt.test(e)), i
      }

      function g() {}
      var v, y, b, w, _, x, k, C, T, D, S = !0,
      E = "undefined",
      P = ("sizcache" + Math.random()).replace(".", ""),
      M = String,
      I = e.document,
      $ = I.documentElement,
      A = 0,
      N = 0,
      j = [].pop,
      H = [].push,
      z = [].slice,
      O = [].indexOf || function(e) {
        for (var t = 0, i = this.length; i > t; t++)
        if (this[t] === e) return t;
        return -1
      },
      L = function(e, t) {
        return e[P] = null == t || t, e
      },
      W = function() {
        var e = {},
        t = [];
        return L(function(i, n) {
          return t.push(i) > b.cacheLength && delete e[t.shift()], e[i + " "] = n
        }, e)
      },
      F = W(),
      R = W(),
      B = W(),
      Y = "[\\x20\\t\\r\\n\\f]",
      q = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
      U = q.replace("w", "w#"),
      X = "([*^$|!~]?=)",
      Q = "\\[" + Y + "*(" + q + ")" + Y + "*(?:" + X + Y + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + U + ")|)|)" + Y + "*\\]",
      V = ":(" + q + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + Q + ")|[^:]|\\\\.)*|.*))\\)|)",
      K = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + Y + "*((?:-\\d)?\\d*)" + Y + "*\\)|)(?=[^-]|$)",
      G = new RegExp("^" + Y + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Y + "+$", "g"),
      Z = new RegExp("^" + Y + "*," + Y + "*"),
      et = new RegExp("^" + Y + "*([\\x20\\t\\r\\n\\f>+~])" + Y + "*"),
      tt = new RegExp(V),
      it = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
      nt = /[\x20\t\r\n\f]*[+~]/,
      st = /h\d/i,
      ot = /input|select|textarea|button/i,
      at = /\\(?!\\)/g,
      rt = {
        ID: new RegExp("^#(" + q + ")"),
        CLASS: new RegExp("^\\.(" + q + ")"),
        NAME: new RegExp("^\\[name=['\"]?(" + q + ")['\"]?\\]"),
        TAG: new RegExp("^(" + q.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + Q),
        PSEUDO: new RegExp("^" + V),
        POS: new RegExp(K, "i"),
        CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + Y + "*(even|odd|(([+-]|)(\\d*)n|)" + Y + "*(?:([+-]|)" + Y + "*(\\d+)|))" + Y + "*\\)|)", "i"),
        needsContext: new RegExp("^" + Y + "*[>+~]|" + K, "i")
      },
      lt = function(e) {
        var t = I.createElement("div");
        try {
          return e(t)
        } catch (i) {
          return !1
        } finally {
          t = null
        }
      },
      ct = lt(function(e) {
        return e.appendChild(I.createComment("")), !e.getElementsByTagName("*").length
      }),
      ut = lt(function(e) {
        return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== E && "#" === e.firstChild.getAttribute("href")
      }),
      ht = lt(function(e) {
        e.innerHTML = "<select></select>";
        var t = typeof e.lastChild.getAttribute("multiple");
        return "boolean" !== t && "string" !== t
      }),
      dt = lt(function(e) {
        return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
      }),
      pt = lt(function(e) {
        e.id = P + 0, e.innerHTML = "<a name='" + P + "'></a><div name='" + P + "'></div>", $.insertBefore(e, $.firstChild);
        var t = I.getElementsByName && I.getElementsByName(P).length === 2 + I.getElementsByName(P + 0).length;
        return y = !I.getElementById(P), $.removeChild(e), t
      });
      try {
        z.call($.childNodes, 0)[0].nodeType
      } catch (ft) {
        z = function(e) {
          for (var t, i = []; t = this[e]; e++) i.push(t);
          return i
        }
      }
      i.matches = function(e, t) {
        return i(e, null, null, t)
      }, i.matchesSelector = function(e, t) {
        return i(t, null, null, [e]).length > 0
      }, w = i.getText = function(e) {
        var t, i = "",
        n = 0,
        s = e.nodeType;
        if (s) {
          if (1 === s || 9 === s || 11 === s) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) i += w(e)
          } else if (3 === s || 4 === s) return e.nodeValue
        } else
        for (; t = e[n]; n++) i += w(t);
        return i
      }, _ = i.isXML = function(e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return t ? "HTML" !== t.nodeName : !1
      }, x = i.contains = $.contains ? function(e, t) {
        var i = 9 === e.nodeType ? e.documentElement : e,
        n = t && t.parentNode;
        return e === n || !!(n && 1 === n.nodeType && i.contains && i.contains(n))
      } : $.compareDocumentPosition ? function(e, t) {
        return t && !!(16 & e.compareDocumentPosition(t))
      } : function(e, t) {
        for (; t = t.parentNode;)
        if (t === e) return !0;
        return !1
      }, i.attr = function(e, t) {
        var i, n = _(e);
        return n || (t = t.toLowerCase()), (i = b.attrHandle[t]) ? i(e) : n || ht ? e.getAttribute(t) : (i = e.getAttributeNode(t), i ? "boolean" == typeof e[t] ? e[t] ? t : null : i.specified ? i.value : null : null)
      }, b = i.selectors = {
        cacheLength: 50,
        createPseudo: L,
        match: rt,
        attrHandle: ut ? {} : {
          href: function(e) {
            return e.getAttribute("href", 2)
          },
          type: function(e) {
            return e.getAttribute("type")
          }
        },
        find: {
          ID: y ? function(e, t, i) {
            if (typeof t.getElementById !== E && !i) {
              var n = t.getElementById(e);
              return n && n.parentNode ? [n] : []
            }
          } : function(e, i, n) {
            if (typeof i.getElementById !== E && !n) {
              var s = i.getElementById(e);
              return s ? s.id === e || typeof s.getAttributeNode !== E && s.getAttributeNode("id").value === e ? [s] : t : []
            }
          },
          TAG: ct ? function(e, t) {
            return typeof t.getElementsByTagName !== E ? t.getElementsByTagName(e) : void 0
          } : function(e, t) {
            var i = t.getElementsByTagName(e);
            if ("*" === e) {
              for (var n, s = [], o = 0; n = i[o]; o++) 1 === n.nodeType && s.push(n);
              return s
            }
            return i
          },
          NAME: pt && function(e, t) {
            return typeof t.getElementsByName !== E ? t.getElementsByName(name) : void 0
          },
          CLASS: dt && function(e, t, i) {
            return typeof t.getElementsByClassName === E || i ? void 0 : t.getElementsByClassName(e)
          }
        },
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function(e) {
            return e[1] = e[1].replace(at, ""), e[3] = (e[4] || e[5] || "").replace(at, ""), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
          },
          CHILD: function(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1] ? (e[2] || i.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2])), e[4] = +(e[6] + e[7] || "odd" === e[2])) : e[2] && i.error(e[0]), e
          },
          PSEUDO: function(e) {
            var t, i;
            return rt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[3] : (t = e[4]) && (tt.test(t) && (i = r(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (t = t.slice(0, i), e[0] = e[0].slice(0, i)), e[2] = t), e.slice(0, 3))
          }
        },
        filter: {
          ID: y ? function(e) {
            return e = e.replace(at, ""),
            function(t) {
              return t.getAttribute("id") === e
            }
          } : function(e) {
            return e = e.replace(at, ""),
            function(t) {
              var i = typeof t.getAttributeNode !== E && t.getAttributeNode("id");
              return i && i.value === e
            }
          },
          TAG: function(e) {
            return "*" === e ? function() {
              return !0
            } : (e = e.replace(at, "").toLowerCase(), function(t) {
              return t.nodeName && t.nodeName.toLowerCase() === e
            })
          },
          CLASS: function(e) {
            var t = F[P][e + " "];
            return t || (t = new RegExp("(^|" + Y + ")" + e + "(" + Y + "|$)")) && F(e, function(e) {
              return t.test(e.className || typeof e.getAttribute !== E && e.getAttribute("class") || "")
            })
          },
          ATTR: function(e, t, n) {
            return function(s) {
              var o = i.attr(s, e);
              return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.substr(o.length - n.length) === n : "~=" === t ? (" " + o + " ").indexOf(n) > -1 : "|=" === t ? o === n || o.substr(0, n.length + 1) === n + "-" : !1) : !0
            }
          },
          CHILD: function(e, t, i, n) {
            return "nth" === e ? function(e) {
              var t, s, o = e.parentNode;
              if (1 === i && 0 === n) return !0;
              if (o)
              for (s = 0, t = o.firstChild; t && (1 !== t.nodeType || (s++, e !== t)); t = t.nextSibling);
              return s -= n, s === i || s % i === 0 && s / i >= 0
            } : function(t) {
              var i = t;
              switch (e) {
                case "only":
                case "first":
                for (; i = i.previousSibling;)
                if (1 === i.nodeType) return !1;
                if ("first" === e) return !0;
                i = t;
                case "last":
                for (; i = i.nextSibling;)
                if (1 === i.nodeType) return !1;
                return !0
              }
            }
          },
          PSEUDO: function(e, t) {
            var n, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || i.error("unsupported pseudo: " + e);
            return s[P] ? s(t) : s.length > 1 ? (n = [e, e, "", t], b.setFilters.hasOwnProperty(e.toLowerCase()) ? L(function(e, i) {
              for (var n, o = s(e, t), a = o.length; a--;) n = O.call(e, o[a]), e[n] = !(i[n] = o[a])
            }) : function(e) {
              return s(e, 0, n)
            }) : s
          }
        },
        pseudos: {
          not: L(function(e) {
            var t = [],
            i = [],
            n = k(e.replace(G, "$1"));
            return n[P] ? L(function(e, t, i, s) {
              for (var o, a = n(e, null, s, []), r = e.length; r--;)(o = a[r]) && (e[r] = !(t[r] = o))
            }) : function(e, s, o) {
              return t[0] = e, n(t, null, o, i), !i.pop()
            }
          }),
          has: L(function(e) {
            return function(t) {
              return i(e, t).length > 0
            }
          }),
          contains: L(function(e) {
            return function(t) {
              return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
            }
          }),
          enabled: function(e) {
            return e.disabled === !1
          },
          disabled: function(e) {
            return e.disabled === !0
          },
          checked: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected
          },
          selected: function(e) {
            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
          },
          parent: function(e) {
            return !b.pseudos.empty(e)
          },
          empty: function(e) {
            var t;
            for (e = e.firstChild; e;) {
              if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t) return !1;
              e = e.nextSibling
            }
            return !0
          },
          header: function(e) {
            return st.test(e.nodeName)
          },
          text: function(e) {
            var t, i;
            return "input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null == (i = e.getAttribute("type")) || i.toLowerCase() === t)
          },
          radio: n("radio"),
          checkbox: n("checkbox"),
          file: n("file"),
          password: n("password"),
          image: n("image"),
          submit: s("submit"),
          reset: s("reset"),
          button: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
          },
          input: function(e) {
            return ot.test(e.nodeName)
          },
          focus: function(e) {
            var t = e.ownerDocument;
            return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
          },
          active: function(e) {
            return e === e.ownerDocument.activeElement
          },
          first: o(function() {
            return [0]
          }),
          last: o(function(e, t) {
            return [t - 1]
          }),
          eq: o(function(e, t, i) {
            return [0 > i ? i + t : i]
          }),
          even: o(function(e, t) {
            for (var i = 0; t > i; i += 2) e.push(i);
            return e
          }),
          odd: o(function(e, t) {
            for (var i = 1; t > i; i += 2) e.push(i);
            return e
          }),
          lt: o(function(e, t, i) {
            for (var n = 0 > i ? i + t : i; --n >= 0;) e.push(n);
            return e
          }),
          gt: o(function(e, t, i) {
            for (var n = 0 > i ? i + t : i; ++n < t;) e.push(n);
            return e
          })
        }
      }, C = $.compareDocumentPosition ? function(e, t) {
        return e === t ? (T = !0, 0) : (e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) : e.compareDocumentPosition) ? -1 : 1
      } : function(e, t) {
        if (e === t) return T = !0, 0;
        if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
        var i, n, s = [],
        o = [],
        r = e.parentNode,
        l = t.parentNode,
        c = r;
        if (r === l) return a(e, t);
        if (!r) return -1;
        if (!l) return 1;
        for (; c;) s.unshift(c), c = c.parentNode;
        for (c = l; c;) o.unshift(c), c = c.parentNode;
        i = s.length, n = o.length;
        for (var u = 0; i > u && n > u; u++)
        if (s[u] !== o[u]) return a(s[u], o[u]);
        return u === i ? a(e, o[u], -1) : a(s[u], t, 1)
      }, [0, 0].sort(C), S = !T, i.uniqueSort = function(e) {
        var t, i = [],
        n = 1,
        s = 0;
        if (T = S, e.sort(C), T) {
          for (; t = e[n]; n++) t === e[n - 1] && (s = i.push(n));
          for (; s--;) e.splice(i[s], 1)
        }
        return e
      }, i.error = function(e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
      }, k = i.compile = function(e, t) {
        var i, n = [],
        s = [],
        o = B[P][e + " "];
        if (!o) {
          for (t || (t = r(e)), i = t.length; i--;) o = d(t[i]), o[P] ? n.push(o) : s.push(o);
          o = B(e, p(s, n))
        }
        return o
      }, I.querySelectorAll && function() {
        var e, t = m,
        n = /'|\\/g,
        s = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
        o = [":focus"],
        a = [":active"],
        l = $.matchesSelector || $.mozMatchesSelector || $.webkitMatchesSelector || $.oMatchesSelector || $.msMatchesSelector;
        lt(function(e) {
          e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || o.push("\\[" + Y + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || o.push(":checked")
        }), lt(function(e) {
          e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && o.push("[*^$]=" + Y + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled")
        }), o = new RegExp(o.join("|")), m = function(e, i, s, a, l) {
          if (!a && !l && !o.test(e)) {
            var c, u, h = !0,
            d = P,
            p = i,
            f = 9 === i.nodeType && e;
            if (1 === i.nodeType && "object" !== i.nodeName.toLowerCase()) {
              for (c = r(e), (h = i.getAttribute("id")) ? d = h.replace(n, "\\$&") : i.setAttribute("id", d), d = "[id='" + d + "'] ", u = c.length; u--;) c[u] = d + c[u].join("");
              p = nt.test(e) && i.parentNode || i, f = c.join(",")
            }
            if (f) try {
              return H.apply(s, z.call(p.querySelectorAll(f), 0)), s
            } catch (m) {} finally {
              h || i.removeAttribute("id")
            }
          }
          return t(e, i, s, a, l)
        }, l && (lt(function(t) {
          e = l.call(t, "div");
          try {
            l.call(t, "[test!='']:sizzle"), a.push("!=", V)
          } catch (i) {}
        }), a = new RegExp(a.join("|")), i.matchesSelector = function(t, n) {
          if (n = n.replace(s, "='$1']"), !_(t) && !a.test(n) && !o.test(n)) try {
            var r = l.call(t, n);
            if (r || e || t.document && 11 !== t.document.nodeType) return r
          } catch (c) {}
          return i(n, null, null, [t]).length > 0
        })
      }(), b.pseudos.nth = b.pseudos.eq, b.filters = g.prototype = b.pseudos, b.setFilters = new g, i.attr = J.attr, J.find = i, J.expr = i.selectors, J.expr[":"] = J.expr.pseudos, J.unique = i.uniqueSort, J.text = i.getText, J.isXMLDoc = i.isXML, J.contains = i.contains
    }(e);
    var Nt = /Until$/,
    jt = /^(?:parents|prev(?:Until|All))/,
    Ht = /^.[^:#\[\.,]*$/,
    zt = J.expr.match.needsContext,
    Ot = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
    J.fn.extend({
      find: function(e) {
        var t, i, n, s, o, a, r = this;
        if ("string" != typeof e) return J(e).filter(function() {
          for (t = 0, i = r.length; i > t; t++)
          if (J.contains(r[t], this)) return !0
        });
        for (a = this.pushStack("", "find", e), t = 0, i = this.length; i > t; t++)
        if (n = a.length, J.find(e, this[t], a), t > 0)
        for (s = n; s < a.length; s++)
        for (o = 0; n > o; o++)
        if (a[o] === a[s]) {
          a.splice(s--, 1);
          break
        }
        return a
      },
      has: function(e) {
        var t, i = J(e, this),
        n = i.length;
        return this.filter(function() {
          for (t = 0; n > t; t++)
          if (J.contains(this, i[t])) return !0
        })
      },
      not: function(e) {
        return this.pushStack(c(this, e, !1), "not", e)
      },
      filter: function(e) {
        return this.pushStack(c(this, e, !0), "filter", e)
      },
      is: function(e) {
        return !!e && ("string" == typeof e ? zt.test(e) ? J(e, this.context).index(this[0]) >= 0 : J.filter(e, this).length > 0 : this.filter(e).length > 0)
      },
      closest: function(e, t) {
        for (var i, n = 0, s = this.length, o = [], a = zt.test(e) || "string" != typeof e ? J(e, t || this.context) : 0; s > n; n++)
        for (i = this[n]; i && i.ownerDocument && i !== t && 11 !== i.nodeType;) {
          if (a ? a.index(i) > -1 : J.find.matchesSelector(i, e)) {
            o.push(i);
            break
          }
          i = i.parentNode
        }
        return o = o.length > 1 ? J.unique(o) : o, this.pushStack(o, "closest", e)
      },
      index: function(e) {
        return e ? "string" == typeof e ? J.inArray(this[0], J(e)) : J.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
      },
      add: function(e, t) {
        var i = "string" == typeof e ? J(e, t) : J.makeArray(e && e.nodeType ? [e] : e),
        n = J.merge(this.get(), i);
        return this.pushStack(r(i[0]) || r(n[0]) ? n : J.unique(n))
      },
      addBack: function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
    }), J.fn.andSelf = J.fn.addBack, J.each({
      parent: function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
        return J.dir(e, "parentNode")
      },
      parentsUntil: function(e, t, i) {
        return J.dir(e, "parentNode", i)
      },
      next: function(e) {
        return l(e, "nextSibling")
      },
      prev: function(e) {
        return l(e, "previousSibling")
      },
      nextAll: function(e) {
        return J.dir(e, "nextSibling")
      },
      prevAll: function(e) {
        return J.dir(e, "previousSibling")
      },
      nextUntil: function(e, t, i) {
        return J.dir(e, "nextSibling", i)
      },
      prevUntil: function(e, t, i) {
        return J.dir(e, "previousSibling", i)
      },
      siblings: function(e) {
        return J.sibling((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
        return J.sibling(e.firstChild)
      },
      contents: function(e) {
        return J.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : J.merge([], e.childNodes)
      }
    }, function(e, t) {
      J.fn[e] = function(i, n) {
        var s = J.map(this, t, i);
        return Nt.test(e) || (n = i), n && "string" == typeof n && (s = J.filter(n, s)), s = this.length > 1 && !Ot[e] ? J.unique(s) : s, this.length > 1 && jt.test(e) && (s = s.reverse()), this.pushStack(s, e, X.call(arguments).join(","))
      }
    }), J.extend({
      filter: function(e, t, i) {
        return i && (e = ":not(" + e + ")"), 1 === t.length ? J.find.matchesSelector(t[0], e) ? [t[0]] : [] : J.find.matches(e, t)
      },
      dir: function(e, i, n) {
        for (var s = [], o = e[i]; o && 9 !== o.nodeType && (n === t || 1 !== o.nodeType || !J(o).is(n));) 1 === o.nodeType && s.push(o), o = o[i];
        return s
      },
      sibling: function(e, t) {
        for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
        return i
      }
    });
    var Lt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Wt = / jQuery\d+="(?:null|\d+)"/g,
    Ft = /^\s+/,
    Rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Bt = /<([\w:]+)/,
    Yt = /<tbody/i,
    qt = /<|&#?\w+;/,
    Ut = /<(?:script|style|link)/i,
    Xt = /<(?:script|object|embed|option|style)/i,
    Qt = new RegExp("<(?:" + Lt + ")[\\s/>]", "i"),
    Vt = /^(?:checkbox|radio)$/,
    Kt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Gt = /\/(java|ecma)script/i,
    Jt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
    Zt = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      area: [1, "<map>", "</map>"],
      _default: [0, "", ""]
    },
    ei = u(F),
    ti = ei.appendChild(F.createElement("div"));
    Zt.optgroup = Zt.option, Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead, Zt.th = Zt.td, J.support.htmlSerialize || (Zt._default = [1, "X<div>", "</div>"]), J.fn.extend({
      text: function(e) {
        return J.access(this, function(e) {
          return e === t ? J.text(this) : this.empty().append((this[0] && this[0].ownerDocument || F).createTextNode(e))
        }, null, e, arguments.length)
      },
      wrapAll: function(e) {
        if (J.isFunction(e)) return this.each(function(t) {
          J(this).wrapAll(e.call(this, t))
        });
        if (this[0]) {
          var t = J(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
            return e
          }).append(this)
        }
        return this
      },
      wrapInner: function(e) {
        return this.each(J.isFunction(e) ? function(t) {
          J(this).wrapInner(e.call(this, t))
        } : function() {
          var t = J(this),
          i = t.contents();
          i.length ? i.wrapAll(e) : t.append(e)
        })
      },
      wrap: function(e) {
        var t = J.isFunction(e);
        return this.each(function(i) {
          J(this).wrapAll(t ? e.call(this, i) : e)
        })
      },
      unwrap: function() {
        return this.parent().each(function() {
          J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
        }).end()
      },
      append: function() {
        return this.domManip(arguments, !0, function(e) {
          (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(e)
        })
      },
      prepend: function() {
        return this.domManip(arguments, !0, function(e) {
          (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(e, this.firstChild)
        })
      },
      before: function() {
        if (!r(this[0])) return this.domManip(arguments, !1, function(e) {
          this.parentNode.insertBefore(e, this)
        });
        if (arguments.length) {
          var e = J.clean(arguments);
          return this.pushStack(J.merge(e, this), "before", this.selector)
        }
      },
      after: function() {
        if (!r(this[0])) return this.domManip(arguments, !1, function(e) {
          this.parentNode.insertBefore(e, this.nextSibling)
        });
        if (arguments.length) {
          var e = J.clean(arguments);
          return this.pushStack(J.merge(this, e), "after", this.selector)
        }
      },
      remove: function(e, t) {
        for (var i, n = 0; null != (i = this[n]); n++)(!e || J.filter(e, [i]).length) && (!t && 1 === i.nodeType && (J.cleanData(i.getElementsByTagName("*")), J.cleanData([i])), i.parentNode && i.parentNode.removeChild(i));
        return this
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++)
        for (1 === e.nodeType && J.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
        return this
      },
      clone: function(e, t) {
        return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
          return J.clone(this, e, t)
        })
      },
      html: function(e) {
        return J.access(this, function(e) {
          var i = this[0] || {},
          n = 0,
          s = this.length;
          if (e === t) return 1 === i.nodeType ? i.innerHTML.replace(Wt, "") : t;
          if (!("string" != typeof e || Ut.test(e) || !J.support.htmlSerialize && Qt.test(e) || !J.support.leadingWhitespace && Ft.test(e) || Zt[(Bt.exec(e) || ["", ""])[1].toLowerCase()])) {
            e = e.replace(Rt, "<$1></$2>");
            try {
              for (; s > n; n++) i = this[n] || {}, 1 === i.nodeType && (J.cleanData(i.getElementsByTagName("*")), i.innerHTML = e);
              i = 0
            } catch (o) {}
          }
          i && this.empty().append(e)
        }, null, e, arguments.length)
      },
      replaceWith: function(e) {
        return r(this[0]) ? this.length ? this.pushStack(J(J.isFunction(e) ? e() : e), "replaceWith", e) : this : J.isFunction(e) ? this.each(function(t) {
          var i = J(this),
          n = i.html();
          i.replaceWith(e.call(this, t, n))
        }) : ("string" != typeof e && (e = J(e).detach()), this.each(function() {
          var t = this.nextSibling,
          i = this.parentNode;
          J(this).remove(), t ? J(t).before(e) : J(i).append(e)
        }))
      },
      detach: function(e) {
        return this.remove(e, !0)
      },
      domManip: function(e, i, n) {
        e = [].concat.apply([], e);
        var s, o, a, r, l = 0,
        c = e[0],
        u = [],
        d = this.length;
        if (!J.support.checkClone && d > 1 && "string" == typeof c && Kt.test(c)) return this.each(function() {
          J(this).domManip(e, i, n)
        });
        if (J.isFunction(c)) return this.each(function(s) {
          var o = J(this);
          e[0] = c.call(this, s, i ? o.html() : t), o.domManip(e, i, n)
        });
        if (this[0]) {
          if (s = J.buildFragment(e, this, u), a = s.fragment, o = a.firstChild, 1 === a.childNodes.length && (a = o), o)
          for (i = i && J.nodeName(o, "tr"), r = s.cacheable || d - 1; d > l; l++) n.call(i && J.nodeName(this[l], "table") ? h(this[l], "tbody") : this[l], l === r ? a : J.clone(a, !0, !0));
          a = o = null, u.length && J.each(u, function(e, t) {
            t.src ? J.ajax ? J.ajax({
              url: t.src,
              type: "GET",
              dataType: "script",
              async: !1,
              global: !1,
              "throws": !0
            }) : J.error("no ajax") : J.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Jt, "")), t.parentNode && t.parentNode.removeChild(t)
          })
        }
        return this
      }
    }), J.buildFragment = function(e, i, n) {
      var s, o, a, r = e[0];
      return i = i || F, i = !i.nodeType && i[0] || i, i = i.ownerDocument || i, 1 === e.length && "string" == typeof r && r.length < 512 && i === F && "<" === r.charAt(0) && !Xt.test(r) && (J.support.checkClone || !Kt.test(r)) && (J.support.html5Clone || !Qt.test(r)) && (o = !0, s = J.fragments[r], a = s !== t), s || (s = i.createDocumentFragment(), J.clean(e, i, s, n), o && (J.fragments[r] = a && s)), {
        fragment: s,
        cacheable: o
      }
    }, J.fragments = {}, J.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(e, t) {
      J.fn[e] = function(i) {
        var n, s = 0,
        o = [],
        a = J(i),
        r = a.length,
        l = 1 === this.length && this[0].parentNode;
        if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === r) return a[t](this[0]), this;
        for (; r > s; s++) n = (s > 0 ? this.clone(!0) : this).get(), J(a[s])[t](n), o = o.concat(n);
        return this.pushStack(o, e, a.selector)
      }
    }), J.extend({
      clone: function(e, t, i) {
        var n, s, o, a;
        if (J.support.html5Clone || J.isXMLDoc(e) || !Qt.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (ti.innerHTML = e.outerHTML, ti.removeChild(a = ti.firstChild)), !(J.support.noCloneEvent && J.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || J.isXMLDoc(e)))
        for (p(e, a), n = f(e), s = f(a), o = 0; n[o]; ++o) s[o] && p(n[o], s[o]);
        if (t && (d(e, a), i))
        for (n = f(e), s = f(a), o = 0; n[o]; ++o) d(n[o], s[o]);
        return n = s = null, a
      },
      clean: function(e, t, i, n) {
        var s, o, a, r, l, c, h, d, p, f, g, v = t === F && ei,
        y = [];
        for (t && "undefined" != typeof t.createDocumentFragment || (t = F), s = 0; null != (a = e[s]); s++)
        if ("number" == typeof a && (a += ""), a) {
          if ("string" == typeof a)
          if (qt.test(a)) {
            for (v = v || u(t), h = t.createElement("div"), v.appendChild(h), a = a.replace(Rt, "<$1></$2>"), r = (Bt.exec(a) || ["", ""])[1].toLowerCase(), l = Zt[r] || Zt._default, c = l[0], h.innerHTML = l[1] + a + l[2]; c--;) h = h.lastChild;
            if (!J.support.tbody)
            for (d = Yt.test(a), p = "table" !== r || d ? "<table>" !== l[1] || d ? [] : h.childNodes : h.firstChild && h.firstChild.childNodes, o = p.length - 1; o >= 0; --o) J.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o]);
              !J.support.leadingWhitespace && Ft.test(a) && h.insertBefore(t.createTextNode(Ft.exec(a)[0]), h.firstChild), a = h.childNodes, h.parentNode.removeChild(h)
            } else a = t.createTextNode(a);
            a.nodeType ? y.push(a) : J.merge(y, a)
          }
          if (h && (a = h = v = null), !J.support.appendChecked)
          for (s = 0; null != (a = y[s]); s++) J.nodeName(a, "input") ? m(a) : "undefined" != typeof a.getElementsByTagName && J.grep(a.getElementsByTagName("input"), m);
          if (i)
          for (f = function(e) {
            return !e.type || Gt.test(e.type) ? n ? n.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e) : void 0
          }, s = 0; null != (a = y[s]); s++) J.nodeName(a, "script") && f(a) || (i.appendChild(a), "undefined" != typeof a.getElementsByTagName && (g = J.grep(J.merge([], a.getElementsByTagName("script")), f), y.splice.apply(y, [s + 1, 0].concat(g)), s += g.length));
          return y
        },
        cleanData: function(e, t) {
          for (var i, n, s, o, a = 0, r = J.expando, l = J.cache, c = J.support.deleteExpando, u = J.event.special; null != (s = e[a]); a++)
          if ((t || J.acceptData(s)) && (n = s[r], i = n && l[n])) {
            if (i.events)
            for (o in i.events) u[o] ? J.event.remove(s, o) : J.removeEvent(s, o, i.handle);
            l[n] && (delete l[n], c ? delete s[r] : s.removeAttribute ? s.removeAttribute(r) : s[r] = null, J.deletedIds.push(n))
          }
        }
      }),
      function() {
        var e, t;
        J.uaMatch = function(e) {
          e = e.toLowerCase();
          var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
          return {
            browser: t[1] || "",
            version: t[2] || "0"
          }
        }, e = J.uaMatch(B.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), J.browser = t, J.sub = function() {
          function e(t, i) {
            return new e.fn.init(t, i)
          }
          J.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(i, n) {
            return n && n instanceof J && !(n instanceof e) && (n = e(n)), J.fn.init.call(this, i, n, t)
          }, e.fn.init.prototype = e.fn;
          var t = e(F);
          return e
        }
      }();
      var ii, ni, si, oi = /alpha\([^)]*\)/i,
      ai = /opacity=([^)]*)/,
      ri = /^(top|right|bottom|left)$/,
      li = /^(none|table(?!-c[ea]).+)/,
      ci = /^margin/,
      ui = new RegExp("^(" + Z + ")(.*)$", "i"),
      hi = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
      di = new RegExp("^([-+])=(" + Z + ")", "i"),
      pi = {
        BODY: "block"
      },
      fi = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      mi = {
        letterSpacing: 0,
        fontWeight: 400
      },
      gi = ["Top", "Right", "Bottom", "Left"],
      vi = ["Webkit", "O", "Moz", "ms"],
      yi = J.fn.toggle;
      J.fn.extend({
        css: function(e, i) {
          return J.access(this, function(e, i, n) {
            return n !== t ? J.style(e, i, n) : J.css(e, i)
          }, e, i, arguments.length > 1)
        },
        show: function() {
          return y(this, !0)
        },
        hide: function() {
          return y(this)
        },
        toggle: function(e, t) {
          var i = "boolean" == typeof e;
          return J.isFunction(e) && J.isFunction(t) ? yi.apply(this, arguments) : this.each(function() {
            (i ? e : v(this)) ? J(this).show(): J(this).hide()
          })
        }
      }), J.extend({
        cssHooks: {
          opacity: {
            get: function(e, t) {
              if (t) {
                var i = ii(e, "opacity");
                return "" === i ? "1" : i
              }
            }
          }
        },
        cssNumber: {
          fillOpacity: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {
          "float": J.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, i, n, s) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var o, a, r, l = J.camelCase(i),
            c = e.style;
            if (i = J.cssProps[l] || (J.cssProps[l] = g(c, l)), r = J.cssHooks[i] || J.cssHooks[l], n === t) return r && "get" in r && (o = r.get(e, !1, s)) !== t ? o : c[i];
            if (a = typeof n, "string" === a && (o = di.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(J.css(e, i)), a = "number"), !(null == n || "number" === a && isNaN(n) || ("number" === a && !J.cssNumber[l] && (n += "px"), r && "set" in r && (n = r.set(e, n, s)) === t))) try {
              c[i] = n
            } catch (u) {}
          }
        },
        css: function(e, i, n, s) {
          var o, a, r, l = J.camelCase(i);
          return i = J.cssProps[l] || (J.cssProps[l] = g(e.style, l)), r = J.cssHooks[i] || J.cssHooks[l], r && "get" in r && (o = r.get(e, !0, s)), o === t && (o = ii(e, i)), "normal" === o && i in mi && (o = mi[i]), n || s !== t ? (a = parseFloat(o), n || J.isNumeric(a) ? a || 0 : o) : o
        },
        swap: function(e, t, i) {
          var n, s, o = {};
          for (s in t) o[s] = e.style[s], e.style[s] = t[s];
          n = i.call(e);
          for (s in t) e.style[s] = o[s];
          return n
        }
      }), e.getComputedStyle ? ii = function(t, i) {
        var n, s, o, a, r = e.getComputedStyle(t, null),
        l = t.style;
        return r && (n = r.getPropertyValue(i) || r[i], "" === n && !J.contains(t.ownerDocument, t) && (n = J.style(t, i)), hi.test(n) && ci.test(i) && (s = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = n, n = r.width, l.width = s, l.minWidth = o, l.maxWidth = a)), n
      } : F.documentElement.currentStyle && (ii = function(e, t) {
        var i, n, s = e.currentStyle && e.currentStyle[t],
        o = e.style;
        return null == s && o && o[t] && (s = o[t]), hi.test(s) && !ri.test(t) && (i = o.left, n = e.runtimeStyle && e.runtimeStyle.left, n && (e.runtimeStyle.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : s, s = o.pixelLeft + "px", o.left = i, n && (e.runtimeStyle.left = n)), "" === s ? "auto" : s
      }), J.each(["height", "width"], function(e, t) {
        J.cssHooks[t] = {
          get: function(e, i, n) {
            return i ? 0 === e.offsetWidth && li.test(ii(e, "display")) ? J.swap(e, fi, function() {
              return _(e, t, n)
            }) : _(e, t, n) : void 0
          },
          set: function(e, i, n) {
            return b(e, i, n ? w(e, t, n, J.support.boxSizing && "border-box" === J.css(e, "boxSizing")) : 0)
          }
        }
      }), J.support.opacity || (J.cssHooks.opacity = {
        get: function(e, t) {
          return ai.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
          var i = e.style,
          n = e.currentStyle,
          s = J.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
          o = n && n.filter || i.filter || "";
          i.zoom = 1, t >= 1 && "" === J.trim(o.replace(oi, "")) && i.removeAttribute && (i.removeAttribute("filter"), n && !n.filter) || (i.filter = oi.test(o) ? o.replace(oi, s) : o + " " + s)
        }
      }), J(function() {
        J.support.reliableMarginRight || (J.cssHooks.marginRight = {
          get: function(e, t) {
            return J.swap(e, {
              display: "inline-block"
            }, function() {
              return t ? ii(e, "marginRight") : void 0
            })
          }
        }), !J.support.pixelPosition && J.fn.position && J.each(["top", "left"], function(e, t) {
          J.cssHooks[t] = {
            get: function(e, i) {
              if (i) {
                var n = ii(e, t);
                return hi.test(n) ? J(e).position()[t] + "px" : n
              }
            }
          }
        })
      }), J.expr && J.expr.filters && (J.expr.filters.hidden = function(e) {
        return 0 === e.offsetWidth && 0 === e.offsetHeight || !J.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ii(e, "display"))
      }, J.expr.filters.visible = function(e) {
        return !J.expr.filters.hidden(e)
      }), J.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(e, t) {
        J.cssHooks[e + t] = {
          expand: function(i) {
            var n, s = "string" == typeof i ? i.split(" ") : [i],
            o = {};
            for (n = 0; 4 > n; n++) o[e + gi[n] + t] = s[n] || s[n - 2] || s[0];
            return o
          }
        }, ci.test(e) || (J.cssHooks[e + t].set = b)
      });
      var bi = /%20/g,
      wi = /\[\]$/,
      _i = /\r?\n/g,
      xi = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
      ki = /^(?:select|textarea)/i;
      J.fn.extend({
        serialize: function() {
          return J.param(this.serializeArray())
        },
        serializeArray: function() {
          return this.map(function() {
            return this.elements ? J.makeArray(this.elements) : this
          }).filter(function() {
            return this.name && !this.disabled && (this.checked || ki.test(this.nodeName) || xi.test(this.type))
          }).map(function(e, t) {
            var i = J(this).val();
            return null == i ? null : J.isArray(i) ? J.map(i, function(e) {
              return {
                name: t.name,
                value: e.replace(_i, "\r\n")
              }
            }) : {
              name: t.name,
              value: i.replace(_i, "\r\n")
            }
          }).get()
        }
      }), J.param = function(e, i) {
        var n, s = [],
        o = function(e, t) {
          t = J.isFunction(t) ? t() : null == t ? "" : t, s[s.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (i === t && (i = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(e) || e.jquery && !J.isPlainObject(e)) J.each(e, function() {
          o(this.name, this.value)
        });
        else
        for (n in e) k(n, e[n], i, o);
        return s.join("&").replace(bi, "+")
      };
      var Ci, Ti, Di = /#.*$/,
      Si = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Ei = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
      Pi = /^(?:GET|HEAD)$/,
      Mi = /^\/\//,
      Ii = /\?/,
      $i = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      Ai = /([?&])_=[^&]*/,
      Ni = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
      ji = J.fn.load,
      Hi = {},
      zi = {},
      Oi = ["*/"] + ["*"];
      try {
        Ti = R.href
      } catch (Li) {
        Ti = F.createElement("a"), Ti.href = "", Ti = Ti.href
      }
      Ci = Ni.exec(Ti.toLowerCase()) || [], J.fn.load = function(e, i, n) {
        if ("string" != typeof e && ji) return ji.apply(this, arguments);
        if (!this.length) return this;
        var s, o, a, r = this,
        l = e.indexOf(" ");
        return l >= 0 && (s = e.slice(l, e.length), e = e.slice(0, l)), J.isFunction(i) ? (n = i, i = t) : i && "object" == typeof i && (o = "POST"), J.ajax({
          url: e,
          type: o,
          dataType: "html",
          data: i,
          complete: function(e, t) {
            n && r.each(n, a || [e.responseText, t, e])
          }
        }).done(function(e) {
          a = arguments, r.html(s ? J("<div>").append(e.replace($i, "")).find(s) : e)
          }), this
        }, J.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
          J.fn[t] = function(e) {
            return this.on(t, e)
          }
        }), J.each(["get", "post"], function(e, i) {
          J[i] = function(e, n, s, o) {
            return J.isFunction(n) && (o = o || s, s = n, n = t), J.ajax({
              type: i,
              url: e,
              data: n,
              success: s,
              dataType: o
            })
          }
        }), J.extend({
          getScript: function(e, i) {
            return J.get(e, t, i, "script")
          },
          getJSON: function(e, t, i) {
            return J.get(e, t, i, "json")
          },
          ajaxSetup: function(e, t) {
            return t ? D(e, J.ajaxSettings) : (t = e, e = J.ajaxSettings), D(e, t), e
          },
          ajaxSettings: {
            url: Ti,
            isLocal: Ei.test(Ci[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
              xml: "application/xml, text/xml",
              html: "text/html",
              text: "text/plain",
              json: "application/json, text/javascript",
              "*": Oi
            },
            contents: {
              xml: /xml/,
              html: /html/,
              json: /json/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText"
            },
            converters: {
              "* text": e.String,
              "text html": !0,
              "text json": J.parseJSON,
              "text xml": J.parseXML
            },
            flatOptions: {
              context: !0,
              url: !0
            }
          },
          ajaxPrefilter: C(Hi),
          ajaxTransport: C(zi),
          ajax: function(e, i) {
            function n(e, i, n, a) {
              var c, h, y, b, _, k = i;
              2 !== w && (w = 2, l && clearTimeout(l), r = t, o = a || "", x.readyState = e > 0 ? 4 : 0, n && (b = S(d, x, n)), e >= 200 && 300 > e || 304 === e ? (d.ifModified && (_ = x.getResponseHeader("Last-Modified"), _ && (J.lastModified[s] = _), _ = x.getResponseHeader("Etag"), _ && (J.etag[s] = _)), 304 === e ? (k = "notmodified", c = !0) : (c = E(d, b), k = c.state, h = c.data, y = c.error, c = !y)) : (y = k, (!k || e) && (k = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (i || k) + "", c ? m.resolveWith(p, [h, k, x]) : m.rejectWith(p, [x, k, y]), x.statusCode(v), v = t, u && f.trigger("ajax" + (c ? "Success" : "Error"), [x, d, c ? h : y]), g.fireWith(p, [x, k]), u && (f.trigger("ajaxComplete", [x, d]), --J.active || J.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (i = e, e = t), i = i || {};
            var s, o, a, r, l, c, u, h, d = J.ajaxSetup({}, i),
            p = d.context || d,
            f = p !== d && (p.nodeType || p instanceof J) ? J(p) : J.event,
            m = J.Deferred(),
            g = J.Callbacks("once memory"),
            v = d.statusCode || {},
            y = {},
            b = {},
            w = 0,
            _ = "canceled",
            x = {
              readyState: 0,
              setRequestHeader: function(e, t) {
                if (!w) {
                  var i = e.toLowerCase();
                  e = b[i] = b[i] || e, y[e] = t
                }
                return this
              },
              getAllResponseHeaders: function() {
                return 2 === w ? o : null
              },
              getResponseHeader: function(e) {
                var i;
                if (2 === w) {
                  if (!a)
                  for (a = {}; i = Si.exec(o);) a[i[1].toLowerCase()] = i[2];
                  i = a[e.toLowerCase()]
                }
                return i === t ? null : i
              },
              overrideMimeType: function(e) {
                return w || (d.mimeType = e), this
              },
              abort: function(e) {
                return e = e || _, r && r.abort(e), n(0, e), this
              }
            };
            if (m.promise(x), x.success = x.done, x.error = x.fail, x.complete = g.add, x.statusCode = function(e) {
              if (e) {
                var t;
                if (2 > w)
                for (t in e) v[t] = [v[t], e[t]];
                else t = e[x.status], x.always(t)
              }
              return this
            }, d.url = ((e || d.url) + "").replace(Di, "").replace(Mi, Ci[1] + "//"), d.dataTypes = J.trim(d.dataType || "*").toLowerCase().split(tt), null == d.crossDomain && (c = Ni.exec(d.url.toLowerCase()), d.crossDomain = !(!c || c[1] === Ci[1] && c[2] === Ci[2] && (c[3] || ("http:" === c[1] ? 80 : 443)) == (Ci[3] || ("http:" === Ci[1] ? 80 : 443)))), d.data && d.processData && "string" != typeof d.data && (d.data = J.param(d.data, d.traditional)), T(Hi, d, i, x), 2 === w) return x;
            if (u = d.global, d.type = d.type.toUpperCase(), d.hasContent = !Pi.test(d.type), u && 0 === J.active++ && J.event.trigger("ajaxStart"), !d.hasContent && (d.data && (d.url += (Ii.test(d.url) ? "&" : "?") + d.data, delete d.data), s = d.url, d.cache === !1)) {
              var k = J.now(),
              C = d.url.replace(Ai, "$1_=" + k);
              d.url = C + (C === d.url ? (Ii.test(d.url) ? "&" : "?") + "_=" + k : "")
            }(d.data && d.hasContent && d.contentType !== !1 || i.contentType) && x.setRequestHeader("Content-Type", d.contentType), d.ifModified && (s = s || d.url, J.lastModified[s] && x.setRequestHeader("If-Modified-Since", J.lastModified[s]), J.etag[s] && x.setRequestHeader("If-None-Match", J.etag[s])), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Oi + "; q=0.01" : "") : d.accepts["*"]);
            for (h in d.headers) x.setRequestHeader(h, d.headers[h]);
            if (!d.beforeSend || d.beforeSend.call(p, x, d) !== !1 && 2 !== w) {
              _ = "abort";
              for (h in {
                success: 1,
                error: 1,
                complete: 1
              }) x[h](d[h]);
              if (r = T(zi, d, i, x)) {
                x.readyState = 1, u && f.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (l = setTimeout(function() {
                  x.abort("timeout")
                }, d.timeout));
                try {
                  w = 1, r.send(y, n)
                } catch (D) {
                  if (!(2 > w)) throw D;
                  n(-1, D)
                }
              } else n(-1, "No Transport");
              return x
            }
            return x.abort()
          },
          active: 0,
          lastModified: {},
          etag: {}
        });
        var Wi = [],
        Fi = /\?/,
        Ri = /(=)\?(?=&|$)|\?\?/,
        Bi = J.now();
        J.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
            var e = Wi.pop() || J.expando + "_" + Bi++;
            return this[e] = !0, e
          }
        }), J.ajaxPrefilter("json jsonp", function(i, n, s) {
          var o, a, r, l = i.data,
          c = i.url,
          u = i.jsonp !== !1,
          h = u && Ri.test(c),
          d = u && !h && "string" == typeof l && !(i.contentType || "").indexOf("application/x-www-form-urlencoded") && Ri.test(l);
          return "jsonp" === i.dataTypes[0] || h || d ? (o = i.jsonpCallback = J.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback, a = e[o], h ? i.url = c.replace(Ri, "$1" + o) : d ? i.data = l.replace(Ri, "$1" + o) : u && (i.url += (Fi.test(c) ? "&" : "?") + i.jsonp + "=" + o), i.converters["script json"] = function() {
            return r || J.error(o + " was not called"), r[0]
          }, i.dataTypes[0] = "json", e[o] = function() {
            r = arguments
          }, s.always(function() {
            e[o] = a, i[o] && (i.jsonpCallback = n.jsonpCallback, Wi.push(o)), r && J.isFunction(a) && a(r[0]), r = a = t
          }), "script") : void 0
        }), J.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /javascript|ecmascript/
          },
          converters: {
            "text script": function(e) {
              return J.globalEval(e), e
            }
          }
        }), J.ajaxPrefilter("script", function(e) {
          e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), J.ajaxTransport("script", function(e) {
          if (e.crossDomain) {
            var i, n = F.head || F.getElementsByTagName("head")[0] || F.documentElement;
            return {
              send: function(s, o) {
                i = F.createElement("script"), i.async = "async", e.scriptCharset && (i.charset = e.scriptCharset), i.src = e.url, i.onload = i.onreadystatechange = function(e, s) {
                  (s || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, n && i.parentNode && n.removeChild(i), i = t, s || o(200, "success"))
                }, n.insertBefore(i, n.firstChild)
              },
              abort: function() {
                i && i.onload(0, 1)
              }
            }
          }
        });
        var Yi, qi = e.ActiveXObject ? function() {
          for (var e in Yi) Yi[e](0, 1)
        } : !1,
        Ui = 0;
        J.ajaxSettings.xhr = e.ActiveXObject ? function() {
          return !this.isLocal && P() || M()
        } : P,
        function(e) {
          J.extend(J.support, {
            ajax: !!e,
            cors: !!e && "withCredentials" in e
          })
        }(J.ajaxSettings.xhr()), J.support.ajax && J.ajaxTransport(function(i) {
          if (!i.crossDomain || J.support.cors) {
            var n;
            return {
              send: function(s, o) {
                var a, r, l = i.xhr();
                if (i.username ? l.open(i.type, i.url, i.async, i.username, i.password) : l.open(i.type, i.url, i.async), i.xhrFields)
                for (r in i.xhrFields) l[r] = i.xhrFields[r];
                i.mimeType && l.overrideMimeType && l.overrideMimeType(i.mimeType), !i.crossDomain && !s["X-Requested-With"] && (s["X-Requested-With"] = "XMLHttpRequest");
                try {
                  for (r in s) l.setRequestHeader(r, s[r])
                } catch (c) {}
                l.send(i.hasContent && i.data || null), n = function(e, s) {
                  var r, c, u, h, d;
                  try {
                    if (n && (s || 4 === l.readyState))
                    if (n = t, a && (l.onreadystatechange = J.noop, qi && delete Yi[a]), s) 4 !== l.readyState && l.abort();
                    else {
                      r = l.status, u = l.getAllResponseHeaders(), h = {}, d = l.responseXML, d && d.documentElement && (h.xml = d);
                      try {
                        h.text = l.responseText
                      } catch (p) {}
                      try {
                        c = l.statusText
                      } catch (p) {
                        c = ""
                      }
                      r || !i.isLocal || i.crossDomain ? 1223 === r && (r = 204) : r = h.text ? 200 : 404
                    }
                  } catch (f) {
                    s || o(-1, f)
                  }
                  h && o(r, c, h, u)
                }, i.async ? 4 === l.readyState ? setTimeout(n, 0) : (a = ++Ui, qi && (Yi || (Yi = {}, J(e).unload(qi)), Yi[a] = n), l.onreadystatechange = n) : n()
              },
              abort: function() {
                n && n(0, 1)
              }
            }
          }
        });
        var Xi, Qi, Vi = /^(?:toggle|show|hide)$/,
        Ki = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$", "i"),
        Gi = /queueHooks$/,
        Ji = [j],
        Zi = {
          "*": [function(e, t) {
            var i, n, s = this.createTween(e, t),
            o = Ki.exec(t),
            a = s.cur(),
            r = +a || 0,
            l = 1,
            c = 20;
            if (o) {
              if (i = +o[2], n = o[3] || (J.cssNumber[e] ? "" : "px"), "px" !== n && r) {
                r = J.css(s.elem, e, !0) || i || 1;
                do l = l || ".5", r /= l, J.style(s.elem, e, r + n); while (l !== (l = s.cur() / a) && 1 !== l && --c)
              }
              s.unit = n, s.start = r, s.end = o[1] ? r + (o[1] + 1) * i : i
            }
            return s
          }]
        };
        J.Animation = J.extend(A, {
          tweener: function(e, t) {
            J.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var i, n = 0, s = e.length; s > n; n++) i = e[n], Zi[i] = Zi[i] || [], Zi[i].unshift(t)
          },
          prefilter: function(e, t) {
            t ? Ji.unshift(e) : Ji.push(e)
          }
        }), J.Tween = H, H.prototype = {
          constructor: H,
          init: function(e, t, i, n, s, o) {
            this.elem = e, this.prop = i, this.easing = s || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = o || (J.cssNumber[i] ? "" : "px")
          },
          cur: function() {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
          },
          run: function(e) {
            var t, i = H.propHooks[this.prop];
            return this.pos = t = this.options.duration ? J.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : H.propHooks._default.set(this), this
          }
        }, H.prototype.init.prototype = H.prototype, H.propHooks = {
          _default: {
            get: function(e) {
              var t;
              return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = J.css(e.elem, e.prop, !1, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
              J.fx.step[e.prop] ? J.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[J.cssProps[e.prop]] || J.cssHooks[e.prop]) ? J.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
          }
        }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
          set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
          }
        }, J.each(["toggle", "show", "hide"], function(e, t) {
          var i = J.fn[t];
          J.fn[t] = function(n, s, o) {
            return null == n || "boolean" == typeof n || !e && J.isFunction(n) && J.isFunction(s) ? i.apply(this, arguments) : this.animate(z(t, !0), n, s, o)
          }
        }), J.fn.extend({
          fadeTo: function(e, t, i, n) {
            return this.filter(v).css("opacity", 0).show().end().animate({
              opacity: t
            }, e, i, n)
          },
          animate: function(e, t, i, n) {
            var s = J.isEmptyObject(e),
            o = J.speed(t, i, n),
            a = function() {
              var t = A(this, J.extend({}, e), o);
              s && t.stop(!0)
            };
            return s || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
          },
          stop: function(e, i, n) {
            var s = function(e) {
              var t = e.stop;
              delete e.stop, t(n)
            };
            return "string" != typeof e && (n = i, i = e, e = t), i && e !== !1 && this.queue(e || "fx", []), this.each(function() {
              var t = !0,
              i = null != e && e + "queueHooks",
              o = J.timers,
              a = J._data(this);
              if (i) a[i] && a[i].stop && s(a[i]);
              else
              for (i in a) a[i] && a[i].stop && Gi.test(i) && s(a[i]);
              for (i = o.length; i--;) o[i].elem === this && (null == e || o[i].queue === e) && (o[i].anim.stop(n), t = !1, o.splice(i, 1));
              (t || !n) && J.dequeue(this, e)
            })
          }
        }), J.each({
          slideDown: z("show"),
          slideUp: z("hide"),
          slideToggle: z("toggle"),
          fadeIn: {
            opacity: "show"
          },
          fadeOut: {
            opacity: "hide"
          },
          fadeToggle: {
            opacity: "toggle"
          }
        }, function(e, t) {
          J.fn[e] = function(e, i, n) {
            return this.animate(t, e, i, n)
          }
        }), J.speed = function(e, t, i) {
          var n = e && "object" == typeof e ? J.extend({}, e) : {
            complete: i || !i && t || J.isFunction(e) && e,
            duration: e,
            easing: i && t || t && !J.isFunction(t) && t
          };
          return n.duration = J.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in J.fx.speeds ? J.fx.speeds[n.duration] : J.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            J.isFunction(n.old) && n.old.call(this), n.queue && J.dequeue(this, n.queue)
          }, n
        }, J.easing = {
          linear: function(e) {
            return e
          },
          swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
          }
        }, J.timers = [], J.fx = H.prototype.init, J.fx.tick = function() {
          var e, i = J.timers,
          n = 0;
          for (Xi = J.now(); n < i.length; n++) e = i[n], !e() && i[n] === e && i.splice(n--, 1);
          i.length || J.fx.stop(), Xi = t
        }, J.fx.timer = function(e) {
          e() && J.timers.push(e) && !Qi && (Qi = setInterval(J.fx.tick, J.fx.interval))
        }, J.fx.interval = 13, J.fx.stop = function() {
          clearInterval(Qi), Qi = null
        }, J.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
        }, J.fx.step = {}, J.expr && J.expr.filters && (J.expr.filters.animated = function(e) {
          return J.grep(J.timers, function(t) {
            return e === t.elem
          }).length
        });
        var en = /^(?:body|html)$/i;
        J.fn.offset = function(e) {
          if (arguments.length) return e === t ? this : this.each(function(t) {
            J.offset.setOffset(this, e, t)
          });
          var i, n, s, o, a, r, l, c = {
            top: 0,
            left: 0
          },
          u = this[0],
          h = u && u.ownerDocument;
          if (h) return (n = h.body) === u ? J.offset.bodyOffset(u) : (i = h.documentElement, J.contains(i, u) ? ("undefined" != typeof u.getBoundingClientRect && (c = u.getBoundingClientRect()), s = O(h), o = i.clientTop || n.clientTop || 0, a = i.clientLeft || n.clientLeft || 0, r = s.pageYOffset || i.scrollTop, l = s.pageXOffset || i.scrollLeft, {
            top: c.top + r - o,
            left: c.left + l - a
          }) : c)
        }, J.offset = {
          bodyOffset: function(e) {
            var t = e.offsetTop,
            i = e.offsetLeft;
            return J.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(J.css(e, "marginTop")) || 0, i += parseFloat(J.css(e, "marginLeft")) || 0), {
              top: t,
              left: i
            }
          },
          setOffset: function(e, t, i) {
            var n = J.css(e, "position");
            "static" === n && (e.style.position = "relative");
            var s, o, a = J(e),
            r = a.offset(),
            l = J.css(e, "top"),
            c = J.css(e, "left"),
            u = ("absolute" === n || "fixed" === n) && J.inArray("auto", [l, c]) > -1,
            h = {},
            d = {};
            u ? (d = a.position(), s = d.top, o = d.left) : (s = parseFloat(l) || 0, o = parseFloat(c) || 0), J.isFunction(t) && (t = t.call(e, i, r)), null != t.top && (h.top = t.top - r.top + s), null != t.left && (h.left = t.left - r.left + o), "using" in t ? t.using.call(e, h) : a.css(h)
          }
        }, J.fn.extend({
          position: function() {
            if (this[0]) {
              var e = this[0],
              t = this.offsetParent(),
              i = this.offset(),
              n = en.test(t[0].nodeName) ? {
                top: 0,
                left: 0
              } : t.offset();
              return i.top -= parseFloat(J.css(e, "marginTop")) || 0, i.left -= parseFloat(J.css(e, "marginLeft")) || 0, n.top += parseFloat(J.css(t[0], "borderTopWidth")) || 0, n.left += parseFloat(J.css(t[0], "borderLeftWidth")) || 0, {
                top: i.top - n.top,
                left: i.left - n.left
              }
            }
          },
          offsetParent: function() {
            return this.map(function() {
              for (var e = this.offsetParent || F.body; e && !en.test(e.nodeName) && "static" === J.css(e, "position");) e = e.offsetParent;
              return e || F.body
            })
          }
        }), J.each({
          scrollLeft: "pageXOffset",
          scrollTop: "pageYOffset"
        }, function(e, i) {
          var n = /Y/.test(i);
          J.fn[e] = function(s) {
            return J.access(this, function(e, s, o) {
              var a = O(e);
              return o === t ? a ? i in a ? a[i] : a.document.documentElement[s] : e[s] : void(a ? a.scrollTo(n ? J(a).scrollLeft() : o, n ? o : J(a).scrollTop()) : e[s] = o)
            }, e, s, arguments.length, null)
          }
        }), J.each({
          Height: "height",
          Width: "width"
        }, function(e, i) {
          J.each({
            padding: "inner" + e,
            content: i,
            "": "outer" + e
          }, function(n, s) {
            J.fn[s] = function(s, o) {
              var a = arguments.length && (n || "boolean" != typeof s),
              r = n || (s === !0 || o === !0 ? "margin" : "border");
              return J.access(this, function(i, n, s) {
                var o;
                return J.isWindow(i) ? i.document.documentElement["client" + e] : 9 === i.nodeType ? (o = i.documentElement, Math.max(i.body["scroll" + e], o["scroll" + e], i.body["offset" + e], o["offset" + e], o["client" + e])) : s === t ? J.css(i, n, s, r) : J.style(i, n, s, r)
              }, i, a ? s : t, a, null)
            }
          })
        }), e.jQuery = e.$ = J, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
          return J
        })
      }(window),
      function(e, t) {
        function i(t, i) {
          var s, o, a, r = t.nodeName.toLowerCase();
          return "area" === r ? (s = t.parentNode, o = s.name, t.href && o && "map" === s.nodeName.toLowerCase() ? (a = e("img[usemap=#" + o + "]")[0], !!a && n(a)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || i : i) && n(t)
        }

        function n(t) {
          return e.expr.filters.visible(t) && !e(t).parents().andSelf().filter(function() {
            return "hidden" === e.css(this, "visibility")
          }).length
        }
        var s = 0,
        o = /^ui-id-\d+$/;
        e.ui = e.ui || {}, e.ui.version || (e.extend(e.ui, {
          version: "1.9.2",
          keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
          }
        }), e.fn.extend({
          _focus: e.fn.focus,
          focus: function(t, i) {
            return "number" == typeof t ? this.each(function() {
              var n = this;
              setTimeout(function() {
                e(n).focus(), i && i.call(n)
              }, t)
            }) : this._focus.apply(this, arguments)
          },
          scrollParent: function() {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
              return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
              return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
          },
          zIndex: function(i) {
            if (i !== t) return this.css("zIndex", i);
            if (this.length)
            for (var n, s, o = e(this[0]); o.length && o[0] !== document;) {
              if (n = o.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(o.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
              o = o.parent()
            }
            return 0
          },
          uniqueId: function() {
            return this.each(function() {
              this.id || (this.id = "ui-id-" + ++s)
            })
          },
          removeUniqueId: function() {
            return this.each(function() {
              o.test(this.id) && e(this).removeAttr("id")
            })
          }
        }), e.extend(e.expr[":"], {
          data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
              return !!e.data(i, t)
            }
          }) : function(t, i, n) {
            return !!e.data(t, n[3])
          },
          focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
          },
          tabbable: function(t) {
            var n = e.attr(t, "tabindex"),
            s = isNaN(n);
            return (s || n >= 0) && i(t, !s)
          }
        }), e(function() {
          var t = document.body,
          i = t.appendChild(i = document.createElement("div"));
          i.offsetHeight, e.extend(i.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
          }), e.support.minHeight = 100 === i.offsetHeight, e.support.selectstart = "onselectstart" in i, t.removeChild(i).style.display = "none"
        }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(i, n) {
          function s(t, i, n, s) {
            return e.each(o, function() {
              i -= parseFloat(e.css(t, "padding" + this)) || 0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
          }
          var o = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
          a = n.toLowerCase(),
          r = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
          };
          e.fn["inner" + n] = function(i) {
            return i === t ? r["inner" + n].call(this) : this.each(function() {
              e(this).css(a, s(this, i) + "px")
            })
          }, e.fn["outer" + n] = function(t, i) {
            return "number" != typeof t ? r["outer" + n].call(this, t) : this.each(function() {
              e(this).css(a, s(this, t, !0, i) + "px")
            })
          }
        }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
          return function(i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
          }
        }(e.fn.removeData)), function() {
          var t = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
          e.ui.ie = t.length ? !0 : !1, e.ui.ie6 = 6 === parseFloat(t[1], 10)
        }(), e.fn.extend({
          disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
              e.preventDefault()
            })
          },
          enableSelection: function() {
            return this.unbind(".ui-disableSelection")
          }
        }), e.extend(e.ui, {
          plugin: {
            add: function(t, i, n) {
              var s, o = e.ui[t].prototype;
              for (s in n) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([i, n[s]])
            },
            call: function(e, t, i) {
              var n, s = e.plugins[t];
              if (s && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
              for (n = 0; n < s.length; n++) e.options[s[n][0]] && s[n][1].apply(e.element, i)
            }
          },
          contains: e.contains,
          hasScroll: function(t, i) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop",
            s = !1;
            return t[n] > 0 ? !0 : (t[n] = 1, s = t[n] > 0, t[n] = 0, s)
          },
          isOverAxis: function(e, t, i) {
            return e > t && t + i > e
          },
          isOver: function(t, i, n, s, o, a) {
            return e.ui.isOverAxis(t, n, o) && e.ui.isOverAxis(i, s, a)
          }
        }))
      }(jQuery),
      function(e, t) {
        var i = 0,
        n = Array.prototype.slice,
        s = e.cleanData;
        e.cleanData = function(t) {
          for (var i, n = 0; null != (i = t[n]); n++) try {
            e(i).triggerHandler("remove")
          } catch (o) {}
          s(t)
        }, e.widget = function(t, i, n) {
          var s, o, a, r, l = t.split(".")[0];
          t = t.split(".")[1], s = l + "-" + t, n || (n = i, i = e.Widget), e.expr[":"][s.toLowerCase()] = function(t) {
            return !!e.data(t, s)
          }, e[l] = e[l] || {}, o = e[l][t], a = e[l][t] = function(e, t) {
            return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new a(e, t)
          }, e.extend(a, o, {
            version: n.version,
            _proto: e.extend({}, n),
            _childConstructors: []
          }), r = new i, r.options = e.widget.extend({}, r.options), e.each(n, function(t, s) {
            e.isFunction(s) && (n[t] = function() {
              var e = function() {
                return i.prototype[t].apply(this, arguments)
              },
              n = function(e) {
                return i.prototype[t].apply(this, e)
              };
              return function() {
                var t, i = this._super,
                o = this._superApply;
                return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = o, t
              }
            }())
          }), a.prototype = e.widget.extend(r, {
            widgetEventPrefix: o ? r.widgetEventPrefix : t
          }, n, {
            constructor: a,
            namespace: l,
            widgetName: t,
            widgetBaseClass: s,
            widgetFullName: s
          }), o ? (e.each(o._childConstructors, function(t, i) {
            var n = i.prototype;
            e.widget(n.namespace + "." + n.widgetName, a, i._proto)
          }), delete o._childConstructors) : i._childConstructors.push(a), e.widget.bridge(t, a)
        }, e.widget.extend = function(i) {
          for (var s, o, a = n.call(arguments, 1), r = 0, l = a.length; l > r; r++)
          for (s in a[r]) o = a[r][s], a[r].hasOwnProperty(s) && o !== t && (i[s] = e.isPlainObject(o) ? e.isPlainObject(i[s]) ? e.widget.extend({}, i[s], o) : e.widget.extend({}, o) : o);
          return i
        }, e.widget.bridge = function(i, s) {
          var o = s.prototype.widgetFullName || i;
          e.fn[i] = function(a) {
            var r = "string" == typeof a,
            l = n.call(arguments, 1),
            c = this;
            return a = !r && l.length ? e.widget.extend.apply(null, [a].concat(l)) : a, this.each(r ? function() {
              var n, s = e.data(this, o);
              return s ? e.isFunction(s[a]) && "_" !== a.charAt(0) ? (n = s[a].apply(s, l), n !== s && n !== t ? (c = n && n.jquery ? c.pushStack(n.get()) : n, !1) : void 0) : e.error("no such method '" + a + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + a + "'")
            } : function() {
              var t = e.data(this, o);
              t ? t.option(a || {})._init() : e.data(this, o, new s(a, this))
            }), c
          }
        }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
          widgetName: "widget",
          widgetEventPrefix: "",
          defaultElement: "<div>",
            options: {
              disabled: !1,
              create: null
            },
            _createWidget: function(t, n) {
              n = e(n || this.defaultElement || this)[0], this.element = e(n), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), n !== this && (e.data(n, this.widgetName, this), e.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                  e.target === n && this.destroy()
                }
              }), this.document = e(n.style ? n.ownerDocument : n.document || n), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: e.noop,
            _getCreateEventData: e.noop,
            _create: e.noop,
            _init: e.noop,
            destroy: function() {
              this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: e.noop,
            widget: function() {
              return this.element
            },
            option: function(i, n) {
              var s, o, a, r = i;
              if (0 === arguments.length) return e.widget.extend({}, this.options);
              if ("string" == typeof i)
              if (r = {}, s = i.split("."), i = s.shift(), s.length) {
                for (o = r[i] = e.widget.extend({}, this.options[i]), a = 0; a < s.length - 1; a++) o[s[a]] = o[s[a]] || {}, o = o[s[a]];
                if (i = s.pop(), n === t) return o[i] === t ? null : o[i];
                o[i] = n
              } else {
                if (n === t) return this.options[i] === t ? null : this.options[i];
                r[i] = n
              }
              return this._setOptions(r), this
            },
            _setOptions: function(e) {
              var t;
              for (t in e) this._setOption(t, e[t]);
              return this
            },
            _setOption: function(e, t) {
              return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
            },
            enable: function() {
              return this._setOption("disabled", !1)
            },
            disable: function() {
              return this._setOption("disabled", !0)
            },
            _on: function(t, i, n) {
              var s, o = this;
              "boolean" != typeof t && (n = i, i = t, t = !1), n ? (i = s = e(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), e.each(n, function(n, a) {
                function r() {
                  return t || o.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
                }
                "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || e.guid++);
                var l = n.match(/^(\w+)\s*(.*)$/),
                c = l[1] + o.eventNamespace,
                u = l[2];
                u ? s.delegate(u, c, r) : i.bind(c, r)
              })
            },
            _off: function(e, t) {
              t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
            },
            _delay: function(e, t) {
              function i() {
                return ("string" == typeof e ? n[e] : e).apply(n, arguments)
              }
              var n = this;
              return setTimeout(i, t || 0)
            },
            _hoverable: function(t) {
              this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                  e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                  e(t.currentTarget).removeClass("ui-state-hover")
                }
              })
            },
            _focusable: function(t) {
              this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                  e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                  e(t.currentTarget).removeClass("ui-state-focus")
                }
              })
            },
            _trigger: function(t, i, n) {
              var s, o, a = this.options[t];
              if (n = n || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
              for (s in o) s in i || (i[s] = o[s]);
              return this.element.trigger(i, n), !(e.isFunction(a) && a.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
            }
          }, e.each({
            show: "fadeIn",
            hide: "fadeOut"
          }, function(t, i) {
            e.Widget.prototype["_" + t] = function(n, s, o) {
              "string" == typeof s && (s = {
                effect: s
              });
              var a, r = s ? s === !0 || "number" == typeof s ? i : s.effect || i : t;
              s = s || {}, "number" == typeof s && (s = {
                duration: s
              }), a = !e.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), a && e.effects && (e.effects.effect[r] || e.uiBackCompat !== !1 && e.effects[r]) ? n[t](s) : r !== t && n[r] ? n[r](s.duration, s.easing, o) : n.queue(function(i) {
                e(this)[t](), o && o.call(n[0]), i()
              })
            }
          }), e.uiBackCompat !== !1 && (e.Widget.prototype._getCreateOptions = function() {
            return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
          })
        }(jQuery),
        function(e) {
          var t = !1;
          e(document).mouseup(function() {
            t = !1
          }), e.widget("ui.mouse", {
            version: "1.9.2",
            options: {
              cancel: "input,textarea,button,select,option",
              distance: 1,
              delay: 0
            },
            _mouseInit: function() {
              var t = this;
              this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
              }).bind("click." + this.widgetName, function(i) {
                return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
              }), this.started = !1
            },
            _mouseDestroy: function() {
              this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(i) {
              if (!t) {
                this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var n = this,
                s = 1 === i.which,
                o = "string" == typeof this.options.cancel && i.target.nodeName ? e(i.target).closest(this.options.cancel).length : !1;
                return s && !o && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                  n.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === e.data(i.target, this.widgetName + ".preventClickEvent") && e.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                  return n._mouseMove(e)
                }, this._mouseUpDelegate = function(e) {
                  return n._mouseUp(e)
                }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), t = !0, !0)) : !0
              }
            },
            _mouseMove: function(t) {
              return !e.ui.ie || document.documentMode >= 9 || t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
            },
            _mouseUp: function(t) {
              return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
            },
            _mouseDistanceMet: function(e) {
              return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
              return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
              return !0
            }
          })
        }(jQuery),
        function(e, t) {
          function i(e, t, i) {
            return [parseInt(e[0], 10) * (d.test(e[0]) ? t / 100 : 1), parseInt(e[1], 10) * (d.test(e[1]) ? i / 100 : 1)]
          }

          function n(t, i) {
            return parseInt(e.css(t, i), 10) || 0
          }
          e.ui = e.ui || {};
          var s, o = Math.max,
          a = Math.abs,
          r = Math.round,
          l = /left|center|right/,
          c = /top|center|bottom/,
          u = /[\+\-]\d+%?/,
          h = /^\w+/,
          d = /%$/,
          p = e.fn.position;
          e.position = {
            scrollbarWidth: function() {
              if (s !== t) return s;
              var i, n, o = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
              a = o.children()[0];
              return e("body").append(o), i = a.offsetWidth, o.css("overflow", "scroll"), n = a.offsetWidth, i === n && (n = o[0].clientWidth), o.remove(), s = i - n
            },
            getScrollInfo: function(t) {
              var i = t.isWindow ? "" : t.element.css("overflow-x"),
              n = t.isWindow ? "" : t.element.css("overflow-y"),
              s = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
              o = "scroll" === n || "auto" === n && t.height < t.element[0].scrollHeight;
              return {
                width: s ? e.position.scrollbarWidth() : 0,
                height: o ? e.position.scrollbarWidth() : 0
              }
            },
            getWithinInfo: function(t) {
              var i = e(t || window),
              n = e.isWindow(i[0]);
              return {
                element: i,
                isWindow: n,
                offset: i.offset() || {
                  left: 0,
                  top: 0
                },
                scrollLeft: i.scrollLeft(),
                scrollTop: i.scrollTop(),
                width: n ? i.width() : i.outerWidth(),
                height: n ? i.height() : i.outerHeight()
              }
            }
          }, e.fn.position = function(t) {
            if (!t || !t.of) return p.apply(this, arguments);
            t = e.extend({}, t);
            var s, d, f, m, g, v = e(t.of),
            y = e.position.getWithinInfo(t.within),
            b = e.position.getScrollInfo(y),
            w = v[0],
            _ = (t.collision || "flip").split(" "),
            x = {};
            return 9 === w.nodeType ? (d = v.width(), f = v.height(), m = {
              top: 0,
              left: 0
            }) : e.isWindow(w) ? (d = v.width(), f = v.height(), m = {
              top: v.scrollTop(),
              left: v.scrollLeft()
            }) : w.preventDefault ? (t.at = "left top", d = f = 0, m = {
              top: w.pageY,
              left: w.pageX
            }) : (d = v.outerWidth(), f = v.outerHeight(), m = v.offset()), g = e.extend({}, m), e.each(["my", "at"], function() {
              var e, i, n = (t[this] || "").split(" ");
              1 === n.length && (n = l.test(n[0]) ? n.concat(["center"]) : c.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = l.test(n[0]) ? n[0] : "center", n[1] = c.test(n[1]) ? n[1] : "center", e = u.exec(n[0]), i = u.exec(n[1]), x[this] = [e ? e[0] : 0, i ? i[0] : 0], t[this] = [h.exec(n[0])[0], h.exec(n[1])[0]]
            }), 1 === _.length && (_[1] = _[0]), "right" === t.at[0] ? g.left += d : "center" === t.at[0] && (g.left += d / 2), "bottom" === t.at[1] ? g.top += f : "center" === t.at[1] && (g.top += f / 2), s = i(x.at, d, f), g.left += s[0], g.top += s[1], this.each(function() {
              var l, c, u = e(this),
              h = u.outerWidth(),
              p = u.outerHeight(),
              w = n(this, "marginLeft"),
              k = n(this, "marginTop"),
              C = h + w + n(this, "marginRight") + b.width,
              T = p + k + n(this, "marginBottom") + b.height,
              D = e.extend({}, g),
              S = i(x.my, u.outerWidth(), u.outerHeight());
              "right" === t.my[0] ? D.left -= h : "center" === t.my[0] && (D.left -= h / 2), "bottom" === t.my[1] ? D.top -= p : "center" === t.my[1] && (D.top -= p / 2), D.left += S[0], D.top += S[1], e.support.offsetFractions || (D.left = r(D.left), D.top = r(D.top)), l = {
                marginLeft: w,
                marginTop: k
              }, e.each(["left", "top"], function(i, n) {
                e.ui.position[_[i]] && e.ui.position[_[i]][n](D, {
                  targetWidth: d,
                  targetHeight: f,
                  elemWidth: h,
                  elemHeight: p,
                  collisionPosition: l,
                  collisionWidth: C,
                  collisionHeight: T,
                  offset: [s[0] + S[0], s[1] + S[1]],
                  my: t.my,
                  at: t.at,
                  within: y,
                  elem: u
                })
              }), e.fn.bgiframe && u.bgiframe(), t.using && (c = function(e) {
                var i = m.left - D.left,
                n = i + d - h,
                s = m.top - D.top,
                r = s + f - p,
                l = {
                  target: {
                    element: v,
                    left: m.left,
                    top: m.top,
                    width: d,
                    height: f
                  },
                  element: {
                    element: u,
                    left: D.left,
                    top: D.top,
                    width: h,
                    height: p
                  },
                  horizontal: 0 > n ? "left" : i > 0 ? "right" : "center",
                  vertical: 0 > r ? "top" : s > 0 ? "bottom" : "middle"
                };
                h > d && a(i + n) < d && (l.horizontal = "center"), p > f && a(s + r) < f && (l.vertical = "middle"), l.important = o(a(i), a(n)) > o(a(s), a(r)) ? "horizontal" : "vertical", t.using.call(this, e, l)
              }), u.offset(e.extend(D, {
                using: c
              }))
            })
          }, e.ui.position = {
            fit: {
              left: function(e, t) {
                var i, n = t.within,
                s = n.isWindow ? n.scrollLeft : n.offset.left,
                a = n.width,
                r = e.left - t.collisionPosition.marginLeft,
                l = s - r,
                c = r + t.collisionWidth - a - s;
                t.collisionWidth > a ? l > 0 && 0 >= c ? (i = e.left + l + t.collisionWidth - a - s, e.left += l - i) : e.left = c > 0 && 0 >= l ? s : l > c ? s + a - t.collisionWidth : s : l > 0 ? e.left += l : c > 0 ? e.left -= c : e.left = o(e.left - r, e.left)
              },
              top: function(e, t) {
                var i, n = t.within,
                s = n.isWindow ? n.scrollTop : n.offset.top,
                a = t.within.height,
                r = e.top - t.collisionPosition.marginTop,
                l = s - r,
                c = r + t.collisionHeight - a - s;
                t.collisionHeight > a ? l > 0 && 0 >= c ? (i = e.top + l + t.collisionHeight - a - s, e.top += l - i) : e.top = c > 0 && 0 >= l ? s : l > c ? s + a - t.collisionHeight : s : l > 0 ? e.top += l : c > 0 ? e.top -= c : e.top = o(e.top - r, e.top)
              }
            },
            flip: {
              left: function(e, t) {
                var i, n, s = t.within,
                o = s.offset.left + s.scrollLeft,
                r = s.width,
                l = s.isWindow ? s.scrollLeft : s.offset.left,
                c = e.left - t.collisionPosition.marginLeft,
                u = c - l,
                h = c + t.collisionWidth - r - l,
                d = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                f = -2 * t.offset[0];
                0 > u ? (i = e.left + d + p + f + t.collisionWidth - r - o, (0 > i || i < a(u)) && (e.left += d + p + f)) : h > 0 && (n = e.left - t.collisionPosition.marginLeft + d + p + f - l, (n > 0 || a(n) < h) && (e.left += d + p + f))
              },
              top: function(e, t) {
                var i, n, s = t.within,
                o = s.offset.top + s.scrollTop,
                r = s.height,
                l = s.isWindow ? s.scrollTop : s.offset.top,
                c = e.top - t.collisionPosition.marginTop,
                u = c - l,
                h = c + t.collisionHeight - r - l,
                d = "top" === t.my[1],
                p = d ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                m = -2 * t.offset[1];
                0 > u ? (n = e.top + p + f + m + t.collisionHeight - r - o, e.top + p + f + m > u && (0 > n || n < a(u)) && (e.top += p + f + m)) : h > 0 && (i = e.top - t.collisionPosition.marginTop + p + f + m - l, e.top + p + f + m > h && (i > 0 || a(i) < h) && (e.top += p + f + m))
              }
            },
            flipfit: {
              left: function() {
                e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
              },
              top: function() {
                e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
              }
            }
          },
          function() {
            var t, i, n, s, o, a = document.getElementsByTagName("body")[0],
            r = document.createElement("div");
            t = document.createElement(a ? "div" : "body"), n = {
              visibility: "hidden",
              width: 0,
              height: 0,
              border: 0,
              margin: 0,
              background: "none"
            }, a && e.extend(n, {
              position: "absolute",
              left: "-1000px",
              top: "-1000px"
            });
            for (o in n) t.style[o] = n[o];
            t.appendChild(r), i = a || document.documentElement, i.insertBefore(t, i.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", s = e(r).offset().left, e.support.offsetFractions = s > 10 && 11 > s, t.innerHTML = "", i.removeChild(t)
          }(), e.uiBackCompat !== !1 && ! function(e) {
            var i = e.fn.position;
            e.fn.position = function(n) {
              if (!n || !n.offset) return i.call(this, n);
              var s = n.offset.split(" "),
              o = n.at.split(" ");
              return 1 === s.length && (s[1] = s[0]), /^\d/.test(s[0]) && (s[0] = "+" + s[0]), /^\d/.test(s[1]) && (s[1] = "+" + s[1]), 1 === o.length && (/left|center|right/.test(o[0]) ? o[1] = "center" : (o[1] = o[0], o[0] = "center")), i.call(this, e.extend(n, {
                at: o[0] + s[0] + " " + o[1] + s[1],
                offset: t
              }))
            }
          }(jQuery)
        }(jQuery),
        function(e) {
          var t = 0,
          i = {},
          n = {};
          i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide", n.height = n.paddingTop = n.paddingBottom = n.borderTopWidth = n.borderBottomWidth = "show", e.widget("ui.accordion", {
            version: "1.9.2",
            options: {
              active: 0,
              animate: {},
              collapsible: !1,
              event: "click",
              header: "> li > :first-child,> :not(li):even",
              heightStyle: "auto",
              icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
              },
              activate: null,
              beforeActivate: null
            },
            _create: function() {
              var i = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++t),
              n = this.options;
              this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset"), this.headers = this.element.find(n.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this._hoverable(this.headers), this._focusable(this.headers), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), n.collapsible || n.active !== !1 && null != n.active || (n.active = 0), n.active < 0 && (n.active += this.headers.length), this.active = this._findActive(n.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"), this.active.next().addClass("ui-accordion-content-active").show(), this._createIcons(), this.refresh(), this.element.attr("role", "tablist"), this.headers.attr("role", "tab").each(function(t) {
                var n = e(this),
                s = n.attr("id"),
                o = n.next(),
                a = o.attr("id");
                s || (s = i + "-header-" + t, n.attr("id", s)), a || (a = i + "-panel-" + t, o.attr("id", a)), n.attr("aria-controls", a), o.attr("aria-labelledby", s)
              }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
              }).next().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
              }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                tabIndex: 0
              }).next().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
              }) : this.headers.eq(0).attr("tabIndex", 0), this._on(this.headers, {
                keydown: "_keydown"
              }), this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
              }), this._setupEvents(n.event)
            },
            _getCreateEventData: function() {
              return {
                header: this.active,
                content: this.active.length ? this.active.next() : e()
              }
            },
            _createIcons: function() {
              var t = this.options.icons;
              t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
              },
              _destroyIcons: function() {
                this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
              },
              _destroy: function() {
                var e;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                  /^ui-accordion/.test(this.id) && this.removeAttribute("id")
                }), this._destroyIcons(), e = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                  /^ui-accordion/.test(this.id) && this.removeAttribute("id")
                }), "content" !== this.options.heightStyle && e.css("height", "")
              },
              _setOption: function(e, t) {
                return "active" === e ? void this._activate(t) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons()), void("disabled" === e && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t)))
              },
              _keydown: function(t) {
                if (!t.altKey && !t.ctrlKey) {
                  var i = e.ui.keyCode,
                  n = this.headers.length,
                  s = this.headers.index(t.target),
                  o = !1;
                  switch (t.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                    o = this.headers[(s + 1) % n];
                    break;
                    case i.LEFT:
                    case i.UP:
                    o = this.headers[(s - 1 + n) % n];
                    break;
                    case i.SPACE:
                    case i.ENTER:
                    this._eventHandler(t);
                    break;
                    case i.HOME:
                    o = this.headers[0];
                    break;
                    case i.END:
                    o = this.headers[n - 1]
                  }
                  o && (e(t.target).attr("tabIndex", -1), e(o).attr("tabIndex", 0), o.focus(), t.preventDefault())
                }
              },
              _panelKeyDown: function(t) {
                t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus()
              },
              refresh: function() {
                var t, i, n = this.options.heightStyle,
                s = this.element.parent();
                "fill" === n ? (e.support.minHeight || (i = s.css("overflow"), s.css("overflow", "hidden")), t = s.height(), this.element.siblings(":visible").each(function() {
                  var i = e(this),
                  n = i.css("position");
                  "absolute" !== n && "fixed" !== n && (t -= i.outerHeight(!0))
                }), i && s.css("overflow", i), this.headers.each(function() {
                  t -= e(this).outerHeight(!0)
                }), this.headers.next().each(function() {
                  e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()))
                }).css("overflow", "auto")) : "auto" === n && (t = 0, this.headers.next().each(function() {
                  t = Math.max(t, e(this).css("height", "").height())
                }).height(t))
              },
              _activate: function(t) {
                var i = this._findActive(t)[0];
                i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                  target: i,
                  currentTarget: i,
                  preventDefault: e.noop
                }))
              },
              _findActive: function(t) {
                return "number" == typeof t ? this.headers.eq(t) : e()
              },
              _setupEvents: function(t) {
                var i = {};
                t && (e.each(t.split(" "), function(e, t) {
                  i[t] = "_eventHandler"
                }), this._on(this.headers, i))
              },
              _eventHandler: function(t) {
                var i = this.options,
                n = this.active,
                s = e(t.currentTarget),
                o = s[0] === n[0],
                a = o && i.collapsible,
                r = a ? e() : s.next(),
                l = n.next(),
                c = {
                  oldHeader: n,
                  oldPanel: l,
                  newHeader: a ? e() : s,
                  newPanel: r
                };
                t.preventDefault(), o && !i.collapsible || this._trigger("beforeActivate", t, c) === !1 || (i.active = a ? !1 : this.headers.index(s), this.active = o ? e() : s, this._toggle(c), n.removeClass("ui-accordion-header-active ui-state-active"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), o || (s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), s.next().addClass("ui-accordion-content-active")))
              },
              _toggle: function(t) {
                var i = t.newPanel,
                n = this.prevShow.length ? this.prevShow : t.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = n, this.options.animate ? this._animate(i, n, t) : (n.hide(), i.show(), this._toggleComplete(t)), n.attr({
                  "aria-expanded": "false",
                  "aria-hidden": "true"
                }), n.prev().attr("aria-selected", "false"), i.length && n.length ? n.prev().attr("tabIndex", -1) : i.length && this.headers.filter(function() {
                  return 0 === e(this).attr("tabIndex")
                }).attr("tabIndex", -1), i.attr({
                  "aria-expanded": "true",
                  "aria-hidden": "false"
                }).prev().attr({
                  "aria-selected": "true",
                  tabIndex: 0
                })
              },
              _animate: function(e, t, s) {
                var o, a, r, l = this,
                c = 0,
                u = e.length && (!t.length || e.index() < t.index()),
                h = this.options.animate || {},
                d = u && h.down || h,
                p = function() {
                  l._toggleComplete(s)
                };
                return "number" == typeof d && (r = d), "string" == typeof d && (a = d), a = a || d.easing || h.easing, r = r || d.duration || h.duration, t.length ? e.length ? (o = e.show().outerHeight(), t.animate(i, {
                  duration: r,
                  easing: a,
                  step: function(e, t) {
                    t.now = Math.round(e)
                  }
                }), void e.hide().animate(n, {
                  duration: r,
                  easing: a,
                  complete: p,
                  step: function(e, i) {
                    i.now = Math.round(e), "height" !== i.prop ? c += i.now : "content" !== l.options.heightStyle && (i.now = Math.round(o - t.outerHeight() - c), c = 0)
                  }
                })) : t.animate(i, r, a, p) : e.animate(n, r, a, p)
              },
              _toggleComplete: function(e) {
                var t = e.oldPanel;
                t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
              }
            }), e.uiBackCompat !== !1 && (! function(e, t) {
              e.extend(t.options, {
                navigation: !1,
                navigationFilter: function() {
                  return this.href.toLowerCase() === location.href.toLowerCase()
                }
              });
              var i = t._create;
              t._create = function() {
                if (this.options.navigation) {
                  var t = this,
                  n = this.element.find(this.options.header),
                  s = n.next(),
                  o = n.add(s).find("a").filter(this.options.navigationFilter)[0];
                  o && n.add(s).each(function(i) {
                    return e.contains(this, o) ? (t.options.active = Math.floor(i / 2), !1) : void 0
                  })
                }
                i.call(this)
              }
            }(jQuery, jQuery.ui.accordion.prototype), function(e, t) {
              e.extend(t.options, {
                heightStyle: null,
                autoHeight: !0,
                clearStyle: !1,
                fillSpace: !1
              });
              var i = t._create,
              n = t._setOption;
              e.extend(t, {
                _create: function() {
                  this.options.heightStyle = this.options.heightStyle || this._mergeHeightStyle(), i.call(this)
                },
                _setOption: function(e) {
                  ("autoHeight" === e || "clearStyle" === e || "fillSpace" === e) && (this.options.heightStyle = this._mergeHeightStyle()), n.apply(this, arguments)
                },
                _mergeHeightStyle: function() {
                  var e = this.options;
                  return e.fillSpace ? "fill" : e.clearStyle ? "content" : e.autoHeight ? "auto" : void 0
                }
              })
            }(jQuery, jQuery.ui.accordion.prototype), function(e, t) {
              e.extend(t.options.icons, {
                activeHeader: null,
                headerSelected: "ui-icon-triangle-1-s"
              });
              var i = t._createIcons;
              t._createIcons = function() {
                this.options.icons && (this.options.icons.activeHeader = this.options.icons.activeHeader || this.options.icons.headerSelected), i.call(this)
              }
            }(jQuery, jQuery.ui.accordion.prototype), function(e, t) {
              t.activate = t._activate;
              var i = t._findActive;
              t._findActive = function(e) {
                return -1 === e && (e = !1), e && "number" != typeof e && (e = this.headers.index(this.headers.filter(e)), -1 === e && (e = !1)), i.call(this, e)
              }
            }(jQuery, jQuery.ui.accordion.prototype), jQuery.ui.accordion.prototype.resize = jQuery.ui.accordion.prototype.refresh, function(e, t) {
              e.extend(t.options, {
                change: null,
                changestart: null
              });
              var i = t._trigger;
              t._trigger = function(e, t, n) {
                var s = i.apply(this, arguments);
                return s ? ("beforeActivate" === e ? s = i.call(this, "changestart", t, {
                  oldHeader: n.oldHeader,
                  oldContent: n.oldPanel,
                  newHeader: n.newHeader,
                  newContent: n.newPanel
                }) : "activate" === e && (s = i.call(this, "change", t, {
                  oldHeader: n.oldHeader,
                  oldContent: n.oldPanel,
                  newHeader: n.newHeader,
                  newContent: n.newPanel
                })), s) : !1
              }
            }(jQuery, jQuery.ui.accordion.prototype), function(e, t) {
              e.extend(t.options, {
                animate: null,
                animated: "slide"
              });
              var i = t._create;
              t._create = function() {
                var e = this.options;
                null === e.animate && (e.animate = e.animated ? "slide" === e.animated ? 300 : "bounceslide" === e.animated ? {
                  duration: 200,
                  down: {
                    easing: "easeOutBounce",
                    duration: 1e3
                  }
                } : e.animated : !1), i.call(this)
              }
            }(jQuery, jQuery.ui.accordion.prototype))
          }(jQuery),
          function(e) {
            var t = 0;
            e.widget("ui.autocomplete", {
              version: "1.9.2",
              defaultElement: "<input>",
              options: {
                appendTo: "body",
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                  my: "left top",
                  at: "left bottom",
                  collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
              },
              pending: 0,
              _create: function() {
                var t, i, n;
                this.isMultiLine = this._isMultiLine(), this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                  keydown: function(s) {
                    if (this.element.prop("readOnly")) return t = !0, n = !0, void(i = !0);
                    t = !1, n = !1, i = !1;
                    var o = e.ui.keyCode;
                    switch (s.keyCode) {
                      case o.PAGE_UP:
                      t = !0, this._move("previousPage", s);
                      break;
                      case o.PAGE_DOWN:
                      t = !0, this._move("nextPage", s);
                      break;
                      case o.UP:
                      t = !0, this._keyEvent("previous", s);
                      break;
                      case o.DOWN:
                      t = !0, this._keyEvent("next", s);
                      break;
                      case o.ENTER:
                      case o.NUMPAD_ENTER:
                      this.menu.active && (t = !0, s.preventDefault(), this.menu.select(s));
                      break;
                      case o.TAB:
                      this.menu.active && this.menu.select(s);
                      break;
                      case o.ESCAPE:
                      this.menu.element.is(":visible") && (this._value(this.term), this.close(s), s.preventDefault());
                      break;
                      default:
                      i = !0, this._searchTimeout(s)
                    }
                  },
                  keypress: function(n) {
                    if (t) return t = !1, void n.preventDefault();
                    if (!i) {
                      var s = e.ui.keyCode;
                      switch (n.keyCode) {
                        case s.PAGE_UP:
                        this._move("previousPage", n);
                        break;
                        case s.PAGE_DOWN:
                        this._move("nextPage", n);
                        break;
                        case s.UP:
                        this._keyEvent("previous", n);
                        break;
                        case s.DOWN:
                        this._keyEvent("next", n)
                      }
                    }
                  },
                  input: function(e) {
                    return n ? (n = !1, void e.preventDefault()) : void this._searchTimeout(e)
                  },
                  focus: function() {
                    this.selectedItem = null, this.previous = this._value()
                  },
                  blur: function(e) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(e), void this._change(e))
                  }
                }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu({
                  input: e(),
                  role: null
                }).zIndex(this.element.zIndex() + 1).hide().data("menu"), this._on(this.menu.element, {
                  mousedown: function(t) {
                    t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                      delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    e(t.target).closest(".ui-menu-item").length || this._delay(function() {
                      var t = this;
                      this.document.one("mousedown", function(n) {
                        n.target === t.element[0] || n.target === i || e.contains(i, n.target) || t.close()
                      })
                    })
                  },
                  menufocus: function(t, i) {
                    if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function() {
                      e(t.target).trigger(t.originalEvent)
                    });
                    var n = i.item.data("ui-autocomplete-item") || i.item.data("item.autocomplete");
                    !1 !== this._trigger("focus", t, {
                      item: n
                    }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(n.value) : this.liveRegion.text(n.value)
                  },
                  menuselect: function(e, t) {
                    var i = t.item.data("ui-autocomplete-item") || t.item.data("item.autocomplete"),
                    n = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = n, this._delay(function() {
                      this.previous = n, this.selectedItem = i
                    })), !1 !== this._trigger("select", e, {
                      item: i
                    }) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i
                  }
                }), this.liveRegion = e("<span>", {
                  role: "status",
                  "aria-live": "polite"
                }).addClass("ui-helper-hidden-accessible").insertAfter(this.element), e.fn.bgiframe && this.menu.element.bgiframe(), this._on(this.window, {
                  beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                  }
                })
              },
              _destroy: function() {
                clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
              },
              _setOption: function(e, t) {
                this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this.document.find(t || "body")[0]), "disabled" === e && t && this.xhr && this.xhr.abort()
              },
              _isMultiLine: function() {
                return this.element.is("textarea") ? !0 : this.element.is("input") ? !1 : this.element.prop("isContentEditable")
              },
              _initSource: function() {
                var t, i, n = this;
                e.isArray(this.options.source) ? (t = this.options.source, this.source = function(i, n) {
                  n(e.ui.autocomplete.filter(t, i.term))
                }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(t, s) {
                  n.xhr && n.xhr.abort(), n.xhr = e.ajax({
                    url: i,
                    data: t,
                    dataType: "json",
                    success: function(e) {
                      s(e)
                    },
                    error: function() {
                      s([])
                    }
                  })
                }) : this.source = this.options.source
              },
              _searchTimeout: function(e) {
                clearTimeout(this.searching), this.searching = this._delay(function() {
                  this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
                }, this.options.delay)
              },
              search: function(e, t) {
                return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0
              },
              _search: function(e) {
                this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                  term: e
                }, this._response())
              },
              _response: function() {
                var e = this,
                i = ++t;
                return function(n) {
                  i === t && e.__response(n), e.pending--, e.pending || e.element.removeClass("ui-autocomplete-loading")
                }
              },
              __response: function(e) {
                e && (e = this._normalize(e)), this._trigger("response", null, {
                  content: e
                }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
              },
              close: function(e) {
                this.cancelSearch = !0, this._close(e)
              },
              _close: function(e) {
                this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
              },
              _change: function(e) {
                this.previous !== this._value() && this._trigger("change", e, {
                  item: this.selectedItem
                })
              },
              _normalize: function(t) {
                return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                  return "string" == typeof t ? {
                    label: t,
                    value: t
                  } : e.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                  }, t)
                })
              },
              _suggest: function(t) {
                var i = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
                this._renderMenu(i, t), this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({
                  of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next()
              },
              _resizeMenu: function() {
                var e = this.menu.element;
                e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
              },
              _renderMenu: function(t, i) {
                var n = this;
                e.each(i, function(e, i) {
                  n._renderItemData(t, i)
                })
              },
              _renderItemData: function(e, t) {
                return this._renderItem(e, t).data("ui-autocomplete-item", t)
              },
              _renderItem: function(t, i) {
                return e("<li>").append(e("<a>").text(i.label)).appendTo(t)
                },
                _move: function(e, t) {
                  return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this._value(this.term), void this.menu.blur()) : void this.menu[e](t) : void this.search(null, t)
                },
                widget: function() {
                  return this.menu.element
                },
                _value: function() {
                  return this.valueMethod.apply(this.element, arguments)
                },
                _keyEvent: function(e, t) {
                  (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
                }
              }), e.extend(e.ui.autocomplete, {
                escapeRegex: function(e) {
                  return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                },
                filter: function(t, i) {
                  var n = new RegExp(e.ui.autocomplete.escapeRegex(i), "i");
                  return e.grep(t, function(e) {
                    return n.test(e.label || e.value || e)
                  })
                }
              }), e.widget("ui.autocomplete", e.ui.autocomplete, {
                options: {
                  messages: {
                    noResults: "No search results.",
                    results: function(e) {
                      return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                  }
                },
                __response: function(e) {
                  var t;
                  this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.text(t))
                }
              })
            }(jQuery),
            function(e) {
              var t, i, n, s, o = "ui-button ui-widget ui-state-default ui-corner-all",
              a = "ui-state-hover ui-state-active ",
              r = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
              l = function() {
                var t = e(this).find(":ui-button");
                setTimeout(function() {
                  t.button("refresh")
                }, 1)
              },
              c = function(t) {
                var i = t.name,
                n = t.form,
                s = e([]);
                return i && (s = n ? e(n).find("[name='" + i + "']") : e("[name='" + i + "']", t.ownerDocument).filter(function() {
                  return !this.form
                })), s
              };
              e.widget("ui.button", {
                version: "1.9.2",
                defaultElement: "<button>",
                  options: {
                    disabled: null,
                    text: !0,
                    label: null,
                    icons: {
                      primary: null,
                      secondary: null
                    }
                  },
                  _create: function() {
                    this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, l), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
                    var a = this,
                    r = this.options,
                    u = "checkbox" === this.type || "radio" === this.type,
                    h = u ? "" : "ui-state-active",
                    d = "ui-state-focus";
                    null === r.label && (r.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(o).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                      r.disabled || this === t && e(this).addClass("ui-state-active")
                    }).bind("mouseleave" + this.eventNamespace, function() {
                      r.disabled || e(this).removeClass(h)
                    }).bind("click" + this.eventNamespace, function(e) {
                      r.disabled && (e.preventDefault(), e.stopImmediatePropagation())
                    }), this.element.bind("focus" + this.eventNamespace, function() {
                      a.buttonElement.addClass(d)
                    }).bind("blur" + this.eventNamespace, function() {
                      a.buttonElement.removeClass(d)
                    }), u && (this.element.bind("change" + this.eventNamespace, function() {
                      s || a.refresh()
                    }), this.buttonElement.bind("mousedown" + this.eventNamespace, function(e) {
                      r.disabled || (s = !1, i = e.pageX, n = e.pageY)
                    }).bind("mouseup" + this.eventNamespace, function(e) {
                      r.disabled || (i !== e.pageX || n !== e.pageY) && (s = !0)
                    })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                      return r.disabled || s ? !1 : (e(this).toggleClass("ui-state-active"), void a.buttonElement.attr("aria-pressed", a.element[0].checked))
                    }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                      if (r.disabled || s) return !1;
                      e(this).addClass("ui-state-active"), a.buttonElement.attr("aria-pressed", "true");
                      var t = a.element[0];
                      c(t).not(t).map(function() {
                        return e(this).button("widget")[0]
                      }).removeClass("ui-state-active").attr("aria-pressed", "false")
                    }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                      return r.disabled ? !1 : (e(this).addClass("ui-state-active"), t = this, void a.document.one("mouseup", function() {
                        t = null
                      }))
                    }).bind("mouseup" + this.eventNamespace, function() {
                      return r.disabled ? !1 : void e(this).removeClass("ui-state-active")
                    }).bind("keydown" + this.eventNamespace, function(t) {
                      return r.disabled ? !1 : void((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"))
                    }).bind("keyup" + this.eventNamespace, function() {
                      e(this).removeClass("ui-state-active")
                    }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                      t.keyCode === e.ui.keyCode.SPACE && e(this).click()
                    })), this._setOption("disabled", r.disabled), this._resetButton()
                  },
                  _determineButtonType: function() {
                    var e, t, i;
                    this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
                  },
                  widget: function() {
                    return this.buttonElement
                  },
                  _destroy: function() {
                    this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(o + " " + a + " " + r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
                  },
                  _setOption: function(e, t) {
                    return this._super(e, t), "disabled" === e ? void(t ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1)) : void this._resetButton()
                  },
                  refresh: function() {
                    var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                    t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? c(this.element[0]).each(function() {
                      e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                    }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
                  },
                  _resetButton: function() {
                    if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
                    var t = this.buttonElement.removeClass(r),
                    i = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                    n = this.options.icons,
                    s = n.primary && n.secondary,
                    o = [];
                    n.primary || n.secondary ? (this.options.text && o.push("ui-button-text-icon" + (s ? "s" : n.primary ? "-primary" : "-secondary")), n.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + n.primary + "'></span>"), n.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + n.secondary + "'></span>"), this.options.text || (o.push(s ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(i)))) : o.push("ui-button-text-only"), t.addClass(o.join(" "))
                  }
                }), e.widget("ui.buttonset", {
                  version: "1.9.2",
                  options: {
                    items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"
                  },
                  _create: function() {
                    this.element.addClass("ui-buttonset")
                  },
                  _init: function() {
                    this.refresh()
                  },
                  _setOption: function(e, t) {
                    "disabled" === e && this.buttons.button("option", e, t), this._super(e, t)
                  },
                  refresh: function() {
                    var t = "rtl" === this.element.css("direction");
                    this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                      return e(this).button("widget")[0]
                    }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
                  },
                  _destroy: function() {
                    this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                      return e(this).button("widget")[0]
                    }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
                  }
                })
              }(jQuery),
              function($, undefined) {
                function Datepicker() {
                  this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                    closeText: "Done",
                    prevText: "Prev",
                    nextText: "Next",
                    currentText: "Today",
                    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    weekHeader: "Wk",
                    dateFormat: "mm/dd/yy",
                    firstDay: 0,
                    isRTL: !1,
                    showMonthAfterYear: !1,
                    yearSuffix: ""
                  }, this._defaults = {
                    showOn: "focus",
                    showAnim: "fadeIn",
                    showOptions: {},
                    defaultDate: null,
                    appendText: "",
                    buttonText: "...",
                    buttonImage: "",
                    buttonImageOnly: !1,
                    hideIfNoPrevNext: !1,
                    navigationAsDateFormat: !1,
                    gotoCurrent: !1,
                    changeMonth: !1,
                    changeYear: !1,
                    yearRange: "c-10:c+10",
                    showOtherMonths: !1,
                    selectOtherMonths: !1,
                    showWeek: !1,
                    calculateWeek: this.iso8601Week,
                    shortYearCutoff: "+10",
                    minDate: null,
                    maxDate: null,
                    duration: "fast",
                    beforeShowDay: null,
                    beforeShow: null,
                    onSelect: null,
                    onChangeMonthYear: null,
                    onClose: null,
                    numberOfMonths: 1,
                    showCurrentAtPos: 0,
                    stepMonths: 1,
                    stepBigMonths: 12,
                    altField: "",
                    altFormat: "",
                    constrainInput: !0,
                    showButtonPanel: !1,
                    autoSize: !1,
                    disabled: !1
                  }, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
                }

                function bindHover(e) {
                  var t = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
                  return e.delegate(t, "mouseout", function() {
                    $(this).removeClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).removeClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && $(this).removeClass("ui-datepicker-next-hover")
                  }).delegate(t, "mouseover", function() {
                    $.datepicker._isDisabledDatepicker(instActive.inline ? e.parent()[0] : instActive.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).addClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && $(this).addClass("ui-datepicker-next-hover"))
                  })
                }

                function extendRemove(e, t) {
                  $.extend(e, t);
                  for (var i in t)(null == t[i] || t[i] == undefined) && (e[i] = t[i]);
                  return e
                }
                $.extend($.ui, {
                  datepicker: {
                    version: "1.9.2"
                  }
                });
                var PROP_NAME = "datepicker",
                dpuuid = (new Date).getTime(),
                instActive;
                $.extend(Datepicker.prototype, {
                  markerClassName: "hasDatepicker",
                  maxRows: 4,
                  log: function() {
                    this.debug && console.log.apply("", arguments)
                  },
                  _widgetDatepicker: function() {
                    return this.dpDiv
                  },
                  setDefaults: function(e) {
                    return extendRemove(this._defaults, e || {}), this
                  },
                  _attachDatepicker: function(target, settings) {
                    var inlineSettings = null;
                    for (var attrName in this._defaults) {
                      var attrValue = target.getAttribute("date:" + attrName);
                      if (attrValue) {
                        inlineSettings = inlineSettings || {};
                        try {
                          inlineSettings[attrName] = eval(attrValue)
                        } catch (err) {
                          inlineSettings[attrName] = attrValue
                        }
                      }
                    }
                    var nodeName = target.nodeName.toLowerCase(),
                    inline = "div" == nodeName || "span" == nodeName;
                    target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
                    var inst = this._newInst($(target), inline);
                    inst.settings = $.extend({}, settings || {}, inlineSettings || {}), "input" == nodeName ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
                  },
                  _newInst: function(e, t) {
                    var i = e[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
                    return {
                      id: i,
                      input: e,
                      selectedDay: 0,
                      selectedMonth: 0,
                      selectedYear: 0,
                      drawMonth: 0,
                      drawYear: 0,
                      inline: t,
                      dpDiv: t ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
                    }
                  },
                  _connectDatepicker: function(e, t) {
                    var i = $(e);
                    t.append = $([]), t.trigger = $([]), i.hasClass(this.markerClassName) || (this._attachments(i, t), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(e, i, n) {
                      t.settings[i] = n
                    }).bind("getData.datepicker", function(e, i) {
                      return this._get(t, i)
                    }), this._autoSize(t), $.data(e, PROP_NAME, t), t.settings.disabled && this._disableDatepicker(e))
                  },
                  _attachments: function(e, t) {
                    var i = this._get(t, "appendText"),
                    n = this._get(t, "isRTL");
                    t.append && t.append.remove(), i && (t.append = $('<span class="' + this._appendClass + '">' + i + "</span>"), e[n ? "before" : "after"](t.append)), e.unbind("focus", this._showDatepicker), t.trigger && t.trigger.remove();
                    var s = this._get(t, "showOn");
                    if (("focus" == s || "both" == s) && e.focus(this._showDatepicker), "button" == s || "both" == s) {
                      var o = this._get(t, "buttonText"),
                      a = this._get(t, "buttonImage");
                      t.trigger = $(this._get(t, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                        src: a,
                        alt: o,
                        title: o
                      }) : $('<button type="button"></button>').addClass(this._triggerClass).html("" == a ? o : $("<img/>").attr({
                        src: a,
                        alt: o,
                        title: o
                      }))), e[n ? "before" : "after"](t.trigger), t.trigger.click(function() {
                        return $.datepicker._datepickerShowing && $.datepicker._lastInput == e[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != e[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(e[0])) : $.datepicker._showDatepicker(e[0]), !1
                      })
                    }
                  },
                  _autoSize: function(e) {
                    if (this._get(e, "autoSize") && !e.inline) {
                      var t = new Date(2009, 11, 20),
                      i = this._get(e, "dateFormat");
                      if (i.match(/[DM]/)) {
                        var n = function(e) {
                          for (var t = 0, i = 0, n = 0; n < e.length; n++) e[n].length > t && (t = e[n].length, i = n);
                          return i
                        };
                        t.setMonth(n(this._get(e, i.match(/MM/) ? "monthNames" : "monthNamesShort"))), t.setDate(n(this._get(e, i.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - t.getDay())
                      }
                      e.input.attr("size", this._formatDate(e, t).length)
                    }
                  },
                  _inlineDatepicker: function(e, t) {
                    var i = $(e);
                    i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker", function(e, i, n) {
                      t.settings[i] = n
                    }).bind("getData.datepicker", function(e, i) {
                      return this._get(t, i)
                    }), $.data(e, PROP_NAME, t), this._setDate(t, this._getDefaultDate(t), !0), this._updateDatepicker(t), this._updateAlternate(t), t.settings.disabled && this._disableDatepicker(e), t.dpDiv.css("display", "block"))
                  },
                  _dialogDatepicker: function(e, t, i, n, s) {
                    var o = this._dialogInst;
                    if (!o) {
                      this.uuid += 1;
                      var a = "dp" + this.uuid;
                      this._dialogInput = $('<input type="text" id="' + a + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), o = this._dialogInst = this._newInst(this._dialogInput, !1), o.settings = {}, $.data(this._dialogInput[0], PROP_NAME, o)
                    }
                    if (extendRemove(o.settings, n || {}), t = t && t.constructor == Date ? this._formatDate(o, t) : t, this._dialogInput.val(t), this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null, !this._pos) {
                      var r = document.documentElement.clientWidth,
                      l = document.documentElement.clientHeight,
                      c = document.documentElement.scrollLeft || document.body.scrollLeft,
                      u = document.documentElement.scrollTop || document.body.scrollTop;
                      this._pos = [r / 2 - 100 + c, l / 2 - 150 + u]
                    }
                    return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), o.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, o), this
                  },
                  _destroyDatepicker: function(e) {
                    var t = $(e),
                    i = $.data(e, PROP_NAME);
                    if (t.hasClass(this.markerClassName)) {
                      var n = e.nodeName.toLowerCase();
                      $.removeData(e, PROP_NAME), "input" == n ? (i.append.remove(), i.trigger.remove(), t.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" == n || "span" == n) && t.removeClass(this.markerClassName).empty()
                    }
                  },
                  _enableDatepicker: function(e) {
                    var t = $(e),
                    i = $.data(e, PROP_NAME);
                    if (t.hasClass(this.markerClassName)) {
                      var n = e.nodeName.toLowerCase();
                      if ("input" == n) e.disabled = !1, i.trigger.filter("button").each(function() {
                        this.disabled = !1
                      }).end().filter("img").css({
                        opacity: "1.0",
                        cursor: ""
                      });
                      else if ("div" == n || "span" == n) {
                        var s = t.children("." + this._inlineClass);
                        s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)
                      }
                      this._disabledInputs = $.map(this._disabledInputs, function(t) {
                        return t == e ? null : t
                      })
                    }
                  },
                  _disableDatepicker: function(e) {
                    var t = $(e),
                    i = $.data(e, PROP_NAME);
                    if (t.hasClass(this.markerClassName)) {
                      var n = e.nodeName.toLowerCase();
                      if ("input" == n) e.disabled = !0, i.trigger.filter("button").each(function() {
                        this.disabled = !0
                      }).end().filter("img").css({
                        opacity: "0.5",
                        cursor: "default"
                      });
                      else if ("div" == n || "span" == n) {
                        var s = t.children("." + this._inlineClass);
                        s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)
                      }
                      this._disabledInputs = $.map(this._disabledInputs, function(t) {
                        return t == e ? null : t
                      }), this._disabledInputs[this._disabledInputs.length] = e
                    }
                  },
                  _isDisabledDatepicker: function(e) {
                    if (!e) return !1;
                    for (var t = 0; t < this._disabledInputs.length; t++)
                    if (this._disabledInputs[t] == e) return !0;
                    return !1
                  },
                  _getInst: function(e) {
                    try {
                      return $.data(e, PROP_NAME)
                    } catch (t) {
                      throw "Missing instance data for this datepicker"
                    }
                  },
                  _optionDatepicker: function(e, t, i) {
                    var n = this._getInst(e);
                    if (2 == arguments.length && "string" == typeof t) return "defaults" == t ? $.extend({}, $.datepicker._defaults) : n ? "all" == t ? $.extend({}, n.settings) : this._get(n, t) : null;
                    var s = t || {};
                    if ("string" == typeof t && (s = {}, s[t] = i), n) {
                      this._curInst == n && this._hideDatepicker();
                      var o = this._getDateDatepicker(e, !0),
                      a = this._getMinMaxDate(n, "min"),
                      r = this._getMinMaxDate(n, "max");
                      extendRemove(n.settings, s), null !== a && s.dateFormat !== undefined && s.minDate === undefined && (n.settings.minDate = this._formatDate(n, a)), null !== r && s.dateFormat !== undefined && s.maxDate === undefined && (n.settings.maxDate = this._formatDate(n, r)), this._attachments($(e), n), this._autoSize(n), this._setDate(n, o), this._updateAlternate(n), this._updateDatepicker(n)
                    }
                  },
                  _changeDatepicker: function(e, t, i) {
                    this._optionDatepicker(e, t, i)
                  },
                  _refreshDatepicker: function(e) {
                    var t = this._getInst(e);
                    t && this._updateDatepicker(t)
                  },
                  _setDateDatepicker: function(e, t) {
                    var i = this._getInst(e);
                    i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
                  },
                  _getDateDatepicker: function(e, t) {
                    var i = this._getInst(e);
                    return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
                  },
                  _doKeyDown: function(e) {
                    var t = $.datepicker._getInst(e.target),
                    i = !0,
                    n = t.dpDiv.is(".ui-datepicker-rtl");
                    if (t._keyEvent = !0, $.datepicker._datepickerShowing) switch (e.keyCode) {
                      case 9:
                      $.datepicker._hideDatepicker(), i = !1;
                      break;
                      case 13:
                      var s = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", t.dpDiv);
                      s[0] && $.datepicker._selectDay(e.target, t.selectedMonth, t.selectedYear, s[0]);
                      var o = $.datepicker._get(t, "onSelect");
                      if (o) {
                        var a = $.datepicker._formatDate(t);
                        o.apply(t.input ? t.input[0] : null, [a, t])
                      } else $.datepicker._hideDatepicker();
                      return !1;
                      case 27:
                      $.datepicker._hideDatepicker();
                      break;
                      case 33:
                      $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
                      break;
                      case 34:
                      $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
                      break;
                      case 35:
                      (e.ctrlKey || e.metaKey) && $.datepicker._clearDate(e.target), i = e.ctrlKey || e.metaKey;
                      break;
                      case 36:
                      (e.ctrlKey || e.metaKey) && $.datepicker._gotoToday(e.target), i = e.ctrlKey || e.metaKey;
                      break;
                      case 37:
                      (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, n ? 1 : -1, "D"), i = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
                      break;
                      case 38:
                      (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, -7, "D"), i = e.ctrlKey || e.metaKey;
                      break;
                      case 39:
                      (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, n ? -1 : 1, "D"), i = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
                      break;
                      case 40:
                      (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, 7, "D"), i = e.ctrlKey || e.metaKey;
                      break;
                      default:
                      i = !1
                    } else 36 == e.keyCode && e.ctrlKey ? $.datepicker._showDatepicker(this) : i = !1;
                    i && (e.preventDefault(), e.stopPropagation())
                  },
                  _doKeyPress: function(e) {
                    var t = $.datepicker._getInst(e.target);
                    if ($.datepicker._get(t, "constrainInput")) {
                      var i = $.datepicker._possibleChars($.datepicker._get(t, "dateFormat")),
                      n = String.fromCharCode(e.charCode == undefined ? e.keyCode : e.charCode);
                      return e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1
                    }
                  },
                  _doKeyUp: function(e) {
                    var t = $.datepicker._getInst(e.target);
                    if (t.input.val() != t.lastVal) try {
                      var i = $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), t.input ? t.input.val() : null, $.datepicker._getFormatConfig(t));
                      i && ($.datepicker._setDateFromField(t), $.datepicker._updateAlternate(t), $.datepicker._updateDatepicker(t))
                    } catch (n) {
                      $.datepicker.log(n)
                    }
                    return !0
                  },
                  _showDatepicker: function(e) {
                    if (e = e.target || e, "input" != e.nodeName.toLowerCase() && (e = $("input", e.parentNode)[0]), !$.datepicker._isDisabledDatepicker(e) && $.datepicker._lastInput != e) {
                      var t = $.datepicker._getInst(e);
                      $.datepicker._curInst && $.datepicker._curInst != t && ($.datepicker._curInst.dpDiv.stop(!0, !0), t && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
                      var i = $.datepicker._get(t, "beforeShow"),
                      n = i ? i.apply(e, [e, t]) : {};
                      if (n !== !1) {
                        extendRemove(t.settings, n), t.lastVal = null, $.datepicker._lastInput = e, $.datepicker._setDateFromField(t), $.datepicker._inDialog && (e.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(e), $.datepicker._pos[1] += e.offsetHeight);
                        var s = !1;
                        $(e).parents().each(function() {
                          return s |= "fixed" == $(this).css("position"), !s
                        });
                        var o = {
                          left: $.datepicker._pos[0],
                          top: $.datepicker._pos[1]
                        };
                        if ($.datepicker._pos = null, t.dpDiv.empty(), t.dpDiv.css({
                          position: "absolute",
                          display: "block",
                          top: "-1000px"
                        }), $.datepicker._updateDatepicker(t), o = $.datepicker._checkOffset(t, o, s), t.dpDiv.css({
                          position: $.datepicker._inDialog && $.blockUI ? "static" : s ? "fixed" : "absolute",
                          display: "none",
                          left: o.left + "px",
                          top: o.top + "px"
                        }), !t.inline) {
                          var a = $.datepicker._get(t, "showAnim"),
                          r = $.datepicker._get(t, "duration"),
                          l = function() {
                            var e = t.dpDiv.find("iframe.ui-datepicker-cover");
                            if (e.length) {
                              var i = $.datepicker._getBorders(t.dpDiv);
                              e.css({
                                left: -i[0],
                                top: -i[1],
                                width: t.dpDiv.outerWidth(),
                                height: t.dpDiv.outerHeight()
                              })
                            }
                          };
                          t.dpDiv.zIndex($(e).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && ($.effects.effect[a] || $.effects[a]) ? t.dpDiv.show(a, $.datepicker._get(t, "showOptions"), r, l) : t.dpDiv[a || "show"](a ? r : null, l), a && r || l(), t.input.is(":visible") && !t.input.is(":disabled") && t.input.focus(), $.datepicker._curInst = t
                        }
                      }
                    }
                  },
                  _updateDatepicker: function(e) {
                    this.maxRows = 4;
                    var t = $.datepicker._getBorders(e.dpDiv);
                    instActive = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
                    var i = e.dpDiv.find("iframe.ui-datepicker-cover");
                    i.length && i.css({
                      left: -t[0],
                      top: -t[1],
                      width: e.dpDiv.outerWidth(),
                      height: e.dpDiv.outerHeight()
                    }), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
                    var n = this._getNumberOfMonths(e),
                    s = n[1],
                    o = 17;
                    if (e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", o * s + "em"), e.dpDiv[(1 != n[0] || 1 != n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e == $.datepicker._curInst && $.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input[0] != document.activeElement && e.input.focus(), e.yearshtml) {
                      var a = e.yearshtml;
                      setTimeout(function() {
                        a === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), a = e.yearshtml = null
                      }, 0)
                    }
                  },
                  _getBorders: function(e) {
                    var t = function(e) {
                      return {
                        thin: 1,
                        medium: 2,
                        thick: 3
                      }[e] || e
                    };
                    return [parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width")))]
                  },
                  _checkOffset: function(e, t, i) {
                    var n = e.dpDiv.outerWidth(),
                    s = e.dpDiv.outerHeight(),
                    o = e.input ? e.input.outerWidth() : 0,
                    a = e.input ? e.input.outerHeight() : 0,
                    r = document.documentElement.clientWidth + (i ? 0 : $(document).scrollLeft()),
                    l = document.documentElement.clientHeight + (i ? 0 : $(document).scrollTop());
                    return t.left -= this._get(e, "isRTL") ? n - o : 0, t.left -= i && t.left == e.input.offset().left ? $(document).scrollLeft() : 0, t.top -= i && t.top == e.input.offset().top + a ? $(document).scrollTop() : 0, t.left -= Math.min(t.left, t.left + n > r && r > n ? Math.abs(t.left + n - r) : 0), t.top -= Math.min(t.top, t.top + s > l && l > s ? Math.abs(s + a) : 0), t
                  },
                  _findPos: function(e) {
                    for (var t = this._getInst(e), i = this._get(t, "isRTL"); e && ("hidden" == e.type || 1 != e.nodeType || $.expr.filters.hidden(e));) e = e[i ? "previousSibling" : "nextSibling"];
                    var n = $(e).offset();
                    return [n.left, n.top]
                  },
                  _hideDatepicker: function(e) {
                    var t = this._curInst;
                    if (t && (!e || t == $.data(e, PROP_NAME)) && this._datepickerShowing) {
                      var i = this._get(t, "showAnim"),
                      n = this._get(t, "duration"),
                      s = function() {
                        $.datepicker._tidyDialog(t)
                      };
                      $.effects && ($.effects.effect[i] || $.effects[i]) ? t.dpDiv.hide(i, $.datepicker._get(t, "showOptions"), n, s) : t.dpDiv["slideDown" == i ? "slideUp" : "fadeIn" == i ? "fadeOut" : "hide"](i ? n : null, s), i || s(), this._datepickerShowing = !1;
                      var o = this._get(t, "onClose");
                      o && o.apply(t.input ? t.input[0] : null, [t.input ? t.input.val() : "", t]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                      }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
                    }
                  },
                  _tidyDialog: function(e) {
                    e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
                  },
                  _checkExternalClick: function(e) {
                    if ($.datepicker._curInst) {
                      var t = $(e.target),
                      i = $.datepicker._getInst(t[0]);
                      (t[0].id != $.datepicker._mainDivId && 0 == t.parents("#" + $.datepicker._mainDivId).length && !t.hasClass($.datepicker.markerClassName) && !t.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || t.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != i) && $.datepicker._hideDatepicker()
                    }
                  },
                  _adjustDate: function(e, t, i) {
                    var n = $(e),
                    s = this._getInst(n[0]);
                    this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(s, t + ("M" == i ? this._get(s, "showCurrentAtPos") : 0), i), this._updateDatepicker(s))
                  },
                  _gotoToday: function(e) {
                    var t = $(e),
                    i = this._getInst(t[0]);
                    if (this._get(i, "gotoCurrent") && i.currentDay) i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear;
                    else {
                      var n = new Date;
                      i.selectedDay = n.getDate(), i.drawMonth = i.selectedMonth = n.getMonth(), i.drawYear = i.selectedYear = n.getFullYear()
                    }
                    this._notifyChange(i), this._adjustDate(t)
                  },
                  _selectMonthYear: function(e, t, i) {
                    var n = $(e),
                    s = this._getInst(n[0]);
                    s["selected" + ("M" == i ? "Month" : "Year")] = s["draw" + ("M" == i ? "Month" : "Year")] = parseInt(t.options[t.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(n)
                  },
                  _selectDay: function(e, t, i, n) {
                    var s = $(e);
                    if (!$(n).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(s[0])) {
                      var o = this._getInst(s[0]);
                      o.selectedDay = o.currentDay = $("a", n).html(), o.selectedMonth = o.currentMonth = t, o.selectedYear = o.currentYear = i, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear))
                    }
                  },
                  _clearDate: function(e) {
                    {
                      var t = $(e);
                      this._getInst(t[0])
                    }
                    this._selectDate(t, "")
                  },
                  _selectDate: function(e, t) {
                    var i = $(e),
                    n = this._getInst(i[0]);
                    t = null != t ? t : this._formatDate(n), n.input && n.input.val(t), this._updateAlternate(n);
                    var s = this._get(n, "onSelect");
                    s ? s.apply(n.input ? n.input[0] : null, [t, n]) : n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.focus(), this._lastInput = null)
                  },
                  _updateAlternate: function(e) {
                    var t = this._get(e, "altField");
                    if (t) {
                      var i = this._get(e, "altFormat") || this._get(e, "dateFormat"),
                      n = this._getDate(e),
                      s = this.formatDate(i, n, this._getFormatConfig(e));
                      $(t).each(function() {
                        $(this).val(s)
                      })
                    }
                  },
                  noWeekends: function(e) {
                    var t = e.getDay();
                    return [t > 0 && 6 > t, ""]
                  },
                  iso8601Week: function(e) {
                    var t = new Date(e.getTime());
                    t.setDate(t.getDate() + 4 - (t.getDay() || 7));
                    var i = t.getTime();
                    return t.setMonth(0), t.setDate(1), Math.floor(Math.round((i - t) / 864e5) / 7) + 1
                  },
                  parseDate: function(e, t, i) {
                    if (null == e || null == t) throw "Invalid arguments";
                    if (t = "object" == typeof t ? t.toString() : t + "", "" == t) return null;
                    var n = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff;
                    n = "string" != typeof n ? n : (new Date).getFullYear() % 100 + parseInt(n, 10);
                    for (var s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, o = (i ? i.dayNames : null) || this._defaults.dayNames, a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, r = (i ? i.monthNames : null) || this._defaults.monthNames, l = -1, c = -1, u = -1, h = -1, d = !1, p = function(t) {
                      var i = y + 1 < e.length && e.charAt(y + 1) == t;
                      return i && y++, i
                    }, f = function(e) {
                      var i = p(e),
                      n = "@" == e ? 14 : "!" == e ? 20 : "y" == e && i ? 4 : "o" == e ? 3 : 2,
                      s = new RegExp("^\\d{1," + n + "}"),
                      o = t.substring(v).match(s);
                      if (!o) throw "Missing number at position " + v;
                      return v += o[0].length, parseInt(o[0], 10)
                    }, m = function(e, i, n) {
                      var s = $.map(p(e) ? n : i, function(e, t) {
                        return [
                        [t, e]
                        ]
                      }).sort(function(e, t) {
                        return -(e[1].length - t[1].length)
                      }),
                      o = -1;
                      if ($.each(s, function(e, i) {
                        var n = i[1];
                        return t.substr(v, n.length).toLowerCase() == n.toLowerCase() ? (o = i[0], v += n.length, !1) : void 0
                      }), -1 != o) return o + 1;
                      throw "Unknown name at position " + v
                    }, g = function() {
                      if (t.charAt(v) != e.charAt(y)) throw "Unexpected literal at position " + v;
                      v++
                    }, v = 0, y = 0; y < e.length; y++)
                    if (d) "'" != e.charAt(y) || p("'") ? g() : d = !1;
                    else switch (e.charAt(y)) {
                      case "d":
                      u = f("d");
                      break;
                      case "D":
                      m("D", s, o);
                      break;
                      case "o":
                      h = f("o");
                      break;
                      case "m":
                      c = f("m");
                      break;
                      case "M":
                      c = m("M", a, r);
                      break;
                      case "y":
                      l = f("y");
                      break;
                      case "@":
                      var b = new Date(f("@"));
                      l = b.getFullYear(), c = b.getMonth() + 1, u = b.getDate();
                      break;
                      case "!":
                      var b = new Date((f("!") - this._ticksTo1970) / 1e4);
                      l = b.getFullYear(), c = b.getMonth() + 1, u = b.getDate();
                      break;
                      case "'":
                      p("'") ? g() : d = !0;
                      break;
                      default:
                      g()
                    }
                    if (v < t.length) {
                      var w = t.substr(v);
                      if (!/^\s+/.test(w)) throw "Extra/unparsed characters found in date: " + w
                    }
                    if (-1 == l ? l = (new Date).getFullYear() : 100 > l && (l += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (n >= l ? 0 : -100)), h > -1)
                    for (c = 1, u = h;;) {
                      var _ = this._getDaysInMonth(l, c - 1);
                      if (_ >= u) break;
                      c++, u -= _
                    }
                    var b = this._daylightSavingAdjust(new Date(l, c - 1, u));
                    if (b.getFullYear() != l || b.getMonth() + 1 != c || b.getDate() != u) throw "Invalid date";
                    return b
                  },
                  ATOM: "yy-mm-dd",
                  COOKIE: "D, dd M yy",
                  ISO_8601: "yy-mm-dd",
                  RFC_822: "D, d M y",
                  RFC_850: "DD, dd-M-y",
                  RFC_1036: "D, d M y",
                  RFC_1123: "D, d M yy",
                  RFC_2822: "D, d M yy",
                  RSS: "D, d M y",
                  TICKS: "!",
                  TIMESTAMP: "@",
                  W3C: "yy-mm-dd",
                  _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
                  formatDate: function(e, t, i) {
                    if (!t) return "";
                    var n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    s = (i ? i.dayNames : null) || this._defaults.dayNames,
                    o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    a = (i ? i.monthNames : null) || this._defaults.monthNames,
                    r = function(t) {
                      var i = d + 1 < e.length && e.charAt(d + 1) == t;
                      return i && d++, i
                    },
                    l = function(e, t, i) {
                      var n = "" + t;
                      if (r(e))
                      for (; n.length < i;) n = "0" + n;
                      return n
                    },
                    c = function(e, t, i, n) {
                      return r(e) ? n[t] : i[t]
                    },
                    u = "",
                    h = !1;
                    if (t)
                    for (var d = 0; d < e.length; d++)
                    if (h) "'" != e.charAt(d) || r("'") ? u += e.charAt(d) : h = !1;
                    else switch (e.charAt(d)) {
                      case "d":
                      u += l("d", t.getDate(), 2);
                      break;
                      case "D":
                      u += c("D", t.getDay(), n, s);
                      break;
                      case "o":
                      u += l("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                      break;
                      case "m":
                      u += l("m", t.getMonth() + 1, 2);
                      break;
                      case "M":
                      u += c("M", t.getMonth(), o, a);
                      break;
                      case "y":
                      u += r("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                      break;
                      case "@":
                      u += t.getTime();
                      break;
                      case "!":
                      u += 1e4 * t.getTime() + this._ticksTo1970;
                      break;
                      case "'":
                      r("'") ? u += "'" : h = !0;
                      break;
                      default:
                      u += e.charAt(d)
                    }
                    return u
                  },
                  _possibleChars: function(e) {
                    for (var t = "", i = !1, n = function(t) {
                      var i = s + 1 < e.length && e.charAt(s + 1) == t;
                      return i && s++, i
                    }, s = 0; s < e.length; s++)
                    if (i) "'" != e.charAt(s) || n("'") ? t += e.charAt(s) : i = !1;
                    else switch (e.charAt(s)) {
                      case "d":
                      case "m":
                      case "y":
                      case "@":
                      t += "0123456789";
                      break;
                      case "D":
                      case "M":
                      return null;
                      case "'":
                      n("'") ? t += "'" : i = !0;
                      break;
                      default:
                      t += e.charAt(s)
                    }
                    return t
                  },
                  _get: function(e, t) {
                    return e.settings[t] !== undefined ? e.settings[t] : this._defaults[t]
                  },
                  _setDateFromField: function(e, t) {
                    if (e.input.val() != e.lastVal) {
                      var i, n, s = this._get(e, "dateFormat"),
                      o = e.lastVal = e.input ? e.input.val() : null;
                      i = n = this._getDefaultDate(e);
                      var a = this._getFormatConfig(e);
                      try {
                        i = this.parseDate(s, o, a) || n
                      } catch (r) {
                        this.log(r), o = t ? "" : o
                      }
                      e.selectedDay = i.getDate(), e.drawMonth = e.selectedMonth = i.getMonth(), e.drawYear = e.selectedYear = i.getFullYear(), e.currentDay = o ? i.getDate() : 0, e.currentMonth = o ? i.getMonth() : 0, e.currentYear = o ? i.getFullYear() : 0, this._adjustInstDate(e)
                    }
                  },
                  _getDefaultDate: function(e) {
                    return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
                  },
                  _determineDate: function(e, t, i) {
                    var n = function(e) {
                      var t = new Date;
                      return t.setDate(t.getDate() + e), t
                    },
                    s = function(t) {
                      try {
                        return $.datepicker.parseDate($.datepicker._get(e, "dateFormat"), t, $.datepicker._getFormatConfig(e))
                      } catch (i) {}
                      for (var n = (t.toLowerCase().match(/^c/) ? $.datepicker._getDate(e) : null) || new Date, s = n.getFullYear(), o = n.getMonth(), a = n.getDate(), r = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = r.exec(t); l;) {
                        switch (l[2] || "d") {
                          case "d":
                          case "D":
                          a += parseInt(l[1], 10);
                          break;
                          case "w":
                          case "W":
                          a += 7 * parseInt(l[1], 10);
                          break;
                          case "m":
                          case "M":
                          o += parseInt(l[1], 10), a = Math.min(a, $.datepicker._getDaysInMonth(s, o));
                          break;
                          case "y":
                          case "Y":
                          s += parseInt(l[1], 10), a = Math.min(a, $.datepicker._getDaysInMonth(s, o))
                        }
                        l = r.exec(t)
                      }
                      return new Date(s, o, a)
                    },
                    o = null == t || "" === t ? i : "string" == typeof t ? s(t) : "number" == typeof t ? isNaN(t) ? i : n(t) : new Date(t.getTime());
                    return o = o && "Invalid Date" == o.toString() ? i : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
                  },
                  _daylightSavingAdjust: function(e) {
                    return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
                  },
                  _setDate: function(e, t, i) {
                    var n = !t,
                    s = e.selectedMonth,
                    o = e.selectedYear,
                    a = this._restrictMinMax(e, this._determineDate(e, t, new Date));
                    e.selectedDay = e.currentDay = a.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = a.getMonth(), e.drawYear = e.selectedYear = e.currentYear = a.getFullYear(), s == e.selectedMonth && o == e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(n ? "" : this._formatDate(e))
                  },
                  _getDate: function(e) {
                    var t = !e.currentYear || e.input && "" == e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
                    return t
                  },
                  _attachHandlers: function(e) {
                    var t = this._get(e, "stepMonths"),
                    i = "#" + e.id.replace(/\\\\/g, "\\");
                    e.dpDiv.find("[data-handler]").map(function() {
                      var e = {
                        prev: function() {
                          window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, -t, "M")
                        },
                        next: function() {
                          window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, +t, "M")
                        },
                        hide: function() {
                          window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
                        },
                        today: function() {
                          window["DP_jQuery_" + dpuuid].datepicker._gotoToday(i)
                        },
                        selectDay: function() {
                          return window["DP_jQuery_" + dpuuid].datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function() {
                          return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "M"), !1
                        },
                        selectYear: function() {
                          return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "Y"), !1
                        }
                      };
                      $(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
                    })
                  },
                  _generateHTML: function(e) {
                    var t = new Date;
                    t = this._daylightSavingAdjust(new Date(t.getFullYear(), t.getMonth(), t.getDate()));
                    var i = this._get(e, "isRTL"),
                    n = this._get(e, "showButtonPanel"),
                    s = this._get(e, "hideIfNoPrevNext"),
                    o = this._get(e, "navigationAsDateFormat"),
                    a = this._getNumberOfMonths(e),
                    r = this._get(e, "showCurrentAtPos"),
                    l = this._get(e, "stepMonths"),
                    c = 1 != a[0] || 1 != a[1],
                    u = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                    h = this._getMinMaxDate(e, "min"),
                    d = this._getMinMaxDate(e, "max"),
                    p = e.drawMonth - r,
                    f = e.drawYear;
                    if (0 > p && (p += 12, f--), d) {
                      var m = this._daylightSavingAdjust(new Date(d.getFullYear(), d.getMonth() - a[0] * a[1] + 1, d.getDate()));
                      for (m = h && h > m ? h : m; this._daylightSavingAdjust(new Date(f, p, 1)) > m;) p--, 0 > p && (p = 11, f--)
                    }
                    e.drawMonth = p, e.drawYear = f;
                    var g = this._get(e, "prevText");
                    g = o ? this.formatDate(g, this._daylightSavingAdjust(new Date(f, p - l, 1)), this._getFormatConfig(e)) : g;
                    var v = this._canAdjustMonth(e, -1, f, p) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + g + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + g + "</span></a>" : s ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + g + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + g + "</span></a>",
                    y = this._get(e, "nextText");
                    y = o ? this.formatDate(y, this._daylightSavingAdjust(new Date(f, p + l, 1)), this._getFormatConfig(e)) : y;
                    var b = this._canAdjustMonth(e, 1, f, p) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + y + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + y + "</span></a>" : s ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + y + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + y + "</span></a>",
                    w = this._get(e, "currentText"),
                    _ = this._get(e, "gotoCurrent") && e.currentDay ? u : t;
                    w = o ? this.formatDate(w, _, this._getFormatConfig(e)) : w;
                    var x = e.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(e, "closeText") + "</button>",
                    k = n ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (i ? x : "") + (this._isInRange(e, _) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + w + "</button>" : "") + (i ? "" : x) + "</div>" : "",
                    C = parseInt(this._get(e, "firstDay"), 10);
                    C = isNaN(C) ? 0 : C;
                    for (var T = this._get(e, "showWeek"), D = this._get(e, "dayNames"), S = (this._get(e, "dayNamesShort"), this._get(e, "dayNamesMin")), E = this._get(e, "monthNames"), P = this._get(e, "monthNamesShort"), M = this._get(e, "beforeShowDay"), I = this._get(e, "showOtherMonths"), A = this._get(e, "selectOtherMonths"), N = (this._get(e, "calculateWeek") || this.iso8601Week, this._getDefaultDate(e)), j = "", H = 0; H < a[0]; H++) {
                      var z = "";
                      this.maxRows = 4;
                      for (var O = 0; O < a[1]; O++) {
                        var L = this._daylightSavingAdjust(new Date(f, p, e.selectedDay)),
                        W = " ui-corner-all",
                        F = "";
                        if (c) {
                          if (F += '<div class="ui-datepicker-group', a[1] > 1) switch (O) {
                            case 0:
                            F += " ui-datepicker-group-first", W = " ui-corner-" + (i ? "right" : "left");
                            break;
                            case a[1] - 1:
                            F += " ui-datepicker-group-last", W = " ui-corner-" + (i ? "left" : "right");
                            break;
                            default:
                            F += " ui-datepicker-group-middle", W = ""
                          }
                          F += '">'
                        }
                        F += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + W + '">' + (/all|left/.test(W) && 0 == H ? i ? b : v : "") + (/all|right/.test(W) && 0 == H ? i ? v : b : "") + this._generateMonthYearHeader(e, p, f, h, d, H > 0 || O > 0, E, P) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                          for (var R = T ? '<th class="ui-datepicker-week-col">' + this._get(e, "weekHeader") + "</th>" : "", B = 0; 7 > B; B++) {
                            var Y = (B + C) % 7;
                            R += "<th" + ((B + C + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + D[Y] + '">' + S[Y] + "</span></th>"
                          }
                          F += R + "</tr></thead><tbody>";
                            var q = this._getDaysInMonth(f, p);
                            f == e.selectedYear && p == e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, q));
                            var U = (this._getFirstDayOfMonth(f, p) - C + 7) % 7,
                            X = Math.ceil((U + q) / 7),
                            Q = c && this.maxRows > X ? this.maxRows : X;
                            this.maxRows = Q;
                            for (var V = this._daylightSavingAdjust(new Date(f, p, 1 - U)), K = 0; Q > K; K++) {
                              F += "<tr>";
                                for (var G = T ? '<td class="ui-datepicker-week-col">' + this._get(e, "calculateWeek")(V) + "</td>" : "", B = 0; 7 > B; B++) {
                                  var J = M ? M.apply(e.input ? e.input[0] : null, [V]) : [!0, ""],
                                  Z = V.getMonth() != p,
                                  et = Z && !A || !J[0] || h && h > V || d && V > d;
                                  G += '<td class="' + ((B + C + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (Z ? " ui-datepicker-other-month" : "") + (V.getTime() == L.getTime() && p == e.selectedMonth && e._keyEvent || N.getTime() == V.getTime() && N.getTime() == L.getTime() ? " " + this._dayOverClass : "") + (et ? " " + this._unselectableClass + " ui-state-disabled" : "") + (Z && !I ? "" : " " + J[1] + (V.getTime() == u.getTime() ? " " + this._currentClass : "") + (V.getTime() == t.getTime() ? " ui-datepicker-today" : "")) + '"' + (Z && !I || !J[2] ? "" : ' title="' + J[2] + '"') + (et ? "" : ' data-handler="selectDay" data-event="click" data-month="' + V.getMonth() + '" data-year="' + V.getFullYear() + '"') + ">" + (Z && !I ? "&#xa0;" : et ? '<span class="ui-state-default">' + V.getDate() + "</span>" : '<a class="ui-state-default' + (V.getTime() == t.getTime() ? " ui-state-highlight" : "") + (V.getTime() == u.getTime() ? " ui-state-active" : "") + (Z ? " ui-priority-secondary" : "") + '" href="#">' + V.getDate() + "</a>") + "</td>", V.setDate(V.getDate() + 1), V = this._daylightSavingAdjust(V)
                                }
                                F += G + "</tr>"
                              }
                              p++, p > 11 && (p = 0, f++), F += "</tbody></table>" + (c ? "</div>" + (a[0] > 0 && O == a[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), z += F
                            }
                            j += z
                          }
                          return j += k + ($.ui.ie6 && !e.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), e._keyEvent = !1, j
                        },
                        _generateMonthYearHeader: function(e, t, i, n, s, o, a, r) {
                          var l = this._get(e, "changeMonth"),
                          c = this._get(e, "changeYear"),
                          u = this._get(e, "showMonthAfterYear"),
                          h = '<div class="ui-datepicker-title">',
                            d = "";
                            if (o || !l) d += '<span class="ui-datepicker-month">' + a[t] + "</span>";
                            else {
                              var p = n && n.getFullYear() == i,
                              f = s && s.getFullYear() == i;
                              d += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
                                for (var m = 0; 12 > m; m++)(!p || m >= n.getMonth()) && (!f || m <= s.getMonth()) && (d += '<option value="' + m + '"' + (m == t ? ' selected="selected"' : "") + ">" + r[m] + "</option>");
                                d += "</select>"
                              }
                              if (u || (h += d + (!o && l && c ? "" : "&#xa0;")), !e.yearshtml)
                              if (e.yearshtml = "", o || !c) h += '<span class="ui-datepicker-year">' + i + "</span>";
                              else {
                                var g = this._get(e, "yearRange").split(":"),
                                v = (new Date).getFullYear(),
                                y = function(e) {
                                  var t = e.match(/c[+-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+-].*/) ? v + parseInt(e, 10) : parseInt(e, 10);
                                  return isNaN(t) ? v : t
                                },
                                b = y(g[0]),
                                w = Math.max(b, y(g[1] || ""));
                                for (b = n ? Math.max(b, n.getFullYear()) : b, w = s ? Math.min(w, s.getFullYear()) : w, e.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">'; w >= b; b++) e.yearshtml += '<option value="' + b + '"' + (b == i ? ' selected="selected"' : "") + ">" + b + "</option>";
                                  e.yearshtml += "</select>", h += e.yearshtml, e.yearshtml = null
                                }
                                return h += this._get(e, "yearSuffix"), u && (h += (!o && l && c ? "" : "&#xa0;") + d), h += "</div>"
                              },
                              _adjustInstDate: function(e, t, i) {
                                var n = e.drawYear + ("Y" == i ? t : 0),
                                s = e.drawMonth + ("M" == i ? t : 0),
                                o = Math.min(e.selectedDay, this._getDaysInMonth(n, s)) + ("D" == i ? t : 0),
                                a = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(n, s, o)));
                                e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), ("M" == i || "Y" == i) && this._notifyChange(e)
                              },
                              _restrictMinMax: function(e, t) {
                                var i = this._getMinMaxDate(e, "min"),
                                n = this._getMinMaxDate(e, "max"),
                                s = i && i > t ? i : t;
                                return s = n && s > n ? n : s
                              },
                              _notifyChange: function(e) {
                                var t = this._get(e, "onChangeMonthYear");
                                t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
                              },
                              _getNumberOfMonths: function(e) {
                                var t = this._get(e, "numberOfMonths");
                                return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
                              },
                              _getMinMaxDate: function(e, t) {
                                return this._determineDate(e, this._get(e, t + "Date"), null)
                              },
                              _getDaysInMonth: function(e, t) {
                                return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
                              },
                              _getFirstDayOfMonth: function(e, t) {
                                return new Date(e, t, 1).getDay()
                              },
                              _canAdjustMonth: function(e, t, i, n) {
                                var s = this._getNumberOfMonths(e),
                                o = this._daylightSavingAdjust(new Date(i, n + (0 > t ? t : s[0] * s[1]), 1));
                                return 0 > t && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(e, o)
                              },
                              _isInRange: function(e, t) {
                                var i = this._getMinMaxDate(e, "min"),
                                n = this._getMinMaxDate(e, "max");
                                return (!i || t.getTime() >= i.getTime()) && (!n || t.getTime() <= n.getTime())
                              },
                              _getFormatConfig: function(e) {
                                var t = this._get(e, "shortYearCutoff");
                                return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                                  shortYearCutoff: t,
                                  dayNamesShort: this._get(e, "dayNamesShort"),
                                  dayNames: this._get(e, "dayNames"),
                                  monthNamesShort: this._get(e, "monthNamesShort"),
                                  monthNames: this._get(e, "monthNames")
                                }
                              },
                              _formatDate: function(e, t, i, n) {
                                t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
                                var s = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(n, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
                                return this.formatDate(this._get(e, "dateFormat"), s, this._getFormatConfig(e))
                              }
                            }), $.fn.datepicker = function(e) {
                              if (!this.length) return this;
                              $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv), $.datepicker.initialized = !0);
                              var t = Array.prototype.slice.call(arguments, 1);
                              return "string" != typeof e || "isDisabled" != e && "getDate" != e && "widget" != e ? "option" == e && 2 == arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t)) : this.each(function() {
                                "string" == typeof e ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this].concat(t)) : $.datepicker._attachDatepicker(this, e)
                              }) : $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t))
                            }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.9.2", window["DP_jQuery_" + dpuuid] = $
                          }(jQuery),
                          function(e, t) {
                            var i = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
                            n = {
                              buttons: !0,
                              height: !0,
                              maxHeight: !0,
                              maxWidth: !0,
                              minHeight: !0,
                              minWidth: !0,
                              width: !0
                            },
                            s = {
                              maxHeight: !0,
                              maxWidth: !0,
                              minHeight: !0,
                              minWidth: !0
                            };
                            e.widget("ui.dialog", {
                              version: "1.9.2",
                              options: {
                                autoOpen: !0,
                                buttons: {},
                                closeOnEscape: !0,
                                closeText: "close",
                                dialogClass: "",
                                draggable: !0,
                                hide: null,
                                height: "auto",
                                maxHeight: !1,
                                maxWidth: !1,
                                minHeight: 150,
                                minWidth: 150,
                                modal: !1,
                                position: {
                                  my: "center",
                                  at: "center",
                                  of: window,
                                  collision: "fit",
                                  using: function(t) {
                                    var i = e(this).css(t).offset().top;
                                    0 > i && e(this).css("top", t.top - i)
                                  }
                                },
                                resizable: !0,
                                show: null,
                                stack: !0,
                                title: "",
                                width: 300,
                                zIndex: 1e3
                              },
                              _create: function() {
                                this.originalTitle = this.element.attr("title"), "string" != typeof this.originalTitle && (this.originalTitle = ""), this.oldPosition = {
                                  parent: this.element.parent(),
                                  index: this.element.parent().children().index(this.element)
                                }, this.options.title = this.options.title || this.originalTitle;
                                var t, n, s, o, a, r = this,
                                l = this.options,
                                c = l.title || "&#160;";
                                t = (this.uiDialog = e("<div>")).addClass(i + l.dialogClass).css({
                                  display: "none",
                                  outline: 0,
                                  zIndex: l.zIndex
                                }).attr("tabIndex", -1).keydown(function(t) {
                                  l.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE && (r.close(t), t.preventDefault())
                                }).mousedown(function(e) {
                                  r.moveToTop(!1, e)
                                }).appendTo("body"), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(t), n = (this.uiDialogTitlebar = e("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown", function() {
                                  t.focus()
                                }).prependTo(t), s = e("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role", "button").click(function(e) {
                                  e.preventDefault(), r.close(e)
                                }).appendTo(n), (this.uiDialogTitlebarCloseText = e("<span>")).addClass("ui-icon ui-icon-closethick").text(l.closeText).appendTo(s), o = e("<span>").uniqueId().addClass("ui-dialog-title").html(c).prependTo(n), a = (this.uiDialogButtonPane = e("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), (this.uiButtonSet = e("<div>")).addClass("ui-dialog-buttonset").appendTo(a), t.attr({
                                  role: "dialog",
                                  "aria-labelledby": o.attr("id")
                                }), n.find("*").add(n).disableSelection(), this._hoverable(s), this._focusable(s), l.draggable && e.fn.draggable && this._makeDraggable(), l.resizable && e.fn.resizable && this._makeResizable(), this._createButtons(l.buttons), this._isOpen = !1, e.fn.bgiframe && t.bgiframe(), this._on(t, {
                                  keydown: function(i) {
                                    if (l.modal && i.keyCode === e.ui.keyCode.TAB) {
                                      var n = e(":tabbable", t),
                                      s = n.filter(":first"),
                                      o = n.filter(":last");
                                      return i.target !== o[0] || i.shiftKey ? i.target === s[0] && i.shiftKey ? (o.focus(1), !1) : void 0 : (s.focus(1), !1)
                                    }
                                  }
                                })
                              },
                              _init: function() {
                                this.options.autoOpen && this.open()
                              },
                              _destroy: function() {
                                var e, t = this.oldPosition;
                                this.overlay && this.overlay.destroy(), this.uiDialog.hide(), this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
                              },
                              widget: function() {
                                return this.uiDialog
                              },
                              close: function(t) {
                                var i, n, s = this;
                                if (this._isOpen && !1 !== this._trigger("beforeClose", t)) return this._isOpen = !1, this.overlay && this.overlay.destroy(), this.options.hide ? this._hide(this.uiDialog, this.options.hide, function() {
                                  s._trigger("close", t)
                                }) : (this.uiDialog.hide(), this._trigger("close", t)), e.ui.dialog.overlay.resize(), this.options.modal && (i = 0, e(".ui-dialog").each(function() {
                                  this !== s.uiDialog[0] && (n = e(this).css("z-index"), isNaN(n) || (i = Math.max(i, n)))
                                }), e.ui.dialog.maxZ = i), this
                              },
                              isOpen: function() {
                                return this._isOpen
                              },
                              moveToTop: function(t, i) {
                                var n, s = this.options;
                                return s.modal && !t || !s.stack && !s.modal ? this._trigger("focus", i) : (s.zIndex > e.ui.dialog.maxZ && (e.ui.dialog.maxZ = s.zIndex), this.overlay && (e.ui.dialog.maxZ += 1, e.ui.dialog.overlay.maxZ = e.ui.dialog.maxZ, this.overlay.$el.css("z-index", e.ui.dialog.overlay.maxZ)), n = {
                                  scrollTop: this.element.scrollTop(),
                                  scrollLeft: this.element.scrollLeft()
                                }, e.ui.dialog.maxZ += 1, this.uiDialog.css("z-index", e.ui.dialog.maxZ), this.element.attr(n), this._trigger("focus", i), this)
                              },
                              open: function() {
                                if (!this._isOpen) {
                                  var t, i = this.options,
                                  n = this.uiDialog;
                                  return this._size(), this._position(i.position), n.show(i.show), this.overlay = i.modal ? new e.ui.dialog.overlay(this) : null, this.moveToTop(!0), t = this.element.find(":tabbable"), t.length || (t = this.uiDialogButtonPane.find(":tabbable"), t.length || (t = n)), t.eq(0).focus(), this._isOpen = !0, this._trigger("open"), this
                                }
                              },
                              _createButtons: function(t) {
                                var i = this,
                                n = !1;
                                this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), "object" == typeof t && null !== t && e.each(t, function() {
                                  return !(n = !0)
                                }), n ? (e.each(t, function(t, n) {
                                  var s, o;
                                  n = e.isFunction(n) ? {
                                    click: n,
                                    text: t
                                  } : n, n = e.extend({
                                    type: "button"
                                  }, n), o = n.click, n.click = function() {
                                    o.apply(i.element[0], arguments)
                                  }, s = e("<button></button>", n).appendTo(i.uiButtonSet), e.fn.button && s.button()
                                }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)) : this.uiDialog.removeClass("ui-dialog-buttons")
                              },
                              _makeDraggable: function() {
                                function t(e) {
                                  return {
                                    position: e.position,
                                    offset: e.offset
                                  }
                                }
                                var i = this,
                                n = this.options;
                                this.uiDialog.draggable({
                                  cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                                  handle: ".ui-dialog-titlebar",
                                  containment: "document",
                                  start: function(n, s) {
                                    e(this).addClass("ui-dialog-dragging"), i._trigger("dragStart", n, t(s))
                                  },
                                  drag: function(e, n) {
                                    i._trigger("drag", e, t(n))
                                  },
                                  stop: function(s, o) {
                                    n.position = [o.position.left - i.document.scrollLeft(), o.position.top - i.document.scrollTop()], e(this).removeClass("ui-dialog-dragging"), i._trigger("dragStop", s, t(o)), e.ui.dialog.overlay.resize()
                                  }
                                })
                              },
                              _makeResizable: function(i) {
                                function n(e) {
                                  return {
                                    originalPosition: e.originalPosition,
                                    originalSize: e.originalSize,
                                    position: e.position,
                                    size: e.size
                                  }
                                }
                                i = i === t ? this.options.resizable : i;
                                var s = this,
                                o = this.options,
                                a = this.uiDialog.css("position"),
                                r = "string" == typeof i ? i : "n,e,s,w,se,sw,ne,nw";
                                this.uiDialog.resizable({
                                  cancel: ".ui-dialog-content",
                                  containment: "document",
                                  alsoResize: this.element,
                                  maxWidth: o.maxWidth,
                                  maxHeight: o.maxHeight,
                                  minWidth: o.minWidth,
                                  minHeight: this._minHeight(),
                                  handles: r,
                                  start: function(t, i) {
                                    e(this).addClass("ui-dialog-resizing"), s._trigger("resizeStart", t, n(i))
                                  },
                                  resize: function(e, t) {
                                    s._trigger("resize", e, n(t))
                                  },
                                  stop: function(t, i) {
                                    e(this).removeClass("ui-dialog-resizing"), o.height = e(this).height(), o.width = e(this).width(), s._trigger("resizeStop", t, n(i)), e.ui.dialog.overlay.resize()
                                  }
                                }).css("position", a).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
                              },
                              _minHeight: function() {
                                var e = this.options;
                                return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height)
                              },
                              _position: function(t) {
                                var i, n = [],
                                s = [0, 0];
                                t ? (("string" == typeof t || "object" == typeof t && "0" in t) && (n = t.split ? t.split(" ") : [t[0], t[1]], 1 === n.length && (n[1] = n[0]), e.each(["left", "top"], function(e, t) {
                                  +n[e] === n[e] && (s[e] = n[e], n[e] = t)
                                }), t = {
                                  my: n[0] + (s[0] < 0 ? s[0] : "+" + s[0]) + " " + n[1] + (s[1] < 0 ? s[1] : "+" + s[1]),
                                  at: n.join(" ")
                                }), t = e.extend({}, e.ui.dialog.prototype.options.position, t)) : t = e.ui.dialog.prototype.options.position, i = this.uiDialog.is(":visible"), i || this.uiDialog.show(), this.uiDialog.position(t), i || this.uiDialog.hide()
                              },
                              _setOptions: function(t) {
                                var i = this,
                                o = {},
                                a = !1;
                                e.each(t, function(e, t) {
                                  i._setOption(e, t), e in n && (a = !0), e in s && (o[e] = t)
                                }), a && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", o)
                              },
                              _setOption: function(t, n) {
                                var s, o, a = this.uiDialog;
                                switch (t) {
                                  case "buttons":
                                  this._createButtons(n);
                                  break;
                                  case "closeText":
                                  this.uiDialogTitlebarCloseText.text("" + n);
                                  break;
                                  case "dialogClass":
                                  a.removeClass(this.options.dialogClass).addClass(i + n);
                                  break;
                                  case "disabled":
                                  n ? a.addClass("ui-dialog-disabled") : a.removeClass("ui-dialog-disabled");
                                  break;
                                  case "draggable":
                                  s = a.is(":data(draggable)"), s && !n && a.draggable("destroy"), !s && n && this._makeDraggable();
                                  break;
                                  case "position":
                                  this._position(n);
                                  break;
                                  case "resizable":
                                  o = a.is(":data(resizable)"), o && !n && a.resizable("destroy"), o && "string" == typeof n && a.resizable("option", "handles", n), o || n === !1 || this._makeResizable(n);
                                  break;
                                  case "title":
                                  e(".ui-dialog-title", this.uiDialogTitlebar).html("" + (n || "&#160;"))
                                }
                                this._super(t, n)
                              },
                              _size: function() {
                                var t, i, n, s = this.options,
                                o = this.uiDialog.is(":visible");
                                this.element.show().css({
                                  width: "auto",
                                  minHeight: 0,
                                  height: 0
                                }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
                                  height: "auto",
                                  width: s.width
                                }).outerHeight(), i = Math.max(0, s.minHeight - t), "auto" === s.height ? e.support.minHeight ? this.element.css({
                                  minHeight: i,
                                  height: "auto"
                                }) : (this.uiDialog.show(), n = this.element.css("height", "auto").height(), o || this.uiDialog.hide(), this.element.height(Math.max(n, i))) : this.element.height(Math.max(s.height - t, 0)), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
                              }
                            }), e.extend(e.ui.dialog, {
                              uuid: 0,
                              maxZ: 0,
                              getTitleId: function(e) {
                                var t = e.attr("id");
                                return t || (this.uuid += 1, t = this.uuid), "ui-dialog-title-" + t
                              },
                              overlay: function(t) {
                                this.$el = e.ui.dialog.overlay.create(t)
                              }
                            }), e.extend(e.ui.dialog.overlay, {
                              instances: [],
                              oldInstances: [],
                              maxZ: 0,
                              events: e.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(e) {
                                return e + ".dialog-overlay"
                              }).join(" "),
                              create: function(t) {
                                0 === this.instances.length && (setTimeout(function() {
                                  e.ui.dialog.overlay.instances.length && e(document).bind(e.ui.dialog.overlay.events, function(t) {
                                    return e(t.target).zIndex() < e.ui.dialog.overlay.maxZ ? !1 : void 0
                                  })
                                }, 1), e(window).bind("resize.dialog-overlay", e.ui.dialog.overlay.resize));
                                var i = this.oldInstances.pop() || e("<div>").addClass("ui-widget-overlay");
                                  return e(document).bind("keydown.dialog-overlay", function(n) {
                                    var s = e.ui.dialog.overlay.instances;
                                    0 !== s.length && s[s.length - 1] === i && t.options.closeOnEscape && !n.isDefaultPrevented() && n.keyCode && n.keyCode === e.ui.keyCode.ESCAPE && (t.close(n), n.preventDefault())
                                  }), i.appendTo(document.body).css({
                                    width: this.width(),
                                    height: this.height()
                                  }), e.fn.bgiframe && i.bgiframe(), this.instances.push(i), i
                                },
                                destroy: function(t) {
                                  var i = e.inArray(t, this.instances),
                                  n = 0; - 1 !== i && this.oldInstances.push(this.instances.splice(i, 1)[0]), 0 === this.instances.length && e([document, window]).unbind(".dialog-overlay"), t.height(0).width(0).remove(), e.each(this.instances, function() {
                                    n = Math.max(n, this.css("z-index"))
                                  }), this.maxZ = n
                                },
                                height: function() {
                                  var t, i;
                                  return e.ui.ie ? (t = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), i = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), i > t ? e(window).height() + "px" : t + "px") : e(document).height() + "px"
                                },
                                width: function() {
                                  var t, i;
                                  return e.ui.ie ? (t = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), i = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), i > t ? e(window).width() + "px" : t + "px") : e(document).width() + "px"
                                },
                                resize: function() {
                                  var t = e([]);
                                  e.each(e.ui.dialog.overlay.instances, function() {
                                    t = t.add(this)
                                  }), t.css({
                                    width: 0,
                                    height: 0
                                  }).css({
                                    width: e.ui.dialog.overlay.width(),
                                    height: e.ui.dialog.overlay.height()
                                  })
                                }
                              }), e.extend(e.ui.dialog.overlay.prototype, {
                                destroy: function() {
                                  e.ui.dialog.overlay.destroy(this.$el)
                                }
                              })
                            }(jQuery),
                            function(e) {
                              e.widget("ui.draggable", e.ui.mouse, {
                                version: "1.9.2",
                                widgetEventPrefix: "drag",
                                options: {
                                  addClasses: !0,
                                  appendTo: "parent",
                                  axis: !1,
                                  connectToSortable: !1,
                                  containment: !1,
                                  cursor: "auto",
                                  cursorAt: !1,
                                  grid: !1,
                                  handle: !1,
                                  helper: "original",
                                  iframeFix: !1,
                                  opacity: !1,
                                  refreshPositions: !1,
                                  revert: !1,
                                  revertDuration: 500,
                                  scope: "default",
                                  scroll: !0,
                                  scrollSensitivity: 20,
                                  scrollSpeed: 20,
                                  snap: !1,
                                  snapMode: "both",
                                  snapTolerance: 20,
                                  stack: !1,
                                  zIndex: !1
                                },
                                _create: function() {
                                  "original" != this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
                                },
                                _destroy: function() {
                                  this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
                                },
                                _mouseCapture: function(t) {
                                  var i = this.options;
                                  return this.helper || i.disabled || e(t.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
                                    e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                                      width: this.offsetWidth + "px",
                                      height: this.offsetHeight + "px",
                                      position: "absolute",
                                      opacity: "0.001",
                                      zIndex: 1e3
                                    }).css(e(this).offset()).appendTo("body")
                                  }), !0) : !1)
                                },
                                _mouseStart: function(t) {
                                  var i = this.options;
                                  return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                                    top: this.offset.top - this.margins.top,
                                    left: this.offset.left - this.margins.left
                                  }, e.extend(this.offset, {
                                    click: {
                                      left: t.pageX - this.offset.left,
                                      top: t.pageY - this.offset.top
                                    },
                                    parent: this._getParentOffset(),
                                    relative: this._getRelativeOffset()
                                  }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), i.containment && this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
                                },
                                _mouseDrag: function(t, i) {
                                  if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                                    var n = this._uiHash();
                                    if (this._trigger("drag", t, n) === !1) return this._mouseUp({}), !1;
                                    this.position = n.position
                                  }
                                  return this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
                                },
                                _mouseStop: function(t) {
                                  var i = !1;
                                  e.ui.ddmanager && !this.options.dropBehaviour && (i = e.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1);
                                  for (var n = this.element[0], s = !1; n && (n = n.parentNode);) n == document && (s = !0);
                                  if (!s && "original" === this.options.helper) return !1;
                                  if ("invalid" == this.options.revert && !i || "valid" == this.options.revert && i || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, i)) {
                                    var o = this;
                                    e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                                      o._trigger("stop", t) !== !1 && o._clear()
                                    })
                                  } else this._trigger("stop", t) !== !1 && this._clear();
                                  return !1
                                },
                                _mouseUp: function(t) {
                                  return e("div.ui-draggable-iframeFix").each(function() {
                                    this.parentNode.removeChild(this)
                                  }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
                                },
                                cancel: function() {
                                  return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
                                },
                                _getHandle: function(t) {
                                  var i = this.options.handle && e(this.options.handle, this.element).length ? !1 : !0;
                                  return e(this.options.handle, this.element).find("*").andSelf().each(function() {
                                    this == t.target && (i = !0)
                                  }), i
                                },
                                _createHelper: function(t) {
                                  var i = this.options,
                                  n = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t])) : "clone" == i.helper ? this.element.clone().removeAttr("id") : this.element;
                                  return n.parents("body").length || n.appendTo("parent" == i.appendTo ? this.element[0].parentNode : i.appendTo), n[0] == this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
                                },
                                _adjustOffsetFromHelper: function(t) {
                                  "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                                    left: +t[0],
                                    top: +t[1] || 0
                                  }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
                                },
                                _getParentOffset: function() {
                                  this.offsetParent = this.helper.offsetParent();
                                  var t = this.offsetParent.offset();
                                  return "absolute" == this.cssPosition && this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                                    top: 0,
                                    left: 0
                                  }), {
                                    top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                                  }
                                },
                                _getRelativeOffset: function() {
                                  if ("relative" == this.cssPosition) {
                                    var e = this.element.position();
                                    return {
                                      top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                                      left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                                    }
                                  }
                                  return {
                                    top: 0,
                                    left: 0
                                  }
                                },
                                _cacheMargins: function() {
                                  this.margins = {
                                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                                  }
                                },
                                _cacheHelperProportions: function() {
                                  this.helperProportions = {
                                    width: this.helper.outerWidth(),
                                    height: this.helper.outerHeight()
                                  }
                                },
                                _setContainment: function() {
                                  var t = this.options;
                                  if ("parent" == t.containment && (t.containment = this.helper[0].parentNode), ("document" == t.containment || "window" == t.containment) && (this.containment = ["document" == t.containment ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" == t.containment ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" == t.containment ? 0 : e(window).scrollLeft()) + e("document" == t.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" == t.containment ? 0 : e(window).scrollTop()) + (e("document" == t.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(t.containment) || t.containment.constructor == Array) t.containment.constructor == Array && (this.containment = t.containment);
                                  else {
                                    var i = e(t.containment),
                                    n = i[0];
                                    if (!n) return;
                                    var s = (i.offset(), "hidden" != e(n).css("overflow"));
                                    this.containment = [(parseInt(e(n).css("borderLeftWidth"), 10) || 0) + (parseInt(e(n).css("paddingLeft"), 10) || 0), (parseInt(e(n).css("borderTopWidth"), 10) || 0) + (parseInt(e(n).css("paddingTop"), 10) || 0), (s ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(e(n).css("borderLeftWidth"), 10) || 0) - (parseInt(e(n).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (s ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(e(n).css("borderTopWidth"), 10) || 0) - (parseInt(e(n).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i
                                  }
                                },
                                _convertPositionTo: function(t, i) {
                                  i || (i = this.position);
                                  var n = "absolute" == t ? 1 : -1,
                                  s = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
                                  o = /(html|body)/i.test(s[0].tagName);
                                  return {
                                    top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
                                    left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n
                                  }
                                },
                                _generatePosition: function(t) {
                                  var i = this.options,
                                  n = "absolute" != this.cssPosition || this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                                  s = /(html|body)/i.test(n[0].tagName),
                                  o = t.pageX,
                                  a = t.pageY;
                                  if (this.originalPosition) {
                                    var r;
                                    if (this.containment) {
                                      if (this.relative_container) {
                                        var l = this.relative_container.offset();
                                        r = [this.containment[0] + l.left, this.containment[1] + l.top, this.containment[2] + l.left, this.containment[3] + l.top]
                                      } else r = this.containment;
                                      t.pageX - this.offset.click.left < r[0] && (o = r[0] + this.offset.click.left), t.pageY - this.offset.click.top < r[1] && (a = r[1] + this.offset.click.top), t.pageX - this.offset.click.left > r[2] && (o = r[2] + this.offset.click.left), t.pageY - this.offset.click.top > r[3] && (a = r[3] + this.offset.click.top)
                                    }
                                    if (i.grid) {
                                      var c = i.grid[1] ? this.originalPageY + Math.round((a - this.originalPageY) / i.grid[1]) * i.grid[1] : this.originalPageY;
                                      a = r && (c - this.offset.click.top < r[1] || c - this.offset.click.top > r[3]) ? c - this.offset.click.top < r[1] ? c + i.grid[1] : c - i.grid[1] : c;
                                      var u = i.grid[0] ? this.originalPageX + Math.round((o - this.originalPageX) / i.grid[0]) * i.grid[0] : this.originalPageX;
                                      o = r && (u - this.offset.click.left < r[0] || u - this.offset.click.left > r[2]) ? u - this.offset.click.left < r[0] ? u + i.grid[0] : u - i.grid[0] : u
                                    }
                                  }
                                  return {
                                    top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()),
                                    left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft())
                                  }
                                },
                                _clear: function() {
                                  this.helper.removeClass("ui-draggable-dragging"), this.helper[0] == this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
                                },
                                _trigger: function(t, i, n) {
                                  return n = n || this._uiHash(), e.ui.plugin.call(this, t, [i, n]), "drag" == t && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, i, n)
                                },
                                plugins: {},
                                _uiHash: function() {
                                  return {
                                    helper: this.helper,
                                    position: this.position,
                                    originalPosition: this.originalPosition,
                                    offset: this.positionAbs
                                  }
                                }
                              }), e.ui.plugin.add("draggable", "connectToSortable", {
                                start: function(t, i) {
                                  var n = e(this).data("draggable"),
                                  s = n.options,
                                  o = e.extend({}, i, {
                                    item: n.element
                                  });
                                  n.sortables = [], e(s.connectToSortable).each(function() {
                                    var i = e.data(this, "sortable");
                                    i && !i.options.disabled && (n.sortables.push({
                                      instance: i,
                                      shouldRevert: i.options.revert
                                    }), i.refreshPositions(), i._trigger("activate", t, o))
                                  })
                                },
                                stop: function(t, i) {
                                  var n = e(this).data("draggable"),
                                  s = e.extend({}, i, {
                                    item: n.element
                                  });
                                  e.each(n.sortables, function() {
                                    this.instance.isOver ? (this.instance.isOver = 0, n.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" == n.options.helper && this.instance.currentItem.css({
                                      top: "auto",
                                      left: "auto"
                                    })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, s))
                                  })
                                },
                                drag: function(t, i) {
                                  var n = e(this).data("draggable"),
                                  s = this;
                                  e.each(n.sortables, function() {
                                    var o = !1,
                                    a = this;
                                    this.instance.positionAbs = n.positionAbs, this.instance.helperProportions = n.helperProportions, this.instance.offset.click = n.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (o = !0, e.each(n.sortables, function() {
                                      return this.instance.positionAbs = n.positionAbs, this.instance.helperProportions = n.helperProportions, this.instance.offset.click = n.offset.click, this != a && this.instance._intersectsWith(this.instance.containerCache) && e.ui.contains(a.instance.element[0], this.instance.element[0]) && (o = !1), o
                                    })), o ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(s).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                                      return i.helper[0]
                                    }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = n.offset.click.top, this.instance.offset.click.left = n.offset.click.left, this.instance.offset.parent.left -= n.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= n.offset.parent.top - this.instance.offset.parent.top, n._trigger("toSortable", t), n.dropped = this.instance.element, n.currentItem = n.element, this.instance.fromOutside = n), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), n._trigger("fromSortable", t), n.dropped = !1)
                                  })
                                }
                              }), e.ui.plugin.add("draggable", "cursor", {
                                start: function() {
                                  var t = e("body"),
                                  i = e(this).data("draggable").options;
                                  t.css("cursor") && (i._cursor = t.css("cursor")), t.css("cursor", i.cursor)
                                },
                                stop: function() {
                                  var t = e(this).data("draggable").options;
                                  t._cursor && e("body").css("cursor", t._cursor)
                                }
                              }), e.ui.plugin.add("draggable", "opacity", {
                                start: function(t, i) {
                                  var n = e(i.helper),
                                  s = e(this).data("draggable").options;
                                  n.css("opacity") && (s._opacity = n.css("opacity")), n.css("opacity", s.opacity)
                                },
                                stop: function(t, i) {
                                  var n = e(this).data("draggable").options;
                                  n._opacity && e(i.helper).css("opacity", n._opacity)
                                }
                              }), e.ui.plugin.add("draggable", "scroll", {
                                start: function() {
                                  var t = e(this).data("draggable");
                                  t.scrollParent[0] != document && "HTML" != t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset())
                                },
                                drag: function(t) {
                                  var i = e(this).data("draggable"),
                                  n = i.options,
                                  s = !1;
                                  i.scrollParent[0] != document && "HTML" != i.scrollParent[0].tagName ? (n.axis && "x" == n.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - t.pageY < n.scrollSensitivity ? i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop + n.scrollSpeed : t.pageY - i.overflowOffset.top < n.scrollSensitivity && (i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop - n.scrollSpeed)), n.axis && "y" == n.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - t.pageX < n.scrollSensitivity ? i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft + n.scrollSpeed : t.pageX - i.overflowOffset.left < n.scrollSensitivity && (i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft - n.scrollSpeed))) : (n.axis && "x" == n.axis || (t.pageY - e(document).scrollTop() < n.scrollSensitivity ? s = e(document).scrollTop(e(document).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < n.scrollSensitivity && (s = e(document).scrollTop(e(document).scrollTop() + n.scrollSpeed))), n.axis && "y" == n.axis || (t.pageX - e(document).scrollLeft() < n.scrollSensitivity ? s = e(document).scrollLeft(e(document).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < n.scrollSensitivity && (s = e(document).scrollLeft(e(document).scrollLeft() + n.scrollSpeed)))), s !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(i, t)
                                }
                              }), e.ui.plugin.add("draggable", "snap", {
                                start: function() {
                                  var t = e(this).data("draggable"),
                                  i = t.options;
                                  t.snapElements = [], e(i.snap.constructor != String ? i.snap.items || ":data(draggable)" : i.snap).each(function() {
                                    var i = e(this),
                                    n = i.offset();
                                    this != t.element[0] && t.snapElements.push({
                                      item: this,
                                      width: i.outerWidth(),
                                      height: i.outerHeight(),
                                      top: n.top,
                                      left: n.left
                                    })
                                  })
                                },
                                drag: function(t, i) {
                                  for (var n = e(this).data("draggable"), s = n.options, o = s.snapTolerance, a = i.offset.left, r = a + n.helperProportions.width, l = i.offset.top, c = l + n.helperProportions.height, u = n.snapElements.length - 1; u >= 0; u--) {
                                    var h = n.snapElements[u].left,
                                    d = h + n.snapElements[u].width,
                                    p = n.snapElements[u].top,
                                    f = p + n.snapElements[u].height;
                                    if (a > h - o && d + o > a && l > p - o && f + o > l || a > h - o && d + o > a && c > p - o && f + o > c || r > h - o && d + o > r && l > p - o && f + o > l || r > h - o && d + o > r && c > p - o && f + o > c) {
                                      if ("inner" != s.snapMode) {
                                        var m = Math.abs(p - c) <= o,
                                        g = Math.abs(f - l) <= o,
                                        v = Math.abs(h - r) <= o,
                                        y = Math.abs(d - a) <= o;
                                        m && (i.position.top = n._convertPositionTo("relative", {
                                          top: p - n.helperProportions.height,
                                          left: 0
                                        }).top - n.margins.top), g && (i.position.top = n._convertPositionTo("relative", {
                                          top: f,
                                          left: 0
                                        }).top - n.margins.top), v && (i.position.left = n._convertPositionTo("relative", {
                                          top: 0,
                                          left: h - n.helperProportions.width
                                        }).left - n.margins.left), y && (i.position.left = n._convertPositionTo("relative", {
                                          top: 0,
                                          left: d
                                        }).left - n.margins.left)
                                      }
                                      var b = m || g || v || y;
                                      if ("outer" != s.snapMode) {
                                        var m = Math.abs(p - l) <= o,
                                        g = Math.abs(f - c) <= o,
                                        v = Math.abs(h - a) <= o,
                                        y = Math.abs(d - r) <= o;
                                        m && (i.position.top = n._convertPositionTo("relative", {
                                          top: p,
                                          left: 0
                                        }).top - n.margins.top), g && (i.position.top = n._convertPositionTo("relative", {
                                          top: f - n.helperProportions.height,
                                          left: 0
                                        }).top - n.margins.top), v && (i.position.left = n._convertPositionTo("relative", {
                                          top: 0,
                                          left: h
                                        }).left - n.margins.left), y && (i.position.left = n._convertPositionTo("relative", {
                                          top: 0,
                                          left: d - n.helperProportions.width
                                        }).left - n.margins.left)
                                      }!n.snapElements[u].snapping && (m || g || v || y || b) && n.options.snap.snap && n.options.snap.snap.call(n.element, t, e.extend(n._uiHash(), {
                                        snapItem: n.snapElements[u].item
                                      })), n.snapElements[u].snapping = m || g || v || y || b
                                    } else n.snapElements[u].snapping && n.options.snap.release && n.options.snap.release.call(n.element, t, e.extend(n._uiHash(), {
                                      snapItem: n.snapElements[u].item
                                    })), n.snapElements[u].snapping = !1
                                  }
                                }
                              }), e.ui.plugin.add("draggable", "stack", {
                                start: function() {
                                  var t = e(this).data("draggable").options,
                                  i = e.makeArray(e(t.stack)).sort(function(t, i) {
                                    return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
                                  });
                                  if (i.length) {
                                    var n = parseInt(i[0].style.zIndex) || 0;
                                    e(i).each(function(e) {
                                      this.style.zIndex = n + e
                                    }), this[0].style.zIndex = n + i.length
                                  }
                                }
                              }), e.ui.plugin.add("draggable", "zIndex", {
                                start: function(t, i) {
                                  var n = e(i.helper),
                                  s = e(this).data("draggable").options;
                                  n.css("zIndex") && (s._zIndex = n.css("zIndex")), n.css("zIndex", s.zIndex)
                                },
                                stop: function(t, i) {
                                  var n = e(this).data("draggable").options;
                                  n._zIndex && e(i.helper).css("zIndex", n._zIndex)
                                }
                              })
                            }(jQuery),
                            function(e) {
                              e.widget("ui.droppable", {
                                version: "1.9.2",
                                widgetEventPrefix: "drop",
                                options: {
                                  accept: "*",
                                  activeClass: !1,
                                  addClasses: !0,
                                  greedy: !1,
                                  hoverClass: !1,
                                  scope: "default",
                                  tolerance: "intersect"
                                },
                                _create: function() {
                                  var t = this.options,
                                  i = t.accept;
                                  this.isover = 0, this.isout = 1, this.accept = e.isFunction(i) ? i : function(e) {
                                    return e.is(i)
                                  }, this.proportions = {
                                    width: this.element[0].offsetWidth,
                                    height: this.element[0].offsetHeight
                                  }, e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [], e.ui.ddmanager.droppables[t.scope].push(this), t.addClasses && this.element.addClass("ui-droppable")
                                },
                                _destroy: function() {
                                  for (var t = e.ui.ddmanager.droppables[this.options.scope], i = 0; i < t.length; i++) t[i] == this && t.splice(i, 1);
                                  this.element.removeClass("ui-droppable ui-droppable-disabled")
                                },
                                _setOption: function(t, i) {
                                  "accept" == t && (this.accept = e.isFunction(i) ? i : function(e) {
                                    return e.is(i)
                                  }), e.Widget.prototype._setOption.apply(this, arguments)
                                },
                                _activate: function(t) {
                                  var i = e.ui.ddmanager.current;
                                  this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", t, this.ui(i))
                                },
                                _deactivate: function(t) {
                                  var i = e.ui.ddmanager.current;
                                  this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", t, this.ui(i))
                                },
                                _over: function(t) {
                                  var i = e.ui.ddmanager.current;
                                  i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
                                },
                                _out: function(t) {
                                  var i = e.ui.ddmanager.current;
                                  i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
                                },
                                _drop: function(t, i) {
                                  var n = i || e.ui.ddmanager.current;
                                  if (!n || (n.currentItem || n.element)[0] == this.element[0]) return !1;
                                  var s = !1;
                                  return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
                                    var t = e.data(this, "droppable");
                                    return t.options.greedy && !t.options.disabled && t.options.scope == n.options.scope && t.accept.call(t.element[0], n.currentItem || n.element) && e.ui.intersect(n, e.extend(t, {
                                      offset: t.element.offset()
                                    }), t.options.tolerance) ? (s = !0, !1) : void 0
                                  }), s ? !1 : this.accept.call(this.element[0], n.currentItem || n.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(n)), this.element) : !1
                                },
                                ui: function(e) {
                                  return {
                                    draggable: e.currentItem || e.element,
                                    helper: e.helper,
                                    position: e.position,
                                    offset: e.positionAbs
                                  }
                                }
                              }), e.ui.intersect = function(t, i, n) {
                                if (!i.offset) return !1;
                                var s = (t.positionAbs || t.position.absolute).left,
                                o = s + t.helperProportions.width,
                                a = (t.positionAbs || t.position.absolute).top,
                                r = a + t.helperProportions.height,
                                l = i.offset.left,
                                c = l + i.proportions.width,
                                u = i.offset.top,
                                h = u + i.proportions.height;
                                switch (n) {
                                  case "fit":
                                  return s >= l && c >= o && a >= u && h >= r;
                                  case "intersect":
                                  return l < s + t.helperProportions.width / 2 && o - t.helperProportions.width / 2 < c && u < a + t.helperProportions.height / 2 && r - t.helperProportions.height / 2 < h;
                                  case "pointer":
                                  var d = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left,
                                  p = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top,
                                  f = e.ui.isOver(p, d, u, l, i.proportions.height, i.proportions.width);
                                  return f;
                                  case "touch":
                                  return (a >= u && h >= a || r >= u && h >= r || u > a && r > h) && (s >= l && c >= s || o >= l && c >= o || l > s && o > c);
                                  default:
                                  return !1
                                }
                              }, e.ui.ddmanager = {
                                current: null,
                                droppables: {
                                  "default": []
                                },
                                prepareOffsets: function(t, i) {
                                  var n = e.ui.ddmanager.droppables[t.options.scope] || [],
                                  s = i ? i.type : null,
                                  o = (t.currentItem || t.element).find(":data(droppable)").andSelf();
                                  e: for (var a = 0; a < n.length; a++)
                                  if (!(n[a].options.disabled || t && !n[a].accept.call(n[a].element[0], t.currentItem || t.element))) {
                                    for (var r = 0; r < o.length; r++)
                                    if (o[r] == n[a].element[0]) {
                                      n[a].proportions.height = 0;
                                      continue e
                                    }
                                    n[a].visible = "none" != n[a].element.css("display"), n[a].visible && ("mousedown" == s && n[a]._activate.call(n[a], i), n[a].offset = n[a].element.offset(), n[a].proportions = {
                                      width: n[a].element[0].offsetWidth,
                                      height: n[a].element[0].offsetHeight
                                    })
                                  }
                                },
                                drop: function(t, i) {
                                  var n = !1;
                                  return e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                                    this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, i)))
                                  }), n
                                },
                                dragStart: function(t, i) {
                                  t.element.parentsUntil("body").bind("scroll.droppable", function() {
                                    t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
                                  })
                                },
                                drag: function(t, i) {
                                  t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                                      var n = e.ui.intersect(t, this, this.options.tolerance),
                                      s = n || 1 != this.isover ? n && 0 == this.isover ? "isover" : null : "isout";
                                      if (s) {
                                        var o;
                                        if (this.options.greedy) {
                                          var a = this.options.scope,
                                          r = this.element.parents(":data(droppable)").filter(function() {
                                            return e.data(this, "droppable").options.scope === a
                                          });
                                          r.length && (o = e.data(r[0], "droppable"), o.greedyChild = "isover" == s ? 1 : 0)
                                        }
                                        o && "isover" == s && (o.isover = 0, o.isout = 1, o._out.call(o, i)), this[s] = 1, this["isout" == s ? "isover" : "isout"] = 0, this["isover" == s ? "_over" : "_out"].call(this, i), o && "isout" == s && (o.isout = 0, o.isover = 1, o._over.call(o, i))
                                      }
                                    }
                                  })
                                },
                                dragStop: function(t, i) {
                                  t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
                                }
                              }
                            }(jQuery), jQuery.effects || function(e, t) {
                              var i = e.uiBackCompat !== !1,
                              n = "ui-effects-";
                              e.effects = {
                                effect: {}
                              },
                              function(t, i) {
                                function n(e, t, i) {
                                  var n = d[t.type] || {};
                                  return null == e ? i || !t.def ? null : t.def : (e = n.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : n.mod ? (e + n.mod) % n.mod : 0 > e ? 0 : n.max < e ? n.max : e)
                                }

                                function s(e) {
                                  var i = u(),
                                  n = i._rgba = [];
                                  return e = e.toLowerCase(), m(c, function(t, s) {
                                    var o, a = s.re.exec(e),
                                    r = a && s.parse(a),
                                    l = s.space || "rgba";
                                    return r ? (o = i[l](r), i[h[l].cache] = o[h[l].cache], n = i._rgba = o._rgba, !1) : void 0
                                  }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, a.transparent), i) : a[e]
                                }

                                function o(e, t, i) {
                                  return i = (i + 1) % 1, 1 > 6 * i ? e + (t - e) * i * 6 : 1 > 2 * i ? t : 2 > 3 * i ? e + (t - e) * (2 / 3 - i) * 6 : e
                                }
                                var a, r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),
                                l = /^([\-+])=\s*(\d+\.?\d*)/,
                                c = [{
                                  re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                                  parse: function(e) {
                                    return [e[1], e[2], e[3], e[4]]
                                  }
                                }, {
                                  re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                                  parse: function(e) {
                                    return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
                                  }
                                }, {
                                  re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                                  parse: function(e) {
                                    return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                                  }
                                }, {
                                  re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                                  parse: function(e) {
                                    return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                                  }
                                }, {
                                  re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                                  space: "hsla",
                                  parse: function(e) {
                                    return [e[1], e[2] / 100, e[3] / 100, e[4]]
                                  }
                                }],
                                u = t.Color = function(e, i, n, s) {
                                  return new t.Color.fn.parse(e, i, n, s)
                                },
                                h = {
                                  rgba: {
                                    props: {
                                      red: {
                                        idx: 0,
                                        type: "byte"
                                      },
                                      green: {
                                        idx: 1,
                                        type: "byte"
                                      },
                                      blue: {
                                        idx: 2,
                                        type: "byte"
                                      }
                                    }
                                  },
                                  hsla: {
                                    props: {
                                      hue: {
                                        idx: 0,
                                        type: "degrees"
                                      },
                                      saturation: {
                                        idx: 1,
                                        type: "percent"
                                      },
                                      lightness: {
                                        idx: 2,
                                        type: "percent"
                                      }
                                    }
                                  }
                                },
                                d = {
                                  "byte": {
                                    floor: !0,
                                    max: 255
                                  },
                                  percent: {
                                    max: 1
                                  },
                                  degrees: {
                                    mod: 360,
                                    floor: !0
                                  }
                                },
                                p = u.support = {},
                                f = t("<p>")[0],
                                  m = t.each;
                                  f.style.cssText = "background-color:rgba(1,1,1,.5)", p.rgba = f.style.backgroundColor.indexOf("rgba") > -1, m(h, function(e, t) {
                                    t.cache = "_" + e, t.props.alpha = {
                                      idx: 3,
                                      type: "percent",
                                      def: 1
                                    }
                                  }), u.fn = t.extend(u.prototype, {
                                    parse: function(o, r, l, c) {
                                      if (o === i) return this._rgba = [null, null, null, null], this;
                                      (o.jquery || o.nodeType) && (o = t(o).css(r), r = i);
                                      var d = this,
                                      p = t.type(o),
                                      f = this._rgba = [];
                                      return r !== i && (o = [o, r, l, c], p = "array"), "string" === p ? this.parse(s(o) || a._default) : "array" === p ? (m(h.rgba.props, function(e, t) {
                                        f[t.idx] = n(o[t.idx], t)
                                      }), this) : "object" === p ? (o instanceof u ? m(h, function(e, t) {
                                        o[t.cache] && (d[t.cache] = o[t.cache].slice())
                                      }) : m(h, function(t, i) {
                                        var s = i.cache;
                                        m(i.props, function(e, t) {
                                          if (!d[s] && i.to) {
                                            if ("alpha" === e || null == o[e]) return;
                                            d[s] = i.to(d._rgba)
                                          }
                                          d[s][t.idx] = n(o[e], t, !0)
                                        }), d[s] && e.inArray(null, d[s].slice(0, 3)) < 0 && (d[s][3] = 1, i.from && (d._rgba = i.from(d[s])))
                                      }), this) : void 0
                                    },
                                    is: function(e) {
                                      var t = u(e),
                                      i = !0,
                                      n = this;
                                      return m(h, function(e, s) {
                                        var o, a = t[s.cache];
                                        return a && (o = n[s.cache] || s.to && s.to(n._rgba) || [], m(s.props, function(e, t) {
                                          return null != a[t.idx] ? i = a[t.idx] === o[t.idx] : void 0
                                        })), i
                                      }), i
                                    },
                                    _space: function() {
                                      var e = [],
                                      t = this;
                                      return m(h, function(i, n) {
                                        t[n.cache] && e.push(i)
                                      }), e.pop()
                                    },
                                    transition: function(e, t) {
                                      var i = u(e),
                                      s = i._space(),
                                      o = h[s],
                                      a = 0 === this.alpha() ? u("transparent") : this,
                                      r = a[o.cache] || o.to(a._rgba),
                                      l = r.slice();
                                      return i = i[o.cache], m(o.props, function(e, s) {
                                        var o = s.idx,
                                        a = r[o],
                                        c = i[o],
                                        u = d[s.type] || {};
                                        null !== c && (null === a ? l[o] = c : (u.mod && (c - a > u.mod / 2 ? a += u.mod : a - c > u.mod / 2 && (a -= u.mod)), l[o] = n((c - a) * t + a, s)))
                                      }), this[s](l)
                                    },
                                    blend: function(e) {
                                      if (1 === this._rgba[3]) return this;
                                      var i = this._rgba.slice(),
                                      n = i.pop(),
                                      s = u(e)._rgba;
                                      return u(t.map(i, function(e, t) {
                                        return (1 - n) * s[t] + n * e
                                      }))
                                    },
                                    toRgbaString: function() {
                                      var e = "rgba(",
                                      i = t.map(this._rgba, function(e, t) {
                                        return null == e ? t > 2 ? 1 : 0 : e
                                      });
                                      return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                                    },
                                    toHslaString: function() {
                                      var e = "hsla(",
                                      i = t.map(this.hsla(), function(e, t) {
                                        return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
                                      });
                                      return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                                    },
                                    toHexString: function(e) {
                                      var i = this._rgba.slice(),
                                      n = i.pop();
                                      return e && i.push(~~(255 * n)), "#" + t.map(i, function(e) {
                                        return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
                                      }).join("")
                                    },
                                    toString: function() {
                                      return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                                    }
                                  }), u.fn.parse.prototype = u.fn, h.hsla.to = function(e) {
                                    if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                                    var t, i, n = e[0] / 255,
                                    s = e[1] / 255,
                                    o = e[2] / 255,
                                    a = e[3],
                                    r = Math.max(n, s, o),
                                    l = Math.min(n, s, o),
                                    c = r - l,
                                    u = r + l,
                                    h = .5 * u;
                                    return t = l === r ? 0 : n === r ? 60 * (s - o) / c + 360 : s === r ? 60 * (o - n) / c + 120 : 60 * (n - s) / c + 240, i = 0 === h || 1 === h ? h : .5 >= h ? c / u : c / (2 - u), [Math.round(t) % 360, i, h, null == a ? 1 : a]
                                  }, h.hsla.from = function(e) {
                                    if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                                    var t = e[0] / 360,
                                    i = e[1],
                                    n = e[2],
                                    s = e[3],
                                    a = .5 >= n ? n * (1 + i) : n + i - n * i,
                                    r = 2 * n - a;
                                    return [Math.round(255 * o(r, a, t + 1 / 3)), Math.round(255 * o(r, a, t)), Math.round(255 * o(r, a, t - 1 / 3)), s]
                                  }, m(h, function(e, s) {
                                    var o = s.props,
                                    a = s.cache,
                                    r = s.to,
                                    c = s.from;
                                    u.fn[e] = function(e) {
                                      if (r && !this[a] && (this[a] = r(this._rgba)), e === i) return this[a].slice();
                                      var s, l = t.type(e),
                                      h = "array" === l || "object" === l ? e : arguments,
                                      d = this[a].slice();
                                      return m(o, function(e, t) {
                                        var i = h["object" === l ? e : t.idx];
                                        null == i && (i = d[t.idx]), d[t.idx] = n(i, t)
                                      }), c ? (s = u(c(d)), s[a] = d, s) : u(d)
                                    }, m(o, function(i, n) {
                                      u.fn[i] || (u.fn[i] = function(s) {
                                        var o, a = t.type(s),
                                        r = "alpha" === i ? this._hsla ? "hsla" : "rgba" : e,
                                        c = this[r](),
                                        u = c[n.idx];
                                        return "undefined" === a ? u : ("function" === a && (s = s.call(this, u), a = t.type(s)), null == s && n.empty ? this : ("string" === a && (o = l.exec(s), o && (s = u + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), c[n.idx] = s, this[r](c)))
                                      })
                                    })
                                  }), m(r, function(e, i) {
                                    t.cssHooks[i] = {
                                      set: function(e, n) {
                                        var o, a, r = "";
                                        if ("string" !== t.type(n) || (o = s(n))) {
                                          if (n = u(o || n), !p.rgba && 1 !== n._rgba[3]) {
                                            for (a = "backgroundColor" === i ? e.parentNode : e;
                                            ("" === r || "transparent" === r) && a && a.style;) try {
                                              r = t.css(a, "backgroundColor"), a = a.parentNode
                                            } catch (l) {}
                                            n = n.blend(r && "transparent" !== r ? r : "_default")
                                          }
                                          n = n.toRgbaString()
                                        }
                                        try {
                                          e.style[i] = n
                                        } catch (c) {}
                                      }
                                    }, t.fx.step[i] = function(e) {
                                      e.colorInit || (e.start = u(e.elem, i), e.end = u(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                                    }
                                  }), t.cssHooks.borderColor = {
                                    expand: function(e) {
                                      var t = {};
                                      return m(["Top", "Right", "Bottom", "Left"], function(i, n) {
                                        t["border" + n + "Color"] = e
                                      }), t
                                    }
                                  }, a = t.Color.names = {
                                    aqua: "#00ffff",
                                    black: "#000000",
                                    blue: "#0000ff",
                                    fuchsia: "#ff00ff",
                                    gray: "#808080",
                                    green: "#008000",
                                    lime: "#00ff00",
                                    maroon: "#800000",
                                    navy: "#000080",
                                    olive: "#808000",
                                    purple: "#800080",
                                    red: "#ff0000",
                                    silver: "#c0c0c0",
                                    teal: "#008080",
                                    white: "#ffffff",
                                    yellow: "#ffff00",
                                    transparent: [null, null, null, 0],
                                    _default: "#ffffff"
                                  }
                                }(jQuery),
                                function() {
                                  function i() {
                                    var t, i, n = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle,
                                    s = {};
                                    if (n && n.length && n[0] && n[n[0]])
                                    for (i = n.length; i--;) t = n[i], "string" == typeof n[t] && (s[e.camelCase(t)] = n[t]);
                                    else
                                    for (t in n) "string" == typeof n[t] && (s[t] = n[t]);
                                    return s
                                  }

                                  function n(t, i) {
                                    var n, s, a = {};
                                    for (n in i) s = i[n], t[n] !== s && (o[n] || (e.fx.step[n] || !isNaN(parseFloat(s))) && (a[n] = s));
                                    return a
                                  }
                                  var s = ["add", "remove", "toggle"],
                                  o = {
                                    border: 1,
                                    borderBottom: 1,
                                    borderColor: 1,
                                    borderLeft: 1,
                                    borderRight: 1,
                                    borderTop: 1,
                                    borderWidth: 1,
                                    margin: 1,
                                    padding: 1
                                  };
                                  e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, i) {
                                    e.fx.step[i] = function(e) {
                                      ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (jQuery.style(e.elem, i, e.end), e.setAttr = !0)
                                    }
                                  }), e.effects.animateClass = function(t, o, a, r) {
                                    var l = e.speed(o, a, r);
                                    return this.queue(function() {
                                      var o, a = e(this),
                                      r = a.attr("class") || "",
                                      c = l.children ? a.find("*").andSelf() : a;
                                      c = c.map(function() {
                                        var t = e(this);
                                        return {
                                          el: t,
                                          start: i.call(this)
                                        }
                                      }), o = function() {
                                        e.each(s, function(e, i) {
                                          t[i] && a[i + "Class"](t[i])
                                        })
                                      }, o(), c = c.map(function() {
                                        return this.end = i.call(this.el[0]), this.diff = n(this.start, this.end), this
                                      }), a.attr("class", r), c = c.map(function() {
                                        var t = this,
                                        i = e.Deferred(),
                                        n = jQuery.extend({}, l, {
                                          queue: !1,
                                          complete: function() {
                                            i.resolve(t)
                                          }
                                        });
                                        return this.el.animate(this.diff, n), i.promise()
                                      }), e.when.apply(e, c.get()).done(function() {
                                        o(), e.each(arguments, function() {
                                          var t = this.el;
                                          e.each(this.diff, function(e) {
                                            t.css(e, "")
                                          })
                                        }), l.complete.call(a[0])
                                      })
                                    })
                                  }, e.fn.extend({
                                    _addClass: e.fn.addClass,
                                    addClass: function(t, i, n, s) {
                                      return i ? e.effects.animateClass.call(this, {
                                        add: t
                                      }, i, n, s) : this._addClass(t)
                                    },
                                    _removeClass: e.fn.removeClass,
                                    removeClass: function(t, i, n, s) {
                                      return i ? e.effects.animateClass.call(this, {
                                        remove: t
                                      }, i, n, s) : this._removeClass(t)
                                    },
                                    _toggleClass: e.fn.toggleClass,
                                    toggleClass: function(i, n, s, o, a) {
                                      return "boolean" == typeof n || n === t ? s ? e.effects.animateClass.call(this, n ? {
                                        add: i
                                      } : {
                                        remove: i
                                      }, s, o, a) : this._toggleClass(i, n) : e.effects.animateClass.call(this, {
                                        toggle: i
                                      }, n, s, o)
                                    },
                                    switchClass: function(t, i, n, s, o) {
                                      return e.effects.animateClass.call(this, {
                                        add: i,
                                        remove: t
                                      }, n, s, o)
                                    }
                                  })
                                }(),
                                function() {
                                  function s(t, i, n, s) {
                                    return e.isPlainObject(t) && (i = t, t = t.effect), t = {
                                      effect: t
                                    }, null == i && (i = {}), e.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (s = n, n = i, i = {}), e.isFunction(n) && (s = n, n = null), i && e.extend(t, i), n = n || i.duration, t.duration = e.fx.off ? 0 : "number" == typeof n ? n : n in e.fx.speeds ? e.fx.speeds[n] : e.fx.speeds._default, t.complete = s || i.complete, t
                                  }

                                  function o(t) {
                                    return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? !1 : i && e.effects[t] ? !1 : !0
                                  }
                                  e.extend(e.effects, {
                                    version: "1.9.2",
                                    save: function(e, t) {
                                      for (var i = 0; i < t.length; i++) null !== t[i] && e.data(n + t[i], e[0].style[t[i]])
                                    },
                                    restore: function(e, i) {
                                      var s, o;
                                      for (o = 0; o < i.length; o++) null !== i[o] && (s = e.data(n + i[o]), s === t && (s = ""), e.css(i[o], s))
                                    },
                                    setMode: function(e, t) {
                                      return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
                                    },
                                    getBaseline: function(e, t) {
                                      var i, n;
                                      switch (e[0]) {
                                        case "top":
                                        i = 0;
                                        break;
                                        case "middle":
                                        i = .5;
                                        break;
                                        case "bottom":
                                        i = 1;
                                        break;
                                        default:
                                        i = e[0] / t.height
                                      }
                                      switch (e[1]) {
                                        case "left":
                                        n = 0;
                                        break;
                                        case "center":
                                        n = .5;
                                        break;
                                        case "right":
                                        n = 1;
                                        break;
                                        default:
                                        n = e[1] / t.width
                                      }
                                      return {
                                        x: n,
                                        y: i
                                      }
                                    },
                                    createWrapper: function(t) {
                                      if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                                      var i = {
                                        width: t.outerWidth(!0),
                                        height: t.outerHeight(!0),
                                        "float": t.css("float")
                                      },
                                      n = e("<div></div>").addClass("ui-effects-wrapper").css({
                                        fontSize: "100%",
                                        background: "transparent",
                                        border: "none",
                                        margin: 0,
                                        padding: 0
                                      }),
                                      s = {
                                        width: t.width(),
                                        height: t.height()
                                      },
                                      o = document.activeElement;
                                      try {
                                        o.id
                                      } catch (a) {
                                        o = document.body
                                      }
                                      return t.wrap(n), (t[0] === o || e.contains(t[0], o)) && e(o).focus(), n = t.parent(), "static" === t.css("position") ? (n.css({
                                        position: "relative"
                                      }), t.css({
                                        position: "relative"
                                      })) : (e.extend(i, {
                                        position: t.css("position"),
                                        zIndex: t.css("z-index")
                                      }), e.each(["top", "left", "bottom", "right"], function(e, n) {
                                        i[n] = t.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                                      }), t.css({
                                        position: "relative",
                                        top: 0,
                                        left: 0,
                                        right: "auto",
                                        bottom: "auto"
                                      })), t.css(s), n.css(i).show()
                                    },
                                    removeWrapper: function(t) {
                                      var i = document.activeElement;
                                      return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).focus()), t
                                    },
                                    setTransition: function(t, i, n, s) {
                                      return s = s || {}, e.each(i, function(e, i) {
                                        var o = t.cssUnit(i);
                                        o[0] > 0 && (s[i] = o[0] * n + o[1])
                                      }), s
                                    }
                                  }), e.fn.extend({
                                    effect: function() {
                                      function t(t) {
                                        function i() {
                                          e.isFunction(o) && o.call(s[0]), e.isFunction(t) && t()
                                        }
                                        var s = e(this),
                                        o = n.complete,
                                        a = n.mode;
                                        (s.is(":hidden") ? "hide" === a : "show" === a) ? i(): r.call(s[0], n, i)
                                      }
                                      var n = s.apply(this, arguments),
                                      o = n.mode,
                                      a = n.queue,
                                      r = e.effects.effect[n.effect],
                                      l = !r && i && e.effects[n.effect];
                                      return e.fx.off || !r && !l ? o ? this[o](n.duration, n.complete) : this.each(function() {
                                        n.complete && n.complete.call(this)
                                      }) : r ? a === !1 ? this.each(t) : this.queue(a || "fx", t) : l.call(this, {
                                        options: n,
                                        duration: n.duration,
                                        callback: n.complete,
                                        mode: n.mode
                                      })
                                    },
                                    _show: e.fn.show,
                                    show: function(e) {
                                      if (o(e)) return this._show.apply(this, arguments);
                                      var t = s.apply(this, arguments);
                                      return t.mode = "show", this.effect.call(this, t)
                                    },
                                    _hide: e.fn.hide,
                                    hide: function(e) {
                                      if (o(e)) return this._hide.apply(this, arguments);
                                      var t = s.apply(this, arguments);
                                      return t.mode = "hide", this.effect.call(this, t)
                                    },
                                    __toggle: e.fn.toggle,
                                    toggle: function(t) {
                                      if (o(t) || "boolean" == typeof t || e.isFunction(t)) return this.__toggle.apply(this, arguments);
                                      var i = s.apply(this, arguments);
                                      return i.mode = "toggle", this.effect.call(this, i)
                                    },
                                    cssUnit: function(t) {
                                      var i = this.css(t),
                                      n = [];
                                      return e.each(["em", "px", "%", "pt"], function(e, t) {
                                        i.indexOf(t) > 0 && (n = [parseFloat(i), t])
                                      }), n
                                    }
                                  })
                                }(),
                                function() {
                                  var t = {};
                                  e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, i) {
                                    t[i] = function(t) {
                                      return Math.pow(t, e + 2)
                                    }
                                  }), e.extend(t, {
                                    Sine: function(e) {
                                      return 1 - Math.cos(e * Math.PI / 2)
                                    },
                                    Circ: function(e) {
                                      return 1 - Math.sqrt(1 - e * e)
                                    },
                                    Elastic: function(e) {
                                      return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
                                    },
                                    Back: function(e) {
                                      return e * e * (3 * e - 2)
                                    },
                                    Bounce: function(e) {
                                      for (var t, i = 4; e < ((t = Math.pow(2, --i)) - 1) / 11;);
                                      return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                                    }
                                  }), e.each(t, function(t, i) {
                                    e.easing["easeIn" + t] = i, e.easing["easeOut" + t] = function(e) {
                                      return 1 - i(1 - e)
                                    }, e.easing["easeInOut" + t] = function(e) {
                                      return .5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2
                                    }
                                  })
                                }()
                              }(jQuery),
                              function(e) {
                                var t = /up|down|vertical/,
                                i = /up|left|vertical|horizontal/;
                                e.effects.effect.blind = function(n, s) {
                                  var o, a, r, l = e(this),
                                  c = ["position", "top", "bottom", "left", "right", "height", "width"],
                                  u = e.effects.setMode(l, n.mode || "hide"),
                                  h = n.direction || "up",
                                  d = t.test(h),
                                  p = d ? "height" : "width",
                                  f = d ? "top" : "left",
                                  m = i.test(h),
                                  g = {},
                                  v = "show" === u;
                                  l.parent().is(".ui-effects-wrapper") ? e.effects.save(l.parent(), c) : e.effects.save(l, c), l.show(), o = e.effects.createWrapper(l).css({
                                    overflow: "hidden"
                                  }), a = o[p](), r = parseFloat(o.css(f)) || 0, g[p] = v ? a : 0, m || (l.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
                                    position: "absolute"
                                  }), g[f] = v ? r : a + r), v && (o.css(p, 0), m || o.css(f, r + a)), o.animate(g, {
                                    duration: n.duration,
                                    easing: n.easing,
                                    queue: !1,
                                    complete: function() {
                                      "hide" === u && l.hide(), e.effects.restore(l, c), e.effects.removeWrapper(l), s()
                                    }
                                  })
                                }
                              }(jQuery),
                              function(e) {
                                e.effects.effect.bounce = function(t, i) {
                                  var n, s, o, a = e(this),
                                  r = ["position", "top", "bottom", "left", "right", "height", "width"],
                                  l = e.effects.setMode(a, t.mode || "effect"),
                                  c = "hide" === l,
                                  u = "show" === l,
                                  h = t.direction || "up",
                                  d = t.distance,
                                  p = t.times || 5,
                                  f = 2 * p + (u || c ? 1 : 0),
                                  m = t.duration / f,
                                  g = t.easing,
                                  v = "up" === h || "down" === h ? "top" : "left",
                                  y = "up" === h || "left" === h,
                                  b = a.queue(),
                                  w = b.length;
                                  for ((u || c) && r.push("opacity"), e.effects.save(a, r), a.show(), e.effects.createWrapper(a), d || (d = a["top" === v ? "outerHeight" : "outerWidth"]() / 3), u && (o = {
                                    opacity: 1
                                  }, o[v] = 0, a.css("opacity", 0).css(v, y ? 2 * -d : 2 * d).animate(o, m, g)), c && (d /= Math.pow(2, p - 1)), o = {}, o[v] = 0, n = 0; p > n; n++) s = {}, s[v] = (y ? "-=" : "+=") + d, a.animate(s, m, g).animate(o, m, g), d = c ? 2 * d : d / 2;
                                  c && (s = {
                                    opacity: 0
                                  }, s[v] = (y ? "-=" : "+=") + d, a.animate(s, m, g)), a.queue(function() {
                                    c && a.hide(), e.effects.restore(a, r), e.effects.removeWrapper(a), i()
                                  }), w > 1 && b.splice.apply(b, [1, 0].concat(b.splice(w, f + 1))), a.dequeue()
                                }
                              }(jQuery),
                              function(e) {
                                e.effects.effect.clip = function(t, i) {
                                  var n, s, o, a = e(this),
                                  r = ["position", "top", "bottom", "left", "right", "height", "width"],
                                  l = e.effects.setMode(a, t.mode || "hide"),
                                  c = "show" === l,
                                  u = t.direction || "vertical",
                                  h = "vertical" === u,
                                  d = h ? "height" : "width",
                                  p = h ? "top" : "left",
                                  f = {};
                                  e.effects.save(a, r), a.show(), n = e.effects.createWrapper(a).css({
                                    overflow: "hidden"
                                  }), s = "IMG" === a[0].tagName ? n : a, o = s[d](), c && (s.css(d, 0), s.css(p, o / 2)), f[d] = c ? o : 0, f[p] = c ? 0 : o / 2, s.animate(f, {
                                    queue: !1,
                                    duration: t.duration,
                                    easing: t.easing,
                                    complete: function() {
                                      c || a.hide(), e.effects.restore(a, r), e.effects.removeWrapper(a), i()
                                    }
                                  })
                                }
                              }(jQuery),
                              function(e) {
                                e.effects.effect.drop = function(t, i) {
                                  var n, s = e(this),
                                  o = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
                                  a = e.effects.setMode(s, t.mode || "hide"),
                                  r = "show" === a,
                                  l = t.direction || "left",
                                  c = "up" === l || "down" === l ? "top" : "left",
                                  u = "up" === l || "left" === l ? "pos" : "neg",
                                  h = {
                                    opacity: r ? 1 : 0
                                  };
                                  e.effects.save(s, o), s.show(), e.effects.createWrapper(s), n = t.distance || s["top" === c ? "outerHeight" : "outerWidth"](!0) / 2, r && s.css("opacity", 0).css(c, "pos" === u ? -n : n), h[c] = (r ? "pos" === u ? "+=" : "-=" : "pos" === u ? "-=" : "+=") + n, s.animate(h, {
                                    queue: !1,
                                    duration: t.duration,
                                    easing: t.easing,
                                    complete: function() {
                                      "hide" === a && s.hide(), e.effects.restore(s, o), e.effects.removeWrapper(s), i()
                                    }
                                  })
                                }
                              }(jQuery),
                              function(e) {
                                e.effects.effect.explode = function(t, i) {
                                  function n() {
                                    b.push(this), b.length === h * d && s()
                                  }

                                  function s() {
                                    p.css({
                                      visibility: "visible"
                                    }), e(b).remove(), m || p.hide(), i()
                                  }
                                  var o, a, r, l, c, u, h = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
                                  d = h,
                                  p = e(this),
                                  f = e.effects.setMode(p, t.mode || "hide"),
                                  m = "show" === f,
                                  g = p.show().css("visibility", "hidden").offset(),
                                  v = Math.ceil(p.outerWidth() / d),
                                  y = Math.ceil(p.outerHeight() / h),
                                  b = [];
                                  for (o = 0; h > o; o++)
                                  for (l = g.top + o * y, u = o - (h - 1) / 2, a = 0; d > a; a++) r = g.left + a * v, c = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
                                    position: "absolute",
                                    visibility: "visible",
                                    left: -a * v,
                                    top: -o * y
                                  }).parent().addClass("ui-effects-explode").css({
                                    position: "absolute",
                                    overflow: "hidden",
                                    width: v,
                                    height: y,
                                    left: r + (m ? c * v : 0),
                                    top: l + (m ? u * y : 0),
                                    opacity: m ? 0 : 1
                                  }).animate({
                                    left: r + (m ? 0 : c * v),
                                    top: l + (m ? 0 : u * y),
                                    opacity: m ? 1 : 0
                                  }, t.duration || 500, t.easing, n)
                                }
                              }(jQuery),
                              function(e) {
                                e.effects.effect.fade = function(t, i) {
                                  var n = e(this),
                                  s = e.effects.setMode(n, t.mode || "toggle");
                                  n.animate({
                                    opacity: s
                                  }, {
                                    queue: !1,
                                    duration: t.duration,
                                    easing: t.easing,
                                    complete: i
                                  })
                                }
                              }(jQuery),
                              function(e) {
                                e.effects.effect.fold = function(t, i) {
                                  var n, s, o = e(this),
                                  a = ["position", "top", "bottom", "left", "right", "height", "width"],
                                  r = e.effects.setMode(o, t.mode || "hide"),
                                  l = "show" === r,
                                  c = "hide" === r,
                                  u = t.size || 15,
                                  h = /([0-9]+)%/.exec(u),
                                  d = !!t.horizFirst,
                                  p = l !== d,
                                  f = p ? ["width", "height"] : ["height", "width"],
                                  m = t.duration / 2,
                                  g = {},
                                  v = {};
                                  e.effects.save(o, a), o.show(), n = e.effects.createWrapper(o).css({
                                    overflow: "hidden"
                                  }), s = p ? [n.width(), n.height()] : [n.height(), n.width()], h && (u = parseInt(h[1], 10) / 100 * s[c ? 0 : 1]), l && n.css(d ? {
                                    height: 0,
                                    width: u
                                  } : {
                                    height: u,
                                    width: 0
                                  }), g[f[0]] = l ? s[0] : u, v[f[1]] = l ? s[1] : 0, n.animate(g, m, t.easing).animate(v, m, t.easing, function() {
                                    c && o.hide(), e.effects.restore(o, a), e.effects.removeWrapper(o), i()
                                  })
                                }
                              }(jQuery),
                              function(e) {
                                e.effects.effect.highlight = function(t, i) {
                                  var n = e(this),
                                  s = ["backgroundImage", "backgroundColor", "opacity"],
                                  o = e.effects.setMode(n, t.mode || "show"),
                                  a = {
                                    backgroundColor: n.css("backgroundColor")
                                  };
                                  "hide" === o && (a.opacity = 0), e.effects.save(n, s), n.show().css({
                                    backgroundImage: "none",
                                    backgroundColor: t.color || "#ffff99"
                                  }).animate(a, {
                                    queue: !1,
                                    duration: t.duration,
                                    easing: t.easing,
                                    complete: function() {
                                      "hide" === o && n.hide(), e.effects.restore(n, s), i()
                                    }
                                  })
                                }
                              }(jQuery),
                              function(e) {
                                e.effects.effect.pulsate = function(t, i) {
                                  var n, s = e(this),
                                  o = e.effects.setMode(s, t.mode || "show"),
                                  a = "show" === o,
                                  r = "hide" === o,
                                  l = a || "hide" === o,
                                  c = 2 * (t.times || 5) + (l ? 1 : 0),
                                  u = t.duration / c,
                                  h = 0,
                                  d = s.queue(),
                                  p = d.length;
                                  for ((a || !s.is(":visible")) && (s.css("opacity", 0).show(), h = 1), n = 1; c > n; n++) s.animate({
                                    opacity: h
                                  }, u, t.easing), h = 1 - h;
                                  s.animate({
                                    opacity: h
                                  }, u, t.easing), s.queue(function() {
                                    r && s.hide(), i()
                                  }), p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, c + 1))), s.dequeue()
                                }
                              }(jQuery),
                              function(e) {
                                e.effects.effect.puff = function(t, i) {
                                  var n = e(this),
                                  s = e.effects.setMode(n, t.mode || "hide"),
                                  o = "hide" === s,
                                  a = parseInt(t.percent, 10) || 150,
                                  r = a / 100,
                                  l = {
                                    height: n.height(),
                                    width: n.width(),
                                    outerHeight: n.outerHeight(),
                                    outerWidth: n.outerWidth()
                                  };
                                  e.extend(t, {
                                    effect: "scale",
                                    queue: !1,
                                    fade: !0,
                                    mode: s,
                                    complete: i,
                                    percent: o ? a : 100,
                                    from: o ? l : {
                                      height: l.height * r,
                                      width: l.width * r,
                                      outerHeight: l.outerHeight * r,
                                      outerWidth: l.outerWidth * r
                                    }
                                  }), n.effect(t)
                                }, e.effects.effect.scale = function(t, i) {
                                  var n = e(this),
                                  s = e.extend(!0, {}, t),
                                  o = e.effects.setMode(n, t.mode || "effect"),
                                  a = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === o ? 0 : 100),
                                  r = t.direction || "both",
                                  l = t.origin,
                                  c = {
                                    height: n.height(),
                                    width: n.width(),
                                    outerHeight: n.outerHeight(),
                                    outerWidth: n.outerWidth()
                                  },
                                  u = {
                                    y: "horizontal" !== r ? a / 100 : 1,
                                    x: "vertical" !== r ? a / 100 : 1
                                  };
                                  s.effect = "size", s.queue = !1, s.complete = i, "effect" !== o && (s.origin = l || ["middle", "center"], s.restore = !0), s.from = t.from || ("show" === o ? {
                                    height: 0,
                                    width: 0,
                                    outerHeight: 0,
                                    outerWidth: 0
                                  } : c), s.to = {
                                    height: c.height * u.y,
                                    width: c.width * u.x,
                                    outerHeight: c.outerHeight * u.y,
                                    outerWidth: c.outerWidth * u.x
                                  }, s.fade && ("show" === o && (s.from.opacity = 0, s.to.opacity = 1), "hide" === o && (s.from.opacity = 1, s.to.opacity = 0)), n.effect(s)
                                }, e.effects.effect.size = function(t, i) {
                                  var n, s, o, a = e(this),
                                  r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                                  l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                                  c = ["width", "height", "overflow"],
                                  u = ["fontSize"],
                                  h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                                  d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                                  p = e.effects.setMode(a, t.mode || "effect"),
                                  f = t.restore || "effect" !== p,
                                  m = t.scale || "both",
                                  g = t.origin || ["middle", "center"],
                                  v = a.css("position"),
                                  y = f ? r : l,
                                  b = {
                                    height: 0,
                                    width: 0,
                                    outerHeight: 0,
                                    outerWidth: 0
                                  };
                                  "show" === p && a.show(), n = {
                                    height: a.height(),
                                    width: a.width(),
                                    outerHeight: a.outerHeight(),
                                    outerWidth: a.outerWidth()
                                  }, "toggle" === t.mode && "show" === p ? (a.from = t.to || b, a.to = t.from || n) : (a.from = t.from || ("show" === p ? b : n), a.to = t.to || ("hide" === p ? b : n)), o = {
                                    from: {
                                      y: a.from.height / n.height,
                                      x: a.from.width / n.width
                                    },
                                    to: {
                                      y: a.to.height / n.height,
                                      x: a.to.width / n.width
                                    }
                                  }, ("box" === m || "both" === m) && (o.from.y !== o.to.y && (y = y.concat(h), a.from = e.effects.setTransition(a, h, o.from.y, a.from), a.to = e.effects.setTransition(a, h, o.to.y, a.to)), o.from.x !== o.to.x && (y = y.concat(d), a.from = e.effects.setTransition(a, d, o.from.x, a.from), a.to = e.effects.setTransition(a, d, o.to.x, a.to))), ("content" === m || "both" === m) && o.from.y !== o.to.y && (y = y.concat(u).concat(c), a.from = e.effects.setTransition(a, u, o.from.y, a.from), a.to = e.effects.setTransition(a, u, o.to.y, a.to)), e.effects.save(a, y), a.show(), e.effects.createWrapper(a), a.css("overflow", "hidden").css(a.from), g && (s = e.effects.getBaseline(g, n), a.from.top = (n.outerHeight - a.outerHeight()) * s.y, a.from.left = (n.outerWidth - a.outerWidth()) * s.x, a.to.top = (n.outerHeight - a.to.outerHeight) * s.y, a.to.left = (n.outerWidth - a.to.outerWidth) * s.x), a.css(a.from), ("content" === m || "both" === m) && (h = h.concat(["marginTop", "marginBottom"]).concat(u), d = d.concat(["marginLeft", "marginRight"]), c = r.concat(h).concat(d), a.find("*[width]").each(function() {
                                    var i = e(this),
                                    n = {
                                      height: i.height(),
                                      width: i.width(),
                                      outerHeight: i.outerHeight(),
                                      outerWidth: i.outerWidth()
                                    };
                                    f && e.effects.save(i, c), i.from = {
                                      height: n.height * o.from.y,
                                      width: n.width * o.from.x,
                                      outerHeight: n.outerHeight * o.from.y,
                                      outerWidth: n.outerWidth * o.from.x
                                    }, i.to = {
                                      height: n.height * o.to.y,
                                      width: n.width * o.to.x,
                                      outerHeight: n.height * o.to.y,
                                      outerWidth: n.width * o.to.x
                                    }, o.from.y !== o.to.y && (i.from = e.effects.setTransition(i, h, o.from.y, i.from), i.to = e.effects.setTransition(i, h, o.to.y, i.to)), o.from.x !== o.to.x && (i.from = e.effects.setTransition(i, d, o.from.x, i.from), i.to = e.effects.setTransition(i, d, o.to.x, i.to)), i.css(i.from), i.animate(i.to, t.duration, t.easing, function() {
                                      f && e.effects.restore(i, c)
                                    })
                                  })), a.animate(a.to, {
                                    queue: !1,
                                    duration: t.duration,
                                    easing: t.easing,
                                    complete: function() {
                                      0 === a.to.opacity && a.css("opacity", a.from.opacity), "hide" === p && a.hide(), e.effects.restore(a, y), f || ("static" === v ? a.css({
                                        position: "relative",
                                        top: a.to.top,
                                        left: a.to.left
                                      }) : e.each(["top", "left"], function(e, t) {
                                        a.css(t, function(t, i) {
                                          var n = parseInt(i, 10),
                                          s = e ? a.to.left : a.to.top;
                                          return "auto" === i ? s + "px" : n + s + "px"
                                        })
                                      })), e.effects.removeWrapper(a), i()
                                    }
                                  })
                                }
                              }(jQuery),
                              function(e) {
                                e.effects.effect.shake = function(t, i) {
                                  var n, s = e(this),
                                  o = ["position", "top", "bottom", "left", "right", "height", "width"],
                                  a = e.effects.setMode(s, t.mode || "effect"),
                                  r = t.direction || "left",
                                  l = t.distance || 20,
                                  c = t.times || 3,
                                  u = 2 * c + 1,
                                  h = Math.round(t.duration / u),
                                  d = "up" === r || "down" === r ? "top" : "left",
                                  p = "up" === r || "left" === r,
                                  f = {},
                                  m = {},
                                  g = {},
                                  v = s.queue(),
                                  y = v.length;
                                  for (e.effects.save(s, o), s.show(), e.effects.createWrapper(s), f[d] = (p ? "-=" : "+=") + l, m[d] = (p ? "+=" : "-=") + 2 * l, g[d] = (p ? "-=" : "+=") + 2 * l, s.animate(f, h, t.easing), n = 1; c > n; n++) s.animate(m, h, t.easing).animate(g, h, t.easing);
                                  s.animate(m, h, t.easing).animate(f, h / 2, t.easing).queue(function() {
                                    "hide" === a && s.hide(), e.effects.restore(s, o), e.effects.removeWrapper(s), i()
                                  }), y > 1 && v.splice.apply(v, [1, 0].concat(v.splice(y, u + 1))), s.dequeue()
                                }
                              }(jQuery),
                              function(e) {
                                e.effects.effect.slide = function(t, i) {
                                  var n, s = e(this),
                                  o = ["position", "top", "bottom", "left", "right", "width", "height"],
                                  a = e.effects.setMode(s, t.mode || "show"),
                                  r = "show" === a,
                                  l = t.direction || "left",
                                  c = "up" === l || "down" === l ? "top" : "left",
                                  u = "up" === l || "left" === l,
                                  h = {};
                                  e.effects.save(s, o), s.show(), n = t.distance || s["top" === c ? "outerHeight" : "outerWidth"](!0), e.effects.createWrapper(s).css({
                                    overflow: "hidden"
                                  }), r && s.css(c, u ? isNaN(n) ? "-" + n : -n : n), h[c] = (r ? u ? "+=" : "-=" : u ? "-=" : "+=") + n, s.animate(h, {
                                    queue: !1,
                                    duration: t.duration,
                                    easing: t.easing,
                                    complete: function() {
                                      "hide" === a && s.hide(), e.effects.restore(s, o), e.effects.removeWrapper(s), i()
                                    }
                                  })
                                }
                              }(jQuery),
                              function(e) {
                                e.effects.effect.transfer = function(t, i) {
                                  var n = e(this),
                                  s = e(t.to),
                                  o = "fixed" === s.css("position"),
                                  a = e("body"),
                                  r = o ? a.scrollTop() : 0,
                                  l = o ? a.scrollLeft() : 0,
                                  c = s.offset(),
                                  u = {
                                    top: c.top - r,
                                    left: c.left - l,
                                    height: s.innerHeight(),
                                    width: s.innerWidth()
                                  },
                                  h = n.offset(),
                                  d = e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(t.className).css({
                                    top: h.top - r,
                                    left: h.left - l,
                                    height: n.innerHeight(),
                                    width: n.innerWidth(),
                                    position: o ? "fixed" : "absolute"
                                  }).animate(u, t.duration, t.easing, function() {
                                    d.remove(), i()
                                  })
                                }
                              }(jQuery),
                              function(e) {
                                var t = !1;
                                e.widget("ui.menu", {
                                  version: "1.9.2",
                                  defaultElement: "<ul>",
                                    delay: 300,
                                    options: {
                                      icons: {
                                        submenu: "ui-icon-carat-1-e"
                                      },
                                      menus: "ul",
                                      position: {
                                        my: "left top",
                                        at: "right top"
                                      },
                                      role: "menu",
                                      blur: null,
                                      focus: null,
                                      select: null
                                    },
                                    _create: function() {
                                      this.activeMenu = this.element, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                                        role: this.options.role,
                                        tabIndex: 0
                                      }).bind("click" + this.eventNamespace, e.proxy(function(e) {
                                        this.options.disabled && e.preventDefault()
                                      }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                                        "mousedown .ui-menu-item > a": function(e) {
                                          e.preventDefault()
                                        },
                                        "click .ui-state-disabled > a": function(e) {
                                          e.preventDefault()
                                        },
                                        "click .ui-menu-item:has(a)": function(i) {
                                          var n = e(i.target).closest(".ui-menu-item");
                                          !t && n.not(".ui-state-disabled").length && (t = !0, this.select(i), n.has(".ui-menu").length ? this.expand(i) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                                        },
                                        "mouseenter .ui-menu-item": function(t) {
                                          var i = e(t.currentTarget);
                                          i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(t, i)
                                        },
                                        mouseleave: "collapseAll",
                                        "mouseleave .ui-menu": "collapseAll",
                                        focus: function(e, t) {
                                          var i = this.active || this.element.children(".ui-menu-item").eq(0);
                                          t || this.focus(e, i)
                                        },
                                        blur: function(t) {
                                          this._delay(function() {
                                            e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                                          })
                                        },
                                        keydown: "_keydown"
                                      }), this.refresh(), this._on(this.document, {
                                        click: function(i) {
                                          e(i.target).closest(".ui-menu").length || this.collapseAll(i), t = !1
                                        }
                                      })
                                    },
                                    _destroy: function() {
                                      this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                                        var t = e(this);
                                        t.data("ui-menu-submenu-carat") && t.remove()
                                      }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
                                    },
                                    _keydown: function(t) {
                                      function i(e) {
                                        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                                      }
                                      var n, s, o, a, r, l = !0;
                                      switch (t.keyCode) {
                                        case e.ui.keyCode.PAGE_UP:
                                        this.previousPage(t);
                                        break;
                                        case e.ui.keyCode.PAGE_DOWN:
                                        this.nextPage(t);
                                        break;
                                        case e.ui.keyCode.HOME:
                                        this._move("first", "first", t);
                                        break;
                                        case e.ui.keyCode.END:
                                        this._move("last", "last", t);
                                        break;
                                        case e.ui.keyCode.UP:
                                        this.previous(t);
                                        break;
                                        case e.ui.keyCode.DOWN:
                                        this.next(t);
                                        break;
                                        case e.ui.keyCode.LEFT:
                                        this.collapse(t);
                                        break;
                                        case e.ui.keyCode.RIGHT:
                                        this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                                        break;
                                        case e.ui.keyCode.ENTER:
                                        case e.ui.keyCode.SPACE:
                                        this._activate(t);
                                        break;
                                        case e.ui.keyCode.ESCAPE:
                                        this.collapse(t);
                                        break;
                                        default:
                                        l = !1, s = this.previousFilter || "", o = String.fromCharCode(t.keyCode), a = !1, clearTimeout(this.filterTimer), o === s ? a = !0 : o = s + o, r = new RegExp("^" + i(o), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function() {
                                          return r.test(e(this).children("a").text())
                                        }), n = a && -1 !== n.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : n, n.length || (o = String.fromCharCode(t.keyCode), r = new RegExp("^" + i(o), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function() {
                                          return r.test(e(this).children("a").text())
                                        })), n.length ? (this.focus(t, n), n.length > 1 ? (this.previousFilter = o, this.filterTimer = this._delay(function() {
                                          delete this.previousFilter
                                        }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
                                      }
                                      l && t.preventDefault()
                                    },
                                    _activate: function(e) {
                                      this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
                                    },
                                    refresh: function() {
                                      var t, i = this.options.icons.submenu,
                                      n = this.element.find(this.options.menus);
                                      n.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                                        role: this.options.role,
                                        "aria-hidden": "true",
                                        "aria-expanded": "false"
                                      }).each(function() {
                                        var t = e(this),
                                        n = t.prev("a"),
                                        s = e("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                                          n.attr("aria-haspopup", "true").prepend(s), t.attr("aria-labelledby", n.attr("id"))
                                        }), t = n.add(this.element), t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                                          tabIndex: -1,
                                          role: this._itemRole()
                                        }), t.children(":not(.ui-menu-item)").each(function() {
                                          var t = e(this);
                                          /[^\-—–\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider")
                                        }), t.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
                                      },
                                      _itemRole: function() {
                                        return {
                                          menu: "menuitem",
                                          listbox: "option"
                                        }[this.options.role]
                                      },
                                      focus: function(e, t) {
                                        var i, n;
                                        this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), n = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function() {
                                          this._close()
                                        }, this.delay), i = t.children(".ui-menu"), i.length && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", e, {
                                          item: t
                                        })
                                      },
                                      _scrollIntoView: function(t) {
                                        var i, n, s, o, a, r;
                                        this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, s = t.offset().top - this.activeMenu.offset().top - i - n, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = t.height(), 0 > s ? this.activeMenu.scrollTop(o + s) : s + r > a && this.activeMenu.scrollTop(o + s - a + r))
                                      },
                                      blur: function(e, t) {
                                        t || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {
                                          item: this.active
                                        }))
                                      },
                                      _startOpening: function(e) {
                                        clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() {
                                          this._close(), this._open(e)
                                        }, this.delay))
                                      },
                                      _open: function(t) {
                                        var i = e.extend({
                                          of: this.active
                                        }, this.options.position);
                                        clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
                                      },
                                      collapseAll: function(t, i) {
                                        clearTimeout(this.timer), this.timer = this._delay(function() {
                                          var n = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                                          n.length || (n = this.element), this._close(n), this.blur(t), this.activeMenu = n
                                        }, this.delay)
                                      },
                                      _close: function(e) {
                                        e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
                                      },
                                      collapse: function(e) {
                                        var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                                        t && t.length && (this._close(), this.focus(e, t))
                                      },
                                      expand: function(e) {
                                        var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
                                        t && t.length && (this._open(t.parent()), this._delay(function() {
                                          this.focus(e, t)
                                        }))
                                      },
                                      next: function(e) {
                                        this._move("next", "first", e)
                                      },
                                      previous: function(e) {
                                        this._move("prev", "last", e)
                                      },
                                      isFirstItem: function() {
                                        return this.active && !this.active.prevAll(".ui-menu-item").length
                                      },
                                      isLastItem: function() {
                                        return this.active && !this.active.nextAll(".ui-menu-item").length
                                      },
                                      _move: function(e, t, i) {
                                        var n;
                                        this.active && (n = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.children(".ui-menu-item")[t]()), this.focus(i, n)
                                      },
                                      nextPage: function(t) {
                                        var i, n, s;
                                        return this.active ? void(this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                                          return i = e(this), i.offset().top - n - s < 0
                                        }), this.focus(t, i)) : this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]()))) : void this.next(t)
                                      },
                                      previousPage: function(t) {
                                        var i, n, s;
                                        return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                                          return i = e(this), i.offset().top - n + s > 0
                                        }), this.focus(t, i)) : this.focus(t, this.activeMenu.children(".ui-menu-item").first()))) : void this.next(t)
                                      },
                                      _hasScroll: function() {
                                        return this.element.outerHeight() < this.element.prop("scrollHeight")
                                      },
                                      select: function(t) {
                                        this.active = this.active || e(t.target).closest(".ui-menu-item");
                                        var i = {
                                          item: this.active
                                        };
                                        this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i)
                                      }
                                    })
                                  }(jQuery),
                                  function(e, t) {
                                    e.widget("ui.progressbar", {
                                      version: "1.9.2",
                                      options: {
                                        value: 0,
                                        max: 100
                                      },
                                      min: 0,
                                      _create: function() {
                                        this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                                          role: "progressbar",
                                          "aria-valuemin": this.min,
                                          "aria-valuemax": this.options.max,
                                          "aria-valuenow": this._value()
                                        }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
                                      },
                                      _destroy: function() {
                                        this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
                                      },
                                      value: function(e) {
                                        return e === t ? this._value() : (this._setOption("value", e), this)
                                      },
                                      _setOption: function(e, t) {
                                        "value" === e && (this.options.value = t, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), this._super(e, t)
                                      },
                                      _value: function() {
                                        var e = this.options.value;
                                        return "number" != typeof e && (e = 0), Math.min(this.options.max, Math.max(this.min, e))
                                      },
                                      _percentage: function() {
                                        return 100 * this._value() / this.options.max
                                      },
                                      _refreshValue: function() {
                                        var e = this.value(),
                                        t = this._percentage();
                                        this.oldValue !== e && (this.oldValue = e, this._trigger("change")), this.valueDiv.toggle(e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(t.toFixed(0) + "%"), this.element.attr("aria-valuenow", e)
                                      }
                                    })
                                  }(jQuery),
                                  function(e) {
                                    e.widget("ui.resizable", e.ui.mouse, {
                                      version: "1.9.2",
                                      widgetEventPrefix: "resize",
                                      options: {
                                        alsoResize: !1,
                                        animate: !1,
                                        animateDuration: "slow",
                                        animateEasing: "swing",
                                        aspectRatio: !1,
                                        autoHide: !1,
                                        containment: !1,
                                        ghost: !1,
                                        grid: !1,
                                        handles: "e,s,se",
                                        helper: !1,
                                        maxHeight: null,
                                        maxWidth: null,
                                        minHeight: 10,
                                        minWidth: 10,
                                        zIndex: 1e3
                                      },
                                      _create: function() {
                                        var t = this,
                                        i = this.options;
                                        if (this.element.addClass("ui-resizable"), e.extend(this, {
                                          _aspectRatio: !!i.aspectRatio,
                                          aspectRatio: i.aspectRatio,
                                          originalElement: this.element,
                                          _proportionallyResizeElements: [],
                                          _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
                                        }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                                          position: this.element.css("position"),
                                          width: this.element.outerWidth(),
                                          height: this.element.outerHeight(),
                                          top: this.element.css("top"),
                                          left: this.element.css("left")
                                        })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                                          marginLeft: this.originalElement.css("marginLeft"),
                                          marginTop: this.originalElement.css("marginTop"),
                                          marginRight: this.originalElement.css("marginRight"),
                                          marginBottom: this.originalElement.css("marginBottom")
                                        }), this.originalElement.css({
                                          marginLeft: 0,
                                          marginTop: 0,
                                          marginRight: 0,
                                          marginBottom: 0
                                        }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                                          position: "static",
                                          zoom: 1,
                                          display: "block"
                                        })), this.originalElement.css({
                                          margin: this.originalElement.css("margin")
                                        }), this._proportionallyResize()), this.handles = i.handles || (e(".ui-resizable-handle", this.element).length ? {
                                          n: ".ui-resizable-n",
                                          e: ".ui-resizable-e",
                                          s: ".ui-resizable-s",
                                          w: ".ui-resizable-w",
                                          se: ".ui-resizable-se",
                                          sw: ".ui-resizable-sw",
                                          ne: ".ui-resizable-ne",
                                          nw: ".ui-resizable-nw"
                                        } : "e,s,se"), this.handles.constructor == String) {
                                          "all" == this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
                                          var n = this.handles.split(",");
                                          this.handles = {};
                                          for (var s = 0; s < n.length; s++) {
                                            var o = e.trim(n[s]),
                                            a = "ui-resizable-" + o,
                                            r = e('<div class="ui-resizable-handle ' + a + '"></div>');
                                            r.css({
                                              zIndex: i.zIndex
                                            }), "se" == o && r.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[o] = ".ui-resizable-" + o, this.element.append(r)
                                          }
                                        }
                                        this._renderAxis = function(t) {
                                          t = t || this.element;
                                          for (var i in this.handles) {
                                            if (this.handles[i].constructor == String && (this.handles[i] = e(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                                              var n = e(this.handles[i], this.element),
                                              s = 0;
                                              s = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth();
                                              var o = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join("");
                                              t.css(o, s), this._proportionallyResize()
                                            }
                                            e(this.handles[i]).length
                                          }
                                        }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                                          if (!t.resizing) {
                                            if (this.className) var e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                                            t.axis = e && e[1] ? e[1] : "se"
                                          }
                                        }), i.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                                          i.disabled || (e(this).removeClass("ui-resizable-autohide"), t._handles.show())
                                        }).mouseleave(function() {
                                          i.disabled || t.resizing || (e(this).addClass("ui-resizable-autohide"), t._handles.hide())
                                        })), this._mouseInit()
                                      },
                                      _destroy: function() {
                                        this._mouseDestroy();
                                        var t = function(t) {
                                          e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                                        };
                                        if (this.elementIsWrapper) {
                                          t(this.element);
                                          var i = this.element;
                                          this.originalElement.css({
                                            position: i.css("position"),
                                            width: i.outerWidth(),
                                            height: i.outerHeight(),
                                            top: i.css("top"),
                                            left: i.css("left")
                                          }).insertAfter(i), i.remove()
                                        }
                                        return this.originalElement.css("resize", this.originalResizeStyle), t(this.originalElement), this
                                      },
                                      _mouseCapture: function(t) {
                                        var i = !1;
                                        for (var n in this.handles) e(this.handles[n])[0] == t.target && (i = !0);
                                        return !this.options.disabled && i
                                      },
                                      _mouseStart: function(i) {
                                        var n = this.options,
                                        s = this.element.position(),
                                        o = this.element;
                                        this.resizing = !0, this.documentScroll = {
                                          top: e(document).scrollTop(),
                                          left: e(document).scrollLeft()
                                        }, (o.is(".ui-draggable") || /absolute/.test(o.css("position"))) && o.css({
                                          position: "absolute",
                                          top: s.top,
                                          left: s.left
                                        }), this._renderProxy();
                                        var a = t(this.helper.css("left")),
                                        r = t(this.helper.css("top"));
                                        n.containment && (a += e(n.containment).scrollLeft() || 0, r += e(n.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                                          left: a,
                                          top: r
                                        }, this.size = this._helper ? {
                                          width: o.outerWidth(),
                                          height: o.outerHeight()
                                        } : {
                                          width: o.width(),
                                          height: o.height()
                                        }, this.originalSize = this._helper ? {
                                          width: o.outerWidth(),
                                          height: o.outerHeight()
                                        } : {
                                          width: o.width(),
                                          height: o.height()
                                        }, this.originalPosition = {
                                          left: a,
                                          top: r
                                        }, this.sizeDiff = {
                                          width: o.outerWidth() - o.width(),
                                          height: o.outerHeight() - o.height()
                                        }, this.originalMousePosition = {
                                          left: i.pageX,
                                          top: i.pageY
                                        }, this.aspectRatio = "number" == typeof n.aspectRatio ? n.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
                                        var l = e(".ui-resizable-" + this.axis).css("cursor");
                                        return e("body").css("cursor", "auto" == l ? this.axis + "-resize" : l), o.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
                                      },
                                      _mouseDrag: function(e) {
                                        var t = this.helper,
                                        i = (this.options, this.originalMousePosition),
                                        n = this.axis,
                                        s = e.pageX - i.left || 0,
                                        o = e.pageY - i.top || 0,
                                        a = this._change[n];
                                        if (!a) return !1;
                                        var r = a.apply(this, [e, s, o]);
                                        return this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (r = this._updateRatio(r, e)), r = this._respectSize(r, e), this._propagate("resize", e), t.css({
                                          top: this.position.top + "px",
                                          left: this.position.left + "px",
                                          width: this.size.width + "px",
                                          height: this.size.height + "px"
                                        }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(r), this._trigger("resize", e, this.ui()), !1
                                      },
                                      _mouseStop: function(t) {
                                        this.resizing = !1;
                                        var i = this.options,
                                        n = this;
                                        if (this._helper) {
                                          var s = this._proportionallyResizeElements,
                                          o = s.length && /textarea/i.test(s[0].nodeName),
                                          a = o && e.ui.hasScroll(s[0], "left") ? 0 : n.sizeDiff.height,
                                          r = o ? 0 : n.sizeDiff.width,
                                          l = {
                                            width: n.helper.width() - r,
                                            height: n.helper.height() - a
                                          },
                                          c = parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left) || null,
                                          u = parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top) || null;
                                          i.animate || this.element.css(e.extend(l, {
                                            top: u,
                                            left: c
                                          })), n.helper.height(n.size.height), n.helper.width(n.size.width), this._helper && !i.animate && this._proportionallyResize()
                                        }
                                        return e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
                                      },
                                      _updateVirtualBoundaries: function(e) {
                                        var t, n, s, o, a, r = this.options;
                                        a = {
                                          minWidth: i(r.minWidth) ? r.minWidth : 0,
                                          maxWidth: i(r.maxWidth) ? r.maxWidth : 1 / 0,
                                          minHeight: i(r.minHeight) ? r.minHeight : 0,
                                          maxHeight: i(r.maxHeight) ? r.maxHeight : 1 / 0
                                        }, (this._aspectRatio || e) && (t = a.minHeight * this.aspectRatio, s = a.minWidth / this.aspectRatio, n = a.maxHeight * this.aspectRatio, o = a.maxWidth / this.aspectRatio, t > a.minWidth && (a.minWidth = t), s > a.minHeight && (a.minHeight = s), n < a.maxWidth && (a.maxWidth = n), o < a.maxHeight && (a.maxHeight = o)), this._vBoundaries = a
                                      },
                                      _updateCache: function(e) {
                                        this.options;
                                        this.offset = this.helper.offset(), i(e.left) && (this.position.left = e.left), i(e.top) && (this.position.top = e.top), i(e.height) && (this.size.height = e.height), i(e.width) && (this.size.width = e.width)
                                      },
                                      _updateRatio: function(e) {
                                        var t = (this.options, this.position),
                                        n = this.size,
                                        s = this.axis;
                                        return i(e.height) ? e.width = e.height * this.aspectRatio : i(e.width) && (e.height = e.width / this.aspectRatio), "sw" == s && (e.left = t.left + (n.width - e.width), e.top = null), "nw" == s && (e.top = t.top + (n.height - e.height), e.left = t.left + (n.width - e.width)), e
                                      },
                                      _respectSize: function(e, t) {
                                        var n = (this.helper, this._vBoundaries),
                                        s = (this._aspectRatio || t.shiftKey, this.axis),
                                        o = i(e.width) && n.maxWidth && n.maxWidth < e.width,
                                        a = i(e.height) && n.maxHeight && n.maxHeight < e.height,
                                        r = i(e.width) && n.minWidth && n.minWidth > e.width,
                                        l = i(e.height) && n.minHeight && n.minHeight > e.height;
                                        r && (e.width = n.minWidth), l && (e.height = n.minHeight), o && (e.width = n.maxWidth), a && (e.height = n.maxHeight);
                                        var c = this.originalPosition.left + this.originalSize.width,
                                        u = this.position.top + this.size.height,
                                        h = /sw|nw|w/.test(s),
                                        d = /nw|ne|n/.test(s);
                                        r && h && (e.left = c - n.minWidth), o && h && (e.left = c - n.maxWidth), l && d && (e.top = u - n.minHeight), a && d && (e.top = u - n.maxHeight);
                                        var p = !e.width && !e.height;
                                        return p && !e.left && e.top ? e.top = null : p && !e.top && e.left && (e.left = null), e
                                      },
                                      _proportionallyResize: function() {
                                        this.options;
                                        if (this._proportionallyResizeElements.length)
                                        for (var t = this.helper || this.element, i = 0; i < this._proportionallyResizeElements.length; i++) {
                                          var n = this._proportionallyResizeElements[i];
                                          if (!this.borderDif) {
                                            var s = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")],
                                            o = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")];
                                            this.borderDif = e.map(s, function(e, t) {
                                              var i = parseInt(e, 10) || 0,
                                              n = parseInt(o[t], 10) || 0;
                                              return i + n
                                            })
                                          }
                                          n.css({
                                            height: t.height() - this.borderDif[0] - this.borderDif[2] || 0,
                                            width: t.width() - this.borderDif[1] - this.borderDif[3] || 0
                                          })
                                        }
                                      },
                                      _renderProxy: function() {
                                        var t = this.element,
                                        i = this.options;
                                        if (this.elementOffset = t.offset(), this._helper) {
                                          this.helper = this.helper || e('<div style="overflow:hidden;"></div>');
                                          var n = e.ui.ie6 ? 1 : 0,
                                          s = e.ui.ie6 ? 2 : -1;
                                          this.helper.addClass(this._helper).css({
                                            width: this.element.outerWidth() + s,
                                            height: this.element.outerHeight() + s,
                                            position: "absolute",
                                            left: this.elementOffset.left - n + "px",
                                            top: this.elementOffset.top - n + "px",
                                            zIndex: ++i.zIndex
                                          }), this.helper.appendTo("body").disableSelection()
                                        } else this.helper = this.element
                                      },
                                      _change: {
                                        e: function(e, t) {
                                          return {
                                            width: this.originalSize.width + t
                                          }
                                        },
                                        w: function(e, t) {
                                          var i = (this.options, this.originalSize),
                                          n = this.originalPosition;
                                          return {
                                            left: n.left + t,
                                            width: i.width - t
                                          }
                                        },
                                        n: function(e, t, i) {
                                          var n = (this.options, this.originalSize),
                                          s = this.originalPosition;
                                          return {
                                            top: s.top + i,
                                            height: n.height - i
                                          }
                                        },
                                        s: function(e, t, i) {
                                          return {
                                            height: this.originalSize.height + i
                                          }
                                        },
                                        se: function(t, i, n) {
                                          return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, n]))
                                        },
                                        sw: function(t, i, n) {
                                          return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, n]))
                                        },
                                        ne: function(t, i, n) {
                                          return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, n]))
                                        },
                                        nw: function(t, i, n) {
                                          return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, n]))
                                        }
                                      },
                                      _propagate: function(t, i) {
                                        e.ui.plugin.call(this, t, [i, this.ui()]), "resize" != t && this._trigger(t, i, this.ui())
                                      },
                                      plugins: {},
                                      ui: function() {
                                        return {
                                          originalElement: this.originalElement,
                                          element: this.element,
                                          helper: this.helper,
                                          position: this.position,
                                          size: this.size,
                                          originalSize: this.originalSize,
                                          originalPosition: this.originalPosition
                                        }
                                      }
                                    }), e.ui.plugin.add("resizable", "alsoResize", {
                                      start: function() {
                                        var t = e(this).data("resizable"),
                                        i = t.options,
                                        n = function(t) {
                                          e(t).each(function() {
                                            var t = e(this);
                                            t.data("resizable-alsoresize", {
                                              width: parseInt(t.width(), 10),
                                              height: parseInt(t.height(), 10),
                                              left: parseInt(t.css("left"), 10),
                                              top: parseInt(t.css("top"), 10)
                                            })
                                          })
                                        };
                                        "object" != typeof i.alsoResize || i.alsoResize.parentNode ? n(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], n(i.alsoResize)) : e.each(i.alsoResize, function(e) {
                                          n(e)
                                        })
                                      },
                                      resize: function(t, i) {
                                        var n = e(this).data("resizable"),
                                        s = n.options,
                                        o = n.originalSize,
                                        a = n.originalPosition,
                                        r = {
                                          height: n.size.height - o.height || 0,
                                          width: n.size.width - o.width || 0,
                                          top: n.position.top - a.top || 0,
                                          left: n.position.left - a.left || 0
                                        },
                                        l = function(t, n) {
                                          e(t).each(function() {
                                            var t = e(this),
                                            s = e(this).data("resizable-alsoresize"),
                                            o = {},
                                            a = n && n.length ? n : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                                            e.each(a, function(e, t) {
                                              var i = (s[t] || 0) + (r[t] || 0);
                                              i && i >= 0 && (o[t] = i || null)
                                            }), t.css(o)
                                          })
                                        };
                                        "object" != typeof s.alsoResize || s.alsoResize.nodeType ? l(s.alsoResize) : e.each(s.alsoResize, function(e, t) {
                                          l(e, t)
                                        })
                                      },
                                      stop: function() {
                                        e(this).removeData("resizable-alsoresize")
                                      }
                                    }), e.ui.plugin.add("resizable", "animate", {
                                      stop: function(t) {
                                        var i = e(this).data("resizable"),
                                        n = i.options,
                                        s = i._proportionallyResizeElements,
                                        o = s.length && /textarea/i.test(s[0].nodeName),
                                        a = o && e.ui.hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                                        r = o ? 0 : i.sizeDiff.width,
                                        l = {
                                          width: i.size.width - r,
                                          height: i.size.height - a
                                        },
                                        c = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                                        u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
                                        i.element.animate(e.extend(l, u && c ? {
                                          top: u,
                                          left: c
                                        } : {}), {
                                          duration: n.animateDuration,
                                          easing: n.animateEasing,
                                          step: function() {
                                            var n = {
                                              width: parseInt(i.element.css("width"), 10),
                                              height: parseInt(i.element.css("height"), 10),
                                              top: parseInt(i.element.css("top"), 10),
                                              left: parseInt(i.element.css("left"), 10)
                                            };
                                            s && s.length && e(s[0]).css({
                                              width: n.width,
                                              height: n.height
                                            }), i._updateCache(n), i._propagate("resize", t)
                                          }
                                        })
                                      }
                                    }), e.ui.plugin.add("resizable", "containment", {
                                      start: function() {
                                        var i = e(this).data("resizable"),
                                        n = i.options,
                                        s = i.element,
                                        o = n.containment,
                                        a = o instanceof e ? o.get(0) : /parent/.test(o) ? s.parent().get(0) : o;
                                        if (a)
                                        if (i.containerElement = e(a), /document/.test(o) || o == document) i.containerOffset = {
                                          left: 0,
                                          top: 0
                                        }, i.containerPosition = {
                                          left: 0,
                                          top: 0
                                        }, i.parentData = {
                                          element: e(document),
                                          left: 0,
                                          top: 0,
                                          width: e(document).width(),
                                          height: e(document).height() || document.body.parentNode.scrollHeight
                                        };
                                        else {
                                          var r = e(a),
                                          l = [];
                                          e(["Top", "Right", "Left", "Bottom"]).each(function(e, i) {
                                            l[e] = t(r.css("padding" + i))
                                          }), i.containerOffset = r.offset(), i.containerPosition = r.position(), i.containerSize = {
                                            height: r.innerHeight() - l[3],
                                            width: r.innerWidth() - l[1]
                                          };
                                          var c = i.containerOffset,
                                          u = i.containerSize.height,
                                          h = i.containerSize.width,
                                          d = e.ui.hasScroll(a, "left") ? a.scrollWidth : h,
                                          p = e.ui.hasScroll(a) ? a.scrollHeight : u;
                                          i.parentData = {
                                            element: a,
                                            left: c.left,
                                            top: c.top,
                                            width: d,
                                            height: p
                                          }
                                        }
                                      },
                                      resize: function(t) {
                                        var i = e(this).data("resizable"),
                                        n = i.options,
                                        s = (i.containerSize, i.containerOffset),
                                        o = (i.size, i.position),
                                        a = i._aspectRatio || t.shiftKey,
                                        r = {
                                          top: 0,
                                          left: 0
                                        },
                                        l = i.containerElement;
                                        l[0] != document && /static/.test(l.css("position")) && (r = s), o.left < (i._helper ? s.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - s.left : i.position.left - r.left), a && (i.size.height = i.size.width / i.aspectRatio), i.position.left = n.helper ? s.left : 0), o.top < (i._helper ? s.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - s.top : i.position.top), a && (i.size.width = i.size.height * i.aspectRatio), i.position.top = i._helper ? s.top : 0), i.offset.left = i.parentData.left + i.position.left, i.offset.top = i.parentData.top + i.position.top;
                                        var c = Math.abs((i._helper ? i.offset.left - r.left : i.offset.left - r.left) + i.sizeDiff.width),
                                        u = Math.abs((i._helper ? i.offset.top - r.top : i.offset.top - s.top) + i.sizeDiff.height),
                                        h = i.containerElement.get(0) == i.element.parent().get(0),
                                        d = /relative|absolute/.test(i.containerElement.css("position"));
                                        h && d && (c -= i.parentData.left), c + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - c, a && (i.size.height = i.size.width / i.aspectRatio)), u + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - u, a && (i.size.width = i.size.height * i.aspectRatio))
                                      },
                                      stop: function() {
                                        var t = e(this).data("resizable"),
                                        i = t.options,
                                        n = (t.position, t.containerOffset),
                                        s = t.containerPosition,
                                        o = t.containerElement,
                                        a = e(t.helper),
                                        r = a.offset(),
                                        l = a.outerWidth() - t.sizeDiff.width,
                                        c = a.outerHeight() - t.sizeDiff.height;
                                        t._helper && !i.animate && /relative/.test(o.css("position")) && e(this).css({
                                          left: r.left - s.left - n.left,
                                          width: l,
                                          height: c
                                        }), t._helper && !i.animate && /static/.test(o.css("position")) && e(this).css({
                                          left: r.left - s.left - n.left,
                                          width: l,
                                          height: c
                                        })
                                      }
                                    }), e.ui.plugin.add("resizable", "ghost", {
                                      start: function() {
                                        var t = e(this).data("resizable"),
                                        i = t.options,
                                        n = t.size;
                                        t.ghost = t.originalElement.clone(), t.ghost.css({
                                          opacity: .25,
                                          display: "block",
                                          position: "relative",
                                          height: n.height,
                                          width: n.width,
                                          margin: 0,
                                          left: 0,
                                          top: 0
                                        }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper)
                                      },
                                      resize: function() {
                                        {
                                          var t = e(this).data("resizable");
                                          t.options
                                        }
                                        t.ghost && t.ghost.css({
                                          position: "relative",
                                          height: t.size.height,
                                          width: t.size.width
                                        })
                                      },
                                      stop: function() {
                                        {
                                          var t = e(this).data("resizable");
                                          t.options
                                        }
                                        t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
                                      }
                                    }), e.ui.plugin.add("resizable", "grid", {
                                      resize: function(t) {
                                        {
                                          var i = e(this).data("resizable"),
                                          n = i.options,
                                          s = i.size,
                                          o = i.originalSize,
                                          a = i.originalPosition,
                                          r = i.axis;
                                          n._aspectRatio || t.shiftKey
                                        }
                                        n.grid = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid;
                                        var l = Math.round((s.width - o.width) / (n.grid[0] || 1)) * (n.grid[0] || 1),
                                        c = Math.round((s.height - o.height) / (n.grid[1] || 1)) * (n.grid[1] || 1);
                                        /^(se|s|e)$/.test(r) ? (i.size.width = o.width + l, i.size.height = o.height + c) : /^(ne)$/.test(r) ? (i.size.width = o.width + l, i.size.height = o.height + c, i.position.top = a.top - c) : /^(sw)$/.test(r) ? (i.size.width = o.width + l, i.size.height = o.height + c, i.position.left = a.left - l) : (i.size.width = o.width + l, i.size.height = o.height + c, i.position.top = a.top - c, i.position.left = a.left - l)
                                      }
                                    });
                                    var t = function(e) {
                                      return parseInt(e, 10) || 0
                                    },
                                    i = function(e) {
                                      return !isNaN(parseInt(e, 10))
                                    }
                                  }(jQuery),
                                  function(e) {
                                    e.widget("ui.selectable", e.ui.mouse, {
                                      version: "1.9.2",
                                      options: {
                                        appendTo: "body",
                                        autoRefresh: !0,
                                        distance: 0,
                                        filter: "*",
                                        tolerance: "touch"
                                      },
                                      _create: function() {
                                        var t = this;
                                        this.element.addClass("ui-selectable"), this.dragged = !1;
                                        var i;
                                        this.refresh = function() {
                                          i = e(t.options.filter, t.element[0]), i.addClass("ui-selectee"), i.each(function() {
                                            var t = e(this),
                                            i = t.offset();
                                            e.data(this, "selectable-item", {
                                              element: this,
                                              $element: t,
                                              left: i.left,
                                              top: i.top,
                                              right: i.left + t.outerWidth(),
                                              bottom: i.top + t.outerHeight(),
                                              startselected: !1,
                                              selected: t.hasClass("ui-selected"),
                                              selecting: t.hasClass("ui-selecting"),
                                              unselecting: t.hasClass("ui-unselecting")
                                            })
                                          })
                                        }, this.refresh(), this.selectees = i.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
                                      },
                                      _destroy: function() {
                                        this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
                                      },
                                      _mouseStart: function(t) {
                                        var i = this;
                                        if (this.opos = [t.pageX, t.pageY], !this.options.disabled) {
                                          var n = this.options;
                                          this.selectees = e(n.filter, this.element[0]), this._trigger("start", t), e(n.appendTo).append(this.helper), this.helper.css({
                                            left: t.clientX,
                                            top: t.clientY,
                                            width: 0,
                                            height: 0
                                          }), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                                            var n = e.data(this, "selectable-item");
                                            n.startselected = !0, t.metaKey || t.ctrlKey || (n.$element.removeClass("ui-selected"), n.selected = !1, n.$element.addClass("ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", t, {
                                              unselecting: n.element
                                            }))
                                          }), e(t.target).parents().andSelf().each(function() {
                                            var n = e.data(this, "selectable-item");
                                            if (n) {
                                              var s = !t.metaKey && !t.ctrlKey || !n.$element.hasClass("ui-selected");
                                              return n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", t, {
                                                selecting: n.element
                                              }) : i._trigger("unselecting", t, {
                                                unselecting: n.element
                                              }), !1
                                            }
                                          })
                                        }
                                      },
                                      _mouseDrag: function(t) {
                                        var i = this;
                                        if (this.dragged = !0, !this.options.disabled) {
                                          var n = this.options,
                                          s = this.opos[0],
                                          o = this.opos[1],
                                          a = t.pageX,
                                          r = t.pageY;
                                          if (s > a) {
                                            var l = a;
                                            a = s, s = l
                                          }
                                          if (o > r) {
                                            var l = r;
                                            r = o, o = l
                                          }
                                          return this.helper.css({
                                            left: s,
                                            top: o,
                                            width: a - s,
                                            height: r - o
                                          }), this.selectees.each(function() {
                                            var l = e.data(this, "selectable-item");
                                            if (l && l.element != i.element[0]) {
                                              var c = !1;
                                              "touch" == n.tolerance ? c = !(l.left > a || l.right < s || l.top > r || l.bottom < o) : "fit" == n.tolerance && (c = l.left > s && l.right < a && l.top > o && l.bottom < r), c ? (l.selected && (l.$element.removeClass("ui-selected"), l.selected = !1), l.unselecting && (l.$element.removeClass("ui-unselecting"), l.unselecting = !1), l.selecting || (l.$element.addClass("ui-selecting"), l.selecting = !0, i._trigger("selecting", t, {
                                                selecting: l.element
                                              }))) : (l.selecting && ((t.metaKey || t.ctrlKey) && l.startselected ? (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.$element.addClass("ui-selected"), l.selected = !0) : (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.startselected && (l.$element.addClass("ui-unselecting"), l.unselecting = !0), i._trigger("unselecting", t, {
                                                unselecting: l.element
                                              }))), l.selected && (t.metaKey || t.ctrlKey || l.startselected || (l.$element.removeClass("ui-selected"), l.selected = !1, l.$element.addClass("ui-unselecting"), l.unselecting = !0, i._trigger("unselecting", t, {
                                                unselecting: l.element
                                              }))))
                                            }
                                          }), !1
                                        }
                                      },
                                      _mouseStop: function(t) {
                                        var i = this;
                                        this.dragged = !1;
                                        this.options;
                                        return e(".ui-unselecting", this.element[0]).each(function() {
                                          var n = e.data(this, "selectable-item");
                                          n.$element.removeClass("ui-unselecting"), n.unselecting = !1, n.startselected = !1, i._trigger("unselected", t, {
                                            unselected: n.element
                                          })
                                        }), e(".ui-selecting", this.element[0]).each(function() {
                                          var n = e.data(this, "selectable-item");
                                          n.$element.removeClass("ui-selecting").addClass("ui-selected"), n.selecting = !1, n.selected = !0, n.startselected = !0, i._trigger("selected", t, {
                                            selected: n.element
                                          })
                                        }), this._trigger("stop", t), this.helper.remove(), !1
                                      }
                                    })
                                  }(jQuery),
                                  function(e) {
                                    var t = 5;
                                    e.widget("ui.slider", e.ui.mouse, {
                                      version: "1.9.2",
                                      widgetEventPrefix: "slide",
                                      options: {
                                        animate: !1,
                                        distance: 0,
                                        max: 100,
                                        min: 0,
                                        orientation: "horizontal",
                                        range: !1,
                                        step: 1,
                                        value: 0,
                                        values: null
                                      },
                                      _create: function() {
                                        var i, n, s = this.options,
                                        o = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                                        a = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                                        r = [];
                                        for (this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (s.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = e([]), s.range && (s.range === !0 && (s.values || (s.values = [this._valueMin(), this._valueMin()]), s.values.length && 2 !== s.values.length && (s.values = [s.values[0], s.values[0]])), this.range = e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + ("min" === s.range || "max" === s.range ? " ui-slider-range-" + s.range : ""))), n = s.values && s.values.length || 1, i = o.length; n > i; i++) r.push(a);
                                        this.handles = o.add(e(r.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function(e) {
                                          e.preventDefault()
                                        }).mouseenter(function() {
                                          s.disabled || e(this).addClass("ui-state-hover")
                                        }).mouseleave(function() {
                                          e(this).removeClass("ui-state-hover")
                                        }).focus(function() {
                                          s.disabled ? e(this).blur() : (e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), e(this).addClass("ui-state-focus"))
                                        }).blur(function() {
                                          e(this).removeClass("ui-state-focus")
                                        }), this.handles.each(function(t) {
                                          e(this).data("ui-slider-handle-index", t)
                                        }), this._on(this.handles, {
                                          keydown: function(i) {
                                            var n, s, o, a, r = e(i.target).data("ui-slider-handle-index");
                                            switch (i.keyCode) {
                                              case e.ui.keyCode.HOME:
                                              case e.ui.keyCode.END:
                                              case e.ui.keyCode.PAGE_UP:
                                              case e.ui.keyCode.PAGE_DOWN:
                                              case e.ui.keyCode.UP:
                                              case e.ui.keyCode.RIGHT:
                                              case e.ui.keyCode.DOWN:
                                              case e.ui.keyCode.LEFT:
                                              if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, e(i.target).addClass("ui-state-active"), n = this._start(i, r), n === !1)) return
                                            }
                                            switch (a = this.options.step, s = o = this.options.values && this.options.values.length ? this.values(r) : this.value(), i.keyCode) {
                                              case e.ui.keyCode.HOME:
                                              o = this._valueMin();
                                              break;
                                              case e.ui.keyCode.END:
                                              o = this._valueMax();
                                              break;
                                              case e.ui.keyCode.PAGE_UP:
                                              o = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / t);
                                              break;
                                              case e.ui.keyCode.PAGE_DOWN:
                                              o = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / t);
                                              break;
                                              case e.ui.keyCode.UP:
                                              case e.ui.keyCode.RIGHT:
                                              if (s === this._valueMax()) return;
                                              o = this._trimAlignValue(s + a);
                                              break;
                                              case e.ui.keyCode.DOWN:
                                              case e.ui.keyCode.LEFT:
                                              if (s === this._valueMin()) return;
                                              o = this._trimAlignValue(s - a)
                                            }
                                            this._slide(i, r, o)
                                          },
                                          keyup: function(t) {
                                            var i = e(t.target).data("ui-slider-handle-index");
                                            this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"))
                                          }
                                        }), this._refreshValue(), this._animateOff = !1
                                      },
                                      _destroy: function() {
                                        this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
                                      },
                                      _mouseCapture: function(t) {
                                        var i, n, s, o, a, r, l, c, u = this,
                                        h = this.options;
                                        return h.disabled ? !1 : (this.elementSize = {
                                          width: this.element.outerWidth(),
                                          height: this.element.outerHeight()
                                        }, this.elementOffset = this.element.offset(), i = {
                                          x: t.pageX,
                                          y: t.pageY
                                        }, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                                          var i = Math.abs(n - u.values(t));
                                          s > i && (s = i, o = e(this), a = t)
                                        }), h.range === !0 && this.values(1) === h.min && (a += 1, o = e(this.handles[a])), r = this._start(t, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, o.addClass("ui-state-active").focus(), l = o.offset(), c = !e(t.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = c ? {
                                          left: 0,
                                          top: 0
                                        } : {
                                          left: t.pageX - l.left - o.width() / 2,
                                          top: t.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
                                        }, this.handles.hasClass("ui-state-hover") || this._slide(t, a, n), this._animateOff = !0, !0))
                                      },
                                      _mouseStart: function() {
                                        return !0
                                      },
                                      _mouseDrag: function(e) {
                                        var t = {
                                          x: e.pageX,
                                          y: e.pageY
                                        },
                                        i = this._normValueFromMouse(t);
                                        return this._slide(e, this._handleIndex, i), !1
                                      },
                                      _mouseStop: function(e) {
                                        return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
                                      },
                                      _detectOrientation: function() {
                                        this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
                                      },
                                      _normValueFromMouse: function(e) {
                                        var t, i, n, s, o;
                                        return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), n = i / t, n > 1 && (n = 1), 0 > n && (n = 0), "vertical" === this.orientation && (n = 1 - n), s = this._valueMax() - this._valueMin(), o = this._valueMin() + n * s, this._trimAlignValue(o)
                                      },
                                      _start: function(e, t) {
                                        var i = {
                                          handle: this.handles[t],
                                          value: this.value()
                                        };
                                        return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i)
                                      },
                                      _slide: function(e, t, i) {
                                        var n, s, o;
                                        this.options.values && this.options.values.length ? (n = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > n || 1 === t && n > i) && (i = n), i !== this.values(t) && (s = this.values(), s[t] = i, o = this._trigger("slide", e, {
                                          handle: this.handles[t],
                                          value: i,
                                          values: s
                                        }), n = this.values(t ? 0 : 1), o !== !1 && this.values(t, i, !0))) : i !== this.value() && (o = this._trigger("slide", e, {
                                          handle: this.handles[t],
                                          value: i
                                        }), o !== !1 && this.value(i))
                                      },
                                      _stop: function(e, t) {
                                        var i = {
                                          handle: this.handles[t],
                                          value: this.value()
                                        };
                                        this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
                                      },
                                      _change: function(e, t) {
                                        if (!this._keySliding && !this._mouseSliding) {
                                          var i = {
                                            handle: this.handles[t],
                                            value: this.value()
                                          };
                                          this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("change", e, i)
                                        }
                                      },
                                      value: function(e) {
                                        return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), void this._change(null, 0)) : this._value()
                                      },
                                      values: function(t, i) {
                                        var n, s, o;
                                        if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, t);
                                        if (!arguments.length) return this._values();
                                        if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
                                        for (n = this.options.values, s = arguments[0], o = 0; o < n.length; o += 1) n[o] = this._trimAlignValue(s[o]), this._change(null, o);
                                        this._refreshValue()
                                      },
                                      _setOption: function(t, i) {
                                        var n, s = 0;
                                        switch (e.isArray(this.options.values) && (s = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments), t) {
                                          case "disabled":
                                          i ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.prop("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.prop("disabled", !1), this.element.removeClass("ui-disabled"));
                                          break;
                                          case "orientation":
                                          this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                                          break;
                                          case "value":
                                          this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                                          break;
                                          case "values":
                                          for (this._animateOff = !0, this._refreshValue(), n = 0; s > n; n += 1) this._change(null, n);
                                          this._animateOff = !1;
                                          break;
                                          case "min":
                                          case "max":
                                          this._animateOff = !0, this._refreshValue(), this._animateOff = !1
                                        }
                                      },
                                      _value: function() {
                                        var e = this.options.value;
                                        return e = this._trimAlignValue(e)
                                      },
                                      _values: function(e) {
                                        var t, i, n;
                                        if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
                                        for (i = this.options.values.slice(), n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(i[n]);
                                        return i
                                      },
                                      _trimAlignValue: function(e) {
                                        if (e <= this._valueMin()) return this._valueMin();
                                        if (e >= this._valueMax()) return this._valueMax();
                                        var t = this.options.step > 0 ? this.options.step : 1,
                                        i = (e - this._valueMin()) % t,
                                        n = e - i;
                                        return 2 * Math.abs(i) >= t && (n += i > 0 ? t : -t), parseFloat(n.toFixed(5))
                                      },
                                      _valueMin: function() {
                                        return this.options.min
                                      },
                                      _valueMax: function() {
                                        return this.options.max
                                      },
                                      _refreshValue: function() {
                                        var t, i, n, s, o, a = this.options.range,
                                        r = this.options,
                                        l = this,
                                        c = this._animateOff ? !1 : r.animate,
                                        u = {};
                                        this.options.values && this.options.values.length ? this.handles.each(function(n) {
                                          i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, u["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[c ? "animate" : "css"](u, r.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({
                                            left: i + "%"
                                          }, r.animate), 1 === n && l.range[c ? "animate" : "css"]({
                                            width: i - t + "%"
                                          }, {
                                            queue: !1,
                                            duration: r.animate
                                          })) : (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({
                                            bottom: i + "%"
                                          }, r.animate), 1 === n && l.range[c ? "animate" : "css"]({
                                            height: i - t + "%"
                                          }, {
                                            queue: !1,
                                            duration: r.animate
                                          }))), t = i
                                        }) : (n = this.value(), s = this._valueMin(), o = this._valueMax(), i = o !== s ? (n - s) / (o - s) * 100 : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[c ? "animate" : "css"](u, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                                          width: i + "%"
                                        }, r.animate), "max" === a && "horizontal" === this.orientation && this.range[c ? "animate" : "css"]({
                                          width: 100 - i + "%"
                                        }, {
                                          queue: !1,
                                          duration: r.animate
                                        }), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                                          height: i + "%"
                                        }, r.animate), "max" === a && "vertical" === this.orientation && this.range[c ? "animate" : "css"]({
                                          height: 100 - i + "%"
                                        }, {
                                          queue: !1,
                                          duration: r.animate
                                        }))
                                      }
                                    })
                                  }(jQuery),
                                  function(e) {
                                    e.widget("ui.sortable", e.ui.mouse, {
                                      version: "1.9.2",
                                      widgetEventPrefix: "sort",
                                      ready: !1,
                                      options: {
                                        appendTo: "parent",
                                        axis: !1,
                                        connectWith: !1,
                                        containment: !1,
                                        cursor: "auto",
                                        cursorAt: !1,
                                        dropOnEmpty: !0,
                                        forcePlaceholderSize: !1,
                                        forceHelperSize: !1,
                                        grid: !1,
                                        handle: !1,
                                        helper: "original",
                                        items: "> *",
                                        opacity: !1,
                                        placeholder: !1,
                                        revert: !1,
                                        scroll: !0,
                                        scrollSensitivity: 20,
                                        scrollSpeed: 20,
                                        scope: "default",
                                        tolerance: "intersect",
                                        zIndex: 1e3
                                      },
                                      _create: function() {
                                        var e = this.options;
                                        this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === e.axis || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
                                      },
                                      _destroy: function() {
                                        this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
                                        for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
                                        return this
                                      },
                                      _setOption: function(t, i) {
                                        "disabled" === t ? (this.options[t] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : e.Widget.prototype._setOption.apply(this, arguments)
                                      },
                                      _mouseCapture: function(t, i) {
                                        var n = this;
                                        if (this.reverting) return !1;
                                        if (this.options.disabled || "static" == this.options.type) return !1;
                                        this._refreshItems(t); {
                                          var s = null;
                                          e(t.target).parents().each(function() {
                                            return e.data(this, n.widgetName + "-item") == n ? (s = e(this), !1) : void 0
                                          })
                                        }
                                        if (e.data(t.target, n.widgetName + "-item") == n && (s = e(t.target)), !s) return !1;
                                        if (this.options.handle && !i) {
                                          var o = !1;
                                          if (e(this.options.handle, s).find("*").andSelf().each(function() {
                                            this == t.target && (o = !0)
                                          }), !o) return !1
                                        }
                                        return this.currentItem = s, this._removeCurrentsFromItems(), !0
                                      },
                                      _mouseStart: function(t, i, n) {
                                        var s = this.options;
                                        if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                                          top: this.offset.top - this.margins.top,
                                          left: this.offset.left - this.margins.left
                                        }, e.extend(this.offset, {
                                          click: {
                                            left: t.pageX - this.offset.left,
                                            top: t.pageY - this.offset.top
                                          },
                                          parent: this._getParentOffset(),
                                          relative: this._getRelativeOffset()
                                        }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), this.domPosition = {
                                          prev: this.currentItem.prev()[0],
                                          parent: this.currentItem.parent()[0]
                                        }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), s.containment && this._setContainment(), s.cursor && (e("body").css("cursor") && (this._storedCursor = e("body").css("cursor")), e("body").css("cursor", s.cursor)), s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", s.opacity)), s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", s.zIndex)), this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                                        for (var o = this.containers.length - 1; o >= 0; o--) this.containers[o]._trigger("activate", t, this._uiHash(this));
                                        return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
                                      },
                                      _mouseDrag: function(t) {
                                        if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll) {
                                          var i = this.options,
                                          n = !1;
                                          this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = n = this.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = n = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = n = this.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = n = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (t.pageY - e(document).scrollTop() < i.scrollSensitivity ? n = e(document).scrollTop(e(document).scrollTop() - i.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < i.scrollSensitivity && (n = e(document).scrollTop(e(document).scrollTop() + i.scrollSpeed)), t.pageX - e(document).scrollLeft() < i.scrollSensitivity ? n = e(document).scrollLeft(e(document).scrollLeft() - i.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < i.scrollSensitivity && (n = e(document).scrollLeft(e(document).scrollLeft() + i.scrollSpeed))), n !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)
                                        }
                                        this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px");
                                        for (var s = this.items.length - 1; s >= 0; s--) {
                                          var o = this.items[s],
                                          a = o.item[0],
                                          r = this._intersectsWithPointer(o);
                                          if (r && o.instance === this.currentContainer && a != this.currentItem[0] && this.placeholder[1 == r ? "next" : "prev"]()[0] != a && !e.contains(this.placeholder[0], a) && ("semi-dynamic" == this.options.type ? !e.contains(this.element[0], a) : !0)) {
                                            if (this.direction = 1 == r ? "down" : "up", "pointer" != this.options.tolerance && !this._intersectsWithSides(o)) break;
                                            this._rearrange(t, o), this._trigger("change", t, this._uiHash());
                                            break
                                          }
                                        }
                                        return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
                                      },
                                      _mouseStop: function(t, i) {
                                        if (t) {
                                          if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                                            var n = this,
                                            s = this.placeholder.offset();
                                            this.reverting = !0, e(this.helper).animate({
                                              left: s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                                              top: s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                                            }, parseInt(this.options.revert, 10) || 500, function() {
                                              n._clear(t)
                                            })
                                          } else this._clear(t, i);
                                          return !1
                                        }
                                      },
                                      cancel: function() {
                                        if (this.dragging) {
                                          this._mouseUp({
                                            target: null
                                          }), "original" == this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                                          for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
                                        }
                                        return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" != this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                                          helper: null,
                                          dragging: !1,
                                          reverting: !1,
                                          _noFinalSort: null
                                        }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
                                      },
                                      serialize: function(t) {
                                        var i = this._getItemsAsjQuery(t && t.connected),
                                        n = [];
                                        return t = t || {}, e(i).each(function() {
                                          var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[-=_](.+)/);
                                          i && n.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]))
                                        }), !n.length && t.key && n.push(t.key + "="), n.join("&")
                                      },
                                      toArray: function(t) {
                                        var i = this._getItemsAsjQuery(t && t.connected),
                                        n = [];
                                        return t = t || {}, i.each(function() {
                                          n.push(e(t.item || this).attr(t.attribute || "id") || "")
                                        }), n
                                      },
                                      _intersectsWith: function(e) {
                                        var t = this.positionAbs.left,
                                        i = t + this.helperProportions.width,
                                        n = this.positionAbs.top,
                                        s = n + this.helperProportions.height,
                                        o = e.left,
                                        a = o + e.width,
                                        r = e.top,
                                        l = r + e.height,
                                        c = this.offset.click.top,
                                        u = this.offset.click.left,
                                        h = n + c > r && l > n + c && t + u > o && a > t + u;
                                        return "pointer" == this.options.tolerance || this.options.forcePointerForContainers || "pointer" != this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? h : o < t + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < a && r < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
                                      },
                                      _intersectsWithPointer: function(t) {
                                        var i = "x" === this.options.axis || e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                                        n = "y" === this.options.axis || e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                                        s = i && n,
                                        o = this._getDragVerticalDirection(),
                                        a = this._getDragHorizontalDirection();
                                        return s ? this.floating ? a && "right" == a || "down" == o ? 2 : 1 : o && ("down" == o ? 2 : 1) : !1
                                      },
                                      _intersectsWithSides: function(t) {
                                        var i = e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                                        n = e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                                        s = this._getDragVerticalDirection(),
                                        o = this._getDragHorizontalDirection();
                                        return this.floating && o ? "right" == o && n || "left" == o && !n : s && ("down" == s && i || "up" == s && !i)
                                      },
                                      _getDragVerticalDirection: function() {
                                        var e = this.positionAbs.top - this.lastPositionAbs.top;
                                        return 0 != e && (e > 0 ? "down" : "up")
                                      },
                                      _getDragHorizontalDirection: function() {
                                        var e = this.positionAbs.left - this.lastPositionAbs.left;
                                        return 0 != e && (e > 0 ? "right" : "left")
                                      },
                                      refresh: function(e) {
                                        return this._refreshItems(e), this.refreshPositions(), this
                                      },
                                      _connectWith: function() {
                                        var e = this.options;
                                        return e.connectWith.constructor == String ? [e.connectWith] : e.connectWith
                                      },
                                      _getItemsAsjQuery: function(t) {
                                        var i = [],
                                        n = [],
                                        s = this._connectWith();
                                        if (s && t)
                                        for (var o = s.length - 1; o >= 0; o--)
                                        for (var a = e(s[o]), r = a.length - 1; r >= 0; r--) {
                                          var l = e.data(a[r], this.widgetName);
                                          l && l != this && !l.options.disabled && n.push([e.isFunction(l.options.items) ? l.options.items.call(l.element) : e(l.options.items, l.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), l])
                                        }
                                        n.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                                          options: this.options,
                                          item: this.currentItem
                                        }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
                                        for (var o = n.length - 1; o >= 0; o--) n[o][0].each(function() {
                                          i.push(this)
                                        });
                                        return e(i)
                                      },
                                      _removeCurrentsFromItems: function() {
                                        var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
                                        this.items = e.grep(this.items, function(e) {
                                          for (var i = 0; i < t.length; i++)
                                          if (t[i] == e.item[0]) return !1;
                                          return !0
                                        })
                                      },
                                      _refreshItems: function(t) {
                                        this.items = [], this.containers = [this];
                                        var i = this.items,
                                        n = [
                                        [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                                          item: this.currentItem
                                        }) : e(this.options.items, this.element), this]
                                        ],
                                        s = this._connectWith();
                                        if (s && this.ready)
                                        for (var o = s.length - 1; o >= 0; o--)
                                        for (var a = e(s[o]), r = a.length - 1; r >= 0; r--) {
                                          var l = e.data(a[r], this.widgetName);
                                          l && l != this && !l.options.disabled && (n.push([e.isFunction(l.options.items) ? l.options.items.call(l.element[0], t, {
                                            item: this.currentItem
                                          }) : e(l.options.items, l.element), l]), this.containers.push(l))
                                        }
                                        for (var o = n.length - 1; o >= 0; o--)
                                        for (var c = n[o][1], u = n[o][0], r = 0, h = u.length; h > r; r++) {
                                          var d = e(u[r]);
                                          d.data(this.widgetName + "-item", c), i.push({
                                            item: d,
                                            instance: c,
                                            width: 0,
                                            height: 0,
                                            left: 0,
                                            top: 0
                                          })
                                        }
                                      },
                                      refreshPositions: function(t) {
                                        this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                                        for (var i = this.items.length - 1; i >= 0; i--) {
                                          var n = this.items[i];
                                          if (n.instance == this.currentContainer || !this.currentContainer || n.item[0] == this.currentItem[0]) {
                                            var s = this.options.toleranceElement ? e(this.options.toleranceElement, n.item) : n.item;
                                            t || (n.width = s.outerWidth(), n.height = s.outerHeight());
                                            var o = s.offset();
                                            n.left = o.left, n.top = o.top
                                          }
                                        }
                                        if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                                        else
                                        for (var i = this.containers.length - 1; i >= 0; i--) {
                                          var o = this.containers[i].element.offset();
                                          this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight()
                                        }
                                        return this
                                      },
                                      _createPlaceholder: function(t) {
                                        t = t || this;
                                        var i = t.options;
                                        if (!i.placeholder || i.placeholder.constructor == String) {
                                          var n = i.placeholder;
                                          i.placeholder = {
                                            element: function() {
                                              var i = e(document.createElement(t.currentItem[0].nodeName)).addClass(n || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                                              return n || (i.style.visibility = "hidden"), i
                                            },
                                            update: function(e, s) {
                                              (!n || i.forcePlaceholderSize) && (s.height() || s.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                                            }
                                          }
                                        }
                                        t.placeholder = e(i.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), i.placeholder.update(t, t.placeholder)
                                      },
                                      _contactContainers: function(t) {
                                        for (var i = null, n = null, s = this.containers.length - 1; s >= 0; s--)
                                        if (!e.contains(this.currentItem[0], this.containers[s].element[0]))
                                        if (this._intersectsWith(this.containers[s].containerCache)) {
                                          if (i && e.contains(this.containers[s].element[0], i.element[0])) continue;
                                          i = this.containers[s], n = s
                                        } else this.containers[s].containerCache.over && (this.containers[s]._trigger("out", t, this._uiHash(this)), this.containers[s].containerCache.over = 0);
                                        if (i)
                                        if (1 === this.containers.length) this.containers[n]._trigger("over", t, this._uiHash(this)), this.containers[n].containerCache.over = 1;
                                        else {
                                          for (var o = 1e4, a = null, r = this.containers[n].floating ? "left" : "top", l = this.containers[n].floating ? "width" : "height", c = this.positionAbs[r] + this.offset.click[r], u = this.items.length - 1; u >= 0; u--)
                                          if (e.contains(this.containers[n].element[0], this.items[u].item[0]) && this.items[u].item[0] != this.currentItem[0]) {
                                            var h = this.items[u].item.offset()[r],
                                            d = !1;
                                            Math.abs(h - c) > Math.abs(h + this.items[u][l] - c) && (d = !0, h += this.items[u][l]), Math.abs(h - c) < o && (o = Math.abs(h - c), a = this.items[u], this.direction = d ? "up" : "down")
                                          }
                                          if (!a && !this.options.dropOnEmpty) return;
                                          this.currentContainer = this.containers[n], a ? this._rearrange(t, a, null, !0) : this._rearrange(t, null, this.containers[n].element, !0), this._trigger("change", t, this._uiHash()), this.containers[n]._trigger("change", t, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[n]._trigger("over", t, this._uiHash(this)), this.containers[n].containerCache.over = 1
                                        }
                                      },
                                      _createHelper: function(t) {
                                        var i = this.options,
                                        n = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" == i.helper ? this.currentItem.clone() : this.currentItem;
                                        return n.parents("body").length || e("parent" != i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] == this.currentItem[0] && (this._storedCSS = {
                                          width: this.currentItem[0].style.width,
                                          height: this.currentItem[0].style.height,
                                          position: this.currentItem.css("position"),
                                          top: this.currentItem.css("top"),
                                          left: this.currentItem.css("left")
                                        }), ("" == n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), ("" == n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), n
                                      },
                                      _adjustOffsetFromHelper: function(t) {
                                        "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                                          left: +t[0],
                                          top: +t[1] || 0
                                        }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
                                      },
                                      _getParentOffset: function() {
                                        this.offsetParent = this.helper.offsetParent();
                                        var t = this.offsetParent.offset();
                                        return "absolute" == this.cssPosition && this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                                          top: 0,
                                          left: 0
                                        }), {
                                          top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                                          left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                                        }
                                      },
                                      _getRelativeOffset: function() {
                                        if ("relative" == this.cssPosition) {
                                          var e = this.currentItem.position();
                                          return {
                                            top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                                            left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                                          }
                                        }
                                        return {
                                          top: 0,
                                          left: 0
                                        }
                                      },
                                      _cacheMargins: function() {
                                        this.margins = {
                                          left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                                          top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                                        }
                                      },
                                      _cacheHelperProportions: function() {
                                        this.helperProportions = {
                                          width: this.helper.outerWidth(),
                                          height: this.helper.outerHeight()
                                        }
                                      },
                                      _setContainment: function() {
                                        var t = this.options;
                                        if ("parent" == t.containment && (t.containment = this.helper[0].parentNode), ("document" == t.containment || "window" == t.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e("document" == t.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (e("document" == t.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), !/^(document|window|parent)$/.test(t.containment)) {
                                          var i = e(t.containment)[0],
                                          n = e(t.containment).offset(),
                                          s = "hidden" != e(i).css("overflow");
                                          this.containment = [n.left + (parseInt(e(i).css("borderLeftWidth"), 10) || 0) + (parseInt(e(i).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(e(i).css("borderTopWidth"), 10) || 0) + (parseInt(e(i).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (s ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(e(i).css("borderLeftWidth"), 10) || 0) - (parseInt(e(i).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (s ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(e(i).css("borderTopWidth"), 10) || 0) - (parseInt(e(i).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
                                        }
                                      },
                                      _convertPositionTo: function(t, i) {
                                        i || (i = this.position);
                                        var n = "absolute" == t ? 1 : -1,
                                        s = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
                                        o = /(html|body)/i.test(s[0].tagName);
                                        return {
                                          top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
                                          left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n
                                        }
                                      },
                                      _generatePosition: function(t) {
                                        var i = this.options,
                                        n = "absolute" != this.cssPosition || this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                                        s = /(html|body)/i.test(n[0].tagName);
                                        "relative" != this.cssPosition || this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset());
                                        var o = t.pageX,
                                        a = t.pageY;
                                        if (this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), i.grid)) {
                                          var r = this.originalPageY + Math.round((a - this.originalPageY) / i.grid[1]) * i.grid[1];
                                          a = this.containment && (r - this.offset.click.top < this.containment[1] || r - this.offset.click.top > this.containment[3]) ? r - this.offset.click.top < this.containment[1] ? r + i.grid[1] : r - i.grid[1] : r;
                                          var l = this.originalPageX + Math.round((o - this.originalPageX) / i.grid[0]) * i.grid[0];
                                          o = this.containment && (l - this.offset.click.left < this.containment[0] || l - this.offset.click.left > this.containment[2]) ? l - this.offset.click.left < this.containment[0] ? l + i.grid[0] : l - i.grid[0] : l
                                        }
                                        return {
                                          top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()),
                                          left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft())
                                        }
                                      },
                                      _rearrange: function(e, t, i, n) {
                                        i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" == this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                                        var s = this.counter;
                                        this._delay(function() {
                                          s == this.counter && this.refreshPositions(!n)
                                        })
                                      },
                                      _clear: function(t, i) {
                                        this.reverting = !1;
                                        var n = [];
                                        if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
                                          for (var s in this._storedCSS)("auto" == this._storedCSS[s] || "static" == this._storedCSS[s]) && (this._storedCSS[s] = "");
                                          this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                                        } else this.currentItem.show();
                                        this.fromOutside && !i && n.push(function(e) {
                                          this._trigger("receive", e, this._uiHash(this.fromOutside))
                                        }), !this.fromOutside && this.domPosition.prev == this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent == this.currentItem.parent()[0] || i || n.push(function(e) {
                                          this._trigger("update", e, this._uiHash())
                                        }), this !== this.currentContainer && (i || (n.push(function(e) {
                                          this._trigger("remove", e, this._uiHash())
                                        }), n.push(function(e) {
                                          return function(t) {
                                            e._trigger("receive", t, this._uiHash(this))
                                          }
                                        }.call(this, this.currentContainer)), n.push(function(e) {
                                          return function(t) {
                                            e._trigger("update", t, this._uiHash(this))
                                          }
                                        }.call(this, this.currentContainer))));
                                        for (var s = this.containers.length - 1; s >= 0; s--) i || n.push(function(e) {
                                          return function(t) {
                                            e._trigger("deactivate", t, this._uiHash(this))
                                          }
                                        }.call(this, this.containers[s])), this.containers[s].containerCache.over && (n.push(function(e) {
                                          return function(t) {
                                            e._trigger("out", t, this._uiHash(this))
                                          }
                                        }.call(this, this.containers[s])), this.containers[s].containerCache.over = 0);
                                        if (this._storedCursor && e("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" == this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                                          if (!i) {
                                            this._trigger("beforeStop", t, this._uiHash());
                                            for (var s = 0; s < n.length; s++) n[s].call(this, t);
                                            this._trigger("stop", t, this._uiHash())
                                          }
                                          return this.fromOutside = !1, !1
                                        }
                                        if (i || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, !i) {
                                          for (var s = 0; s < n.length; s++) n[s].call(this, t);
                                          this._trigger("stop", t, this._uiHash())
                                        }
                                        return this.fromOutside = !1, !0
                                      },
                                      _trigger: function() {
                                        e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
                                      },
                                      _uiHash: function(t) {
                                        var i = t || this;
                                        return {
                                          helper: i.helper,
                                          placeholder: i.placeholder || e([]),
                                          position: i.position,
                                          originalPosition: i.originalPosition,
                                          offset: i.positionAbs,
                                          item: i.currentItem,
                                          sender: t ? t.element : null
                                        }
                                      }
                                    })
                                  }(jQuery),
                                  function(e) {
                                    function t(e) {
                                      return function() {
                                        var t = this.element.val();
                                        e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
                                      }
                                    }
                                    e.widget("ui.spinner", {
                                      version: "1.9.2",
                                      defaultElement: "<input>",
                                      widgetEventPrefix: "spin",
                                      options: {
                                        culture: null,
                                        icons: {
                                          down: "ui-icon-triangle-1-s",
                                          up: "ui-icon-triangle-1-n"
                                        },
                                        incremental: !0,
                                        max: null,
                                        min: null,
                                        numberFormat: null,
                                        page: 10,
                                        step: 1,
                                        change: null,
                                        spin: null,
                                        start: null,
                                        stop: null
                                      },
                                      _create: function() {
                                        this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                                          beforeunload: function() {
                                            this.element.removeAttr("autocomplete")
                                          }
                                        })
                                      },
                                      _getCreateOptions: function() {
                                        var t = {},
                                        i = this.element;
                                        return e.each(["min", "max", "step"], function(e, n) {
                                          var s = i.attr(n);
                                          void 0 !== s && s.length && (t[n] = s)
                                        }), t
                                      },
                                      _events: {
                                        keydown: function(e) {
                                          this._start(e) && this._keydown(e) && e.preventDefault()
                                        },
                                        keyup: "_stop",
                                        focus: function() {
                                          this.previous = this.element.val()
                                        },
                                        blur: function(e) {
                                          return this.cancelBlur ? void delete this.cancelBlur : (this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", e)))
                                        },
                                        mousewheel: function(e, t) {
                                          if (t) {
                                            if (!this.spinning && !this._start(e)) return !1;
                                            this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                                              this.spinning && this._stop(e)
                                            }, 100), e.preventDefault()
                                          }
                                        },
                                        "mousedown .ui-spinner-button": function(t) {
                                          function i() {
                                            var e = this.element[0] === this.document[0].activeElement;
                                            e || (this.element.focus(), this.previous = n, this._delay(function() {
                                              this.previous = n
                                            }))
                                          }
                                          var n;
                                          n = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
                                            delete this.cancelBlur, i.call(this)
                                          }), this._start(t) !== !1 && this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                                        },
                                        "mouseup .ui-spinner-button": "_stop",
                                        "mouseenter .ui-spinner-button": function(t) {
                                          return e(t.currentTarget).hasClass("ui-state-active") ? this._start(t) === !1 ? !1 : void this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t) : void 0
                                        },
                                        "mouseleave .ui-spinner-button": "_stop"
                                      },
                                      _draw: function() {
                                        var e = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                                        this.element.attr("role", "spinbutton"), this.buttons = e.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * e.height()) && e.height() > 0 && e.height(e.height()), this.options.disabled && this.disable()
                                      },
                                      _keydown: function(t) {
                                        var i = this.options,
                                        n = e.ui.keyCode;
                                        switch (t.keyCode) {
                                          case n.UP:
                                          return this._repeat(null, 1, t), !0;
                                          case n.DOWN:
                                          return this._repeat(null, -1, t), !0;
                                          case n.PAGE_UP:
                                          return this._repeat(null, i.page, t), !0;
                                          case n.PAGE_DOWN:
                                          return this._repeat(null, -i.page, t), !0
                                        }
                                        return !1
                                      },
                                      _uiSpinnerHtml: function() {
                                        return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
                                      },
                                      _buttonHtml: function() {
                                        return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
                                      },
                                      _start: function(e) {
                                        return this.spinning || this._trigger("start", e) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
                                      },
                                      _repeat: function(e, t, i) {
                                        e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                                          this._repeat(40, t, i)
                                        }, e), this._spin(t * this.options.step, i)
                                      },
                                      _spin: function(e, t) {
                                        var i = this.value() || 0;
                                        this.counter || (this.counter = 1), i = this._adjustValue(i + e * this._increment(this.counter)), this.spinning && this._trigger("spin", t, {
                                          value: i
                                        }) === !1 || (this._value(i), this.counter++)
                                      },
                                      _increment: function(t) {
                                        var i = this.options.incremental;
                                        return i ? e.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
                                      },
                                      _precision: function() {
                                        var e = this._precisionOf(this.options.step);
                                        return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
                                      },
                                      _precisionOf: function(e) {
                                        var t = e.toString(),
                                        i = t.indexOf(".");
                                        return -1 === i ? 0 : t.length - i - 1
                                      },
                                      _adjustValue: function(e) {
                                        var t, i, n = this.options;
                                        return t = null !== n.min ? n.min : 0, i = e - t, i = Math.round(i / n.step) * n.step, e = t + i, e = parseFloat(e.toFixed(this._precision())), null !== n.max && e > n.max ? n.max : null !== n.min && e < n.min ? n.min : e
                                      },
                                      _stop: function(e) {
                                        this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e))
                                      },
                                      _setOption: function(e, t) {
                                        if ("culture" === e || "numberFormat" === e) {
                                          var i = this._parse(this.element.val());
                                          return this.options[e] = t, void this.element.val(this._format(i))
                                        }("max" === e || "min" === e || "step" === e) && "string" == typeof t && (t = this._parse(t)), this._super(e, t), "disabled" === e && (t ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
                                      },
                                      _setOptions: t(function(e) {
                                        this._super(e), this._value(this.element.val())
                                      }),
                                      _parse: function(e) {
                                        return "string" == typeof e && "" !== e && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), "" === e || isNaN(e) ? null : e
                                      },
                                      _format: function(e) {
                                        return "" === e ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e
                                      },
                                      _refresh: function() {
                                        this.element.attr({
                                          "aria-valuemin": this.options.min,
                                          "aria-valuemax": this.options.max,
                                          "aria-valuenow": this._parse(this.element.val())
                                        })
                                      },
                                      _value: function(e, t) {
                                        var i;
                                        "" !== e && (i = this._parse(e), null !== i && (t || (i = this._adjustValue(i)), e = this._format(i))), this.element.val(e), this._refresh()
                                      },
                                      _destroy: function() {
                                        this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
                                      },
                                      stepUp: t(function(e) {
                                        this._stepUp(e)
                                      }),
                                      _stepUp: function(e) {
                                        this._spin((e || 1) * this.options.step)
                                      },
                                      stepDown: t(function(e) {
                                        this._stepDown(e)
                                      }),
                                      _stepDown: function(e) {
                                        this._spin((e || 1) * -this.options.step)
                                      },
                                      pageUp: t(function(e) {
                                        this._stepUp((e || 1) * this.options.page)
                                      }),
                                      pageDown: t(function(e) {
                                        this._stepDown((e || 1) * this.options.page)
                                      }),
                                      value: function(e) {
                                        return arguments.length ? void t(this._value).call(this, e) : this._parse(this.element.val())
                                      },
                                      widget: function() {
                                        return this.uiSpinner
                                      }
                                    })
                                  }(jQuery),
                                  function(e, t) {
                                    function i() {
                                      return ++s
                                    }

                                    function n(e) {
                                      return e.hash.length > 1 && e.href.replace(o, "") === location.href.replace(o, "").replace(/\s/g, "%20")
                                    }
                                    var s = 0,
                                    o = /#.*$/;
                                    e.widget("ui.tabs", {
                                      version: "1.9.2",
                                      delay: 300,
                                      options: {
                                        active: null,
                                        collapsible: !1,
                                        event: "click",
                                        heightStyle: "content",
                                        hide: null,
                                        show: null,
                                        activate: null,
                                        beforeActivate: null,
                                        beforeLoad: null,
                                        load: null
                                      },
                                      _create: function() {
                                        var t = this,
                                        i = this.options,
                                        n = i.active,
                                        s = location.hash.substring(1);
                                        this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(t) {
                                          e(this).is(".ui-state-disabled") && t.preventDefault()
                                        }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                                          e(this).closest("li").is(".ui-state-disabled") && this.blur()
                                        }), this._processTabs(), null === n && (s && this.tabs.each(function(t, i) {
                                          return e(i).attr("aria-controls") === s ? (n = t, !1) : void 0
                                        }), null === n && (n = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === n || -1 === n) && (n = this.tabs.length ? 0 : !1)), n !== !1 && (n = this.tabs.index(this.tabs.eq(n)), -1 === n && (n = i.collapsible ? !1 : 0)), i.active = n, !i.collapsible && i.active === !1 && this.anchors.length && (i.active = 0), e.isArray(i.disabled) && (i.disabled = e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function(e) {
                                          return t.tabs.index(e)
                                        }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(this.options.active) : e(), this._refresh(), this.active.length && this.load(i.active)
                                      },
                                      _getCreateEventData: function() {
                                        return {
                                          tab: this.active,
                                          panel: this.active.length ? this._getPanelForTab(this.active) : e()
                                        }
                                      },
                                      _tabKeydown: function(t) {
                                        var i = e(this.document[0].activeElement).closest("li"),
                                        n = this.tabs.index(i),
                                        s = !0;
                                        if (!this._handlePageNav(t)) {
                                          switch (t.keyCode) {
                                            case e.ui.keyCode.RIGHT:
                                            case e.ui.keyCode.DOWN:
                                            n++;
                                            break;
                                            case e.ui.keyCode.UP:
                                            case e.ui.keyCode.LEFT:
                                            s = !1, n--;
                                            break;
                                            case e.ui.keyCode.END:
                                            n = this.anchors.length - 1;
                                            break;
                                            case e.ui.keyCode.HOME:
                                            n = 0;
                                            break;
                                            case e.ui.keyCode.SPACE:
                                            return t.preventDefault(), clearTimeout(this.activating), void this._activate(n);
                                            case e.ui.keyCode.ENTER:
                                            return t.preventDefault(), clearTimeout(this.activating), void this._activate(n === this.options.active ? !1 : n);
                                            default:
                                            return
                                          }
                                          t.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, s), t.ctrlKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function() {
                                            this.option("active", n)
                                          }, this.delay))
                                        }
                                      },
                                      _panelKeydown: function(t) {
                                        this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
                                      },
                                      _handlePageNav: function(t) {
                                        return t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
                                      },
                                      _findNextTab: function(t, i) {
                                        function n() {
                                          return t > s && (t = 0), 0 > t && (t = s), t
                                        }
                                        for (var s = this.tabs.length - 1; - 1 !== e.inArray(n(), this.options.disabled);) t = i ? t + 1 : t - 1;
                                        return t
                                      },
                                      _focusNextTab: function(e, t) {
                                        return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e
                                      },
                                      _setOption: function(e, t) {
                                        return "active" === e ? void this._activate(t) : "disabled" === e ? void this._setupDisabled(t) : (this._super(e, t), "collapsible" === e && (this.element.toggleClass("ui-tabs-collapsible", t), t || this.options.active !== !1 || this._activate(0)), "event" === e && this._setupEvents(t), void("heightStyle" === e && this._setupHeightStyle(t)))
                                      },
                                      _tabId: function(e) {
                                        return e.attr("aria-controls") || "ui-tabs-" + i()
                                      },
                                      _sanitizeSelector: function(e) {
                                        return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
                                      },
                                      refresh: function() {
                                        var t = this.options,
                                        i = this.tablist.children(":has(a[href])");
                                        t.disabled = e.map(i.filter(".ui-state-disabled"), function(e) {
                                          return i.index(e)
                                        }), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = e()), this._refresh()
                                      },
                                      _refresh: function() {
                                        this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                                          "aria-selected": "false",
                                          tabIndex: -1
                                        }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                                          "aria-expanded": "false",
                                          "aria-hidden": "true"
                                        }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                                          "aria-selected": "true",
                                          tabIndex: 0
                                        }), this._getPanelForTab(this.active).show().attr({
                                          "aria-expanded": "true",
                                          "aria-hidden": "false"
                                        })) : this.tabs.eq(0).attr("tabIndex", 0)
                                      },
                                      _processTabs: function() {
                                        var t = this;
                                        this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                                          role: "tab",
                                          tabIndex: -1
                                        }), this.anchors = this.tabs.map(function() {
                                          return e("a", this)[0]
                                        }).addClass("ui-tabs-anchor").attr({
                                          role: "presentation",
                                          tabIndex: -1
                                        }), this.panels = e(), this.anchors.each(function(i, s) {
                                          var o, a, r, l = e(s).uniqueId().attr("id"),
                                          c = e(s).closest("li"),
                                          u = c.attr("aria-controls");
                                          n(s) ? (o = s.hash, a = t.element.find(t._sanitizeSelector(o))) : (r = t._tabId(c), o = "#" + r, a = t.element.find(o), a.length || (a = t._createPanel(r), a.insertAfter(t.panels[i - 1] || t.tablist)), a.attr("aria-live", "polite")), a.length && (t.panels = t.panels.add(a)), u && c.data("ui-tabs-aria-controls", u), c.attr({
                                            "aria-controls": o.substring(1),
                                            "aria-labelledby": l
                                          }), a.attr("aria-labelledby", l)
                                        }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
                                      },
                                      _getList: function() {
                                        return this.element.find("ol,ul").eq(0)
                                      },
                                      _createPanel: function(t) {
                                        return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
                                        },
                                        _setupDisabled: function(t) {
                                          e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
                                          for (var i, n = 0; i = this.tabs[n]; n++) t === !0 || -1 !== e.inArray(n, t) ? e(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                                          this.options.disabled = t
                                        },
                                        _setupEvents: function(t) {
                                          var i = {
                                            click: function(e) {
                                              e.preventDefault()
                                            }
                                          };
                                          t && e.each(t.split(" "), function(e, t) {
                                            i[t] = "_eventHandler"
                                          }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {
                                            keydown: "_tabKeydown"
                                          }), this._on(this.panels, {
                                            keydown: "_panelKeydown"
                                          }), this._focusable(this.tabs), this._hoverable(this.tabs)
                                        },
                                        _setupHeightStyle: function(t) {
                                          var i, n, s = this.element.parent();
                                          "fill" === t ? (e.support.minHeight || (n = s.css("overflow"), s.css("overflow", "hidden")), i = s.height(), this.element.siblings(":visible").each(function() {
                                            var t = e(this),
                                            n = t.css("position");
                                            "absolute" !== n && "fixed" !== n && (i -= t.outerHeight(!0))
                                          }), n && s.css("overflow", n), this.element.children().not(this.panels).each(function() {
                                            i -= e(this).outerHeight(!0)
                                          }), this.panels.each(function() {
                                            e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()))
                                          }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function() {
                                            i = Math.max(i, e(this).height("").height())
                                          }).height(i))
                                        },
                                        _eventHandler: function(t) {
                                          var i = this.options,
                                          n = this.active,
                                          s = e(t.currentTarget),
                                          o = s.closest("li"),
                                          a = o[0] === n[0],
                                          r = a && i.collapsible,
                                          l = r ? e() : this._getPanelForTab(o),
                                          c = n.length ? this._getPanelForTab(n) : e(),
                                          u = {
                                            oldTab: n,
                                            oldPanel: c,
                                            newTab: r ? e() : o,
                                            newPanel: l
                                          };
                                          t.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", t, u) === !1 || (i.active = r ? !1 : this.tabs.index(o), this.active = a ? e() : o, this.xhr && this.xhr.abort(), c.length || l.length || e.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(o), t), this._toggle(t, u))
                                        },
                                        _toggle: function(t, i) {
                                          function n() {
                                            o.running = !1, o._trigger("activate", t, i)
                                          }

                                          function s() {
                                            i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, n) : (a.show(), n())
                                          }
                                          var o = this,
                                          a = i.newPanel,
                                          r = i.oldPanel;
                                          this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
                                            i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), s()
                                          }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), s()), r.attr({
                                            "aria-expanded": "false",
                                            "aria-hidden": "true"
                                          }), i.oldTab.attr("aria-selected", "false"), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
                                            return 0 === e(this).attr("tabIndex")
                                          }).attr("tabIndex", -1), a.attr({
                                            "aria-expanded": "true",
                                            "aria-hidden": "false"
                                          }), i.newTab.attr({
                                            "aria-selected": "true",
                                            tabIndex: 0
                                          })
                                        },
                                        _activate: function(t) {
                                          var i, n = this._findActive(t);
                                          n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({
                                            target: i,
                                            currentTarget: i,
                                            preventDefault: e.noop
                                          }))
                                        },
                                        _findActive: function(t) {
                                          return t === !1 ? e() : this.tabs.eq(t)
                                        },
                                        _getIndex: function(e) {
                                          return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e
                                        },
                                        _destroy: function() {
                                          this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                                            e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                                          }), this.tabs.each(function() {
                                            var t = e(this),
                                            i = t.data("ui-tabs-aria-controls");
                                            i ? t.attr("aria-controls", i) : t.removeAttr("aria-controls")
                                          }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
                                        },
                                        enable: function(i) {
                                          var n = this.options.disabled;
                                          n !== !1 && (i === t ? n = !1 : (i = this._getIndex(i), n = e.isArray(n) ? e.map(n, function(e) {
                                            return e !== i ? e : null
                                          }) : e.map(this.tabs, function(e, t) {
                                            return t !== i ? t : null
                                          })), this._setupDisabled(n))
                                        },
                                        disable: function(i) {
                                          var n = this.options.disabled;
                                          if (n !== !0) {
                                            if (i === t) n = !0;
                                            else {
                                              if (i = this._getIndex(i), -1 !== e.inArray(i, n)) return;
                                              n = e.isArray(n) ? e.merge([i], n).sort() : [i]
                                            }
                                            this._setupDisabled(n)
                                          }
                                        },
                                        load: function(t, i) {
                                          t = this._getIndex(t);
                                          var s = this,
                                          o = this.tabs.eq(t),
                                          a = o.find(".ui-tabs-anchor"),
                                          r = this._getPanelForTab(o),
                                          l = {
                                            tab: o,
                                            panel: r
                                          };
                                          n(a[0]) || (this.xhr = e.ajax(this._ajaxSettings(a, i, l)), this.xhr && "canceled" !== this.xhr.statusText && (o.addClass("ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.success(function(e) {
                                            setTimeout(function() {
                                              r.html(e), s._trigger("load", i, l)
                                            }, 1)
                                          }).complete(function(e, t) {
                                            setTimeout(function() {
                                              "abort" === t && s.panels.stop(!1, !0), o.removeClass("ui-tabs-loading"), r.removeAttr("aria-busy"), e === s.xhr && delete s.xhr
                                            }, 1)
                                          })))
                                        },
                                        _ajaxSettings: function(t, i, n) {
                                          var s = this;
                                          return {
                                            url: t.attr("href"),
                                            beforeSend: function(t, o) {
                                              return s._trigger("beforeLoad", i, e.extend({
                                                jqXHR: t,
                                                ajaxSettings: o
                                              }, n))
                                            }
                                          }
                                        },
                                        _getPanelForTab: function(t) {
                                          var i = e(t).attr("aria-controls");
                                          return this.element.find(this._sanitizeSelector("#" + i))
                                        }
                                      }), e.uiBackCompat !== !1 && (e.ui.tabs.prototype._ui = function(e, t) {
                                        return {
                                          tab: e,
                                          panel: t,
                                          index: this.anchors.index(e)
                                        }
                                      }, e.widget("ui.tabs", e.ui.tabs, {
                                        url: function(e, t) {
                                          this.anchors.eq(e).attr("href", t)
                                        }
                                      }), e.widget("ui.tabs", e.ui.tabs, {
                                        options: {
                                          ajaxOptions: null,
                                          cache: !1
                                        },
                                        _create: function() {
                                          this._super();
                                          var t = this;
                                          this._on({
                                            tabsbeforeload: function(i, n) {
                                              return e.data(n.tab[0], "cache.tabs") ? void i.preventDefault() : void n.jqXHR.success(function() {
                                                t.options.cache && e.data(n.tab[0], "cache.tabs", !0)
                                              })
                                            }
                                          })
                                        },
                                        _ajaxSettings: function(t, i, n) {
                                          var s = this.options.ajaxOptions;
                                          return e.extend({}, s, {
                                            error: function(e, t) {
                                              try {
                                                s.error(e, t, n.tab.closest("li").index(), n.tab[0])
                                              } catch (i) {}
                                            }
                                          }, this._superApply(arguments))
                                        },
                                        _setOption: function(e, t) {
                                          "cache" === e && t === !1 && this.anchors.removeData("cache.tabs"), this._super(e, t)
                                        },
                                        _destroy: function() {
                                          this.anchors.removeData("cache.tabs"), this._super()
                                        },
                                        url: function(e) {
                                          this.anchors.eq(e).removeData("cache.tabs"), this._superApply(arguments)
                                        }
                                      }), e.widget("ui.tabs", e.ui.tabs, {
                                        abort: function() {
                                          this.xhr && this.xhr.abort()
                                        }
                                      }), e.widget("ui.tabs", e.ui.tabs, {
                                        options: {
                                          spinner: "<em>Loading&#8230;</em>"
                                        },
                                        _create: function() {
                                          this._super(), this._on({
                                            tabsbeforeload: function(e, t) {
                                              if (e.target === this.element[0] && this.options.spinner) {
                                                var i = t.tab.find("span"),
                                                n = i.html();
                                                i.html(this.options.spinner), t.jqXHR.complete(function() {
                                                  i.html(n)
                                                })
                                              }
                                            }
                                          })
                                        }
                                      }), e.widget("ui.tabs", e.ui.tabs, {
                                        options: {
                                          enable: null,
                                          disable: null
                                        },
                                        enable: function(t) {
                                          var i, n = this.options;
                                          (t && n.disabled === !0 || e.isArray(n.disabled) && -1 !== e.inArray(t, n.disabled)) && (i = !0), this._superApply(arguments), i && this._trigger("enable", null, this._ui(this.anchors[t], this.panels[t]))
                                        },
                                        disable: function(t) {
                                          var i, n = this.options;
                                          (t && n.disabled === !1 || e.isArray(n.disabled) && -1 === e.inArray(t, n.disabled)) && (i = !0), this._superApply(arguments), i && this._trigger("disable", null, this._ui(this.anchors[t], this.panels[t]))
                                        }
                                      }), e.widget("ui.tabs", e.ui.tabs, {
                                        options: {
                                          add: null,
                                          remove: null,
                                          tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
                                        },
                                        add: function(i, n, s) {
                                          s === t && (s = this.anchors.length);
                                          var o, a, r = this.options,
                                          l = e(r.tabTemplate.replace(/#\{href\}/g, i).replace(/#\{label\}/g, n)),
                                          c = i.indexOf("#") ? this._tabId(l) : i.replace("#", "");
                                          return l.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy", !0), l.attr("aria-controls", c), o = s >= this.tabs.length, a = this.element.find("#" + c), a.length || (a = this._createPanel(c), o ? s > 0 ? a.insertAfter(this.panels.eq(-1)) : a.appendTo(this.element) : a.insertBefore(this.panels[s])), a.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide(), o ? l.appendTo(this.tablist) : l.insertBefore(this.tabs[s]), r.disabled = e.map(r.disabled, function(e) {
                                            return e >= s ? ++e : e
                                          }), this.refresh(), 1 === this.tabs.length && r.active === !1 && this.option("active", 0), this._trigger("add", null, this._ui(this.anchors[s], this.panels[s])), this
                                        },
                                        remove: function(t) {
                                          t = this._getIndex(t);
                                          var i = this.options,
                                          n = this.tabs.eq(t).remove(),
                                          s = this._getPanelForTab(n).remove();
                                          return n.hasClass("ui-tabs-active") && this.anchors.length > 2 && this._activate(t + (t + 1 < this.anchors.length ? 1 : -1)), i.disabled = e.map(e.grep(i.disabled, function(e) {
                                            return e !== t
                                          }), function(e) {
                                            return e >= t ? --e : e
                                          }), this.refresh(), this._trigger("remove", null, this._ui(n.find("a")[0], s[0])), this
                                        }
                                      }), e.widget("ui.tabs", e.ui.tabs, {
                                        length: function() {
                                          return this.anchors.length
                                        }
                                      }), e.widget("ui.tabs", e.ui.tabs, {
                                        options: {
                                          idPrefix: "ui-tabs-"
                                        },
                                        _tabId: function(t) {
                                          var n = t.is("li") ? t.find("a[href]") : t;
                                          return n = n[0], e(n).closest("li").attr("aria-controls") || n.title && n.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF\-]/g, "") || this.options.idPrefix + i()
                                        }
                                      }), e.widget("ui.tabs", e.ui.tabs, {
                                        options: {
                                          panelTemplate: "<div></div>"
                                        },
                                        _createPanel: function(t) {
                                          return e(this.options.panelTemplate).attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
                                        }
                                      }), e.widget("ui.tabs", e.ui.tabs, {
                                        _create: function() {
                                          var e = this.options;
                                          null === e.active && e.selected !== t && (e.active = -1 === e.selected ? !1 : e.selected), this._super(), e.selected = e.active, e.selected === !1 && (e.selected = -1)
                                        },
                                        _setOption: function(e, t) {
                                          if ("selected" !== e) return this._super(e, t);
                                          var i = this.options;
                                          this._super("active", -1 === t ? !1 : t), i.selected = i.active, i.selected === !1 && (i.selected = -1)
                                        },
                                        _eventHandler: function() {
                                          this._superApply(arguments), this.options.selected = this.options.active, this.options.selected === !1 && (this.options.selected = -1)
                                        }
                                      }), e.widget("ui.tabs", e.ui.tabs, {
                                        options: {
                                          show: null,
                                          select: null
                                        },
                                        _create: function() {
                                          this._super(), this.options.active !== !1 && this._trigger("show", null, this._ui(this.active.find(".ui-tabs-anchor")[0], this._getPanelForTab(this.active)[0]))
                                        },
                                        _trigger: function(e, t, i) {
                                          var n, s, o = this._superApply(arguments);
                                          return o ? ("beforeActivate" === e ? (n = i.newTab.length ? i.newTab : i.oldTab, s = i.newPanel.length ? i.newPanel : i.oldPanel, o = this._super("select", t, {
                                            tab: n.find(".ui-tabs-anchor")[0],
                                            panel: s[0],
                                            index: n.closest("li").index()
                                          })) : "activate" === e && i.newTab.length && (o = this._super("show", t, {
                                            tab: i.newTab.find(".ui-tabs-anchor")[0],
                                            panel: i.newPanel[0],
                                            index: i.newTab.closest("li").index()
                                          })), o) : !1
                                        }
                                      }), e.widget("ui.tabs", e.ui.tabs, {
                                        select: function(e) {
                                          if (e = this._getIndex(e), -1 === e) {
                                            if (!this.options.collapsible || -1 === this.options.selected) return;
                                            e = this.options.selected
                                          }
                                          this.anchors.eq(e).trigger(this.options.event + this.eventNamespace)
                                        }
                                      }), function() {
                                        var t = 0;
                                        e.widget("ui.tabs", e.ui.tabs, {
                                          options: {
                                            cookie: null
                                          },
                                          _create: function() {
                                            var e, t = this.options;
                                            null == t.active && t.cookie && (e = parseInt(this._cookie(), 10), -1 === e && (e = !1), t.active = e), this._super()
                                          },
                                          _cookie: function(i) {
                                            var n = [this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + ++t)];
                                            return arguments.length && (n.push(i === !1 ? -1 : i), n.push(this.options.cookie)), e.cookie.apply(null, n)
                                          },
                                          _refresh: function() {
                                            this._super(), this.options.cookie && this._cookie(this.options.active, this.options.cookie)
                                          },
                                          _eventHandler: function() {
                                            this._superApply(arguments), this.options.cookie && this._cookie(this.options.active, this.options.cookie)
                                          },
                                          _destroy: function() {
                                            this._super(), this.options.cookie && this._cookie(null, this.options.cookie)
                                          }
                                        })
                                      }(), e.widget("ui.tabs", e.ui.tabs, {
                                        _trigger: function(t, i, n) {
                                          var s = e.extend({}, n);
                                          return "load" === t && (s.panel = s.panel[0], s.tab = s.tab.find(".ui-tabs-anchor")[0]), this._super(t, i, s)
                                        }
                                      }), e.widget("ui.tabs", e.ui.tabs, {
                                        options: {
                                          fx: null
                                        },
                                        _getFx: function() {
                                          var t, i, n = this.options.fx;
                                          return n && (e.isArray(n) ? (t = n[0], i = n[1]) : t = i = n), n ? {
                                            show: i,
                                            hide: t
                                          } : null
                                        },
                                        _toggle: function(e, t) {
                                          function i() {
                                            s.running = !1, s._trigger("activate", e, t)
                                          }

                                          function n() {
                                            t.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && r.show ? o.animate(r.show, r.show.duration, function() {
                                              i()
                                            }) : (o.show(), i())
                                          }
                                          var s = this,
                                          o = t.newPanel,
                                          a = t.oldPanel,
                                          r = this._getFx();
                                          return r ? (s.running = !0, void(a.length && r.hide ? a.animate(r.hide, r.hide.duration, function() {
                                            t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
                                          }) : (t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), a.hide(), n()))) : this._super(e, t)
                                        }
                                      }))
                                    }(jQuery),
                                    function(e) {
                                      function t(t, i) {
                                        var n = (t.attr("aria-describedby") || "").split(/\s+/);
                                        n.push(i), t.data("ui-tooltip-id", i).attr("aria-describedby", e.trim(n.join(" ")))
                                      }

                                      function i(t) {
                                        var i = t.data("ui-tooltip-id"),
                                        n = (t.attr("aria-describedby") || "").split(/\s+/),
                                        s = e.inArray(i, n); - 1 !== s && n.splice(s, 1), t.removeData("ui-tooltip-id"), n = e.trim(n.join(" ")), n ? t.attr("aria-describedby", n) : t.removeAttr("aria-describedby")
                                      }
                                      var n = 0;
                                      e.widget("ui.tooltip", {
                                        version: "1.9.2",
                                        options: {
                                          content: function() {
                                            return e(this).attr("title")
                                          },
                                          hide: !0,
                                          items: "[title]:not([disabled])",
                                          position: {
                                            my: "left top+15",
                                            at: "left bottom",
                                            collision: "flipfit flip"
                                          },
                                          show: !0,
                                          tooltipClass: null,
                                          track: !1,
                                          close: null,
                                          open: null
                                        },
                                        _create: function() {
                                          this._on({
                                            mouseover: "open",
                                            focusin: "open"
                                          }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
                                        },
                                        _setOption: function(t, i) {
                                          var n = this;
                                          return "disabled" === t ? (this[i ? "_disable" : "_enable"](), void(this.options[t] = i)) : (this._super(t, i), void("content" === t && e.each(this.tooltips, function(e, t) {
                                            n._updateContent(t)
                                          })))
                                        },
                                        _disable: function() {
                                          var t = this;
                                          e.each(this.tooltips, function(i, n) {
                                            var s = e.Event("blur");
                                            s.target = s.currentTarget = n[0], t.close(s, !0)
                                          }), this.element.find(this.options.items).andSelf().each(function() {
                                            var t = e(this);
                                            t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).attr("title", "")
                                          })
                                        },
                                        _enable: function() {
                                          this.element.find(this.options.items).andSelf().each(function() {
                                            var t = e(this);
                                            t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
                                          })
                                        },
                                        open: function(t) {
                                          var i = this,
                                          n = e(t ? t.target : this.element).closest(this.options.items);
                                          n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", !0), t && "mouseover" === t.type && n.parents().each(function() {
                                            var t, n = e(this);
                                            n.data("ui-tooltip-open") && (t = e.Event("blur"), t.target = t.currentTarget = this, i.close(t, !0)), n.attr("title") && (n.uniqueId(), i.parents[this.id] = {
                                              element: this,
                                              title: n.attr("title")
                                            }, n.attr("title", ""))
                                          }), this._updateContent(n, t))
                                        },
                                        _updateContent: function(e, t) {
                                          var i, n = this.options.content,
                                          s = this,
                                          o = t ? t.type : null;
                                          return "string" == typeof n ? this._open(t, e, n) : (i = n.call(e[0], function(i) {
                                            e.data("ui-tooltip-open") && s._delay(function() {
                                              t && (t.type = o), this._open(t, e, i)
                                            })
                                          }), void(i && this._open(t, e, i)))
                                        },
                                        _open: function(i, n, s) {
                                          function o(e) {
                                            c.of = e, a.is(":hidden") || a.position(c)
                                          }
                                          var a, r, l, c = e.extend({}, this.options.position);
                                          if (s) {
                                            if (a = this._find(n), a.length) return void a.find(".ui-tooltip-content").html(s);
                                            n.is("[title]") && (i && "mouseover" === i.type ? n.attr("title", "") : n.removeAttr("title")), a = this._tooltip(n), t(n, a.attr("id")), a.find(".ui-tooltip-content").html(s), this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {
                                              mousemove: o
                                            }), o(i)) : a.position(e.extend({
                                              of: n
                                            }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.show && this.options.show.delay && (l = setInterval(function() {
                                              a.is(":visible") && (o(c.of), clearInterval(l))
                                            }, e.fx.interval)), this._trigger("open", i, {
                                              tooltip: a
                                            }), r = {
                                              keyup: function(t) {
                                                if (t.keyCode === e.ui.keyCode.ESCAPE) {
                                                  var i = e.Event(t);
                                                  i.currentTarget = n[0], this.close(i, !0)
                                                }
                                              },
                                              remove: function() {
                                                this._removeTooltip(a)
                                              }
                                            }, i && "mouseover" !== i.type || (r.mouseleave = "close"), i && "focusin" !== i.type || (r.focusout = "close"), this._on(!0, n, r)
                                          }
                                        },
                                        close: function(t) {
                                          var n = this,
                                          s = e(t ? t.currentTarget : this.element),
                                          o = this._find(s);
                                          this.closing || (s.data("ui-tooltip-title") && s.attr("title", s.data("ui-tooltip-title")), i(s), o.stop(!0), this._hide(o, this.options.hide, function() {
                                            n._removeTooltip(e(this))
                                          }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && e.each(this.parents, function(t, i) {
                                            e(i.element).attr("title", i.title), delete n.parents[t]
                                          }), this.closing = !0, this._trigger("close", t, {
                                            tooltip: o
                                          }), this.closing = !1)
                                        },
                                        _tooltip: function(t) {
                                          var i = "ui-tooltip-" + n++,
                                          s = e("<div>").attr({
                                            id: i,
                                            role: "tooltip"
                                          }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
                                          return e("<div>").addClass("ui-tooltip-content").appendTo(s), s.appendTo(this.document[0].body), e.fn.bgiframe && s.bgiframe(), this.tooltips[i] = t, s
                                          },
                                          _find: function(t) {
                                            var i = t.data("ui-tooltip-id");
                                            return i ? e("#" + i) : e()
                                          },
                                          _removeTooltip: function(e) {
                                            e.remove(), delete this.tooltips[e.attr("id")]
                                          },
                                          _destroy: function() {
                                            var t = this;
                                            e.each(this.tooltips, function(i, n) {
                                              var s = e.Event("blur");
                                              s.target = s.currentTarget = n[0], t.close(s, !0), e("#" + i).remove(), n.data("ui-tooltip-title") && (n.attr("title", n.data("ui-tooltip-title")), n.removeData("ui-tooltip-title"))
                                            })
                                          }
                                        })
                                      }(jQuery),
                                      function(e) {
                                        function t(e, t) {
                                          if (!(e.originalEvent.touches.length > 1)) {
                                            e.preventDefault();
                                            var i = e.originalEvent.changedTouches[0],
                                            n = document.createEvent("MouseEvents");
                                            n.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(n)
                                          }
                                        }
                                        if (e.support.touch = "ontouchend" in document, e.support.touch) {
                                          var i, n = e.ui.mouse.prototype,
                                          s = n._mouseInit;
                                          n._touchStart = function(e) {
                                            var n = this;
                                            !i && n._mouseCapture(e.originalEvent.changedTouches[0]) && (i = !0, n._touchMoved = !1, t(e, "mouseover"), t(e, "mousemove"), t(e, "mousedown"))
                                          }, n._touchMove = function(e) {
                                            i && (this._touchMoved = !0, t(e, "mousemove"))
                                          }, n._touchEnd = function(e) {
                                            i && (t(e, "mouseup"), t(e, "mouseout"), this._touchMoved || t(e, "click"), i = !1)
                                          }, n._mouseInit = function() {
                                            var t = this;
                                            t.element.bind("touchstart", e.proxy(t, "_touchStart")).bind("touchmove", e.proxy(t, "_touchMove")).bind("touchend", e.proxy(t, "_touchEnd")), s.call(t)
                                          }
                                        }
                                      }(jQuery), jQuery.fn.fullScreen = d, jQuery.fn.toggleFullScreen = function() {
                                        return d.call(this, !d.call(this))
                                      };
                                      var e, f, g;
                                      e = document, e.webkitCancelFullScreen ? (f = "webkitfullscreenchange", g = "webkitfullscreenerror") : e.msExitFullscreen ? (f = "MSFullscreenChange", g = "MSFullscreenError") : e.mozCancelFullScreen ? (f = "mozfullscreenchange", g = "mozfullscreenerror") : (f = "fullscreenchange", g = "fullscreenerror"), jQuery(document).bind(f, function() {
                                        jQuery(document).trigger(new jQuery.Event("fullscreenchange"))
                                      }), jQuery(document).bind(g, function() {
                                        jQuery(document).trigger(new jQuery.Event("fullscreenerror"))
                                      }),
                                      function(e) {
                                        function t() {
                                          var e = o();
                                          e !== a && (a = e, c.trigger("orientationchange"))
                                        }

                                        function i(t, i, n) {
                                          var s = n.type;
                                          n.type = i, e.event.dispatch.call(t, n), n.type = s
                                        }
                                        e.attrFn = e.attrFn || {};
                                        var n = {
                                          swipe_h_threshold: 50,
                                          swipe_v_threshold: 50,
                                          taphold_threshold: 750,
                                          doubletap_int: 500,
                                          touch_capable: "ontouchstart" in document.documentElement && -1 == navigator.userAgent.toLowerCase().indexOf("chrome"),
                                          orientation_support: "orientation" in window && "onorientationchange" in window,
                                          startevent: "touchstart mousedown",
                                          endevent: "touchend mouseup",
                                          moveevent: "touchmove mousemove",
                                          tapevent: "tap click",
                                          scrollevent: "touchmove scroll",
                                          hold_timer: null,
                                          tap_timer: null
                                        };
                                        e.each("tapstart tapend tap singletap doubletap taphold swipe swipeup swiperight swipedown swipeleft scrollstart scrollend orientationchange".split(" "), function(t, i) {
                                          e.fn[i] = function(e) {
                                            return e ? this.bind(i, e) : this.trigger(i)
                                          }, e.attrFn[i] = !0
                                        }), e.event.special.tapstart = {
                                          setup: function() {
                                            var t = this,
                                            s = e(t);
                                            s.bind(n.startevent, function(e) {
                                              return e.which && 1 !== e.which ? !1 : (i(t, "tapstart", e), !0)
                                            })
                                          }
                                        }, e.event.special.tapend = {
                                          setup: function() {
                                            var t = this,
                                            s = e(t);
                                            s.bind(n.endevent, function(e) {
                                              i(t, "tapend", e)
                                            })
                                          }
                                        }, e.event.special.taphold = {
                                          setup: function() {
                                            var t, s = this,
                                            o = e(s),
                                            a = {
                                              x: 0,
                                              y: 0
                                            };
                                            o.bind(n.startevent, function(e) {
                                              return e.which && 1 !== e.which ? !1 : (o.data("tapheld", !1), t = e.target, a.x = n.touch_capabale ? e.targetTouches[0].pageX : e.pageX, a.y = n.touch_capabale ? e.targetTouches[0].pageY : e.pageY, n.hold_timer = window.setTimeout(function() {
                                                var r = n.touch_capabale ? e.targetTouches[0].pageX : e.pageX,
                                                l = n.touch_capabale ? e.targetTouches[0].pageY : e.pageY;
                                                e.target == t && a.x == r && a.y == l && (o.data("tapheld", !0), i(s, "taphold", e))
                                              }, n.taphold_threshold), !0)
                                            }).bind(n.endevent, function() {
                                              window.clearTimeout(n.hold_timer)
                                            })
                                          }
                                        }, e.event.special.doubletap = {
                                          setup: function() {
                                            var t, s, o = this,
                                            a = e(o);
                                            a.bind(n.startevent, function(e) {
                                              return e.which && 1 !== e.which ? !1 : (a.data("doubletapped", !1), t = e.target, !0)
                                            }).bind(n.endevent, function(e) {
                                              var r = (new Date).getTime(),
                                              l = a.data("lastTouch") || r + 1,
                                              c = r - l;
                                              window.clearTimeout(s), c < n.doubletap_int && c > 0 && e.target == t && c > 100 ? (a.data("doubletapped", !0), window.clearTimeout(n.tap_timer), i(o, "doubletap", e)) : (a.data("lastTouch", r), s = window.setTimeout(function() {
                                                window.clearTimeout(s)
                                              }, n.doubletap_int, [e])), a.data("lastTouch", r)
                                            })
                                          }
                                        }, e.event.special.singletap = {
                                          setup: function() {
                                            var t = this,
                                            s = e(t),
                                            o = null,
                                            a = null;
                                            s.bind(n.startevent, function(e) {
                                              return e.which && 1 !== e.which ? !1 : (a = (new Date).getTime(), o = e.target, !0)
                                            }).bind(n.endevent, function(e) {
                                              e.target == o && (n.tap_timer = window.setTimeout(function() {
                                                s.data("doubletapped") || s.data("tapheld") || i(t, "singletap", e)
                                              }, n.doubletap_int))
                                            })
                                          }
                                        }, e.event.special.tap = {
                                          setup: function() {
                                            var t, s = this,
                                            o = e(s),
                                            a = !1,
                                            r = null,
                                            l = {
                                              x: 0,
                                              y: 0
                                            };
                                            o.bind(n.startevent, function(e) {
                                              return e.which && 1 !== e.which ? !1 : (a = !0, l.x = n.touch_capabale ? e.targetTouches[0].pageX : e.pageX, l.y = n.touch_capabale ? e.targetTouches[0].pageY : e.pageY, t = (new Date).getTime(), r = e.target, !0)
                                            }).bind(n.endevent, function(e) {
                                              var o = n.touch_capabale ? e.targetTouches[0].pageX : e.pageX,
                                              c = n.touch_capabale ? e.targetTouches[0].pageY : e.pageY;
                                              r == e.target && a && (new Date).getTime() - t < n.taphold_threshold && l.x == o && l.y == c && i(s, "tap", e)
                                            })
                                          }
                                        }, e.event.special.swipe = {
                                          setup: function() {
                                            function t(e) {
                                              l.x = n.touch_capable ? e.targetTouches[0].pageX : e.pageX, l.y = n.touch_capable ? e.targetTouches[0].pageY : e.pageY, c.x = l.x, c.y = l.y, r = !0
                                            }

                                            function i(e) {
                                              e.stopPropagation(), c.x = n.touch_capable ? e.targetTouches[0].pageX : e.pageX, c.y = n.touch_capable ? e.targetTouches[0].pageY : e.pageY, window.clearTimeout(n.hold_timer);
                                              var t, i = a.attr("data-xthreshold"),
                                              s = a.attr("data-ythreshold"),
                                              o = "undefined" != typeof i && i !== !1 && parseInt(i) ? parseInt(i) : n.swipe_h_threshold,
                                              u = "undefined" != typeof s && s !== !1 && parseInt(s) ? parseInt(s) : n.swipe_v_threshold;
                                              l.y > c.y && l.y - c.y > u && (t = "swipeup"), l.x < c.x && c.x - l.x > o && (t = "swiperight"), l.y < c.y && c.y - l.y > u && (t = "swipedown"), l.x > c.x && l.x - c.x > o && (t = "swipeleft"), void 0 != t && r && (l.x = 0, l.y = 0, c.x = 0, c.y = 0, a.trigger("swipe").trigger(t), r = !1)
                                            }

                                            function s() {
                                              r = !1
                                            }
                                            var o = this,
                                            a = e(o),
                                            r = !1,
                                            l = {
                                              x: 0,
                                              y: 0
                                            },
                                            c = {
                                              x: 0,
                                              y: 0
                                            };
                                            o.addEventListener ? (o.addEventListener(n.startevent, t, !1), o.addEventListener(n.moveevent, i, !1), o.addEventListener(n.endevent, s, !1)) : (o.attachEvent(n.startevent, t), o.attachEvent(n.moveevent, i), o.attachEvent(n.endevent, s))
                                          }
                                        }, e.event.special.scrollstart = {
                                          setup: function() {
                                            function t(e, t) {
                                              s = t, i(a, s ? "scrollstart" : "scrollend", e)
                                            }
                                            var s, o, a = this,
                                            r = e(a);
                                            r.bind(n.scrollevent, function(e) {
                                              s || t(e, !0), clearTimeout(o), o = setTimeout(function() {
                                                t(e, !1)
                                              }, 50)
                                            })
                                          }
                                        };
                                        var s, o, a, r, l, c = e(window),
                                        u = {
                                          0: !0,
                                          180: !0
                                        };
                                        if (n.orientation_support) {
                                          var h = window.innerWidth || e(window).width(),
                                          d = window.innerHeight || e(window).height(),
                                          p = 50;
                                          r = h > d && h - d > p, l = u[window.orientation], (r && l || !r && !l) && (u = {
                                            "-90": !0,
                                            90: !0
                                          })
                                        }
                                        e.event.special.orientationchange = s = {
                                          setup: function() {
                                            return n.orientation_support ? !1 : (a = o(), c.bind("throttledresize", t), !0)
                                          },
                                          teardown: function() {
                                            return n.orientation_support ? !1 : (c.unbind("throttledresize", t), !0)
                                          },
                                          add: function(e) {
                                            var t = e.handler;
                                            e.handler = function(e) {
                                              return e.orientation = o(), t.apply(this, arguments)
                                            }
                                          }
                                        }, e.event.special.orientationchange.orientation = o = function() {
                                          var e = !0,
                                          t = document.documentElement;
                                          return e = n.orientation_support ? u[window.orientation] : t && t.clientWidth / t.clientHeight < 1.1, e ? "portrait" : "landscape"
                                        }, e.event.special.throttledresize = {
                                          setup: function() {
                                            e(this).bind("resize", y)
                                          },
                                          teardown: function() {
                                            e(this).unbind("resize", y)
                                          }
                                        };
                                        var f, m, g, v = 250,
                                        y = function() {
                                          m = (new Date).getTime(), g = m - b, g >= v ? (b = m, e(this).trigger("throttledresize")) : (f && window.clearTimeout(f), f = window.setTimeout(t, v - g))
                                        },
                                        b = 0;
                                        e.each({
                                          scrollend: "scrollstart",
                                          swipeup: "swipe",
                                          swiperight: "swipe",
                                          swipedown: "swipe",
                                          swipeleft: "swipe"
                                        }, function(t, i) {
                                          e.event.special[t] = {
                                            setup: function() {
                                              e(this).bind(i, e.noop)
                                            }
                                          }
                                        })
                                      }(jQuery), ! function(e) {
                                        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
                                      }(function(e) {
                                        function t(t) {
                                          var a = t || window.event,
                                          r = l.call(arguments, 1),
                                          c = 0,
                                          h = 0,
                                          d = 0,
                                          p = 0,
                                          f = 0,
                                          m = 0;
                                          if (t = e.event.fix(a), t.type = "mousewheel", "detail" in a && (d = -1 * a.detail), "wheelDelta" in a && (d = a.wheelDelta), "wheelDeltaY" in a && (d = a.wheelDeltaY), "wheelDeltaX" in a && (h = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (h = -1 * d, d = 0), c = 0 === d ? h : d, "deltaY" in a && (d = -1 * a.deltaY, c = d), "deltaX" in a && (h = a.deltaX, 0 === d && (c = -1 * h)), 0 !== d || 0 !== h) {
                                            if (1 === a.deltaMode) {
                                              var g = e.data(this, "mousewheel-line-height");
                                              c *= g, d *= g, h *= g
                                            } else if (2 === a.deltaMode) {
                                              var v = e.data(this, "mousewheel-page-height");
                                              c *= v, d *= v, h *= v
                                            }
                                            if (p = Math.max(Math.abs(d), Math.abs(h)), (!o || o > p) && (o = p, n(a, p) && (o /= 40)), n(a, p) && (c /= 40, h /= 40, d /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / o), h = Math[h >= 1 ? "floor" : "ceil"](h / o), d = Math[d >= 1 ? "floor" : "ceil"](d / o), u.settings.normalizeOffset && this.getBoundingClientRect) {
                                              var y = this.getBoundingClientRect();
                                              f = t.clientX - y.left, m = t.clientY - y.top
                                            }
                                            return t.deltaX = h, t.deltaY = d, t.deltaFactor = o, t.offsetX = f, t.offsetY = m, t.deltaMode = 0, r.unshift(t, c, h, d), s && clearTimeout(s), s = setTimeout(i, 200), (e.event.dispatch || e.event.handle).apply(this, r)
                                          }
                                        }

                                        function i() {
                                          o = null
                                        }

                                        function n(e, t) {
                                          return u.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
                                        }
                                        var s, o, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                                        r = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                                        l = Array.prototype.slice;
                                        if (e.event.fixHooks)
                                        for (var c = a.length; c;) e.event.fixHooks[a[--c]] = e.event.mouseHooks;
                                        var u = e.event.special.mousewheel = {
                                          version: "3.1.12",
                                          setup: function() {
                                            if (this.addEventListener)
                                            for (var i = r.length; i;) this.addEventListener(r[--i], t, !1);
                                            else this.onmousewheel = t;
                                            e.data(this, "mousewheel-line-height", u.getLineHeight(this)), e.data(this, "mousewheel-page-height", u.getPageHeight(this))
                                          },
                                          teardown: function() {
                                            if (this.removeEventListener)
                                            for (var i = r.length; i;) this.removeEventListener(r[--i], t, !1);
                                            else this.onmousewheel = null;
                                            e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
                                          },
                                          getLineHeight: function(t) {
                                            var i = e(t),
                                            n = i["offsetParent" in e.fn ? "offsetParent" : "parent"]();
                                            return n.length || (n = e("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
                                          },
                                          getPageHeight: function(t) {
                                            return e(t).height()
                                          },
                                          settings: {
                                            adjustOldDeltas: !0,
                                            normalizeOffset: !0
                                          }
                                        };
                                        e.fn.extend({
                                          mousewheel: function(e) {
                                            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
                                          },
                                          unmousewheel: function(e) {
                                            return this.unbind("mousewheel", e)
                                          }
                                        })
                                      }), ! function(e, t, i) {
                                        e.fn.jScrollPane = function(n) {
                                          function s(n, s) {
                                            function o(t) {
                                              var s, r, c, h, d, p, g = !1,
                                              v = !1;
                                              if (F = t, R === i) d = n.scrollTop(), p = n.scrollLeft(), n.css({
                                                overflow: "hidden",
                                                padding: 0
                                              }), B = n.innerWidth() + bt, Y = n.innerHeight(), n.width(B), R = e('<div class="jspPane" />').css("padding", yt).append(n.children()), q = e('<div class="jspContainer" />').css({
                                                width: B + "px",
                                                height: Y + "px"
                                              }).append(R).appendTo(n);
                                              else {
                                                if (n.css("width", ""), g = F.stickToBottom && E(), v = F.stickToRight && P(), h = n.innerWidth() + bt != B || n.outerHeight() != Y, h && (B = n.innerWidth() + bt, Y = n.innerHeight(), q.css({
                                                  width: B + "px",
                                                  height: Y + "px"
                                                })), !h && wt == U && R.outerHeight() == X) return void n.width(B);
                                                wt = U, R.css("width", ""), n.width(B), q.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                                              }
                                              R.css("overflow", "auto"), U = t.contentWidth ? t.contentWidth : R[0].scrollWidth, X = R[0].scrollHeight, R.css("overflow", ""), Q = U / B, V = X / Y, K = V > 1, G = Q > 1, G || K ? (n.addClass("jspScrollable"), s = F.maintainPosition && (et || nt), s && (r = D(), c = S()), a(), l(), u(), s && (C(v ? U - B : r, !1), k(g ? X - Y : c, !1)), A(), M(), L(), F.enableKeyboardNavigation && j(), F.clickOnTrack && f(), z(), F.hijackInternalLinks && O()) : (n.removeClass("jspScrollable"), R.css({
                                                top: 0,
                                                left: 0,
                                                width: q.width() - bt
                                              }), I(), N(), H(), m()), F.autoReinitialise && !vt ? vt = setInterval(function() {
                                                o(F)
                                              }, F.autoReinitialiseDelay) : !F.autoReinitialise && vt && clearInterval(vt), d && n.scrollTop(0) && k(d, !1), p && n.scrollLeft(0) && C(p, !1), n.trigger("jsp-initialised", [G || K])
                                            }

                                            function a() {
                                              K && (q.append(e('<div class="jspVerticalBar" />').append(e('<div class="jspCap jspCapTop" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragTop" />'), e('<div class="jspDragBottom" />'))), e('<div class="jspCap jspCapBottom" />'))), st = q.find(">.jspVerticalBar"), ot = st.find(">.jspTrack"), J = ot.find(">.jspDrag"), F.showArrows && (ct = e('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", d(0, -1)).bind("click.jsp", $), ut = e('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", d(0, 1)).bind("click.jsp", $), F.arrowScrollOnHover && (ct.bind("mouseover.jsp", d(0, -1, ct)), ut.bind("mouseover.jsp", d(0, 1, ut))), h(ot, F.verticalArrowPositions, ct, ut)), rt = Y, q.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
                                                rt -= e(this).outerHeight()
                                              }), J.hover(function() {
                                                J.addClass("jspHover")
                                              }, function() {
                                                J.removeClass("jspHover")
                                              }).bind("mousedown.jsp", function(t) {
                                                e("html").bind("dragstart.jsp selectstart.jsp", $), J.addClass("jspActive");
                                                var i = t.pageY - J.position().top;
                                                return e("html").bind("mousemove.jsp", function(e) {
                                                  v(e.pageY - i, !1)
                                                }).bind("mouseup.jsp mouseleave.jsp", g), !1
                                              }), r())
                                            }

                                            function r() {
                                              ot.height(rt + "px"), et = 0, at = F.verticalGutter + ot.outerWidth(), R.width(B - at - bt);
                                              try {
                                                0 === st.position().left && R.css("margin-left", at + "px")
                                              } catch (e) {}
                                            }

                                            function l() {
                                              G && (q.append(e('<div class="jspHorizontalBar" />').append(e('<div class="jspCap jspCapLeft" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragLeft" />'), e('<div class="jspDragRight" />'))), e('<div class="jspCap jspCapRight" />'))), ht = q.find(">.jspHorizontalBar"), dt = ht.find(">.jspTrack"), tt = dt.find(">.jspDrag"), F.showArrows && (mt = e('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", d(-1, 0)).bind("click.jsp", $), gt = e('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", d(1, 0)).bind("click.jsp", $), F.arrowScrollOnHover && (mt.bind("mouseover.jsp", d(-1, 0, mt)), gt.bind("mouseover.jsp", d(1, 0, gt))), h(dt, F.horizontalArrowPositions, mt, gt)), tt.hover(function() {
                                                tt.addClass("jspHover")
                                              }, function() {
                                                tt.removeClass("jspHover")
                                              }).bind("mousedown.jsp", function(t) {
                                                e("html").bind("dragstart.jsp selectstart.jsp", $), tt.addClass("jspActive");
                                                var i = t.pageX - tt.position().left;
                                                return e("html").bind("mousemove.jsp", function(e) {
                                                  b(e.pageX - i, !1)
                                                }).bind("mouseup.jsp mouseleave.jsp", g), !1
                                              }), pt = q.innerWidth(), c())
                                            }

                                            function c() {
                                              q.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
                                                pt -= e(this).outerWidth()
                                              }), dt.width(pt + "px"), nt = 0
                                            }

                                            function u() {
                                              if (G && K) {
                                                var t = dt.outerHeight(),
                                                i = ot.outerWidth();
                                                rt -= t, e(ht).find(">.jspCap:visible,>.jspArrow").each(function() {
                                                  pt += e(this).outerWidth()
                                                }), pt -= i, Y -= i, B -= t, dt.parent().append(e('<div class="jspCorner" />').css("width", t + "px")), r(), c()
                                              }
                                              G && R.width(q.outerWidth() - bt + "px"), X = R.outerHeight(), V = X / Y, G && (ft = Math.ceil(1 / Q * pt), ft > F.horizontalDragMaxWidth ? ft = F.horizontalDragMaxWidth : ft < F.horizontalDragMinWidth && (ft = F.horizontalDragMinWidth), tt.width(ft + "px"), it = pt - ft, w(nt)), K && (lt = Math.ceil(1 / V * rt), lt > F.verticalDragMaxHeight ? lt = F.verticalDragMaxHeight : lt < F.verticalDragMinHeight && (lt = F.verticalDragMinHeight), J.height(lt + "px"), Z = rt - lt, y(et))
                                            }

                                            function h(e, t, i, n) {
                                              var s, o = "before",
                                              a = "after";
                                              "os" == t && (t = /Mac/.test(navigator.platform) ? "after" : "split"), t == o ? a = t : t == a && (o = t, s = i, i = n, n = s), e[o](i)[a](n)
                                            }

                                            function d(e, t, i) {
                                              return function() {
                                                return p(e, t, this, i), this.blur(), !1
                                              }
                                            }

                                            function p(t, i, n, s) {
                                              n = e(n).addClass("jspActive");
                                              var o, a, r = !0,
                                              l = function() {
                                                0 !== t && _t.scrollByX(t * F.arrowButtonSpeed), 0 !== i && _t.scrollByY(i * F.arrowButtonSpeed), a = setTimeout(l, r ? F.initialDelay : F.arrowRepeatFreq), r = !1
                                              };
                                              l(), o = s ? "mouseout.jsp" : "mouseup.jsp", s = s || e("html"), s.bind(o, function() {
                                                n.removeClass("jspActive"), a && clearTimeout(a), a = null, s.unbind(o)
                                              })
                                            }

                                            function f() {
                                              m(), K && ot.bind("mousedown.jsp", function(t) {
                                                if (t.originalTarget === i || t.originalTarget == t.currentTarget) {
                                                  var n, s = e(this),
                                                  o = s.offset(),
                                                  a = t.pageY - o.top - et,
                                                  r = !0,
                                                  l = function() {
                                                    var e = s.offset(),
                                                    i = t.pageY - e.top - lt / 2,
                                                    o = Y * F.scrollPagePercent,
                                                    u = Z * o / (X - Y);
                                                    if (0 > a) et - u > i ? _t.scrollByY(-o) : v(i);
                                                    else {
                                                      if (!(a > 0)) return void c();
                                                      i > et + u ? _t.scrollByY(o) : v(i)
                                                    }
                                                    n = setTimeout(l, r ? F.initialDelay : F.trackClickRepeatFreq), r = !1
                                                  },
                                                  c = function() {
                                                    n && clearTimeout(n), n = null, e(document).unbind("mouseup.jsp", c)
                                                  };
                                                  return l(), e(document).bind("mouseup.jsp", c), !1
                                                }
                                              }), G && dt.bind("mousedown.jsp", function(t) {
                                                if (t.originalTarget === i || t.originalTarget == t.currentTarget) {
                                                  var n, s = e(this),
                                                  o = s.offset(),
                                                  a = t.pageX - o.left - nt,
                                                  r = !0,
                                                  l = function() {
                                                    var e = s.offset(),
                                                    i = t.pageX - e.left - ft / 2,
                                                    o = B * F.scrollPagePercent,
                                                    u = it * o / (U - B);
                                                    if (0 > a) nt - u > i ? _t.scrollByX(-o) : b(i);
                                                    else {
                                                      if (!(a > 0)) return void c();
                                                      i > nt + u ? _t.scrollByX(o) : b(i)
                                                    }
                                                    n = setTimeout(l, r ? F.initialDelay : F.trackClickRepeatFreq), r = !1
                                                  },
                                                  c = function() {
                                                    n && clearTimeout(n), n = null, e(document).unbind("mouseup.jsp", c)
                                                  };
                                                  return l(), e(document).bind("mouseup.jsp", c), !1
                                                }
                                              })
                                            }

                                            function m() {
                                              dt && dt.unbind("mousedown.jsp"), ot && ot.unbind("mousedown.jsp")
                                            }

                                            function g() {
                                              e("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), J && J.removeClass("jspActive"), tt && tt.removeClass("jspActive")
                                            }

                                            function v(e, t) {
                                              K && (0 > e ? e = 0 : e > Z && (e = Z), t === i && (t = F.animateScroll), t ? _t.animate(J, "top", e, y) : (J.css("top", e), y(e)))
                                            }

                                            function y(e) {
                                              e === i && (e = J.position().top), q.scrollTop(0), et = e;
                                              var t = 0 === et,
                                              s = et == Z,
                                              o = e / Z,
                                              a = -o * (X - Y);
                                              (xt != t || Ct != s) && (xt = t, Ct = s, n.trigger("jsp-arrow-change", [xt, Ct, kt, Tt])), _(t, s), R.css("top", a), n.trigger("jsp-scroll-y", [-a, t, s]).trigger("scroll")
                                            }

                                            function b(e, t) {
                                              G && (0 > e ? e = 0 : e > it && (e = it), t === i && (t = F.animateScroll), t ? _t.animate(tt, "left", e, w) : (tt.css("left", e), w(e)))
                                            }

                                            function w(e) {
                                              e === i && (e = tt.position().left), q.scrollTop(0), nt = e;
                                              var t = 0 === nt,
                                              s = nt == it,
                                              o = e / it,
                                              a = -o * (U - B);
                                              (kt != t || Tt != s) && (kt = t, Tt = s, n.trigger("jsp-arrow-change", [xt, Ct, kt, Tt])), x(t, s), R.css("left", a), n.trigger("jsp-scroll-x", [-a, t, s]).trigger("scroll")
                                            }

                                            function _(e, t) {
                                              F.showArrows && (ct[e ? "addClass" : "removeClass"]("jspDisabled"), ut[t ? "addClass" : "removeClass"]("jspDisabled"))
                                            }

                                            function x(e, t) {
                                              F.showArrows && (mt[e ? "addClass" : "removeClass"]("jspDisabled"), gt[t ? "addClass" : "removeClass"]("jspDisabled"))
                                            }

                                            function k(e, t) {
                                              var i = e / (X - Y);
                                              v(i * Z, t)
                                            }

                                            function C(e, t) {
                                              var i = e / (U - B);
                                              b(i * it, t)
                                            }

                                            function T(t, i, n) {
                                              var s, o, a, r, l, c, u, h, d, p = 0,
                                              f = 0;
                                              try {
                                                s = e(t)
                                              } catch (m) {
                                                return
                                              }
                                              for (o = s.outerHeight(), a = s.outerWidth(), q.scrollTop(0), q.scrollLeft(0); !s.is(".jspPane");)
                                              if (p += s.position().top, f += s.position().left, s = s.offsetParent(), /^body|html$/i.test(s[0].nodeName)) return;
                                              r = S(), c = r + Y, r > p || i ? h = p - F.horizontalGutter : p + o > c && (h = p - Y + o + F.horizontalGutter), isNaN(h) || k(h, n), l = D(), u = l + B, l > f || i ? d = f - F.horizontalGutter : f + a > u && (d = f - B + a + F.horizontalGutter), isNaN(d) || C(d, n)
                                            }

                                            function D() {
                                              return -R.position().left
                                            }

                                            function S() {
                                              return -R.position().top
                                            }

                                            function E() {
                                              var e = X - Y;
                                              return e > 20 && e - S() < 10
                                            }

                                            function P() {
                                              var e = U - B;
                                              return e > 20 && e - D() < 10
                                            }

                                            function M() {
                                              q.unbind(St).bind(St, function(e, t, i, n) {
                                                var s = nt,
                                                o = et,
                                                a = e.deltaFactor || F.mouseWheelSpeed;
                                                return _t.scrollBy(i * a, -n * a, !1), s == nt && o == et
                                              })
                                            }

                                            function I() {
                                              q.unbind(St)
                                            }

                                            function $() {
                                              return !1
                                            }

                                            function A() {
                                              R.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function(e) {
                                                T(e.target, !1)
                                              })
                                            }

                                            function N() {
                                              R.find(":input,a").unbind("focus.jsp")
                                            }

                                            function j() {
                                              function t() {
                                                var e = nt,
                                                t = et;
                                                switch (i) {
                                                  case 40:
                                                  _t.scrollByY(F.keyboardSpeed, !1);
                                                  break;
                                                  case 38:
                                                  _t.scrollByY(-F.keyboardSpeed, !1);
                                                  break;
                                                  case 34:
                                                  case 32:
                                                  _t.scrollByY(Y * F.scrollPagePercent, !1);
                                                  break;
                                                  case 33:
                                                  _t.scrollByY(-Y * F.scrollPagePercent, !1);
                                                  break;
                                                  case 39:
                                                  _t.scrollByX(F.keyboardSpeed, !1);
                                                  break;
                                                  case 37:
                                                  _t.scrollByX(-F.keyboardSpeed, !1)
                                                }
                                                return s = e != nt || t != et
                                              }
                                              var i, s, o = [];
                                              G && o.push(ht[0]), K && o.push(st[0]), R.focus(function() {
                                                n.focus()
                                              }), n.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function(n) {
                                                if (n.target === this || o.length && e(n.target).closest(o).length) {
                                                  var a = nt,
                                                  r = et;
                                                  switch (n.keyCode) {
                                                    case 40:
                                                    case 38:
                                                    case 34:
                                                    case 32:
                                                    case 33:
                                                    case 39:
                                                    case 37:
                                                    i = n.keyCode, t();
                                                    break;
                                                    case 35:
                                                    k(X - Y), i = null;
                                                    break;
                                                    case 36:
                                                    k(0), i = null
                                                  }
                                                  return s = n.keyCode == i && a != nt || r != et, !s
                                                }
                                              }).bind("keypress.jsp", function(e) {
                                                return e.keyCode == i && t(), !s
                                              }), F.hideFocus ? (n.css("outline", "none"), "hideFocus" in q[0] && n.attr("hideFocus", !0)) : (n.css("outline", ""), "hideFocus" in q[0] && n.attr("hideFocus", !1))
                                            }

                                            function H() {
                                              n.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")
                                            }

                                            function z() {
                                              if (location.hash && location.hash.length > 1) {
                                                var t, i, n = escape(location.hash.substr(1));
                                                try {
                                                  t = e("#" + n + ', a[name="' + n + '"]')
                                                } catch (s) {
                                                  return
                                                }
                                                t.length && R.find(n) && (0 === q.scrollTop() ? i = setInterval(function() {
                                                  q.scrollTop() > 0 && (T(t, !0), e(document).scrollTop(q.position().top), clearInterval(i))
                                                }, 50) : (T(t, !0), e(document).scrollTop(q.position().top)))
                                              }
                                            }

                                            function O() {
                                              e(document.body).data("jspHijack") || (e(document.body).data("jspHijack", !0), e(document.body).delegate("a[href*=#]", "click", function(i) {
                                                var n, s, o, a, r, l, c = this.href.substr(0, this.href.indexOf("#")),
                                                u = location.href;
                                                if (-1 !== location.href.indexOf("#") && (u = location.href.substr(0, location.href.indexOf("#"))), c === u) {
                                                  n = escape(this.href.substr(this.href.indexOf("#") + 1));
                                                  try {
                                                    s = e("#" + n + ', a[name="' + n + '"]')
                                                  } catch (h) {
                                                    return
                                                  }
                                                  s.length && (o = s.closest(".jspScrollable"), a = o.data("jsp"), a.scrollToElement(s, !0), o[0].scrollIntoView && (r = e(t).scrollTop(), l = s.offset().top, (r > l || l > r + e(t).height()) && o[0].scrollIntoView()), i.preventDefault())
                                                }
                                              }))
                                            }

                                            function L() {
                                              var e, t, i, n, s, o = !1;
                                              q.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(a) {
                                                var r = a.originalEvent.touches[0];
                                                e = D(), t = S(), i = r.pageX, n = r.pageY, s = !1, o = !0
                                              }).bind("touchmove.jsp", function(a) {
                                                if (o) {
                                                  var r = a.originalEvent.touches[0],
                                                  l = nt,
                                                  c = et;
                                                  return _t.scrollTo(e + i - r.pageX, t + n - r.pageY), s = s || Math.abs(i - r.pageX) > 5 || Math.abs(n - r.pageY) > 5, l == nt && c == et
                                                }
                                              }).bind("touchend.jsp", function() {
                                                o = !1
                                              }).bind("click.jsp-touchclick", function() {
                                                return s ? (s = !1, !1) : void 0
                                              })
                                            }

                                            function W() {
                                              var e = S(),
                                              t = D();
                                              n.removeClass("jspScrollable").unbind(".jsp"), n.replaceWith(Dt.append(R.children())), Dt.scrollTop(e), Dt.scrollLeft(t), vt && clearInterval(vt)
                                            }
                                            var F, R, B, Y, q, U, X, Q, V, K, G, J, Z, et, tt, it, nt, st, ot, at, rt, lt, ct, ut, ht, dt, pt, ft, mt, gt, vt, yt, bt, wt, _t = this,
                                            xt = !0,
                                            kt = !0,
                                            Ct = !1,
                                            Tt = !1,
                                            Dt = n.clone(!1, !1).empty(),
                                            St = e.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
                                            "border-box" === n.css("box-sizing") ? (yt = 0, bt = 0) : (yt = n.css("paddingTop") + " " + n.css("paddingRight") + " " + n.css("paddingBottom") + " " + n.css("paddingLeft"), bt = (parseInt(n.css("paddingLeft"), 10) || 0) + (parseInt(n.css("paddingRight"), 10) || 0)), e.extend(_t, {
                                              reinitialise: function(t) {
                                                t = e.extend({}, F, t), o(t)
                                              },
                                              scrollToElement: function(e, t, i) {
                                                T(e, t, i)
                                              },
                                              scrollTo: function(e, t, i) {
                                                C(e, i), k(t, i)
                                              },
                                              scrollToX: function(e, t) {
                                                C(e, t)
                                              },
                                              scrollToY: function(e, t) {
                                                k(e, t)
                                              },
                                              scrollToPercentX: function(e, t) {
                                                C(e * (U - B), t)
                                              },
                                              scrollToPercentY: function(e, t) {
                                                k(e * (X - Y), t)
                                              },
                                              scrollBy: function(e, t, i) {
                                                _t.scrollByX(e, i), _t.scrollByY(t, i)
                                              },
                                              scrollByX: function(e, t) {
                                                var i = D() + Math[0 > e ? "floor" : "ceil"](e),
                                                n = i / (U - B);
                                                b(n * it, t)
                                              },
                                              scrollByY: function(e, t) {
                                                var i = S() + Math[0 > e ? "floor" : "ceil"](e),
                                                n = i / (X - Y);
                                                v(n * Z, t)
                                              },
                                              positionDragX: function(e, t) {
                                                b(e, t)
                                              },
                                              positionDragY: function(e, t) {
                                                v(e, t)
                                              },
                                              animate: function(e, t, i, n) {
                                                var s = {};
                                                s[t] = i, e.animate(s, {
                                                  duration: F.animateDuration,
                                                  easing: F.animateEase,
                                                  queue: !1,
                                                  step: n
                                                })
                                              },
                                              getContentPositionX: function() {
                                                return D()
                                              },
                                              getContentPositionY: function() {
                                                return S()
                                              },
                                              getContentWidth: function() {
                                                return U
                                              },
                                              getContentHeight: function() {
                                                return X
                                              },
                                              getPercentScrolledX: function() {
                                                return D() / (U - B)
                                              },
                                              getPercentScrolledY: function() {
                                                return S() / (X - Y)
                                              },
                                              getIsScrollableH: function() {
                                                return G
                                              },
                                              getIsScrollableV: function() {
                                                return K
                                              },
                                              getContentPane: function() {
                                                return R
                                              },
                                              scrollToBottom: function(e) {
                                                v(Z, e)
                                              },
                                              hijackInternalLinks: e.noop,
                                              destroy: function() {
                                                W()
                                              }
                                            }), o(s)
                                          }
                                          return n = e.extend({}, e.fn.jScrollPane.defaults, n), e.each(["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function() {
                                            n[this] = n[this] || n.speed
                                          }), this.each(function() {
                                            var t = e(this),
                                            i = t.data("jsp");
                                            i ? i.reinitialise(n) : (e("script", t).filter('[type="text/javascript"],:not([type])').remove(), i = new s(t, n), t.data("jsp", i))
                                          })
                                        }, e.fn.jScrollPane.defaults = {
                                          showArrows: !1,
                                          maintainPosition: !0,
                                          stickToBottom: !1,
                                          stickToRight: !1,
                                          clickOnTrack: !0,
                                          autoReinitialise: !1,
                                          autoReinitialiseDelay: 500,
                                          verticalDragMinHeight: 0,
                                          verticalDragMaxHeight: 99999,
                                          horizontalDragMinWidth: 0,
                                          horizontalDragMaxWidth: 99999,
                                          contentWidth: i,
                                          animateScroll: !1,
                                          animateDuration: 300,
                                          animateEase: "linear",
                                          hijackInternalLinks: !1,
                                          verticalGutter: 4,
                                          horizontalGutter: 4,
                                          mouseWheelSpeed: 3,
                                          arrowButtonSpeed: 0,
                                          arrowRepeatFreq: 50,
                                          arrowScrollOnHover: !1,
                                          trackClickSpeed: 0,
                                          trackClickRepeatFreq: 70,
                                          verticalArrowPositions: "split",
                                          horizontalArrowPositions: "split",
                                          enableKeyboardNavigation: !0,
                                          hideFocus: !1,
                                          keyboardSpeed: 0,
                                          initialDelay: 300,
                                          speed: 30,
                                          scrollPagePercent: .8
                                        }
                                      }(jQuery, this),
                                      function(e, t, i) {
                                        var n, s = [],
                                        o = function() {
                                          var e = i.createElement("modernizr").style,
                                          t = "objectFit",
                                          n = "Webkit Moz O ms",
                                          s = n.split(" "),
                                          o = t.charAt(0).toUpperCase() + t.slice(1),
                                          a = (t + " " + s.join(o + " ") + o).split(" ");
                                          for (var r in a) {
                                            var t = a[r];
                                            if (~("" + t).indexOf("-") && void 0 !== e[t]) return "pfx" == prefixed ? t : !0
                                          }
                                          return !1
                                        },
                                        a = function(t) {
                                          var t = t || "contain",
                                          i = o();
                                          return this.each(function() {
                                            i ? e(this).css("object-fit", t) : r(this, t)
                                          })
                                        },
                                        r = function(t, i) {
                                          function n(e) {
                                            var t = e.parent(),
                                            i = t.css("display");
                                            return "block" == i || "-webkit-box" == i && t.width() > 0 ? {
                                              obj: t,
                                              width: t.width(),
                                              height: t.height(),
                                              ratio: t.width() / t.height()
                                            } : n(t)
                                          }
                                          var o = "string" == typeof i ? i : i.type,
                                          a = void 0 === i.hideOverflow ? !0 : i.hideOverflow;
                                          s.push({
                                            elem: t,
                                            params: {
                                              type: o,
                                              hideOverflow: a
                                            }
                                          });
                                          var r, l, c = e(t),
                                          u = c.data("ratio"),
                                          h = n(c),
                                          d = e("<img/>").load(function() {
                                            r = this.width, l = this.height, void 0 === u && (u = r / l, c.data("ratio", u)), "contain" === o ? h.ratio > u ? c.width(h.height * u) : c.height(h.width / u).width("100%") : "cover" === o && ((h.width > r || h.height > l) && (h.ratio > u ? c.width(h.width).height(h.height * u) : c.height(h.height).width(h.width * u)), a && h.obj.css("overflow", "hidden"))
                                          });
                                          d.attr("src", c.attr("src"))
                                        };
                                        e.fn.objectFit = a, e(t).resize(function() {
                                          clearTimeout(n);
                                          for (var e = 0, t = s.length; t > e; e++) {
                                            var i = s[e];
                                            n = setTimeout(function() {
                                              r(i.elem, i.params)
                                            }, 100)
                                          }
                                        })
                                      }(jQuery, window, document),
                                      function(e) {
                                        e.fn.mousestop = function(t, i) {
                                          return i = e.extend({}, e.fn.mousestop.defaultSettings, i || {}), this.each(function() {
                                            var n = e(this),
                                            s = !1,
                                            o = null,
                                            a = null;
                                            if (null != i.timeToStop) {
                                              var r = null,
                                              l = null,
                                              c = 0,
                                              u = Math.ceil(i.timeToStop / 100);
                                              n.mouseover(function(e) {
                                                s = !0, o = setInterval(function() {
                                                  c++, u > c ? s || (clearTimeout(o), e.pageX = r, e.pageY = l, t && t.apply(this, [e])) : s = !1
                                                }, 100)
                                              })
                                            }
                                            n.mouseout(function(e) {
                                              clearTimeout(o), clearTimeout(a), c = 0, s = !1, i.onMouseout && i.onMouseout.apply(this, [e])
                                            }).mousemove(function(e) {
                                              r = e.pageX, l = e.pageY, s ? (clearTimeout(a), a = setTimeout(function() {
                                                s = !1, null == i.timeToStop && t && t.apply(this, [e])
                                              }, i.delayToStop)) : (i.onStopMove && i.onStopMove.apply(this, [e]), s = !0)
                                            })
                                          })
                                        }, e.fn.mousestop.defaultSettings = {
                                          timeToStop: null,
                                          delayToStop: "300",
                                          onMouseout: null,
                                          onStopMove: null
                                        }
                                      }(jQuery);
                                      var MQ = function(e) {
                                        return e = e || {}, e.init = function(t) {
                                          if (this.callbacks = [], this.new_context = this.context = "", "undefined" != typeof t)
                                          for (i = 0; i < t.length; i++) this.addQuery(t[i]);
                                          this.addEvent(window, "resize", e.listenForChange, e), this.listenForChange()
                                        }, e.listenForChange = function() {
                                          document.documentElement.currentStyle && (query_string = document.documentElement.currentStyle.fontFamily), window.getComputedStyle && (query_string = window.getComputedStyle(document.documentElement).getPropertyValue("font-family")), null != query_string && (query_string = query_string.replace(/['",]/g, ""), query_string !== this.context && (this.new_context = query_string, this.triggerCallbacks(this.new_context)), this.context = this.new_context)
                                        }, e.addQuery = function(e) {
                                          return null != e && void 0 != e ? (this.callbacks.push(e), "string" == typeof e.context && (e.context = [e.context]), "boolean" != typeof e.call_for_each_context && (e.call_for_each_context = !0), "" != this.context && this._inArray(this.context, e.context) && e.callback(), this.callbacks[this.callbacks.length - 1]) : void 0
                                        }, e.removeQuery = function(e) {
                                          if (null != e && void 0 != e)
                                          for (var t = -1; - 1 < (t = this.callbacks.indexOf(e));) this.callbacks.splice(t, 1)
                                        }, e.triggerCallbacks = function(e) {
                                          var t, i;
                                          for (t = 0; t < this.callbacks.length; t++) 0 == this.callbacks[t].call_for_each_context && this._inArray(this.context, this.callbacks[t].context) || (i = this.callbacks[t].callback, this._inArray(e, this.callbacks[t].context) && void 0 !== i && i())
                                        }, e.addEvent = function(e, t, i, n) {
                                          null == e || void 0 == e || (e.addEventListener ? e.addEventListener(t, function() {
                                            i.call(n)
                                          }, !1) : e.attachEven ? e.attachEvent("on" + t, function() {
                                            i.call(n)
                                          }) : e["on" + t] = function() {
                                            i.call(n)
                                          })
                                        }, e._inArray = function(e, t) {
                                          for (var i = t.length, n = 0; i > n; n++)
                                          if (t[n] == e) return !0;
                                          return !1
                                        }, e
                                      }(MQ || {});
                                      if (navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i) && window.innerHeight !== document.documentElement.clientHeight) {
                                        var fixViewportHeight = function() {
                                          document.documentElement.style.height = window.innerHeight + "px", 0 !== document.body.scrollTop && window.scrollTo(0, 0)
                                        }.bind(this);
                                        window.addEventListener("scroll", fixViewportHeight, !1), window.addEventListener("orientationchange", fixViewportHeight, !1), fixViewportHeight(), document.body.style.webkitTransform = "translate3d(0,0,0)"
                                      }
                                      var mwcp = {};
                                      mwcp.setup = function(e) {
                                        function t() {
                                          s(), o(), n()
                                        }

                                        function i() {
                                          s(), o(), n()
                                        }

                                        function n() {
                                          Modernizr.touch || _.find(".scrollable").jScrollPane("reinitialise")
                                        }

                                        function s() {
                                          $("#content-1, #content-2").each(function() {
                                            var e = $(this),
                                            t = e.width() / e.height();
                                            if (e.find("video").length > 0) {
                                              var i = e.children("video"),
                                              n = i.attr("data-width") / i.attr("data-height"),
                                              s = e.height() * n,
                                              o = e.width() / n;
                                              t > n ? i.css({
                                                width: s + "px",
                                                height: "100%"
                                              }) : n > t && i.css({
                                                width: "100%",
                                                height: o + "px"
                                              })
                                            }
                                            if (e.find("object").length > 0) {
                                              var i = e.find("object").parent("div"),
                                              n = i.attr("data-width") / i.attr("data-height"),
                                              s = e.height() * n,
                                              o = e.width() / n;
                                              _.hasClass("layout-4") ? _.hasClass("layout-4") && i.css({
                                                width: "100%",
                                                height: "100%"
                                              }) : t > n ? i.css({
                                                width: s + "px",
                                                height: "100%"
                                              }) : n > t && i.css({
                                                width: "100%",
                                                height: o + "px"
                                              })
                                            }
                                            if (e.find("img").length > 0) {
                                              var i = e.children("img"),
                                              n = i.attr("data-width") / i.attr("data-height");
                                              t > n ? i.css({
                                                width: "auto",
                                                height: "100%"
                                              }) : n > t && i.css({
                                                width: "100%",
                                                height: "auto"
                                              })
                                            }
                                          })
                                        }

                                        function o() {
                                          var e = 0;
                                          _.hasClass("layout-1") && (e = C.height() - C.find("div.content-left").children().height() * (C.find("div.content-left").width() / C.find("div.content-left").children().width()), S.removeClass("hide").addClass("show"), S.height(e), 160 > e && S.removeClass("show").addClass("hide")), _.hasClass("layout-2") && (e = C.height() - C.find("div.content-right").children().height() * (C.find("div.content-right").width() / C.find("div.content-right").children().width()), S.removeClass("hide").addClass("show"), S.height(e), 160 > e && S.removeClass("show").addClass("hide")), _.hasClass("layout-3") && S.height(C.height()), n()
                                        }

                                        function a() {
                                          x.find(".icon").each(function() {
                                            var e = $(this).attr("class").split(" ")[1];
                                            $(this).click(function() {
                                              $(".mwcp-modules .icon." + e).hasClass("active") ? l() : r(e)
                                            })
                                          })
                                        }

                                        function r(e) {
                                          if (l(), $(".mwcp-modules .icon." + e).addClass("active"), $(".mwcp-module." + e).hasClass("offcanvas")) $(".mwcp-module.offcanvas." + e).removeClass("offcanvas-hide").addClass("offcanvas-show"), $(".mwcp-stage").removeClass("offcanvas-hidden").addClass("offcanvas-visible"), Modernizr.csstransitions && $(".mwcp-module.offcanvas").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
                                            s(), o(), n()
                                          }), setTimeout(function() {
                                            s(), o(), n()
                                          }, 0);
                                          else {
                                            if ($(".mwcp-module").hasClass("download")) {
                                              var t = x.find(".icon.download").offset();
                                              $(".mwcp-module.download").css("left", t.left - 10)
                                            }
                                            $(".mwcp-module." + e).show()
                                          }
                                          $(".tabs").tabs(), Modernizr.touch || $(".mwcp-module." + e).find(".scrollable").jScrollPane({
                                            showArrows: !1
                                          })
                                        }

                                        function l() {
                                          $(".mwcp-modules .icon").removeClass("active"), $(".mwcp-module.offcanvas").removeClass("offcanvas-show").addClass("offcanvas-hide"), Modernizr.csstransitions && $(".mwcp-module.offcanvas").on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
                                            s(), o(), n()
                                          }), setTimeout(function() {
                                            s(), o(), n()
                                          }, 0), $(".mwcp-module:not(.offcanvas)").hide(), $(".mwcp-stage").removeClass("offcanvas-visible").addClass("offcanvas-hidden")
                                        }

                                        function c() {
                                          $(".mwcp-module.slides li").css("width", "25%"), $(".mwcp-module.slides .size").slider({
                                            min: -8,
                                            max: -3,
                                            value: -4,
                                            slide: function(e, t) {
                                              -8 == t.value ? $(".mwcp-module.slides li").css("width", "12.5%") : -7 == t.value ? $(".mwcp-module.slides li").css("width", "14.28%") : -6 == t.value ? $(".mwcp-module.slides li").css("width", "16.66%") : -5 == t.value ? $(".mwcp-module.slides li").css("width", "20%") : -4 == t.value ? $(".mwcp-module.slides li").css("width", "25%") : -3 == t.value && $(".mwcp-module.slides li").css("width", "33.33%"), n()
                                            }
                                          })
                                        }

                                        function u() {
                                          c()
                                        }

                                        function h() {
                                          k.find("div.icon.play").removeClass("show").addClass("hide"), k.find("div.icon.pause").removeClass("hide").addClass("show"), $(".ui-tooltip").remove()
                                        }

                                        function d() {
                                          k.find("div.icon.pause").removeClass("show").addClass("hide"), k.find("div.icon.play").removeClass("hide").addClass("show"), $(".ui-tooltip").remove()
                                        }

                                        function p() {
                                          C.removeClass("dual").addClass("single"), k.find("div.icon.single").removeClass("show").addClass("hide"), k.find("div.icon.dual").removeClass("hide").addClass("show"), S.hide(), _.hasClass("layout-1") && (C.children("div.content-right").toggleClass("content-right content-single"), C.children("div.content-left").toggleClass("content-left content-hidden")), _.hasClass("layout-2") && (C.children("div.content-left").toggleClass("content-left content-single"), C.children("div.content-right").toggleClass("content-right content-hidden")), s()
                                        }

                                        function f() {
                                          C.removeClass("single").addClass("dual"), k.find("div.icon.dual").removeClass("show").addClass("hide"), k.find("div.icon.single").removeClass("hide").addClass("show"), S.show(), C.find("div.content").children().css("width", "").css("height", ""), _.hasClass("layout-1") && (T.hasClass("content-hidden") && (T.removeClass("content-hidden").addClass("content-left"), D.removeClass("content-single").addClass("content-right")), D.hasClass("content-hidden") && (T.removeClass("content-single").addClass("content-right"), D.removeClass("content-hidden").addClass("content-left"))), _.hasClass("layout-2") && (C.children("div.content-single").toggleClass("content-single content-left"), C.children("div.content-hidden").toggleClass("content-hidden content-right")), s(), o()
                                        }

                                        function m() {
                                          T.width() < D.width() ? (T.toggleClass("content-left content-right"), D.toggleClass("content-left content-right")) : (T.toggleClass("content-left content-right"), D.toggleClass("content-left content-right")), s(), o()
                                        }

                                        function g() {
                                          var e = T.attr("style"),
                                          t = D.attr("style");
                                          T.toggleClass("content-hidden content-single").attr("style", t), D.toggleClass("content-hidden content-single").attr("style", e), s()
                                        }

                                        function v() {
                                          metaplayer.dispatchEvent("UI_VolumeChange", P.slider("value")), P.slider("value") <= 100 && P.slider("value") >= 67 && (k.find("div.icon.volume-wave-0, div.icon.volume-wave-1, div.icon.volume-wave-2").removeClass("show").addClass("hide"), k.find("div.icon.volume-wave-3").removeClass("hide").addClass("show")), P.slider("value") <= 66 && P.slider("value") >= 34 && (k.find("div.icon.volume-wave-0, div.icon.volume-wave-1, div.icon.volume-wave-3").removeClass("show").addClass("hide"), k.find("div.icon.volume-wave-2").removeClass("hide").addClass("show")), P.slider("value") <= 33 && P.slider("value") >= 1 && (k.find("div.icon.volume-wave-0, div.icon.volume-wave-2, div.icon.volume-wave-3").removeClass("show").addClass("hide"), k.find("div.icon.volume-wave-1").removeClass("hide").addClass("show")), P.slider("value") < 1 && P.slider("value") >= 0 && (k.find("div.icon.volume-wave-1, div.icon.volume-wave-2, div.icon.volume-wave-3").removeClass("show").addClass("hide"), k.find("div.icon.volume-wave-0").removeClass("hide").addClass("show"))
                                        }

                                        function y() {
                                          var e = $(".mwcp-controls .language").offset();
                                          $(".mwcp-controls .language").addClass("active"), $(".mwcp-control.language").css("left", e.left).slideDown("fast")
                                        }

                                        function b() {
                                          $(".mwcp-controls .language").removeClass("active"), $(".mwcp-control.language").slideUp()
                                        }

                                        function w() {
                                          k.find("div.content.slide-navigation").find("table").each(function() {
                                            var e = $(this).find("td").length;
                                            $(this).width(80 * e + 10)
                                          }), n()
                                        }
                                        mwcp.isLoaded = !1;
                                        var _ = $("div.mwcp");
                                        _.addClass(e); {
                                          var x = _.find("div.mwcp-modules"),
                                          k = _.find("div.mwcp-controls"),
                                          C = (k.find("div.mwcp-timeline"), _.find("div.mwcp-content")),
                                          T = _.find("div#content-1"),
                                          D = _.find("div#content-2"),
                                          S = _.find("div#content-3");
                                          S.children("div.scrollable")
                                        }
                                        t(), $(window).resize(function() {
                                          s(), o(), n()
                                        }), window.addEventListener("orientationchange", function() {
                                          s(), o(), n()
                                        }, !1), Modernizr.touch || (x.find(".icon").tooltip({
                                          tooltipClass: "mwcp-tooltip mwcp-tooltip-modules",
                                          show: !1,
                                          hide: !1,
                                          position: {
                                            my: "top left",
                                            at: "bottom center",
                                            offset: "0 30"
                                          }
                                        }), k.find(".icon").tooltip({
                                          tooltipClass: "mwcp-tooltip mwcp-tooltip-controls",
                                          show: !1,
                                          hide: !1,
                                          position: {
                                            my: "bottom left",
                                            at: "top center",
                                            offset: "0 -30"
                                          }
                                        })), $(".mwcp-module .close").click(l), $(".mwcp-module.download").mouseleave(function() {
                                          l()
                                        }), $("#mwcp-timeline").find("div.slider").slider({
                                          range: "min",
                                          value: 0,
                                          step: .001,
                                          slide: function(e, t) {
                                            t.value > 50 ? $("#mwcp-timeline").addClass("right") : t.value < 50 && $("#mwcp-timeline").removeClass("right")
                                          },
                                          start: function() {
                                            $("#mwcp-timeline").find("div.slider").data("sliding", "true")
                                          },
                                          stop: function(e, t) {
                                            $("#mwcp-timeline").find("div.slider").data("sliding", "false"), metaplayer.dispatchEvent("UI_PositionUpdate", t.value), l()
                                          }
                                        }), $("#mwcp-timeline").find("div.slider").data("sliding", "false"), k.find("div.icon.play").click(h), k.find("div.icon.pause").click(d), $(document).on("keydown", function(t) {
                                          32 === t.keyCode && metaplayer.playpause(), 37 === t.keyCode && metaplayer.prev(), 39 === t.keyCode && metaplayer.next(), (40 === t.keyCode || 189 === t.keyCode) && (P.slider("value", P.slider("value") - 10), v()), (38 === t.keyCode || 187 === t.keyCode) && (P.slider("value", P.slider("value") + 10), v()), 77 === t.keyCode && (P.slider("value", 0), v()), $(".icon.swap").is(":visible") && 88 === t.keyCode && ("layout-1" == e || "layout-2" == e) && (C.hasClass("dual") ? m() : g()), ($(".icon.single").is(":visible") || $(".icon.dual").is(":visible")) && 86 === t.keyCode && ("layout-1" == e || "layout-2" == e) && (C.hasClass("dual") ? p() : f()), $(".icon.enter-fullscreen").is(":visible") && 70 === t.keyCode && _.fullScreen(!0), $(".icon.exit-fullscreen").is(":visible") && 70 === t.keyCode && _.fullScreen(!1), 27 === t.keyCode && l(), $(".icon.help").is(":visible") && 191 === t.keyCode && ($(".mwcp-modules .icon.help").hasClass("active") ? l() : r("help")), $(".icon.info").is(":visible") && 73 === t.keyCode && ($(".mwcp-modules .icon.info").hasClass("active") ? l() : r("info"))
                                        }), k.find("div.icon.single").click(function() {
                                          p(), $(".ui-tooltip").remove()
                                        }), $(document).on("click", "div.content-left", function() {
                                          _.hasClass("layout-1") && ($(this).attr("data", "left"), p(), g()), _.hasClass("layout-2") && ($(this).attr("data", "right"), p())
                                        }), $(document).on("click", "div.content-right", function() {
                                          _.hasClass("layout-1") && ($(this).attr("data", "right"), p()), _.hasClass("layout-2") && ($(this).attr("data", "left"), p(), g())
                                        }), k.find("div.icon.dual").click(function() {
                                          f(), $(".ui-tooltip").remove()
                                        }), $(document).on("click", "div.content-single", function() {
                                          "left" === $(this).attr("data") && g(), f(), $(this).removeAttr("data")
                                        }), k.find("div.icon.swap").click(function() {
                                          $("div.icon.swap").toggleClass("show hide"), $(".ui-tooltip").remove(), C.hasClass("dual") ? m() : g()
                                        });
                                        var E = document.createElement("audio");
                                        if (E.volume = .5, .5 !== E.volume) k.find("div.volume").hide();
                                        else {
                                          var P = k.find("div.volume-slider").children("div.slider").slider({
                                            orientation: "horizontal",
                                            range: "min",
                                            min: 0,
                                            max: 100,
                                            value: 100,
                                            slide: function(e, t) {
                                              metaplayer.dispatchEvent("UI_VolumeChange", t.value), t.value <= 100 && t.value >= 67 && (k.find("div.icon.volume-wave-0, div.icon.volume-wave-1, div.icon.volume-wave-2").removeClass("show").addClass("hide"), k.find("div.icon.volume-wave-3").removeClass("hide").addClass("show")), t.value <= 66 && t.value >= 34 && (k.find("div.icon.volume-wave-0, div.icon.volume-wave-1, div.icon.volume-wave-3").removeClass("show").addClass("hide"), k.find("div.icon.volume-wave-2").removeClass("hide").addClass("show")), t.value <= 33 && t.value >= 1 && (k.find("div.icon.volume-wave-0, div.icon.volume-wave-2, div.icon.volume-wave-3").removeClass("show").addClass("hide"), k.find("div.icon.volume-wave-1").removeClass("hide").addClass("show")), t.value < 1 && t.value >= 0 && (k.find("div.icon.volume-wave-1, div.icon.volume-wave-2, div.icon.volume-wave-3").removeClass("show").addClass("hide"), k.find("div.icon.volume-wave-0").removeClass("hide").addClass("show"))
                                            }
                                          });
                                          k.find("div.icon.volume-speaker").click(function() {
                                            P.slider("value", "0"), k.find("div.icon.volume-wave-1, div.icon.volume-wave-2, div.icon.volume-wave-3").removeClass("show").addClass("hide"), k.find("div.icon.volume-wave-0").removeClass("hide").addClass("show")
                                          }), k.find('div.icon[class*="volume-wave"]').click(function() {
                                            P.slider("value", "100"), k.find("div.icon.volume-wave-0, div.icon.volume-wave-1, div.icon.volume-wave-2").removeClass("show").addClass("hide"), k.find("div.icon.volume-wave-3").removeClass("hide").addClass("show")
                                          })
                                        }
                                        $(".mwcp-controls .language:not(.icon)").click(function() {
                                          $(this).hasClass("active") ? b() : y()
                                        }), $("div.mwcp-control.language").mouseleave(function() {
                                          b()
                                        }), k.find("div.icon.slide-navigation").click(function() {
                                          $(this).toggleClass("active");
                                          $(this).offset();
                                          k.toggleClass("slide-navigation"), x.find("div.content").hide(), x.find("div.icon").removeClass("active"), n()
                                        }), _.mousemove(function() {
                                          _.addClass("hover"), k.addClass("slide-navigation"), n()
                                        }), _.mouseleave(function() {
                                          _.removeClass("hover"), k.removeClass("slide-navigation")
                                        }), _.mousestop(function() {
                                          _.removeClass("hover"), k.removeClass("slide-navigation")
                                        }, {
                                          delayToStop: 5e3
                                        }), n();
                                        var M, I = k.find("div.content.slide-navigation").find(".scrollable").data("jsp");
                                        $("div.content.slide-navigation div.icon.left").mousedown(function() {
                                          return M = setInterval(function() {
                                            return I.scrollByX(-90), !1
                                          }, 50), !1
                                        }), $("div.content.slide-navigation div.icon.right").mousedown(function() {
                                          return M = setInterval(function() {
                                            return I.scrollByX(90), !1
                                          }, 50), !1
                                        }), $(document).mouseup(function() {
                                          return clearInterval(M), !1
                                        }), k.find(".icon.enter-fullscreen").click(function() {
                                          _.fullScreen(!0)
                                        }), k.find(".icon.exit-fullscreen").click(function() {
                                          _.fullScreen(!1)
                                        }), $(document).on("fullscreenchange", function() {
                                          !1 !== $(document).fullScreen() && (!1 === _.hasClass("fullscreen") && _.addClass("fullscreen"), k.find(".icon.enter-fullscreen").hide(), k.find(".icon.exit-fullscreen").css("display", "inline-block"), setTimeout(i, 0)), !1 === $(document).fullScreen() && (!0 === _.hasClass("fullscreen") && _.removeClass("fullscreen"), k.find(".icon.exit-fullscreen").hide(), k.find(".icon.enter-fullscreen").css("display", "inline-block"), setTimeout(t, 0))
                                        }), mwcp.mwcpSetTextDimensions = o, mwcp.mwcpFitMedia = s, mwcp.mwcpInitialize = t, mwcp.mwcpInitializeFullscreen = i, mwcp.mwcpSetSlideNavigationScrollableWidth = w, mwcp.updateSlideOverview = u, mwcp.mwcpPlay = h, mwcp.mwcpPause = d, mwcp.mwcpContent65, mwcp.mwcpContent35, mwcp.mwcpHideModules = l, mwcp.mwcpLanguageHide = b, mwcp.mwcpSetupModules = a, mwcp.isLoaded = !0
                                      },
                                      function(e, t) {
                                        var i = e.parse,
                                        n = [1, 4, 5, 6, 10, 11];
                                        e.parse = function(s) {
                                          var o, a = 0;
                                          if (o = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/.exec(s)) {
                                            s = 0;
                                            for (var r; r = n[s]; ++s) o[r] = +o[r] || 0;
                                            o[2] = (+o[2] || 1) - 1, o[3] = +o[3] || 1, o[7] = o[7] ? +(o[7] + "00").substr(0, 3) : 0, o[8] !== t && "" !== o[8] || o[9] !== t && "" !== o[9] ? ("Z" !== o[8] && o[9] !== t && (a = 60 * o[10] + o[11], "+" === o[9] && (a = 0 - a)), o = e.UTC(o[1], o[2], o[3], o[4], o[5] + a, o[6], o[7])) : o = +new e(o[1], o[2], o[3], o[4], o[5], o[6], o[7])
                                          } else o = i ? i(s) : 0 / 0;
                                          return o
                                        }
                                      }(Date), LazyLoad = function(e) {
                                        function t(t, i) {
                                          var n, s = e.createElement(t);
                                          for (n in i) i.hasOwnProperty(n) && s.setAttribute(n, i[n]);
                                          return s
                                        }

                                        function i(e) {
                                          var t, i, n = c[e];
                                          n && (t = n.callback, i = n.urls, i.shift(), u = 0, i.length || (t && t.call(n.context, n.obj), c[e] = null, h[e].length && s(e)))
                                        }

                                        function n() {
                                          var t = navigator.userAgent;
                                          r = {
                                            async: e.createElement("script").async === !0
                                          }, (r.webkit = /AppleWebKit\//.test(t)) || (r.ie = /MSIE/.test(t)) || (r.opera = /Opera/.test(t)) || (r.gecko = /Gecko\//.test(t)) || (r.unknown = !0)
                                        }

                                        function s(s, u, d, p, f) {
                                          var m, g, v, y, b = function() {
                                            i(s)
                                          },
                                          w = "css" === s,
                                          _ = [];
                                          if (r || n(), u)
                                          if (u = "string" == typeof u ? [u] : u.concat(), w || r.async || r.gecko || r.opera) h[s].push({
                                            urls: u,
                                            callback: d,
                                            obj: p,
                                            context: f
                                          });
                                          else
                                          for (m = 0, g = u.length; g > m; ++m) h[s].push({
                                            urls: [u[m]],
                                            callback: m === g - 1 ? d : null,
                                            obj: p,
                                            context: f
                                          });
                                          if (!c[s] && (y = c[s] = h[s].shift())) {
                                            for (l || (l = e.head || e.getElementsByTagName("head")[0]), u = y.urls, m = 0, g = u.length; g > m; ++m) d = u[m], w ? v = r.gecko ? t("style") : t("link", {
                                              href: d,
                                              rel: "stylesheet"
                                            }) : (v = t("script", {
                                              src: d
                                            }), v.async = !1), v.className = "lazyload", v.setAttribute("charset", "utf-8"), r.ie && !w ? v.onreadystatechange = function() {
                                              /loaded|complete/.test(v.readyState) && (v.onreadystatechange = null, b())
                                            } : w && (r.gecko || r.webkit) ? r.webkit ? (y.urls[m] = v.href, a()) : (v.innerHTML = '@import "' + d + '";', o(v)) : v.onload = v.onerror = b, _.push(v);
                                            for (m = 0, g = _.length; g > m; ++m) l.appendChild(_[m])
                                          }
                                        }

                                        function o(e) {
                                          var t;
                                          try {
                                            t = !!e.sheet.cssRules
                                          } catch (n) {
                                            return u += 1, void(200 > u ? setTimeout(function() {
                                              o(e)
                                            }, 50) : t && i("css"))
                                          }
                                          i("css")
                                        }

                                        function a() {
                                          var e, t = c.css;
                                          if (t) {
                                            for (e = d.length; --e >= 0;)
                                            if (d[e].href === t.urls[0]) {
                                              i("css");
                                              break
                                            }
                                            u += 1, t && (200 > u ? setTimeout(a, 50) : i("css"))
                                          }
                                        }
                                        var r, l, c = {},
                                        u = 0,
                                        h = {
                                          css: [],
                                          js: []
                                        },
                                        d = e.styleSheets;
                                        return {
                                          css: function(e, t, i, n) {
                                            s("css", e, t, i, n)
                                          },
                                          js: function(e, t, i, n) {
                                            s("js", e, t, i, n)
                                          }
                                        }
                                      }(this.document);
                                      var iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent),
                                      iPad = /iPad/g.test(navigator.userAgent),
                                      Android = /Android/gi.test(navigator.userAgent);
                                      if ("undefined" == typeof API_ENDPOINT || "" === API_ENDPOINT) var API_ENDPOINT = "//player.meta-fusion.com/";
                                      var languageMapping = {
                                        cn: "普通话/普通話",
                                        de: "Deutsch",
                                        en: "English",
                                        es: "Español",
                                        un: "Floor"
                                      },
                                      metaplayer = {};
                                      ! function(e) {
                                        e.DEBUG = 0
                                      }(metaplayer),
                                      function(e) {
                                        e.utils = {}
                                      }(metaplayer),
                                      function() {
                                        this.exists = function(e) {
                                          switch (typeof e) {
                                            case "string":
                                            return e.length > 0;
                                            case "object":
                                            return null !== e;
                                            case "undefined":
                                            return !1
                                          }
                                          return !0
                                        }, this.deepGet = function(e, t, i) {
                                          "string" == typeof t && (t = t.split("."));
                                          var n = function(e, t, i) {
                                            if ("undefined" == typeof e || null === e) return i;
                                            if (0 === t.length) return e;
                                            var s = e[t[0]],
                                            o = t.slice(1);
                                            return n(s, o, i)
                                          };
                                          return n(e, t, i)
                                        }, this.isEmpty = function(e) {
                                          var t = Object.prototype.hasOwnProperty;
                                          if (null === e) return !0;
                                          if (e.length && e.length > 0) return !1;
                                          if (0 === e.length) return !0;
                                          for (var i in e)
                                          if (t.call(e, i)) return !1;
                                          return !0
                                        }, this.hash = function(e) {
                                          this.exists(e) || (e = "");
                                          var t = 5381;
                                          for (i = 0; i < e.length; i++) char = e.charCodeAt(i), t = (t << 5) + t + char;
                                          return "h" + t
                                        }, this.findUrls = function(e) {
                                          for (var t, i = (e || "").toString(), n = [], s = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi; null !== (t = s.exec(i));) {
                                            var o = t[0];
                                            n.push(o)
                                          }
                                          return n
                                        }, this.twoDigit = function(e) {
                                          return 10 > e ? "0" + e : "" + e
                                        }, this.timestamp2datestring = function(e) {
                                          var t = new Date(Date.parse(e)),
                                          i = this.twoDigit(t.getDate()),
                                          n = this.twoDigit(t.getMonth() + 1),
                                          s = t.getFullYear(),
                                          o = this.twoDigit(t.getHours()),
                                          a = this.twoDigit(t.getMinutes()),
                                          r = this.twoDigit(t.getSeconds());
                                          return i + "." + n + "." + s + " " + o + ":" + a + ("00" === r ? "" : ":" + r)
                                        }, this.seconds2timecode = function(e) {
                                          var t, i, n = Math.round(e);
                                          return t = Math.floor(n / 3600), i = Math.floor(n / 60), n -= 60 * i, i -= 60 * t, i = this.twoDigit(i), n = this.twoDigit(n), t + ":" + i + ":" + n
                                        }, this.percent2seconds = function(e) {
                                          return metaplayer.Timeline.getDuration() * e / 100
                                        }, this.seconds2percent = function(e) {
                                          return 100 * e / (1 * metaplayer.Timeline.getDuration())
                                        }, this.strEndsWith = function(e, t) {
                                          return -1 !== e.indexOf(t, e.length - t.length)
                                        }, this.hexc = function(e) {
                                          var t = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
                                          delete t[0];
                                          for (var i = 1; 3 >= i; ++i) t[i] = parseInt(t[i]).toString(16), 1 === t[i].length && (t[i] = "0" + t[i]);
                                          return t.join("")
                                        }, this.AddEventListener = function(e, t, i) {
                                          $(e).on(t, i)
                                        }, this.RemoveEventListener = function(e, t, i) {
                                          $(e).off(t, i)
                                        }, this.DispatchEvent = function(e, t, i) {
                                          var n = $.Event(t);
                                          if (n.payload = i, $(e).trigger(n), 0 === t.indexOf("Timeline")) {
                                            var s = $.Event(t.replace("Timeline", "").toLowerCase());
                                            window.postMessage(JSON.stringify(s), "*")
                                          }
                                        }, this.verbose = function(e) {
                                          metaplayer.DEBUG >= 4 && window.console && this.exists(console.log) && console.log(e)
                                        }, this.debug = function(e) {
                                          metaplayer.DEBUG >= 3 && window.console && this.exists(console.debug) && console.debug(e)
                                        }, this.info = function(e) {
                                          metaplayer.DEBUG >= 2 && window.console && this.exists(console.info) && console.info(e)
                                        }, this.warn = function(e) {
                                          metaplayer.DEBUG >= 1 && window.console && this.exists(console.warn) && console.warn(e)
                                        }, this.error = function(e) {
                                          metaplayer.DEBUG >= 0 && window.console && this.exists(console.error) && console.error(e)
                                        }
                                      }.apply(metaplayer.utils), String.prototype.trim || (String.prototype.trim = function() {
                                        return this.replace(/^\s+|\s+$/g, "")
                                      }), metaplayer.eventElement = document.createElement("div"), metaplayer.eventElement.id = "metaplayerEventElement", metaplayer.eventElement.style.display = "none",
                                      function() {
                                        this.version = "1.1.6", this.name = "metaplayer", this.isLoaded = !1, this.isLoading = !1, this.autostart = !0, this.config = {
                                          lecture: -1,
                                          token: "",
                                          thumbnail_width: 300,
                                          slide_width: 1024,
                                          stages: {
                                            1: "content-1",
                                            2: "content-2",
                                            3: "content-3",
                                            4: "teaser"
                                          },
                                          timeline: [],
                                          info: {
                                            timestamp: "1970-01-01T00:00:00+0000",
                                            collection: -1,
                                            title: "",
                                            sessiontitle: "",
                                            datestart: "1970-01-01T00:00:00+0000",
                                            dateend: "1970-01-01T00:00:00+0000",
                                            location: "",
                                            type: "",
                                            category1: "",
                                            category2: "",
                                            category3: "",
                                            metatitle: "",
                                            metadescription: "",
                                            metakeywords: "",
                                            infotext: "",
                                            event: {},
                                            thumbnail: {},
                                            pdf: {},
                                            speakers: [],
                                            tags: [],
                                            layout: "layout-1"
                                          }
                                        };
                                        var e = this,
                                        i = e.utils;
                                        this.$ui = {}, this.$ui.slider = $("#mwcp-timeline").find("div.slider"), this.$ui.time = $("div.mwcp").find("div.mwcp-controls").find("span.time"), this.$ui.desc = $("div.mwcp").find("div.mwcp-controls").find("span.slide"), this.$ui.content3 = $("#content-3"), this.$ui.timelinemarker = $("#mwcp-timeline .timeline-slider .slider"), this.$ui.modules = {}, this.$ui.modules.info = $("#content-info"), this.$ui.modules.schedule = $("#content-schedule"), this.$ui.modules.chapters = $("#chapters-content"), this.$ui.modules.slideoverview = $("#slideoverview-content"), this.$ui.modules.buttons = {}, this.$ui.modules.buttons.home = $("div.mwcp").find("div.mwcp-modules").find("div.icon.home").hide(), this.$ui.modules.buttons.download = $("div.mwcp").find("div.mwcp-modules").find("div.icon.download").hide(), this.$ui.modules.buttons.chapters = $("div.mwcp").find("div.mwcp-modules").find("div.icon.chapters").hide(), this.$ui.modules.buttons.schedule = $("div.mwcp").find("div.mwcp-modules").find("div.icon.schedule").hide(), this.$ui.modules.buttons.slides = $("div.mwcp").find("div.mwcp-modules").find("div.icon.slides").hide(), this.$ui.modules.buttons.search = $("div.mwcp").find("div.mwcp-modules").find("div.icon.search").hide(), this.$ui.modules.buttons.info = $("div.mwcp").find("div.mwcp-modules").find("div.icon.info").hide(), this.$ui.modules.buttons.help = $("div.mwcp").find("div.mwcp-modules").find("div.icon.help").hide(), this.$ui.controls = {}, this.$ui.controls.slidenavigation = $("table#slidenav-content"), this.$ui.controls.slidenavigation = $("div.mwcp").find("div.mwcp-controls").find("div.content.slide-navigation"), this.$ui.controls.languageMenu = $("div.mwcp").find("div.mwcp-control.language"), this.$ui.controls.buttons = {}, this.$ui.controls.buttons.slidenavigation = $("div.mwcp").find("div.mwcp-controls").find("div.icon.slide-navigation"), this.$ui.controls.buttons.forward = $("div.mwcp").find("div.mwcp-controls").find("div.icon.forward"), this.$ui.controls.buttons.play = $("div.mwcp").find("div.mwcp-controls").find("div.icon.play"), this.$ui.controls.buttons.pause = $("div.mwcp").find("div.mwcp-controls").find("div.icon.pause"), this.$ui.controls.buttons.backward = $("div.mwcp").find("div.mwcp-controls").find("div.icon.backward"), this.$ui.controls.buttons.language = $("div.mwcp").find("div.mwcp-controls").find("div.language"), this.$ui.controls.buttons.fullscreen = $("div.mwcp").find("div.mwcp-controls").find("div.fullscreen"), this.lectureUnavailable = function() {
                                          $("div.mwcp").find("div.mwcp-frame").css({
                                            padding: "0"
                                          }), $("div.mwcp").find("div.mwcp-stage").remove(), $("div.mwcp").find("div.mwcp-notice").fadeIn("fast", function() {
                                            $("div.mwcp").find("div.mwcp-splash").remove()
                                          })
                                        }, this.lectureAccessDenied = function() {
                                          $("div.mwcp").find("div.mwcp-frame").css({
                                            padding: "0"
                                          }), $("div.mwcp").find("div.mwcp-stage").remove(), $("div.mwcp").find("div.mwcp-teaser").fadeIn("fast", function() {
                                            $("div.mwcp").find("div.mwcp-splash").remove()
                                          })
                                        }, this.setup = function(t) {
                                          this.utils.exists(t.lecture) ? this.config.lecture = t.lecture : this.utils.error("no lecture id given"), this.utils.exists(t.token) && (this.config.token = t.token), this.utils.exists(t.stages) && (this.config.stages = t.stages), this.config.timeline = t.timeline;
                                          var i = {};
                                          this.utils.exists(e.config.token) && (i.access_token = e.config.token), $.ajax({
                                            dataType: "json",
                                            url: API_ENDPOINT + "info/" + e.config.lecture + ".json",
                                            data: i,
                                            statusCode: {
                                              403: e.lectureAccessDenied
                                            }
                                          }).done(function(t) {
                                            e.parseInfo(t)
                                          }).fail(e.lectureUnavailable)
                                        }, this.proceed = function() {
                                          e.isLoading = !0, e.loadTimeline(), $("div.mwcp").find("div.mwcp-controls").find("div.icon.play").click(e.play), $("div.mwcp").find("div.mwcp-controls").find("div.icon.pause").click(e.pause), $("div.mwcp").find("div.mwcp-controls").find("div.icon.forward").click(e.next), $("div.mwcp").find("div.mwcp-controls").find("div.icon.backward").click(e.prev);
                                          var t = {};
                                          this.utils.exists(e.config.token) && (t.access_token = e.config.token), $.ajax({
                                            dataType: "json",
                                            url: API_ENDPOINT + "chapters/" + e.config.lecture + ".json",
                                            data: t,
                                            statusCode: {
                                              403: e.lectureAccessDenied
                                            }
                                          }).done(e.parseChapters).fail(e.lectureUnavailable), $(".mwcp-popup").fadeOut("fast"), e.isLoaded = !0
                                        }, this.load = function(t) {
                                          e.isLoading || (e.autostart = "undefined" != typeof t ? t : !1, e.proceed())
                                        }, this.parseInfo = function(e) {
                                          var t = metaplayer,
                                          i = t.utils;
                                          if (i.exists(e) && (t.config.info = e, i.exists(e.layout) && "" !== e.layout && (t.layout = e.layout)), document.title = t.config.info.title + " - meta-player", $(document).width() < 300 || $(document).height() < 150) $("div.mwcp").find("div.mwcp-stage").remove(), $("div.mwcp").find("div.mwcp-splash").remove(), $("div.mwcp").find("div.mwcp-teaser").remove(), $(".mwcp-popup").css("background-image", "url(" + t.config.info.thumbnail.url + "?w=" + $(document).width() + ")"), $(".mwcp-popup").css("background-position", "center center"), $(".mwcp-popup").css("background-repeat", "no-repeat"), $(".mwcp-popup").css("background-size", "cover"), $(".mwcp-popup .icon").fadeIn("fast"), $(".mwcp-popup").click(function() {
                                            window.open(API_ENDPOINT + t.config.lecture, "_blank")
                                          });
                                          else {
                                            $("div.mwcp").find("div.mwcp-splash").show(), mwcp.setup(t.layout), $(".mwcp-popup").css("background-image", "url(" + t.config.info.thumbnail.url + "?w=" + $(document).width() + ")"), $(".mwcp-popup").css("background-position", "center center"), $(".mwcp-popup").css("background-repeat", "no-repeat"), $(".mwcp-popup").css("background-size", "cover"), $(".mwcp-popup .icon").fadeIn("fast"), $(".mwcp-popup").click(function() {
                                              metaplayer.proceed()
                                            });
                                            var n = 1024,
                                            s = screen.width / 3;
                                            t.config.thumbnail_width = Math.round(window.devicePixelRatio > 1 ? s * window.devicePixelRatio > n ? n : s * window.devicePixelRatio : s), t.config.slide_width = Math.round(screen.width > n ? n : screen.width);
                                            var o = !1;
                                            if (t.utils.exists(t.config.info.event)) {
                                              var a = new Array,
                                              r = new Array,
                                              l = metaplayer.$ui.modules.schedule.empty(),
                                              c = l.append("<ul/>").find("ul"),
                                              u = 1;
                                              t.utils.exists(t.config.info.event.agenda) && (a.push('<li><a href="#tabs-' + u + '">Agenda</a></li>'), r.push('<div style="clear:both;" id="tabs-' + u + '">' + t.config.info.event.agenda + "</div>"), u++, o = !0), t.utils.exists(t.config.info.event.workprogramme) && (a.push('<li><a href="#tabs-' + u + '">Workprogramme</a></li>'), r.push('<div id="tabs-' + u + '">' + t.config.info.event.workprogramme + "</div>"), o = !0), c.html(a.join("")), l.append(r.join(""))
                                            }
                                            switch (o ? metaplayer.$ui.modules.buttons.schedule.show() : metaplayer.$ui.modules.buttons.schedule.hide(), t.layout) {
                                              case "layout-1":
                                              case "layout-2":
                                              case "layout-3":
                                              t.$ui.content3.empty(), t.$ui.content3.append(t.config.info.infotext), t.$ui.content3.find("img").remove();
                                              break;
                                              case "layout-4":
                                              t.$ui.modules.info.empty(), t.$ui.modules.info.append(t.config.info.infotext)
                                            }
                                          }
                                        }, this.setupModules = function() {
                                          "" !== e.$ui.modules.info.html() && e.$ui.modules.buttons.info.fadeIn(600), e.Timeline.getNumItems() > 1 && e.$ui.modules.buttons.slides.fadeIn(600), window.setTimeout(mwcp.mwcpSetupModules, 0), _paq.push(["setDocumentTitle", document.title]), _paq.push(["trackPageView"]), _paq.push(["enableLinkTracking"]), "player.meta-fusion.com" === document.domain && ! function() {
                                            var e = "//stats.meta-fusion.com/";
                                            _paq.push(["setTrackerUrl", e + "piwik.php"]), _paq.push(["setSiteId", "33"]);
                                            var t = document,
                                            i = t.createElement("script"),
                                            n = t.getElementsByTagName("script")[0];
                                            i.type = "text/javascript", i.defer = !0, i.async = !0, i.src = e + "piwik.js", n.parentNode.insertBefore(i, n)
                                          }()
                                        }, this.parseChapters = function(e) {
                                          var t = e.chapters;
                                          if ("undefined" != typeof t && t.length > 0) {
                                            for (var i = new Array, n = -1, s = metaplayer.$ui.modules.chapters.append("<table/>").find("table"), o = 0, a = t.length; a > o; o++) i[++n] = '<tr onclick="mwcp.mwcpHideModules();metaplayer.seekTo(' + t[o].time + ');"><td>', i[++n] = t[o].text, i[++n] = "</td><td>", i[++n] = t[o].time, i[++n] = "</td></tr>";
                                            s.html(i.join("")), metaplayer.$ui.modules.buttons.chapters.show()
                                          }
                                        }, this.loadTimeline = function() {
                                          var e = metaplayer,
                                          t = e.utils,
                                          i = {};
                                          switch (this.utils.exists(e.config.token) && (i.access_token = e.config.token), typeof e.config.timeline) {
                                            case "undefined":
                                            $.ajax({
                                              dataType: "json",
                                              url: API_ENDPOINT + "timeline/" + e.config.lecture + ".json",
                                              data: i,
                                              statusCode: {
                                                403: e.lectureAccessDenied
                                              }
                                            }).done(e.parseTimeline).fail(e.lectureUnavailable);
                                            break;
                                            case "string":
                                            1 === t.findUrls(e.config.timeline).length ? $.ajax({
                                              dataType: "json",
                                              url: e.config.timeline,
                                              data: i,
                                              statusCode: {
                                                403: e.lectureAccessDenied
                                              }
                                            }).done(e.parseTimeline).fail(e.lectureUnavailable) : t.warn("metaplayer: no valid timeline URL");
                                            break;
                                            case "object":
                                            e.parseTimeline(e.config.timeline);
                                            break;
                                            default:
                                            t.warn("metaplayer: no valid timeline items")
                                          }
                                        }, this.parseTimeline = function(e) {
                                          if ("undefined" == typeof mwcp.isLoaded || !1 === mwcp.isLoaded) setTimeout(function() {
                                            metaplayer.parseTimeline(e)
                                          }, 100);
                                          else {
                                            var i = metaplayer,
                                            n = i.utils;
                                            if (n.exists(e) && e.hasOwnProperty("items")) {
                                              for (t in e.items)
                                              if (e.items[t].event.hasOwnProperty("medium") && e.items[t].event.medium.hasOwnProperty("asset") && e.items[t].event.medium.asset.hasOwnProperty("type")) switch (e.items[t].event.medium.asset.type) {
                                                case "video":
                                                n.exists(e.items[t].stage) || (e.items[t].stage = 1);
                                                var s = new i.Video(e.items[t].event.medium.asset.url, e.items[t].event.medium.inpoint, e.items[t].event.medium.outpoint, i.config.stages[e.items[t].stage], e.items[t].event.medium.description, e.items[t].event.medium.text);
                                                e.items[t].medium = s;
                                                break;
                                                case "download":
                                                break;
                                                case "text":
                                                break;
                                                case "html":
                                                break;
                                                case "url":
                                                n.exists(e.items[t].stage) || (e.items[t].stage = 1);
                                                var s = new i.IFrame(e.items[t].event.medium.asset.url, e.items[t].event.medium.inpoint, e.items[t].event.medium.outpoint, i.config.stages[e.items[t].stage], e.items[t].event.medium.description, e.items[t].event.medium.text);
                                                e.items[t].medium = s;
                                                break;
                                                case "image":
                                                case "image_slide":
                                                n.exists(e.items[t].stage) || (e.items[t].stage = 1);
                                                var s = new i.Image(e.items[t].event.medium.asset.url, e.items[t].event.medium.inpoint, e.items[t].event.medium.outpoint, i.config.stages[e.items[t].stage], e.items[t].event.medium.description, e.items[t].event.medium.text);
                                                e.items[t].medium = s;
                                                break;
                                                case "image_thumbnail":
                                              }
                                              i.config.timeline = e.items
                                            }
                                            i.$ui.controls.languageMenu.empty();
                                            var o = i.$ui.controls.languageMenu.append("<ul/>").find("ul"),
                                            a = [],
                                            r = null;
                                            for (var l in i.config.timeline) i.config.timeline[l].hasOwnProperty("language") && -1 === $.inArray(i.config.timeline[l].language.toLowerCase(), a) && (a.push(i.config.timeline[l].language.toLowerCase()), (null === r || "un" === i.config.timeline[l].language.toLowerCase()) && (r = i.config.timeline[l].language.toLowerCase()));
                                            if (a.sort(), i.$ui.controls.buttons.language.find("span").text(""), a.length > 0)
                                            for (var c in a) {
                                              var u = i.utils.deepGet(languageMapping, a[c], a[c]),
                                              h = $("<li/>");
                                              h.text(u), h.data("language", a[c]), a[c] === r && (h.addClass("active"), i.$ui.controls.buttons.language.find("span").text(u), metaplayer.selectLanguage(a[c])), h.click(function() {
                                                metaplayer.selectLanguage($(this).data("language")), i.$ui.controls.languageMenu.find("li.active").removeClass("active"), $(this).addClass("active");
                                                var e = i.utils.deepGet(languageMapping, $(this).data("language"), $(this).data("language"));
                                                i.$ui.controls.buttons.language.find("span").text(e), Modernizr.touch && setTimeout(mwcp.mwcpLanguageHide, 600)
                                              }), o.append(h)
                                            } else i.$ui.controls.buttons.language.hide();
                                            for (var l in i.config.timeline) i.Timeline.addItem(new i.Timeline.Item(i.config.timeline[l]));
                                            if (i.updateSlideNavigation(r), i.updateSlideOverview(r), i.$ui.time.html(n.seconds2timecode(0) + " / " + n.seconds2timecode(i.Timeline.getDuration())), i.addEventListener("PositionUpdate", i.positionUpdate), i.addEventListener("MediumLoaded", i.mediumLoaded), i.addEventListener("TimelinePlaying", mwcp.mwcpPlay), i.addEventListener("TimelinePaused", mwcp.mwcpPause), i.addEventListener("TimelineStopped", mwcp.mwcpPause), i.addEventListener("UI_PositionUpdate", i.uiPositionUpdate), i.addEventListener("UI_TimelineSlideStart", i.uiTimelineSlideStart), i.preload(), !0 === iOS) $("div.mwcp").find("div.mwcp-splash").fadeOut("fast").remove(), $(".mwcp-bigbutton").fadeIn("fast"), $(".mwcp-bigbutton").click(function() {
                                              metaplayer.play(), $(this).fadeOut("fast")
                                            });
                                            else if (!0 === Android) {
                                              i.addEventListener("MediumLoaded", function(e, t) {
                                                var n = e.payload;
                                                if ("video" === n.type) {
                                                  $("div.mwcp").find("div.mwcp-splash").fadeOut("fast").remove(), $(".mwcp-bigbutton").fadeIn("fast"), $(".mwcp-bigbutton").click(function() {
                                                    metaplayer.play(), $(this).fadeOut("fast")
                                                  });
                                                  try {
                                                    i.removeEventListener("MediumLoaded", t)
                                                  } catch (s) {
                                                    alert(s)
                                                  }
                                                }
                                              }, !1)
                                            } else $("div.mwcp").find("div.mwcp-splash").fadeOut("fast").remove(), i.autostart && metaplayer.play()
                                          }
                                        }, this.updateSlideNavigation = function(t) {
                                          ("undefined" == typeof t || null === t) && (t = metaplayer.Timeline.language);
                                          var n = e.$ui.controls.slidenavigation.find("table#slidenav-content").empty().append("<tr/>").find("tr");
                                          e.$ui.timelinemarker.find(".marker").remove();
                                          var s = !1;
                                          for (var o in e.config.timeline)
                                          if (e.config.timeline[o].hasOwnProperty("medium") && "image" === e.config.timeline[o].medium.type && (!1 === e.config.timeline[o].hasOwnProperty("language") || e.config.timeline[o].language.toLowerCase() === t)) {
                                            s = !0;
                                            var a = $("<img/>");
                                            a.attr("src", e.config.timeline[o].medium.src + "?w=" + e.config.thumbnail_width), a.data("id", e.config.timeline[o].medium.id), a.data("inpoint", e.config.timeline[o].inpoint), a.data("outpoint", e.config.timeline[o].outpoint), a.click(function() {
                                              metaplayer.seekTo($(this).data("inpoint"))
                                            }), n.append(a), a.wrap("<td/>");
                                            var r = $("<div/>");
                                            r.addClass("marker"), r.css("left", i.seconds2percent(e.config.timeline[o].inpoint) + "%"), e.$ui.timelinemarker.append(r)
                                          }!1 === s ? (e.$ui.controls.slidenavigation.hide(), e.$ui.controls.buttons.slidenavigation.hide(), e.$ui.controls.buttons.forward.hide(), e.$ui.controls.buttons.backward.hide()) : (e.$ui.controls.slidenavigation.show(), e.$ui.controls.buttons.slidenavigation.show(), e.$ui.controls.buttons.forward.show(), e.$ui.controls.buttons.backward.show(), mwcp.mwcpSetSlideNavigationScrollableWidth())
                                        }, this.updateSlideOverview = function(t) {
                                          ("undefined" == typeof t || null === t) && (t = metaplayer.Timeline.language);
                                          var i = e.$ui.modules.slideoverview.empty().append("<ul/>").find("ul");
                                          for (var n in e.config.timeline)
                                          if (e.config.timeline[n].hasOwnProperty("medium") && "image" === e.config.timeline[n].medium.type && (!1 === e.config.timeline[n].hasOwnProperty("language") || e.config.timeline[n].language.toLowerCase() === t)) {
                                            var s = $("<img/>");
                                            s.attr("src", e.config.timeline[n].medium.src + "?w=" + e.config.thumbnail_width), s.data("id", e.config.timeline[n].id), s.data("inpoint", e.config.timeline[n].inpoint), s.data("outpoint", e.config.timeline[n].outpoint), s.click(function() {
                                              mwcp.mwcpHideModules(), metaplayer.seekTo($(this).data("inpoint"))
                                            }), i.append(s), s.wrap("<li/>").wrap("<table/>").wrap("<tr/>").wrap("<td/>")
                                          }
                                          mwcp.updateSlideOverview()
                                        }, this.preload = function() {
                                          e.setupModules(), e.Timeline.load()
                                        }, this.isReady = function() {
                                          return e.isLoaded && e.Timeline.isLoaded()
                                        }, this.isPlaying = function() {
                                          return e.Timeline.isPlaying()
                                        }, this.playpause = function() {
                                          return !1 === iOS && !1 === e.isReady() ? (e.isLoading || e.load(!0), void setTimeout(metaplayer.playpause, 100)) : e.isPlaying() ? e.pause() : e.play()
                                        }, this.play = function() {
                                          return !1 === iOS && !1 === e.isReady() ? (e.isLoading || e.load(!0), void setTimeout(metaplayer.play, 100)) : void(e.isPlaying() || e.Timeline.play())
                                        }, this.pause = function() {
                                          return !1 === iOS && !1 === e.isReady() ? (e.isLoading || e.load(!0), void setTimeout(metaplayer.pause, 100)) : void(e.isPlaying() && e.Timeline.pause())
                                        }, this.stop = function() {
                                          e.Timeline.stop()
                                        }, this.next = function() {
                                          e.Timeline.next(), e.Timeline.play()
                                        }, this.prev = function() {
                                          e.Timeline.prev(), e.Timeline.play()
                                        }, this.selectLanguage = function(t) {
                                          e.Timeline.selectLanguage(t), e.updateSlideNavigation(t), e.updateSlideOverview(t)
                                        }, this.seekTo = function(t) {
                                          return !1 === iOS && !1 === e.isReady() ? (e.isLoading || e.load(!0), void setTimeout(function() {
                                            metaplayer.seekTo(t)
                                          }, 100)) : (e.Timeline.seekTo(1e3 * t), void e.Timeline.play())
                                        }, this.mediumLoaded = function(e) {
                                          e.payload;
                                          mwcp.mwcpInitialize()
                                        }, this.positionUpdate = function(t) {
                                          if ("false" === $("#mwcp-timeline").find("div.slider").data("sliding")) {
                                            var n = t.payload,
                                            s = i.seconds2percent(n);
                                            e.$ui.slider.slider("value", s), e.$ui.time.html(i.seconds2timecode(n) + " / " + i.seconds2timecode(e.Timeline.getDuration()))
                                          }
                                          var o = $("div.content.slide-navigation").find(".scrollable").data("jsp"),
                                          a = !0,
                                          r = $("table#slidenav-content tr td").length;
                                          $("table#slidenav-content tr td").each(function() {
                                            if ($(this).find("img").data("inpoint") <= n && $(this).find("img").data("outpoint") > n) {
                                              if (a = !1, !$(this).hasClass("current") && ($(this).removeClass("past").addClass("current"), o))
                                              if (o.scrollToElement(this, !0), o.getPercentScrolledX() < 1) o.scrollBy(-(o.getContentPane().width() / 2) + $(this).width() / 2);
                                              else {
                                                var e = r - ($(this).index() + 1),
                                                t = 1 - (80 * e + 10) / (80 * r + 10);
                                                o.scrollToPercentX(t + 4581818181818182e-20 * o.getContentPane().width())
                                              }
                                            } else $(this).removeClass("current"), !0 === a ? $(this).addClass("past") : $(this).removeClass("past")
                                          })
                                        }, this.uiPositionUpdate = function(t) {
                                          var n = t.payload,
                                          s = i.percent2seconds(n);
                                          e.$ui.time.html(e.utils.seconds2timecode(s)), e.seekTo(s)
                                        }, this.uiTimelineSlideStart = function() {
                                          e.Timeline.isPlaying() && e.Timeline.pause()
                                        }, this.dispatchEvent = function(e, t) {
                                          switch (e) {
                                            case "PositionUpdate":
                                            i.verbose(this.name + " | [" + e + "] " + t);
                                            break;
                                            default:
                                            i.debug(this.name + " | [" + e + "] " + (window.JSON && JSON.stringify(t)))
                                          }
                                          this.utils.DispatchEvent(this.eventElement, e, t)
                                        }, this.addEventListener = function(e, t) {
                                          i.debug(this.name + " | addEventListener [" + e + "]"), this.utils.AddEventListener(this.eventElement, e, t)
                                        }, this.removeEventListener = function(e, t) {
                                          i.info(this.name + " | removeEventListener [" + e + "]"), this.utils.RemoveEventListener(this.eventElement, e, t)
                                        }
                                      }.apply(metaplayer),
                                      function(e) {
                                        e.Timeline = {}
                                      }(metaplayer), metaplayer.Timeline.Item = function(e) {
                                        var t = metaplayer.utils;
                                        t.exists(e) || (e = {}), this.medium = t.exists(e.medium) ? e.medium : null, this.inpoint = t.exists(e.inpoint) ? 1e3 * e.inpoint : 0, this.outpoint = t.exists(e.outpoint) && e.outpoint >= e.inpoint ? 1e3 * e.outpoint : e.inpoint, this.syncDelay = 0, this.language = t.exists(e.language) ? e.language : null
                                      },
                                      function() {
                                        function e(e, t) {
                                          return e.inpoint - t.inpoint
                                        }

                                        function t() {
                                          0 !== l.length && (f > 0 || !isNaN(d) && d > p ? (metaplayer.utils.debug("[SYNC] out of sync, check #" + f + ", biggestSyncDelay: " + d + ", maxSyncDelay: " + p), r = (new Date).getTime() - o, n(o, p)) : (o = (new Date).getTime() - r, i(l, o), o >= a && (metaplayer.utils.debug("End of timeline: stopping."), metaplayer.stop()), metaplayer.dispatchEvent("PositionUpdate", o / 1e3)))
                                        }

                                        function i(e, t) {
                                          for (var i = metaplayer.Timeline.getActiveItems(e, t), n = metaplayer.Timeline.getInactiveItems(e, t), s = 0; s < n.length; s++) n[s].medium.isActive() && n[s].medium.stop();
                                          for (var s = 0; s < i.length; s++) metaplayer.utils.isEmpty(i[s].medium) || (i[s].medium.isPlaying() || i[s].medium.play(), "video" !== i[s].medium.type && metaplayer.$ui.desc.html(metaplayer.Timeline.getItemTimelinePositionAsString(i[s])), i[s].medium.hasPosition() && !isNaN(i[s].medium.getPosition()) && i[s].medium.getPosition() > 0 && (i[s].syncDelay = i[s].medium.getPosition() + i[s].inpoint / 1e3 - t / 1e3, d = d > Math.abs(i[s].syncDelay) ? d : Math.abs(i[s].syncDelay)))
                                        }

                                        function n(e, t) {
                                          var n = !0;
                                          d = 0;
                                          for (var o = metaplayer.Timeline.getActiveItems(), a = 0; a < o.length; a++)
                                          if (!metaplayer.utils.isEmpty(o[a].medium) && o[a].medium.hasPosition())
                                          if (isNaN(o[a].medium.getPosition())) n = !1;
                                          else if (o[a].syncDelay = o[a].medium.getPosition() + o[a].inpoint / 1e3 - e / 1e3, !isNaN(o[a].syncDelay)) {
                                            if (Math.abs(o[a].syncDelay) <= t) {
                                              metaplayer.utils.debug("[SYNC] skip sync: medium delay (" + Math.abs(o[a].syncDelay) + ") <= maxSyncDelay (" + t + ")");
                                              break
                                            }
                                            if (o[a].medium.isLoaded() === !0 && o[a].medium.isSeeking() === !1)
                                            if (!0 === Android)
                                            if (0 === f) {
                                              var r = e / 1e3 - o[a].inpoint / 1e3;
                                              r > 0 && (metaplayer.utils.debug("[SYNC] ANDROID HACK: setPosition [" + o[a].medium.src + "] pos= " + e / 1e3), o[a].medium.setPosition(e / 1e3 - o[a].inpoint / 1e3))
                                            } else o[a].medium.getPosition() >= 0 && (metaplayer.utils.debug("[SYNC] ANDROID HACK: metaplayer.seekTo = " + o[a].medium.getPosition()), metaplayer.seekTo(o[a].medium.getPosition()));
                                            else(0 === f || f % 5) && (metaplayer.utils.info("[SYNC] init sync: delay = " + o[a].syncDelay + " sec [" + o[a].medium.src + "] pos= " + e / 1e3), o[a].medium.setPosition(e / 1e3 - o[a].inpoint / 1e3));
                                            o[a].medium.isPlaying() || i(), isNaN(o[a].medium.getPosition()) || isNaN(o[a].syncDelay) || (d = d > Math.abs(o[a].syncDelay) ? d : Math.abs(o[a].syncDelay), n = !1)
                                          }(n || ++f > m) && (metaplayer.utils.debug(n ? "[SYNC] synchronized (biggestSyncDelay < " + t + " sec)" : "[SYNC] giving up to synchronize (biggestSyncDelay = " + d + " sec)"), s())
                                        }

                                        function s() {
                                          metaplayer.utils.debug("[SYNC] resetting sync"), f = 0, d = 0
                                        }
                                        this.name = "Timeline";
                                        var o = 0,
                                        a = -1,
                                        r = 0,
                                        l = new Array,
                                        c = !1,
                                        u = null,
                                        h = 100,
                                        d = 0,
                                        p = .5,
                                        f = 0,
                                        m = 20,
                                        g = null;
                                        metaplayer.addEventListener("MediumLoaded", function(e) {
                                          "video" === e.payload.type && s()
                                        }), this.getMaxSyncDelay = function() {
                                          return p
                                        }, this.load = function() {
                                          var e = this.getActiveItems();
                                          null !== u && clearInterval(u);
                                          for (var t = 0; t < e.length; t++) e[t].medium.load(), metaplayer.$ui.desc.html(metaplayer.Timeline.getItemTimelinePositionAsString(e[t]))
                                        }, this.isLoaded = function() {
                                          for (var e = this.getActiveItems(), t = metaplayer.utils.isEmpty(e) ? !1 : !0, i = 0; i < e.length; i++) !1 === e[i].medium.isActive() && (t = !1);
                                          return t
                                        }, this.play = function() {
                                          s();
                                          var e = this.getActiveItems();
                                          r = (new Date).getTime() - o, null !== u && clearInterval(u), u = setInterval(t, h);
                                          for (var i = 0; i < e.length; i++) e[i].medium.play(), "video" !== e[i].medium.type && metaplayer.$ui.desc.html(metaplayer.Timeline.getItemTimelinePositionAsString(e[i])), c = !0;
                                          metaplayer.dispatchEvent("TimelinePlaying", {
                                            pos: o
                                          })
                                        }, this.pause = function() {
                                          var e = this.getActiveItems();
                                          null !== u && (clearInterval(u), u = null);
                                          for (var t = 0; t < e.length; t++) e[t].medium.pause(), c = !1;
                                          s(), metaplayer.dispatchEvent("TimelinePaused", {
                                            pos: o
                                          })
                                        }, this.stop = function() {
                                          s();
                                          var e = this.getActiveItems();
                                          null !== u && (clearInterval(u), u = null);
                                          for (var t = 0; t < e.length; t++) e[t].medium.stop(), c = !1;
                                          o = 0, this.load(), metaplayer.dispatchEvent("TimelineStopped", {
                                            pos: o
                                          })
                                        }, this.next = function() {
                                          s();
                                          var e = this.getNextItems(),
                                          t = new metaplayer.Timeline.Item;
                                          t.inpoint = 1e3 * metaplayer.Timeline.getDuration();
                                          for (var i = 0; i < e.length; i++) e[i].inpoint < t.inpoint && (t = e[i]);
                                          this.seekTo(t.inpoint)
                                        }, this.prev = function() {
                                          s();
                                          var e = this.getPrevItems(),
                                          t = new metaplayer.Timeline.Item;
                                          t.inpoint = 0;
                                          for (var i = 0; i < e.length; i++) e[i].inpoint > t.inpoint && (t = e[i]);
                                          this.seekTo(t.inpoint)
                                        }, this.selectLanguage = function(e) {
                                          metaplayer.utils.debug("select language: " + e + " (oldLanguage: " + g + ")"), !1 === this.isLoaded() ? g = e : (g = e, s(), i(), metaplayer.play())
                                        }, this.isPlaying = function() {
                                          return c
                                        }, this.getPosition = function() {
                                          return o / 1e3
                                        }, this.seekTo = function(e) {
                                          s(), r = (new Date).getTime() - e, t()
                                        }, this.getDuration = function() {
                                          return a / 1e3
                                        }, this.addItem = function(t) {
                                          if (t instanceof metaplayer.Timeline.Item && metaplayer.utils.exists(t.medium)) {
                                            metaplayer.utils.verbose(this.name + " | addItem: " + t.medium.type + " [" + t.inpoint + ":" + t.outpoint + " - " + t.medium.src + " - " + t.medium.id + "]"), l.push(t), l.sort(e);
                                            for (var i = l.length - 1; i >= 0; i--) {
                                              var n = l[i].outpoint;
                                              a = n > a ? n : a
                                            }
                                            metaplayer.Timeline.autoAlign()
                                          }
                                        }, this.getItemByMediumId = function(e) {
                                          for (var t = 0; t < l.length; t++)
                                          if (l[t].medium.id === e) return l[t];
                                          return null
                                        }, this.getItemTimelinePositionAsString = function(e) {
                                          for (var t = g, i = new Array, n = 0; n < l.length; n++) metaplayer.utils.isEmpty(l[n].medium) || "video" === l[n].medium.type || (l[n].language === t || null === t) && i.push(l[n]);
                                          var s = $.inArray(e, i) + 1;
                                          return s > 0 ? "" + s + " / " + i.length : ""
                                        }, this.getActiveItems = function(e, t, i) {
                                          for (var n = metaplayer.utils.exists(t) ? t : o, s = metaplayer.utils.exists(e) ? e : l, a = metaplayer.utils.exists(i) ? i : g, r = new Array, c = 0; c < s.length; c++) !metaplayer.utils.isEmpty(s[c].medium) && s[c].inpoint <= n && (n < s[c].outpoint || s[c].inpoint === s[c].outpoint && s[c].inpoint === n) && (s[c].language === a || null === a) && r.push(s[c]);
                                          return r
                                        }, this.getInactiveItems = function(e, t, i) {
                                          for (var n = metaplayer.utils.exists(t) ? t : o, s = metaplayer.utils.exists(e) ? e : l, a = metaplayer.utils.exists(i) ? i : g, r = new Array, c = 0; c < s.length; c++) !metaplayer.utils.isEmpty(s[c].medium) && s[c].outpoint <= n && s[c].inpoint < n || s[c].inpoint > n ? r.push(s[c]) : s[c].language !== a && null !== a && r.push(s[c]);
                                          return r
                                        }, this.getPrevItems = function() {
                                          for (var e = o, t = new Array, i = 0; i < l.length; i++) !metaplayer.utils.isEmpty(l[i].medium) && l[i].outpoint <= e && (l[i].language === g || null === g) && t.push(l[i]);
                                          return t
                                        }, this.getNextItems = function() {
                                          for (var e = o, t = new Array, i = 0; i < l.length; i++) !metaplayer.utils.isEmpty(l[i].medium) && l[i].inpoint > e && (l[i].language === g || null === g) && t.push(l[i]);
                                          return t
                                        }, this.getNumItems = function() {
                                          var e = $.grep(l, function(e) {
                                            return e.language === g || null === g
                                          });
                                          return e.length
                                        }, this.autoAlign = function() {
                                          for (var e = 0; e < l.length; e++)
                                          if (l[e].inpoint === l[e].outpoint)
                                          for (j = e + 1; j < l.length; j++)
                                          if (l[e].stage === l[j].stage) {
                                            l[e].outpoint = l[j].inpoint;
                                            break
                                          }
                                        }
                                      }.apply(metaplayer.Timeline), metaplayer.Medium = function(e, t, i, n, s, o) {
                                        var a = metaplayer,
                                        r = a.utils;
                                        this.name = "Medium", this.src = e, this.inpoint = "undefined" == typeof t ? 0 : t, this.outpoint = "undefined" == typeof i ? 0 : i, this.desc = "undefined" == typeof s ? "" : s, this.text = "undefined" == typeof o ? "" : o, this.stageElementID = n, this.id = r.hash(this.src + this.inpoint + this.outpoint + this.stageElementID)
                                      }, metaplayer.Medium.prototype = {
                                        type: "",
                                        src: null,
                                        inpoint: 0,
                                        outpoint: 0,
                                        desc: 0,
                                        text: 0,
                                        _isPlaying: !1,
                                        _isActive: !1,
                                        _isLoaded: !1,
                                        _isSeeking: !1,
                                        id: "",
                                        stageElementID: "",
                                        load: function() {
                                          this._isActive = !0, this._isLoaded = !0, metaplayer.dispatchEvent("MediumLoaded", {
                                            id: this.id,
                                            src: this.src,
                                            type: this.type
                                          })
                                        },
                                        play: function() {
                                          this._isActive = !0, this._isLoaded = !0, this._isPlaying = !0, metaplayer.dispatchEvent("MediumPlaying", {
                                            id: this.id,
                                            src: this.src
                                          })
                                        },
                                        pause: function() {
                                          this._isActive = !0, this._isLoaded = !0, metaplayer.dispatchEvent("MediumPaused", {
                                            id: this.id,
                                            src: this.src
                                          })
                                        },
                                        stop: function() {
                                          this._isPlaying = !1, this._isActive = !1, this._isLoaded = !1, metaplayer.dispatchEvent("MediumStopped", {
                                            id: this.id,
                                            src: this.src
                                          })
                                        },
                                        isPlaying: function() {
                                          return this._isPlaying
                                        },
                                        isActive: function() {
                                          return this._isActive
                                        },
                                        isLoaded: function() {
                                          return this._isLoaded
                                        },
                                        isSeeking: function() {
                                          return this._isSeeking
                                        },
                                        hasPosition: function() {
                                          return !1
                                        },
                                        getPosition: function() {
                                          return -1
                                        }
                                      }, metaplayer.Video = function(e, t, i, n, s, o) {
                                        {
                                          var a = metaplayer;
                                          a.utils
                                        }
                                        this.type = "video", a.Medium.call(this, e, t, i, n, s, o), this.video = null, this.html5 = !!document.createElement("video").canPlayType && "" !== document.createElement("video").canPlayType("video/mp4"), this.load = function() {
                                          var e = this.src,
                                          t = this.id,
                                          i = this.type,
                                          s = this;
                                          if (!this.html5) return void this.loadflash();
                                          e = e.replace(/rtmp:\/\/cp(\d+)\.edgefcs\.net\/ondemand\/metafusion(\d+)\//, "//d3dys86ou4l8dm.cloudfront.net/");
                                          var o = $("<video/>");
                                          o.attr("id", this.id), o.attr("preload", "metadata"), o.addClass("content"), o.append($("<source/>").attr("src", e)), o.append($("<p/>").html("OS/Browser not supported"));
                                          var r = $("<source/>").attr("src", "404-src" + (new Date).getTime());
                                          r.on("error", function() {
                                            !0 === iOS ? alert("OS/Browser not supported") : metaplayer.Timeline.getItemByMediumId(t).medium.loadflash()
                                          }), o.append(r), $("#" + n).empty().append(o);
                                          var l = this.video = document.getElementById(this.id);
                                          $(l).attr("width", $("#" + n).width()), $(l).height($("#" + n).width() * (9 / 16)), l.metafusion = {}, l.metafusion.hasMetadata = !1;
                                          l.addEventListener("loadedmetadata", function(o) {
                                            if (!l.metafusion.hasMetadata && 0 !== l.videoWidth) {
                                              var r = 0,
                                              c = 0,
                                              u = 0;
                                              r = $(l).parent(".content").width(), u = l.videoHeight / l.videoWidth * r, c = r, u > mwcp.mwcpContentHeight && (u = mwcp.mwcpContentHeight, c = l.videoWidth / l.videoHeight * u), $(l).width(c), $(l).height(u), $("#" + n).css("visibility", ""), $(l).attr("data-width", c), $(l).attr("data-height", u), l.metafusion.hasMetadata = !0, s._isActive = !0, s._isLoaded = !0, a.dispatchEvent("MediumLoaded", {
                                                id: t,
                                                src: e,
                                                type: i
                                              });
                                              try {
                                                l.removeEventListener("loadedmetadata", o)
                                              } catch (h) {}
                                            }
                                          });
                                          l.addEventListener("canplay", function() {
                                            s._isActive = !0, $("#" + n).css("visibility", "")
                                          }, !1), l.addEventListener("pause", function() {
                                            !0 === iOS && !1 === iPad && a.pause(), a.dispatchEvent("MediumPaused", {
                                              id: t,
                                              src: e
                                            })
                                          }, !1), l.metafusion.numTimeupdate = 0;
                                          l.addEventListener("timeupdate", function(o) {
                                            if (l.metafusion.numTimeupdate++ < 2) {
                                              var r = 0,
                                              c = 0,
                                              u = 0;
                                              r = $(l).parent(".content").width(), u = l.videoHeight / l.videoWidth * r, c = r, u > mwcp.mwcpContentHeight && (u = mwcp.mwcpContentHeight, c = l.videoWidth / l.videoHeight * u), $("#" + n).css("visibility", ""), $("#" + n).css("visibility", ""), l.metafusion.hasMetadata = !0, s._isActive = !0, s._isLoaded = !0, a.dispatchEvent("MediumLoaded", {
                                                id: t,
                                                src: e,
                                                type: i
                                              });
                                              try {
                                                l.removeEventListener("timeupdate", o)
                                              } catch (h) {}
                                            }
                                          }, !1);
                                          l.addEventListener("playing", function() {
                                            s._isPlaying = !0, s._isSeeking = !1, a.dispatchEvent("MediumPlaying", {
                                              id: t,
                                              src: e
                                            })
                                          }, !1), l.addEventListener("seeking", function() {
                                            s._isPlaying = !1, s._isSeeking = !0, a.dispatchEvent("MediumSeeking", {
                                              id: t,
                                              src: e
                                            })
                                          }, !1), l.addEventListener("seeked", function(i) {
                                            s._isSeeking = !1;
                                            var n = a.utils.deepGet(i, ["target", "currentTime"], null);
                                            !0 === iOS && !1 === iPad && null !== n && a.seekTo(n), a.dispatchEvent("MediumSeeked", {
                                              id: t,
                                              src: e,
                                              pos: n
                                            })
                                          }, !1), l.addEventListener("ended", function() {
                                            s._isPlaying = !1, s._isSeeking = !1, a.dispatchEvent("MediumStopped", {
                                              id: t,
                                              src: e
                                            })
                                          }, !1), a.addEventListener("UI_ContentResize", function() {
                                            var e = 0,
                                            t = 0,
                                            i = 0;
                                            e = $(l).parent(".content").width(), i = l.videoHeight / l.videoWidth * e, t = e, i > mwcp.mwcpContentHeight && (i = mwcp.mwcpContentHeight, t = l.videoWidth / l.videoHeight * i)
                                          }), a.addEventListener("UI_VolumeChange", function(e) {
                                            var t = e.payload / 100;
                                            l.volume = t
                                          }), l.load()
                                        }, this.loadflash = function() {
                                          var e = this.id,
                                          t = this.src,
                                          i = this.type,
                                          s = this;
                                          return "undefined" == typeof jwplayer ? void LazyLoad.js("//customers.meta-fusion.com/player/jwplayer-6.10/jwplayer.js", function() {
                                            metaplayer.Timeline.getItemByMediumId(e).medium.loadflash()
                                          }) : (this.playRequested = Date.now(), $("#" + n).empty().append($("<div/>").attr("id", e)), jwplayer.key = "tprouFIGFqJY3xUUtIyxY1RAZAqc/sVbi6f+5Q==", jwplayer(e).setup({
                                            file: this.src,
                                            autostart: !1,
                                            controls: !1,
                                            primary: "flash",
                                            width: "100%",
                                            heigth: "100%",
                                            abouttext: "://meta-fusion | meta-player",
                                            aboutlink: "http://www.meta-fusion.com/",
                                            volume: 100,
                                            analytics: {
                                              enabled: !1
                                            }
                                          }), this.video = jwplayer(e), this.video.setMute(!0), this.video.metafusion = {}, $("html").hasClass("ie7") || $("html").hasClass("ie8") || $("#" + n).css("visibility", "hidden"), this.video.metafusion.metaDimensionReceived = !1, this.video.onMeta(function(t) {
                                            var i = jwplayer(e);
                                            if (!i.metafusion.metaDimensionReceived && metaplayer.utils.exists(t.metadata.width) && metaplayer.utils.exists(t.metadata.height) && 0 !== t.metadata.width && 0 !== t.metadata.height) {
                                              i.metafusion.origWidth = t.metadata.width, i.metafusion.origHeight = t.metadata.height; {
                                                $(i.getContainer()).parents(".content").width()
                                              }
                                              $(i.getContainer()).parent().attr("data-width", i.metafusion.origWidth), $(i.getContainer()).parent().attr("data-height", i.metafusion.origHeight), metaplayer.addEventListener("UI_ContentResize", function() {
                                                var t = 0,
                                                n = 0,
                                                s = 0;
                                                t = $(i.getContainer()).parents(".content").width(), !1 === metaplayer.utils.exists(jwplayer(e).metafusion), s = jwplayer(e).metafusion.origHeight / jwplayer(e).metafusion.origWidth * t, n = t, s > mwcp.mwcpContentHeight && (s = mwcp.mwcpContentHeight, n = jwplayer(e).metafusion.origWidth / jwplayer(e).metafusion.origHeight * s)
                                              });
                                              var n = 0,
                                              s = 0,
                                              o = 0;
                                              n = $(i.getContainer()).parents(".content").width(), o = jwplayer(e).metafusion.origHeight / jwplayer(e).metafusion.origWidth * n, s = n, o > mwcp.mwcpContentHeight && (o = mwcp.mwcpContentHeight, s = jwplayer(e).metafusion.origWidth / jwplayer(e).metafusion.origHeight * o), i.metafusion.metaDimensionReceived = !0
                                            }
                                          }), this.video.metafusion._hasPlayedOnce = !1, this.video.metafusion._hasPlayedOnceStep = 0, this.video.onPlay(function() {
                                            var t = jwplayer(e);
                                            t.metafusion._hasPlayedOnce || 0 !== t.metafusion._hasPlayedOnceStep || (t.metafusion._hasPlayedOnceStep = 1, t.seek(0))
                                          }), this.video.onTime(function() {
                                            var o = jwplayer(e);
                                            o.metafusion._hasPlayedOnce || 1 !== o.metafusion._hasPlayedOnceStep || ($("#" + n).css("visibility", ""), o.pause(!0), s._isActive = !0, s._isLoaded = !0, a.dispatchEvent("MediumLoaded", {
                                              id: e,
                                              src: t,
                                              type: i
                                            }), o.metafusion._hasPlayedOnceStep = 0, o.metafusion._hasPlayedOnce = !0, o.setMute(!1))
                                          }), a.addEventListener("UI_VolumeChange", function(t) {
                                            var i = jwplayer(e),
                                            n = t.payload;
                                            i.setVolume(n)
                                          }), this.video.onPlay(function() {
                                            s._isPlaying = !0, s._isSeeking = !1, a.dispatchEvent("MediumPlaying", {
                                              id: e,
                                              src: t
                                            })
                                          }), this.video.onPause(function() {
                                            s._isPlaying = !1, s._isSeeking = !1, a.dispatchEvent("MediumPaused", {
                                              id: e,
                                              src: t
                                            })
                                          }), this.video.onBuffer(function() {
                                            s._isPlaying = !1, s._isSeeking = !1, a.dispatchEvent("MediumBuffering", {
                                              id: e,
                                              src: t
                                            })
                                          }), this.video.onSeek(function() {
                                            s._isPlaying = !1, s._isSeeking = !0, a.dispatchEvent("MediumSeeking", {
                                              id: e,
                                              src: t
                                            })
                                          }), this.video.onError(function() {
                                            a.dispatchEvent("MediumError", {
                                              id: e,
                                              src: t
                                            })
                                          }), void this.video.play(!0))
                                        }, this.play = function() {
                                          if (null === this.video) {
                                            this.load();
                                            var e = this;
                                            setTimeout(function() {
                                              e.play(!0)
                                            }, 100)
                                          } else "number" != typeof this.playRequested || isNaN(this.playRequested) ? this.video.play(!0) : this.playRequested + 1e3 * metaplayer.Timeline.getMaxSyncDelay() < Date.now() && (this.playRequested = Date.now(), this.video.play(!0))
                                        }, this.pause = function() {
                                          if (null === this.video) {
                                            this.load();
                                            var e = this;
                                            setTimeout(function() {
                                              e.pause(!0)
                                            }, 100)
                                          } else this.video.pause(!0)
                                        }, this.stop = function() {
                                          null !== this.video && this.video.pause(!0), this.destroy()
                                        }, this.setPosition = function(e) {
                                          if (null === this.video) {
                                            this.load();
                                            var t = this;
                                            setTimeout(function() {
                                              t.setPosition(e)
                                            }, 100)
                                          } else this.video.currentTime ? this.video.currentTime = e : this.video.seek && this.video.seek(e), a.utils.debug(this.name + "::" + this.type + " | setPosition(" + e + ")")
                                        }, this.destroy = function() {
                                          this._isPlaying = !1, this._isLoaded = !1, this._isActive = !1, this._isSeeking = !1, this.video && this.video.remove && this.video.remove(), this.video = null, $("#" + n).empty()
                                        }, this.isPlaying = function() {
                                          return this._isPlaying = null === this.video ? !1 : this.video.getState ? "PLAYING" === this.video.getState() ? !0 : !1 : !this.video.paused && !this.video.ended && this.video.currentTime > 0, this._isPlaying
                                        }, this.hasPosition = function() {
                                          return !0
                                        }, this.getPosition = function() {
                                          var e = -1;
                                          return null !== this.video && (this.video.currentTime ? e = this.video.currentTime : this.video.getPosition && (e = this.video.getPosition())), e
                                        }, this.isSeeking = function() {
                                          var e = this._isSeeking;
                                          return null !== this.video && this.video.currentTime && (e = this.video.seeking), e
                                        }
                                      }, metaplayer.Video.prototype = new metaplayer.Medium, metaplayer.Image = function(e, t, i, n, s, o) {
                                        {
                                          var a = metaplayer;
                                          a.utils
                                        }
                                        this.type = "image", a.Medium.call(this, e, t, i, n, s, o), this.load = function() {
                                          if ($("#" + n).is(":visible")) {
                                            var e = this,
                                            t = new Image;
                                            t.onload = function() {
                                              var i = t.height,
                                              s = t.width,
                                              o = $("<img/>");
                                              o.addClass("content"), o.attr("src", e.src + "?w=" + a.config.slide_width), o.attr("id", e.id), $("#" + n).empty().append(o), o.attr("data-width", s), o.attr("data-height", i), $("html").hasClass("ie7") || $("html").hasClass("ie8") || o.hide(), o.load(function() {
                                                o.show(), mwcp.mwcpFitMedia(), mwcp.mwcpSetTextDimensions(), metaplayer.dispatchEvent("UI_ContentResize", ""), e._isActive = !0, a.dispatchEvent("MediumLoaded", {
                                                  id: e.id,
                                                  src: e.src,
                                                  type: e.type
                                                }), t = null
                                              });
                                              var r = !1;
                                              if (r) {
                                                var l = API_ENDPOINT + "ocr?path=";
                                                l += this.src, $.get(l, function(e) {
                                                  $("#content-info").html("<pre>" + e.result + "</pre>")
                                                })
                                              }
                                            }, t.src = this.src + "?w=" + a.config.slide_width
                                          } else this._isActive = !0
                                        }, this.play = function() {
                                          this.load(), this._isPlaying = !0, a.dispatchEvent("MediumPlaying", {
                                            id: this.id,
                                            src: this.src
                                          })
                                        }, this.stop = function() {
                                          $("#" + this.id).remove(), this._isPlaying = !1, this._isActive = !1, a.dispatchEvent("MediumStopped", {
                                            id: this.id,
                                            src: this.src
                                          })
                                        }
                                      }, metaplayer.Image.prototype = new metaplayer.Medium, metaplayer.IFrame = function(e, t, i, n, s, o) {
                                        {
                                          var a = metaplayer;
                                          a.utils
                                        }
                                        this.type = "iframe", a.Medium.call(this, e, t, i, n, s, o), this.load = function() {
                                          var e = $('<iframe frameborder="0" marginheight="0" marginwidth="0"/>');
                                          e.addClass("content"), e.attr("width", "100%"), e.attr("height", "100%"), e.attr("src", this.src), e.attr("id", this.id), $("#" + n + " .inner").empty().append(e), a.dispatchEvent("MediumLoaded", {
                                            id: this.id,
                                            src: this.src,
                                            type: this.type
                                          })
                                        }, this.play = function() {
                                          this.load(), $("#" + n).fadeIn("**teaser**" === this.text ? 900 : "fast"), this._isPlaying = !0, a.dispatchEvent("MediumPlaying", {
                                            id: this.id,
                                            src: this.src
                                          })
                                        }, this.stop = function() {
                                          $("#" + this.id).remove(), this._isPlaying = !1, this._isActive = !1, a.dispatchEvent("MediumStopped", {
                                            id: this.id,
                                            src: this.src
                                          })
                                        }
                                      }, metaplayer.IFrame.prototype = new metaplayer.Medium;
