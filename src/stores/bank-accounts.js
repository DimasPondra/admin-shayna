import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth";
import router from "../router";
import { useAlertStore } from "./alert";

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
            const alert = useAlertStore();

            try {
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
            } catch (error) {
                alert.handleError(error);
            }
        },
        async show(id, params) {
            this.clear();
            const auth = useAuthStore();
            const alert = useAlertStore();

            try {
                const res = await axios.get(`bank-accounts/${id}/show`, {
                    params: params,
                    headers: {
                        Authorization: auth.token,
                    },
                });

                this.bank_account = res.data.data;
                this.bank_account.bank_id = res.data.data.bank.id;
            } catch (error) {
                alert.handleError(error);
            }
        },
        async save(data, id) {
            const auth = useAuthStore();
            const alert = useAlertStore();

            try {
                if (id == null) {
                    await axios.post("bank-accounts/store", data, {
                        headers: {
                            Authorization: auth.token,
                        },
                    });

                    alert.handleSuccess("successfully created.");
                } else {
                    await axios.patch(`bank-accounts/${id}/update`, data, {
                        headers: {
                            Authorization: auth.token,
                        },
                    });

                    alert.handleSuccess("successfully updated.");
                }

                this.clear();
                router.push("/bank-accounts");
            } catch (error) {
                alert.handleError(error);
            }
        },
        async delete(id) {
            const auth = useAuthStore();
            const alert = useAlertStore();

            try {
                await axios.delete(`bank-accounts/${id}/delete`, {
                    headers: {
                        Authorization: auth.token,
                    },
                });

                alert.handleSuccess("successfully deleted.");
            } catch (error) {
                alert.handleError(error);
            }
        },
        async changeStatus(id) {
            const auth = useAuthStore();
            const alert = useAlertStore();

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

                alert.handleSuccess("successfully updated.");
            } catch (error) {
                alert.handleError(error);
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
