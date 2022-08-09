import { computed } from "vue"
import { usePage } from "@inertiajs/inertia-vue3";
import { defineAsyncComponent } from 'vue'

export function useModal() {
    const page = usePage()

    const modalProps = computed(() => {
        return page.props.value.dialogProps
    })

    const resolvePageComponent = (name: string, pages: Record<string, any>) => {
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

    const modalComponent = computed(() => {
        const dialog = page.props.value.modal

        if (!dialog) {
            return false;
        }

        return defineAsyncComponent(() => resolvePageComponent(`${dialog}`, import.meta.glob('../views/pages/**/*.vue')))
    })

    return {
        modalComponent,
        modalProps,
    }
}
