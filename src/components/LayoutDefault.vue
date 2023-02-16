<template>
    <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
    components: {
        RouterLink,
        RouterView,
    },
};
</script>
