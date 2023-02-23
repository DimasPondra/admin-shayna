<template>
    <div class="col-12 col-xl-9">
        <Navbar :navbar="navbar" @clicked="$emit('hide', 'open')" />

        <div class="content">
            <div class="row">
                <div class="col-12">
                    <h2 class="content-title mb-4">Edit Bank</h2>
                </div>

                <FormBank />
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import FormBank from "../../components/FormBank.vue";

export default {
    components: {
        Navbar,
        FormBank,
    },
    data() {
        return {
            navbar: {
                title: "Bank",
                link: "/banks",
            },
        };
    },
    created() {
        document.title = `Admin Shayna - ${this.$route.meta.title}`;
    },
};
</script>
