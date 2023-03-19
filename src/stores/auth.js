import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";
import router from "../router";
import SecureLS from "secure-ls";
import { useAlertStore } from "./alert";

const secureLS = new SecureLS({
    encodingType: "aes",
    encryptionSecret: "oktafianto",
});

export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: null,
    }),
    actions: {
        async login(user) {
            const toast = useToast();
            const alert = useAlertStore();

            try {
                const response = await axios.post("login", user);
                this.token = "Bearer " + response.data.access_token;

                toast.success("welcome.");
                router.push("/");
            } catch (error) {
                alert.handle(error);
            }
        },

        async logout() {
            const toast = useToast();
            const alert = useAlertStore();

            try {
                await axios.post("logout", "", {
                    headers: {
                        Authorization: this.token,
                    },
                });

                toast.success("Logged out successfully.");
                this.token = null;
                router.push("/login");
            } catch (error) {
                alert.handle(error);
            }
        },
    },
    persist: {
        key: "token",
        paths: ["token"],
        storage: {
            getItem: (key) => secureLS.get(key),
            setItem: (key, value) => secureLS.set(key, value),
        },
    },
});
