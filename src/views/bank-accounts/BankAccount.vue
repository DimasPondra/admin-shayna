<template>
    <div class="col-12 col-xl-9">
        <Navbar :navbar="navbar" @clicked="$emit('hide', 'open')" />

        <div class="content">
            <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <h2 class="content-title mb-4">List Bank Account</h2>
                    <div class="btn mb-2 mb-md-0">
                        <router-link to="/bank-accounts/create" class="btn btn-sm btn-primary"
                            >Add new bank account</router-link
                        >
                    </div>
                </div>

                <div class="col-12 search-menu mb-4">
                    <div class="row d-flex">
                        <div class="col-12 col-md-3 d-flex">
                            <input
                                type="text"
                                class="form-control border-0 shadow-sm"
                                v-model="filter_name"
                                placeholder="Search name"
                            />
                        </div>
                    </div>
                </div>

                <div class="col-12">
                    <div class="statistics-card">
                        <div class="table-responsive">
                            <TableBankAccount
                                :bank_accounts="bank_accounts"
                                @delete_bank_account="handleDelete"
                                @change_status="handleChangeStatus"
                            />

                            <Pagination :pagination="pagination" @current_page="changePage" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "@popperjs/core";
import "bootstrap/dist/js/bootstrap.bundle";

import Navbar from "../../components/Navbar.vue";
import TableBankAccount from "../../components/TableBankAccount.vue";
import Pagination from "../../components/Pagination.vue";

import { mapActions, mapState } from "pinia";
import { useBankAccountStore } from "../../stores/bank-accounts";

export default {
    components: {
        Navbar,
        TableBankAccount,
        Pagination,
    },
    data() {
        return {
            search: {
                name: "",
            },
            filter_name: "",
            navbar: {
                title: "Bank Accounts",
                link: null,
            },
        };
    },
    computed: {
        ...mapState(useBankAccountStore, ["bank_accounts", "pagination"]),
        params: function () {
            return {
                page: 1,
                per_page: 5,
                name: this.search.name,
                include: "bank",
            };
        },
    },
    watch: {
        filter_name(value) {
            this.search.name = value;
            this.params.page = 1;
            this.loadBankAccounts();
        },
    },
    created() {
        document.title = `Admin Shayna - ${this.$route.meta.title}`;
        this.loadBankAccounts();
    },
    methods: {
        ...mapActions(useBankAccountStore, ["get", "delete", "changeStatus"]),
        async loadBankAccounts(value) {
            this.params.page = value != null ? value : this.params.page;

            await this.get(this.params);
        },
        async changePage(value) {
            await this.loadBankAccounts(value);
        },
        async handleDelete(id) {
            await this.delete(id);
            await this.loadBankAccounts();
        },
        async handleChangeStatus(id) {
            await this.changeStatus(id);
            await this.loadBankAccounts(1);
        },
    },
};
</script>
