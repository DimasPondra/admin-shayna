<template>
    <div class="col-12 col-xl-9">
        <Navbar :navbar="navbar" @clicked="$emit('hide', 'open')" />

        <div class="content">
            <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <h2 class="content-title mb-4">Detail Transaction</h2>
                </div>

                <div class="col-12">
                    <div class="statistics-card mb-0">
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="card-title">{{ transaction.uuid }}</h5>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-6 px-1">
                                <table class="table table-borderless table-responsive border-0 mb-0 mt-3">
                                    <tbody>
                                        <tr>
                                            <td width="35%">
                                                <h6 class="card-subtitle text-muted">Name</h6>
                                            </td>
                                            <td>
                                                <h6 class="card-subtitle text-muted">: {{ transaction.user.name }}</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6 class="card-subtitle text-muted">Email</h6>
                                            </td>
                                            <td>
                                                <h6 class="card-subtitle text-muted">: {{ transaction.user.email }}</h6>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-12 col-md-6 px-1">
                                <table class="table table-borderless table-responsive border-0 mb-0 mt-3">
                                    <tbody>
                                        <tr>
                                            <td width="35%">
                                                <h6 class="card-subtitle text-muted">Sub Total</h6>
                                            </td>
                                            <td>
                                                <h6 class="card-subtitle text-muted">: {{ transaction.sub_total }}</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6 class="card-subtitle text-muted">Total</h6>
                                            </td>
                                            <td>
                                                <h6 class="card-subtitle text-muted">: {{ transaction.total }}</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6 class="card-subtitle text-muted">Status</h6>
                                            </td>
                                            <td>
                                                <h6 class="card-subtitle text-muted">: {{ transaction.status }}</h6>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 mt-3 mb-3 d-flex justify-content-between">
                    <h2 class="content-title">Products</h2>
                </div>

                <div class="col-12">
                    <div class="statistics-card mb-3">
                        <div class="row justify-content-start">
                            <div
                                class="col-12 col-md-3 mb-3 mb-md-0"
                                v-for="detail in transaction.details"
                                :key="detail.id"
                            >
                                <div class="card w-100">
                                    <img
                                        :src="detail.product_file_url"
                                        class="thumbnail-image rounded-top"
                                        alt="product-image"
                                    />
                                    <div class="card-body">
                                        <h5 class="card-title">{{ detail.product_name }}</h5>
                                        <span>{{ detail.price }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import axios from "axios";
import { mapState } from "pinia";
import { useAuthStore } from "../../stores/auth";

export default {
    components: {
        Navbar,
    },
    data() {
        return {
            navbar: {
                title: "Transaction",
                link: "/transactions",
            },
            transaction: {
                uuid: "",
                sub_total: "",
                total: "",
                status: "",
                user: {
                    name: "",
                    email: "",
                },
                details: [],
            },
        };
    },
    computed: {
        params: function () {
            return {
                include: "user,transaction_details",
            };
        },
        ...mapState(useAuthStore, ["token"]),
    },
    created() {
        this.loadTransaction();
        document.title = `Admin Shayna - ${this.$route.meta.title}`;
    },
    methods: {
        async loadTransaction() {
            if (this.$route.params.id != undefined) {
                const response = await axios.get(`transactions/${this.$route.params.id}/show`, {
                    params: this.params,
                    headers: {
                        Authorization: this.token,
                    },
                });
                const data = response.data.data;

                this.transaction.uuid = data.uuid;
                this.transaction.sub_total = data.sub_total;
                this.transaction.total = data.total;
                this.transaction.status = data.status;

                this.transaction.user.name = data.user.name;
                this.transaction.user.email = data.user.email;

                this.transaction.details = data.transaction_details;
            }
        },
        toggleNavbar() {
            this.$emit("clicked", "open");
        },
    },
};
</script>
