<template>
    <div class="col-12 col-lg-3 col-navbar d-xl-block" :class="navbar">
        <aside class="sidebar">
            <router-link to="" class="sidebar-logo">
                <div class="d-flex justify-content-start align-items-center">
                    <img src="../assets/images/global/logo.svg" alt="logo" />
                    <span>Admin Panel</span>
                </div>

                <button id="toggle-navbar" @click="toggleNavbar()">
                    <font-awesome-icon icon="fa-solid fa-close" />
                </button>
            </router-link>

            <h5 class="sidebar-title">Daily Use</h5>

            <router-link to="/" class="sidebar-item" :class="this.$route.meta.name_page == 'dashboard' ? 'active' : ''">
                <font-awesome-icon icon="fa-solid fa-house" />
                <span>Overview</span>
            </router-link>

            <h5 class="sidebar-title">Banks</h5>

            <router-link
                to="/banks"
                class="sidebar-item"
                :class="this.$route.meta.name_page == 'banks' ? 'active' : ''"
            >
                <font-awesome-icon icon="fa-solid fa-building-columns" />
                <span>Bank</span>
            </router-link>

            <router-link
                to="/bank-accounts"
                class="sidebar-item"
                :class="this.$route.meta.name_page == 'bank-accounts' ? 'active' : ''"
            >
                <font-awesome-icon icon="fa-solid fa-money-check-dollar" />
                <span>Bank Account</span>
            </router-link>

            <h5 class="sidebar-title">Banners</h5>

            <router-link
                to="/banners"
                class="sidebar-item"
                :class="this.$route.meta.name_page == 'banners' ? 'active' : ''"
            >
                <font-awesome-icon icon="fa-solid fa-images" />
                <span>Banner</span>
            </router-link>

            <h5 class="sidebar-title">Products</h5>

            <router-link
                to="/product-categories"
                class="sidebar-item"
                :class="this.$route.meta.name_page == 'product-categories' ? 'active' : ''"
            >
                <font-awesome-icon icon="fa-solid fa-list" />
                <span>Product Category</span>
            </router-link>

            <router-link
                to="/products"
                class="sidebar-item"
                :class="this.$route.meta.name_page == 'products' ? 'active' : ''"
            >
                <font-awesome-icon icon="fa-solid fa-shirt" />
                <span>Product</span>
            </router-link>

            <h5 class="sidebar-title">Transactions</h5>

            <router-link
                to="/transactions"
                class="sidebar-item"
                :class="this.$route.meta.name_page == 'transactions' ? 'active' : ''"
            >
                <font-awesome-icon icon="fa-solid fa-receipt" />
                <span>Transaction</span>
            </router-link>

            <h5 class="sidebar-title">Users</h5>

            <router-link
                to="/users"
                class="sidebar-item"
                :class="this.$route.meta.name_page == 'users' ? 'active' : ''"
            >
                <font-awesome-icon icon="fa-solid fa-user" />
                <span>User</span>
            </router-link>

            <h5 class="sidebar-title">Others</h5>

            <button @click="handleLogout" class="sidebar-item border-0">
                <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
                <span>Logout</span>
            </button>
        </aside>
    </div>
</template>

<script>
import { mapActions } from "pinia";
import { useAuthStore } from "../stores/auth";

export default {
    props: {
        navbar: "",
    },
    methods: {
        toggleNavbar() {
            this.$emit("closed", "close");
        },
        ...mapActions(useAuthStore, ["logout"]),
        handleLogout() {
            this.logout();
        },
    },
};
</script>
