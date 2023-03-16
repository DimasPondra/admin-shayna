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
import { mapActions, mapState } from "pinia";
import { useBankStore } from "../stores/banks";

export default {
    computed: {
        ...mapState(useBankStore, ["bank"]),
    },
    async created() {
        if (this.$route.params.id != undefined) {
            this.loadBank();
        }
    },
    methods: {
        ...mapActions(useBankStore, ["show", "save"]),
        async loadBank() {
            await this.show(this.$route.params.id);
        },
        async handleSubmit() {
            await this.save(this.bank, this.$route.params.id);

            this.clearForm();
        },
        clearForm() {
            this.bank.id = null;
            this.bank.name = "";
        },
    },
};
</script>
