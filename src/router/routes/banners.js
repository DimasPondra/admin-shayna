import AuthMiddleware from "../../middleware/auth";

export default [
    {
        path: "/banners",
        name: "banner",
        component: () => import("../../views/banners/Banner.vue"),
        meta: {
            title: "Banners",
            name_page: "banners",
            middleware: [AuthMiddleware],
        },
    },
    {
        path: "/banners/create",
        name: "create-banner",
        component: () => import("../../views/banners/CreateBanner.vue"),
        meta: {
            title: "Create Banner",
            name_page: "banners",
            middleware: [AuthMiddleware],
        },
    },
];
