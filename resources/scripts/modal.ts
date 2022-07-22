import { computed } from "vue"
import { usePage } from "@inertiajs/inertia-vue3";
import { defineAsyncComponent } from 'vue'

export function useModal() {
    const page = usePage()

    const modalProps = computed(() => {
        return page.props.value.dialogProps
    })

    const modalComponent = computed(() => {
        const dialog = page.props.value.modal

        if (!dialog) {
            return false;
        }

        return defineAsyncComponent(() => import(`../views/pages/${dialog}.vue`))
    })

    return {
        modalComponent,
        modalProps,
    }
}
