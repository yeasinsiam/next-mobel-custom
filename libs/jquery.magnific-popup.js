export default function magnificPopupJs() {
  !(function (a) {
    "function" == typeof define && define.amd
      ? define(["jquery"], a)
      : a(
          "object" == typeof exports
            ? require("jquery")
            : window.jQuery || window.Zepto
        );
  })(function ($) {
    var j,
      k,
      l,
      m,
      n,
      o,
      p = "Close",
      q = "BeforeClose",
      r = "MarkupParse",
      s = "Open",
      t = "Change",
      u = ".mfp",
      v = "mfp-ready",
      w = "mfp-removing",
      x = "mfp-prevent-close",
      a = function () {},
      y = !!window.jQuery,
      z = $(window),
      A = function (a, b) {
        j.ev.on("mfp" + a + u, b);
      },
      B = function (d, b, c, e) {
        var a = document.createElement("div");
        return (
          (a.className = "mfp-" + d),
          c && (a.innerHTML = c),
          e ? b && b.appendChild(a) : ((a = $(a)), b && a.appendTo(b)),
          a
        );
      },
      C = function (a, b) {
        j.ev.triggerHandler("mfp" + a, b),
          j.st.callbacks &&
            ((a = a.charAt(0).toLowerCase() + a.slice(1)),
            j.st.callbacks[a] &&
              j.st.callbacks[a].apply(j, $.isArray(b) ? b : [b]));
      },
      D = function (a) {
        return (
          (a === o && j.currTemplate.closeBtn) ||
            ((j.currTemplate.closeBtn = $(
              j.st.closeMarkup.replace("%title%", j.st.tClose)
            )),
            (o = a)),
          j.currTemplate.closeBtn
        );
      },
      b = function () {
        $.magnificPopup.instance ||
          ((j = new a()).init(), ($.magnificPopup.instance = j));
      },
      E = function () {
        var a = document.createElement("p").style,
          b = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== a.transition) return !0;
        for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
        return !1;
      };
    (a.prototype = {
      constructor: a,
      init: function () {
        var a = navigator.appVersion;
        (j.isIE7 = -1 !== a.indexOf("MSIE 7.")),
          (j.isIE8 = -1 !== a.indexOf("MSIE 8.")),
          (j.isLowIE = j.isIE7 || j.isIE8),
          (j.isAndroid = /android/gi.test(a)),
          (j.isIOS = /iphone|ipad|ipod/gi.test(a)),
          (j.supportsTransition = E()),
          (j.probablyMobile =
            j.isAndroid ||
            j.isIOS ||
            /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
              navigator.userAgent
            )),
          (l = $(document)),
          (j.popupsCache = {});
      },
      open: function (a) {
        if (!1 === a.isObj) {
          (j.items = a.items.toArray()), (j.index = 0);
          var b,
            c,
            g = a.items;
          for (b = 0; b < g.length; b++)
            if (((c = g[b]).parsed && (c = c.el[0]), c === a.el[0])) {
              j.index = b;
              break;
            }
        } else
          (j.items = $.isArray(a.items) ? a.items : [a.items]),
            (j.index = a.index || 0);
        if (j.isOpen) {
          j.updateItemHTML();
          return;
        }
        (j.types = []),
          (n = ""),
          a.mainEl && a.mainEl.length ? (j.ev = a.mainEl.eq(0)) : (j.ev = l),
          a.key
            ? (j.popupsCache[a.key] || (j.popupsCache[a.key] = {}),
              (j.currTemplate = j.popupsCache[a.key]))
            : (j.currTemplate = {}),
          (j.st = $.extend(!0, {}, $.magnificPopup.defaults, a)),
          (j.fixedContentPos =
            "auto" === j.st.fixedContentPos
              ? !j.probablyMobile
              : j.st.fixedContentPos),
          j.st.modal &&
            ((j.st.closeOnContentClick = !1),
            (j.st.closeOnBgClick = !1),
            (j.st.showCloseBtn = !1),
            (j.st.enableEscapeKey = !1)),
          j.bgOverlay ||
            ((j.bgOverlay = B("bg").on("click" + u, function () {
              j.close();
            })),
            (j.wrap = B("wrap")
              .attr("tabindex", -1)
              .on("click" + u, function (a) {
                j._checkIfClose(a.target) && j.close();
              })),
            (j.container = B("container", j.wrap))),
          (j.contentContainer = B("content")),
          j.st.preloader &&
            (j.preloader = B("preloader", j.container, j.st.tLoading));
        var h = $.magnificPopup.modules;
        for (b = 0; b < h.length; b++) {
          var d = h[b];
          j["init" + (d = d.charAt(0).toUpperCase() + d.slice(1))].call(j);
        }
        C("BeforeOpen"),
          j.st.showCloseBtn &&
            (j.st.closeBtnInside
              ? (A(r, function (c, d, a, b) {
                  a.close_replaceWith = D(b.type);
                }),
                (n += " mfp-close-btn-in"))
              : j.wrap.append(D())),
          j.st.alignTop && (n += " mfp-align-top"),
          j.fixedContentPos
            ? j.wrap.css({
                overflow: j.st.overflowY,
                overflowX: "hidden",
                overflowY: j.st.overflowY,
              })
            : j.wrap.css({ top: z.scrollTop(), position: "absolute" }),
          (!1 !== j.st.fixedBgPos &&
            ("auto" !== j.st.fixedBgPos || j.fixedContentPos)) ||
            j.bgOverlay.css({ height: l.height(), position: "absolute" }),
          j.st.enableEscapeKey &&
            l.on("keyup" + u, function (a) {
              27 === a.keyCode && j.close();
            }),
          z.on("resize" + u, function () {
            j.updateSize();
          }),
          j.st.closeOnContentClick || (n += " mfp-auto-cursor"),
          n && j.wrap.addClass(n);
        var i = (j.wH = z.height()),
          e = {};
        if (j.fixedContentPos && j._hasScrollBar(i)) {
          var k = j._getScrollbarSize();
          k && (e.marginRight = k);
        }
        j.fixedContentPos &&
          (j.isIE7
            ? $("body, html").css("overflow", "hidden")
            : (e.overflow = "hidden"));
        var f = j.st.mainClass;
        return (
          j.isIE7 && (f += " mfp-ie7"),
          f && j._addClassToMFP(f),
          j.updateItemHTML(),
          C("BuildControls"),
          $("html").css(e),
          j.bgOverlay.add(j.wrap).prependTo(j.st.prependTo || $(document.body)),
          (j._lastFocusedEl = document.activeElement),
          setTimeout(function () {
            j.content
              ? (j._addClassToMFP(v), j._setFocus())
              : j.bgOverlay.addClass(v),
              l.on("focusin" + u, j._onFocusIn);
          }, 16),
          (j.isOpen = !0),
          j.updateSize(i),
          C(s),
          a
        );
      },
      close: function () {
        j.isOpen &&
          (C(q),
          (j.isOpen = !1),
          j.st.removalDelay && !j.isLowIE && j.supportsTransition
            ? (j._addClassToMFP(w),
              setTimeout(function () {
                j._close();
              }, j.st.removalDelay))
            : j._close());
      },
      _close: function () {
        C(p);
        var a = w + " " + v + " ";
        if (
          (j.bgOverlay.detach(),
          j.wrap.detach(),
          j.container.empty(),
          j.st.mainClass && (a += j.st.mainClass + " "),
          j._removeClassFromMFP(a),
          j.fixedContentPos)
        ) {
          var b = { marginRight: "" };
          j.isIE7 ? $("body, html").css("overflow", "") : (b.overflow = ""),
            $("html").css(b);
        }
        l.off("keyup" + u + " focusin" + u),
          j.ev.off(u),
          j.wrap.attr("class", "mfp-wrap").removeAttr("style"),
          j.bgOverlay.attr("class", "mfp-bg"),
          j.container.attr("class", "mfp-container"),
          j.st.showCloseBtn &&
            (!j.st.closeBtnInside || !0 === j.currTemplate[j.currItem.type]) &&
            j.currTemplate.closeBtn &&
            j.currTemplate.closeBtn.detach(),
          j._lastFocusedEl && $(j._lastFocusedEl).focus(),
          (j.currItem = null),
          (j.content = null),
          (j.currTemplate = null),
          (j.prevHeight = 0),
          C("AfterClose");
      },
      updateSize: function (b) {
        if (j.isIOS) {
          var c = document.documentElement.clientWidth / window.innerWidth,
            a = window.innerHeight * c;
          j.wrap.css("height", a), (j.wH = a);
        } else j.wH = b || z.height();
        j.fixedContentPos || j.wrap.css("height", j.wH), C("Resize");
      },
      updateItemHTML: function () {
        var b = j.items[j.index];
        j.contentContainer.detach(),
          j.content && j.content.detach(),
          b.parsed || (b = j.parseEl(j.index));
        var a = b.type;
        if (
          (C("BeforeChange", [j.currItem ? j.currItem.type : "", a]),
          (j.currItem = b),
          !j.currTemplate[a])
        ) {
          var c = !!j.st[a] && j.st[a].markup;
          C("FirstMarkupParse", c),
            c ? (j.currTemplate[a] = $(c)) : (j.currTemplate[a] = !0);
        }
        m && m !== b.type && j.container.removeClass("mfp-" + m + "-holder");
        var d = j["get" + a.charAt(0).toUpperCase() + a.slice(1)](
          b,
          j.currTemplate[a]
        );
        j.appendContent(d, a),
          (b.preloaded = !0),
          C(t, b),
          (m = b.type),
          j.container.prepend(j.contentContainer),
          C("AfterChange");
      },
      appendContent: function (a, b) {
        (j.content = a),
          a
            ? j.st.showCloseBtn &&
              j.st.closeBtnInside &&
              !0 === j.currTemplate[b]
              ? j.content.find(".mfp-close").length || j.content.append(D())
              : (j.content = a)
            : (j.content = ""),
          C("BeforeAppend"),
          j.container.addClass("mfp-" + b + "-holder"),
          j.contentContainer.append(j.content);
      },
      parseEl: function (b) {
        var d,
          a = j.items[b];
        if (
          (a.tagName
            ? (a = { el: $(a) })
            : ((d = a.type), (a = { data: a, src: a.src })),
          a.el)
        ) {
          for (var e = j.types, c = 0; c < e.length; c++)
            if (a.el.hasClass("mfp-" + e[c])) {
              d = e[c];
              break;
            }
          (a.src = a.el.attr("data-mfp-src")),
            a.src || (a.src = a.el.attr("href"));
        }
        return (
          (a.type = d || j.st.type || "inline"),
          (a.index = b),
          (a.parsed = !0),
          (j.items[b] = a),
          C("ElementParse", a),
          j.items[b]
        );
      },
      addGroup: function (c, a) {
        var d = function (b) {
          (b.mfpEl = this), j._openClick(b, c, a);
        };
        a || (a = {});
        var b = "click.magnificPopup";
        (a.mainEl = c),
          a.items
            ? ((a.isObj = !0), c.off(b).on(b, d))
            : ((a.isObj = !1),
              a.delegate
                ? c.off(b).on(b, a.delegate, d)
                : ((a.items = c), c.off(b).on(b, d)));
      },
      _openClick: function (a, d, b) {
        if (
          (void 0 !== b.midClick
            ? b.midClick
            : $.magnificPopup.defaults.midClick) ||
          (2 !== a.which &&
            !a.ctrlKey &&
            !a.metaKey &&
            !a.altKey &&
            !a.shiftKey)
        ) {
          var c =
            void 0 !== b.disableOn
              ? b.disableOn
              : $.magnificPopup.defaults.disableOn;
          if (c) {
            if ($.isFunction(c)) {
              if (!c.call(j)) return !0;
            } else if (z.width() < c) return !0;
          }
          a.type && (a.preventDefault(), j.isOpen && a.stopPropagation()),
            (b.el = $(a.mfpEl)),
            b.delegate && (b.items = d.find(b.delegate)),
            j.open(b);
        }
      },
      updateStatus: function (a, b) {
        if (j.preloader) {
          k !== a && j.container.removeClass("mfp-s-" + k),
            b || "loading" !== a || (b = j.st.tLoading);
          var c = { status: a, text: b };
          C("UpdateStatus", c),
            (a = c.status),
            (b = c.text),
            j.preloader.html(b),
            j.preloader.find("a").on("click", function (a) {
              a.stopImmediatePropagation();
            }),
            j.container.addClass("mfp-s-" + a),
            (k = a);
        }
      },
      _checkIfClose: function (a) {
        if (!$(a).hasClass(x)) {
          var b = j.st.closeOnContentClick,
            c = j.st.closeOnBgClick;
          if (
            (b && c) ||
            !j.content ||
            $(a).hasClass("mfp-close") ||
            (j.preloader && a === j.preloader[0])
          )
            return !0;
          if (a === j.content[0] || $.contains(j.content[0], a)) {
            if (b) return !0;
          } else if (c && $.contains(document, a)) return !0;
          return !1;
        }
      },
      _addClassToMFP: function (a) {
        j.bgOverlay.addClass(a), j.wrap.addClass(a);
      },
      _removeClassFromMFP: function (a) {
        this.bgOverlay.removeClass(a), j.wrap.removeClass(a);
      },
      _hasScrollBar: function (a) {
        return (
          (j.isIE7 ? l.height() : document.body.scrollHeight) >
          (a || z.height())
        );
      },
      _setFocus: function () {
        (j.st.focus ? j.content.find(j.st.focus).eq(0) : j.wrap).focus();
      },
      _onFocusIn: function (a) {
        if (a.target !== j.wrap[0] && !$.contains(j.wrap[0], a.target))
          return j._setFocus(), !1;
      },
      _parseMarkup: function (c, a, b) {
        var d;
        b.data && (a = $.extend(b.data, a)),
          C(r, [c, a, b]),
          $.each(a, function (e, a) {
            if (void 0 === a || !1 === a) return !0;
            if ((d = e.split("_")).length > 1) {
              var b = c.find(u + "-" + d[0]);
              if (b.length > 0) {
                var f = d[1];
                "replaceWith" === f
                  ? b[0] !== a[0] && b.replaceWith(a)
                  : "img" === f
                  ? b.is("img")
                    ? b.attr("src", a)
                    : b.replaceWith(
                        '<img src="' +
                          a +
                          '" class="' +
                          b.attr("class") +
                          '" />'
                      )
                  : b.attr(d[1], a);
              }
            } else c.find(u + "-" + e).html(a);
          });
      },
      _getScrollbarSize: function () {
        if (void 0 === j.scrollbarSize) {
          var a = document.createElement("div");
          (a.style.cssText =
            "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
            document.body.appendChild(a),
            (j.scrollbarSize = a.offsetWidth - a.clientWidth),
            document.body.removeChild(a);
        }
        return j.scrollbarSize;
      },
    }),
      ($.magnificPopup = {
        instance: null,
        proto: a.prototype,
        modules: [],
        open: function (a, c) {
          return (
            b(),
            ((a = a ? $.extend(!0, {}, a) : {}).isObj = !0),
            (a.index = c || 0),
            this.instance.open(a)
          );
        },
        close: function () {
          return $.magnificPopup.instance && $.magnificPopup.instance.close();
        },
        registerModule: function (b, a) {
          a.options && ($.magnificPopup.defaults[b] = a.options),
            $.extend(this.proto, a.proto),
            this.modules.push(b);
        },
        defaults: {
          disableOn: 0,
          key: null,
          midClick: !1,
          mainClass: "",
          preloader: !0,
          focus: "",
          closeOnContentClick: !1,
          closeOnBgClick: !0,
          closeBtnInside: !0,
          showCloseBtn: !0,
          enableEscapeKey: !0,
          modal: !1,
          alignTop: !1,
          removalDelay: 0,
          prependTo: null,
          fixedContentPos: "auto",
          fixedBgPos: "auto",
          overflowY: "auto",
          closeMarkup:
            '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
          tClose: "Close (Esc)",
          tLoading: "Loading...",
        },
      }),
      ($.fn.magnificPopup = function (a) {
        b();
        var c = $(this);
        if ("string" == typeof a) {
          if ("open" === a) {
            var d,
              e = y ? c.data("magnificPopup") : c[0].magnificPopup,
              f = parseInt(arguments[1], 10) || 0;
            e.items
              ? (d = e.items[f])
              : ((d = c),
                e.delegate && (d = d.find(e.delegate)),
                (d = d.eq(f))),
              j._openClick({ mfpEl: d }, c, e);
          } else
            j.isOpen && j[a].apply(j, Array.prototype.slice.call(arguments, 1));
        } else
          (a = $.extend(!0, {}, a)),
            y ? c.data("magnificPopup", a) : (c[0].magnificPopup = a),
            j.addGroup(c, a);
        return c;
      });
    var F,
      G,
      H,
      c = "inline",
      I = function () {
        H && (G.after(H.addClass(F)).detach(), (H = null));
      };
    $.magnificPopup.registerModule(c, {
      options: {
        hiddenClass: "hide",
        markup: "",
        tNotFound: "Content not found",
      },
      proto: {
        initInline: function () {
          j.types.push(c),
            A(p + "." + c, function () {
              I();
            });
        },
        getInline: function (b, c) {
          if ((I(), b.src)) {
            var d = j.st.inline,
              a = $(b.src);
            if (a.length) {
              var e = a[0].parentNode;
              e &&
                e.tagName &&
                (G || ((G = B((F = d.hiddenClass))), (F = "mfp-" + F)),
                (H = a.after(G).detach().removeClass(F))),
                j.updateStatus("ready");
            } else j.updateStatus("error", d.tNotFound), (a = $("<div>"));
            return (b.inlineElement = a), a;
          }
          return j.updateStatus("ready"), j._parseMarkup(c, {}, b), c;
        },
      },
    });
    var J,
      d = "ajax",
      K = function () {
        J && $(document.body).removeClass(J);
      },
      L = function () {
        K(), j.req && j.req.abort();
      };
    $.magnificPopup.registerModule(d, {
      options: {
        settings: null,
        cursor: "mfp-ajax-cur",
        tError: '<a href="%url%">The content</a> could not be loaded.',
      },
      proto: {
        initAjax: function () {
          j.types.push(d),
            (J = j.st.ajax.cursor),
            A(p + "." + d, L),
            A("BeforeChange." + d, L);
        },
        getAjax: function (a) {
          J && $(document.body).addClass(J), j.updateStatus("loading");
          var b = $.extend(
            {
              url: a.src,
              success: function (c, f, e) {
                var b = { data: c, xhr: e };
                C("ParseAjax", b),
                  j.appendContent($(b.data), d),
                  (a.finished = !0),
                  K(),
                  j._setFocus(),
                  setTimeout(function () {
                    j.wrap.addClass(v);
                  }, 16),
                  j.updateStatus("ready"),
                  C("AjaxContentAdded");
              },
              error: function () {
                K(),
                  (a.finished = a.loadError = !0),
                  j.updateStatus(
                    "error",
                    j.st.ajax.tError.replace("%url%", a.src)
                  );
              },
            },
            j.st.ajax.settings
          );
          return (j.req = $.ajax(b)), "";
        },
      },
    });
    var M,
      N,
      O = function (a) {
        if (a.data && void 0 !== a.data.title) return a.data.title;
        var b = j.st.image.titleSrc;
        if (b) {
          if ($.isFunction(b)) return b.call(j, a);
          if (a.el) return a.el.attr(b) || "";
        }
        return "";
      };
    $.magnificPopup.registerModule("image", {
      options: {
        markup:
          '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: "mfp-zoom-out-cur",
        titleSrc: "title",
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.',
      },
      proto: {
        initImage: function () {
          var b = j.st.image,
            a = ".image";
          j.types.push("image"),
            A(s + a, function () {
              "image" === j.currItem.type &&
                b.cursor &&
                $(document.body).addClass(b.cursor);
            }),
            A(p + a, function () {
              b.cursor && $(document.body).removeClass(b.cursor),
                z.off("resize" + u);
            }),
            A("Resize" + a, j.resizeImage),
            j.isLowIE && A("AfterChange", j.resizeImage);
        },
        resizeImage: function () {
          var a = j.currItem;
          if (a && a.img && j.st.image.verticalFit) {
            var b = 0;
            j.isLowIE &&
              (b =
                parseInt(a.img.css("padding-top"), 10) +
                parseInt(a.img.css("padding-bottom"), 10)),
              a.img.css("max-height", j.wH - b);
          }
        },
        _onImageHasSize: function (a) {
          a.img &&
            ((a.hasSize = !0),
            M && clearInterval(M),
            (a.isCheckingImgSize = !1),
            C("ImageHasSize", a),
            a.imgHidden &&
              (j.content && j.content.removeClass("mfp-loading"),
              (a.imgHidden = !1)));
        },
        findImageSize: function (a) {
          var c = 0,
            d = a.img[0],
            b = function (e) {
              M && clearInterval(M),
                (M = setInterval(function () {
                  if (d.naturalWidth > 0) {
                    j._onImageHasSize(a);
                    return;
                  }
                  c > 200 && clearInterval(M),
                    3 == ++c ? b(10) : 40 === c ? b(50) : 100 === c && b(500);
                }, e));
            };
          b(1);
        },
        getImage: function (a, b) {
          var h = 0,
            e = function () {
              a &&
                (a.img[0].complete
                  ? (a.img.off(".mfploader"),
                    a === j.currItem &&
                      (j._onImageHasSize(a), j.updateStatus("ready")),
                    (a.hasSize = !0),
                    (a.loaded = !0),
                    C("ImageLoadComplete"))
                  : ++h < 200
                  ? setTimeout(e, 100)
                  : f());
            },
            f = function () {
              a &&
                (a.img.off(".mfploader"),
                a === j.currItem &&
                  (j._onImageHasSize(a),
                  j.updateStatus("error", g.tError.replace("%url%", a.src))),
                (a.hasSize = !0),
                (a.loaded = !0),
                (a.loadError = !0));
            },
            g = j.st.image,
            d = b.find(".mfp-img");
          if (d.length) {
            var c = document.createElement("img");
            (c.className = "mfp-img"),
              a.el &&
                a.el.find("img").length &&
                (c.alt = a.el.find("img").attr("alt")),
              (a.img = $(c).on("load.mfploader", e).on("error.mfploader", f)),
              (c.src = a.src),
              d.is("img") && (a.img = a.img.clone()),
              (c = a.img[0]).naturalWidth > 0
                ? (a.hasSize = !0)
                : c.width || (a.hasSize = !1);
          }
          return (j._parseMarkup(b, { title: O(a), img_replaceWith: a.img }, a),
          j.resizeImage(),
          a.hasSize)
            ? (M && clearInterval(M),
              a.loadError
                ? (b.addClass("mfp-loading"),
                  j.updateStatus("error", g.tError.replace("%url%", a.src)))
                : (b.removeClass("mfp-loading"), j.updateStatus("ready")),
              b)
            : (j.updateStatus("loading"),
              (a.loading = !0),
              a.hasSize ||
                ((a.imgHidden = !0),
                b.addClass("mfp-loading"),
                j.findImageSize(a)),
              b);
        },
      },
    }),
      $.magnificPopup.registerModule("zoom", {
        options: {
          enabled: !1,
          easing: "ease-in-out",
          duration: 300,
          opener: function (a) {
            return a.is("img") ? a : a.find("img");
          },
        },
        proto: {
          initZoom: function () {
            var c,
              b = j.st.zoom,
              a = ".zoom";
            if (b.enabled && j.supportsTransition) {
              var d,
                e,
                f = b.duration,
                g = function (e) {
                  var d = e
                      .clone()
                      .removeAttr("style")
                      .removeAttr("class")
                      .addClass("mfp-animated-image"),
                    f = "all " + b.duration / 1e3 + "s " + b.easing,
                    a = {
                      position: "fixed",
                      zIndex: 9999,
                      left: 0,
                      top: 0,
                      "-webkit-backface-visibility": "hidden",
                    },
                    c = "transition";
                  return (
                    (a["-webkit-" + c] =
                      a["-moz-" + c] =
                      a["-o-" + c] =
                      a[c] =
                        f),
                    d.css(a),
                    d
                  );
                },
                h = function () {
                  j.content.css("visibility", "visible");
                };
              A("BuildControls" + a, function () {
                if (j._allowZoom()) {
                  if (
                    (clearTimeout(d),
                    j.content.css("visibility", "hidden"),
                    !(c = j._getItemToZoom()))
                  ) {
                    h();
                    return;
                  }
                  (e = g(c)).css(j._getOffset()),
                    j.wrap.append(e),
                    (d = setTimeout(function () {
                      e.css(j._getOffset(!0)),
                        (d = setTimeout(function () {
                          h(),
                            setTimeout(function () {
                              e.remove(),
                                (c = e = null),
                                C("ZoomAnimationEnded");
                            }, 16);
                        }, f));
                    }, 16));
                }
              }),
                A(q + a, function () {
                  if (j._allowZoom()) {
                    if ((clearTimeout(d), (j.st.removalDelay = f), !c)) {
                      if (!(c = j._getItemToZoom())) return;
                      e = g(c);
                    }
                    e.css(j._getOffset(!0)),
                      j.wrap.append(e),
                      j.content.css("visibility", "hidden"),
                      setTimeout(function () {
                        e.css(j._getOffset());
                      }, 16);
                  }
                }),
                A(p + a, function () {
                  j._allowZoom() && (h(), e && e.remove(), (c = null));
                });
            }
          },
          _allowZoom: function () {
            return "image" === j.currItem.type;
          },
          _getItemToZoom: function () {
            return !!j.currItem.hasSize && j.currItem.img;
          },
          _getOffset: function (e) {
            var a,
              b = (a = e
                ? j.currItem.img
                : j.st.zoom.opener(j.currItem.el || j.currItem)).offset(),
              d = parseInt(a.css("padding-top"), 10),
              f = parseInt(a.css("padding-bottom"), 10);
            b.top -= $(window).scrollTop() - d;
            var c = {
              width: a.width(),
              height: (y ? a.innerHeight() : a[0].offsetHeight) - f - d,
            };
            return (
              (void 0 === N &&
                (N = void 0 !== document.createElement("p").style.MozTransform),
              N)
                ? (c["-moz-transform"] = c.transform =
                    "translate(" + b.left + "px," + b.top + "px)")
                : ((c.left = b.left), (c.top = b.top)),
              c
            );
          },
        },
      });
    var e = "iframe",
      P = function (b) {
        if (j.currTemplate[e]) {
          var a = j.currTemplate[e].find("iframe");
          a.length &&
            (b || (a[0].src = "//about:blank"),
            j.isIE8 && a.css("display", b ? "block" : "none"));
        }
      };
    $.magnificPopup.registerModule(e, {
      options: {
        markup:
          '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
        srcAction: "iframe_src",
        patterns: {
          youtube: {
            index: "youtube.com",
            id: "v=",
            src: "//www.youtube.com/embed/%id%?autoplay=1",
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "//player.vimeo.com/video/%id%?autoplay=1",
          },
          gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
        },
      },
      proto: {
        initIframe: function () {
          j.types.push(e),
            A("BeforeChange", function (c, a, b) {
              a !== b && (a === e ? P() : b === e && P(!0));
            }),
            A(p + "." + e, function () {
              P();
            });
        },
        getIframe: function (b, c) {
          var e = b.src,
            a = j.st.iframe;
          $.each(a.patterns, function () {
            if (e.indexOf(this.index) > -1)
              return (
                this.id &&
                  (e =
                    "string" == typeof this.id
                      ? e.substr(
                          e.lastIndexOf(this.id) + this.id.length,
                          e.length
                        )
                      : this.id.call(this, e)),
                (e = this.src.replace("%id%", e)),
                !1
              );
          });
          var d = {};
          return (
            a.srcAction && (d[a.srcAction] = e),
            j._parseMarkup(c, d, b),
            j.updateStatus("ready"),
            c
          );
        },
      },
    });
    var Q = function (a) {
        var b = j.items.length;
        return a > b - 1 ? a - b : a < 0 ? b + a : a;
      },
      R = function (a, b, c) {
        return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
      };
    $.magnificPopup.registerModule("gallery", {
      options: {
        enabled: !1,
        arrowMarkup:
          '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
        preload: [0, 2],
        navigateByImgClick: !0,
        arrows: !0,
        tPrev: "Previous (Left arrow key)",
        tNext: "Next (Right arrow key)",
        tCounter: "%curr% of %total%",
      },
      proto: {
        initGallery: function () {
          var b = j.st.gallery,
            a = ".mfp-gallery",
            c = Boolean($.fn.mfpFastClick);
          if (((j.direction = !0), !b || !b.enabled)) return !1;
          (n += " mfp-gallery"),
            A(s + a, function () {
              b.navigateByImgClick &&
                j.wrap.on("click" + a, ".mfp-img", function () {
                  if (j.items.length > 1) return j.next(), !1;
                }),
                l.on("keydown" + a, function (a) {
                  37 === a.keyCode ? j.prev() : 39 === a.keyCode && j.next();
                });
            }),
            A("UpdateStatus" + a, function (b, a) {
              a.text && (a.text = R(a.text, j.currItem.index, j.items.length));
            }),
            A(r + a, function (e, f, c, d) {
              var a = j.items.length;
              c.counter = a > 1 ? R(b.tCounter, d.index, a) : "";
            }),
            A("BuildControls" + a, function () {
              if (j.items.length > 1 && b.arrows && !j.arrowLeft) {
                var e = b.arrowMarkup,
                  a = (j.arrowLeft = $(
                    e.replace(/%title%/gi, b.tPrev).replace(/%dir%/gi, "left")
                  ).addClass(x)),
                  d = (j.arrowRight = $(
                    e.replace(/%title%/gi, b.tNext).replace(/%dir%/gi, "right")
                  ).addClass(x)),
                  f = c ? "mfpFastClick" : "click";
                a[f](function () {
                  j.prev();
                }),
                  d[f](function () {
                    j.next();
                  }),
                  j.isIE7 &&
                    (B("b", a[0], !1, !0),
                    B("a", a[0], !1, !0),
                    B("b", d[0], !1, !0),
                    B("a", d[0], !1, !0)),
                  j.container.append(a.add(d));
              }
            }),
            A(t + a, function () {
              j._preloadTimeout && clearTimeout(j._preloadTimeout),
                (j._preloadTimeout = setTimeout(function () {
                  j.preloadNearbyImages(), (j._preloadTimeout = null);
                }, 16));
            }),
            A(p + a, function () {
              l.off(a),
                j.wrap.off("click" + a),
                j.arrowLeft &&
                  c &&
                  j.arrowLeft.add(j.arrowRight).destroyMfpFastClick(),
                (j.arrowRight = j.arrowLeft = null);
            });
        },
        next: function () {
          (j.direction = !0), (j.index = Q(j.index + 1)), j.updateItemHTML();
        },
        prev: function () {
          (j.direction = !1), (j.index = Q(j.index - 1)), j.updateItemHTML();
        },
        goTo: function (a) {
          (j.direction = a >= j.index), (j.index = a), j.updateItemHTML();
        },
        preloadNearbyImages: function () {
          var a,
            b = j.st.gallery.preload,
            c = Math.min(b[0], j.items.length),
            d = Math.min(b[1], j.items.length);
          for (a = 1; a <= (j.direction ? d : c); a++)
            j._preloadItem(j.index + a);
          for (a = 1; a <= (j.direction ? c : d); a++)
            j._preloadItem(j.index - a);
        },
        _preloadItem: function (b) {
          if (((b = Q(b)), !j.items[b].preloaded)) {
            var a = j.items[b];
            a.parsed || (a = j.parseEl(b)),
              C("LazyLoad", a),
              "image" === a.type &&
                (a.img = $('<img class="mfp-img" />')
                  .on("load.mfploader", function () {
                    a.hasSize = !0;
                  })
                  .on("error.mfploader", function () {
                    (a.hasSize = !0), (a.loadError = !0), C("LazyLoadError", a);
                  })
                  .attr("src", a.src)),
              (a.preloaded = !0);
          }
        },
      },
    });
    var f,
      g,
      h,
      i = "retina";
    $.magnificPopup.registerModule(i, {
      options: {
        replaceSrc: function (a) {
          return a.src.replace(/\.\w+$/, function (a) {
            return "@2x" + a;
          });
        },
        ratio: 1,
      },
      proto: {
        initRetina: function () {
          if (window.devicePixelRatio > 1) {
            var b = j.st.retina,
              a = b.ratio;
            (a = isNaN(a) ? a() : a) > 1 &&
              (A("ImageHasSize." + i, function (c, b) {
                b.img.css({
                  "max-width": b.img[0].naturalWidth / a,
                  width: "100%",
                });
              }),
              A("ElementParse." + i, function (d, c) {
                c.src = b.replaceSrc(c, a);
              }));
          }
        },
      },
    }),
      (f = "ontouchstart" in window),
      (g = function () {
        z.off("touchmove" + h + " touchend" + h);
      }),
      (h = ".mfpFastClick"),
      ($.fn.mfpFastClick = function (a) {
        return $(this).each(function () {
          var c,
            d,
            e,
            i,
            j,
            k,
            l,
            b = $(this);
          f &&
            b.on("touchstart" + h, function (b) {
              (i = !1),
                (k = 1),
                (d = (j = b.originalEvent
                  ? b.originalEvent.touches[0]
                  : b.touches[0]).clientX),
                (e = j.clientY),
                z
                  .on("touchmove" + h, function (a) {
                    (k = (j = a.originalEvent
                      ? a.originalEvent.touches
                      : a.touches).length),
                      (j = j[0]),
                      (Math.abs(j.clientX - d) > 10 ||
                        Math.abs(j.clientY - e) > 10) &&
                        ((i = !0), g());
                  })
                  .on("touchend" + h, function (b) {
                    g(),
                      i ||
                        k > 1 ||
                        ((l = !0),
                        b.preventDefault(),
                        clearTimeout(c),
                        (c = setTimeout(function () {
                          l = !1;
                        }, 1e3)),
                        a());
                  });
            }),
            b.on("click" + h, function () {
              l || a();
            });
        });
      }),
      ($.fn.destroyMfpFastClick = function () {
        $(this).off("touchstart" + h + " click" + h),
          f && z.off("touchmove" + h + " touchend" + h);
      }),
      b();
  });

  // init popup
  $(".mfp-open").magnificPopup({
    type: "inline",
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: "auto",
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: "my-mfp-zoom-in",
    prependTo: "#__next",
    callbacks: {
      open: function () {
        // wait on popup initalization
        // then load owl-carousel
        $(".popup-main .owl-carousel").hide();
        setTimeout(function () {
          $(".popup-main .owl-carousel").slideDown();
        }, 500);
      },
    },
  });

  // Main popup gallery
  // ----------------------------------------------------------------
  $(".open-popup-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: "auto",
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: "my-mfp-zoom-in",
  });
}
