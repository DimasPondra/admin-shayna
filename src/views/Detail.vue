<template>
    <div class="col-12 col-xl-9">
        <div class="nav">
            <div class="d-flex justify-content-between align-items-center w-100 mb-3 mb-md-0">
                <div class="d-flex justify-content-start align-items-center">
                    <button id="toggle-navbar" @click="toggleNavbar()">
                        <img src="" class="mb-2" alt="icon-burger" />
                    </button>
                    <h2 class="nav-title">
                        <a href="">Package</a>
                    </h2>
                </div>
            </div>
        </div>

        <div class="content">
            <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <h2 class="content-title mb-4">Detail Package</h2>
                    <div class="d-flex align-items-center">
                        <a href="" class="btn btn-sm btn-primary me-2">Edit</a>
                        <form action="#" method="">
                            <button
                                type="submit"
                                class="btn btn-sm btn-danger"
                                onclick="return confirm('Are you sure to delete?')"
                            >
                                Delete
                            </button>
                        </form>
                    </div>
                </div>

                <div class="col-12">
                    <div class="statistics-card mb-0">
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="card-title">Nusa Penida</h5>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-6 px-1">
                                <table class="table table-borderless table-responsive border-0 mb-0 mt-3">
                                    <tbody>
                                        <tr>
                                            <td width="35%">
                                                <h6 class="card-subtitle text-muted">Location</h6>
                                            </td>
                                            <td>
                                                <h6 class="card-subtitle text-muted">: Republic of Indonesia Raya</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6 class="card-subtitle text-muted">Featured Event</h6>
                                            </td>
                                            <td>
                                                <h6 class="card-subtitle text-muted">: Tari Kecak</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6 class="card-subtitle text-muted">Language</h6>
                                            </td>
                                            <td>
                                                <h6 class="card-subtitle text-muted">: Bahasa Indonesia</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6 class="card-subtitle text-muted">Foods</h6>
                                            </td>
                                            <td>
                                                <h6 class="card-subtitle text-muted">: Local Foods</h6>
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
                                                <h6 class="card-subtitle text-muted">Departure Date</h6>
                                            </td>
                                            <td>
                                                <h6 class="card-subtitle text-muted">: 31 December 2022</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6 class="card-subtitle text-muted">Duration</h6>
                                            </td>
                                            <td>
                                                <h6 class="card-subtitle text-muted">: 4D 3N</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6 class="card-subtitle text-muted">Type</h6>
                                            </td>
                                            <td>
                                                <h6 class="card-subtitle text-muted">: Open Trip</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6 class="card-subtitle text-muted">Price</h6>
                                            </td>
                                            <td>
                                                <h6 class="card-subtitle text-muted">: Rp 1.500.000</h6>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 mt-3">
                    <h2 class="content-title mb-3">Description Package</h2>
                </div>

                <div class="col-12">
                    <div class="statistics-card mb-0">
                        <div class="row">
                            <p>
                                Nusa Penida is an island southeast of Indonesia’s island Bali and a district of
                                Klungkung Regency that includes the neighbouring small island of Nusa Lembongan. The
                                Badung Strait separates the island and Bali. The interior of Nusa Penida is hilly with a
                                maximum altitude of 524 metres. It is drier than the nearby island of Bali.
                            </p>
                            <p>
                                Bali and a district of Klungkung Regency that includes the neighbouring small island of
                                Nusa Lembongan. The Badung Strait separates the island and Bali.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-12 mt-3 mb-3 d-flex justify-content-between">
                    <h2 class="content-title">Package Images</h2>
                    <div class="d-flex align-items-center">
                        <a href="" class="btn btn-sm btn-primary">Upload Image</a>
                    </div>
                </div>

                <div class="col-12">
                    <div class="statistics-card mb-3">
                        <div class="row justify-content-start">
                            <div class="col-12 col-md-3 mb-3 mb-md-0">
                                <div class="card w-100">
                                    <img
                                        src="../assets/images/employee/photo-1.png"
                                        class="thumbnail-image rounded-top"
                                        alt="package-image"
                                    />
                                    <div class="card-body p-0">
                                        <form action="#" method="POST">
                                            <button
                                                type="submit"
                                                class="btn btn-sm btn-danger w-100 rounded-0 rounded-bottom"
                                            >
                                                Delete
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-3 mb-md-0">
                                <div class="card w-100">
                                    <img
                                        src="../assets/images/employee/photo-2.png"
                                        class="thumbnail-image rounded-top"
                                        alt="package-image"
                                    />
                                    <div class="card-body p-0">
                                        <form action="#" method="POST">
                                            <button
                                                type="submit"
                                                class="btn btn-sm btn-danger w-100 rounded-0 rounded-bottom"
                                            >
                                                Delete
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-3 mb-md-0">
                                <div class="card w-100">
                                    <img
                                        src="../assets/images/employee/photo-3.png"
                                        class="thumbnail-image rounded-top"
                                        alt="package-image"
                                    />
                                    <div class="card-body p-0">
                                        <form action="#" method="POST">
                                            <button
                                                type="submit"
                                                class="btn btn-sm btn-danger w-100 rounded-0 rounded-bottom"
                                            >
                                                Delete
                                            </button>
                                        </form>
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
export default {
    created() {
        document.title = `Admin Shayna - ${this.$route.meta.title}`;
    },
    methods: {
        toggleNavbar() {
            this.$emit("clicked", "open");
        },
    },
};
</script>
