"use strict";
var vue = require("vue");
var inertiaVue3 = require("@inertiajs/inertia-vue3");
function resolvePageComponent(name, pages) {
  for (const path in pages) {
    if (path.endsWith(`${name.replace(".", "/")}.vue`)) {
      return typeof pages[path] === "function" ? pages[path]() : pages[path];
    }
  }
  throw new Error(`Page not found: ${name}`);
}
inertiaVue3.createInertiaApp({
  resolve: (name) => {
    const page = resolvePageComponent(name, { "../views/pages/welcome.vue": () => Promise.resolve().then(function() {
      return require("./assets/welcome.65cf8795.js");
    }), "../views/pages/Users/Create.vue": () => Promise.resolve().then(function() {
      return require("./assets/Create.10ead774.js");
    }), "../views/pages/Users/Index.vue": () => Promise.resolve().then(function() {
      return require("./assets/Index.9b5a5e0a.js");
    }) });
    return page;
  },
  setup({ el, app, props, plugin }) {
    vue.createApp({ render: () => vue.h(app, props) }).use(plugin).mount(el);
  }
});
