"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// electron/main.ts
var main_exports = {};
__export(main_exports, {
  MAIN_DIST: () => MAIN_DIST,
  RENDERER_DIST: () => RENDERER_DIST,
  VITE_DEV_SERVER_URL: () => VITE_DEV_SERVER_URL
});
module.exports = __toCommonJS(main_exports);
var import_electron = require("electron");
var import_node_url = require("node:url");
var import_node_path = __toESM(require("node:path"), 1);
var import_meta = {};
var __dirname = import_node_path.default.dirname((0, import_node_url.fileURLToPath)(import_meta.url));
process.env.APP_ROOT = import_node_path.default.join(__dirname, "..");
var VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
var MAIN_DIST = import_node_path.default.join(process.env.APP_ROOT, "dist-electron");
var RENDERER_DIST = import_node_path.default.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? import_node_path.default.join(process.env.APP_ROOT, "public") : RENDERER_DIST;
var win;
function createWindow() {
  win = new import_electron.BrowserWindow({
    icon: import_node_path.default.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: import_node_path.default.join(__dirname, "preload.mjs")
    }
  });
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  });
  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(import_node_path.default.join(RENDERER_DIST, "index.html"));
  }
}
import_electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    import_electron.app.quit();
    win = null;
  }
});
import_electron.app.on("activate", () => {
  if (import_electron.BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
import_electron.app.whenReady().then(createWindow);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MAIN_DIST,
  RENDERER_DIST,
  VITE_DEV_SERVER_URL
});
//# sourceMappingURL=index.js.map
