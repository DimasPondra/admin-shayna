import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import router from "../router";
import { useAuthStore } from "./auth";

export const useAlertStore = defineStore("alerts", {
    state: () => ({
        code: null,
        message: "",
    }),
    actions: {
        handleSuccess(message) {
            const toast = useToast();

            this.message = message;
            toast.success(this.message);
        },
        handleError(error) {
            const toast = useToast();

            this.code = error.response.status;
            this.message = error.response.data.message;

            if (this.code == 400) {
                toast.error(this.message);
            } else if (this.code == 401) {
                toast.error(this.message);

                const auth = useAuthStore();
                auth.$reset();

                router.push("/login");
            } else if (this.code == 403) {
                toast.error(this.message);
            } else if (this.code == 404) {
                router.push("/404");
            } else if (this.code == 422) {
                toast.error(this.message);
            }
        },
    },
});
