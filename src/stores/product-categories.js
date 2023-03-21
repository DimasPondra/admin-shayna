import axios from "axios";
import { defineStore } from "pinia";
import router from "../router";
import { useAlertStore } from "./alert";
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
            const alert = useAlertStore();

            try {
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
            } catch (error) {
                alert.handleError(error);
            }
        },
        async show(id) {
            this.clear();
            const auth = useAuthStore();
            const alert = useAlertStore();

            try {
                const res = await axios.get(`product-categories/${id}/show`, {
                    headers: {
                        Authorization: auth.token,
                    },
                });

                this.product_category = res.data.data;
            } catch (error) {
                alert.handleError(error);
            }
        },
        async save(data, id) {
            const auth = useAuthStore();
            const alert = useAlertStore();

            try {
                if (id == null) {
                    await axios.post("product-categories/store", data, {
                        headers: {
                            Authorization: auth.token,
                        },
                    });

                    alert.handleSuccess("successfully created.");
                } else {
                    await axios.patch(`product-categories/${id}/update`, data, {
                        headers: {
                            Authorization: auth.token,
                        },
                    });

                    alert.handleSuccess("successfully updated.");
                }

                this.clear();
                router.push("/product-categories");
            } catch (error) {
                alert.handleError(error);
            }
        },
        async delete(id) {
            const auth = useAuthStore();
            const alert = useAlertStore();

            try {
                await axios.delete(`product-categories/${id}/delete`, {
                    headers: {
                        Authorization: auth.token,
                    },
                });

                alert.handleSuccess("successfully deleted.");
            } catch (error) {
                alert.handleError(error);
            }
        },
        clear() {
            this.product_category = {
                id: null,
                name: "",
            };
        },
    },
});
