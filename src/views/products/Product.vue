<template>
    <div class="col-12 col-xl-9">
        <div class="nav">
            <div class="d-flex justify-content-between align-items-center w-100 mb-3 mb-md-0">
                <div class="d-flex justify-content-start align-items-center">
                    <button id="toggle-navbar" @click="toggleNavbar()">
                        <font-awesome-icon icon="fa-solid fa-bars" />
                    </button>
                    <h2 class="nav-title">Products</h2>
                </div>
            </div>
        </div>

        <div class="content">
            <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <h2 class="content-title mb-4">List Product</h2>
                    <div class="btn mb-2 mb-md-0">
                        <router-link to="/products/create" class="btn btn-sm btn-primary">Add new product</router-link>
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
                            <TableProduct :products="products" @delete_product="handleDelete" />

                            <Pagination :pagination="pagination" @current_page="changePage" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script></script>

<script>
import "@popperjs/core";
import "bootstrap/dist/js/bootstrap.bundle";
import axios from "axios";
import { useToast } from "vue-toastification";
import TableProduct from "../../components/TableProduct.vue";
import Pagination from "../../components/Pagination.vue";

export default {
    components: {
        TableProduct,
        Pagination,
    },
    data() {
        return {
            products: Array,
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

            const response = await axios.get("products", {
                params: this.params,
            });
            this.products = response.data.data;

            this.pagination.page = response.data.meta.current_page;
            this.pagination.total = response.data.meta.total;
            this.pagination.per_page = response.data.meta.per_page;
        },
        async handleDelete(id) {
            try {
                await axios.delete(`products/${id}/delete`);
                this.loadData();

                const toast = useToast();
                toast.success("successfully deleted.");
            } catch (error) {
                console.error(error);
            }
        },
        toggleNavbar() {
            this.$emit("clicked", "open");
        },
        changePage(value) {
            this.loadData(value);
        },
    },
};
</script>
