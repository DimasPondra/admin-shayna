import axios from "axios";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import router from "../router";
import { useAlertStore } from "./alert";
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
            const alert = useAlertStore();

            try {
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
            } catch (error) {
                alert.handleError(error);
            }
        },
        async show(id, params) {
            this.clear();
            const auth = useAuthStore();
            const alert = useAlertStore();

            try {
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
            } catch (error) {
                alert.handleError(error);
            }
        },
        async save(data, id) {
            const auth = useAuthStore();
            const alert = useAlertStore();

            try {
                if (id == null) {
                    await axios.post("products/store", data, {
                        headers: {
                            Authorization: auth.token,
                        },
                    });

                    alert.handleSuccess("successfully created.");
                } else {
                    await axios.patch(`products/${id}/update`, data, {
                        headers: {
                            Authorization: auth.token,
                        },
                    });

                    alert.handleSuccess("successfully updated.");
                }

                this.clear();
                router.push("/products");
            } catch (error) {
                alert.handleError(error);
            }
        },
        async delete(id) {
            const auth = useAuthStore();
            const alert = useAlertStore();

            try {
                await axios.delete(`products/${id}/delete`, {
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
