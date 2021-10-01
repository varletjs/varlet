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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTeleport = exports.addRouteListener = exports.useValidation = exports.keyInProvides = exports.useParent = exports.useChildren = exports.useAtParentIndex = exports.useAtChildrenCounter = exports.flatVNodes = exports.mountInstance = exports.mount = exports.pickProps = void 0;
var vue_1 = require("vue");
var shared_1 = require("./shared");
function pickProps(props, propsKey) {
    return Array.isArray(propsKey)
        ? propsKey.reduce(function (pickedProps, key) {
            pickedProps[key] = props[key];
            return pickedProps;
        }, {})
        : props[propsKey];
}
exports.pickProps = pickProps;
function mount(component) {
    var app = vue_1.createApp(component);
    var host = document.createElement('div');
    document.body.appendChild(host);
    return {
        instance: app.mount(host),
        unmount: function () {
            app.unmount();
            document.body.removeChild(host);
        },
    };
}
exports.mount = mount;
function mountInstance(component, props, eventListener) {
    if (props === void 0) { props = {}; }
    if (eventListener === void 0) { eventListener = {}; }
    var Host = {
        setup: function () {
            return function () {
                return vue_1.h(component, __assign(__assign({}, props), eventListener));
            };
        },
    };
    var unmount = mount(Host).unmount;
    return { unmountInstance: unmount };
}
exports.mountInstance = mountInstance;
function flatVNodes(subTree) {
    var vNodes = [];
    var flat = function (subTree) {
        if (subTree === null || subTree === void 0 ? void 0 : subTree.component) {
            flat(subTree === null || subTree === void 0 ? void 0 : subTree.component.subTree);
            return;
        }
        if (Array.isArray(subTree === null || subTree === void 0 ? void 0 : subTree.children)) {
            subTree.children.forEach(function (child) {
                if (vue_1.isVNode(child)) {
                    vNodes.push(child);
                    flat(child);
                }
            });
        }
    };
    flat(subTree);
    return vNodes;
}
exports.flatVNodes = flatVNodes;
function useAtChildrenCounter(key) {
    var instances = vue_1.reactive([]);
    var parentInstance = vue_1.getCurrentInstance();
    var sortInstances = function () {
        var vNodes = flatVNodes(parentInstance.subTree);
        instances.sort(function (a, b) {
            return vNodes.indexOf(a.vnode) - vNodes.indexOf(b.vnode);
        });
    };
    var collect = function (instance) {
        instances.push(instance);
        sortInstances();
    };
    var clear = function (instance) {
        shared_1.removeItem(instances, instance);
    };
    vue_1.provide(key, {
        collect: collect,
        clear: clear,
        instances: instances,
    });
    var length = vue_1.computed(function () { return instances.length; });
    return {
        length: length,
    };
}
exports.useAtChildrenCounter = useAtChildrenCounter;
function useAtParentIndex(key) {
    if (!keyInProvides(key)) {
        return { index: null };
    }
    var childrenCounter = vue_1.inject(key);
    var collect = childrenCounter.collect, clear = childrenCounter.clear, instances = childrenCounter.instances;
    var instance = vue_1.getCurrentInstance();
    vue_1.onMounted(function () {
        vue_1.nextTick().then(function () { return collect(instance); });
    });
    vue_1.onUnmounted(function () {
        vue_1.nextTick().then(function () { return clear(instance); });
    });
    var index = vue_1.computed(function () { return instances.indexOf(instance); });
    return {
        index: index,
    };
}
exports.useAtParentIndex = useAtParentIndex;
function useChildren(key) {
    var childProviders = [];
    var collect = function (childProvider) {
        childProviders.push(childProvider);
    };
    var clear = function (childProvider) {
        shared_1.removeItem(childProviders, childProvider);
    };
    var bindChildren = function (parentProvider) {
        vue_1.provide(key, __assign({ collect: collect, clear: clear }, parentProvider));
    };
    return {
        childProviders: childProviders,
        bindChildren: bindChildren,
    };
}
exports.useChildren = useChildren;
function useParent(key) {
    if (!keyInProvides(key)) {
        return {
            parentProvider: null,
            bindParent: null,
        };
    }
    var rawParentProvider = vue_1.inject(key);
    var collect = rawParentProvider.collect, clear = rawParentProvider.clear, parentProvider = __rest(rawParentProvider, ["collect", "clear"]);
    var bindParent = function (childProvider) {
        vue_1.onMounted(function () { return collect(childProvider); });
        vue_1.onBeforeUnmount(function () { return clear(childProvider); });
    };
    return {
        parentProvider: parentProvider,
        bindParent: bindParent,
    };
}
exports.useParent = useParent;
function keyInProvides(key) {
    var instance = vue_1.getCurrentInstance();
    return key in instance.provides;
}
exports.keyInProvides = keyInProvides;
function useValidation() {
    var _this = this;
    var errorMessage = vue_1.ref('');
    var validate = function (rules, value, apis) { return __awaiter(_this, void 0, void 0, function () {
        var resArr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!shared_1.isArray(rules) || !rules.length) {
                        return [2 /*return*/, true];
                    }
                    return [4 /*yield*/, Promise.all(rules.map(function (rule) { return rule(value, apis); }))];
                case 1:
                    resArr = _a.sent();
                    return [2 /*return*/, !resArr.some(function (res) {
                            if (res !== true) {
                                errorMessage.value = String(res);
                                return true;
                            }
                            return false;
                        })];
            }
        });
    }); };
    var resetValidation = function () {
        errorMessage.value = '';
    };
    var validateWithTrigger = function (validateTrigger, trigger, rules, value, apis) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!validateTrigger.includes(trigger)) return [3 /*break*/, 2];
                    ;
                    return [4 /*yield*/, validate(rules, value, apis)];
                case 1:
                    (_a.sent()) && (errorMessage.value = '');
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return {
        errorMessage: errorMessage,
        validate: validate,
        resetValidation: resetValidation,
        validateWithTrigger: validateWithTrigger,
    };
}
exports.useValidation = useValidation;
function addRouteListener(cb) {
    vue_1.onMounted(function () {
        window.addEventListener('hashchange', cb);
        window.addEventListener('popstate', cb);
    });
    vue_1.onUnmounted(function () {
        window.removeEventListener('hashchange', cb);
        window.removeEventListener('popstate', cb);
    });
}
exports.addRouteListener = addRouteListener;
function useTeleport() {
    var disabled = vue_1.ref(false);
    vue_1.onActivated(function () {
        disabled.value = false;
    });
    vue_1.onDeactivated(function () {
        disabled.value = true;
    });
    return {
        disabled: disabled,
    };
}
exports.useTeleport = useTeleport;
