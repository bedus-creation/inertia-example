import { createInertiaApp } from "@inertiajs/inertia-vue3"
import createServer from "@inertiajs/server"
import { renderToString } from "@vue/server-renderer"
import { createSSRApp, h } from "vue"

function resolvePageComponent(name: string, pages: Record<string, any>) {
    for (const path in pages) {
        if (path.endsWith(`${name.replace(".", "/")}.vue`)) {
            return typeof pages[path] === "function"
                ? pages[path]()
                : pages[path]
        }
    }

    throw new Error(`Page not found: ${name}`)
}

createServer((page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => resolvePageComponent(name, import.meta.globEager("../views/pages/**/*.vue")),
    setup: ({ app, props, plugin: inertia }) => {
        return createSSRApp({ render: () => h(app, props) })
            .use(inertia)
    },
}))
