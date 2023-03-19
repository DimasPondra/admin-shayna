<template>
    <div class="col-12 col-xl-9">
        <Navbar :navbar="navbar" @clicked="$emit('hide', 'open')" />

        <div class="content">
            <div class="row">
                <div class="col-12">
                    <h2 class="content-title">Statistics</h2>
                    <!-- <h5 class="content-desc mb-4">Your team powers</h5> -->
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="statistics-card simple">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex flex-column justify-content-around align-items-start employee-stat">
                                <h5 class="content-desc">User</h5>

                                <h3 class="statistics-value">{{ dashboard.user }}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="statistics-card simple">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex flex-column justify-content-around align-items-start employee-stat">
                                <h5 class="content-desc">Product</h5>

                                <h3 class="statistics-value">{{ dashboard.product }}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="statistics-card simple">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex flex-column justify-content-around align-items-start employee-stat">
                                <h5 class="content-desc">Transaction Pending</h5>

                                <h3 class="statistics-value">{{ dashboard.pending_transaction }}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="statistics-card simple">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex flex-column justify-content-around align-items-start employee-stat">
                                <h5 class="content-desc">Transaction Success</h5>

                                <h3 class="statistics-value">{{ dashboard.success_transaction }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { mapActions, mapState } from "pinia";
import { useDashboardStore } from "../stores/dashboard";

export default {
    components: {
        Navbar,
    },
    data() {
        return {
            navbar: {
                title: "Overview",
                link: null,
            },
        };
    },
    computed: {
        ...mapState(useDashboardStore, ["dashboard"]),
    },
    created() {
        document.title = `Admin Shayna - ${this.$route.meta.title}`;
        this.loadDashboard();
    },
    methods: {
        ...mapActions(useDashboardStore, ["get"]),
        async loadDashboard() {
            await this.get();
        },
        toggleNavbar() {
            this.$emit("clicked", "open");
        },
    },
};
</script>
