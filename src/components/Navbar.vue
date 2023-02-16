<template>
    <div class="nav">
        <div class="d-flex justify-content-between align-items-center w-100 mb-3 mb-md-0">
            <div class="d-flex justify-content-start align-items-center">
                <button id="toggle-navbar" @click="toggleNavbar()">
                    <font-awesome-icon icon="fa-solid fa-bars" />
                </button>
                <h2 class="nav-title" v-if="navbar.link != null">
                    <router-link :to="navbar.link">{{ navbar.title }}</router-link>
                </h2>
                <h2 class="nav-title" v-else>
                    {{ navbar.title }}
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        navbar: Object,
    },
    methods: {
        toggleNavbar() {
            this.$emit("clicked", "open");
        },
    },
};
</script>
