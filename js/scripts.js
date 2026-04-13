/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 
//var SimpleBar = function () { "use strict"; var t = function (e, i) { return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) { t.__proto__ = e } || function (t, e) { for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]) }, t(e, i) }; function e(t) { var e = typeof t; return null != t && ("object" == e || "function" == e) } var i = "object" == typeof global && global && global.Object === Object && global, s = "object" == typeof self && self && self.Object === Object && self, r = i || s || Function("return this")(), l = function () { return r.Date.now() }, o = /\s/; var n = /^\s+/; function a(t) { return t ? t.slice(0, function (t) { for (var e = t.length; e-- && o.test(t.charAt(e));); return e }(t) + 1).replace(n, "") : t } var c = r.Symbol, h = Object.prototype, u = h.hasOwnProperty, d = h.toString, p = c ? c.toStringTag : void 0; var v = Object.prototype.toString; var f = c ? c.toStringTag : void 0; function m(t) { return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : f && f in Object(t) ? function (t) { var e = u.call(t, p), i = t[p]; try { t[p] = void 0; var s = !0 } catch (t) { } var r = d.call(t); return s && (e ? t[p] = i : delete t[p]), r }(t) : function (t) { return v.call(t) }(t) } var b = /^[-+]0x[0-9a-f]+$/i, g = /^0b[01]+$/i, x = /^0o[0-7]+$/i, y = parseInt; function E(t) { if ("number" == typeof t) return t; if (function (t) { return "symbol" == typeof t || function (t) { return null != t && "object" == typeof t }(t) && "[object Symbol]" == m(t) }(t)) return NaN; if (e(t)) { var i = "function" == typeof t.valueOf ? t.valueOf() : t; t = e(i) ? i + "" : i } if ("string" != typeof t) return 0 === t ? t : +t; t = a(t); var s = g.test(t); return s || x.test(t) ? y(t.slice(2), s ? 2 : 8) : b.test(t) ? NaN : +t } var O = Math.max, w = Math.min; function S(t, i, s) { var r, o, n, a, c, h, u = 0, d = !1, p = !1, v = !0; if ("function" != typeof t) throw new TypeError("Expected a function"); function f(e) { var i = r, s = o; return r = o = void 0, u = e, a = t.apply(s, i) } function m(t) { return u = t, c = setTimeout(g, i), d ? f(t) : a } function b(t) { var e = t - h; return void 0 === h || e >= i || e < 0 || p && t - u >= n } function g() { var t = l(); if (b(t)) return x(t); c = setTimeout(g, function (t) { var e = i - (t - h); return p ? w(e, n - (t - u)) : e }(t)) } function x(t) { return c = void 0, v && r ? f(t) : (r = o = void 0, a) } function y() { var t = l(), e = b(t); if (r = arguments, o = this, h = t, e) { if (void 0 === c) return m(h); if (p) return clearTimeout(c), c = setTimeout(g, i), f(h) } return void 0 === c && (c = setTimeout(g, i)), a } return i = E(i) || 0, e(s) && (d = !!s.leading, n = (p = "maxWait" in s) ? O(E(s.maxWait) || 0, i) : n, v = "trailing" in s ? !!s.trailing : v), y.cancel = function () { void 0 !== c && clearTimeout(c), u = 0, r = h = o = c = void 0 }, y.flush = function () { return void 0 === c ? a : x(l()) }, y } var A = function () { return A = Object.assign || function (t) { for (var e, i = 1, s = arguments.length; i < s; i++)for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]); return t }, A.apply(this, arguments) }; function k(t) { return t && t.ownerDocument && t.ownerDocument.defaultView ? t.ownerDocument.defaultView : window } function W(t) { return t && t.ownerDocument ? t.ownerDocument : document } var M = function (t) { return Array.prototype.reduce.call(t, (function (t, e) { var i = e.name.match(/data-simplebar-(.+)/); if (i) { var s = i[1].replace(/\W+(.)/g, (function (t, e) { return e.toUpperCase() })); switch (e.value) { case "true": t[s] = !0; break; case "false": t[s] = !1; break; case void 0: t[s] = !0; break; default: t[s] = e.value } } return t }), {}) }; function N(t, e) { var i; t && (i = t.classList).add.apply(i, e.split(" ")) } function L(t, e) { t && e.split(" ").forEach((function (e) { t.classList.remove(e) })) } function z(t) { return ".".concat(t.split(" ").join(".")) } var C = !("undefined" == typeof window || !window.document || !window.document.createElement), T = Object.freeze({ __proto__: null, addClasses: N, canUseDOM: C, classNamesToQuery: z, getElementDocument: W, getElementWindow: k, getOptions: M, removeClasses: L }), D = null, R = null; function V() { if (null === D) { if ("undefined" == typeof document) return D = 0; var t = document.body, e = document.createElement("div"); e.classList.add("simplebar-hide-scrollbar"), t.appendChild(e); var i = e.getBoundingClientRect().right; t.removeChild(e), D = i } return D } C && window.addEventListener("resize", (function () { R !== window.devicePixelRatio && (R = window.devicePixelRatio, D = null) })); var H = k, j = W, B = M, _ = N, q = L, P = z, X = function () { function t(i, s) { void 0 === s && (s = {}); var r = this; if (this.removePreventClickId = null, this.minScrollbarWidth = 20, this.stopScrollDelay = 175, this.isScrolling = !1, this.isMouseEntering = !1, this.isDragging = !1, this.scrollXTicking = !1, this.scrollYTicking = !1, this.wrapperEl = null, this.contentWrapperEl = null, this.contentEl = null, this.offsetEl = null, this.maskEl = null, this.placeholderEl = null, this.heightAutoObserverWrapperEl = null, this.heightAutoObserverEl = null, this.rtlHelpers = null, this.scrollbarWidth = 0, this.resizeObserver = null, this.mutationObserver = null, this.elStyles = null, this.isRtl = null, this.mouseX = 0, this.mouseY = 0, this.onMouseMove = function () { }, this.onWindowResize = function () { }, this.onStopScrolling = function () { }, this.onMouseEntered = function () { }, this.onScroll = function () { var t = H(r.el); r.scrollXTicking || (t.requestAnimationFrame(r.scrollX), r.scrollXTicking = !0), r.scrollYTicking || (t.requestAnimationFrame(r.scrollY), r.scrollYTicking = !0), r.isScrolling || (r.isScrolling = !0, _(r.el, r.classNames.scrolling)), r.showScrollbar("x"), r.showScrollbar("y"), r.onStopScrolling() }, this.scrollX = function () { r.axis.x.isOverflowing && r.positionScrollbar("x"), r.scrollXTicking = !1 }, this.scrollY = function () { r.axis.y.isOverflowing && r.positionScrollbar("y"), r.scrollYTicking = !1 }, this._onStopScrolling = function () { q(r.el, r.classNames.scrolling), r.options.autoHide && (r.hideScrollbar("x"), r.hideScrollbar("y")), r.isScrolling = !1 }, this.onMouseEnter = function () { r.isMouseEntering || (_(r.el, r.classNames.mouseEntered), r.showScrollbar("x"), r.showScrollbar("y"), r.isMouseEntering = !0), r.onMouseEntered() }, this._onMouseEntered = function () { q(r.el, r.classNames.mouseEntered), r.options.autoHide && (r.hideScrollbar("x"), r.hideScrollbar("y")), r.isMouseEntering = !1 }, this._onMouseMove = function (t) { r.mouseX = t.clientX, r.mouseY = t.clientY, (r.axis.x.isOverflowing || r.axis.x.forceVisible) && r.onMouseMoveForAxis("x"), (r.axis.y.isOverflowing || r.axis.y.forceVisible) && r.onMouseMoveForAxis("y") }, this.onMouseLeave = function () { r.onMouseMove.cancel(), (r.axis.x.isOverflowing || r.axis.x.forceVisible) && r.onMouseLeaveForAxis("x"), (r.axis.y.isOverflowing || r.axis.y.forceVisible) && r.onMouseLeaveForAxis("y"), r.mouseX = -1, r.mouseY = -1 }, this._onWindowResize = function () { r.scrollbarWidth = r.getScrollbarWidth(), r.hideNativeScrollbar() }, this.onPointerEvent = function (t) { var e, i; r.axis.x.track.el && r.axis.y.track.el && r.axis.x.scrollbar.el && r.axis.y.scrollbar.el && (r.axis.x.track.rect = r.axis.x.track.el.getBoundingClientRect(), r.axis.y.track.rect = r.axis.y.track.el.getBoundingClientRect(), (r.axis.x.isOverflowing || r.axis.x.forceVisible) && (e = r.isWithinBounds(r.axis.x.track.rect)), (r.axis.y.isOverflowing || r.axis.y.forceVisible) && (i = r.isWithinBounds(r.axis.y.track.rect)), (e || i) && (t.stopPropagation(), "pointerdown" === t.type && "touch" !== t.pointerType && (e && (r.axis.x.scrollbar.rect = r.axis.x.scrollbar.el.getBoundingClientRect(), r.isWithinBounds(r.axis.x.scrollbar.rect) ? r.onDragStart(t, "x") : r.onTrackClick(t, "x")), i && (r.axis.y.scrollbar.rect = r.axis.y.scrollbar.el.getBoundingClientRect(), r.isWithinBounds(r.axis.y.scrollbar.rect) ? r.onDragStart(t, "y") : r.onTrackClick(t, "y"))))) }, this.drag = function (e) { var i, s, l, o, n, a, c, h, u, d, p; if (r.draggedAxis && r.contentWrapperEl) { var v = r.axis[r.draggedAxis].track, f = null !== (s = null === (i = v.rect) || void 0 === i ? void 0 : i[r.axis[r.draggedAxis].sizeAttr]) && void 0 !== s ? s : 0, m = r.axis[r.draggedAxis].scrollbar, b = null !== (o = null === (l = r.contentWrapperEl) || void 0 === l ? void 0 : l[r.axis[r.draggedAxis].scrollSizeAttr]) && void 0 !== o ? o : 0, g = parseInt(null !== (a = null === (n = r.elStyles) || void 0 === n ? void 0 : n[r.axis[r.draggedAxis].sizeAttr]) && void 0 !== a ? a : "0px", 10); e.preventDefault(), e.stopPropagation(); var x = ("y" === r.draggedAxis ? e.pageY : e.pageX) - (null !== (h = null === (c = v.rect) || void 0 === c ? void 0 : c[r.axis[r.draggedAxis].offsetAttr]) && void 0 !== h ? h : 0) - r.axis[r.draggedAxis].dragOffset, y = (x = "x" === r.draggedAxis && r.isRtl ? (null !== (d = null === (u = v.rect) || void 0 === u ? void 0 : u[r.axis[r.draggedAxis].sizeAttr]) && void 0 !== d ? d : 0) - m.size - x : x) / (f - m.size) * (b - g); "x" === r.draggedAxis && r.isRtl && (y = (null === (p = t.getRtlHelpers()) || void 0 === p ? void 0 : p.isScrollingToNegative) ? -y : y), r.contentWrapperEl[r.axis[r.draggedAxis].scrollOffsetAttr] = y } }, this.onEndDrag = function (t) { r.isDragging = !1; var e = j(r.el), i = H(r.el); t.preventDefault(), t.stopPropagation(), q(r.el, r.classNames.dragging), r.onStopScrolling(), e.removeEventListener("mousemove", r.drag, !0), e.removeEventListener("mouseup", r.onEndDrag, !0), r.removePreventClickId = i.setTimeout((function () { e.removeEventListener("click", r.preventClick, !0), e.removeEventListener("dblclick", r.preventClick, !0), r.removePreventClickId = null })) }, this.preventClick = function (t) { t.preventDefault(), t.stopPropagation() }, this.el = i, this.options = A(A({}, t.defaultOptions), s), this.classNames = A(A({}, t.defaultOptions.classNames), s.classNames), this.axis = { x: { scrollOffsetAttr: "scrollLeft", sizeAttr: "width", scrollSizeAttr: "scrollWidth", offsetSizeAttr: "offsetWidth", offsetAttr: "left", overflowAttr: "overflowX", dragOffset: 0, isOverflowing: !0, forceVisible: !1, track: { size: null, el: null, rect: null, isVisible: !1 }, scrollbar: { size: null, el: null, rect: null, isVisible: !1 } }, y: { scrollOffsetAttr: "scrollTop", sizeAttr: "height", scrollSizeAttr: "scrollHeight", offsetSizeAttr: "offsetHeight", offsetAttr: "top", overflowAttr: "overflowY", dragOffset: 0, isOverflowing: !0, forceVisible: !1, track: { size: null, el: null, rect: null, isVisible: !1 }, scrollbar: { size: null, el: null, rect: null, isVisible: !1 } } }, "object" != typeof this.el || !this.el.nodeName) throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el)); this.onMouseMove = function (t, i, s) { var r = !0, l = !0; if ("function" != typeof t) throw new TypeError("Expected a function"); return e(s) && (r = "leading" in s ? !!s.leading : r, l = "trailing" in s ? !!s.trailing : l), S(t, i, { leading: r, maxWait: i, trailing: l }) }(this._onMouseMove, 64), this.onWindowResize = S(this._onWindowResize, 64, { leading: !0 }), this.onStopScrolling = S(this._onStopScrolling, this.stopScrollDelay), this.onMouseEntered = S(this._onMouseEntered, this.stopScrollDelay), this.init() } return t.getRtlHelpers = function () { if (t.rtlHelpers) return t.rtlHelpers; var e = document.createElement("div"); e.innerHTML = '<div class="simplebar-dummy-scrollbar-size"><div></div></div>'; var i = e.firstElementChild, s = null == i ? void 0 : i.firstElementChild; if (!s) return null; document.body.appendChild(i), i.scrollLeft = 0; var r = t.getOffset(i), l = t.getOffset(s); i.scrollLeft = -999; var o = t.getOffset(s); return document.body.removeChild(i), t.rtlHelpers = { isScrollOriginAtZero: r.left !== l.left, isScrollingToNegative: l.left !== o.left }, t.rtlHelpers }, t.prototype.getScrollbarWidth = function () { try { return this.contentWrapperEl && "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : V() } catch (t) { return V() } }, t.getOffset = function (t) { var e = t.getBoundingClientRect(), i = j(t), s = H(t); return { top: e.top + (s.pageYOffset || i.documentElement.scrollTop), left: e.left + (s.pageXOffset || i.documentElement.scrollLeft) } }, t.prototype.init = function () { C && (this.initDOM(), this.rtlHelpers = t.getRtlHelpers(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners()) }, t.prototype.initDOM = function () { var t, e; this.wrapperEl = this.el.querySelector(P(this.classNames.wrapper)), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector(P(this.classNames.contentWrapper)), this.contentEl = this.options.contentNode || this.el.querySelector(P(this.classNames.contentEl)), this.offsetEl = this.el.querySelector(P(this.classNames.offset)), this.maskEl = this.el.querySelector(P(this.classNames.mask)), this.placeholderEl = this.findChild(this.wrapperEl, P(this.classNames.placeholder)), this.heightAutoObserverWrapperEl = this.el.querySelector(P(this.classNames.heightAutoObserverWrapperEl)), this.heightAutoObserverEl = this.el.querySelector(P(this.classNames.heightAutoObserverEl)), this.axis.x.track.el = this.findChild(this.el, "".concat(P(this.classNames.track)).concat(P(this.classNames.horizontal))), this.axis.y.track.el = this.findChild(this.el, "".concat(P(this.classNames.track)).concat(P(this.classNames.vertical))), this.axis.x.scrollbar.el = (null === (t = this.axis.x.track.el) || void 0 === t ? void 0 : t.querySelector(P(this.classNames.scrollbar))) || null, this.axis.y.scrollbar.el = (null === (e = this.axis.y.track.el) || void 0 === e ? void 0 : e.querySelector(P(this.classNames.scrollbar))) || null, this.options.autoHide || (_(this.axis.x.scrollbar.el, this.classNames.visible), _(this.axis.y.scrollbar.el, this.classNames.visible)) }, t.prototype.initListeners = function () { var t, e = this, i = H(this.el); if (this.el.addEventListener("mouseenter", this.onMouseEnter), this.el.addEventListener("pointerdown", this.onPointerEvent, !0), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), null === (t = this.contentWrapperEl) || void 0 === t || t.addEventListener("scroll", this.onScroll), i.addEventListener("resize", this.onWindowResize), this.contentEl) { if (window.ResizeObserver) { var s = !1, r = i.ResizeObserver || ResizeObserver; this.resizeObserver = new r((function () { s && i.requestAnimationFrame((function () { e.recalculate() })) })), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), i.requestAnimationFrame((function () { s = !0 })) } this.mutationObserver = new i.MutationObserver((function () { i.requestAnimationFrame((function () { e.recalculate() })) })), this.mutationObserver.observe(this.contentEl, { childList: !0, subtree: !0, characterData: !0 }) } }, t.prototype.recalculate = function () { if (this.heightAutoObserverEl && this.contentEl && this.contentWrapperEl && this.wrapperEl && this.placeholderEl) { var t = H(this.el); this.elStyles = t.getComputedStyle(this.el), this.isRtl = "rtl" === this.elStyles.direction; var e = this.contentEl.offsetWidth, i = this.heightAutoObserverEl.offsetHeight <= 1, s = this.heightAutoObserverEl.offsetWidth <= 1 || e > 0, r = this.contentWrapperEl.offsetWidth, l = this.elStyles.overflowX, o = this.elStyles.overflowY; this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft), this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft); var n = this.contentEl.scrollHeight, a = this.contentEl.scrollWidth; this.contentWrapperEl.style.height = i ? "auto" : "100%", this.placeholderEl.style.width = s ? "".concat(e || a, "px") : "auto", this.placeholderEl.style.height = "".concat(n, "px"); var c = this.contentWrapperEl.offsetHeight; this.axis.x.isOverflowing = 0 !== e && a > e, this.axis.y.isOverflowing = n > c, this.axis.x.isOverflowing = "hidden" !== l && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden" !== o && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible, this.hideNativeScrollbar(); var h = this.axis.x.isOverflowing ? this.scrollbarWidth : 0, u = this.axis.y.isOverflowing ? this.scrollbarWidth : 0; this.axis.x.isOverflowing = this.axis.x.isOverflowing && a > r - u, this.axis.y.isOverflowing = this.axis.y.isOverflowing && n > c - h, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el && (this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px")), this.axis.y.scrollbar.el && (this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px")), this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y") } }, t.prototype.getScrollbarSize = function (t) { var e, i; if (void 0 === t && (t = "y"), !this.axis[t].isOverflowing || !this.contentEl) return 0; var s, r = this.contentEl[this.axis[t].scrollSizeAttr], l = null !== (i = null === (e = this.axis[t].track.el) || void 0 === e ? void 0 : e[this.axis[t].offsetSizeAttr]) && void 0 !== i ? i : 0, o = l / r; return s = Math.max(~~(o * l), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (s = Math.min(s, this.options.scrollbarMaxSize)), s }, t.prototype.positionScrollbar = function (e) { var i, s, r; void 0 === e && (e = "y"); var l = this.axis[e].scrollbar; if (this.axis[e].isOverflowing && this.contentWrapperEl && l.el && this.elStyles) { var o = this.contentWrapperEl[this.axis[e].scrollSizeAttr], n = (null === (i = this.axis[e].track.el) || void 0 === i ? void 0 : i[this.axis[e].offsetSizeAttr]) || 0, a = parseInt(this.elStyles[this.axis[e].sizeAttr], 10), c = this.contentWrapperEl[this.axis[e].scrollOffsetAttr]; c = "x" === e && this.isRtl && (null === (s = t.getRtlHelpers()) || void 0 === s ? void 0 : s.isScrollOriginAtZero) ? -c : c, "x" === e && this.isRtl && (c = (null === (r = t.getRtlHelpers()) || void 0 === r ? void 0 : r.isScrollingToNegative) ? c : -c); var h = c / (o - a), u = ~~((n - l.size) * h); u = "x" === e && this.isRtl ? -u + (n - l.size) : u, l.el.style.transform = "x" === e ? "translate3d(".concat(u, "px, 0, 0)") : "translate3d(0, ".concat(u, "px, 0)") } }, t.prototype.toggleTrackVisibility = function (t) { void 0 === t && (t = "y"); var e = this.axis[t].track.el, i = this.axis[t].scrollbar.el; e && i && this.contentWrapperEl && (this.axis[t].isOverflowing || this.axis[t].forceVisible ? (e.style.visibility = "visible", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll", this.el.classList.add("".concat(this.classNames.scrollable, "-").concat(t))) : (e.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "hidden", this.el.classList.remove("".concat(this.classNames.scrollable, "-").concat(t))), this.axis[t].isOverflowing ? i.style.display = "block" : i.style.display = "none") }, t.prototype.showScrollbar = function (t) { void 0 === t && (t = "y"), this.axis[t].isOverflowing && !this.axis[t].scrollbar.isVisible && (_(this.axis[t].scrollbar.el, this.classNames.visible), this.axis[t].scrollbar.isVisible = !0) }, t.prototype.hideScrollbar = function (t) { void 0 === t && (t = "y"), this.isDragging || this.axis[t].isOverflowing && this.axis[t].scrollbar.isVisible && (q(this.axis[t].scrollbar.el, this.classNames.visible), this.axis[t].scrollbar.isVisible = !1) }, t.prototype.hideNativeScrollbar = function () { this.offsetEl && (this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px", this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px") }, t.prototype.onMouseMoveForAxis = function (t) { void 0 === t && (t = "y"); var e = this.axis[t]; e.track.el && e.scrollbar.el && (e.track.rect = e.track.el.getBoundingClientRect(), e.scrollbar.rect = e.scrollbar.el.getBoundingClientRect(), this.isWithinBounds(e.track.rect) ? (this.showScrollbar(t), _(e.track.el, this.classNames.hover), this.isWithinBounds(e.scrollbar.rect) ? _(e.scrollbar.el, this.classNames.hover) : q(e.scrollbar.el, this.classNames.hover)) : (q(e.track.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(t))) }, t.prototype.onMouseLeaveForAxis = function (t) { void 0 === t && (t = "y"), q(this.axis[t].track.el, this.classNames.hover), q(this.axis[t].scrollbar.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(t) }, t.prototype.onDragStart = function (t, e) { var i; void 0 === e && (e = "y"), this.isDragging = !0; var s = j(this.el), r = H(this.el), l = this.axis[e].scrollbar, o = "y" === e ? t.pageY : t.pageX; this.axis[e].dragOffset = o - ((null === (i = l.rect) || void 0 === i ? void 0 : i[this.axis[e].offsetAttr]) || 0), this.draggedAxis = e, _(this.el, this.classNames.dragging), s.addEventListener("mousemove", this.drag, !0), s.addEventListener("mouseup", this.onEndDrag, !0), null === this.removePreventClickId ? (s.addEventListener("click", this.preventClick, !0), s.addEventListener("dblclick", this.preventClick, !0)) : (r.clearTimeout(this.removePreventClickId), this.removePreventClickId = null) }, t.prototype.onTrackClick = function (t, e) { var i, s, r, l, o = this; void 0 === e && (e = "y"); var n = this.axis[e]; if (this.options.clickOnTrack && n.scrollbar.el && this.contentWrapperEl) { t.preventDefault(); var a = H(this.el); this.axis[e].scrollbar.rect = n.scrollbar.el.getBoundingClientRect(); var c = null !== (s = null === (i = this.axis[e].scrollbar.rect) || void 0 === i ? void 0 : i[this.axis[e].offsetAttr]) && void 0 !== s ? s : 0, h = parseInt(null !== (l = null === (r = this.elStyles) || void 0 === r ? void 0 : r[this.axis[e].sizeAttr]) && void 0 !== l ? l : "0px", 10), u = this.contentWrapperEl[this.axis[e].scrollOffsetAttr], d = ("y" === e ? this.mouseY - c : this.mouseX - c) < 0 ? -1 : 1, p = -1 === d ? u - h : u + h, v = function () { o.contentWrapperEl && (-1 === d ? u > p && (u -= 40, o.contentWrapperEl[o.axis[e].scrollOffsetAttr] = u, a.requestAnimationFrame(v)) : u < p && (u += 40, o.contentWrapperEl[o.axis[e].scrollOffsetAttr] = u, a.requestAnimationFrame(v))) }; v() } }, t.prototype.getContentElement = function () { return this.contentEl }, t.prototype.getScrollElement = function () { return this.contentWrapperEl }, t.prototype.removeListeners = function () { var t = H(this.el); this.el.removeEventListener("mouseenter", this.onMouseEnter), this.el.removeEventListener("pointerdown", this.onPointerEvent, !0), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll), t.removeEventListener("resize", this.onWindowResize), this.mutationObserver && this.mutationObserver.disconnect(), this.resizeObserver && this.resizeObserver.disconnect(), this.onMouseMove.cancel(), this.onWindowResize.cancel(), this.onStopScrolling.cancel(), this.onMouseEntered.cancel() }, t.prototype.unMount = function () { this.removeListeners() }, t.prototype.isWithinBounds = function (t) { return this.mouseX >= t.left && this.mouseX <= t.left + t.width && this.mouseY >= t.top && this.mouseY <= t.top + t.height }, t.prototype.findChild = function (t, e) { var i = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector; return Array.prototype.filter.call(t.children, (function (t) { return i.call(t, e) }))[0] }, t.rtlHelpers = null, t.defaultOptions = { forceVisible: !1, clickOnTrack: !0, scrollbarMinSize: 25, scrollbarMaxSize: 0, ariaLabel: "scrollable content", tabIndex: 0, classNames: { contentEl: "simplebar-content", contentWrapper: "simplebar-content-wrapper", offset: "simplebar-offset", mask: "simplebar-mask", wrapper: "simplebar-wrapper", placeholder: "simplebar-placeholder", scrollbar: "simplebar-scrollbar", track: "simplebar-track", heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper", heightAutoObserverEl: "simplebar-height-auto-observer", visible: "simplebar-visible", horizontal: "simplebar-horizontal", vertical: "simplebar-vertical", hover: "simplebar-hover", dragging: "simplebar-dragging", scrolling: "simplebar-scrolling", scrollable: "simplebar-scrollable", mouseEntered: "simplebar-mouse-entered" }, scrollableNode: null, contentNode: null, autoHide: !0 }, t.getOptions = B, t.helpers = T, t }(), Y = X.helpers, F = Y.getOptions, I = Y.addClasses, U = Y.canUseDOM, $ = function (e) { function i() { for (var t = [], s = 0; s < arguments.length; s++)t[s] = arguments[s]; var r = e.apply(this, t) || this; return i.instances.set(t[0], r), r } return function (e, i) { if ("function" != typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null"); function s() { this.constructor = e } t(e, i), e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype, new s) }(i, e), i.initDOMLoadedElements = function () { document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), (function (t) { "init" === t.getAttribute("data-simplebar") || i.instances.has(t) || new i(t, F(t.attributes)) })) }, i.removeObserver = function () { var t; null === (t = i.globalObserver) || void 0 === t || t.disconnect() }, i.prototype.initDOM = function () { var t, e, i, s = this; if (!Array.prototype.filter.call(this.el.children, (function (t) { return t.classList.contains(s.classNames.wrapper) })).length) { for (this.wrapperEl = document.createElement("div"), this.contentWrapperEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), I(this.wrapperEl, this.classNames.wrapper), I(this.contentWrapperEl, this.classNames.contentWrapper), I(this.offsetEl, this.classNames.offset), I(this.maskEl, this.classNames.mask), I(this.contentEl, this.classNames.contentEl), I(this.placeholderEl, this.classNames.placeholder), I(this.heightAutoObserverWrapperEl, this.classNames.heightAutoObserverWrapperEl), I(this.heightAutoObserverEl, this.classNames.heightAutoObserverEl); this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild); this.contentWrapperEl.appendChild(this.contentEl), this.offsetEl.appendChild(this.contentWrapperEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl), null === (t = this.contentWrapperEl) || void 0 === t || t.setAttribute("tabindex", this.options.tabIndex.toString()), null === (e = this.contentWrapperEl) || void 0 === e || e.setAttribute("role", "region"), null === (i = this.contentWrapperEl) || void 0 === i || i.setAttribute("aria-label", this.options.ariaLabel) } if (!this.axis.x.track.el || !this.axis.y.track.el) { var r = document.createElement("div"), l = document.createElement("div"); I(r, this.classNames.track), I(l, this.classNames.scrollbar), r.appendChild(l), this.axis.x.track.el = r.cloneNode(!0), I(this.axis.x.track.el, this.classNames.horizontal), this.axis.y.track.el = r.cloneNode(!0), I(this.axis.y.track.el, this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el) } X.prototype.initDOM.call(this), this.el.setAttribute("data-simplebar", "init") }, i.prototype.unMount = function () { X.prototype.unMount.call(this), i.instances.delete(this.el) }, i.initHtmlApi = function () { this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(i.handleMutations), this.globalObserver.observe(document, { childList: !0, subtree: !0 })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements)) }, i.handleMutations = function (t) { t.forEach((function (t) { t.addedNodes.forEach((function (t) { 1 === t.nodeType && (t.hasAttribute("data-simplebar") ? !i.instances.has(t) && document.documentElement.contains(t) && new i(t, F(t.attributes)) : t.querySelectorAll("[data-simplebar]").forEach((function (t) { "init" !== t.getAttribute("data-simplebar") && !i.instances.has(t) && document.documentElement.contains(t) && new i(t, F(t.attributes)) }))) })), t.removedNodes.forEach((function (t) { var e; 1 === t.nodeType && ("init" === t.getAttribute("data-simplebar") ? !document.documentElement.contains(t) && (null === (e = i.instances.get(t)) || void 0 === e || e.unMount()) : Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar="init"]'), (function (t) { var e; !document.documentElement.contains(t) && (null === (e = i.instances.get(t)) || void 0 === e || e.unMount()) }))) })) })) }, i.instances = new WeakMap, i }(X); return U && $.initHtmlApi(), $ }();



