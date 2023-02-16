<template>
    <section v-if="this.$route.meta.name_page == 'login'">
        <LayoutDefault />
    </section>
    <section v-else>
        <LayoutDashboard />
    </section>
</template>

<script>
import LayoutDefault from "./components/LayoutDefault.vue";
import LayoutDashboard from "./components/LayoutDashboard.vue";

export default {
    components: {
        LayoutDefault,
        LayoutDashboard,
    },
};
</script>
