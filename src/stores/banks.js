import axios from "axios";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import { useAuthStore } from "./auth";
import router from "../router";

export const useBankStore = defineStore("banks", {
    state: () => ({
        banks: [],
        bank: {
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
            const auth = useAuthStore();

            const res = await axios.get("banks", {
                params: params,
                headers: {
                    Authorization: auth.token,
                },
            });

            this.banks = res.data.data;

            if (res.data.meta != null) {
                this.pagination.page = res.data.meta.current_page;
                this.pagination.total = res.data.meta.total;
                this.pagination.per_page = res.data.meta.per_page;
            }
        },
        async show(id) {
            const auth = useAuthStore();

            const res = await axios.get(`banks/${id}/show`, {
                headers: {
                    Authorization: auth.token,
                },
            });

            this.bank = res.data.data;
        },
        async save(data, id) {
            const auth = useAuthStore();
            const toast = useToast();

            try {
                if (id == null) {
                    await axios.post("banks/store", data, {
                        headers: {
                            Authorization: auth.token,
                        },
                    });

                    toast.success("successfully created.");
                } else {
                    await axios.patch(`banks/${id}/update`, data, {
                        headers: {
                            Authorization: auth.token,
                        },
                    });

                    toast.success("successfully updated.");
                }

                router.push("/banks");
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
                await axios.delete(`banks/${id}/delete`, {
                    headers: {
                        Authorization: auth.token,
                    },
                });

                toast.success("successfully deleted.");
            } catch (error) {
                console.log(error);
            }
        },
    },
});