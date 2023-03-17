<template>
    <div class="col-12 statistics-card">
        <form @submit.prevent="handleSubmit">
            <div class="form-group mb-3">
                <label for="name" class="mb-2">
                    Name
                    <span class="required">*</span>
                </label>
                <input type="text" class="form-control" id="name" v-model="banner.name" />
            </div>

            <div class="form-group mb-3">
                <label for="description" class="mb-2">
                    Description
                    <span class="required">*</span>
                </label>
                <textarea
                    class="form-control"
                    v-model="banner.description"
                    id="description"
                    cols="30"
                    rows="10"
                ></textarea>
            </div>

            <div v-if="file.id != null">
                <img :src="file.url" alt="image-blog" width="150" class="rounded" />
            </div>

            <div class="form-group mb-3">
                <label for="file" class="mb-2">
                    Image
                    <span class="required">*</span>
                </label>
                <input type="file" id="file" class="form-control" @change="handleUpload" />
            </div>

            <div class="d-flex justify-content-end">
                <button class="btn btn-sm btn-success">Save</button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useFileStore } from "../stores/files";
import { useBannerStore } from "../stores/banners";

export default {
    computed: {
        ...mapState(useBannerStore, ["banner"]),
        ...mapState(useFileStore, ["file"]),
    },
    methods: {
        ...mapActions(useFileStore, ["upload"]),
        ...mapActions(useBannerStore, ["save"]),
        async handleSubmit() {
            await this.save(this.banner);

            this.clearForm();
        },
        async handleUpload(event) {
            let form = new FormData();
            let file = event.target.files;

            for (let i = 0; i < file.length; i++) {
                form.append(`files[${i}]`, file[i]);
            }

            form.append("folder_name", "banners");

            await this.upload(form);
            this.banner.file_id = await this.file.id;
        },
        clearForm() {
            this.banner = {};
            this.file = {};
        },
    },
};
</script>
