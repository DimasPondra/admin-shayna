import AuthMiddleware from "../../middleware/auth";

export default [
    {
        path: "/users",
        name: "user",
        component: () => import("../../views/users/User.vue"),
        meta: {
            title: "Users",
            name_page: "users",
            middleware: [AuthMiddleware],
        },
    },
];
