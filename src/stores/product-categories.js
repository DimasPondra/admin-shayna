import axios from "axios";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import router from "../router";
import { useAuthStore } from "./auth";

export const useProductCategoryStore = defineStore("product-categories", {
    state: () => ({
        product_categories: [],
        product_category: {
            id: null,
            name: "",
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

            const res = await axios.get("product-categories", {
                params: params,
                headers: {
                    Authorization: auth.token,
                },
            });

            this.product_categories = res.data.data;

            if (res.data.meta != null) {
                this.pagination.page = res.data.meta.current_page;
                this.pagination.total = res.data.meta.total;
                this.pagination.per_page = res.data.meta.per_page;
            }
        },
        async show(id) {
            this.clear();
            const auth = useAuthStore();

            const res = await axios.get(`product-categories/${id}/show`, {
                headers: {
                    Authorization: auth.token,
                },
            });

            this.product_category = res.data.data;
        },
        async save(data, id) {
            const auth = useAuthStore();
            const toast = useToast();

            try {
                if (id == null) {
                    await axios.post("product-categories/store", data, {
                        headers: {
                            Authorization: auth.token,
                        },
                    });

                    toast.success("successfully created.");
                } else {
                    await axios.patch(`product-categories/${id}/update`, data, {
                        headers: {
                            Authorization: auth.token,
                        },
                    });

                    toast.success("successfully updated.");
                }

                this.clear();
                router.push("/product-categories");
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
                await axios.delete(`product-categories/${id}/delete`, {
                    headers: {
                        Authorization: auth.token,
                    },
                });

                toast.success("successfully deleted.");
            } catch (error) {
                console.log(error);
            }
        },
        clear() {
            this.product_category.id = null;
            this.product_category.name = "";
        },
    },
});
