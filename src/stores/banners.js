import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth";
import router from "../router";
import { useFileStore } from "./files";
import { useAlertStore } from "./alert";

export const useBannerStore = defineStore("banners", {
    state: () => ({
        banners: [],
        banner: {
            name: "",
            description: "",
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
                const res = await axios.get("banners", {
                    params: params,
                    headers: {
                        Authorization: auth.token,
                    },
                });

                this.banners = res.data.data;

                this.pagination.page = res.data.meta.current_page;
                this.pagination.total = res.data.meta.total;
                this.pagination.per_page = res.data.meta.per_page;
            } catch (error) {
                alert.handleError(error);
            }
        },
        async save(data) {
            const auth = useAuthStore();
            const alert = useAlertStore();

            try {
                await axios.post("banners/store", data, {
                    headers: {
                        Authorization: auth.token,
                    },
                });

                alert.handleSuccess("successfully created.");

                this.clear();
                router.push("/banners");
            } catch (error) {
                alert.handleError(error);
            }
        },
        async delete(id) {
            const auth = useAuthStore();
            const alert = useAlertStore();

            try {
                await axios.delete(`banners/${id}/delete`, {
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
            this.banner = {
                name: "",
                description: "",
                file_id: null,
            };

            const file = useFileStore();
            file.$reset();
        },
    },
});
