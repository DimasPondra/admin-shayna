<template>
    <div class="col-12 statistics-card">
        <form @submit.prevent="handleSubmit">
            <div class="form-group mb-3">
                <label for="name" class="mb-2">
                    Name
                    <span class="required">*</span>
                </label>
                <input type="text" class="form-control" id="name" v-model="product_category.name" />
            </div>

            <div class="d-flex justify-content-end">
                <button class="btn btn-sm btn-success">Save</button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useProductCategoryStore } from "../stores/product-categories";

export default {
    computed: {
        ...mapState(useProductCategoryStore, ["product_category"]),
    },
    created() {
        if (this.$route.params.id != undefined) {
            this.loadProductCategory();
        }
    },
    methods: {
        ...mapActions(useProductCategoryStore, ["show", "save"]),
        async loadProductCategory() {
            await this.show(this.$route.params.id);
        },
        async handleSubmit() {
            await this.save(this.product_category, this.$route.params.id);
        },
    },
};
</script>
