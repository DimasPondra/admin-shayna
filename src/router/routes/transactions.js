import AuthMiddleware from "../../middleware/auth";

export default [
    {
        path: "/transactions",
        name: "transaction",
        component: () => import("../../views/transactions/Transaction.vue"),
        meta: {
            title: "Transactions",
            name_page: "transactions",
            middleware: [AuthMiddleware],
        },
    },
    {
        path: "/transactions/:id/show",
        name: "show-transaction",
        component: () => import("../../views/transactions/ShowTransaction.vue"),
        meta: {
            title: "Show Transaction",
            name_page: "transactions",
            middleware: [AuthMiddleware],
        },
    },
];
