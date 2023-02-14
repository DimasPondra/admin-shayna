import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import ProductCategory from "./routes/product-categories";
import Product from "./routes/products";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
            meta: {
                title: "Dashboard",
                name_page: "dashboard",
            },
        },
        {
            path: "/form",
            name: "form",
            component: () => import("../views/Form.vue"),
            meta: {
                title: "Form",
                name_page: "form",
            },
        },
        {
            path: "/table",
            name: "table",
            component: () => import("../views/Table.vue"),
            meta: {
                title: "Table",
                name_page: "table",
            },
        },
        {
            path: "/detail",
            name: "detail",
            component: () => import("../views/Detail.vue"),
            meta: {
                title: "Detail",
                name_page: "detail",
            },
        },
        ...ProductCategory,
        ...Product,
    ],
});

export default router;
