<template>
    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Image</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="banner in banners" :key="banner.id">
                <td>{{ banner.name }}</td>
                <td>{{ banner.description }}</td>
                <td><img :src="banner.file.url" alt="banner-image" class="img-thumbnail banner-image" /></td>
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
                                <button
                                    onclick="return confirm('Are you sure to delete?')"
                                    @click="handleDelete(banner.id)"
                                    class="btn btn-sm btn-link w-100 text-start"
                                >
                                    Delete
                                </button>
                            </li>
                        </ul>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        banners: Array,
    },
    methods: {
        handleDelete(value) {
            this.$emit("delete_banner", value);
        },
    },
};
</script>

<style scoped>
.banner-image {
    width: 250px;
    height: 100px;
    object-fit: cover;
}
</style>
