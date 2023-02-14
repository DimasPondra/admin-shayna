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
                    <form action="" method="GET">
                        <div class="row d-flex">
                            <div class="col-12 col-md-3 d-flex">
                                <input
                                    type="text"
                                    class="form-control border-0 shadow-sm"
                                    name="name"
                                    value=""
                                    placeholder="Search name"
                                />
                            </div>
                            <div class="col-12 col-md-2 d-grid d-md-flex mt-3 mt-md-0">
                                <button class="btn btn-sm btn-warning">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </button>
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
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="product in products" :key="product.id">
                                        <td>{{ product.name }}</td>
                                        <td>{{ product.slug }}</td>
                                        <td>{{ product.price }}</td>
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
                                                            :to="`/products/${product.id}/edit`"
                                                            class="btn btn-sm btn-link w-100 text-start"
                                                            >Edit</router-link
                                                        >
                                                    </li>
                                                    <li>
                                                        <button
                                                            onclick="return confirm('Are you sure to delete?')"
                                                            @click="handleDelete(product.id)"
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

export default {
    data() {
        return {
            products: Array,
        };
    },
    created() {
        this.loadData();
        document.title = `Admin Shayna - ${this.$route.meta.title}`;
    },
    methods: {
        async loadData() {
            try {
                const response = await axios.get("products");
                this.products = response.data.data;
            } catch (error) {
                console.error(error);
            }
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
    },
};
</script>
