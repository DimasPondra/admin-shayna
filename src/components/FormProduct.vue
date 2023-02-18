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

            <div v-if="file.url != ''">
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
import axios from "axios";
import { useToast } from "vue-toastification";
import { mapState } from "pinia";
import { useAuthStore } from "../stores/auth";

export default {
    data() {
        return {
            product: {
                id: null,
                name: "",
                description: "",
                price: null,
                product_category_id: "",
                file_id: null,
            },
            file: {
                id: null,
                url: "",
            },
            folder_name: "products",
            product_categories: [],
        };
    },
    computed: {
        ...mapState(useAuthStore, ["token"]),
    },
    created() {
        this.loadProductCategories();
        this.loadProduct();
    },
    methods: {
        async loadProduct() {
            if (this.$route.params.id != undefined) {
                const response = await axios.get(`products/${this.$route.params.id}/show`, {
                    headers: {
                        Authorization: this.token,
                    },
                });
                const data = response.data.data;

                this.product.id = data.id;
                this.product.name = data.name;
                this.product.description = data.description;
                this.product.price = parseInt(data.price);
                this.product.product_category_id = data.product_category_id;
                this.product.file_id = data.file_id;
                this.file.url = data.file_url;
            }
        },
        async loadProductCategories() {
            const response = await axios.get("product-categories", {
                headers: {
                    Authorization: this.token,
                },
            });
            this.product_categories = response.data.data;
        },
        async handleSubmit() {
            const toast = useToast();

            try {
                if (this.product.id == null) {
                    await axios.post("products/store", this.product, {
                        headers: {
                            Authorization: this.token,
                        },
                    });

                    toast.success("successfully created.");
                } else {
                    await axios.patch(`products/${this.$route.params.id}/update`, this.product, {
                        headers: {
                            Authorization: this.token,
                        },
                    });
                    toast.success("successfully updated.");
                }

                this.clearForm();
                this.$router.push("/products");
            } catch (error) {
                const data = error.response.data;
                if (data.message != null) {
                    toast.error(data.message);
                }
            }
        },
        clearForm() {
            this.product.id = null;
            this.product.name = "";
            this.product.description = "";
            this.product.price = null;
            this.product.product_category_id = null;
            this.product.file_id = null;

            this.file.id = null;
            this.file.url = "";
        },
        async handleUpload(event) {
            const toast = useToast();

            let form = new FormData();
            let file = event.target.files;

            for (let i = 0; i < file.length; i++) {
                form.append(`files[${i}]`, file[i]);
            }

            form.append("folder_name", this.folder_name);

            try {
                const response = await axios.post("files/store", form, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: this.token,
                    },
                });

                this.file = response.data.data[0];
                this.product.file_id = this.file.id;

                toast.success("image successfully uploaded.");
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
