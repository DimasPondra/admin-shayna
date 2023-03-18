<template>
    <div class="col-12 statistics-card">
        <form @submit.prevent="handleSubmit">
            <div class="form-group mb-3">
                <label for="name" class="mb-2">
                    Name
                    <span class="required">*</span>
                </label>
                <input type="text" class="form-control" id="name" v-model="product.name" />
            </div>

            <div class="form-group mb-3">
                <label for="description" class="mb-2">
                    Description
                    <span class="required">*</span>
                </label>
                <textarea
                    class="form-control"
                    v-model="product.description"
                    id="description"
                    cols="30"
                    rows="10"
                ></textarea>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="type" class="mb-2">
                            Type
                            <span class="required">*</span>
                        </label>
                        <select v-model="product.product_category_id" id="type" class="form-select">
                            <option value="" disabled selected>Open this select menu</option>
                            <option
                                v-for="product_category in product_categories"
                                :key="product_category.id"
                                :value="product_category.id"
                                :selected="product.product_category_id == product_category.id"
                            >
                                {{ product_category.name }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="price" class="mb-2">
                            Price
                            <span class="required">*</span>
                        </label>
                        <input type="number" class="form-control" id="price" v-model="product.price" />
                    </div>
                </div>
            </div>

            <div v-if="file.id != null">
                <img :src="file.url" alt="image-blog" width="150" class="rounded" />
            </div>

            <div class="form-group mb-3">
                <label for="file" class="mb-2">
                    Image
                    <span v-show="product.id == null" class="required">*</span>
                </label>
                <input type="file" id="file" class="form-control" @change="handleUpload" />
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
import { useFileStore } from "../stores/files";
import { useProductStore } from "../stores/products";

export default {
    computed: {
        ...mapState(useProductCategoryStore, ["product_categories"]),
        ...mapState(useFileStore, ["file"]),
        ...mapState(useProductStore, ["product"]),
        params: function () {
            return {
                include: "category,file",
            };
        },
    },
    created() {
        this.loadProductCategories();
        if (this.$route.params.id != undefined) {
            this.loadProduct();
        }
    },
    methods: {
        ...mapActions(useProductCategoryStore, ["get"]),
        ...mapActions(useProductStore, ["show", "save"]),
        ...mapActions(useFileStore, ["upload"]),
        async loadProductCategories() {
            await this.get();
        },
        async loadProduct() {
            await this.show(this.$route.params.id, this.params);
        },
        async handleSubmit() {
            await this.save(this.product, this.$route.params.id);
        },
        async handleUpload(event) {
            let form = new FormData();
            let file = event.target.files;

            for (let i = 0; i < file.length; i++) {
                form.append(`files[${i}]`, file[i]);
            }

            form.append("folder_name", "products");

            await this.upload(form);
            this.product.file_id = await this.file.id;
        },
    },
};
</script>
