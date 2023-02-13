<template>
    <div class="col-12 col-lg-3 col-navbar d-none d-xl-block">
        <aside class="sidebar">
            <a href="" class="sidebar-logo">
                <div class="d-flex justify-content-start align-items-center">
                    <img src="images/global/logo.svg" alt="logo" />
                    <span>Admin Panel</span>
                </div>

                <button id="toggle-navbar" onclick="toggleNavbar()">
                    <img src="" alt="" />
                </button>
            </a>

            <h5 class="sidebar-title">Daily Use</h5>

            <a href="" class="sidebar-item active">
                <font-awesome-icon icon="fa-solid fa-house" />
                <span>Overview</span>
            </a>

            <h5 class="sidebar-title">Others</h5>

            <a href="" class="sidebar-item">
                <font-awesome-icon icon="fa-solid fa-note-sticky" />
                <span>Form</span>
            </a>

            <a href="" class="sidebar-item">
                <font-awesome-icon icon="fa-solid fa-table-list" />
                <span>Table</span>
            </a>

            <a href="details.html" class="sidebar-item">
                <font-awesome-icon icon="fa-solid fa-file-lines" />
                <span>Details</span>
            </a>

            <a href="#" class="sidebar-item">
                <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
                <span>Logout</span>
            </a>
        </aside>
    </div>
</template>
