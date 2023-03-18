import axios from "axios";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import router from "../router";
import { useAuthStore } from "./auth";

export const useTransactionStore = defineStore("transactions", {
    state: () => ({
        transactions: [],
        transaction: {
            id: null,
            uuid: "",
            sub_total: "",
            total: "",
            current_status: "",
            user: {
                name: "",
                email: "",
            },
            details: [],
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

            const res = await axios.get("transactions", {
                params: params,
                headers: {
                    Authorization: auth.token,
                },
            });

            this.transactions = res.data.data;

            this.pagination.page = res.data.meta.current_page;
            this.pagination.total = res.data.meta.total;
            this.pagination.per_page = res.data.meta.per_page;
        },
        async show(id, params) {
            this.clear();
            const auth = useAuthStore();

            const res = await axios.get(`transactions/${id}/show`, {
                params: params,
                headers: {
                    Authorization: auth.token,
                },
            });

            this.transaction = res.data.data;
            this.transaction.current_status = res.data.data.status;
            this.transaction.details = res.data.data.transaction_details;
        },
        async save(data, id) {
            const auth = useAuthStore();
            const toast = useToast();

            try {
                await axios.patch(`transactions/${id}/update`, data, {
                    headers: {
                        Authorization: auth.token,
                    },
                });

                toast.success("successfully updated.");

                this.clear();
                router.push("/transactions");
            } catch (error) {
                const data = error.response.data;
                if (data.message != null) {
                    toast.error(data.message);
                }
            }
        },
        clear() {
            this.transaction = {
                id: null,
                uuid: "",
                sub_total: "",
                total: "",
                current_status: "",
                user: {
                    name: "",
                    email: "",
                },
                details: [],
            };
        },
    },
});
