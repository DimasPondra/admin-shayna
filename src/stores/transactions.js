import axios from "axios";
import { defineStore } from "pinia";
import router from "../router";
import { useAlertStore } from "./alert";
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
            const alert = useAlertStore();

            try {
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
            } catch (error) {
                alert.handleError(error);
            }
        },
        async show(id, params) {
            this.clear();
            const auth = useAuthStore();
            const alert = useAlertStore();

            try {
                const res = await axios.get(`transactions/${id}/show`, {
                    params: params,
                    headers: {
                        Authorization: auth.token,
                    },
                });

                this.transaction = res.data.data;
                this.transaction.current_status = res.data.data.status;
                this.transaction.details = res.data.data.transaction_details;
            } catch (error) {
                alert.handleError(error);
            }
        },
        async save(data, id) {
            const auth = useAuthStore();
            const alert = useAlertStore();

            try {
                await axios.patch(`transactions/${id}/update`, data, {
                    headers: {
                        Authorization: auth.token,
                    },
                });

                alert.handleSuccess("successfully updated.");

                this.clear();
                router.push("/transactions");
            } catch (error) {
                alert.handleError(error);
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
