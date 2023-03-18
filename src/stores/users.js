import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const useUserStore = defineStore("users", {
    state: () => ({
        users: [],
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

            const res = await axios.get("users", {
                params: params,
                headers: {
                    Authorization: auth.token,
                },
            });

            this.users = res.data.data;

            this.pagination.page = res.data.meta.current_page;
            this.pagination.total = res.data.meta.total;
            this.pagination.per_page = res.data.meta.per_page;
        },
    },
});
