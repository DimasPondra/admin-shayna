import axios from "axios";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import { useAuthStore } from "./auth";

export const useFileStore = defineStore("files", {
    state: () => ({
        file: {},
    }),
    actions: {
        async upload(data) {
            const auth = useAuthStore();
            const toast = useToast();

            try {
                const res = await axios.post("files/store", data, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: auth.token,
                    },
                });

                this.file = res.data.data[0];

                toast.success("image successfully uploaded.");
            } catch (error) {
                console.log(error);
            }
        },
    },
});
