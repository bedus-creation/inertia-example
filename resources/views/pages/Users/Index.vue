<template>
  <Layout>
    <div class="bg-blue-500 text-white">
      <Link :href="route('users.create')">Create</Link>
    </div>
    <Datepicker />
  </Layout>
</template>
<script lang="ts">
import useRoute from "@/scripts/composable/useRoute";
import { Link } from "@inertiajs/inertia-vue3";
import { defineComponent } from "@vue/runtime-core";
import Layout from "../../../views/themes/Layout.vue";
import DatePicker from "vue-datepicker-next";
import "vue-datepicker-next/index.css";

export default defineComponent({
  components: {
    Layout,
    Link,
    DatePicker,
  },
  setup() {
    const route = useRoute();

    return {
      route,
    };
  },
});
</script>

