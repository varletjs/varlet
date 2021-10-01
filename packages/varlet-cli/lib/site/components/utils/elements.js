"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatStyleVars = exports.scrollTo = exports.doubleRaf = exports.nextTickFrame = exports.cancelAnimationFrame = exports.requestAnimationFrame = exports.toSizeUnit = exports.toPxNum = exports.isVh = exports.isVw = exports.isPercent = exports.isPx = exports.isRem = exports.getAllParentScroller = exports.getParentScroller = exports.isHidden = exports.getTranslate = exports.inViewport = exports.getScrollLeft = exports.getScrollTop = exports.getTop = exports.getLeft = void 0;
var shared_1 = require("./shared");
function getLeft(element) {
    var left = element.getBoundingClientRect().left;
    return left + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
exports.getLeft = getLeft;
function getTop(element) {
    var top = element.getBoundingClientRect().top;
    return top + (document.body.scrollTop || document.documentElement.scrollTop);
}
exports.getTop = getTop;
function getScrollTop(element) {
    var top = 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
    // iOS scroll bounce cause minus scrollTop
    return Math.max(top, 0);
}
exports.getScrollTop = getScrollTop;
function getScrollLeft(element) {
    var left = 'scrollLeft' in element ? element.scrollLeft : element.pageXOffset;
    return Math.max(left, 0);
}
exports.getScrollLeft = getScrollLeft;
function inViewport(element) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, top, bottom, left, right, innerWidth, innerHeight, xInViewport, yInViewport;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, doubleRaf()];
                case 1:
                    _b.sent();
                    _a = element.getBoundingClientRect(), top = _a.top, bottom = _a.bottom, left = _a.left, right = _a.right;
                    innerWidth = window.innerWidth, innerHeight = window.innerHeight;
                    xInViewport = left <= innerWidth && right >= 0;
                    yInViewport = top <= innerHeight && bottom >= 0;
                    return [2 /*return*/, xInViewport && yInViewport];
            }
        });
    });
}
exports.inViewport = inViewport;
function getTranslate(el) {
    var transform = window.getComputedStyle(el).transform;
    return +transform.slice(transform.lastIndexOf(',') + 2, transform.length - 1);
}
exports.getTranslate = getTranslate;
function isHidden(el) {
    var _a = el.getBoundingClientRect(), width = _a.width, height = _a.height;
    return width === 0 && height === 0;
}
exports.isHidden = isHidden;
function getParentScroller(el) {
    var element = el;
    while (element) {
        if (!element.parentNode) {
            break;
        }
        element = element.parentNode;
        if (element === document.body || element === document.documentElement) {
            break;
        }
        var scrollRE = /(scroll|auto)/;
        var _a = window.getComputedStyle(element), overflowY = _a.overflowY, overflow = _a.overflow;
        if (scrollRE.test(overflowY) || scrollRE.test(overflow)) {
            return element;
        }
    }
    return window;
}
exports.getParentScroller = getParentScroller;
function getAllParentScroller(el) {
    var allParentScroller = [];
    var element = el;
    while (element !== window) {
        element = getParentScroller(element);
        allParentScroller.push(element);
    }
    return allParentScroller;
}
exports.getAllParentScroller = getAllParentScroller;
// example 1rem
var isRem = function (value) { return shared_1.isString(value) && value.endsWith('rem'); };
exports.isRem = isRem;
// example 1 || 1px
var isPx = function (value) { return (shared_1.isString(value) && value.endsWith('px')) || shared_1.isNumber(value); };
exports.isPx = isPx;
// example 1%
var isPercent = function (value) { return shared_1.isString(value) && value.endsWith('%'); };
exports.isPercent = isPercent;
// example 1vw
var isVw = function (value) { return shared_1.isString(value) && value.endsWith('vw'); };
exports.isVw = isVw;
// example 1vh
var isVh = function (value) { return shared_1.isString(value) && value.endsWith('vh'); };
exports.isVh = isVh;
// example return 1
var toPxNum = function (value) {
    if (shared_1.isNumber(value)) {
        return value;
    }
    if (exports.isPx(value)) {
        return +value.replace('px', '');
    }
    if (exports.isVw(value)) {
        return (+value.replace('vw', '') * window.innerWidth) / 100;
    }
    if (exports.isVh(value)) {
        return (+value.replace('vh', '') * window.innerHeight) / 100;
    }
    if (exports.isRem(value)) {
        var num = +value.replace('rem', '');
        var rootFontSize = window.getComputedStyle(document.documentElement).fontSize;
        return num * parseFloat(rootFontSize);
    }
    if (shared_1.isString(value)) {
        return shared_1.toNumber(value);
    }
    // % and other
    return 0;
};
exports.toPxNum = toPxNum;
// example return 1px 1% 1vw 1vh 1rem null
var toSizeUnit = function (value) {
    if (value == null) {
        return null;
    }
    if (exports.isPercent(value) || exports.isVw(value) || exports.isVh(value) || exports.isRem(value)) {
        return value;
    }
    return exports.toPxNum(value) + "px";
};
exports.toSizeUnit = toSizeUnit;
function requestAnimationFrame(fn) {
    return window.requestAnimationFrame ? window.requestAnimationFrame(fn) : window.setTimeout(fn, 16);
}
exports.requestAnimationFrame = requestAnimationFrame;
function cancelAnimationFrame(handle) {
    window.cancelAnimationFrame ? window.cancelAnimationFrame(handle) : window.clearTimeout(handle);
}
exports.cancelAnimationFrame = cancelAnimationFrame;
function nextTickFrame(fn) {
    requestAnimationFrame(function () {
        requestAnimationFrame(fn);
    });
}
exports.nextTickFrame = nextTickFrame;
function doubleRaf() {
    return new Promise(function (resolve) {
        requestAnimationFrame(function () {
            requestAnimationFrame(resolve);
        });
    });
}
exports.doubleRaf = doubleRaf;
function scrollTo(element, _a) {
    var _b = _a.top, top = _b === void 0 ? 0 : _b, _c = _a.left, left = _c === void 0 ? 0 : _c, _d = _a.duration, duration = _d === void 0 ? 300 : _d, animation = _a.animation;
    var startTime = Date.now();
    var scrollTop = getScrollTop(element);
    var scrollLeft = getScrollLeft(element);
    return new Promise(function (resolve) {
        var frame = function () {
            var progress = (Date.now() - startTime) / duration;
            if (progress < 1) {
                var nextTop = scrollTop + (top - scrollTop) * animation(progress);
                var nextLeft = scrollLeft + (left - scrollLeft) * animation(progress);
                element.scrollTo(nextLeft, nextTop);
                requestAnimationFrame(frame);
            }
            else {
                element.scrollTo(left, top);
                resolve();
            }
        };
        requestAnimationFrame(frame);
    });
}
exports.scrollTo = scrollTo;
function formatStyleVars(styleVars) {
    return Object.entries(styleVars).reduce(function (styles, _a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        var cssVar = key.startsWith('--') ? key : "--" + shared_1.kebabCase(key);
        styles[cssVar] = value;
        return styles;
    }, {});
}
exports.formatStyleVars = formatStyleVars;
