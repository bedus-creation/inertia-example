import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'

function resolvePageComponent(name: string, pages: Record<string, any>) {
    // console.log(name)
    for (const path in pages) {
        if (path.endsWith(`${name.replace('.', '/')}.vue`)) {
            return typeof pages[path] === 'function'
                ? pages[path]()
                : pages[path]
        }
    }

    throw new Error(`Page not found: ${name}`)
}

// Creates the Inertia app, nothing fancy.
createInertiaApp({
    resolve: (name) => {
        const page = resolvePageComponent(name, import.meta.glob('../views/pages/**/*.vue'))
        return page
    },
    setup({ el, app, props, plugin }) {
        createApp({ render: () => h(app, props) })
            .use(plugin)
            .mount(el)
    },
})
