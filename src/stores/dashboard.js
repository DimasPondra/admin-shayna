import axios from "axios";
import { defineStore } from "pinia";
import { useAlertStore } from "./alert";
import { useAuthStore } from "./auth";

export const useDashboardStore = defineStore("dashboard", {
    state: () => ({
        dashboard: {},
    }),
    actions: {
        async get(params) {
            this.clear();
            const auth = useAuthStore();
            const alert = useAlertStore();

            try {
                const res = await axios.get("dashboard", {
                    headers: {
                        Authorization: auth.token,
                    },
                });

                this.dashboard = res.data.data;
            } catch (error) {
                alert.handleError(error);
            }
        },
        clear() {
            this.dashboard = {};
        },
    },
});
