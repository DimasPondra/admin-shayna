import AuthMiddleware from "../../middleware/auth";

export default [
    {
        path: "/banks",
        name: "bank",
        component: () => import("../../views/banks/Bank.vue"),
        meta: {
            title: "Product Categories",
            name_page: "banks",
            middleware: [AuthMiddleware],
        },
    },
    {
        path: "/banks/create",
        name: "create-bank",
        component: () => import("../../views/banks/CreateBank.vue"),
        meta: {
            title: "Create Product Category",
            name_page: "banks",
            middleware: [AuthMiddleware],
        },
    },
    {
        path: "/banks/:id/edit",
        name: "edit-bank",
        component: () => import("../../views/banks/EditBank.vue"),
        meta: {
            title: "Edit Product Category",
            name_page: "banks",
            middleware: [AuthMiddleware],
        },
    },
];
