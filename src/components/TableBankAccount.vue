<template>
    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Number</th>
                <th>Bank</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="bank_account in bank_accounts" :key="bank_account.id">
                <td>{{ bank_account.name }}</td>
                <td>{{ bank_account.number }}</td>
                <td>{{ bank_account.bank.name }}</td>
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
                                <router-link
                                    :to="`/bank-accounts/${bank_account.id}/edit`"
                                    class="btn btn-sm btn-link w-100 text-start"
                                    >Edit</router-link
                                >
                            </li>
                            <li>
                                <button
                                    onclick="return confirm('Are you sure to delete?')"
                                    @click="handleDelete(bank_account.id)"
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
        bank_accounts: Array,
    },
    methods: {
        handleDelete(value) {
            this.$emit("delete_bank_account", value);
        },
    },
};
</script>
