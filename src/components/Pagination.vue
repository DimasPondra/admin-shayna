<template>
    <div class="d-flex mt-4 justify-content-end">
        <pagination
            v-model="pagination.page"
            :records="pagination.total"
            :per-page="pagination.per_page"
            @paginate="changePage($event)"
            :options="pagination.option"
        />
    </div>
</template>

<script>
export default {
    props: {
        pagination: Object,
    },
    methods: {
        changePage(value) {
            this.$emit("current_page", value);
        },
    },
};
</script>
