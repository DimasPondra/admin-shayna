<template>
    <div class="col-12 col-xl-9">
        <Navbar :navbar="navbar" @clicked="$emit('hide', 'open')" />

        <div class="content">
            <div class="row">
                <div class="col-12">
                    <h2 class="content-title mb-4">Create Product</h2>
                </div>

                <form-product></form-product>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import FormProduct from "../../components/FormProduct.vue";

export default {
    components: {
        Navbar,
        FormProduct,
    },
    data() {
        return {
            navbar: {
                title: "Product",
                link: "/products",
            },
        };
    },
    created() {
        document.title = `Admin Shayna - ${this.$route.meta.title}`;
    },
};
</script>
