<template>
    <div class="col-12 col-xl-9">
        <Navbar :navbar="navbar" @clicked="$emit('hide', 'open')" />

        <div class="content">
            <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <h2 class="content-title mb-4">List Banner</h2>
                    <div class="btn mb-2 mb-md-0">
                        <router-link to="/banners/create" class="btn btn-sm btn-primary">Add new banner</router-link>
                    </div>
                </div>

                <div class="col-12">
                    <div class="statistics-card">
                        <div class="table-responsive">
                            <TableBanner :banners="banners" @delete_banner="handleDelete" />

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
import TableBanner from "../../components/TableBanner.vue";
import Pagination from "../../components/Pagination.vue";

import { mapActions, mapState } from "pinia";
import { useBannerStore } from "../../stores/banners";

export default {
    components: {
        Navbar,
        TableBanner,
        Pagination,
    },
    data() {
        return {
            navbar: {
                title: "Banners",
                link: null,
            },
        };
    },
    computed: {
        ...mapState(useBannerStore, ["banners", "pagination"]),
        params: function () {
            return {
                page: 1,
                per_page: 5,
                include: "file",
            };
        },
    },
    created() {
        document.title = `Admin Shayna - ${this.$route.meta.title}`;
        this.loadBanners();
    },
    methods: {
        ...mapActions(useBannerStore, ["get", "delete"]),
        async loadBanners(value) {
            this.params.page = value != null ? value : this.params.page;

            await this.get(this.params);
        },
        async changePage(value) {
            await this.loadBanners(value);
        },
        async handleDelete(id) {
            await this.delete(id);
            await this.loadBanners();
        },
    },
};
</script>
