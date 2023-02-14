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

            <h5 class="sidebar-title">Products</h5>

            <router-link
                to="/product-categories"
                class="sidebar-item"
                :class="this.$route.meta.name_page == 'product-categories' ? 'active' : ''"
            >
                <font-awesome-icon icon="fa-solid fa-note-sticky" />
                <span>Product Category</span>
            </router-link>

            <router-link
                to="/products"
                class="sidebar-item"
                :class="this.$route.meta.name_page == 'products' ? 'active' : ''"
            >
                <font-awesome-icon icon="fa-solid fa-note-sticky" />
                <span>Product</span>
            </router-link>

            <h5 class="sidebar-title">Others</h5>

            <router-link to="/form" class="sidebar-item" :class="this.$route.meta.name_page == 'form' ? 'active' : ''">
                <font-awesome-icon icon="fa-solid fa-note-sticky" />
                <span>Form</span>
            </router-link>

            <router-link
                to="/table"
                class="sidebar-item"
                :class="this.$route.meta.name_page == 'table' ? 'active' : ''"
            >
                <font-awesome-icon icon="fa-solid fa-table-list" />
                <span>Table</span>
            </router-link>

            <router-link
                to="/detail"
                class="sidebar-item"
                :class="this.$route.meta.name_page == 'detail' ? 'active' : ''"
            >
                <font-awesome-icon icon="fa-solid fa-file-lines" />
                <span>Details</span>
            </router-link>

            <a href="#" class="sidebar-item">
                <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
                <span>Logout</span>
            </a>
        </aside>
    </div>
</template>

<script>
export default {
    props: {
        navbar: "",
    },
    methods: {
        toggleNavbar() {
            this.$emit("closed", "close");
        },
    },
};
</script>
