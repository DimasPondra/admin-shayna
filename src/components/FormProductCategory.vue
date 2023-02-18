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
import axios from "axios";
import { useToast } from "vue-toastification";
import { mapState } from "pinia";
import { useAuthStore } from "../stores/auth";

export default {
    data() {
        return {
            product_category: {
                id: null,
                name: "",
            },
        };
    },
    computed: {
        ...mapState(useAuthStore, ["token"]),
    },
    async created() {
        if (this.$route.params.id != undefined) {
            const response = await axios.get(`product-categories/${this.$route.params.id}/show`, {
                headers: {
                    Authorization: this.token,
                },
            });
            const data = response.data.data;

            this.product_category.id = data.id;
            this.product_category.name = data.name;
        }
    },
    methods: {
        async handleSubmit() {
            const toast = useToast();

            try {
                if (this.product_category.id == null) {
                    await axios.post("product-categories/store", this.product_category, {
                        headers: {
                            Authorization: this.token,
                        },
                    });

                    toast.success("successfully created.");
                } else {
                    await axios.patch(`product-categories/${this.$route.params.id}/update`, this.product_category, {
                        headers: {
                            Authorization: this.token,
                        },
                    });

                    toast.success("successfully updated.");
                }

                this.clearForm();
                this.$router.push("/product-categories");
            } catch (error) {
                const data = error.response.data;
                if (data.message != null) {
                    toast.error(data.message);
                }
            }
        },
        clearForm() {
            this.product_category.id = null;
            this.product_category.name = "";
        },
    },
};
</script>
