"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLock = exports.releaseLock = exports.addLock = exports.resolveLock = void 0;
var vue_1 = require("vue");
var _1 = __importDefault(require("."));
function resolveLock() {
    var lockCounts = Object.keys(_1.default.locks).length;
    lockCounts <= 0 ? document.body.classList.remove('var-site--lock') : document.body.classList.add('var-site--lock');
}
exports.resolveLock = resolveLock;
function addLock(uid) {
    _1.default.locks[uid] = 1;
    resolveLock();
}
exports.addLock = addLock;
function releaseLock(uid) {
    delete _1.default.locks[uid];
    resolveLock();
}
exports.releaseLock = releaseLock;
/**
 * 组件锁操作
 * @param props 组件props
 * @param state 组件props中控制组件加锁的开关对应的key值
 * @param use 组件props中控制组件加锁的开关是否可用对应的key值
 */
function useLock(props, state, use) {
    var uid = vue_1.getCurrentInstance().uid;
    if (use) {
        vue_1.watch(function () { return props[use]; }, function (newValue) {
            if (newValue === false) {
                // 改变为禁用状态 组件解锁
                releaseLock(uid);
            }
            else if (newValue === true && props[state] === true) {
                // 改变为启用状态 并且popup处于开启状态 组件加锁
                addLock(uid);
            }
        });
    }
    vue_1.watch(function () { return props[state]; }, function (newValue) {
        if (use && props[use] === false) {
            return;
        }
        if (newValue === true) {
            // popup开启 组件加锁
            addLock(uid);
        }
        else {
            // popup关闭 组件解锁
            releaseLock(uid);
        }
    });
    vue_1.onBeforeMount(function () {
        if (use && props[use] === false) {
            return;
        }
        if (props[state] === true) {
            // popup处于开启状态 组件挂载 组件加锁
            addLock(uid);
        }
    });
    vue_1.onUnmounted(function () {
        if (use && props[use] === false) {
            return;
        }
        if (props[state] === true) {
            // popup处于开启状态 组件卸载 组件解锁
            releaseLock(uid);
        }
    });
    vue_1.onActivated(function () {
        if (use && props[use] === false) {
            return;
        }
        if (props[state] === true) {
            // popup处于开启状态 组件处于keepalive前台 组件加锁
            addLock(uid);
        }
    });
    vue_1.onDeactivated(function () {
        if (use && props[use] === false) {
            return;
        }
        if (props[state] === true) {
            // popup处于开启状态 组件处于keepalive后台 组件解锁
            releaseLock(uid);
        }
    });
}
exports.useLock = useLock;
