<template>
    <div class="col-12 mt-3">
        <form @submit.prevent="handleSubmit">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="status" class="mb-2"> Status </label>
                        <select v-model="transaction.status" id="bank" class="form-select">
                            <option value="" disabled selected>Open this select menu</option>
                            <option value="success">Success</option>
                            <option value="canceled">Canceled</option>
                        </select>
                    </div>
                </div>
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
            transaction: {
                status: null,
            },
        };
    },
    computed: {
        ...mapState(useAuthStore, ["token"]),
    },
    methods: {
        async handleSubmit() {
            const toast = useToast();

            try {
                await axios.patch(`transactions/${this.$route.params.id}/update`, this.transaction, {
                    headers: {
                        Authorization: this.token,
                    },
                });

                toast.success("successfully updated.");
                this.$router.push("/transactions");
            } catch (error) {
                const data = error.response.data;
                if (data.message != null) {
                    toast.error(data.message);
                }
            }
        },
    },
};
</script>
