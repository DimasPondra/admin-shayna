<template>
    <div class="col-12 col-xl-9">
        <div class="nav">
            <div class="d-flex justify-content-between align-items-center w-100 mb-3 mb-md-0">
                <div class="d-flex justify-content-start align-items-center">
                    <button id="toggle-navbar" onclick="toggleNavbar()">
                        <font-awesome-icon icon="fa-solid fa-bars" />
                    </button>
                    <h2 class="nav-title">
                        <a href="#">Table</a>
                    </h2>
                </div>
            </div>
        </div>

        <div class="content">
            <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <h2 class="content-title mb-4">List Package</h2>
                    <div class="btn mb-2 mb-md-0">
                        <a href="" class="btn btn-sm btn-primary"> Add new package </a>
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
                            <div class="col-12 col-md-3 d-flex mt-3 mt-md-0">
                                <select name="type" id="type" class="form-select">
                                    <option value="" selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
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
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Phone</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Preston Mcke</td>
                                        <td>nibh.y@protonmail.edu</td>
                                        <td>P.O. Box 483, 9557 Purus. Rd.</td>
                                        <td>(641) 751-5147</td>
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
                                                        <a href="" class="btn btn-sm btn-link w-100 text-start">Show</a>
                                                    </li>
                                                    <li>
                                                        <a href="" class="btn btn-sm btn-link w-100 text-start">Edit</a>
                                                    </li>
                                                    <li>
                                                        <form action="#" method="">
                                                            <button
                                                                onclick="return confirm('Are you sure to delete?')"
                                                                type="submit"
                                                                class="btn btn-sm btn-link w-100 text-start"
                                                            >
                                                                Delete
                                                            </button>
                                                        </form>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Paula Owen</td>
                                        <td>ultrices.iaculis@icloud.net</td>
                                        <td>Ap #413-2369 Natoque Avenue</td>
                                        <td>1-868-351-5256</td>
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
                                                        <a href="" class="btn btn-sm btn-link w-100 text-start">Show</a>
                                                    </li>
                                                    <li>
                                                        <a href="" class="btn btn-sm btn-link w-100 text-start">Edit</a>
                                                    </li>
                                                    <li>
                                                        <form action="#" method="">
                                                            <button
                                                                onclick="return confirm('Are you sure to delete?')"
                                                                type="submit"
                                                                class="btn btn-sm btn-link w-100 text-start"
                                                            >
                                                                Delete
                                                            </button>
                                                        </form>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Chase Aguirre</td>
                                        <td>eget.nisi@protonmail.net</td>
                                        <td>Ap #722-2847 Donec Rd.</td>
                                        <td>1-453-253-3184</td>
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
                                                        <a href="" class="btn btn-sm btn-link w-100 text-start">Show</a>
                                                    </li>
                                                    <li>
                                                        <a href="" class="btn btn-sm btn-link w-100 text-start">Edit</a>
                                                    </li>
                                                    <li>
                                                        <form action="#" method="">
                                                            <button
                                                                onclick="return confirm('Are you sure to delete?')"
                                                                type="submit"
                                                                class="btn btn-sm btn-link w-100 text-start"
                                                            >
                                                                Delete
                                                            </button>
                                                        </form>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Nathan Whitfield</td>
                                        <td>ultricies@outlook.edu</td>
                                        <td>135-9260 Eu Street</td>
                                        <td>(370) 448-6648</td>
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
                                                        <a href="" class="btn btn-sm btn-link w-100 text-start">Show</a>
                                                    </li>
                                                    <li>
                                                        <a href="" class="btn btn-sm btn-link w-100 text-start">Edit</a>
                                                    </li>
                                                    <li>
                                                        <form action="#" method="">
                                                            <button
                                                                onclick="return confirm('Are you sure to delete?')"
                                                                type="submit"
                                                                class="btn btn-sm btn-link w-100 text-start"
                                                            >
                                                                Delete
                                                            </button>
                                                        </form>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Nash Villarreal</td>
                                        <td>dolor.nonummy.ac@aol.ca</td>
                                        <td>7831 Dui. Street</td>
                                        <td>1-219-586-7864</td>
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
                                                        <a href="" class="btn btn-sm btn-link w-100 text-start">Show</a>
                                                    </li>
                                                    <li>
                                                        <a href="" class="btn btn-sm btn-link w-100 text-start">Edit</a>
                                                    </li>
                                                    <li>
                                                        <form action="#" method="">
                                                            <button
                                                                onclick="return confirm('Are you sure to delete?')"
                                                                type="submit"
                                                                class="btn btn-sm btn-link w-100 text-start"
                                                            >
                                                                Delete
                                                            </button>
                                                        </form>
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

<script>
import "@popperjs/core";
import "bootstrap/dist/js/bootstrap.bundle";
</script>
