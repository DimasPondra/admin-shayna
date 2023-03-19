<template>
    <div class="col-12 col-xl-9">
        <Navbar :navbar="navbar" @clicked="$emit('hide', 'open')" />
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
    components: {
        Navbar,
    },
    data() {
        return {
            navbar: {
                title: "Not Found",
                link: null,
            },
        };
    },
    created() {
        document.title = `Admin Shayna - ${this.$route.meta.title}`;
    },
    methods: {
        toggleNavbar() {
            this.$emit("clicked", "open");
        },
    },
};
</script>
