<template>
    <div class="col-12 col-xl-9">
        <div class="nav">
            <div class="d-flex justify-content-between align-items-center w-100 mb-3 mb-md-0">
                <div class="d-flex justify-content-start align-items-center">
                    <button id="toggle-navbar" onclick="toggleNavbar()">
                        <img src="" class="mb-2" alt="icon" />
                    </button>
                    <h2 class="nav-title">
                        <router-link to="/product-categories">Product Category</router-link>
                    </h2>
                </div>
            </div>
        </div>

        <div class="content">
            <div class="row">
                <div class="col-12">
                    <h2 class="content-title mb-4">Create Product Category</h2>
                </div>

                <form-product-category></form-product-category>
            </div>
        </div>
    </div>
</template>

<script>
import FormProductCategory from "../../components/FormProductCategory.vue";

export default {
    components: {
        FormProductCategory,
    },
};
</script>
