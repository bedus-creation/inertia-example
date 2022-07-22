"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var inertiaVue3 = require("@inertiajs/inertia-vue3");
var vue$1 = require("@headlessui/vue");
var outline = require("@heroicons/vue/outline");
var solid = require("@heroicons/vue/solid");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    vue.ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(vue.unref(vue$1.TransitionRoot), vue.mergeProps({
        as: "template",
        show: true
      }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(vue.unref(vue$1.Dialog), {
              as: "div",
              class: "relative z-10"
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="fixed inset-0"${_scopeId2}></div><div class="fixed inset-0 overflow-hidden"${_scopeId2}><div class="absolute inset-0 overflow-hidden"${_scopeId2}><div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16"${_scopeId2}>`);
                  _push3(serverRenderer.ssrRenderComponent(vue.unref(vue$1.TransitionChild), {
                    as: "template",
                    enter: "transform transition ease-in-out duration-500 sm:duration-700",
                    "enter-from": "translate-x-full",
                    "enter-to": "translate-x-0",
                    leave: "transform transition ease-in-out duration-500 sm:duration-700",
                    "leave-from": "translate-x-0",
                    "leave-to": "translate-x-full"
                  }, {
                    default: vue.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer.ssrRenderComponent(vue.unref(vue$1.DialogPanel), { class: "pointer-events-auto w-screen max-w-2xl" }, {
                          default: vue.withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"${_scopeId4}><div class="px-4 py-6 sm:px-6"${_scopeId4}><div class="flex items-start justify-between"${_scopeId4}>`);
                              _push5(serverRenderer.ssrRenderComponent(vue.unref(vue$1.DialogTitle), { class: "text-lg font-medium text-gray-900" }, {
                                default: vue.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Profile `);
                                  } else {
                                    return [
                                      vue.createTextVNode(" Profile ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="ml-3 flex h-7 items-center"${_scopeId4}>`);
                              _push5(serverRenderer.ssrRenderComponent(vue.unref(inertiaVue3.Link), {
                                href: "/users",
                                class: "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                              }, {
                                default: vue.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span class="sr-only"${_scopeId5}>Close panel</span>`);
                                    _push6(serverRenderer.ssrRenderComponent(vue.unref(outline.XIcon), {
                                      class: "h-6 w-6",
                                      "aria-hidden": "true"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      vue.createVNode("span", { class: "sr-only" }, "Close panel"),
                                      vue.createVNode(vue.unref(outline.XIcon), {
                                        class: "h-6 w-6",
                                        "aria-hidden": "true"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div></div></div><div class="divide-y divide-gray-200"${_scopeId4}><div class="pb-6"${_scopeId4}><div class="h-24 bg-indigo-700 sm:h-20 lg:h-28"${_scopeId4}></div><div class="lg:-mt-15 -mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6"${_scopeId4}><div${_scopeId4}><div class="-m-1 flex"${_scopeId4}><div class="inline-flex overflow-hidden rounded-lg border-4 border-white"${_scopeId4}><img class="h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48" src="https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=256&amp;h=256&amp;q=80" alt=""${_scopeId4}></div></div></div><div class="mt-6 sm:ml-6 sm:flex-1"${_scopeId4}><div${_scopeId4}><div class="flex items-center"${_scopeId4}><h3 class="text-xl font-bold text-gray-900 sm:text-2xl"${_scopeId4}> Ashley Porter </h3><span class="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400"${_scopeId4}><span class="sr-only"${_scopeId4}>Online</span></span></div><p class="text-sm text-gray-500"${_scopeId4}>@ashleyporter</p></div><div class="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3"${_scopeId4}><button type="button" class="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1"${_scopeId4}>`);
                              _push5(serverRenderer.ssrRenderComponent(vue.unref(inertiaVue3.Link), {
                                as: "button",
                                method: "post",
                                href: "/users",
                                data: {},
                                "preserve-scroll": "",
                                "preserve-state": ""
                              }, {
                                default: vue.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Message`);
                                  } else {
                                    return [
                                      vue.createTextVNode("Message")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</button><button type="button" class="inline-flex w-full flex-1 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"${_scopeId4}> Call </button><div class="ml-3 inline-flex sm:ml-0"${_scopeId4}>`);
                              _push5(serverRenderer.ssrRenderComponent(vue.unref(vue$1.Menu), {
                                as: "div",
                                class: "relative inline-block text-left"
                              }, {
                                default: vue.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(serverRenderer.ssrRenderComponent(vue.unref(vue$1.MenuButton), { class: "inline-flex items-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" }, {
                                      default: vue.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span class="sr-only"${_scopeId6}>Open options menu</span>`);
                                          _push7(serverRenderer.ssrRenderComponent(vue.unref(solid.DotsVerticalIcon), {
                                            class: "h-5 w-5",
                                            "aria-hidden": "true"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            vue.createVNode("span", { class: "sr-only" }, "Open options menu"),
                                            vue.createVNode(vue.unref(solid.DotsVerticalIcon), {
                                              class: "h-5 w-5",
                                              "aria-hidden": "true"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(``);
                                    _push6(serverRenderer.ssrRenderComponent(vue.unref(vue$1.MenuItems), { class: "absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                                      default: vue.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="py-1"${_scopeId6}>`);
                                          _push7(serverRenderer.ssrRenderComponent(vue.unref(vue$1.MenuItem), null, {
                                            default: vue.withCtx(({ active }, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<a href="#" class="${serverRenderer.ssrRenderClass([
                                                  active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                  "block px-4 py-2 text-sm"
                                                ])}"${_scopeId7}>View profile</a>`);
                                              } else {
                                                return [
                                                  vue.createVNode("a", {
                                                    href: "#",
                                                    class: [
                                                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                      "block px-4 py-2 text-sm"
                                                    ]
                                                  }, "View profile", 2)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(serverRenderer.ssrRenderComponent(vue.unref(vue$1.MenuItem), null, {
                                            default: vue.withCtx(({ active }, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<a href="#" class="${serverRenderer.ssrRenderClass([
                                                  active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                  "block px-4 py-2 text-sm"
                                                ])}"${_scopeId7}>Copy profile link</a>`);
                                              } else {
                                                return [
                                                  vue.createVNode("a", {
                                                    href: "#",
                                                    class: [
                                                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                      "block px-4 py-2 text-sm"
                                                    ]
                                                  }, "Copy profile link", 2)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            vue.createVNode("div", { class: "py-1" }, [
                                              vue.createVNode(vue.unref(vue$1.MenuItem), null, {
                                                default: vue.withCtx(({ active }) => [
                                                  vue.createVNode("a", {
                                                    href: "#",
                                                    class: [
                                                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                      "block px-4 py-2 text-sm"
                                                    ]
                                                  }, "View profile", 2)
                                                ]),
                                                _: 1
                                              }),
                                              vue.createVNode(vue.unref(vue$1.MenuItem), null, {
                                                default: vue.withCtx(({ active }) => [
                                                  vue.createVNode("a", {
                                                    href: "#",
                                                    class: [
                                                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                      "block px-4 py-2 text-sm"
                                                    ]
                                                  }, "Copy profile link", 2)
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      vue.createVNode(vue.unref(vue$1.MenuButton), { class: "inline-flex items-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" }, {
                                        default: vue.withCtx(() => [
                                          vue.createVNode("span", { class: "sr-only" }, "Open options menu"),
                                          vue.createVNode(vue.unref(solid.DotsVerticalIcon), {
                                            class: "h-5 w-5",
                                            "aria-hidden": "true"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      vue.createVNode(vue.Transition, {
                                        "enter-active-class": "transition ease-out duration-100",
                                        "enter-from-class": "transform opacity-0 scale-95",
                                        "enter-to-class": "transform opacity-100 scale-100",
                                        "leave-active-class": "transition ease-in duration-75",
                                        "leave-from-class": "transform opacity-100 scale-100",
                                        "leave-to-class": "transform opacity-0 scale-95"
                                      }, {
                                        default: vue.withCtx(() => [
                                          vue.createVNode(vue.unref(vue$1.MenuItems), { class: "absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                                            default: vue.withCtx(() => [
                                              vue.createVNode("div", { class: "py-1" }, [
                                                vue.createVNode(vue.unref(vue$1.MenuItem), null, {
                                                  default: vue.withCtx(({ active }) => [
                                                    vue.createVNode("a", {
                                                      href: "#",
                                                      class: [
                                                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                        "block px-4 py-2 text-sm"
                                                      ]
                                                    }, "View profile", 2)
                                                  ]),
                                                  _: 1
                                                }),
                                                vue.createVNode(vue.unref(vue$1.MenuItem), null, {
                                                  default: vue.withCtx(({ active }) => [
                                                    vue.createVNode("a", {
                                                      href: "#",
                                                      class: [
                                                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                        "block px-4 py-2 text-sm"
                                                      ]
                                                    }, "Copy profile link", 2)
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div></div></div></div></div><div class="px-4 py-5 sm:px-0 sm:py-0"${_scopeId4}><dl class="space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200"${_scopeId4}><div class="sm:flex sm:px-6 sm:py-5"${_scopeId4}><dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"${_scopeId4}> Bio </dt><dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6"${_scopeId4}><p${_scopeId4}> Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum aenean arcu. </p></dd></div><div class="sm:flex sm:px-6 sm:py-5"${_scopeId4}><dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"${_scopeId4}> Location </dt><dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6"${_scopeId4}> New York, NY, USA </dd></div><div class="sm:flex sm:px-6 sm:py-5"${_scopeId4}><dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"${_scopeId4}> Website </dt><dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6"${_scopeId4}> ashleyporter.com </dd></div><div class="sm:flex sm:px-6 sm:py-5"${_scopeId4}><dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"${_scopeId4}> Birthday </dt><dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6"${_scopeId4}><time datetime="1982-06-23"${_scopeId4}> June 23, 1982 </time></dd></div></dl></div></div></div>`);
                            } else {
                              return [
                                vue.createVNode("div", { class: "flex h-full flex-col overflow-y-scroll bg-white shadow-xl" }, [
                                  vue.createVNode("div", { class: "px-4 py-6 sm:px-6" }, [
                                    vue.createVNode("div", { class: "flex items-start justify-between" }, [
                                      vue.createVNode(vue.unref(vue$1.DialogTitle), { class: "text-lg font-medium text-gray-900" }, {
                                        default: vue.withCtx(() => [
                                          vue.createTextVNode(" Profile ")
                                        ]),
                                        _: 1
                                      }),
                                      vue.createVNode("div", { class: "ml-3 flex h-7 items-center" }, [
                                        vue.createVNode(vue.unref(inertiaVue3.Link), {
                                          href: "/users",
                                          class: "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                                        }, {
                                          default: vue.withCtx(() => [
                                            vue.createVNode("span", { class: "sr-only" }, "Close panel"),
                                            vue.createVNode(vue.unref(outline.XIcon), {
                                              class: "h-6 w-6",
                                              "aria-hidden": "true"
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ])
                                  ]),
                                  vue.createVNode("div", { class: "divide-y divide-gray-200" }, [
                                    vue.createVNode("div", { class: "pb-6" }, [
                                      vue.createVNode("div", { class: "h-24 bg-indigo-700 sm:h-20 lg:h-28" }),
                                      vue.createVNode("div", { class: "lg:-mt-15 -mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6" }, [
                                        vue.createVNode("div", null, [
                                          vue.createVNode("div", { class: "-m-1 flex" }, [
                                            vue.createVNode("div", { class: "inline-flex overflow-hidden rounded-lg border-4 border-white" }, [
                                              vue.createVNode("img", {
                                                class: "h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48",
                                                src: "https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80",
                                                alt: ""
                                              })
                                            ])
                                          ])
                                        ]),
                                        vue.createVNode("div", { class: "mt-6 sm:ml-6 sm:flex-1" }, [
                                          vue.createVNode("div", null, [
                                            vue.createVNode("div", { class: "flex items-center" }, [
                                              vue.createVNode("h3", { class: "text-xl font-bold text-gray-900 sm:text-2xl" }, " Ashley Porter "),
                                              vue.createVNode("span", { class: "ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400" }, [
                                                vue.createVNode("span", { class: "sr-only" }, "Online")
                                              ])
                                            ]),
                                            vue.createVNode("p", { class: "text-sm text-gray-500" }, "@ashleyporter")
                                          ]),
                                          vue.createVNode("div", { class: "mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3" }, [
                                            vue.createVNode("button", {
                                              type: "button",
                                              class: "inline-flex w-full flex-shrink-0 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1"
                                            }, [
                                              vue.createVNode(vue.unref(inertiaVue3.Link), {
                                                as: "button",
                                                method: "post",
                                                href: "/users",
                                                data: {},
                                                "preserve-scroll": "",
                                                "preserve-state": ""
                                              }, {
                                                default: vue.withCtx(() => [
                                                  vue.createTextVNode("Message")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            vue.createVNode("button", {
                                              type: "button",
                                              class: "inline-flex w-full flex-1 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            }, " Call "),
                                            vue.createVNode("div", { class: "ml-3 inline-flex sm:ml-0" }, [
                                              vue.createVNode(vue.unref(vue$1.Menu), {
                                                as: "div",
                                                class: "relative inline-block text-left"
                                              }, {
                                                default: vue.withCtx(() => [
                                                  vue.createVNode(vue.unref(vue$1.MenuButton), { class: "inline-flex items-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" }, {
                                                    default: vue.withCtx(() => [
                                                      vue.createVNode("span", { class: "sr-only" }, "Open options menu"),
                                                      vue.createVNode(vue.unref(solid.DotsVerticalIcon), {
                                                        class: "h-5 w-5",
                                                        "aria-hidden": "true"
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  vue.createVNode(vue.Transition, {
                                                    "enter-active-class": "transition ease-out duration-100",
                                                    "enter-from-class": "transform opacity-0 scale-95",
                                                    "enter-to-class": "transform opacity-100 scale-100",
                                                    "leave-active-class": "transition ease-in duration-75",
                                                    "leave-from-class": "transform opacity-100 scale-100",
                                                    "leave-to-class": "transform opacity-0 scale-95"
                                                  }, {
                                                    default: vue.withCtx(() => [
                                                      vue.createVNode(vue.unref(vue$1.MenuItems), { class: "absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                                                        default: vue.withCtx(() => [
                                                          vue.createVNode("div", { class: "py-1" }, [
                                                            vue.createVNode(vue.unref(vue$1.MenuItem), null, {
                                                              default: vue.withCtx(({ active }) => [
                                                                vue.createVNode("a", {
                                                                  href: "#",
                                                                  class: [
                                                                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                                    "block px-4 py-2 text-sm"
                                                                  ]
                                                                }, "View profile", 2)
                                                              ]),
                                                              _: 1
                                                            }),
                                                            vue.createVNode(vue.unref(vue$1.MenuItem), null, {
                                                              default: vue.withCtx(({ active }) => [
                                                                vue.createVNode("a", {
                                                                  href: "#",
                                                                  class: [
                                                                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                                    "block px-4 py-2 text-sm"
                                                                  ]
                                                                }, "Copy profile link", 2)
                                                              ]),
                                                              _: 1
                                                            })
                                                          ])
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ])
                                        ])
                                      ])
                                    ]),
                                    vue.createVNode("div", { class: "px-4 py-5 sm:px-0 sm:py-0" }, [
                                      vue.createVNode("dl", { class: "space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200" }, [
                                        vue.createVNode("div", { class: "sm:flex sm:px-6 sm:py-5" }, [
                                          vue.createVNode("dt", { class: "text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48" }, " Bio "),
                                          vue.createVNode("dd", { class: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6" }, [
                                            vue.createVNode("p", null, " Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum aenean arcu. ")
                                          ])
                                        ]),
                                        vue.createVNode("div", { class: "sm:flex sm:px-6 sm:py-5" }, [
                                          vue.createVNode("dt", { class: "text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48" }, " Location "),
                                          vue.createVNode("dd", { class: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6" }, " New York, NY, USA ")
                                        ]),
                                        vue.createVNode("div", { class: "sm:flex sm:px-6 sm:py-5" }, [
                                          vue.createVNode("dt", { class: "text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48" }, " Website "),
                                          vue.createVNode("dd", { class: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6" }, " ashleyporter.com ")
                                        ]),
                                        vue.createVNode("div", { class: "sm:flex sm:px-6 sm:py-5" }, [
                                          vue.createVNode("dt", { class: "text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48" }, " Birthday "),
                                          vue.createVNode("dd", { class: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6" }, [
                                            vue.createVNode("time", { datetime: "1982-06-23" }, " June 23, 1982 ")
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          vue.createVNode(vue.unref(vue$1.DialogPanel), { class: "pointer-events-auto w-screen max-w-2xl" }, {
                            default: vue.withCtx(() => [
                              vue.createVNode("div", { class: "flex h-full flex-col overflow-y-scroll bg-white shadow-xl" }, [
                                vue.createVNode("div", { class: "px-4 py-6 sm:px-6" }, [
                                  vue.createVNode("div", { class: "flex items-start justify-between" }, [
                                    vue.createVNode(vue.unref(vue$1.DialogTitle), { class: "text-lg font-medium text-gray-900" }, {
                                      default: vue.withCtx(() => [
                                        vue.createTextVNode(" Profile ")
                                      ]),
                                      _: 1
                                    }),
                                    vue.createVNode("div", { class: "ml-3 flex h-7 items-center" }, [
                                      vue.createVNode(vue.unref(inertiaVue3.Link), {
                                        href: "/users",
                                        class: "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                                      }, {
                                        default: vue.withCtx(() => [
                                          vue.createVNode("span", { class: "sr-only" }, "Close panel"),
                                          vue.createVNode(vue.unref(outline.XIcon), {
                                            class: "h-6 w-6",
                                            "aria-hidden": "true"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ])
                                ]),
                                vue.createVNode("div", { class: "divide-y divide-gray-200" }, [
                                  vue.createVNode("div", { class: "pb-6" }, [
                                    vue.createVNode("div", { class: "h-24 bg-indigo-700 sm:h-20 lg:h-28" }),
                                    vue.createVNode("div", { class: "lg:-mt-15 -mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6" }, [
                                      vue.createVNode("div", null, [
                                        vue.createVNode("div", { class: "-m-1 flex" }, [
                                          vue.createVNode("div", { class: "inline-flex overflow-hidden rounded-lg border-4 border-white" }, [
                                            vue.createVNode("img", {
                                              class: "h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48",
                                              src: "https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80",
                                              alt: ""
                                            })
                                          ])
                                        ])
                                      ]),
                                      vue.createVNode("div", { class: "mt-6 sm:ml-6 sm:flex-1" }, [
                                        vue.createVNode("div", null, [
                                          vue.createVNode("div", { class: "flex items-center" }, [
                                            vue.createVNode("h3", { class: "text-xl font-bold text-gray-900 sm:text-2xl" }, " Ashley Porter "),
                                            vue.createVNode("span", { class: "ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400" }, [
                                              vue.createVNode("span", { class: "sr-only" }, "Online")
                                            ])
                                          ]),
                                          vue.createVNode("p", { class: "text-sm text-gray-500" }, "@ashleyporter")
                                        ]),
                                        vue.createVNode("div", { class: "mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3" }, [
                                          vue.createVNode("button", {
                                            type: "button",
                                            class: "inline-flex w-full flex-shrink-0 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1"
                                          }, [
                                            vue.createVNode(vue.unref(inertiaVue3.Link), {
                                              as: "button",
                                              method: "post",
                                              href: "/users",
                                              data: {},
                                              "preserve-scroll": "",
                                              "preserve-state": ""
                                            }, {
                                              default: vue.withCtx(() => [
                                                vue.createTextVNode("Message")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          vue.createVNode("button", {
                                            type: "button",
                                            class: "inline-flex w-full flex-1 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                          }, " Call "),
                                          vue.createVNode("div", { class: "ml-3 inline-flex sm:ml-0" }, [
                                            vue.createVNode(vue.unref(vue$1.Menu), {
                                              as: "div",
                                              class: "relative inline-block text-left"
                                            }, {
                                              default: vue.withCtx(() => [
                                                vue.createVNode(vue.unref(vue$1.MenuButton), { class: "inline-flex items-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" }, {
                                                  default: vue.withCtx(() => [
                                                    vue.createVNode("span", { class: "sr-only" }, "Open options menu"),
                                                    vue.createVNode(vue.unref(solid.DotsVerticalIcon), {
                                                      class: "h-5 w-5",
                                                      "aria-hidden": "true"
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                vue.createVNode(vue.Transition, {
                                                  "enter-active-class": "transition ease-out duration-100",
                                                  "enter-from-class": "transform opacity-0 scale-95",
                                                  "enter-to-class": "transform opacity-100 scale-100",
                                                  "leave-active-class": "transition ease-in duration-75",
                                                  "leave-from-class": "transform opacity-100 scale-100",
                                                  "leave-to-class": "transform opacity-0 scale-95"
                                                }, {
                                                  default: vue.withCtx(() => [
                                                    vue.createVNode(vue.unref(vue$1.MenuItems), { class: "absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                                                      default: vue.withCtx(() => [
                                                        vue.createVNode("div", { class: "py-1" }, [
                                                          vue.createVNode(vue.unref(vue$1.MenuItem), null, {
                                                            default: vue.withCtx(({ active }) => [
                                                              vue.createVNode("a", {
                                                                href: "#",
                                                                class: [
                                                                  active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                                  "block px-4 py-2 text-sm"
                                                                ]
                                                              }, "View profile", 2)
                                                            ]),
                                                            _: 1
                                                          }),
                                                          vue.createVNode(vue.unref(vue$1.MenuItem), null, {
                                                            default: vue.withCtx(({ active }) => [
                                                              vue.createVNode("a", {
                                                                href: "#",
                                                                class: [
                                                                  active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                                  "block px-4 py-2 text-sm"
                                                                ]
                                                              }, "Copy profile link", 2)
                                                            ]),
                                                            _: 1
                                                          })
                                                        ])
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ])
                                      ])
                                    ])
                                  ]),
                                  vue.createVNode("div", { class: "px-4 py-5 sm:px-0 sm:py-0" }, [
                                    vue.createVNode("dl", { class: "space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200" }, [
                                      vue.createVNode("div", { class: "sm:flex sm:px-6 sm:py-5" }, [
                                        vue.createVNode("dt", { class: "text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48" }, " Bio "),
                                        vue.createVNode("dd", { class: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6" }, [
                                          vue.createVNode("p", null, " Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum aenean arcu. ")
                                        ])
                                      ]),
                                      vue.createVNode("div", { class: "sm:flex sm:px-6 sm:py-5" }, [
                                        vue.createVNode("dt", { class: "text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48" }, " Location "),
                                        vue.createVNode("dd", { class: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6" }, " New York, NY, USA ")
                                      ]),
                                      vue.createVNode("div", { class: "sm:flex sm:px-6 sm:py-5" }, [
                                        vue.createVNode("dt", { class: "text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48" }, " Website "),
                                        vue.createVNode("dd", { class: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6" }, " ashleyporter.com ")
                                      ]),
                                      vue.createVNode("div", { class: "sm:flex sm:px-6 sm:py-5" }, [
                                        vue.createVNode("dt", { class: "text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48" }, " Birthday "),
                                        vue.createVNode("dd", { class: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6" }, [
                                          vue.createVNode("time", { datetime: "1982-06-23" }, " June 23, 1982 ")
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div></div>`);
                } else {
                  return [
                    vue.createVNode("div", { class: "fixed inset-0" }),
                    vue.createVNode("div", { class: "fixed inset-0 overflow-hidden" }, [
                      vue.createVNode("div", { class: "absolute inset-0 overflow-hidden" }, [
                        vue.createVNode("div", { class: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16" }, [
                          vue.createVNode(vue.unref(vue$1.TransitionChild), {
                            as: "template",
                            enter: "transform transition ease-in-out duration-500 sm:duration-700",
                            "enter-from": "translate-x-full",
                            "enter-to": "translate-x-0",
                            leave: "transform transition ease-in-out duration-500 sm:duration-700",
                            "leave-from": "translate-x-0",
                            "leave-to": "translate-x-full"
                          }, {
                            default: vue.withCtx(() => [
                              vue.createVNode(vue.unref(vue$1.DialogPanel), { class: "pointer-events-auto w-screen max-w-2xl" }, {
                                default: vue.withCtx(() => [
                                  vue.createVNode("div", { class: "flex h-full flex-col overflow-y-scroll bg-white shadow-xl" }, [
                                    vue.createVNode("div", { class: "px-4 py-6 sm:px-6" }, [
                                      vue.createVNode("div", { class: "flex items-start justify-between" }, [
                                        vue.createVNode(vue.unref(vue$1.DialogTitle), { class: "text-lg font-medium text-gray-900" }, {
                                          default: vue.withCtx(() => [
                                            vue.createTextVNode(" Profile ")
                                          ]),
                                          _: 1
                                        }),
                                        vue.createVNode("div", { class: "ml-3 flex h-7 items-center" }, [
                                          vue.createVNode(vue.unref(inertiaVue3.Link), {
                                            href: "/users",
                                            class: "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                                          }, {
                                            default: vue.withCtx(() => [
                                              vue.createVNode("span", { class: "sr-only" }, "Close panel"),
                                              vue.createVNode(vue.unref(outline.XIcon), {
                                                class: "h-6 w-6",
                                                "aria-hidden": "true"
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ])
                                    ]),
                                    vue.createVNode("div", { class: "divide-y divide-gray-200" }, [
                                      vue.createVNode("div", { class: "pb-6" }, [
                                        vue.createVNode("div", { class: "h-24 bg-indigo-700 sm:h-20 lg:h-28" }),
                                        vue.createVNode("div", { class: "lg:-mt-15 -mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6" }, [
                                          vue.createVNode("div", null, [
                                            vue.createVNode("div", { class: "-m-1 flex" }, [
                                              vue.createVNode("div", { class: "inline-flex overflow-hidden rounded-lg border-4 border-white" }, [
                                                vue.createVNode("img", {
                                                  class: "h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48",
                                                  src: "https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80",
                                                  alt: ""
                                                })
                                              ])
                                            ])
                                          ]),
                                          vue.createVNode("div", { class: "mt-6 sm:ml-6 sm:flex-1" }, [
                                            vue.createVNode("div", null, [
                                              vue.createVNode("div", { class: "flex items-center" }, [
                                                vue.createVNode("h3", { class: "text-xl font-bold text-gray-900 sm:text-2xl" }, " Ashley Porter "),
                                                vue.createVNode("span", { class: "ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400" }, [
                                                  vue.createVNode("span", { class: "sr-only" }, "Online")
                                                ])
                                              ]),
                                              vue.createVNode("p", { class: "text-sm text-gray-500" }, "@ashleyporter")
                                            ]),
                                            vue.createVNode("div", { class: "mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3" }, [
                                              vue.createVNode("button", {
                                                type: "button",
                                                class: "inline-flex w-full flex-shrink-0 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1"
                                              }, [
                                                vue.createVNode(vue.unref(inertiaVue3.Link), {
                                                  as: "button",
                                                  method: "post",
                                                  href: "/users",
                                                  data: {},
                                                  "preserve-scroll": "",
                                                  "preserve-state": ""
                                                }, {
                                                  default: vue.withCtx(() => [
                                                    vue.createTextVNode("Message")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              vue.createVNode("button", {
                                                type: "button",
                                                class: "inline-flex w-full flex-1 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                              }, " Call "),
                                              vue.createVNode("div", { class: "ml-3 inline-flex sm:ml-0" }, [
                                                vue.createVNode(vue.unref(vue$1.Menu), {
                                                  as: "div",
                                                  class: "relative inline-block text-left"
                                                }, {
                                                  default: vue.withCtx(() => [
                                                    vue.createVNode(vue.unref(vue$1.MenuButton), { class: "inline-flex items-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" }, {
                                                      default: vue.withCtx(() => [
                                                        vue.createVNode("span", { class: "sr-only" }, "Open options menu"),
                                                        vue.createVNode(vue.unref(solid.DotsVerticalIcon), {
                                                          class: "h-5 w-5",
                                                          "aria-hidden": "true"
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    vue.createVNode(vue.Transition, {
                                                      "enter-active-class": "transition ease-out duration-100",
                                                      "enter-from-class": "transform opacity-0 scale-95",
                                                      "enter-to-class": "transform opacity-100 scale-100",
                                                      "leave-active-class": "transition ease-in duration-75",
                                                      "leave-from-class": "transform opacity-100 scale-100",
                                                      "leave-to-class": "transform opacity-0 scale-95"
                                                    }, {
                                                      default: vue.withCtx(() => [
                                                        vue.createVNode(vue.unref(vue$1.MenuItems), { class: "absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                                                          default: vue.withCtx(() => [
                                                            vue.createVNode("div", { class: "py-1" }, [
                                                              vue.createVNode(vue.unref(vue$1.MenuItem), null, {
                                                                default: vue.withCtx(({ active }) => [
                                                                  vue.createVNode("a", {
                                                                    href: "#",
                                                                    class: [
                                                                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                                      "block px-4 py-2 text-sm"
                                                                    ]
                                                                  }, "View profile", 2)
                                                                ]),
                                                                _: 1
                                                              }),
                                                              vue.createVNode(vue.unref(vue$1.MenuItem), null, {
                                                                default: vue.withCtx(({ active }) => [
                                                                  vue.createVNode("a", {
                                                                    href: "#",
                                                                    class: [
                                                                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                                      "block px-4 py-2 text-sm"
                                                                    ]
                                                                  }, "Copy profile link", 2)
                                                                ]),
                                                                _: 1
                                                              })
                                                            ])
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ])
                                          ])
                                        ])
                                      ]),
                                      vue.createVNode("div", { class: "px-4 py-5 sm:px-0 sm:py-0" }, [
                                        vue.createVNode("dl", { class: "space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200" }, [
                                          vue.createVNode("div", { class: "sm:flex sm:px-6 sm:py-5" }, [
                                            vue.createVNode("dt", { class: "text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48" }, " Bio "),
                                            vue.createVNode("dd", { class: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6" }, [
                                              vue.createVNode("p", null, " Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum aenean arcu. ")
                                            ])
                                          ]),
                                          vue.createVNode("div", { class: "sm:flex sm:px-6 sm:py-5" }, [
                                            vue.createVNode("dt", { class: "text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48" }, " Location "),
                                            vue.createVNode("dd", { class: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6" }, " New York, NY, USA ")
                                          ]),
                                          vue.createVNode("div", { class: "sm:flex sm:px-6 sm:py-5" }, [
                                            vue.createVNode("dt", { class: "text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48" }, " Website "),
                                            vue.createVNode("dd", { class: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6" }, " ashleyporter.com ")
                                          ]),
                                          vue.createVNode("div", { class: "sm:flex sm:px-6 sm:py-5" }, [
                                            vue.createVNode("dt", { class: "text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48" }, " Birthday "),
                                            vue.createVNode("dd", { class: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6" }, [
                                              vue.createVNode("time", { datetime: "1982-06-23" }, " June 23, 1982 ")
                                            ])
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(vue.unref(vue$1.Dialog), {
                as: "div",
                class: "relative z-10"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode("div", { class: "fixed inset-0" }),
                  vue.createVNode("div", { class: "fixed inset-0 overflow-hidden" }, [
                    vue.createVNode("div", { class: "absolute inset-0 overflow-hidden" }, [
                      vue.createVNode("div", { class: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16" }, [
                        vue.createVNode(vue.unref(vue$1.TransitionChild), {
                          as: "template",
                          enter: "transform transition ease-in-out duration-500 sm:duration-700",
                          "enter-from": "translate-x-full",
                          "enter-to": "translate-x-0",
                          leave: "transform transition ease-in-out duration-500 sm:duration-700",
                          "leave-from": "translate-x-0",
                          "leave-to": "translate-x-full"
                        }, {
                          default: vue.withCtx(() => [
                            vue.createVNode(vue.unref(vue$1.DialogPanel), { class: "pointer-events-auto w-screen max-w-2xl" }, {
                              default: vue.withCtx(() => [
                                vue.createVNode("div", { class: "flex h-full flex-col overflow-y-scroll bg-white shadow-xl" }, [
                                  vue.createVNode("div", { class: "px-4 py-6 sm:px-6" }, [
                                    vue.createVNode("div", { class: "flex items-start justify-between" }, [
                                      vue.createVNode(vue.unref(vue$1.DialogTitle), { class: "text-lg font-medium text-gray-900" }, {
                                        default: vue.withCtx(() => [
                                          vue.createTextVNode(" Profile ")
                                        ]),
                                        _: 1
                                      }),
                                      vue.createVNode("div", { class: "ml-3 flex h-7 items-center" }, [
                                        vue.createVNode(vue.unref(inertiaVue3.Link), {
                                          href: "/users",
                                          class: "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                                        }, {
                                          default: vue.withCtx(() => [
                                            vue.createVNode("span", { class: "sr-only" }, "Close panel"),
                                            vue.createVNode(vue.unref(outline.XIcon), {
                                              class: "h-6 w-6",
                                              "aria-hidden": "true"
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ])
                                  ]),
                                  vue.createVNode("div", { class: "divide-y divide-gray-200" }, [
                                    vue.createVNode("div", { class: "pb-6" }, [
                                      vue.createVNode("div", { class: "h-24 bg-indigo-700 sm:h-20 lg:h-28" }),
                                      vue.createVNode("div", { class: "lg:-mt-15 -mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6" }, [
                                        vue.createVNode("div", null, [
                                          vue.createVNode("div", { class: "-m-1 flex" }, [
                                            vue.createVNode("div", { class: "inline-flex overflow-hidden rounded-lg border-4 border-white" }, [
                                              vue.createVNode("img", {
                                                class: "h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48",
                                                src: "https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80",
                                                alt: ""
                                              })
                                            ])
                                          ])
                                        ]),
                                        vue.createVNode("div", { class: "mt-6 sm:ml-6 sm:flex-1" }, [
                                          vue.createVNode("div", null, [
                                            vue.createVNode("div", { class: "flex items-center" }, [
                                              vue.createVNode("h3", { class: "text-xl font-bold text-gray-900 sm:text-2xl" }, " Ashley Porter "),
                                              vue.createVNode("span", { class: "ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400" }, [
                                                vue.createVNode("span", { class: "sr-only" }, "Online")
                                              ])
                                            ]),
                                            vue.createVNode("p", { class: "text-sm text-gray-500" }, "@ashleyporter")
                                          ]),
                                          vue.createVNode("div", { class: "mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3" }, [
                                            vue.createVNode("button", {
                                              type: "button",
                                              class: "inline-flex w-full flex-shrink-0 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1"
                                            }, [
                                              vue.createVNode(vue.unref(inertiaVue3.Link), {
                                                as: "button",
                                                method: "post",
                                                href: "/users",
                                                data: {},
                                                "preserve-scroll": "",
                                                "preserve-state": ""
                                              }, {
                                                default: vue.withCtx(() => [
                                                  vue.createTextVNode("Message")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            vue.createVNode("button", {
                                              type: "button",
                                              class: "inline-flex w-full flex-1 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            }, " Call "),
                                            vue.createVNode("div", { class: "ml-3 inline-flex sm:ml-0" }, [
                                              vue.createVNode(vue.unref(vue$1.Menu), {
                                                as: "div",
                                                class: "relative inline-block text-left"
                                              }, {
                                                default: vue.withCtx(() => [
                                                  vue.createVNode(vue.unref(vue$1.MenuButton), { class: "inline-flex items-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" }, {
                                                    default: vue.withCtx(() => [
                                                      vue.createVNode("span", { class: "sr-only" }, "Open options menu"),
                                                      vue.createVNode(vue.unref(solid.DotsVerticalIcon), {
                                                        class: "h-5 w-5",
                                                        "aria-hidden": "true"
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  vue.createVNode(vue.Transition, {
                                                    "enter-active-class": "transition ease-out duration-100",
                                                    "enter-from-class": "transform opacity-0 scale-95",
                                                    "enter-to-class": "transform opacity-100 scale-100",
                                                    "leave-active-class": "transition ease-in duration-75",
                                                    "leave-from-class": "transform opacity-100 scale-100",
                                                    "leave-to-class": "transform opacity-0 scale-95"
                                                  }, {
                                                    default: vue.withCtx(() => [
                                                      vue.createVNode(vue.unref(vue$1.MenuItems), { class: "absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                                                        default: vue.withCtx(() => [
                                                          vue.createVNode("div", { class: "py-1" }, [
                                                            vue.createVNode(vue.unref(vue$1.MenuItem), null, {
                                                              default: vue.withCtx(({ active }) => [
                                                                vue.createVNode("a", {
                                                                  href: "#",
                                                                  class: [
                                                                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                                    "block px-4 py-2 text-sm"
                                                                  ]
                                                                }, "View profile", 2)
                                                              ]),
                                                              _: 1
                                                            }),
                                                            vue.createVNode(vue.unref(vue$1.MenuItem), null, {
                                                              default: vue.withCtx(({ active }) => [
                                                                vue.createVNode("a", {
                                                                  href: "#",
                                                                  class: [
                                                                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                                    "block px-4 py-2 text-sm"
                                                                  ]
                                                                }, "Copy profile link", 2)
                                                              ]),
                                                              _: 1
                                                            })
                                                          ])
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ])
                                        ])
                                      ])
                                    ]),
                                    vue.createVNode("div", { class: "px-4 py-5 sm:px-0 sm:py-0" }, [
                                      vue.createVNode("dl", { class: "space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200" }, [
                                        vue.createVNode("div", { class: "sm:flex sm:px-6 sm:py-5" }, [
                                          vue.createVNode("dt", { class: "text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48" }, " Bio "),
                                          vue.createVNode("dd", { class: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6" }, [
                                            vue.createVNode("p", null, " Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum aenean arcu. ")
                                          ])
                                        ]),
                                        vue.createVNode("div", { class: "sm:flex sm:px-6 sm:py-5" }, [
                                          vue.createVNode("dt", { class: "text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48" }, " Location "),
                                          vue.createVNode("dd", { class: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6" }, " New York, NY, USA ")
                                        ]),
                                        vue.createVNode("div", { class: "sm:flex sm:px-6 sm:py-5" }, [
                                          vue.createVNode("dt", { class: "text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48" }, " Website "),
                                          vue.createVNode("dd", { class: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6" }, " ashleyporter.com ")
                                        ]),
                                        vue.createVNode("div", { class: "sm:flex sm:px-6 sm:py-5" }, [
                                          vue.createVNode("dt", { class: "text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48" }, " Birthday "),
                                          vue.createVNode("dd", { class: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6" }, [
                                            vue.createVNode("time", { datetime: "1982-06-23" }, " June 23, 1982 ")
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/views/pages/Users/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
