<template>
    <div class="col-12 col-xl-9">
        <Navbar :navbar="navbar" @clicked="$emit('hide', 'open')" />

        <div class="content">
            <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <h2 class="content-title mb-4">List Transaction</h2>
                </div>

                <div class="col-12">
                    <div class="statistics-card">
                        <div class="table-responsive">
                            <TableTransaction :transactions="transactions" />

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
import TableTransaction from "../../components/TableTransaction.vue";
import Pagination from "../../components/Pagination.vue";

import { mapActions, mapState } from "pinia";
import { useTransactionStore } from "../../stores/transactions";

export default {
    components: {
        Navbar,
        TableTransaction,
        Pagination,
    },
    data() {
        return {
            navbar: {
                title: "Transactions",
                link: null,
            },
        };
    },
    computed: {
        ...mapState(useTransactionStore, ["transactions", "pagination"]),
        params: function () {
            return {
                page: 1,
                per_page: 5,
            };
        },
    },
    created() {
        document.title = `Admin Shayna - ${this.$route.meta.title}`;
        this.loadTransactions();
    },
    methods: {
        ...mapActions(useTransactionStore, ["get"]),
        async loadTransactions(value) {
            this.params.page = value != null ? value : this.params.page;

            await this.get(this.params);
        },
        async changePage(value) {
            await this.loadTransactions(value);
        },
    },
};
</script>
