"use strict";
var VarletTouchEmulator = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // index.js
  var varlet_touch_emulator_exports = {};
  __export(varlet_touch_emulator_exports, {
    default: () => varlet_touch_emulator_default
  });
  var inBrowser = typeof window !== "undefined";
  var supportTouch = inBrowser && "ontouchstart" in window;
  var initiated = false;
  var eventTarget;
  var isMousedown = (eventType) => eventType === "mousedown";
  var isMousemove = (eventType) => eventType === "mousemove";
  var isMouseup = (eventType) => eventType === "mouseup";
  var isUpdateTarget = (eventType) => isMousedown(eventType) || !eventTarget || eventTarget && !eventTarget.dispatchEvent;
  function Touch(target, identifier, mouseEvent) {
    const { clientX, clientY, screenX, screenY, pageX, pageY } = mouseEvent;
    this.identifier = identifier;
    this.target = target;
    this.clientX = clientX;
    this.clientY = clientY;
    this.screenX = screenX;
    this.screenY = screenY;
    this.pageX = pageX;
    this.pageY = pageY;
  }
  function createTouchList() {
    const touchList = [];
    touchList.item = function(index) {
      return this[index] || null;
    };
    touchList.identifiedTouch = function(id) {
      return this[id + 1] || null;
    };
    return touchList;
  }
  function createTouchListWithEvent(mouseEvent) {
    const touchList = createTouchList();
    touchList.push(new Touch(eventTarget, 1, mouseEvent));
    return touchList;
  }
  function getActiveTouches(mouseEvent) {
    const { type } = mouseEvent;
    if (isMouseup(type)) {
      return createTouchList();
    }
    return createTouchListWithEvent(mouseEvent);
  }
  function triggerTouch(touchType, mouseEvent) {
    const { altKey, ctrlKey, metaKey, shiftKey } = mouseEvent;
    const touchEvent = new Event(touchType, { bubbles: true, cancelable: true });
    touchEvent.altKey = altKey;
    touchEvent.ctrlKey = ctrlKey;
    touchEvent.metaKey = metaKey;
    touchEvent.shiftKey = shiftKey;
    touchEvent.touches = getActiveTouches(mouseEvent);
    touchEvent.targetTouches = getActiveTouches(mouseEvent);
    touchEvent.changedTouches = createTouchListWithEvent(mouseEvent);
    eventTarget.dispatchEvent(touchEvent);
  }
  function onMouse(mouseEvent, touchType) {
    const { type, target } = mouseEvent;
    initiated = isMousedown(type) ? true : isMouseup(type) ? false : initiated;
    if (isMousemove(type) && !initiated)
      return;
    if (isUpdateTarget(type))
      eventTarget = target;
    triggerTouch(touchType, mouseEvent);
    if (isMouseup(type))
      eventTarget = null;
  }
  function createTouchEmulator() {
    window.addEventListener("mousedown", (event) => onMouse(event, "touchstart"), true);
    window.addEventListener("mousemove", (event) => onMouse(event, "touchmove"), true);
    window.addEventListener("mouseup", (event) => onMouse(event, "touchend"), true);
  }
  if (inBrowser && !supportTouch) {
    createTouchEmulator();
  }
  var varlet_touch_emulator_default = {};
  return __toCommonJS(varlet_touch_emulator_exports);
})();
