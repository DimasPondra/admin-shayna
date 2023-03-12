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

            <div v-if="file.url != ''">
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
import axios from "axios";
import { useToast } from "vue-toastification";
import { mapState } from "pinia";
import { useAuthStore } from "../stores/auth";

export default {
    data() {
        return {
            banner: {
                id: null,
                name: "",
                description: "",
                file_id: null,
            },
            file: {
                id: null,
                url: "",
            },
            folder_name: "banners",
        };
    },
    computed: {
        params: function () {
            return {
                include: "file",
            };
        },
        ...mapState(useAuthStore, ["token"]),
    },
    created() {
        this.loadProduct();
    },
    methods: {
        async loadProduct() {
            if (this.$route.params.id != undefined) {
                const response = await axios.get(`banners/${this.$route.params.id}/show`, {
                    params: this.params,
                    headers: {
                        Authorization: this.token,
                    },
                });
                const data = response.data.data;

                this.banner.id = data.id;
                this.banner.name = data.name;
                this.banner.description = data.description;
                this.banner.file_id = data.file.id;
                this.file.url = data.file.url;
            }
        },
        async handleSubmit() {
            const toast = useToast();

            try {
                if (this.banner.id == null) {
                    await axios.post("banners/store", this.banner, {
                        headers: {
                            Authorization: this.token,
                        },
                    });

                    toast.success("successfully created.");
                }

                this.clearForm();
                this.$router.push("/banners");
            } catch (error) {
                const data = error.response.data;
                if (data.message != null) {
                    toast.error(data.message);
                }
            }
        },
        clearForm() {
            this.banner.id = null;
            this.banner.name = "";
            this.banner.description = "";
            this.banner.file_id = null;

            this.file.id = null;
            this.file.url = "";
        },
        async handleUpload(event) {
            const toast = useToast();

            let form = new FormData();
            let file = event.target.files;

            for (let i = 0; i < file.length; i++) {
                form.append(`files[${i}]`, file[i]);
            }

            form.append("folder_name", this.folder_name);

            try {
                const response = await axios.post("files/store", form, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: this.token,
                    },
                });

                this.file = response.data.data[0];
                this.banner.file_id = this.file.id;

                toast.success("image successfully uploaded.");
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
