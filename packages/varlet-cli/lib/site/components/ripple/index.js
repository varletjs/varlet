"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._RippleComponent = void 0;
var context_1 = __importDefault(require("../context"));
require("./ripple.less");
require("../styles/common.less");
var ANIMATION_DURATION = 250;
function setStyles(element) {
    var _a = window.getComputedStyle(element), zIndex = _a.zIndex, position = _a.position;
    element.style.overflow = 'hidden';
    element.style.overflowX = 'hidden';
    element.style.overflowY = 'hidden';
    position === 'static' && (element.style.position = 'relative');
    zIndex === 'auto' && (element.style.zIndex = '1');
}
function computeRippleStyles(element, event) {
    var _a = element.getBoundingClientRect(), top = _a.top, left = _a.left;
    var clientWidth = element.clientWidth, clientHeight = element.clientHeight;
    var radius = Math.sqrt(Math.pow(clientWidth, 2) + Math.pow(clientHeight, 2)) / 2;
    var size = radius * 2;
    var localX = event.touches[0].clientX - left;
    var localY = event.touches[0].clientY - top;
    var centerX = (clientWidth - radius * 2) / 2;
    var centerY = (clientHeight - radius * 2) / 2;
    var x = localX - radius;
    var y = localY - radius;
    return { x: x, y: y, centerX: centerX, centerY: centerY, size: size };
}
function createRipple(event) {
    var _this = this;
    var _ripple = this._ripple;
    _ripple.removeRipple();
    if (_ripple.disabled || _ripple.tasker) {
        return;
    }
    var task = function () {
        var _a;
        _ripple.tasker = null;
        var _b = computeRippleStyles(_this, event), x = _b.x, y = _b.y, centerX = _b.centerX, centerY = _b.centerY, size = _b.size;
        var ripple = document.createElement('div');
        ripple.classList.add('var-site-ripple');
        ripple.style.opacity = "0";
        ripple.style.transform = "translate(" + x + "px, " + y + "px) scale3d(.3, .3, .3)";
        ripple.style.width = size + "px";
        ripple.style.height = size + "px";
        ripple.style.backgroundColor = (_a = _ripple.color) !== null && _a !== void 0 ? _a : 'currentColor';
        ripple.dataset.createdAt = String(performance.now());
        setStyles(_this);
        _this.appendChild(ripple);
        window.setTimeout(function () {
            ripple.style.transform = "translate(" + centerX + "px, " + centerY + "px) scale3d(1, 1, 1)";
            ripple.style.opacity = ".25";
        }, 20);
    };
    _ripple.tasker = window.setTimeout(task, 60);
}
function removeRipple() {
    var _this = this;
    var _ripple = this._ripple;
    var task = function () {
        var ripples = _this.querySelectorAll('.var-site-ripple');
        if (!ripples.length) {
            return;
        }
        var lastRipple = ripples[ripples.length - 1];
        var delay = ANIMATION_DURATION - performance.now() + Number(lastRipple.dataset.createdAt);
        setTimeout(function () {
            lastRipple.style.opacity = "0";
            setTimeout(function () { var _a; return (_a = lastRipple.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(lastRipple); }, ANIMATION_DURATION);
        }, delay);
    };
    _ripple.tasker ? setTimeout(task, 60) : task();
}
function forbidRippleTask() {
    var _ripple = this._ripple;
    if (!_ripple.touchmoveForbid) {
        return;
    }
    _ripple.tasker && window.clearTimeout(_ripple.tasker);
    _ripple.tasker = null;
}
function mounted(el, binding) {
    var _a, _b, _c;
    el._ripple = __assign(__assign({ tasker: null }, ((_a = binding.value) !== null && _a !== void 0 ? _a : {})), { touchmoveForbid: (_c = (_b = binding.value) === null || _b === void 0 ? void 0 : _b.touchmoveForbid) !== null && _c !== void 0 ? _c : context_1.default.touchmoveForbid, removeRipple: removeRipple.bind(el) });
    el.addEventListener('touchstart', createRipple, { passive: true });
    el.addEventListener('touchmove', forbidRippleTask, { passive: true });
    el.addEventListener('dragstart', removeRipple, { passive: true });
    document.addEventListener('touchend', el._ripple.removeRipple, { passive: true });
    document.addEventListener('touchcancel', el._ripple.removeRipple, { passive: true });
}
function unmounted(el) {
    el.removeEventListener('touchstart', createRipple);
    el.removeEventListener('touchmove', forbidRippleTask);
    el.removeEventListener('dragstart', removeRipple);
    document.removeEventListener('touchend', el._ripple.removeRipple);
    document.removeEventListener('touchcancel', el._ripple.removeRipple);
}
function updated(el, binding) {
    var _a, _b, _c;
    el._ripple = __assign(__assign(__assign({}, el._ripple), ((_a = binding.value) !== null && _a !== void 0 ? _a : {})), { touchmoveForbid: (_c = (_b = binding.value) === null || _b === void 0 ? void 0 : _b.touchmoveForbid) !== null && _c !== void 0 ? _c : context_1.default.touchmoveForbid, tasker: null });
}
var Ripple = {
    mounted: mounted,
    unmounted: unmounted,
    updated: updated,
    install: function (app) {
        app.directive('ripple', this);
    },
};
exports._RippleComponent = Ripple;
exports.default = Ripple;
