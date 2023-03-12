<template>
    <div class="col-12 col-xl-9">
        <Navbar :navbar="navbar" @clicked="$emit('hide', 'open')" />

        <div class="content">
            <div class="row">
                <div class="col-12">
                    <h2 class="content-title mb-4">Create Banner</h2>
                </div>

                <FormBanner />
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import FormBanner from "../../components/FormBanner.vue";

export default {
    components: {
        Navbar,
        FormBanner,
    },
    data() {
        return {
            navbar: {
                title: "Banner",
                link: "/banners",
            },
        };
    },
    created() {
        document.title = `Admin Shayna - ${this.$route.meta.title}`;
    },
};
</script>
