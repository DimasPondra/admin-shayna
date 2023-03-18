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
import { mapActions, mapState } from "pinia";
import { useTransactionStore } from "../stores/transactions";

export default {
    computed: {
        ...mapState(useTransactionStore, ["transaction"]),
    },
    methods: {
        ...mapActions(useTransactionStore, ["save"]),
        async handleSubmit() {
            await this.save(this.transaction, this.$route.params.id);
        },
    },
};
</script>
