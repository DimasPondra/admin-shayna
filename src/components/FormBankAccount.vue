<template>
    <div class="col-12 statistics-card">
        <form @submit.prevent="handleSubmit">
            <div class="form-group mb-3">
                <label for="name" class="mb-2">
                    Name
                    <span class="required">*</span>
                </label>
                <input type="text" class="form-control" id="name" v-model="bankAccount.name" />
            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="number" class="mb-2">
                            Number
                            <span class="required">*</span>
                        </label>
                        <input type="text" class="form-control" id="number" v-model="bankAccount.number" />
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="bank" class="mb-2">
                            Bank
                            <span class="required">*</span>
                        </label>
                        <select v-model="bankAccount.bank_id" id="bank" class="form-select">
                            <option value="" disabled selected>Open this select menu</option>
                            <option
                                v-for="bank in banks"
                                :key="bank.id"
                                :value="bank.id"
                                :selected="bankAccount.bank_id == bank.id"
                            >
                                {{ bank.name }}
                            </option>
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
            bankAccount: {
                id: null,
                name: "",
                number: "",
                bank_id: 0,
            },
            banks: [],
        };
    },
    computed: {
        params: function () {
            return {
                include: "bank",
            };
        },
        ...mapState(useAuthStore, ["token"]),
    },
    async created() {
        if (this.$route.params.id != undefined) {
            const response = await axios.get(`bank-accounts/${this.$route.params.id}/show`, {
                params: this.params,
                headers: {
                    Authorization: this.token,
                },
            });
            const data = response.data.data;

            this.bankAccount.id = data.id;
            this.bankAccount.name = data.name;
            this.bankAccount.number = data.number;
            this.bankAccount.bank_id = data.bank.id;
        }
        this.loadBanks();
    },
    methods: {
        async handleSubmit() {
            const toast = useToast();

            try {
                if (this.bankAccount.id == null) {
                    await axios.post("bank-accounts/store", this.bankAccount, {
                        headers: {
                            Authorization: this.token,
                        },
                    });

                    toast.success("successfully created.");
                } else {
                    await axios.patch(`bank-accounts/${this.$route.params.id}/update`, this.bankAccount, {
                        headers: {
                            Authorization: this.token,
                        },
                    });

                    toast.success("successfully updated.");
                }

                this.clearForm();
                this.$router.push("/bank-accounts");
            } catch (error) {
                const data = error.response.data;
                if (data.message != null) {
                    toast.error(data.message);
                }
            }
        },
        clearForm() {
            this.bankAccount.id = null;
            this.bankAccount.name = "";
        },
        async loadBanks() {
            const response = await axios.get("banks", {
                headers: {
                    Authorization: this.token,
                },
            });

            this.banks = response.data.data;
        },
    },
};
</script>
