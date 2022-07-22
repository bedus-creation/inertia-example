<template>
    <Layout>
        <div class="bg-blue-500 text-white">
            <Link :href="route('users.create')">Create</Link>
        </div>
    </Layout>
</template>
<script lang="ts">
    import useRoute from "@/scripts/composable/useRoute"
    import { Link } from "@inertiajs/inertia-vue3"
    import { defineComponent } from "@vue/runtime-core"
    import Layout from "../../../views/themes/Layout.vue"

    export default defineComponent({
        components: {
            Layout,
            Link,
        },
        setup() {
            const route = useRoute()

            return {
                route,
            }
        },
    })
</script>

