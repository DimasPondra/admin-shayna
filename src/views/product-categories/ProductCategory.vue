<template>
    <div class="col-12 col-xl-9">
        <div class="nav">
            <div class="d-flex justify-content-between align-items-center w-100 mb-3 mb-md-0">
                <div class="d-flex justify-content-start align-items-center">
                    <button id="toggle-navbar" @click="toggleNavbar()">
                        <font-awesome-icon icon="fa-solid fa-bars" />
                    </button>
                    <h2 class="nav-title">Product Categories</h2>
                </div>
            </div>
        </div>

        <div class="content">
            <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <h2 class="content-title mb-4">List Product Category</h2>
                    <div class="btn mb-2 mb-md-0">
                        <router-link to="/product-categories/create" class="btn btn-sm btn-primary"
                            >Add new product category</router-link
                        >
                    </div>
                </div>

                <div class="col-12 search-menu mb-4">
                    <form action="" method="GET">
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
                    </form>
                </div>

                <div class="col-12">
                    <div class="statistics-card">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Slug</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="product_category in product_categories" :key="product_category.id">
                                        <td>{{ product_category.name }}</td>
                                        <td>{{ product_category.slug }}</td>
                                        <td width="10%">
                                            <div class="dropdown">
                                                <button
                                                    class="btn btn-outline-primary dropdown-toggle"
                                                    type="button"
                                                    id="dropdownMenu"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                ></button>
                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenu">
                                                    <li>
                                                        <router-link
                                                            :to="`/product-categories/${product_category.id}/edit`"
                                                            class="btn btn-sm btn-link w-100 text-start"
                                                            >Edit</router-link
                                                        >
                                                    </li>
                                                    <li>
                                                        <button
                                                            onclick="return confirm('Are you sure to delete?')"
                                                            @click="handleDelete(product_category.id)"
                                                            class="btn btn-sm btn-link w-100 text-start"
                                                        >
                                                            Delete
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

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
import Pagination from "../../components/Pagination.vue";

export default {
    components: {
        Pagination,
    },
    data() {
        return {
            product_categories: Array,
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

            try {
                const response = await axios.get("product-categories", {
                    params: this.params,
                });
                this.product_categories = response.data.data;

                this.pagination.page = response.data.meta.current_page;
                this.pagination.total = response.data.meta.total;
                this.pagination.per_page = response.data.meta.per_page;
            } catch (error) {
                console.error(error);
            }
        },
        async handleDelete(id) {
            try {
                await axios.delete(`product-categories/${id}/delete`);
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
