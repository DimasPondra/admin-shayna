<template>
    <div class="col-12 col-xl-9">
        <Navbar :navbar="navbar" @clicked="$emit('hide', 'open')" />

        <div class="content">
            <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <h2 class="content-title mb-4">List User</h2>
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
                            <TableUser :users="users" />

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
import TableUser from "../../components/TableUser.vue";
import Pagination from "../../components/Pagination.vue";
import { mapState } from "pinia";
import { useAuthStore } from "../../stores/auth";

export default {
    components: {
        Navbar,
        TableUser,
        Pagination,
    },
    data() {
        return {
            users: [],
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
                title: "Users",
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

            const response = await axios.get("users", {
                params: this.params,
                headers: {
                    Authorization: this.token,
                },
            });
            this.users = response.data.data;

            this.pagination.page = response.data.meta.current_page;
            this.pagination.total = response.data.meta.total;
            this.pagination.per_page = response.data.meta.per_page;
        },
        changePage(value) {
            this.loadData(value);
        },
    },
};
</script>
