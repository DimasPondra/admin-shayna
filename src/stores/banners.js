import axios from "axios";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import { useAuthStore } from "./auth";
import router from "../router";
import { useFileStore } from "./files";

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
        },
        async save(data) {
            const auth = useAuthStore();
            const toast = useToast();

            try {
                await axios.post("banners/store", data, {
                    headers: {
                        Authorization: auth.token,
                    },
                });

                toast.success("successfully created.");

                this.clear();
                router.push("/banners");
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
                await axios.delete(`banners/${id}/delete`, {
                    headers: {
                        Authorization: auth.token,
                    },
                });

                toast.success("successfully deleted.");
            } catch (error) {
                const data = error.response.data;
                if (data.message != null) {
                    toast.error(data.message);
                }
            }
        },
        clear() {
            this.banner.name = "";
            this.banner.description = "";
            this.banner.file_id = null;

            const file = useFileStore();
            file.$reset();
        },
    },
});
