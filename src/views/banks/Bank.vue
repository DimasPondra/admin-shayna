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
                                v-model="search_name"
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
import axios from "axios";
import { useToast } from "vue-toastification";
import Navbar from "../../components/Navbar.vue";
import TableBank from "../../components/TableBank.vue";
import Pagination from "../../components/Pagination.vue";
import { mapState } from "pinia";
import { useAuthStore } from "../../stores/auth";

export default {
    components: {
        Navbar,
        TableBank,
        Pagination,
    },
    data() {
        return {
            banks: [],
            pagination: {
                page: 1,
                total: 0,
                per_page: 5,
                option: {
                    chunk: 3,
                    chunksNavigation: "scroll",
                    hideCount: true,
                },
            },
            search: {
                name: "",
            },
            search_name: "",
            navbar: {
                title: "Banks",
                link: null,
            },
        };
    },
    computed: {
        params: function () {
            return {
                page: this.pagination.page,
                per_page: this.pagination.per_page,
                name: this.search.name,
            };
        },
        ...mapState(useAuthStore, ["token"]),
    },
    watch: {
        search_name(value) {
            this.search.name = value;
            this.pagination.page = 1;
            this.loadData();
        },
    },
    created() {
        this.loadData();
        document.title = `Admin Shayna - ${this.$route.meta.title}`;
    },
    methods: {
        async loadData(value) {
            this.params.page = value != null ? value : this.params.page;

            const response = await axios.get("banks", {
                params: this.params,
                headers: {
                    Authorization: this.token,
                },
            });
            this.banks = response.data.data;

            this.pagination.page = response.data.meta.current_page;
            this.pagination.total = response.data.meta.total;
            this.pagination.per_page = response.data.meta.per_page;
        },
        async handleDelete(id) {
            try {
                await axios.delete(`banks/${id}/delete`, {
                    headers: {
                        Authorization: this.token,
                    },
                });
                this.loadData();

                const toast = useToast();
                toast.success("successfully deleted.");
            } catch (error) {
                console.error(error);
            }
        },
        changePage(value) {
            this.loadData(value);
        },
    },
};
</script>
