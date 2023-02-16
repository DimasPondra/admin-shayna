<template>
    <div class="col-12 col-xl-9">
        <Navbar :navbar="navbar" @clicked="$emit('hide', 'open')" />

        <div class="content">
            <div class="row">
                <div class="col-12">
                    <h2 class="content-title mb-4">Create Product Category</h2>
                </div>

                <FormProductCategory />
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import FormProductCategory from "../../components/FormProductCategory.vue";

export default {
    components: {
        Navbar,
        FormProductCategory,
    },
    data() {
        return {
            navbar: {
                title: "Product Category",
                link: "/product-categories",
            },
        };
    },
    created() {
        document.title = `Admin Shayna - ${this.$route.meta.title}`;
    },
};
</script>
