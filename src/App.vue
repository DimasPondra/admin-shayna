<script setup>
import { RouterLink, RouterView } from "vue-router";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
    <div class="screen-cover d-none d-xl-none"></div>

    <div class="row">
        <Sidebar />

        <RouterView />
    </div>
</template>
