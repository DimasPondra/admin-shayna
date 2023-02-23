<template>
    <div class="col-12 statistics-card">
        <form @submit.prevent="handleSubmit">
            <div class="form-group mb-3">
                <label for="name" class="mb-2">
                    Name
                    <span class="required">*</span>
                </label>
                <input type="text" class="form-control" id="name" v-model="bank.name" />
            </div>

            <div class="d-flex justify-content-end">
                <button class="btn btn-sm btn-success">Save</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";
import { mapState } from "pinia";
import { useAuthStore } from "../stores/auth";

export default {
    data() {
        return {
            bank: {
                id: null,
                name: "",
            },
        };
    },
    computed: {
        ...mapState(useAuthStore, ["token"]),
    },
    async created() {
        if (this.$route.params.id != undefined) {
            const response = await axios.get(`banks/${this.$route.params.id}/show`, {
                headers: {
                    Authorization: this.token,
                },
            });
            const data = response.data.data;

            this.bank.id = data.id;
            this.bank.name = data.name;
        }
    },
    methods: {
        async handleSubmit() {
            const toast = useToast();

            try {
                if (this.bank.id == null) {
                    await axios.post("banks/store", this.bank, {
                        headers: {
                            Authorization: this.token,
                        },
                    });

                    toast.success("successfully created.");
                } else {
                    await axios.patch(`banks/${this.$route.params.id}/update`, this.bank, {
                        headers: {
                            Authorization: this.token,
                        },
                    });

                    toast.success("successfully updated.");
                }

                this.clearForm();
                this.$router.push("/banks");
            } catch (error) {
                const data = error.response.data;
                if (data.message != null) {
                    toast.error(data.message);
                }
            }
        },
        clearForm() {
            this.bank.id = null;
            this.bank.name = "";
        },
    },
};
</script>
