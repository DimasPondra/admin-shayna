<template>
    <div class="row d-flex justify-content-center h-100 mt-5">
        <div class="col-10 col-md-6 col-lg-4">
            <div class="alert alert-warning" role="alert">
                <h5>Account !</h5>
                <p class="mb-0"><small>Email: admin@shayna.com</small></p>
                <p class="mb-0"><small>Password: secret</small></p>
            </div>
            <div class="statistics-card">
                <form @submit.prevent="handleSubmit">
                    <div class="form-group mb-3">
                        <label for="email" class="mb-2">
                            Email
                            <span class="required">*</span>
                        </label>
                        <input type="email" class="form-control" id="email" v-model="credential.email" />
                    </div>

                    <div class="form-group mb-3">
                        <label for="password" class="mb-2">
                            Password
                            <span class="required">*</span>
                        </label>
                        <input type="password" class="form-control" id="password" v-model="credential.password" />
                    </div>

                    <div class="d-flex justify-content-end">
                        <button class="btn btn-sm btn-success">Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "pinia";
import { useAuthStore } from "../stores/auth";

export default {
    data() {
        return {
            credential: {
                email: "",
                password: "",
            },
        };
    },
    created() {
        document.title = `Admin Shayna - ${this.$route.meta.title}`;
    },
    methods: {
        ...mapActions(useAuthStore, ["login"]),
        async handleSubmit() {
            await this.login(this.credential);
        },
        clearForm() {
            this.credential.email = "";
            this.credential.password = "";
        },
    },
};
</script>
