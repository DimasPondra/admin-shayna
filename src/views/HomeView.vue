<template>
    <div class="col-12 col-xl-9">
        <div class="nav">
            <div class="d-flex justify-content-between align-items-center w-100 mb-3 mb-md-0">
                <div class="d-flex justify-content-start align-items-center">
                    <button id="toggle-navbar" onclick="toggleNavbar()">
                        <font-awesome-icon icon="fa-solid fa-bars" />
                    </button>
                    <h2 class="nav-title">Overview</h2>
                </div>
                <button class="btn-notif d-block d-md-none">
                    <font-awesome-icon icon="fa-solid fa-bell" />
                </button>
            </div>

            <div class="d-flex justify-content-between align-items-center nav-input-container">
                <div class="nav-input-group">
                    <input type="text" class="nav-input" placeholder="Search people, team, project" />
                    <button class="btn-nav-input"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
                </div>

                <button class="btn-notif d-none d-md-block">
                    <font-awesome-icon icon="fa-solid fa-bell" />
                </button>
            </div>
        </div>

        <div class="content">
            <div class="row">
                <div class="col-12">
                    <h2 class="content-title">Statistics</h2>
                    <h5 class="content-desc mb-4">Your team powers</h5>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="statistics-card simple">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex flex-column justify-content-around align-items-start employee-stat">
                                <h5 class="content-desc">In Total</h5>

                                <h3 class="statistics-value">425,000</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="statistics-card simple">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex flex-column justify-content-around align-items-start employee-stat">
                                <h5 class="content-desc">Active</h5>

                                <h3 class="statistics-value">205,399</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="statistics-card simple">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex flex-column justify-content-around align-items-start employee-stat">
                                <h5 class="content-desc">Inactive</h5>

                                <h3 class="statistics-value">142,593</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-5 pb-5">
                <div class="col-12">
                    <h2 class="content-title">People</h2>
                    <h5 class="content-desc mb-4">The rangers</h5>
                </div>

                <div class="col-6 col-md-4 col-lg-3">
                    <div class="d-flex flex-column justify-content-between align-items-center employee-card w-100">
                        <img src="../assets/images/employee/photo.png" alt="employee-image" class="employee-img" />

                        <div class="d-flex flex-column justify-content-center align-items-center mt-3">
                            <h4 class="employee-name">Andini Danna</h4>

                            <p class="employee-role">Product Designer</p>
                        </div>

                        <div class="d-flex justify-content-center align-items-center employee-status verified">
                            <div class="employee-status-image">
                                <font-awesome-icon icon="fa-solid fa-user-check" />
                            </div>

                            <span>Verified</span>
                        </div>
                    </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3">
                    <div class="d-flex flex-column justify-content-between align-items-center employee-card w-100">
                        <img src="../assets/images/employee/photo-1.png" alt="employee-image" class="employee-img" />

                        <div class="d-flex flex-column justify-content-center align-items-center mt-3">
                            <h4 class="employee-name">Ferrari Three</h4>

                            <p class="employee-role">Quality Manager</p>
                        </div>

                        <div class="d-flex justify-content-center align-items-center employee-status verified">
                            <div class="employee-status-image">
                                <font-awesome-icon icon="fa-solid fa-user-check" />
                            </div>

                            <span>Verified</span>
                        </div>
                    </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3">
                    <div class="d-flex flex-column justify-content-between align-items-center employee-card w-100">
                        <img src="../assets/images/employee/photo-2.png" alt="employee-image" class="employee-img" />

                        <div class="d-flex flex-column justify-content-center align-items-center mt-3">
                            <h4 class="employee-name">Sapiire Muke</h4>

                            <p class="employee-role">iOS Engineer</p>
                        </div>

                        <div class="d-flex justify-content-center align-items-center employee-status unverified">
                            <a href="#">Verify Now</a>
                        </div>
                    </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3">
                    <div class="d-flex flex-column justify-content-between align-items-center employee-card w-100">
                        <img src="../assets/images/employee/photo-3.png" alt="employee-image" class="employee-img" />

                        <div class="d-flex flex-column justify-content-center align-items-center mt-3">
                            <h4 class="employee-name">Mw Kemanna</h4>

                            <p class="employee-role">Website Developer</p>
                        </div>

                        <div class="d-flex justify-content-center align-items-center employee-status verified">
                            <div class="employee-status-image">
                                <font-awesome-icon icon="fa-solid fa-user-check" />
                            </div>

                            <span>Verified</span>
                        </div>
                    </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3">
                    <div class="d-flex flex-column justify-content-between align-items-center employee-card w-100">
                        <img src="../assets/images/employee/photo-4.png" alt="employee-image" class="employee-img" />

                        <div class="d-flex flex-column justify-content-center align-items-center mt-3">
                            <h4 class="employee-name">Onna Appa</h4>

                            <p class="employee-role">Product Designer</p>
                        </div>

                        <div class="d-flex justify-content-center align-items-center employee-status verified">
                            <div class="employee-status-image">
                                <font-awesome-icon icon="fa-solid fa-user-check" />
                            </div>

                            <span>Verified</span>
                        </div>
                    </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3">
                    <div class="d-flex flex-column justify-content-between align-items-center employee-card w-100">
                        <img src="../assets/images/employee/photo-5.png" alt="employee-image" class="employee-img" />

                        <div class="d-flex flex-column justify-content-center align-items-center mt-3">
                            <h4 class="employee-name">Hehe Nadiia</h4>

                            <p class="employee-role">Quality Manager</p>
                        </div>

                        <div class="d-flex justify-content-center align-items-center employee-status verified">
                            <div class="employee-status-image">
                                <font-awesome-icon icon="fa-solid fa-user-check" />
                            </div>

                            <span>Verified</span>
                        </div>
                    </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3">
                    <div class="d-flex flex-column justify-content-between align-items-center employee-card w-100">
                        <img src="../assets/images/employee/photo-6.png" alt="employee-image" class="employee-img" />

                        <div class="d-flex flex-column justify-content-center align-items-center mt-3">
                            <h4 class="employee-name">Jamboel</h4>

                            <p class="employee-role">iOS Engineer</p>
                        </div>

                        <div class="d-flex justify-content-center align-items-center employee-status unverified">
                            <a href="#">Verify Now</a>
                        </div>
                    </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3">
                    <div class="d-flex flex-column justify-content-between align-items-center employee-card w-100">
                        <img src="../assets/images/employee/photo-7.png" alt="employee-image" class="employee-img" />

                        <div class="d-flex flex-column justify-content-center align-items-center mt-3">
                            <h4 class="employee-name">Eksis Melita</h4>

                            <p class="employee-role">Website Developer</p>
                        </div>

                        <div class="d-flex justify-content-center align-items-center employee-status verified">
                            <div class="employee-status-image">
                                <font-awesome-icon icon="fa-solid fa-user-check" />
                            </div>

                            <span>Verified</span>
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
};
</script>
