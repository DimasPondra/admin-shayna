import { defineStore } from "pinia";
import axios from "axios";
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
            const alert = useAlertStore();

            try {
                const response = await axios.post("login", user);
                this.token = "Bearer " + response.data.access_token;

                alert.handleSuccess("welcome.");
                router.push("/");
            } catch (error) {
                alert.handleError(error);
            }
        },

        async logout() {
            const alert = useAlertStore();

            try {
                await axios.post("logout", "", {
                    headers: {
                        Authorization: this.token,
                    },
                });

                alert.handleSuccess("Logged out successfully.");
                this.token = null;
                router.push("/login");
            } catch (error) {
                alert.handleError(error);
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
