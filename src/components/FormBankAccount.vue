<template>
    <div class="col-12 statistics-card">
        <form @submit.prevent="handleSubmit">
            <div class="form-group mb-3">
                <label for="name" class="mb-2">
                    Name
                    <span class="required">*</span>
                </label>
                <input type="text" class="form-control" id="name" v-model="bank_account.name" />
            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="number" class="mb-2">
                            Number
                            <span class="required">*</span>
                        </label>
                        <input type="text" class="form-control" id="number" v-model="bank_account.number" />
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="bank" class="mb-2">
                            Bank
                            <span class="required">*</span>
                        </label>
                        <select v-model="bank_account.bank_id" id="bank" class="form-select">
                            <option value="" disabled selected>Open this select menu</option>
                            <option
                                v-for="bank in banks"
                                :key="bank.id"
                                :value="bank.id"
                                :selected="bank_account.bank_id == bank.id"
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

import { mapActions, mapState } from "pinia";
import { useBankStore } from "../stores/banks";
import { useBankAccountStore } from "../stores/bank-accounts";

export default {
    computed: {
        ...mapState(useBankStore, ["banks"]),
        ...mapState(useBankAccountStore, ["bank_account"]),
        params: function () {
            return {
                include: "bank",
            };
        },
    },
    async created() {
        this.loadBanks();
        if (this.$route.params.id != undefined) {
            this.loadBankAccount();
        }
    },
    methods: {
        ...mapActions(useBankStore, ["get"]),
        ...mapActions(useBankAccountStore, ["show", "save"]),
        async loadBanks() {
            await this.get();
        },
        async loadBankAccount() {
            await this.show(this.$route.params.id, this.params);
        },
        async handleSubmit() {
            await this.save(this.bank_account, this.$route.params.id);
        },
        clearForm() {
            this.bank_account = {};
        },
    },
};
</script>