window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Portfolio modal logic
    const portfolioModalEl = document.getElementById('portfolioModal');
    let setupPortfolioModal;

    if (portfolioModalEl) {
        const portfolioModal = new bootstrap.Modal(portfolioModalEl);
        const modalTitle = portfolioModalEl.querySelector('.modal-title');
        const modalImage = portfolioModalEl.querySelector('.modal-img');
        const modalCategory = portfolioModalEl.querySelector('.modal-category');
        const modalDescription = portfolioModalEl.querySelector('.modal-description');

        setupPortfolioModal = () => {
            document.querySelectorAll('#gallery .portfolio-box').forEach((box) => {
                box.addEventListener('click', (event) => {
                    event.preventDefault();
                    const title = box.dataset.title || box.title || 'Project';
                    const category = box.dataset.category || 'Category';
                    const description = box.dataset.description || 'More details coming soon.';
                    const imageSrc = box.dataset.image || box.href || box.querySelector('img')?.src;

                    if (modalTitle) modalTitle.textContent = title;
                    if (modalCategory) modalCategory.textContent = category;
                    if (modalDescription) modalDescription.textContent = description;
                    if (modalImage && imageSrc) {
                        modalImage.src = imageSrc;
                        modalImage.alt = title;
                    }

                    portfolioModal.show();
                });
            });
        };
    }

    // Auto-scrolling track (left-to-right) + seamless loop
    const portfolioTrack = document.querySelector('#gallery .portfolio-track');
    const portfolioRow = document.querySelector('#gallery .row');

    if (portfolioTrack && portfolioRow) {
        // Duplicate items so we can loop seamlessly.
        portfolioTrack.innerHTML += portfolioTrack.innerHTML;

        // After duplication, re-bind click handlers (so duplicates also open the modal).
        if (typeof setupPortfolioModal === 'function') {
            setupPortfolioModal();
        }

        let trackHalfWidth = portfolioTrack.scrollWidth / 2;
        let scrollLeft = trackHalfWidth;
        const speed = 40; // pixels per second (adjust as needed)
        let lastTimestamp = null;
        let paused = false;

        // Start in the middle so we can scroll right-to-left visually (left-to-right movement)
        portfolioRow.scrollLeft = scrollLeft;

        const step = (timestamp) => {
            if (paused) {
                lastTimestamp = timestamp;
                window.requestAnimationFrame(step);
                return;
            }

            if (lastTimestamp !== null) {
                const delta = (timestamp - lastTimestamp) / 1000;
                scrollLeft -= speed * delta;

                if (scrollLeft <= 0) {
                    scrollLeft += trackHalfWidth;
                }

                portfolioRow.scrollLeft = scrollLeft;
            }

            lastTimestamp = timestamp;
            window.requestAnimationFrame(step);
        };

        //Pause when hovering over the track (so users can click links without it moving away). Optional.
       /* portfolioRow.addEventListener('mouseenter', () => (paused = true));
        portfolioRow.addEventListener('mouseleave', () => (paused = false)); */ 

        portfolioRow.addEventListener('wheel', (e) => {
            e.preventDefault();
        }, { passive: false });

        window.addEventListener('resize', () => {
            trackHalfWidth = portfolioTrack.scrollWidth / 2;
            scrollLeft = Math.min(scrollLeft, trackHalfWidth);
        });

        window.requestAnimationFrame(step);
    }

    //Sparks

    const rng = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const rcg = colors => {
        return colors[Math.floor(Math.random() * colors.length)]
    }

    const distance = (x1, y1, x2, y2) => {
        const xDist = x2 - x1
        const yDist = y2 - y1
        return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
    }

    let canvas, c, animationID

    const mouse = {
        x: undefined,
        y: undefined,
        prevX: undefined,
        prevY: undefined,
        counter: 0,
        isMoving: () => {
            if (mouse.counter > 50) return false
            return true
        }
    }

    let maxRadius
    const fireflies = []
    const animationLoop = _ => {
        animationID = requestAnimationFrame(animationLoop) // Create an animation loop
        c.clearRect(0, 0, canvas.width, canvas.height) // Clear the canvas

        if (mouse.prevX == mouse.x && mouse.prevY == mouse.y) mouse.counter++

        for (let i = 0; i < fireflies.length; i++) {
            fireflies[i].fly()

            if (fireflies[i].x < 0 - fireflies[i].radius || fireflies[i].x > canvas.width + fireflies[i].radius || fireflies[i].y < 0 - fireflies[i].radius || fireflies[i].y > canvas.height + fireflies[i].radius) {
                fireflies[i].x = rng(fireflies[i].radius, canvas.width - fireflies[i].radius)
                fireflies[i].y = rng(fireflies[i].radius, canvas.height - fireflies[i].radius)
            }
        }

        mouse.prevX = mouse.x
        mouse.prevY = mouse.y
    }

    const resizeEH = _ => {
        const rect = canvas.getBoundingClientRect()
        const dpr = window.devicePixelRatio || 1

        canvas.width = rect.width * dpr
        canvas.height = rect.height * dpr

        c.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const mouseEH = _ => {
        mouse.x = event.clientX
        mouse.y = event.clientY
        mouse.counter = 0
    }

    class Fireflies {
        static initialize(quantity = Math.floor((window.innerHeight + window.innerWidth) / 150), radius = [5, 25 + Math.floor((window.innerHeight + window.innerWidth) / 100)], color = [{
            fill: '#ffffea',
            glow: '#ff881b'
        }], collision = true, pulse = true, flicker = true, connect = false) {
            this.terminate() // Terminates all previously initialized instances
            canvas = document.getElementById('sparks') // Get canvas element from document
            c = canvas.getContext('2d') // Get context to access 2D canvas functions
            const rect = canvas.getBoundingClientRect()

            canvas.width = rect.width
            canvas.height = rect.height
            /*
            canvas.width = window.innerWidth // Set canvas' width to full width of the window
            canvas.height = window.innerHeight // Set canvas' height to full height of the window
            */
            c.globalCompositeOperation = 'screen'
            for (let i = 0; i < quantity; i++) {
                let r
                if (Object.prototype.toString.call(radius) === '[object Array]') {
                    r = rng(radius[0], radius[1])
                    maxRadius = 1.5 * radius[1]
                } else {
                    r = radius
                    maxRadius = 1.5 * radius
                }
                const x = rng(r, canvas.width - r)
                const y = rng(r, canvas.height - r)
                const randomColor = rcg(color)
                fireflies[i] = new Firefly(x, y, r, randomColor, collision, pulse, flicker, connect)
            }
            addEventListener('resize', resizeEH)
            addEventListener('mousemove', mouseEH)
            animationLoop()
        }
        static terminate() {
            cancelAnimationFrame(animationID)
            removeEventListener('resize', resizeEH)
            removeEventListener('mousemove', mouseEH)
            for (let i = 0; i < fireflies.length; i++) {
                fireflies.splice(0, fireflies.length)
            }
            if (canvas) {
                canvas.remove()
            }
        }
    }
    class Firefly {
        constructor(x, y, radius, color, collision, pulse, flicker, connect) {
            this.x = x
            this.y = y
            this.radius = radius
            this.color = {
                fill: color.fill,
                glow: color.glow
            }
            this.velocity = {
                x: Math.random() * Math.PI,
                y: Math.random() * Math.PI
            }
            this.glow = {
                pulse: pulse,
                flicker: flicker,
                default: undefined,
                strength: pulse ? rng(16, 255) : 191,
                growing: true
            }
            this.collision = collision
            this.connect = connect
        }
        draw() {
            c.beginPath()
            c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
            const gradient = c.createRadialGradient(this.x, this.y, this.radius / 10, this.x, this.y, this.radius)
            gradient.addColorStop(1, this.color.glow + '00')
            gradient.addColorStop(0.1, this.color.glow + this.glow.strength.toString(16))
            gradient.addColorStop(0, this.color.fill)
            c.fillStyle = gradient
            c.fill()
            c.closePath()
        }
        fly() {
            this.collide()
            this.stayWithinView() // Screenbound
            this.x += 0.75 * Math.cos(this.velocity.x) // The number is the speed modifier
            this.y += 0.75 * Math.sin(this.velocity.y) // The number is the speed modifier
            this.calcGlow()
            // this.leaveTrail()
            this.draw()
        }
        stayWithinView() {
            // particle.position.x = Math.max( Math.min( particle.position.x, SCREEN_WIDTH ), 0 )
            // particle.position.y = Math.max( Math.min( particle.position.y, SCREEN_HEIGHT ), 0 )

            if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
                this.velocity.x -= 0.07
            } else {
                this.velocity.x += Math.random() * 20 * Math.PI / 180 - 10 * Math.PI / 180 // Math.random() * 0.34 - 0.17 for short
            }
            if (this.y + this.radius + 100 >= canvas.height || this.y - this.radius <= 0) {
                this.velocity.y -= 0.07
            } else {
                this.velocity.y += Math.random() * 20 * Math.PI / 180 - 10 * Math.PI / 180 // Math.random() * 0.34 - 0.17 for short
            }

        }
        collide() {
            if (this.collision) {
                this.calcField()
                const thisIndex = fireflies.indexOf(this)
                for (let i = 0; i < fireflies.length; i++) {
                    if (fireflies[i] != fireflies[thisIndex]) {
                        const dist = distance(this.x, this.y, fireflies[i].x, fireflies[i].y)
                        const radii = this.radius + fireflies[i].radius
                        if (dist <= radii) {
                            this.velocity.x -= 0.035
                            this.velocity.y -= 0.035
                            if (this.connect) {
                                c.save()
                                c.beginPath()
                                c.moveTo(this.x, this.y)
                                c.lineTo(fireflies[i].x, fireflies[i].y)
                                c.strokeStyle = `#ffffff${(Math.floor(255 - (238 * dist / radii))).toString(16)}`
                                c.stroke()
                                c.closePath()
                                c.restore()
                            }
                        }
                    }
                }
            }
        }
        calcField() {
            if (!mouse.isMoving()) return

            const k = 8 // Max velocity constant

            let deltaX = this.x - mouse.x // Horizontal distance between firefly and mouse
            let deltaY = this.y - mouse.y // Vertical distance between firefly and mouse

            let distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2)) // Distance between firefly and mouse
            let angle = Math.atan(Math.abs(deltaY) / Math.abs(deltaX)) // Angle of firefly with respect to mouse

            if (distance > 7 * maxRadius) return

            let velocity = k / Math.pow(distance / (maxRadius), 1.5) // Velocity is modelled after electric field (inaccurate more conversions needed for true velocity)
            if (distance < this.radius) velocity = k // Sets limit on field strength, this is in case mouse is within the radius

            let vx = velocity * Math.cos(angle) * (deltaX / Math.abs(deltaX)) // Horizontal component of v is cos of angle times net velocity as well as the direction
            let vy = velocity * Math.sin(angle) * (deltaY / Math.abs(deltaY)) // Vertical component of v is sin of angle times net velocity as well as the direction

            if (Number.isFinite(vx)) this.x += vx //Arctan function causes some NaN numbers for fireflies, ignore these
            if (Number.isFinite(vy)) this.y += vy
        }
        calcGlow() {
            if (this.glow.default === undefined) {
                this.glow.default = this.glow.strength
            }
            if (this.glow.pulse) {
                if (this.glow.default >= 255) {
                    this.glow.growing = false
                } else if (this.glow.default <= 48) {
                    this.glow.growing = true
                }
                if (this.glow.growing) {
                    this.glow.default++
                    this.glow.strength = this.glow.default
                } else {
                    this.glow.default--
                    this.glow.strength = this.glow.default
                }
            }
            if (this.glow.flicker) {
                if (Math.random() > 0.99) {
                    this.glow.strength = rng(16, 255)
                } else {
                    this.glow.strength = this.glow.default
                }
            }
        }
    }
    Fireflies.initialize()


});

