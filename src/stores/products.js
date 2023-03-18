import axios from "axios";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import router from "../router";
import { useAuthStore } from "./auth";
import { useFileStore } from "./files";

export const useProductStore = defineStore("products", {
    state: () => ({
        products: [],
        product: {
            id: null,
            name: "",
            description: "",
            price: null,
            product_category_id: null,
            file_id: null,
        },
        pagination: {
            page: 1,
            total: 0,
            per_page: 5,
            option: {
                chunk: 3,
                chunksNavigation: "scroll",
                hideCount: true,
            },
        },
    }),
    actions: {
        async get(params) {
            this.clear();
            const auth = useAuthStore();

            const res = await axios.get("products", {
                params: params,
                headers: {
                    Authorization: auth.token,
                },
            });

            this.products = res.data.data;

            this.pagination.page = res.data.meta.current_page;
            this.pagination.total = res.data.meta.total;
            this.pagination.per_page = res.data.meta.per_page;
        },
        async show(id, params) {
            this.clear();
            const auth = useAuthStore();

            const res = await axios.get(`products/${id}/show`, {
                params: params,
                headers: {
                    Authorization: auth.token,
                },
            });

            this.product = res.data.data;
            this.product.price = parseInt(res.data.data.price);
            this.product.product_category_id = res.data.data.category.id;
            this.product.file_id = res.data.data.file.id;

            const file = useFileStore();
            file.file = res.data.data.file;
        },
        async save(data, id) {
            const auth = useAuthStore();
            const toast = useToast();

            try {
                if (id == null) {
                    await axios.post("products/store", data, {
                        headers: {
                            Authorization: auth.token,
                        },
                    });

                    toast.success("successfully created.");
                } else {
                    await axios.patch(`products/${id}/update`, data, {
                        headers: {
                            Authorization: auth.token,
                        },
                    });
                    toast.success("successfully updated.");
                }

                this.clear();
                router.push("/products");
            } catch (error) {
                const data = error.response.data;
                if (data.message != null) {
                    toast.error(data.message);
                }
            }
        },
        async delete(id) {
            const auth = useAuthStore();
            const toast = useToast();

            try {
                await axios.delete(`products/${id}/delete`, {
                    headers: {
                        Authorization: auth.token,
                    },
                });

                toast.success("successfully deleted.");
            } catch (error) {
                console.error(error);
            }
        },
        clear() {
            this.product = {
                id: null,
                name: "",
                description: "",
                price: null,
                product_category_id: null,
                file_id: null,
            };

            const file = useFileStore();
            file.$reset();
        },
    },
});