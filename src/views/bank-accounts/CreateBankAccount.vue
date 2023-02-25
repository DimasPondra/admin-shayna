<template>
    <div class="col-12 col-xl-9">
        <Navbar :navbar="navbar" @clicked="$emit('hide', 'open')" />

        <div class="content">
            <div class="row">
                <div class="col-12">
                    <h2 class="content-title mb-4">Create Bank Account</h2>
                </div>

                <FormBankAccount />
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import FormBankAccount from "../../components/FormBankAccount.vue";

export default {
    components: {
        Navbar,
        FormBankAccount,
    },
    data() {
        return {
            navbar: {
                title: "Bank Account",
                link: "/bank-accounts",
            },
        };
    },
    created() {
        document.title = `Admin Shayna - ${this.$route.meta.title}`;
    },
};
</script>
