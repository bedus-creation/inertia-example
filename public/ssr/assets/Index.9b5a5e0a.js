"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var inertiaVue3 = require("@inertiajs/inertia-vue3");
var runtimeCore = require("@vue/runtime-core");
var pluginVue_exportHelper = require("./plugin-vue_export-helper.db096aab.js");
function useModal() {
  const page = inertiaVue3.usePage();
  const modalProps = vue.computed(() => {
    return [1, 2];
  });
  const modalComponent = vue.computed(() => {
    const dialog = page.props.value.modal;
    if (!dialog) {
      return false;
    }
    return vue.defineAsyncComponent(() => Promise.resolve().then(function() {
      return require("./Create.10ead774.js");
    }));
  });
  return {
    modalComponent,
    modalProps
  };
}
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    const { modalComponent, modalProps } = useModal();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<div>`);
      if (vue.unref(modalComponent)) {
        serverRenderer.ssrRenderSuspense(_push, {
          default: () => {
            serverRenderer.ssrRenderVNode(_push, vue.createVNode(vue.resolveDynamicComponent(vue.unref(modalComponent)), { props: vue.unref(modalProps) }, null), _parent);
          },
          _: 1
        });
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/views/themes/Layout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = runtimeCore.defineComponent({
  components: {
    Layout: _sfc_main$1,
    Link: inertiaVue3.Link
  },
  setup() {
    return {};
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = vue.resolveComponent("Layout");
  const _component_Link = vue.resolveComponent("Link");
  _push(serverRenderer.ssrRenderComponent(_component_Layout, _attrs, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-red-500"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_Link, { href: "/users/create" }, {
          default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Create`);
            } else {
              return [
                vue.createTextVNode("Create")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          vue.createVNode("div", { class: "bg-red-500" }, [
            vue.createVNode(_component_Link, { href: "/users/create" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("Create")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/views/pages/Users/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Index = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports["default"] = Index;
