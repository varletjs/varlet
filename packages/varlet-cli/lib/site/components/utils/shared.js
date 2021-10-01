"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.kebabCase = exports.uniq = exports.inBrowser = exports.dt = exports.parseFormat = exports.easeInOutCubic = exports.cubic = exports.linear = exports.createCache = exports.debounce = exports.throttle = exports.removeItem = exports.isEmpty = exports.isURL = exports.isArray = exports.isPlainObject = exports.isNumber = exports.isBool = exports.isString = exports.isHTMLSupportVideo = exports.isHTMLSupportImage = exports.toNumber = void 0;
var toNumber = function (val) {
    if (val == null)
        return 0;
    if (exports.isString(val)) {
        val = parseFloat(val);
        val = Number.isNaN(val) ? 0 : val;
        return val;
    }
    if (exports.isBool(val))
        return Number(val);
    return val;
};
exports.toNumber = toNumber;
var isHTMLSupportImage = function (val) { return val.startsWith('data:image') || /\.(png|jpg|gif|jpeg|svg)$/.test(val); };
exports.isHTMLSupportImage = isHTMLSupportImage;
var isHTMLSupportVideo = function (val) { return val.startsWith('data:video') || /\.(mp4|webm|ogg)$/.test(val); };
exports.isHTMLSupportVideo = isHTMLSupportVideo;
var isString = function (val) { return typeof val === 'string'; };
exports.isString = isString;
var isBool = function (val) { return typeof val === 'boolean'; };
exports.isBool = isBool;
var isNumber = function (val) { return typeof val === 'number'; };
exports.isNumber = isNumber;
var isPlainObject = function (val) {
    return Object.prototype.toString.call(val) === '[object Object]';
};
exports.isPlainObject = isPlainObject;
var isArray = function (val) { return Array.isArray(val); };
exports.isArray = isArray;
var isURL = function (val) { return /^(http)|(\.*\/)/.test(val); };
exports.isURL = isURL;
var isEmpty = function (val) {
    return val === undefined || val === null || val === '' || (Array.isArray(val) && !val.length);
};
exports.isEmpty = isEmpty;
var removeItem = function (arr, item) {
    if (arr.length) {
        var index = arr.indexOf(item);
        if (index > -1) {
            return arr.splice(index, 1);
        }
    }
};
exports.removeItem = removeItem;
var throttle = function (method, mustRunDelay) {
    if (mustRunDelay === void 0) { mustRunDelay = 200; }
    var timer;
    var start;
    return function loop() {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var now = Date.now();
        if (!start) {
            start = now;
        }
        if (timer) {
            window.clearTimeout(timer);
        }
        if (now - start >= mustRunDelay) {
            method.apply(this, args);
            start = now;
        }
        else {
            timer = window.setTimeout(function () {
                loop.apply(_this, args);
            }, 50);
        }
    };
};
exports.throttle = throttle;
var debounce = function (method, delay) {
    if (delay === void 0) { delay = 200; }
    var timer;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        timer && window.clearTimeout(timer);
        timer = window.setTimeout(function () {
            method.apply(_this, args);
        }, delay);
    };
};
exports.debounce = debounce;
var createCache = function (max) {
    var cache = [];
    return {
        cache: cache,
        has: function (key) {
            return this.cache.includes(key);
        },
        add: function (key) {
            if (this.has(key)) {
                return;
            }
            this.cache.length === max && cache.shift();
            this.cache.push(key);
        },
        remove: function (key) {
            this.has(key) && exports.removeItem(this.cache, key);
        },
        clear: function () {
            this.cache.length = 0;
        },
    };
};
exports.createCache = createCache;
var linear = function (value) { return value; };
exports.linear = linear;
var cubic = function (value) { return Math.pow(value, 3); };
exports.cubic = cubic;
var easeInOutCubic = function (value) {
    return value < 0.5 ? exports.cubic(value * 2) / 2 : 1 - exports.cubic((1 - value) * 2) / 2;
};
exports.easeInOutCubic = easeInOutCubic;
function parseFormat(format, time) {
    var scannedTimes = Object.values(time);
    var scannedFormats = ['DD', 'HH', 'mm', 'ss'];
    var padValues = [24, 60, 60, 1000];
    scannedFormats.forEach(function (scannedFormat, index) {
        if (!format.includes(scannedFormat)) {
            scannedTimes[index + 1] += scannedTimes[index] * padValues[index];
        }
        else {
            format = format.replace(scannedFormat, String(scannedTimes[index]).padStart(2, '0'));
        }
    });
    if (format.includes('S')) {
        var ms = String(scannedTimes[scannedTimes.length - 1]).padStart(3, '0');
        if (format.includes('SSS')) {
            format = format.replace('SSS', ms);
        }
        else if (format.includes('SS')) {
            format = format.replace('SS', ms.slice(0, 2));
        }
        else {
            format = format.replace('S', ms.slice(0, 1));
        }
    }
    return format;
}
exports.parseFormat = parseFormat;
var dt = function (value, defaultText) { return (value == null ? defaultText : value); };
exports.dt = dt;
exports.inBrowser = typeof window !== 'undefined';
var uniq = function (arr) { return __spreadArray([], __read(new Set(arr))); };
exports.uniq = uniq;
function kebabCase(str) {
    var reg = /([^-])([A-Z])/g;
    return str.replace(reg, '$1-$2').replace(reg, '$1-$2').toLowerCase();
}
exports.kebabCase = kebabCase;
