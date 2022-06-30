// const $ = require("jquery");
// if (typeof window !== "undefined") {
//   window.$ = window.jQuery = require("jquery");
// }

const arrowIcons = [
  '<span class="icon icon-chevron-left"></span>',
  '<span class="icon icon-chevron-right"></span>',
];

export default function owlCaroselJs() {
  if (typeof Object.create !== "function") {
    Object.create = function (obj) {
      function F() {}
      F.prototype = obj;
      return new F();
    };
  }
  !(function ($, a, b) {
    var c = {
      init: function (b, c) {
        var a = this;
        (a.$elem = $(c)),
          (a.options = $.extend(
            {},
            $.fn.owlCarousel.options,
            a.$elem.data(),
            b
          )),
          (a.userOptions = b),
          a.loadContent();
      },
      loadContent: function () {
        var b,
          a = this;
        "function" == typeof a.options.beforeInit &&
          a.options.beforeInit.apply(this, [a.$elem]),
          "string" == typeof a.options.jsonPath
            ? ((b = a.options.jsonPath),
              $.getJSON(b, function (b) {
                var c,
                  d = "";
                if ("function" == typeof a.options.jsonSuccess)
                  a.options.jsonSuccess.apply(this, [b]);
                else {
                  for (c in b.owl)
                    b.owl.hasOwnProperty(c) && (d += b.owl[c].item);
                  a.$elem.html(d);
                }
                a.logIn();
              }))
            : a.logIn();
      },
      logIn: function () {
        var a = this;
        a.$elem.data("owl-originalStyles", a.$elem.attr("style")),
          a.$elem.data("owl-originalClasses", a.$elem.attr("class")),
          a.$elem.css({ opacity: 0 }),
          (a.orignalItems = a.options.items),
          a.checkBrowser(),
          (a.wrapperWidth = 0),
          (a.checkVisible = null),
          a.setVars();
      },
      setVars: function () {
        var a = this;
        if (0 === a.$elem.children().length) return !1;
        a.baseClass(),
          a.eventTypes(),
          (a.$userItems = a.$elem.children()),
          (a.itemsAmount = a.$userItems.length),
          a.wrapItems(),
          (a.$owlItems = a.$elem.find(".owl-item")),
          (a.$owlWrapper = a.$elem.find(".owl-wrapper")),
          (a.playDirection = "next"),
          (a.prevItem = 0),
          (a.prevArr = [0]),
          (a.currentItem = 0),
          a.customEvents(),
          a.onStartup();
      },
      onStartup: function () {
        var a = this;
        a.updateItems(),
          a.calculateAll(),
          a.buildControls(),
          a.updateControls(),
          a.response(),
          a.moveEvents(),
          a.stopOnHover(),
          a.owlStatus(),
          !1 !== a.options.transitionStyle &&
            a.transitionTypes(a.options.transitionStyle),
          !0 === a.options.autoPlay && (a.options.autoPlay = 5e3),
          a.play(),
          a.$elem.find(".owl-wrapper").css("display", "block"),
          a.$elem.is(":visible")
            ? a.$elem.css("opacity", 1)
            : a.watchVisibility(),
          (a.onstartup = !1),
          a.eachMoveUpdate(),
          "function" == typeof a.options.afterInit &&
            a.options.afterInit.apply(this, [a.$elem]);
      },
      eachMoveUpdate: function () {
        !0 === this.options.lazyLoad && this.lazyLoad(),
          !0 === this.options.autoHeight && this.autoHeight(),
          this.onVisibleItems(),
          "function" == typeof this.options.afterAction &&
            this.options.afterAction.apply(this, [this.$elem]);
      },
      updateVars: function () {
        "function" == typeof this.options.beforeUpdate &&
          this.options.beforeUpdate.apply(this, [this.$elem]),
          this.watchVisibility(),
          this.updateItems(),
          this.calculateAll(),
          this.updatePosition(),
          this.updateControls(),
          this.eachMoveUpdate(),
          "function" == typeof this.options.afterUpdate &&
            this.options.afterUpdate.apply(this, [this.$elem]);
      },
      reload: function () {
        var b = this;
        a.setTimeout(function () {
          b.updateVars();
        }, 0);
      },
      watchVisibility: function () {
        var b = this;
        if (!1 !== b.$elem.is(":visible")) return !1;
        b.$elem.css({ opacity: 0 }),
          a.clearInterval(b.autoPlayInterval),
          a.clearInterval(b.checkVisible),
          (b.checkVisible = a.setInterval(function () {
            b.$elem.is(":visible") &&
              (b.reload(),
              b.$elem.animate({ opacity: 1 }, 200),
              a.clearInterval(b.checkVisible));
          }, 500));
      },
      wrapItems: function () {
        var a = this;
        a.$userItems
          .wrapAll('<div class="owl-wrapper">')
          .wrap('<div class="owl-item"></div>'),
          a.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),
          (a.wrapperOuter = a.$elem.find(".owl-wrapper-outer")),
          a.$elem.css("display", "block");
      },
      baseClass: function () {
        var a = this.$elem.hasClass(this.options.baseClass),
          b = this.$elem.hasClass(this.options.theme);
        a || this.$elem.addClass(this.options.baseClass),
          b || this.$elem.addClass(this.options.theme);
      },
      updateItems: function () {
        var b,
          c,
          a = this;
        if (!1 === a.options.responsive) return !1;
        if (!0 === a.options.singleItem)
          return (
            (a.options.items = a.orignalItems = 1),
            (a.options.itemsCustom = !1),
            (a.options.itemsDesktop = !1),
            (a.options.itemsDesktopSmall = !1),
            (a.options.itemsTablet = !1),
            (a.options.itemsTabletSmall = !1),
            (a.options.itemsMobile = !1),
            !1
          );
        if (
          ((b = $(a.options.responsiveBaseWidth).width()) >
            (a.options.itemsDesktop[0] || a.orignalItems) &&
            (a.options.items = a.orignalItems),
          !1 !== a.options.itemsCustom)
        )
          for (
            a.options.itemsCustom.sort(function (a, b) {
              return a[0] - b[0];
            }),
              c = 0;
            c < a.options.itemsCustom.length;
            c += 1
          )
            a.options.itemsCustom[c][0] <= b &&
              (a.options.items = a.options.itemsCustom[c][1]);
        else
          b <= a.options.itemsDesktop[0] &&
            !1 !== a.options.itemsDesktop &&
            (a.options.items = a.options.itemsDesktop[1]),
            b <= a.options.itemsDesktopSmall[0] &&
              !1 !== a.options.itemsDesktopSmall &&
              (a.options.items = a.options.itemsDesktopSmall[1]),
            b <= a.options.itemsTablet[0] &&
              !1 !== a.options.itemsTablet &&
              (a.options.items = a.options.itemsTablet[1]),
            b <= a.options.itemsTabletSmall[0] &&
              !1 !== a.options.itemsTabletSmall &&
              (a.options.items = a.options.itemsTabletSmall[1]),
            b <= a.options.itemsMobile[0] &&
              !1 !== a.options.itemsMobile &&
              (a.options.items = a.options.itemsMobile[1]);
        a.options.items > a.itemsAmount &&
          !0 === a.options.itemsScaleUp &&
          (a.options.items = a.itemsAmount);
      },
      response: function () {
        var d,
          c,
          b = this;
        if (!0 !== b.options.responsive) return !1;
        (c = $(a).width()),
          (b.resizer = function () {
            $(a).width() !== c &&
              (!1 !== b.options.autoPlay && a.clearInterval(b.autoPlayInterval),
              a.clearTimeout(d),
              (d = a.setTimeout(function () {
                (c = $(a).width()), b.updateVars();
              }, b.options.responsiveRefreshRate)));
          }),
          $(a).resize(b.resizer);
      },
      updatePosition: function () {
        this.jumpTo(this.currentItem),
          !1 !== this.options.autoPlay && this.checkAp();
      },
      appendItemsSizes: function () {
        var a = this,
          b = 0,
          c = a.itemsAmount - a.options.items;
        a.$owlItems.each(function (d) {
          var e = $(this);
          e.css({ width: a.itemWidth }).data("owl-item", Number(d)),
            (d % a.options.items != 0 && d !== c) || d > c || (b += 1),
            e.data("owl-roundPages", b);
        });
      },
      appendWrapperSizes: function () {
        var a = this.$owlItems.length * this.itemWidth;
        this.$owlWrapper.css({ width: 2 * a, left: 0 }),
          this.appendItemsSizes();
      },
      calculateAll: function () {
        this.calculateWidth(),
          this.appendWrapperSizes(),
          this.loops(),
          this.max();
      },
      calculateWidth: function () {
        var a = this;
        a.itemWidth = Math.round(a.$elem.width() / a.options.items);
      },
      max: function () {
        var a = this,
          b = -(
            (a.itemsAmount * a.itemWidth - a.options.items * a.itemWidth) *
            1
          );
        return (
          a.options.items > a.itemsAmount
            ? ((a.maximumItem = 0), (b = 0), (a.maximumPixels = 0))
            : ((a.maximumItem = a.itemsAmount - a.options.items),
              (a.maximumPixels = b)),
          b
        );
      },
      min: function () {
        return 0;
      },
      loops: function () {
        var b,
          d,
          a = this,
          c = 0,
          e = 0;
        for (
          b = 0, a.positionsInArray = [0], a.pagesInArray = [];
          b < a.itemsAmount;
          b += 1
        )
          (e += a.itemWidth),
            a.positionsInArray.push(-e),
            !0 === a.options.scrollPerPage &&
              (d = $(a.$owlItems[b]).data("owl-roundPages")) !== c &&
              ((a.pagesInArray[c] = a.positionsInArray[b]), (c = d));
      },
      buildControls: function () {
        var a = this;
        (!0 === a.options.navigation || !0 === a.options.pagination) &&
          (a.owlControls = $('<div class="owl-controls"/>')
            .toggleClass("clickable", !a.browser.isTouch)
            .appendTo(a.$elem)),
          !0 === a.options.pagination && a.buildPagination(),
          !0 === a.options.navigation && a.buildButtons();
      },
      buildButtons: function () {
        var a = this,
          b = $('<div class="owl-buttons"/>');
        a.owlControls.append(b),
          (a.buttonPrev = $("<div/>", {
            class: "owl-prev",
            html: a.options.navigationText[0] || "",
          })),
          (a.buttonNext = $("<div/>", {
            class: "owl-next",
            html: a.options.navigationText[1] || "",
          })),
          b.append(a.buttonPrev).append(a.buttonNext),
          b.on(
            "touchstart.owlControls mousedown.owlControls",
            'div[class^="owl"]',
            function (a) {
              a.preventDefault();
            }
          ),
          b.on(
            "touchend.owlControls mouseup.owlControls",
            'div[class^="owl"]',
            function (b) {
              b.preventDefault(),
                $(this).hasClass("owl-next") ? a.next() : a.prev();
            }
          );
      },
      buildPagination: function () {
        var a = this;
        (a.paginationWrapper = $('<div class="owl-pagination"/>')),
          a.owlControls.append(a.paginationWrapper),
          a.paginationWrapper.on(
            "touchend.owlControls mouseup.owlControls",
            ".owl-page",
            function (b) {
              b.preventDefault(),
                Number($(this).data("owl-page")) !== a.currentItem &&
                  a.goTo(Number($(this).data("owl-page")), !0);
            }
          );
      },
      updatePagination: function () {
        var c, d, e, a, b, f;
        if (!1 === this.options.pagination) return !1;
        for (
          this.paginationWrapper.html(""),
            c = 0,
            d = this.itemsAmount - (this.itemsAmount % this.options.items),
            a = 0;
          a < this.itemsAmount;
          a += 1
        )
          a % this.options.items == 0 &&
            ((c += 1),
            d === a && (e = this.itemsAmount - this.options.items),
            (b = $("<div/>", { class: "owl-page" })),
            (f = $("<span></span>", {
              text: !0 === this.options.paginationNumbers ? c : "",
              class: !0 === this.options.paginationNumbers ? "owl-numbers" : "",
            })),
            b.append(f),
            b.data("owl-page", d === a ? e : a),
            b.data("owl-roundPages", c),
            this.paginationWrapper.append(b));
        this.checkPagination();
      },
      checkPagination: function () {
        var a = this;
        if (!1 === a.options.pagination) return !1;
        a.paginationWrapper.find(".owl-page").each(function () {
          $(this).data("owl-roundPages") ===
            $(a.$owlItems[a.currentItem]).data("owl-roundPages") &&
            (a.paginationWrapper.find(".owl-page").removeClass("active"),
            $(this).addClass("active"));
        });
      },
      checkNavigation: function () {
        if (!1 === this.options.navigation) return !1;
        !1 === this.options.rewindNav &&
          (0 === this.currentItem && 0 === this.maximumItem
            ? (this.buttonPrev.addClass("disabled"),
              this.buttonNext.addClass("disabled"))
            : 0 === this.currentItem && 0 !== this.maximumItem
            ? (this.buttonPrev.addClass("disabled"),
              this.buttonNext.removeClass("disabled"))
            : this.currentItem === this.maximumItem
            ? (this.buttonPrev.removeClass("disabled"),
              this.buttonNext.addClass("disabled"))
            : 0 !== this.currentItem &&
              this.currentItem !== this.maximumItem &&
              (this.buttonPrev.removeClass("disabled"),
              this.buttonNext.removeClass("disabled")));
      },
      updateControls: function () {
        this.updatePagination(),
          this.checkNavigation(),
          this.owlControls &&
            (this.options.items >= this.itemsAmount
              ? this.owlControls.hide()
              : this.owlControls.show());
      },
      destroyControls: function () {
        this.owlControls && this.owlControls.remove();
      },
      next: function (b) {
        var a = this;
        if (a.isTransition) return !1;
        if (
          ((a.currentItem +=
            !0 === a.options.scrollPerPage ? a.options.items : 1),
          a.currentItem >
            a.maximumItem +
              (!0 === a.options.scrollPerPage ? a.options.items - 1 : 0))
        ) {
          if (!0 !== a.options.rewindNav)
            return (a.currentItem = a.maximumItem), !1;
          (a.currentItem = 0), (b = "rewind");
        }
        a.goTo(a.currentItem, b);
      },
      prev: function (b) {
        var a = this;
        if (a.isTransition) return !1;
        if (
          (!0 === a.options.scrollPerPage &&
          a.currentItem > 0 &&
          a.currentItem < a.options.items
            ? (a.currentItem = 0)
            : (a.currentItem -=
                !0 === a.options.scrollPerPage ? a.options.items : 1),
          a.currentItem < 0)
        ) {
          if (!0 !== a.options.rewindNav) return (a.currentItem = 0), !1;
          (a.currentItem = a.maximumItem), (b = "rewind");
        }
        a.goTo(a.currentItem, b);
      },
      goTo: function (c, e, f) {
        var d,
          b = this;
        return (
          !b.isTransition &&
          (("function" == typeof b.options.beforeMove &&
            b.options.beforeMove.apply(this, [b.$elem]),
          c >= b.maximumItem ? (c = b.maximumItem) : c <= 0 && (c = 0),
          (b.currentItem = b.owl.currentItem = c),
          !1 !== b.options.transitionStyle &&
            "drag" !== f &&
            1 === b.options.items &&
            !0 === b.browser.support3d)
            ? (b.swapSpeed(0),
              !0 === b.browser.support3d
                ? b.transition3d(b.positionsInArray[c])
                : b.css2slide(b.positionsInArray[c], 1),
              b.afterGo(),
              b.singleItemTransition(),
              !1)
            : void ((d = b.positionsInArray[c]),
              !0 === b.browser.support3d
                ? ((b.isCss3Finish = !1),
                  !0 === e
                    ? (b.swapSpeed("paginationSpeed"),
                      a.setTimeout(function () {
                        b.isCss3Finish = !0;
                      }, b.options.paginationSpeed))
                    : "rewind" === e
                    ? (b.swapSpeed(b.options.rewindSpeed),
                      a.setTimeout(function () {
                        b.isCss3Finish = !0;
                      }, b.options.rewindSpeed))
                    : (b.swapSpeed("slideSpeed"),
                      a.setTimeout(function () {
                        b.isCss3Finish = !0;
                      }, b.options.slideSpeed)),
                  b.transition3d(d))
                : !0 === e
                ? b.css2slide(d, b.options.paginationSpeed)
                : "rewind" === e
                ? b.css2slide(d, b.options.rewindSpeed)
                : b.css2slide(d, b.options.slideSpeed),
              b.afterGo()))
        );
      },
      jumpTo: function (b) {
        var a = this;
        "function" == typeof a.options.beforeMove &&
          a.options.beforeMove.apply(this, [a.$elem]),
          b >= a.maximumItem || -1 === b
            ? (b = a.maximumItem)
            : b <= 0 && (b = 0),
          a.swapSpeed(0),
          !0 === a.browser.support3d
            ? a.transition3d(a.positionsInArray[b])
            : a.css2slide(a.positionsInArray[b], 1),
          (a.currentItem = a.owl.currentItem = b),
          a.afterGo();
      },
      afterGo: function () {
        var a = this;
        a.prevArr.push(a.currentItem),
          (a.prevItem = a.owl.prevItem = a.prevArr[a.prevArr.length - 2]),
          a.prevArr.shift(0),
          a.prevItem !== a.currentItem &&
            (a.checkPagination(),
            a.checkNavigation(),
            a.eachMoveUpdate(),
            !1 !== a.options.autoPlay && a.checkAp()),
          "function" == typeof a.options.afterMove &&
            a.prevItem !== a.currentItem &&
            a.options.afterMove.apply(this, [a.$elem]);
      },
      stop: function () {
        var b = this;
        (b.apStatus = "stop"), a.clearInterval(b.autoPlayInterval);
      },
      checkAp: function () {
        "stop" !== this.apStatus && this.play();
      },
      play: function () {
        var b = this;
        if (((b.apStatus = "play"), !1 === b.options.autoPlay)) return !1;
        a.clearInterval(b.autoPlayInterval),
          (b.autoPlayInterval = a.setInterval(function () {
            b.next(!0);
          }, b.options.autoPlay));
      },
      swapSpeed: function (a) {
        "slideSpeed" === a
          ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed))
          : "paginationSpeed" === a
          ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed))
          : "string" != typeof a && this.$owlWrapper.css(this.addCssSpeed(a));
      },
      addCssSpeed: function (a) {
        return {
          "-webkit-transition": "all " + a + "ms ease",
          "-moz-transition": "all " + a + "ms ease",
          "-o-transition": "all " + a + "ms ease",
          transition: "all " + a + "ms ease",
        };
      },
      removeTransition: function () {
        return {
          "-webkit-transition": "",
          "-moz-transition": "",
          "-o-transition": "",
          transition: "",
        };
      },
      doTranslate: function (a) {
        return {
          "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
          "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
          "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
          "-ms-transform": "translate3d(" + a + "px, 0px, 0px)",
          transform: "translate3d(" + a + "px, 0px,0px)",
        };
      },
      transition3d: function (a) {
        this.$owlWrapper.css(this.doTranslate(a));
      },
      css2move: function (a) {
        this.$owlWrapper.css({ left: a });
      },
      css2slide: function (b, c) {
        var a = this;
        (a.isCssFinish = !1),
          a.$owlWrapper.stop(!0, !0).animate(
            { left: b },
            {
              duration: c || a.options.slideSpeed,
              complete: function () {
                a.isCssFinish = !0;
              },
            }
          );
      },
      checkBrowser: function () {
        var d,
          e,
          f,
          g,
          i = this,
          c = "translate3d(0px, 0px, 0px)",
          h = b.createElement("div");
        (h.style.cssText =
          "  -moz-transform:" +
          c +
          "; -ms-transform:" +
          c +
          "; -o-transform:" +
          c +
          "; -webkit-transform:" +
          c +
          "; transform:" +
          c),
          (d = /translate3d\(0px, 0px, 0px\)/g),
          (f = null !== (e = h.style.cssText.match(d)) && 1 === e.length),
          (g = "ontouchstart" in a || a.navigator.msMaxTouchPoints),
          (i.browser = { support3d: f, isTouch: g });
      },
      moveEvents: function () {
        (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) &&
          (this.gestures(), this.disabledEvents());
      },
      eventTypes: function () {
        var a = this,
          b = ["s", "e", "x"];
        (a.ev_types = {}),
          !0 === a.options.mouseDrag && !0 === a.options.touchDrag
            ? (b = [
                "touchstart.owl mousedown.owl",
                "touchmove.owl mousemove.owl",
                "touchend.owl touchcancel.owl mouseup.owl",
              ])
            : !1 === a.options.mouseDrag && !0 === a.options.touchDrag
            ? (b = [
                "touchstart.owl",
                "touchmove.owl",
                "touchend.owl touchcancel.owl",
              ])
            : !0 === a.options.mouseDrag &&
              !1 === a.options.touchDrag &&
              (b = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]),
          (a.ev_types.start = b[0]),
          (a.ev_types.move = b[1]),
          (a.ev_types.end = b[2]);
      },
      disabledEvents: function () {
        this.$elem.on("dragstart.owl", function (a) {
          a.preventDefault();
        }),
          this.$elem.on("mousedown.disableTextSelect", function (a) {
            return $(a.target).is("input, textarea, select, option");
          });
      },
      gestures: function () {
        var c = this,
          d = {
            offsetX: 0,
            offsetY: 0,
            baseElWidth: 0,
            relativePos: 0,
            position: null,
            minSwipe: null,
            maxSwipe: null,
            sliding: null,
            dargging: null,
            targetElement: null,
          };
        function e(a) {
          if (void 0 !== a.touches)
            return { x: a.touches[0].pageX, y: a.touches[0].pageY };
          if (void 0 === a.touches) {
            if (void 0 !== a.pageX) return { x: a.pageX, y: a.pageY };
            if (void 0 === a.pageX) return { x: a.clientX, y: a.clientY };
          }
        }
        function f(a) {
          "on" === a
            ? ($(b).on(c.ev_types.move, g), $(b).on(c.ev_types.end, h))
            : "off" === a &&
              ($(b).off(c.ev_types.move), $(b).off(c.ev_types.end));
        }
        function g(g) {
          var h,
            i,
            f = g.originalEvent || g || a.event;
          (c.newPosX = e(f).x - d.offsetX),
            (c.newPosY = e(f).y - d.offsetY),
            (c.newRelativeX = c.newPosX - d.relativePos),
            "function" == typeof c.options.startDragging &&
              !0 !== d.dragging &&
              0 !== c.newRelativeX &&
              ((d.dragging = !0), c.options.startDragging.apply(c, [c.$elem])),
            (c.newRelativeX > 8 || c.newRelativeX < -8) &&
              !0 === c.browser.isTouch &&
              (void 0 !== f.preventDefault
                ? f.preventDefault()
                : (f.returnValue = !1),
              (d.sliding = !0)),
            (c.newPosY > 10 || c.newPosY < -10) &&
              !1 === d.sliding &&
              $(b).off("touchmove.owl"),
            (h = function () {
              return c.newRelativeX / 5;
            }),
            (i = function () {
              return c.maximumPixels + c.newRelativeX / 5;
            }),
            (c.newPosX = Math.max(Math.min(c.newPosX, h()), i())),
            !0 === c.browser.support3d
              ? c.transition3d(c.newPosX)
              : c.css2move(c.newPosX);
        }
        function h(e) {
          var g,
            h,
            i,
            b = e.originalEvent || e || a.event;
          Object.defineProperty(b, "target", b.target || b.srcElement),
            (d.dragging = !1),
            !0 !== c.browser.isTouch && c.$owlWrapper.removeClass("grabbing"),
            c.newRelativeX < 0
              ? (c.dragDirection = c.owl.dragDirection = "left")
              : (c.dragDirection = c.owl.dragDirection = "right"),
            0 !== c.newRelativeX &&
              ((g = c.getNewPosition()),
              c.goTo(g, !1, "drag"),
              d.targetElement === b.target &&
                !0 !== c.browser.isTouch &&
                ($(b.target).on("click.disable", function (a) {
                  a.stopImmediatePropagation(),
                    a.stopPropagation(),
                    a.preventDefault(),
                    $(a.target).off("click.disable");
                }),
                (i = (h = $._data(b.target, "events").click).pop()),
                h.splice(0, 0, i))),
            f("off");
        }
        (c.isCssFinish = !0),
          c.$elem.on(c.ev_types.start, ".owl-wrapper", function (h) {
            var g,
              b = h.originalEvent || h || a.event;
            return (
              3 !== b.which &&
              (c.itemsAmount <= c.options.items
                ? void 0
                : (!1 !== c.isCssFinish || !!c.options.dragBeforeAnimFinish) &&
                  (!1 !== c.isCss3Finish || !!c.options.dragBeforeAnimFinish) &&
                  void (!1 !== c.options.autoPlay &&
                    a.clearInterval(c.autoPlayInterval),
                  !0 === c.browser.isTouch ||
                    c.$owlWrapper.hasClass("grabbing") ||
                    c.$owlWrapper.addClass("grabbing"),
                  (c.newPosX = 0),
                  (c.newRelativeX = 0),
                  $(this).css(c.removeTransition()),
                  (g = $(this).position()),
                  (d.relativePos = g.left),
                  (d.offsetX = e(b).x - g.left),
                  (d.offsetY = e(b).y - g.top),
                  f("on"),
                  (d.sliding = !1),
                  (d.targetElement = b.target || b.srcElement)))
            );
          });
      },
      getNewPosition: function () {
        var a = this,
          b = a.closestItem();
        return (
          b > a.maximumItem
            ? ((a.currentItem = a.maximumItem), (b = a.maximumItem))
            : a.newPosX >= 0 && ((b = 0), (a.currentItem = 0)),
          b
        );
      },
      closestItem: function () {
        var a = this,
          b =
            !0 === a.options.scrollPerPage
              ? a.pagesInArray
              : a.positionsInArray,
          c = a.newPosX,
          d = null;
        return (
          $.each(b, function (e, f) {
            c - a.itemWidth / 20 > b[e + 1] &&
            c - a.itemWidth / 20 < f &&
            "left" === a.moveDirection()
              ? ((d = f),
                !0 === a.options.scrollPerPage
                  ? (a.currentItem = $.inArray(d, a.positionsInArray))
                  : (a.currentItem = e))
              : c + a.itemWidth / 20 < f &&
                c + a.itemWidth / 20 > (b[e + 1] || b[e] - a.itemWidth) &&
                "right" === a.moveDirection() &&
                (!0 === a.options.scrollPerPage
                  ? ((d = b[e + 1] || b[b.length - 1]),
                    (a.currentItem = $.inArray(d, a.positionsInArray)))
                  : ((d = b[e + 1]), (a.currentItem = e + 1)));
          }),
          a.currentItem
        );
      },
      moveDirection: function () {
        var a,
          b = this;
        return (
          b.newRelativeX < 0
            ? ((a = "right"), (b.playDirection = "next"))
            : ((a = "left"), (b.playDirection = "prev")),
          a
        );
      },
      customEvents: function () {
        var a = this;
        a.$elem.on("owl.next", function () {
          a.next();
        }),
          a.$elem.on("owl.prev", function () {
            a.prev();
          }),
          a.$elem.on("owl.play", function (c, b) {
            (a.options.autoPlay = b), a.play(), (a.hoverStatus = "play");
          }),
          a.$elem.on("owl.stop", function () {
            a.stop(), (a.hoverStatus = "stop");
          }),
          a.$elem.on("owl.goTo", function (c, b) {
            a.goTo(b);
          }),
          a.$elem.on("owl.jumpTo", function (c, b) {
            a.jumpTo(b);
          });
      },
      stopOnHover: function () {
        var a = this;
        !0 === a.options.stopOnHover &&
          !0 !== a.browser.isTouch &&
          !1 !== a.options.autoPlay &&
          (a.$elem.on("mouseover", function () {
            a.stop();
          }),
          a.$elem.on("mouseout", function () {
            "stop" !== a.hoverStatus && a.play();
          }));
      },
      lazyLoad: function () {
        var c, a, d, b;
        if (!1 === this.options.lazyLoad) return !1;
        for (c = 0; c < this.itemsAmount; c += 1)
          if ("loaded" !== (a = $(this.$owlItems[c])).data("owl-loaded")) {
            if (
              ((d = a.data("owl-item")),
              (b = a.find(".lazyOwl")),
              "string" != typeof b.data("src"))
            ) {
              a.data("owl-loaded", "loaded");
              continue;
            }
            void 0 === a.data("owl-loaded") &&
              (b.hide(), a.addClass("loading").data("owl-loaded", "checked")),
              (!0 !== this.options.lazyFollow || d >= this.currentItem) &&
                d < this.currentItem + this.options.items &&
                b.length &&
                this.lazyPreload(a, b);
          }
      },
      lazyPreload: function (e, b) {
        var c,
          f = this,
          g = 0;
        function h() {
          e.data("owl-loaded", "loaded").removeClass("loading"),
            b.removeAttr("data-src"),
            "fade" === f.options.lazyEffect ? b.fadeIn(400) : b.show(),
            "function" == typeof f.options.afterLazyLoad &&
              f.options.afterLazyLoad.apply(this, [f.$elem]);
        }
        function d() {
          (g += 1),
            f.completeImg(b.get(0)) || !0 === c
              ? h()
              : g <= 100
              ? a.setTimeout(d, 100)
              : h();
        }
        "DIV" === b.prop("tagName")
          ? (b.css("background-image", "url(" + b.data("src") + ")"), (c = !0))
          : (b[0].src = b.data("src")),
          d();
      },
      autoHeight: function () {
        var c,
          b = this,
          d = $(b.$owlItems[b.currentItem]).find("img");
        function e() {
          var c = $(b.$owlItems[b.currentItem]).height();
          b.wrapperOuter.css("height", c + "px"),
            b.wrapperOuter.hasClass("autoHeight") ||
              a.setTimeout(function () {
                b.wrapperOuter.addClass("autoHeight");
              }, 0);
        }
        function f() {
          (c += 1),
            b.completeImg(d.get(0))
              ? e()
              : c <= 100
              ? a.setTimeout(f, 100)
              : b.wrapperOuter.css("height", "");
        }
        void 0 !== d.get(0) ? ((c = 0), f()) : e();
      },
      completeImg: function (a) {
        return (
          !!a.complete && (void 0 === a.naturalWidth || 0 !== a.naturalWidth)
        );
      },
      onVisibleItems: function () {
        var b,
          a = this;
        for (
          !0 === a.options.addClassActive && a.$owlItems.removeClass("active"),
            a.visibleItems = [],
            b = a.currentItem;
          b < a.currentItem + a.options.items;
          b += 1
        )
          a.visibleItems.push(b),
            !0 === a.options.addClassActive &&
              $(a.$owlItems[b]).addClass("active");
        a.owl.visibleItems = a.visibleItems;
      },
      transitionTypes: function (a) {
        var b = this;
        (b.outClass = "owl-" + a + "-out"), (b.inClass = "owl-" + a + "-in");
      },
      singleItemTransition: function () {
        var i,
          a = this,
          d = a.outClass,
          e = a.inClass,
          f = a.$owlItems.eq(a.currentItem),
          g = a.$owlItems.eq(a.prevItem),
          h =
            Math.abs(a.positionsInArray[a.currentItem]) +
            a.positionsInArray[a.prevItem],
          b = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2,
          c = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
        (a.isTransition = !0),
          a.$owlWrapper.addClass("owl-origin").css({
            "-webkit-transform-origin": b + "px",
            "-moz-perspective-origin": b + "px",
            "perspective-origin": b + "px",
          }),
          g
            .css({ position: "relative", left: h + "px" })
            .addClass(d)
            .on(c, function () {
              (a.endPrev = !0), g.off(c), a.clearTransStyle(g, d);
            }),
          f.addClass(e).on(c, function () {
            (a.endCurrent = !0), f.off(c), a.clearTransStyle(f, e);
          });
      },
      clearTransStyle: function (b, c) {
        var a = this;
        b.css({ position: "", left: "" }).removeClass(c),
          a.endPrev &&
            a.endCurrent &&
            (a.$owlWrapper.removeClass("owl-origin"),
            (a.endPrev = !1),
            (a.endCurrent = !1),
            (a.isTransition = !1));
      },
      owlStatus: function () {
        var a = this;
        a.owl = {
          userOptions: a.userOptions,
          baseElement: a.$elem,
          userItems: a.$userItems,
          owlItems: a.$owlItems,
          currentItem: a.currentItem,
          prevItem: a.prevItem,
          visibleItems: a.visibleItems,
          isTouch: a.browser.isTouch,
          browser: a.browser,
          dragDirection: a.dragDirection,
        };
      },
      clearEvents: function () {
        this.$elem.off(".owl owl mousedown.disableTextSelect"),
          $(b).off(".owl owl"),
          $(a).off("resize", this.resizer);
      },
      unWrap: function () {
        0 !== this.$elem.children().length &&
          (this.$owlWrapper.unwrap(),
          this.$userItems.unwrap().unwrap(),
          this.owlControls && this.owlControls.remove()),
          this.clearEvents(),
          this.$elem
            .attr("style", this.$elem.data("owl-originalStyles") || "")
            .attr("class", this.$elem.data("owl-originalClasses"));
      },
      destroy: function () {
        this.stop(),
          a.clearInterval(this.checkVisible),
          this.unWrap(),
          this.$elem.removeData();
      },
      reinit: function (a) {
        var b = $.extend({}, this.userOptions, a);
        this.unWrap(), this.init(b, this.$elem);
      },
      addItem: function (a, b) {
        var c;
        return (
          !!a &&
          (0 === this.$elem.children().length
            ? (this.$elem.append(a), this.setVars(), !1)
            : void (this.unWrap(),
              (c = void 0 === b || -1 === b ? -1 : b) >=
                this.$userItems.length || -1 === c
                ? this.$userItems.eq(-1).after(a)
                : this.$userItems.eq(c).before(a),
              this.setVars()))
        );
      },
      removeItem: function (a) {
        var b;
        if (0 === this.$elem.children().length) return !1;
        (b = void 0 === a || -1 === a ? -1 : a),
          this.unWrap(),
          this.$userItems.eq(b).remove(),
          this.setVars();
      },
    };
    ($.fn.owlCarousel = function (a) {
      return this.each(function () {
        if (!0 === $(this).data("owl-init")) return !1;
        $(this).data("owl-init", !0);
        var b = Object.create(c);
        b.init(a, this), $.data(this, "owlCarousel", b);
      });
    }),
      ($.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: a,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1,
      });
  })(jQuery, window, document);

  // ==================== Initializations ======================\\
  //Home Slider
  $.each($(".owl-slider"), function (i, n) {
    $(n).owlCarousel({
      autoHeight: false,
      navigation: true,
      navigationText: arrowIcons,
      items: 1,
      singleItem: true,
      addClassActive: true,
      transitionStyle: "fadeUp",
      afterMove: animatetCaptions,
      autoPlay: 8000,
      stopOnHover: false,
      lazyLoad: true,
    });

    animatetCaptions();

    function animatetCaptions(event) {
      "use strict";
      var activeItem = $(n).find(".owl-item.active"),
        timeDelay = 100;
      $.each(activeItem.find(".animated"), function (j, m) {
        var item = $(m);
        item.css("animation-delay", timeDelay + "ms");
        timeDelay = timeDelay + 180;
        item.addClass(item.data("animation"));
        setTimeout(function () {
          item.removeClass(item.data("animation"));
        }, 2000);
      });
    }

    if ($(n).hasClass("owl-slider-fullscreen")) {
      $(".header-content .item").height($(window).height());
    }
  });

  // Icon Slider
  $.each($(".owl-icons"), function (i, n) {
    $(n).owlCarousel({
      autoHeight: false,
      pagination: false,
      navigation: true,
      navigationText: arrowIcons,
      items: 6,
      itemsDesktop: [1199, 5],
      itemsDesktopSmall: [979, 5],
      itemsTablet: [768, 4],
      itemsTabletSmall: false,
      itemsMobile: [479, 3],
      addClassActive: true,
      autoPlay: 5500,
      stopOnHover: true,
      lazyLoad: true,
    });
  });

  //Product slider
  $.each($(".owl-product-gallery"), function (i, n) {
    $(n).owlCarousel({
      //transitionStyle: "fadeUp",
      autoHeight: true,
      slideSpeed: 800,
      navigation: true,
      navigationText: arrowIcons,
      pagination: true,
      items: 1,
      singleItem: true,
      lazyLoad: true,
    });
  });

  // Quote carousel
  $.each($(".quote-carousel"), function (i, n) {
    $(n).owlCarousel({
      navigation: true, // Show next and prev buttons
      slideSpeed: 300,
      items: 3,
      paginationSpeed: 400,
      singleItem: false,
      navigationText: arrowIcons,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 3],
      itemsTablet: [768, 1],
      itemsTabletSmall: false,
      itemsMobile: [479, 1],
      autoPlay: 3000,
      stopOnHover: true,
      lazyLoad: true,
    });
  });
}
