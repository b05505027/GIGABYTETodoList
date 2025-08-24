"use strict";
(() => {
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });

  // electron/preload.ts
  var import_electron = __require("electron");
  import_electron.contextBridge.exposeInMainWorld("ipcRenderer", {
    on(...args) {
      const [channel, listener] = args;
      return import_electron.ipcRenderer.on(channel, (event, ...args2) => listener(event, ...args2));
    },
    off(...args) {
      const [channel, ...omit] = args;
      return import_electron.ipcRenderer.off(channel, ...omit);
    },
    send(...args) {
      const [channel, ...omit] = args;
      return import_electron.ipcRenderer.send(channel, ...omit);
    },
    invoke(...args) {
      const [channel, ...omit] = args;
      return import_electron.ipcRenderer.invoke(channel, ...omit);
    }
    // You can expose other APTs you need here.
    // ...
  });
})();
//# sourceMappingURL=index.js.map
