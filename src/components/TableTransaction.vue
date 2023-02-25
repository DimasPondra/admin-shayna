<template>
    <table class="table">
        <thead>
            <tr>
                <th>Uuid</th>
                <th>Total</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="transaction in transactions" :key="transaction.id">
                <td>{{ transaction.uuid }}</td>
                <td>{{ transaction.total }}</td>
                <td>{{ transaction.status }}</td>
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
                                    :to="`/transactions/${transaction.id}/show`"
                                    class="btn btn-sm btn-link w-100 text-start"
                                    >Show</router-link
                                >
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
        transactions: Array,
    },
};
</script>
