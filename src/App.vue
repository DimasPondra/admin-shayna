<script setup>
import { RouterLink, RouterView } from "vue-router";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
    <div class="screen-cover d-xl-none" :class="cover"></div>

    <div class="row">
        <Sidebar :navbar="navbar" @closed="toggleNavbar" />

        <RouterView @clicked="toggleNavbar" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            cover: "d-none",
            navbar: "d-none",
        };
    },
    methods: {
        toggleNavbar(value) {
            if (value == "open") {
                this.cover = "";
                this.navbar = "";
            } else {
                this.cover = "d-none";
                this.navbar = "d-none";
            }
        },
    },
};
</script>
