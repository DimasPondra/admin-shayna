import AuthMiddleware from "../../middleware/auth";

export default [
    {
        path: "/bank-accounts",
        name: "bank-account",
        component: () => import("../../views/bank-accounts/BankAccount.vue"),
        meta: {
            title: "Bank Accounts",
            name_page: "bank-accounts",
            middleware: [AuthMiddleware],
        },
    },
    {
        path: "/bank-accounts/create",
        name: "create-bank-account",
        component: () => import("../../views/bank-accounts/CreateBankAccount.vue"),
        meta: {
            title: "Create Bank Account",
            name_page: "bank-accounts",
            middleware: [AuthMiddleware],
        },
    },
    {
        path: "/bank-accounts/:id/edit",
        name: "edit-bank-account",
        component: () => import("../../views/bank-accounts/EditBankAccount.vue"),
        meta: {
            title: "Edit Bank Account",
            name_page: "bank-accounts",
            middleware: [AuthMiddleware],
        },
    },
];
