<template>
    <div class="col-12 col-xl-9">
        <Navbar :navbar="navbar" @clicked="$emit('hide', 'open')" />

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
                                v-model="filter_name"
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

<script>
import "@popperjs/core";
import "bootstrap/dist/js/bootstrap.bundle";

import Navbar from "../../components/Navbar.vue";
import TableProduct from "../../components/TableProduct.vue";
import Pagination from "../../components/Pagination.vue";

import { mapActions, mapState } from "pinia";
import { useProductStore } from "../../stores/products";

export default {
    components: {
        Navbar,
        TableProduct,
        Pagination,
    },
    data() {
        return {
            search: {
                name: "",
            },
            filter_name: "",
            navbar: {
                title: "Products",
                link: null,
            },
        };
    },
    computed: {
        ...mapState(useProductStore, ["products", "pagination"]),
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
            this.loadProducts();
        },
    },
    created() {
        document.title = `Admin Shayna - ${this.$route.meta.title}`;
        this.loadProducts();
    },
    methods: {
        ...mapActions(useProductStore, ["get", "delete"]),
        async loadProducts(value) {
            this.params.page = value != null ? value : this.params.page;

            await this.get(this.params);
        },
        async changePage(value) {
            await this.loadProducts(value);
        },
        async handleDelete(id) {
            await this.delete(id);
            await this.loadProducts(1);
        },
    },
};
</script>
