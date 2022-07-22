import { computed } from "vue"
import { usePage } from "@inertiajs/inertia-vue3";
import { defineAsyncComponent } from 'vue'

export function useModal() {
    const page = usePage()

    const modalProps = computed(() => {
        return [1, 2]
    })

    const modalComponent = computed(() => {
        const dialog = page.props.value.modal

        if (!dialog) {
            return false;
        }

        return defineAsyncComponent(() => import('../views/pages/Users/Create.vue'))
    })

    return {
        modalComponent,
        modalProps,
    }
}
