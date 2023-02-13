<template>
    <div class="col-12 col-xl-9">
        <div class="nav">
            <div class="d-flex justify-content-between align-items-center w-100 mb-3 mb-md-0">
                <div class="d-flex justify-content-start align-items-center">
                    <button id="toggle-navbar" onclick="toggleNavbar()">
                        <img src="" class="mb-2" alt="icon" />
                    </button>
                    <h2 class="nav-title">
                        <a href="#">Form</a>
                    </h2>
                </div>
            </div>
        </div>

        <div class="content">
            <div class="row">
                <div class="col-12">
                    <h2 class="content-title mb-4">Form Detail</h2>
                </div>

                <div class="col-12 statistics-card">
                    <form action="#" method="" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group mb-3">
                                    <label for="name" class="mb-2">
                                        Name
                                        <span class="required">*</span>
                                    </label>
                                    <input type="text" class="form-control" id="name" name="name" value="" />
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group mb-3">
                                    <label for="email" class="mb-2">
                                        Email
                                        <span class="required">*</span>
                                    </label>
                                    <input type="email" class="form-control" id="email" name="email" value="" />
                                </div>
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="description" class="mb-2">
                                Description
                                <span class="required">*</span>
                            </label>
                            <textarea
                                class="form-control"
                                name="description"
                                id="description"
                                cols="30"
                                rows="10"
                            ></textarea>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group mb-3">
                                    <label for="date" class="mb-2">
                                        Date
                                        <span class="required">*</span>
                                    </label>
                                    <input type="date" class="form-control" id="date" name="date" value="" />
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group mb-3">
                                    <label for="password" class="mb-2">
                                        Password
                                        <span class="required">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="password"
                                        name="password"
                                        value=""
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group mb-3">
                                    <label for="type" class="mb-2"> Type </label>
                                    <select name="type" id="type" class="form-select">
                                        <option value="" selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group mb-3">
                                    <label for="price" class="mb-2">
                                        Price
                                        <span class="required">*</span>
                                    </label>
                                    <input type="number" class="form-control" id="price" name="price" value="" />
                                </div>
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="file" class="mb-2">
                                Image
                                <span class="required">*</span>
                            </label>
                            <input type="file" name="file" id="file" class="form-control" />
                        </div>

                        <div class="d-flex justify-content-end">
                            <button type="submit" class="btn btn-sm btn-success">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
