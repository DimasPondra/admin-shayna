<template>
    <div class="col-12 col-xl-9">
        <Navbar :navbar="navbar" @clicked="$emit('hide', 'open')" />

        <div class="content">
            <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <h2 class="content-title mb-4">List Bank</h2>
                    <div class="btn mb-2 mb-md-0">
                        <router-link to="/banks/create" class="btn btn-sm btn-primary">Add new bank</router-link>
                    </div>
                </div>

                <div class="col-12 search-menu mb-4">
                    <div class="row d-flex">
                        <div class="col-12 col-md-3 d-flex">
                            <input
                                type="text"
                                class="form-control border-0 shadow-sm"
                                name="name"
                                v-model="filter_name"
                                placeholder="Search name"
                            />
                        </div>
                    </div>
                </div>

                <div class="col-12">
                    <div class="statistics-card">
                        <div class="table-responsive">
                            <TableBank :banks="banks" @delete_bank="handleDelete" />

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
import TableBank from "../../components/TableBank.vue";
import Pagination from "../../components/Pagination.vue";

import { mapActions, mapState } from "pinia";
import { useBankStore } from "../../stores/banks";

export default {
    components: {
        Navbar,
        TableBank,
        Pagination,
    },
    data() {
        return {
            search: {
                name: "",
            },
            filter_name: "",
            navbar: {
                title: "Banks",
                link: null,
            },
        };
    },
    computed: {
        ...mapState(useBankStore, ["banks", "pagination"]),
        params: function () {
            return {
                page: 1,
                per_page: 5,
                name: this.search.name,
            };
        },
    },
    watch: {
        filter_name(value) {
            this.search.name = value;
            this.params.page = 1;
            this.loadBanks();
        },
    },
    created() {
        document.title = `Admin Shayna - ${this.$route.meta.title}`;
        this.loadBanks();
    },
    methods: {
        ...mapActions(useBankStore, ["get", "delete"]),
        async loadBanks(value) {
            this.params.page = value != null ? value : this.params.page;

            await this.get(this.params);
        },
        async changePage(value) {
            await this.loadBanks(value);
        },
        async handleDelete(id) {
            await this.delete(id);
            await this.loadBanks(1);
        },
    },
};
</script>
