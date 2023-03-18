import axios from "axios";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import { useAuthStore } from "./auth";
import router from "../router";

export const useBankAccountStore = defineStore("bank-accounts", {
    state: () => ({
        bank_accounts: [],
        bank_account: {
            id: null,
            name: "",
            number: "",
            bank_id: null,
            bank: {
                id: null,
                name: "",
            },
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

            const res = await axios.get("bank-accounts", {
                params: params,
                headers: {
                    Authorization: auth.token,
                },
            });

            this.bank_accounts = res.data.data;
            this.pagination.page = res.data.meta.current_page;
            this.pagination.total = res.data.meta.total;
            this.pagination.per_page = res.data.meta.per_page;
        },
        async show(id, params) {
            this.clear();
            const auth = useAuthStore();

            const res = await axios.get(`bank-accounts/${id}/show`, {
                params: params,
                headers: {
                    Authorization: auth.token,
                },
            });

            this.bank_account = res.data.data;
            this.bank_account.bank_id = res.data.data.bank.id;
        },
        async save(data, id) {
            const auth = useAuthStore();
            const toast = useToast();

            try {
                if (id == null) {
                    await axios.post("bank-accounts/store", data, {
                        headers: {
                            Authorization: auth.token,
                        },
                    });

                    toast.success("successfully created.");
                } else {
                    await axios.patch(`bank-accounts/${id}/update`, data, {
                        headers: {
                            Authorization: auth.token,
                        },
                    });

                    toast.success("successfully updated.");
                }

                this.clear();
                router.push("/bank-accounts");
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
                await axios.delete(`bank-accounts/${id}/delete`, {
                    headers: {
                        Authorization: auth.token,
                    },
                });

                toast.success("successfully deleted.");
            } catch (error) {
                console.log(error);
            }
        },
        async changeStatus(id) {
            const auth = useAuthStore();
            const toast = useToast();

            try {
                await axios.patch(
                    `bank-accounts/${id}/change-status`,
                    {},
                    {
                        headers: {
                            Authorization: auth.token,
                        },
                    }
                );

                toast.success("successfully updated.");
            } catch (error) {
                const data = error.response.data;
                if (data.message != null) {
                    toast.error(data.message);
                }
            }
        },
        clear() {
            this.bank_account = {
                id: null,
                name: "",
                number: "",
                bank_id: null,
                bank: {
                    id: null,
                    name: "",
                },
            };
        },
    },
});
